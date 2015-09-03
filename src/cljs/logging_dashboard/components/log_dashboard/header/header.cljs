(ns logging-dashboard.components.log_dashboard.header
  (:require [logging-dashboard.components.log_dashboard.header.filter        :refer [filter-builder]]
            [logging-dashboard.components.log_dashboard.header.settings      :refer [settings]]
            [logging-dashboard.components.log_dashboard.header.search_area   :refer [search-area]]
            [logging-dashboard.components.log_dashboard.header.realtime_stop_start :refer [realtime-stop-start]]
            [logging-dashboard.components.log_dashboard.header.refresh       :refer [refresh]]))

(defn header 
  [columns filters table-settings logs query]
  [:div.log-filter.row
   [:div.col-md-12
    [search-area query]
    [settings table-settings]
    [refresh logs]
    [filter-builder filters columns]
    (if (= (:update-type @table-settings) "realtime")
      [realtime-stop-start table-settings])]])
