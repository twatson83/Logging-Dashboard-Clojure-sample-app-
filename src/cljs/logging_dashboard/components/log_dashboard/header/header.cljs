(ns logging-dashboard.components.log_dashboard.header
  (:require [logging-dashboard.components.log_dashboard.header.filter        :refer [filter-builder]]
            [logging-dashboard.components.log_dashboard.header.settings      :refer [settings]]
            [logging-dashboard.components.log_dashboard.header.refresh       :refer [refresh]]))

(defn header 
  [columns filters table-settings logs]
  [:div.log-filter.row
   [:div.col-md-12
    [settings table-settings]
    [refresh logs]
    [filter-builder filters columns]]])
