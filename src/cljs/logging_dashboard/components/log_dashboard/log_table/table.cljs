(ns logging-dashboard.components.log_dashboard.log_table.table
  (:require [logging-dashboard.utils.datetime :as datetime]
            [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]))

(defn table-header 
  [field-name {:keys [label]} sorting]
  (let [sort-field     (:field @sorting)
        sort-direction (:direction @sorting)
        on-click (fn [e]
                   (do 
                     (.preventDefault e)
                     (dispatch dispatcher/update-sorting {:field field-name :direction (if (= sort-direction "asc") "desc" "asc")})))
        sort-char (if (= sort-field field-name)
                    (if (= sort-direction "asc") 
                      [:span.glyphicon.glyphicon-chevron-up.col-icon.pull-right] 
                      [:span.glyphicon.glyphicon-chevron-down.col-icon.pull-right]) "")]
    [:th [:a {:href "#" :class field-name :on-click on-click} label] sort-char]))

(defn table 
  [logs columns sorting]
  (let [timestamp-visible (get-in @columns [:timestamp :visible])
        level-visible (get-in @columns [:level :visible])
        message-visible (get-in @columns [:message :visible])
        application-visible (get-in @columns [:application :visible])
        service-visible (get-in @columns [:service :visible])
        exceptionJson-visible (get-in @columns [:exceptionJson :visible])]
    [:table.table.table-bordered.table-hover.table-condensed
     [:thead
      [:tr
       (for [[k v] @columns]
         (if (:visible v) 
           ^{:key (str "th" k)} [table-header k v sorting]))]]
     [:tbody
      (for [log (get @logs :hits)]
        (let [{:keys [id timestamp level message application service exceptionJson]} log
              class (cond
                     (= (clojure.string/lower-case level) "error") "danger"
                     (= (clojure.string/lower-case level) "warn")  "warning"
                     :else "")]
          ^{:key id} 
          [:tr {:class class}
           (if timestamp-visible     [:td.timestamp (datetime/format :MEDIUM_DATETIME timestamp)]) 
           (if level-visible         [:td.level level]) 
           (if message-visible       [:td.message message]) 
           (if application-visible   [:td.application application]) 
           (if service-visible       [:td.service service]) 
           (if exceptionJson-visible [:td.exceptionJson exceptionJson])]))]]))
