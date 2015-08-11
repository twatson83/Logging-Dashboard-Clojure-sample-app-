(ns logging-dashboard.main
  (:require
   [taoensso.encore          :as enc    :refer (tracef debugf infof warnf errorf)]
   [logging-dashboard.server :as server :refer (start-server-router!)]))

(debugf "ClojureScript loaded correctly.")

(defn start! []
  (do 
    (debugf "Starting server router")
    (server/start-server-router!)
    (debugf "Started App.")))
 
(start!)
