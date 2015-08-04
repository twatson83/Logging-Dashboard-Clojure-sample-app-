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
if(typeof cljs.core.async.t18739 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18739 = (function (f,fn_handler,meta18740){
this.f = f;
this.fn_handler = fn_handler;
this.meta18740 = meta18740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18739.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18741){
var self__ = this;
var _18741__$1 = this;
return self__.meta18740;
});

cljs.core.async.t18739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18741,meta18740__$1){
var self__ = this;
var _18741__$1 = this;
return (new cljs.core.async.t18739(self__.f,self__.fn_handler,meta18740__$1));
});

cljs.core.async.t18739.cljs$lang$type = true;

cljs.core.async.t18739.cljs$lang$ctorStr = "cljs.core.async/t18739";

cljs.core.async.t18739.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18739");
});

cljs.core.async.__GT_t18739 = (function __GT_t18739(f__$1,fn_handler__$1,meta18740){
return (new cljs.core.async.t18739(f__$1,fn_handler__$1,meta18740));
});

}

return (new cljs.core.async.t18739(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__18743 = buff;
if(G__18743){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__18743.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18743.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18743);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18743);
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
var val_18744 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18744);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18744,ret){
return (function (){
return fn1.call(null,val_18744);
});})(val_18744,ret))
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
var n__4643__auto___18745 = n;
var x_18746 = (0);
while(true){
if((x_18746 < n__4643__auto___18745)){
(a[x_18746] = (0));

var G__18747 = (x_18746 + (1));
x_18746 = G__18747;
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

var G__18748 = (i + (1));
i = G__18748;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18752 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18752 = (function (flag,alt_flag,meta18753){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18753 = meta18753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18752.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18754){
var self__ = this;
var _18754__$1 = this;
return self__.meta18753;
});})(flag))
;

cljs.core.async.t18752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18754,meta18753__$1){
var self__ = this;
var _18754__$1 = this;
return (new cljs.core.async.t18752(self__.flag,self__.alt_flag,meta18753__$1));
});})(flag))
;

cljs.core.async.t18752.cljs$lang$type = true;

cljs.core.async.t18752.cljs$lang$ctorStr = "cljs.core.async/t18752";

cljs.core.async.t18752.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18752");
});})(flag))
;

cljs.core.async.__GT_t18752 = ((function (flag){
return (function __GT_t18752(flag__$1,alt_flag__$1,meta18753){
return (new cljs.core.async.t18752(flag__$1,alt_flag__$1,meta18753));
});})(flag))
;

}

return (new cljs.core.async.t18752(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18758 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18758 = (function (cb,flag,alt_handler,meta18759){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18759 = meta18759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18760){
var self__ = this;
var _18760__$1 = this;
return self__.meta18759;
});

cljs.core.async.t18758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18760,meta18759__$1){
var self__ = this;
var _18760__$1 = this;
return (new cljs.core.async.t18758(self__.cb,self__.flag,self__.alt_handler,meta18759__$1));
});

cljs.core.async.t18758.cljs$lang$type = true;

cljs.core.async.t18758.cljs$lang$ctorStr = "cljs.core.async/t18758";

cljs.core.async.t18758.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18758");
});

cljs.core.async.__GT_t18758 = (function __GT_t18758(cb__$1,flag__$1,alt_handler__$1,meta18759){
return (new cljs.core.async.t18758(cb__$1,flag__$1,alt_handler__$1,meta18759));
});

}

return (new cljs.core.async.t18758(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__18761_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18761_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18762_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18762_SHARP_,port], null));
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
var G__18763 = (i + (1));
i = G__18763;
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
var alts_BANG___delegate = function (ports,p__18764){
var map__18766 = p__18764;
var map__18766__$1 = ((cljs.core.seq_QMARK_.call(null,map__18766))?cljs.core.apply.call(null,cljs.core.hash_map,map__18766):map__18766);
var opts = map__18766__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18764 = null;
if (arguments.length > 1) {
  p__18764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__18764);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18767){
var ports = cljs.core.first(arglist__18767);
var p__18764 = cljs.core.rest(arglist__18767);
return alts_BANG___delegate(ports,p__18764);
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
var c__6474__auto___18862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___18862){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___18862){
return (function (state_18838){
var state_val_18839 = (state_18838[(1)]);
if((state_val_18839 === (7))){
var inst_18834 = (state_18838[(2)]);
var state_18838__$1 = state_18838;
var statearr_18840_18863 = state_18838__$1;
(statearr_18840_18863[(2)] = inst_18834);

(statearr_18840_18863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (1))){
var state_18838__$1 = state_18838;
var statearr_18841_18864 = state_18838__$1;
(statearr_18841_18864[(2)] = null);

(statearr_18841_18864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (4))){
var inst_18817 = (state_18838[(7)]);
var inst_18817__$1 = (state_18838[(2)]);
var inst_18818 = (inst_18817__$1 == null);
var state_18838__$1 = (function (){var statearr_18842 = state_18838;
(statearr_18842[(7)] = inst_18817__$1);

return statearr_18842;
})();
if(cljs.core.truth_(inst_18818)){
var statearr_18843_18865 = state_18838__$1;
(statearr_18843_18865[(1)] = (5));

} else {
var statearr_18844_18866 = state_18838__$1;
(statearr_18844_18866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (13))){
var state_18838__$1 = state_18838;
var statearr_18845_18867 = state_18838__$1;
(statearr_18845_18867[(2)] = null);

(statearr_18845_18867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (6))){
var inst_18817 = (state_18838[(7)]);
var state_18838__$1 = state_18838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18838__$1,(11),to,inst_18817);
} else {
if((state_val_18839 === (3))){
var inst_18836 = (state_18838[(2)]);
var state_18838__$1 = state_18838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18838__$1,inst_18836);
} else {
if((state_val_18839 === (12))){
var state_18838__$1 = state_18838;
var statearr_18846_18868 = state_18838__$1;
(statearr_18846_18868[(2)] = null);

(statearr_18846_18868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (2))){
var state_18838__$1 = state_18838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18838__$1,(4),from);
} else {
if((state_val_18839 === (11))){
var inst_18827 = (state_18838[(2)]);
var state_18838__$1 = state_18838;
if(cljs.core.truth_(inst_18827)){
var statearr_18847_18869 = state_18838__$1;
(statearr_18847_18869[(1)] = (12));

} else {
var statearr_18848_18870 = state_18838__$1;
(statearr_18848_18870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (9))){
var state_18838__$1 = state_18838;
var statearr_18849_18871 = state_18838__$1;
(statearr_18849_18871[(2)] = null);

(statearr_18849_18871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (5))){
var state_18838__$1 = state_18838;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18850_18872 = state_18838__$1;
(statearr_18850_18872[(1)] = (8));

} else {
var statearr_18851_18873 = state_18838__$1;
(statearr_18851_18873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (14))){
var inst_18832 = (state_18838[(2)]);
var state_18838__$1 = state_18838;
var statearr_18852_18874 = state_18838__$1;
(statearr_18852_18874[(2)] = inst_18832);

(statearr_18852_18874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (10))){
var inst_18824 = (state_18838[(2)]);
var state_18838__$1 = state_18838;
var statearr_18853_18875 = state_18838__$1;
(statearr_18853_18875[(2)] = inst_18824);

(statearr_18853_18875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (8))){
var inst_18821 = cljs.core.async.close_BANG_.call(null,to);
var state_18838__$1 = state_18838;
var statearr_18854_18876 = state_18838__$1;
(statearr_18854_18876[(2)] = inst_18821);

(statearr_18854_18876[(1)] = (10));


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
});})(c__6474__auto___18862))
;
return ((function (switch__6459__auto__,c__6474__auto___18862){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_18858 = [null,null,null,null,null,null,null,null];
(statearr_18858[(0)] = state_machine__6460__auto__);

(statearr_18858[(1)] = (1));

return statearr_18858;
});
var state_machine__6460__auto____1 = (function (state_18838){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_18838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e18859){if((e18859 instanceof Object)){
var ex__6463__auto__ = e18859;
var statearr_18860_18877 = state_18838;
(statearr_18860_18877[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18878 = state_18838;
state_18838 = G__18878;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_18838){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_18838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___18862))
})();
var state__6476__auto__ = (function (){var statearr_18861 = f__6475__auto__.call(null);
(statearr_18861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___18862);

return statearr_18861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___18862))
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
return (function (p__19062){
var vec__19063 = p__19062;
var v = cljs.core.nth.call(null,vec__19063,(0),null);
var p = cljs.core.nth.call(null,vec__19063,(1),null);
var job = vec__19063;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6474__auto___19245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___19245,res,vec__19063,v,p,job,jobs,results){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___19245,res,vec__19063,v,p,job,jobs,results){
return (function (state_19068){
var state_val_19069 = (state_19068[(1)]);
if((state_val_19069 === (2))){
var inst_19065 = (state_19068[(2)]);
var inst_19066 = cljs.core.async.close_BANG_.call(null,res);
var state_19068__$1 = (function (){var statearr_19070 = state_19068;
(statearr_19070[(7)] = inst_19065);

return statearr_19070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19068__$1,inst_19066);
} else {
if((state_val_19069 === (1))){
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19068__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6474__auto___19245,res,vec__19063,v,p,job,jobs,results))
;
return ((function (switch__6459__auto__,c__6474__auto___19245,res,vec__19063,v,p,job,jobs,results){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19074 = [null,null,null,null,null,null,null,null];
(statearr_19074[(0)] = state_machine__6460__auto__);

(statearr_19074[(1)] = (1));

return statearr_19074;
});
var state_machine__6460__auto____1 = (function (state_19068){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19075){if((e19075 instanceof Object)){
var ex__6463__auto__ = e19075;
var statearr_19076_19246 = state_19068;
(statearr_19076_19246[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19247 = state_19068;
state_19068 = G__19247;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19068){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___19245,res,vec__19063,v,p,job,jobs,results))
})();
var state__6476__auto__ = (function (){var statearr_19077 = f__6475__auto__.call(null);
(statearr_19077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___19245);

return statearr_19077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___19245,res,vec__19063,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19078){
var vec__19079 = p__19078;
var v = cljs.core.nth.call(null,vec__19079,(0),null);
var p = cljs.core.nth.call(null,vec__19079,(1),null);
var job = vec__19079;
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
var n__4643__auto___19248 = n;
var __19249 = (0);
while(true){
if((__19249 < n__4643__auto___19248)){
var G__19080_19250 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19080_19250) {
case "async":
var c__6474__auto___19252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19249,c__6474__auto___19252,G__19080_19250,n__4643__auto___19248,jobs,results,process,async){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (__19249,c__6474__auto___19252,G__19080_19250,n__4643__auto___19248,jobs,results,process,async){
return (function (state_19093){
var state_val_19094 = (state_19093[(1)]);
if((state_val_19094 === (7))){
var inst_19089 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
var statearr_19095_19253 = state_19093__$1;
(statearr_19095_19253[(2)] = inst_19089);

(statearr_19095_19253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (6))){
var state_19093__$1 = state_19093;
var statearr_19096_19254 = state_19093__$1;
(statearr_19096_19254[(2)] = null);

(statearr_19096_19254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (5))){
var state_19093__$1 = state_19093;
var statearr_19097_19255 = state_19093__$1;
(statearr_19097_19255[(2)] = null);

(statearr_19097_19255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (4))){
var inst_19083 = (state_19093[(2)]);
var inst_19084 = async.call(null,inst_19083);
var state_19093__$1 = state_19093;
if(cljs.core.truth_(inst_19084)){
var statearr_19098_19256 = state_19093__$1;
(statearr_19098_19256[(1)] = (5));

} else {
var statearr_19099_19257 = state_19093__$1;
(statearr_19099_19257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19094 === (3))){
var inst_19091 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19093__$1,inst_19091);
} else {
if((state_val_19094 === (2))){
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19093__$1,(4),jobs);
} else {
if((state_val_19094 === (1))){
var state_19093__$1 = state_19093;
var statearr_19100_19258 = state_19093__$1;
(statearr_19100_19258[(2)] = null);

(statearr_19100_19258[(1)] = (2));


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
});})(__19249,c__6474__auto___19252,G__19080_19250,n__4643__auto___19248,jobs,results,process,async))
;
return ((function (__19249,switch__6459__auto__,c__6474__auto___19252,G__19080_19250,n__4643__auto___19248,jobs,results,process,async){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19104 = [null,null,null,null,null,null,null];
(statearr_19104[(0)] = state_machine__6460__auto__);

(statearr_19104[(1)] = (1));

return statearr_19104;
});
var state_machine__6460__auto____1 = (function (state_19093){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19105){if((e19105 instanceof Object)){
var ex__6463__auto__ = e19105;
var statearr_19106_19259 = state_19093;
(statearr_19106_19259[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19260 = state_19093;
state_19093 = G__19260;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19093){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(__19249,switch__6459__auto__,c__6474__auto___19252,G__19080_19250,n__4643__auto___19248,jobs,results,process,async))
})();
var state__6476__auto__ = (function (){var statearr_19107 = f__6475__auto__.call(null);
(statearr_19107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___19252);

return statearr_19107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(__19249,c__6474__auto___19252,G__19080_19250,n__4643__auto___19248,jobs,results,process,async))
);


break;
case "compute":
var c__6474__auto___19261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19249,c__6474__auto___19261,G__19080_19250,n__4643__auto___19248,jobs,results,process,async){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (__19249,c__6474__auto___19261,G__19080_19250,n__4643__auto___19248,jobs,results,process,async){
return (function (state_19120){
var state_val_19121 = (state_19120[(1)]);
if((state_val_19121 === (7))){
var inst_19116 = (state_19120[(2)]);
var state_19120__$1 = state_19120;
var statearr_19122_19262 = state_19120__$1;
(statearr_19122_19262[(2)] = inst_19116);

(statearr_19122_19262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (6))){
var state_19120__$1 = state_19120;
var statearr_19123_19263 = state_19120__$1;
(statearr_19123_19263[(2)] = null);

(statearr_19123_19263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (5))){
var state_19120__$1 = state_19120;
var statearr_19124_19264 = state_19120__$1;
(statearr_19124_19264[(2)] = null);

(statearr_19124_19264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (4))){
var inst_19110 = (state_19120[(2)]);
var inst_19111 = process.call(null,inst_19110);
var state_19120__$1 = state_19120;
if(cljs.core.truth_(inst_19111)){
var statearr_19125_19265 = state_19120__$1;
(statearr_19125_19265[(1)] = (5));

} else {
var statearr_19126_19266 = state_19120__$1;
(statearr_19126_19266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19121 === (3))){
var inst_19118 = (state_19120[(2)]);
var state_19120__$1 = state_19120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19120__$1,inst_19118);
} else {
if((state_val_19121 === (2))){
var state_19120__$1 = state_19120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19120__$1,(4),jobs);
} else {
if((state_val_19121 === (1))){
var state_19120__$1 = state_19120;
var statearr_19127_19267 = state_19120__$1;
(statearr_19127_19267[(2)] = null);

(statearr_19127_19267[(1)] = (2));


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
});})(__19249,c__6474__auto___19261,G__19080_19250,n__4643__auto___19248,jobs,results,process,async))
;
return ((function (__19249,switch__6459__auto__,c__6474__auto___19261,G__19080_19250,n__4643__auto___19248,jobs,results,process,async){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19131 = [null,null,null,null,null,null,null];
(statearr_19131[(0)] = state_machine__6460__auto__);

(statearr_19131[(1)] = (1));

return statearr_19131;
});
var state_machine__6460__auto____1 = (function (state_19120){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19132){if((e19132 instanceof Object)){
var ex__6463__auto__ = e19132;
var statearr_19133_19268 = state_19120;
(statearr_19133_19268[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19269 = state_19120;
state_19120 = G__19269;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19120){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(__19249,switch__6459__auto__,c__6474__auto___19261,G__19080_19250,n__4643__auto___19248,jobs,results,process,async))
})();
var state__6476__auto__ = (function (){var statearr_19134 = f__6475__auto__.call(null);
(statearr_19134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___19261);

return statearr_19134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(__19249,c__6474__auto___19261,G__19080_19250,n__4643__auto___19248,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19270 = (__19249 + (1));
__19249 = G__19270;
continue;
} else {
}
break;
}

var c__6474__auto___19271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___19271,jobs,results,process,async){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___19271,jobs,results,process,async){
return (function (state_19156){
var state_val_19157 = (state_19156[(1)]);
if((state_val_19157 === (9))){
var inst_19149 = (state_19156[(2)]);
var state_19156__$1 = (function (){var statearr_19158 = state_19156;
(statearr_19158[(7)] = inst_19149);

return statearr_19158;
})();
var statearr_19159_19272 = state_19156__$1;
(statearr_19159_19272[(2)] = null);

(statearr_19159_19272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (8))){
var inst_19142 = (state_19156[(8)]);
var inst_19147 = (state_19156[(2)]);
var state_19156__$1 = (function (){var statearr_19160 = state_19156;
(statearr_19160[(9)] = inst_19147);

return statearr_19160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19156__$1,(9),results,inst_19142);
} else {
if((state_val_19157 === (7))){
var inst_19152 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19161_19273 = state_19156__$1;
(statearr_19161_19273[(2)] = inst_19152);

(statearr_19161_19273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (6))){
var inst_19137 = (state_19156[(10)]);
var inst_19142 = (state_19156[(8)]);
var inst_19142__$1 = cljs.core.async.chan.call(null,(1));
var inst_19143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19144 = [inst_19137,inst_19142__$1];
var inst_19145 = (new cljs.core.PersistentVector(null,2,(5),inst_19143,inst_19144,null));
var state_19156__$1 = (function (){var statearr_19162 = state_19156;
(statearr_19162[(8)] = inst_19142__$1);

return statearr_19162;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19156__$1,(8),jobs,inst_19145);
} else {
if((state_val_19157 === (5))){
var inst_19140 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19156__$1 = state_19156;
var statearr_19163_19274 = state_19156__$1;
(statearr_19163_19274[(2)] = inst_19140);

(statearr_19163_19274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (4))){
var inst_19137 = (state_19156[(10)]);
var inst_19137__$1 = (state_19156[(2)]);
var inst_19138 = (inst_19137__$1 == null);
var state_19156__$1 = (function (){var statearr_19164 = state_19156;
(statearr_19164[(10)] = inst_19137__$1);

return statearr_19164;
})();
if(cljs.core.truth_(inst_19138)){
var statearr_19165_19275 = state_19156__$1;
(statearr_19165_19275[(1)] = (5));

} else {
var statearr_19166_19276 = state_19156__$1;
(statearr_19166_19276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (3))){
var inst_19154 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19156__$1,inst_19154);
} else {
if((state_val_19157 === (2))){
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19156__$1,(4),from);
} else {
if((state_val_19157 === (1))){
var state_19156__$1 = state_19156;
var statearr_19167_19277 = state_19156__$1;
(statearr_19167_19277[(2)] = null);

(statearr_19167_19277[(1)] = (2));


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
});})(c__6474__auto___19271,jobs,results,process,async))
;
return ((function (switch__6459__auto__,c__6474__auto___19271,jobs,results,process,async){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19171[(0)] = state_machine__6460__auto__);

(statearr_19171[(1)] = (1));

return statearr_19171;
});
var state_machine__6460__auto____1 = (function (state_19156){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19172){if((e19172 instanceof Object)){
var ex__6463__auto__ = e19172;
var statearr_19173_19278 = state_19156;
(statearr_19173_19278[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19279 = state_19156;
state_19156 = G__19279;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19156){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___19271,jobs,results,process,async))
})();
var state__6476__auto__ = (function (){var statearr_19174 = f__6475__auto__.call(null);
(statearr_19174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___19271);

return statearr_19174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___19271,jobs,results,process,async))
);


var c__6474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto__,jobs,results,process,async){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto__,jobs,results,process,async){
return (function (state_19212){
var state_val_19213 = (state_19212[(1)]);
if((state_val_19213 === (7))){
var inst_19208 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19214_19280 = state_19212__$1;
(statearr_19214_19280[(2)] = inst_19208);

(statearr_19214_19280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (20))){
var state_19212__$1 = state_19212;
var statearr_19215_19281 = state_19212__$1;
(statearr_19215_19281[(2)] = null);

(statearr_19215_19281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (1))){
var state_19212__$1 = state_19212;
var statearr_19216_19282 = state_19212__$1;
(statearr_19216_19282[(2)] = null);

(statearr_19216_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (4))){
var inst_19177 = (state_19212[(7)]);
var inst_19177__$1 = (state_19212[(2)]);
var inst_19178 = (inst_19177__$1 == null);
var state_19212__$1 = (function (){var statearr_19217 = state_19212;
(statearr_19217[(7)] = inst_19177__$1);

return statearr_19217;
})();
if(cljs.core.truth_(inst_19178)){
var statearr_19218_19283 = state_19212__$1;
(statearr_19218_19283[(1)] = (5));

} else {
var statearr_19219_19284 = state_19212__$1;
(statearr_19219_19284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (15))){
var inst_19190 = (state_19212[(8)]);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19212__$1,(18),to,inst_19190);
} else {
if((state_val_19213 === (21))){
var inst_19203 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19220_19285 = state_19212__$1;
(statearr_19220_19285[(2)] = inst_19203);

(statearr_19220_19285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (13))){
var inst_19205 = (state_19212[(2)]);
var state_19212__$1 = (function (){var statearr_19221 = state_19212;
(statearr_19221[(9)] = inst_19205);

return statearr_19221;
})();
var statearr_19222_19286 = state_19212__$1;
(statearr_19222_19286[(2)] = null);

(statearr_19222_19286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (6))){
var inst_19177 = (state_19212[(7)]);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19212__$1,(11),inst_19177);
} else {
if((state_val_19213 === (17))){
var inst_19198 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
if(cljs.core.truth_(inst_19198)){
var statearr_19223_19287 = state_19212__$1;
(statearr_19223_19287[(1)] = (19));

} else {
var statearr_19224_19288 = state_19212__$1;
(statearr_19224_19288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (3))){
var inst_19210 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19212__$1,inst_19210);
} else {
if((state_val_19213 === (12))){
var inst_19187 = (state_19212[(10)]);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19212__$1,(14),inst_19187);
} else {
if((state_val_19213 === (2))){
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19212__$1,(4),results);
} else {
if((state_val_19213 === (19))){
var state_19212__$1 = state_19212;
var statearr_19225_19289 = state_19212__$1;
(statearr_19225_19289[(2)] = null);

(statearr_19225_19289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (11))){
var inst_19187 = (state_19212[(2)]);
var state_19212__$1 = (function (){var statearr_19226 = state_19212;
(statearr_19226[(10)] = inst_19187);

return statearr_19226;
})();
var statearr_19227_19290 = state_19212__$1;
(statearr_19227_19290[(2)] = null);

(statearr_19227_19290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (9))){
var state_19212__$1 = state_19212;
var statearr_19228_19291 = state_19212__$1;
(statearr_19228_19291[(2)] = null);

(statearr_19228_19291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (5))){
var state_19212__$1 = state_19212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19229_19292 = state_19212__$1;
(statearr_19229_19292[(1)] = (8));

} else {
var statearr_19230_19293 = state_19212__$1;
(statearr_19230_19293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (14))){
var inst_19190 = (state_19212[(8)]);
var inst_19192 = (state_19212[(11)]);
var inst_19190__$1 = (state_19212[(2)]);
var inst_19191 = (inst_19190__$1 == null);
var inst_19192__$1 = cljs.core.not.call(null,inst_19191);
var state_19212__$1 = (function (){var statearr_19231 = state_19212;
(statearr_19231[(8)] = inst_19190__$1);

(statearr_19231[(11)] = inst_19192__$1);

return statearr_19231;
})();
if(inst_19192__$1){
var statearr_19232_19294 = state_19212__$1;
(statearr_19232_19294[(1)] = (15));

} else {
var statearr_19233_19295 = state_19212__$1;
(statearr_19233_19295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (16))){
var inst_19192 = (state_19212[(11)]);
var state_19212__$1 = state_19212;
var statearr_19234_19296 = state_19212__$1;
(statearr_19234_19296[(2)] = inst_19192);

(statearr_19234_19296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (10))){
var inst_19184 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19235_19297 = state_19212__$1;
(statearr_19235_19297[(2)] = inst_19184);

(statearr_19235_19297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (18))){
var inst_19195 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19236_19298 = state_19212__$1;
(statearr_19236_19298[(2)] = inst_19195);

(statearr_19236_19298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (8))){
var inst_19181 = cljs.core.async.close_BANG_.call(null,to);
var state_19212__$1 = state_19212;
var statearr_19237_19299 = state_19212__$1;
(statearr_19237_19299[(2)] = inst_19181);

(statearr_19237_19299[(1)] = (10));


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
});})(c__6474__auto__,jobs,results,process,async))
;
return ((function (switch__6459__auto__,c__6474__auto__,jobs,results,process,async){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19241[(0)] = state_machine__6460__auto__);

(statearr_19241[(1)] = (1));

return statearr_19241;
});
var state_machine__6460__auto____1 = (function (state_19212){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19242){if((e19242 instanceof Object)){
var ex__6463__auto__ = e19242;
var statearr_19243_19300 = state_19212;
(statearr_19243_19300[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19301 = state_19212;
state_19212 = G__19301;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19212){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto__,jobs,results,process,async))
})();
var state__6476__auto__ = (function (){var statearr_19244 = f__6475__auto__.call(null);
(statearr_19244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto__);

return statearr_19244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto__,jobs,results,process,async))
);

return c__6474__auto__;
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
var c__6474__auto___19402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___19402,tc,fc){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___19402,tc,fc){
return (function (state_19377){
var state_val_19378 = (state_19377[(1)]);
if((state_val_19378 === (7))){
var inst_19373 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
var statearr_19379_19403 = state_19377__$1;
(statearr_19379_19403[(2)] = inst_19373);

(statearr_19379_19403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (1))){
var state_19377__$1 = state_19377;
var statearr_19380_19404 = state_19377__$1;
(statearr_19380_19404[(2)] = null);

(statearr_19380_19404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (4))){
var inst_19354 = (state_19377[(7)]);
var inst_19354__$1 = (state_19377[(2)]);
var inst_19355 = (inst_19354__$1 == null);
var state_19377__$1 = (function (){var statearr_19381 = state_19377;
(statearr_19381[(7)] = inst_19354__$1);

return statearr_19381;
})();
if(cljs.core.truth_(inst_19355)){
var statearr_19382_19405 = state_19377__$1;
(statearr_19382_19405[(1)] = (5));

} else {
var statearr_19383_19406 = state_19377__$1;
(statearr_19383_19406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (13))){
var state_19377__$1 = state_19377;
var statearr_19384_19407 = state_19377__$1;
(statearr_19384_19407[(2)] = null);

(statearr_19384_19407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (6))){
var inst_19354 = (state_19377[(7)]);
var inst_19360 = p.call(null,inst_19354);
var state_19377__$1 = state_19377;
if(cljs.core.truth_(inst_19360)){
var statearr_19385_19408 = state_19377__$1;
(statearr_19385_19408[(1)] = (9));

} else {
var statearr_19386_19409 = state_19377__$1;
(statearr_19386_19409[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (3))){
var inst_19375 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19377__$1,inst_19375);
} else {
if((state_val_19378 === (12))){
var state_19377__$1 = state_19377;
var statearr_19387_19410 = state_19377__$1;
(statearr_19387_19410[(2)] = null);

(statearr_19387_19410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (2))){
var state_19377__$1 = state_19377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19377__$1,(4),ch);
} else {
if((state_val_19378 === (11))){
var inst_19354 = (state_19377[(7)]);
var inst_19364 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19377__$1,(8),inst_19364,inst_19354);
} else {
if((state_val_19378 === (9))){
var state_19377__$1 = state_19377;
var statearr_19388_19411 = state_19377__$1;
(statearr_19388_19411[(2)] = tc);

(statearr_19388_19411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (5))){
var inst_19357 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19358 = cljs.core.async.close_BANG_.call(null,fc);
var state_19377__$1 = (function (){var statearr_19389 = state_19377;
(statearr_19389[(8)] = inst_19357);

return statearr_19389;
})();
var statearr_19390_19412 = state_19377__$1;
(statearr_19390_19412[(2)] = inst_19358);

(statearr_19390_19412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (14))){
var inst_19371 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
var statearr_19391_19413 = state_19377__$1;
(statearr_19391_19413[(2)] = inst_19371);

(statearr_19391_19413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (10))){
var state_19377__$1 = state_19377;
var statearr_19392_19414 = state_19377__$1;
(statearr_19392_19414[(2)] = fc);

(statearr_19392_19414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (8))){
var inst_19366 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
if(cljs.core.truth_(inst_19366)){
var statearr_19393_19415 = state_19377__$1;
(statearr_19393_19415[(1)] = (12));

} else {
var statearr_19394_19416 = state_19377__$1;
(statearr_19394_19416[(1)] = (13));

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
});})(c__6474__auto___19402,tc,fc))
;
return ((function (switch__6459__auto__,c__6474__auto___19402,tc,fc){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19398 = [null,null,null,null,null,null,null,null,null];
(statearr_19398[(0)] = state_machine__6460__auto__);

(statearr_19398[(1)] = (1));

return statearr_19398;
});
var state_machine__6460__auto____1 = (function (state_19377){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19399){if((e19399 instanceof Object)){
var ex__6463__auto__ = e19399;
var statearr_19400_19417 = state_19377;
(statearr_19400_19417[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19418 = state_19377;
state_19377 = G__19418;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19377){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___19402,tc,fc))
})();
var state__6476__auto__ = (function (){var statearr_19401 = f__6475__auto__.call(null);
(statearr_19401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___19402);

return statearr_19401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___19402,tc,fc))
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
var c__6474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto__){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto__){
return (function (state_19465){
var state_val_19466 = (state_19465[(1)]);
if((state_val_19466 === (7))){
var inst_19461 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19467_19483 = state_19465__$1;
(statearr_19467_19483[(2)] = inst_19461);

(statearr_19467_19483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (6))){
var inst_19454 = (state_19465[(7)]);
var inst_19451 = (state_19465[(8)]);
var inst_19458 = f.call(null,inst_19451,inst_19454);
var inst_19451__$1 = inst_19458;
var state_19465__$1 = (function (){var statearr_19468 = state_19465;
(statearr_19468[(8)] = inst_19451__$1);

return statearr_19468;
})();
var statearr_19469_19484 = state_19465__$1;
(statearr_19469_19484[(2)] = null);

(statearr_19469_19484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (5))){
var inst_19451 = (state_19465[(8)]);
var state_19465__$1 = state_19465;
var statearr_19470_19485 = state_19465__$1;
(statearr_19470_19485[(2)] = inst_19451);

(statearr_19470_19485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (4))){
var inst_19454 = (state_19465[(7)]);
var inst_19454__$1 = (state_19465[(2)]);
var inst_19455 = (inst_19454__$1 == null);
var state_19465__$1 = (function (){var statearr_19471 = state_19465;
(statearr_19471[(7)] = inst_19454__$1);

return statearr_19471;
})();
if(cljs.core.truth_(inst_19455)){
var statearr_19472_19486 = state_19465__$1;
(statearr_19472_19486[(1)] = (5));

} else {
var statearr_19473_19487 = state_19465__$1;
(statearr_19473_19487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (3))){
var inst_19463 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19465__$1,inst_19463);
} else {
if((state_val_19466 === (2))){
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19465__$1,(4),ch);
} else {
if((state_val_19466 === (1))){
var inst_19451 = init;
var state_19465__$1 = (function (){var statearr_19474 = state_19465;
(statearr_19474[(8)] = inst_19451);

return statearr_19474;
})();
var statearr_19475_19488 = state_19465__$1;
(statearr_19475_19488[(2)] = null);

(statearr_19475_19488[(1)] = (2));


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
});})(c__6474__auto__))
;
return ((function (switch__6459__auto__,c__6474__auto__){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19479 = [null,null,null,null,null,null,null,null,null];
(statearr_19479[(0)] = state_machine__6460__auto__);

(statearr_19479[(1)] = (1));

return statearr_19479;
});
var state_machine__6460__auto____1 = (function (state_19465){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19480){if((e19480 instanceof Object)){
var ex__6463__auto__ = e19480;
var statearr_19481_19489 = state_19465;
(statearr_19481_19489[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19490 = state_19465;
state_19465 = G__19490;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19465){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto__))
})();
var state__6476__auto__ = (function (){var statearr_19482 = f__6475__auto__.call(null);
(statearr_19482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto__);

return statearr_19482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto__))
);

return c__6474__auto__;
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
var c__6474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto__){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto__){
return (function (state_19564){
var state_val_19565 = (state_19564[(1)]);
if((state_val_19565 === (7))){
var inst_19546 = (state_19564[(2)]);
var state_19564__$1 = state_19564;
var statearr_19566_19589 = state_19564__$1;
(statearr_19566_19589[(2)] = inst_19546);

(statearr_19566_19589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (1))){
var inst_19540 = cljs.core.seq.call(null,coll);
var inst_19541 = inst_19540;
var state_19564__$1 = (function (){var statearr_19567 = state_19564;
(statearr_19567[(7)] = inst_19541);

return statearr_19567;
})();
var statearr_19568_19590 = state_19564__$1;
(statearr_19568_19590[(2)] = null);

(statearr_19568_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (4))){
var inst_19541 = (state_19564[(7)]);
var inst_19544 = cljs.core.first.call(null,inst_19541);
var state_19564__$1 = state_19564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19564__$1,(7),ch,inst_19544);
} else {
if((state_val_19565 === (13))){
var inst_19558 = (state_19564[(2)]);
var state_19564__$1 = state_19564;
var statearr_19569_19591 = state_19564__$1;
(statearr_19569_19591[(2)] = inst_19558);

(statearr_19569_19591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (6))){
var inst_19549 = (state_19564[(2)]);
var state_19564__$1 = state_19564;
if(cljs.core.truth_(inst_19549)){
var statearr_19570_19592 = state_19564__$1;
(statearr_19570_19592[(1)] = (8));

} else {
var statearr_19571_19593 = state_19564__$1;
(statearr_19571_19593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (3))){
var inst_19562 = (state_19564[(2)]);
var state_19564__$1 = state_19564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19564__$1,inst_19562);
} else {
if((state_val_19565 === (12))){
var state_19564__$1 = state_19564;
var statearr_19572_19594 = state_19564__$1;
(statearr_19572_19594[(2)] = null);

(statearr_19572_19594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (2))){
var inst_19541 = (state_19564[(7)]);
var state_19564__$1 = state_19564;
if(cljs.core.truth_(inst_19541)){
var statearr_19573_19595 = state_19564__$1;
(statearr_19573_19595[(1)] = (4));

} else {
var statearr_19574_19596 = state_19564__$1;
(statearr_19574_19596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (11))){
var inst_19555 = cljs.core.async.close_BANG_.call(null,ch);
var state_19564__$1 = state_19564;
var statearr_19575_19597 = state_19564__$1;
(statearr_19575_19597[(2)] = inst_19555);

(statearr_19575_19597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (9))){
var state_19564__$1 = state_19564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19576_19598 = state_19564__$1;
(statearr_19576_19598[(1)] = (11));

} else {
var statearr_19577_19599 = state_19564__$1;
(statearr_19577_19599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (5))){
var inst_19541 = (state_19564[(7)]);
var state_19564__$1 = state_19564;
var statearr_19578_19600 = state_19564__$1;
(statearr_19578_19600[(2)] = inst_19541);

(statearr_19578_19600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (10))){
var inst_19560 = (state_19564[(2)]);
var state_19564__$1 = state_19564;
var statearr_19579_19601 = state_19564__$1;
(statearr_19579_19601[(2)] = inst_19560);

(statearr_19579_19601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19565 === (8))){
var inst_19541 = (state_19564[(7)]);
var inst_19551 = cljs.core.next.call(null,inst_19541);
var inst_19541__$1 = inst_19551;
var state_19564__$1 = (function (){var statearr_19580 = state_19564;
(statearr_19580[(7)] = inst_19541__$1);

return statearr_19580;
})();
var statearr_19581_19602 = state_19564__$1;
(statearr_19581_19602[(2)] = null);

(statearr_19581_19602[(1)] = (2));


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
});})(c__6474__auto__))
;
return ((function (switch__6459__auto__,c__6474__auto__){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_19585 = [null,null,null,null,null,null,null,null];
(statearr_19585[(0)] = state_machine__6460__auto__);

(statearr_19585[(1)] = (1));

return statearr_19585;
});
var state_machine__6460__auto____1 = (function (state_19564){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e19586){if((e19586 instanceof Object)){
var ex__6463__auto__ = e19586;
var statearr_19587_19603 = state_19564;
(statearr_19587_19603[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19604 = state_19564;
state_19564 = G__19604;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19564){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto__))
})();
var state__6476__auto__ = (function (){var statearr_19588 = f__6475__auto__.call(null);
(statearr_19588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto__);

return statearr_19588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto__))
);

return c__6474__auto__;
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

cljs.core.async.Mux = (function (){var obj19606 = {};
return obj19606;
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


cljs.core.async.Mult = (function (){var obj19608 = {};
return obj19608;
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
if(typeof cljs.core.async.t19830 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19830 = (function (cs,ch,mult,meta19831){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19831 = meta19831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19830.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19830.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19830.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19830.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19830.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19832){
var self__ = this;
var _19832__$1 = this;
return self__.meta19831;
});})(cs))
;

cljs.core.async.t19830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19832,meta19831__$1){
var self__ = this;
var _19832__$1 = this;
return (new cljs.core.async.t19830(self__.cs,self__.ch,self__.mult,meta19831__$1));
});})(cs))
;

cljs.core.async.t19830.cljs$lang$type = true;

cljs.core.async.t19830.cljs$lang$ctorStr = "cljs.core.async/t19830";

cljs.core.async.t19830.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19830");
});})(cs))
;

cljs.core.async.__GT_t19830 = ((function (cs){
return (function __GT_t19830(cs__$1,ch__$1,mult__$1,meta19831){
return (new cljs.core.async.t19830(cs__$1,ch__$1,mult__$1,meta19831));
});})(cs))
;

}

return (new cljs.core.async.t19830(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6474__auto___20051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___20051,cs,m,dchan,dctr,done){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___20051,cs,m,dchan,dctr,done){
return (function (state_19963){
var state_val_19964 = (state_19963[(1)]);
if((state_val_19964 === (7))){
var inst_19959 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_19965_20052 = state_19963__$1;
(statearr_19965_20052[(2)] = inst_19959);

(statearr_19965_20052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (20))){
var inst_19864 = (state_19963[(7)]);
var inst_19874 = cljs.core.first.call(null,inst_19864);
var inst_19875 = cljs.core.nth.call(null,inst_19874,(0),null);
var inst_19876 = cljs.core.nth.call(null,inst_19874,(1),null);
var state_19963__$1 = (function (){var statearr_19966 = state_19963;
(statearr_19966[(8)] = inst_19875);

return statearr_19966;
})();
if(cljs.core.truth_(inst_19876)){
var statearr_19967_20053 = state_19963__$1;
(statearr_19967_20053[(1)] = (22));

} else {
var statearr_19968_20054 = state_19963__$1;
(statearr_19968_20054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (27))){
var inst_19911 = (state_19963[(9)]);
var inst_19835 = (state_19963[(10)]);
var inst_19906 = (state_19963[(11)]);
var inst_19904 = (state_19963[(12)]);
var inst_19911__$1 = cljs.core._nth.call(null,inst_19904,inst_19906);
var inst_19912 = cljs.core.async.put_BANG_.call(null,inst_19911__$1,inst_19835,done);
var state_19963__$1 = (function (){var statearr_19969 = state_19963;
(statearr_19969[(9)] = inst_19911__$1);

return statearr_19969;
})();
if(cljs.core.truth_(inst_19912)){
var statearr_19970_20055 = state_19963__$1;
(statearr_19970_20055[(1)] = (30));

} else {
var statearr_19971_20056 = state_19963__$1;
(statearr_19971_20056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (1))){
var state_19963__$1 = state_19963;
var statearr_19972_20057 = state_19963__$1;
(statearr_19972_20057[(2)] = null);

(statearr_19972_20057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (24))){
var inst_19864 = (state_19963[(7)]);
var inst_19881 = (state_19963[(2)]);
var inst_19882 = cljs.core.next.call(null,inst_19864);
var inst_19844 = inst_19882;
var inst_19845 = null;
var inst_19846 = (0);
var inst_19847 = (0);
var state_19963__$1 = (function (){var statearr_19973 = state_19963;
(statearr_19973[(13)] = inst_19881);

(statearr_19973[(14)] = inst_19844);

(statearr_19973[(15)] = inst_19846);

(statearr_19973[(16)] = inst_19845);

(statearr_19973[(17)] = inst_19847);

return statearr_19973;
})();
var statearr_19974_20058 = state_19963__$1;
(statearr_19974_20058[(2)] = null);

(statearr_19974_20058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (39))){
var state_19963__$1 = state_19963;
var statearr_19978_20059 = state_19963__$1;
(statearr_19978_20059[(2)] = null);

(statearr_19978_20059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (4))){
var inst_19835 = (state_19963[(10)]);
var inst_19835__$1 = (state_19963[(2)]);
var inst_19836 = (inst_19835__$1 == null);
var state_19963__$1 = (function (){var statearr_19979 = state_19963;
(statearr_19979[(10)] = inst_19835__$1);

return statearr_19979;
})();
if(cljs.core.truth_(inst_19836)){
var statearr_19980_20060 = state_19963__$1;
(statearr_19980_20060[(1)] = (5));

} else {
var statearr_19981_20061 = state_19963__$1;
(statearr_19981_20061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (15))){
var inst_19844 = (state_19963[(14)]);
var inst_19846 = (state_19963[(15)]);
var inst_19845 = (state_19963[(16)]);
var inst_19847 = (state_19963[(17)]);
var inst_19860 = (state_19963[(2)]);
var inst_19861 = (inst_19847 + (1));
var tmp19975 = inst_19844;
var tmp19976 = inst_19846;
var tmp19977 = inst_19845;
var inst_19844__$1 = tmp19975;
var inst_19845__$1 = tmp19977;
var inst_19846__$1 = tmp19976;
var inst_19847__$1 = inst_19861;
var state_19963__$1 = (function (){var statearr_19982 = state_19963;
(statearr_19982[(18)] = inst_19860);

(statearr_19982[(14)] = inst_19844__$1);

(statearr_19982[(15)] = inst_19846__$1);

(statearr_19982[(16)] = inst_19845__$1);

(statearr_19982[(17)] = inst_19847__$1);

return statearr_19982;
})();
var statearr_19983_20062 = state_19963__$1;
(statearr_19983_20062[(2)] = null);

(statearr_19983_20062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (21))){
var inst_19885 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_19987_20063 = state_19963__$1;
(statearr_19987_20063[(2)] = inst_19885);

(statearr_19987_20063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (31))){
var inst_19911 = (state_19963[(9)]);
var inst_19915 = done.call(null,null);
var inst_19916 = cljs.core.async.untap_STAR_.call(null,m,inst_19911);
var state_19963__$1 = (function (){var statearr_19988 = state_19963;
(statearr_19988[(19)] = inst_19915);

return statearr_19988;
})();
var statearr_19989_20064 = state_19963__$1;
(statearr_19989_20064[(2)] = inst_19916);

(statearr_19989_20064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (32))){
var inst_19903 = (state_19963[(20)]);
var inst_19905 = (state_19963[(21)]);
var inst_19906 = (state_19963[(11)]);
var inst_19904 = (state_19963[(12)]);
var inst_19918 = (state_19963[(2)]);
var inst_19919 = (inst_19906 + (1));
var tmp19984 = inst_19903;
var tmp19985 = inst_19905;
var tmp19986 = inst_19904;
var inst_19903__$1 = tmp19984;
var inst_19904__$1 = tmp19986;
var inst_19905__$1 = tmp19985;
var inst_19906__$1 = inst_19919;
var state_19963__$1 = (function (){var statearr_19990 = state_19963;
(statearr_19990[(22)] = inst_19918);

(statearr_19990[(20)] = inst_19903__$1);

(statearr_19990[(21)] = inst_19905__$1);

(statearr_19990[(11)] = inst_19906__$1);

(statearr_19990[(12)] = inst_19904__$1);

return statearr_19990;
})();
var statearr_19991_20065 = state_19963__$1;
(statearr_19991_20065[(2)] = null);

(statearr_19991_20065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (40))){
var inst_19931 = (state_19963[(23)]);
var inst_19935 = done.call(null,null);
var inst_19936 = cljs.core.async.untap_STAR_.call(null,m,inst_19931);
var state_19963__$1 = (function (){var statearr_19992 = state_19963;
(statearr_19992[(24)] = inst_19935);

return statearr_19992;
})();
var statearr_19993_20066 = state_19963__$1;
(statearr_19993_20066[(2)] = inst_19936);

(statearr_19993_20066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (33))){
var inst_19922 = (state_19963[(25)]);
var inst_19924 = cljs.core.chunked_seq_QMARK_.call(null,inst_19922);
var state_19963__$1 = state_19963;
if(inst_19924){
var statearr_19994_20067 = state_19963__$1;
(statearr_19994_20067[(1)] = (36));

} else {
var statearr_19995_20068 = state_19963__$1;
(statearr_19995_20068[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (13))){
var inst_19854 = (state_19963[(26)]);
var inst_19857 = cljs.core.async.close_BANG_.call(null,inst_19854);
var state_19963__$1 = state_19963;
var statearr_19996_20069 = state_19963__$1;
(statearr_19996_20069[(2)] = inst_19857);

(statearr_19996_20069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (22))){
var inst_19875 = (state_19963[(8)]);
var inst_19878 = cljs.core.async.close_BANG_.call(null,inst_19875);
var state_19963__$1 = state_19963;
var statearr_19997_20070 = state_19963__$1;
(statearr_19997_20070[(2)] = inst_19878);

(statearr_19997_20070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (36))){
var inst_19922 = (state_19963[(25)]);
var inst_19926 = cljs.core.chunk_first.call(null,inst_19922);
var inst_19927 = cljs.core.chunk_rest.call(null,inst_19922);
var inst_19928 = cljs.core.count.call(null,inst_19926);
var inst_19903 = inst_19927;
var inst_19904 = inst_19926;
var inst_19905 = inst_19928;
var inst_19906 = (0);
var state_19963__$1 = (function (){var statearr_19998 = state_19963;
(statearr_19998[(20)] = inst_19903);

(statearr_19998[(21)] = inst_19905);

(statearr_19998[(11)] = inst_19906);

(statearr_19998[(12)] = inst_19904);

return statearr_19998;
})();
var statearr_19999_20071 = state_19963__$1;
(statearr_19999_20071[(2)] = null);

(statearr_19999_20071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (41))){
var inst_19922 = (state_19963[(25)]);
var inst_19938 = (state_19963[(2)]);
var inst_19939 = cljs.core.next.call(null,inst_19922);
var inst_19903 = inst_19939;
var inst_19904 = null;
var inst_19905 = (0);
var inst_19906 = (0);
var state_19963__$1 = (function (){var statearr_20000 = state_19963;
(statearr_20000[(27)] = inst_19938);

(statearr_20000[(20)] = inst_19903);

(statearr_20000[(21)] = inst_19905);

(statearr_20000[(11)] = inst_19906);

(statearr_20000[(12)] = inst_19904);

return statearr_20000;
})();
var statearr_20001_20072 = state_19963__$1;
(statearr_20001_20072[(2)] = null);

(statearr_20001_20072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (43))){
var state_19963__$1 = state_19963;
var statearr_20002_20073 = state_19963__$1;
(statearr_20002_20073[(2)] = null);

(statearr_20002_20073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (29))){
var inst_19947 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_20003_20074 = state_19963__$1;
(statearr_20003_20074[(2)] = inst_19947);

(statearr_20003_20074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (44))){
var inst_19956 = (state_19963[(2)]);
var state_19963__$1 = (function (){var statearr_20004 = state_19963;
(statearr_20004[(28)] = inst_19956);

return statearr_20004;
})();
var statearr_20005_20075 = state_19963__$1;
(statearr_20005_20075[(2)] = null);

(statearr_20005_20075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (6))){
var inst_19895 = (state_19963[(29)]);
var inst_19894 = cljs.core.deref.call(null,cs);
var inst_19895__$1 = cljs.core.keys.call(null,inst_19894);
var inst_19896 = cljs.core.count.call(null,inst_19895__$1);
var inst_19897 = cljs.core.reset_BANG_.call(null,dctr,inst_19896);
var inst_19902 = cljs.core.seq.call(null,inst_19895__$1);
var inst_19903 = inst_19902;
var inst_19904 = null;
var inst_19905 = (0);
var inst_19906 = (0);
var state_19963__$1 = (function (){var statearr_20006 = state_19963;
(statearr_20006[(30)] = inst_19897);

(statearr_20006[(29)] = inst_19895__$1);

(statearr_20006[(20)] = inst_19903);

(statearr_20006[(21)] = inst_19905);

(statearr_20006[(11)] = inst_19906);

(statearr_20006[(12)] = inst_19904);

return statearr_20006;
})();
var statearr_20007_20076 = state_19963__$1;
(statearr_20007_20076[(2)] = null);

(statearr_20007_20076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (28))){
var inst_19903 = (state_19963[(20)]);
var inst_19922 = (state_19963[(25)]);
var inst_19922__$1 = cljs.core.seq.call(null,inst_19903);
var state_19963__$1 = (function (){var statearr_20008 = state_19963;
(statearr_20008[(25)] = inst_19922__$1);

return statearr_20008;
})();
if(inst_19922__$1){
var statearr_20009_20077 = state_19963__$1;
(statearr_20009_20077[(1)] = (33));

} else {
var statearr_20010_20078 = state_19963__$1;
(statearr_20010_20078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (25))){
var inst_19905 = (state_19963[(21)]);
var inst_19906 = (state_19963[(11)]);
var inst_19908 = (inst_19906 < inst_19905);
var inst_19909 = inst_19908;
var state_19963__$1 = state_19963;
if(cljs.core.truth_(inst_19909)){
var statearr_20011_20079 = state_19963__$1;
(statearr_20011_20079[(1)] = (27));

} else {
var statearr_20012_20080 = state_19963__$1;
(statearr_20012_20080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (34))){
var state_19963__$1 = state_19963;
var statearr_20013_20081 = state_19963__$1;
(statearr_20013_20081[(2)] = null);

(statearr_20013_20081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (17))){
var state_19963__$1 = state_19963;
var statearr_20014_20082 = state_19963__$1;
(statearr_20014_20082[(2)] = null);

(statearr_20014_20082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (3))){
var inst_19961 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19963__$1,inst_19961);
} else {
if((state_val_19964 === (12))){
var inst_19890 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_20015_20083 = state_19963__$1;
(statearr_20015_20083[(2)] = inst_19890);

(statearr_20015_20083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (2))){
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19963__$1,(4),ch);
} else {
if((state_val_19964 === (23))){
var state_19963__$1 = state_19963;
var statearr_20016_20084 = state_19963__$1;
(statearr_20016_20084[(2)] = null);

(statearr_20016_20084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (35))){
var inst_19945 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_20017_20085 = state_19963__$1;
(statearr_20017_20085[(2)] = inst_19945);

(statearr_20017_20085[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (19))){
var inst_19864 = (state_19963[(7)]);
var inst_19868 = cljs.core.chunk_first.call(null,inst_19864);
var inst_19869 = cljs.core.chunk_rest.call(null,inst_19864);
var inst_19870 = cljs.core.count.call(null,inst_19868);
var inst_19844 = inst_19869;
var inst_19845 = inst_19868;
var inst_19846 = inst_19870;
var inst_19847 = (0);
var state_19963__$1 = (function (){var statearr_20018 = state_19963;
(statearr_20018[(14)] = inst_19844);

(statearr_20018[(15)] = inst_19846);

(statearr_20018[(16)] = inst_19845);

(statearr_20018[(17)] = inst_19847);

return statearr_20018;
})();
var statearr_20019_20086 = state_19963__$1;
(statearr_20019_20086[(2)] = null);

(statearr_20019_20086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (11))){
var inst_19844 = (state_19963[(14)]);
var inst_19864 = (state_19963[(7)]);
var inst_19864__$1 = cljs.core.seq.call(null,inst_19844);
var state_19963__$1 = (function (){var statearr_20020 = state_19963;
(statearr_20020[(7)] = inst_19864__$1);

return statearr_20020;
})();
if(inst_19864__$1){
var statearr_20021_20087 = state_19963__$1;
(statearr_20021_20087[(1)] = (16));

} else {
var statearr_20022_20088 = state_19963__$1;
(statearr_20022_20088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (9))){
var inst_19892 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_20023_20089 = state_19963__$1;
(statearr_20023_20089[(2)] = inst_19892);

(statearr_20023_20089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (5))){
var inst_19842 = cljs.core.deref.call(null,cs);
var inst_19843 = cljs.core.seq.call(null,inst_19842);
var inst_19844 = inst_19843;
var inst_19845 = null;
var inst_19846 = (0);
var inst_19847 = (0);
var state_19963__$1 = (function (){var statearr_20024 = state_19963;
(statearr_20024[(14)] = inst_19844);

(statearr_20024[(15)] = inst_19846);

(statearr_20024[(16)] = inst_19845);

(statearr_20024[(17)] = inst_19847);

return statearr_20024;
})();
var statearr_20025_20090 = state_19963__$1;
(statearr_20025_20090[(2)] = null);

(statearr_20025_20090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (14))){
var state_19963__$1 = state_19963;
var statearr_20026_20091 = state_19963__$1;
(statearr_20026_20091[(2)] = null);

(statearr_20026_20091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (45))){
var inst_19953 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_20027_20092 = state_19963__$1;
(statearr_20027_20092[(2)] = inst_19953);

(statearr_20027_20092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (26))){
var inst_19895 = (state_19963[(29)]);
var inst_19949 = (state_19963[(2)]);
var inst_19950 = cljs.core.seq.call(null,inst_19895);
var state_19963__$1 = (function (){var statearr_20028 = state_19963;
(statearr_20028[(31)] = inst_19949);

return statearr_20028;
})();
if(inst_19950){
var statearr_20029_20093 = state_19963__$1;
(statearr_20029_20093[(1)] = (42));

} else {
var statearr_20030_20094 = state_19963__$1;
(statearr_20030_20094[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (16))){
var inst_19864 = (state_19963[(7)]);
var inst_19866 = cljs.core.chunked_seq_QMARK_.call(null,inst_19864);
var state_19963__$1 = state_19963;
if(inst_19866){
var statearr_20031_20095 = state_19963__$1;
(statearr_20031_20095[(1)] = (19));

} else {
var statearr_20032_20096 = state_19963__$1;
(statearr_20032_20096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (38))){
var inst_19942 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_20033_20097 = state_19963__$1;
(statearr_20033_20097[(2)] = inst_19942);

(statearr_20033_20097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (30))){
var state_19963__$1 = state_19963;
var statearr_20034_20098 = state_19963__$1;
(statearr_20034_20098[(2)] = null);

(statearr_20034_20098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (10))){
var inst_19845 = (state_19963[(16)]);
var inst_19847 = (state_19963[(17)]);
var inst_19853 = cljs.core._nth.call(null,inst_19845,inst_19847);
var inst_19854 = cljs.core.nth.call(null,inst_19853,(0),null);
var inst_19855 = cljs.core.nth.call(null,inst_19853,(1),null);
var state_19963__$1 = (function (){var statearr_20035 = state_19963;
(statearr_20035[(26)] = inst_19854);

return statearr_20035;
})();
if(cljs.core.truth_(inst_19855)){
var statearr_20036_20099 = state_19963__$1;
(statearr_20036_20099[(1)] = (13));

} else {
var statearr_20037_20100 = state_19963__$1;
(statearr_20037_20100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (18))){
var inst_19888 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_20038_20101 = state_19963__$1;
(statearr_20038_20101[(2)] = inst_19888);

(statearr_20038_20101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (42))){
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19963__$1,(45),dchan);
} else {
if((state_val_19964 === (37))){
var inst_19835 = (state_19963[(10)]);
var inst_19922 = (state_19963[(25)]);
var inst_19931 = (state_19963[(23)]);
var inst_19931__$1 = cljs.core.first.call(null,inst_19922);
var inst_19932 = cljs.core.async.put_BANG_.call(null,inst_19931__$1,inst_19835,done);
var state_19963__$1 = (function (){var statearr_20039 = state_19963;
(statearr_20039[(23)] = inst_19931__$1);

return statearr_20039;
})();
if(cljs.core.truth_(inst_19932)){
var statearr_20040_20102 = state_19963__$1;
(statearr_20040_20102[(1)] = (39));

} else {
var statearr_20041_20103 = state_19963__$1;
(statearr_20041_20103[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19964 === (8))){
var inst_19846 = (state_19963[(15)]);
var inst_19847 = (state_19963[(17)]);
var inst_19849 = (inst_19847 < inst_19846);
var inst_19850 = inst_19849;
var state_19963__$1 = state_19963;
if(cljs.core.truth_(inst_19850)){
var statearr_20042_20104 = state_19963__$1;
(statearr_20042_20104[(1)] = (10));

} else {
var statearr_20043_20105 = state_19963__$1;
(statearr_20043_20105[(1)] = (11));

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
});})(c__6474__auto___20051,cs,m,dchan,dctr,done))
;
return ((function (switch__6459__auto__,c__6474__auto___20051,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_20047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20047[(0)] = state_machine__6460__auto__);

(statearr_20047[(1)] = (1));

return statearr_20047;
});
var state_machine__6460__auto____1 = (function (state_19963){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_19963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e20048){if((e20048 instanceof Object)){
var ex__6463__auto__ = e20048;
var statearr_20049_20106 = state_19963;
(statearr_20049_20106[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20107 = state_19963;
state_19963 = G__20107;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_19963){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_19963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___20051,cs,m,dchan,dctr,done))
})();
var state__6476__auto__ = (function (){var statearr_20050 = f__6475__auto__.call(null);
(statearr_20050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___20051);

return statearr_20050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___20051,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj20109 = {};
return obj20109;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20110){
var map__20115 = p__20110;
var map__20115__$1 = ((cljs.core.seq_QMARK_.call(null,map__20115))?cljs.core.apply.call(null,cljs.core.hash_map,map__20115):map__20115);
var opts = map__20115__$1;
var statearr_20116_20119 = state;
(statearr_20116_20119[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20115,map__20115__$1,opts){
return (function (val){
var statearr_20117_20120 = state;
(statearr_20117_20120[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20115,map__20115__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20118_20121 = state;
(statearr_20118_20121[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20110 = null;
if (arguments.length > 3) {
  p__20110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20110);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20122){
var state = cljs.core.first(arglist__20122);
arglist__20122 = cljs.core.next(arglist__20122);
var cont_block = cljs.core.first(arglist__20122);
arglist__20122 = cljs.core.next(arglist__20122);
var ports = cljs.core.first(arglist__20122);
var p__20110 = cljs.core.rest(arglist__20122);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20110);
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
if(typeof cljs.core.async.t20242 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20242 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20243){
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
this.meta20243 = meta20243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20242.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20242.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20242.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20242.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20242.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20242.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20242.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20244){
var self__ = this;
var _20244__$1 = this;
return self__.meta20243;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20244,meta20243__$1){
var self__ = this;
var _20244__$1 = this;
return (new cljs.core.async.t20242(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20243__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20242.cljs$lang$type = true;

cljs.core.async.t20242.cljs$lang$ctorStr = "cljs.core.async/t20242";

cljs.core.async.t20242.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20242");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20242 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20242(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20243){
return (new cljs.core.async.t20242(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20243));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20242(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6474__auto___20361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___20361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___20361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20314){
var state_val_20315 = (state_20314[(1)]);
if((state_val_20315 === (7))){
var inst_20258 = (state_20314[(7)]);
var inst_20263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20258);
var state_20314__$1 = state_20314;
var statearr_20316_20362 = state_20314__$1;
(statearr_20316_20362[(2)] = inst_20263);

(statearr_20316_20362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (20))){
var inst_20273 = (state_20314[(8)]);
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20314__$1,(23),out,inst_20273);
} else {
if((state_val_20315 === (1))){
var inst_20248 = (state_20314[(9)]);
var inst_20248__$1 = calc_state.call(null);
var inst_20249 = cljs.core.seq_QMARK_.call(null,inst_20248__$1);
var state_20314__$1 = (function (){var statearr_20317 = state_20314;
(statearr_20317[(9)] = inst_20248__$1);

return statearr_20317;
})();
if(inst_20249){
var statearr_20318_20363 = state_20314__$1;
(statearr_20318_20363[(1)] = (2));

} else {
var statearr_20319_20364 = state_20314__$1;
(statearr_20319_20364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (24))){
var inst_20266 = (state_20314[(10)]);
var inst_20258 = inst_20266;
var state_20314__$1 = (function (){var statearr_20320 = state_20314;
(statearr_20320[(7)] = inst_20258);

return statearr_20320;
})();
var statearr_20321_20365 = state_20314__$1;
(statearr_20321_20365[(2)] = null);

(statearr_20321_20365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (4))){
var inst_20248 = (state_20314[(9)]);
var inst_20254 = (state_20314[(2)]);
var inst_20255 = cljs.core.get.call(null,inst_20254,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20256 = cljs.core.get.call(null,inst_20254,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20257 = cljs.core.get.call(null,inst_20254,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20258 = inst_20248;
var state_20314__$1 = (function (){var statearr_20322 = state_20314;
(statearr_20322[(11)] = inst_20256);

(statearr_20322[(7)] = inst_20258);

(statearr_20322[(12)] = inst_20255);

(statearr_20322[(13)] = inst_20257);

return statearr_20322;
})();
var statearr_20323_20366 = state_20314__$1;
(statearr_20323_20366[(2)] = null);

(statearr_20323_20366[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (15))){
var state_20314__$1 = state_20314;
var statearr_20324_20367 = state_20314__$1;
(statearr_20324_20367[(2)] = null);

(statearr_20324_20367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (21))){
var inst_20266 = (state_20314[(10)]);
var inst_20258 = inst_20266;
var state_20314__$1 = (function (){var statearr_20325 = state_20314;
(statearr_20325[(7)] = inst_20258);

return statearr_20325;
})();
var statearr_20326_20368 = state_20314__$1;
(statearr_20326_20368[(2)] = null);

(statearr_20326_20368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (13))){
var inst_20310 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20327_20369 = state_20314__$1;
(statearr_20327_20369[(2)] = inst_20310);

(statearr_20327_20369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (22))){
var inst_20308 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20328_20370 = state_20314__$1;
(statearr_20328_20370[(2)] = inst_20308);

(statearr_20328_20370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (6))){
var inst_20312 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20314__$1,inst_20312);
} else {
if((state_val_20315 === (25))){
var state_20314__$1 = state_20314;
var statearr_20329_20371 = state_20314__$1;
(statearr_20329_20371[(2)] = null);

(statearr_20329_20371[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (17))){
var inst_20288 = (state_20314[(14)]);
var state_20314__$1 = state_20314;
var statearr_20330_20372 = state_20314__$1;
(statearr_20330_20372[(2)] = inst_20288);

(statearr_20330_20372[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (3))){
var inst_20248 = (state_20314[(9)]);
var state_20314__$1 = state_20314;
var statearr_20331_20373 = state_20314__$1;
(statearr_20331_20373[(2)] = inst_20248);

(statearr_20331_20373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (12))){
var inst_20269 = (state_20314[(15)]);
var inst_20274 = (state_20314[(16)]);
var inst_20288 = (state_20314[(14)]);
var inst_20288__$1 = inst_20269.call(null,inst_20274);
var state_20314__$1 = (function (){var statearr_20332 = state_20314;
(statearr_20332[(14)] = inst_20288__$1);

return statearr_20332;
})();
if(cljs.core.truth_(inst_20288__$1)){
var statearr_20333_20374 = state_20314__$1;
(statearr_20333_20374[(1)] = (17));

} else {
var statearr_20334_20375 = state_20314__$1;
(statearr_20334_20375[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (2))){
var inst_20248 = (state_20314[(9)]);
var inst_20251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20248);
var state_20314__$1 = state_20314;
var statearr_20335_20376 = state_20314__$1;
(statearr_20335_20376[(2)] = inst_20251);

(statearr_20335_20376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (23))){
var inst_20299 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
if(cljs.core.truth_(inst_20299)){
var statearr_20336_20377 = state_20314__$1;
(statearr_20336_20377[(1)] = (24));

} else {
var statearr_20337_20378 = state_20314__$1;
(statearr_20337_20378[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (19))){
var inst_20296 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
if(cljs.core.truth_(inst_20296)){
var statearr_20338_20379 = state_20314__$1;
(statearr_20338_20379[(1)] = (20));

} else {
var statearr_20339_20380 = state_20314__$1;
(statearr_20339_20380[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (11))){
var inst_20273 = (state_20314[(8)]);
var inst_20279 = (inst_20273 == null);
var state_20314__$1 = state_20314;
if(cljs.core.truth_(inst_20279)){
var statearr_20340_20381 = state_20314__$1;
(statearr_20340_20381[(1)] = (14));

} else {
var statearr_20341_20382 = state_20314__$1;
(statearr_20341_20382[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (9))){
var inst_20266 = (state_20314[(10)]);
var inst_20266__$1 = (state_20314[(2)]);
var inst_20267 = cljs.core.get.call(null,inst_20266__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20268 = cljs.core.get.call(null,inst_20266__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20269 = cljs.core.get.call(null,inst_20266__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20314__$1 = (function (){var statearr_20342 = state_20314;
(statearr_20342[(15)] = inst_20269);

(statearr_20342[(17)] = inst_20268);

(statearr_20342[(10)] = inst_20266__$1);

return statearr_20342;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20314__$1,(10),inst_20267);
} else {
if((state_val_20315 === (5))){
var inst_20258 = (state_20314[(7)]);
var inst_20261 = cljs.core.seq_QMARK_.call(null,inst_20258);
var state_20314__$1 = state_20314;
if(inst_20261){
var statearr_20343_20383 = state_20314__$1;
(statearr_20343_20383[(1)] = (7));

} else {
var statearr_20344_20384 = state_20314__$1;
(statearr_20344_20384[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (14))){
var inst_20274 = (state_20314[(16)]);
var inst_20281 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20274);
var state_20314__$1 = state_20314;
var statearr_20345_20385 = state_20314__$1;
(statearr_20345_20385[(2)] = inst_20281);

(statearr_20345_20385[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (26))){
var inst_20304 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20346_20386 = state_20314__$1;
(statearr_20346_20386[(2)] = inst_20304);

(statearr_20346_20386[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (16))){
var inst_20284 = (state_20314[(2)]);
var inst_20285 = calc_state.call(null);
var inst_20258 = inst_20285;
var state_20314__$1 = (function (){var statearr_20347 = state_20314;
(statearr_20347[(7)] = inst_20258);

(statearr_20347[(18)] = inst_20284);

return statearr_20347;
})();
var statearr_20348_20387 = state_20314__$1;
(statearr_20348_20387[(2)] = null);

(statearr_20348_20387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (10))){
var inst_20273 = (state_20314[(8)]);
var inst_20274 = (state_20314[(16)]);
var inst_20272 = (state_20314[(2)]);
var inst_20273__$1 = cljs.core.nth.call(null,inst_20272,(0),null);
var inst_20274__$1 = cljs.core.nth.call(null,inst_20272,(1),null);
var inst_20275 = (inst_20273__$1 == null);
var inst_20276 = cljs.core._EQ_.call(null,inst_20274__$1,change);
var inst_20277 = (inst_20275) || (inst_20276);
var state_20314__$1 = (function (){var statearr_20349 = state_20314;
(statearr_20349[(8)] = inst_20273__$1);

(statearr_20349[(16)] = inst_20274__$1);

return statearr_20349;
})();
if(cljs.core.truth_(inst_20277)){
var statearr_20350_20388 = state_20314__$1;
(statearr_20350_20388[(1)] = (11));

} else {
var statearr_20351_20389 = state_20314__$1;
(statearr_20351_20389[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (18))){
var inst_20269 = (state_20314[(15)]);
var inst_20268 = (state_20314[(17)]);
var inst_20274 = (state_20314[(16)]);
var inst_20291 = cljs.core.empty_QMARK_.call(null,inst_20269);
var inst_20292 = inst_20268.call(null,inst_20274);
var inst_20293 = cljs.core.not.call(null,inst_20292);
var inst_20294 = (inst_20291) && (inst_20293);
var state_20314__$1 = state_20314;
var statearr_20352_20390 = state_20314__$1;
(statearr_20352_20390[(2)] = inst_20294);

(statearr_20352_20390[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (8))){
var inst_20258 = (state_20314[(7)]);
var state_20314__$1 = state_20314;
var statearr_20353_20391 = state_20314__$1;
(statearr_20353_20391[(2)] = inst_20258);

(statearr_20353_20391[(1)] = (9));


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
});})(c__6474__auto___20361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6459__auto__,c__6474__auto___20361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_20357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20357[(0)] = state_machine__6460__auto__);

(statearr_20357[(1)] = (1));

return statearr_20357;
});
var state_machine__6460__auto____1 = (function (state_20314){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_20314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e20358){if((e20358 instanceof Object)){
var ex__6463__auto__ = e20358;
var statearr_20359_20392 = state_20314;
(statearr_20359_20392[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20393 = state_20314;
state_20314 = G__20393;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_20314){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_20314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___20361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6476__auto__ = (function (){var statearr_20360 = f__6475__auto__.call(null);
(statearr_20360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___20361);

return statearr_20360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___20361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20395 = {};
return obj20395;
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
return (function (p1__20396_SHARP_){
if(cljs.core.truth_(p1__20396_SHARP_.call(null,topic))){
return p1__20396_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20396_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20519 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20520){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20520 = meta20520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20519.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20519.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20519.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20519.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20521){
var self__ = this;
var _20521__$1 = this;
return self__.meta20520;
});})(mults,ensure_mult))
;

cljs.core.async.t20519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20521,meta20520__$1){
var self__ = this;
var _20521__$1 = this;
return (new cljs.core.async.t20519(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20520__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20519.cljs$lang$type = true;

cljs.core.async.t20519.cljs$lang$ctorStr = "cljs.core.async/t20519";

cljs.core.async.t20519.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20519");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20519 = ((function (mults,ensure_mult){
return (function __GT_t20519(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20520){
return (new cljs.core.async.t20519(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20520));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20519(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6474__auto___20641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___20641,mults,ensure_mult,p){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___20641,mults,ensure_mult,p){
return (function (state_20593){
var state_val_20594 = (state_20593[(1)]);
if((state_val_20594 === (7))){
var inst_20589 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
var statearr_20595_20642 = state_20593__$1;
(statearr_20595_20642[(2)] = inst_20589);

(statearr_20595_20642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (20))){
var state_20593__$1 = state_20593;
var statearr_20596_20643 = state_20593__$1;
(statearr_20596_20643[(2)] = null);

(statearr_20596_20643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (1))){
var state_20593__$1 = state_20593;
var statearr_20597_20644 = state_20593__$1;
(statearr_20597_20644[(2)] = null);

(statearr_20597_20644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (24))){
var inst_20572 = (state_20593[(7)]);
var inst_20581 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20572);
var state_20593__$1 = state_20593;
var statearr_20598_20645 = state_20593__$1;
(statearr_20598_20645[(2)] = inst_20581);

(statearr_20598_20645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (4))){
var inst_20524 = (state_20593[(8)]);
var inst_20524__$1 = (state_20593[(2)]);
var inst_20525 = (inst_20524__$1 == null);
var state_20593__$1 = (function (){var statearr_20599 = state_20593;
(statearr_20599[(8)] = inst_20524__$1);

return statearr_20599;
})();
if(cljs.core.truth_(inst_20525)){
var statearr_20600_20646 = state_20593__$1;
(statearr_20600_20646[(1)] = (5));

} else {
var statearr_20601_20647 = state_20593__$1;
(statearr_20601_20647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (15))){
var inst_20566 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
var statearr_20602_20648 = state_20593__$1;
(statearr_20602_20648[(2)] = inst_20566);

(statearr_20602_20648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (21))){
var inst_20586 = (state_20593[(2)]);
var state_20593__$1 = (function (){var statearr_20603 = state_20593;
(statearr_20603[(9)] = inst_20586);

return statearr_20603;
})();
var statearr_20604_20649 = state_20593__$1;
(statearr_20604_20649[(2)] = null);

(statearr_20604_20649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (13))){
var inst_20548 = (state_20593[(10)]);
var inst_20550 = cljs.core.chunked_seq_QMARK_.call(null,inst_20548);
var state_20593__$1 = state_20593;
if(inst_20550){
var statearr_20605_20650 = state_20593__$1;
(statearr_20605_20650[(1)] = (16));

} else {
var statearr_20606_20651 = state_20593__$1;
(statearr_20606_20651[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (22))){
var inst_20578 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
if(cljs.core.truth_(inst_20578)){
var statearr_20607_20652 = state_20593__$1;
(statearr_20607_20652[(1)] = (23));

} else {
var statearr_20608_20653 = state_20593__$1;
(statearr_20608_20653[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (6))){
var inst_20574 = (state_20593[(11)]);
var inst_20524 = (state_20593[(8)]);
var inst_20572 = (state_20593[(7)]);
var inst_20572__$1 = topic_fn.call(null,inst_20524);
var inst_20573 = cljs.core.deref.call(null,mults);
var inst_20574__$1 = cljs.core.get.call(null,inst_20573,inst_20572__$1);
var state_20593__$1 = (function (){var statearr_20609 = state_20593;
(statearr_20609[(11)] = inst_20574__$1);

(statearr_20609[(7)] = inst_20572__$1);

return statearr_20609;
})();
if(cljs.core.truth_(inst_20574__$1)){
var statearr_20610_20654 = state_20593__$1;
(statearr_20610_20654[(1)] = (19));

} else {
var statearr_20611_20655 = state_20593__$1;
(statearr_20611_20655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (25))){
var inst_20583 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
var statearr_20612_20656 = state_20593__$1;
(statearr_20612_20656[(2)] = inst_20583);

(statearr_20612_20656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (17))){
var inst_20548 = (state_20593[(10)]);
var inst_20557 = cljs.core.first.call(null,inst_20548);
var inst_20558 = cljs.core.async.muxch_STAR_.call(null,inst_20557);
var inst_20559 = cljs.core.async.close_BANG_.call(null,inst_20558);
var inst_20560 = cljs.core.next.call(null,inst_20548);
var inst_20534 = inst_20560;
var inst_20535 = null;
var inst_20536 = (0);
var inst_20537 = (0);
var state_20593__$1 = (function (){var statearr_20613 = state_20593;
(statearr_20613[(12)] = inst_20536);

(statearr_20613[(13)] = inst_20534);

(statearr_20613[(14)] = inst_20537);

(statearr_20613[(15)] = inst_20559);

(statearr_20613[(16)] = inst_20535);

return statearr_20613;
})();
var statearr_20614_20657 = state_20593__$1;
(statearr_20614_20657[(2)] = null);

(statearr_20614_20657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (3))){
var inst_20591 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20593__$1,inst_20591);
} else {
if((state_val_20594 === (12))){
var inst_20568 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
var statearr_20615_20658 = state_20593__$1;
(statearr_20615_20658[(2)] = inst_20568);

(statearr_20615_20658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (2))){
var state_20593__$1 = state_20593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20593__$1,(4),ch);
} else {
if((state_val_20594 === (23))){
var state_20593__$1 = state_20593;
var statearr_20616_20659 = state_20593__$1;
(statearr_20616_20659[(2)] = null);

(statearr_20616_20659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (19))){
var inst_20574 = (state_20593[(11)]);
var inst_20524 = (state_20593[(8)]);
var inst_20576 = cljs.core.async.muxch_STAR_.call(null,inst_20574);
var state_20593__$1 = state_20593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20593__$1,(22),inst_20576,inst_20524);
} else {
if((state_val_20594 === (11))){
var inst_20534 = (state_20593[(13)]);
var inst_20548 = (state_20593[(10)]);
var inst_20548__$1 = cljs.core.seq.call(null,inst_20534);
var state_20593__$1 = (function (){var statearr_20617 = state_20593;
(statearr_20617[(10)] = inst_20548__$1);

return statearr_20617;
})();
if(inst_20548__$1){
var statearr_20618_20660 = state_20593__$1;
(statearr_20618_20660[(1)] = (13));

} else {
var statearr_20619_20661 = state_20593__$1;
(statearr_20619_20661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (9))){
var inst_20570 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
var statearr_20620_20662 = state_20593__$1;
(statearr_20620_20662[(2)] = inst_20570);

(statearr_20620_20662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (5))){
var inst_20531 = cljs.core.deref.call(null,mults);
var inst_20532 = cljs.core.vals.call(null,inst_20531);
var inst_20533 = cljs.core.seq.call(null,inst_20532);
var inst_20534 = inst_20533;
var inst_20535 = null;
var inst_20536 = (0);
var inst_20537 = (0);
var state_20593__$1 = (function (){var statearr_20621 = state_20593;
(statearr_20621[(12)] = inst_20536);

(statearr_20621[(13)] = inst_20534);

(statearr_20621[(14)] = inst_20537);

(statearr_20621[(16)] = inst_20535);

return statearr_20621;
})();
var statearr_20622_20663 = state_20593__$1;
(statearr_20622_20663[(2)] = null);

(statearr_20622_20663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (14))){
var state_20593__$1 = state_20593;
var statearr_20626_20664 = state_20593__$1;
(statearr_20626_20664[(2)] = null);

(statearr_20626_20664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (16))){
var inst_20548 = (state_20593[(10)]);
var inst_20552 = cljs.core.chunk_first.call(null,inst_20548);
var inst_20553 = cljs.core.chunk_rest.call(null,inst_20548);
var inst_20554 = cljs.core.count.call(null,inst_20552);
var inst_20534 = inst_20553;
var inst_20535 = inst_20552;
var inst_20536 = inst_20554;
var inst_20537 = (0);
var state_20593__$1 = (function (){var statearr_20627 = state_20593;
(statearr_20627[(12)] = inst_20536);

(statearr_20627[(13)] = inst_20534);

(statearr_20627[(14)] = inst_20537);

(statearr_20627[(16)] = inst_20535);

return statearr_20627;
})();
var statearr_20628_20665 = state_20593__$1;
(statearr_20628_20665[(2)] = null);

(statearr_20628_20665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (10))){
var inst_20536 = (state_20593[(12)]);
var inst_20534 = (state_20593[(13)]);
var inst_20537 = (state_20593[(14)]);
var inst_20535 = (state_20593[(16)]);
var inst_20542 = cljs.core._nth.call(null,inst_20535,inst_20537);
var inst_20543 = cljs.core.async.muxch_STAR_.call(null,inst_20542);
var inst_20544 = cljs.core.async.close_BANG_.call(null,inst_20543);
var inst_20545 = (inst_20537 + (1));
var tmp20623 = inst_20536;
var tmp20624 = inst_20534;
var tmp20625 = inst_20535;
var inst_20534__$1 = tmp20624;
var inst_20535__$1 = tmp20625;
var inst_20536__$1 = tmp20623;
var inst_20537__$1 = inst_20545;
var state_20593__$1 = (function (){var statearr_20629 = state_20593;
(statearr_20629[(12)] = inst_20536__$1);

(statearr_20629[(13)] = inst_20534__$1);

(statearr_20629[(14)] = inst_20537__$1);

(statearr_20629[(16)] = inst_20535__$1);

(statearr_20629[(17)] = inst_20544);

return statearr_20629;
})();
var statearr_20630_20666 = state_20593__$1;
(statearr_20630_20666[(2)] = null);

(statearr_20630_20666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (18))){
var inst_20563 = (state_20593[(2)]);
var state_20593__$1 = state_20593;
var statearr_20631_20667 = state_20593__$1;
(statearr_20631_20667[(2)] = inst_20563);

(statearr_20631_20667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20594 === (8))){
var inst_20536 = (state_20593[(12)]);
var inst_20537 = (state_20593[(14)]);
var inst_20539 = (inst_20537 < inst_20536);
var inst_20540 = inst_20539;
var state_20593__$1 = state_20593;
if(cljs.core.truth_(inst_20540)){
var statearr_20632_20668 = state_20593__$1;
(statearr_20632_20668[(1)] = (10));

} else {
var statearr_20633_20669 = state_20593__$1;
(statearr_20633_20669[(1)] = (11));

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
});})(c__6474__auto___20641,mults,ensure_mult,p))
;
return ((function (switch__6459__auto__,c__6474__auto___20641,mults,ensure_mult,p){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_20637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20637[(0)] = state_machine__6460__auto__);

(statearr_20637[(1)] = (1));

return statearr_20637;
});
var state_machine__6460__auto____1 = (function (state_20593){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_20593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e20638){if((e20638 instanceof Object)){
var ex__6463__auto__ = e20638;
var statearr_20639_20670 = state_20593;
(statearr_20639_20670[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20671 = state_20593;
state_20593 = G__20671;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_20593){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_20593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___20641,mults,ensure_mult,p))
})();
var state__6476__auto__ = (function (){var statearr_20640 = f__6475__auto__.call(null);
(statearr_20640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___20641);

return statearr_20640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___20641,mults,ensure_mult,p))
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
var c__6474__auto___20808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___20808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___20808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20778){
var state_val_20779 = (state_20778[(1)]);
if((state_val_20779 === (7))){
var state_20778__$1 = state_20778;
var statearr_20780_20809 = state_20778__$1;
(statearr_20780_20809[(2)] = null);

(statearr_20780_20809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (1))){
var state_20778__$1 = state_20778;
var statearr_20781_20810 = state_20778__$1;
(statearr_20781_20810[(2)] = null);

(statearr_20781_20810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (4))){
var inst_20742 = (state_20778[(7)]);
var inst_20744 = (inst_20742 < cnt);
var state_20778__$1 = state_20778;
if(cljs.core.truth_(inst_20744)){
var statearr_20782_20811 = state_20778__$1;
(statearr_20782_20811[(1)] = (6));

} else {
var statearr_20783_20812 = state_20778__$1;
(statearr_20783_20812[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (15))){
var inst_20774 = (state_20778[(2)]);
var state_20778__$1 = state_20778;
var statearr_20784_20813 = state_20778__$1;
(statearr_20784_20813[(2)] = inst_20774);

(statearr_20784_20813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (13))){
var inst_20767 = cljs.core.async.close_BANG_.call(null,out);
var state_20778__$1 = state_20778;
var statearr_20785_20814 = state_20778__$1;
(statearr_20785_20814[(2)] = inst_20767);

(statearr_20785_20814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (6))){
var state_20778__$1 = state_20778;
var statearr_20786_20815 = state_20778__$1;
(statearr_20786_20815[(2)] = null);

(statearr_20786_20815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (3))){
var inst_20776 = (state_20778[(2)]);
var state_20778__$1 = state_20778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20778__$1,inst_20776);
} else {
if((state_val_20779 === (12))){
var inst_20764 = (state_20778[(8)]);
var inst_20764__$1 = (state_20778[(2)]);
var inst_20765 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20764__$1);
var state_20778__$1 = (function (){var statearr_20787 = state_20778;
(statearr_20787[(8)] = inst_20764__$1);

return statearr_20787;
})();
if(cljs.core.truth_(inst_20765)){
var statearr_20788_20816 = state_20778__$1;
(statearr_20788_20816[(1)] = (13));

} else {
var statearr_20789_20817 = state_20778__$1;
(statearr_20789_20817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (2))){
var inst_20741 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20742 = (0);
var state_20778__$1 = (function (){var statearr_20790 = state_20778;
(statearr_20790[(7)] = inst_20742);

(statearr_20790[(9)] = inst_20741);

return statearr_20790;
})();
var statearr_20791_20818 = state_20778__$1;
(statearr_20791_20818[(2)] = null);

(statearr_20791_20818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (11))){
var inst_20742 = (state_20778[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20778,(10),Object,null,(9));
var inst_20751 = chs__$1.call(null,inst_20742);
var inst_20752 = done.call(null,inst_20742);
var inst_20753 = cljs.core.async.take_BANG_.call(null,inst_20751,inst_20752);
var state_20778__$1 = state_20778;
var statearr_20792_20819 = state_20778__$1;
(statearr_20792_20819[(2)] = inst_20753);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20778__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (9))){
var inst_20742 = (state_20778[(7)]);
var inst_20755 = (state_20778[(2)]);
var inst_20756 = (inst_20742 + (1));
var inst_20742__$1 = inst_20756;
var state_20778__$1 = (function (){var statearr_20793 = state_20778;
(statearr_20793[(10)] = inst_20755);

(statearr_20793[(7)] = inst_20742__$1);

return statearr_20793;
})();
var statearr_20794_20820 = state_20778__$1;
(statearr_20794_20820[(2)] = null);

(statearr_20794_20820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (5))){
var inst_20762 = (state_20778[(2)]);
var state_20778__$1 = (function (){var statearr_20795 = state_20778;
(statearr_20795[(11)] = inst_20762);

return statearr_20795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20778__$1,(12),dchan);
} else {
if((state_val_20779 === (14))){
var inst_20764 = (state_20778[(8)]);
var inst_20769 = cljs.core.apply.call(null,f,inst_20764);
var state_20778__$1 = state_20778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20778__$1,(16),out,inst_20769);
} else {
if((state_val_20779 === (16))){
var inst_20771 = (state_20778[(2)]);
var state_20778__$1 = (function (){var statearr_20796 = state_20778;
(statearr_20796[(12)] = inst_20771);

return statearr_20796;
})();
var statearr_20797_20821 = state_20778__$1;
(statearr_20797_20821[(2)] = null);

(statearr_20797_20821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (10))){
var inst_20746 = (state_20778[(2)]);
var inst_20747 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20778__$1 = (function (){var statearr_20798 = state_20778;
(statearr_20798[(13)] = inst_20746);

return statearr_20798;
})();
var statearr_20799_20822 = state_20778__$1;
(statearr_20799_20822[(2)] = inst_20747);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20778__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20779 === (8))){
var inst_20760 = (state_20778[(2)]);
var state_20778__$1 = state_20778;
var statearr_20800_20823 = state_20778__$1;
(statearr_20800_20823[(2)] = inst_20760);

(statearr_20800_20823[(1)] = (5));


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
});})(c__6474__auto___20808,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6459__auto__,c__6474__auto___20808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_20804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20804[(0)] = state_machine__6460__auto__);

(statearr_20804[(1)] = (1));

return statearr_20804;
});
var state_machine__6460__auto____1 = (function (state_20778){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_20778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e20805){if((e20805 instanceof Object)){
var ex__6463__auto__ = e20805;
var statearr_20806_20824 = state_20778;
(statearr_20806_20824[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20825 = state_20778;
state_20778 = G__20825;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_20778){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_20778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___20808,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6476__auto__ = (function (){var statearr_20807 = f__6475__auto__.call(null);
(statearr_20807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___20808);

return statearr_20807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___20808,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6474__auto___20933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___20933,out){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___20933,out){
return (function (state_20909){
var state_val_20910 = (state_20909[(1)]);
if((state_val_20910 === (7))){
var inst_20889 = (state_20909[(7)]);
var inst_20888 = (state_20909[(8)]);
var inst_20888__$1 = (state_20909[(2)]);
var inst_20889__$1 = cljs.core.nth.call(null,inst_20888__$1,(0),null);
var inst_20890 = cljs.core.nth.call(null,inst_20888__$1,(1),null);
var inst_20891 = (inst_20889__$1 == null);
var state_20909__$1 = (function (){var statearr_20911 = state_20909;
(statearr_20911[(7)] = inst_20889__$1);

(statearr_20911[(9)] = inst_20890);

(statearr_20911[(8)] = inst_20888__$1);

return statearr_20911;
})();
if(cljs.core.truth_(inst_20891)){
var statearr_20912_20934 = state_20909__$1;
(statearr_20912_20934[(1)] = (8));

} else {
var statearr_20913_20935 = state_20909__$1;
(statearr_20913_20935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20910 === (1))){
var inst_20880 = cljs.core.vec.call(null,chs);
var inst_20881 = inst_20880;
var state_20909__$1 = (function (){var statearr_20914 = state_20909;
(statearr_20914[(10)] = inst_20881);

return statearr_20914;
})();
var statearr_20915_20936 = state_20909__$1;
(statearr_20915_20936[(2)] = null);

(statearr_20915_20936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20910 === (4))){
var inst_20881 = (state_20909[(10)]);
var state_20909__$1 = state_20909;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20909__$1,(7),inst_20881);
} else {
if((state_val_20910 === (6))){
var inst_20905 = (state_20909[(2)]);
var state_20909__$1 = state_20909;
var statearr_20916_20937 = state_20909__$1;
(statearr_20916_20937[(2)] = inst_20905);

(statearr_20916_20937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20910 === (3))){
var inst_20907 = (state_20909[(2)]);
var state_20909__$1 = state_20909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20909__$1,inst_20907);
} else {
if((state_val_20910 === (2))){
var inst_20881 = (state_20909[(10)]);
var inst_20883 = cljs.core.count.call(null,inst_20881);
var inst_20884 = (inst_20883 > (0));
var state_20909__$1 = state_20909;
if(cljs.core.truth_(inst_20884)){
var statearr_20918_20938 = state_20909__$1;
(statearr_20918_20938[(1)] = (4));

} else {
var statearr_20919_20939 = state_20909__$1;
(statearr_20919_20939[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20910 === (11))){
var inst_20881 = (state_20909[(10)]);
var inst_20898 = (state_20909[(2)]);
var tmp20917 = inst_20881;
var inst_20881__$1 = tmp20917;
var state_20909__$1 = (function (){var statearr_20920 = state_20909;
(statearr_20920[(10)] = inst_20881__$1);

(statearr_20920[(11)] = inst_20898);

return statearr_20920;
})();
var statearr_20921_20940 = state_20909__$1;
(statearr_20921_20940[(2)] = null);

(statearr_20921_20940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20910 === (9))){
var inst_20889 = (state_20909[(7)]);
var state_20909__$1 = state_20909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20909__$1,(11),out,inst_20889);
} else {
if((state_val_20910 === (5))){
var inst_20903 = cljs.core.async.close_BANG_.call(null,out);
var state_20909__$1 = state_20909;
var statearr_20922_20941 = state_20909__$1;
(statearr_20922_20941[(2)] = inst_20903);

(statearr_20922_20941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20910 === (10))){
var inst_20901 = (state_20909[(2)]);
var state_20909__$1 = state_20909;
var statearr_20923_20942 = state_20909__$1;
(statearr_20923_20942[(2)] = inst_20901);

(statearr_20923_20942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20910 === (8))){
var inst_20881 = (state_20909[(10)]);
var inst_20889 = (state_20909[(7)]);
var inst_20890 = (state_20909[(9)]);
var inst_20888 = (state_20909[(8)]);
var inst_20893 = (function (){var c = inst_20890;
var v = inst_20889;
var vec__20886 = inst_20888;
var cs = inst_20881;
return ((function (c,v,vec__20886,cs,inst_20881,inst_20889,inst_20890,inst_20888,state_val_20910,c__6474__auto___20933,out){
return (function (p1__20826_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20826_SHARP_);
});
;})(c,v,vec__20886,cs,inst_20881,inst_20889,inst_20890,inst_20888,state_val_20910,c__6474__auto___20933,out))
})();
var inst_20894 = cljs.core.filterv.call(null,inst_20893,inst_20881);
var inst_20881__$1 = inst_20894;
var state_20909__$1 = (function (){var statearr_20924 = state_20909;
(statearr_20924[(10)] = inst_20881__$1);

return statearr_20924;
})();
var statearr_20925_20943 = state_20909__$1;
(statearr_20925_20943[(2)] = null);

(statearr_20925_20943[(1)] = (2));


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
});})(c__6474__auto___20933,out))
;
return ((function (switch__6459__auto__,c__6474__auto___20933,out){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_20929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20929[(0)] = state_machine__6460__auto__);

(statearr_20929[(1)] = (1));

return statearr_20929;
});
var state_machine__6460__auto____1 = (function (state_20909){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_20909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e20930){if((e20930 instanceof Object)){
var ex__6463__auto__ = e20930;
var statearr_20931_20944 = state_20909;
(statearr_20931_20944[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20945 = state_20909;
state_20909 = G__20945;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_20909){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_20909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___20933,out))
})();
var state__6476__auto__ = (function (){var statearr_20932 = f__6475__auto__.call(null);
(statearr_20932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___20933);

return statearr_20932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___20933,out))
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
var c__6474__auto___21038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___21038,out){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___21038,out){
return (function (state_21015){
var state_val_21016 = (state_21015[(1)]);
if((state_val_21016 === (7))){
var inst_20997 = (state_21015[(7)]);
var inst_20997__$1 = (state_21015[(2)]);
var inst_20998 = (inst_20997__$1 == null);
var inst_20999 = cljs.core.not.call(null,inst_20998);
var state_21015__$1 = (function (){var statearr_21017 = state_21015;
(statearr_21017[(7)] = inst_20997__$1);

return statearr_21017;
})();
if(inst_20999){
var statearr_21018_21039 = state_21015__$1;
(statearr_21018_21039[(1)] = (8));

} else {
var statearr_21019_21040 = state_21015__$1;
(statearr_21019_21040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (1))){
var inst_20992 = (0);
var state_21015__$1 = (function (){var statearr_21020 = state_21015;
(statearr_21020[(8)] = inst_20992);

return statearr_21020;
})();
var statearr_21021_21041 = state_21015__$1;
(statearr_21021_21041[(2)] = null);

(statearr_21021_21041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (4))){
var state_21015__$1 = state_21015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21015__$1,(7),ch);
} else {
if((state_val_21016 === (6))){
var inst_21010 = (state_21015[(2)]);
var state_21015__$1 = state_21015;
var statearr_21022_21042 = state_21015__$1;
(statearr_21022_21042[(2)] = inst_21010);

(statearr_21022_21042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (3))){
var inst_21012 = (state_21015[(2)]);
var inst_21013 = cljs.core.async.close_BANG_.call(null,out);
var state_21015__$1 = (function (){var statearr_21023 = state_21015;
(statearr_21023[(9)] = inst_21012);

return statearr_21023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21015__$1,inst_21013);
} else {
if((state_val_21016 === (2))){
var inst_20992 = (state_21015[(8)]);
var inst_20994 = (inst_20992 < n);
var state_21015__$1 = state_21015;
if(cljs.core.truth_(inst_20994)){
var statearr_21024_21043 = state_21015__$1;
(statearr_21024_21043[(1)] = (4));

} else {
var statearr_21025_21044 = state_21015__$1;
(statearr_21025_21044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (11))){
var inst_20992 = (state_21015[(8)]);
var inst_21002 = (state_21015[(2)]);
var inst_21003 = (inst_20992 + (1));
var inst_20992__$1 = inst_21003;
var state_21015__$1 = (function (){var statearr_21026 = state_21015;
(statearr_21026[(10)] = inst_21002);

(statearr_21026[(8)] = inst_20992__$1);

return statearr_21026;
})();
var statearr_21027_21045 = state_21015__$1;
(statearr_21027_21045[(2)] = null);

(statearr_21027_21045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (9))){
var state_21015__$1 = state_21015;
var statearr_21028_21046 = state_21015__$1;
(statearr_21028_21046[(2)] = null);

(statearr_21028_21046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (5))){
var state_21015__$1 = state_21015;
var statearr_21029_21047 = state_21015__$1;
(statearr_21029_21047[(2)] = null);

(statearr_21029_21047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (10))){
var inst_21007 = (state_21015[(2)]);
var state_21015__$1 = state_21015;
var statearr_21030_21048 = state_21015__$1;
(statearr_21030_21048[(2)] = inst_21007);

(statearr_21030_21048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (8))){
var inst_20997 = (state_21015[(7)]);
var state_21015__$1 = state_21015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21015__$1,(11),out,inst_20997);
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
});})(c__6474__auto___21038,out))
;
return ((function (switch__6459__auto__,c__6474__auto___21038,out){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_21034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21034[(0)] = state_machine__6460__auto__);

(statearr_21034[(1)] = (1));

return statearr_21034;
});
var state_machine__6460__auto____1 = (function (state_21015){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_21015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e21035){if((e21035 instanceof Object)){
var ex__6463__auto__ = e21035;
var statearr_21036_21049 = state_21015;
(statearr_21036_21049[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21050 = state_21015;
state_21015 = G__21050;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_21015){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_21015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___21038,out))
})();
var state__6476__auto__ = (function (){var statearr_21037 = f__6475__auto__.call(null);
(statearr_21037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___21038);

return statearr_21037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___21038,out))
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
if(typeof cljs.core.async.t21058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21058 = (function (ch,f,map_LT_,meta21059){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21059 = meta21059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21058.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21058.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21058.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21058.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21061 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21061 = (function (fn1,_,meta21059,map_LT_,f,ch,meta21062){
this.fn1 = fn1;
this._ = _;
this.meta21059 = meta21059;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21062 = meta21062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21061.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21051_SHARP_){
return f1.call(null,(((p1__21051_SHARP_ == null))?null:self__.f.call(null,p1__21051_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21063){
var self__ = this;
var _21063__$1 = this;
return self__.meta21062;
});})(___$1))
;

cljs.core.async.t21061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21063,meta21062__$1){
var self__ = this;
var _21063__$1 = this;
return (new cljs.core.async.t21061(self__.fn1,self__._,self__.meta21059,self__.map_LT_,self__.f,self__.ch,meta21062__$1));
});})(___$1))
;

cljs.core.async.t21061.cljs$lang$type = true;

cljs.core.async.t21061.cljs$lang$ctorStr = "cljs.core.async/t21061";

cljs.core.async.t21061.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21061");
});})(___$1))
;

cljs.core.async.__GT_t21061 = ((function (___$1){
return (function __GT_t21061(fn1__$1,___$2,meta21059__$1,map_LT___$1,f__$1,ch__$1,meta21062){
return (new cljs.core.async.t21061(fn1__$1,___$2,meta21059__$1,map_LT___$1,f__$1,ch__$1,meta21062));
});})(___$1))
;

}

return (new cljs.core.async.t21061(fn1,___$1,self__.meta21059,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t21058.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21058.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21058.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21060){
var self__ = this;
var _21060__$1 = this;
return self__.meta21059;
});

cljs.core.async.t21058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21060,meta21059__$1){
var self__ = this;
var _21060__$1 = this;
return (new cljs.core.async.t21058(self__.ch,self__.f,self__.map_LT_,meta21059__$1));
});

cljs.core.async.t21058.cljs$lang$type = true;

cljs.core.async.t21058.cljs$lang$ctorStr = "cljs.core.async/t21058";

cljs.core.async.t21058.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21058");
});

cljs.core.async.__GT_t21058 = (function __GT_t21058(ch__$1,f__$1,map_LT___$1,meta21059){
return (new cljs.core.async.t21058(ch__$1,f__$1,map_LT___$1,meta21059));
});

}

return (new cljs.core.async.t21058(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21067 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21067 = (function (ch,f,map_GT_,meta21068){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21068 = meta21068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21067.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21067.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21067.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21069){
var self__ = this;
var _21069__$1 = this;
return self__.meta21068;
});

cljs.core.async.t21067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21069,meta21068__$1){
var self__ = this;
var _21069__$1 = this;
return (new cljs.core.async.t21067(self__.ch,self__.f,self__.map_GT_,meta21068__$1));
});

cljs.core.async.t21067.cljs$lang$type = true;

cljs.core.async.t21067.cljs$lang$ctorStr = "cljs.core.async/t21067";

cljs.core.async.t21067.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21067");
});

cljs.core.async.__GT_t21067 = (function __GT_t21067(ch__$1,f__$1,map_GT___$1,meta21068){
return (new cljs.core.async.t21067(ch__$1,f__$1,map_GT___$1,meta21068));
});

}

return (new cljs.core.async.t21067(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21073 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21073 = (function (ch,p,filter_GT_,meta21074){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21074 = meta21074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21075){
var self__ = this;
var _21075__$1 = this;
return self__.meta21074;
});

cljs.core.async.t21073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21075,meta21074__$1){
var self__ = this;
var _21075__$1 = this;
return (new cljs.core.async.t21073(self__.ch,self__.p,self__.filter_GT_,meta21074__$1));
});

cljs.core.async.t21073.cljs$lang$type = true;

cljs.core.async.t21073.cljs$lang$ctorStr = "cljs.core.async/t21073";

cljs.core.async.t21073.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21073");
});

cljs.core.async.__GT_t21073 = (function __GT_t21073(ch__$1,p__$1,filter_GT___$1,meta21074){
return (new cljs.core.async.t21073(ch__$1,p__$1,filter_GT___$1,meta21074));
});

}

return (new cljs.core.async.t21073(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6474__auto___21158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___21158,out){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___21158,out){
return (function (state_21137){
var state_val_21138 = (state_21137[(1)]);
if((state_val_21138 === (7))){
var inst_21133 = (state_21137[(2)]);
var state_21137__$1 = state_21137;
var statearr_21139_21159 = state_21137__$1;
(statearr_21139_21159[(2)] = inst_21133);

(statearr_21139_21159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (1))){
var state_21137__$1 = state_21137;
var statearr_21140_21160 = state_21137__$1;
(statearr_21140_21160[(2)] = null);

(statearr_21140_21160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (4))){
var inst_21119 = (state_21137[(7)]);
var inst_21119__$1 = (state_21137[(2)]);
var inst_21120 = (inst_21119__$1 == null);
var state_21137__$1 = (function (){var statearr_21141 = state_21137;
(statearr_21141[(7)] = inst_21119__$1);

return statearr_21141;
})();
if(cljs.core.truth_(inst_21120)){
var statearr_21142_21161 = state_21137__$1;
(statearr_21142_21161[(1)] = (5));

} else {
var statearr_21143_21162 = state_21137__$1;
(statearr_21143_21162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (6))){
var inst_21119 = (state_21137[(7)]);
var inst_21124 = p.call(null,inst_21119);
var state_21137__$1 = state_21137;
if(cljs.core.truth_(inst_21124)){
var statearr_21144_21163 = state_21137__$1;
(statearr_21144_21163[(1)] = (8));

} else {
var statearr_21145_21164 = state_21137__$1;
(statearr_21145_21164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (3))){
var inst_21135 = (state_21137[(2)]);
var state_21137__$1 = state_21137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21137__$1,inst_21135);
} else {
if((state_val_21138 === (2))){
var state_21137__$1 = state_21137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21137__$1,(4),ch);
} else {
if((state_val_21138 === (11))){
var inst_21127 = (state_21137[(2)]);
var state_21137__$1 = state_21137;
var statearr_21146_21165 = state_21137__$1;
(statearr_21146_21165[(2)] = inst_21127);

(statearr_21146_21165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (9))){
var state_21137__$1 = state_21137;
var statearr_21147_21166 = state_21137__$1;
(statearr_21147_21166[(2)] = null);

(statearr_21147_21166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (5))){
var inst_21122 = cljs.core.async.close_BANG_.call(null,out);
var state_21137__$1 = state_21137;
var statearr_21148_21167 = state_21137__$1;
(statearr_21148_21167[(2)] = inst_21122);

(statearr_21148_21167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (10))){
var inst_21130 = (state_21137[(2)]);
var state_21137__$1 = (function (){var statearr_21149 = state_21137;
(statearr_21149[(8)] = inst_21130);

return statearr_21149;
})();
var statearr_21150_21168 = state_21137__$1;
(statearr_21150_21168[(2)] = null);

(statearr_21150_21168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21138 === (8))){
var inst_21119 = (state_21137[(7)]);
var state_21137__$1 = state_21137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21137__$1,(11),out,inst_21119);
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
});})(c__6474__auto___21158,out))
;
return ((function (switch__6459__auto__,c__6474__auto___21158,out){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_21154 = [null,null,null,null,null,null,null,null,null];
(statearr_21154[(0)] = state_machine__6460__auto__);

(statearr_21154[(1)] = (1));

return statearr_21154;
});
var state_machine__6460__auto____1 = (function (state_21137){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_21137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e21155){if((e21155 instanceof Object)){
var ex__6463__auto__ = e21155;
var statearr_21156_21169 = state_21137;
(statearr_21156_21169[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21170 = state_21137;
state_21137 = G__21170;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_21137){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_21137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___21158,out))
})();
var state__6476__auto__ = (function (){var statearr_21157 = f__6475__auto__.call(null);
(statearr_21157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___21158);

return statearr_21157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___21158,out))
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
var c__6474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto__){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto__){
return (function (state_21336){
var state_val_21337 = (state_21336[(1)]);
if((state_val_21337 === (7))){
var inst_21332 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21338_21379 = state_21336__$1;
(statearr_21338_21379[(2)] = inst_21332);

(statearr_21338_21379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (20))){
var inst_21302 = (state_21336[(7)]);
var inst_21313 = (state_21336[(2)]);
var inst_21314 = cljs.core.next.call(null,inst_21302);
var inst_21288 = inst_21314;
var inst_21289 = null;
var inst_21290 = (0);
var inst_21291 = (0);
var state_21336__$1 = (function (){var statearr_21339 = state_21336;
(statearr_21339[(8)] = inst_21289);

(statearr_21339[(9)] = inst_21288);

(statearr_21339[(10)] = inst_21313);

(statearr_21339[(11)] = inst_21290);

(statearr_21339[(12)] = inst_21291);

return statearr_21339;
})();
var statearr_21340_21380 = state_21336__$1;
(statearr_21340_21380[(2)] = null);

(statearr_21340_21380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (1))){
var state_21336__$1 = state_21336;
var statearr_21341_21381 = state_21336__$1;
(statearr_21341_21381[(2)] = null);

(statearr_21341_21381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (4))){
var inst_21277 = (state_21336[(13)]);
var inst_21277__$1 = (state_21336[(2)]);
var inst_21278 = (inst_21277__$1 == null);
var state_21336__$1 = (function (){var statearr_21342 = state_21336;
(statearr_21342[(13)] = inst_21277__$1);

return statearr_21342;
})();
if(cljs.core.truth_(inst_21278)){
var statearr_21343_21382 = state_21336__$1;
(statearr_21343_21382[(1)] = (5));

} else {
var statearr_21344_21383 = state_21336__$1;
(statearr_21344_21383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (15))){
var state_21336__$1 = state_21336;
var statearr_21348_21384 = state_21336__$1;
(statearr_21348_21384[(2)] = null);

(statearr_21348_21384[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (21))){
var state_21336__$1 = state_21336;
var statearr_21349_21385 = state_21336__$1;
(statearr_21349_21385[(2)] = null);

(statearr_21349_21385[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (13))){
var inst_21289 = (state_21336[(8)]);
var inst_21288 = (state_21336[(9)]);
var inst_21290 = (state_21336[(11)]);
var inst_21291 = (state_21336[(12)]);
var inst_21298 = (state_21336[(2)]);
var inst_21299 = (inst_21291 + (1));
var tmp21345 = inst_21289;
var tmp21346 = inst_21288;
var tmp21347 = inst_21290;
var inst_21288__$1 = tmp21346;
var inst_21289__$1 = tmp21345;
var inst_21290__$1 = tmp21347;
var inst_21291__$1 = inst_21299;
var state_21336__$1 = (function (){var statearr_21350 = state_21336;
(statearr_21350[(8)] = inst_21289__$1);

(statearr_21350[(9)] = inst_21288__$1);

(statearr_21350[(11)] = inst_21290__$1);

(statearr_21350[(12)] = inst_21291__$1);

(statearr_21350[(14)] = inst_21298);

return statearr_21350;
})();
var statearr_21351_21386 = state_21336__$1;
(statearr_21351_21386[(2)] = null);

(statearr_21351_21386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (22))){
var state_21336__$1 = state_21336;
var statearr_21352_21387 = state_21336__$1;
(statearr_21352_21387[(2)] = null);

(statearr_21352_21387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (6))){
var inst_21277 = (state_21336[(13)]);
var inst_21286 = f.call(null,inst_21277);
var inst_21287 = cljs.core.seq.call(null,inst_21286);
var inst_21288 = inst_21287;
var inst_21289 = null;
var inst_21290 = (0);
var inst_21291 = (0);
var state_21336__$1 = (function (){var statearr_21353 = state_21336;
(statearr_21353[(8)] = inst_21289);

(statearr_21353[(9)] = inst_21288);

(statearr_21353[(11)] = inst_21290);

(statearr_21353[(12)] = inst_21291);

return statearr_21353;
})();
var statearr_21354_21388 = state_21336__$1;
(statearr_21354_21388[(2)] = null);

(statearr_21354_21388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (17))){
var inst_21302 = (state_21336[(7)]);
var inst_21306 = cljs.core.chunk_first.call(null,inst_21302);
var inst_21307 = cljs.core.chunk_rest.call(null,inst_21302);
var inst_21308 = cljs.core.count.call(null,inst_21306);
var inst_21288 = inst_21307;
var inst_21289 = inst_21306;
var inst_21290 = inst_21308;
var inst_21291 = (0);
var state_21336__$1 = (function (){var statearr_21355 = state_21336;
(statearr_21355[(8)] = inst_21289);

(statearr_21355[(9)] = inst_21288);

(statearr_21355[(11)] = inst_21290);

(statearr_21355[(12)] = inst_21291);

return statearr_21355;
})();
var statearr_21356_21389 = state_21336__$1;
(statearr_21356_21389[(2)] = null);

(statearr_21356_21389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (3))){
var inst_21334 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21336__$1,inst_21334);
} else {
if((state_val_21337 === (12))){
var inst_21322 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21357_21390 = state_21336__$1;
(statearr_21357_21390[(2)] = inst_21322);

(statearr_21357_21390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (2))){
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(4),in$);
} else {
if((state_val_21337 === (23))){
var inst_21330 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21358_21391 = state_21336__$1;
(statearr_21358_21391[(2)] = inst_21330);

(statearr_21358_21391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (19))){
var inst_21317 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21359_21392 = state_21336__$1;
(statearr_21359_21392[(2)] = inst_21317);

(statearr_21359_21392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (11))){
var inst_21288 = (state_21336[(9)]);
var inst_21302 = (state_21336[(7)]);
var inst_21302__$1 = cljs.core.seq.call(null,inst_21288);
var state_21336__$1 = (function (){var statearr_21360 = state_21336;
(statearr_21360[(7)] = inst_21302__$1);

return statearr_21360;
})();
if(inst_21302__$1){
var statearr_21361_21393 = state_21336__$1;
(statearr_21361_21393[(1)] = (14));

} else {
var statearr_21362_21394 = state_21336__$1;
(statearr_21362_21394[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (9))){
var inst_21324 = (state_21336[(2)]);
var inst_21325 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21336__$1 = (function (){var statearr_21363 = state_21336;
(statearr_21363[(15)] = inst_21324);

return statearr_21363;
})();
if(cljs.core.truth_(inst_21325)){
var statearr_21364_21395 = state_21336__$1;
(statearr_21364_21395[(1)] = (21));

} else {
var statearr_21365_21396 = state_21336__$1;
(statearr_21365_21396[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (5))){
var inst_21280 = cljs.core.async.close_BANG_.call(null,out);
var state_21336__$1 = state_21336;
var statearr_21366_21397 = state_21336__$1;
(statearr_21366_21397[(2)] = inst_21280);

(statearr_21366_21397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (14))){
var inst_21302 = (state_21336[(7)]);
var inst_21304 = cljs.core.chunked_seq_QMARK_.call(null,inst_21302);
var state_21336__$1 = state_21336;
if(inst_21304){
var statearr_21367_21398 = state_21336__$1;
(statearr_21367_21398[(1)] = (17));

} else {
var statearr_21368_21399 = state_21336__$1;
(statearr_21368_21399[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (16))){
var inst_21320 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21369_21400 = state_21336__$1;
(statearr_21369_21400[(2)] = inst_21320);

(statearr_21369_21400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (10))){
var inst_21289 = (state_21336[(8)]);
var inst_21291 = (state_21336[(12)]);
var inst_21296 = cljs.core._nth.call(null,inst_21289,inst_21291);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21336__$1,(13),out,inst_21296);
} else {
if((state_val_21337 === (18))){
var inst_21302 = (state_21336[(7)]);
var inst_21311 = cljs.core.first.call(null,inst_21302);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21336__$1,(20),out,inst_21311);
} else {
if((state_val_21337 === (8))){
var inst_21290 = (state_21336[(11)]);
var inst_21291 = (state_21336[(12)]);
var inst_21293 = (inst_21291 < inst_21290);
var inst_21294 = inst_21293;
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21294)){
var statearr_21370_21401 = state_21336__$1;
(statearr_21370_21401[(1)] = (10));

} else {
var statearr_21371_21402 = state_21336__$1;
(statearr_21371_21402[(1)] = (11));

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
});})(c__6474__auto__))
;
return ((function (switch__6459__auto__,c__6474__auto__){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_21375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21375[(0)] = state_machine__6460__auto__);

(statearr_21375[(1)] = (1));

return statearr_21375;
});
var state_machine__6460__auto____1 = (function (state_21336){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_21336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e21376){if((e21376 instanceof Object)){
var ex__6463__auto__ = e21376;
var statearr_21377_21403 = state_21336;
(statearr_21377_21403[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21404 = state_21336;
state_21336 = G__21404;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_21336){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_21336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto__))
})();
var state__6476__auto__ = (function (){var statearr_21378 = f__6475__auto__.call(null);
(statearr_21378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto__);

return statearr_21378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto__))
);

return c__6474__auto__;
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
var c__6474__auto___21501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___21501,out){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___21501,out){
return (function (state_21476){
var state_val_21477 = (state_21476[(1)]);
if((state_val_21477 === (7))){
var inst_21471 = (state_21476[(2)]);
var state_21476__$1 = state_21476;
var statearr_21478_21502 = state_21476__$1;
(statearr_21478_21502[(2)] = inst_21471);

(statearr_21478_21502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (1))){
var inst_21453 = null;
var state_21476__$1 = (function (){var statearr_21479 = state_21476;
(statearr_21479[(7)] = inst_21453);

return statearr_21479;
})();
var statearr_21480_21503 = state_21476__$1;
(statearr_21480_21503[(2)] = null);

(statearr_21480_21503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (4))){
var inst_21456 = (state_21476[(8)]);
var inst_21456__$1 = (state_21476[(2)]);
var inst_21457 = (inst_21456__$1 == null);
var inst_21458 = cljs.core.not.call(null,inst_21457);
var state_21476__$1 = (function (){var statearr_21481 = state_21476;
(statearr_21481[(8)] = inst_21456__$1);

return statearr_21481;
})();
if(inst_21458){
var statearr_21482_21504 = state_21476__$1;
(statearr_21482_21504[(1)] = (5));

} else {
var statearr_21483_21505 = state_21476__$1;
(statearr_21483_21505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (6))){
var state_21476__$1 = state_21476;
var statearr_21484_21506 = state_21476__$1;
(statearr_21484_21506[(2)] = null);

(statearr_21484_21506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (3))){
var inst_21473 = (state_21476[(2)]);
var inst_21474 = cljs.core.async.close_BANG_.call(null,out);
var state_21476__$1 = (function (){var statearr_21485 = state_21476;
(statearr_21485[(9)] = inst_21473);

return statearr_21485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21476__$1,inst_21474);
} else {
if((state_val_21477 === (2))){
var state_21476__$1 = state_21476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21476__$1,(4),ch);
} else {
if((state_val_21477 === (11))){
var inst_21456 = (state_21476[(8)]);
var inst_21465 = (state_21476[(2)]);
var inst_21453 = inst_21456;
var state_21476__$1 = (function (){var statearr_21486 = state_21476;
(statearr_21486[(10)] = inst_21465);

(statearr_21486[(7)] = inst_21453);

return statearr_21486;
})();
var statearr_21487_21507 = state_21476__$1;
(statearr_21487_21507[(2)] = null);

(statearr_21487_21507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (9))){
var inst_21456 = (state_21476[(8)]);
var state_21476__$1 = state_21476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21476__$1,(11),out,inst_21456);
} else {
if((state_val_21477 === (5))){
var inst_21456 = (state_21476[(8)]);
var inst_21453 = (state_21476[(7)]);
var inst_21460 = cljs.core._EQ_.call(null,inst_21456,inst_21453);
var state_21476__$1 = state_21476;
if(inst_21460){
var statearr_21489_21508 = state_21476__$1;
(statearr_21489_21508[(1)] = (8));

} else {
var statearr_21490_21509 = state_21476__$1;
(statearr_21490_21509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (10))){
var inst_21468 = (state_21476[(2)]);
var state_21476__$1 = state_21476;
var statearr_21491_21510 = state_21476__$1;
(statearr_21491_21510[(2)] = inst_21468);

(statearr_21491_21510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (8))){
var inst_21453 = (state_21476[(7)]);
var tmp21488 = inst_21453;
var inst_21453__$1 = tmp21488;
var state_21476__$1 = (function (){var statearr_21492 = state_21476;
(statearr_21492[(7)] = inst_21453__$1);

return statearr_21492;
})();
var statearr_21493_21511 = state_21476__$1;
(statearr_21493_21511[(2)] = null);

(statearr_21493_21511[(1)] = (2));


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
});})(c__6474__auto___21501,out))
;
return ((function (switch__6459__auto__,c__6474__auto___21501,out){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_21497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21497[(0)] = state_machine__6460__auto__);

(statearr_21497[(1)] = (1));

return statearr_21497;
});
var state_machine__6460__auto____1 = (function (state_21476){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_21476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e21498){if((e21498 instanceof Object)){
var ex__6463__auto__ = e21498;
var statearr_21499_21512 = state_21476;
(statearr_21499_21512[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21513 = state_21476;
state_21476 = G__21513;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_21476){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_21476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___21501,out))
})();
var state__6476__auto__ = (function (){var statearr_21500 = f__6475__auto__.call(null);
(statearr_21500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___21501);

return statearr_21500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___21501,out))
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
var c__6474__auto___21648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___21648,out){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___21648,out){
return (function (state_21618){
var state_val_21619 = (state_21618[(1)]);
if((state_val_21619 === (7))){
var inst_21614 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21620_21649 = state_21618__$1;
(statearr_21620_21649[(2)] = inst_21614);

(statearr_21620_21649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (1))){
var inst_21581 = (new Array(n));
var inst_21582 = inst_21581;
var inst_21583 = (0);
var state_21618__$1 = (function (){var statearr_21621 = state_21618;
(statearr_21621[(7)] = inst_21583);

(statearr_21621[(8)] = inst_21582);

return statearr_21621;
})();
var statearr_21622_21650 = state_21618__$1;
(statearr_21622_21650[(2)] = null);

(statearr_21622_21650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (4))){
var inst_21586 = (state_21618[(9)]);
var inst_21586__$1 = (state_21618[(2)]);
var inst_21587 = (inst_21586__$1 == null);
var inst_21588 = cljs.core.not.call(null,inst_21587);
var state_21618__$1 = (function (){var statearr_21623 = state_21618;
(statearr_21623[(9)] = inst_21586__$1);

return statearr_21623;
})();
if(inst_21588){
var statearr_21624_21651 = state_21618__$1;
(statearr_21624_21651[(1)] = (5));

} else {
var statearr_21625_21652 = state_21618__$1;
(statearr_21625_21652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (15))){
var inst_21608 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21626_21653 = state_21618__$1;
(statearr_21626_21653[(2)] = inst_21608);

(statearr_21626_21653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (13))){
var state_21618__$1 = state_21618;
var statearr_21627_21654 = state_21618__$1;
(statearr_21627_21654[(2)] = null);

(statearr_21627_21654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (6))){
var inst_21583 = (state_21618[(7)]);
var inst_21604 = (inst_21583 > (0));
var state_21618__$1 = state_21618;
if(cljs.core.truth_(inst_21604)){
var statearr_21628_21655 = state_21618__$1;
(statearr_21628_21655[(1)] = (12));

} else {
var statearr_21629_21656 = state_21618__$1;
(statearr_21629_21656[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (3))){
var inst_21616 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21618__$1,inst_21616);
} else {
if((state_val_21619 === (12))){
var inst_21582 = (state_21618[(8)]);
var inst_21606 = cljs.core.vec.call(null,inst_21582);
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21618__$1,(15),out,inst_21606);
} else {
if((state_val_21619 === (2))){
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21618__$1,(4),ch);
} else {
if((state_val_21619 === (11))){
var inst_21598 = (state_21618[(2)]);
var inst_21599 = (new Array(n));
var inst_21582 = inst_21599;
var inst_21583 = (0);
var state_21618__$1 = (function (){var statearr_21630 = state_21618;
(statearr_21630[(7)] = inst_21583);

(statearr_21630[(10)] = inst_21598);

(statearr_21630[(8)] = inst_21582);

return statearr_21630;
})();
var statearr_21631_21657 = state_21618__$1;
(statearr_21631_21657[(2)] = null);

(statearr_21631_21657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (9))){
var inst_21582 = (state_21618[(8)]);
var inst_21596 = cljs.core.vec.call(null,inst_21582);
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21618__$1,(11),out,inst_21596);
} else {
if((state_val_21619 === (5))){
var inst_21583 = (state_21618[(7)]);
var inst_21591 = (state_21618[(11)]);
var inst_21582 = (state_21618[(8)]);
var inst_21586 = (state_21618[(9)]);
var inst_21590 = (inst_21582[inst_21583] = inst_21586);
var inst_21591__$1 = (inst_21583 + (1));
var inst_21592 = (inst_21591__$1 < n);
var state_21618__$1 = (function (){var statearr_21632 = state_21618;
(statearr_21632[(12)] = inst_21590);

(statearr_21632[(11)] = inst_21591__$1);

return statearr_21632;
})();
if(cljs.core.truth_(inst_21592)){
var statearr_21633_21658 = state_21618__$1;
(statearr_21633_21658[(1)] = (8));

} else {
var statearr_21634_21659 = state_21618__$1;
(statearr_21634_21659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (14))){
var inst_21611 = (state_21618[(2)]);
var inst_21612 = cljs.core.async.close_BANG_.call(null,out);
var state_21618__$1 = (function (){var statearr_21636 = state_21618;
(statearr_21636[(13)] = inst_21611);

return statearr_21636;
})();
var statearr_21637_21660 = state_21618__$1;
(statearr_21637_21660[(2)] = inst_21612);

(statearr_21637_21660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (10))){
var inst_21602 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21638_21661 = state_21618__$1;
(statearr_21638_21661[(2)] = inst_21602);

(statearr_21638_21661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (8))){
var inst_21591 = (state_21618[(11)]);
var inst_21582 = (state_21618[(8)]);
var tmp21635 = inst_21582;
var inst_21582__$1 = tmp21635;
var inst_21583 = inst_21591;
var state_21618__$1 = (function (){var statearr_21639 = state_21618;
(statearr_21639[(7)] = inst_21583);

(statearr_21639[(8)] = inst_21582__$1);

return statearr_21639;
})();
var statearr_21640_21662 = state_21618__$1;
(statearr_21640_21662[(2)] = null);

(statearr_21640_21662[(1)] = (2));


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
});})(c__6474__auto___21648,out))
;
return ((function (switch__6459__auto__,c__6474__auto___21648,out){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_21644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21644[(0)] = state_machine__6460__auto__);

(statearr_21644[(1)] = (1));

return statearr_21644;
});
var state_machine__6460__auto____1 = (function (state_21618){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_21618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e21645){if((e21645 instanceof Object)){
var ex__6463__auto__ = e21645;
var statearr_21646_21663 = state_21618;
(statearr_21646_21663[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21664 = state_21618;
state_21618 = G__21664;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_21618){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_21618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___21648,out))
})();
var state__6476__auto__ = (function (){var statearr_21647 = f__6475__auto__.call(null);
(statearr_21647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___21648);

return statearr_21647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___21648,out))
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
var c__6474__auto___21807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6474__auto___21807,out){
return (function (){
var f__6475__auto__ = (function (){var switch__6459__auto__ = ((function (c__6474__auto___21807,out){
return (function (state_21777){
var state_val_21778 = (state_21777[(1)]);
if((state_val_21778 === (7))){
var inst_21773 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
var statearr_21779_21808 = state_21777__$1;
(statearr_21779_21808[(2)] = inst_21773);

(statearr_21779_21808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (1))){
var inst_21736 = [];
var inst_21737 = inst_21736;
var inst_21738 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21777__$1 = (function (){var statearr_21780 = state_21777;
(statearr_21780[(7)] = inst_21737);

(statearr_21780[(8)] = inst_21738);

return statearr_21780;
})();
var statearr_21781_21809 = state_21777__$1;
(statearr_21781_21809[(2)] = null);

(statearr_21781_21809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (4))){
var inst_21741 = (state_21777[(9)]);
var inst_21741__$1 = (state_21777[(2)]);
var inst_21742 = (inst_21741__$1 == null);
var inst_21743 = cljs.core.not.call(null,inst_21742);
var state_21777__$1 = (function (){var statearr_21782 = state_21777;
(statearr_21782[(9)] = inst_21741__$1);

return statearr_21782;
})();
if(inst_21743){
var statearr_21783_21810 = state_21777__$1;
(statearr_21783_21810[(1)] = (5));

} else {
var statearr_21784_21811 = state_21777__$1;
(statearr_21784_21811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (15))){
var inst_21767 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
var statearr_21785_21812 = state_21777__$1;
(statearr_21785_21812[(2)] = inst_21767);

(statearr_21785_21812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (13))){
var state_21777__$1 = state_21777;
var statearr_21786_21813 = state_21777__$1;
(statearr_21786_21813[(2)] = null);

(statearr_21786_21813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (6))){
var inst_21737 = (state_21777[(7)]);
var inst_21762 = inst_21737.length;
var inst_21763 = (inst_21762 > (0));
var state_21777__$1 = state_21777;
if(cljs.core.truth_(inst_21763)){
var statearr_21787_21814 = state_21777__$1;
(statearr_21787_21814[(1)] = (12));

} else {
var statearr_21788_21815 = state_21777__$1;
(statearr_21788_21815[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (3))){
var inst_21775 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21777__$1,inst_21775);
} else {
if((state_val_21778 === (12))){
var inst_21737 = (state_21777[(7)]);
var inst_21765 = cljs.core.vec.call(null,inst_21737);
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21777__$1,(15),out,inst_21765);
} else {
if((state_val_21778 === (2))){
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21777__$1,(4),ch);
} else {
if((state_val_21778 === (11))){
var inst_21745 = (state_21777[(10)]);
var inst_21741 = (state_21777[(9)]);
var inst_21755 = (state_21777[(2)]);
var inst_21756 = [];
var inst_21757 = inst_21756.push(inst_21741);
var inst_21737 = inst_21756;
var inst_21738 = inst_21745;
var state_21777__$1 = (function (){var statearr_21789 = state_21777;
(statearr_21789[(11)] = inst_21757);

(statearr_21789[(12)] = inst_21755);

(statearr_21789[(7)] = inst_21737);

(statearr_21789[(8)] = inst_21738);

return statearr_21789;
})();
var statearr_21790_21816 = state_21777__$1;
(statearr_21790_21816[(2)] = null);

(statearr_21790_21816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (9))){
var inst_21737 = (state_21777[(7)]);
var inst_21753 = cljs.core.vec.call(null,inst_21737);
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21777__$1,(11),out,inst_21753);
} else {
if((state_val_21778 === (5))){
var inst_21745 = (state_21777[(10)]);
var inst_21741 = (state_21777[(9)]);
var inst_21738 = (state_21777[(8)]);
var inst_21745__$1 = f.call(null,inst_21741);
var inst_21746 = cljs.core._EQ_.call(null,inst_21745__$1,inst_21738);
var inst_21747 = cljs.core.keyword_identical_QMARK_.call(null,inst_21738,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21748 = (inst_21746) || (inst_21747);
var state_21777__$1 = (function (){var statearr_21791 = state_21777;
(statearr_21791[(10)] = inst_21745__$1);

return statearr_21791;
})();
if(cljs.core.truth_(inst_21748)){
var statearr_21792_21817 = state_21777__$1;
(statearr_21792_21817[(1)] = (8));

} else {
var statearr_21793_21818 = state_21777__$1;
(statearr_21793_21818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (14))){
var inst_21770 = (state_21777[(2)]);
var inst_21771 = cljs.core.async.close_BANG_.call(null,out);
var state_21777__$1 = (function (){var statearr_21795 = state_21777;
(statearr_21795[(13)] = inst_21770);

return statearr_21795;
})();
var statearr_21796_21819 = state_21777__$1;
(statearr_21796_21819[(2)] = inst_21771);

(statearr_21796_21819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (10))){
var inst_21760 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
var statearr_21797_21820 = state_21777__$1;
(statearr_21797_21820[(2)] = inst_21760);

(statearr_21797_21820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (8))){
var inst_21745 = (state_21777[(10)]);
var inst_21741 = (state_21777[(9)]);
var inst_21737 = (state_21777[(7)]);
var inst_21750 = inst_21737.push(inst_21741);
var tmp21794 = inst_21737;
var inst_21737__$1 = tmp21794;
var inst_21738 = inst_21745;
var state_21777__$1 = (function (){var statearr_21798 = state_21777;
(statearr_21798[(14)] = inst_21750);

(statearr_21798[(7)] = inst_21737__$1);

(statearr_21798[(8)] = inst_21738);

return statearr_21798;
})();
var statearr_21799_21821 = state_21777__$1;
(statearr_21799_21821[(2)] = null);

(statearr_21799_21821[(1)] = (2));


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
});})(c__6474__auto___21807,out))
;
return ((function (switch__6459__auto__,c__6474__auto___21807,out){
return (function() {
var state_machine__6460__auto__ = null;
var state_machine__6460__auto____0 = (function (){
var statearr_21803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21803[(0)] = state_machine__6460__auto__);

(statearr_21803[(1)] = (1));

return statearr_21803;
});
var state_machine__6460__auto____1 = (function (state_21777){
while(true){
var ret_value__6461__auto__ = (function (){try{while(true){
var result__6462__auto__ = switch__6459__auto__.call(null,state_21777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6462__auto__;
}
break;
}
}catch (e21804){if((e21804 instanceof Object)){
var ex__6463__auto__ = e21804;
var statearr_21805_21822 = state_21777;
(statearr_21805_21822[(5)] = ex__6463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21823 = state_21777;
state_21777 = G__21823;
continue;
} else {
return ret_value__6461__auto__;
}
break;
}
});
state_machine__6460__auto__ = function(state_21777){
switch(arguments.length){
case 0:
return state_machine__6460__auto____0.call(this);
case 1:
return state_machine__6460__auto____1.call(this,state_21777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6460__auto____0;
state_machine__6460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6460__auto____1;
return state_machine__6460__auto__;
})()
;})(switch__6459__auto__,c__6474__auto___21807,out))
})();
var state__6476__auto__ = (function (){var statearr_21806 = f__6475__auto__.call(null);
(statearr_21806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6474__auto___21807);

return statearr_21806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6476__auto__);
});})(c__6474__auto___21807,out))
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
