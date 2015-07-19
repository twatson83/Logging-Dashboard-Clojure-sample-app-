(ns logging-dashboard.logs
  (:require [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.index :as esi]
            [clojurewerkz.elastisch.rest.document :as esd]
            [clojurewerkz.elastisch.query         :as q]
            [clojurewerkz.elastisch.rest.response :as esrsp]
            [clojure.pprint :as pp]))

(def conn 
  (esr/connect "http://127.0.0.1:9200" {:conn-timeout 5000}))

(defn search 
  [& {:as params}]
  (let [res  (apply esd/search conn "log" "log" (apply concat params))
        hits (into [] (map #(get % :_source) (esrsp/hits-from res)))
        n    (esrsp/total-hits res)]
    {:number n :hits hits}))

(defn create-index
  []
  (esi/create conn "log" { "log" { :properties {:level   {:type "string" :store "yes" }
                                                :message {:type "string" :analyzer "snowball" }}}}))

(defn insert
  [doc]
  (esd/create conn "log" "log" doc))


(defn setup-tests
  []
  (do (insert {:level "info"  :message "im an info message"})
      (insert {:level "error" :message "im an error message"})))

(defn search-test
  []
  (pp/pprint (search :query  {:match_all{}} 
                     :sort   {:level "asc"} 
                     :from   0 
                     :size   10 
                     :filter {:term {:level "info"}})))