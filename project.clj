(defproject logging-dashboard "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :main logging-dashboard.server
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.10.0-alpha1"]
                 [org.clojure/clojurescript "0.0-2411" :exclusions [org.apache.ant/ant]]
                 [compojure "1.3.2"]
                 [ring/ring-core "1.3.2"]
                 [ring/ring-json "0.3.1"]
                 [ring/ring-defaults "0.1.4"]
                 [clojurewerkz/elastisch "2.1.0"]
                 [com.novemberain/langohr "3.3.0"]
                 [secretary "1.2.3"]
                 [http-kit "2.1.18"]
                 [com.taoensso/timbre "4.0.2"]
                 [com.taoensso/sente "1.5.0"]
                 [reagent "0.5.0"]
                 [alandipert/storage-atom "1.2.4"]
                 [org.clojars.frozenlock/reagent-modals "0.2.3"]
                 [reagent-forms "0.5.5"]
                 [cljs-flux "0.1.2"]
                 [jarohen/nomad "0.7.1"]
                 [clj-time "0.11.0"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]]
  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.6"]
            [lein-bower "0.5.1"]
            [cider/cider-nrepl "0.8.1"]
            [lein-npm "0.6.1"]]
  :jar-exclusions [#".*\.edn"]
  :source-paths ["src/clj" "src/cljs"]
  :ring {:handler logging-dashboard.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler {:output-dir "resources/public/js"
                           :output-to  "resources/public/js/logging-dashboard.js"
                           ;:source-map "resources/public/js/logging-dashboard.js.map"
                           :closure-warnings {:non-standard-jsdoc :off}
                           :optimizations :advanced
                           :externs ["externs.js"]
                           :pretty-print false}}]})

