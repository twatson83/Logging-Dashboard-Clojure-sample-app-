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
if(typeof cljs.core.async.t21314 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21314 = (function (f,fn_handler,meta21315){
this.f = f;
this.fn_handler = fn_handler;
this.meta21315 = meta21315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21314.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21316){
var self__ = this;
var _21316__$1 = this;
return self__.meta21315;
});

cljs.core.async.t21314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21316,meta21315__$1){
var self__ = this;
var _21316__$1 = this;
return (new cljs.core.async.t21314(self__.f,self__.fn_handler,meta21315__$1));
});

cljs.core.async.t21314.cljs$lang$type = true;

cljs.core.async.t21314.cljs$lang$ctorStr = "cljs.core.async/t21314";

cljs.core.async.t21314.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21314");
});

cljs.core.async.__GT_t21314 = (function __GT_t21314(f__$1,fn_handler__$1,meta21315){
return (new cljs.core.async.t21314(f__$1,fn_handler__$1,meta21315));
});

}

return (new cljs.core.async.t21314(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__21318 = buff;
if(G__21318){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__21318.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21318.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21318);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21318);
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
var val_21319 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21319);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21319,ret){
return (function (){
return fn1.call(null,val_21319);
});})(val_21319,ret))
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
var n__4643__auto___21320 = n;
var x_21321 = (0);
while(true){
if((x_21321 < n__4643__auto___21320)){
(a[x_21321] = (0));

var G__21322 = (x_21321 + (1));
x_21321 = G__21322;
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

var G__21323 = (i + (1));
i = G__21323;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t21327 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21327 = (function (flag,alt_flag,meta21328){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21328 = meta21328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21327.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t21327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t21327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21329){
var self__ = this;
var _21329__$1 = this;
return self__.meta21328;
});})(flag))
;

cljs.core.async.t21327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21329,meta21328__$1){
var self__ = this;
var _21329__$1 = this;
return (new cljs.core.async.t21327(self__.flag,self__.alt_flag,meta21328__$1));
});})(flag))
;

cljs.core.async.t21327.cljs$lang$type = true;

cljs.core.async.t21327.cljs$lang$ctorStr = "cljs.core.async/t21327";

cljs.core.async.t21327.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21327");
});})(flag))
;

cljs.core.async.__GT_t21327 = ((function (flag){
return (function __GT_t21327(flag__$1,alt_flag__$1,meta21328){
return (new cljs.core.async.t21327(flag__$1,alt_flag__$1,meta21328));
});})(flag))
;

}

return (new cljs.core.async.t21327(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t21333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21333 = (function (cb,flag,alt_handler,meta21334){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21334 = meta21334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t21333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t21333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21335){
var self__ = this;
var _21335__$1 = this;
return self__.meta21334;
});

cljs.core.async.t21333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21335,meta21334__$1){
var self__ = this;
var _21335__$1 = this;
return (new cljs.core.async.t21333(self__.cb,self__.flag,self__.alt_handler,meta21334__$1));
});

cljs.core.async.t21333.cljs$lang$type = true;

cljs.core.async.t21333.cljs$lang$ctorStr = "cljs.core.async/t21333";

cljs.core.async.t21333.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21333");
});

cljs.core.async.__GT_t21333 = (function __GT_t21333(cb__$1,flag__$1,alt_handler__$1,meta21334){
return (new cljs.core.async.t21333(cb__$1,flag__$1,alt_handler__$1,meta21334));
});

}

return (new cljs.core.async.t21333(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__21336_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21336_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21337_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21337_SHARP_,port], null));
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
var G__21338 = (i + (1));
i = G__21338;
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
var alts_BANG___delegate = function (ports,p__21339){
var map__21341 = p__21339;
var map__21341__$1 = ((cljs.core.seq_QMARK_.call(null,map__21341))?cljs.core.apply.call(null,cljs.core.hash_map,map__21341):map__21341);
var opts = map__21341__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21339 = null;
if (arguments.length > 1) {
  p__21339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__21339);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21342){
var ports = cljs.core.first(arglist__21342);
var p__21339 = cljs.core.rest(arglist__21342);
return alts_BANG___delegate(ports,p__21339);
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
var c__14807__auto___21437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___21437){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___21437){
return (function (state_21413){
var state_val_21414 = (state_21413[(1)]);
if((state_val_21414 === (7))){
var inst_21409 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21415_21438 = state_21413__$1;
(statearr_21415_21438[(2)] = inst_21409);

(statearr_21415_21438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (1))){
var state_21413__$1 = state_21413;
var statearr_21416_21439 = state_21413__$1;
(statearr_21416_21439[(2)] = null);

(statearr_21416_21439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (4))){
var inst_21392 = (state_21413[(7)]);
var inst_21392__$1 = (state_21413[(2)]);
var inst_21393 = (inst_21392__$1 == null);
var state_21413__$1 = (function (){var statearr_21417 = state_21413;
(statearr_21417[(7)] = inst_21392__$1);

return statearr_21417;
})();
if(cljs.core.truth_(inst_21393)){
var statearr_21418_21440 = state_21413__$1;
(statearr_21418_21440[(1)] = (5));

} else {
var statearr_21419_21441 = state_21413__$1;
(statearr_21419_21441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (13))){
var state_21413__$1 = state_21413;
var statearr_21420_21442 = state_21413__$1;
(statearr_21420_21442[(2)] = null);

(statearr_21420_21442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (6))){
var inst_21392 = (state_21413[(7)]);
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21413__$1,(11),to,inst_21392);
} else {
if((state_val_21414 === (3))){
var inst_21411 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21413__$1,inst_21411);
} else {
if((state_val_21414 === (12))){
var state_21413__$1 = state_21413;
var statearr_21421_21443 = state_21413__$1;
(statearr_21421_21443[(2)] = null);

(statearr_21421_21443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (2))){
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21413__$1,(4),from);
} else {
if((state_val_21414 === (11))){
var inst_21402 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
if(cljs.core.truth_(inst_21402)){
var statearr_21422_21444 = state_21413__$1;
(statearr_21422_21444[(1)] = (12));

} else {
var statearr_21423_21445 = state_21413__$1;
(statearr_21423_21445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (9))){
var state_21413__$1 = state_21413;
var statearr_21424_21446 = state_21413__$1;
(statearr_21424_21446[(2)] = null);

(statearr_21424_21446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (5))){
var state_21413__$1 = state_21413;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21425_21447 = state_21413__$1;
(statearr_21425_21447[(1)] = (8));

} else {
var statearr_21426_21448 = state_21413__$1;
(statearr_21426_21448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (14))){
var inst_21407 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21427_21449 = state_21413__$1;
(statearr_21427_21449[(2)] = inst_21407);

(statearr_21427_21449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (10))){
var inst_21399 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21428_21450 = state_21413__$1;
(statearr_21428_21450[(2)] = inst_21399);

(statearr_21428_21450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (8))){
var inst_21396 = cljs.core.async.close_BANG_.call(null,to);
var state_21413__$1 = state_21413;
var statearr_21429_21451 = state_21413__$1;
(statearr_21429_21451[(2)] = inst_21396);

(statearr_21429_21451[(1)] = (10));


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
});})(c__14807__auto___21437))
;
return ((function (switch__14751__auto__,c__14807__auto___21437){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_21433 = [null,null,null,null,null,null,null,null];
(statearr_21433[(0)] = state_machine__14752__auto__);

(statearr_21433[(1)] = (1));

return statearr_21433;
});
var state_machine__14752__auto____1 = (function (state_21413){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_21413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e21434){if((e21434 instanceof Object)){
var ex__14755__auto__ = e21434;
var statearr_21435_21452 = state_21413;
(statearr_21435_21452[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21453 = state_21413;
state_21413 = G__21453;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_21413){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_21413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___21437))
})();
var state__14809__auto__ = (function (){var statearr_21436 = f__14808__auto__.call(null);
(statearr_21436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___21437);

return statearr_21436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___21437))
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
return (function (p__21637){
var vec__21638 = p__21637;
var v = cljs.core.nth.call(null,vec__21638,(0),null);
var p = cljs.core.nth.call(null,vec__21638,(1),null);
var job = vec__21638;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14807__auto___21820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___21820,res,vec__21638,v,p,job,jobs,results){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___21820,res,vec__21638,v,p,job,jobs,results){
return (function (state_21643){
var state_val_21644 = (state_21643[(1)]);
if((state_val_21644 === (2))){
var inst_21640 = (state_21643[(2)]);
var inst_21641 = cljs.core.async.close_BANG_.call(null,res);
var state_21643__$1 = (function (){var statearr_21645 = state_21643;
(statearr_21645[(7)] = inst_21640);

return statearr_21645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21643__$1,inst_21641);
} else {
if((state_val_21644 === (1))){
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21643__$1,(2),res,v);
} else {
return null;
}
}
});})(c__14807__auto___21820,res,vec__21638,v,p,job,jobs,results))
;
return ((function (switch__14751__auto__,c__14807__auto___21820,res,vec__21638,v,p,job,jobs,results){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_21649 = [null,null,null,null,null,null,null,null];
(statearr_21649[(0)] = state_machine__14752__auto__);

(statearr_21649[(1)] = (1));

return statearr_21649;
});
var state_machine__14752__auto____1 = (function (state_21643){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_21643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e21650){if((e21650 instanceof Object)){
var ex__14755__auto__ = e21650;
var statearr_21651_21821 = state_21643;
(statearr_21651_21821[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21822 = state_21643;
state_21643 = G__21822;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_21643){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_21643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___21820,res,vec__21638,v,p,job,jobs,results))
})();
var state__14809__auto__ = (function (){var statearr_21652 = f__14808__auto__.call(null);
(statearr_21652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___21820);

return statearr_21652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___21820,res,vec__21638,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21653){
var vec__21654 = p__21653;
var v = cljs.core.nth.call(null,vec__21654,(0),null);
var p = cljs.core.nth.call(null,vec__21654,(1),null);
var job = vec__21654;
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
var n__4643__auto___21823 = n;
var __21824 = (0);
while(true){
if((__21824 < n__4643__auto___21823)){
var G__21655_21825 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21655_21825) {
case "async":
var c__14807__auto___21827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21824,c__14807__auto___21827,G__21655_21825,n__4643__auto___21823,jobs,results,process,async){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (__21824,c__14807__auto___21827,G__21655_21825,n__4643__auto___21823,jobs,results,process,async){
return (function (state_21668){
var state_val_21669 = (state_21668[(1)]);
if((state_val_21669 === (7))){
var inst_21664 = (state_21668[(2)]);
var state_21668__$1 = state_21668;
var statearr_21670_21828 = state_21668__$1;
(statearr_21670_21828[(2)] = inst_21664);

(statearr_21670_21828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (6))){
var state_21668__$1 = state_21668;
var statearr_21671_21829 = state_21668__$1;
(statearr_21671_21829[(2)] = null);

(statearr_21671_21829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (5))){
var state_21668__$1 = state_21668;
var statearr_21672_21830 = state_21668__$1;
(statearr_21672_21830[(2)] = null);

(statearr_21672_21830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (4))){
var inst_21658 = (state_21668[(2)]);
var inst_21659 = async.call(null,inst_21658);
var state_21668__$1 = state_21668;
if(cljs.core.truth_(inst_21659)){
var statearr_21673_21831 = state_21668__$1;
(statearr_21673_21831[(1)] = (5));

} else {
var statearr_21674_21832 = state_21668__$1;
(statearr_21674_21832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (3))){
var inst_21666 = (state_21668[(2)]);
var state_21668__$1 = state_21668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21668__$1,inst_21666);
} else {
if((state_val_21669 === (2))){
var state_21668__$1 = state_21668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21668__$1,(4),jobs);
} else {
if((state_val_21669 === (1))){
var state_21668__$1 = state_21668;
var statearr_21675_21833 = state_21668__$1;
(statearr_21675_21833[(2)] = null);

(statearr_21675_21833[(1)] = (2));


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
});})(__21824,c__14807__auto___21827,G__21655_21825,n__4643__auto___21823,jobs,results,process,async))
;
return ((function (__21824,switch__14751__auto__,c__14807__auto___21827,G__21655_21825,n__4643__auto___21823,jobs,results,process,async){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_21679 = [null,null,null,null,null,null,null];
(statearr_21679[(0)] = state_machine__14752__auto__);

(statearr_21679[(1)] = (1));

return statearr_21679;
});
var state_machine__14752__auto____1 = (function (state_21668){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_21668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e21680){if((e21680 instanceof Object)){
var ex__14755__auto__ = e21680;
var statearr_21681_21834 = state_21668;
(statearr_21681_21834[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21835 = state_21668;
state_21668 = G__21835;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_21668){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_21668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(__21824,switch__14751__auto__,c__14807__auto___21827,G__21655_21825,n__4643__auto___21823,jobs,results,process,async))
})();
var state__14809__auto__ = (function (){var statearr_21682 = f__14808__auto__.call(null);
(statearr_21682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___21827);

return statearr_21682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(__21824,c__14807__auto___21827,G__21655_21825,n__4643__auto___21823,jobs,results,process,async))
);


break;
case "compute":
var c__14807__auto___21836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21824,c__14807__auto___21836,G__21655_21825,n__4643__auto___21823,jobs,results,process,async){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (__21824,c__14807__auto___21836,G__21655_21825,n__4643__auto___21823,jobs,results,process,async){
return (function (state_21695){
var state_val_21696 = (state_21695[(1)]);
if((state_val_21696 === (7))){
var inst_21691 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
var statearr_21697_21837 = state_21695__$1;
(statearr_21697_21837[(2)] = inst_21691);

(statearr_21697_21837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (6))){
var state_21695__$1 = state_21695;
var statearr_21698_21838 = state_21695__$1;
(statearr_21698_21838[(2)] = null);

(statearr_21698_21838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (5))){
var state_21695__$1 = state_21695;
var statearr_21699_21839 = state_21695__$1;
(statearr_21699_21839[(2)] = null);

(statearr_21699_21839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (4))){
var inst_21685 = (state_21695[(2)]);
var inst_21686 = process.call(null,inst_21685);
var state_21695__$1 = state_21695;
if(cljs.core.truth_(inst_21686)){
var statearr_21700_21840 = state_21695__$1;
(statearr_21700_21840[(1)] = (5));

} else {
var statearr_21701_21841 = state_21695__$1;
(statearr_21701_21841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (3))){
var inst_21693 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21695__$1,inst_21693);
} else {
if((state_val_21696 === (2))){
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21695__$1,(4),jobs);
} else {
if((state_val_21696 === (1))){
var state_21695__$1 = state_21695;
var statearr_21702_21842 = state_21695__$1;
(statearr_21702_21842[(2)] = null);

(statearr_21702_21842[(1)] = (2));


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
});})(__21824,c__14807__auto___21836,G__21655_21825,n__4643__auto___21823,jobs,results,process,async))
;
return ((function (__21824,switch__14751__auto__,c__14807__auto___21836,G__21655_21825,n__4643__auto___21823,jobs,results,process,async){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_21706 = [null,null,null,null,null,null,null];
(statearr_21706[(0)] = state_machine__14752__auto__);

(statearr_21706[(1)] = (1));

return statearr_21706;
});
var state_machine__14752__auto____1 = (function (state_21695){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_21695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e21707){if((e21707 instanceof Object)){
var ex__14755__auto__ = e21707;
var statearr_21708_21843 = state_21695;
(statearr_21708_21843[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21844 = state_21695;
state_21695 = G__21844;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_21695){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_21695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(__21824,switch__14751__auto__,c__14807__auto___21836,G__21655_21825,n__4643__auto___21823,jobs,results,process,async))
})();
var state__14809__auto__ = (function (){var statearr_21709 = f__14808__auto__.call(null);
(statearr_21709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___21836);

return statearr_21709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(__21824,c__14807__auto___21836,G__21655_21825,n__4643__auto___21823,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21845 = (__21824 + (1));
__21824 = G__21845;
continue;
} else {
}
break;
}

var c__14807__auto___21846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___21846,jobs,results,process,async){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___21846,jobs,results,process,async){
return (function (state_21731){
var state_val_21732 = (state_21731[(1)]);
if((state_val_21732 === (9))){
var inst_21724 = (state_21731[(2)]);
var state_21731__$1 = (function (){var statearr_21733 = state_21731;
(statearr_21733[(7)] = inst_21724);

return statearr_21733;
})();
var statearr_21734_21847 = state_21731__$1;
(statearr_21734_21847[(2)] = null);

(statearr_21734_21847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (8))){
var inst_21717 = (state_21731[(8)]);
var inst_21722 = (state_21731[(2)]);
var state_21731__$1 = (function (){var statearr_21735 = state_21731;
(statearr_21735[(9)] = inst_21722);

return statearr_21735;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21731__$1,(9),results,inst_21717);
} else {
if((state_val_21732 === (7))){
var inst_21727 = (state_21731[(2)]);
var state_21731__$1 = state_21731;
var statearr_21736_21848 = state_21731__$1;
(statearr_21736_21848[(2)] = inst_21727);

(statearr_21736_21848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (6))){
var inst_21717 = (state_21731[(8)]);
var inst_21712 = (state_21731[(10)]);
var inst_21717__$1 = cljs.core.async.chan.call(null,(1));
var inst_21718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21719 = [inst_21712,inst_21717__$1];
var inst_21720 = (new cljs.core.PersistentVector(null,2,(5),inst_21718,inst_21719,null));
var state_21731__$1 = (function (){var statearr_21737 = state_21731;
(statearr_21737[(8)] = inst_21717__$1);

return statearr_21737;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21731__$1,(8),jobs,inst_21720);
} else {
if((state_val_21732 === (5))){
var inst_21715 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21731__$1 = state_21731;
var statearr_21738_21849 = state_21731__$1;
(statearr_21738_21849[(2)] = inst_21715);

(statearr_21738_21849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (4))){
var inst_21712 = (state_21731[(10)]);
var inst_21712__$1 = (state_21731[(2)]);
var inst_21713 = (inst_21712__$1 == null);
var state_21731__$1 = (function (){var statearr_21739 = state_21731;
(statearr_21739[(10)] = inst_21712__$1);

return statearr_21739;
})();
if(cljs.core.truth_(inst_21713)){
var statearr_21740_21850 = state_21731__$1;
(statearr_21740_21850[(1)] = (5));

} else {
var statearr_21741_21851 = state_21731__$1;
(statearr_21741_21851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (3))){
var inst_21729 = (state_21731[(2)]);
var state_21731__$1 = state_21731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21731__$1,inst_21729);
} else {
if((state_val_21732 === (2))){
var state_21731__$1 = state_21731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21731__$1,(4),from);
} else {
if((state_val_21732 === (1))){
var state_21731__$1 = state_21731;
var statearr_21742_21852 = state_21731__$1;
(statearr_21742_21852[(2)] = null);

(statearr_21742_21852[(1)] = (2));


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
});})(c__14807__auto___21846,jobs,results,process,async))
;
return ((function (switch__14751__auto__,c__14807__auto___21846,jobs,results,process,async){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_21746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21746[(0)] = state_machine__14752__auto__);

(statearr_21746[(1)] = (1));

return statearr_21746;
});
var state_machine__14752__auto____1 = (function (state_21731){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_21731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e21747){if((e21747 instanceof Object)){
var ex__14755__auto__ = e21747;
var statearr_21748_21853 = state_21731;
(statearr_21748_21853[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21854 = state_21731;
state_21731 = G__21854;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_21731){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_21731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___21846,jobs,results,process,async))
})();
var state__14809__auto__ = (function (){var statearr_21749 = f__14808__auto__.call(null);
(statearr_21749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___21846);

return statearr_21749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___21846,jobs,results,process,async))
);


var c__14807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto__,jobs,results,process,async){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto__,jobs,results,process,async){
return (function (state_21787){
var state_val_21788 = (state_21787[(1)]);
if((state_val_21788 === (7))){
var inst_21783 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
var statearr_21789_21855 = state_21787__$1;
(statearr_21789_21855[(2)] = inst_21783);

(statearr_21789_21855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (20))){
var state_21787__$1 = state_21787;
var statearr_21790_21856 = state_21787__$1;
(statearr_21790_21856[(2)] = null);

(statearr_21790_21856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (1))){
var state_21787__$1 = state_21787;
var statearr_21791_21857 = state_21787__$1;
(statearr_21791_21857[(2)] = null);

(statearr_21791_21857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (4))){
var inst_21752 = (state_21787[(7)]);
var inst_21752__$1 = (state_21787[(2)]);
var inst_21753 = (inst_21752__$1 == null);
var state_21787__$1 = (function (){var statearr_21792 = state_21787;
(statearr_21792[(7)] = inst_21752__$1);

return statearr_21792;
})();
if(cljs.core.truth_(inst_21753)){
var statearr_21793_21858 = state_21787__$1;
(statearr_21793_21858[(1)] = (5));

} else {
var statearr_21794_21859 = state_21787__$1;
(statearr_21794_21859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (15))){
var inst_21765 = (state_21787[(8)]);
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21787__$1,(18),to,inst_21765);
} else {
if((state_val_21788 === (21))){
var inst_21778 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
var statearr_21795_21860 = state_21787__$1;
(statearr_21795_21860[(2)] = inst_21778);

(statearr_21795_21860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (13))){
var inst_21780 = (state_21787[(2)]);
var state_21787__$1 = (function (){var statearr_21796 = state_21787;
(statearr_21796[(9)] = inst_21780);

return statearr_21796;
})();
var statearr_21797_21861 = state_21787__$1;
(statearr_21797_21861[(2)] = null);

(statearr_21797_21861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (6))){
var inst_21752 = (state_21787[(7)]);
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21787__$1,(11),inst_21752);
} else {
if((state_val_21788 === (17))){
var inst_21773 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
if(cljs.core.truth_(inst_21773)){
var statearr_21798_21862 = state_21787__$1;
(statearr_21798_21862[(1)] = (19));

} else {
var statearr_21799_21863 = state_21787__$1;
(statearr_21799_21863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (3))){
var inst_21785 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21787__$1,inst_21785);
} else {
if((state_val_21788 === (12))){
var inst_21762 = (state_21787[(10)]);
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21787__$1,(14),inst_21762);
} else {
if((state_val_21788 === (2))){
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21787__$1,(4),results);
} else {
if((state_val_21788 === (19))){
var state_21787__$1 = state_21787;
var statearr_21800_21864 = state_21787__$1;
(statearr_21800_21864[(2)] = null);

(statearr_21800_21864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (11))){
var inst_21762 = (state_21787[(2)]);
var state_21787__$1 = (function (){var statearr_21801 = state_21787;
(statearr_21801[(10)] = inst_21762);

return statearr_21801;
})();
var statearr_21802_21865 = state_21787__$1;
(statearr_21802_21865[(2)] = null);

(statearr_21802_21865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (9))){
var state_21787__$1 = state_21787;
var statearr_21803_21866 = state_21787__$1;
(statearr_21803_21866[(2)] = null);

(statearr_21803_21866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (5))){
var state_21787__$1 = state_21787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21804_21867 = state_21787__$1;
(statearr_21804_21867[(1)] = (8));

} else {
var statearr_21805_21868 = state_21787__$1;
(statearr_21805_21868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (14))){
var inst_21767 = (state_21787[(11)]);
var inst_21765 = (state_21787[(8)]);
var inst_21765__$1 = (state_21787[(2)]);
var inst_21766 = (inst_21765__$1 == null);
var inst_21767__$1 = cljs.core.not.call(null,inst_21766);
var state_21787__$1 = (function (){var statearr_21806 = state_21787;
(statearr_21806[(11)] = inst_21767__$1);

(statearr_21806[(8)] = inst_21765__$1);

return statearr_21806;
})();
if(inst_21767__$1){
var statearr_21807_21869 = state_21787__$1;
(statearr_21807_21869[(1)] = (15));

} else {
var statearr_21808_21870 = state_21787__$1;
(statearr_21808_21870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (16))){
var inst_21767 = (state_21787[(11)]);
var state_21787__$1 = state_21787;
var statearr_21809_21871 = state_21787__$1;
(statearr_21809_21871[(2)] = inst_21767);

(statearr_21809_21871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (10))){
var inst_21759 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
var statearr_21810_21872 = state_21787__$1;
(statearr_21810_21872[(2)] = inst_21759);

(statearr_21810_21872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (18))){
var inst_21770 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
var statearr_21811_21873 = state_21787__$1;
(statearr_21811_21873[(2)] = inst_21770);

(statearr_21811_21873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (8))){
var inst_21756 = cljs.core.async.close_BANG_.call(null,to);
var state_21787__$1 = state_21787;
var statearr_21812_21874 = state_21787__$1;
(statearr_21812_21874[(2)] = inst_21756);

(statearr_21812_21874[(1)] = (10));


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
});})(c__14807__auto__,jobs,results,process,async))
;
return ((function (switch__14751__auto__,c__14807__auto__,jobs,results,process,async){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_21816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21816[(0)] = state_machine__14752__auto__);

(statearr_21816[(1)] = (1));

return statearr_21816;
});
var state_machine__14752__auto____1 = (function (state_21787){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_21787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e21817){if((e21817 instanceof Object)){
var ex__14755__auto__ = e21817;
var statearr_21818_21875 = state_21787;
(statearr_21818_21875[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21876 = state_21787;
state_21787 = G__21876;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_21787){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_21787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto__,jobs,results,process,async))
})();
var state__14809__auto__ = (function (){var statearr_21819 = f__14808__auto__.call(null);
(statearr_21819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto__);

return statearr_21819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto__,jobs,results,process,async))
);

return c__14807__auto__;
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
var c__14807__auto___21977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___21977,tc,fc){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___21977,tc,fc){
return (function (state_21952){
var state_val_21953 = (state_21952[(1)]);
if((state_val_21953 === (7))){
var inst_21948 = (state_21952[(2)]);
var state_21952__$1 = state_21952;
var statearr_21954_21978 = state_21952__$1;
(statearr_21954_21978[(2)] = inst_21948);

(statearr_21954_21978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (1))){
var state_21952__$1 = state_21952;
var statearr_21955_21979 = state_21952__$1;
(statearr_21955_21979[(2)] = null);

(statearr_21955_21979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (4))){
var inst_21929 = (state_21952[(7)]);
var inst_21929__$1 = (state_21952[(2)]);
var inst_21930 = (inst_21929__$1 == null);
var state_21952__$1 = (function (){var statearr_21956 = state_21952;
(statearr_21956[(7)] = inst_21929__$1);

return statearr_21956;
})();
if(cljs.core.truth_(inst_21930)){
var statearr_21957_21980 = state_21952__$1;
(statearr_21957_21980[(1)] = (5));

} else {
var statearr_21958_21981 = state_21952__$1;
(statearr_21958_21981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (13))){
var state_21952__$1 = state_21952;
var statearr_21959_21982 = state_21952__$1;
(statearr_21959_21982[(2)] = null);

(statearr_21959_21982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (6))){
var inst_21929 = (state_21952[(7)]);
var inst_21935 = p.call(null,inst_21929);
var state_21952__$1 = state_21952;
if(cljs.core.truth_(inst_21935)){
var statearr_21960_21983 = state_21952__$1;
(statearr_21960_21983[(1)] = (9));

} else {
var statearr_21961_21984 = state_21952__$1;
(statearr_21961_21984[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (3))){
var inst_21950 = (state_21952[(2)]);
var state_21952__$1 = state_21952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21952__$1,inst_21950);
} else {
if((state_val_21953 === (12))){
var state_21952__$1 = state_21952;
var statearr_21962_21985 = state_21952__$1;
(statearr_21962_21985[(2)] = null);

(statearr_21962_21985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (2))){
var state_21952__$1 = state_21952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21952__$1,(4),ch);
} else {
if((state_val_21953 === (11))){
var inst_21929 = (state_21952[(7)]);
var inst_21939 = (state_21952[(2)]);
var state_21952__$1 = state_21952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21952__$1,(8),inst_21939,inst_21929);
} else {
if((state_val_21953 === (9))){
var state_21952__$1 = state_21952;
var statearr_21963_21986 = state_21952__$1;
(statearr_21963_21986[(2)] = tc);

(statearr_21963_21986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (5))){
var inst_21932 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21933 = cljs.core.async.close_BANG_.call(null,fc);
var state_21952__$1 = (function (){var statearr_21964 = state_21952;
(statearr_21964[(8)] = inst_21932);

return statearr_21964;
})();
var statearr_21965_21987 = state_21952__$1;
(statearr_21965_21987[(2)] = inst_21933);

(statearr_21965_21987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (14))){
var inst_21946 = (state_21952[(2)]);
var state_21952__$1 = state_21952;
var statearr_21966_21988 = state_21952__$1;
(statearr_21966_21988[(2)] = inst_21946);

(statearr_21966_21988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (10))){
var state_21952__$1 = state_21952;
var statearr_21967_21989 = state_21952__$1;
(statearr_21967_21989[(2)] = fc);

(statearr_21967_21989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21953 === (8))){
var inst_21941 = (state_21952[(2)]);
var state_21952__$1 = state_21952;
if(cljs.core.truth_(inst_21941)){
var statearr_21968_21990 = state_21952__$1;
(statearr_21968_21990[(1)] = (12));

} else {
var statearr_21969_21991 = state_21952__$1;
(statearr_21969_21991[(1)] = (13));

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
});})(c__14807__auto___21977,tc,fc))
;
return ((function (switch__14751__auto__,c__14807__auto___21977,tc,fc){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_21973 = [null,null,null,null,null,null,null,null,null];
(statearr_21973[(0)] = state_machine__14752__auto__);

(statearr_21973[(1)] = (1));

return statearr_21973;
});
var state_machine__14752__auto____1 = (function (state_21952){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_21952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e21974){if((e21974 instanceof Object)){
var ex__14755__auto__ = e21974;
var statearr_21975_21992 = state_21952;
(statearr_21975_21992[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21993 = state_21952;
state_21952 = G__21993;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_21952){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_21952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___21977,tc,fc))
})();
var state__14809__auto__ = (function (){var statearr_21976 = f__14808__auto__.call(null);
(statearr_21976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___21977);

return statearr_21976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___21977,tc,fc))
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
var c__14807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto__){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto__){
return (function (state_22040){
var state_val_22041 = (state_22040[(1)]);
if((state_val_22041 === (7))){
var inst_22036 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22042_22058 = state_22040__$1;
(statearr_22042_22058[(2)] = inst_22036);

(statearr_22042_22058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (6))){
var inst_22026 = (state_22040[(7)]);
var inst_22029 = (state_22040[(8)]);
var inst_22033 = f.call(null,inst_22026,inst_22029);
var inst_22026__$1 = inst_22033;
var state_22040__$1 = (function (){var statearr_22043 = state_22040;
(statearr_22043[(7)] = inst_22026__$1);

return statearr_22043;
})();
var statearr_22044_22059 = state_22040__$1;
(statearr_22044_22059[(2)] = null);

(statearr_22044_22059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (5))){
var inst_22026 = (state_22040[(7)]);
var state_22040__$1 = state_22040;
var statearr_22045_22060 = state_22040__$1;
(statearr_22045_22060[(2)] = inst_22026);

(statearr_22045_22060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (4))){
var inst_22029 = (state_22040[(8)]);
var inst_22029__$1 = (state_22040[(2)]);
var inst_22030 = (inst_22029__$1 == null);
var state_22040__$1 = (function (){var statearr_22046 = state_22040;
(statearr_22046[(8)] = inst_22029__$1);

return statearr_22046;
})();
if(cljs.core.truth_(inst_22030)){
var statearr_22047_22061 = state_22040__$1;
(statearr_22047_22061[(1)] = (5));

} else {
var statearr_22048_22062 = state_22040__$1;
(statearr_22048_22062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (3))){
var inst_22038 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22040__$1,inst_22038);
} else {
if((state_val_22041 === (2))){
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22040__$1,(4),ch);
} else {
if((state_val_22041 === (1))){
var inst_22026 = init;
var state_22040__$1 = (function (){var statearr_22049 = state_22040;
(statearr_22049[(7)] = inst_22026);

return statearr_22049;
})();
var statearr_22050_22063 = state_22040__$1;
(statearr_22050_22063[(2)] = null);

(statearr_22050_22063[(1)] = (2));


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
});})(c__14807__auto__))
;
return ((function (switch__14751__auto__,c__14807__auto__){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_22054 = [null,null,null,null,null,null,null,null,null];
(statearr_22054[(0)] = state_machine__14752__auto__);

(statearr_22054[(1)] = (1));

return statearr_22054;
});
var state_machine__14752__auto____1 = (function (state_22040){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_22040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object)){
var ex__14755__auto__ = e22055;
var statearr_22056_22064 = state_22040;
(statearr_22056_22064[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22065 = state_22040;
state_22040 = G__22065;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_22040){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_22040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto__))
})();
var state__14809__auto__ = (function (){var statearr_22057 = f__14808__auto__.call(null);
(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto__);

return statearr_22057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto__))
);

return c__14807__auto__;
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
var c__14807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto__){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto__){
return (function (state_22139){
var state_val_22140 = (state_22139[(1)]);
if((state_val_22140 === (7))){
var inst_22121 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22141_22164 = state_22139__$1;
(statearr_22141_22164[(2)] = inst_22121);

(statearr_22141_22164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (1))){
var inst_22115 = cljs.core.seq.call(null,coll);
var inst_22116 = inst_22115;
var state_22139__$1 = (function (){var statearr_22142 = state_22139;
(statearr_22142[(7)] = inst_22116);

return statearr_22142;
})();
var statearr_22143_22165 = state_22139__$1;
(statearr_22143_22165[(2)] = null);

(statearr_22143_22165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (4))){
var inst_22116 = (state_22139[(7)]);
var inst_22119 = cljs.core.first.call(null,inst_22116);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22139__$1,(7),ch,inst_22119);
} else {
if((state_val_22140 === (13))){
var inst_22133 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22144_22166 = state_22139__$1;
(statearr_22144_22166[(2)] = inst_22133);

(statearr_22144_22166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (6))){
var inst_22124 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22124)){
var statearr_22145_22167 = state_22139__$1;
(statearr_22145_22167[(1)] = (8));

} else {
var statearr_22146_22168 = state_22139__$1;
(statearr_22146_22168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (3))){
var inst_22137 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22139__$1,inst_22137);
} else {
if((state_val_22140 === (12))){
var state_22139__$1 = state_22139;
var statearr_22147_22169 = state_22139__$1;
(statearr_22147_22169[(2)] = null);

(statearr_22147_22169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (2))){
var inst_22116 = (state_22139[(7)]);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22116)){
var statearr_22148_22170 = state_22139__$1;
(statearr_22148_22170[(1)] = (4));

} else {
var statearr_22149_22171 = state_22139__$1;
(statearr_22149_22171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (11))){
var inst_22130 = cljs.core.async.close_BANG_.call(null,ch);
var state_22139__$1 = state_22139;
var statearr_22150_22172 = state_22139__$1;
(statearr_22150_22172[(2)] = inst_22130);

(statearr_22150_22172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (9))){
var state_22139__$1 = state_22139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22151_22173 = state_22139__$1;
(statearr_22151_22173[(1)] = (11));

} else {
var statearr_22152_22174 = state_22139__$1;
(statearr_22152_22174[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (5))){
var inst_22116 = (state_22139[(7)]);
var state_22139__$1 = state_22139;
var statearr_22153_22175 = state_22139__$1;
(statearr_22153_22175[(2)] = inst_22116);

(statearr_22153_22175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (10))){
var inst_22135 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22154_22176 = state_22139__$1;
(statearr_22154_22176[(2)] = inst_22135);

(statearr_22154_22176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (8))){
var inst_22116 = (state_22139[(7)]);
var inst_22126 = cljs.core.next.call(null,inst_22116);
var inst_22116__$1 = inst_22126;
var state_22139__$1 = (function (){var statearr_22155 = state_22139;
(statearr_22155[(7)] = inst_22116__$1);

return statearr_22155;
})();
var statearr_22156_22177 = state_22139__$1;
(statearr_22156_22177[(2)] = null);

(statearr_22156_22177[(1)] = (2));


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
});})(c__14807__auto__))
;
return ((function (switch__14751__auto__,c__14807__auto__){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_22160 = [null,null,null,null,null,null,null,null];
(statearr_22160[(0)] = state_machine__14752__auto__);

(statearr_22160[(1)] = (1));

return statearr_22160;
});
var state_machine__14752__auto____1 = (function (state_22139){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_22139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e22161){if((e22161 instanceof Object)){
var ex__14755__auto__ = e22161;
var statearr_22162_22178 = state_22139;
(statearr_22162_22178[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22179 = state_22139;
state_22139 = G__22179;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_22139){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_22139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto__))
})();
var state__14809__auto__ = (function (){var statearr_22163 = f__14808__auto__.call(null);
(statearr_22163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto__);

return statearr_22163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto__))
);

return c__14807__auto__;
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

cljs.core.async.Mux = (function (){var obj22181 = {};
return obj22181;
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


cljs.core.async.Mult = (function (){var obj22183 = {};
return obj22183;
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
if(typeof cljs.core.async.t22405 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22405 = (function (cs,ch,mult,meta22406){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22406 = meta22406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22405.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t22405.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22407){
var self__ = this;
var _22407__$1 = this;
return self__.meta22406;
});})(cs))
;

cljs.core.async.t22405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22407,meta22406__$1){
var self__ = this;
var _22407__$1 = this;
return (new cljs.core.async.t22405(self__.cs,self__.ch,self__.mult,meta22406__$1));
});})(cs))
;

cljs.core.async.t22405.cljs$lang$type = true;

cljs.core.async.t22405.cljs$lang$ctorStr = "cljs.core.async/t22405";

cljs.core.async.t22405.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22405");
});})(cs))
;

cljs.core.async.__GT_t22405 = ((function (cs){
return (function __GT_t22405(cs__$1,ch__$1,mult__$1,meta22406){
return (new cljs.core.async.t22405(cs__$1,ch__$1,mult__$1,meta22406));
});})(cs))
;

}

return (new cljs.core.async.t22405(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__14807__auto___22626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___22626,cs,m,dchan,dctr,done){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___22626,cs,m,dchan,dctr,done){
return (function (state_22538){
var state_val_22539 = (state_22538[(1)]);
if((state_val_22539 === (7))){
var inst_22534 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22540_22627 = state_22538__$1;
(statearr_22540_22627[(2)] = inst_22534);

(statearr_22540_22627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (20))){
var inst_22439 = (state_22538[(7)]);
var inst_22449 = cljs.core.first.call(null,inst_22439);
var inst_22450 = cljs.core.nth.call(null,inst_22449,(0),null);
var inst_22451 = cljs.core.nth.call(null,inst_22449,(1),null);
var state_22538__$1 = (function (){var statearr_22541 = state_22538;
(statearr_22541[(8)] = inst_22450);

return statearr_22541;
})();
if(cljs.core.truth_(inst_22451)){
var statearr_22542_22628 = state_22538__$1;
(statearr_22542_22628[(1)] = (22));

} else {
var statearr_22543_22629 = state_22538__$1;
(statearr_22543_22629[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (27))){
var inst_22481 = (state_22538[(9)]);
var inst_22479 = (state_22538[(10)]);
var inst_22486 = (state_22538[(11)]);
var inst_22410 = (state_22538[(12)]);
var inst_22486__$1 = cljs.core._nth.call(null,inst_22479,inst_22481);
var inst_22487 = cljs.core.async.put_BANG_.call(null,inst_22486__$1,inst_22410,done);
var state_22538__$1 = (function (){var statearr_22544 = state_22538;
(statearr_22544[(11)] = inst_22486__$1);

return statearr_22544;
})();
if(cljs.core.truth_(inst_22487)){
var statearr_22545_22630 = state_22538__$1;
(statearr_22545_22630[(1)] = (30));

} else {
var statearr_22546_22631 = state_22538__$1;
(statearr_22546_22631[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (1))){
var state_22538__$1 = state_22538;
var statearr_22547_22632 = state_22538__$1;
(statearr_22547_22632[(2)] = null);

(statearr_22547_22632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (24))){
var inst_22439 = (state_22538[(7)]);
var inst_22456 = (state_22538[(2)]);
var inst_22457 = cljs.core.next.call(null,inst_22439);
var inst_22419 = inst_22457;
var inst_22420 = null;
var inst_22421 = (0);
var inst_22422 = (0);
var state_22538__$1 = (function (){var statearr_22548 = state_22538;
(statearr_22548[(13)] = inst_22419);

(statearr_22548[(14)] = inst_22422);

(statearr_22548[(15)] = inst_22421);

(statearr_22548[(16)] = inst_22456);

(statearr_22548[(17)] = inst_22420);

return statearr_22548;
})();
var statearr_22549_22633 = state_22538__$1;
(statearr_22549_22633[(2)] = null);

(statearr_22549_22633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (39))){
var state_22538__$1 = state_22538;
var statearr_22553_22634 = state_22538__$1;
(statearr_22553_22634[(2)] = null);

(statearr_22553_22634[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (4))){
var inst_22410 = (state_22538[(12)]);
var inst_22410__$1 = (state_22538[(2)]);
var inst_22411 = (inst_22410__$1 == null);
var state_22538__$1 = (function (){var statearr_22554 = state_22538;
(statearr_22554[(12)] = inst_22410__$1);

return statearr_22554;
})();
if(cljs.core.truth_(inst_22411)){
var statearr_22555_22635 = state_22538__$1;
(statearr_22555_22635[(1)] = (5));

} else {
var statearr_22556_22636 = state_22538__$1;
(statearr_22556_22636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (15))){
var inst_22419 = (state_22538[(13)]);
var inst_22422 = (state_22538[(14)]);
var inst_22421 = (state_22538[(15)]);
var inst_22420 = (state_22538[(17)]);
var inst_22435 = (state_22538[(2)]);
var inst_22436 = (inst_22422 + (1));
var tmp22550 = inst_22419;
var tmp22551 = inst_22421;
var tmp22552 = inst_22420;
var inst_22419__$1 = tmp22550;
var inst_22420__$1 = tmp22552;
var inst_22421__$1 = tmp22551;
var inst_22422__$1 = inst_22436;
var state_22538__$1 = (function (){var statearr_22557 = state_22538;
(statearr_22557[(13)] = inst_22419__$1);

(statearr_22557[(14)] = inst_22422__$1);

(statearr_22557[(15)] = inst_22421__$1);

(statearr_22557[(17)] = inst_22420__$1);

(statearr_22557[(18)] = inst_22435);

return statearr_22557;
})();
var statearr_22558_22637 = state_22538__$1;
(statearr_22558_22637[(2)] = null);

(statearr_22558_22637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (21))){
var inst_22460 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22562_22638 = state_22538__$1;
(statearr_22562_22638[(2)] = inst_22460);

(statearr_22562_22638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (31))){
var inst_22486 = (state_22538[(11)]);
var inst_22490 = done.call(null,null);
var inst_22491 = cljs.core.async.untap_STAR_.call(null,m,inst_22486);
var state_22538__$1 = (function (){var statearr_22563 = state_22538;
(statearr_22563[(19)] = inst_22490);

return statearr_22563;
})();
var statearr_22564_22639 = state_22538__$1;
(statearr_22564_22639[(2)] = inst_22491);

(statearr_22564_22639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (32))){
var inst_22481 = (state_22538[(9)]);
var inst_22480 = (state_22538[(20)]);
var inst_22479 = (state_22538[(10)]);
var inst_22478 = (state_22538[(21)]);
var inst_22493 = (state_22538[(2)]);
var inst_22494 = (inst_22481 + (1));
var tmp22559 = inst_22480;
var tmp22560 = inst_22479;
var tmp22561 = inst_22478;
var inst_22478__$1 = tmp22561;
var inst_22479__$1 = tmp22560;
var inst_22480__$1 = tmp22559;
var inst_22481__$1 = inst_22494;
var state_22538__$1 = (function (){var statearr_22565 = state_22538;
(statearr_22565[(9)] = inst_22481__$1);

(statearr_22565[(20)] = inst_22480__$1);

(statearr_22565[(10)] = inst_22479__$1);

(statearr_22565[(22)] = inst_22493);

(statearr_22565[(21)] = inst_22478__$1);

return statearr_22565;
})();
var statearr_22566_22640 = state_22538__$1;
(statearr_22566_22640[(2)] = null);

(statearr_22566_22640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (40))){
var inst_22506 = (state_22538[(23)]);
var inst_22510 = done.call(null,null);
var inst_22511 = cljs.core.async.untap_STAR_.call(null,m,inst_22506);
var state_22538__$1 = (function (){var statearr_22567 = state_22538;
(statearr_22567[(24)] = inst_22510);

return statearr_22567;
})();
var statearr_22568_22641 = state_22538__$1;
(statearr_22568_22641[(2)] = inst_22511);

(statearr_22568_22641[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (33))){
var inst_22497 = (state_22538[(25)]);
var inst_22499 = cljs.core.chunked_seq_QMARK_.call(null,inst_22497);
var state_22538__$1 = state_22538;
if(inst_22499){
var statearr_22569_22642 = state_22538__$1;
(statearr_22569_22642[(1)] = (36));

} else {
var statearr_22570_22643 = state_22538__$1;
(statearr_22570_22643[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (13))){
var inst_22429 = (state_22538[(26)]);
var inst_22432 = cljs.core.async.close_BANG_.call(null,inst_22429);
var state_22538__$1 = state_22538;
var statearr_22571_22644 = state_22538__$1;
(statearr_22571_22644[(2)] = inst_22432);

(statearr_22571_22644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (22))){
var inst_22450 = (state_22538[(8)]);
var inst_22453 = cljs.core.async.close_BANG_.call(null,inst_22450);
var state_22538__$1 = state_22538;
var statearr_22572_22645 = state_22538__$1;
(statearr_22572_22645[(2)] = inst_22453);

(statearr_22572_22645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (36))){
var inst_22497 = (state_22538[(25)]);
var inst_22501 = cljs.core.chunk_first.call(null,inst_22497);
var inst_22502 = cljs.core.chunk_rest.call(null,inst_22497);
var inst_22503 = cljs.core.count.call(null,inst_22501);
var inst_22478 = inst_22502;
var inst_22479 = inst_22501;
var inst_22480 = inst_22503;
var inst_22481 = (0);
var state_22538__$1 = (function (){var statearr_22573 = state_22538;
(statearr_22573[(9)] = inst_22481);

(statearr_22573[(20)] = inst_22480);

(statearr_22573[(10)] = inst_22479);

(statearr_22573[(21)] = inst_22478);

return statearr_22573;
})();
var statearr_22574_22646 = state_22538__$1;
(statearr_22574_22646[(2)] = null);

(statearr_22574_22646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (41))){
var inst_22497 = (state_22538[(25)]);
var inst_22513 = (state_22538[(2)]);
var inst_22514 = cljs.core.next.call(null,inst_22497);
var inst_22478 = inst_22514;
var inst_22479 = null;
var inst_22480 = (0);
var inst_22481 = (0);
var state_22538__$1 = (function (){var statearr_22575 = state_22538;
(statearr_22575[(9)] = inst_22481);

(statearr_22575[(20)] = inst_22480);

(statearr_22575[(10)] = inst_22479);

(statearr_22575[(21)] = inst_22478);

(statearr_22575[(27)] = inst_22513);

return statearr_22575;
})();
var statearr_22576_22647 = state_22538__$1;
(statearr_22576_22647[(2)] = null);

(statearr_22576_22647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (43))){
var state_22538__$1 = state_22538;
var statearr_22577_22648 = state_22538__$1;
(statearr_22577_22648[(2)] = null);

(statearr_22577_22648[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (29))){
var inst_22522 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22578_22649 = state_22538__$1;
(statearr_22578_22649[(2)] = inst_22522);

(statearr_22578_22649[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (44))){
var inst_22531 = (state_22538[(2)]);
var state_22538__$1 = (function (){var statearr_22579 = state_22538;
(statearr_22579[(28)] = inst_22531);

return statearr_22579;
})();
var statearr_22580_22650 = state_22538__$1;
(statearr_22580_22650[(2)] = null);

(statearr_22580_22650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (6))){
var inst_22470 = (state_22538[(29)]);
var inst_22469 = cljs.core.deref.call(null,cs);
var inst_22470__$1 = cljs.core.keys.call(null,inst_22469);
var inst_22471 = cljs.core.count.call(null,inst_22470__$1);
var inst_22472 = cljs.core.reset_BANG_.call(null,dctr,inst_22471);
var inst_22477 = cljs.core.seq.call(null,inst_22470__$1);
var inst_22478 = inst_22477;
var inst_22479 = null;
var inst_22480 = (0);
var inst_22481 = (0);
var state_22538__$1 = (function (){var statearr_22581 = state_22538;
(statearr_22581[(9)] = inst_22481);

(statearr_22581[(20)] = inst_22480);

(statearr_22581[(10)] = inst_22479);

(statearr_22581[(21)] = inst_22478);

(statearr_22581[(29)] = inst_22470__$1);

(statearr_22581[(30)] = inst_22472);

return statearr_22581;
})();
var statearr_22582_22651 = state_22538__$1;
(statearr_22582_22651[(2)] = null);

(statearr_22582_22651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (28))){
var inst_22497 = (state_22538[(25)]);
var inst_22478 = (state_22538[(21)]);
var inst_22497__$1 = cljs.core.seq.call(null,inst_22478);
var state_22538__$1 = (function (){var statearr_22583 = state_22538;
(statearr_22583[(25)] = inst_22497__$1);

return statearr_22583;
})();
if(inst_22497__$1){
var statearr_22584_22652 = state_22538__$1;
(statearr_22584_22652[(1)] = (33));

} else {
var statearr_22585_22653 = state_22538__$1;
(statearr_22585_22653[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (25))){
var inst_22481 = (state_22538[(9)]);
var inst_22480 = (state_22538[(20)]);
var inst_22483 = (inst_22481 < inst_22480);
var inst_22484 = inst_22483;
var state_22538__$1 = state_22538;
if(cljs.core.truth_(inst_22484)){
var statearr_22586_22654 = state_22538__$1;
(statearr_22586_22654[(1)] = (27));

} else {
var statearr_22587_22655 = state_22538__$1;
(statearr_22587_22655[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (34))){
var state_22538__$1 = state_22538;
var statearr_22588_22656 = state_22538__$1;
(statearr_22588_22656[(2)] = null);

(statearr_22588_22656[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (17))){
var state_22538__$1 = state_22538;
var statearr_22589_22657 = state_22538__$1;
(statearr_22589_22657[(2)] = null);

(statearr_22589_22657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (3))){
var inst_22536 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22538__$1,inst_22536);
} else {
if((state_val_22539 === (12))){
var inst_22465 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22590_22658 = state_22538__$1;
(statearr_22590_22658[(2)] = inst_22465);

(statearr_22590_22658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (2))){
var state_22538__$1 = state_22538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22538__$1,(4),ch);
} else {
if((state_val_22539 === (23))){
var state_22538__$1 = state_22538;
var statearr_22591_22659 = state_22538__$1;
(statearr_22591_22659[(2)] = null);

(statearr_22591_22659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (35))){
var inst_22520 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22592_22660 = state_22538__$1;
(statearr_22592_22660[(2)] = inst_22520);

(statearr_22592_22660[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (19))){
var inst_22439 = (state_22538[(7)]);
var inst_22443 = cljs.core.chunk_first.call(null,inst_22439);
var inst_22444 = cljs.core.chunk_rest.call(null,inst_22439);
var inst_22445 = cljs.core.count.call(null,inst_22443);
var inst_22419 = inst_22444;
var inst_22420 = inst_22443;
var inst_22421 = inst_22445;
var inst_22422 = (0);
var state_22538__$1 = (function (){var statearr_22593 = state_22538;
(statearr_22593[(13)] = inst_22419);

(statearr_22593[(14)] = inst_22422);

(statearr_22593[(15)] = inst_22421);

(statearr_22593[(17)] = inst_22420);

return statearr_22593;
})();
var statearr_22594_22661 = state_22538__$1;
(statearr_22594_22661[(2)] = null);

(statearr_22594_22661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (11))){
var inst_22419 = (state_22538[(13)]);
var inst_22439 = (state_22538[(7)]);
var inst_22439__$1 = cljs.core.seq.call(null,inst_22419);
var state_22538__$1 = (function (){var statearr_22595 = state_22538;
(statearr_22595[(7)] = inst_22439__$1);

return statearr_22595;
})();
if(inst_22439__$1){
var statearr_22596_22662 = state_22538__$1;
(statearr_22596_22662[(1)] = (16));

} else {
var statearr_22597_22663 = state_22538__$1;
(statearr_22597_22663[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (9))){
var inst_22467 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22598_22664 = state_22538__$1;
(statearr_22598_22664[(2)] = inst_22467);

(statearr_22598_22664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (5))){
var inst_22417 = cljs.core.deref.call(null,cs);
var inst_22418 = cljs.core.seq.call(null,inst_22417);
var inst_22419 = inst_22418;
var inst_22420 = null;
var inst_22421 = (0);
var inst_22422 = (0);
var state_22538__$1 = (function (){var statearr_22599 = state_22538;
(statearr_22599[(13)] = inst_22419);

(statearr_22599[(14)] = inst_22422);

(statearr_22599[(15)] = inst_22421);

(statearr_22599[(17)] = inst_22420);

return statearr_22599;
})();
var statearr_22600_22665 = state_22538__$1;
(statearr_22600_22665[(2)] = null);

(statearr_22600_22665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (14))){
var state_22538__$1 = state_22538;
var statearr_22601_22666 = state_22538__$1;
(statearr_22601_22666[(2)] = null);

(statearr_22601_22666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (45))){
var inst_22528 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22602_22667 = state_22538__$1;
(statearr_22602_22667[(2)] = inst_22528);

(statearr_22602_22667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (26))){
var inst_22470 = (state_22538[(29)]);
var inst_22524 = (state_22538[(2)]);
var inst_22525 = cljs.core.seq.call(null,inst_22470);
var state_22538__$1 = (function (){var statearr_22603 = state_22538;
(statearr_22603[(31)] = inst_22524);

return statearr_22603;
})();
if(inst_22525){
var statearr_22604_22668 = state_22538__$1;
(statearr_22604_22668[(1)] = (42));

} else {
var statearr_22605_22669 = state_22538__$1;
(statearr_22605_22669[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (16))){
var inst_22439 = (state_22538[(7)]);
var inst_22441 = cljs.core.chunked_seq_QMARK_.call(null,inst_22439);
var state_22538__$1 = state_22538;
if(inst_22441){
var statearr_22606_22670 = state_22538__$1;
(statearr_22606_22670[(1)] = (19));

} else {
var statearr_22607_22671 = state_22538__$1;
(statearr_22607_22671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (38))){
var inst_22517 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22608_22672 = state_22538__$1;
(statearr_22608_22672[(2)] = inst_22517);

(statearr_22608_22672[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (30))){
var state_22538__$1 = state_22538;
var statearr_22609_22673 = state_22538__$1;
(statearr_22609_22673[(2)] = null);

(statearr_22609_22673[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (10))){
var inst_22422 = (state_22538[(14)]);
var inst_22420 = (state_22538[(17)]);
var inst_22428 = cljs.core._nth.call(null,inst_22420,inst_22422);
var inst_22429 = cljs.core.nth.call(null,inst_22428,(0),null);
var inst_22430 = cljs.core.nth.call(null,inst_22428,(1),null);
var state_22538__$1 = (function (){var statearr_22610 = state_22538;
(statearr_22610[(26)] = inst_22429);

return statearr_22610;
})();
if(cljs.core.truth_(inst_22430)){
var statearr_22611_22674 = state_22538__$1;
(statearr_22611_22674[(1)] = (13));

} else {
var statearr_22612_22675 = state_22538__$1;
(statearr_22612_22675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (18))){
var inst_22463 = (state_22538[(2)]);
var state_22538__$1 = state_22538;
var statearr_22613_22676 = state_22538__$1;
(statearr_22613_22676[(2)] = inst_22463);

(statearr_22613_22676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (42))){
var state_22538__$1 = state_22538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22538__$1,(45),dchan);
} else {
if((state_val_22539 === (37))){
var inst_22506 = (state_22538[(23)]);
var inst_22497 = (state_22538[(25)]);
var inst_22410 = (state_22538[(12)]);
var inst_22506__$1 = cljs.core.first.call(null,inst_22497);
var inst_22507 = cljs.core.async.put_BANG_.call(null,inst_22506__$1,inst_22410,done);
var state_22538__$1 = (function (){var statearr_22614 = state_22538;
(statearr_22614[(23)] = inst_22506__$1);

return statearr_22614;
})();
if(cljs.core.truth_(inst_22507)){
var statearr_22615_22677 = state_22538__$1;
(statearr_22615_22677[(1)] = (39));

} else {
var statearr_22616_22678 = state_22538__$1;
(statearr_22616_22678[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22539 === (8))){
var inst_22422 = (state_22538[(14)]);
var inst_22421 = (state_22538[(15)]);
var inst_22424 = (inst_22422 < inst_22421);
var inst_22425 = inst_22424;
var state_22538__$1 = state_22538;
if(cljs.core.truth_(inst_22425)){
var statearr_22617_22679 = state_22538__$1;
(statearr_22617_22679[(1)] = (10));

} else {
var statearr_22618_22680 = state_22538__$1;
(statearr_22618_22680[(1)] = (11));

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
});})(c__14807__auto___22626,cs,m,dchan,dctr,done))
;
return ((function (switch__14751__auto__,c__14807__auto___22626,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_22622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22622[(0)] = state_machine__14752__auto__);

(statearr_22622[(1)] = (1));

return statearr_22622;
});
var state_machine__14752__auto____1 = (function (state_22538){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_22538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e22623){if((e22623 instanceof Object)){
var ex__14755__auto__ = e22623;
var statearr_22624_22681 = state_22538;
(statearr_22624_22681[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22682 = state_22538;
state_22538 = G__22682;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_22538){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_22538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___22626,cs,m,dchan,dctr,done))
})();
var state__14809__auto__ = (function (){var statearr_22625 = f__14808__auto__.call(null);
(statearr_22625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___22626);

return statearr_22625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___22626,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj22684 = {};
return obj22684;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22685){
var map__22690 = p__22685;
var map__22690__$1 = ((cljs.core.seq_QMARK_.call(null,map__22690))?cljs.core.apply.call(null,cljs.core.hash_map,map__22690):map__22690);
var opts = map__22690__$1;
var statearr_22691_22694 = state;
(statearr_22691_22694[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22690,map__22690__$1,opts){
return (function (val){
var statearr_22692_22695 = state;
(statearr_22692_22695[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22690,map__22690__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22693_22696 = state;
(statearr_22693_22696[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22685 = null;
if (arguments.length > 3) {
  p__22685 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22685);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22697){
var state = cljs.core.first(arglist__22697);
arglist__22697 = cljs.core.next(arglist__22697);
var cont_block = cljs.core.first(arglist__22697);
arglist__22697 = cljs.core.next(arglist__22697);
var ports = cljs.core.first(arglist__22697);
var p__22685 = cljs.core.rest(arglist__22697);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22685);
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
if(typeof cljs.core.async.t22817 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22817 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22818){
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
this.meta22818 = meta22818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22817.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22817.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22817.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22817.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22817.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22817.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t22817.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22819){
var self__ = this;
var _22819__$1 = this;
return self__.meta22818;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22819,meta22818__$1){
var self__ = this;
var _22819__$1 = this;
return (new cljs.core.async.t22817(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22818__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22817.cljs$lang$type = true;

cljs.core.async.t22817.cljs$lang$ctorStr = "cljs.core.async/t22817";

cljs.core.async.t22817.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22817");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22817 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22817(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22818){
return (new cljs.core.async.t22817(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22818));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22817(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__14807__auto___22936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22889){
var state_val_22890 = (state_22889[(1)]);
if((state_val_22890 === (7))){
var inst_22833 = (state_22889[(7)]);
var inst_22838 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22833);
var state_22889__$1 = state_22889;
var statearr_22891_22937 = state_22889__$1;
(statearr_22891_22937[(2)] = inst_22838);

(statearr_22891_22937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (20))){
var inst_22848 = (state_22889[(8)]);
var state_22889__$1 = state_22889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22889__$1,(23),out,inst_22848);
} else {
if((state_val_22890 === (1))){
var inst_22823 = (state_22889[(9)]);
var inst_22823__$1 = calc_state.call(null);
var inst_22824 = cljs.core.seq_QMARK_.call(null,inst_22823__$1);
var state_22889__$1 = (function (){var statearr_22892 = state_22889;
(statearr_22892[(9)] = inst_22823__$1);

return statearr_22892;
})();
if(inst_22824){
var statearr_22893_22938 = state_22889__$1;
(statearr_22893_22938[(1)] = (2));

} else {
var statearr_22894_22939 = state_22889__$1;
(statearr_22894_22939[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (24))){
var inst_22841 = (state_22889[(10)]);
var inst_22833 = inst_22841;
var state_22889__$1 = (function (){var statearr_22895 = state_22889;
(statearr_22895[(7)] = inst_22833);

return statearr_22895;
})();
var statearr_22896_22940 = state_22889__$1;
(statearr_22896_22940[(2)] = null);

(statearr_22896_22940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (4))){
var inst_22823 = (state_22889[(9)]);
var inst_22829 = (state_22889[(2)]);
var inst_22830 = cljs.core.get.call(null,inst_22829,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22831 = cljs.core.get.call(null,inst_22829,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22832 = cljs.core.get.call(null,inst_22829,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22833 = inst_22823;
var state_22889__$1 = (function (){var statearr_22897 = state_22889;
(statearr_22897[(11)] = inst_22832);

(statearr_22897[(12)] = inst_22830);

(statearr_22897[(13)] = inst_22831);

(statearr_22897[(7)] = inst_22833);

return statearr_22897;
})();
var statearr_22898_22941 = state_22889__$1;
(statearr_22898_22941[(2)] = null);

(statearr_22898_22941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (15))){
var state_22889__$1 = state_22889;
var statearr_22899_22942 = state_22889__$1;
(statearr_22899_22942[(2)] = null);

(statearr_22899_22942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (21))){
var inst_22841 = (state_22889[(10)]);
var inst_22833 = inst_22841;
var state_22889__$1 = (function (){var statearr_22900 = state_22889;
(statearr_22900[(7)] = inst_22833);

return statearr_22900;
})();
var statearr_22901_22943 = state_22889__$1;
(statearr_22901_22943[(2)] = null);

(statearr_22901_22943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (13))){
var inst_22885 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22902_22944 = state_22889__$1;
(statearr_22902_22944[(2)] = inst_22885);

(statearr_22902_22944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (22))){
var inst_22883 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22903_22945 = state_22889__$1;
(statearr_22903_22945[(2)] = inst_22883);

(statearr_22903_22945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (6))){
var inst_22887 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22889__$1,inst_22887);
} else {
if((state_val_22890 === (25))){
var state_22889__$1 = state_22889;
var statearr_22904_22946 = state_22889__$1;
(statearr_22904_22946[(2)] = null);

(statearr_22904_22946[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (17))){
var inst_22863 = (state_22889[(14)]);
var state_22889__$1 = state_22889;
var statearr_22905_22947 = state_22889__$1;
(statearr_22905_22947[(2)] = inst_22863);

(statearr_22905_22947[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (3))){
var inst_22823 = (state_22889[(9)]);
var state_22889__$1 = state_22889;
var statearr_22906_22948 = state_22889__$1;
(statearr_22906_22948[(2)] = inst_22823);

(statearr_22906_22948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (12))){
var inst_22844 = (state_22889[(15)]);
var inst_22863 = (state_22889[(14)]);
var inst_22849 = (state_22889[(16)]);
var inst_22863__$1 = inst_22844.call(null,inst_22849);
var state_22889__$1 = (function (){var statearr_22907 = state_22889;
(statearr_22907[(14)] = inst_22863__$1);

return statearr_22907;
})();
if(cljs.core.truth_(inst_22863__$1)){
var statearr_22908_22949 = state_22889__$1;
(statearr_22908_22949[(1)] = (17));

} else {
var statearr_22909_22950 = state_22889__$1;
(statearr_22909_22950[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (2))){
var inst_22823 = (state_22889[(9)]);
var inst_22826 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22823);
var state_22889__$1 = state_22889;
var statearr_22910_22951 = state_22889__$1;
(statearr_22910_22951[(2)] = inst_22826);

(statearr_22910_22951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (23))){
var inst_22874 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
if(cljs.core.truth_(inst_22874)){
var statearr_22911_22952 = state_22889__$1;
(statearr_22911_22952[(1)] = (24));

} else {
var statearr_22912_22953 = state_22889__$1;
(statearr_22912_22953[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (19))){
var inst_22871 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
if(cljs.core.truth_(inst_22871)){
var statearr_22913_22954 = state_22889__$1;
(statearr_22913_22954[(1)] = (20));

} else {
var statearr_22914_22955 = state_22889__$1;
(statearr_22914_22955[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (11))){
var inst_22848 = (state_22889[(8)]);
var inst_22854 = (inst_22848 == null);
var state_22889__$1 = state_22889;
if(cljs.core.truth_(inst_22854)){
var statearr_22915_22956 = state_22889__$1;
(statearr_22915_22956[(1)] = (14));

} else {
var statearr_22916_22957 = state_22889__$1;
(statearr_22916_22957[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (9))){
var inst_22841 = (state_22889[(10)]);
var inst_22841__$1 = (state_22889[(2)]);
var inst_22842 = cljs.core.get.call(null,inst_22841__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22843 = cljs.core.get.call(null,inst_22841__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22844 = cljs.core.get.call(null,inst_22841__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22889__$1 = (function (){var statearr_22917 = state_22889;
(statearr_22917[(17)] = inst_22843);

(statearr_22917[(10)] = inst_22841__$1);

(statearr_22917[(15)] = inst_22844);

return statearr_22917;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22889__$1,(10),inst_22842);
} else {
if((state_val_22890 === (5))){
var inst_22833 = (state_22889[(7)]);
var inst_22836 = cljs.core.seq_QMARK_.call(null,inst_22833);
var state_22889__$1 = state_22889;
if(inst_22836){
var statearr_22918_22958 = state_22889__$1;
(statearr_22918_22958[(1)] = (7));

} else {
var statearr_22919_22959 = state_22889__$1;
(statearr_22919_22959[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (14))){
var inst_22849 = (state_22889[(16)]);
var inst_22856 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22849);
var state_22889__$1 = state_22889;
var statearr_22920_22960 = state_22889__$1;
(statearr_22920_22960[(2)] = inst_22856);

(statearr_22920_22960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (26))){
var inst_22879 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22921_22961 = state_22889__$1;
(statearr_22921_22961[(2)] = inst_22879);

(statearr_22921_22961[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (16))){
var inst_22859 = (state_22889[(2)]);
var inst_22860 = calc_state.call(null);
var inst_22833 = inst_22860;
var state_22889__$1 = (function (){var statearr_22922 = state_22889;
(statearr_22922[(18)] = inst_22859);

(statearr_22922[(7)] = inst_22833);

return statearr_22922;
})();
var statearr_22923_22962 = state_22889__$1;
(statearr_22923_22962[(2)] = null);

(statearr_22923_22962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (10))){
var inst_22848 = (state_22889[(8)]);
var inst_22849 = (state_22889[(16)]);
var inst_22847 = (state_22889[(2)]);
var inst_22848__$1 = cljs.core.nth.call(null,inst_22847,(0),null);
var inst_22849__$1 = cljs.core.nth.call(null,inst_22847,(1),null);
var inst_22850 = (inst_22848__$1 == null);
var inst_22851 = cljs.core._EQ_.call(null,inst_22849__$1,change);
var inst_22852 = (inst_22850) || (inst_22851);
var state_22889__$1 = (function (){var statearr_22924 = state_22889;
(statearr_22924[(8)] = inst_22848__$1);

(statearr_22924[(16)] = inst_22849__$1);

return statearr_22924;
})();
if(cljs.core.truth_(inst_22852)){
var statearr_22925_22963 = state_22889__$1;
(statearr_22925_22963[(1)] = (11));

} else {
var statearr_22926_22964 = state_22889__$1;
(statearr_22926_22964[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (18))){
var inst_22843 = (state_22889[(17)]);
var inst_22844 = (state_22889[(15)]);
var inst_22849 = (state_22889[(16)]);
var inst_22866 = cljs.core.empty_QMARK_.call(null,inst_22844);
var inst_22867 = inst_22843.call(null,inst_22849);
var inst_22868 = cljs.core.not.call(null,inst_22867);
var inst_22869 = (inst_22866) && (inst_22868);
var state_22889__$1 = state_22889;
var statearr_22927_22965 = state_22889__$1;
(statearr_22927_22965[(2)] = inst_22869);

(statearr_22927_22965[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (8))){
var inst_22833 = (state_22889[(7)]);
var state_22889__$1 = state_22889;
var statearr_22928_22966 = state_22889__$1;
(statearr_22928_22966[(2)] = inst_22833);

(statearr_22928_22966[(1)] = (9));


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
});})(c__14807__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14751__auto__,c__14807__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = state_machine__14752__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var state_machine__14752__auto____1 = (function (state_22889){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_22889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__14755__auto__ = e22933;
var statearr_22934_22967 = state_22889;
(statearr_22934_22967[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22968 = state_22889;
state_22889 = G__22968;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_22889){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_22889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14809__auto__ = (function (){var statearr_22935 = f__14808__auto__.call(null);
(statearr_22935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___22936);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___22936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22970 = {};
return obj22970;
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
return (function (p1__22971_SHARP_){
if(cljs.core.truth_(p1__22971_SHARP_.call(null,topic))){
return p1__22971_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22971_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23094 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23094 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23095){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23095 = meta23095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23094.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23094.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23094.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t23094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t23094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23094.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23096){
var self__ = this;
var _23096__$1 = this;
return self__.meta23095;
});})(mults,ensure_mult))
;

cljs.core.async.t23094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23096,meta23095__$1){
var self__ = this;
var _23096__$1 = this;
return (new cljs.core.async.t23094(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23095__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23094.cljs$lang$type = true;

cljs.core.async.t23094.cljs$lang$ctorStr = "cljs.core.async/t23094";

cljs.core.async.t23094.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23094");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23094 = ((function (mults,ensure_mult){
return (function __GT_t23094(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23095){
return (new cljs.core.async.t23094(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23095));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23094(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__14807__auto___23216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___23216,mults,ensure_mult,p){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___23216,mults,ensure_mult,p){
return (function (state_23168){
var state_val_23169 = (state_23168[(1)]);
if((state_val_23169 === (7))){
var inst_23164 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23170_23217 = state_23168__$1;
(statearr_23170_23217[(2)] = inst_23164);

(statearr_23170_23217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (20))){
var state_23168__$1 = state_23168;
var statearr_23171_23218 = state_23168__$1;
(statearr_23171_23218[(2)] = null);

(statearr_23171_23218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (1))){
var state_23168__$1 = state_23168;
var statearr_23172_23219 = state_23168__$1;
(statearr_23172_23219[(2)] = null);

(statearr_23172_23219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (24))){
var inst_23147 = (state_23168[(7)]);
var inst_23156 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23147);
var state_23168__$1 = state_23168;
var statearr_23173_23220 = state_23168__$1;
(statearr_23173_23220[(2)] = inst_23156);

(statearr_23173_23220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (4))){
var inst_23099 = (state_23168[(8)]);
var inst_23099__$1 = (state_23168[(2)]);
var inst_23100 = (inst_23099__$1 == null);
var state_23168__$1 = (function (){var statearr_23174 = state_23168;
(statearr_23174[(8)] = inst_23099__$1);

return statearr_23174;
})();
if(cljs.core.truth_(inst_23100)){
var statearr_23175_23221 = state_23168__$1;
(statearr_23175_23221[(1)] = (5));

} else {
var statearr_23176_23222 = state_23168__$1;
(statearr_23176_23222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (15))){
var inst_23141 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23177_23223 = state_23168__$1;
(statearr_23177_23223[(2)] = inst_23141);

(statearr_23177_23223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (21))){
var inst_23161 = (state_23168[(2)]);
var state_23168__$1 = (function (){var statearr_23178 = state_23168;
(statearr_23178[(9)] = inst_23161);

return statearr_23178;
})();
var statearr_23179_23224 = state_23168__$1;
(statearr_23179_23224[(2)] = null);

(statearr_23179_23224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (13))){
var inst_23123 = (state_23168[(10)]);
var inst_23125 = cljs.core.chunked_seq_QMARK_.call(null,inst_23123);
var state_23168__$1 = state_23168;
if(inst_23125){
var statearr_23180_23225 = state_23168__$1;
(statearr_23180_23225[(1)] = (16));

} else {
var statearr_23181_23226 = state_23168__$1;
(statearr_23181_23226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (22))){
var inst_23153 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
if(cljs.core.truth_(inst_23153)){
var statearr_23182_23227 = state_23168__$1;
(statearr_23182_23227[(1)] = (23));

} else {
var statearr_23183_23228 = state_23168__$1;
(statearr_23183_23228[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (6))){
var inst_23099 = (state_23168[(8)]);
var inst_23147 = (state_23168[(7)]);
var inst_23149 = (state_23168[(11)]);
var inst_23147__$1 = topic_fn.call(null,inst_23099);
var inst_23148 = cljs.core.deref.call(null,mults);
var inst_23149__$1 = cljs.core.get.call(null,inst_23148,inst_23147__$1);
var state_23168__$1 = (function (){var statearr_23184 = state_23168;
(statearr_23184[(7)] = inst_23147__$1);

(statearr_23184[(11)] = inst_23149__$1);

return statearr_23184;
})();
if(cljs.core.truth_(inst_23149__$1)){
var statearr_23185_23229 = state_23168__$1;
(statearr_23185_23229[(1)] = (19));

} else {
var statearr_23186_23230 = state_23168__$1;
(statearr_23186_23230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (25))){
var inst_23158 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23187_23231 = state_23168__$1;
(statearr_23187_23231[(2)] = inst_23158);

(statearr_23187_23231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (17))){
var inst_23123 = (state_23168[(10)]);
var inst_23132 = cljs.core.first.call(null,inst_23123);
var inst_23133 = cljs.core.async.muxch_STAR_.call(null,inst_23132);
var inst_23134 = cljs.core.async.close_BANG_.call(null,inst_23133);
var inst_23135 = cljs.core.next.call(null,inst_23123);
var inst_23109 = inst_23135;
var inst_23110 = null;
var inst_23111 = (0);
var inst_23112 = (0);
var state_23168__$1 = (function (){var statearr_23188 = state_23168;
(statearr_23188[(12)] = inst_23110);

(statearr_23188[(13)] = inst_23111);

(statearr_23188[(14)] = inst_23109);

(statearr_23188[(15)] = inst_23112);

(statearr_23188[(16)] = inst_23134);

return statearr_23188;
})();
var statearr_23189_23232 = state_23168__$1;
(statearr_23189_23232[(2)] = null);

(statearr_23189_23232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (3))){
var inst_23166 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23168__$1,inst_23166);
} else {
if((state_val_23169 === (12))){
var inst_23143 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23190_23233 = state_23168__$1;
(statearr_23190_23233[(2)] = inst_23143);

(statearr_23190_23233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (2))){
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23168__$1,(4),ch);
} else {
if((state_val_23169 === (23))){
var state_23168__$1 = state_23168;
var statearr_23191_23234 = state_23168__$1;
(statearr_23191_23234[(2)] = null);

(statearr_23191_23234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (19))){
var inst_23099 = (state_23168[(8)]);
var inst_23149 = (state_23168[(11)]);
var inst_23151 = cljs.core.async.muxch_STAR_.call(null,inst_23149);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23168__$1,(22),inst_23151,inst_23099);
} else {
if((state_val_23169 === (11))){
var inst_23109 = (state_23168[(14)]);
var inst_23123 = (state_23168[(10)]);
var inst_23123__$1 = cljs.core.seq.call(null,inst_23109);
var state_23168__$1 = (function (){var statearr_23192 = state_23168;
(statearr_23192[(10)] = inst_23123__$1);

return statearr_23192;
})();
if(inst_23123__$1){
var statearr_23193_23235 = state_23168__$1;
(statearr_23193_23235[(1)] = (13));

} else {
var statearr_23194_23236 = state_23168__$1;
(statearr_23194_23236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (9))){
var inst_23145 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23195_23237 = state_23168__$1;
(statearr_23195_23237[(2)] = inst_23145);

(statearr_23195_23237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (5))){
var inst_23106 = cljs.core.deref.call(null,mults);
var inst_23107 = cljs.core.vals.call(null,inst_23106);
var inst_23108 = cljs.core.seq.call(null,inst_23107);
var inst_23109 = inst_23108;
var inst_23110 = null;
var inst_23111 = (0);
var inst_23112 = (0);
var state_23168__$1 = (function (){var statearr_23196 = state_23168;
(statearr_23196[(12)] = inst_23110);

(statearr_23196[(13)] = inst_23111);

(statearr_23196[(14)] = inst_23109);

(statearr_23196[(15)] = inst_23112);

return statearr_23196;
})();
var statearr_23197_23238 = state_23168__$1;
(statearr_23197_23238[(2)] = null);

(statearr_23197_23238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (14))){
var state_23168__$1 = state_23168;
var statearr_23201_23239 = state_23168__$1;
(statearr_23201_23239[(2)] = null);

(statearr_23201_23239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (16))){
var inst_23123 = (state_23168[(10)]);
var inst_23127 = cljs.core.chunk_first.call(null,inst_23123);
var inst_23128 = cljs.core.chunk_rest.call(null,inst_23123);
var inst_23129 = cljs.core.count.call(null,inst_23127);
var inst_23109 = inst_23128;
var inst_23110 = inst_23127;
var inst_23111 = inst_23129;
var inst_23112 = (0);
var state_23168__$1 = (function (){var statearr_23202 = state_23168;
(statearr_23202[(12)] = inst_23110);

(statearr_23202[(13)] = inst_23111);

(statearr_23202[(14)] = inst_23109);

(statearr_23202[(15)] = inst_23112);

return statearr_23202;
})();
var statearr_23203_23240 = state_23168__$1;
(statearr_23203_23240[(2)] = null);

(statearr_23203_23240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (10))){
var inst_23110 = (state_23168[(12)]);
var inst_23111 = (state_23168[(13)]);
var inst_23109 = (state_23168[(14)]);
var inst_23112 = (state_23168[(15)]);
var inst_23117 = cljs.core._nth.call(null,inst_23110,inst_23112);
var inst_23118 = cljs.core.async.muxch_STAR_.call(null,inst_23117);
var inst_23119 = cljs.core.async.close_BANG_.call(null,inst_23118);
var inst_23120 = (inst_23112 + (1));
var tmp23198 = inst_23110;
var tmp23199 = inst_23111;
var tmp23200 = inst_23109;
var inst_23109__$1 = tmp23200;
var inst_23110__$1 = tmp23198;
var inst_23111__$1 = tmp23199;
var inst_23112__$1 = inst_23120;
var state_23168__$1 = (function (){var statearr_23204 = state_23168;
(statearr_23204[(12)] = inst_23110__$1);

(statearr_23204[(13)] = inst_23111__$1);

(statearr_23204[(14)] = inst_23109__$1);

(statearr_23204[(15)] = inst_23112__$1);

(statearr_23204[(17)] = inst_23119);

return statearr_23204;
})();
var statearr_23205_23241 = state_23168__$1;
(statearr_23205_23241[(2)] = null);

(statearr_23205_23241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (18))){
var inst_23138 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23206_23242 = state_23168__$1;
(statearr_23206_23242[(2)] = inst_23138);

(statearr_23206_23242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (8))){
var inst_23111 = (state_23168[(13)]);
var inst_23112 = (state_23168[(15)]);
var inst_23114 = (inst_23112 < inst_23111);
var inst_23115 = inst_23114;
var state_23168__$1 = state_23168;
if(cljs.core.truth_(inst_23115)){
var statearr_23207_23243 = state_23168__$1;
(statearr_23207_23243[(1)] = (10));

} else {
var statearr_23208_23244 = state_23168__$1;
(statearr_23208_23244[(1)] = (11));

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
});})(c__14807__auto___23216,mults,ensure_mult,p))
;
return ((function (switch__14751__auto__,c__14807__auto___23216,mults,ensure_mult,p){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_23212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23212[(0)] = state_machine__14752__auto__);

(statearr_23212[(1)] = (1));

return statearr_23212;
});
var state_machine__14752__auto____1 = (function (state_23168){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_23168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e23213){if((e23213 instanceof Object)){
var ex__14755__auto__ = e23213;
var statearr_23214_23245 = state_23168;
(statearr_23214_23245[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23246 = state_23168;
state_23168 = G__23246;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_23168){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_23168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___23216,mults,ensure_mult,p))
})();
var state__14809__auto__ = (function (){var statearr_23215 = f__14808__auto__.call(null);
(statearr_23215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___23216);

return statearr_23215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___23216,mults,ensure_mult,p))
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
var c__14807__auto___23383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23353){
var state_val_23354 = (state_23353[(1)]);
if((state_val_23354 === (7))){
var state_23353__$1 = state_23353;
var statearr_23355_23384 = state_23353__$1;
(statearr_23355_23384[(2)] = null);

(statearr_23355_23384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (1))){
var state_23353__$1 = state_23353;
var statearr_23356_23385 = state_23353__$1;
(statearr_23356_23385[(2)] = null);

(statearr_23356_23385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (4))){
var inst_23317 = (state_23353[(7)]);
var inst_23319 = (inst_23317 < cnt);
var state_23353__$1 = state_23353;
if(cljs.core.truth_(inst_23319)){
var statearr_23357_23386 = state_23353__$1;
(statearr_23357_23386[(1)] = (6));

} else {
var statearr_23358_23387 = state_23353__$1;
(statearr_23358_23387[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (15))){
var inst_23349 = (state_23353[(2)]);
var state_23353__$1 = state_23353;
var statearr_23359_23388 = state_23353__$1;
(statearr_23359_23388[(2)] = inst_23349);

(statearr_23359_23388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (13))){
var inst_23342 = cljs.core.async.close_BANG_.call(null,out);
var state_23353__$1 = state_23353;
var statearr_23360_23389 = state_23353__$1;
(statearr_23360_23389[(2)] = inst_23342);

(statearr_23360_23389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (6))){
var state_23353__$1 = state_23353;
var statearr_23361_23390 = state_23353__$1;
(statearr_23361_23390[(2)] = null);

(statearr_23361_23390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (3))){
var inst_23351 = (state_23353[(2)]);
var state_23353__$1 = state_23353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23353__$1,inst_23351);
} else {
if((state_val_23354 === (12))){
var inst_23339 = (state_23353[(8)]);
var inst_23339__$1 = (state_23353[(2)]);
var inst_23340 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23339__$1);
var state_23353__$1 = (function (){var statearr_23362 = state_23353;
(statearr_23362[(8)] = inst_23339__$1);

return statearr_23362;
})();
if(cljs.core.truth_(inst_23340)){
var statearr_23363_23391 = state_23353__$1;
(statearr_23363_23391[(1)] = (13));

} else {
var statearr_23364_23392 = state_23353__$1;
(statearr_23364_23392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (2))){
var inst_23316 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23317 = (0);
var state_23353__$1 = (function (){var statearr_23365 = state_23353;
(statearr_23365[(9)] = inst_23316);

(statearr_23365[(7)] = inst_23317);

return statearr_23365;
})();
var statearr_23366_23393 = state_23353__$1;
(statearr_23366_23393[(2)] = null);

(statearr_23366_23393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (11))){
var inst_23317 = (state_23353[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23353,(10),Object,null,(9));
var inst_23326 = chs__$1.call(null,inst_23317);
var inst_23327 = done.call(null,inst_23317);
var inst_23328 = cljs.core.async.take_BANG_.call(null,inst_23326,inst_23327);
var state_23353__$1 = state_23353;
var statearr_23367_23394 = state_23353__$1;
(statearr_23367_23394[(2)] = inst_23328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (9))){
var inst_23317 = (state_23353[(7)]);
var inst_23330 = (state_23353[(2)]);
var inst_23331 = (inst_23317 + (1));
var inst_23317__$1 = inst_23331;
var state_23353__$1 = (function (){var statearr_23368 = state_23353;
(statearr_23368[(10)] = inst_23330);

(statearr_23368[(7)] = inst_23317__$1);

return statearr_23368;
})();
var statearr_23369_23395 = state_23353__$1;
(statearr_23369_23395[(2)] = null);

(statearr_23369_23395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (5))){
var inst_23337 = (state_23353[(2)]);
var state_23353__$1 = (function (){var statearr_23370 = state_23353;
(statearr_23370[(11)] = inst_23337);

return statearr_23370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23353__$1,(12),dchan);
} else {
if((state_val_23354 === (14))){
var inst_23339 = (state_23353[(8)]);
var inst_23344 = cljs.core.apply.call(null,f,inst_23339);
var state_23353__$1 = state_23353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23353__$1,(16),out,inst_23344);
} else {
if((state_val_23354 === (16))){
var inst_23346 = (state_23353[(2)]);
var state_23353__$1 = (function (){var statearr_23371 = state_23353;
(statearr_23371[(12)] = inst_23346);

return statearr_23371;
})();
var statearr_23372_23396 = state_23353__$1;
(statearr_23372_23396[(2)] = null);

(statearr_23372_23396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (10))){
var inst_23321 = (state_23353[(2)]);
var inst_23322 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23353__$1 = (function (){var statearr_23373 = state_23353;
(statearr_23373[(13)] = inst_23321);

return statearr_23373;
})();
var statearr_23374_23397 = state_23353__$1;
(statearr_23374_23397[(2)] = inst_23322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23354 === (8))){
var inst_23335 = (state_23353[(2)]);
var state_23353__$1 = state_23353;
var statearr_23375_23398 = state_23353__$1;
(statearr_23375_23398[(2)] = inst_23335);

(statearr_23375_23398[(1)] = (5));


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
});})(c__14807__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14751__auto__,c__14807__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_23379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23379[(0)] = state_machine__14752__auto__);

(statearr_23379[(1)] = (1));

return statearr_23379;
});
var state_machine__14752__auto____1 = (function (state_23353){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_23353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e23380){if((e23380 instanceof Object)){
var ex__14755__auto__ = e23380;
var statearr_23381_23399 = state_23353;
(statearr_23381_23399[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23353;
state_23353 = G__23400;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_23353){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_23353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14809__auto__ = (function (){var statearr_23382 = f__14808__auto__.call(null);
(statearr_23382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___23383);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___23383,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__14807__auto___23508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___23508,out){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___23508,out){
return (function (state_23484){
var state_val_23485 = (state_23484[(1)]);
if((state_val_23485 === (7))){
var inst_23464 = (state_23484[(7)]);
var inst_23463 = (state_23484[(8)]);
var inst_23463__$1 = (state_23484[(2)]);
var inst_23464__$1 = cljs.core.nth.call(null,inst_23463__$1,(0),null);
var inst_23465 = cljs.core.nth.call(null,inst_23463__$1,(1),null);
var inst_23466 = (inst_23464__$1 == null);
var state_23484__$1 = (function (){var statearr_23486 = state_23484;
(statearr_23486[(7)] = inst_23464__$1);

(statearr_23486[(8)] = inst_23463__$1);

(statearr_23486[(9)] = inst_23465);

return statearr_23486;
})();
if(cljs.core.truth_(inst_23466)){
var statearr_23487_23509 = state_23484__$1;
(statearr_23487_23509[(1)] = (8));

} else {
var statearr_23488_23510 = state_23484__$1;
(statearr_23488_23510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (1))){
var inst_23455 = cljs.core.vec.call(null,chs);
var inst_23456 = inst_23455;
var state_23484__$1 = (function (){var statearr_23489 = state_23484;
(statearr_23489[(10)] = inst_23456);

return statearr_23489;
})();
var statearr_23490_23511 = state_23484__$1;
(statearr_23490_23511[(2)] = null);

(statearr_23490_23511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (4))){
var inst_23456 = (state_23484[(10)]);
var state_23484__$1 = state_23484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23484__$1,(7),inst_23456);
} else {
if((state_val_23485 === (6))){
var inst_23480 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23491_23512 = state_23484__$1;
(statearr_23491_23512[(2)] = inst_23480);

(statearr_23491_23512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (3))){
var inst_23482 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23484__$1,inst_23482);
} else {
if((state_val_23485 === (2))){
var inst_23456 = (state_23484[(10)]);
var inst_23458 = cljs.core.count.call(null,inst_23456);
var inst_23459 = (inst_23458 > (0));
var state_23484__$1 = state_23484;
if(cljs.core.truth_(inst_23459)){
var statearr_23493_23513 = state_23484__$1;
(statearr_23493_23513[(1)] = (4));

} else {
var statearr_23494_23514 = state_23484__$1;
(statearr_23494_23514[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (11))){
var inst_23456 = (state_23484[(10)]);
var inst_23473 = (state_23484[(2)]);
var tmp23492 = inst_23456;
var inst_23456__$1 = tmp23492;
var state_23484__$1 = (function (){var statearr_23495 = state_23484;
(statearr_23495[(10)] = inst_23456__$1);

(statearr_23495[(11)] = inst_23473);

return statearr_23495;
})();
var statearr_23496_23515 = state_23484__$1;
(statearr_23496_23515[(2)] = null);

(statearr_23496_23515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (9))){
var inst_23464 = (state_23484[(7)]);
var state_23484__$1 = state_23484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23484__$1,(11),out,inst_23464);
} else {
if((state_val_23485 === (5))){
var inst_23478 = cljs.core.async.close_BANG_.call(null,out);
var state_23484__$1 = state_23484;
var statearr_23497_23516 = state_23484__$1;
(statearr_23497_23516[(2)] = inst_23478);

(statearr_23497_23516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (10))){
var inst_23476 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23498_23517 = state_23484__$1;
(statearr_23498_23517[(2)] = inst_23476);

(statearr_23498_23517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (8))){
var inst_23464 = (state_23484[(7)]);
var inst_23463 = (state_23484[(8)]);
var inst_23456 = (state_23484[(10)]);
var inst_23465 = (state_23484[(9)]);
var inst_23468 = (function (){var c = inst_23465;
var v = inst_23464;
var vec__23461 = inst_23463;
var cs = inst_23456;
return ((function (c,v,vec__23461,cs,inst_23464,inst_23463,inst_23456,inst_23465,state_val_23485,c__14807__auto___23508,out){
return (function (p1__23401_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23401_SHARP_);
});
;})(c,v,vec__23461,cs,inst_23464,inst_23463,inst_23456,inst_23465,state_val_23485,c__14807__auto___23508,out))
})();
var inst_23469 = cljs.core.filterv.call(null,inst_23468,inst_23456);
var inst_23456__$1 = inst_23469;
var state_23484__$1 = (function (){var statearr_23499 = state_23484;
(statearr_23499[(10)] = inst_23456__$1);

return statearr_23499;
})();
var statearr_23500_23518 = state_23484__$1;
(statearr_23500_23518[(2)] = null);

(statearr_23500_23518[(1)] = (2));


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
});})(c__14807__auto___23508,out))
;
return ((function (switch__14751__auto__,c__14807__auto___23508,out){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_23504 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23504[(0)] = state_machine__14752__auto__);

(statearr_23504[(1)] = (1));

return statearr_23504;
});
var state_machine__14752__auto____1 = (function (state_23484){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_23484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e23505){if((e23505 instanceof Object)){
var ex__14755__auto__ = e23505;
var statearr_23506_23519 = state_23484;
(statearr_23506_23519[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23520 = state_23484;
state_23484 = G__23520;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_23484){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_23484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___23508,out))
})();
var state__14809__auto__ = (function (){var statearr_23507 = f__14808__auto__.call(null);
(statearr_23507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___23508);

return statearr_23507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___23508,out))
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
var c__14807__auto___23613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___23613,out){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___23613,out){
return (function (state_23590){
var state_val_23591 = (state_23590[(1)]);
if((state_val_23591 === (7))){
var inst_23572 = (state_23590[(7)]);
var inst_23572__$1 = (state_23590[(2)]);
var inst_23573 = (inst_23572__$1 == null);
var inst_23574 = cljs.core.not.call(null,inst_23573);
var state_23590__$1 = (function (){var statearr_23592 = state_23590;
(statearr_23592[(7)] = inst_23572__$1);

return statearr_23592;
})();
if(inst_23574){
var statearr_23593_23614 = state_23590__$1;
(statearr_23593_23614[(1)] = (8));

} else {
var statearr_23594_23615 = state_23590__$1;
(statearr_23594_23615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (1))){
var inst_23567 = (0);
var state_23590__$1 = (function (){var statearr_23595 = state_23590;
(statearr_23595[(8)] = inst_23567);

return statearr_23595;
})();
var statearr_23596_23616 = state_23590__$1;
(statearr_23596_23616[(2)] = null);

(statearr_23596_23616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (4))){
var state_23590__$1 = state_23590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23590__$1,(7),ch);
} else {
if((state_val_23591 === (6))){
var inst_23585 = (state_23590[(2)]);
var state_23590__$1 = state_23590;
var statearr_23597_23617 = state_23590__$1;
(statearr_23597_23617[(2)] = inst_23585);

(statearr_23597_23617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (3))){
var inst_23587 = (state_23590[(2)]);
var inst_23588 = cljs.core.async.close_BANG_.call(null,out);
var state_23590__$1 = (function (){var statearr_23598 = state_23590;
(statearr_23598[(9)] = inst_23587);

return statearr_23598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23590__$1,inst_23588);
} else {
if((state_val_23591 === (2))){
var inst_23567 = (state_23590[(8)]);
var inst_23569 = (inst_23567 < n);
var state_23590__$1 = state_23590;
if(cljs.core.truth_(inst_23569)){
var statearr_23599_23618 = state_23590__$1;
(statearr_23599_23618[(1)] = (4));

} else {
var statearr_23600_23619 = state_23590__$1;
(statearr_23600_23619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (11))){
var inst_23567 = (state_23590[(8)]);
var inst_23577 = (state_23590[(2)]);
var inst_23578 = (inst_23567 + (1));
var inst_23567__$1 = inst_23578;
var state_23590__$1 = (function (){var statearr_23601 = state_23590;
(statearr_23601[(8)] = inst_23567__$1);

(statearr_23601[(10)] = inst_23577);

return statearr_23601;
})();
var statearr_23602_23620 = state_23590__$1;
(statearr_23602_23620[(2)] = null);

(statearr_23602_23620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (9))){
var state_23590__$1 = state_23590;
var statearr_23603_23621 = state_23590__$1;
(statearr_23603_23621[(2)] = null);

(statearr_23603_23621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (5))){
var state_23590__$1 = state_23590;
var statearr_23604_23622 = state_23590__$1;
(statearr_23604_23622[(2)] = null);

(statearr_23604_23622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (10))){
var inst_23582 = (state_23590[(2)]);
var state_23590__$1 = state_23590;
var statearr_23605_23623 = state_23590__$1;
(statearr_23605_23623[(2)] = inst_23582);

(statearr_23605_23623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (8))){
var inst_23572 = (state_23590[(7)]);
var state_23590__$1 = state_23590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23590__$1,(11),out,inst_23572);
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
});})(c__14807__auto___23613,out))
;
return ((function (switch__14751__auto__,c__14807__auto___23613,out){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_23609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23609[(0)] = state_machine__14752__auto__);

(statearr_23609[(1)] = (1));

return statearr_23609;
});
var state_machine__14752__auto____1 = (function (state_23590){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_23590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e23610){if((e23610 instanceof Object)){
var ex__14755__auto__ = e23610;
var statearr_23611_23624 = state_23590;
(statearr_23611_23624[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23625 = state_23590;
state_23590 = G__23625;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_23590){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_23590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___23613,out))
})();
var state__14809__auto__ = (function (){var statearr_23612 = f__14808__auto__.call(null);
(statearr_23612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___23613);

return statearr_23612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___23613,out))
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
if(typeof cljs.core.async.t23633 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23633 = (function (ch,f,map_LT_,meta23634){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23634 = meta23634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23633.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t23633.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t23636 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23636 = (function (fn1,_,meta23634,map_LT_,f,ch,meta23637){
this.fn1 = fn1;
this._ = _;
this.meta23634 = meta23634;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23637 = meta23637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23636.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t23636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23626_SHARP_){
return f1.call(null,(((p1__23626_SHARP_ == null))?null:self__.f.call(null,p1__23626_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23638){
var self__ = this;
var _23638__$1 = this;
return self__.meta23637;
});})(___$1))
;

cljs.core.async.t23636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23638,meta23637__$1){
var self__ = this;
var _23638__$1 = this;
return (new cljs.core.async.t23636(self__.fn1,self__._,self__.meta23634,self__.map_LT_,self__.f,self__.ch,meta23637__$1));
});})(___$1))
;

cljs.core.async.t23636.cljs$lang$type = true;

cljs.core.async.t23636.cljs$lang$ctorStr = "cljs.core.async/t23636";

cljs.core.async.t23636.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23636");
});})(___$1))
;

cljs.core.async.__GT_t23636 = ((function (___$1){
return (function __GT_t23636(fn1__$1,___$2,meta23634__$1,map_LT___$1,f__$1,ch__$1,meta23637){
return (new cljs.core.async.t23636(fn1__$1,___$2,meta23634__$1,map_LT___$1,f__$1,ch__$1,meta23637));
});})(___$1))
;

}

return (new cljs.core.async.t23636(fn1,___$1,self__.meta23634,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t23633.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23633.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23635){
var self__ = this;
var _23635__$1 = this;
return self__.meta23634;
});

cljs.core.async.t23633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23635,meta23634__$1){
var self__ = this;
var _23635__$1 = this;
return (new cljs.core.async.t23633(self__.ch,self__.f,self__.map_LT_,meta23634__$1));
});

cljs.core.async.t23633.cljs$lang$type = true;

cljs.core.async.t23633.cljs$lang$ctorStr = "cljs.core.async/t23633";

cljs.core.async.t23633.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23633");
});

cljs.core.async.__GT_t23633 = (function __GT_t23633(ch__$1,f__$1,map_LT___$1,meta23634){
return (new cljs.core.async.t23633(ch__$1,f__$1,map_LT___$1,meta23634));
});

}

return (new cljs.core.async.t23633(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23642 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23642 = (function (ch,f,map_GT_,meta23643){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23643 = meta23643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23642.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t23642.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23642.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23644){
var self__ = this;
var _23644__$1 = this;
return self__.meta23643;
});

cljs.core.async.t23642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23644,meta23643__$1){
var self__ = this;
var _23644__$1 = this;
return (new cljs.core.async.t23642(self__.ch,self__.f,self__.map_GT_,meta23643__$1));
});

cljs.core.async.t23642.cljs$lang$type = true;

cljs.core.async.t23642.cljs$lang$ctorStr = "cljs.core.async/t23642";

cljs.core.async.t23642.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23642");
});

cljs.core.async.__GT_t23642 = (function __GT_t23642(ch__$1,f__$1,map_GT___$1,meta23643){
return (new cljs.core.async.t23642(ch__$1,f__$1,map_GT___$1,meta23643));
});

}

return (new cljs.core.async.t23642(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23648 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23648 = (function (ch,p,filter_GT_,meta23649){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23649 = meta23649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23648.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23650){
var self__ = this;
var _23650__$1 = this;
return self__.meta23649;
});

cljs.core.async.t23648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23650,meta23649__$1){
var self__ = this;
var _23650__$1 = this;
return (new cljs.core.async.t23648(self__.ch,self__.p,self__.filter_GT_,meta23649__$1));
});

cljs.core.async.t23648.cljs$lang$type = true;

cljs.core.async.t23648.cljs$lang$ctorStr = "cljs.core.async/t23648";

cljs.core.async.t23648.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t23648");
});

cljs.core.async.__GT_t23648 = (function __GT_t23648(ch__$1,p__$1,filter_GT___$1,meta23649){
return (new cljs.core.async.t23648(ch__$1,p__$1,filter_GT___$1,meta23649));
});

}

return (new cljs.core.async.t23648(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__14807__auto___23733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___23733,out){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___23733,out){
return (function (state_23712){
var state_val_23713 = (state_23712[(1)]);
if((state_val_23713 === (7))){
var inst_23708 = (state_23712[(2)]);
var state_23712__$1 = state_23712;
var statearr_23714_23734 = state_23712__$1;
(statearr_23714_23734[(2)] = inst_23708);

(statearr_23714_23734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (1))){
var state_23712__$1 = state_23712;
var statearr_23715_23735 = state_23712__$1;
(statearr_23715_23735[(2)] = null);

(statearr_23715_23735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (4))){
var inst_23694 = (state_23712[(7)]);
var inst_23694__$1 = (state_23712[(2)]);
var inst_23695 = (inst_23694__$1 == null);
var state_23712__$1 = (function (){var statearr_23716 = state_23712;
(statearr_23716[(7)] = inst_23694__$1);

return statearr_23716;
})();
if(cljs.core.truth_(inst_23695)){
var statearr_23717_23736 = state_23712__$1;
(statearr_23717_23736[(1)] = (5));

} else {
var statearr_23718_23737 = state_23712__$1;
(statearr_23718_23737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (6))){
var inst_23694 = (state_23712[(7)]);
var inst_23699 = p.call(null,inst_23694);
var state_23712__$1 = state_23712;
if(cljs.core.truth_(inst_23699)){
var statearr_23719_23738 = state_23712__$1;
(statearr_23719_23738[(1)] = (8));

} else {
var statearr_23720_23739 = state_23712__$1;
(statearr_23720_23739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (3))){
var inst_23710 = (state_23712[(2)]);
var state_23712__$1 = state_23712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23712__$1,inst_23710);
} else {
if((state_val_23713 === (2))){
var state_23712__$1 = state_23712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23712__$1,(4),ch);
} else {
if((state_val_23713 === (11))){
var inst_23702 = (state_23712[(2)]);
var state_23712__$1 = state_23712;
var statearr_23721_23740 = state_23712__$1;
(statearr_23721_23740[(2)] = inst_23702);

(statearr_23721_23740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (9))){
var state_23712__$1 = state_23712;
var statearr_23722_23741 = state_23712__$1;
(statearr_23722_23741[(2)] = null);

(statearr_23722_23741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (5))){
var inst_23697 = cljs.core.async.close_BANG_.call(null,out);
var state_23712__$1 = state_23712;
var statearr_23723_23742 = state_23712__$1;
(statearr_23723_23742[(2)] = inst_23697);

(statearr_23723_23742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (10))){
var inst_23705 = (state_23712[(2)]);
var state_23712__$1 = (function (){var statearr_23724 = state_23712;
(statearr_23724[(8)] = inst_23705);

return statearr_23724;
})();
var statearr_23725_23743 = state_23712__$1;
(statearr_23725_23743[(2)] = null);

(statearr_23725_23743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23713 === (8))){
var inst_23694 = (state_23712[(7)]);
var state_23712__$1 = state_23712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23712__$1,(11),out,inst_23694);
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
});})(c__14807__auto___23733,out))
;
return ((function (switch__14751__auto__,c__14807__auto___23733,out){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_23729 = [null,null,null,null,null,null,null,null,null];
(statearr_23729[(0)] = state_machine__14752__auto__);

(statearr_23729[(1)] = (1));

return statearr_23729;
});
var state_machine__14752__auto____1 = (function (state_23712){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_23712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e23730){if((e23730 instanceof Object)){
var ex__14755__auto__ = e23730;
var statearr_23731_23744 = state_23712;
(statearr_23731_23744[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23745 = state_23712;
state_23712 = G__23745;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_23712){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_23712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___23733,out))
})();
var state__14809__auto__ = (function (){var statearr_23732 = f__14808__auto__.call(null);
(statearr_23732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___23733);

return statearr_23732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___23733,out))
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
var c__14807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto__){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto__){
return (function (state_23911){
var state_val_23912 = (state_23911[(1)]);
if((state_val_23912 === (7))){
var inst_23907 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23913_23954 = state_23911__$1;
(statearr_23913_23954[(2)] = inst_23907);

(statearr_23913_23954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (20))){
var inst_23877 = (state_23911[(7)]);
var inst_23888 = (state_23911[(2)]);
var inst_23889 = cljs.core.next.call(null,inst_23877);
var inst_23863 = inst_23889;
var inst_23864 = null;
var inst_23865 = (0);
var inst_23866 = (0);
var state_23911__$1 = (function (){var statearr_23914 = state_23911;
(statearr_23914[(8)] = inst_23863);

(statearr_23914[(9)] = inst_23865);

(statearr_23914[(10)] = inst_23864);

(statearr_23914[(11)] = inst_23888);

(statearr_23914[(12)] = inst_23866);

return statearr_23914;
})();
var statearr_23915_23955 = state_23911__$1;
(statearr_23915_23955[(2)] = null);

(statearr_23915_23955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (1))){
var state_23911__$1 = state_23911;
var statearr_23916_23956 = state_23911__$1;
(statearr_23916_23956[(2)] = null);

(statearr_23916_23956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (4))){
var inst_23852 = (state_23911[(13)]);
var inst_23852__$1 = (state_23911[(2)]);
var inst_23853 = (inst_23852__$1 == null);
var state_23911__$1 = (function (){var statearr_23917 = state_23911;
(statearr_23917[(13)] = inst_23852__$1);

return statearr_23917;
})();
if(cljs.core.truth_(inst_23853)){
var statearr_23918_23957 = state_23911__$1;
(statearr_23918_23957[(1)] = (5));

} else {
var statearr_23919_23958 = state_23911__$1;
(statearr_23919_23958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (15))){
var state_23911__$1 = state_23911;
var statearr_23923_23959 = state_23911__$1;
(statearr_23923_23959[(2)] = null);

(statearr_23923_23959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (21))){
var state_23911__$1 = state_23911;
var statearr_23924_23960 = state_23911__$1;
(statearr_23924_23960[(2)] = null);

(statearr_23924_23960[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (13))){
var inst_23863 = (state_23911[(8)]);
var inst_23865 = (state_23911[(9)]);
var inst_23864 = (state_23911[(10)]);
var inst_23866 = (state_23911[(12)]);
var inst_23873 = (state_23911[(2)]);
var inst_23874 = (inst_23866 + (1));
var tmp23920 = inst_23863;
var tmp23921 = inst_23865;
var tmp23922 = inst_23864;
var inst_23863__$1 = tmp23920;
var inst_23864__$1 = tmp23922;
var inst_23865__$1 = tmp23921;
var inst_23866__$1 = inst_23874;
var state_23911__$1 = (function (){var statearr_23925 = state_23911;
(statearr_23925[(14)] = inst_23873);

(statearr_23925[(8)] = inst_23863__$1);

(statearr_23925[(9)] = inst_23865__$1);

(statearr_23925[(10)] = inst_23864__$1);

(statearr_23925[(12)] = inst_23866__$1);

return statearr_23925;
})();
var statearr_23926_23961 = state_23911__$1;
(statearr_23926_23961[(2)] = null);

(statearr_23926_23961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (22))){
var state_23911__$1 = state_23911;
var statearr_23927_23962 = state_23911__$1;
(statearr_23927_23962[(2)] = null);

(statearr_23927_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (6))){
var inst_23852 = (state_23911[(13)]);
var inst_23861 = f.call(null,inst_23852);
var inst_23862 = cljs.core.seq.call(null,inst_23861);
var inst_23863 = inst_23862;
var inst_23864 = null;
var inst_23865 = (0);
var inst_23866 = (0);
var state_23911__$1 = (function (){var statearr_23928 = state_23911;
(statearr_23928[(8)] = inst_23863);

(statearr_23928[(9)] = inst_23865);

(statearr_23928[(10)] = inst_23864);

(statearr_23928[(12)] = inst_23866);

return statearr_23928;
})();
var statearr_23929_23963 = state_23911__$1;
(statearr_23929_23963[(2)] = null);

(statearr_23929_23963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (17))){
var inst_23877 = (state_23911[(7)]);
var inst_23881 = cljs.core.chunk_first.call(null,inst_23877);
var inst_23882 = cljs.core.chunk_rest.call(null,inst_23877);
var inst_23883 = cljs.core.count.call(null,inst_23881);
var inst_23863 = inst_23882;
var inst_23864 = inst_23881;
var inst_23865 = inst_23883;
var inst_23866 = (0);
var state_23911__$1 = (function (){var statearr_23930 = state_23911;
(statearr_23930[(8)] = inst_23863);

(statearr_23930[(9)] = inst_23865);

(statearr_23930[(10)] = inst_23864);

(statearr_23930[(12)] = inst_23866);

return statearr_23930;
})();
var statearr_23931_23964 = state_23911__$1;
(statearr_23931_23964[(2)] = null);

(statearr_23931_23964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (3))){
var inst_23909 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23911__$1,inst_23909);
} else {
if((state_val_23912 === (12))){
var inst_23897 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23932_23965 = state_23911__$1;
(statearr_23932_23965[(2)] = inst_23897);

(statearr_23932_23965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (2))){
var state_23911__$1 = state_23911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23911__$1,(4),in$);
} else {
if((state_val_23912 === (23))){
var inst_23905 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23933_23966 = state_23911__$1;
(statearr_23933_23966[(2)] = inst_23905);

(statearr_23933_23966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (19))){
var inst_23892 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23934_23967 = state_23911__$1;
(statearr_23934_23967[(2)] = inst_23892);

(statearr_23934_23967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (11))){
var inst_23863 = (state_23911[(8)]);
var inst_23877 = (state_23911[(7)]);
var inst_23877__$1 = cljs.core.seq.call(null,inst_23863);
var state_23911__$1 = (function (){var statearr_23935 = state_23911;
(statearr_23935[(7)] = inst_23877__$1);

return statearr_23935;
})();
if(inst_23877__$1){
var statearr_23936_23968 = state_23911__$1;
(statearr_23936_23968[(1)] = (14));

} else {
var statearr_23937_23969 = state_23911__$1;
(statearr_23937_23969[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (9))){
var inst_23899 = (state_23911[(2)]);
var inst_23900 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23911__$1 = (function (){var statearr_23938 = state_23911;
(statearr_23938[(15)] = inst_23899);

return statearr_23938;
})();
if(cljs.core.truth_(inst_23900)){
var statearr_23939_23970 = state_23911__$1;
(statearr_23939_23970[(1)] = (21));

} else {
var statearr_23940_23971 = state_23911__$1;
(statearr_23940_23971[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (5))){
var inst_23855 = cljs.core.async.close_BANG_.call(null,out);
var state_23911__$1 = state_23911;
var statearr_23941_23972 = state_23911__$1;
(statearr_23941_23972[(2)] = inst_23855);

(statearr_23941_23972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (14))){
var inst_23877 = (state_23911[(7)]);
var inst_23879 = cljs.core.chunked_seq_QMARK_.call(null,inst_23877);
var state_23911__$1 = state_23911;
if(inst_23879){
var statearr_23942_23973 = state_23911__$1;
(statearr_23942_23973[(1)] = (17));

} else {
var statearr_23943_23974 = state_23911__$1;
(statearr_23943_23974[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (16))){
var inst_23895 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23944_23975 = state_23911__$1;
(statearr_23944_23975[(2)] = inst_23895);

(statearr_23944_23975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23912 === (10))){
var inst_23864 = (state_23911[(10)]);
var inst_23866 = (state_23911[(12)]);
var inst_23871 = cljs.core._nth.call(null,inst_23864,inst_23866);
var state_23911__$1 = state_23911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23911__$1,(13),out,inst_23871);
} else {
if((state_val_23912 === (18))){
var inst_23877 = (state_23911[(7)]);
var inst_23886 = cljs.core.first.call(null,inst_23877);
var state_23911__$1 = state_23911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23911__$1,(20),out,inst_23886);
} else {
if((state_val_23912 === (8))){
var inst_23865 = (state_23911[(9)]);
var inst_23866 = (state_23911[(12)]);
var inst_23868 = (inst_23866 < inst_23865);
var inst_23869 = inst_23868;
var state_23911__$1 = state_23911;
if(cljs.core.truth_(inst_23869)){
var statearr_23945_23976 = state_23911__$1;
(statearr_23945_23976[(1)] = (10));

} else {
var statearr_23946_23977 = state_23911__$1;
(statearr_23946_23977[(1)] = (11));

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
});})(c__14807__auto__))
;
return ((function (switch__14751__auto__,c__14807__auto__){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_23950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23950[(0)] = state_machine__14752__auto__);

(statearr_23950[(1)] = (1));

return statearr_23950;
});
var state_machine__14752__auto____1 = (function (state_23911){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_23911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e23951){if((e23951 instanceof Object)){
var ex__14755__auto__ = e23951;
var statearr_23952_23978 = state_23911;
(statearr_23952_23978[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23979 = state_23911;
state_23911 = G__23979;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_23911){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_23911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto__))
})();
var state__14809__auto__ = (function (){var statearr_23953 = f__14808__auto__.call(null);
(statearr_23953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto__);

return statearr_23953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto__))
);

return c__14807__auto__;
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
var c__14807__auto___24076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___24076,out){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___24076,out){
return (function (state_24051){
var state_val_24052 = (state_24051[(1)]);
if((state_val_24052 === (7))){
var inst_24046 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
var statearr_24053_24077 = state_24051__$1;
(statearr_24053_24077[(2)] = inst_24046);

(statearr_24053_24077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (1))){
var inst_24028 = null;
var state_24051__$1 = (function (){var statearr_24054 = state_24051;
(statearr_24054[(7)] = inst_24028);

return statearr_24054;
})();
var statearr_24055_24078 = state_24051__$1;
(statearr_24055_24078[(2)] = null);

(statearr_24055_24078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (4))){
var inst_24031 = (state_24051[(8)]);
var inst_24031__$1 = (state_24051[(2)]);
var inst_24032 = (inst_24031__$1 == null);
var inst_24033 = cljs.core.not.call(null,inst_24032);
var state_24051__$1 = (function (){var statearr_24056 = state_24051;
(statearr_24056[(8)] = inst_24031__$1);

return statearr_24056;
})();
if(inst_24033){
var statearr_24057_24079 = state_24051__$1;
(statearr_24057_24079[(1)] = (5));

} else {
var statearr_24058_24080 = state_24051__$1;
(statearr_24058_24080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (6))){
var state_24051__$1 = state_24051;
var statearr_24059_24081 = state_24051__$1;
(statearr_24059_24081[(2)] = null);

(statearr_24059_24081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (3))){
var inst_24048 = (state_24051[(2)]);
var inst_24049 = cljs.core.async.close_BANG_.call(null,out);
var state_24051__$1 = (function (){var statearr_24060 = state_24051;
(statearr_24060[(9)] = inst_24048);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24051__$1,inst_24049);
} else {
if((state_val_24052 === (2))){
var state_24051__$1 = state_24051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24051__$1,(4),ch);
} else {
if((state_val_24052 === (11))){
var inst_24031 = (state_24051[(8)]);
var inst_24040 = (state_24051[(2)]);
var inst_24028 = inst_24031;
var state_24051__$1 = (function (){var statearr_24061 = state_24051;
(statearr_24061[(7)] = inst_24028);

(statearr_24061[(10)] = inst_24040);

return statearr_24061;
})();
var statearr_24062_24082 = state_24051__$1;
(statearr_24062_24082[(2)] = null);

(statearr_24062_24082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (9))){
var inst_24031 = (state_24051[(8)]);
var state_24051__$1 = state_24051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24051__$1,(11),out,inst_24031);
} else {
if((state_val_24052 === (5))){
var inst_24031 = (state_24051[(8)]);
var inst_24028 = (state_24051[(7)]);
var inst_24035 = cljs.core._EQ_.call(null,inst_24031,inst_24028);
var state_24051__$1 = state_24051;
if(inst_24035){
var statearr_24064_24083 = state_24051__$1;
(statearr_24064_24083[(1)] = (8));

} else {
var statearr_24065_24084 = state_24051__$1;
(statearr_24065_24084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (10))){
var inst_24043 = (state_24051[(2)]);
var state_24051__$1 = state_24051;
var statearr_24066_24085 = state_24051__$1;
(statearr_24066_24085[(2)] = inst_24043);

(statearr_24066_24085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24052 === (8))){
var inst_24028 = (state_24051[(7)]);
var tmp24063 = inst_24028;
var inst_24028__$1 = tmp24063;
var state_24051__$1 = (function (){var statearr_24067 = state_24051;
(statearr_24067[(7)] = inst_24028__$1);

return statearr_24067;
})();
var statearr_24068_24086 = state_24051__$1;
(statearr_24068_24086[(2)] = null);

(statearr_24068_24086[(1)] = (2));


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
});})(c__14807__auto___24076,out))
;
return ((function (switch__14751__auto__,c__14807__auto___24076,out){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_24072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24072[(0)] = state_machine__14752__auto__);

(statearr_24072[(1)] = (1));

return statearr_24072;
});
var state_machine__14752__auto____1 = (function (state_24051){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_24051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e24073){if((e24073 instanceof Object)){
var ex__14755__auto__ = e24073;
var statearr_24074_24087 = state_24051;
(statearr_24074_24087[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24088 = state_24051;
state_24051 = G__24088;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_24051){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_24051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___24076,out))
})();
var state__14809__auto__ = (function (){var statearr_24075 = f__14808__auto__.call(null);
(statearr_24075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___24076);

return statearr_24075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___24076,out))
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
var c__14807__auto___24223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___24223,out){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___24223,out){
return (function (state_24193){
var state_val_24194 = (state_24193[(1)]);
if((state_val_24194 === (7))){
var inst_24189 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24195_24224 = state_24193__$1;
(statearr_24195_24224[(2)] = inst_24189);

(statearr_24195_24224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (1))){
var inst_24156 = (new Array(n));
var inst_24157 = inst_24156;
var inst_24158 = (0);
var state_24193__$1 = (function (){var statearr_24196 = state_24193;
(statearr_24196[(7)] = inst_24157);

(statearr_24196[(8)] = inst_24158);

return statearr_24196;
})();
var statearr_24197_24225 = state_24193__$1;
(statearr_24197_24225[(2)] = null);

(statearr_24197_24225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (4))){
var inst_24161 = (state_24193[(9)]);
var inst_24161__$1 = (state_24193[(2)]);
var inst_24162 = (inst_24161__$1 == null);
var inst_24163 = cljs.core.not.call(null,inst_24162);
var state_24193__$1 = (function (){var statearr_24198 = state_24193;
(statearr_24198[(9)] = inst_24161__$1);

return statearr_24198;
})();
if(inst_24163){
var statearr_24199_24226 = state_24193__$1;
(statearr_24199_24226[(1)] = (5));

} else {
var statearr_24200_24227 = state_24193__$1;
(statearr_24200_24227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (15))){
var inst_24183 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24201_24228 = state_24193__$1;
(statearr_24201_24228[(2)] = inst_24183);

(statearr_24201_24228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (13))){
var state_24193__$1 = state_24193;
var statearr_24202_24229 = state_24193__$1;
(statearr_24202_24229[(2)] = null);

(statearr_24202_24229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (6))){
var inst_24158 = (state_24193[(8)]);
var inst_24179 = (inst_24158 > (0));
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24179)){
var statearr_24203_24230 = state_24193__$1;
(statearr_24203_24230[(1)] = (12));

} else {
var statearr_24204_24231 = state_24193__$1;
(statearr_24204_24231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (3))){
var inst_24191 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24193__$1,inst_24191);
} else {
if((state_val_24194 === (12))){
var inst_24157 = (state_24193[(7)]);
var inst_24181 = cljs.core.vec.call(null,inst_24157);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24193__$1,(15),out,inst_24181);
} else {
if((state_val_24194 === (2))){
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(4),ch);
} else {
if((state_val_24194 === (11))){
var inst_24173 = (state_24193[(2)]);
var inst_24174 = (new Array(n));
var inst_24157 = inst_24174;
var inst_24158 = (0);
var state_24193__$1 = (function (){var statearr_24205 = state_24193;
(statearr_24205[(10)] = inst_24173);

(statearr_24205[(7)] = inst_24157);

(statearr_24205[(8)] = inst_24158);

return statearr_24205;
})();
var statearr_24206_24232 = state_24193__$1;
(statearr_24206_24232[(2)] = null);

(statearr_24206_24232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (9))){
var inst_24157 = (state_24193[(7)]);
var inst_24171 = cljs.core.vec.call(null,inst_24157);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24193__$1,(11),out,inst_24171);
} else {
if((state_val_24194 === (5))){
var inst_24157 = (state_24193[(7)]);
var inst_24161 = (state_24193[(9)]);
var inst_24166 = (state_24193[(11)]);
var inst_24158 = (state_24193[(8)]);
var inst_24165 = (inst_24157[inst_24158] = inst_24161);
var inst_24166__$1 = (inst_24158 + (1));
var inst_24167 = (inst_24166__$1 < n);
var state_24193__$1 = (function (){var statearr_24207 = state_24193;
(statearr_24207[(12)] = inst_24165);

(statearr_24207[(11)] = inst_24166__$1);

return statearr_24207;
})();
if(cljs.core.truth_(inst_24167)){
var statearr_24208_24233 = state_24193__$1;
(statearr_24208_24233[(1)] = (8));

} else {
var statearr_24209_24234 = state_24193__$1;
(statearr_24209_24234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (14))){
var inst_24186 = (state_24193[(2)]);
var inst_24187 = cljs.core.async.close_BANG_.call(null,out);
var state_24193__$1 = (function (){var statearr_24211 = state_24193;
(statearr_24211[(13)] = inst_24186);

return statearr_24211;
})();
var statearr_24212_24235 = state_24193__$1;
(statearr_24212_24235[(2)] = inst_24187);

(statearr_24212_24235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (10))){
var inst_24177 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24213_24236 = state_24193__$1;
(statearr_24213_24236[(2)] = inst_24177);

(statearr_24213_24236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (8))){
var inst_24157 = (state_24193[(7)]);
var inst_24166 = (state_24193[(11)]);
var tmp24210 = inst_24157;
var inst_24157__$1 = tmp24210;
var inst_24158 = inst_24166;
var state_24193__$1 = (function (){var statearr_24214 = state_24193;
(statearr_24214[(7)] = inst_24157__$1);

(statearr_24214[(8)] = inst_24158);

return statearr_24214;
})();
var statearr_24215_24237 = state_24193__$1;
(statearr_24215_24237[(2)] = null);

(statearr_24215_24237[(1)] = (2));


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
});})(c__14807__auto___24223,out))
;
return ((function (switch__14751__auto__,c__14807__auto___24223,out){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_24219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24219[(0)] = state_machine__14752__auto__);

(statearr_24219[(1)] = (1));

return statearr_24219;
});
var state_machine__14752__auto____1 = (function (state_24193){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_24193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e24220){if((e24220 instanceof Object)){
var ex__14755__auto__ = e24220;
var statearr_24221_24238 = state_24193;
(statearr_24221_24238[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24239 = state_24193;
state_24193 = G__24239;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_24193){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_24193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___24223,out))
})();
var state__14809__auto__ = (function (){var statearr_24222 = f__14808__auto__.call(null);
(statearr_24222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___24223);

return statearr_24222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___24223,out))
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
var c__14807__auto___24382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14807__auto___24382,out){
return (function (){
var f__14808__auto__ = (function (){var switch__14751__auto__ = ((function (c__14807__auto___24382,out){
return (function (state_24352){
var state_val_24353 = (state_24352[(1)]);
if((state_val_24353 === (7))){
var inst_24348 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24354_24383 = state_24352__$1;
(statearr_24354_24383[(2)] = inst_24348);

(statearr_24354_24383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (1))){
var inst_24311 = [];
var inst_24312 = inst_24311;
var inst_24313 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24352__$1 = (function (){var statearr_24355 = state_24352;
(statearr_24355[(7)] = inst_24313);

(statearr_24355[(8)] = inst_24312);

return statearr_24355;
})();
var statearr_24356_24384 = state_24352__$1;
(statearr_24356_24384[(2)] = null);

(statearr_24356_24384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (4))){
var inst_24316 = (state_24352[(9)]);
var inst_24316__$1 = (state_24352[(2)]);
var inst_24317 = (inst_24316__$1 == null);
var inst_24318 = cljs.core.not.call(null,inst_24317);
var state_24352__$1 = (function (){var statearr_24357 = state_24352;
(statearr_24357[(9)] = inst_24316__$1);

return statearr_24357;
})();
if(inst_24318){
var statearr_24358_24385 = state_24352__$1;
(statearr_24358_24385[(1)] = (5));

} else {
var statearr_24359_24386 = state_24352__$1;
(statearr_24359_24386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (15))){
var inst_24342 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24360_24387 = state_24352__$1;
(statearr_24360_24387[(2)] = inst_24342);

(statearr_24360_24387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (13))){
var state_24352__$1 = state_24352;
var statearr_24361_24388 = state_24352__$1;
(statearr_24361_24388[(2)] = null);

(statearr_24361_24388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (6))){
var inst_24312 = (state_24352[(8)]);
var inst_24337 = inst_24312.length;
var inst_24338 = (inst_24337 > (0));
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24338)){
var statearr_24362_24389 = state_24352__$1;
(statearr_24362_24389[(1)] = (12));

} else {
var statearr_24363_24390 = state_24352__$1;
(statearr_24363_24390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (3))){
var inst_24350 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24352__$1,inst_24350);
} else {
if((state_val_24353 === (12))){
var inst_24312 = (state_24352[(8)]);
var inst_24340 = cljs.core.vec.call(null,inst_24312);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24352__$1,(15),out,inst_24340);
} else {
if((state_val_24353 === (2))){
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(4),ch);
} else {
if((state_val_24353 === (11))){
var inst_24320 = (state_24352[(10)]);
var inst_24316 = (state_24352[(9)]);
var inst_24330 = (state_24352[(2)]);
var inst_24331 = [];
var inst_24332 = inst_24331.push(inst_24316);
var inst_24312 = inst_24331;
var inst_24313 = inst_24320;
var state_24352__$1 = (function (){var statearr_24364 = state_24352;
(statearr_24364[(7)] = inst_24313);

(statearr_24364[(11)] = inst_24332);

(statearr_24364[(12)] = inst_24330);

(statearr_24364[(8)] = inst_24312);

return statearr_24364;
})();
var statearr_24365_24391 = state_24352__$1;
(statearr_24365_24391[(2)] = null);

(statearr_24365_24391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (9))){
var inst_24312 = (state_24352[(8)]);
var inst_24328 = cljs.core.vec.call(null,inst_24312);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24352__$1,(11),out,inst_24328);
} else {
if((state_val_24353 === (5))){
var inst_24320 = (state_24352[(10)]);
var inst_24313 = (state_24352[(7)]);
var inst_24316 = (state_24352[(9)]);
var inst_24320__$1 = f.call(null,inst_24316);
var inst_24321 = cljs.core._EQ_.call(null,inst_24320__$1,inst_24313);
var inst_24322 = cljs.core.keyword_identical_QMARK_.call(null,inst_24313,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24323 = (inst_24321) || (inst_24322);
var state_24352__$1 = (function (){var statearr_24366 = state_24352;
(statearr_24366[(10)] = inst_24320__$1);

return statearr_24366;
})();
if(cljs.core.truth_(inst_24323)){
var statearr_24367_24392 = state_24352__$1;
(statearr_24367_24392[(1)] = (8));

} else {
var statearr_24368_24393 = state_24352__$1;
(statearr_24368_24393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (14))){
var inst_24345 = (state_24352[(2)]);
var inst_24346 = cljs.core.async.close_BANG_.call(null,out);
var state_24352__$1 = (function (){var statearr_24370 = state_24352;
(statearr_24370[(13)] = inst_24345);

return statearr_24370;
})();
var statearr_24371_24394 = state_24352__$1;
(statearr_24371_24394[(2)] = inst_24346);

(statearr_24371_24394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (10))){
var inst_24335 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24372_24395 = state_24352__$1;
(statearr_24372_24395[(2)] = inst_24335);

(statearr_24372_24395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24353 === (8))){
var inst_24320 = (state_24352[(10)]);
var inst_24312 = (state_24352[(8)]);
var inst_24316 = (state_24352[(9)]);
var inst_24325 = inst_24312.push(inst_24316);
var tmp24369 = inst_24312;
var inst_24312__$1 = tmp24369;
var inst_24313 = inst_24320;
var state_24352__$1 = (function (){var statearr_24373 = state_24352;
(statearr_24373[(14)] = inst_24325);

(statearr_24373[(7)] = inst_24313);

(statearr_24373[(8)] = inst_24312__$1);

return statearr_24373;
})();
var statearr_24374_24396 = state_24352__$1;
(statearr_24374_24396[(2)] = null);

(statearr_24374_24396[(1)] = (2));


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
});})(c__14807__auto___24382,out))
;
return ((function (switch__14751__auto__,c__14807__auto___24382,out){
return (function() {
var state_machine__14752__auto__ = null;
var state_machine__14752__auto____0 = (function (){
var statearr_24378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24378[(0)] = state_machine__14752__auto__);

(statearr_24378[(1)] = (1));

return statearr_24378;
});
var state_machine__14752__auto____1 = (function (state_24352){
while(true){
var ret_value__14753__auto__ = (function (){try{while(true){
var result__14754__auto__ = switch__14751__auto__.call(null,state_24352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14754__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object)){
var ex__14755__auto__ = e24379;
var statearr_24380_24397 = state_24352;
(statearr_24380_24397[(5)] = ex__14755__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24398 = state_24352;
state_24352 = G__24398;
continue;
} else {
return ret_value__14753__auto__;
}
break;
}
});
state_machine__14752__auto__ = function(state_24352){
switch(arguments.length){
case 0:
return state_machine__14752__auto____0.call(this);
case 1:
return state_machine__14752__auto____1.call(this,state_24352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14752__auto____0;
state_machine__14752__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14752__auto____1;
return state_machine__14752__auto__;
})()
;})(switch__14751__auto__,c__14807__auto___24382,out))
})();
var state__14809__auto__ = (function (){var statearr_24381 = f__14808__auto__.call(null);
(statearr_24381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14807__auto___24382);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14809__auto__);
});})(c__14807__auto___24382,out))
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
