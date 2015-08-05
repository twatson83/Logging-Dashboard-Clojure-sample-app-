(ns logging-dashboard.components.header
  (:require [reagent.core :as reagent]))

(defn header []
  [:nav.navbar.navbar-default.navbar-fixed-top
   [:div.container-fluid
    [:div.navbar-header
     [:a.navbar-brand {:href "#"} "Logging Dashboard"]]]])
