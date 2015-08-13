(ns logging-dashboard.routes
  (:require-macros [secretary.core                  :refer [defroute]])
  (:require [logging-dashboard.components.header    :refer [header]]
            [logging-dashboard.models.logs          :refer [search]]
            [logging-dashboard.components.log_table :refer [log-table]]
            [logging-dashboard.components.errors    :refer [page-not-found]]
            [logging-dashboard.config               :refer [get-config]]
            [taoensso.encore                        :refer (tracef debugf infof warnf errorf)]
            [reagent.core             :as reagent]))

(reagent/render-component [header] (.getElementById js/document "header"))

(defroute home-path "/" []
  (let [content (.getElementById js/document "content")
        config (get-config)]
    (search @config #(reagent/render-component [log-table % config] content))))

(defroute "*" []
  (reagent/render-component [page-not-found] (.getElementById js/document "content")))

