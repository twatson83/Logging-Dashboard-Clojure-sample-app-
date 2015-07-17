(ns logging-dashboard.handler
  (:require [compojure.route :as route]
            [compojure.core :refer [GET defroutes]]
            [ring.util.response :refer [resource-response response content-type]]
            [ring.middleware.json :as middleware]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]))

(defroutes app-routes
  (GET  "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (GET  "/widgets" [] (response [{:severity "Info"} {:severity "Error"}]))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> app-routes
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)
      (wrap-defaults api-defaults)))
