(ns logging-dashboard.handlers.logs
  (:require [taoensso.timbre           :as timbre :refer (tracef debugf infof warnf errorf)]
            [clojure.java.io :as io]
            [clojure.core.async        :as async :refer [<! <!! chan go thread go-loop]]
            [nomad :refer [defconfig]]))

(defconfig config (io/resource "config/config.edn"))

(def users (atom {}))
(def messages (atom {}))

(defn check-ttl []
  (go-loop [i 0]
    (<! (async/timeout 10000))
    (doseq [[k v] @users]      
      (if (< (:ttl v) (System/currentTimeMillis))
        (swap! users dissoc k)))
    (recur (inc i))))

(check-ttl)

(def id (atom 1))

(defn test-messages []
  (go-loop [i 0]
    (<! (async/timeout 10))
    (do (swap! messages assoc @id {:_id @id :application "test"})
        (reset! id (inc @id)))
    (recur (inc i))))

(test-messages)

(defn start-streaming [id config]
  (swap! users assoc id {:config config :ttl (+ (System/currentTimeMillis) 600000) }))

(defn stop-streaming [id]
  (swap! users dissoc id))

(defn renew-ttl [id]
  (swap! users assoc-in [id :ttl] (+ (System/currentTimeMillis) 600000)))
