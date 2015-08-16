(ns logging-dashboard.timer)

(def timer (atom nil))

(defn stop-timer []
  (if (not (nil? @timer))
    (js/clearInterval @timer)))

(defn create-timer
  [fn period]
  (stop-timer)
  (reset! timer (js/setInterval fn period)))

