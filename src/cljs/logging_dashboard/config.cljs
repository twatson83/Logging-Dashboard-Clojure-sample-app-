(ns logging-dashboard.config
  (:require [alandipert.storage-atom :refer [local-storage]]
            [reagent.core            :refer [atom]]))

(def default-config 
  {:columns {:timestamp     {:label "Timestamp" :visible true}
             :level         {:label "Level" :visible true}
             :message       {:label "Message" :visible true}
             :application   {:label "Application" :visible true}
             :service       {:label "Service" :visible true}
             :exceptionJson {:label "Exception" :visible true}}
   :sorting {:field :timestamp :direction "desc"}
   :page-size 100 :page-num 0})

(def config (local-storage (atom default-config) :config))

(defn get-config []
  (swap! config assoc :page-num 0)
  config)

