(ns logging-dashboard.components.log-table
  (:require [reagent.core :as reagent]
            [logging-dashboard.datetime :as datetime]
            [goog.i18n.DateTimeFormat :as dtf]))

(defn column-picker 
  [columns]
  [:div.btn-group
   [:button.btn.btn-default.btn-sm.dropdown-toggle {:type "button"
                                                    :data-toggle "dropdown"
                                                    :aria-haspopup "true"
                                                    :aria-expanded "false"} "Columns "
    [:span.caret]]
   [:ul.dropdown-menu 
    [:li [:div.checkbox [:label [:input {:type "checkbox" :checked "checked"} "Timestamp"]]]]
    [:li [:div.checkbox [:label [:input {:type "checkbox" :checked "checked"} "Level"]]]]
    [:li [:div.checkbox [:label [:input {:type "checkbox" :checked "checked"} "Message"]]]]
    [:li [:div.checkbox [:label [:input {:type "checkbox" :checked "checked"} "Application"]]]]
    [:li [:div.checkbox [:label [:input {:type "checkbox" :checked "checked"} "Service"]]]]
    [:li [:div.checkbox [:label [:input {:type "checkbox" :checked "checked"} "Exception"]]]]
    ]
   ]
)

(defn filter [config]
  [:div.log-filter.row
   [:div.col-md-4
    [column-picker (:columns config)]
    ]
   ])

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
        [:td.timestamp   (datetime/format :MEDIUM_DATETIME timestamp)]
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
    [:li [:a {:href "#" :aria-label "Previous"} "<<"] ]
    [:li [:a {:href "#" :aria-label "Next"} ">>"]]
    ]
   ])

(defn log-table [logs config]
  [:div.log-table
   [:div.container-fluid
    [filter config]
    [table logs]
    [pager]]
    ])
