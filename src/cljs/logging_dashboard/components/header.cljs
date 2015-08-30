(ns logging-dashboard.components.header
  (:require [reagent.core                     :as reagent]
            [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]
            [logging-dashboard.stores.config  :as config-store]))

(defn config-item
  [config]
  (let [name (get-in config [:table-settings :name])]
    [:li {:key (str "dashboard_" name) } [:a {:href "#" :on-click #(do (.preventDefault %) 
                                                                       (dispatch dispatcher/set-config config))} 
                                          name]]))

(defn header []
  (let [configs (reagent/atom @config-store/configs)
        name (reagent/atom (get-in @config-store/config [:table-settings :name]))] 
    (fn []
      (add-watch config-store/configs :settings-configs (fn [_ _ _ new-state] (reset! configs new-state)))
      (add-watch config-store/config :settings-config (fn [_ _ _ new-state] (reset! name (get-in new-state [:table-settings :name]))))
      [:nav.navbar.navbar-default.navbar-fixed-top
       [:div.container-fluid
        [:div.navbar-header
         [:a.navbar-brand {:href "#"} (if (empty? @name) "Logging Dashboard" @name)]]
        [:div.collapse.navbar-collapse
         [:ul.nav.navbar-nav.navbar-right
          [:li.dropdown
           [:a.dropdown-toggle {:href "#" :data-toggle "dropdown" :role "button" :aria-haspopup "true" :aria-expanded "false"} "Dashboards "
            [:span.caret]]
           [:ul.dropdown-menu
            [:li [:a {:href "#" :on-click #(do (.preventDefault %)
                                               (dispatch dispatcher/reset-config nil))} "New Dashboard"]]
            [:li.divider {:role "separator"}]
            (map config-item @configs)]]]]]])))

