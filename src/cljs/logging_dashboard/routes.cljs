(ns logging-dashboard.routes
  (:require-macros
   [secretary.core :refer [defroute]])
  (:require [secretary.core :as secretary]
            [logging-dashboard.server :as server :refer (chsk-send!)]
            [logging-dashboard.components.header    :refer [header]]
            [logging-dashboard.components.log-table :refer [log-table]]
            [logging-dashboard.components.errors    :refer [page-not-found]]
            [taoensso.encore          :as enc    :refer (tracef debugf infof warnf errorf)]
            [reagent.core :as reagent]))

(defn render 
  [component id]
  (reagent/render-component [component] (.getElementById js/document id)))

(render header "header")

(defroute home-path "/" []
  (server/chsk-send! 
   [:logs/search {:query  {:match_all {}} 
                  :sort   {:timestamp "desc"} 
                  :from   0 
                  :size   100}] 
   10000
   (fn [cb-reply] 
     (do (debugf "Reply - %s" cb-reply)
       (reagent/render-component [log-table cb-reply] (.getElementById js/document "content"))))))

(defroute log-path "/logs/:id" [id]
  (render page-not-found "content"))

(defroute "*" []
  (render page-not-found "content"))
