(ns logging-dashboard.stores.logs
  (:require [logging-dashboard.utils.server  :as server]
            [logging-dashboard.stores.config :as config-store]
            [logging-dashboard.dispatcher    :as dispatcher]
            [cljs-flux.dispatcher            :refer [register wait-for]]))

(def logs (atom {:searching false}))

(defn- search 
  [& args]
  (let [{:keys [field direction]} (:sorting @config-store/config)
        {:keys [page-size page-num]} (:table-settings @config-store/config)]
    (swap! logs assoc :searching true)
    (server/chsk-send! 
     [:logs/search {:query  {:match_all {}} 
                    :sort   {field direction} 
                    :from   (* page-size page-num) 
                    :size   page-size}] 
     10000
     (fn [cb-reply] 
       (swap! logs assoc :hits (:hits cb-reply) :number (:number cb-reply) :searching false)))))

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

(def logs-search
  (register dispatcher/logs-search search))
