// Compiled by ClojureScript 0.0-2411
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.XhrIoPool');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('clojure.set');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
/**
* Used for lib-consumer version assertions
*/
taoensso.encore.encore_version = 1.37;
taoensso.encore.assert_min_encore_version = (function assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).",taoensso.encore.encore_version,min_version),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),min_version,new cljs.core.Keyword(null,"this-version","this-version",355666086),taoensso.encore.encore_version], null));
} else {
return null;
}
});
taoensso.encore.read_edn = (function read_edn(s){
return cljs.reader.read_string.call(null,s);
});
/**
* Handles optional docstrings & attr maps for a macro def's name.
* Stolen from `clojure.tools.macro`.
*/
taoensso.encore.name_with_attrs = (function name_with_attrs(name,macro_args){
var vec__20804 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__20804,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__20804,(1),null);
var vec__20805 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__20805,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__20805,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.re_pattern_QMARK_ = (function re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.error_QMARK_ = (function error_QMARK_(x){
return (x instanceof Error);
});
/**
* Returns data map iff `x` is an error of any type on platform.
*/
taoensso.encore.error_data = (function error_data(x){
var temp__4126__auto__ = (function (){var or__3761__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var data_map = temp__4126__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function nblank_QMARK_(x){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function nblank_str_QMARK_(x){
return (typeof x === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function as__QMARK_nblank(x){
if(typeof x === 'string'){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
/**
* @param {...*} var_args
*/
taoensso.encore.nnil_EQ_ = (function() {
var nnil_EQ_ = null;
var nnil_EQ___2 = (function (x,y){
return (taoensso.encore.nnil_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});
var nnil_EQ___3 = (function() { 
var G__20808__delegate = function (x,y,more){
var and__3749__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(and__3749__auto__){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__3749__auto__;
}
};
var G__20808 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20808__delegate.call(this,x,y,more);};
G__20808.cljs$lang$maxFixedArity = 2;
G__20808.cljs$lang$applyTo = (function (arglist__20809){
var x = cljs.core.first(arglist__20809);
arglist__20809 = cljs.core.next(arglist__20809);
var y = cljs.core.first(arglist__20809);
var more = cljs.core.rest(arglist__20809);
return G__20808__delegate(x,y,more);
});
G__20808.cljs$core$IFn$_invoke$arity$variadic = G__20808__delegate;
return G__20808;
})()
;
nnil_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return nnil_EQ___2.call(this,x,y);
default:
return nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nnil_EQ_.cljs$lang$maxFixedArity = 2;
nnil_EQ_.cljs$lang$applyTo = nnil_EQ___3.cljs$lang$applyTo;
nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = nnil_EQ___2;
nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return nnil_EQ_;
})()
;
taoensso.encore.vec_STAR_ = (function vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.ks_EQ_ = (function ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__20810_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__20810_SHARP_));
}),ks);
});
taoensso.encore.assertion_error = (function assertion_error(msg){
return (new Error(msg));
});
/**
* Implementation detail.
* @param {...*} var_args
*/
taoensso.encore.hthrow = (function() { 
var hthrow__delegate = function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__20811){
var vec__20813 = p__20811;
var _QMARK_err = cljs.core.nth.call(null,vec__20813,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__3761__auto__ = _QMARK_line;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str((function (){var or__3761__auto__ = form;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return "<nil>";
}
})())].join('');
var val_str = [cljs.core.str((function (){var or__3761__auto__ = val;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return "<nil>";
}
})())].join('');
var _QMARK_err_str = (function (){var temp__4126__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4126__auto__)){
var e = temp__4126__auto__;
return [cljs.core.str(_QMARK_err)].join('');
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,hard_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
};
var hthrow = function (hard_QMARK_,ns_str,_QMARK_line,form,val,var_args){
var p__20811 = null;
if (arguments.length > 5) {
  p__20811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return hthrow__delegate.call(this,hard_QMARK_,ns_str,_QMARK_line,form,val,p__20811);};
hthrow.cljs$lang$maxFixedArity = 5;
hthrow.cljs$lang$applyTo = (function (arglist__20814){
var hard_QMARK_ = cljs.core.first(arglist__20814);
arglist__20814 = cljs.core.next(arglist__20814);
var ns_str = cljs.core.first(arglist__20814);
arglist__20814 = cljs.core.next(arglist__20814);
var _QMARK_line = cljs.core.first(arglist__20814);
arglist__20814 = cljs.core.next(arglist__20814);
var form = cljs.core.first(arglist__20814);
arglist__20814 = cljs.core.next(arglist__20814);
var val = cljs.core.first(arglist__20814);
var p__20811 = cljs.core.rest(arglist__20814);
return hthrow__delegate(hard_QMARK_,ns_str,_QMARK_line,form,val,p__20811);
});
hthrow.cljs$core$IFn$_invoke$arity$variadic = hthrow__delegate;
return hthrow;
})()
;
taoensso.encore.non_throwing = (function non_throwing(pred){
return (function (x){
var vec__20817 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e20818){if((e20818 instanceof Error)){
var e__12300__auto__ = e20818;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__12300__auto__], null);
} else {
throw e20818;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__20817,(0),null);
var _ = cljs.core.nth.call(null,vec__20817,(1),null);
return _QMARK_r;
});
});
/**
* Implementation detail.
*/
taoensso.encore.hpred = (function hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__20824 = pred_form;
var type = cljs.core.nth.call(null,vec__20824,(0),null);
var p1 = cljs.core.nth.call(null,vec__20824,(1),null);
var p2 = cljs.core.nth.call(null,vec__20824,(2),null);
var more = cljs.core.nthnext.call(null,vec__20824,(3));
var G__20825 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20825) {
case "el":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "not=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return cljs.core.not_EQ_.call(null,p1,x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "or":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
var or__3761__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__3761__auto____$1)){
return or__3761__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__3761__auto____$1,or__3761__auto__,G__20825,vec__20824,type,p1,p2,more){
return (function (p1__20820_SHARP_){
return taoensso.encore.non_throwing.call(null,hpred.call(null,p1__20820_SHARP_)).call(null,x);
});})(or__3761__auto____$1,or__3761__auto__,G__20825,vec__20824,type,p1,p2,more))
,more);
}
}
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "not":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
var and__3749__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,hpred.call(null,p1).call(null,x)));
if(and__3749__auto__){
var and__3749__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,hpred.call(null,p2).call(null,x)));
if(and__3749__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__3749__auto____$1,and__3749__auto__,G__20825,vec__20824,type,p1,p2,more){
return (function (p1__20819_SHARP_){
return cljs.core.not.call(null,hpred.call(null,p1__20819_SHARP_).call(null,x));
});})(and__3749__auto____$1,and__3749__auto__,G__20825,vec__20824,type,p1,p2,more))
,more);
} else {
return and__3749__auto____$1;
}
} else {
return and__3749__auto__;
}
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "ks=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "and":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
var and__3749__auto__ = ((cljs.core.not.call(null,p1))?true:hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__3749__auto__)){
var and__3749__auto____$1 = ((cljs.core.not.call(null,p2))?true:hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__3749__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__3749__auto____$1,and__3749__auto__,G__20825,vec__20824,type,p1,p2,more){
return (function (p1__20821_SHARP_){
return hpred.call(null,p1__20821_SHARP_).call(null,x);
});})(and__3749__auto____$1,and__3749__auto__,G__20825,vec__20824,type,p1,p2,more))
,more);
} else {
return and__3749__auto____$1;
}
} else {
return and__3749__auto__;
}
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "not-in":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "not-el":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,p1,x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "set<=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return clojure.set.subset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "set>=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return clojure.set.superset_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "set=":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,taoensso.encore.set_STAR_.call(null,x),taoensso.encore.set_STAR_.call(null,p1));
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
case "in":
return ((function (G__20825,vec__20824,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__20825,vec__20824,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
* Implementation detail.
*/
taoensso.encore.hcond = (function hcond(hard_QMARK_,ns_str,line,x_,x_form,pred,pred_form){
var vec__20831 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,x_)], null);
}catch (e20833){if((e20833 instanceof Error)){
var e__12300__auto__ = e20833;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__12300__auto__], null);
} else {
throw e20833;

}
}})();
var _QMARK_x = cljs.core.nth.call(null,vec__20831,(0),null);
var _QMARK_x_err = cljs.core.nth.call(null,vec__20831,(1),null);
var have_x_QMARK_ = (_QMARK_x_err == null);
var vec__20832 = ((have_x_QMARK_)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,pred).call(null,_QMARK_x)], null);
}catch (e20834){if((e20834 instanceof Error)){
var e__12300__auto__ = e20834;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__12300__auto__], null);
} else {
throw e20834;

}
}})():null);
var pass_QMARK_ = cljs.core.nth.call(null,vec__20832,(0),null);
var _QMARK_pred_err = cljs.core.nth.call(null,vec__20832,(1),null);
if(cljs.core.truth_(pass_QMARK_)){
return _QMARK_x;
} else {
return taoensso.encore.hthrow.call(null,hard_QMARK_,ns_str,line,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x_form),pred_form),((have_x_QMARK_)?_QMARK_x:_QMARK_x_err),_QMARK_pred_err);
}
});
/**
* Like `name` but fully qualified: includes namespace in string when present.
*/
taoensso.encore.fq_name = (function fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4124__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4124__auto__)){
var ns = temp__4124__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
/**
* @param {...*} var_args
*/
taoensso.encore.merge_keywords = (function() { 
var merge_keywords__delegate = function (ks,p__20835){
var vec__20837 = p__20835;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__20837,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
};
var merge_keywords = function (ks,var_args){
var p__20835 = null;
if (arguments.length > 1) {
  p__20835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_keywords__delegate.call(this,ks,p__20835);};
merge_keywords.cljs$lang$maxFixedArity = 1;
merge_keywords.cljs$lang$applyTo = (function (arglist__20838){
var ks = cljs.core.first(arglist__20838);
var p__20835 = cljs.core.rest(arglist__20838);
return merge_keywords__delegate(ks,p__20835);
});
merge_keywords.cljs$core$IFn$_invoke$arity$variadic = merge_keywords__delegate;
return merge_keywords;
})()
;
taoensso.encore.clamp = (function clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function pow(n,exp){
return Math.pow.call(null,n,exp);
});
taoensso.encore.abs = (function abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
/**
* @param {...*} var_args
*/
taoensso.encore.round = (function() { 
var round__delegate = function (n,p__20839){
var vec__20842 = p__20839;
var type = cljs.core.nth.call(null,vec__20842,(0),null);
var nplaces = cljs.core.nth.call(null,vec__20842,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow.call(null,10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__20843 = ((((function (){var or__3761__auto__ = type;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__3761__auto__ = type;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__20843) {
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
case "ceil":
return Math.ceil.call(null,n_STAR_);

break;
case "floor":
return Math.floor.call(null,n_STAR_);

break;
case "round":
return Math.round.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
};
var round = function (n,var_args){
var p__20839 = null;
if (arguments.length > 1) {
  p__20839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return round__delegate.call(this,n,p__20839);};
round.cljs$lang$maxFixedArity = 1;
round.cljs$lang$applyTo = (function (arglist__20845){
var n = cljs.core.first(arglist__20845);
var p__20839 = cljs.core.rest(arglist__20845);
return round__delegate(n,p__20839);
});
round.cljs$core$IFn$_invoke$arity$variadic = round__delegate;
return round;
})()
;
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
* Optimized common case.
*/
taoensso.encore.round1 = (function round1(n){
return (Math.round.call(null,(n * 10.0)) / 10.0);
});
/**
* Optimized common case.
*/
taoensso.encore.round2 = (function round2(n){
return (Math.round.call(null,(n * 100.0)) / 100.0);
});
/**
* Returns binary exponential backoff value.
* @param {...*} var_args
*/
taoensso.encore.exp_backoff = (function() { 
var exp_backoff__delegate = function (nattempt,p__20846){
var vec__20849 = p__20846;
var map__20850 = cljs.core.nth.call(null,vec__20849,(0),null);
var map__20850__$1 = ((cljs.core.seq_QMARK_.call(null,map__20850))?cljs.core.apply.call(null,cljs.core.hash_map,map__20850):map__20850);
var factor = cljs.core.get.call(null,map__20850__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__20850__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__20850__$1,new cljs.core.Keyword(null,"max","max",61366548));
var binary_exp = Math.pow.call(null,(2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__4073__auto__ = min_SINGLEQUOTE_;
var y__4074__auto__ = time;
return ((x__4073__auto__ > y__4074__auto__) ? x__4073__auto__ : y__4074__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__4080__auto__ = max_SINGLEQUOTE_;
var y__4081__auto__ = time__$1;
return ((x__4080__auto__ < y__4081__auto__) ? x__4080__auto__ : y__4081__auto__);
})():time__$1);
return time__$2;
})());
};
var exp_backoff = function (nattempt,var_args){
var p__20846 = null;
if (arguments.length > 1) {
  p__20846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return exp_backoff__delegate.call(this,nattempt,p__20846);};
exp_backoff.cljs$lang$maxFixedArity = 1;
exp_backoff.cljs$lang$applyTo = (function (arglist__20851){
var nattempt = cljs.core.first(arglist__20851);
var p__20846 = cljs.core.rest(arglist__20851);
return exp_backoff__delegate(nattempt,p__20846);
});
exp_backoff.cljs$core$IFn$_invoke$arity$variadic = exp_backoff__delegate;
return exp_backoff;
})()
;
taoensso.encore.now_dt = (function now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function now_udt(){
return (new Date()).getTime();
});
/**
* Useful for testing.
* @param {...*} var_args
*/
taoensso.encore.now_udt_mock_fn = (function() { 
var now_udt_mock_fn__delegate = function (p__20852){
var vec__20854 = p__20852;
var mock_udts = cljs.core.nth.call(null,vec__20854,(0),null);
var mock_udts__$1 = (function (){var or__3761__auto__ = mock_udts;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__20854,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__20854,mock_udts))
};
var now_udt_mock_fn = function (var_args){
var p__20852 = null;
if (arguments.length > 0) {
  p__20852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return now_udt_mock_fn__delegate.call(this,p__20852);};
now_udt_mock_fn.cljs$lang$maxFixedArity = 0;
now_udt_mock_fn.cljs$lang$applyTo = (function (arglist__20855){
var p__20852 = cljs.core.seq(arglist__20855);
return now_udt_mock_fn__delegate(p__20852);
});
now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = now_udt_mock_fn__delegate;
return now_udt_mock_fn;
})()
;
taoensso.encore.secs__GT_ms = (function secs__GT_ms(secs){
return cljs.core.long$.call(null,(secs * 1000.0));
});
taoensso.encore.ms__GT_secs = (function ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
* Returns number of milliseconds in period defined by given args.
* @param {...*} var_args
*/
taoensso.encore.ms = (function() { 
var ms__delegate = function (p__20856){
var map__20859 = p__20856;
var map__20859__$1 = ((cljs.core.seq_QMARK_.call(null,map__20859))?cljs.core.apply.call(null,cljs.core.hash_map,map__20859):map__20859);
var opts = map__20859__$1;
var ms__$1 = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var msecs = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var secs = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var hours = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__20859,map__20859__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years){
return (function (have_in__20860){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",666,(new cljs.core.Delay(((function (map__20859,map__20859__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years){
return (function (){
return have_in__20860;
});})(map__20859,map__20859__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years))
,null)),new cljs.core.Symbol(null,"have-in__20860","have-in__20860",751567389,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null));
});})(map__20859,map__20859__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):0.0) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):0.0)) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):0.0)) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):0.0)) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):0.0)) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms__$1)?ms__$1:0.0)));
};
var ms = function (var_args){
var p__20856 = null;
if (arguments.length > 0) {
  p__20856 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return ms__delegate.call(this,p__20856);};
ms.cljs$lang$maxFixedArity = 0;
ms.cljs$lang$applyTo = (function (arglist__20861){
var p__20856 = cljs.core.seq(arglist__20861);
return ms__delegate(p__20856);
});
ms.cljs$core$IFn$_invoke$arity$variadic = ms__delegate;
return ms;
})()
;
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.singleton_QMARK_ = (function singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function __GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_.call(null,coll)){
var vec__20867 = coll;
var c1 = cljs.core.nth.call(null,vec__20867,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function __GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vsplit_first = (function vsplit_first(v){
var vec__20869 = v;
var v1 = cljs.core.nth.call(null,vec__20869,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((cljs.core.count.call(null,v) > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
});
taoensso.encore.nnil_set = (function nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
/**
* @param {...*} var_args
*/
taoensso.encore.conj_some = (function() {
var conj_some = null;
var conj_some__2 = (function (coll,_QMARK_x){
if(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x)){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});
var conj_some__3 = (function() { 
var G__20870__delegate = function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,conj_some,conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
};
var G__20870 = function (coll,_QMARK_x,var_args){
var _QMARK_xs = null;
if (arguments.length > 2) {
  _QMARK_xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20870__delegate.call(this,coll,_QMARK_x,_QMARK_xs);};
G__20870.cljs$lang$maxFixedArity = 2;
G__20870.cljs$lang$applyTo = (function (arglist__20871){
var coll = cljs.core.first(arglist__20871);
arglist__20871 = cljs.core.next(arglist__20871);
var _QMARK_x = cljs.core.first(arglist__20871);
var _QMARK_xs = cljs.core.rest(arglist__20871);
return G__20870__delegate(coll,_QMARK_x,_QMARK_xs);
});
G__20870.cljs$core$IFn$_invoke$arity$variadic = G__20870__delegate;
return G__20870;
})()
;
conj_some = function(coll,_QMARK_x,var_args){
var _QMARK_xs = var_args;
switch(arguments.length){
case 2:
return conj_some__2.call(this,coll,_QMARK_x);
default:
return conj_some__3.cljs$core$IFn$_invoke$arity$variadic(coll,_QMARK_x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_some.cljs$lang$maxFixedArity = 2;
conj_some.cljs$lang$applyTo = conj_some__3.cljs$lang$applyTo;
conj_some.cljs$core$IFn$_invoke$arity$2 = conj_some__2;
conj_some.cljs$core$IFn$_invoke$arity$variadic = conj_some__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_some;
})()
;
/**
* `run!` from Clojure 1.7+
*/
taoensso.encore.backport_run_BANG_ = (function backport_run_BANG_(proc,coll){
return cljs.core.reduce.call(null,(function (p1__20873_SHARP_,p2__20872_SHARP_){
return proc.call(null,p2__20872_SHARP_);
}),null,coll);
});
taoensso.encore.translate_signed_idx = (function translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__4080__auto__ = signed_idx;
var y__4081__auto__ = max_idx;
return ((x__4080__auto__ < y__4081__auto__) ? x__4080__auto__ : y__4081__auto__);
} else {
var x__4073__auto__ = (0);
var y__4074__auto__ = (signed_idx + max_idx);
return ((x__4073__auto__ > y__4074__auto__) ? x__4073__auto__ : y__4074__auto__);
}
});
/**
* Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
* input (str, vec, etc.) with support for:
* * Clamping of indexes beyond limits.
* * Max-length -> end-index.
* * -ive indexes (as +ive indexes but work from back of input):
* (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
* h    e    l    l    o   ; 5 count
* (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
* @param {...*} var_args
*/
taoensso.encore.sub_indexes = (function() { 
var sub_indexes__delegate = function (x,start_idx,p__20874){
var map__20876 = p__20874;
var map__20876__$1 = ((cljs.core.seq_QMARK_.call(null,map__20876))?cljs.core.apply.call(null,cljs.core.hash_map,map__20876):map__20876);
var end_idx = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var max_len = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__20876,map__20876__$1,end_idx,max_len){
return (function (){
return max_len;
});})(map__20876,map__20876__$1,end_idx,max_len))
,null)),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__12477__auto__ = (start_idx_STAR_ + max_len);
var n2__12478__auto__ = xlen;
if((n1__12477__auto__ > n2__12478__auto__)){
return n2__12478__auto__;
} else {
return n1__12477__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
};
var sub_indexes = function (x,start_idx,var_args){
var p__20874 = null;
if (arguments.length > 2) {
  p__20874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return sub_indexes__delegate.call(this,x,start_idx,p__20874);};
sub_indexes.cljs$lang$maxFixedArity = 2;
sub_indexes.cljs$lang$applyTo = (function (arglist__20877){
var x = cljs.core.first(arglist__20877);
arglist__20877 = cljs.core.next(arglist__20877);
var start_idx = cljs.core.first(arglist__20877);
var p__20874 = cljs.core.rest(arglist__20877);
return sub_indexes__delegate(x,start_idx,p__20874);
});
sub_indexes.cljs$core$IFn$_invoke$arity$variadic = sub_indexes__delegate;
return sub_indexes;
})()
;
/**
* Like `subvec` but uses `sub-indexes`.
* @param {...*} var_args
*/
taoensso.encore.subvec_STAR_ = (function() { 
var subvec_STAR___delegate = function (v,start_idx,p__20878){
var vec__20881 = p__20878;
var _QMARK_max_len = cljs.core.nth.call(null,vec__20881,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__20881,_QMARK_max_len){
return (function (){
return v;
});})(vec__20881,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__20882 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__20882,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__20882,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
};
var subvec_STAR_ = function (v,start_idx,var_args){
var p__20878 = null;
if (arguments.length > 2) {
  p__20878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return subvec_STAR___delegate.call(this,v,start_idx,p__20878);};
subvec_STAR_.cljs$lang$maxFixedArity = 2;
subvec_STAR_.cljs$lang$applyTo = (function (arglist__20883){
var v = cljs.core.first(arglist__20883);
arglist__20883 = cljs.core.next(arglist__20883);
var start_idx = cljs.core.first(arglist__20883);
var p__20878 = cljs.core.rest(arglist__20883);
return subvec_STAR___delegate(v,start_idx,p__20878);
});
subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = subvec_STAR___delegate;
return subvec_STAR_;
})()
;

/**
* @constructor
* @param {*} new_val
* @param {*} return_val
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4359__auto__,k__4360__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return cljs.core._lookup.call(null,this__4359__auto____$1,k__4360__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4361__auto__,k20885,else__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
var G__20887 = (((k20885 instanceof cljs.core.Keyword))?k20885.fqn:null);
switch (G__20887) {
case "return-val":
return self__.return_val;

break;
case "new-val":
return self__.new_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20885,else__4362__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4373__auto__,writer__4374__auto__,opts__4375__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
var pr_pair__4376__auto__ = ((function (this__4373__auto____$1){
return (function (keyval__4377__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4374__auto__,cljs.core.pr_writer,""," ","",opts__4375__auto__,keyval__4377__auto__);
});})(this__4373__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4374__auto__,pr_pair__4376__auto__,"#taoensso.encore.Swapped{",", ","}",opts__4375__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4353__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4363__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4354__auto__){
var self__ = this;
var this__4354__auto____$1 = this;
var h__4177__auto__ = self__.__hash;
if(!((h__4177__auto__ == null))){
return h__4177__auto__;
} else {
var h__4177__auto____$1 = cljs.core.hash_imap.call(null,this__4354__auto____$1);
self__.__hash = h__4177__auto____$1;

return h__4177__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4355__auto__,other__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3749__auto__ = other__4356__auto__;
if(cljs.core.truth_(and__3749__auto__)){
return ((this__4355__auto____$1.constructor === other__4356__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4355__auto____$1,other__4356__auto__));
} else {
return and__3749__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4368__auto__,k__4369__auto__){
var self__ = this;
var this__4368__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__4369__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4368__auto____$1),self__.__meta),k__4369__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4369__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4366__auto__,k__4367__auto__,G__20884){
var self__ = this;
var this__4366__auto____$1 = this;
var pred__20888 = cljs.core.keyword_identical_QMARK_;
var expr__20889 = k__4367__auto__;
if(cljs.core.truth_(pred__20888.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__20889))){
return (new taoensso.encore.Swapped(G__20884,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20888.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__20889))){
return (new taoensso.encore.Swapped(self__.new_val,G__20884,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4367__auto__,G__20884),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4371__auto__){
var self__ = this;
var this__4371__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4358__auto__,G__20884){
var self__ = this;
var this__4358__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__20884,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4364__auto__,entry__4365__auto__){
var self__ = this;
var this__4364__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4365__auto__)){
return cljs.core._assoc.call(null,this__4364__auto____$1,cljs.core._nth.call(null,entry__4365__auto__,(0)),cljs.core._nth.call(null,entry__4365__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4364__auto____$1,entry__4365__auto__);
}
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__4393__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function __GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.map__GT_Swapped = (function map__GT_Swapped(G__20886){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__20886),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__20886),null,cljs.core.dissoc.call(null,G__20886,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489))));
});

taoensso.encore.swapped = (function swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});
taoensso.encore.swapped_QMARK_ = (function swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function swapped_STAR_(x){
if(taoensso.encore.swapped_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
* [<new-val> <return-val>]
*/
taoensso.encore.swapped_STAR__in = (function swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__20893 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__20893,(0),null);
var return_val = cljs.core.nth.call(null,vec__20893,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
* Reduces input with
* [<type> <ks> <reset-val-or-swap-fn>] or
* [<ks> <reset-val-or-swap-fn>] ops.
*/
taoensso.encore.replace_in_STAR_ = (function replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__20896 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__20896,(0),null);
var ks = cljs.core.nth.call(null,vec__20896,(1),null);
var valf = cljs.core.nth.call(null,vec__20896,(2),null);
var G__20897 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__20897) {
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}

break;
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
* Experimental. For use with `swap!`, etc.
* @param {...*} var_args
*/
taoensso.encore.replace_in = (function() { 
var replace_in__delegate = function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
};
var replace_in = function (m,var_args){
var ops = null;
if (arguments.length > 1) {
  ops = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return replace_in__delegate.call(this,m,ops);};
replace_in.cljs$lang$maxFixedArity = 1;
replace_in.cljs$lang$applyTo = (function (arglist__20899){
var m = cljs.core.first(arglist__20899);
var ops = cljs.core.rest(arglist__20899);
return replace_in__delegate(m,ops);
});
replace_in.cljs$core$IFn$_invoke$arity$variadic = replace_in__delegate;
return replace_in;
})()
;
/**
* More powerful version of `swap!`:
* * Supports optional `update-in` semantics.
* * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
* <new-val>. This is useful when writing atomic pull fns, etc.
* @param {...*} var_args
*/
taoensso.encore.swap_in_BANG_ = (function() {
var swap_in_BANG_ = null;
var swap_in_BANG___3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__20902 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__20902,(0),null);
var return_val = cljs.core.nth.call(null,vec__20902,(1),null);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__20903 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__20903,(0),null);
var return_val = cljs.core.nth.call(null,vec__20903,(1),null);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});
var swap_in_BANG___4 = (function() { 
var G__20904__delegate = function (atom_,ks,f,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
};
var G__20904 = function (atom_,ks,f,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20904__delegate.call(this,atom_,ks,f,more);};
G__20904.cljs$lang$maxFixedArity = 3;
G__20904.cljs$lang$applyTo = (function (arglist__20905){
var atom_ = cljs.core.first(arglist__20905);
arglist__20905 = cljs.core.next(arglist__20905);
var ks = cljs.core.first(arglist__20905);
arglist__20905 = cljs.core.next(arglist__20905);
var f = cljs.core.first(arglist__20905);
var more = cljs.core.rest(arglist__20905);
return G__20904__delegate(atom_,ks,f,more);
});
G__20904.cljs$core$IFn$_invoke$arity$variadic = G__20904__delegate;
return G__20904;
})()
;
swap_in_BANG_ = function(atom_,ks,f,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return swap_in_BANG___3.call(this,atom_,ks,f);
default:
return swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,f, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_in_BANG_.cljs$lang$maxFixedArity = 3;
swap_in_BANG_.cljs$lang$applyTo = swap_in_BANG___4.cljs$lang$applyTo;
swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_in_BANG___3;
swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return swap_in_BANG_;
})()
;
/**
* Is to `reset!` as `swap-in!` is to `swap!`.
* @param {...*} var_args
*/
taoensso.encore.reset_in_BANG_ = (function() {
var reset_in_BANG_ = null;
var reset_in_BANG___3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});
var reset_in_BANG___4 = (function() { 
var G__20906__delegate = function (atom_,ks,new_val,more){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,more);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
};
var G__20906 = function (atom_,ks,new_val,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20906__delegate.call(this,atom_,ks,new_val,more);};
G__20906.cljs$lang$maxFixedArity = 3;
G__20906.cljs$lang$applyTo = (function (arglist__20907){
var atom_ = cljs.core.first(arglist__20907);
arglist__20907 = cljs.core.next(arglist__20907);
var ks = cljs.core.first(arglist__20907);
arglist__20907 = cljs.core.next(arglist__20907);
var new_val = cljs.core.first(arglist__20907);
var more = cljs.core.rest(arglist__20907);
return G__20906__delegate(atom_,ks,new_val,more);
});
G__20906.cljs$core$IFn$_invoke$arity$variadic = G__20906__delegate;
return G__20906;
})()
;
reset_in_BANG_ = function(atom_,ks,new_val,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return reset_in_BANG___3.call(this,atom_,ks,new_val);
default:
return reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,new_val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reset_in_BANG_.cljs$lang$maxFixedArity = 3;
reset_in_BANG_.cljs$lang$applyTo = reset_in_BANG___4.cljs$lang$applyTo;
reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = reset_in_BANG___3;
reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return reset_in_BANG_;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.dissoc_in = (function() { 
var dissoc_in__delegate = function (m,ks,dissoc_ks){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.apply.call(null,cljs.core.dissoc,m,dissoc_ks);
} else {
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
}
};
var dissoc_in = function (m,ks,var_args){
var dissoc_ks = null;
if (arguments.length > 2) {
  dissoc_ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return dissoc_in__delegate.call(this,m,ks,dissoc_ks);};
dissoc_in.cljs$lang$maxFixedArity = 2;
dissoc_in.cljs$lang$applyTo = (function (arglist__20908){
var m = cljs.core.first(arglist__20908);
arglist__20908 = cljs.core.next(arglist__20908);
var ks = cljs.core.first(arglist__20908);
var dissoc_ks = cljs.core.rest(arglist__20908);
return dissoc_in__delegate(m,ks,dissoc_ks);
});
dissoc_in.cljs$core$IFn$_invoke$arity$variadic = dissoc_in__delegate;
return dissoc_in;
})()
;
taoensso.encore.contains_in_QMARK_ = (function contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
* Assocs each kv iff its value is not nil.
* @param {...*} var_args
*/
taoensso.encore.assoc_some = (function() { 
var assoc_some__delegate = function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3761__auto__ = m;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4512__auto__ = (function iter__20917(s__20918){
return (new cljs.core.LazySeq(null,(function (){
var s__20918__$1 = s__20918;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20918__$1);
if(temp__4126__auto__){
var s__20918__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20918__$2)){
var c__4510__auto__ = cljs.core.chunk_first.call(null,s__20918__$2);
var size__4511__auto__ = cljs.core.count.call(null,c__4510__auto__);
var b__20920 = cljs.core.chunk_buffer.call(null,size__4511__auto__);
if((function (){var i__20919 = (0);
while(true){
if((i__20919 < size__4511__auto__)){
var vec__20923 = cljs.core._nth.call(null,c__4510__auto__,i__20919);
var k = cljs.core.nth.call(null,vec__20923,(0),null);
var v = cljs.core.nth.call(null,vec__20923,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__20920,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20925 = (i__20919 + (1));
i__20919 = G__20925;
continue;
} else {
var G__20926 = (i__20919 + (1));
i__20919 = G__20926;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20920),iter__20917.call(null,cljs.core.chunk_rest.call(null,s__20918__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20920),null);
}
} else {
var vec__20924 = cljs.core.first.call(null,s__20918__$2);
var k = cljs.core.nth.call(null,vec__20924,(0),null);
var v = cljs.core.nth.call(null,vec__20924,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20917.call(null,cljs.core.rest.call(null,s__20918__$2)));
} else {
var G__20927 = cljs.core.rest.call(null,s__20918__$2);
s__20918__$1 = G__20927;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4512__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_some = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_some__delegate.call(this,m,kvs);};
assoc_some.cljs$lang$maxFixedArity = 1;
assoc_some.cljs$lang$applyTo = (function (arglist__20928){
var m = cljs.core.first(arglist__20928);
var kvs = cljs.core.rest(arglist__20928);
return assoc_some__delegate(m,kvs);
});
assoc_some.cljs$core$IFn$_invoke$arity$variadic = assoc_some__delegate;
return assoc_some;
})()
;
/**
* Assocs each kv iff its val is truthy.
* @param {...*} var_args
*/
taoensso.encore.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cljs.core.count.call(null,kvs);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),cljs.core.even_QMARK_,new cljs.core.Symbol(null,"even?","even?",-1827825394,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3761__auto__ = m;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4512__auto__ = (function iter__20937(s__20938){
return (new cljs.core.LazySeq(null,(function (){
var s__20938__$1 = s__20938;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20938__$1);
if(temp__4126__auto__){
var s__20938__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20938__$2)){
var c__4510__auto__ = cljs.core.chunk_first.call(null,s__20938__$2);
var size__4511__auto__ = cljs.core.count.call(null,c__4510__auto__);
var b__20940 = cljs.core.chunk_buffer.call(null,size__4511__auto__);
if((function (){var i__20939 = (0);
while(true){
if((i__20939 < size__4511__auto__)){
var vec__20943 = cljs.core._nth.call(null,c__4510__auto__,i__20939);
var k = cljs.core.nth.call(null,vec__20943,(0),null);
var v = cljs.core.nth.call(null,vec__20943,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__20940,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20945 = (i__20939 + (1));
i__20939 = G__20945;
continue;
} else {
var G__20946 = (i__20939 + (1));
i__20939 = G__20946;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20940),iter__20937.call(null,cljs.core.chunk_rest.call(null,s__20938__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20940),null);
}
} else {
var vec__20944 = cljs.core.first.call(null,s__20938__$2);
var k = cljs.core.nth.call(null,vec__20944,(0),null);
var v = cljs.core.nth.call(null,vec__20944,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20937.call(null,cljs.core.rest.call(null,s__20938__$2)));
} else {
var G__20947 = cljs.core.rest.call(null,s__20938__$2);
s__20938__$1 = G__20947;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4512__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__20948){
var m = cljs.core.first(arglist__20948);
var kvs = cljs.core.rest(arglist__20948);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
taoensso.encore.queue_QMARK_ = (function queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
* Returns a PersistentQueue.
*/
taoensso.encore.queue = (function() {
var queue = null;
var queue__0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});
var queue__1 = (function (coll){
return cljs.core.into.call(null,queue.call(null),coll);
});
queue = function(coll){
switch(arguments.length){
case 0:
return queue__0.call(this);
case 1:
return queue__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
queue.cljs$core$IFn$_invoke$arity$0 = queue__0;
queue.cljs$core$IFn$_invoke$arity$1 = queue__1;
return queue;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.queue_STAR_ = (function() { 
var queue_STAR___delegate = function (items){
return taoensso.encore.queue.call(null,items);
};
var queue_STAR_ = function (var_args){
var items = null;
if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return queue_STAR___delegate.call(this,items);};
queue_STAR_.cljs$lang$maxFixedArity = 0;
queue_STAR_.cljs$lang$applyTo = (function (arglist__20949){
var items = cljs.core.seq(arglist__20949);
return queue_STAR___delegate(items);
});
queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = queue_STAR___delegate;
return queue_STAR_;
})()
;
/**
* (seq     {:a :A}) => ([:a :A])
* (seq-kvs {:a :A}) => (:a :A)
*/
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
* Like `apply` but assumes last arg is a map whose elements should be applied
* to `f` as an unpaired seq:
* (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
* where fn will receive args as: `(1 :y 2 :z 3)`.
* @param {...*} var_args
*/
taoensso.encore.mapply = (function() { 
var mapply__delegate = function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
};
var mapply = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mapply__delegate.call(this,f,args);};
mapply.cljs$lang$maxFixedArity = 1;
mapply.cljs$lang$applyTo = (function (arglist__20950){
var f = cljs.core.first(arglist__20950);
var args = cljs.core.rest(arglist__20950);
return mapply__delegate(f,args);
});
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__delegate;
return mapply;
})()
;
/**
* Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
* against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
*/
taoensso.encore.clj1098 = (function clj1098(x){
var or__3761__auto__ = x;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__3749__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__3749__auto__)){
return predv.call(null,v);
} else {
return and__3749__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
* Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
* pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
* way that preservers :or semantics.
*/
taoensso.encore.remove_vals = (function remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
* Cross between `hash-map` & `map-kvs`.
* @param {...*} var_args
*/
taoensso.encore.as_map = (function() { 
var as_map__delegate = function (kvs,p__20951){
var vec__20957 = p__20951;
var kf = cljs.core.nth.call(null,vec__20957,(0),null);
var vf = cljs.core.nth.call(null,vec__20957,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__20957,kf,vf){
return (function (){
return kvs;
});})(vec__20957,kf,vf))
,null)),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__20957,kf,vf){
return (function (){
return kf;
});})(vec__20957,kf,vf))
,null)),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__20957,kf,vf){
return (function (){
return vf;
});})(vec__20957,kf,vf))
,null)),new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null))], null);

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__20957,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__20957,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__20959 = kvs;
var vec__20960 = G__20959;
var k = cljs.core.nth.call(null,vec__20960,(0),null);
var v = cljs.core.nth.call(null,vec__20960,(1),null);
var s = vec__20960;
var m__$1 = m;
var G__20959__$1 = G__20959;
while(true){
var m__$2 = m__$1;
var vec__20961 = G__20959__$1;
var k__$1 = cljs.core.nth.call(null,vec__20961,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__20961,(1),null);
var s__$1 = vec__20961;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4124__auto__ = cljs.core.nnext.call(null,s__$1);
if(temp__4124__auto__){
var n = temp__4124__auto__;
var G__20962 = new_m;
var G__20963 = n;
m__$1 = G__20962;
G__20959__$1 = G__20963;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__20957,kf,vf){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__20957,kf,vf))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
};
var as_map = function (kvs,var_args){
var p__20951 = null;
if (arguments.length > 1) {
  p__20951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return as_map__delegate.call(this,kvs,p__20951);};
as_map.cljs$lang$maxFixedArity = 1;
as_map.cljs$lang$applyTo = (function (arglist__20964){
var kvs = cljs.core.first(arglist__20964);
var p__20951 = cljs.core.rest(arglist__20964);
return as_map__delegate(kvs,p__20951);
});
as_map.cljs$core$IFn$_invoke$arity$variadic = as_map__delegate;
return as_map;
})()
;
/**
* Faster `zipmap` using transients.
*/
taoensso.encore.fzipmap = (function fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__20965 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__20966 = cljs.core.next.call(null,ks__$1);
var G__20967 = cljs.core.next.call(null,vs__$1);
m = G__20965;
ks__$1 = G__20966;
vs__$1 = G__20967;
continue;
}
break;
}
});
/**
* Like `into` but supports multiple "from"s.
* @param {...*} var_args
*/
taoensso.encore.into_all = (function() {
var into_all = null;
var into_all__2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});
var into_all__3 = (function() { 
var G__20968__delegate = function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
};
var G__20968 = function (to,from,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20968__delegate.call(this,to,from,more);};
G__20968.cljs$lang$maxFixedArity = 2;
G__20968.cljs$lang$applyTo = (function (arglist__20969){
var to = cljs.core.first(arglist__20969);
arglist__20969 = cljs.core.next(arglist__20969);
var from = cljs.core.first(arglist__20969);
var more = cljs.core.rest(arglist__20969);
return G__20968__delegate(to,from,more);
});
G__20968.cljs$core$IFn$_invoke$arity$variadic = G__20968__delegate;
return G__20968;
})()
;
into_all = function(to,from,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return into_all__2.call(this,to,from);
default:
return into_all__3.cljs$core$IFn$_invoke$arity$variadic(to,from, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_all.cljs$lang$maxFixedArity = 2;
into_all.cljs$lang$applyTo = into_all__3.cljs$lang$applyTo;
into_all.cljs$core$IFn$_invoke$arity$2 = into_all__2;
into_all.cljs$core$IFn$_invoke$arity$variadic = into_all__3.cljs$core$IFn$_invoke$arity$variadic;
return into_all;
})()
;
/**
* Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb.
* @param {...*} var_args
*/
taoensso.encore.interleave_all = (function() {
var interleave_all = null;
var interleave_all__0 = (function (){
return cljs.core.List.EMPTY;
});
var interleave_all__1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});
var interleave_all__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});
var interleave_all__3 = (function() { 
var G__20970__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
};
var G__20970 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20970__delegate.call(this,c1,c2,colls);};
G__20970.cljs$lang$maxFixedArity = 2;
G__20970.cljs$lang$applyTo = (function (arglist__20971){
var c1 = cljs.core.first(arglist__20971);
arglist__20971 = cljs.core.next(arglist__20971);
var c2 = cljs.core.first(arglist__20971);
var colls = cljs.core.rest(arglist__20971);
return G__20970__delegate(c1,c2,colls);
});
G__20970.cljs$core$IFn$_invoke$arity$variadic = G__20970__delegate;
return G__20970;
})()
;
interleave_all = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 0:
return interleave_all__0.call(this);
case 1:
return interleave_all__1.call(this,c1);
case 2:
return interleave_all__2.call(this,c1,c2);
default:
return interleave_all__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave_all.cljs$lang$maxFixedArity = 2;
interleave_all.cljs$lang$applyTo = interleave_all__3.cljs$lang$applyTo;
interleave_all.cljs$core$IFn$_invoke$arity$0 = interleave_all__0;
interleave_all.cljs$core$IFn$_invoke$arity$1 = interleave_all__1;
interleave_all.cljs$core$IFn$_invoke$arity$2 = interleave_all__2;
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave_all;
})()
;
taoensso.encore.takev = (function takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
/**
* Prefer `set` when order doesn't matter (much faster).
*/
taoensso.encore.distinctv = (function() {
var distinctv = null;
var distinctv__1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__20976,in$){
var vec__20977 = p__20976;
var v = cljs.core.nth.call(null,vec__20977,(0),null);
var seen = cljs.core.nth.call(null,vec__20977,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
var distinctv__2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__20978,in$){
var vec__20979 = p__20978;
var v = cljs.core.nth.call(null,vec__20979,(0),null);
var seen = cljs.core.nth.call(null,vec__20979,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
distinctv = function(keyfn,coll){
switch(arguments.length){
case 1:
return distinctv__1.call(this,keyfn);
case 2:
return distinctv__2.call(this,keyfn,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinctv.cljs$core$IFn$_invoke$arity$1 = distinctv__1;
distinctv.cljs$core$IFn$_invoke$arity$2 = distinctv__2;
return distinctv;
})()
;
/**
* Like `sort-by` for distinct. Based on clojure.core/distinct.
*/
taoensso.encore.distinct_by = (function distinct_by(keyfn,coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__20986,seen__$1){
while(true){
var vec__20987 = p__20986;
var v = cljs.core.nth.call(null,vec__20987,(0),null);
var xs__$1 = vec__20987;
var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__20988 = cljs.core.rest.call(null,s);
var G__20989 = seen__$1;
p__20986 = G__20988;
seen__$1 = G__20989;
continue;
} else {
return cljs.core.cons.call(null,v,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
* Reverse comparator.
*/
taoensso.encore.rcompare = (function rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
/**
* @param {...*} var_args
*/
taoensso.encore.nested_merge_with = (function() { 
var nested_merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3761__auto__ = m1;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
};
var nested_merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return nested_merge_with__delegate.call(this,f,maps);};
nested_merge_with.cljs$lang$maxFixedArity = 1;
nested_merge_with.cljs$lang$applyTo = (function (arglist__20991){
var f = cljs.core.first(arglist__20991);
var maps = cljs.core.rest(arglist__20991);
return nested_merge_with__delegate(f,maps);
});
nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = nested_merge_with__delegate;
return nested_merge_with;
})()
;
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
* Returns the 'greatest' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.greatest = (function() { 
var greatest__delegate = function (coll,p__20994){
var vec__20996 = p__20994;
var _QMARK_comparator = cljs.core.nth.call(null,vec__20996,(0),null);
var comparator = (function (){var or__3761__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__20996,_QMARK_comparator){
return (function (p1__20992_SHARP_,p2__20993_SHARP_){
if((comparator.call(null,p1__20992_SHARP_,p2__20993_SHARP_) > (0))){
return p2__20993_SHARP_;
} else {
return p1__20992_SHARP_;
}
});})(comparator,vec__20996,_QMARK_comparator))
,coll);
};
var greatest = function (coll,var_args){
var p__20994 = null;
if (arguments.length > 1) {
  p__20994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return greatest__delegate.call(this,coll,p__20994);};
greatest.cljs$lang$maxFixedArity = 1;
greatest.cljs$lang$applyTo = (function (arglist__20997){
var coll = cljs.core.first(arglist__20997);
var p__20994 = cljs.core.rest(arglist__20997);
return greatest__delegate(coll,p__20994);
});
greatest.cljs$core$IFn$_invoke$arity$variadic = greatest__delegate;
return greatest;
})()
;
/**
* Returns the 'least' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.least = (function() { 
var least__delegate = function (coll,p__21000){
var vec__21002 = p__21000;
var _QMARK_comparator = cljs.core.nth.call(null,vec__21002,(0),null);
var comparator = (function (){var or__3761__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__21002,_QMARK_comparator){
return (function (p1__20998_SHARP_,p2__20999_SHARP_){
if((comparator.call(null,p1__20998_SHARP_,p2__20999_SHARP_) < (0))){
return p2__20999_SHARP_;
} else {
return p1__20998_SHARP_;
}
});})(comparator,vec__21002,_QMARK_comparator))
,coll);
};
var least = function (coll,var_args){
var p__21000 = null;
if (arguments.length > 1) {
  p__21000 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return least__delegate.call(this,coll,p__21000);};
least.cljs$lang$maxFixedArity = 1;
least.cljs$lang$applyTo = (function (arglist__21003){
var coll = cljs.core.first(arglist__21003);
var p__21000 = cljs.core.rest(arglist__21003);
return least__delegate(coll,p__21000);
});
least.cljs$core$IFn$_invoke$arity$variadic = least__delegate;
return least;
})()
;
/**
* Like `repeatedly` but faster and `conj`s items into given collection.
*/
taoensso.encore.repeatedly_into = (function repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__21004 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__21005 = (idx + (1));
v = G__21004;
idx = G__21005;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__21006 = cljs.core.conj.call(null,v,f.call(null));
var G__21007 = (idx + (1));
v = G__21006;
idx = G__21007;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.format_STAR_ = (function format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__3761__auto__ = fmt;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
* Like `clojure.core/format` but:
* * Returns "" when fmt is nil rather than throwing an NPE.
* * Formats nil as "nil" rather than "null".
* * Provides ClojureScript support via goog.string.format (this has fewer
* formatting options than Clojure's `format`!).
* @param {...*} var_args
*/
taoensso.encore.format = (function() { 
var format__delegate = function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__21008){
var fmt = cljs.core.first(arglist__21008);
var args = cljs.core.rest(arglist__21008);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
* http://dev.clojure.org/jira/browse/CLJS-911.
*/
taoensso.encore.str_replace = (function str_replace(s,match,replacement){
var replacement__$1 = ((!(cljs.core.fn_QMARK_.call(null,replacement)))?replacement:(function() { 
var G__21009__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__21009 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21009__delegate.call(this,args);};
G__21009.cljs$lang$maxFixedArity = 0;
G__21009.cljs$lang$applyTo = (function (arglist__21010){
var args = cljs.core.seq(arglist__21010);
return G__21009__delegate(args);
});
G__21009.cljs$core$IFn$_invoke$arity$variadic = G__21009__delegate;
return G__21009;
})()
);
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement__$1);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
* Gives a consistent, flexible, cross-platform substring API built on
* `sub-indexes`.
* @param {...*} var_args
*/
taoensso.encore.substr = (function() { 
var substr__delegate = function (s,start_idx,p__21011){
var vec__21014 = p__21011;
var _QMARK_max_len = cljs.core.nth.call(null,vec__21014,(0),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (vec__21014,_QMARK_max_len){
return (function (){
return s;
});})(vec__21014,_QMARK_max_len))
,null)),new cljs.core.Symbol(null,"s","s",-948495851,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__21015 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__21015,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__21015,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
};
var substr = function (s,start_idx,var_args){
var p__21011 = null;
if (arguments.length > 2) {
  p__21011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return substr__delegate.call(this,s,start_idx,p__21011);};
substr.cljs$lang$maxFixedArity = 2;
substr.cljs$lang$applyTo = (function (arglist__21016){
var s = cljs.core.first(arglist__21016);
arglist__21016 = cljs.core.next(arglist__21016);
var start_idx = cljs.core.first(arglist__21016);
var p__21011 = cljs.core.rest(arglist__21016);
return substr__delegate(s,start_idx,p__21011);
});
substr.cljs$core$IFn$_invoke$arity$variadic = substr__delegate;
return substr;
})()
;
taoensso.encore.str_contains_QMARK_ = (function str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
* @param {...*} var_args
*/
taoensso.encore.str__QMARK_index = (function() { 
var str__QMARK_index__delegate = function (s,substr,p__21017){
var vec__21019 = p__21017;
var start_idx = cljs.core.nth.call(null,vec__21019,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__21019,(1),null);
var start_idx__$1 = ((function (){var or__3761__auto__ = start_idx;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
};
var str__QMARK_index = function (s,substr,var_args){
var p__21017 = null;
if (arguments.length > 2) {
  p__21017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return str__QMARK_index__delegate.call(this,s,substr,p__21017);};
str__QMARK_index.cljs$lang$maxFixedArity = 2;
str__QMARK_index.cljs$lang$applyTo = (function (arglist__21020){
var s = cljs.core.first(arglist__21020);
arglist__21020 = cljs.core.next(arglist__21020);
var substr = cljs.core.first(arglist__21020);
var p__21017 = cljs.core.rest(arglist__21020);
return str__QMARK_index__delegate(s,substr,p__21017);
});
str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = str__QMARK_index__delegate;
return str__QMARK_index;
})()
;
/**
* Like `clojure.string/join` but ensures no double separators.
* @param {...*} var_args
*/
taoensso.encore.join_once = (function() { 
var join_once__delegate = function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator)){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator)){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
};
var join_once = function (separator,var_args){
var coll = null;
if (arguments.length > 1) {
  coll = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return join_once__delegate.call(this,separator,coll);};
join_once.cljs$lang$maxFixedArity = 1;
join_once.cljs$lang$applyTo = (function (arglist__21021){
var separator = cljs.core.first(arglist__21021);
var coll = cljs.core.rest(arglist__21021);
return join_once__delegate(separator,coll);
});
join_once.cljs$core$IFn$_invoke$arity$variadic = join_once__delegate;
return join_once;
})()
;
/**
* Joins string paths (URLs, file paths, etc.) ensuring correct "/"
* interposition.
* @param {...*} var_args
*/
taoensso.encore.path = (function() { 
var path__delegate = function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
};
var path = function (var_args){
var parts = null;
if (arguments.length > 0) {
  parts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return path__delegate.call(this,parts);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__21022){
var parts = cljs.core.seq(arglist__21022);
return path__delegate(parts);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* Converts all word breaks of any form and length (including line breaks of any
* form, tabs, spaces, etc.) to a single regular space.
*/
taoensso.encore.norm_word_breaks = (function norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
* Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
* Ref. http://www.ietf.org/rfc/rfc4122.txt,
* https://gist.github.com/franks42/4159427
*/
taoensso.encore.uuid_str = (function() {
var uuid_str = null;
var uuid_str__0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(15)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(14)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});
var uuid_str__1 = (function (max_length){
return taoensso.encore.substr.call(null,uuid_str.call(null),(0),max_length);
});
uuid_str = function(max_length){
switch(arguments.length){
case 0:
return uuid_str__0.call(this);
case 1:
return uuid_str__1.call(this,max_length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
uuid_str.cljs$core$IFn$_invoke$arity$0 = uuid_str__0;
uuid_str.cljs$core$IFn$_invoke$arity$1 = uuid_str__1;
return uuid_str;
})()
;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
* Swaps associative value at key and returns the new value.
* Specialized, fast `swap-in!` for use mostly by memoization utils.
*/
taoensso.encore.swap_val_BANG_ = (function swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m)){
return new_v;
} else {
continue;
}
break;
}
});
/**
* As `clojure.core/memoize` but uses delays to avoid write races.
*/
taoensso.encore.memoize_ = (function memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__21023__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__3761__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__3761__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__3761__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__3761__auto__,cache_))
,null));
}
});})(or__3761__auto__,cache_))
);
}
})());
};
var G__21023 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21023__delegate.call(this,args);};
G__21023.cljs$lang$maxFixedArity = 0;
G__21023.cljs$lang$applyTo = (function (arglist__21024){
var args = cljs.core.seq(arglist__21024);
return G__21023__delegate(args);
});
G__21023.cljs$core$IFn$_invoke$arity$variadic = G__21023__delegate;
return G__21023;
})()
;
;})(cache_))
});
/**
* Great for Reactjs render op caching on mobile devices, etc.
*/
taoensso.encore.memoize1 = (function memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__21025__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__3761__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__3761__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return new cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__3761__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__3761__auto__,cache_))
,null))], true, false);
}
});})(or__3761__auto__,cache_))
),args);
}
})());
};
var G__21025 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21025__delegate.call(this,args);};
G__21025.cljs$lang$maxFixedArity = 0;
G__21025.cljs$lang$applyTo = (function (arglist__21026){
var args = cljs.core.seq(arglist__21026);
return G__21025__delegate(args);
});
G__21025.cljs$core$IFn$_invoke$arity$variadic = G__21025__delegate;
return G__21025;
})()
;
;})(cache_))
});
/**
* Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
* and immediately applies memoized f to given arguments.
* @param {...*} var_args
*/
taoensso.encore.memoized = (function() { 
var memoized__delegate = function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__21027_SHARP_){
if(cljs.core.truth_(p1__21027_SHARP_)){
return p1__21027_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
};
var memoized = function (cache,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return memoized__delegate.call(this,cache,f,args);};
memoized.cljs$lang$maxFixedArity = 2;
memoized.cljs$lang$applyTo = (function (arglist__21028){
var cache = cljs.core.first(arglist__21028);
arglist__21028 = cljs.core.next(arglist__21028);
var f = cljs.core.first(arglist__21028);
var args = cljs.core.rest(arglist__21028);
return memoized__delegate(cache,f,args);
});
memoized.cljs$core$IFn$_invoke$arity$variadic = memoized__delegate;
return memoized;
})()
;
/**
* Like `clojure.core/memoize` but:
* * Uses delays to prevent race conditions on writes.
* * Supports auto invalidation & gc with `ttl-ms` option.
* * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
* * Supports cache size limit & gc with `cache-size` option.
*/
taoensso.encore.memoize_STAR_ = (function() {
var memoize_STAR_ = null;
var memoize_STAR___1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__21071__delegate = function (p__21051){
var vec__21052 = p__21051;
var arg1 = cljs.core.nth.call(null,vec__21052,(0),null);
var argn = cljs.core.nthnext.call(null,vec__21052,(1));
var args = vec__21052;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__3761__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__3761__auto__,fresh_QMARK_,args__$1,vec__21052,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__3749__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__3749__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__3749__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__3761__auto__,fresh_QMARK_,args__$1,vec__21052,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__3761__auto__,fresh_QMARK_,args__$1,vec__21052,arg1,argn,args,cache_))
,null));
}
});})(or__3761__auto__,fresh_QMARK_,args__$1,vec__21052,arg1,argn,args,cache_))
);
}
})());
}
};
var G__21071 = function (var_args){
var p__21051 = null;
if (arguments.length > 0) {
  p__21051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21071__delegate.call(this,p__21051);};
G__21071.cljs$lang$maxFixedArity = 0;
G__21071.cljs$lang$applyTo = (function (arglist__21072){
var p__21051 = cljs.core.seq(arglist__21072);
return G__21071__delegate(p__21051);
});
G__21071.cljs$core$IFn$_invoke$arity$variadic = G__21071__delegate;
return G__21071;
})()
;
;})(cache_))
});
var memoize_STAR___2 = (function (ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__21073__delegate = function (p__21053){
var vec__21054 = p__21053;
var arg1 = cljs.core.nth.call(null,vec__21054,(0),null);
var argn = cljs.core.nthnext.call(null,vec__21054,(1));
var args = vec__21054;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_21074 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_21074,vec__21054,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_21074,vec__21054,arg1,argn,args,cache){
return (function (m_STAR_,k,p__21055){
var vec__21056 = p__21055;
var dv = cljs.core.nth.call(null,vec__21056,(0),null);
var udt = cljs.core.nth.call(null,vec__21056,(1),null);
var cv = vec__21056;
if(((instant_21074 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_21074,vec__21054,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_21074,vec__21054,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__21057 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__21054,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__3749__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__3749__auto__)){
var and__3749__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__3749__auto____$1){
var vec__21059 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__21059,(0),null);
var udt = cljs.core.nth.call(null,vec__21059,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__3749__auto____$1;
}
} else {
return and__3749__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__21054,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__21054,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__21054,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__21057,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__21073 = function (var_args){
var p__21053 = null;
if (arguments.length > 0) {
  p__21053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21073__delegate.call(this,p__21053);};
G__21073.cljs$lang$maxFixedArity = 0;
G__21073.cljs$lang$applyTo = (function (arglist__21075){
var p__21053 = cljs.core.seq(arglist__21075);
return G__21073__delegate(p__21053);
});
G__21073.cljs$core$IFn$_invoke$arity$variadic = G__21073__delegate;
return G__21073;
})()
;
;})(cache))
});
var memoize_STAR___3 = (function (cache_size,ttl_ms,f){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return ttl_ms;
}),null)),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null));


taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return cache_size;
}),null)),new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null),taoensso.encore.pos_int_QMARK_,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null));


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__21076__delegate = function (p__21060){
var vec__21061 = p__21060;
var arg1 = cljs.core.nth.call(null,vec__21061,(0),null);
var argn = cljs.core.nthnext.call(null,vec__21061,(1));
var args = vec__21061;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_.call(null)){
var instant_21077 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_21077,vec__21061,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_21077,vec__21061,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__21062){
var vec__21063 = p__21062;
var dv = cljs.core.nth.call(null,vec__21063,(0),null);
var udt = cljs.core.nth.call(null,vec__21063,(1),null);
var _ = cljs.core.nth.call(null,vec__21063,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__21063,(3),null);
var cv = vec__21063;
if(((instant_21077 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_21077,vec__21061,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_21077,vec__21061,arg1,argn,args,state){
return (function (p1__21030_SHARP_){
return cljs.core.nth.call(null,p1__21030_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_21077,vec__21061,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_21077,vec__21061,arg1,argn,args,state){
return (function (p1__21029_SHARP_){
return cljs.core.nth.call(null,p1__21029_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_21077,vec__21061,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_21077,vec__21061,arg1,argn,args,state){
return (function (k){
var vec__21064 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__21064,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21064,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__21064,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__21064,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_21077,vec__21061,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_21077,vec__21061,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__21065 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__21061,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__3749__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__3749__auto__)){
var and__3749__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__3749__auto____$1){
var or__3761__auto__ = (_QMARK_instant == null);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var vec__21069 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__21069,(0),null);
var udt = cljs.core.nth.call(null,vec__21069,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__3749__auto____$1;
}
} else {
return and__3749__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__21061,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__21061,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__21061,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__21065,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__21065,dv,vec__21061,arg1,argn,args,state){
return (function (m){
var temp__4126__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__21070 = temp__4126__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__21070,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__21070,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__21070,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__21070,(3),null);
var cv = vec__21070;
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__21065,dv,vec__21061,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__21076 = function (var_args){
var p__21060 = null;
if (arguments.length > 0) {
  p__21060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21076__delegate.call(this,p__21060);};
G__21076.cljs$lang$maxFixedArity = 0;
G__21076.cljs$lang$applyTo = (function (arglist__21078){
var p__21060 = cljs.core.seq(arglist__21078);
return G__21076__delegate(p__21060);
});
G__21076.cljs$core$IFn$_invoke$arity$variadic = G__21076__delegate;
return G__21076;
})()
;
;})(state))
});
memoize_STAR_ = function(cache_size,ttl_ms,f){
switch(arguments.length){
case 1:
return memoize_STAR___1.call(this,cache_size);
case 2:
return memoize_STAR___2.call(this,cache_size,ttl_ms);
case 3:
return memoize_STAR___3.call(this,cache_size,ttl_ms,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = memoize_STAR___1;
memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = memoize_STAR___2;
memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = memoize_STAR___3;
return memoize_STAR_;
})()
;
/**
* Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
* returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
* [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
*/
taoensso.encore.rate_limiter_STAR_ = (function rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__21114){
var vec__21115 = p__21114;
var _ = cljs.core.nth.call(null,vec__21115,(0),null);
var win_ms = cljs.core.nth.call(null,vec__21115,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__21115,(2),null);
var spec = vec__21115;
return win_ms;
});})(vspecs,vstates_))
,vspecs));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__21116){
var vec__21117 = p__21116;
var _ = cljs.core.nth.call(null,vec__21117,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21117,(1),null);
var id = cljs.core.nth.call(null,vec__21117,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null),new cljs.core.Symbol(null,"nspecs","nspecs",-1621596945,null)))))].join('')))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var check_rate_limits__delegate = function (p__21118){
var vec__21134 = p__21118;
var req_id = cljs.core.nth.call(null,vec__21134,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__3749__auto__ = req_id;
if(cljs.core.truth_(and__3749__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__3749__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function gc(m){
var m__$1 = taoensso.encore.clj1098.call(null,m);
return cljs.core.reduce_kv.call(null,((function (m__$1,instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (m__$1,instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__21137){
var vec__21138 = p__21137;
var ___$1 = cljs.core.nth.call(null,vec__21138,(0),null);
var udt = cljs.core.nth.call(null,vec__21138,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__21138,(2),null);
var x__4073__auto__ = acc;
var y__4074__auto__ = udt;
return ((x__4073__auto__ > y__4074__auto__) ? x__4073__auto__ : y__4074__auto__);
});})(m__$1,instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(m__$1,instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m__$1,m__$1);
});})(instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__21139 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__21140 = in_vspecs;
var vec__21141 = cljs.core.nth.call(null,vec__21140,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__21141,(0),null);
var win_ms = cljs.core.nth.call(null,vec__21141,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__21141,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__21140,(1));
var vec__21142 = in_vstate;
var vec__21143 = cljs.core.nth.call(null,vec__21142,(0),null);
var ncalls = cljs.core.nth.call(null,vec__21143,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__21143,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__21142,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__3761__auto__ = (_QMARK_worst_limit_offence == null);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var vec__21145 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__21145,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21145,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__21149 = next_in_vspecs;
var G__21150 = next_in_vstate;
var G__21151 = new_out_vstate;
var G__21152 = new__QMARK_worst_limit_offence;
in_vspecs = G__21149;
in_vstate = G__21150;
out_vstate = G__21151;
_QMARK_worst_limit_offence = G__21152;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__21139,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__21139,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__21139,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__21146){
var vec__21147 = p__21146;
var ncalls = cljs.core.nth.call(null,vec__21147,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__21147,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__21139,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4126__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4126__auto__)){
var wlo = temp__4126__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__21148 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__21148,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21148,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__21134,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var check_rate_limits = function (var_args){
var p__21118 = null;
if (arguments.length > 0) {
  p__21118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return check_rate_limits__delegate.call(this,p__21118);};
check_rate_limits.cljs$lang$maxFixedArity = 0;
check_rate_limits.cljs$lang$applyTo = (function (arglist__21153){
var p__21118 = cljs.core.seq(arglist__21153);
return check_rate_limits__delegate(p__21118);
});
check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = check_rate_limits__delegate;
return check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__21154__delegate = function (args){
var temp__4124__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var backoff = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__21154 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21154__delegate.call(this,args);};
G__21154.cljs$lang$maxFixedArity = 0;
G__21154.cljs$lang$applyTo = (function (arglist__21155){
var args = cljs.core.seq(arglist__21155);
return G__21154__delegate(args);
});
G__21154.cljs$core$IFn$_invoke$arity$variadic = G__21154__delegate;
return G__21154;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4124__auto__ = (function (){var and__3749__auto__ = typeof window !== 'undefined';
if(and__3749__auto__){
return (window["performance"]);
} else {
return and__3749__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var perf = temp__4124__auto__;
var temp__4124__auto____$1 = (function (){var or__3761__auto__ = (perf["now"]);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__3761__auto____$1)){
return or__3761__auto____$1;
} else {
var or__3761__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__3761__auto____$2)){
return or__3761__auto____$2;
} else {
var or__3761__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__3761__auto____$3)){
return or__3761__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var f = temp__4124__auto____$1;
return ((function (f,temp__4124__auto____$1,perf,temp__4124__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4124__auto____$1,perf,temp__4124__auto__))
} else {
return ((function (temp__4124__auto____$1,perf,temp__4124__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4124__auto____$1,perf,temp__4124__auto__))
}
} else {
return ((function (temp__4124__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4124__auto__))
}
})();
taoensso.encore.qb_min_times = (function qb_min_times(times){
return cljs.core.apply.call(null,cljs.core.min,times);
});
taoensso.encore.console_log = (function (){var temp__4124__auto__ = (function (){var and__3749__auto__ = typeof console !== 'undefined';
if(and__3749__auto__){
return console.log;
} else {
return and__3749__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return ((function (f,temp__4124__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4124__auto__))
} else {
return ((function (temp__4124__auto__){
return (function (xs){
return null;
});
;})(temp__4124__auto__))
}
})();

/**
* @param {...*} var_args
*/
taoensso.encore.log = (function() { 
var log__delegate = function (xs){
return taoensso.encore.console_log.call(null,xs);
};
var log = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this,xs);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__21156){
var xs = cljs.core.seq(arglist__21156);
return log__delegate(xs);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.logp = (function() { 
var logp__delegate = function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str.call(null,xs)], null));
};
var logp = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return logp__delegate.call(this,xs);};
logp.cljs$lang$maxFixedArity = 0;
logp.cljs$lang$applyTo = (function (arglist__21157){
var xs = cljs.core.seq(arglist__21157);
return logp__delegate(xs);
});
logp.cljs$core$IFn$_invoke$arity$variadic = logp__delegate;
return logp;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.logf = (function() { 
var logf__delegate = function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
};
var logf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return logf__delegate.call(this,fmt,xs);};
logf.cljs$lang$maxFixedArity = 1;
logf.cljs$lang$applyTo = (function (arglist__21158){
var fmt = cljs.core.first(arglist__21158);
var xs = cljs.core.rest(arglist__21158);
return logf__delegate(fmt,xs);
});
logf.cljs$core$IFn$_invoke$arity$variadic = logf__delegate;
return logf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.sayp = (function() { 
var sayp__delegate = function (xs){
return alert(taoensso.encore.spaced_str.call(null,xs));
};
var sayp = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sayp__delegate.call(this,xs);};
sayp.cljs$lang$maxFixedArity = 0;
sayp.cljs$lang$applyTo = (function (arglist__21159){
var xs = cljs.core.seq(arglist__21159);
return sayp__delegate(xs);
});
sayp.cljs$core$IFn$_invoke$arity$variadic = sayp__delegate;
return sayp;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.sayf = (function() { 
var sayf__delegate = function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
};
var sayf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sayf__delegate.call(this,fmt,xs);};
sayf.cljs$lang$maxFixedArity = 1;
sayf.cljs$lang$applyTo = (function (arglist__21160){
var fmt = cljs.core.first(arglist__21160);
var xs = cljs.core.rest(arglist__21160);
return sayf__delegate(fmt,xs);
});
sayf.cljs$core$IFn$_invoke$arity$variadic = sayf__delegate;
return sayf;
})()
;
/**
* Returns browser window's current location. Forgeable.
*/
taoensso.encore.get_window_location = (function get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
* Returns an immediately available XhrIo instance, or nil. The instance must be
* released back to pool manually.
*/
taoensso.encore.get_pooled_xhr_BANG_ = (function get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
* [uri method get-or-post-params] -> [uri post-content]
*/
taoensso.encore.coerce_xhr_params = (function coerce_xhr_params(uri,method,params){
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay((function (){
return params;
}),null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
})());
var G__21162 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__21162) {
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
* Ref. https://developers.google.com/closure/library/docs/xhrio.
* 
* (ajax-lite "/my-post-route"
* {:method     :post
* :params     {:username "Rich Hickey"
* :type     "Awesome"}
* :headers    {"Foo" "Bar"}
* :resp-type  :text
* :timeout-ms 7000
* :with-credentials? false ; Enable if using CORS (requires xhr v2+)
* }
* (fn async-callback [resp-map]
* (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
* ;; ?status  - 200, 404, ..., or nil on no response
* ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
* ;;                  :timeout :no-content <http-error-status> nil}
* (js/alert (str "Ajax response: " resp-map)))))
*/
taoensso.encore.ajax_lite = (function ajax_lite(uri,p__21166,callback){
var map__21183 = p__21166;
var map__21183__$1 = ((cljs.core.seq_QMARK_.call(null,map__21183))?cljs.core.apply.call(null,cljs.core.hash_map,map__21183):map__21183);
var opts = map__21183__$1;
var errorf = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
var progress_fn = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var resp_type = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var timeout_ms = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var headers = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method){
return (function (){
return timeout_ms;
});})(map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method))
,null)),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4124__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var xhr = temp__4124__auto__;
try{var timeout_ms__$1 = (function (){var or__3761__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__21186 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__21186) {
case "put":
return "PUT";

break;
case "post":
return "POST";

break;
case "get":
return "GET";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__21185 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__21185,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__21185,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__21187_21200 = xhr;
goog.events.listenOnce(G__21187_21200,goog.net.EventType.READY,((function (G__21187_21200,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__21187_21200,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method))
);

goog.events.listenOnce(G__21187_21200,goog.net.EventType.COMPLETE,((function (G__21187_21200,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method){
return (function wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__21193 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__21187_21200,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method){
return (function (p1__21165_SHARP_,p2__21164_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__21164_SHARP_,p1__21165_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__21187_21200,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method))
;
var expr__21194 = [cljs.core.str(_QMARK_content_type)].join('');
if(pred__21193.call(null,"/edn",expr__21194)){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(pred__21193.call(null,"/json",expr__21194)){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(pred__21193.call(null,"/xml",expr__21194)){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(pred__21193.call(null,"/html",expr__21194)){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__21197 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__21197) {
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
case "xml":
return xhr.getResponseXml();

break;
case "json":
return xhr.getResponseJson();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e21196){if((e21196 instanceof Error)){
var e = e21196;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e21196;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__3761__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__21187_21200,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method))
);


var temp__4126__auto___21202 = progress_fn;
if(cljs.core.truth_(temp__4126__auto___21202)){
var pf_21203 = temp__4126__auto___21202;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_21203,temp__4126__auto___21202,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__3749__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__3749__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__3749__auto__;
}
})())?(loaded / total):null);
return pf_21203.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_21203,temp__4126__auto___21202,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21185,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__21183,map__21183__$1,opts,errorf,progress_fn,with_credentials_QMARK_,resp_type,timeout_ms,headers,params,method))
);
} else {
}

var G__21198_21204 = xhr;
var temp__4126__auto___21205 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4126__auto___21205)){
var x_21206 = temp__4126__auto___21205;
G__21198_21204.setTimeoutInterval((function (){var or__3761__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4126__auto___21207 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4126__auto___21207)){
var x_21208 = temp__4126__auto___21207;
G__21198_21204.setWithCredentials(true);
} else {
}

var temp__4126__auto___21209 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4126__auto___21209)){
var x_21210 = temp__4126__auto___21209;
G__21198_21204.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e21184){if((e21184 instanceof Error)){
var e = e21184;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e21184;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
* Stolen from http://goo.gl/99NSR1.
*/
taoensso.encore.url_encode = (function url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
* Stolen from http://goo.gl/99NSR1.
* @param {...*} var_args
*/
taoensso.encore.url_decode = (function() { 
var url_decode__delegate = function (s,p__21211){
var vec__21213 = p__21211;
var encoding = cljs.core.nth.call(null,vec__21213,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
};
var url_decode = function (s,var_args){
var p__21211 = null;
if (arguments.length > 1) {
  p__21211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_decode__delegate.call(this,s,p__21211);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__21214){
var s = cljs.core.first(arglist__21214);
var p__21211 = cljs.core.rest(arglist__21214);
return url_decode__delegate(s,p__21211);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
taoensso.encore.format_query_string = (function format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
return join.call(null,(function (){var iter__4512__auto__ = ((function (param,join){
return (function iter__21223(s__21224){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__21224__$1 = s__21224;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21224__$1);
if(temp__4126__auto__){
var s__21224__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21224__$2)){
var c__4510__auto__ = cljs.core.chunk_first.call(null,s__21224__$2);
var size__4511__auto__ = cljs.core.count.call(null,c__4510__auto__);
var b__21226 = cljs.core.chunk_buffer.call(null,size__4511__auto__);
if((function (){var i__21225 = (0);
while(true){
if((i__21225 < size__4511__auto__)){
var vec__21229 = cljs.core._nth.call(null,c__4510__auto__,i__21225);
var k = cljs.core.nth.call(null,vec__21229,(0),null);
var v = cljs.core.nth.call(null,vec__21229,(1),null);
cljs.core.chunk_append.call(null,b__21226,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3761__auto__ = cljs.core.seq.call(null,v);
if(or__3761__auto__){
return or__3761__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__21231 = (i__21225 + (1));
i__21225 = G__21231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21226),iter__21223.call(null,cljs.core.chunk_rest.call(null,s__21224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21226),null);
}
} else {
var vec__21230 = cljs.core.first.call(null,s__21224__$2);
var k = cljs.core.nth.call(null,vec__21230,(0),null);
var v = cljs.core.nth.call(null,vec__21230,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3761__auto__ = cljs.core.seq.call(null,v);
if(or__3761__auto__){
return or__3761__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),iter__21223.call(null,cljs.core.rest.call(null,s__21224__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__4512__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4124__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var cur = temp__4124__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
* Based on `ring-codec/form-decode`.
* @param {...*} var_args
*/
taoensso.encore.parse_query_params = (function() { 
var parse_query_params__delegate = function (s,p__21232){
var vec__21235 = p__21232;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__21235,(0),null);
var encoding = cljs.core.nth.call(null,vec__21235,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(!(taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__21235,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4124__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__21236 = temp__4124__auto__;
var k = cljs.core.nth.call(null,vec__21236,(0),null);
var v = cljs.core.nth.call(null,vec__21236,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__21235,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.encore",null,(new cljs.core.Delay(((function (_PERCENT_,vec__21235,keywordize_QMARK_,encoding){
return (function (){
return _PERCENT_;
});})(_PERCENT_,vec__21235,keywordize_QMARK_,encoding))
,null)),new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.map_QMARK_,new cljs.core.Symbol(null,"map?","map?",-1780568534,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
};
var parse_query_params = function (s,var_args){
var p__21232 = null;
if (arguments.length > 1) {
  p__21232 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return parse_query_params__delegate.call(this,s,p__21232);};
parse_query_params.cljs$lang$maxFixedArity = 1;
parse_query_params.cljs$lang$applyTo = (function (arglist__21237){
var s = cljs.core.first(arglist__21237);
var p__21232 = cljs.core.rest(arglist__21237);
return parse_query_params__delegate(s,p__21232);
});
parse_query_params.cljs$core$IFn$_invoke$arity$variadic = parse_query_params__delegate;
return parse_query_params;
})()
;
taoensso.encore.merge_url_with_query_string = (function merge_url_with_query_string(url,m){
var vec__21239 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__21239,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__21239,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4126__auto__ = taoensso.encore.format_query_string.call(null,qmap);
if(cljs.core.truth_(temp__4126__auto__)){
var qstr = temp__4126__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
/**
* @param {...*} var_args
*/
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__21240){
var vec__21242 = p__21240;
var nattempt = cljs.core.nth.call(null,vec__21242,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3761__auto__ = nattempt;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__21240 = null;
if (arguments.length > 1) {
  p__21240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__21240);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__21243){
var nullary_f = cljs.core.first(arglist__21243);
var p__21240 = cljs.core.rest(arglist__21243);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__21240);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;
taoensso.encore.keys_EQ_ = (function keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.as_bool = (function as_bool(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2191,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_bool.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_int = (function as_int(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2192,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_int.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.as_float = (function as_float(x){
if(cljs.core.truth_(x)){
return taoensso.encore.hcond.call(null,false,"taoensso.encore",2193,(new cljs.core.Delay((function (){
return taoensso.encore.as__QMARK_float.call(null,x);
}),null)),cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__21244__delegate = function (args){
var temp__4124__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var backoff_ms = temp__4124__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__21244 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21244__delegate.call(this,args);};
G__21244.cljs$lang$maxFixedArity = 0;
G__21244.cljs$lang$applyTo = (function (arglist__21245){
var args = cljs.core.seq(arglist__21245);
return G__21244__delegate(args);
});
G__21244.cljs$core$IFn$_invoke$arity$variadic = G__21244__delegate;
return G__21244;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
* DEPRECATED
*/
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

/**
* @param {...*} var_args
*/
taoensso.encore.tracef = (function() { 
var tracef__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var tracef = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return tracef__delegate.call(this,fmt,xs);};
tracef.cljs$lang$maxFixedArity = 1;
tracef.cljs$lang$applyTo = (function (arglist__21246){
var fmt = cljs.core.first(arglist__21246);
var xs = cljs.core.rest(arglist__21246);
return tracef__delegate(fmt,xs);
});
tracef.cljs$core$IFn$_invoke$arity$variadic = tracef__delegate;
return tracef;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.debugf = (function() { 
var debugf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var debugf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return debugf__delegate.call(this,fmt,xs);};
debugf.cljs$lang$maxFixedArity = 1;
debugf.cljs$lang$applyTo = (function (arglist__21247){
var fmt = cljs.core.first(arglist__21247);
var xs = cljs.core.rest(arglist__21247);
return debugf__delegate(fmt,xs);
});
debugf.cljs$core$IFn$_invoke$arity$variadic = debugf__delegate;
return debugf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.infof = (function() { 
var infof__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var infof = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return infof__delegate.call(this,fmt,xs);};
infof.cljs$lang$maxFixedArity = 1;
infof.cljs$lang$applyTo = (function (arglist__21248){
var fmt = cljs.core.first(arglist__21248);
var xs = cljs.core.rest(arglist__21248);
return infof__delegate(fmt,xs);
});
infof.cljs$core$IFn$_invoke$arity$variadic = infof__delegate;
return infof;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.warnf = (function() { 
var warnf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
};
var warnf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return warnf__delegate.call(this,fmt,xs);};
warnf.cljs$lang$maxFixedArity = 1;
warnf.cljs$lang$applyTo = (function (arglist__21249){
var fmt = cljs.core.first(arglist__21249);
var xs = cljs.core.rest(arglist__21249);
return warnf__delegate(fmt,xs);
});
warnf.cljs$core$IFn$_invoke$arity$variadic = warnf__delegate;
return warnf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.errorf = (function() { 
var errorf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
};
var errorf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return errorf__delegate.call(this,fmt,xs);};
errorf.cljs$lang$maxFixedArity = 1;
errorf.cljs$lang$applyTo = (function (arglist__21250){
var fmt = cljs.core.first(arglist__21250);
var xs = cljs.core.rest(arglist__21250);
return errorf__delegate(fmt,xs);
});
errorf.cljs$core$IFn$_invoke$arity$variadic = errorf__delegate;
return errorf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.fatalf = (function() { 
var fatalf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
};
var fatalf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fatalf__delegate.call(this,fmt,xs);};
fatalf.cljs$lang$maxFixedArity = 1;
fatalf.cljs$lang$applyTo = (function (arglist__21251){
var fmt = cljs.core.first(arglist__21251);
var xs = cljs.core.rest(arglist__21251);
return fatalf__delegate(fmt,xs);
});
fatalf.cljs$core$IFn$_invoke$arity$variadic = fatalf__delegate;
return fatalf;
})()
;

/**
* @param {...*} var_args
*/
taoensso.encore.reportf = (function() { 
var reportf__delegate = function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
};
var reportf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reportf__delegate.call(this,fmt,xs);};
reportf.cljs$lang$maxFixedArity = 1;
reportf.cljs$lang$applyTo = (function (arglist__21252){
var fmt = cljs.core.first(arglist__21252);
var xs = cljs.core.rest(arglist__21252);
return reportf__delegate(fmt,xs);
});
reportf.cljs$core$IFn$_invoke$arity$variadic = reportf__delegate;
return reportf;
})()
;
