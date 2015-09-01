(ns logging-dashboard.components.log_dashboard.log_table.table
  (:require [logging-dashboard.utils.datetime :as datetime]
            [logging-dashboard.dispatcher     :as dispatcher]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]
            [hickory.core                     :refer (parse-fragment as-hiccup)]
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
    [:th [:a {:href "#" :class field-name :on-click #(.preventDefault %)} label] sort-char]))

(defn highlight [value query]
  [:span (if-not (nil? value)
           (if (empty? @query)
             value
             (map #([:span {:key (as-hiccup %)}]) (parse-fragment (clojure.string/replace (clojure.string/replace value #"\"" "") 
                                                                                          (re-pattern @query) 
                                                                                          (str "<mark>" @query "</mark>"))))))])

(defn table 
  [logs columns sorting query]
  (let [timestamp-visible (get-in @columns [:timestamp :visible])
        level-visible (get-in @columns [:Level :visible])
        message-visible (get-in @columns [:message :visible])
        application-visible (get-in @columns [:Application :visible])
        service-visible (get-in @columns [:Service :visible])
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
           (if timestamp-visible     [:td.timestamp (.format (js/moment timestamp) "DD/MM/YYYY HH:mm:ss.SSSS")]) 
           (if level-visible         [:td.level  [highlight level query]]) 
           (if message-visible       [:td.message  [highlight message query]]) 
           (if application-visible   [:td.application  [highlight application query]]) 
           (if service-visible       [:td.service  [highlight service query]]) 
           (if exceptionJson-visible [:td.exceptionJson  [highlight exceptionJson query]])]))]]))
