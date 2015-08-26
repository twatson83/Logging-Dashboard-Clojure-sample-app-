(ns logging-dashboard.components.log_dashboard.log_table.header
  (:require [logging-dashboard.components.log_dashboard.log_table.column_picker :refer [column-picker]]))

(defn header 
  [columns]
  [:div.log-filter.row
   [:div.col-md-12 [column-picker columns]]])
