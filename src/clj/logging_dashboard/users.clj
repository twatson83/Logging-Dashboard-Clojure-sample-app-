(ns logging-dashboard.users
  (:require [taoensso.timbre           :as timbre :refer (tracef debugf infof warnf errorf)]
            [clj-time.core :as t]
            [clj-time.coerce :as tc]
            [clj-time.format :as tf]
            [clojure.core.async        :as async :refer [<! <!! chan go thread go-loop]]))

(def users (atom {}))

(defn check-ttl []
  (go-loop [i 0]
    (<! (async/timeout 60000))
    (doseq [[k v] @users]      
      (if (< (:ttl v) (System/currentTimeMillis))
        (swap! users dissoc k)))
    (recur (inc i))))

(def field-map {:Application :application
                :Service :service
                :Level :level
                :exceptionJson :exceptionJson
                :message :message
                :session :session
                :timestamp :timestamp})

(defn iso->unix 
  [datetime]
  (-> datetime tf/parse tc/to-long))

(defmulti filter-messages (fn [f l] (:type f)))

(defmethod filter-messages :and 
  [filter log]
  (every? #(filter-messages % log) (:filters filter)))

(defmethod filter-messages :or
  [filter log]
  (= true (some true? (map #(filter-messages % log) (:filters filter)))))

(defmethod filter-messages :equals
  [filter log]
  (= (((:field filter) field-map) log) (:value filter)))

(defmethod filter-messages :not-equals
  [filter log]
  (do (debugf "lv %s, fv %s" ((:field filter) log) (:value filter))
      (not= (((:field filter) field-map) log) (:value filter))))

(defmethod filter-messages :less-than
  [filter log]
  (if (= (:type filter) "date")
    (< (iso->unix (((:field filter) field-map) log)) (:value filter))
    (< (((:field filter) field-map) log) (:value filter))))

(defmethod filter-messages :greater-than
  [filter log]
  (> (((:field filter) field-map) log) (:value filter)))

(defmethod filter-messages :last-timespan
  [filter log]
  (> (iso->unix (:timestamp log)) (- (System/currentTimeMillis) (:value filter))))

(defmethod filter-messages :date-range
  [filter log]
  (and (> (iso->unix (((:field filter) field-map) log)) (:from filter)) (< (iso->unix (((:field filter) field-map) log)) (:to filter))))

(defn filter-by-query
  [query log]
  (let [pattern (re-pattern (str "(?i)" query))]
    (= true (some true? (map #(if (nil? (second %)) false (boolean (re-find pattern (second %1)))) log)))))

(defn filter-message
  [config log]
  (if (and (not= (:query config) nil) (not= "" (:query config)))
    (and (filter-by-query (:query config) log) (filter-messages (:filters config) log))
    (filter-messages (:filters config) log)))

(defn start-streaming [id config]
  (swap! users assoc id {:config config :ttl (+ (System/currentTimeMillis) 600000)}))

(defn stop-streaming [id]
  (swap! users dissoc id))
