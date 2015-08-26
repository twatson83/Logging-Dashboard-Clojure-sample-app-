(ns logging-dashboard.components.log_dashboard.level_table
  (:require [reagent.core :as reagent][taoensso.encore                  :refer (tracef debugf infof warnf errorf)]))

(defn level-table
  [logs]
  (let [levels (get-in @logs [:aggregations :levels :buckets])
        prevent-default #(.preventDefault %)]
   [:div.log-table
    [:table.table.table-bordered.table-hover.table-condensed
     [:thead
      [:tr
       [:th [:a {:href "#" :on-click prevent-default} "Level"]]
       [:th [:a {:href "#" :on-click prevent-default} "Count"]]]]
     [:tbody
      (for [doc levels]
        ^{:key (str "level-table" (:key doc))} 
        [:tr 
         [:td (:key doc)]
         [:td (:doc_count doc)]])]]]))

