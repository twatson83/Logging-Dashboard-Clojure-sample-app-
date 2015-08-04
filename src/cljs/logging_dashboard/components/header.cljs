(ns logging-dashboard.components.header
  (:require [reagent.core :as reagent]))

(defn render-header []
  (reagent/render-component [header] (.-body js/document)))

(defn header []
  [:div.header
   [:p "Header" ]])
