(ns logging-dashboard.components.log_dashboard.log_table.filter
  (:require [reagent.core                     :as reagent           :refer [render-component]]
            [reagent-modals.modals            :as reagent-modals    :refer [modal! modal-window close-modal!]]
            [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]))

(defmulti build-filter #(:type @%))

(defmethod build-filter :conjunction
  [node]
  [:div.inline.item
   [:select.form-control.input-xs {:field :list :value (:operation @node) :on-change #(swap! node assoc :operation (-> % .-target .-value)) }
    [:option {:key :and} "And"]
    [:option {:key :or} "Or"]]
   [:i.glyphicon.glyphicon-plus-sign.hand-cursor {:on-click #(debugf "Add")}]])

(defn update-filter
  [new-state]
  (fn [filter]
    (if (= (:id filter) (:id new-state))
      new-state
      filter)))

(defn build-filters
  ([node] (build-filters node nil))
  ([node on-delete]
   (let [filters (:filters @node)]
     [:div.inline.node
      [build-filter node] 
      (if-not (nil? on-delete)
        [:i.glyphicon.glyphicon-remove-sign.hand-cursor.inline 
         {:on-click #(on-delete @node)}])     
      (for [filter filters]
        (let [filter-atom (atom filter)]
          (add-watch filter-atom :log-filters (fn [_ _ _ new] (swap! node assoc :filters (map (update-filter new) filters))))
          ^{:key (:id filter)}
          [:div.tab
           [build-filters filter-atom 
                          #(let [fs (remove (fn [f] (= (:id f) (:id %))) filters)]
                             (swap! node assoc :filters fs))]]))])))

(defn filters-modal
  [log-filters]
  (let [filters (reagent/atom @log-filters)]
    (add-watch filters :log-filters (fn [_ _ _ new] (debugf "Filters changed - %s" new)))
    (fn []
      [:div
       [:div.modal-header
        [:button.close {:type "button" :data-dismiss "modal" :aira-label "Close"} 
         [:span {:aria-hidden "true"} "x"]]
        [:h4.modal-title "Filter Builder"]]
       [:div.modal-body.filters
        [build-filters filters]]
       [:div.modal-footer
        [:button.btn.btn-default {:type "button" :on-click #(do (dispatch dispatcher/update-filters @filters)
                                                                (close-modal!))} "Save"]]])))

(defn filter-builder
  [filters]
  [:a.btn.btn-default.btn-sm.pull-right.log-table-button {:href "#" 
                                                          :on-click #(do (.preventDefault %)
                                                                         (reagent-modals/modal! [filters-modal filters]))}
   "Filters"])

