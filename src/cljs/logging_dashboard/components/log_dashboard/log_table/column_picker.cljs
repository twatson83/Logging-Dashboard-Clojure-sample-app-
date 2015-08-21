(ns logging-dashboard.components.log_dashboard.log_table.column_picker
  (:require [logging-dashboard.dispatcher     :as dispatcher]
            [cljs-flux.dispatcher             :refer [dispatch]]))

(defn column-picker 
  [columns]
  (let [cols (atom @columns)]
    [:div.btn-group.column-picker
     [:button.btn.btn-default.btn-sm.dropdown-toggle {:type "button"
                                                      :data-toggle "dropdown"
                                                      :aria-haspopup "true"
                                                      :aria-expanded "false"} "Columns "
      [:span.caret]]
     [:ul.dropdown-menu 
      (for [[k v] @cols]
        (let [visible (:visible v)
              on-change #(do (swap! cols assoc-in [k :visible] (not (get-in @cols [k :visible])))
                             (dispatch dispatcher/update-columns @cols))]
          ^{:key (str "cp" k)}
          [:li 
           [:div.checkbox 
            [:label 
             [:input {:type "checkbox" :checked visible :on-change on-change} (:label v)]]]]))]]))

