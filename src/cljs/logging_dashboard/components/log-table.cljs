(ns logging-dashboard.components.log-table
  (:require [reagent.core :as reagent]
            [goog.i18n.DateTimeFormat :as dtf]))

(defn filter []
  [:div.log-filter])

(def format-map
  (let [f goog.i18n.DateTimeFormat.Format]
{:FULL_DATE (.-FULL_DATE f)
:FULL_DATETIME (.-FULL_DATETIME f)
:FULL_TIME (.-FULL_TIME f)
:LONG_DATE (.-LONG_DATE f)
:LONG_DATETIME (.-LONG_DATETIME f)
:LONG_TIME (.-LONG_TIME f)
:MEDIUM_DATE (.-MEDIUM_DATE f)
:MEDIUM_DATETIME (.-MEDIUM_DATETIME f)
:MEDIUM_TIME (.-MEDIUM_TIME f)
:SHORT_DATE (.-SHORT_DATE f)
:SHORT_DATETIME (.-SHORT_DATETIME f)
 :SHORT_TIME (.-SHORT_TIME f)}))

(defn format-date-generic
  [date-format date]
  (.format (goog.i18n.DateTimeFormat.
            (or (date-format format-map) date-format))
           (js/Date. date)))

(defn table [logs]
  [:table.table.table-bordered.table-hover.table-condensed
   [:tr
    [:th.timestamp   [:a {:href "#"} "Timestamp"]]
    [:th.level       [:a {:href "#"} "Level"]]
    [:th.message     [:a {:href "#"} "Message"]]
    [:th.application [:a {:href "#"} "Application"]]
    [:th.service     [:a {:href "#"} "Service"]]
    [:th.exception   [:a {:href "#"} "Exception"]]
    ]
   (for [log (get logs :hits)]
     (let [{:keys [timestamp level message application service exceptionJson]} log
           class (cond
                  (= level "ERROR") "danger"
                  (= level "Error") "danger"
                  :else "")]
       [:tr {:class class}
        [:td.timestamp   (format-date-generic :MEDIUM_DATETIME timestamp)]
        [:td.level       level]
        [:td.message     message]
        [:td.application application]
        [:td.service     service]
        [:td.exception   exceptionJson]
        ]))
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
