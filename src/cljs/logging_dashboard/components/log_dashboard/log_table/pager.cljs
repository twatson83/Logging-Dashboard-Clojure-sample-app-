(ns logging-dashboard.components.log_dashboard.log_table.pager
  (:require [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]))

(defn pager 
  [settings logs]
  (let [{:keys [page-num page-size]} @settings
        num-of-logs (:number @logs)
        on-click #(do (.preventDefault %1) 
                      (dispatch dispatcher/update-page (%2 page-num)))
        inc-page #(on-click % inc)
        dec-page #(on-click % dec)]
    [:nav.log-pager
     [:ul.pagination
      [:li [:a {:href "#" :aria-label "Previous" 
                :on-click (if (> page-num 0) dec-page #(.preventDefault %))} "<<"] ]
      [:li [:a {:href "#" :aria-label "Next" 
                :on-click (if (-> page-num 
                                  (+ 1) 
                                  (* page-size) 
                                  (< num-of-logs)) inc-page #(.preventDefault %))} ">>"]]]]))
