(ns logging-dashboard.routes
  (:require-macros
   [secretary.core :refer [defroute]])
  (:require [secretary.core :as secretary]
            [logging-dashboard.server :as server :refer (chsk-send!)]
            [logging-dashboard.components.header    :refer [header]]
            [logging-dashboard.components.log_table :refer [log-table]]
            [logging-dashboard.components.errors    :refer [page-not-found]]
            [taoensso.encore          :as enc    :refer (tracef debugf infof warnf errorf)]
            [alandipert.storage-atom :refer [local-storage]]
            [reagent.core :as reagent :refer [atom]]))

(defn render 
  [component id]
  (reagent/render-component [component] (.getElementById js/document id)))

(defn set-default-config 
  [config]
  (let [default-config {:columns {
                          :timestamp     {:label "Timestamp" :visible true}
                          :level         {:label "Level" :visible true}
                          :message       {:label "Message" :visible true}
                          :application   {:label "Application" :visible true}
                          :service       {:label "Service" :visible true}
                          :exceptionJson {:label "Exception" :visible true}
                          }}]
    (reset! config default-config)))

(defn get-config []
  (let [config (local-storage (atom {}) :config)]
    (if (empty? @config)
      (set-default-config config))
    config))

(render header "header")

(defroute home-path "/" []
  (server/chsk-send! 
   [:logs/search {:query  {:match_all {}} 
                  :sort   {:timestamp "desc"} 
                  :from   0 
                  :size   100}] 
   10000
   (fn [cb-reply] 
     (let [content (.getElementById js/document "content")
           config  (get-config)]
       (reagent/render-component [log-table cb-reply config] content)))))

(defroute log-path "/logs/:id" [id]
  (render page-not-found "content"))

(defroute "*" []
  (render page-not-found "content"))
