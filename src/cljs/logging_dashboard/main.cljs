(ns logging-dashboard.main
  (:require [logging-dashboard.server :as server :refer (start-server-router!)]))

(server/start-server-router!)
