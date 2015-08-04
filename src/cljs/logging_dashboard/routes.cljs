(ns logging-dashboard.routes
  (:require-macros
   [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary])
  (:import goog.History))

(def application
  (js/document.getElementById "application"))

(defn set-html! [el content]
  (aset el "innerHTML" content))

(secretary/set-config! :prefix "#")

(defroute home-path "/" []
  (set-html! application "<h1>OMG! YOU'RE HOME!</h1>"))

(defroute users-path "/users" []
  (set-html! application "<h1>USERS!</h1>"))

(defroute user-path "/users/:id" [id]
  (let [message (str "<h1>HELLO USER <small>" id "</small>!</h1>")]
    (set-html! application message)))

(defroute jackpot-path "/777" []
  (set-html! application "<h1>YOU HIT THE JACKPOT!</h1>"))

(defroute "*" []
  (set-html! application "<h1>LOL! YOU LOST!</h1>"))

(defn init []
  (let [h (History.)]
    (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
    (doto h (.setEnabled true))))

