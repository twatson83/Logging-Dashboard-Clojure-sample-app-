(ns logging-dashboard.components.log_dashboard
  (:require [logging-dashboard.components.log_dashboard.log_table       :refer [log-table]]
            [logging-dashboard.components.log_dashboard.application_pie :refer [application-pie]]
            [logging-dashboard.components.log_dashboard.service_pie     :refer [service-pie]]
            [logging-dashboard.components.log_dashboard.level_table     :refer [level-table]]
            [cljs-flux.dispatcher                                 :refer [dispatch]]
            [reagent.core                                         :as reagent]
            [logging-dashboard.dispatcher                         :as dispatcher]
            [logging-dashboard.stores.config                      :as config-store]
            [logging-dashboard.stores.logs                        :as logs-store]))

(defn watch-state 
  [columns table-settings filters sorting logs]
  (add-watch config-store/config :config (fn [_ _ _ new-state] (do (reset! filters (:filters new-state))
                                                                   (reset! columns (:columns new-state))
                                                                   (reset! table-settings (:table-settings new-state))
                                                                   (reset! sorting (:sorting new-state)))))
  (add-watch logs-store/logs :logs (fn [_ _ _ new-state] (reset! logs new-state))))

(def timer (atom nil))

(defn stop-timer []
  (if (not (nil? @timer))
    (js/clearInterval @timer)))

(defn create-timer
  [fn period]
  (if-not (= period 0) 
    (reset! timer (js/setInterval fn period))))

(defn log-dashboard []
  (let [columns        (reagent/atom (:columns        @config-store/config))
        table-settings (reagent/atom (:table-settings @config-store/config))
        filters        (reagent/atom (:filters        @config-store/config))
        sorting        (reagent/atom (:sorting        @config-store/config))
        logs           (reagent/atom @logs-store/logs)]
    (fn []
      (watch-state columns table-settings filters sorting logs)
      (stop-timer)
      (create-timer #(if-not (:searching @logs) (dispatch dispatcher/logs-search nil)) (:refresh-interval @table-settings))
      [:div.container-fluid
       [:div.row
        [:div.col-md-4 [application-pie logs]]
        [:div.col-md-4 [service-pie logs]]
        [:div.col-md-4 [level-table logs]]
        ]
       [:div.row
        [:div.col-md-12
         [log-table columns table-settings filters sorting logs]]]])))
