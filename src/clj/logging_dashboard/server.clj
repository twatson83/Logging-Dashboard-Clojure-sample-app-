(ns logging-dashboard.server
  (:gen-class)
  (:use [compojure.handler :only [site]]
        org.httpkit.server
        [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
        [logging-dashboard.routes :only [app-routes]]))

(defn -main
  [& args]
  (do 
    (run-server (site #'app-routes) {:port 8080})
    (infof "Server started")))
