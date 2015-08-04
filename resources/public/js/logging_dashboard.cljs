
(ns logging-dashboard
  (:require
   [taoensso.encore          :as enc    :refer (tracef debugf infof warnf errorf)]
   [logging-dashboard.routes :as routes :refer (init)]
   [logging-dashboard.server :as server :refer (start-server-router!)]))

(debugf "ClojureScript loaded correctly.")

(defn start! []
  (do 
    (server/start-server-router!)
    (routes/init)
    (debugf "Started App.")))
 
(start!)
