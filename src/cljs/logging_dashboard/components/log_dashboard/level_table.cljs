(ns logging-dashboard.components.log_dashboard.level_table
  (:require [reagent.core :as reagent]
            [logging-dashboard.utils.filters :as filter-utils]
            [logging-dashboard.dispatcher                         :as dispatcher]
            [cljs-flux.dispatcher                                 :refer [dispatch]]
            [cljs-uuid-utils.core             :as uuid]
            [taoensso.encore   :refer (tracef debugf infof warnf errorf)]))

(defn level-table
  [logs filters]
  (let [levels (get-in @logs [:aggregations :levels :buckets])
        prevent-default #(.preventDefault %)
        fs @filters]
   [:div.level-table
    [:table.table.table-bordered.table-hover.table-condensed
     [:thead
      [:tr
       [:th [:a {:href "#" :on-click prevent-default} "Level"]]
       [:th [:a {:href "#" :on-click prevent-default} "Count"]]
       [:th.level-filter]]]
     [:tbody
      (for [doc (sort-by :doc_count #(compare %2 %1) levels)]
        (let [filter-exits (filter-utils/filter-exists? :Level (:key doc) :equals fs)]
          [:tr  {:key (str "level-table" (:key doc))}
           [:td (:key doc)]
           [:td (:doc_count doc)]
           [:td [:i.glyphicon.hand-cursor 
                 {:class (if filter-exits "glyphicon-remove" "glyphicon-search")
                  :on-click (if filter-exits
                              #(dispatch dispatcher/update-filters 
                                         (filter-utils/remove-filter :Level (:key doc) :equals fs))
                              (fn [_] (dispatch dispatcher/update-filters 
                                                (update fs :filters #(conj (:filters fs) {:id (uuid/make-random-uuid) :field :Level :value (:key doc) :type :equals})))))}]]]))]]]))

