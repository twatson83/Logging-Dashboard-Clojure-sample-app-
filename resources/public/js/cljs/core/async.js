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
if(typeof cljs.core.async.t19176 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19176 = (function (f,fn_handler,meta19177){
this.f = f;
this.fn_handler = fn_handler;
this.meta19177 = meta19177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19178){
var self__ = this;
var _19178__$1 = this;
return self__.meta19177;
});

cljs.core.async.t19176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19178,meta19177__$1){
var self__ = this;
var _19178__$1 = this;
return (new cljs.core.async.t19176(self__.f,self__.fn_handler,meta19177__$1));
});

cljs.core.async.t19176.cljs$lang$type = true;

cljs.core.async.t19176.cljs$lang$ctorStr = "cljs.core.async/t19176";

cljs.core.async.t19176.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19176");
});

cljs.core.async.__GT_t19176 = (function __GT_t19176(f__$1,fn_handler__$1,meta19177){
return (new cljs.core.async.t19176(f__$1,fn_handler__$1,meta19177));
});

}

return (new cljs.core.async.t19176(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__19180 = buff;
if(G__19180){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__19180.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19180.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19180);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19180);
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
var val_19181 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19181);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19181,ret){
return (function (){
return fn1.call(null,val_19181);
});})(val_19181,ret))
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
var n__4643__auto___19182 = n;
var x_19183 = (0);
while(true){
if((x_19183 < n__4643__auto___19182)){
(a[x_19183] = (0));

var G__19184 = (x_19183 + (1));
x_19183 = G__19184;
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

var G__19185 = (i + (1));
i = G__19185;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19189 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19189 = (function (flag,alt_flag,meta19190){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19190 = meta19190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19189.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19191){
var self__ = this;
var _19191__$1 = this;
return self__.meta19190;
});})(flag))
;

cljs.core.async.t19189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19191,meta19190__$1){
var self__ = this;
var _19191__$1 = this;
return (new cljs.core.async.t19189(self__.flag,self__.alt_flag,meta19190__$1));
});})(flag))
;

cljs.core.async.t19189.cljs$lang$type = true;

cljs.core.async.t19189.cljs$lang$ctorStr = "cljs.core.async/t19189";

cljs.core.async.t19189.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19189");
});})(flag))
;

cljs.core.async.__GT_t19189 = ((function (flag){
return (function __GT_t19189(flag__$1,alt_flag__$1,meta19190){
return (new cljs.core.async.t19189(flag__$1,alt_flag__$1,meta19190));
});})(flag))
;

}

return (new cljs.core.async.t19189(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19195 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19195 = (function (cb,flag,alt_handler,meta19196){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19196 = meta19196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19195.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19197){
var self__ = this;
var _19197__$1 = this;
return self__.meta19196;
});

cljs.core.async.t19195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19197,meta19196__$1){
var self__ = this;
var _19197__$1 = this;
return (new cljs.core.async.t19195(self__.cb,self__.flag,self__.alt_handler,meta19196__$1));
});

cljs.core.async.t19195.cljs$lang$type = true;

cljs.core.async.t19195.cljs$lang$ctorStr = "cljs.core.async/t19195";

cljs.core.async.t19195.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19195");
});

cljs.core.async.__GT_t19195 = (function __GT_t19195(cb__$1,flag__$1,alt_handler__$1,meta19196){
return (new cljs.core.async.t19195(cb__$1,flag__$1,alt_handler__$1,meta19196));
});

}

return (new cljs.core.async.t19195(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__19198_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19198_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19199_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19199_SHARP_,port], null));
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
var G__19200 = (i + (1));
i = G__19200;
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
var alts_BANG___delegate = function (ports,p__19201){
var map__19203 = p__19201;
var map__19203__$1 = ((cljs.core.seq_QMARK_.call(null,map__19203))?cljs.core.apply.call(null,cljs.core.hash_map,map__19203):map__19203);
var opts = map__19203__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19201 = null;
if (arguments.length > 1) {
  p__19201 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19201);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19204){
var ports = cljs.core.first(arglist__19204);
var p__19201 = cljs.core.rest(arglist__19204);
return alts_BANG___delegate(ports,p__19201);
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
var c__6679__auto___19299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___19299){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___19299){
return (function (state_19275){
var state_val_19276 = (state_19275[(1)]);
if((state_val_19276 === (7))){
var inst_19271 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19277_19300 = state_19275__$1;
(statearr_19277_19300[(2)] = inst_19271);

(statearr_19277_19300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (1))){
var state_19275__$1 = state_19275;
var statearr_19278_19301 = state_19275__$1;
(statearr_19278_19301[(2)] = null);

(statearr_19278_19301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (4))){
var inst_19254 = (state_19275[(7)]);
var inst_19254__$1 = (state_19275[(2)]);
var inst_19255 = (inst_19254__$1 == null);
var state_19275__$1 = (function (){var statearr_19279 = state_19275;
(statearr_19279[(7)] = inst_19254__$1);

return statearr_19279;
})();
if(cljs.core.truth_(inst_19255)){
var statearr_19280_19302 = state_19275__$1;
(statearr_19280_19302[(1)] = (5));

} else {
var statearr_19281_19303 = state_19275__$1;
(statearr_19281_19303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (13))){
var state_19275__$1 = state_19275;
var statearr_19282_19304 = state_19275__$1;
(statearr_19282_19304[(2)] = null);

(statearr_19282_19304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (6))){
var inst_19254 = (state_19275[(7)]);
var state_19275__$1 = state_19275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19275__$1,(11),to,inst_19254);
} else {
if((state_val_19276 === (3))){
var inst_19273 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19275__$1,inst_19273);
} else {
if((state_val_19276 === (12))){
var state_19275__$1 = state_19275;
var statearr_19283_19305 = state_19275__$1;
(statearr_19283_19305[(2)] = null);

(statearr_19283_19305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (2))){
var state_19275__$1 = state_19275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19275__$1,(4),from);
} else {
if((state_val_19276 === (11))){
var inst_19264 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
if(cljs.core.truth_(inst_19264)){
var statearr_19284_19306 = state_19275__$1;
(statearr_19284_19306[(1)] = (12));

} else {
var statearr_19285_19307 = state_19275__$1;
(statearr_19285_19307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (9))){
var state_19275__$1 = state_19275;
var statearr_19286_19308 = state_19275__$1;
(statearr_19286_19308[(2)] = null);

(statearr_19286_19308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (5))){
var state_19275__$1 = state_19275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19287_19309 = state_19275__$1;
(statearr_19287_19309[(1)] = (8));

} else {
var statearr_19288_19310 = state_19275__$1;
(statearr_19288_19310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (14))){
var inst_19269 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19289_19311 = state_19275__$1;
(statearr_19289_19311[(2)] = inst_19269);

(statearr_19289_19311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (10))){
var inst_19261 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19290_19312 = state_19275__$1;
(statearr_19290_19312[(2)] = inst_19261);

(statearr_19290_19312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19276 === (8))){
var inst_19258 = cljs.core.async.close_BANG_.call(null,to);
var state_19275__$1 = state_19275;
var statearr_19291_19313 = state_19275__$1;
(statearr_19291_19313[(2)] = inst_19258);

(statearr_19291_19313[(1)] = (10));


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
});})(c__6679__auto___19299))
;
return ((function (switch__6664__auto__,c__6679__auto___19299){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19295 = [null,null,null,null,null,null,null,null];
(statearr_19295[(0)] = state_machine__6665__auto__);

(statearr_19295[(1)] = (1));

return statearr_19295;
});
var state_machine__6665__auto____1 = (function (state_19275){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19296){if((e19296 instanceof Object)){
var ex__6668__auto__ = e19296;
var statearr_19297_19314 = state_19275;
(statearr_19297_19314[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19315 = state_19275;
state_19275 = G__19315;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19275){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___19299))
})();
var state__6681__auto__ = (function (){var statearr_19298 = f__6680__auto__.call(null);
(statearr_19298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___19299);

return statearr_19298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___19299))
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
return (function (p__19499){
var vec__19500 = p__19499;
var v = cljs.core.nth.call(null,vec__19500,(0),null);
var p = cljs.core.nth.call(null,vec__19500,(1),null);
var job = vec__19500;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6679__auto___19682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___19682,res,vec__19500,v,p,job,jobs,results){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___19682,res,vec__19500,v,p,job,jobs,results){
return (function (state_19505){
var state_val_19506 = (state_19505[(1)]);
if((state_val_19506 === (2))){
var inst_19502 = (state_19505[(2)]);
var inst_19503 = cljs.core.async.close_BANG_.call(null,res);
var state_19505__$1 = (function (){var statearr_19507 = state_19505;
(statearr_19507[(7)] = inst_19502);

return statearr_19507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19505__$1,inst_19503);
} else {
if((state_val_19506 === (1))){
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19505__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6679__auto___19682,res,vec__19500,v,p,job,jobs,results))
;
return ((function (switch__6664__auto__,c__6679__auto___19682,res,vec__19500,v,p,job,jobs,results){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19511 = [null,null,null,null,null,null,null,null];
(statearr_19511[(0)] = state_machine__6665__auto__);

(statearr_19511[(1)] = (1));

return statearr_19511;
});
var state_machine__6665__auto____1 = (function (state_19505){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19512){if((e19512 instanceof Object)){
var ex__6668__auto__ = e19512;
var statearr_19513_19683 = state_19505;
(statearr_19513_19683[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19684 = state_19505;
state_19505 = G__19684;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19505){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___19682,res,vec__19500,v,p,job,jobs,results))
})();
var state__6681__auto__ = (function (){var statearr_19514 = f__6680__auto__.call(null);
(statearr_19514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___19682);

return statearr_19514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___19682,res,vec__19500,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19515){
var vec__19516 = p__19515;
var v = cljs.core.nth.call(null,vec__19516,(0),null);
var p = cljs.core.nth.call(null,vec__19516,(1),null);
var job = vec__19516;
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
var n__4643__auto___19685 = n;
var __19686 = (0);
while(true){
if((__19686 < n__4643__auto___19685)){
var G__19517_19687 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19517_19687) {
case "async":
var c__6679__auto___19689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19686,c__6679__auto___19689,G__19517_19687,n__4643__auto___19685,jobs,results,process,async){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (__19686,c__6679__auto___19689,G__19517_19687,n__4643__auto___19685,jobs,results,process,async){
return (function (state_19530){
var state_val_19531 = (state_19530[(1)]);
if((state_val_19531 === (7))){
var inst_19526 = (state_19530[(2)]);
var state_19530__$1 = state_19530;
var statearr_19532_19690 = state_19530__$1;
(statearr_19532_19690[(2)] = inst_19526);

(statearr_19532_19690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19531 === (6))){
var state_19530__$1 = state_19530;
var statearr_19533_19691 = state_19530__$1;
(statearr_19533_19691[(2)] = null);

(statearr_19533_19691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19531 === (5))){
var state_19530__$1 = state_19530;
var statearr_19534_19692 = state_19530__$1;
(statearr_19534_19692[(2)] = null);

(statearr_19534_19692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19531 === (4))){
var inst_19520 = (state_19530[(2)]);
var inst_19521 = async.call(null,inst_19520);
var state_19530__$1 = state_19530;
if(cljs.core.truth_(inst_19521)){
var statearr_19535_19693 = state_19530__$1;
(statearr_19535_19693[(1)] = (5));

} else {
var statearr_19536_19694 = state_19530__$1;
(statearr_19536_19694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19531 === (3))){
var inst_19528 = (state_19530[(2)]);
var state_19530__$1 = state_19530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19530__$1,inst_19528);
} else {
if((state_val_19531 === (2))){
var state_19530__$1 = state_19530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19530__$1,(4),jobs);
} else {
if((state_val_19531 === (1))){
var state_19530__$1 = state_19530;
var statearr_19537_19695 = state_19530__$1;
(statearr_19537_19695[(2)] = null);

(statearr_19537_19695[(1)] = (2));


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
});})(__19686,c__6679__auto___19689,G__19517_19687,n__4643__auto___19685,jobs,results,process,async))
;
return ((function (__19686,switch__6664__auto__,c__6679__auto___19689,G__19517_19687,n__4643__auto___19685,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19541 = [null,null,null,null,null,null,null];
(statearr_19541[(0)] = state_machine__6665__auto__);

(statearr_19541[(1)] = (1));

return statearr_19541;
});
var state_machine__6665__auto____1 = (function (state_19530){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19542){if((e19542 instanceof Object)){
var ex__6668__auto__ = e19542;
var statearr_19543_19696 = state_19530;
(statearr_19543_19696[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19697 = state_19530;
state_19530 = G__19697;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19530){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(__19686,switch__6664__auto__,c__6679__auto___19689,G__19517_19687,n__4643__auto___19685,jobs,results,process,async))
})();
var state__6681__auto__ = (function (){var statearr_19544 = f__6680__auto__.call(null);
(statearr_19544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___19689);

return statearr_19544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(__19686,c__6679__auto___19689,G__19517_19687,n__4643__auto___19685,jobs,results,process,async))
);


break;
case "compute":
var c__6679__auto___19698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19686,c__6679__auto___19698,G__19517_19687,n__4643__auto___19685,jobs,results,process,async){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (__19686,c__6679__auto___19698,G__19517_19687,n__4643__auto___19685,jobs,results,process,async){
return (function (state_19557){
var state_val_19558 = (state_19557[(1)]);
if((state_val_19558 === (7))){
var inst_19553 = (state_19557[(2)]);
var state_19557__$1 = state_19557;
var statearr_19559_19699 = state_19557__$1;
(statearr_19559_19699[(2)] = inst_19553);

(statearr_19559_19699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (6))){
var state_19557__$1 = state_19557;
var statearr_19560_19700 = state_19557__$1;
(statearr_19560_19700[(2)] = null);

(statearr_19560_19700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (5))){
var state_19557__$1 = state_19557;
var statearr_19561_19701 = state_19557__$1;
(statearr_19561_19701[(2)] = null);

(statearr_19561_19701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (4))){
var inst_19547 = (state_19557[(2)]);
var inst_19548 = process.call(null,inst_19547);
var state_19557__$1 = state_19557;
if(cljs.core.truth_(inst_19548)){
var statearr_19562_19702 = state_19557__$1;
(statearr_19562_19702[(1)] = (5));

} else {
var statearr_19563_19703 = state_19557__$1;
(statearr_19563_19703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (3))){
var inst_19555 = (state_19557[(2)]);
var state_19557__$1 = state_19557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19557__$1,inst_19555);
} else {
if((state_val_19558 === (2))){
var state_19557__$1 = state_19557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19557__$1,(4),jobs);
} else {
if((state_val_19558 === (1))){
var state_19557__$1 = state_19557;
var statearr_19564_19704 = state_19557__$1;
(statearr_19564_19704[(2)] = null);

(statearr_19564_19704[(1)] = (2));


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
});})(__19686,c__6679__auto___19698,G__19517_19687,n__4643__auto___19685,jobs,results,process,async))
;
return ((function (__19686,switch__6664__auto__,c__6679__auto___19698,G__19517_19687,n__4643__auto___19685,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19568 = [null,null,null,null,null,null,null];
(statearr_19568[(0)] = state_machine__6665__auto__);

(statearr_19568[(1)] = (1));

return statearr_19568;
});
var state_machine__6665__auto____1 = (function (state_19557){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19569){if((e19569 instanceof Object)){
var ex__6668__auto__ = e19569;
var statearr_19570_19705 = state_19557;
(statearr_19570_19705[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19706 = state_19557;
state_19557 = G__19706;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19557){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(__19686,switch__6664__auto__,c__6679__auto___19698,G__19517_19687,n__4643__auto___19685,jobs,results,process,async))
})();
var state__6681__auto__ = (function (){var statearr_19571 = f__6680__auto__.call(null);
(statearr_19571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___19698);

return statearr_19571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(__19686,c__6679__auto___19698,G__19517_19687,n__4643__auto___19685,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19707 = (__19686 + (1));
__19686 = G__19707;
continue;
} else {
}
break;
}

var c__6679__auto___19708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___19708,jobs,results,process,async){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___19708,jobs,results,process,async){
return (function (state_19593){
var state_val_19594 = (state_19593[(1)]);
if((state_val_19594 === (9))){
var inst_19586 = (state_19593[(2)]);
var state_19593__$1 = (function (){var statearr_19595 = state_19593;
(statearr_19595[(7)] = inst_19586);

return statearr_19595;
})();
var statearr_19596_19709 = state_19593__$1;
(statearr_19596_19709[(2)] = null);

(statearr_19596_19709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (8))){
var inst_19579 = (state_19593[(8)]);
var inst_19584 = (state_19593[(2)]);
var state_19593__$1 = (function (){var statearr_19597 = state_19593;
(statearr_19597[(9)] = inst_19584);

return statearr_19597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19593__$1,(9),results,inst_19579);
} else {
if((state_val_19594 === (7))){
var inst_19589 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
var statearr_19598_19710 = state_19593__$1;
(statearr_19598_19710[(2)] = inst_19589);

(statearr_19598_19710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (6))){
var inst_19574 = (state_19593[(10)]);
var inst_19579 = (state_19593[(8)]);
var inst_19579__$1 = cljs.core.async.chan.call(null,(1));
var inst_19580 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19581 = [inst_19574,inst_19579__$1];
var inst_19582 = (new cljs.core.PersistentVector(null,2,(5),inst_19580,inst_19581,null));
var state_19593__$1 = (function (){var statearr_19599 = state_19593;
(statearr_19599[(8)] = inst_19579__$1);

return statearr_19599;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19593__$1,(8),jobs,inst_19582);
} else {
if((state_val_19594 === (5))){
var inst_19577 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19593__$1 = state_19593;
var statearr_19600_19711 = state_19593__$1;
(statearr_19600_19711[(2)] = inst_19577);

(statearr_19600_19711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (4))){
var inst_19574 = (state_19593[(10)]);
var inst_19574__$1 = (state_19593[(2)]);
var inst_19575 = (inst_19574__$1 == null);
var state_19593__$1 = (function (){var statearr_19601 = state_19593;
(statearr_19601[(10)] = inst_19574__$1);

return statearr_19601;
})();
if(cljs.core.truth_(inst_19575)){
var statearr_19602_19712 = state_19593__$1;
(statearr_19602_19712[(1)] = (5));

} else {
var statearr_19603_19713 = state_19593__$1;
(statearr_19603_19713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (3))){
var inst_19591 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19593__$1,inst_19591);
} else {
if((state_val_19594 === (2))){
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19593__$1,(4),from);
} else {
if((state_val_19594 === (1))){
var state_19593__$1 = state_19593;
var statearr_19604_19714 = state_19593__$1;
(statearr_19604_19714[(2)] = null);

(statearr_19604_19714[(1)] = (2));


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
});})(c__6679__auto___19708,jobs,results,process,async))
;
return ((function (switch__6664__auto__,c__6679__auto___19708,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19608[(0)] = state_machine__6665__auto__);

(statearr_19608[(1)] = (1));

return statearr_19608;
});
var state_machine__6665__auto____1 = (function (state_19593){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19609){if((e19609 instanceof Object)){
var ex__6668__auto__ = e19609;
var statearr_19610_19715 = state_19593;
(statearr_19610_19715[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19716 = state_19593;
state_19593 = G__19716;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19593){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___19708,jobs,results,process,async))
})();
var state__6681__auto__ = (function (){var statearr_19611 = f__6680__auto__.call(null);
(statearr_19611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___19708);

return statearr_19611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___19708,jobs,results,process,async))
);


var c__6679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto__,jobs,results,process,async){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto__,jobs,results,process,async){
return (function (state_19649){
var state_val_19650 = (state_19649[(1)]);
if((state_val_19650 === (7))){
var inst_19645 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19651_19717 = state_19649__$1;
(statearr_19651_19717[(2)] = inst_19645);

(statearr_19651_19717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (20))){
var state_19649__$1 = state_19649;
var statearr_19652_19718 = state_19649__$1;
(statearr_19652_19718[(2)] = null);

(statearr_19652_19718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (1))){
var state_19649__$1 = state_19649;
var statearr_19653_19719 = state_19649__$1;
(statearr_19653_19719[(2)] = null);

(statearr_19653_19719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (4))){
var inst_19614 = (state_19649[(7)]);
var inst_19614__$1 = (state_19649[(2)]);
var inst_19615 = (inst_19614__$1 == null);
var state_19649__$1 = (function (){var statearr_19654 = state_19649;
(statearr_19654[(7)] = inst_19614__$1);

return statearr_19654;
})();
if(cljs.core.truth_(inst_19615)){
var statearr_19655_19720 = state_19649__$1;
(statearr_19655_19720[(1)] = (5));

} else {
var statearr_19656_19721 = state_19649__$1;
(statearr_19656_19721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (15))){
var inst_19627 = (state_19649[(8)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19649__$1,(18),to,inst_19627);
} else {
if((state_val_19650 === (21))){
var inst_19640 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19657_19722 = state_19649__$1;
(statearr_19657_19722[(2)] = inst_19640);

(statearr_19657_19722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (13))){
var inst_19642 = (state_19649[(2)]);
var state_19649__$1 = (function (){var statearr_19658 = state_19649;
(statearr_19658[(9)] = inst_19642);

return statearr_19658;
})();
var statearr_19659_19723 = state_19649__$1;
(statearr_19659_19723[(2)] = null);

(statearr_19659_19723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (6))){
var inst_19614 = (state_19649[(7)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19649__$1,(11),inst_19614);
} else {
if((state_val_19650 === (17))){
var inst_19635 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
if(cljs.core.truth_(inst_19635)){
var statearr_19660_19724 = state_19649__$1;
(statearr_19660_19724[(1)] = (19));

} else {
var statearr_19661_19725 = state_19649__$1;
(statearr_19661_19725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (3))){
var inst_19647 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19649__$1,inst_19647);
} else {
if((state_val_19650 === (12))){
var inst_19624 = (state_19649[(10)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19649__$1,(14),inst_19624);
} else {
if((state_val_19650 === (2))){
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19649__$1,(4),results);
} else {
if((state_val_19650 === (19))){
var state_19649__$1 = state_19649;
var statearr_19662_19726 = state_19649__$1;
(statearr_19662_19726[(2)] = null);

(statearr_19662_19726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (11))){
var inst_19624 = (state_19649[(2)]);
var state_19649__$1 = (function (){var statearr_19663 = state_19649;
(statearr_19663[(10)] = inst_19624);

return statearr_19663;
})();
var statearr_19664_19727 = state_19649__$1;
(statearr_19664_19727[(2)] = null);

(statearr_19664_19727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (9))){
var state_19649__$1 = state_19649;
var statearr_19665_19728 = state_19649__$1;
(statearr_19665_19728[(2)] = null);

(statearr_19665_19728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (5))){
var state_19649__$1 = state_19649;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19666_19729 = state_19649__$1;
(statearr_19666_19729[(1)] = (8));

} else {
var statearr_19667_19730 = state_19649__$1;
(statearr_19667_19730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (14))){
var inst_19629 = (state_19649[(11)]);
var inst_19627 = (state_19649[(8)]);
var inst_19627__$1 = (state_19649[(2)]);
var inst_19628 = (inst_19627__$1 == null);
var inst_19629__$1 = cljs.core.not.call(null,inst_19628);
var state_19649__$1 = (function (){var statearr_19668 = state_19649;
(statearr_19668[(11)] = inst_19629__$1);

(statearr_19668[(8)] = inst_19627__$1);

return statearr_19668;
})();
if(inst_19629__$1){
var statearr_19669_19731 = state_19649__$1;
(statearr_19669_19731[(1)] = (15));

} else {
var statearr_19670_19732 = state_19649__$1;
(statearr_19670_19732[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (16))){
var inst_19629 = (state_19649[(11)]);
var state_19649__$1 = state_19649;
var statearr_19671_19733 = state_19649__$1;
(statearr_19671_19733[(2)] = inst_19629);

(statearr_19671_19733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (10))){
var inst_19621 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19672_19734 = state_19649__$1;
(statearr_19672_19734[(2)] = inst_19621);

(statearr_19672_19734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (18))){
var inst_19632 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19673_19735 = state_19649__$1;
(statearr_19673_19735[(2)] = inst_19632);

(statearr_19673_19735[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19650 === (8))){
var inst_19618 = cljs.core.async.close_BANG_.call(null,to);
var state_19649__$1 = state_19649;
var statearr_19674_19736 = state_19649__$1;
(statearr_19674_19736[(2)] = inst_19618);

(statearr_19674_19736[(1)] = (10));


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
});})(c__6679__auto__,jobs,results,process,async))
;
return ((function (switch__6664__auto__,c__6679__auto__,jobs,results,process,async){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19678[(0)] = state_machine__6665__auto__);

(statearr_19678[(1)] = (1));

return statearr_19678;
});
var state_machine__6665__auto____1 = (function (state_19649){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19679){if((e19679 instanceof Object)){
var ex__6668__auto__ = e19679;
var statearr_19680_19737 = state_19649;
(statearr_19680_19737[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19738 = state_19649;
state_19649 = G__19738;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19649){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto__,jobs,results,process,async))
})();
var state__6681__auto__ = (function (){var statearr_19681 = f__6680__auto__.call(null);
(statearr_19681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto__);

return statearr_19681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto__,jobs,results,process,async))
);

return c__6679__auto__;
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
var c__6679__auto___19839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___19839,tc,fc){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___19839,tc,fc){
return (function (state_19814){
var state_val_19815 = (state_19814[(1)]);
if((state_val_19815 === (7))){
var inst_19810 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
var statearr_19816_19840 = state_19814__$1;
(statearr_19816_19840[(2)] = inst_19810);

(statearr_19816_19840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (1))){
var state_19814__$1 = state_19814;
var statearr_19817_19841 = state_19814__$1;
(statearr_19817_19841[(2)] = null);

(statearr_19817_19841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (4))){
var inst_19791 = (state_19814[(7)]);
var inst_19791__$1 = (state_19814[(2)]);
var inst_19792 = (inst_19791__$1 == null);
var state_19814__$1 = (function (){var statearr_19818 = state_19814;
(statearr_19818[(7)] = inst_19791__$1);

return statearr_19818;
})();
if(cljs.core.truth_(inst_19792)){
var statearr_19819_19842 = state_19814__$1;
(statearr_19819_19842[(1)] = (5));

} else {
var statearr_19820_19843 = state_19814__$1;
(statearr_19820_19843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (13))){
var state_19814__$1 = state_19814;
var statearr_19821_19844 = state_19814__$1;
(statearr_19821_19844[(2)] = null);

(statearr_19821_19844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (6))){
var inst_19791 = (state_19814[(7)]);
var inst_19797 = p.call(null,inst_19791);
var state_19814__$1 = state_19814;
if(cljs.core.truth_(inst_19797)){
var statearr_19822_19845 = state_19814__$1;
(statearr_19822_19845[(1)] = (9));

} else {
var statearr_19823_19846 = state_19814__$1;
(statearr_19823_19846[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (3))){
var inst_19812 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19814__$1,inst_19812);
} else {
if((state_val_19815 === (12))){
var state_19814__$1 = state_19814;
var statearr_19824_19847 = state_19814__$1;
(statearr_19824_19847[(2)] = null);

(statearr_19824_19847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (2))){
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19814__$1,(4),ch);
} else {
if((state_val_19815 === (11))){
var inst_19791 = (state_19814[(7)]);
var inst_19801 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19814__$1,(8),inst_19801,inst_19791);
} else {
if((state_val_19815 === (9))){
var state_19814__$1 = state_19814;
var statearr_19825_19848 = state_19814__$1;
(statearr_19825_19848[(2)] = tc);

(statearr_19825_19848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (5))){
var inst_19794 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19795 = cljs.core.async.close_BANG_.call(null,fc);
var state_19814__$1 = (function (){var statearr_19826 = state_19814;
(statearr_19826[(8)] = inst_19794);

return statearr_19826;
})();
var statearr_19827_19849 = state_19814__$1;
(statearr_19827_19849[(2)] = inst_19795);

(statearr_19827_19849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (14))){
var inst_19808 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
var statearr_19828_19850 = state_19814__$1;
(statearr_19828_19850[(2)] = inst_19808);

(statearr_19828_19850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (10))){
var state_19814__$1 = state_19814;
var statearr_19829_19851 = state_19814__$1;
(statearr_19829_19851[(2)] = fc);

(statearr_19829_19851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (8))){
var inst_19803 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
if(cljs.core.truth_(inst_19803)){
var statearr_19830_19852 = state_19814__$1;
(statearr_19830_19852[(1)] = (12));

} else {
var statearr_19831_19853 = state_19814__$1;
(statearr_19831_19853[(1)] = (13));

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
});})(c__6679__auto___19839,tc,fc))
;
return ((function (switch__6664__auto__,c__6679__auto___19839,tc,fc){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19835 = [null,null,null,null,null,null,null,null,null];
(statearr_19835[(0)] = state_machine__6665__auto__);

(statearr_19835[(1)] = (1));

return statearr_19835;
});
var state_machine__6665__auto____1 = (function (state_19814){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19836){if((e19836 instanceof Object)){
var ex__6668__auto__ = e19836;
var statearr_19837_19854 = state_19814;
(statearr_19837_19854[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19855 = state_19814;
state_19814 = G__19855;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19814){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___19839,tc,fc))
})();
var state__6681__auto__ = (function (){var statearr_19838 = f__6680__auto__.call(null);
(statearr_19838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___19839);

return statearr_19838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___19839,tc,fc))
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
var c__6679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto__){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto__){
return (function (state_19902){
var state_val_19903 = (state_19902[(1)]);
if((state_val_19903 === (7))){
var inst_19898 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19904_19920 = state_19902__$1;
(statearr_19904_19920[(2)] = inst_19898);

(statearr_19904_19920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (6))){
var inst_19888 = (state_19902[(7)]);
var inst_19891 = (state_19902[(8)]);
var inst_19895 = f.call(null,inst_19888,inst_19891);
var inst_19888__$1 = inst_19895;
var state_19902__$1 = (function (){var statearr_19905 = state_19902;
(statearr_19905[(7)] = inst_19888__$1);

return statearr_19905;
})();
var statearr_19906_19921 = state_19902__$1;
(statearr_19906_19921[(2)] = null);

(statearr_19906_19921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (5))){
var inst_19888 = (state_19902[(7)]);
var state_19902__$1 = state_19902;
var statearr_19907_19922 = state_19902__$1;
(statearr_19907_19922[(2)] = inst_19888);

(statearr_19907_19922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (4))){
var inst_19891 = (state_19902[(8)]);
var inst_19891__$1 = (state_19902[(2)]);
var inst_19892 = (inst_19891__$1 == null);
var state_19902__$1 = (function (){var statearr_19908 = state_19902;
(statearr_19908[(8)] = inst_19891__$1);

return statearr_19908;
})();
if(cljs.core.truth_(inst_19892)){
var statearr_19909_19923 = state_19902__$1;
(statearr_19909_19923[(1)] = (5));

} else {
var statearr_19910_19924 = state_19902__$1;
(statearr_19910_19924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (3))){
var inst_19900 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19902__$1,inst_19900);
} else {
if((state_val_19903 === (2))){
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19902__$1,(4),ch);
} else {
if((state_val_19903 === (1))){
var inst_19888 = init;
var state_19902__$1 = (function (){var statearr_19911 = state_19902;
(statearr_19911[(7)] = inst_19888);

return statearr_19911;
})();
var statearr_19912_19925 = state_19902__$1;
(statearr_19912_19925[(2)] = null);

(statearr_19912_19925[(1)] = (2));


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
});})(c__6679__auto__))
;
return ((function (switch__6664__auto__,c__6679__auto__){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_19916 = [null,null,null,null,null,null,null,null,null];
(statearr_19916[(0)] = state_machine__6665__auto__);

(statearr_19916[(1)] = (1));

return statearr_19916;
});
var state_machine__6665__auto____1 = (function (state_19902){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_19902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e19917){if((e19917 instanceof Object)){
var ex__6668__auto__ = e19917;
var statearr_19918_19926 = state_19902;
(statearr_19918_19926[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19927 = state_19902;
state_19902 = G__19927;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_19902){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_19902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto__))
})();
var state__6681__auto__ = (function (){var statearr_19919 = f__6680__auto__.call(null);
(statearr_19919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto__);

return statearr_19919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto__))
);

return c__6679__auto__;
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
var c__6679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto__){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto__){
return (function (state_20001){
var state_val_20002 = (state_20001[(1)]);
if((state_val_20002 === (7))){
var inst_19983 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20003_20026 = state_20001__$1;
(statearr_20003_20026[(2)] = inst_19983);

(statearr_20003_20026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (1))){
var inst_19977 = cljs.core.seq.call(null,coll);
var inst_19978 = inst_19977;
var state_20001__$1 = (function (){var statearr_20004 = state_20001;
(statearr_20004[(7)] = inst_19978);

return statearr_20004;
})();
var statearr_20005_20027 = state_20001__$1;
(statearr_20005_20027[(2)] = null);

(statearr_20005_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (4))){
var inst_19978 = (state_20001[(7)]);
var inst_19981 = cljs.core.first.call(null,inst_19978);
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20001__$1,(7),ch,inst_19981);
} else {
if((state_val_20002 === (13))){
var inst_19995 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20006_20028 = state_20001__$1;
(statearr_20006_20028[(2)] = inst_19995);

(statearr_20006_20028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (6))){
var inst_19986 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
if(cljs.core.truth_(inst_19986)){
var statearr_20007_20029 = state_20001__$1;
(statearr_20007_20029[(1)] = (8));

} else {
var statearr_20008_20030 = state_20001__$1;
(statearr_20008_20030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (3))){
var inst_19999 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20001__$1,inst_19999);
} else {
if((state_val_20002 === (12))){
var state_20001__$1 = state_20001;
var statearr_20009_20031 = state_20001__$1;
(statearr_20009_20031[(2)] = null);

(statearr_20009_20031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (2))){
var inst_19978 = (state_20001[(7)]);
var state_20001__$1 = state_20001;
if(cljs.core.truth_(inst_19978)){
var statearr_20010_20032 = state_20001__$1;
(statearr_20010_20032[(1)] = (4));

} else {
var statearr_20011_20033 = state_20001__$1;
(statearr_20011_20033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (11))){
var inst_19992 = cljs.core.async.close_BANG_.call(null,ch);
var state_20001__$1 = state_20001;
var statearr_20012_20034 = state_20001__$1;
(statearr_20012_20034[(2)] = inst_19992);

(statearr_20012_20034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (9))){
var state_20001__$1 = state_20001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20013_20035 = state_20001__$1;
(statearr_20013_20035[(1)] = (11));

} else {
var statearr_20014_20036 = state_20001__$1;
(statearr_20014_20036[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (5))){
var inst_19978 = (state_20001[(7)]);
var state_20001__$1 = state_20001;
var statearr_20015_20037 = state_20001__$1;
(statearr_20015_20037[(2)] = inst_19978);

(statearr_20015_20037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (10))){
var inst_19997 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20016_20038 = state_20001__$1;
(statearr_20016_20038[(2)] = inst_19997);

(statearr_20016_20038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (8))){
var inst_19978 = (state_20001[(7)]);
var inst_19988 = cljs.core.next.call(null,inst_19978);
var inst_19978__$1 = inst_19988;
var state_20001__$1 = (function (){var statearr_20017 = state_20001;
(statearr_20017[(7)] = inst_19978__$1);

return statearr_20017;
})();
var statearr_20018_20039 = state_20001__$1;
(statearr_20018_20039[(2)] = null);

(statearr_20018_20039[(1)] = (2));


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
});})(c__6679__auto__))
;
return ((function (switch__6664__auto__,c__6679__auto__){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_20022 = [null,null,null,null,null,null,null,null];
(statearr_20022[(0)] = state_machine__6665__auto__);

(statearr_20022[(1)] = (1));

return statearr_20022;
});
var state_machine__6665__auto____1 = (function (state_20001){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_20001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e20023){if((e20023 instanceof Object)){
var ex__6668__auto__ = e20023;
var statearr_20024_20040 = state_20001;
(statearr_20024_20040[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20041 = state_20001;
state_20001 = G__20041;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_20001){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_20001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto__))
})();
var state__6681__auto__ = (function (){var statearr_20025 = f__6680__auto__.call(null);
(statearr_20025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto__);

return statearr_20025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto__))
);

return c__6679__auto__;
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

cljs.core.async.Mux = (function (){var obj20043 = {};
return obj20043;
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


cljs.core.async.Mult = (function (){var obj20045 = {};
return obj20045;
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
if(typeof cljs.core.async.t20267 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20267 = (function (cs,ch,mult,meta20268){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20268 = meta20268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20267.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20267.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20267.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20267.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20267.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20269){
var self__ = this;
var _20269__$1 = this;
return self__.meta20268;
});})(cs))
;

cljs.core.async.t20267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20269,meta20268__$1){
var self__ = this;
var _20269__$1 = this;
return (new cljs.core.async.t20267(self__.cs,self__.ch,self__.mult,meta20268__$1));
});})(cs))
;

cljs.core.async.t20267.cljs$lang$type = true;

cljs.core.async.t20267.cljs$lang$ctorStr = "cljs.core.async/t20267";

cljs.core.async.t20267.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20267");
});})(cs))
;

cljs.core.async.__GT_t20267 = ((function (cs){
return (function __GT_t20267(cs__$1,ch__$1,mult__$1,meta20268){
return (new cljs.core.async.t20267(cs__$1,ch__$1,mult__$1,meta20268));
});})(cs))
;

}

return (new cljs.core.async.t20267(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6679__auto___20488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___20488,cs,m,dchan,dctr,done){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___20488,cs,m,dchan,dctr,done){
return (function (state_20400){
var state_val_20401 = (state_20400[(1)]);
if((state_val_20401 === (7))){
var inst_20396 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20402_20489 = state_20400__$1;
(statearr_20402_20489[(2)] = inst_20396);

(statearr_20402_20489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (20))){
var inst_20301 = (state_20400[(7)]);
var inst_20311 = cljs.core.first.call(null,inst_20301);
var inst_20312 = cljs.core.nth.call(null,inst_20311,(0),null);
var inst_20313 = cljs.core.nth.call(null,inst_20311,(1),null);
var state_20400__$1 = (function (){var statearr_20403 = state_20400;
(statearr_20403[(8)] = inst_20312);

return statearr_20403;
})();
if(cljs.core.truth_(inst_20313)){
var statearr_20404_20490 = state_20400__$1;
(statearr_20404_20490[(1)] = (22));

} else {
var statearr_20405_20491 = state_20400__$1;
(statearr_20405_20491[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (27))){
var inst_20348 = (state_20400[(9)]);
var inst_20341 = (state_20400[(10)]);
var inst_20272 = (state_20400[(11)]);
var inst_20343 = (state_20400[(12)]);
var inst_20348__$1 = cljs.core._nth.call(null,inst_20341,inst_20343);
var inst_20349 = cljs.core.async.put_BANG_.call(null,inst_20348__$1,inst_20272,done);
var state_20400__$1 = (function (){var statearr_20406 = state_20400;
(statearr_20406[(9)] = inst_20348__$1);

return statearr_20406;
})();
if(cljs.core.truth_(inst_20349)){
var statearr_20407_20492 = state_20400__$1;
(statearr_20407_20492[(1)] = (30));

} else {
var statearr_20408_20493 = state_20400__$1;
(statearr_20408_20493[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (1))){
var state_20400__$1 = state_20400;
var statearr_20409_20494 = state_20400__$1;
(statearr_20409_20494[(2)] = null);

(statearr_20409_20494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (24))){
var inst_20301 = (state_20400[(7)]);
var inst_20318 = (state_20400[(2)]);
var inst_20319 = cljs.core.next.call(null,inst_20301);
var inst_20281 = inst_20319;
var inst_20282 = null;
var inst_20283 = (0);
var inst_20284 = (0);
var state_20400__$1 = (function (){var statearr_20410 = state_20400;
(statearr_20410[(13)] = inst_20318);

(statearr_20410[(14)] = inst_20284);

(statearr_20410[(15)] = inst_20283);

(statearr_20410[(16)] = inst_20282);

(statearr_20410[(17)] = inst_20281);

return statearr_20410;
})();
var statearr_20411_20495 = state_20400__$1;
(statearr_20411_20495[(2)] = null);

(statearr_20411_20495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (39))){
var state_20400__$1 = state_20400;
var statearr_20415_20496 = state_20400__$1;
(statearr_20415_20496[(2)] = null);

(statearr_20415_20496[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (4))){
var inst_20272 = (state_20400[(11)]);
var inst_20272__$1 = (state_20400[(2)]);
var inst_20273 = (inst_20272__$1 == null);
var state_20400__$1 = (function (){var statearr_20416 = state_20400;
(statearr_20416[(11)] = inst_20272__$1);

return statearr_20416;
})();
if(cljs.core.truth_(inst_20273)){
var statearr_20417_20497 = state_20400__$1;
(statearr_20417_20497[(1)] = (5));

} else {
var statearr_20418_20498 = state_20400__$1;
(statearr_20418_20498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (15))){
var inst_20284 = (state_20400[(14)]);
var inst_20283 = (state_20400[(15)]);
var inst_20282 = (state_20400[(16)]);
var inst_20281 = (state_20400[(17)]);
var inst_20297 = (state_20400[(2)]);
var inst_20298 = (inst_20284 + (1));
var tmp20412 = inst_20283;
var tmp20413 = inst_20282;
var tmp20414 = inst_20281;
var inst_20281__$1 = tmp20414;
var inst_20282__$1 = tmp20413;
var inst_20283__$1 = tmp20412;
var inst_20284__$1 = inst_20298;
var state_20400__$1 = (function (){var statearr_20419 = state_20400;
(statearr_20419[(14)] = inst_20284__$1);

(statearr_20419[(15)] = inst_20283__$1);

(statearr_20419[(18)] = inst_20297);

(statearr_20419[(16)] = inst_20282__$1);

(statearr_20419[(17)] = inst_20281__$1);

return statearr_20419;
})();
var statearr_20420_20499 = state_20400__$1;
(statearr_20420_20499[(2)] = null);

(statearr_20420_20499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (21))){
var inst_20322 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20424_20500 = state_20400__$1;
(statearr_20424_20500[(2)] = inst_20322);

(statearr_20424_20500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (31))){
var inst_20348 = (state_20400[(9)]);
var inst_20352 = done.call(null,null);
var inst_20353 = cljs.core.async.untap_STAR_.call(null,m,inst_20348);
var state_20400__$1 = (function (){var statearr_20425 = state_20400;
(statearr_20425[(19)] = inst_20352);

return statearr_20425;
})();
var statearr_20426_20501 = state_20400__$1;
(statearr_20426_20501[(2)] = inst_20353);

(statearr_20426_20501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (32))){
var inst_20342 = (state_20400[(20)]);
var inst_20341 = (state_20400[(10)]);
var inst_20343 = (state_20400[(12)]);
var inst_20340 = (state_20400[(21)]);
var inst_20355 = (state_20400[(2)]);
var inst_20356 = (inst_20343 + (1));
var tmp20421 = inst_20342;
var tmp20422 = inst_20341;
var tmp20423 = inst_20340;
var inst_20340__$1 = tmp20423;
var inst_20341__$1 = tmp20422;
var inst_20342__$1 = tmp20421;
var inst_20343__$1 = inst_20356;
var state_20400__$1 = (function (){var statearr_20427 = state_20400;
(statearr_20427[(20)] = inst_20342__$1);

(statearr_20427[(10)] = inst_20341__$1);

(statearr_20427[(22)] = inst_20355);

(statearr_20427[(12)] = inst_20343__$1);

(statearr_20427[(21)] = inst_20340__$1);

return statearr_20427;
})();
var statearr_20428_20502 = state_20400__$1;
(statearr_20428_20502[(2)] = null);

(statearr_20428_20502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (40))){
var inst_20368 = (state_20400[(23)]);
var inst_20372 = done.call(null,null);
var inst_20373 = cljs.core.async.untap_STAR_.call(null,m,inst_20368);
var state_20400__$1 = (function (){var statearr_20429 = state_20400;
(statearr_20429[(24)] = inst_20372);

return statearr_20429;
})();
var statearr_20430_20503 = state_20400__$1;
(statearr_20430_20503[(2)] = inst_20373);

(statearr_20430_20503[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (33))){
var inst_20359 = (state_20400[(25)]);
var inst_20361 = cljs.core.chunked_seq_QMARK_.call(null,inst_20359);
var state_20400__$1 = state_20400;
if(inst_20361){
var statearr_20431_20504 = state_20400__$1;
(statearr_20431_20504[(1)] = (36));

} else {
var statearr_20432_20505 = state_20400__$1;
(statearr_20432_20505[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (13))){
var inst_20291 = (state_20400[(26)]);
var inst_20294 = cljs.core.async.close_BANG_.call(null,inst_20291);
var state_20400__$1 = state_20400;
var statearr_20433_20506 = state_20400__$1;
(statearr_20433_20506[(2)] = inst_20294);

(statearr_20433_20506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (22))){
var inst_20312 = (state_20400[(8)]);
var inst_20315 = cljs.core.async.close_BANG_.call(null,inst_20312);
var state_20400__$1 = state_20400;
var statearr_20434_20507 = state_20400__$1;
(statearr_20434_20507[(2)] = inst_20315);

(statearr_20434_20507[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (36))){
var inst_20359 = (state_20400[(25)]);
var inst_20363 = cljs.core.chunk_first.call(null,inst_20359);
var inst_20364 = cljs.core.chunk_rest.call(null,inst_20359);
var inst_20365 = cljs.core.count.call(null,inst_20363);
var inst_20340 = inst_20364;
var inst_20341 = inst_20363;
var inst_20342 = inst_20365;
var inst_20343 = (0);
var state_20400__$1 = (function (){var statearr_20435 = state_20400;
(statearr_20435[(20)] = inst_20342);

(statearr_20435[(10)] = inst_20341);

(statearr_20435[(12)] = inst_20343);

(statearr_20435[(21)] = inst_20340);

return statearr_20435;
})();
var statearr_20436_20508 = state_20400__$1;
(statearr_20436_20508[(2)] = null);

(statearr_20436_20508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (41))){
var inst_20359 = (state_20400[(25)]);
var inst_20375 = (state_20400[(2)]);
var inst_20376 = cljs.core.next.call(null,inst_20359);
var inst_20340 = inst_20376;
var inst_20341 = null;
var inst_20342 = (0);
var inst_20343 = (0);
var state_20400__$1 = (function (){var statearr_20437 = state_20400;
(statearr_20437[(20)] = inst_20342);

(statearr_20437[(10)] = inst_20341);

(statearr_20437[(12)] = inst_20343);

(statearr_20437[(27)] = inst_20375);

(statearr_20437[(21)] = inst_20340);

return statearr_20437;
})();
var statearr_20438_20509 = state_20400__$1;
(statearr_20438_20509[(2)] = null);

(statearr_20438_20509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (43))){
var state_20400__$1 = state_20400;
var statearr_20439_20510 = state_20400__$1;
(statearr_20439_20510[(2)] = null);

(statearr_20439_20510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (29))){
var inst_20384 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20440_20511 = state_20400__$1;
(statearr_20440_20511[(2)] = inst_20384);

(statearr_20440_20511[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (44))){
var inst_20393 = (state_20400[(2)]);
var state_20400__$1 = (function (){var statearr_20441 = state_20400;
(statearr_20441[(28)] = inst_20393);

return statearr_20441;
})();
var statearr_20442_20512 = state_20400__$1;
(statearr_20442_20512[(2)] = null);

(statearr_20442_20512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (6))){
var inst_20332 = (state_20400[(29)]);
var inst_20331 = cljs.core.deref.call(null,cs);
var inst_20332__$1 = cljs.core.keys.call(null,inst_20331);
var inst_20333 = cljs.core.count.call(null,inst_20332__$1);
var inst_20334 = cljs.core.reset_BANG_.call(null,dctr,inst_20333);
var inst_20339 = cljs.core.seq.call(null,inst_20332__$1);
var inst_20340 = inst_20339;
var inst_20341 = null;
var inst_20342 = (0);
var inst_20343 = (0);
var state_20400__$1 = (function (){var statearr_20443 = state_20400;
(statearr_20443[(20)] = inst_20342);

(statearr_20443[(10)] = inst_20341);

(statearr_20443[(12)] = inst_20343);

(statearr_20443[(30)] = inst_20334);

(statearr_20443[(29)] = inst_20332__$1);

(statearr_20443[(21)] = inst_20340);

return statearr_20443;
})();
var statearr_20444_20513 = state_20400__$1;
(statearr_20444_20513[(2)] = null);

(statearr_20444_20513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (28))){
var inst_20359 = (state_20400[(25)]);
var inst_20340 = (state_20400[(21)]);
var inst_20359__$1 = cljs.core.seq.call(null,inst_20340);
var state_20400__$1 = (function (){var statearr_20445 = state_20400;
(statearr_20445[(25)] = inst_20359__$1);

return statearr_20445;
})();
if(inst_20359__$1){
var statearr_20446_20514 = state_20400__$1;
(statearr_20446_20514[(1)] = (33));

} else {
var statearr_20447_20515 = state_20400__$1;
(statearr_20447_20515[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (25))){
var inst_20342 = (state_20400[(20)]);
var inst_20343 = (state_20400[(12)]);
var inst_20345 = (inst_20343 < inst_20342);
var inst_20346 = inst_20345;
var state_20400__$1 = state_20400;
if(cljs.core.truth_(inst_20346)){
var statearr_20448_20516 = state_20400__$1;
(statearr_20448_20516[(1)] = (27));

} else {
var statearr_20449_20517 = state_20400__$1;
(statearr_20449_20517[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (34))){
var state_20400__$1 = state_20400;
var statearr_20450_20518 = state_20400__$1;
(statearr_20450_20518[(2)] = null);

(statearr_20450_20518[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (17))){
var state_20400__$1 = state_20400;
var statearr_20451_20519 = state_20400__$1;
(statearr_20451_20519[(2)] = null);

(statearr_20451_20519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (3))){
var inst_20398 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20400__$1,inst_20398);
} else {
if((state_val_20401 === (12))){
var inst_20327 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20452_20520 = state_20400__$1;
(statearr_20452_20520[(2)] = inst_20327);

(statearr_20452_20520[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (2))){
var state_20400__$1 = state_20400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20400__$1,(4),ch);
} else {
if((state_val_20401 === (23))){
var state_20400__$1 = state_20400;
var statearr_20453_20521 = state_20400__$1;
(statearr_20453_20521[(2)] = null);

(statearr_20453_20521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (35))){
var inst_20382 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20454_20522 = state_20400__$1;
(statearr_20454_20522[(2)] = inst_20382);

(statearr_20454_20522[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (19))){
var inst_20301 = (state_20400[(7)]);
var inst_20305 = cljs.core.chunk_first.call(null,inst_20301);
var inst_20306 = cljs.core.chunk_rest.call(null,inst_20301);
var inst_20307 = cljs.core.count.call(null,inst_20305);
var inst_20281 = inst_20306;
var inst_20282 = inst_20305;
var inst_20283 = inst_20307;
var inst_20284 = (0);
var state_20400__$1 = (function (){var statearr_20455 = state_20400;
(statearr_20455[(14)] = inst_20284);

(statearr_20455[(15)] = inst_20283);

(statearr_20455[(16)] = inst_20282);

(statearr_20455[(17)] = inst_20281);

return statearr_20455;
})();
var statearr_20456_20523 = state_20400__$1;
(statearr_20456_20523[(2)] = null);

(statearr_20456_20523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (11))){
var inst_20281 = (state_20400[(17)]);
var inst_20301 = (state_20400[(7)]);
var inst_20301__$1 = cljs.core.seq.call(null,inst_20281);
var state_20400__$1 = (function (){var statearr_20457 = state_20400;
(statearr_20457[(7)] = inst_20301__$1);

return statearr_20457;
})();
if(inst_20301__$1){
var statearr_20458_20524 = state_20400__$1;
(statearr_20458_20524[(1)] = (16));

} else {
var statearr_20459_20525 = state_20400__$1;
(statearr_20459_20525[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (9))){
var inst_20329 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20460_20526 = state_20400__$1;
(statearr_20460_20526[(2)] = inst_20329);

(statearr_20460_20526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (5))){
var inst_20279 = cljs.core.deref.call(null,cs);
var inst_20280 = cljs.core.seq.call(null,inst_20279);
var inst_20281 = inst_20280;
var inst_20282 = null;
var inst_20283 = (0);
var inst_20284 = (0);
var state_20400__$1 = (function (){var statearr_20461 = state_20400;
(statearr_20461[(14)] = inst_20284);

(statearr_20461[(15)] = inst_20283);

(statearr_20461[(16)] = inst_20282);

(statearr_20461[(17)] = inst_20281);

return statearr_20461;
})();
var statearr_20462_20527 = state_20400__$1;
(statearr_20462_20527[(2)] = null);

(statearr_20462_20527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (14))){
var state_20400__$1 = state_20400;
var statearr_20463_20528 = state_20400__$1;
(statearr_20463_20528[(2)] = null);

(statearr_20463_20528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (45))){
var inst_20390 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20464_20529 = state_20400__$1;
(statearr_20464_20529[(2)] = inst_20390);

(statearr_20464_20529[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (26))){
var inst_20332 = (state_20400[(29)]);
var inst_20386 = (state_20400[(2)]);
var inst_20387 = cljs.core.seq.call(null,inst_20332);
var state_20400__$1 = (function (){var statearr_20465 = state_20400;
(statearr_20465[(31)] = inst_20386);

return statearr_20465;
})();
if(inst_20387){
var statearr_20466_20530 = state_20400__$1;
(statearr_20466_20530[(1)] = (42));

} else {
var statearr_20467_20531 = state_20400__$1;
(statearr_20467_20531[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (16))){
var inst_20301 = (state_20400[(7)]);
var inst_20303 = cljs.core.chunked_seq_QMARK_.call(null,inst_20301);
var state_20400__$1 = state_20400;
if(inst_20303){
var statearr_20468_20532 = state_20400__$1;
(statearr_20468_20532[(1)] = (19));

} else {
var statearr_20469_20533 = state_20400__$1;
(statearr_20469_20533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (38))){
var inst_20379 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20470_20534 = state_20400__$1;
(statearr_20470_20534[(2)] = inst_20379);

(statearr_20470_20534[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (30))){
var state_20400__$1 = state_20400;
var statearr_20471_20535 = state_20400__$1;
(statearr_20471_20535[(2)] = null);

(statearr_20471_20535[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (10))){
var inst_20284 = (state_20400[(14)]);
var inst_20282 = (state_20400[(16)]);
var inst_20290 = cljs.core._nth.call(null,inst_20282,inst_20284);
var inst_20291 = cljs.core.nth.call(null,inst_20290,(0),null);
var inst_20292 = cljs.core.nth.call(null,inst_20290,(1),null);
var state_20400__$1 = (function (){var statearr_20472 = state_20400;
(statearr_20472[(26)] = inst_20291);

return statearr_20472;
})();
if(cljs.core.truth_(inst_20292)){
var statearr_20473_20536 = state_20400__$1;
(statearr_20473_20536[(1)] = (13));

} else {
var statearr_20474_20537 = state_20400__$1;
(statearr_20474_20537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (18))){
var inst_20325 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20475_20538 = state_20400__$1;
(statearr_20475_20538[(2)] = inst_20325);

(statearr_20475_20538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (42))){
var state_20400__$1 = state_20400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20400__$1,(45),dchan);
} else {
if((state_val_20401 === (37))){
var inst_20359 = (state_20400[(25)]);
var inst_20272 = (state_20400[(11)]);
var inst_20368 = (state_20400[(23)]);
var inst_20368__$1 = cljs.core.first.call(null,inst_20359);
var inst_20369 = cljs.core.async.put_BANG_.call(null,inst_20368__$1,inst_20272,done);
var state_20400__$1 = (function (){var statearr_20476 = state_20400;
(statearr_20476[(23)] = inst_20368__$1);

return statearr_20476;
})();
if(cljs.core.truth_(inst_20369)){
var statearr_20477_20539 = state_20400__$1;
(statearr_20477_20539[(1)] = (39));

} else {
var statearr_20478_20540 = state_20400__$1;
(statearr_20478_20540[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20401 === (8))){
var inst_20284 = (state_20400[(14)]);
var inst_20283 = (state_20400[(15)]);
var inst_20286 = (inst_20284 < inst_20283);
var inst_20287 = inst_20286;
var state_20400__$1 = state_20400;
if(cljs.core.truth_(inst_20287)){
var statearr_20479_20541 = state_20400__$1;
(statearr_20479_20541[(1)] = (10));

} else {
var statearr_20480_20542 = state_20400__$1;
(statearr_20480_20542[(1)] = (11));

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
});})(c__6679__auto___20488,cs,m,dchan,dctr,done))
;
return ((function (switch__6664__auto__,c__6679__auto___20488,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_20484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20484[(0)] = state_machine__6665__auto__);

(statearr_20484[(1)] = (1));

return statearr_20484;
});
var state_machine__6665__auto____1 = (function (state_20400){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_20400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e20485){if((e20485 instanceof Object)){
var ex__6668__auto__ = e20485;
var statearr_20486_20543 = state_20400;
(statearr_20486_20543[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20544 = state_20400;
state_20400 = G__20544;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_20400){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_20400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___20488,cs,m,dchan,dctr,done))
})();
var state__6681__auto__ = (function (){var statearr_20487 = f__6680__auto__.call(null);
(statearr_20487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___20488);

return statearr_20487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___20488,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj20546 = {};
return obj20546;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20547){
var map__20552 = p__20547;
var map__20552__$1 = ((cljs.core.seq_QMARK_.call(null,map__20552))?cljs.core.apply.call(null,cljs.core.hash_map,map__20552):map__20552);
var opts = map__20552__$1;
var statearr_20553_20556 = state;
(statearr_20553_20556[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20552,map__20552__$1,opts){
return (function (val){
var statearr_20554_20557 = state;
(statearr_20554_20557[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20552,map__20552__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20555_20558 = state;
(statearr_20555_20558[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20547 = null;
if (arguments.length > 3) {
  p__20547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20547);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20559){
var state = cljs.core.first(arglist__20559);
arglist__20559 = cljs.core.next(arglist__20559);
var cont_block = cljs.core.first(arglist__20559);
arglist__20559 = cljs.core.next(arglist__20559);
var ports = cljs.core.first(arglist__20559);
var p__20547 = cljs.core.rest(arglist__20559);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20547);
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
if(typeof cljs.core.async.t20679 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20679 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20680){
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
this.meta20680 = meta20680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20679.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20679.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20679.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20679.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20679.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20679.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20679.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20681){
var self__ = this;
var _20681__$1 = this;
return self__.meta20680;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20681,meta20680__$1){
var self__ = this;
var _20681__$1 = this;
return (new cljs.core.async.t20679(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20680__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20679.cljs$lang$type = true;

cljs.core.async.t20679.cljs$lang$ctorStr = "cljs.core.async/t20679";

cljs.core.async.t20679.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20679");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20679 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20679(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20680){
return (new cljs.core.async.t20679(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20680));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20679(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6679__auto___20798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___20798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___20798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20751){
var state_val_20752 = (state_20751[(1)]);
if((state_val_20752 === (7))){
var inst_20695 = (state_20751[(7)]);
var inst_20700 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20695);
var state_20751__$1 = state_20751;
var statearr_20753_20799 = state_20751__$1;
(statearr_20753_20799[(2)] = inst_20700);

(statearr_20753_20799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (20))){
var inst_20710 = (state_20751[(8)]);
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20751__$1,(23),out,inst_20710);
} else {
if((state_val_20752 === (1))){
var inst_20685 = (state_20751[(9)]);
var inst_20685__$1 = calc_state.call(null);
var inst_20686 = cljs.core.seq_QMARK_.call(null,inst_20685__$1);
var state_20751__$1 = (function (){var statearr_20754 = state_20751;
(statearr_20754[(9)] = inst_20685__$1);

return statearr_20754;
})();
if(inst_20686){
var statearr_20755_20800 = state_20751__$1;
(statearr_20755_20800[(1)] = (2));

} else {
var statearr_20756_20801 = state_20751__$1;
(statearr_20756_20801[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (24))){
var inst_20703 = (state_20751[(10)]);
var inst_20695 = inst_20703;
var state_20751__$1 = (function (){var statearr_20757 = state_20751;
(statearr_20757[(7)] = inst_20695);

return statearr_20757;
})();
var statearr_20758_20802 = state_20751__$1;
(statearr_20758_20802[(2)] = null);

(statearr_20758_20802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (4))){
var inst_20685 = (state_20751[(9)]);
var inst_20691 = (state_20751[(2)]);
var inst_20692 = cljs.core.get.call(null,inst_20691,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20693 = cljs.core.get.call(null,inst_20691,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20694 = cljs.core.get.call(null,inst_20691,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20695 = inst_20685;
var state_20751__$1 = (function (){var statearr_20759 = state_20751;
(statearr_20759[(11)] = inst_20693);

(statearr_20759[(12)] = inst_20692);

(statearr_20759[(7)] = inst_20695);

(statearr_20759[(13)] = inst_20694);

return statearr_20759;
})();
var statearr_20760_20803 = state_20751__$1;
(statearr_20760_20803[(2)] = null);

(statearr_20760_20803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (15))){
var state_20751__$1 = state_20751;
var statearr_20761_20804 = state_20751__$1;
(statearr_20761_20804[(2)] = null);

(statearr_20761_20804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (21))){
var inst_20703 = (state_20751[(10)]);
var inst_20695 = inst_20703;
var state_20751__$1 = (function (){var statearr_20762 = state_20751;
(statearr_20762[(7)] = inst_20695);

return statearr_20762;
})();
var statearr_20763_20805 = state_20751__$1;
(statearr_20763_20805[(2)] = null);

(statearr_20763_20805[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (13))){
var inst_20747 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
var statearr_20764_20806 = state_20751__$1;
(statearr_20764_20806[(2)] = inst_20747);

(statearr_20764_20806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (22))){
var inst_20745 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
var statearr_20765_20807 = state_20751__$1;
(statearr_20765_20807[(2)] = inst_20745);

(statearr_20765_20807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (6))){
var inst_20749 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20751__$1,inst_20749);
} else {
if((state_val_20752 === (25))){
var state_20751__$1 = state_20751;
var statearr_20766_20808 = state_20751__$1;
(statearr_20766_20808[(2)] = null);

(statearr_20766_20808[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (17))){
var inst_20725 = (state_20751[(14)]);
var state_20751__$1 = state_20751;
var statearr_20767_20809 = state_20751__$1;
(statearr_20767_20809[(2)] = inst_20725);

(statearr_20767_20809[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (3))){
var inst_20685 = (state_20751[(9)]);
var state_20751__$1 = state_20751;
var statearr_20768_20810 = state_20751__$1;
(statearr_20768_20810[(2)] = inst_20685);

(statearr_20768_20810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (12))){
var inst_20711 = (state_20751[(15)]);
var inst_20725 = (state_20751[(14)]);
var inst_20706 = (state_20751[(16)]);
var inst_20725__$1 = inst_20706.call(null,inst_20711);
var state_20751__$1 = (function (){var statearr_20769 = state_20751;
(statearr_20769[(14)] = inst_20725__$1);

return statearr_20769;
})();
if(cljs.core.truth_(inst_20725__$1)){
var statearr_20770_20811 = state_20751__$1;
(statearr_20770_20811[(1)] = (17));

} else {
var statearr_20771_20812 = state_20751__$1;
(statearr_20771_20812[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (2))){
var inst_20685 = (state_20751[(9)]);
var inst_20688 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20685);
var state_20751__$1 = state_20751;
var statearr_20772_20813 = state_20751__$1;
(statearr_20772_20813[(2)] = inst_20688);

(statearr_20772_20813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (23))){
var inst_20736 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
if(cljs.core.truth_(inst_20736)){
var statearr_20773_20814 = state_20751__$1;
(statearr_20773_20814[(1)] = (24));

} else {
var statearr_20774_20815 = state_20751__$1;
(statearr_20774_20815[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (19))){
var inst_20733 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
if(cljs.core.truth_(inst_20733)){
var statearr_20775_20816 = state_20751__$1;
(statearr_20775_20816[(1)] = (20));

} else {
var statearr_20776_20817 = state_20751__$1;
(statearr_20776_20817[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (11))){
var inst_20710 = (state_20751[(8)]);
var inst_20716 = (inst_20710 == null);
var state_20751__$1 = state_20751;
if(cljs.core.truth_(inst_20716)){
var statearr_20777_20818 = state_20751__$1;
(statearr_20777_20818[(1)] = (14));

} else {
var statearr_20778_20819 = state_20751__$1;
(statearr_20778_20819[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (9))){
var inst_20703 = (state_20751[(10)]);
var inst_20703__$1 = (state_20751[(2)]);
var inst_20704 = cljs.core.get.call(null,inst_20703__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20705 = cljs.core.get.call(null,inst_20703__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20706 = cljs.core.get.call(null,inst_20703__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20751__$1 = (function (){var statearr_20779 = state_20751;
(statearr_20779[(17)] = inst_20705);

(statearr_20779[(10)] = inst_20703__$1);

(statearr_20779[(16)] = inst_20706);

return statearr_20779;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20751__$1,(10),inst_20704);
} else {
if((state_val_20752 === (5))){
var inst_20695 = (state_20751[(7)]);
var inst_20698 = cljs.core.seq_QMARK_.call(null,inst_20695);
var state_20751__$1 = state_20751;
if(inst_20698){
var statearr_20780_20820 = state_20751__$1;
(statearr_20780_20820[(1)] = (7));

} else {
var statearr_20781_20821 = state_20751__$1;
(statearr_20781_20821[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (14))){
var inst_20711 = (state_20751[(15)]);
var inst_20718 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20711);
var state_20751__$1 = state_20751;
var statearr_20782_20822 = state_20751__$1;
(statearr_20782_20822[(2)] = inst_20718);

(statearr_20782_20822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (26))){
var inst_20741 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
var statearr_20783_20823 = state_20751__$1;
(statearr_20783_20823[(2)] = inst_20741);

(statearr_20783_20823[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (16))){
var inst_20721 = (state_20751[(2)]);
var inst_20722 = calc_state.call(null);
var inst_20695 = inst_20722;
var state_20751__$1 = (function (){var statearr_20784 = state_20751;
(statearr_20784[(18)] = inst_20721);

(statearr_20784[(7)] = inst_20695);

return statearr_20784;
})();
var statearr_20785_20824 = state_20751__$1;
(statearr_20785_20824[(2)] = null);

(statearr_20785_20824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (10))){
var inst_20710 = (state_20751[(8)]);
var inst_20711 = (state_20751[(15)]);
var inst_20709 = (state_20751[(2)]);
var inst_20710__$1 = cljs.core.nth.call(null,inst_20709,(0),null);
var inst_20711__$1 = cljs.core.nth.call(null,inst_20709,(1),null);
var inst_20712 = (inst_20710__$1 == null);
var inst_20713 = cljs.core._EQ_.call(null,inst_20711__$1,change);
var inst_20714 = (inst_20712) || (inst_20713);
var state_20751__$1 = (function (){var statearr_20786 = state_20751;
(statearr_20786[(8)] = inst_20710__$1);

(statearr_20786[(15)] = inst_20711__$1);

return statearr_20786;
})();
if(cljs.core.truth_(inst_20714)){
var statearr_20787_20825 = state_20751__$1;
(statearr_20787_20825[(1)] = (11));

} else {
var statearr_20788_20826 = state_20751__$1;
(statearr_20788_20826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (18))){
var inst_20711 = (state_20751[(15)]);
var inst_20705 = (state_20751[(17)]);
var inst_20706 = (state_20751[(16)]);
var inst_20728 = cljs.core.empty_QMARK_.call(null,inst_20706);
var inst_20729 = inst_20705.call(null,inst_20711);
var inst_20730 = cljs.core.not.call(null,inst_20729);
var inst_20731 = (inst_20728) && (inst_20730);
var state_20751__$1 = state_20751;
var statearr_20789_20827 = state_20751__$1;
(statearr_20789_20827[(2)] = inst_20731);

(statearr_20789_20827[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (8))){
var inst_20695 = (state_20751[(7)]);
var state_20751__$1 = state_20751;
var statearr_20790_20828 = state_20751__$1;
(statearr_20790_20828[(2)] = inst_20695);

(statearr_20790_20828[(1)] = (9));


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
});})(c__6679__auto___20798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6664__auto__,c__6679__auto___20798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_20794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20794[(0)] = state_machine__6665__auto__);

(statearr_20794[(1)] = (1));

return statearr_20794;
});
var state_machine__6665__auto____1 = (function (state_20751){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_20751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e20795){if((e20795 instanceof Object)){
var ex__6668__auto__ = e20795;
var statearr_20796_20829 = state_20751;
(statearr_20796_20829[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20830 = state_20751;
state_20751 = G__20830;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_20751){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_20751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___20798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6681__auto__ = (function (){var statearr_20797 = f__6680__auto__.call(null);
(statearr_20797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___20798);

return statearr_20797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___20798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20832 = {};
return obj20832;
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
return (function (p1__20833_SHARP_){
if(cljs.core.truth_(p1__20833_SHARP_.call(null,topic))){
return p1__20833_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20833_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20956 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20956 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20957){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20957 = meta20957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20956.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20956.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20958){
var self__ = this;
var _20958__$1 = this;
return self__.meta20957;
});})(mults,ensure_mult))
;

cljs.core.async.t20956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20958,meta20957__$1){
var self__ = this;
var _20958__$1 = this;
return (new cljs.core.async.t20956(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20957__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20956.cljs$lang$type = true;

cljs.core.async.t20956.cljs$lang$ctorStr = "cljs.core.async/t20956";

cljs.core.async.t20956.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20956");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20956 = ((function (mults,ensure_mult){
return (function __GT_t20956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20957){
return (new cljs.core.async.t20956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20957));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20956(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6679__auto___21078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___21078,mults,ensure_mult,p){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___21078,mults,ensure_mult,p){
return (function (state_21030){
var state_val_21031 = (state_21030[(1)]);
if((state_val_21031 === (7))){
var inst_21026 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21032_21079 = state_21030__$1;
(statearr_21032_21079[(2)] = inst_21026);

(statearr_21032_21079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (20))){
var state_21030__$1 = state_21030;
var statearr_21033_21080 = state_21030__$1;
(statearr_21033_21080[(2)] = null);

(statearr_21033_21080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (1))){
var state_21030__$1 = state_21030;
var statearr_21034_21081 = state_21030__$1;
(statearr_21034_21081[(2)] = null);

(statearr_21034_21081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (24))){
var inst_21009 = (state_21030[(7)]);
var inst_21018 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21009);
var state_21030__$1 = state_21030;
var statearr_21035_21082 = state_21030__$1;
(statearr_21035_21082[(2)] = inst_21018);

(statearr_21035_21082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (4))){
var inst_20961 = (state_21030[(8)]);
var inst_20961__$1 = (state_21030[(2)]);
var inst_20962 = (inst_20961__$1 == null);
var state_21030__$1 = (function (){var statearr_21036 = state_21030;
(statearr_21036[(8)] = inst_20961__$1);

return statearr_21036;
})();
if(cljs.core.truth_(inst_20962)){
var statearr_21037_21083 = state_21030__$1;
(statearr_21037_21083[(1)] = (5));

} else {
var statearr_21038_21084 = state_21030__$1;
(statearr_21038_21084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (15))){
var inst_21003 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21039_21085 = state_21030__$1;
(statearr_21039_21085[(2)] = inst_21003);

(statearr_21039_21085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (21))){
var inst_21023 = (state_21030[(2)]);
var state_21030__$1 = (function (){var statearr_21040 = state_21030;
(statearr_21040[(9)] = inst_21023);

return statearr_21040;
})();
var statearr_21041_21086 = state_21030__$1;
(statearr_21041_21086[(2)] = null);

(statearr_21041_21086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (13))){
var inst_20985 = (state_21030[(10)]);
var inst_20987 = cljs.core.chunked_seq_QMARK_.call(null,inst_20985);
var state_21030__$1 = state_21030;
if(inst_20987){
var statearr_21042_21087 = state_21030__$1;
(statearr_21042_21087[(1)] = (16));

} else {
var statearr_21043_21088 = state_21030__$1;
(statearr_21043_21088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (22))){
var inst_21015 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
if(cljs.core.truth_(inst_21015)){
var statearr_21044_21089 = state_21030__$1;
(statearr_21044_21089[(1)] = (23));

} else {
var statearr_21045_21090 = state_21030__$1;
(statearr_21045_21090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (6))){
var inst_20961 = (state_21030[(8)]);
var inst_21009 = (state_21030[(7)]);
var inst_21011 = (state_21030[(11)]);
var inst_21009__$1 = topic_fn.call(null,inst_20961);
var inst_21010 = cljs.core.deref.call(null,mults);
var inst_21011__$1 = cljs.core.get.call(null,inst_21010,inst_21009__$1);
var state_21030__$1 = (function (){var statearr_21046 = state_21030;
(statearr_21046[(7)] = inst_21009__$1);

(statearr_21046[(11)] = inst_21011__$1);

return statearr_21046;
})();
if(cljs.core.truth_(inst_21011__$1)){
var statearr_21047_21091 = state_21030__$1;
(statearr_21047_21091[(1)] = (19));

} else {
var statearr_21048_21092 = state_21030__$1;
(statearr_21048_21092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (25))){
var inst_21020 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21049_21093 = state_21030__$1;
(statearr_21049_21093[(2)] = inst_21020);

(statearr_21049_21093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (17))){
var inst_20985 = (state_21030[(10)]);
var inst_20994 = cljs.core.first.call(null,inst_20985);
var inst_20995 = cljs.core.async.muxch_STAR_.call(null,inst_20994);
var inst_20996 = cljs.core.async.close_BANG_.call(null,inst_20995);
var inst_20997 = cljs.core.next.call(null,inst_20985);
var inst_20971 = inst_20997;
var inst_20972 = null;
var inst_20973 = (0);
var inst_20974 = (0);
var state_21030__$1 = (function (){var statearr_21050 = state_21030;
(statearr_21050[(12)] = inst_20974);

(statearr_21050[(13)] = inst_20973);

(statearr_21050[(14)] = inst_20971);

(statearr_21050[(15)] = inst_20972);

(statearr_21050[(16)] = inst_20996);

return statearr_21050;
})();
var statearr_21051_21094 = state_21030__$1;
(statearr_21051_21094[(2)] = null);

(statearr_21051_21094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (3))){
var inst_21028 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21030__$1,inst_21028);
} else {
if((state_val_21031 === (12))){
var inst_21005 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21052_21095 = state_21030__$1;
(statearr_21052_21095[(2)] = inst_21005);

(statearr_21052_21095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (2))){
var state_21030__$1 = state_21030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21030__$1,(4),ch);
} else {
if((state_val_21031 === (23))){
var state_21030__$1 = state_21030;
var statearr_21053_21096 = state_21030__$1;
(statearr_21053_21096[(2)] = null);

(statearr_21053_21096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (19))){
var inst_20961 = (state_21030[(8)]);
var inst_21011 = (state_21030[(11)]);
var inst_21013 = cljs.core.async.muxch_STAR_.call(null,inst_21011);
var state_21030__$1 = state_21030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21030__$1,(22),inst_21013,inst_20961);
} else {
if((state_val_21031 === (11))){
var inst_20971 = (state_21030[(14)]);
var inst_20985 = (state_21030[(10)]);
var inst_20985__$1 = cljs.core.seq.call(null,inst_20971);
var state_21030__$1 = (function (){var statearr_21054 = state_21030;
(statearr_21054[(10)] = inst_20985__$1);

return statearr_21054;
})();
if(inst_20985__$1){
var statearr_21055_21097 = state_21030__$1;
(statearr_21055_21097[(1)] = (13));

} else {
var statearr_21056_21098 = state_21030__$1;
(statearr_21056_21098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (9))){
var inst_21007 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21057_21099 = state_21030__$1;
(statearr_21057_21099[(2)] = inst_21007);

(statearr_21057_21099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (5))){
var inst_20968 = cljs.core.deref.call(null,mults);
var inst_20969 = cljs.core.vals.call(null,inst_20968);
var inst_20970 = cljs.core.seq.call(null,inst_20969);
var inst_20971 = inst_20970;
var inst_20972 = null;
var inst_20973 = (0);
var inst_20974 = (0);
var state_21030__$1 = (function (){var statearr_21058 = state_21030;
(statearr_21058[(12)] = inst_20974);

(statearr_21058[(13)] = inst_20973);

(statearr_21058[(14)] = inst_20971);

(statearr_21058[(15)] = inst_20972);

return statearr_21058;
})();
var statearr_21059_21100 = state_21030__$1;
(statearr_21059_21100[(2)] = null);

(statearr_21059_21100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (14))){
var state_21030__$1 = state_21030;
var statearr_21063_21101 = state_21030__$1;
(statearr_21063_21101[(2)] = null);

(statearr_21063_21101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (16))){
var inst_20985 = (state_21030[(10)]);
var inst_20989 = cljs.core.chunk_first.call(null,inst_20985);
var inst_20990 = cljs.core.chunk_rest.call(null,inst_20985);
var inst_20991 = cljs.core.count.call(null,inst_20989);
var inst_20971 = inst_20990;
var inst_20972 = inst_20989;
var inst_20973 = inst_20991;
var inst_20974 = (0);
var state_21030__$1 = (function (){var statearr_21064 = state_21030;
(statearr_21064[(12)] = inst_20974);

(statearr_21064[(13)] = inst_20973);

(statearr_21064[(14)] = inst_20971);

(statearr_21064[(15)] = inst_20972);

return statearr_21064;
})();
var statearr_21065_21102 = state_21030__$1;
(statearr_21065_21102[(2)] = null);

(statearr_21065_21102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (10))){
var inst_20974 = (state_21030[(12)]);
var inst_20973 = (state_21030[(13)]);
var inst_20971 = (state_21030[(14)]);
var inst_20972 = (state_21030[(15)]);
var inst_20979 = cljs.core._nth.call(null,inst_20972,inst_20974);
var inst_20980 = cljs.core.async.muxch_STAR_.call(null,inst_20979);
var inst_20981 = cljs.core.async.close_BANG_.call(null,inst_20980);
var inst_20982 = (inst_20974 + (1));
var tmp21060 = inst_20973;
var tmp21061 = inst_20971;
var tmp21062 = inst_20972;
var inst_20971__$1 = tmp21061;
var inst_20972__$1 = tmp21062;
var inst_20973__$1 = tmp21060;
var inst_20974__$1 = inst_20982;
var state_21030__$1 = (function (){var statearr_21066 = state_21030;
(statearr_21066[(12)] = inst_20974__$1);

(statearr_21066[(13)] = inst_20973__$1);

(statearr_21066[(17)] = inst_20981);

(statearr_21066[(14)] = inst_20971__$1);

(statearr_21066[(15)] = inst_20972__$1);

return statearr_21066;
})();
var statearr_21067_21103 = state_21030__$1;
(statearr_21067_21103[(2)] = null);

(statearr_21067_21103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (18))){
var inst_21000 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21068_21104 = state_21030__$1;
(statearr_21068_21104[(2)] = inst_21000);

(statearr_21068_21104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (8))){
var inst_20974 = (state_21030[(12)]);
var inst_20973 = (state_21030[(13)]);
var inst_20976 = (inst_20974 < inst_20973);
var inst_20977 = inst_20976;
var state_21030__$1 = state_21030;
if(cljs.core.truth_(inst_20977)){
var statearr_21069_21105 = state_21030__$1;
(statearr_21069_21105[(1)] = (10));

} else {
var statearr_21070_21106 = state_21030__$1;
(statearr_21070_21106[(1)] = (11));

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
});})(c__6679__auto___21078,mults,ensure_mult,p))
;
return ((function (switch__6664__auto__,c__6679__auto___21078,mults,ensure_mult,p){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21074[(0)] = state_machine__6665__auto__);

(statearr_21074[(1)] = (1));

return statearr_21074;
});
var state_machine__6665__auto____1 = (function (state_21030){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21075){if((e21075 instanceof Object)){
var ex__6668__auto__ = e21075;
var statearr_21076_21107 = state_21030;
(statearr_21076_21107[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21108 = state_21030;
state_21030 = G__21108;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21030){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___21078,mults,ensure_mult,p))
})();
var state__6681__auto__ = (function (){var statearr_21077 = f__6680__auto__.call(null);
(statearr_21077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___21078);

return statearr_21077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___21078,mults,ensure_mult,p))
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
var c__6679__auto___21245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___21245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___21245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21215){
var state_val_21216 = (state_21215[(1)]);
if((state_val_21216 === (7))){
var state_21215__$1 = state_21215;
var statearr_21217_21246 = state_21215__$1;
(statearr_21217_21246[(2)] = null);

(statearr_21217_21246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (1))){
var state_21215__$1 = state_21215;
var statearr_21218_21247 = state_21215__$1;
(statearr_21218_21247[(2)] = null);

(statearr_21218_21247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (4))){
var inst_21179 = (state_21215[(7)]);
var inst_21181 = (inst_21179 < cnt);
var state_21215__$1 = state_21215;
if(cljs.core.truth_(inst_21181)){
var statearr_21219_21248 = state_21215__$1;
(statearr_21219_21248[(1)] = (6));

} else {
var statearr_21220_21249 = state_21215__$1;
(statearr_21220_21249[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (15))){
var inst_21211 = (state_21215[(2)]);
var state_21215__$1 = state_21215;
var statearr_21221_21250 = state_21215__$1;
(statearr_21221_21250[(2)] = inst_21211);

(statearr_21221_21250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (13))){
var inst_21204 = cljs.core.async.close_BANG_.call(null,out);
var state_21215__$1 = state_21215;
var statearr_21222_21251 = state_21215__$1;
(statearr_21222_21251[(2)] = inst_21204);

(statearr_21222_21251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (6))){
var state_21215__$1 = state_21215;
var statearr_21223_21252 = state_21215__$1;
(statearr_21223_21252[(2)] = null);

(statearr_21223_21252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (3))){
var inst_21213 = (state_21215[(2)]);
var state_21215__$1 = state_21215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21215__$1,inst_21213);
} else {
if((state_val_21216 === (12))){
var inst_21201 = (state_21215[(8)]);
var inst_21201__$1 = (state_21215[(2)]);
var inst_21202 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21201__$1);
var state_21215__$1 = (function (){var statearr_21224 = state_21215;
(statearr_21224[(8)] = inst_21201__$1);

return statearr_21224;
})();
if(cljs.core.truth_(inst_21202)){
var statearr_21225_21253 = state_21215__$1;
(statearr_21225_21253[(1)] = (13));

} else {
var statearr_21226_21254 = state_21215__$1;
(statearr_21226_21254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (2))){
var inst_21178 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21179 = (0);
var state_21215__$1 = (function (){var statearr_21227 = state_21215;
(statearr_21227[(9)] = inst_21178);

(statearr_21227[(7)] = inst_21179);

return statearr_21227;
})();
var statearr_21228_21255 = state_21215__$1;
(statearr_21228_21255[(2)] = null);

(statearr_21228_21255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (11))){
var inst_21179 = (state_21215[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21215,(10),Object,null,(9));
var inst_21188 = chs__$1.call(null,inst_21179);
var inst_21189 = done.call(null,inst_21179);
var inst_21190 = cljs.core.async.take_BANG_.call(null,inst_21188,inst_21189);
var state_21215__$1 = state_21215;
var statearr_21229_21256 = state_21215__$1;
(statearr_21229_21256[(2)] = inst_21190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (9))){
var inst_21179 = (state_21215[(7)]);
var inst_21192 = (state_21215[(2)]);
var inst_21193 = (inst_21179 + (1));
var inst_21179__$1 = inst_21193;
var state_21215__$1 = (function (){var statearr_21230 = state_21215;
(statearr_21230[(10)] = inst_21192);

(statearr_21230[(7)] = inst_21179__$1);

return statearr_21230;
})();
var statearr_21231_21257 = state_21215__$1;
(statearr_21231_21257[(2)] = null);

(statearr_21231_21257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (5))){
var inst_21199 = (state_21215[(2)]);
var state_21215__$1 = (function (){var statearr_21232 = state_21215;
(statearr_21232[(11)] = inst_21199);

return statearr_21232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21215__$1,(12),dchan);
} else {
if((state_val_21216 === (14))){
var inst_21201 = (state_21215[(8)]);
var inst_21206 = cljs.core.apply.call(null,f,inst_21201);
var state_21215__$1 = state_21215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21215__$1,(16),out,inst_21206);
} else {
if((state_val_21216 === (16))){
var inst_21208 = (state_21215[(2)]);
var state_21215__$1 = (function (){var statearr_21233 = state_21215;
(statearr_21233[(12)] = inst_21208);

return statearr_21233;
})();
var statearr_21234_21258 = state_21215__$1;
(statearr_21234_21258[(2)] = null);

(statearr_21234_21258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (10))){
var inst_21183 = (state_21215[(2)]);
var inst_21184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21215__$1 = (function (){var statearr_21235 = state_21215;
(statearr_21235[(13)] = inst_21183);

return statearr_21235;
})();
var statearr_21236_21259 = state_21215__$1;
(statearr_21236_21259[(2)] = inst_21184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21216 === (8))){
var inst_21197 = (state_21215[(2)]);
var state_21215__$1 = state_21215;
var statearr_21237_21260 = state_21215__$1;
(statearr_21237_21260[(2)] = inst_21197);

(statearr_21237_21260[(1)] = (5));


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
});})(c__6679__auto___21245,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6664__auto__,c__6679__auto___21245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21241[(0)] = state_machine__6665__auto__);

(statearr_21241[(1)] = (1));

return statearr_21241;
});
var state_machine__6665__auto____1 = (function (state_21215){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21242){if((e21242 instanceof Object)){
var ex__6668__auto__ = e21242;
var statearr_21243_21261 = state_21215;
(statearr_21243_21261[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21262 = state_21215;
state_21215 = G__21262;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21215){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___21245,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6681__auto__ = (function (){var statearr_21244 = f__6680__auto__.call(null);
(statearr_21244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___21245);

return statearr_21244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___21245,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6679__auto___21370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___21370,out){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___21370,out){
return (function (state_21346){
var state_val_21347 = (state_21346[(1)]);
if((state_val_21347 === (7))){
var inst_21326 = (state_21346[(7)]);
var inst_21325 = (state_21346[(8)]);
var inst_21325__$1 = (state_21346[(2)]);
var inst_21326__$1 = cljs.core.nth.call(null,inst_21325__$1,(0),null);
var inst_21327 = cljs.core.nth.call(null,inst_21325__$1,(1),null);
var inst_21328 = (inst_21326__$1 == null);
var state_21346__$1 = (function (){var statearr_21348 = state_21346;
(statearr_21348[(7)] = inst_21326__$1);

(statearr_21348[(9)] = inst_21327);

(statearr_21348[(8)] = inst_21325__$1);

return statearr_21348;
})();
if(cljs.core.truth_(inst_21328)){
var statearr_21349_21371 = state_21346__$1;
(statearr_21349_21371[(1)] = (8));

} else {
var statearr_21350_21372 = state_21346__$1;
(statearr_21350_21372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (1))){
var inst_21317 = cljs.core.vec.call(null,chs);
var inst_21318 = inst_21317;
var state_21346__$1 = (function (){var statearr_21351 = state_21346;
(statearr_21351[(10)] = inst_21318);

return statearr_21351;
})();
var statearr_21352_21373 = state_21346__$1;
(statearr_21352_21373[(2)] = null);

(statearr_21352_21373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (4))){
var inst_21318 = (state_21346[(10)]);
var state_21346__$1 = state_21346;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21346__$1,(7),inst_21318);
} else {
if((state_val_21347 === (6))){
var inst_21342 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21353_21374 = state_21346__$1;
(statearr_21353_21374[(2)] = inst_21342);

(statearr_21353_21374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (3))){
var inst_21344 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21346__$1,inst_21344);
} else {
if((state_val_21347 === (2))){
var inst_21318 = (state_21346[(10)]);
var inst_21320 = cljs.core.count.call(null,inst_21318);
var inst_21321 = (inst_21320 > (0));
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21321)){
var statearr_21355_21375 = state_21346__$1;
(statearr_21355_21375[(1)] = (4));

} else {
var statearr_21356_21376 = state_21346__$1;
(statearr_21356_21376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (11))){
var inst_21318 = (state_21346[(10)]);
var inst_21335 = (state_21346[(2)]);
var tmp21354 = inst_21318;
var inst_21318__$1 = tmp21354;
var state_21346__$1 = (function (){var statearr_21357 = state_21346;
(statearr_21357[(10)] = inst_21318__$1);

(statearr_21357[(11)] = inst_21335);

return statearr_21357;
})();
var statearr_21358_21377 = state_21346__$1;
(statearr_21358_21377[(2)] = null);

(statearr_21358_21377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (9))){
var inst_21326 = (state_21346[(7)]);
var state_21346__$1 = state_21346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21346__$1,(11),out,inst_21326);
} else {
if((state_val_21347 === (5))){
var inst_21340 = cljs.core.async.close_BANG_.call(null,out);
var state_21346__$1 = state_21346;
var statearr_21359_21378 = state_21346__$1;
(statearr_21359_21378[(2)] = inst_21340);

(statearr_21359_21378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (10))){
var inst_21338 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21360_21379 = state_21346__$1;
(statearr_21360_21379[(2)] = inst_21338);

(statearr_21360_21379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (8))){
var inst_21326 = (state_21346[(7)]);
var inst_21327 = (state_21346[(9)]);
var inst_21325 = (state_21346[(8)]);
var inst_21318 = (state_21346[(10)]);
var inst_21330 = (function (){var c = inst_21327;
var v = inst_21326;
var vec__21323 = inst_21325;
var cs = inst_21318;
return ((function (c,v,vec__21323,cs,inst_21326,inst_21327,inst_21325,inst_21318,state_val_21347,c__6679__auto___21370,out){
return (function (p1__21263_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21263_SHARP_);
});
;})(c,v,vec__21323,cs,inst_21326,inst_21327,inst_21325,inst_21318,state_val_21347,c__6679__auto___21370,out))
})();
var inst_21331 = cljs.core.filterv.call(null,inst_21330,inst_21318);
var inst_21318__$1 = inst_21331;
var state_21346__$1 = (function (){var statearr_21361 = state_21346;
(statearr_21361[(10)] = inst_21318__$1);

return statearr_21361;
})();
var statearr_21362_21380 = state_21346__$1;
(statearr_21362_21380[(2)] = null);

(statearr_21362_21380[(1)] = (2));


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
});})(c__6679__auto___21370,out))
;
return ((function (switch__6664__auto__,c__6679__auto___21370,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21366[(0)] = state_machine__6665__auto__);

(statearr_21366[(1)] = (1));

return statearr_21366;
});
var state_machine__6665__auto____1 = (function (state_21346){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21367){if((e21367 instanceof Object)){
var ex__6668__auto__ = e21367;
var statearr_21368_21381 = state_21346;
(statearr_21368_21381[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21382 = state_21346;
state_21346 = G__21382;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21346){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___21370,out))
})();
var state__6681__auto__ = (function (){var statearr_21369 = f__6680__auto__.call(null);
(statearr_21369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___21370);

return statearr_21369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___21370,out))
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
var c__6679__auto___21475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___21475,out){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___21475,out){
return (function (state_21452){
var state_val_21453 = (state_21452[(1)]);
if((state_val_21453 === (7))){
var inst_21434 = (state_21452[(7)]);
var inst_21434__$1 = (state_21452[(2)]);
var inst_21435 = (inst_21434__$1 == null);
var inst_21436 = cljs.core.not.call(null,inst_21435);
var state_21452__$1 = (function (){var statearr_21454 = state_21452;
(statearr_21454[(7)] = inst_21434__$1);

return statearr_21454;
})();
if(inst_21436){
var statearr_21455_21476 = state_21452__$1;
(statearr_21455_21476[(1)] = (8));

} else {
var statearr_21456_21477 = state_21452__$1;
(statearr_21456_21477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (1))){
var inst_21429 = (0);
var state_21452__$1 = (function (){var statearr_21457 = state_21452;
(statearr_21457[(8)] = inst_21429);

return statearr_21457;
})();
var statearr_21458_21478 = state_21452__$1;
(statearr_21458_21478[(2)] = null);

(statearr_21458_21478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (4))){
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21452__$1,(7),ch);
} else {
if((state_val_21453 === (6))){
var inst_21447 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21459_21479 = state_21452__$1;
(statearr_21459_21479[(2)] = inst_21447);

(statearr_21459_21479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (3))){
var inst_21449 = (state_21452[(2)]);
var inst_21450 = cljs.core.async.close_BANG_.call(null,out);
var state_21452__$1 = (function (){var statearr_21460 = state_21452;
(statearr_21460[(9)] = inst_21449);

return statearr_21460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21452__$1,inst_21450);
} else {
if((state_val_21453 === (2))){
var inst_21429 = (state_21452[(8)]);
var inst_21431 = (inst_21429 < n);
var state_21452__$1 = state_21452;
if(cljs.core.truth_(inst_21431)){
var statearr_21461_21480 = state_21452__$1;
(statearr_21461_21480[(1)] = (4));

} else {
var statearr_21462_21481 = state_21452__$1;
(statearr_21462_21481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (11))){
var inst_21429 = (state_21452[(8)]);
var inst_21439 = (state_21452[(2)]);
var inst_21440 = (inst_21429 + (1));
var inst_21429__$1 = inst_21440;
var state_21452__$1 = (function (){var statearr_21463 = state_21452;
(statearr_21463[(10)] = inst_21439);

(statearr_21463[(8)] = inst_21429__$1);

return statearr_21463;
})();
var statearr_21464_21482 = state_21452__$1;
(statearr_21464_21482[(2)] = null);

(statearr_21464_21482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (9))){
var state_21452__$1 = state_21452;
var statearr_21465_21483 = state_21452__$1;
(statearr_21465_21483[(2)] = null);

(statearr_21465_21483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (5))){
var state_21452__$1 = state_21452;
var statearr_21466_21484 = state_21452__$1;
(statearr_21466_21484[(2)] = null);

(statearr_21466_21484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (10))){
var inst_21444 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21467_21485 = state_21452__$1;
(statearr_21467_21485[(2)] = inst_21444);

(statearr_21467_21485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (8))){
var inst_21434 = (state_21452[(7)]);
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21452__$1,(11),out,inst_21434);
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
});})(c__6679__auto___21475,out))
;
return ((function (switch__6664__auto__,c__6679__auto___21475,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21471[(0)] = state_machine__6665__auto__);

(statearr_21471[(1)] = (1));

return statearr_21471;
});
var state_machine__6665__auto____1 = (function (state_21452){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21472){if((e21472 instanceof Object)){
var ex__6668__auto__ = e21472;
var statearr_21473_21486 = state_21452;
(statearr_21473_21486[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21487 = state_21452;
state_21452 = G__21487;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21452){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___21475,out))
})();
var state__6681__auto__ = (function (){var statearr_21474 = f__6680__auto__.call(null);
(statearr_21474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___21475);

return statearr_21474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___21475,out))
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
if(typeof cljs.core.async.t21495 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21495 = (function (ch,f,map_LT_,meta21496){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21496 = meta21496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21498 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21498 = (function (fn1,_,meta21496,map_LT_,f,ch,meta21499){
this.fn1 = fn1;
this._ = _;
this.meta21496 = meta21496;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21499 = meta21499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21498.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21488_SHARP_){
return f1.call(null,(((p1__21488_SHARP_ == null))?null:self__.f.call(null,p1__21488_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21500){
var self__ = this;
var _21500__$1 = this;
return self__.meta21499;
});})(___$1))
;

cljs.core.async.t21498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21500,meta21499__$1){
var self__ = this;
var _21500__$1 = this;
return (new cljs.core.async.t21498(self__.fn1,self__._,self__.meta21496,self__.map_LT_,self__.f,self__.ch,meta21499__$1));
});})(___$1))
;

cljs.core.async.t21498.cljs$lang$type = true;

cljs.core.async.t21498.cljs$lang$ctorStr = "cljs.core.async/t21498";

cljs.core.async.t21498.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21498");
});})(___$1))
;

cljs.core.async.__GT_t21498 = ((function (___$1){
return (function __GT_t21498(fn1__$1,___$2,meta21496__$1,map_LT___$1,f__$1,ch__$1,meta21499){
return (new cljs.core.async.t21498(fn1__$1,___$2,meta21496__$1,map_LT___$1,f__$1,ch__$1,meta21499));
});})(___$1))
;

}

return (new cljs.core.async.t21498(fn1,___$1,self__.meta21496,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21497){
var self__ = this;
var _21497__$1 = this;
return self__.meta21496;
});

cljs.core.async.t21495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21497,meta21496__$1){
var self__ = this;
var _21497__$1 = this;
return (new cljs.core.async.t21495(self__.ch,self__.f,self__.map_LT_,meta21496__$1));
});

cljs.core.async.t21495.cljs$lang$type = true;

cljs.core.async.t21495.cljs$lang$ctorStr = "cljs.core.async/t21495";

cljs.core.async.t21495.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21495");
});

cljs.core.async.__GT_t21495 = (function __GT_t21495(ch__$1,f__$1,map_LT___$1,meta21496){
return (new cljs.core.async.t21495(ch__$1,f__$1,map_LT___$1,meta21496));
});

}

return (new cljs.core.async.t21495(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21504 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21504 = (function (ch,f,map_GT_,meta21505){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21505 = meta21505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21506){
var self__ = this;
var _21506__$1 = this;
return self__.meta21505;
});

cljs.core.async.t21504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21506,meta21505__$1){
var self__ = this;
var _21506__$1 = this;
return (new cljs.core.async.t21504(self__.ch,self__.f,self__.map_GT_,meta21505__$1));
});

cljs.core.async.t21504.cljs$lang$type = true;

cljs.core.async.t21504.cljs$lang$ctorStr = "cljs.core.async/t21504";

cljs.core.async.t21504.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21504");
});

cljs.core.async.__GT_t21504 = (function __GT_t21504(ch__$1,f__$1,map_GT___$1,meta21505){
return (new cljs.core.async.t21504(ch__$1,f__$1,map_GT___$1,meta21505));
});

}

return (new cljs.core.async.t21504(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21510 = (function (ch,p,filter_GT_,meta21511){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21511 = meta21511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21512){
var self__ = this;
var _21512__$1 = this;
return self__.meta21511;
});

cljs.core.async.t21510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21512,meta21511__$1){
var self__ = this;
var _21512__$1 = this;
return (new cljs.core.async.t21510(self__.ch,self__.p,self__.filter_GT_,meta21511__$1));
});

cljs.core.async.t21510.cljs$lang$type = true;

cljs.core.async.t21510.cljs$lang$ctorStr = "cljs.core.async/t21510";

cljs.core.async.t21510.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21510");
});

cljs.core.async.__GT_t21510 = (function __GT_t21510(ch__$1,p__$1,filter_GT___$1,meta21511){
return (new cljs.core.async.t21510(ch__$1,p__$1,filter_GT___$1,meta21511));
});

}

return (new cljs.core.async.t21510(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6679__auto___21595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___21595,out){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___21595,out){
return (function (state_21574){
var state_val_21575 = (state_21574[(1)]);
if((state_val_21575 === (7))){
var inst_21570 = (state_21574[(2)]);
var state_21574__$1 = state_21574;
var statearr_21576_21596 = state_21574__$1;
(statearr_21576_21596[(2)] = inst_21570);

(statearr_21576_21596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (1))){
var state_21574__$1 = state_21574;
var statearr_21577_21597 = state_21574__$1;
(statearr_21577_21597[(2)] = null);

(statearr_21577_21597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (4))){
var inst_21556 = (state_21574[(7)]);
var inst_21556__$1 = (state_21574[(2)]);
var inst_21557 = (inst_21556__$1 == null);
var state_21574__$1 = (function (){var statearr_21578 = state_21574;
(statearr_21578[(7)] = inst_21556__$1);

return statearr_21578;
})();
if(cljs.core.truth_(inst_21557)){
var statearr_21579_21598 = state_21574__$1;
(statearr_21579_21598[(1)] = (5));

} else {
var statearr_21580_21599 = state_21574__$1;
(statearr_21580_21599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (6))){
var inst_21556 = (state_21574[(7)]);
var inst_21561 = p.call(null,inst_21556);
var state_21574__$1 = state_21574;
if(cljs.core.truth_(inst_21561)){
var statearr_21581_21600 = state_21574__$1;
(statearr_21581_21600[(1)] = (8));

} else {
var statearr_21582_21601 = state_21574__$1;
(statearr_21582_21601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (3))){
var inst_21572 = (state_21574[(2)]);
var state_21574__$1 = state_21574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21574__$1,inst_21572);
} else {
if((state_val_21575 === (2))){
var state_21574__$1 = state_21574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21574__$1,(4),ch);
} else {
if((state_val_21575 === (11))){
var inst_21564 = (state_21574[(2)]);
var state_21574__$1 = state_21574;
var statearr_21583_21602 = state_21574__$1;
(statearr_21583_21602[(2)] = inst_21564);

(statearr_21583_21602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (9))){
var state_21574__$1 = state_21574;
var statearr_21584_21603 = state_21574__$1;
(statearr_21584_21603[(2)] = null);

(statearr_21584_21603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (5))){
var inst_21559 = cljs.core.async.close_BANG_.call(null,out);
var state_21574__$1 = state_21574;
var statearr_21585_21604 = state_21574__$1;
(statearr_21585_21604[(2)] = inst_21559);

(statearr_21585_21604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (10))){
var inst_21567 = (state_21574[(2)]);
var state_21574__$1 = (function (){var statearr_21586 = state_21574;
(statearr_21586[(8)] = inst_21567);

return statearr_21586;
})();
var statearr_21587_21605 = state_21574__$1;
(statearr_21587_21605[(2)] = null);

(statearr_21587_21605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21575 === (8))){
var inst_21556 = (state_21574[(7)]);
var state_21574__$1 = state_21574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21574__$1,(11),out,inst_21556);
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
});})(c__6679__auto___21595,out))
;
return ((function (switch__6664__auto__,c__6679__auto___21595,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21591 = [null,null,null,null,null,null,null,null,null];
(statearr_21591[(0)] = state_machine__6665__auto__);

(statearr_21591[(1)] = (1));

return statearr_21591;
});
var state_machine__6665__auto____1 = (function (state_21574){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21592){if((e21592 instanceof Object)){
var ex__6668__auto__ = e21592;
var statearr_21593_21606 = state_21574;
(statearr_21593_21606[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21607 = state_21574;
state_21574 = G__21607;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21574){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___21595,out))
})();
var state__6681__auto__ = (function (){var statearr_21594 = f__6680__auto__.call(null);
(statearr_21594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___21595);

return statearr_21594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___21595,out))
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
var c__6679__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto__){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto__){
return (function (state_21773){
var state_val_21774 = (state_21773[(1)]);
if((state_val_21774 === (7))){
var inst_21769 = (state_21773[(2)]);
var state_21773__$1 = state_21773;
var statearr_21775_21816 = state_21773__$1;
(statearr_21775_21816[(2)] = inst_21769);

(statearr_21775_21816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (20))){
var inst_21739 = (state_21773[(7)]);
var inst_21750 = (state_21773[(2)]);
var inst_21751 = cljs.core.next.call(null,inst_21739);
var inst_21725 = inst_21751;
var inst_21726 = null;
var inst_21727 = (0);
var inst_21728 = (0);
var state_21773__$1 = (function (){var statearr_21776 = state_21773;
(statearr_21776[(8)] = inst_21726);

(statearr_21776[(9)] = inst_21728);

(statearr_21776[(10)] = inst_21725);

(statearr_21776[(11)] = inst_21727);

(statearr_21776[(12)] = inst_21750);

return statearr_21776;
})();
var statearr_21777_21817 = state_21773__$1;
(statearr_21777_21817[(2)] = null);

(statearr_21777_21817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (1))){
var state_21773__$1 = state_21773;
var statearr_21778_21818 = state_21773__$1;
(statearr_21778_21818[(2)] = null);

(statearr_21778_21818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (4))){
var inst_21714 = (state_21773[(13)]);
var inst_21714__$1 = (state_21773[(2)]);
var inst_21715 = (inst_21714__$1 == null);
var state_21773__$1 = (function (){var statearr_21779 = state_21773;
(statearr_21779[(13)] = inst_21714__$1);

return statearr_21779;
})();
if(cljs.core.truth_(inst_21715)){
var statearr_21780_21819 = state_21773__$1;
(statearr_21780_21819[(1)] = (5));

} else {
var statearr_21781_21820 = state_21773__$1;
(statearr_21781_21820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (15))){
var state_21773__$1 = state_21773;
var statearr_21785_21821 = state_21773__$1;
(statearr_21785_21821[(2)] = null);

(statearr_21785_21821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (21))){
var state_21773__$1 = state_21773;
var statearr_21786_21822 = state_21773__$1;
(statearr_21786_21822[(2)] = null);

(statearr_21786_21822[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (13))){
var inst_21726 = (state_21773[(8)]);
var inst_21728 = (state_21773[(9)]);
var inst_21725 = (state_21773[(10)]);
var inst_21727 = (state_21773[(11)]);
var inst_21735 = (state_21773[(2)]);
var inst_21736 = (inst_21728 + (1));
var tmp21782 = inst_21726;
var tmp21783 = inst_21725;
var tmp21784 = inst_21727;
var inst_21725__$1 = tmp21783;
var inst_21726__$1 = tmp21782;
var inst_21727__$1 = tmp21784;
var inst_21728__$1 = inst_21736;
var state_21773__$1 = (function (){var statearr_21787 = state_21773;
(statearr_21787[(8)] = inst_21726__$1);

(statearr_21787[(9)] = inst_21728__$1);

(statearr_21787[(14)] = inst_21735);

(statearr_21787[(10)] = inst_21725__$1);

(statearr_21787[(11)] = inst_21727__$1);

return statearr_21787;
})();
var statearr_21788_21823 = state_21773__$1;
(statearr_21788_21823[(2)] = null);

(statearr_21788_21823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (22))){
var state_21773__$1 = state_21773;
var statearr_21789_21824 = state_21773__$1;
(statearr_21789_21824[(2)] = null);

(statearr_21789_21824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (6))){
var inst_21714 = (state_21773[(13)]);
var inst_21723 = f.call(null,inst_21714);
var inst_21724 = cljs.core.seq.call(null,inst_21723);
var inst_21725 = inst_21724;
var inst_21726 = null;
var inst_21727 = (0);
var inst_21728 = (0);
var state_21773__$1 = (function (){var statearr_21790 = state_21773;
(statearr_21790[(8)] = inst_21726);

(statearr_21790[(9)] = inst_21728);

(statearr_21790[(10)] = inst_21725);

(statearr_21790[(11)] = inst_21727);

return statearr_21790;
})();
var statearr_21791_21825 = state_21773__$1;
(statearr_21791_21825[(2)] = null);

(statearr_21791_21825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (17))){
var inst_21739 = (state_21773[(7)]);
var inst_21743 = cljs.core.chunk_first.call(null,inst_21739);
var inst_21744 = cljs.core.chunk_rest.call(null,inst_21739);
var inst_21745 = cljs.core.count.call(null,inst_21743);
var inst_21725 = inst_21744;
var inst_21726 = inst_21743;
var inst_21727 = inst_21745;
var inst_21728 = (0);
var state_21773__$1 = (function (){var statearr_21792 = state_21773;
(statearr_21792[(8)] = inst_21726);

(statearr_21792[(9)] = inst_21728);

(statearr_21792[(10)] = inst_21725);

(statearr_21792[(11)] = inst_21727);

return statearr_21792;
})();
var statearr_21793_21826 = state_21773__$1;
(statearr_21793_21826[(2)] = null);

(statearr_21793_21826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (3))){
var inst_21771 = (state_21773[(2)]);
var state_21773__$1 = state_21773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21773__$1,inst_21771);
} else {
if((state_val_21774 === (12))){
var inst_21759 = (state_21773[(2)]);
var state_21773__$1 = state_21773;
var statearr_21794_21827 = state_21773__$1;
(statearr_21794_21827[(2)] = inst_21759);

(statearr_21794_21827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (2))){
var state_21773__$1 = state_21773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21773__$1,(4),in$);
} else {
if((state_val_21774 === (23))){
var inst_21767 = (state_21773[(2)]);
var state_21773__$1 = state_21773;
var statearr_21795_21828 = state_21773__$1;
(statearr_21795_21828[(2)] = inst_21767);

(statearr_21795_21828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (19))){
var inst_21754 = (state_21773[(2)]);
var state_21773__$1 = state_21773;
var statearr_21796_21829 = state_21773__$1;
(statearr_21796_21829[(2)] = inst_21754);

(statearr_21796_21829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (11))){
var inst_21739 = (state_21773[(7)]);
var inst_21725 = (state_21773[(10)]);
var inst_21739__$1 = cljs.core.seq.call(null,inst_21725);
var state_21773__$1 = (function (){var statearr_21797 = state_21773;
(statearr_21797[(7)] = inst_21739__$1);

return statearr_21797;
})();
if(inst_21739__$1){
var statearr_21798_21830 = state_21773__$1;
(statearr_21798_21830[(1)] = (14));

} else {
var statearr_21799_21831 = state_21773__$1;
(statearr_21799_21831[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (9))){
var inst_21761 = (state_21773[(2)]);
var inst_21762 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21773__$1 = (function (){var statearr_21800 = state_21773;
(statearr_21800[(15)] = inst_21761);

return statearr_21800;
})();
if(cljs.core.truth_(inst_21762)){
var statearr_21801_21832 = state_21773__$1;
(statearr_21801_21832[(1)] = (21));

} else {
var statearr_21802_21833 = state_21773__$1;
(statearr_21802_21833[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (5))){
var inst_21717 = cljs.core.async.close_BANG_.call(null,out);
var state_21773__$1 = state_21773;
var statearr_21803_21834 = state_21773__$1;
(statearr_21803_21834[(2)] = inst_21717);

(statearr_21803_21834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (14))){
var inst_21739 = (state_21773[(7)]);
var inst_21741 = cljs.core.chunked_seq_QMARK_.call(null,inst_21739);
var state_21773__$1 = state_21773;
if(inst_21741){
var statearr_21804_21835 = state_21773__$1;
(statearr_21804_21835[(1)] = (17));

} else {
var statearr_21805_21836 = state_21773__$1;
(statearr_21805_21836[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (16))){
var inst_21757 = (state_21773[(2)]);
var state_21773__$1 = state_21773;
var statearr_21806_21837 = state_21773__$1;
(statearr_21806_21837[(2)] = inst_21757);

(statearr_21806_21837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21774 === (10))){
var inst_21726 = (state_21773[(8)]);
var inst_21728 = (state_21773[(9)]);
var inst_21733 = cljs.core._nth.call(null,inst_21726,inst_21728);
var state_21773__$1 = state_21773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21773__$1,(13),out,inst_21733);
} else {
if((state_val_21774 === (18))){
var inst_21739 = (state_21773[(7)]);
var inst_21748 = cljs.core.first.call(null,inst_21739);
var state_21773__$1 = state_21773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21773__$1,(20),out,inst_21748);
} else {
if((state_val_21774 === (8))){
var inst_21728 = (state_21773[(9)]);
var inst_21727 = (state_21773[(11)]);
var inst_21730 = (inst_21728 < inst_21727);
var inst_21731 = inst_21730;
var state_21773__$1 = state_21773;
if(cljs.core.truth_(inst_21731)){
var statearr_21807_21838 = state_21773__$1;
(statearr_21807_21838[(1)] = (10));

} else {
var statearr_21808_21839 = state_21773__$1;
(statearr_21808_21839[(1)] = (11));

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
});})(c__6679__auto__))
;
return ((function (switch__6664__auto__,c__6679__auto__){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21812[(0)] = state_machine__6665__auto__);

(statearr_21812[(1)] = (1));

return statearr_21812;
});
var state_machine__6665__auto____1 = (function (state_21773){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21813){if((e21813 instanceof Object)){
var ex__6668__auto__ = e21813;
var statearr_21814_21840 = state_21773;
(statearr_21814_21840[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21841 = state_21773;
state_21773 = G__21841;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21773){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto__))
})();
var state__6681__auto__ = (function (){var statearr_21815 = f__6680__auto__.call(null);
(statearr_21815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto__);

return statearr_21815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto__))
);

return c__6679__auto__;
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
var c__6679__auto___21938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___21938,out){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___21938,out){
return (function (state_21913){
var state_val_21914 = (state_21913[(1)]);
if((state_val_21914 === (7))){
var inst_21908 = (state_21913[(2)]);
var state_21913__$1 = state_21913;
var statearr_21915_21939 = state_21913__$1;
(statearr_21915_21939[(2)] = inst_21908);

(statearr_21915_21939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21914 === (1))){
var inst_21890 = null;
var state_21913__$1 = (function (){var statearr_21916 = state_21913;
(statearr_21916[(7)] = inst_21890);

return statearr_21916;
})();
var statearr_21917_21940 = state_21913__$1;
(statearr_21917_21940[(2)] = null);

(statearr_21917_21940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21914 === (4))){
var inst_21893 = (state_21913[(8)]);
var inst_21893__$1 = (state_21913[(2)]);
var inst_21894 = (inst_21893__$1 == null);
var inst_21895 = cljs.core.not.call(null,inst_21894);
var state_21913__$1 = (function (){var statearr_21918 = state_21913;
(statearr_21918[(8)] = inst_21893__$1);

return statearr_21918;
})();
if(inst_21895){
var statearr_21919_21941 = state_21913__$1;
(statearr_21919_21941[(1)] = (5));

} else {
var statearr_21920_21942 = state_21913__$1;
(statearr_21920_21942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21914 === (6))){
var state_21913__$1 = state_21913;
var statearr_21921_21943 = state_21913__$1;
(statearr_21921_21943[(2)] = null);

(statearr_21921_21943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21914 === (3))){
var inst_21910 = (state_21913[(2)]);
var inst_21911 = cljs.core.async.close_BANG_.call(null,out);
var state_21913__$1 = (function (){var statearr_21922 = state_21913;
(statearr_21922[(9)] = inst_21910);

return statearr_21922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21913__$1,inst_21911);
} else {
if((state_val_21914 === (2))){
var state_21913__$1 = state_21913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21913__$1,(4),ch);
} else {
if((state_val_21914 === (11))){
var inst_21893 = (state_21913[(8)]);
var inst_21902 = (state_21913[(2)]);
var inst_21890 = inst_21893;
var state_21913__$1 = (function (){var statearr_21923 = state_21913;
(statearr_21923[(10)] = inst_21902);

(statearr_21923[(7)] = inst_21890);

return statearr_21923;
})();
var statearr_21924_21944 = state_21913__$1;
(statearr_21924_21944[(2)] = null);

(statearr_21924_21944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21914 === (9))){
var inst_21893 = (state_21913[(8)]);
var state_21913__$1 = state_21913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21913__$1,(11),out,inst_21893);
} else {
if((state_val_21914 === (5))){
var inst_21893 = (state_21913[(8)]);
var inst_21890 = (state_21913[(7)]);
var inst_21897 = cljs.core._EQ_.call(null,inst_21893,inst_21890);
var state_21913__$1 = state_21913;
if(inst_21897){
var statearr_21926_21945 = state_21913__$1;
(statearr_21926_21945[(1)] = (8));

} else {
var statearr_21927_21946 = state_21913__$1;
(statearr_21927_21946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21914 === (10))){
var inst_21905 = (state_21913[(2)]);
var state_21913__$1 = state_21913;
var statearr_21928_21947 = state_21913__$1;
(statearr_21928_21947[(2)] = inst_21905);

(statearr_21928_21947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21914 === (8))){
var inst_21890 = (state_21913[(7)]);
var tmp21925 = inst_21890;
var inst_21890__$1 = tmp21925;
var state_21913__$1 = (function (){var statearr_21929 = state_21913;
(statearr_21929[(7)] = inst_21890__$1);

return statearr_21929;
})();
var statearr_21930_21948 = state_21913__$1;
(statearr_21930_21948[(2)] = null);

(statearr_21930_21948[(1)] = (2));


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
});})(c__6679__auto___21938,out))
;
return ((function (switch__6664__auto__,c__6679__auto___21938,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_21934 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21934[(0)] = state_machine__6665__auto__);

(statearr_21934[(1)] = (1));

return statearr_21934;
});
var state_machine__6665__auto____1 = (function (state_21913){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_21913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e21935){if((e21935 instanceof Object)){
var ex__6668__auto__ = e21935;
var statearr_21936_21949 = state_21913;
(statearr_21936_21949[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21950 = state_21913;
state_21913 = G__21950;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_21913){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_21913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___21938,out))
})();
var state__6681__auto__ = (function (){var statearr_21937 = f__6680__auto__.call(null);
(statearr_21937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___21938);

return statearr_21937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___21938,out))
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
var c__6679__auto___22085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___22085,out){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___22085,out){
return (function (state_22055){
var state_val_22056 = (state_22055[(1)]);
if((state_val_22056 === (7))){
var inst_22051 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22057_22086 = state_22055__$1;
(statearr_22057_22086[(2)] = inst_22051);

(statearr_22057_22086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (1))){
var inst_22018 = (new Array(n));
var inst_22019 = inst_22018;
var inst_22020 = (0);
var state_22055__$1 = (function (){var statearr_22058 = state_22055;
(statearr_22058[(7)] = inst_22019);

(statearr_22058[(8)] = inst_22020);

return statearr_22058;
})();
var statearr_22059_22087 = state_22055__$1;
(statearr_22059_22087[(2)] = null);

(statearr_22059_22087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (4))){
var inst_22023 = (state_22055[(9)]);
var inst_22023__$1 = (state_22055[(2)]);
var inst_22024 = (inst_22023__$1 == null);
var inst_22025 = cljs.core.not.call(null,inst_22024);
var state_22055__$1 = (function (){var statearr_22060 = state_22055;
(statearr_22060[(9)] = inst_22023__$1);

return statearr_22060;
})();
if(inst_22025){
var statearr_22061_22088 = state_22055__$1;
(statearr_22061_22088[(1)] = (5));

} else {
var statearr_22062_22089 = state_22055__$1;
(statearr_22062_22089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (15))){
var inst_22045 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22063_22090 = state_22055__$1;
(statearr_22063_22090[(2)] = inst_22045);

(statearr_22063_22090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (13))){
var state_22055__$1 = state_22055;
var statearr_22064_22091 = state_22055__$1;
(statearr_22064_22091[(2)] = null);

(statearr_22064_22091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (6))){
var inst_22020 = (state_22055[(8)]);
var inst_22041 = (inst_22020 > (0));
var state_22055__$1 = state_22055;
if(cljs.core.truth_(inst_22041)){
var statearr_22065_22092 = state_22055__$1;
(statearr_22065_22092[(1)] = (12));

} else {
var statearr_22066_22093 = state_22055__$1;
(statearr_22066_22093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (3))){
var inst_22053 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22055__$1,inst_22053);
} else {
if((state_val_22056 === (12))){
var inst_22019 = (state_22055[(7)]);
var inst_22043 = cljs.core.vec.call(null,inst_22019);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22055__$1,(15),out,inst_22043);
} else {
if((state_val_22056 === (2))){
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(4),ch);
} else {
if((state_val_22056 === (11))){
var inst_22035 = (state_22055[(2)]);
var inst_22036 = (new Array(n));
var inst_22019 = inst_22036;
var inst_22020 = (0);
var state_22055__$1 = (function (){var statearr_22067 = state_22055;
(statearr_22067[(7)] = inst_22019);

(statearr_22067[(8)] = inst_22020);

(statearr_22067[(10)] = inst_22035);

return statearr_22067;
})();
var statearr_22068_22094 = state_22055__$1;
(statearr_22068_22094[(2)] = null);

(statearr_22068_22094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (9))){
var inst_22019 = (state_22055[(7)]);
var inst_22033 = cljs.core.vec.call(null,inst_22019);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22055__$1,(11),out,inst_22033);
} else {
if((state_val_22056 === (5))){
var inst_22028 = (state_22055[(11)]);
var inst_22019 = (state_22055[(7)]);
var inst_22023 = (state_22055[(9)]);
var inst_22020 = (state_22055[(8)]);
var inst_22027 = (inst_22019[inst_22020] = inst_22023);
var inst_22028__$1 = (inst_22020 + (1));
var inst_22029 = (inst_22028__$1 < n);
var state_22055__$1 = (function (){var statearr_22069 = state_22055;
(statearr_22069[(11)] = inst_22028__$1);

(statearr_22069[(12)] = inst_22027);

return statearr_22069;
})();
if(cljs.core.truth_(inst_22029)){
var statearr_22070_22095 = state_22055__$1;
(statearr_22070_22095[(1)] = (8));

} else {
var statearr_22071_22096 = state_22055__$1;
(statearr_22071_22096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (14))){
var inst_22048 = (state_22055[(2)]);
var inst_22049 = cljs.core.async.close_BANG_.call(null,out);
var state_22055__$1 = (function (){var statearr_22073 = state_22055;
(statearr_22073[(13)] = inst_22048);

return statearr_22073;
})();
var statearr_22074_22097 = state_22055__$1;
(statearr_22074_22097[(2)] = inst_22049);

(statearr_22074_22097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (10))){
var inst_22039 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22075_22098 = state_22055__$1;
(statearr_22075_22098[(2)] = inst_22039);

(statearr_22075_22098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (8))){
var inst_22028 = (state_22055[(11)]);
var inst_22019 = (state_22055[(7)]);
var tmp22072 = inst_22019;
var inst_22019__$1 = tmp22072;
var inst_22020 = inst_22028;
var state_22055__$1 = (function (){var statearr_22076 = state_22055;
(statearr_22076[(7)] = inst_22019__$1);

(statearr_22076[(8)] = inst_22020);

return statearr_22076;
})();
var statearr_22077_22099 = state_22055__$1;
(statearr_22077_22099[(2)] = null);

(statearr_22077_22099[(1)] = (2));


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
});})(c__6679__auto___22085,out))
;
return ((function (switch__6664__auto__,c__6679__auto___22085,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_22081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22081[(0)] = state_machine__6665__auto__);

(statearr_22081[(1)] = (1));

return statearr_22081;
});
var state_machine__6665__auto____1 = (function (state_22055){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_22055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e22082){if((e22082 instanceof Object)){
var ex__6668__auto__ = e22082;
var statearr_22083_22100 = state_22055;
(statearr_22083_22100[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22101 = state_22055;
state_22055 = G__22101;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_22055){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_22055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___22085,out))
})();
var state__6681__auto__ = (function (){var statearr_22084 = f__6680__auto__.call(null);
(statearr_22084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___22085);

return statearr_22084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___22085,out))
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
var c__6679__auto___22244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6679__auto___22244,out){
return (function (){
var f__6680__auto__ = (function (){var switch__6664__auto__ = ((function (c__6679__auto___22244,out){
return (function (state_22214){
var state_val_22215 = (state_22214[(1)]);
if((state_val_22215 === (7))){
var inst_22210 = (state_22214[(2)]);
var state_22214__$1 = state_22214;
var statearr_22216_22245 = state_22214__$1;
(statearr_22216_22245[(2)] = inst_22210);

(statearr_22216_22245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (1))){
var inst_22173 = [];
var inst_22174 = inst_22173;
var inst_22175 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22214__$1 = (function (){var statearr_22217 = state_22214;
(statearr_22217[(7)] = inst_22175);

(statearr_22217[(8)] = inst_22174);

return statearr_22217;
})();
var statearr_22218_22246 = state_22214__$1;
(statearr_22218_22246[(2)] = null);

(statearr_22218_22246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (4))){
var inst_22178 = (state_22214[(9)]);
var inst_22178__$1 = (state_22214[(2)]);
var inst_22179 = (inst_22178__$1 == null);
var inst_22180 = cljs.core.not.call(null,inst_22179);
var state_22214__$1 = (function (){var statearr_22219 = state_22214;
(statearr_22219[(9)] = inst_22178__$1);

return statearr_22219;
})();
if(inst_22180){
var statearr_22220_22247 = state_22214__$1;
(statearr_22220_22247[(1)] = (5));

} else {
var statearr_22221_22248 = state_22214__$1;
(statearr_22221_22248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (15))){
var inst_22204 = (state_22214[(2)]);
var state_22214__$1 = state_22214;
var statearr_22222_22249 = state_22214__$1;
(statearr_22222_22249[(2)] = inst_22204);

(statearr_22222_22249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (13))){
var state_22214__$1 = state_22214;
var statearr_22223_22250 = state_22214__$1;
(statearr_22223_22250[(2)] = null);

(statearr_22223_22250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (6))){
var inst_22174 = (state_22214[(8)]);
var inst_22199 = inst_22174.length;
var inst_22200 = (inst_22199 > (0));
var state_22214__$1 = state_22214;
if(cljs.core.truth_(inst_22200)){
var statearr_22224_22251 = state_22214__$1;
(statearr_22224_22251[(1)] = (12));

} else {
var statearr_22225_22252 = state_22214__$1;
(statearr_22225_22252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (3))){
var inst_22212 = (state_22214[(2)]);
var state_22214__$1 = state_22214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22214__$1,inst_22212);
} else {
if((state_val_22215 === (12))){
var inst_22174 = (state_22214[(8)]);
var inst_22202 = cljs.core.vec.call(null,inst_22174);
var state_22214__$1 = state_22214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22214__$1,(15),out,inst_22202);
} else {
if((state_val_22215 === (2))){
var state_22214__$1 = state_22214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22214__$1,(4),ch);
} else {
if((state_val_22215 === (11))){
var inst_22178 = (state_22214[(9)]);
var inst_22182 = (state_22214[(10)]);
var inst_22192 = (state_22214[(2)]);
var inst_22193 = [];
var inst_22194 = inst_22193.push(inst_22178);
var inst_22174 = inst_22193;
var inst_22175 = inst_22182;
var state_22214__$1 = (function (){var statearr_22226 = state_22214;
(statearr_22226[(7)] = inst_22175);

(statearr_22226[(11)] = inst_22194);

(statearr_22226[(8)] = inst_22174);

(statearr_22226[(12)] = inst_22192);

return statearr_22226;
})();
var statearr_22227_22253 = state_22214__$1;
(statearr_22227_22253[(2)] = null);

(statearr_22227_22253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (9))){
var inst_22174 = (state_22214[(8)]);
var inst_22190 = cljs.core.vec.call(null,inst_22174);
var state_22214__$1 = state_22214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22214__$1,(11),out,inst_22190);
} else {
if((state_val_22215 === (5))){
var inst_22175 = (state_22214[(7)]);
var inst_22178 = (state_22214[(9)]);
var inst_22182 = (state_22214[(10)]);
var inst_22182__$1 = f.call(null,inst_22178);
var inst_22183 = cljs.core._EQ_.call(null,inst_22182__$1,inst_22175);
var inst_22184 = cljs.core.keyword_identical_QMARK_.call(null,inst_22175,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22185 = (inst_22183) || (inst_22184);
var state_22214__$1 = (function (){var statearr_22228 = state_22214;
(statearr_22228[(10)] = inst_22182__$1);

return statearr_22228;
})();
if(cljs.core.truth_(inst_22185)){
var statearr_22229_22254 = state_22214__$1;
(statearr_22229_22254[(1)] = (8));

} else {
var statearr_22230_22255 = state_22214__$1;
(statearr_22230_22255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (14))){
var inst_22207 = (state_22214[(2)]);
var inst_22208 = cljs.core.async.close_BANG_.call(null,out);
var state_22214__$1 = (function (){var statearr_22232 = state_22214;
(statearr_22232[(13)] = inst_22207);

return statearr_22232;
})();
var statearr_22233_22256 = state_22214__$1;
(statearr_22233_22256[(2)] = inst_22208);

(statearr_22233_22256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (10))){
var inst_22197 = (state_22214[(2)]);
var state_22214__$1 = state_22214;
var statearr_22234_22257 = state_22214__$1;
(statearr_22234_22257[(2)] = inst_22197);

(statearr_22234_22257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22215 === (8))){
var inst_22178 = (state_22214[(9)]);
var inst_22174 = (state_22214[(8)]);
var inst_22182 = (state_22214[(10)]);
var inst_22187 = inst_22174.push(inst_22178);
var tmp22231 = inst_22174;
var inst_22174__$1 = tmp22231;
var inst_22175 = inst_22182;
var state_22214__$1 = (function (){var statearr_22235 = state_22214;
(statearr_22235[(7)] = inst_22175);

(statearr_22235[(8)] = inst_22174__$1);

(statearr_22235[(14)] = inst_22187);

return statearr_22235;
})();
var statearr_22236_22258 = state_22214__$1;
(statearr_22236_22258[(2)] = null);

(statearr_22236_22258[(1)] = (2));


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
});})(c__6679__auto___22244,out))
;
return ((function (switch__6664__auto__,c__6679__auto___22244,out){
return (function() {
var state_machine__6665__auto__ = null;
var state_machine__6665__auto____0 = (function (){
var statearr_22240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22240[(0)] = state_machine__6665__auto__);

(statearr_22240[(1)] = (1));

return statearr_22240;
});
var state_machine__6665__auto____1 = (function (state_22214){
while(true){
var ret_value__6666__auto__ = (function (){try{while(true){
var result__6667__auto__ = switch__6664__auto__.call(null,state_22214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6667__auto__;
}
break;
}
}catch (e22241){if((e22241 instanceof Object)){
var ex__6668__auto__ = e22241;
var statearr_22242_22259 = state_22214;
(statearr_22242_22259[(5)] = ex__6668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22260 = state_22214;
state_22214 = G__22260;
continue;
} else {
return ret_value__6666__auto__;
}
break;
}
});
state_machine__6665__auto__ = function(state_22214){
switch(arguments.length){
case 0:
return state_machine__6665__auto____0.call(this);
case 1:
return state_machine__6665__auto____1.call(this,state_22214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6665__auto____0;
state_machine__6665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6665__auto____1;
return state_machine__6665__auto__;
})()
;})(switch__6664__auto__,c__6679__auto___22244,out))
})();
var state__6681__auto__ = (function (){var statearr_22243 = f__6680__auto__.call(null);
(statearr_22243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6679__auto___22244);

return statearr_22243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6681__auto__);
});})(c__6679__auto___22244,out))
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
