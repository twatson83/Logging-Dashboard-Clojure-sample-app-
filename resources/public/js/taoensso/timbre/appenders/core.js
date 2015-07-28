// Compiled by ClojureScript 0.0-2411
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a simple `println` appender for Clojure/Script.
* Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
* 
* :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
* @param {...*} var_args
*/
taoensso.timbre.appenders.core.println_appender = (function() { 
var println_appender__delegate = function (p__23531){
var vec__23534 = p__23531;
var _opts = cljs.core.nth.call(null,vec__23534,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__23534,_opts){
return (function (data){
var map__23535 = data;
var map__23535__$1 = ((cljs.core.seq_QMARK_.call(null,map__23535))?cljs.core.apply.call(null,cljs.core.hash_map,map__23535):map__23535);
var output_fn = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__23534,_opts))
], null);
};
var println_appender = function (var_args){
var p__23531 = null;
if (arguments.length > 0) {
  p__23531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_appender__delegate.call(this,p__23531);};
println_appender.cljs$lang$maxFixedArity = 0;
println_appender.cljs$lang$applyTo = (function (arglist__23536){
var p__23531 = cljs.core.seq(arglist__23536);
return println_appender__delegate(p__23531);
});
println_appender.cljs$core$IFn$_invoke$arity$variadic = println_appender__delegate;
return println_appender;
})()
;
/**
* Returns a simple js/console appender for ClojureScript, or nil if no
* js/console exists.
*/
taoensso.timbre.appenders.core.console__QMARK_appender = (function console__QMARK_appender(){
var temp__4126__auto__ = (function (){var and__3749__auto__ = typeof console !== 'undefined';
if(and__3749__auto__){
return console.log;
} else {
return and__3749__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var have_logger_QMARK_ = temp__4126__auto__;
var have_warn_logger_QMARK_ = console.warn;
var have_error_logger_QMARK_ = console.error;
var level__GT_logger = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),(cljs.core.truth_(have_error_logger_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"info","info",-317069002)),new cljs.core.Keyword(null,"error","error",-978969032),(cljs.core.truth_(have_error_logger_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"info","info",-317069002)),new cljs.core.Keyword(null,"warn","warn",-436710552),(cljs.core.truth_(have_warn_logger_QMARK_)?new cljs.core.Keyword(null,"warn","warn",-436710552):new cljs.core.Keyword(null,"info","info",-317069002))], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (have_warn_logger_QMARK_,have_error_logger_QMARK_,level__GT_logger,have_logger_QMARK_,temp__4126__auto__){
return (function (data){
var map__23540 = data;
var map__23540__$1 = ((cljs.core.seq_QMARK_.call(null,map__23540))?cljs.core.apply.call(null,cljs.core.hash_map,map__23540):map__23540);
var vargs_ = cljs.core.get.call(null,map__23540__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var output_fn = cljs.core.get.call(null,map__23540__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var level = cljs.core.get.call(null,map__23540__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var vargs = cljs.core.force.call(null,vargs_);
var vec__23541 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__23541,(0),null);
var vnext = cljs.core.nth.call(null,vec__23541,(1),null);
var output = ((cljs.core._EQ_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723)))?cljs.core.into_array.call(null,vnext):output_fn.call(null,data));
var G__23542 = (((level__GT_logger.call(null,level) instanceof cljs.core.Keyword))?level__GT_logger.call(null,level).fqn:null);
switch (G__23542) {
case "warn":
return console.warn(output);

break;
case "error":
return console.error(output);

break;
default:
return console.log(output);

}
});})(have_warn_logger_QMARK_,have_error_logger_QMARK_,level__GT_logger,have_logger_QMARK_,temp__4126__auto__))
], null);
} else {
return null;
}
});
