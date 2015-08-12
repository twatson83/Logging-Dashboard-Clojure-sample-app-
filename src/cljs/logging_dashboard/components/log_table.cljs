(ns logging-dashboard.components.log_table
  (:require [reagent.core :as reagent]
            [logging-dashboard.datetime :as datetime]))

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
                               :on-change on-change} (:label v)]]]]))]]))

(defn table-filter [config]
  [:div.log-filter.row
   [:div.col-md-12
    [column-picker config]]])

(defn table-header 
  [name {:keys [label]} column]
    [:th [:a {:href "#" :class name} label]])

(defn table [logs config]
  (let [columns (:columns @config)]
    [:table.table.table-bordered.table-hover.table-condensed
     [:tr
      (for [[k v] columns]
        (if (:visible v) ^{:key k} [table-header k v]))]
     (for [log (get logs :hits)]
       (let [{:keys [timestamp level message application service exceptionJson]} log
             class (cond
                    (= (clojure.string/lower-case level) "error") "danger"
                    (= (clojure.string/lower-case level) "warn")  "warning"
                    :else "")]
         ^{:key log} [:tr {:class class}
                      (if (get-in columns [:timestamp :visible])
                        [:td.timestamp (datetime/format :MEDIUM_DATETIME timestamp)]) 
                      (if (get-in columns [:level :visible])
                        [:td.level level]) 
                      (if (get-in columns [:message :visible])
                        [:td.message message]) 
                      (if (get-in columns [:application :visible])
                        [:td.application application]) 
                      (if (get-in columns [:service :visible])
                        [:td.service service]) 
                      (if (get-in columns [:exceptionJson :visible])
                        [:td.exceptionJson exceptionJson])]))]))

(defn pager []
  [:nav.log-pager
   [:ul.pagination
    [:li [:a {:href "#" :aria-label "Previous"} "<<"] ]
    [:li [:a {:href "#" :aria-label "Next"} ">>"]]]])

(defn log-table [logs config]
  [:div.log-table
   [:div.container-fluid
    [table-filter config]
    [table logs config]
    [pager]]])
