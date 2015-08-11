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
var vec__23865 = x;
var ev_id = cljs.core.nth.call(null,vec__23865,(0),null);
var _ = cljs.core.nth.call(null,vec__23865,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__23867 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__23867) {
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
var map__23874 = x;
var map__23874__$1 = ((cljs.core.seq_QMARK_.call(null,map__23874))?cljs.core.apply.call(null,cljs.core.hash_map,map__23874):map__23874);
var event = cljs.core.get.call(null,map__23874__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state = cljs.core.get.call(null,map__23874__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn = cljs.core.get.call(null,map__23874__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.call(null,map__23874__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
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
}catch (e23876){var t = e23876;
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
pack.cljs$lang$applyTo = (function (arglist__23877){
var args = cljs.core.seq(arglist__23877);
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
var wrapped_QMARK_ = (function (){var G__23881 = prefix;
switch (G__23881) {
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
var vec__23880 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__23880,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__23880,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.encore.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj23884 = {};
return obj23884;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__23885,merge_state){
var map__23888 = p__23885;
var map__23888__$1 = ((cljs.core.seq_QMARK_.call(null,map__23888))?cljs.core.apply.call(null,cljs.core.hash_map,map__23888):map__23888);
var chsk = map__23888__$1;
var state_ = cljs.core.get.call(null,map__23888__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var chs = cljs.core.get.call(null,map__23888__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var vec__23889 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__23888,map__23888__$1,chsk,state_,chs){
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
});})(map__23888,map__23888__$1,chsk,state_,chs))
);
var old_state = cljs.core.nth.call(null,vec__23889,(0),null);
var new_state = cljs.core.nth.call(null,vec__23889,(1),null);
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

var vec__23891 = ev;
var ev_id = cljs.core.nth.call(null,vec__23891,(0),null);
var _ = cljs.core.nth.call(null,vec__23891,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__23891,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__23891,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(chs,clj){
taoensso.encore.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = taoensso.encore.hcond.call(null,false,"taoensso.sente",739,(new cljs.core.Delay((function (){
return clj;
}),null)),new cljs.core.Symbol(null,"clj","clj",980036099,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));
var seq__23896 = cljs.core.seq.call(null,buffered_evs);
var chunk__23897 = null;
var count__23898 = (0);
var i__23899 = (0);
while(true){
if((i__23899 < count__23898)){
var ev = cljs.core._nth.call(null,chunk__23897,i__23899);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__23900 = seq__23896;
var G__23901 = chunk__23897;
var G__23902 = count__23898;
var G__23903 = (i__23899 + (1));
seq__23896 = G__23900;
chunk__23897 = G__23901;
count__23898 = G__23902;
i__23899 = G__23903;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23896);
if(temp__4126__auto__){
var seq__23896__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23896__$1)){
var c__4543__auto__ = cljs.core.chunk_first.call(null,seq__23896__$1);
var G__23904 = cljs.core.chunk_rest.call(null,seq__23896__$1);
var G__23905 = c__4543__auto__;
var G__23906 = cljs.core.count.call(null,c__4543__auto__);
var G__23907 = (0);
seq__23896 = G__23904;
chunk__23897 = G__23905;
count__23898 = G__23906;
i__23899 = G__23907;
continue;
} else {
var ev = cljs.core.first.call(null,seq__23896__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__23908 = cljs.core.next.call(null,seq__23896__$1);
var G__23909 = null;
var G__23910 = (0);
var G__23911 = (0);
seq__23896 = G__23908;
chunk__23897 = G__23909;
count__23898 = G__23910;
i__23899 = G__23911;
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
var vec__23914 = clj;
var _ = cljs.core.nth.call(null,vec__23914,(0),null);
var vec__23915 = cljs.core.nth.call(null,vec__23914,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__23915,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__23915,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__23915,(2),null);
var handshake_ev = vec__23914;
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
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__23916){
var vec__23918 = p__23916;
var nattempt = cljs.core.nth.call(null,vec__23918,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3761__auto__ = nattempt;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__23916 = null;
if (arguments.length > 1) {
  p__23916 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__23916);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__23919){
var nullary_f = cljs.core.first(arglist__23919);
var p__23916 = cljs.core.rest(arglist__23919);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__23916);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4361__auto__,k23921,else__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
var G__23923 = (((k23921 instanceof cljs.core.Keyword))?k23921.fqn:null);
switch (G__23923) {
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
return cljs.core.get.call(null,self__.__extmap,k23921,else__4362__auto__);

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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4366__auto__,k__4367__auto__,G__23920){
var self__ = this;
var this__4366__auto____$1 = this;
var pred__23924 = cljs.core.keyword_identical_QMARK_;
var expr__23925 = k__4367__auto__;
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__23925))){
return (new taoensso.sente.ChWebSocket(G__23920,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__23920,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__23920,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__23920,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__23920,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__23920,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__23920,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__23920,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__23920,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__23920,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23924.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__23925))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__23920,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4367__auto__,G__23920),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4358__auto__,G__23920){
var self__ = this;
var this__4358__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__23920,self__.__extmap,self__.__hash));
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

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__23927){
var self__ = this;
var map__23928 = p__23927;
var map__23928__$1 = ((cljs.core.seq_QMARK_.call(null,map__23928))?cljs.core.apply.call(null,cljs.core.hash_map,map__23928):map__23928);
var opts = map__23928__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__23928__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__23928__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__23928__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var temp__4126__auto___23961 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___23961)){
var cb_uuid_23962 = temp__4126__auto___23961;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_23962], null),taoensso.encore.hcond.call(null,false,"taoensso.sente",804,(new cljs.core.Delay(((function (cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
return _QMARK_cb_fn;
});})(cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)));

var temp__4126__auto___23963__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4126__auto___23963__$1)){
var timeout_ms_23964 = temp__4126__auto___23963__$1;
var c__6771__auto___23965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___23965,timeout_ms_23964,temp__4126__auto___23963__$1,cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___23965,timeout_ms_23964,temp__4126__auto___23963__$1,cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (state_23939){
var state_val_23940 = (state_23939[(1)]);
if((state_val_23940 === (5))){
var inst_23937 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else {
if((state_val_23940 === (4))){
var state_23939__$1 = state_23939;
var statearr_23941_23966 = state_23939__$1;
(statearr_23941_23966[(2)] = null);

(statearr_23941_23966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (3))){
var inst_23932 = (state_23939[(7)]);
var inst_23934 = inst_23932.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_23939__$1 = state_23939;
var statearr_23942_23967 = state_23939__$1;
(statearr_23942_23967[(2)] = inst_23934);

(statearr_23942_23967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (2))){
var inst_23932 = (state_23939[(7)]);
var inst_23931 = (state_23939[(2)]);
var inst_23932__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_23939__$1 = (function (){var statearr_23943 = state_23939;
(statearr_23943[(8)] = inst_23931);

(statearr_23943[(7)] = inst_23932__$1);

return statearr_23943;
})();
if(cljs.core.truth_(inst_23932__$1)){
var statearr_23944_23968 = state_23939__$1;
(statearr_23944_23968[(1)] = (3));

} else {
var statearr_23945_23969 = state_23939__$1;
(statearr_23945_23969[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (1))){
var inst_23929 = cljs.core.async.timeout.call(null,timeout_ms_23964);
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23939__$1,(2),inst_23929);
} else {
return null;
}
}
}
}
}
});})(c__6771__auto___23965,timeout_ms_23964,temp__4126__auto___23963__$1,cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;
return ((function (switch__6715__auto__,c__6771__auto___23965,timeout_ms_23964,temp__4126__auto___23963__$1,cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_23949 = [null,null,null,null,null,null,null,null,null];
(statearr_23949[(0)] = state_machine__6716__auto__);

(statearr_23949[(1)] = (1));

return statearr_23949;
});
var state_machine__6716__auto____1 = (function (state_23939){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_23939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e23950){if((e23950 instanceof Object)){
var ex__6719__auto__ = e23950;
var statearr_23951_23970 = state_23939;
(statearr_23951_23970[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23971 = state_23939;
state_23939 = G__23971;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___23965,timeout_ms_23964,temp__4126__auto___23963__$1,cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
})();
var state__6773__auto__ = (function (){var statearr_23952 = f__6772__auto__.call(null);
(statearr_23952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___23965);

return statearr_23952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___23965,timeout_ms_23964,temp__4126__auto___23963__$1,cb_uuid_23962,temp__4126__auto___23961,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e23953){if((e23953 instanceof Error)){
var e = e23953;
taoensso.encore.errorf.call(null,"Chsk send error: %s",e);

var temp__4126__auto___23972 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___23972)){
var cb_uuid_23973 = temp__4126__auto___23972;
var cb_fn_STAR__23974 = (function (){var or__3761__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_23973);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.hcond.call(null,false,"taoensso.sente",818,(new cljs.core.Delay(((function (or__3761__auto__,cb_uuid_23973,temp__4126__auto___23972,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
return _QMARK_cb_fn;
});})(or__3761__auto__,cb_uuid_23973,temp__4126__auto___23972,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__23928,map__23928__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
}
})();
cb_fn_STAR__23974.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e23953;

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
}catch (e23957){if((e23957 instanceof Error)){
var e = e23957;
taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e23957;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var socket = temp__4124__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__23958 = socket;
(G__23958["onerror"] = ((function (G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__23958["onmessage"] = ((function (G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__23959 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__23959,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__23959,(1),null);
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
});})(G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__23958["onopen"] = ((function (G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__23958["onclose"] = ((function (G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__23958,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

return G__23958;
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

taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__23922){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__23922),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__23922),null,cljs.core.dissoc.call(null,G__23922,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544))));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4361__auto__,k23976,else__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
var G__23978 = (((k23976 instanceof cljs.core.Keyword))?k23976.fqn:null);
switch (G__23978) {
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
return cljs.core.get.call(null,self__.__extmap,k23976,else__4362__auto__);

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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4366__auto__,k__4367__auto__,G__23975){
var self__ = this;
var this__4366__auto____$1 = this;
var pred__23979 = cljs.core.keyword_identical_QMARK_;
var expr__23980 = k__4367__auto__;
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(G__23975,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__23975,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__23975,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__23975,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__23975,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,G__23975,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__23975,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23979.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__23980))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__23975,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4367__auto__,G__23975),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4358__auto__,G__23975){
var self__ = this;
var this__4358__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__23975,self__.__extmap,self__.__hash));
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

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__23982){
var self__ = this;
var map__23983 = p__23982;
var map__23983__$1 = ((cljs.core.seq_QMARK_.call(null,map__23983))?cljs.core.apply.call(null,cljs.core.hash_map,map__23983):map__23983);
var opts = map__23983__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__23983__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _QMARK_timeout_ms = cljs.core.get.call(null,map__23983__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__23983__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__23983,map__23983__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function ajax_cb(p__23984){
var map__23987 = p__23984;
var map__23987__$1 = ((cljs.core.seq_QMARK_.call(null,map__23987))?cljs.core.apply.call(null,cljs.core.hash_map,map__23987):map__23987);
var _QMARK_content = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
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
var vec__23988 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__23988,(0),null);
var _ = cljs.core.nth.call(null,vec__23988,(1),null);
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
});})(_QMARK_cb_fn,chsk__$1,map__23983,map__23983__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
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
return (function ajax_cb(p__23994){
var map__23997 = p__23994;
var map__23997__$1 = ((cljs.core.seq_QMARK_.call(null,map__23997))?cljs.core.apply.call(null,cljs.core.hash_map,map__23997):map__23997);
var _QMARK_content = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
var _QMARK_error = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
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
var vec__23998 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__23998,(0),null);
var _ = cljs.core.nth.call(null,vec__23998,(1),null);
var or__3761__auto___24000 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__3761__auto___24000)){
} else {
var buffered_evs_24001 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_24001);

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

taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__23977){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__23977),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__23977),null,cljs.core.dissoc.call(null,G__23977,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544))));
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
taoensso.sente.default_chsk_url_fn = (function default_chsk_url_fn(path,p__24002,websocket_QMARK_){
var map__24004 = p__24002;
var map__24004__$1 = ((cljs.core.seq_QMARK_.call(null,map__24004))?cljs.core.apply.call(null,cljs.core.hash_map,map__24004):map__24004);
var window_location = map__24004__$1;
var pathname = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var host = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var protocol = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
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
var make_channel_socket_BANG___delegate = function (path,p__24005){
var vec__24010 = p__24005;
var map__24011 = cljs.core.nth.call(null,vec__24010,(0),null);
var map__24011__$1 = ((cljs.core.seq_QMARK_.call(null,map__24011))?cljs.core.apply.call(null,cljs.core.hash_map,map__24011):map__24011);
var opts = map__24011__$1;
var ajax_opts = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var client_id = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__3761__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var chsk_url_fn = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var lp_timeout_ms = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var ws_kalive_ms = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var recv_buf_or_n = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var type = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__24010,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (){
return type;
});})(vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (){
return client_id;
});})(vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
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
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
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
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
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
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function ev__GT_ev_msg(ev){
var vec__24013 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__24013,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__24013,(1),null);
var ev__$1 = vec__24013;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__24010,map__24011,map__24011__$1,opts,ajax_opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
};
var make_channel_socket_BANG_ = function (path,var_args){
var p__24005 = null;
if (arguments.length > 1) {
  p__24005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_channel_socket_BANG___delegate.call(this,path,p__24005);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__24014){
var path = cljs.core.first(arglist__24014);
var p__24005 = cljs.core.rest(arglist__24014);
return make_channel_socket_BANG___delegate(path,p__24005);
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
var start_chsk_router_BANG___delegate = function (ch_recv,event_msg_handler,p__24015){
var vec__24117 = p__24015;
var map__24118 = cljs.core.nth.call(null,vec__24117,(0),null);
var map__24118__$1 = ((cljs.core.seq_QMARK_.call(null,map__24118))?cljs.core.apply.call(null,cljs.core.hash_map,map__24118):map__24118);
var opts = map__24118__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__24118__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__6771__auto___24218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___24218,ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___24218,ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_){
return (function (state_24177){
var state_val_24178 = (state_24177[(1)]);
if((state_val_24178 === (7))){
var inst_24130 = (state_24177[(2)]);
var inst_24131 = cljs.core.nth.call(null,inst_24130,(0),null);
var inst_24132 = cljs.core.nth.call(null,inst_24130,(1),null);
var inst_24133 = taoensso.encore.kw_identical_QMARK_.call(null,inst_24132,ch_ctrl);
var state_24177__$1 = (function (){var statearr_24179 = state_24177;
(statearr_24179[(7)] = inst_24131);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24133)){
var statearr_24180_24219 = state_24177__$1;
(statearr_24180_24219[(1)] = (8));

} else {
var statearr_24181_24220 = state_24177__$1;
(statearr_24181_24220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (20))){
var inst_24143 = (state_24177[(8)]);
var inst_24157 = taoensso.encore.errorf.call(null,"Bad event: %s",inst_24143);
var state_24177__$1 = state_24177;
var statearr_24182_24221 = state_24177__$1;
(statearr_24182_24221[(2)] = inst_24157);

(statearr_24182_24221[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (1))){
var state_24177__$1 = state_24177;
var statearr_24183_24222 = state_24177__$1;
(statearr_24183_24222[(2)] = null);

(statearr_24183_24222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (24))){
var state_24177__$1 = state_24177;
var statearr_24184_24223 = state_24177__$1;
(statearr_24184_24223[(2)] = null);

(statearr_24184_24223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (4))){
var inst_24167 = (state_24177[(2)]);
var inst_24168 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_24167);
var state_24177__$1 = state_24177;
if(cljs.core.truth_(inst_24168)){
var statearr_24185_24224 = state_24177__$1;
(statearr_24185_24224[(1)] = (23));

} else {
var statearr_24186_24225 = state_24177__$1;
(statearr_24186_24225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (15))){
var inst_24143 = (state_24177[(8)]);
var inst_24144 = (state_24177[(2)]);
var inst_24145 = taoensso.encore.errorf.call(null,"Chsk router handling error (%s): %s",inst_24143,inst_24144);
var state_24177__$1 = state_24177;
var statearr_24187_24226 = state_24177__$1;
(statearr_24187_24226[(2)] = inst_24145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (21))){
var inst_24142 = (state_24177[(9)]);
var inst_24159 = event_msg_handler.call(null,inst_24142);
var state_24177__$1 = state_24177;
var statearr_24188_24227 = state_24177__$1;
(statearr_24188_24227[(2)] = inst_24159);

(statearr_24188_24227[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (13))){
var inst_24142 = (state_24177[(9)]);
var inst_24142__$1 = (state_24177[(2)]);
var inst_24143 = cljs.core.get.call(null,inst_24142__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_24177__$1 = (function (){var statearr_24189 = state_24177;
(statearr_24189[(9)] = inst_24142__$1);

(statearr_24189[(8)] = inst_24143);

return statearr_24189;
})();
var statearr_24190_24228 = state_24177__$1;
(statearr_24190_24228[(2)] = null);

(statearr_24190_24228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (22))){
var inst_24161 = (state_24177[(2)]);
var state_24177__$1 = (function (){var statearr_24191 = state_24177;
(statearr_24191[(10)] = inst_24161);

return statearr_24191;
})();
var statearr_24192_24229 = state_24177__$1;
(statearr_24192_24229[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24177,(5),Error,null,(4));
var inst_24126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24127 = [ch_recv,ch_ctrl];
var inst_24128 = (new cljs.core.PersistentVector(null,2,(5),inst_24126,inst_24127,null));
var state_24177__$1 = state_24177;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24177__$1,(7),inst_24128);
} else {
if((state_val_24178 === (25))){
var inst_24173 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24193_24230 = state_24177__$1;
(statearr_24193_24230[(2)] = inst_24173);

(statearr_24193_24230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (17))){
var inst_24143 = (state_24177[(8)]);
var inst_24150 = taoensso.encore.tracef.call(null,"Pre-handler event: %s",inst_24143);
var state_24177__$1 = state_24177;
var statearr_24194_24231 = state_24177__$1;
(statearr_24194_24231[(2)] = inst_24150);

(statearr_24194_24231[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (3))){
var inst_24175 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24177__$1,inst_24175);
} else {
if((state_val_24178 === (12))){
var inst_24131 = (state_24177[(7)]);
var state_24177__$1 = state_24177;
var statearr_24195_24232 = state_24177__$1;
(statearr_24195_24232[(2)] = inst_24131);

(statearr_24195_24232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (2))){
var state_24177__$1 = state_24177;
var statearr_24196_24233 = state_24177__$1;
(statearr_24196_24233[(2)] = null);

(statearr_24196_24233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (23))){
var state_24177__$1 = state_24177;
var statearr_24197_24234 = state_24177__$1;
(statearr_24197_24234[(2)] = null);

(statearr_24197_24234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (19))){
var inst_24142 = (state_24177[(9)]);
var inst_24153 = (state_24177[(2)]);
var inst_24154 = taoensso.sente.event_msg_QMARK_.call(null,inst_24142);
var inst_24155 = !(inst_24154);
var state_24177__$1 = (function (){var statearr_24198 = state_24177;
(statearr_24198[(11)] = inst_24153);

return statearr_24198;
})();
if(inst_24155){
var statearr_24199_24235 = state_24177__$1;
(statearr_24199_24235[(1)] = (20));

} else {
var statearr_24200_24236 = state_24177__$1;
(statearr_24200_24236[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (11))){
var inst_24131 = (state_24177[(7)]);
var inst_24139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24131);
var state_24177__$1 = state_24177;
var statearr_24201_24237 = state_24177__$1;
(statearr_24201_24237[(2)] = inst_24139);

(statearr_24201_24237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (9))){
var inst_24131 = (state_24177[(7)]);
var inst_24137 = cljs.core.seq_QMARK_.call(null,inst_24131);
var state_24177__$1 = state_24177;
if(inst_24137){
var statearr_24202_24238 = state_24177__$1;
(statearr_24202_24238[(1)] = (11));

} else {
var statearr_24203_24239 = state_24177__$1;
(statearr_24203_24239[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (5))){
var inst_24120 = (state_24177[(2)]);
var inst_24121 = taoensso.encore.errorf.call(null,"Chsk router channel error (%s)!",inst_24120);
var state_24177__$1 = state_24177;
var statearr_24204_24240 = state_24177__$1;
(statearr_24204_24240[(2)] = inst_24121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (14))){
var inst_24163 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24205_24241 = state_24177__$1;
(statearr_24205_24241[(2)] = inst_24163);

(statearr_24205_24241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24177,(15),Error,null,(14));
var state_24177__$1 = state_24177;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_24206_24242 = state_24177__$1;
(statearr_24206_24242[(1)] = (17));

} else {
var statearr_24207_24243 = state_24177__$1;
(statearr_24207_24243[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (10))){
var inst_24165 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24208_24244 = state_24177__$1;
(statearr_24208_24244[(2)] = inst_24165);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (18))){
var state_24177__$1 = state_24177;
var statearr_24209_24245 = state_24177__$1;
(statearr_24209_24245[(2)] = null);

(statearr_24209_24245[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (8))){
var state_24177__$1 = state_24177;
var statearr_24210_24246 = state_24177__$1;
(statearr_24210_24246[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_24210_24246[(1)] = (10));


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
});})(c__6771__auto___24218,ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__6715__auto__,c__6771__auto___24218,ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_24214 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24214[(0)] = state_machine__6716__auto__);

(statearr_24214[(1)] = (1));

return statearr_24214;
});
var state_machine__6716__auto____1 = (function (state_24177){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_24177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e24215){if((e24215 instanceof Object)){
var ex__6719__auto__ = e24215;
var statearr_24216_24247 = state_24177;
(statearr_24216_24247[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24248 = state_24177;
state_24177 = G__24248;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_24177){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_24177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___24218,ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_))
})();
var state__6773__auto__ = (function (){var statearr_24217 = f__6772__auto__.call(null);
(statearr_24217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___24218);

return statearr_24217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___24218,ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_){
return (function stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__24117,map__24118,map__24118__$1,opts,trace_evs_QMARK_))
};
var start_chsk_router_BANG_ = function (ch_recv,event_msg_handler,var_args){
var p__24015 = null;
if (arguments.length > 2) {
  p__24015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return start_chsk_router_BANG___delegate.call(this,ch_recv,event_msg_handler,p__24015);};
start_chsk_router_BANG_.cljs$lang$maxFixedArity = 2;
start_chsk_router_BANG_.cljs$lang$applyTo = (function (arglist__24249){
var ch_recv = cljs.core.first(arglist__24249);
arglist__24249 = cljs.core.next(arglist__24249);
var event_msg_handler = cljs.core.first(arglist__24249);
var p__24015 = cljs.core.rest(arglist__24249);
return start_chsk_router_BANG___delegate(ch_recv,event_msg_handler,p__24015);
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
