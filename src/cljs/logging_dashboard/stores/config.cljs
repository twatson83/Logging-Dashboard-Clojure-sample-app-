(ns logging-dashboard.stores.config
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [alandipert.storage-atom      :refer [local-storage]]
            [logging-dashboard.dispatcher :as    dispatcher]
            [logging-dashboard.utils.server  :as server]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]
            [cljs.core.async        :as async  :refer (<! >! put! chan timeout)]
            [cljs-uuid-utils.core             :as uuid]
            [cljs-flux.dispatcher         :refer [register]]))

(def default-config 
  {:columns {:timestamp     {:label "Timestamp"   :type :date   :visible true}
             :Level         {:label "Level"       :type :string :visible true}
             :message       {:label "Message"     :type :string :visible true} :Application   {:label "Application" :type :string :visible true}
             :Service       {:label "Service"     :type :string :visible true}
             :session       {:label "Session"     :type :string :visible true}
             :exceptionJson {:label "Exception"   :type :string :visible true}}
   :sorting {:field :timestamp :direction "desc"}
   :query ""
   :filters {:id "1" :type :and :filters [{:id "2" :type :last-timespan :value 3600000}] }
   :table-settings {:page-size 50 :page-num 0 :refresh-interval 0 :name ""
                    :histogram-enabled true :pie-charts-enabled true
                    :update-type "none" :streaming-status "started"}})

(def config (local-storage (atom default-config) :config))

; When page first loads set page number to 0
(swap! config assoc-in [:table-settings :page-num] 0)

(add-watch config :auto-update 
           (fn [_ _ old new] 
             (let [old-type (get-in old [:table-settings :update-type])
                   new-type (get-in new [:table-settings :update-type])
                   streaming-status (get-in new [:table-settings :streaming-status])]
               (if (and (= new-type "realtime") (= streaming-status "started"))
                 (server/chsk-send! [:logs/start-streaming @config])
                 (server/chsk-send! [:logs/stop-streaming])))))

(go (while true (<! (timeout 60000)) 
           (if (and (= (get-in @config [:table-settings :update-type]) "realtime")
                    (= (get-in @config [:table-settings :streaming-status]) "started"))
             (server/chsk-send! [:logs/start-streaming @config]))))

(def configs (atom []))

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

;;

(defn- fetch-configs []
  (server/chsk-send!
   [:config/get-all]
   100000
   (fn [cb-reply]
     (reset! configs cb-reply))))

(defn- save [] (server/chsk-send! [:config/save @config] 100000 #(fetch-configs)))

;; Callbacks
(def update-columns
  (register dispatcher/update-columns
            (fn [columns] (swap! config assoc :columns columns))))

(def update-sorting
  (register dispatcher/update-sorting
            (fn [sorting] (swap! config assoc :sorting sorting))))

(def update-settings
  (register dispatcher/update-settings 
            (fn [settings]
              (swap! config assoc :table-settings settings))))

(def update-page
  (register dispatcher/update-page
            (fn [num]
              (swap! config assoc-in [:table-settings :page-num] num))))

(def update-filters
  (register dispatcher/update-filters
            (fn [filters] (swap! config assoc :filters filters))))

(def reset-config 
  (register dispatcher/reset-config
            (fn [_] (reset! config default-config))))

(def update-query
  (register dispatcher/update-query
            (fn [query] (swap! config assoc :query query))))

(def save-dashboard
  (register dispatcher/save-dashboard
            (fn [settings]
              (swap! config assoc :table-settings settings)
              (save))))

(def set-config
  (register dispatcher/set-config
            (fn [new-config] (reset! config new-config))))

(def get-configs
  (register dispatcher/get-configs
            (fn [_] (fetch-configs))))

(def delete-config
  (register dispatcher/delete-config
            (fn [name]
              (server/chsk-send!
               [:config/delete name]
               10000
               (fn [cb-reply]
                 (reset! config default-config))))))

(def start-streaming
  (register dispatcher/start-streaming
            (fn [_] 
              (swap! config assoc-in [:table-settings :streaming-status] "started"))))

(def stop-streaming
  (register dispatcher/stop-streaming
            (fn [_] 
              (swap! config assoc-in [:table-settings :streaming-status] "stopped"))))

(def upsert-daterange-filter
  (register dispatcher/upsert-daterange-filter
            (fn [range]
              (let [filters (filter #(if (or (= :date-range (:type %)) 
                                             (= :last-timespan (:type %))) false true) 
                                    (get-in @config [:filters :filters]))
                    new-filter {:id (uuid/make-random-uuid) :type :date-range :field :timestamp :from (:min range) :to (:max range)}]
                (swap! config assoc-in [:filters :filters] (conj filters new-filter))))))

(def reset-daterange-filter
  (register dispatcher/reset-daterange-filter
            (fn [_]
              (let [filters (filter #(if (or (= :date-range (:type %)) 
                                             (= :last-timespan (:type %))) false true) 
                                    (get-in @config [:filters :filters]))
                    new-filter {:id (uuid/make-random-uuid) :type :last-timespan :field :timestamp :value 3600000}]
                
                (swap! config assoc-in [:filters :filters] (conj filters new-filter))))))
