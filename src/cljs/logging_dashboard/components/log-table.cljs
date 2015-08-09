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

(defn table-header 
  [{:keys [name label]} column]
    [:th [:a {:href "#" :class name} label]])

(defn table [logs config]
  (let [columns (:columns config)]
    [:table.table.table-bordered.table-hover.table-condensed
     [:tr
      (for [column columns]
        [table-header column])
      ]
     (for [log (get logs :hits)]
       (let [{:keys [timestamp level message application service exceptionJson]} log
             class (cond
                    (or (= level "ERROR") (= level "Error")) "danger"
                    (or (= level "WARN") (= level "Warn")) "warning"
                    :else "")]
         [:tr {:class class}
          (if (:visible (:timestamp columns))
            [:td.timestamp   (datetime/format :MEDIUM_DATETIME timestamp)]) 
          (if (:visible (:level columns))
            [:td.level level]) 
          (if (:visible (:message columns))
            [:td.message message]) 
          (if (:visible (:application columns))
            [:td.application application]) 
          (if (:visible (:service columns))
            [:td.service service]) 
          (if (:visible (:exceptionJson columns))
            [:td.exceptionJson exceptionJson]) 
          ]))
     ]))

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
    [table logs config]
    [pager]]
    ])
