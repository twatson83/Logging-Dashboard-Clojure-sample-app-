(ns logging-dashboard.models.logs
  (:require [logging-dashboard.server :as server :refer (chsk-send!)]
            [logging-dashboard.config :refer [config]]
            [taoensso.encore          :as enc    :refer (tracef debugf infof warnf errorf)]
            [reagent.core :as reagent :refer [atom]]))

(def logs (atom []))

(defn search
  [cb]
  (let [{:keys [field direction]}    (:sorting @config)
        {:keys [page-size page-num]} (:table-settings @config)]
    (server/chsk-send! 
     [:logs/search {:query  {:match_all {}} 
                    :sort   {field direction} 
                    :from   (* page-size page-num) 
                    :size   page-size}] 
     10000
     (fn [cb-reply] 
       (do (reset! logs cb-reply)
           (if (not (nil? cb))
             (cb logs)))))))
