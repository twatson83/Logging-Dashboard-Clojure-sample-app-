(ns logging-dashboard.logs
  (:require [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.index :as esi]
            [clojurewerkz.elastisch.rest.document :as esd]
            [clojurewerkz.elastisch.query         :as q]
            [clojurewerkz.elastisch.rest.response :as esrsp]
            [clojure.pprint :as pp]))

(def conn 
  (esr/connect "http://ruffer-bpwfs-d:9200" {:conn-timeout 5000}))

(defn search 
  [& {:as params}]
  (let [res  (apply esd/search conn "logs" "log" (apply concat params))
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
