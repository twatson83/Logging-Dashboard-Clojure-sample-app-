(ns logging-dashboard.configs)

(defn save 
  [config]
  (spit (str "dashboards/" (get-in config [:table-settings :name]) ".json") config))
