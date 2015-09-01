(ns logging-dashboard.stores.logs
  (:require [logging-dashboard.utils.server  :as server :refer (event-msg-handler)]
            [logging-dashboard.stores.config :as config-store]
            [logging-dashboard.dispatcher    :as dispatcher]
            [taoensso.encore                 :refer (tracef debugf infof warnf errorf)]
            [cljs-flux.dispatcher            :refer [register wait-for]]))

(def logs (atom {:searching false :hits '()}))

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

(defmethod event-msg-handler :logs/messages
  [[id data]]
  (swap! logs update :hits #(take (get-in @config-store/config [:table-settings :page-size]) (into % data))))

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
