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
      (dispatch dispatcher/logs-search nil)
      (dispatch dispatcher/get-configs nil)
      (if (and (= (get-in @config-store/config [:table-settings :update-type]) "realtime")
               (= (get-in @config-store/config [:table-settings :streaming-status]) "started"))
        (dispatch dispatcher/start-streaming nil))))

(defroute "*" []
  (render-component [page-not-found] (.getElementById js/document "content")))

