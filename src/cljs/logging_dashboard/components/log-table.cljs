(ns logging-dashboard.components.log-table
  (:require [reagent.core :as reagent]
            [logging-dashboard.datetime :as datetime]
            [goog.i18n.DateTimeFormat :as dtf]))

(defn column-picker 
  [config]
  (let [columns (:columns @config)]
    [:div.btn-group
     [:button.btn.btn-default.btn-sm.dropdown-toggle {:type "button"
                                                      :data-toggle "dropdown"
                                                      :aria-haspopup "true"
                                                      :aria-expanded "false"} "Columns "
      [:span.caret]]
     [:ul.dropdown-menu 
      (for [[k v] columns]
        (let [visible (:visible v)]
          [:li 
           [:div.checkbox 
            [:label 
             [:input {:type "checkbox"
                      :checked visible
                      :on-change #(swap! config [k] {:visible (not visible)})} (:label v)]]]]))
      ]
     ])
)

(defn table-filter [config]
  [:div.log-filter.row
   [:div.col-md-4
    [column-picker config]
    ]
   ])

(defn table-header 
  [name {:keys [label]} column]
    [:th [:a {:href "#" :class name} label]])

(defn table [logs config]
  (let [columns (:columns @config)]
    [:table.table.table-bordered.table-hover.table-condensed
     [:tr
      (for [[k v] columns]
        (if (:visible v) ^{:key k} [table-header k v]))
      ]
     (for [log (get logs :hits)]
       (let [{:keys [timestamp level message application service exceptionJson]} log
             class (cond
                    (or (= level "ERROR") (= level "Error")) "danger"
                    (or (= level "WARN") (= level "Warn")) "warning"
                    :else "")]
         ^{:key log} [:tr {:class class}
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
    [table-filter config]
    [table logs config]
    [pager]]
    ])

