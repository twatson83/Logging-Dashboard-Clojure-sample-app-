(ns logging-dashboard.server
  (:gen-class)
  (:use [compojure.handler :only [site]]
        org.httpkit.server
        [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
        [logging-dashboard.handler :only [app-routes event-loop]]))

(defn -main
  [& args]
  (do 
    (run-server (site #'app-routes) {:port 8080})
    (event-loop)
    (infof "Server started")))
