(ns logging-dashboard.components.log_table
  (:require [reagent.core                  :as reagent :refer [render-component]]
            [reagent-forms.core            :refer [bind-fields]]
            [reagent-modals.modals         :as reagent-modals :refer [modal! modal-window close-modal!]]
            [logging-dashboard.datetime    :as datetime]
            [logging-dashboard.config      :refer [config validate-page-size validate-refresh-interval]]
            [logging-dashboard.timer       :as timer :refer [stop-timer create-timer]]
            [taoensso.encore               :as enc :refer (tracef debugf infof warnf errorf)]
            [logging-dashboard.models.logs         :refer [search]]))

(defn start-refresh-interval
  [refresh-period]
  (if (or (nil? refresh-period) (= refresh-period 0))
    (stop-timer)
    (create-timer #(search nil) refresh-period)))

(defn column-picker 
  [columns]
  [:div.btn-group.column-picker
   [:button.btn.btn-default.btn-sm.dropdown-toggle {:type "button"
                                                    :data-toggle "dropdown"
                                                    :aria-haspopup "true"
                                                    :aria-expanded "false"} "Columns "
    [:span.caret]]
   [:ul.dropdown-menu 
    (for [[k v] @columns]
      (let [visible (:visible v)
            on-change (fn [e] (swap! columns assoc-in [k :visible] (not (get-in @columns [k :visible]))))]
        ^{:key (str "cp" v)}
        [:li 
         [:div.checkbox 
          [:label 
           [:input {:type "checkbox" :checked visible :on-change on-change} (:label v)]]]]))]])

(defn validate-doc 
  [doc]
  (and (validate-page-size (:page-size @doc))
       (validate-refresh-interval (:refresh-interval @doc))))

(defn filters-modal
  [filters]
  (fn []
    [:div
     [:div.modal-header
      [:button.close {:type "button" :data-dismiss "modal" :aira-label "Close"} 
       [:span {:aria-hidden "true"} "x"]]
      [:h4.modal-title "Filter Builder"]]
     [:div.modal-body]
     [:div.modal-footer
      [:button.btn.btn-default {:type "button" :on-click #(do (debugf "Save") (close-modal!))} "Save"]]]))

(defn settings-modal
  [table-settings]
  (let [doc (atom {:page-size (:page-size @table-settings) :refresh-interval (:refresh-interval @table-settings)})]
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
                                                 (do (swap! table-settings assoc :page-size page-size 
                                                                                 :refresh-interval refresh-interval)
                                                     (search nil)
                                                     (start-refresh-interval refresh-interval)
                                                     (close-modal!))))} "Save"]]])))

(defn settings 
  [table-settings]
  [:a.btn.btn-default.btn-sm.pull-right.log-table-button {:href "#" 
                                                          :on-click #(do (.preventDefault %)
                                                                         (reagent-modals/modal! [settings-modal table-settings]))}
   [:span.glyphicon.glyphicon-cog]])

(defn filter-builder
  [filters]
  [:a.btn.btn-default.btn-sm.pull-right.log-table-button {:href "#" 
                                                          :on-click #(do (.preventDefault %)
                                                                         (reagent-modals/modal! [filters-modal filters]))}
   "Filters"])

(defn refresh 
  []
  (let [spin (atom false)
        disable-spin #(reset! spin false)
        on-click #(do (reset! spin true) 
                      (.preventDefault %) 
                      (search disable-spin))]
    (fn []
      [:a.btn.btn-default.btn-sm.pull-right.log-table-button 
       {:href "#" :on-click on-click}
       [:span.glyphicon.glyphicon-refresh {:class (if @spin "spin")}]])))

(defn table-filter 
  [columns filters table-settings]
  [:div.log-filter.row
   [:div.col-md-12
    [column-picker columns]
    [settings table-settings]
    [refresh]
    [filter-builder filters]]])

(defn table-header 
  [field-name {:keys [label]} sorting]
  (let [sort-field     (:field @sorting)
        sort-direction (:direction @sorting)
        on-click (fn [e]
                   (do 
                     (.preventDefault e)
                     (swap! sorting assoc :field field-name :direction (if (= sort-direction "asc") "desc" "asc"))
                     (search nil)))
        sort-char (if (= sort-field field-name)
                    (if (= sort-direction "asc") 
                      [:span.glyphicon.glyphicon-chevron-up.col-icon.pull-right] 
                      [:span.glyphicon.glyphicon-chevron-down.col-icon.pull-right]) "")]
    [:th [:a {:href "#" :class field-name :on-click on-click} label] sort-char]))

(defn table [logs columns sorting]
  (let [id (atom 0)
        timestamp-visible (get-in @columns [:timestamp :visible])
        level-visible (get-in @columns [:level :visible])
        message-visible (get-in @columns [:message :visible])
        application-visible (get-in @columns [:application :visible])
        service-visible (get-in @columns [:service :visible])
        exceptionJson-visible (get-in @columns [:exceptionJson :visible])]
    [:table.table.table-bordered.table-hover.table-condensed
     [:thead
      [:tr
       (for [[k v] @columns]
         (if (:visible v) ^{:key (str "th" k)} [table-header k v sorting]))]]
     [:tbody
      (for [log (get @logs :hits)]
        (let [{:keys [timestamp level message application service exceptionJson]} log
              class (cond
                     (= (clojure.string/lower-case level) "error") "danger"
                     (= (clojure.string/lower-case level) "warn")  "warning"
                     :else "")]
          ^{:key (str "log_" (swap! id inc))} 
          [:tr {:class class}
           (if timestamp-visible     [:td.timestamp (datetime/format :MEDIUM_DATETIME timestamp)]) 
           (if level-visible         [:td.level level]) 
           (if message-visible       [:td.message message]) 
           (if application-visible   [:td.application application]) 
           (if service-visible       [:td.service service]) 
           (if exceptionJson-visible [:td.exceptionJson exceptionJson])]))]]))

(defn pager 
  [settings logs]
  (let [{:keys [page-num page-size]} @settings
        num-of-logs (:number @logs)
        on-click #(do (.preventDefault %1) 
                      (swap! settings assoc :page-num (%2 page-num))
                      (search nil))
        inc-page #(on-click % inc)
        dec-page #(on-click % dec)]
    [:nav.log-pager
     [:ul.pagination
      [:li [:a {:href "#" :aria-label "Previous" 
                :on-click (if (> page-num 0) dec-page #(.preventDefault %))} "<<"] ]
      [:li [:a {:href "#" :aria-label "Next" 
                :on-click (if (-> page-num 
                                  (+ 1) 
                                  (* page-size) 
                                  (< num-of-logs)) inc-page #(.preventDefault %))} ">>"]]]]))

(defn add-watchers 
  [columns table-settings sorting filters]
  (add-watch columns :columns (fn [_ _ _ new-state] (swap! config assoc :columns new-state)))
  (add-watch table-settings :table-settings (fn [_ _ _ new-state] (swap! config assoc :table-settings new-state)))
  (add-watch sorting :sorting (fn [_ _ _ new-state] (swap! config assoc :sorting new-state)))
  (add-watch filters :filters (fn [_ _ _ new-state] (swap! config assoc :filters new-state))))

(defn log-table 
  [logs]
  (let [columns        (reagent/atom (:columns        @config))
        table-settings (reagent/atom (:table-settings @config))
        filters        (reagent/atom (:filters        @config))
        sorting        (reagent/atom (:sorting        @config))]
    (add-watchers columns table-settings sorting filters)
    (fn []
      [:div.log-table
       [:div.container-fluid
        [table-filter columns filters table-settings]
        [table logs columns sorting]
        [pager table-settings logs]]
       [reagent-modals/modal-window]])))
