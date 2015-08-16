(ns logging-dashboard.routes
  (:require-macros [secretary.core                  :refer [defroute]])
  (:require [logging-dashboard.components.header    :refer [header]]
            [logging-dashboard.models.logs          :refer [search]]
            [logging-dashboard.config               :refer [config]]
            [logging-dashboard.components.log_table :refer [log-table start-refresh-interval]]
            [logging-dashboard.components.errors    :refer [page-not-found]]
            [reagent.core                           :as reagent        :refer [render-component]]))

(render-component [header] (.getElementById js/document "header"))

(defroute home-path "/" []
  (let [content (.getElementById js/document "content")]
    (search #(render-component [log-table %] content))
    (start-refresh-interval (get-in @config [:table-settings :refresh-interval]))))

(defroute "*" []
  (render-component [page-not-found] (.getElementById js/document "content")))
