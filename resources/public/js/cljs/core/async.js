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
if(typeof cljs.core.async.t20677 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20677 = (function (f,fn_handler,meta20678){
this.f = f;
this.fn_handler = fn_handler;
this.meta20678 = meta20678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20677.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20679){
var self__ = this;
var _20679__$1 = this;
return self__.meta20678;
});

cljs.core.async.t20677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20679,meta20678__$1){
var self__ = this;
var _20679__$1 = this;
return (new cljs.core.async.t20677(self__.f,self__.fn_handler,meta20678__$1));
});

cljs.core.async.t20677.cljs$lang$type = true;

cljs.core.async.t20677.cljs$lang$ctorStr = "cljs.core.async/t20677";

cljs.core.async.t20677.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20677");
});

cljs.core.async.__GT_t20677 = (function __GT_t20677(f__$1,fn_handler__$1,meta20678){
return (new cljs.core.async.t20677(f__$1,fn_handler__$1,meta20678));
});

}

return (new cljs.core.async.t20677(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__20681 = buff;
if(G__20681){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__20681.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20681.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20681);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20681);
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
var val_20682 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20682);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20682,ret){
return (function (){
return fn1.call(null,val_20682);
});})(val_20682,ret))
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
var n__4643__auto___20683 = n;
var x_20684 = (0);
while(true){
if((x_20684 < n__4643__auto___20683)){
(a[x_20684] = (0));

var G__20685 = (x_20684 + (1));
x_20684 = G__20685;
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

var G__20686 = (i + (1));
i = G__20686;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20690 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20690 = (function (flag,alt_flag,meta20691){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20691 = meta20691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20690.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20692){
var self__ = this;
var _20692__$1 = this;
return self__.meta20691;
});})(flag))
;

cljs.core.async.t20690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20692,meta20691__$1){
var self__ = this;
var _20692__$1 = this;
return (new cljs.core.async.t20690(self__.flag,self__.alt_flag,meta20691__$1));
});})(flag))
;

cljs.core.async.t20690.cljs$lang$type = true;

cljs.core.async.t20690.cljs$lang$ctorStr = "cljs.core.async/t20690";

cljs.core.async.t20690.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20690");
});})(flag))
;

cljs.core.async.__GT_t20690 = ((function (flag){
return (function __GT_t20690(flag__$1,alt_flag__$1,meta20691){
return (new cljs.core.async.t20690(flag__$1,alt_flag__$1,meta20691));
});})(flag))
;

}

return (new cljs.core.async.t20690(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20696 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20696 = (function (cb,flag,alt_handler,meta20697){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20697 = meta20697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20696.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20698){
var self__ = this;
var _20698__$1 = this;
return self__.meta20697;
});

cljs.core.async.t20696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20698,meta20697__$1){
var self__ = this;
var _20698__$1 = this;
return (new cljs.core.async.t20696(self__.cb,self__.flag,self__.alt_handler,meta20697__$1));
});

cljs.core.async.t20696.cljs$lang$type = true;

cljs.core.async.t20696.cljs$lang$ctorStr = "cljs.core.async/t20696";

cljs.core.async.t20696.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20696");
});

cljs.core.async.__GT_t20696 = (function __GT_t20696(cb__$1,flag__$1,alt_handler__$1,meta20697){
return (new cljs.core.async.t20696(cb__$1,flag__$1,alt_handler__$1,meta20697));
});

}

return (new cljs.core.async.t20696(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__20699_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20699_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20700_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20700_SHARP_,port], null));
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
var G__20701 = (i + (1));
i = G__20701;
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
var alts_BANG___delegate = function (ports,p__20702){
var map__20704 = p__20702;
var map__20704__$1 = ((cljs.core.seq_QMARK_.call(null,map__20704))?cljs.core.apply.call(null,cljs.core.hash_map,map__20704):map__20704);
var opts = map__20704__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20702 = null;
if (arguments.length > 1) {
  p__20702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20702);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20705){
var ports = cljs.core.first(arglist__20705);
var p__20702 = cljs.core.rest(arglist__20705);
return alts_BANG___delegate(ports,p__20702);
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
var c__6720__auto___20800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___20800){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___20800){
return (function (state_20776){
var state_val_20777 = (state_20776[(1)]);
if((state_val_20777 === (7))){
var inst_20772 = (state_20776[(2)]);
var state_20776__$1 = state_20776;
var statearr_20778_20801 = state_20776__$1;
(statearr_20778_20801[(2)] = inst_20772);

(statearr_20778_20801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (1))){
var state_20776__$1 = state_20776;
var statearr_20779_20802 = state_20776__$1;
(statearr_20779_20802[(2)] = null);

(statearr_20779_20802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (4))){
var inst_20755 = (state_20776[(7)]);
var inst_20755__$1 = (state_20776[(2)]);
var inst_20756 = (inst_20755__$1 == null);
var state_20776__$1 = (function (){var statearr_20780 = state_20776;
(statearr_20780[(7)] = inst_20755__$1);

return statearr_20780;
})();
if(cljs.core.truth_(inst_20756)){
var statearr_20781_20803 = state_20776__$1;
(statearr_20781_20803[(1)] = (5));

} else {
var statearr_20782_20804 = state_20776__$1;
(statearr_20782_20804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (13))){
var state_20776__$1 = state_20776;
var statearr_20783_20805 = state_20776__$1;
(statearr_20783_20805[(2)] = null);

(statearr_20783_20805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (6))){
var inst_20755 = (state_20776[(7)]);
var state_20776__$1 = state_20776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20776__$1,(11),to,inst_20755);
} else {
if((state_val_20777 === (3))){
var inst_20774 = (state_20776[(2)]);
var state_20776__$1 = state_20776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20776__$1,inst_20774);
} else {
if((state_val_20777 === (12))){
var state_20776__$1 = state_20776;
var statearr_20784_20806 = state_20776__$1;
(statearr_20784_20806[(2)] = null);

(statearr_20784_20806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (2))){
var state_20776__$1 = state_20776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20776__$1,(4),from);
} else {
if((state_val_20777 === (11))){
var inst_20765 = (state_20776[(2)]);
var state_20776__$1 = state_20776;
if(cljs.core.truth_(inst_20765)){
var statearr_20785_20807 = state_20776__$1;
(statearr_20785_20807[(1)] = (12));

} else {
var statearr_20786_20808 = state_20776__$1;
(statearr_20786_20808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (9))){
var state_20776__$1 = state_20776;
var statearr_20787_20809 = state_20776__$1;
(statearr_20787_20809[(2)] = null);

(statearr_20787_20809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (5))){
var state_20776__$1 = state_20776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20788_20810 = state_20776__$1;
(statearr_20788_20810[(1)] = (8));

} else {
var statearr_20789_20811 = state_20776__$1;
(statearr_20789_20811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (14))){
var inst_20770 = (state_20776[(2)]);
var state_20776__$1 = state_20776;
var statearr_20790_20812 = state_20776__$1;
(statearr_20790_20812[(2)] = inst_20770);

(statearr_20790_20812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (10))){
var inst_20762 = (state_20776[(2)]);
var state_20776__$1 = state_20776;
var statearr_20791_20813 = state_20776__$1;
(statearr_20791_20813[(2)] = inst_20762);

(statearr_20791_20813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20777 === (8))){
var inst_20759 = cljs.core.async.close_BANG_.call(null,to);
var state_20776__$1 = state_20776;
var statearr_20792_20814 = state_20776__$1;
(statearr_20792_20814[(2)] = inst_20759);

(statearr_20792_20814[(1)] = (10));


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
});})(c__6720__auto___20800))
;
return ((function (switch__6664__auto__,c__6720__auto___20800){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_20796 = [null,null,null,null,null,null,null,null];
(statearr_20796[(0)] = state_machine__6665__auto__);

(statearr_20796[(1)] = (1));

return statearr_20796;
});
var state_machine__6665__auto____1 = (function (state_20776){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_20776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e20797){if((e20797 instanceof Object)){
var ex__6668__auto__ = e20797;
var statearr_20798_20815 = state_20776;
(statearr_20798_20815[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20816 = state_20776;
state_20776 = G__20816;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_20776){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_20776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___20800))
})();
var state__6722__auto__ = (function (){var statearr_20799 = f__6721__auto__.call(null);
(statearr_20799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___20800);

return statearr_20799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___20800))
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
return (function (p__21000){
var vec__21001 = p__21000;
var v = cljs.core.nth.call(null,vec__21001,(0),null);
var p = cljs.core.nth.call(null,vec__21001,(1),null);
var job = vec__21001;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6720__auto___21183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___21183,res,vec__21001,v,p,job,jobs,results){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___21183,res,vec__21001,v,p,job,jobs,results){
return (function (state_21006){
var state_val_21007 = (state_21006[(1)]);
if((state_val_21007 === (2))){
var inst_21003 = (state_21006[(2)]);
var inst_21004 = cljs.core.async.close_BANG_.call(null,res);
var state_21006__$1 = (function (){var statearr_21008 = state_21006;
(statearr_21008[(7)] = inst_21003);

return statearr_21008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21006__$1,inst_21004);
} else {
if((state_val_21007 === (1))){
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21006__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6720__auto___21183,res,vec__21001,v,p,job,jobs,results))
;
return ((function (switch__6664__auto__,c__6720__auto___21183,res,vec__21001,v,p,job,jobs,results){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21012 = [null,null,null,null,null,null,null,null];
(statearr_21012[(0)] = state_machine__6665__auto__);

(statearr_21012[(1)] = (1));

return statearr_21012;
});
var state_machine__6665__auto____1 = (function (state_21006){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21013){if((e21013 instanceof Object)){
var ex__6668__auto__ = e21013;
var statearr_21014_21184 = state_21006;
(statearr_21014_21184[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21185 = state_21006;
state_21006 = G__21185;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21006){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___21183,res,vec__21001,v,p,job,jobs,results))
})();
var state__6722__auto__ = (function (){var statearr_21015 = f__6721__auto__.call(null);
(statearr_21015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___21183);

return statearr_21015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___21183,res,vec__21001,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21016){
var vec__21017 = p__21016;
var v = cljs.core.nth.call(null,vec__21017,(0),null);
var p = cljs.core.nth.call(null,vec__21017,(1),null);
var job = vec__21017;
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
var n__4643__auto___21186 = n;
var __21187 = (0);
while(true){
if((__21187 < n__4643__auto___21186)){
var G__21018_21188 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21018_21188) {
case "async":
var c__6720__auto___21190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21187,c__6720__auto___21190,G__21018_21188,n__4643__auto___21186,jobs,results,process,async){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (__21187,c__6720__auto___21190,G__21018_21188,n__4643__auto___21186,jobs,results,process,async){
return (function (state_21031){
var state_val_21032 = (state_21031[(1)]);
if((state_val_21032 === (7))){
var inst_21027 = (state_21031[(2)]);
var state_21031__$1 = state_21031;
var statearr_21033_21191 = state_21031__$1;
(statearr_21033_21191[(2)] = inst_21027);

(statearr_21033_21191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21032 === (6))){
var state_21031__$1 = state_21031;
var statearr_21034_21192 = state_21031__$1;
(statearr_21034_21192[(2)] = null);

(statearr_21034_21192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21032 === (5))){
var state_21031__$1 = state_21031;
var statearr_21035_21193 = state_21031__$1;
(statearr_21035_21193[(2)] = null);

(statearr_21035_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21032 === (4))){
var inst_21021 = (state_21031[(2)]);
var inst_21022 = async.call(null,inst_21021);
var state_21031__$1 = state_21031;
if(cljs.core.truth_(inst_21022)){
var statearr_21036_21194 = state_21031__$1;
(statearr_21036_21194[(1)] = (5));

} else {
var statearr_21037_21195 = state_21031__$1;
(statearr_21037_21195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21032 === (3))){
var inst_21029 = (state_21031[(2)]);
var state_21031__$1 = state_21031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21031__$1,inst_21029);
} else {
if((state_val_21032 === (2))){
var state_21031__$1 = state_21031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21031__$1,(4),jobs);
} else {
if((state_val_21032 === (1))){
var state_21031__$1 = state_21031;
var statearr_21038_21196 = state_21031__$1;
(statearr_21038_21196[(2)] = null);

(statearr_21038_21196[(1)] = (2));


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
});})(__21187,c__6720__auto___21190,G__21018_21188,n__4643__auto___21186,jobs,results,process,async))
;
return ((function (__21187,switch__6664__auto__,c__6720__auto___21190,G__21018_21188,n__4643__auto___21186,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21042 = [null,null,null,null,null,null,null];
(statearr_21042[(0)] = state_machine__6665__auto__);

(statearr_21042[(1)] = (1));

return statearr_21042;
});
var state_machine__6665__auto____1 = (function (state_21031){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21043){if((e21043 instanceof Object)){
var ex__6668__auto__ = e21043;
var statearr_21044_21197 = state_21031;
(statearr_21044_21197[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21198 = state_21031;
state_21031 = G__21198;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21031){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(__21187,switch__6664__auto__,c__6720__auto___21190,G__21018_21188,n__4643__auto___21186,jobs,results,process,async))
})();
var state__6722__auto__ = (function (){var statearr_21045 = f__6721__auto__.call(null);
(statearr_21045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___21190);

return statearr_21045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(__21187,c__6720__auto___21190,G__21018_21188,n__4643__auto___21186,jobs,results,process,async))
);


break;
case "compute":
var c__6720__auto___21199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21187,c__6720__auto___21199,G__21018_21188,n__4643__auto___21186,jobs,results,process,async){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (__21187,c__6720__auto___21199,G__21018_21188,n__4643__auto___21186,jobs,results,process,async){
return (function (state_21058){
var state_val_21059 = (state_21058[(1)]);
if((state_val_21059 === (7))){
var inst_21054 = (state_21058[(2)]);
var state_21058__$1 = state_21058;
var statearr_21060_21200 = state_21058__$1;
(statearr_21060_21200[(2)] = inst_21054);

(statearr_21060_21200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (6))){
var state_21058__$1 = state_21058;
var statearr_21061_21201 = state_21058__$1;
(statearr_21061_21201[(2)] = null);

(statearr_21061_21201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (5))){
var state_21058__$1 = state_21058;
var statearr_21062_21202 = state_21058__$1;
(statearr_21062_21202[(2)] = null);

(statearr_21062_21202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (4))){
var inst_21048 = (state_21058[(2)]);
var inst_21049 = process.call(null,inst_21048);
var state_21058__$1 = state_21058;
if(cljs.core.truth_(inst_21049)){
var statearr_21063_21203 = state_21058__$1;
(statearr_21063_21203[(1)] = (5));

} else {
var statearr_21064_21204 = state_21058__$1;
(statearr_21064_21204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (3))){
var inst_21056 = (state_21058[(2)]);
var state_21058__$1 = state_21058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21058__$1,inst_21056);
} else {
if((state_val_21059 === (2))){
var state_21058__$1 = state_21058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21058__$1,(4),jobs);
} else {
if((state_val_21059 === (1))){
var state_21058__$1 = state_21058;
var statearr_21065_21205 = state_21058__$1;
(statearr_21065_21205[(2)] = null);

(statearr_21065_21205[(1)] = (2));


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
});})(__21187,c__6720__auto___21199,G__21018_21188,n__4643__auto___21186,jobs,results,process,async))
;
return ((function (__21187,switch__6664__auto__,c__6720__auto___21199,G__21018_21188,n__4643__auto___21186,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21069 = [null,null,null,null,null,null,null];
(statearr_21069[(0)] = state_machine__6665__auto__);

(statearr_21069[(1)] = (1));

return statearr_21069;
});
var state_machine__6665__auto____1 = (function (state_21058){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21070){if((e21070 instanceof Object)){
var ex__6668__auto__ = e21070;
var statearr_21071_21206 = state_21058;
(statearr_21071_21206[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21207 = state_21058;
state_21058 = G__21207;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21058){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(__21187,switch__6664__auto__,c__6720__auto___21199,G__21018_21188,n__4643__auto___21186,jobs,results,process,async))
})();
var state__6722__auto__ = (function (){var statearr_21072 = f__6721__auto__.call(null);
(statearr_21072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___21199);

return statearr_21072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(__21187,c__6720__auto___21199,G__21018_21188,n__4643__auto___21186,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21208 = (__21187 + (1));
__21187 = G__21208;
continue;
} else {
}
break;
}

var c__6720__auto___21209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___21209,jobs,results,process,async){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___21209,jobs,results,process,async){
return (function (state_21094){
var state_val_21095 = (state_21094[(1)]);
if((state_val_21095 === (9))){
var inst_21087 = (state_21094[(2)]);
var state_21094__$1 = (function (){var statearr_21096 = state_21094;
(statearr_21096[(7)] = inst_21087);

return statearr_21096;
})();
var statearr_21097_21210 = state_21094__$1;
(statearr_21097_21210[(2)] = null);

(statearr_21097_21210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21095 === (8))){
var inst_21080 = (state_21094[(8)]);
var inst_21085 = (state_21094[(2)]);
var state_21094__$1 = (function (){var statearr_21098 = state_21094;
(statearr_21098[(9)] = inst_21085);

return statearr_21098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21094__$1,(9),results,inst_21080);
} else {
if((state_val_21095 === (7))){
var inst_21090 = (state_21094[(2)]);
var state_21094__$1 = state_21094;
var statearr_21099_21211 = state_21094__$1;
(statearr_21099_21211[(2)] = inst_21090);

(statearr_21099_21211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21095 === (6))){
var inst_21080 = (state_21094[(8)]);
var inst_21075 = (state_21094[(10)]);
var inst_21080__$1 = cljs.core.async.chan.call(null,(1));
var inst_21081 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21082 = [inst_21075,inst_21080__$1];
var inst_21083 = (new cljs.core.PersistentVector(null,2,(5),inst_21081,inst_21082,null));
var state_21094__$1 = (function (){var statearr_21100 = state_21094;
(statearr_21100[(8)] = inst_21080__$1);

return statearr_21100;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21094__$1,(8),jobs,inst_21083);
} else {
if((state_val_21095 === (5))){
var inst_21078 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21094__$1 = state_21094;
var statearr_21101_21212 = state_21094__$1;
(statearr_21101_21212[(2)] = inst_21078);

(statearr_21101_21212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21095 === (4))){
var inst_21075 = (state_21094[(10)]);
var inst_21075__$1 = (state_21094[(2)]);
var inst_21076 = (inst_21075__$1 == null);
var state_21094__$1 = (function (){var statearr_21102 = state_21094;
(statearr_21102[(10)] = inst_21075__$1);

return statearr_21102;
})();
if(cljs.core.truth_(inst_21076)){
var statearr_21103_21213 = state_21094__$1;
(statearr_21103_21213[(1)] = (5));

} else {
var statearr_21104_21214 = state_21094__$1;
(statearr_21104_21214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21095 === (3))){
var inst_21092 = (state_21094[(2)]);
var state_21094__$1 = state_21094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21094__$1,inst_21092);
} else {
if((state_val_21095 === (2))){
var state_21094__$1 = state_21094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21094__$1,(4),from);
} else {
if((state_val_21095 === (1))){
var state_21094__$1 = state_21094;
var statearr_21105_21215 = state_21094__$1;
(statearr_21105_21215[(2)] = null);

(statearr_21105_21215[(1)] = (2));


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
});})(c__6720__auto___21209,jobs,results,process,async))
;
return ((function (switch__6664__auto__,c__6720__auto___21209,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21109[(0)] = state_machine__6665__auto__);

(statearr_21109[(1)] = (1));

return statearr_21109;
});
var state_machine__6665__auto____1 = (function (state_21094){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21110){if((e21110 instanceof Object)){
var ex__6668__auto__ = e21110;
var statearr_21111_21216 = state_21094;
(statearr_21111_21216[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21217 = state_21094;
state_21094 = G__21217;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21094){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___21209,jobs,results,process,async))
})();
var state__6722__auto__ = (function (){var statearr_21112 = f__6721__auto__.call(null);
(statearr_21112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___21209);

return statearr_21112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___21209,jobs,results,process,async))
);


var c__6720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto__,jobs,results,process,async){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto__,jobs,results,process,async){
return (function (state_21150){
var state_val_21151 = (state_21150[(1)]);
if((state_val_21151 === (7))){
var inst_21146 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
var statearr_21152_21218 = state_21150__$1;
(statearr_21152_21218[(2)] = inst_21146);

(statearr_21152_21218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (20))){
var state_21150__$1 = state_21150;
var statearr_21153_21219 = state_21150__$1;
(statearr_21153_21219[(2)] = null);

(statearr_21153_21219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (1))){
var state_21150__$1 = state_21150;
var statearr_21154_21220 = state_21150__$1;
(statearr_21154_21220[(2)] = null);

(statearr_21154_21220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (4))){
var inst_21115 = (state_21150[(7)]);
var inst_21115__$1 = (state_21150[(2)]);
var inst_21116 = (inst_21115__$1 == null);
var state_21150__$1 = (function (){var statearr_21155 = state_21150;
(statearr_21155[(7)] = inst_21115__$1);

return statearr_21155;
})();
if(cljs.core.truth_(inst_21116)){
var statearr_21156_21221 = state_21150__$1;
(statearr_21156_21221[(1)] = (5));

} else {
var statearr_21157_21222 = state_21150__$1;
(statearr_21157_21222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (15))){
var inst_21128 = (state_21150[(8)]);
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21150__$1,(18),to,inst_21128);
} else {
if((state_val_21151 === (21))){
var inst_21141 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
var statearr_21158_21223 = state_21150__$1;
(statearr_21158_21223[(2)] = inst_21141);

(statearr_21158_21223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (13))){
var inst_21143 = (state_21150[(2)]);
var state_21150__$1 = (function (){var statearr_21159 = state_21150;
(statearr_21159[(9)] = inst_21143);

return statearr_21159;
})();
var statearr_21160_21224 = state_21150__$1;
(statearr_21160_21224[(2)] = null);

(statearr_21160_21224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (6))){
var inst_21115 = (state_21150[(7)]);
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21150__$1,(11),inst_21115);
} else {
if((state_val_21151 === (17))){
var inst_21136 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
if(cljs.core.truth_(inst_21136)){
var statearr_21161_21225 = state_21150__$1;
(statearr_21161_21225[(1)] = (19));

} else {
var statearr_21162_21226 = state_21150__$1;
(statearr_21162_21226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (3))){
var inst_21148 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21150__$1,inst_21148);
} else {
if((state_val_21151 === (12))){
var inst_21125 = (state_21150[(10)]);
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21150__$1,(14),inst_21125);
} else {
if((state_val_21151 === (2))){
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21150__$1,(4),results);
} else {
if((state_val_21151 === (19))){
var state_21150__$1 = state_21150;
var statearr_21163_21227 = state_21150__$1;
(statearr_21163_21227[(2)] = null);

(statearr_21163_21227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (11))){
var inst_21125 = (state_21150[(2)]);
var state_21150__$1 = (function (){var statearr_21164 = state_21150;
(statearr_21164[(10)] = inst_21125);

return statearr_21164;
})();
var statearr_21165_21228 = state_21150__$1;
(statearr_21165_21228[(2)] = null);

(statearr_21165_21228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (9))){
var state_21150__$1 = state_21150;
var statearr_21166_21229 = state_21150__$1;
(statearr_21166_21229[(2)] = null);

(statearr_21166_21229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (5))){
var state_21150__$1 = state_21150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21167_21230 = state_21150__$1;
(statearr_21167_21230[(1)] = (8));

} else {
var statearr_21168_21231 = state_21150__$1;
(statearr_21168_21231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (14))){
var inst_21130 = (state_21150[(11)]);
var inst_21128 = (state_21150[(8)]);
var inst_21128__$1 = (state_21150[(2)]);
var inst_21129 = (inst_21128__$1 == null);
var inst_21130__$1 = cljs.core.not.call(null,inst_21129);
var state_21150__$1 = (function (){var statearr_21169 = state_21150;
(statearr_21169[(11)] = inst_21130__$1);

(statearr_21169[(8)] = inst_21128__$1);

return statearr_21169;
})();
if(inst_21130__$1){
var statearr_21170_21232 = state_21150__$1;
(statearr_21170_21232[(1)] = (15));

} else {
var statearr_21171_21233 = state_21150__$1;
(statearr_21171_21233[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (16))){
var inst_21130 = (state_21150[(11)]);
var state_21150__$1 = state_21150;
var statearr_21172_21234 = state_21150__$1;
(statearr_21172_21234[(2)] = inst_21130);

(statearr_21172_21234[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (10))){
var inst_21122 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
var statearr_21173_21235 = state_21150__$1;
(statearr_21173_21235[(2)] = inst_21122);

(statearr_21173_21235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (18))){
var inst_21133 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
var statearr_21174_21236 = state_21150__$1;
(statearr_21174_21236[(2)] = inst_21133);

(statearr_21174_21236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (8))){
var inst_21119 = cljs.core.async.close_BANG_.call(null,to);
var state_21150__$1 = state_21150;
var statearr_21175_21237 = state_21150__$1;
(statearr_21175_21237[(2)] = inst_21119);

(statearr_21175_21237[(1)] = (10));


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
});})(c__6720__auto__,jobs,results,process,async))
;
return ((function (switch__6664__auto__,c__6720__auto__,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21179[(0)] = state_machine__6665__auto__);

(statearr_21179[(1)] = (1));

return statearr_21179;
});
var state_machine__6665__auto____1 = (function (state_21150){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21180){if((e21180 instanceof Object)){
var ex__6668__auto__ = e21180;
var statearr_21181_21238 = state_21150;
(statearr_21181_21238[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21239 = state_21150;
state_21150 = G__21239;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21150){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto__,jobs,results,process,async))
})();
var state__6722__auto__ = (function (){var statearr_21182 = f__6721__auto__.call(null);
(statearr_21182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto__);

return statearr_21182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto__,jobs,results,process,async))
);

return c__6720__auto__;
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
var c__6720__auto___21340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___21340,tc,fc){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___21340,tc,fc){
return (function (state_21315){
var state_val_21316 = (state_21315[(1)]);
if((state_val_21316 === (7))){
var inst_21311 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21317_21341 = state_21315__$1;
(statearr_21317_21341[(2)] = inst_21311);

(statearr_21317_21341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (1))){
var state_21315__$1 = state_21315;
var statearr_21318_21342 = state_21315__$1;
(statearr_21318_21342[(2)] = null);

(statearr_21318_21342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (4))){
var inst_21292 = (state_21315[(7)]);
var inst_21292__$1 = (state_21315[(2)]);
var inst_21293 = (inst_21292__$1 == null);
var state_21315__$1 = (function (){var statearr_21319 = state_21315;
(statearr_21319[(7)] = inst_21292__$1);

return statearr_21319;
})();
if(cljs.core.truth_(inst_21293)){
var statearr_21320_21343 = state_21315__$1;
(statearr_21320_21343[(1)] = (5));

} else {
var statearr_21321_21344 = state_21315__$1;
(statearr_21321_21344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (13))){
var state_21315__$1 = state_21315;
var statearr_21322_21345 = state_21315__$1;
(statearr_21322_21345[(2)] = null);

(statearr_21322_21345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (6))){
var inst_21292 = (state_21315[(7)]);
var inst_21298 = p.call(null,inst_21292);
var state_21315__$1 = state_21315;
if(cljs.core.truth_(inst_21298)){
var statearr_21323_21346 = state_21315__$1;
(statearr_21323_21346[(1)] = (9));

} else {
var statearr_21324_21347 = state_21315__$1;
(statearr_21324_21347[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (3))){
var inst_21313 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21315__$1,inst_21313);
} else {
if((state_val_21316 === (12))){
var state_21315__$1 = state_21315;
var statearr_21325_21348 = state_21315__$1;
(statearr_21325_21348[(2)] = null);

(statearr_21325_21348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (2))){
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21315__$1,(4),ch);
} else {
if((state_val_21316 === (11))){
var inst_21292 = (state_21315[(7)]);
var inst_21302 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21315__$1,(8),inst_21302,inst_21292);
} else {
if((state_val_21316 === (9))){
var state_21315__$1 = state_21315;
var statearr_21326_21349 = state_21315__$1;
(statearr_21326_21349[(2)] = tc);

(statearr_21326_21349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (5))){
var inst_21295 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21296 = cljs.core.async.close_BANG_.call(null,fc);
var state_21315__$1 = (function (){var statearr_21327 = state_21315;
(statearr_21327[(8)] = inst_21295);

return statearr_21327;
})();
var statearr_21328_21350 = state_21315__$1;
(statearr_21328_21350[(2)] = inst_21296);

(statearr_21328_21350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (14))){
var inst_21309 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21329_21351 = state_21315__$1;
(statearr_21329_21351[(2)] = inst_21309);

(statearr_21329_21351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (10))){
var state_21315__$1 = state_21315;
var statearr_21330_21352 = state_21315__$1;
(statearr_21330_21352[(2)] = fc);

(statearr_21330_21352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (8))){
var inst_21304 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
if(cljs.core.truth_(inst_21304)){
var statearr_21331_21353 = state_21315__$1;
(statearr_21331_21353[(1)] = (12));

} else {
var statearr_21332_21354 = state_21315__$1;
(statearr_21332_21354[(1)] = (13));

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
});})(c__6720__auto___21340,tc,fc))
;
return ((function (switch__6664__auto__,c__6720__auto___21340,tc,fc){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21336 = [null,null,null,null,null,null,null,null,null];
(statearr_21336[(0)] = state_machine__6665__auto__);

(statearr_21336[(1)] = (1));

return statearr_21336;
});
var state_machine__6665__auto____1 = (function (state_21315){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21337){if((e21337 instanceof Object)){
var ex__6668__auto__ = e21337;
var statearr_21338_21355 = state_21315;
(statearr_21338_21355[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21356 = state_21315;
state_21315 = G__21356;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21315){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___21340,tc,fc))
})();
var state__6722__auto__ = (function (){var statearr_21339 = f__6721__auto__.call(null);
(statearr_21339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___21340);

return statearr_21339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___21340,tc,fc))
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
var c__6720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto__){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto__){
return (function (state_21403){
var state_val_21404 = (state_21403[(1)]);
if((state_val_21404 === (7))){
var inst_21399 = (state_21403[(2)]);
var state_21403__$1 = state_21403;
var statearr_21405_21421 = state_21403__$1;
(statearr_21405_21421[(2)] = inst_21399);

(statearr_21405_21421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21404 === (6))){
var inst_21392 = (state_21403[(7)]);
var inst_21389 = (state_21403[(8)]);
var inst_21396 = f.call(null,inst_21389,inst_21392);
var inst_21389__$1 = inst_21396;
var state_21403__$1 = (function (){var statearr_21406 = state_21403;
(statearr_21406[(8)] = inst_21389__$1);

return statearr_21406;
})();
var statearr_21407_21422 = state_21403__$1;
(statearr_21407_21422[(2)] = null);

(statearr_21407_21422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21404 === (5))){
var inst_21389 = (state_21403[(8)]);
var state_21403__$1 = state_21403;
var statearr_21408_21423 = state_21403__$1;
(statearr_21408_21423[(2)] = inst_21389);

(statearr_21408_21423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21404 === (4))){
var inst_21392 = (state_21403[(7)]);
var inst_21392__$1 = (state_21403[(2)]);
var inst_21393 = (inst_21392__$1 == null);
var state_21403__$1 = (function (){var statearr_21409 = state_21403;
(statearr_21409[(7)] = inst_21392__$1);

return statearr_21409;
})();
if(cljs.core.truth_(inst_21393)){
var statearr_21410_21424 = state_21403__$1;
(statearr_21410_21424[(1)] = (5));

} else {
var statearr_21411_21425 = state_21403__$1;
(statearr_21411_21425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21404 === (3))){
var inst_21401 = (state_21403[(2)]);
var state_21403__$1 = state_21403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21403__$1,inst_21401);
} else {
if((state_val_21404 === (2))){
var state_21403__$1 = state_21403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21403__$1,(4),ch);
} else {
if((state_val_21404 === (1))){
var inst_21389 = init;
var state_21403__$1 = (function (){var statearr_21412 = state_21403;
(statearr_21412[(8)] = inst_21389);

return statearr_21412;
})();
var statearr_21413_21426 = state_21403__$1;
(statearr_21413_21426[(2)] = null);

(statearr_21413_21426[(1)] = (2));


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
});})(c__6720__auto__))
;
return ((function (switch__6664__auto__,c__6720__auto__){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21417 = [null,null,null,null,null,null,null,null,null];
(statearr_21417[(0)] = state_machine__6665__auto__);

(statearr_21417[(1)] = (1));

return statearr_21417;
});
var state_machine__6665__auto____1 = (function (state_21403){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21418){if((e21418 instanceof Object)){
var ex__6668__auto__ = e21418;
var statearr_21419_21427 = state_21403;
(statearr_21419_21427[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21428 = state_21403;
state_21403 = G__21428;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21403){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto__))
})();
var state__6722__auto__ = (function (){var statearr_21420 = f__6721__auto__.call(null);
(statearr_21420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto__);

return statearr_21420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto__))
);

return c__6720__auto__;
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
var c__6720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto__){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto__){
return (function (state_21502){
var state_val_21503 = (state_21502[(1)]);
if((state_val_21503 === (7))){
var inst_21484 = (state_21502[(2)]);
var state_21502__$1 = state_21502;
var statearr_21504_21527 = state_21502__$1;
(statearr_21504_21527[(2)] = inst_21484);

(statearr_21504_21527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (1))){
var inst_21478 = cljs.core.seq.call(null,coll);
var inst_21479 = inst_21478;
var state_21502__$1 = (function (){var statearr_21505 = state_21502;
(statearr_21505[(7)] = inst_21479);

return statearr_21505;
})();
var statearr_21506_21528 = state_21502__$1;
(statearr_21506_21528[(2)] = null);

(statearr_21506_21528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (4))){
var inst_21479 = (state_21502[(7)]);
var inst_21482 = cljs.core.first.call(null,inst_21479);
var state_21502__$1 = state_21502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21502__$1,(7),ch,inst_21482);
} else {
if((state_val_21503 === (13))){
var inst_21496 = (state_21502[(2)]);
var state_21502__$1 = state_21502;
var statearr_21507_21529 = state_21502__$1;
(statearr_21507_21529[(2)] = inst_21496);

(statearr_21507_21529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (6))){
var inst_21487 = (state_21502[(2)]);
var state_21502__$1 = state_21502;
if(cljs.core.truth_(inst_21487)){
var statearr_21508_21530 = state_21502__$1;
(statearr_21508_21530[(1)] = (8));

} else {
var statearr_21509_21531 = state_21502__$1;
(statearr_21509_21531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (3))){
var inst_21500 = (state_21502[(2)]);
var state_21502__$1 = state_21502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21502__$1,inst_21500);
} else {
if((state_val_21503 === (12))){
var state_21502__$1 = state_21502;
var statearr_21510_21532 = state_21502__$1;
(statearr_21510_21532[(2)] = null);

(statearr_21510_21532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (2))){
var inst_21479 = (state_21502[(7)]);
var state_21502__$1 = state_21502;
if(cljs.core.truth_(inst_21479)){
var statearr_21511_21533 = state_21502__$1;
(statearr_21511_21533[(1)] = (4));

} else {
var statearr_21512_21534 = state_21502__$1;
(statearr_21512_21534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (11))){
var inst_21493 = cljs.core.async.close_BANG_.call(null,ch);
var state_21502__$1 = state_21502;
var statearr_21513_21535 = state_21502__$1;
(statearr_21513_21535[(2)] = inst_21493);

(statearr_21513_21535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (9))){
var state_21502__$1 = state_21502;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21514_21536 = state_21502__$1;
(statearr_21514_21536[(1)] = (11));

} else {
var statearr_21515_21537 = state_21502__$1;
(statearr_21515_21537[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (5))){
var inst_21479 = (state_21502[(7)]);
var state_21502__$1 = state_21502;
var statearr_21516_21538 = state_21502__$1;
(statearr_21516_21538[(2)] = inst_21479);

(statearr_21516_21538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (10))){
var inst_21498 = (state_21502[(2)]);
var state_21502__$1 = state_21502;
var statearr_21517_21539 = state_21502__$1;
(statearr_21517_21539[(2)] = inst_21498);

(statearr_21517_21539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21503 === (8))){
var inst_21479 = (state_21502[(7)]);
var inst_21489 = cljs.core.next.call(null,inst_21479);
var inst_21479__$1 = inst_21489;
var state_21502__$1 = (function (){var statearr_21518 = state_21502;
(statearr_21518[(7)] = inst_21479__$1);

return statearr_21518;
})();
var statearr_21519_21540 = state_21502__$1;
(statearr_21519_21540[(2)] = null);

(statearr_21519_21540[(1)] = (2));


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
});})(c__6720__auto__))
;
return ((function (switch__6664__auto__,c__6720__auto__){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21523 = [null,null,null,null,null,null,null,null];
(statearr_21523[(0)] = state_machine__6665__auto__);

(statearr_21523[(1)] = (1));

return statearr_21523;
});
var state_machine__6665__auto____1 = (function (state_21502){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21524){if((e21524 instanceof Object)){
var ex__6668__auto__ = e21524;
var statearr_21525_21541 = state_21502;
(statearr_21525_21541[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21542 = state_21502;
state_21502 = G__21542;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21502){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto__))
})();
var state__6722__auto__ = (function (){var statearr_21526 = f__6721__auto__.call(null);
(statearr_21526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto__);

return statearr_21526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto__))
);

return c__6720__auto__;
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

cljs.core.async.Mux = (function (){var obj21544 = {};
return obj21544;
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


cljs.core.async.Mult = (function (){var obj21546 = {};
return obj21546;
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
if(typeof cljs.core.async.t21768 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21768 = (function (cs,ch,mult,meta21769){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21769 = meta21769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21768.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21768.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21768.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21768.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21768.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21770){
var self__ = this;
var _21770__$1 = this;
return self__.meta21769;
});})(cs))
;

cljs.core.async.t21768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21770,meta21769__$1){
var self__ = this;
var _21770__$1 = this;
return (new cljs.core.async.t21768(self__.cs,self__.ch,self__.mult,meta21769__$1));
});})(cs))
;

cljs.core.async.t21768.cljs$lang$type = true;

cljs.core.async.t21768.cljs$lang$ctorStr = "cljs.core.async/t21768";

cljs.core.async.t21768.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21768");
});})(cs))
;

cljs.core.async.__GT_t21768 = ((function (cs){
return (function __GT_t21768(cs__$1,ch__$1,mult__$1,meta21769){
return (new cljs.core.async.t21768(cs__$1,ch__$1,mult__$1,meta21769));
});})(cs))
;

}

return (new cljs.core.async.t21768(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6720__auto___21989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___21989,cs,m,dchan,dctr,done){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___21989,cs,m,dchan,dctr,done){
return (function (state_21901){
var state_val_21902 = (state_21901[(1)]);
if((state_val_21902 === (7))){
var inst_21897 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21903_21990 = state_21901__$1;
(statearr_21903_21990[(2)] = inst_21897);

(statearr_21903_21990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (20))){
var inst_21802 = (state_21901[(7)]);
var inst_21812 = cljs.core.first.call(null,inst_21802);
var inst_21813 = cljs.core.nth.call(null,inst_21812,(0),null);
var inst_21814 = cljs.core.nth.call(null,inst_21812,(1),null);
var state_21901__$1 = (function (){var statearr_21904 = state_21901;
(statearr_21904[(8)] = inst_21813);

return statearr_21904;
})();
if(cljs.core.truth_(inst_21814)){
var statearr_21905_21991 = state_21901__$1;
(statearr_21905_21991[(1)] = (22));

} else {
var statearr_21906_21992 = state_21901__$1;
(statearr_21906_21992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (27))){
var inst_21842 = (state_21901[(9)]);
var inst_21773 = (state_21901[(10)]);
var inst_21844 = (state_21901[(11)]);
var inst_21849 = (state_21901[(12)]);
var inst_21849__$1 = cljs.core._nth.call(null,inst_21842,inst_21844);
var inst_21850 = cljs.core.async.put_BANG_.call(null,inst_21849__$1,inst_21773,done);
var state_21901__$1 = (function (){var statearr_21907 = state_21901;
(statearr_21907[(12)] = inst_21849__$1);

return statearr_21907;
})();
if(cljs.core.truth_(inst_21850)){
var statearr_21908_21993 = state_21901__$1;
(statearr_21908_21993[(1)] = (30));

} else {
var statearr_21909_21994 = state_21901__$1;
(statearr_21909_21994[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (1))){
var state_21901__$1 = state_21901;
var statearr_21910_21995 = state_21901__$1;
(statearr_21910_21995[(2)] = null);

(statearr_21910_21995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (24))){
var inst_21802 = (state_21901[(7)]);
var inst_21819 = (state_21901[(2)]);
var inst_21820 = cljs.core.next.call(null,inst_21802);
var inst_21782 = inst_21820;
var inst_21783 = null;
var inst_21784 = (0);
var inst_21785 = (0);
var state_21901__$1 = (function (){var statearr_21911 = state_21901;
(statearr_21911[(13)] = inst_21819);

(statearr_21911[(14)] = inst_21784);

(statearr_21911[(15)] = inst_21782);

(statearr_21911[(16)] = inst_21785);

(statearr_21911[(17)] = inst_21783);

return statearr_21911;
})();
var statearr_21912_21996 = state_21901__$1;
(statearr_21912_21996[(2)] = null);

(statearr_21912_21996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (39))){
var state_21901__$1 = state_21901;
var statearr_21916_21997 = state_21901__$1;
(statearr_21916_21997[(2)] = null);

(statearr_21916_21997[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (4))){
var inst_21773 = (state_21901[(10)]);
var inst_21773__$1 = (state_21901[(2)]);
var inst_21774 = (inst_21773__$1 == null);
var state_21901__$1 = (function (){var statearr_21917 = state_21901;
(statearr_21917[(10)] = inst_21773__$1);

return statearr_21917;
})();
if(cljs.core.truth_(inst_21774)){
var statearr_21918_21998 = state_21901__$1;
(statearr_21918_21998[(1)] = (5));

} else {
var statearr_21919_21999 = state_21901__$1;
(statearr_21919_21999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (15))){
var inst_21784 = (state_21901[(14)]);
var inst_21782 = (state_21901[(15)]);
var inst_21785 = (state_21901[(16)]);
var inst_21783 = (state_21901[(17)]);
var inst_21798 = (state_21901[(2)]);
var inst_21799 = (inst_21785 + (1));
var tmp21913 = inst_21784;
var tmp21914 = inst_21782;
var tmp21915 = inst_21783;
var inst_21782__$1 = tmp21914;
var inst_21783__$1 = tmp21915;
var inst_21784__$1 = tmp21913;
var inst_21785__$1 = inst_21799;
var state_21901__$1 = (function (){var statearr_21920 = state_21901;
(statearr_21920[(18)] = inst_21798);

(statearr_21920[(14)] = inst_21784__$1);

(statearr_21920[(15)] = inst_21782__$1);

(statearr_21920[(16)] = inst_21785__$1);

(statearr_21920[(17)] = inst_21783__$1);

return statearr_21920;
})();
var statearr_21921_22000 = state_21901__$1;
(statearr_21921_22000[(2)] = null);

(statearr_21921_22000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (21))){
var inst_21823 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21925_22001 = state_21901__$1;
(statearr_21925_22001[(2)] = inst_21823);

(statearr_21925_22001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (31))){
var inst_21849 = (state_21901[(12)]);
var inst_21853 = done.call(null,null);
var inst_21854 = cljs.core.async.untap_STAR_.call(null,m,inst_21849);
var state_21901__$1 = (function (){var statearr_21926 = state_21901;
(statearr_21926[(19)] = inst_21853);

return statearr_21926;
})();
var statearr_21927_22002 = state_21901__$1;
(statearr_21927_22002[(2)] = inst_21854);

(statearr_21927_22002[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (32))){
var inst_21842 = (state_21901[(9)]);
var inst_21841 = (state_21901[(20)]);
var inst_21844 = (state_21901[(11)]);
var inst_21843 = (state_21901[(21)]);
var inst_21856 = (state_21901[(2)]);
var inst_21857 = (inst_21844 + (1));
var tmp21922 = inst_21842;
var tmp21923 = inst_21841;
var tmp21924 = inst_21843;
var inst_21841__$1 = tmp21923;
var inst_21842__$1 = tmp21922;
var inst_21843__$1 = tmp21924;
var inst_21844__$1 = inst_21857;
var state_21901__$1 = (function (){var statearr_21928 = state_21901;
(statearr_21928[(22)] = inst_21856);

(statearr_21928[(9)] = inst_21842__$1);

(statearr_21928[(20)] = inst_21841__$1);

(statearr_21928[(11)] = inst_21844__$1);

(statearr_21928[(21)] = inst_21843__$1);

return statearr_21928;
})();
var statearr_21929_22003 = state_21901__$1;
(statearr_21929_22003[(2)] = null);

(statearr_21929_22003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (40))){
var inst_21869 = (state_21901[(23)]);
var inst_21873 = done.call(null,null);
var inst_21874 = cljs.core.async.untap_STAR_.call(null,m,inst_21869);
var state_21901__$1 = (function (){var statearr_21930 = state_21901;
(statearr_21930[(24)] = inst_21873);

return statearr_21930;
})();
var statearr_21931_22004 = state_21901__$1;
(statearr_21931_22004[(2)] = inst_21874);

(statearr_21931_22004[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (33))){
var inst_21860 = (state_21901[(25)]);
var inst_21862 = cljs.core.chunked_seq_QMARK_.call(null,inst_21860);
var state_21901__$1 = state_21901;
if(inst_21862){
var statearr_21932_22005 = state_21901__$1;
(statearr_21932_22005[(1)] = (36));

} else {
var statearr_21933_22006 = state_21901__$1;
(statearr_21933_22006[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (13))){
var inst_21792 = (state_21901[(26)]);
var inst_21795 = cljs.core.async.close_BANG_.call(null,inst_21792);
var state_21901__$1 = state_21901;
var statearr_21934_22007 = state_21901__$1;
(statearr_21934_22007[(2)] = inst_21795);

(statearr_21934_22007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (22))){
var inst_21813 = (state_21901[(8)]);
var inst_21816 = cljs.core.async.close_BANG_.call(null,inst_21813);
var state_21901__$1 = state_21901;
var statearr_21935_22008 = state_21901__$1;
(statearr_21935_22008[(2)] = inst_21816);

(statearr_21935_22008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (36))){
var inst_21860 = (state_21901[(25)]);
var inst_21864 = cljs.core.chunk_first.call(null,inst_21860);
var inst_21865 = cljs.core.chunk_rest.call(null,inst_21860);
var inst_21866 = cljs.core.count.call(null,inst_21864);
var inst_21841 = inst_21865;
var inst_21842 = inst_21864;
var inst_21843 = inst_21866;
var inst_21844 = (0);
var state_21901__$1 = (function (){var statearr_21936 = state_21901;
(statearr_21936[(9)] = inst_21842);

(statearr_21936[(20)] = inst_21841);

(statearr_21936[(11)] = inst_21844);

(statearr_21936[(21)] = inst_21843);

return statearr_21936;
})();
var statearr_21937_22009 = state_21901__$1;
(statearr_21937_22009[(2)] = null);

(statearr_21937_22009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (41))){
var inst_21860 = (state_21901[(25)]);
var inst_21876 = (state_21901[(2)]);
var inst_21877 = cljs.core.next.call(null,inst_21860);
var inst_21841 = inst_21877;
var inst_21842 = null;
var inst_21843 = (0);
var inst_21844 = (0);
var state_21901__$1 = (function (){var statearr_21938 = state_21901;
(statearr_21938[(9)] = inst_21842);

(statearr_21938[(27)] = inst_21876);

(statearr_21938[(20)] = inst_21841);

(statearr_21938[(11)] = inst_21844);

(statearr_21938[(21)] = inst_21843);

return statearr_21938;
})();
var statearr_21939_22010 = state_21901__$1;
(statearr_21939_22010[(2)] = null);

(statearr_21939_22010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (43))){
var state_21901__$1 = state_21901;
var statearr_21940_22011 = state_21901__$1;
(statearr_21940_22011[(2)] = null);

(statearr_21940_22011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (29))){
var inst_21885 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21941_22012 = state_21901__$1;
(statearr_21941_22012[(2)] = inst_21885);

(statearr_21941_22012[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (44))){
var inst_21894 = (state_21901[(2)]);
var state_21901__$1 = (function (){var statearr_21942 = state_21901;
(statearr_21942[(28)] = inst_21894);

return statearr_21942;
})();
var statearr_21943_22013 = state_21901__$1;
(statearr_21943_22013[(2)] = null);

(statearr_21943_22013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (6))){
var inst_21833 = (state_21901[(29)]);
var inst_21832 = cljs.core.deref.call(null,cs);
var inst_21833__$1 = cljs.core.keys.call(null,inst_21832);
var inst_21834 = cljs.core.count.call(null,inst_21833__$1);
var inst_21835 = cljs.core.reset_BANG_.call(null,dctr,inst_21834);
var inst_21840 = cljs.core.seq.call(null,inst_21833__$1);
var inst_21841 = inst_21840;
var inst_21842 = null;
var inst_21843 = (0);
var inst_21844 = (0);
var state_21901__$1 = (function (){var statearr_21944 = state_21901;
(statearr_21944[(9)] = inst_21842);

(statearr_21944[(30)] = inst_21835);

(statearr_21944[(20)] = inst_21841);

(statearr_21944[(11)] = inst_21844);

(statearr_21944[(29)] = inst_21833__$1);

(statearr_21944[(21)] = inst_21843);

return statearr_21944;
})();
var statearr_21945_22014 = state_21901__$1;
(statearr_21945_22014[(2)] = null);

(statearr_21945_22014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (28))){
var inst_21841 = (state_21901[(20)]);
var inst_21860 = (state_21901[(25)]);
var inst_21860__$1 = cljs.core.seq.call(null,inst_21841);
var state_21901__$1 = (function (){var statearr_21946 = state_21901;
(statearr_21946[(25)] = inst_21860__$1);

return statearr_21946;
})();
if(inst_21860__$1){
var statearr_21947_22015 = state_21901__$1;
(statearr_21947_22015[(1)] = (33));

} else {
var statearr_21948_22016 = state_21901__$1;
(statearr_21948_22016[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (25))){
var inst_21844 = (state_21901[(11)]);
var inst_21843 = (state_21901[(21)]);
var inst_21846 = (inst_21844 < inst_21843);
var inst_21847 = inst_21846;
var state_21901__$1 = state_21901;
if(cljs.core.truth_(inst_21847)){
var statearr_21949_22017 = state_21901__$1;
(statearr_21949_22017[(1)] = (27));

} else {
var statearr_21950_22018 = state_21901__$1;
(statearr_21950_22018[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (34))){
var state_21901__$1 = state_21901;
var statearr_21951_22019 = state_21901__$1;
(statearr_21951_22019[(2)] = null);

(statearr_21951_22019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (17))){
var state_21901__$1 = state_21901;
var statearr_21952_22020 = state_21901__$1;
(statearr_21952_22020[(2)] = null);

(statearr_21952_22020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (3))){
var inst_21899 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21901__$1,inst_21899);
} else {
if((state_val_21902 === (12))){
var inst_21828 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21953_22021 = state_21901__$1;
(statearr_21953_22021[(2)] = inst_21828);

(statearr_21953_22021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (2))){
var state_21901__$1 = state_21901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21901__$1,(4),ch);
} else {
if((state_val_21902 === (23))){
var state_21901__$1 = state_21901;
var statearr_21954_22022 = state_21901__$1;
(statearr_21954_22022[(2)] = null);

(statearr_21954_22022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (35))){
var inst_21883 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21955_22023 = state_21901__$1;
(statearr_21955_22023[(2)] = inst_21883);

(statearr_21955_22023[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (19))){
var inst_21802 = (state_21901[(7)]);
var inst_21806 = cljs.core.chunk_first.call(null,inst_21802);
var inst_21807 = cljs.core.chunk_rest.call(null,inst_21802);
var inst_21808 = cljs.core.count.call(null,inst_21806);
var inst_21782 = inst_21807;
var inst_21783 = inst_21806;
var inst_21784 = inst_21808;
var inst_21785 = (0);
var state_21901__$1 = (function (){var statearr_21956 = state_21901;
(statearr_21956[(14)] = inst_21784);

(statearr_21956[(15)] = inst_21782);

(statearr_21956[(16)] = inst_21785);

(statearr_21956[(17)] = inst_21783);

return statearr_21956;
})();
var statearr_21957_22024 = state_21901__$1;
(statearr_21957_22024[(2)] = null);

(statearr_21957_22024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (11))){
var inst_21802 = (state_21901[(7)]);
var inst_21782 = (state_21901[(15)]);
var inst_21802__$1 = cljs.core.seq.call(null,inst_21782);
var state_21901__$1 = (function (){var statearr_21958 = state_21901;
(statearr_21958[(7)] = inst_21802__$1);

return statearr_21958;
})();
if(inst_21802__$1){
var statearr_21959_22025 = state_21901__$1;
(statearr_21959_22025[(1)] = (16));

} else {
var statearr_21960_22026 = state_21901__$1;
(statearr_21960_22026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (9))){
var inst_21830 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21961_22027 = state_21901__$1;
(statearr_21961_22027[(2)] = inst_21830);

(statearr_21961_22027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (5))){
var inst_21780 = cljs.core.deref.call(null,cs);
var inst_21781 = cljs.core.seq.call(null,inst_21780);
var inst_21782 = inst_21781;
var inst_21783 = null;
var inst_21784 = (0);
var inst_21785 = (0);
var state_21901__$1 = (function (){var statearr_21962 = state_21901;
(statearr_21962[(14)] = inst_21784);

(statearr_21962[(15)] = inst_21782);

(statearr_21962[(16)] = inst_21785);

(statearr_21962[(17)] = inst_21783);

return statearr_21962;
})();
var statearr_21963_22028 = state_21901__$1;
(statearr_21963_22028[(2)] = null);

(statearr_21963_22028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (14))){
var state_21901__$1 = state_21901;
var statearr_21964_22029 = state_21901__$1;
(statearr_21964_22029[(2)] = null);

(statearr_21964_22029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (45))){
var inst_21891 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21965_22030 = state_21901__$1;
(statearr_21965_22030[(2)] = inst_21891);

(statearr_21965_22030[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (26))){
var inst_21833 = (state_21901[(29)]);
var inst_21887 = (state_21901[(2)]);
var inst_21888 = cljs.core.seq.call(null,inst_21833);
var state_21901__$1 = (function (){var statearr_21966 = state_21901;
(statearr_21966[(31)] = inst_21887);

return statearr_21966;
})();
if(inst_21888){
var statearr_21967_22031 = state_21901__$1;
(statearr_21967_22031[(1)] = (42));

} else {
var statearr_21968_22032 = state_21901__$1;
(statearr_21968_22032[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (16))){
var inst_21802 = (state_21901[(7)]);
var inst_21804 = cljs.core.chunked_seq_QMARK_.call(null,inst_21802);
var state_21901__$1 = state_21901;
if(inst_21804){
var statearr_21969_22033 = state_21901__$1;
(statearr_21969_22033[(1)] = (19));

} else {
var statearr_21970_22034 = state_21901__$1;
(statearr_21970_22034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (38))){
var inst_21880 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21971_22035 = state_21901__$1;
(statearr_21971_22035[(2)] = inst_21880);

(statearr_21971_22035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (30))){
var state_21901__$1 = state_21901;
var statearr_21972_22036 = state_21901__$1;
(statearr_21972_22036[(2)] = null);

(statearr_21972_22036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (10))){
var inst_21785 = (state_21901[(16)]);
var inst_21783 = (state_21901[(17)]);
var inst_21791 = cljs.core._nth.call(null,inst_21783,inst_21785);
var inst_21792 = cljs.core.nth.call(null,inst_21791,(0),null);
var inst_21793 = cljs.core.nth.call(null,inst_21791,(1),null);
var state_21901__$1 = (function (){var statearr_21973 = state_21901;
(statearr_21973[(26)] = inst_21792);

return statearr_21973;
})();
if(cljs.core.truth_(inst_21793)){
var statearr_21974_22037 = state_21901__$1;
(statearr_21974_22037[(1)] = (13));

} else {
var statearr_21975_22038 = state_21901__$1;
(statearr_21975_22038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (18))){
var inst_21826 = (state_21901[(2)]);
var state_21901__$1 = state_21901;
var statearr_21976_22039 = state_21901__$1;
(statearr_21976_22039[(2)] = inst_21826);

(statearr_21976_22039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (42))){
var state_21901__$1 = state_21901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21901__$1,(45),dchan);
} else {
if((state_val_21902 === (37))){
var inst_21869 = (state_21901[(23)]);
var inst_21860 = (state_21901[(25)]);
var inst_21773 = (state_21901[(10)]);
var inst_21869__$1 = cljs.core.first.call(null,inst_21860);
var inst_21870 = cljs.core.async.put_BANG_.call(null,inst_21869__$1,inst_21773,done);
var state_21901__$1 = (function (){var statearr_21977 = state_21901;
(statearr_21977[(23)] = inst_21869__$1);

return statearr_21977;
})();
if(cljs.core.truth_(inst_21870)){
var statearr_21978_22040 = state_21901__$1;
(statearr_21978_22040[(1)] = (39));

} else {
var statearr_21979_22041 = state_21901__$1;
(statearr_21979_22041[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21902 === (8))){
var inst_21784 = (state_21901[(14)]);
var inst_21785 = (state_21901[(16)]);
var inst_21787 = (inst_21785 < inst_21784);
var inst_21788 = inst_21787;
var state_21901__$1 = state_21901;
if(cljs.core.truth_(inst_21788)){
var statearr_21980_22042 = state_21901__$1;
(statearr_21980_22042[(1)] = (10));

} else {
var statearr_21981_22043 = state_21901__$1;
(statearr_21981_22043[(1)] = (11));

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
});})(c__6720__auto___21989,cs,m,dchan,dctr,done))
;
return ((function (switch__6664__auto__,c__6720__auto___21989,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21985[(0)] = state_machine__6665__auto__);

(statearr_21985[(1)] = (1));

return statearr_21985;
});
var state_machine__6665__auto____1 = (function (state_21901){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21986){if((e21986 instanceof Object)){
var ex__6668__auto__ = e21986;
var statearr_21987_22044 = state_21901;
(statearr_21987_22044[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22045 = state_21901;
state_21901 = G__22045;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21901){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___21989,cs,m,dchan,dctr,done))
})();
var state__6722__auto__ = (function (){var statearr_21988 = f__6721__auto__.call(null);
(statearr_21988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___21989);

return statearr_21988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___21989,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj22047 = {};
return obj22047;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22048){
var map__22053 = p__22048;
var map__22053__$1 = ((cljs.core.seq_QMARK_.call(null,map__22053))?cljs.core.apply.call(null,cljs.core.hash_map,map__22053):map__22053);
var opts = map__22053__$1;
var statearr_22054_22057 = state;
(statearr_22054_22057[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22053,map__22053__$1,opts){
return (function (val){
var statearr_22055_22058 = state;
(statearr_22055_22058[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22053,map__22053__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22056_22059 = state;
(statearr_22056_22059[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22048 = null;
if (arguments.length > 3) {
  p__22048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22048);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22060){
var state = cljs.core.first(arglist__22060);
arglist__22060 = cljs.core.next(arglist__22060);
var cont_block = cljs.core.first(arglist__22060);
arglist__22060 = cljs.core.next(arglist__22060);
var ports = cljs.core.first(arglist__22060);
var p__22048 = cljs.core.rest(arglist__22060);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22048);
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
if(typeof cljs.core.async.t22180 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22180 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22181){
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
this.meta22181 = meta22181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22180.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22180.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22180.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22180.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22180.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22180.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t22180.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22182){
var self__ = this;
var _22182__$1 = this;
return self__.meta22181;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22182,meta22181__$1){
var self__ = this;
var _22182__$1 = this;
return (new cljs.core.async.t22180(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22181__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22180.cljs$lang$type = true;

cljs.core.async.t22180.cljs$lang$ctorStr = "cljs.core.async/t22180";

cljs.core.async.t22180.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22180");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22180 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22180(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22181){
return (new cljs.core.async.t22180(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22181));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22180(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6720__auto___22299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___22299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___22299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22252){
var state_val_22253 = (state_22252[(1)]);
if((state_val_22253 === (7))){
var inst_22196 = (state_22252[(7)]);
var inst_22201 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22196);
var state_22252__$1 = state_22252;
var statearr_22254_22300 = state_22252__$1;
(statearr_22254_22300[(2)] = inst_22201);

(statearr_22254_22300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (20))){
var inst_22211 = (state_22252[(8)]);
var state_22252__$1 = state_22252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22252__$1,(23),out,inst_22211);
} else {
if((state_val_22253 === (1))){
var inst_22186 = (state_22252[(9)]);
var inst_22186__$1 = calc_state.call(null);
var inst_22187 = cljs.core.seq_QMARK_.call(null,inst_22186__$1);
var state_22252__$1 = (function (){var statearr_22255 = state_22252;
(statearr_22255[(9)] = inst_22186__$1);

return statearr_22255;
})();
if(inst_22187){
var statearr_22256_22301 = state_22252__$1;
(statearr_22256_22301[(1)] = (2));

} else {
var statearr_22257_22302 = state_22252__$1;
(statearr_22257_22302[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (24))){
var inst_22204 = (state_22252[(10)]);
var inst_22196 = inst_22204;
var state_22252__$1 = (function (){var statearr_22258 = state_22252;
(statearr_22258[(7)] = inst_22196);

return statearr_22258;
})();
var statearr_22259_22303 = state_22252__$1;
(statearr_22259_22303[(2)] = null);

(statearr_22259_22303[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (4))){
var inst_22186 = (state_22252[(9)]);
var inst_22192 = (state_22252[(2)]);
var inst_22193 = cljs.core.get.call(null,inst_22192,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22194 = cljs.core.get.call(null,inst_22192,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22195 = cljs.core.get.call(null,inst_22192,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22196 = inst_22186;
var state_22252__$1 = (function (){var statearr_22260 = state_22252;
(statearr_22260[(7)] = inst_22196);

(statearr_22260[(11)] = inst_22193);

(statearr_22260[(12)] = inst_22194);

(statearr_22260[(13)] = inst_22195);

return statearr_22260;
})();
var statearr_22261_22304 = state_22252__$1;
(statearr_22261_22304[(2)] = null);

(statearr_22261_22304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (15))){
var state_22252__$1 = state_22252;
var statearr_22262_22305 = state_22252__$1;
(statearr_22262_22305[(2)] = null);

(statearr_22262_22305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (21))){
var inst_22204 = (state_22252[(10)]);
var inst_22196 = inst_22204;
var state_22252__$1 = (function (){var statearr_22263 = state_22252;
(statearr_22263[(7)] = inst_22196);

return statearr_22263;
})();
var statearr_22264_22306 = state_22252__$1;
(statearr_22264_22306[(2)] = null);

(statearr_22264_22306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (13))){
var inst_22248 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
var statearr_22265_22307 = state_22252__$1;
(statearr_22265_22307[(2)] = inst_22248);

(statearr_22265_22307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (22))){
var inst_22246 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
var statearr_22266_22308 = state_22252__$1;
(statearr_22266_22308[(2)] = inst_22246);

(statearr_22266_22308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (6))){
var inst_22250 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22252__$1,inst_22250);
} else {
if((state_val_22253 === (25))){
var state_22252__$1 = state_22252;
var statearr_22267_22309 = state_22252__$1;
(statearr_22267_22309[(2)] = null);

(statearr_22267_22309[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (17))){
var inst_22226 = (state_22252[(14)]);
var state_22252__$1 = state_22252;
var statearr_22268_22310 = state_22252__$1;
(statearr_22268_22310[(2)] = inst_22226);

(statearr_22268_22310[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (3))){
var inst_22186 = (state_22252[(9)]);
var state_22252__$1 = state_22252;
var statearr_22269_22311 = state_22252__$1;
(statearr_22269_22311[(2)] = inst_22186);

(statearr_22269_22311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (12))){
var inst_22207 = (state_22252[(15)]);
var inst_22212 = (state_22252[(16)]);
var inst_22226 = (state_22252[(14)]);
var inst_22226__$1 = inst_22207.call(null,inst_22212);
var state_22252__$1 = (function (){var statearr_22270 = state_22252;
(statearr_22270[(14)] = inst_22226__$1);

return statearr_22270;
})();
if(cljs.core.truth_(inst_22226__$1)){
var statearr_22271_22312 = state_22252__$1;
(statearr_22271_22312[(1)] = (17));

} else {
var statearr_22272_22313 = state_22252__$1;
(statearr_22272_22313[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (2))){
var inst_22186 = (state_22252[(9)]);
var inst_22189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22186);
var state_22252__$1 = state_22252;
var statearr_22273_22314 = state_22252__$1;
(statearr_22273_22314[(2)] = inst_22189);

(statearr_22273_22314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (23))){
var inst_22237 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
if(cljs.core.truth_(inst_22237)){
var statearr_22274_22315 = state_22252__$1;
(statearr_22274_22315[(1)] = (24));

} else {
var statearr_22275_22316 = state_22252__$1;
(statearr_22275_22316[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (19))){
var inst_22234 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
if(cljs.core.truth_(inst_22234)){
var statearr_22276_22317 = state_22252__$1;
(statearr_22276_22317[(1)] = (20));

} else {
var statearr_22277_22318 = state_22252__$1;
(statearr_22277_22318[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (11))){
var inst_22211 = (state_22252[(8)]);
var inst_22217 = (inst_22211 == null);
var state_22252__$1 = state_22252;
if(cljs.core.truth_(inst_22217)){
var statearr_22278_22319 = state_22252__$1;
(statearr_22278_22319[(1)] = (14));

} else {
var statearr_22279_22320 = state_22252__$1;
(statearr_22279_22320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (9))){
var inst_22204 = (state_22252[(10)]);
var inst_22204__$1 = (state_22252[(2)]);
var inst_22205 = cljs.core.get.call(null,inst_22204__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22206 = cljs.core.get.call(null,inst_22204__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22207 = cljs.core.get.call(null,inst_22204__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22252__$1 = (function (){var statearr_22280 = state_22252;
(statearr_22280[(17)] = inst_22206);

(statearr_22280[(10)] = inst_22204__$1);

(statearr_22280[(15)] = inst_22207);

return statearr_22280;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22252__$1,(10),inst_22205);
} else {
if((state_val_22253 === (5))){
var inst_22196 = (state_22252[(7)]);
var inst_22199 = cljs.core.seq_QMARK_.call(null,inst_22196);
var state_22252__$1 = state_22252;
if(inst_22199){
var statearr_22281_22321 = state_22252__$1;
(statearr_22281_22321[(1)] = (7));

} else {
var statearr_22282_22322 = state_22252__$1;
(statearr_22282_22322[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (14))){
var inst_22212 = (state_22252[(16)]);
var inst_22219 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22212);
var state_22252__$1 = state_22252;
var statearr_22283_22323 = state_22252__$1;
(statearr_22283_22323[(2)] = inst_22219);

(statearr_22283_22323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (26))){
var inst_22242 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
var statearr_22284_22324 = state_22252__$1;
(statearr_22284_22324[(2)] = inst_22242);

(statearr_22284_22324[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (16))){
var inst_22222 = (state_22252[(2)]);
var inst_22223 = calc_state.call(null);
var inst_22196 = inst_22223;
var state_22252__$1 = (function (){var statearr_22285 = state_22252;
(statearr_22285[(7)] = inst_22196);

(statearr_22285[(18)] = inst_22222);

return statearr_22285;
})();
var statearr_22286_22325 = state_22252__$1;
(statearr_22286_22325[(2)] = null);

(statearr_22286_22325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (10))){
var inst_22212 = (state_22252[(16)]);
var inst_22211 = (state_22252[(8)]);
var inst_22210 = (state_22252[(2)]);
var inst_22211__$1 = cljs.core.nth.call(null,inst_22210,(0),null);
var inst_22212__$1 = cljs.core.nth.call(null,inst_22210,(1),null);
var inst_22213 = (inst_22211__$1 == null);
var inst_22214 = cljs.core._EQ_.call(null,inst_22212__$1,change);
var inst_22215 = (inst_22213) || (inst_22214);
var state_22252__$1 = (function (){var statearr_22287 = state_22252;
(statearr_22287[(16)] = inst_22212__$1);

(statearr_22287[(8)] = inst_22211__$1);

return statearr_22287;
})();
if(cljs.core.truth_(inst_22215)){
var statearr_22288_22326 = state_22252__$1;
(statearr_22288_22326[(1)] = (11));

} else {
var statearr_22289_22327 = state_22252__$1;
(statearr_22289_22327[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (18))){
var inst_22206 = (state_22252[(17)]);
var inst_22207 = (state_22252[(15)]);
var inst_22212 = (state_22252[(16)]);
var inst_22229 = cljs.core.empty_QMARK_.call(null,inst_22207);
var inst_22230 = inst_22206.call(null,inst_22212);
var inst_22231 = cljs.core.not.call(null,inst_22230);
var inst_22232 = (inst_22229) && (inst_22231);
var state_22252__$1 = state_22252;
var statearr_22290_22328 = state_22252__$1;
(statearr_22290_22328[(2)] = inst_22232);

(statearr_22290_22328[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (8))){
var inst_22196 = (state_22252[(7)]);
var state_22252__$1 = state_22252;
var statearr_22291_22329 = state_22252__$1;
(statearr_22291_22329[(2)] = inst_22196);

(statearr_22291_22329[(1)] = (9));


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
});})(c__6720__auto___22299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6664__auto__,c__6720__auto___22299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_22295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22295[(0)] = state_machine__6665__auto__);

(statearr_22295[(1)] = (1));

return statearr_22295;
});
var state_machine__6665__auto____1 = (function (state_22252){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_22252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e22296){if((e22296 instanceof Object)){
var ex__6668__auto__ = e22296;
var statearr_22297_22330 = state_22252;
(statearr_22297_22330[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22331 = state_22252;
state_22252 = G__22331;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_22252){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_22252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___22299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6722__auto__ = (function (){var statearr_22298 = f__6721__auto__.call(null);
(statearr_22298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___22299);

return statearr_22298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___22299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22333 = {};
return obj22333;
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
return (function (p1__22334_SHARP_){
if(cljs.core.truth_(p1__22334_SHARP_.call(null,topic))){
return p1__22334_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22334_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22457 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22457 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22458){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22458 = meta22458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22457.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22457.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22459){
var self__ = this;
var _22459__$1 = this;
return self__.meta22458;
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22459,meta22458__$1){
var self__ = this;
var _22459__$1 = this;
return (new cljs.core.async.t22457(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22458__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22457.cljs$lang$type = true;

cljs.core.async.t22457.cljs$lang$ctorStr = "cljs.core.async/t22457";

cljs.core.async.t22457.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22457");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22457 = ((function (mults,ensure_mult){
return (function __GT_t22457(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22458){
return (new cljs.core.async.t22457(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22458));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22457(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6720__auto___22579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___22579,mults,ensure_mult,p){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___22579,mults,ensure_mult,p){
return (function (state_22531){
var state_val_22532 = (state_22531[(1)]);
if((state_val_22532 === (7))){
var inst_22527 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22533_22580 = state_22531__$1;
(statearr_22533_22580[(2)] = inst_22527);

(statearr_22533_22580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (20))){
var state_22531__$1 = state_22531;
var statearr_22534_22581 = state_22531__$1;
(statearr_22534_22581[(2)] = null);

(statearr_22534_22581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (1))){
var state_22531__$1 = state_22531;
var statearr_22535_22582 = state_22531__$1;
(statearr_22535_22582[(2)] = null);

(statearr_22535_22582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (24))){
var inst_22510 = (state_22531[(7)]);
var inst_22519 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22510);
var state_22531__$1 = state_22531;
var statearr_22536_22583 = state_22531__$1;
(statearr_22536_22583[(2)] = inst_22519);

(statearr_22536_22583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (4))){
var inst_22462 = (state_22531[(8)]);
var inst_22462__$1 = (state_22531[(2)]);
var inst_22463 = (inst_22462__$1 == null);
var state_22531__$1 = (function (){var statearr_22537 = state_22531;
(statearr_22537[(8)] = inst_22462__$1);

return statearr_22537;
})();
if(cljs.core.truth_(inst_22463)){
var statearr_22538_22584 = state_22531__$1;
(statearr_22538_22584[(1)] = (5));

} else {
var statearr_22539_22585 = state_22531__$1;
(statearr_22539_22585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (15))){
var inst_22504 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22540_22586 = state_22531__$1;
(statearr_22540_22586[(2)] = inst_22504);

(statearr_22540_22586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (21))){
var inst_22524 = (state_22531[(2)]);
var state_22531__$1 = (function (){var statearr_22541 = state_22531;
(statearr_22541[(9)] = inst_22524);

return statearr_22541;
})();
var statearr_22542_22587 = state_22531__$1;
(statearr_22542_22587[(2)] = null);

(statearr_22542_22587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (13))){
var inst_22486 = (state_22531[(10)]);
var inst_22488 = cljs.core.chunked_seq_QMARK_.call(null,inst_22486);
var state_22531__$1 = state_22531;
if(inst_22488){
var statearr_22543_22588 = state_22531__$1;
(statearr_22543_22588[(1)] = (16));

} else {
var statearr_22544_22589 = state_22531__$1;
(statearr_22544_22589[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (22))){
var inst_22516 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
if(cljs.core.truth_(inst_22516)){
var statearr_22545_22590 = state_22531__$1;
(statearr_22545_22590[(1)] = (23));

} else {
var statearr_22546_22591 = state_22531__$1;
(statearr_22546_22591[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (6))){
var inst_22512 = (state_22531[(11)]);
var inst_22462 = (state_22531[(8)]);
var inst_22510 = (state_22531[(7)]);
var inst_22510__$1 = topic_fn.call(null,inst_22462);
var inst_22511 = cljs.core.deref.call(null,mults);
var inst_22512__$1 = cljs.core.get.call(null,inst_22511,inst_22510__$1);
var state_22531__$1 = (function (){var statearr_22547 = state_22531;
(statearr_22547[(11)] = inst_22512__$1);

(statearr_22547[(7)] = inst_22510__$1);

return statearr_22547;
})();
if(cljs.core.truth_(inst_22512__$1)){
var statearr_22548_22592 = state_22531__$1;
(statearr_22548_22592[(1)] = (19));

} else {
var statearr_22549_22593 = state_22531__$1;
(statearr_22549_22593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (25))){
var inst_22521 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22550_22594 = state_22531__$1;
(statearr_22550_22594[(2)] = inst_22521);

(statearr_22550_22594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (17))){
var inst_22486 = (state_22531[(10)]);
var inst_22495 = cljs.core.first.call(null,inst_22486);
var inst_22496 = cljs.core.async.muxch_STAR_.call(null,inst_22495);
var inst_22497 = cljs.core.async.close_BANG_.call(null,inst_22496);
var inst_22498 = cljs.core.next.call(null,inst_22486);
var inst_22472 = inst_22498;
var inst_22473 = null;
var inst_22474 = (0);
var inst_22475 = (0);
var state_22531__$1 = (function (){var statearr_22551 = state_22531;
(statearr_22551[(12)] = inst_22474);

(statearr_22551[(13)] = inst_22497);

(statearr_22551[(14)] = inst_22473);

(statearr_22551[(15)] = inst_22475);

(statearr_22551[(16)] = inst_22472);

return statearr_22551;
})();
var statearr_22552_22595 = state_22531__$1;
(statearr_22552_22595[(2)] = null);

(statearr_22552_22595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (3))){
var inst_22529 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22531__$1,inst_22529);
} else {
if((state_val_22532 === (12))){
var inst_22506 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22553_22596 = state_22531__$1;
(statearr_22553_22596[(2)] = inst_22506);

(statearr_22553_22596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (2))){
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22531__$1,(4),ch);
} else {
if((state_val_22532 === (23))){
var state_22531__$1 = state_22531;
var statearr_22554_22597 = state_22531__$1;
(statearr_22554_22597[(2)] = null);

(statearr_22554_22597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (19))){
var inst_22512 = (state_22531[(11)]);
var inst_22462 = (state_22531[(8)]);
var inst_22514 = cljs.core.async.muxch_STAR_.call(null,inst_22512);
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22531__$1,(22),inst_22514,inst_22462);
} else {
if((state_val_22532 === (11))){
var inst_22486 = (state_22531[(10)]);
var inst_22472 = (state_22531[(16)]);
var inst_22486__$1 = cljs.core.seq.call(null,inst_22472);
var state_22531__$1 = (function (){var statearr_22555 = state_22531;
(statearr_22555[(10)] = inst_22486__$1);

return statearr_22555;
})();
if(inst_22486__$1){
var statearr_22556_22598 = state_22531__$1;
(statearr_22556_22598[(1)] = (13));

} else {
var statearr_22557_22599 = state_22531__$1;
(statearr_22557_22599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (9))){
var inst_22508 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22558_22600 = state_22531__$1;
(statearr_22558_22600[(2)] = inst_22508);

(statearr_22558_22600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (5))){
var inst_22469 = cljs.core.deref.call(null,mults);
var inst_22470 = cljs.core.vals.call(null,inst_22469);
var inst_22471 = cljs.core.seq.call(null,inst_22470);
var inst_22472 = inst_22471;
var inst_22473 = null;
var inst_22474 = (0);
var inst_22475 = (0);
var state_22531__$1 = (function (){var statearr_22559 = state_22531;
(statearr_22559[(12)] = inst_22474);

(statearr_22559[(14)] = inst_22473);

(statearr_22559[(15)] = inst_22475);

(statearr_22559[(16)] = inst_22472);

return statearr_22559;
})();
var statearr_22560_22601 = state_22531__$1;
(statearr_22560_22601[(2)] = null);

(statearr_22560_22601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (14))){
var state_22531__$1 = state_22531;
var statearr_22564_22602 = state_22531__$1;
(statearr_22564_22602[(2)] = null);

(statearr_22564_22602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (16))){
var inst_22486 = (state_22531[(10)]);
var inst_22490 = cljs.core.chunk_first.call(null,inst_22486);
var inst_22491 = cljs.core.chunk_rest.call(null,inst_22486);
var inst_22492 = cljs.core.count.call(null,inst_22490);
var inst_22472 = inst_22491;
var inst_22473 = inst_22490;
var inst_22474 = inst_22492;
var inst_22475 = (0);
var state_22531__$1 = (function (){var statearr_22565 = state_22531;
(statearr_22565[(12)] = inst_22474);

(statearr_22565[(14)] = inst_22473);

(statearr_22565[(15)] = inst_22475);

(statearr_22565[(16)] = inst_22472);

return statearr_22565;
})();
var statearr_22566_22603 = state_22531__$1;
(statearr_22566_22603[(2)] = null);

(statearr_22566_22603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (10))){
var inst_22474 = (state_22531[(12)]);
var inst_22473 = (state_22531[(14)]);
var inst_22475 = (state_22531[(15)]);
var inst_22472 = (state_22531[(16)]);
var inst_22480 = cljs.core._nth.call(null,inst_22473,inst_22475);
var inst_22481 = cljs.core.async.muxch_STAR_.call(null,inst_22480);
var inst_22482 = cljs.core.async.close_BANG_.call(null,inst_22481);
var inst_22483 = (inst_22475 + (1));
var tmp22561 = inst_22474;
var tmp22562 = inst_22473;
var tmp22563 = inst_22472;
var inst_22472__$1 = tmp22563;
var inst_22473__$1 = tmp22562;
var inst_22474__$1 = tmp22561;
var inst_22475__$1 = inst_22483;
var state_22531__$1 = (function (){var statearr_22567 = state_22531;
(statearr_22567[(17)] = inst_22482);

(statearr_22567[(12)] = inst_22474__$1);

(statearr_22567[(14)] = inst_22473__$1);

(statearr_22567[(15)] = inst_22475__$1);

(statearr_22567[(16)] = inst_22472__$1);

return statearr_22567;
})();
var statearr_22568_22604 = state_22531__$1;
(statearr_22568_22604[(2)] = null);

(statearr_22568_22604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (18))){
var inst_22501 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22569_22605 = state_22531__$1;
(statearr_22569_22605[(2)] = inst_22501);

(statearr_22569_22605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (8))){
var inst_22474 = (state_22531[(12)]);
var inst_22475 = (state_22531[(15)]);
var inst_22477 = (inst_22475 < inst_22474);
var inst_22478 = inst_22477;
var state_22531__$1 = state_22531;
if(cljs.core.truth_(inst_22478)){
var statearr_22570_22606 = state_22531__$1;
(statearr_22570_22606[(1)] = (10));

} else {
var statearr_22571_22607 = state_22531__$1;
(statearr_22571_22607[(1)] = (11));

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
});})(c__6720__auto___22579,mults,ensure_mult,p))
;
return ((function (switch__6664__auto__,c__6720__auto___22579,mults,ensure_mult,p){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_22575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22575[(0)] = state_machine__6665__auto__);

(statearr_22575[(1)] = (1));

return statearr_22575;
});
var state_machine__6665__auto____1 = (function (state_22531){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_22531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e22576){if((e22576 instanceof Object)){
var ex__6668__auto__ = e22576;
var statearr_22577_22608 = state_22531;
(statearr_22577_22608[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22609 = state_22531;
state_22531 = G__22609;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_22531){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_22531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___22579,mults,ensure_mult,p))
})();
var state__6722__auto__ = (function (){var statearr_22578 = f__6721__auto__.call(null);
(statearr_22578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___22579);

return statearr_22578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___22579,mults,ensure_mult,p))
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
var c__6720__auto___22746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___22746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___22746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22716){
var state_val_22717 = (state_22716[(1)]);
if((state_val_22717 === (7))){
var state_22716__$1 = state_22716;
var statearr_22718_22747 = state_22716__$1;
(statearr_22718_22747[(2)] = null);

(statearr_22718_22747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (1))){
var state_22716__$1 = state_22716;
var statearr_22719_22748 = state_22716__$1;
(statearr_22719_22748[(2)] = null);

(statearr_22719_22748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (4))){
var inst_22680 = (state_22716[(7)]);
var inst_22682 = (inst_22680 < cnt);
var state_22716__$1 = state_22716;
if(cljs.core.truth_(inst_22682)){
var statearr_22720_22749 = state_22716__$1;
(statearr_22720_22749[(1)] = (6));

} else {
var statearr_22721_22750 = state_22716__$1;
(statearr_22721_22750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (15))){
var inst_22712 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
var statearr_22722_22751 = state_22716__$1;
(statearr_22722_22751[(2)] = inst_22712);

(statearr_22722_22751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (13))){
var inst_22705 = cljs.core.async.close_BANG_.call(null,out);
var state_22716__$1 = state_22716;
var statearr_22723_22752 = state_22716__$1;
(statearr_22723_22752[(2)] = inst_22705);

(statearr_22723_22752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (6))){
var state_22716__$1 = state_22716;
var statearr_22724_22753 = state_22716__$1;
(statearr_22724_22753[(2)] = null);

(statearr_22724_22753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (3))){
var inst_22714 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22716__$1,inst_22714);
} else {
if((state_val_22717 === (12))){
var inst_22702 = (state_22716[(8)]);
var inst_22702__$1 = (state_22716[(2)]);
var inst_22703 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22702__$1);
var state_22716__$1 = (function (){var statearr_22725 = state_22716;
(statearr_22725[(8)] = inst_22702__$1);

return statearr_22725;
})();
if(cljs.core.truth_(inst_22703)){
var statearr_22726_22754 = state_22716__$1;
(statearr_22726_22754[(1)] = (13));

} else {
var statearr_22727_22755 = state_22716__$1;
(statearr_22727_22755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (2))){
var inst_22679 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22680 = (0);
var state_22716__$1 = (function (){var statearr_22728 = state_22716;
(statearr_22728[(7)] = inst_22680);

(statearr_22728[(9)] = inst_22679);

return statearr_22728;
})();
var statearr_22729_22756 = state_22716__$1;
(statearr_22729_22756[(2)] = null);

(statearr_22729_22756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (11))){
var inst_22680 = (state_22716[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22716,(10),Object,null,(9));
var inst_22689 = chs__$1.call(null,inst_22680);
var inst_22690 = done.call(null,inst_22680);
var inst_22691 = cljs.core.async.take_BANG_.call(null,inst_22689,inst_22690);
var state_22716__$1 = state_22716;
var statearr_22730_22757 = state_22716__$1;
(statearr_22730_22757[(2)] = inst_22691);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (9))){
var inst_22680 = (state_22716[(7)]);
var inst_22693 = (state_22716[(2)]);
var inst_22694 = (inst_22680 + (1));
var inst_22680__$1 = inst_22694;
var state_22716__$1 = (function (){var statearr_22731 = state_22716;
(statearr_22731[(7)] = inst_22680__$1);

(statearr_22731[(10)] = inst_22693);

return statearr_22731;
})();
var statearr_22732_22758 = state_22716__$1;
(statearr_22732_22758[(2)] = null);

(statearr_22732_22758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (5))){
var inst_22700 = (state_22716[(2)]);
var state_22716__$1 = (function (){var statearr_22733 = state_22716;
(statearr_22733[(11)] = inst_22700);

return statearr_22733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22716__$1,(12),dchan);
} else {
if((state_val_22717 === (14))){
var inst_22702 = (state_22716[(8)]);
var inst_22707 = cljs.core.apply.call(null,f,inst_22702);
var state_22716__$1 = state_22716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22716__$1,(16),out,inst_22707);
} else {
if((state_val_22717 === (16))){
var inst_22709 = (state_22716[(2)]);
var state_22716__$1 = (function (){var statearr_22734 = state_22716;
(statearr_22734[(12)] = inst_22709);

return statearr_22734;
})();
var statearr_22735_22759 = state_22716__$1;
(statearr_22735_22759[(2)] = null);

(statearr_22735_22759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (10))){
var inst_22684 = (state_22716[(2)]);
var inst_22685 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22716__$1 = (function (){var statearr_22736 = state_22716;
(statearr_22736[(13)] = inst_22684);

return statearr_22736;
})();
var statearr_22737_22760 = state_22716__$1;
(statearr_22737_22760[(2)] = inst_22685);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (8))){
var inst_22698 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
var statearr_22738_22761 = state_22716__$1;
(statearr_22738_22761[(2)] = inst_22698);

(statearr_22738_22761[(1)] = (5));


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
});})(c__6720__auto___22746,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6664__auto__,c__6720__auto___22746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_22742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22742[(0)] = state_machine__6665__auto__);

(statearr_22742[(1)] = (1));

return statearr_22742;
});
var state_machine__6665__auto____1 = (function (state_22716){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_22716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e22743){if((e22743 instanceof Object)){
var ex__6668__auto__ = e22743;
var statearr_22744_22762 = state_22716;
(statearr_22744_22762[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22763 = state_22716;
state_22716 = G__22763;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_22716){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_22716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___22746,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6722__auto__ = (function (){var statearr_22745 = f__6721__auto__.call(null);
(statearr_22745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___22746);

return statearr_22745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___22746,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6720__auto___22871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___22871,out){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___22871,out){
return (function (state_22847){
var state_val_22848 = (state_22847[(1)]);
if((state_val_22848 === (7))){
var inst_22826 = (state_22847[(7)]);
var inst_22827 = (state_22847[(8)]);
var inst_22826__$1 = (state_22847[(2)]);
var inst_22827__$1 = cljs.core.nth.call(null,inst_22826__$1,(0),null);
var inst_22828 = cljs.core.nth.call(null,inst_22826__$1,(1),null);
var inst_22829 = (inst_22827__$1 == null);
var state_22847__$1 = (function (){var statearr_22849 = state_22847;
(statearr_22849[(9)] = inst_22828);

(statearr_22849[(7)] = inst_22826__$1);

(statearr_22849[(8)] = inst_22827__$1);

return statearr_22849;
})();
if(cljs.core.truth_(inst_22829)){
var statearr_22850_22872 = state_22847__$1;
(statearr_22850_22872[(1)] = (8));

} else {
var statearr_22851_22873 = state_22847__$1;
(statearr_22851_22873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (1))){
var inst_22818 = cljs.core.vec.call(null,chs);
var inst_22819 = inst_22818;
var state_22847__$1 = (function (){var statearr_22852 = state_22847;
(statearr_22852[(10)] = inst_22819);

return statearr_22852;
})();
var statearr_22853_22874 = state_22847__$1;
(statearr_22853_22874[(2)] = null);

(statearr_22853_22874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (4))){
var inst_22819 = (state_22847[(10)]);
var state_22847__$1 = state_22847;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22847__$1,(7),inst_22819);
} else {
if((state_val_22848 === (6))){
var inst_22843 = (state_22847[(2)]);
var state_22847__$1 = state_22847;
var statearr_22854_22875 = state_22847__$1;
(statearr_22854_22875[(2)] = inst_22843);

(statearr_22854_22875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (3))){
var inst_22845 = (state_22847[(2)]);
var state_22847__$1 = state_22847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22847__$1,inst_22845);
} else {
if((state_val_22848 === (2))){
var inst_22819 = (state_22847[(10)]);
var inst_22821 = cljs.core.count.call(null,inst_22819);
var inst_22822 = (inst_22821 > (0));
var state_22847__$1 = state_22847;
if(cljs.core.truth_(inst_22822)){
var statearr_22856_22876 = state_22847__$1;
(statearr_22856_22876[(1)] = (4));

} else {
var statearr_22857_22877 = state_22847__$1;
(statearr_22857_22877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (11))){
var inst_22819 = (state_22847[(10)]);
var inst_22836 = (state_22847[(2)]);
var tmp22855 = inst_22819;
var inst_22819__$1 = tmp22855;
var state_22847__$1 = (function (){var statearr_22858 = state_22847;
(statearr_22858[(11)] = inst_22836);

(statearr_22858[(10)] = inst_22819__$1);

return statearr_22858;
})();
var statearr_22859_22878 = state_22847__$1;
(statearr_22859_22878[(2)] = null);

(statearr_22859_22878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (9))){
var inst_22827 = (state_22847[(8)]);
var state_22847__$1 = state_22847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22847__$1,(11),out,inst_22827);
} else {
if((state_val_22848 === (5))){
var inst_22841 = cljs.core.async.close_BANG_.call(null,out);
var state_22847__$1 = state_22847;
var statearr_22860_22879 = state_22847__$1;
(statearr_22860_22879[(2)] = inst_22841);

(statearr_22860_22879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (10))){
var inst_22839 = (state_22847[(2)]);
var state_22847__$1 = state_22847;
var statearr_22861_22880 = state_22847__$1;
(statearr_22861_22880[(2)] = inst_22839);

(statearr_22861_22880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (8))){
var inst_22828 = (state_22847[(9)]);
var inst_22826 = (state_22847[(7)]);
var inst_22819 = (state_22847[(10)]);
var inst_22827 = (state_22847[(8)]);
var inst_22831 = (function (){var c = inst_22828;
var v = inst_22827;
var vec__22824 = inst_22826;
var cs = inst_22819;
return ((function (c,v,vec__22824,cs,inst_22828,inst_22826,inst_22819,inst_22827,state_val_22848,c__6720__auto___22871,out){
return (function (p1__22764_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22764_SHARP_);
});
;})(c,v,vec__22824,cs,inst_22828,inst_22826,inst_22819,inst_22827,state_val_22848,c__6720__auto___22871,out))
})();
var inst_22832 = cljs.core.filterv.call(null,inst_22831,inst_22819);
var inst_22819__$1 = inst_22832;
var state_22847__$1 = (function (){var statearr_22862 = state_22847;
(statearr_22862[(10)] = inst_22819__$1);

return statearr_22862;
})();
var statearr_22863_22881 = state_22847__$1;
(statearr_22863_22881[(2)] = null);

(statearr_22863_22881[(1)] = (2));


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
});})(c__6720__auto___22871,out))
;
return ((function (switch__6664__auto__,c__6720__auto___22871,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_22867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22867[(0)] = state_machine__6665__auto__);

(statearr_22867[(1)] = (1));

return statearr_22867;
});
var state_machine__6665__auto____1 = (function (state_22847){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_22847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e22868){if((e22868 instanceof Object)){
var ex__6668__auto__ = e22868;
var statearr_22869_22882 = state_22847;
(statearr_22869_22882[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22883 = state_22847;
state_22847 = G__22883;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_22847){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_22847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___22871,out))
})();
var state__6722__auto__ = (function (){var statearr_22870 = f__6721__auto__.call(null);
(statearr_22870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___22871);

return statearr_22870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___22871,out))
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
var c__6720__auto___22976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___22976,out){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___22976,out){
return (function (state_22953){
var state_val_22954 = (state_22953[(1)]);
if((state_val_22954 === (7))){
var inst_22935 = (state_22953[(7)]);
var inst_22935__$1 = (state_22953[(2)]);
var inst_22936 = (inst_22935__$1 == null);
var inst_22937 = cljs.core.not.call(null,inst_22936);
var state_22953__$1 = (function (){var statearr_22955 = state_22953;
(statearr_22955[(7)] = inst_22935__$1);

return statearr_22955;
})();
if(inst_22937){
var statearr_22956_22977 = state_22953__$1;
(statearr_22956_22977[(1)] = (8));

} else {
var statearr_22957_22978 = state_22953__$1;
(statearr_22957_22978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (1))){
var inst_22930 = (0);
var state_22953__$1 = (function (){var statearr_22958 = state_22953;
(statearr_22958[(8)] = inst_22930);

return statearr_22958;
})();
var statearr_22959_22979 = state_22953__$1;
(statearr_22959_22979[(2)] = null);

(statearr_22959_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (4))){
var state_22953__$1 = state_22953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22953__$1,(7),ch);
} else {
if((state_val_22954 === (6))){
var inst_22948 = (state_22953[(2)]);
var state_22953__$1 = state_22953;
var statearr_22960_22980 = state_22953__$1;
(statearr_22960_22980[(2)] = inst_22948);

(statearr_22960_22980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (3))){
var inst_22950 = (state_22953[(2)]);
var inst_22951 = cljs.core.async.close_BANG_.call(null,out);
var state_22953__$1 = (function (){var statearr_22961 = state_22953;
(statearr_22961[(9)] = inst_22950);

return statearr_22961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22953__$1,inst_22951);
} else {
if((state_val_22954 === (2))){
var inst_22930 = (state_22953[(8)]);
var inst_22932 = (inst_22930 < n);
var state_22953__$1 = state_22953;
if(cljs.core.truth_(inst_22932)){
var statearr_22962_22981 = state_22953__$1;
(statearr_22962_22981[(1)] = (4));

} else {
var statearr_22963_22982 = state_22953__$1;
(statearr_22963_22982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (11))){
var inst_22930 = (state_22953[(8)]);
var inst_22940 = (state_22953[(2)]);
var inst_22941 = (inst_22930 + (1));
var inst_22930__$1 = inst_22941;
var state_22953__$1 = (function (){var statearr_22964 = state_22953;
(statearr_22964[(8)] = inst_22930__$1);

(statearr_22964[(10)] = inst_22940);

return statearr_22964;
})();
var statearr_22965_22983 = state_22953__$1;
(statearr_22965_22983[(2)] = null);

(statearr_22965_22983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (9))){
var state_22953__$1 = state_22953;
var statearr_22966_22984 = state_22953__$1;
(statearr_22966_22984[(2)] = null);

(statearr_22966_22984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (5))){
var state_22953__$1 = state_22953;
var statearr_22967_22985 = state_22953__$1;
(statearr_22967_22985[(2)] = null);

(statearr_22967_22985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (10))){
var inst_22945 = (state_22953[(2)]);
var state_22953__$1 = state_22953;
var statearr_22968_22986 = state_22953__$1;
(statearr_22968_22986[(2)] = inst_22945);

(statearr_22968_22986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (8))){
var inst_22935 = (state_22953[(7)]);
var state_22953__$1 = state_22953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22953__$1,(11),out,inst_22935);
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
});})(c__6720__auto___22976,out))
;
return ((function (switch__6664__auto__,c__6720__auto___22976,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_22972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22972[(0)] = state_machine__6665__auto__);

(statearr_22972[(1)] = (1));

return statearr_22972;
});
var state_machine__6665__auto____1 = (function (state_22953){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_22953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e22973){if((e22973 instanceof Object)){
var ex__6668__auto__ = e22973;
var statearr_22974_22987 = state_22953;
(statearr_22974_22987[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22988 = state_22953;
state_22953 = G__22988;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_22953){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_22953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___22976,out))
})();
var state__6722__auto__ = (function (){var statearr_22975 = f__6721__auto__.call(null);
(statearr_22975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___22976);

return statearr_22975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___22976,out))
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
if(typeof cljs.core.async.t22996 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22996 = (function (ch,f,map_LT_,meta22997){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22997 = meta22997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22999 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22999 = (function (fn1,_,meta22997,map_LT_,f,ch,meta23000){
this.fn1 = fn1;
this._ = _;
this.meta22997 = meta22997;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23000 = meta23000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22989_SHARP_){
return f1.call(null,(((p1__22989_SHARP_ == null))?null:self__.f.call(null,p1__22989_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23001){
var self__ = this;
var _23001__$1 = this;
return self__.meta23000;
});})(___$1))
;

cljs.core.async.t22999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23001,meta23000__$1){
var self__ = this;
var _23001__$1 = this;
return (new cljs.core.async.t22999(self__.fn1,self__._,self__.meta22997,self__.map_LT_,self__.f,self__.ch,meta23000__$1));
});})(___$1))
;

cljs.core.async.t22999.cljs$lang$type = true;

cljs.core.async.t22999.cljs$lang$ctorStr = "cljs.core.async/t22999";

cljs.core.async.t22999.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22999");
});})(___$1))
;

cljs.core.async.__GT_t22999 = ((function (___$1){
return (function __GT_t22999(fn1__$1,___$2,meta22997__$1,map_LT___$1,f__$1,ch__$1,meta23000){
return (new cljs.core.async.t22999(fn1__$1,___$2,meta22997__$1,map_LT___$1,f__$1,ch__$1,meta23000));
});})(___$1))
;

}

return (new cljs.core.async.t22999(fn1,___$1,self__.meta22997,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22998){
var self__ = this;
var _22998__$1 = this;
return self__.meta22997;
});

cljs.core.async.t22996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22998,meta22997__$1){
var self__ = this;
var _22998__$1 = this;
return (new cljs.core.async.t22996(self__.ch,self__.f,self__.map_LT_,meta22997__$1));
});

cljs.core.async.t22996.cljs$lang$type = true;

cljs.core.async.t22996.cljs$lang$ctorStr = "cljs.core.async/t22996";

cljs.core.async.t22996.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22996");
});

cljs.core.async.__GT_t22996 = (function __GT_t22996(ch__$1,f__$1,map_LT___$1,meta22997){
return (new cljs.core.async.t22996(ch__$1,f__$1,map_LT___$1,meta22997));
});

}

return (new cljs.core.async.t22996(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23005 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23005 = (function (ch,f,map_GT_,meta23006){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23006 = meta23006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23005.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t23005.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23005.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23007){
var self__ = this;
var _23007__$1 = this;
return self__.meta23006;
});

cljs.core.async.t23005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23007,meta23006__$1){
var self__ = this;
var _23007__$1 = this;
return (new cljs.core.async.t23005(self__.ch,self__.f,self__.map_GT_,meta23006__$1));
});

cljs.core.async.t23005.cljs$lang$type = true;

cljs.core.async.t23005.cljs$lang$ctorStr = "cljs.core.async/t23005";

cljs.core.async.t23005.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23005");
});

cljs.core.async.__GT_t23005 = (function __GT_t23005(ch__$1,f__$1,map_GT___$1,meta23006){
return (new cljs.core.async.t23005(ch__$1,f__$1,map_GT___$1,meta23006));
});

}

return (new cljs.core.async.t23005(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23011 = (function (ch,p,filter_GT_,meta23012){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23012 = meta23012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23011.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23011.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23011.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23013){
var self__ = this;
var _23013__$1 = this;
return self__.meta23012;
});

cljs.core.async.t23011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23013,meta23012__$1){
var self__ = this;
var _23013__$1 = this;
return (new cljs.core.async.t23011(self__.ch,self__.p,self__.filter_GT_,meta23012__$1));
});

cljs.core.async.t23011.cljs$lang$type = true;

cljs.core.async.t23011.cljs$lang$ctorStr = "cljs.core.async/t23011";

cljs.core.async.t23011.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23011");
});

cljs.core.async.__GT_t23011 = (function __GT_t23011(ch__$1,p__$1,filter_GT___$1,meta23012){
return (new cljs.core.async.t23011(ch__$1,p__$1,filter_GT___$1,meta23012));
});

}

return (new cljs.core.async.t23011(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6720__auto___23096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___23096,out){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___23096,out){
return (function (state_23075){
var state_val_23076 = (state_23075[(1)]);
if((state_val_23076 === (7))){
var inst_23071 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23077_23097 = state_23075__$1;
(statearr_23077_23097[(2)] = inst_23071);

(statearr_23077_23097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (1))){
var state_23075__$1 = state_23075;
var statearr_23078_23098 = state_23075__$1;
(statearr_23078_23098[(2)] = null);

(statearr_23078_23098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (4))){
var inst_23057 = (state_23075[(7)]);
var inst_23057__$1 = (state_23075[(2)]);
var inst_23058 = (inst_23057__$1 == null);
var state_23075__$1 = (function (){var statearr_23079 = state_23075;
(statearr_23079[(7)] = inst_23057__$1);

return statearr_23079;
})();
if(cljs.core.truth_(inst_23058)){
var statearr_23080_23099 = state_23075__$1;
(statearr_23080_23099[(1)] = (5));

} else {
var statearr_23081_23100 = state_23075__$1;
(statearr_23081_23100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (6))){
var inst_23057 = (state_23075[(7)]);
var inst_23062 = p.call(null,inst_23057);
var state_23075__$1 = state_23075;
if(cljs.core.truth_(inst_23062)){
var statearr_23082_23101 = state_23075__$1;
(statearr_23082_23101[(1)] = (8));

} else {
var statearr_23083_23102 = state_23075__$1;
(statearr_23083_23102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (3))){
var inst_23073 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23075__$1,inst_23073);
} else {
if((state_val_23076 === (2))){
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23075__$1,(4),ch);
} else {
if((state_val_23076 === (11))){
var inst_23065 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23084_23103 = state_23075__$1;
(statearr_23084_23103[(2)] = inst_23065);

(statearr_23084_23103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (9))){
var state_23075__$1 = state_23075;
var statearr_23085_23104 = state_23075__$1;
(statearr_23085_23104[(2)] = null);

(statearr_23085_23104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (5))){
var inst_23060 = cljs.core.async.close_BANG_.call(null,out);
var state_23075__$1 = state_23075;
var statearr_23086_23105 = state_23075__$1;
(statearr_23086_23105[(2)] = inst_23060);

(statearr_23086_23105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (10))){
var inst_23068 = (state_23075[(2)]);
var state_23075__$1 = (function (){var statearr_23087 = state_23075;
(statearr_23087[(8)] = inst_23068);

return statearr_23087;
})();
var statearr_23088_23106 = state_23075__$1;
(statearr_23088_23106[(2)] = null);

(statearr_23088_23106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (8))){
var inst_23057 = (state_23075[(7)]);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23075__$1,(11),out,inst_23057);
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
});})(c__6720__auto___23096,out))
;
return ((function (switch__6664__auto__,c__6720__auto___23096,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_23092 = [null,null,null,null,null,null,null,null,null];
(statearr_23092[(0)] = state_machine__6665__auto__);

(statearr_23092[(1)] = (1));

return statearr_23092;
});
var state_machine__6665__auto____1 = (function (state_23075){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_23075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e23093){if((e23093 instanceof Object)){
var ex__6668__auto__ = e23093;
var statearr_23094_23107 = state_23075;
(statearr_23094_23107[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23108 = state_23075;
state_23075 = G__23108;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_23075){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_23075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___23096,out))
})();
var state__6722__auto__ = (function (){var statearr_23095 = f__6721__auto__.call(null);
(statearr_23095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___23096);

return statearr_23095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___23096,out))
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
var c__6720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto__){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto__){
return (function (state_23274){
var state_val_23275 = (state_23274[(1)]);
if((state_val_23275 === (7))){
var inst_23270 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23276_23317 = state_23274__$1;
(statearr_23276_23317[(2)] = inst_23270);

(statearr_23276_23317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (20))){
var inst_23240 = (state_23274[(7)]);
var inst_23251 = (state_23274[(2)]);
var inst_23252 = cljs.core.next.call(null,inst_23240);
var inst_23226 = inst_23252;
var inst_23227 = null;
var inst_23228 = (0);
var inst_23229 = (0);
var state_23274__$1 = (function (){var statearr_23277 = state_23274;
(statearr_23277[(8)] = inst_23226);

(statearr_23277[(9)] = inst_23227);

(statearr_23277[(10)] = inst_23228);

(statearr_23277[(11)] = inst_23229);

(statearr_23277[(12)] = inst_23251);

return statearr_23277;
})();
var statearr_23278_23318 = state_23274__$1;
(statearr_23278_23318[(2)] = null);

(statearr_23278_23318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (1))){
var state_23274__$1 = state_23274;
var statearr_23279_23319 = state_23274__$1;
(statearr_23279_23319[(2)] = null);

(statearr_23279_23319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (4))){
var inst_23215 = (state_23274[(13)]);
var inst_23215__$1 = (state_23274[(2)]);
var inst_23216 = (inst_23215__$1 == null);
var state_23274__$1 = (function (){var statearr_23280 = state_23274;
(statearr_23280[(13)] = inst_23215__$1);

return statearr_23280;
})();
if(cljs.core.truth_(inst_23216)){
var statearr_23281_23320 = state_23274__$1;
(statearr_23281_23320[(1)] = (5));

} else {
var statearr_23282_23321 = state_23274__$1;
(statearr_23282_23321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (15))){
var state_23274__$1 = state_23274;
var statearr_23286_23322 = state_23274__$1;
(statearr_23286_23322[(2)] = null);

(statearr_23286_23322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (21))){
var state_23274__$1 = state_23274;
var statearr_23287_23323 = state_23274__$1;
(statearr_23287_23323[(2)] = null);

(statearr_23287_23323[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (13))){
var inst_23226 = (state_23274[(8)]);
var inst_23227 = (state_23274[(9)]);
var inst_23228 = (state_23274[(10)]);
var inst_23229 = (state_23274[(11)]);
var inst_23236 = (state_23274[(2)]);
var inst_23237 = (inst_23229 + (1));
var tmp23283 = inst_23226;
var tmp23284 = inst_23227;
var tmp23285 = inst_23228;
var inst_23226__$1 = tmp23283;
var inst_23227__$1 = tmp23284;
var inst_23228__$1 = tmp23285;
var inst_23229__$1 = inst_23237;
var state_23274__$1 = (function (){var statearr_23288 = state_23274;
(statearr_23288[(8)] = inst_23226__$1);

(statearr_23288[(9)] = inst_23227__$1);

(statearr_23288[(10)] = inst_23228__$1);

(statearr_23288[(14)] = inst_23236);

(statearr_23288[(11)] = inst_23229__$1);

return statearr_23288;
})();
var statearr_23289_23324 = state_23274__$1;
(statearr_23289_23324[(2)] = null);

(statearr_23289_23324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (22))){
var state_23274__$1 = state_23274;
var statearr_23290_23325 = state_23274__$1;
(statearr_23290_23325[(2)] = null);

(statearr_23290_23325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (6))){
var inst_23215 = (state_23274[(13)]);
var inst_23224 = f.call(null,inst_23215);
var inst_23225 = cljs.core.seq.call(null,inst_23224);
var inst_23226 = inst_23225;
var inst_23227 = null;
var inst_23228 = (0);
var inst_23229 = (0);
var state_23274__$1 = (function (){var statearr_23291 = state_23274;
(statearr_23291[(8)] = inst_23226);

(statearr_23291[(9)] = inst_23227);

(statearr_23291[(10)] = inst_23228);

(statearr_23291[(11)] = inst_23229);

return statearr_23291;
})();
var statearr_23292_23326 = state_23274__$1;
(statearr_23292_23326[(2)] = null);

(statearr_23292_23326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (17))){
var inst_23240 = (state_23274[(7)]);
var inst_23244 = cljs.core.chunk_first.call(null,inst_23240);
var inst_23245 = cljs.core.chunk_rest.call(null,inst_23240);
var inst_23246 = cljs.core.count.call(null,inst_23244);
var inst_23226 = inst_23245;
var inst_23227 = inst_23244;
var inst_23228 = inst_23246;
var inst_23229 = (0);
var state_23274__$1 = (function (){var statearr_23293 = state_23274;
(statearr_23293[(8)] = inst_23226);

(statearr_23293[(9)] = inst_23227);

(statearr_23293[(10)] = inst_23228);

(statearr_23293[(11)] = inst_23229);

return statearr_23293;
})();
var statearr_23294_23327 = state_23274__$1;
(statearr_23294_23327[(2)] = null);

(statearr_23294_23327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (3))){
var inst_23272 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23274__$1,inst_23272);
} else {
if((state_val_23275 === (12))){
var inst_23260 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23295_23328 = state_23274__$1;
(statearr_23295_23328[(2)] = inst_23260);

(statearr_23295_23328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (2))){
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23274__$1,(4),in$);
} else {
if((state_val_23275 === (23))){
var inst_23268 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23296_23329 = state_23274__$1;
(statearr_23296_23329[(2)] = inst_23268);

(statearr_23296_23329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (19))){
var inst_23255 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23297_23330 = state_23274__$1;
(statearr_23297_23330[(2)] = inst_23255);

(statearr_23297_23330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (11))){
var inst_23226 = (state_23274[(8)]);
var inst_23240 = (state_23274[(7)]);
var inst_23240__$1 = cljs.core.seq.call(null,inst_23226);
var state_23274__$1 = (function (){var statearr_23298 = state_23274;
(statearr_23298[(7)] = inst_23240__$1);

return statearr_23298;
})();
if(inst_23240__$1){
var statearr_23299_23331 = state_23274__$1;
(statearr_23299_23331[(1)] = (14));

} else {
var statearr_23300_23332 = state_23274__$1;
(statearr_23300_23332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (9))){
var inst_23262 = (state_23274[(2)]);
var inst_23263 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23274__$1 = (function (){var statearr_23301 = state_23274;
(statearr_23301[(15)] = inst_23262);

return statearr_23301;
})();
if(cljs.core.truth_(inst_23263)){
var statearr_23302_23333 = state_23274__$1;
(statearr_23302_23333[(1)] = (21));

} else {
var statearr_23303_23334 = state_23274__$1;
(statearr_23303_23334[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (5))){
var inst_23218 = cljs.core.async.close_BANG_.call(null,out);
var state_23274__$1 = state_23274;
var statearr_23304_23335 = state_23274__$1;
(statearr_23304_23335[(2)] = inst_23218);

(statearr_23304_23335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (14))){
var inst_23240 = (state_23274[(7)]);
var inst_23242 = cljs.core.chunked_seq_QMARK_.call(null,inst_23240);
var state_23274__$1 = state_23274;
if(inst_23242){
var statearr_23305_23336 = state_23274__$1;
(statearr_23305_23336[(1)] = (17));

} else {
var statearr_23306_23337 = state_23274__$1;
(statearr_23306_23337[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (16))){
var inst_23258 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23307_23338 = state_23274__$1;
(statearr_23307_23338[(2)] = inst_23258);

(statearr_23307_23338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (10))){
var inst_23227 = (state_23274[(9)]);
var inst_23229 = (state_23274[(11)]);
var inst_23234 = cljs.core._nth.call(null,inst_23227,inst_23229);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23274__$1,(13),out,inst_23234);
} else {
if((state_val_23275 === (18))){
var inst_23240 = (state_23274[(7)]);
var inst_23249 = cljs.core.first.call(null,inst_23240);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23274__$1,(20),out,inst_23249);
} else {
if((state_val_23275 === (8))){
var inst_23228 = (state_23274[(10)]);
var inst_23229 = (state_23274[(11)]);
var inst_23231 = (inst_23229 < inst_23228);
var inst_23232 = inst_23231;
var state_23274__$1 = state_23274;
if(cljs.core.truth_(inst_23232)){
var statearr_23308_23339 = state_23274__$1;
(statearr_23308_23339[(1)] = (10));

} else {
var statearr_23309_23340 = state_23274__$1;
(statearr_23309_23340[(1)] = (11));

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
});})(c__6720__auto__))
;
return ((function (switch__6664__auto__,c__6720__auto__){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_23313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23313[(0)] = state_machine__6665__auto__);

(statearr_23313[(1)] = (1));

return statearr_23313;
});
var state_machine__6665__auto____1 = (function (state_23274){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_23274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e23314){if((e23314 instanceof Object)){
var ex__6668__auto__ = e23314;
var statearr_23315_23341 = state_23274;
(statearr_23315_23341[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23342 = state_23274;
state_23274 = G__23342;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_23274){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_23274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto__))
})();
var state__6722__auto__ = (function (){var statearr_23316 = f__6721__auto__.call(null);
(statearr_23316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto__);

return statearr_23316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto__))
);

return c__6720__auto__;
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
var c__6720__auto___23439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___23439,out){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___23439,out){
return (function (state_23414){
var state_val_23415 = (state_23414[(1)]);
if((state_val_23415 === (7))){
var inst_23409 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
var statearr_23416_23440 = state_23414__$1;
(statearr_23416_23440[(2)] = inst_23409);

(statearr_23416_23440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (1))){
var inst_23391 = null;
var state_23414__$1 = (function (){var statearr_23417 = state_23414;
(statearr_23417[(7)] = inst_23391);

return statearr_23417;
})();
var statearr_23418_23441 = state_23414__$1;
(statearr_23418_23441[(2)] = null);

(statearr_23418_23441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (4))){
var inst_23394 = (state_23414[(8)]);
var inst_23394__$1 = (state_23414[(2)]);
var inst_23395 = (inst_23394__$1 == null);
var inst_23396 = cljs.core.not.call(null,inst_23395);
var state_23414__$1 = (function (){var statearr_23419 = state_23414;
(statearr_23419[(8)] = inst_23394__$1);

return statearr_23419;
})();
if(inst_23396){
var statearr_23420_23442 = state_23414__$1;
(statearr_23420_23442[(1)] = (5));

} else {
var statearr_23421_23443 = state_23414__$1;
(statearr_23421_23443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (6))){
var state_23414__$1 = state_23414;
var statearr_23422_23444 = state_23414__$1;
(statearr_23422_23444[(2)] = null);

(statearr_23422_23444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (3))){
var inst_23411 = (state_23414[(2)]);
var inst_23412 = cljs.core.async.close_BANG_.call(null,out);
var state_23414__$1 = (function (){var statearr_23423 = state_23414;
(statearr_23423[(9)] = inst_23411);

return statearr_23423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23414__$1,inst_23412);
} else {
if((state_val_23415 === (2))){
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23414__$1,(4),ch);
} else {
if((state_val_23415 === (11))){
var inst_23394 = (state_23414[(8)]);
var inst_23403 = (state_23414[(2)]);
var inst_23391 = inst_23394;
var state_23414__$1 = (function (){var statearr_23424 = state_23414;
(statearr_23424[(10)] = inst_23403);

(statearr_23424[(7)] = inst_23391);

return statearr_23424;
})();
var statearr_23425_23445 = state_23414__$1;
(statearr_23425_23445[(2)] = null);

(statearr_23425_23445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (9))){
var inst_23394 = (state_23414[(8)]);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23414__$1,(11),out,inst_23394);
} else {
if((state_val_23415 === (5))){
var inst_23394 = (state_23414[(8)]);
var inst_23391 = (state_23414[(7)]);
var inst_23398 = cljs.core._EQ_.call(null,inst_23394,inst_23391);
var state_23414__$1 = state_23414;
if(inst_23398){
var statearr_23427_23446 = state_23414__$1;
(statearr_23427_23446[(1)] = (8));

} else {
var statearr_23428_23447 = state_23414__$1;
(statearr_23428_23447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (10))){
var inst_23406 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
var statearr_23429_23448 = state_23414__$1;
(statearr_23429_23448[(2)] = inst_23406);

(statearr_23429_23448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (8))){
var inst_23391 = (state_23414[(7)]);
var tmp23426 = inst_23391;
var inst_23391__$1 = tmp23426;
var state_23414__$1 = (function (){var statearr_23430 = state_23414;
(statearr_23430[(7)] = inst_23391__$1);

return statearr_23430;
})();
var statearr_23431_23449 = state_23414__$1;
(statearr_23431_23449[(2)] = null);

(statearr_23431_23449[(1)] = (2));


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
});})(c__6720__auto___23439,out))
;
return ((function (switch__6664__auto__,c__6720__auto___23439,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_23435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23435[(0)] = state_machine__6665__auto__);

(statearr_23435[(1)] = (1));

return statearr_23435;
});
var state_machine__6665__auto____1 = (function (state_23414){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_23414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e23436){if((e23436 instanceof Object)){
var ex__6668__auto__ = e23436;
var statearr_23437_23450 = state_23414;
(statearr_23437_23450[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23451 = state_23414;
state_23414 = G__23451;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_23414){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_23414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___23439,out))
})();
var state__6722__auto__ = (function (){var statearr_23438 = f__6721__auto__.call(null);
(statearr_23438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___23439);

return statearr_23438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___23439,out))
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
var c__6720__auto___23586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___23586,out){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___23586,out){
return (function (state_23556){
var state_val_23557 = (state_23556[(1)]);
if((state_val_23557 === (7))){
var inst_23552 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23558_23587 = state_23556__$1;
(statearr_23558_23587[(2)] = inst_23552);

(statearr_23558_23587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (1))){
var inst_23519 = (new Array(n));
var inst_23520 = inst_23519;
var inst_23521 = (0);
var state_23556__$1 = (function (){var statearr_23559 = state_23556;
(statearr_23559[(7)] = inst_23520);

(statearr_23559[(8)] = inst_23521);

return statearr_23559;
})();
var statearr_23560_23588 = state_23556__$1;
(statearr_23560_23588[(2)] = null);

(statearr_23560_23588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (4))){
var inst_23524 = (state_23556[(9)]);
var inst_23524__$1 = (state_23556[(2)]);
var inst_23525 = (inst_23524__$1 == null);
var inst_23526 = cljs.core.not.call(null,inst_23525);
var state_23556__$1 = (function (){var statearr_23561 = state_23556;
(statearr_23561[(9)] = inst_23524__$1);

return statearr_23561;
})();
if(inst_23526){
var statearr_23562_23589 = state_23556__$1;
(statearr_23562_23589[(1)] = (5));

} else {
var statearr_23563_23590 = state_23556__$1;
(statearr_23563_23590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (15))){
var inst_23546 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23564_23591 = state_23556__$1;
(statearr_23564_23591[(2)] = inst_23546);

(statearr_23564_23591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (13))){
var state_23556__$1 = state_23556;
var statearr_23565_23592 = state_23556__$1;
(statearr_23565_23592[(2)] = null);

(statearr_23565_23592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (6))){
var inst_23521 = (state_23556[(8)]);
var inst_23542 = (inst_23521 > (0));
var state_23556__$1 = state_23556;
if(cljs.core.truth_(inst_23542)){
var statearr_23566_23593 = state_23556__$1;
(statearr_23566_23593[(1)] = (12));

} else {
var statearr_23567_23594 = state_23556__$1;
(statearr_23567_23594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (3))){
var inst_23554 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23556__$1,inst_23554);
} else {
if((state_val_23557 === (12))){
var inst_23520 = (state_23556[(7)]);
var inst_23544 = cljs.core.vec.call(null,inst_23520);
var state_23556__$1 = state_23556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23556__$1,(15),out,inst_23544);
} else {
if((state_val_23557 === (2))){
var state_23556__$1 = state_23556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23556__$1,(4),ch);
} else {
if((state_val_23557 === (11))){
var inst_23536 = (state_23556[(2)]);
var inst_23537 = (new Array(n));
var inst_23520 = inst_23537;
var inst_23521 = (0);
var state_23556__$1 = (function (){var statearr_23568 = state_23556;
(statearr_23568[(7)] = inst_23520);

(statearr_23568[(10)] = inst_23536);

(statearr_23568[(8)] = inst_23521);

return statearr_23568;
})();
var statearr_23569_23595 = state_23556__$1;
(statearr_23569_23595[(2)] = null);

(statearr_23569_23595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (9))){
var inst_23520 = (state_23556[(7)]);
var inst_23534 = cljs.core.vec.call(null,inst_23520);
var state_23556__$1 = state_23556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23556__$1,(11),out,inst_23534);
} else {
if((state_val_23557 === (5))){
var inst_23520 = (state_23556[(7)]);
var inst_23529 = (state_23556[(11)]);
var inst_23524 = (state_23556[(9)]);
var inst_23521 = (state_23556[(8)]);
var inst_23528 = (inst_23520[inst_23521] = inst_23524);
var inst_23529__$1 = (inst_23521 + (1));
var inst_23530 = (inst_23529__$1 < n);
var state_23556__$1 = (function (){var statearr_23570 = state_23556;
(statearr_23570[(11)] = inst_23529__$1);

(statearr_23570[(12)] = inst_23528);

return statearr_23570;
})();
if(cljs.core.truth_(inst_23530)){
var statearr_23571_23596 = state_23556__$1;
(statearr_23571_23596[(1)] = (8));

} else {
var statearr_23572_23597 = state_23556__$1;
(statearr_23572_23597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (14))){
var inst_23549 = (state_23556[(2)]);
var inst_23550 = cljs.core.async.close_BANG_.call(null,out);
var state_23556__$1 = (function (){var statearr_23574 = state_23556;
(statearr_23574[(13)] = inst_23549);

return statearr_23574;
})();
var statearr_23575_23598 = state_23556__$1;
(statearr_23575_23598[(2)] = inst_23550);

(statearr_23575_23598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (10))){
var inst_23540 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23576_23599 = state_23556__$1;
(statearr_23576_23599[(2)] = inst_23540);

(statearr_23576_23599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (8))){
var inst_23520 = (state_23556[(7)]);
var inst_23529 = (state_23556[(11)]);
var tmp23573 = inst_23520;
var inst_23520__$1 = tmp23573;
var inst_23521 = inst_23529;
var state_23556__$1 = (function (){var statearr_23577 = state_23556;
(statearr_23577[(7)] = inst_23520__$1);

(statearr_23577[(8)] = inst_23521);

return statearr_23577;
})();
var statearr_23578_23600 = state_23556__$1;
(statearr_23578_23600[(2)] = null);

(statearr_23578_23600[(1)] = (2));


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
});})(c__6720__auto___23586,out))
;
return ((function (switch__6664__auto__,c__6720__auto___23586,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_23582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23582[(0)] = state_machine__6665__auto__);

(statearr_23582[(1)] = (1));

return statearr_23582;
});
var state_machine__6665__auto____1 = (function (state_23556){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_23556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e23583){if((e23583 instanceof Object)){
var ex__6668__auto__ = e23583;
var statearr_23584_23601 = state_23556;
(statearr_23584_23601[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23602 = state_23556;
state_23556 = G__23602;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_23556){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_23556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___23586,out))
})();
var state__6722__auto__ = (function (){var statearr_23585 = f__6721__auto__.call(null);
(statearr_23585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___23586);

return statearr_23585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___23586,out))
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
var c__6720__auto___23745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6720__auto___23745,out){
return (function (){
var f__6721__auto__ = (function (){var switch__6664__auto__ = ((function (c__6720__auto___23745,out){
return (function (state_23715){
var state_val_23716 = (state_23715[(1)]);
if((state_val_23716 === (7))){
var inst_23711 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23717_23746 = state_23715__$1;
(statearr_23717_23746[(2)] = inst_23711);

(statearr_23717_23746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (1))){
var inst_23674 = [];
var inst_23675 = inst_23674;
var inst_23676 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23715__$1 = (function (){var statearr_23718 = state_23715;
(statearr_23718[(7)] = inst_23676);

(statearr_23718[(8)] = inst_23675);

return statearr_23718;
})();
var statearr_23719_23747 = state_23715__$1;
(statearr_23719_23747[(2)] = null);

(statearr_23719_23747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (4))){
var inst_23679 = (state_23715[(9)]);
var inst_23679__$1 = (state_23715[(2)]);
var inst_23680 = (inst_23679__$1 == null);
var inst_23681 = cljs.core.not.call(null,inst_23680);
var state_23715__$1 = (function (){var statearr_23720 = state_23715;
(statearr_23720[(9)] = inst_23679__$1);

return statearr_23720;
})();
if(inst_23681){
var statearr_23721_23748 = state_23715__$1;
(statearr_23721_23748[(1)] = (5));

} else {
var statearr_23722_23749 = state_23715__$1;
(statearr_23722_23749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (15))){
var inst_23705 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23723_23750 = state_23715__$1;
(statearr_23723_23750[(2)] = inst_23705);

(statearr_23723_23750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (13))){
var state_23715__$1 = state_23715;
var statearr_23724_23751 = state_23715__$1;
(statearr_23724_23751[(2)] = null);

(statearr_23724_23751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (6))){
var inst_23675 = (state_23715[(8)]);
var inst_23700 = inst_23675.length;
var inst_23701 = (inst_23700 > (0));
var state_23715__$1 = state_23715;
if(cljs.core.truth_(inst_23701)){
var statearr_23725_23752 = state_23715__$1;
(statearr_23725_23752[(1)] = (12));

} else {
var statearr_23726_23753 = state_23715__$1;
(statearr_23726_23753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (3))){
var inst_23713 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23715__$1,inst_23713);
} else {
if((state_val_23716 === (12))){
var inst_23675 = (state_23715[(8)]);
var inst_23703 = cljs.core.vec.call(null,inst_23675);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(15),out,inst_23703);
} else {
if((state_val_23716 === (2))){
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23715__$1,(4),ch);
} else {
if((state_val_23716 === (11))){
var inst_23679 = (state_23715[(9)]);
var inst_23683 = (state_23715[(10)]);
var inst_23693 = (state_23715[(2)]);
var inst_23694 = [];
var inst_23695 = inst_23694.push(inst_23679);
var inst_23675 = inst_23694;
var inst_23676 = inst_23683;
var state_23715__$1 = (function (){var statearr_23727 = state_23715;
(statearr_23727[(7)] = inst_23676);

(statearr_23727[(8)] = inst_23675);

(statearr_23727[(11)] = inst_23695);

(statearr_23727[(12)] = inst_23693);

return statearr_23727;
})();
var statearr_23728_23754 = state_23715__$1;
(statearr_23728_23754[(2)] = null);

(statearr_23728_23754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (9))){
var inst_23675 = (state_23715[(8)]);
var inst_23691 = cljs.core.vec.call(null,inst_23675);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(11),out,inst_23691);
} else {
if((state_val_23716 === (5))){
var inst_23676 = (state_23715[(7)]);
var inst_23679 = (state_23715[(9)]);
var inst_23683 = (state_23715[(10)]);
var inst_23683__$1 = f.call(null,inst_23679);
var inst_23684 = cljs.core._EQ_.call(null,inst_23683__$1,inst_23676);
var inst_23685 = cljs.core.keyword_identical_QMARK_.call(null,inst_23676,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23686 = (inst_23684) || (inst_23685);
var state_23715__$1 = (function (){var statearr_23729 = state_23715;
(statearr_23729[(10)] = inst_23683__$1);

return statearr_23729;
})();
if(cljs.core.truth_(inst_23686)){
var statearr_23730_23755 = state_23715__$1;
(statearr_23730_23755[(1)] = (8));

} else {
var statearr_23731_23756 = state_23715__$1;
(statearr_23731_23756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (14))){
var inst_23708 = (state_23715[(2)]);
var inst_23709 = cljs.core.async.close_BANG_.call(null,out);
var state_23715__$1 = (function (){var statearr_23733 = state_23715;
(statearr_23733[(13)] = inst_23708);

return statearr_23733;
})();
var statearr_23734_23757 = state_23715__$1;
(statearr_23734_23757[(2)] = inst_23709);

(statearr_23734_23757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (10))){
var inst_23698 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23735_23758 = state_23715__$1;
(statearr_23735_23758[(2)] = inst_23698);

(statearr_23735_23758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (8))){
var inst_23679 = (state_23715[(9)]);
var inst_23675 = (state_23715[(8)]);
var inst_23683 = (state_23715[(10)]);
var inst_23688 = inst_23675.push(inst_23679);
var tmp23732 = inst_23675;
var inst_23675__$1 = tmp23732;
var inst_23676 = inst_23683;
var state_23715__$1 = (function (){var statearr_23736 = state_23715;
(statearr_23736[(7)] = inst_23676);

(statearr_23736[(14)] = inst_23688);

(statearr_23736[(8)] = inst_23675__$1);

return statearr_23736;
})();
var statearr_23737_23759 = state_23715__$1;
(statearr_23737_23759[(2)] = null);

(statearr_23737_23759[(1)] = (2));


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
});})(c__6720__auto___23745,out))
;
return ((function (switch__6664__auto__,c__6720__auto___23745,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_23741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23741[(0)] = state_machine__6665__auto__);

(statearr_23741[(1)] = (1));

return statearr_23741;
});
var state_machine__6665__auto____1 = (function (state_23715){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_23715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e23742){if((e23742 instanceof Object)){
var ex__6668__auto__ = e23742;
var statearr_23743_23760 = state_23715;
(statearr_23743_23760[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23761 = state_23715;
state_23715 = G__23761;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_23715){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_23715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6720__auto___23745,out))
})();
var state__6722__auto__ = (function (){var statearr_23744 = f__6721__auto__.call(null);
(statearr_23744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6720__auto___23745);

return statearr_23744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6722__auto__);
});})(c__6720__auto___23745,out))
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
