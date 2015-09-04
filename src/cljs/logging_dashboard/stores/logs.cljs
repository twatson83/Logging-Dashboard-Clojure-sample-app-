(ns logging-dashboard.stores.logs
  (:require [logging-dashboard.utils.server  :as server :refer (event-msg-handler)]
            [logging-dashboard.stores.config :as config-store]
            [logging-dashboard.dispatcher    :as dispatcher]
            [taoensso.encore                 :refer (tracef debugf infof warnf errorf)]
            [cljs-flux.dispatcher            :refer [register wait-for]]))

(def logs (atom {:searching false :hits '()}))

(defn tree-search
  ([filter]
   (tree-search filter 0))
  ([filter start-time]
   (let [time (max (case (:type filter)
                     :greater-than (:value filter)
                     :date-range (:from filter)
                     :last-timespan (- (* 1000 (.unix (js/moment))) (:value filter))
                     nil) start-time)
         filters (:filters filter)]
     (if (or (nil? filters) (= 0 (count filters))) 
       time     
       (apply max (map #(tree-search % time) filters))))))

(defn process-data
  []
  (let [start-time (tree-search (:filters @config-store/config))   
        histogram (get-in @logs [:aggregations :histogram :buckets])]
    (if-not (and (nil? start-time) (nil? histogram))
      (swap! logs assoc-in [:aggregations :histogram :buckets] (filter #(> (:key %) start-time) histogram)))))

(js/setInterval process-data 10000)

(defn- search []
  (let [{:keys [field direction]} (:sorting @config-store/config)
        {:keys [page-size page-num]} (:table-settings @config-store/config)
        filters (:filters @config-store/config)
        query (:query @config-store/config)]
    (swap! logs assoc :searching true)
    (server/chsk-send! 
     [:logs/search {:filters filters
                    :sort  {field direction} 
                    :from  (* page-size page-num) 
                    :size  page-size
                    :query query}] 
     100000
     (fn [cb-reply] 
       (swap! logs assoc :hits (seq (:hits cb-reply)) :number (:number cb-reply) :aggregations (get-in cb-reply [:aggregations :logs]) :searching false)))))

;; handlers 

(defn find-first [f coll] (first (filter f coll)))

(defn add-to-agg 
  [log aggregation field]
  (let [docs (get-in @logs [:aggregations aggregation :buckets])
        agg (find-first #(= (:key %) (field log)) docs)
        inc-agg #(if (= (:key %) (field log)) 
                 (update % :doc_count inc) %)]
    (if-not (nil? agg)
      (swap! logs update-in [:aggregations aggregation :buckets] #(map inc-agg %))
      (swap! logs update-in [:aggregations aggregation :buckets] #(conj % {:key (field log) :doc_count 1})))))

(defn add-to-histogram-agg  [log]
  (let [docs (get-in @logs [:aggregations :histogram :buckets])
        timestamp (* 1000 (.unix (js/moment (:timestamp log))))
        agg (find-first #(and (>= timestamp (:key %)) (<= timestamp (+ (:key %) 60000))) docs)
        inc-agg #(if (and (>= timestamp (:key %)) (<= timestamp (+ (:key %) 60000))) 
                 (update % :doc_count inc) %)]
    (if-not (nil? agg)
      (swap! logs update-in [:aggregations :histogram :buckets] #(map inc-agg %))
      (let [bucket-timestamp (* 60000 (int (/ timestamp 60000)))]
        (swap! logs update-in [:aggregations :histogram :buckets] #(conj % {:key bucket-timestamp 
                                                                            :key_as_string (.format (.unix js/moment (/ bucket-timestamp 1000)))
                                                                            :doc_count 1}))))))

(defmethod event-msg-handler :logs/messages
  [[id data]]
  (swap! logs update :hits #(take (get-in @config-store/config [:table-settings :page-size]) (into % data)))
  (doseq [log data]
    (do (add-to-agg log :applications :application)
        (add-to-agg log :services :service)
        (add-to-histogram-agg log)
        (add-to-agg log :levels :level))))

;; callbacks

(def update-sorting
  (register dispatcher/update-sorting
            (fn [& args]  
              (wait-for dispatcher/update-sorting [config-store/update-sorting])
              (search))))

(def update-settings
  (register dispatcher/update-settings 
            (fn [& args]  
              (wait-for dispatcher/update-settings [config-store/update-settings])
              (search))))

(def update-page
  (register dispatcher/update-page
            (fn [& args]  
              (wait-for dispatcher/update-page [config-store/update-page])
              (search))))

(def update-filters
  (register dispatcher/update-filters 
            (fn [& args]  
              (wait-for dispatcher/update-filters [config-store/update-filters])
              (search))))

(def reset-config
  (register dispatcher/reset-config
            (fn [& args]  
              (wait-for dispatcher/reset-config [config-store/reset-config])
              (search))))

(def logs-search (register dispatcher/logs-search search))

(def update-query
  (register dispatcher/update-query
            (fn [query]
              (wait-for dispatcher/update-query [config-store/update-query])
              (search))))

(def save-dashboard
  (register dispatcher/save-dashboard
            (fn [& args]  
              (wait-for dispatcher/save-dashboard [config-store/save-dashboard])
              (search))))

(def set-config
  (register dispatcher/set-config
            (fn [& args]  
              (wait-for dispatcher/set-config [config-store/set-config])
              (search))))

(def start-streaming
  (register dispatcher/start-streaming
            (fn [_] (server/chsk-send! [:logs/start-streaming @config-store/config]))))

(def stop-streaming
  (register dispatcher/stop-streaming
            (fn [_] (server/chsk-send! [:logs/stop-streaming]))))

(def upsert-daterange-filter
  (register dispatcher/upsert-daterange-filter
            (fn [& args]
              (wait-for dispatcher/upsert-daterange-filter [config-store/upsert-daterange-filter])
              (search))))
 
