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
if(typeof cljs.core.async.t20497 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20497 = (function (f,fn_handler,meta20498){
this.f = f;
this.fn_handler = fn_handler;
this.meta20498 = meta20498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20497.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20499){
var self__ = this;
var _20499__$1 = this;
return self__.meta20498;
});

cljs.core.async.t20497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20499,meta20498__$1){
var self__ = this;
var _20499__$1 = this;
return (new cljs.core.async.t20497(self__.f,self__.fn_handler,meta20498__$1));
});

cljs.core.async.t20497.cljs$lang$type = true;

cljs.core.async.t20497.cljs$lang$ctorStr = "cljs.core.async/t20497";

cljs.core.async.t20497.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20497");
});

cljs.core.async.__GT_t20497 = (function __GT_t20497(f__$1,fn_handler__$1,meta20498){
return (new cljs.core.async.t20497(f__$1,fn_handler__$1,meta20498));
});

}

return (new cljs.core.async.t20497(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__20501 = buff;
if(G__20501){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__20501.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20501.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20501);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20501);
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
var val_20502 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20502);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20502,ret){
return (function (){
return fn1.call(null,val_20502);
});})(val_20502,ret))
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
var n__4643__auto___20503 = n;
var x_20504 = (0);
while(true){
if((x_20504 < n__4643__auto___20503)){
(a[x_20504] = (0));

var G__20505 = (x_20504 + (1));
x_20504 = G__20505;
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

var G__20506 = (i + (1));
i = G__20506;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20510 = (function (flag,alt_flag,meta20511){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20511 = meta20511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20510.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20512){
var self__ = this;
var _20512__$1 = this;
return self__.meta20511;
});})(flag))
;

cljs.core.async.t20510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20512,meta20511__$1){
var self__ = this;
var _20512__$1 = this;
return (new cljs.core.async.t20510(self__.flag,self__.alt_flag,meta20511__$1));
});})(flag))
;

cljs.core.async.t20510.cljs$lang$type = true;

cljs.core.async.t20510.cljs$lang$ctorStr = "cljs.core.async/t20510";

cljs.core.async.t20510.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20510");
});})(flag))
;

cljs.core.async.__GT_t20510 = ((function (flag){
return (function __GT_t20510(flag__$1,alt_flag__$1,meta20511){
return (new cljs.core.async.t20510(flag__$1,alt_flag__$1,meta20511));
});})(flag))
;

}

return (new cljs.core.async.t20510(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20516 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20516 = (function (cb,flag,alt_handler,meta20517){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20517 = meta20517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20516.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20518){
var self__ = this;
var _20518__$1 = this;
return self__.meta20517;
});

cljs.core.async.t20516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20518,meta20517__$1){
var self__ = this;
var _20518__$1 = this;
return (new cljs.core.async.t20516(self__.cb,self__.flag,self__.alt_handler,meta20517__$1));
});

cljs.core.async.t20516.cljs$lang$type = true;

cljs.core.async.t20516.cljs$lang$ctorStr = "cljs.core.async/t20516";

cljs.core.async.t20516.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20516");
});

cljs.core.async.__GT_t20516 = (function __GT_t20516(cb__$1,flag__$1,alt_handler__$1,meta20517){
return (new cljs.core.async.t20516(cb__$1,flag__$1,alt_handler__$1,meta20517));
});

}

return (new cljs.core.async.t20516(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__20519_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20519_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20520_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20520_SHARP_,port], null));
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
var G__20521 = (i + (1));
i = G__20521;
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
var alts_BANG___delegate = function (ports,p__20522){
var map__20524 = p__20522;
var map__20524__$1 = ((cljs.core.seq_QMARK_.call(null,map__20524))?cljs.core.apply.call(null,cljs.core.hash_map,map__20524):map__20524);
var opts = map__20524__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20522 = null;
if (arguments.length > 1) {
  p__20522 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20522);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20525){
var ports = cljs.core.first(arglist__20525);
var p__20522 = cljs.core.rest(arglist__20525);
return alts_BANG___delegate(ports,p__20522);
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
var c__6701__auto___20620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___20620){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___20620){
return (function (state_20596){
var state_val_20597 = (state_20596[(1)]);
if((state_val_20597 === (7))){
var inst_20592 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
var statearr_20598_20621 = state_20596__$1;
(statearr_20598_20621[(2)] = inst_20592);

(statearr_20598_20621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (1))){
var state_20596__$1 = state_20596;
var statearr_20599_20622 = state_20596__$1;
(statearr_20599_20622[(2)] = null);

(statearr_20599_20622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (4))){
var inst_20575 = (state_20596[(7)]);
var inst_20575__$1 = (state_20596[(2)]);
var inst_20576 = (inst_20575__$1 == null);
var state_20596__$1 = (function (){var statearr_20600 = state_20596;
(statearr_20600[(7)] = inst_20575__$1);

return statearr_20600;
})();
if(cljs.core.truth_(inst_20576)){
var statearr_20601_20623 = state_20596__$1;
(statearr_20601_20623[(1)] = (5));

} else {
var statearr_20602_20624 = state_20596__$1;
(statearr_20602_20624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (13))){
var state_20596__$1 = state_20596;
var statearr_20603_20625 = state_20596__$1;
(statearr_20603_20625[(2)] = null);

(statearr_20603_20625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (6))){
var inst_20575 = (state_20596[(7)]);
var state_20596__$1 = state_20596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20596__$1,(11),to,inst_20575);
} else {
if((state_val_20597 === (3))){
var inst_20594 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20596__$1,inst_20594);
} else {
if((state_val_20597 === (12))){
var state_20596__$1 = state_20596;
var statearr_20604_20626 = state_20596__$1;
(statearr_20604_20626[(2)] = null);

(statearr_20604_20626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (2))){
var state_20596__$1 = state_20596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20596__$1,(4),from);
} else {
if((state_val_20597 === (11))){
var inst_20585 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
if(cljs.core.truth_(inst_20585)){
var statearr_20605_20627 = state_20596__$1;
(statearr_20605_20627[(1)] = (12));

} else {
var statearr_20606_20628 = state_20596__$1;
(statearr_20606_20628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (9))){
var state_20596__$1 = state_20596;
var statearr_20607_20629 = state_20596__$1;
(statearr_20607_20629[(2)] = null);

(statearr_20607_20629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (5))){
var state_20596__$1 = state_20596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20608_20630 = state_20596__$1;
(statearr_20608_20630[(1)] = (8));

} else {
var statearr_20609_20631 = state_20596__$1;
(statearr_20609_20631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (14))){
var inst_20590 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
var statearr_20610_20632 = state_20596__$1;
(statearr_20610_20632[(2)] = inst_20590);

(statearr_20610_20632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (10))){
var inst_20582 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
var statearr_20611_20633 = state_20596__$1;
(statearr_20611_20633[(2)] = inst_20582);

(statearr_20611_20633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (8))){
var inst_20579 = cljs.core.async.close_BANG_.call(null,to);
var state_20596__$1 = state_20596;
var statearr_20612_20634 = state_20596__$1;
(statearr_20612_20634[(2)] = inst_20579);

(statearr_20612_20634[(1)] = (10));


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
});})(c__6701__auto___20620))
;
return ((function (switch__6645__auto__,c__6701__auto___20620){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_20616 = [null,null,null,null,null,null,null,null];
(statearr_20616[(0)] = state_machine__6646__auto__);

(statearr_20616[(1)] = (1));

return statearr_20616;
});
var state_machine__6646__auto____1 = (function (state_20596){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_20596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e20617){if((e20617 instanceof Object)){
var ex__6649__auto__ = e20617;
var statearr_20618_20635 = state_20596;
(statearr_20618_20635[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20636 = state_20596;
state_20596 = G__20636;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_20596){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_20596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___20620))
})();
var state__6703__auto__ = (function (){var statearr_20619 = f__6702__auto__.call(null);
(statearr_20619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___20620);

return statearr_20619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___20620))
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
return (function (p__20820){
var vec__20821 = p__20820;
var v = cljs.core.nth.call(null,vec__20821,(0),null);
var p = cljs.core.nth.call(null,vec__20821,(1),null);
var job = vec__20821;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6701__auto___21003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___21003,res,vec__20821,v,p,job,jobs,results){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___21003,res,vec__20821,v,p,job,jobs,results){
return (function (state_20826){
var state_val_20827 = (state_20826[(1)]);
if((state_val_20827 === (2))){
var inst_20823 = (state_20826[(2)]);
var inst_20824 = cljs.core.async.close_BANG_.call(null,res);
var state_20826__$1 = (function (){var statearr_20828 = state_20826;
(statearr_20828[(7)] = inst_20823);

return statearr_20828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20826__$1,inst_20824);
} else {
if((state_val_20827 === (1))){
var state_20826__$1 = state_20826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20826__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6701__auto___21003,res,vec__20821,v,p,job,jobs,results))
;
return ((function (switch__6645__auto__,c__6701__auto___21003,res,vec__20821,v,p,job,jobs,results){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_20832 = [null,null,null,null,null,null,null,null];
(statearr_20832[(0)] = state_machine__6646__auto__);

(statearr_20832[(1)] = (1));

return statearr_20832;
});
var state_machine__6646__auto____1 = (function (state_20826){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_20826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e20833){if((e20833 instanceof Object)){
var ex__6649__auto__ = e20833;
var statearr_20834_21004 = state_20826;
(statearr_20834_21004[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21005 = state_20826;
state_20826 = G__21005;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_20826){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_20826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___21003,res,vec__20821,v,p,job,jobs,results))
})();
var state__6703__auto__ = (function (){var statearr_20835 = f__6702__auto__.call(null);
(statearr_20835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___21003);

return statearr_20835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___21003,res,vec__20821,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20836){
var vec__20837 = p__20836;
var v = cljs.core.nth.call(null,vec__20837,(0),null);
var p = cljs.core.nth.call(null,vec__20837,(1),null);
var job = vec__20837;
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
var n__4643__auto___21006 = n;
var __21007 = (0);
while(true){
if((__21007 < n__4643__auto___21006)){
var G__20838_21008 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20838_21008) {
case "async":
var c__6701__auto___21010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21007,c__6701__auto___21010,G__20838_21008,n__4643__auto___21006,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (__21007,c__6701__auto___21010,G__20838_21008,n__4643__auto___21006,jobs,results,process,async){
return (function (state_20851){
var state_val_20852 = (state_20851[(1)]);
if((state_val_20852 === (7))){
var inst_20847 = (state_20851[(2)]);
var state_20851__$1 = state_20851;
var statearr_20853_21011 = state_20851__$1;
(statearr_20853_21011[(2)] = inst_20847);

(statearr_20853_21011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (6))){
var state_20851__$1 = state_20851;
var statearr_20854_21012 = state_20851__$1;
(statearr_20854_21012[(2)] = null);

(statearr_20854_21012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (5))){
var state_20851__$1 = state_20851;
var statearr_20855_21013 = state_20851__$1;
(statearr_20855_21013[(2)] = null);

(statearr_20855_21013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (4))){
var inst_20841 = (state_20851[(2)]);
var inst_20842 = async.call(null,inst_20841);
var state_20851__$1 = state_20851;
if(cljs.core.truth_(inst_20842)){
var statearr_20856_21014 = state_20851__$1;
(statearr_20856_21014[(1)] = (5));

} else {
var statearr_20857_21015 = state_20851__$1;
(statearr_20857_21015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (3))){
var inst_20849 = (state_20851[(2)]);
var state_20851__$1 = state_20851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20851__$1,inst_20849);
} else {
if((state_val_20852 === (2))){
var state_20851__$1 = state_20851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20851__$1,(4),jobs);
} else {
if((state_val_20852 === (1))){
var state_20851__$1 = state_20851;
var statearr_20858_21016 = state_20851__$1;
(statearr_20858_21016[(2)] = null);

(statearr_20858_21016[(1)] = (2));


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
});})(__21007,c__6701__auto___21010,G__20838_21008,n__4643__auto___21006,jobs,results,process,async))
;
return ((function (__21007,switch__6645__auto__,c__6701__auto___21010,G__20838_21008,n__4643__auto___21006,jobs,results,process,async){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_20862 = [null,null,null,null,null,null,null];
(statearr_20862[(0)] = state_machine__6646__auto__);

(statearr_20862[(1)] = (1));

return statearr_20862;
});
var state_machine__6646__auto____1 = (function (state_20851){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_20851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e20863){if((e20863 instanceof Object)){
var ex__6649__auto__ = e20863;
var statearr_20864_21017 = state_20851;
(statearr_20864_21017[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21018 = state_20851;
state_20851 = G__21018;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_20851){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_20851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(__21007,switch__6645__auto__,c__6701__auto___21010,G__20838_21008,n__4643__auto___21006,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_20865 = f__6702__auto__.call(null);
(statearr_20865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___21010);

return statearr_20865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(__21007,c__6701__auto___21010,G__20838_21008,n__4643__auto___21006,jobs,results,process,async))
);


break;
case "compute":
var c__6701__auto___21019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21007,c__6701__auto___21019,G__20838_21008,n__4643__auto___21006,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (__21007,c__6701__auto___21019,G__20838_21008,n__4643__auto___21006,jobs,results,process,async){
return (function (state_20878){
var state_val_20879 = (state_20878[(1)]);
if((state_val_20879 === (7))){
var inst_20874 = (state_20878[(2)]);
var state_20878__$1 = state_20878;
var statearr_20880_21020 = state_20878__$1;
(statearr_20880_21020[(2)] = inst_20874);

(statearr_20880_21020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20879 === (6))){
var state_20878__$1 = state_20878;
var statearr_20881_21021 = state_20878__$1;
(statearr_20881_21021[(2)] = null);

(statearr_20881_21021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20879 === (5))){
var state_20878__$1 = state_20878;
var statearr_20882_21022 = state_20878__$1;
(statearr_20882_21022[(2)] = null);

(statearr_20882_21022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20879 === (4))){
var inst_20868 = (state_20878[(2)]);
var inst_20869 = process.call(null,inst_20868);
var state_20878__$1 = state_20878;
if(cljs.core.truth_(inst_20869)){
var statearr_20883_21023 = state_20878__$1;
(statearr_20883_21023[(1)] = (5));

} else {
var statearr_20884_21024 = state_20878__$1;
(statearr_20884_21024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20879 === (3))){
var inst_20876 = (state_20878[(2)]);
var state_20878__$1 = state_20878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20878__$1,inst_20876);
} else {
if((state_val_20879 === (2))){
var state_20878__$1 = state_20878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20878__$1,(4),jobs);
} else {
if((state_val_20879 === (1))){
var state_20878__$1 = state_20878;
var statearr_20885_21025 = state_20878__$1;
(statearr_20885_21025[(2)] = null);

(statearr_20885_21025[(1)] = (2));


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
});})(__21007,c__6701__auto___21019,G__20838_21008,n__4643__auto___21006,jobs,results,process,async))
;
return ((function (__21007,switch__6645__auto__,c__6701__auto___21019,G__20838_21008,n__4643__auto___21006,jobs,results,process,async){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_20889 = [null,null,null,null,null,null,null];
(statearr_20889[(0)] = state_machine__6646__auto__);

(statearr_20889[(1)] = (1));

return statearr_20889;
});
var state_machine__6646__auto____1 = (function (state_20878){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_20878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e20890){if((e20890 instanceof Object)){
var ex__6649__auto__ = e20890;
var statearr_20891_21026 = state_20878;
(statearr_20891_21026[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21027 = state_20878;
state_20878 = G__21027;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_20878){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_20878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(__21007,switch__6645__auto__,c__6701__auto___21019,G__20838_21008,n__4643__auto___21006,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_20892 = f__6702__auto__.call(null);
(statearr_20892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___21019);

return statearr_20892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(__21007,c__6701__auto___21019,G__20838_21008,n__4643__auto___21006,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21028 = (__21007 + (1));
__21007 = G__21028;
continue;
} else {
}
break;
}

var c__6701__auto___21029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___21029,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___21029,jobs,results,process,async){
return (function (state_20914){
var state_val_20915 = (state_20914[(1)]);
if((state_val_20915 === (9))){
var inst_20907 = (state_20914[(2)]);
var state_20914__$1 = (function (){var statearr_20916 = state_20914;
(statearr_20916[(7)] = inst_20907);

return statearr_20916;
})();
var statearr_20917_21030 = state_20914__$1;
(statearr_20917_21030[(2)] = null);

(statearr_20917_21030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (8))){
var inst_20900 = (state_20914[(8)]);
var inst_20905 = (state_20914[(2)]);
var state_20914__$1 = (function (){var statearr_20918 = state_20914;
(statearr_20918[(9)] = inst_20905);

return statearr_20918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20914__$1,(9),results,inst_20900);
} else {
if((state_val_20915 === (7))){
var inst_20910 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
var statearr_20919_21031 = state_20914__$1;
(statearr_20919_21031[(2)] = inst_20910);

(statearr_20919_21031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (6))){
var inst_20900 = (state_20914[(8)]);
var inst_20895 = (state_20914[(10)]);
var inst_20900__$1 = cljs.core.async.chan.call(null,(1));
var inst_20901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20902 = [inst_20895,inst_20900__$1];
var inst_20903 = (new cljs.core.PersistentVector(null,2,(5),inst_20901,inst_20902,null));
var state_20914__$1 = (function (){var statearr_20920 = state_20914;
(statearr_20920[(8)] = inst_20900__$1);

return statearr_20920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20914__$1,(8),jobs,inst_20903);
} else {
if((state_val_20915 === (5))){
var inst_20898 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20914__$1 = state_20914;
var statearr_20921_21032 = state_20914__$1;
(statearr_20921_21032[(2)] = inst_20898);

(statearr_20921_21032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (4))){
var inst_20895 = (state_20914[(10)]);
var inst_20895__$1 = (state_20914[(2)]);
var inst_20896 = (inst_20895__$1 == null);
var state_20914__$1 = (function (){var statearr_20922 = state_20914;
(statearr_20922[(10)] = inst_20895__$1);

return statearr_20922;
})();
if(cljs.core.truth_(inst_20896)){
var statearr_20923_21033 = state_20914__$1;
(statearr_20923_21033[(1)] = (5));

} else {
var statearr_20924_21034 = state_20914__$1;
(statearr_20924_21034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (3))){
var inst_20912 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20914__$1,inst_20912);
} else {
if((state_val_20915 === (2))){
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20914__$1,(4),from);
} else {
if((state_val_20915 === (1))){
var state_20914__$1 = state_20914;
var statearr_20925_21035 = state_20914__$1;
(statearr_20925_21035[(2)] = null);

(statearr_20925_21035[(1)] = (2));


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
});})(c__6701__auto___21029,jobs,results,process,async))
;
return ((function (switch__6645__auto__,c__6701__auto___21029,jobs,results,process,async){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_20929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20929[(0)] = state_machine__6646__auto__);

(statearr_20929[(1)] = (1));

return statearr_20929;
});
var state_machine__6646__auto____1 = (function (state_20914){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_20914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e20930){if((e20930 instanceof Object)){
var ex__6649__auto__ = e20930;
var statearr_20931_21036 = state_20914;
(statearr_20931_21036[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21037 = state_20914;
state_20914 = G__21037;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_20914){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_20914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___21029,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_20932 = f__6702__auto__.call(null);
(statearr_20932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___21029);

return statearr_20932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___21029,jobs,results,process,async))
);


var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto__,jobs,results,process,async){
return (function (state_20970){
var state_val_20971 = (state_20970[(1)]);
if((state_val_20971 === (7))){
var inst_20966 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20972_21038 = state_20970__$1;
(statearr_20972_21038[(2)] = inst_20966);

(statearr_20972_21038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (20))){
var state_20970__$1 = state_20970;
var statearr_20973_21039 = state_20970__$1;
(statearr_20973_21039[(2)] = null);

(statearr_20973_21039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (1))){
var state_20970__$1 = state_20970;
var statearr_20974_21040 = state_20970__$1;
(statearr_20974_21040[(2)] = null);

(statearr_20974_21040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (4))){
var inst_20935 = (state_20970[(7)]);
var inst_20935__$1 = (state_20970[(2)]);
var inst_20936 = (inst_20935__$1 == null);
var state_20970__$1 = (function (){var statearr_20975 = state_20970;
(statearr_20975[(7)] = inst_20935__$1);

return statearr_20975;
})();
if(cljs.core.truth_(inst_20936)){
var statearr_20976_21041 = state_20970__$1;
(statearr_20976_21041[(1)] = (5));

} else {
var statearr_20977_21042 = state_20970__$1;
(statearr_20977_21042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (15))){
var inst_20948 = (state_20970[(8)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20970__$1,(18),to,inst_20948);
} else {
if((state_val_20971 === (21))){
var inst_20961 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20978_21043 = state_20970__$1;
(statearr_20978_21043[(2)] = inst_20961);

(statearr_20978_21043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (13))){
var inst_20963 = (state_20970[(2)]);
var state_20970__$1 = (function (){var statearr_20979 = state_20970;
(statearr_20979[(9)] = inst_20963);

return statearr_20979;
})();
var statearr_20980_21044 = state_20970__$1;
(statearr_20980_21044[(2)] = null);

(statearr_20980_21044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (6))){
var inst_20935 = (state_20970[(7)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20970__$1,(11),inst_20935);
} else {
if((state_val_20971 === (17))){
var inst_20956 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
if(cljs.core.truth_(inst_20956)){
var statearr_20981_21045 = state_20970__$1;
(statearr_20981_21045[(1)] = (19));

} else {
var statearr_20982_21046 = state_20970__$1;
(statearr_20982_21046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (3))){
var inst_20968 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20970__$1,inst_20968);
} else {
if((state_val_20971 === (12))){
var inst_20945 = (state_20970[(10)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20970__$1,(14),inst_20945);
} else {
if((state_val_20971 === (2))){
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20970__$1,(4),results);
} else {
if((state_val_20971 === (19))){
var state_20970__$1 = state_20970;
var statearr_20983_21047 = state_20970__$1;
(statearr_20983_21047[(2)] = null);

(statearr_20983_21047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (11))){
var inst_20945 = (state_20970[(2)]);
var state_20970__$1 = (function (){var statearr_20984 = state_20970;
(statearr_20984[(10)] = inst_20945);

return statearr_20984;
})();
var statearr_20985_21048 = state_20970__$1;
(statearr_20985_21048[(2)] = null);

(statearr_20985_21048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (9))){
var state_20970__$1 = state_20970;
var statearr_20986_21049 = state_20970__$1;
(statearr_20986_21049[(2)] = null);

(statearr_20986_21049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (5))){
var state_20970__$1 = state_20970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20987_21050 = state_20970__$1;
(statearr_20987_21050[(1)] = (8));

} else {
var statearr_20988_21051 = state_20970__$1;
(statearr_20988_21051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (14))){
var inst_20948 = (state_20970[(8)]);
var inst_20950 = (state_20970[(11)]);
var inst_20948__$1 = (state_20970[(2)]);
var inst_20949 = (inst_20948__$1 == null);
var inst_20950__$1 = cljs.core.not.call(null,inst_20949);
var state_20970__$1 = (function (){var statearr_20989 = state_20970;
(statearr_20989[(8)] = inst_20948__$1);

(statearr_20989[(11)] = inst_20950__$1);

return statearr_20989;
})();
if(inst_20950__$1){
var statearr_20990_21052 = state_20970__$1;
(statearr_20990_21052[(1)] = (15));

} else {
var statearr_20991_21053 = state_20970__$1;
(statearr_20991_21053[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (16))){
var inst_20950 = (state_20970[(11)]);
var state_20970__$1 = state_20970;
var statearr_20992_21054 = state_20970__$1;
(statearr_20992_21054[(2)] = inst_20950);

(statearr_20992_21054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (10))){
var inst_20942 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20993_21055 = state_20970__$1;
(statearr_20993_21055[(2)] = inst_20942);

(statearr_20993_21055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (18))){
var inst_20953 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20994_21056 = state_20970__$1;
(statearr_20994_21056[(2)] = inst_20953);

(statearr_20994_21056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (8))){
var inst_20939 = cljs.core.async.close_BANG_.call(null,to);
var state_20970__$1 = state_20970;
var statearr_20995_21057 = state_20970__$1;
(statearr_20995_21057[(2)] = inst_20939);

(statearr_20995_21057[(1)] = (10));


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
});})(c__6701__auto__,jobs,results,process,async))
;
return ((function (switch__6645__auto__,c__6701__auto__,jobs,results,process,async){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_20999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20999[(0)] = state_machine__6646__auto__);

(statearr_20999[(1)] = (1));

return statearr_20999;
});
var state_machine__6646__auto____1 = (function (state_20970){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_20970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e21000){if((e21000 instanceof Object)){
var ex__6649__auto__ = e21000;
var statearr_21001_21058 = state_20970;
(statearr_21001_21058[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21059 = state_20970;
state_20970 = G__21059;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_20970){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_20970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto__,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_21002 = f__6702__auto__.call(null);
(statearr_21002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_21002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,jobs,results,process,async))
);

return c__6701__auto__;
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
var c__6701__auto___21160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___21160,tc,fc){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___21160,tc,fc){
return (function (state_21135){
var state_val_21136 = (state_21135[(1)]);
if((state_val_21136 === (7))){
var inst_21131 = (state_21135[(2)]);
var state_21135__$1 = state_21135;
var statearr_21137_21161 = state_21135__$1;
(statearr_21137_21161[(2)] = inst_21131);

(statearr_21137_21161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (1))){
var state_21135__$1 = state_21135;
var statearr_21138_21162 = state_21135__$1;
(statearr_21138_21162[(2)] = null);

(statearr_21138_21162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (4))){
var inst_21112 = (state_21135[(7)]);
var inst_21112__$1 = (state_21135[(2)]);
var inst_21113 = (inst_21112__$1 == null);
var state_21135__$1 = (function (){var statearr_21139 = state_21135;
(statearr_21139[(7)] = inst_21112__$1);

return statearr_21139;
})();
if(cljs.core.truth_(inst_21113)){
var statearr_21140_21163 = state_21135__$1;
(statearr_21140_21163[(1)] = (5));

} else {
var statearr_21141_21164 = state_21135__$1;
(statearr_21141_21164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (13))){
var state_21135__$1 = state_21135;
var statearr_21142_21165 = state_21135__$1;
(statearr_21142_21165[(2)] = null);

(statearr_21142_21165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (6))){
var inst_21112 = (state_21135[(7)]);
var inst_21118 = p.call(null,inst_21112);
var state_21135__$1 = state_21135;
if(cljs.core.truth_(inst_21118)){
var statearr_21143_21166 = state_21135__$1;
(statearr_21143_21166[(1)] = (9));

} else {
var statearr_21144_21167 = state_21135__$1;
(statearr_21144_21167[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (3))){
var inst_21133 = (state_21135[(2)]);
var state_21135__$1 = state_21135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21135__$1,inst_21133);
} else {
if((state_val_21136 === (12))){
var state_21135__$1 = state_21135;
var statearr_21145_21168 = state_21135__$1;
(statearr_21145_21168[(2)] = null);

(statearr_21145_21168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (2))){
var state_21135__$1 = state_21135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21135__$1,(4),ch);
} else {
if((state_val_21136 === (11))){
var inst_21112 = (state_21135[(7)]);
var inst_21122 = (state_21135[(2)]);
var state_21135__$1 = state_21135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21135__$1,(8),inst_21122,inst_21112);
} else {
if((state_val_21136 === (9))){
var state_21135__$1 = state_21135;
var statearr_21146_21169 = state_21135__$1;
(statearr_21146_21169[(2)] = tc);

(statearr_21146_21169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (5))){
var inst_21115 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21116 = cljs.core.async.close_BANG_.call(null,fc);
var state_21135__$1 = (function (){var statearr_21147 = state_21135;
(statearr_21147[(8)] = inst_21115);

return statearr_21147;
})();
var statearr_21148_21170 = state_21135__$1;
(statearr_21148_21170[(2)] = inst_21116);

(statearr_21148_21170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (14))){
var inst_21129 = (state_21135[(2)]);
var state_21135__$1 = state_21135;
var statearr_21149_21171 = state_21135__$1;
(statearr_21149_21171[(2)] = inst_21129);

(statearr_21149_21171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (10))){
var state_21135__$1 = state_21135;
var statearr_21150_21172 = state_21135__$1;
(statearr_21150_21172[(2)] = fc);

(statearr_21150_21172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21136 === (8))){
var inst_21124 = (state_21135[(2)]);
var state_21135__$1 = state_21135;
if(cljs.core.truth_(inst_21124)){
var statearr_21151_21173 = state_21135__$1;
(statearr_21151_21173[(1)] = (12));

} else {
var statearr_21152_21174 = state_21135__$1;
(statearr_21152_21174[(1)] = (13));

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
});})(c__6701__auto___21160,tc,fc))
;
return ((function (switch__6645__auto__,c__6701__auto___21160,tc,fc){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_21156 = [null,null,null,null,null,null,null,null,null];
(statearr_21156[(0)] = state_machine__6646__auto__);

(statearr_21156[(1)] = (1));

return statearr_21156;
});
var state_machine__6646__auto____1 = (function (state_21135){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_21135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e21157){if((e21157 instanceof Object)){
var ex__6649__auto__ = e21157;
var statearr_21158_21175 = state_21135;
(statearr_21158_21175[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21176 = state_21135;
state_21135 = G__21176;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_21135){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_21135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___21160,tc,fc))
})();
var state__6703__auto__ = (function (){var statearr_21159 = f__6702__auto__.call(null);
(statearr_21159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___21160);

return statearr_21159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___21160,tc,fc))
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
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto__){
return (function (state_21223){
var state_val_21224 = (state_21223[(1)]);
if((state_val_21224 === (7))){
var inst_21219 = (state_21223[(2)]);
var state_21223__$1 = state_21223;
var statearr_21225_21241 = state_21223__$1;
(statearr_21225_21241[(2)] = inst_21219);

(statearr_21225_21241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (6))){
var inst_21209 = (state_21223[(7)]);
var inst_21212 = (state_21223[(8)]);
var inst_21216 = f.call(null,inst_21209,inst_21212);
var inst_21209__$1 = inst_21216;
var state_21223__$1 = (function (){var statearr_21226 = state_21223;
(statearr_21226[(7)] = inst_21209__$1);

return statearr_21226;
})();
var statearr_21227_21242 = state_21223__$1;
(statearr_21227_21242[(2)] = null);

(statearr_21227_21242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (5))){
var inst_21209 = (state_21223[(7)]);
var state_21223__$1 = state_21223;
var statearr_21228_21243 = state_21223__$1;
(statearr_21228_21243[(2)] = inst_21209);

(statearr_21228_21243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (4))){
var inst_21212 = (state_21223[(8)]);
var inst_21212__$1 = (state_21223[(2)]);
var inst_21213 = (inst_21212__$1 == null);
var state_21223__$1 = (function (){var statearr_21229 = state_21223;
(statearr_21229[(8)] = inst_21212__$1);

return statearr_21229;
})();
if(cljs.core.truth_(inst_21213)){
var statearr_21230_21244 = state_21223__$1;
(statearr_21230_21244[(1)] = (5));

} else {
var statearr_21231_21245 = state_21223__$1;
(statearr_21231_21245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21224 === (3))){
var inst_21221 = (state_21223[(2)]);
var state_21223__$1 = state_21223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21223__$1,inst_21221);
} else {
if((state_val_21224 === (2))){
var state_21223__$1 = state_21223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21223__$1,(4),ch);
} else {
if((state_val_21224 === (1))){
var inst_21209 = init;
var state_21223__$1 = (function (){var statearr_21232 = state_21223;
(statearr_21232[(7)] = inst_21209);

return statearr_21232;
})();
var statearr_21233_21246 = state_21223__$1;
(statearr_21233_21246[(2)] = null);

(statearr_21233_21246[(1)] = (2));


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
});})(c__6701__auto__))
;
return ((function (switch__6645__auto__,c__6701__auto__){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_21237 = [null,null,null,null,null,null,null,null,null];
(statearr_21237[(0)] = state_machine__6646__auto__);

(statearr_21237[(1)] = (1));

return statearr_21237;
});
var state_machine__6646__auto____1 = (function (state_21223){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_21223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e21238){if((e21238 instanceof Object)){
var ex__6649__auto__ = e21238;
var statearr_21239_21247 = state_21223;
(statearr_21239_21247[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21248 = state_21223;
state_21223 = G__21248;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_21223){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_21223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto__))
})();
var state__6703__auto__ = (function (){var statearr_21240 = f__6702__auto__.call(null);
(statearr_21240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_21240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__))
);

return c__6701__auto__;
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
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto__){
return (function (state_21322){
var state_val_21323 = (state_21322[(1)]);
if((state_val_21323 === (7))){
var inst_21304 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
var statearr_21324_21347 = state_21322__$1;
(statearr_21324_21347[(2)] = inst_21304);

(statearr_21324_21347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (1))){
var inst_21298 = cljs.core.seq.call(null,coll);
var inst_21299 = inst_21298;
var state_21322__$1 = (function (){var statearr_21325 = state_21322;
(statearr_21325[(7)] = inst_21299);

return statearr_21325;
})();
var statearr_21326_21348 = state_21322__$1;
(statearr_21326_21348[(2)] = null);

(statearr_21326_21348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (4))){
var inst_21299 = (state_21322[(7)]);
var inst_21302 = cljs.core.first.call(null,inst_21299);
var state_21322__$1 = state_21322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21322__$1,(7),ch,inst_21302);
} else {
if((state_val_21323 === (13))){
var inst_21316 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
var statearr_21327_21349 = state_21322__$1;
(statearr_21327_21349[(2)] = inst_21316);

(statearr_21327_21349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (6))){
var inst_21307 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
if(cljs.core.truth_(inst_21307)){
var statearr_21328_21350 = state_21322__$1;
(statearr_21328_21350[(1)] = (8));

} else {
var statearr_21329_21351 = state_21322__$1;
(statearr_21329_21351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (3))){
var inst_21320 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21322__$1,inst_21320);
} else {
if((state_val_21323 === (12))){
var state_21322__$1 = state_21322;
var statearr_21330_21352 = state_21322__$1;
(statearr_21330_21352[(2)] = null);

(statearr_21330_21352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (2))){
var inst_21299 = (state_21322[(7)]);
var state_21322__$1 = state_21322;
if(cljs.core.truth_(inst_21299)){
var statearr_21331_21353 = state_21322__$1;
(statearr_21331_21353[(1)] = (4));

} else {
var statearr_21332_21354 = state_21322__$1;
(statearr_21332_21354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (11))){
var inst_21313 = cljs.core.async.close_BANG_.call(null,ch);
var state_21322__$1 = state_21322;
var statearr_21333_21355 = state_21322__$1;
(statearr_21333_21355[(2)] = inst_21313);

(statearr_21333_21355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (9))){
var state_21322__$1 = state_21322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21334_21356 = state_21322__$1;
(statearr_21334_21356[(1)] = (11));

} else {
var statearr_21335_21357 = state_21322__$1;
(statearr_21335_21357[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (5))){
var inst_21299 = (state_21322[(7)]);
var state_21322__$1 = state_21322;
var statearr_21336_21358 = state_21322__$1;
(statearr_21336_21358[(2)] = inst_21299);

(statearr_21336_21358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (10))){
var inst_21318 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
var statearr_21337_21359 = state_21322__$1;
(statearr_21337_21359[(2)] = inst_21318);

(statearr_21337_21359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (8))){
var inst_21299 = (state_21322[(7)]);
var inst_21309 = cljs.core.next.call(null,inst_21299);
var inst_21299__$1 = inst_21309;
var state_21322__$1 = (function (){var statearr_21338 = state_21322;
(statearr_21338[(7)] = inst_21299__$1);

return statearr_21338;
})();
var statearr_21339_21360 = state_21322__$1;
(statearr_21339_21360[(2)] = null);

(statearr_21339_21360[(1)] = (2));


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
});})(c__6701__auto__))
;
return ((function (switch__6645__auto__,c__6701__auto__){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_21343 = [null,null,null,null,null,null,null,null];
(statearr_21343[(0)] = state_machine__6646__auto__);

(statearr_21343[(1)] = (1));

return statearr_21343;
});
var state_machine__6646__auto____1 = (function (state_21322){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_21322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e21344){if((e21344 instanceof Object)){
var ex__6649__auto__ = e21344;
var statearr_21345_21361 = state_21322;
(statearr_21345_21361[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21362 = state_21322;
state_21322 = G__21362;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_21322){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_21322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto__))
})();
var state__6703__auto__ = (function (){var statearr_21346 = f__6702__auto__.call(null);
(statearr_21346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_21346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__))
);

return c__6701__auto__;
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

cljs.core.async.Mux = (function (){var obj21364 = {};
return obj21364;
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


cljs.core.async.Mult = (function (){var obj21366 = {};
return obj21366;
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
if(typeof cljs.core.async.t21588 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21588 = (function (cs,ch,mult,meta21589){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21589 = meta21589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21588.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21588.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21588.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21588.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21588.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21590){
var self__ = this;
var _21590__$1 = this;
return self__.meta21589;
});})(cs))
;

cljs.core.async.t21588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21590,meta21589__$1){
var self__ = this;
var _21590__$1 = this;
return (new cljs.core.async.t21588(self__.cs,self__.ch,self__.mult,meta21589__$1));
});})(cs))
;

cljs.core.async.t21588.cljs$lang$type = true;

cljs.core.async.t21588.cljs$lang$ctorStr = "cljs.core.async/t21588";

cljs.core.async.t21588.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21588");
});})(cs))
;

cljs.core.async.__GT_t21588 = ((function (cs){
return (function __GT_t21588(cs__$1,ch__$1,mult__$1,meta21589){
return (new cljs.core.async.t21588(cs__$1,ch__$1,mult__$1,meta21589));
});})(cs))
;

}

return (new cljs.core.async.t21588(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6701__auto___21809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___21809,cs,m,dchan,dctr,done){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___21809,cs,m,dchan,dctr,done){
return (function (state_21721){
var state_val_21722 = (state_21721[(1)]);
if((state_val_21722 === (7))){
var inst_21717 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21723_21810 = state_21721__$1;
(statearr_21723_21810[(2)] = inst_21717);

(statearr_21723_21810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (20))){
var inst_21622 = (state_21721[(7)]);
var inst_21632 = cljs.core.first.call(null,inst_21622);
var inst_21633 = cljs.core.nth.call(null,inst_21632,(0),null);
var inst_21634 = cljs.core.nth.call(null,inst_21632,(1),null);
var state_21721__$1 = (function (){var statearr_21724 = state_21721;
(statearr_21724[(8)] = inst_21633);

return statearr_21724;
})();
if(cljs.core.truth_(inst_21634)){
var statearr_21725_21811 = state_21721__$1;
(statearr_21725_21811[(1)] = (22));

} else {
var statearr_21726_21812 = state_21721__$1;
(statearr_21726_21812[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (27))){
var inst_21664 = (state_21721[(9)]);
var inst_21669 = (state_21721[(10)]);
var inst_21593 = (state_21721[(11)]);
var inst_21662 = (state_21721[(12)]);
var inst_21669__$1 = cljs.core._nth.call(null,inst_21662,inst_21664);
var inst_21670 = cljs.core.async.put_BANG_.call(null,inst_21669__$1,inst_21593,done);
var state_21721__$1 = (function (){var statearr_21727 = state_21721;
(statearr_21727[(10)] = inst_21669__$1);

return statearr_21727;
})();
if(cljs.core.truth_(inst_21670)){
var statearr_21728_21813 = state_21721__$1;
(statearr_21728_21813[(1)] = (30));

} else {
var statearr_21729_21814 = state_21721__$1;
(statearr_21729_21814[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (1))){
var state_21721__$1 = state_21721;
var statearr_21730_21815 = state_21721__$1;
(statearr_21730_21815[(2)] = null);

(statearr_21730_21815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (24))){
var inst_21622 = (state_21721[(7)]);
var inst_21639 = (state_21721[(2)]);
var inst_21640 = cljs.core.next.call(null,inst_21622);
var inst_21602 = inst_21640;
var inst_21603 = null;
var inst_21604 = (0);
var inst_21605 = (0);
var state_21721__$1 = (function (){var statearr_21731 = state_21721;
(statearr_21731[(13)] = inst_21602);

(statearr_21731[(14)] = inst_21603);

(statearr_21731[(15)] = inst_21604);

(statearr_21731[(16)] = inst_21605);

(statearr_21731[(17)] = inst_21639);

return statearr_21731;
})();
var statearr_21732_21816 = state_21721__$1;
(statearr_21732_21816[(2)] = null);

(statearr_21732_21816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (39))){
var state_21721__$1 = state_21721;
var statearr_21736_21817 = state_21721__$1;
(statearr_21736_21817[(2)] = null);

(statearr_21736_21817[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (4))){
var inst_21593 = (state_21721[(11)]);
var inst_21593__$1 = (state_21721[(2)]);
var inst_21594 = (inst_21593__$1 == null);
var state_21721__$1 = (function (){var statearr_21737 = state_21721;
(statearr_21737[(11)] = inst_21593__$1);

return statearr_21737;
})();
if(cljs.core.truth_(inst_21594)){
var statearr_21738_21818 = state_21721__$1;
(statearr_21738_21818[(1)] = (5));

} else {
var statearr_21739_21819 = state_21721__$1;
(statearr_21739_21819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (15))){
var inst_21602 = (state_21721[(13)]);
var inst_21603 = (state_21721[(14)]);
var inst_21604 = (state_21721[(15)]);
var inst_21605 = (state_21721[(16)]);
var inst_21618 = (state_21721[(2)]);
var inst_21619 = (inst_21605 + (1));
var tmp21733 = inst_21602;
var tmp21734 = inst_21603;
var tmp21735 = inst_21604;
var inst_21602__$1 = tmp21733;
var inst_21603__$1 = tmp21734;
var inst_21604__$1 = tmp21735;
var inst_21605__$1 = inst_21619;
var state_21721__$1 = (function (){var statearr_21740 = state_21721;
(statearr_21740[(13)] = inst_21602__$1);

(statearr_21740[(14)] = inst_21603__$1);

(statearr_21740[(18)] = inst_21618);

(statearr_21740[(15)] = inst_21604__$1);

(statearr_21740[(16)] = inst_21605__$1);

return statearr_21740;
})();
var statearr_21741_21820 = state_21721__$1;
(statearr_21741_21820[(2)] = null);

(statearr_21741_21820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (21))){
var inst_21643 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21745_21821 = state_21721__$1;
(statearr_21745_21821[(2)] = inst_21643);

(statearr_21745_21821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (31))){
var inst_21669 = (state_21721[(10)]);
var inst_21673 = done.call(null,null);
var inst_21674 = cljs.core.async.untap_STAR_.call(null,m,inst_21669);
var state_21721__$1 = (function (){var statearr_21746 = state_21721;
(statearr_21746[(19)] = inst_21673);

return statearr_21746;
})();
var statearr_21747_21822 = state_21721__$1;
(statearr_21747_21822[(2)] = inst_21674);

(statearr_21747_21822[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (32))){
var inst_21664 = (state_21721[(9)]);
var inst_21662 = (state_21721[(12)]);
var inst_21663 = (state_21721[(20)]);
var inst_21661 = (state_21721[(21)]);
var inst_21676 = (state_21721[(2)]);
var inst_21677 = (inst_21664 + (1));
var tmp21742 = inst_21662;
var tmp21743 = inst_21663;
var tmp21744 = inst_21661;
var inst_21661__$1 = tmp21744;
var inst_21662__$1 = tmp21742;
var inst_21663__$1 = tmp21743;
var inst_21664__$1 = inst_21677;
var state_21721__$1 = (function (){var statearr_21748 = state_21721;
(statearr_21748[(9)] = inst_21664__$1);

(statearr_21748[(22)] = inst_21676);

(statearr_21748[(12)] = inst_21662__$1);

(statearr_21748[(20)] = inst_21663__$1);

(statearr_21748[(21)] = inst_21661__$1);

return statearr_21748;
})();
var statearr_21749_21823 = state_21721__$1;
(statearr_21749_21823[(2)] = null);

(statearr_21749_21823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (40))){
var inst_21689 = (state_21721[(23)]);
var inst_21693 = done.call(null,null);
var inst_21694 = cljs.core.async.untap_STAR_.call(null,m,inst_21689);
var state_21721__$1 = (function (){var statearr_21750 = state_21721;
(statearr_21750[(24)] = inst_21693);

return statearr_21750;
})();
var statearr_21751_21824 = state_21721__$1;
(statearr_21751_21824[(2)] = inst_21694);

(statearr_21751_21824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (33))){
var inst_21680 = (state_21721[(25)]);
var inst_21682 = cljs.core.chunked_seq_QMARK_.call(null,inst_21680);
var state_21721__$1 = state_21721;
if(inst_21682){
var statearr_21752_21825 = state_21721__$1;
(statearr_21752_21825[(1)] = (36));

} else {
var statearr_21753_21826 = state_21721__$1;
(statearr_21753_21826[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (13))){
var inst_21612 = (state_21721[(26)]);
var inst_21615 = cljs.core.async.close_BANG_.call(null,inst_21612);
var state_21721__$1 = state_21721;
var statearr_21754_21827 = state_21721__$1;
(statearr_21754_21827[(2)] = inst_21615);

(statearr_21754_21827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (22))){
var inst_21633 = (state_21721[(8)]);
var inst_21636 = cljs.core.async.close_BANG_.call(null,inst_21633);
var state_21721__$1 = state_21721;
var statearr_21755_21828 = state_21721__$1;
(statearr_21755_21828[(2)] = inst_21636);

(statearr_21755_21828[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (36))){
var inst_21680 = (state_21721[(25)]);
var inst_21684 = cljs.core.chunk_first.call(null,inst_21680);
var inst_21685 = cljs.core.chunk_rest.call(null,inst_21680);
var inst_21686 = cljs.core.count.call(null,inst_21684);
var inst_21661 = inst_21685;
var inst_21662 = inst_21684;
var inst_21663 = inst_21686;
var inst_21664 = (0);
var state_21721__$1 = (function (){var statearr_21756 = state_21721;
(statearr_21756[(9)] = inst_21664);

(statearr_21756[(12)] = inst_21662);

(statearr_21756[(20)] = inst_21663);

(statearr_21756[(21)] = inst_21661);

return statearr_21756;
})();
var statearr_21757_21829 = state_21721__$1;
(statearr_21757_21829[(2)] = null);

(statearr_21757_21829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (41))){
var inst_21680 = (state_21721[(25)]);
var inst_21696 = (state_21721[(2)]);
var inst_21697 = cljs.core.next.call(null,inst_21680);
var inst_21661 = inst_21697;
var inst_21662 = null;
var inst_21663 = (0);
var inst_21664 = (0);
var state_21721__$1 = (function (){var statearr_21758 = state_21721;
(statearr_21758[(9)] = inst_21664);

(statearr_21758[(27)] = inst_21696);

(statearr_21758[(12)] = inst_21662);

(statearr_21758[(20)] = inst_21663);

(statearr_21758[(21)] = inst_21661);

return statearr_21758;
})();
var statearr_21759_21830 = state_21721__$1;
(statearr_21759_21830[(2)] = null);

(statearr_21759_21830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (43))){
var state_21721__$1 = state_21721;
var statearr_21760_21831 = state_21721__$1;
(statearr_21760_21831[(2)] = null);

(statearr_21760_21831[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (29))){
var inst_21705 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21761_21832 = state_21721__$1;
(statearr_21761_21832[(2)] = inst_21705);

(statearr_21761_21832[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (44))){
var inst_21714 = (state_21721[(2)]);
var state_21721__$1 = (function (){var statearr_21762 = state_21721;
(statearr_21762[(28)] = inst_21714);

return statearr_21762;
})();
var statearr_21763_21833 = state_21721__$1;
(statearr_21763_21833[(2)] = null);

(statearr_21763_21833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (6))){
var inst_21653 = (state_21721[(29)]);
var inst_21652 = cljs.core.deref.call(null,cs);
var inst_21653__$1 = cljs.core.keys.call(null,inst_21652);
var inst_21654 = cljs.core.count.call(null,inst_21653__$1);
var inst_21655 = cljs.core.reset_BANG_.call(null,dctr,inst_21654);
var inst_21660 = cljs.core.seq.call(null,inst_21653__$1);
var inst_21661 = inst_21660;
var inst_21662 = null;
var inst_21663 = (0);
var inst_21664 = (0);
var state_21721__$1 = (function (){var statearr_21764 = state_21721;
(statearr_21764[(9)] = inst_21664);

(statearr_21764[(30)] = inst_21655);

(statearr_21764[(12)] = inst_21662);

(statearr_21764[(20)] = inst_21663);

(statearr_21764[(21)] = inst_21661);

(statearr_21764[(29)] = inst_21653__$1);

return statearr_21764;
})();
var statearr_21765_21834 = state_21721__$1;
(statearr_21765_21834[(2)] = null);

(statearr_21765_21834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (28))){
var inst_21680 = (state_21721[(25)]);
var inst_21661 = (state_21721[(21)]);
var inst_21680__$1 = cljs.core.seq.call(null,inst_21661);
var state_21721__$1 = (function (){var statearr_21766 = state_21721;
(statearr_21766[(25)] = inst_21680__$1);

return statearr_21766;
})();
if(inst_21680__$1){
var statearr_21767_21835 = state_21721__$1;
(statearr_21767_21835[(1)] = (33));

} else {
var statearr_21768_21836 = state_21721__$1;
(statearr_21768_21836[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (25))){
var inst_21664 = (state_21721[(9)]);
var inst_21663 = (state_21721[(20)]);
var inst_21666 = (inst_21664 < inst_21663);
var inst_21667 = inst_21666;
var state_21721__$1 = state_21721;
if(cljs.core.truth_(inst_21667)){
var statearr_21769_21837 = state_21721__$1;
(statearr_21769_21837[(1)] = (27));

} else {
var statearr_21770_21838 = state_21721__$1;
(statearr_21770_21838[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (34))){
var state_21721__$1 = state_21721;
var statearr_21771_21839 = state_21721__$1;
(statearr_21771_21839[(2)] = null);

(statearr_21771_21839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (17))){
var state_21721__$1 = state_21721;
var statearr_21772_21840 = state_21721__$1;
(statearr_21772_21840[(2)] = null);

(statearr_21772_21840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (3))){
var inst_21719 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21721__$1,inst_21719);
} else {
if((state_val_21722 === (12))){
var inst_21648 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21773_21841 = state_21721__$1;
(statearr_21773_21841[(2)] = inst_21648);

(statearr_21773_21841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (2))){
var state_21721__$1 = state_21721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21721__$1,(4),ch);
} else {
if((state_val_21722 === (23))){
var state_21721__$1 = state_21721;
var statearr_21774_21842 = state_21721__$1;
(statearr_21774_21842[(2)] = null);

(statearr_21774_21842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (35))){
var inst_21703 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21775_21843 = state_21721__$1;
(statearr_21775_21843[(2)] = inst_21703);

(statearr_21775_21843[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (19))){
var inst_21622 = (state_21721[(7)]);
var inst_21626 = cljs.core.chunk_first.call(null,inst_21622);
var inst_21627 = cljs.core.chunk_rest.call(null,inst_21622);
var inst_21628 = cljs.core.count.call(null,inst_21626);
var inst_21602 = inst_21627;
var inst_21603 = inst_21626;
var inst_21604 = inst_21628;
var inst_21605 = (0);
var state_21721__$1 = (function (){var statearr_21776 = state_21721;
(statearr_21776[(13)] = inst_21602);

(statearr_21776[(14)] = inst_21603);

(statearr_21776[(15)] = inst_21604);

(statearr_21776[(16)] = inst_21605);

return statearr_21776;
})();
var statearr_21777_21844 = state_21721__$1;
(statearr_21777_21844[(2)] = null);

(statearr_21777_21844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (11))){
var inst_21602 = (state_21721[(13)]);
var inst_21622 = (state_21721[(7)]);
var inst_21622__$1 = cljs.core.seq.call(null,inst_21602);
var state_21721__$1 = (function (){var statearr_21778 = state_21721;
(statearr_21778[(7)] = inst_21622__$1);

return statearr_21778;
})();
if(inst_21622__$1){
var statearr_21779_21845 = state_21721__$1;
(statearr_21779_21845[(1)] = (16));

} else {
var statearr_21780_21846 = state_21721__$1;
(statearr_21780_21846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (9))){
var inst_21650 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21781_21847 = state_21721__$1;
(statearr_21781_21847[(2)] = inst_21650);

(statearr_21781_21847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (5))){
var inst_21600 = cljs.core.deref.call(null,cs);
var inst_21601 = cljs.core.seq.call(null,inst_21600);
var inst_21602 = inst_21601;
var inst_21603 = null;
var inst_21604 = (0);
var inst_21605 = (0);
var state_21721__$1 = (function (){var statearr_21782 = state_21721;
(statearr_21782[(13)] = inst_21602);

(statearr_21782[(14)] = inst_21603);

(statearr_21782[(15)] = inst_21604);

(statearr_21782[(16)] = inst_21605);

return statearr_21782;
})();
var statearr_21783_21848 = state_21721__$1;
(statearr_21783_21848[(2)] = null);

(statearr_21783_21848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (14))){
var state_21721__$1 = state_21721;
var statearr_21784_21849 = state_21721__$1;
(statearr_21784_21849[(2)] = null);

(statearr_21784_21849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (45))){
var inst_21711 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21785_21850 = state_21721__$1;
(statearr_21785_21850[(2)] = inst_21711);

(statearr_21785_21850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (26))){
var inst_21653 = (state_21721[(29)]);
var inst_21707 = (state_21721[(2)]);
var inst_21708 = cljs.core.seq.call(null,inst_21653);
var state_21721__$1 = (function (){var statearr_21786 = state_21721;
(statearr_21786[(31)] = inst_21707);

return statearr_21786;
})();
if(inst_21708){
var statearr_21787_21851 = state_21721__$1;
(statearr_21787_21851[(1)] = (42));

} else {
var statearr_21788_21852 = state_21721__$1;
(statearr_21788_21852[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (16))){
var inst_21622 = (state_21721[(7)]);
var inst_21624 = cljs.core.chunked_seq_QMARK_.call(null,inst_21622);
var state_21721__$1 = state_21721;
if(inst_21624){
var statearr_21789_21853 = state_21721__$1;
(statearr_21789_21853[(1)] = (19));

} else {
var statearr_21790_21854 = state_21721__$1;
(statearr_21790_21854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (38))){
var inst_21700 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21791_21855 = state_21721__$1;
(statearr_21791_21855[(2)] = inst_21700);

(statearr_21791_21855[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (30))){
var state_21721__$1 = state_21721;
var statearr_21792_21856 = state_21721__$1;
(statearr_21792_21856[(2)] = null);

(statearr_21792_21856[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (10))){
var inst_21603 = (state_21721[(14)]);
var inst_21605 = (state_21721[(16)]);
var inst_21611 = cljs.core._nth.call(null,inst_21603,inst_21605);
var inst_21612 = cljs.core.nth.call(null,inst_21611,(0),null);
var inst_21613 = cljs.core.nth.call(null,inst_21611,(1),null);
var state_21721__$1 = (function (){var statearr_21793 = state_21721;
(statearr_21793[(26)] = inst_21612);

return statearr_21793;
})();
if(cljs.core.truth_(inst_21613)){
var statearr_21794_21857 = state_21721__$1;
(statearr_21794_21857[(1)] = (13));

} else {
var statearr_21795_21858 = state_21721__$1;
(statearr_21795_21858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (18))){
var inst_21646 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21796_21859 = state_21721__$1;
(statearr_21796_21859[(2)] = inst_21646);

(statearr_21796_21859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (42))){
var state_21721__$1 = state_21721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21721__$1,(45),dchan);
} else {
if((state_val_21722 === (37))){
var inst_21689 = (state_21721[(23)]);
var inst_21593 = (state_21721[(11)]);
var inst_21680 = (state_21721[(25)]);
var inst_21689__$1 = cljs.core.first.call(null,inst_21680);
var inst_21690 = cljs.core.async.put_BANG_.call(null,inst_21689__$1,inst_21593,done);
var state_21721__$1 = (function (){var statearr_21797 = state_21721;
(statearr_21797[(23)] = inst_21689__$1);

return statearr_21797;
})();
if(cljs.core.truth_(inst_21690)){
var statearr_21798_21860 = state_21721__$1;
(statearr_21798_21860[(1)] = (39));

} else {
var statearr_21799_21861 = state_21721__$1;
(statearr_21799_21861[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21722 === (8))){
var inst_21604 = (state_21721[(15)]);
var inst_21605 = (state_21721[(16)]);
var inst_21607 = (inst_21605 < inst_21604);
var inst_21608 = inst_21607;
var state_21721__$1 = state_21721;
if(cljs.core.truth_(inst_21608)){
var statearr_21800_21862 = state_21721__$1;
(statearr_21800_21862[(1)] = (10));

} else {
var statearr_21801_21863 = state_21721__$1;
(statearr_21801_21863[(1)] = (11));

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
});})(c__6701__auto___21809,cs,m,dchan,dctr,done))
;
return ((function (switch__6645__auto__,c__6701__auto___21809,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_21805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21805[(0)] = state_machine__6646__auto__);

(statearr_21805[(1)] = (1));

return statearr_21805;
});
var state_machine__6646__auto____1 = (function (state_21721){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_21721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e21806){if((e21806 instanceof Object)){
var ex__6649__auto__ = e21806;
var statearr_21807_21864 = state_21721;
(statearr_21807_21864[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21865 = state_21721;
state_21721 = G__21865;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_21721){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_21721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___21809,cs,m,dchan,dctr,done))
})();
var state__6703__auto__ = (function (){var statearr_21808 = f__6702__auto__.call(null);
(statearr_21808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___21809);

return statearr_21808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___21809,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21867 = {};
return obj21867;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21868){
var map__21873 = p__21868;
var map__21873__$1 = ((cljs.core.seq_QMARK_.call(null,map__21873))?cljs.core.apply.call(null,cljs.core.hash_map,map__21873):map__21873);
var opts = map__21873__$1;
var statearr_21874_21877 = state;
(statearr_21874_21877[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21873,map__21873__$1,opts){
return (function (val){
var statearr_21875_21878 = state;
(statearr_21875_21878[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21873,map__21873__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21876_21879 = state;
(statearr_21876_21879[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21868 = null;
if (arguments.length > 3) {
  p__21868 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21868);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21880){
var state = cljs.core.first(arglist__21880);
arglist__21880 = cljs.core.next(arglist__21880);
var cont_block = cljs.core.first(arglist__21880);
arglist__21880 = cljs.core.next(arglist__21880);
var ports = cljs.core.first(arglist__21880);
var p__21868 = cljs.core.rest(arglist__21880);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21868);
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
if(typeof cljs.core.async.t22000 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22000 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22001){
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
this.meta22001 = meta22001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22000.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22000.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22000.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22000.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22000.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22000.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t22000.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22002){
var self__ = this;
var _22002__$1 = this;
return self__.meta22001;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22002,meta22001__$1){
var self__ = this;
var _22002__$1 = this;
return (new cljs.core.async.t22000(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22001__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22000.cljs$lang$type = true;

cljs.core.async.t22000.cljs$lang$ctorStr = "cljs.core.async/t22000";

cljs.core.async.t22000.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22000");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22000 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22000(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22001){
return (new cljs.core.async.t22000(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22001));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22000(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6701__auto___22119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___22119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___22119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22072){
var state_val_22073 = (state_22072[(1)]);
if((state_val_22073 === (7))){
var inst_22016 = (state_22072[(7)]);
var inst_22021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22016);
var state_22072__$1 = state_22072;
var statearr_22074_22120 = state_22072__$1;
(statearr_22074_22120[(2)] = inst_22021);

(statearr_22074_22120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (20))){
var inst_22031 = (state_22072[(8)]);
var state_22072__$1 = state_22072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22072__$1,(23),out,inst_22031);
} else {
if((state_val_22073 === (1))){
var inst_22006 = (state_22072[(9)]);
var inst_22006__$1 = calc_state.call(null);
var inst_22007 = cljs.core.seq_QMARK_.call(null,inst_22006__$1);
var state_22072__$1 = (function (){var statearr_22075 = state_22072;
(statearr_22075[(9)] = inst_22006__$1);

return statearr_22075;
})();
if(inst_22007){
var statearr_22076_22121 = state_22072__$1;
(statearr_22076_22121[(1)] = (2));

} else {
var statearr_22077_22122 = state_22072__$1;
(statearr_22077_22122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (24))){
var inst_22024 = (state_22072[(10)]);
var inst_22016 = inst_22024;
var state_22072__$1 = (function (){var statearr_22078 = state_22072;
(statearr_22078[(7)] = inst_22016);

return statearr_22078;
})();
var statearr_22079_22123 = state_22072__$1;
(statearr_22079_22123[(2)] = null);

(statearr_22079_22123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (4))){
var inst_22006 = (state_22072[(9)]);
var inst_22012 = (state_22072[(2)]);
var inst_22013 = cljs.core.get.call(null,inst_22012,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22014 = cljs.core.get.call(null,inst_22012,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22015 = cljs.core.get.call(null,inst_22012,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22016 = inst_22006;
var state_22072__$1 = (function (){var statearr_22080 = state_22072;
(statearr_22080[(11)] = inst_22013);

(statearr_22080[(12)] = inst_22015);

(statearr_22080[(7)] = inst_22016);

(statearr_22080[(13)] = inst_22014);

return statearr_22080;
})();
var statearr_22081_22124 = state_22072__$1;
(statearr_22081_22124[(2)] = null);

(statearr_22081_22124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (15))){
var state_22072__$1 = state_22072;
var statearr_22082_22125 = state_22072__$1;
(statearr_22082_22125[(2)] = null);

(statearr_22082_22125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (21))){
var inst_22024 = (state_22072[(10)]);
var inst_22016 = inst_22024;
var state_22072__$1 = (function (){var statearr_22083 = state_22072;
(statearr_22083[(7)] = inst_22016);

return statearr_22083;
})();
var statearr_22084_22126 = state_22072__$1;
(statearr_22084_22126[(2)] = null);

(statearr_22084_22126[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (13))){
var inst_22068 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
var statearr_22085_22127 = state_22072__$1;
(statearr_22085_22127[(2)] = inst_22068);

(statearr_22085_22127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (22))){
var inst_22066 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
var statearr_22086_22128 = state_22072__$1;
(statearr_22086_22128[(2)] = inst_22066);

(statearr_22086_22128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (6))){
var inst_22070 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22072__$1,inst_22070);
} else {
if((state_val_22073 === (25))){
var state_22072__$1 = state_22072;
var statearr_22087_22129 = state_22072__$1;
(statearr_22087_22129[(2)] = null);

(statearr_22087_22129[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (17))){
var inst_22046 = (state_22072[(14)]);
var state_22072__$1 = state_22072;
var statearr_22088_22130 = state_22072__$1;
(statearr_22088_22130[(2)] = inst_22046);

(statearr_22088_22130[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (3))){
var inst_22006 = (state_22072[(9)]);
var state_22072__$1 = state_22072;
var statearr_22089_22131 = state_22072__$1;
(statearr_22089_22131[(2)] = inst_22006);

(statearr_22089_22131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (12))){
var inst_22032 = (state_22072[(15)]);
var inst_22027 = (state_22072[(16)]);
var inst_22046 = (state_22072[(14)]);
var inst_22046__$1 = inst_22027.call(null,inst_22032);
var state_22072__$1 = (function (){var statearr_22090 = state_22072;
(statearr_22090[(14)] = inst_22046__$1);

return statearr_22090;
})();
if(cljs.core.truth_(inst_22046__$1)){
var statearr_22091_22132 = state_22072__$1;
(statearr_22091_22132[(1)] = (17));

} else {
var statearr_22092_22133 = state_22072__$1;
(statearr_22092_22133[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (2))){
var inst_22006 = (state_22072[(9)]);
var inst_22009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22006);
var state_22072__$1 = state_22072;
var statearr_22093_22134 = state_22072__$1;
(statearr_22093_22134[(2)] = inst_22009);

(statearr_22093_22134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (23))){
var inst_22057 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
if(cljs.core.truth_(inst_22057)){
var statearr_22094_22135 = state_22072__$1;
(statearr_22094_22135[(1)] = (24));

} else {
var statearr_22095_22136 = state_22072__$1;
(statearr_22095_22136[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (19))){
var inst_22054 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
if(cljs.core.truth_(inst_22054)){
var statearr_22096_22137 = state_22072__$1;
(statearr_22096_22137[(1)] = (20));

} else {
var statearr_22097_22138 = state_22072__$1;
(statearr_22097_22138[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (11))){
var inst_22031 = (state_22072[(8)]);
var inst_22037 = (inst_22031 == null);
var state_22072__$1 = state_22072;
if(cljs.core.truth_(inst_22037)){
var statearr_22098_22139 = state_22072__$1;
(statearr_22098_22139[(1)] = (14));

} else {
var statearr_22099_22140 = state_22072__$1;
(statearr_22099_22140[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (9))){
var inst_22024 = (state_22072[(10)]);
var inst_22024__$1 = (state_22072[(2)]);
var inst_22025 = cljs.core.get.call(null,inst_22024__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22026 = cljs.core.get.call(null,inst_22024__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22027 = cljs.core.get.call(null,inst_22024__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22072__$1 = (function (){var statearr_22100 = state_22072;
(statearr_22100[(17)] = inst_22026);

(statearr_22100[(10)] = inst_22024__$1);

(statearr_22100[(16)] = inst_22027);

return statearr_22100;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22072__$1,(10),inst_22025);
} else {
if((state_val_22073 === (5))){
var inst_22016 = (state_22072[(7)]);
var inst_22019 = cljs.core.seq_QMARK_.call(null,inst_22016);
var state_22072__$1 = state_22072;
if(inst_22019){
var statearr_22101_22141 = state_22072__$1;
(statearr_22101_22141[(1)] = (7));

} else {
var statearr_22102_22142 = state_22072__$1;
(statearr_22102_22142[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (14))){
var inst_22032 = (state_22072[(15)]);
var inst_22039 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22032);
var state_22072__$1 = state_22072;
var statearr_22103_22143 = state_22072__$1;
(statearr_22103_22143[(2)] = inst_22039);

(statearr_22103_22143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (26))){
var inst_22062 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
var statearr_22104_22144 = state_22072__$1;
(statearr_22104_22144[(2)] = inst_22062);

(statearr_22104_22144[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (16))){
var inst_22042 = (state_22072[(2)]);
var inst_22043 = calc_state.call(null);
var inst_22016 = inst_22043;
var state_22072__$1 = (function (){var statearr_22105 = state_22072;
(statearr_22105[(18)] = inst_22042);

(statearr_22105[(7)] = inst_22016);

return statearr_22105;
})();
var statearr_22106_22145 = state_22072__$1;
(statearr_22106_22145[(2)] = null);

(statearr_22106_22145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (10))){
var inst_22032 = (state_22072[(15)]);
var inst_22031 = (state_22072[(8)]);
var inst_22030 = (state_22072[(2)]);
var inst_22031__$1 = cljs.core.nth.call(null,inst_22030,(0),null);
var inst_22032__$1 = cljs.core.nth.call(null,inst_22030,(1),null);
var inst_22033 = (inst_22031__$1 == null);
var inst_22034 = cljs.core._EQ_.call(null,inst_22032__$1,change);
var inst_22035 = (inst_22033) || (inst_22034);
var state_22072__$1 = (function (){var statearr_22107 = state_22072;
(statearr_22107[(15)] = inst_22032__$1);

(statearr_22107[(8)] = inst_22031__$1);

return statearr_22107;
})();
if(cljs.core.truth_(inst_22035)){
var statearr_22108_22146 = state_22072__$1;
(statearr_22108_22146[(1)] = (11));

} else {
var statearr_22109_22147 = state_22072__$1;
(statearr_22109_22147[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (18))){
var inst_22026 = (state_22072[(17)]);
var inst_22032 = (state_22072[(15)]);
var inst_22027 = (state_22072[(16)]);
var inst_22049 = cljs.core.empty_QMARK_.call(null,inst_22027);
var inst_22050 = inst_22026.call(null,inst_22032);
var inst_22051 = cljs.core.not.call(null,inst_22050);
var inst_22052 = (inst_22049) && (inst_22051);
var state_22072__$1 = state_22072;
var statearr_22110_22148 = state_22072__$1;
(statearr_22110_22148[(2)] = inst_22052);

(statearr_22110_22148[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (8))){
var inst_22016 = (state_22072[(7)]);
var state_22072__$1 = state_22072;
var statearr_22111_22149 = state_22072__$1;
(statearr_22111_22149[(2)] = inst_22016);

(statearr_22111_22149[(1)] = (9));


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
});})(c__6701__auto___22119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6645__auto__,c__6701__auto___22119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_22115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22115[(0)] = state_machine__6646__auto__);

(statearr_22115[(1)] = (1));

return statearr_22115;
});
var state_machine__6646__auto____1 = (function (state_22072){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_22072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e22116){if((e22116 instanceof Object)){
var ex__6649__auto__ = e22116;
var statearr_22117_22150 = state_22072;
(statearr_22117_22150[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22151 = state_22072;
state_22072 = G__22151;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_22072){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_22072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___22119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6703__auto__ = (function (){var statearr_22118 = f__6702__auto__.call(null);
(statearr_22118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___22119);

return statearr_22118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___22119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22153 = {};
return obj22153;
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
return (function (p1__22154_SHARP_){
if(cljs.core.truth_(p1__22154_SHARP_.call(null,topic))){
return p1__22154_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22154_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22277 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22277 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22278){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22278 = meta22278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22277.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22277.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22277.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22277.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22279){
var self__ = this;
var _22279__$1 = this;
return self__.meta22278;
});})(mults,ensure_mult))
;

cljs.core.async.t22277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22279,meta22278__$1){
var self__ = this;
var _22279__$1 = this;
return (new cljs.core.async.t22277(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22278__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22277.cljs$lang$type = true;

cljs.core.async.t22277.cljs$lang$ctorStr = "cljs.core.async/t22277";

cljs.core.async.t22277.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22277");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22277 = ((function (mults,ensure_mult){
return (function __GT_t22277(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22278){
return (new cljs.core.async.t22277(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22278));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22277(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6701__auto___22399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___22399,mults,ensure_mult,p){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___22399,mults,ensure_mult,p){
return (function (state_22351){
var state_val_22352 = (state_22351[(1)]);
if((state_val_22352 === (7))){
var inst_22347 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22353_22400 = state_22351__$1;
(statearr_22353_22400[(2)] = inst_22347);

(statearr_22353_22400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (20))){
var state_22351__$1 = state_22351;
var statearr_22354_22401 = state_22351__$1;
(statearr_22354_22401[(2)] = null);

(statearr_22354_22401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (1))){
var state_22351__$1 = state_22351;
var statearr_22355_22402 = state_22351__$1;
(statearr_22355_22402[(2)] = null);

(statearr_22355_22402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (24))){
var inst_22330 = (state_22351[(7)]);
var inst_22339 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22330);
var state_22351__$1 = state_22351;
var statearr_22356_22403 = state_22351__$1;
(statearr_22356_22403[(2)] = inst_22339);

(statearr_22356_22403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (4))){
var inst_22282 = (state_22351[(8)]);
var inst_22282__$1 = (state_22351[(2)]);
var inst_22283 = (inst_22282__$1 == null);
var state_22351__$1 = (function (){var statearr_22357 = state_22351;
(statearr_22357[(8)] = inst_22282__$1);

return statearr_22357;
})();
if(cljs.core.truth_(inst_22283)){
var statearr_22358_22404 = state_22351__$1;
(statearr_22358_22404[(1)] = (5));

} else {
var statearr_22359_22405 = state_22351__$1;
(statearr_22359_22405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (15))){
var inst_22324 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22360_22406 = state_22351__$1;
(statearr_22360_22406[(2)] = inst_22324);

(statearr_22360_22406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (21))){
var inst_22344 = (state_22351[(2)]);
var state_22351__$1 = (function (){var statearr_22361 = state_22351;
(statearr_22361[(9)] = inst_22344);

return statearr_22361;
})();
var statearr_22362_22407 = state_22351__$1;
(statearr_22362_22407[(2)] = null);

(statearr_22362_22407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (13))){
var inst_22306 = (state_22351[(10)]);
var inst_22308 = cljs.core.chunked_seq_QMARK_.call(null,inst_22306);
var state_22351__$1 = state_22351;
if(inst_22308){
var statearr_22363_22408 = state_22351__$1;
(statearr_22363_22408[(1)] = (16));

} else {
var statearr_22364_22409 = state_22351__$1;
(statearr_22364_22409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (22))){
var inst_22336 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
if(cljs.core.truth_(inst_22336)){
var statearr_22365_22410 = state_22351__$1;
(statearr_22365_22410[(1)] = (23));

} else {
var statearr_22366_22411 = state_22351__$1;
(statearr_22366_22411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (6))){
var inst_22330 = (state_22351[(7)]);
var inst_22282 = (state_22351[(8)]);
var inst_22332 = (state_22351[(11)]);
var inst_22330__$1 = topic_fn.call(null,inst_22282);
var inst_22331 = cljs.core.deref.call(null,mults);
var inst_22332__$1 = cljs.core.get.call(null,inst_22331,inst_22330__$1);
var state_22351__$1 = (function (){var statearr_22367 = state_22351;
(statearr_22367[(7)] = inst_22330__$1);

(statearr_22367[(11)] = inst_22332__$1);

return statearr_22367;
})();
if(cljs.core.truth_(inst_22332__$1)){
var statearr_22368_22412 = state_22351__$1;
(statearr_22368_22412[(1)] = (19));

} else {
var statearr_22369_22413 = state_22351__$1;
(statearr_22369_22413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (25))){
var inst_22341 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22370_22414 = state_22351__$1;
(statearr_22370_22414[(2)] = inst_22341);

(statearr_22370_22414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (17))){
var inst_22306 = (state_22351[(10)]);
var inst_22315 = cljs.core.first.call(null,inst_22306);
var inst_22316 = cljs.core.async.muxch_STAR_.call(null,inst_22315);
var inst_22317 = cljs.core.async.close_BANG_.call(null,inst_22316);
var inst_22318 = cljs.core.next.call(null,inst_22306);
var inst_22292 = inst_22318;
var inst_22293 = null;
var inst_22294 = (0);
var inst_22295 = (0);
var state_22351__$1 = (function (){var statearr_22371 = state_22351;
(statearr_22371[(12)] = inst_22293);

(statearr_22371[(13)] = inst_22317);

(statearr_22371[(14)] = inst_22294);

(statearr_22371[(15)] = inst_22292);

(statearr_22371[(16)] = inst_22295);

return statearr_22371;
})();
var statearr_22372_22415 = state_22351__$1;
(statearr_22372_22415[(2)] = null);

(statearr_22372_22415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (3))){
var inst_22349 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22351__$1,inst_22349);
} else {
if((state_val_22352 === (12))){
var inst_22326 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22373_22416 = state_22351__$1;
(statearr_22373_22416[(2)] = inst_22326);

(statearr_22373_22416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (2))){
var state_22351__$1 = state_22351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22351__$1,(4),ch);
} else {
if((state_val_22352 === (23))){
var state_22351__$1 = state_22351;
var statearr_22374_22417 = state_22351__$1;
(statearr_22374_22417[(2)] = null);

(statearr_22374_22417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (19))){
var inst_22282 = (state_22351[(8)]);
var inst_22332 = (state_22351[(11)]);
var inst_22334 = cljs.core.async.muxch_STAR_.call(null,inst_22332);
var state_22351__$1 = state_22351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22351__$1,(22),inst_22334,inst_22282);
} else {
if((state_val_22352 === (11))){
var inst_22292 = (state_22351[(15)]);
var inst_22306 = (state_22351[(10)]);
var inst_22306__$1 = cljs.core.seq.call(null,inst_22292);
var state_22351__$1 = (function (){var statearr_22375 = state_22351;
(statearr_22375[(10)] = inst_22306__$1);

return statearr_22375;
})();
if(inst_22306__$1){
var statearr_22376_22418 = state_22351__$1;
(statearr_22376_22418[(1)] = (13));

} else {
var statearr_22377_22419 = state_22351__$1;
(statearr_22377_22419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (9))){
var inst_22328 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22378_22420 = state_22351__$1;
(statearr_22378_22420[(2)] = inst_22328);

(statearr_22378_22420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (5))){
var inst_22289 = cljs.core.deref.call(null,mults);
var inst_22290 = cljs.core.vals.call(null,inst_22289);
var inst_22291 = cljs.core.seq.call(null,inst_22290);
var inst_22292 = inst_22291;
var inst_22293 = null;
var inst_22294 = (0);
var inst_22295 = (0);
var state_22351__$1 = (function (){var statearr_22379 = state_22351;
(statearr_22379[(12)] = inst_22293);

(statearr_22379[(14)] = inst_22294);

(statearr_22379[(15)] = inst_22292);

(statearr_22379[(16)] = inst_22295);

return statearr_22379;
})();
var statearr_22380_22421 = state_22351__$1;
(statearr_22380_22421[(2)] = null);

(statearr_22380_22421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (14))){
var state_22351__$1 = state_22351;
var statearr_22384_22422 = state_22351__$1;
(statearr_22384_22422[(2)] = null);

(statearr_22384_22422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (16))){
var inst_22306 = (state_22351[(10)]);
var inst_22310 = cljs.core.chunk_first.call(null,inst_22306);
var inst_22311 = cljs.core.chunk_rest.call(null,inst_22306);
var inst_22312 = cljs.core.count.call(null,inst_22310);
var inst_22292 = inst_22311;
var inst_22293 = inst_22310;
var inst_22294 = inst_22312;
var inst_22295 = (0);
var state_22351__$1 = (function (){var statearr_22385 = state_22351;
(statearr_22385[(12)] = inst_22293);

(statearr_22385[(14)] = inst_22294);

(statearr_22385[(15)] = inst_22292);

(statearr_22385[(16)] = inst_22295);

return statearr_22385;
})();
var statearr_22386_22423 = state_22351__$1;
(statearr_22386_22423[(2)] = null);

(statearr_22386_22423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (10))){
var inst_22293 = (state_22351[(12)]);
var inst_22294 = (state_22351[(14)]);
var inst_22292 = (state_22351[(15)]);
var inst_22295 = (state_22351[(16)]);
var inst_22300 = cljs.core._nth.call(null,inst_22293,inst_22295);
var inst_22301 = cljs.core.async.muxch_STAR_.call(null,inst_22300);
var inst_22302 = cljs.core.async.close_BANG_.call(null,inst_22301);
var inst_22303 = (inst_22295 + (1));
var tmp22381 = inst_22293;
var tmp22382 = inst_22294;
var tmp22383 = inst_22292;
var inst_22292__$1 = tmp22383;
var inst_22293__$1 = tmp22381;
var inst_22294__$1 = tmp22382;
var inst_22295__$1 = inst_22303;
var state_22351__$1 = (function (){var statearr_22387 = state_22351;
(statearr_22387[(17)] = inst_22302);

(statearr_22387[(12)] = inst_22293__$1);

(statearr_22387[(14)] = inst_22294__$1);

(statearr_22387[(15)] = inst_22292__$1);

(statearr_22387[(16)] = inst_22295__$1);

return statearr_22387;
})();
var statearr_22388_22424 = state_22351__$1;
(statearr_22388_22424[(2)] = null);

(statearr_22388_22424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (18))){
var inst_22321 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22389_22425 = state_22351__$1;
(statearr_22389_22425[(2)] = inst_22321);

(statearr_22389_22425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (8))){
var inst_22294 = (state_22351[(14)]);
var inst_22295 = (state_22351[(16)]);
var inst_22297 = (inst_22295 < inst_22294);
var inst_22298 = inst_22297;
var state_22351__$1 = state_22351;
if(cljs.core.truth_(inst_22298)){
var statearr_22390_22426 = state_22351__$1;
(statearr_22390_22426[(1)] = (10));

} else {
var statearr_22391_22427 = state_22351__$1;
(statearr_22391_22427[(1)] = (11));

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
});})(c__6701__auto___22399,mults,ensure_mult,p))
;
return ((function (switch__6645__auto__,c__6701__auto___22399,mults,ensure_mult,p){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_22395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22395[(0)] = state_machine__6646__auto__);

(statearr_22395[(1)] = (1));

return statearr_22395;
});
var state_machine__6646__auto____1 = (function (state_22351){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_22351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e22396){if((e22396 instanceof Object)){
var ex__6649__auto__ = e22396;
var statearr_22397_22428 = state_22351;
(statearr_22397_22428[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22429 = state_22351;
state_22351 = G__22429;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_22351){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_22351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___22399,mults,ensure_mult,p))
})();
var state__6703__auto__ = (function (){var statearr_22398 = f__6702__auto__.call(null);
(statearr_22398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___22399);

return statearr_22398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___22399,mults,ensure_mult,p))
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
var c__6701__auto___22566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___22566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___22566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22536){
var state_val_22537 = (state_22536[(1)]);
if((state_val_22537 === (7))){
var state_22536__$1 = state_22536;
var statearr_22538_22567 = state_22536__$1;
(statearr_22538_22567[(2)] = null);

(statearr_22538_22567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (1))){
var state_22536__$1 = state_22536;
var statearr_22539_22568 = state_22536__$1;
(statearr_22539_22568[(2)] = null);

(statearr_22539_22568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (4))){
var inst_22500 = (state_22536[(7)]);
var inst_22502 = (inst_22500 < cnt);
var state_22536__$1 = state_22536;
if(cljs.core.truth_(inst_22502)){
var statearr_22540_22569 = state_22536__$1;
(statearr_22540_22569[(1)] = (6));

} else {
var statearr_22541_22570 = state_22536__$1;
(statearr_22541_22570[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (15))){
var inst_22532 = (state_22536[(2)]);
var state_22536__$1 = state_22536;
var statearr_22542_22571 = state_22536__$1;
(statearr_22542_22571[(2)] = inst_22532);

(statearr_22542_22571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (13))){
var inst_22525 = cljs.core.async.close_BANG_.call(null,out);
var state_22536__$1 = state_22536;
var statearr_22543_22572 = state_22536__$1;
(statearr_22543_22572[(2)] = inst_22525);

(statearr_22543_22572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (6))){
var state_22536__$1 = state_22536;
var statearr_22544_22573 = state_22536__$1;
(statearr_22544_22573[(2)] = null);

(statearr_22544_22573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (3))){
var inst_22534 = (state_22536[(2)]);
var state_22536__$1 = state_22536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22536__$1,inst_22534);
} else {
if((state_val_22537 === (12))){
var inst_22522 = (state_22536[(8)]);
var inst_22522__$1 = (state_22536[(2)]);
var inst_22523 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22522__$1);
var state_22536__$1 = (function (){var statearr_22545 = state_22536;
(statearr_22545[(8)] = inst_22522__$1);

return statearr_22545;
})();
if(cljs.core.truth_(inst_22523)){
var statearr_22546_22574 = state_22536__$1;
(statearr_22546_22574[(1)] = (13));

} else {
var statearr_22547_22575 = state_22536__$1;
(statearr_22547_22575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (2))){
var inst_22499 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22500 = (0);
var state_22536__$1 = (function (){var statearr_22548 = state_22536;
(statearr_22548[(7)] = inst_22500);

(statearr_22548[(9)] = inst_22499);

return statearr_22548;
})();
var statearr_22549_22576 = state_22536__$1;
(statearr_22549_22576[(2)] = null);

(statearr_22549_22576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (11))){
var inst_22500 = (state_22536[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22536,(10),Object,null,(9));
var inst_22509 = chs__$1.call(null,inst_22500);
var inst_22510 = done.call(null,inst_22500);
var inst_22511 = cljs.core.async.take_BANG_.call(null,inst_22509,inst_22510);
var state_22536__$1 = state_22536;
var statearr_22550_22577 = state_22536__$1;
(statearr_22550_22577[(2)] = inst_22511);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22536__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (9))){
var inst_22500 = (state_22536[(7)]);
var inst_22513 = (state_22536[(2)]);
var inst_22514 = (inst_22500 + (1));
var inst_22500__$1 = inst_22514;
var state_22536__$1 = (function (){var statearr_22551 = state_22536;
(statearr_22551[(7)] = inst_22500__$1);

(statearr_22551[(10)] = inst_22513);

return statearr_22551;
})();
var statearr_22552_22578 = state_22536__$1;
(statearr_22552_22578[(2)] = null);

(statearr_22552_22578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (5))){
var inst_22520 = (state_22536[(2)]);
var state_22536__$1 = (function (){var statearr_22553 = state_22536;
(statearr_22553[(11)] = inst_22520);

return statearr_22553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22536__$1,(12),dchan);
} else {
if((state_val_22537 === (14))){
var inst_22522 = (state_22536[(8)]);
var inst_22527 = cljs.core.apply.call(null,f,inst_22522);
var state_22536__$1 = state_22536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22536__$1,(16),out,inst_22527);
} else {
if((state_val_22537 === (16))){
var inst_22529 = (state_22536[(2)]);
var state_22536__$1 = (function (){var statearr_22554 = state_22536;
(statearr_22554[(12)] = inst_22529);

return statearr_22554;
})();
var statearr_22555_22579 = state_22536__$1;
(statearr_22555_22579[(2)] = null);

(statearr_22555_22579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (10))){
var inst_22504 = (state_22536[(2)]);
var inst_22505 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22536__$1 = (function (){var statearr_22556 = state_22536;
(statearr_22556[(13)] = inst_22504);

return statearr_22556;
})();
var statearr_22557_22580 = state_22536__$1;
(statearr_22557_22580[(2)] = inst_22505);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22536__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22537 === (8))){
var inst_22518 = (state_22536[(2)]);
var state_22536__$1 = state_22536;
var statearr_22558_22581 = state_22536__$1;
(statearr_22558_22581[(2)] = inst_22518);

(statearr_22558_22581[(1)] = (5));


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
});})(c__6701__auto___22566,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6645__auto__,c__6701__auto___22566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_22562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22562[(0)] = state_machine__6646__auto__);

(statearr_22562[(1)] = (1));

return statearr_22562;
});
var state_machine__6646__auto____1 = (function (state_22536){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_22536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e22563){if((e22563 instanceof Object)){
var ex__6649__auto__ = e22563;
var statearr_22564_22582 = state_22536;
(statearr_22564_22582[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22583 = state_22536;
state_22536 = G__22583;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_22536){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_22536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___22566,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6703__auto__ = (function (){var statearr_22565 = f__6702__auto__.call(null);
(statearr_22565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___22566);

return statearr_22565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___22566,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6701__auto___22691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___22691,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___22691,out){
return (function (state_22667){
var state_val_22668 = (state_22667[(1)]);
if((state_val_22668 === (7))){
var inst_22646 = (state_22667[(7)]);
var inst_22647 = (state_22667[(8)]);
var inst_22646__$1 = (state_22667[(2)]);
var inst_22647__$1 = cljs.core.nth.call(null,inst_22646__$1,(0),null);
var inst_22648 = cljs.core.nth.call(null,inst_22646__$1,(1),null);
var inst_22649 = (inst_22647__$1 == null);
var state_22667__$1 = (function (){var statearr_22669 = state_22667;
(statearr_22669[(7)] = inst_22646__$1);

(statearr_22669[(8)] = inst_22647__$1);

(statearr_22669[(9)] = inst_22648);

return statearr_22669;
})();
if(cljs.core.truth_(inst_22649)){
var statearr_22670_22692 = state_22667__$1;
(statearr_22670_22692[(1)] = (8));

} else {
var statearr_22671_22693 = state_22667__$1;
(statearr_22671_22693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22668 === (1))){
var inst_22638 = cljs.core.vec.call(null,chs);
var inst_22639 = inst_22638;
var state_22667__$1 = (function (){var statearr_22672 = state_22667;
(statearr_22672[(10)] = inst_22639);

return statearr_22672;
})();
var statearr_22673_22694 = state_22667__$1;
(statearr_22673_22694[(2)] = null);

(statearr_22673_22694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22668 === (4))){
var inst_22639 = (state_22667[(10)]);
var state_22667__$1 = state_22667;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22667__$1,(7),inst_22639);
} else {
if((state_val_22668 === (6))){
var inst_22663 = (state_22667[(2)]);
var state_22667__$1 = state_22667;
var statearr_22674_22695 = state_22667__$1;
(statearr_22674_22695[(2)] = inst_22663);

(statearr_22674_22695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22668 === (3))){
var inst_22665 = (state_22667[(2)]);
var state_22667__$1 = state_22667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22667__$1,inst_22665);
} else {
if((state_val_22668 === (2))){
var inst_22639 = (state_22667[(10)]);
var inst_22641 = cljs.core.count.call(null,inst_22639);
var inst_22642 = (inst_22641 > (0));
var state_22667__$1 = state_22667;
if(cljs.core.truth_(inst_22642)){
var statearr_22676_22696 = state_22667__$1;
(statearr_22676_22696[(1)] = (4));

} else {
var statearr_22677_22697 = state_22667__$1;
(statearr_22677_22697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22668 === (11))){
var inst_22639 = (state_22667[(10)]);
var inst_22656 = (state_22667[(2)]);
var tmp22675 = inst_22639;
var inst_22639__$1 = tmp22675;
var state_22667__$1 = (function (){var statearr_22678 = state_22667;
(statearr_22678[(11)] = inst_22656);

(statearr_22678[(10)] = inst_22639__$1);

return statearr_22678;
})();
var statearr_22679_22698 = state_22667__$1;
(statearr_22679_22698[(2)] = null);

(statearr_22679_22698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22668 === (9))){
var inst_22647 = (state_22667[(8)]);
var state_22667__$1 = state_22667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22667__$1,(11),out,inst_22647);
} else {
if((state_val_22668 === (5))){
var inst_22661 = cljs.core.async.close_BANG_.call(null,out);
var state_22667__$1 = state_22667;
var statearr_22680_22699 = state_22667__$1;
(statearr_22680_22699[(2)] = inst_22661);

(statearr_22680_22699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22668 === (10))){
var inst_22659 = (state_22667[(2)]);
var state_22667__$1 = state_22667;
var statearr_22681_22700 = state_22667__$1;
(statearr_22681_22700[(2)] = inst_22659);

(statearr_22681_22700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22668 === (8))){
var inst_22646 = (state_22667[(7)]);
var inst_22647 = (state_22667[(8)]);
var inst_22648 = (state_22667[(9)]);
var inst_22639 = (state_22667[(10)]);
var inst_22651 = (function (){var c = inst_22648;
var v = inst_22647;
var vec__22644 = inst_22646;
var cs = inst_22639;
return ((function (c,v,vec__22644,cs,inst_22646,inst_22647,inst_22648,inst_22639,state_val_22668,c__6701__auto___22691,out){
return (function (p1__22584_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22584_SHARP_);
});
;})(c,v,vec__22644,cs,inst_22646,inst_22647,inst_22648,inst_22639,state_val_22668,c__6701__auto___22691,out))
})();
var inst_22652 = cljs.core.filterv.call(null,inst_22651,inst_22639);
var inst_22639__$1 = inst_22652;
var state_22667__$1 = (function (){var statearr_22682 = state_22667;
(statearr_22682[(10)] = inst_22639__$1);

return statearr_22682;
})();
var statearr_22683_22701 = state_22667__$1;
(statearr_22683_22701[(2)] = null);

(statearr_22683_22701[(1)] = (2));


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
});})(c__6701__auto___22691,out))
;
return ((function (switch__6645__auto__,c__6701__auto___22691,out){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_22687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22687[(0)] = state_machine__6646__auto__);

(statearr_22687[(1)] = (1));

return statearr_22687;
});
var state_machine__6646__auto____1 = (function (state_22667){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_22667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e22688){if((e22688 instanceof Object)){
var ex__6649__auto__ = e22688;
var statearr_22689_22702 = state_22667;
(statearr_22689_22702[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22703 = state_22667;
state_22667 = G__22703;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_22667){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_22667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___22691,out))
})();
var state__6703__auto__ = (function (){var statearr_22690 = f__6702__auto__.call(null);
(statearr_22690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___22691);

return statearr_22690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___22691,out))
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
var c__6701__auto___22796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___22796,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___22796,out){
return (function (state_22773){
var state_val_22774 = (state_22773[(1)]);
if((state_val_22774 === (7))){
var inst_22755 = (state_22773[(7)]);
var inst_22755__$1 = (state_22773[(2)]);
var inst_22756 = (inst_22755__$1 == null);
var inst_22757 = cljs.core.not.call(null,inst_22756);
var state_22773__$1 = (function (){var statearr_22775 = state_22773;
(statearr_22775[(7)] = inst_22755__$1);

return statearr_22775;
})();
if(inst_22757){
var statearr_22776_22797 = state_22773__$1;
(statearr_22776_22797[(1)] = (8));

} else {
var statearr_22777_22798 = state_22773__$1;
(statearr_22777_22798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (1))){
var inst_22750 = (0);
var state_22773__$1 = (function (){var statearr_22778 = state_22773;
(statearr_22778[(8)] = inst_22750);

return statearr_22778;
})();
var statearr_22779_22799 = state_22773__$1;
(statearr_22779_22799[(2)] = null);

(statearr_22779_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (4))){
var state_22773__$1 = state_22773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22773__$1,(7),ch);
} else {
if((state_val_22774 === (6))){
var inst_22768 = (state_22773[(2)]);
var state_22773__$1 = state_22773;
var statearr_22780_22800 = state_22773__$1;
(statearr_22780_22800[(2)] = inst_22768);

(statearr_22780_22800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (3))){
var inst_22770 = (state_22773[(2)]);
var inst_22771 = cljs.core.async.close_BANG_.call(null,out);
var state_22773__$1 = (function (){var statearr_22781 = state_22773;
(statearr_22781[(9)] = inst_22770);

return statearr_22781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22773__$1,inst_22771);
} else {
if((state_val_22774 === (2))){
var inst_22750 = (state_22773[(8)]);
var inst_22752 = (inst_22750 < n);
var state_22773__$1 = state_22773;
if(cljs.core.truth_(inst_22752)){
var statearr_22782_22801 = state_22773__$1;
(statearr_22782_22801[(1)] = (4));

} else {
var statearr_22783_22802 = state_22773__$1;
(statearr_22783_22802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (11))){
var inst_22750 = (state_22773[(8)]);
var inst_22760 = (state_22773[(2)]);
var inst_22761 = (inst_22750 + (1));
var inst_22750__$1 = inst_22761;
var state_22773__$1 = (function (){var statearr_22784 = state_22773;
(statearr_22784[(10)] = inst_22760);

(statearr_22784[(8)] = inst_22750__$1);

return statearr_22784;
})();
var statearr_22785_22803 = state_22773__$1;
(statearr_22785_22803[(2)] = null);

(statearr_22785_22803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (9))){
var state_22773__$1 = state_22773;
var statearr_22786_22804 = state_22773__$1;
(statearr_22786_22804[(2)] = null);

(statearr_22786_22804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (5))){
var state_22773__$1 = state_22773;
var statearr_22787_22805 = state_22773__$1;
(statearr_22787_22805[(2)] = null);

(statearr_22787_22805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (10))){
var inst_22765 = (state_22773[(2)]);
var state_22773__$1 = state_22773;
var statearr_22788_22806 = state_22773__$1;
(statearr_22788_22806[(2)] = inst_22765);

(statearr_22788_22806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (8))){
var inst_22755 = (state_22773[(7)]);
var state_22773__$1 = state_22773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22773__$1,(11),out,inst_22755);
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
});})(c__6701__auto___22796,out))
;
return ((function (switch__6645__auto__,c__6701__auto___22796,out){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_22792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22792[(0)] = state_machine__6646__auto__);

(statearr_22792[(1)] = (1));

return statearr_22792;
});
var state_machine__6646__auto____1 = (function (state_22773){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_22773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e22793){if((e22793 instanceof Object)){
var ex__6649__auto__ = e22793;
var statearr_22794_22807 = state_22773;
(statearr_22794_22807[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22808 = state_22773;
state_22773 = G__22808;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_22773){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_22773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___22796,out))
})();
var state__6703__auto__ = (function (){var statearr_22795 = f__6702__auto__.call(null);
(statearr_22795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___22796);

return statearr_22795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___22796,out))
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
if(typeof cljs.core.async.t22816 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22816 = (function (ch,f,map_LT_,meta22817){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22817 = meta22817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22816.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22816.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22819 = (function (fn1,_,meta22817,map_LT_,f,ch,meta22820){
this.fn1 = fn1;
this._ = _;
this.meta22817 = meta22817;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22820 = meta22820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22819.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22809_SHARP_){
return f1.call(null,(((p1__22809_SHARP_ == null))?null:self__.f.call(null,p1__22809_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22821){
var self__ = this;
var _22821__$1 = this;
return self__.meta22820;
});})(___$1))
;

cljs.core.async.t22819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22821,meta22820__$1){
var self__ = this;
var _22821__$1 = this;
return (new cljs.core.async.t22819(self__.fn1,self__._,self__.meta22817,self__.map_LT_,self__.f,self__.ch,meta22820__$1));
});})(___$1))
;

cljs.core.async.t22819.cljs$lang$type = true;

cljs.core.async.t22819.cljs$lang$ctorStr = "cljs.core.async/t22819";

cljs.core.async.t22819.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22819");
});})(___$1))
;

cljs.core.async.__GT_t22819 = ((function (___$1){
return (function __GT_t22819(fn1__$1,___$2,meta22817__$1,map_LT___$1,f__$1,ch__$1,meta22820){
return (new cljs.core.async.t22819(fn1__$1,___$2,meta22817__$1,map_LT___$1,f__$1,ch__$1,meta22820));
});})(___$1))
;

}

return (new cljs.core.async.t22819(fn1,___$1,self__.meta22817,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22816.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22818){
var self__ = this;
var _22818__$1 = this;
return self__.meta22817;
});

cljs.core.async.t22816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22818,meta22817__$1){
var self__ = this;
var _22818__$1 = this;
return (new cljs.core.async.t22816(self__.ch,self__.f,self__.map_LT_,meta22817__$1));
});

cljs.core.async.t22816.cljs$lang$type = true;

cljs.core.async.t22816.cljs$lang$ctorStr = "cljs.core.async/t22816";

cljs.core.async.t22816.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22816");
});

cljs.core.async.__GT_t22816 = (function __GT_t22816(ch__$1,f__$1,map_LT___$1,meta22817){
return (new cljs.core.async.t22816(ch__$1,f__$1,map_LT___$1,meta22817));
});

}

return (new cljs.core.async.t22816(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22825 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22825 = (function (ch,f,map_GT_,meta22826){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22826 = meta22826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22825.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22825.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22825.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22827){
var self__ = this;
var _22827__$1 = this;
return self__.meta22826;
});

cljs.core.async.t22825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22827,meta22826__$1){
var self__ = this;
var _22827__$1 = this;
return (new cljs.core.async.t22825(self__.ch,self__.f,self__.map_GT_,meta22826__$1));
});

cljs.core.async.t22825.cljs$lang$type = true;

cljs.core.async.t22825.cljs$lang$ctorStr = "cljs.core.async/t22825";

cljs.core.async.t22825.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22825");
});

cljs.core.async.__GT_t22825 = (function __GT_t22825(ch__$1,f__$1,map_GT___$1,meta22826){
return (new cljs.core.async.t22825(ch__$1,f__$1,map_GT___$1,meta22826));
});

}

return (new cljs.core.async.t22825(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22831 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22831 = (function (ch,p,filter_GT_,meta22832){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22832 = meta22832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22831.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22831.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22831.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22831.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22831.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22831.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22831.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22833){
var self__ = this;
var _22833__$1 = this;
return self__.meta22832;
});

cljs.core.async.t22831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22833,meta22832__$1){
var self__ = this;
var _22833__$1 = this;
return (new cljs.core.async.t22831(self__.ch,self__.p,self__.filter_GT_,meta22832__$1));
});

cljs.core.async.t22831.cljs$lang$type = true;

cljs.core.async.t22831.cljs$lang$ctorStr = "cljs.core.async/t22831";

cljs.core.async.t22831.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22831");
});

cljs.core.async.__GT_t22831 = (function __GT_t22831(ch__$1,p__$1,filter_GT___$1,meta22832){
return (new cljs.core.async.t22831(ch__$1,p__$1,filter_GT___$1,meta22832));
});

}

return (new cljs.core.async.t22831(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6701__auto___22916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___22916,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___22916,out){
return (function (state_22895){
var state_val_22896 = (state_22895[(1)]);
if((state_val_22896 === (7))){
var inst_22891 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
var statearr_22897_22917 = state_22895__$1;
(statearr_22897_22917[(2)] = inst_22891);

(statearr_22897_22917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (1))){
var state_22895__$1 = state_22895;
var statearr_22898_22918 = state_22895__$1;
(statearr_22898_22918[(2)] = null);

(statearr_22898_22918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (4))){
var inst_22877 = (state_22895[(7)]);
var inst_22877__$1 = (state_22895[(2)]);
var inst_22878 = (inst_22877__$1 == null);
var state_22895__$1 = (function (){var statearr_22899 = state_22895;
(statearr_22899[(7)] = inst_22877__$1);

return statearr_22899;
})();
if(cljs.core.truth_(inst_22878)){
var statearr_22900_22919 = state_22895__$1;
(statearr_22900_22919[(1)] = (5));

} else {
var statearr_22901_22920 = state_22895__$1;
(statearr_22901_22920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (6))){
var inst_22877 = (state_22895[(7)]);
var inst_22882 = p.call(null,inst_22877);
var state_22895__$1 = state_22895;
if(cljs.core.truth_(inst_22882)){
var statearr_22902_22921 = state_22895__$1;
(statearr_22902_22921[(1)] = (8));

} else {
var statearr_22903_22922 = state_22895__$1;
(statearr_22903_22922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (3))){
var inst_22893 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22895__$1,inst_22893);
} else {
if((state_val_22896 === (2))){
var state_22895__$1 = state_22895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22895__$1,(4),ch);
} else {
if((state_val_22896 === (11))){
var inst_22885 = (state_22895[(2)]);
var state_22895__$1 = state_22895;
var statearr_22904_22923 = state_22895__$1;
(statearr_22904_22923[(2)] = inst_22885);

(statearr_22904_22923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (9))){
var state_22895__$1 = state_22895;
var statearr_22905_22924 = state_22895__$1;
(statearr_22905_22924[(2)] = null);

(statearr_22905_22924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (5))){
var inst_22880 = cljs.core.async.close_BANG_.call(null,out);
var state_22895__$1 = state_22895;
var statearr_22906_22925 = state_22895__$1;
(statearr_22906_22925[(2)] = inst_22880);

(statearr_22906_22925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (10))){
var inst_22888 = (state_22895[(2)]);
var state_22895__$1 = (function (){var statearr_22907 = state_22895;
(statearr_22907[(8)] = inst_22888);

return statearr_22907;
})();
var statearr_22908_22926 = state_22895__$1;
(statearr_22908_22926[(2)] = null);

(statearr_22908_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22896 === (8))){
var inst_22877 = (state_22895[(7)]);
var state_22895__$1 = state_22895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22895__$1,(11),out,inst_22877);
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
});})(c__6701__auto___22916,out))
;
return ((function (switch__6645__auto__,c__6701__auto___22916,out){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_22912 = [null,null,null,null,null,null,null,null,null];
(statearr_22912[(0)] = state_machine__6646__auto__);

(statearr_22912[(1)] = (1));

return statearr_22912;
});
var state_machine__6646__auto____1 = (function (state_22895){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_22895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e22913){if((e22913 instanceof Object)){
var ex__6649__auto__ = e22913;
var statearr_22914_22927 = state_22895;
(statearr_22914_22927[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22928 = state_22895;
state_22895 = G__22928;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_22895){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_22895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___22916,out))
})();
var state__6703__auto__ = (function (){var statearr_22915 = f__6702__auto__.call(null);
(statearr_22915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___22916);

return statearr_22915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___22916,out))
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
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto__){
return (function (state_23094){
var state_val_23095 = (state_23094[(1)]);
if((state_val_23095 === (7))){
var inst_23090 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23096_23137 = state_23094__$1;
(statearr_23096_23137[(2)] = inst_23090);

(statearr_23096_23137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (20))){
var inst_23060 = (state_23094[(7)]);
var inst_23071 = (state_23094[(2)]);
var inst_23072 = cljs.core.next.call(null,inst_23060);
var inst_23046 = inst_23072;
var inst_23047 = null;
var inst_23048 = (0);
var inst_23049 = (0);
var state_23094__$1 = (function (){var statearr_23097 = state_23094;
(statearr_23097[(8)] = inst_23047);

(statearr_23097[(9)] = inst_23049);

(statearr_23097[(10)] = inst_23048);

(statearr_23097[(11)] = inst_23071);

(statearr_23097[(12)] = inst_23046);

return statearr_23097;
})();
var statearr_23098_23138 = state_23094__$1;
(statearr_23098_23138[(2)] = null);

(statearr_23098_23138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (1))){
var state_23094__$1 = state_23094;
var statearr_23099_23139 = state_23094__$1;
(statearr_23099_23139[(2)] = null);

(statearr_23099_23139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (4))){
var inst_23035 = (state_23094[(13)]);
var inst_23035__$1 = (state_23094[(2)]);
var inst_23036 = (inst_23035__$1 == null);
var state_23094__$1 = (function (){var statearr_23100 = state_23094;
(statearr_23100[(13)] = inst_23035__$1);

return statearr_23100;
})();
if(cljs.core.truth_(inst_23036)){
var statearr_23101_23140 = state_23094__$1;
(statearr_23101_23140[(1)] = (5));

} else {
var statearr_23102_23141 = state_23094__$1;
(statearr_23102_23141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (15))){
var state_23094__$1 = state_23094;
var statearr_23106_23142 = state_23094__$1;
(statearr_23106_23142[(2)] = null);

(statearr_23106_23142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (21))){
var state_23094__$1 = state_23094;
var statearr_23107_23143 = state_23094__$1;
(statearr_23107_23143[(2)] = null);

(statearr_23107_23143[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (13))){
var inst_23047 = (state_23094[(8)]);
var inst_23049 = (state_23094[(9)]);
var inst_23048 = (state_23094[(10)]);
var inst_23046 = (state_23094[(12)]);
var inst_23056 = (state_23094[(2)]);
var inst_23057 = (inst_23049 + (1));
var tmp23103 = inst_23047;
var tmp23104 = inst_23048;
var tmp23105 = inst_23046;
var inst_23046__$1 = tmp23105;
var inst_23047__$1 = tmp23103;
var inst_23048__$1 = tmp23104;
var inst_23049__$1 = inst_23057;
var state_23094__$1 = (function (){var statearr_23108 = state_23094;
(statearr_23108[(14)] = inst_23056);

(statearr_23108[(8)] = inst_23047__$1);

(statearr_23108[(9)] = inst_23049__$1);

(statearr_23108[(10)] = inst_23048__$1);

(statearr_23108[(12)] = inst_23046__$1);

return statearr_23108;
})();
var statearr_23109_23144 = state_23094__$1;
(statearr_23109_23144[(2)] = null);

(statearr_23109_23144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (22))){
var state_23094__$1 = state_23094;
var statearr_23110_23145 = state_23094__$1;
(statearr_23110_23145[(2)] = null);

(statearr_23110_23145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (6))){
var inst_23035 = (state_23094[(13)]);
var inst_23044 = f.call(null,inst_23035);
var inst_23045 = cljs.core.seq.call(null,inst_23044);
var inst_23046 = inst_23045;
var inst_23047 = null;
var inst_23048 = (0);
var inst_23049 = (0);
var state_23094__$1 = (function (){var statearr_23111 = state_23094;
(statearr_23111[(8)] = inst_23047);

(statearr_23111[(9)] = inst_23049);

(statearr_23111[(10)] = inst_23048);

(statearr_23111[(12)] = inst_23046);

return statearr_23111;
})();
var statearr_23112_23146 = state_23094__$1;
(statearr_23112_23146[(2)] = null);

(statearr_23112_23146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (17))){
var inst_23060 = (state_23094[(7)]);
var inst_23064 = cljs.core.chunk_first.call(null,inst_23060);
var inst_23065 = cljs.core.chunk_rest.call(null,inst_23060);
var inst_23066 = cljs.core.count.call(null,inst_23064);
var inst_23046 = inst_23065;
var inst_23047 = inst_23064;
var inst_23048 = inst_23066;
var inst_23049 = (0);
var state_23094__$1 = (function (){var statearr_23113 = state_23094;
(statearr_23113[(8)] = inst_23047);

(statearr_23113[(9)] = inst_23049);

(statearr_23113[(10)] = inst_23048);

(statearr_23113[(12)] = inst_23046);

return statearr_23113;
})();
var statearr_23114_23147 = state_23094__$1;
(statearr_23114_23147[(2)] = null);

(statearr_23114_23147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (3))){
var inst_23092 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23094__$1,inst_23092);
} else {
if((state_val_23095 === (12))){
var inst_23080 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23115_23148 = state_23094__$1;
(statearr_23115_23148[(2)] = inst_23080);

(statearr_23115_23148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (2))){
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23094__$1,(4),in$);
} else {
if((state_val_23095 === (23))){
var inst_23088 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23116_23149 = state_23094__$1;
(statearr_23116_23149[(2)] = inst_23088);

(statearr_23116_23149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (19))){
var inst_23075 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23117_23150 = state_23094__$1;
(statearr_23117_23150[(2)] = inst_23075);

(statearr_23117_23150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (11))){
var inst_23060 = (state_23094[(7)]);
var inst_23046 = (state_23094[(12)]);
var inst_23060__$1 = cljs.core.seq.call(null,inst_23046);
var state_23094__$1 = (function (){var statearr_23118 = state_23094;
(statearr_23118[(7)] = inst_23060__$1);

return statearr_23118;
})();
if(inst_23060__$1){
var statearr_23119_23151 = state_23094__$1;
(statearr_23119_23151[(1)] = (14));

} else {
var statearr_23120_23152 = state_23094__$1;
(statearr_23120_23152[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (9))){
var inst_23082 = (state_23094[(2)]);
var inst_23083 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23094__$1 = (function (){var statearr_23121 = state_23094;
(statearr_23121[(15)] = inst_23082);

return statearr_23121;
})();
if(cljs.core.truth_(inst_23083)){
var statearr_23122_23153 = state_23094__$1;
(statearr_23122_23153[(1)] = (21));

} else {
var statearr_23123_23154 = state_23094__$1;
(statearr_23123_23154[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (5))){
var inst_23038 = cljs.core.async.close_BANG_.call(null,out);
var state_23094__$1 = state_23094;
var statearr_23124_23155 = state_23094__$1;
(statearr_23124_23155[(2)] = inst_23038);

(statearr_23124_23155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (14))){
var inst_23060 = (state_23094[(7)]);
var inst_23062 = cljs.core.chunked_seq_QMARK_.call(null,inst_23060);
var state_23094__$1 = state_23094;
if(inst_23062){
var statearr_23125_23156 = state_23094__$1;
(statearr_23125_23156[(1)] = (17));

} else {
var statearr_23126_23157 = state_23094__$1;
(statearr_23126_23157[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (16))){
var inst_23078 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23127_23158 = state_23094__$1;
(statearr_23127_23158[(2)] = inst_23078);

(statearr_23127_23158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (10))){
var inst_23047 = (state_23094[(8)]);
var inst_23049 = (state_23094[(9)]);
var inst_23054 = cljs.core._nth.call(null,inst_23047,inst_23049);
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23094__$1,(13),out,inst_23054);
} else {
if((state_val_23095 === (18))){
var inst_23060 = (state_23094[(7)]);
var inst_23069 = cljs.core.first.call(null,inst_23060);
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23094__$1,(20),out,inst_23069);
} else {
if((state_val_23095 === (8))){
var inst_23049 = (state_23094[(9)]);
var inst_23048 = (state_23094[(10)]);
var inst_23051 = (inst_23049 < inst_23048);
var inst_23052 = inst_23051;
var state_23094__$1 = state_23094;
if(cljs.core.truth_(inst_23052)){
var statearr_23128_23159 = state_23094__$1;
(statearr_23128_23159[(1)] = (10));

} else {
var statearr_23129_23160 = state_23094__$1;
(statearr_23129_23160[(1)] = (11));

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
});})(c__6701__auto__))
;
return ((function (switch__6645__auto__,c__6701__auto__){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_23133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23133[(0)] = state_machine__6646__auto__);

(statearr_23133[(1)] = (1));

return statearr_23133;
});
var state_machine__6646__auto____1 = (function (state_23094){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_23094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e23134){if((e23134 instanceof Object)){
var ex__6649__auto__ = e23134;
var statearr_23135_23161 = state_23094;
(statearr_23135_23161[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23162 = state_23094;
state_23094 = G__23162;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_23094){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_23094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto__))
})();
var state__6703__auto__ = (function (){var statearr_23136 = f__6702__auto__.call(null);
(statearr_23136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_23136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__))
);

return c__6701__auto__;
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
var c__6701__auto___23259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___23259,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___23259,out){
return (function (state_23234){
var state_val_23235 = (state_23234[(1)]);
if((state_val_23235 === (7))){
var inst_23229 = (state_23234[(2)]);
var state_23234__$1 = state_23234;
var statearr_23236_23260 = state_23234__$1;
(statearr_23236_23260[(2)] = inst_23229);

(statearr_23236_23260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (1))){
var inst_23211 = null;
var state_23234__$1 = (function (){var statearr_23237 = state_23234;
(statearr_23237[(7)] = inst_23211);

return statearr_23237;
})();
var statearr_23238_23261 = state_23234__$1;
(statearr_23238_23261[(2)] = null);

(statearr_23238_23261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (4))){
var inst_23214 = (state_23234[(8)]);
var inst_23214__$1 = (state_23234[(2)]);
var inst_23215 = (inst_23214__$1 == null);
var inst_23216 = cljs.core.not.call(null,inst_23215);
var state_23234__$1 = (function (){var statearr_23239 = state_23234;
(statearr_23239[(8)] = inst_23214__$1);

return statearr_23239;
})();
if(inst_23216){
var statearr_23240_23262 = state_23234__$1;
(statearr_23240_23262[(1)] = (5));

} else {
var statearr_23241_23263 = state_23234__$1;
(statearr_23241_23263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (6))){
var state_23234__$1 = state_23234;
var statearr_23242_23264 = state_23234__$1;
(statearr_23242_23264[(2)] = null);

(statearr_23242_23264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (3))){
var inst_23231 = (state_23234[(2)]);
var inst_23232 = cljs.core.async.close_BANG_.call(null,out);
var state_23234__$1 = (function (){var statearr_23243 = state_23234;
(statearr_23243[(9)] = inst_23231);

return statearr_23243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23234__$1,inst_23232);
} else {
if((state_val_23235 === (2))){
var state_23234__$1 = state_23234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23234__$1,(4),ch);
} else {
if((state_val_23235 === (11))){
var inst_23214 = (state_23234[(8)]);
var inst_23223 = (state_23234[(2)]);
var inst_23211 = inst_23214;
var state_23234__$1 = (function (){var statearr_23244 = state_23234;
(statearr_23244[(10)] = inst_23223);

(statearr_23244[(7)] = inst_23211);

return statearr_23244;
})();
var statearr_23245_23265 = state_23234__$1;
(statearr_23245_23265[(2)] = null);

(statearr_23245_23265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (9))){
var inst_23214 = (state_23234[(8)]);
var state_23234__$1 = state_23234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23234__$1,(11),out,inst_23214);
} else {
if((state_val_23235 === (5))){
var inst_23211 = (state_23234[(7)]);
var inst_23214 = (state_23234[(8)]);
var inst_23218 = cljs.core._EQ_.call(null,inst_23214,inst_23211);
var state_23234__$1 = state_23234;
if(inst_23218){
var statearr_23247_23266 = state_23234__$1;
(statearr_23247_23266[(1)] = (8));

} else {
var statearr_23248_23267 = state_23234__$1;
(statearr_23248_23267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (10))){
var inst_23226 = (state_23234[(2)]);
var state_23234__$1 = state_23234;
var statearr_23249_23268 = state_23234__$1;
(statearr_23249_23268[(2)] = inst_23226);

(statearr_23249_23268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (8))){
var inst_23211 = (state_23234[(7)]);
var tmp23246 = inst_23211;
var inst_23211__$1 = tmp23246;
var state_23234__$1 = (function (){var statearr_23250 = state_23234;
(statearr_23250[(7)] = inst_23211__$1);

return statearr_23250;
})();
var statearr_23251_23269 = state_23234__$1;
(statearr_23251_23269[(2)] = null);

(statearr_23251_23269[(1)] = (2));


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
});})(c__6701__auto___23259,out))
;
return ((function (switch__6645__auto__,c__6701__auto___23259,out){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_23255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23255[(0)] = state_machine__6646__auto__);

(statearr_23255[(1)] = (1));

return statearr_23255;
});
var state_machine__6646__auto____1 = (function (state_23234){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_23234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e23256){if((e23256 instanceof Object)){
var ex__6649__auto__ = e23256;
var statearr_23257_23270 = state_23234;
(statearr_23257_23270[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23271 = state_23234;
state_23234 = G__23271;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_23234){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_23234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___23259,out))
})();
var state__6703__auto__ = (function (){var statearr_23258 = f__6702__auto__.call(null);
(statearr_23258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___23259);

return statearr_23258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___23259,out))
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
var c__6701__auto___23406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___23406,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___23406,out){
return (function (state_23376){
var state_val_23377 = (state_23376[(1)]);
if((state_val_23377 === (7))){
var inst_23372 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23378_23407 = state_23376__$1;
(statearr_23378_23407[(2)] = inst_23372);

(statearr_23378_23407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (1))){
var inst_23339 = (new Array(n));
var inst_23340 = inst_23339;
var inst_23341 = (0);
var state_23376__$1 = (function (){var statearr_23379 = state_23376;
(statearr_23379[(7)] = inst_23341);

(statearr_23379[(8)] = inst_23340);

return statearr_23379;
})();
var statearr_23380_23408 = state_23376__$1;
(statearr_23380_23408[(2)] = null);

(statearr_23380_23408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (4))){
var inst_23344 = (state_23376[(9)]);
var inst_23344__$1 = (state_23376[(2)]);
var inst_23345 = (inst_23344__$1 == null);
var inst_23346 = cljs.core.not.call(null,inst_23345);
var state_23376__$1 = (function (){var statearr_23381 = state_23376;
(statearr_23381[(9)] = inst_23344__$1);

return statearr_23381;
})();
if(inst_23346){
var statearr_23382_23409 = state_23376__$1;
(statearr_23382_23409[(1)] = (5));

} else {
var statearr_23383_23410 = state_23376__$1;
(statearr_23383_23410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (15))){
var inst_23366 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23384_23411 = state_23376__$1;
(statearr_23384_23411[(2)] = inst_23366);

(statearr_23384_23411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (13))){
var state_23376__$1 = state_23376;
var statearr_23385_23412 = state_23376__$1;
(statearr_23385_23412[(2)] = null);

(statearr_23385_23412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (6))){
var inst_23341 = (state_23376[(7)]);
var inst_23362 = (inst_23341 > (0));
var state_23376__$1 = state_23376;
if(cljs.core.truth_(inst_23362)){
var statearr_23386_23413 = state_23376__$1;
(statearr_23386_23413[(1)] = (12));

} else {
var statearr_23387_23414 = state_23376__$1;
(statearr_23387_23414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (3))){
var inst_23374 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23376__$1,inst_23374);
} else {
if((state_val_23377 === (12))){
var inst_23340 = (state_23376[(8)]);
var inst_23364 = cljs.core.vec.call(null,inst_23340);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23376__$1,(15),out,inst_23364);
} else {
if((state_val_23377 === (2))){
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23376__$1,(4),ch);
} else {
if((state_val_23377 === (11))){
var inst_23356 = (state_23376[(2)]);
var inst_23357 = (new Array(n));
var inst_23340 = inst_23357;
var inst_23341 = (0);
var state_23376__$1 = (function (){var statearr_23388 = state_23376;
(statearr_23388[(10)] = inst_23356);

(statearr_23388[(7)] = inst_23341);

(statearr_23388[(8)] = inst_23340);

return statearr_23388;
})();
var statearr_23389_23415 = state_23376__$1;
(statearr_23389_23415[(2)] = null);

(statearr_23389_23415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (9))){
var inst_23340 = (state_23376[(8)]);
var inst_23354 = cljs.core.vec.call(null,inst_23340);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23376__$1,(11),out,inst_23354);
} else {
if((state_val_23377 === (5))){
var inst_23341 = (state_23376[(7)]);
var inst_23340 = (state_23376[(8)]);
var inst_23344 = (state_23376[(9)]);
var inst_23349 = (state_23376[(11)]);
var inst_23348 = (inst_23340[inst_23341] = inst_23344);
var inst_23349__$1 = (inst_23341 + (1));
var inst_23350 = (inst_23349__$1 < n);
var state_23376__$1 = (function (){var statearr_23390 = state_23376;
(statearr_23390[(12)] = inst_23348);

(statearr_23390[(11)] = inst_23349__$1);

return statearr_23390;
})();
if(cljs.core.truth_(inst_23350)){
var statearr_23391_23416 = state_23376__$1;
(statearr_23391_23416[(1)] = (8));

} else {
var statearr_23392_23417 = state_23376__$1;
(statearr_23392_23417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (14))){
var inst_23369 = (state_23376[(2)]);
var inst_23370 = cljs.core.async.close_BANG_.call(null,out);
var state_23376__$1 = (function (){var statearr_23394 = state_23376;
(statearr_23394[(13)] = inst_23369);

return statearr_23394;
})();
var statearr_23395_23418 = state_23376__$1;
(statearr_23395_23418[(2)] = inst_23370);

(statearr_23395_23418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (10))){
var inst_23360 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23396_23419 = state_23376__$1;
(statearr_23396_23419[(2)] = inst_23360);

(statearr_23396_23419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (8))){
var inst_23340 = (state_23376[(8)]);
var inst_23349 = (state_23376[(11)]);
var tmp23393 = inst_23340;
var inst_23340__$1 = tmp23393;
var inst_23341 = inst_23349;
var state_23376__$1 = (function (){var statearr_23397 = state_23376;
(statearr_23397[(7)] = inst_23341);

(statearr_23397[(8)] = inst_23340__$1);

return statearr_23397;
})();
var statearr_23398_23420 = state_23376__$1;
(statearr_23398_23420[(2)] = null);

(statearr_23398_23420[(1)] = (2));


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
});})(c__6701__auto___23406,out))
;
return ((function (switch__6645__auto__,c__6701__auto___23406,out){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_23402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23402[(0)] = state_machine__6646__auto__);

(statearr_23402[(1)] = (1));

return statearr_23402;
});
var state_machine__6646__auto____1 = (function (state_23376){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_23376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e23403){if((e23403 instanceof Object)){
var ex__6649__auto__ = e23403;
var statearr_23404_23421 = state_23376;
(statearr_23404_23421[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23422 = state_23376;
state_23376 = G__23422;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_23376){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_23376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___23406,out))
})();
var state__6703__auto__ = (function (){var statearr_23405 = f__6702__auto__.call(null);
(statearr_23405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___23406);

return statearr_23405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___23406,out))
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
var c__6701__auto___23565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___23565,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6645__auto__ = ((function (c__6701__auto___23565,out){
return (function (state_23535){
var state_val_23536 = (state_23535[(1)]);
if((state_val_23536 === (7))){
var inst_23531 = (state_23535[(2)]);
var state_23535__$1 = state_23535;
var statearr_23537_23566 = state_23535__$1;
(statearr_23537_23566[(2)] = inst_23531);

(statearr_23537_23566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (1))){
var inst_23494 = [];
var inst_23495 = inst_23494;
var inst_23496 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23535__$1 = (function (){var statearr_23538 = state_23535;
(statearr_23538[(7)] = inst_23496);

(statearr_23538[(8)] = inst_23495);

return statearr_23538;
})();
var statearr_23539_23567 = state_23535__$1;
(statearr_23539_23567[(2)] = null);

(statearr_23539_23567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (4))){
var inst_23499 = (state_23535[(9)]);
var inst_23499__$1 = (state_23535[(2)]);
var inst_23500 = (inst_23499__$1 == null);
var inst_23501 = cljs.core.not.call(null,inst_23500);
var state_23535__$1 = (function (){var statearr_23540 = state_23535;
(statearr_23540[(9)] = inst_23499__$1);

return statearr_23540;
})();
if(inst_23501){
var statearr_23541_23568 = state_23535__$1;
(statearr_23541_23568[(1)] = (5));

} else {
var statearr_23542_23569 = state_23535__$1;
(statearr_23542_23569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (15))){
var inst_23525 = (state_23535[(2)]);
var state_23535__$1 = state_23535;
var statearr_23543_23570 = state_23535__$1;
(statearr_23543_23570[(2)] = inst_23525);

(statearr_23543_23570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (13))){
var state_23535__$1 = state_23535;
var statearr_23544_23571 = state_23535__$1;
(statearr_23544_23571[(2)] = null);

(statearr_23544_23571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (6))){
var inst_23495 = (state_23535[(8)]);
var inst_23520 = inst_23495.length;
var inst_23521 = (inst_23520 > (0));
var state_23535__$1 = state_23535;
if(cljs.core.truth_(inst_23521)){
var statearr_23545_23572 = state_23535__$1;
(statearr_23545_23572[(1)] = (12));

} else {
var statearr_23546_23573 = state_23535__$1;
(statearr_23546_23573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (3))){
var inst_23533 = (state_23535[(2)]);
var state_23535__$1 = state_23535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23535__$1,inst_23533);
} else {
if((state_val_23536 === (12))){
var inst_23495 = (state_23535[(8)]);
var inst_23523 = cljs.core.vec.call(null,inst_23495);
var state_23535__$1 = state_23535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23535__$1,(15),out,inst_23523);
} else {
if((state_val_23536 === (2))){
var state_23535__$1 = state_23535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23535__$1,(4),ch);
} else {
if((state_val_23536 === (11))){
var inst_23503 = (state_23535[(10)]);
var inst_23499 = (state_23535[(9)]);
var inst_23513 = (state_23535[(2)]);
var inst_23514 = [];
var inst_23515 = inst_23514.push(inst_23499);
var inst_23495 = inst_23514;
var inst_23496 = inst_23503;
var state_23535__$1 = (function (){var statearr_23547 = state_23535;
(statearr_23547[(7)] = inst_23496);

(statearr_23547[(11)] = inst_23515);

(statearr_23547[(8)] = inst_23495);

(statearr_23547[(12)] = inst_23513);

return statearr_23547;
})();
var statearr_23548_23574 = state_23535__$1;
(statearr_23548_23574[(2)] = null);

(statearr_23548_23574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (9))){
var inst_23495 = (state_23535[(8)]);
var inst_23511 = cljs.core.vec.call(null,inst_23495);
var state_23535__$1 = state_23535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23535__$1,(11),out,inst_23511);
} else {
if((state_val_23536 === (5))){
var inst_23503 = (state_23535[(10)]);
var inst_23496 = (state_23535[(7)]);
var inst_23499 = (state_23535[(9)]);
var inst_23503__$1 = f.call(null,inst_23499);
var inst_23504 = cljs.core._EQ_.call(null,inst_23503__$1,inst_23496);
var inst_23505 = cljs.core.keyword_identical_QMARK_.call(null,inst_23496,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23506 = (inst_23504) || (inst_23505);
var state_23535__$1 = (function (){var statearr_23549 = state_23535;
(statearr_23549[(10)] = inst_23503__$1);

return statearr_23549;
})();
if(cljs.core.truth_(inst_23506)){
var statearr_23550_23575 = state_23535__$1;
(statearr_23550_23575[(1)] = (8));

} else {
var statearr_23551_23576 = state_23535__$1;
(statearr_23551_23576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (14))){
var inst_23528 = (state_23535[(2)]);
var inst_23529 = cljs.core.async.close_BANG_.call(null,out);
var state_23535__$1 = (function (){var statearr_23553 = state_23535;
(statearr_23553[(13)] = inst_23528);

return statearr_23553;
})();
var statearr_23554_23577 = state_23535__$1;
(statearr_23554_23577[(2)] = inst_23529);

(statearr_23554_23577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (10))){
var inst_23518 = (state_23535[(2)]);
var state_23535__$1 = state_23535;
var statearr_23555_23578 = state_23535__$1;
(statearr_23555_23578[(2)] = inst_23518);

(statearr_23555_23578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23536 === (8))){
var inst_23503 = (state_23535[(10)]);
var inst_23499 = (state_23535[(9)]);
var inst_23495 = (state_23535[(8)]);
var inst_23508 = inst_23495.push(inst_23499);
var tmp23552 = inst_23495;
var inst_23495__$1 = tmp23552;
var inst_23496 = inst_23503;
var state_23535__$1 = (function (){var statearr_23556 = state_23535;
(statearr_23556[(7)] = inst_23496);

(statearr_23556[(14)] = inst_23508);

(statearr_23556[(8)] = inst_23495__$1);

return statearr_23556;
})();
var statearr_23557_23579 = state_23535__$1;
(statearr_23557_23579[(2)] = null);

(statearr_23557_23579[(1)] = (2));


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
});})(c__6701__auto___23565,out))
;
return ((function (switch__6645__auto__,c__6701__auto___23565,out){
return (function() {
var state_machine__6646__auto__ = null;
var state_machine__6646__auto____0 = (function (){
var statearr_23561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23561[(0)] = state_machine__6646__auto__);

(statearr_23561[(1)] = (1));

return statearr_23561;
});
var state_machine__6646__auto____1 = (function (state_23535){
while(true){
var ret_value__6647__auto__ = (function (){try{while(true){
var result__6648__auto__ = switch__6645__auto__.call(null,state_23535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6648__auto__;
}
break;
}
}catch (e23562){if((e23562 instanceof Object)){
var ex__6649__auto__ = e23562;
var statearr_23563_23580 = state_23535;
(statearr_23563_23580[(5)] = ex__6649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23581 = state_23535;
state_23535 = G__23581;
continue;
} else {
return ret_value__6647__auto__;
}
break;
}
});
state_machine__6646__auto__ = function(state_23535){
switch(arguments.length){
case 0:
return state_machine__6646__auto____0.call(this);
case 1:
return state_machine__6646__auto____1.call(this,state_23535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6646__auto____0;
state_machine__6646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6646__auto____1;
return state_machine__6646__auto__;
})()
;})(switch__6645__auto__,c__6701__auto___23565,out))
})();
var state__6703__auto__ = (function (){var statearr_23564 = f__6702__auto__.call(null);
(statearr_23564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___23565);

return statearr_23564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___23565,out))
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
