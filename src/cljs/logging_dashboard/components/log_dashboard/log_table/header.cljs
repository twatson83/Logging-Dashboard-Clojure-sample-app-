(ns logging-dashboard.components.log_dashboard.log_table.header
  (:require [logging-dashboard.components.log_dashboard.log_table.filter        :refer [filter-builder]]
            [logging-dashboard.components.log_dashboard.log_table.settings      :refer [settings]]
            [logging-dashboard.components.log_dashboard.log_table.refresh       :refer [refresh]]
            [logging-dashboard.components.log_dashboard.log_table.column_picker :refer [column-picker]]))

(defn header 
  [columns filters table-settings logs]
  [:div.log-filter.row
   [:div.col-md-12
    [column-picker columns]
    [settings table-settings]
    [refresh logs]
    [filter-builder filters]]])
