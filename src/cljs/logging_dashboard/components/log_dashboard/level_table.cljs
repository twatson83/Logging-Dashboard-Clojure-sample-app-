(ns logging-dashboard.components.log_dashboard.level_table
  (:require [reagent.core :as reagent][taoensso.encore   :refer (tracef debugf infof warnf errorf)]))

(defn level-table
  [logs]
  (let [levels (get-in @logs [:aggregations :levels :buckets])
        prevent-default #(.preventDefault %)]
   [:div.level-table
    [:table.table.table-bordered.table-hover.table-condensed
     [:thead
      [:tr
       [:th [:a {:href "#" :on-click prevent-default} "Level"]]
       [:th [:a {:href "#" :on-click prevent-default} "Count"]]
       [:th.level-filter]]]
     [:tbody
      (for [doc (sort-by :doc_count #(compare %2 %1) levels)]
        ^{:key (str "level-table" (:key doc))} 
        [:tr 
         [:td (:key doc)]
         [:td (:doc_count doc)]
         [:td [:i.glyphicon.glyphicon-search.hand-cursor]]])]]]))

