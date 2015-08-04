(ns logging-dashboard
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
   [cljs.core.async :as async :refer (<! >! put! chan)]
   [taoensso.encore :as enc   :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente :refer (cb-success?)]))

(debugf "ClojureScript appears to have loaded correctly.")

(let [rand-chsk-type (if (>= (rand) 0.5) :ajax :auto)
      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" 
      {:type   rand-chsk-type})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) 
  (def chsk-send! send-fn) 
  (def chsk-state state))

(defmulti event-msg-handler :id)

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (debugf "Event: %s" event)
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default 
  [{:as ev-msg :keys [event]}]
  (debugf "Unhandled event: %s" event))
      
(defmethod event-msg-handler :some/broadcast
  [{:as ev-msg :keys [?data]}]
  (debugf "Broadcast: %s" ?data))

(when-let [target-el (.getElementById js/document "btn1")]
  (.addEventListener target-el "click"
                     (fn [ev]
                       (debugf "Triggering event")
                       (chsk-send! 
                        [:logs/search {:query  {:match_all {}} 
                                       :sort   {:level "asc"} 
                                       :from   0 
                                       :size   100}] 
                        10000
                        (fn [cb-reply] 
                          (debugf "Reply - %s" cb-reply))))))

(def router_ (atom nil))

(defn stop-router! [] (when-let [stop-f @router_] (stop-f)))

(defn start-router! []
  (stop-router!)
  (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))

(defn start! []
  (start-router!))
 
(start!)
