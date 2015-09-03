(ns logging-dashboard.handlers.logs
  (:require [taoensso.timbre           :as timbre :refer (tracef debugf infof warnf errorf)]
            [clojure.java.io :as io]
            [clojure.core.async        :as async :refer [<! <!! chan go thread go-loop]]
            [nomad :refer [defconfig]]
            [langohr.core      :as rmq]
            [langohr.channel   :as lch]
            [langohr.queue     :as lq]
            [langohr.consumers :as lc]
            [langohr.basic     :as lb]
            [clojure.data.json :as json]))

(defconfig config (io/resource "config/config.edn"))

(def messages (atom {}))

(defn message-handler
  [ch meta ^bytes payload]
  (let [message (json/read-str (String. payload "UTF-8"))]
    (swap! messages assoc (get message "Id") {:id (get message "Id")
                                              :application (get message "Application")
                                              :level (get message "Level")
                                              :exceptionJson (get message "ExceptionJson")
                                              :message (get message "Message")
                                              :timestamp (get message "Timestamp")
                                              :service (get message "Service")
                                              :session (get message "Session")})))

(def conn  (rmq/connect {:host (:rabbitmq (config))}))
(def channel  (lch/open conn))
(lq/declare channel (:queue (config)) {:exclusive false :auto-delete true})
(lq/bind channel (:queue (config)) (:exchange (config)))
(lc/subscribe channel (:queue (config)) message-handler {:auto-ack true})
