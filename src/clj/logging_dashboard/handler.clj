(ns logging-dashboard.handler
  (:require [compojure.route           :as route]
            [clojure.core.async        :as async :refer [<! <!! chan go thread go-loop]]
            [compojure.core            :refer [GET POST defroutes]]
            [ring.util.response        :refer [resource-response response content-type]]
            [ring.middleware.json      :as middleware]
            [ring.middleware.defaults  :refer [wrap-defaults api-defaults]]
            [taoensso.sente            :as sente]
            [taoensso.timbre           :as timbre :refer (tracef debugf infof warnf errorf)]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv)
  (def chsk-send!                    send-fn)
  (def connected-uids                connected-uids))

(defn unique-id
  "Return a really unique ID (for an unsecured session ID).
  No, a random number is not unique enough. Use a UUID for real!"
  []
  (rand-int 10000))

(defn session-uid
  "Convenient to extract the UID that Sente needs from the request."
  [req]
  (get-in req [:session :uid]))

(defn index
  "Handle index page request. Injects session uid if needed."
  [req]
  {:status 200
   :session (if (session-uid req)
              (:session req)
              (assoc (:session req) :uid (unique-id)))
   :body (slurp "resources/public/index.html")})

(defroutes app-routes
  (GET  "/"     req (#'index req))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (do
    (-> app-routes
        ring.middleware.keyword-params/wrap-keyword-params
        ring.middleware.params/wrap-params
        (wrap-defaults api-defaults))
    (debugf "Setup app")))

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :test/echo
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (infof "Echo: Data - %s, Uid - %s, Session - %s" ?data uid session)
    (when ?reply-fn
      (?reply-fn {:test-reply "Test data"}))))

(defn event-loop
  "Handle inbound events."
  []
  (go 
    (loop [{:keys [id ?data] :as data} 
           (<! ch-chsk)]
      (thread (event-msg-handler data))
      (recur (<! ch-chsk)))))

(defn start-broadcaster! []
    (go-loop [i 0]
      (<! (async/timeout 10000))
      (debugf (format "Broadcasting server>user: %s" @connected-uids))
      (doseq [uid (:any @connected-uids)]
        (chsk-send! uid
                    [:some/broadcast
                     {:what-is-this "A broadcast pushed from server"
                      :how-often    "Every 10 seconds"
                      :to-whom uid
                      :i i}]))
      (recur (inc i))))
