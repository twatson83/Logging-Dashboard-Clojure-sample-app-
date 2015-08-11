// Compiled by ClojureScript 0.0-2411
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t19875 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19875 = (function (f,fn_handler,meta19876){
this.f = f;
this.fn_handler = fn_handler;
this.meta19876 = meta19876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19875.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19877){
var self__ = this;
var _19877__$1 = this;
return self__.meta19876;
});

cljs.core.async.t19875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19877,meta19876__$1){
var self__ = this;
var _19877__$1 = this;
return (new cljs.core.async.t19875(self__.f,self__.fn_handler,meta19876__$1));
});

cljs.core.async.t19875.cljs$lang$type = true;

cljs.core.async.t19875.cljs$lang$ctorStr = "cljs.core.async/t19875";

cljs.core.async.t19875.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19875");
});

cljs.core.async.__GT_t19875 = (function __GT_t19875(f__$1,fn_handler__$1,meta19876){
return (new cljs.core.async.t19875(f__$1,fn_handler__$1,meta19876));
});

}

return (new cljs.core.async.t19875(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__19879 = buff;
if(G__19879){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__19879.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19879.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19879);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19879);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19880 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19880);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19880,ret){
return (function (){
return fn1.call(null,val_19880);
});})(val_19880,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4643__auto___19881 = n;
var x_19882 = (0);
while(true){
if((x_19882 < n__4643__auto___19881)){
(a[x_19882] = (0));

var G__19883 = (x_19882 + (1));
x_19882 = G__19883;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19884 = (i + (1));
i = G__19884;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19888 = (function (flag,alt_flag,meta19889){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19889 = meta19889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19888.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19890){
var self__ = this;
var _19890__$1 = this;
return self__.meta19889;
});})(flag))
;

cljs.core.async.t19888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19890,meta19889__$1){
var self__ = this;
var _19890__$1 = this;
return (new cljs.core.async.t19888(self__.flag,self__.alt_flag,meta19889__$1));
});})(flag))
;

cljs.core.async.t19888.cljs$lang$type = true;

cljs.core.async.t19888.cljs$lang$ctorStr = "cljs.core.async/t19888";

cljs.core.async.t19888.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19888");
});})(flag))
;

cljs.core.async.__GT_t19888 = ((function (flag){
return (function __GT_t19888(flag__$1,alt_flag__$1,meta19889){
return (new cljs.core.async.t19888(flag__$1,alt_flag__$1,meta19889));
});})(flag))
;

}

return (new cljs.core.async.t19888(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19894 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19894 = (function (cb,flag,alt_handler,meta19895){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19895 = meta19895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19894.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19896){
var self__ = this;
var _19896__$1 = this;
return self__.meta19895;
});

cljs.core.async.t19894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19896,meta19895__$1){
var self__ = this;
var _19896__$1 = this;
return (new cljs.core.async.t19894(self__.cb,self__.flag,self__.alt_handler,meta19895__$1));
});

cljs.core.async.t19894.cljs$lang$type = true;

cljs.core.async.t19894.cljs$lang$ctorStr = "cljs.core.async/t19894";

cljs.core.async.t19894.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19894");
});

cljs.core.async.__GT_t19894 = (function __GT_t19894(cb__$1,flag__$1,alt_handler__$1,meta19895){
return (new cljs.core.async.t19894(cb__$1,flag__$1,alt_handler__$1,meta19895));
});

}

return (new cljs.core.async.t19894(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19897_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19897_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19898_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19898_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3761__auto__ = wport;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19899 = (i + (1));
i = G__19899;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3761__auto__ = ret;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3749__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3749__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3749__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19900){
var map__19902 = p__19900;
var map__19902__$1 = ((cljs.core.seq_QMARK_.call(null,map__19902))?cljs.core.apply.call(null,cljs.core.hash_map,map__19902):map__19902);
var opts = map__19902__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19900 = null;
if (arguments.length > 1) {
  p__19900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19900);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19903){
var ports = cljs.core.first(arglist__19903);
var p__19900 = cljs.core.rest(arglist__19903);
return alts_BANG___delegate(ports,p__19900);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6714__auto___19998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___19998){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___19998){
return (function (state_19974){
var state_val_19975 = (state_19974[(1)]);
if((state_val_19975 === (7))){
var inst_19970 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19976_19999 = state_19974__$1;
(statearr_19976_19999[(2)] = inst_19970);

(statearr_19976_19999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (1))){
var state_19974__$1 = state_19974;
var statearr_19977_20000 = state_19974__$1;
(statearr_19977_20000[(2)] = null);

(statearr_19977_20000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (4))){
var inst_19953 = (state_19974[(7)]);
var inst_19953__$1 = (state_19974[(2)]);
var inst_19954 = (inst_19953__$1 == null);
var state_19974__$1 = (function (){var statearr_19978 = state_19974;
(statearr_19978[(7)] = inst_19953__$1);

return statearr_19978;
})();
if(cljs.core.truth_(inst_19954)){
var statearr_19979_20001 = state_19974__$1;
(statearr_19979_20001[(1)] = (5));

} else {
var statearr_19980_20002 = state_19974__$1;
(statearr_19980_20002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (13))){
var state_19974__$1 = state_19974;
var statearr_19981_20003 = state_19974__$1;
(statearr_19981_20003[(2)] = null);

(statearr_19981_20003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (6))){
var inst_19953 = (state_19974[(7)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19974__$1,(11),to,inst_19953);
} else {
if((state_val_19975 === (3))){
var inst_19972 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19974__$1,inst_19972);
} else {
if((state_val_19975 === (12))){
var state_19974__$1 = state_19974;
var statearr_19982_20004 = state_19974__$1;
(statearr_19982_20004[(2)] = null);

(statearr_19982_20004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (2))){
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19974__$1,(4),from);
} else {
if((state_val_19975 === (11))){
var inst_19963 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
if(cljs.core.truth_(inst_19963)){
var statearr_19983_20005 = state_19974__$1;
(statearr_19983_20005[(1)] = (12));

} else {
var statearr_19984_20006 = state_19974__$1;
(statearr_19984_20006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (9))){
var state_19974__$1 = state_19974;
var statearr_19985_20007 = state_19974__$1;
(statearr_19985_20007[(2)] = null);

(statearr_19985_20007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (5))){
var state_19974__$1 = state_19974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19986_20008 = state_19974__$1;
(statearr_19986_20008[(1)] = (8));

} else {
var statearr_19987_20009 = state_19974__$1;
(statearr_19987_20009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (14))){
var inst_19968 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19988_20010 = state_19974__$1;
(statearr_19988_20010[(2)] = inst_19968);

(statearr_19988_20010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (10))){
var inst_19960 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19989_20011 = state_19974__$1;
(statearr_19989_20011[(2)] = inst_19960);

(statearr_19989_20011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (8))){
var inst_19957 = cljs.core.async.close_BANG_.call(null,to);
var state_19974__$1 = state_19974;
var statearr_19990_20012 = state_19974__$1;
(statearr_19990_20012[(2)] = inst_19957);

(statearr_19990_20012[(1)] = (10));


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
});})(c__6714__auto___19998))
;
return ((function (switch__6699__auto__,c__6714__auto___19998){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_19994 = [null,null,null,null,null,null,null,null];
(statearr_19994[(0)] = state_machine__6700__auto__);

(statearr_19994[(1)] = (1));

return statearr_19994;
});
var state_machine__6700__auto____1 = (function (state_19974){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_19974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e19995){if((e19995 instanceof Object)){
var ex__6703__auto__ = e19995;
var statearr_19996_20013 = state_19974;
(statearr_19996_20013[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20014 = state_19974;
state_19974 = G__20014;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_19974){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_19974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___19998))
})();
var state__6716__auto__ = (function (){var statearr_19997 = f__6715__auto__.call(null);
(statearr_19997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___19998);

return statearr_19997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___19998))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20198){
var vec__20199 = p__20198;
var v = cljs.core.nth.call(null,vec__20199,(0),null);
var p = cljs.core.nth.call(null,vec__20199,(1),null);
var job = vec__20199;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6714__auto___20381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___20381,res,vec__20199,v,p,job,jobs,results){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___20381,res,vec__20199,v,p,job,jobs,results){
return (function (state_20204){
var state_val_20205 = (state_20204[(1)]);
if((state_val_20205 === (2))){
var inst_20201 = (state_20204[(2)]);
var inst_20202 = cljs.core.async.close_BANG_.call(null,res);
var state_20204__$1 = (function (){var statearr_20206 = state_20204;
(statearr_20206[(7)] = inst_20201);

return statearr_20206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20204__$1,inst_20202);
} else {
if((state_val_20205 === (1))){
var state_20204__$1 = state_20204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20204__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6714__auto___20381,res,vec__20199,v,p,job,jobs,results))
;
return ((function (switch__6699__auto__,c__6714__auto___20381,res,vec__20199,v,p,job,jobs,results){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20210 = [null,null,null,null,null,null,null,null];
(statearr_20210[(0)] = state_machine__6700__auto__);

(statearr_20210[(1)] = (1));

return statearr_20210;
});
var state_machine__6700__auto____1 = (function (state_20204){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20211){if((e20211 instanceof Object)){
var ex__6703__auto__ = e20211;
var statearr_20212_20382 = state_20204;
(statearr_20212_20382[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20383 = state_20204;
state_20204 = G__20383;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20204){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___20381,res,vec__20199,v,p,job,jobs,results))
})();
var state__6716__auto__ = (function (){var statearr_20213 = f__6715__auto__.call(null);
(statearr_20213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___20381);

return statearr_20213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___20381,res,vec__20199,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20214){
var vec__20215 = p__20214;
var v = cljs.core.nth.call(null,vec__20215,(0),null);
var p = cljs.core.nth.call(null,vec__20215,(1),null);
var job = vec__20215;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4643__auto___20384 = n;
var __20385 = (0);
while(true){
if((__20385 < n__4643__auto___20384)){
var G__20216_20386 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20216_20386) {
case "async":
var c__6714__auto___20388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20385,c__6714__auto___20388,G__20216_20386,n__4643__auto___20384,jobs,results,process,async){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (__20385,c__6714__auto___20388,G__20216_20386,n__4643__auto___20384,jobs,results,process,async){
return (function (state_20229){
var state_val_20230 = (state_20229[(1)]);
if((state_val_20230 === (7))){
var inst_20225 = (state_20229[(2)]);
var state_20229__$1 = state_20229;
var statearr_20231_20389 = state_20229__$1;
(statearr_20231_20389[(2)] = inst_20225);

(statearr_20231_20389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20230 === (6))){
var state_20229__$1 = state_20229;
var statearr_20232_20390 = state_20229__$1;
(statearr_20232_20390[(2)] = null);

(statearr_20232_20390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20230 === (5))){
var state_20229__$1 = state_20229;
var statearr_20233_20391 = state_20229__$1;
(statearr_20233_20391[(2)] = null);

(statearr_20233_20391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20230 === (4))){
var inst_20219 = (state_20229[(2)]);
var inst_20220 = async.call(null,inst_20219);
var state_20229__$1 = state_20229;
if(cljs.core.truth_(inst_20220)){
var statearr_20234_20392 = state_20229__$1;
(statearr_20234_20392[(1)] = (5));

} else {
var statearr_20235_20393 = state_20229__$1;
(statearr_20235_20393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20230 === (3))){
var inst_20227 = (state_20229[(2)]);
var state_20229__$1 = state_20229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20229__$1,inst_20227);
} else {
if((state_val_20230 === (2))){
var state_20229__$1 = state_20229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20229__$1,(4),jobs);
} else {
if((state_val_20230 === (1))){
var state_20229__$1 = state_20229;
var statearr_20236_20394 = state_20229__$1;
(statearr_20236_20394[(2)] = null);

(statearr_20236_20394[(1)] = (2));


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
});})(__20385,c__6714__auto___20388,G__20216_20386,n__4643__auto___20384,jobs,results,process,async))
;
return ((function (__20385,switch__6699__auto__,c__6714__auto___20388,G__20216_20386,n__4643__auto___20384,jobs,results,process,async){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20240 = [null,null,null,null,null,null,null];
(statearr_20240[(0)] = state_machine__6700__auto__);

(statearr_20240[(1)] = (1));

return statearr_20240;
});
var state_machine__6700__auto____1 = (function (state_20229){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20241){if((e20241 instanceof Object)){
var ex__6703__auto__ = e20241;
var statearr_20242_20395 = state_20229;
(statearr_20242_20395[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20396 = state_20229;
state_20229 = G__20396;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20229){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(__20385,switch__6699__auto__,c__6714__auto___20388,G__20216_20386,n__4643__auto___20384,jobs,results,process,async))
})();
var state__6716__auto__ = (function (){var statearr_20243 = f__6715__auto__.call(null);
(statearr_20243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___20388);

return statearr_20243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(__20385,c__6714__auto___20388,G__20216_20386,n__4643__auto___20384,jobs,results,process,async))
);


break;
case "compute":
var c__6714__auto___20397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20385,c__6714__auto___20397,G__20216_20386,n__4643__auto___20384,jobs,results,process,async){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (__20385,c__6714__auto___20397,G__20216_20386,n__4643__auto___20384,jobs,results,process,async){
return (function (state_20256){
var state_val_20257 = (state_20256[(1)]);
if((state_val_20257 === (7))){
var inst_20252 = (state_20256[(2)]);
var state_20256__$1 = state_20256;
var statearr_20258_20398 = state_20256__$1;
(statearr_20258_20398[(2)] = inst_20252);

(statearr_20258_20398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20257 === (6))){
var state_20256__$1 = state_20256;
var statearr_20259_20399 = state_20256__$1;
(statearr_20259_20399[(2)] = null);

(statearr_20259_20399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20257 === (5))){
var state_20256__$1 = state_20256;
var statearr_20260_20400 = state_20256__$1;
(statearr_20260_20400[(2)] = null);

(statearr_20260_20400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20257 === (4))){
var inst_20246 = (state_20256[(2)]);
var inst_20247 = process.call(null,inst_20246);
var state_20256__$1 = state_20256;
if(cljs.core.truth_(inst_20247)){
var statearr_20261_20401 = state_20256__$1;
(statearr_20261_20401[(1)] = (5));

} else {
var statearr_20262_20402 = state_20256__$1;
(statearr_20262_20402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20257 === (3))){
var inst_20254 = (state_20256[(2)]);
var state_20256__$1 = state_20256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20256__$1,inst_20254);
} else {
if((state_val_20257 === (2))){
var state_20256__$1 = state_20256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20256__$1,(4),jobs);
} else {
if((state_val_20257 === (1))){
var state_20256__$1 = state_20256;
var statearr_20263_20403 = state_20256__$1;
(statearr_20263_20403[(2)] = null);

(statearr_20263_20403[(1)] = (2));


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
});})(__20385,c__6714__auto___20397,G__20216_20386,n__4643__auto___20384,jobs,results,process,async))
;
return ((function (__20385,switch__6699__auto__,c__6714__auto___20397,G__20216_20386,n__4643__auto___20384,jobs,results,process,async){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20267 = [null,null,null,null,null,null,null];
(statearr_20267[(0)] = state_machine__6700__auto__);

(statearr_20267[(1)] = (1));

return statearr_20267;
});
var state_machine__6700__auto____1 = (function (state_20256){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20268){if((e20268 instanceof Object)){
var ex__6703__auto__ = e20268;
var statearr_20269_20404 = state_20256;
(statearr_20269_20404[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20405 = state_20256;
state_20256 = G__20405;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20256){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(__20385,switch__6699__auto__,c__6714__auto___20397,G__20216_20386,n__4643__auto___20384,jobs,results,process,async))
})();
var state__6716__auto__ = (function (){var statearr_20270 = f__6715__auto__.call(null);
(statearr_20270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___20397);

return statearr_20270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(__20385,c__6714__auto___20397,G__20216_20386,n__4643__auto___20384,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20406 = (__20385 + (1));
__20385 = G__20406;
continue;
} else {
}
break;
}

var c__6714__auto___20407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___20407,jobs,results,process,async){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___20407,jobs,results,process,async){
return (function (state_20292){
var state_val_20293 = (state_20292[(1)]);
if((state_val_20293 === (9))){
var inst_20285 = (state_20292[(2)]);
var state_20292__$1 = (function (){var statearr_20294 = state_20292;
(statearr_20294[(7)] = inst_20285);

return statearr_20294;
})();
var statearr_20295_20408 = state_20292__$1;
(statearr_20295_20408[(2)] = null);

(statearr_20295_20408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (8))){
var inst_20278 = (state_20292[(8)]);
var inst_20283 = (state_20292[(2)]);
var state_20292__$1 = (function (){var statearr_20296 = state_20292;
(statearr_20296[(9)] = inst_20283);

return statearr_20296;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20292__$1,(9),results,inst_20278);
} else {
if((state_val_20293 === (7))){
var inst_20288 = (state_20292[(2)]);
var state_20292__$1 = state_20292;
var statearr_20297_20409 = state_20292__$1;
(statearr_20297_20409[(2)] = inst_20288);

(statearr_20297_20409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (6))){
var inst_20273 = (state_20292[(10)]);
var inst_20278 = (state_20292[(8)]);
var inst_20278__$1 = cljs.core.async.chan.call(null,(1));
var inst_20279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20280 = [inst_20273,inst_20278__$1];
var inst_20281 = (new cljs.core.PersistentVector(null,2,(5),inst_20279,inst_20280,null));
var state_20292__$1 = (function (){var statearr_20298 = state_20292;
(statearr_20298[(8)] = inst_20278__$1);

return statearr_20298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20292__$1,(8),jobs,inst_20281);
} else {
if((state_val_20293 === (5))){
var inst_20276 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20292__$1 = state_20292;
var statearr_20299_20410 = state_20292__$1;
(statearr_20299_20410[(2)] = inst_20276);

(statearr_20299_20410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (4))){
var inst_20273 = (state_20292[(10)]);
var inst_20273__$1 = (state_20292[(2)]);
var inst_20274 = (inst_20273__$1 == null);
var state_20292__$1 = (function (){var statearr_20300 = state_20292;
(statearr_20300[(10)] = inst_20273__$1);

return statearr_20300;
})();
if(cljs.core.truth_(inst_20274)){
var statearr_20301_20411 = state_20292__$1;
(statearr_20301_20411[(1)] = (5));

} else {
var statearr_20302_20412 = state_20292__$1;
(statearr_20302_20412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (3))){
var inst_20290 = (state_20292[(2)]);
var state_20292__$1 = state_20292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20292__$1,inst_20290);
} else {
if((state_val_20293 === (2))){
var state_20292__$1 = state_20292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20292__$1,(4),from);
} else {
if((state_val_20293 === (1))){
var state_20292__$1 = state_20292;
var statearr_20303_20413 = state_20292__$1;
(statearr_20303_20413[(2)] = null);

(statearr_20303_20413[(1)] = (2));


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
});})(c__6714__auto___20407,jobs,results,process,async))
;
return ((function (switch__6699__auto__,c__6714__auto___20407,jobs,results,process,async){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20307[(0)] = state_machine__6700__auto__);

(statearr_20307[(1)] = (1));

return statearr_20307;
});
var state_machine__6700__auto____1 = (function (state_20292){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20308){if((e20308 instanceof Object)){
var ex__6703__auto__ = e20308;
var statearr_20309_20414 = state_20292;
(statearr_20309_20414[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20415 = state_20292;
state_20292 = G__20415;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20292){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___20407,jobs,results,process,async))
})();
var state__6716__auto__ = (function (){var statearr_20310 = f__6715__auto__.call(null);
(statearr_20310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___20407);

return statearr_20310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___20407,jobs,results,process,async))
);


var c__6714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto__,jobs,results,process,async){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto__,jobs,results,process,async){
return (function (state_20348){
var state_val_20349 = (state_20348[(1)]);
if((state_val_20349 === (7))){
var inst_20344 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20350_20416 = state_20348__$1;
(statearr_20350_20416[(2)] = inst_20344);

(statearr_20350_20416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (20))){
var state_20348__$1 = state_20348;
var statearr_20351_20417 = state_20348__$1;
(statearr_20351_20417[(2)] = null);

(statearr_20351_20417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (1))){
var state_20348__$1 = state_20348;
var statearr_20352_20418 = state_20348__$1;
(statearr_20352_20418[(2)] = null);

(statearr_20352_20418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (4))){
var inst_20313 = (state_20348[(7)]);
var inst_20313__$1 = (state_20348[(2)]);
var inst_20314 = (inst_20313__$1 == null);
var state_20348__$1 = (function (){var statearr_20353 = state_20348;
(statearr_20353[(7)] = inst_20313__$1);

return statearr_20353;
})();
if(cljs.core.truth_(inst_20314)){
var statearr_20354_20419 = state_20348__$1;
(statearr_20354_20419[(1)] = (5));

} else {
var statearr_20355_20420 = state_20348__$1;
(statearr_20355_20420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (15))){
var inst_20326 = (state_20348[(8)]);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20348__$1,(18),to,inst_20326);
} else {
if((state_val_20349 === (21))){
var inst_20339 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20356_20421 = state_20348__$1;
(statearr_20356_20421[(2)] = inst_20339);

(statearr_20356_20421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (13))){
var inst_20341 = (state_20348[(2)]);
var state_20348__$1 = (function (){var statearr_20357 = state_20348;
(statearr_20357[(9)] = inst_20341);

return statearr_20357;
})();
var statearr_20358_20422 = state_20348__$1;
(statearr_20358_20422[(2)] = null);

(statearr_20358_20422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (6))){
var inst_20313 = (state_20348[(7)]);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20348__$1,(11),inst_20313);
} else {
if((state_val_20349 === (17))){
var inst_20334 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
if(cljs.core.truth_(inst_20334)){
var statearr_20359_20423 = state_20348__$1;
(statearr_20359_20423[(1)] = (19));

} else {
var statearr_20360_20424 = state_20348__$1;
(statearr_20360_20424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (3))){
var inst_20346 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20348__$1,inst_20346);
} else {
if((state_val_20349 === (12))){
var inst_20323 = (state_20348[(10)]);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20348__$1,(14),inst_20323);
} else {
if((state_val_20349 === (2))){
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20348__$1,(4),results);
} else {
if((state_val_20349 === (19))){
var state_20348__$1 = state_20348;
var statearr_20361_20425 = state_20348__$1;
(statearr_20361_20425[(2)] = null);

(statearr_20361_20425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (11))){
var inst_20323 = (state_20348[(2)]);
var state_20348__$1 = (function (){var statearr_20362 = state_20348;
(statearr_20362[(10)] = inst_20323);

return statearr_20362;
})();
var statearr_20363_20426 = state_20348__$1;
(statearr_20363_20426[(2)] = null);

(statearr_20363_20426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (9))){
var state_20348__$1 = state_20348;
var statearr_20364_20427 = state_20348__$1;
(statearr_20364_20427[(2)] = null);

(statearr_20364_20427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (5))){
var state_20348__$1 = state_20348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20365_20428 = state_20348__$1;
(statearr_20365_20428[(1)] = (8));

} else {
var statearr_20366_20429 = state_20348__$1;
(statearr_20366_20429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (14))){
var inst_20328 = (state_20348[(11)]);
var inst_20326 = (state_20348[(8)]);
var inst_20326__$1 = (state_20348[(2)]);
var inst_20327 = (inst_20326__$1 == null);
var inst_20328__$1 = cljs.core.not.call(null,inst_20327);
var state_20348__$1 = (function (){var statearr_20367 = state_20348;
(statearr_20367[(11)] = inst_20328__$1);

(statearr_20367[(8)] = inst_20326__$1);

return statearr_20367;
})();
if(inst_20328__$1){
var statearr_20368_20430 = state_20348__$1;
(statearr_20368_20430[(1)] = (15));

} else {
var statearr_20369_20431 = state_20348__$1;
(statearr_20369_20431[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (16))){
var inst_20328 = (state_20348[(11)]);
var state_20348__$1 = state_20348;
var statearr_20370_20432 = state_20348__$1;
(statearr_20370_20432[(2)] = inst_20328);

(statearr_20370_20432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (10))){
var inst_20320 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20371_20433 = state_20348__$1;
(statearr_20371_20433[(2)] = inst_20320);

(statearr_20371_20433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (18))){
var inst_20331 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20372_20434 = state_20348__$1;
(statearr_20372_20434[(2)] = inst_20331);

(statearr_20372_20434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (8))){
var inst_20317 = cljs.core.async.close_BANG_.call(null,to);
var state_20348__$1 = state_20348;
var statearr_20373_20435 = state_20348__$1;
(statearr_20373_20435[(2)] = inst_20317);

(statearr_20373_20435[(1)] = (10));


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
});})(c__6714__auto__,jobs,results,process,async))
;
return ((function (switch__6699__auto__,c__6714__auto__,jobs,results,process,async){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20377[(0)] = state_machine__6700__auto__);

(statearr_20377[(1)] = (1));

return statearr_20377;
});
var state_machine__6700__auto____1 = (function (state_20348){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20378){if((e20378 instanceof Object)){
var ex__6703__auto__ = e20378;
var statearr_20379_20436 = state_20348;
(statearr_20379_20436[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20437 = state_20348;
state_20348 = G__20437;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20348){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto__,jobs,results,process,async))
})();
var state__6716__auto__ = (function (){var statearr_20380 = f__6715__auto__.call(null);
(statearr_20380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto__);

return statearr_20380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto__,jobs,results,process,async))
);

return c__6714__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6714__auto___20538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___20538,tc,fc){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___20538,tc,fc){
return (function (state_20513){
var state_val_20514 = (state_20513[(1)]);
if((state_val_20514 === (7))){
var inst_20509 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
var statearr_20515_20539 = state_20513__$1;
(statearr_20515_20539[(2)] = inst_20509);

(statearr_20515_20539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (1))){
var state_20513__$1 = state_20513;
var statearr_20516_20540 = state_20513__$1;
(statearr_20516_20540[(2)] = null);

(statearr_20516_20540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (4))){
var inst_20490 = (state_20513[(7)]);
var inst_20490__$1 = (state_20513[(2)]);
var inst_20491 = (inst_20490__$1 == null);
var state_20513__$1 = (function (){var statearr_20517 = state_20513;
(statearr_20517[(7)] = inst_20490__$1);

return statearr_20517;
})();
if(cljs.core.truth_(inst_20491)){
var statearr_20518_20541 = state_20513__$1;
(statearr_20518_20541[(1)] = (5));

} else {
var statearr_20519_20542 = state_20513__$1;
(statearr_20519_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (13))){
var state_20513__$1 = state_20513;
var statearr_20520_20543 = state_20513__$1;
(statearr_20520_20543[(2)] = null);

(statearr_20520_20543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (6))){
var inst_20490 = (state_20513[(7)]);
var inst_20496 = p.call(null,inst_20490);
var state_20513__$1 = state_20513;
if(cljs.core.truth_(inst_20496)){
var statearr_20521_20544 = state_20513__$1;
(statearr_20521_20544[(1)] = (9));

} else {
var statearr_20522_20545 = state_20513__$1;
(statearr_20522_20545[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (3))){
var inst_20511 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20513__$1,inst_20511);
} else {
if((state_val_20514 === (12))){
var state_20513__$1 = state_20513;
var statearr_20523_20546 = state_20513__$1;
(statearr_20523_20546[(2)] = null);

(statearr_20523_20546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (2))){
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20513__$1,(4),ch);
} else {
if((state_val_20514 === (11))){
var inst_20490 = (state_20513[(7)]);
var inst_20500 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20513__$1,(8),inst_20500,inst_20490);
} else {
if((state_val_20514 === (9))){
var state_20513__$1 = state_20513;
var statearr_20524_20547 = state_20513__$1;
(statearr_20524_20547[(2)] = tc);

(statearr_20524_20547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (5))){
var inst_20493 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20494 = cljs.core.async.close_BANG_.call(null,fc);
var state_20513__$1 = (function (){var statearr_20525 = state_20513;
(statearr_20525[(8)] = inst_20493);

return statearr_20525;
})();
var statearr_20526_20548 = state_20513__$1;
(statearr_20526_20548[(2)] = inst_20494);

(statearr_20526_20548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (14))){
var inst_20507 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
var statearr_20527_20549 = state_20513__$1;
(statearr_20527_20549[(2)] = inst_20507);

(statearr_20527_20549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (10))){
var state_20513__$1 = state_20513;
var statearr_20528_20550 = state_20513__$1;
(statearr_20528_20550[(2)] = fc);

(statearr_20528_20550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (8))){
var inst_20502 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
if(cljs.core.truth_(inst_20502)){
var statearr_20529_20551 = state_20513__$1;
(statearr_20529_20551[(1)] = (12));

} else {
var statearr_20530_20552 = state_20513__$1;
(statearr_20530_20552[(1)] = (13));

}

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
});})(c__6714__auto___20538,tc,fc))
;
return ((function (switch__6699__auto__,c__6714__auto___20538,tc,fc){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20534 = [null,null,null,null,null,null,null,null,null];
(statearr_20534[(0)] = state_machine__6700__auto__);

(statearr_20534[(1)] = (1));

return statearr_20534;
});
var state_machine__6700__auto____1 = (function (state_20513){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20535){if((e20535 instanceof Object)){
var ex__6703__auto__ = e20535;
var statearr_20536_20553 = state_20513;
(statearr_20536_20553[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20554 = state_20513;
state_20513 = G__20554;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20513){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___20538,tc,fc))
})();
var state__6716__auto__ = (function (){var statearr_20537 = f__6715__auto__.call(null);
(statearr_20537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___20538);

return statearr_20537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___20538,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto__){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto__){
return (function (state_20601){
var state_val_20602 = (state_20601[(1)]);
if((state_val_20602 === (7))){
var inst_20597 = (state_20601[(2)]);
var state_20601__$1 = state_20601;
var statearr_20603_20619 = state_20601__$1;
(statearr_20603_20619[(2)] = inst_20597);

(statearr_20603_20619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20602 === (6))){
var inst_20587 = (state_20601[(7)]);
var inst_20590 = (state_20601[(8)]);
var inst_20594 = f.call(null,inst_20587,inst_20590);
var inst_20587__$1 = inst_20594;
var state_20601__$1 = (function (){var statearr_20604 = state_20601;
(statearr_20604[(7)] = inst_20587__$1);

return statearr_20604;
})();
var statearr_20605_20620 = state_20601__$1;
(statearr_20605_20620[(2)] = null);

(statearr_20605_20620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20602 === (5))){
var inst_20587 = (state_20601[(7)]);
var state_20601__$1 = state_20601;
var statearr_20606_20621 = state_20601__$1;
(statearr_20606_20621[(2)] = inst_20587);

(statearr_20606_20621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20602 === (4))){
var inst_20590 = (state_20601[(8)]);
var inst_20590__$1 = (state_20601[(2)]);
var inst_20591 = (inst_20590__$1 == null);
var state_20601__$1 = (function (){var statearr_20607 = state_20601;
(statearr_20607[(8)] = inst_20590__$1);

return statearr_20607;
})();
if(cljs.core.truth_(inst_20591)){
var statearr_20608_20622 = state_20601__$1;
(statearr_20608_20622[(1)] = (5));

} else {
var statearr_20609_20623 = state_20601__$1;
(statearr_20609_20623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20602 === (3))){
var inst_20599 = (state_20601[(2)]);
var state_20601__$1 = state_20601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20601__$1,inst_20599);
} else {
if((state_val_20602 === (2))){
var state_20601__$1 = state_20601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20601__$1,(4),ch);
} else {
if((state_val_20602 === (1))){
var inst_20587 = init;
var state_20601__$1 = (function (){var statearr_20610 = state_20601;
(statearr_20610[(7)] = inst_20587);

return statearr_20610;
})();
var statearr_20611_20624 = state_20601__$1;
(statearr_20611_20624[(2)] = null);

(statearr_20611_20624[(1)] = (2));


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
});})(c__6714__auto__))
;
return ((function (switch__6699__auto__,c__6714__auto__){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20615 = [null,null,null,null,null,null,null,null,null];
(statearr_20615[(0)] = state_machine__6700__auto__);

(statearr_20615[(1)] = (1));

return statearr_20615;
});
var state_machine__6700__auto____1 = (function (state_20601){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20616){if((e20616 instanceof Object)){
var ex__6703__auto__ = e20616;
var statearr_20617_20625 = state_20601;
(statearr_20617_20625[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20626 = state_20601;
state_20601 = G__20626;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20601){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto__))
})();
var state__6716__auto__ = (function (){var statearr_20618 = f__6715__auto__.call(null);
(statearr_20618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto__);

return statearr_20618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto__))
);

return c__6714__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto__){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto__){
return (function (state_20700){
var state_val_20701 = (state_20700[(1)]);
if((state_val_20701 === (7))){
var inst_20682 = (state_20700[(2)]);
var state_20700__$1 = state_20700;
var statearr_20702_20725 = state_20700__$1;
(statearr_20702_20725[(2)] = inst_20682);

(statearr_20702_20725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (1))){
var inst_20676 = cljs.core.seq.call(null,coll);
var inst_20677 = inst_20676;
var state_20700__$1 = (function (){var statearr_20703 = state_20700;
(statearr_20703[(7)] = inst_20677);

return statearr_20703;
})();
var statearr_20704_20726 = state_20700__$1;
(statearr_20704_20726[(2)] = null);

(statearr_20704_20726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (4))){
var inst_20677 = (state_20700[(7)]);
var inst_20680 = cljs.core.first.call(null,inst_20677);
var state_20700__$1 = state_20700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20700__$1,(7),ch,inst_20680);
} else {
if((state_val_20701 === (13))){
var inst_20694 = (state_20700[(2)]);
var state_20700__$1 = state_20700;
var statearr_20705_20727 = state_20700__$1;
(statearr_20705_20727[(2)] = inst_20694);

(statearr_20705_20727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (6))){
var inst_20685 = (state_20700[(2)]);
var state_20700__$1 = state_20700;
if(cljs.core.truth_(inst_20685)){
var statearr_20706_20728 = state_20700__$1;
(statearr_20706_20728[(1)] = (8));

} else {
var statearr_20707_20729 = state_20700__$1;
(statearr_20707_20729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (3))){
var inst_20698 = (state_20700[(2)]);
var state_20700__$1 = state_20700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20700__$1,inst_20698);
} else {
if((state_val_20701 === (12))){
var state_20700__$1 = state_20700;
var statearr_20708_20730 = state_20700__$1;
(statearr_20708_20730[(2)] = null);

(statearr_20708_20730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (2))){
var inst_20677 = (state_20700[(7)]);
var state_20700__$1 = state_20700;
if(cljs.core.truth_(inst_20677)){
var statearr_20709_20731 = state_20700__$1;
(statearr_20709_20731[(1)] = (4));

} else {
var statearr_20710_20732 = state_20700__$1;
(statearr_20710_20732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (11))){
var inst_20691 = cljs.core.async.close_BANG_.call(null,ch);
var state_20700__$1 = state_20700;
var statearr_20711_20733 = state_20700__$1;
(statearr_20711_20733[(2)] = inst_20691);

(statearr_20711_20733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (9))){
var state_20700__$1 = state_20700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20712_20734 = state_20700__$1;
(statearr_20712_20734[(1)] = (11));

} else {
var statearr_20713_20735 = state_20700__$1;
(statearr_20713_20735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (5))){
var inst_20677 = (state_20700[(7)]);
var state_20700__$1 = state_20700;
var statearr_20714_20736 = state_20700__$1;
(statearr_20714_20736[(2)] = inst_20677);

(statearr_20714_20736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (10))){
var inst_20696 = (state_20700[(2)]);
var state_20700__$1 = state_20700;
var statearr_20715_20737 = state_20700__$1;
(statearr_20715_20737[(2)] = inst_20696);

(statearr_20715_20737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20701 === (8))){
var inst_20677 = (state_20700[(7)]);
var inst_20687 = cljs.core.next.call(null,inst_20677);
var inst_20677__$1 = inst_20687;
var state_20700__$1 = (function (){var statearr_20716 = state_20700;
(statearr_20716[(7)] = inst_20677__$1);

return statearr_20716;
})();
var statearr_20717_20738 = state_20700__$1;
(statearr_20717_20738[(2)] = null);

(statearr_20717_20738[(1)] = (2));


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
});})(c__6714__auto__))
;
return ((function (switch__6699__auto__,c__6714__auto__){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_20721 = [null,null,null,null,null,null,null,null];
(statearr_20721[(0)] = state_machine__6700__auto__);

(statearr_20721[(1)] = (1));

return statearr_20721;
});
var state_machine__6700__auto____1 = (function (state_20700){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_20700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e20722){if((e20722 instanceof Object)){
var ex__6703__auto__ = e20722;
var statearr_20723_20739 = state_20700;
(statearr_20723_20739[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20740 = state_20700;
state_20700 = G__20740;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_20700){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_20700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto__))
})();
var state__6716__auto__ = (function (){var statearr_20724 = f__6715__auto__.call(null);
(statearr_20724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto__);

return statearr_20724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto__))
);

return c__6714__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj20742 = {};
return obj20742;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3749__auto__ = _;
if(and__3749__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3749__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4400__auto__ = (((_ == null))?null:_);
return (function (){var or__3761__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj20744 = {};
return obj20744;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t20966 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20966 = (function (cs,ch,mult,meta20967){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20967 = meta20967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20966.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20966.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20966.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20966.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20968){
var self__ = this;
var _20968__$1 = this;
return self__.meta20967;
});})(cs))
;

cljs.core.async.t20966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20968,meta20967__$1){
var self__ = this;
var _20968__$1 = this;
return (new cljs.core.async.t20966(self__.cs,self__.ch,self__.mult,meta20967__$1));
});})(cs))
;

cljs.core.async.t20966.cljs$lang$type = true;

cljs.core.async.t20966.cljs$lang$ctorStr = "cljs.core.async/t20966";

cljs.core.async.t20966.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20966");
});})(cs))
;

cljs.core.async.__GT_t20966 = ((function (cs){
return (function __GT_t20966(cs__$1,ch__$1,mult__$1,meta20967){
return (new cljs.core.async.t20966(cs__$1,ch__$1,mult__$1,meta20967));
});})(cs))
;

}

return (new cljs.core.async.t20966(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6714__auto___21187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___21187,cs,m,dchan,dctr,done){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___21187,cs,m,dchan,dctr,done){
return (function (state_21099){
var state_val_21100 = (state_21099[(1)]);
if((state_val_21100 === (7))){
var inst_21095 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21101_21188 = state_21099__$1;
(statearr_21101_21188[(2)] = inst_21095);

(statearr_21101_21188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (20))){
var inst_21000 = (state_21099[(7)]);
var inst_21010 = cljs.core.first.call(null,inst_21000);
var inst_21011 = cljs.core.nth.call(null,inst_21010,(0),null);
var inst_21012 = cljs.core.nth.call(null,inst_21010,(1),null);
var state_21099__$1 = (function (){var statearr_21102 = state_21099;
(statearr_21102[(8)] = inst_21011);

return statearr_21102;
})();
if(cljs.core.truth_(inst_21012)){
var statearr_21103_21189 = state_21099__$1;
(statearr_21103_21189[(1)] = (22));

} else {
var statearr_21104_21190 = state_21099__$1;
(statearr_21104_21190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (27))){
var inst_21040 = (state_21099[(9)]);
var inst_21047 = (state_21099[(10)]);
var inst_20971 = (state_21099[(11)]);
var inst_21042 = (state_21099[(12)]);
var inst_21047__$1 = cljs.core._nth.call(null,inst_21040,inst_21042);
var inst_21048 = cljs.core.async.put_BANG_.call(null,inst_21047__$1,inst_20971,done);
var state_21099__$1 = (function (){var statearr_21105 = state_21099;
(statearr_21105[(10)] = inst_21047__$1);

return statearr_21105;
})();
if(cljs.core.truth_(inst_21048)){
var statearr_21106_21191 = state_21099__$1;
(statearr_21106_21191[(1)] = (30));

} else {
var statearr_21107_21192 = state_21099__$1;
(statearr_21107_21192[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (1))){
var state_21099__$1 = state_21099;
var statearr_21108_21193 = state_21099__$1;
(statearr_21108_21193[(2)] = null);

(statearr_21108_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (24))){
var inst_21000 = (state_21099[(7)]);
var inst_21017 = (state_21099[(2)]);
var inst_21018 = cljs.core.next.call(null,inst_21000);
var inst_20980 = inst_21018;
var inst_20981 = null;
var inst_20982 = (0);
var inst_20983 = (0);
var state_21099__$1 = (function (){var statearr_21109 = state_21099;
(statearr_21109[(13)] = inst_20981);

(statearr_21109[(14)] = inst_20982);

(statearr_21109[(15)] = inst_21017);

(statearr_21109[(16)] = inst_20983);

(statearr_21109[(17)] = inst_20980);

return statearr_21109;
})();
var statearr_21110_21194 = state_21099__$1;
(statearr_21110_21194[(2)] = null);

(statearr_21110_21194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (39))){
var state_21099__$1 = state_21099;
var statearr_21114_21195 = state_21099__$1;
(statearr_21114_21195[(2)] = null);

(statearr_21114_21195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (4))){
var inst_20971 = (state_21099[(11)]);
var inst_20971__$1 = (state_21099[(2)]);
var inst_20972 = (inst_20971__$1 == null);
var state_21099__$1 = (function (){var statearr_21115 = state_21099;
(statearr_21115[(11)] = inst_20971__$1);

return statearr_21115;
})();
if(cljs.core.truth_(inst_20972)){
var statearr_21116_21196 = state_21099__$1;
(statearr_21116_21196[(1)] = (5));

} else {
var statearr_21117_21197 = state_21099__$1;
(statearr_21117_21197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (15))){
var inst_20981 = (state_21099[(13)]);
var inst_20982 = (state_21099[(14)]);
var inst_20983 = (state_21099[(16)]);
var inst_20980 = (state_21099[(17)]);
var inst_20996 = (state_21099[(2)]);
var inst_20997 = (inst_20983 + (1));
var tmp21111 = inst_20981;
var tmp21112 = inst_20982;
var tmp21113 = inst_20980;
var inst_20980__$1 = tmp21113;
var inst_20981__$1 = tmp21111;
var inst_20982__$1 = tmp21112;
var inst_20983__$1 = inst_20997;
var state_21099__$1 = (function (){var statearr_21118 = state_21099;
(statearr_21118[(13)] = inst_20981__$1);

(statearr_21118[(14)] = inst_20982__$1);

(statearr_21118[(18)] = inst_20996);

(statearr_21118[(16)] = inst_20983__$1);

(statearr_21118[(17)] = inst_20980__$1);

return statearr_21118;
})();
var statearr_21119_21198 = state_21099__$1;
(statearr_21119_21198[(2)] = null);

(statearr_21119_21198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (21))){
var inst_21021 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21123_21199 = state_21099__$1;
(statearr_21123_21199[(2)] = inst_21021);

(statearr_21123_21199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (31))){
var inst_21047 = (state_21099[(10)]);
var inst_21051 = done.call(null,null);
var inst_21052 = cljs.core.async.untap_STAR_.call(null,m,inst_21047);
var state_21099__$1 = (function (){var statearr_21124 = state_21099;
(statearr_21124[(19)] = inst_21051);

return statearr_21124;
})();
var statearr_21125_21200 = state_21099__$1;
(statearr_21125_21200[(2)] = inst_21052);

(statearr_21125_21200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (32))){
var inst_21040 = (state_21099[(9)]);
var inst_21039 = (state_21099[(20)]);
var inst_21041 = (state_21099[(21)]);
var inst_21042 = (state_21099[(12)]);
var inst_21054 = (state_21099[(2)]);
var inst_21055 = (inst_21042 + (1));
var tmp21120 = inst_21040;
var tmp21121 = inst_21039;
var tmp21122 = inst_21041;
var inst_21039__$1 = tmp21121;
var inst_21040__$1 = tmp21120;
var inst_21041__$1 = tmp21122;
var inst_21042__$1 = inst_21055;
var state_21099__$1 = (function (){var statearr_21126 = state_21099;
(statearr_21126[(9)] = inst_21040__$1);

(statearr_21126[(20)] = inst_21039__$1);

(statearr_21126[(22)] = inst_21054);

(statearr_21126[(21)] = inst_21041__$1);

(statearr_21126[(12)] = inst_21042__$1);

return statearr_21126;
})();
var statearr_21127_21201 = state_21099__$1;
(statearr_21127_21201[(2)] = null);

(statearr_21127_21201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (40))){
var inst_21067 = (state_21099[(23)]);
var inst_21071 = done.call(null,null);
var inst_21072 = cljs.core.async.untap_STAR_.call(null,m,inst_21067);
var state_21099__$1 = (function (){var statearr_21128 = state_21099;
(statearr_21128[(24)] = inst_21071);

return statearr_21128;
})();
var statearr_21129_21202 = state_21099__$1;
(statearr_21129_21202[(2)] = inst_21072);

(statearr_21129_21202[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (33))){
var inst_21058 = (state_21099[(25)]);
var inst_21060 = cljs.core.chunked_seq_QMARK_.call(null,inst_21058);
var state_21099__$1 = state_21099;
if(inst_21060){
var statearr_21130_21203 = state_21099__$1;
(statearr_21130_21203[(1)] = (36));

} else {
var statearr_21131_21204 = state_21099__$1;
(statearr_21131_21204[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (13))){
var inst_20990 = (state_21099[(26)]);
var inst_20993 = cljs.core.async.close_BANG_.call(null,inst_20990);
var state_21099__$1 = state_21099;
var statearr_21132_21205 = state_21099__$1;
(statearr_21132_21205[(2)] = inst_20993);

(statearr_21132_21205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (22))){
var inst_21011 = (state_21099[(8)]);
var inst_21014 = cljs.core.async.close_BANG_.call(null,inst_21011);
var state_21099__$1 = state_21099;
var statearr_21133_21206 = state_21099__$1;
(statearr_21133_21206[(2)] = inst_21014);

(statearr_21133_21206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (36))){
var inst_21058 = (state_21099[(25)]);
var inst_21062 = cljs.core.chunk_first.call(null,inst_21058);
var inst_21063 = cljs.core.chunk_rest.call(null,inst_21058);
var inst_21064 = cljs.core.count.call(null,inst_21062);
var inst_21039 = inst_21063;
var inst_21040 = inst_21062;
var inst_21041 = inst_21064;
var inst_21042 = (0);
var state_21099__$1 = (function (){var statearr_21134 = state_21099;
(statearr_21134[(9)] = inst_21040);

(statearr_21134[(20)] = inst_21039);

(statearr_21134[(21)] = inst_21041);

(statearr_21134[(12)] = inst_21042);

return statearr_21134;
})();
var statearr_21135_21207 = state_21099__$1;
(statearr_21135_21207[(2)] = null);

(statearr_21135_21207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (41))){
var inst_21058 = (state_21099[(25)]);
var inst_21074 = (state_21099[(2)]);
var inst_21075 = cljs.core.next.call(null,inst_21058);
var inst_21039 = inst_21075;
var inst_21040 = null;
var inst_21041 = (0);
var inst_21042 = (0);
var state_21099__$1 = (function (){var statearr_21136 = state_21099;
(statearr_21136[(9)] = inst_21040);

(statearr_21136[(20)] = inst_21039);

(statearr_21136[(27)] = inst_21074);

(statearr_21136[(21)] = inst_21041);

(statearr_21136[(12)] = inst_21042);

return statearr_21136;
})();
var statearr_21137_21208 = state_21099__$1;
(statearr_21137_21208[(2)] = null);

(statearr_21137_21208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (43))){
var state_21099__$1 = state_21099;
var statearr_21138_21209 = state_21099__$1;
(statearr_21138_21209[(2)] = null);

(statearr_21138_21209[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (29))){
var inst_21083 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21139_21210 = state_21099__$1;
(statearr_21139_21210[(2)] = inst_21083);

(statearr_21139_21210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (44))){
var inst_21092 = (state_21099[(2)]);
var state_21099__$1 = (function (){var statearr_21140 = state_21099;
(statearr_21140[(28)] = inst_21092);

return statearr_21140;
})();
var statearr_21141_21211 = state_21099__$1;
(statearr_21141_21211[(2)] = null);

(statearr_21141_21211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (6))){
var inst_21031 = (state_21099[(29)]);
var inst_21030 = cljs.core.deref.call(null,cs);
var inst_21031__$1 = cljs.core.keys.call(null,inst_21030);
var inst_21032 = cljs.core.count.call(null,inst_21031__$1);
var inst_21033 = cljs.core.reset_BANG_.call(null,dctr,inst_21032);
var inst_21038 = cljs.core.seq.call(null,inst_21031__$1);
var inst_21039 = inst_21038;
var inst_21040 = null;
var inst_21041 = (0);
var inst_21042 = (0);
var state_21099__$1 = (function (){var statearr_21142 = state_21099;
(statearr_21142[(30)] = inst_21033);

(statearr_21142[(9)] = inst_21040);

(statearr_21142[(20)] = inst_21039);

(statearr_21142[(29)] = inst_21031__$1);

(statearr_21142[(21)] = inst_21041);

(statearr_21142[(12)] = inst_21042);

return statearr_21142;
})();
var statearr_21143_21212 = state_21099__$1;
(statearr_21143_21212[(2)] = null);

(statearr_21143_21212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (28))){
var inst_21039 = (state_21099[(20)]);
var inst_21058 = (state_21099[(25)]);
var inst_21058__$1 = cljs.core.seq.call(null,inst_21039);
var state_21099__$1 = (function (){var statearr_21144 = state_21099;
(statearr_21144[(25)] = inst_21058__$1);

return statearr_21144;
})();
if(inst_21058__$1){
var statearr_21145_21213 = state_21099__$1;
(statearr_21145_21213[(1)] = (33));

} else {
var statearr_21146_21214 = state_21099__$1;
(statearr_21146_21214[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (25))){
var inst_21041 = (state_21099[(21)]);
var inst_21042 = (state_21099[(12)]);
var inst_21044 = (inst_21042 < inst_21041);
var inst_21045 = inst_21044;
var state_21099__$1 = state_21099;
if(cljs.core.truth_(inst_21045)){
var statearr_21147_21215 = state_21099__$1;
(statearr_21147_21215[(1)] = (27));

} else {
var statearr_21148_21216 = state_21099__$1;
(statearr_21148_21216[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (34))){
var state_21099__$1 = state_21099;
var statearr_21149_21217 = state_21099__$1;
(statearr_21149_21217[(2)] = null);

(statearr_21149_21217[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (17))){
var state_21099__$1 = state_21099;
var statearr_21150_21218 = state_21099__$1;
(statearr_21150_21218[(2)] = null);

(statearr_21150_21218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (3))){
var inst_21097 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21099__$1,inst_21097);
} else {
if((state_val_21100 === (12))){
var inst_21026 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21151_21219 = state_21099__$1;
(statearr_21151_21219[(2)] = inst_21026);

(statearr_21151_21219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (2))){
var state_21099__$1 = state_21099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21099__$1,(4),ch);
} else {
if((state_val_21100 === (23))){
var state_21099__$1 = state_21099;
var statearr_21152_21220 = state_21099__$1;
(statearr_21152_21220[(2)] = null);

(statearr_21152_21220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (35))){
var inst_21081 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21153_21221 = state_21099__$1;
(statearr_21153_21221[(2)] = inst_21081);

(statearr_21153_21221[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (19))){
var inst_21000 = (state_21099[(7)]);
var inst_21004 = cljs.core.chunk_first.call(null,inst_21000);
var inst_21005 = cljs.core.chunk_rest.call(null,inst_21000);
var inst_21006 = cljs.core.count.call(null,inst_21004);
var inst_20980 = inst_21005;
var inst_20981 = inst_21004;
var inst_20982 = inst_21006;
var inst_20983 = (0);
var state_21099__$1 = (function (){var statearr_21154 = state_21099;
(statearr_21154[(13)] = inst_20981);

(statearr_21154[(14)] = inst_20982);

(statearr_21154[(16)] = inst_20983);

(statearr_21154[(17)] = inst_20980);

return statearr_21154;
})();
var statearr_21155_21222 = state_21099__$1;
(statearr_21155_21222[(2)] = null);

(statearr_21155_21222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (11))){
var inst_21000 = (state_21099[(7)]);
var inst_20980 = (state_21099[(17)]);
var inst_21000__$1 = cljs.core.seq.call(null,inst_20980);
var state_21099__$1 = (function (){var statearr_21156 = state_21099;
(statearr_21156[(7)] = inst_21000__$1);

return statearr_21156;
})();
if(inst_21000__$1){
var statearr_21157_21223 = state_21099__$1;
(statearr_21157_21223[(1)] = (16));

} else {
var statearr_21158_21224 = state_21099__$1;
(statearr_21158_21224[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (9))){
var inst_21028 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21159_21225 = state_21099__$1;
(statearr_21159_21225[(2)] = inst_21028);

(statearr_21159_21225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (5))){
var inst_20978 = cljs.core.deref.call(null,cs);
var inst_20979 = cljs.core.seq.call(null,inst_20978);
var inst_20980 = inst_20979;
var inst_20981 = null;
var inst_20982 = (0);
var inst_20983 = (0);
var state_21099__$1 = (function (){var statearr_21160 = state_21099;
(statearr_21160[(13)] = inst_20981);

(statearr_21160[(14)] = inst_20982);

(statearr_21160[(16)] = inst_20983);

(statearr_21160[(17)] = inst_20980);

return statearr_21160;
})();
var statearr_21161_21226 = state_21099__$1;
(statearr_21161_21226[(2)] = null);

(statearr_21161_21226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (14))){
var state_21099__$1 = state_21099;
var statearr_21162_21227 = state_21099__$1;
(statearr_21162_21227[(2)] = null);

(statearr_21162_21227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (45))){
var inst_21089 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21163_21228 = state_21099__$1;
(statearr_21163_21228[(2)] = inst_21089);

(statearr_21163_21228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (26))){
var inst_21031 = (state_21099[(29)]);
var inst_21085 = (state_21099[(2)]);
var inst_21086 = cljs.core.seq.call(null,inst_21031);
var state_21099__$1 = (function (){var statearr_21164 = state_21099;
(statearr_21164[(31)] = inst_21085);

return statearr_21164;
})();
if(inst_21086){
var statearr_21165_21229 = state_21099__$1;
(statearr_21165_21229[(1)] = (42));

} else {
var statearr_21166_21230 = state_21099__$1;
(statearr_21166_21230[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (16))){
var inst_21000 = (state_21099[(7)]);
var inst_21002 = cljs.core.chunked_seq_QMARK_.call(null,inst_21000);
var state_21099__$1 = state_21099;
if(inst_21002){
var statearr_21167_21231 = state_21099__$1;
(statearr_21167_21231[(1)] = (19));

} else {
var statearr_21168_21232 = state_21099__$1;
(statearr_21168_21232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (38))){
var inst_21078 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21169_21233 = state_21099__$1;
(statearr_21169_21233[(2)] = inst_21078);

(statearr_21169_21233[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (30))){
var state_21099__$1 = state_21099;
var statearr_21170_21234 = state_21099__$1;
(statearr_21170_21234[(2)] = null);

(statearr_21170_21234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (10))){
var inst_20981 = (state_21099[(13)]);
var inst_20983 = (state_21099[(16)]);
var inst_20989 = cljs.core._nth.call(null,inst_20981,inst_20983);
var inst_20990 = cljs.core.nth.call(null,inst_20989,(0),null);
var inst_20991 = cljs.core.nth.call(null,inst_20989,(1),null);
var state_21099__$1 = (function (){var statearr_21171 = state_21099;
(statearr_21171[(26)] = inst_20990);

return statearr_21171;
})();
if(cljs.core.truth_(inst_20991)){
var statearr_21172_21235 = state_21099__$1;
(statearr_21172_21235[(1)] = (13));

} else {
var statearr_21173_21236 = state_21099__$1;
(statearr_21173_21236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (18))){
var inst_21024 = (state_21099[(2)]);
var state_21099__$1 = state_21099;
var statearr_21174_21237 = state_21099__$1;
(statearr_21174_21237[(2)] = inst_21024);

(statearr_21174_21237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (42))){
var state_21099__$1 = state_21099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21099__$1,(45),dchan);
} else {
if((state_val_21100 === (37))){
var inst_21058 = (state_21099[(25)]);
var inst_20971 = (state_21099[(11)]);
var inst_21067 = (state_21099[(23)]);
var inst_21067__$1 = cljs.core.first.call(null,inst_21058);
var inst_21068 = cljs.core.async.put_BANG_.call(null,inst_21067__$1,inst_20971,done);
var state_21099__$1 = (function (){var statearr_21175 = state_21099;
(statearr_21175[(23)] = inst_21067__$1);

return statearr_21175;
})();
if(cljs.core.truth_(inst_21068)){
var statearr_21176_21238 = state_21099__$1;
(statearr_21176_21238[(1)] = (39));

} else {
var statearr_21177_21239 = state_21099__$1;
(statearr_21177_21239[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21100 === (8))){
var inst_20982 = (state_21099[(14)]);
var inst_20983 = (state_21099[(16)]);
var inst_20985 = (inst_20983 < inst_20982);
var inst_20986 = inst_20985;
var state_21099__$1 = state_21099;
if(cljs.core.truth_(inst_20986)){
var statearr_21178_21240 = state_21099__$1;
(statearr_21178_21240[(1)] = (10));

} else {
var statearr_21179_21241 = state_21099__$1;
(statearr_21179_21241[(1)] = (11));

}

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
});})(c__6714__auto___21187,cs,m,dchan,dctr,done))
;
return ((function (switch__6699__auto__,c__6714__auto___21187,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_21183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21183[(0)] = state_machine__6700__auto__);

(statearr_21183[(1)] = (1));

return statearr_21183;
});
var state_machine__6700__auto____1 = (function (state_21099){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_21099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e21184){if((e21184 instanceof Object)){
var ex__6703__auto__ = e21184;
var statearr_21185_21242 = state_21099;
(statearr_21185_21242[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21243 = state_21099;
state_21099 = G__21243;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_21099){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_21099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___21187,cs,m,dchan,dctr,done))
})();
var state__6716__auto__ = (function (){var statearr_21186 = f__6715__auto__.call(null);
(statearr_21186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___21187);

return statearr_21186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___21187,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj21245 = {};
return obj21245;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3749__auto__ = m;
if(and__3749__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3749__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4400__auto__ = (((m == null))?null:m);
return (function (){var or__3761__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21246){
var map__21251 = p__21246;
var map__21251__$1 = ((cljs.core.seq_QMARK_.call(null,map__21251))?cljs.core.apply.call(null,cljs.core.hash_map,map__21251):map__21251);
var opts = map__21251__$1;
var statearr_21252_21255 = state;
(statearr_21252_21255[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21251,map__21251__$1,opts){
return (function (val){
var statearr_21253_21256 = state;
(statearr_21253_21256[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21251,map__21251__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21254_21257 = state;
(statearr_21254_21257[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21246 = null;
if (arguments.length > 3) {
  p__21246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21246);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21258){
var state = cljs.core.first(arglist__21258);
arglist__21258 = cljs.core.next(arglist__21258);
var cont_block = cljs.core.first(arglist__21258);
arglist__21258 = cljs.core.next(arglist__21258);
var ports = cljs.core.first(arglist__21258);
var p__21246 = cljs.core.rest(arglist__21258);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21246);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t21378 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21378 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21379){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21379 = meta21379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21378.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21380){
var self__ = this;
var _21380__$1 = this;
return self__.meta21379;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21380,meta21379__$1){
var self__ = this;
var _21380__$1 = this;
return (new cljs.core.async.t21378(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21379__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21378.cljs$lang$type = true;

cljs.core.async.t21378.cljs$lang$ctorStr = "cljs.core.async/t21378";

cljs.core.async.t21378.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21378");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21378 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21378(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21379){
return (new cljs.core.async.t21378(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21379));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21378(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6714__auto___21497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___21497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___21497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21450){
var state_val_21451 = (state_21450[(1)]);
if((state_val_21451 === (7))){
var inst_21394 = (state_21450[(7)]);
var inst_21399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21394);
var state_21450__$1 = state_21450;
var statearr_21452_21498 = state_21450__$1;
(statearr_21452_21498[(2)] = inst_21399);

(statearr_21452_21498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (20))){
var inst_21409 = (state_21450[(8)]);
var state_21450__$1 = state_21450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21450__$1,(23),out,inst_21409);
} else {
if((state_val_21451 === (1))){
var inst_21384 = (state_21450[(9)]);
var inst_21384__$1 = calc_state.call(null);
var inst_21385 = cljs.core.seq_QMARK_.call(null,inst_21384__$1);
var state_21450__$1 = (function (){var statearr_21453 = state_21450;
(statearr_21453[(9)] = inst_21384__$1);

return statearr_21453;
})();
if(inst_21385){
var statearr_21454_21499 = state_21450__$1;
(statearr_21454_21499[(1)] = (2));

} else {
var statearr_21455_21500 = state_21450__$1;
(statearr_21455_21500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (24))){
var inst_21402 = (state_21450[(10)]);
var inst_21394 = inst_21402;
var state_21450__$1 = (function (){var statearr_21456 = state_21450;
(statearr_21456[(7)] = inst_21394);

return statearr_21456;
})();
var statearr_21457_21501 = state_21450__$1;
(statearr_21457_21501[(2)] = null);

(statearr_21457_21501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (4))){
var inst_21384 = (state_21450[(9)]);
var inst_21390 = (state_21450[(2)]);
var inst_21391 = cljs.core.get.call(null,inst_21390,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21392 = cljs.core.get.call(null,inst_21390,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21393 = cljs.core.get.call(null,inst_21390,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21394 = inst_21384;
var state_21450__$1 = (function (){var statearr_21458 = state_21450;
(statearr_21458[(11)] = inst_21392);

(statearr_21458[(12)] = inst_21393);

(statearr_21458[(13)] = inst_21391);

(statearr_21458[(7)] = inst_21394);

return statearr_21458;
})();
var statearr_21459_21502 = state_21450__$1;
(statearr_21459_21502[(2)] = null);

(statearr_21459_21502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (15))){
var state_21450__$1 = state_21450;
var statearr_21460_21503 = state_21450__$1;
(statearr_21460_21503[(2)] = null);

(statearr_21460_21503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (21))){
var inst_21402 = (state_21450[(10)]);
var inst_21394 = inst_21402;
var state_21450__$1 = (function (){var statearr_21461 = state_21450;
(statearr_21461[(7)] = inst_21394);

return statearr_21461;
})();
var statearr_21462_21504 = state_21450__$1;
(statearr_21462_21504[(2)] = null);

(statearr_21462_21504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (13))){
var inst_21446 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
var statearr_21463_21505 = state_21450__$1;
(statearr_21463_21505[(2)] = inst_21446);

(statearr_21463_21505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (22))){
var inst_21444 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
var statearr_21464_21506 = state_21450__$1;
(statearr_21464_21506[(2)] = inst_21444);

(statearr_21464_21506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (6))){
var inst_21448 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21450__$1,inst_21448);
} else {
if((state_val_21451 === (25))){
var state_21450__$1 = state_21450;
var statearr_21465_21507 = state_21450__$1;
(statearr_21465_21507[(2)] = null);

(statearr_21465_21507[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (17))){
var inst_21424 = (state_21450[(14)]);
var state_21450__$1 = state_21450;
var statearr_21466_21508 = state_21450__$1;
(statearr_21466_21508[(2)] = inst_21424);

(statearr_21466_21508[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (3))){
var inst_21384 = (state_21450[(9)]);
var state_21450__$1 = state_21450;
var statearr_21467_21509 = state_21450__$1;
(statearr_21467_21509[(2)] = inst_21384);

(statearr_21467_21509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (12))){
var inst_21410 = (state_21450[(15)]);
var inst_21424 = (state_21450[(14)]);
var inst_21405 = (state_21450[(16)]);
var inst_21424__$1 = inst_21405.call(null,inst_21410);
var state_21450__$1 = (function (){var statearr_21468 = state_21450;
(statearr_21468[(14)] = inst_21424__$1);

return statearr_21468;
})();
if(cljs.core.truth_(inst_21424__$1)){
var statearr_21469_21510 = state_21450__$1;
(statearr_21469_21510[(1)] = (17));

} else {
var statearr_21470_21511 = state_21450__$1;
(statearr_21470_21511[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (2))){
var inst_21384 = (state_21450[(9)]);
var inst_21387 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21384);
var state_21450__$1 = state_21450;
var statearr_21471_21512 = state_21450__$1;
(statearr_21471_21512[(2)] = inst_21387);

(statearr_21471_21512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (23))){
var inst_21435 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
if(cljs.core.truth_(inst_21435)){
var statearr_21472_21513 = state_21450__$1;
(statearr_21472_21513[(1)] = (24));

} else {
var statearr_21473_21514 = state_21450__$1;
(statearr_21473_21514[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (19))){
var inst_21432 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
if(cljs.core.truth_(inst_21432)){
var statearr_21474_21515 = state_21450__$1;
(statearr_21474_21515[(1)] = (20));

} else {
var statearr_21475_21516 = state_21450__$1;
(statearr_21475_21516[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (11))){
var inst_21409 = (state_21450[(8)]);
var inst_21415 = (inst_21409 == null);
var state_21450__$1 = state_21450;
if(cljs.core.truth_(inst_21415)){
var statearr_21476_21517 = state_21450__$1;
(statearr_21476_21517[(1)] = (14));

} else {
var statearr_21477_21518 = state_21450__$1;
(statearr_21477_21518[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (9))){
var inst_21402 = (state_21450[(10)]);
var inst_21402__$1 = (state_21450[(2)]);
var inst_21403 = cljs.core.get.call(null,inst_21402__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21404 = cljs.core.get.call(null,inst_21402__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21405 = cljs.core.get.call(null,inst_21402__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21450__$1 = (function (){var statearr_21478 = state_21450;
(statearr_21478[(10)] = inst_21402__$1);

(statearr_21478[(17)] = inst_21404);

(statearr_21478[(16)] = inst_21405);

return statearr_21478;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21450__$1,(10),inst_21403);
} else {
if((state_val_21451 === (5))){
var inst_21394 = (state_21450[(7)]);
var inst_21397 = cljs.core.seq_QMARK_.call(null,inst_21394);
var state_21450__$1 = state_21450;
if(inst_21397){
var statearr_21479_21519 = state_21450__$1;
(statearr_21479_21519[(1)] = (7));

} else {
var statearr_21480_21520 = state_21450__$1;
(statearr_21480_21520[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (14))){
var inst_21410 = (state_21450[(15)]);
var inst_21417 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21410);
var state_21450__$1 = state_21450;
var statearr_21481_21521 = state_21450__$1;
(statearr_21481_21521[(2)] = inst_21417);

(statearr_21481_21521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (26))){
var inst_21440 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
var statearr_21482_21522 = state_21450__$1;
(statearr_21482_21522[(2)] = inst_21440);

(statearr_21482_21522[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (16))){
var inst_21420 = (state_21450[(2)]);
var inst_21421 = calc_state.call(null);
var inst_21394 = inst_21421;
var state_21450__$1 = (function (){var statearr_21483 = state_21450;
(statearr_21483[(18)] = inst_21420);

(statearr_21483[(7)] = inst_21394);

return statearr_21483;
})();
var statearr_21484_21523 = state_21450__$1;
(statearr_21484_21523[(2)] = null);

(statearr_21484_21523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (10))){
var inst_21410 = (state_21450[(15)]);
var inst_21409 = (state_21450[(8)]);
var inst_21408 = (state_21450[(2)]);
var inst_21409__$1 = cljs.core.nth.call(null,inst_21408,(0),null);
var inst_21410__$1 = cljs.core.nth.call(null,inst_21408,(1),null);
var inst_21411 = (inst_21409__$1 == null);
var inst_21412 = cljs.core._EQ_.call(null,inst_21410__$1,change);
var inst_21413 = (inst_21411) || (inst_21412);
var state_21450__$1 = (function (){var statearr_21485 = state_21450;
(statearr_21485[(15)] = inst_21410__$1);

(statearr_21485[(8)] = inst_21409__$1);

return statearr_21485;
})();
if(cljs.core.truth_(inst_21413)){
var statearr_21486_21524 = state_21450__$1;
(statearr_21486_21524[(1)] = (11));

} else {
var statearr_21487_21525 = state_21450__$1;
(statearr_21487_21525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (18))){
var inst_21410 = (state_21450[(15)]);
var inst_21404 = (state_21450[(17)]);
var inst_21405 = (state_21450[(16)]);
var inst_21427 = cljs.core.empty_QMARK_.call(null,inst_21405);
var inst_21428 = inst_21404.call(null,inst_21410);
var inst_21429 = cljs.core.not.call(null,inst_21428);
var inst_21430 = (inst_21427) && (inst_21429);
var state_21450__$1 = state_21450;
var statearr_21488_21526 = state_21450__$1;
(statearr_21488_21526[(2)] = inst_21430);

(statearr_21488_21526[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (8))){
var inst_21394 = (state_21450[(7)]);
var state_21450__$1 = state_21450;
var statearr_21489_21527 = state_21450__$1;
(statearr_21489_21527[(2)] = inst_21394);

(statearr_21489_21527[(1)] = (9));


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
}
});})(c__6714__auto___21497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6699__auto__,c__6714__auto___21497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_21493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21493[(0)] = state_machine__6700__auto__);

(statearr_21493[(1)] = (1));

return statearr_21493;
});
var state_machine__6700__auto____1 = (function (state_21450){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_21450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e21494){if((e21494 instanceof Object)){
var ex__6703__auto__ = e21494;
var statearr_21495_21528 = state_21450;
(statearr_21495_21528[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21529 = state_21450;
state_21450 = G__21529;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_21450){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_21450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___21497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6716__auto__ = (function (){var statearr_21496 = f__6715__auto__.call(null);
(statearr_21496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___21497);

return statearr_21496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___21497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj21531 = {};
return obj21531;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3749__auto__ = p;
if(and__3749__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3749__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4400__auto__ = (((p == null))?null:p);
return (function (){var or__3761__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3749__auto__ = p;
if(and__3749__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3749__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4400__auto__ = (((p == null))?null:p);
return (function (){var or__3761__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3749__auto__ = p;
if(and__3749__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3749__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4400__auto__ = (((p == null))?null:p);
return (function (){var or__3761__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3749__auto__ = p;
if(and__3749__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3749__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4400__auto__ = (((p == null))?null:p);
return (function (){var or__3761__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4400__auto__)]);
if(or__3761__auto__){
return or__3761__auto__;
} else {
var or__3761__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3761__auto____$1){
return or__3761__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3761__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3761__auto__,mults){
return (function (p1__21532_SHARP_){
if(cljs.core.truth_(p1__21532_SHARP_.call(null,topic))){
return p1__21532_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21532_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21655 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21655 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21656){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21656 = meta21656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21655.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21655.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21655.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t21655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21655.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21657){
var self__ = this;
var _21657__$1 = this;
return self__.meta21656;
});})(mults,ensure_mult))
;

cljs.core.async.t21655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21657,meta21656__$1){
var self__ = this;
var _21657__$1 = this;
return (new cljs.core.async.t21655(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21656__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21655.cljs$lang$type = true;

cljs.core.async.t21655.cljs$lang$ctorStr = "cljs.core.async/t21655";

cljs.core.async.t21655.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21655");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21655 = ((function (mults,ensure_mult){
return (function __GT_t21655(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21656){
return (new cljs.core.async.t21655(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21656));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21655(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6714__auto___21777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___21777,mults,ensure_mult,p){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___21777,mults,ensure_mult,p){
return (function (state_21729){
var state_val_21730 = (state_21729[(1)]);
if((state_val_21730 === (7))){
var inst_21725 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21731_21778 = state_21729__$1;
(statearr_21731_21778[(2)] = inst_21725);

(statearr_21731_21778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (20))){
var state_21729__$1 = state_21729;
var statearr_21732_21779 = state_21729__$1;
(statearr_21732_21779[(2)] = null);

(statearr_21732_21779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (1))){
var state_21729__$1 = state_21729;
var statearr_21733_21780 = state_21729__$1;
(statearr_21733_21780[(2)] = null);

(statearr_21733_21780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (24))){
var inst_21708 = (state_21729[(7)]);
var inst_21717 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21708);
var state_21729__$1 = state_21729;
var statearr_21734_21781 = state_21729__$1;
(statearr_21734_21781[(2)] = inst_21717);

(statearr_21734_21781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (4))){
var inst_21660 = (state_21729[(8)]);
var inst_21660__$1 = (state_21729[(2)]);
var inst_21661 = (inst_21660__$1 == null);
var state_21729__$1 = (function (){var statearr_21735 = state_21729;
(statearr_21735[(8)] = inst_21660__$1);

return statearr_21735;
})();
if(cljs.core.truth_(inst_21661)){
var statearr_21736_21782 = state_21729__$1;
(statearr_21736_21782[(1)] = (5));

} else {
var statearr_21737_21783 = state_21729__$1;
(statearr_21737_21783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (15))){
var inst_21702 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21738_21784 = state_21729__$1;
(statearr_21738_21784[(2)] = inst_21702);

(statearr_21738_21784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (21))){
var inst_21722 = (state_21729[(2)]);
var state_21729__$1 = (function (){var statearr_21739 = state_21729;
(statearr_21739[(9)] = inst_21722);

return statearr_21739;
})();
var statearr_21740_21785 = state_21729__$1;
(statearr_21740_21785[(2)] = null);

(statearr_21740_21785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (13))){
var inst_21684 = (state_21729[(10)]);
var inst_21686 = cljs.core.chunked_seq_QMARK_.call(null,inst_21684);
var state_21729__$1 = state_21729;
if(inst_21686){
var statearr_21741_21786 = state_21729__$1;
(statearr_21741_21786[(1)] = (16));

} else {
var statearr_21742_21787 = state_21729__$1;
(statearr_21742_21787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (22))){
var inst_21714 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21714)){
var statearr_21743_21788 = state_21729__$1;
(statearr_21743_21788[(1)] = (23));

} else {
var statearr_21744_21789 = state_21729__$1;
(statearr_21744_21789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (6))){
var inst_21660 = (state_21729[(8)]);
var inst_21708 = (state_21729[(7)]);
var inst_21710 = (state_21729[(11)]);
var inst_21708__$1 = topic_fn.call(null,inst_21660);
var inst_21709 = cljs.core.deref.call(null,mults);
var inst_21710__$1 = cljs.core.get.call(null,inst_21709,inst_21708__$1);
var state_21729__$1 = (function (){var statearr_21745 = state_21729;
(statearr_21745[(7)] = inst_21708__$1);

(statearr_21745[(11)] = inst_21710__$1);

return statearr_21745;
})();
if(cljs.core.truth_(inst_21710__$1)){
var statearr_21746_21790 = state_21729__$1;
(statearr_21746_21790[(1)] = (19));

} else {
var statearr_21747_21791 = state_21729__$1;
(statearr_21747_21791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (25))){
var inst_21719 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21748_21792 = state_21729__$1;
(statearr_21748_21792[(2)] = inst_21719);

(statearr_21748_21792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (17))){
var inst_21684 = (state_21729[(10)]);
var inst_21693 = cljs.core.first.call(null,inst_21684);
var inst_21694 = cljs.core.async.muxch_STAR_.call(null,inst_21693);
var inst_21695 = cljs.core.async.close_BANG_.call(null,inst_21694);
var inst_21696 = cljs.core.next.call(null,inst_21684);
var inst_21670 = inst_21696;
var inst_21671 = null;
var inst_21672 = (0);
var inst_21673 = (0);
var state_21729__$1 = (function (){var statearr_21749 = state_21729;
(statearr_21749[(12)] = inst_21670);

(statearr_21749[(13)] = inst_21695);

(statearr_21749[(14)] = inst_21672);

(statearr_21749[(15)] = inst_21671);

(statearr_21749[(16)] = inst_21673);

return statearr_21749;
})();
var statearr_21750_21793 = state_21729__$1;
(statearr_21750_21793[(2)] = null);

(statearr_21750_21793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (3))){
var inst_21727 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21729__$1,inst_21727);
} else {
if((state_val_21730 === (12))){
var inst_21704 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21751_21794 = state_21729__$1;
(statearr_21751_21794[(2)] = inst_21704);

(statearr_21751_21794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (2))){
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21729__$1,(4),ch);
} else {
if((state_val_21730 === (23))){
var state_21729__$1 = state_21729;
var statearr_21752_21795 = state_21729__$1;
(statearr_21752_21795[(2)] = null);

(statearr_21752_21795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (19))){
var inst_21660 = (state_21729[(8)]);
var inst_21710 = (state_21729[(11)]);
var inst_21712 = cljs.core.async.muxch_STAR_.call(null,inst_21710);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21729__$1,(22),inst_21712,inst_21660);
} else {
if((state_val_21730 === (11))){
var inst_21670 = (state_21729[(12)]);
var inst_21684 = (state_21729[(10)]);
var inst_21684__$1 = cljs.core.seq.call(null,inst_21670);
var state_21729__$1 = (function (){var statearr_21753 = state_21729;
(statearr_21753[(10)] = inst_21684__$1);

return statearr_21753;
})();
if(inst_21684__$1){
var statearr_21754_21796 = state_21729__$1;
(statearr_21754_21796[(1)] = (13));

} else {
var statearr_21755_21797 = state_21729__$1;
(statearr_21755_21797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (9))){
var inst_21706 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21756_21798 = state_21729__$1;
(statearr_21756_21798[(2)] = inst_21706);

(statearr_21756_21798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (5))){
var inst_21667 = cljs.core.deref.call(null,mults);
var inst_21668 = cljs.core.vals.call(null,inst_21667);
var inst_21669 = cljs.core.seq.call(null,inst_21668);
var inst_21670 = inst_21669;
var inst_21671 = null;
var inst_21672 = (0);
var inst_21673 = (0);
var state_21729__$1 = (function (){var statearr_21757 = state_21729;
(statearr_21757[(12)] = inst_21670);

(statearr_21757[(14)] = inst_21672);

(statearr_21757[(15)] = inst_21671);

(statearr_21757[(16)] = inst_21673);

return statearr_21757;
})();
var statearr_21758_21799 = state_21729__$1;
(statearr_21758_21799[(2)] = null);

(statearr_21758_21799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (14))){
var state_21729__$1 = state_21729;
var statearr_21762_21800 = state_21729__$1;
(statearr_21762_21800[(2)] = null);

(statearr_21762_21800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (16))){
var inst_21684 = (state_21729[(10)]);
var inst_21688 = cljs.core.chunk_first.call(null,inst_21684);
var inst_21689 = cljs.core.chunk_rest.call(null,inst_21684);
var inst_21690 = cljs.core.count.call(null,inst_21688);
var inst_21670 = inst_21689;
var inst_21671 = inst_21688;
var inst_21672 = inst_21690;
var inst_21673 = (0);
var state_21729__$1 = (function (){var statearr_21763 = state_21729;
(statearr_21763[(12)] = inst_21670);

(statearr_21763[(14)] = inst_21672);

(statearr_21763[(15)] = inst_21671);

(statearr_21763[(16)] = inst_21673);

return statearr_21763;
})();
var statearr_21764_21801 = state_21729__$1;
(statearr_21764_21801[(2)] = null);

(statearr_21764_21801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (10))){
var inst_21670 = (state_21729[(12)]);
var inst_21672 = (state_21729[(14)]);
var inst_21671 = (state_21729[(15)]);
var inst_21673 = (state_21729[(16)]);
var inst_21678 = cljs.core._nth.call(null,inst_21671,inst_21673);
var inst_21679 = cljs.core.async.muxch_STAR_.call(null,inst_21678);
var inst_21680 = cljs.core.async.close_BANG_.call(null,inst_21679);
var inst_21681 = (inst_21673 + (1));
var tmp21759 = inst_21670;
var tmp21760 = inst_21672;
var tmp21761 = inst_21671;
var inst_21670__$1 = tmp21759;
var inst_21671__$1 = tmp21761;
var inst_21672__$1 = tmp21760;
var inst_21673__$1 = inst_21681;
var state_21729__$1 = (function (){var statearr_21765 = state_21729;
(statearr_21765[(12)] = inst_21670__$1);

(statearr_21765[(14)] = inst_21672__$1);

(statearr_21765[(15)] = inst_21671__$1);

(statearr_21765[(17)] = inst_21680);

(statearr_21765[(16)] = inst_21673__$1);

return statearr_21765;
})();
var statearr_21766_21802 = state_21729__$1;
(statearr_21766_21802[(2)] = null);

(statearr_21766_21802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (18))){
var inst_21699 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21767_21803 = state_21729__$1;
(statearr_21767_21803[(2)] = inst_21699);

(statearr_21767_21803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (8))){
var inst_21672 = (state_21729[(14)]);
var inst_21673 = (state_21729[(16)]);
var inst_21675 = (inst_21673 < inst_21672);
var inst_21676 = inst_21675;
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21676)){
var statearr_21768_21804 = state_21729__$1;
(statearr_21768_21804[(1)] = (10));

} else {
var statearr_21769_21805 = state_21729__$1;
(statearr_21769_21805[(1)] = (11));

}

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
});})(c__6714__auto___21777,mults,ensure_mult,p))
;
return ((function (switch__6699__auto__,c__6714__auto___21777,mults,ensure_mult,p){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_21773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21773[(0)] = state_machine__6700__auto__);

(statearr_21773[(1)] = (1));

return statearr_21773;
});
var state_machine__6700__auto____1 = (function (state_21729){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_21729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e21774){if((e21774 instanceof Object)){
var ex__6703__auto__ = e21774;
var statearr_21775_21806 = state_21729;
(statearr_21775_21806[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21807 = state_21729;
state_21729 = G__21807;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_21729){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_21729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___21777,mults,ensure_mult,p))
})();
var state__6716__auto__ = (function (){var statearr_21776 = f__6715__auto__.call(null);
(statearr_21776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___21777);

return statearr_21776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___21777,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6714__auto___21944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___21944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___21944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21914){
var state_val_21915 = (state_21914[(1)]);
if((state_val_21915 === (7))){
var state_21914__$1 = state_21914;
var statearr_21916_21945 = state_21914__$1;
(statearr_21916_21945[(2)] = null);

(statearr_21916_21945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (1))){
var state_21914__$1 = state_21914;
var statearr_21917_21946 = state_21914__$1;
(statearr_21917_21946[(2)] = null);

(statearr_21917_21946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (4))){
var inst_21878 = (state_21914[(7)]);
var inst_21880 = (inst_21878 < cnt);
var state_21914__$1 = state_21914;
if(cljs.core.truth_(inst_21880)){
var statearr_21918_21947 = state_21914__$1;
(statearr_21918_21947[(1)] = (6));

} else {
var statearr_21919_21948 = state_21914__$1;
(statearr_21919_21948[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (15))){
var inst_21910 = (state_21914[(2)]);
var state_21914__$1 = state_21914;
var statearr_21920_21949 = state_21914__$1;
(statearr_21920_21949[(2)] = inst_21910);

(statearr_21920_21949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (13))){
var inst_21903 = cljs.core.async.close_BANG_.call(null,out);
var state_21914__$1 = state_21914;
var statearr_21921_21950 = state_21914__$1;
(statearr_21921_21950[(2)] = inst_21903);

(statearr_21921_21950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (6))){
var state_21914__$1 = state_21914;
var statearr_21922_21951 = state_21914__$1;
(statearr_21922_21951[(2)] = null);

(statearr_21922_21951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (3))){
var inst_21912 = (state_21914[(2)]);
var state_21914__$1 = state_21914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21914__$1,inst_21912);
} else {
if((state_val_21915 === (12))){
var inst_21900 = (state_21914[(8)]);
var inst_21900__$1 = (state_21914[(2)]);
var inst_21901 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21900__$1);
var state_21914__$1 = (function (){var statearr_21923 = state_21914;
(statearr_21923[(8)] = inst_21900__$1);

return statearr_21923;
})();
if(cljs.core.truth_(inst_21901)){
var statearr_21924_21952 = state_21914__$1;
(statearr_21924_21952[(1)] = (13));

} else {
var statearr_21925_21953 = state_21914__$1;
(statearr_21925_21953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (2))){
var inst_21877 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21878 = (0);
var state_21914__$1 = (function (){var statearr_21926 = state_21914;
(statearr_21926[(9)] = inst_21877);

(statearr_21926[(7)] = inst_21878);

return statearr_21926;
})();
var statearr_21927_21954 = state_21914__$1;
(statearr_21927_21954[(2)] = null);

(statearr_21927_21954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (11))){
var inst_21878 = (state_21914[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21914,(10),Object,null,(9));
var inst_21887 = chs__$1.call(null,inst_21878);
var inst_21888 = done.call(null,inst_21878);
var inst_21889 = cljs.core.async.take_BANG_.call(null,inst_21887,inst_21888);
var state_21914__$1 = state_21914;
var statearr_21928_21955 = state_21914__$1;
(statearr_21928_21955[(2)] = inst_21889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (9))){
var inst_21878 = (state_21914[(7)]);
var inst_21891 = (state_21914[(2)]);
var inst_21892 = (inst_21878 + (1));
var inst_21878__$1 = inst_21892;
var state_21914__$1 = (function (){var statearr_21929 = state_21914;
(statearr_21929[(10)] = inst_21891);

(statearr_21929[(7)] = inst_21878__$1);

return statearr_21929;
})();
var statearr_21930_21956 = state_21914__$1;
(statearr_21930_21956[(2)] = null);

(statearr_21930_21956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (5))){
var inst_21898 = (state_21914[(2)]);
var state_21914__$1 = (function (){var statearr_21931 = state_21914;
(statearr_21931[(11)] = inst_21898);

return statearr_21931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21914__$1,(12),dchan);
} else {
if((state_val_21915 === (14))){
var inst_21900 = (state_21914[(8)]);
var inst_21905 = cljs.core.apply.call(null,f,inst_21900);
var state_21914__$1 = state_21914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21914__$1,(16),out,inst_21905);
} else {
if((state_val_21915 === (16))){
var inst_21907 = (state_21914[(2)]);
var state_21914__$1 = (function (){var statearr_21932 = state_21914;
(statearr_21932[(12)] = inst_21907);

return statearr_21932;
})();
var statearr_21933_21957 = state_21914__$1;
(statearr_21933_21957[(2)] = null);

(statearr_21933_21957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (10))){
var inst_21882 = (state_21914[(2)]);
var inst_21883 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21914__$1 = (function (){var statearr_21934 = state_21914;
(statearr_21934[(13)] = inst_21882);

return statearr_21934;
})();
var statearr_21935_21958 = state_21914__$1;
(statearr_21935_21958[(2)] = inst_21883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21915 === (8))){
var inst_21896 = (state_21914[(2)]);
var state_21914__$1 = state_21914;
var statearr_21936_21959 = state_21914__$1;
(statearr_21936_21959[(2)] = inst_21896);

(statearr_21936_21959[(1)] = (5));


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
});})(c__6714__auto___21944,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6699__auto__,c__6714__auto___21944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_21940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21940[(0)] = state_machine__6700__auto__);

(statearr_21940[(1)] = (1));

return statearr_21940;
});
var state_machine__6700__auto____1 = (function (state_21914){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_21914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e21941){if((e21941 instanceof Object)){
var ex__6703__auto__ = e21941;
var statearr_21942_21960 = state_21914;
(statearr_21942_21960[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21961 = state_21914;
state_21914 = G__21961;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_21914){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_21914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___21944,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6716__auto__ = (function (){var statearr_21943 = f__6715__auto__.call(null);
(statearr_21943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___21944);

return statearr_21943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___21944,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6714__auto___22069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___22069,out){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___22069,out){
return (function (state_22045){
var state_val_22046 = (state_22045[(1)]);
if((state_val_22046 === (7))){
var inst_22024 = (state_22045[(7)]);
var inst_22025 = (state_22045[(8)]);
var inst_22024__$1 = (state_22045[(2)]);
var inst_22025__$1 = cljs.core.nth.call(null,inst_22024__$1,(0),null);
var inst_22026 = cljs.core.nth.call(null,inst_22024__$1,(1),null);
var inst_22027 = (inst_22025__$1 == null);
var state_22045__$1 = (function (){var statearr_22047 = state_22045;
(statearr_22047[(9)] = inst_22026);

(statearr_22047[(7)] = inst_22024__$1);

(statearr_22047[(8)] = inst_22025__$1);

return statearr_22047;
})();
if(cljs.core.truth_(inst_22027)){
var statearr_22048_22070 = state_22045__$1;
(statearr_22048_22070[(1)] = (8));

} else {
var statearr_22049_22071 = state_22045__$1;
(statearr_22049_22071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22046 === (1))){
var inst_22016 = cljs.core.vec.call(null,chs);
var inst_22017 = inst_22016;
var state_22045__$1 = (function (){var statearr_22050 = state_22045;
(statearr_22050[(10)] = inst_22017);

return statearr_22050;
})();
var statearr_22051_22072 = state_22045__$1;
(statearr_22051_22072[(2)] = null);

(statearr_22051_22072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22046 === (4))){
var inst_22017 = (state_22045[(10)]);
var state_22045__$1 = state_22045;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22045__$1,(7),inst_22017);
} else {
if((state_val_22046 === (6))){
var inst_22041 = (state_22045[(2)]);
var state_22045__$1 = state_22045;
var statearr_22052_22073 = state_22045__$1;
(statearr_22052_22073[(2)] = inst_22041);

(statearr_22052_22073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22046 === (3))){
var inst_22043 = (state_22045[(2)]);
var state_22045__$1 = state_22045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22045__$1,inst_22043);
} else {
if((state_val_22046 === (2))){
var inst_22017 = (state_22045[(10)]);
var inst_22019 = cljs.core.count.call(null,inst_22017);
var inst_22020 = (inst_22019 > (0));
var state_22045__$1 = state_22045;
if(cljs.core.truth_(inst_22020)){
var statearr_22054_22074 = state_22045__$1;
(statearr_22054_22074[(1)] = (4));

} else {
var statearr_22055_22075 = state_22045__$1;
(statearr_22055_22075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22046 === (11))){
var inst_22017 = (state_22045[(10)]);
var inst_22034 = (state_22045[(2)]);
var tmp22053 = inst_22017;
var inst_22017__$1 = tmp22053;
var state_22045__$1 = (function (){var statearr_22056 = state_22045;
(statearr_22056[(10)] = inst_22017__$1);

(statearr_22056[(11)] = inst_22034);

return statearr_22056;
})();
var statearr_22057_22076 = state_22045__$1;
(statearr_22057_22076[(2)] = null);

(statearr_22057_22076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22046 === (9))){
var inst_22025 = (state_22045[(8)]);
var state_22045__$1 = state_22045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22045__$1,(11),out,inst_22025);
} else {
if((state_val_22046 === (5))){
var inst_22039 = cljs.core.async.close_BANG_.call(null,out);
var state_22045__$1 = state_22045;
var statearr_22058_22077 = state_22045__$1;
(statearr_22058_22077[(2)] = inst_22039);

(statearr_22058_22077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22046 === (10))){
var inst_22037 = (state_22045[(2)]);
var state_22045__$1 = state_22045;
var statearr_22059_22078 = state_22045__$1;
(statearr_22059_22078[(2)] = inst_22037);

(statearr_22059_22078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22046 === (8))){
var inst_22017 = (state_22045[(10)]);
var inst_22026 = (state_22045[(9)]);
var inst_22024 = (state_22045[(7)]);
var inst_22025 = (state_22045[(8)]);
var inst_22029 = (function (){var c = inst_22026;
var v = inst_22025;
var vec__22022 = inst_22024;
var cs = inst_22017;
return ((function (c,v,vec__22022,cs,inst_22017,inst_22026,inst_22024,inst_22025,state_val_22046,c__6714__auto___22069,out){
return (function (p1__21962_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21962_SHARP_);
});
;})(c,v,vec__22022,cs,inst_22017,inst_22026,inst_22024,inst_22025,state_val_22046,c__6714__auto___22069,out))
})();
var inst_22030 = cljs.core.filterv.call(null,inst_22029,inst_22017);
var inst_22017__$1 = inst_22030;
var state_22045__$1 = (function (){var statearr_22060 = state_22045;
(statearr_22060[(10)] = inst_22017__$1);

return statearr_22060;
})();
var statearr_22061_22079 = state_22045__$1;
(statearr_22061_22079[(2)] = null);

(statearr_22061_22079[(1)] = (2));


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
});})(c__6714__auto___22069,out))
;
return ((function (switch__6699__auto__,c__6714__auto___22069,out){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_22065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22065[(0)] = state_machine__6700__auto__);

(statearr_22065[(1)] = (1));

return statearr_22065;
});
var state_machine__6700__auto____1 = (function (state_22045){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_22045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e22066){if((e22066 instanceof Object)){
var ex__6703__auto__ = e22066;
var statearr_22067_22080 = state_22045;
(statearr_22067_22080[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22081 = state_22045;
state_22045 = G__22081;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_22045){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_22045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___22069,out))
})();
var state__6716__auto__ = (function (){var statearr_22068 = f__6715__auto__.call(null);
(statearr_22068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___22069);

return statearr_22068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___22069,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6714__auto___22174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___22174,out){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___22174,out){
return (function (state_22151){
var state_val_22152 = (state_22151[(1)]);
if((state_val_22152 === (7))){
var inst_22133 = (state_22151[(7)]);
var inst_22133__$1 = (state_22151[(2)]);
var inst_22134 = (inst_22133__$1 == null);
var inst_22135 = cljs.core.not.call(null,inst_22134);
var state_22151__$1 = (function (){var statearr_22153 = state_22151;
(statearr_22153[(7)] = inst_22133__$1);

return statearr_22153;
})();
if(inst_22135){
var statearr_22154_22175 = state_22151__$1;
(statearr_22154_22175[(1)] = (8));

} else {
var statearr_22155_22176 = state_22151__$1;
(statearr_22155_22176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (1))){
var inst_22128 = (0);
var state_22151__$1 = (function (){var statearr_22156 = state_22151;
(statearr_22156[(8)] = inst_22128);

return statearr_22156;
})();
var statearr_22157_22177 = state_22151__$1;
(statearr_22157_22177[(2)] = null);

(statearr_22157_22177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (4))){
var state_22151__$1 = state_22151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22151__$1,(7),ch);
} else {
if((state_val_22152 === (6))){
var inst_22146 = (state_22151[(2)]);
var state_22151__$1 = state_22151;
var statearr_22158_22178 = state_22151__$1;
(statearr_22158_22178[(2)] = inst_22146);

(statearr_22158_22178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (3))){
var inst_22148 = (state_22151[(2)]);
var inst_22149 = cljs.core.async.close_BANG_.call(null,out);
var state_22151__$1 = (function (){var statearr_22159 = state_22151;
(statearr_22159[(9)] = inst_22148);

return statearr_22159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22151__$1,inst_22149);
} else {
if((state_val_22152 === (2))){
var inst_22128 = (state_22151[(8)]);
var inst_22130 = (inst_22128 < n);
var state_22151__$1 = state_22151;
if(cljs.core.truth_(inst_22130)){
var statearr_22160_22179 = state_22151__$1;
(statearr_22160_22179[(1)] = (4));

} else {
var statearr_22161_22180 = state_22151__$1;
(statearr_22161_22180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (11))){
var inst_22128 = (state_22151[(8)]);
var inst_22138 = (state_22151[(2)]);
var inst_22139 = (inst_22128 + (1));
var inst_22128__$1 = inst_22139;
var state_22151__$1 = (function (){var statearr_22162 = state_22151;
(statearr_22162[(8)] = inst_22128__$1);

(statearr_22162[(10)] = inst_22138);

return statearr_22162;
})();
var statearr_22163_22181 = state_22151__$1;
(statearr_22163_22181[(2)] = null);

(statearr_22163_22181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (9))){
var state_22151__$1 = state_22151;
var statearr_22164_22182 = state_22151__$1;
(statearr_22164_22182[(2)] = null);

(statearr_22164_22182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (5))){
var state_22151__$1 = state_22151;
var statearr_22165_22183 = state_22151__$1;
(statearr_22165_22183[(2)] = null);

(statearr_22165_22183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (10))){
var inst_22143 = (state_22151[(2)]);
var state_22151__$1 = state_22151;
var statearr_22166_22184 = state_22151__$1;
(statearr_22166_22184[(2)] = inst_22143);

(statearr_22166_22184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22152 === (8))){
var inst_22133 = (state_22151[(7)]);
var state_22151__$1 = state_22151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22151__$1,(11),out,inst_22133);
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
});})(c__6714__auto___22174,out))
;
return ((function (switch__6699__auto__,c__6714__auto___22174,out){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_22170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22170[(0)] = state_machine__6700__auto__);

(statearr_22170[(1)] = (1));

return statearr_22170;
});
var state_machine__6700__auto____1 = (function (state_22151){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_22151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e22171){if((e22171 instanceof Object)){
var ex__6703__auto__ = e22171;
var statearr_22172_22185 = state_22151;
(statearr_22172_22185[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22186 = state_22151;
state_22151 = G__22186;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_22151){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_22151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___22174,out))
})();
var state__6716__auto__ = (function (){var statearr_22173 = f__6715__auto__.call(null);
(statearr_22173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___22174);

return statearr_22173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___22174,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t22194 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22194 = (function (ch,f,map_LT_,meta22195){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22195 = meta22195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22197 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22197 = (function (fn1,_,meta22195,map_LT_,f,ch,meta22198){
this.fn1 = fn1;
this._ = _;
this.meta22195 = meta22195;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22198 = meta22198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22197.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22187_SHARP_){
return f1.call(null,(((p1__22187_SHARP_ == null))?null:self__.f.call(null,p1__22187_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22199){
var self__ = this;
var _22199__$1 = this;
return self__.meta22198;
});})(___$1))
;

cljs.core.async.t22197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22199,meta22198__$1){
var self__ = this;
var _22199__$1 = this;
return (new cljs.core.async.t22197(self__.fn1,self__._,self__.meta22195,self__.map_LT_,self__.f,self__.ch,meta22198__$1));
});})(___$1))
;

cljs.core.async.t22197.cljs$lang$type = true;

cljs.core.async.t22197.cljs$lang$ctorStr = "cljs.core.async/t22197";

cljs.core.async.t22197.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22197");
});})(___$1))
;

cljs.core.async.__GT_t22197 = ((function (___$1){
return (function __GT_t22197(fn1__$1,___$2,meta22195__$1,map_LT___$1,f__$1,ch__$1,meta22198){
return (new cljs.core.async.t22197(fn1__$1,___$2,meta22195__$1,map_LT___$1,f__$1,ch__$1,meta22198));
});})(___$1))
;

}

return (new cljs.core.async.t22197(fn1,___$1,self__.meta22195,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3749__auto__ = ret;
if(cljs.core.truth_(and__3749__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3749__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22196){
var self__ = this;
var _22196__$1 = this;
return self__.meta22195;
});

cljs.core.async.t22194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22196,meta22195__$1){
var self__ = this;
var _22196__$1 = this;
return (new cljs.core.async.t22194(self__.ch,self__.f,self__.map_LT_,meta22195__$1));
});

cljs.core.async.t22194.cljs$lang$type = true;

cljs.core.async.t22194.cljs$lang$ctorStr = "cljs.core.async/t22194";

cljs.core.async.t22194.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22194");
});

cljs.core.async.__GT_t22194 = (function __GT_t22194(ch__$1,f__$1,map_LT___$1,meta22195){
return (new cljs.core.async.t22194(ch__$1,f__$1,map_LT___$1,meta22195));
});

}

return (new cljs.core.async.t22194(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22203 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22203 = (function (ch,f,map_GT_,meta22204){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22204 = meta22204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22205){
var self__ = this;
var _22205__$1 = this;
return self__.meta22204;
});

cljs.core.async.t22203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22205,meta22204__$1){
var self__ = this;
var _22205__$1 = this;
return (new cljs.core.async.t22203(self__.ch,self__.f,self__.map_GT_,meta22204__$1));
});

cljs.core.async.t22203.cljs$lang$type = true;

cljs.core.async.t22203.cljs$lang$ctorStr = "cljs.core.async/t22203";

cljs.core.async.t22203.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22203");
});

cljs.core.async.__GT_t22203 = (function __GT_t22203(ch__$1,f__$1,map_GT___$1,meta22204){
return (new cljs.core.async.t22203(ch__$1,f__$1,map_GT___$1,meta22204));
});

}

return (new cljs.core.async.t22203(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22209 = (function (ch,p,filter_GT_,meta22210){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22210 = meta22210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22211){
var self__ = this;
var _22211__$1 = this;
return self__.meta22210;
});

cljs.core.async.t22209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22211,meta22210__$1){
var self__ = this;
var _22211__$1 = this;
return (new cljs.core.async.t22209(self__.ch,self__.p,self__.filter_GT_,meta22210__$1));
});

cljs.core.async.t22209.cljs$lang$type = true;

cljs.core.async.t22209.cljs$lang$ctorStr = "cljs.core.async/t22209";

cljs.core.async.t22209.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22209");
});

cljs.core.async.__GT_t22209 = (function __GT_t22209(ch__$1,p__$1,filter_GT___$1,meta22210){
return (new cljs.core.async.t22209(ch__$1,p__$1,filter_GT___$1,meta22210));
});

}

return (new cljs.core.async.t22209(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6714__auto___22294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___22294,out){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___22294,out){
return (function (state_22273){
var state_val_22274 = (state_22273[(1)]);
if((state_val_22274 === (7))){
var inst_22269 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22275_22295 = state_22273__$1;
(statearr_22275_22295[(2)] = inst_22269);

(statearr_22275_22295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (1))){
var state_22273__$1 = state_22273;
var statearr_22276_22296 = state_22273__$1;
(statearr_22276_22296[(2)] = null);

(statearr_22276_22296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (4))){
var inst_22255 = (state_22273[(7)]);
var inst_22255__$1 = (state_22273[(2)]);
var inst_22256 = (inst_22255__$1 == null);
var state_22273__$1 = (function (){var statearr_22277 = state_22273;
(statearr_22277[(7)] = inst_22255__$1);

return statearr_22277;
})();
if(cljs.core.truth_(inst_22256)){
var statearr_22278_22297 = state_22273__$1;
(statearr_22278_22297[(1)] = (5));

} else {
var statearr_22279_22298 = state_22273__$1;
(statearr_22279_22298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (6))){
var inst_22255 = (state_22273[(7)]);
var inst_22260 = p.call(null,inst_22255);
var state_22273__$1 = state_22273;
if(cljs.core.truth_(inst_22260)){
var statearr_22280_22299 = state_22273__$1;
(statearr_22280_22299[(1)] = (8));

} else {
var statearr_22281_22300 = state_22273__$1;
(statearr_22281_22300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (3))){
var inst_22271 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22273__$1,inst_22271);
} else {
if((state_val_22274 === (2))){
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22273__$1,(4),ch);
} else {
if((state_val_22274 === (11))){
var inst_22263 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22282_22301 = state_22273__$1;
(statearr_22282_22301[(2)] = inst_22263);

(statearr_22282_22301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (9))){
var state_22273__$1 = state_22273;
var statearr_22283_22302 = state_22273__$1;
(statearr_22283_22302[(2)] = null);

(statearr_22283_22302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (5))){
var inst_22258 = cljs.core.async.close_BANG_.call(null,out);
var state_22273__$1 = state_22273;
var statearr_22284_22303 = state_22273__$1;
(statearr_22284_22303[(2)] = inst_22258);

(statearr_22284_22303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (10))){
var inst_22266 = (state_22273[(2)]);
var state_22273__$1 = (function (){var statearr_22285 = state_22273;
(statearr_22285[(8)] = inst_22266);

return statearr_22285;
})();
var statearr_22286_22304 = state_22273__$1;
(statearr_22286_22304[(2)] = null);

(statearr_22286_22304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (8))){
var inst_22255 = (state_22273[(7)]);
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22273__$1,(11),out,inst_22255);
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
});})(c__6714__auto___22294,out))
;
return ((function (switch__6699__auto__,c__6714__auto___22294,out){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_22290 = [null,null,null,null,null,null,null,null,null];
(statearr_22290[(0)] = state_machine__6700__auto__);

(statearr_22290[(1)] = (1));

return statearr_22290;
});
var state_machine__6700__auto____1 = (function (state_22273){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_22273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e22291){if((e22291 instanceof Object)){
var ex__6703__auto__ = e22291;
var statearr_22292_22305 = state_22273;
(statearr_22292_22305[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22306 = state_22273;
state_22273 = G__22306;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_22273){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_22273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___22294,out))
})();
var state__6716__auto__ = (function (){var statearr_22293 = f__6715__auto__.call(null);
(statearr_22293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___22294);

return statearr_22293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___22294,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto__){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto__){
return (function (state_22472){
var state_val_22473 = (state_22472[(1)]);
if((state_val_22473 === (7))){
var inst_22468 = (state_22472[(2)]);
var state_22472__$1 = state_22472;
var statearr_22474_22515 = state_22472__$1;
(statearr_22474_22515[(2)] = inst_22468);

(statearr_22474_22515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (20))){
var inst_22438 = (state_22472[(7)]);
var inst_22449 = (state_22472[(2)]);
var inst_22450 = cljs.core.next.call(null,inst_22438);
var inst_22424 = inst_22450;
var inst_22425 = null;
var inst_22426 = (0);
var inst_22427 = (0);
var state_22472__$1 = (function (){var statearr_22475 = state_22472;
(statearr_22475[(8)] = inst_22449);

(statearr_22475[(9)] = inst_22424);

(statearr_22475[(10)] = inst_22425);

(statearr_22475[(11)] = inst_22427);

(statearr_22475[(12)] = inst_22426);

return statearr_22475;
})();
var statearr_22476_22516 = state_22472__$1;
(statearr_22476_22516[(2)] = null);

(statearr_22476_22516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (1))){
var state_22472__$1 = state_22472;
var statearr_22477_22517 = state_22472__$1;
(statearr_22477_22517[(2)] = null);

(statearr_22477_22517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (4))){
var inst_22413 = (state_22472[(13)]);
var inst_22413__$1 = (state_22472[(2)]);
var inst_22414 = (inst_22413__$1 == null);
var state_22472__$1 = (function (){var statearr_22478 = state_22472;
(statearr_22478[(13)] = inst_22413__$1);

return statearr_22478;
})();
if(cljs.core.truth_(inst_22414)){
var statearr_22479_22518 = state_22472__$1;
(statearr_22479_22518[(1)] = (5));

} else {
var statearr_22480_22519 = state_22472__$1;
(statearr_22480_22519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (15))){
var state_22472__$1 = state_22472;
var statearr_22484_22520 = state_22472__$1;
(statearr_22484_22520[(2)] = null);

(statearr_22484_22520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (21))){
var state_22472__$1 = state_22472;
var statearr_22485_22521 = state_22472__$1;
(statearr_22485_22521[(2)] = null);

(statearr_22485_22521[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (13))){
var inst_22424 = (state_22472[(9)]);
var inst_22425 = (state_22472[(10)]);
var inst_22427 = (state_22472[(11)]);
var inst_22426 = (state_22472[(12)]);
var inst_22434 = (state_22472[(2)]);
var inst_22435 = (inst_22427 + (1));
var tmp22481 = inst_22424;
var tmp22482 = inst_22425;
var tmp22483 = inst_22426;
var inst_22424__$1 = tmp22481;
var inst_22425__$1 = tmp22482;
var inst_22426__$1 = tmp22483;
var inst_22427__$1 = inst_22435;
var state_22472__$1 = (function (){var statearr_22486 = state_22472;
(statearr_22486[(14)] = inst_22434);

(statearr_22486[(9)] = inst_22424__$1);

(statearr_22486[(10)] = inst_22425__$1);

(statearr_22486[(11)] = inst_22427__$1);

(statearr_22486[(12)] = inst_22426__$1);

return statearr_22486;
})();
var statearr_22487_22522 = state_22472__$1;
(statearr_22487_22522[(2)] = null);

(statearr_22487_22522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (22))){
var state_22472__$1 = state_22472;
var statearr_22488_22523 = state_22472__$1;
(statearr_22488_22523[(2)] = null);

(statearr_22488_22523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (6))){
var inst_22413 = (state_22472[(13)]);
var inst_22422 = f.call(null,inst_22413);
var inst_22423 = cljs.core.seq.call(null,inst_22422);
var inst_22424 = inst_22423;
var inst_22425 = null;
var inst_22426 = (0);
var inst_22427 = (0);
var state_22472__$1 = (function (){var statearr_22489 = state_22472;
(statearr_22489[(9)] = inst_22424);

(statearr_22489[(10)] = inst_22425);

(statearr_22489[(11)] = inst_22427);

(statearr_22489[(12)] = inst_22426);

return statearr_22489;
})();
var statearr_22490_22524 = state_22472__$1;
(statearr_22490_22524[(2)] = null);

(statearr_22490_22524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (17))){
var inst_22438 = (state_22472[(7)]);
var inst_22442 = cljs.core.chunk_first.call(null,inst_22438);
var inst_22443 = cljs.core.chunk_rest.call(null,inst_22438);
var inst_22444 = cljs.core.count.call(null,inst_22442);
var inst_22424 = inst_22443;
var inst_22425 = inst_22442;
var inst_22426 = inst_22444;
var inst_22427 = (0);
var state_22472__$1 = (function (){var statearr_22491 = state_22472;
(statearr_22491[(9)] = inst_22424);

(statearr_22491[(10)] = inst_22425);

(statearr_22491[(11)] = inst_22427);

(statearr_22491[(12)] = inst_22426);

return statearr_22491;
})();
var statearr_22492_22525 = state_22472__$1;
(statearr_22492_22525[(2)] = null);

(statearr_22492_22525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (3))){
var inst_22470 = (state_22472[(2)]);
var state_22472__$1 = state_22472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22472__$1,inst_22470);
} else {
if((state_val_22473 === (12))){
var inst_22458 = (state_22472[(2)]);
var state_22472__$1 = state_22472;
var statearr_22493_22526 = state_22472__$1;
(statearr_22493_22526[(2)] = inst_22458);

(statearr_22493_22526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (2))){
var state_22472__$1 = state_22472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22472__$1,(4),in$);
} else {
if((state_val_22473 === (23))){
var inst_22466 = (state_22472[(2)]);
var state_22472__$1 = state_22472;
var statearr_22494_22527 = state_22472__$1;
(statearr_22494_22527[(2)] = inst_22466);

(statearr_22494_22527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (19))){
var inst_22453 = (state_22472[(2)]);
var state_22472__$1 = state_22472;
var statearr_22495_22528 = state_22472__$1;
(statearr_22495_22528[(2)] = inst_22453);

(statearr_22495_22528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (11))){
var inst_22424 = (state_22472[(9)]);
var inst_22438 = (state_22472[(7)]);
var inst_22438__$1 = cljs.core.seq.call(null,inst_22424);
var state_22472__$1 = (function (){var statearr_22496 = state_22472;
(statearr_22496[(7)] = inst_22438__$1);

return statearr_22496;
})();
if(inst_22438__$1){
var statearr_22497_22529 = state_22472__$1;
(statearr_22497_22529[(1)] = (14));

} else {
var statearr_22498_22530 = state_22472__$1;
(statearr_22498_22530[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (9))){
var inst_22460 = (state_22472[(2)]);
var inst_22461 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22472__$1 = (function (){var statearr_22499 = state_22472;
(statearr_22499[(15)] = inst_22460);

return statearr_22499;
})();
if(cljs.core.truth_(inst_22461)){
var statearr_22500_22531 = state_22472__$1;
(statearr_22500_22531[(1)] = (21));

} else {
var statearr_22501_22532 = state_22472__$1;
(statearr_22501_22532[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (5))){
var inst_22416 = cljs.core.async.close_BANG_.call(null,out);
var state_22472__$1 = state_22472;
var statearr_22502_22533 = state_22472__$1;
(statearr_22502_22533[(2)] = inst_22416);

(statearr_22502_22533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (14))){
var inst_22438 = (state_22472[(7)]);
var inst_22440 = cljs.core.chunked_seq_QMARK_.call(null,inst_22438);
var state_22472__$1 = state_22472;
if(inst_22440){
var statearr_22503_22534 = state_22472__$1;
(statearr_22503_22534[(1)] = (17));

} else {
var statearr_22504_22535 = state_22472__$1;
(statearr_22504_22535[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (16))){
var inst_22456 = (state_22472[(2)]);
var state_22472__$1 = state_22472;
var statearr_22505_22536 = state_22472__$1;
(statearr_22505_22536[(2)] = inst_22456);

(statearr_22505_22536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22473 === (10))){
var inst_22425 = (state_22472[(10)]);
var inst_22427 = (state_22472[(11)]);
var inst_22432 = cljs.core._nth.call(null,inst_22425,inst_22427);
var state_22472__$1 = state_22472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22472__$1,(13),out,inst_22432);
} else {
if((state_val_22473 === (18))){
var inst_22438 = (state_22472[(7)]);
var inst_22447 = cljs.core.first.call(null,inst_22438);
var state_22472__$1 = state_22472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22472__$1,(20),out,inst_22447);
} else {
if((state_val_22473 === (8))){
var inst_22427 = (state_22472[(11)]);
var inst_22426 = (state_22472[(12)]);
var inst_22429 = (inst_22427 < inst_22426);
var inst_22430 = inst_22429;
var state_22472__$1 = state_22472;
if(cljs.core.truth_(inst_22430)){
var statearr_22506_22537 = state_22472__$1;
(statearr_22506_22537[(1)] = (10));

} else {
var statearr_22507_22538 = state_22472__$1;
(statearr_22507_22538[(1)] = (11));

}

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
});})(c__6714__auto__))
;
return ((function (switch__6699__auto__,c__6714__auto__){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_22511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22511[(0)] = state_machine__6700__auto__);

(statearr_22511[(1)] = (1));

return statearr_22511;
});
var state_machine__6700__auto____1 = (function (state_22472){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_22472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e22512){if((e22512 instanceof Object)){
var ex__6703__auto__ = e22512;
var statearr_22513_22539 = state_22472;
(statearr_22513_22539[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22540 = state_22472;
state_22472 = G__22540;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_22472){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_22472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto__))
})();
var state__6716__auto__ = (function (){var statearr_22514 = f__6715__auto__.call(null);
(statearr_22514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto__);

return statearr_22514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto__))
);

return c__6714__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6714__auto___22637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___22637,out){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___22637,out){
return (function (state_22612){
var state_val_22613 = (state_22612[(1)]);
if((state_val_22613 === (7))){
var inst_22607 = (state_22612[(2)]);
var state_22612__$1 = state_22612;
var statearr_22614_22638 = state_22612__$1;
(statearr_22614_22638[(2)] = inst_22607);

(statearr_22614_22638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22613 === (1))){
var inst_22589 = null;
var state_22612__$1 = (function (){var statearr_22615 = state_22612;
(statearr_22615[(7)] = inst_22589);

return statearr_22615;
})();
var statearr_22616_22639 = state_22612__$1;
(statearr_22616_22639[(2)] = null);

(statearr_22616_22639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22613 === (4))){
var inst_22592 = (state_22612[(8)]);
var inst_22592__$1 = (state_22612[(2)]);
var inst_22593 = (inst_22592__$1 == null);
var inst_22594 = cljs.core.not.call(null,inst_22593);
var state_22612__$1 = (function (){var statearr_22617 = state_22612;
(statearr_22617[(8)] = inst_22592__$1);

return statearr_22617;
})();
if(inst_22594){
var statearr_22618_22640 = state_22612__$1;
(statearr_22618_22640[(1)] = (5));

} else {
var statearr_22619_22641 = state_22612__$1;
(statearr_22619_22641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22613 === (6))){
var state_22612__$1 = state_22612;
var statearr_22620_22642 = state_22612__$1;
(statearr_22620_22642[(2)] = null);

(statearr_22620_22642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22613 === (3))){
var inst_22609 = (state_22612[(2)]);
var inst_22610 = cljs.core.async.close_BANG_.call(null,out);
var state_22612__$1 = (function (){var statearr_22621 = state_22612;
(statearr_22621[(9)] = inst_22609);

return statearr_22621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22612__$1,inst_22610);
} else {
if((state_val_22613 === (2))){
var state_22612__$1 = state_22612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22612__$1,(4),ch);
} else {
if((state_val_22613 === (11))){
var inst_22592 = (state_22612[(8)]);
var inst_22601 = (state_22612[(2)]);
var inst_22589 = inst_22592;
var state_22612__$1 = (function (){var statearr_22622 = state_22612;
(statearr_22622[(10)] = inst_22601);

(statearr_22622[(7)] = inst_22589);

return statearr_22622;
})();
var statearr_22623_22643 = state_22612__$1;
(statearr_22623_22643[(2)] = null);

(statearr_22623_22643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22613 === (9))){
var inst_22592 = (state_22612[(8)]);
var state_22612__$1 = state_22612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22612__$1,(11),out,inst_22592);
} else {
if((state_val_22613 === (5))){
var inst_22592 = (state_22612[(8)]);
var inst_22589 = (state_22612[(7)]);
var inst_22596 = cljs.core._EQ_.call(null,inst_22592,inst_22589);
var state_22612__$1 = state_22612;
if(inst_22596){
var statearr_22625_22644 = state_22612__$1;
(statearr_22625_22644[(1)] = (8));

} else {
var statearr_22626_22645 = state_22612__$1;
(statearr_22626_22645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22613 === (10))){
var inst_22604 = (state_22612[(2)]);
var state_22612__$1 = state_22612;
var statearr_22627_22646 = state_22612__$1;
(statearr_22627_22646[(2)] = inst_22604);

(statearr_22627_22646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22613 === (8))){
var inst_22589 = (state_22612[(7)]);
var tmp22624 = inst_22589;
var inst_22589__$1 = tmp22624;
var state_22612__$1 = (function (){var statearr_22628 = state_22612;
(statearr_22628[(7)] = inst_22589__$1);

return statearr_22628;
})();
var statearr_22629_22647 = state_22612__$1;
(statearr_22629_22647[(2)] = null);

(statearr_22629_22647[(1)] = (2));


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
});})(c__6714__auto___22637,out))
;
return ((function (switch__6699__auto__,c__6714__auto___22637,out){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_22633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22633[(0)] = state_machine__6700__auto__);

(statearr_22633[(1)] = (1));

return statearr_22633;
});
var state_machine__6700__auto____1 = (function (state_22612){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_22612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e22634){if((e22634 instanceof Object)){
var ex__6703__auto__ = e22634;
var statearr_22635_22648 = state_22612;
(statearr_22635_22648[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22649 = state_22612;
state_22612 = G__22649;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_22612){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_22612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___22637,out))
})();
var state__6716__auto__ = (function (){var statearr_22636 = f__6715__auto__.call(null);
(statearr_22636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___22637);

return statearr_22636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___22637,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6714__auto___22784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___22784,out){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___22784,out){
return (function (state_22754){
var state_val_22755 = (state_22754[(1)]);
if((state_val_22755 === (7))){
var inst_22750 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22756_22785 = state_22754__$1;
(statearr_22756_22785[(2)] = inst_22750);

(statearr_22756_22785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (1))){
var inst_22717 = (new Array(n));
var inst_22718 = inst_22717;
var inst_22719 = (0);
var state_22754__$1 = (function (){var statearr_22757 = state_22754;
(statearr_22757[(7)] = inst_22718);

(statearr_22757[(8)] = inst_22719);

return statearr_22757;
})();
var statearr_22758_22786 = state_22754__$1;
(statearr_22758_22786[(2)] = null);

(statearr_22758_22786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (4))){
var inst_22722 = (state_22754[(9)]);
var inst_22722__$1 = (state_22754[(2)]);
var inst_22723 = (inst_22722__$1 == null);
var inst_22724 = cljs.core.not.call(null,inst_22723);
var state_22754__$1 = (function (){var statearr_22759 = state_22754;
(statearr_22759[(9)] = inst_22722__$1);

return statearr_22759;
})();
if(inst_22724){
var statearr_22760_22787 = state_22754__$1;
(statearr_22760_22787[(1)] = (5));

} else {
var statearr_22761_22788 = state_22754__$1;
(statearr_22761_22788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (15))){
var inst_22744 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22762_22789 = state_22754__$1;
(statearr_22762_22789[(2)] = inst_22744);

(statearr_22762_22789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (13))){
var state_22754__$1 = state_22754;
var statearr_22763_22790 = state_22754__$1;
(statearr_22763_22790[(2)] = null);

(statearr_22763_22790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (6))){
var inst_22719 = (state_22754[(8)]);
var inst_22740 = (inst_22719 > (0));
var state_22754__$1 = state_22754;
if(cljs.core.truth_(inst_22740)){
var statearr_22764_22791 = state_22754__$1;
(statearr_22764_22791[(1)] = (12));

} else {
var statearr_22765_22792 = state_22754__$1;
(statearr_22765_22792[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (3))){
var inst_22752 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22754__$1,inst_22752);
} else {
if((state_val_22755 === (12))){
var inst_22718 = (state_22754[(7)]);
var inst_22742 = cljs.core.vec.call(null,inst_22718);
var state_22754__$1 = state_22754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22754__$1,(15),out,inst_22742);
} else {
if((state_val_22755 === (2))){
var state_22754__$1 = state_22754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22754__$1,(4),ch);
} else {
if((state_val_22755 === (11))){
var inst_22734 = (state_22754[(2)]);
var inst_22735 = (new Array(n));
var inst_22718 = inst_22735;
var inst_22719 = (0);
var state_22754__$1 = (function (){var statearr_22766 = state_22754;
(statearr_22766[(10)] = inst_22734);

(statearr_22766[(7)] = inst_22718);

(statearr_22766[(8)] = inst_22719);

return statearr_22766;
})();
var statearr_22767_22793 = state_22754__$1;
(statearr_22767_22793[(2)] = null);

(statearr_22767_22793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (9))){
var inst_22718 = (state_22754[(7)]);
var inst_22732 = cljs.core.vec.call(null,inst_22718);
var state_22754__$1 = state_22754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22754__$1,(11),out,inst_22732);
} else {
if((state_val_22755 === (5))){
var inst_22718 = (state_22754[(7)]);
var inst_22722 = (state_22754[(9)]);
var inst_22727 = (state_22754[(11)]);
var inst_22719 = (state_22754[(8)]);
var inst_22726 = (inst_22718[inst_22719] = inst_22722);
var inst_22727__$1 = (inst_22719 + (1));
var inst_22728 = (inst_22727__$1 < n);
var state_22754__$1 = (function (){var statearr_22768 = state_22754;
(statearr_22768[(12)] = inst_22726);

(statearr_22768[(11)] = inst_22727__$1);

return statearr_22768;
})();
if(cljs.core.truth_(inst_22728)){
var statearr_22769_22794 = state_22754__$1;
(statearr_22769_22794[(1)] = (8));

} else {
var statearr_22770_22795 = state_22754__$1;
(statearr_22770_22795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (14))){
var inst_22747 = (state_22754[(2)]);
var inst_22748 = cljs.core.async.close_BANG_.call(null,out);
var state_22754__$1 = (function (){var statearr_22772 = state_22754;
(statearr_22772[(13)] = inst_22747);

return statearr_22772;
})();
var statearr_22773_22796 = state_22754__$1;
(statearr_22773_22796[(2)] = inst_22748);

(statearr_22773_22796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (10))){
var inst_22738 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22774_22797 = state_22754__$1;
(statearr_22774_22797[(2)] = inst_22738);

(statearr_22774_22797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (8))){
var inst_22718 = (state_22754[(7)]);
var inst_22727 = (state_22754[(11)]);
var tmp22771 = inst_22718;
var inst_22718__$1 = tmp22771;
var inst_22719 = inst_22727;
var state_22754__$1 = (function (){var statearr_22775 = state_22754;
(statearr_22775[(7)] = inst_22718__$1);

(statearr_22775[(8)] = inst_22719);

return statearr_22775;
})();
var statearr_22776_22798 = state_22754__$1;
(statearr_22776_22798[(2)] = null);

(statearr_22776_22798[(1)] = (2));


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
});})(c__6714__auto___22784,out))
;
return ((function (switch__6699__auto__,c__6714__auto___22784,out){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_22780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22780[(0)] = state_machine__6700__auto__);

(statearr_22780[(1)] = (1));

return statearr_22780;
});
var state_machine__6700__auto____1 = (function (state_22754){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_22754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e22781){if((e22781 instanceof Object)){
var ex__6703__auto__ = e22781;
var statearr_22782_22799 = state_22754;
(statearr_22782_22799[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22800 = state_22754;
state_22754 = G__22800;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_22754){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_22754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___22784,out))
})();
var state__6716__auto__ = (function (){var statearr_22783 = f__6715__auto__.call(null);
(statearr_22783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___22784);

return statearr_22783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___22784,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6714__auto___22943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6714__auto___22943,out){
return (function (){
var f__6715__auto__ = (function (){var switch__6699__auto__ = ((function (c__6714__auto___22943,out){
return (function (state_22913){
var state_val_22914 = (state_22913[(1)]);
if((state_val_22914 === (7))){
var inst_22909 = (state_22913[(2)]);
var state_22913__$1 = state_22913;
var statearr_22915_22944 = state_22913__$1;
(statearr_22915_22944[(2)] = inst_22909);

(statearr_22915_22944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (1))){
var inst_22872 = [];
var inst_22873 = inst_22872;
var inst_22874 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22913__$1 = (function (){var statearr_22916 = state_22913;
(statearr_22916[(7)] = inst_22874);

(statearr_22916[(8)] = inst_22873);

return statearr_22916;
})();
var statearr_22917_22945 = state_22913__$1;
(statearr_22917_22945[(2)] = null);

(statearr_22917_22945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (4))){
var inst_22877 = (state_22913[(9)]);
var inst_22877__$1 = (state_22913[(2)]);
var inst_22878 = (inst_22877__$1 == null);
var inst_22879 = cljs.core.not.call(null,inst_22878);
var state_22913__$1 = (function (){var statearr_22918 = state_22913;
(statearr_22918[(9)] = inst_22877__$1);

return statearr_22918;
})();
if(inst_22879){
var statearr_22919_22946 = state_22913__$1;
(statearr_22919_22946[(1)] = (5));

} else {
var statearr_22920_22947 = state_22913__$1;
(statearr_22920_22947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (15))){
var inst_22903 = (state_22913[(2)]);
var state_22913__$1 = state_22913;
var statearr_22921_22948 = state_22913__$1;
(statearr_22921_22948[(2)] = inst_22903);

(statearr_22921_22948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (13))){
var state_22913__$1 = state_22913;
var statearr_22922_22949 = state_22913__$1;
(statearr_22922_22949[(2)] = null);

(statearr_22922_22949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (6))){
var inst_22873 = (state_22913[(8)]);
var inst_22898 = inst_22873.length;
var inst_22899 = (inst_22898 > (0));
var state_22913__$1 = state_22913;
if(cljs.core.truth_(inst_22899)){
var statearr_22923_22950 = state_22913__$1;
(statearr_22923_22950[(1)] = (12));

} else {
var statearr_22924_22951 = state_22913__$1;
(statearr_22924_22951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (3))){
var inst_22911 = (state_22913[(2)]);
var state_22913__$1 = state_22913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22913__$1,inst_22911);
} else {
if((state_val_22914 === (12))){
var inst_22873 = (state_22913[(8)]);
var inst_22901 = cljs.core.vec.call(null,inst_22873);
var state_22913__$1 = state_22913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22913__$1,(15),out,inst_22901);
} else {
if((state_val_22914 === (2))){
var state_22913__$1 = state_22913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22913__$1,(4),ch);
} else {
if((state_val_22914 === (11))){
var inst_22881 = (state_22913[(10)]);
var inst_22877 = (state_22913[(9)]);
var inst_22891 = (state_22913[(2)]);
var inst_22892 = [];
var inst_22893 = inst_22892.push(inst_22877);
var inst_22873 = inst_22892;
var inst_22874 = inst_22881;
var state_22913__$1 = (function (){var statearr_22925 = state_22913;
(statearr_22925[(11)] = inst_22893);

(statearr_22925[(7)] = inst_22874);

(statearr_22925[(8)] = inst_22873);

(statearr_22925[(12)] = inst_22891);

return statearr_22925;
})();
var statearr_22926_22952 = state_22913__$1;
(statearr_22926_22952[(2)] = null);

(statearr_22926_22952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (9))){
var inst_22873 = (state_22913[(8)]);
var inst_22889 = cljs.core.vec.call(null,inst_22873);
var state_22913__$1 = state_22913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22913__$1,(11),out,inst_22889);
} else {
if((state_val_22914 === (5))){
var inst_22881 = (state_22913[(10)]);
var inst_22877 = (state_22913[(9)]);
var inst_22874 = (state_22913[(7)]);
var inst_22881__$1 = f.call(null,inst_22877);
var inst_22882 = cljs.core._EQ_.call(null,inst_22881__$1,inst_22874);
var inst_22883 = cljs.core.keyword_identical_QMARK_.call(null,inst_22874,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22884 = (inst_22882) || (inst_22883);
var state_22913__$1 = (function (){var statearr_22927 = state_22913;
(statearr_22927[(10)] = inst_22881__$1);

return statearr_22927;
})();
if(cljs.core.truth_(inst_22884)){
var statearr_22928_22953 = state_22913__$1;
(statearr_22928_22953[(1)] = (8));

} else {
var statearr_22929_22954 = state_22913__$1;
(statearr_22929_22954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (14))){
var inst_22906 = (state_22913[(2)]);
var inst_22907 = cljs.core.async.close_BANG_.call(null,out);
var state_22913__$1 = (function (){var statearr_22931 = state_22913;
(statearr_22931[(13)] = inst_22906);

return statearr_22931;
})();
var statearr_22932_22955 = state_22913__$1;
(statearr_22932_22955[(2)] = inst_22907);

(statearr_22932_22955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (10))){
var inst_22896 = (state_22913[(2)]);
var state_22913__$1 = state_22913;
var statearr_22933_22956 = state_22913__$1;
(statearr_22933_22956[(2)] = inst_22896);

(statearr_22933_22956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22914 === (8))){
var inst_22881 = (state_22913[(10)]);
var inst_22877 = (state_22913[(9)]);
var inst_22873 = (state_22913[(8)]);
var inst_22886 = inst_22873.push(inst_22877);
var tmp22930 = inst_22873;
var inst_22873__$1 = tmp22930;
var inst_22874 = inst_22881;
var state_22913__$1 = (function (){var statearr_22934 = state_22913;
(statearr_22934[(7)] = inst_22874);

(statearr_22934[(8)] = inst_22873__$1);

(statearr_22934[(14)] = inst_22886);

return statearr_22934;
})();
var statearr_22935_22957 = state_22913__$1;
(statearr_22935_22957[(2)] = null);

(statearr_22935_22957[(1)] = (2));


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
});})(c__6714__auto___22943,out))
;
return ((function (switch__6699__auto__,c__6714__auto___22943,out){
return (function() {
var state_machine__6700__auto__ = null;
var state_machine__6700__auto____0 = (function (){
var statearr_22939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22939[(0)] = state_machine__6700__auto__);

(statearr_22939[(1)] = (1));

return statearr_22939;
});
var state_machine__6700__auto____1 = (function (state_22913){
while(true){
var ret_value__6701__auto__ = (function (){try{while(true){
var result__6702__auto__ = switch__6699__auto__.call(null,state_22913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6702__auto__;
}
break;
}
}catch (e22940){if((e22940 instanceof Object)){
var ex__6703__auto__ = e22940;
var statearr_22941_22958 = state_22913;
(statearr_22941_22958[(5)] = ex__6703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22959 = state_22913;
state_22913 = G__22959;
continue;
} else {
return ret_value__6701__auto__;
}
break;
}
});
state_machine__6700__auto__ = function(state_22913){
switch(arguments.length){
case 0:
return state_machine__6700__auto____0.call(this);
case 1:
return state_machine__6700__auto____1.call(this,state_22913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6700__auto____0;
state_machine__6700__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6700__auto____1;
return state_machine__6700__auto__;
})()
;})(switch__6699__auto__,c__6714__auto___22943,out))
})();
var state__6716__auto__ = (function (){var statearr_22942 = f__6715__auto__.call(null);
(statearr_22942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6714__auto___22943);

return statearr_22942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6716__auto__);
});})(c__6714__auto___22943,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
