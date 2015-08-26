(ns logging-dashboard.components.log_dashboard.application_pie
  (:require [reagent.core :as reagent]))

(def applications (reagent/atom []))

(defn build-series []
  (map #(hash-map :name (:key %) :y (:doc_count %)) @applications))

(defn chart-config [] 
  {:chart {:type "pie"}
   :title {:text "Applications" :align "left" :floating true} 
   :credits {:enabled false}
   :plotOptions {:pie {:showInLegend true :dataLabels {:enabled false}}}
   :legend {:enabled true :layout "vertical" :align "right" 
            :itemStyle {:fontSize "10px"} :itemWidth 140 :verticalAlign "middle"}
   :exporting {:enabled false}
   :series [{:name "applications" :colorByPoint true :data (build-series)}]})

(defn pie-did-mount 
  []
  (js/$ (fn []
          (.highcharts (js/$ "#application-pie")
                       (clj->js (chart-config))))))

(defn pie-will-unmount [] (.destroy (.highcharts (js/$ "#application-pie"))))

(defn pie-updated [] (.setData (aget (.-series (.highcharts (js/$ "#application-pie"))) 0) (clj->js (build-series))))

(defn pie 
  [logs] 
  (reset! applications (get-in @logs [:aggregations :applications :buckets]))
  [:div#application-pie {:style {:min-width "100%" :height "300px" :margin "0 auto"}}])

(defn application-pie
  [logs]
  (reagent/create-class {:reagent-render pie
                         :component-did-mount pie-did-mount
                         :component-did-update pie-updated
                         :component-will-unmount pie-will-unmount}))
