// Compiled by ClojureScript 0.0-2411
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('taoensso.timbre.appenders.core');
goog.require('taoensso.timbre.appenders.core');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* (fn [data]) -> string output.
*/
taoensso.timbre.default_output_fn = (function() {
var default_output_fn = null;
var default_output_fn__1 = (function (data){
return default_output_fn.call(null,null,data);
});
var default_output_fn__2 = (function (opts,data){
var map__23496 = data;
var map__23496__$1 = ((cljs.core.seq_QMARK_.call(null,map__23496))?cljs.core.apply.call(null,cljs.core.hash_map,map__23496):map__23496);
var timestamp_ = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var hostname_ = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var _QMARK_ns_str = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var msg_ = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var vargs_ = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var _QMARK_err_ = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"?err_","?err_",789480858));
var level = cljs.core.get.call(null,map__23496__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var map__23497 = opts;
var map__23497__$1 = ((cljs.core.seq_QMARK_.call(null,map__23497))?cljs.core.apply.call(null,cljs.core.hash_map,map__23497):map__23497);
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,level))),cljs.core.str(" "),cljs.core.str("["),cljs.core.str((function (){var or__3761__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return "?ns";
}
})()),cljs.core.str("] - "),cljs.core.str(cljs.core.force.call(null,msg_)),cljs.core.str((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4126__auto__ = cljs.core.force.call(null,_QMARK_err_);
if(cljs.core.truth_(temp__4126__auto__)){
var err = temp__4126__auto__;
return [cljs.core.str("\n"),cljs.core.str(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
} else {
return null;
}
})()))].join('');
});
default_output_fn = function(opts,data){
switch(arguments.length){
case 1:
return default_output_fn__1.call(this,opts);
case 2:
return default_output_fn__2.call(this,opts,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
default_output_fn.cljs$core$IFn$_invoke$arity$1 = default_output_fn__1;
default_output_fn.cljs$core$IFn$_invoke$arity$2 = default_output_fn__2;
return default_output_fn;
})()
;

taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console__QMARK_appender;
/**
* Example (+default) Timbre v4 config map.
* 
* APPENDERS
* An appender is a map with keys:
* :min-level       ; Level keyword, or nil (=> no minimum level)
* :enabled?        ;
* :async?          ; Dispatch using agent? Useful for slow appenders
* :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
* :output-fn       ; Optional override for inherited (fn [data]) -> string
* :fn              ; (fn [data]) -> side effects, with keys described below
* 
* An appender's fn takes a single data map with keys:
* :config          ; Entire config map (this map, etc.)
* :appender-id     ; Id of appender currently dispatching
* :appender        ; Entire map of appender currently dispatching
* 
* :instant         ; Platform date (java.util.Date or js/Date)
* :level           ; Keyword
* :error-level?    ; Is level e/o #{:error :fatal}?
* :?ns-str         ; String, or nil
* :?file           ; String, or nil  ; Waiting on CLJ-865
* :?line           ; Integer, or nil ; Waiting on CLJ-865
* 
* :?err_           ; Delay - first-arg platform error, or nil
* :vargs_          ; Delay - raw args vector
* :hostname_       ; Delay - string (clj only)
* :msg_            ; Delay - args string
* :timestamp_      ; Delay - string
* :output-fn       ; (fn [data]) -> formatted output string
* 
* :profile-stats   ; From `profile` macro
* 
* Also incl. any `*context*` keys (see `with-context`).
* 
* MIDDLEWARE
* Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
* transform the data map dispatched to appender fns. If any middleware returns
* nil, NO dispatching will occur (i.e. the event will be filtered).
* 
* The `example-config` source code contains further settings and details.
* See also `set-config!`, `merge-config!`, `set-level!`.
*/
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console__QMARK_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
* See `example-config` for info.
*/
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function swap_config_BANG_(f){
return taoensso.timbre._STAR_config_STAR_ = f.call(null,taoensso.timbre._STAR_config_STAR_);
});
taoensso.timbre.set_config_BANG_ = (function set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,m);
}));
});
taoensso.timbre.set_level_BANG_ = (function set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}));
});
taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
taoensso.timbre.scored_levels = cljs.core.zipmap.call(null,taoensso.timbre.ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
taoensso.timbre.valid_levels = cljs.core.set.call(null,taoensso.timbre.ordered_levels);
taoensso.timbre.valid_level = (function valid_level(level){
var or__3761__auto__ = taoensso.timbre.valid_levels.call(null,level);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid logging level: "),cljs.core.str(level)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function level_GT__EQ_(x,y){
return (cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,x))) >= cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,y))));
});
/**
* (fn [whitelist blacklist]) -> (fn [ns]) -> ?unfiltered-ns
*/
taoensso.timbre.compile_ns_filters = (function (){var __GT_re_pattern = (function (x){
if(taoensso.encore.re_pattern_QMARK_.call(null,x)){
return x;
} else {
if(typeof x === 'string'){
var s = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)");
return cljs.core.re_pattern.call(null,s);
} else {
throw cljs.core.ex_info.call(null,"No matching clause",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
return taoensso.encore.memoize_.call(null,((function (__GT_re_pattern){
return (function (whitelist,blacklist){
var whitelist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,whitelist);
var blacklist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,blacklist);
var white_filter = ((cljs.core.empty_QMARK_.call(null,whitelist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (p1__23498_SHARP_){
return cljs.core.re_find.call(null,p1__23498_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
,whitelist_STAR_);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))

);
var black_filter = ((cljs.core.empty_QMARK_.call(null,blacklist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return cljs.core.not.call(null,cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (p1__23499_SHARP_){
return cljs.core.re_find.call(null,p1__23499_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
,blacklist_STAR_));
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))

);
return ((function (whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern){
return (function (ns){
if(cljs.core.truth_((function (){var and__3749__auto__ = white_filter.call(null,ns);
if(cljs.core.truth_(and__3749__auto__)){
return black_filter.call(null,ns);
} else {
return and__3749__auto__;
}
})())){
return ns;
} else {
return null;
}
});
;})(whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern))
});})(__GT_re_pattern))
);
})();
/**
* (fn [whitelist blacklist ns]) -> ?unfiltered-ns
*/
taoensso.timbre.ns_filter = taoensso.encore.memoize_.call(null,(function (whitelist,blacklist,ns){
return taoensso.timbre.compile_ns_filters.call(null,whitelist,blacklist).call(null,ns);
}));
taoensso.timbre.__GT_delay = (function __GT_delay(x){
if(cljs.core.delay_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.Delay((function (){
return x;
}),null));
}
});
taoensso.timbre.vsplit_err1 = (function vsplit_err1(p__23500){
var vec__23502 = p__23500;
var v1 = cljs.core.nth.call(null,vec__23502,(0),null);
var v = vec__23502;
if(!(taoensso.encore.error_QMARK_.call(null,v1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null);
} else {
return taoensso.encore.vsplit_first.call(null,v);
}
});
/**
* Used for rate limiters, some appenders (e.g. Carmine), etc.
* Goal: (hash data-1) = (hash data-2) iff data-1 "the same" as data-2 for
* rate-limiting purposes, etc.
*/
taoensso.timbre.default_data_hash_fn = (function default_data_hash_fn(data){
var map__23505 = data;
var map__23505__$1 = ((cljs.core.seq_QMARK_.call(null,map__23505))?cljs.core.apply.call(null,cljs.core.hash_map,map__23505):map__23505);
var vargs_ = cljs.core.get.call(null,map__23505__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var _QMARK_line = cljs.core.get.call(null,map__23505__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
var _QMARK_ns_str = cljs.core.get.call(null,map__23505__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var vargs = cljs.core.force.call(null,vargs_);
return [cljs.core.str((function (){var or__3761__auto__ = cljs.core.some.call(null,((function (map__23505,map__23505__$1,vargs_,_QMARK_line,_QMARK_ns_str,vargs){
return (function (p1__23503_SHARP_){
var and__3749__auto__ = cljs.core.map_QMARK_.call(null,p1__23503_SHARP_);
if(and__3749__auto__){
return new cljs.core.Keyword("timbre","hash","timbre/hash",-221081827).cljs$core$IFn$_invoke$arity$1(p1__23503_SHARP_);
} else {
return and__3749__auto__;
}
});})(map__23505,map__23505__$1,vargs_,_QMARK_line,_QMARK_ns_str,vargs))
,vargs);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_ns_str,vargs], null);
}
})())].join('');
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_.call(null,(function (appender_id,specs){
return taoensso.encore.rate_limiter_STAR_.call(null,specs);
}));
}
/**
* Would Timbre currently log at the given logging level?
* * Compile-time `?ns-str` arg required to support ns filtering.
* * `config` arg required to support non-global config.
* @param {...*} var_args
*/
taoensso.timbre.log_QMARK_ = (function() { 
var log_QMARK___delegate = function (level,p__23506){
var vec__23508 = p__23506;
var _QMARK_ns_str = cljs.core.nth.call(null,vec__23508,(0),null);
var config = cljs.core.nth.call(null,vec__23508,(1),null);
var config__$1 = (function (){var or__3761__auto__ = config;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var active_level = (function (){var or__3761__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return new cljs.core.Keyword(null,"report","report",1394055010);
}
})();
var and__3749__auto__ = taoensso.timbre.level_GT__EQ_.call(null,level,active_level);
if(and__3749__auto__){
var and__3749__auto____$1 = taoensso.timbre.ns_filter.call(null,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774).cljs$core$IFn$_invoke$arity$1(config__$1),new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142).cljs$core$IFn$_invoke$arity$1(config__$1),(function (){var or__3761__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return "";
}
})());
if(cljs.core.truth_(and__3749__auto____$1)){
return true;
} else {
return and__3749__auto____$1;
}
} else {
return and__3749__auto__;
}
};
var log_QMARK_ = function (level,var_args){
var p__23506 = null;
if (arguments.length > 1) {
  p__23506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log_QMARK___delegate.call(this,level,p__23506);};
log_QMARK_.cljs$lang$maxFixedArity = 1;
log_QMARK_.cljs$lang$applyTo = (function (arglist__23509){
var level = cljs.core.first(arglist__23509);
var p__23506 = cljs.core.rest(arglist__23509);
return log_QMARK___delegate(level,p__23506);
});
log_QMARK_.cljs$core$IFn$_invoke$arity$variadic = log_QMARK___delegate;
return log_QMARK_;
})()
;
/**
* General-purpose dynamic logging context. Context will be merged into
* appender data map at logging time.
*/
taoensso.timbre._STAR_context_STAR_ = null;
taoensso.timbre.inherit_over = (function inherit_over(k,appender,config,default$){
var or__3761__auto__ = (function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})();
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = cljs.core.get.call(null,config,k);
if(cljs.core.truth_(or__3761__auto____$1)){
return or__3761__auto____$1;
} else {
return default$;
}
}
});
taoensso.timbre.inherit_into = (function inherit_into(k,appender,config,default$){
return cljs.core.merge.call(null,default$,cljs.core.get.call(null,config,k),(function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})());
});
/**
* Core fn-level logger. Implementation detail!
*/
taoensso.timbre.log1_fn = (function log1_fn(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,vargs_,_QMARK_base_data){
if(cljs.core.truth_(taoensso.timbre.log_QMARK_.call(null,level,_QMARK_ns_str,config))){
var instant_23516 = taoensso.encore.now_dt.call(null);
var vargs_STAR___23517 = (new cljs.core.Delay(((function (instant_23516){
return (function (){
return taoensso.timbre.vsplit_err1.call(null,cljs.core.force.call(null,vargs_));
});})(instant_23516))
,null));
var _QMARK_err__23518 = (new cljs.core.Delay(((function (instant_23516,vargs_STAR___23517){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,vargs_STAR___23517),(0));
});})(instant_23516,vargs_STAR___23517))
,null));
var vargs__23519__$1 = (new cljs.core.Delay(((function (instant_23516,vargs_STAR___23517,_QMARK_err__23518){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,vargs_STAR___23517),(1));
});})(instant_23516,vargs_STAR___23517,_QMARK_err__23518))
,null));
var data_23520 = cljs.core.merge.call(null,_QMARK_base_data,taoensso.timbre._STAR_context_STAR_,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"vargs_","vargs_",552132148),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858)],[instant_23516,config,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,vargs__23519__$1,_QMARK_line,_QMARK_err__23518]));
var msg_fn_23521 = ((function (instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520){
return (function (vargs___$2){
if((msg_type == null)){
return null;
} else {
var temp__4126__auto__ = taoensso.encore.hcond.call(null,false,"taoensso.timbre",343,(new cljs.core.Delay(((function (instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520){
return (function (){
return cljs.core.force.call(null,vargs___$2);
});})(instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520))
,null)),cljs.core.list(new cljs.core.Symbol(null,"force","force",-1872478483,null),new cljs.core.Symbol(null,"vargs_","vargs_",-2102303621,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)], null));
if(cljs.core.truth_(temp__4126__auto__)){
var vargs = temp__4126__auto__;
var G__23513 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__23513) {
case "f":
var vec__23514 = taoensso.encore.vsplit_first.call(null,vargs);
var fmt = cljs.core.nth.call(null,vec__23514,(0),null);
var args = cljs.core.nth.call(null,vec__23514,(1),null);
return taoensso.encore.format_STAR_.call(null,fmt,args);

break;
case "p":
return taoensso.encore.spaced_str.call(null,vargs);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
} else {
return null;
}
}
});})(instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520))
;
var _QMARK_data_23522 = cljs.core.reduce.call(null,((function (instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520,msg_fn_23521){
return (function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
});})(instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520,msg_fn_23521))
,data_23520,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__4126__auto___23524 = _QMARK_data_23522;
if(cljs.core.truth_(temp__4126__auto___23524)){
var data_23525__$1 = temp__4126__auto___23524;
cljs.core.reduce_kv.call(null,((function (data_23525__$1,temp__4126__auto___23524,instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520,msg_fn_23521,_QMARK_data_23522){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__3749__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__3749__auto__)){
return taoensso.timbre.level_GT__EQ_.call(null,level,(function (){var or__3761__auto__ = new cljs.core.Keyword(null,"min-level","min-level",1634684919).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return new cljs.core.Keyword(null,"trace","trace",-1082747415);
}
})());
} else {
return and__3749__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var data_hash_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),appender,config,taoensso.timbre.default_data_hash_fn);
var rate_limit_okay_QMARK_ = (function (){var or__3761__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
var data_hash = data_hash_fn.call(null,data_23525__$1);
return cljs.core.not.call(null,rl_fn.call(null,data_hash));
}
})();
if(rate_limit_okay_QMARK_){
var map__23515 = appender;
var map__23515__$1 = ((cljs.core.seq_QMARK_.call(null,map__23515))?cljs.core.apply.call(null,cljs.core.hash_map,map__23515):map__23515);
var async_QMARK_ = cljs.core.get.call(null,map__23515__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var apfn = cljs.core.get.call(null,map__23515__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var msg_ = (new cljs.core.Delay(((function (map__23515,map__23515__$1,async_QMARK_,apfn,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_23525__$1,temp__4126__auto___23524,instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520,msg_fn_23521,_QMARK_data_23522){
return (function (){
return msg_fn_23521.call(null,new cljs.core.Keyword(null,"vargs_","vargs_",552132148).cljs$core$IFn$_invoke$arity$1(data_23525__$1));
});})(map__23515,map__23515__$1,async_QMARK_,apfn,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_23525__$1,temp__4126__auto___23524,instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520,msg_fn_23521,_QMARK_data_23522))
,null));
var output_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),appender,config,taoensso.timbre.default_output_fn);
var data__$2 = cljs.core.merge.call(null,data_23525__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),msg_,new cljs.core.Keyword(null,"msg-fn","msg-fn",-1873033940),msg_fn_23521,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),data_hash_fn], null));
if(cljs.core.not.call(null,async_QMARK_)){
return apfn.call(null,data__$2);
} else {
return apfn.call(null,data__$2);
}
} else {
return null;
}
} else {
return null;
}
});})(data_23525__$1,temp__4126__auto___23524,instant_23516,vargs_STAR___23517,_QMARK_err__23518,vargs__23519__$1,data_23520,msg_fn_23521,_QMARK_data_23522))
,null,taoensso.encore.clj1098.call(null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config)));
} else {
}
} else {
}

return null;
});
/**
* @param {...*} var_args
*/
taoensso.timbre.stacktrace = (function() { 
var stacktrace__delegate = function (err,p__23526){
var vec__23528 = p__23526;
var opts = cljs.core.nth.call(null,vec__23528,(0),null);
return [cljs.core.str(err)].join('');
};
var stacktrace = function (err,var_args){
var p__23526 = null;
if (arguments.length > 1) {
  p__23526 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return stacktrace__delegate.call(this,err,p__23526);};
stacktrace.cljs$lang$maxFixedArity = 1;
stacktrace.cljs$lang$applyTo = (function (arglist__23529){
var err = cljs.core.first(arglist__23529);
var p__23526 = cljs.core.rest(arglist__23529);
return stacktrace__delegate(err,p__23526);
});
stacktrace.cljs$core$IFn$_invoke$arity$variadic = stacktrace__delegate;
return stacktrace;
})()
;
/**
* @param {...*} var_args
*/
taoensso.timbre.str_println = (function() { 
var str_println__delegate = function (xs){
return taoensso.encore.spaced_str.call(null,xs);
};
var str_println = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return str_println__delegate.call(this,xs);};
str_println.cljs$lang$maxFixedArity = 0;
str_println.cljs$lang$applyTo = (function (arglist__23530){
var xs = cljs.core.seq(arglist__23530);
return str_println__delegate(xs);
});
str_println.cljs$core$IFn$_invoke$arity$variadic = str_println__delegate;
return str_println;
})()
;
taoensso.timbre.logging_enabled_QMARK_ = (function logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.log_QMARK_.call(null,level,[cljs.core.str(compile_time_ns)].join(''));
});
