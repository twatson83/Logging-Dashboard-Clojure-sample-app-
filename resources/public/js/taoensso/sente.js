// Compiled by ClojureScript 0.0-2411
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente.interfaces');
goog.require('taoensso.sente.interfaces');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
taoensso.sente.set_logging_level_BANG_ = (function set_logging_level_BANG_(level){
return taoensso.encore._STAR_log_level_STAR_ = level;
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
* Ref. https://developers.google.com/closure/library/docs/xhrio.
* 
* (ajax-call "/my-post-route"
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
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__23674 = x;
var ev_id = cljs.core.nth.call(null,vec__23674,(0),null);
var _ = cljs.core.nth.call(null,vec__23674,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
* Valid [ev-id ?ev-data] form?
*/
taoensso.sente.event_QMARK_ = (function event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function as_event(x){
if(taoensso.sente.event_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function assert_event(x){
var temp__4126__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4126__auto__)){
var _QMARK_err = temp__4126__auto__;
var err_fmt = [cljs.core.str((function (){var G__23676 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__23676) {
case "else":
return "Malformed event (unknown error).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-type":
return "Malformed event (wrong type).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function event_msg_QMARK_(x){
var and__3749__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__3749__auto__){
var and__3749__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(and__3749__auto____$1){
var map__23683 = x;
var map__23683__$1 = ((cljs.core.seq_QMARK_.call(null,map__23683))?cljs.core.apply.call(null,cljs.core.hash_map,map__23683):map__23683);
var event = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
return (taoensso.encore.chan_QMARK_.call(null,ch_recv)) && (cljs.core.ifn_QMARK_.call(null,send_fn)) && (taoensso.encore.atom_QMARK_.call(null,state)) && (taoensso.sente.event_QMARK_.call(null,event));
} else {
return and__3749__auto____$1;
}
} else {
return and__3749__auto__;
}
});
/**
* Note that cb reply need _not_ be `event` form!
*/
taoensso.sente.cb_success_QMARK_ = (function cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
* pstr->clj
*/
taoensso.sente.unpack_STAR_ = (function unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,taoensso.encore.hcond.call(null,false,"taoensso.sente",215,(new cljs.core.Delay((function (){
return pstr;
}),null)),new cljs.core.Symbol(null,"pstr","pstr",221763868,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)));
}catch (e23685){var t = e23685;
taoensso.encore.debugf.call(null,"Bad package: %s (%s)",pstr,t);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
* clj->prefixed-pstr
*/
taoensso.sente.pack_STAR_ = (function() {
var pack_STAR_ = null;
var pack_STAR___3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});
var pack_STAR___4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});
pack_STAR_ = function(packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
switch(arguments.length){
case 3:
return pack_STAR___3.call(this,packer,_QMARK_packer_meta,clj);
case 4:
return pack_STAR___4.call(this,packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pack_STAR_.cljs$core$IFn$_invoke$arity$3 = pack_STAR___3;
pack_STAR_.cljs$core$IFn$_invoke$arity$4 = pack_STAR___4;
return pack_STAR_;
})()
;
/**
* @param {...*} var_args
*/
taoensso.sente.pack = (function() { 
var pack__delegate = function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.encore.tracef.call(null,"Packing: %s -> %s",args,pstr);

return pstr;
};
var pack = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pack__delegate.call(this,args);};
pack.cljs$lang$maxFixedArity = 0;
pack.cljs$lang$applyTo = (function (arglist__23686){
var args = cljs.core.seq(arglist__23686);
return pack__delegate(args);
});
pack.cljs$core$IFn$_invoke$arity$variadic = pack__delegate;
return pack;
})()
;
/**
* prefixed-pstr->[clj ?cb-uuid]
*/
taoensso.sente.unpack = (function unpack(packer,prefixed_pstr){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return prefixed_pstr;
}),null)),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));


var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__23690 = prefix;
switch (G__23690) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__23689 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__23689,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__23689,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.encore.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj23693 = {};
return obj23693;
})();

taoensso.sente.chsk_init_BANG_ = (function chsk_init_BANG_(chsk){
if((function (){var and__3749__auto__ = chsk;
if(and__3749__auto__){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1;
} else {
return and__3749__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__4400__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3761__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_destroy_BANG_ = (function chsk_destroy_BANG_(chsk){
if((function (){var and__3749__auto__ = chsk;
if(and__3749__auto__){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1;
} else {
return and__3749__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__4400__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3761__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_reconnect_BANG_ = (function chsk_reconnect_BANG_(chsk){
if((function (){var and__3749__auto__ = chsk;
if(and__3749__auto__){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else {
return and__3749__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__4400__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3761__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_send_BANG__STAR_ = (function chsk_send_BANG__STAR_(chsk,ev,opts){
if((function (){var and__3749__auto__ = chsk;
if(and__3749__auto__){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3;
} else {
return and__3749__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__4400__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__3761__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
})().call(null,chsk,ev,opts);
}
});

/**
* Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
*/
taoensso.sente.chsk_send_BANG_ = (function() {
var chsk_send_BANG_ = null;
var chsk_send_BANG___2 = (function (chsk,ev){
return chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});
var chsk_send_BANG___3 = (function (chsk,ev,opts){
taoensso.encore.tracef.call(null,"Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});
var chsk_send_BANG___4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});
chsk_send_BANG_ = function(chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
switch(arguments.length){
case 2:
return chsk_send_BANG___2.call(this,chsk,ev);
case 3:
return chsk_send_BANG___3.call(this,chsk,ev,_QMARK_timeout_ms);
case 4:
return chsk_send_BANG___4.call(this,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = chsk_send_BANG___2;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = chsk_send_BANG___3;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = chsk_send_BANG___4;
return chsk_send_BANG_;
})()
;
taoensso.sente.assert_send_args = (function assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4126__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto__)){
var cb_uuid = temp__4126__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4126__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4126__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__23694,merge_state){
var map__23697 = p__23694;
var map__23697__$1 = ((cljs.core.seq_QMARK_.call(null,map__23697))?cljs.core.apply.call(null,cljs.core.hash_map,map__23697):map__23697);
var chsk = map__23697__$1;
var state_ = cljs.core.get.call(null,map__23697__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var chs = cljs.core.get.call(null,map__23697__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var vec__23698 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__23697,map__23697__$1,chsk,state_,chs){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__3749__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__3749__auto__)){
var and__3749__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__3749__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__3749__auto____$1;
}
} else {
return and__3749__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__23697,map__23697__$1,chsk,state_,chs))
);
var old_state = cljs.core.nth.call(null,vec__23698,(0),null);
var new_state = cljs.core.nth.call(null,vec__23698,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
* Experimental, undocumented. Allows a core.async channel to be provided
* instead of a cb-fn. The channel will receive values of form
* [<event-id>.cb <reply>].
*/
taoensso.sente.cb_chan_as_fn = (function cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return _QMARK_cb;
}),null)),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),taoensso.encore.chan_QMARK_,new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null));


taoensso.sente.assert_event.call(null,ev);

var vec__23700 = ev;
var ev_id = cljs.core.nth.call(null,vec__23700,(0),null);
var _ = cljs.core.nth.call(null,vec__23700,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__23700,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__23700,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(chs,clj){
taoensso.encore.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = taoensso.encore.hcond.call(null,false,"taoensso.sente",739,(new cljs.core.Delay((function (){
return clj;
}),null)),new cljs.core.Symbol(null,"clj","clj",980036099,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));
var seq__23705 = cljs.core.seq.call(null,buffered_evs);
var chunk__23706 = null;
var count__23707 = (0);
var i__23708 = (0);
while(true){
if((i__23708 < count__23707)){
var ev = cljs.core._nth.call(null,chunk__23706,i__23708);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__23709 = seq__23705;
var G__23710 = chunk__23706;
var G__23711 = count__23707;
var G__23712 = (i__23708 + (1));
seq__23705 = G__23709;
chunk__23706 = G__23710;
count__23707 = G__23711;
i__23708 = G__23712;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23705);
if(temp__4126__auto__){
var seq__23705__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23705__$1)){
var c__4543__auto__ = cljs.core.chunk_first.call(null,seq__23705__$1);
var G__23713 = cljs.core.chunk_rest.call(null,seq__23705__$1);
var G__23714 = c__4543__auto__;
var G__23715 = cljs.core.count.call(null,c__4543__auto__);
var G__23716 = (0);
seq__23705 = G__23713;
chunk__23706 = G__23714;
count__23707 = G__23715;
i__23708 = G__23716;
continue;
} else {
var ev = cljs.core.first.call(null,seq__23705__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__23717 = cljs.core.next.call(null,seq__23705__$1);
var G__23718 = null;
var G__23719 = (0);
var G__23720 = (0);
seq__23705 = G__23717;
chunk__23706 = G__23718;
count__23707 = G__23719;
i__23708 = G__23720;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.encore.tracef.call(null,"handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj);

if(handshake_QMARK_){
var vec__23723 = clj;
var _ = cljs.core.nth.call(null,vec__23723,(0),null);
var vec__23724 = cljs.core.nth.call(null,vec__23723,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__23724,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__23724,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__23724,(2),null);
var handshake_ev = vec__23723;
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token))){
taoensso.encore.warnf.call(null,"SECURITY WARNING: no CSRF token available for use by Sente");
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
/**
* @param {...*} var_args
*/
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__23725){
var vec__23727 = p__23725;
var nattempt = cljs.core.nth.call(null,vec__23727,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3761__auto__ = nattempt;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__23725 = null;
if (arguments.length > 1) {
  p__23725 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__23725);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__23728){
var nullary_f = cljs.core.first(arglist__23728);
var p__23725 = cljs.core.rest(arglist__23728);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__23725);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;

/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>11){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4359__auto__,k__4360__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return cljs.core._lookup.call(null,this__4359__auto____$1,k__4360__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4361__auto__,k23730,else__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
var G__23732 = (((k23730 instanceof cljs.core.Keyword))?k23730.fqn:null);
switch (G__23732) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23730,else__4362__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4373__auto__,writer__4374__auto__,opts__4375__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
var pr_pair__4376__auto__ = ((function (this__4373__auto____$1){
return (function (keyval__4377__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4374__auto__,cljs.core.pr_writer,""," ","",opts__4375__auto__,keyval__4377__auto__);
});})(this__4373__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4374__auto__,pr_pair__4376__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4375__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4353__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4363__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4354__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4355__auto__,other__4356__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4368__auto__,k__4369__auto__){
var self__ = this;
var this__4368__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4369__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4368__auto____$1),self__.__meta),k__4369__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4369__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4366__auto__,k__4367__auto__,G__23729){
var self__ = this;
var this__4366__auto____$1 = this;
var pred__23733 = cljs.core.keyword_identical_QMARK_;
var expr__23734 = k__4367__auto__;
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__23734))){
return (new taoensso.sente.ChWebSocket(G__23729,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__23729,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__23729,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__23729,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__23729,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__23729,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__23729,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__23729,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__23729,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__23729,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23733.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__23734))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__23729,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4367__auto__,G__23729),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4371__auto__){
var self__ = this;
var this__4371__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4358__auto__,G__23729){
var self__ = this;
var this__4358__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__23729,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4364__auto__,entry__4365__auto__){
var self__ = this;
var this__4364__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4365__auto__)){
return cljs.core._assoc.call(null,this__4364__auto____$1,cljs.core._nth.call(null,entry__4365__auto__,(0)),cljs.core._nth.call(null,entry__4365__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4364__auto____$1,entry__4365__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__23736){
var self__ = this;
var map__23737 = p__23736;
var map__23737__$1 = ((cljs.core.seq_QMARK_.call(null,map__23737))?cljs.core.apply.call(null,cljs.core.hash_map,map__23737):map__23737);
var opts = map__23737__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__23737__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__23737__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__23737__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4126__auto___23770 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___23770)){
var cb_uuid_23771 = temp__4126__auto___23770;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_23771], null),taoensso.encore.hcond.call(null,false,"taoensso.sente",804,(new cljs.core.Delay(((function (cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
return _QMARK_cb_fn;
});})(cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)));

var temp__4126__auto___23772__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4126__auto___23772__$1)){
var timeout_ms_23773 = temp__4126__auto___23772__$1;
var c__14440__auto___23774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___23774,timeout_ms_23773,temp__4126__auto___23772__$1,cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___23774,timeout_ms_23773,temp__4126__auto___23772__$1,cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (state_23748){
var state_val_23749 = (state_23748[(1)]);
if((state_val_23749 === (5))){
var inst_23746 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23748__$1,inst_23746);
} else {
if((state_val_23749 === (4))){
var state_23748__$1 = state_23748;
var statearr_23750_23775 = state_23748__$1;
(statearr_23750_23775[(2)] = null);

(statearr_23750_23775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (3))){
var inst_23741 = (state_23748[(7)]);
var inst_23743 = inst_23741.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_23748__$1 = state_23748;
var statearr_23751_23776 = state_23748__$1;
(statearr_23751_23776[(2)] = inst_23743);

(statearr_23751_23776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (2))){
var inst_23741 = (state_23748[(7)]);
var inst_23740 = (state_23748[(2)]);
var inst_23741__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_23748__$1 = (function (){var statearr_23752 = state_23748;
(statearr_23752[(7)] = inst_23741__$1);

(statearr_23752[(8)] = inst_23740);

return statearr_23752;
})();
if(cljs.core.truth_(inst_23741__$1)){
var statearr_23753_23777 = state_23748__$1;
(statearr_23753_23777[(1)] = (3));

} else {
var statearr_23754_23778 = state_23748__$1;
(statearr_23754_23778[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (1))){
var inst_23738 = cljs.core.async.timeout.call(null,timeout_ms_23773);
var state_23748__$1 = state_23748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23748__$1,(2),inst_23738);
} else {
return null;
}
}
}
}
}
});})(c__14440__auto___23774,timeout_ms_23773,temp__4126__auto___23772__$1,cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;
return ((function (switch__14425__auto__,c__14440__auto___23774,timeout_ms_23773,temp__4126__auto___23772__$1,cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_23758 = [null,null,null,null,null,null,null,null,null];
(statearr_23758[(0)] = state_machine__14426__auto__);

(statearr_23758[(1)] = (1));

return statearr_23758;
});
var state_machine__14426__auto____1 = (function (state_23748){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_23748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e23759){if((e23759 instanceof Object)){
var ex__14429__auto__ = e23759;
var statearr_23760_23779 = state_23748;
(statearr_23760_23779[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23780 = state_23748;
state_23748 = G__23780;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_23748){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_23748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___23774,timeout_ms_23773,temp__4126__auto___23772__$1,cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
})();
var state__14442__auto__ = (function (){var statearr_23761 = f__14441__auto__.call(null);
(statearr_23761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___23774);

return statearr_23761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___23774,timeout_ms_23773,temp__4126__auto___23772__$1,cb_uuid_23771,temp__4126__auto___23770,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e23762){if((e23762 instanceof Error)){
var e = e23762;
taoensso.encore.errorf.call(null,"Chsk send error: %s",e);

var temp__4126__auto___23781 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___23781)){
var cb_uuid_23782 = temp__4126__auto___23781;
var cb_fn_STAR__23783 = (function (){var or__3761__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_23782);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.hcond.call(null,false,"taoensso.sente",818,(new cljs.core.Delay(((function (or__3761__auto__,cb_uuid_23782,temp__4126__auto___23781,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
return _QMARK_cb_fn;
});})(or__3761__auto__,cb_uuid_23782,temp__4126__auto___23781,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23737,map__23737__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
}
})();
cb_fn_STAR__23783.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e23762;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4126__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4126__auto__)){
var s = temp__4126__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4126__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4126__auto__)){
var s = temp__4126__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4126__auto__ = (function (){var or__3761__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var WebSocket = temp__4126__auto__;
((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4126__auto__,chsk__$1))
;
var temp__4124__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null))));
}catch (e23766){if((e23766 instanceof Error)){
var e = e23766;
taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e23766;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var socket = temp__4124__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__23767 = socket;
(G__23767["onerror"] = ((function (G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__23767["onmessage"] = ((function (G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__23768 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__23768,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__23768,(1),null);
var or__3761__auto__ = (function (){var and__3749__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__3749__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__3749__auto__;
}
})();
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
var temp__4124__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4124__auto____$1)){
var cb_uuid = temp__4124__auto____$1;
var temp__4124__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4124__auto____$2)){
var cb_fn = temp__4124__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__23767["onopen"] = ((function (G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__23767["onclose"] = ((function (G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__23767,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

return G__23767;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4126__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4393__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function __GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer));
});

taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__23731){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__23731),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__23731),null,cljs.core.dissoc.call(null,G__23731,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544))));
});


/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} timeout_ms
* @param {*} ajax_opts
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,__meta,__extmap){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>8){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4359__auto__,k__4360__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return cljs.core._lookup.call(null,this__4359__auto____$1,k__4360__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4361__auto__,k23785,else__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
var G__23787 = (((k23785 instanceof cljs.core.Keyword))?k23785.fqn:null);
switch (G__23787) {
case "packer":
return self__.packer;

break;
case "state_":
return self__.state_;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
case "client-id":
return self__.client_id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23785,else__4362__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4373__auto__,writer__4374__auto__,opts__4375__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
var pr_pair__4376__auto__ = ((function (this__4373__auto____$1){
return (function (keyval__4377__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4374__auto__,cljs.core.pr_writer,""," ","",opts__4375__auto__,keyval__4377__auto__);
});})(this__4373__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4374__auto__,pr_pair__4376__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4375__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4353__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4363__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4354__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4355__auto__,other__4356__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4368__auto__,k__4369__auto__){
var self__ = this;
var this__4368__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4369__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4368__auto____$1),self__.__meta),k__4369__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4369__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4366__auto__,k__4367__auto__,G__23784){
var self__ = this;
var this__4366__auto____$1 = this;
var pred__23788 = cljs.core.keyword_identical_QMARK_;
var expr__23789 = k__4367__auto__;
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(G__23784,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__23784,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__23784,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__23784,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__23784,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,G__23784,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__23784,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23788.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__23789))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__23784,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4367__auto__,G__23784),null));
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4371__auto__){
var self__ = this;
var this__4371__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4358__auto__,G__23784){
var self__ = this;
var this__4358__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__23784,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4364__auto__,entry__4365__auto__){
var self__ = this;
var this__4364__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4365__auto__)){
return cljs.core._assoc.call(null,this__4364__auto____$1,cljs.core._nth.call(null,entry__4365__auto__,(0)),cljs.core._nth.call(null,entry__4365__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4364__auto____$1,entry__4365__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__23791){
var self__ = this;
var map__23792 = p__23791;
var map__23792__$1 = ((cljs.core.seq_QMARK_.call(null,map__23792))?cljs.core.apply.call(null,cljs.core.hash_map,map__23792):map__23792);
var opts = map__23792__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.sente.ajax_call.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null);
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__23792,map__23792__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function ajax_cb(p__23793){
var map__23796 = p__23793;
var map__23796__$1 = ((cljs.core.seq_QMARK_.call(null,map__23796))?cljs.core.apply.call(null,cljs.core.hash_map,map__23796):map__23796);
var _QMARK_content = cljs.core.get.call(null,map__23796__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__23796__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__23797 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__23797,(0),null);
var _ = cljs.core.nth.call(null,vec__23797,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__23792,map__23792__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4126__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4126__auto__)){
var x = temp__4126__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4126__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4126__auto__)){
var x = temp__4126__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function async_poll_for_update_BANG_(nattempt){
taoensso.encore.tracef.call(null,"async-poll-for-update!");

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_call.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_BANG_,chsk__$1){
return (function ajax_cb(p__23803){
var map__23806 = p__23803;
var map__23806__$1 = ((cljs.core.seq_QMARK_.call(null,map__23806))?cljs.core.apply.call(null,cljs.core.hash_map,map__23806):map__23806);
var _QMARK_content = cljs.core.get.call(null,map__23806__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__23806__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__23807 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__23807,(0),null);
var _ = cljs.core.nth.call(null,vec__23807,(1),null);
var or__3761__auto___23809 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__3761__auto___23809)){
} else {
var buffered_evs_23810 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_23810);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4393__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function __GT_ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer));
});

taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__23786){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__23786),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23786),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__23786),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__23786),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__23786),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__23786),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__23786),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__23786),null,cljs.core.dissoc.call(null,G__23786,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544))));
});

/**
* (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
* 
* * path       - As provided to client-side `make-channel-socket!` fn
* (usu. "/chsk").
* * websocket? - True for WebSocket connections, false for Ajax (long-polling)
* connections.
* * window-location - Map with keys:
* :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
* :protocol ; "http:" ; Note the :
* :hostname ; "example.org"
* :host     ; "example.org:80"
* :pathname ; "/foo/bar"
* :search   ; "?q=baz"
* :hash     ; "#bang"
* 
* Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
* routes should be configured accordingly.
*/
taoensso.sente.default_chsk_url_fn = (function default_chsk_url_fn(path,p__23811,websocket_QMARK_){
var map__23813 = p__23811;
var map__23813__$1 = ((cljs.core.seq_QMARK_.call(null,map__23813))?cljs.core.apply.call(null,cljs.core.hash_map,map__23813):map__23813);
var window_location = map__23813__$1;
var pathname = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var host = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var protocol = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
return [cljs.core.str(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__3761__auto__ = path;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return pathname;
}
})())].join('');
});
/**
* Returns a map with keys:
* :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
* ; May `put!` (inject) arbitrary `event`s to this channel.
* :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
* :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
* :chsk    ; IChSocket implementer. You can usu. ignore this.
* 
* Common options:
* :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
* :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
* ; number of milliseconds
* :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''
* :chsk-url-fn  ; Please see `default-chsk-url-fn` for details
* :packer       ; :edn (default), or an IPacker implementation (experimental)
* :ajax-opts    ; Base opts map provided to `ajax-call`
* @param {...*} var_args
*/
taoensso.sente.make_channel_socket_BANG_ = (function() { 
var make_channel_socket_BANG___delegate = function (path,p__23814){
var vec__23819 = p__23814;
var map__23820 = cljs.core.nth.call(null,vec__23819,(0),null);
var map__23820__$1 = ((cljs.core.seq_QMARK_.call(null,map__23820))?cljs.core.apply.call(null,cljs.core.hash_map,map__23820):map__23820);
var opts = map__23820__$1;
var ajax_opts = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var client_id = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__3761__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var chsk_url_fn = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var lp_timeout_ms = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var ws_kalive_ms = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var recv_buf_or_n = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var type = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__23819,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (){
return type;
});})(vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (){
return client_id;
});})(vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),taoensso.encore.nblank_str_QMARK_,new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.encore.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.encore.warnf.call(null,":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var window_location = taoensso.encore.get_window_location.call(null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__3761__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__3761__auto__){
return or__3761__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs))], null));
var chsk = (function (){var or__3761__auto__ = (function (){var and__3749__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__3749__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,path,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__3749__auto__;
}
})();
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
var and__3749__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__3749__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,path,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),lp_timeout_ms,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))], null)));
} else {
return and__3749__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function ev__GT_ev_msg(ev){
var vec__23822 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__23822,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__23822,(1),null);
var ev__$1 = vec__23822;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__23819,map__23820,map__23820__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
};
var make_channel_socket_BANG_ = function (path,var_args){
var p__23814 = null;
if (arguments.length > 1) {
  p__23814 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_channel_socket_BANG___delegate.call(this,path,p__23814);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__23823){
var path = cljs.core.first(arglist__23823);
var p__23814 = cljs.core.rest(arglist__23823);
return make_channel_socket_BANG___delegate(path,p__23814);
});
make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = make_channel_socket_BANG___delegate;
return make_channel_socket_BANG_;
})()
;
/**
* Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
* `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
* write their own loop against `ch-recv`.
* @param {...*} var_args
*/
taoensso.sente.start_chsk_router_BANG_ = (function() { 
var start_chsk_router_BANG___delegate = function (ch_recv,event_msg_handler,p__23824){
var vec__23926 = p__23824;
var map__23927 = cljs.core.nth.call(null,vec__23926,(0),null);
var map__23927__$1 = ((cljs.core.seq_QMARK_.call(null,map__23927))?cljs.core.apply.call(null,cljs.core.hash_map,map__23927):map__23927);
var opts = map__23927__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__23927__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__14440__auto___24027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___24027,ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___24027,ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_){
return (function (state_23986){
var state_val_23987 = (state_23986[(1)]);
if((state_val_23987 === (7))){
var inst_23939 = (state_23986[(2)]);
var inst_23940 = cljs.core.nth.call(null,inst_23939,(0),null);
var inst_23941 = cljs.core.nth.call(null,inst_23939,(1),null);
var inst_23942 = taoensso.encore.kw_identical_QMARK_.call(null,inst_23941,ch_ctrl);
var state_23986__$1 = (function (){var statearr_23988 = state_23986;
(statearr_23988[(7)] = inst_23940);

return statearr_23988;
})();
if(cljs.core.truth_(inst_23942)){
var statearr_23989_24028 = state_23986__$1;
(statearr_23989_24028[(1)] = (8));

} else {
var statearr_23990_24029 = state_23986__$1;
(statearr_23990_24029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (20))){
var inst_23952 = (state_23986[(8)]);
var inst_23966 = taoensso.encore.errorf.call(null,"Bad event: %s",inst_23952);
var state_23986__$1 = state_23986;
var statearr_23991_24030 = state_23986__$1;
(statearr_23991_24030[(2)] = inst_23966);

(statearr_23991_24030[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (1))){
var state_23986__$1 = state_23986;
var statearr_23992_24031 = state_23986__$1;
(statearr_23992_24031[(2)] = null);

(statearr_23992_24031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (24))){
var state_23986__$1 = state_23986;
var statearr_23993_24032 = state_23986__$1;
(statearr_23993_24032[(2)] = null);

(statearr_23993_24032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (4))){
var inst_23976 = (state_23986[(2)]);
var inst_23977 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_23976);
var state_23986__$1 = state_23986;
if(cljs.core.truth_(inst_23977)){
var statearr_23994_24033 = state_23986__$1;
(statearr_23994_24033[(1)] = (23));

} else {
var statearr_23995_24034 = state_23986__$1;
(statearr_23995_24034[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (15))){
var inst_23952 = (state_23986[(8)]);
var inst_23953 = (state_23986[(2)]);
var inst_23954 = taoensso.encore.errorf.call(null,"Chsk router handling error (%s): %s",inst_23952,inst_23953);
var state_23986__$1 = state_23986;
var statearr_23996_24035 = state_23986__$1;
(statearr_23996_24035[(2)] = inst_23954);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (21))){
var inst_23951 = (state_23986[(9)]);
var inst_23968 = event_msg_handler.call(null,inst_23951);
var state_23986__$1 = state_23986;
var statearr_23997_24036 = state_23986__$1;
(statearr_23997_24036[(2)] = inst_23968);

(statearr_23997_24036[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (13))){
var inst_23951 = (state_23986[(9)]);
var inst_23951__$1 = (state_23986[(2)]);
var inst_23952 = cljs.core.get.call(null,inst_23951__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_23986__$1 = (function (){var statearr_23998 = state_23986;
(statearr_23998[(8)] = inst_23952);

(statearr_23998[(9)] = inst_23951__$1);

return statearr_23998;
})();
var statearr_23999_24037 = state_23986__$1;
(statearr_23999_24037[(2)] = null);

(statearr_23999_24037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (22))){
var inst_23970 = (state_23986[(2)]);
var state_23986__$1 = (function (){var statearr_24000 = state_23986;
(statearr_24000[(10)] = inst_23970);

return statearr_24000;
})();
var statearr_24001_24038 = state_23986__$1;
(statearr_24001_24038[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23986,(5),Error,null,(4));
var inst_23935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23936 = [ch_recv,ch_ctrl];
var inst_23937 = (new cljs.core.PersistentVector(null,2,(5),inst_23935,inst_23936,null));
var state_23986__$1 = state_23986;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23986__$1,(7),inst_23937);
} else {
if((state_val_23987 === (25))){
var inst_23982 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24002_24039 = state_23986__$1;
(statearr_24002_24039[(2)] = inst_23982);

(statearr_24002_24039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (17))){
var inst_23952 = (state_23986[(8)]);
var inst_23959 = taoensso.encore.tracef.call(null,"Pre-handler event: %s",inst_23952);
var state_23986__$1 = state_23986;
var statearr_24003_24040 = state_23986__$1;
(statearr_24003_24040[(2)] = inst_23959);

(statearr_24003_24040[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (3))){
var inst_23984 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23986__$1,inst_23984);
} else {
if((state_val_23987 === (12))){
var inst_23940 = (state_23986[(7)]);
var state_23986__$1 = state_23986;
var statearr_24004_24041 = state_23986__$1;
(statearr_24004_24041[(2)] = inst_23940);

(statearr_24004_24041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (2))){
var state_23986__$1 = state_23986;
var statearr_24005_24042 = state_23986__$1;
(statearr_24005_24042[(2)] = null);

(statearr_24005_24042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (23))){
var state_23986__$1 = state_23986;
var statearr_24006_24043 = state_23986__$1;
(statearr_24006_24043[(2)] = null);

(statearr_24006_24043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (19))){
var inst_23951 = (state_23986[(9)]);
var inst_23962 = (state_23986[(2)]);
var inst_23963 = taoensso.sente.event_msg_QMARK_.call(null,inst_23951);
var inst_23964 = !(inst_23963);
var state_23986__$1 = (function (){var statearr_24007 = state_23986;
(statearr_24007[(11)] = inst_23962);

return statearr_24007;
})();
if(inst_23964){
var statearr_24008_24044 = state_23986__$1;
(statearr_24008_24044[(1)] = (20));

} else {
var statearr_24009_24045 = state_23986__$1;
(statearr_24009_24045[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (11))){
var inst_23940 = (state_23986[(7)]);
var inst_23948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23940);
var state_23986__$1 = state_23986;
var statearr_24010_24046 = state_23986__$1;
(statearr_24010_24046[(2)] = inst_23948);

(statearr_24010_24046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (9))){
var inst_23940 = (state_23986[(7)]);
var inst_23946 = cljs.core.seq_QMARK_.call(null,inst_23940);
var state_23986__$1 = state_23986;
if(inst_23946){
var statearr_24011_24047 = state_23986__$1;
(statearr_24011_24047[(1)] = (11));

} else {
var statearr_24012_24048 = state_23986__$1;
(statearr_24012_24048[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (5))){
var inst_23929 = (state_23986[(2)]);
var inst_23930 = taoensso.encore.errorf.call(null,"Chsk router channel error (%s)!",inst_23929);
var state_23986__$1 = state_23986;
var statearr_24013_24049 = state_23986__$1;
(statearr_24013_24049[(2)] = inst_23930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (14))){
var inst_23972 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24014_24050 = state_23986__$1;
(statearr_24014_24050[(2)] = inst_23972);

(statearr_24014_24050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23986,(15),Error,null,(14));
var state_23986__$1 = state_23986;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_24015_24051 = state_23986__$1;
(statearr_24015_24051[(1)] = (17));

} else {
var statearr_24016_24052 = state_23986__$1;
(statearr_24016_24052[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (10))){
var inst_23974 = (state_23986[(2)]);
var state_23986__$1 = state_23986;
var statearr_24017_24053 = state_23986__$1;
(statearr_24017_24053[(2)] = inst_23974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (18))){
var state_23986__$1 = state_23986;
var statearr_24018_24054 = state_23986__$1;
(statearr_24018_24054[(2)] = null);

(statearr_24018_24054[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23987 === (8))){
var state_23986__$1 = state_23986;
var statearr_24019_24055 = state_23986__$1;
(statearr_24019_24055[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_24019_24055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14440__auto___24027,ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__14425__auto__,c__14440__auto___24027,ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_24023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24023[(0)] = state_machine__14426__auto__);

(statearr_24023[(1)] = (1));

return statearr_24023;
});
var state_machine__14426__auto____1 = (function (state_23986){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_23986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e24024){if((e24024 instanceof Object)){
var ex__14429__auto__ = e24024;
var statearr_24025_24056 = state_23986;
(statearr_24025_24056[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24057 = state_23986;
state_23986 = G__24057;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_23986){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_23986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___24027,ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_))
})();
var state__14442__auto__ = (function (){var statearr_24026 = f__14441__auto__.call(null);
(statearr_24026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___24027);

return statearr_24026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___24027,ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_){
return (function stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__23926,map__23927,map__23927__$1,opts,trace_evs_QMARK_))
};
var start_chsk_router_BANG_ = function (ch_recv,event_msg_handler,var_args){
var p__23824 = null;
if (arguments.length > 2) {
  p__23824 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return start_chsk_router_BANG___delegate.call(this,ch_recv,event_msg_handler,p__23824);};
start_chsk_router_BANG_.cljs$lang$maxFixedArity = 2;
start_chsk_router_BANG_.cljs$lang$applyTo = (function (arglist__24058){
var ch_recv = cljs.core.first(arglist__24058);
arglist__24058 = cljs.core.next(arglist__24058);
var event_msg_handler = cljs.core.first(arglist__24058);
var p__23824 = cljs.core.rest(arglist__24058);
return start_chsk_router_BANG___delegate(ch_recv,event_msg_handler,p__23824);
});
start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = start_chsk_router_BANG___delegate;
return start_chsk_router_BANG_;
})()
;
/**
* DEPRECATED: Please use `start-chsk-router!` instead.
*/
taoensso.sente.start_chsk_router_loop_BANG_ = (function start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
