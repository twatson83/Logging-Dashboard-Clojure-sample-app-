(ns logging-dashboard.config
  (:require [alandipert.storage-atom :refer [local-storage]]))

(def default-config 
  {:columns {:timestamp     {:label "Timestamp" :visible true}
             :level         {:label "Level" :visible true}
             :message       {:label "Message" :visible true}
             :application   {:label "Application" :visible true}
             :service       {:label "Service" :visible true}
             :exceptionJson {:label "Exception" :visible true}}
   :sorting {:field :timestamp :direction "desc"}
   :filters {}
   :table-settings {:page-size 100 :page-num 0 :refresh-interval 0}})

(def config (local-storage (atom default-config) :config))
(swap! config assoc-in [:table-settings :page-num] 0)

(defn validate-page-size
  [page-size]
  (and (not (nil? page-size)) 
       (not= "" page-size)
       (> page-size 0)))

(defn validate-refresh-interval
  [refresh-interval]
  (and (not (nil? refresh-interval)) 
       (not= "" refresh-interval)
       (>= refresh-interval 0)))
