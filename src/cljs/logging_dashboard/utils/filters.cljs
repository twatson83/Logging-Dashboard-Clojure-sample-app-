(ns logging-dashboard.utils.filters
  (:require [taoensso.encore   :refer (tracef debugf infof warnf errorf)]))

(defn filter-exists? 
  "Returns true if filter exists in tree"
  [field value type filter]
  (if (and (= (:type filter) type) 
           (= (:field filter) field)
           (= (:value filter) value))
      true
      (= true (some #(filter-exists? field value type %) (:filters filter)))))

(defn remove-filter
  "Returns tree excluding specified filter"
  [field value type f]
  (if (and (= (:type f) type) 
           (= (:field f) field)
           (= (:value f) value))    
    nil
    (assoc f :filters (doall (filter #(not= nil (remove-filter field value type %)) (:filters f))))))

