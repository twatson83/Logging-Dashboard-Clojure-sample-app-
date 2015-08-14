(ns logging-dashboard.timer
  (:require  [taoensso.encore               :as enc :refer (tracef debugf infof warnf errorf)])
)

(def timer (atom nil))

(defn stop-timer []
  (if (not (nil? @timer))
    (js/clearInterval @timer)))

(defn create-timer
  [fn period]
  (stop-timer)
  (reset! timer (js/setInterval fn period)))

