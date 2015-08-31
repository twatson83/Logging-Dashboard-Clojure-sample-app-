(ns logging-dashboard.routes
  (:require-macros [secretary.core                      :refer [defroute]])
  (:require [logging-dashboard.components.header        :refer [header]]
            [logging-dashboard.components.log_dashboard :refer [log-dashboard]]
            [logging-dashboard.components.errors        :refer [page-not-found]]
            [logging-dashboard.stores.config            :as config-store]
            [logging-dashboard.dispatcher               :as dispatcher]
            [cljs-flux.dispatcher                       :refer [dispatch]]
            [reagent.core                               :refer [render-component]]))

(render-component [header] (.getElementById js/document "header"))

(defroute home-path "/" []
  (do (render-component [log-dashboard] (.getElementById js/document "content"))
      (if (= (get-in @config-store/config [:table-settings :update-type]) "realtime")
        (dispatch dispatcher/start-streaming nil))
      (dispatch dispatcher/logs-search nil)
      (dispatch dispatcher/get-configs nil)))

(defroute "*" []
  (render-component [page-not-found] (.getElementById js/document "content")))

