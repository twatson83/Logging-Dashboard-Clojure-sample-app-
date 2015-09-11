(ns logging-dashboard.components.header
  (:require [reagent.core                     :as reagent]
            [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]
            [logging-dashboard.stores.config  :as config-store]
            [logging-dashboard.stores.logs    :as logs-store]
            [logging-dashboard.components.log_dashboard.header.filter        :refer [filter-builder]]
            [logging-dashboard.components.log_dashboard.header.settings      :refer [settings]]
            [logging-dashboard.components.log_dashboard.header.search_area   :refer [search-area]]
            [logging-dashboard.components.log_dashboard.header.realtime_stop_start :refer [realtime-stop-start]]
            [logging-dashboard.components.log_dashboard.header.refresh       :refer [refresh]]))

(defn config-item
  [config]
  (let [name (get-in config [:table-settings :name])]
    [:li {:key (str "dashboard_" name) } [:a {:href "#" :on-click #(do (.preventDefault %) 
                                                                       (dispatch dispatcher/set-config config))} 
                                          name]]))

(defn header []
  (let [configs (reagent/atom @config-store/configs)
        name (reagent/atom (get-in @config-store/config [:table-settings :name]))
        columns (reagent/atom (:columns @config-store/config))
        table-settings (reagent/atom (:table-settings @config-store/config))
        filters        (reagent/atom (:filters        @config-store/config))
        query          (reagent/atom (:query          @config-store/config))
        logs           (reagent/atom @logs-store/logs)] 
    (fn []
      (add-watch config-store/configs :settings-configs (fn [_ _ _ new-state] (reset! configs new-state)))
      (add-watch config-store/config :settings-config (fn [_ _ _ new-state] (do (reset! name (get-in new-state [:table-settings :name]))
                                                                                (reset! filters (:filters new-state))
                                                                                (reset! columns (:columns new-state))
                                                                                (reset! table-settings (:table-settings new-state))
                                                                                (reset! query (:query new-state)))))
      (add-watch logs-store/logs :header-logs (fn [_ _ _ new-state] (reset! logs new-state)))
      [:nav.navbar.navbar-default.navbar-fixed-top
       [:div.container-fluid
        [:div.navbar-header
         [:a.navbar-brand {:href "#"} (if (empty? @name) "Logging Dashboard" @name)]]
        [:div.collapse.navbar-collapse
         [:div.navbar-left.navbar-form
          [search-area query]]
         [:div.navbar-right.navbar-form
          [:div.btn-group.pull-right.log-table-button
           [:button.btn.btn-sm.btn-default.dropdown-toggle {:data-toggle "dropdown" :role "button" :aria-haspopup "true" :aria-expanded "false"} "Dashboards "
            [:span.caret]]
           [:ul.dropdown-menu
            [:li [:a {:href "#" :on-click #(do (.preventDefault %)
                                               (dispatch dispatcher/reset-config nil))} "New Dashboard"]]
            [:li.divider {:role "separator"}]
            (map config-item @configs)]]
          [settings table-settings]
          [refresh logs]
          [filter-builder filters columns]
          (if (= (:update-type @table-settings) "realtime")
            [realtime-stop-start table-settings])]]]])))

