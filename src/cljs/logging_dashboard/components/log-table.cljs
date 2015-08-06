(ns logging-dashboard.components.log-table
  (:require [reagent.core :as reagent]))

(defn filter []
  [:div.log-filter])

(defn table [logs]
  [:table.table.table-bordered.table-hover.table-condensed
   [:tr
    [:th "Timestamp"]
    [:th "Level"]
    [:th "Message"]
    [:th "Application"]
    [:th "Service"]
    [:th "Exception"]
    ]
   (for [log (get logs :hits)]
     ^{:key log} [:tr
                  [:td (get log :timestamp)]
                  [:td (get log :level)]
                  [:td (get log :message)]
                  [:td (get log :application)]
                  [:td (get log :service)]
                  [:td (get log :exception)]
                  ])
   ])

(defn pager []
  [:nav.log-pager
   [:ul.pagination
    [:li [:a {:href "#" :aria-label "Previous"} "<"] ]
    [:li [:a {:href "#"} "1"]]
    [:li [:a {:href "#"} "2"]]
    [:li [:a {:href "#"} "3"]]
    [:li [:a {:href "#"} "4"]]
    [:li [:a {:href "#"} "5"]]
    [:li [:a {:href "#" :aria-label "Next"} ">"]]
    ]
   ])

(defn log-table [logs]
  [:div.log-table
   [:div.container-fluid
    [filter]
    [table logs]
    [pager]]
    ]
   )
