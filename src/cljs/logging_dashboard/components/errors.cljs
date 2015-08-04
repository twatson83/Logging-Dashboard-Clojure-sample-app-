(ns logging-dashboard.components.header
  (:require [reagent.core :as reagent]))

(defn render-404 []
  (reagent/render-component [page-not-found] (.-body js/document)))

(defn page-not-found []
  [:div.header
   [:p "Page not found!" ]])
