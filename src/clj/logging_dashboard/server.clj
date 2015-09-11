(ns logging-dashboard.server
  (:gen-class)
  (:use [compojure.handler :only [site]]
        org.httpkit.server
        [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
        [logging-dashboard.users :only [check-ttl]]
        [logging-dashboard.handlers.logs :only [connect]]
        [logging-dashboard.routes :only [app-routes send-messages]]))

(defn -main
  [& args]
  (do 
    (run-server (site #'app-routes) {:port 7676})
    (connect)
    (send-messages)
    (check-ttl)
    (infof "Server started")))
