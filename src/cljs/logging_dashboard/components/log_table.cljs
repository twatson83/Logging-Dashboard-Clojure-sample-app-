(ns logging-dashboard.components.log_table
  (:require [reagent.core                  :as reagent :refer [atom render-component]]
            [reagent-forms.core            :refer [bind-fields]]
            [reagent-modals.modals         :as reagent-modals :refer [modal! modal-window close-modal!]]
            [logging-dashboard.datetime    :as datetime]
            [logging-dashboard.timer       :as timer :refer [stop-timer create-timer]]
            [taoensso.encore               :as enc :refer (tracef debugf infof warnf errorf)]
            [logging-dashboard.models.logs         :refer [search]]))

(defn start-refresh 
  [config]
  (let [refresh-period (:refresh-interval @config)]
    (if (or (nil? refresh-period) (= refresh-period 0))
      (stop-timer)
      (create-timer #(search @config nil) refresh-period))))

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
          ^{:key (str "cp" v)}[:li 
                    [:div.checkbox 
                     [:label 
                      [:input {:type "checkbox"
                               :checked visible
                               :on-change on-change} (:label v)]]]]))]]))

(defn validate-page-size
  [page-size]
  (and (not (nil? page-size)) 
       (not= "" page-size)
       (> page-size 0)))

(defn validate-refresh-interval
  [refresh-interval]
  (and (not (nil? refresh-interval)) 
       (not= "" refresh-interval)
       (>= refresh-interval 0)))

(defn validate-doc 
  [doc]
  (and (validate-page-size (:page-size @doc))
       (validate-refresh-interval (:refresh-interval @doc))))

(defn filters-modal
  [config]
  (let [filters (atom (:filters @config))]
    (fn []
      [:div
       [:div.modal-header
        [:button.close {:type "button" :data-dismiss "modal" :aira-label "Close"} 
         [:span {:aria-hidden "true"} "x"]]
        [:h4.modal-title "Filter Builder"]]
       [:div.modal-body]
       [:div.modal-footer
        [:button.btn.btn-default {:type "button"
                                  :on-click #(do (debugf "Save") (close-modal!))} "Save"]]])))

(defn settings-modal
  [config]
  (let [doc (atom {:page-size (:page-size @config) :refresh-interval (:refresh-interval @config)})]
    (fn []
      [:div
       [:div.modal-header
        [:button.close {:type "button" :data-dismiss "modal" :aira-label "Close"} 
         [:span {:aria-hidden "true"} "x"]]
        [:h4.modal-title "Settings"]]
       [:div.modal-body
        [:form
         [:div.form-group {:class (if (not (validate-page-size (:page-size @doc))) "has-error")}
          [:label.control-label {:for "page-size"} "Page Size"]
          [bind-fields [:input.form-control {:field :numeric :id :page-size}] doc]
          [:span.error-message "Page size must be greater than 0."]]
         [:div.form-group {:class (if (not (validate-refresh-interval (:refresh-interval @doc)))  "has-error")}
          [:label.control-label {:for "refresh-interval"} "Refresh Interval (seconds)"]
          [bind-fields [:input.form-control {:field :numeric :id :refresh-interval
                                             :in-fn #(/ % 1000)
                                             :out-fn #(* % 1000)}] doc]
          [:span.error-message "Refresh interval must greater than or equal to 0."]]]]
       [:div.modal-footer
        [:button.btn.btn-default {:type "button"
                                  :on-click #(let [{:keys [page-size refresh-interval]} @doc]
                                               (if (validate-doc doc)
                                                 (do (swap! config assoc :page-size page-size 
                                                                         :refresh-interval refresh-interval)
                                                     (search @config nil)
                                                     (start-refresh config)
                                                     (close-modal!))))} "Save"]]])))

(defn settings 
  [config]
  [:a.btn.btn-default.btn-sm.pull-right.log-table-button {:href "#" 
                                                          :on-click #(do (.preventDefault %)
                                                                         (reagent-modals/modal! [settings-modal config]))}
   [:span.glyphicon.glyphicon-cog]])

(defn filters 
  [config]
  [:a.btn.btn-default.btn-sm.pull-right.log-table-button {:href "#" 
                                                          :on-click #(do (.preventDefault %)
                                                                         (reagent-modals/modal! [filters-modal config]))}
   "Filters"])

(defn refresh 
  [config]
  (let [spin (atom false)
        disable-spin #(reset! spin false)
        on-click #(do (reset! spin true) 
                      (.preventDefault %) 
                      (search @config disable-spin))]
    (fn []
      [:a.btn.btn-default.btn-sm.pull-right.log-table-button 
       {:href "#" :on-click on-click}
       [:span.glyphicon.glyphicon-refresh {:class (if @spin "spin")}]])))

(defn table-filter 
  [config]
  [:div.log-filter.row
   [:div.col-md-12
    [column-picker config]
    [settings config]
    [refresh config]
    [filters config]]])

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
  (let [columns (:columns @config)
        id (atom 0)]
    [:table.table.table-bordered.table-hover.table-condensed
     [:thead
      [:tr
       (for [[k v] columns]
         (if (:visible v) ^{:key (str "th" k)} [table-header k v config]))]]
     [:tbody
      (for [log (get @logs :hits)]
        (let [{:keys [timestamp level message application service exceptionJson]} log
              class (cond
                     (= (clojure.string/lower-case level) "error") "danger"
                     (= (clojure.string/lower-case level) "warn")  "warning"
                     :else "")]
          ^{:key (str "log_" (swap! id inc))} [:tr {:class class}
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

(defn log-table 
  [logs config]
  [:div.log-table
   [:div.container-fluid
    [table-filter config]
    [table logs config]
    [pager config logs]]
   [reagent-modals/modal-window]])
