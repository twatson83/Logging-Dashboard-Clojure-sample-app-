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
    (<! (async/timeout 60000))
    (doseq [[k v] @users]      
      (debugf "Users %s" @users)
      (if (< (:ttl v) (System/currentTimeMillis))
        (swap! users dissoc k)))
    (recur (inc i))))

(check-ttl)

(def id (atom 1))

(defn test-messages []
  (go-loop [i 0]
    (<! (async/timeout 500))
    (do (swap! messages assoc @id {:id @id :application "test" :service "test" :level "Info" :message "msg" :timestamp (str "2015-09-01T13:21:02."  @id  "+01:00") :exceptionJson ""})
        (reset! id (inc @id)))
    (recur (inc i))))

(test-messages)

(defn start-streaming [id config]
  (swap! users assoc id {:config config :ttl (+ (System/currentTimeMillis) 600000) }))

(defn stop-streaming [id]
  (swap! users dissoc id))
