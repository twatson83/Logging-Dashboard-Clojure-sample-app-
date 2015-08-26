(ns logging-dashboard.components.log_dashboard.header.refresh
  (:require [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]))

(defn refresh 
  [logs]
  (let [on-click #(do (.preventDefault %) 
                      (dispatch dispatcher/logs-search nil))]
    (fn []
      [:a.btn.btn-default.btn-sm.pull-right.log-table-button 
       {:href "#" :on-click on-click}
       [:span.glyphicon.glyphicon-refresh {:class (if (:searching @logs) "spin")}]])))
