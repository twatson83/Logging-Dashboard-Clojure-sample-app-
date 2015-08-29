(ns logging-dashboard.configs
  (require [clojure.java.io :as io])
  (:import java.io.File))

(defn save [config] (spit (str "dashboards/" (get-in config [:table-settings :name]) ".json") config))

(defn delete [name]
  (let [filePath (str "dashboards/" name ".json")]
    (if (.exists (io/as-file filePath))
      (io/delete-file filePath))))

(defn get-all [] (map #(-> % .getPath slurp read-string) (-> "dashboards" File. .listFiles)))
