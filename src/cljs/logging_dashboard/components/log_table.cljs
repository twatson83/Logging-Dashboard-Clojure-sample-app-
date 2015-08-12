(ns logging-dashboard.components.log_table
  (:require [reagent.core :as reagent]
            [logging-dashboard.datetime :as datetime]
            [logging-dashboard.models.logs          :refer [search]]
            [taoensso.encore          :as enc    :refer (tracef debugf infof warnf errorf)]
            [goog.i18n.DateTimeFormat :as dtf]))

(defn column-picker 
  [config]
  (let [columns (:columns @config)]
    [:div.btn-group.column-picker
     [:button.btn.btn-default.btn-sm.dropdown-toggle {:type "button"
                                                      :data-toggle "dropdown"
                                                      :aria-haspopup "true"
                                                      :aria-expanded "false"} "Columns "
      [:span.caret]]
     [:ul.dropdown-menu 
      (for [[k v] columns]
        (let [visible (:visible v)
              on-change (fn [e]
                          (swap! config assoc-in [:columns k :visible] 
                                 (not (get-in @config [:columns k :visible]))))]
          ^{:key v}[:li 
                    [:div.checkbox 
                     [:label 
                      [:input {:type "checkbox"
                               :checked visible
                               :on-change on-change} (:label v)]]]]))
      ]
     ])
)

(defn table-filter [config]
  [:div.log-filter.row
   [:div.col-md-12
    [column-picker config]
    ]
   ])

(defn table-header 
  [field-name {:keys [label]} config]
  (let [sorting        (:sorting @config)
        sort-field     (:field sorting)
        sort-direction (:direction sorting)
        on-click (fn [e]
                   (do 
                     (.preventDefault e)
                     (swap! config update-in [:sorting] assoc :field field-name 
                            :direction (if (= sort-direction "asc") "desc" "asc"))
                     (search @config nil)))
        sort-char (if (= sort-field field-name)
                    (if (= sort-direction "asc") 
                      [:span.glyphicon.glyphicon-chevron-up.col-icon.pull-right] 
                      [:span.glyphicon.glyphicon-chevron-down.col-icon.pull-right]) "")]
    [:th [:a {:href "#" :class field-name :on-click on-click} label] sort-char]))

(defn table [logs config]
  (let [columns (:columns @config)]
    [:table.table.table-bordered.table-hover.table-condensed
     [:thead
      [:tr
       (for [[k v] columns]
         (if (:visible v) ^{:key k} [table-header k v config]))]]
     (for [log (get @logs :hits)]
       (let [{:keys [timestamp level message application service exceptionJson]} log
             class (cond
                    (or (= level "ERROR") (= level "Error")) "danger"
                    (or (= level "WARN") (= level "Warn")) "warning"
                    :else "")]
         ^{:key log} [:tbody
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
                        [:td.exceptionJson exceptionJson])]]))]))

(defn pager 
  [config]
  (let [on-click #(do (.preventDefault %1) 
                      (swap! config update-in [:page-num] %2)
                      (search @config nil))
        inc-page #(on-click % inc)
        dec-page #(on-click % dec)]
    [:nav.log-pager
     [:ul.pagination
      [:li [:a {:href "#" :aria-label "Previous" :on-click inc-page} "<<"] ]
      [:li [:a {:href "#" :aria-label "Next" :on-click dec-page} ">>"]]]]))

(defn log-table [logs config]
  [:div.log-table
   [:div.container-fluid
    [table-filter config]
    [table logs config]
    [pager config]]])

