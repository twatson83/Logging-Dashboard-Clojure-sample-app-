(ns logging-dashboard.components.log_table
  (:require [reagent.core                  :as reagent :refer [render-component]]
            [reagent-modals.modals         :as reagent-modals]
            [logging-dashboard.datetime    :as datetime]
            [taoensso.encore               :as enc :refer (tracef debugf infof warnf errorf)]
            [logging-dashboard.models.logs         :refer [search]]))

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

(defn settings-modal
  [config]
  [:form
   [:div.form-group
    [:label "Page Size"]
    [:input.form-control {:type "number" :value (:page-size @config)}]]])

(defn settings 
  [config]
  [:a.btn.btn-default.btn-sm.pull-right {:href "#" 
                                         :on-click #(reagent-modals/modal! [settings-modal config])}
   [:span.glyphicon.glyphicon-cog]])

(defn table-filter 
  [config]
  [:div.log-filter.row
   [:div.col-md-12
    [column-picker config]
    [settings config]]])

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
     [:tbody
      (for [log (get @logs :hits)]
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
                         [:td.exceptionJson exceptionJson])]))]]))

(defn pager 
  [config logs]
  (let [prevent-default #(.preventDefault %)
        on-click #(do (prevent-default %1) 
                      (swap! config assoc :page-num (%2 (:page-num @config)))
                      (search @config nil))
        inc-page #(on-click % inc)
        dec-page #(on-click % dec)
        {:keys [page-num page-size]} @config
        num-of-logs (:number @logs)]
    [:nav.log-pager
     [:ul.pagination
      [:li [:a {:href "#" :aria-label "Previous" 
                :on-click (if (> page-num 0) dec-page prevent-default)} "<<"] ]
      [:li [:a {:href "#" :aria-label "Next" 
                :on-click (if (< (* (+ 1 page-num) page-size) num-of-logs) inc-page prevent-default)} ">>"]]]]))

(defn log-table [logs config]
  [:div.log-table
   [:div.container-fluid
    [table-filter config]
    [table logs config]
    [pager config logs]]
   [reagent-modals/modal-window]])
