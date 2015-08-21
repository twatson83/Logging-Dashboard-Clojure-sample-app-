# Logging Dashboard (Clojure sample app)

This is an example [Clojure/Clojurescript](http://clojure.org) app I built to view logs stored in [ElasticSearch](https://www.elastic.co/products/elasticsearch). 

The client side uses a [flux](http://facebook.github.io/flux/docs/overview.html#content) architecture and renders html using [reagent](https://github.com/reagent-project/reagent) which is an interface to [react](http://facebook.github.io/react/).

## Running

    lein run 
    lein cljsbuild once
