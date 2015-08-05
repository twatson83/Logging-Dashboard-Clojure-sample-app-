(ns logging-dashboard.components.errors
  (:require [reagent.core :as reagent]))

(defn page-not-found []
  [:div.header
   [:p "Page not found!" ]])
