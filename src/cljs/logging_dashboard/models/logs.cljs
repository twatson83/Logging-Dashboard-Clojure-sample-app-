(ns logging-dashboard.models.logs
  (:require [logging-dashboard.server :as server :refer (chsk-send!)]
            [taoensso.encore          :as enc    :refer (tracef debugf infof warnf errorf)]
            [reagent.core :as reagent :refer [atom]]))

(def logs (atom []))

(defn search
  [config cb]
  (let [sort-config (:sorting config)]
    (server/chsk-send! 
     [:logs/search {:query  {:match_all {}} 
                    :sort   {(:field sort-config) (:direction sort-config)} 
                    :from   (* (:page-size config) (:page-num config)) 
                    :size   (:page-size config)}] 
     10000
     (fn [cb-reply] 
       (do (reset! logs cb-reply)
           (if (not (nil? cb))
             (cb logs)))))))
