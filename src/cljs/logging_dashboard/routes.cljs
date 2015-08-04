(ns logging-dashboard.routes
  (:require-macros
   [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary]
            [logging-dashboard.components.header :refer [render-header]]
            [logging-dashboard.components.errors :refer [render-404]]
            )
  (:import goog.History))

(render-header)

(defroute home-path "/" []
  (render-404))

(defroute log-path "/logs/:id" [id]
  (render-404))

(defroute "*" []
  (render-404))

(defn init []
  (let [h (History.)]
    (secretary/set-config! :prefix "#")
    (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
    (doto h (.setEnabled true))))

