(ns logging-dashboard.routes
  (:require-macros
   [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary]
            [logging-dashboard.components.header    :refer [header]]
            [logging-dashboard.components.log-table :refer [log-table]]
            [logging-dashboard.components.errors    :refer [page-not-found]]
            [reagent.core :as reagent]
            )
  (:import goog.History))

(defn render 
  [component id]
  (reagent/render-component [component] (.getElementById js/document id)))

(render header "header")

(defroute home-path "/" []
  (render log-table "content"))

(defroute log-path "/logs/:id" [id]
  (render page-not-found "content"))

(defroute "*" []
  (render page-not-found "content"))

(defn init []
  (let [h (History.)]
    (secretary/set-config! :prefix "#")
    (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
    (doto h (.setEnabled true))))

