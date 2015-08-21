(ns logging-dashboard.handler
  (:require [compojure.route           :as route]
            [compojure.core            :refer [GET POST defroutes]]
            [logging-dashboard.event-handlers :as event-handlers]
            [ring.middleware.defaults  :refer [wrap-defaults api-defaults]]))

(defn unique-id
  "Return a really unique ID (for an unsecured session ID).
  No, a random number is not unique enough. Use a UUID for real!"
  []
  (rand-int 10000))

(defn session-uid
  "Convenient to extract the UID that Sente needs from the request."
  [req]
  (get-in req [:session :uid]))

(defn index
  "Handle index page request. Injects session uid if needed."
  [req]
  {:status 200
   :session (if (session-uid req)
              (:session req)
              (assoc (:session req) :uid (unique-id)))
   :body (slurp "resources/public/index.html")})

(defroutes app-routes
  (GET  "/"     req (#'index req))
  (GET  "/chsk" req (event-handlers/ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (event-handlers/ring-ajax-post                req))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (do
    (-> app-routes
        ring.middleware.keyword-params/wrap-keyword-params
        ring.middleware.params/wrap-params
        (wrap-defaults api-defaults))
    (event-handlers/event-loop)
   ; (event-handlers/start-broadcaster!)
    ))

