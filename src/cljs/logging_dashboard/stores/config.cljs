(ns logging-dashboard.stores.config
  (:require [alandipert.storage-atom      :refer [local-storage]]
            [logging-dashboard.dispatcher :as    dispatcher]
            [cljs-flux.dispatcher         :refer [register]]))

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

; When page first loads set page number to 0
(swap! config assoc-in [:table-settings :page-num] 0)

;; Validators

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

;; Callbacks

(def update-columns
  (register dispatcher/update-columns
            (fn [columns]
              (swap! config assoc :columns columns))))

(def update-sorting
  (register dispatcher/update-sorting
            (fn [sorting]
              (swap! config assoc :sorting sorting))))

(def update-settings
  (register dispatcher/update-settings 
            (fn [settings]
              (swap! config assoc :table-settings settings))))

(def update-filters
  (register dispatcher/update-filters
            (fn [filters]
              (swap! config assoc :filters filters))))
