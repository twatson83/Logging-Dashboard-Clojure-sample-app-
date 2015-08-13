(ns logging-dashboard.routes
  (:require-macros [secretary.core                  :refer [defroute]])
  (:require [logging-dashboard.components.header    :refer [header]]
            [logging-dashboard.models.logs          :refer [search]]
            [logging-dashboard.components.log_table :refer [log-table]]
            [logging-dashboard.components.errors    :refer [page-not-found]]
            [logging-dashboard.config               :refer [get-config]]
            [reagent.core                           :as reagent        :refer [render-component]]))

(render-component [header] (.getElementById js/document "header"))

(defroute home-path "/" []
  (let [content (.getElementById js/document "content")
        config (get-config)]
    (search @config #(render-component [log-table % config] content))))

(defroute "*" []
  (render-component [page-not-found] (.getElementById js/document "content")))
