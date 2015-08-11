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
if(typeof cljs.core.async.t20668 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20668 = (function (f,fn_handler,meta20669){
this.f = f;
this.fn_handler = fn_handler;
this.meta20669 = meta20669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20668.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20670){
var self__ = this;
var _20670__$1 = this;
return self__.meta20669;
});

cljs.core.async.t20668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20670,meta20669__$1){
var self__ = this;
var _20670__$1 = this;
return (new cljs.core.async.t20668(self__.f,self__.fn_handler,meta20669__$1));
});

cljs.core.async.t20668.cljs$lang$type = true;

cljs.core.async.t20668.cljs$lang$ctorStr = "cljs.core.async/t20668";

cljs.core.async.t20668.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20668");
});

cljs.core.async.__GT_t20668 = (function __GT_t20668(f__$1,fn_handler__$1,meta20669){
return (new cljs.core.async.t20668(f__$1,fn_handler__$1,meta20669));
});

}

return (new cljs.core.async.t20668(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__20672 = buff;
if(G__20672){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__20672.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20672.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20672);
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
var val_20673 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20673);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20673,ret){
return (function (){
return fn1.call(null,val_20673);
});})(val_20673,ret))
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
var n__4643__auto___20674 = n;
var x_20675 = (0);
while(true){
if((x_20675 < n__4643__auto___20674)){
(a[x_20675] = (0));

var G__20676 = (x_20675 + (1));
x_20675 = G__20676;
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

var G__20677 = (i + (1));
i = G__20677;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20681 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20681 = (function (flag,alt_flag,meta20682){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20682 = meta20682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20681.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20683){
var self__ = this;
var _20683__$1 = this;
return self__.meta20682;
});})(flag))
;

cljs.core.async.t20681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20683,meta20682__$1){
var self__ = this;
var _20683__$1 = this;
return (new cljs.core.async.t20681(self__.flag,self__.alt_flag,meta20682__$1));
});})(flag))
;

cljs.core.async.t20681.cljs$lang$type = true;

cljs.core.async.t20681.cljs$lang$ctorStr = "cljs.core.async/t20681";

cljs.core.async.t20681.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20681");
});})(flag))
;

cljs.core.async.__GT_t20681 = ((function (flag){
return (function __GT_t20681(flag__$1,alt_flag__$1,meta20682){
return (new cljs.core.async.t20681(flag__$1,alt_flag__$1,meta20682));
});})(flag))
;

}

return (new cljs.core.async.t20681(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20687 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20687 = (function (cb,flag,alt_handler,meta20688){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20688 = meta20688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20689){
var self__ = this;
var _20689__$1 = this;
return self__.meta20688;
});

cljs.core.async.t20687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20689,meta20688__$1){
var self__ = this;
var _20689__$1 = this;
return (new cljs.core.async.t20687(self__.cb,self__.flag,self__.alt_handler,meta20688__$1));
});

cljs.core.async.t20687.cljs$lang$type = true;

cljs.core.async.t20687.cljs$lang$ctorStr = "cljs.core.async/t20687";

cljs.core.async.t20687.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20687");
});

cljs.core.async.__GT_t20687 = (function __GT_t20687(cb__$1,flag__$1,alt_handler__$1,meta20688){
return (new cljs.core.async.t20687(cb__$1,flag__$1,alt_handler__$1,meta20688));
});

}

return (new cljs.core.async.t20687(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__20690_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20690_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20691_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20691_SHARP_,port], null));
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
var G__20692 = (i + (1));
i = G__20692;
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
var alts_BANG___delegate = function (ports,p__20693){
var map__20695 = p__20693;
var map__20695__$1 = ((cljs.core.seq_QMARK_.call(null,map__20695))?cljs.core.apply.call(null,cljs.core.hash_map,map__20695):map__20695);
var opts = map__20695__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20693 = null;
if (arguments.length > 1) {
  p__20693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20693);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20696){
var ports = cljs.core.first(arglist__20696);
var p__20693 = cljs.core.rest(arglist__20696);
return alts_BANG___delegate(ports,p__20693);
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
var c__6771__auto___20791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___20791){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___20791){
return (function (state_20767){
var state_val_20768 = (state_20767[(1)]);
if((state_val_20768 === (7))){
var inst_20763 = (state_20767[(2)]);
var state_20767__$1 = state_20767;
var statearr_20769_20792 = state_20767__$1;
(statearr_20769_20792[(2)] = inst_20763);

(statearr_20769_20792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (1))){
var state_20767__$1 = state_20767;
var statearr_20770_20793 = state_20767__$1;
(statearr_20770_20793[(2)] = null);

(statearr_20770_20793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (4))){
var inst_20746 = (state_20767[(7)]);
var inst_20746__$1 = (state_20767[(2)]);
var inst_20747 = (inst_20746__$1 == null);
var state_20767__$1 = (function (){var statearr_20771 = state_20767;
(statearr_20771[(7)] = inst_20746__$1);

return statearr_20771;
})();
if(cljs.core.truth_(inst_20747)){
var statearr_20772_20794 = state_20767__$1;
(statearr_20772_20794[(1)] = (5));

} else {
var statearr_20773_20795 = state_20767__$1;
(statearr_20773_20795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (13))){
var state_20767__$1 = state_20767;
var statearr_20774_20796 = state_20767__$1;
(statearr_20774_20796[(2)] = null);

(statearr_20774_20796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (6))){
var inst_20746 = (state_20767[(7)]);
var state_20767__$1 = state_20767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20767__$1,(11),to,inst_20746);
} else {
if((state_val_20768 === (3))){
var inst_20765 = (state_20767[(2)]);
var state_20767__$1 = state_20767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20767__$1,inst_20765);
} else {
if((state_val_20768 === (12))){
var state_20767__$1 = state_20767;
var statearr_20775_20797 = state_20767__$1;
(statearr_20775_20797[(2)] = null);

(statearr_20775_20797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (2))){
var state_20767__$1 = state_20767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20767__$1,(4),from);
} else {
if((state_val_20768 === (11))){
var inst_20756 = (state_20767[(2)]);
var state_20767__$1 = state_20767;
if(cljs.core.truth_(inst_20756)){
var statearr_20776_20798 = state_20767__$1;
(statearr_20776_20798[(1)] = (12));

} else {
var statearr_20777_20799 = state_20767__$1;
(statearr_20777_20799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (9))){
var state_20767__$1 = state_20767;
var statearr_20778_20800 = state_20767__$1;
(statearr_20778_20800[(2)] = null);

(statearr_20778_20800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (5))){
var state_20767__$1 = state_20767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20779_20801 = state_20767__$1;
(statearr_20779_20801[(1)] = (8));

} else {
var statearr_20780_20802 = state_20767__$1;
(statearr_20780_20802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (14))){
var inst_20761 = (state_20767[(2)]);
var state_20767__$1 = state_20767;
var statearr_20781_20803 = state_20767__$1;
(statearr_20781_20803[(2)] = inst_20761);

(statearr_20781_20803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (10))){
var inst_20753 = (state_20767[(2)]);
var state_20767__$1 = state_20767;
var statearr_20782_20804 = state_20767__$1;
(statearr_20782_20804[(2)] = inst_20753);

(statearr_20782_20804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20768 === (8))){
var inst_20750 = cljs.core.async.close_BANG_.call(null,to);
var state_20767__$1 = state_20767;
var statearr_20783_20805 = state_20767__$1;
(statearr_20783_20805[(2)] = inst_20750);

(statearr_20783_20805[(1)] = (10));


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
});})(c__6771__auto___20791))
;
return ((function (switch__6715__auto__,c__6771__auto___20791){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_20787 = [null,null,null,null,null,null,null,null];
(statearr_20787[(0)] = state_machine__6716__auto__);

(statearr_20787[(1)] = (1));

return statearr_20787;
});
var state_machine__6716__auto____1 = (function (state_20767){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_20767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e20788){if((e20788 instanceof Object)){
var ex__6719__auto__ = e20788;
var statearr_20789_20806 = state_20767;
(statearr_20789_20806[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20807 = state_20767;
state_20767 = G__20807;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_20767){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_20767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___20791))
})();
var state__6773__auto__ = (function (){var statearr_20790 = f__6772__auto__.call(null);
(statearr_20790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___20791);

return statearr_20790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___20791))
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
return (function (p__20991){
var vec__20992 = p__20991;
var v = cljs.core.nth.call(null,vec__20992,(0),null);
var p = cljs.core.nth.call(null,vec__20992,(1),null);
var job = vec__20992;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6771__auto___21174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___21174,res,vec__20992,v,p,job,jobs,results){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___21174,res,vec__20992,v,p,job,jobs,results){
return (function (state_20997){
var state_val_20998 = (state_20997[(1)]);
if((state_val_20998 === (2))){
var inst_20994 = (state_20997[(2)]);
var inst_20995 = cljs.core.async.close_BANG_.call(null,res);
var state_20997__$1 = (function (){var statearr_20999 = state_20997;
(statearr_20999[(7)] = inst_20994);

return statearr_20999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20997__$1,inst_20995);
} else {
if((state_val_20998 === (1))){
var state_20997__$1 = state_20997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20997__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6771__auto___21174,res,vec__20992,v,p,job,jobs,results))
;
return ((function (switch__6715__auto__,c__6771__auto___21174,res,vec__20992,v,p,job,jobs,results){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21003 = [null,null,null,null,null,null,null,null];
(statearr_21003[(0)] = state_machine__6716__auto__);

(statearr_21003[(1)] = (1));

return statearr_21003;
});
var state_machine__6716__auto____1 = (function (state_20997){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_20997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21004){if((e21004 instanceof Object)){
var ex__6719__auto__ = e21004;
var statearr_21005_21175 = state_20997;
(statearr_21005_21175[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21176 = state_20997;
state_20997 = G__21176;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_20997){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_20997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___21174,res,vec__20992,v,p,job,jobs,results))
})();
var state__6773__auto__ = (function (){var statearr_21006 = f__6772__auto__.call(null);
(statearr_21006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___21174);

return statearr_21006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___21174,res,vec__20992,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21007){
var vec__21008 = p__21007;
var v = cljs.core.nth.call(null,vec__21008,(0),null);
var p = cljs.core.nth.call(null,vec__21008,(1),null);
var job = vec__21008;
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
var n__4643__auto___21177 = n;
var __21178 = (0);
while(true){
if((__21178 < n__4643__auto___21177)){
var G__21009_21179 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21009_21179) {
case "async":
var c__6771__auto___21181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21178,c__6771__auto___21181,G__21009_21179,n__4643__auto___21177,jobs,results,process,async){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (__21178,c__6771__auto___21181,G__21009_21179,n__4643__auto___21177,jobs,results,process,async){
return (function (state_21022){
var state_val_21023 = (state_21022[(1)]);
if((state_val_21023 === (7))){
var inst_21018 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21024_21182 = state_21022__$1;
(statearr_21024_21182[(2)] = inst_21018);

(statearr_21024_21182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (6))){
var state_21022__$1 = state_21022;
var statearr_21025_21183 = state_21022__$1;
(statearr_21025_21183[(2)] = null);

(statearr_21025_21183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (5))){
var state_21022__$1 = state_21022;
var statearr_21026_21184 = state_21022__$1;
(statearr_21026_21184[(2)] = null);

(statearr_21026_21184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (4))){
var inst_21012 = (state_21022[(2)]);
var inst_21013 = async.call(null,inst_21012);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_21013)){
var statearr_21027_21185 = state_21022__$1;
(statearr_21027_21185[(1)] = (5));

} else {
var statearr_21028_21186 = state_21022__$1;
(statearr_21028_21186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (3))){
var inst_21020 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21022__$1,inst_21020);
} else {
if((state_val_21023 === (2))){
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(4),jobs);
} else {
if((state_val_21023 === (1))){
var state_21022__$1 = state_21022;
var statearr_21029_21187 = state_21022__$1;
(statearr_21029_21187[(2)] = null);

(statearr_21029_21187[(1)] = (2));


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
});})(__21178,c__6771__auto___21181,G__21009_21179,n__4643__auto___21177,jobs,results,process,async))
;
return ((function (__21178,switch__6715__auto__,c__6771__auto___21181,G__21009_21179,n__4643__auto___21177,jobs,results,process,async){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21033 = [null,null,null,null,null,null,null];
(statearr_21033[(0)] = state_machine__6716__auto__);

(statearr_21033[(1)] = (1));

return statearr_21033;
});
var state_machine__6716__auto____1 = (function (state_21022){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21034){if((e21034 instanceof Object)){
var ex__6719__auto__ = e21034;
var statearr_21035_21188 = state_21022;
(statearr_21035_21188[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21189 = state_21022;
state_21022 = G__21189;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21022){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(__21178,switch__6715__auto__,c__6771__auto___21181,G__21009_21179,n__4643__auto___21177,jobs,results,process,async))
})();
var state__6773__auto__ = (function (){var statearr_21036 = f__6772__auto__.call(null);
(statearr_21036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___21181);

return statearr_21036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(__21178,c__6771__auto___21181,G__21009_21179,n__4643__auto___21177,jobs,results,process,async))
);


break;
case "compute":
var c__6771__auto___21190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21178,c__6771__auto___21190,G__21009_21179,n__4643__auto___21177,jobs,results,process,async){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (__21178,c__6771__auto___21190,G__21009_21179,n__4643__auto___21177,jobs,results,process,async){
return (function (state_21049){
var state_val_21050 = (state_21049[(1)]);
if((state_val_21050 === (7))){
var inst_21045 = (state_21049[(2)]);
var state_21049__$1 = state_21049;
var statearr_21051_21191 = state_21049__$1;
(statearr_21051_21191[(2)] = inst_21045);

(statearr_21051_21191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21050 === (6))){
var state_21049__$1 = state_21049;
var statearr_21052_21192 = state_21049__$1;
(statearr_21052_21192[(2)] = null);

(statearr_21052_21192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21050 === (5))){
var state_21049__$1 = state_21049;
var statearr_21053_21193 = state_21049__$1;
(statearr_21053_21193[(2)] = null);

(statearr_21053_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21050 === (4))){
var inst_21039 = (state_21049[(2)]);
var inst_21040 = process.call(null,inst_21039);
var state_21049__$1 = state_21049;
if(cljs.core.truth_(inst_21040)){
var statearr_21054_21194 = state_21049__$1;
(statearr_21054_21194[(1)] = (5));

} else {
var statearr_21055_21195 = state_21049__$1;
(statearr_21055_21195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21050 === (3))){
var inst_21047 = (state_21049[(2)]);
var state_21049__$1 = state_21049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21049__$1,inst_21047);
} else {
if((state_val_21050 === (2))){
var state_21049__$1 = state_21049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21049__$1,(4),jobs);
} else {
if((state_val_21050 === (1))){
var state_21049__$1 = state_21049;
var statearr_21056_21196 = state_21049__$1;
(statearr_21056_21196[(2)] = null);

(statearr_21056_21196[(1)] = (2));


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
});})(__21178,c__6771__auto___21190,G__21009_21179,n__4643__auto___21177,jobs,results,process,async))
;
return ((function (__21178,switch__6715__auto__,c__6771__auto___21190,G__21009_21179,n__4643__auto___21177,jobs,results,process,async){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21060 = [null,null,null,null,null,null,null];
(statearr_21060[(0)] = state_machine__6716__auto__);

(statearr_21060[(1)] = (1));

return statearr_21060;
});
var state_machine__6716__auto____1 = (function (state_21049){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21061){if((e21061 instanceof Object)){
var ex__6719__auto__ = e21061;
var statearr_21062_21197 = state_21049;
(statearr_21062_21197[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21198 = state_21049;
state_21049 = G__21198;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21049){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(__21178,switch__6715__auto__,c__6771__auto___21190,G__21009_21179,n__4643__auto___21177,jobs,results,process,async))
})();
var state__6773__auto__ = (function (){var statearr_21063 = f__6772__auto__.call(null);
(statearr_21063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___21190);

return statearr_21063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(__21178,c__6771__auto___21190,G__21009_21179,n__4643__auto___21177,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21199 = (__21178 + (1));
__21178 = G__21199;
continue;
} else {
}
break;
}

var c__6771__auto___21200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___21200,jobs,results,process,async){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___21200,jobs,results,process,async){
return (function (state_21085){
var state_val_21086 = (state_21085[(1)]);
if((state_val_21086 === (9))){
var inst_21078 = (state_21085[(2)]);
var state_21085__$1 = (function (){var statearr_21087 = state_21085;
(statearr_21087[(7)] = inst_21078);

return statearr_21087;
})();
var statearr_21088_21201 = state_21085__$1;
(statearr_21088_21201[(2)] = null);

(statearr_21088_21201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (8))){
var inst_21071 = (state_21085[(8)]);
var inst_21076 = (state_21085[(2)]);
var state_21085__$1 = (function (){var statearr_21089 = state_21085;
(statearr_21089[(9)] = inst_21076);

return statearr_21089;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21085__$1,(9),results,inst_21071);
} else {
if((state_val_21086 === (7))){
var inst_21081 = (state_21085[(2)]);
var state_21085__$1 = state_21085;
var statearr_21090_21202 = state_21085__$1;
(statearr_21090_21202[(2)] = inst_21081);

(statearr_21090_21202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (6))){
var inst_21066 = (state_21085[(10)]);
var inst_21071 = (state_21085[(8)]);
var inst_21071__$1 = cljs.core.async.chan.call(null,(1));
var inst_21072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21073 = [inst_21066,inst_21071__$1];
var inst_21074 = (new cljs.core.PersistentVector(null,2,(5),inst_21072,inst_21073,null));
var state_21085__$1 = (function (){var statearr_21091 = state_21085;
(statearr_21091[(8)] = inst_21071__$1);

return statearr_21091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21085__$1,(8),jobs,inst_21074);
} else {
if((state_val_21086 === (5))){
var inst_21069 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21085__$1 = state_21085;
var statearr_21092_21203 = state_21085__$1;
(statearr_21092_21203[(2)] = inst_21069);

(statearr_21092_21203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (4))){
var inst_21066 = (state_21085[(10)]);
var inst_21066__$1 = (state_21085[(2)]);
var inst_21067 = (inst_21066__$1 == null);
var state_21085__$1 = (function (){var statearr_21093 = state_21085;
(statearr_21093[(10)] = inst_21066__$1);

return statearr_21093;
})();
if(cljs.core.truth_(inst_21067)){
var statearr_21094_21204 = state_21085__$1;
(statearr_21094_21204[(1)] = (5));

} else {
var statearr_21095_21205 = state_21085__$1;
(statearr_21095_21205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (3))){
var inst_21083 = (state_21085[(2)]);
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21085__$1,inst_21083);
} else {
if((state_val_21086 === (2))){
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21085__$1,(4),from);
} else {
if((state_val_21086 === (1))){
var state_21085__$1 = state_21085;
var statearr_21096_21206 = state_21085__$1;
(statearr_21096_21206[(2)] = null);

(statearr_21096_21206[(1)] = (2));


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
});})(c__6771__auto___21200,jobs,results,process,async))
;
return ((function (switch__6715__auto__,c__6771__auto___21200,jobs,results,process,async){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21100[(0)] = state_machine__6716__auto__);

(statearr_21100[(1)] = (1));

return statearr_21100;
});
var state_machine__6716__auto____1 = (function (state_21085){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21101){if((e21101 instanceof Object)){
var ex__6719__auto__ = e21101;
var statearr_21102_21207 = state_21085;
(statearr_21102_21207[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21208 = state_21085;
state_21085 = G__21208;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21085){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___21200,jobs,results,process,async))
})();
var state__6773__auto__ = (function (){var statearr_21103 = f__6772__auto__.call(null);
(statearr_21103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___21200);

return statearr_21103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___21200,jobs,results,process,async))
);


var c__6771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto__,jobs,results,process,async){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto__,jobs,results,process,async){
return (function (state_21141){
var state_val_21142 = (state_21141[(1)]);
if((state_val_21142 === (7))){
var inst_21137 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21143_21209 = state_21141__$1;
(statearr_21143_21209[(2)] = inst_21137);

(statearr_21143_21209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (20))){
var state_21141__$1 = state_21141;
var statearr_21144_21210 = state_21141__$1;
(statearr_21144_21210[(2)] = null);

(statearr_21144_21210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (1))){
var state_21141__$1 = state_21141;
var statearr_21145_21211 = state_21141__$1;
(statearr_21145_21211[(2)] = null);

(statearr_21145_21211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (4))){
var inst_21106 = (state_21141[(7)]);
var inst_21106__$1 = (state_21141[(2)]);
var inst_21107 = (inst_21106__$1 == null);
var state_21141__$1 = (function (){var statearr_21146 = state_21141;
(statearr_21146[(7)] = inst_21106__$1);

return statearr_21146;
})();
if(cljs.core.truth_(inst_21107)){
var statearr_21147_21212 = state_21141__$1;
(statearr_21147_21212[(1)] = (5));

} else {
var statearr_21148_21213 = state_21141__$1;
(statearr_21148_21213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (15))){
var inst_21119 = (state_21141[(8)]);
var state_21141__$1 = state_21141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21141__$1,(18),to,inst_21119);
} else {
if((state_val_21142 === (21))){
var inst_21132 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21149_21214 = state_21141__$1;
(statearr_21149_21214[(2)] = inst_21132);

(statearr_21149_21214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (13))){
var inst_21134 = (state_21141[(2)]);
var state_21141__$1 = (function (){var statearr_21150 = state_21141;
(statearr_21150[(9)] = inst_21134);

return statearr_21150;
})();
var statearr_21151_21215 = state_21141__$1;
(statearr_21151_21215[(2)] = null);

(statearr_21151_21215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (6))){
var inst_21106 = (state_21141[(7)]);
var state_21141__$1 = state_21141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21141__$1,(11),inst_21106);
} else {
if((state_val_21142 === (17))){
var inst_21127 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21127)){
var statearr_21152_21216 = state_21141__$1;
(statearr_21152_21216[(1)] = (19));

} else {
var statearr_21153_21217 = state_21141__$1;
(statearr_21153_21217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (3))){
var inst_21139 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21141__$1,inst_21139);
} else {
if((state_val_21142 === (12))){
var inst_21116 = (state_21141[(10)]);
var state_21141__$1 = state_21141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21141__$1,(14),inst_21116);
} else {
if((state_val_21142 === (2))){
var state_21141__$1 = state_21141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21141__$1,(4),results);
} else {
if((state_val_21142 === (19))){
var state_21141__$1 = state_21141;
var statearr_21154_21218 = state_21141__$1;
(statearr_21154_21218[(2)] = null);

(statearr_21154_21218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (11))){
var inst_21116 = (state_21141[(2)]);
var state_21141__$1 = (function (){var statearr_21155 = state_21141;
(statearr_21155[(10)] = inst_21116);

return statearr_21155;
})();
var statearr_21156_21219 = state_21141__$1;
(statearr_21156_21219[(2)] = null);

(statearr_21156_21219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (9))){
var state_21141__$1 = state_21141;
var statearr_21157_21220 = state_21141__$1;
(statearr_21157_21220[(2)] = null);

(statearr_21157_21220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (5))){
var state_21141__$1 = state_21141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21158_21221 = state_21141__$1;
(statearr_21158_21221[(1)] = (8));

} else {
var statearr_21159_21222 = state_21141__$1;
(statearr_21159_21222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (14))){
var inst_21121 = (state_21141[(11)]);
var inst_21119 = (state_21141[(8)]);
var inst_21119__$1 = (state_21141[(2)]);
var inst_21120 = (inst_21119__$1 == null);
var inst_21121__$1 = cljs.core.not.call(null,inst_21120);
var state_21141__$1 = (function (){var statearr_21160 = state_21141;
(statearr_21160[(11)] = inst_21121__$1);

(statearr_21160[(8)] = inst_21119__$1);

return statearr_21160;
})();
if(inst_21121__$1){
var statearr_21161_21223 = state_21141__$1;
(statearr_21161_21223[(1)] = (15));

} else {
var statearr_21162_21224 = state_21141__$1;
(statearr_21162_21224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (16))){
var inst_21121 = (state_21141[(11)]);
var state_21141__$1 = state_21141;
var statearr_21163_21225 = state_21141__$1;
(statearr_21163_21225[(2)] = inst_21121);

(statearr_21163_21225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (10))){
var inst_21113 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21164_21226 = state_21141__$1;
(statearr_21164_21226[(2)] = inst_21113);

(statearr_21164_21226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (18))){
var inst_21124 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21165_21227 = state_21141__$1;
(statearr_21165_21227[(2)] = inst_21124);

(statearr_21165_21227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (8))){
var inst_21110 = cljs.core.async.close_BANG_.call(null,to);
var state_21141__$1 = state_21141;
var statearr_21166_21228 = state_21141__$1;
(statearr_21166_21228[(2)] = inst_21110);

(statearr_21166_21228[(1)] = (10));


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
});})(c__6771__auto__,jobs,results,process,async))
;
return ((function (switch__6715__auto__,c__6771__auto__,jobs,results,process,async){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21170[(0)] = state_machine__6716__auto__);

(statearr_21170[(1)] = (1));

return statearr_21170;
});
var state_machine__6716__auto____1 = (function (state_21141){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21171){if((e21171 instanceof Object)){
var ex__6719__auto__ = e21171;
var statearr_21172_21229 = state_21141;
(statearr_21172_21229[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21230 = state_21141;
state_21141 = G__21230;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21141){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto__,jobs,results,process,async))
})();
var state__6773__auto__ = (function (){var statearr_21173 = f__6772__auto__.call(null);
(statearr_21173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto__);

return statearr_21173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto__,jobs,results,process,async))
);

return c__6771__auto__;
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
var c__6771__auto___21331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___21331,tc,fc){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___21331,tc,fc){
return (function (state_21306){
var state_val_21307 = (state_21306[(1)]);
if((state_val_21307 === (7))){
var inst_21302 = (state_21306[(2)]);
var state_21306__$1 = state_21306;
var statearr_21308_21332 = state_21306__$1;
(statearr_21308_21332[(2)] = inst_21302);

(statearr_21308_21332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (1))){
var state_21306__$1 = state_21306;
var statearr_21309_21333 = state_21306__$1;
(statearr_21309_21333[(2)] = null);

(statearr_21309_21333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (4))){
var inst_21283 = (state_21306[(7)]);
var inst_21283__$1 = (state_21306[(2)]);
var inst_21284 = (inst_21283__$1 == null);
var state_21306__$1 = (function (){var statearr_21310 = state_21306;
(statearr_21310[(7)] = inst_21283__$1);

return statearr_21310;
})();
if(cljs.core.truth_(inst_21284)){
var statearr_21311_21334 = state_21306__$1;
(statearr_21311_21334[(1)] = (5));

} else {
var statearr_21312_21335 = state_21306__$1;
(statearr_21312_21335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (13))){
var state_21306__$1 = state_21306;
var statearr_21313_21336 = state_21306__$1;
(statearr_21313_21336[(2)] = null);

(statearr_21313_21336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (6))){
var inst_21283 = (state_21306[(7)]);
var inst_21289 = p.call(null,inst_21283);
var state_21306__$1 = state_21306;
if(cljs.core.truth_(inst_21289)){
var statearr_21314_21337 = state_21306__$1;
(statearr_21314_21337[(1)] = (9));

} else {
var statearr_21315_21338 = state_21306__$1;
(statearr_21315_21338[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (3))){
var inst_21304 = (state_21306[(2)]);
var state_21306__$1 = state_21306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21306__$1,inst_21304);
} else {
if((state_val_21307 === (12))){
var state_21306__$1 = state_21306;
var statearr_21316_21339 = state_21306__$1;
(statearr_21316_21339[(2)] = null);

(statearr_21316_21339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (2))){
var state_21306__$1 = state_21306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21306__$1,(4),ch);
} else {
if((state_val_21307 === (11))){
var inst_21283 = (state_21306[(7)]);
var inst_21293 = (state_21306[(2)]);
var state_21306__$1 = state_21306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21306__$1,(8),inst_21293,inst_21283);
} else {
if((state_val_21307 === (9))){
var state_21306__$1 = state_21306;
var statearr_21317_21340 = state_21306__$1;
(statearr_21317_21340[(2)] = tc);

(statearr_21317_21340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (5))){
var inst_21286 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21287 = cljs.core.async.close_BANG_.call(null,fc);
var state_21306__$1 = (function (){var statearr_21318 = state_21306;
(statearr_21318[(8)] = inst_21286);

return statearr_21318;
})();
var statearr_21319_21341 = state_21306__$1;
(statearr_21319_21341[(2)] = inst_21287);

(statearr_21319_21341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (14))){
var inst_21300 = (state_21306[(2)]);
var state_21306__$1 = state_21306;
var statearr_21320_21342 = state_21306__$1;
(statearr_21320_21342[(2)] = inst_21300);

(statearr_21320_21342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (10))){
var state_21306__$1 = state_21306;
var statearr_21321_21343 = state_21306__$1;
(statearr_21321_21343[(2)] = fc);

(statearr_21321_21343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21307 === (8))){
var inst_21295 = (state_21306[(2)]);
var state_21306__$1 = state_21306;
if(cljs.core.truth_(inst_21295)){
var statearr_21322_21344 = state_21306__$1;
(statearr_21322_21344[(1)] = (12));

} else {
var statearr_21323_21345 = state_21306__$1;
(statearr_21323_21345[(1)] = (13));

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
});})(c__6771__auto___21331,tc,fc))
;
return ((function (switch__6715__auto__,c__6771__auto___21331,tc,fc){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21327 = [null,null,null,null,null,null,null,null,null];
(statearr_21327[(0)] = state_machine__6716__auto__);

(statearr_21327[(1)] = (1));

return statearr_21327;
});
var state_machine__6716__auto____1 = (function (state_21306){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21328){if((e21328 instanceof Object)){
var ex__6719__auto__ = e21328;
var statearr_21329_21346 = state_21306;
(statearr_21329_21346[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21347 = state_21306;
state_21306 = G__21347;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21306){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___21331,tc,fc))
})();
var state__6773__auto__ = (function (){var statearr_21330 = f__6772__auto__.call(null);
(statearr_21330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___21331);

return statearr_21330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___21331,tc,fc))
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
var c__6771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto__){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto__){
return (function (state_21394){
var state_val_21395 = (state_21394[(1)]);
if((state_val_21395 === (7))){
var inst_21390 = (state_21394[(2)]);
var state_21394__$1 = state_21394;
var statearr_21396_21412 = state_21394__$1;
(statearr_21396_21412[(2)] = inst_21390);

(statearr_21396_21412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21395 === (6))){
var inst_21380 = (state_21394[(7)]);
var inst_21383 = (state_21394[(8)]);
var inst_21387 = f.call(null,inst_21380,inst_21383);
var inst_21380__$1 = inst_21387;
var state_21394__$1 = (function (){var statearr_21397 = state_21394;
(statearr_21397[(7)] = inst_21380__$1);

return statearr_21397;
})();
var statearr_21398_21413 = state_21394__$1;
(statearr_21398_21413[(2)] = null);

(statearr_21398_21413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21395 === (5))){
var inst_21380 = (state_21394[(7)]);
var state_21394__$1 = state_21394;
var statearr_21399_21414 = state_21394__$1;
(statearr_21399_21414[(2)] = inst_21380);

(statearr_21399_21414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21395 === (4))){
var inst_21383 = (state_21394[(8)]);
var inst_21383__$1 = (state_21394[(2)]);
var inst_21384 = (inst_21383__$1 == null);
var state_21394__$1 = (function (){var statearr_21400 = state_21394;
(statearr_21400[(8)] = inst_21383__$1);

return statearr_21400;
})();
if(cljs.core.truth_(inst_21384)){
var statearr_21401_21415 = state_21394__$1;
(statearr_21401_21415[(1)] = (5));

} else {
var statearr_21402_21416 = state_21394__$1;
(statearr_21402_21416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21395 === (3))){
var inst_21392 = (state_21394[(2)]);
var state_21394__$1 = state_21394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21394__$1,inst_21392);
} else {
if((state_val_21395 === (2))){
var state_21394__$1 = state_21394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21394__$1,(4),ch);
} else {
if((state_val_21395 === (1))){
var inst_21380 = init;
var state_21394__$1 = (function (){var statearr_21403 = state_21394;
(statearr_21403[(7)] = inst_21380);

return statearr_21403;
})();
var statearr_21404_21417 = state_21394__$1;
(statearr_21404_21417[(2)] = null);

(statearr_21404_21417[(1)] = (2));


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
});})(c__6771__auto__))
;
return ((function (switch__6715__auto__,c__6771__auto__){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21408 = [null,null,null,null,null,null,null,null,null];
(statearr_21408[(0)] = state_machine__6716__auto__);

(statearr_21408[(1)] = (1));

return statearr_21408;
});
var state_machine__6716__auto____1 = (function (state_21394){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21409){if((e21409 instanceof Object)){
var ex__6719__auto__ = e21409;
var statearr_21410_21418 = state_21394;
(statearr_21410_21418[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21419 = state_21394;
state_21394 = G__21419;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21394){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto__))
})();
var state__6773__auto__ = (function (){var statearr_21411 = f__6772__auto__.call(null);
(statearr_21411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto__);

return statearr_21411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto__))
);

return c__6771__auto__;
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
var c__6771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto__){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto__){
return (function (state_21493){
var state_val_21494 = (state_21493[(1)]);
if((state_val_21494 === (7))){
var inst_21475 = (state_21493[(2)]);
var state_21493__$1 = state_21493;
var statearr_21495_21518 = state_21493__$1;
(statearr_21495_21518[(2)] = inst_21475);

(statearr_21495_21518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (1))){
var inst_21469 = cljs.core.seq.call(null,coll);
var inst_21470 = inst_21469;
var state_21493__$1 = (function (){var statearr_21496 = state_21493;
(statearr_21496[(7)] = inst_21470);

return statearr_21496;
})();
var statearr_21497_21519 = state_21493__$1;
(statearr_21497_21519[(2)] = null);

(statearr_21497_21519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (4))){
var inst_21470 = (state_21493[(7)]);
var inst_21473 = cljs.core.first.call(null,inst_21470);
var state_21493__$1 = state_21493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21493__$1,(7),ch,inst_21473);
} else {
if((state_val_21494 === (13))){
var inst_21487 = (state_21493[(2)]);
var state_21493__$1 = state_21493;
var statearr_21498_21520 = state_21493__$1;
(statearr_21498_21520[(2)] = inst_21487);

(statearr_21498_21520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (6))){
var inst_21478 = (state_21493[(2)]);
var state_21493__$1 = state_21493;
if(cljs.core.truth_(inst_21478)){
var statearr_21499_21521 = state_21493__$1;
(statearr_21499_21521[(1)] = (8));

} else {
var statearr_21500_21522 = state_21493__$1;
(statearr_21500_21522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (3))){
var inst_21491 = (state_21493[(2)]);
var state_21493__$1 = state_21493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21493__$1,inst_21491);
} else {
if((state_val_21494 === (12))){
var state_21493__$1 = state_21493;
var statearr_21501_21523 = state_21493__$1;
(statearr_21501_21523[(2)] = null);

(statearr_21501_21523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (2))){
var inst_21470 = (state_21493[(7)]);
var state_21493__$1 = state_21493;
if(cljs.core.truth_(inst_21470)){
var statearr_21502_21524 = state_21493__$1;
(statearr_21502_21524[(1)] = (4));

} else {
var statearr_21503_21525 = state_21493__$1;
(statearr_21503_21525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (11))){
var inst_21484 = cljs.core.async.close_BANG_.call(null,ch);
var state_21493__$1 = state_21493;
var statearr_21504_21526 = state_21493__$1;
(statearr_21504_21526[(2)] = inst_21484);

(statearr_21504_21526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (9))){
var state_21493__$1 = state_21493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21505_21527 = state_21493__$1;
(statearr_21505_21527[(1)] = (11));

} else {
var statearr_21506_21528 = state_21493__$1;
(statearr_21506_21528[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (5))){
var inst_21470 = (state_21493[(7)]);
var state_21493__$1 = state_21493;
var statearr_21507_21529 = state_21493__$1;
(statearr_21507_21529[(2)] = inst_21470);

(statearr_21507_21529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (10))){
var inst_21489 = (state_21493[(2)]);
var state_21493__$1 = state_21493;
var statearr_21508_21530 = state_21493__$1;
(statearr_21508_21530[(2)] = inst_21489);

(statearr_21508_21530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21494 === (8))){
var inst_21470 = (state_21493[(7)]);
var inst_21480 = cljs.core.next.call(null,inst_21470);
var inst_21470__$1 = inst_21480;
var state_21493__$1 = (function (){var statearr_21509 = state_21493;
(statearr_21509[(7)] = inst_21470__$1);

return statearr_21509;
})();
var statearr_21510_21531 = state_21493__$1;
(statearr_21510_21531[(2)] = null);

(statearr_21510_21531[(1)] = (2));


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
});})(c__6771__auto__))
;
return ((function (switch__6715__auto__,c__6771__auto__){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21514 = [null,null,null,null,null,null,null,null];
(statearr_21514[(0)] = state_machine__6716__auto__);

(statearr_21514[(1)] = (1));

return statearr_21514;
});
var state_machine__6716__auto____1 = (function (state_21493){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21515){if((e21515 instanceof Object)){
var ex__6719__auto__ = e21515;
var statearr_21516_21532 = state_21493;
(statearr_21516_21532[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21533 = state_21493;
state_21493 = G__21533;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21493){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto__))
})();
var state__6773__auto__ = (function (){var statearr_21517 = f__6772__auto__.call(null);
(statearr_21517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto__);

return statearr_21517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto__))
);

return c__6771__auto__;
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

cljs.core.async.Mux = (function (){var obj21535 = {};
return obj21535;
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


cljs.core.async.Mult = (function (){var obj21537 = {};
return obj21537;
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
if(typeof cljs.core.async.t21759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21759 = (function (cs,ch,mult,meta21760){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21760 = meta21760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21759.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21759.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21759.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21759.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21759.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21761){
var self__ = this;
var _21761__$1 = this;
return self__.meta21760;
});})(cs))
;

cljs.core.async.t21759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21761,meta21760__$1){
var self__ = this;
var _21761__$1 = this;
return (new cljs.core.async.t21759(self__.cs,self__.ch,self__.mult,meta21760__$1));
});})(cs))
;

cljs.core.async.t21759.cljs$lang$type = true;

cljs.core.async.t21759.cljs$lang$ctorStr = "cljs.core.async/t21759";

cljs.core.async.t21759.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21759");
});})(cs))
;

cljs.core.async.__GT_t21759 = ((function (cs){
return (function __GT_t21759(cs__$1,ch__$1,mult__$1,meta21760){
return (new cljs.core.async.t21759(cs__$1,ch__$1,mult__$1,meta21760));
});})(cs))
;

}

return (new cljs.core.async.t21759(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6771__auto___21980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___21980,cs,m,dchan,dctr,done){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___21980,cs,m,dchan,dctr,done){
return (function (state_21892){
var state_val_21893 = (state_21892[(1)]);
if((state_val_21893 === (7))){
var inst_21888 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21894_21981 = state_21892__$1;
(statearr_21894_21981[(2)] = inst_21888);

(statearr_21894_21981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (20))){
var inst_21793 = (state_21892[(7)]);
var inst_21803 = cljs.core.first.call(null,inst_21793);
var inst_21804 = cljs.core.nth.call(null,inst_21803,(0),null);
var inst_21805 = cljs.core.nth.call(null,inst_21803,(1),null);
var state_21892__$1 = (function (){var statearr_21895 = state_21892;
(statearr_21895[(8)] = inst_21804);

return statearr_21895;
})();
if(cljs.core.truth_(inst_21805)){
var statearr_21896_21982 = state_21892__$1;
(statearr_21896_21982[(1)] = (22));

} else {
var statearr_21897_21983 = state_21892__$1;
(statearr_21897_21983[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (27))){
var inst_21835 = (state_21892[(9)]);
var inst_21840 = (state_21892[(10)]);
var inst_21764 = (state_21892[(11)]);
var inst_21833 = (state_21892[(12)]);
var inst_21840__$1 = cljs.core._nth.call(null,inst_21833,inst_21835);
var inst_21841 = cljs.core.async.put_BANG_.call(null,inst_21840__$1,inst_21764,done);
var state_21892__$1 = (function (){var statearr_21898 = state_21892;
(statearr_21898[(10)] = inst_21840__$1);

return statearr_21898;
})();
if(cljs.core.truth_(inst_21841)){
var statearr_21899_21984 = state_21892__$1;
(statearr_21899_21984[(1)] = (30));

} else {
var statearr_21900_21985 = state_21892__$1;
(statearr_21900_21985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (1))){
var state_21892__$1 = state_21892;
var statearr_21901_21986 = state_21892__$1;
(statearr_21901_21986[(2)] = null);

(statearr_21901_21986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (24))){
var inst_21793 = (state_21892[(7)]);
var inst_21810 = (state_21892[(2)]);
var inst_21811 = cljs.core.next.call(null,inst_21793);
var inst_21773 = inst_21811;
var inst_21774 = null;
var inst_21775 = (0);
var inst_21776 = (0);
var state_21892__$1 = (function (){var statearr_21902 = state_21892;
(statearr_21902[(13)] = inst_21776);

(statearr_21902[(14)] = inst_21775);

(statearr_21902[(15)] = inst_21774);

(statearr_21902[(16)] = inst_21773);

(statearr_21902[(17)] = inst_21810);

return statearr_21902;
})();
var statearr_21903_21987 = state_21892__$1;
(statearr_21903_21987[(2)] = null);

(statearr_21903_21987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (39))){
var state_21892__$1 = state_21892;
var statearr_21907_21988 = state_21892__$1;
(statearr_21907_21988[(2)] = null);

(statearr_21907_21988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (4))){
var inst_21764 = (state_21892[(11)]);
var inst_21764__$1 = (state_21892[(2)]);
var inst_21765 = (inst_21764__$1 == null);
var state_21892__$1 = (function (){var statearr_21908 = state_21892;
(statearr_21908[(11)] = inst_21764__$1);

return statearr_21908;
})();
if(cljs.core.truth_(inst_21765)){
var statearr_21909_21989 = state_21892__$1;
(statearr_21909_21989[(1)] = (5));

} else {
var statearr_21910_21990 = state_21892__$1;
(statearr_21910_21990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (15))){
var inst_21776 = (state_21892[(13)]);
var inst_21775 = (state_21892[(14)]);
var inst_21774 = (state_21892[(15)]);
var inst_21773 = (state_21892[(16)]);
var inst_21789 = (state_21892[(2)]);
var inst_21790 = (inst_21776 + (1));
var tmp21904 = inst_21775;
var tmp21905 = inst_21774;
var tmp21906 = inst_21773;
var inst_21773__$1 = tmp21906;
var inst_21774__$1 = tmp21905;
var inst_21775__$1 = tmp21904;
var inst_21776__$1 = inst_21790;
var state_21892__$1 = (function (){var statearr_21911 = state_21892;
(statearr_21911[(13)] = inst_21776__$1);

(statearr_21911[(14)] = inst_21775__$1);

(statearr_21911[(15)] = inst_21774__$1);

(statearr_21911[(18)] = inst_21789);

(statearr_21911[(16)] = inst_21773__$1);

return statearr_21911;
})();
var statearr_21912_21991 = state_21892__$1;
(statearr_21912_21991[(2)] = null);

(statearr_21912_21991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (21))){
var inst_21814 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21916_21992 = state_21892__$1;
(statearr_21916_21992[(2)] = inst_21814);

(statearr_21916_21992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (31))){
var inst_21840 = (state_21892[(10)]);
var inst_21844 = done.call(null,null);
var inst_21845 = cljs.core.async.untap_STAR_.call(null,m,inst_21840);
var state_21892__$1 = (function (){var statearr_21917 = state_21892;
(statearr_21917[(19)] = inst_21844);

return statearr_21917;
})();
var statearr_21918_21993 = state_21892__$1;
(statearr_21918_21993[(2)] = inst_21845);

(statearr_21918_21993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (32))){
var inst_21832 = (state_21892[(20)]);
var inst_21835 = (state_21892[(9)]);
var inst_21833 = (state_21892[(12)]);
var inst_21834 = (state_21892[(21)]);
var inst_21847 = (state_21892[(2)]);
var inst_21848 = (inst_21835 + (1));
var tmp21913 = inst_21832;
var tmp21914 = inst_21833;
var tmp21915 = inst_21834;
var inst_21832__$1 = tmp21913;
var inst_21833__$1 = tmp21914;
var inst_21834__$1 = tmp21915;
var inst_21835__$1 = inst_21848;
var state_21892__$1 = (function (){var statearr_21919 = state_21892;
(statearr_21919[(22)] = inst_21847);

(statearr_21919[(20)] = inst_21832__$1);

(statearr_21919[(9)] = inst_21835__$1);

(statearr_21919[(12)] = inst_21833__$1);

(statearr_21919[(21)] = inst_21834__$1);

return statearr_21919;
})();
var statearr_21920_21994 = state_21892__$1;
(statearr_21920_21994[(2)] = null);

(statearr_21920_21994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (40))){
var inst_21860 = (state_21892[(23)]);
var inst_21864 = done.call(null,null);
var inst_21865 = cljs.core.async.untap_STAR_.call(null,m,inst_21860);
var state_21892__$1 = (function (){var statearr_21921 = state_21892;
(statearr_21921[(24)] = inst_21864);

return statearr_21921;
})();
var statearr_21922_21995 = state_21892__$1;
(statearr_21922_21995[(2)] = inst_21865);

(statearr_21922_21995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (33))){
var inst_21851 = (state_21892[(25)]);
var inst_21853 = cljs.core.chunked_seq_QMARK_.call(null,inst_21851);
var state_21892__$1 = state_21892;
if(inst_21853){
var statearr_21923_21996 = state_21892__$1;
(statearr_21923_21996[(1)] = (36));

} else {
var statearr_21924_21997 = state_21892__$1;
(statearr_21924_21997[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (13))){
var inst_21783 = (state_21892[(26)]);
var inst_21786 = cljs.core.async.close_BANG_.call(null,inst_21783);
var state_21892__$1 = state_21892;
var statearr_21925_21998 = state_21892__$1;
(statearr_21925_21998[(2)] = inst_21786);

(statearr_21925_21998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (22))){
var inst_21804 = (state_21892[(8)]);
var inst_21807 = cljs.core.async.close_BANG_.call(null,inst_21804);
var state_21892__$1 = state_21892;
var statearr_21926_21999 = state_21892__$1;
(statearr_21926_21999[(2)] = inst_21807);

(statearr_21926_21999[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (36))){
var inst_21851 = (state_21892[(25)]);
var inst_21855 = cljs.core.chunk_first.call(null,inst_21851);
var inst_21856 = cljs.core.chunk_rest.call(null,inst_21851);
var inst_21857 = cljs.core.count.call(null,inst_21855);
var inst_21832 = inst_21856;
var inst_21833 = inst_21855;
var inst_21834 = inst_21857;
var inst_21835 = (0);
var state_21892__$1 = (function (){var statearr_21927 = state_21892;
(statearr_21927[(20)] = inst_21832);

(statearr_21927[(9)] = inst_21835);

(statearr_21927[(12)] = inst_21833);

(statearr_21927[(21)] = inst_21834);

return statearr_21927;
})();
var statearr_21928_22000 = state_21892__$1;
(statearr_21928_22000[(2)] = null);

(statearr_21928_22000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (41))){
var inst_21851 = (state_21892[(25)]);
var inst_21867 = (state_21892[(2)]);
var inst_21868 = cljs.core.next.call(null,inst_21851);
var inst_21832 = inst_21868;
var inst_21833 = null;
var inst_21834 = (0);
var inst_21835 = (0);
var state_21892__$1 = (function (){var statearr_21929 = state_21892;
(statearr_21929[(20)] = inst_21832);

(statearr_21929[(9)] = inst_21835);

(statearr_21929[(27)] = inst_21867);

(statearr_21929[(12)] = inst_21833);

(statearr_21929[(21)] = inst_21834);

return statearr_21929;
})();
var statearr_21930_22001 = state_21892__$1;
(statearr_21930_22001[(2)] = null);

(statearr_21930_22001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (43))){
var state_21892__$1 = state_21892;
var statearr_21931_22002 = state_21892__$1;
(statearr_21931_22002[(2)] = null);

(statearr_21931_22002[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (29))){
var inst_21876 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21932_22003 = state_21892__$1;
(statearr_21932_22003[(2)] = inst_21876);

(statearr_21932_22003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (44))){
var inst_21885 = (state_21892[(2)]);
var state_21892__$1 = (function (){var statearr_21933 = state_21892;
(statearr_21933[(28)] = inst_21885);

return statearr_21933;
})();
var statearr_21934_22004 = state_21892__$1;
(statearr_21934_22004[(2)] = null);

(statearr_21934_22004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (6))){
var inst_21824 = (state_21892[(29)]);
var inst_21823 = cljs.core.deref.call(null,cs);
var inst_21824__$1 = cljs.core.keys.call(null,inst_21823);
var inst_21825 = cljs.core.count.call(null,inst_21824__$1);
var inst_21826 = cljs.core.reset_BANG_.call(null,dctr,inst_21825);
var inst_21831 = cljs.core.seq.call(null,inst_21824__$1);
var inst_21832 = inst_21831;
var inst_21833 = null;
var inst_21834 = (0);
var inst_21835 = (0);
var state_21892__$1 = (function (){var statearr_21935 = state_21892;
(statearr_21935[(20)] = inst_21832);

(statearr_21935[(30)] = inst_21826);

(statearr_21935[(9)] = inst_21835);

(statearr_21935[(29)] = inst_21824__$1);

(statearr_21935[(12)] = inst_21833);

(statearr_21935[(21)] = inst_21834);

return statearr_21935;
})();
var statearr_21936_22005 = state_21892__$1;
(statearr_21936_22005[(2)] = null);

(statearr_21936_22005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (28))){
var inst_21851 = (state_21892[(25)]);
var inst_21832 = (state_21892[(20)]);
var inst_21851__$1 = cljs.core.seq.call(null,inst_21832);
var state_21892__$1 = (function (){var statearr_21937 = state_21892;
(statearr_21937[(25)] = inst_21851__$1);

return statearr_21937;
})();
if(inst_21851__$1){
var statearr_21938_22006 = state_21892__$1;
(statearr_21938_22006[(1)] = (33));

} else {
var statearr_21939_22007 = state_21892__$1;
(statearr_21939_22007[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (25))){
var inst_21835 = (state_21892[(9)]);
var inst_21834 = (state_21892[(21)]);
var inst_21837 = (inst_21835 < inst_21834);
var inst_21838 = inst_21837;
var state_21892__$1 = state_21892;
if(cljs.core.truth_(inst_21838)){
var statearr_21940_22008 = state_21892__$1;
(statearr_21940_22008[(1)] = (27));

} else {
var statearr_21941_22009 = state_21892__$1;
(statearr_21941_22009[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (34))){
var state_21892__$1 = state_21892;
var statearr_21942_22010 = state_21892__$1;
(statearr_21942_22010[(2)] = null);

(statearr_21942_22010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (17))){
var state_21892__$1 = state_21892;
var statearr_21943_22011 = state_21892__$1;
(statearr_21943_22011[(2)] = null);

(statearr_21943_22011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (3))){
var inst_21890 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21892__$1,inst_21890);
} else {
if((state_val_21893 === (12))){
var inst_21819 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21944_22012 = state_21892__$1;
(statearr_21944_22012[(2)] = inst_21819);

(statearr_21944_22012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (2))){
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21892__$1,(4),ch);
} else {
if((state_val_21893 === (23))){
var state_21892__$1 = state_21892;
var statearr_21945_22013 = state_21892__$1;
(statearr_21945_22013[(2)] = null);

(statearr_21945_22013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (35))){
var inst_21874 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21946_22014 = state_21892__$1;
(statearr_21946_22014[(2)] = inst_21874);

(statearr_21946_22014[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (19))){
var inst_21793 = (state_21892[(7)]);
var inst_21797 = cljs.core.chunk_first.call(null,inst_21793);
var inst_21798 = cljs.core.chunk_rest.call(null,inst_21793);
var inst_21799 = cljs.core.count.call(null,inst_21797);
var inst_21773 = inst_21798;
var inst_21774 = inst_21797;
var inst_21775 = inst_21799;
var inst_21776 = (0);
var state_21892__$1 = (function (){var statearr_21947 = state_21892;
(statearr_21947[(13)] = inst_21776);

(statearr_21947[(14)] = inst_21775);

(statearr_21947[(15)] = inst_21774);

(statearr_21947[(16)] = inst_21773);

return statearr_21947;
})();
var statearr_21948_22015 = state_21892__$1;
(statearr_21948_22015[(2)] = null);

(statearr_21948_22015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (11))){
var inst_21793 = (state_21892[(7)]);
var inst_21773 = (state_21892[(16)]);
var inst_21793__$1 = cljs.core.seq.call(null,inst_21773);
var state_21892__$1 = (function (){var statearr_21949 = state_21892;
(statearr_21949[(7)] = inst_21793__$1);

return statearr_21949;
})();
if(inst_21793__$1){
var statearr_21950_22016 = state_21892__$1;
(statearr_21950_22016[(1)] = (16));

} else {
var statearr_21951_22017 = state_21892__$1;
(statearr_21951_22017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (9))){
var inst_21821 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21952_22018 = state_21892__$1;
(statearr_21952_22018[(2)] = inst_21821);

(statearr_21952_22018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (5))){
var inst_21771 = cljs.core.deref.call(null,cs);
var inst_21772 = cljs.core.seq.call(null,inst_21771);
var inst_21773 = inst_21772;
var inst_21774 = null;
var inst_21775 = (0);
var inst_21776 = (0);
var state_21892__$1 = (function (){var statearr_21953 = state_21892;
(statearr_21953[(13)] = inst_21776);

(statearr_21953[(14)] = inst_21775);

(statearr_21953[(15)] = inst_21774);

(statearr_21953[(16)] = inst_21773);

return statearr_21953;
})();
var statearr_21954_22019 = state_21892__$1;
(statearr_21954_22019[(2)] = null);

(statearr_21954_22019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (14))){
var state_21892__$1 = state_21892;
var statearr_21955_22020 = state_21892__$1;
(statearr_21955_22020[(2)] = null);

(statearr_21955_22020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (45))){
var inst_21882 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21956_22021 = state_21892__$1;
(statearr_21956_22021[(2)] = inst_21882);

(statearr_21956_22021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (26))){
var inst_21824 = (state_21892[(29)]);
var inst_21878 = (state_21892[(2)]);
var inst_21879 = cljs.core.seq.call(null,inst_21824);
var state_21892__$1 = (function (){var statearr_21957 = state_21892;
(statearr_21957[(31)] = inst_21878);

return statearr_21957;
})();
if(inst_21879){
var statearr_21958_22022 = state_21892__$1;
(statearr_21958_22022[(1)] = (42));

} else {
var statearr_21959_22023 = state_21892__$1;
(statearr_21959_22023[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (16))){
var inst_21793 = (state_21892[(7)]);
var inst_21795 = cljs.core.chunked_seq_QMARK_.call(null,inst_21793);
var state_21892__$1 = state_21892;
if(inst_21795){
var statearr_21960_22024 = state_21892__$1;
(statearr_21960_22024[(1)] = (19));

} else {
var statearr_21961_22025 = state_21892__$1;
(statearr_21961_22025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (38))){
var inst_21871 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21962_22026 = state_21892__$1;
(statearr_21962_22026[(2)] = inst_21871);

(statearr_21962_22026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (30))){
var state_21892__$1 = state_21892;
var statearr_21963_22027 = state_21892__$1;
(statearr_21963_22027[(2)] = null);

(statearr_21963_22027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (10))){
var inst_21776 = (state_21892[(13)]);
var inst_21774 = (state_21892[(15)]);
var inst_21782 = cljs.core._nth.call(null,inst_21774,inst_21776);
var inst_21783 = cljs.core.nth.call(null,inst_21782,(0),null);
var inst_21784 = cljs.core.nth.call(null,inst_21782,(1),null);
var state_21892__$1 = (function (){var statearr_21964 = state_21892;
(statearr_21964[(26)] = inst_21783);

return statearr_21964;
})();
if(cljs.core.truth_(inst_21784)){
var statearr_21965_22028 = state_21892__$1;
(statearr_21965_22028[(1)] = (13));

} else {
var statearr_21966_22029 = state_21892__$1;
(statearr_21966_22029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (18))){
var inst_21817 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21967_22030 = state_21892__$1;
(statearr_21967_22030[(2)] = inst_21817);

(statearr_21967_22030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (42))){
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21892__$1,(45),dchan);
} else {
if((state_val_21893 === (37))){
var inst_21851 = (state_21892[(25)]);
var inst_21764 = (state_21892[(11)]);
var inst_21860 = (state_21892[(23)]);
var inst_21860__$1 = cljs.core.first.call(null,inst_21851);
var inst_21861 = cljs.core.async.put_BANG_.call(null,inst_21860__$1,inst_21764,done);
var state_21892__$1 = (function (){var statearr_21968 = state_21892;
(statearr_21968[(23)] = inst_21860__$1);

return statearr_21968;
})();
if(cljs.core.truth_(inst_21861)){
var statearr_21969_22031 = state_21892__$1;
(statearr_21969_22031[(1)] = (39));

} else {
var statearr_21970_22032 = state_21892__$1;
(statearr_21970_22032[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (8))){
var inst_21776 = (state_21892[(13)]);
var inst_21775 = (state_21892[(14)]);
var inst_21778 = (inst_21776 < inst_21775);
var inst_21779 = inst_21778;
var state_21892__$1 = state_21892;
if(cljs.core.truth_(inst_21779)){
var statearr_21971_22033 = state_21892__$1;
(statearr_21971_22033[(1)] = (10));

} else {
var statearr_21972_22034 = state_21892__$1;
(statearr_21972_22034[(1)] = (11));

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
});})(c__6771__auto___21980,cs,m,dchan,dctr,done))
;
return ((function (switch__6715__auto__,c__6771__auto___21980,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_21976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21976[(0)] = state_machine__6716__auto__);

(statearr_21976[(1)] = (1));

return statearr_21976;
});
var state_machine__6716__auto____1 = (function (state_21892){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_21892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e21977){if((e21977 instanceof Object)){
var ex__6719__auto__ = e21977;
var statearr_21978_22035 = state_21892;
(statearr_21978_22035[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22036 = state_21892;
state_21892 = G__22036;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_21892){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_21892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___21980,cs,m,dchan,dctr,done))
})();
var state__6773__auto__ = (function (){var statearr_21979 = f__6772__auto__.call(null);
(statearr_21979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___21980);

return statearr_21979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___21980,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj22038 = {};
return obj22038;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22039){
var map__22044 = p__22039;
var map__22044__$1 = ((cljs.core.seq_QMARK_.call(null,map__22044))?cljs.core.apply.call(null,cljs.core.hash_map,map__22044):map__22044);
var opts = map__22044__$1;
var statearr_22045_22048 = state;
(statearr_22045_22048[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22044,map__22044__$1,opts){
return (function (val){
var statearr_22046_22049 = state;
(statearr_22046_22049[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22044,map__22044__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22047_22050 = state;
(statearr_22047_22050[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22039 = null;
if (arguments.length > 3) {
  p__22039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22039);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22051){
var state = cljs.core.first(arglist__22051);
arglist__22051 = cljs.core.next(arglist__22051);
var cont_block = cljs.core.first(arglist__22051);
arglist__22051 = cljs.core.next(arglist__22051);
var ports = cljs.core.first(arglist__22051);
var p__22039 = cljs.core.rest(arglist__22051);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22039);
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
if(typeof cljs.core.async.t22171 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22171 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22172){
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
this.meta22172 = meta22172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22171.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22171.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22171.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22171.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22171.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22171.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t22171.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22173){
var self__ = this;
var _22173__$1 = this;
return self__.meta22172;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22173,meta22172__$1){
var self__ = this;
var _22173__$1 = this;
return (new cljs.core.async.t22171(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22172__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22171.cljs$lang$type = true;

cljs.core.async.t22171.cljs$lang$ctorStr = "cljs.core.async/t22171";

cljs.core.async.t22171.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22171");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22171 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22171(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22172){
return (new cljs.core.async.t22171(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22172));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22171(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6771__auto___22290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___22290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___22290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22243){
var state_val_22244 = (state_22243[(1)]);
if((state_val_22244 === (7))){
var inst_22187 = (state_22243[(7)]);
var inst_22192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22187);
var state_22243__$1 = state_22243;
var statearr_22245_22291 = state_22243__$1;
(statearr_22245_22291[(2)] = inst_22192);

(statearr_22245_22291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (20))){
var inst_22202 = (state_22243[(8)]);
var state_22243__$1 = state_22243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22243__$1,(23),out,inst_22202);
} else {
if((state_val_22244 === (1))){
var inst_22177 = (state_22243[(9)]);
var inst_22177__$1 = calc_state.call(null);
var inst_22178 = cljs.core.seq_QMARK_.call(null,inst_22177__$1);
var state_22243__$1 = (function (){var statearr_22246 = state_22243;
(statearr_22246[(9)] = inst_22177__$1);

return statearr_22246;
})();
if(inst_22178){
var statearr_22247_22292 = state_22243__$1;
(statearr_22247_22292[(1)] = (2));

} else {
var statearr_22248_22293 = state_22243__$1;
(statearr_22248_22293[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (24))){
var inst_22195 = (state_22243[(10)]);
var inst_22187 = inst_22195;
var state_22243__$1 = (function (){var statearr_22249 = state_22243;
(statearr_22249[(7)] = inst_22187);

return statearr_22249;
})();
var statearr_22250_22294 = state_22243__$1;
(statearr_22250_22294[(2)] = null);

(statearr_22250_22294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (4))){
var inst_22177 = (state_22243[(9)]);
var inst_22183 = (state_22243[(2)]);
var inst_22184 = cljs.core.get.call(null,inst_22183,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22185 = cljs.core.get.call(null,inst_22183,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22186 = cljs.core.get.call(null,inst_22183,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22187 = inst_22177;
var state_22243__$1 = (function (){var statearr_22251 = state_22243;
(statearr_22251[(11)] = inst_22185);

(statearr_22251[(12)] = inst_22184);

(statearr_22251[(7)] = inst_22187);

(statearr_22251[(13)] = inst_22186);

return statearr_22251;
})();
var statearr_22252_22295 = state_22243__$1;
(statearr_22252_22295[(2)] = null);

(statearr_22252_22295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (15))){
var state_22243__$1 = state_22243;
var statearr_22253_22296 = state_22243__$1;
(statearr_22253_22296[(2)] = null);

(statearr_22253_22296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (21))){
var inst_22195 = (state_22243[(10)]);
var inst_22187 = inst_22195;
var state_22243__$1 = (function (){var statearr_22254 = state_22243;
(statearr_22254[(7)] = inst_22187);

return statearr_22254;
})();
var statearr_22255_22297 = state_22243__$1;
(statearr_22255_22297[(2)] = null);

(statearr_22255_22297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (13))){
var inst_22239 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22256_22298 = state_22243__$1;
(statearr_22256_22298[(2)] = inst_22239);

(statearr_22256_22298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (22))){
var inst_22237 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22257_22299 = state_22243__$1;
(statearr_22257_22299[(2)] = inst_22237);

(statearr_22257_22299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (6))){
var inst_22241 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22243__$1,inst_22241);
} else {
if((state_val_22244 === (25))){
var state_22243__$1 = state_22243;
var statearr_22258_22300 = state_22243__$1;
(statearr_22258_22300[(2)] = null);

(statearr_22258_22300[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (17))){
var inst_22217 = (state_22243[(14)]);
var state_22243__$1 = state_22243;
var statearr_22259_22301 = state_22243__$1;
(statearr_22259_22301[(2)] = inst_22217);

(statearr_22259_22301[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (3))){
var inst_22177 = (state_22243[(9)]);
var state_22243__$1 = state_22243;
var statearr_22260_22302 = state_22243__$1;
(statearr_22260_22302[(2)] = inst_22177);

(statearr_22260_22302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (12))){
var inst_22203 = (state_22243[(15)]);
var inst_22198 = (state_22243[(16)]);
var inst_22217 = (state_22243[(14)]);
var inst_22217__$1 = inst_22198.call(null,inst_22203);
var state_22243__$1 = (function (){var statearr_22261 = state_22243;
(statearr_22261[(14)] = inst_22217__$1);

return statearr_22261;
})();
if(cljs.core.truth_(inst_22217__$1)){
var statearr_22262_22303 = state_22243__$1;
(statearr_22262_22303[(1)] = (17));

} else {
var statearr_22263_22304 = state_22243__$1;
(statearr_22263_22304[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (2))){
var inst_22177 = (state_22243[(9)]);
var inst_22180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22177);
var state_22243__$1 = state_22243;
var statearr_22264_22305 = state_22243__$1;
(statearr_22264_22305[(2)] = inst_22180);

(statearr_22264_22305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (23))){
var inst_22228 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
if(cljs.core.truth_(inst_22228)){
var statearr_22265_22306 = state_22243__$1;
(statearr_22265_22306[(1)] = (24));

} else {
var statearr_22266_22307 = state_22243__$1;
(statearr_22266_22307[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (19))){
var inst_22225 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
if(cljs.core.truth_(inst_22225)){
var statearr_22267_22308 = state_22243__$1;
(statearr_22267_22308[(1)] = (20));

} else {
var statearr_22268_22309 = state_22243__$1;
(statearr_22268_22309[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (11))){
var inst_22202 = (state_22243[(8)]);
var inst_22208 = (inst_22202 == null);
var state_22243__$1 = state_22243;
if(cljs.core.truth_(inst_22208)){
var statearr_22269_22310 = state_22243__$1;
(statearr_22269_22310[(1)] = (14));

} else {
var statearr_22270_22311 = state_22243__$1;
(statearr_22270_22311[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (9))){
var inst_22195 = (state_22243[(10)]);
var inst_22195__$1 = (state_22243[(2)]);
var inst_22196 = cljs.core.get.call(null,inst_22195__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22197 = cljs.core.get.call(null,inst_22195__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22198 = cljs.core.get.call(null,inst_22195__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22243__$1 = (function (){var statearr_22271 = state_22243;
(statearr_22271[(17)] = inst_22197);

(statearr_22271[(16)] = inst_22198);

(statearr_22271[(10)] = inst_22195__$1);

return statearr_22271;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22243__$1,(10),inst_22196);
} else {
if((state_val_22244 === (5))){
var inst_22187 = (state_22243[(7)]);
var inst_22190 = cljs.core.seq_QMARK_.call(null,inst_22187);
var state_22243__$1 = state_22243;
if(inst_22190){
var statearr_22272_22312 = state_22243__$1;
(statearr_22272_22312[(1)] = (7));

} else {
var statearr_22273_22313 = state_22243__$1;
(statearr_22273_22313[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (14))){
var inst_22203 = (state_22243[(15)]);
var inst_22210 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22203);
var state_22243__$1 = state_22243;
var statearr_22274_22314 = state_22243__$1;
(statearr_22274_22314[(2)] = inst_22210);

(statearr_22274_22314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (26))){
var inst_22233 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22275_22315 = state_22243__$1;
(statearr_22275_22315[(2)] = inst_22233);

(statearr_22275_22315[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (16))){
var inst_22213 = (state_22243[(2)]);
var inst_22214 = calc_state.call(null);
var inst_22187 = inst_22214;
var state_22243__$1 = (function (){var statearr_22276 = state_22243;
(statearr_22276[(18)] = inst_22213);

(statearr_22276[(7)] = inst_22187);

return statearr_22276;
})();
var statearr_22277_22316 = state_22243__$1;
(statearr_22277_22316[(2)] = null);

(statearr_22277_22316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (10))){
var inst_22203 = (state_22243[(15)]);
var inst_22202 = (state_22243[(8)]);
var inst_22201 = (state_22243[(2)]);
var inst_22202__$1 = cljs.core.nth.call(null,inst_22201,(0),null);
var inst_22203__$1 = cljs.core.nth.call(null,inst_22201,(1),null);
var inst_22204 = (inst_22202__$1 == null);
var inst_22205 = cljs.core._EQ_.call(null,inst_22203__$1,change);
var inst_22206 = (inst_22204) || (inst_22205);
var state_22243__$1 = (function (){var statearr_22278 = state_22243;
(statearr_22278[(15)] = inst_22203__$1);

(statearr_22278[(8)] = inst_22202__$1);

return statearr_22278;
})();
if(cljs.core.truth_(inst_22206)){
var statearr_22279_22317 = state_22243__$1;
(statearr_22279_22317[(1)] = (11));

} else {
var statearr_22280_22318 = state_22243__$1;
(statearr_22280_22318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (18))){
var inst_22203 = (state_22243[(15)]);
var inst_22197 = (state_22243[(17)]);
var inst_22198 = (state_22243[(16)]);
var inst_22220 = cljs.core.empty_QMARK_.call(null,inst_22198);
var inst_22221 = inst_22197.call(null,inst_22203);
var inst_22222 = cljs.core.not.call(null,inst_22221);
var inst_22223 = (inst_22220) && (inst_22222);
var state_22243__$1 = state_22243;
var statearr_22281_22319 = state_22243__$1;
(statearr_22281_22319[(2)] = inst_22223);

(statearr_22281_22319[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (8))){
var inst_22187 = (state_22243[(7)]);
var state_22243__$1 = state_22243;
var statearr_22282_22320 = state_22243__$1;
(statearr_22282_22320[(2)] = inst_22187);

(statearr_22282_22320[(1)] = (9));


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
});})(c__6771__auto___22290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6715__auto__,c__6771__auto___22290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_22286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22286[(0)] = state_machine__6716__auto__);

(statearr_22286[(1)] = (1));

return statearr_22286;
});
var state_machine__6716__auto____1 = (function (state_22243){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_22243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e22287){if((e22287 instanceof Object)){
var ex__6719__auto__ = e22287;
var statearr_22288_22321 = state_22243;
(statearr_22288_22321[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22322 = state_22243;
state_22243 = G__22322;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_22243){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_22243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___22290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6773__auto__ = (function (){var statearr_22289 = f__6772__auto__.call(null);
(statearr_22289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___22290);

return statearr_22289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___22290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22324 = {};
return obj22324;
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
return (function (p1__22325_SHARP_){
if(cljs.core.truth_(p1__22325_SHARP_.call(null,topic))){
return p1__22325_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22325_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22448 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22448 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22449){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22449 = meta22449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22448.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22448.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22448.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22448.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22450){
var self__ = this;
var _22450__$1 = this;
return self__.meta22449;
});})(mults,ensure_mult))
;

cljs.core.async.t22448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22450,meta22449__$1){
var self__ = this;
var _22450__$1 = this;
return (new cljs.core.async.t22448(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22449__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22448.cljs$lang$type = true;

cljs.core.async.t22448.cljs$lang$ctorStr = "cljs.core.async/t22448";

cljs.core.async.t22448.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22448");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22448 = ((function (mults,ensure_mult){
return (function __GT_t22448(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22449){
return (new cljs.core.async.t22448(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22449));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22448(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6771__auto___22570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___22570,mults,ensure_mult,p){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___22570,mults,ensure_mult,p){
return (function (state_22522){
var state_val_22523 = (state_22522[(1)]);
if((state_val_22523 === (7))){
var inst_22518 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22524_22571 = state_22522__$1;
(statearr_22524_22571[(2)] = inst_22518);

(statearr_22524_22571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (20))){
var state_22522__$1 = state_22522;
var statearr_22525_22572 = state_22522__$1;
(statearr_22525_22572[(2)] = null);

(statearr_22525_22572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (1))){
var state_22522__$1 = state_22522;
var statearr_22526_22573 = state_22522__$1;
(statearr_22526_22573[(2)] = null);

(statearr_22526_22573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (24))){
var inst_22501 = (state_22522[(7)]);
var inst_22510 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22501);
var state_22522__$1 = state_22522;
var statearr_22527_22574 = state_22522__$1;
(statearr_22527_22574[(2)] = inst_22510);

(statearr_22527_22574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (4))){
var inst_22453 = (state_22522[(8)]);
var inst_22453__$1 = (state_22522[(2)]);
var inst_22454 = (inst_22453__$1 == null);
var state_22522__$1 = (function (){var statearr_22528 = state_22522;
(statearr_22528[(8)] = inst_22453__$1);

return statearr_22528;
})();
if(cljs.core.truth_(inst_22454)){
var statearr_22529_22575 = state_22522__$1;
(statearr_22529_22575[(1)] = (5));

} else {
var statearr_22530_22576 = state_22522__$1;
(statearr_22530_22576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (15))){
var inst_22495 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22531_22577 = state_22522__$1;
(statearr_22531_22577[(2)] = inst_22495);

(statearr_22531_22577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (21))){
var inst_22515 = (state_22522[(2)]);
var state_22522__$1 = (function (){var statearr_22532 = state_22522;
(statearr_22532[(9)] = inst_22515);

return statearr_22532;
})();
var statearr_22533_22578 = state_22522__$1;
(statearr_22533_22578[(2)] = null);

(statearr_22533_22578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (13))){
var inst_22477 = (state_22522[(10)]);
var inst_22479 = cljs.core.chunked_seq_QMARK_.call(null,inst_22477);
var state_22522__$1 = state_22522;
if(inst_22479){
var statearr_22534_22579 = state_22522__$1;
(statearr_22534_22579[(1)] = (16));

} else {
var statearr_22535_22580 = state_22522__$1;
(statearr_22535_22580[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (22))){
var inst_22507 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
if(cljs.core.truth_(inst_22507)){
var statearr_22536_22581 = state_22522__$1;
(statearr_22536_22581[(1)] = (23));

} else {
var statearr_22537_22582 = state_22522__$1;
(statearr_22537_22582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (6))){
var inst_22453 = (state_22522[(8)]);
var inst_22501 = (state_22522[(7)]);
var inst_22503 = (state_22522[(11)]);
var inst_22501__$1 = topic_fn.call(null,inst_22453);
var inst_22502 = cljs.core.deref.call(null,mults);
var inst_22503__$1 = cljs.core.get.call(null,inst_22502,inst_22501__$1);
var state_22522__$1 = (function (){var statearr_22538 = state_22522;
(statearr_22538[(7)] = inst_22501__$1);

(statearr_22538[(11)] = inst_22503__$1);

return statearr_22538;
})();
if(cljs.core.truth_(inst_22503__$1)){
var statearr_22539_22583 = state_22522__$1;
(statearr_22539_22583[(1)] = (19));

} else {
var statearr_22540_22584 = state_22522__$1;
(statearr_22540_22584[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (25))){
var inst_22512 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22541_22585 = state_22522__$1;
(statearr_22541_22585[(2)] = inst_22512);

(statearr_22541_22585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (17))){
var inst_22477 = (state_22522[(10)]);
var inst_22486 = cljs.core.first.call(null,inst_22477);
var inst_22487 = cljs.core.async.muxch_STAR_.call(null,inst_22486);
var inst_22488 = cljs.core.async.close_BANG_.call(null,inst_22487);
var inst_22489 = cljs.core.next.call(null,inst_22477);
var inst_22463 = inst_22489;
var inst_22464 = null;
var inst_22465 = (0);
var inst_22466 = (0);
var state_22522__$1 = (function (){var statearr_22542 = state_22522;
(statearr_22542[(12)] = inst_22465);

(statearr_22542[(13)] = inst_22488);

(statearr_22542[(14)] = inst_22463);

(statearr_22542[(15)] = inst_22466);

(statearr_22542[(16)] = inst_22464);

return statearr_22542;
})();
var statearr_22543_22586 = state_22522__$1;
(statearr_22543_22586[(2)] = null);

(statearr_22543_22586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (3))){
var inst_22520 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22522__$1,inst_22520);
} else {
if((state_val_22523 === (12))){
var inst_22497 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22544_22587 = state_22522__$1;
(statearr_22544_22587[(2)] = inst_22497);

(statearr_22544_22587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (2))){
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22522__$1,(4),ch);
} else {
if((state_val_22523 === (23))){
var state_22522__$1 = state_22522;
var statearr_22545_22588 = state_22522__$1;
(statearr_22545_22588[(2)] = null);

(statearr_22545_22588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (19))){
var inst_22453 = (state_22522[(8)]);
var inst_22503 = (state_22522[(11)]);
var inst_22505 = cljs.core.async.muxch_STAR_.call(null,inst_22503);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22522__$1,(22),inst_22505,inst_22453);
} else {
if((state_val_22523 === (11))){
var inst_22477 = (state_22522[(10)]);
var inst_22463 = (state_22522[(14)]);
var inst_22477__$1 = cljs.core.seq.call(null,inst_22463);
var state_22522__$1 = (function (){var statearr_22546 = state_22522;
(statearr_22546[(10)] = inst_22477__$1);

return statearr_22546;
})();
if(inst_22477__$1){
var statearr_22547_22589 = state_22522__$1;
(statearr_22547_22589[(1)] = (13));

} else {
var statearr_22548_22590 = state_22522__$1;
(statearr_22548_22590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (9))){
var inst_22499 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22549_22591 = state_22522__$1;
(statearr_22549_22591[(2)] = inst_22499);

(statearr_22549_22591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (5))){
var inst_22460 = cljs.core.deref.call(null,mults);
var inst_22461 = cljs.core.vals.call(null,inst_22460);
var inst_22462 = cljs.core.seq.call(null,inst_22461);
var inst_22463 = inst_22462;
var inst_22464 = null;
var inst_22465 = (0);
var inst_22466 = (0);
var state_22522__$1 = (function (){var statearr_22550 = state_22522;
(statearr_22550[(12)] = inst_22465);

(statearr_22550[(14)] = inst_22463);

(statearr_22550[(15)] = inst_22466);

(statearr_22550[(16)] = inst_22464);

return statearr_22550;
})();
var statearr_22551_22592 = state_22522__$1;
(statearr_22551_22592[(2)] = null);

(statearr_22551_22592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (14))){
var state_22522__$1 = state_22522;
var statearr_22555_22593 = state_22522__$1;
(statearr_22555_22593[(2)] = null);

(statearr_22555_22593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (16))){
var inst_22477 = (state_22522[(10)]);
var inst_22481 = cljs.core.chunk_first.call(null,inst_22477);
var inst_22482 = cljs.core.chunk_rest.call(null,inst_22477);
var inst_22483 = cljs.core.count.call(null,inst_22481);
var inst_22463 = inst_22482;
var inst_22464 = inst_22481;
var inst_22465 = inst_22483;
var inst_22466 = (0);
var state_22522__$1 = (function (){var statearr_22556 = state_22522;
(statearr_22556[(12)] = inst_22465);

(statearr_22556[(14)] = inst_22463);

(statearr_22556[(15)] = inst_22466);

(statearr_22556[(16)] = inst_22464);

return statearr_22556;
})();
var statearr_22557_22594 = state_22522__$1;
(statearr_22557_22594[(2)] = null);

(statearr_22557_22594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (10))){
var inst_22465 = (state_22522[(12)]);
var inst_22463 = (state_22522[(14)]);
var inst_22466 = (state_22522[(15)]);
var inst_22464 = (state_22522[(16)]);
var inst_22471 = cljs.core._nth.call(null,inst_22464,inst_22466);
var inst_22472 = cljs.core.async.muxch_STAR_.call(null,inst_22471);
var inst_22473 = cljs.core.async.close_BANG_.call(null,inst_22472);
var inst_22474 = (inst_22466 + (1));
var tmp22552 = inst_22465;
var tmp22553 = inst_22463;
var tmp22554 = inst_22464;
var inst_22463__$1 = tmp22553;
var inst_22464__$1 = tmp22554;
var inst_22465__$1 = tmp22552;
var inst_22466__$1 = inst_22474;
var state_22522__$1 = (function (){var statearr_22558 = state_22522;
(statearr_22558[(12)] = inst_22465__$1);

(statearr_22558[(17)] = inst_22473);

(statearr_22558[(14)] = inst_22463__$1);

(statearr_22558[(15)] = inst_22466__$1);

(statearr_22558[(16)] = inst_22464__$1);

return statearr_22558;
})();
var statearr_22559_22595 = state_22522__$1;
(statearr_22559_22595[(2)] = null);

(statearr_22559_22595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (18))){
var inst_22492 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22560_22596 = state_22522__$1;
(statearr_22560_22596[(2)] = inst_22492);

(statearr_22560_22596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (8))){
var inst_22465 = (state_22522[(12)]);
var inst_22466 = (state_22522[(15)]);
var inst_22468 = (inst_22466 < inst_22465);
var inst_22469 = inst_22468;
var state_22522__$1 = state_22522;
if(cljs.core.truth_(inst_22469)){
var statearr_22561_22597 = state_22522__$1;
(statearr_22561_22597[(1)] = (10));

} else {
var statearr_22562_22598 = state_22522__$1;
(statearr_22562_22598[(1)] = (11));

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
});})(c__6771__auto___22570,mults,ensure_mult,p))
;
return ((function (switch__6715__auto__,c__6771__auto___22570,mults,ensure_mult,p){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_22566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22566[(0)] = state_machine__6716__auto__);

(statearr_22566[(1)] = (1));

return statearr_22566;
});
var state_machine__6716__auto____1 = (function (state_22522){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_22522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e22567){if((e22567 instanceof Object)){
var ex__6719__auto__ = e22567;
var statearr_22568_22599 = state_22522;
(statearr_22568_22599[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22600 = state_22522;
state_22522 = G__22600;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_22522){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_22522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___22570,mults,ensure_mult,p))
})();
var state__6773__auto__ = (function (){var statearr_22569 = f__6772__auto__.call(null);
(statearr_22569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___22570);

return statearr_22569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___22570,mults,ensure_mult,p))
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
var c__6771__auto___22737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___22737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___22737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22707){
var state_val_22708 = (state_22707[(1)]);
if((state_val_22708 === (7))){
var state_22707__$1 = state_22707;
var statearr_22709_22738 = state_22707__$1;
(statearr_22709_22738[(2)] = null);

(statearr_22709_22738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (1))){
var state_22707__$1 = state_22707;
var statearr_22710_22739 = state_22707__$1;
(statearr_22710_22739[(2)] = null);

(statearr_22710_22739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (4))){
var inst_22671 = (state_22707[(7)]);
var inst_22673 = (inst_22671 < cnt);
var state_22707__$1 = state_22707;
if(cljs.core.truth_(inst_22673)){
var statearr_22711_22740 = state_22707__$1;
(statearr_22711_22740[(1)] = (6));

} else {
var statearr_22712_22741 = state_22707__$1;
(statearr_22712_22741[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (15))){
var inst_22703 = (state_22707[(2)]);
var state_22707__$1 = state_22707;
var statearr_22713_22742 = state_22707__$1;
(statearr_22713_22742[(2)] = inst_22703);

(statearr_22713_22742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (13))){
var inst_22696 = cljs.core.async.close_BANG_.call(null,out);
var state_22707__$1 = state_22707;
var statearr_22714_22743 = state_22707__$1;
(statearr_22714_22743[(2)] = inst_22696);

(statearr_22714_22743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (6))){
var state_22707__$1 = state_22707;
var statearr_22715_22744 = state_22707__$1;
(statearr_22715_22744[(2)] = null);

(statearr_22715_22744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (3))){
var inst_22705 = (state_22707[(2)]);
var state_22707__$1 = state_22707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22707__$1,inst_22705);
} else {
if((state_val_22708 === (12))){
var inst_22693 = (state_22707[(8)]);
var inst_22693__$1 = (state_22707[(2)]);
var inst_22694 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22693__$1);
var state_22707__$1 = (function (){var statearr_22716 = state_22707;
(statearr_22716[(8)] = inst_22693__$1);

return statearr_22716;
})();
if(cljs.core.truth_(inst_22694)){
var statearr_22717_22745 = state_22707__$1;
(statearr_22717_22745[(1)] = (13));

} else {
var statearr_22718_22746 = state_22707__$1;
(statearr_22718_22746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (2))){
var inst_22670 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22671 = (0);
var state_22707__$1 = (function (){var statearr_22719 = state_22707;
(statearr_22719[(9)] = inst_22670);

(statearr_22719[(7)] = inst_22671);

return statearr_22719;
})();
var statearr_22720_22747 = state_22707__$1;
(statearr_22720_22747[(2)] = null);

(statearr_22720_22747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (11))){
var inst_22671 = (state_22707[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22707,(10),Object,null,(9));
var inst_22680 = chs__$1.call(null,inst_22671);
var inst_22681 = done.call(null,inst_22671);
var inst_22682 = cljs.core.async.take_BANG_.call(null,inst_22680,inst_22681);
var state_22707__$1 = state_22707;
var statearr_22721_22748 = state_22707__$1;
(statearr_22721_22748[(2)] = inst_22682);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (9))){
var inst_22671 = (state_22707[(7)]);
var inst_22684 = (state_22707[(2)]);
var inst_22685 = (inst_22671 + (1));
var inst_22671__$1 = inst_22685;
var state_22707__$1 = (function (){var statearr_22722 = state_22707;
(statearr_22722[(7)] = inst_22671__$1);

(statearr_22722[(10)] = inst_22684);

return statearr_22722;
})();
var statearr_22723_22749 = state_22707__$1;
(statearr_22723_22749[(2)] = null);

(statearr_22723_22749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (5))){
var inst_22691 = (state_22707[(2)]);
var state_22707__$1 = (function (){var statearr_22724 = state_22707;
(statearr_22724[(11)] = inst_22691);

return statearr_22724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22707__$1,(12),dchan);
} else {
if((state_val_22708 === (14))){
var inst_22693 = (state_22707[(8)]);
var inst_22698 = cljs.core.apply.call(null,f,inst_22693);
var state_22707__$1 = state_22707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22707__$1,(16),out,inst_22698);
} else {
if((state_val_22708 === (16))){
var inst_22700 = (state_22707[(2)]);
var state_22707__$1 = (function (){var statearr_22725 = state_22707;
(statearr_22725[(12)] = inst_22700);

return statearr_22725;
})();
var statearr_22726_22750 = state_22707__$1;
(statearr_22726_22750[(2)] = null);

(statearr_22726_22750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (10))){
var inst_22675 = (state_22707[(2)]);
var inst_22676 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22707__$1 = (function (){var statearr_22727 = state_22707;
(statearr_22727[(13)] = inst_22675);

return statearr_22727;
})();
var statearr_22728_22751 = state_22707__$1;
(statearr_22728_22751[(2)] = inst_22676);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22708 === (8))){
var inst_22689 = (state_22707[(2)]);
var state_22707__$1 = state_22707;
var statearr_22729_22752 = state_22707__$1;
(statearr_22729_22752[(2)] = inst_22689);

(statearr_22729_22752[(1)] = (5));


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
});})(c__6771__auto___22737,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6715__auto__,c__6771__auto___22737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_22733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22733[(0)] = state_machine__6716__auto__);

(statearr_22733[(1)] = (1));

return statearr_22733;
});
var state_machine__6716__auto____1 = (function (state_22707){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_22707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e22734){if((e22734 instanceof Object)){
var ex__6719__auto__ = e22734;
var statearr_22735_22753 = state_22707;
(statearr_22735_22753[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22754 = state_22707;
state_22707 = G__22754;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_22707){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_22707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___22737,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6773__auto__ = (function (){var statearr_22736 = f__6772__auto__.call(null);
(statearr_22736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___22737);

return statearr_22736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___22737,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6771__auto___22862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___22862,out){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___22862,out){
return (function (state_22838){
var state_val_22839 = (state_22838[(1)]);
if((state_val_22839 === (7))){
var inst_22818 = (state_22838[(7)]);
var inst_22817 = (state_22838[(8)]);
var inst_22817__$1 = (state_22838[(2)]);
var inst_22818__$1 = cljs.core.nth.call(null,inst_22817__$1,(0),null);
var inst_22819 = cljs.core.nth.call(null,inst_22817__$1,(1),null);
var inst_22820 = (inst_22818__$1 == null);
var state_22838__$1 = (function (){var statearr_22840 = state_22838;
(statearr_22840[(9)] = inst_22819);

(statearr_22840[(7)] = inst_22818__$1);

(statearr_22840[(8)] = inst_22817__$1);

return statearr_22840;
})();
if(cljs.core.truth_(inst_22820)){
var statearr_22841_22863 = state_22838__$1;
(statearr_22841_22863[(1)] = (8));

} else {
var statearr_22842_22864 = state_22838__$1;
(statearr_22842_22864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (1))){
var inst_22809 = cljs.core.vec.call(null,chs);
var inst_22810 = inst_22809;
var state_22838__$1 = (function (){var statearr_22843 = state_22838;
(statearr_22843[(10)] = inst_22810);

return statearr_22843;
})();
var statearr_22844_22865 = state_22838__$1;
(statearr_22844_22865[(2)] = null);

(statearr_22844_22865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (4))){
var inst_22810 = (state_22838[(10)]);
var state_22838__$1 = state_22838;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22838__$1,(7),inst_22810);
} else {
if((state_val_22839 === (6))){
var inst_22834 = (state_22838[(2)]);
var state_22838__$1 = state_22838;
var statearr_22845_22866 = state_22838__$1;
(statearr_22845_22866[(2)] = inst_22834);

(statearr_22845_22866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (3))){
var inst_22836 = (state_22838[(2)]);
var state_22838__$1 = state_22838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22838__$1,inst_22836);
} else {
if((state_val_22839 === (2))){
var inst_22810 = (state_22838[(10)]);
var inst_22812 = cljs.core.count.call(null,inst_22810);
var inst_22813 = (inst_22812 > (0));
var state_22838__$1 = state_22838;
if(cljs.core.truth_(inst_22813)){
var statearr_22847_22867 = state_22838__$1;
(statearr_22847_22867[(1)] = (4));

} else {
var statearr_22848_22868 = state_22838__$1;
(statearr_22848_22868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (11))){
var inst_22810 = (state_22838[(10)]);
var inst_22827 = (state_22838[(2)]);
var tmp22846 = inst_22810;
var inst_22810__$1 = tmp22846;
var state_22838__$1 = (function (){var statearr_22849 = state_22838;
(statearr_22849[(11)] = inst_22827);

(statearr_22849[(10)] = inst_22810__$1);

return statearr_22849;
})();
var statearr_22850_22869 = state_22838__$1;
(statearr_22850_22869[(2)] = null);

(statearr_22850_22869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (9))){
var inst_22818 = (state_22838[(7)]);
var state_22838__$1 = state_22838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22838__$1,(11),out,inst_22818);
} else {
if((state_val_22839 === (5))){
var inst_22832 = cljs.core.async.close_BANG_.call(null,out);
var state_22838__$1 = state_22838;
var statearr_22851_22870 = state_22838__$1;
(statearr_22851_22870[(2)] = inst_22832);

(statearr_22851_22870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (10))){
var inst_22830 = (state_22838[(2)]);
var state_22838__$1 = state_22838;
var statearr_22852_22871 = state_22838__$1;
(statearr_22852_22871[(2)] = inst_22830);

(statearr_22852_22871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22839 === (8))){
var inst_22819 = (state_22838[(9)]);
var inst_22818 = (state_22838[(7)]);
var inst_22817 = (state_22838[(8)]);
var inst_22810 = (state_22838[(10)]);
var inst_22822 = (function (){var c = inst_22819;
var v = inst_22818;
var vec__22815 = inst_22817;
var cs = inst_22810;
return ((function (c,v,vec__22815,cs,inst_22819,inst_22818,inst_22817,inst_22810,state_val_22839,c__6771__auto___22862,out){
return (function (p1__22755_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22755_SHARP_);
});
;})(c,v,vec__22815,cs,inst_22819,inst_22818,inst_22817,inst_22810,state_val_22839,c__6771__auto___22862,out))
})();
var inst_22823 = cljs.core.filterv.call(null,inst_22822,inst_22810);
var inst_22810__$1 = inst_22823;
var state_22838__$1 = (function (){var statearr_22853 = state_22838;
(statearr_22853[(10)] = inst_22810__$1);

return statearr_22853;
})();
var statearr_22854_22872 = state_22838__$1;
(statearr_22854_22872[(2)] = null);

(statearr_22854_22872[(1)] = (2));


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
});})(c__6771__auto___22862,out))
;
return ((function (switch__6715__auto__,c__6771__auto___22862,out){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_22858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22858[(0)] = state_machine__6716__auto__);

(statearr_22858[(1)] = (1));

return statearr_22858;
});
var state_machine__6716__auto____1 = (function (state_22838){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_22838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e22859){if((e22859 instanceof Object)){
var ex__6719__auto__ = e22859;
var statearr_22860_22873 = state_22838;
(statearr_22860_22873[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22874 = state_22838;
state_22838 = G__22874;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_22838){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_22838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___22862,out))
})();
var state__6773__auto__ = (function (){var statearr_22861 = f__6772__auto__.call(null);
(statearr_22861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___22862);

return statearr_22861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___22862,out))
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
var c__6771__auto___22967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___22967,out){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___22967,out){
return (function (state_22944){
var state_val_22945 = (state_22944[(1)]);
if((state_val_22945 === (7))){
var inst_22926 = (state_22944[(7)]);
var inst_22926__$1 = (state_22944[(2)]);
var inst_22927 = (inst_22926__$1 == null);
var inst_22928 = cljs.core.not.call(null,inst_22927);
var state_22944__$1 = (function (){var statearr_22946 = state_22944;
(statearr_22946[(7)] = inst_22926__$1);

return statearr_22946;
})();
if(inst_22928){
var statearr_22947_22968 = state_22944__$1;
(statearr_22947_22968[(1)] = (8));

} else {
var statearr_22948_22969 = state_22944__$1;
(statearr_22948_22969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (1))){
var inst_22921 = (0);
var state_22944__$1 = (function (){var statearr_22949 = state_22944;
(statearr_22949[(8)] = inst_22921);

return statearr_22949;
})();
var statearr_22950_22970 = state_22944__$1;
(statearr_22950_22970[(2)] = null);

(statearr_22950_22970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (4))){
var state_22944__$1 = state_22944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22944__$1,(7),ch);
} else {
if((state_val_22945 === (6))){
var inst_22939 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
var statearr_22951_22971 = state_22944__$1;
(statearr_22951_22971[(2)] = inst_22939);

(statearr_22951_22971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (3))){
var inst_22941 = (state_22944[(2)]);
var inst_22942 = cljs.core.async.close_BANG_.call(null,out);
var state_22944__$1 = (function (){var statearr_22952 = state_22944;
(statearr_22952[(9)] = inst_22941);

return statearr_22952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22944__$1,inst_22942);
} else {
if((state_val_22945 === (2))){
var inst_22921 = (state_22944[(8)]);
var inst_22923 = (inst_22921 < n);
var state_22944__$1 = state_22944;
if(cljs.core.truth_(inst_22923)){
var statearr_22953_22972 = state_22944__$1;
(statearr_22953_22972[(1)] = (4));

} else {
var statearr_22954_22973 = state_22944__$1;
(statearr_22954_22973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (11))){
var inst_22921 = (state_22944[(8)]);
var inst_22931 = (state_22944[(2)]);
var inst_22932 = (inst_22921 + (1));
var inst_22921__$1 = inst_22932;
var state_22944__$1 = (function (){var statearr_22955 = state_22944;
(statearr_22955[(10)] = inst_22931);

(statearr_22955[(8)] = inst_22921__$1);

return statearr_22955;
})();
var statearr_22956_22974 = state_22944__$1;
(statearr_22956_22974[(2)] = null);

(statearr_22956_22974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (9))){
var state_22944__$1 = state_22944;
var statearr_22957_22975 = state_22944__$1;
(statearr_22957_22975[(2)] = null);

(statearr_22957_22975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (5))){
var state_22944__$1 = state_22944;
var statearr_22958_22976 = state_22944__$1;
(statearr_22958_22976[(2)] = null);

(statearr_22958_22976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (10))){
var inst_22936 = (state_22944[(2)]);
var state_22944__$1 = state_22944;
var statearr_22959_22977 = state_22944__$1;
(statearr_22959_22977[(2)] = inst_22936);

(statearr_22959_22977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22945 === (8))){
var inst_22926 = (state_22944[(7)]);
var state_22944__$1 = state_22944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22944__$1,(11),out,inst_22926);
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
});})(c__6771__auto___22967,out))
;
return ((function (switch__6715__auto__,c__6771__auto___22967,out){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_22963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22963[(0)] = state_machine__6716__auto__);

(statearr_22963[(1)] = (1));

return statearr_22963;
});
var state_machine__6716__auto____1 = (function (state_22944){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_22944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e22964){if((e22964 instanceof Object)){
var ex__6719__auto__ = e22964;
var statearr_22965_22978 = state_22944;
(statearr_22965_22978[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22979 = state_22944;
state_22944 = G__22979;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_22944){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_22944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___22967,out))
})();
var state__6773__auto__ = (function (){var statearr_22966 = f__6772__auto__.call(null);
(statearr_22966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___22967);

return statearr_22966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___22967,out))
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
if(typeof cljs.core.async.t22987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22987 = (function (ch,f,map_LT_,meta22988){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22988 = meta22988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22990 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22990 = (function (fn1,_,meta22988,map_LT_,f,ch,meta22991){
this.fn1 = fn1;
this._ = _;
this.meta22988 = meta22988;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22991 = meta22991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22990.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22980_SHARP_){
return f1.call(null,(((p1__22980_SHARP_ == null))?null:self__.f.call(null,p1__22980_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22992){
var self__ = this;
var _22992__$1 = this;
return self__.meta22991;
});})(___$1))
;

cljs.core.async.t22990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22992,meta22991__$1){
var self__ = this;
var _22992__$1 = this;
return (new cljs.core.async.t22990(self__.fn1,self__._,self__.meta22988,self__.map_LT_,self__.f,self__.ch,meta22991__$1));
});})(___$1))
;

cljs.core.async.t22990.cljs$lang$type = true;

cljs.core.async.t22990.cljs$lang$ctorStr = "cljs.core.async/t22990";

cljs.core.async.t22990.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22990");
});})(___$1))
;

cljs.core.async.__GT_t22990 = ((function (___$1){
return (function __GT_t22990(fn1__$1,___$2,meta22988__$1,map_LT___$1,f__$1,ch__$1,meta22991){
return (new cljs.core.async.t22990(fn1__$1,___$2,meta22988__$1,map_LT___$1,f__$1,ch__$1,meta22991));
});})(___$1))
;

}

return (new cljs.core.async.t22990(fn1,___$1,self__.meta22988,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22987.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22989){
var self__ = this;
var _22989__$1 = this;
return self__.meta22988;
});

cljs.core.async.t22987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22989,meta22988__$1){
var self__ = this;
var _22989__$1 = this;
return (new cljs.core.async.t22987(self__.ch,self__.f,self__.map_LT_,meta22988__$1));
});

cljs.core.async.t22987.cljs$lang$type = true;

cljs.core.async.t22987.cljs$lang$ctorStr = "cljs.core.async/t22987";

cljs.core.async.t22987.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22987");
});

cljs.core.async.__GT_t22987 = (function __GT_t22987(ch__$1,f__$1,map_LT___$1,meta22988){
return (new cljs.core.async.t22987(ch__$1,f__$1,map_LT___$1,meta22988));
});

}

return (new cljs.core.async.t22987(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22996 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22996 = (function (ch,f,map_GT_,meta22997){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22997 = meta22997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22998){
var self__ = this;
var _22998__$1 = this;
return self__.meta22997;
});

cljs.core.async.t22996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22998,meta22997__$1){
var self__ = this;
var _22998__$1 = this;
return (new cljs.core.async.t22996(self__.ch,self__.f,self__.map_GT_,meta22997__$1));
});

cljs.core.async.t22996.cljs$lang$type = true;

cljs.core.async.t22996.cljs$lang$ctorStr = "cljs.core.async/t22996";

cljs.core.async.t22996.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22996");
});

cljs.core.async.__GT_t22996 = (function __GT_t22996(ch__$1,f__$1,map_GT___$1,meta22997){
return (new cljs.core.async.t22996(ch__$1,f__$1,map_GT___$1,meta22997));
});

}

return (new cljs.core.async.t22996(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23002 = (function (ch,p,filter_GT_,meta23003){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23003 = meta23003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23002.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23002.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23002.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23004){
var self__ = this;
var _23004__$1 = this;
return self__.meta23003;
});

cljs.core.async.t23002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23004,meta23003__$1){
var self__ = this;
var _23004__$1 = this;
return (new cljs.core.async.t23002(self__.ch,self__.p,self__.filter_GT_,meta23003__$1));
});

cljs.core.async.t23002.cljs$lang$type = true;

cljs.core.async.t23002.cljs$lang$ctorStr = "cljs.core.async/t23002";

cljs.core.async.t23002.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23002");
});

cljs.core.async.__GT_t23002 = (function __GT_t23002(ch__$1,p__$1,filter_GT___$1,meta23003){
return (new cljs.core.async.t23002(ch__$1,p__$1,filter_GT___$1,meta23003));
});

}

return (new cljs.core.async.t23002(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6771__auto___23087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___23087,out){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___23087,out){
return (function (state_23066){
var state_val_23067 = (state_23066[(1)]);
if((state_val_23067 === (7))){
var inst_23062 = (state_23066[(2)]);
var state_23066__$1 = state_23066;
var statearr_23068_23088 = state_23066__$1;
(statearr_23068_23088[(2)] = inst_23062);

(statearr_23068_23088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (1))){
var state_23066__$1 = state_23066;
var statearr_23069_23089 = state_23066__$1;
(statearr_23069_23089[(2)] = null);

(statearr_23069_23089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (4))){
var inst_23048 = (state_23066[(7)]);
var inst_23048__$1 = (state_23066[(2)]);
var inst_23049 = (inst_23048__$1 == null);
var state_23066__$1 = (function (){var statearr_23070 = state_23066;
(statearr_23070[(7)] = inst_23048__$1);

return statearr_23070;
})();
if(cljs.core.truth_(inst_23049)){
var statearr_23071_23090 = state_23066__$1;
(statearr_23071_23090[(1)] = (5));

} else {
var statearr_23072_23091 = state_23066__$1;
(statearr_23072_23091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (6))){
var inst_23048 = (state_23066[(7)]);
var inst_23053 = p.call(null,inst_23048);
var state_23066__$1 = state_23066;
if(cljs.core.truth_(inst_23053)){
var statearr_23073_23092 = state_23066__$1;
(statearr_23073_23092[(1)] = (8));

} else {
var statearr_23074_23093 = state_23066__$1;
(statearr_23074_23093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (3))){
var inst_23064 = (state_23066[(2)]);
var state_23066__$1 = state_23066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23066__$1,inst_23064);
} else {
if((state_val_23067 === (2))){
var state_23066__$1 = state_23066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23066__$1,(4),ch);
} else {
if((state_val_23067 === (11))){
var inst_23056 = (state_23066[(2)]);
var state_23066__$1 = state_23066;
var statearr_23075_23094 = state_23066__$1;
(statearr_23075_23094[(2)] = inst_23056);

(statearr_23075_23094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (9))){
var state_23066__$1 = state_23066;
var statearr_23076_23095 = state_23066__$1;
(statearr_23076_23095[(2)] = null);

(statearr_23076_23095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (5))){
var inst_23051 = cljs.core.async.close_BANG_.call(null,out);
var state_23066__$1 = state_23066;
var statearr_23077_23096 = state_23066__$1;
(statearr_23077_23096[(2)] = inst_23051);

(statearr_23077_23096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (10))){
var inst_23059 = (state_23066[(2)]);
var state_23066__$1 = (function (){var statearr_23078 = state_23066;
(statearr_23078[(8)] = inst_23059);

return statearr_23078;
})();
var statearr_23079_23097 = state_23066__$1;
(statearr_23079_23097[(2)] = null);

(statearr_23079_23097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (8))){
var inst_23048 = (state_23066[(7)]);
var state_23066__$1 = state_23066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23066__$1,(11),out,inst_23048);
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
});})(c__6771__auto___23087,out))
;
return ((function (switch__6715__auto__,c__6771__auto___23087,out){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_23083 = [null,null,null,null,null,null,null,null,null];
(statearr_23083[(0)] = state_machine__6716__auto__);

(statearr_23083[(1)] = (1));

return statearr_23083;
});
var state_machine__6716__auto____1 = (function (state_23066){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_23066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e23084){if((e23084 instanceof Object)){
var ex__6719__auto__ = e23084;
var statearr_23085_23098 = state_23066;
(statearr_23085_23098[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23099 = state_23066;
state_23066 = G__23099;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_23066){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_23066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___23087,out))
})();
var state__6773__auto__ = (function (){var statearr_23086 = f__6772__auto__.call(null);
(statearr_23086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___23087);

return statearr_23086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___23087,out))
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
var c__6771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto__){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto__){
return (function (state_23265){
var state_val_23266 = (state_23265[(1)]);
if((state_val_23266 === (7))){
var inst_23261 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23267_23308 = state_23265__$1;
(statearr_23267_23308[(2)] = inst_23261);

(statearr_23267_23308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (20))){
var inst_23231 = (state_23265[(7)]);
var inst_23242 = (state_23265[(2)]);
var inst_23243 = cljs.core.next.call(null,inst_23231);
var inst_23217 = inst_23243;
var inst_23218 = null;
var inst_23219 = (0);
var inst_23220 = (0);
var state_23265__$1 = (function (){var statearr_23268 = state_23265;
(statearr_23268[(8)] = inst_23217);

(statearr_23268[(9)] = inst_23219);

(statearr_23268[(10)] = inst_23220);

(statearr_23268[(11)] = inst_23218);

(statearr_23268[(12)] = inst_23242);

return statearr_23268;
})();
var statearr_23269_23309 = state_23265__$1;
(statearr_23269_23309[(2)] = null);

(statearr_23269_23309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (1))){
var state_23265__$1 = state_23265;
var statearr_23270_23310 = state_23265__$1;
(statearr_23270_23310[(2)] = null);

(statearr_23270_23310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (4))){
var inst_23206 = (state_23265[(13)]);
var inst_23206__$1 = (state_23265[(2)]);
var inst_23207 = (inst_23206__$1 == null);
var state_23265__$1 = (function (){var statearr_23271 = state_23265;
(statearr_23271[(13)] = inst_23206__$1);

return statearr_23271;
})();
if(cljs.core.truth_(inst_23207)){
var statearr_23272_23311 = state_23265__$1;
(statearr_23272_23311[(1)] = (5));

} else {
var statearr_23273_23312 = state_23265__$1;
(statearr_23273_23312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (15))){
var state_23265__$1 = state_23265;
var statearr_23277_23313 = state_23265__$1;
(statearr_23277_23313[(2)] = null);

(statearr_23277_23313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (21))){
var state_23265__$1 = state_23265;
var statearr_23278_23314 = state_23265__$1;
(statearr_23278_23314[(2)] = null);

(statearr_23278_23314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (13))){
var inst_23217 = (state_23265[(8)]);
var inst_23219 = (state_23265[(9)]);
var inst_23220 = (state_23265[(10)]);
var inst_23218 = (state_23265[(11)]);
var inst_23227 = (state_23265[(2)]);
var inst_23228 = (inst_23220 + (1));
var tmp23274 = inst_23217;
var tmp23275 = inst_23219;
var tmp23276 = inst_23218;
var inst_23217__$1 = tmp23274;
var inst_23218__$1 = tmp23276;
var inst_23219__$1 = tmp23275;
var inst_23220__$1 = inst_23228;
var state_23265__$1 = (function (){var statearr_23279 = state_23265;
(statearr_23279[(8)] = inst_23217__$1);

(statearr_23279[(14)] = inst_23227);

(statearr_23279[(9)] = inst_23219__$1);

(statearr_23279[(10)] = inst_23220__$1);

(statearr_23279[(11)] = inst_23218__$1);

return statearr_23279;
})();
var statearr_23280_23315 = state_23265__$1;
(statearr_23280_23315[(2)] = null);

(statearr_23280_23315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (22))){
var state_23265__$1 = state_23265;
var statearr_23281_23316 = state_23265__$1;
(statearr_23281_23316[(2)] = null);

(statearr_23281_23316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (6))){
var inst_23206 = (state_23265[(13)]);
var inst_23215 = f.call(null,inst_23206);
var inst_23216 = cljs.core.seq.call(null,inst_23215);
var inst_23217 = inst_23216;
var inst_23218 = null;
var inst_23219 = (0);
var inst_23220 = (0);
var state_23265__$1 = (function (){var statearr_23282 = state_23265;
(statearr_23282[(8)] = inst_23217);

(statearr_23282[(9)] = inst_23219);

(statearr_23282[(10)] = inst_23220);

(statearr_23282[(11)] = inst_23218);

return statearr_23282;
})();
var statearr_23283_23317 = state_23265__$1;
(statearr_23283_23317[(2)] = null);

(statearr_23283_23317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (17))){
var inst_23231 = (state_23265[(7)]);
var inst_23235 = cljs.core.chunk_first.call(null,inst_23231);
var inst_23236 = cljs.core.chunk_rest.call(null,inst_23231);
var inst_23237 = cljs.core.count.call(null,inst_23235);
var inst_23217 = inst_23236;
var inst_23218 = inst_23235;
var inst_23219 = inst_23237;
var inst_23220 = (0);
var state_23265__$1 = (function (){var statearr_23284 = state_23265;
(statearr_23284[(8)] = inst_23217);

(statearr_23284[(9)] = inst_23219);

(statearr_23284[(10)] = inst_23220);

(statearr_23284[(11)] = inst_23218);

return statearr_23284;
})();
var statearr_23285_23318 = state_23265__$1;
(statearr_23285_23318[(2)] = null);

(statearr_23285_23318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (3))){
var inst_23263 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23265__$1,inst_23263);
} else {
if((state_val_23266 === (12))){
var inst_23251 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23286_23319 = state_23265__$1;
(statearr_23286_23319[(2)] = inst_23251);

(statearr_23286_23319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (2))){
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23265__$1,(4),in$);
} else {
if((state_val_23266 === (23))){
var inst_23259 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23287_23320 = state_23265__$1;
(statearr_23287_23320[(2)] = inst_23259);

(statearr_23287_23320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (19))){
var inst_23246 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23288_23321 = state_23265__$1;
(statearr_23288_23321[(2)] = inst_23246);

(statearr_23288_23321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (11))){
var inst_23217 = (state_23265[(8)]);
var inst_23231 = (state_23265[(7)]);
var inst_23231__$1 = cljs.core.seq.call(null,inst_23217);
var state_23265__$1 = (function (){var statearr_23289 = state_23265;
(statearr_23289[(7)] = inst_23231__$1);

return statearr_23289;
})();
if(inst_23231__$1){
var statearr_23290_23322 = state_23265__$1;
(statearr_23290_23322[(1)] = (14));

} else {
var statearr_23291_23323 = state_23265__$1;
(statearr_23291_23323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (9))){
var inst_23253 = (state_23265[(2)]);
var inst_23254 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23265__$1 = (function (){var statearr_23292 = state_23265;
(statearr_23292[(15)] = inst_23253);

return statearr_23292;
})();
if(cljs.core.truth_(inst_23254)){
var statearr_23293_23324 = state_23265__$1;
(statearr_23293_23324[(1)] = (21));

} else {
var statearr_23294_23325 = state_23265__$1;
(statearr_23294_23325[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (5))){
var inst_23209 = cljs.core.async.close_BANG_.call(null,out);
var state_23265__$1 = state_23265;
var statearr_23295_23326 = state_23265__$1;
(statearr_23295_23326[(2)] = inst_23209);

(statearr_23295_23326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (14))){
var inst_23231 = (state_23265[(7)]);
var inst_23233 = cljs.core.chunked_seq_QMARK_.call(null,inst_23231);
var state_23265__$1 = state_23265;
if(inst_23233){
var statearr_23296_23327 = state_23265__$1;
(statearr_23296_23327[(1)] = (17));

} else {
var statearr_23297_23328 = state_23265__$1;
(statearr_23297_23328[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (16))){
var inst_23249 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23298_23329 = state_23265__$1;
(statearr_23298_23329[(2)] = inst_23249);

(statearr_23298_23329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (10))){
var inst_23220 = (state_23265[(10)]);
var inst_23218 = (state_23265[(11)]);
var inst_23225 = cljs.core._nth.call(null,inst_23218,inst_23220);
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23265__$1,(13),out,inst_23225);
} else {
if((state_val_23266 === (18))){
var inst_23231 = (state_23265[(7)]);
var inst_23240 = cljs.core.first.call(null,inst_23231);
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23265__$1,(20),out,inst_23240);
} else {
if((state_val_23266 === (8))){
var inst_23219 = (state_23265[(9)]);
var inst_23220 = (state_23265[(10)]);
var inst_23222 = (inst_23220 < inst_23219);
var inst_23223 = inst_23222;
var state_23265__$1 = state_23265;
if(cljs.core.truth_(inst_23223)){
var statearr_23299_23330 = state_23265__$1;
(statearr_23299_23330[(1)] = (10));

} else {
var statearr_23300_23331 = state_23265__$1;
(statearr_23300_23331[(1)] = (11));

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
});})(c__6771__auto__))
;
return ((function (switch__6715__auto__,c__6771__auto__){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_23304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23304[(0)] = state_machine__6716__auto__);

(statearr_23304[(1)] = (1));

return statearr_23304;
});
var state_machine__6716__auto____1 = (function (state_23265){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_23265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e23305){if((e23305 instanceof Object)){
var ex__6719__auto__ = e23305;
var statearr_23306_23332 = state_23265;
(statearr_23306_23332[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23333 = state_23265;
state_23265 = G__23333;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_23265){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_23265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto__))
})();
var state__6773__auto__ = (function (){var statearr_23307 = f__6772__auto__.call(null);
(statearr_23307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto__);

return statearr_23307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto__))
);

return c__6771__auto__;
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
var c__6771__auto___23430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___23430,out){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___23430,out){
return (function (state_23405){
var state_val_23406 = (state_23405[(1)]);
if((state_val_23406 === (7))){
var inst_23400 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
var statearr_23407_23431 = state_23405__$1;
(statearr_23407_23431[(2)] = inst_23400);

(statearr_23407_23431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (1))){
var inst_23382 = null;
var state_23405__$1 = (function (){var statearr_23408 = state_23405;
(statearr_23408[(7)] = inst_23382);

return statearr_23408;
})();
var statearr_23409_23432 = state_23405__$1;
(statearr_23409_23432[(2)] = null);

(statearr_23409_23432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (4))){
var inst_23385 = (state_23405[(8)]);
var inst_23385__$1 = (state_23405[(2)]);
var inst_23386 = (inst_23385__$1 == null);
var inst_23387 = cljs.core.not.call(null,inst_23386);
var state_23405__$1 = (function (){var statearr_23410 = state_23405;
(statearr_23410[(8)] = inst_23385__$1);

return statearr_23410;
})();
if(inst_23387){
var statearr_23411_23433 = state_23405__$1;
(statearr_23411_23433[(1)] = (5));

} else {
var statearr_23412_23434 = state_23405__$1;
(statearr_23412_23434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (6))){
var state_23405__$1 = state_23405;
var statearr_23413_23435 = state_23405__$1;
(statearr_23413_23435[(2)] = null);

(statearr_23413_23435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (3))){
var inst_23402 = (state_23405[(2)]);
var inst_23403 = cljs.core.async.close_BANG_.call(null,out);
var state_23405__$1 = (function (){var statearr_23414 = state_23405;
(statearr_23414[(9)] = inst_23402);

return statearr_23414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23405__$1,inst_23403);
} else {
if((state_val_23406 === (2))){
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23405__$1,(4),ch);
} else {
if((state_val_23406 === (11))){
var inst_23385 = (state_23405[(8)]);
var inst_23394 = (state_23405[(2)]);
var inst_23382 = inst_23385;
var state_23405__$1 = (function (){var statearr_23415 = state_23405;
(statearr_23415[(10)] = inst_23394);

(statearr_23415[(7)] = inst_23382);

return statearr_23415;
})();
var statearr_23416_23436 = state_23405__$1;
(statearr_23416_23436[(2)] = null);

(statearr_23416_23436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (9))){
var inst_23385 = (state_23405[(8)]);
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23405__$1,(11),out,inst_23385);
} else {
if((state_val_23406 === (5))){
var inst_23382 = (state_23405[(7)]);
var inst_23385 = (state_23405[(8)]);
var inst_23389 = cljs.core._EQ_.call(null,inst_23385,inst_23382);
var state_23405__$1 = state_23405;
if(inst_23389){
var statearr_23418_23437 = state_23405__$1;
(statearr_23418_23437[(1)] = (8));

} else {
var statearr_23419_23438 = state_23405__$1;
(statearr_23419_23438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (10))){
var inst_23397 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
var statearr_23420_23439 = state_23405__$1;
(statearr_23420_23439[(2)] = inst_23397);

(statearr_23420_23439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (8))){
var inst_23382 = (state_23405[(7)]);
var tmp23417 = inst_23382;
var inst_23382__$1 = tmp23417;
var state_23405__$1 = (function (){var statearr_23421 = state_23405;
(statearr_23421[(7)] = inst_23382__$1);

return statearr_23421;
})();
var statearr_23422_23440 = state_23405__$1;
(statearr_23422_23440[(2)] = null);

(statearr_23422_23440[(1)] = (2));


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
});})(c__6771__auto___23430,out))
;
return ((function (switch__6715__auto__,c__6771__auto___23430,out){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_23426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23426[(0)] = state_machine__6716__auto__);

(statearr_23426[(1)] = (1));

return statearr_23426;
});
var state_machine__6716__auto____1 = (function (state_23405){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_23405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e23427){if((e23427 instanceof Object)){
var ex__6719__auto__ = e23427;
var statearr_23428_23441 = state_23405;
(statearr_23428_23441[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23442 = state_23405;
state_23405 = G__23442;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_23405){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_23405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___23430,out))
})();
var state__6773__auto__ = (function (){var statearr_23429 = f__6772__auto__.call(null);
(statearr_23429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___23430);

return statearr_23429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___23430,out))
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
var c__6771__auto___23577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___23577,out){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___23577,out){
return (function (state_23547){
var state_val_23548 = (state_23547[(1)]);
if((state_val_23548 === (7))){
var inst_23543 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23549_23578 = state_23547__$1;
(statearr_23549_23578[(2)] = inst_23543);

(statearr_23549_23578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (1))){
var inst_23510 = (new Array(n));
var inst_23511 = inst_23510;
var inst_23512 = (0);
var state_23547__$1 = (function (){var statearr_23550 = state_23547;
(statearr_23550[(7)] = inst_23512);

(statearr_23550[(8)] = inst_23511);

return statearr_23550;
})();
var statearr_23551_23579 = state_23547__$1;
(statearr_23551_23579[(2)] = null);

(statearr_23551_23579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (4))){
var inst_23515 = (state_23547[(9)]);
var inst_23515__$1 = (state_23547[(2)]);
var inst_23516 = (inst_23515__$1 == null);
var inst_23517 = cljs.core.not.call(null,inst_23516);
var state_23547__$1 = (function (){var statearr_23552 = state_23547;
(statearr_23552[(9)] = inst_23515__$1);

return statearr_23552;
})();
if(inst_23517){
var statearr_23553_23580 = state_23547__$1;
(statearr_23553_23580[(1)] = (5));

} else {
var statearr_23554_23581 = state_23547__$1;
(statearr_23554_23581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (15))){
var inst_23537 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23555_23582 = state_23547__$1;
(statearr_23555_23582[(2)] = inst_23537);

(statearr_23555_23582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (13))){
var state_23547__$1 = state_23547;
var statearr_23556_23583 = state_23547__$1;
(statearr_23556_23583[(2)] = null);

(statearr_23556_23583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (6))){
var inst_23512 = (state_23547[(7)]);
var inst_23533 = (inst_23512 > (0));
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23533)){
var statearr_23557_23584 = state_23547__$1;
(statearr_23557_23584[(1)] = (12));

} else {
var statearr_23558_23585 = state_23547__$1;
(statearr_23558_23585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (3))){
var inst_23545 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23547__$1,inst_23545);
} else {
if((state_val_23548 === (12))){
var inst_23511 = (state_23547[(8)]);
var inst_23535 = cljs.core.vec.call(null,inst_23511);
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23547__$1,(15),out,inst_23535);
} else {
if((state_val_23548 === (2))){
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23547__$1,(4),ch);
} else {
if((state_val_23548 === (11))){
var inst_23527 = (state_23547[(2)]);
var inst_23528 = (new Array(n));
var inst_23511 = inst_23528;
var inst_23512 = (0);
var state_23547__$1 = (function (){var statearr_23559 = state_23547;
(statearr_23559[(7)] = inst_23512);

(statearr_23559[(8)] = inst_23511);

(statearr_23559[(10)] = inst_23527);

return statearr_23559;
})();
var statearr_23560_23586 = state_23547__$1;
(statearr_23560_23586[(2)] = null);

(statearr_23560_23586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (9))){
var inst_23511 = (state_23547[(8)]);
var inst_23525 = cljs.core.vec.call(null,inst_23511);
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23547__$1,(11),out,inst_23525);
} else {
if((state_val_23548 === (5))){
var inst_23520 = (state_23547[(11)]);
var inst_23512 = (state_23547[(7)]);
var inst_23511 = (state_23547[(8)]);
var inst_23515 = (state_23547[(9)]);
var inst_23519 = (inst_23511[inst_23512] = inst_23515);
var inst_23520__$1 = (inst_23512 + (1));
var inst_23521 = (inst_23520__$1 < n);
var state_23547__$1 = (function (){var statearr_23561 = state_23547;
(statearr_23561[(11)] = inst_23520__$1);

(statearr_23561[(12)] = inst_23519);

return statearr_23561;
})();
if(cljs.core.truth_(inst_23521)){
var statearr_23562_23587 = state_23547__$1;
(statearr_23562_23587[(1)] = (8));

} else {
var statearr_23563_23588 = state_23547__$1;
(statearr_23563_23588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (14))){
var inst_23540 = (state_23547[(2)]);
var inst_23541 = cljs.core.async.close_BANG_.call(null,out);
var state_23547__$1 = (function (){var statearr_23565 = state_23547;
(statearr_23565[(13)] = inst_23540);

return statearr_23565;
})();
var statearr_23566_23589 = state_23547__$1;
(statearr_23566_23589[(2)] = inst_23541);

(statearr_23566_23589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (10))){
var inst_23531 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23567_23590 = state_23547__$1;
(statearr_23567_23590[(2)] = inst_23531);

(statearr_23567_23590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (8))){
var inst_23520 = (state_23547[(11)]);
var inst_23511 = (state_23547[(8)]);
var tmp23564 = inst_23511;
var inst_23511__$1 = tmp23564;
var inst_23512 = inst_23520;
var state_23547__$1 = (function (){var statearr_23568 = state_23547;
(statearr_23568[(7)] = inst_23512);

(statearr_23568[(8)] = inst_23511__$1);

return statearr_23568;
})();
var statearr_23569_23591 = state_23547__$1;
(statearr_23569_23591[(2)] = null);

(statearr_23569_23591[(1)] = (2));


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
});})(c__6771__auto___23577,out))
;
return ((function (switch__6715__auto__,c__6771__auto___23577,out){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_23573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23573[(0)] = state_machine__6716__auto__);

(statearr_23573[(1)] = (1));

return statearr_23573;
});
var state_machine__6716__auto____1 = (function (state_23547){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_23547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e23574){if((e23574 instanceof Object)){
var ex__6719__auto__ = e23574;
var statearr_23575_23592 = state_23547;
(statearr_23575_23592[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23593 = state_23547;
state_23547 = G__23593;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_23547){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_23547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___23577,out))
})();
var state__6773__auto__ = (function (){var statearr_23576 = f__6772__auto__.call(null);
(statearr_23576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___23577);

return statearr_23576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___23577,out))
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
var c__6771__auto___23736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6771__auto___23736,out){
return (function (){
var f__6772__auto__ = (function (){var switch__6715__auto__ = ((function (c__6771__auto___23736,out){
return (function (state_23706){
var state_val_23707 = (state_23706[(1)]);
if((state_val_23707 === (7))){
var inst_23702 = (state_23706[(2)]);
var state_23706__$1 = state_23706;
var statearr_23708_23737 = state_23706__$1;
(statearr_23708_23737[(2)] = inst_23702);

(statearr_23708_23737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (1))){
var inst_23665 = [];
var inst_23666 = inst_23665;
var inst_23667 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23706__$1 = (function (){var statearr_23709 = state_23706;
(statearr_23709[(7)] = inst_23666);

(statearr_23709[(8)] = inst_23667);

return statearr_23709;
})();
var statearr_23710_23738 = state_23706__$1;
(statearr_23710_23738[(2)] = null);

(statearr_23710_23738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (4))){
var inst_23670 = (state_23706[(9)]);
var inst_23670__$1 = (state_23706[(2)]);
var inst_23671 = (inst_23670__$1 == null);
var inst_23672 = cljs.core.not.call(null,inst_23671);
var state_23706__$1 = (function (){var statearr_23711 = state_23706;
(statearr_23711[(9)] = inst_23670__$1);

return statearr_23711;
})();
if(inst_23672){
var statearr_23712_23739 = state_23706__$1;
(statearr_23712_23739[(1)] = (5));

} else {
var statearr_23713_23740 = state_23706__$1;
(statearr_23713_23740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (15))){
var inst_23696 = (state_23706[(2)]);
var state_23706__$1 = state_23706;
var statearr_23714_23741 = state_23706__$1;
(statearr_23714_23741[(2)] = inst_23696);

(statearr_23714_23741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (13))){
var state_23706__$1 = state_23706;
var statearr_23715_23742 = state_23706__$1;
(statearr_23715_23742[(2)] = null);

(statearr_23715_23742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (6))){
var inst_23666 = (state_23706[(7)]);
var inst_23691 = inst_23666.length;
var inst_23692 = (inst_23691 > (0));
var state_23706__$1 = state_23706;
if(cljs.core.truth_(inst_23692)){
var statearr_23716_23743 = state_23706__$1;
(statearr_23716_23743[(1)] = (12));

} else {
var statearr_23717_23744 = state_23706__$1;
(statearr_23717_23744[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (3))){
var inst_23704 = (state_23706[(2)]);
var state_23706__$1 = state_23706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23706__$1,inst_23704);
} else {
if((state_val_23707 === (12))){
var inst_23666 = (state_23706[(7)]);
var inst_23694 = cljs.core.vec.call(null,inst_23666);
var state_23706__$1 = state_23706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23706__$1,(15),out,inst_23694);
} else {
if((state_val_23707 === (2))){
var state_23706__$1 = state_23706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23706__$1,(4),ch);
} else {
if((state_val_23707 === (11))){
var inst_23670 = (state_23706[(9)]);
var inst_23674 = (state_23706[(10)]);
var inst_23684 = (state_23706[(2)]);
var inst_23685 = [];
var inst_23686 = inst_23685.push(inst_23670);
var inst_23666 = inst_23685;
var inst_23667 = inst_23674;
var state_23706__$1 = (function (){var statearr_23718 = state_23706;
(statearr_23718[(11)] = inst_23684);

(statearr_23718[(12)] = inst_23686);

(statearr_23718[(7)] = inst_23666);

(statearr_23718[(8)] = inst_23667);

return statearr_23718;
})();
var statearr_23719_23745 = state_23706__$1;
(statearr_23719_23745[(2)] = null);

(statearr_23719_23745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (9))){
var inst_23666 = (state_23706[(7)]);
var inst_23682 = cljs.core.vec.call(null,inst_23666);
var state_23706__$1 = state_23706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23706__$1,(11),out,inst_23682);
} else {
if((state_val_23707 === (5))){
var inst_23670 = (state_23706[(9)]);
var inst_23674 = (state_23706[(10)]);
var inst_23667 = (state_23706[(8)]);
var inst_23674__$1 = f.call(null,inst_23670);
var inst_23675 = cljs.core._EQ_.call(null,inst_23674__$1,inst_23667);
var inst_23676 = cljs.core.keyword_identical_QMARK_.call(null,inst_23667,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23677 = (inst_23675) || (inst_23676);
var state_23706__$1 = (function (){var statearr_23720 = state_23706;
(statearr_23720[(10)] = inst_23674__$1);

return statearr_23720;
})();
if(cljs.core.truth_(inst_23677)){
var statearr_23721_23746 = state_23706__$1;
(statearr_23721_23746[(1)] = (8));

} else {
var statearr_23722_23747 = state_23706__$1;
(statearr_23722_23747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (14))){
var inst_23699 = (state_23706[(2)]);
var inst_23700 = cljs.core.async.close_BANG_.call(null,out);
var state_23706__$1 = (function (){var statearr_23724 = state_23706;
(statearr_23724[(13)] = inst_23699);

return statearr_23724;
})();
var statearr_23725_23748 = state_23706__$1;
(statearr_23725_23748[(2)] = inst_23700);

(statearr_23725_23748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (10))){
var inst_23689 = (state_23706[(2)]);
var state_23706__$1 = state_23706;
var statearr_23726_23749 = state_23706__$1;
(statearr_23726_23749[(2)] = inst_23689);

(statearr_23726_23749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (8))){
var inst_23670 = (state_23706[(9)]);
var inst_23674 = (state_23706[(10)]);
var inst_23666 = (state_23706[(7)]);
var inst_23679 = inst_23666.push(inst_23670);
var tmp23723 = inst_23666;
var inst_23666__$1 = tmp23723;
var inst_23667 = inst_23674;
var state_23706__$1 = (function (){var statearr_23727 = state_23706;
(statearr_23727[(14)] = inst_23679);

(statearr_23727[(7)] = inst_23666__$1);

(statearr_23727[(8)] = inst_23667);

return statearr_23727;
})();
var statearr_23728_23750 = state_23706__$1;
(statearr_23728_23750[(2)] = null);

(statearr_23728_23750[(1)] = (2));


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
});})(c__6771__auto___23736,out))
;
return ((function (switch__6715__auto__,c__6771__auto___23736,out){
return (function() {
var state_machine__6716__auto__ = null;
var state_machine__6716__auto____0 = (function (){
var statearr_23732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23732[(0)] = state_machine__6716__auto__);

(statearr_23732[(1)] = (1));

return statearr_23732;
});
var state_machine__6716__auto____1 = (function (state_23706){
while(true){
var ret_value__6717__auto__ = (function (){try{while(true){
var result__6718__auto__ = switch__6715__auto__.call(null,state_23706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6718__auto__;
}
break;
}
}catch (e23733){if((e23733 instanceof Object)){
var ex__6719__auto__ = e23733;
var statearr_23734_23751 = state_23706;
(statearr_23734_23751[(5)] = ex__6719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23752 = state_23706;
state_23706 = G__23752;
continue;
} else {
return ret_value__6717__auto__;
}
break;
}
});
state_machine__6716__auto__ = function(state_23706){
switch(arguments.length){
case 0:
return state_machine__6716__auto____0.call(this);
case 1:
return state_machine__6716__auto____1.call(this,state_23706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6716__auto____0;
state_machine__6716__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6716__auto____1;
return state_machine__6716__auto__;
})()
;})(switch__6715__auto__,c__6771__auto___23736,out))
})();
var state__6773__auto__ = (function (){var statearr_23735 = f__6772__auto__.call(null);
(statearr_23735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6771__auto___23736);

return statearr_23735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6773__auto__);
});})(c__6771__auto___23736,out))
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
