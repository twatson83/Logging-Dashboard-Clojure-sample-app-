(ns logging-dashboard.event-handlers
  (:require [clojure.core.async        :as async :refer [<! <!! chan go thread go-loop]]
            [taoensso.sente            :as sente]
            [logging-dashboard.logs    :as logs]
            [logging-dashboard.configs :as configs]
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

(defmulti event-msg-handler :id)

(defn event-loop
  "Handle inbound events."
  []
  (go 
    (loop [{:keys [id ?data] :as data} 
           (<! ch-chsk)]
      (thread (event-msg-handler data))
      (recur (<! ch-chsk)))))

;(defn start-broadcaster! []
;(go-loop [i 0]
;  (<! (async/timeout 120000))
;  (debugf (format "Broadcasting server>user: %s" @connected-uids))
;(doseq [uid (:any @connected-uids)]
;(chsk-send! uid
;[:some/broadcast
;{:what-is-this "A broadcast pushed from server"
; :how-often    "Every 10 seconds"
; :to-whom uid
; :i i}]))
;(recur (inc i))))

; Incoming events

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event}))))

(defmethod event-msg-handler :logs/search
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (?reply-fn (logs/search ?data)))

(defmethod event-msg-handler :config/save
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (?reply-fn (configs/save ?data)))
