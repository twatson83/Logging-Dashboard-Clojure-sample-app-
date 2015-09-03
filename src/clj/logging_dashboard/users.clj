(ns logging-dashboard.users
  (:require [taoensso.timbre           :as timbre :refer (tracef debugf infof warnf errorf)]
            [clojure.core.async        :as async :refer [<! <!! chan go thread go-loop]]))

(def users (atom {}))

(defn check-ttl []
  (go-loop [i 0]
    (<! (async/timeout 60000))
    (doseq [[k v] @users]      
      (if (< (:ttl v) (System/currentTimeMillis))
        (swap! users dissoc k)))
    (recur (inc i))))

(check-ttl)

(defmulti filter-messages (fn [f l] (:type f)))

(defmethod filter-messages :and 
  [filter log]
  (every? #(filter-messages % log) (:filters filter)))

(defmethod filter-messages :or
  [filter log]
  (every? #(filter-messages % log) (:filters filter)))

(defmethod filter-messages :equals
  [filter log]
  (= ((:field filter) log) (:value filter)))

(defmethod filter-messages :not-equals
  [filter log]
  (not= ((:field filter) log) (:value filter)))

(defmethod filter-messages :less-than
  [filter log]
  (< ((:field filter) log) (:value filter)))

(defmethod filter-messages :greater-than
  [filter log]
  (> ((:field filter) log) (:value filter)))

(defmethod filter-messages :last-timespan
  [filter log]
  (> (:timestamp log) (- (System/currentTimeMillis) (:value filter))))

(defmethod filter-messages :date-range
  [filter log]
  (and (> ((:field filter) log) (:from filter)) (< (:timestamp log) (:to filter))))

(defn start-streaming [id config]
  (swap! users assoc id {:config config :ttl (+ (System/currentTimeMillis) 600000)}))

(defn stop-streaming [id]
  (swap! users dissoc id))
