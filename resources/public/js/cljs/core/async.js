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
if(typeof cljs.core.async.t19174 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19174 = (function (f,fn_handler,meta19175){
this.f = f;
this.fn_handler = fn_handler;
this.meta19175 = meta19175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19176){
var self__ = this;
var _19176__$1 = this;
return self__.meta19175;
});

cljs.core.async.t19174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19176,meta19175__$1){
var self__ = this;
var _19176__$1 = this;
return (new cljs.core.async.t19174(self__.f,self__.fn_handler,meta19175__$1));
});

cljs.core.async.t19174.cljs$lang$type = true;

cljs.core.async.t19174.cljs$lang$ctorStr = "cljs.core.async/t19174";

cljs.core.async.t19174.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19174");
});

cljs.core.async.__GT_t19174 = (function __GT_t19174(f__$1,fn_handler__$1,meta19175){
return (new cljs.core.async.t19174(f__$1,fn_handler__$1,meta19175));
});

}

return (new cljs.core.async.t19174(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__19178 = buff;
if(G__19178){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__19178.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19178.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19178);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19178);
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
var val_19179 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19179);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19179,ret){
return (function (){
return fn1.call(null,val_19179);
});})(val_19179,ret))
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
var n__4643__auto___19180 = n;
var x_19181 = (0);
while(true){
if((x_19181 < n__4643__auto___19180)){
(a[x_19181] = (0));

var G__19182 = (x_19181 + (1));
x_19181 = G__19182;
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

var G__19183 = (i + (1));
i = G__19183;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19187 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19187 = (function (flag,alt_flag,meta19188){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19188 = meta19188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19187.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19189){
var self__ = this;
var _19189__$1 = this;
return self__.meta19188;
});})(flag))
;

cljs.core.async.t19187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19189,meta19188__$1){
var self__ = this;
var _19189__$1 = this;
return (new cljs.core.async.t19187(self__.flag,self__.alt_flag,meta19188__$1));
});})(flag))
;

cljs.core.async.t19187.cljs$lang$type = true;

cljs.core.async.t19187.cljs$lang$ctorStr = "cljs.core.async/t19187";

cljs.core.async.t19187.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19187");
});})(flag))
;

cljs.core.async.__GT_t19187 = ((function (flag){
return (function __GT_t19187(flag__$1,alt_flag__$1,meta19188){
return (new cljs.core.async.t19187(flag__$1,alt_flag__$1,meta19188));
});})(flag))
;

}

return (new cljs.core.async.t19187(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19193 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19193 = (function (cb,flag,alt_handler,meta19194){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19194 = meta19194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19193.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19195){
var self__ = this;
var _19195__$1 = this;
return self__.meta19194;
});

cljs.core.async.t19193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19195,meta19194__$1){
var self__ = this;
var _19195__$1 = this;
return (new cljs.core.async.t19193(self__.cb,self__.flag,self__.alt_handler,meta19194__$1));
});

cljs.core.async.t19193.cljs$lang$type = true;

cljs.core.async.t19193.cljs$lang$ctorStr = "cljs.core.async/t19193";

cljs.core.async.t19193.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19193");
});

cljs.core.async.__GT_t19193 = (function __GT_t19193(cb__$1,flag__$1,alt_handler__$1,meta19194){
return (new cljs.core.async.t19193(cb__$1,flag__$1,alt_handler__$1,meta19194));
});

}

return (new cljs.core.async.t19193(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__19196_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19196_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19197_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19197_SHARP_,port], null));
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
var G__19198 = (i + (1));
i = G__19198;
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
var alts_BANG___delegate = function (ports,p__19199){
var map__19201 = p__19199;
var map__19201__$1 = ((cljs.core.seq_QMARK_.call(null,map__19201))?cljs.core.apply.call(null,cljs.core.hash_map,map__19201):map__19201);
var opts = map__19201__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19199 = null;
if (arguments.length > 1) {
  p__19199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19199);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19202){
var ports = cljs.core.first(arglist__19202);
var p__19199 = cljs.core.rest(arglist__19202);
return alts_BANG___delegate(ports,p__19199);
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
var c__6670__auto___19297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___19297){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___19297){
return (function (state_19273){
var state_val_19274 = (state_19273[(1)]);
if((state_val_19274 === (7))){
var inst_19269 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19275_19298 = state_19273__$1;
(statearr_19275_19298[(2)] = inst_19269);

(statearr_19275_19298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (1))){
var state_19273__$1 = state_19273;
var statearr_19276_19299 = state_19273__$1;
(statearr_19276_19299[(2)] = null);

(statearr_19276_19299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (4))){
var inst_19252 = (state_19273[(7)]);
var inst_19252__$1 = (state_19273[(2)]);
var inst_19253 = (inst_19252__$1 == null);
var state_19273__$1 = (function (){var statearr_19277 = state_19273;
(statearr_19277[(7)] = inst_19252__$1);

return statearr_19277;
})();
if(cljs.core.truth_(inst_19253)){
var statearr_19278_19300 = state_19273__$1;
(statearr_19278_19300[(1)] = (5));

} else {
var statearr_19279_19301 = state_19273__$1;
(statearr_19279_19301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (13))){
var state_19273__$1 = state_19273;
var statearr_19280_19302 = state_19273__$1;
(statearr_19280_19302[(2)] = null);

(statearr_19280_19302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (6))){
var inst_19252 = (state_19273[(7)]);
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19273__$1,(11),to,inst_19252);
} else {
if((state_val_19274 === (3))){
var inst_19271 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19273__$1,inst_19271);
} else {
if((state_val_19274 === (12))){
var state_19273__$1 = state_19273;
var statearr_19281_19303 = state_19273__$1;
(statearr_19281_19303[(2)] = null);

(statearr_19281_19303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (2))){
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19273__$1,(4),from);
} else {
if((state_val_19274 === (11))){
var inst_19262 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
if(cljs.core.truth_(inst_19262)){
var statearr_19282_19304 = state_19273__$1;
(statearr_19282_19304[(1)] = (12));

} else {
var statearr_19283_19305 = state_19273__$1;
(statearr_19283_19305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (9))){
var state_19273__$1 = state_19273;
var statearr_19284_19306 = state_19273__$1;
(statearr_19284_19306[(2)] = null);

(statearr_19284_19306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (5))){
var state_19273__$1 = state_19273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19285_19307 = state_19273__$1;
(statearr_19285_19307[(1)] = (8));

} else {
var statearr_19286_19308 = state_19273__$1;
(statearr_19286_19308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (14))){
var inst_19267 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19287_19309 = state_19273__$1;
(statearr_19287_19309[(2)] = inst_19267);

(statearr_19287_19309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (10))){
var inst_19259 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19288_19310 = state_19273__$1;
(statearr_19288_19310[(2)] = inst_19259);

(statearr_19288_19310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (8))){
var inst_19256 = cljs.core.async.close_BANG_.call(null,to);
var state_19273__$1 = state_19273;
var statearr_19289_19311 = state_19273__$1;
(statearr_19289_19311[(2)] = inst_19256);

(statearr_19289_19311[(1)] = (10));


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
});})(c__6670__auto___19297))
;
return ((function (switch__6655__auto__,c__6670__auto___19297){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19293 = [null,null,null,null,null,null,null,null];
(statearr_19293[(0)] = state_machine__6656__auto__);

(statearr_19293[(1)] = (1));

return statearr_19293;
});
var state_machine__6656__auto____1 = (function (state_19273){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19294){if((e19294 instanceof Object)){
var ex__6659__auto__ = e19294;
var statearr_19295_19312 = state_19273;
(statearr_19295_19312[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19313 = state_19273;
state_19273 = G__19313;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19273){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___19297))
})();
var state__6672__auto__ = (function (){var statearr_19296 = f__6671__auto__.call(null);
(statearr_19296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___19297);

return statearr_19296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___19297))
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
return (function (p__19497){
var vec__19498 = p__19497;
var v = cljs.core.nth.call(null,vec__19498,(0),null);
var p = cljs.core.nth.call(null,vec__19498,(1),null);
var job = vec__19498;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6670__auto___19680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___19680,res,vec__19498,v,p,job,jobs,results){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___19680,res,vec__19498,v,p,job,jobs,results){
return (function (state_19503){
var state_val_19504 = (state_19503[(1)]);
if((state_val_19504 === (2))){
var inst_19500 = (state_19503[(2)]);
var inst_19501 = cljs.core.async.close_BANG_.call(null,res);
var state_19503__$1 = (function (){var statearr_19505 = state_19503;
(statearr_19505[(7)] = inst_19500);

return statearr_19505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19503__$1,inst_19501);
} else {
if((state_val_19504 === (1))){
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19503__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6670__auto___19680,res,vec__19498,v,p,job,jobs,results))
;
return ((function (switch__6655__auto__,c__6670__auto___19680,res,vec__19498,v,p,job,jobs,results){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19509 = [null,null,null,null,null,null,null,null];
(statearr_19509[(0)] = state_machine__6656__auto__);

(statearr_19509[(1)] = (1));

return statearr_19509;
});
var state_machine__6656__auto____1 = (function (state_19503){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19510){if((e19510 instanceof Object)){
var ex__6659__auto__ = e19510;
var statearr_19511_19681 = state_19503;
(statearr_19511_19681[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19682 = state_19503;
state_19503 = G__19682;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19503){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___19680,res,vec__19498,v,p,job,jobs,results))
})();
var state__6672__auto__ = (function (){var statearr_19512 = f__6671__auto__.call(null);
(statearr_19512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___19680);

return statearr_19512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___19680,res,vec__19498,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19513){
var vec__19514 = p__19513;
var v = cljs.core.nth.call(null,vec__19514,(0),null);
var p = cljs.core.nth.call(null,vec__19514,(1),null);
var job = vec__19514;
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
var n__4643__auto___19683 = n;
var __19684 = (0);
while(true){
if((__19684 < n__4643__auto___19683)){
var G__19515_19685 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19515_19685) {
case "async":
var c__6670__auto___19687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19684,c__6670__auto___19687,G__19515_19685,n__4643__auto___19683,jobs,results,process,async){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (__19684,c__6670__auto___19687,G__19515_19685,n__4643__auto___19683,jobs,results,process,async){
return (function (state_19528){
var state_val_19529 = (state_19528[(1)]);
if((state_val_19529 === (7))){
var inst_19524 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
var statearr_19530_19688 = state_19528__$1;
(statearr_19530_19688[(2)] = inst_19524);

(statearr_19530_19688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (6))){
var state_19528__$1 = state_19528;
var statearr_19531_19689 = state_19528__$1;
(statearr_19531_19689[(2)] = null);

(statearr_19531_19689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (5))){
var state_19528__$1 = state_19528;
var statearr_19532_19690 = state_19528__$1;
(statearr_19532_19690[(2)] = null);

(statearr_19532_19690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (4))){
var inst_19518 = (state_19528[(2)]);
var inst_19519 = async.call(null,inst_19518);
var state_19528__$1 = state_19528;
if(cljs.core.truth_(inst_19519)){
var statearr_19533_19691 = state_19528__$1;
(statearr_19533_19691[(1)] = (5));

} else {
var statearr_19534_19692 = state_19528__$1;
(statearr_19534_19692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19529 === (3))){
var inst_19526 = (state_19528[(2)]);
var state_19528__$1 = state_19528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19528__$1,inst_19526);
} else {
if((state_val_19529 === (2))){
var state_19528__$1 = state_19528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19528__$1,(4),jobs);
} else {
if((state_val_19529 === (1))){
var state_19528__$1 = state_19528;
var statearr_19535_19693 = state_19528__$1;
(statearr_19535_19693[(2)] = null);

(statearr_19535_19693[(1)] = (2));


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
});})(__19684,c__6670__auto___19687,G__19515_19685,n__4643__auto___19683,jobs,results,process,async))
;
return ((function (__19684,switch__6655__auto__,c__6670__auto___19687,G__19515_19685,n__4643__auto___19683,jobs,results,process,async){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19539 = [null,null,null,null,null,null,null];
(statearr_19539[(0)] = state_machine__6656__auto__);

(statearr_19539[(1)] = (1));

return statearr_19539;
});
var state_machine__6656__auto____1 = (function (state_19528){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19540){if((e19540 instanceof Object)){
var ex__6659__auto__ = e19540;
var statearr_19541_19694 = state_19528;
(statearr_19541_19694[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19695 = state_19528;
state_19528 = G__19695;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19528){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(__19684,switch__6655__auto__,c__6670__auto___19687,G__19515_19685,n__4643__auto___19683,jobs,results,process,async))
})();
var state__6672__auto__ = (function (){var statearr_19542 = f__6671__auto__.call(null);
(statearr_19542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___19687);

return statearr_19542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(__19684,c__6670__auto___19687,G__19515_19685,n__4643__auto___19683,jobs,results,process,async))
);


break;
case "compute":
var c__6670__auto___19696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19684,c__6670__auto___19696,G__19515_19685,n__4643__auto___19683,jobs,results,process,async){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (__19684,c__6670__auto___19696,G__19515_19685,n__4643__auto___19683,jobs,results,process,async){
return (function (state_19555){
var state_val_19556 = (state_19555[(1)]);
if((state_val_19556 === (7))){
var inst_19551 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
var statearr_19557_19697 = state_19555__$1;
(statearr_19557_19697[(2)] = inst_19551);

(statearr_19557_19697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (6))){
var state_19555__$1 = state_19555;
var statearr_19558_19698 = state_19555__$1;
(statearr_19558_19698[(2)] = null);

(statearr_19558_19698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (5))){
var state_19555__$1 = state_19555;
var statearr_19559_19699 = state_19555__$1;
(statearr_19559_19699[(2)] = null);

(statearr_19559_19699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (4))){
var inst_19545 = (state_19555[(2)]);
var inst_19546 = process.call(null,inst_19545);
var state_19555__$1 = state_19555;
if(cljs.core.truth_(inst_19546)){
var statearr_19560_19700 = state_19555__$1;
(statearr_19560_19700[(1)] = (5));

} else {
var statearr_19561_19701 = state_19555__$1;
(statearr_19561_19701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (3))){
var inst_19553 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19555__$1,inst_19553);
} else {
if((state_val_19556 === (2))){
var state_19555__$1 = state_19555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19555__$1,(4),jobs);
} else {
if((state_val_19556 === (1))){
var state_19555__$1 = state_19555;
var statearr_19562_19702 = state_19555__$1;
(statearr_19562_19702[(2)] = null);

(statearr_19562_19702[(1)] = (2));


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
});})(__19684,c__6670__auto___19696,G__19515_19685,n__4643__auto___19683,jobs,results,process,async))
;
return ((function (__19684,switch__6655__auto__,c__6670__auto___19696,G__19515_19685,n__4643__auto___19683,jobs,results,process,async){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19566 = [null,null,null,null,null,null,null];
(statearr_19566[(0)] = state_machine__6656__auto__);

(statearr_19566[(1)] = (1));

return statearr_19566;
});
var state_machine__6656__auto____1 = (function (state_19555){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19567){if((e19567 instanceof Object)){
var ex__6659__auto__ = e19567;
var statearr_19568_19703 = state_19555;
(statearr_19568_19703[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19704 = state_19555;
state_19555 = G__19704;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19555){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(__19684,switch__6655__auto__,c__6670__auto___19696,G__19515_19685,n__4643__auto___19683,jobs,results,process,async))
})();
var state__6672__auto__ = (function (){var statearr_19569 = f__6671__auto__.call(null);
(statearr_19569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___19696);

return statearr_19569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(__19684,c__6670__auto___19696,G__19515_19685,n__4643__auto___19683,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19705 = (__19684 + (1));
__19684 = G__19705;
continue;
} else {
}
break;
}

var c__6670__auto___19706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___19706,jobs,results,process,async){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___19706,jobs,results,process,async){
return (function (state_19591){
var state_val_19592 = (state_19591[(1)]);
if((state_val_19592 === (9))){
var inst_19584 = (state_19591[(2)]);
var state_19591__$1 = (function (){var statearr_19593 = state_19591;
(statearr_19593[(7)] = inst_19584);

return statearr_19593;
})();
var statearr_19594_19707 = state_19591__$1;
(statearr_19594_19707[(2)] = null);

(statearr_19594_19707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19592 === (8))){
var inst_19577 = (state_19591[(8)]);
var inst_19582 = (state_19591[(2)]);
var state_19591__$1 = (function (){var statearr_19595 = state_19591;
(statearr_19595[(9)] = inst_19582);

return statearr_19595;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19591__$1,(9),results,inst_19577);
} else {
if((state_val_19592 === (7))){
var inst_19587 = (state_19591[(2)]);
var state_19591__$1 = state_19591;
var statearr_19596_19708 = state_19591__$1;
(statearr_19596_19708[(2)] = inst_19587);

(statearr_19596_19708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19592 === (6))){
var inst_19572 = (state_19591[(10)]);
var inst_19577 = (state_19591[(8)]);
var inst_19577__$1 = cljs.core.async.chan.call(null,(1));
var inst_19578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19579 = [inst_19572,inst_19577__$1];
var inst_19580 = (new cljs.core.PersistentVector(null,2,(5),inst_19578,inst_19579,null));
var state_19591__$1 = (function (){var statearr_19597 = state_19591;
(statearr_19597[(8)] = inst_19577__$1);

return statearr_19597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19591__$1,(8),jobs,inst_19580);
} else {
if((state_val_19592 === (5))){
var inst_19575 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19591__$1 = state_19591;
var statearr_19598_19709 = state_19591__$1;
(statearr_19598_19709[(2)] = inst_19575);

(statearr_19598_19709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19592 === (4))){
var inst_19572 = (state_19591[(10)]);
var inst_19572__$1 = (state_19591[(2)]);
var inst_19573 = (inst_19572__$1 == null);
var state_19591__$1 = (function (){var statearr_19599 = state_19591;
(statearr_19599[(10)] = inst_19572__$1);

return statearr_19599;
})();
if(cljs.core.truth_(inst_19573)){
var statearr_19600_19710 = state_19591__$1;
(statearr_19600_19710[(1)] = (5));

} else {
var statearr_19601_19711 = state_19591__$1;
(statearr_19601_19711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19592 === (3))){
var inst_19589 = (state_19591[(2)]);
var state_19591__$1 = state_19591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19591__$1,inst_19589);
} else {
if((state_val_19592 === (2))){
var state_19591__$1 = state_19591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19591__$1,(4),from);
} else {
if((state_val_19592 === (1))){
var state_19591__$1 = state_19591;
var statearr_19602_19712 = state_19591__$1;
(statearr_19602_19712[(2)] = null);

(statearr_19602_19712[(1)] = (2));


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
});})(c__6670__auto___19706,jobs,results,process,async))
;
return ((function (switch__6655__auto__,c__6670__auto___19706,jobs,results,process,async){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19606[(0)] = state_machine__6656__auto__);

(statearr_19606[(1)] = (1));

return statearr_19606;
});
var state_machine__6656__auto____1 = (function (state_19591){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19607){if((e19607 instanceof Object)){
var ex__6659__auto__ = e19607;
var statearr_19608_19713 = state_19591;
(statearr_19608_19713[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19714 = state_19591;
state_19591 = G__19714;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19591){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___19706,jobs,results,process,async))
})();
var state__6672__auto__ = (function (){var statearr_19609 = f__6671__auto__.call(null);
(statearr_19609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___19706);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___19706,jobs,results,process,async))
);


var c__6670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto__,jobs,results,process,async){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto__,jobs,results,process,async){
return (function (state_19647){
var state_val_19648 = (state_19647[(1)]);
if((state_val_19648 === (7))){
var inst_19643 = (state_19647[(2)]);
var state_19647__$1 = state_19647;
var statearr_19649_19715 = state_19647__$1;
(statearr_19649_19715[(2)] = inst_19643);

(statearr_19649_19715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (20))){
var state_19647__$1 = state_19647;
var statearr_19650_19716 = state_19647__$1;
(statearr_19650_19716[(2)] = null);

(statearr_19650_19716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (1))){
var state_19647__$1 = state_19647;
var statearr_19651_19717 = state_19647__$1;
(statearr_19651_19717[(2)] = null);

(statearr_19651_19717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (4))){
var inst_19612 = (state_19647[(7)]);
var inst_19612__$1 = (state_19647[(2)]);
var inst_19613 = (inst_19612__$1 == null);
var state_19647__$1 = (function (){var statearr_19652 = state_19647;
(statearr_19652[(7)] = inst_19612__$1);

return statearr_19652;
})();
if(cljs.core.truth_(inst_19613)){
var statearr_19653_19718 = state_19647__$1;
(statearr_19653_19718[(1)] = (5));

} else {
var statearr_19654_19719 = state_19647__$1;
(statearr_19654_19719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (15))){
var inst_19625 = (state_19647[(8)]);
var state_19647__$1 = state_19647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19647__$1,(18),to,inst_19625);
} else {
if((state_val_19648 === (21))){
var inst_19638 = (state_19647[(2)]);
var state_19647__$1 = state_19647;
var statearr_19655_19720 = state_19647__$1;
(statearr_19655_19720[(2)] = inst_19638);

(statearr_19655_19720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (13))){
var inst_19640 = (state_19647[(2)]);
var state_19647__$1 = (function (){var statearr_19656 = state_19647;
(statearr_19656[(9)] = inst_19640);

return statearr_19656;
})();
var statearr_19657_19721 = state_19647__$1;
(statearr_19657_19721[(2)] = null);

(statearr_19657_19721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (6))){
var inst_19612 = (state_19647[(7)]);
var state_19647__$1 = state_19647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19647__$1,(11),inst_19612);
} else {
if((state_val_19648 === (17))){
var inst_19633 = (state_19647[(2)]);
var state_19647__$1 = state_19647;
if(cljs.core.truth_(inst_19633)){
var statearr_19658_19722 = state_19647__$1;
(statearr_19658_19722[(1)] = (19));

} else {
var statearr_19659_19723 = state_19647__$1;
(statearr_19659_19723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (3))){
var inst_19645 = (state_19647[(2)]);
var state_19647__$1 = state_19647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19647__$1,inst_19645);
} else {
if((state_val_19648 === (12))){
var inst_19622 = (state_19647[(10)]);
var state_19647__$1 = state_19647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19647__$1,(14),inst_19622);
} else {
if((state_val_19648 === (2))){
var state_19647__$1 = state_19647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19647__$1,(4),results);
} else {
if((state_val_19648 === (19))){
var state_19647__$1 = state_19647;
var statearr_19660_19724 = state_19647__$1;
(statearr_19660_19724[(2)] = null);

(statearr_19660_19724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (11))){
var inst_19622 = (state_19647[(2)]);
var state_19647__$1 = (function (){var statearr_19661 = state_19647;
(statearr_19661[(10)] = inst_19622);

return statearr_19661;
})();
var statearr_19662_19725 = state_19647__$1;
(statearr_19662_19725[(2)] = null);

(statearr_19662_19725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (9))){
var state_19647__$1 = state_19647;
var statearr_19663_19726 = state_19647__$1;
(statearr_19663_19726[(2)] = null);

(statearr_19663_19726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (5))){
var state_19647__$1 = state_19647;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19664_19727 = state_19647__$1;
(statearr_19664_19727[(1)] = (8));

} else {
var statearr_19665_19728 = state_19647__$1;
(statearr_19665_19728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (14))){
var inst_19625 = (state_19647[(8)]);
var inst_19627 = (state_19647[(11)]);
var inst_19625__$1 = (state_19647[(2)]);
var inst_19626 = (inst_19625__$1 == null);
var inst_19627__$1 = cljs.core.not.call(null,inst_19626);
var state_19647__$1 = (function (){var statearr_19666 = state_19647;
(statearr_19666[(8)] = inst_19625__$1);

(statearr_19666[(11)] = inst_19627__$1);

return statearr_19666;
})();
if(inst_19627__$1){
var statearr_19667_19729 = state_19647__$1;
(statearr_19667_19729[(1)] = (15));

} else {
var statearr_19668_19730 = state_19647__$1;
(statearr_19668_19730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (16))){
var inst_19627 = (state_19647[(11)]);
var state_19647__$1 = state_19647;
var statearr_19669_19731 = state_19647__$1;
(statearr_19669_19731[(2)] = inst_19627);

(statearr_19669_19731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (10))){
var inst_19619 = (state_19647[(2)]);
var state_19647__$1 = state_19647;
var statearr_19670_19732 = state_19647__$1;
(statearr_19670_19732[(2)] = inst_19619);

(statearr_19670_19732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (18))){
var inst_19630 = (state_19647[(2)]);
var state_19647__$1 = state_19647;
var statearr_19671_19733 = state_19647__$1;
(statearr_19671_19733[(2)] = inst_19630);

(statearr_19671_19733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19648 === (8))){
var inst_19616 = cljs.core.async.close_BANG_.call(null,to);
var state_19647__$1 = state_19647;
var statearr_19672_19734 = state_19647__$1;
(statearr_19672_19734[(2)] = inst_19616);

(statearr_19672_19734[(1)] = (10));


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
});})(c__6670__auto__,jobs,results,process,async))
;
return ((function (switch__6655__auto__,c__6670__auto__,jobs,results,process,async){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19676[(0)] = state_machine__6656__auto__);

(statearr_19676[(1)] = (1));

return statearr_19676;
});
var state_machine__6656__auto____1 = (function (state_19647){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19677){if((e19677 instanceof Object)){
var ex__6659__auto__ = e19677;
var statearr_19678_19735 = state_19647;
(statearr_19678_19735[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19736 = state_19647;
state_19647 = G__19736;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19647){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto__,jobs,results,process,async))
})();
var state__6672__auto__ = (function (){var statearr_19679 = f__6671__auto__.call(null);
(statearr_19679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto__);

return statearr_19679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto__,jobs,results,process,async))
);

return c__6670__auto__;
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
var c__6670__auto___19837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___19837,tc,fc){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___19837,tc,fc){
return (function (state_19812){
var state_val_19813 = (state_19812[(1)]);
if((state_val_19813 === (7))){
var inst_19808 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
var statearr_19814_19838 = state_19812__$1;
(statearr_19814_19838[(2)] = inst_19808);

(statearr_19814_19838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (1))){
var state_19812__$1 = state_19812;
var statearr_19815_19839 = state_19812__$1;
(statearr_19815_19839[(2)] = null);

(statearr_19815_19839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (4))){
var inst_19789 = (state_19812[(7)]);
var inst_19789__$1 = (state_19812[(2)]);
var inst_19790 = (inst_19789__$1 == null);
var state_19812__$1 = (function (){var statearr_19816 = state_19812;
(statearr_19816[(7)] = inst_19789__$1);

return statearr_19816;
})();
if(cljs.core.truth_(inst_19790)){
var statearr_19817_19840 = state_19812__$1;
(statearr_19817_19840[(1)] = (5));

} else {
var statearr_19818_19841 = state_19812__$1;
(statearr_19818_19841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (13))){
var state_19812__$1 = state_19812;
var statearr_19819_19842 = state_19812__$1;
(statearr_19819_19842[(2)] = null);

(statearr_19819_19842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (6))){
var inst_19789 = (state_19812[(7)]);
var inst_19795 = p.call(null,inst_19789);
var state_19812__$1 = state_19812;
if(cljs.core.truth_(inst_19795)){
var statearr_19820_19843 = state_19812__$1;
(statearr_19820_19843[(1)] = (9));

} else {
var statearr_19821_19844 = state_19812__$1;
(statearr_19821_19844[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (3))){
var inst_19810 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19812__$1,inst_19810);
} else {
if((state_val_19813 === (12))){
var state_19812__$1 = state_19812;
var statearr_19822_19845 = state_19812__$1;
(statearr_19822_19845[(2)] = null);

(statearr_19822_19845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (2))){
var state_19812__$1 = state_19812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19812__$1,(4),ch);
} else {
if((state_val_19813 === (11))){
var inst_19789 = (state_19812[(7)]);
var inst_19799 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19812__$1,(8),inst_19799,inst_19789);
} else {
if((state_val_19813 === (9))){
var state_19812__$1 = state_19812;
var statearr_19823_19846 = state_19812__$1;
(statearr_19823_19846[(2)] = tc);

(statearr_19823_19846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (5))){
var inst_19792 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19793 = cljs.core.async.close_BANG_.call(null,fc);
var state_19812__$1 = (function (){var statearr_19824 = state_19812;
(statearr_19824[(8)] = inst_19792);

return statearr_19824;
})();
var statearr_19825_19847 = state_19812__$1;
(statearr_19825_19847[(2)] = inst_19793);

(statearr_19825_19847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (14))){
var inst_19806 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
var statearr_19826_19848 = state_19812__$1;
(statearr_19826_19848[(2)] = inst_19806);

(statearr_19826_19848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (10))){
var state_19812__$1 = state_19812;
var statearr_19827_19849 = state_19812__$1;
(statearr_19827_19849[(2)] = fc);

(statearr_19827_19849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (8))){
var inst_19801 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
if(cljs.core.truth_(inst_19801)){
var statearr_19828_19850 = state_19812__$1;
(statearr_19828_19850[(1)] = (12));

} else {
var statearr_19829_19851 = state_19812__$1;
(statearr_19829_19851[(1)] = (13));

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
});})(c__6670__auto___19837,tc,fc))
;
return ((function (switch__6655__auto__,c__6670__auto___19837,tc,fc){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19833 = [null,null,null,null,null,null,null,null,null];
(statearr_19833[(0)] = state_machine__6656__auto__);

(statearr_19833[(1)] = (1));

return statearr_19833;
});
var state_machine__6656__auto____1 = (function (state_19812){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19834){if((e19834 instanceof Object)){
var ex__6659__auto__ = e19834;
var statearr_19835_19852 = state_19812;
(statearr_19835_19852[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19853 = state_19812;
state_19812 = G__19853;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19812){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___19837,tc,fc))
})();
var state__6672__auto__ = (function (){var statearr_19836 = f__6671__auto__.call(null);
(statearr_19836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___19837);

return statearr_19836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___19837,tc,fc))
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
var c__6670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto__){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto__){
return (function (state_19900){
var state_val_19901 = (state_19900[(1)]);
if((state_val_19901 === (7))){
var inst_19896 = (state_19900[(2)]);
var state_19900__$1 = state_19900;
var statearr_19902_19918 = state_19900__$1;
(statearr_19902_19918[(2)] = inst_19896);

(statearr_19902_19918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (6))){
var inst_19889 = (state_19900[(7)]);
var inst_19886 = (state_19900[(8)]);
var inst_19893 = f.call(null,inst_19886,inst_19889);
var inst_19886__$1 = inst_19893;
var state_19900__$1 = (function (){var statearr_19903 = state_19900;
(statearr_19903[(8)] = inst_19886__$1);

return statearr_19903;
})();
var statearr_19904_19919 = state_19900__$1;
(statearr_19904_19919[(2)] = null);

(statearr_19904_19919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (5))){
var inst_19886 = (state_19900[(8)]);
var state_19900__$1 = state_19900;
var statearr_19905_19920 = state_19900__$1;
(statearr_19905_19920[(2)] = inst_19886);

(statearr_19905_19920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (4))){
var inst_19889 = (state_19900[(7)]);
var inst_19889__$1 = (state_19900[(2)]);
var inst_19890 = (inst_19889__$1 == null);
var state_19900__$1 = (function (){var statearr_19906 = state_19900;
(statearr_19906[(7)] = inst_19889__$1);

return statearr_19906;
})();
if(cljs.core.truth_(inst_19890)){
var statearr_19907_19921 = state_19900__$1;
(statearr_19907_19921[(1)] = (5));

} else {
var statearr_19908_19922 = state_19900__$1;
(statearr_19908_19922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (3))){
var inst_19898 = (state_19900[(2)]);
var state_19900__$1 = state_19900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19900__$1,inst_19898);
} else {
if((state_val_19901 === (2))){
var state_19900__$1 = state_19900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19900__$1,(4),ch);
} else {
if((state_val_19901 === (1))){
var inst_19886 = init;
var state_19900__$1 = (function (){var statearr_19909 = state_19900;
(statearr_19909[(8)] = inst_19886);

return statearr_19909;
})();
var statearr_19910_19923 = state_19900__$1;
(statearr_19910_19923[(2)] = null);

(statearr_19910_19923[(1)] = (2));


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
});})(c__6670__auto__))
;
return ((function (switch__6655__auto__,c__6670__auto__){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_19914 = [null,null,null,null,null,null,null,null,null];
(statearr_19914[(0)] = state_machine__6656__auto__);

(statearr_19914[(1)] = (1));

return statearr_19914;
});
var state_machine__6656__auto____1 = (function (state_19900){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19915){if((e19915 instanceof Object)){
var ex__6659__auto__ = e19915;
var statearr_19916_19924 = state_19900;
(statearr_19916_19924[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19925 = state_19900;
state_19900 = G__19925;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19900){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto__))
})();
var state__6672__auto__ = (function (){var statearr_19917 = f__6671__auto__.call(null);
(statearr_19917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto__);

return statearr_19917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto__))
);

return c__6670__auto__;
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
var c__6670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto__){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto__){
return (function (state_19999){
var state_val_20000 = (state_19999[(1)]);
if((state_val_20000 === (7))){
var inst_19981 = (state_19999[(2)]);
var state_19999__$1 = state_19999;
var statearr_20001_20024 = state_19999__$1;
(statearr_20001_20024[(2)] = inst_19981);

(statearr_20001_20024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (1))){
var inst_19975 = cljs.core.seq.call(null,coll);
var inst_19976 = inst_19975;
var state_19999__$1 = (function (){var statearr_20002 = state_19999;
(statearr_20002[(7)] = inst_19976);

return statearr_20002;
})();
var statearr_20003_20025 = state_19999__$1;
(statearr_20003_20025[(2)] = null);

(statearr_20003_20025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (4))){
var inst_19976 = (state_19999[(7)]);
var inst_19979 = cljs.core.first.call(null,inst_19976);
var state_19999__$1 = state_19999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19999__$1,(7),ch,inst_19979);
} else {
if((state_val_20000 === (13))){
var inst_19993 = (state_19999[(2)]);
var state_19999__$1 = state_19999;
var statearr_20004_20026 = state_19999__$1;
(statearr_20004_20026[(2)] = inst_19993);

(statearr_20004_20026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (6))){
var inst_19984 = (state_19999[(2)]);
var state_19999__$1 = state_19999;
if(cljs.core.truth_(inst_19984)){
var statearr_20005_20027 = state_19999__$1;
(statearr_20005_20027[(1)] = (8));

} else {
var statearr_20006_20028 = state_19999__$1;
(statearr_20006_20028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (3))){
var inst_19997 = (state_19999[(2)]);
var state_19999__$1 = state_19999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19999__$1,inst_19997);
} else {
if((state_val_20000 === (12))){
var state_19999__$1 = state_19999;
var statearr_20007_20029 = state_19999__$1;
(statearr_20007_20029[(2)] = null);

(statearr_20007_20029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (2))){
var inst_19976 = (state_19999[(7)]);
var state_19999__$1 = state_19999;
if(cljs.core.truth_(inst_19976)){
var statearr_20008_20030 = state_19999__$1;
(statearr_20008_20030[(1)] = (4));

} else {
var statearr_20009_20031 = state_19999__$1;
(statearr_20009_20031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (11))){
var inst_19990 = cljs.core.async.close_BANG_.call(null,ch);
var state_19999__$1 = state_19999;
var statearr_20010_20032 = state_19999__$1;
(statearr_20010_20032[(2)] = inst_19990);

(statearr_20010_20032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (9))){
var state_19999__$1 = state_19999;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20011_20033 = state_19999__$1;
(statearr_20011_20033[(1)] = (11));

} else {
var statearr_20012_20034 = state_19999__$1;
(statearr_20012_20034[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (5))){
var inst_19976 = (state_19999[(7)]);
var state_19999__$1 = state_19999;
var statearr_20013_20035 = state_19999__$1;
(statearr_20013_20035[(2)] = inst_19976);

(statearr_20013_20035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (10))){
var inst_19995 = (state_19999[(2)]);
var state_19999__$1 = state_19999;
var statearr_20014_20036 = state_19999__$1;
(statearr_20014_20036[(2)] = inst_19995);

(statearr_20014_20036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20000 === (8))){
var inst_19976 = (state_19999[(7)]);
var inst_19986 = cljs.core.next.call(null,inst_19976);
var inst_19976__$1 = inst_19986;
var state_19999__$1 = (function (){var statearr_20015 = state_19999;
(statearr_20015[(7)] = inst_19976__$1);

return statearr_20015;
})();
var statearr_20016_20037 = state_19999__$1;
(statearr_20016_20037[(2)] = null);

(statearr_20016_20037[(1)] = (2));


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
});})(c__6670__auto__))
;
return ((function (switch__6655__auto__,c__6670__auto__){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_20020 = [null,null,null,null,null,null,null,null];
(statearr_20020[(0)] = state_machine__6656__auto__);

(statearr_20020[(1)] = (1));

return statearr_20020;
});
var state_machine__6656__auto____1 = (function (state_19999){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e20021){if((e20021 instanceof Object)){
var ex__6659__auto__ = e20021;
var statearr_20022_20038 = state_19999;
(statearr_20022_20038[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20039 = state_19999;
state_19999 = G__20039;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_19999){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_19999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto__))
})();
var state__6672__auto__ = (function (){var statearr_20023 = f__6671__auto__.call(null);
(statearr_20023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto__);

return statearr_20023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto__))
);

return c__6670__auto__;
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

cljs.core.async.Mux = (function (){var obj20041 = {};
return obj20041;
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


cljs.core.async.Mult = (function (){var obj20043 = {};
return obj20043;
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
if(typeof cljs.core.async.t20265 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20265 = (function (cs,ch,mult,meta20266){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20266 = meta20266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20265.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20265.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20265.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20265.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20265.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20267){
var self__ = this;
var _20267__$1 = this;
return self__.meta20266;
});})(cs))
;

cljs.core.async.t20265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20267,meta20266__$1){
var self__ = this;
var _20267__$1 = this;
return (new cljs.core.async.t20265(self__.cs,self__.ch,self__.mult,meta20266__$1));
});})(cs))
;

cljs.core.async.t20265.cljs$lang$type = true;

cljs.core.async.t20265.cljs$lang$ctorStr = "cljs.core.async/t20265";

cljs.core.async.t20265.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20265");
});})(cs))
;

cljs.core.async.__GT_t20265 = ((function (cs){
return (function __GT_t20265(cs__$1,ch__$1,mult__$1,meta20266){
return (new cljs.core.async.t20265(cs__$1,ch__$1,mult__$1,meta20266));
});})(cs))
;

}

return (new cljs.core.async.t20265(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6670__auto___20486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___20486,cs,m,dchan,dctr,done){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___20486,cs,m,dchan,dctr,done){
return (function (state_20398){
var state_val_20399 = (state_20398[(1)]);
if((state_val_20399 === (7))){
var inst_20394 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20400_20487 = state_20398__$1;
(statearr_20400_20487[(2)] = inst_20394);

(statearr_20400_20487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (20))){
var inst_20299 = (state_20398[(7)]);
var inst_20309 = cljs.core.first.call(null,inst_20299);
var inst_20310 = cljs.core.nth.call(null,inst_20309,(0),null);
var inst_20311 = cljs.core.nth.call(null,inst_20309,(1),null);
var state_20398__$1 = (function (){var statearr_20401 = state_20398;
(statearr_20401[(8)] = inst_20310);

return statearr_20401;
})();
if(cljs.core.truth_(inst_20311)){
var statearr_20402_20488 = state_20398__$1;
(statearr_20402_20488[(1)] = (22));

} else {
var statearr_20403_20489 = state_20398__$1;
(statearr_20403_20489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (27))){
var inst_20341 = (state_20398[(9)]);
var inst_20339 = (state_20398[(10)]);
var inst_20346 = (state_20398[(11)]);
var inst_20270 = (state_20398[(12)]);
var inst_20346__$1 = cljs.core._nth.call(null,inst_20339,inst_20341);
var inst_20347 = cljs.core.async.put_BANG_.call(null,inst_20346__$1,inst_20270,done);
var state_20398__$1 = (function (){var statearr_20404 = state_20398;
(statearr_20404[(11)] = inst_20346__$1);

return statearr_20404;
})();
if(cljs.core.truth_(inst_20347)){
var statearr_20405_20490 = state_20398__$1;
(statearr_20405_20490[(1)] = (30));

} else {
var statearr_20406_20491 = state_20398__$1;
(statearr_20406_20491[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (1))){
var state_20398__$1 = state_20398;
var statearr_20407_20492 = state_20398__$1;
(statearr_20407_20492[(2)] = null);

(statearr_20407_20492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (24))){
var inst_20299 = (state_20398[(7)]);
var inst_20316 = (state_20398[(2)]);
var inst_20317 = cljs.core.next.call(null,inst_20299);
var inst_20279 = inst_20317;
var inst_20280 = null;
var inst_20281 = (0);
var inst_20282 = (0);
var state_20398__$1 = (function (){var statearr_20408 = state_20398;
(statearr_20408[(13)] = inst_20279);

(statearr_20408[(14)] = inst_20282);

(statearr_20408[(15)] = inst_20280);

(statearr_20408[(16)] = inst_20316);

(statearr_20408[(17)] = inst_20281);

return statearr_20408;
})();
var statearr_20409_20493 = state_20398__$1;
(statearr_20409_20493[(2)] = null);

(statearr_20409_20493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (39))){
var state_20398__$1 = state_20398;
var statearr_20413_20494 = state_20398__$1;
(statearr_20413_20494[(2)] = null);

(statearr_20413_20494[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (4))){
var inst_20270 = (state_20398[(12)]);
var inst_20270__$1 = (state_20398[(2)]);
var inst_20271 = (inst_20270__$1 == null);
var state_20398__$1 = (function (){var statearr_20414 = state_20398;
(statearr_20414[(12)] = inst_20270__$1);

return statearr_20414;
})();
if(cljs.core.truth_(inst_20271)){
var statearr_20415_20495 = state_20398__$1;
(statearr_20415_20495[(1)] = (5));

} else {
var statearr_20416_20496 = state_20398__$1;
(statearr_20416_20496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (15))){
var inst_20279 = (state_20398[(13)]);
var inst_20282 = (state_20398[(14)]);
var inst_20280 = (state_20398[(15)]);
var inst_20281 = (state_20398[(17)]);
var inst_20295 = (state_20398[(2)]);
var inst_20296 = (inst_20282 + (1));
var tmp20410 = inst_20279;
var tmp20411 = inst_20280;
var tmp20412 = inst_20281;
var inst_20279__$1 = tmp20410;
var inst_20280__$1 = tmp20411;
var inst_20281__$1 = tmp20412;
var inst_20282__$1 = inst_20296;
var state_20398__$1 = (function (){var statearr_20417 = state_20398;
(statearr_20417[(18)] = inst_20295);

(statearr_20417[(13)] = inst_20279__$1);

(statearr_20417[(14)] = inst_20282__$1);

(statearr_20417[(15)] = inst_20280__$1);

(statearr_20417[(17)] = inst_20281__$1);

return statearr_20417;
})();
var statearr_20418_20497 = state_20398__$1;
(statearr_20418_20497[(2)] = null);

(statearr_20418_20497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (21))){
var inst_20320 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20422_20498 = state_20398__$1;
(statearr_20422_20498[(2)] = inst_20320);

(statearr_20422_20498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (31))){
var inst_20346 = (state_20398[(11)]);
var inst_20350 = done.call(null,null);
var inst_20351 = cljs.core.async.untap_STAR_.call(null,m,inst_20346);
var state_20398__$1 = (function (){var statearr_20423 = state_20398;
(statearr_20423[(19)] = inst_20350);

return statearr_20423;
})();
var statearr_20424_20499 = state_20398__$1;
(statearr_20424_20499[(2)] = inst_20351);

(statearr_20424_20499[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (32))){
var inst_20338 = (state_20398[(20)]);
var inst_20341 = (state_20398[(9)]);
var inst_20339 = (state_20398[(10)]);
var inst_20340 = (state_20398[(21)]);
var inst_20353 = (state_20398[(2)]);
var inst_20354 = (inst_20341 + (1));
var tmp20419 = inst_20338;
var tmp20420 = inst_20339;
var tmp20421 = inst_20340;
var inst_20338__$1 = tmp20419;
var inst_20339__$1 = tmp20420;
var inst_20340__$1 = tmp20421;
var inst_20341__$1 = inst_20354;
var state_20398__$1 = (function (){var statearr_20425 = state_20398;
(statearr_20425[(20)] = inst_20338__$1);

(statearr_20425[(9)] = inst_20341__$1);

(statearr_20425[(10)] = inst_20339__$1);

(statearr_20425[(21)] = inst_20340__$1);

(statearr_20425[(22)] = inst_20353);

return statearr_20425;
})();
var statearr_20426_20500 = state_20398__$1;
(statearr_20426_20500[(2)] = null);

(statearr_20426_20500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (40))){
var inst_20366 = (state_20398[(23)]);
var inst_20370 = done.call(null,null);
var inst_20371 = cljs.core.async.untap_STAR_.call(null,m,inst_20366);
var state_20398__$1 = (function (){var statearr_20427 = state_20398;
(statearr_20427[(24)] = inst_20370);

return statearr_20427;
})();
var statearr_20428_20501 = state_20398__$1;
(statearr_20428_20501[(2)] = inst_20371);

(statearr_20428_20501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (33))){
var inst_20357 = (state_20398[(25)]);
var inst_20359 = cljs.core.chunked_seq_QMARK_.call(null,inst_20357);
var state_20398__$1 = state_20398;
if(inst_20359){
var statearr_20429_20502 = state_20398__$1;
(statearr_20429_20502[(1)] = (36));

} else {
var statearr_20430_20503 = state_20398__$1;
(statearr_20430_20503[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (13))){
var inst_20289 = (state_20398[(26)]);
var inst_20292 = cljs.core.async.close_BANG_.call(null,inst_20289);
var state_20398__$1 = state_20398;
var statearr_20431_20504 = state_20398__$1;
(statearr_20431_20504[(2)] = inst_20292);

(statearr_20431_20504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (22))){
var inst_20310 = (state_20398[(8)]);
var inst_20313 = cljs.core.async.close_BANG_.call(null,inst_20310);
var state_20398__$1 = state_20398;
var statearr_20432_20505 = state_20398__$1;
(statearr_20432_20505[(2)] = inst_20313);

(statearr_20432_20505[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (36))){
var inst_20357 = (state_20398[(25)]);
var inst_20361 = cljs.core.chunk_first.call(null,inst_20357);
var inst_20362 = cljs.core.chunk_rest.call(null,inst_20357);
var inst_20363 = cljs.core.count.call(null,inst_20361);
var inst_20338 = inst_20362;
var inst_20339 = inst_20361;
var inst_20340 = inst_20363;
var inst_20341 = (0);
var state_20398__$1 = (function (){var statearr_20433 = state_20398;
(statearr_20433[(20)] = inst_20338);

(statearr_20433[(9)] = inst_20341);

(statearr_20433[(10)] = inst_20339);

(statearr_20433[(21)] = inst_20340);

return statearr_20433;
})();
var statearr_20434_20506 = state_20398__$1;
(statearr_20434_20506[(2)] = null);

(statearr_20434_20506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (41))){
var inst_20357 = (state_20398[(25)]);
var inst_20373 = (state_20398[(2)]);
var inst_20374 = cljs.core.next.call(null,inst_20357);
var inst_20338 = inst_20374;
var inst_20339 = null;
var inst_20340 = (0);
var inst_20341 = (0);
var state_20398__$1 = (function (){var statearr_20435 = state_20398;
(statearr_20435[(20)] = inst_20338);

(statearr_20435[(27)] = inst_20373);

(statearr_20435[(9)] = inst_20341);

(statearr_20435[(10)] = inst_20339);

(statearr_20435[(21)] = inst_20340);

return statearr_20435;
})();
var statearr_20436_20507 = state_20398__$1;
(statearr_20436_20507[(2)] = null);

(statearr_20436_20507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (43))){
var state_20398__$1 = state_20398;
var statearr_20437_20508 = state_20398__$1;
(statearr_20437_20508[(2)] = null);

(statearr_20437_20508[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (29))){
var inst_20382 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20438_20509 = state_20398__$1;
(statearr_20438_20509[(2)] = inst_20382);

(statearr_20438_20509[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (44))){
var inst_20391 = (state_20398[(2)]);
var state_20398__$1 = (function (){var statearr_20439 = state_20398;
(statearr_20439[(28)] = inst_20391);

return statearr_20439;
})();
var statearr_20440_20510 = state_20398__$1;
(statearr_20440_20510[(2)] = null);

(statearr_20440_20510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (6))){
var inst_20330 = (state_20398[(29)]);
var inst_20329 = cljs.core.deref.call(null,cs);
var inst_20330__$1 = cljs.core.keys.call(null,inst_20329);
var inst_20331 = cljs.core.count.call(null,inst_20330__$1);
var inst_20332 = cljs.core.reset_BANG_.call(null,dctr,inst_20331);
var inst_20337 = cljs.core.seq.call(null,inst_20330__$1);
var inst_20338 = inst_20337;
var inst_20339 = null;
var inst_20340 = (0);
var inst_20341 = (0);
var state_20398__$1 = (function (){var statearr_20441 = state_20398;
(statearr_20441[(20)] = inst_20338);

(statearr_20441[(9)] = inst_20341);

(statearr_20441[(10)] = inst_20339);

(statearr_20441[(29)] = inst_20330__$1);

(statearr_20441[(30)] = inst_20332);

(statearr_20441[(21)] = inst_20340);

return statearr_20441;
})();
var statearr_20442_20511 = state_20398__$1;
(statearr_20442_20511[(2)] = null);

(statearr_20442_20511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (28))){
var inst_20338 = (state_20398[(20)]);
var inst_20357 = (state_20398[(25)]);
var inst_20357__$1 = cljs.core.seq.call(null,inst_20338);
var state_20398__$1 = (function (){var statearr_20443 = state_20398;
(statearr_20443[(25)] = inst_20357__$1);

return statearr_20443;
})();
if(inst_20357__$1){
var statearr_20444_20512 = state_20398__$1;
(statearr_20444_20512[(1)] = (33));

} else {
var statearr_20445_20513 = state_20398__$1;
(statearr_20445_20513[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (25))){
var inst_20341 = (state_20398[(9)]);
var inst_20340 = (state_20398[(21)]);
var inst_20343 = (inst_20341 < inst_20340);
var inst_20344 = inst_20343;
var state_20398__$1 = state_20398;
if(cljs.core.truth_(inst_20344)){
var statearr_20446_20514 = state_20398__$1;
(statearr_20446_20514[(1)] = (27));

} else {
var statearr_20447_20515 = state_20398__$1;
(statearr_20447_20515[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (34))){
var state_20398__$1 = state_20398;
var statearr_20448_20516 = state_20398__$1;
(statearr_20448_20516[(2)] = null);

(statearr_20448_20516[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (17))){
var state_20398__$1 = state_20398;
var statearr_20449_20517 = state_20398__$1;
(statearr_20449_20517[(2)] = null);

(statearr_20449_20517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (3))){
var inst_20396 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20398__$1,inst_20396);
} else {
if((state_val_20399 === (12))){
var inst_20325 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20450_20518 = state_20398__$1;
(statearr_20450_20518[(2)] = inst_20325);

(statearr_20450_20518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (2))){
var state_20398__$1 = state_20398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20398__$1,(4),ch);
} else {
if((state_val_20399 === (23))){
var state_20398__$1 = state_20398;
var statearr_20451_20519 = state_20398__$1;
(statearr_20451_20519[(2)] = null);

(statearr_20451_20519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (35))){
var inst_20380 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20452_20520 = state_20398__$1;
(statearr_20452_20520[(2)] = inst_20380);

(statearr_20452_20520[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (19))){
var inst_20299 = (state_20398[(7)]);
var inst_20303 = cljs.core.chunk_first.call(null,inst_20299);
var inst_20304 = cljs.core.chunk_rest.call(null,inst_20299);
var inst_20305 = cljs.core.count.call(null,inst_20303);
var inst_20279 = inst_20304;
var inst_20280 = inst_20303;
var inst_20281 = inst_20305;
var inst_20282 = (0);
var state_20398__$1 = (function (){var statearr_20453 = state_20398;
(statearr_20453[(13)] = inst_20279);

(statearr_20453[(14)] = inst_20282);

(statearr_20453[(15)] = inst_20280);

(statearr_20453[(17)] = inst_20281);

return statearr_20453;
})();
var statearr_20454_20521 = state_20398__$1;
(statearr_20454_20521[(2)] = null);

(statearr_20454_20521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (11))){
var inst_20279 = (state_20398[(13)]);
var inst_20299 = (state_20398[(7)]);
var inst_20299__$1 = cljs.core.seq.call(null,inst_20279);
var state_20398__$1 = (function (){var statearr_20455 = state_20398;
(statearr_20455[(7)] = inst_20299__$1);

return statearr_20455;
})();
if(inst_20299__$1){
var statearr_20456_20522 = state_20398__$1;
(statearr_20456_20522[(1)] = (16));

} else {
var statearr_20457_20523 = state_20398__$1;
(statearr_20457_20523[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (9))){
var inst_20327 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20458_20524 = state_20398__$1;
(statearr_20458_20524[(2)] = inst_20327);

(statearr_20458_20524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (5))){
var inst_20277 = cljs.core.deref.call(null,cs);
var inst_20278 = cljs.core.seq.call(null,inst_20277);
var inst_20279 = inst_20278;
var inst_20280 = null;
var inst_20281 = (0);
var inst_20282 = (0);
var state_20398__$1 = (function (){var statearr_20459 = state_20398;
(statearr_20459[(13)] = inst_20279);

(statearr_20459[(14)] = inst_20282);

(statearr_20459[(15)] = inst_20280);

(statearr_20459[(17)] = inst_20281);

return statearr_20459;
})();
var statearr_20460_20525 = state_20398__$1;
(statearr_20460_20525[(2)] = null);

(statearr_20460_20525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (14))){
var state_20398__$1 = state_20398;
var statearr_20461_20526 = state_20398__$1;
(statearr_20461_20526[(2)] = null);

(statearr_20461_20526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (45))){
var inst_20388 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20462_20527 = state_20398__$1;
(statearr_20462_20527[(2)] = inst_20388);

(statearr_20462_20527[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (26))){
var inst_20330 = (state_20398[(29)]);
var inst_20384 = (state_20398[(2)]);
var inst_20385 = cljs.core.seq.call(null,inst_20330);
var state_20398__$1 = (function (){var statearr_20463 = state_20398;
(statearr_20463[(31)] = inst_20384);

return statearr_20463;
})();
if(inst_20385){
var statearr_20464_20528 = state_20398__$1;
(statearr_20464_20528[(1)] = (42));

} else {
var statearr_20465_20529 = state_20398__$1;
(statearr_20465_20529[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (16))){
var inst_20299 = (state_20398[(7)]);
var inst_20301 = cljs.core.chunked_seq_QMARK_.call(null,inst_20299);
var state_20398__$1 = state_20398;
if(inst_20301){
var statearr_20466_20530 = state_20398__$1;
(statearr_20466_20530[(1)] = (19));

} else {
var statearr_20467_20531 = state_20398__$1;
(statearr_20467_20531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (38))){
var inst_20377 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20468_20532 = state_20398__$1;
(statearr_20468_20532[(2)] = inst_20377);

(statearr_20468_20532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (30))){
var state_20398__$1 = state_20398;
var statearr_20469_20533 = state_20398__$1;
(statearr_20469_20533[(2)] = null);

(statearr_20469_20533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (10))){
var inst_20282 = (state_20398[(14)]);
var inst_20280 = (state_20398[(15)]);
var inst_20288 = cljs.core._nth.call(null,inst_20280,inst_20282);
var inst_20289 = cljs.core.nth.call(null,inst_20288,(0),null);
var inst_20290 = cljs.core.nth.call(null,inst_20288,(1),null);
var state_20398__$1 = (function (){var statearr_20470 = state_20398;
(statearr_20470[(26)] = inst_20289);

return statearr_20470;
})();
if(cljs.core.truth_(inst_20290)){
var statearr_20471_20534 = state_20398__$1;
(statearr_20471_20534[(1)] = (13));

} else {
var statearr_20472_20535 = state_20398__$1;
(statearr_20472_20535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (18))){
var inst_20323 = (state_20398[(2)]);
var state_20398__$1 = state_20398;
var statearr_20473_20536 = state_20398__$1;
(statearr_20473_20536[(2)] = inst_20323);

(statearr_20473_20536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (42))){
var state_20398__$1 = state_20398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20398__$1,(45),dchan);
} else {
if((state_val_20399 === (37))){
var inst_20366 = (state_20398[(23)]);
var inst_20357 = (state_20398[(25)]);
var inst_20270 = (state_20398[(12)]);
var inst_20366__$1 = cljs.core.first.call(null,inst_20357);
var inst_20367 = cljs.core.async.put_BANG_.call(null,inst_20366__$1,inst_20270,done);
var state_20398__$1 = (function (){var statearr_20474 = state_20398;
(statearr_20474[(23)] = inst_20366__$1);

return statearr_20474;
})();
if(cljs.core.truth_(inst_20367)){
var statearr_20475_20537 = state_20398__$1;
(statearr_20475_20537[(1)] = (39));

} else {
var statearr_20476_20538 = state_20398__$1;
(statearr_20476_20538[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20399 === (8))){
var inst_20282 = (state_20398[(14)]);
var inst_20281 = (state_20398[(17)]);
var inst_20284 = (inst_20282 < inst_20281);
var inst_20285 = inst_20284;
var state_20398__$1 = state_20398;
if(cljs.core.truth_(inst_20285)){
var statearr_20477_20539 = state_20398__$1;
(statearr_20477_20539[(1)] = (10));

} else {
var statearr_20478_20540 = state_20398__$1;
(statearr_20478_20540[(1)] = (11));

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
});})(c__6670__auto___20486,cs,m,dchan,dctr,done))
;
return ((function (switch__6655__auto__,c__6670__auto___20486,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_20482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20482[(0)] = state_machine__6656__auto__);

(statearr_20482[(1)] = (1));

return statearr_20482;
});
var state_machine__6656__auto____1 = (function (state_20398){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_20398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e20483){if((e20483 instanceof Object)){
var ex__6659__auto__ = e20483;
var statearr_20484_20541 = state_20398;
(statearr_20484_20541[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20542 = state_20398;
state_20398 = G__20542;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_20398){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_20398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___20486,cs,m,dchan,dctr,done))
})();
var state__6672__auto__ = (function (){var statearr_20485 = f__6671__auto__.call(null);
(statearr_20485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___20486);

return statearr_20485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___20486,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj20544 = {};
return obj20544;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20545){
var map__20550 = p__20545;
var map__20550__$1 = ((cljs.core.seq_QMARK_.call(null,map__20550))?cljs.core.apply.call(null,cljs.core.hash_map,map__20550):map__20550);
var opts = map__20550__$1;
var statearr_20551_20554 = state;
(statearr_20551_20554[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20550,map__20550__$1,opts){
return (function (val){
var statearr_20552_20555 = state;
(statearr_20552_20555[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20550,map__20550__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20553_20556 = state;
(statearr_20553_20556[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20545 = null;
if (arguments.length > 3) {
  p__20545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20545);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20557){
var state = cljs.core.first(arglist__20557);
arglist__20557 = cljs.core.next(arglist__20557);
var cont_block = cljs.core.first(arglist__20557);
arglist__20557 = cljs.core.next(arglist__20557);
var ports = cljs.core.first(arglist__20557);
var p__20545 = cljs.core.rest(arglist__20557);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20545);
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
if(typeof cljs.core.async.t20677 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20677 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20678){
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
this.meta20678 = meta20678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20677.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20677.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20677.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20677.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20677.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20677.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20679){
var self__ = this;
var _20679__$1 = this;
return self__.meta20678;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20679,meta20678__$1){
var self__ = this;
var _20679__$1 = this;
return (new cljs.core.async.t20677(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20678__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20677.cljs$lang$type = true;

cljs.core.async.t20677.cljs$lang$ctorStr = "cljs.core.async/t20677";

cljs.core.async.t20677.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20677");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20677 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20678){
return (new cljs.core.async.t20677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20678));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20677(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6670__auto___20796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___20796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___20796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20749){
var state_val_20750 = (state_20749[(1)]);
if((state_val_20750 === (7))){
var inst_20693 = (state_20749[(7)]);
var inst_20698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20693);
var state_20749__$1 = state_20749;
var statearr_20751_20797 = state_20749__$1;
(statearr_20751_20797[(2)] = inst_20698);

(statearr_20751_20797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (20))){
var inst_20708 = (state_20749[(8)]);
var state_20749__$1 = state_20749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20749__$1,(23),out,inst_20708);
} else {
if((state_val_20750 === (1))){
var inst_20683 = (state_20749[(9)]);
var inst_20683__$1 = calc_state.call(null);
var inst_20684 = cljs.core.seq_QMARK_.call(null,inst_20683__$1);
var state_20749__$1 = (function (){var statearr_20752 = state_20749;
(statearr_20752[(9)] = inst_20683__$1);

return statearr_20752;
})();
if(inst_20684){
var statearr_20753_20798 = state_20749__$1;
(statearr_20753_20798[(1)] = (2));

} else {
var statearr_20754_20799 = state_20749__$1;
(statearr_20754_20799[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (24))){
var inst_20701 = (state_20749[(10)]);
var inst_20693 = inst_20701;
var state_20749__$1 = (function (){var statearr_20755 = state_20749;
(statearr_20755[(7)] = inst_20693);

return statearr_20755;
})();
var statearr_20756_20800 = state_20749__$1;
(statearr_20756_20800[(2)] = null);

(statearr_20756_20800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (4))){
var inst_20683 = (state_20749[(9)]);
var inst_20689 = (state_20749[(2)]);
var inst_20690 = cljs.core.get.call(null,inst_20689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20691 = cljs.core.get.call(null,inst_20689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20692 = cljs.core.get.call(null,inst_20689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20693 = inst_20683;
var state_20749__$1 = (function (){var statearr_20757 = state_20749;
(statearr_20757[(7)] = inst_20693);

(statearr_20757[(11)] = inst_20690);

(statearr_20757[(12)] = inst_20692);

(statearr_20757[(13)] = inst_20691);

return statearr_20757;
})();
var statearr_20758_20801 = state_20749__$1;
(statearr_20758_20801[(2)] = null);

(statearr_20758_20801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (15))){
var state_20749__$1 = state_20749;
var statearr_20759_20802 = state_20749__$1;
(statearr_20759_20802[(2)] = null);

(statearr_20759_20802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (21))){
var inst_20701 = (state_20749[(10)]);
var inst_20693 = inst_20701;
var state_20749__$1 = (function (){var statearr_20760 = state_20749;
(statearr_20760[(7)] = inst_20693);

return statearr_20760;
})();
var statearr_20761_20803 = state_20749__$1;
(statearr_20761_20803[(2)] = null);

(statearr_20761_20803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (13))){
var inst_20745 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
var statearr_20762_20804 = state_20749__$1;
(statearr_20762_20804[(2)] = inst_20745);

(statearr_20762_20804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (22))){
var inst_20743 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
var statearr_20763_20805 = state_20749__$1;
(statearr_20763_20805[(2)] = inst_20743);

(statearr_20763_20805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (6))){
var inst_20747 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20749__$1,inst_20747);
} else {
if((state_val_20750 === (25))){
var state_20749__$1 = state_20749;
var statearr_20764_20806 = state_20749__$1;
(statearr_20764_20806[(2)] = null);

(statearr_20764_20806[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (17))){
var inst_20723 = (state_20749[(14)]);
var state_20749__$1 = state_20749;
var statearr_20765_20807 = state_20749__$1;
(statearr_20765_20807[(2)] = inst_20723);

(statearr_20765_20807[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (3))){
var inst_20683 = (state_20749[(9)]);
var state_20749__$1 = state_20749;
var statearr_20766_20808 = state_20749__$1;
(statearr_20766_20808[(2)] = inst_20683);

(statearr_20766_20808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (12))){
var inst_20709 = (state_20749[(15)]);
var inst_20723 = (state_20749[(14)]);
var inst_20704 = (state_20749[(16)]);
var inst_20723__$1 = inst_20704.call(null,inst_20709);
var state_20749__$1 = (function (){var statearr_20767 = state_20749;
(statearr_20767[(14)] = inst_20723__$1);

return statearr_20767;
})();
if(cljs.core.truth_(inst_20723__$1)){
var statearr_20768_20809 = state_20749__$1;
(statearr_20768_20809[(1)] = (17));

} else {
var statearr_20769_20810 = state_20749__$1;
(statearr_20769_20810[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (2))){
var inst_20683 = (state_20749[(9)]);
var inst_20686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20683);
var state_20749__$1 = state_20749;
var statearr_20770_20811 = state_20749__$1;
(statearr_20770_20811[(2)] = inst_20686);

(statearr_20770_20811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (23))){
var inst_20734 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
if(cljs.core.truth_(inst_20734)){
var statearr_20771_20812 = state_20749__$1;
(statearr_20771_20812[(1)] = (24));

} else {
var statearr_20772_20813 = state_20749__$1;
(statearr_20772_20813[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (19))){
var inst_20731 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
if(cljs.core.truth_(inst_20731)){
var statearr_20773_20814 = state_20749__$1;
(statearr_20773_20814[(1)] = (20));

} else {
var statearr_20774_20815 = state_20749__$1;
(statearr_20774_20815[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (11))){
var inst_20708 = (state_20749[(8)]);
var inst_20714 = (inst_20708 == null);
var state_20749__$1 = state_20749;
if(cljs.core.truth_(inst_20714)){
var statearr_20775_20816 = state_20749__$1;
(statearr_20775_20816[(1)] = (14));

} else {
var statearr_20776_20817 = state_20749__$1;
(statearr_20776_20817[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (9))){
var inst_20701 = (state_20749[(10)]);
var inst_20701__$1 = (state_20749[(2)]);
var inst_20702 = cljs.core.get.call(null,inst_20701__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20703 = cljs.core.get.call(null,inst_20701__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20704 = cljs.core.get.call(null,inst_20701__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20749__$1 = (function (){var statearr_20777 = state_20749;
(statearr_20777[(16)] = inst_20704);

(statearr_20777[(17)] = inst_20703);

(statearr_20777[(10)] = inst_20701__$1);

return statearr_20777;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20749__$1,(10),inst_20702);
} else {
if((state_val_20750 === (5))){
var inst_20693 = (state_20749[(7)]);
var inst_20696 = cljs.core.seq_QMARK_.call(null,inst_20693);
var state_20749__$1 = state_20749;
if(inst_20696){
var statearr_20778_20818 = state_20749__$1;
(statearr_20778_20818[(1)] = (7));

} else {
var statearr_20779_20819 = state_20749__$1;
(statearr_20779_20819[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (14))){
var inst_20709 = (state_20749[(15)]);
var inst_20716 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20709);
var state_20749__$1 = state_20749;
var statearr_20780_20820 = state_20749__$1;
(statearr_20780_20820[(2)] = inst_20716);

(statearr_20780_20820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (26))){
var inst_20739 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
var statearr_20781_20821 = state_20749__$1;
(statearr_20781_20821[(2)] = inst_20739);

(statearr_20781_20821[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (16))){
var inst_20719 = (state_20749[(2)]);
var inst_20720 = calc_state.call(null);
var inst_20693 = inst_20720;
var state_20749__$1 = (function (){var statearr_20782 = state_20749;
(statearr_20782[(7)] = inst_20693);

(statearr_20782[(18)] = inst_20719);

return statearr_20782;
})();
var statearr_20783_20822 = state_20749__$1;
(statearr_20783_20822[(2)] = null);

(statearr_20783_20822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (10))){
var inst_20708 = (state_20749[(8)]);
var inst_20709 = (state_20749[(15)]);
var inst_20707 = (state_20749[(2)]);
var inst_20708__$1 = cljs.core.nth.call(null,inst_20707,(0),null);
var inst_20709__$1 = cljs.core.nth.call(null,inst_20707,(1),null);
var inst_20710 = (inst_20708__$1 == null);
var inst_20711 = cljs.core._EQ_.call(null,inst_20709__$1,change);
var inst_20712 = (inst_20710) || (inst_20711);
var state_20749__$1 = (function (){var statearr_20784 = state_20749;
(statearr_20784[(8)] = inst_20708__$1);

(statearr_20784[(15)] = inst_20709__$1);

return statearr_20784;
})();
if(cljs.core.truth_(inst_20712)){
var statearr_20785_20823 = state_20749__$1;
(statearr_20785_20823[(1)] = (11));

} else {
var statearr_20786_20824 = state_20749__$1;
(statearr_20786_20824[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (18))){
var inst_20709 = (state_20749[(15)]);
var inst_20704 = (state_20749[(16)]);
var inst_20703 = (state_20749[(17)]);
var inst_20726 = cljs.core.empty_QMARK_.call(null,inst_20704);
var inst_20727 = inst_20703.call(null,inst_20709);
var inst_20728 = cljs.core.not.call(null,inst_20727);
var inst_20729 = (inst_20726) && (inst_20728);
var state_20749__$1 = state_20749;
var statearr_20787_20825 = state_20749__$1;
(statearr_20787_20825[(2)] = inst_20729);

(statearr_20787_20825[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (8))){
var inst_20693 = (state_20749[(7)]);
var state_20749__$1 = state_20749;
var statearr_20788_20826 = state_20749__$1;
(statearr_20788_20826[(2)] = inst_20693);

(statearr_20788_20826[(1)] = (9));


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
});})(c__6670__auto___20796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6655__auto__,c__6670__auto___20796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_20792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20792[(0)] = state_machine__6656__auto__);

(statearr_20792[(1)] = (1));

return statearr_20792;
});
var state_machine__6656__auto____1 = (function (state_20749){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_20749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e20793){if((e20793 instanceof Object)){
var ex__6659__auto__ = e20793;
var statearr_20794_20827 = state_20749;
(statearr_20794_20827[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20828 = state_20749;
state_20749 = G__20828;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_20749){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_20749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___20796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6672__auto__ = (function (){var statearr_20795 = f__6671__auto__.call(null);
(statearr_20795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___20796);

return statearr_20795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___20796,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20830 = {};
return obj20830;
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
return (function (p1__20831_SHARP_){
if(cljs.core.truth_(p1__20831_SHARP_.call(null,topic))){
return p1__20831_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20831_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20954 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20955){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20955 = meta20955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20954.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20954.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20954.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20954.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20954.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20956){
var self__ = this;
var _20956__$1 = this;
return self__.meta20955;
});})(mults,ensure_mult))
;

cljs.core.async.t20954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20956,meta20955__$1){
var self__ = this;
var _20956__$1 = this;
return (new cljs.core.async.t20954(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20955__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20954.cljs$lang$type = true;

cljs.core.async.t20954.cljs$lang$ctorStr = "cljs.core.async/t20954";

cljs.core.async.t20954.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20954");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20954 = ((function (mults,ensure_mult){
return (function __GT_t20954(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20955){
return (new cljs.core.async.t20954(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20955));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20954(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6670__auto___21076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___21076,mults,ensure_mult,p){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___21076,mults,ensure_mult,p){
return (function (state_21028){
var state_val_21029 = (state_21028[(1)]);
if((state_val_21029 === (7))){
var inst_21024 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21030_21077 = state_21028__$1;
(statearr_21030_21077[(2)] = inst_21024);

(statearr_21030_21077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (20))){
var state_21028__$1 = state_21028;
var statearr_21031_21078 = state_21028__$1;
(statearr_21031_21078[(2)] = null);

(statearr_21031_21078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (1))){
var state_21028__$1 = state_21028;
var statearr_21032_21079 = state_21028__$1;
(statearr_21032_21079[(2)] = null);

(statearr_21032_21079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (24))){
var inst_21007 = (state_21028[(7)]);
var inst_21016 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21007);
var state_21028__$1 = state_21028;
var statearr_21033_21080 = state_21028__$1;
(statearr_21033_21080[(2)] = inst_21016);

(statearr_21033_21080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (4))){
var inst_20959 = (state_21028[(8)]);
var inst_20959__$1 = (state_21028[(2)]);
var inst_20960 = (inst_20959__$1 == null);
var state_21028__$1 = (function (){var statearr_21034 = state_21028;
(statearr_21034[(8)] = inst_20959__$1);

return statearr_21034;
})();
if(cljs.core.truth_(inst_20960)){
var statearr_21035_21081 = state_21028__$1;
(statearr_21035_21081[(1)] = (5));

} else {
var statearr_21036_21082 = state_21028__$1;
(statearr_21036_21082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (15))){
var inst_21001 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21037_21083 = state_21028__$1;
(statearr_21037_21083[(2)] = inst_21001);

(statearr_21037_21083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (21))){
var inst_21021 = (state_21028[(2)]);
var state_21028__$1 = (function (){var statearr_21038 = state_21028;
(statearr_21038[(9)] = inst_21021);

return statearr_21038;
})();
var statearr_21039_21084 = state_21028__$1;
(statearr_21039_21084[(2)] = null);

(statearr_21039_21084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (13))){
var inst_20983 = (state_21028[(10)]);
var inst_20985 = cljs.core.chunked_seq_QMARK_.call(null,inst_20983);
var state_21028__$1 = state_21028;
if(inst_20985){
var statearr_21040_21085 = state_21028__$1;
(statearr_21040_21085[(1)] = (16));

} else {
var statearr_21041_21086 = state_21028__$1;
(statearr_21041_21086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (22))){
var inst_21013 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
if(cljs.core.truth_(inst_21013)){
var statearr_21042_21087 = state_21028__$1;
(statearr_21042_21087[(1)] = (23));

} else {
var statearr_21043_21088 = state_21028__$1;
(statearr_21043_21088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (6))){
var inst_21009 = (state_21028[(11)]);
var inst_21007 = (state_21028[(7)]);
var inst_20959 = (state_21028[(8)]);
var inst_21007__$1 = topic_fn.call(null,inst_20959);
var inst_21008 = cljs.core.deref.call(null,mults);
var inst_21009__$1 = cljs.core.get.call(null,inst_21008,inst_21007__$1);
var state_21028__$1 = (function (){var statearr_21044 = state_21028;
(statearr_21044[(11)] = inst_21009__$1);

(statearr_21044[(7)] = inst_21007__$1);

return statearr_21044;
})();
if(cljs.core.truth_(inst_21009__$1)){
var statearr_21045_21089 = state_21028__$1;
(statearr_21045_21089[(1)] = (19));

} else {
var statearr_21046_21090 = state_21028__$1;
(statearr_21046_21090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (25))){
var inst_21018 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21047_21091 = state_21028__$1;
(statearr_21047_21091[(2)] = inst_21018);

(statearr_21047_21091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (17))){
var inst_20983 = (state_21028[(10)]);
var inst_20992 = cljs.core.first.call(null,inst_20983);
var inst_20993 = cljs.core.async.muxch_STAR_.call(null,inst_20992);
var inst_20994 = cljs.core.async.close_BANG_.call(null,inst_20993);
var inst_20995 = cljs.core.next.call(null,inst_20983);
var inst_20969 = inst_20995;
var inst_20970 = null;
var inst_20971 = (0);
var inst_20972 = (0);
var state_21028__$1 = (function (){var statearr_21048 = state_21028;
(statearr_21048[(12)] = inst_20994);

(statearr_21048[(13)] = inst_20971);

(statearr_21048[(14)] = inst_20972);

(statearr_21048[(15)] = inst_20969);

(statearr_21048[(16)] = inst_20970);

return statearr_21048;
})();
var statearr_21049_21092 = state_21028__$1;
(statearr_21049_21092[(2)] = null);

(statearr_21049_21092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (3))){
var inst_21026 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21028__$1,inst_21026);
} else {
if((state_val_21029 === (12))){
var inst_21003 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21050_21093 = state_21028__$1;
(statearr_21050_21093[(2)] = inst_21003);

(statearr_21050_21093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (2))){
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21028__$1,(4),ch);
} else {
if((state_val_21029 === (23))){
var state_21028__$1 = state_21028;
var statearr_21051_21094 = state_21028__$1;
(statearr_21051_21094[(2)] = null);

(statearr_21051_21094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (19))){
var inst_21009 = (state_21028[(11)]);
var inst_20959 = (state_21028[(8)]);
var inst_21011 = cljs.core.async.muxch_STAR_.call(null,inst_21009);
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21028__$1,(22),inst_21011,inst_20959);
} else {
if((state_val_21029 === (11))){
var inst_20969 = (state_21028[(15)]);
var inst_20983 = (state_21028[(10)]);
var inst_20983__$1 = cljs.core.seq.call(null,inst_20969);
var state_21028__$1 = (function (){var statearr_21052 = state_21028;
(statearr_21052[(10)] = inst_20983__$1);

return statearr_21052;
})();
if(inst_20983__$1){
var statearr_21053_21095 = state_21028__$1;
(statearr_21053_21095[(1)] = (13));

} else {
var statearr_21054_21096 = state_21028__$1;
(statearr_21054_21096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (9))){
var inst_21005 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21055_21097 = state_21028__$1;
(statearr_21055_21097[(2)] = inst_21005);

(statearr_21055_21097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (5))){
var inst_20966 = cljs.core.deref.call(null,mults);
var inst_20967 = cljs.core.vals.call(null,inst_20966);
var inst_20968 = cljs.core.seq.call(null,inst_20967);
var inst_20969 = inst_20968;
var inst_20970 = null;
var inst_20971 = (0);
var inst_20972 = (0);
var state_21028__$1 = (function (){var statearr_21056 = state_21028;
(statearr_21056[(13)] = inst_20971);

(statearr_21056[(14)] = inst_20972);

(statearr_21056[(15)] = inst_20969);

(statearr_21056[(16)] = inst_20970);

return statearr_21056;
})();
var statearr_21057_21098 = state_21028__$1;
(statearr_21057_21098[(2)] = null);

(statearr_21057_21098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (14))){
var state_21028__$1 = state_21028;
var statearr_21061_21099 = state_21028__$1;
(statearr_21061_21099[(2)] = null);

(statearr_21061_21099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (16))){
var inst_20983 = (state_21028[(10)]);
var inst_20987 = cljs.core.chunk_first.call(null,inst_20983);
var inst_20988 = cljs.core.chunk_rest.call(null,inst_20983);
var inst_20989 = cljs.core.count.call(null,inst_20987);
var inst_20969 = inst_20988;
var inst_20970 = inst_20987;
var inst_20971 = inst_20989;
var inst_20972 = (0);
var state_21028__$1 = (function (){var statearr_21062 = state_21028;
(statearr_21062[(13)] = inst_20971);

(statearr_21062[(14)] = inst_20972);

(statearr_21062[(15)] = inst_20969);

(statearr_21062[(16)] = inst_20970);

return statearr_21062;
})();
var statearr_21063_21100 = state_21028__$1;
(statearr_21063_21100[(2)] = null);

(statearr_21063_21100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (10))){
var inst_20971 = (state_21028[(13)]);
var inst_20972 = (state_21028[(14)]);
var inst_20969 = (state_21028[(15)]);
var inst_20970 = (state_21028[(16)]);
var inst_20977 = cljs.core._nth.call(null,inst_20970,inst_20972);
var inst_20978 = cljs.core.async.muxch_STAR_.call(null,inst_20977);
var inst_20979 = cljs.core.async.close_BANG_.call(null,inst_20978);
var inst_20980 = (inst_20972 + (1));
var tmp21058 = inst_20971;
var tmp21059 = inst_20969;
var tmp21060 = inst_20970;
var inst_20969__$1 = tmp21059;
var inst_20970__$1 = tmp21060;
var inst_20971__$1 = tmp21058;
var inst_20972__$1 = inst_20980;
var state_21028__$1 = (function (){var statearr_21064 = state_21028;
(statearr_21064[(17)] = inst_20979);

(statearr_21064[(13)] = inst_20971__$1);

(statearr_21064[(14)] = inst_20972__$1);

(statearr_21064[(15)] = inst_20969__$1);

(statearr_21064[(16)] = inst_20970__$1);

return statearr_21064;
})();
var statearr_21065_21101 = state_21028__$1;
(statearr_21065_21101[(2)] = null);

(statearr_21065_21101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (18))){
var inst_20998 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21066_21102 = state_21028__$1;
(statearr_21066_21102[(2)] = inst_20998);

(statearr_21066_21102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (8))){
var inst_20971 = (state_21028[(13)]);
var inst_20972 = (state_21028[(14)]);
var inst_20974 = (inst_20972 < inst_20971);
var inst_20975 = inst_20974;
var state_21028__$1 = state_21028;
if(cljs.core.truth_(inst_20975)){
var statearr_21067_21103 = state_21028__$1;
(statearr_21067_21103[(1)] = (10));

} else {
var statearr_21068_21104 = state_21028__$1;
(statearr_21068_21104[(1)] = (11));

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
});})(c__6670__auto___21076,mults,ensure_mult,p))
;
return ((function (switch__6655__auto__,c__6670__auto___21076,mults,ensure_mult,p){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_21072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21072[(0)] = state_machine__6656__auto__);

(statearr_21072[(1)] = (1));

return statearr_21072;
});
var state_machine__6656__auto____1 = (function (state_21028){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_21028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e21073){if((e21073 instanceof Object)){
var ex__6659__auto__ = e21073;
var statearr_21074_21105 = state_21028;
(statearr_21074_21105[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21106 = state_21028;
state_21028 = G__21106;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_21028){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_21028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___21076,mults,ensure_mult,p))
})();
var state__6672__auto__ = (function (){var statearr_21075 = f__6671__auto__.call(null);
(statearr_21075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___21076);

return statearr_21075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___21076,mults,ensure_mult,p))
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
var c__6670__auto___21243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___21243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___21243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21213){
var state_val_21214 = (state_21213[(1)]);
if((state_val_21214 === (7))){
var state_21213__$1 = state_21213;
var statearr_21215_21244 = state_21213__$1;
(statearr_21215_21244[(2)] = null);

(statearr_21215_21244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (1))){
var state_21213__$1 = state_21213;
var statearr_21216_21245 = state_21213__$1;
(statearr_21216_21245[(2)] = null);

(statearr_21216_21245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (4))){
var inst_21177 = (state_21213[(7)]);
var inst_21179 = (inst_21177 < cnt);
var state_21213__$1 = state_21213;
if(cljs.core.truth_(inst_21179)){
var statearr_21217_21246 = state_21213__$1;
(statearr_21217_21246[(1)] = (6));

} else {
var statearr_21218_21247 = state_21213__$1;
(statearr_21218_21247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (15))){
var inst_21209 = (state_21213[(2)]);
var state_21213__$1 = state_21213;
var statearr_21219_21248 = state_21213__$1;
(statearr_21219_21248[(2)] = inst_21209);

(statearr_21219_21248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (13))){
var inst_21202 = cljs.core.async.close_BANG_.call(null,out);
var state_21213__$1 = state_21213;
var statearr_21220_21249 = state_21213__$1;
(statearr_21220_21249[(2)] = inst_21202);

(statearr_21220_21249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (6))){
var state_21213__$1 = state_21213;
var statearr_21221_21250 = state_21213__$1;
(statearr_21221_21250[(2)] = null);

(statearr_21221_21250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (3))){
var inst_21211 = (state_21213[(2)]);
var state_21213__$1 = state_21213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21213__$1,inst_21211);
} else {
if((state_val_21214 === (12))){
var inst_21199 = (state_21213[(8)]);
var inst_21199__$1 = (state_21213[(2)]);
var inst_21200 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21199__$1);
var state_21213__$1 = (function (){var statearr_21222 = state_21213;
(statearr_21222[(8)] = inst_21199__$1);

return statearr_21222;
})();
if(cljs.core.truth_(inst_21200)){
var statearr_21223_21251 = state_21213__$1;
(statearr_21223_21251[(1)] = (13));

} else {
var statearr_21224_21252 = state_21213__$1;
(statearr_21224_21252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (2))){
var inst_21176 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21177 = (0);
var state_21213__$1 = (function (){var statearr_21225 = state_21213;
(statearr_21225[(9)] = inst_21176);

(statearr_21225[(7)] = inst_21177);

return statearr_21225;
})();
var statearr_21226_21253 = state_21213__$1;
(statearr_21226_21253[(2)] = null);

(statearr_21226_21253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (11))){
var inst_21177 = (state_21213[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21213,(10),Object,null,(9));
var inst_21186 = chs__$1.call(null,inst_21177);
var inst_21187 = done.call(null,inst_21177);
var inst_21188 = cljs.core.async.take_BANG_.call(null,inst_21186,inst_21187);
var state_21213__$1 = state_21213;
var statearr_21227_21254 = state_21213__$1;
(statearr_21227_21254[(2)] = inst_21188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (9))){
var inst_21177 = (state_21213[(7)]);
var inst_21190 = (state_21213[(2)]);
var inst_21191 = (inst_21177 + (1));
var inst_21177__$1 = inst_21191;
var state_21213__$1 = (function (){var statearr_21228 = state_21213;
(statearr_21228[(10)] = inst_21190);

(statearr_21228[(7)] = inst_21177__$1);

return statearr_21228;
})();
var statearr_21229_21255 = state_21213__$1;
(statearr_21229_21255[(2)] = null);

(statearr_21229_21255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (5))){
var inst_21197 = (state_21213[(2)]);
var state_21213__$1 = (function (){var statearr_21230 = state_21213;
(statearr_21230[(11)] = inst_21197);

return statearr_21230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21213__$1,(12),dchan);
} else {
if((state_val_21214 === (14))){
var inst_21199 = (state_21213[(8)]);
var inst_21204 = cljs.core.apply.call(null,f,inst_21199);
var state_21213__$1 = state_21213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21213__$1,(16),out,inst_21204);
} else {
if((state_val_21214 === (16))){
var inst_21206 = (state_21213[(2)]);
var state_21213__$1 = (function (){var statearr_21231 = state_21213;
(statearr_21231[(12)] = inst_21206);

return statearr_21231;
})();
var statearr_21232_21256 = state_21213__$1;
(statearr_21232_21256[(2)] = null);

(statearr_21232_21256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (10))){
var inst_21181 = (state_21213[(2)]);
var inst_21182 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21213__$1 = (function (){var statearr_21233 = state_21213;
(statearr_21233[(13)] = inst_21181);

return statearr_21233;
})();
var statearr_21234_21257 = state_21213__$1;
(statearr_21234_21257[(2)] = inst_21182);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (8))){
var inst_21195 = (state_21213[(2)]);
var state_21213__$1 = state_21213;
var statearr_21235_21258 = state_21213__$1;
(statearr_21235_21258[(2)] = inst_21195);

(statearr_21235_21258[(1)] = (5));


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
});})(c__6670__auto___21243,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6655__auto__,c__6670__auto___21243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_21239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21239[(0)] = state_machine__6656__auto__);

(statearr_21239[(1)] = (1));

return statearr_21239;
});
var state_machine__6656__auto____1 = (function (state_21213){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_21213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e21240){if((e21240 instanceof Object)){
var ex__6659__auto__ = e21240;
var statearr_21241_21259 = state_21213;
(statearr_21241_21259[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21260 = state_21213;
state_21213 = G__21260;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_21213){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_21213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___21243,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6672__auto__ = (function (){var statearr_21242 = f__6671__auto__.call(null);
(statearr_21242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___21243);

return statearr_21242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___21243,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6670__auto___21368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___21368,out){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___21368,out){
return (function (state_21344){
var state_val_21345 = (state_21344[(1)]);
if((state_val_21345 === (7))){
var inst_21323 = (state_21344[(7)]);
var inst_21324 = (state_21344[(8)]);
var inst_21323__$1 = (state_21344[(2)]);
var inst_21324__$1 = cljs.core.nth.call(null,inst_21323__$1,(0),null);
var inst_21325 = cljs.core.nth.call(null,inst_21323__$1,(1),null);
var inst_21326 = (inst_21324__$1 == null);
var state_21344__$1 = (function (){var statearr_21346 = state_21344;
(statearr_21346[(7)] = inst_21323__$1);

(statearr_21346[(9)] = inst_21325);

(statearr_21346[(8)] = inst_21324__$1);

return statearr_21346;
})();
if(cljs.core.truth_(inst_21326)){
var statearr_21347_21369 = state_21344__$1;
(statearr_21347_21369[(1)] = (8));

} else {
var statearr_21348_21370 = state_21344__$1;
(statearr_21348_21370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21345 === (1))){
var inst_21315 = cljs.core.vec.call(null,chs);
var inst_21316 = inst_21315;
var state_21344__$1 = (function (){var statearr_21349 = state_21344;
(statearr_21349[(10)] = inst_21316);

return statearr_21349;
})();
var statearr_21350_21371 = state_21344__$1;
(statearr_21350_21371[(2)] = null);

(statearr_21350_21371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21345 === (4))){
var inst_21316 = (state_21344[(10)]);
var state_21344__$1 = state_21344;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21344__$1,(7),inst_21316);
} else {
if((state_val_21345 === (6))){
var inst_21340 = (state_21344[(2)]);
var state_21344__$1 = state_21344;
var statearr_21351_21372 = state_21344__$1;
(statearr_21351_21372[(2)] = inst_21340);

(statearr_21351_21372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21345 === (3))){
var inst_21342 = (state_21344[(2)]);
var state_21344__$1 = state_21344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21344__$1,inst_21342);
} else {
if((state_val_21345 === (2))){
var inst_21316 = (state_21344[(10)]);
var inst_21318 = cljs.core.count.call(null,inst_21316);
var inst_21319 = (inst_21318 > (0));
var state_21344__$1 = state_21344;
if(cljs.core.truth_(inst_21319)){
var statearr_21353_21373 = state_21344__$1;
(statearr_21353_21373[(1)] = (4));

} else {
var statearr_21354_21374 = state_21344__$1;
(statearr_21354_21374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21345 === (11))){
var inst_21316 = (state_21344[(10)]);
var inst_21333 = (state_21344[(2)]);
var tmp21352 = inst_21316;
var inst_21316__$1 = tmp21352;
var state_21344__$1 = (function (){var statearr_21355 = state_21344;
(statearr_21355[(10)] = inst_21316__$1);

(statearr_21355[(11)] = inst_21333);

return statearr_21355;
})();
var statearr_21356_21375 = state_21344__$1;
(statearr_21356_21375[(2)] = null);

(statearr_21356_21375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21345 === (9))){
var inst_21324 = (state_21344[(8)]);
var state_21344__$1 = state_21344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21344__$1,(11),out,inst_21324);
} else {
if((state_val_21345 === (5))){
var inst_21338 = cljs.core.async.close_BANG_.call(null,out);
var state_21344__$1 = state_21344;
var statearr_21357_21376 = state_21344__$1;
(statearr_21357_21376[(2)] = inst_21338);

(statearr_21357_21376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21345 === (10))){
var inst_21336 = (state_21344[(2)]);
var state_21344__$1 = state_21344;
var statearr_21358_21377 = state_21344__$1;
(statearr_21358_21377[(2)] = inst_21336);

(statearr_21358_21377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21345 === (8))){
var inst_21323 = (state_21344[(7)]);
var inst_21316 = (state_21344[(10)]);
var inst_21325 = (state_21344[(9)]);
var inst_21324 = (state_21344[(8)]);
var inst_21328 = (function (){var c = inst_21325;
var v = inst_21324;
var vec__21321 = inst_21323;
var cs = inst_21316;
return ((function (c,v,vec__21321,cs,inst_21323,inst_21316,inst_21325,inst_21324,state_val_21345,c__6670__auto___21368,out){
return (function (p1__21261_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21261_SHARP_);
});
;})(c,v,vec__21321,cs,inst_21323,inst_21316,inst_21325,inst_21324,state_val_21345,c__6670__auto___21368,out))
})();
var inst_21329 = cljs.core.filterv.call(null,inst_21328,inst_21316);
var inst_21316__$1 = inst_21329;
var state_21344__$1 = (function (){var statearr_21359 = state_21344;
(statearr_21359[(10)] = inst_21316__$1);

return statearr_21359;
})();
var statearr_21360_21378 = state_21344__$1;
(statearr_21360_21378[(2)] = null);

(statearr_21360_21378[(1)] = (2));


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
});})(c__6670__auto___21368,out))
;
return ((function (switch__6655__auto__,c__6670__auto___21368,out){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_21364 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21364[(0)] = state_machine__6656__auto__);

(statearr_21364[(1)] = (1));

return statearr_21364;
});
var state_machine__6656__auto____1 = (function (state_21344){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_21344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e21365){if((e21365 instanceof Object)){
var ex__6659__auto__ = e21365;
var statearr_21366_21379 = state_21344;
(statearr_21366_21379[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21380 = state_21344;
state_21344 = G__21380;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_21344){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_21344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___21368,out))
})();
var state__6672__auto__ = (function (){var statearr_21367 = f__6671__auto__.call(null);
(statearr_21367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___21368);

return statearr_21367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___21368,out))
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
var c__6670__auto___21473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___21473,out){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___21473,out){
return (function (state_21450){
var state_val_21451 = (state_21450[(1)]);
if((state_val_21451 === (7))){
var inst_21432 = (state_21450[(7)]);
var inst_21432__$1 = (state_21450[(2)]);
var inst_21433 = (inst_21432__$1 == null);
var inst_21434 = cljs.core.not.call(null,inst_21433);
var state_21450__$1 = (function (){var statearr_21452 = state_21450;
(statearr_21452[(7)] = inst_21432__$1);

return statearr_21452;
})();
if(inst_21434){
var statearr_21453_21474 = state_21450__$1;
(statearr_21453_21474[(1)] = (8));

} else {
var statearr_21454_21475 = state_21450__$1;
(statearr_21454_21475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (1))){
var inst_21427 = (0);
var state_21450__$1 = (function (){var statearr_21455 = state_21450;
(statearr_21455[(8)] = inst_21427);

return statearr_21455;
})();
var statearr_21456_21476 = state_21450__$1;
(statearr_21456_21476[(2)] = null);

(statearr_21456_21476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (4))){
var state_21450__$1 = state_21450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21450__$1,(7),ch);
} else {
if((state_val_21451 === (6))){
var inst_21445 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
var statearr_21457_21477 = state_21450__$1;
(statearr_21457_21477[(2)] = inst_21445);

(statearr_21457_21477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (3))){
var inst_21447 = (state_21450[(2)]);
var inst_21448 = cljs.core.async.close_BANG_.call(null,out);
var state_21450__$1 = (function (){var statearr_21458 = state_21450;
(statearr_21458[(9)] = inst_21447);

return statearr_21458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21450__$1,inst_21448);
} else {
if((state_val_21451 === (2))){
var inst_21427 = (state_21450[(8)]);
var inst_21429 = (inst_21427 < n);
var state_21450__$1 = state_21450;
if(cljs.core.truth_(inst_21429)){
var statearr_21459_21478 = state_21450__$1;
(statearr_21459_21478[(1)] = (4));

} else {
var statearr_21460_21479 = state_21450__$1;
(statearr_21460_21479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (11))){
var inst_21427 = (state_21450[(8)]);
var inst_21437 = (state_21450[(2)]);
var inst_21438 = (inst_21427 + (1));
var inst_21427__$1 = inst_21438;
var state_21450__$1 = (function (){var statearr_21461 = state_21450;
(statearr_21461[(10)] = inst_21437);

(statearr_21461[(8)] = inst_21427__$1);

return statearr_21461;
})();
var statearr_21462_21480 = state_21450__$1;
(statearr_21462_21480[(2)] = null);

(statearr_21462_21480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (9))){
var state_21450__$1 = state_21450;
var statearr_21463_21481 = state_21450__$1;
(statearr_21463_21481[(2)] = null);

(statearr_21463_21481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (5))){
var state_21450__$1 = state_21450;
var statearr_21464_21482 = state_21450__$1;
(statearr_21464_21482[(2)] = null);

(statearr_21464_21482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (10))){
var inst_21442 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
var statearr_21465_21483 = state_21450__$1;
(statearr_21465_21483[(2)] = inst_21442);

(statearr_21465_21483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (8))){
var inst_21432 = (state_21450[(7)]);
var state_21450__$1 = state_21450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21450__$1,(11),out,inst_21432);
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
});})(c__6670__auto___21473,out))
;
return ((function (switch__6655__auto__,c__6670__auto___21473,out){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_21469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21469[(0)] = state_machine__6656__auto__);

(statearr_21469[(1)] = (1));

return statearr_21469;
});
var state_machine__6656__auto____1 = (function (state_21450){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_21450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e21470){if((e21470 instanceof Object)){
var ex__6659__auto__ = e21470;
var statearr_21471_21484 = state_21450;
(statearr_21471_21484[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21485 = state_21450;
state_21450 = G__21485;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_21450){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_21450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___21473,out))
})();
var state__6672__auto__ = (function (){var statearr_21472 = f__6671__auto__.call(null);
(statearr_21472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___21473);

return statearr_21472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___21473,out))
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
if(typeof cljs.core.async.t21493 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21493 = (function (ch,f,map_LT_,meta21494){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21494 = meta21494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21493.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21493.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21496 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21496 = (function (fn1,_,meta21494,map_LT_,f,ch,meta21497){
this.fn1 = fn1;
this._ = _;
this.meta21494 = meta21494;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21497 = meta21497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21496.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21486_SHARP_){
return f1.call(null,(((p1__21486_SHARP_ == null))?null:self__.f.call(null,p1__21486_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21498){
var self__ = this;
var _21498__$1 = this;
return self__.meta21497;
});})(___$1))
;

cljs.core.async.t21496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21498,meta21497__$1){
var self__ = this;
var _21498__$1 = this;
return (new cljs.core.async.t21496(self__.fn1,self__._,self__.meta21494,self__.map_LT_,self__.f,self__.ch,meta21497__$1));
});})(___$1))
;

cljs.core.async.t21496.cljs$lang$type = true;

cljs.core.async.t21496.cljs$lang$ctorStr = "cljs.core.async/t21496";

cljs.core.async.t21496.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21496");
});})(___$1))
;

cljs.core.async.__GT_t21496 = ((function (___$1){
return (function __GT_t21496(fn1__$1,___$2,meta21494__$1,map_LT___$1,f__$1,ch__$1,meta21497){
return (new cljs.core.async.t21496(fn1__$1,___$2,meta21494__$1,map_LT___$1,f__$1,ch__$1,meta21497));
});})(___$1))
;

}

return (new cljs.core.async.t21496(fn1,___$1,self__.meta21494,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t21493.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21495){
var self__ = this;
var _21495__$1 = this;
return self__.meta21494;
});

cljs.core.async.t21493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21495,meta21494__$1){
var self__ = this;
var _21495__$1 = this;
return (new cljs.core.async.t21493(self__.ch,self__.f,self__.map_LT_,meta21494__$1));
});

cljs.core.async.t21493.cljs$lang$type = true;

cljs.core.async.t21493.cljs$lang$ctorStr = "cljs.core.async/t21493";

cljs.core.async.t21493.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21493");
});

cljs.core.async.__GT_t21493 = (function __GT_t21493(ch__$1,f__$1,map_LT___$1,meta21494){
return (new cljs.core.async.t21493(ch__$1,f__$1,map_LT___$1,meta21494));
});

}

return (new cljs.core.async.t21493(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21502 = (function (ch,f,map_GT_,meta21503){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21503 = meta21503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21502.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21502.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21502.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21504){
var self__ = this;
var _21504__$1 = this;
return self__.meta21503;
});

cljs.core.async.t21502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21504,meta21503__$1){
var self__ = this;
var _21504__$1 = this;
return (new cljs.core.async.t21502(self__.ch,self__.f,self__.map_GT_,meta21503__$1));
});

cljs.core.async.t21502.cljs$lang$type = true;

cljs.core.async.t21502.cljs$lang$ctorStr = "cljs.core.async/t21502";

cljs.core.async.t21502.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21502");
});

cljs.core.async.__GT_t21502 = (function __GT_t21502(ch__$1,f__$1,map_GT___$1,meta21503){
return (new cljs.core.async.t21502(ch__$1,f__$1,map_GT___$1,meta21503));
});

}

return (new cljs.core.async.t21502(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21508 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21508 = (function (ch,p,filter_GT_,meta21509){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21509 = meta21509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21508.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21508.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21508.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21508.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21510){
var self__ = this;
var _21510__$1 = this;
return self__.meta21509;
});

cljs.core.async.t21508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21510,meta21509__$1){
var self__ = this;
var _21510__$1 = this;
return (new cljs.core.async.t21508(self__.ch,self__.p,self__.filter_GT_,meta21509__$1));
});

cljs.core.async.t21508.cljs$lang$type = true;

cljs.core.async.t21508.cljs$lang$ctorStr = "cljs.core.async/t21508";

cljs.core.async.t21508.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21508");
});

cljs.core.async.__GT_t21508 = (function __GT_t21508(ch__$1,p__$1,filter_GT___$1,meta21509){
return (new cljs.core.async.t21508(ch__$1,p__$1,filter_GT___$1,meta21509));
});

}

return (new cljs.core.async.t21508(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/clojure/logging-dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6670__auto___21593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___21593,out){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___21593,out){
return (function (state_21572){
var state_val_21573 = (state_21572[(1)]);
if((state_val_21573 === (7))){
var inst_21568 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
var statearr_21574_21594 = state_21572__$1;
(statearr_21574_21594[(2)] = inst_21568);

(statearr_21574_21594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (1))){
var state_21572__$1 = state_21572;
var statearr_21575_21595 = state_21572__$1;
(statearr_21575_21595[(2)] = null);

(statearr_21575_21595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (4))){
var inst_21554 = (state_21572[(7)]);
var inst_21554__$1 = (state_21572[(2)]);
var inst_21555 = (inst_21554__$1 == null);
var state_21572__$1 = (function (){var statearr_21576 = state_21572;
(statearr_21576[(7)] = inst_21554__$1);

return statearr_21576;
})();
if(cljs.core.truth_(inst_21555)){
var statearr_21577_21596 = state_21572__$1;
(statearr_21577_21596[(1)] = (5));

} else {
var statearr_21578_21597 = state_21572__$1;
(statearr_21578_21597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (6))){
var inst_21554 = (state_21572[(7)]);
var inst_21559 = p.call(null,inst_21554);
var state_21572__$1 = state_21572;
if(cljs.core.truth_(inst_21559)){
var statearr_21579_21598 = state_21572__$1;
(statearr_21579_21598[(1)] = (8));

} else {
var statearr_21580_21599 = state_21572__$1;
(statearr_21580_21599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (3))){
var inst_21570 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21572__$1,inst_21570);
} else {
if((state_val_21573 === (2))){
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21572__$1,(4),ch);
} else {
if((state_val_21573 === (11))){
var inst_21562 = (state_21572[(2)]);
var state_21572__$1 = state_21572;
var statearr_21581_21600 = state_21572__$1;
(statearr_21581_21600[(2)] = inst_21562);

(statearr_21581_21600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (9))){
var state_21572__$1 = state_21572;
var statearr_21582_21601 = state_21572__$1;
(statearr_21582_21601[(2)] = null);

(statearr_21582_21601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (5))){
var inst_21557 = cljs.core.async.close_BANG_.call(null,out);
var state_21572__$1 = state_21572;
var statearr_21583_21602 = state_21572__$1;
(statearr_21583_21602[(2)] = inst_21557);

(statearr_21583_21602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (10))){
var inst_21565 = (state_21572[(2)]);
var state_21572__$1 = (function (){var statearr_21584 = state_21572;
(statearr_21584[(8)] = inst_21565);

return statearr_21584;
})();
var statearr_21585_21603 = state_21572__$1;
(statearr_21585_21603[(2)] = null);

(statearr_21585_21603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21573 === (8))){
var inst_21554 = (state_21572[(7)]);
var state_21572__$1 = state_21572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21572__$1,(11),out,inst_21554);
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
});})(c__6670__auto___21593,out))
;
return ((function (switch__6655__auto__,c__6670__auto___21593,out){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_21589 = [null,null,null,null,null,null,null,null,null];
(statearr_21589[(0)] = state_machine__6656__auto__);

(statearr_21589[(1)] = (1));

return statearr_21589;
});
var state_machine__6656__auto____1 = (function (state_21572){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_21572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e21590){if((e21590 instanceof Object)){
var ex__6659__auto__ = e21590;
var statearr_21591_21604 = state_21572;
(statearr_21591_21604[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21605 = state_21572;
state_21572 = G__21605;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_21572){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_21572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___21593,out))
})();
var state__6672__auto__ = (function (){var statearr_21592 = f__6671__auto__.call(null);
(statearr_21592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___21593);

return statearr_21592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___21593,out))
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
var c__6670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto__){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto__){
return (function (state_21771){
var state_val_21772 = (state_21771[(1)]);
if((state_val_21772 === (7))){
var inst_21767 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21773_21814 = state_21771__$1;
(statearr_21773_21814[(2)] = inst_21767);

(statearr_21773_21814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (20))){
var inst_21737 = (state_21771[(7)]);
var inst_21748 = (state_21771[(2)]);
var inst_21749 = cljs.core.next.call(null,inst_21737);
var inst_21723 = inst_21749;
var inst_21724 = null;
var inst_21725 = (0);
var inst_21726 = (0);
var state_21771__$1 = (function (){var statearr_21774 = state_21771;
(statearr_21774[(8)] = inst_21724);

(statearr_21774[(9)] = inst_21726);

(statearr_21774[(10)] = inst_21723);

(statearr_21774[(11)] = inst_21725);

(statearr_21774[(12)] = inst_21748);

return statearr_21774;
})();
var statearr_21775_21815 = state_21771__$1;
(statearr_21775_21815[(2)] = null);

(statearr_21775_21815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (1))){
var state_21771__$1 = state_21771;
var statearr_21776_21816 = state_21771__$1;
(statearr_21776_21816[(2)] = null);

(statearr_21776_21816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (4))){
var inst_21712 = (state_21771[(13)]);
var inst_21712__$1 = (state_21771[(2)]);
var inst_21713 = (inst_21712__$1 == null);
var state_21771__$1 = (function (){var statearr_21777 = state_21771;
(statearr_21777[(13)] = inst_21712__$1);

return statearr_21777;
})();
if(cljs.core.truth_(inst_21713)){
var statearr_21778_21817 = state_21771__$1;
(statearr_21778_21817[(1)] = (5));

} else {
var statearr_21779_21818 = state_21771__$1;
(statearr_21779_21818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (15))){
var state_21771__$1 = state_21771;
var statearr_21783_21819 = state_21771__$1;
(statearr_21783_21819[(2)] = null);

(statearr_21783_21819[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (21))){
var state_21771__$1 = state_21771;
var statearr_21784_21820 = state_21771__$1;
(statearr_21784_21820[(2)] = null);

(statearr_21784_21820[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (13))){
var inst_21724 = (state_21771[(8)]);
var inst_21726 = (state_21771[(9)]);
var inst_21723 = (state_21771[(10)]);
var inst_21725 = (state_21771[(11)]);
var inst_21733 = (state_21771[(2)]);
var inst_21734 = (inst_21726 + (1));
var tmp21780 = inst_21724;
var tmp21781 = inst_21723;
var tmp21782 = inst_21725;
var inst_21723__$1 = tmp21781;
var inst_21724__$1 = tmp21780;
var inst_21725__$1 = tmp21782;
var inst_21726__$1 = inst_21734;
var state_21771__$1 = (function (){var statearr_21785 = state_21771;
(statearr_21785[(8)] = inst_21724__$1);

(statearr_21785[(9)] = inst_21726__$1);

(statearr_21785[(10)] = inst_21723__$1);

(statearr_21785[(14)] = inst_21733);

(statearr_21785[(11)] = inst_21725__$1);

return statearr_21785;
})();
var statearr_21786_21821 = state_21771__$1;
(statearr_21786_21821[(2)] = null);

(statearr_21786_21821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (22))){
var state_21771__$1 = state_21771;
var statearr_21787_21822 = state_21771__$1;
(statearr_21787_21822[(2)] = null);

(statearr_21787_21822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (6))){
var inst_21712 = (state_21771[(13)]);
var inst_21721 = f.call(null,inst_21712);
var inst_21722 = cljs.core.seq.call(null,inst_21721);
var inst_21723 = inst_21722;
var inst_21724 = null;
var inst_21725 = (0);
var inst_21726 = (0);
var state_21771__$1 = (function (){var statearr_21788 = state_21771;
(statearr_21788[(8)] = inst_21724);

(statearr_21788[(9)] = inst_21726);

(statearr_21788[(10)] = inst_21723);

(statearr_21788[(11)] = inst_21725);

return statearr_21788;
})();
var statearr_21789_21823 = state_21771__$1;
(statearr_21789_21823[(2)] = null);

(statearr_21789_21823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (17))){
var inst_21737 = (state_21771[(7)]);
var inst_21741 = cljs.core.chunk_first.call(null,inst_21737);
var inst_21742 = cljs.core.chunk_rest.call(null,inst_21737);
var inst_21743 = cljs.core.count.call(null,inst_21741);
var inst_21723 = inst_21742;
var inst_21724 = inst_21741;
var inst_21725 = inst_21743;
var inst_21726 = (0);
var state_21771__$1 = (function (){var statearr_21790 = state_21771;
(statearr_21790[(8)] = inst_21724);

(statearr_21790[(9)] = inst_21726);

(statearr_21790[(10)] = inst_21723);

(statearr_21790[(11)] = inst_21725);

return statearr_21790;
})();
var statearr_21791_21824 = state_21771__$1;
(statearr_21791_21824[(2)] = null);

(statearr_21791_21824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (3))){
var inst_21769 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21771__$1,inst_21769);
} else {
if((state_val_21772 === (12))){
var inst_21757 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21792_21825 = state_21771__$1;
(statearr_21792_21825[(2)] = inst_21757);

(statearr_21792_21825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (2))){
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21771__$1,(4),in$);
} else {
if((state_val_21772 === (23))){
var inst_21765 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21793_21826 = state_21771__$1;
(statearr_21793_21826[(2)] = inst_21765);

(statearr_21793_21826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (19))){
var inst_21752 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21794_21827 = state_21771__$1;
(statearr_21794_21827[(2)] = inst_21752);

(statearr_21794_21827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (11))){
var inst_21723 = (state_21771[(10)]);
var inst_21737 = (state_21771[(7)]);
var inst_21737__$1 = cljs.core.seq.call(null,inst_21723);
var state_21771__$1 = (function (){var statearr_21795 = state_21771;
(statearr_21795[(7)] = inst_21737__$1);

return statearr_21795;
})();
if(inst_21737__$1){
var statearr_21796_21828 = state_21771__$1;
(statearr_21796_21828[(1)] = (14));

} else {
var statearr_21797_21829 = state_21771__$1;
(statearr_21797_21829[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (9))){
var inst_21759 = (state_21771[(2)]);
var inst_21760 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21771__$1 = (function (){var statearr_21798 = state_21771;
(statearr_21798[(15)] = inst_21759);

return statearr_21798;
})();
if(cljs.core.truth_(inst_21760)){
var statearr_21799_21830 = state_21771__$1;
(statearr_21799_21830[(1)] = (21));

} else {
var statearr_21800_21831 = state_21771__$1;
(statearr_21800_21831[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (5))){
var inst_21715 = cljs.core.async.close_BANG_.call(null,out);
var state_21771__$1 = state_21771;
var statearr_21801_21832 = state_21771__$1;
(statearr_21801_21832[(2)] = inst_21715);

(statearr_21801_21832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (14))){
var inst_21737 = (state_21771[(7)]);
var inst_21739 = cljs.core.chunked_seq_QMARK_.call(null,inst_21737);
var state_21771__$1 = state_21771;
if(inst_21739){
var statearr_21802_21833 = state_21771__$1;
(statearr_21802_21833[(1)] = (17));

} else {
var statearr_21803_21834 = state_21771__$1;
(statearr_21803_21834[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (16))){
var inst_21755 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21804_21835 = state_21771__$1;
(statearr_21804_21835[(2)] = inst_21755);

(statearr_21804_21835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (10))){
var inst_21724 = (state_21771[(8)]);
var inst_21726 = (state_21771[(9)]);
var inst_21731 = cljs.core._nth.call(null,inst_21724,inst_21726);
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21771__$1,(13),out,inst_21731);
} else {
if((state_val_21772 === (18))){
var inst_21737 = (state_21771[(7)]);
var inst_21746 = cljs.core.first.call(null,inst_21737);
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21771__$1,(20),out,inst_21746);
} else {
if((state_val_21772 === (8))){
var inst_21726 = (state_21771[(9)]);
var inst_21725 = (state_21771[(11)]);
var inst_21728 = (inst_21726 < inst_21725);
var inst_21729 = inst_21728;
var state_21771__$1 = state_21771;
if(cljs.core.truth_(inst_21729)){
var statearr_21805_21836 = state_21771__$1;
(statearr_21805_21836[(1)] = (10));

} else {
var statearr_21806_21837 = state_21771__$1;
(statearr_21806_21837[(1)] = (11));

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
});})(c__6670__auto__))
;
return ((function (switch__6655__auto__,c__6670__auto__){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_21810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21810[(0)] = state_machine__6656__auto__);

(statearr_21810[(1)] = (1));

return statearr_21810;
});
var state_machine__6656__auto____1 = (function (state_21771){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_21771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e21811){if((e21811 instanceof Object)){
var ex__6659__auto__ = e21811;
var statearr_21812_21838 = state_21771;
(statearr_21812_21838[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21839 = state_21771;
state_21771 = G__21839;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_21771){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_21771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto__))
})();
var state__6672__auto__ = (function (){var statearr_21813 = f__6671__auto__.call(null);
(statearr_21813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto__);

return statearr_21813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto__))
);

return c__6670__auto__;
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
var c__6670__auto___21936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___21936,out){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___21936,out){
return (function (state_21911){
var state_val_21912 = (state_21911[(1)]);
if((state_val_21912 === (7))){
var inst_21906 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21913_21937 = state_21911__$1;
(statearr_21913_21937[(2)] = inst_21906);

(statearr_21913_21937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (1))){
var inst_21888 = null;
var state_21911__$1 = (function (){var statearr_21914 = state_21911;
(statearr_21914[(7)] = inst_21888);

return statearr_21914;
})();
var statearr_21915_21938 = state_21911__$1;
(statearr_21915_21938[(2)] = null);

(statearr_21915_21938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (4))){
var inst_21891 = (state_21911[(8)]);
var inst_21891__$1 = (state_21911[(2)]);
var inst_21892 = (inst_21891__$1 == null);
var inst_21893 = cljs.core.not.call(null,inst_21892);
var state_21911__$1 = (function (){var statearr_21916 = state_21911;
(statearr_21916[(8)] = inst_21891__$1);

return statearr_21916;
})();
if(inst_21893){
var statearr_21917_21939 = state_21911__$1;
(statearr_21917_21939[(1)] = (5));

} else {
var statearr_21918_21940 = state_21911__$1;
(statearr_21918_21940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (6))){
var state_21911__$1 = state_21911;
var statearr_21919_21941 = state_21911__$1;
(statearr_21919_21941[(2)] = null);

(statearr_21919_21941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (3))){
var inst_21908 = (state_21911[(2)]);
var inst_21909 = cljs.core.async.close_BANG_.call(null,out);
var state_21911__$1 = (function (){var statearr_21920 = state_21911;
(statearr_21920[(9)] = inst_21908);

return statearr_21920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21911__$1,inst_21909);
} else {
if((state_val_21912 === (2))){
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21911__$1,(4),ch);
} else {
if((state_val_21912 === (11))){
var inst_21891 = (state_21911[(8)]);
var inst_21900 = (state_21911[(2)]);
var inst_21888 = inst_21891;
var state_21911__$1 = (function (){var statearr_21921 = state_21911;
(statearr_21921[(7)] = inst_21888);

(statearr_21921[(10)] = inst_21900);

return statearr_21921;
})();
var statearr_21922_21942 = state_21911__$1;
(statearr_21922_21942[(2)] = null);

(statearr_21922_21942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (9))){
var inst_21891 = (state_21911[(8)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21911__$1,(11),out,inst_21891);
} else {
if((state_val_21912 === (5))){
var inst_21888 = (state_21911[(7)]);
var inst_21891 = (state_21911[(8)]);
var inst_21895 = cljs.core._EQ_.call(null,inst_21891,inst_21888);
var state_21911__$1 = state_21911;
if(inst_21895){
var statearr_21924_21943 = state_21911__$1;
(statearr_21924_21943[(1)] = (8));

} else {
var statearr_21925_21944 = state_21911__$1;
(statearr_21925_21944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (10))){
var inst_21903 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21926_21945 = state_21911__$1;
(statearr_21926_21945[(2)] = inst_21903);

(statearr_21926_21945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (8))){
var inst_21888 = (state_21911[(7)]);
var tmp21923 = inst_21888;
var inst_21888__$1 = tmp21923;
var state_21911__$1 = (function (){var statearr_21927 = state_21911;
(statearr_21927[(7)] = inst_21888__$1);

return statearr_21927;
})();
var statearr_21928_21946 = state_21911__$1;
(statearr_21928_21946[(2)] = null);

(statearr_21928_21946[(1)] = (2));


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
});})(c__6670__auto___21936,out))
;
return ((function (switch__6655__auto__,c__6670__auto___21936,out){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_21932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21932[(0)] = state_machine__6656__auto__);

(statearr_21932[(1)] = (1));

return statearr_21932;
});
var state_machine__6656__auto____1 = (function (state_21911){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_21911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e21933){if((e21933 instanceof Object)){
var ex__6659__auto__ = e21933;
var statearr_21934_21947 = state_21911;
(statearr_21934_21947[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21948 = state_21911;
state_21911 = G__21948;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_21911){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_21911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___21936,out))
})();
var state__6672__auto__ = (function (){var statearr_21935 = f__6671__auto__.call(null);
(statearr_21935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___21936);

return statearr_21935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___21936,out))
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
var c__6670__auto___22083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___22083,out){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___22083,out){
return (function (state_22053){
var state_val_22054 = (state_22053[(1)]);
if((state_val_22054 === (7))){
var inst_22049 = (state_22053[(2)]);
var state_22053__$1 = state_22053;
var statearr_22055_22084 = state_22053__$1;
(statearr_22055_22084[(2)] = inst_22049);

(statearr_22055_22084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (1))){
var inst_22016 = (new Array(n));
var inst_22017 = inst_22016;
var inst_22018 = (0);
var state_22053__$1 = (function (){var statearr_22056 = state_22053;
(statearr_22056[(7)] = inst_22017);

(statearr_22056[(8)] = inst_22018);

return statearr_22056;
})();
var statearr_22057_22085 = state_22053__$1;
(statearr_22057_22085[(2)] = null);

(statearr_22057_22085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (4))){
var inst_22021 = (state_22053[(9)]);
var inst_22021__$1 = (state_22053[(2)]);
var inst_22022 = (inst_22021__$1 == null);
var inst_22023 = cljs.core.not.call(null,inst_22022);
var state_22053__$1 = (function (){var statearr_22058 = state_22053;
(statearr_22058[(9)] = inst_22021__$1);

return statearr_22058;
})();
if(inst_22023){
var statearr_22059_22086 = state_22053__$1;
(statearr_22059_22086[(1)] = (5));

} else {
var statearr_22060_22087 = state_22053__$1;
(statearr_22060_22087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (15))){
var inst_22043 = (state_22053[(2)]);
var state_22053__$1 = state_22053;
var statearr_22061_22088 = state_22053__$1;
(statearr_22061_22088[(2)] = inst_22043);

(statearr_22061_22088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (13))){
var state_22053__$1 = state_22053;
var statearr_22062_22089 = state_22053__$1;
(statearr_22062_22089[(2)] = null);

(statearr_22062_22089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (6))){
var inst_22018 = (state_22053[(8)]);
var inst_22039 = (inst_22018 > (0));
var state_22053__$1 = state_22053;
if(cljs.core.truth_(inst_22039)){
var statearr_22063_22090 = state_22053__$1;
(statearr_22063_22090[(1)] = (12));

} else {
var statearr_22064_22091 = state_22053__$1;
(statearr_22064_22091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (3))){
var inst_22051 = (state_22053[(2)]);
var state_22053__$1 = state_22053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22053__$1,inst_22051);
} else {
if((state_val_22054 === (12))){
var inst_22017 = (state_22053[(7)]);
var inst_22041 = cljs.core.vec.call(null,inst_22017);
var state_22053__$1 = state_22053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22053__$1,(15),out,inst_22041);
} else {
if((state_val_22054 === (2))){
var state_22053__$1 = state_22053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22053__$1,(4),ch);
} else {
if((state_val_22054 === (11))){
var inst_22033 = (state_22053[(2)]);
var inst_22034 = (new Array(n));
var inst_22017 = inst_22034;
var inst_22018 = (0);
var state_22053__$1 = (function (){var statearr_22065 = state_22053;
(statearr_22065[(7)] = inst_22017);

(statearr_22065[(10)] = inst_22033);

(statearr_22065[(8)] = inst_22018);

return statearr_22065;
})();
var statearr_22066_22092 = state_22053__$1;
(statearr_22066_22092[(2)] = null);

(statearr_22066_22092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (9))){
var inst_22017 = (state_22053[(7)]);
var inst_22031 = cljs.core.vec.call(null,inst_22017);
var state_22053__$1 = state_22053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22053__$1,(11),out,inst_22031);
} else {
if((state_val_22054 === (5))){
var inst_22017 = (state_22053[(7)]);
var inst_22018 = (state_22053[(8)]);
var inst_22026 = (state_22053[(11)]);
var inst_22021 = (state_22053[(9)]);
var inst_22025 = (inst_22017[inst_22018] = inst_22021);
var inst_22026__$1 = (inst_22018 + (1));
var inst_22027 = (inst_22026__$1 < n);
var state_22053__$1 = (function (){var statearr_22067 = state_22053;
(statearr_22067[(11)] = inst_22026__$1);

(statearr_22067[(12)] = inst_22025);

return statearr_22067;
})();
if(cljs.core.truth_(inst_22027)){
var statearr_22068_22093 = state_22053__$1;
(statearr_22068_22093[(1)] = (8));

} else {
var statearr_22069_22094 = state_22053__$1;
(statearr_22069_22094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (14))){
var inst_22046 = (state_22053[(2)]);
var inst_22047 = cljs.core.async.close_BANG_.call(null,out);
var state_22053__$1 = (function (){var statearr_22071 = state_22053;
(statearr_22071[(13)] = inst_22046);

return statearr_22071;
})();
var statearr_22072_22095 = state_22053__$1;
(statearr_22072_22095[(2)] = inst_22047);

(statearr_22072_22095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (10))){
var inst_22037 = (state_22053[(2)]);
var state_22053__$1 = state_22053;
var statearr_22073_22096 = state_22053__$1;
(statearr_22073_22096[(2)] = inst_22037);

(statearr_22073_22096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22054 === (8))){
var inst_22017 = (state_22053[(7)]);
var inst_22026 = (state_22053[(11)]);
var tmp22070 = inst_22017;
var inst_22017__$1 = tmp22070;
var inst_22018 = inst_22026;
var state_22053__$1 = (function (){var statearr_22074 = state_22053;
(statearr_22074[(7)] = inst_22017__$1);

(statearr_22074[(8)] = inst_22018);

return statearr_22074;
})();
var statearr_22075_22097 = state_22053__$1;
(statearr_22075_22097[(2)] = null);

(statearr_22075_22097[(1)] = (2));


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
});})(c__6670__auto___22083,out))
;
return ((function (switch__6655__auto__,c__6670__auto___22083,out){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_22079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22079[(0)] = state_machine__6656__auto__);

(statearr_22079[(1)] = (1));

return statearr_22079;
});
var state_machine__6656__auto____1 = (function (state_22053){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_22053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e22080){if((e22080 instanceof Object)){
var ex__6659__auto__ = e22080;
var statearr_22081_22098 = state_22053;
(statearr_22081_22098[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22099 = state_22053;
state_22053 = G__22099;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_22053){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_22053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___22083,out))
})();
var state__6672__auto__ = (function (){var statearr_22082 = f__6671__auto__.call(null);
(statearr_22082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___22083);

return statearr_22082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___22083,out))
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
var c__6670__auto___22242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6670__auto___22242,out){
return (function (){
var f__6671__auto__ = (function (){var switch__6655__auto__ = ((function (c__6670__auto___22242,out){
return (function (state_22212){
var state_val_22213 = (state_22212[(1)]);
if((state_val_22213 === (7))){
var inst_22208 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
var statearr_22214_22243 = state_22212__$1;
(statearr_22214_22243[(2)] = inst_22208);

(statearr_22214_22243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (1))){
var inst_22171 = [];
var inst_22172 = inst_22171;
var inst_22173 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22212__$1 = (function (){var statearr_22215 = state_22212;
(statearr_22215[(7)] = inst_22173);

(statearr_22215[(8)] = inst_22172);

return statearr_22215;
})();
var statearr_22216_22244 = state_22212__$1;
(statearr_22216_22244[(2)] = null);

(statearr_22216_22244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (4))){
var inst_22176 = (state_22212[(9)]);
var inst_22176__$1 = (state_22212[(2)]);
var inst_22177 = (inst_22176__$1 == null);
var inst_22178 = cljs.core.not.call(null,inst_22177);
var state_22212__$1 = (function (){var statearr_22217 = state_22212;
(statearr_22217[(9)] = inst_22176__$1);

return statearr_22217;
})();
if(inst_22178){
var statearr_22218_22245 = state_22212__$1;
(statearr_22218_22245[(1)] = (5));

} else {
var statearr_22219_22246 = state_22212__$1;
(statearr_22219_22246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (15))){
var inst_22202 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
var statearr_22220_22247 = state_22212__$1;
(statearr_22220_22247[(2)] = inst_22202);

(statearr_22220_22247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (13))){
var state_22212__$1 = state_22212;
var statearr_22221_22248 = state_22212__$1;
(statearr_22221_22248[(2)] = null);

(statearr_22221_22248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (6))){
var inst_22172 = (state_22212[(8)]);
var inst_22197 = inst_22172.length;
var inst_22198 = (inst_22197 > (0));
var state_22212__$1 = state_22212;
if(cljs.core.truth_(inst_22198)){
var statearr_22222_22249 = state_22212__$1;
(statearr_22222_22249[(1)] = (12));

} else {
var statearr_22223_22250 = state_22212__$1;
(statearr_22223_22250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (3))){
var inst_22210 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22212__$1,inst_22210);
} else {
if((state_val_22213 === (12))){
var inst_22172 = (state_22212[(8)]);
var inst_22200 = cljs.core.vec.call(null,inst_22172);
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22212__$1,(15),out,inst_22200);
} else {
if((state_val_22213 === (2))){
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22212__$1,(4),ch);
} else {
if((state_val_22213 === (11))){
var inst_22180 = (state_22212[(10)]);
var inst_22176 = (state_22212[(9)]);
var inst_22190 = (state_22212[(2)]);
var inst_22191 = [];
var inst_22192 = inst_22191.push(inst_22176);
var inst_22172 = inst_22191;
var inst_22173 = inst_22180;
var state_22212__$1 = (function (){var statearr_22224 = state_22212;
(statearr_22224[(11)] = inst_22190);

(statearr_22224[(7)] = inst_22173);

(statearr_22224[(12)] = inst_22192);

(statearr_22224[(8)] = inst_22172);

return statearr_22224;
})();
var statearr_22225_22251 = state_22212__$1;
(statearr_22225_22251[(2)] = null);

(statearr_22225_22251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (9))){
var inst_22172 = (state_22212[(8)]);
var inst_22188 = cljs.core.vec.call(null,inst_22172);
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22212__$1,(11),out,inst_22188);
} else {
if((state_val_22213 === (5))){
var inst_22180 = (state_22212[(10)]);
var inst_22173 = (state_22212[(7)]);
var inst_22176 = (state_22212[(9)]);
var inst_22180__$1 = f.call(null,inst_22176);
var inst_22181 = cljs.core._EQ_.call(null,inst_22180__$1,inst_22173);
var inst_22182 = cljs.core.keyword_identical_QMARK_.call(null,inst_22173,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22183 = (inst_22181) || (inst_22182);
var state_22212__$1 = (function (){var statearr_22226 = state_22212;
(statearr_22226[(10)] = inst_22180__$1);

return statearr_22226;
})();
if(cljs.core.truth_(inst_22183)){
var statearr_22227_22252 = state_22212__$1;
(statearr_22227_22252[(1)] = (8));

} else {
var statearr_22228_22253 = state_22212__$1;
(statearr_22228_22253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (14))){
var inst_22205 = (state_22212[(2)]);
var inst_22206 = cljs.core.async.close_BANG_.call(null,out);
var state_22212__$1 = (function (){var statearr_22230 = state_22212;
(statearr_22230[(13)] = inst_22205);

return statearr_22230;
})();
var statearr_22231_22254 = state_22212__$1;
(statearr_22231_22254[(2)] = inst_22206);

(statearr_22231_22254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (10))){
var inst_22195 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
var statearr_22232_22255 = state_22212__$1;
(statearr_22232_22255[(2)] = inst_22195);

(statearr_22232_22255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (8))){
var inst_22180 = (state_22212[(10)]);
var inst_22176 = (state_22212[(9)]);
var inst_22172 = (state_22212[(8)]);
var inst_22185 = inst_22172.push(inst_22176);
var tmp22229 = inst_22172;
var inst_22172__$1 = tmp22229;
var inst_22173 = inst_22180;
var state_22212__$1 = (function (){var statearr_22233 = state_22212;
(statearr_22233[(14)] = inst_22185);

(statearr_22233[(7)] = inst_22173);

(statearr_22233[(8)] = inst_22172__$1);

return statearr_22233;
})();
var statearr_22234_22256 = state_22212__$1;
(statearr_22234_22256[(2)] = null);

(statearr_22234_22256[(1)] = (2));


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
});})(c__6670__auto___22242,out))
;
return ((function (switch__6655__auto__,c__6670__auto___22242,out){
return (function() {
var state_machine__6656__auto__ = null;
var state_machine__6656__auto____0 = (function (){
var statearr_22238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22238[(0)] = state_machine__6656__auto__);

(statearr_22238[(1)] = (1));

return statearr_22238;
});
var state_machine__6656__auto____1 = (function (state_22212){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_22212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e22239){if((e22239 instanceof Object)){
var ex__6659__auto__ = e22239;
var statearr_22240_22257 = state_22212;
(statearr_22240_22257[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22258 = state_22212;
state_22212 = G__22258;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
state_machine__6656__auto__ = function(state_22212){
switch(arguments.length){
case 0:
return state_machine__6656__auto____0.call(this);
case 1:
return state_machine__6656__auto____1.call(this,state_22212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6656__auto____0;
state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6656__auto____1;
return state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6670__auto___22242,out))
})();
var state__6672__auto__ = (function (){var statearr_22241 = f__6671__auto__.call(null);
(statearr_22241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6670__auto___22242);

return statearr_22241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6672__auto__);
});})(c__6670__auto___22242,out))
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
