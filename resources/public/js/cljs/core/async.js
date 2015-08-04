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
if(typeof cljs.core.async.t19853 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19853 = (function (f,fn_handler,meta19854){
this.f = f;
this.fn_handler = fn_handler;
this.meta19854 = meta19854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19853.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19855){
var self__ = this;
var _19855__$1 = this;
return self__.meta19854;
});

cljs.core.async.t19853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19855,meta19854__$1){
var self__ = this;
var _19855__$1 = this;
return (new cljs.core.async.t19853(self__.f,self__.fn_handler,meta19854__$1));
});

cljs.core.async.t19853.cljs$lang$type = true;

cljs.core.async.t19853.cljs$lang$ctorStr = "cljs.core.async/t19853";

cljs.core.async.t19853.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19853");
});

cljs.core.async.__GT_t19853 = (function __GT_t19853(f__$1,fn_handler__$1,meta19854){
return (new cljs.core.async.t19853(f__$1,fn_handler__$1,meta19854));
});

}

return (new cljs.core.async.t19853(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__19857 = buff;
if(G__19857){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__19857.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19857.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19857);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19857);
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
var val_19858 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19858);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19858,ret){
return (function (){
return fn1.call(null,val_19858);
});})(val_19858,ret))
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
var n__4643__auto___19859 = n;
var x_19860 = (0);
while(true){
if((x_19860 < n__4643__auto___19859)){
(a[x_19860] = (0));

var G__19861 = (x_19860 + (1));
x_19860 = G__19861;
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

var G__19862 = (i + (1));
i = G__19862;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19866 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19866 = (function (flag,alt_flag,meta19867){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19867 = meta19867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19866.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19868){
var self__ = this;
var _19868__$1 = this;
return self__.meta19867;
});})(flag))
;

cljs.core.async.t19866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19868,meta19867__$1){
var self__ = this;
var _19868__$1 = this;
return (new cljs.core.async.t19866(self__.flag,self__.alt_flag,meta19867__$1));
});})(flag))
;

cljs.core.async.t19866.cljs$lang$type = true;

cljs.core.async.t19866.cljs$lang$ctorStr = "cljs.core.async/t19866";

cljs.core.async.t19866.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19866");
});})(flag))
;

cljs.core.async.__GT_t19866 = ((function (flag){
return (function __GT_t19866(flag__$1,alt_flag__$1,meta19867){
return (new cljs.core.async.t19866(flag__$1,alt_flag__$1,meta19867));
});})(flag))
;

}

return (new cljs.core.async.t19866(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19872 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19872 = (function (cb,flag,alt_handler,meta19873){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19873 = meta19873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19872.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19874){
var self__ = this;
var _19874__$1 = this;
return self__.meta19873;
});

cljs.core.async.t19872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19874,meta19873__$1){
var self__ = this;
var _19874__$1 = this;
return (new cljs.core.async.t19872(self__.cb,self__.flag,self__.alt_handler,meta19873__$1));
});

cljs.core.async.t19872.cljs$lang$type = true;

cljs.core.async.t19872.cljs$lang$ctorStr = "cljs.core.async/t19872";

cljs.core.async.t19872.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19872");
});

cljs.core.async.__GT_t19872 = (function __GT_t19872(cb__$1,flag__$1,alt_handler__$1,meta19873){
return (new cljs.core.async.t19872(cb__$1,flag__$1,alt_handler__$1,meta19873));
});

}

return (new cljs.core.async.t19872(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__19875_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19875_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19876_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19876_SHARP_,port], null));
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
var G__19877 = (i + (1));
i = G__19877;
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
var alts_BANG___delegate = function (ports,p__19878){
var map__19880 = p__19878;
var map__19880__$1 = ((cljs.core.seq_QMARK_.call(null,map__19880))?cljs.core.apply.call(null,cljs.core.hash_map,map__19880):map__19880);
var opts = map__19880__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19878 = null;
if (arguments.length > 1) {
  p__19878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19878);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19881){
var ports = cljs.core.first(arglist__19881);
var p__19878 = cljs.core.rest(arglist__19881);
return alts_BANG___delegate(ports,p__19878);
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
var c__6817__auto___19976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___19976){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___19976){
return (function (state_19952){
var state_val_19953 = (state_19952[(1)]);
if((state_val_19953 === (7))){
var inst_19948 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
var statearr_19954_19977 = state_19952__$1;
(statearr_19954_19977[(2)] = inst_19948);

(statearr_19954_19977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (1))){
var state_19952__$1 = state_19952;
var statearr_19955_19978 = state_19952__$1;
(statearr_19955_19978[(2)] = null);

(statearr_19955_19978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (4))){
var inst_19931 = (state_19952[(7)]);
var inst_19931__$1 = (state_19952[(2)]);
var inst_19932 = (inst_19931__$1 == null);
var state_19952__$1 = (function (){var statearr_19956 = state_19952;
(statearr_19956[(7)] = inst_19931__$1);

return statearr_19956;
})();
if(cljs.core.truth_(inst_19932)){
var statearr_19957_19979 = state_19952__$1;
(statearr_19957_19979[(1)] = (5));

} else {
var statearr_19958_19980 = state_19952__$1;
(statearr_19958_19980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (13))){
var state_19952__$1 = state_19952;
var statearr_19959_19981 = state_19952__$1;
(statearr_19959_19981[(2)] = null);

(statearr_19959_19981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (6))){
var inst_19931 = (state_19952[(7)]);
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19952__$1,(11),to,inst_19931);
} else {
if((state_val_19953 === (3))){
var inst_19950 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19952__$1,inst_19950);
} else {
if((state_val_19953 === (12))){
var state_19952__$1 = state_19952;
var statearr_19960_19982 = state_19952__$1;
(statearr_19960_19982[(2)] = null);

(statearr_19960_19982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (2))){
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19952__$1,(4),from);
} else {
if((state_val_19953 === (11))){
var inst_19941 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
if(cljs.core.truth_(inst_19941)){
var statearr_19961_19983 = state_19952__$1;
(statearr_19961_19983[(1)] = (12));

} else {
var statearr_19962_19984 = state_19952__$1;
(statearr_19962_19984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (9))){
var state_19952__$1 = state_19952;
var statearr_19963_19985 = state_19952__$1;
(statearr_19963_19985[(2)] = null);

(statearr_19963_19985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (5))){
var state_19952__$1 = state_19952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19964_19986 = state_19952__$1;
(statearr_19964_19986[(1)] = (8));

} else {
var statearr_19965_19987 = state_19952__$1;
(statearr_19965_19987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (14))){
var inst_19946 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
var statearr_19966_19988 = state_19952__$1;
(statearr_19966_19988[(2)] = inst_19946);

(statearr_19966_19988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (10))){
var inst_19938 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
var statearr_19967_19989 = state_19952__$1;
(statearr_19967_19989[(2)] = inst_19938);

(statearr_19967_19989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (8))){
var inst_19935 = cljs.core.async.close_BANG_.call(null,to);
var state_19952__$1 = state_19952;
var statearr_19968_19990 = state_19952__$1;
(statearr_19968_19990[(2)] = inst_19935);

(statearr_19968_19990[(1)] = (10));


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
});})(c__6817__auto___19976))
;
return ((function (switch__6761__auto__,c__6817__auto___19976){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_19972 = [null,null,null,null,null,null,null,null];
(statearr_19972[(0)] = state_machine__6762__auto__);

(statearr_19972[(1)] = (1));

return statearr_19972;
});
var state_machine__6762__auto____1 = (function (state_19952){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_19952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e19973){if((e19973 instanceof Object)){
var ex__6765__auto__ = e19973;
var statearr_19974_19991 = state_19952;
(statearr_19974_19991[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19992 = state_19952;
state_19952 = G__19992;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_19952){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_19952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___19976))
})();
var state__6819__auto__ = (function (){var statearr_19975 = f__6818__auto__.call(null);
(statearr_19975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___19976);

return statearr_19975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___19976))
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
return (function (p__20176){
var vec__20177 = p__20176;
var v = cljs.core.nth.call(null,vec__20177,(0),null);
var p = cljs.core.nth.call(null,vec__20177,(1),null);
var job = vec__20177;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6817__auto___20359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___20359,res,vec__20177,v,p,job,jobs,results){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___20359,res,vec__20177,v,p,job,jobs,results){
return (function (state_20182){
var state_val_20183 = (state_20182[(1)]);
if((state_val_20183 === (2))){
var inst_20179 = (state_20182[(2)]);
var inst_20180 = cljs.core.async.close_BANG_.call(null,res);
var state_20182__$1 = (function (){var statearr_20184 = state_20182;
(statearr_20184[(7)] = inst_20179);

return statearr_20184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20182__$1,inst_20180);
} else {
if((state_val_20183 === (1))){
var state_20182__$1 = state_20182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20182__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6817__auto___20359,res,vec__20177,v,p,job,jobs,results))
;
return ((function (switch__6761__auto__,c__6817__auto___20359,res,vec__20177,v,p,job,jobs,results){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20188 = [null,null,null,null,null,null,null,null];
(statearr_20188[(0)] = state_machine__6762__auto__);

(statearr_20188[(1)] = (1));

return statearr_20188;
});
var state_machine__6762__auto____1 = (function (state_20182){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20189){if((e20189 instanceof Object)){
var ex__6765__auto__ = e20189;
var statearr_20190_20360 = state_20182;
(statearr_20190_20360[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20361 = state_20182;
state_20182 = G__20361;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20182){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___20359,res,vec__20177,v,p,job,jobs,results))
})();
var state__6819__auto__ = (function (){var statearr_20191 = f__6818__auto__.call(null);
(statearr_20191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___20359);

return statearr_20191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___20359,res,vec__20177,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20192){
var vec__20193 = p__20192;
var v = cljs.core.nth.call(null,vec__20193,(0),null);
var p = cljs.core.nth.call(null,vec__20193,(1),null);
var job = vec__20193;
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
var n__4643__auto___20362 = n;
var __20363 = (0);
while(true){
if((__20363 < n__4643__auto___20362)){
var G__20194_20364 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20194_20364) {
case "async":
var c__6817__auto___20366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20363,c__6817__auto___20366,G__20194_20364,n__4643__auto___20362,jobs,results,process,async){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (__20363,c__6817__auto___20366,G__20194_20364,n__4643__auto___20362,jobs,results,process,async){
return (function (state_20207){
var state_val_20208 = (state_20207[(1)]);
if((state_val_20208 === (7))){
var inst_20203 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20209_20367 = state_20207__$1;
(statearr_20209_20367[(2)] = inst_20203);

(statearr_20209_20367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (6))){
var state_20207__$1 = state_20207;
var statearr_20210_20368 = state_20207__$1;
(statearr_20210_20368[(2)] = null);

(statearr_20210_20368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (5))){
var state_20207__$1 = state_20207;
var statearr_20211_20369 = state_20207__$1;
(statearr_20211_20369[(2)] = null);

(statearr_20211_20369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (4))){
var inst_20197 = (state_20207[(2)]);
var inst_20198 = async.call(null,inst_20197);
var state_20207__$1 = state_20207;
if(cljs.core.truth_(inst_20198)){
var statearr_20212_20370 = state_20207__$1;
(statearr_20212_20370[(1)] = (5));

} else {
var statearr_20213_20371 = state_20207__$1;
(statearr_20213_20371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (3))){
var inst_20205 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20207__$1,inst_20205);
} else {
if((state_val_20208 === (2))){
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20207__$1,(4),jobs);
} else {
if((state_val_20208 === (1))){
var state_20207__$1 = state_20207;
var statearr_20214_20372 = state_20207__$1;
(statearr_20214_20372[(2)] = null);

(statearr_20214_20372[(1)] = (2));


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
});})(__20363,c__6817__auto___20366,G__20194_20364,n__4643__auto___20362,jobs,results,process,async))
;
return ((function (__20363,switch__6761__auto__,c__6817__auto___20366,G__20194_20364,n__4643__auto___20362,jobs,results,process,async){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20218 = [null,null,null,null,null,null,null];
(statearr_20218[(0)] = state_machine__6762__auto__);

(statearr_20218[(1)] = (1));

return statearr_20218;
});
var state_machine__6762__auto____1 = (function (state_20207){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20219){if((e20219 instanceof Object)){
var ex__6765__auto__ = e20219;
var statearr_20220_20373 = state_20207;
(statearr_20220_20373[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20374 = state_20207;
state_20207 = G__20374;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20207){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(__20363,switch__6761__auto__,c__6817__auto___20366,G__20194_20364,n__4643__auto___20362,jobs,results,process,async))
})();
var state__6819__auto__ = (function (){var statearr_20221 = f__6818__auto__.call(null);
(statearr_20221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___20366);

return statearr_20221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(__20363,c__6817__auto___20366,G__20194_20364,n__4643__auto___20362,jobs,results,process,async))
);


break;
case "compute":
var c__6817__auto___20375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20363,c__6817__auto___20375,G__20194_20364,n__4643__auto___20362,jobs,results,process,async){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (__20363,c__6817__auto___20375,G__20194_20364,n__4643__auto___20362,jobs,results,process,async){
return (function (state_20234){
var state_val_20235 = (state_20234[(1)]);
if((state_val_20235 === (7))){
var inst_20230 = (state_20234[(2)]);
var state_20234__$1 = state_20234;
var statearr_20236_20376 = state_20234__$1;
(statearr_20236_20376[(2)] = inst_20230);

(statearr_20236_20376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (6))){
var state_20234__$1 = state_20234;
var statearr_20237_20377 = state_20234__$1;
(statearr_20237_20377[(2)] = null);

(statearr_20237_20377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (5))){
var state_20234__$1 = state_20234;
var statearr_20238_20378 = state_20234__$1;
(statearr_20238_20378[(2)] = null);

(statearr_20238_20378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (4))){
var inst_20224 = (state_20234[(2)]);
var inst_20225 = process.call(null,inst_20224);
var state_20234__$1 = state_20234;
if(cljs.core.truth_(inst_20225)){
var statearr_20239_20379 = state_20234__$1;
(statearr_20239_20379[(1)] = (5));

} else {
var statearr_20240_20380 = state_20234__$1;
(statearr_20240_20380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20235 === (3))){
var inst_20232 = (state_20234[(2)]);
var state_20234__$1 = state_20234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20234__$1,inst_20232);
} else {
if((state_val_20235 === (2))){
var state_20234__$1 = state_20234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20234__$1,(4),jobs);
} else {
if((state_val_20235 === (1))){
var state_20234__$1 = state_20234;
var statearr_20241_20381 = state_20234__$1;
(statearr_20241_20381[(2)] = null);

(statearr_20241_20381[(1)] = (2));


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
});})(__20363,c__6817__auto___20375,G__20194_20364,n__4643__auto___20362,jobs,results,process,async))
;
return ((function (__20363,switch__6761__auto__,c__6817__auto___20375,G__20194_20364,n__4643__auto___20362,jobs,results,process,async){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20245 = [null,null,null,null,null,null,null];
(statearr_20245[(0)] = state_machine__6762__auto__);

(statearr_20245[(1)] = (1));

return statearr_20245;
});
var state_machine__6762__auto____1 = (function (state_20234){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20246){if((e20246 instanceof Object)){
var ex__6765__auto__ = e20246;
var statearr_20247_20382 = state_20234;
(statearr_20247_20382[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20383 = state_20234;
state_20234 = G__20383;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20234){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(__20363,switch__6761__auto__,c__6817__auto___20375,G__20194_20364,n__4643__auto___20362,jobs,results,process,async))
})();
var state__6819__auto__ = (function (){var statearr_20248 = f__6818__auto__.call(null);
(statearr_20248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___20375);

return statearr_20248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(__20363,c__6817__auto___20375,G__20194_20364,n__4643__auto___20362,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20384 = (__20363 + (1));
__20363 = G__20384;
continue;
} else {
}
break;
}

var c__6817__auto___20385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___20385,jobs,results,process,async){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___20385,jobs,results,process,async){
return (function (state_20270){
var state_val_20271 = (state_20270[(1)]);
if((state_val_20271 === (9))){
var inst_20263 = (state_20270[(2)]);
var state_20270__$1 = (function (){var statearr_20272 = state_20270;
(statearr_20272[(7)] = inst_20263);

return statearr_20272;
})();
var statearr_20273_20386 = state_20270__$1;
(statearr_20273_20386[(2)] = null);

(statearr_20273_20386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (8))){
var inst_20256 = (state_20270[(8)]);
var inst_20261 = (state_20270[(2)]);
var state_20270__$1 = (function (){var statearr_20274 = state_20270;
(statearr_20274[(9)] = inst_20261);

return statearr_20274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20270__$1,(9),results,inst_20256);
} else {
if((state_val_20271 === (7))){
var inst_20266 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
var statearr_20275_20387 = state_20270__$1;
(statearr_20275_20387[(2)] = inst_20266);

(statearr_20275_20387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (6))){
var inst_20256 = (state_20270[(8)]);
var inst_20251 = (state_20270[(10)]);
var inst_20256__$1 = cljs.core.async.chan.call(null,(1));
var inst_20257 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20258 = [inst_20251,inst_20256__$1];
var inst_20259 = (new cljs.core.PersistentVector(null,2,(5),inst_20257,inst_20258,null));
var state_20270__$1 = (function (){var statearr_20276 = state_20270;
(statearr_20276[(8)] = inst_20256__$1);

return statearr_20276;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20270__$1,(8),jobs,inst_20259);
} else {
if((state_val_20271 === (5))){
var inst_20254 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20270__$1 = state_20270;
var statearr_20277_20388 = state_20270__$1;
(statearr_20277_20388[(2)] = inst_20254);

(statearr_20277_20388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (4))){
var inst_20251 = (state_20270[(10)]);
var inst_20251__$1 = (state_20270[(2)]);
var inst_20252 = (inst_20251__$1 == null);
var state_20270__$1 = (function (){var statearr_20278 = state_20270;
(statearr_20278[(10)] = inst_20251__$1);

return statearr_20278;
})();
if(cljs.core.truth_(inst_20252)){
var statearr_20279_20389 = state_20270__$1;
(statearr_20279_20389[(1)] = (5));

} else {
var statearr_20280_20390 = state_20270__$1;
(statearr_20280_20390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (3))){
var inst_20268 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20270__$1,inst_20268);
} else {
if((state_val_20271 === (2))){
var state_20270__$1 = state_20270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20270__$1,(4),from);
} else {
if((state_val_20271 === (1))){
var state_20270__$1 = state_20270;
var statearr_20281_20391 = state_20270__$1;
(statearr_20281_20391[(2)] = null);

(statearr_20281_20391[(1)] = (2));


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
});})(c__6817__auto___20385,jobs,results,process,async))
;
return ((function (switch__6761__auto__,c__6817__auto___20385,jobs,results,process,async){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20285[(0)] = state_machine__6762__auto__);

(statearr_20285[(1)] = (1));

return statearr_20285;
});
var state_machine__6762__auto____1 = (function (state_20270){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20286){if((e20286 instanceof Object)){
var ex__6765__auto__ = e20286;
var statearr_20287_20392 = state_20270;
(statearr_20287_20392[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20393 = state_20270;
state_20270 = G__20393;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20270){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___20385,jobs,results,process,async))
})();
var state__6819__auto__ = (function (){var statearr_20288 = f__6818__auto__.call(null);
(statearr_20288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___20385);

return statearr_20288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___20385,jobs,results,process,async))
);


var c__6817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto__,jobs,results,process,async){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto__,jobs,results,process,async){
return (function (state_20326){
var state_val_20327 = (state_20326[(1)]);
if((state_val_20327 === (7))){
var inst_20322 = (state_20326[(2)]);
var state_20326__$1 = state_20326;
var statearr_20328_20394 = state_20326__$1;
(statearr_20328_20394[(2)] = inst_20322);

(statearr_20328_20394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (20))){
var state_20326__$1 = state_20326;
var statearr_20329_20395 = state_20326__$1;
(statearr_20329_20395[(2)] = null);

(statearr_20329_20395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (1))){
var state_20326__$1 = state_20326;
var statearr_20330_20396 = state_20326__$1;
(statearr_20330_20396[(2)] = null);

(statearr_20330_20396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (4))){
var inst_20291 = (state_20326[(7)]);
var inst_20291__$1 = (state_20326[(2)]);
var inst_20292 = (inst_20291__$1 == null);
var state_20326__$1 = (function (){var statearr_20331 = state_20326;
(statearr_20331[(7)] = inst_20291__$1);

return statearr_20331;
})();
if(cljs.core.truth_(inst_20292)){
var statearr_20332_20397 = state_20326__$1;
(statearr_20332_20397[(1)] = (5));

} else {
var statearr_20333_20398 = state_20326__$1;
(statearr_20333_20398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (15))){
var inst_20304 = (state_20326[(8)]);
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20326__$1,(18),to,inst_20304);
} else {
if((state_val_20327 === (21))){
var inst_20317 = (state_20326[(2)]);
var state_20326__$1 = state_20326;
var statearr_20334_20399 = state_20326__$1;
(statearr_20334_20399[(2)] = inst_20317);

(statearr_20334_20399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (13))){
var inst_20319 = (state_20326[(2)]);
var state_20326__$1 = (function (){var statearr_20335 = state_20326;
(statearr_20335[(9)] = inst_20319);

return statearr_20335;
})();
var statearr_20336_20400 = state_20326__$1;
(statearr_20336_20400[(2)] = null);

(statearr_20336_20400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (6))){
var inst_20291 = (state_20326[(7)]);
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20326__$1,(11),inst_20291);
} else {
if((state_val_20327 === (17))){
var inst_20312 = (state_20326[(2)]);
var state_20326__$1 = state_20326;
if(cljs.core.truth_(inst_20312)){
var statearr_20337_20401 = state_20326__$1;
(statearr_20337_20401[(1)] = (19));

} else {
var statearr_20338_20402 = state_20326__$1;
(statearr_20338_20402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (3))){
var inst_20324 = (state_20326[(2)]);
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20326__$1,inst_20324);
} else {
if((state_val_20327 === (12))){
var inst_20301 = (state_20326[(10)]);
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20326__$1,(14),inst_20301);
} else {
if((state_val_20327 === (2))){
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20326__$1,(4),results);
} else {
if((state_val_20327 === (19))){
var state_20326__$1 = state_20326;
var statearr_20339_20403 = state_20326__$1;
(statearr_20339_20403[(2)] = null);

(statearr_20339_20403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (11))){
var inst_20301 = (state_20326[(2)]);
var state_20326__$1 = (function (){var statearr_20340 = state_20326;
(statearr_20340[(10)] = inst_20301);

return statearr_20340;
})();
var statearr_20341_20404 = state_20326__$1;
(statearr_20341_20404[(2)] = null);

(statearr_20341_20404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (9))){
var state_20326__$1 = state_20326;
var statearr_20342_20405 = state_20326__$1;
(statearr_20342_20405[(2)] = null);

(statearr_20342_20405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (5))){
var state_20326__$1 = state_20326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20343_20406 = state_20326__$1;
(statearr_20343_20406[(1)] = (8));

} else {
var statearr_20344_20407 = state_20326__$1;
(statearr_20344_20407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (14))){
var inst_20306 = (state_20326[(11)]);
var inst_20304 = (state_20326[(8)]);
var inst_20304__$1 = (state_20326[(2)]);
var inst_20305 = (inst_20304__$1 == null);
var inst_20306__$1 = cljs.core.not.call(null,inst_20305);
var state_20326__$1 = (function (){var statearr_20345 = state_20326;
(statearr_20345[(11)] = inst_20306__$1);

(statearr_20345[(8)] = inst_20304__$1);

return statearr_20345;
})();
if(inst_20306__$1){
var statearr_20346_20408 = state_20326__$1;
(statearr_20346_20408[(1)] = (15));

} else {
var statearr_20347_20409 = state_20326__$1;
(statearr_20347_20409[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (16))){
var inst_20306 = (state_20326[(11)]);
var state_20326__$1 = state_20326;
var statearr_20348_20410 = state_20326__$1;
(statearr_20348_20410[(2)] = inst_20306);

(statearr_20348_20410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (10))){
var inst_20298 = (state_20326[(2)]);
var state_20326__$1 = state_20326;
var statearr_20349_20411 = state_20326__$1;
(statearr_20349_20411[(2)] = inst_20298);

(statearr_20349_20411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (18))){
var inst_20309 = (state_20326[(2)]);
var state_20326__$1 = state_20326;
var statearr_20350_20412 = state_20326__$1;
(statearr_20350_20412[(2)] = inst_20309);

(statearr_20350_20412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20327 === (8))){
var inst_20295 = cljs.core.async.close_BANG_.call(null,to);
var state_20326__$1 = state_20326;
var statearr_20351_20413 = state_20326__$1;
(statearr_20351_20413[(2)] = inst_20295);

(statearr_20351_20413[(1)] = (10));


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
});})(c__6817__auto__,jobs,results,process,async))
;
return ((function (switch__6761__auto__,c__6817__auto__,jobs,results,process,async){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20355 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20355[(0)] = state_machine__6762__auto__);

(statearr_20355[(1)] = (1));

return statearr_20355;
});
var state_machine__6762__auto____1 = (function (state_20326){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20356){if((e20356 instanceof Object)){
var ex__6765__auto__ = e20356;
var statearr_20357_20414 = state_20326;
(statearr_20357_20414[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20415 = state_20326;
state_20326 = G__20415;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20326){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto__,jobs,results,process,async))
})();
var state__6819__auto__ = (function (){var statearr_20358 = f__6818__auto__.call(null);
(statearr_20358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto__);

return statearr_20358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto__,jobs,results,process,async))
);

return c__6817__auto__;
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
var c__6817__auto___20516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___20516,tc,fc){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___20516,tc,fc){
return (function (state_20491){
var state_val_20492 = (state_20491[(1)]);
if((state_val_20492 === (7))){
var inst_20487 = (state_20491[(2)]);
var state_20491__$1 = state_20491;
var statearr_20493_20517 = state_20491__$1;
(statearr_20493_20517[(2)] = inst_20487);

(statearr_20493_20517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (1))){
var state_20491__$1 = state_20491;
var statearr_20494_20518 = state_20491__$1;
(statearr_20494_20518[(2)] = null);

(statearr_20494_20518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (4))){
var inst_20468 = (state_20491[(7)]);
var inst_20468__$1 = (state_20491[(2)]);
var inst_20469 = (inst_20468__$1 == null);
var state_20491__$1 = (function (){var statearr_20495 = state_20491;
(statearr_20495[(7)] = inst_20468__$1);

return statearr_20495;
})();
if(cljs.core.truth_(inst_20469)){
var statearr_20496_20519 = state_20491__$1;
(statearr_20496_20519[(1)] = (5));

} else {
var statearr_20497_20520 = state_20491__$1;
(statearr_20497_20520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (13))){
var state_20491__$1 = state_20491;
var statearr_20498_20521 = state_20491__$1;
(statearr_20498_20521[(2)] = null);

(statearr_20498_20521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (6))){
var inst_20468 = (state_20491[(7)]);
var inst_20474 = p.call(null,inst_20468);
var state_20491__$1 = state_20491;
if(cljs.core.truth_(inst_20474)){
var statearr_20499_20522 = state_20491__$1;
(statearr_20499_20522[(1)] = (9));

} else {
var statearr_20500_20523 = state_20491__$1;
(statearr_20500_20523[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (3))){
var inst_20489 = (state_20491[(2)]);
var state_20491__$1 = state_20491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20491__$1,inst_20489);
} else {
if((state_val_20492 === (12))){
var state_20491__$1 = state_20491;
var statearr_20501_20524 = state_20491__$1;
(statearr_20501_20524[(2)] = null);

(statearr_20501_20524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (2))){
var state_20491__$1 = state_20491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20491__$1,(4),ch);
} else {
if((state_val_20492 === (11))){
var inst_20468 = (state_20491[(7)]);
var inst_20478 = (state_20491[(2)]);
var state_20491__$1 = state_20491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20491__$1,(8),inst_20478,inst_20468);
} else {
if((state_val_20492 === (9))){
var state_20491__$1 = state_20491;
var statearr_20502_20525 = state_20491__$1;
(statearr_20502_20525[(2)] = tc);

(statearr_20502_20525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (5))){
var inst_20471 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20472 = cljs.core.async.close_BANG_.call(null,fc);
var state_20491__$1 = (function (){var statearr_20503 = state_20491;
(statearr_20503[(8)] = inst_20471);

return statearr_20503;
})();
var statearr_20504_20526 = state_20491__$1;
(statearr_20504_20526[(2)] = inst_20472);

(statearr_20504_20526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (14))){
var inst_20485 = (state_20491[(2)]);
var state_20491__$1 = state_20491;
var statearr_20505_20527 = state_20491__$1;
(statearr_20505_20527[(2)] = inst_20485);

(statearr_20505_20527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (10))){
var state_20491__$1 = state_20491;
var statearr_20506_20528 = state_20491__$1;
(statearr_20506_20528[(2)] = fc);

(statearr_20506_20528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (8))){
var inst_20480 = (state_20491[(2)]);
var state_20491__$1 = state_20491;
if(cljs.core.truth_(inst_20480)){
var statearr_20507_20529 = state_20491__$1;
(statearr_20507_20529[(1)] = (12));

} else {
var statearr_20508_20530 = state_20491__$1;
(statearr_20508_20530[(1)] = (13));

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
});})(c__6817__auto___20516,tc,fc))
;
return ((function (switch__6761__auto__,c__6817__auto___20516,tc,fc){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20512 = [null,null,null,null,null,null,null,null,null];
(statearr_20512[(0)] = state_machine__6762__auto__);

(statearr_20512[(1)] = (1));

return statearr_20512;
});
var state_machine__6762__auto____1 = (function (state_20491){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20513){if((e20513 instanceof Object)){
var ex__6765__auto__ = e20513;
var statearr_20514_20531 = state_20491;
(statearr_20514_20531[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20532 = state_20491;
state_20491 = G__20532;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20491){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___20516,tc,fc))
})();
var state__6819__auto__ = (function (){var statearr_20515 = f__6818__auto__.call(null);
(statearr_20515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___20516);

return statearr_20515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___20516,tc,fc))
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
var c__6817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto__){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto__){
return (function (state_20579){
var state_val_20580 = (state_20579[(1)]);
if((state_val_20580 === (7))){
var inst_20575 = (state_20579[(2)]);
var state_20579__$1 = state_20579;
var statearr_20581_20597 = state_20579__$1;
(statearr_20581_20597[(2)] = inst_20575);

(statearr_20581_20597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20580 === (6))){
var inst_20565 = (state_20579[(7)]);
var inst_20568 = (state_20579[(8)]);
var inst_20572 = f.call(null,inst_20565,inst_20568);
var inst_20565__$1 = inst_20572;
var state_20579__$1 = (function (){var statearr_20582 = state_20579;
(statearr_20582[(7)] = inst_20565__$1);

return statearr_20582;
})();
var statearr_20583_20598 = state_20579__$1;
(statearr_20583_20598[(2)] = null);

(statearr_20583_20598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20580 === (5))){
var inst_20565 = (state_20579[(7)]);
var state_20579__$1 = state_20579;
var statearr_20584_20599 = state_20579__$1;
(statearr_20584_20599[(2)] = inst_20565);

(statearr_20584_20599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20580 === (4))){
var inst_20568 = (state_20579[(8)]);
var inst_20568__$1 = (state_20579[(2)]);
var inst_20569 = (inst_20568__$1 == null);
var state_20579__$1 = (function (){var statearr_20585 = state_20579;
(statearr_20585[(8)] = inst_20568__$1);

return statearr_20585;
})();
if(cljs.core.truth_(inst_20569)){
var statearr_20586_20600 = state_20579__$1;
(statearr_20586_20600[(1)] = (5));

} else {
var statearr_20587_20601 = state_20579__$1;
(statearr_20587_20601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20580 === (3))){
var inst_20577 = (state_20579[(2)]);
var state_20579__$1 = state_20579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20579__$1,inst_20577);
} else {
if((state_val_20580 === (2))){
var state_20579__$1 = state_20579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20579__$1,(4),ch);
} else {
if((state_val_20580 === (1))){
var inst_20565 = init;
var state_20579__$1 = (function (){var statearr_20588 = state_20579;
(statearr_20588[(7)] = inst_20565);

return statearr_20588;
})();
var statearr_20589_20602 = state_20579__$1;
(statearr_20589_20602[(2)] = null);

(statearr_20589_20602[(1)] = (2));


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
});})(c__6817__auto__))
;
return ((function (switch__6761__auto__,c__6817__auto__){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20593 = [null,null,null,null,null,null,null,null,null];
(statearr_20593[(0)] = state_machine__6762__auto__);

(statearr_20593[(1)] = (1));

return statearr_20593;
});
var state_machine__6762__auto____1 = (function (state_20579){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20594){if((e20594 instanceof Object)){
var ex__6765__auto__ = e20594;
var statearr_20595_20603 = state_20579;
(statearr_20595_20603[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20604 = state_20579;
state_20579 = G__20604;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20579){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto__))
})();
var state__6819__auto__ = (function (){var statearr_20596 = f__6818__auto__.call(null);
(statearr_20596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto__);

return statearr_20596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto__))
);

return c__6817__auto__;
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
var c__6817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto__){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto__){
return (function (state_20678){
var state_val_20679 = (state_20678[(1)]);
if((state_val_20679 === (7))){
var inst_20660 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20680_20703 = state_20678__$1;
(statearr_20680_20703[(2)] = inst_20660);

(statearr_20680_20703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (1))){
var inst_20654 = cljs.core.seq.call(null,coll);
var inst_20655 = inst_20654;
var state_20678__$1 = (function (){var statearr_20681 = state_20678;
(statearr_20681[(7)] = inst_20655);

return statearr_20681;
})();
var statearr_20682_20704 = state_20678__$1;
(statearr_20682_20704[(2)] = null);

(statearr_20682_20704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (4))){
var inst_20655 = (state_20678[(7)]);
var inst_20658 = cljs.core.first.call(null,inst_20655);
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20678__$1,(7),ch,inst_20658);
} else {
if((state_val_20679 === (13))){
var inst_20672 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20683_20705 = state_20678__$1;
(statearr_20683_20705[(2)] = inst_20672);

(statearr_20683_20705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (6))){
var inst_20663 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
if(cljs.core.truth_(inst_20663)){
var statearr_20684_20706 = state_20678__$1;
(statearr_20684_20706[(1)] = (8));

} else {
var statearr_20685_20707 = state_20678__$1;
(statearr_20685_20707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (3))){
var inst_20676 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20678__$1,inst_20676);
} else {
if((state_val_20679 === (12))){
var state_20678__$1 = state_20678;
var statearr_20686_20708 = state_20678__$1;
(statearr_20686_20708[(2)] = null);

(statearr_20686_20708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (2))){
var inst_20655 = (state_20678[(7)]);
var state_20678__$1 = state_20678;
if(cljs.core.truth_(inst_20655)){
var statearr_20687_20709 = state_20678__$1;
(statearr_20687_20709[(1)] = (4));

} else {
var statearr_20688_20710 = state_20678__$1;
(statearr_20688_20710[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (11))){
var inst_20669 = cljs.core.async.close_BANG_.call(null,ch);
var state_20678__$1 = state_20678;
var statearr_20689_20711 = state_20678__$1;
(statearr_20689_20711[(2)] = inst_20669);

(statearr_20689_20711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (9))){
var state_20678__$1 = state_20678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20690_20712 = state_20678__$1;
(statearr_20690_20712[(1)] = (11));

} else {
var statearr_20691_20713 = state_20678__$1;
(statearr_20691_20713[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (5))){
var inst_20655 = (state_20678[(7)]);
var state_20678__$1 = state_20678;
var statearr_20692_20714 = state_20678__$1;
(statearr_20692_20714[(2)] = inst_20655);

(statearr_20692_20714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (10))){
var inst_20674 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20693_20715 = state_20678__$1;
(statearr_20693_20715[(2)] = inst_20674);

(statearr_20693_20715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20679 === (8))){
var inst_20655 = (state_20678[(7)]);
var inst_20665 = cljs.core.next.call(null,inst_20655);
var inst_20655__$1 = inst_20665;
var state_20678__$1 = (function (){var statearr_20694 = state_20678;
(statearr_20694[(7)] = inst_20655__$1);

return statearr_20694;
})();
var statearr_20695_20716 = state_20678__$1;
(statearr_20695_20716[(2)] = null);

(statearr_20695_20716[(1)] = (2));


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
});})(c__6817__auto__))
;
return ((function (switch__6761__auto__,c__6817__auto__){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_20699 = [null,null,null,null,null,null,null,null];
(statearr_20699[(0)] = state_machine__6762__auto__);

(statearr_20699[(1)] = (1));

return statearr_20699;
});
var state_machine__6762__auto____1 = (function (state_20678){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_20678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e20700){if((e20700 instanceof Object)){
var ex__6765__auto__ = e20700;
var statearr_20701_20717 = state_20678;
(statearr_20701_20717[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20718 = state_20678;
state_20678 = G__20718;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_20678){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_20678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto__))
})();
var state__6819__auto__ = (function (){var statearr_20702 = f__6818__auto__.call(null);
(statearr_20702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto__);

return statearr_20702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto__))
);

return c__6817__auto__;
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

cljs.core.async.Mux = (function (){var obj20720 = {};
return obj20720;
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


cljs.core.async.Mult = (function (){var obj20722 = {};
return obj20722;
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
if(typeof cljs.core.async.t20944 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20944 = (function (cs,ch,mult,meta20945){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20945 = meta20945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20944.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20944.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20944.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20944.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20944.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20946){
var self__ = this;
var _20946__$1 = this;
return self__.meta20945;
});})(cs))
;

cljs.core.async.t20944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20946,meta20945__$1){
var self__ = this;
var _20946__$1 = this;
return (new cljs.core.async.t20944(self__.cs,self__.ch,self__.mult,meta20945__$1));
});})(cs))
;

cljs.core.async.t20944.cljs$lang$type = true;

cljs.core.async.t20944.cljs$lang$ctorStr = "cljs.core.async/t20944";

cljs.core.async.t20944.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20944");
});})(cs))
;

cljs.core.async.__GT_t20944 = ((function (cs){
return (function __GT_t20944(cs__$1,ch__$1,mult__$1,meta20945){
return (new cljs.core.async.t20944(cs__$1,ch__$1,mult__$1,meta20945));
});})(cs))
;

}

return (new cljs.core.async.t20944(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6817__auto___21165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___21165,cs,m,dchan,dctr,done){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___21165,cs,m,dchan,dctr,done){
return (function (state_21077){
var state_val_21078 = (state_21077[(1)]);
if((state_val_21078 === (7))){
var inst_21073 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21079_21166 = state_21077__$1;
(statearr_21079_21166[(2)] = inst_21073);

(statearr_21079_21166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (20))){
var inst_20978 = (state_21077[(7)]);
var inst_20988 = cljs.core.first.call(null,inst_20978);
var inst_20989 = cljs.core.nth.call(null,inst_20988,(0),null);
var inst_20990 = cljs.core.nth.call(null,inst_20988,(1),null);
var state_21077__$1 = (function (){var statearr_21080 = state_21077;
(statearr_21080[(8)] = inst_20989);

return statearr_21080;
})();
if(cljs.core.truth_(inst_20990)){
var statearr_21081_21167 = state_21077__$1;
(statearr_21081_21167[(1)] = (22));

} else {
var statearr_21082_21168 = state_21077__$1;
(statearr_21082_21168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (27))){
var inst_21020 = (state_21077[(9)]);
var inst_21025 = (state_21077[(10)]);
var inst_21018 = (state_21077[(11)]);
var inst_20949 = (state_21077[(12)]);
var inst_21025__$1 = cljs.core._nth.call(null,inst_21018,inst_21020);
var inst_21026 = cljs.core.async.put_BANG_.call(null,inst_21025__$1,inst_20949,done);
var state_21077__$1 = (function (){var statearr_21083 = state_21077;
(statearr_21083[(10)] = inst_21025__$1);

return statearr_21083;
})();
if(cljs.core.truth_(inst_21026)){
var statearr_21084_21169 = state_21077__$1;
(statearr_21084_21169[(1)] = (30));

} else {
var statearr_21085_21170 = state_21077__$1;
(statearr_21085_21170[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (1))){
var state_21077__$1 = state_21077;
var statearr_21086_21171 = state_21077__$1;
(statearr_21086_21171[(2)] = null);

(statearr_21086_21171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (24))){
var inst_20978 = (state_21077[(7)]);
var inst_20995 = (state_21077[(2)]);
var inst_20996 = cljs.core.next.call(null,inst_20978);
var inst_20958 = inst_20996;
var inst_20959 = null;
var inst_20960 = (0);
var inst_20961 = (0);
var state_21077__$1 = (function (){var statearr_21087 = state_21077;
(statearr_21087[(13)] = inst_20961);

(statearr_21087[(14)] = inst_20995);

(statearr_21087[(15)] = inst_20958);

(statearr_21087[(16)] = inst_20960);

(statearr_21087[(17)] = inst_20959);

return statearr_21087;
})();
var statearr_21088_21172 = state_21077__$1;
(statearr_21088_21172[(2)] = null);

(statearr_21088_21172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (39))){
var state_21077__$1 = state_21077;
var statearr_21092_21173 = state_21077__$1;
(statearr_21092_21173[(2)] = null);

(statearr_21092_21173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (4))){
var inst_20949 = (state_21077[(12)]);
var inst_20949__$1 = (state_21077[(2)]);
var inst_20950 = (inst_20949__$1 == null);
var state_21077__$1 = (function (){var statearr_21093 = state_21077;
(statearr_21093[(12)] = inst_20949__$1);

return statearr_21093;
})();
if(cljs.core.truth_(inst_20950)){
var statearr_21094_21174 = state_21077__$1;
(statearr_21094_21174[(1)] = (5));

} else {
var statearr_21095_21175 = state_21077__$1;
(statearr_21095_21175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (15))){
var inst_20961 = (state_21077[(13)]);
var inst_20958 = (state_21077[(15)]);
var inst_20960 = (state_21077[(16)]);
var inst_20959 = (state_21077[(17)]);
var inst_20974 = (state_21077[(2)]);
var inst_20975 = (inst_20961 + (1));
var tmp21089 = inst_20958;
var tmp21090 = inst_20960;
var tmp21091 = inst_20959;
var inst_20958__$1 = tmp21089;
var inst_20959__$1 = tmp21091;
var inst_20960__$1 = tmp21090;
var inst_20961__$1 = inst_20975;
var state_21077__$1 = (function (){var statearr_21096 = state_21077;
(statearr_21096[(18)] = inst_20974);

(statearr_21096[(13)] = inst_20961__$1);

(statearr_21096[(15)] = inst_20958__$1);

(statearr_21096[(16)] = inst_20960__$1);

(statearr_21096[(17)] = inst_20959__$1);

return statearr_21096;
})();
var statearr_21097_21176 = state_21077__$1;
(statearr_21097_21176[(2)] = null);

(statearr_21097_21176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (21))){
var inst_20999 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21101_21177 = state_21077__$1;
(statearr_21101_21177[(2)] = inst_20999);

(statearr_21101_21177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (31))){
var inst_21025 = (state_21077[(10)]);
var inst_21029 = done.call(null,null);
var inst_21030 = cljs.core.async.untap_STAR_.call(null,m,inst_21025);
var state_21077__$1 = (function (){var statearr_21102 = state_21077;
(statearr_21102[(19)] = inst_21029);

return statearr_21102;
})();
var statearr_21103_21178 = state_21077__$1;
(statearr_21103_21178[(2)] = inst_21030);

(statearr_21103_21178[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (32))){
var inst_21020 = (state_21077[(9)]);
var inst_21017 = (state_21077[(20)]);
var inst_21018 = (state_21077[(11)]);
var inst_21019 = (state_21077[(21)]);
var inst_21032 = (state_21077[(2)]);
var inst_21033 = (inst_21020 + (1));
var tmp21098 = inst_21017;
var tmp21099 = inst_21018;
var tmp21100 = inst_21019;
var inst_21017__$1 = tmp21098;
var inst_21018__$1 = tmp21099;
var inst_21019__$1 = tmp21100;
var inst_21020__$1 = inst_21033;
var state_21077__$1 = (function (){var statearr_21104 = state_21077;
(statearr_21104[(22)] = inst_21032);

(statearr_21104[(9)] = inst_21020__$1);

(statearr_21104[(20)] = inst_21017__$1);

(statearr_21104[(11)] = inst_21018__$1);

(statearr_21104[(21)] = inst_21019__$1);

return statearr_21104;
})();
var statearr_21105_21179 = state_21077__$1;
(statearr_21105_21179[(2)] = null);

(statearr_21105_21179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (40))){
var inst_21045 = (state_21077[(23)]);
var inst_21049 = done.call(null,null);
var inst_21050 = cljs.core.async.untap_STAR_.call(null,m,inst_21045);
var state_21077__$1 = (function (){var statearr_21106 = state_21077;
(statearr_21106[(24)] = inst_21049);

return statearr_21106;
})();
var statearr_21107_21180 = state_21077__$1;
(statearr_21107_21180[(2)] = inst_21050);

(statearr_21107_21180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (33))){
var inst_21036 = (state_21077[(25)]);
var inst_21038 = cljs.core.chunked_seq_QMARK_.call(null,inst_21036);
var state_21077__$1 = state_21077;
if(inst_21038){
var statearr_21108_21181 = state_21077__$1;
(statearr_21108_21181[(1)] = (36));

} else {
var statearr_21109_21182 = state_21077__$1;
(statearr_21109_21182[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (13))){
var inst_20968 = (state_21077[(26)]);
var inst_20971 = cljs.core.async.close_BANG_.call(null,inst_20968);
var state_21077__$1 = state_21077;
var statearr_21110_21183 = state_21077__$1;
(statearr_21110_21183[(2)] = inst_20971);

(statearr_21110_21183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (22))){
var inst_20989 = (state_21077[(8)]);
var inst_20992 = cljs.core.async.close_BANG_.call(null,inst_20989);
var state_21077__$1 = state_21077;
var statearr_21111_21184 = state_21077__$1;
(statearr_21111_21184[(2)] = inst_20992);

(statearr_21111_21184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (36))){
var inst_21036 = (state_21077[(25)]);
var inst_21040 = cljs.core.chunk_first.call(null,inst_21036);
var inst_21041 = cljs.core.chunk_rest.call(null,inst_21036);
var inst_21042 = cljs.core.count.call(null,inst_21040);
var inst_21017 = inst_21041;
var inst_21018 = inst_21040;
var inst_21019 = inst_21042;
var inst_21020 = (0);
var state_21077__$1 = (function (){var statearr_21112 = state_21077;
(statearr_21112[(9)] = inst_21020);

(statearr_21112[(20)] = inst_21017);

(statearr_21112[(11)] = inst_21018);

(statearr_21112[(21)] = inst_21019);

return statearr_21112;
})();
var statearr_21113_21185 = state_21077__$1;
(statearr_21113_21185[(2)] = null);

(statearr_21113_21185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (41))){
var inst_21036 = (state_21077[(25)]);
var inst_21052 = (state_21077[(2)]);
var inst_21053 = cljs.core.next.call(null,inst_21036);
var inst_21017 = inst_21053;
var inst_21018 = null;
var inst_21019 = (0);
var inst_21020 = (0);
var state_21077__$1 = (function (){var statearr_21114 = state_21077;
(statearr_21114[(27)] = inst_21052);

(statearr_21114[(9)] = inst_21020);

(statearr_21114[(20)] = inst_21017);

(statearr_21114[(11)] = inst_21018);

(statearr_21114[(21)] = inst_21019);

return statearr_21114;
})();
var statearr_21115_21186 = state_21077__$1;
(statearr_21115_21186[(2)] = null);

(statearr_21115_21186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (43))){
var state_21077__$1 = state_21077;
var statearr_21116_21187 = state_21077__$1;
(statearr_21116_21187[(2)] = null);

(statearr_21116_21187[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (29))){
var inst_21061 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21117_21188 = state_21077__$1;
(statearr_21117_21188[(2)] = inst_21061);

(statearr_21117_21188[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (44))){
var inst_21070 = (state_21077[(2)]);
var state_21077__$1 = (function (){var statearr_21118 = state_21077;
(statearr_21118[(28)] = inst_21070);

return statearr_21118;
})();
var statearr_21119_21189 = state_21077__$1;
(statearr_21119_21189[(2)] = null);

(statearr_21119_21189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (6))){
var inst_21009 = (state_21077[(29)]);
var inst_21008 = cljs.core.deref.call(null,cs);
var inst_21009__$1 = cljs.core.keys.call(null,inst_21008);
var inst_21010 = cljs.core.count.call(null,inst_21009__$1);
var inst_21011 = cljs.core.reset_BANG_.call(null,dctr,inst_21010);
var inst_21016 = cljs.core.seq.call(null,inst_21009__$1);
var inst_21017 = inst_21016;
var inst_21018 = null;
var inst_21019 = (0);
var inst_21020 = (0);
var state_21077__$1 = (function (){var statearr_21120 = state_21077;
(statearr_21120[(29)] = inst_21009__$1);

(statearr_21120[(9)] = inst_21020);

(statearr_21120[(30)] = inst_21011);

(statearr_21120[(20)] = inst_21017);

(statearr_21120[(11)] = inst_21018);

(statearr_21120[(21)] = inst_21019);

return statearr_21120;
})();
var statearr_21121_21190 = state_21077__$1;
(statearr_21121_21190[(2)] = null);

(statearr_21121_21190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (28))){
var inst_21036 = (state_21077[(25)]);
var inst_21017 = (state_21077[(20)]);
var inst_21036__$1 = cljs.core.seq.call(null,inst_21017);
var state_21077__$1 = (function (){var statearr_21122 = state_21077;
(statearr_21122[(25)] = inst_21036__$1);

return statearr_21122;
})();
if(inst_21036__$1){
var statearr_21123_21191 = state_21077__$1;
(statearr_21123_21191[(1)] = (33));

} else {
var statearr_21124_21192 = state_21077__$1;
(statearr_21124_21192[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (25))){
var inst_21020 = (state_21077[(9)]);
var inst_21019 = (state_21077[(21)]);
var inst_21022 = (inst_21020 < inst_21019);
var inst_21023 = inst_21022;
var state_21077__$1 = state_21077;
if(cljs.core.truth_(inst_21023)){
var statearr_21125_21193 = state_21077__$1;
(statearr_21125_21193[(1)] = (27));

} else {
var statearr_21126_21194 = state_21077__$1;
(statearr_21126_21194[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (34))){
var state_21077__$1 = state_21077;
var statearr_21127_21195 = state_21077__$1;
(statearr_21127_21195[(2)] = null);

(statearr_21127_21195[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (17))){
var state_21077__$1 = state_21077;
var statearr_21128_21196 = state_21077__$1;
(statearr_21128_21196[(2)] = null);

(statearr_21128_21196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (3))){
var inst_21075 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21077__$1,inst_21075);
} else {
if((state_val_21078 === (12))){
var inst_21004 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21129_21197 = state_21077__$1;
(statearr_21129_21197[(2)] = inst_21004);

(statearr_21129_21197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (2))){
var state_21077__$1 = state_21077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21077__$1,(4),ch);
} else {
if((state_val_21078 === (23))){
var state_21077__$1 = state_21077;
var statearr_21130_21198 = state_21077__$1;
(statearr_21130_21198[(2)] = null);

(statearr_21130_21198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (35))){
var inst_21059 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21131_21199 = state_21077__$1;
(statearr_21131_21199[(2)] = inst_21059);

(statearr_21131_21199[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (19))){
var inst_20978 = (state_21077[(7)]);
var inst_20982 = cljs.core.chunk_first.call(null,inst_20978);
var inst_20983 = cljs.core.chunk_rest.call(null,inst_20978);
var inst_20984 = cljs.core.count.call(null,inst_20982);
var inst_20958 = inst_20983;
var inst_20959 = inst_20982;
var inst_20960 = inst_20984;
var inst_20961 = (0);
var state_21077__$1 = (function (){var statearr_21132 = state_21077;
(statearr_21132[(13)] = inst_20961);

(statearr_21132[(15)] = inst_20958);

(statearr_21132[(16)] = inst_20960);

(statearr_21132[(17)] = inst_20959);

return statearr_21132;
})();
var statearr_21133_21200 = state_21077__$1;
(statearr_21133_21200[(2)] = null);

(statearr_21133_21200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (11))){
var inst_20958 = (state_21077[(15)]);
var inst_20978 = (state_21077[(7)]);
var inst_20978__$1 = cljs.core.seq.call(null,inst_20958);
var state_21077__$1 = (function (){var statearr_21134 = state_21077;
(statearr_21134[(7)] = inst_20978__$1);

return statearr_21134;
})();
if(inst_20978__$1){
var statearr_21135_21201 = state_21077__$1;
(statearr_21135_21201[(1)] = (16));

} else {
var statearr_21136_21202 = state_21077__$1;
(statearr_21136_21202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (9))){
var inst_21006 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21137_21203 = state_21077__$1;
(statearr_21137_21203[(2)] = inst_21006);

(statearr_21137_21203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (5))){
var inst_20956 = cljs.core.deref.call(null,cs);
var inst_20957 = cljs.core.seq.call(null,inst_20956);
var inst_20958 = inst_20957;
var inst_20959 = null;
var inst_20960 = (0);
var inst_20961 = (0);
var state_21077__$1 = (function (){var statearr_21138 = state_21077;
(statearr_21138[(13)] = inst_20961);

(statearr_21138[(15)] = inst_20958);

(statearr_21138[(16)] = inst_20960);

(statearr_21138[(17)] = inst_20959);

return statearr_21138;
})();
var statearr_21139_21204 = state_21077__$1;
(statearr_21139_21204[(2)] = null);

(statearr_21139_21204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (14))){
var state_21077__$1 = state_21077;
var statearr_21140_21205 = state_21077__$1;
(statearr_21140_21205[(2)] = null);

(statearr_21140_21205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (45))){
var inst_21067 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21141_21206 = state_21077__$1;
(statearr_21141_21206[(2)] = inst_21067);

(statearr_21141_21206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (26))){
var inst_21009 = (state_21077[(29)]);
var inst_21063 = (state_21077[(2)]);
var inst_21064 = cljs.core.seq.call(null,inst_21009);
var state_21077__$1 = (function (){var statearr_21142 = state_21077;
(statearr_21142[(31)] = inst_21063);

return statearr_21142;
})();
if(inst_21064){
var statearr_21143_21207 = state_21077__$1;
(statearr_21143_21207[(1)] = (42));

} else {
var statearr_21144_21208 = state_21077__$1;
(statearr_21144_21208[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (16))){
var inst_20978 = (state_21077[(7)]);
var inst_20980 = cljs.core.chunked_seq_QMARK_.call(null,inst_20978);
var state_21077__$1 = state_21077;
if(inst_20980){
var statearr_21145_21209 = state_21077__$1;
(statearr_21145_21209[(1)] = (19));

} else {
var statearr_21146_21210 = state_21077__$1;
(statearr_21146_21210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (38))){
var inst_21056 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21147_21211 = state_21077__$1;
(statearr_21147_21211[(2)] = inst_21056);

(statearr_21147_21211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (30))){
var state_21077__$1 = state_21077;
var statearr_21148_21212 = state_21077__$1;
(statearr_21148_21212[(2)] = null);

(statearr_21148_21212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (10))){
var inst_20961 = (state_21077[(13)]);
var inst_20959 = (state_21077[(17)]);
var inst_20967 = cljs.core._nth.call(null,inst_20959,inst_20961);
var inst_20968 = cljs.core.nth.call(null,inst_20967,(0),null);
var inst_20969 = cljs.core.nth.call(null,inst_20967,(1),null);
var state_21077__$1 = (function (){var statearr_21149 = state_21077;
(statearr_21149[(26)] = inst_20968);

return statearr_21149;
})();
if(cljs.core.truth_(inst_20969)){
var statearr_21150_21213 = state_21077__$1;
(statearr_21150_21213[(1)] = (13));

} else {
var statearr_21151_21214 = state_21077__$1;
(statearr_21151_21214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (18))){
var inst_21002 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21152_21215 = state_21077__$1;
(statearr_21152_21215[(2)] = inst_21002);

(statearr_21152_21215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (42))){
var state_21077__$1 = state_21077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21077__$1,(45),dchan);
} else {
if((state_val_21078 === (37))){
var inst_21036 = (state_21077[(25)]);
var inst_21045 = (state_21077[(23)]);
var inst_20949 = (state_21077[(12)]);
var inst_21045__$1 = cljs.core.first.call(null,inst_21036);
var inst_21046 = cljs.core.async.put_BANG_.call(null,inst_21045__$1,inst_20949,done);
var state_21077__$1 = (function (){var statearr_21153 = state_21077;
(statearr_21153[(23)] = inst_21045__$1);

return statearr_21153;
})();
if(cljs.core.truth_(inst_21046)){
var statearr_21154_21216 = state_21077__$1;
(statearr_21154_21216[(1)] = (39));

} else {
var statearr_21155_21217 = state_21077__$1;
(statearr_21155_21217[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (8))){
var inst_20961 = (state_21077[(13)]);
var inst_20960 = (state_21077[(16)]);
var inst_20963 = (inst_20961 < inst_20960);
var inst_20964 = inst_20963;
var state_21077__$1 = state_21077;
if(cljs.core.truth_(inst_20964)){
var statearr_21156_21218 = state_21077__$1;
(statearr_21156_21218[(1)] = (10));

} else {
var statearr_21157_21219 = state_21077__$1;
(statearr_21157_21219[(1)] = (11));

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
});})(c__6817__auto___21165,cs,m,dchan,dctr,done))
;
return ((function (switch__6761__auto__,c__6817__auto___21165,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_21161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21161[(0)] = state_machine__6762__auto__);

(statearr_21161[(1)] = (1));

return statearr_21161;
});
var state_machine__6762__auto____1 = (function (state_21077){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_21077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e21162){if((e21162 instanceof Object)){
var ex__6765__auto__ = e21162;
var statearr_21163_21220 = state_21077;
(statearr_21163_21220[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21221 = state_21077;
state_21077 = G__21221;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_21077){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_21077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___21165,cs,m,dchan,dctr,done))
})();
var state__6819__auto__ = (function (){var statearr_21164 = f__6818__auto__.call(null);
(statearr_21164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___21165);

return statearr_21164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___21165,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21223 = {};
return obj21223;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21224){
var map__21229 = p__21224;
var map__21229__$1 = ((cljs.core.seq_QMARK_.call(null,map__21229))?cljs.core.apply.call(null,cljs.core.hash_map,map__21229):map__21229);
var opts = map__21229__$1;
var statearr_21230_21233 = state;
(statearr_21230_21233[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21229,map__21229__$1,opts){
return (function (val){
var statearr_21231_21234 = state;
(statearr_21231_21234[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21229,map__21229__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21232_21235 = state;
(statearr_21232_21235[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21224 = null;
if (arguments.length > 3) {
  p__21224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21224);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21236){
var state = cljs.core.first(arglist__21236);
arglist__21236 = cljs.core.next(arglist__21236);
var cont_block = cljs.core.first(arglist__21236);
arglist__21236 = cljs.core.next(arglist__21236);
var ports = cljs.core.first(arglist__21236);
var p__21224 = cljs.core.rest(arglist__21236);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21224);
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
if(typeof cljs.core.async.t21356 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21356 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21357){
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
this.meta21357 = meta21357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21356.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21356.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21356.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21356.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21356.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21356.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21356.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21358){
var self__ = this;
var _21358__$1 = this;
return self__.meta21357;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21358,meta21357__$1){
var self__ = this;
var _21358__$1 = this;
return (new cljs.core.async.t21356(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21357__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21356.cljs$lang$type = true;

cljs.core.async.t21356.cljs$lang$ctorStr = "cljs.core.async/t21356";

cljs.core.async.t21356.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21356");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21356 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21356(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21357){
return (new cljs.core.async.t21356(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21357));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21356(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6817__auto___21475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___21475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___21475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21428){
var state_val_21429 = (state_21428[(1)]);
if((state_val_21429 === (7))){
var inst_21372 = (state_21428[(7)]);
var inst_21377 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21372);
var state_21428__$1 = state_21428;
var statearr_21430_21476 = state_21428__$1;
(statearr_21430_21476[(2)] = inst_21377);

(statearr_21430_21476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (20))){
var inst_21387 = (state_21428[(8)]);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21428__$1,(23),out,inst_21387);
} else {
if((state_val_21429 === (1))){
var inst_21362 = (state_21428[(9)]);
var inst_21362__$1 = calc_state.call(null);
var inst_21363 = cljs.core.seq_QMARK_.call(null,inst_21362__$1);
var state_21428__$1 = (function (){var statearr_21431 = state_21428;
(statearr_21431[(9)] = inst_21362__$1);

return statearr_21431;
})();
if(inst_21363){
var statearr_21432_21477 = state_21428__$1;
(statearr_21432_21477[(1)] = (2));

} else {
var statearr_21433_21478 = state_21428__$1;
(statearr_21433_21478[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (24))){
var inst_21380 = (state_21428[(10)]);
var inst_21372 = inst_21380;
var state_21428__$1 = (function (){var statearr_21434 = state_21428;
(statearr_21434[(7)] = inst_21372);

return statearr_21434;
})();
var statearr_21435_21479 = state_21428__$1;
(statearr_21435_21479[(2)] = null);

(statearr_21435_21479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (4))){
var inst_21362 = (state_21428[(9)]);
var inst_21368 = (state_21428[(2)]);
var inst_21369 = cljs.core.get.call(null,inst_21368,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21370 = cljs.core.get.call(null,inst_21368,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21371 = cljs.core.get.call(null,inst_21368,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21372 = inst_21362;
var state_21428__$1 = (function (){var statearr_21436 = state_21428;
(statearr_21436[(11)] = inst_21371);

(statearr_21436[(7)] = inst_21372);

(statearr_21436[(12)] = inst_21369);

(statearr_21436[(13)] = inst_21370);

return statearr_21436;
})();
var statearr_21437_21480 = state_21428__$1;
(statearr_21437_21480[(2)] = null);

(statearr_21437_21480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (15))){
var state_21428__$1 = state_21428;
var statearr_21438_21481 = state_21428__$1;
(statearr_21438_21481[(2)] = null);

(statearr_21438_21481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (21))){
var inst_21380 = (state_21428[(10)]);
var inst_21372 = inst_21380;
var state_21428__$1 = (function (){var statearr_21439 = state_21428;
(statearr_21439[(7)] = inst_21372);

return statearr_21439;
})();
var statearr_21440_21482 = state_21428__$1;
(statearr_21440_21482[(2)] = null);

(statearr_21440_21482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (13))){
var inst_21424 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21441_21483 = state_21428__$1;
(statearr_21441_21483[(2)] = inst_21424);

(statearr_21441_21483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (22))){
var inst_21422 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21442_21484 = state_21428__$1;
(statearr_21442_21484[(2)] = inst_21422);

(statearr_21442_21484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (6))){
var inst_21426 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21428__$1,inst_21426);
} else {
if((state_val_21429 === (25))){
var state_21428__$1 = state_21428;
var statearr_21443_21485 = state_21428__$1;
(statearr_21443_21485[(2)] = null);

(statearr_21443_21485[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (17))){
var inst_21402 = (state_21428[(14)]);
var state_21428__$1 = state_21428;
var statearr_21444_21486 = state_21428__$1;
(statearr_21444_21486[(2)] = inst_21402);

(statearr_21444_21486[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (3))){
var inst_21362 = (state_21428[(9)]);
var state_21428__$1 = state_21428;
var statearr_21445_21487 = state_21428__$1;
(statearr_21445_21487[(2)] = inst_21362);

(statearr_21445_21487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (12))){
var inst_21402 = (state_21428[(14)]);
var inst_21388 = (state_21428[(15)]);
var inst_21383 = (state_21428[(16)]);
var inst_21402__$1 = inst_21383.call(null,inst_21388);
var state_21428__$1 = (function (){var statearr_21446 = state_21428;
(statearr_21446[(14)] = inst_21402__$1);

return statearr_21446;
})();
if(cljs.core.truth_(inst_21402__$1)){
var statearr_21447_21488 = state_21428__$1;
(statearr_21447_21488[(1)] = (17));

} else {
var statearr_21448_21489 = state_21428__$1;
(statearr_21448_21489[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (2))){
var inst_21362 = (state_21428[(9)]);
var inst_21365 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21362);
var state_21428__$1 = state_21428;
var statearr_21449_21490 = state_21428__$1;
(statearr_21449_21490[(2)] = inst_21365);

(statearr_21449_21490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (23))){
var inst_21413 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
if(cljs.core.truth_(inst_21413)){
var statearr_21450_21491 = state_21428__$1;
(statearr_21450_21491[(1)] = (24));

} else {
var statearr_21451_21492 = state_21428__$1;
(statearr_21451_21492[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (19))){
var inst_21410 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
if(cljs.core.truth_(inst_21410)){
var statearr_21452_21493 = state_21428__$1;
(statearr_21452_21493[(1)] = (20));

} else {
var statearr_21453_21494 = state_21428__$1;
(statearr_21453_21494[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (11))){
var inst_21387 = (state_21428[(8)]);
var inst_21393 = (inst_21387 == null);
var state_21428__$1 = state_21428;
if(cljs.core.truth_(inst_21393)){
var statearr_21454_21495 = state_21428__$1;
(statearr_21454_21495[(1)] = (14));

} else {
var statearr_21455_21496 = state_21428__$1;
(statearr_21455_21496[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (9))){
var inst_21380 = (state_21428[(10)]);
var inst_21380__$1 = (state_21428[(2)]);
var inst_21381 = cljs.core.get.call(null,inst_21380__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21382 = cljs.core.get.call(null,inst_21380__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21383 = cljs.core.get.call(null,inst_21380__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21428__$1 = (function (){var statearr_21456 = state_21428;
(statearr_21456[(17)] = inst_21382);

(statearr_21456[(10)] = inst_21380__$1);

(statearr_21456[(16)] = inst_21383);

return statearr_21456;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21428__$1,(10),inst_21381);
} else {
if((state_val_21429 === (5))){
var inst_21372 = (state_21428[(7)]);
var inst_21375 = cljs.core.seq_QMARK_.call(null,inst_21372);
var state_21428__$1 = state_21428;
if(inst_21375){
var statearr_21457_21497 = state_21428__$1;
(statearr_21457_21497[(1)] = (7));

} else {
var statearr_21458_21498 = state_21428__$1;
(statearr_21458_21498[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (14))){
var inst_21388 = (state_21428[(15)]);
var inst_21395 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21388);
var state_21428__$1 = state_21428;
var statearr_21459_21499 = state_21428__$1;
(statearr_21459_21499[(2)] = inst_21395);

(statearr_21459_21499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (26))){
var inst_21418 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21460_21500 = state_21428__$1;
(statearr_21460_21500[(2)] = inst_21418);

(statearr_21460_21500[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (16))){
var inst_21398 = (state_21428[(2)]);
var inst_21399 = calc_state.call(null);
var inst_21372 = inst_21399;
var state_21428__$1 = (function (){var statearr_21461 = state_21428;
(statearr_21461[(18)] = inst_21398);

(statearr_21461[(7)] = inst_21372);

return statearr_21461;
})();
var statearr_21462_21501 = state_21428__$1;
(statearr_21462_21501[(2)] = null);

(statearr_21462_21501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (10))){
var inst_21388 = (state_21428[(15)]);
var inst_21387 = (state_21428[(8)]);
var inst_21386 = (state_21428[(2)]);
var inst_21387__$1 = cljs.core.nth.call(null,inst_21386,(0),null);
var inst_21388__$1 = cljs.core.nth.call(null,inst_21386,(1),null);
var inst_21389 = (inst_21387__$1 == null);
var inst_21390 = cljs.core._EQ_.call(null,inst_21388__$1,change);
var inst_21391 = (inst_21389) || (inst_21390);
var state_21428__$1 = (function (){var statearr_21463 = state_21428;
(statearr_21463[(15)] = inst_21388__$1);

(statearr_21463[(8)] = inst_21387__$1);

return statearr_21463;
})();
if(cljs.core.truth_(inst_21391)){
var statearr_21464_21502 = state_21428__$1;
(statearr_21464_21502[(1)] = (11));

} else {
var statearr_21465_21503 = state_21428__$1;
(statearr_21465_21503[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (18))){
var inst_21382 = (state_21428[(17)]);
var inst_21388 = (state_21428[(15)]);
var inst_21383 = (state_21428[(16)]);
var inst_21405 = cljs.core.empty_QMARK_.call(null,inst_21383);
var inst_21406 = inst_21382.call(null,inst_21388);
var inst_21407 = cljs.core.not.call(null,inst_21406);
var inst_21408 = (inst_21405) && (inst_21407);
var state_21428__$1 = state_21428;
var statearr_21466_21504 = state_21428__$1;
(statearr_21466_21504[(2)] = inst_21408);

(statearr_21466_21504[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (8))){
var inst_21372 = (state_21428[(7)]);
var state_21428__$1 = state_21428;
var statearr_21467_21505 = state_21428__$1;
(statearr_21467_21505[(2)] = inst_21372);

(statearr_21467_21505[(1)] = (9));


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
});})(c__6817__auto___21475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6761__auto__,c__6817__auto___21475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_21471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21471[(0)] = state_machine__6762__auto__);

(statearr_21471[(1)] = (1));

return statearr_21471;
});
var state_machine__6762__auto____1 = (function (state_21428){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_21428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e21472){if((e21472 instanceof Object)){
var ex__6765__auto__ = e21472;
var statearr_21473_21506 = state_21428;
(statearr_21473_21506[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21507 = state_21428;
state_21428 = G__21507;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_21428){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_21428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___21475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6819__auto__ = (function (){var statearr_21474 = f__6818__auto__.call(null);
(statearr_21474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___21475);

return statearr_21474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___21475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj21509 = {};
return obj21509;
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
return (function (p1__21510_SHARP_){
if(cljs.core.truth_(p1__21510_SHARP_.call(null,topic))){
return p1__21510_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21510_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21633 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21633 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21634){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21634 = meta21634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21633.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21633.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21633.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t21633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21633.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21635){
var self__ = this;
var _21635__$1 = this;
return self__.meta21634;
});})(mults,ensure_mult))
;

cljs.core.async.t21633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21635,meta21634__$1){
var self__ = this;
var _21635__$1 = this;
return (new cljs.core.async.t21633(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21634__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21633.cljs$lang$type = true;

cljs.core.async.t21633.cljs$lang$ctorStr = "cljs.core.async/t21633";

cljs.core.async.t21633.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t21633");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21633 = ((function (mults,ensure_mult){
return (function __GT_t21633(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21634){
return (new cljs.core.async.t21633(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21634));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21633(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__6817__auto___21755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___21755,mults,ensure_mult,p){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___21755,mults,ensure_mult,p){
return (function (state_21707){
var state_val_21708 = (state_21707[(1)]);
if((state_val_21708 === (7))){
var inst_21703 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21709_21756 = state_21707__$1;
(statearr_21709_21756[(2)] = inst_21703);

(statearr_21709_21756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (20))){
var state_21707__$1 = state_21707;
var statearr_21710_21757 = state_21707__$1;
(statearr_21710_21757[(2)] = null);

(statearr_21710_21757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (1))){
var state_21707__$1 = state_21707;
var statearr_21711_21758 = state_21707__$1;
(statearr_21711_21758[(2)] = null);

(statearr_21711_21758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (24))){
var inst_21686 = (state_21707[(7)]);
var inst_21695 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21686);
var state_21707__$1 = state_21707;
var statearr_21712_21759 = state_21707__$1;
(statearr_21712_21759[(2)] = inst_21695);

(statearr_21712_21759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (4))){
var inst_21638 = (state_21707[(8)]);
var inst_21638__$1 = (state_21707[(2)]);
var inst_21639 = (inst_21638__$1 == null);
var state_21707__$1 = (function (){var statearr_21713 = state_21707;
(statearr_21713[(8)] = inst_21638__$1);

return statearr_21713;
})();
if(cljs.core.truth_(inst_21639)){
var statearr_21714_21760 = state_21707__$1;
(statearr_21714_21760[(1)] = (5));

} else {
var statearr_21715_21761 = state_21707__$1;
(statearr_21715_21761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (15))){
var inst_21680 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21716_21762 = state_21707__$1;
(statearr_21716_21762[(2)] = inst_21680);

(statearr_21716_21762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (21))){
var inst_21700 = (state_21707[(2)]);
var state_21707__$1 = (function (){var statearr_21717 = state_21707;
(statearr_21717[(9)] = inst_21700);

return statearr_21717;
})();
var statearr_21718_21763 = state_21707__$1;
(statearr_21718_21763[(2)] = null);

(statearr_21718_21763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (13))){
var inst_21662 = (state_21707[(10)]);
var inst_21664 = cljs.core.chunked_seq_QMARK_.call(null,inst_21662);
var state_21707__$1 = state_21707;
if(inst_21664){
var statearr_21719_21764 = state_21707__$1;
(statearr_21719_21764[(1)] = (16));

} else {
var statearr_21720_21765 = state_21707__$1;
(statearr_21720_21765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (22))){
var inst_21692 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
if(cljs.core.truth_(inst_21692)){
var statearr_21721_21766 = state_21707__$1;
(statearr_21721_21766[(1)] = (23));

} else {
var statearr_21722_21767 = state_21707__$1;
(statearr_21722_21767[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (6))){
var inst_21686 = (state_21707[(7)]);
var inst_21688 = (state_21707[(11)]);
var inst_21638 = (state_21707[(8)]);
var inst_21686__$1 = topic_fn.call(null,inst_21638);
var inst_21687 = cljs.core.deref.call(null,mults);
var inst_21688__$1 = cljs.core.get.call(null,inst_21687,inst_21686__$1);
var state_21707__$1 = (function (){var statearr_21723 = state_21707;
(statearr_21723[(7)] = inst_21686__$1);

(statearr_21723[(11)] = inst_21688__$1);

return statearr_21723;
})();
if(cljs.core.truth_(inst_21688__$1)){
var statearr_21724_21768 = state_21707__$1;
(statearr_21724_21768[(1)] = (19));

} else {
var statearr_21725_21769 = state_21707__$1;
(statearr_21725_21769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (25))){
var inst_21697 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21726_21770 = state_21707__$1;
(statearr_21726_21770[(2)] = inst_21697);

(statearr_21726_21770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (17))){
var inst_21662 = (state_21707[(10)]);
var inst_21671 = cljs.core.first.call(null,inst_21662);
var inst_21672 = cljs.core.async.muxch_STAR_.call(null,inst_21671);
var inst_21673 = cljs.core.async.close_BANG_.call(null,inst_21672);
var inst_21674 = cljs.core.next.call(null,inst_21662);
var inst_21648 = inst_21674;
var inst_21649 = null;
var inst_21650 = (0);
var inst_21651 = (0);
var state_21707__$1 = (function (){var statearr_21727 = state_21707;
(statearr_21727[(12)] = inst_21649);

(statearr_21727[(13)] = inst_21650);

(statearr_21727[(14)] = inst_21648);

(statearr_21727[(15)] = inst_21673);

(statearr_21727[(16)] = inst_21651);

return statearr_21727;
})();
var statearr_21728_21771 = state_21707__$1;
(statearr_21728_21771[(2)] = null);

(statearr_21728_21771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (3))){
var inst_21705 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21707__$1,inst_21705);
} else {
if((state_val_21708 === (12))){
var inst_21682 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21729_21772 = state_21707__$1;
(statearr_21729_21772[(2)] = inst_21682);

(statearr_21729_21772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (2))){
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21707__$1,(4),ch);
} else {
if((state_val_21708 === (23))){
var state_21707__$1 = state_21707;
var statearr_21730_21773 = state_21707__$1;
(statearr_21730_21773[(2)] = null);

(statearr_21730_21773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (19))){
var inst_21688 = (state_21707[(11)]);
var inst_21638 = (state_21707[(8)]);
var inst_21690 = cljs.core.async.muxch_STAR_.call(null,inst_21688);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21707__$1,(22),inst_21690,inst_21638);
} else {
if((state_val_21708 === (11))){
var inst_21648 = (state_21707[(14)]);
var inst_21662 = (state_21707[(10)]);
var inst_21662__$1 = cljs.core.seq.call(null,inst_21648);
var state_21707__$1 = (function (){var statearr_21731 = state_21707;
(statearr_21731[(10)] = inst_21662__$1);

return statearr_21731;
})();
if(inst_21662__$1){
var statearr_21732_21774 = state_21707__$1;
(statearr_21732_21774[(1)] = (13));

} else {
var statearr_21733_21775 = state_21707__$1;
(statearr_21733_21775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (9))){
var inst_21684 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21734_21776 = state_21707__$1;
(statearr_21734_21776[(2)] = inst_21684);

(statearr_21734_21776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (5))){
var inst_21645 = cljs.core.deref.call(null,mults);
var inst_21646 = cljs.core.vals.call(null,inst_21645);
var inst_21647 = cljs.core.seq.call(null,inst_21646);
var inst_21648 = inst_21647;
var inst_21649 = null;
var inst_21650 = (0);
var inst_21651 = (0);
var state_21707__$1 = (function (){var statearr_21735 = state_21707;
(statearr_21735[(12)] = inst_21649);

(statearr_21735[(13)] = inst_21650);

(statearr_21735[(14)] = inst_21648);

(statearr_21735[(16)] = inst_21651);

return statearr_21735;
})();
var statearr_21736_21777 = state_21707__$1;
(statearr_21736_21777[(2)] = null);

(statearr_21736_21777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (14))){
var state_21707__$1 = state_21707;
var statearr_21740_21778 = state_21707__$1;
(statearr_21740_21778[(2)] = null);

(statearr_21740_21778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (16))){
var inst_21662 = (state_21707[(10)]);
var inst_21666 = cljs.core.chunk_first.call(null,inst_21662);
var inst_21667 = cljs.core.chunk_rest.call(null,inst_21662);
var inst_21668 = cljs.core.count.call(null,inst_21666);
var inst_21648 = inst_21667;
var inst_21649 = inst_21666;
var inst_21650 = inst_21668;
var inst_21651 = (0);
var state_21707__$1 = (function (){var statearr_21741 = state_21707;
(statearr_21741[(12)] = inst_21649);

(statearr_21741[(13)] = inst_21650);

(statearr_21741[(14)] = inst_21648);

(statearr_21741[(16)] = inst_21651);

return statearr_21741;
})();
var statearr_21742_21779 = state_21707__$1;
(statearr_21742_21779[(2)] = null);

(statearr_21742_21779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (10))){
var inst_21649 = (state_21707[(12)]);
var inst_21650 = (state_21707[(13)]);
var inst_21648 = (state_21707[(14)]);
var inst_21651 = (state_21707[(16)]);
var inst_21656 = cljs.core._nth.call(null,inst_21649,inst_21651);
var inst_21657 = cljs.core.async.muxch_STAR_.call(null,inst_21656);
var inst_21658 = cljs.core.async.close_BANG_.call(null,inst_21657);
var inst_21659 = (inst_21651 + (1));
var tmp21737 = inst_21649;
var tmp21738 = inst_21650;
var tmp21739 = inst_21648;
var inst_21648__$1 = tmp21739;
var inst_21649__$1 = tmp21737;
var inst_21650__$1 = tmp21738;
var inst_21651__$1 = inst_21659;
var state_21707__$1 = (function (){var statearr_21743 = state_21707;
(statearr_21743[(17)] = inst_21658);

(statearr_21743[(12)] = inst_21649__$1);

(statearr_21743[(13)] = inst_21650__$1);

(statearr_21743[(14)] = inst_21648__$1);

(statearr_21743[(16)] = inst_21651__$1);

return statearr_21743;
})();
var statearr_21744_21780 = state_21707__$1;
(statearr_21744_21780[(2)] = null);

(statearr_21744_21780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (18))){
var inst_21677 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21745_21781 = state_21707__$1;
(statearr_21745_21781[(2)] = inst_21677);

(statearr_21745_21781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (8))){
var inst_21650 = (state_21707[(13)]);
var inst_21651 = (state_21707[(16)]);
var inst_21653 = (inst_21651 < inst_21650);
var inst_21654 = inst_21653;
var state_21707__$1 = state_21707;
if(cljs.core.truth_(inst_21654)){
var statearr_21746_21782 = state_21707__$1;
(statearr_21746_21782[(1)] = (10));

} else {
var statearr_21747_21783 = state_21707__$1;
(statearr_21747_21783[(1)] = (11));

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
});})(c__6817__auto___21755,mults,ensure_mult,p))
;
return ((function (switch__6761__auto__,c__6817__auto___21755,mults,ensure_mult,p){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_21751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21751[(0)] = state_machine__6762__auto__);

(statearr_21751[(1)] = (1));

return statearr_21751;
});
var state_machine__6762__auto____1 = (function (state_21707){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_21707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e21752){if((e21752 instanceof Object)){
var ex__6765__auto__ = e21752;
var statearr_21753_21784 = state_21707;
(statearr_21753_21784[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21785 = state_21707;
state_21707 = G__21785;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_21707){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_21707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___21755,mults,ensure_mult,p))
})();
var state__6819__auto__ = (function (){var statearr_21754 = f__6818__auto__.call(null);
(statearr_21754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___21755);

return statearr_21754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___21755,mults,ensure_mult,p))
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
var c__6817__auto___21922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___21922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___21922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21892){
var state_val_21893 = (state_21892[(1)]);
if((state_val_21893 === (7))){
var state_21892__$1 = state_21892;
var statearr_21894_21923 = state_21892__$1;
(statearr_21894_21923[(2)] = null);

(statearr_21894_21923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (1))){
var state_21892__$1 = state_21892;
var statearr_21895_21924 = state_21892__$1;
(statearr_21895_21924[(2)] = null);

(statearr_21895_21924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (4))){
var inst_21856 = (state_21892[(7)]);
var inst_21858 = (inst_21856 < cnt);
var state_21892__$1 = state_21892;
if(cljs.core.truth_(inst_21858)){
var statearr_21896_21925 = state_21892__$1;
(statearr_21896_21925[(1)] = (6));

} else {
var statearr_21897_21926 = state_21892__$1;
(statearr_21897_21926[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (15))){
var inst_21888 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21898_21927 = state_21892__$1;
(statearr_21898_21927[(2)] = inst_21888);

(statearr_21898_21927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (13))){
var inst_21881 = cljs.core.async.close_BANG_.call(null,out);
var state_21892__$1 = state_21892;
var statearr_21899_21928 = state_21892__$1;
(statearr_21899_21928[(2)] = inst_21881);

(statearr_21899_21928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (6))){
var state_21892__$1 = state_21892;
var statearr_21900_21929 = state_21892__$1;
(statearr_21900_21929[(2)] = null);

(statearr_21900_21929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (3))){
var inst_21890 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21892__$1,inst_21890);
} else {
if((state_val_21893 === (12))){
var inst_21878 = (state_21892[(8)]);
var inst_21878__$1 = (state_21892[(2)]);
var inst_21879 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21878__$1);
var state_21892__$1 = (function (){var statearr_21901 = state_21892;
(statearr_21901[(8)] = inst_21878__$1);

return statearr_21901;
})();
if(cljs.core.truth_(inst_21879)){
var statearr_21902_21930 = state_21892__$1;
(statearr_21902_21930[(1)] = (13));

} else {
var statearr_21903_21931 = state_21892__$1;
(statearr_21903_21931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (2))){
var inst_21855 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21856 = (0);
var state_21892__$1 = (function (){var statearr_21904 = state_21892;
(statearr_21904[(7)] = inst_21856);

(statearr_21904[(9)] = inst_21855);

return statearr_21904;
})();
var statearr_21905_21932 = state_21892__$1;
(statearr_21905_21932[(2)] = null);

(statearr_21905_21932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (11))){
var inst_21856 = (state_21892[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21892,(10),Object,null,(9));
var inst_21865 = chs__$1.call(null,inst_21856);
var inst_21866 = done.call(null,inst_21856);
var inst_21867 = cljs.core.async.take_BANG_.call(null,inst_21865,inst_21866);
var state_21892__$1 = state_21892;
var statearr_21906_21933 = state_21892__$1;
(statearr_21906_21933[(2)] = inst_21867);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (9))){
var inst_21856 = (state_21892[(7)]);
var inst_21869 = (state_21892[(2)]);
var inst_21870 = (inst_21856 + (1));
var inst_21856__$1 = inst_21870;
var state_21892__$1 = (function (){var statearr_21907 = state_21892;
(statearr_21907[(7)] = inst_21856__$1);

(statearr_21907[(10)] = inst_21869);

return statearr_21907;
})();
var statearr_21908_21934 = state_21892__$1;
(statearr_21908_21934[(2)] = null);

(statearr_21908_21934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (5))){
var inst_21876 = (state_21892[(2)]);
var state_21892__$1 = (function (){var statearr_21909 = state_21892;
(statearr_21909[(11)] = inst_21876);

return statearr_21909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21892__$1,(12),dchan);
} else {
if((state_val_21893 === (14))){
var inst_21878 = (state_21892[(8)]);
var inst_21883 = cljs.core.apply.call(null,f,inst_21878);
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21892__$1,(16),out,inst_21883);
} else {
if((state_val_21893 === (16))){
var inst_21885 = (state_21892[(2)]);
var state_21892__$1 = (function (){var statearr_21910 = state_21892;
(statearr_21910[(12)] = inst_21885);

return statearr_21910;
})();
var statearr_21911_21935 = state_21892__$1;
(statearr_21911_21935[(2)] = null);

(statearr_21911_21935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (10))){
var inst_21860 = (state_21892[(2)]);
var inst_21861 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21892__$1 = (function (){var statearr_21912 = state_21892;
(statearr_21912[(13)] = inst_21860);

return statearr_21912;
})();
var statearr_21913_21936 = state_21892__$1;
(statearr_21913_21936[(2)] = inst_21861);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (8))){
var inst_21874 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21914_21937 = state_21892__$1;
(statearr_21914_21937[(2)] = inst_21874);

(statearr_21914_21937[(1)] = (5));


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
});})(c__6817__auto___21922,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6761__auto__,c__6817__auto___21922,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_21918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21918[(0)] = state_machine__6762__auto__);

(statearr_21918[(1)] = (1));

return statearr_21918;
});
var state_machine__6762__auto____1 = (function (state_21892){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_21892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e21919){if((e21919 instanceof Object)){
var ex__6765__auto__ = e21919;
var statearr_21920_21938 = state_21892;
(statearr_21920_21938[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21939 = state_21892;
state_21892 = G__21939;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_21892){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_21892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___21922,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6819__auto__ = (function (){var statearr_21921 = f__6818__auto__.call(null);
(statearr_21921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___21922);

return statearr_21921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___21922,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6817__auto___22047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___22047,out){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___22047,out){
return (function (state_22023){
var state_val_22024 = (state_22023[(1)]);
if((state_val_22024 === (7))){
var inst_22003 = (state_22023[(7)]);
var inst_22002 = (state_22023[(8)]);
var inst_22002__$1 = (state_22023[(2)]);
var inst_22003__$1 = cljs.core.nth.call(null,inst_22002__$1,(0),null);
var inst_22004 = cljs.core.nth.call(null,inst_22002__$1,(1),null);
var inst_22005 = (inst_22003__$1 == null);
var state_22023__$1 = (function (){var statearr_22025 = state_22023;
(statearr_22025[(7)] = inst_22003__$1);

(statearr_22025[(8)] = inst_22002__$1);

(statearr_22025[(9)] = inst_22004);

return statearr_22025;
})();
if(cljs.core.truth_(inst_22005)){
var statearr_22026_22048 = state_22023__$1;
(statearr_22026_22048[(1)] = (8));

} else {
var statearr_22027_22049 = state_22023__$1;
(statearr_22027_22049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (1))){
var inst_21994 = cljs.core.vec.call(null,chs);
var inst_21995 = inst_21994;
var state_22023__$1 = (function (){var statearr_22028 = state_22023;
(statearr_22028[(10)] = inst_21995);

return statearr_22028;
})();
var statearr_22029_22050 = state_22023__$1;
(statearr_22029_22050[(2)] = null);

(statearr_22029_22050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (4))){
var inst_21995 = (state_22023[(10)]);
var state_22023__$1 = state_22023;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22023__$1,(7),inst_21995);
} else {
if((state_val_22024 === (6))){
var inst_22019 = (state_22023[(2)]);
var state_22023__$1 = state_22023;
var statearr_22030_22051 = state_22023__$1;
(statearr_22030_22051[(2)] = inst_22019);

(statearr_22030_22051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (3))){
var inst_22021 = (state_22023[(2)]);
var state_22023__$1 = state_22023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22023__$1,inst_22021);
} else {
if((state_val_22024 === (2))){
var inst_21995 = (state_22023[(10)]);
var inst_21997 = cljs.core.count.call(null,inst_21995);
var inst_21998 = (inst_21997 > (0));
var state_22023__$1 = state_22023;
if(cljs.core.truth_(inst_21998)){
var statearr_22032_22052 = state_22023__$1;
(statearr_22032_22052[(1)] = (4));

} else {
var statearr_22033_22053 = state_22023__$1;
(statearr_22033_22053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (11))){
var inst_21995 = (state_22023[(10)]);
var inst_22012 = (state_22023[(2)]);
var tmp22031 = inst_21995;
var inst_21995__$1 = tmp22031;
var state_22023__$1 = (function (){var statearr_22034 = state_22023;
(statearr_22034[(11)] = inst_22012);

(statearr_22034[(10)] = inst_21995__$1);

return statearr_22034;
})();
var statearr_22035_22054 = state_22023__$1;
(statearr_22035_22054[(2)] = null);

(statearr_22035_22054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (9))){
var inst_22003 = (state_22023[(7)]);
var state_22023__$1 = state_22023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22023__$1,(11),out,inst_22003);
} else {
if((state_val_22024 === (5))){
var inst_22017 = cljs.core.async.close_BANG_.call(null,out);
var state_22023__$1 = state_22023;
var statearr_22036_22055 = state_22023__$1;
(statearr_22036_22055[(2)] = inst_22017);

(statearr_22036_22055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (10))){
var inst_22015 = (state_22023[(2)]);
var state_22023__$1 = state_22023;
var statearr_22037_22056 = state_22023__$1;
(statearr_22037_22056[(2)] = inst_22015);

(statearr_22037_22056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (8))){
var inst_22003 = (state_22023[(7)]);
var inst_22002 = (state_22023[(8)]);
var inst_21995 = (state_22023[(10)]);
var inst_22004 = (state_22023[(9)]);
var inst_22007 = (function (){var c = inst_22004;
var v = inst_22003;
var vec__22000 = inst_22002;
var cs = inst_21995;
return ((function (c,v,vec__22000,cs,inst_22003,inst_22002,inst_21995,inst_22004,state_val_22024,c__6817__auto___22047,out){
return (function (p1__21940_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21940_SHARP_);
});
;})(c,v,vec__22000,cs,inst_22003,inst_22002,inst_21995,inst_22004,state_val_22024,c__6817__auto___22047,out))
})();
var inst_22008 = cljs.core.filterv.call(null,inst_22007,inst_21995);
var inst_21995__$1 = inst_22008;
var state_22023__$1 = (function (){var statearr_22038 = state_22023;
(statearr_22038[(10)] = inst_21995__$1);

return statearr_22038;
})();
var statearr_22039_22057 = state_22023__$1;
(statearr_22039_22057[(2)] = null);

(statearr_22039_22057[(1)] = (2));


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
});})(c__6817__auto___22047,out))
;
return ((function (switch__6761__auto__,c__6817__auto___22047,out){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_22043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22043[(0)] = state_machine__6762__auto__);

(statearr_22043[(1)] = (1));

return statearr_22043;
});
var state_machine__6762__auto____1 = (function (state_22023){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_22023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e22044){if((e22044 instanceof Object)){
var ex__6765__auto__ = e22044;
var statearr_22045_22058 = state_22023;
(statearr_22045_22058[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22059 = state_22023;
state_22023 = G__22059;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_22023){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_22023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___22047,out))
})();
var state__6819__auto__ = (function (){var statearr_22046 = f__6818__auto__.call(null);
(statearr_22046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___22047);

return statearr_22046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___22047,out))
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
var c__6817__auto___22152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___22152,out){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___22152,out){
return (function (state_22129){
var state_val_22130 = (state_22129[(1)]);
if((state_val_22130 === (7))){
var inst_22111 = (state_22129[(7)]);
var inst_22111__$1 = (state_22129[(2)]);
var inst_22112 = (inst_22111__$1 == null);
var inst_22113 = cljs.core.not.call(null,inst_22112);
var state_22129__$1 = (function (){var statearr_22131 = state_22129;
(statearr_22131[(7)] = inst_22111__$1);

return statearr_22131;
})();
if(inst_22113){
var statearr_22132_22153 = state_22129__$1;
(statearr_22132_22153[(1)] = (8));

} else {
var statearr_22133_22154 = state_22129__$1;
(statearr_22133_22154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (1))){
var inst_22106 = (0);
var state_22129__$1 = (function (){var statearr_22134 = state_22129;
(statearr_22134[(8)] = inst_22106);

return statearr_22134;
})();
var statearr_22135_22155 = state_22129__$1;
(statearr_22135_22155[(2)] = null);

(statearr_22135_22155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (4))){
var state_22129__$1 = state_22129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22129__$1,(7),ch);
} else {
if((state_val_22130 === (6))){
var inst_22124 = (state_22129[(2)]);
var state_22129__$1 = state_22129;
var statearr_22136_22156 = state_22129__$1;
(statearr_22136_22156[(2)] = inst_22124);

(statearr_22136_22156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (3))){
var inst_22126 = (state_22129[(2)]);
var inst_22127 = cljs.core.async.close_BANG_.call(null,out);
var state_22129__$1 = (function (){var statearr_22137 = state_22129;
(statearr_22137[(9)] = inst_22126);

return statearr_22137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22129__$1,inst_22127);
} else {
if((state_val_22130 === (2))){
var inst_22106 = (state_22129[(8)]);
var inst_22108 = (inst_22106 < n);
var state_22129__$1 = state_22129;
if(cljs.core.truth_(inst_22108)){
var statearr_22138_22157 = state_22129__$1;
(statearr_22138_22157[(1)] = (4));

} else {
var statearr_22139_22158 = state_22129__$1;
(statearr_22139_22158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (11))){
var inst_22106 = (state_22129[(8)]);
var inst_22116 = (state_22129[(2)]);
var inst_22117 = (inst_22106 + (1));
var inst_22106__$1 = inst_22117;
var state_22129__$1 = (function (){var statearr_22140 = state_22129;
(statearr_22140[(10)] = inst_22116);

(statearr_22140[(8)] = inst_22106__$1);

return statearr_22140;
})();
var statearr_22141_22159 = state_22129__$1;
(statearr_22141_22159[(2)] = null);

(statearr_22141_22159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (9))){
var state_22129__$1 = state_22129;
var statearr_22142_22160 = state_22129__$1;
(statearr_22142_22160[(2)] = null);

(statearr_22142_22160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (5))){
var state_22129__$1 = state_22129;
var statearr_22143_22161 = state_22129__$1;
(statearr_22143_22161[(2)] = null);

(statearr_22143_22161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (10))){
var inst_22121 = (state_22129[(2)]);
var state_22129__$1 = state_22129;
var statearr_22144_22162 = state_22129__$1;
(statearr_22144_22162[(2)] = inst_22121);

(statearr_22144_22162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22130 === (8))){
var inst_22111 = (state_22129[(7)]);
var state_22129__$1 = state_22129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22129__$1,(11),out,inst_22111);
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
});})(c__6817__auto___22152,out))
;
return ((function (switch__6761__auto__,c__6817__auto___22152,out){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_22148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22148[(0)] = state_machine__6762__auto__);

(statearr_22148[(1)] = (1));

return statearr_22148;
});
var state_machine__6762__auto____1 = (function (state_22129){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_22129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e22149){if((e22149 instanceof Object)){
var ex__6765__auto__ = e22149;
var statearr_22150_22163 = state_22129;
(statearr_22150_22163[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22164 = state_22129;
state_22129 = G__22164;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_22129){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_22129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___22152,out))
})();
var state__6819__auto__ = (function (){var statearr_22151 = f__6818__auto__.call(null);
(statearr_22151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___22152);

return statearr_22151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___22152,out))
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
if(typeof cljs.core.async.t22172 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22172 = (function (ch,f,map_LT_,meta22173){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22173 = meta22173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22175 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22175 = (function (fn1,_,meta22173,map_LT_,f,ch,meta22176){
this.fn1 = fn1;
this._ = _;
this.meta22173 = meta22173;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22176 = meta22176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22175.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22165_SHARP_){
return f1.call(null,(((p1__22165_SHARP_ == null))?null:self__.f.call(null,p1__22165_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22177){
var self__ = this;
var _22177__$1 = this;
return self__.meta22176;
});})(___$1))
;

cljs.core.async.t22175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22177,meta22176__$1){
var self__ = this;
var _22177__$1 = this;
return (new cljs.core.async.t22175(self__.fn1,self__._,self__.meta22173,self__.map_LT_,self__.f,self__.ch,meta22176__$1));
});})(___$1))
;

cljs.core.async.t22175.cljs$lang$type = true;

cljs.core.async.t22175.cljs$lang$ctorStr = "cljs.core.async/t22175";

cljs.core.async.t22175.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22175");
});})(___$1))
;

cljs.core.async.__GT_t22175 = ((function (___$1){
return (function __GT_t22175(fn1__$1,___$2,meta22173__$1,map_LT___$1,f__$1,ch__$1,meta22176){
return (new cljs.core.async.t22175(fn1__$1,___$2,meta22173__$1,map_LT___$1,f__$1,ch__$1,meta22176));
});})(___$1))
;

}

return (new cljs.core.async.t22175(fn1,___$1,self__.meta22173,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22174){
var self__ = this;
var _22174__$1 = this;
return self__.meta22173;
});

cljs.core.async.t22172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22174,meta22173__$1){
var self__ = this;
var _22174__$1 = this;
return (new cljs.core.async.t22172(self__.ch,self__.f,self__.map_LT_,meta22173__$1));
});

cljs.core.async.t22172.cljs$lang$type = true;

cljs.core.async.t22172.cljs$lang$ctorStr = "cljs.core.async/t22172";

cljs.core.async.t22172.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22172");
});

cljs.core.async.__GT_t22172 = (function __GT_t22172(ch__$1,f__$1,map_LT___$1,meta22173){
return (new cljs.core.async.t22172(ch__$1,f__$1,map_LT___$1,meta22173));
});

}

return (new cljs.core.async.t22172(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22181 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22181 = (function (ch,f,map_GT_,meta22182){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22182 = meta22182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22181.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22181.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22181.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22183){
var self__ = this;
var _22183__$1 = this;
return self__.meta22182;
});

cljs.core.async.t22181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22183,meta22182__$1){
var self__ = this;
var _22183__$1 = this;
return (new cljs.core.async.t22181(self__.ch,self__.f,self__.map_GT_,meta22182__$1));
});

cljs.core.async.t22181.cljs$lang$type = true;

cljs.core.async.t22181.cljs$lang$ctorStr = "cljs.core.async/t22181";

cljs.core.async.t22181.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22181");
});

cljs.core.async.__GT_t22181 = (function __GT_t22181(ch__$1,f__$1,map_GT___$1,meta22182){
return (new cljs.core.async.t22181(ch__$1,f__$1,map_GT___$1,meta22182));
});

}

return (new cljs.core.async.t22181(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22187 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22187 = (function (ch,p,filter_GT_,meta22188){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22188 = meta22188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22187.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22189){
var self__ = this;
var _22189__$1 = this;
return self__.meta22188;
});

cljs.core.async.t22187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22189,meta22188__$1){
var self__ = this;
var _22189__$1 = this;
return (new cljs.core.async.t22187(self__.ch,self__.p,self__.filter_GT_,meta22188__$1));
});

cljs.core.async.t22187.cljs$lang$type = true;

cljs.core.async.t22187.cljs$lang$ctorStr = "cljs.core.async/t22187";

cljs.core.async.t22187.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t22187");
});

cljs.core.async.__GT_t22187 = (function __GT_t22187(ch__$1,p__$1,filter_GT___$1,meta22188){
return (new cljs.core.async.t22187(ch__$1,p__$1,filter_GT___$1,meta22188));
});

}

return (new cljs.core.async.t22187(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__6817__auto___22272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___22272,out){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___22272,out){
return (function (state_22251){
var state_val_22252 = (state_22251[(1)]);
if((state_val_22252 === (7))){
var inst_22247 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22253_22273 = state_22251__$1;
(statearr_22253_22273[(2)] = inst_22247);

(statearr_22253_22273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (1))){
var state_22251__$1 = state_22251;
var statearr_22254_22274 = state_22251__$1;
(statearr_22254_22274[(2)] = null);

(statearr_22254_22274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (4))){
var inst_22233 = (state_22251[(7)]);
var inst_22233__$1 = (state_22251[(2)]);
var inst_22234 = (inst_22233__$1 == null);
var state_22251__$1 = (function (){var statearr_22255 = state_22251;
(statearr_22255[(7)] = inst_22233__$1);

return statearr_22255;
})();
if(cljs.core.truth_(inst_22234)){
var statearr_22256_22275 = state_22251__$1;
(statearr_22256_22275[(1)] = (5));

} else {
var statearr_22257_22276 = state_22251__$1;
(statearr_22257_22276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (6))){
var inst_22233 = (state_22251[(7)]);
var inst_22238 = p.call(null,inst_22233);
var state_22251__$1 = state_22251;
if(cljs.core.truth_(inst_22238)){
var statearr_22258_22277 = state_22251__$1;
(statearr_22258_22277[(1)] = (8));

} else {
var statearr_22259_22278 = state_22251__$1;
(statearr_22259_22278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (3))){
var inst_22249 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22251__$1,inst_22249);
} else {
if((state_val_22252 === (2))){
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22251__$1,(4),ch);
} else {
if((state_val_22252 === (11))){
var inst_22241 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22260_22279 = state_22251__$1;
(statearr_22260_22279[(2)] = inst_22241);

(statearr_22260_22279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (9))){
var state_22251__$1 = state_22251;
var statearr_22261_22280 = state_22251__$1;
(statearr_22261_22280[(2)] = null);

(statearr_22261_22280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (5))){
var inst_22236 = cljs.core.async.close_BANG_.call(null,out);
var state_22251__$1 = state_22251;
var statearr_22262_22281 = state_22251__$1;
(statearr_22262_22281[(2)] = inst_22236);

(statearr_22262_22281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (10))){
var inst_22244 = (state_22251[(2)]);
var state_22251__$1 = (function (){var statearr_22263 = state_22251;
(statearr_22263[(8)] = inst_22244);

return statearr_22263;
})();
var statearr_22264_22282 = state_22251__$1;
(statearr_22264_22282[(2)] = null);

(statearr_22264_22282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (8))){
var inst_22233 = (state_22251[(7)]);
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22251__$1,(11),out,inst_22233);
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
});})(c__6817__auto___22272,out))
;
return ((function (switch__6761__auto__,c__6817__auto___22272,out){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_22268 = [null,null,null,null,null,null,null,null,null];
(statearr_22268[(0)] = state_machine__6762__auto__);

(statearr_22268[(1)] = (1));

return statearr_22268;
});
var state_machine__6762__auto____1 = (function (state_22251){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_22251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e22269){if((e22269 instanceof Object)){
var ex__6765__auto__ = e22269;
var statearr_22270_22283 = state_22251;
(statearr_22270_22283[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22284 = state_22251;
state_22251 = G__22284;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_22251){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_22251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___22272,out))
})();
var state__6819__auto__ = (function (){var statearr_22271 = f__6818__auto__.call(null);
(statearr_22271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___22272);

return statearr_22271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___22272,out))
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
var c__6817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto__){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto__){
return (function (state_22450){
var state_val_22451 = (state_22450[(1)]);
if((state_val_22451 === (7))){
var inst_22446 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22452_22493 = state_22450__$1;
(statearr_22452_22493[(2)] = inst_22446);

(statearr_22452_22493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (20))){
var inst_22416 = (state_22450[(7)]);
var inst_22427 = (state_22450[(2)]);
var inst_22428 = cljs.core.next.call(null,inst_22416);
var inst_22402 = inst_22428;
var inst_22403 = null;
var inst_22404 = (0);
var inst_22405 = (0);
var state_22450__$1 = (function (){var statearr_22453 = state_22450;
(statearr_22453[(8)] = inst_22403);

(statearr_22453[(9)] = inst_22405);

(statearr_22453[(10)] = inst_22402);

(statearr_22453[(11)] = inst_22404);

(statearr_22453[(12)] = inst_22427);

return statearr_22453;
})();
var statearr_22454_22494 = state_22450__$1;
(statearr_22454_22494[(2)] = null);

(statearr_22454_22494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (1))){
var state_22450__$1 = state_22450;
var statearr_22455_22495 = state_22450__$1;
(statearr_22455_22495[(2)] = null);

(statearr_22455_22495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (4))){
var inst_22391 = (state_22450[(13)]);
var inst_22391__$1 = (state_22450[(2)]);
var inst_22392 = (inst_22391__$1 == null);
var state_22450__$1 = (function (){var statearr_22456 = state_22450;
(statearr_22456[(13)] = inst_22391__$1);

return statearr_22456;
})();
if(cljs.core.truth_(inst_22392)){
var statearr_22457_22496 = state_22450__$1;
(statearr_22457_22496[(1)] = (5));

} else {
var statearr_22458_22497 = state_22450__$1;
(statearr_22458_22497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (15))){
var state_22450__$1 = state_22450;
var statearr_22462_22498 = state_22450__$1;
(statearr_22462_22498[(2)] = null);

(statearr_22462_22498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (21))){
var state_22450__$1 = state_22450;
var statearr_22463_22499 = state_22450__$1;
(statearr_22463_22499[(2)] = null);

(statearr_22463_22499[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (13))){
var inst_22403 = (state_22450[(8)]);
var inst_22405 = (state_22450[(9)]);
var inst_22402 = (state_22450[(10)]);
var inst_22404 = (state_22450[(11)]);
var inst_22412 = (state_22450[(2)]);
var inst_22413 = (inst_22405 + (1));
var tmp22459 = inst_22403;
var tmp22460 = inst_22402;
var tmp22461 = inst_22404;
var inst_22402__$1 = tmp22460;
var inst_22403__$1 = tmp22459;
var inst_22404__$1 = tmp22461;
var inst_22405__$1 = inst_22413;
var state_22450__$1 = (function (){var statearr_22464 = state_22450;
(statearr_22464[(14)] = inst_22412);

(statearr_22464[(8)] = inst_22403__$1);

(statearr_22464[(9)] = inst_22405__$1);

(statearr_22464[(10)] = inst_22402__$1);

(statearr_22464[(11)] = inst_22404__$1);

return statearr_22464;
})();
var statearr_22465_22500 = state_22450__$1;
(statearr_22465_22500[(2)] = null);

(statearr_22465_22500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (22))){
var state_22450__$1 = state_22450;
var statearr_22466_22501 = state_22450__$1;
(statearr_22466_22501[(2)] = null);

(statearr_22466_22501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (6))){
var inst_22391 = (state_22450[(13)]);
var inst_22400 = f.call(null,inst_22391);
var inst_22401 = cljs.core.seq.call(null,inst_22400);
var inst_22402 = inst_22401;
var inst_22403 = null;
var inst_22404 = (0);
var inst_22405 = (0);
var state_22450__$1 = (function (){var statearr_22467 = state_22450;
(statearr_22467[(8)] = inst_22403);

(statearr_22467[(9)] = inst_22405);

(statearr_22467[(10)] = inst_22402);

(statearr_22467[(11)] = inst_22404);

return statearr_22467;
})();
var statearr_22468_22502 = state_22450__$1;
(statearr_22468_22502[(2)] = null);

(statearr_22468_22502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (17))){
var inst_22416 = (state_22450[(7)]);
var inst_22420 = cljs.core.chunk_first.call(null,inst_22416);
var inst_22421 = cljs.core.chunk_rest.call(null,inst_22416);
var inst_22422 = cljs.core.count.call(null,inst_22420);
var inst_22402 = inst_22421;
var inst_22403 = inst_22420;
var inst_22404 = inst_22422;
var inst_22405 = (0);
var state_22450__$1 = (function (){var statearr_22469 = state_22450;
(statearr_22469[(8)] = inst_22403);

(statearr_22469[(9)] = inst_22405);

(statearr_22469[(10)] = inst_22402);

(statearr_22469[(11)] = inst_22404);

return statearr_22469;
})();
var statearr_22470_22503 = state_22450__$1;
(statearr_22470_22503[(2)] = null);

(statearr_22470_22503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (3))){
var inst_22448 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22450__$1,inst_22448);
} else {
if((state_val_22451 === (12))){
var inst_22436 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22471_22504 = state_22450__$1;
(statearr_22471_22504[(2)] = inst_22436);

(statearr_22471_22504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (2))){
var state_22450__$1 = state_22450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22450__$1,(4),in$);
} else {
if((state_val_22451 === (23))){
var inst_22444 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22472_22505 = state_22450__$1;
(statearr_22472_22505[(2)] = inst_22444);

(statearr_22472_22505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (19))){
var inst_22431 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22473_22506 = state_22450__$1;
(statearr_22473_22506[(2)] = inst_22431);

(statearr_22473_22506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (11))){
var inst_22416 = (state_22450[(7)]);
var inst_22402 = (state_22450[(10)]);
var inst_22416__$1 = cljs.core.seq.call(null,inst_22402);
var state_22450__$1 = (function (){var statearr_22474 = state_22450;
(statearr_22474[(7)] = inst_22416__$1);

return statearr_22474;
})();
if(inst_22416__$1){
var statearr_22475_22507 = state_22450__$1;
(statearr_22475_22507[(1)] = (14));

} else {
var statearr_22476_22508 = state_22450__$1;
(statearr_22476_22508[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (9))){
var inst_22438 = (state_22450[(2)]);
var inst_22439 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22450__$1 = (function (){var statearr_22477 = state_22450;
(statearr_22477[(15)] = inst_22438);

return statearr_22477;
})();
if(cljs.core.truth_(inst_22439)){
var statearr_22478_22509 = state_22450__$1;
(statearr_22478_22509[(1)] = (21));

} else {
var statearr_22479_22510 = state_22450__$1;
(statearr_22479_22510[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (5))){
var inst_22394 = cljs.core.async.close_BANG_.call(null,out);
var state_22450__$1 = state_22450;
var statearr_22480_22511 = state_22450__$1;
(statearr_22480_22511[(2)] = inst_22394);

(statearr_22480_22511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (14))){
var inst_22416 = (state_22450[(7)]);
var inst_22418 = cljs.core.chunked_seq_QMARK_.call(null,inst_22416);
var state_22450__$1 = state_22450;
if(inst_22418){
var statearr_22481_22512 = state_22450__$1;
(statearr_22481_22512[(1)] = (17));

} else {
var statearr_22482_22513 = state_22450__$1;
(statearr_22482_22513[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (16))){
var inst_22434 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22483_22514 = state_22450__$1;
(statearr_22483_22514[(2)] = inst_22434);

(statearr_22483_22514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (10))){
var inst_22403 = (state_22450[(8)]);
var inst_22405 = (state_22450[(9)]);
var inst_22410 = cljs.core._nth.call(null,inst_22403,inst_22405);
var state_22450__$1 = state_22450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22450__$1,(13),out,inst_22410);
} else {
if((state_val_22451 === (18))){
var inst_22416 = (state_22450[(7)]);
var inst_22425 = cljs.core.first.call(null,inst_22416);
var state_22450__$1 = state_22450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22450__$1,(20),out,inst_22425);
} else {
if((state_val_22451 === (8))){
var inst_22405 = (state_22450[(9)]);
var inst_22404 = (state_22450[(11)]);
var inst_22407 = (inst_22405 < inst_22404);
var inst_22408 = inst_22407;
var state_22450__$1 = state_22450;
if(cljs.core.truth_(inst_22408)){
var statearr_22484_22515 = state_22450__$1;
(statearr_22484_22515[(1)] = (10));

} else {
var statearr_22485_22516 = state_22450__$1;
(statearr_22485_22516[(1)] = (11));

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
});})(c__6817__auto__))
;
return ((function (switch__6761__auto__,c__6817__auto__){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_22489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22489[(0)] = state_machine__6762__auto__);

(statearr_22489[(1)] = (1));

return statearr_22489;
});
var state_machine__6762__auto____1 = (function (state_22450){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_22450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e22490){if((e22490 instanceof Object)){
var ex__6765__auto__ = e22490;
var statearr_22491_22517 = state_22450;
(statearr_22491_22517[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22518 = state_22450;
state_22450 = G__22518;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_22450){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_22450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto__))
})();
var state__6819__auto__ = (function (){var statearr_22492 = f__6818__auto__.call(null);
(statearr_22492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto__);

return statearr_22492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto__))
);

return c__6817__auto__;
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
var c__6817__auto___22615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___22615,out){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___22615,out){
return (function (state_22590){
var state_val_22591 = (state_22590[(1)]);
if((state_val_22591 === (7))){
var inst_22585 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22592_22616 = state_22590__$1;
(statearr_22592_22616[(2)] = inst_22585);

(statearr_22592_22616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (1))){
var inst_22567 = null;
var state_22590__$1 = (function (){var statearr_22593 = state_22590;
(statearr_22593[(7)] = inst_22567);

return statearr_22593;
})();
var statearr_22594_22617 = state_22590__$1;
(statearr_22594_22617[(2)] = null);

(statearr_22594_22617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (4))){
var inst_22570 = (state_22590[(8)]);
var inst_22570__$1 = (state_22590[(2)]);
var inst_22571 = (inst_22570__$1 == null);
var inst_22572 = cljs.core.not.call(null,inst_22571);
var state_22590__$1 = (function (){var statearr_22595 = state_22590;
(statearr_22595[(8)] = inst_22570__$1);

return statearr_22595;
})();
if(inst_22572){
var statearr_22596_22618 = state_22590__$1;
(statearr_22596_22618[(1)] = (5));

} else {
var statearr_22597_22619 = state_22590__$1;
(statearr_22597_22619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (6))){
var state_22590__$1 = state_22590;
var statearr_22598_22620 = state_22590__$1;
(statearr_22598_22620[(2)] = null);

(statearr_22598_22620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (3))){
var inst_22587 = (state_22590[(2)]);
var inst_22588 = cljs.core.async.close_BANG_.call(null,out);
var state_22590__$1 = (function (){var statearr_22599 = state_22590;
(statearr_22599[(9)] = inst_22587);

return statearr_22599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22590__$1,inst_22588);
} else {
if((state_val_22591 === (2))){
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(4),ch);
} else {
if((state_val_22591 === (11))){
var inst_22570 = (state_22590[(8)]);
var inst_22579 = (state_22590[(2)]);
var inst_22567 = inst_22570;
var state_22590__$1 = (function (){var statearr_22600 = state_22590;
(statearr_22600[(10)] = inst_22579);

(statearr_22600[(7)] = inst_22567);

return statearr_22600;
})();
var statearr_22601_22621 = state_22590__$1;
(statearr_22601_22621[(2)] = null);

(statearr_22601_22621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (9))){
var inst_22570 = (state_22590[(8)]);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22590__$1,(11),out,inst_22570);
} else {
if((state_val_22591 === (5))){
var inst_22567 = (state_22590[(7)]);
var inst_22570 = (state_22590[(8)]);
var inst_22574 = cljs.core._EQ_.call(null,inst_22570,inst_22567);
var state_22590__$1 = state_22590;
if(inst_22574){
var statearr_22603_22622 = state_22590__$1;
(statearr_22603_22622[(1)] = (8));

} else {
var statearr_22604_22623 = state_22590__$1;
(statearr_22604_22623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (10))){
var inst_22582 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22605_22624 = state_22590__$1;
(statearr_22605_22624[(2)] = inst_22582);

(statearr_22605_22624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (8))){
var inst_22567 = (state_22590[(7)]);
var tmp22602 = inst_22567;
var inst_22567__$1 = tmp22602;
var state_22590__$1 = (function (){var statearr_22606 = state_22590;
(statearr_22606[(7)] = inst_22567__$1);

return statearr_22606;
})();
var statearr_22607_22625 = state_22590__$1;
(statearr_22607_22625[(2)] = null);

(statearr_22607_22625[(1)] = (2));


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
});})(c__6817__auto___22615,out))
;
return ((function (switch__6761__auto__,c__6817__auto___22615,out){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_22611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22611[(0)] = state_machine__6762__auto__);

(statearr_22611[(1)] = (1));

return statearr_22611;
});
var state_machine__6762__auto____1 = (function (state_22590){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_22590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e22612){if((e22612 instanceof Object)){
var ex__6765__auto__ = e22612;
var statearr_22613_22626 = state_22590;
(statearr_22613_22626[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22627 = state_22590;
state_22590 = G__22627;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_22590){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_22590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___22615,out))
})();
var state__6819__auto__ = (function (){var statearr_22614 = f__6818__auto__.call(null);
(statearr_22614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___22615);

return statearr_22614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___22615,out))
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
var c__6817__auto___22762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___22762,out){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___22762,out){
return (function (state_22732){
var state_val_22733 = (state_22732[(1)]);
if((state_val_22733 === (7))){
var inst_22728 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22734_22763 = state_22732__$1;
(statearr_22734_22763[(2)] = inst_22728);

(statearr_22734_22763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (1))){
var inst_22695 = (new Array(n));
var inst_22696 = inst_22695;
var inst_22697 = (0);
var state_22732__$1 = (function (){var statearr_22735 = state_22732;
(statearr_22735[(7)] = inst_22697);

(statearr_22735[(8)] = inst_22696);

return statearr_22735;
})();
var statearr_22736_22764 = state_22732__$1;
(statearr_22736_22764[(2)] = null);

(statearr_22736_22764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (4))){
var inst_22700 = (state_22732[(9)]);
var inst_22700__$1 = (state_22732[(2)]);
var inst_22701 = (inst_22700__$1 == null);
var inst_22702 = cljs.core.not.call(null,inst_22701);
var state_22732__$1 = (function (){var statearr_22737 = state_22732;
(statearr_22737[(9)] = inst_22700__$1);

return statearr_22737;
})();
if(inst_22702){
var statearr_22738_22765 = state_22732__$1;
(statearr_22738_22765[(1)] = (5));

} else {
var statearr_22739_22766 = state_22732__$1;
(statearr_22739_22766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (15))){
var inst_22722 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22740_22767 = state_22732__$1;
(statearr_22740_22767[(2)] = inst_22722);

(statearr_22740_22767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (13))){
var state_22732__$1 = state_22732;
var statearr_22741_22768 = state_22732__$1;
(statearr_22741_22768[(2)] = null);

(statearr_22741_22768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (6))){
var inst_22697 = (state_22732[(7)]);
var inst_22718 = (inst_22697 > (0));
var state_22732__$1 = state_22732;
if(cljs.core.truth_(inst_22718)){
var statearr_22742_22769 = state_22732__$1;
(statearr_22742_22769[(1)] = (12));

} else {
var statearr_22743_22770 = state_22732__$1;
(statearr_22743_22770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (3))){
var inst_22730 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22732__$1,inst_22730);
} else {
if((state_val_22733 === (12))){
var inst_22696 = (state_22732[(8)]);
var inst_22720 = cljs.core.vec.call(null,inst_22696);
var state_22732__$1 = state_22732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22732__$1,(15),out,inst_22720);
} else {
if((state_val_22733 === (2))){
var state_22732__$1 = state_22732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22732__$1,(4),ch);
} else {
if((state_val_22733 === (11))){
var inst_22712 = (state_22732[(2)]);
var inst_22713 = (new Array(n));
var inst_22696 = inst_22713;
var inst_22697 = (0);
var state_22732__$1 = (function (){var statearr_22744 = state_22732;
(statearr_22744[(10)] = inst_22712);

(statearr_22744[(7)] = inst_22697);

(statearr_22744[(8)] = inst_22696);

return statearr_22744;
})();
var statearr_22745_22771 = state_22732__$1;
(statearr_22745_22771[(2)] = null);

(statearr_22745_22771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (9))){
var inst_22696 = (state_22732[(8)]);
var inst_22710 = cljs.core.vec.call(null,inst_22696);
var state_22732__$1 = state_22732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22732__$1,(11),out,inst_22710);
} else {
if((state_val_22733 === (5))){
var inst_22705 = (state_22732[(11)]);
var inst_22700 = (state_22732[(9)]);
var inst_22697 = (state_22732[(7)]);
var inst_22696 = (state_22732[(8)]);
var inst_22704 = (inst_22696[inst_22697] = inst_22700);
var inst_22705__$1 = (inst_22697 + (1));
var inst_22706 = (inst_22705__$1 < n);
var state_22732__$1 = (function (){var statearr_22746 = state_22732;
(statearr_22746[(12)] = inst_22704);

(statearr_22746[(11)] = inst_22705__$1);

return statearr_22746;
})();
if(cljs.core.truth_(inst_22706)){
var statearr_22747_22772 = state_22732__$1;
(statearr_22747_22772[(1)] = (8));

} else {
var statearr_22748_22773 = state_22732__$1;
(statearr_22748_22773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (14))){
var inst_22725 = (state_22732[(2)]);
var inst_22726 = cljs.core.async.close_BANG_.call(null,out);
var state_22732__$1 = (function (){var statearr_22750 = state_22732;
(statearr_22750[(13)] = inst_22725);

return statearr_22750;
})();
var statearr_22751_22774 = state_22732__$1;
(statearr_22751_22774[(2)] = inst_22726);

(statearr_22751_22774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (10))){
var inst_22716 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22752_22775 = state_22732__$1;
(statearr_22752_22775[(2)] = inst_22716);

(statearr_22752_22775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (8))){
var inst_22705 = (state_22732[(11)]);
var inst_22696 = (state_22732[(8)]);
var tmp22749 = inst_22696;
var inst_22696__$1 = tmp22749;
var inst_22697 = inst_22705;
var state_22732__$1 = (function (){var statearr_22753 = state_22732;
(statearr_22753[(7)] = inst_22697);

(statearr_22753[(8)] = inst_22696__$1);

return statearr_22753;
})();
var statearr_22754_22776 = state_22732__$1;
(statearr_22754_22776[(2)] = null);

(statearr_22754_22776[(1)] = (2));


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
});})(c__6817__auto___22762,out))
;
return ((function (switch__6761__auto__,c__6817__auto___22762,out){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_22758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22758[(0)] = state_machine__6762__auto__);

(statearr_22758[(1)] = (1));

return statearr_22758;
});
var state_machine__6762__auto____1 = (function (state_22732){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_22732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e22759){if((e22759 instanceof Object)){
var ex__6765__auto__ = e22759;
var statearr_22760_22777 = state_22732;
(statearr_22760_22777[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22778 = state_22732;
state_22732 = G__22778;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_22732){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_22732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___22762,out))
})();
var state__6819__auto__ = (function (){var statearr_22761 = f__6818__auto__.call(null);
(statearr_22761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___22762);

return statearr_22761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___22762,out))
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
var c__6817__auto___22921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6817__auto___22921,out){
return (function (){
var f__6818__auto__ = (function (){var switch__6761__auto__ = ((function (c__6817__auto___22921,out){
return (function (state_22891){
var state_val_22892 = (state_22891[(1)]);
if((state_val_22892 === (7))){
var inst_22887 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22893_22922 = state_22891__$1;
(statearr_22893_22922[(2)] = inst_22887);

(statearr_22893_22922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (1))){
var inst_22850 = [];
var inst_22851 = inst_22850;
var inst_22852 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22891__$1 = (function (){var statearr_22894 = state_22891;
(statearr_22894[(7)] = inst_22851);

(statearr_22894[(8)] = inst_22852);

return statearr_22894;
})();
var statearr_22895_22923 = state_22891__$1;
(statearr_22895_22923[(2)] = null);

(statearr_22895_22923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (4))){
var inst_22855 = (state_22891[(9)]);
var inst_22855__$1 = (state_22891[(2)]);
var inst_22856 = (inst_22855__$1 == null);
var inst_22857 = cljs.core.not.call(null,inst_22856);
var state_22891__$1 = (function (){var statearr_22896 = state_22891;
(statearr_22896[(9)] = inst_22855__$1);

return statearr_22896;
})();
if(inst_22857){
var statearr_22897_22924 = state_22891__$1;
(statearr_22897_22924[(1)] = (5));

} else {
var statearr_22898_22925 = state_22891__$1;
(statearr_22898_22925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (15))){
var inst_22881 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22899_22926 = state_22891__$1;
(statearr_22899_22926[(2)] = inst_22881);

(statearr_22899_22926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (13))){
var state_22891__$1 = state_22891;
var statearr_22900_22927 = state_22891__$1;
(statearr_22900_22927[(2)] = null);

(statearr_22900_22927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (6))){
var inst_22851 = (state_22891[(7)]);
var inst_22876 = inst_22851.length;
var inst_22877 = (inst_22876 > (0));
var state_22891__$1 = state_22891;
if(cljs.core.truth_(inst_22877)){
var statearr_22901_22928 = state_22891__$1;
(statearr_22901_22928[(1)] = (12));

} else {
var statearr_22902_22929 = state_22891__$1;
(statearr_22902_22929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (3))){
var inst_22889 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22891__$1,inst_22889);
} else {
if((state_val_22892 === (12))){
var inst_22851 = (state_22891[(7)]);
var inst_22879 = cljs.core.vec.call(null,inst_22851);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22891__$1,(15),out,inst_22879);
} else {
if((state_val_22892 === (2))){
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22891__$1,(4),ch);
} else {
if((state_val_22892 === (11))){
var inst_22859 = (state_22891[(10)]);
var inst_22855 = (state_22891[(9)]);
var inst_22869 = (state_22891[(2)]);
var inst_22870 = [];
var inst_22871 = inst_22870.push(inst_22855);
var inst_22851 = inst_22870;
var inst_22852 = inst_22859;
var state_22891__$1 = (function (){var statearr_22903 = state_22891;
(statearr_22903[(11)] = inst_22869);

(statearr_22903[(7)] = inst_22851);

(statearr_22903[(12)] = inst_22871);

(statearr_22903[(8)] = inst_22852);

return statearr_22903;
})();
var statearr_22904_22930 = state_22891__$1;
(statearr_22904_22930[(2)] = null);

(statearr_22904_22930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (9))){
var inst_22851 = (state_22891[(7)]);
var inst_22867 = cljs.core.vec.call(null,inst_22851);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22891__$1,(11),out,inst_22867);
} else {
if((state_val_22892 === (5))){
var inst_22859 = (state_22891[(10)]);
var inst_22852 = (state_22891[(8)]);
var inst_22855 = (state_22891[(9)]);
var inst_22859__$1 = f.call(null,inst_22855);
var inst_22860 = cljs.core._EQ_.call(null,inst_22859__$1,inst_22852);
var inst_22861 = cljs.core.keyword_identical_QMARK_.call(null,inst_22852,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22862 = (inst_22860) || (inst_22861);
var state_22891__$1 = (function (){var statearr_22905 = state_22891;
(statearr_22905[(10)] = inst_22859__$1);

return statearr_22905;
})();
if(cljs.core.truth_(inst_22862)){
var statearr_22906_22931 = state_22891__$1;
(statearr_22906_22931[(1)] = (8));

} else {
var statearr_22907_22932 = state_22891__$1;
(statearr_22907_22932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (14))){
var inst_22884 = (state_22891[(2)]);
var inst_22885 = cljs.core.async.close_BANG_.call(null,out);
var state_22891__$1 = (function (){var statearr_22909 = state_22891;
(statearr_22909[(13)] = inst_22884);

return statearr_22909;
})();
var statearr_22910_22933 = state_22891__$1;
(statearr_22910_22933[(2)] = inst_22885);

(statearr_22910_22933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (10))){
var inst_22874 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22911_22934 = state_22891__$1;
(statearr_22911_22934[(2)] = inst_22874);

(statearr_22911_22934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (8))){
var inst_22859 = (state_22891[(10)]);
var inst_22851 = (state_22891[(7)]);
var inst_22855 = (state_22891[(9)]);
var inst_22864 = inst_22851.push(inst_22855);
var tmp22908 = inst_22851;
var inst_22851__$1 = tmp22908;
var inst_22852 = inst_22859;
var state_22891__$1 = (function (){var statearr_22912 = state_22891;
(statearr_22912[(7)] = inst_22851__$1);

(statearr_22912[(14)] = inst_22864);

(statearr_22912[(8)] = inst_22852);

return statearr_22912;
})();
var statearr_22913_22935 = state_22891__$1;
(statearr_22913_22935[(2)] = null);

(statearr_22913_22935[(1)] = (2));


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
});})(c__6817__auto___22921,out))
;
return ((function (switch__6761__auto__,c__6817__auto___22921,out){
return (function() {
var state_machine__6762__auto__ = null;
var state_machine__6762__auto____0 = (function (){
var statearr_22917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22917[(0)] = state_machine__6762__auto__);

(statearr_22917[(1)] = (1));

return statearr_22917;
});
var state_machine__6762__auto____1 = (function (state_22891){
while(true){
var ret_value__6763__auto__ = (function (){try{while(true){
var result__6764__auto__ = switch__6761__auto__.call(null,state_22891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6764__auto__;
}
break;
}
}catch (e22918){if((e22918 instanceof Object)){
var ex__6765__auto__ = e22918;
var statearr_22919_22936 = state_22891;
(statearr_22919_22936[(5)] = ex__6765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22937 = state_22891;
state_22891 = G__22937;
continue;
} else {
return ret_value__6763__auto__;
}
break;
}
});
state_machine__6762__auto__ = function(state_22891){
switch(arguments.length){
case 0:
return state_machine__6762__auto____0.call(this);
case 1:
return state_machine__6762__auto____1.call(this,state_22891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6762__auto____0;
state_machine__6762__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6762__auto____1;
return state_machine__6762__auto__;
})()
;})(switch__6761__auto__,c__6817__auto___22921,out))
})();
var state__6819__auto__ = (function (){var statearr_22920 = f__6818__auto__.call(null);
(statearr_22920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6817__auto___22921);

return statearr_22920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6819__auto__);
});})(c__6817__auto___22921,out))
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
