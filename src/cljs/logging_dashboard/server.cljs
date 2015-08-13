(ns logging-dashboard.server
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:import [goog.history Html5History EventType])
  (:require
   [goog.events            :as events]
   [goog.history.EventType :as EventType]
   [secretary.core         :as secretary]
   [cljs.core.async        :as async  :refer (<! >! put! chan)]
   [taoensso.encore        :as enc    :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente         :as sente  :refer (cb-success?)]))

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
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default 
  [{:as ev-msg :keys [event]}])

(defn get-token []
  (str js/window.location.pathname js/window.location.search))

(defn make-history []
  (doto (Html5History.)
    (.setPathPrefix (str js/window.location.protocol
                         "//"
                         js/window.location.host))
    (.setUseFragment false)))

(defn handle-url-change [e]
  (when-not (.-isNavigation e)
    (js/window.scrollTo 0 0))
  (secretary/dispatch! (get-token)))

(defn init []
  (do 
    (doto (make-history)
      (goog.events/listen EventType.NAVIGATE
                          #(handle-url-change %))
      (.setEnabled true))))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= (get ?data :first-open?) true)
    (init)))
      
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

(defn stop-server-router! [] (when-let [stop-f @router_] (stop-f)))

(defn start-server-router! []
  (stop-server-router!)
  (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))

