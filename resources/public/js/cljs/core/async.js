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
if(typeof cljs.core.async.t20592 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20592 = (function (f,fn_handler,meta20593){
this.f = f;
this.fn_handler = fn_handler;
this.meta20593 = meta20593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20592.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20594){
var self__ = this;
var _20594__$1 = this;
return self__.meta20593;
});

cljs.core.async.t20592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20594,meta20593__$1){
var self__ = this;
var _20594__$1 = this;
return (new cljs.core.async.t20592(self__.f,self__.fn_handler,meta20593__$1));
});

cljs.core.async.t20592.cljs$lang$type = true;

cljs.core.async.t20592.cljs$lang$ctorStr = "cljs.core.async/t20592";

cljs.core.async.t20592.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20592");
});

cljs.core.async.__GT_t20592 = (function __GT_t20592(f__$1,fn_handler__$1,meta20593){
return (new cljs.core.async.t20592(f__$1,fn_handler__$1,meta20593));
});

}

return (new cljs.core.async.t20592(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__20596 = buff;
if(G__20596){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__20596.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20596.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20596);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20596);
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
var val_20597 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20597);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20597,ret){
return (function (){
return fn1.call(null,val_20597);
});})(val_20597,ret))
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
var n__4643__auto___20598 = n;
var x_20599 = (0);
while(true){
if((x_20599 < n__4643__auto___20598)){
(a[x_20599] = (0));

var G__20600 = (x_20599 + (1));
x_20599 = G__20600;
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

var G__20601 = (i + (1));
i = G__20601;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20605 = (function (flag,alt_flag,meta20606){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20606 = meta20606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20607){
var self__ = this;
var _20607__$1 = this;
return self__.meta20606;
});})(flag))
;

cljs.core.async.t20605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20607,meta20606__$1){
var self__ = this;
var _20607__$1 = this;
return (new cljs.core.async.t20605(self__.flag,self__.alt_flag,meta20606__$1));
});})(flag))
;

cljs.core.async.t20605.cljs$lang$type = true;

cljs.core.async.t20605.cljs$lang$ctorStr = "cljs.core.async/t20605";

cljs.core.async.t20605.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20605");
});})(flag))
;

cljs.core.async.__GT_t20605 = ((function (flag){
return (function __GT_t20605(flag__$1,alt_flag__$1,meta20606){
return (new cljs.core.async.t20605(flag__$1,alt_flag__$1,meta20606));
});})(flag))
;

}

return (new cljs.core.async.t20605(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20611 = (function (cb,flag,alt_handler,meta20612){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20612 = meta20612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20611.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20613){
var self__ = this;
var _20613__$1 = this;
return self__.meta20612;
});

cljs.core.async.t20611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20613,meta20612__$1){
var self__ = this;
var _20613__$1 = this;
return (new cljs.core.async.t20611(self__.cb,self__.flag,self__.alt_handler,meta20612__$1));
});

cljs.core.async.t20611.cljs$lang$type = true;

cljs.core.async.t20611.cljs$lang$ctorStr = "cljs.core.async/t20611";

cljs.core.async.t20611.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20611");
});

cljs.core.async.__GT_t20611 = (function __GT_t20611(cb__$1,flag__$1,alt_handler__$1,meta20612){
return (new cljs.core.async.t20611(cb__$1,flag__$1,alt_handler__$1,meta20612));
});

}

return (new cljs.core.async.t20611(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__20614_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20614_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20615_SHARP_,port], null));
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
var G__20616 = (i + (1));
i = G__20616;
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
var alts_BANG___delegate = function (ports,p__20617){
var map__20619 = p__20617;
var map__20619__$1 = ((cljs.core.seq_QMARK_.call(null,map__20619))?cljs.core.apply.call(null,cljs.core.hash_map,map__20619):map__20619);
var opts = map__20619__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20617 = null;
if (arguments.length > 1) {
  p__20617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20617);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20620){
var ports = cljs.core.first(arglist__20620);
var p__20617 = cljs.core.rest(arglist__20620);
return alts_BANG___delegate(ports,p__20617);
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
var c__6524__auto___20715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___20715){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___20715){
return (function (state_20691){
var state_val_20692 = (state_20691[(1)]);
if((state_val_20692 === (7))){
var inst_20687 = (state_20691[(2)]);
var state_20691__$1 = state_20691;
var statearr_20693_20716 = state_20691__$1;
(statearr_20693_20716[(2)] = inst_20687);

(statearr_20693_20716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (1))){
var state_20691__$1 = state_20691;
var statearr_20694_20717 = state_20691__$1;
(statearr_20694_20717[(2)] = null);

(statearr_20694_20717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (4))){
var inst_20670 = (state_20691[(7)]);
var inst_20670__$1 = (state_20691[(2)]);
var inst_20671 = (inst_20670__$1 == null);
var state_20691__$1 = (function (){var statearr_20695 = state_20691;
(statearr_20695[(7)] = inst_20670__$1);

return statearr_20695;
})();
if(cljs.core.truth_(inst_20671)){
var statearr_20696_20718 = state_20691__$1;
(statearr_20696_20718[(1)] = (5));

} else {
var statearr_20697_20719 = state_20691__$1;
(statearr_20697_20719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (13))){
var state_20691__$1 = state_20691;
var statearr_20698_20720 = state_20691__$1;
(statearr_20698_20720[(2)] = null);

(statearr_20698_20720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (6))){
var inst_20670 = (state_20691[(7)]);
var state_20691__$1 = state_20691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20691__$1,(11),to,inst_20670);
} else {
if((state_val_20692 === (3))){
var inst_20689 = (state_20691[(2)]);
var state_20691__$1 = state_20691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20691__$1,inst_20689);
} else {
if((state_val_20692 === (12))){
var state_20691__$1 = state_20691;
var statearr_20699_20721 = state_20691__$1;
(statearr_20699_20721[(2)] = null);

(statearr_20699_20721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (2))){
var state_20691__$1 = state_20691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20691__$1,(4),from);
} else {
if((state_val_20692 === (11))){
var inst_20680 = (state_20691[(2)]);
var state_20691__$1 = state_20691;
if(cljs.core.truth_(inst_20680)){
var statearr_20700_20722 = state_20691__$1;
(statearr_20700_20722[(1)] = (12));

} else {
var statearr_20701_20723 = state_20691__$1;
(statearr_20701_20723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (9))){
var state_20691__$1 = state_20691;
var statearr_20702_20724 = state_20691__$1;
(statearr_20702_20724[(2)] = null);

(statearr_20702_20724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (5))){
var state_20691__$1 = state_20691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20703_20725 = state_20691__$1;
(statearr_20703_20725[(1)] = (8));

} else {
var statearr_20704_20726 = state_20691__$1;
(statearr_20704_20726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (14))){
var inst_20685 = (state_20691[(2)]);
var state_20691__$1 = state_20691;
var statearr_20705_20727 = state_20691__$1;
(statearr_20705_20727[(2)] = inst_20685);

(statearr_20705_20727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (10))){
var inst_20677 = (state_20691[(2)]);
var state_20691__$1 = state_20691;
var statearr_20706_20728 = state_20691__$1;
(statearr_20706_20728[(2)] = inst_20677);

(statearr_20706_20728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20692 === (8))){
var inst_20674 = cljs.core.async.close_BANG_.call(null,to);
var state_20691__$1 = state_20691;
var statearr_20707_20729 = state_20691__$1;
(statearr_20707_20729[(2)] = inst_20674);

(statearr_20707_20729[(1)] = (10));


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
});})(c__6524__auto___20715))
;
return ((function (switch__6468__auto__,c__6524__auto___20715){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_20711 = [null,null,null,null,null,null,null,null];
(statearr_20711[(0)] = state_machine__6469__auto__);

(statearr_20711[(1)] = (1));

return statearr_20711;
});
var state_machine__6469__auto____1 = (function (state_20691){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_20691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e20712){if((e20712 instanceof Object)){
var ex__6472__auto__ = e20712;
var statearr_20713_20730 = state_20691;
(statearr_20713_20730[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20731 = state_20691;
state_20691 = G__20731;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_20691){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_20691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___20715))
})();
var state__6526__auto__ = (function (){var statearr_20714 = f__6525__auto__.call(null);
(statearr_20714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___20715);

return statearr_20714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___20715))
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
return (function (p__20915){
var vec__20916 = p__20915;
var v = cljs.core.nth.call(null,vec__20916,(0),null);
var p = cljs.core.nth.call(null,vec__20916,(1),null);
var job = vec__20916;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6524__auto___21098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___21098,res,vec__20916,v,p,job,jobs,results){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___21098,res,vec__20916,v,p,job,jobs,results){
return (function (state_20921){
var state_val_20922 = (state_20921[(1)]);
if((state_val_20922 === (2))){
var inst_20918 = (state_20921[(2)]);
var inst_20919 = cljs.core.async.close_BANG_.call(null,res);
var state_20921__$1 = (function (){var statearr_20923 = state_20921;
(statearr_20923[(7)] = inst_20918);

return statearr_20923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20921__$1,inst_20919);
} else {
if((state_val_20922 === (1))){
var state_20921__$1 = state_20921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20921__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6524__auto___21098,res,vec__20916,v,p,job,jobs,results))
;
return ((function (switch__6468__auto__,c__6524__auto___21098,res,vec__20916,v,p,job,jobs,results){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_20927 = [null,null,null,null,null,null,null,null];
(statearr_20927[(0)] = state_machine__6469__auto__);

(statearr_20927[(1)] = (1));

return statearr_20927;
});
var state_machine__6469__auto____1 = (function (state_20921){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_20921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e20928){if((e20928 instanceof Object)){
var ex__6472__auto__ = e20928;
var statearr_20929_21099 = state_20921;
(statearr_20929_21099[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21100 = state_20921;
state_20921 = G__21100;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_20921){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_20921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___21098,res,vec__20916,v,p,job,jobs,results))
})();
var state__6526__auto__ = (function (){var statearr_20930 = f__6525__auto__.call(null);
(statearr_20930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___21098);

return statearr_20930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___21098,res,vec__20916,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20931){
var vec__20932 = p__20931;
var v = cljs.core.nth.call(null,vec__20932,(0),null);
var p = cljs.core.nth.call(null,vec__20932,(1),null);
var job = vec__20932;
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
var n__4643__auto___21101 = n;
var __21102 = (0);
while(true){
if((__21102 < n__4643__auto___21101)){
var G__20933_21103 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20933_21103) {
case "async":
var c__6524__auto___21105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21102,c__6524__auto___21105,G__20933_21103,n__4643__auto___21101,jobs,results,process,async){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (__21102,c__6524__auto___21105,G__20933_21103,n__4643__auto___21101,jobs,results,process,async){
return (function (state_20946){
var state_val_20947 = (state_20946[(1)]);
if((state_val_20947 === (7))){
var inst_20942 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
var statearr_20948_21106 = state_20946__$1;
(statearr_20948_21106[(2)] = inst_20942);

(statearr_20948_21106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (6))){
var state_20946__$1 = state_20946;
var statearr_20949_21107 = state_20946__$1;
(statearr_20949_21107[(2)] = null);

(statearr_20949_21107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (5))){
var state_20946__$1 = state_20946;
var statearr_20950_21108 = state_20946__$1;
(statearr_20950_21108[(2)] = null);

(statearr_20950_21108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (4))){
var inst_20936 = (state_20946[(2)]);
var inst_20937 = async.call(null,inst_20936);
var state_20946__$1 = state_20946;
if(cljs.core.truth_(inst_20937)){
var statearr_20951_21109 = state_20946__$1;
(statearr_20951_21109[(1)] = (5));

} else {
var statearr_20952_21110 = state_20946__$1;
(statearr_20952_21110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (3))){
var inst_20944 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20946__$1,inst_20944);
} else {
if((state_val_20947 === (2))){
var state_20946__$1 = state_20946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20946__$1,(4),jobs);
} else {
if((state_val_20947 === (1))){
var state_20946__$1 = state_20946;
var statearr_20953_21111 = state_20946__$1;
(statearr_20953_21111[(2)] = null);

(statearr_20953_21111[(1)] = (2));


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
});})(__21102,c__6524__auto___21105,G__20933_21103,n__4643__auto___21101,jobs,results,process,async))
;
return ((function (__21102,switch__6468__auto__,c__6524__auto___21105,G__20933_21103,n__4643__auto___21101,jobs,results,process,async){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_20957 = [null,null,null,null,null,null,null];
(statearr_20957[(0)] = state_machine__6469__auto__);

(statearr_20957[(1)] = (1));

return statearr_20957;
});
var state_machine__6469__auto____1 = (function (state_20946){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_20946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e20958){if((e20958 instanceof Object)){
var ex__6472__auto__ = e20958;
var statearr_20959_21112 = state_20946;
(statearr_20959_21112[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21113 = state_20946;
state_20946 = G__21113;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_20946){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_20946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(__21102,switch__6468__auto__,c__6524__auto___21105,G__20933_21103,n__4643__auto___21101,jobs,results,process,async))
})();
var state__6526__auto__ = (function (){var statearr_20960 = f__6525__auto__.call(null);
(statearr_20960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___21105);

return statearr_20960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(__21102,c__6524__auto___21105,G__20933_21103,n__4643__auto___21101,jobs,results,process,async))
);


break;
case "compute":
var c__6524__auto___21114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21102,c__6524__auto___21114,G__20933_21103,n__4643__auto___21101,jobs,results,process,async){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (__21102,c__6524__auto___21114,G__20933_21103,n__4643__auto___21101,jobs,results,process,async){
return (function (state_20973){
var state_val_20974 = (state_20973[(1)]);
if((state_val_20974 === (7))){
var inst_20969 = (state_20973[(2)]);
var state_20973__$1 = state_20973;
var statearr_20975_21115 = state_20973__$1;
(statearr_20975_21115[(2)] = inst_20969);

(statearr_20975_21115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (6))){
var state_20973__$1 = state_20973;
var statearr_20976_21116 = state_20973__$1;
(statearr_20976_21116[(2)] = null);

(statearr_20976_21116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (5))){
var state_20973__$1 = state_20973;
var statearr_20977_21117 = state_20973__$1;
(statearr_20977_21117[(2)] = null);

(statearr_20977_21117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (4))){
var inst_20963 = (state_20973[(2)]);
var inst_20964 = process.call(null,inst_20963);
var state_20973__$1 = state_20973;
if(cljs.core.truth_(inst_20964)){
var statearr_20978_21118 = state_20973__$1;
(statearr_20978_21118[(1)] = (5));

} else {
var statearr_20979_21119 = state_20973__$1;
(statearr_20979_21119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20974 === (3))){
var inst_20971 = (state_20973[(2)]);
var state_20973__$1 = state_20973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20973__$1,inst_20971);
} else {
if((state_val_20974 === (2))){
var state_20973__$1 = state_20973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20973__$1,(4),jobs);
} else {
if((state_val_20974 === (1))){
var state_20973__$1 = state_20973;
var statearr_20980_21120 = state_20973__$1;
(statearr_20980_21120[(2)] = null);

(statearr_20980_21120[(1)] = (2));


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
});})(__21102,c__6524__auto___21114,G__20933_21103,n__4643__auto___21101,jobs,results,process,async))
;
return ((function (__21102,switch__6468__auto__,c__6524__auto___21114,G__20933_21103,n__4643__auto___21101,jobs,results,process,async){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_20984 = [null,null,null,null,null,null,null];
(statearr_20984[(0)] = state_machine__6469__auto__);

(statearr_20984[(1)] = (1));

return statearr_20984;
});
var state_machine__6469__auto____1 = (function (state_20973){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_20973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e20985){if((e20985 instanceof Object)){
var ex__6472__auto__ = e20985;
var statearr_20986_21121 = state_20973;
(statearr_20986_21121[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21122 = state_20973;
state_20973 = G__21122;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_20973){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_20973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(__21102,switch__6468__auto__,c__6524__auto___21114,G__20933_21103,n__4643__auto___21101,jobs,results,process,async))
})();
var state__6526__auto__ = (function (){var statearr_20987 = f__6525__auto__.call(null);
(statearr_20987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___21114);

return statearr_20987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(__21102,c__6524__auto___21114,G__20933_21103,n__4643__auto___21101,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21123 = (__21102 + (1));
__21102 = G__21123;
continue;
} else {
}
break;
}

var c__6524__auto___21124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___21124,jobs,results,process,async){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___21124,jobs,results,process,async){
return (function (state_21009){
var state_val_21010 = (state_21009[(1)]);
if((state_val_21010 === (9))){
var inst_21002 = (state_21009[(2)]);
var state_21009__$1 = (function (){var statearr_21011 = state_21009;
(statearr_21011[(7)] = inst_21002);

return statearr_21011;
})();
var statearr_21012_21125 = state_21009__$1;
(statearr_21012_21125[(2)] = null);

(statearr_21012_21125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21010 === (8))){
var inst_20995 = (state_21009[(8)]);
var inst_21000 = (state_21009[(2)]);
var state_21009__$1 = (function (){var statearr_21013 = state_21009;
(statearr_21013[(9)] = inst_21000);

return statearr_21013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21009__$1,(9),results,inst_20995);
} else {
if((state_val_21010 === (7))){
var inst_21005 = (state_21009[(2)]);
var state_21009__$1 = state_21009;
var statearr_21014_21126 = state_21009__$1;
(statearr_21014_21126[(2)] = inst_21005);

(statearr_21014_21126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21010 === (6))){
var inst_20995 = (state_21009[(8)]);
var inst_20990 = (state_21009[(10)]);
var inst_20995__$1 = cljs.core.async.chan.call(null,(1));
var inst_20996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20997 = [inst_20990,inst_20995__$1];
var inst_20998 = (new cljs.core.PersistentVector(null,2,(5),inst_20996,inst_20997,null));
var state_21009__$1 = (function (){var statearr_21015 = state_21009;
(statearr_21015[(8)] = inst_20995__$1);

return statearr_21015;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21009__$1,(8),jobs,inst_20998);
} else {
if((state_val_21010 === (5))){
var inst_20993 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21009__$1 = state_21009;
var statearr_21016_21127 = state_21009__$1;
(statearr_21016_21127[(2)] = inst_20993);

(statearr_21016_21127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21010 === (4))){
var inst_20990 = (state_21009[(10)]);
var inst_20990__$1 = (state_21009[(2)]);
var inst_20991 = (inst_20990__$1 == null);
var state_21009__$1 = (function (){var statearr_21017 = state_21009;
(statearr_21017[(10)] = inst_20990__$1);

return statearr_21017;
})();
if(cljs.core.truth_(inst_20991)){
var statearr_21018_21128 = state_21009__$1;
(statearr_21018_21128[(1)] = (5));

} else {
var statearr_21019_21129 = state_21009__$1;
(statearr_21019_21129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21010 === (3))){
var inst_21007 = (state_21009[(2)]);
var state_21009__$1 = state_21009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21009__$1,inst_21007);
} else {
if((state_val_21010 === (2))){
var state_21009__$1 = state_21009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21009__$1,(4),from);
} else {
if((state_val_21010 === (1))){
var state_21009__$1 = state_21009;
var statearr_21020_21130 = state_21009__$1;
(statearr_21020_21130[(2)] = null);

(statearr_21020_21130[(1)] = (2));


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
});})(c__6524__auto___21124,jobs,results,process,async))
;
return ((function (switch__6468__auto__,c__6524__auto___21124,jobs,results,process,async){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_21024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21024[(0)] = state_machine__6469__auto__);

(statearr_21024[(1)] = (1));

return statearr_21024;
});
var state_machine__6469__auto____1 = (function (state_21009){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_21009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e21025){if((e21025 instanceof Object)){
var ex__6472__auto__ = e21025;
var statearr_21026_21131 = state_21009;
(statearr_21026_21131[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21132 = state_21009;
state_21009 = G__21132;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_21009){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_21009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___21124,jobs,results,process,async))
})();
var state__6526__auto__ = (function (){var statearr_21027 = f__6525__auto__.call(null);
(statearr_21027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___21124);

return statearr_21027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___21124,jobs,results,process,async))
);


var c__6524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto__,jobs,results,process,async){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto__,jobs,results,process,async){
return (function (state_21065){
var state_val_21066 = (state_21065[(1)]);
if((state_val_21066 === (7))){
var inst_21061 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21067_21133 = state_21065__$1;
(statearr_21067_21133[(2)] = inst_21061);

(statearr_21067_21133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (20))){
var state_21065__$1 = state_21065;
var statearr_21068_21134 = state_21065__$1;
(statearr_21068_21134[(2)] = null);

(statearr_21068_21134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (1))){
var state_21065__$1 = state_21065;
var statearr_21069_21135 = state_21065__$1;
(statearr_21069_21135[(2)] = null);

(statearr_21069_21135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (4))){
var inst_21030 = (state_21065[(7)]);
var inst_21030__$1 = (state_21065[(2)]);
var inst_21031 = (inst_21030__$1 == null);
var state_21065__$1 = (function (){var statearr_21070 = state_21065;
(statearr_21070[(7)] = inst_21030__$1);

return statearr_21070;
})();
if(cljs.core.truth_(inst_21031)){
var statearr_21071_21136 = state_21065__$1;
(statearr_21071_21136[(1)] = (5));

} else {
var statearr_21072_21137 = state_21065__$1;
(statearr_21072_21137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (15))){
var inst_21043 = (state_21065[(8)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21065__$1,(18),to,inst_21043);
} else {
if((state_val_21066 === (21))){
var inst_21056 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21073_21138 = state_21065__$1;
(statearr_21073_21138[(2)] = inst_21056);

(statearr_21073_21138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (13))){
var inst_21058 = (state_21065[(2)]);
var state_21065__$1 = (function (){var statearr_21074 = state_21065;
(statearr_21074[(9)] = inst_21058);

return statearr_21074;
})();
var statearr_21075_21139 = state_21065__$1;
(statearr_21075_21139[(2)] = null);

(statearr_21075_21139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (6))){
var inst_21030 = (state_21065[(7)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21065__$1,(11),inst_21030);
} else {
if((state_val_21066 === (17))){
var inst_21051 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21051)){
var statearr_21076_21140 = state_21065__$1;
(statearr_21076_21140[(1)] = (19));

} else {
var statearr_21077_21141 = state_21065__$1;
(statearr_21077_21141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (3))){
var inst_21063 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21065__$1,inst_21063);
} else {
if((state_val_21066 === (12))){
var inst_21040 = (state_21065[(10)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21065__$1,(14),inst_21040);
} else {
if((state_val_21066 === (2))){
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21065__$1,(4),results);
} else {
if((state_val_21066 === (19))){
var state_21065__$1 = state_21065;
var statearr_21078_21142 = state_21065__$1;
(statearr_21078_21142[(2)] = null);

(statearr_21078_21142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (11))){
var inst_21040 = (state_21065[(2)]);
var state_21065__$1 = (function (){var statearr_21079 = state_21065;
(statearr_21079[(10)] = inst_21040);

return statearr_21079;
})();
var statearr_21080_21143 = state_21065__$1;
(statearr_21080_21143[(2)] = null);

(statearr_21080_21143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (9))){
var state_21065__$1 = state_21065;
var statearr_21081_21144 = state_21065__$1;
(statearr_21081_21144[(2)] = null);

(statearr_21081_21144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (5))){
var state_21065__$1 = state_21065;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21082_21145 = state_21065__$1;
(statearr_21082_21145[(1)] = (8));

} else {
var statearr_21083_21146 = state_21065__$1;
(statearr_21083_21146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (14))){
var inst_21043 = (state_21065[(8)]);
var inst_21045 = (state_21065[(11)]);
var inst_21043__$1 = (state_21065[(2)]);
var inst_21044 = (inst_21043__$1 == null);
var inst_21045__$1 = cljs.core.not.call(null,inst_21044);
var state_21065__$1 = (function (){var statearr_21084 = state_21065;
(statearr_21084[(8)] = inst_21043__$1);

(statearr_21084[(11)] = inst_21045__$1);

return statearr_21084;
})();
if(inst_21045__$1){
var statearr_21085_21147 = state_21065__$1;
(statearr_21085_21147[(1)] = (15));

} else {
var statearr_21086_21148 = state_21065__$1;
(statearr_21086_21148[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (16))){
var inst_21045 = (state_21065[(11)]);
var state_21065__$1 = state_21065;
var statearr_21087_21149 = state_21065__$1;
(statearr_21087_21149[(2)] = inst_21045);

(statearr_21087_21149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (10))){
var inst_21037 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21088_21150 = state_21065__$1;
(statearr_21088_21150[(2)] = inst_21037);

(statearr_21088_21150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (18))){
var inst_21048 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21089_21151 = state_21065__$1;
(statearr_21089_21151[(2)] = inst_21048);

(statearr_21089_21151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (8))){
var inst_21034 = cljs.core.async.close_BANG_.call(null,to);
var state_21065__$1 = state_21065;
var statearr_21090_21152 = state_21065__$1;
(statearr_21090_21152[(2)] = inst_21034);

(statearr_21090_21152[(1)] = (10));


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
});})(c__6524__auto__,jobs,results,process,async))
;
return ((function (switch__6468__auto__,c__6524__auto__,jobs,results,process,async){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_21094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21094[(0)] = state_machine__6469__auto__);

(statearr_21094[(1)] = (1));

return statearr_21094;
});
var state_machine__6469__auto____1 = (function (state_21065){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_21065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e21095){if((e21095 instanceof Object)){
var ex__6472__auto__ = e21095;
var statearr_21096_21153 = state_21065;
(statearr_21096_21153[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21154 = state_21065;
state_21065 = G__21154;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_21065){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_21065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto__,jobs,results,process,async))
})();
var state__6526__auto__ = (function (){var statearr_21097 = f__6525__auto__.call(null);
(statearr_21097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);

return statearr_21097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto__,jobs,results,process,async))
);

return c__6524__auto__;
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
var c__6524__auto___21255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___21255,tc,fc){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___21255,tc,fc){
return (function (state_21230){
var state_val_21231 = (state_21230[(1)]);
if((state_val_21231 === (7))){
var inst_21226 = (state_21230[(2)]);
var state_21230__$1 = state_21230;
var statearr_21232_21256 = state_21230__$1;
(statearr_21232_21256[(2)] = inst_21226);

(statearr_21232_21256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (1))){
var state_21230__$1 = state_21230;
var statearr_21233_21257 = state_21230__$1;
(statearr_21233_21257[(2)] = null);

(statearr_21233_21257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (4))){
var inst_21207 = (state_21230[(7)]);
var inst_21207__$1 = (state_21230[(2)]);
var inst_21208 = (inst_21207__$1 == null);
var state_21230__$1 = (function (){var statearr_21234 = state_21230;
(statearr_21234[(7)] = inst_21207__$1);

return statearr_21234;
})();
if(cljs.core.truth_(inst_21208)){
var statearr_21235_21258 = state_21230__$1;
(statearr_21235_21258[(1)] = (5));

} else {
var statearr_21236_21259 = state_21230__$1;
(statearr_21236_21259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (13))){
var state_21230__$1 = state_21230;
var statearr_21237_21260 = state_21230__$1;
(statearr_21237_21260[(2)] = null);

(statearr_21237_21260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (6))){
var inst_21207 = (state_21230[(7)]);
var inst_21213 = p.call(null,inst_21207);
var state_21230__$1 = state_21230;
if(cljs.core.truth_(inst_21213)){
var statearr_21238_21261 = state_21230__$1;
(statearr_21238_21261[(1)] = (9));

} else {
var statearr_21239_21262 = state_21230__$1;
(statearr_21239_21262[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (3))){
var inst_21228 = (state_21230[(2)]);
var state_21230__$1 = state_21230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21230__$1,inst_21228);
} else {
if((state_val_21231 === (12))){
var state_21230__$1 = state_21230;
var statearr_21240_21263 = state_21230__$1;
(statearr_21240_21263[(2)] = null);

(statearr_21240_21263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (2))){
var state_21230__$1 = state_21230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21230__$1,(4),ch);
} else {
if((state_val_21231 === (11))){
var inst_21207 = (state_21230[(7)]);
var inst_21217 = (state_21230[(2)]);
var state_21230__$1 = state_21230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21230__$1,(8),inst_21217,inst_21207);
} else {
if((state_val_21231 === (9))){
var state_21230__$1 = state_21230;
var statearr_21241_21264 = state_21230__$1;
(statearr_21241_21264[(2)] = tc);

(statearr_21241_21264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (5))){
var inst_21210 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21211 = cljs.core.async.close_BANG_.call(null,fc);
var state_21230__$1 = (function (){var statearr_21242 = state_21230;
(statearr_21242[(8)] = inst_21210);

return statearr_21242;
})();
var statearr_21243_21265 = state_21230__$1;
(statearr_21243_21265[(2)] = inst_21211);

(statearr_21243_21265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (14))){
var inst_21224 = (state_21230[(2)]);
var state_21230__$1 = state_21230;
var statearr_21244_21266 = state_21230__$1;
(statearr_21244_21266[(2)] = inst_21224);

(statearr_21244_21266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (10))){
var state_21230__$1 = state_21230;
var statearr_21245_21267 = state_21230__$1;
(statearr_21245_21267[(2)] = fc);

(statearr_21245_21267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (8))){
var inst_21219 = (state_21230[(2)]);
var state_21230__$1 = state_21230;
if(cljs.core.truth_(inst_21219)){
var statearr_21246_21268 = state_21230__$1;
(statearr_21246_21268[(1)] = (12));

} else {
var statearr_21247_21269 = state_21230__$1;
(statearr_21247_21269[(1)] = (13));

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
});})(c__6524__auto___21255,tc,fc))
;
return ((function (switch__6468__auto__,c__6524__auto___21255,tc,fc){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_21251 = [null,null,null,null,null,null,null,null,null];
(statearr_21251[(0)] = state_machine__6469__auto__);

(statearr_21251[(1)] = (1));

return statearr_21251;
});
var state_machine__6469__auto____1 = (function (state_21230){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_21230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e21252){if((e21252 instanceof Object)){
var ex__6472__auto__ = e21252;
var statearr_21253_21270 = state_21230;
(statearr_21253_21270[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21271 = state_21230;
state_21230 = G__21271;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_21230){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_21230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___21255,tc,fc))
})();
var state__6526__auto__ = (function (){var statearr_21254 = f__6525__auto__.call(null);
(statearr_21254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___21255);

return statearr_21254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___21255,tc,fc))
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
var c__6524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto__){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto__){
return (function (state_21318){
var state_val_21319 = (state_21318[(1)]);
if((state_val_21319 === (7))){
var inst_21314 = (state_21318[(2)]);
var state_21318__$1 = state_21318;
var statearr_21320_21336 = state_21318__$1;
(statearr_21320_21336[(2)] = inst_21314);

(statearr_21320_21336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (6))){
var inst_21307 = (state_21318[(7)]);
var inst_21304 = (state_21318[(8)]);
var inst_21311 = f.call(null,inst_21304,inst_21307);
var inst_21304__$1 = inst_21311;
var state_21318__$1 = (function (){var statearr_21321 = state_21318;
(statearr_21321[(8)] = inst_21304__$1);

return statearr_21321;
})();
var statearr_21322_21337 = state_21318__$1;
(statearr_21322_21337[(2)] = null);

(statearr_21322_21337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (5))){
var inst_21304 = (state_21318[(8)]);
var state_21318__$1 = state_21318;
var statearr_21323_21338 = state_21318__$1;
(statearr_21323_21338[(2)] = inst_21304);

(statearr_21323_21338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (4))){
var inst_21307 = (state_21318[(7)]);
var inst_21307__$1 = (state_21318[(2)]);
var inst_21308 = (inst_21307__$1 == null);
var state_21318__$1 = (function (){var statearr_21324 = state_21318;
(statearr_21324[(7)] = inst_21307__$1);

return statearr_21324;
})();
if(cljs.core.truth_(inst_21308)){
var statearr_21325_21339 = state_21318__$1;
(statearr_21325_21339[(1)] = (5));

} else {
var statearr_21326_21340 = state_21318__$1;
(statearr_21326_21340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21319 === (3))){
var inst_21316 = (state_21318[(2)]);
var state_21318__$1 = state_21318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21318__$1,inst_21316);
} else {
if((state_val_21319 === (2))){
var state_21318__$1 = state_21318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21318__$1,(4),ch);
} else {
if((state_val_21319 === (1))){
var inst_21304 = init;
var state_21318__$1 = (function (){var statearr_21327 = state_21318;
(statearr_21327[(8)] = inst_21304);

return statearr_21327;
})();
var statearr_21328_21341 = state_21318__$1;
(statearr_21328_21341[(2)] = null);

(statearr_21328_21341[(1)] = (2));


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
});})(c__6524__auto__))
;
return ((function (switch__6468__auto__,c__6524__auto__){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_21332 = [null,null,null,null,null,null,null,null,null];
(statearr_21332[(0)] = state_machine__6469__auto__);

(statearr_21332[(1)] = (1));

return statearr_21332;
});
var state_machine__6469__auto____1 = (function (state_21318){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_21318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e21333){if((e21333 instanceof Object)){
var ex__6472__auto__ = e21333;
var statearr_21334_21342 = state_21318;
(statearr_21334_21342[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21343 = state_21318;
state_21318 = G__21343;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_21318){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_21318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto__))
})();
var state__6526__auto__ = (function (){var statearr_21335 = f__6525__auto__.call(null);
(statearr_21335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);

return statearr_21335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto__))
);

return c__6524__auto__;
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
var c__6524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto__){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto__){
return (function (state_21417){
var state_val_21418 = (state_21417[(1)]);
if((state_val_21418 === (7))){
var inst_21399 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21419_21442 = state_21417__$1;
(statearr_21419_21442[(2)] = inst_21399);

(statearr_21419_21442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (1))){
var inst_21393 = cljs.core.seq.call(null,coll);
var inst_21394 = inst_21393;
var state_21417__$1 = (function (){var statearr_21420 = state_21417;
(statearr_21420[(7)] = inst_21394);

return statearr_21420;
})();
var statearr_21421_21443 = state_21417__$1;
(statearr_21421_21443[(2)] = null);

(statearr_21421_21443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (4))){
var inst_21394 = (state_21417[(7)]);
var inst_21397 = cljs.core.first.call(null,inst_21394);
var state_21417__$1 = state_21417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21417__$1,(7),ch,inst_21397);
} else {
if((state_val_21418 === (13))){
var inst_21411 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21422_21444 = state_21417__$1;
(statearr_21422_21444[(2)] = inst_21411);

(statearr_21422_21444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (6))){
var inst_21402 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21402)){
var statearr_21423_21445 = state_21417__$1;
(statearr_21423_21445[(1)] = (8));

} else {
var statearr_21424_21446 = state_21417__$1;
(statearr_21424_21446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (3))){
var inst_21415 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21417__$1,inst_21415);
} else {
if((state_val_21418 === (12))){
var state_21417__$1 = state_21417;
var statearr_21425_21447 = state_21417__$1;
(statearr_21425_21447[(2)] = null);

(statearr_21425_21447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (2))){
var inst_21394 = (state_21417[(7)]);
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21394)){
var statearr_21426_21448 = state_21417__$1;
(statearr_21426_21448[(1)] = (4));

} else {
var statearr_21427_21449 = state_21417__$1;
(statearr_21427_21449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (11))){
var inst_21408 = cljs.core.async.close_BANG_.call(null,ch);
var state_21417__$1 = state_21417;
var statearr_21428_21450 = state_21417__$1;
(statearr_21428_21450[(2)] = inst_21408);

(statearr_21428_21450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (9))){
var state_21417__$1 = state_21417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21429_21451 = state_21417__$1;
(statearr_21429_21451[(1)] = (11));

} else {
var statearr_21430_21452 = state_21417__$1;
(statearr_21430_21452[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (5))){
var inst_21394 = (state_21417[(7)]);
var state_21417__$1 = state_21417;
var statearr_21431_21453 = state_21417__$1;
(statearr_21431_21453[(2)] = inst_21394);

(statearr_21431_21453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (10))){
var inst_21413 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21432_21454 = state_21417__$1;
(statearr_21432_21454[(2)] = inst_21413);

(statearr_21432_21454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (8))){
var inst_21394 = (state_21417[(7)]);
var inst_21404 = cljs.core.next.call(null,inst_21394);
var inst_21394__$1 = inst_21404;
var state_21417__$1 = (function (){var statearr_21433 = state_21417;
(statearr_21433[(7)] = inst_21394__$1);

return statearr_21433;
})();
var statearr_21434_21455 = state_21417__$1;
(statearr_21434_21455[(2)] = null);

(statearr_21434_21455[(1)] = (2));


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
});})(c__6524__auto__))
;
return ((function (switch__6468__auto__,c__6524__auto__){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_21438 = [null,null,null,null,null,null,null,null];
(statearr_21438[(0)] = state_machine__6469__auto__);

(statearr_21438[(1)] = (1));

return statearr_21438;
});
var state_machine__6469__auto____1 = (function (state_21417){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_21417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e21439){if((e21439 instanceof Object)){
var ex__6472__auto__ = e21439;
var statearr_21440_21456 = state_21417;
(statearr_21440_21456[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21457 = state_21417;
state_21417 = G__21457;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_21417){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_21417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto__))
})();
var state__6526__auto__ = (function (){var statearr_21441 = f__6525__auto__.call(null);
(statearr_21441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);

return statearr_21441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto__))
);

return c__6524__auto__;
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

cljs.core.async.Mux = (function (){var obj21459 = {};
return obj21459;
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


cljs.core.async.Mult = (function (){var obj21461 = {};
return obj21461;
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
if(typeof cljs.core.async.t21683 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21683 = (function (cs,ch,mult,meta21684){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21684 = meta21684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21683.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21683.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21683.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21683.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21683.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21685){
var self__ = this;
var _21685__$1 = this;
return self__.meta21684;
});})(cs))
;

cljs.core.async.t21683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21685,meta21684__$1){
var self__ = this;
var _21685__$1 = this;
return (new cljs.core.async.t21683(self__.cs,self__.ch,self__.mult,meta21684__$1));
});})(cs))
;

cljs.core.async.t21683.cljs$lang$type = true;

cljs.core.async.t21683.cljs$lang$ctorStr = "cljs.core.async/t21683";

cljs.core.async.t21683.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21683");
});})(cs))
;

cljs.core.async.__GT_t21683 = ((function (cs){
return (function __GT_t21683(cs__$1,ch__$1,mult__$1,meta21684){
return (new cljs.core.async.t21683(cs__$1,ch__$1,mult__$1,meta21684));
});})(cs))
;

}

return (new cljs.core.async.t21683(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6524__auto___21904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___21904,cs,m,dchan,dctr,done){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___21904,cs,m,dchan,dctr,done){
return (function (state_21816){
var state_val_21817 = (state_21816[(1)]);
if((state_val_21817 === (7))){
var inst_21812 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21818_21905 = state_21816__$1;
(statearr_21818_21905[(2)] = inst_21812);

(statearr_21818_21905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (20))){
var inst_21717 = (state_21816[(7)]);
var inst_21727 = cljs.core.first.call(null,inst_21717);
var inst_21728 = cljs.core.nth.call(null,inst_21727,(0),null);
var inst_21729 = cljs.core.nth.call(null,inst_21727,(1),null);
var state_21816__$1 = (function (){var statearr_21819 = state_21816;
(statearr_21819[(8)] = inst_21728);

return statearr_21819;
})();
if(cljs.core.truth_(inst_21729)){
var statearr_21820_21906 = state_21816__$1;
(statearr_21820_21906[(1)] = (22));

} else {
var statearr_21821_21907 = state_21816__$1;
(statearr_21821_21907[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (27))){
var inst_21757 = (state_21816[(9)]);
var inst_21759 = (state_21816[(10)]);
var inst_21688 = (state_21816[(11)]);
var inst_21764 = (state_21816[(12)]);
var inst_21764__$1 = cljs.core._nth.call(null,inst_21757,inst_21759);
var inst_21765 = cljs.core.async.put_BANG_.call(null,inst_21764__$1,inst_21688,done);
var state_21816__$1 = (function (){var statearr_21822 = state_21816;
(statearr_21822[(12)] = inst_21764__$1);

return statearr_21822;
})();
if(cljs.core.truth_(inst_21765)){
var statearr_21823_21908 = state_21816__$1;
(statearr_21823_21908[(1)] = (30));

} else {
var statearr_21824_21909 = state_21816__$1;
(statearr_21824_21909[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (1))){
var state_21816__$1 = state_21816;
var statearr_21825_21910 = state_21816__$1;
(statearr_21825_21910[(2)] = null);

(statearr_21825_21910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (24))){
var inst_21717 = (state_21816[(7)]);
var inst_21734 = (state_21816[(2)]);
var inst_21735 = cljs.core.next.call(null,inst_21717);
var inst_21697 = inst_21735;
var inst_21698 = null;
var inst_21699 = (0);
var inst_21700 = (0);
var state_21816__$1 = (function (){var statearr_21826 = state_21816;
(statearr_21826[(13)] = inst_21697);

(statearr_21826[(14)] = inst_21700);

(statearr_21826[(15)] = inst_21699);

(statearr_21826[(16)] = inst_21698);

(statearr_21826[(17)] = inst_21734);

return statearr_21826;
})();
var statearr_21827_21911 = state_21816__$1;
(statearr_21827_21911[(2)] = null);

(statearr_21827_21911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (39))){
var state_21816__$1 = state_21816;
var statearr_21831_21912 = state_21816__$1;
(statearr_21831_21912[(2)] = null);

(statearr_21831_21912[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (4))){
var inst_21688 = (state_21816[(11)]);
var inst_21688__$1 = (state_21816[(2)]);
var inst_21689 = (inst_21688__$1 == null);
var state_21816__$1 = (function (){var statearr_21832 = state_21816;
(statearr_21832[(11)] = inst_21688__$1);

return statearr_21832;
})();
if(cljs.core.truth_(inst_21689)){
var statearr_21833_21913 = state_21816__$1;
(statearr_21833_21913[(1)] = (5));

} else {
var statearr_21834_21914 = state_21816__$1;
(statearr_21834_21914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (15))){
var inst_21697 = (state_21816[(13)]);
var inst_21700 = (state_21816[(14)]);
var inst_21699 = (state_21816[(15)]);
var inst_21698 = (state_21816[(16)]);
var inst_21713 = (state_21816[(2)]);
var inst_21714 = (inst_21700 + (1));
var tmp21828 = inst_21697;
var tmp21829 = inst_21699;
var tmp21830 = inst_21698;
var inst_21697__$1 = tmp21828;
var inst_21698__$1 = tmp21830;
var inst_21699__$1 = tmp21829;
var inst_21700__$1 = inst_21714;
var state_21816__$1 = (function (){var statearr_21835 = state_21816;
(statearr_21835[(13)] = inst_21697__$1);

(statearr_21835[(14)] = inst_21700__$1);

(statearr_21835[(15)] = inst_21699__$1);

(statearr_21835[(18)] = inst_21713);

(statearr_21835[(16)] = inst_21698__$1);

return statearr_21835;
})();
var statearr_21836_21915 = state_21816__$1;
(statearr_21836_21915[(2)] = null);

(statearr_21836_21915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (21))){
var inst_21738 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21840_21916 = state_21816__$1;
(statearr_21840_21916[(2)] = inst_21738);

(statearr_21840_21916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (31))){
var inst_21764 = (state_21816[(12)]);
var inst_21768 = done.call(null,null);
var inst_21769 = cljs.core.async.untap_STAR_.call(null,m,inst_21764);
var state_21816__$1 = (function (){var statearr_21841 = state_21816;
(statearr_21841[(19)] = inst_21768);

return statearr_21841;
})();
var statearr_21842_21917 = state_21816__$1;
(statearr_21842_21917[(2)] = inst_21769);

(statearr_21842_21917[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (32))){
var inst_21757 = (state_21816[(9)]);
var inst_21759 = (state_21816[(10)]);
var inst_21756 = (state_21816[(20)]);
var inst_21758 = (state_21816[(21)]);
var inst_21771 = (state_21816[(2)]);
var inst_21772 = (inst_21759 + (1));
var tmp21837 = inst_21757;
var tmp21838 = inst_21756;
var tmp21839 = inst_21758;
var inst_21756__$1 = tmp21838;
var inst_21757__$1 = tmp21837;
var inst_21758__$1 = tmp21839;
var inst_21759__$1 = inst_21772;
var state_21816__$1 = (function (){var statearr_21843 = state_21816;
(statearr_21843[(9)] = inst_21757__$1);

(statearr_21843[(10)] = inst_21759__$1);

(statearr_21843[(20)] = inst_21756__$1);

(statearr_21843[(21)] = inst_21758__$1);

(statearr_21843[(22)] = inst_21771);

return statearr_21843;
})();
var statearr_21844_21918 = state_21816__$1;
(statearr_21844_21918[(2)] = null);

(statearr_21844_21918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (40))){
var inst_21784 = (state_21816[(23)]);
var inst_21788 = done.call(null,null);
var inst_21789 = cljs.core.async.untap_STAR_.call(null,m,inst_21784);
var state_21816__$1 = (function (){var statearr_21845 = state_21816;
(statearr_21845[(24)] = inst_21788);

return statearr_21845;
})();
var statearr_21846_21919 = state_21816__$1;
(statearr_21846_21919[(2)] = inst_21789);

(statearr_21846_21919[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (33))){
var inst_21775 = (state_21816[(25)]);
var inst_21777 = cljs.core.chunked_seq_QMARK_.call(null,inst_21775);
var state_21816__$1 = state_21816;
if(inst_21777){
var statearr_21847_21920 = state_21816__$1;
(statearr_21847_21920[(1)] = (36));

} else {
var statearr_21848_21921 = state_21816__$1;
(statearr_21848_21921[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (13))){
var inst_21707 = (state_21816[(26)]);
var inst_21710 = cljs.core.async.close_BANG_.call(null,inst_21707);
var state_21816__$1 = state_21816;
var statearr_21849_21922 = state_21816__$1;
(statearr_21849_21922[(2)] = inst_21710);

(statearr_21849_21922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (22))){
var inst_21728 = (state_21816[(8)]);
var inst_21731 = cljs.core.async.close_BANG_.call(null,inst_21728);
var state_21816__$1 = state_21816;
var statearr_21850_21923 = state_21816__$1;
(statearr_21850_21923[(2)] = inst_21731);

(statearr_21850_21923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (36))){
var inst_21775 = (state_21816[(25)]);
var inst_21779 = cljs.core.chunk_first.call(null,inst_21775);
var inst_21780 = cljs.core.chunk_rest.call(null,inst_21775);
var inst_21781 = cljs.core.count.call(null,inst_21779);
var inst_21756 = inst_21780;
var inst_21757 = inst_21779;
var inst_21758 = inst_21781;
var inst_21759 = (0);
var state_21816__$1 = (function (){var statearr_21851 = state_21816;
(statearr_21851[(9)] = inst_21757);

(statearr_21851[(10)] = inst_21759);

(statearr_21851[(20)] = inst_21756);

(statearr_21851[(21)] = inst_21758);

return statearr_21851;
})();
var statearr_21852_21924 = state_21816__$1;
(statearr_21852_21924[(2)] = null);

(statearr_21852_21924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (41))){
var inst_21775 = (state_21816[(25)]);
var inst_21791 = (state_21816[(2)]);
var inst_21792 = cljs.core.next.call(null,inst_21775);
var inst_21756 = inst_21792;
var inst_21757 = null;
var inst_21758 = (0);
var inst_21759 = (0);
var state_21816__$1 = (function (){var statearr_21853 = state_21816;
(statearr_21853[(9)] = inst_21757);

(statearr_21853[(10)] = inst_21759);

(statearr_21853[(20)] = inst_21756);

(statearr_21853[(21)] = inst_21758);

(statearr_21853[(27)] = inst_21791);

return statearr_21853;
})();
var statearr_21854_21925 = state_21816__$1;
(statearr_21854_21925[(2)] = null);

(statearr_21854_21925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (43))){
var state_21816__$1 = state_21816;
var statearr_21855_21926 = state_21816__$1;
(statearr_21855_21926[(2)] = null);

(statearr_21855_21926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (29))){
var inst_21800 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21856_21927 = state_21816__$1;
(statearr_21856_21927[(2)] = inst_21800);

(statearr_21856_21927[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (44))){
var inst_21809 = (state_21816[(2)]);
var state_21816__$1 = (function (){var statearr_21857 = state_21816;
(statearr_21857[(28)] = inst_21809);

return statearr_21857;
})();
var statearr_21858_21928 = state_21816__$1;
(statearr_21858_21928[(2)] = null);

(statearr_21858_21928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (6))){
var inst_21748 = (state_21816[(29)]);
var inst_21747 = cljs.core.deref.call(null,cs);
var inst_21748__$1 = cljs.core.keys.call(null,inst_21747);
var inst_21749 = cljs.core.count.call(null,inst_21748__$1);
var inst_21750 = cljs.core.reset_BANG_.call(null,dctr,inst_21749);
var inst_21755 = cljs.core.seq.call(null,inst_21748__$1);
var inst_21756 = inst_21755;
var inst_21757 = null;
var inst_21758 = (0);
var inst_21759 = (0);
var state_21816__$1 = (function (){var statearr_21859 = state_21816;
(statearr_21859[(9)] = inst_21757);

(statearr_21859[(10)] = inst_21759);

(statearr_21859[(20)] = inst_21756);

(statearr_21859[(21)] = inst_21758);

(statearr_21859[(30)] = inst_21750);

(statearr_21859[(29)] = inst_21748__$1);

return statearr_21859;
})();
var statearr_21860_21929 = state_21816__$1;
(statearr_21860_21929[(2)] = null);

(statearr_21860_21929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (28))){
var inst_21775 = (state_21816[(25)]);
var inst_21756 = (state_21816[(20)]);
var inst_21775__$1 = cljs.core.seq.call(null,inst_21756);
var state_21816__$1 = (function (){var statearr_21861 = state_21816;
(statearr_21861[(25)] = inst_21775__$1);

return statearr_21861;
})();
if(inst_21775__$1){
var statearr_21862_21930 = state_21816__$1;
(statearr_21862_21930[(1)] = (33));

} else {
var statearr_21863_21931 = state_21816__$1;
(statearr_21863_21931[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (25))){
var inst_21759 = (state_21816[(10)]);
var inst_21758 = (state_21816[(21)]);
var inst_21761 = (inst_21759 < inst_21758);
var inst_21762 = inst_21761;
var state_21816__$1 = state_21816;
if(cljs.core.truth_(inst_21762)){
var statearr_21864_21932 = state_21816__$1;
(statearr_21864_21932[(1)] = (27));

} else {
var statearr_21865_21933 = state_21816__$1;
(statearr_21865_21933[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (34))){
var state_21816__$1 = state_21816;
var statearr_21866_21934 = state_21816__$1;
(statearr_21866_21934[(2)] = null);

(statearr_21866_21934[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (17))){
var state_21816__$1 = state_21816;
var statearr_21867_21935 = state_21816__$1;
(statearr_21867_21935[(2)] = null);

(statearr_21867_21935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (3))){
var inst_21814 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21816__$1,inst_21814);
} else {
if((state_val_21817 === (12))){
var inst_21743 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21868_21936 = state_21816__$1;
(statearr_21868_21936[(2)] = inst_21743);

(statearr_21868_21936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (2))){
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21816__$1,(4),ch);
} else {
if((state_val_21817 === (23))){
var state_21816__$1 = state_21816;
var statearr_21869_21937 = state_21816__$1;
(statearr_21869_21937[(2)] = null);

(statearr_21869_21937[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (35))){
var inst_21798 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21870_21938 = state_21816__$1;
(statearr_21870_21938[(2)] = inst_21798);

(statearr_21870_21938[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (19))){
var inst_21717 = (state_21816[(7)]);
var inst_21721 = cljs.core.chunk_first.call(null,inst_21717);
var inst_21722 = cljs.core.chunk_rest.call(null,inst_21717);
var inst_21723 = cljs.core.count.call(null,inst_21721);
var inst_21697 = inst_21722;
var inst_21698 = inst_21721;
var inst_21699 = inst_21723;
var inst_21700 = (0);
var state_21816__$1 = (function (){var statearr_21871 = state_21816;
(statearr_21871[(13)] = inst_21697);

(statearr_21871[(14)] = inst_21700);

(statearr_21871[(15)] = inst_21699);

(statearr_21871[(16)] = inst_21698);

return statearr_21871;
})();
var statearr_21872_21939 = state_21816__$1;
(statearr_21872_21939[(2)] = null);

(statearr_21872_21939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (11))){
var inst_21717 = (state_21816[(7)]);
var inst_21697 = (state_21816[(13)]);
var inst_21717__$1 = cljs.core.seq.call(null,inst_21697);
var state_21816__$1 = (function (){var statearr_21873 = state_21816;
(statearr_21873[(7)] = inst_21717__$1);

return statearr_21873;
})();
if(inst_21717__$1){
var statearr_21874_21940 = state_21816__$1;
(statearr_21874_21940[(1)] = (16));

} else {
var statearr_21875_21941 = state_21816__$1;
(statearr_21875_21941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (9))){
var inst_21745 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21876_21942 = state_21816__$1;
(statearr_21876_21942[(2)] = inst_21745);

(statearr_21876_21942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (5))){
var inst_21695 = cljs.core.deref.call(null,cs);
var inst_21696 = cljs.core.seq.call(null,inst_21695);
var inst_21697 = inst_21696;
var inst_21698 = null;
var inst_21699 = (0);
var inst_21700 = (0);
var state_21816__$1 = (function (){var statearr_21877 = state_21816;
(statearr_21877[(13)] = inst_21697);

(statearr_21877[(14)] = inst_21700);

(statearr_21877[(15)] = inst_21699);

(statearr_21877[(16)] = inst_21698);

return statearr_21877;
})();
var statearr_21878_21943 = state_21816__$1;
(statearr_21878_21943[(2)] = null);

(statearr_21878_21943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (14))){
var state_21816__$1 = state_21816;
var statearr_21879_21944 = state_21816__$1;
(statearr_21879_21944[(2)] = null);

(statearr_21879_21944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (45))){
var inst_21806 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21880_21945 = state_21816__$1;
(statearr_21880_21945[(2)] = inst_21806);

(statearr_21880_21945[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (26))){
var inst_21748 = (state_21816[(29)]);
var inst_21802 = (state_21816[(2)]);
var inst_21803 = cljs.core.seq.call(null,inst_21748);
var state_21816__$1 = (function (){var statearr_21881 = state_21816;
(statearr_21881[(31)] = inst_21802);

return statearr_21881;
})();
if(inst_21803){
var statearr_21882_21946 = state_21816__$1;
(statearr_21882_21946[(1)] = (42));

} else {
var statearr_21883_21947 = state_21816__$1;
(statearr_21883_21947[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (16))){
var inst_21717 = (state_21816[(7)]);
var inst_21719 = cljs.core.chunked_seq_QMARK_.call(null,inst_21717);
var state_21816__$1 = state_21816;
if(inst_21719){
var statearr_21884_21948 = state_21816__$1;
(statearr_21884_21948[(1)] = (19));

} else {
var statearr_21885_21949 = state_21816__$1;
(statearr_21885_21949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (38))){
var inst_21795 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21886_21950 = state_21816__$1;
(statearr_21886_21950[(2)] = inst_21795);

(statearr_21886_21950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (30))){
var state_21816__$1 = state_21816;
var statearr_21887_21951 = state_21816__$1;
(statearr_21887_21951[(2)] = null);

(statearr_21887_21951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (10))){
var inst_21700 = (state_21816[(14)]);
var inst_21698 = (state_21816[(16)]);
var inst_21706 = cljs.core._nth.call(null,inst_21698,inst_21700);
var inst_21707 = cljs.core.nth.call(null,inst_21706,(0),null);
var inst_21708 = cljs.core.nth.call(null,inst_21706,(1),null);
var state_21816__$1 = (function (){var statearr_21888 = state_21816;
(statearr_21888[(26)] = inst_21707);

return statearr_21888;
})();
if(cljs.core.truth_(inst_21708)){
var statearr_21889_21952 = state_21816__$1;
(statearr_21889_21952[(1)] = (13));

} else {
var statearr_21890_21953 = state_21816__$1;
(statearr_21890_21953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (18))){
var inst_21741 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21891_21954 = state_21816__$1;
(statearr_21891_21954[(2)] = inst_21741);

(statearr_21891_21954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (42))){
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21816__$1,(45),dchan);
} else {
if((state_val_21817 === (37))){
var inst_21775 = (state_21816[(25)]);
var inst_21784 = (state_21816[(23)]);
var inst_21688 = (state_21816[(11)]);
var inst_21784__$1 = cljs.core.first.call(null,inst_21775);
var inst_21785 = cljs.core.async.put_BANG_.call(null,inst_21784__$1,inst_21688,done);
var state_21816__$1 = (function (){var statearr_21892 = state_21816;
(statearr_21892[(23)] = inst_21784__$1);

return statearr_21892;
})();
if(cljs.core.truth_(inst_21785)){
var statearr_21893_21955 = state_21816__$1;
(statearr_21893_21955[(1)] = (39));

} else {
var statearr_21894_21956 = state_21816__$1;
(statearr_21894_21956[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (8))){
var inst_21700 = (state_21816[(14)]);
var inst_21699 = (state_21816[(15)]);
var inst_21702 = (inst_21700 < inst_21699);
var inst_21703 = inst_21702;
var state_21816__$1 = state_21816;
if(cljs.core.truth_(inst_21703)){
var statearr_21895_21957 = state_21816__$1;
(statearr_21895_21957[(1)] = (10));

} else {
var statearr_21896_21958 = state_21816__$1;
(statearr_21896_21958[(1)] = (11));

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
});})(c__6524__auto___21904,cs,m,dchan,dctr,done))
;
return ((function (switch__6468__auto__,c__6524__auto___21904,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_21900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21900[(0)] = state_machine__6469__auto__);

(statearr_21900[(1)] = (1));

return statearr_21900;
});
var state_machine__6469__auto____1 = (function (state_21816){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_21816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e21901){if((e21901 instanceof Object)){
var ex__6472__auto__ = e21901;
var statearr_21902_21959 = state_21816;
(statearr_21902_21959[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21960 = state_21816;
state_21816 = G__21960;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_21816){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_21816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___21904,cs,m,dchan,dctr,done))
})();
var state__6526__auto__ = (function (){var statearr_21903 = f__6525__auto__.call(null);
(statearr_21903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___21904);

return statearr_21903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___21904,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21962 = {};
return obj21962;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21963){
var map__21968 = p__21963;
var map__21968__$1 = ((cljs.core.seq_QMARK_.call(null,map__21968))?cljs.core.apply.call(null,cljs.core.hash_map,map__21968):map__21968);
var opts = map__21968__$1;
var statearr_21969_21972 = state;
(statearr_21969_21972[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21968,map__21968__$1,opts){
return (function (val){
var statearr_21970_21973 = state;
(statearr_21970_21973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21968,map__21968__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21971_21974 = state;
(statearr_21971_21974[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21963 = null;
if (arguments.length > 3) {
  p__21963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21963);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21975){
var state = cljs.core.first(arglist__21975);
arglist__21975 = cljs.core.next(arglist__21975);
var cont_block = cljs.core.first(arglist__21975);
arglist__21975 = cljs.core.next(arglist__21975);
var ports = cljs.core.first(arglist__21975);
var p__21963 = cljs.core.rest(arglist__21975);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21963);
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
if(typeof cljs.core.async.t22095 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22095 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22096){
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
this.meta22096 = meta22096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22095.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t22095.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22097){
var self__ = this;
var _22097__$1 = this;
return self__.meta22096;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22097,meta22096__$1){
var self__ = this;
var _22097__$1 = this;
return (new cljs.core.async.t22095(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22096__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22095.cljs$lang$type = true;

cljs.core.async.t22095.cljs$lang$ctorStr = "cljs.core.async/t22095";

cljs.core.async.t22095.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22095");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22095 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22095(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22096){
return (new cljs.core.async.t22095(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22096));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22095(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6524__auto___22214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___22214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___22214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22167){
var state_val_22168 = (state_22167[(1)]);
if((state_val_22168 === (7))){
var inst_22111 = (state_22167[(7)]);
var inst_22116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22111);
var state_22167__$1 = state_22167;
var statearr_22169_22215 = state_22167__$1;
(statearr_22169_22215[(2)] = inst_22116);

(statearr_22169_22215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (20))){
var inst_22126 = (state_22167[(8)]);
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22167__$1,(23),out,inst_22126);
} else {
if((state_val_22168 === (1))){
var inst_22101 = (state_22167[(9)]);
var inst_22101__$1 = calc_state.call(null);
var inst_22102 = cljs.core.seq_QMARK_.call(null,inst_22101__$1);
var state_22167__$1 = (function (){var statearr_22170 = state_22167;
(statearr_22170[(9)] = inst_22101__$1);

return statearr_22170;
})();
if(inst_22102){
var statearr_22171_22216 = state_22167__$1;
(statearr_22171_22216[(1)] = (2));

} else {
var statearr_22172_22217 = state_22167__$1;
(statearr_22172_22217[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (24))){
var inst_22119 = (state_22167[(10)]);
var inst_22111 = inst_22119;
var state_22167__$1 = (function (){var statearr_22173 = state_22167;
(statearr_22173[(7)] = inst_22111);

return statearr_22173;
})();
var statearr_22174_22218 = state_22167__$1;
(statearr_22174_22218[(2)] = null);

(statearr_22174_22218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (4))){
var inst_22101 = (state_22167[(9)]);
var inst_22107 = (state_22167[(2)]);
var inst_22108 = cljs.core.get.call(null,inst_22107,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22109 = cljs.core.get.call(null,inst_22107,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22110 = cljs.core.get.call(null,inst_22107,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22111 = inst_22101;
var state_22167__$1 = (function (){var statearr_22175 = state_22167;
(statearr_22175[(7)] = inst_22111);

(statearr_22175[(11)] = inst_22108);

(statearr_22175[(12)] = inst_22109);

(statearr_22175[(13)] = inst_22110);

return statearr_22175;
})();
var statearr_22176_22219 = state_22167__$1;
(statearr_22176_22219[(2)] = null);

(statearr_22176_22219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (15))){
var state_22167__$1 = state_22167;
var statearr_22177_22220 = state_22167__$1;
(statearr_22177_22220[(2)] = null);

(statearr_22177_22220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (21))){
var inst_22119 = (state_22167[(10)]);
var inst_22111 = inst_22119;
var state_22167__$1 = (function (){var statearr_22178 = state_22167;
(statearr_22178[(7)] = inst_22111);

return statearr_22178;
})();
var statearr_22179_22221 = state_22167__$1;
(statearr_22179_22221[(2)] = null);

(statearr_22179_22221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (13))){
var inst_22163 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22180_22222 = state_22167__$1;
(statearr_22180_22222[(2)] = inst_22163);

(statearr_22180_22222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (22))){
var inst_22161 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22181_22223 = state_22167__$1;
(statearr_22181_22223[(2)] = inst_22161);

(statearr_22181_22223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (6))){
var inst_22165 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22167__$1,inst_22165);
} else {
if((state_val_22168 === (25))){
var state_22167__$1 = state_22167;
var statearr_22182_22224 = state_22167__$1;
(statearr_22182_22224[(2)] = null);

(statearr_22182_22224[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (17))){
var inst_22141 = (state_22167[(14)]);
var state_22167__$1 = state_22167;
var statearr_22183_22225 = state_22167__$1;
(statearr_22183_22225[(2)] = inst_22141);

(statearr_22183_22225[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (3))){
var inst_22101 = (state_22167[(9)]);
var state_22167__$1 = state_22167;
var statearr_22184_22226 = state_22167__$1;
(statearr_22184_22226[(2)] = inst_22101);

(statearr_22184_22226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (12))){
var inst_22122 = (state_22167[(15)]);
var inst_22141 = (state_22167[(14)]);
var inst_22127 = (state_22167[(16)]);
var inst_22141__$1 = inst_22122.call(null,inst_22127);
var state_22167__$1 = (function (){var statearr_22185 = state_22167;
(statearr_22185[(14)] = inst_22141__$1);

return statearr_22185;
})();
if(cljs.core.truth_(inst_22141__$1)){
var statearr_22186_22227 = state_22167__$1;
(statearr_22186_22227[(1)] = (17));

} else {
var statearr_22187_22228 = state_22167__$1;
(statearr_22187_22228[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (2))){
var inst_22101 = (state_22167[(9)]);
var inst_22104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22101);
var state_22167__$1 = state_22167;
var statearr_22188_22229 = state_22167__$1;
(statearr_22188_22229[(2)] = inst_22104);

(statearr_22188_22229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (23))){
var inst_22152 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
if(cljs.core.truth_(inst_22152)){
var statearr_22189_22230 = state_22167__$1;
(statearr_22189_22230[(1)] = (24));

} else {
var statearr_22190_22231 = state_22167__$1;
(statearr_22190_22231[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (19))){
var inst_22149 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
if(cljs.core.truth_(inst_22149)){
var statearr_22191_22232 = state_22167__$1;
(statearr_22191_22232[(1)] = (20));

} else {
var statearr_22192_22233 = state_22167__$1;
(statearr_22192_22233[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (11))){
var inst_22126 = (state_22167[(8)]);
var inst_22132 = (inst_22126 == null);
var state_22167__$1 = state_22167;
if(cljs.core.truth_(inst_22132)){
var statearr_22193_22234 = state_22167__$1;
(statearr_22193_22234[(1)] = (14));

} else {
var statearr_22194_22235 = state_22167__$1;
(statearr_22194_22235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (9))){
var inst_22119 = (state_22167[(10)]);
var inst_22119__$1 = (state_22167[(2)]);
var inst_22120 = cljs.core.get.call(null,inst_22119__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22121 = cljs.core.get.call(null,inst_22119__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22122 = cljs.core.get.call(null,inst_22119__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22167__$1 = (function (){var statearr_22195 = state_22167;
(statearr_22195[(10)] = inst_22119__$1);

(statearr_22195[(15)] = inst_22122);

(statearr_22195[(17)] = inst_22121);

return statearr_22195;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22167__$1,(10),inst_22120);
} else {
if((state_val_22168 === (5))){
var inst_22111 = (state_22167[(7)]);
var inst_22114 = cljs.core.seq_QMARK_.call(null,inst_22111);
var state_22167__$1 = state_22167;
if(inst_22114){
var statearr_22196_22236 = state_22167__$1;
(statearr_22196_22236[(1)] = (7));

} else {
var statearr_22197_22237 = state_22167__$1;
(statearr_22197_22237[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (14))){
var inst_22127 = (state_22167[(16)]);
var inst_22134 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22127);
var state_22167__$1 = state_22167;
var statearr_22198_22238 = state_22167__$1;
(statearr_22198_22238[(2)] = inst_22134);

(statearr_22198_22238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (26))){
var inst_22157 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22199_22239 = state_22167__$1;
(statearr_22199_22239[(2)] = inst_22157);

(statearr_22199_22239[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (16))){
var inst_22137 = (state_22167[(2)]);
var inst_22138 = calc_state.call(null);
var inst_22111 = inst_22138;
var state_22167__$1 = (function (){var statearr_22200 = state_22167;
(statearr_22200[(7)] = inst_22111);

(statearr_22200[(18)] = inst_22137);

return statearr_22200;
})();
var statearr_22201_22240 = state_22167__$1;
(statearr_22201_22240[(2)] = null);

(statearr_22201_22240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (10))){
var inst_22127 = (state_22167[(16)]);
var inst_22126 = (state_22167[(8)]);
var inst_22125 = (state_22167[(2)]);
var inst_22126__$1 = cljs.core.nth.call(null,inst_22125,(0),null);
var inst_22127__$1 = cljs.core.nth.call(null,inst_22125,(1),null);
var inst_22128 = (inst_22126__$1 == null);
var inst_22129 = cljs.core._EQ_.call(null,inst_22127__$1,change);
var inst_22130 = (inst_22128) || (inst_22129);
var state_22167__$1 = (function (){var statearr_22202 = state_22167;
(statearr_22202[(16)] = inst_22127__$1);

(statearr_22202[(8)] = inst_22126__$1);

return statearr_22202;
})();
if(cljs.core.truth_(inst_22130)){
var statearr_22203_22241 = state_22167__$1;
(statearr_22203_22241[(1)] = (11));

} else {
var statearr_22204_22242 = state_22167__$1;
(statearr_22204_22242[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (18))){
var inst_22122 = (state_22167[(15)]);
var inst_22127 = (state_22167[(16)]);
var inst_22121 = (state_22167[(17)]);
var inst_22144 = cljs.core.empty_QMARK_.call(null,inst_22122);
var inst_22145 = inst_22121.call(null,inst_22127);
var inst_22146 = cljs.core.not.call(null,inst_22145);
var inst_22147 = (inst_22144) && (inst_22146);
var state_22167__$1 = state_22167;
var statearr_22205_22243 = state_22167__$1;
(statearr_22205_22243[(2)] = inst_22147);

(statearr_22205_22243[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (8))){
var inst_22111 = (state_22167[(7)]);
var state_22167__$1 = state_22167;
var statearr_22206_22244 = state_22167__$1;
(statearr_22206_22244[(2)] = inst_22111);

(statearr_22206_22244[(1)] = (9));


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
});})(c__6524__auto___22214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6468__auto__,c__6524__auto___22214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_22210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22210[(0)] = state_machine__6469__auto__);

(statearr_22210[(1)] = (1));

return statearr_22210;
});
var state_machine__6469__auto____1 = (function (state_22167){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_22167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e22211){if((e22211 instanceof Object)){
var ex__6472__auto__ = e22211;
var statearr_22212_22245 = state_22167;
(statearr_22212_22245[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22246 = state_22167;
state_22167 = G__22246;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_22167){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_22167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___22214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6526__auto__ = (function (){var statearr_22213 = f__6525__auto__.call(null);
(statearr_22213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___22214);

return statearr_22213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___22214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22248 = {};
return obj22248;
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
return (function (p1__22249_SHARP_){
if(cljs.core.truth_(p1__22249_SHARP_.call(null,topic))){
return p1__22249_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22249_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22372 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22372 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22373){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22373 = meta22373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22372.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22372.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22372.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22374){
var self__ = this;
var _22374__$1 = this;
return self__.meta22373;
});})(mults,ensure_mult))
;

cljs.core.async.t22372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22374,meta22373__$1){
var self__ = this;
var _22374__$1 = this;
return (new cljs.core.async.t22372(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22373__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22372.cljs$lang$type = true;

cljs.core.async.t22372.cljs$lang$ctorStr = "cljs.core.async/t22372";

cljs.core.async.t22372.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22372");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22372 = ((function (mults,ensure_mult){
return (function __GT_t22372(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22373){
return (new cljs.core.async.t22372(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22373));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22372(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6524__auto___22494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___22494,mults,ensure_mult,p){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___22494,mults,ensure_mult,p){
return (function (state_22446){
var state_val_22447 = (state_22446[(1)]);
if((state_val_22447 === (7))){
var inst_22442 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22448_22495 = state_22446__$1;
(statearr_22448_22495[(2)] = inst_22442);

(statearr_22448_22495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (20))){
var state_22446__$1 = state_22446;
var statearr_22449_22496 = state_22446__$1;
(statearr_22449_22496[(2)] = null);

(statearr_22449_22496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (1))){
var state_22446__$1 = state_22446;
var statearr_22450_22497 = state_22446__$1;
(statearr_22450_22497[(2)] = null);

(statearr_22450_22497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (24))){
var inst_22425 = (state_22446[(7)]);
var inst_22434 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22425);
var state_22446__$1 = state_22446;
var statearr_22451_22498 = state_22446__$1;
(statearr_22451_22498[(2)] = inst_22434);

(statearr_22451_22498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (4))){
var inst_22377 = (state_22446[(8)]);
var inst_22377__$1 = (state_22446[(2)]);
var inst_22378 = (inst_22377__$1 == null);
var state_22446__$1 = (function (){var statearr_22452 = state_22446;
(statearr_22452[(8)] = inst_22377__$1);

return statearr_22452;
})();
if(cljs.core.truth_(inst_22378)){
var statearr_22453_22499 = state_22446__$1;
(statearr_22453_22499[(1)] = (5));

} else {
var statearr_22454_22500 = state_22446__$1;
(statearr_22454_22500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (15))){
var inst_22419 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22455_22501 = state_22446__$1;
(statearr_22455_22501[(2)] = inst_22419);

(statearr_22455_22501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (21))){
var inst_22439 = (state_22446[(2)]);
var state_22446__$1 = (function (){var statearr_22456 = state_22446;
(statearr_22456[(9)] = inst_22439);

return statearr_22456;
})();
var statearr_22457_22502 = state_22446__$1;
(statearr_22457_22502[(2)] = null);

(statearr_22457_22502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (13))){
var inst_22401 = (state_22446[(10)]);
var inst_22403 = cljs.core.chunked_seq_QMARK_.call(null,inst_22401);
var state_22446__$1 = state_22446;
if(inst_22403){
var statearr_22458_22503 = state_22446__$1;
(statearr_22458_22503[(1)] = (16));

} else {
var statearr_22459_22504 = state_22446__$1;
(statearr_22459_22504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (22))){
var inst_22431 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
if(cljs.core.truth_(inst_22431)){
var statearr_22460_22505 = state_22446__$1;
(statearr_22460_22505[(1)] = (23));

} else {
var statearr_22461_22506 = state_22446__$1;
(statearr_22461_22506[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (6))){
var inst_22377 = (state_22446[(8)]);
var inst_22425 = (state_22446[(7)]);
var inst_22427 = (state_22446[(11)]);
var inst_22425__$1 = topic_fn.call(null,inst_22377);
var inst_22426 = cljs.core.deref.call(null,mults);
var inst_22427__$1 = cljs.core.get.call(null,inst_22426,inst_22425__$1);
var state_22446__$1 = (function (){var statearr_22462 = state_22446;
(statearr_22462[(7)] = inst_22425__$1);

(statearr_22462[(11)] = inst_22427__$1);

return statearr_22462;
})();
if(cljs.core.truth_(inst_22427__$1)){
var statearr_22463_22507 = state_22446__$1;
(statearr_22463_22507[(1)] = (19));

} else {
var statearr_22464_22508 = state_22446__$1;
(statearr_22464_22508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (25))){
var inst_22436 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22465_22509 = state_22446__$1;
(statearr_22465_22509[(2)] = inst_22436);

(statearr_22465_22509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (17))){
var inst_22401 = (state_22446[(10)]);
var inst_22410 = cljs.core.first.call(null,inst_22401);
var inst_22411 = cljs.core.async.muxch_STAR_.call(null,inst_22410);
var inst_22412 = cljs.core.async.close_BANG_.call(null,inst_22411);
var inst_22413 = cljs.core.next.call(null,inst_22401);
var inst_22387 = inst_22413;
var inst_22388 = null;
var inst_22389 = (0);
var inst_22390 = (0);
var state_22446__$1 = (function (){var statearr_22466 = state_22446;
(statearr_22466[(12)] = inst_22412);

(statearr_22466[(13)] = inst_22389);

(statearr_22466[(14)] = inst_22388);

(statearr_22466[(15)] = inst_22387);

(statearr_22466[(16)] = inst_22390);

return statearr_22466;
})();
var statearr_22467_22510 = state_22446__$1;
(statearr_22467_22510[(2)] = null);

(statearr_22467_22510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (3))){
var inst_22444 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22446__$1,inst_22444);
} else {
if((state_val_22447 === (12))){
var inst_22421 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22468_22511 = state_22446__$1;
(statearr_22468_22511[(2)] = inst_22421);

(statearr_22468_22511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (2))){
var state_22446__$1 = state_22446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22446__$1,(4),ch);
} else {
if((state_val_22447 === (23))){
var state_22446__$1 = state_22446;
var statearr_22469_22512 = state_22446__$1;
(statearr_22469_22512[(2)] = null);

(statearr_22469_22512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (19))){
var inst_22377 = (state_22446[(8)]);
var inst_22427 = (state_22446[(11)]);
var inst_22429 = cljs.core.async.muxch_STAR_.call(null,inst_22427);
var state_22446__$1 = state_22446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22446__$1,(22),inst_22429,inst_22377);
} else {
if((state_val_22447 === (11))){
var inst_22401 = (state_22446[(10)]);
var inst_22387 = (state_22446[(15)]);
var inst_22401__$1 = cljs.core.seq.call(null,inst_22387);
var state_22446__$1 = (function (){var statearr_22470 = state_22446;
(statearr_22470[(10)] = inst_22401__$1);

return statearr_22470;
})();
if(inst_22401__$1){
var statearr_22471_22513 = state_22446__$1;
(statearr_22471_22513[(1)] = (13));

} else {
var statearr_22472_22514 = state_22446__$1;
(statearr_22472_22514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (9))){
var inst_22423 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22473_22515 = state_22446__$1;
(statearr_22473_22515[(2)] = inst_22423);

(statearr_22473_22515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (5))){
var inst_22384 = cljs.core.deref.call(null,mults);
var inst_22385 = cljs.core.vals.call(null,inst_22384);
var inst_22386 = cljs.core.seq.call(null,inst_22385);
var inst_22387 = inst_22386;
var inst_22388 = null;
var inst_22389 = (0);
var inst_22390 = (0);
var state_22446__$1 = (function (){var statearr_22474 = state_22446;
(statearr_22474[(13)] = inst_22389);

(statearr_22474[(14)] = inst_22388);

(statearr_22474[(15)] = inst_22387);

(statearr_22474[(16)] = inst_22390);

return statearr_22474;
})();
var statearr_22475_22516 = state_22446__$1;
(statearr_22475_22516[(2)] = null);

(statearr_22475_22516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (14))){
var state_22446__$1 = state_22446;
var statearr_22479_22517 = state_22446__$1;
(statearr_22479_22517[(2)] = null);

(statearr_22479_22517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (16))){
var inst_22401 = (state_22446[(10)]);
var inst_22405 = cljs.core.chunk_first.call(null,inst_22401);
var inst_22406 = cljs.core.chunk_rest.call(null,inst_22401);
var inst_22407 = cljs.core.count.call(null,inst_22405);
var inst_22387 = inst_22406;
var inst_22388 = inst_22405;
var inst_22389 = inst_22407;
var inst_22390 = (0);
var state_22446__$1 = (function (){var statearr_22480 = state_22446;
(statearr_22480[(13)] = inst_22389);

(statearr_22480[(14)] = inst_22388);

(statearr_22480[(15)] = inst_22387);

(statearr_22480[(16)] = inst_22390);

return statearr_22480;
})();
var statearr_22481_22518 = state_22446__$1;
(statearr_22481_22518[(2)] = null);

(statearr_22481_22518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (10))){
var inst_22389 = (state_22446[(13)]);
var inst_22388 = (state_22446[(14)]);
var inst_22387 = (state_22446[(15)]);
var inst_22390 = (state_22446[(16)]);
var inst_22395 = cljs.core._nth.call(null,inst_22388,inst_22390);
var inst_22396 = cljs.core.async.muxch_STAR_.call(null,inst_22395);
var inst_22397 = cljs.core.async.close_BANG_.call(null,inst_22396);
var inst_22398 = (inst_22390 + (1));
var tmp22476 = inst_22389;
var tmp22477 = inst_22388;
var tmp22478 = inst_22387;
var inst_22387__$1 = tmp22478;
var inst_22388__$1 = tmp22477;
var inst_22389__$1 = tmp22476;
var inst_22390__$1 = inst_22398;
var state_22446__$1 = (function (){var statearr_22482 = state_22446;
(statearr_22482[(13)] = inst_22389__$1);

(statearr_22482[(14)] = inst_22388__$1);

(statearr_22482[(15)] = inst_22387__$1);

(statearr_22482[(17)] = inst_22397);

(statearr_22482[(16)] = inst_22390__$1);

return statearr_22482;
})();
var statearr_22483_22519 = state_22446__$1;
(statearr_22483_22519[(2)] = null);

(statearr_22483_22519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (18))){
var inst_22416 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22484_22520 = state_22446__$1;
(statearr_22484_22520[(2)] = inst_22416);

(statearr_22484_22520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (8))){
var inst_22389 = (state_22446[(13)]);
var inst_22390 = (state_22446[(16)]);
var inst_22392 = (inst_22390 < inst_22389);
var inst_22393 = inst_22392;
var state_22446__$1 = state_22446;
if(cljs.core.truth_(inst_22393)){
var statearr_22485_22521 = state_22446__$1;
(statearr_22485_22521[(1)] = (10));

} else {
var statearr_22486_22522 = state_22446__$1;
(statearr_22486_22522[(1)] = (11));

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
});})(c__6524__auto___22494,mults,ensure_mult,p))
;
return ((function (switch__6468__auto__,c__6524__auto___22494,mults,ensure_mult,p){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = state_machine__6469__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var state_machine__6469__auto____1 = (function (state_22446){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_22446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__6472__auto__ = e22491;
var statearr_22492_22523 = state_22446;
(statearr_22492_22523[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22524 = state_22446;
state_22446 = G__22524;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_22446){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_22446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___22494,mults,ensure_mult,p))
})();
var state__6526__auto__ = (function (){var statearr_22493 = f__6525__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___22494);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___22494,mults,ensure_mult,p))
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
var c__6524__auto___22661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___22661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___22661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22631){
var state_val_22632 = (state_22631[(1)]);
if((state_val_22632 === (7))){
var state_22631__$1 = state_22631;
var statearr_22633_22662 = state_22631__$1;
(statearr_22633_22662[(2)] = null);

(statearr_22633_22662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (1))){
var state_22631__$1 = state_22631;
var statearr_22634_22663 = state_22631__$1;
(statearr_22634_22663[(2)] = null);

(statearr_22634_22663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (4))){
var inst_22595 = (state_22631[(7)]);
var inst_22597 = (inst_22595 < cnt);
var state_22631__$1 = state_22631;
if(cljs.core.truth_(inst_22597)){
var statearr_22635_22664 = state_22631__$1;
(statearr_22635_22664[(1)] = (6));

} else {
var statearr_22636_22665 = state_22631__$1;
(statearr_22636_22665[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (15))){
var inst_22627 = (state_22631[(2)]);
var state_22631__$1 = state_22631;
var statearr_22637_22666 = state_22631__$1;
(statearr_22637_22666[(2)] = inst_22627);

(statearr_22637_22666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (13))){
var inst_22620 = cljs.core.async.close_BANG_.call(null,out);
var state_22631__$1 = state_22631;
var statearr_22638_22667 = state_22631__$1;
(statearr_22638_22667[(2)] = inst_22620);

(statearr_22638_22667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (6))){
var state_22631__$1 = state_22631;
var statearr_22639_22668 = state_22631__$1;
(statearr_22639_22668[(2)] = null);

(statearr_22639_22668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (3))){
var inst_22629 = (state_22631[(2)]);
var state_22631__$1 = state_22631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22631__$1,inst_22629);
} else {
if((state_val_22632 === (12))){
var inst_22617 = (state_22631[(8)]);
var inst_22617__$1 = (state_22631[(2)]);
var inst_22618 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22617__$1);
var state_22631__$1 = (function (){var statearr_22640 = state_22631;
(statearr_22640[(8)] = inst_22617__$1);

return statearr_22640;
})();
if(cljs.core.truth_(inst_22618)){
var statearr_22641_22669 = state_22631__$1;
(statearr_22641_22669[(1)] = (13));

} else {
var statearr_22642_22670 = state_22631__$1;
(statearr_22642_22670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (2))){
var inst_22594 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22595 = (0);
var state_22631__$1 = (function (){var statearr_22643 = state_22631;
(statearr_22643[(7)] = inst_22595);

(statearr_22643[(9)] = inst_22594);

return statearr_22643;
})();
var statearr_22644_22671 = state_22631__$1;
(statearr_22644_22671[(2)] = null);

(statearr_22644_22671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (11))){
var inst_22595 = (state_22631[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22631,(10),Object,null,(9));
var inst_22604 = chs__$1.call(null,inst_22595);
var inst_22605 = done.call(null,inst_22595);
var inst_22606 = cljs.core.async.take_BANG_.call(null,inst_22604,inst_22605);
var state_22631__$1 = state_22631;
var statearr_22645_22672 = state_22631__$1;
(statearr_22645_22672[(2)] = inst_22606);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (9))){
var inst_22595 = (state_22631[(7)]);
var inst_22608 = (state_22631[(2)]);
var inst_22609 = (inst_22595 + (1));
var inst_22595__$1 = inst_22609;
var state_22631__$1 = (function (){var statearr_22646 = state_22631;
(statearr_22646[(10)] = inst_22608);

(statearr_22646[(7)] = inst_22595__$1);

return statearr_22646;
})();
var statearr_22647_22673 = state_22631__$1;
(statearr_22647_22673[(2)] = null);

(statearr_22647_22673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (5))){
var inst_22615 = (state_22631[(2)]);
var state_22631__$1 = (function (){var statearr_22648 = state_22631;
(statearr_22648[(11)] = inst_22615);

return statearr_22648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22631__$1,(12),dchan);
} else {
if((state_val_22632 === (14))){
var inst_22617 = (state_22631[(8)]);
var inst_22622 = cljs.core.apply.call(null,f,inst_22617);
var state_22631__$1 = state_22631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22631__$1,(16),out,inst_22622);
} else {
if((state_val_22632 === (16))){
var inst_22624 = (state_22631[(2)]);
var state_22631__$1 = (function (){var statearr_22649 = state_22631;
(statearr_22649[(12)] = inst_22624);

return statearr_22649;
})();
var statearr_22650_22674 = state_22631__$1;
(statearr_22650_22674[(2)] = null);

(statearr_22650_22674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (10))){
var inst_22599 = (state_22631[(2)]);
var inst_22600 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22631__$1 = (function (){var statearr_22651 = state_22631;
(statearr_22651[(13)] = inst_22599);

return statearr_22651;
})();
var statearr_22652_22675 = state_22631__$1;
(statearr_22652_22675[(2)] = inst_22600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (8))){
var inst_22613 = (state_22631[(2)]);
var state_22631__$1 = state_22631;
var statearr_22653_22676 = state_22631__$1;
(statearr_22653_22676[(2)] = inst_22613);

(statearr_22653_22676[(1)] = (5));


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
});})(c__6524__auto___22661,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6468__auto__,c__6524__auto___22661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_22657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22657[(0)] = state_machine__6469__auto__);

(statearr_22657[(1)] = (1));

return statearr_22657;
});
var state_machine__6469__auto____1 = (function (state_22631){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_22631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e22658){if((e22658 instanceof Object)){
var ex__6472__auto__ = e22658;
var statearr_22659_22677 = state_22631;
(statearr_22659_22677[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22678 = state_22631;
state_22631 = G__22678;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_22631){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_22631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___22661,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6526__auto__ = (function (){var statearr_22660 = f__6525__auto__.call(null);
(statearr_22660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___22661);

return statearr_22660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___22661,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6524__auto___22786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___22786,out){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___22786,out){
return (function (state_22762){
var state_val_22763 = (state_22762[(1)]);
if((state_val_22763 === (7))){
var inst_22741 = (state_22762[(7)]);
var inst_22742 = (state_22762[(8)]);
var inst_22741__$1 = (state_22762[(2)]);
var inst_22742__$1 = cljs.core.nth.call(null,inst_22741__$1,(0),null);
var inst_22743 = cljs.core.nth.call(null,inst_22741__$1,(1),null);
var inst_22744 = (inst_22742__$1 == null);
var state_22762__$1 = (function (){var statearr_22764 = state_22762;
(statearr_22764[(7)] = inst_22741__$1);

(statearr_22764[(8)] = inst_22742__$1);

(statearr_22764[(9)] = inst_22743);

return statearr_22764;
})();
if(cljs.core.truth_(inst_22744)){
var statearr_22765_22787 = state_22762__$1;
(statearr_22765_22787[(1)] = (8));

} else {
var statearr_22766_22788 = state_22762__$1;
(statearr_22766_22788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (1))){
var inst_22733 = cljs.core.vec.call(null,chs);
var inst_22734 = inst_22733;
var state_22762__$1 = (function (){var statearr_22767 = state_22762;
(statearr_22767[(10)] = inst_22734);

return statearr_22767;
})();
var statearr_22768_22789 = state_22762__$1;
(statearr_22768_22789[(2)] = null);

(statearr_22768_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (4))){
var inst_22734 = (state_22762[(10)]);
var state_22762__$1 = state_22762;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22762__$1,(7),inst_22734);
} else {
if((state_val_22763 === (6))){
var inst_22758 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22769_22790 = state_22762__$1;
(statearr_22769_22790[(2)] = inst_22758);

(statearr_22769_22790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (3))){
var inst_22760 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22762__$1,inst_22760);
} else {
if((state_val_22763 === (2))){
var inst_22734 = (state_22762[(10)]);
var inst_22736 = cljs.core.count.call(null,inst_22734);
var inst_22737 = (inst_22736 > (0));
var state_22762__$1 = state_22762;
if(cljs.core.truth_(inst_22737)){
var statearr_22771_22791 = state_22762__$1;
(statearr_22771_22791[(1)] = (4));

} else {
var statearr_22772_22792 = state_22762__$1;
(statearr_22772_22792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (11))){
var inst_22734 = (state_22762[(10)]);
var inst_22751 = (state_22762[(2)]);
var tmp22770 = inst_22734;
var inst_22734__$1 = tmp22770;
var state_22762__$1 = (function (){var statearr_22773 = state_22762;
(statearr_22773[(10)] = inst_22734__$1);

(statearr_22773[(11)] = inst_22751);

return statearr_22773;
})();
var statearr_22774_22793 = state_22762__$1;
(statearr_22774_22793[(2)] = null);

(statearr_22774_22793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (9))){
var inst_22742 = (state_22762[(8)]);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22762__$1,(11),out,inst_22742);
} else {
if((state_val_22763 === (5))){
var inst_22756 = cljs.core.async.close_BANG_.call(null,out);
var state_22762__$1 = state_22762;
var statearr_22775_22794 = state_22762__$1;
(statearr_22775_22794[(2)] = inst_22756);

(statearr_22775_22794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (10))){
var inst_22754 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22776_22795 = state_22762__$1;
(statearr_22776_22795[(2)] = inst_22754);

(statearr_22776_22795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (8))){
var inst_22734 = (state_22762[(10)]);
var inst_22741 = (state_22762[(7)]);
var inst_22742 = (state_22762[(8)]);
var inst_22743 = (state_22762[(9)]);
var inst_22746 = (function (){var c = inst_22743;
var v = inst_22742;
var vec__22739 = inst_22741;
var cs = inst_22734;
return ((function (c,v,vec__22739,cs,inst_22734,inst_22741,inst_22742,inst_22743,state_val_22763,c__6524__auto___22786,out){
return (function (p1__22679_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22679_SHARP_);
});
;})(c,v,vec__22739,cs,inst_22734,inst_22741,inst_22742,inst_22743,state_val_22763,c__6524__auto___22786,out))
})();
var inst_22747 = cljs.core.filterv.call(null,inst_22746,inst_22734);
var inst_22734__$1 = inst_22747;
var state_22762__$1 = (function (){var statearr_22777 = state_22762;
(statearr_22777[(10)] = inst_22734__$1);

return statearr_22777;
})();
var statearr_22778_22796 = state_22762__$1;
(statearr_22778_22796[(2)] = null);

(statearr_22778_22796[(1)] = (2));


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
});})(c__6524__auto___22786,out))
;
return ((function (switch__6468__auto__,c__6524__auto___22786,out){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_22782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22782[(0)] = state_machine__6469__auto__);

(statearr_22782[(1)] = (1));

return statearr_22782;
});
var state_machine__6469__auto____1 = (function (state_22762){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_22762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e22783){if((e22783 instanceof Object)){
var ex__6472__auto__ = e22783;
var statearr_22784_22797 = state_22762;
(statearr_22784_22797[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22798 = state_22762;
state_22762 = G__22798;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_22762){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_22762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___22786,out))
})();
var state__6526__auto__ = (function (){var statearr_22785 = f__6525__auto__.call(null);
(statearr_22785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___22786);

return statearr_22785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___22786,out))
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
var c__6524__auto___22891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___22891,out){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___22891,out){
return (function (state_22868){
var state_val_22869 = (state_22868[(1)]);
if((state_val_22869 === (7))){
var inst_22850 = (state_22868[(7)]);
var inst_22850__$1 = (state_22868[(2)]);
var inst_22851 = (inst_22850__$1 == null);
var inst_22852 = cljs.core.not.call(null,inst_22851);
var state_22868__$1 = (function (){var statearr_22870 = state_22868;
(statearr_22870[(7)] = inst_22850__$1);

return statearr_22870;
})();
if(inst_22852){
var statearr_22871_22892 = state_22868__$1;
(statearr_22871_22892[(1)] = (8));

} else {
var statearr_22872_22893 = state_22868__$1;
(statearr_22872_22893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (1))){
var inst_22845 = (0);
var state_22868__$1 = (function (){var statearr_22873 = state_22868;
(statearr_22873[(8)] = inst_22845);

return statearr_22873;
})();
var statearr_22874_22894 = state_22868__$1;
(statearr_22874_22894[(2)] = null);

(statearr_22874_22894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (4))){
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22868__$1,(7),ch);
} else {
if((state_val_22869 === (6))){
var inst_22863 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22875_22895 = state_22868__$1;
(statearr_22875_22895[(2)] = inst_22863);

(statearr_22875_22895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (3))){
var inst_22865 = (state_22868[(2)]);
var inst_22866 = cljs.core.async.close_BANG_.call(null,out);
var state_22868__$1 = (function (){var statearr_22876 = state_22868;
(statearr_22876[(9)] = inst_22865);

return statearr_22876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22868__$1,inst_22866);
} else {
if((state_val_22869 === (2))){
var inst_22845 = (state_22868[(8)]);
var inst_22847 = (inst_22845 < n);
var state_22868__$1 = state_22868;
if(cljs.core.truth_(inst_22847)){
var statearr_22877_22896 = state_22868__$1;
(statearr_22877_22896[(1)] = (4));

} else {
var statearr_22878_22897 = state_22868__$1;
(statearr_22878_22897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (11))){
var inst_22845 = (state_22868[(8)]);
var inst_22855 = (state_22868[(2)]);
var inst_22856 = (inst_22845 + (1));
var inst_22845__$1 = inst_22856;
var state_22868__$1 = (function (){var statearr_22879 = state_22868;
(statearr_22879[(8)] = inst_22845__$1);

(statearr_22879[(10)] = inst_22855);

return statearr_22879;
})();
var statearr_22880_22898 = state_22868__$1;
(statearr_22880_22898[(2)] = null);

(statearr_22880_22898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (9))){
var state_22868__$1 = state_22868;
var statearr_22881_22899 = state_22868__$1;
(statearr_22881_22899[(2)] = null);

(statearr_22881_22899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (5))){
var state_22868__$1 = state_22868;
var statearr_22882_22900 = state_22868__$1;
(statearr_22882_22900[(2)] = null);

(statearr_22882_22900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (10))){
var inst_22860 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22883_22901 = state_22868__$1;
(statearr_22883_22901[(2)] = inst_22860);

(statearr_22883_22901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (8))){
var inst_22850 = (state_22868[(7)]);
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22868__$1,(11),out,inst_22850);
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
});})(c__6524__auto___22891,out))
;
return ((function (switch__6468__auto__,c__6524__auto___22891,out){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_22887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22887[(0)] = state_machine__6469__auto__);

(statearr_22887[(1)] = (1));

return statearr_22887;
});
var state_machine__6469__auto____1 = (function (state_22868){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_22868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e22888){if((e22888 instanceof Object)){
var ex__6472__auto__ = e22888;
var statearr_22889_22902 = state_22868;
(statearr_22889_22902[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22903 = state_22868;
state_22868 = G__22903;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_22868){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_22868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___22891,out))
})();
var state__6526__auto__ = (function (){var statearr_22890 = f__6525__auto__.call(null);
(statearr_22890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___22891);

return statearr_22890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___22891,out))
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
if(typeof cljs.core.async.t22911 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22911 = (function (ch,f,map_LT_,meta22912){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22912 = meta22912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22914 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22914 = (function (fn1,_,meta22912,map_LT_,f,ch,meta22915){
this.fn1 = fn1;
this._ = _;
this.meta22912 = meta22912;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22915 = meta22915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22904_SHARP_){
return f1.call(null,(((p1__22904_SHARP_ == null))?null:self__.f.call(null,p1__22904_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22916){
var self__ = this;
var _22916__$1 = this;
return self__.meta22915;
});})(___$1))
;

cljs.core.async.t22914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22916,meta22915__$1){
var self__ = this;
var _22916__$1 = this;
return (new cljs.core.async.t22914(self__.fn1,self__._,self__.meta22912,self__.map_LT_,self__.f,self__.ch,meta22915__$1));
});})(___$1))
;

cljs.core.async.t22914.cljs$lang$type = true;

cljs.core.async.t22914.cljs$lang$ctorStr = "cljs.core.async/t22914";

cljs.core.async.t22914.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22914");
});})(___$1))
;

cljs.core.async.__GT_t22914 = ((function (___$1){
return (function __GT_t22914(fn1__$1,___$2,meta22912__$1,map_LT___$1,f__$1,ch__$1,meta22915){
return (new cljs.core.async.t22914(fn1__$1,___$2,meta22912__$1,map_LT___$1,f__$1,ch__$1,meta22915));
});})(___$1))
;

}

return (new cljs.core.async.t22914(fn1,___$1,self__.meta22912,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22911.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22913){
var self__ = this;
var _22913__$1 = this;
return self__.meta22912;
});

cljs.core.async.t22911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22913,meta22912__$1){
var self__ = this;
var _22913__$1 = this;
return (new cljs.core.async.t22911(self__.ch,self__.f,self__.map_LT_,meta22912__$1));
});

cljs.core.async.t22911.cljs$lang$type = true;

cljs.core.async.t22911.cljs$lang$ctorStr = "cljs.core.async/t22911";

cljs.core.async.t22911.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22911");
});

cljs.core.async.__GT_t22911 = (function __GT_t22911(ch__$1,f__$1,map_LT___$1,meta22912){
return (new cljs.core.async.t22911(ch__$1,f__$1,map_LT___$1,meta22912));
});

}

return (new cljs.core.async.t22911(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22920 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22920 = (function (ch,f,map_GT_,meta22921){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22921 = meta22921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22920.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22922){
var self__ = this;
var _22922__$1 = this;
return self__.meta22921;
});

cljs.core.async.t22920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22922,meta22921__$1){
var self__ = this;
var _22922__$1 = this;
return (new cljs.core.async.t22920(self__.ch,self__.f,self__.map_GT_,meta22921__$1));
});

cljs.core.async.t22920.cljs$lang$type = true;

cljs.core.async.t22920.cljs$lang$ctorStr = "cljs.core.async/t22920";

cljs.core.async.t22920.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22920");
});

cljs.core.async.__GT_t22920 = (function __GT_t22920(ch__$1,f__$1,map_GT___$1,meta22921){
return (new cljs.core.async.t22920(ch__$1,f__$1,map_GT___$1,meta22921));
});

}

return (new cljs.core.async.t22920(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22926 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22926 = (function (ch,p,filter_GT_,meta22927){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22927 = meta22927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22926.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22926.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22926.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22926.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22928){
var self__ = this;
var _22928__$1 = this;
return self__.meta22927;
});

cljs.core.async.t22926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22928,meta22927__$1){
var self__ = this;
var _22928__$1 = this;
return (new cljs.core.async.t22926(self__.ch,self__.p,self__.filter_GT_,meta22927__$1));
});

cljs.core.async.t22926.cljs$lang$type = true;

cljs.core.async.t22926.cljs$lang$ctorStr = "cljs.core.async/t22926";

cljs.core.async.t22926.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22926");
});

cljs.core.async.__GT_t22926 = (function __GT_t22926(ch__$1,p__$1,filter_GT___$1,meta22927){
return (new cljs.core.async.t22926(ch__$1,p__$1,filter_GT___$1,meta22927));
});

}

return (new cljs.core.async.t22926(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6524__auto___23011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___23011,out){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___23011,out){
return (function (state_22990){
var state_val_22991 = (state_22990[(1)]);
if((state_val_22991 === (7))){
var inst_22986 = (state_22990[(2)]);
var state_22990__$1 = state_22990;
var statearr_22992_23012 = state_22990__$1;
(statearr_22992_23012[(2)] = inst_22986);

(statearr_22992_23012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (1))){
var state_22990__$1 = state_22990;
var statearr_22993_23013 = state_22990__$1;
(statearr_22993_23013[(2)] = null);

(statearr_22993_23013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (4))){
var inst_22972 = (state_22990[(7)]);
var inst_22972__$1 = (state_22990[(2)]);
var inst_22973 = (inst_22972__$1 == null);
var state_22990__$1 = (function (){var statearr_22994 = state_22990;
(statearr_22994[(7)] = inst_22972__$1);

return statearr_22994;
})();
if(cljs.core.truth_(inst_22973)){
var statearr_22995_23014 = state_22990__$1;
(statearr_22995_23014[(1)] = (5));

} else {
var statearr_22996_23015 = state_22990__$1;
(statearr_22996_23015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (6))){
var inst_22972 = (state_22990[(7)]);
var inst_22977 = p.call(null,inst_22972);
var state_22990__$1 = state_22990;
if(cljs.core.truth_(inst_22977)){
var statearr_22997_23016 = state_22990__$1;
(statearr_22997_23016[(1)] = (8));

} else {
var statearr_22998_23017 = state_22990__$1;
(statearr_22998_23017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (3))){
var inst_22988 = (state_22990[(2)]);
var state_22990__$1 = state_22990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22990__$1,inst_22988);
} else {
if((state_val_22991 === (2))){
var state_22990__$1 = state_22990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22990__$1,(4),ch);
} else {
if((state_val_22991 === (11))){
var inst_22980 = (state_22990[(2)]);
var state_22990__$1 = state_22990;
var statearr_22999_23018 = state_22990__$1;
(statearr_22999_23018[(2)] = inst_22980);

(statearr_22999_23018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (9))){
var state_22990__$1 = state_22990;
var statearr_23000_23019 = state_22990__$1;
(statearr_23000_23019[(2)] = null);

(statearr_23000_23019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (5))){
var inst_22975 = cljs.core.async.close_BANG_.call(null,out);
var state_22990__$1 = state_22990;
var statearr_23001_23020 = state_22990__$1;
(statearr_23001_23020[(2)] = inst_22975);

(statearr_23001_23020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (10))){
var inst_22983 = (state_22990[(2)]);
var state_22990__$1 = (function (){var statearr_23002 = state_22990;
(statearr_23002[(8)] = inst_22983);

return statearr_23002;
})();
var statearr_23003_23021 = state_22990__$1;
(statearr_23003_23021[(2)] = null);

(statearr_23003_23021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22991 === (8))){
var inst_22972 = (state_22990[(7)]);
var state_22990__$1 = state_22990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22990__$1,(11),out,inst_22972);
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
});})(c__6524__auto___23011,out))
;
return ((function (switch__6468__auto__,c__6524__auto___23011,out){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_23007 = [null,null,null,null,null,null,null,null,null];
(statearr_23007[(0)] = state_machine__6469__auto__);

(statearr_23007[(1)] = (1));

return statearr_23007;
});
var state_machine__6469__auto____1 = (function (state_22990){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_22990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e23008){if((e23008 instanceof Object)){
var ex__6472__auto__ = e23008;
var statearr_23009_23022 = state_22990;
(statearr_23009_23022[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23023 = state_22990;
state_22990 = G__23023;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_22990){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_22990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___23011,out))
})();
var state__6526__auto__ = (function (){var statearr_23010 = f__6525__auto__.call(null);
(statearr_23010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___23011);

return statearr_23010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___23011,out))
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
var c__6524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto__){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto__){
return (function (state_23189){
var state_val_23190 = (state_23189[(1)]);
if((state_val_23190 === (7))){
var inst_23185 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23191_23232 = state_23189__$1;
(statearr_23191_23232[(2)] = inst_23185);

(statearr_23191_23232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (20))){
var inst_23155 = (state_23189[(7)]);
var inst_23166 = (state_23189[(2)]);
var inst_23167 = cljs.core.next.call(null,inst_23155);
var inst_23141 = inst_23167;
var inst_23142 = null;
var inst_23143 = (0);
var inst_23144 = (0);
var state_23189__$1 = (function (){var statearr_23192 = state_23189;
(statearr_23192[(8)] = inst_23144);

(statearr_23192[(9)] = inst_23166);

(statearr_23192[(10)] = inst_23142);

(statearr_23192[(11)] = inst_23141);

(statearr_23192[(12)] = inst_23143);

return statearr_23192;
})();
var statearr_23193_23233 = state_23189__$1;
(statearr_23193_23233[(2)] = null);

(statearr_23193_23233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (1))){
var state_23189__$1 = state_23189;
var statearr_23194_23234 = state_23189__$1;
(statearr_23194_23234[(2)] = null);

(statearr_23194_23234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (4))){
var inst_23130 = (state_23189[(13)]);
var inst_23130__$1 = (state_23189[(2)]);
var inst_23131 = (inst_23130__$1 == null);
var state_23189__$1 = (function (){var statearr_23195 = state_23189;
(statearr_23195[(13)] = inst_23130__$1);

return statearr_23195;
})();
if(cljs.core.truth_(inst_23131)){
var statearr_23196_23235 = state_23189__$1;
(statearr_23196_23235[(1)] = (5));

} else {
var statearr_23197_23236 = state_23189__$1;
(statearr_23197_23236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (15))){
var state_23189__$1 = state_23189;
var statearr_23201_23237 = state_23189__$1;
(statearr_23201_23237[(2)] = null);

(statearr_23201_23237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (21))){
var state_23189__$1 = state_23189;
var statearr_23202_23238 = state_23189__$1;
(statearr_23202_23238[(2)] = null);

(statearr_23202_23238[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (13))){
var inst_23144 = (state_23189[(8)]);
var inst_23142 = (state_23189[(10)]);
var inst_23141 = (state_23189[(11)]);
var inst_23143 = (state_23189[(12)]);
var inst_23151 = (state_23189[(2)]);
var inst_23152 = (inst_23144 + (1));
var tmp23198 = inst_23142;
var tmp23199 = inst_23141;
var tmp23200 = inst_23143;
var inst_23141__$1 = tmp23199;
var inst_23142__$1 = tmp23198;
var inst_23143__$1 = tmp23200;
var inst_23144__$1 = inst_23152;
var state_23189__$1 = (function (){var statearr_23203 = state_23189;
(statearr_23203[(8)] = inst_23144__$1);

(statearr_23203[(10)] = inst_23142__$1);

(statearr_23203[(14)] = inst_23151);

(statearr_23203[(11)] = inst_23141__$1);

(statearr_23203[(12)] = inst_23143__$1);

return statearr_23203;
})();
var statearr_23204_23239 = state_23189__$1;
(statearr_23204_23239[(2)] = null);

(statearr_23204_23239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (22))){
var state_23189__$1 = state_23189;
var statearr_23205_23240 = state_23189__$1;
(statearr_23205_23240[(2)] = null);

(statearr_23205_23240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (6))){
var inst_23130 = (state_23189[(13)]);
var inst_23139 = f.call(null,inst_23130);
var inst_23140 = cljs.core.seq.call(null,inst_23139);
var inst_23141 = inst_23140;
var inst_23142 = null;
var inst_23143 = (0);
var inst_23144 = (0);
var state_23189__$1 = (function (){var statearr_23206 = state_23189;
(statearr_23206[(8)] = inst_23144);

(statearr_23206[(10)] = inst_23142);

(statearr_23206[(11)] = inst_23141);

(statearr_23206[(12)] = inst_23143);

return statearr_23206;
})();
var statearr_23207_23241 = state_23189__$1;
(statearr_23207_23241[(2)] = null);

(statearr_23207_23241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (17))){
var inst_23155 = (state_23189[(7)]);
var inst_23159 = cljs.core.chunk_first.call(null,inst_23155);
var inst_23160 = cljs.core.chunk_rest.call(null,inst_23155);
var inst_23161 = cljs.core.count.call(null,inst_23159);
var inst_23141 = inst_23160;
var inst_23142 = inst_23159;
var inst_23143 = inst_23161;
var inst_23144 = (0);
var state_23189__$1 = (function (){var statearr_23208 = state_23189;
(statearr_23208[(8)] = inst_23144);

(statearr_23208[(10)] = inst_23142);

(statearr_23208[(11)] = inst_23141);

(statearr_23208[(12)] = inst_23143);

return statearr_23208;
})();
var statearr_23209_23242 = state_23189__$1;
(statearr_23209_23242[(2)] = null);

(statearr_23209_23242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (3))){
var inst_23187 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23189__$1,inst_23187);
} else {
if((state_val_23190 === (12))){
var inst_23175 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23210_23243 = state_23189__$1;
(statearr_23210_23243[(2)] = inst_23175);

(statearr_23210_23243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (2))){
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23189__$1,(4),in$);
} else {
if((state_val_23190 === (23))){
var inst_23183 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23211_23244 = state_23189__$1;
(statearr_23211_23244[(2)] = inst_23183);

(statearr_23211_23244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (19))){
var inst_23170 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23212_23245 = state_23189__$1;
(statearr_23212_23245[(2)] = inst_23170);

(statearr_23212_23245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (11))){
var inst_23155 = (state_23189[(7)]);
var inst_23141 = (state_23189[(11)]);
var inst_23155__$1 = cljs.core.seq.call(null,inst_23141);
var state_23189__$1 = (function (){var statearr_23213 = state_23189;
(statearr_23213[(7)] = inst_23155__$1);

return statearr_23213;
})();
if(inst_23155__$1){
var statearr_23214_23246 = state_23189__$1;
(statearr_23214_23246[(1)] = (14));

} else {
var statearr_23215_23247 = state_23189__$1;
(statearr_23215_23247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (9))){
var inst_23177 = (state_23189[(2)]);
var inst_23178 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23189__$1 = (function (){var statearr_23216 = state_23189;
(statearr_23216[(15)] = inst_23177);

return statearr_23216;
})();
if(cljs.core.truth_(inst_23178)){
var statearr_23217_23248 = state_23189__$1;
(statearr_23217_23248[(1)] = (21));

} else {
var statearr_23218_23249 = state_23189__$1;
(statearr_23218_23249[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (5))){
var inst_23133 = cljs.core.async.close_BANG_.call(null,out);
var state_23189__$1 = state_23189;
var statearr_23219_23250 = state_23189__$1;
(statearr_23219_23250[(2)] = inst_23133);

(statearr_23219_23250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (14))){
var inst_23155 = (state_23189[(7)]);
var inst_23157 = cljs.core.chunked_seq_QMARK_.call(null,inst_23155);
var state_23189__$1 = state_23189;
if(inst_23157){
var statearr_23220_23251 = state_23189__$1;
(statearr_23220_23251[(1)] = (17));

} else {
var statearr_23221_23252 = state_23189__$1;
(statearr_23221_23252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (16))){
var inst_23173 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23222_23253 = state_23189__$1;
(statearr_23222_23253[(2)] = inst_23173);

(statearr_23222_23253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (10))){
var inst_23144 = (state_23189[(8)]);
var inst_23142 = (state_23189[(10)]);
var inst_23149 = cljs.core._nth.call(null,inst_23142,inst_23144);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23189__$1,(13),out,inst_23149);
} else {
if((state_val_23190 === (18))){
var inst_23155 = (state_23189[(7)]);
var inst_23164 = cljs.core.first.call(null,inst_23155);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23189__$1,(20),out,inst_23164);
} else {
if((state_val_23190 === (8))){
var inst_23144 = (state_23189[(8)]);
var inst_23143 = (state_23189[(12)]);
var inst_23146 = (inst_23144 < inst_23143);
var inst_23147 = inst_23146;
var state_23189__$1 = state_23189;
if(cljs.core.truth_(inst_23147)){
var statearr_23223_23254 = state_23189__$1;
(statearr_23223_23254[(1)] = (10));

} else {
var statearr_23224_23255 = state_23189__$1;
(statearr_23224_23255[(1)] = (11));

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
});})(c__6524__auto__))
;
return ((function (switch__6468__auto__,c__6524__auto__){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_23228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23228[(0)] = state_machine__6469__auto__);

(statearr_23228[(1)] = (1));

return statearr_23228;
});
var state_machine__6469__auto____1 = (function (state_23189){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_23189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e23229){if((e23229 instanceof Object)){
var ex__6472__auto__ = e23229;
var statearr_23230_23256 = state_23189;
(statearr_23230_23256[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23257 = state_23189;
state_23189 = G__23257;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_23189){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_23189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto__))
})();
var state__6526__auto__ = (function (){var statearr_23231 = f__6525__auto__.call(null);
(statearr_23231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);

return statearr_23231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto__))
);

return c__6524__auto__;
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
var c__6524__auto___23354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___23354,out){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___23354,out){
return (function (state_23329){
var state_val_23330 = (state_23329[(1)]);
if((state_val_23330 === (7))){
var inst_23324 = (state_23329[(2)]);
var state_23329__$1 = state_23329;
var statearr_23331_23355 = state_23329__$1;
(statearr_23331_23355[(2)] = inst_23324);

(statearr_23331_23355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (1))){
var inst_23306 = null;
var state_23329__$1 = (function (){var statearr_23332 = state_23329;
(statearr_23332[(7)] = inst_23306);

return statearr_23332;
})();
var statearr_23333_23356 = state_23329__$1;
(statearr_23333_23356[(2)] = null);

(statearr_23333_23356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (4))){
var inst_23309 = (state_23329[(8)]);
var inst_23309__$1 = (state_23329[(2)]);
var inst_23310 = (inst_23309__$1 == null);
var inst_23311 = cljs.core.not.call(null,inst_23310);
var state_23329__$1 = (function (){var statearr_23334 = state_23329;
(statearr_23334[(8)] = inst_23309__$1);

return statearr_23334;
})();
if(inst_23311){
var statearr_23335_23357 = state_23329__$1;
(statearr_23335_23357[(1)] = (5));

} else {
var statearr_23336_23358 = state_23329__$1;
(statearr_23336_23358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (6))){
var state_23329__$1 = state_23329;
var statearr_23337_23359 = state_23329__$1;
(statearr_23337_23359[(2)] = null);

(statearr_23337_23359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (3))){
var inst_23326 = (state_23329[(2)]);
var inst_23327 = cljs.core.async.close_BANG_.call(null,out);
var state_23329__$1 = (function (){var statearr_23338 = state_23329;
(statearr_23338[(9)] = inst_23326);

return statearr_23338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23329__$1,inst_23327);
} else {
if((state_val_23330 === (2))){
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23329__$1,(4),ch);
} else {
if((state_val_23330 === (11))){
var inst_23309 = (state_23329[(8)]);
var inst_23318 = (state_23329[(2)]);
var inst_23306 = inst_23309;
var state_23329__$1 = (function (){var statearr_23339 = state_23329;
(statearr_23339[(10)] = inst_23318);

(statearr_23339[(7)] = inst_23306);

return statearr_23339;
})();
var statearr_23340_23360 = state_23329__$1;
(statearr_23340_23360[(2)] = null);

(statearr_23340_23360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (9))){
var inst_23309 = (state_23329[(8)]);
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23329__$1,(11),out,inst_23309);
} else {
if((state_val_23330 === (5))){
var inst_23306 = (state_23329[(7)]);
var inst_23309 = (state_23329[(8)]);
var inst_23313 = cljs.core._EQ_.call(null,inst_23309,inst_23306);
var state_23329__$1 = state_23329;
if(inst_23313){
var statearr_23342_23361 = state_23329__$1;
(statearr_23342_23361[(1)] = (8));

} else {
var statearr_23343_23362 = state_23329__$1;
(statearr_23343_23362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (10))){
var inst_23321 = (state_23329[(2)]);
var state_23329__$1 = state_23329;
var statearr_23344_23363 = state_23329__$1;
(statearr_23344_23363[(2)] = inst_23321);

(statearr_23344_23363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23330 === (8))){
var inst_23306 = (state_23329[(7)]);
var tmp23341 = inst_23306;
var inst_23306__$1 = tmp23341;
var state_23329__$1 = (function (){var statearr_23345 = state_23329;
(statearr_23345[(7)] = inst_23306__$1);

return statearr_23345;
})();
var statearr_23346_23364 = state_23329__$1;
(statearr_23346_23364[(2)] = null);

(statearr_23346_23364[(1)] = (2));


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
});})(c__6524__auto___23354,out))
;
return ((function (switch__6468__auto__,c__6524__auto___23354,out){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_23350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23350[(0)] = state_machine__6469__auto__);

(statearr_23350[(1)] = (1));

return statearr_23350;
});
var state_machine__6469__auto____1 = (function (state_23329){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_23329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e23351){if((e23351 instanceof Object)){
var ex__6472__auto__ = e23351;
var statearr_23352_23365 = state_23329;
(statearr_23352_23365[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23366 = state_23329;
state_23329 = G__23366;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_23329){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_23329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___23354,out))
})();
var state__6526__auto__ = (function (){var statearr_23353 = f__6525__auto__.call(null);
(statearr_23353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___23354);

return statearr_23353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___23354,out))
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
var c__6524__auto___23501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___23501,out){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___23501,out){
return (function (state_23471){
var state_val_23472 = (state_23471[(1)]);
if((state_val_23472 === (7))){
var inst_23467 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23473_23502 = state_23471__$1;
(statearr_23473_23502[(2)] = inst_23467);

(statearr_23473_23502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (1))){
var inst_23434 = (new Array(n));
var inst_23435 = inst_23434;
var inst_23436 = (0);
var state_23471__$1 = (function (){var statearr_23474 = state_23471;
(statearr_23474[(7)] = inst_23436);

(statearr_23474[(8)] = inst_23435);

return statearr_23474;
})();
var statearr_23475_23503 = state_23471__$1;
(statearr_23475_23503[(2)] = null);

(statearr_23475_23503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (4))){
var inst_23439 = (state_23471[(9)]);
var inst_23439__$1 = (state_23471[(2)]);
var inst_23440 = (inst_23439__$1 == null);
var inst_23441 = cljs.core.not.call(null,inst_23440);
var state_23471__$1 = (function (){var statearr_23476 = state_23471;
(statearr_23476[(9)] = inst_23439__$1);

return statearr_23476;
})();
if(inst_23441){
var statearr_23477_23504 = state_23471__$1;
(statearr_23477_23504[(1)] = (5));

} else {
var statearr_23478_23505 = state_23471__$1;
(statearr_23478_23505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (15))){
var inst_23461 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23479_23506 = state_23471__$1;
(statearr_23479_23506[(2)] = inst_23461);

(statearr_23479_23506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (13))){
var state_23471__$1 = state_23471;
var statearr_23480_23507 = state_23471__$1;
(statearr_23480_23507[(2)] = null);

(statearr_23480_23507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (6))){
var inst_23436 = (state_23471[(7)]);
var inst_23457 = (inst_23436 > (0));
var state_23471__$1 = state_23471;
if(cljs.core.truth_(inst_23457)){
var statearr_23481_23508 = state_23471__$1;
(statearr_23481_23508[(1)] = (12));

} else {
var statearr_23482_23509 = state_23471__$1;
(statearr_23482_23509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (3))){
var inst_23469 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23471__$1,inst_23469);
} else {
if((state_val_23472 === (12))){
var inst_23435 = (state_23471[(8)]);
var inst_23459 = cljs.core.vec.call(null,inst_23435);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23471__$1,(15),out,inst_23459);
} else {
if((state_val_23472 === (2))){
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23471__$1,(4),ch);
} else {
if((state_val_23472 === (11))){
var inst_23451 = (state_23471[(2)]);
var inst_23452 = (new Array(n));
var inst_23435 = inst_23452;
var inst_23436 = (0);
var state_23471__$1 = (function (){var statearr_23483 = state_23471;
(statearr_23483[(10)] = inst_23451);

(statearr_23483[(7)] = inst_23436);

(statearr_23483[(8)] = inst_23435);

return statearr_23483;
})();
var statearr_23484_23510 = state_23471__$1;
(statearr_23484_23510[(2)] = null);

(statearr_23484_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (9))){
var inst_23435 = (state_23471[(8)]);
var inst_23449 = cljs.core.vec.call(null,inst_23435);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23471__$1,(11),out,inst_23449);
} else {
if((state_val_23472 === (5))){
var inst_23444 = (state_23471[(11)]);
var inst_23439 = (state_23471[(9)]);
var inst_23436 = (state_23471[(7)]);
var inst_23435 = (state_23471[(8)]);
var inst_23443 = (inst_23435[inst_23436] = inst_23439);
var inst_23444__$1 = (inst_23436 + (1));
var inst_23445 = (inst_23444__$1 < n);
var state_23471__$1 = (function (){var statearr_23485 = state_23471;
(statearr_23485[(11)] = inst_23444__$1);

(statearr_23485[(12)] = inst_23443);

return statearr_23485;
})();
if(cljs.core.truth_(inst_23445)){
var statearr_23486_23511 = state_23471__$1;
(statearr_23486_23511[(1)] = (8));

} else {
var statearr_23487_23512 = state_23471__$1;
(statearr_23487_23512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (14))){
var inst_23464 = (state_23471[(2)]);
var inst_23465 = cljs.core.async.close_BANG_.call(null,out);
var state_23471__$1 = (function (){var statearr_23489 = state_23471;
(statearr_23489[(13)] = inst_23464);

return statearr_23489;
})();
var statearr_23490_23513 = state_23471__$1;
(statearr_23490_23513[(2)] = inst_23465);

(statearr_23490_23513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (10))){
var inst_23455 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23491_23514 = state_23471__$1;
(statearr_23491_23514[(2)] = inst_23455);

(statearr_23491_23514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (8))){
var inst_23444 = (state_23471[(11)]);
var inst_23435 = (state_23471[(8)]);
var tmp23488 = inst_23435;
var inst_23435__$1 = tmp23488;
var inst_23436 = inst_23444;
var state_23471__$1 = (function (){var statearr_23492 = state_23471;
(statearr_23492[(7)] = inst_23436);

(statearr_23492[(8)] = inst_23435__$1);

return statearr_23492;
})();
var statearr_23493_23515 = state_23471__$1;
(statearr_23493_23515[(2)] = null);

(statearr_23493_23515[(1)] = (2));


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
});})(c__6524__auto___23501,out))
;
return ((function (switch__6468__auto__,c__6524__auto___23501,out){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_23497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23497[(0)] = state_machine__6469__auto__);

(statearr_23497[(1)] = (1));

return statearr_23497;
});
var state_machine__6469__auto____1 = (function (state_23471){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_23471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e23498){if((e23498 instanceof Object)){
var ex__6472__auto__ = e23498;
var statearr_23499_23516 = state_23471;
(statearr_23499_23516[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23517 = state_23471;
state_23471 = G__23517;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_23471){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_23471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___23501,out))
})();
var state__6526__auto__ = (function (){var statearr_23500 = f__6525__auto__.call(null);
(statearr_23500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___23501);

return statearr_23500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___23501,out))
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
var c__6524__auto___23660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6524__auto___23660,out){
return (function (){
var f__6525__auto__ = (function (){var switch__6468__auto__ = ((function (c__6524__auto___23660,out){
return (function (state_23630){
var state_val_23631 = (state_23630[(1)]);
if((state_val_23631 === (7))){
var inst_23626 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
var statearr_23632_23661 = state_23630__$1;
(statearr_23632_23661[(2)] = inst_23626);

(statearr_23632_23661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (1))){
var inst_23589 = [];
var inst_23590 = inst_23589;
var inst_23591 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23630__$1 = (function (){var statearr_23633 = state_23630;
(statearr_23633[(7)] = inst_23590);

(statearr_23633[(8)] = inst_23591);

return statearr_23633;
})();
var statearr_23634_23662 = state_23630__$1;
(statearr_23634_23662[(2)] = null);

(statearr_23634_23662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (4))){
var inst_23594 = (state_23630[(9)]);
var inst_23594__$1 = (state_23630[(2)]);
var inst_23595 = (inst_23594__$1 == null);
var inst_23596 = cljs.core.not.call(null,inst_23595);
var state_23630__$1 = (function (){var statearr_23635 = state_23630;
(statearr_23635[(9)] = inst_23594__$1);

return statearr_23635;
})();
if(inst_23596){
var statearr_23636_23663 = state_23630__$1;
(statearr_23636_23663[(1)] = (5));

} else {
var statearr_23637_23664 = state_23630__$1;
(statearr_23637_23664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (15))){
var inst_23620 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
var statearr_23638_23665 = state_23630__$1;
(statearr_23638_23665[(2)] = inst_23620);

(statearr_23638_23665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (13))){
var state_23630__$1 = state_23630;
var statearr_23639_23666 = state_23630__$1;
(statearr_23639_23666[(2)] = null);

(statearr_23639_23666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (6))){
var inst_23590 = (state_23630[(7)]);
var inst_23615 = inst_23590.length;
var inst_23616 = (inst_23615 > (0));
var state_23630__$1 = state_23630;
if(cljs.core.truth_(inst_23616)){
var statearr_23640_23667 = state_23630__$1;
(statearr_23640_23667[(1)] = (12));

} else {
var statearr_23641_23668 = state_23630__$1;
(statearr_23641_23668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (3))){
var inst_23628 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23630__$1,inst_23628);
} else {
if((state_val_23631 === (12))){
var inst_23590 = (state_23630[(7)]);
var inst_23618 = cljs.core.vec.call(null,inst_23590);
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23630__$1,(15),out,inst_23618);
} else {
if((state_val_23631 === (2))){
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23630__$1,(4),ch);
} else {
if((state_val_23631 === (11))){
var inst_23598 = (state_23630[(10)]);
var inst_23594 = (state_23630[(9)]);
var inst_23608 = (state_23630[(2)]);
var inst_23609 = [];
var inst_23610 = inst_23609.push(inst_23594);
var inst_23590 = inst_23609;
var inst_23591 = inst_23598;
var state_23630__$1 = (function (){var statearr_23642 = state_23630;
(statearr_23642[(7)] = inst_23590);

(statearr_23642[(11)] = inst_23608);

(statearr_23642[(12)] = inst_23610);

(statearr_23642[(8)] = inst_23591);

return statearr_23642;
})();
var statearr_23643_23669 = state_23630__$1;
(statearr_23643_23669[(2)] = null);

(statearr_23643_23669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (9))){
var inst_23590 = (state_23630[(7)]);
var inst_23606 = cljs.core.vec.call(null,inst_23590);
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23630__$1,(11),out,inst_23606);
} else {
if((state_val_23631 === (5))){
var inst_23598 = (state_23630[(10)]);
var inst_23594 = (state_23630[(9)]);
var inst_23591 = (state_23630[(8)]);
var inst_23598__$1 = f.call(null,inst_23594);
var inst_23599 = cljs.core._EQ_.call(null,inst_23598__$1,inst_23591);
var inst_23600 = cljs.core.keyword_identical_QMARK_.call(null,inst_23591,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23601 = (inst_23599) || (inst_23600);
var state_23630__$1 = (function (){var statearr_23644 = state_23630;
(statearr_23644[(10)] = inst_23598__$1);

return statearr_23644;
})();
if(cljs.core.truth_(inst_23601)){
var statearr_23645_23670 = state_23630__$1;
(statearr_23645_23670[(1)] = (8));

} else {
var statearr_23646_23671 = state_23630__$1;
(statearr_23646_23671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (14))){
var inst_23623 = (state_23630[(2)]);
var inst_23624 = cljs.core.async.close_BANG_.call(null,out);
var state_23630__$1 = (function (){var statearr_23648 = state_23630;
(statearr_23648[(13)] = inst_23623);

return statearr_23648;
})();
var statearr_23649_23672 = state_23630__$1;
(statearr_23649_23672[(2)] = inst_23624);

(statearr_23649_23672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (10))){
var inst_23613 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
var statearr_23650_23673 = state_23630__$1;
(statearr_23650_23673[(2)] = inst_23613);

(statearr_23650_23673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (8))){
var inst_23598 = (state_23630[(10)]);
var inst_23590 = (state_23630[(7)]);
var inst_23594 = (state_23630[(9)]);
var inst_23603 = inst_23590.push(inst_23594);
var tmp23647 = inst_23590;
var inst_23590__$1 = tmp23647;
var inst_23591 = inst_23598;
var state_23630__$1 = (function (){var statearr_23651 = state_23630;
(statearr_23651[(7)] = inst_23590__$1);

(statearr_23651[(8)] = inst_23591);

(statearr_23651[(14)] = inst_23603);

return statearr_23651;
})();
var statearr_23652_23674 = state_23630__$1;
(statearr_23652_23674[(2)] = null);

(statearr_23652_23674[(1)] = (2));


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
});})(c__6524__auto___23660,out))
;
return ((function (switch__6468__auto__,c__6524__auto___23660,out){
return (function() {
var state_machine__6469__auto__ = null;
var state_machine__6469__auto____0 = (function (){
var statearr_23656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23656[(0)] = state_machine__6469__auto__);

(statearr_23656[(1)] = (1));

return statearr_23656;
});
var state_machine__6469__auto____1 = (function (state_23630){
while(true){
var ret_value__6470__auto__ = (function (){try{while(true){
var result__6471__auto__ = switch__6468__auto__.call(null,state_23630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6471__auto__;
}
break;
}
}catch (e23657){if((e23657 instanceof Object)){
var ex__6472__auto__ = e23657;
var statearr_23658_23675 = state_23630;
(statearr_23658_23675[(5)] = ex__6472__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23676 = state_23630;
state_23630 = G__23676;
continue;
} else {
return ret_value__6470__auto__;
}
break;
}
});
state_machine__6469__auto__ = function(state_23630){
switch(arguments.length){
case 0:
return state_machine__6469__auto____0.call(this);
case 1:
return state_machine__6469__auto____1.call(this,state_23630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6469__auto____0;
state_machine__6469__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6469__auto____1;
return state_machine__6469__auto__;
})()
;})(switch__6468__auto__,c__6524__auto___23660,out))
})();
var state__6526__auto__ = (function (){var statearr_23659 = f__6525__auto__.call(null);
(statearr_23659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___23660);

return statearr_23659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6526__auto__);
});})(c__6524__auto___23660,out))
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
