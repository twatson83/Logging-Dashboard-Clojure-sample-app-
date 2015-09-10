(ns logging-dashboard.repositories.logs
  (import java.io.File)
  (:require [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.index :as esi]
            [clojurewerkz.elastisch.rest.document :as esd]
            [clojurewerkz.elastisch.query         :as q]
            [clojurewerkz.elastisch.aggregation   :as aggs]
            [clojurewerkz.elastisch.rest.response :as esrsp]
            [taoensso.timbre           :as timbre :refer (tracef debugf infof warnf errorf)]
            [nomad :refer [defconfig]]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]))

(defconfig config (io/as-url (File. "config/config.edn")))

(def conn (esr/connect (:es (config)) {:conn-timeout 5000}))

(def exact-fields {:Application "Application.Exact"
                   :Service "Service.Exact"
                   :Level "Level.Exact"
                   :message "message"
                   :exceptionJson "exceptionJson"
                   :timestamp "timestamp"
                   :session "session"})

(defmulti build-query :type)

(defmethod build-query :and 
  [filter]
  {:and {:filters (map build-query (:filters filter))}})

(defmethod build-query :or
  [filter]
  {:or {:filters (map build-query (:filters filter))}})

(defmethod build-query :equals
  [filter]
  {:term {((:field filter) exact-fields) (:value filter)}})

(defmethod build-query :not-equals
  [filter]
  {:not {:term {((:field filter) exact-fields) (:value filter)}}})

(defmethod build-query :less-than
  [filter]
  {:range {(:field filter) {:to (:value filter)}}})

(defmethod build-query :greater-than
  [filter]
  {:range {(:field filter) {:from (:value filter)}}})

(defmethod build-query :last-timespan
  [filter]
  {:range {"timestamp" {:from (- (System/currentTimeMillis) (:value filter))}}})

(defmethod build-query :date-range
  [filter]
  {:range {(:field filter) {:from (:from filter) :to (:to filter)}}})

(defn search 
  [{:keys [from size sort filters query]}]
  (let [filter (build-query filters)
        res (esd/search conn "logs" "log" 
                        :query (if (or (nil? query) (empty? query)) 
                                 (q/match-all) 
                                 {:multi_match 
                                  {:query query
                                   :fields ["Application" "Service" "Level" "message" "exceptionJson" "session"]}})
                        :filter filter :from from
                        :size size :sort sort
                        :aggregations { :logs {"filter" filter
                                               :aggregations {:applications (aggs/terms "Application.Exact") 
                                                              :services (aggs/terms "Service.Exact")
                                                              :levels (aggs/terms "Level.Exact")
                                                              :histogram (aggs/date-histogram "timestamp" "minute")}}})
        hits (into [] (map #(get % :_source) (esrsp/hits-from res)))
        n    (esrsp/total-hits res)
        aggs (esrsp/aggregations-from res)]
    {:number n :hits hits :aggregations aggs}))

(defn create-index
  []
  (esi/create conn "logs" { "log" { :properties {:level   {:type "string" :store "yes" }
                                                :message {:type "string" :analyzer "snowball" }}}}))

(defn insert
  [doc]
  (esd/create conn "logs" "log" doc))
