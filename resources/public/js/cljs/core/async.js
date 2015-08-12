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
if(typeof cljs.core.async.t20477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20477 = (function (f,fn_handler,meta20478){
this.f = f;
this.fn_handler = fn_handler;
this.meta20478 = meta20478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20477.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20479){
var self__ = this;
var _20479__$1 = this;
return self__.meta20478;
});

cljs.core.async.t20477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20479,meta20478__$1){
var self__ = this;
var _20479__$1 = this;
return (new cljs.core.async.t20477(self__.f,self__.fn_handler,meta20478__$1));
});

cljs.core.async.t20477.cljs$lang$type = true;

cljs.core.async.t20477.cljs$lang$ctorStr = "cljs.core.async/t20477";

cljs.core.async.t20477.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20477");
});

cljs.core.async.__GT_t20477 = (function __GT_t20477(f__$1,fn_handler__$1,meta20478){
return (new cljs.core.async.t20477(f__$1,fn_handler__$1,meta20478));
});

}

return (new cljs.core.async.t20477(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__20481 = buff;
if(G__20481){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__20481.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20481.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20481);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20481);
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
var val_20482 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20482);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20482,ret){
return (function (){
return fn1.call(null,val_20482);
});})(val_20482,ret))
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
var n__4643__auto___20483 = n;
var x_20484 = (0);
while(true){
if((x_20484 < n__4643__auto___20483)){
(a[x_20484] = (0));

var G__20485 = (x_20484 + (1));
x_20484 = G__20485;
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

var G__20486 = (i + (1));
i = G__20486;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20490 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20490 = (function (flag,alt_flag,meta20491){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20491 = meta20491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20490.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20492){
var self__ = this;
var _20492__$1 = this;
return self__.meta20491;
});})(flag))
;

cljs.core.async.t20490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20492,meta20491__$1){
var self__ = this;
var _20492__$1 = this;
return (new cljs.core.async.t20490(self__.flag,self__.alt_flag,meta20491__$1));
});})(flag))
;

cljs.core.async.t20490.cljs$lang$type = true;

cljs.core.async.t20490.cljs$lang$ctorStr = "cljs.core.async/t20490";

cljs.core.async.t20490.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20490");
});})(flag))
;

cljs.core.async.__GT_t20490 = ((function (flag){
return (function __GT_t20490(flag__$1,alt_flag__$1,meta20491){
return (new cljs.core.async.t20490(flag__$1,alt_flag__$1,meta20491));
});})(flag))
;

}

return (new cljs.core.async.t20490(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20496 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20496 = (function (cb,flag,alt_handler,meta20497){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20497 = meta20497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20496.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20498){
var self__ = this;
var _20498__$1 = this;
return self__.meta20497;
});

cljs.core.async.t20496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20498,meta20497__$1){
var self__ = this;
var _20498__$1 = this;
return (new cljs.core.async.t20496(self__.cb,self__.flag,self__.alt_handler,meta20497__$1));
});

cljs.core.async.t20496.cljs$lang$type = true;

cljs.core.async.t20496.cljs$lang$ctorStr = "cljs.core.async/t20496";

cljs.core.async.t20496.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20496");
});

cljs.core.async.__GT_t20496 = (function __GT_t20496(cb__$1,flag__$1,alt_handler__$1,meta20497){
return (new cljs.core.async.t20496(cb__$1,flag__$1,alt_handler__$1,meta20497));
});

}

return (new cljs.core.async.t20496(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__20499_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20499_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20500_SHARP_,port], null));
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
var G__20501 = (i + (1));
i = G__20501;
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
var alts_BANG___delegate = function (ports,p__20502){
var map__20504 = p__20502;
var map__20504__$1 = ((cljs.core.seq_QMARK_.call(null,map__20504))?cljs.core.apply.call(null,cljs.core.hash_map,map__20504):map__20504);
var opts = map__20504__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20502 = null;
if (arguments.length > 1) {
  p__20502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20502);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20505){
var ports = cljs.core.first(arglist__20505);
var p__20502 = cljs.core.rest(arglist__20505);
return alts_BANG___delegate(ports,p__20502);
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
var c__14440__auto___20600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___20600){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___20600){
return (function (state_20576){
var state_val_20577 = (state_20576[(1)]);
if((state_val_20577 === (7))){
var inst_20572 = (state_20576[(2)]);
var state_20576__$1 = state_20576;
var statearr_20578_20601 = state_20576__$1;
(statearr_20578_20601[(2)] = inst_20572);

(statearr_20578_20601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (1))){
var state_20576__$1 = state_20576;
var statearr_20579_20602 = state_20576__$1;
(statearr_20579_20602[(2)] = null);

(statearr_20579_20602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (4))){
var inst_20555 = (state_20576[(7)]);
var inst_20555__$1 = (state_20576[(2)]);
var inst_20556 = (inst_20555__$1 == null);
var state_20576__$1 = (function (){var statearr_20580 = state_20576;
(statearr_20580[(7)] = inst_20555__$1);

return statearr_20580;
})();
if(cljs.core.truth_(inst_20556)){
var statearr_20581_20603 = state_20576__$1;
(statearr_20581_20603[(1)] = (5));

} else {
var statearr_20582_20604 = state_20576__$1;
(statearr_20582_20604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (13))){
var state_20576__$1 = state_20576;
var statearr_20583_20605 = state_20576__$1;
(statearr_20583_20605[(2)] = null);

(statearr_20583_20605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (6))){
var inst_20555 = (state_20576[(7)]);
var state_20576__$1 = state_20576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20576__$1,(11),to,inst_20555);
} else {
if((state_val_20577 === (3))){
var inst_20574 = (state_20576[(2)]);
var state_20576__$1 = state_20576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20576__$1,inst_20574);
} else {
if((state_val_20577 === (12))){
var state_20576__$1 = state_20576;
var statearr_20584_20606 = state_20576__$1;
(statearr_20584_20606[(2)] = null);

(statearr_20584_20606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (2))){
var state_20576__$1 = state_20576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20576__$1,(4),from);
} else {
if((state_val_20577 === (11))){
var inst_20565 = (state_20576[(2)]);
var state_20576__$1 = state_20576;
if(cljs.core.truth_(inst_20565)){
var statearr_20585_20607 = state_20576__$1;
(statearr_20585_20607[(1)] = (12));

} else {
var statearr_20586_20608 = state_20576__$1;
(statearr_20586_20608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (9))){
var state_20576__$1 = state_20576;
var statearr_20587_20609 = state_20576__$1;
(statearr_20587_20609[(2)] = null);

(statearr_20587_20609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (5))){
var state_20576__$1 = state_20576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20588_20610 = state_20576__$1;
(statearr_20588_20610[(1)] = (8));

} else {
var statearr_20589_20611 = state_20576__$1;
(statearr_20589_20611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (14))){
var inst_20570 = (state_20576[(2)]);
var state_20576__$1 = state_20576;
var statearr_20590_20612 = state_20576__$1;
(statearr_20590_20612[(2)] = inst_20570);

(statearr_20590_20612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (10))){
var inst_20562 = (state_20576[(2)]);
var state_20576__$1 = state_20576;
var statearr_20591_20613 = state_20576__$1;
(statearr_20591_20613[(2)] = inst_20562);

(statearr_20591_20613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20577 === (8))){
var inst_20559 = cljs.core.async.close_BANG_.call(null,to);
var state_20576__$1 = state_20576;
var statearr_20592_20614 = state_20576__$1;
(statearr_20592_20614[(2)] = inst_20559);

(statearr_20592_20614[(1)] = (10));


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
});})(c__14440__auto___20600))
;
return ((function (switch__14425__auto__,c__14440__auto___20600){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_20596 = [null,null,null,null,null,null,null,null];
(statearr_20596[(0)] = state_machine__14426__auto__);

(statearr_20596[(1)] = (1));

return statearr_20596;
});
var state_machine__14426__auto____1 = (function (state_20576){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_20576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e20597){if((e20597 instanceof Object)){
var ex__14429__auto__ = e20597;
var statearr_20598_20615 = state_20576;
(statearr_20598_20615[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20616 = state_20576;
state_20576 = G__20616;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_20576){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_20576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___20600))
})();
var state__14442__auto__ = (function (){var statearr_20599 = f__14441__auto__.call(null);
(statearr_20599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___20600);

return statearr_20599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___20600))
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
return (function (p__20800){
var vec__20801 = p__20800;
var v = cljs.core.nth.call(null,vec__20801,(0),null);
var p = cljs.core.nth.call(null,vec__20801,(1),null);
var job = vec__20801;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14440__auto___20983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___20983,res,vec__20801,v,p,job,jobs,results){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___20983,res,vec__20801,v,p,job,jobs,results){
return (function (state_20806){
var state_val_20807 = (state_20806[(1)]);
if((state_val_20807 === (2))){
var inst_20803 = (state_20806[(2)]);
var inst_20804 = cljs.core.async.close_BANG_.call(null,res);
var state_20806__$1 = (function (){var statearr_20808 = state_20806;
(statearr_20808[(7)] = inst_20803);

return statearr_20808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20806__$1,inst_20804);
} else {
if((state_val_20807 === (1))){
var state_20806__$1 = state_20806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20806__$1,(2),res,v);
} else {
return null;
}
}
});})(c__14440__auto___20983,res,vec__20801,v,p,job,jobs,results))
;
return ((function (switch__14425__auto__,c__14440__auto___20983,res,vec__20801,v,p,job,jobs,results){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_20812 = [null,null,null,null,null,null,null,null];
(statearr_20812[(0)] = state_machine__14426__auto__);

(statearr_20812[(1)] = (1));

return statearr_20812;
});
var state_machine__14426__auto____1 = (function (state_20806){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_20806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e20813){if((e20813 instanceof Object)){
var ex__14429__auto__ = e20813;
var statearr_20814_20984 = state_20806;
(statearr_20814_20984[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20985 = state_20806;
state_20806 = G__20985;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_20806){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_20806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___20983,res,vec__20801,v,p,job,jobs,results))
})();
var state__14442__auto__ = (function (){var statearr_20815 = f__14441__auto__.call(null);
(statearr_20815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___20983);

return statearr_20815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___20983,res,vec__20801,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20816){
var vec__20817 = p__20816;
var v = cljs.core.nth.call(null,vec__20817,(0),null);
var p = cljs.core.nth.call(null,vec__20817,(1),null);
var job = vec__20817;
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
var n__4643__auto___20986 = n;
var __20987 = (0);
while(true){
if((__20987 < n__4643__auto___20986)){
var G__20818_20988 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20818_20988) {
case "async":
var c__14440__auto___20990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20987,c__14440__auto___20990,G__20818_20988,n__4643__auto___20986,jobs,results,process,async){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (__20987,c__14440__auto___20990,G__20818_20988,n__4643__auto___20986,jobs,results,process,async){
return (function (state_20831){
var state_val_20832 = (state_20831[(1)]);
if((state_val_20832 === (7))){
var inst_20827 = (state_20831[(2)]);
var state_20831__$1 = state_20831;
var statearr_20833_20991 = state_20831__$1;
(statearr_20833_20991[(2)] = inst_20827);

(statearr_20833_20991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (6))){
var state_20831__$1 = state_20831;
var statearr_20834_20992 = state_20831__$1;
(statearr_20834_20992[(2)] = null);

(statearr_20834_20992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (5))){
var state_20831__$1 = state_20831;
var statearr_20835_20993 = state_20831__$1;
(statearr_20835_20993[(2)] = null);

(statearr_20835_20993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (4))){
var inst_20821 = (state_20831[(2)]);
var inst_20822 = async.call(null,inst_20821);
var state_20831__$1 = state_20831;
if(cljs.core.truth_(inst_20822)){
var statearr_20836_20994 = state_20831__$1;
(statearr_20836_20994[(1)] = (5));

} else {
var statearr_20837_20995 = state_20831__$1;
(statearr_20837_20995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (3))){
var inst_20829 = (state_20831[(2)]);
var state_20831__$1 = state_20831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20831__$1,inst_20829);
} else {
if((state_val_20832 === (2))){
var state_20831__$1 = state_20831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20831__$1,(4),jobs);
} else {
if((state_val_20832 === (1))){
var state_20831__$1 = state_20831;
var statearr_20838_20996 = state_20831__$1;
(statearr_20838_20996[(2)] = null);

(statearr_20838_20996[(1)] = (2));


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
});})(__20987,c__14440__auto___20990,G__20818_20988,n__4643__auto___20986,jobs,results,process,async))
;
return ((function (__20987,switch__14425__auto__,c__14440__auto___20990,G__20818_20988,n__4643__auto___20986,jobs,results,process,async){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_20842 = [null,null,null,null,null,null,null];
(statearr_20842[(0)] = state_machine__14426__auto__);

(statearr_20842[(1)] = (1));

return statearr_20842;
});
var state_machine__14426__auto____1 = (function (state_20831){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_20831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e20843){if((e20843 instanceof Object)){
var ex__14429__auto__ = e20843;
var statearr_20844_20997 = state_20831;
(statearr_20844_20997[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20998 = state_20831;
state_20831 = G__20998;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_20831){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_20831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(__20987,switch__14425__auto__,c__14440__auto___20990,G__20818_20988,n__4643__auto___20986,jobs,results,process,async))
})();
var state__14442__auto__ = (function (){var statearr_20845 = f__14441__auto__.call(null);
(statearr_20845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___20990);

return statearr_20845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(__20987,c__14440__auto___20990,G__20818_20988,n__4643__auto___20986,jobs,results,process,async))
);


break;
case "compute":
var c__14440__auto___20999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20987,c__14440__auto___20999,G__20818_20988,n__4643__auto___20986,jobs,results,process,async){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (__20987,c__14440__auto___20999,G__20818_20988,n__4643__auto___20986,jobs,results,process,async){
return (function (state_20858){
var state_val_20859 = (state_20858[(1)]);
if((state_val_20859 === (7))){
var inst_20854 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20860_21000 = state_20858__$1;
(statearr_20860_21000[(2)] = inst_20854);

(statearr_20860_21000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (6))){
var state_20858__$1 = state_20858;
var statearr_20861_21001 = state_20858__$1;
(statearr_20861_21001[(2)] = null);

(statearr_20861_21001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (5))){
var state_20858__$1 = state_20858;
var statearr_20862_21002 = state_20858__$1;
(statearr_20862_21002[(2)] = null);

(statearr_20862_21002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (4))){
var inst_20848 = (state_20858[(2)]);
var inst_20849 = process.call(null,inst_20848);
var state_20858__$1 = state_20858;
if(cljs.core.truth_(inst_20849)){
var statearr_20863_21003 = state_20858__$1;
(statearr_20863_21003[(1)] = (5));

} else {
var statearr_20864_21004 = state_20858__$1;
(statearr_20864_21004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20859 === (3))){
var inst_20856 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20858__$1,inst_20856);
} else {
if((state_val_20859 === (2))){
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20858__$1,(4),jobs);
} else {
if((state_val_20859 === (1))){
var state_20858__$1 = state_20858;
var statearr_20865_21005 = state_20858__$1;
(statearr_20865_21005[(2)] = null);

(statearr_20865_21005[(1)] = (2));


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
});})(__20987,c__14440__auto___20999,G__20818_20988,n__4643__auto___20986,jobs,results,process,async))
;
return ((function (__20987,switch__14425__auto__,c__14440__auto___20999,G__20818_20988,n__4643__auto___20986,jobs,results,process,async){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_20869 = [null,null,null,null,null,null,null];
(statearr_20869[(0)] = state_machine__14426__auto__);

(statearr_20869[(1)] = (1));

return statearr_20869;
});
var state_machine__14426__auto____1 = (function (state_20858){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_20858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e20870){if((e20870 instanceof Object)){
var ex__14429__auto__ = e20870;
var statearr_20871_21006 = state_20858;
(statearr_20871_21006[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21007 = state_20858;
state_20858 = G__21007;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_20858){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_20858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(__20987,switch__14425__auto__,c__14440__auto___20999,G__20818_20988,n__4643__auto___20986,jobs,results,process,async))
})();
var state__14442__auto__ = (function (){var statearr_20872 = f__14441__auto__.call(null);
(statearr_20872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___20999);

return statearr_20872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(__20987,c__14440__auto___20999,G__20818_20988,n__4643__auto___20986,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21008 = (__20987 + (1));
__20987 = G__21008;
continue;
} else {
}
break;
}

var c__14440__auto___21009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___21009,jobs,results,process,async){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___21009,jobs,results,process,async){
return (function (state_20894){
var state_val_20895 = (state_20894[(1)]);
if((state_val_20895 === (9))){
var inst_20887 = (state_20894[(2)]);
var state_20894__$1 = (function (){var statearr_20896 = state_20894;
(statearr_20896[(7)] = inst_20887);

return statearr_20896;
})();
var statearr_20897_21010 = state_20894__$1;
(statearr_20897_21010[(2)] = null);

(statearr_20897_21010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (8))){
var inst_20880 = (state_20894[(8)]);
var inst_20885 = (state_20894[(2)]);
var state_20894__$1 = (function (){var statearr_20898 = state_20894;
(statearr_20898[(9)] = inst_20885);

return statearr_20898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20894__$1,(9),results,inst_20880);
} else {
if((state_val_20895 === (7))){
var inst_20890 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
var statearr_20899_21011 = state_20894__$1;
(statearr_20899_21011[(2)] = inst_20890);

(statearr_20899_21011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (6))){
var inst_20880 = (state_20894[(8)]);
var inst_20875 = (state_20894[(10)]);
var inst_20880__$1 = cljs.core.async.chan.call(null,(1));
var inst_20881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20882 = [inst_20875,inst_20880__$1];
var inst_20883 = (new cljs.core.PersistentVector(null,2,(5),inst_20881,inst_20882,null));
var state_20894__$1 = (function (){var statearr_20900 = state_20894;
(statearr_20900[(8)] = inst_20880__$1);

return statearr_20900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20894__$1,(8),jobs,inst_20883);
} else {
if((state_val_20895 === (5))){
var inst_20878 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20894__$1 = state_20894;
var statearr_20901_21012 = state_20894__$1;
(statearr_20901_21012[(2)] = inst_20878);

(statearr_20901_21012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (4))){
var inst_20875 = (state_20894[(10)]);
var inst_20875__$1 = (state_20894[(2)]);
var inst_20876 = (inst_20875__$1 == null);
var state_20894__$1 = (function (){var statearr_20902 = state_20894;
(statearr_20902[(10)] = inst_20875__$1);

return statearr_20902;
})();
if(cljs.core.truth_(inst_20876)){
var statearr_20903_21013 = state_20894__$1;
(statearr_20903_21013[(1)] = (5));

} else {
var statearr_20904_21014 = state_20894__$1;
(statearr_20904_21014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20895 === (3))){
var inst_20892 = (state_20894[(2)]);
var state_20894__$1 = state_20894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20894__$1,inst_20892);
} else {
if((state_val_20895 === (2))){
var state_20894__$1 = state_20894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20894__$1,(4),from);
} else {
if((state_val_20895 === (1))){
var state_20894__$1 = state_20894;
var statearr_20905_21015 = state_20894__$1;
(statearr_20905_21015[(2)] = null);

(statearr_20905_21015[(1)] = (2));


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
});})(c__14440__auto___21009,jobs,results,process,async))
;
return ((function (switch__14425__auto__,c__14440__auto___21009,jobs,results,process,async){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_20909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20909[(0)] = state_machine__14426__auto__);

(statearr_20909[(1)] = (1));

return statearr_20909;
});
var state_machine__14426__auto____1 = (function (state_20894){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_20894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e20910){if((e20910 instanceof Object)){
var ex__14429__auto__ = e20910;
var statearr_20911_21016 = state_20894;
(statearr_20911_21016[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21017 = state_20894;
state_20894 = G__21017;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_20894){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_20894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___21009,jobs,results,process,async))
})();
var state__14442__auto__ = (function (){var statearr_20912 = f__14441__auto__.call(null);
(statearr_20912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___21009);

return statearr_20912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___21009,jobs,results,process,async))
);


var c__14440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto__,jobs,results,process,async){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto__,jobs,results,process,async){
return (function (state_20950){
var state_val_20951 = (state_20950[(1)]);
if((state_val_20951 === (7))){
var inst_20946 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
var statearr_20952_21018 = state_20950__$1;
(statearr_20952_21018[(2)] = inst_20946);

(statearr_20952_21018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (20))){
var state_20950__$1 = state_20950;
var statearr_20953_21019 = state_20950__$1;
(statearr_20953_21019[(2)] = null);

(statearr_20953_21019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (1))){
var state_20950__$1 = state_20950;
var statearr_20954_21020 = state_20950__$1;
(statearr_20954_21020[(2)] = null);

(statearr_20954_21020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (4))){
var inst_20915 = (state_20950[(7)]);
var inst_20915__$1 = (state_20950[(2)]);
var inst_20916 = (inst_20915__$1 == null);
var state_20950__$1 = (function (){var statearr_20955 = state_20950;
(statearr_20955[(7)] = inst_20915__$1);

return statearr_20955;
})();
if(cljs.core.truth_(inst_20916)){
var statearr_20956_21021 = state_20950__$1;
(statearr_20956_21021[(1)] = (5));

} else {
var statearr_20957_21022 = state_20950__$1;
(statearr_20957_21022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (15))){
var inst_20928 = (state_20950[(8)]);
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20950__$1,(18),to,inst_20928);
} else {
if((state_val_20951 === (21))){
var inst_20941 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
var statearr_20958_21023 = state_20950__$1;
(statearr_20958_21023[(2)] = inst_20941);

(statearr_20958_21023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (13))){
var inst_20943 = (state_20950[(2)]);
var state_20950__$1 = (function (){var statearr_20959 = state_20950;
(statearr_20959[(9)] = inst_20943);

return statearr_20959;
})();
var statearr_20960_21024 = state_20950__$1;
(statearr_20960_21024[(2)] = null);

(statearr_20960_21024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (6))){
var inst_20915 = (state_20950[(7)]);
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20950__$1,(11),inst_20915);
} else {
if((state_val_20951 === (17))){
var inst_20936 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
if(cljs.core.truth_(inst_20936)){
var statearr_20961_21025 = state_20950__$1;
(statearr_20961_21025[(1)] = (19));

} else {
var statearr_20962_21026 = state_20950__$1;
(statearr_20962_21026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (3))){
var inst_20948 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20950__$1,inst_20948);
} else {
if((state_val_20951 === (12))){
var inst_20925 = (state_20950[(10)]);
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20950__$1,(14),inst_20925);
} else {
if((state_val_20951 === (2))){
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20950__$1,(4),results);
} else {
if((state_val_20951 === (19))){
var state_20950__$1 = state_20950;
var statearr_20963_21027 = state_20950__$1;
(statearr_20963_21027[(2)] = null);

(statearr_20963_21027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (11))){
var inst_20925 = (state_20950[(2)]);
var state_20950__$1 = (function (){var statearr_20964 = state_20950;
(statearr_20964[(10)] = inst_20925);

return statearr_20964;
})();
var statearr_20965_21028 = state_20950__$1;
(statearr_20965_21028[(2)] = null);

(statearr_20965_21028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (9))){
var state_20950__$1 = state_20950;
var statearr_20966_21029 = state_20950__$1;
(statearr_20966_21029[(2)] = null);

(statearr_20966_21029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (5))){
var state_20950__$1 = state_20950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20967_21030 = state_20950__$1;
(statearr_20967_21030[(1)] = (8));

} else {
var statearr_20968_21031 = state_20950__$1;
(statearr_20968_21031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (14))){
var inst_20930 = (state_20950[(11)]);
var inst_20928 = (state_20950[(8)]);
var inst_20928__$1 = (state_20950[(2)]);
var inst_20929 = (inst_20928__$1 == null);
var inst_20930__$1 = cljs.core.not.call(null,inst_20929);
var state_20950__$1 = (function (){var statearr_20969 = state_20950;
(statearr_20969[(11)] = inst_20930__$1);

(statearr_20969[(8)] = inst_20928__$1);

return statearr_20969;
})();
if(inst_20930__$1){
var statearr_20970_21032 = state_20950__$1;
(statearr_20970_21032[(1)] = (15));

} else {
var statearr_20971_21033 = state_20950__$1;
(statearr_20971_21033[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (16))){
var inst_20930 = (state_20950[(11)]);
var state_20950__$1 = state_20950;
var statearr_20972_21034 = state_20950__$1;
(statearr_20972_21034[(2)] = inst_20930);

(statearr_20972_21034[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (10))){
var inst_20922 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
var statearr_20973_21035 = state_20950__$1;
(statearr_20973_21035[(2)] = inst_20922);

(statearr_20973_21035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (18))){
var inst_20933 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
var statearr_20974_21036 = state_20950__$1;
(statearr_20974_21036[(2)] = inst_20933);

(statearr_20974_21036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (8))){
var inst_20919 = cljs.core.async.close_BANG_.call(null,to);
var state_20950__$1 = state_20950;
var statearr_20975_21037 = state_20950__$1;
(statearr_20975_21037[(2)] = inst_20919);

(statearr_20975_21037[(1)] = (10));


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
});})(c__14440__auto__,jobs,results,process,async))
;
return ((function (switch__14425__auto__,c__14440__auto__,jobs,results,process,async){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_20979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20979[(0)] = state_machine__14426__auto__);

(statearr_20979[(1)] = (1));

return statearr_20979;
});
var state_machine__14426__auto____1 = (function (state_20950){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_20950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e20980){if((e20980 instanceof Object)){
var ex__14429__auto__ = e20980;
var statearr_20981_21038 = state_20950;
(statearr_20981_21038[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21039 = state_20950;
state_20950 = G__21039;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_20950){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_20950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto__,jobs,results,process,async))
})();
var state__14442__auto__ = (function (){var statearr_20982 = f__14441__auto__.call(null);
(statearr_20982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto__);

return statearr_20982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto__,jobs,results,process,async))
);

return c__14440__auto__;
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
var c__14440__auto___21140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___21140,tc,fc){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___21140,tc,fc){
return (function (state_21115){
var state_val_21116 = (state_21115[(1)]);
if((state_val_21116 === (7))){
var inst_21111 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21117_21141 = state_21115__$1;
(statearr_21117_21141[(2)] = inst_21111);

(statearr_21117_21141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (1))){
var state_21115__$1 = state_21115;
var statearr_21118_21142 = state_21115__$1;
(statearr_21118_21142[(2)] = null);

(statearr_21118_21142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (4))){
var inst_21092 = (state_21115[(7)]);
var inst_21092__$1 = (state_21115[(2)]);
var inst_21093 = (inst_21092__$1 == null);
var state_21115__$1 = (function (){var statearr_21119 = state_21115;
(statearr_21119[(7)] = inst_21092__$1);

return statearr_21119;
})();
if(cljs.core.truth_(inst_21093)){
var statearr_21120_21143 = state_21115__$1;
(statearr_21120_21143[(1)] = (5));

} else {
var statearr_21121_21144 = state_21115__$1;
(statearr_21121_21144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (13))){
var state_21115__$1 = state_21115;
var statearr_21122_21145 = state_21115__$1;
(statearr_21122_21145[(2)] = null);

(statearr_21122_21145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (6))){
var inst_21092 = (state_21115[(7)]);
var inst_21098 = p.call(null,inst_21092);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21098)){
var statearr_21123_21146 = state_21115__$1;
(statearr_21123_21146[(1)] = (9));

} else {
var statearr_21124_21147 = state_21115__$1;
(statearr_21124_21147[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (3))){
var inst_21113 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21115__$1,inst_21113);
} else {
if((state_val_21116 === (12))){
var state_21115__$1 = state_21115;
var statearr_21125_21148 = state_21115__$1;
(statearr_21125_21148[(2)] = null);

(statearr_21125_21148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (2))){
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21115__$1,(4),ch);
} else {
if((state_val_21116 === (11))){
var inst_21092 = (state_21115[(7)]);
var inst_21102 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21115__$1,(8),inst_21102,inst_21092);
} else {
if((state_val_21116 === (9))){
var state_21115__$1 = state_21115;
var statearr_21126_21149 = state_21115__$1;
(statearr_21126_21149[(2)] = tc);

(statearr_21126_21149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (5))){
var inst_21095 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21096 = cljs.core.async.close_BANG_.call(null,fc);
var state_21115__$1 = (function (){var statearr_21127 = state_21115;
(statearr_21127[(8)] = inst_21095);

return statearr_21127;
})();
var statearr_21128_21150 = state_21115__$1;
(statearr_21128_21150[(2)] = inst_21096);

(statearr_21128_21150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (14))){
var inst_21109 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21129_21151 = state_21115__$1;
(statearr_21129_21151[(2)] = inst_21109);

(statearr_21129_21151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (10))){
var state_21115__$1 = state_21115;
var statearr_21130_21152 = state_21115__$1;
(statearr_21130_21152[(2)] = fc);

(statearr_21130_21152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (8))){
var inst_21104 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21104)){
var statearr_21131_21153 = state_21115__$1;
(statearr_21131_21153[(1)] = (12));

} else {
var statearr_21132_21154 = state_21115__$1;
(statearr_21132_21154[(1)] = (13));

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
});})(c__14440__auto___21140,tc,fc))
;
return ((function (switch__14425__auto__,c__14440__auto___21140,tc,fc){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_21136 = [null,null,null,null,null,null,null,null,null];
(statearr_21136[(0)] = state_machine__14426__auto__);

(statearr_21136[(1)] = (1));

return statearr_21136;
});
var state_machine__14426__auto____1 = (function (state_21115){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_21115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e21137){if((e21137 instanceof Object)){
var ex__14429__auto__ = e21137;
var statearr_21138_21155 = state_21115;
(statearr_21138_21155[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21156 = state_21115;
state_21115 = G__21156;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_21115){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_21115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___21140,tc,fc))
})();
var state__14442__auto__ = (function (){var statearr_21139 = f__14441__auto__.call(null);
(statearr_21139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___21140);

return statearr_21139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___21140,tc,fc))
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
var c__14440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto__){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto__){
return (function (state_21203){
var state_val_21204 = (state_21203[(1)]);
if((state_val_21204 === (7))){
var inst_21199 = (state_21203[(2)]);
var state_21203__$1 = state_21203;
var statearr_21205_21221 = state_21203__$1;
(statearr_21205_21221[(2)] = inst_21199);

(statearr_21205_21221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (6))){
var inst_21192 = (state_21203[(7)]);
var inst_21189 = (state_21203[(8)]);
var inst_21196 = f.call(null,inst_21189,inst_21192);
var inst_21189__$1 = inst_21196;
var state_21203__$1 = (function (){var statearr_21206 = state_21203;
(statearr_21206[(8)] = inst_21189__$1);

return statearr_21206;
})();
var statearr_21207_21222 = state_21203__$1;
(statearr_21207_21222[(2)] = null);

(statearr_21207_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (5))){
var inst_21189 = (state_21203[(8)]);
var state_21203__$1 = state_21203;
var statearr_21208_21223 = state_21203__$1;
(statearr_21208_21223[(2)] = inst_21189);

(statearr_21208_21223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (4))){
var inst_21192 = (state_21203[(7)]);
var inst_21192__$1 = (state_21203[(2)]);
var inst_21193 = (inst_21192__$1 == null);
var state_21203__$1 = (function (){var statearr_21209 = state_21203;
(statearr_21209[(7)] = inst_21192__$1);

return statearr_21209;
})();
if(cljs.core.truth_(inst_21193)){
var statearr_21210_21224 = state_21203__$1;
(statearr_21210_21224[(1)] = (5));

} else {
var statearr_21211_21225 = state_21203__$1;
(statearr_21211_21225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (3))){
var inst_21201 = (state_21203[(2)]);
var state_21203__$1 = state_21203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21203__$1,inst_21201);
} else {
if((state_val_21204 === (2))){
var state_21203__$1 = state_21203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21203__$1,(4),ch);
} else {
if((state_val_21204 === (1))){
var inst_21189 = init;
var state_21203__$1 = (function (){var statearr_21212 = state_21203;
(statearr_21212[(8)] = inst_21189);

return statearr_21212;
})();
var statearr_21213_21226 = state_21203__$1;
(statearr_21213_21226[(2)] = null);

(statearr_21213_21226[(1)] = (2));


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
});})(c__14440__auto__))
;
return ((function (switch__14425__auto__,c__14440__auto__){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_21217 = [null,null,null,null,null,null,null,null,null];
(statearr_21217[(0)] = state_machine__14426__auto__);

(statearr_21217[(1)] = (1));

return statearr_21217;
});
var state_machine__14426__auto____1 = (function (state_21203){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_21203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e21218){if((e21218 instanceof Object)){
var ex__14429__auto__ = e21218;
var statearr_21219_21227 = state_21203;
(statearr_21219_21227[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21228 = state_21203;
state_21203 = G__21228;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_21203){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_21203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto__))
})();
var state__14442__auto__ = (function (){var statearr_21220 = f__14441__auto__.call(null);
(statearr_21220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto__);

return statearr_21220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto__))
);

return c__14440__auto__;
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
var c__14440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto__){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto__){
return (function (state_21302){
var state_val_21303 = (state_21302[(1)]);
if((state_val_21303 === (7))){
var inst_21284 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
var statearr_21304_21327 = state_21302__$1;
(statearr_21304_21327[(2)] = inst_21284);

(statearr_21304_21327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (1))){
var inst_21278 = cljs.core.seq.call(null,coll);
var inst_21279 = inst_21278;
var state_21302__$1 = (function (){var statearr_21305 = state_21302;
(statearr_21305[(7)] = inst_21279);

return statearr_21305;
})();
var statearr_21306_21328 = state_21302__$1;
(statearr_21306_21328[(2)] = null);

(statearr_21306_21328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (4))){
var inst_21279 = (state_21302[(7)]);
var inst_21282 = cljs.core.first.call(null,inst_21279);
var state_21302__$1 = state_21302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21302__$1,(7),ch,inst_21282);
} else {
if((state_val_21303 === (13))){
var inst_21296 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
var statearr_21307_21329 = state_21302__$1;
(statearr_21307_21329[(2)] = inst_21296);

(statearr_21307_21329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (6))){
var inst_21287 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
if(cljs.core.truth_(inst_21287)){
var statearr_21308_21330 = state_21302__$1;
(statearr_21308_21330[(1)] = (8));

} else {
var statearr_21309_21331 = state_21302__$1;
(statearr_21309_21331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (3))){
var inst_21300 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21302__$1,inst_21300);
} else {
if((state_val_21303 === (12))){
var state_21302__$1 = state_21302;
var statearr_21310_21332 = state_21302__$1;
(statearr_21310_21332[(2)] = null);

(statearr_21310_21332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (2))){
var inst_21279 = (state_21302[(7)]);
var state_21302__$1 = state_21302;
if(cljs.core.truth_(inst_21279)){
var statearr_21311_21333 = state_21302__$1;
(statearr_21311_21333[(1)] = (4));

} else {
var statearr_21312_21334 = state_21302__$1;
(statearr_21312_21334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (11))){
var inst_21293 = cljs.core.async.close_BANG_.call(null,ch);
var state_21302__$1 = state_21302;
var statearr_21313_21335 = state_21302__$1;
(statearr_21313_21335[(2)] = inst_21293);

(statearr_21313_21335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (9))){
var state_21302__$1 = state_21302;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21314_21336 = state_21302__$1;
(statearr_21314_21336[(1)] = (11));

} else {
var statearr_21315_21337 = state_21302__$1;
(statearr_21315_21337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (5))){
var inst_21279 = (state_21302[(7)]);
var state_21302__$1 = state_21302;
var statearr_21316_21338 = state_21302__$1;
(statearr_21316_21338[(2)] = inst_21279);

(statearr_21316_21338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (10))){
var inst_21298 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
var statearr_21317_21339 = state_21302__$1;
(statearr_21317_21339[(2)] = inst_21298);

(statearr_21317_21339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (8))){
var inst_21279 = (state_21302[(7)]);
var inst_21289 = cljs.core.next.call(null,inst_21279);
var inst_21279__$1 = inst_21289;
var state_21302__$1 = (function (){var statearr_21318 = state_21302;
(statearr_21318[(7)] = inst_21279__$1);

return statearr_21318;
})();
var statearr_21319_21340 = state_21302__$1;
(statearr_21319_21340[(2)] = null);

(statearr_21319_21340[(1)] = (2));


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
});})(c__14440__auto__))
;
return ((function (switch__14425__auto__,c__14440__auto__){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_21323 = [null,null,null,null,null,null,null,null];
(statearr_21323[(0)] = state_machine__14426__auto__);

(statearr_21323[(1)] = (1));

return statearr_21323;
});
var state_machine__14426__auto____1 = (function (state_21302){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_21302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e21324){if((e21324 instanceof Object)){
var ex__14429__auto__ = e21324;
var statearr_21325_21341 = state_21302;
(statearr_21325_21341[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21342 = state_21302;
state_21302 = G__21342;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_21302){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_21302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto__))
})();
var state__14442__auto__ = (function (){var statearr_21326 = f__14441__auto__.call(null);
(statearr_21326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto__);

return statearr_21326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto__))
);

return c__14440__auto__;
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

cljs.core.async.Mux = (function (){var obj21344 = {};
return obj21344;
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


cljs.core.async.Mult = (function (){var obj21346 = {};
return obj21346;
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
if(typeof cljs.core.async.t21568 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21568 = (function (cs,ch,mult,meta21569){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21569 = meta21569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21568.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21568.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21568.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21568.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21568.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21570){
var self__ = this;
var _21570__$1 = this;
return self__.meta21569;
});})(cs))
;

cljs.core.async.t21568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21570,meta21569__$1){
var self__ = this;
var _21570__$1 = this;
return (new cljs.core.async.t21568(self__.cs,self__.ch,self__.mult,meta21569__$1));
});})(cs))
;

cljs.core.async.t21568.cljs$lang$type = true;

cljs.core.async.t21568.cljs$lang$ctorStr = "cljs.core.async/t21568";

cljs.core.async.t21568.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21568");
});})(cs))
;

cljs.core.async.__GT_t21568 = ((function (cs){
return (function __GT_t21568(cs__$1,ch__$1,mult__$1,meta21569){
return (new cljs.core.async.t21568(cs__$1,ch__$1,mult__$1,meta21569));
});})(cs))
;

}

return (new cljs.core.async.t21568(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__14440__auto___21789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___21789,cs,m,dchan,dctr,done){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___21789,cs,m,dchan,dctr,done){
return (function (state_21701){
var state_val_21702 = (state_21701[(1)]);
if((state_val_21702 === (7))){
var inst_21697 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21703_21790 = state_21701__$1;
(statearr_21703_21790[(2)] = inst_21697);

(statearr_21703_21790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (20))){
var inst_21602 = (state_21701[(7)]);
var inst_21612 = cljs.core.first.call(null,inst_21602);
var inst_21613 = cljs.core.nth.call(null,inst_21612,(0),null);
var inst_21614 = cljs.core.nth.call(null,inst_21612,(1),null);
var state_21701__$1 = (function (){var statearr_21704 = state_21701;
(statearr_21704[(8)] = inst_21613);

return statearr_21704;
})();
if(cljs.core.truth_(inst_21614)){
var statearr_21705_21791 = state_21701__$1;
(statearr_21705_21791[(1)] = (22));

} else {
var statearr_21706_21792 = state_21701__$1;
(statearr_21706_21792[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (27))){
var inst_21642 = (state_21701[(9)]);
var inst_21644 = (state_21701[(10)]);
var inst_21573 = (state_21701[(11)]);
var inst_21649 = (state_21701[(12)]);
var inst_21649__$1 = cljs.core._nth.call(null,inst_21642,inst_21644);
var inst_21650 = cljs.core.async.put_BANG_.call(null,inst_21649__$1,inst_21573,done);
var state_21701__$1 = (function (){var statearr_21707 = state_21701;
(statearr_21707[(12)] = inst_21649__$1);

return statearr_21707;
})();
if(cljs.core.truth_(inst_21650)){
var statearr_21708_21793 = state_21701__$1;
(statearr_21708_21793[(1)] = (30));

} else {
var statearr_21709_21794 = state_21701__$1;
(statearr_21709_21794[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (1))){
var state_21701__$1 = state_21701;
var statearr_21710_21795 = state_21701__$1;
(statearr_21710_21795[(2)] = null);

(statearr_21710_21795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (24))){
var inst_21602 = (state_21701[(7)]);
var inst_21619 = (state_21701[(2)]);
var inst_21620 = cljs.core.next.call(null,inst_21602);
var inst_21582 = inst_21620;
var inst_21583 = null;
var inst_21584 = (0);
var inst_21585 = (0);
var state_21701__$1 = (function (){var statearr_21711 = state_21701;
(statearr_21711[(13)] = inst_21583);

(statearr_21711[(14)] = inst_21585);

(statearr_21711[(15)] = inst_21584);

(statearr_21711[(16)] = inst_21619);

(statearr_21711[(17)] = inst_21582);

return statearr_21711;
})();
var statearr_21712_21796 = state_21701__$1;
(statearr_21712_21796[(2)] = null);

(statearr_21712_21796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (39))){
var state_21701__$1 = state_21701;
var statearr_21716_21797 = state_21701__$1;
(statearr_21716_21797[(2)] = null);

(statearr_21716_21797[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (4))){
var inst_21573 = (state_21701[(11)]);
var inst_21573__$1 = (state_21701[(2)]);
var inst_21574 = (inst_21573__$1 == null);
var state_21701__$1 = (function (){var statearr_21717 = state_21701;
(statearr_21717[(11)] = inst_21573__$1);

return statearr_21717;
})();
if(cljs.core.truth_(inst_21574)){
var statearr_21718_21798 = state_21701__$1;
(statearr_21718_21798[(1)] = (5));

} else {
var statearr_21719_21799 = state_21701__$1;
(statearr_21719_21799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (15))){
var inst_21583 = (state_21701[(13)]);
var inst_21585 = (state_21701[(14)]);
var inst_21584 = (state_21701[(15)]);
var inst_21582 = (state_21701[(17)]);
var inst_21598 = (state_21701[(2)]);
var inst_21599 = (inst_21585 + (1));
var tmp21713 = inst_21583;
var tmp21714 = inst_21584;
var tmp21715 = inst_21582;
var inst_21582__$1 = tmp21715;
var inst_21583__$1 = tmp21713;
var inst_21584__$1 = tmp21714;
var inst_21585__$1 = inst_21599;
var state_21701__$1 = (function (){var statearr_21720 = state_21701;
(statearr_21720[(13)] = inst_21583__$1);

(statearr_21720[(14)] = inst_21585__$1);

(statearr_21720[(15)] = inst_21584__$1);

(statearr_21720[(18)] = inst_21598);

(statearr_21720[(17)] = inst_21582__$1);

return statearr_21720;
})();
var statearr_21721_21800 = state_21701__$1;
(statearr_21721_21800[(2)] = null);

(statearr_21721_21800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (21))){
var inst_21623 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21725_21801 = state_21701__$1;
(statearr_21725_21801[(2)] = inst_21623);

(statearr_21725_21801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (31))){
var inst_21649 = (state_21701[(12)]);
var inst_21653 = done.call(null,null);
var inst_21654 = cljs.core.async.untap_STAR_.call(null,m,inst_21649);
var state_21701__$1 = (function (){var statearr_21726 = state_21701;
(statearr_21726[(19)] = inst_21653);

return statearr_21726;
})();
var statearr_21727_21802 = state_21701__$1;
(statearr_21727_21802[(2)] = inst_21654);

(statearr_21727_21802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (32))){
var inst_21643 = (state_21701[(20)]);
var inst_21642 = (state_21701[(9)]);
var inst_21644 = (state_21701[(10)]);
var inst_21641 = (state_21701[(21)]);
var inst_21656 = (state_21701[(2)]);
var inst_21657 = (inst_21644 + (1));
var tmp21722 = inst_21643;
var tmp21723 = inst_21642;
var tmp21724 = inst_21641;
var inst_21641__$1 = tmp21724;
var inst_21642__$1 = tmp21723;
var inst_21643__$1 = tmp21722;
var inst_21644__$1 = inst_21657;
var state_21701__$1 = (function (){var statearr_21728 = state_21701;
(statearr_21728[(20)] = inst_21643__$1);

(statearr_21728[(9)] = inst_21642__$1);

(statearr_21728[(10)] = inst_21644__$1);

(statearr_21728[(22)] = inst_21656);

(statearr_21728[(21)] = inst_21641__$1);

return statearr_21728;
})();
var statearr_21729_21803 = state_21701__$1;
(statearr_21729_21803[(2)] = null);

(statearr_21729_21803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (40))){
var inst_21669 = (state_21701[(23)]);
var inst_21673 = done.call(null,null);
var inst_21674 = cljs.core.async.untap_STAR_.call(null,m,inst_21669);
var state_21701__$1 = (function (){var statearr_21730 = state_21701;
(statearr_21730[(24)] = inst_21673);

return statearr_21730;
})();
var statearr_21731_21804 = state_21701__$1;
(statearr_21731_21804[(2)] = inst_21674);

(statearr_21731_21804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (33))){
var inst_21660 = (state_21701[(25)]);
var inst_21662 = cljs.core.chunked_seq_QMARK_.call(null,inst_21660);
var state_21701__$1 = state_21701;
if(inst_21662){
var statearr_21732_21805 = state_21701__$1;
(statearr_21732_21805[(1)] = (36));

} else {
var statearr_21733_21806 = state_21701__$1;
(statearr_21733_21806[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (13))){
var inst_21592 = (state_21701[(26)]);
var inst_21595 = cljs.core.async.close_BANG_.call(null,inst_21592);
var state_21701__$1 = state_21701;
var statearr_21734_21807 = state_21701__$1;
(statearr_21734_21807[(2)] = inst_21595);

(statearr_21734_21807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (22))){
var inst_21613 = (state_21701[(8)]);
var inst_21616 = cljs.core.async.close_BANG_.call(null,inst_21613);
var state_21701__$1 = state_21701;
var statearr_21735_21808 = state_21701__$1;
(statearr_21735_21808[(2)] = inst_21616);

(statearr_21735_21808[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (36))){
var inst_21660 = (state_21701[(25)]);
var inst_21664 = cljs.core.chunk_first.call(null,inst_21660);
var inst_21665 = cljs.core.chunk_rest.call(null,inst_21660);
var inst_21666 = cljs.core.count.call(null,inst_21664);
var inst_21641 = inst_21665;
var inst_21642 = inst_21664;
var inst_21643 = inst_21666;
var inst_21644 = (0);
var state_21701__$1 = (function (){var statearr_21736 = state_21701;
(statearr_21736[(20)] = inst_21643);

(statearr_21736[(9)] = inst_21642);

(statearr_21736[(10)] = inst_21644);

(statearr_21736[(21)] = inst_21641);

return statearr_21736;
})();
var statearr_21737_21809 = state_21701__$1;
(statearr_21737_21809[(2)] = null);

(statearr_21737_21809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (41))){
var inst_21660 = (state_21701[(25)]);
var inst_21676 = (state_21701[(2)]);
var inst_21677 = cljs.core.next.call(null,inst_21660);
var inst_21641 = inst_21677;
var inst_21642 = null;
var inst_21643 = (0);
var inst_21644 = (0);
var state_21701__$1 = (function (){var statearr_21738 = state_21701;
(statearr_21738[(20)] = inst_21643);

(statearr_21738[(9)] = inst_21642);

(statearr_21738[(27)] = inst_21676);

(statearr_21738[(10)] = inst_21644);

(statearr_21738[(21)] = inst_21641);

return statearr_21738;
})();
var statearr_21739_21810 = state_21701__$1;
(statearr_21739_21810[(2)] = null);

(statearr_21739_21810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (43))){
var state_21701__$1 = state_21701;
var statearr_21740_21811 = state_21701__$1;
(statearr_21740_21811[(2)] = null);

(statearr_21740_21811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (29))){
var inst_21685 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21741_21812 = state_21701__$1;
(statearr_21741_21812[(2)] = inst_21685);

(statearr_21741_21812[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (44))){
var inst_21694 = (state_21701[(2)]);
var state_21701__$1 = (function (){var statearr_21742 = state_21701;
(statearr_21742[(28)] = inst_21694);

return statearr_21742;
})();
var statearr_21743_21813 = state_21701__$1;
(statearr_21743_21813[(2)] = null);

(statearr_21743_21813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (6))){
var inst_21633 = (state_21701[(29)]);
var inst_21632 = cljs.core.deref.call(null,cs);
var inst_21633__$1 = cljs.core.keys.call(null,inst_21632);
var inst_21634 = cljs.core.count.call(null,inst_21633__$1);
var inst_21635 = cljs.core.reset_BANG_.call(null,dctr,inst_21634);
var inst_21640 = cljs.core.seq.call(null,inst_21633__$1);
var inst_21641 = inst_21640;
var inst_21642 = null;
var inst_21643 = (0);
var inst_21644 = (0);
var state_21701__$1 = (function (){var statearr_21744 = state_21701;
(statearr_21744[(30)] = inst_21635);

(statearr_21744[(20)] = inst_21643);

(statearr_21744[(9)] = inst_21642);

(statearr_21744[(10)] = inst_21644);

(statearr_21744[(21)] = inst_21641);

(statearr_21744[(29)] = inst_21633__$1);

return statearr_21744;
})();
var statearr_21745_21814 = state_21701__$1;
(statearr_21745_21814[(2)] = null);

(statearr_21745_21814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (28))){
var inst_21660 = (state_21701[(25)]);
var inst_21641 = (state_21701[(21)]);
var inst_21660__$1 = cljs.core.seq.call(null,inst_21641);
var state_21701__$1 = (function (){var statearr_21746 = state_21701;
(statearr_21746[(25)] = inst_21660__$1);

return statearr_21746;
})();
if(inst_21660__$1){
var statearr_21747_21815 = state_21701__$1;
(statearr_21747_21815[(1)] = (33));

} else {
var statearr_21748_21816 = state_21701__$1;
(statearr_21748_21816[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (25))){
var inst_21643 = (state_21701[(20)]);
var inst_21644 = (state_21701[(10)]);
var inst_21646 = (inst_21644 < inst_21643);
var inst_21647 = inst_21646;
var state_21701__$1 = state_21701;
if(cljs.core.truth_(inst_21647)){
var statearr_21749_21817 = state_21701__$1;
(statearr_21749_21817[(1)] = (27));

} else {
var statearr_21750_21818 = state_21701__$1;
(statearr_21750_21818[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (34))){
var state_21701__$1 = state_21701;
var statearr_21751_21819 = state_21701__$1;
(statearr_21751_21819[(2)] = null);

(statearr_21751_21819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (17))){
var state_21701__$1 = state_21701;
var statearr_21752_21820 = state_21701__$1;
(statearr_21752_21820[(2)] = null);

(statearr_21752_21820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (3))){
var inst_21699 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21701__$1,inst_21699);
} else {
if((state_val_21702 === (12))){
var inst_21628 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21753_21821 = state_21701__$1;
(statearr_21753_21821[(2)] = inst_21628);

(statearr_21753_21821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (2))){
var state_21701__$1 = state_21701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21701__$1,(4),ch);
} else {
if((state_val_21702 === (23))){
var state_21701__$1 = state_21701;
var statearr_21754_21822 = state_21701__$1;
(statearr_21754_21822[(2)] = null);

(statearr_21754_21822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (35))){
var inst_21683 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21755_21823 = state_21701__$1;
(statearr_21755_21823[(2)] = inst_21683);

(statearr_21755_21823[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (19))){
var inst_21602 = (state_21701[(7)]);
var inst_21606 = cljs.core.chunk_first.call(null,inst_21602);
var inst_21607 = cljs.core.chunk_rest.call(null,inst_21602);
var inst_21608 = cljs.core.count.call(null,inst_21606);
var inst_21582 = inst_21607;
var inst_21583 = inst_21606;
var inst_21584 = inst_21608;
var inst_21585 = (0);
var state_21701__$1 = (function (){var statearr_21756 = state_21701;
(statearr_21756[(13)] = inst_21583);

(statearr_21756[(14)] = inst_21585);

(statearr_21756[(15)] = inst_21584);

(statearr_21756[(17)] = inst_21582);

return statearr_21756;
})();
var statearr_21757_21824 = state_21701__$1;
(statearr_21757_21824[(2)] = null);

(statearr_21757_21824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (11))){
var inst_21602 = (state_21701[(7)]);
var inst_21582 = (state_21701[(17)]);
var inst_21602__$1 = cljs.core.seq.call(null,inst_21582);
var state_21701__$1 = (function (){var statearr_21758 = state_21701;
(statearr_21758[(7)] = inst_21602__$1);

return statearr_21758;
})();
if(inst_21602__$1){
var statearr_21759_21825 = state_21701__$1;
(statearr_21759_21825[(1)] = (16));

} else {
var statearr_21760_21826 = state_21701__$1;
(statearr_21760_21826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (9))){
var inst_21630 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21761_21827 = state_21701__$1;
(statearr_21761_21827[(2)] = inst_21630);

(statearr_21761_21827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (5))){
var inst_21580 = cljs.core.deref.call(null,cs);
var inst_21581 = cljs.core.seq.call(null,inst_21580);
var inst_21582 = inst_21581;
var inst_21583 = null;
var inst_21584 = (0);
var inst_21585 = (0);
var state_21701__$1 = (function (){var statearr_21762 = state_21701;
(statearr_21762[(13)] = inst_21583);

(statearr_21762[(14)] = inst_21585);

(statearr_21762[(15)] = inst_21584);

(statearr_21762[(17)] = inst_21582);

return statearr_21762;
})();
var statearr_21763_21828 = state_21701__$1;
(statearr_21763_21828[(2)] = null);

(statearr_21763_21828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (14))){
var state_21701__$1 = state_21701;
var statearr_21764_21829 = state_21701__$1;
(statearr_21764_21829[(2)] = null);

(statearr_21764_21829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (45))){
var inst_21691 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21765_21830 = state_21701__$1;
(statearr_21765_21830[(2)] = inst_21691);

(statearr_21765_21830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (26))){
var inst_21633 = (state_21701[(29)]);
var inst_21687 = (state_21701[(2)]);
var inst_21688 = cljs.core.seq.call(null,inst_21633);
var state_21701__$1 = (function (){var statearr_21766 = state_21701;
(statearr_21766[(31)] = inst_21687);

return statearr_21766;
})();
if(inst_21688){
var statearr_21767_21831 = state_21701__$1;
(statearr_21767_21831[(1)] = (42));

} else {
var statearr_21768_21832 = state_21701__$1;
(statearr_21768_21832[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (16))){
var inst_21602 = (state_21701[(7)]);
var inst_21604 = cljs.core.chunked_seq_QMARK_.call(null,inst_21602);
var state_21701__$1 = state_21701;
if(inst_21604){
var statearr_21769_21833 = state_21701__$1;
(statearr_21769_21833[(1)] = (19));

} else {
var statearr_21770_21834 = state_21701__$1;
(statearr_21770_21834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (38))){
var inst_21680 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21771_21835 = state_21701__$1;
(statearr_21771_21835[(2)] = inst_21680);

(statearr_21771_21835[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (30))){
var state_21701__$1 = state_21701;
var statearr_21772_21836 = state_21701__$1;
(statearr_21772_21836[(2)] = null);

(statearr_21772_21836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (10))){
var inst_21583 = (state_21701[(13)]);
var inst_21585 = (state_21701[(14)]);
var inst_21591 = cljs.core._nth.call(null,inst_21583,inst_21585);
var inst_21592 = cljs.core.nth.call(null,inst_21591,(0),null);
var inst_21593 = cljs.core.nth.call(null,inst_21591,(1),null);
var state_21701__$1 = (function (){var statearr_21773 = state_21701;
(statearr_21773[(26)] = inst_21592);

return statearr_21773;
})();
if(cljs.core.truth_(inst_21593)){
var statearr_21774_21837 = state_21701__$1;
(statearr_21774_21837[(1)] = (13));

} else {
var statearr_21775_21838 = state_21701__$1;
(statearr_21775_21838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (18))){
var inst_21626 = (state_21701[(2)]);
var state_21701__$1 = state_21701;
var statearr_21776_21839 = state_21701__$1;
(statearr_21776_21839[(2)] = inst_21626);

(statearr_21776_21839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (42))){
var state_21701__$1 = state_21701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21701__$1,(45),dchan);
} else {
if((state_val_21702 === (37))){
var inst_21573 = (state_21701[(11)]);
var inst_21669 = (state_21701[(23)]);
var inst_21660 = (state_21701[(25)]);
var inst_21669__$1 = cljs.core.first.call(null,inst_21660);
var inst_21670 = cljs.core.async.put_BANG_.call(null,inst_21669__$1,inst_21573,done);
var state_21701__$1 = (function (){var statearr_21777 = state_21701;
(statearr_21777[(23)] = inst_21669__$1);

return statearr_21777;
})();
if(cljs.core.truth_(inst_21670)){
var statearr_21778_21840 = state_21701__$1;
(statearr_21778_21840[(1)] = (39));

} else {
var statearr_21779_21841 = state_21701__$1;
(statearr_21779_21841[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21702 === (8))){
var inst_21585 = (state_21701[(14)]);
var inst_21584 = (state_21701[(15)]);
var inst_21587 = (inst_21585 < inst_21584);
var inst_21588 = inst_21587;
var state_21701__$1 = state_21701;
if(cljs.core.truth_(inst_21588)){
var statearr_21780_21842 = state_21701__$1;
(statearr_21780_21842[(1)] = (10));

} else {
var statearr_21781_21843 = state_21701__$1;
(statearr_21781_21843[(1)] = (11));

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
});})(c__14440__auto___21789,cs,m,dchan,dctr,done))
;
return ((function (switch__14425__auto__,c__14440__auto___21789,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_21785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21785[(0)] = state_machine__14426__auto__);

(statearr_21785[(1)] = (1));

return statearr_21785;
});
var state_machine__14426__auto____1 = (function (state_21701){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_21701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e21786){if((e21786 instanceof Object)){
var ex__14429__auto__ = e21786;
var statearr_21787_21844 = state_21701;
(statearr_21787_21844[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21845 = state_21701;
state_21701 = G__21845;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_21701){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_21701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___21789,cs,m,dchan,dctr,done))
})();
var state__14442__auto__ = (function (){var statearr_21788 = f__14441__auto__.call(null);
(statearr_21788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___21789);

return statearr_21788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___21789,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21847 = {};
return obj21847;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21848){
var map__21853 = p__21848;
var map__21853__$1 = ((cljs.core.seq_QMARK_.call(null,map__21853))?cljs.core.apply.call(null,cljs.core.hash_map,map__21853):map__21853);
var opts = map__21853__$1;
var statearr_21854_21857 = state;
(statearr_21854_21857[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21853,map__21853__$1,opts){
return (function (val){
var statearr_21855_21858 = state;
(statearr_21855_21858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21853,map__21853__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21856_21859 = state;
(statearr_21856_21859[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21848 = null;
if (arguments.length > 3) {
  p__21848 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21848);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21860){
var state = cljs.core.first(arglist__21860);
arglist__21860 = cljs.core.next(arglist__21860);
var cont_block = cljs.core.first(arglist__21860);
arglist__21860 = cljs.core.next(arglist__21860);
var ports = cljs.core.first(arglist__21860);
var p__21848 = cljs.core.rest(arglist__21860);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21848);
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
if(typeof cljs.core.async.t21980 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21980 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21981){
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
this.meta21981 = meta21981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21980.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21980.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21980.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21980.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21980.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21980.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21980.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21982){
var self__ = this;
var _21982__$1 = this;
return self__.meta21981;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21982,meta21981__$1){
var self__ = this;
var _21982__$1 = this;
return (new cljs.core.async.t21980(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21981__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21980.cljs$lang$type = true;

cljs.core.async.t21980.cljs$lang$ctorStr = "cljs.core.async/t21980";

cljs.core.async.t21980.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21980");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21980 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21981){
return (new cljs.core.async.t21980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21981));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21980(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__14440__auto___22099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___22099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___22099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22052){
var state_val_22053 = (state_22052[(1)]);
if((state_val_22053 === (7))){
var inst_21996 = (state_22052[(7)]);
var inst_22001 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21996);
var state_22052__$1 = state_22052;
var statearr_22054_22100 = state_22052__$1;
(statearr_22054_22100[(2)] = inst_22001);

(statearr_22054_22100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (20))){
var inst_22011 = (state_22052[(8)]);
var state_22052__$1 = state_22052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22052__$1,(23),out,inst_22011);
} else {
if((state_val_22053 === (1))){
var inst_21986 = (state_22052[(9)]);
var inst_21986__$1 = calc_state.call(null);
var inst_21987 = cljs.core.seq_QMARK_.call(null,inst_21986__$1);
var state_22052__$1 = (function (){var statearr_22055 = state_22052;
(statearr_22055[(9)] = inst_21986__$1);

return statearr_22055;
})();
if(inst_21987){
var statearr_22056_22101 = state_22052__$1;
(statearr_22056_22101[(1)] = (2));

} else {
var statearr_22057_22102 = state_22052__$1;
(statearr_22057_22102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (24))){
var inst_22004 = (state_22052[(10)]);
var inst_21996 = inst_22004;
var state_22052__$1 = (function (){var statearr_22058 = state_22052;
(statearr_22058[(7)] = inst_21996);

return statearr_22058;
})();
var statearr_22059_22103 = state_22052__$1;
(statearr_22059_22103[(2)] = null);

(statearr_22059_22103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (4))){
var inst_21986 = (state_22052[(9)]);
var inst_21992 = (state_22052[(2)]);
var inst_21993 = cljs.core.get.call(null,inst_21992,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21994 = cljs.core.get.call(null,inst_21992,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21995 = cljs.core.get.call(null,inst_21992,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21996 = inst_21986;
var state_22052__$1 = (function (){var statearr_22060 = state_22052;
(statearr_22060[(7)] = inst_21996);

(statearr_22060[(11)] = inst_21994);

(statearr_22060[(12)] = inst_21995);

(statearr_22060[(13)] = inst_21993);

return statearr_22060;
})();
var statearr_22061_22104 = state_22052__$1;
(statearr_22061_22104[(2)] = null);

(statearr_22061_22104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (15))){
var state_22052__$1 = state_22052;
var statearr_22062_22105 = state_22052__$1;
(statearr_22062_22105[(2)] = null);

(statearr_22062_22105[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (21))){
var inst_22004 = (state_22052[(10)]);
var inst_21996 = inst_22004;
var state_22052__$1 = (function (){var statearr_22063 = state_22052;
(statearr_22063[(7)] = inst_21996);

return statearr_22063;
})();
var statearr_22064_22106 = state_22052__$1;
(statearr_22064_22106[(2)] = null);

(statearr_22064_22106[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (13))){
var inst_22048 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22065_22107 = state_22052__$1;
(statearr_22065_22107[(2)] = inst_22048);

(statearr_22065_22107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (22))){
var inst_22046 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22066_22108 = state_22052__$1;
(statearr_22066_22108[(2)] = inst_22046);

(statearr_22066_22108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (6))){
var inst_22050 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22052__$1,inst_22050);
} else {
if((state_val_22053 === (25))){
var state_22052__$1 = state_22052;
var statearr_22067_22109 = state_22052__$1;
(statearr_22067_22109[(2)] = null);

(statearr_22067_22109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (17))){
var inst_22026 = (state_22052[(14)]);
var state_22052__$1 = state_22052;
var statearr_22068_22110 = state_22052__$1;
(statearr_22068_22110[(2)] = inst_22026);

(statearr_22068_22110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (3))){
var inst_21986 = (state_22052[(9)]);
var state_22052__$1 = state_22052;
var statearr_22069_22111 = state_22052__$1;
(statearr_22069_22111[(2)] = inst_21986);

(statearr_22069_22111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (12))){
var inst_22012 = (state_22052[(15)]);
var inst_22007 = (state_22052[(16)]);
var inst_22026 = (state_22052[(14)]);
var inst_22026__$1 = inst_22007.call(null,inst_22012);
var state_22052__$1 = (function (){var statearr_22070 = state_22052;
(statearr_22070[(14)] = inst_22026__$1);

return statearr_22070;
})();
if(cljs.core.truth_(inst_22026__$1)){
var statearr_22071_22112 = state_22052__$1;
(statearr_22071_22112[(1)] = (17));

} else {
var statearr_22072_22113 = state_22052__$1;
(statearr_22072_22113[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (2))){
var inst_21986 = (state_22052[(9)]);
var inst_21989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21986);
var state_22052__$1 = state_22052;
var statearr_22073_22114 = state_22052__$1;
(statearr_22073_22114[(2)] = inst_21989);

(statearr_22073_22114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (23))){
var inst_22037 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
if(cljs.core.truth_(inst_22037)){
var statearr_22074_22115 = state_22052__$1;
(statearr_22074_22115[(1)] = (24));

} else {
var statearr_22075_22116 = state_22052__$1;
(statearr_22075_22116[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (19))){
var inst_22034 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
if(cljs.core.truth_(inst_22034)){
var statearr_22076_22117 = state_22052__$1;
(statearr_22076_22117[(1)] = (20));

} else {
var statearr_22077_22118 = state_22052__$1;
(statearr_22077_22118[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (11))){
var inst_22011 = (state_22052[(8)]);
var inst_22017 = (inst_22011 == null);
var state_22052__$1 = state_22052;
if(cljs.core.truth_(inst_22017)){
var statearr_22078_22119 = state_22052__$1;
(statearr_22078_22119[(1)] = (14));

} else {
var statearr_22079_22120 = state_22052__$1;
(statearr_22079_22120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (9))){
var inst_22004 = (state_22052[(10)]);
var inst_22004__$1 = (state_22052[(2)]);
var inst_22005 = cljs.core.get.call(null,inst_22004__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22006 = cljs.core.get.call(null,inst_22004__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22007 = cljs.core.get.call(null,inst_22004__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22052__$1 = (function (){var statearr_22080 = state_22052;
(statearr_22080[(17)] = inst_22006);

(statearr_22080[(16)] = inst_22007);

(statearr_22080[(10)] = inst_22004__$1);

return statearr_22080;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22052__$1,(10),inst_22005);
} else {
if((state_val_22053 === (5))){
var inst_21996 = (state_22052[(7)]);
var inst_21999 = cljs.core.seq_QMARK_.call(null,inst_21996);
var state_22052__$1 = state_22052;
if(inst_21999){
var statearr_22081_22121 = state_22052__$1;
(statearr_22081_22121[(1)] = (7));

} else {
var statearr_22082_22122 = state_22052__$1;
(statearr_22082_22122[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (14))){
var inst_22012 = (state_22052[(15)]);
var inst_22019 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22012);
var state_22052__$1 = state_22052;
var statearr_22083_22123 = state_22052__$1;
(statearr_22083_22123[(2)] = inst_22019);

(statearr_22083_22123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (26))){
var inst_22042 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22084_22124 = state_22052__$1;
(statearr_22084_22124[(2)] = inst_22042);

(statearr_22084_22124[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (16))){
var inst_22022 = (state_22052[(2)]);
var inst_22023 = calc_state.call(null);
var inst_21996 = inst_22023;
var state_22052__$1 = (function (){var statearr_22085 = state_22052;
(statearr_22085[(7)] = inst_21996);

(statearr_22085[(18)] = inst_22022);

return statearr_22085;
})();
var statearr_22086_22125 = state_22052__$1;
(statearr_22086_22125[(2)] = null);

(statearr_22086_22125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (10))){
var inst_22012 = (state_22052[(15)]);
var inst_22011 = (state_22052[(8)]);
var inst_22010 = (state_22052[(2)]);
var inst_22011__$1 = cljs.core.nth.call(null,inst_22010,(0),null);
var inst_22012__$1 = cljs.core.nth.call(null,inst_22010,(1),null);
var inst_22013 = (inst_22011__$1 == null);
var inst_22014 = cljs.core._EQ_.call(null,inst_22012__$1,change);
var inst_22015 = (inst_22013) || (inst_22014);
var state_22052__$1 = (function (){var statearr_22087 = state_22052;
(statearr_22087[(15)] = inst_22012__$1);

(statearr_22087[(8)] = inst_22011__$1);

return statearr_22087;
})();
if(cljs.core.truth_(inst_22015)){
var statearr_22088_22126 = state_22052__$1;
(statearr_22088_22126[(1)] = (11));

} else {
var statearr_22089_22127 = state_22052__$1;
(statearr_22089_22127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (18))){
var inst_22006 = (state_22052[(17)]);
var inst_22012 = (state_22052[(15)]);
var inst_22007 = (state_22052[(16)]);
var inst_22029 = cljs.core.empty_QMARK_.call(null,inst_22007);
var inst_22030 = inst_22006.call(null,inst_22012);
var inst_22031 = cljs.core.not.call(null,inst_22030);
var inst_22032 = (inst_22029) && (inst_22031);
var state_22052__$1 = state_22052;
var statearr_22090_22128 = state_22052__$1;
(statearr_22090_22128[(2)] = inst_22032);

(statearr_22090_22128[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (8))){
var inst_21996 = (state_22052[(7)]);
var state_22052__$1 = state_22052;
var statearr_22091_22129 = state_22052__$1;
(statearr_22091_22129[(2)] = inst_21996);

(statearr_22091_22129[(1)] = (9));


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
});})(c__14440__auto___22099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14425__auto__,c__14440__auto___22099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_22095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22095[(0)] = state_machine__14426__auto__);

(statearr_22095[(1)] = (1));

return statearr_22095;
});
var state_machine__14426__auto____1 = (function (state_22052){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_22052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e22096){if((e22096 instanceof Object)){
var ex__14429__auto__ = e22096;
var statearr_22097_22130 = state_22052;
(statearr_22097_22130[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22131 = state_22052;
state_22052 = G__22131;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_22052){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_22052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___22099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14442__auto__ = (function (){var statearr_22098 = f__14441__auto__.call(null);
(statearr_22098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___22099);

return statearr_22098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___22099,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22133 = {};
return obj22133;
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
return (function (p1__22134_SHARP_){
if(cljs.core.truth_(p1__22134_SHARP_.call(null,topic))){
return p1__22134_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22134_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22257 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22257 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22258){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22258 = meta22258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22257.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22257.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22257.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22257.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22259){
var self__ = this;
var _22259__$1 = this;
return self__.meta22258;
});})(mults,ensure_mult))
;

cljs.core.async.t22257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22259,meta22258__$1){
var self__ = this;
var _22259__$1 = this;
return (new cljs.core.async.t22257(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22258__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22257.cljs$lang$type = true;

cljs.core.async.t22257.cljs$lang$ctorStr = "cljs.core.async/t22257";

cljs.core.async.t22257.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22257");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22257 = ((function (mults,ensure_mult){
return (function __GT_t22257(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22258){
return (new cljs.core.async.t22257(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22258));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22257(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__14440__auto___22379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___22379,mults,ensure_mult,p){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___22379,mults,ensure_mult,p){
return (function (state_22331){
var state_val_22332 = (state_22331[(1)]);
if((state_val_22332 === (7))){
var inst_22327 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22333_22380 = state_22331__$1;
(statearr_22333_22380[(2)] = inst_22327);

(statearr_22333_22380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (20))){
var state_22331__$1 = state_22331;
var statearr_22334_22381 = state_22331__$1;
(statearr_22334_22381[(2)] = null);

(statearr_22334_22381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (1))){
var state_22331__$1 = state_22331;
var statearr_22335_22382 = state_22331__$1;
(statearr_22335_22382[(2)] = null);

(statearr_22335_22382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (24))){
var inst_22310 = (state_22331[(7)]);
var inst_22319 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22310);
var state_22331__$1 = state_22331;
var statearr_22336_22383 = state_22331__$1;
(statearr_22336_22383[(2)] = inst_22319);

(statearr_22336_22383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (4))){
var inst_22262 = (state_22331[(8)]);
var inst_22262__$1 = (state_22331[(2)]);
var inst_22263 = (inst_22262__$1 == null);
var state_22331__$1 = (function (){var statearr_22337 = state_22331;
(statearr_22337[(8)] = inst_22262__$1);

return statearr_22337;
})();
if(cljs.core.truth_(inst_22263)){
var statearr_22338_22384 = state_22331__$1;
(statearr_22338_22384[(1)] = (5));

} else {
var statearr_22339_22385 = state_22331__$1;
(statearr_22339_22385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (15))){
var inst_22304 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22340_22386 = state_22331__$1;
(statearr_22340_22386[(2)] = inst_22304);

(statearr_22340_22386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (21))){
var inst_22324 = (state_22331[(2)]);
var state_22331__$1 = (function (){var statearr_22341 = state_22331;
(statearr_22341[(9)] = inst_22324);

return statearr_22341;
})();
var statearr_22342_22387 = state_22331__$1;
(statearr_22342_22387[(2)] = null);

(statearr_22342_22387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (13))){
var inst_22286 = (state_22331[(10)]);
var inst_22288 = cljs.core.chunked_seq_QMARK_.call(null,inst_22286);
var state_22331__$1 = state_22331;
if(inst_22288){
var statearr_22343_22388 = state_22331__$1;
(statearr_22343_22388[(1)] = (16));

} else {
var statearr_22344_22389 = state_22331__$1;
(statearr_22344_22389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (22))){
var inst_22316 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22316)){
var statearr_22345_22390 = state_22331__$1;
(statearr_22345_22390[(1)] = (23));

} else {
var statearr_22346_22391 = state_22331__$1;
(statearr_22346_22391[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (6))){
var inst_22310 = (state_22331[(7)]);
var inst_22312 = (state_22331[(11)]);
var inst_22262 = (state_22331[(8)]);
var inst_22310__$1 = topic_fn.call(null,inst_22262);
var inst_22311 = cljs.core.deref.call(null,mults);
var inst_22312__$1 = cljs.core.get.call(null,inst_22311,inst_22310__$1);
var state_22331__$1 = (function (){var statearr_22347 = state_22331;
(statearr_22347[(7)] = inst_22310__$1);

(statearr_22347[(11)] = inst_22312__$1);

return statearr_22347;
})();
if(cljs.core.truth_(inst_22312__$1)){
var statearr_22348_22392 = state_22331__$1;
(statearr_22348_22392[(1)] = (19));

} else {
var statearr_22349_22393 = state_22331__$1;
(statearr_22349_22393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (25))){
var inst_22321 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22350_22394 = state_22331__$1;
(statearr_22350_22394[(2)] = inst_22321);

(statearr_22350_22394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (17))){
var inst_22286 = (state_22331[(10)]);
var inst_22295 = cljs.core.first.call(null,inst_22286);
var inst_22296 = cljs.core.async.muxch_STAR_.call(null,inst_22295);
var inst_22297 = cljs.core.async.close_BANG_.call(null,inst_22296);
var inst_22298 = cljs.core.next.call(null,inst_22286);
var inst_22272 = inst_22298;
var inst_22273 = null;
var inst_22274 = (0);
var inst_22275 = (0);
var state_22331__$1 = (function (){var statearr_22351 = state_22331;
(statearr_22351[(12)] = inst_22274);

(statearr_22351[(13)] = inst_22275);

(statearr_22351[(14)] = inst_22297);

(statearr_22351[(15)] = inst_22273);

(statearr_22351[(16)] = inst_22272);

return statearr_22351;
})();
var statearr_22352_22395 = state_22331__$1;
(statearr_22352_22395[(2)] = null);

(statearr_22352_22395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (3))){
var inst_22329 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22331__$1,inst_22329);
} else {
if((state_val_22332 === (12))){
var inst_22306 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22353_22396 = state_22331__$1;
(statearr_22353_22396[(2)] = inst_22306);

(statearr_22353_22396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (2))){
var state_22331__$1 = state_22331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22331__$1,(4),ch);
} else {
if((state_val_22332 === (23))){
var state_22331__$1 = state_22331;
var statearr_22354_22397 = state_22331__$1;
(statearr_22354_22397[(2)] = null);

(statearr_22354_22397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (19))){
var inst_22312 = (state_22331[(11)]);
var inst_22262 = (state_22331[(8)]);
var inst_22314 = cljs.core.async.muxch_STAR_.call(null,inst_22312);
var state_22331__$1 = state_22331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22331__$1,(22),inst_22314,inst_22262);
} else {
if((state_val_22332 === (11))){
var inst_22286 = (state_22331[(10)]);
var inst_22272 = (state_22331[(16)]);
var inst_22286__$1 = cljs.core.seq.call(null,inst_22272);
var state_22331__$1 = (function (){var statearr_22355 = state_22331;
(statearr_22355[(10)] = inst_22286__$1);

return statearr_22355;
})();
if(inst_22286__$1){
var statearr_22356_22398 = state_22331__$1;
(statearr_22356_22398[(1)] = (13));

} else {
var statearr_22357_22399 = state_22331__$1;
(statearr_22357_22399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (9))){
var inst_22308 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22358_22400 = state_22331__$1;
(statearr_22358_22400[(2)] = inst_22308);

(statearr_22358_22400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (5))){
var inst_22269 = cljs.core.deref.call(null,mults);
var inst_22270 = cljs.core.vals.call(null,inst_22269);
var inst_22271 = cljs.core.seq.call(null,inst_22270);
var inst_22272 = inst_22271;
var inst_22273 = null;
var inst_22274 = (0);
var inst_22275 = (0);
var state_22331__$1 = (function (){var statearr_22359 = state_22331;
(statearr_22359[(12)] = inst_22274);

(statearr_22359[(13)] = inst_22275);

(statearr_22359[(15)] = inst_22273);

(statearr_22359[(16)] = inst_22272);

return statearr_22359;
})();
var statearr_22360_22401 = state_22331__$1;
(statearr_22360_22401[(2)] = null);

(statearr_22360_22401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (14))){
var state_22331__$1 = state_22331;
var statearr_22364_22402 = state_22331__$1;
(statearr_22364_22402[(2)] = null);

(statearr_22364_22402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (16))){
var inst_22286 = (state_22331[(10)]);
var inst_22290 = cljs.core.chunk_first.call(null,inst_22286);
var inst_22291 = cljs.core.chunk_rest.call(null,inst_22286);
var inst_22292 = cljs.core.count.call(null,inst_22290);
var inst_22272 = inst_22291;
var inst_22273 = inst_22290;
var inst_22274 = inst_22292;
var inst_22275 = (0);
var state_22331__$1 = (function (){var statearr_22365 = state_22331;
(statearr_22365[(12)] = inst_22274);

(statearr_22365[(13)] = inst_22275);

(statearr_22365[(15)] = inst_22273);

(statearr_22365[(16)] = inst_22272);

return statearr_22365;
})();
var statearr_22366_22403 = state_22331__$1;
(statearr_22366_22403[(2)] = null);

(statearr_22366_22403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (10))){
var inst_22274 = (state_22331[(12)]);
var inst_22275 = (state_22331[(13)]);
var inst_22273 = (state_22331[(15)]);
var inst_22272 = (state_22331[(16)]);
var inst_22280 = cljs.core._nth.call(null,inst_22273,inst_22275);
var inst_22281 = cljs.core.async.muxch_STAR_.call(null,inst_22280);
var inst_22282 = cljs.core.async.close_BANG_.call(null,inst_22281);
var inst_22283 = (inst_22275 + (1));
var tmp22361 = inst_22274;
var tmp22362 = inst_22273;
var tmp22363 = inst_22272;
var inst_22272__$1 = tmp22363;
var inst_22273__$1 = tmp22362;
var inst_22274__$1 = tmp22361;
var inst_22275__$1 = inst_22283;
var state_22331__$1 = (function (){var statearr_22367 = state_22331;
(statearr_22367[(12)] = inst_22274__$1);

(statearr_22367[(13)] = inst_22275__$1);

(statearr_22367[(17)] = inst_22282);

(statearr_22367[(15)] = inst_22273__$1);

(statearr_22367[(16)] = inst_22272__$1);

return statearr_22367;
})();
var statearr_22368_22404 = state_22331__$1;
(statearr_22368_22404[(2)] = null);

(statearr_22368_22404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (18))){
var inst_22301 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22369_22405 = state_22331__$1;
(statearr_22369_22405[(2)] = inst_22301);

(statearr_22369_22405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (8))){
var inst_22274 = (state_22331[(12)]);
var inst_22275 = (state_22331[(13)]);
var inst_22277 = (inst_22275 < inst_22274);
var inst_22278 = inst_22277;
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22278)){
var statearr_22370_22406 = state_22331__$1;
(statearr_22370_22406[(1)] = (10));

} else {
var statearr_22371_22407 = state_22331__$1;
(statearr_22371_22407[(1)] = (11));

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
});})(c__14440__auto___22379,mults,ensure_mult,p))
;
return ((function (switch__14425__auto__,c__14440__auto___22379,mults,ensure_mult,p){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_22375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22375[(0)] = state_machine__14426__auto__);

(statearr_22375[(1)] = (1));

return statearr_22375;
});
var state_machine__14426__auto____1 = (function (state_22331){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_22331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e22376){if((e22376 instanceof Object)){
var ex__14429__auto__ = e22376;
var statearr_22377_22408 = state_22331;
(statearr_22377_22408[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22409 = state_22331;
state_22331 = G__22409;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_22331){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_22331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___22379,mults,ensure_mult,p))
})();
var state__14442__auto__ = (function (){var statearr_22378 = f__14441__auto__.call(null);
(statearr_22378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___22379);

return statearr_22378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___22379,mults,ensure_mult,p))
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
var c__14440__auto___22546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___22546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___22546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22516){
var state_val_22517 = (state_22516[(1)]);
if((state_val_22517 === (7))){
var state_22516__$1 = state_22516;
var statearr_22518_22547 = state_22516__$1;
(statearr_22518_22547[(2)] = null);

(statearr_22518_22547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (1))){
var state_22516__$1 = state_22516;
var statearr_22519_22548 = state_22516__$1;
(statearr_22519_22548[(2)] = null);

(statearr_22519_22548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (4))){
var inst_22480 = (state_22516[(7)]);
var inst_22482 = (inst_22480 < cnt);
var state_22516__$1 = state_22516;
if(cljs.core.truth_(inst_22482)){
var statearr_22520_22549 = state_22516__$1;
(statearr_22520_22549[(1)] = (6));

} else {
var statearr_22521_22550 = state_22516__$1;
(statearr_22521_22550[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (15))){
var inst_22512 = (state_22516[(2)]);
var state_22516__$1 = state_22516;
var statearr_22522_22551 = state_22516__$1;
(statearr_22522_22551[(2)] = inst_22512);

(statearr_22522_22551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (13))){
var inst_22505 = cljs.core.async.close_BANG_.call(null,out);
var state_22516__$1 = state_22516;
var statearr_22523_22552 = state_22516__$1;
(statearr_22523_22552[(2)] = inst_22505);

(statearr_22523_22552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (6))){
var state_22516__$1 = state_22516;
var statearr_22524_22553 = state_22516__$1;
(statearr_22524_22553[(2)] = null);

(statearr_22524_22553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (3))){
var inst_22514 = (state_22516[(2)]);
var state_22516__$1 = state_22516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22516__$1,inst_22514);
} else {
if((state_val_22517 === (12))){
var inst_22502 = (state_22516[(8)]);
var inst_22502__$1 = (state_22516[(2)]);
var inst_22503 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22502__$1);
var state_22516__$1 = (function (){var statearr_22525 = state_22516;
(statearr_22525[(8)] = inst_22502__$1);

return statearr_22525;
})();
if(cljs.core.truth_(inst_22503)){
var statearr_22526_22554 = state_22516__$1;
(statearr_22526_22554[(1)] = (13));

} else {
var statearr_22527_22555 = state_22516__$1;
(statearr_22527_22555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (2))){
var inst_22479 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22480 = (0);
var state_22516__$1 = (function (){var statearr_22528 = state_22516;
(statearr_22528[(7)] = inst_22480);

(statearr_22528[(9)] = inst_22479);

return statearr_22528;
})();
var statearr_22529_22556 = state_22516__$1;
(statearr_22529_22556[(2)] = null);

(statearr_22529_22556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (11))){
var inst_22480 = (state_22516[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22516,(10),Object,null,(9));
var inst_22489 = chs__$1.call(null,inst_22480);
var inst_22490 = done.call(null,inst_22480);
var inst_22491 = cljs.core.async.take_BANG_.call(null,inst_22489,inst_22490);
var state_22516__$1 = state_22516;
var statearr_22530_22557 = state_22516__$1;
(statearr_22530_22557[(2)] = inst_22491);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22516__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (9))){
var inst_22480 = (state_22516[(7)]);
var inst_22493 = (state_22516[(2)]);
var inst_22494 = (inst_22480 + (1));
var inst_22480__$1 = inst_22494;
var state_22516__$1 = (function (){var statearr_22531 = state_22516;
(statearr_22531[(7)] = inst_22480__$1);

(statearr_22531[(10)] = inst_22493);

return statearr_22531;
})();
var statearr_22532_22558 = state_22516__$1;
(statearr_22532_22558[(2)] = null);

(statearr_22532_22558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (5))){
var inst_22500 = (state_22516[(2)]);
var state_22516__$1 = (function (){var statearr_22533 = state_22516;
(statearr_22533[(11)] = inst_22500);

return statearr_22533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22516__$1,(12),dchan);
} else {
if((state_val_22517 === (14))){
var inst_22502 = (state_22516[(8)]);
var inst_22507 = cljs.core.apply.call(null,f,inst_22502);
var state_22516__$1 = state_22516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22516__$1,(16),out,inst_22507);
} else {
if((state_val_22517 === (16))){
var inst_22509 = (state_22516[(2)]);
var state_22516__$1 = (function (){var statearr_22534 = state_22516;
(statearr_22534[(12)] = inst_22509);

return statearr_22534;
})();
var statearr_22535_22559 = state_22516__$1;
(statearr_22535_22559[(2)] = null);

(statearr_22535_22559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (10))){
var inst_22484 = (state_22516[(2)]);
var inst_22485 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22516__$1 = (function (){var statearr_22536 = state_22516;
(statearr_22536[(13)] = inst_22484);

return statearr_22536;
})();
var statearr_22537_22560 = state_22516__$1;
(statearr_22537_22560[(2)] = inst_22485);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22516__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22517 === (8))){
var inst_22498 = (state_22516[(2)]);
var state_22516__$1 = state_22516;
var statearr_22538_22561 = state_22516__$1;
(statearr_22538_22561[(2)] = inst_22498);

(statearr_22538_22561[(1)] = (5));


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
});})(c__14440__auto___22546,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14425__auto__,c__14440__auto___22546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_22542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22542[(0)] = state_machine__14426__auto__);

(statearr_22542[(1)] = (1));

return statearr_22542;
});
var state_machine__14426__auto____1 = (function (state_22516){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_22516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e22543){if((e22543 instanceof Object)){
var ex__14429__auto__ = e22543;
var statearr_22544_22562 = state_22516;
(statearr_22544_22562[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22563 = state_22516;
state_22516 = G__22563;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_22516){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_22516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___22546,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14442__auto__ = (function (){var statearr_22545 = f__14441__auto__.call(null);
(statearr_22545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___22546);

return statearr_22545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___22546,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__14440__auto___22671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___22671,out){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___22671,out){
return (function (state_22647){
var state_val_22648 = (state_22647[(1)]);
if((state_val_22648 === (7))){
var inst_22626 = (state_22647[(7)]);
var inst_22627 = (state_22647[(8)]);
var inst_22626__$1 = (state_22647[(2)]);
var inst_22627__$1 = cljs.core.nth.call(null,inst_22626__$1,(0),null);
var inst_22628 = cljs.core.nth.call(null,inst_22626__$1,(1),null);
var inst_22629 = (inst_22627__$1 == null);
var state_22647__$1 = (function (){var statearr_22649 = state_22647;
(statearr_22649[(7)] = inst_22626__$1);

(statearr_22649[(8)] = inst_22627__$1);

(statearr_22649[(9)] = inst_22628);

return statearr_22649;
})();
if(cljs.core.truth_(inst_22629)){
var statearr_22650_22672 = state_22647__$1;
(statearr_22650_22672[(1)] = (8));

} else {
var statearr_22651_22673 = state_22647__$1;
(statearr_22651_22673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (1))){
var inst_22618 = cljs.core.vec.call(null,chs);
var inst_22619 = inst_22618;
var state_22647__$1 = (function (){var statearr_22652 = state_22647;
(statearr_22652[(10)] = inst_22619);

return statearr_22652;
})();
var statearr_22653_22674 = state_22647__$1;
(statearr_22653_22674[(2)] = null);

(statearr_22653_22674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (4))){
var inst_22619 = (state_22647[(10)]);
var state_22647__$1 = state_22647;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22647__$1,(7),inst_22619);
} else {
if((state_val_22648 === (6))){
var inst_22643 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
var statearr_22654_22675 = state_22647__$1;
(statearr_22654_22675[(2)] = inst_22643);

(statearr_22654_22675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (3))){
var inst_22645 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22647__$1,inst_22645);
} else {
if((state_val_22648 === (2))){
var inst_22619 = (state_22647[(10)]);
var inst_22621 = cljs.core.count.call(null,inst_22619);
var inst_22622 = (inst_22621 > (0));
var state_22647__$1 = state_22647;
if(cljs.core.truth_(inst_22622)){
var statearr_22656_22676 = state_22647__$1;
(statearr_22656_22676[(1)] = (4));

} else {
var statearr_22657_22677 = state_22647__$1;
(statearr_22657_22677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (11))){
var inst_22619 = (state_22647[(10)]);
var inst_22636 = (state_22647[(2)]);
var tmp22655 = inst_22619;
var inst_22619__$1 = tmp22655;
var state_22647__$1 = (function (){var statearr_22658 = state_22647;
(statearr_22658[(10)] = inst_22619__$1);

(statearr_22658[(11)] = inst_22636);

return statearr_22658;
})();
var statearr_22659_22678 = state_22647__$1;
(statearr_22659_22678[(2)] = null);

(statearr_22659_22678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (9))){
var inst_22627 = (state_22647[(8)]);
var state_22647__$1 = state_22647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22647__$1,(11),out,inst_22627);
} else {
if((state_val_22648 === (5))){
var inst_22641 = cljs.core.async.close_BANG_.call(null,out);
var state_22647__$1 = state_22647;
var statearr_22660_22679 = state_22647__$1;
(statearr_22660_22679[(2)] = inst_22641);

(statearr_22660_22679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (10))){
var inst_22639 = (state_22647[(2)]);
var state_22647__$1 = state_22647;
var statearr_22661_22680 = state_22647__$1;
(statearr_22661_22680[(2)] = inst_22639);

(statearr_22661_22680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22648 === (8))){
var inst_22626 = (state_22647[(7)]);
var inst_22619 = (state_22647[(10)]);
var inst_22627 = (state_22647[(8)]);
var inst_22628 = (state_22647[(9)]);
var inst_22631 = (function (){var c = inst_22628;
var v = inst_22627;
var vec__22624 = inst_22626;
var cs = inst_22619;
return ((function (c,v,vec__22624,cs,inst_22626,inst_22619,inst_22627,inst_22628,state_val_22648,c__14440__auto___22671,out){
return (function (p1__22564_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22564_SHARP_);
});
;})(c,v,vec__22624,cs,inst_22626,inst_22619,inst_22627,inst_22628,state_val_22648,c__14440__auto___22671,out))
})();
var inst_22632 = cljs.core.filterv.call(null,inst_22631,inst_22619);
var inst_22619__$1 = inst_22632;
var state_22647__$1 = (function (){var statearr_22662 = state_22647;
(statearr_22662[(10)] = inst_22619__$1);

return statearr_22662;
})();
var statearr_22663_22681 = state_22647__$1;
(statearr_22663_22681[(2)] = null);

(statearr_22663_22681[(1)] = (2));


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
});})(c__14440__auto___22671,out))
;
return ((function (switch__14425__auto__,c__14440__auto___22671,out){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_22667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22667[(0)] = state_machine__14426__auto__);

(statearr_22667[(1)] = (1));

return statearr_22667;
});
var state_machine__14426__auto____1 = (function (state_22647){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_22647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e22668){if((e22668 instanceof Object)){
var ex__14429__auto__ = e22668;
var statearr_22669_22682 = state_22647;
(statearr_22669_22682[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22683 = state_22647;
state_22647 = G__22683;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_22647){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_22647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___22671,out))
})();
var state__14442__auto__ = (function (){var statearr_22670 = f__14441__auto__.call(null);
(statearr_22670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___22671);

return statearr_22670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___22671,out))
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
var c__14440__auto___22776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___22776,out){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___22776,out){
return (function (state_22753){
var state_val_22754 = (state_22753[(1)]);
if((state_val_22754 === (7))){
var inst_22735 = (state_22753[(7)]);
var inst_22735__$1 = (state_22753[(2)]);
var inst_22736 = (inst_22735__$1 == null);
var inst_22737 = cljs.core.not.call(null,inst_22736);
var state_22753__$1 = (function (){var statearr_22755 = state_22753;
(statearr_22755[(7)] = inst_22735__$1);

return statearr_22755;
})();
if(inst_22737){
var statearr_22756_22777 = state_22753__$1;
(statearr_22756_22777[(1)] = (8));

} else {
var statearr_22757_22778 = state_22753__$1;
(statearr_22757_22778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (1))){
var inst_22730 = (0);
var state_22753__$1 = (function (){var statearr_22758 = state_22753;
(statearr_22758[(8)] = inst_22730);

return statearr_22758;
})();
var statearr_22759_22779 = state_22753__$1;
(statearr_22759_22779[(2)] = null);

(statearr_22759_22779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (4))){
var state_22753__$1 = state_22753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22753__$1,(7),ch);
} else {
if((state_val_22754 === (6))){
var inst_22748 = (state_22753[(2)]);
var state_22753__$1 = state_22753;
var statearr_22760_22780 = state_22753__$1;
(statearr_22760_22780[(2)] = inst_22748);

(statearr_22760_22780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (3))){
var inst_22750 = (state_22753[(2)]);
var inst_22751 = cljs.core.async.close_BANG_.call(null,out);
var state_22753__$1 = (function (){var statearr_22761 = state_22753;
(statearr_22761[(9)] = inst_22750);

return statearr_22761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22753__$1,inst_22751);
} else {
if((state_val_22754 === (2))){
var inst_22730 = (state_22753[(8)]);
var inst_22732 = (inst_22730 < n);
var state_22753__$1 = state_22753;
if(cljs.core.truth_(inst_22732)){
var statearr_22762_22781 = state_22753__$1;
(statearr_22762_22781[(1)] = (4));

} else {
var statearr_22763_22782 = state_22753__$1;
(statearr_22763_22782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (11))){
var inst_22730 = (state_22753[(8)]);
var inst_22740 = (state_22753[(2)]);
var inst_22741 = (inst_22730 + (1));
var inst_22730__$1 = inst_22741;
var state_22753__$1 = (function (){var statearr_22764 = state_22753;
(statearr_22764[(10)] = inst_22740);

(statearr_22764[(8)] = inst_22730__$1);

return statearr_22764;
})();
var statearr_22765_22783 = state_22753__$1;
(statearr_22765_22783[(2)] = null);

(statearr_22765_22783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (9))){
var state_22753__$1 = state_22753;
var statearr_22766_22784 = state_22753__$1;
(statearr_22766_22784[(2)] = null);

(statearr_22766_22784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (5))){
var state_22753__$1 = state_22753;
var statearr_22767_22785 = state_22753__$1;
(statearr_22767_22785[(2)] = null);

(statearr_22767_22785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (10))){
var inst_22745 = (state_22753[(2)]);
var state_22753__$1 = state_22753;
var statearr_22768_22786 = state_22753__$1;
(statearr_22768_22786[(2)] = inst_22745);

(statearr_22768_22786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22754 === (8))){
var inst_22735 = (state_22753[(7)]);
var state_22753__$1 = state_22753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22753__$1,(11),out,inst_22735);
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
});})(c__14440__auto___22776,out))
;
return ((function (switch__14425__auto__,c__14440__auto___22776,out){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_22772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22772[(0)] = state_machine__14426__auto__);

(statearr_22772[(1)] = (1));

return statearr_22772;
});
var state_machine__14426__auto____1 = (function (state_22753){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_22753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e22773){if((e22773 instanceof Object)){
var ex__14429__auto__ = e22773;
var statearr_22774_22787 = state_22753;
(statearr_22774_22787[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22788 = state_22753;
state_22753 = G__22788;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_22753){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_22753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___22776,out))
})();
var state__14442__auto__ = (function (){var statearr_22775 = f__14441__auto__.call(null);
(statearr_22775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___22776);

return statearr_22775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___22776,out))
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
if(typeof cljs.core.async.t22796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22796 = (function (ch,f,map_LT_,meta22797){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22797 = meta22797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22799 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22799 = (function (fn1,_,meta22797,map_LT_,f,ch,meta22800){
this.fn1 = fn1;
this._ = _;
this.meta22797 = meta22797;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22800 = meta22800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22799.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22789_SHARP_){
return f1.call(null,(((p1__22789_SHARP_ == null))?null:self__.f.call(null,p1__22789_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22801){
var self__ = this;
var _22801__$1 = this;
return self__.meta22800;
});})(___$1))
;

cljs.core.async.t22799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22801,meta22800__$1){
var self__ = this;
var _22801__$1 = this;
return (new cljs.core.async.t22799(self__.fn1,self__._,self__.meta22797,self__.map_LT_,self__.f,self__.ch,meta22800__$1));
});})(___$1))
;

cljs.core.async.t22799.cljs$lang$type = true;

cljs.core.async.t22799.cljs$lang$ctorStr = "cljs.core.async/t22799";

cljs.core.async.t22799.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22799");
});})(___$1))
;

cljs.core.async.__GT_t22799 = ((function (___$1){
return (function __GT_t22799(fn1__$1,___$2,meta22797__$1,map_LT___$1,f__$1,ch__$1,meta22800){
return (new cljs.core.async.t22799(fn1__$1,___$2,meta22797__$1,map_LT___$1,f__$1,ch__$1,meta22800));
});})(___$1))
;

}

return (new cljs.core.async.t22799(fn1,___$1,self__.meta22797,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22798){
var self__ = this;
var _22798__$1 = this;
return self__.meta22797;
});

cljs.core.async.t22796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22798,meta22797__$1){
var self__ = this;
var _22798__$1 = this;
return (new cljs.core.async.t22796(self__.ch,self__.f,self__.map_LT_,meta22797__$1));
});

cljs.core.async.t22796.cljs$lang$type = true;

cljs.core.async.t22796.cljs$lang$ctorStr = "cljs.core.async/t22796";

cljs.core.async.t22796.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22796");
});

cljs.core.async.__GT_t22796 = (function __GT_t22796(ch__$1,f__$1,map_LT___$1,meta22797){
return (new cljs.core.async.t22796(ch__$1,f__$1,map_LT___$1,meta22797));
});

}

return (new cljs.core.async.t22796(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22805 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22805 = (function (ch,f,map_GT_,meta22806){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22806 = meta22806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22805.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22807){
var self__ = this;
var _22807__$1 = this;
return self__.meta22806;
});

cljs.core.async.t22805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22807,meta22806__$1){
var self__ = this;
var _22807__$1 = this;
return (new cljs.core.async.t22805(self__.ch,self__.f,self__.map_GT_,meta22806__$1));
});

cljs.core.async.t22805.cljs$lang$type = true;

cljs.core.async.t22805.cljs$lang$ctorStr = "cljs.core.async/t22805";

cljs.core.async.t22805.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22805");
});

cljs.core.async.__GT_t22805 = (function __GT_t22805(ch__$1,f__$1,map_GT___$1,meta22806){
return (new cljs.core.async.t22805(ch__$1,f__$1,map_GT___$1,meta22806));
});

}

return (new cljs.core.async.t22805(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22811 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22811 = (function (ch,p,filter_GT_,meta22812){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22812 = meta22812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22811.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22811.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22811.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22811.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22813){
var self__ = this;
var _22813__$1 = this;
return self__.meta22812;
});

cljs.core.async.t22811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22813,meta22812__$1){
var self__ = this;
var _22813__$1 = this;
return (new cljs.core.async.t22811(self__.ch,self__.p,self__.filter_GT_,meta22812__$1));
});

cljs.core.async.t22811.cljs$lang$type = true;

cljs.core.async.t22811.cljs$lang$ctorStr = "cljs.core.async/t22811";

cljs.core.async.t22811.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22811");
});

cljs.core.async.__GT_t22811 = (function __GT_t22811(ch__$1,p__$1,filter_GT___$1,meta22812){
return (new cljs.core.async.t22811(ch__$1,p__$1,filter_GT___$1,meta22812));
});

}

return (new cljs.core.async.t22811(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__14440__auto___22896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___22896,out){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___22896,out){
return (function (state_22875){
var state_val_22876 = (state_22875[(1)]);
if((state_val_22876 === (7))){
var inst_22871 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22877_22897 = state_22875__$1;
(statearr_22877_22897[(2)] = inst_22871);

(statearr_22877_22897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (1))){
var state_22875__$1 = state_22875;
var statearr_22878_22898 = state_22875__$1;
(statearr_22878_22898[(2)] = null);

(statearr_22878_22898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (4))){
var inst_22857 = (state_22875[(7)]);
var inst_22857__$1 = (state_22875[(2)]);
var inst_22858 = (inst_22857__$1 == null);
var state_22875__$1 = (function (){var statearr_22879 = state_22875;
(statearr_22879[(7)] = inst_22857__$1);

return statearr_22879;
})();
if(cljs.core.truth_(inst_22858)){
var statearr_22880_22899 = state_22875__$1;
(statearr_22880_22899[(1)] = (5));

} else {
var statearr_22881_22900 = state_22875__$1;
(statearr_22881_22900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (6))){
var inst_22857 = (state_22875[(7)]);
var inst_22862 = p.call(null,inst_22857);
var state_22875__$1 = state_22875;
if(cljs.core.truth_(inst_22862)){
var statearr_22882_22901 = state_22875__$1;
(statearr_22882_22901[(1)] = (8));

} else {
var statearr_22883_22902 = state_22875__$1;
(statearr_22883_22902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (3))){
var inst_22873 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22875__$1,inst_22873);
} else {
if((state_val_22876 === (2))){
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22875__$1,(4),ch);
} else {
if((state_val_22876 === (11))){
var inst_22865 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22884_22903 = state_22875__$1;
(statearr_22884_22903[(2)] = inst_22865);

(statearr_22884_22903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (9))){
var state_22875__$1 = state_22875;
var statearr_22885_22904 = state_22875__$1;
(statearr_22885_22904[(2)] = null);

(statearr_22885_22904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (5))){
var inst_22860 = cljs.core.async.close_BANG_.call(null,out);
var state_22875__$1 = state_22875;
var statearr_22886_22905 = state_22875__$1;
(statearr_22886_22905[(2)] = inst_22860);

(statearr_22886_22905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (10))){
var inst_22868 = (state_22875[(2)]);
var state_22875__$1 = (function (){var statearr_22887 = state_22875;
(statearr_22887[(8)] = inst_22868);

return statearr_22887;
})();
var statearr_22888_22906 = state_22875__$1;
(statearr_22888_22906[(2)] = null);

(statearr_22888_22906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (8))){
var inst_22857 = (state_22875[(7)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22875__$1,(11),out,inst_22857);
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
});})(c__14440__auto___22896,out))
;
return ((function (switch__14425__auto__,c__14440__auto___22896,out){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_22892 = [null,null,null,null,null,null,null,null,null];
(statearr_22892[(0)] = state_machine__14426__auto__);

(statearr_22892[(1)] = (1));

return statearr_22892;
});
var state_machine__14426__auto____1 = (function (state_22875){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_22875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e22893){if((e22893 instanceof Object)){
var ex__14429__auto__ = e22893;
var statearr_22894_22907 = state_22875;
(statearr_22894_22907[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22908 = state_22875;
state_22875 = G__22908;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_22875){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_22875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___22896,out))
})();
var state__14442__auto__ = (function (){var statearr_22895 = f__14441__auto__.call(null);
(statearr_22895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___22896);

return statearr_22895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___22896,out))
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
var c__14440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto__){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto__){
return (function (state_23074){
var state_val_23075 = (state_23074[(1)]);
if((state_val_23075 === (7))){
var inst_23070 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
var statearr_23076_23117 = state_23074__$1;
(statearr_23076_23117[(2)] = inst_23070);

(statearr_23076_23117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (20))){
var inst_23040 = (state_23074[(7)]);
var inst_23051 = (state_23074[(2)]);
var inst_23052 = cljs.core.next.call(null,inst_23040);
var inst_23026 = inst_23052;
var inst_23027 = null;
var inst_23028 = (0);
var inst_23029 = (0);
var state_23074__$1 = (function (){var statearr_23077 = state_23074;
(statearr_23077[(8)] = inst_23029);

(statearr_23077[(9)] = inst_23027);

(statearr_23077[(10)] = inst_23026);

(statearr_23077[(11)] = inst_23051);

(statearr_23077[(12)] = inst_23028);

return statearr_23077;
})();
var statearr_23078_23118 = state_23074__$1;
(statearr_23078_23118[(2)] = null);

(statearr_23078_23118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (1))){
var state_23074__$1 = state_23074;
var statearr_23079_23119 = state_23074__$1;
(statearr_23079_23119[(2)] = null);

(statearr_23079_23119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (4))){
var inst_23015 = (state_23074[(13)]);
var inst_23015__$1 = (state_23074[(2)]);
var inst_23016 = (inst_23015__$1 == null);
var state_23074__$1 = (function (){var statearr_23080 = state_23074;
(statearr_23080[(13)] = inst_23015__$1);

return statearr_23080;
})();
if(cljs.core.truth_(inst_23016)){
var statearr_23081_23120 = state_23074__$1;
(statearr_23081_23120[(1)] = (5));

} else {
var statearr_23082_23121 = state_23074__$1;
(statearr_23082_23121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (15))){
var state_23074__$1 = state_23074;
var statearr_23086_23122 = state_23074__$1;
(statearr_23086_23122[(2)] = null);

(statearr_23086_23122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (21))){
var state_23074__$1 = state_23074;
var statearr_23087_23123 = state_23074__$1;
(statearr_23087_23123[(2)] = null);

(statearr_23087_23123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (13))){
var inst_23029 = (state_23074[(8)]);
var inst_23027 = (state_23074[(9)]);
var inst_23026 = (state_23074[(10)]);
var inst_23028 = (state_23074[(12)]);
var inst_23036 = (state_23074[(2)]);
var inst_23037 = (inst_23029 + (1));
var tmp23083 = inst_23027;
var tmp23084 = inst_23026;
var tmp23085 = inst_23028;
var inst_23026__$1 = tmp23084;
var inst_23027__$1 = tmp23083;
var inst_23028__$1 = tmp23085;
var inst_23029__$1 = inst_23037;
var state_23074__$1 = (function (){var statearr_23088 = state_23074;
(statearr_23088[(8)] = inst_23029__$1);

(statearr_23088[(9)] = inst_23027__$1);

(statearr_23088[(10)] = inst_23026__$1);

(statearr_23088[(14)] = inst_23036);

(statearr_23088[(12)] = inst_23028__$1);

return statearr_23088;
})();
var statearr_23089_23124 = state_23074__$1;
(statearr_23089_23124[(2)] = null);

(statearr_23089_23124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (22))){
var state_23074__$1 = state_23074;
var statearr_23090_23125 = state_23074__$1;
(statearr_23090_23125[(2)] = null);

(statearr_23090_23125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (6))){
var inst_23015 = (state_23074[(13)]);
var inst_23024 = f.call(null,inst_23015);
var inst_23025 = cljs.core.seq.call(null,inst_23024);
var inst_23026 = inst_23025;
var inst_23027 = null;
var inst_23028 = (0);
var inst_23029 = (0);
var state_23074__$1 = (function (){var statearr_23091 = state_23074;
(statearr_23091[(8)] = inst_23029);

(statearr_23091[(9)] = inst_23027);

(statearr_23091[(10)] = inst_23026);

(statearr_23091[(12)] = inst_23028);

return statearr_23091;
})();
var statearr_23092_23126 = state_23074__$1;
(statearr_23092_23126[(2)] = null);

(statearr_23092_23126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (17))){
var inst_23040 = (state_23074[(7)]);
var inst_23044 = cljs.core.chunk_first.call(null,inst_23040);
var inst_23045 = cljs.core.chunk_rest.call(null,inst_23040);
var inst_23046 = cljs.core.count.call(null,inst_23044);
var inst_23026 = inst_23045;
var inst_23027 = inst_23044;
var inst_23028 = inst_23046;
var inst_23029 = (0);
var state_23074__$1 = (function (){var statearr_23093 = state_23074;
(statearr_23093[(8)] = inst_23029);

(statearr_23093[(9)] = inst_23027);

(statearr_23093[(10)] = inst_23026);

(statearr_23093[(12)] = inst_23028);

return statearr_23093;
})();
var statearr_23094_23127 = state_23074__$1;
(statearr_23094_23127[(2)] = null);

(statearr_23094_23127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (3))){
var inst_23072 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23074__$1,inst_23072);
} else {
if((state_val_23075 === (12))){
var inst_23060 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
var statearr_23095_23128 = state_23074__$1;
(statearr_23095_23128[(2)] = inst_23060);

(statearr_23095_23128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (2))){
var state_23074__$1 = state_23074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23074__$1,(4),in$);
} else {
if((state_val_23075 === (23))){
var inst_23068 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
var statearr_23096_23129 = state_23074__$1;
(statearr_23096_23129[(2)] = inst_23068);

(statearr_23096_23129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (19))){
var inst_23055 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
var statearr_23097_23130 = state_23074__$1;
(statearr_23097_23130[(2)] = inst_23055);

(statearr_23097_23130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (11))){
var inst_23040 = (state_23074[(7)]);
var inst_23026 = (state_23074[(10)]);
var inst_23040__$1 = cljs.core.seq.call(null,inst_23026);
var state_23074__$1 = (function (){var statearr_23098 = state_23074;
(statearr_23098[(7)] = inst_23040__$1);

return statearr_23098;
})();
if(inst_23040__$1){
var statearr_23099_23131 = state_23074__$1;
(statearr_23099_23131[(1)] = (14));

} else {
var statearr_23100_23132 = state_23074__$1;
(statearr_23100_23132[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (9))){
var inst_23062 = (state_23074[(2)]);
var inst_23063 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23074__$1 = (function (){var statearr_23101 = state_23074;
(statearr_23101[(15)] = inst_23062);

return statearr_23101;
})();
if(cljs.core.truth_(inst_23063)){
var statearr_23102_23133 = state_23074__$1;
(statearr_23102_23133[(1)] = (21));

} else {
var statearr_23103_23134 = state_23074__$1;
(statearr_23103_23134[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (5))){
var inst_23018 = cljs.core.async.close_BANG_.call(null,out);
var state_23074__$1 = state_23074;
var statearr_23104_23135 = state_23074__$1;
(statearr_23104_23135[(2)] = inst_23018);

(statearr_23104_23135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (14))){
var inst_23040 = (state_23074[(7)]);
var inst_23042 = cljs.core.chunked_seq_QMARK_.call(null,inst_23040);
var state_23074__$1 = state_23074;
if(inst_23042){
var statearr_23105_23136 = state_23074__$1;
(statearr_23105_23136[(1)] = (17));

} else {
var statearr_23106_23137 = state_23074__$1;
(statearr_23106_23137[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (16))){
var inst_23058 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
var statearr_23107_23138 = state_23074__$1;
(statearr_23107_23138[(2)] = inst_23058);

(statearr_23107_23138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (10))){
var inst_23029 = (state_23074[(8)]);
var inst_23027 = (state_23074[(9)]);
var inst_23034 = cljs.core._nth.call(null,inst_23027,inst_23029);
var state_23074__$1 = state_23074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23074__$1,(13),out,inst_23034);
} else {
if((state_val_23075 === (18))){
var inst_23040 = (state_23074[(7)]);
var inst_23049 = cljs.core.first.call(null,inst_23040);
var state_23074__$1 = state_23074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23074__$1,(20),out,inst_23049);
} else {
if((state_val_23075 === (8))){
var inst_23029 = (state_23074[(8)]);
var inst_23028 = (state_23074[(12)]);
var inst_23031 = (inst_23029 < inst_23028);
var inst_23032 = inst_23031;
var state_23074__$1 = state_23074;
if(cljs.core.truth_(inst_23032)){
var statearr_23108_23139 = state_23074__$1;
(statearr_23108_23139[(1)] = (10));

} else {
var statearr_23109_23140 = state_23074__$1;
(statearr_23109_23140[(1)] = (11));

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
});})(c__14440__auto__))
;
return ((function (switch__14425__auto__,c__14440__auto__){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_23113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23113[(0)] = state_machine__14426__auto__);

(statearr_23113[(1)] = (1));

return statearr_23113;
});
var state_machine__14426__auto____1 = (function (state_23074){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_23074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e23114){if((e23114 instanceof Object)){
var ex__14429__auto__ = e23114;
var statearr_23115_23141 = state_23074;
(statearr_23115_23141[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23142 = state_23074;
state_23074 = G__23142;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_23074){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_23074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto__))
})();
var state__14442__auto__ = (function (){var statearr_23116 = f__14441__auto__.call(null);
(statearr_23116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto__);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto__))
);

return c__14440__auto__;
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
var c__14440__auto___23239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___23239,out){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___23239,out){
return (function (state_23214){
var state_val_23215 = (state_23214[(1)]);
if((state_val_23215 === (7))){
var inst_23209 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23216_23240 = state_23214__$1;
(statearr_23216_23240[(2)] = inst_23209);

(statearr_23216_23240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (1))){
var inst_23191 = null;
var state_23214__$1 = (function (){var statearr_23217 = state_23214;
(statearr_23217[(7)] = inst_23191);

return statearr_23217;
})();
var statearr_23218_23241 = state_23214__$1;
(statearr_23218_23241[(2)] = null);

(statearr_23218_23241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (4))){
var inst_23194 = (state_23214[(8)]);
var inst_23194__$1 = (state_23214[(2)]);
var inst_23195 = (inst_23194__$1 == null);
var inst_23196 = cljs.core.not.call(null,inst_23195);
var state_23214__$1 = (function (){var statearr_23219 = state_23214;
(statearr_23219[(8)] = inst_23194__$1);

return statearr_23219;
})();
if(inst_23196){
var statearr_23220_23242 = state_23214__$1;
(statearr_23220_23242[(1)] = (5));

} else {
var statearr_23221_23243 = state_23214__$1;
(statearr_23221_23243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (6))){
var state_23214__$1 = state_23214;
var statearr_23222_23244 = state_23214__$1;
(statearr_23222_23244[(2)] = null);

(statearr_23222_23244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (3))){
var inst_23211 = (state_23214[(2)]);
var inst_23212 = cljs.core.async.close_BANG_.call(null,out);
var state_23214__$1 = (function (){var statearr_23223 = state_23214;
(statearr_23223[(9)] = inst_23211);

return statearr_23223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23214__$1,inst_23212);
} else {
if((state_val_23215 === (2))){
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23214__$1,(4),ch);
} else {
if((state_val_23215 === (11))){
var inst_23194 = (state_23214[(8)]);
var inst_23203 = (state_23214[(2)]);
var inst_23191 = inst_23194;
var state_23214__$1 = (function (){var statearr_23224 = state_23214;
(statearr_23224[(7)] = inst_23191);

(statearr_23224[(10)] = inst_23203);

return statearr_23224;
})();
var statearr_23225_23245 = state_23214__$1;
(statearr_23225_23245[(2)] = null);

(statearr_23225_23245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (9))){
var inst_23194 = (state_23214[(8)]);
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23214__$1,(11),out,inst_23194);
} else {
if((state_val_23215 === (5))){
var inst_23194 = (state_23214[(8)]);
var inst_23191 = (state_23214[(7)]);
var inst_23198 = cljs.core._EQ_.call(null,inst_23194,inst_23191);
var state_23214__$1 = state_23214;
if(inst_23198){
var statearr_23227_23246 = state_23214__$1;
(statearr_23227_23246[(1)] = (8));

} else {
var statearr_23228_23247 = state_23214__$1;
(statearr_23228_23247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (10))){
var inst_23206 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23229_23248 = state_23214__$1;
(statearr_23229_23248[(2)] = inst_23206);

(statearr_23229_23248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (8))){
var inst_23191 = (state_23214[(7)]);
var tmp23226 = inst_23191;
var inst_23191__$1 = tmp23226;
var state_23214__$1 = (function (){var statearr_23230 = state_23214;
(statearr_23230[(7)] = inst_23191__$1);

return statearr_23230;
})();
var statearr_23231_23249 = state_23214__$1;
(statearr_23231_23249[(2)] = null);

(statearr_23231_23249[(1)] = (2));


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
});})(c__14440__auto___23239,out))
;
return ((function (switch__14425__auto__,c__14440__auto___23239,out){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_23235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23235[(0)] = state_machine__14426__auto__);

(statearr_23235[(1)] = (1));

return statearr_23235;
});
var state_machine__14426__auto____1 = (function (state_23214){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_23214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e23236){if((e23236 instanceof Object)){
var ex__14429__auto__ = e23236;
var statearr_23237_23250 = state_23214;
(statearr_23237_23250[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23251 = state_23214;
state_23214 = G__23251;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_23214){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_23214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___23239,out))
})();
var state__14442__auto__ = (function (){var statearr_23238 = f__14441__auto__.call(null);
(statearr_23238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___23239);

return statearr_23238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___23239,out))
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
var c__14440__auto___23386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___23386,out){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___23386,out){
return (function (state_23356){
var state_val_23357 = (state_23356[(1)]);
if((state_val_23357 === (7))){
var inst_23352 = (state_23356[(2)]);
var state_23356__$1 = state_23356;
var statearr_23358_23387 = state_23356__$1;
(statearr_23358_23387[(2)] = inst_23352);

(statearr_23358_23387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (1))){
var inst_23319 = (new Array(n));
var inst_23320 = inst_23319;
var inst_23321 = (0);
var state_23356__$1 = (function (){var statearr_23359 = state_23356;
(statearr_23359[(7)] = inst_23320);

(statearr_23359[(8)] = inst_23321);

return statearr_23359;
})();
var statearr_23360_23388 = state_23356__$1;
(statearr_23360_23388[(2)] = null);

(statearr_23360_23388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (4))){
var inst_23324 = (state_23356[(9)]);
var inst_23324__$1 = (state_23356[(2)]);
var inst_23325 = (inst_23324__$1 == null);
var inst_23326 = cljs.core.not.call(null,inst_23325);
var state_23356__$1 = (function (){var statearr_23361 = state_23356;
(statearr_23361[(9)] = inst_23324__$1);

return statearr_23361;
})();
if(inst_23326){
var statearr_23362_23389 = state_23356__$1;
(statearr_23362_23389[(1)] = (5));

} else {
var statearr_23363_23390 = state_23356__$1;
(statearr_23363_23390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (15))){
var inst_23346 = (state_23356[(2)]);
var state_23356__$1 = state_23356;
var statearr_23364_23391 = state_23356__$1;
(statearr_23364_23391[(2)] = inst_23346);

(statearr_23364_23391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (13))){
var state_23356__$1 = state_23356;
var statearr_23365_23392 = state_23356__$1;
(statearr_23365_23392[(2)] = null);

(statearr_23365_23392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (6))){
var inst_23321 = (state_23356[(8)]);
var inst_23342 = (inst_23321 > (0));
var state_23356__$1 = state_23356;
if(cljs.core.truth_(inst_23342)){
var statearr_23366_23393 = state_23356__$1;
(statearr_23366_23393[(1)] = (12));

} else {
var statearr_23367_23394 = state_23356__$1;
(statearr_23367_23394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (3))){
var inst_23354 = (state_23356[(2)]);
var state_23356__$1 = state_23356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23356__$1,inst_23354);
} else {
if((state_val_23357 === (12))){
var inst_23320 = (state_23356[(7)]);
var inst_23344 = cljs.core.vec.call(null,inst_23320);
var state_23356__$1 = state_23356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23356__$1,(15),out,inst_23344);
} else {
if((state_val_23357 === (2))){
var state_23356__$1 = state_23356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23356__$1,(4),ch);
} else {
if((state_val_23357 === (11))){
var inst_23336 = (state_23356[(2)]);
var inst_23337 = (new Array(n));
var inst_23320 = inst_23337;
var inst_23321 = (0);
var state_23356__$1 = (function (){var statearr_23368 = state_23356;
(statearr_23368[(10)] = inst_23336);

(statearr_23368[(7)] = inst_23320);

(statearr_23368[(8)] = inst_23321);

return statearr_23368;
})();
var statearr_23369_23395 = state_23356__$1;
(statearr_23369_23395[(2)] = null);

(statearr_23369_23395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (9))){
var inst_23320 = (state_23356[(7)]);
var inst_23334 = cljs.core.vec.call(null,inst_23320);
var state_23356__$1 = state_23356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23356__$1,(11),out,inst_23334);
} else {
if((state_val_23357 === (5))){
var inst_23320 = (state_23356[(7)]);
var inst_23321 = (state_23356[(8)]);
var inst_23324 = (state_23356[(9)]);
var inst_23329 = (state_23356[(11)]);
var inst_23328 = (inst_23320[inst_23321] = inst_23324);
var inst_23329__$1 = (inst_23321 + (1));
var inst_23330 = (inst_23329__$1 < n);
var state_23356__$1 = (function (){var statearr_23370 = state_23356;
(statearr_23370[(11)] = inst_23329__$1);

(statearr_23370[(12)] = inst_23328);

return statearr_23370;
})();
if(cljs.core.truth_(inst_23330)){
var statearr_23371_23396 = state_23356__$1;
(statearr_23371_23396[(1)] = (8));

} else {
var statearr_23372_23397 = state_23356__$1;
(statearr_23372_23397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (14))){
var inst_23349 = (state_23356[(2)]);
var inst_23350 = cljs.core.async.close_BANG_.call(null,out);
var state_23356__$1 = (function (){var statearr_23374 = state_23356;
(statearr_23374[(13)] = inst_23349);

return statearr_23374;
})();
var statearr_23375_23398 = state_23356__$1;
(statearr_23375_23398[(2)] = inst_23350);

(statearr_23375_23398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (10))){
var inst_23340 = (state_23356[(2)]);
var state_23356__$1 = state_23356;
var statearr_23376_23399 = state_23356__$1;
(statearr_23376_23399[(2)] = inst_23340);

(statearr_23376_23399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23357 === (8))){
var inst_23320 = (state_23356[(7)]);
var inst_23329 = (state_23356[(11)]);
var tmp23373 = inst_23320;
var inst_23320__$1 = tmp23373;
var inst_23321 = inst_23329;
var state_23356__$1 = (function (){var statearr_23377 = state_23356;
(statearr_23377[(7)] = inst_23320__$1);

(statearr_23377[(8)] = inst_23321);

return statearr_23377;
})();
var statearr_23378_23400 = state_23356__$1;
(statearr_23378_23400[(2)] = null);

(statearr_23378_23400[(1)] = (2));


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
});})(c__14440__auto___23386,out))
;
return ((function (switch__14425__auto__,c__14440__auto___23386,out){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_23382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23382[(0)] = state_machine__14426__auto__);

(statearr_23382[(1)] = (1));

return statearr_23382;
});
var state_machine__14426__auto____1 = (function (state_23356){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_23356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e23383){if((e23383 instanceof Object)){
var ex__14429__auto__ = e23383;
var statearr_23384_23401 = state_23356;
(statearr_23384_23401[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23402 = state_23356;
state_23356 = G__23402;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_23356){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_23356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___23386,out))
})();
var state__14442__auto__ = (function (){var statearr_23385 = f__14441__auto__.call(null);
(statearr_23385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___23386);

return statearr_23385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___23386,out))
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
var c__14440__auto___23545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14440__auto___23545,out){
return (function (){
var f__14441__auto__ = (function (){var switch__14425__auto__ = ((function (c__14440__auto___23545,out){
return (function (state_23515){
var state_val_23516 = (state_23515[(1)]);
if((state_val_23516 === (7))){
var inst_23511 = (state_23515[(2)]);
var state_23515__$1 = state_23515;
var statearr_23517_23546 = state_23515__$1;
(statearr_23517_23546[(2)] = inst_23511);

(statearr_23517_23546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (1))){
var inst_23474 = [];
var inst_23475 = inst_23474;
var inst_23476 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23515__$1 = (function (){var statearr_23518 = state_23515;
(statearr_23518[(7)] = inst_23475);

(statearr_23518[(8)] = inst_23476);

return statearr_23518;
})();
var statearr_23519_23547 = state_23515__$1;
(statearr_23519_23547[(2)] = null);

(statearr_23519_23547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (4))){
var inst_23479 = (state_23515[(9)]);
var inst_23479__$1 = (state_23515[(2)]);
var inst_23480 = (inst_23479__$1 == null);
var inst_23481 = cljs.core.not.call(null,inst_23480);
var state_23515__$1 = (function (){var statearr_23520 = state_23515;
(statearr_23520[(9)] = inst_23479__$1);

return statearr_23520;
})();
if(inst_23481){
var statearr_23521_23548 = state_23515__$1;
(statearr_23521_23548[(1)] = (5));

} else {
var statearr_23522_23549 = state_23515__$1;
(statearr_23522_23549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (15))){
var inst_23505 = (state_23515[(2)]);
var state_23515__$1 = state_23515;
var statearr_23523_23550 = state_23515__$1;
(statearr_23523_23550[(2)] = inst_23505);

(statearr_23523_23550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (13))){
var state_23515__$1 = state_23515;
var statearr_23524_23551 = state_23515__$1;
(statearr_23524_23551[(2)] = null);

(statearr_23524_23551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (6))){
var inst_23475 = (state_23515[(7)]);
var inst_23500 = inst_23475.length;
var inst_23501 = (inst_23500 > (0));
var state_23515__$1 = state_23515;
if(cljs.core.truth_(inst_23501)){
var statearr_23525_23552 = state_23515__$1;
(statearr_23525_23552[(1)] = (12));

} else {
var statearr_23526_23553 = state_23515__$1;
(statearr_23526_23553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (3))){
var inst_23513 = (state_23515[(2)]);
var state_23515__$1 = state_23515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23515__$1,inst_23513);
} else {
if((state_val_23516 === (12))){
var inst_23475 = (state_23515[(7)]);
var inst_23503 = cljs.core.vec.call(null,inst_23475);
var state_23515__$1 = state_23515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23515__$1,(15),out,inst_23503);
} else {
if((state_val_23516 === (2))){
var state_23515__$1 = state_23515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23515__$1,(4),ch);
} else {
if((state_val_23516 === (11))){
var inst_23483 = (state_23515[(10)]);
var inst_23479 = (state_23515[(9)]);
var inst_23493 = (state_23515[(2)]);
var inst_23494 = [];
var inst_23495 = inst_23494.push(inst_23479);
var inst_23475 = inst_23494;
var inst_23476 = inst_23483;
var state_23515__$1 = (function (){var statearr_23527 = state_23515;
(statearr_23527[(11)] = inst_23493);

(statearr_23527[(7)] = inst_23475);

(statearr_23527[(8)] = inst_23476);

(statearr_23527[(12)] = inst_23495);

return statearr_23527;
})();
var statearr_23528_23554 = state_23515__$1;
(statearr_23528_23554[(2)] = null);

(statearr_23528_23554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (9))){
var inst_23475 = (state_23515[(7)]);
var inst_23491 = cljs.core.vec.call(null,inst_23475);
var state_23515__$1 = state_23515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23515__$1,(11),out,inst_23491);
} else {
if((state_val_23516 === (5))){
var inst_23483 = (state_23515[(10)]);
var inst_23479 = (state_23515[(9)]);
var inst_23476 = (state_23515[(8)]);
var inst_23483__$1 = f.call(null,inst_23479);
var inst_23484 = cljs.core._EQ_.call(null,inst_23483__$1,inst_23476);
var inst_23485 = cljs.core.keyword_identical_QMARK_.call(null,inst_23476,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23486 = (inst_23484) || (inst_23485);
var state_23515__$1 = (function (){var statearr_23529 = state_23515;
(statearr_23529[(10)] = inst_23483__$1);

return statearr_23529;
})();
if(cljs.core.truth_(inst_23486)){
var statearr_23530_23555 = state_23515__$1;
(statearr_23530_23555[(1)] = (8));

} else {
var statearr_23531_23556 = state_23515__$1;
(statearr_23531_23556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (14))){
var inst_23508 = (state_23515[(2)]);
var inst_23509 = cljs.core.async.close_BANG_.call(null,out);
var state_23515__$1 = (function (){var statearr_23533 = state_23515;
(statearr_23533[(13)] = inst_23508);

return statearr_23533;
})();
var statearr_23534_23557 = state_23515__$1;
(statearr_23534_23557[(2)] = inst_23509);

(statearr_23534_23557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (10))){
var inst_23498 = (state_23515[(2)]);
var state_23515__$1 = state_23515;
var statearr_23535_23558 = state_23515__$1;
(statearr_23535_23558[(2)] = inst_23498);

(statearr_23535_23558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23516 === (8))){
var inst_23483 = (state_23515[(10)]);
var inst_23475 = (state_23515[(7)]);
var inst_23479 = (state_23515[(9)]);
var inst_23488 = inst_23475.push(inst_23479);
var tmp23532 = inst_23475;
var inst_23475__$1 = tmp23532;
var inst_23476 = inst_23483;
var state_23515__$1 = (function (){var statearr_23536 = state_23515;
(statearr_23536[(14)] = inst_23488);

(statearr_23536[(7)] = inst_23475__$1);

(statearr_23536[(8)] = inst_23476);

return statearr_23536;
})();
var statearr_23537_23559 = state_23515__$1;
(statearr_23537_23559[(2)] = null);

(statearr_23537_23559[(1)] = (2));


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
});})(c__14440__auto___23545,out))
;
return ((function (switch__14425__auto__,c__14440__auto___23545,out){
return (function() {
var state_machine__14426__auto__ = null;
var state_machine__14426__auto____0 = (function (){
var statearr_23541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23541[(0)] = state_machine__14426__auto__);

(statearr_23541[(1)] = (1));

return statearr_23541;
});
var state_machine__14426__auto____1 = (function (state_23515){
while(true){
var ret_value__14427__auto__ = (function (){try{while(true){
var result__14428__auto__ = switch__14425__auto__.call(null,state_23515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14428__auto__;
}
break;
}
}catch (e23542){if((e23542 instanceof Object)){
var ex__14429__auto__ = e23542;
var statearr_23543_23560 = state_23515;
(statearr_23543_23560[(5)] = ex__14429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23561 = state_23515;
state_23515 = G__23561;
continue;
} else {
return ret_value__14427__auto__;
}
break;
}
});
state_machine__14426__auto__ = function(state_23515){
switch(arguments.length){
case 0:
return state_machine__14426__auto____0.call(this);
case 1:
return state_machine__14426__auto____1.call(this,state_23515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14426__auto____0;
state_machine__14426__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14426__auto____1;
return state_machine__14426__auto__;
})()
;})(switch__14425__auto__,c__14440__auto___23545,out))
})();
var state__14442__auto__ = (function (){var statearr_23544 = f__14441__auto__.call(null);
(statearr_23544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14440__auto___23545);

return statearr_23544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14442__auto__);
});})(c__14440__auto___23545,out))
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
