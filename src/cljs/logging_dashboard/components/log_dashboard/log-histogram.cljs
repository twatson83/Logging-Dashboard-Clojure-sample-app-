(ns logging-dashboard.components.log_dashboard.log_histogram
  (:require [reagent.core :as reagent]
            [taoensso.encore                  :refer (tracef debugf infof warnf errorf)]
            [cljs-flux.dispatcher                                 :refer [dispatch]]
            [logging-dashboard.dispatcher                         :as dispatcher]))

(.setOptions js/Highcharts (clj->js {:global {:useUTC false}}))

(def histogram (reagent/atom []))

(defn build-series []
  (map #(vector (:key %) (:doc_count %)) (sort-by :key @histogram)))

(defn chart-config [] 
  {:chart {:type "column" :zoomType "x" :events {:selection #(dispatch dispatcher/upsert-daterange-filter {:min (.-min  (aget (.-xAxis %) 0)) :max (.-max  (aget (.-xAxis %) 0))})}}
   :title {:text "" :floating true} 
   :credits {:enabled false}
   :legend {:enabled false}
   :xAxis {:type "datetime"}
   :yAxis {:maxPadding 0 :endOnTick false}
   :exporting {:enabled false}
   :series [{:name "logs" :data (build-series)}]})

(defn pie-did-mount [] (js/$ (fn [] (.highcharts (js/$ "#histogram") (clj->js (chart-config))))))

(defn pie-will-unmount [] (.destroy (.highcharts (js/$ "#histogram"))))

(defn pie-updated [] (.setData (aget (.-series (.highcharts (js/$ "#histogram"))) 0) (clj->js (build-series))))

(defn pie 
  [logs] 
  (reset! histogram (get-in @logs [:aggregations :histogram :buckets]))
  [:div#histogram {:style {:min-width "100%" :height "200px" :margin "0 auto" :margin-bottom "15px"}}])

(defn log-histogram
  [logs]
  (reagent/create-class {:reagent-render pie
                         :component-did-mount pie-did-mount
                         :component-did-update pie-updated
                         :component-will-unmount pie-will-unmount}))
