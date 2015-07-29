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
if(typeof cljs.core.async.t18574 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18574 = (function (f,fn_handler,meta18575){
this.f = f;
this.fn_handler = fn_handler;
this.meta18575 = meta18575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18574.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18576){
var self__ = this;
var _18576__$1 = this;
return self__.meta18575;
});

cljs.core.async.t18574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18576,meta18575__$1){
var self__ = this;
var _18576__$1 = this;
return (new cljs.core.async.t18574(self__.f,self__.fn_handler,meta18575__$1));
});

cljs.core.async.t18574.cljs$lang$type = true;

cljs.core.async.t18574.cljs$lang$ctorStr = "cljs.core.async/t18574";

cljs.core.async.t18574.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18574");
});

cljs.core.async.__GT_t18574 = (function __GT_t18574(f__$1,fn_handler__$1,meta18575){
return (new cljs.core.async.t18574(f__$1,fn_handler__$1,meta18575));
});

}

return (new cljs.core.async.t18574(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__18578 = buff;
if(G__18578){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__18578.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18578.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18578);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18578);
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
var val_18579 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18579);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18579,ret){
return (function (){
return fn1.call(null,val_18579);
});})(val_18579,ret))
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
var n__4643__auto___18580 = n;
var x_18581 = (0);
while(true){
if((x_18581 < n__4643__auto___18580)){
(a[x_18581] = (0));

var G__18582 = (x_18581 + (1));
x_18581 = G__18582;
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

var G__18583 = (i + (1));
i = G__18583;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18587 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18587 = (function (flag,alt_flag,meta18588){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18588 = meta18588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18587.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18589){
var self__ = this;
var _18589__$1 = this;
return self__.meta18588;
});})(flag))
;

cljs.core.async.t18587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18589,meta18588__$1){
var self__ = this;
var _18589__$1 = this;
return (new cljs.core.async.t18587(self__.flag,self__.alt_flag,meta18588__$1));
});})(flag))
;

cljs.core.async.t18587.cljs$lang$type = true;

cljs.core.async.t18587.cljs$lang$ctorStr = "cljs.core.async/t18587";

cljs.core.async.t18587.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18587");
});})(flag))
;

cljs.core.async.__GT_t18587 = ((function (flag){
return (function __GT_t18587(flag__$1,alt_flag__$1,meta18588){
return (new cljs.core.async.t18587(flag__$1,alt_flag__$1,meta18588));
});})(flag))
;

}

return (new cljs.core.async.t18587(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18593 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18593 = (function (cb,flag,alt_handler,meta18594){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18594 = meta18594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18593.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18595){
var self__ = this;
var _18595__$1 = this;
return self__.meta18594;
});

cljs.core.async.t18593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18595,meta18594__$1){
var self__ = this;
var _18595__$1 = this;
return (new cljs.core.async.t18593(self__.cb,self__.flag,self__.alt_handler,meta18594__$1));
});

cljs.core.async.t18593.cljs$lang$type = true;

cljs.core.async.t18593.cljs$lang$ctorStr = "cljs.core.async/t18593";

cljs.core.async.t18593.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18593");
});

cljs.core.async.__GT_t18593 = (function __GT_t18593(cb__$1,flag__$1,alt_handler__$1,meta18594){
return (new cljs.core.async.t18593(cb__$1,flag__$1,alt_handler__$1,meta18594));
});

}

return (new cljs.core.async.t18593(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__18596_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18596_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18597_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18597_SHARP_,port], null));
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
var G__18598 = (i + (1));
i = G__18598;
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
var alts_BANG___delegate = function (ports,p__18599){
var map__18601 = p__18599;
var map__18601__$1 = ((cljs.core.seq_QMARK_.call(null,map__18601))?cljs.core.apply.call(null,cljs.core.hash_map,map__18601):map__18601);
var opts = map__18601__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18599 = null;
if (arguments.length > 1) {
  p__18599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__18599);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18602){
var ports = cljs.core.first(arglist__18602);
var p__18599 = cljs.core.rest(arglist__18602);
return alts_BANG___delegate(ports,p__18599);
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
var c__5962__auto___18697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___18697){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___18697){
return (function (state_18673){
var state_val_18674 = (state_18673[(1)]);
if((state_val_18674 === (7))){
var inst_18669 = (state_18673[(2)]);
var state_18673__$1 = state_18673;
var statearr_18675_18698 = state_18673__$1;
(statearr_18675_18698[(2)] = inst_18669);

(statearr_18675_18698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (1))){
var state_18673__$1 = state_18673;
var statearr_18676_18699 = state_18673__$1;
(statearr_18676_18699[(2)] = null);

(statearr_18676_18699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (4))){
var inst_18652 = (state_18673[(7)]);
var inst_18652__$1 = (state_18673[(2)]);
var inst_18653 = (inst_18652__$1 == null);
var state_18673__$1 = (function (){var statearr_18677 = state_18673;
(statearr_18677[(7)] = inst_18652__$1);

return statearr_18677;
})();
if(cljs.core.truth_(inst_18653)){
var statearr_18678_18700 = state_18673__$1;
(statearr_18678_18700[(1)] = (5));

} else {
var statearr_18679_18701 = state_18673__$1;
(statearr_18679_18701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (13))){
var state_18673__$1 = state_18673;
var statearr_18680_18702 = state_18673__$1;
(statearr_18680_18702[(2)] = null);

(statearr_18680_18702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (6))){
var inst_18652 = (state_18673[(7)]);
var state_18673__$1 = state_18673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18673__$1,(11),to,inst_18652);
} else {
if((state_val_18674 === (3))){
var inst_18671 = (state_18673[(2)]);
var state_18673__$1 = state_18673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18673__$1,inst_18671);
} else {
if((state_val_18674 === (12))){
var state_18673__$1 = state_18673;
var statearr_18681_18703 = state_18673__$1;
(statearr_18681_18703[(2)] = null);

(statearr_18681_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (2))){
var state_18673__$1 = state_18673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18673__$1,(4),from);
} else {
if((state_val_18674 === (11))){
var inst_18662 = (state_18673[(2)]);
var state_18673__$1 = state_18673;
if(cljs.core.truth_(inst_18662)){
var statearr_18682_18704 = state_18673__$1;
(statearr_18682_18704[(1)] = (12));

} else {
var statearr_18683_18705 = state_18673__$1;
(statearr_18683_18705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (9))){
var state_18673__$1 = state_18673;
var statearr_18684_18706 = state_18673__$1;
(statearr_18684_18706[(2)] = null);

(statearr_18684_18706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (5))){
var state_18673__$1 = state_18673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18685_18707 = state_18673__$1;
(statearr_18685_18707[(1)] = (8));

} else {
var statearr_18686_18708 = state_18673__$1;
(statearr_18686_18708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (14))){
var inst_18667 = (state_18673[(2)]);
var state_18673__$1 = state_18673;
var statearr_18687_18709 = state_18673__$1;
(statearr_18687_18709[(2)] = inst_18667);

(statearr_18687_18709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (10))){
var inst_18659 = (state_18673[(2)]);
var state_18673__$1 = state_18673;
var statearr_18688_18710 = state_18673__$1;
(statearr_18688_18710[(2)] = inst_18659);

(statearr_18688_18710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18674 === (8))){
var inst_18656 = cljs.core.async.close_BANG_.call(null,to);
var state_18673__$1 = state_18673;
var statearr_18689_18711 = state_18673__$1;
(statearr_18689_18711[(2)] = inst_18656);

(statearr_18689_18711[(1)] = (10));


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
});})(c__5962__auto___18697))
;
return ((function (switch__5947__auto__,c__5962__auto___18697){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18693 = [null,null,null,null,null,null,null,null];
(statearr_18693[(0)] = state_machine__5948__auto__);

(statearr_18693[(1)] = (1));

return statearr_18693;
});
var state_machine__5948__auto____1 = (function (state_18673){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18694){if((e18694 instanceof Object)){
var ex__5951__auto__ = e18694;
var statearr_18695_18712 = state_18673;
(statearr_18695_18712[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18713 = state_18673;
state_18673 = G__18713;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18673){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___18697))
})();
var state__5964__auto__ = (function (){var statearr_18696 = f__5963__auto__.call(null);
(statearr_18696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___18697);

return statearr_18696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___18697))
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
return (function (p__18897){
var vec__18898 = p__18897;
var v = cljs.core.nth.call(null,vec__18898,(0),null);
var p = cljs.core.nth.call(null,vec__18898,(1),null);
var job = vec__18898;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5962__auto___19080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19080,res,vec__18898,v,p,job,jobs,results){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19080,res,vec__18898,v,p,job,jobs,results){
return (function (state_18903){
var state_val_18904 = (state_18903[(1)]);
if((state_val_18904 === (2))){
var inst_18900 = (state_18903[(2)]);
var inst_18901 = cljs.core.async.close_BANG_.call(null,res);
var state_18903__$1 = (function (){var statearr_18905 = state_18903;
(statearr_18905[(7)] = inst_18900);

return statearr_18905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18903__$1,inst_18901);
} else {
if((state_val_18904 === (1))){
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18903__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5962__auto___19080,res,vec__18898,v,p,job,jobs,results))
;
return ((function (switch__5947__auto__,c__5962__auto___19080,res,vec__18898,v,p,job,jobs,results){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18909 = [null,null,null,null,null,null,null,null];
(statearr_18909[(0)] = state_machine__5948__auto__);

(statearr_18909[(1)] = (1));

return statearr_18909;
});
var state_machine__5948__auto____1 = (function (state_18903){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18910){if((e18910 instanceof Object)){
var ex__5951__auto__ = e18910;
var statearr_18911_19081 = state_18903;
(statearr_18911_19081[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19082 = state_18903;
state_18903 = G__19082;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18903){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19080,res,vec__18898,v,p,job,jobs,results))
})();
var state__5964__auto__ = (function (){var statearr_18912 = f__5963__auto__.call(null);
(statearr_18912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19080);

return statearr_18912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19080,res,vec__18898,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18913){
var vec__18914 = p__18913;
var v = cljs.core.nth.call(null,vec__18914,(0),null);
var p = cljs.core.nth.call(null,vec__18914,(1),null);
var job = vec__18914;
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
var n__4643__auto___19083 = n;
var __19084 = (0);
while(true){
if((__19084 < n__4643__auto___19083)){
var G__18915_19085 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18915_19085) {
case "async":
var c__5962__auto___19087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19084,c__5962__auto___19087,G__18915_19085,n__4643__auto___19083,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (__19084,c__5962__auto___19087,G__18915_19085,n__4643__auto___19083,jobs,results,process,async){
return (function (state_18928){
var state_val_18929 = (state_18928[(1)]);
if((state_val_18929 === (7))){
var inst_18924 = (state_18928[(2)]);
var state_18928__$1 = state_18928;
var statearr_18930_19088 = state_18928__$1;
(statearr_18930_19088[(2)] = inst_18924);

(statearr_18930_19088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18929 === (6))){
var state_18928__$1 = state_18928;
var statearr_18931_19089 = state_18928__$1;
(statearr_18931_19089[(2)] = null);

(statearr_18931_19089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18929 === (5))){
var state_18928__$1 = state_18928;
var statearr_18932_19090 = state_18928__$1;
(statearr_18932_19090[(2)] = null);

(statearr_18932_19090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18929 === (4))){
var inst_18918 = (state_18928[(2)]);
var inst_18919 = async.call(null,inst_18918);
var state_18928__$1 = state_18928;
if(cljs.core.truth_(inst_18919)){
var statearr_18933_19091 = state_18928__$1;
(statearr_18933_19091[(1)] = (5));

} else {
var statearr_18934_19092 = state_18928__$1;
(statearr_18934_19092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18929 === (3))){
var inst_18926 = (state_18928[(2)]);
var state_18928__$1 = state_18928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18928__$1,inst_18926);
} else {
if((state_val_18929 === (2))){
var state_18928__$1 = state_18928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18928__$1,(4),jobs);
} else {
if((state_val_18929 === (1))){
var state_18928__$1 = state_18928;
var statearr_18935_19093 = state_18928__$1;
(statearr_18935_19093[(2)] = null);

(statearr_18935_19093[(1)] = (2));


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
});})(__19084,c__5962__auto___19087,G__18915_19085,n__4643__auto___19083,jobs,results,process,async))
;
return ((function (__19084,switch__5947__auto__,c__5962__auto___19087,G__18915_19085,n__4643__auto___19083,jobs,results,process,async){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18939 = [null,null,null,null,null,null,null];
(statearr_18939[(0)] = state_machine__5948__auto__);

(statearr_18939[(1)] = (1));

return statearr_18939;
});
var state_machine__5948__auto____1 = (function (state_18928){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18940){if((e18940 instanceof Object)){
var ex__5951__auto__ = e18940;
var statearr_18941_19094 = state_18928;
(statearr_18941_19094[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19095 = state_18928;
state_18928 = G__19095;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18928){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(__19084,switch__5947__auto__,c__5962__auto___19087,G__18915_19085,n__4643__auto___19083,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_18942 = f__5963__auto__.call(null);
(statearr_18942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19087);

return statearr_18942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(__19084,c__5962__auto___19087,G__18915_19085,n__4643__auto___19083,jobs,results,process,async))
);


break;
case "compute":
var c__5962__auto___19096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19084,c__5962__auto___19096,G__18915_19085,n__4643__auto___19083,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (__19084,c__5962__auto___19096,G__18915_19085,n__4643__auto___19083,jobs,results,process,async){
return (function (state_18955){
var state_val_18956 = (state_18955[(1)]);
if((state_val_18956 === (7))){
var inst_18951 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18957_19097 = state_18955__$1;
(statearr_18957_19097[(2)] = inst_18951);

(statearr_18957_19097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (6))){
var state_18955__$1 = state_18955;
var statearr_18958_19098 = state_18955__$1;
(statearr_18958_19098[(2)] = null);

(statearr_18958_19098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (5))){
var state_18955__$1 = state_18955;
var statearr_18959_19099 = state_18955__$1;
(statearr_18959_19099[(2)] = null);

(statearr_18959_19099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (4))){
var inst_18945 = (state_18955[(2)]);
var inst_18946 = process.call(null,inst_18945);
var state_18955__$1 = state_18955;
if(cljs.core.truth_(inst_18946)){
var statearr_18960_19100 = state_18955__$1;
(statearr_18960_19100[(1)] = (5));

} else {
var statearr_18961_19101 = state_18955__$1;
(statearr_18961_19101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (3))){
var inst_18953 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18955__$1,inst_18953);
} else {
if((state_val_18956 === (2))){
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18955__$1,(4),jobs);
} else {
if((state_val_18956 === (1))){
var state_18955__$1 = state_18955;
var statearr_18962_19102 = state_18955__$1;
(statearr_18962_19102[(2)] = null);

(statearr_18962_19102[(1)] = (2));


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
});})(__19084,c__5962__auto___19096,G__18915_19085,n__4643__auto___19083,jobs,results,process,async))
;
return ((function (__19084,switch__5947__auto__,c__5962__auto___19096,G__18915_19085,n__4643__auto___19083,jobs,results,process,async){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18966 = [null,null,null,null,null,null,null];
(statearr_18966[(0)] = state_machine__5948__auto__);

(statearr_18966[(1)] = (1));

return statearr_18966;
});
var state_machine__5948__auto____1 = (function (state_18955){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18967){if((e18967 instanceof Object)){
var ex__5951__auto__ = e18967;
var statearr_18968_19103 = state_18955;
(statearr_18968_19103[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19104 = state_18955;
state_18955 = G__19104;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18955){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(__19084,switch__5947__auto__,c__5962__auto___19096,G__18915_19085,n__4643__auto___19083,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_18969 = f__5963__auto__.call(null);
(statearr_18969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19096);

return statearr_18969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(__19084,c__5962__auto___19096,G__18915_19085,n__4643__auto___19083,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19105 = (__19084 + (1));
__19084 = G__19105;
continue;
} else {
}
break;
}

var c__5962__auto___19106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19106,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19106,jobs,results,process,async){
return (function (state_18991){
var state_val_18992 = (state_18991[(1)]);
if((state_val_18992 === (9))){
var inst_18984 = (state_18991[(2)]);
var state_18991__$1 = (function (){var statearr_18993 = state_18991;
(statearr_18993[(7)] = inst_18984);

return statearr_18993;
})();
var statearr_18994_19107 = state_18991__$1;
(statearr_18994_19107[(2)] = null);

(statearr_18994_19107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (8))){
var inst_18977 = (state_18991[(8)]);
var inst_18982 = (state_18991[(2)]);
var state_18991__$1 = (function (){var statearr_18995 = state_18991;
(statearr_18995[(9)] = inst_18982);

return statearr_18995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18991__$1,(9),results,inst_18977);
} else {
if((state_val_18992 === (7))){
var inst_18987 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_18996_19108 = state_18991__$1;
(statearr_18996_19108[(2)] = inst_18987);

(statearr_18996_19108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (6))){
var inst_18972 = (state_18991[(10)]);
var inst_18977 = (state_18991[(8)]);
var inst_18977__$1 = cljs.core.async.chan.call(null,(1));
var inst_18978 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18979 = [inst_18972,inst_18977__$1];
var inst_18980 = (new cljs.core.PersistentVector(null,2,(5),inst_18978,inst_18979,null));
var state_18991__$1 = (function (){var statearr_18997 = state_18991;
(statearr_18997[(8)] = inst_18977__$1);

return statearr_18997;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18991__$1,(8),jobs,inst_18980);
} else {
if((state_val_18992 === (5))){
var inst_18975 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18991__$1 = state_18991;
var statearr_18998_19109 = state_18991__$1;
(statearr_18998_19109[(2)] = inst_18975);

(statearr_18998_19109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (4))){
var inst_18972 = (state_18991[(10)]);
var inst_18972__$1 = (state_18991[(2)]);
var inst_18973 = (inst_18972__$1 == null);
var state_18991__$1 = (function (){var statearr_18999 = state_18991;
(statearr_18999[(10)] = inst_18972__$1);

return statearr_18999;
})();
if(cljs.core.truth_(inst_18973)){
var statearr_19000_19110 = state_18991__$1;
(statearr_19000_19110[(1)] = (5));

} else {
var statearr_19001_19111 = state_18991__$1;
(statearr_19001_19111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (3))){
var inst_18989 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18991__$1,inst_18989);
} else {
if((state_val_18992 === (2))){
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18991__$1,(4),from);
} else {
if((state_val_18992 === (1))){
var state_18991__$1 = state_18991;
var statearr_19002_19112 = state_18991__$1;
(statearr_19002_19112[(2)] = null);

(statearr_19002_19112[(1)] = (2));


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
});})(c__5962__auto___19106,jobs,results,process,async))
;
return ((function (switch__5947__auto__,c__5962__auto___19106,jobs,results,process,async){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19006[(0)] = state_machine__5948__auto__);

(statearr_19006[(1)] = (1));

return statearr_19006;
});
var state_machine__5948__auto____1 = (function (state_18991){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19007){if((e19007 instanceof Object)){
var ex__5951__auto__ = e19007;
var statearr_19008_19113 = state_18991;
(statearr_19008_19113[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19114 = state_18991;
state_18991 = G__19114;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18991){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19106,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_19009 = f__5963__auto__.call(null);
(statearr_19009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19106);

return statearr_19009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19106,jobs,results,process,async))
);


var c__5962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto__,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto__,jobs,results,process,async){
return (function (state_19047){
var state_val_19048 = (state_19047[(1)]);
if((state_val_19048 === (7))){
var inst_19043 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19049_19115 = state_19047__$1;
(statearr_19049_19115[(2)] = inst_19043);

(statearr_19049_19115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (20))){
var state_19047__$1 = state_19047;
var statearr_19050_19116 = state_19047__$1;
(statearr_19050_19116[(2)] = null);

(statearr_19050_19116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (1))){
var state_19047__$1 = state_19047;
var statearr_19051_19117 = state_19047__$1;
(statearr_19051_19117[(2)] = null);

(statearr_19051_19117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (4))){
var inst_19012 = (state_19047[(7)]);
var inst_19012__$1 = (state_19047[(2)]);
var inst_19013 = (inst_19012__$1 == null);
var state_19047__$1 = (function (){var statearr_19052 = state_19047;
(statearr_19052[(7)] = inst_19012__$1);

return statearr_19052;
})();
if(cljs.core.truth_(inst_19013)){
var statearr_19053_19118 = state_19047__$1;
(statearr_19053_19118[(1)] = (5));

} else {
var statearr_19054_19119 = state_19047__$1;
(statearr_19054_19119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (15))){
var inst_19025 = (state_19047[(8)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19047__$1,(18),to,inst_19025);
} else {
if((state_val_19048 === (21))){
var inst_19038 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19055_19120 = state_19047__$1;
(statearr_19055_19120[(2)] = inst_19038);

(statearr_19055_19120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (13))){
var inst_19040 = (state_19047[(2)]);
var state_19047__$1 = (function (){var statearr_19056 = state_19047;
(statearr_19056[(9)] = inst_19040);

return statearr_19056;
})();
var statearr_19057_19121 = state_19047__$1;
(statearr_19057_19121[(2)] = null);

(statearr_19057_19121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (6))){
var inst_19012 = (state_19047[(7)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,(11),inst_19012);
} else {
if((state_val_19048 === (17))){
var inst_19033 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
if(cljs.core.truth_(inst_19033)){
var statearr_19058_19122 = state_19047__$1;
(statearr_19058_19122[(1)] = (19));

} else {
var statearr_19059_19123 = state_19047__$1;
(statearr_19059_19123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (3))){
var inst_19045 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19047__$1,inst_19045);
} else {
if((state_val_19048 === (12))){
var inst_19022 = (state_19047[(10)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,(14),inst_19022);
} else {
if((state_val_19048 === (2))){
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,(4),results);
} else {
if((state_val_19048 === (19))){
var state_19047__$1 = state_19047;
var statearr_19060_19124 = state_19047__$1;
(statearr_19060_19124[(2)] = null);

(statearr_19060_19124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (11))){
var inst_19022 = (state_19047[(2)]);
var state_19047__$1 = (function (){var statearr_19061 = state_19047;
(statearr_19061[(10)] = inst_19022);

return statearr_19061;
})();
var statearr_19062_19125 = state_19047__$1;
(statearr_19062_19125[(2)] = null);

(statearr_19062_19125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (9))){
var state_19047__$1 = state_19047;
var statearr_19063_19126 = state_19047__$1;
(statearr_19063_19126[(2)] = null);

(statearr_19063_19126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (5))){
var state_19047__$1 = state_19047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19064_19127 = state_19047__$1;
(statearr_19064_19127[(1)] = (8));

} else {
var statearr_19065_19128 = state_19047__$1;
(statearr_19065_19128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (14))){
var inst_19027 = (state_19047[(11)]);
var inst_19025 = (state_19047[(8)]);
var inst_19025__$1 = (state_19047[(2)]);
var inst_19026 = (inst_19025__$1 == null);
var inst_19027__$1 = cljs.core.not.call(null,inst_19026);
var state_19047__$1 = (function (){var statearr_19066 = state_19047;
(statearr_19066[(11)] = inst_19027__$1);

(statearr_19066[(8)] = inst_19025__$1);

return statearr_19066;
})();
if(inst_19027__$1){
var statearr_19067_19129 = state_19047__$1;
(statearr_19067_19129[(1)] = (15));

} else {
var statearr_19068_19130 = state_19047__$1;
(statearr_19068_19130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (16))){
var inst_19027 = (state_19047[(11)]);
var state_19047__$1 = state_19047;
var statearr_19069_19131 = state_19047__$1;
(statearr_19069_19131[(2)] = inst_19027);

(statearr_19069_19131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (10))){
var inst_19019 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19070_19132 = state_19047__$1;
(statearr_19070_19132[(2)] = inst_19019);

(statearr_19070_19132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (18))){
var inst_19030 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19071_19133 = state_19047__$1;
(statearr_19071_19133[(2)] = inst_19030);

(statearr_19071_19133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (8))){
var inst_19016 = cljs.core.async.close_BANG_.call(null,to);
var state_19047__$1 = state_19047;
var statearr_19072_19134 = state_19047__$1;
(statearr_19072_19134[(2)] = inst_19016);

(statearr_19072_19134[(1)] = (10));


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
});})(c__5962__auto__,jobs,results,process,async))
;
return ((function (switch__5947__auto__,c__5962__auto__,jobs,results,process,async){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19076 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19076[(0)] = state_machine__5948__auto__);

(statearr_19076[(1)] = (1));

return statearr_19076;
});
var state_machine__5948__auto____1 = (function (state_19047){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19077){if((e19077 instanceof Object)){
var ex__5951__auto__ = e19077;
var statearr_19078_19135 = state_19047;
(statearr_19078_19135[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19136 = state_19047;
state_19047 = G__19136;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19047){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_19079 = f__5963__auto__.call(null);
(statearr_19079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_19079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto__,jobs,results,process,async))
);

return c__5962__auto__;
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
var c__5962__auto___19237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19237,tc,fc){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19237,tc,fc){
return (function (state_19212){
var state_val_19213 = (state_19212[(1)]);
if((state_val_19213 === (7))){
var inst_19208 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19214_19238 = state_19212__$1;
(statearr_19214_19238[(2)] = inst_19208);

(statearr_19214_19238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (1))){
var state_19212__$1 = state_19212;
var statearr_19215_19239 = state_19212__$1;
(statearr_19215_19239[(2)] = null);

(statearr_19215_19239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (4))){
var inst_19189 = (state_19212[(7)]);
var inst_19189__$1 = (state_19212[(2)]);
var inst_19190 = (inst_19189__$1 == null);
var state_19212__$1 = (function (){var statearr_19216 = state_19212;
(statearr_19216[(7)] = inst_19189__$1);

return statearr_19216;
})();
if(cljs.core.truth_(inst_19190)){
var statearr_19217_19240 = state_19212__$1;
(statearr_19217_19240[(1)] = (5));

} else {
var statearr_19218_19241 = state_19212__$1;
(statearr_19218_19241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (13))){
var state_19212__$1 = state_19212;
var statearr_19219_19242 = state_19212__$1;
(statearr_19219_19242[(2)] = null);

(statearr_19219_19242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (6))){
var inst_19189 = (state_19212[(7)]);
var inst_19195 = p.call(null,inst_19189);
var state_19212__$1 = state_19212;
if(cljs.core.truth_(inst_19195)){
var statearr_19220_19243 = state_19212__$1;
(statearr_19220_19243[(1)] = (9));

} else {
var statearr_19221_19244 = state_19212__$1;
(statearr_19221_19244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (3))){
var inst_19210 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19212__$1,inst_19210);
} else {
if((state_val_19213 === (12))){
var state_19212__$1 = state_19212;
var statearr_19222_19245 = state_19212__$1;
(statearr_19222_19245[(2)] = null);

(statearr_19222_19245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (2))){
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19212__$1,(4),ch);
} else {
if((state_val_19213 === (11))){
var inst_19189 = (state_19212[(7)]);
var inst_19199 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19212__$1,(8),inst_19199,inst_19189);
} else {
if((state_val_19213 === (9))){
var state_19212__$1 = state_19212;
var statearr_19223_19246 = state_19212__$1;
(statearr_19223_19246[(2)] = tc);

(statearr_19223_19246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (5))){
var inst_19192 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19193 = cljs.core.async.close_BANG_.call(null,fc);
var state_19212__$1 = (function (){var statearr_19224 = state_19212;
(statearr_19224[(8)] = inst_19192);

return statearr_19224;
})();
var statearr_19225_19247 = state_19212__$1;
(statearr_19225_19247[(2)] = inst_19193);

(statearr_19225_19247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (14))){
var inst_19206 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19226_19248 = state_19212__$1;
(statearr_19226_19248[(2)] = inst_19206);

(statearr_19226_19248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (10))){
var state_19212__$1 = state_19212;
var statearr_19227_19249 = state_19212__$1;
(statearr_19227_19249[(2)] = fc);

(statearr_19227_19249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (8))){
var inst_19201 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
if(cljs.core.truth_(inst_19201)){
var statearr_19228_19250 = state_19212__$1;
(statearr_19228_19250[(1)] = (12));

} else {
var statearr_19229_19251 = state_19212__$1;
(statearr_19229_19251[(1)] = (13));

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
});})(c__5962__auto___19237,tc,fc))
;
return ((function (switch__5947__auto__,c__5962__auto___19237,tc,fc){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19233 = [null,null,null,null,null,null,null,null,null];
(statearr_19233[(0)] = state_machine__5948__auto__);

(statearr_19233[(1)] = (1));

return statearr_19233;
});
var state_machine__5948__auto____1 = (function (state_19212){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19234){if((e19234 instanceof Object)){
var ex__5951__auto__ = e19234;
var statearr_19235_19252 = state_19212;
(statearr_19235_19252[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19253 = state_19212;
state_19212 = G__19253;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19212){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19237,tc,fc))
})();
var state__5964__auto__ = (function (){var statearr_19236 = f__5963__auto__.call(null);
(statearr_19236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19237);

return statearr_19236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19237,tc,fc))
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
var c__5962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto__){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto__){
return (function (state_19300){
var state_val_19301 = (state_19300[(1)]);
if((state_val_19301 === (7))){
var inst_19296 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19302_19318 = state_19300__$1;
(statearr_19302_19318[(2)] = inst_19296);

(statearr_19302_19318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (6))){
var inst_19289 = (state_19300[(7)]);
var inst_19286 = (state_19300[(8)]);
var inst_19293 = f.call(null,inst_19286,inst_19289);
var inst_19286__$1 = inst_19293;
var state_19300__$1 = (function (){var statearr_19303 = state_19300;
(statearr_19303[(8)] = inst_19286__$1);

return statearr_19303;
})();
var statearr_19304_19319 = state_19300__$1;
(statearr_19304_19319[(2)] = null);

(statearr_19304_19319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (5))){
var inst_19286 = (state_19300[(8)]);
var state_19300__$1 = state_19300;
var statearr_19305_19320 = state_19300__$1;
(statearr_19305_19320[(2)] = inst_19286);

(statearr_19305_19320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (4))){
var inst_19289 = (state_19300[(7)]);
var inst_19289__$1 = (state_19300[(2)]);
var inst_19290 = (inst_19289__$1 == null);
var state_19300__$1 = (function (){var statearr_19306 = state_19300;
(statearr_19306[(7)] = inst_19289__$1);

return statearr_19306;
})();
if(cljs.core.truth_(inst_19290)){
var statearr_19307_19321 = state_19300__$1;
(statearr_19307_19321[(1)] = (5));

} else {
var statearr_19308_19322 = state_19300__$1;
(statearr_19308_19322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (3))){
var inst_19298 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19300__$1,inst_19298);
} else {
if((state_val_19301 === (2))){
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19300__$1,(4),ch);
} else {
if((state_val_19301 === (1))){
var inst_19286 = init;
var state_19300__$1 = (function (){var statearr_19309 = state_19300;
(statearr_19309[(8)] = inst_19286);

return statearr_19309;
})();
var statearr_19310_19323 = state_19300__$1;
(statearr_19310_19323[(2)] = null);

(statearr_19310_19323[(1)] = (2));


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
});})(c__5962__auto__))
;
return ((function (switch__5947__auto__,c__5962__auto__){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19314 = [null,null,null,null,null,null,null,null,null];
(statearr_19314[(0)] = state_machine__5948__auto__);

(statearr_19314[(1)] = (1));

return statearr_19314;
});
var state_machine__5948__auto____1 = (function (state_19300){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19315){if((e19315 instanceof Object)){
var ex__5951__auto__ = e19315;
var statearr_19316_19324 = state_19300;
(statearr_19316_19324[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19325 = state_19300;
state_19300 = G__19325;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19300){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__))
})();
var state__5964__auto__ = (function (){var statearr_19317 = f__5963__auto__.call(null);
(statearr_19317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_19317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto__))
);

return c__5962__auto__;
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
var c__5962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto__){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto__){
return (function (state_19399){
var state_val_19400 = (state_19399[(1)]);
if((state_val_19400 === (7))){
var inst_19381 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
var statearr_19401_19424 = state_19399__$1;
(statearr_19401_19424[(2)] = inst_19381);

(statearr_19401_19424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (1))){
var inst_19375 = cljs.core.seq.call(null,coll);
var inst_19376 = inst_19375;
var state_19399__$1 = (function (){var statearr_19402 = state_19399;
(statearr_19402[(7)] = inst_19376);

return statearr_19402;
})();
var statearr_19403_19425 = state_19399__$1;
(statearr_19403_19425[(2)] = null);

(statearr_19403_19425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (4))){
var inst_19376 = (state_19399[(7)]);
var inst_19379 = cljs.core.first.call(null,inst_19376);
var state_19399__$1 = state_19399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19399__$1,(7),ch,inst_19379);
} else {
if((state_val_19400 === (13))){
var inst_19393 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
var statearr_19404_19426 = state_19399__$1;
(statearr_19404_19426[(2)] = inst_19393);

(statearr_19404_19426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (6))){
var inst_19384 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
if(cljs.core.truth_(inst_19384)){
var statearr_19405_19427 = state_19399__$1;
(statearr_19405_19427[(1)] = (8));

} else {
var statearr_19406_19428 = state_19399__$1;
(statearr_19406_19428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (3))){
var inst_19397 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19399__$1,inst_19397);
} else {
if((state_val_19400 === (12))){
var state_19399__$1 = state_19399;
var statearr_19407_19429 = state_19399__$1;
(statearr_19407_19429[(2)] = null);

(statearr_19407_19429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (2))){
var inst_19376 = (state_19399[(7)]);
var state_19399__$1 = state_19399;
if(cljs.core.truth_(inst_19376)){
var statearr_19408_19430 = state_19399__$1;
(statearr_19408_19430[(1)] = (4));

} else {
var statearr_19409_19431 = state_19399__$1;
(statearr_19409_19431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (11))){
var inst_19390 = cljs.core.async.close_BANG_.call(null,ch);
var state_19399__$1 = state_19399;
var statearr_19410_19432 = state_19399__$1;
(statearr_19410_19432[(2)] = inst_19390);

(statearr_19410_19432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (9))){
var state_19399__$1 = state_19399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19411_19433 = state_19399__$1;
(statearr_19411_19433[(1)] = (11));

} else {
var statearr_19412_19434 = state_19399__$1;
(statearr_19412_19434[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (5))){
var inst_19376 = (state_19399[(7)]);
var state_19399__$1 = state_19399;
var statearr_19413_19435 = state_19399__$1;
(statearr_19413_19435[(2)] = inst_19376);

(statearr_19413_19435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (10))){
var inst_19395 = (state_19399[(2)]);
var state_19399__$1 = state_19399;
var statearr_19414_19436 = state_19399__$1;
(statearr_19414_19436[(2)] = inst_19395);

(statearr_19414_19436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19400 === (8))){
var inst_19376 = (state_19399[(7)]);
var inst_19386 = cljs.core.next.call(null,inst_19376);
var inst_19376__$1 = inst_19386;
var state_19399__$1 = (function (){var statearr_19415 = state_19399;
(statearr_19415[(7)] = inst_19376__$1);

return statearr_19415;
})();
var statearr_19416_19437 = state_19399__$1;
(statearr_19416_19437[(2)] = null);

(statearr_19416_19437[(1)] = (2));


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
});})(c__5962__auto__))
;
return ((function (switch__5947__auto__,c__5962__auto__){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19420 = [null,null,null,null,null,null,null,null];
(statearr_19420[(0)] = state_machine__5948__auto__);

(statearr_19420[(1)] = (1));

return statearr_19420;
});
var state_machine__5948__auto____1 = (function (state_19399){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19421){if((e19421 instanceof Object)){
var ex__5951__auto__ = e19421;
var statearr_19422_19438 = state_19399;
(statearr_19422_19438[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19439 = state_19399;
state_19399 = G__19439;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19399){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__))
})();
var state__5964__auto__ = (function (){var statearr_19423 = f__5963__auto__.call(null);
(statearr_19423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_19423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto__))
);

return c__5962__auto__;
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

cljs.core.async.Mux = (function (){var obj19441 = {};
return obj19441;
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


cljs.core.async.Mult = (function (){var obj19443 = {};
return obj19443;
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
if(typeof cljs.core.async.t19665 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19665 = (function (cs,ch,mult,meta19666){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19666 = meta19666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19665.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19665.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19665.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19665.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19665.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19667){
var self__ = this;
var _19667__$1 = this;
return self__.meta19666;
});})(cs))
;

cljs.core.async.t19665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19667,meta19666__$1){
var self__ = this;
var _19667__$1 = this;
return (new cljs.core.async.t19665(self__.cs,self__.ch,self__.mult,meta19666__$1));
});})(cs))
;

cljs.core.async.t19665.cljs$lang$type = true;

cljs.core.async.t19665.cljs$lang$ctorStr = "cljs.core.async/t19665";

cljs.core.async.t19665.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19665");
});})(cs))
;

cljs.core.async.__GT_t19665 = ((function (cs){
return (function __GT_t19665(cs__$1,ch__$1,mult__$1,meta19666){
return (new cljs.core.async.t19665(cs__$1,ch__$1,mult__$1,meta19666));
});})(cs))
;

}

return (new cljs.core.async.t19665(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__5962__auto___19886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19886,cs,m,dchan,dctr,done){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19886,cs,m,dchan,dctr,done){
return (function (state_19798){
var state_val_19799 = (state_19798[(1)]);
if((state_val_19799 === (7))){
var inst_19794 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19800_19887 = state_19798__$1;
(statearr_19800_19887[(2)] = inst_19794);

(statearr_19800_19887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (20))){
var inst_19699 = (state_19798[(7)]);
var inst_19709 = cljs.core.first.call(null,inst_19699);
var inst_19710 = cljs.core.nth.call(null,inst_19709,(0),null);
var inst_19711 = cljs.core.nth.call(null,inst_19709,(1),null);
var state_19798__$1 = (function (){var statearr_19801 = state_19798;
(statearr_19801[(8)] = inst_19710);

return statearr_19801;
})();
if(cljs.core.truth_(inst_19711)){
var statearr_19802_19888 = state_19798__$1;
(statearr_19802_19888[(1)] = (22));

} else {
var statearr_19803_19889 = state_19798__$1;
(statearr_19803_19889[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (27))){
var inst_19739 = (state_19798[(9)]);
var inst_19741 = (state_19798[(10)]);
var inst_19670 = (state_19798[(11)]);
var inst_19746 = (state_19798[(12)]);
var inst_19746__$1 = cljs.core._nth.call(null,inst_19739,inst_19741);
var inst_19747 = cljs.core.async.put_BANG_.call(null,inst_19746__$1,inst_19670,done);
var state_19798__$1 = (function (){var statearr_19804 = state_19798;
(statearr_19804[(12)] = inst_19746__$1);

return statearr_19804;
})();
if(cljs.core.truth_(inst_19747)){
var statearr_19805_19890 = state_19798__$1;
(statearr_19805_19890[(1)] = (30));

} else {
var statearr_19806_19891 = state_19798__$1;
(statearr_19806_19891[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (1))){
var state_19798__$1 = state_19798;
var statearr_19807_19892 = state_19798__$1;
(statearr_19807_19892[(2)] = null);

(statearr_19807_19892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (24))){
var inst_19699 = (state_19798[(7)]);
var inst_19716 = (state_19798[(2)]);
var inst_19717 = cljs.core.next.call(null,inst_19699);
var inst_19679 = inst_19717;
var inst_19680 = null;
var inst_19681 = (0);
var inst_19682 = (0);
var state_19798__$1 = (function (){var statearr_19808 = state_19798;
(statearr_19808[(13)] = inst_19682);

(statearr_19808[(14)] = inst_19679);

(statearr_19808[(15)] = inst_19680);

(statearr_19808[(16)] = inst_19716);

(statearr_19808[(17)] = inst_19681);

return statearr_19808;
})();
var statearr_19809_19893 = state_19798__$1;
(statearr_19809_19893[(2)] = null);

(statearr_19809_19893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (39))){
var state_19798__$1 = state_19798;
var statearr_19813_19894 = state_19798__$1;
(statearr_19813_19894[(2)] = null);

(statearr_19813_19894[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (4))){
var inst_19670 = (state_19798[(11)]);
var inst_19670__$1 = (state_19798[(2)]);
var inst_19671 = (inst_19670__$1 == null);
var state_19798__$1 = (function (){var statearr_19814 = state_19798;
(statearr_19814[(11)] = inst_19670__$1);

return statearr_19814;
})();
if(cljs.core.truth_(inst_19671)){
var statearr_19815_19895 = state_19798__$1;
(statearr_19815_19895[(1)] = (5));

} else {
var statearr_19816_19896 = state_19798__$1;
(statearr_19816_19896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (15))){
var inst_19682 = (state_19798[(13)]);
var inst_19679 = (state_19798[(14)]);
var inst_19680 = (state_19798[(15)]);
var inst_19681 = (state_19798[(17)]);
var inst_19695 = (state_19798[(2)]);
var inst_19696 = (inst_19682 + (1));
var tmp19810 = inst_19679;
var tmp19811 = inst_19680;
var tmp19812 = inst_19681;
var inst_19679__$1 = tmp19810;
var inst_19680__$1 = tmp19811;
var inst_19681__$1 = tmp19812;
var inst_19682__$1 = inst_19696;
var state_19798__$1 = (function (){var statearr_19817 = state_19798;
(statearr_19817[(13)] = inst_19682__$1);

(statearr_19817[(14)] = inst_19679__$1);

(statearr_19817[(15)] = inst_19680__$1);

(statearr_19817[(18)] = inst_19695);

(statearr_19817[(17)] = inst_19681__$1);

return statearr_19817;
})();
var statearr_19818_19897 = state_19798__$1;
(statearr_19818_19897[(2)] = null);

(statearr_19818_19897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (21))){
var inst_19720 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19822_19898 = state_19798__$1;
(statearr_19822_19898[(2)] = inst_19720);

(statearr_19822_19898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (31))){
var inst_19746 = (state_19798[(12)]);
var inst_19750 = done.call(null,null);
var inst_19751 = cljs.core.async.untap_STAR_.call(null,m,inst_19746);
var state_19798__$1 = (function (){var statearr_19823 = state_19798;
(statearr_19823[(19)] = inst_19750);

return statearr_19823;
})();
var statearr_19824_19899 = state_19798__$1;
(statearr_19824_19899[(2)] = inst_19751);

(statearr_19824_19899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (32))){
var inst_19740 = (state_19798[(20)]);
var inst_19739 = (state_19798[(9)]);
var inst_19741 = (state_19798[(10)]);
var inst_19738 = (state_19798[(21)]);
var inst_19753 = (state_19798[(2)]);
var inst_19754 = (inst_19741 + (1));
var tmp19819 = inst_19740;
var tmp19820 = inst_19739;
var tmp19821 = inst_19738;
var inst_19738__$1 = tmp19821;
var inst_19739__$1 = tmp19820;
var inst_19740__$1 = tmp19819;
var inst_19741__$1 = inst_19754;
var state_19798__$1 = (function (){var statearr_19825 = state_19798;
(statearr_19825[(20)] = inst_19740__$1);

(statearr_19825[(9)] = inst_19739__$1);

(statearr_19825[(10)] = inst_19741__$1);

(statearr_19825[(22)] = inst_19753);

(statearr_19825[(21)] = inst_19738__$1);

return statearr_19825;
})();
var statearr_19826_19900 = state_19798__$1;
(statearr_19826_19900[(2)] = null);

(statearr_19826_19900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (40))){
var inst_19766 = (state_19798[(23)]);
var inst_19770 = done.call(null,null);
var inst_19771 = cljs.core.async.untap_STAR_.call(null,m,inst_19766);
var state_19798__$1 = (function (){var statearr_19827 = state_19798;
(statearr_19827[(24)] = inst_19770);

return statearr_19827;
})();
var statearr_19828_19901 = state_19798__$1;
(statearr_19828_19901[(2)] = inst_19771);

(statearr_19828_19901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (33))){
var inst_19757 = (state_19798[(25)]);
var inst_19759 = cljs.core.chunked_seq_QMARK_.call(null,inst_19757);
var state_19798__$1 = state_19798;
if(inst_19759){
var statearr_19829_19902 = state_19798__$1;
(statearr_19829_19902[(1)] = (36));

} else {
var statearr_19830_19903 = state_19798__$1;
(statearr_19830_19903[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (13))){
var inst_19689 = (state_19798[(26)]);
var inst_19692 = cljs.core.async.close_BANG_.call(null,inst_19689);
var state_19798__$1 = state_19798;
var statearr_19831_19904 = state_19798__$1;
(statearr_19831_19904[(2)] = inst_19692);

(statearr_19831_19904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (22))){
var inst_19710 = (state_19798[(8)]);
var inst_19713 = cljs.core.async.close_BANG_.call(null,inst_19710);
var state_19798__$1 = state_19798;
var statearr_19832_19905 = state_19798__$1;
(statearr_19832_19905[(2)] = inst_19713);

(statearr_19832_19905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (36))){
var inst_19757 = (state_19798[(25)]);
var inst_19761 = cljs.core.chunk_first.call(null,inst_19757);
var inst_19762 = cljs.core.chunk_rest.call(null,inst_19757);
var inst_19763 = cljs.core.count.call(null,inst_19761);
var inst_19738 = inst_19762;
var inst_19739 = inst_19761;
var inst_19740 = inst_19763;
var inst_19741 = (0);
var state_19798__$1 = (function (){var statearr_19833 = state_19798;
(statearr_19833[(20)] = inst_19740);

(statearr_19833[(9)] = inst_19739);

(statearr_19833[(10)] = inst_19741);

(statearr_19833[(21)] = inst_19738);

return statearr_19833;
})();
var statearr_19834_19906 = state_19798__$1;
(statearr_19834_19906[(2)] = null);

(statearr_19834_19906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (41))){
var inst_19757 = (state_19798[(25)]);
var inst_19773 = (state_19798[(2)]);
var inst_19774 = cljs.core.next.call(null,inst_19757);
var inst_19738 = inst_19774;
var inst_19739 = null;
var inst_19740 = (0);
var inst_19741 = (0);
var state_19798__$1 = (function (){var statearr_19835 = state_19798;
(statearr_19835[(20)] = inst_19740);

(statearr_19835[(9)] = inst_19739);

(statearr_19835[(10)] = inst_19741);

(statearr_19835[(27)] = inst_19773);

(statearr_19835[(21)] = inst_19738);

return statearr_19835;
})();
var statearr_19836_19907 = state_19798__$1;
(statearr_19836_19907[(2)] = null);

(statearr_19836_19907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (43))){
var state_19798__$1 = state_19798;
var statearr_19837_19908 = state_19798__$1;
(statearr_19837_19908[(2)] = null);

(statearr_19837_19908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (29))){
var inst_19782 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19838_19909 = state_19798__$1;
(statearr_19838_19909[(2)] = inst_19782);

(statearr_19838_19909[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (44))){
var inst_19791 = (state_19798[(2)]);
var state_19798__$1 = (function (){var statearr_19839 = state_19798;
(statearr_19839[(28)] = inst_19791);

return statearr_19839;
})();
var statearr_19840_19910 = state_19798__$1;
(statearr_19840_19910[(2)] = null);

(statearr_19840_19910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (6))){
var inst_19730 = (state_19798[(29)]);
var inst_19729 = cljs.core.deref.call(null,cs);
var inst_19730__$1 = cljs.core.keys.call(null,inst_19729);
var inst_19731 = cljs.core.count.call(null,inst_19730__$1);
var inst_19732 = cljs.core.reset_BANG_.call(null,dctr,inst_19731);
var inst_19737 = cljs.core.seq.call(null,inst_19730__$1);
var inst_19738 = inst_19737;
var inst_19739 = null;
var inst_19740 = (0);
var inst_19741 = (0);
var state_19798__$1 = (function (){var statearr_19841 = state_19798;
(statearr_19841[(20)] = inst_19740);

(statearr_19841[(29)] = inst_19730__$1);

(statearr_19841[(9)] = inst_19739);

(statearr_19841[(10)] = inst_19741);

(statearr_19841[(30)] = inst_19732);

(statearr_19841[(21)] = inst_19738);

return statearr_19841;
})();
var statearr_19842_19911 = state_19798__$1;
(statearr_19842_19911[(2)] = null);

(statearr_19842_19911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (28))){
var inst_19757 = (state_19798[(25)]);
var inst_19738 = (state_19798[(21)]);
var inst_19757__$1 = cljs.core.seq.call(null,inst_19738);
var state_19798__$1 = (function (){var statearr_19843 = state_19798;
(statearr_19843[(25)] = inst_19757__$1);

return statearr_19843;
})();
if(inst_19757__$1){
var statearr_19844_19912 = state_19798__$1;
(statearr_19844_19912[(1)] = (33));

} else {
var statearr_19845_19913 = state_19798__$1;
(statearr_19845_19913[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (25))){
var inst_19740 = (state_19798[(20)]);
var inst_19741 = (state_19798[(10)]);
var inst_19743 = (inst_19741 < inst_19740);
var inst_19744 = inst_19743;
var state_19798__$1 = state_19798;
if(cljs.core.truth_(inst_19744)){
var statearr_19846_19914 = state_19798__$1;
(statearr_19846_19914[(1)] = (27));

} else {
var statearr_19847_19915 = state_19798__$1;
(statearr_19847_19915[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (34))){
var state_19798__$1 = state_19798;
var statearr_19848_19916 = state_19798__$1;
(statearr_19848_19916[(2)] = null);

(statearr_19848_19916[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (17))){
var state_19798__$1 = state_19798;
var statearr_19849_19917 = state_19798__$1;
(statearr_19849_19917[(2)] = null);

(statearr_19849_19917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (3))){
var inst_19796 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19798__$1,inst_19796);
} else {
if((state_val_19799 === (12))){
var inst_19725 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19850_19918 = state_19798__$1;
(statearr_19850_19918[(2)] = inst_19725);

(statearr_19850_19918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (2))){
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19798__$1,(4),ch);
} else {
if((state_val_19799 === (23))){
var state_19798__$1 = state_19798;
var statearr_19851_19919 = state_19798__$1;
(statearr_19851_19919[(2)] = null);

(statearr_19851_19919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (35))){
var inst_19780 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19852_19920 = state_19798__$1;
(statearr_19852_19920[(2)] = inst_19780);

(statearr_19852_19920[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (19))){
var inst_19699 = (state_19798[(7)]);
var inst_19703 = cljs.core.chunk_first.call(null,inst_19699);
var inst_19704 = cljs.core.chunk_rest.call(null,inst_19699);
var inst_19705 = cljs.core.count.call(null,inst_19703);
var inst_19679 = inst_19704;
var inst_19680 = inst_19703;
var inst_19681 = inst_19705;
var inst_19682 = (0);
var state_19798__$1 = (function (){var statearr_19853 = state_19798;
(statearr_19853[(13)] = inst_19682);

(statearr_19853[(14)] = inst_19679);

(statearr_19853[(15)] = inst_19680);

(statearr_19853[(17)] = inst_19681);

return statearr_19853;
})();
var statearr_19854_19921 = state_19798__$1;
(statearr_19854_19921[(2)] = null);

(statearr_19854_19921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (11))){
var inst_19679 = (state_19798[(14)]);
var inst_19699 = (state_19798[(7)]);
var inst_19699__$1 = cljs.core.seq.call(null,inst_19679);
var state_19798__$1 = (function (){var statearr_19855 = state_19798;
(statearr_19855[(7)] = inst_19699__$1);

return statearr_19855;
})();
if(inst_19699__$1){
var statearr_19856_19922 = state_19798__$1;
(statearr_19856_19922[(1)] = (16));

} else {
var statearr_19857_19923 = state_19798__$1;
(statearr_19857_19923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (9))){
var inst_19727 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19858_19924 = state_19798__$1;
(statearr_19858_19924[(2)] = inst_19727);

(statearr_19858_19924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (5))){
var inst_19677 = cljs.core.deref.call(null,cs);
var inst_19678 = cljs.core.seq.call(null,inst_19677);
var inst_19679 = inst_19678;
var inst_19680 = null;
var inst_19681 = (0);
var inst_19682 = (0);
var state_19798__$1 = (function (){var statearr_19859 = state_19798;
(statearr_19859[(13)] = inst_19682);

(statearr_19859[(14)] = inst_19679);

(statearr_19859[(15)] = inst_19680);

(statearr_19859[(17)] = inst_19681);

return statearr_19859;
})();
var statearr_19860_19925 = state_19798__$1;
(statearr_19860_19925[(2)] = null);

(statearr_19860_19925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (14))){
var state_19798__$1 = state_19798;
var statearr_19861_19926 = state_19798__$1;
(statearr_19861_19926[(2)] = null);

(statearr_19861_19926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (45))){
var inst_19788 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19862_19927 = state_19798__$1;
(statearr_19862_19927[(2)] = inst_19788);

(statearr_19862_19927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (26))){
var inst_19730 = (state_19798[(29)]);
var inst_19784 = (state_19798[(2)]);
var inst_19785 = cljs.core.seq.call(null,inst_19730);
var state_19798__$1 = (function (){var statearr_19863 = state_19798;
(statearr_19863[(31)] = inst_19784);

return statearr_19863;
})();
if(inst_19785){
var statearr_19864_19928 = state_19798__$1;
(statearr_19864_19928[(1)] = (42));

} else {
var statearr_19865_19929 = state_19798__$1;
(statearr_19865_19929[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (16))){
var inst_19699 = (state_19798[(7)]);
var inst_19701 = cljs.core.chunked_seq_QMARK_.call(null,inst_19699);
var state_19798__$1 = state_19798;
if(inst_19701){
var statearr_19866_19930 = state_19798__$1;
(statearr_19866_19930[(1)] = (19));

} else {
var statearr_19867_19931 = state_19798__$1;
(statearr_19867_19931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (38))){
var inst_19777 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19868_19932 = state_19798__$1;
(statearr_19868_19932[(2)] = inst_19777);

(statearr_19868_19932[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (30))){
var state_19798__$1 = state_19798;
var statearr_19869_19933 = state_19798__$1;
(statearr_19869_19933[(2)] = null);

(statearr_19869_19933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (10))){
var inst_19682 = (state_19798[(13)]);
var inst_19680 = (state_19798[(15)]);
var inst_19688 = cljs.core._nth.call(null,inst_19680,inst_19682);
var inst_19689 = cljs.core.nth.call(null,inst_19688,(0),null);
var inst_19690 = cljs.core.nth.call(null,inst_19688,(1),null);
var state_19798__$1 = (function (){var statearr_19870 = state_19798;
(statearr_19870[(26)] = inst_19689);

return statearr_19870;
})();
if(cljs.core.truth_(inst_19690)){
var statearr_19871_19934 = state_19798__$1;
(statearr_19871_19934[(1)] = (13));

} else {
var statearr_19872_19935 = state_19798__$1;
(statearr_19872_19935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (18))){
var inst_19723 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19873_19936 = state_19798__$1;
(statearr_19873_19936[(2)] = inst_19723);

(statearr_19873_19936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (42))){
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19798__$1,(45),dchan);
} else {
if((state_val_19799 === (37))){
var inst_19757 = (state_19798[(25)]);
var inst_19766 = (state_19798[(23)]);
var inst_19670 = (state_19798[(11)]);
var inst_19766__$1 = cljs.core.first.call(null,inst_19757);
var inst_19767 = cljs.core.async.put_BANG_.call(null,inst_19766__$1,inst_19670,done);
var state_19798__$1 = (function (){var statearr_19874 = state_19798;
(statearr_19874[(23)] = inst_19766__$1);

return statearr_19874;
})();
if(cljs.core.truth_(inst_19767)){
var statearr_19875_19937 = state_19798__$1;
(statearr_19875_19937[(1)] = (39));

} else {
var statearr_19876_19938 = state_19798__$1;
(statearr_19876_19938[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (8))){
var inst_19682 = (state_19798[(13)]);
var inst_19681 = (state_19798[(17)]);
var inst_19684 = (inst_19682 < inst_19681);
var inst_19685 = inst_19684;
var state_19798__$1 = state_19798;
if(cljs.core.truth_(inst_19685)){
var statearr_19877_19939 = state_19798__$1;
(statearr_19877_19939[(1)] = (10));

} else {
var statearr_19878_19940 = state_19798__$1;
(statearr_19878_19940[(1)] = (11));

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
});})(c__5962__auto___19886,cs,m,dchan,dctr,done))
;
return ((function (switch__5947__auto__,c__5962__auto___19886,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19882[(0)] = state_machine__5948__auto__);

(statearr_19882[(1)] = (1));

return statearr_19882;
});
var state_machine__5948__auto____1 = (function (state_19798){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19883){if((e19883 instanceof Object)){
var ex__5951__auto__ = e19883;
var statearr_19884_19941 = state_19798;
(statearr_19884_19941[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19942 = state_19798;
state_19798 = G__19942;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19798){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19886,cs,m,dchan,dctr,done))
})();
var state__5964__auto__ = (function (){var statearr_19885 = f__5963__auto__.call(null);
(statearr_19885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19886);

return statearr_19885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19886,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj19944 = {};
return obj19944;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19945){
var map__19950 = p__19945;
var map__19950__$1 = ((cljs.core.seq_QMARK_.call(null,map__19950))?cljs.core.apply.call(null,cljs.core.hash_map,map__19950):map__19950);
var opts = map__19950__$1;
var statearr_19951_19954 = state;
(statearr_19951_19954[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19950,map__19950__$1,opts){
return (function (val){
var statearr_19952_19955 = state;
(statearr_19952_19955[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19950,map__19950__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19953_19956 = state;
(statearr_19953_19956[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19945 = null;
if (arguments.length > 3) {
  p__19945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19945);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19957){
var state = cljs.core.first(arglist__19957);
arglist__19957 = cljs.core.next(arglist__19957);
var cont_block = cljs.core.first(arglist__19957);
arglist__19957 = cljs.core.next(arglist__19957);
var ports = cljs.core.first(arglist__19957);
var p__19945 = cljs.core.rest(arglist__19957);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19945);
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
if(typeof cljs.core.async.t20077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20077 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20078){
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
this.meta20078 = meta20078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20077.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20077.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20077.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20077.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20077.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20077.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20079){
var self__ = this;
var _20079__$1 = this;
return self__.meta20078;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20079,meta20078__$1){
var self__ = this;
var _20079__$1 = this;
return (new cljs.core.async.t20077(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20078__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20077.cljs$lang$type = true;

cljs.core.async.t20077.cljs$lang$ctorStr = "cljs.core.async/t20077";

cljs.core.async.t20077.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20077");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20077 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20078){
return (new cljs.core.async.t20077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20078));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20077(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__5962__auto___20196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20149){
var state_val_20150 = (state_20149[(1)]);
if((state_val_20150 === (7))){
var inst_20093 = (state_20149[(7)]);
var inst_20098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20093);
var state_20149__$1 = state_20149;
var statearr_20151_20197 = state_20149__$1;
(statearr_20151_20197[(2)] = inst_20098);

(statearr_20151_20197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (20))){
var inst_20108 = (state_20149[(8)]);
var state_20149__$1 = state_20149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20149__$1,(23),out,inst_20108);
} else {
if((state_val_20150 === (1))){
var inst_20083 = (state_20149[(9)]);
var inst_20083__$1 = calc_state.call(null);
var inst_20084 = cljs.core.seq_QMARK_.call(null,inst_20083__$1);
var state_20149__$1 = (function (){var statearr_20152 = state_20149;
(statearr_20152[(9)] = inst_20083__$1);

return statearr_20152;
})();
if(inst_20084){
var statearr_20153_20198 = state_20149__$1;
(statearr_20153_20198[(1)] = (2));

} else {
var statearr_20154_20199 = state_20149__$1;
(statearr_20154_20199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (24))){
var inst_20101 = (state_20149[(10)]);
var inst_20093 = inst_20101;
var state_20149__$1 = (function (){var statearr_20155 = state_20149;
(statearr_20155[(7)] = inst_20093);

return statearr_20155;
})();
var statearr_20156_20200 = state_20149__$1;
(statearr_20156_20200[(2)] = null);

(statearr_20156_20200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (4))){
var inst_20083 = (state_20149[(9)]);
var inst_20089 = (state_20149[(2)]);
var inst_20090 = cljs.core.get.call(null,inst_20089,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20091 = cljs.core.get.call(null,inst_20089,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20092 = cljs.core.get.call(null,inst_20089,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20093 = inst_20083;
var state_20149__$1 = (function (){var statearr_20157 = state_20149;
(statearr_20157[(11)] = inst_20092);

(statearr_20157[(12)] = inst_20090);

(statearr_20157[(7)] = inst_20093);

(statearr_20157[(13)] = inst_20091);

return statearr_20157;
})();
var statearr_20158_20201 = state_20149__$1;
(statearr_20158_20201[(2)] = null);

(statearr_20158_20201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (15))){
var state_20149__$1 = state_20149;
var statearr_20159_20202 = state_20149__$1;
(statearr_20159_20202[(2)] = null);

(statearr_20159_20202[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (21))){
var inst_20101 = (state_20149[(10)]);
var inst_20093 = inst_20101;
var state_20149__$1 = (function (){var statearr_20160 = state_20149;
(statearr_20160[(7)] = inst_20093);

return statearr_20160;
})();
var statearr_20161_20203 = state_20149__$1;
(statearr_20161_20203[(2)] = null);

(statearr_20161_20203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (13))){
var inst_20145 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20162_20204 = state_20149__$1;
(statearr_20162_20204[(2)] = inst_20145);

(statearr_20162_20204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (22))){
var inst_20143 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20163_20205 = state_20149__$1;
(statearr_20163_20205[(2)] = inst_20143);

(statearr_20163_20205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (6))){
var inst_20147 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20149__$1,inst_20147);
} else {
if((state_val_20150 === (25))){
var state_20149__$1 = state_20149;
var statearr_20164_20206 = state_20149__$1;
(statearr_20164_20206[(2)] = null);

(statearr_20164_20206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (17))){
var inst_20123 = (state_20149[(14)]);
var state_20149__$1 = state_20149;
var statearr_20165_20207 = state_20149__$1;
(statearr_20165_20207[(2)] = inst_20123);

(statearr_20165_20207[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (3))){
var inst_20083 = (state_20149[(9)]);
var state_20149__$1 = state_20149;
var statearr_20166_20208 = state_20149__$1;
(statearr_20166_20208[(2)] = inst_20083);

(statearr_20166_20208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (12))){
var inst_20104 = (state_20149[(15)]);
var inst_20123 = (state_20149[(14)]);
var inst_20109 = (state_20149[(16)]);
var inst_20123__$1 = inst_20104.call(null,inst_20109);
var state_20149__$1 = (function (){var statearr_20167 = state_20149;
(statearr_20167[(14)] = inst_20123__$1);

return statearr_20167;
})();
if(cljs.core.truth_(inst_20123__$1)){
var statearr_20168_20209 = state_20149__$1;
(statearr_20168_20209[(1)] = (17));

} else {
var statearr_20169_20210 = state_20149__$1;
(statearr_20169_20210[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (2))){
var inst_20083 = (state_20149[(9)]);
var inst_20086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20083);
var state_20149__$1 = state_20149;
var statearr_20170_20211 = state_20149__$1;
(statearr_20170_20211[(2)] = inst_20086);

(statearr_20170_20211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (23))){
var inst_20134 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
if(cljs.core.truth_(inst_20134)){
var statearr_20171_20212 = state_20149__$1;
(statearr_20171_20212[(1)] = (24));

} else {
var statearr_20172_20213 = state_20149__$1;
(statearr_20172_20213[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (19))){
var inst_20131 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
if(cljs.core.truth_(inst_20131)){
var statearr_20173_20214 = state_20149__$1;
(statearr_20173_20214[(1)] = (20));

} else {
var statearr_20174_20215 = state_20149__$1;
(statearr_20174_20215[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (11))){
var inst_20108 = (state_20149[(8)]);
var inst_20114 = (inst_20108 == null);
var state_20149__$1 = state_20149;
if(cljs.core.truth_(inst_20114)){
var statearr_20175_20216 = state_20149__$1;
(statearr_20175_20216[(1)] = (14));

} else {
var statearr_20176_20217 = state_20149__$1;
(statearr_20176_20217[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (9))){
var inst_20101 = (state_20149[(10)]);
var inst_20101__$1 = (state_20149[(2)]);
var inst_20102 = cljs.core.get.call(null,inst_20101__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20103 = cljs.core.get.call(null,inst_20101__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20104 = cljs.core.get.call(null,inst_20101__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20149__$1 = (function (){var statearr_20177 = state_20149;
(statearr_20177[(15)] = inst_20104);

(statearr_20177[(17)] = inst_20103);

(statearr_20177[(10)] = inst_20101__$1);

return statearr_20177;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20149__$1,(10),inst_20102);
} else {
if((state_val_20150 === (5))){
var inst_20093 = (state_20149[(7)]);
var inst_20096 = cljs.core.seq_QMARK_.call(null,inst_20093);
var state_20149__$1 = state_20149;
if(inst_20096){
var statearr_20178_20218 = state_20149__$1;
(statearr_20178_20218[(1)] = (7));

} else {
var statearr_20179_20219 = state_20149__$1;
(statearr_20179_20219[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (14))){
var inst_20109 = (state_20149[(16)]);
var inst_20116 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20109);
var state_20149__$1 = state_20149;
var statearr_20180_20220 = state_20149__$1;
(statearr_20180_20220[(2)] = inst_20116);

(statearr_20180_20220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (26))){
var inst_20139 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20181_20221 = state_20149__$1;
(statearr_20181_20221[(2)] = inst_20139);

(statearr_20181_20221[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (16))){
var inst_20119 = (state_20149[(2)]);
var inst_20120 = calc_state.call(null);
var inst_20093 = inst_20120;
var state_20149__$1 = (function (){var statearr_20182 = state_20149;
(statearr_20182[(7)] = inst_20093);

(statearr_20182[(18)] = inst_20119);

return statearr_20182;
})();
var statearr_20183_20222 = state_20149__$1;
(statearr_20183_20222[(2)] = null);

(statearr_20183_20222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (10))){
var inst_20108 = (state_20149[(8)]);
var inst_20109 = (state_20149[(16)]);
var inst_20107 = (state_20149[(2)]);
var inst_20108__$1 = cljs.core.nth.call(null,inst_20107,(0),null);
var inst_20109__$1 = cljs.core.nth.call(null,inst_20107,(1),null);
var inst_20110 = (inst_20108__$1 == null);
var inst_20111 = cljs.core._EQ_.call(null,inst_20109__$1,change);
var inst_20112 = (inst_20110) || (inst_20111);
var state_20149__$1 = (function (){var statearr_20184 = state_20149;
(statearr_20184[(8)] = inst_20108__$1);

(statearr_20184[(16)] = inst_20109__$1);

return statearr_20184;
})();
if(cljs.core.truth_(inst_20112)){
var statearr_20185_20223 = state_20149__$1;
(statearr_20185_20223[(1)] = (11));

} else {
var statearr_20186_20224 = state_20149__$1;
(statearr_20186_20224[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (18))){
var inst_20104 = (state_20149[(15)]);
var inst_20109 = (state_20149[(16)]);
var inst_20103 = (state_20149[(17)]);
var inst_20126 = cljs.core.empty_QMARK_.call(null,inst_20104);
var inst_20127 = inst_20103.call(null,inst_20109);
var inst_20128 = cljs.core.not.call(null,inst_20127);
var inst_20129 = (inst_20126) && (inst_20128);
var state_20149__$1 = state_20149;
var statearr_20187_20225 = state_20149__$1;
(statearr_20187_20225[(2)] = inst_20129);

(statearr_20187_20225[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (8))){
var inst_20093 = (state_20149[(7)]);
var state_20149__$1 = state_20149;
var statearr_20188_20226 = state_20149__$1;
(statearr_20188_20226[(2)] = inst_20093);

(statearr_20188_20226[(1)] = (9));


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
});})(c__5962__auto___20196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5947__auto__,c__5962__auto___20196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20192[(0)] = state_machine__5948__auto__);

(statearr_20192[(1)] = (1));

return statearr_20192;
});
var state_machine__5948__auto____1 = (function (state_20149){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20193){if((e20193 instanceof Object)){
var ex__5951__auto__ = e20193;
var statearr_20194_20227 = state_20149;
(statearr_20194_20227[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20228 = state_20149;
state_20149 = G__20228;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20149){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5964__auto__ = (function (){var statearr_20195 = f__5963__auto__.call(null);
(statearr_20195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20196);

return statearr_20195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20230 = {};
return obj20230;
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
return (function (p1__20231_SHARP_){
if(cljs.core.truth_(p1__20231_SHARP_.call(null,topic))){
return p1__20231_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20231_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20354 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20354 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20355){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20355 = meta20355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20354.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20354.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20354.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20356){
var self__ = this;
var _20356__$1 = this;
return self__.meta20355;
});})(mults,ensure_mult))
;

cljs.core.async.t20354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20356,meta20355__$1){
var self__ = this;
var _20356__$1 = this;
return (new cljs.core.async.t20354(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20355__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20354.cljs$lang$type = true;

cljs.core.async.t20354.cljs$lang$ctorStr = "cljs.core.async/t20354";

cljs.core.async.t20354.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20354");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20354 = ((function (mults,ensure_mult){
return (function __GT_t20354(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20355){
return (new cljs.core.async.t20354(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20355));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20354(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__5962__auto___20476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20476,mults,ensure_mult,p){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20476,mults,ensure_mult,p){
return (function (state_20428){
var state_val_20429 = (state_20428[(1)]);
if((state_val_20429 === (7))){
var inst_20424 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
var statearr_20430_20477 = state_20428__$1;
(statearr_20430_20477[(2)] = inst_20424);

(statearr_20430_20477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (20))){
var state_20428__$1 = state_20428;
var statearr_20431_20478 = state_20428__$1;
(statearr_20431_20478[(2)] = null);

(statearr_20431_20478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (1))){
var state_20428__$1 = state_20428;
var statearr_20432_20479 = state_20428__$1;
(statearr_20432_20479[(2)] = null);

(statearr_20432_20479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (24))){
var inst_20407 = (state_20428[(7)]);
var inst_20416 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20407);
var state_20428__$1 = state_20428;
var statearr_20433_20480 = state_20428__$1;
(statearr_20433_20480[(2)] = inst_20416);

(statearr_20433_20480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (4))){
var inst_20359 = (state_20428[(8)]);
var inst_20359__$1 = (state_20428[(2)]);
var inst_20360 = (inst_20359__$1 == null);
var state_20428__$1 = (function (){var statearr_20434 = state_20428;
(statearr_20434[(8)] = inst_20359__$1);

return statearr_20434;
})();
if(cljs.core.truth_(inst_20360)){
var statearr_20435_20481 = state_20428__$1;
(statearr_20435_20481[(1)] = (5));

} else {
var statearr_20436_20482 = state_20428__$1;
(statearr_20436_20482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (15))){
var inst_20401 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
var statearr_20437_20483 = state_20428__$1;
(statearr_20437_20483[(2)] = inst_20401);

(statearr_20437_20483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (21))){
var inst_20421 = (state_20428[(2)]);
var state_20428__$1 = (function (){var statearr_20438 = state_20428;
(statearr_20438[(9)] = inst_20421);

return statearr_20438;
})();
var statearr_20439_20484 = state_20428__$1;
(statearr_20439_20484[(2)] = null);

(statearr_20439_20484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (13))){
var inst_20383 = (state_20428[(10)]);
var inst_20385 = cljs.core.chunked_seq_QMARK_.call(null,inst_20383);
var state_20428__$1 = state_20428;
if(inst_20385){
var statearr_20440_20485 = state_20428__$1;
(statearr_20440_20485[(1)] = (16));

} else {
var statearr_20441_20486 = state_20428__$1;
(statearr_20441_20486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (22))){
var inst_20413 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
if(cljs.core.truth_(inst_20413)){
var statearr_20442_20487 = state_20428__$1;
(statearr_20442_20487[(1)] = (23));

} else {
var statearr_20443_20488 = state_20428__$1;
(statearr_20443_20488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (6))){
var inst_20409 = (state_20428[(11)]);
var inst_20407 = (state_20428[(7)]);
var inst_20359 = (state_20428[(8)]);
var inst_20407__$1 = topic_fn.call(null,inst_20359);
var inst_20408 = cljs.core.deref.call(null,mults);
var inst_20409__$1 = cljs.core.get.call(null,inst_20408,inst_20407__$1);
var state_20428__$1 = (function (){var statearr_20444 = state_20428;
(statearr_20444[(11)] = inst_20409__$1);

(statearr_20444[(7)] = inst_20407__$1);

return statearr_20444;
})();
if(cljs.core.truth_(inst_20409__$1)){
var statearr_20445_20489 = state_20428__$1;
(statearr_20445_20489[(1)] = (19));

} else {
var statearr_20446_20490 = state_20428__$1;
(statearr_20446_20490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (25))){
var inst_20418 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
var statearr_20447_20491 = state_20428__$1;
(statearr_20447_20491[(2)] = inst_20418);

(statearr_20447_20491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (17))){
var inst_20383 = (state_20428[(10)]);
var inst_20392 = cljs.core.first.call(null,inst_20383);
var inst_20393 = cljs.core.async.muxch_STAR_.call(null,inst_20392);
var inst_20394 = cljs.core.async.close_BANG_.call(null,inst_20393);
var inst_20395 = cljs.core.next.call(null,inst_20383);
var inst_20369 = inst_20395;
var inst_20370 = null;
var inst_20371 = (0);
var inst_20372 = (0);
var state_20428__$1 = (function (){var statearr_20448 = state_20428;
(statearr_20448[(12)] = inst_20394);

(statearr_20448[(13)] = inst_20370);

(statearr_20448[(14)] = inst_20369);

(statearr_20448[(15)] = inst_20371);

(statearr_20448[(16)] = inst_20372);

return statearr_20448;
})();
var statearr_20449_20492 = state_20428__$1;
(statearr_20449_20492[(2)] = null);

(statearr_20449_20492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (3))){
var inst_20426 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20428__$1,inst_20426);
} else {
if((state_val_20429 === (12))){
var inst_20403 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
var statearr_20450_20493 = state_20428__$1;
(statearr_20450_20493[(2)] = inst_20403);

(statearr_20450_20493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (2))){
var state_20428__$1 = state_20428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20428__$1,(4),ch);
} else {
if((state_val_20429 === (23))){
var state_20428__$1 = state_20428;
var statearr_20451_20494 = state_20428__$1;
(statearr_20451_20494[(2)] = null);

(statearr_20451_20494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (19))){
var inst_20409 = (state_20428[(11)]);
var inst_20359 = (state_20428[(8)]);
var inst_20411 = cljs.core.async.muxch_STAR_.call(null,inst_20409);
var state_20428__$1 = state_20428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20428__$1,(22),inst_20411,inst_20359);
} else {
if((state_val_20429 === (11))){
var inst_20369 = (state_20428[(14)]);
var inst_20383 = (state_20428[(10)]);
var inst_20383__$1 = cljs.core.seq.call(null,inst_20369);
var state_20428__$1 = (function (){var statearr_20452 = state_20428;
(statearr_20452[(10)] = inst_20383__$1);

return statearr_20452;
})();
if(inst_20383__$1){
var statearr_20453_20495 = state_20428__$1;
(statearr_20453_20495[(1)] = (13));

} else {
var statearr_20454_20496 = state_20428__$1;
(statearr_20454_20496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (9))){
var inst_20405 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
var statearr_20455_20497 = state_20428__$1;
(statearr_20455_20497[(2)] = inst_20405);

(statearr_20455_20497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (5))){
var inst_20366 = cljs.core.deref.call(null,mults);
var inst_20367 = cljs.core.vals.call(null,inst_20366);
var inst_20368 = cljs.core.seq.call(null,inst_20367);
var inst_20369 = inst_20368;
var inst_20370 = null;
var inst_20371 = (0);
var inst_20372 = (0);
var state_20428__$1 = (function (){var statearr_20456 = state_20428;
(statearr_20456[(13)] = inst_20370);

(statearr_20456[(14)] = inst_20369);

(statearr_20456[(15)] = inst_20371);

(statearr_20456[(16)] = inst_20372);

return statearr_20456;
})();
var statearr_20457_20498 = state_20428__$1;
(statearr_20457_20498[(2)] = null);

(statearr_20457_20498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (14))){
var state_20428__$1 = state_20428;
var statearr_20461_20499 = state_20428__$1;
(statearr_20461_20499[(2)] = null);

(statearr_20461_20499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (16))){
var inst_20383 = (state_20428[(10)]);
var inst_20387 = cljs.core.chunk_first.call(null,inst_20383);
var inst_20388 = cljs.core.chunk_rest.call(null,inst_20383);
var inst_20389 = cljs.core.count.call(null,inst_20387);
var inst_20369 = inst_20388;
var inst_20370 = inst_20387;
var inst_20371 = inst_20389;
var inst_20372 = (0);
var state_20428__$1 = (function (){var statearr_20462 = state_20428;
(statearr_20462[(13)] = inst_20370);

(statearr_20462[(14)] = inst_20369);

(statearr_20462[(15)] = inst_20371);

(statearr_20462[(16)] = inst_20372);

return statearr_20462;
})();
var statearr_20463_20500 = state_20428__$1;
(statearr_20463_20500[(2)] = null);

(statearr_20463_20500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (10))){
var inst_20370 = (state_20428[(13)]);
var inst_20369 = (state_20428[(14)]);
var inst_20371 = (state_20428[(15)]);
var inst_20372 = (state_20428[(16)]);
var inst_20377 = cljs.core._nth.call(null,inst_20370,inst_20372);
var inst_20378 = cljs.core.async.muxch_STAR_.call(null,inst_20377);
var inst_20379 = cljs.core.async.close_BANG_.call(null,inst_20378);
var inst_20380 = (inst_20372 + (1));
var tmp20458 = inst_20370;
var tmp20459 = inst_20369;
var tmp20460 = inst_20371;
var inst_20369__$1 = tmp20459;
var inst_20370__$1 = tmp20458;
var inst_20371__$1 = tmp20460;
var inst_20372__$1 = inst_20380;
var state_20428__$1 = (function (){var statearr_20464 = state_20428;
(statearr_20464[(13)] = inst_20370__$1);

(statearr_20464[(14)] = inst_20369__$1);

(statearr_20464[(17)] = inst_20379);

(statearr_20464[(15)] = inst_20371__$1);

(statearr_20464[(16)] = inst_20372__$1);

return statearr_20464;
})();
var statearr_20465_20501 = state_20428__$1;
(statearr_20465_20501[(2)] = null);

(statearr_20465_20501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (18))){
var inst_20398 = (state_20428[(2)]);
var state_20428__$1 = state_20428;
var statearr_20466_20502 = state_20428__$1;
(statearr_20466_20502[(2)] = inst_20398);

(statearr_20466_20502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20429 === (8))){
var inst_20371 = (state_20428[(15)]);
var inst_20372 = (state_20428[(16)]);
var inst_20374 = (inst_20372 < inst_20371);
var inst_20375 = inst_20374;
var state_20428__$1 = state_20428;
if(cljs.core.truth_(inst_20375)){
var statearr_20467_20503 = state_20428__$1;
(statearr_20467_20503[(1)] = (10));

} else {
var statearr_20468_20504 = state_20428__$1;
(statearr_20468_20504[(1)] = (11));

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
});})(c__5962__auto___20476,mults,ensure_mult,p))
;
return ((function (switch__5947__auto__,c__5962__auto___20476,mults,ensure_mult,p){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20472[(0)] = state_machine__5948__auto__);

(statearr_20472[(1)] = (1));

return statearr_20472;
});
var state_machine__5948__auto____1 = (function (state_20428){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20473){if((e20473 instanceof Object)){
var ex__5951__auto__ = e20473;
var statearr_20474_20505 = state_20428;
(statearr_20474_20505[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20506 = state_20428;
state_20428 = G__20506;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20428){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20476,mults,ensure_mult,p))
})();
var state__5964__auto__ = (function (){var statearr_20475 = f__5963__auto__.call(null);
(statearr_20475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20476);

return statearr_20475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20476,mults,ensure_mult,p))
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
var c__5962__auto___20643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20613){
var state_val_20614 = (state_20613[(1)]);
if((state_val_20614 === (7))){
var state_20613__$1 = state_20613;
var statearr_20615_20644 = state_20613__$1;
(statearr_20615_20644[(2)] = null);

(statearr_20615_20644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (1))){
var state_20613__$1 = state_20613;
var statearr_20616_20645 = state_20613__$1;
(statearr_20616_20645[(2)] = null);

(statearr_20616_20645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (4))){
var inst_20577 = (state_20613[(7)]);
var inst_20579 = (inst_20577 < cnt);
var state_20613__$1 = state_20613;
if(cljs.core.truth_(inst_20579)){
var statearr_20617_20646 = state_20613__$1;
(statearr_20617_20646[(1)] = (6));

} else {
var statearr_20618_20647 = state_20613__$1;
(statearr_20618_20647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (15))){
var inst_20609 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20619_20648 = state_20613__$1;
(statearr_20619_20648[(2)] = inst_20609);

(statearr_20619_20648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (13))){
var inst_20602 = cljs.core.async.close_BANG_.call(null,out);
var state_20613__$1 = state_20613;
var statearr_20620_20649 = state_20613__$1;
(statearr_20620_20649[(2)] = inst_20602);

(statearr_20620_20649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (6))){
var state_20613__$1 = state_20613;
var statearr_20621_20650 = state_20613__$1;
(statearr_20621_20650[(2)] = null);

(statearr_20621_20650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (3))){
var inst_20611 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20613__$1,inst_20611);
} else {
if((state_val_20614 === (12))){
var inst_20599 = (state_20613[(8)]);
var inst_20599__$1 = (state_20613[(2)]);
var inst_20600 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20599__$1);
var state_20613__$1 = (function (){var statearr_20622 = state_20613;
(statearr_20622[(8)] = inst_20599__$1);

return statearr_20622;
})();
if(cljs.core.truth_(inst_20600)){
var statearr_20623_20651 = state_20613__$1;
(statearr_20623_20651[(1)] = (13));

} else {
var statearr_20624_20652 = state_20613__$1;
(statearr_20624_20652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (2))){
var inst_20576 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20577 = (0);
var state_20613__$1 = (function (){var statearr_20625 = state_20613;
(statearr_20625[(7)] = inst_20577);

(statearr_20625[(9)] = inst_20576);

return statearr_20625;
})();
var statearr_20626_20653 = state_20613__$1;
(statearr_20626_20653[(2)] = null);

(statearr_20626_20653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (11))){
var inst_20577 = (state_20613[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20613,(10),Object,null,(9));
var inst_20586 = chs__$1.call(null,inst_20577);
var inst_20587 = done.call(null,inst_20577);
var inst_20588 = cljs.core.async.take_BANG_.call(null,inst_20586,inst_20587);
var state_20613__$1 = state_20613;
var statearr_20627_20654 = state_20613__$1;
(statearr_20627_20654[(2)] = inst_20588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (9))){
var inst_20577 = (state_20613[(7)]);
var inst_20590 = (state_20613[(2)]);
var inst_20591 = (inst_20577 + (1));
var inst_20577__$1 = inst_20591;
var state_20613__$1 = (function (){var statearr_20628 = state_20613;
(statearr_20628[(10)] = inst_20590);

(statearr_20628[(7)] = inst_20577__$1);

return statearr_20628;
})();
var statearr_20629_20655 = state_20613__$1;
(statearr_20629_20655[(2)] = null);

(statearr_20629_20655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (5))){
var inst_20597 = (state_20613[(2)]);
var state_20613__$1 = (function (){var statearr_20630 = state_20613;
(statearr_20630[(11)] = inst_20597);

return statearr_20630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20613__$1,(12),dchan);
} else {
if((state_val_20614 === (14))){
var inst_20599 = (state_20613[(8)]);
var inst_20604 = cljs.core.apply.call(null,f,inst_20599);
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20613__$1,(16),out,inst_20604);
} else {
if((state_val_20614 === (16))){
var inst_20606 = (state_20613[(2)]);
var state_20613__$1 = (function (){var statearr_20631 = state_20613;
(statearr_20631[(12)] = inst_20606);

return statearr_20631;
})();
var statearr_20632_20656 = state_20613__$1;
(statearr_20632_20656[(2)] = null);

(statearr_20632_20656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (10))){
var inst_20581 = (state_20613[(2)]);
var inst_20582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20613__$1 = (function (){var statearr_20633 = state_20613;
(statearr_20633[(13)] = inst_20581);

return statearr_20633;
})();
var statearr_20634_20657 = state_20613__$1;
(statearr_20634_20657[(2)] = inst_20582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (8))){
var inst_20595 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20635_20658 = state_20613__$1;
(statearr_20635_20658[(2)] = inst_20595);

(statearr_20635_20658[(1)] = (5));


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
});})(c__5962__auto___20643,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5947__auto__,c__5962__auto___20643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20639[(0)] = state_machine__5948__auto__);

(statearr_20639[(1)] = (1));

return statearr_20639;
});
var state_machine__5948__auto____1 = (function (state_20613){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20640){if((e20640 instanceof Object)){
var ex__5951__auto__ = e20640;
var statearr_20641_20659 = state_20613;
(statearr_20641_20659[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20660 = state_20613;
state_20613 = G__20660;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20613){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20643,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5964__auto__ = (function (){var statearr_20642 = f__5963__auto__.call(null);
(statearr_20642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20643);

return statearr_20642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20643,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5962__auto___20768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20768,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20768,out){
return (function (state_20744){
var state_val_20745 = (state_20744[(1)]);
if((state_val_20745 === (7))){
var inst_20723 = (state_20744[(7)]);
var inst_20724 = (state_20744[(8)]);
var inst_20723__$1 = (state_20744[(2)]);
var inst_20724__$1 = cljs.core.nth.call(null,inst_20723__$1,(0),null);
var inst_20725 = cljs.core.nth.call(null,inst_20723__$1,(1),null);
var inst_20726 = (inst_20724__$1 == null);
var state_20744__$1 = (function (){var statearr_20746 = state_20744;
(statearr_20746[(7)] = inst_20723__$1);

(statearr_20746[(8)] = inst_20724__$1);

(statearr_20746[(9)] = inst_20725);

return statearr_20746;
})();
if(cljs.core.truth_(inst_20726)){
var statearr_20747_20769 = state_20744__$1;
(statearr_20747_20769[(1)] = (8));

} else {
var statearr_20748_20770 = state_20744__$1;
(statearr_20748_20770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20745 === (1))){
var inst_20715 = cljs.core.vec.call(null,chs);
var inst_20716 = inst_20715;
var state_20744__$1 = (function (){var statearr_20749 = state_20744;
(statearr_20749[(10)] = inst_20716);

return statearr_20749;
})();
var statearr_20750_20771 = state_20744__$1;
(statearr_20750_20771[(2)] = null);

(statearr_20750_20771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20745 === (4))){
var inst_20716 = (state_20744[(10)]);
var state_20744__$1 = state_20744;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20744__$1,(7),inst_20716);
} else {
if((state_val_20745 === (6))){
var inst_20740 = (state_20744[(2)]);
var state_20744__$1 = state_20744;
var statearr_20751_20772 = state_20744__$1;
(statearr_20751_20772[(2)] = inst_20740);

(statearr_20751_20772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20745 === (3))){
var inst_20742 = (state_20744[(2)]);
var state_20744__$1 = state_20744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20744__$1,inst_20742);
} else {
if((state_val_20745 === (2))){
var inst_20716 = (state_20744[(10)]);
var inst_20718 = cljs.core.count.call(null,inst_20716);
var inst_20719 = (inst_20718 > (0));
var state_20744__$1 = state_20744;
if(cljs.core.truth_(inst_20719)){
var statearr_20753_20773 = state_20744__$1;
(statearr_20753_20773[(1)] = (4));

} else {
var statearr_20754_20774 = state_20744__$1;
(statearr_20754_20774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20745 === (11))){
var inst_20716 = (state_20744[(10)]);
var inst_20733 = (state_20744[(2)]);
var tmp20752 = inst_20716;
var inst_20716__$1 = tmp20752;
var state_20744__$1 = (function (){var statearr_20755 = state_20744;
(statearr_20755[(10)] = inst_20716__$1);

(statearr_20755[(11)] = inst_20733);

return statearr_20755;
})();
var statearr_20756_20775 = state_20744__$1;
(statearr_20756_20775[(2)] = null);

(statearr_20756_20775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20745 === (9))){
var inst_20724 = (state_20744[(8)]);
var state_20744__$1 = state_20744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20744__$1,(11),out,inst_20724);
} else {
if((state_val_20745 === (5))){
var inst_20738 = cljs.core.async.close_BANG_.call(null,out);
var state_20744__$1 = state_20744;
var statearr_20757_20776 = state_20744__$1;
(statearr_20757_20776[(2)] = inst_20738);

(statearr_20757_20776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20745 === (10))){
var inst_20736 = (state_20744[(2)]);
var state_20744__$1 = state_20744;
var statearr_20758_20777 = state_20744__$1;
(statearr_20758_20777[(2)] = inst_20736);

(statearr_20758_20777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20745 === (8))){
var inst_20716 = (state_20744[(10)]);
var inst_20723 = (state_20744[(7)]);
var inst_20724 = (state_20744[(8)]);
var inst_20725 = (state_20744[(9)]);
var inst_20728 = (function (){var c = inst_20725;
var v = inst_20724;
var vec__20721 = inst_20723;
var cs = inst_20716;
return ((function (c,v,vec__20721,cs,inst_20716,inst_20723,inst_20724,inst_20725,state_val_20745,c__5962__auto___20768,out){
return (function (p1__20661_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20661_SHARP_);
});
;})(c,v,vec__20721,cs,inst_20716,inst_20723,inst_20724,inst_20725,state_val_20745,c__5962__auto___20768,out))
})();
var inst_20729 = cljs.core.filterv.call(null,inst_20728,inst_20716);
var inst_20716__$1 = inst_20729;
var state_20744__$1 = (function (){var statearr_20759 = state_20744;
(statearr_20759[(10)] = inst_20716__$1);

return statearr_20759;
})();
var statearr_20760_20778 = state_20744__$1;
(statearr_20760_20778[(2)] = null);

(statearr_20760_20778[(1)] = (2));


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
});})(c__5962__auto___20768,out))
;
return ((function (switch__5947__auto__,c__5962__auto___20768,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20764[(0)] = state_machine__5948__auto__);

(statearr_20764[(1)] = (1));

return statearr_20764;
});
var state_machine__5948__auto____1 = (function (state_20744){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20765){if((e20765 instanceof Object)){
var ex__5951__auto__ = e20765;
var statearr_20766_20779 = state_20744;
(statearr_20766_20779[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20780 = state_20744;
state_20744 = G__20780;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20744){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20768,out))
})();
var state__5964__auto__ = (function (){var statearr_20767 = f__5963__auto__.call(null);
(statearr_20767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20768);

return statearr_20767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20768,out))
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
var c__5962__auto___20873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20873,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20873,out){
return (function (state_20850){
var state_val_20851 = (state_20850[(1)]);
if((state_val_20851 === (7))){
var inst_20832 = (state_20850[(7)]);
var inst_20832__$1 = (state_20850[(2)]);
var inst_20833 = (inst_20832__$1 == null);
var inst_20834 = cljs.core.not.call(null,inst_20833);
var state_20850__$1 = (function (){var statearr_20852 = state_20850;
(statearr_20852[(7)] = inst_20832__$1);

return statearr_20852;
})();
if(inst_20834){
var statearr_20853_20874 = state_20850__$1;
(statearr_20853_20874[(1)] = (8));

} else {
var statearr_20854_20875 = state_20850__$1;
(statearr_20854_20875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (1))){
var inst_20827 = (0);
var state_20850__$1 = (function (){var statearr_20855 = state_20850;
(statearr_20855[(8)] = inst_20827);

return statearr_20855;
})();
var statearr_20856_20876 = state_20850__$1;
(statearr_20856_20876[(2)] = null);

(statearr_20856_20876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (4))){
var state_20850__$1 = state_20850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20850__$1,(7),ch);
} else {
if((state_val_20851 === (6))){
var inst_20845 = (state_20850[(2)]);
var state_20850__$1 = state_20850;
var statearr_20857_20877 = state_20850__$1;
(statearr_20857_20877[(2)] = inst_20845);

(statearr_20857_20877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (3))){
var inst_20847 = (state_20850[(2)]);
var inst_20848 = cljs.core.async.close_BANG_.call(null,out);
var state_20850__$1 = (function (){var statearr_20858 = state_20850;
(statearr_20858[(9)] = inst_20847);

return statearr_20858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20850__$1,inst_20848);
} else {
if((state_val_20851 === (2))){
var inst_20827 = (state_20850[(8)]);
var inst_20829 = (inst_20827 < n);
var state_20850__$1 = state_20850;
if(cljs.core.truth_(inst_20829)){
var statearr_20859_20878 = state_20850__$1;
(statearr_20859_20878[(1)] = (4));

} else {
var statearr_20860_20879 = state_20850__$1;
(statearr_20860_20879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (11))){
var inst_20827 = (state_20850[(8)]);
var inst_20837 = (state_20850[(2)]);
var inst_20838 = (inst_20827 + (1));
var inst_20827__$1 = inst_20838;
var state_20850__$1 = (function (){var statearr_20861 = state_20850;
(statearr_20861[(10)] = inst_20837);

(statearr_20861[(8)] = inst_20827__$1);

return statearr_20861;
})();
var statearr_20862_20880 = state_20850__$1;
(statearr_20862_20880[(2)] = null);

(statearr_20862_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (9))){
var state_20850__$1 = state_20850;
var statearr_20863_20881 = state_20850__$1;
(statearr_20863_20881[(2)] = null);

(statearr_20863_20881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (5))){
var state_20850__$1 = state_20850;
var statearr_20864_20882 = state_20850__$1;
(statearr_20864_20882[(2)] = null);

(statearr_20864_20882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (10))){
var inst_20842 = (state_20850[(2)]);
var state_20850__$1 = state_20850;
var statearr_20865_20883 = state_20850__$1;
(statearr_20865_20883[(2)] = inst_20842);

(statearr_20865_20883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20851 === (8))){
var inst_20832 = (state_20850[(7)]);
var state_20850__$1 = state_20850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20850__$1,(11),out,inst_20832);
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
});})(c__5962__auto___20873,out))
;
return ((function (switch__5947__auto__,c__5962__auto___20873,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20869[(0)] = state_machine__5948__auto__);

(statearr_20869[(1)] = (1));

return statearr_20869;
});
var state_machine__5948__auto____1 = (function (state_20850){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20870){if((e20870 instanceof Object)){
var ex__5951__auto__ = e20870;
var statearr_20871_20884 = state_20850;
(statearr_20871_20884[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20885 = state_20850;
state_20850 = G__20885;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20850){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20873,out))
})();
var state__5964__auto__ = (function (){var statearr_20872 = f__5963__auto__.call(null);
(statearr_20872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20873);

return statearr_20872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20873,out))
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
if(typeof cljs.core.async.t20893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20893 = (function (ch,f,map_LT_,meta20894){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20894 = meta20894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20896 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20896 = (function (fn1,_,meta20894,map_LT_,f,ch,meta20897){
this.fn1 = fn1;
this._ = _;
this.meta20894 = meta20894;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20897 = meta20897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20896.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20886_SHARP_){
return f1.call(null,(((p1__20886_SHARP_ == null))?null:self__.f.call(null,p1__20886_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20898){
var self__ = this;
var _20898__$1 = this;
return self__.meta20897;
});})(___$1))
;

cljs.core.async.t20896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20898,meta20897__$1){
var self__ = this;
var _20898__$1 = this;
return (new cljs.core.async.t20896(self__.fn1,self__._,self__.meta20894,self__.map_LT_,self__.f,self__.ch,meta20897__$1));
});})(___$1))
;

cljs.core.async.t20896.cljs$lang$type = true;

cljs.core.async.t20896.cljs$lang$ctorStr = "cljs.core.async/t20896";

cljs.core.async.t20896.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20896");
});})(___$1))
;

cljs.core.async.__GT_t20896 = ((function (___$1){
return (function __GT_t20896(fn1__$1,___$2,meta20894__$1,map_LT___$1,f__$1,ch__$1,meta20897){
return (new cljs.core.async.t20896(fn1__$1,___$2,meta20894__$1,map_LT___$1,f__$1,ch__$1,meta20897));
});})(___$1))
;

}

return (new cljs.core.async.t20896(fn1,___$1,self__.meta20894,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t20893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20895){
var self__ = this;
var _20895__$1 = this;
return self__.meta20894;
});

cljs.core.async.t20893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20895,meta20894__$1){
var self__ = this;
var _20895__$1 = this;
return (new cljs.core.async.t20893(self__.ch,self__.f,self__.map_LT_,meta20894__$1));
});

cljs.core.async.t20893.cljs$lang$type = true;

cljs.core.async.t20893.cljs$lang$ctorStr = "cljs.core.async/t20893";

cljs.core.async.t20893.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20893");
});

cljs.core.async.__GT_t20893 = (function __GT_t20893(ch__$1,f__$1,map_LT___$1,meta20894){
return (new cljs.core.async.t20893(ch__$1,f__$1,map_LT___$1,meta20894));
});

}

return (new cljs.core.async.t20893(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20902 = (function (ch,f,map_GT_,meta20903){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20903 = meta20903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20902.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20904){
var self__ = this;
var _20904__$1 = this;
return self__.meta20903;
});

cljs.core.async.t20902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20904,meta20903__$1){
var self__ = this;
var _20904__$1 = this;
return (new cljs.core.async.t20902(self__.ch,self__.f,self__.map_GT_,meta20903__$1));
});

cljs.core.async.t20902.cljs$lang$type = true;

cljs.core.async.t20902.cljs$lang$ctorStr = "cljs.core.async/t20902";

cljs.core.async.t20902.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20902");
});

cljs.core.async.__GT_t20902 = (function __GT_t20902(ch__$1,f__$1,map_GT___$1,meta20903){
return (new cljs.core.async.t20902(ch__$1,f__$1,map_GT___$1,meta20903));
});

}

return (new cljs.core.async.t20902(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20908 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20908 = (function (ch,p,filter_GT_,meta20909){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20909 = meta20909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20908.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20910){
var self__ = this;
var _20910__$1 = this;
return self__.meta20909;
});

cljs.core.async.t20908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20910,meta20909__$1){
var self__ = this;
var _20910__$1 = this;
return (new cljs.core.async.t20908(self__.ch,self__.p,self__.filter_GT_,meta20909__$1));
});

cljs.core.async.t20908.cljs$lang$type = true;

cljs.core.async.t20908.cljs$lang$ctorStr = "cljs.core.async/t20908";

cljs.core.async.t20908.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20908");
});

cljs.core.async.__GT_t20908 = (function __GT_t20908(ch__$1,p__$1,filter_GT___$1,meta20909){
return (new cljs.core.async.t20908(ch__$1,p__$1,filter_GT___$1,meta20909));
});

}

return (new cljs.core.async.t20908(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__5962__auto___20993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20993,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20993,out){
return (function (state_20972){
var state_val_20973 = (state_20972[(1)]);
if((state_val_20973 === (7))){
var inst_20968 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20974_20994 = state_20972__$1;
(statearr_20974_20994[(2)] = inst_20968);

(statearr_20974_20994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (1))){
var state_20972__$1 = state_20972;
var statearr_20975_20995 = state_20972__$1;
(statearr_20975_20995[(2)] = null);

(statearr_20975_20995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (4))){
var inst_20954 = (state_20972[(7)]);
var inst_20954__$1 = (state_20972[(2)]);
var inst_20955 = (inst_20954__$1 == null);
var state_20972__$1 = (function (){var statearr_20976 = state_20972;
(statearr_20976[(7)] = inst_20954__$1);

return statearr_20976;
})();
if(cljs.core.truth_(inst_20955)){
var statearr_20977_20996 = state_20972__$1;
(statearr_20977_20996[(1)] = (5));

} else {
var statearr_20978_20997 = state_20972__$1;
(statearr_20978_20997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (6))){
var inst_20954 = (state_20972[(7)]);
var inst_20959 = p.call(null,inst_20954);
var state_20972__$1 = state_20972;
if(cljs.core.truth_(inst_20959)){
var statearr_20979_20998 = state_20972__$1;
(statearr_20979_20998[(1)] = (8));

} else {
var statearr_20980_20999 = state_20972__$1;
(statearr_20980_20999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (3))){
var inst_20970 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20972__$1,inst_20970);
} else {
if((state_val_20973 === (2))){
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20972__$1,(4),ch);
} else {
if((state_val_20973 === (11))){
var inst_20962 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20981_21000 = state_20972__$1;
(statearr_20981_21000[(2)] = inst_20962);

(statearr_20981_21000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (9))){
var state_20972__$1 = state_20972;
var statearr_20982_21001 = state_20972__$1;
(statearr_20982_21001[(2)] = null);

(statearr_20982_21001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (5))){
var inst_20957 = cljs.core.async.close_BANG_.call(null,out);
var state_20972__$1 = state_20972;
var statearr_20983_21002 = state_20972__$1;
(statearr_20983_21002[(2)] = inst_20957);

(statearr_20983_21002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (10))){
var inst_20965 = (state_20972[(2)]);
var state_20972__$1 = (function (){var statearr_20984 = state_20972;
(statearr_20984[(8)] = inst_20965);

return statearr_20984;
})();
var statearr_20985_21003 = state_20972__$1;
(statearr_20985_21003[(2)] = null);

(statearr_20985_21003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (8))){
var inst_20954 = (state_20972[(7)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20972__$1,(11),out,inst_20954);
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
});})(c__5962__auto___20993,out))
;
return ((function (switch__5947__auto__,c__5962__auto___20993,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20989 = [null,null,null,null,null,null,null,null,null];
(statearr_20989[(0)] = state_machine__5948__auto__);

(statearr_20989[(1)] = (1));

return statearr_20989;
});
var state_machine__5948__auto____1 = (function (state_20972){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20990){if((e20990 instanceof Object)){
var ex__5951__auto__ = e20990;
var statearr_20991_21004 = state_20972;
(statearr_20991_21004[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21005 = state_20972;
state_20972 = G__21005;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20972){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20993,out))
})();
var state__5964__auto__ = (function (){var statearr_20992 = f__5963__auto__.call(null);
(statearr_20992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20993);

return statearr_20992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20993,out))
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
var c__5962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto__){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto__){
return (function (state_21171){
var state_val_21172 = (state_21171[(1)]);
if((state_val_21172 === (7))){
var inst_21167 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
var statearr_21173_21214 = state_21171__$1;
(statearr_21173_21214[(2)] = inst_21167);

(statearr_21173_21214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (20))){
var inst_21137 = (state_21171[(7)]);
var inst_21148 = (state_21171[(2)]);
var inst_21149 = cljs.core.next.call(null,inst_21137);
var inst_21123 = inst_21149;
var inst_21124 = null;
var inst_21125 = (0);
var inst_21126 = (0);
var state_21171__$1 = (function (){var statearr_21174 = state_21171;
(statearr_21174[(8)] = inst_21126);

(statearr_21174[(9)] = inst_21148);

(statearr_21174[(10)] = inst_21125);

(statearr_21174[(11)] = inst_21123);

(statearr_21174[(12)] = inst_21124);

return statearr_21174;
})();
var statearr_21175_21215 = state_21171__$1;
(statearr_21175_21215[(2)] = null);

(statearr_21175_21215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (1))){
var state_21171__$1 = state_21171;
var statearr_21176_21216 = state_21171__$1;
(statearr_21176_21216[(2)] = null);

(statearr_21176_21216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (4))){
var inst_21112 = (state_21171[(13)]);
var inst_21112__$1 = (state_21171[(2)]);
var inst_21113 = (inst_21112__$1 == null);
var state_21171__$1 = (function (){var statearr_21177 = state_21171;
(statearr_21177[(13)] = inst_21112__$1);

return statearr_21177;
})();
if(cljs.core.truth_(inst_21113)){
var statearr_21178_21217 = state_21171__$1;
(statearr_21178_21217[(1)] = (5));

} else {
var statearr_21179_21218 = state_21171__$1;
(statearr_21179_21218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (15))){
var state_21171__$1 = state_21171;
var statearr_21183_21219 = state_21171__$1;
(statearr_21183_21219[(2)] = null);

(statearr_21183_21219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (21))){
var state_21171__$1 = state_21171;
var statearr_21184_21220 = state_21171__$1;
(statearr_21184_21220[(2)] = null);

(statearr_21184_21220[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (13))){
var inst_21126 = (state_21171[(8)]);
var inst_21125 = (state_21171[(10)]);
var inst_21123 = (state_21171[(11)]);
var inst_21124 = (state_21171[(12)]);
var inst_21133 = (state_21171[(2)]);
var inst_21134 = (inst_21126 + (1));
var tmp21180 = inst_21125;
var tmp21181 = inst_21123;
var tmp21182 = inst_21124;
var inst_21123__$1 = tmp21181;
var inst_21124__$1 = tmp21182;
var inst_21125__$1 = tmp21180;
var inst_21126__$1 = inst_21134;
var state_21171__$1 = (function (){var statearr_21185 = state_21171;
(statearr_21185[(8)] = inst_21126__$1);

(statearr_21185[(10)] = inst_21125__$1);

(statearr_21185[(11)] = inst_21123__$1);

(statearr_21185[(12)] = inst_21124__$1);

(statearr_21185[(14)] = inst_21133);

return statearr_21185;
})();
var statearr_21186_21221 = state_21171__$1;
(statearr_21186_21221[(2)] = null);

(statearr_21186_21221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (22))){
var state_21171__$1 = state_21171;
var statearr_21187_21222 = state_21171__$1;
(statearr_21187_21222[(2)] = null);

(statearr_21187_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (6))){
var inst_21112 = (state_21171[(13)]);
var inst_21121 = f.call(null,inst_21112);
var inst_21122 = cljs.core.seq.call(null,inst_21121);
var inst_21123 = inst_21122;
var inst_21124 = null;
var inst_21125 = (0);
var inst_21126 = (0);
var state_21171__$1 = (function (){var statearr_21188 = state_21171;
(statearr_21188[(8)] = inst_21126);

(statearr_21188[(10)] = inst_21125);

(statearr_21188[(11)] = inst_21123);

(statearr_21188[(12)] = inst_21124);

return statearr_21188;
})();
var statearr_21189_21223 = state_21171__$1;
(statearr_21189_21223[(2)] = null);

(statearr_21189_21223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (17))){
var inst_21137 = (state_21171[(7)]);
var inst_21141 = cljs.core.chunk_first.call(null,inst_21137);
var inst_21142 = cljs.core.chunk_rest.call(null,inst_21137);
var inst_21143 = cljs.core.count.call(null,inst_21141);
var inst_21123 = inst_21142;
var inst_21124 = inst_21141;
var inst_21125 = inst_21143;
var inst_21126 = (0);
var state_21171__$1 = (function (){var statearr_21190 = state_21171;
(statearr_21190[(8)] = inst_21126);

(statearr_21190[(10)] = inst_21125);

(statearr_21190[(11)] = inst_21123);

(statearr_21190[(12)] = inst_21124);

return statearr_21190;
})();
var statearr_21191_21224 = state_21171__$1;
(statearr_21191_21224[(2)] = null);

(statearr_21191_21224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (3))){
var inst_21169 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21171__$1,inst_21169);
} else {
if((state_val_21172 === (12))){
var inst_21157 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
var statearr_21192_21225 = state_21171__$1;
(statearr_21192_21225[(2)] = inst_21157);

(statearr_21192_21225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (2))){
var state_21171__$1 = state_21171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21171__$1,(4),in$);
} else {
if((state_val_21172 === (23))){
var inst_21165 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
var statearr_21193_21226 = state_21171__$1;
(statearr_21193_21226[(2)] = inst_21165);

(statearr_21193_21226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (19))){
var inst_21152 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
var statearr_21194_21227 = state_21171__$1;
(statearr_21194_21227[(2)] = inst_21152);

(statearr_21194_21227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (11))){
var inst_21137 = (state_21171[(7)]);
var inst_21123 = (state_21171[(11)]);
var inst_21137__$1 = cljs.core.seq.call(null,inst_21123);
var state_21171__$1 = (function (){var statearr_21195 = state_21171;
(statearr_21195[(7)] = inst_21137__$1);

return statearr_21195;
})();
if(inst_21137__$1){
var statearr_21196_21228 = state_21171__$1;
(statearr_21196_21228[(1)] = (14));

} else {
var statearr_21197_21229 = state_21171__$1;
(statearr_21197_21229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (9))){
var inst_21159 = (state_21171[(2)]);
var inst_21160 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21171__$1 = (function (){var statearr_21198 = state_21171;
(statearr_21198[(15)] = inst_21159);

return statearr_21198;
})();
if(cljs.core.truth_(inst_21160)){
var statearr_21199_21230 = state_21171__$1;
(statearr_21199_21230[(1)] = (21));

} else {
var statearr_21200_21231 = state_21171__$1;
(statearr_21200_21231[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (5))){
var inst_21115 = cljs.core.async.close_BANG_.call(null,out);
var state_21171__$1 = state_21171;
var statearr_21201_21232 = state_21171__$1;
(statearr_21201_21232[(2)] = inst_21115);

(statearr_21201_21232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (14))){
var inst_21137 = (state_21171[(7)]);
var inst_21139 = cljs.core.chunked_seq_QMARK_.call(null,inst_21137);
var state_21171__$1 = state_21171;
if(inst_21139){
var statearr_21202_21233 = state_21171__$1;
(statearr_21202_21233[(1)] = (17));

} else {
var statearr_21203_21234 = state_21171__$1;
(statearr_21203_21234[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (16))){
var inst_21155 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
var statearr_21204_21235 = state_21171__$1;
(statearr_21204_21235[(2)] = inst_21155);

(statearr_21204_21235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (10))){
var inst_21126 = (state_21171[(8)]);
var inst_21124 = (state_21171[(12)]);
var inst_21131 = cljs.core._nth.call(null,inst_21124,inst_21126);
var state_21171__$1 = state_21171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21171__$1,(13),out,inst_21131);
} else {
if((state_val_21172 === (18))){
var inst_21137 = (state_21171[(7)]);
var inst_21146 = cljs.core.first.call(null,inst_21137);
var state_21171__$1 = state_21171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21171__$1,(20),out,inst_21146);
} else {
if((state_val_21172 === (8))){
var inst_21126 = (state_21171[(8)]);
var inst_21125 = (state_21171[(10)]);
var inst_21128 = (inst_21126 < inst_21125);
var inst_21129 = inst_21128;
var state_21171__$1 = state_21171;
if(cljs.core.truth_(inst_21129)){
var statearr_21205_21236 = state_21171__$1;
(statearr_21205_21236[(1)] = (10));

} else {
var statearr_21206_21237 = state_21171__$1;
(statearr_21206_21237[(1)] = (11));

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
});})(c__5962__auto__))
;
return ((function (switch__5947__auto__,c__5962__auto__){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_21210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21210[(0)] = state_machine__5948__auto__);

(statearr_21210[(1)] = (1));

return statearr_21210;
});
var state_machine__5948__auto____1 = (function (state_21171){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21211){if((e21211 instanceof Object)){
var ex__5951__auto__ = e21211;
var statearr_21212_21238 = state_21171;
(statearr_21212_21238[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21239 = state_21171;
state_21171 = G__21239;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21171){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__))
})();
var state__5964__auto__ = (function (){var statearr_21213 = f__5963__auto__.call(null);
(statearr_21213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_21213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto__))
);

return c__5962__auto__;
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
var c__5962__auto___21336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___21336,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___21336,out){
return (function (state_21311){
var state_val_21312 = (state_21311[(1)]);
if((state_val_21312 === (7))){
var inst_21306 = (state_21311[(2)]);
var state_21311__$1 = state_21311;
var statearr_21313_21337 = state_21311__$1;
(statearr_21313_21337[(2)] = inst_21306);

(statearr_21313_21337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21312 === (1))){
var inst_21288 = null;
var state_21311__$1 = (function (){var statearr_21314 = state_21311;
(statearr_21314[(7)] = inst_21288);

return statearr_21314;
})();
var statearr_21315_21338 = state_21311__$1;
(statearr_21315_21338[(2)] = null);

(statearr_21315_21338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21312 === (4))){
var inst_21291 = (state_21311[(8)]);
var inst_21291__$1 = (state_21311[(2)]);
var inst_21292 = (inst_21291__$1 == null);
var inst_21293 = cljs.core.not.call(null,inst_21292);
var state_21311__$1 = (function (){var statearr_21316 = state_21311;
(statearr_21316[(8)] = inst_21291__$1);

return statearr_21316;
})();
if(inst_21293){
var statearr_21317_21339 = state_21311__$1;
(statearr_21317_21339[(1)] = (5));

} else {
var statearr_21318_21340 = state_21311__$1;
(statearr_21318_21340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21312 === (6))){
var state_21311__$1 = state_21311;
var statearr_21319_21341 = state_21311__$1;
(statearr_21319_21341[(2)] = null);

(statearr_21319_21341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21312 === (3))){
var inst_21308 = (state_21311[(2)]);
var inst_21309 = cljs.core.async.close_BANG_.call(null,out);
var state_21311__$1 = (function (){var statearr_21320 = state_21311;
(statearr_21320[(9)] = inst_21308);

return statearr_21320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21311__$1,inst_21309);
} else {
if((state_val_21312 === (2))){
var state_21311__$1 = state_21311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21311__$1,(4),ch);
} else {
if((state_val_21312 === (11))){
var inst_21291 = (state_21311[(8)]);
var inst_21300 = (state_21311[(2)]);
var inst_21288 = inst_21291;
var state_21311__$1 = (function (){var statearr_21321 = state_21311;
(statearr_21321[(7)] = inst_21288);

(statearr_21321[(10)] = inst_21300);

return statearr_21321;
})();
var statearr_21322_21342 = state_21311__$1;
(statearr_21322_21342[(2)] = null);

(statearr_21322_21342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21312 === (9))){
var inst_21291 = (state_21311[(8)]);
var state_21311__$1 = state_21311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21311__$1,(11),out,inst_21291);
} else {
if((state_val_21312 === (5))){
var inst_21288 = (state_21311[(7)]);
var inst_21291 = (state_21311[(8)]);
var inst_21295 = cljs.core._EQ_.call(null,inst_21291,inst_21288);
var state_21311__$1 = state_21311;
if(inst_21295){
var statearr_21324_21343 = state_21311__$1;
(statearr_21324_21343[(1)] = (8));

} else {
var statearr_21325_21344 = state_21311__$1;
(statearr_21325_21344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21312 === (10))){
var inst_21303 = (state_21311[(2)]);
var state_21311__$1 = state_21311;
var statearr_21326_21345 = state_21311__$1;
(statearr_21326_21345[(2)] = inst_21303);

(statearr_21326_21345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21312 === (8))){
var inst_21288 = (state_21311[(7)]);
var tmp21323 = inst_21288;
var inst_21288__$1 = tmp21323;
var state_21311__$1 = (function (){var statearr_21327 = state_21311;
(statearr_21327[(7)] = inst_21288__$1);

return statearr_21327;
})();
var statearr_21328_21346 = state_21311__$1;
(statearr_21328_21346[(2)] = null);

(statearr_21328_21346[(1)] = (2));


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
});})(c__5962__auto___21336,out))
;
return ((function (switch__5947__auto__,c__5962__auto___21336,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_21332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21332[(0)] = state_machine__5948__auto__);

(statearr_21332[(1)] = (1));

return statearr_21332;
});
var state_machine__5948__auto____1 = (function (state_21311){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21333){if((e21333 instanceof Object)){
var ex__5951__auto__ = e21333;
var statearr_21334_21347 = state_21311;
(statearr_21334_21347[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21348 = state_21311;
state_21311 = G__21348;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21311){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___21336,out))
})();
var state__5964__auto__ = (function (){var statearr_21335 = f__5963__auto__.call(null);
(statearr_21335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___21336);

return statearr_21335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___21336,out))
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
var c__5962__auto___21483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___21483,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___21483,out){
return (function (state_21453){
var state_val_21454 = (state_21453[(1)]);
if((state_val_21454 === (7))){
var inst_21449 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21455_21484 = state_21453__$1;
(statearr_21455_21484[(2)] = inst_21449);

(statearr_21455_21484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (1))){
var inst_21416 = (new Array(n));
var inst_21417 = inst_21416;
var inst_21418 = (0);
var state_21453__$1 = (function (){var statearr_21456 = state_21453;
(statearr_21456[(7)] = inst_21418);

(statearr_21456[(8)] = inst_21417);

return statearr_21456;
})();
var statearr_21457_21485 = state_21453__$1;
(statearr_21457_21485[(2)] = null);

(statearr_21457_21485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (4))){
var inst_21421 = (state_21453[(9)]);
var inst_21421__$1 = (state_21453[(2)]);
var inst_21422 = (inst_21421__$1 == null);
var inst_21423 = cljs.core.not.call(null,inst_21422);
var state_21453__$1 = (function (){var statearr_21458 = state_21453;
(statearr_21458[(9)] = inst_21421__$1);

return statearr_21458;
})();
if(inst_21423){
var statearr_21459_21486 = state_21453__$1;
(statearr_21459_21486[(1)] = (5));

} else {
var statearr_21460_21487 = state_21453__$1;
(statearr_21460_21487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (15))){
var inst_21443 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21461_21488 = state_21453__$1;
(statearr_21461_21488[(2)] = inst_21443);

(statearr_21461_21488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (13))){
var state_21453__$1 = state_21453;
var statearr_21462_21489 = state_21453__$1;
(statearr_21462_21489[(2)] = null);

(statearr_21462_21489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (6))){
var inst_21418 = (state_21453[(7)]);
var inst_21439 = (inst_21418 > (0));
var state_21453__$1 = state_21453;
if(cljs.core.truth_(inst_21439)){
var statearr_21463_21490 = state_21453__$1;
(statearr_21463_21490[(1)] = (12));

} else {
var statearr_21464_21491 = state_21453__$1;
(statearr_21464_21491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (3))){
var inst_21451 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21453__$1,inst_21451);
} else {
if((state_val_21454 === (12))){
var inst_21417 = (state_21453[(8)]);
var inst_21441 = cljs.core.vec.call(null,inst_21417);
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21453__$1,(15),out,inst_21441);
} else {
if((state_val_21454 === (2))){
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21453__$1,(4),ch);
} else {
if((state_val_21454 === (11))){
var inst_21433 = (state_21453[(2)]);
var inst_21434 = (new Array(n));
var inst_21417 = inst_21434;
var inst_21418 = (0);
var state_21453__$1 = (function (){var statearr_21465 = state_21453;
(statearr_21465[(7)] = inst_21418);

(statearr_21465[(10)] = inst_21433);

(statearr_21465[(8)] = inst_21417);

return statearr_21465;
})();
var statearr_21466_21492 = state_21453__$1;
(statearr_21466_21492[(2)] = null);

(statearr_21466_21492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (9))){
var inst_21417 = (state_21453[(8)]);
var inst_21431 = cljs.core.vec.call(null,inst_21417);
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21453__$1,(11),out,inst_21431);
} else {
if((state_val_21454 === (5))){
var inst_21418 = (state_21453[(7)]);
var inst_21426 = (state_21453[(11)]);
var inst_21421 = (state_21453[(9)]);
var inst_21417 = (state_21453[(8)]);
var inst_21425 = (inst_21417[inst_21418] = inst_21421);
var inst_21426__$1 = (inst_21418 + (1));
var inst_21427 = (inst_21426__$1 < n);
var state_21453__$1 = (function (){var statearr_21467 = state_21453;
(statearr_21467[(11)] = inst_21426__$1);

(statearr_21467[(12)] = inst_21425);

return statearr_21467;
})();
if(cljs.core.truth_(inst_21427)){
var statearr_21468_21493 = state_21453__$1;
(statearr_21468_21493[(1)] = (8));

} else {
var statearr_21469_21494 = state_21453__$1;
(statearr_21469_21494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (14))){
var inst_21446 = (state_21453[(2)]);
var inst_21447 = cljs.core.async.close_BANG_.call(null,out);
var state_21453__$1 = (function (){var statearr_21471 = state_21453;
(statearr_21471[(13)] = inst_21446);

return statearr_21471;
})();
var statearr_21472_21495 = state_21453__$1;
(statearr_21472_21495[(2)] = inst_21447);

(statearr_21472_21495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (10))){
var inst_21437 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21473_21496 = state_21453__$1;
(statearr_21473_21496[(2)] = inst_21437);

(statearr_21473_21496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (8))){
var inst_21426 = (state_21453[(11)]);
var inst_21417 = (state_21453[(8)]);
var tmp21470 = inst_21417;
var inst_21417__$1 = tmp21470;
var inst_21418 = inst_21426;
var state_21453__$1 = (function (){var statearr_21474 = state_21453;
(statearr_21474[(7)] = inst_21418);

(statearr_21474[(8)] = inst_21417__$1);

return statearr_21474;
})();
var statearr_21475_21497 = state_21453__$1;
(statearr_21475_21497[(2)] = null);

(statearr_21475_21497[(1)] = (2));


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
});})(c__5962__auto___21483,out))
;
return ((function (switch__5947__auto__,c__5962__auto___21483,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_21479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21479[(0)] = state_machine__5948__auto__);

(statearr_21479[(1)] = (1));

return statearr_21479;
});
var state_machine__5948__auto____1 = (function (state_21453){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21480){if((e21480 instanceof Object)){
var ex__5951__auto__ = e21480;
var statearr_21481_21498 = state_21453;
(statearr_21481_21498[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21499 = state_21453;
state_21453 = G__21499;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21453){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___21483,out))
})();
var state__5964__auto__ = (function (){var statearr_21482 = f__5963__auto__.call(null);
(statearr_21482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___21483);

return statearr_21482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___21483,out))
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
var c__5962__auto___21642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___21642,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___21642,out){
return (function (state_21612){
var state_val_21613 = (state_21612[(1)]);
if((state_val_21613 === (7))){
var inst_21608 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
var statearr_21614_21643 = state_21612__$1;
(statearr_21614_21643[(2)] = inst_21608);

(statearr_21614_21643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (1))){
var inst_21571 = [];
var inst_21572 = inst_21571;
var inst_21573 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21612__$1 = (function (){var statearr_21615 = state_21612;
(statearr_21615[(7)] = inst_21572);

(statearr_21615[(8)] = inst_21573);

return statearr_21615;
})();
var statearr_21616_21644 = state_21612__$1;
(statearr_21616_21644[(2)] = null);

(statearr_21616_21644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (4))){
var inst_21576 = (state_21612[(9)]);
var inst_21576__$1 = (state_21612[(2)]);
var inst_21577 = (inst_21576__$1 == null);
var inst_21578 = cljs.core.not.call(null,inst_21577);
var state_21612__$1 = (function (){var statearr_21617 = state_21612;
(statearr_21617[(9)] = inst_21576__$1);

return statearr_21617;
})();
if(inst_21578){
var statearr_21618_21645 = state_21612__$1;
(statearr_21618_21645[(1)] = (5));

} else {
var statearr_21619_21646 = state_21612__$1;
(statearr_21619_21646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (15))){
var inst_21602 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
var statearr_21620_21647 = state_21612__$1;
(statearr_21620_21647[(2)] = inst_21602);

(statearr_21620_21647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (13))){
var state_21612__$1 = state_21612;
var statearr_21621_21648 = state_21612__$1;
(statearr_21621_21648[(2)] = null);

(statearr_21621_21648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (6))){
var inst_21572 = (state_21612[(7)]);
var inst_21597 = inst_21572.length;
var inst_21598 = (inst_21597 > (0));
var state_21612__$1 = state_21612;
if(cljs.core.truth_(inst_21598)){
var statearr_21622_21649 = state_21612__$1;
(statearr_21622_21649[(1)] = (12));

} else {
var statearr_21623_21650 = state_21612__$1;
(statearr_21623_21650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (3))){
var inst_21610 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21612__$1,inst_21610);
} else {
if((state_val_21613 === (12))){
var inst_21572 = (state_21612[(7)]);
var inst_21600 = cljs.core.vec.call(null,inst_21572);
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21612__$1,(15),out,inst_21600);
} else {
if((state_val_21613 === (2))){
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21612__$1,(4),ch);
} else {
if((state_val_21613 === (11))){
var inst_21580 = (state_21612[(10)]);
var inst_21576 = (state_21612[(9)]);
var inst_21590 = (state_21612[(2)]);
var inst_21591 = [];
var inst_21592 = inst_21591.push(inst_21576);
var inst_21572 = inst_21591;
var inst_21573 = inst_21580;
var state_21612__$1 = (function (){var statearr_21624 = state_21612;
(statearr_21624[(11)] = inst_21590);

(statearr_21624[(12)] = inst_21592);

(statearr_21624[(7)] = inst_21572);

(statearr_21624[(8)] = inst_21573);

return statearr_21624;
})();
var statearr_21625_21651 = state_21612__$1;
(statearr_21625_21651[(2)] = null);

(statearr_21625_21651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (9))){
var inst_21572 = (state_21612[(7)]);
var inst_21588 = cljs.core.vec.call(null,inst_21572);
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21612__$1,(11),out,inst_21588);
} else {
if((state_val_21613 === (5))){
var inst_21573 = (state_21612[(8)]);
var inst_21580 = (state_21612[(10)]);
var inst_21576 = (state_21612[(9)]);
var inst_21580__$1 = f.call(null,inst_21576);
var inst_21581 = cljs.core._EQ_.call(null,inst_21580__$1,inst_21573);
var inst_21582 = cljs.core.keyword_identical_QMARK_.call(null,inst_21573,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21583 = (inst_21581) || (inst_21582);
var state_21612__$1 = (function (){var statearr_21626 = state_21612;
(statearr_21626[(10)] = inst_21580__$1);

return statearr_21626;
})();
if(cljs.core.truth_(inst_21583)){
var statearr_21627_21652 = state_21612__$1;
(statearr_21627_21652[(1)] = (8));

} else {
var statearr_21628_21653 = state_21612__$1;
(statearr_21628_21653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (14))){
var inst_21605 = (state_21612[(2)]);
var inst_21606 = cljs.core.async.close_BANG_.call(null,out);
var state_21612__$1 = (function (){var statearr_21630 = state_21612;
(statearr_21630[(13)] = inst_21605);

return statearr_21630;
})();
var statearr_21631_21654 = state_21612__$1;
(statearr_21631_21654[(2)] = inst_21606);

(statearr_21631_21654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (10))){
var inst_21595 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
var statearr_21632_21655 = state_21612__$1;
(statearr_21632_21655[(2)] = inst_21595);

(statearr_21632_21655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (8))){
var inst_21572 = (state_21612[(7)]);
var inst_21580 = (state_21612[(10)]);
var inst_21576 = (state_21612[(9)]);
var inst_21585 = inst_21572.push(inst_21576);
var tmp21629 = inst_21572;
var inst_21572__$1 = tmp21629;
var inst_21573 = inst_21580;
var state_21612__$1 = (function (){var statearr_21633 = state_21612;
(statearr_21633[(7)] = inst_21572__$1);

(statearr_21633[(8)] = inst_21573);

(statearr_21633[(14)] = inst_21585);

return statearr_21633;
})();
var statearr_21634_21656 = state_21612__$1;
(statearr_21634_21656[(2)] = null);

(statearr_21634_21656[(1)] = (2));


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
});})(c__5962__auto___21642,out))
;
return ((function (switch__5947__auto__,c__5962__auto___21642,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_21638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21638[(0)] = state_machine__5948__auto__);

(statearr_21638[(1)] = (1));

return statearr_21638;
});
var state_machine__5948__auto____1 = (function (state_21612){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21639){if((e21639 instanceof Object)){
var ex__5951__auto__ = e21639;
var statearr_21640_21657 = state_21612;
(statearr_21640_21657[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21658 = state_21612;
state_21612 = G__21658;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21612){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___21642,out))
})();
var state__5964__auto__ = (function (){var statearr_21641 = f__5963__auto__.call(null);
(statearr_21641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___21642);

return statearr_21641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___21642,out))
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
