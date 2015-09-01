(ns logging-dashboard.configs)

(defn save 
  [config]
  (spit (str "dashboards/" (get-in config [:table-settings :name]) ".json") config))

(defn get-all []
  (let [dir (clojure.java.io/file "dashboards")
        files (file-seq dir)]
    (map slurp files)))
