(ns logging-dashboard.components.log_dashboard.header.search_area
  (:require [logging-dashboard.dispatcher     :as dispatcher]
            [reagent.core                     :as reagent]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]
            [cljs-flux.dispatcher             :refer [dispatch]]))

(defn search-area
  [query]
  (let [val (reagent/atom @query)]
    (fn []
      [:span
       [:input.form-control.input-sm.search-query {:type "text" :value @val 
                                                   :on-key-down #(if (= 13 (.-which %)) (dispatch dispatcher/update-query @val))
                                                   :on-change #(reset! val (-> % .-target .-value clojure.string/trim))}] 
       [:a.btn.btn-default.btn-sm.log-table-button 
        {:href "#" :on-click #(do (.preventDefault %) (dispatch dispatcher/update-query @val))}
        [:span.glyphicon.glyphicon-search]]])))
