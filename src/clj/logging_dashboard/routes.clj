(ns logging-dashboard.routes
  (:require [compojure.route           :as route]
            [compojure.core            :refer [GET POST defroutes]]
            [ring.middleware.defaults  :refer [wrap-defaults api-defaults]]
            [clojure.core.async        :as async :refer [<! <!! chan go thread go-loop]]
            [taoensso.sente            :as sente]
            [logging-dashboard.repositories.logs :as log-db]
            [logging-dashboard.handlers.logs     :as log-handler]
            [logging-dashboard.repositories.configs :as configs]
            [taoensso.timbre           :as timbre :refer (tracef debugf infof warnf errorf)]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]))

(defn unique-id [] (rand-int 10000))

(defn session-uid [req] (get-in req [:session :uid]))

(defn index [req]
  {:status 200 
   :session (if (session-uid req) (:session req) (assoc (:session req) :uid (unique-id)))
   :body (slurp "resources/public/index.html")})

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv)
  (def chsk-send!                    send-fn)
  (def connected-uids                connected-uids))

(defmulti event-msg-handler :id)

(defn event-loop []
  (go (loop [{:keys [id ?data] :as data} 
             (<! ch-chsk)]
        (thread (event-msg-handler data))
        (recur (<! ch-chsk)))))

(defroutes app-routes
  (GET  "/"     req (#'index req))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app (do (-> app-routes
                 ring.middleware.keyword-params/wrap-keyword-params
                 ring.middleware.params/wrap-params
                 (wrap-defaults api-defaults))
             (event-loop)))

; Incoming events

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event}))))

(defmethod event-msg-handler :logs/search
  [{:keys [?data ?reply-fn]}]
  (?reply-fn (log-db/search ?data)))

(defmethod event-msg-handler :logs/start-streaming
  [{:keys [?data ring-req]}]
  (log-handler/start-streaming (get-in ring-req [:session :uid]) ?data))

(defmethod event-msg-handler :logs/stop-streaming
  [{:keys [ring-req]}]
  (log-handler/stop-streaming (get-in ring-req [:session :uid])))

(defmethod event-msg-handler :config/save
  [{:keys [?data ?reply-fn]}]
  (?reply-fn (configs/save ?data)))

(defmethod event-msg-handler :config/delete
  [{:keys [?data ?reply-fn]}]
  (?reply-fn (configs/delete ?data)))

(defmethod event-msg-handler :config/get-all
  [{:keys [?reply-fn]}]
  (?reply-fn (configs/get-all)))

(defn send-messages []
  (go-loop [i 0]
    (<! (async/timeout 200))
    (let [m @log-handler/messages
          message-list (vals m)]
      (when (> (count message-list) 0)
        (doseq [k (keys @log-handler/users)]      
          (if-not (nil? k)
            (chsk-send! k [:logs/messages message-list])))
        (reset! log-handler/messages (apply dissoc @log-handler/messages (keys m)))))
    (recur (inc i))))

(send-messages)

