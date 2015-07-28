(ns logging-dashboard
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
   [cljs.core.async :as async :refer (<! >! put! chan)]
   [taoensso.encore :as enc   :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente :refer (cb-success?)]))

(debugf "ClojureScript appears to have loaded correctly.")

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" 
       {:type :auto })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) 
  (def chsk-send! send-fn) 
  (def chsk-state state))

(defmulti event-msg-handler :id)

(defn  event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (debugf "Event: %s" event)
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default 
  [{:as ev-msg :keys [event]}]
  (debugf "Unhandled event: %s" event))
      
(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (debugf "Channel socket successfully established!")
    (debugf "Channel socket state change: %s" ?data)))
      
(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (debugf "Push event from server: %s" ?data))
      
(defmethod event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (debugf "Handshake: %s" ?data)))
      

(when-let [target-el (.getElementById js/document "btn1")]
  (.addEventListener target-el "click"
                     (fn [ev]
                       (debugf "Triggering event")
                       (chsk-send! 
                        [:test/echo {:message "1234"}] 
                        10000
                        (fn [cb-reply] 
                          (debugf "Reply - %s" cb-reply))))))

