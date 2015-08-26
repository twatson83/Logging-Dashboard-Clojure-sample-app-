(ns logging-dashboard.components.log_dashboard.service_pie
  (:require [reagent.core :as reagent]))

(def services (reagent/atom []))

(defn build-series []
  (map #(hash-map :name (:key %) :y (:doc_count %)) @services))

(defn chart-config [] 
  {:chart {:type "pie"}
   :title {:text "Services"  :align "left" :floating true}
   :credits {:enabled false}
   :plotOptions {:pie {:showInLegend true :dataLabels {:enabled false}}}
   :legend {:enabled true :layout "vertical" :align "right" 
            :itemStyle {:fontSize "10px"} :itemWidth 140 :verticalAlign "middle"}
   :exporting {:enabled false}
   :series [{:name "services" :colorByPoint true :data (build-series)}]})

(defn pie-did-mount 
  []
  (js/$ (fn []
          (.highcharts (js/$ "#service-pie")
                       (clj->js (chart-config))))))

(defn pie-will-unmount [] (.destroy (.highcharts (js/$ "#service-pie"))))

(defn pie-updated [] (.setData (aget (.-series (.highcharts (js/$ "#service-pie"))) 0) (clj->js (build-series))))

(defn pie 
  [logs] 
  (reset! services (get-in @logs [:aggregations :services :buckets]))
  [:div#service-pie {:style {:min-width "100%" :height "300px" :margin "0 auto"}}])

(defn service-pie
  [logs]
  (reagent/create-class {:reagent-render pie
                         :component-did-mount pie-did-mount
                         :component-did-update pie-updated
                         :component-will-unmount pie-will-unmount}))
