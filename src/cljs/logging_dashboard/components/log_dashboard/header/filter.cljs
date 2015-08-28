(ns logging-dashboard.components.log_dashboard.header.filter
  (:require [reagent.core                     :as reagent           :refer [render-component]]
            [reagent-modals.modals            :as reagent-modals    :refer [modal! modal-window close-modal!]]
            [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]
            [cljs-uuid-utils.core             :as uuid]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]))

;; Field inputs

(defmulti field-input (fn [type _] type))

(defn field-list 
  [node columns]
  (let [id (:id @node)]
    [:select.form-control.input-xs.fields {:field :list :value (:field @node) 
                                           :on-change #(swap! node assoc :field (-> % .-target .-value keyword)) }
     (for [[k v] @columns]
       [:option {:key (str id k) :value k} (:label v)])]))

(defn date-input
  [node prop]
  [:span [:input.form-control.input-xs {:class (str (name prop) (:id @node) "_picker") :type "text" 
                                        :value (if-not (nil? (prop @node)) (.format (.unix js/moment (/ (prop @node) 1000)) "DD/MM/YYYY HH:mm:ss")) 
                                        :on-change #(debugf %)}]])

(defn date-will-unmount
  [node prop]
  (.destroy (.data (.datetimepicker (js/$ (str "." (name prop) (:id @node) "_picker"))) "DateTimePicker")))

(defn date-did-mount
  [node prop]
  (let [date-picker (.datetimepicker (js/$ (str "." (name prop) (:id @node) "_picker")) (clj->js {:format "DD/MM/YYYY HH:mm:ss"}))]
    (.on date-picker "dp.change" #(swap! node assoc prop (* 1000 (.unix (.-date %)))))))

(defmethod field-input :date
  [_ node prop]
  (reagent/create-class {:reagent-render #(date-input node prop)
                         :component-did-mount #(date-did-mount node prop)
                         :component-will-unmount #(date-will-unmount node prop)}))

(defmethod field-input :string
  [_ node prop]
  [:span [:input.form-control.input-xs {:field :text :value (prop @node) :on-change #(swap! node assoc prop (-> % .-target .-value))}]])

(defmethod field-input :default
  [_ node prop]
  [:span [:input.form-control.input-xs {:field :text :value (prop @node) :on-change #(swap! node assoc prop (-> % .-target .-value))}]])

;;;;

;; Filters

(defmulti build-filter #(:type @%1))

(defn conjunction
  [node]
  (let [add-node (fn [e type] (do (.preventDefault e) 
                                  (swap! node update-in [:filters] #(conj % {:type type :filters [] :id (uuid/make-random-uuid)}))))]
    [:div.inline.item
     [:select.form-control.input-xs {:field :list :value (:type @node) :on-change #(swap! node assoc :type (-> % .-target .-value keyword)) }
      [:option {:key :and :value :and} "And"]
      [:option {:key :or :value :or} "Or"]]
     [:a.dropdown-toggle {:href "#" :on-click #(.preventDefault %) :data-toggle "dropdown"} 
      [:i.glyphicon.glyphicon-plus-sign.hand-cursor ]]
     [:ul.dropdown-menu 
      [:li [:a {:href "#" :on-click #(add-node % :and)} "And"]] 
      [:li [:a {:href "#" :on-click #(add-node % :or)} "Or"]]
      [:li.divider {:role "seperator"}]
      [:li [:a {:href "#" :on-click #(add-node % :equals)} "Equals"]]
      [:li [:a {:href "#" :on-click #(add-node % :not-equals)} "Not Equals"]]
      [:li [:a {:href "#" :on-click #(add-node % :contains)} "Contains"]]
      [:li [:a {:href "#" :on-click #(add-node % :greater-than)} "Greater Than"]]
      [:li [:a {:href "#" :on-click #(add-node % :less-than)} "Less Than"]]
      [:li [:a {:href "#" :on-click #(add-node % :last-timespan)} "Timespan"]]
      [:li [:a {:href "#" :on-click #(add-node % :date-range)} "Date Range"]]]]))
 
(defmethod build-filter :and
  [node _]
  (conjunction node))

(defmethod build-filter :or
  [node _]
  (conjunction node))

(defmethod build-filter :date-range
  [node columns] 
      [:div.inline.item
       [field-list node columns]
       [:span.filter-type-label " is greater than "]
       [field-input :date node :from]
       [:span.filter-type-label " and less than "]
       [field-input :date node :to]])

(defmethod build-filter :last-timespan
  [node columns]
  [:div.inline.item
   [:span.filter-type-label "Last "]
   [:select.form-control.input-xs.fields {:field :list :value (:value @node) 
                                          :on-change #(swap! node assoc :value (-> % .-target .-value js/parseInt)) }
    [:option {:value 300000} "5 Mins"]
    [:option {:value 600000} "10 Mins"]
    [:option {:value 1800000} "30 Mins"]
    [:option {:value 3600000} "1 hour"]
    [:option {:value 7200000} "2 hour"]
    [:option {:value 14400000} "4 hour"]
    [:option {:value 28800000} "8 hour"]
    [:option {:value 86400000} "1 day"]
    [:option {:value 604800000} "7 day"]
    [:option {:value 2592000} "30 day"]
    [:option {:value 31471985} "1 year"]]])

(defmethod build-filter :equals
  [node columns]
  (let [type (:type (first (vals (select-keys @columns [(:field @node)]))))]
      [:div.inline.item
       [field-list node columns]
       [:span.filter-type-label " is equal to "]
       [field-input type node :value]]))

(defmethod build-filter :not-equals
  [node columns]
  (let [type (:type (first (vals (select-keys @columns [(:field @node)]))))]
      [:div.inline.item
       [field-list node columns]
       [:span.filter-type-label " is not equal to"]
       [field-input type node :value]]))

(defmethod build-filter :contains
  [node columns]
  (let [type (:type (first (vals (select-keys @columns [(:field @node)]))))]
      [:div.inline.item
       [field-list node columns]
       [:span.filter-type-label " contains "]
       [field-input type node :value]]))

(defmethod build-filter :greater-than
  [node columns]
  (let [type (:type (first (vals (select-keys @columns [(:field @node)]))))]
      [:div.inline.item
       [field-list node columns]
       [:span.filter-type-label " is greater than "]
       [field-input type node :value]]))

(defmethod build-filter :less-than
  [node columns]
  (let [type (:type (first (vals (select-keys @columns [(:field @node)]))))]
      [:div.inline.item
       [field-list node columns]
       [:span.filter-type-label " is less than"]
       [field-input type node :value]]))
      
;;;;

(defn update-filter
  [new-state]
  (fn [filter]
    (if (= (:id filter) (:id new-state))
      new-state
      filter)))

(defn build-filters
  ([node columns] (build-filters node columns nil))
  ([node columns on-delete]
   (let [filters (:filters @node)]
     [:div.inline.node
      [build-filter node columns] 
      (if-not (nil? on-delete)
        [:i.glyphicon.glyphicon-remove-sign.hand-cursor.inline 
         {:on-click #(on-delete @node)}])     
      (for [filter filters]
        (let [filter-atom (atom filter)]
          (add-watch filter-atom :log-filters (fn [_ _ _ new] (swap! node assoc :filters (map (update-filter new) filters))))
          ^{:key (:id filter)}
          [:div.tab
           [build-filters filter-atom  columns
                          #(let [fs (remove (fn [f] (= (:id f) (:id %))) filters)]
                             (swap! node assoc :filters fs))]]))])))

(defn filters-modal
  [log-filters columns]
  (let [filters (reagent/atom @log-filters)]
    (fn []
      [:div
       [:div.modal-header
        [:button.close {:type "button" :data-dismiss "modal" :aira-label "Close"} 
         [:span {:aria-hidden "true"} "x"]]
        [:h4.modal-title "Filter Builder"]]
       [:div.modal-body.filters
        [build-filters filters columns]]
       [:div.modal-footer
        [:button.btn.btn-default {:type "button" :on-click #(do (dispatch dispatcher/update-filters @filters)
                                                                (close-modal!))} "Save"]]])))

(defn filter-builder
  [filters columns]
  [:a.btn.btn-default.btn-sm.pull-right.log-table-button {:href "#" 
                                                          :on-click #(do (.preventDefault %)
                                                                         (reagent-modals/modal! [filters-modal filters columns]))}
   "Filters"])
