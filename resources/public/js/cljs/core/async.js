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
if(typeof cljs.core.async.t18578 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18578 = (function (f,fn_handler,meta18579){
this.f = f;
this.fn_handler = fn_handler;
this.meta18579 = meta18579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18578.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18580){
var self__ = this;
var _18580__$1 = this;
return self__.meta18579;
});

cljs.core.async.t18578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18580,meta18579__$1){
var self__ = this;
var _18580__$1 = this;
return (new cljs.core.async.t18578(self__.f,self__.fn_handler,meta18579__$1));
});

cljs.core.async.t18578.cljs$lang$type = true;

cljs.core.async.t18578.cljs$lang$ctorStr = "cljs.core.async/t18578";

cljs.core.async.t18578.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18578");
});

cljs.core.async.__GT_t18578 = (function __GT_t18578(f__$1,fn_handler__$1,meta18579){
return (new cljs.core.async.t18578(f__$1,fn_handler__$1,meta18579));
});

}

return (new cljs.core.async.t18578(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var G__18582 = buff;
if(G__18582){
var bit__4437__auto__ = null;
if(cljs.core.truth_((function (){var or__3761__auto__ = bit__4437__auto__;
if(cljs.core.truth_(or__3761__auto__)){
return or__3761__auto__;
} else {
return G__18582.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18582.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18582);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18582);
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
var val_18583 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18583);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18583,ret){
return (function (){
return fn1.call(null,val_18583);
});})(val_18583,ret))
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
var n__4643__auto___18584 = n;
var x_18585 = (0);
while(true){
if((x_18585 < n__4643__auto___18584)){
(a[x_18585] = (0));

var G__18586 = (x_18585 + (1));
x_18585 = G__18586;
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

var G__18587 = (i + (1));
i = G__18587;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18591 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18591 = (function (flag,alt_flag,meta18592){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18592 = meta18592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18593){
var self__ = this;
var _18593__$1 = this;
return self__.meta18592;
});})(flag))
;

cljs.core.async.t18591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18593,meta18592__$1){
var self__ = this;
var _18593__$1 = this;
return (new cljs.core.async.t18591(self__.flag,self__.alt_flag,meta18592__$1));
});})(flag))
;

cljs.core.async.t18591.cljs$lang$type = true;

cljs.core.async.t18591.cljs$lang$ctorStr = "cljs.core.async/t18591";

cljs.core.async.t18591.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18591");
});})(flag))
;

cljs.core.async.__GT_t18591 = ((function (flag){
return (function __GT_t18591(flag__$1,alt_flag__$1,meta18592){
return (new cljs.core.async.t18591(flag__$1,alt_flag__$1,meta18592));
});})(flag))
;

}

return (new cljs.core.async.t18591(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18597 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18597 = (function (cb,flag,alt_handler,meta18598){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18598 = meta18598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18597.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18599){
var self__ = this;
var _18599__$1 = this;
return self__.meta18598;
});

cljs.core.async.t18597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18599,meta18598__$1){
var self__ = this;
var _18599__$1 = this;
return (new cljs.core.async.t18597(self__.cb,self__.flag,self__.alt_handler,meta18598__$1));
});

cljs.core.async.t18597.cljs$lang$type = true;

cljs.core.async.t18597.cljs$lang$ctorStr = "cljs.core.async/t18597";

cljs.core.async.t18597.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t18597");
});

cljs.core.async.__GT_t18597 = (function __GT_t18597(cb__$1,flag__$1,alt_handler__$1,meta18598){
return (new cljs.core.async.t18597(cb__$1,flag__$1,alt_handler__$1,meta18598));
});

}

return (new cljs.core.async.t18597(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
return (function (p1__18600_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18600_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18601_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18601_SHARP_,port], null));
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
var G__18602 = (i + (1));
i = G__18602;
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
var alts_BANG___delegate = function (ports,p__18603){
var map__18605 = p__18603;
var map__18605__$1 = ((cljs.core.seq_QMARK_.call(null,map__18605))?cljs.core.apply.call(null,cljs.core.hash_map,map__18605):map__18605);
var opts = map__18605__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18603 = null;
if (arguments.length > 1) {
  p__18603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__18603);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18606){
var ports = cljs.core.first(arglist__18606);
var p__18603 = cljs.core.rest(arglist__18606);
return alts_BANG___delegate(ports,p__18603);
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
var c__5962__auto___18701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___18701){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___18701){
return (function (state_18677){
var state_val_18678 = (state_18677[(1)]);
if((state_val_18678 === (7))){
var inst_18673 = (state_18677[(2)]);
var state_18677__$1 = state_18677;
var statearr_18679_18702 = state_18677__$1;
(statearr_18679_18702[(2)] = inst_18673);

(statearr_18679_18702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (1))){
var state_18677__$1 = state_18677;
var statearr_18680_18703 = state_18677__$1;
(statearr_18680_18703[(2)] = null);

(statearr_18680_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (4))){
var inst_18656 = (state_18677[(7)]);
var inst_18656__$1 = (state_18677[(2)]);
var inst_18657 = (inst_18656__$1 == null);
var state_18677__$1 = (function (){var statearr_18681 = state_18677;
(statearr_18681[(7)] = inst_18656__$1);

return statearr_18681;
})();
if(cljs.core.truth_(inst_18657)){
var statearr_18682_18704 = state_18677__$1;
(statearr_18682_18704[(1)] = (5));

} else {
var statearr_18683_18705 = state_18677__$1;
(statearr_18683_18705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (13))){
var state_18677__$1 = state_18677;
var statearr_18684_18706 = state_18677__$1;
(statearr_18684_18706[(2)] = null);

(statearr_18684_18706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (6))){
var inst_18656 = (state_18677[(7)]);
var state_18677__$1 = state_18677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18677__$1,(11),to,inst_18656);
} else {
if((state_val_18678 === (3))){
var inst_18675 = (state_18677[(2)]);
var state_18677__$1 = state_18677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18677__$1,inst_18675);
} else {
if((state_val_18678 === (12))){
var state_18677__$1 = state_18677;
var statearr_18685_18707 = state_18677__$1;
(statearr_18685_18707[(2)] = null);

(statearr_18685_18707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (2))){
var state_18677__$1 = state_18677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18677__$1,(4),from);
} else {
if((state_val_18678 === (11))){
var inst_18666 = (state_18677[(2)]);
var state_18677__$1 = state_18677;
if(cljs.core.truth_(inst_18666)){
var statearr_18686_18708 = state_18677__$1;
(statearr_18686_18708[(1)] = (12));

} else {
var statearr_18687_18709 = state_18677__$1;
(statearr_18687_18709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (9))){
var state_18677__$1 = state_18677;
var statearr_18688_18710 = state_18677__$1;
(statearr_18688_18710[(2)] = null);

(statearr_18688_18710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (5))){
var state_18677__$1 = state_18677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18689_18711 = state_18677__$1;
(statearr_18689_18711[(1)] = (8));

} else {
var statearr_18690_18712 = state_18677__$1;
(statearr_18690_18712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (14))){
var inst_18671 = (state_18677[(2)]);
var state_18677__$1 = state_18677;
var statearr_18691_18713 = state_18677__$1;
(statearr_18691_18713[(2)] = inst_18671);

(statearr_18691_18713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (10))){
var inst_18663 = (state_18677[(2)]);
var state_18677__$1 = state_18677;
var statearr_18692_18714 = state_18677__$1;
(statearr_18692_18714[(2)] = inst_18663);

(statearr_18692_18714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18678 === (8))){
var inst_18660 = cljs.core.async.close_BANG_.call(null,to);
var state_18677__$1 = state_18677;
var statearr_18693_18715 = state_18677__$1;
(statearr_18693_18715[(2)] = inst_18660);

(statearr_18693_18715[(1)] = (10));


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
});})(c__5962__auto___18701))
;
return ((function (switch__5947__auto__,c__5962__auto___18701){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18697 = [null,null,null,null,null,null,null,null];
(statearr_18697[(0)] = state_machine__5948__auto__);

(statearr_18697[(1)] = (1));

return statearr_18697;
});
var state_machine__5948__auto____1 = (function (state_18677){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18698){if((e18698 instanceof Object)){
var ex__5951__auto__ = e18698;
var statearr_18699_18716 = state_18677;
(statearr_18699_18716[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18717 = state_18677;
state_18677 = G__18717;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18677){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___18701))
})();
var state__5964__auto__ = (function (){var statearr_18700 = f__5963__auto__.call(null);
(statearr_18700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___18701);

return statearr_18700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___18701))
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
return (function (p__18901){
var vec__18902 = p__18901;
var v = cljs.core.nth.call(null,vec__18902,(0),null);
var p = cljs.core.nth.call(null,vec__18902,(1),null);
var job = vec__18902;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5962__auto___19084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19084,res,vec__18902,v,p,job,jobs,results){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19084,res,vec__18902,v,p,job,jobs,results){
return (function (state_18907){
var state_val_18908 = (state_18907[(1)]);
if((state_val_18908 === (2))){
var inst_18904 = (state_18907[(2)]);
var inst_18905 = cljs.core.async.close_BANG_.call(null,res);
var state_18907__$1 = (function (){var statearr_18909 = state_18907;
(statearr_18909[(7)] = inst_18904);

return statearr_18909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18907__$1,inst_18905);
} else {
if((state_val_18908 === (1))){
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18907__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5962__auto___19084,res,vec__18902,v,p,job,jobs,results))
;
return ((function (switch__5947__auto__,c__5962__auto___19084,res,vec__18902,v,p,job,jobs,results){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18913 = [null,null,null,null,null,null,null,null];
(statearr_18913[(0)] = state_machine__5948__auto__);

(statearr_18913[(1)] = (1));

return statearr_18913;
});
var state_machine__5948__auto____1 = (function (state_18907){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18914){if((e18914 instanceof Object)){
var ex__5951__auto__ = e18914;
var statearr_18915_19085 = state_18907;
(statearr_18915_19085[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19086 = state_18907;
state_18907 = G__19086;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18907){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19084,res,vec__18902,v,p,job,jobs,results))
})();
var state__5964__auto__ = (function (){var statearr_18916 = f__5963__auto__.call(null);
(statearr_18916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19084);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19084,res,vec__18902,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18917){
var vec__18918 = p__18917;
var v = cljs.core.nth.call(null,vec__18918,(0),null);
var p = cljs.core.nth.call(null,vec__18918,(1),null);
var job = vec__18918;
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
var n__4643__auto___19087 = n;
var __19088 = (0);
while(true){
if((__19088 < n__4643__auto___19087)){
var G__18919_19089 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18919_19089) {
case "async":
var c__5962__auto___19091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19088,c__5962__auto___19091,G__18919_19089,n__4643__auto___19087,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (__19088,c__5962__auto___19091,G__18919_19089,n__4643__auto___19087,jobs,results,process,async){
return (function (state_18932){
var state_val_18933 = (state_18932[(1)]);
if((state_val_18933 === (7))){
var inst_18928 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18934_19092 = state_18932__$1;
(statearr_18934_19092[(2)] = inst_18928);

(statearr_18934_19092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (6))){
var state_18932__$1 = state_18932;
var statearr_18935_19093 = state_18932__$1;
(statearr_18935_19093[(2)] = null);

(statearr_18935_19093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (5))){
var state_18932__$1 = state_18932;
var statearr_18936_19094 = state_18932__$1;
(statearr_18936_19094[(2)] = null);

(statearr_18936_19094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (4))){
var inst_18922 = (state_18932[(2)]);
var inst_18923 = async.call(null,inst_18922);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18923)){
var statearr_18937_19095 = state_18932__$1;
(statearr_18937_19095[(1)] = (5));

} else {
var statearr_18938_19096 = state_18932__$1;
(statearr_18938_19096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (3))){
var inst_18930 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18932__$1,inst_18930);
} else {
if((state_val_18933 === (2))){
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18932__$1,(4),jobs);
} else {
if((state_val_18933 === (1))){
var state_18932__$1 = state_18932;
var statearr_18939_19097 = state_18932__$1;
(statearr_18939_19097[(2)] = null);

(statearr_18939_19097[(1)] = (2));


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
});})(__19088,c__5962__auto___19091,G__18919_19089,n__4643__auto___19087,jobs,results,process,async))
;
return ((function (__19088,switch__5947__auto__,c__5962__auto___19091,G__18919_19089,n__4643__auto___19087,jobs,results,process,async){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18943 = [null,null,null,null,null,null,null];
(statearr_18943[(0)] = state_machine__5948__auto__);

(statearr_18943[(1)] = (1));

return statearr_18943;
});
var state_machine__5948__auto____1 = (function (state_18932){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18944){if((e18944 instanceof Object)){
var ex__5951__auto__ = e18944;
var statearr_18945_19098 = state_18932;
(statearr_18945_19098[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19099 = state_18932;
state_18932 = G__19099;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18932){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(__19088,switch__5947__auto__,c__5962__auto___19091,G__18919_19089,n__4643__auto___19087,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_18946 = f__5963__auto__.call(null);
(statearr_18946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19091);

return statearr_18946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(__19088,c__5962__auto___19091,G__18919_19089,n__4643__auto___19087,jobs,results,process,async))
);


break;
case "compute":
var c__5962__auto___19100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19088,c__5962__auto___19100,G__18919_19089,n__4643__auto___19087,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (__19088,c__5962__auto___19100,G__18919_19089,n__4643__auto___19087,jobs,results,process,async){
return (function (state_18959){
var state_val_18960 = (state_18959[(1)]);
if((state_val_18960 === (7))){
var inst_18955 = (state_18959[(2)]);
var state_18959__$1 = state_18959;
var statearr_18961_19101 = state_18959__$1;
(statearr_18961_19101[(2)] = inst_18955);

(statearr_18961_19101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18960 === (6))){
var state_18959__$1 = state_18959;
var statearr_18962_19102 = state_18959__$1;
(statearr_18962_19102[(2)] = null);

(statearr_18962_19102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18960 === (5))){
var state_18959__$1 = state_18959;
var statearr_18963_19103 = state_18959__$1;
(statearr_18963_19103[(2)] = null);

(statearr_18963_19103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18960 === (4))){
var inst_18949 = (state_18959[(2)]);
var inst_18950 = process.call(null,inst_18949);
var state_18959__$1 = state_18959;
if(cljs.core.truth_(inst_18950)){
var statearr_18964_19104 = state_18959__$1;
(statearr_18964_19104[(1)] = (5));

} else {
var statearr_18965_19105 = state_18959__$1;
(statearr_18965_19105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18960 === (3))){
var inst_18957 = (state_18959[(2)]);
var state_18959__$1 = state_18959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18959__$1,inst_18957);
} else {
if((state_val_18960 === (2))){
var state_18959__$1 = state_18959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18959__$1,(4),jobs);
} else {
if((state_val_18960 === (1))){
var state_18959__$1 = state_18959;
var statearr_18966_19106 = state_18959__$1;
(statearr_18966_19106[(2)] = null);

(statearr_18966_19106[(1)] = (2));


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
});})(__19088,c__5962__auto___19100,G__18919_19089,n__4643__auto___19087,jobs,results,process,async))
;
return ((function (__19088,switch__5947__auto__,c__5962__auto___19100,G__18919_19089,n__4643__auto___19087,jobs,results,process,async){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_18970 = [null,null,null,null,null,null,null];
(statearr_18970[(0)] = state_machine__5948__auto__);

(statearr_18970[(1)] = (1));

return statearr_18970;
});
var state_machine__5948__auto____1 = (function (state_18959){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e18971){if((e18971 instanceof Object)){
var ex__5951__auto__ = e18971;
var statearr_18972_19107 = state_18959;
(statearr_18972_19107[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19108 = state_18959;
state_18959 = G__19108;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18959){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(__19088,switch__5947__auto__,c__5962__auto___19100,G__18919_19089,n__4643__auto___19087,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_18973 = f__5963__auto__.call(null);
(statearr_18973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19100);

return statearr_18973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(__19088,c__5962__auto___19100,G__18919_19089,n__4643__auto___19087,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19109 = (__19088 + (1));
__19088 = G__19109;
continue;
} else {
}
break;
}

var c__5962__auto___19110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19110,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19110,jobs,results,process,async){
return (function (state_18995){
var state_val_18996 = (state_18995[(1)]);
if((state_val_18996 === (9))){
var inst_18988 = (state_18995[(2)]);
var state_18995__$1 = (function (){var statearr_18997 = state_18995;
(statearr_18997[(7)] = inst_18988);

return statearr_18997;
})();
var statearr_18998_19111 = state_18995__$1;
(statearr_18998_19111[(2)] = null);

(statearr_18998_19111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18996 === (8))){
var inst_18981 = (state_18995[(8)]);
var inst_18986 = (state_18995[(2)]);
var state_18995__$1 = (function (){var statearr_18999 = state_18995;
(statearr_18999[(9)] = inst_18986);

return statearr_18999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18995__$1,(9),results,inst_18981);
} else {
if((state_val_18996 === (7))){
var inst_18991 = (state_18995[(2)]);
var state_18995__$1 = state_18995;
var statearr_19000_19112 = state_18995__$1;
(statearr_19000_19112[(2)] = inst_18991);

(statearr_19000_19112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18996 === (6))){
var inst_18981 = (state_18995[(8)]);
var inst_18976 = (state_18995[(10)]);
var inst_18981__$1 = cljs.core.async.chan.call(null,(1));
var inst_18982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18983 = [inst_18976,inst_18981__$1];
var inst_18984 = (new cljs.core.PersistentVector(null,2,(5),inst_18982,inst_18983,null));
var state_18995__$1 = (function (){var statearr_19001 = state_18995;
(statearr_19001[(8)] = inst_18981__$1);

return statearr_19001;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18995__$1,(8),jobs,inst_18984);
} else {
if((state_val_18996 === (5))){
var inst_18979 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18995__$1 = state_18995;
var statearr_19002_19113 = state_18995__$1;
(statearr_19002_19113[(2)] = inst_18979);

(statearr_19002_19113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18996 === (4))){
var inst_18976 = (state_18995[(10)]);
var inst_18976__$1 = (state_18995[(2)]);
var inst_18977 = (inst_18976__$1 == null);
var state_18995__$1 = (function (){var statearr_19003 = state_18995;
(statearr_19003[(10)] = inst_18976__$1);

return statearr_19003;
})();
if(cljs.core.truth_(inst_18977)){
var statearr_19004_19114 = state_18995__$1;
(statearr_19004_19114[(1)] = (5));

} else {
var statearr_19005_19115 = state_18995__$1;
(statearr_19005_19115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18996 === (3))){
var inst_18993 = (state_18995[(2)]);
var state_18995__$1 = state_18995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18995__$1,inst_18993);
} else {
if((state_val_18996 === (2))){
var state_18995__$1 = state_18995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18995__$1,(4),from);
} else {
if((state_val_18996 === (1))){
var state_18995__$1 = state_18995;
var statearr_19006_19116 = state_18995__$1;
(statearr_19006_19116[(2)] = null);

(statearr_19006_19116[(1)] = (2));


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
});})(c__5962__auto___19110,jobs,results,process,async))
;
return ((function (switch__5947__auto__,c__5962__auto___19110,jobs,results,process,async){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19010[(0)] = state_machine__5948__auto__);

(statearr_19010[(1)] = (1));

return statearr_19010;
});
var state_machine__5948__auto____1 = (function (state_18995){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_18995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19011){if((e19011 instanceof Object)){
var ex__5951__auto__ = e19011;
var statearr_19012_19117 = state_18995;
(statearr_19012_19117[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19118 = state_18995;
state_18995 = G__19118;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_18995){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_18995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19110,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_19013 = f__5963__auto__.call(null);
(statearr_19013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19110);

return statearr_19013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19110,jobs,results,process,async))
);


var c__5962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto__,jobs,results,process,async){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto__,jobs,results,process,async){
return (function (state_19051){
var state_val_19052 = (state_19051[(1)]);
if((state_val_19052 === (7))){
var inst_19047 = (state_19051[(2)]);
var state_19051__$1 = state_19051;
var statearr_19053_19119 = state_19051__$1;
(statearr_19053_19119[(2)] = inst_19047);

(statearr_19053_19119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (20))){
var state_19051__$1 = state_19051;
var statearr_19054_19120 = state_19051__$1;
(statearr_19054_19120[(2)] = null);

(statearr_19054_19120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (1))){
var state_19051__$1 = state_19051;
var statearr_19055_19121 = state_19051__$1;
(statearr_19055_19121[(2)] = null);

(statearr_19055_19121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (4))){
var inst_19016 = (state_19051[(7)]);
var inst_19016__$1 = (state_19051[(2)]);
var inst_19017 = (inst_19016__$1 == null);
var state_19051__$1 = (function (){var statearr_19056 = state_19051;
(statearr_19056[(7)] = inst_19016__$1);

return statearr_19056;
})();
if(cljs.core.truth_(inst_19017)){
var statearr_19057_19122 = state_19051__$1;
(statearr_19057_19122[(1)] = (5));

} else {
var statearr_19058_19123 = state_19051__$1;
(statearr_19058_19123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (15))){
var inst_19029 = (state_19051[(8)]);
var state_19051__$1 = state_19051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19051__$1,(18),to,inst_19029);
} else {
if((state_val_19052 === (21))){
var inst_19042 = (state_19051[(2)]);
var state_19051__$1 = state_19051;
var statearr_19059_19124 = state_19051__$1;
(statearr_19059_19124[(2)] = inst_19042);

(statearr_19059_19124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (13))){
var inst_19044 = (state_19051[(2)]);
var state_19051__$1 = (function (){var statearr_19060 = state_19051;
(statearr_19060[(9)] = inst_19044);

return statearr_19060;
})();
var statearr_19061_19125 = state_19051__$1;
(statearr_19061_19125[(2)] = null);

(statearr_19061_19125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (6))){
var inst_19016 = (state_19051[(7)]);
var state_19051__$1 = state_19051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19051__$1,(11),inst_19016);
} else {
if((state_val_19052 === (17))){
var inst_19037 = (state_19051[(2)]);
var state_19051__$1 = state_19051;
if(cljs.core.truth_(inst_19037)){
var statearr_19062_19126 = state_19051__$1;
(statearr_19062_19126[(1)] = (19));

} else {
var statearr_19063_19127 = state_19051__$1;
(statearr_19063_19127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (3))){
var inst_19049 = (state_19051[(2)]);
var state_19051__$1 = state_19051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19051__$1,inst_19049);
} else {
if((state_val_19052 === (12))){
var inst_19026 = (state_19051[(10)]);
var state_19051__$1 = state_19051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19051__$1,(14),inst_19026);
} else {
if((state_val_19052 === (2))){
var state_19051__$1 = state_19051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19051__$1,(4),results);
} else {
if((state_val_19052 === (19))){
var state_19051__$1 = state_19051;
var statearr_19064_19128 = state_19051__$1;
(statearr_19064_19128[(2)] = null);

(statearr_19064_19128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (11))){
var inst_19026 = (state_19051[(2)]);
var state_19051__$1 = (function (){var statearr_19065 = state_19051;
(statearr_19065[(10)] = inst_19026);

return statearr_19065;
})();
var statearr_19066_19129 = state_19051__$1;
(statearr_19066_19129[(2)] = null);

(statearr_19066_19129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (9))){
var state_19051__$1 = state_19051;
var statearr_19067_19130 = state_19051__$1;
(statearr_19067_19130[(2)] = null);

(statearr_19067_19130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (5))){
var state_19051__$1 = state_19051;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19068_19131 = state_19051__$1;
(statearr_19068_19131[(1)] = (8));

} else {
var statearr_19069_19132 = state_19051__$1;
(statearr_19069_19132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (14))){
var inst_19029 = (state_19051[(8)]);
var inst_19031 = (state_19051[(11)]);
var inst_19029__$1 = (state_19051[(2)]);
var inst_19030 = (inst_19029__$1 == null);
var inst_19031__$1 = cljs.core.not.call(null,inst_19030);
var state_19051__$1 = (function (){var statearr_19070 = state_19051;
(statearr_19070[(8)] = inst_19029__$1);

(statearr_19070[(11)] = inst_19031__$1);

return statearr_19070;
})();
if(inst_19031__$1){
var statearr_19071_19133 = state_19051__$1;
(statearr_19071_19133[(1)] = (15));

} else {
var statearr_19072_19134 = state_19051__$1;
(statearr_19072_19134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (16))){
var inst_19031 = (state_19051[(11)]);
var state_19051__$1 = state_19051;
var statearr_19073_19135 = state_19051__$1;
(statearr_19073_19135[(2)] = inst_19031);

(statearr_19073_19135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (10))){
var inst_19023 = (state_19051[(2)]);
var state_19051__$1 = state_19051;
var statearr_19074_19136 = state_19051__$1;
(statearr_19074_19136[(2)] = inst_19023);

(statearr_19074_19136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (18))){
var inst_19034 = (state_19051[(2)]);
var state_19051__$1 = state_19051;
var statearr_19075_19137 = state_19051__$1;
(statearr_19075_19137[(2)] = inst_19034);

(statearr_19075_19137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19052 === (8))){
var inst_19020 = cljs.core.async.close_BANG_.call(null,to);
var state_19051__$1 = state_19051;
var statearr_19076_19138 = state_19051__$1;
(statearr_19076_19138[(2)] = inst_19020);

(statearr_19076_19138[(1)] = (10));


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
var statearr_19080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19080[(0)] = state_machine__5948__auto__);

(statearr_19080[(1)] = (1));

return statearr_19080;
});
var state_machine__5948__auto____1 = (function (state_19051){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19081){if((e19081 instanceof Object)){
var ex__5951__auto__ = e19081;
var statearr_19082_19139 = state_19051;
(statearr_19082_19139[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19140 = state_19051;
state_19051 = G__19140;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19051){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__,jobs,results,process,async))
})();
var state__5964__auto__ = (function (){var statearr_19083 = f__5963__auto__.call(null);
(statearr_19083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_19083;
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
var c__5962__auto___19241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19241,tc,fc){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19241,tc,fc){
return (function (state_19216){
var state_val_19217 = (state_19216[(1)]);
if((state_val_19217 === (7))){
var inst_19212 = (state_19216[(2)]);
var state_19216__$1 = state_19216;
var statearr_19218_19242 = state_19216__$1;
(statearr_19218_19242[(2)] = inst_19212);

(statearr_19218_19242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (1))){
var state_19216__$1 = state_19216;
var statearr_19219_19243 = state_19216__$1;
(statearr_19219_19243[(2)] = null);

(statearr_19219_19243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (4))){
var inst_19193 = (state_19216[(7)]);
var inst_19193__$1 = (state_19216[(2)]);
var inst_19194 = (inst_19193__$1 == null);
var state_19216__$1 = (function (){var statearr_19220 = state_19216;
(statearr_19220[(7)] = inst_19193__$1);

return statearr_19220;
})();
if(cljs.core.truth_(inst_19194)){
var statearr_19221_19244 = state_19216__$1;
(statearr_19221_19244[(1)] = (5));

} else {
var statearr_19222_19245 = state_19216__$1;
(statearr_19222_19245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (13))){
var state_19216__$1 = state_19216;
var statearr_19223_19246 = state_19216__$1;
(statearr_19223_19246[(2)] = null);

(statearr_19223_19246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (6))){
var inst_19193 = (state_19216[(7)]);
var inst_19199 = p.call(null,inst_19193);
var state_19216__$1 = state_19216;
if(cljs.core.truth_(inst_19199)){
var statearr_19224_19247 = state_19216__$1;
(statearr_19224_19247[(1)] = (9));

} else {
var statearr_19225_19248 = state_19216__$1;
(statearr_19225_19248[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (3))){
var inst_19214 = (state_19216[(2)]);
var state_19216__$1 = state_19216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19216__$1,inst_19214);
} else {
if((state_val_19217 === (12))){
var state_19216__$1 = state_19216;
var statearr_19226_19249 = state_19216__$1;
(statearr_19226_19249[(2)] = null);

(statearr_19226_19249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (2))){
var state_19216__$1 = state_19216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19216__$1,(4),ch);
} else {
if((state_val_19217 === (11))){
var inst_19193 = (state_19216[(7)]);
var inst_19203 = (state_19216[(2)]);
var state_19216__$1 = state_19216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19216__$1,(8),inst_19203,inst_19193);
} else {
if((state_val_19217 === (9))){
var state_19216__$1 = state_19216;
var statearr_19227_19250 = state_19216__$1;
(statearr_19227_19250[(2)] = tc);

(statearr_19227_19250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (5))){
var inst_19196 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19197 = cljs.core.async.close_BANG_.call(null,fc);
var state_19216__$1 = (function (){var statearr_19228 = state_19216;
(statearr_19228[(8)] = inst_19196);

return statearr_19228;
})();
var statearr_19229_19251 = state_19216__$1;
(statearr_19229_19251[(2)] = inst_19197);

(statearr_19229_19251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (14))){
var inst_19210 = (state_19216[(2)]);
var state_19216__$1 = state_19216;
var statearr_19230_19252 = state_19216__$1;
(statearr_19230_19252[(2)] = inst_19210);

(statearr_19230_19252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (10))){
var state_19216__$1 = state_19216;
var statearr_19231_19253 = state_19216__$1;
(statearr_19231_19253[(2)] = fc);

(statearr_19231_19253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19217 === (8))){
var inst_19205 = (state_19216[(2)]);
var state_19216__$1 = state_19216;
if(cljs.core.truth_(inst_19205)){
var statearr_19232_19254 = state_19216__$1;
(statearr_19232_19254[(1)] = (12));

} else {
var statearr_19233_19255 = state_19216__$1;
(statearr_19233_19255[(1)] = (13));

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
});})(c__5962__auto___19241,tc,fc))
;
return ((function (switch__5947__auto__,c__5962__auto___19241,tc,fc){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19237 = [null,null,null,null,null,null,null,null,null];
(statearr_19237[(0)] = state_machine__5948__auto__);

(statearr_19237[(1)] = (1));

return statearr_19237;
});
var state_machine__5948__auto____1 = (function (state_19216){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19238){if((e19238 instanceof Object)){
var ex__5951__auto__ = e19238;
var statearr_19239_19256 = state_19216;
(statearr_19239_19256[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19257 = state_19216;
state_19216 = G__19257;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19216){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19241,tc,fc))
})();
var state__5964__auto__ = (function (){var statearr_19240 = f__5963__auto__.call(null);
(statearr_19240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19241);

return statearr_19240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19241,tc,fc))
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
return (function (state_19304){
var state_val_19305 = (state_19304[(1)]);
if((state_val_19305 === (7))){
var inst_19300 = (state_19304[(2)]);
var state_19304__$1 = state_19304;
var statearr_19306_19322 = state_19304__$1;
(statearr_19306_19322[(2)] = inst_19300);

(statearr_19306_19322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (6))){
var inst_19290 = (state_19304[(7)]);
var inst_19293 = (state_19304[(8)]);
var inst_19297 = f.call(null,inst_19290,inst_19293);
var inst_19290__$1 = inst_19297;
var state_19304__$1 = (function (){var statearr_19307 = state_19304;
(statearr_19307[(7)] = inst_19290__$1);

return statearr_19307;
})();
var statearr_19308_19323 = state_19304__$1;
(statearr_19308_19323[(2)] = null);

(statearr_19308_19323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (5))){
var inst_19290 = (state_19304[(7)]);
var state_19304__$1 = state_19304;
var statearr_19309_19324 = state_19304__$1;
(statearr_19309_19324[(2)] = inst_19290);

(statearr_19309_19324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (4))){
var inst_19293 = (state_19304[(8)]);
var inst_19293__$1 = (state_19304[(2)]);
var inst_19294 = (inst_19293__$1 == null);
var state_19304__$1 = (function (){var statearr_19310 = state_19304;
(statearr_19310[(8)] = inst_19293__$1);

return statearr_19310;
})();
if(cljs.core.truth_(inst_19294)){
var statearr_19311_19325 = state_19304__$1;
(statearr_19311_19325[(1)] = (5));

} else {
var statearr_19312_19326 = state_19304__$1;
(statearr_19312_19326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19305 === (3))){
var inst_19302 = (state_19304[(2)]);
var state_19304__$1 = state_19304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19304__$1,inst_19302);
} else {
if((state_val_19305 === (2))){
var state_19304__$1 = state_19304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19304__$1,(4),ch);
} else {
if((state_val_19305 === (1))){
var inst_19290 = init;
var state_19304__$1 = (function (){var statearr_19313 = state_19304;
(statearr_19313[(7)] = inst_19290);

return statearr_19313;
})();
var statearr_19314_19327 = state_19304__$1;
(statearr_19314_19327[(2)] = null);

(statearr_19314_19327[(1)] = (2));


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
var statearr_19318 = [null,null,null,null,null,null,null,null,null];
(statearr_19318[(0)] = state_machine__5948__auto__);

(statearr_19318[(1)] = (1));

return statearr_19318;
});
var state_machine__5948__auto____1 = (function (state_19304){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19319){if((e19319 instanceof Object)){
var ex__5951__auto__ = e19319;
var statearr_19320_19328 = state_19304;
(statearr_19320_19328[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19329 = state_19304;
state_19304 = G__19329;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19304){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__))
})();
var state__5964__auto__ = (function (){var statearr_19321 = f__5963__auto__.call(null);
(statearr_19321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_19321;
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
return (function (state_19403){
var state_val_19404 = (state_19403[(1)]);
if((state_val_19404 === (7))){
var inst_19385 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
var statearr_19405_19428 = state_19403__$1;
(statearr_19405_19428[(2)] = inst_19385);

(statearr_19405_19428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (1))){
var inst_19379 = cljs.core.seq.call(null,coll);
var inst_19380 = inst_19379;
var state_19403__$1 = (function (){var statearr_19406 = state_19403;
(statearr_19406[(7)] = inst_19380);

return statearr_19406;
})();
var statearr_19407_19429 = state_19403__$1;
(statearr_19407_19429[(2)] = null);

(statearr_19407_19429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (4))){
var inst_19380 = (state_19403[(7)]);
var inst_19383 = cljs.core.first.call(null,inst_19380);
var state_19403__$1 = state_19403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19403__$1,(7),ch,inst_19383);
} else {
if((state_val_19404 === (13))){
var inst_19397 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
var statearr_19408_19430 = state_19403__$1;
(statearr_19408_19430[(2)] = inst_19397);

(statearr_19408_19430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (6))){
var inst_19388 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
if(cljs.core.truth_(inst_19388)){
var statearr_19409_19431 = state_19403__$1;
(statearr_19409_19431[(1)] = (8));

} else {
var statearr_19410_19432 = state_19403__$1;
(statearr_19410_19432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (3))){
var inst_19401 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19403__$1,inst_19401);
} else {
if((state_val_19404 === (12))){
var state_19403__$1 = state_19403;
var statearr_19411_19433 = state_19403__$1;
(statearr_19411_19433[(2)] = null);

(statearr_19411_19433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (2))){
var inst_19380 = (state_19403[(7)]);
var state_19403__$1 = state_19403;
if(cljs.core.truth_(inst_19380)){
var statearr_19412_19434 = state_19403__$1;
(statearr_19412_19434[(1)] = (4));

} else {
var statearr_19413_19435 = state_19403__$1;
(statearr_19413_19435[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (11))){
var inst_19394 = cljs.core.async.close_BANG_.call(null,ch);
var state_19403__$1 = state_19403;
var statearr_19414_19436 = state_19403__$1;
(statearr_19414_19436[(2)] = inst_19394);

(statearr_19414_19436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (9))){
var state_19403__$1 = state_19403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19415_19437 = state_19403__$1;
(statearr_19415_19437[(1)] = (11));

} else {
var statearr_19416_19438 = state_19403__$1;
(statearr_19416_19438[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (5))){
var inst_19380 = (state_19403[(7)]);
var state_19403__$1 = state_19403;
var statearr_19417_19439 = state_19403__$1;
(statearr_19417_19439[(2)] = inst_19380);

(statearr_19417_19439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (10))){
var inst_19399 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
var statearr_19418_19440 = state_19403__$1;
(statearr_19418_19440[(2)] = inst_19399);

(statearr_19418_19440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (8))){
var inst_19380 = (state_19403[(7)]);
var inst_19390 = cljs.core.next.call(null,inst_19380);
var inst_19380__$1 = inst_19390;
var state_19403__$1 = (function (){var statearr_19419 = state_19403;
(statearr_19419[(7)] = inst_19380__$1);

return statearr_19419;
})();
var statearr_19420_19441 = state_19403__$1;
(statearr_19420_19441[(2)] = null);

(statearr_19420_19441[(1)] = (2));


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
var statearr_19424 = [null,null,null,null,null,null,null,null];
(statearr_19424[(0)] = state_machine__5948__auto__);

(statearr_19424[(1)] = (1));

return statearr_19424;
});
var state_machine__5948__auto____1 = (function (state_19403){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19425){if((e19425 instanceof Object)){
var ex__5951__auto__ = e19425;
var statearr_19426_19442 = state_19403;
(statearr_19426_19442[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19443 = state_19403;
state_19403 = G__19443;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19403){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__))
})();
var state__5964__auto__ = (function (){var statearr_19427 = f__5963__auto__.call(null);
(statearr_19427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_19427;
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

cljs.core.async.Mux = (function (){var obj19445 = {};
return obj19445;
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


cljs.core.async.Mult = (function (){var obj19447 = {};
return obj19447;
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
if(typeof cljs.core.async.t19669 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19669 = (function (cs,ch,mult,meta19670){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19670 = meta19670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19669.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19669.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19669.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19669.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19669.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19671){
var self__ = this;
var _19671__$1 = this;
return self__.meta19670;
});})(cs))
;

cljs.core.async.t19669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19671,meta19670__$1){
var self__ = this;
var _19671__$1 = this;
return (new cljs.core.async.t19669(self__.cs,self__.ch,self__.mult,meta19670__$1));
});})(cs))
;

cljs.core.async.t19669.cljs$lang$type = true;

cljs.core.async.t19669.cljs$lang$ctorStr = "cljs.core.async/t19669";

cljs.core.async.t19669.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t19669");
});})(cs))
;

cljs.core.async.__GT_t19669 = ((function (cs){
return (function __GT_t19669(cs__$1,ch__$1,mult__$1,meta19670){
return (new cljs.core.async.t19669(cs__$1,ch__$1,mult__$1,meta19670));
});})(cs))
;

}

return (new cljs.core.async.t19669(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__5962__auto___19890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___19890,cs,m,dchan,dctr,done){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___19890,cs,m,dchan,dctr,done){
return (function (state_19802){
var state_val_19803 = (state_19802[(1)]);
if((state_val_19803 === (7))){
var inst_19798 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19804_19891 = state_19802__$1;
(statearr_19804_19891[(2)] = inst_19798);

(statearr_19804_19891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (20))){
var inst_19703 = (state_19802[(7)]);
var inst_19713 = cljs.core.first.call(null,inst_19703);
var inst_19714 = cljs.core.nth.call(null,inst_19713,(0),null);
var inst_19715 = cljs.core.nth.call(null,inst_19713,(1),null);
var state_19802__$1 = (function (){var statearr_19805 = state_19802;
(statearr_19805[(8)] = inst_19714);

return statearr_19805;
})();
if(cljs.core.truth_(inst_19715)){
var statearr_19806_19892 = state_19802__$1;
(statearr_19806_19892[(1)] = (22));

} else {
var statearr_19807_19893 = state_19802__$1;
(statearr_19807_19893[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (27))){
var inst_19745 = (state_19802[(9)]);
var inst_19750 = (state_19802[(10)]);
var inst_19743 = (state_19802[(11)]);
var inst_19674 = (state_19802[(12)]);
var inst_19750__$1 = cljs.core._nth.call(null,inst_19743,inst_19745);
var inst_19751 = cljs.core.async.put_BANG_.call(null,inst_19750__$1,inst_19674,done);
var state_19802__$1 = (function (){var statearr_19808 = state_19802;
(statearr_19808[(10)] = inst_19750__$1);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19751)){
var statearr_19809_19894 = state_19802__$1;
(statearr_19809_19894[(1)] = (30));

} else {
var statearr_19810_19895 = state_19802__$1;
(statearr_19810_19895[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (1))){
var state_19802__$1 = state_19802;
var statearr_19811_19896 = state_19802__$1;
(statearr_19811_19896[(2)] = null);

(statearr_19811_19896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (24))){
var inst_19703 = (state_19802[(7)]);
var inst_19720 = (state_19802[(2)]);
var inst_19721 = cljs.core.next.call(null,inst_19703);
var inst_19683 = inst_19721;
var inst_19684 = null;
var inst_19685 = (0);
var inst_19686 = (0);
var state_19802__$1 = (function (){var statearr_19812 = state_19802;
(statearr_19812[(13)] = inst_19685);

(statearr_19812[(14)] = inst_19720);

(statearr_19812[(15)] = inst_19684);

(statearr_19812[(16)] = inst_19686);

(statearr_19812[(17)] = inst_19683);

return statearr_19812;
})();
var statearr_19813_19897 = state_19802__$1;
(statearr_19813_19897[(2)] = null);

(statearr_19813_19897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (39))){
var state_19802__$1 = state_19802;
var statearr_19817_19898 = state_19802__$1;
(statearr_19817_19898[(2)] = null);

(statearr_19817_19898[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (4))){
var inst_19674 = (state_19802[(12)]);
var inst_19674__$1 = (state_19802[(2)]);
var inst_19675 = (inst_19674__$1 == null);
var state_19802__$1 = (function (){var statearr_19818 = state_19802;
(statearr_19818[(12)] = inst_19674__$1);

return statearr_19818;
})();
if(cljs.core.truth_(inst_19675)){
var statearr_19819_19899 = state_19802__$1;
(statearr_19819_19899[(1)] = (5));

} else {
var statearr_19820_19900 = state_19802__$1;
(statearr_19820_19900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (15))){
var inst_19685 = (state_19802[(13)]);
var inst_19684 = (state_19802[(15)]);
var inst_19686 = (state_19802[(16)]);
var inst_19683 = (state_19802[(17)]);
var inst_19699 = (state_19802[(2)]);
var inst_19700 = (inst_19686 + (1));
var tmp19814 = inst_19685;
var tmp19815 = inst_19684;
var tmp19816 = inst_19683;
var inst_19683__$1 = tmp19816;
var inst_19684__$1 = tmp19815;
var inst_19685__$1 = tmp19814;
var inst_19686__$1 = inst_19700;
var state_19802__$1 = (function (){var statearr_19821 = state_19802;
(statearr_19821[(13)] = inst_19685__$1);

(statearr_19821[(15)] = inst_19684__$1);

(statearr_19821[(16)] = inst_19686__$1);

(statearr_19821[(18)] = inst_19699);

(statearr_19821[(17)] = inst_19683__$1);

return statearr_19821;
})();
var statearr_19822_19901 = state_19802__$1;
(statearr_19822_19901[(2)] = null);

(statearr_19822_19901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (21))){
var inst_19724 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19826_19902 = state_19802__$1;
(statearr_19826_19902[(2)] = inst_19724);

(statearr_19826_19902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (31))){
var inst_19750 = (state_19802[(10)]);
var inst_19754 = done.call(null,null);
var inst_19755 = cljs.core.async.untap_STAR_.call(null,m,inst_19750);
var state_19802__$1 = (function (){var statearr_19827 = state_19802;
(statearr_19827[(19)] = inst_19754);

return statearr_19827;
})();
var statearr_19828_19903 = state_19802__$1;
(statearr_19828_19903[(2)] = inst_19755);

(statearr_19828_19903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (32))){
var inst_19745 = (state_19802[(9)]);
var inst_19744 = (state_19802[(20)]);
var inst_19743 = (state_19802[(11)]);
var inst_19742 = (state_19802[(21)]);
var inst_19757 = (state_19802[(2)]);
var inst_19758 = (inst_19745 + (1));
var tmp19823 = inst_19744;
var tmp19824 = inst_19743;
var tmp19825 = inst_19742;
var inst_19742__$1 = tmp19825;
var inst_19743__$1 = tmp19824;
var inst_19744__$1 = tmp19823;
var inst_19745__$1 = inst_19758;
var state_19802__$1 = (function (){var statearr_19829 = state_19802;
(statearr_19829[(9)] = inst_19745__$1);

(statearr_19829[(20)] = inst_19744__$1);

(statearr_19829[(22)] = inst_19757);

(statearr_19829[(11)] = inst_19743__$1);

(statearr_19829[(21)] = inst_19742__$1);

return statearr_19829;
})();
var statearr_19830_19904 = state_19802__$1;
(statearr_19830_19904[(2)] = null);

(statearr_19830_19904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (40))){
var inst_19770 = (state_19802[(23)]);
var inst_19774 = done.call(null,null);
var inst_19775 = cljs.core.async.untap_STAR_.call(null,m,inst_19770);
var state_19802__$1 = (function (){var statearr_19831 = state_19802;
(statearr_19831[(24)] = inst_19774);

return statearr_19831;
})();
var statearr_19832_19905 = state_19802__$1;
(statearr_19832_19905[(2)] = inst_19775);

(statearr_19832_19905[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (33))){
var inst_19761 = (state_19802[(25)]);
var inst_19763 = cljs.core.chunked_seq_QMARK_.call(null,inst_19761);
var state_19802__$1 = state_19802;
if(inst_19763){
var statearr_19833_19906 = state_19802__$1;
(statearr_19833_19906[(1)] = (36));

} else {
var statearr_19834_19907 = state_19802__$1;
(statearr_19834_19907[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (13))){
var inst_19693 = (state_19802[(26)]);
var inst_19696 = cljs.core.async.close_BANG_.call(null,inst_19693);
var state_19802__$1 = state_19802;
var statearr_19835_19908 = state_19802__$1;
(statearr_19835_19908[(2)] = inst_19696);

(statearr_19835_19908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (22))){
var inst_19714 = (state_19802[(8)]);
var inst_19717 = cljs.core.async.close_BANG_.call(null,inst_19714);
var state_19802__$1 = state_19802;
var statearr_19836_19909 = state_19802__$1;
(statearr_19836_19909[(2)] = inst_19717);

(statearr_19836_19909[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (36))){
var inst_19761 = (state_19802[(25)]);
var inst_19765 = cljs.core.chunk_first.call(null,inst_19761);
var inst_19766 = cljs.core.chunk_rest.call(null,inst_19761);
var inst_19767 = cljs.core.count.call(null,inst_19765);
var inst_19742 = inst_19766;
var inst_19743 = inst_19765;
var inst_19744 = inst_19767;
var inst_19745 = (0);
var state_19802__$1 = (function (){var statearr_19837 = state_19802;
(statearr_19837[(9)] = inst_19745);

(statearr_19837[(20)] = inst_19744);

(statearr_19837[(11)] = inst_19743);

(statearr_19837[(21)] = inst_19742);

return statearr_19837;
})();
var statearr_19838_19910 = state_19802__$1;
(statearr_19838_19910[(2)] = null);

(statearr_19838_19910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (41))){
var inst_19761 = (state_19802[(25)]);
var inst_19777 = (state_19802[(2)]);
var inst_19778 = cljs.core.next.call(null,inst_19761);
var inst_19742 = inst_19778;
var inst_19743 = null;
var inst_19744 = (0);
var inst_19745 = (0);
var state_19802__$1 = (function (){var statearr_19839 = state_19802;
(statearr_19839[(9)] = inst_19745);

(statearr_19839[(20)] = inst_19744);

(statearr_19839[(11)] = inst_19743);

(statearr_19839[(21)] = inst_19742);

(statearr_19839[(27)] = inst_19777);

return statearr_19839;
})();
var statearr_19840_19911 = state_19802__$1;
(statearr_19840_19911[(2)] = null);

(statearr_19840_19911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (43))){
var state_19802__$1 = state_19802;
var statearr_19841_19912 = state_19802__$1;
(statearr_19841_19912[(2)] = null);

(statearr_19841_19912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (29))){
var inst_19786 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19842_19913 = state_19802__$1;
(statearr_19842_19913[(2)] = inst_19786);

(statearr_19842_19913[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (44))){
var inst_19795 = (state_19802[(2)]);
var state_19802__$1 = (function (){var statearr_19843 = state_19802;
(statearr_19843[(28)] = inst_19795);

return statearr_19843;
})();
var statearr_19844_19914 = state_19802__$1;
(statearr_19844_19914[(2)] = null);

(statearr_19844_19914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (6))){
var inst_19734 = (state_19802[(29)]);
var inst_19733 = cljs.core.deref.call(null,cs);
var inst_19734__$1 = cljs.core.keys.call(null,inst_19733);
var inst_19735 = cljs.core.count.call(null,inst_19734__$1);
var inst_19736 = cljs.core.reset_BANG_.call(null,dctr,inst_19735);
var inst_19741 = cljs.core.seq.call(null,inst_19734__$1);
var inst_19742 = inst_19741;
var inst_19743 = null;
var inst_19744 = (0);
var inst_19745 = (0);
var state_19802__$1 = (function (){var statearr_19845 = state_19802;
(statearr_19845[(9)] = inst_19745);

(statearr_19845[(20)] = inst_19744);

(statearr_19845[(29)] = inst_19734__$1);

(statearr_19845[(11)] = inst_19743);

(statearr_19845[(21)] = inst_19742);

(statearr_19845[(30)] = inst_19736);

return statearr_19845;
})();
var statearr_19846_19915 = state_19802__$1;
(statearr_19846_19915[(2)] = null);

(statearr_19846_19915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (28))){
var inst_19761 = (state_19802[(25)]);
var inst_19742 = (state_19802[(21)]);
var inst_19761__$1 = cljs.core.seq.call(null,inst_19742);
var state_19802__$1 = (function (){var statearr_19847 = state_19802;
(statearr_19847[(25)] = inst_19761__$1);

return statearr_19847;
})();
if(inst_19761__$1){
var statearr_19848_19916 = state_19802__$1;
(statearr_19848_19916[(1)] = (33));

} else {
var statearr_19849_19917 = state_19802__$1;
(statearr_19849_19917[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (25))){
var inst_19745 = (state_19802[(9)]);
var inst_19744 = (state_19802[(20)]);
var inst_19747 = (inst_19745 < inst_19744);
var inst_19748 = inst_19747;
var state_19802__$1 = state_19802;
if(cljs.core.truth_(inst_19748)){
var statearr_19850_19918 = state_19802__$1;
(statearr_19850_19918[(1)] = (27));

} else {
var statearr_19851_19919 = state_19802__$1;
(statearr_19851_19919[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (34))){
var state_19802__$1 = state_19802;
var statearr_19852_19920 = state_19802__$1;
(statearr_19852_19920[(2)] = null);

(statearr_19852_19920[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (17))){
var state_19802__$1 = state_19802;
var statearr_19853_19921 = state_19802__$1;
(statearr_19853_19921[(2)] = null);

(statearr_19853_19921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (3))){
var inst_19800 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19802__$1,inst_19800);
} else {
if((state_val_19803 === (12))){
var inst_19729 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19854_19922 = state_19802__$1;
(statearr_19854_19922[(2)] = inst_19729);

(statearr_19854_19922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (2))){
var state_19802__$1 = state_19802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19802__$1,(4),ch);
} else {
if((state_val_19803 === (23))){
var state_19802__$1 = state_19802;
var statearr_19855_19923 = state_19802__$1;
(statearr_19855_19923[(2)] = null);

(statearr_19855_19923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (35))){
var inst_19784 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19856_19924 = state_19802__$1;
(statearr_19856_19924[(2)] = inst_19784);

(statearr_19856_19924[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (19))){
var inst_19703 = (state_19802[(7)]);
var inst_19707 = cljs.core.chunk_first.call(null,inst_19703);
var inst_19708 = cljs.core.chunk_rest.call(null,inst_19703);
var inst_19709 = cljs.core.count.call(null,inst_19707);
var inst_19683 = inst_19708;
var inst_19684 = inst_19707;
var inst_19685 = inst_19709;
var inst_19686 = (0);
var state_19802__$1 = (function (){var statearr_19857 = state_19802;
(statearr_19857[(13)] = inst_19685);

(statearr_19857[(15)] = inst_19684);

(statearr_19857[(16)] = inst_19686);

(statearr_19857[(17)] = inst_19683);

return statearr_19857;
})();
var statearr_19858_19925 = state_19802__$1;
(statearr_19858_19925[(2)] = null);

(statearr_19858_19925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (11))){
var inst_19703 = (state_19802[(7)]);
var inst_19683 = (state_19802[(17)]);
var inst_19703__$1 = cljs.core.seq.call(null,inst_19683);
var state_19802__$1 = (function (){var statearr_19859 = state_19802;
(statearr_19859[(7)] = inst_19703__$1);

return statearr_19859;
})();
if(inst_19703__$1){
var statearr_19860_19926 = state_19802__$1;
(statearr_19860_19926[(1)] = (16));

} else {
var statearr_19861_19927 = state_19802__$1;
(statearr_19861_19927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (9))){
var inst_19731 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19862_19928 = state_19802__$1;
(statearr_19862_19928[(2)] = inst_19731);

(statearr_19862_19928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (5))){
var inst_19681 = cljs.core.deref.call(null,cs);
var inst_19682 = cljs.core.seq.call(null,inst_19681);
var inst_19683 = inst_19682;
var inst_19684 = null;
var inst_19685 = (0);
var inst_19686 = (0);
var state_19802__$1 = (function (){var statearr_19863 = state_19802;
(statearr_19863[(13)] = inst_19685);

(statearr_19863[(15)] = inst_19684);

(statearr_19863[(16)] = inst_19686);

(statearr_19863[(17)] = inst_19683);

return statearr_19863;
})();
var statearr_19864_19929 = state_19802__$1;
(statearr_19864_19929[(2)] = null);

(statearr_19864_19929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (14))){
var state_19802__$1 = state_19802;
var statearr_19865_19930 = state_19802__$1;
(statearr_19865_19930[(2)] = null);

(statearr_19865_19930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (45))){
var inst_19792 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19866_19931 = state_19802__$1;
(statearr_19866_19931[(2)] = inst_19792);

(statearr_19866_19931[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (26))){
var inst_19734 = (state_19802[(29)]);
var inst_19788 = (state_19802[(2)]);
var inst_19789 = cljs.core.seq.call(null,inst_19734);
var state_19802__$1 = (function (){var statearr_19867 = state_19802;
(statearr_19867[(31)] = inst_19788);

return statearr_19867;
})();
if(inst_19789){
var statearr_19868_19932 = state_19802__$1;
(statearr_19868_19932[(1)] = (42));

} else {
var statearr_19869_19933 = state_19802__$1;
(statearr_19869_19933[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (16))){
var inst_19703 = (state_19802[(7)]);
var inst_19705 = cljs.core.chunked_seq_QMARK_.call(null,inst_19703);
var state_19802__$1 = state_19802;
if(inst_19705){
var statearr_19870_19934 = state_19802__$1;
(statearr_19870_19934[(1)] = (19));

} else {
var statearr_19871_19935 = state_19802__$1;
(statearr_19871_19935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (38))){
var inst_19781 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19872_19936 = state_19802__$1;
(statearr_19872_19936[(2)] = inst_19781);

(statearr_19872_19936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (30))){
var state_19802__$1 = state_19802;
var statearr_19873_19937 = state_19802__$1;
(statearr_19873_19937[(2)] = null);

(statearr_19873_19937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (10))){
var inst_19684 = (state_19802[(15)]);
var inst_19686 = (state_19802[(16)]);
var inst_19692 = cljs.core._nth.call(null,inst_19684,inst_19686);
var inst_19693 = cljs.core.nth.call(null,inst_19692,(0),null);
var inst_19694 = cljs.core.nth.call(null,inst_19692,(1),null);
var state_19802__$1 = (function (){var statearr_19874 = state_19802;
(statearr_19874[(26)] = inst_19693);

return statearr_19874;
})();
if(cljs.core.truth_(inst_19694)){
var statearr_19875_19938 = state_19802__$1;
(statearr_19875_19938[(1)] = (13));

} else {
var statearr_19876_19939 = state_19802__$1;
(statearr_19876_19939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (18))){
var inst_19727 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19877_19940 = state_19802__$1;
(statearr_19877_19940[(2)] = inst_19727);

(statearr_19877_19940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (42))){
var state_19802__$1 = state_19802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19802__$1,(45),dchan);
} else {
if((state_val_19803 === (37))){
var inst_19761 = (state_19802[(25)]);
var inst_19770 = (state_19802[(23)]);
var inst_19674 = (state_19802[(12)]);
var inst_19770__$1 = cljs.core.first.call(null,inst_19761);
var inst_19771 = cljs.core.async.put_BANG_.call(null,inst_19770__$1,inst_19674,done);
var state_19802__$1 = (function (){var statearr_19878 = state_19802;
(statearr_19878[(23)] = inst_19770__$1);

return statearr_19878;
})();
if(cljs.core.truth_(inst_19771)){
var statearr_19879_19941 = state_19802__$1;
(statearr_19879_19941[(1)] = (39));

} else {
var statearr_19880_19942 = state_19802__$1;
(statearr_19880_19942[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (8))){
var inst_19685 = (state_19802[(13)]);
var inst_19686 = (state_19802[(16)]);
var inst_19688 = (inst_19686 < inst_19685);
var inst_19689 = inst_19688;
var state_19802__$1 = state_19802;
if(cljs.core.truth_(inst_19689)){
var statearr_19881_19943 = state_19802__$1;
(statearr_19881_19943[(1)] = (10));

} else {
var statearr_19882_19944 = state_19802__$1;
(statearr_19882_19944[(1)] = (11));

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
});})(c__5962__auto___19890,cs,m,dchan,dctr,done))
;
return ((function (switch__5947__auto__,c__5962__auto___19890,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_19886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19886[(0)] = state_machine__5948__auto__);

(statearr_19886[(1)] = (1));

return statearr_19886;
});
var state_machine__5948__auto____1 = (function (state_19802){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_19802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e19887){if((e19887 instanceof Object)){
var ex__5951__auto__ = e19887;
var statearr_19888_19945 = state_19802;
(statearr_19888_19945[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19946 = state_19802;
state_19802 = G__19946;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_19802){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_19802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___19890,cs,m,dchan,dctr,done))
})();
var state__5964__auto__ = (function (){var statearr_19889 = f__5963__auto__.call(null);
(statearr_19889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___19890);

return statearr_19889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___19890,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj19948 = {};
return obj19948;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19949){
var map__19954 = p__19949;
var map__19954__$1 = ((cljs.core.seq_QMARK_.call(null,map__19954))?cljs.core.apply.call(null,cljs.core.hash_map,map__19954):map__19954);
var opts = map__19954__$1;
var statearr_19955_19958 = state;
(statearr_19955_19958[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19954,map__19954__$1,opts){
return (function (val){
var statearr_19956_19959 = state;
(statearr_19956_19959[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19954,map__19954__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19957_19960 = state;
(statearr_19957_19960[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19949 = null;
if (arguments.length > 3) {
  p__19949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19949);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19961){
var state = cljs.core.first(arglist__19961);
arglist__19961 = cljs.core.next(arglist__19961);
var cont_block = cljs.core.first(arglist__19961);
arglist__19961 = cljs.core.next(arglist__19961);
var ports = cljs.core.first(arglist__19961);
var p__19949 = cljs.core.rest(arglist__19961);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19949);
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
if(typeof cljs.core.async.t20081 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20081 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20082){
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
this.meta20082 = meta20082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20081.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20081.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20081.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20081.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20081.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20081.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20081.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20083){
var self__ = this;
var _20083__$1 = this;
return self__.meta20082;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20083,meta20082__$1){
var self__ = this;
var _20083__$1 = this;
return (new cljs.core.async.t20081(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20082__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20081.cljs$lang$type = true;

cljs.core.async.t20081.cljs$lang$ctorStr = "cljs.core.async/t20081";

cljs.core.async.t20081.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20081");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20081 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20082){
return (new cljs.core.async.t20081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20082));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20081(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__5962__auto___20200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20153){
var state_val_20154 = (state_20153[(1)]);
if((state_val_20154 === (7))){
var inst_20097 = (state_20153[(7)]);
var inst_20102 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20097);
var state_20153__$1 = state_20153;
var statearr_20155_20201 = state_20153__$1;
(statearr_20155_20201[(2)] = inst_20102);

(statearr_20155_20201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (20))){
var inst_20112 = (state_20153[(8)]);
var state_20153__$1 = state_20153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20153__$1,(23),out,inst_20112);
} else {
if((state_val_20154 === (1))){
var inst_20087 = (state_20153[(9)]);
var inst_20087__$1 = calc_state.call(null);
var inst_20088 = cljs.core.seq_QMARK_.call(null,inst_20087__$1);
var state_20153__$1 = (function (){var statearr_20156 = state_20153;
(statearr_20156[(9)] = inst_20087__$1);

return statearr_20156;
})();
if(inst_20088){
var statearr_20157_20202 = state_20153__$1;
(statearr_20157_20202[(1)] = (2));

} else {
var statearr_20158_20203 = state_20153__$1;
(statearr_20158_20203[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (24))){
var inst_20105 = (state_20153[(10)]);
var inst_20097 = inst_20105;
var state_20153__$1 = (function (){var statearr_20159 = state_20153;
(statearr_20159[(7)] = inst_20097);

return statearr_20159;
})();
var statearr_20160_20204 = state_20153__$1;
(statearr_20160_20204[(2)] = null);

(statearr_20160_20204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (4))){
var inst_20087 = (state_20153[(9)]);
var inst_20093 = (state_20153[(2)]);
var inst_20094 = cljs.core.get.call(null,inst_20093,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20095 = cljs.core.get.call(null,inst_20093,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20096 = cljs.core.get.call(null,inst_20093,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20097 = inst_20087;
var state_20153__$1 = (function (){var statearr_20161 = state_20153;
(statearr_20161[(7)] = inst_20097);

(statearr_20161[(11)] = inst_20096);

(statearr_20161[(12)] = inst_20094);

(statearr_20161[(13)] = inst_20095);

return statearr_20161;
})();
var statearr_20162_20205 = state_20153__$1;
(statearr_20162_20205[(2)] = null);

(statearr_20162_20205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (15))){
var state_20153__$1 = state_20153;
var statearr_20163_20206 = state_20153__$1;
(statearr_20163_20206[(2)] = null);

(statearr_20163_20206[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (21))){
var inst_20105 = (state_20153[(10)]);
var inst_20097 = inst_20105;
var state_20153__$1 = (function (){var statearr_20164 = state_20153;
(statearr_20164[(7)] = inst_20097);

return statearr_20164;
})();
var statearr_20165_20207 = state_20153__$1;
(statearr_20165_20207[(2)] = null);

(statearr_20165_20207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (13))){
var inst_20149 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
var statearr_20166_20208 = state_20153__$1;
(statearr_20166_20208[(2)] = inst_20149);

(statearr_20166_20208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (22))){
var inst_20147 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
var statearr_20167_20209 = state_20153__$1;
(statearr_20167_20209[(2)] = inst_20147);

(statearr_20167_20209[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (6))){
var inst_20151 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20153__$1,inst_20151);
} else {
if((state_val_20154 === (25))){
var state_20153__$1 = state_20153;
var statearr_20168_20210 = state_20153__$1;
(statearr_20168_20210[(2)] = null);

(statearr_20168_20210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (17))){
var inst_20127 = (state_20153[(14)]);
var state_20153__$1 = state_20153;
var statearr_20169_20211 = state_20153__$1;
(statearr_20169_20211[(2)] = inst_20127);

(statearr_20169_20211[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (3))){
var inst_20087 = (state_20153[(9)]);
var state_20153__$1 = state_20153;
var statearr_20170_20212 = state_20153__$1;
(statearr_20170_20212[(2)] = inst_20087);

(statearr_20170_20212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (12))){
var inst_20108 = (state_20153[(15)]);
var inst_20113 = (state_20153[(16)]);
var inst_20127 = (state_20153[(14)]);
var inst_20127__$1 = inst_20108.call(null,inst_20113);
var state_20153__$1 = (function (){var statearr_20171 = state_20153;
(statearr_20171[(14)] = inst_20127__$1);

return statearr_20171;
})();
if(cljs.core.truth_(inst_20127__$1)){
var statearr_20172_20213 = state_20153__$1;
(statearr_20172_20213[(1)] = (17));

} else {
var statearr_20173_20214 = state_20153__$1;
(statearr_20173_20214[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (2))){
var inst_20087 = (state_20153[(9)]);
var inst_20090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20087);
var state_20153__$1 = state_20153;
var statearr_20174_20215 = state_20153__$1;
(statearr_20174_20215[(2)] = inst_20090);

(statearr_20174_20215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (23))){
var inst_20138 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
if(cljs.core.truth_(inst_20138)){
var statearr_20175_20216 = state_20153__$1;
(statearr_20175_20216[(1)] = (24));

} else {
var statearr_20176_20217 = state_20153__$1;
(statearr_20176_20217[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (19))){
var inst_20135 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
if(cljs.core.truth_(inst_20135)){
var statearr_20177_20218 = state_20153__$1;
(statearr_20177_20218[(1)] = (20));

} else {
var statearr_20178_20219 = state_20153__$1;
(statearr_20178_20219[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (11))){
var inst_20112 = (state_20153[(8)]);
var inst_20118 = (inst_20112 == null);
var state_20153__$1 = state_20153;
if(cljs.core.truth_(inst_20118)){
var statearr_20179_20220 = state_20153__$1;
(statearr_20179_20220[(1)] = (14));

} else {
var statearr_20180_20221 = state_20153__$1;
(statearr_20180_20221[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (9))){
var inst_20105 = (state_20153[(10)]);
var inst_20105__$1 = (state_20153[(2)]);
var inst_20106 = cljs.core.get.call(null,inst_20105__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20107 = cljs.core.get.call(null,inst_20105__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20108 = cljs.core.get.call(null,inst_20105__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20153__$1 = (function (){var statearr_20181 = state_20153;
(statearr_20181[(15)] = inst_20108);

(statearr_20181[(17)] = inst_20107);

(statearr_20181[(10)] = inst_20105__$1);

return statearr_20181;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20153__$1,(10),inst_20106);
} else {
if((state_val_20154 === (5))){
var inst_20097 = (state_20153[(7)]);
var inst_20100 = cljs.core.seq_QMARK_.call(null,inst_20097);
var state_20153__$1 = state_20153;
if(inst_20100){
var statearr_20182_20222 = state_20153__$1;
(statearr_20182_20222[(1)] = (7));

} else {
var statearr_20183_20223 = state_20153__$1;
(statearr_20183_20223[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (14))){
var inst_20113 = (state_20153[(16)]);
var inst_20120 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20113);
var state_20153__$1 = state_20153;
var statearr_20184_20224 = state_20153__$1;
(statearr_20184_20224[(2)] = inst_20120);

(statearr_20184_20224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (26))){
var inst_20143 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
var statearr_20185_20225 = state_20153__$1;
(statearr_20185_20225[(2)] = inst_20143);

(statearr_20185_20225[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (16))){
var inst_20123 = (state_20153[(2)]);
var inst_20124 = calc_state.call(null);
var inst_20097 = inst_20124;
var state_20153__$1 = (function (){var statearr_20186 = state_20153;
(statearr_20186[(7)] = inst_20097);

(statearr_20186[(18)] = inst_20123);

return statearr_20186;
})();
var statearr_20187_20226 = state_20153__$1;
(statearr_20187_20226[(2)] = null);

(statearr_20187_20226[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (10))){
var inst_20112 = (state_20153[(8)]);
var inst_20113 = (state_20153[(16)]);
var inst_20111 = (state_20153[(2)]);
var inst_20112__$1 = cljs.core.nth.call(null,inst_20111,(0),null);
var inst_20113__$1 = cljs.core.nth.call(null,inst_20111,(1),null);
var inst_20114 = (inst_20112__$1 == null);
var inst_20115 = cljs.core._EQ_.call(null,inst_20113__$1,change);
var inst_20116 = (inst_20114) || (inst_20115);
var state_20153__$1 = (function (){var statearr_20188 = state_20153;
(statearr_20188[(8)] = inst_20112__$1);

(statearr_20188[(16)] = inst_20113__$1);

return statearr_20188;
})();
if(cljs.core.truth_(inst_20116)){
var statearr_20189_20227 = state_20153__$1;
(statearr_20189_20227[(1)] = (11));

} else {
var statearr_20190_20228 = state_20153__$1;
(statearr_20190_20228[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (18))){
var inst_20108 = (state_20153[(15)]);
var inst_20113 = (state_20153[(16)]);
var inst_20107 = (state_20153[(17)]);
var inst_20130 = cljs.core.empty_QMARK_.call(null,inst_20108);
var inst_20131 = inst_20107.call(null,inst_20113);
var inst_20132 = cljs.core.not.call(null,inst_20131);
var inst_20133 = (inst_20130) && (inst_20132);
var state_20153__$1 = state_20153;
var statearr_20191_20229 = state_20153__$1;
(statearr_20191_20229[(2)] = inst_20133);

(statearr_20191_20229[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (8))){
var inst_20097 = (state_20153[(7)]);
var state_20153__$1 = state_20153;
var statearr_20192_20230 = state_20153__$1;
(statearr_20192_20230[(2)] = inst_20097);

(statearr_20192_20230[(1)] = (9));


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
});})(c__5962__auto___20200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5947__auto__,c__5962__auto___20200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20196[(0)] = state_machine__5948__auto__);

(statearr_20196[(1)] = (1));

return statearr_20196;
});
var state_machine__5948__auto____1 = (function (state_20153){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20197){if((e20197 instanceof Object)){
var ex__5951__auto__ = e20197;
var statearr_20198_20231 = state_20153;
(statearr_20198_20231[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20232 = state_20153;
state_20153 = G__20232;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20153){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5964__auto__ = (function (){var statearr_20199 = f__5963__auto__.call(null);
(statearr_20199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20200);

return statearr_20199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20234 = {};
return obj20234;
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
return (function (p1__20235_SHARP_){
if(cljs.core.truth_(p1__20235_SHARP_.call(null,topic))){
return p1__20235_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20235_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20358 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20358 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20359){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20359 = meta20359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20358.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20358.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20358.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20358.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20360){
var self__ = this;
var _20360__$1 = this;
return self__.meta20359;
});})(mults,ensure_mult))
;

cljs.core.async.t20358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20360,meta20359__$1){
var self__ = this;
var _20360__$1 = this;
return (new cljs.core.async.t20358(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20359__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20358.cljs$lang$type = true;

cljs.core.async.t20358.cljs$lang$ctorStr = "cljs.core.async/t20358";

cljs.core.async.t20358.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20358");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20358 = ((function (mults,ensure_mult){
return (function __GT_t20358(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20359){
return (new cljs.core.async.t20358(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20359));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20358(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
})()
;
var c__5962__auto___20480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20480,mults,ensure_mult,p){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20480,mults,ensure_mult,p){
return (function (state_20432){
var state_val_20433 = (state_20432[(1)]);
if((state_val_20433 === (7))){
var inst_20428 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
var statearr_20434_20481 = state_20432__$1;
(statearr_20434_20481[(2)] = inst_20428);

(statearr_20434_20481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (20))){
var state_20432__$1 = state_20432;
var statearr_20435_20482 = state_20432__$1;
(statearr_20435_20482[(2)] = null);

(statearr_20435_20482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (1))){
var state_20432__$1 = state_20432;
var statearr_20436_20483 = state_20432__$1;
(statearr_20436_20483[(2)] = null);

(statearr_20436_20483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (24))){
var inst_20411 = (state_20432[(7)]);
var inst_20420 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20411);
var state_20432__$1 = state_20432;
var statearr_20437_20484 = state_20432__$1;
(statearr_20437_20484[(2)] = inst_20420);

(statearr_20437_20484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (4))){
var inst_20363 = (state_20432[(8)]);
var inst_20363__$1 = (state_20432[(2)]);
var inst_20364 = (inst_20363__$1 == null);
var state_20432__$1 = (function (){var statearr_20438 = state_20432;
(statearr_20438[(8)] = inst_20363__$1);

return statearr_20438;
})();
if(cljs.core.truth_(inst_20364)){
var statearr_20439_20485 = state_20432__$1;
(statearr_20439_20485[(1)] = (5));

} else {
var statearr_20440_20486 = state_20432__$1;
(statearr_20440_20486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (15))){
var inst_20405 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
var statearr_20441_20487 = state_20432__$1;
(statearr_20441_20487[(2)] = inst_20405);

(statearr_20441_20487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (21))){
var inst_20425 = (state_20432[(2)]);
var state_20432__$1 = (function (){var statearr_20442 = state_20432;
(statearr_20442[(9)] = inst_20425);

return statearr_20442;
})();
var statearr_20443_20488 = state_20432__$1;
(statearr_20443_20488[(2)] = null);

(statearr_20443_20488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (13))){
var inst_20387 = (state_20432[(10)]);
var inst_20389 = cljs.core.chunked_seq_QMARK_.call(null,inst_20387);
var state_20432__$1 = state_20432;
if(inst_20389){
var statearr_20444_20489 = state_20432__$1;
(statearr_20444_20489[(1)] = (16));

} else {
var statearr_20445_20490 = state_20432__$1;
(statearr_20445_20490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (22))){
var inst_20417 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
if(cljs.core.truth_(inst_20417)){
var statearr_20446_20491 = state_20432__$1;
(statearr_20446_20491[(1)] = (23));

} else {
var statearr_20447_20492 = state_20432__$1;
(statearr_20447_20492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (6))){
var inst_20363 = (state_20432[(8)]);
var inst_20411 = (state_20432[(7)]);
var inst_20413 = (state_20432[(11)]);
var inst_20411__$1 = topic_fn.call(null,inst_20363);
var inst_20412 = cljs.core.deref.call(null,mults);
var inst_20413__$1 = cljs.core.get.call(null,inst_20412,inst_20411__$1);
var state_20432__$1 = (function (){var statearr_20448 = state_20432;
(statearr_20448[(7)] = inst_20411__$1);

(statearr_20448[(11)] = inst_20413__$1);

return statearr_20448;
})();
if(cljs.core.truth_(inst_20413__$1)){
var statearr_20449_20493 = state_20432__$1;
(statearr_20449_20493[(1)] = (19));

} else {
var statearr_20450_20494 = state_20432__$1;
(statearr_20450_20494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (25))){
var inst_20422 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
var statearr_20451_20495 = state_20432__$1;
(statearr_20451_20495[(2)] = inst_20422);

(statearr_20451_20495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (17))){
var inst_20387 = (state_20432[(10)]);
var inst_20396 = cljs.core.first.call(null,inst_20387);
var inst_20397 = cljs.core.async.muxch_STAR_.call(null,inst_20396);
var inst_20398 = cljs.core.async.close_BANG_.call(null,inst_20397);
var inst_20399 = cljs.core.next.call(null,inst_20387);
var inst_20373 = inst_20399;
var inst_20374 = null;
var inst_20375 = (0);
var inst_20376 = (0);
var state_20432__$1 = (function (){var statearr_20452 = state_20432;
(statearr_20452[(12)] = inst_20398);

(statearr_20452[(13)] = inst_20373);

(statearr_20452[(14)] = inst_20374);

(statearr_20452[(15)] = inst_20376);

(statearr_20452[(16)] = inst_20375);

return statearr_20452;
})();
var statearr_20453_20496 = state_20432__$1;
(statearr_20453_20496[(2)] = null);

(statearr_20453_20496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (3))){
var inst_20430 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20432__$1,inst_20430);
} else {
if((state_val_20433 === (12))){
var inst_20407 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
var statearr_20454_20497 = state_20432__$1;
(statearr_20454_20497[(2)] = inst_20407);

(statearr_20454_20497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (2))){
var state_20432__$1 = state_20432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20432__$1,(4),ch);
} else {
if((state_val_20433 === (23))){
var state_20432__$1 = state_20432;
var statearr_20455_20498 = state_20432__$1;
(statearr_20455_20498[(2)] = null);

(statearr_20455_20498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (19))){
var inst_20363 = (state_20432[(8)]);
var inst_20413 = (state_20432[(11)]);
var inst_20415 = cljs.core.async.muxch_STAR_.call(null,inst_20413);
var state_20432__$1 = state_20432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20432__$1,(22),inst_20415,inst_20363);
} else {
if((state_val_20433 === (11))){
var inst_20387 = (state_20432[(10)]);
var inst_20373 = (state_20432[(13)]);
var inst_20387__$1 = cljs.core.seq.call(null,inst_20373);
var state_20432__$1 = (function (){var statearr_20456 = state_20432;
(statearr_20456[(10)] = inst_20387__$1);

return statearr_20456;
})();
if(inst_20387__$1){
var statearr_20457_20499 = state_20432__$1;
(statearr_20457_20499[(1)] = (13));

} else {
var statearr_20458_20500 = state_20432__$1;
(statearr_20458_20500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (9))){
var inst_20409 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
var statearr_20459_20501 = state_20432__$1;
(statearr_20459_20501[(2)] = inst_20409);

(statearr_20459_20501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (5))){
var inst_20370 = cljs.core.deref.call(null,mults);
var inst_20371 = cljs.core.vals.call(null,inst_20370);
var inst_20372 = cljs.core.seq.call(null,inst_20371);
var inst_20373 = inst_20372;
var inst_20374 = null;
var inst_20375 = (0);
var inst_20376 = (0);
var state_20432__$1 = (function (){var statearr_20460 = state_20432;
(statearr_20460[(13)] = inst_20373);

(statearr_20460[(14)] = inst_20374);

(statearr_20460[(15)] = inst_20376);

(statearr_20460[(16)] = inst_20375);

return statearr_20460;
})();
var statearr_20461_20502 = state_20432__$1;
(statearr_20461_20502[(2)] = null);

(statearr_20461_20502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (14))){
var state_20432__$1 = state_20432;
var statearr_20465_20503 = state_20432__$1;
(statearr_20465_20503[(2)] = null);

(statearr_20465_20503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (16))){
var inst_20387 = (state_20432[(10)]);
var inst_20391 = cljs.core.chunk_first.call(null,inst_20387);
var inst_20392 = cljs.core.chunk_rest.call(null,inst_20387);
var inst_20393 = cljs.core.count.call(null,inst_20391);
var inst_20373 = inst_20392;
var inst_20374 = inst_20391;
var inst_20375 = inst_20393;
var inst_20376 = (0);
var state_20432__$1 = (function (){var statearr_20466 = state_20432;
(statearr_20466[(13)] = inst_20373);

(statearr_20466[(14)] = inst_20374);

(statearr_20466[(15)] = inst_20376);

(statearr_20466[(16)] = inst_20375);

return statearr_20466;
})();
var statearr_20467_20504 = state_20432__$1;
(statearr_20467_20504[(2)] = null);

(statearr_20467_20504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (10))){
var inst_20373 = (state_20432[(13)]);
var inst_20374 = (state_20432[(14)]);
var inst_20376 = (state_20432[(15)]);
var inst_20375 = (state_20432[(16)]);
var inst_20381 = cljs.core._nth.call(null,inst_20374,inst_20376);
var inst_20382 = cljs.core.async.muxch_STAR_.call(null,inst_20381);
var inst_20383 = cljs.core.async.close_BANG_.call(null,inst_20382);
var inst_20384 = (inst_20376 + (1));
var tmp20462 = inst_20373;
var tmp20463 = inst_20374;
var tmp20464 = inst_20375;
var inst_20373__$1 = tmp20462;
var inst_20374__$1 = tmp20463;
var inst_20375__$1 = tmp20464;
var inst_20376__$1 = inst_20384;
var state_20432__$1 = (function (){var statearr_20468 = state_20432;
(statearr_20468[(13)] = inst_20373__$1);

(statearr_20468[(14)] = inst_20374__$1);

(statearr_20468[(15)] = inst_20376__$1);

(statearr_20468[(17)] = inst_20383);

(statearr_20468[(16)] = inst_20375__$1);

return statearr_20468;
})();
var statearr_20469_20505 = state_20432__$1;
(statearr_20469_20505[(2)] = null);

(statearr_20469_20505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (18))){
var inst_20402 = (state_20432[(2)]);
var state_20432__$1 = state_20432;
var statearr_20470_20506 = state_20432__$1;
(statearr_20470_20506[(2)] = inst_20402);

(statearr_20470_20506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20433 === (8))){
var inst_20376 = (state_20432[(15)]);
var inst_20375 = (state_20432[(16)]);
var inst_20378 = (inst_20376 < inst_20375);
var inst_20379 = inst_20378;
var state_20432__$1 = state_20432;
if(cljs.core.truth_(inst_20379)){
var statearr_20471_20507 = state_20432__$1;
(statearr_20471_20507[(1)] = (10));

} else {
var statearr_20472_20508 = state_20432__$1;
(statearr_20472_20508[(1)] = (11));

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
});})(c__5962__auto___20480,mults,ensure_mult,p))
;
return ((function (switch__5947__auto__,c__5962__auto___20480,mults,ensure_mult,p){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20476[(0)] = state_machine__5948__auto__);

(statearr_20476[(1)] = (1));

return statearr_20476;
});
var state_machine__5948__auto____1 = (function (state_20432){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20477){if((e20477 instanceof Object)){
var ex__5951__auto__ = e20477;
var statearr_20478_20509 = state_20432;
(statearr_20478_20509[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20510 = state_20432;
state_20432 = G__20510;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20432){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20480,mults,ensure_mult,p))
})();
var state__5964__auto__ = (function (){var statearr_20479 = f__5963__auto__.call(null);
(statearr_20479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20480);

return statearr_20479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20480,mults,ensure_mult,p))
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
var c__5962__auto___20647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20617){
var state_val_20618 = (state_20617[(1)]);
if((state_val_20618 === (7))){
var state_20617__$1 = state_20617;
var statearr_20619_20648 = state_20617__$1;
(statearr_20619_20648[(2)] = null);

(statearr_20619_20648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (1))){
var state_20617__$1 = state_20617;
var statearr_20620_20649 = state_20617__$1;
(statearr_20620_20649[(2)] = null);

(statearr_20620_20649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (4))){
var inst_20581 = (state_20617[(7)]);
var inst_20583 = (inst_20581 < cnt);
var state_20617__$1 = state_20617;
if(cljs.core.truth_(inst_20583)){
var statearr_20621_20650 = state_20617__$1;
(statearr_20621_20650[(1)] = (6));

} else {
var statearr_20622_20651 = state_20617__$1;
(statearr_20622_20651[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (15))){
var inst_20613 = (state_20617[(2)]);
var state_20617__$1 = state_20617;
var statearr_20623_20652 = state_20617__$1;
(statearr_20623_20652[(2)] = inst_20613);

(statearr_20623_20652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (13))){
var inst_20606 = cljs.core.async.close_BANG_.call(null,out);
var state_20617__$1 = state_20617;
var statearr_20624_20653 = state_20617__$1;
(statearr_20624_20653[(2)] = inst_20606);

(statearr_20624_20653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (6))){
var state_20617__$1 = state_20617;
var statearr_20625_20654 = state_20617__$1;
(statearr_20625_20654[(2)] = null);

(statearr_20625_20654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (3))){
var inst_20615 = (state_20617[(2)]);
var state_20617__$1 = state_20617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20617__$1,inst_20615);
} else {
if((state_val_20618 === (12))){
var inst_20603 = (state_20617[(8)]);
var inst_20603__$1 = (state_20617[(2)]);
var inst_20604 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20603__$1);
var state_20617__$1 = (function (){var statearr_20626 = state_20617;
(statearr_20626[(8)] = inst_20603__$1);

return statearr_20626;
})();
if(cljs.core.truth_(inst_20604)){
var statearr_20627_20655 = state_20617__$1;
(statearr_20627_20655[(1)] = (13));

} else {
var statearr_20628_20656 = state_20617__$1;
(statearr_20628_20656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (2))){
var inst_20580 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20581 = (0);
var state_20617__$1 = (function (){var statearr_20629 = state_20617;
(statearr_20629[(9)] = inst_20580);

(statearr_20629[(7)] = inst_20581);

return statearr_20629;
})();
var statearr_20630_20657 = state_20617__$1;
(statearr_20630_20657[(2)] = null);

(statearr_20630_20657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (11))){
var inst_20581 = (state_20617[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20617,(10),Object,null,(9));
var inst_20590 = chs__$1.call(null,inst_20581);
var inst_20591 = done.call(null,inst_20581);
var inst_20592 = cljs.core.async.take_BANG_.call(null,inst_20590,inst_20591);
var state_20617__$1 = state_20617;
var statearr_20631_20658 = state_20617__$1;
(statearr_20631_20658[(2)] = inst_20592);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20617__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (9))){
var inst_20581 = (state_20617[(7)]);
var inst_20594 = (state_20617[(2)]);
var inst_20595 = (inst_20581 + (1));
var inst_20581__$1 = inst_20595;
var state_20617__$1 = (function (){var statearr_20632 = state_20617;
(statearr_20632[(10)] = inst_20594);

(statearr_20632[(7)] = inst_20581__$1);

return statearr_20632;
})();
var statearr_20633_20659 = state_20617__$1;
(statearr_20633_20659[(2)] = null);

(statearr_20633_20659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (5))){
var inst_20601 = (state_20617[(2)]);
var state_20617__$1 = (function (){var statearr_20634 = state_20617;
(statearr_20634[(11)] = inst_20601);

return statearr_20634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20617__$1,(12),dchan);
} else {
if((state_val_20618 === (14))){
var inst_20603 = (state_20617[(8)]);
var inst_20608 = cljs.core.apply.call(null,f,inst_20603);
var state_20617__$1 = state_20617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20617__$1,(16),out,inst_20608);
} else {
if((state_val_20618 === (16))){
var inst_20610 = (state_20617[(2)]);
var state_20617__$1 = (function (){var statearr_20635 = state_20617;
(statearr_20635[(12)] = inst_20610);

return statearr_20635;
})();
var statearr_20636_20660 = state_20617__$1;
(statearr_20636_20660[(2)] = null);

(statearr_20636_20660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (10))){
var inst_20585 = (state_20617[(2)]);
var inst_20586 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20617__$1 = (function (){var statearr_20637 = state_20617;
(statearr_20637[(13)] = inst_20585);

return statearr_20637;
})();
var statearr_20638_20661 = state_20617__$1;
(statearr_20638_20661[(2)] = inst_20586);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20617__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20618 === (8))){
var inst_20599 = (state_20617[(2)]);
var state_20617__$1 = state_20617;
var statearr_20639_20662 = state_20617__$1;
(statearr_20639_20662[(2)] = inst_20599);

(statearr_20639_20662[(1)] = (5));


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
});})(c__5962__auto___20647,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5947__auto__,c__5962__auto___20647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20643[(0)] = state_machine__5948__auto__);

(statearr_20643[(1)] = (1));

return statearr_20643;
});
var state_machine__5948__auto____1 = (function (state_20617){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20644){if((e20644 instanceof Object)){
var ex__5951__auto__ = e20644;
var statearr_20645_20663 = state_20617;
(statearr_20645_20663[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20664 = state_20617;
state_20617 = G__20664;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20617){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20647,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5964__auto__ = (function (){var statearr_20646 = f__5963__auto__.call(null);
(statearr_20646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20647);

return statearr_20646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20647,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5962__auto___20772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20772,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20772,out){
return (function (state_20748){
var state_val_20749 = (state_20748[(1)]);
if((state_val_20749 === (7))){
var inst_20728 = (state_20748[(7)]);
var inst_20727 = (state_20748[(8)]);
var inst_20727__$1 = (state_20748[(2)]);
var inst_20728__$1 = cljs.core.nth.call(null,inst_20727__$1,(0),null);
var inst_20729 = cljs.core.nth.call(null,inst_20727__$1,(1),null);
var inst_20730 = (inst_20728__$1 == null);
var state_20748__$1 = (function (){var statearr_20750 = state_20748;
(statearr_20750[(7)] = inst_20728__$1);

(statearr_20750[(8)] = inst_20727__$1);

(statearr_20750[(9)] = inst_20729);

return statearr_20750;
})();
if(cljs.core.truth_(inst_20730)){
var statearr_20751_20773 = state_20748__$1;
(statearr_20751_20773[(1)] = (8));

} else {
var statearr_20752_20774 = state_20748__$1;
(statearr_20752_20774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (1))){
var inst_20719 = cljs.core.vec.call(null,chs);
var inst_20720 = inst_20719;
var state_20748__$1 = (function (){var statearr_20753 = state_20748;
(statearr_20753[(10)] = inst_20720);

return statearr_20753;
})();
var statearr_20754_20775 = state_20748__$1;
(statearr_20754_20775[(2)] = null);

(statearr_20754_20775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (4))){
var inst_20720 = (state_20748[(10)]);
var state_20748__$1 = state_20748;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20748__$1,(7),inst_20720);
} else {
if((state_val_20749 === (6))){
var inst_20744 = (state_20748[(2)]);
var state_20748__$1 = state_20748;
var statearr_20755_20776 = state_20748__$1;
(statearr_20755_20776[(2)] = inst_20744);

(statearr_20755_20776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (3))){
var inst_20746 = (state_20748[(2)]);
var state_20748__$1 = state_20748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20748__$1,inst_20746);
} else {
if((state_val_20749 === (2))){
var inst_20720 = (state_20748[(10)]);
var inst_20722 = cljs.core.count.call(null,inst_20720);
var inst_20723 = (inst_20722 > (0));
var state_20748__$1 = state_20748;
if(cljs.core.truth_(inst_20723)){
var statearr_20757_20777 = state_20748__$1;
(statearr_20757_20777[(1)] = (4));

} else {
var statearr_20758_20778 = state_20748__$1;
(statearr_20758_20778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (11))){
var inst_20720 = (state_20748[(10)]);
var inst_20737 = (state_20748[(2)]);
var tmp20756 = inst_20720;
var inst_20720__$1 = tmp20756;
var state_20748__$1 = (function (){var statearr_20759 = state_20748;
(statearr_20759[(11)] = inst_20737);

(statearr_20759[(10)] = inst_20720__$1);

return statearr_20759;
})();
var statearr_20760_20779 = state_20748__$1;
(statearr_20760_20779[(2)] = null);

(statearr_20760_20779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (9))){
var inst_20728 = (state_20748[(7)]);
var state_20748__$1 = state_20748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20748__$1,(11),out,inst_20728);
} else {
if((state_val_20749 === (5))){
var inst_20742 = cljs.core.async.close_BANG_.call(null,out);
var state_20748__$1 = state_20748;
var statearr_20761_20780 = state_20748__$1;
(statearr_20761_20780[(2)] = inst_20742);

(statearr_20761_20780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (10))){
var inst_20740 = (state_20748[(2)]);
var state_20748__$1 = state_20748;
var statearr_20762_20781 = state_20748__$1;
(statearr_20762_20781[(2)] = inst_20740);

(statearr_20762_20781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (8))){
var inst_20728 = (state_20748[(7)]);
var inst_20727 = (state_20748[(8)]);
var inst_20729 = (state_20748[(9)]);
var inst_20720 = (state_20748[(10)]);
var inst_20732 = (function (){var c = inst_20729;
var v = inst_20728;
var vec__20725 = inst_20727;
var cs = inst_20720;
return ((function (c,v,vec__20725,cs,inst_20728,inst_20727,inst_20729,inst_20720,state_val_20749,c__5962__auto___20772,out){
return (function (p1__20665_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20665_SHARP_);
});
;})(c,v,vec__20725,cs,inst_20728,inst_20727,inst_20729,inst_20720,state_val_20749,c__5962__auto___20772,out))
})();
var inst_20733 = cljs.core.filterv.call(null,inst_20732,inst_20720);
var inst_20720__$1 = inst_20733;
var state_20748__$1 = (function (){var statearr_20763 = state_20748;
(statearr_20763[(10)] = inst_20720__$1);

return statearr_20763;
})();
var statearr_20764_20782 = state_20748__$1;
(statearr_20764_20782[(2)] = null);

(statearr_20764_20782[(1)] = (2));


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
});})(c__5962__auto___20772,out))
;
return ((function (switch__5947__auto__,c__5962__auto___20772,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20768 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20768[(0)] = state_machine__5948__auto__);

(statearr_20768[(1)] = (1));

return statearr_20768;
});
var state_machine__5948__auto____1 = (function (state_20748){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20769){if((e20769 instanceof Object)){
var ex__5951__auto__ = e20769;
var statearr_20770_20783 = state_20748;
(statearr_20770_20783[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20784 = state_20748;
state_20748 = G__20784;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20748){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20772,out))
})();
var state__5964__auto__ = (function (){var statearr_20771 = f__5963__auto__.call(null);
(statearr_20771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20772);

return statearr_20771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20772,out))
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
var c__5962__auto___20877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20877,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20877,out){
return (function (state_20854){
var state_val_20855 = (state_20854[(1)]);
if((state_val_20855 === (7))){
var inst_20836 = (state_20854[(7)]);
var inst_20836__$1 = (state_20854[(2)]);
var inst_20837 = (inst_20836__$1 == null);
var inst_20838 = cljs.core.not.call(null,inst_20837);
var state_20854__$1 = (function (){var statearr_20856 = state_20854;
(statearr_20856[(7)] = inst_20836__$1);

return statearr_20856;
})();
if(inst_20838){
var statearr_20857_20878 = state_20854__$1;
(statearr_20857_20878[(1)] = (8));

} else {
var statearr_20858_20879 = state_20854__$1;
(statearr_20858_20879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (1))){
var inst_20831 = (0);
var state_20854__$1 = (function (){var statearr_20859 = state_20854;
(statearr_20859[(8)] = inst_20831);

return statearr_20859;
})();
var statearr_20860_20880 = state_20854__$1;
(statearr_20860_20880[(2)] = null);

(statearr_20860_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (4))){
var state_20854__$1 = state_20854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20854__$1,(7),ch);
} else {
if((state_val_20855 === (6))){
var inst_20849 = (state_20854[(2)]);
var state_20854__$1 = state_20854;
var statearr_20861_20881 = state_20854__$1;
(statearr_20861_20881[(2)] = inst_20849);

(statearr_20861_20881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (3))){
var inst_20851 = (state_20854[(2)]);
var inst_20852 = cljs.core.async.close_BANG_.call(null,out);
var state_20854__$1 = (function (){var statearr_20862 = state_20854;
(statearr_20862[(9)] = inst_20851);

return statearr_20862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20854__$1,inst_20852);
} else {
if((state_val_20855 === (2))){
var inst_20831 = (state_20854[(8)]);
var inst_20833 = (inst_20831 < n);
var state_20854__$1 = state_20854;
if(cljs.core.truth_(inst_20833)){
var statearr_20863_20882 = state_20854__$1;
(statearr_20863_20882[(1)] = (4));

} else {
var statearr_20864_20883 = state_20854__$1;
(statearr_20864_20883[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (11))){
var inst_20831 = (state_20854[(8)]);
var inst_20841 = (state_20854[(2)]);
var inst_20842 = (inst_20831 + (1));
var inst_20831__$1 = inst_20842;
var state_20854__$1 = (function (){var statearr_20865 = state_20854;
(statearr_20865[(10)] = inst_20841);

(statearr_20865[(8)] = inst_20831__$1);

return statearr_20865;
})();
var statearr_20866_20884 = state_20854__$1;
(statearr_20866_20884[(2)] = null);

(statearr_20866_20884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (9))){
var state_20854__$1 = state_20854;
var statearr_20867_20885 = state_20854__$1;
(statearr_20867_20885[(2)] = null);

(statearr_20867_20885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (5))){
var state_20854__$1 = state_20854;
var statearr_20868_20886 = state_20854__$1;
(statearr_20868_20886[(2)] = null);

(statearr_20868_20886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (10))){
var inst_20846 = (state_20854[(2)]);
var state_20854__$1 = state_20854;
var statearr_20869_20887 = state_20854__$1;
(statearr_20869_20887[(2)] = inst_20846);

(statearr_20869_20887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20855 === (8))){
var inst_20836 = (state_20854[(7)]);
var state_20854__$1 = state_20854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20854__$1,(11),out,inst_20836);
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
});})(c__5962__auto___20877,out))
;
return ((function (switch__5947__auto__,c__5962__auto___20877,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20873[(0)] = state_machine__5948__auto__);

(statearr_20873[(1)] = (1));

return statearr_20873;
});
var state_machine__5948__auto____1 = (function (state_20854){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20874){if((e20874 instanceof Object)){
var ex__5951__auto__ = e20874;
var statearr_20875_20888 = state_20854;
(statearr_20875_20888[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20889 = state_20854;
state_20854 = G__20889;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20854){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20877,out))
})();
var state__5964__auto__ = (function (){var statearr_20876 = f__5963__auto__.call(null);
(statearr_20876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20877);

return statearr_20876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20877,out))
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
if(typeof cljs.core.async.t20897 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20897 = (function (ch,f,map_LT_,meta20898){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20898 = meta20898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20897.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20897.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20900 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20900 = (function (fn1,_,meta20898,map_LT_,f,ch,meta20901){
this.fn1 = fn1;
this._ = _;
this.meta20898 = meta20898;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20901 = meta20901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20900.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20890_SHARP_){
return f1.call(null,(((p1__20890_SHARP_ == null))?null:self__.f.call(null,p1__20890_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20902){
var self__ = this;
var _20902__$1 = this;
return self__.meta20901;
});})(___$1))
;

cljs.core.async.t20900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20902,meta20901__$1){
var self__ = this;
var _20902__$1 = this;
return (new cljs.core.async.t20900(self__.fn1,self__._,self__.meta20898,self__.map_LT_,self__.f,self__.ch,meta20901__$1));
});})(___$1))
;

cljs.core.async.t20900.cljs$lang$type = true;

cljs.core.async.t20900.cljs$lang$ctorStr = "cljs.core.async/t20900";

cljs.core.async.t20900.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20900");
});})(___$1))
;

cljs.core.async.__GT_t20900 = ((function (___$1){
return (function __GT_t20900(fn1__$1,___$2,meta20898__$1,map_LT___$1,f__$1,ch__$1,meta20901){
return (new cljs.core.async.t20900(fn1__$1,___$2,meta20898__$1,map_LT___$1,f__$1,ch__$1,meta20901));
});})(___$1))
;

}

return (new cljs.core.async.t20900(fn1,___$1,self__.meta20898,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t20897.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20897.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20899){
var self__ = this;
var _20899__$1 = this;
return self__.meta20898;
});

cljs.core.async.t20897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20899,meta20898__$1){
var self__ = this;
var _20899__$1 = this;
return (new cljs.core.async.t20897(self__.ch,self__.f,self__.map_LT_,meta20898__$1));
});

cljs.core.async.t20897.cljs$lang$type = true;

cljs.core.async.t20897.cljs$lang$ctorStr = "cljs.core.async/t20897";

cljs.core.async.t20897.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20897");
});

cljs.core.async.__GT_t20897 = (function __GT_t20897(ch__$1,f__$1,map_LT___$1,meta20898){
return (new cljs.core.async.t20897(ch__$1,f__$1,map_LT___$1,meta20898));
});

}

return (new cljs.core.async.t20897(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20906 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20906 = (function (ch,f,map_GT_,meta20907){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20907 = meta20907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20908){
var self__ = this;
var _20908__$1 = this;
return self__.meta20907;
});

cljs.core.async.t20906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20908,meta20907__$1){
var self__ = this;
var _20908__$1 = this;
return (new cljs.core.async.t20906(self__.ch,self__.f,self__.map_GT_,meta20907__$1));
});

cljs.core.async.t20906.cljs$lang$type = true;

cljs.core.async.t20906.cljs$lang$ctorStr = "cljs.core.async/t20906";

cljs.core.async.t20906.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20906");
});

cljs.core.async.__GT_t20906 = (function __GT_t20906(ch__$1,f__$1,map_GT___$1,meta20907){
return (new cljs.core.async.t20906(ch__$1,f__$1,map_GT___$1,meta20907));
});

}

return (new cljs.core.async.t20906(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20912 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20912 = (function (ch,p,filter_GT_,meta20913){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20913 = meta20913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20914){
var self__ = this;
var _20914__$1 = this;
return self__.meta20913;
});

cljs.core.async.t20912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20914,meta20913__$1){
var self__ = this;
var _20914__$1 = this;
return (new cljs.core.async.t20912(self__.ch,self__.p,self__.filter_GT_,meta20913__$1));
});

cljs.core.async.t20912.cljs$lang$type = true;

cljs.core.async.t20912.cljs$lang$ctorStr = "cljs.core.async/t20912";

cljs.core.async.t20912.cljs$lang$ctorPrWriter = (function (this__4343__auto__,writer__4344__auto__,opt__4345__auto__){
return cljs.core._write.call(null,writer__4344__auto__,"cljs.core.async/t20912");
});

cljs.core.async.__GT_t20912 = (function __GT_t20912(ch__$1,p__$1,filter_GT___$1,meta20913){
return (new cljs.core.async.t20912(ch__$1,p__$1,filter_GT___$1,meta20913));
});

}

return (new cljs.core.async.t20912(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/tim/git/Logging-Dashboard/resources/public/js/cljs/core/async.cljs"], null)));
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
var c__5962__auto___20997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___20997,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___20997,out){
return (function (state_20976){
var state_val_20977 = (state_20976[(1)]);
if((state_val_20977 === (7))){
var inst_20972 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20978_20998 = state_20976__$1;
(statearr_20978_20998[(2)] = inst_20972);

(statearr_20978_20998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (1))){
var state_20976__$1 = state_20976;
var statearr_20979_20999 = state_20976__$1;
(statearr_20979_20999[(2)] = null);

(statearr_20979_20999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (4))){
var inst_20958 = (state_20976[(7)]);
var inst_20958__$1 = (state_20976[(2)]);
var inst_20959 = (inst_20958__$1 == null);
var state_20976__$1 = (function (){var statearr_20980 = state_20976;
(statearr_20980[(7)] = inst_20958__$1);

return statearr_20980;
})();
if(cljs.core.truth_(inst_20959)){
var statearr_20981_21000 = state_20976__$1;
(statearr_20981_21000[(1)] = (5));

} else {
var statearr_20982_21001 = state_20976__$1;
(statearr_20982_21001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (6))){
var inst_20958 = (state_20976[(7)]);
var inst_20963 = p.call(null,inst_20958);
var state_20976__$1 = state_20976;
if(cljs.core.truth_(inst_20963)){
var statearr_20983_21002 = state_20976__$1;
(statearr_20983_21002[(1)] = (8));

} else {
var statearr_20984_21003 = state_20976__$1;
(statearr_20984_21003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (3))){
var inst_20974 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20976__$1,inst_20974);
} else {
if((state_val_20977 === (2))){
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20976__$1,(4),ch);
} else {
if((state_val_20977 === (11))){
var inst_20966 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20985_21004 = state_20976__$1;
(statearr_20985_21004[(2)] = inst_20966);

(statearr_20985_21004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (9))){
var state_20976__$1 = state_20976;
var statearr_20986_21005 = state_20976__$1;
(statearr_20986_21005[(2)] = null);

(statearr_20986_21005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (5))){
var inst_20961 = cljs.core.async.close_BANG_.call(null,out);
var state_20976__$1 = state_20976;
var statearr_20987_21006 = state_20976__$1;
(statearr_20987_21006[(2)] = inst_20961);

(statearr_20987_21006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (10))){
var inst_20969 = (state_20976[(2)]);
var state_20976__$1 = (function (){var statearr_20988 = state_20976;
(statearr_20988[(8)] = inst_20969);

return statearr_20988;
})();
var statearr_20989_21007 = state_20976__$1;
(statearr_20989_21007[(2)] = null);

(statearr_20989_21007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (8))){
var inst_20958 = (state_20976[(7)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(11),out,inst_20958);
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
});})(c__5962__auto___20997,out))
;
return ((function (switch__5947__auto__,c__5962__auto___20997,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_20993 = [null,null,null,null,null,null,null,null,null];
(statearr_20993[(0)] = state_machine__5948__auto__);

(statearr_20993[(1)] = (1));

return statearr_20993;
});
var state_machine__5948__auto____1 = (function (state_20976){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_20976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e20994){if((e20994 instanceof Object)){
var ex__5951__auto__ = e20994;
var statearr_20995_21008 = state_20976;
(statearr_20995_21008[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21009 = state_20976;
state_20976 = G__21009;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_20976){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_20976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___20997,out))
})();
var state__5964__auto__ = (function (){var statearr_20996 = f__5963__auto__.call(null);
(statearr_20996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___20997);

return statearr_20996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___20997,out))
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
return (function (state_21175){
var state_val_21176 = (state_21175[(1)]);
if((state_val_21176 === (7))){
var inst_21171 = (state_21175[(2)]);
var state_21175__$1 = state_21175;
var statearr_21177_21218 = state_21175__$1;
(statearr_21177_21218[(2)] = inst_21171);

(statearr_21177_21218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (20))){
var inst_21141 = (state_21175[(7)]);
var inst_21152 = (state_21175[(2)]);
var inst_21153 = cljs.core.next.call(null,inst_21141);
var inst_21127 = inst_21153;
var inst_21128 = null;
var inst_21129 = (0);
var inst_21130 = (0);
var state_21175__$1 = (function (){var statearr_21178 = state_21175;
(statearr_21178[(8)] = inst_21129);

(statearr_21178[(9)] = inst_21127);

(statearr_21178[(10)] = inst_21130);

(statearr_21178[(11)] = inst_21152);

(statearr_21178[(12)] = inst_21128);

return statearr_21178;
})();
var statearr_21179_21219 = state_21175__$1;
(statearr_21179_21219[(2)] = null);

(statearr_21179_21219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (1))){
var state_21175__$1 = state_21175;
var statearr_21180_21220 = state_21175__$1;
(statearr_21180_21220[(2)] = null);

(statearr_21180_21220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (4))){
var inst_21116 = (state_21175[(13)]);
var inst_21116__$1 = (state_21175[(2)]);
var inst_21117 = (inst_21116__$1 == null);
var state_21175__$1 = (function (){var statearr_21181 = state_21175;
(statearr_21181[(13)] = inst_21116__$1);

return statearr_21181;
})();
if(cljs.core.truth_(inst_21117)){
var statearr_21182_21221 = state_21175__$1;
(statearr_21182_21221[(1)] = (5));

} else {
var statearr_21183_21222 = state_21175__$1;
(statearr_21183_21222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (15))){
var state_21175__$1 = state_21175;
var statearr_21187_21223 = state_21175__$1;
(statearr_21187_21223[(2)] = null);

(statearr_21187_21223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (21))){
var state_21175__$1 = state_21175;
var statearr_21188_21224 = state_21175__$1;
(statearr_21188_21224[(2)] = null);

(statearr_21188_21224[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (13))){
var inst_21129 = (state_21175[(8)]);
var inst_21127 = (state_21175[(9)]);
var inst_21130 = (state_21175[(10)]);
var inst_21128 = (state_21175[(12)]);
var inst_21137 = (state_21175[(2)]);
var inst_21138 = (inst_21130 + (1));
var tmp21184 = inst_21129;
var tmp21185 = inst_21127;
var tmp21186 = inst_21128;
var inst_21127__$1 = tmp21185;
var inst_21128__$1 = tmp21186;
var inst_21129__$1 = tmp21184;
var inst_21130__$1 = inst_21138;
var state_21175__$1 = (function (){var statearr_21189 = state_21175;
(statearr_21189[(8)] = inst_21129__$1);

(statearr_21189[(9)] = inst_21127__$1);

(statearr_21189[(14)] = inst_21137);

(statearr_21189[(10)] = inst_21130__$1);

(statearr_21189[(12)] = inst_21128__$1);

return statearr_21189;
})();
var statearr_21190_21225 = state_21175__$1;
(statearr_21190_21225[(2)] = null);

(statearr_21190_21225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (22))){
var state_21175__$1 = state_21175;
var statearr_21191_21226 = state_21175__$1;
(statearr_21191_21226[(2)] = null);

(statearr_21191_21226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (6))){
var inst_21116 = (state_21175[(13)]);
var inst_21125 = f.call(null,inst_21116);
var inst_21126 = cljs.core.seq.call(null,inst_21125);
var inst_21127 = inst_21126;
var inst_21128 = null;
var inst_21129 = (0);
var inst_21130 = (0);
var state_21175__$1 = (function (){var statearr_21192 = state_21175;
(statearr_21192[(8)] = inst_21129);

(statearr_21192[(9)] = inst_21127);

(statearr_21192[(10)] = inst_21130);

(statearr_21192[(12)] = inst_21128);

return statearr_21192;
})();
var statearr_21193_21227 = state_21175__$1;
(statearr_21193_21227[(2)] = null);

(statearr_21193_21227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (17))){
var inst_21141 = (state_21175[(7)]);
var inst_21145 = cljs.core.chunk_first.call(null,inst_21141);
var inst_21146 = cljs.core.chunk_rest.call(null,inst_21141);
var inst_21147 = cljs.core.count.call(null,inst_21145);
var inst_21127 = inst_21146;
var inst_21128 = inst_21145;
var inst_21129 = inst_21147;
var inst_21130 = (0);
var state_21175__$1 = (function (){var statearr_21194 = state_21175;
(statearr_21194[(8)] = inst_21129);

(statearr_21194[(9)] = inst_21127);

(statearr_21194[(10)] = inst_21130);

(statearr_21194[(12)] = inst_21128);

return statearr_21194;
})();
var statearr_21195_21228 = state_21175__$1;
(statearr_21195_21228[(2)] = null);

(statearr_21195_21228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (3))){
var inst_21173 = (state_21175[(2)]);
var state_21175__$1 = state_21175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21175__$1,inst_21173);
} else {
if((state_val_21176 === (12))){
var inst_21161 = (state_21175[(2)]);
var state_21175__$1 = state_21175;
var statearr_21196_21229 = state_21175__$1;
(statearr_21196_21229[(2)] = inst_21161);

(statearr_21196_21229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (2))){
var state_21175__$1 = state_21175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21175__$1,(4),in$);
} else {
if((state_val_21176 === (23))){
var inst_21169 = (state_21175[(2)]);
var state_21175__$1 = state_21175;
var statearr_21197_21230 = state_21175__$1;
(statearr_21197_21230[(2)] = inst_21169);

(statearr_21197_21230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (19))){
var inst_21156 = (state_21175[(2)]);
var state_21175__$1 = state_21175;
var statearr_21198_21231 = state_21175__$1;
(statearr_21198_21231[(2)] = inst_21156);

(statearr_21198_21231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (11))){
var inst_21141 = (state_21175[(7)]);
var inst_21127 = (state_21175[(9)]);
var inst_21141__$1 = cljs.core.seq.call(null,inst_21127);
var state_21175__$1 = (function (){var statearr_21199 = state_21175;
(statearr_21199[(7)] = inst_21141__$1);

return statearr_21199;
})();
if(inst_21141__$1){
var statearr_21200_21232 = state_21175__$1;
(statearr_21200_21232[(1)] = (14));

} else {
var statearr_21201_21233 = state_21175__$1;
(statearr_21201_21233[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (9))){
var inst_21163 = (state_21175[(2)]);
var inst_21164 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21175__$1 = (function (){var statearr_21202 = state_21175;
(statearr_21202[(15)] = inst_21163);

return statearr_21202;
})();
if(cljs.core.truth_(inst_21164)){
var statearr_21203_21234 = state_21175__$1;
(statearr_21203_21234[(1)] = (21));

} else {
var statearr_21204_21235 = state_21175__$1;
(statearr_21204_21235[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (5))){
var inst_21119 = cljs.core.async.close_BANG_.call(null,out);
var state_21175__$1 = state_21175;
var statearr_21205_21236 = state_21175__$1;
(statearr_21205_21236[(2)] = inst_21119);

(statearr_21205_21236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (14))){
var inst_21141 = (state_21175[(7)]);
var inst_21143 = cljs.core.chunked_seq_QMARK_.call(null,inst_21141);
var state_21175__$1 = state_21175;
if(inst_21143){
var statearr_21206_21237 = state_21175__$1;
(statearr_21206_21237[(1)] = (17));

} else {
var statearr_21207_21238 = state_21175__$1;
(statearr_21207_21238[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (16))){
var inst_21159 = (state_21175[(2)]);
var state_21175__$1 = state_21175;
var statearr_21208_21239 = state_21175__$1;
(statearr_21208_21239[(2)] = inst_21159);

(statearr_21208_21239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21176 === (10))){
var inst_21130 = (state_21175[(10)]);
var inst_21128 = (state_21175[(12)]);
var inst_21135 = cljs.core._nth.call(null,inst_21128,inst_21130);
var state_21175__$1 = state_21175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21175__$1,(13),out,inst_21135);
} else {
if((state_val_21176 === (18))){
var inst_21141 = (state_21175[(7)]);
var inst_21150 = cljs.core.first.call(null,inst_21141);
var state_21175__$1 = state_21175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21175__$1,(20),out,inst_21150);
} else {
if((state_val_21176 === (8))){
var inst_21129 = (state_21175[(8)]);
var inst_21130 = (state_21175[(10)]);
var inst_21132 = (inst_21130 < inst_21129);
var inst_21133 = inst_21132;
var state_21175__$1 = state_21175;
if(cljs.core.truth_(inst_21133)){
var statearr_21209_21240 = state_21175__$1;
(statearr_21209_21240[(1)] = (10));

} else {
var statearr_21210_21241 = state_21175__$1;
(statearr_21210_21241[(1)] = (11));

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
var statearr_21214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21214[(0)] = state_machine__5948__auto__);

(statearr_21214[(1)] = (1));

return statearr_21214;
});
var state_machine__5948__auto____1 = (function (state_21175){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21215){if((e21215 instanceof Object)){
var ex__5951__auto__ = e21215;
var statearr_21216_21242 = state_21175;
(statearr_21216_21242[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21243 = state_21175;
state_21175 = G__21243;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21175){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto__))
})();
var state__5964__auto__ = (function (){var statearr_21217 = f__5963__auto__.call(null);
(statearr_21217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto__);

return statearr_21217;
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
var c__5962__auto___21340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___21340,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___21340,out){
return (function (state_21315){
var state_val_21316 = (state_21315[(1)]);
if((state_val_21316 === (7))){
var inst_21310 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21317_21341 = state_21315__$1;
(statearr_21317_21341[(2)] = inst_21310);

(statearr_21317_21341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (1))){
var inst_21292 = null;
var state_21315__$1 = (function (){var statearr_21318 = state_21315;
(statearr_21318[(7)] = inst_21292);

return statearr_21318;
})();
var statearr_21319_21342 = state_21315__$1;
(statearr_21319_21342[(2)] = null);

(statearr_21319_21342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (4))){
var inst_21295 = (state_21315[(8)]);
var inst_21295__$1 = (state_21315[(2)]);
var inst_21296 = (inst_21295__$1 == null);
var inst_21297 = cljs.core.not.call(null,inst_21296);
var state_21315__$1 = (function (){var statearr_21320 = state_21315;
(statearr_21320[(8)] = inst_21295__$1);

return statearr_21320;
})();
if(inst_21297){
var statearr_21321_21343 = state_21315__$1;
(statearr_21321_21343[(1)] = (5));

} else {
var statearr_21322_21344 = state_21315__$1;
(statearr_21322_21344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (6))){
var state_21315__$1 = state_21315;
var statearr_21323_21345 = state_21315__$1;
(statearr_21323_21345[(2)] = null);

(statearr_21323_21345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (3))){
var inst_21312 = (state_21315[(2)]);
var inst_21313 = cljs.core.async.close_BANG_.call(null,out);
var state_21315__$1 = (function (){var statearr_21324 = state_21315;
(statearr_21324[(9)] = inst_21312);

return statearr_21324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21315__$1,inst_21313);
} else {
if((state_val_21316 === (2))){
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21315__$1,(4),ch);
} else {
if((state_val_21316 === (11))){
var inst_21295 = (state_21315[(8)]);
var inst_21304 = (state_21315[(2)]);
var inst_21292 = inst_21295;
var state_21315__$1 = (function (){var statearr_21325 = state_21315;
(statearr_21325[(10)] = inst_21304);

(statearr_21325[(7)] = inst_21292);

return statearr_21325;
})();
var statearr_21326_21346 = state_21315__$1;
(statearr_21326_21346[(2)] = null);

(statearr_21326_21346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (9))){
var inst_21295 = (state_21315[(8)]);
var state_21315__$1 = state_21315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21315__$1,(11),out,inst_21295);
} else {
if((state_val_21316 === (5))){
var inst_21295 = (state_21315[(8)]);
var inst_21292 = (state_21315[(7)]);
var inst_21299 = cljs.core._EQ_.call(null,inst_21295,inst_21292);
var state_21315__$1 = state_21315;
if(inst_21299){
var statearr_21328_21347 = state_21315__$1;
(statearr_21328_21347[(1)] = (8));

} else {
var statearr_21329_21348 = state_21315__$1;
(statearr_21329_21348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (10))){
var inst_21307 = (state_21315[(2)]);
var state_21315__$1 = state_21315;
var statearr_21330_21349 = state_21315__$1;
(statearr_21330_21349[(2)] = inst_21307);

(statearr_21330_21349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21316 === (8))){
var inst_21292 = (state_21315[(7)]);
var tmp21327 = inst_21292;
var inst_21292__$1 = tmp21327;
var state_21315__$1 = (function (){var statearr_21331 = state_21315;
(statearr_21331[(7)] = inst_21292__$1);

return statearr_21331;
})();
var statearr_21332_21350 = state_21315__$1;
(statearr_21332_21350[(2)] = null);

(statearr_21332_21350[(1)] = (2));


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
});})(c__5962__auto___21340,out))
;
return ((function (switch__5947__auto__,c__5962__auto___21340,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_21336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21336[(0)] = state_machine__5948__auto__);

(statearr_21336[(1)] = (1));

return statearr_21336;
});
var state_machine__5948__auto____1 = (function (state_21315){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21337){if((e21337 instanceof Object)){
var ex__5951__auto__ = e21337;
var statearr_21338_21351 = state_21315;
(statearr_21338_21351[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21352 = state_21315;
state_21315 = G__21352;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21315){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___21340,out))
})();
var state__5964__auto__ = (function (){var statearr_21339 = f__5963__auto__.call(null);
(statearr_21339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___21340);

return statearr_21339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___21340,out))
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
var c__5962__auto___21487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___21487,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___21487,out){
return (function (state_21457){
var state_val_21458 = (state_21457[(1)]);
if((state_val_21458 === (7))){
var inst_21453 = (state_21457[(2)]);
var state_21457__$1 = state_21457;
var statearr_21459_21488 = state_21457__$1;
(statearr_21459_21488[(2)] = inst_21453);

(statearr_21459_21488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (1))){
var inst_21420 = (new Array(n));
var inst_21421 = inst_21420;
var inst_21422 = (0);
var state_21457__$1 = (function (){var statearr_21460 = state_21457;
(statearr_21460[(7)] = inst_21422);

(statearr_21460[(8)] = inst_21421);

return statearr_21460;
})();
var statearr_21461_21489 = state_21457__$1;
(statearr_21461_21489[(2)] = null);

(statearr_21461_21489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (4))){
var inst_21425 = (state_21457[(9)]);
var inst_21425__$1 = (state_21457[(2)]);
var inst_21426 = (inst_21425__$1 == null);
var inst_21427 = cljs.core.not.call(null,inst_21426);
var state_21457__$1 = (function (){var statearr_21462 = state_21457;
(statearr_21462[(9)] = inst_21425__$1);

return statearr_21462;
})();
if(inst_21427){
var statearr_21463_21490 = state_21457__$1;
(statearr_21463_21490[(1)] = (5));

} else {
var statearr_21464_21491 = state_21457__$1;
(statearr_21464_21491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (15))){
var inst_21447 = (state_21457[(2)]);
var state_21457__$1 = state_21457;
var statearr_21465_21492 = state_21457__$1;
(statearr_21465_21492[(2)] = inst_21447);

(statearr_21465_21492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (13))){
var state_21457__$1 = state_21457;
var statearr_21466_21493 = state_21457__$1;
(statearr_21466_21493[(2)] = null);

(statearr_21466_21493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (6))){
var inst_21422 = (state_21457[(7)]);
var inst_21443 = (inst_21422 > (0));
var state_21457__$1 = state_21457;
if(cljs.core.truth_(inst_21443)){
var statearr_21467_21494 = state_21457__$1;
(statearr_21467_21494[(1)] = (12));

} else {
var statearr_21468_21495 = state_21457__$1;
(statearr_21468_21495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (3))){
var inst_21455 = (state_21457[(2)]);
var state_21457__$1 = state_21457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21457__$1,inst_21455);
} else {
if((state_val_21458 === (12))){
var inst_21421 = (state_21457[(8)]);
var inst_21445 = cljs.core.vec.call(null,inst_21421);
var state_21457__$1 = state_21457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21457__$1,(15),out,inst_21445);
} else {
if((state_val_21458 === (2))){
var state_21457__$1 = state_21457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21457__$1,(4),ch);
} else {
if((state_val_21458 === (11))){
var inst_21437 = (state_21457[(2)]);
var inst_21438 = (new Array(n));
var inst_21421 = inst_21438;
var inst_21422 = (0);
var state_21457__$1 = (function (){var statearr_21469 = state_21457;
(statearr_21469[(7)] = inst_21422);

(statearr_21469[(8)] = inst_21421);

(statearr_21469[(10)] = inst_21437);

return statearr_21469;
})();
var statearr_21470_21496 = state_21457__$1;
(statearr_21470_21496[(2)] = null);

(statearr_21470_21496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (9))){
var inst_21421 = (state_21457[(8)]);
var inst_21435 = cljs.core.vec.call(null,inst_21421);
var state_21457__$1 = state_21457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21457__$1,(11),out,inst_21435);
} else {
if((state_val_21458 === (5))){
var inst_21422 = (state_21457[(7)]);
var inst_21425 = (state_21457[(9)]);
var inst_21421 = (state_21457[(8)]);
var inst_21430 = (state_21457[(11)]);
var inst_21429 = (inst_21421[inst_21422] = inst_21425);
var inst_21430__$1 = (inst_21422 + (1));
var inst_21431 = (inst_21430__$1 < n);
var state_21457__$1 = (function (){var statearr_21471 = state_21457;
(statearr_21471[(11)] = inst_21430__$1);

(statearr_21471[(12)] = inst_21429);

return statearr_21471;
})();
if(cljs.core.truth_(inst_21431)){
var statearr_21472_21497 = state_21457__$1;
(statearr_21472_21497[(1)] = (8));

} else {
var statearr_21473_21498 = state_21457__$1;
(statearr_21473_21498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (14))){
var inst_21450 = (state_21457[(2)]);
var inst_21451 = cljs.core.async.close_BANG_.call(null,out);
var state_21457__$1 = (function (){var statearr_21475 = state_21457;
(statearr_21475[(13)] = inst_21450);

return statearr_21475;
})();
var statearr_21476_21499 = state_21457__$1;
(statearr_21476_21499[(2)] = inst_21451);

(statearr_21476_21499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (10))){
var inst_21441 = (state_21457[(2)]);
var state_21457__$1 = state_21457;
var statearr_21477_21500 = state_21457__$1;
(statearr_21477_21500[(2)] = inst_21441);

(statearr_21477_21500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (8))){
var inst_21421 = (state_21457[(8)]);
var inst_21430 = (state_21457[(11)]);
var tmp21474 = inst_21421;
var inst_21421__$1 = tmp21474;
var inst_21422 = inst_21430;
var state_21457__$1 = (function (){var statearr_21478 = state_21457;
(statearr_21478[(7)] = inst_21422);

(statearr_21478[(8)] = inst_21421__$1);

return statearr_21478;
})();
var statearr_21479_21501 = state_21457__$1;
(statearr_21479_21501[(2)] = null);

(statearr_21479_21501[(1)] = (2));


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
});})(c__5962__auto___21487,out))
;
return ((function (switch__5947__auto__,c__5962__auto___21487,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_21483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21483[(0)] = state_machine__5948__auto__);

(statearr_21483[(1)] = (1));

return statearr_21483;
});
var state_machine__5948__auto____1 = (function (state_21457){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21484){if((e21484 instanceof Object)){
var ex__5951__auto__ = e21484;
var statearr_21485_21502 = state_21457;
(statearr_21485_21502[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21503 = state_21457;
state_21457 = G__21503;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21457){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___21487,out))
})();
var state__5964__auto__ = (function (){var statearr_21486 = f__5963__auto__.call(null);
(statearr_21486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___21487);

return statearr_21486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___21487,out))
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
var c__5962__auto___21646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5962__auto___21646,out){
return (function (){
var f__5963__auto__ = (function (){var switch__5947__auto__ = ((function (c__5962__auto___21646,out){
return (function (state_21616){
var state_val_21617 = (state_21616[(1)]);
if((state_val_21617 === (7))){
var inst_21612 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
var statearr_21618_21647 = state_21616__$1;
(statearr_21618_21647[(2)] = inst_21612);

(statearr_21618_21647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (1))){
var inst_21575 = [];
var inst_21576 = inst_21575;
var inst_21577 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21616__$1 = (function (){var statearr_21619 = state_21616;
(statearr_21619[(7)] = inst_21577);

(statearr_21619[(8)] = inst_21576);

return statearr_21619;
})();
var statearr_21620_21648 = state_21616__$1;
(statearr_21620_21648[(2)] = null);

(statearr_21620_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (4))){
var inst_21580 = (state_21616[(9)]);
var inst_21580__$1 = (state_21616[(2)]);
var inst_21581 = (inst_21580__$1 == null);
var inst_21582 = cljs.core.not.call(null,inst_21581);
var state_21616__$1 = (function (){var statearr_21621 = state_21616;
(statearr_21621[(9)] = inst_21580__$1);

return statearr_21621;
})();
if(inst_21582){
var statearr_21622_21649 = state_21616__$1;
(statearr_21622_21649[(1)] = (5));

} else {
var statearr_21623_21650 = state_21616__$1;
(statearr_21623_21650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (15))){
var inst_21606 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
var statearr_21624_21651 = state_21616__$1;
(statearr_21624_21651[(2)] = inst_21606);

(statearr_21624_21651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (13))){
var state_21616__$1 = state_21616;
var statearr_21625_21652 = state_21616__$1;
(statearr_21625_21652[(2)] = null);

(statearr_21625_21652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (6))){
var inst_21576 = (state_21616[(8)]);
var inst_21601 = inst_21576.length;
var inst_21602 = (inst_21601 > (0));
var state_21616__$1 = state_21616;
if(cljs.core.truth_(inst_21602)){
var statearr_21626_21653 = state_21616__$1;
(statearr_21626_21653[(1)] = (12));

} else {
var statearr_21627_21654 = state_21616__$1;
(statearr_21627_21654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (3))){
var inst_21614 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21616__$1,inst_21614);
} else {
if((state_val_21617 === (12))){
var inst_21576 = (state_21616[(8)]);
var inst_21604 = cljs.core.vec.call(null,inst_21576);
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21616__$1,(15),out,inst_21604);
} else {
if((state_val_21617 === (2))){
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21616__$1,(4),ch);
} else {
if((state_val_21617 === (11))){
var inst_21584 = (state_21616[(10)]);
var inst_21580 = (state_21616[(9)]);
var inst_21594 = (state_21616[(2)]);
var inst_21595 = [];
var inst_21596 = inst_21595.push(inst_21580);
var inst_21576 = inst_21595;
var inst_21577 = inst_21584;
var state_21616__$1 = (function (){var statearr_21628 = state_21616;
(statearr_21628[(11)] = inst_21596);

(statearr_21628[(12)] = inst_21594);

(statearr_21628[(7)] = inst_21577);

(statearr_21628[(8)] = inst_21576);

return statearr_21628;
})();
var statearr_21629_21655 = state_21616__$1;
(statearr_21629_21655[(2)] = null);

(statearr_21629_21655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (9))){
var inst_21576 = (state_21616[(8)]);
var inst_21592 = cljs.core.vec.call(null,inst_21576);
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21616__$1,(11),out,inst_21592);
} else {
if((state_val_21617 === (5))){
var inst_21584 = (state_21616[(10)]);
var inst_21580 = (state_21616[(9)]);
var inst_21577 = (state_21616[(7)]);
var inst_21584__$1 = f.call(null,inst_21580);
var inst_21585 = cljs.core._EQ_.call(null,inst_21584__$1,inst_21577);
var inst_21586 = cljs.core.keyword_identical_QMARK_.call(null,inst_21577,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21587 = (inst_21585) || (inst_21586);
var state_21616__$1 = (function (){var statearr_21630 = state_21616;
(statearr_21630[(10)] = inst_21584__$1);

return statearr_21630;
})();
if(cljs.core.truth_(inst_21587)){
var statearr_21631_21656 = state_21616__$1;
(statearr_21631_21656[(1)] = (8));

} else {
var statearr_21632_21657 = state_21616__$1;
(statearr_21632_21657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (14))){
var inst_21609 = (state_21616[(2)]);
var inst_21610 = cljs.core.async.close_BANG_.call(null,out);
var state_21616__$1 = (function (){var statearr_21634 = state_21616;
(statearr_21634[(13)] = inst_21609);

return statearr_21634;
})();
var statearr_21635_21658 = state_21616__$1;
(statearr_21635_21658[(2)] = inst_21610);

(statearr_21635_21658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (10))){
var inst_21599 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
var statearr_21636_21659 = state_21616__$1;
(statearr_21636_21659[(2)] = inst_21599);

(statearr_21636_21659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (8))){
var inst_21584 = (state_21616[(10)]);
var inst_21580 = (state_21616[(9)]);
var inst_21576 = (state_21616[(8)]);
var inst_21589 = inst_21576.push(inst_21580);
var tmp21633 = inst_21576;
var inst_21576__$1 = tmp21633;
var inst_21577 = inst_21584;
var state_21616__$1 = (function (){var statearr_21637 = state_21616;
(statearr_21637[(14)] = inst_21589);

(statearr_21637[(7)] = inst_21577);

(statearr_21637[(8)] = inst_21576__$1);

return statearr_21637;
})();
var statearr_21638_21660 = state_21616__$1;
(statearr_21638_21660[(2)] = null);

(statearr_21638_21660[(1)] = (2));


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
});})(c__5962__auto___21646,out))
;
return ((function (switch__5947__auto__,c__5962__auto___21646,out){
return (function() {
var state_machine__5948__auto__ = null;
var state_machine__5948__auto____0 = (function (){
var statearr_21642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21642[(0)] = state_machine__5948__auto__);

(statearr_21642[(1)] = (1));

return statearr_21642;
});
var state_machine__5948__auto____1 = (function (state_21616){
while(true){
var ret_value__5949__auto__ = (function (){try{while(true){
var result__5950__auto__ = switch__5947__auto__.call(null,state_21616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5950__auto__;
}
break;
}
}catch (e21643){if((e21643 instanceof Object)){
var ex__5951__auto__ = e21643;
var statearr_21644_21661 = state_21616;
(statearr_21644_21661[(5)] = ex__5951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21662 = state_21616;
state_21616 = G__21662;
continue;
} else {
return ret_value__5949__auto__;
}
break;
}
});
state_machine__5948__auto__ = function(state_21616){
switch(arguments.length){
case 0:
return state_machine__5948__auto____0.call(this);
case 1:
return state_machine__5948__auto____1.call(this,state_21616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5948__auto____0;
state_machine__5948__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5948__auto____1;
return state_machine__5948__auto__;
})()
;})(switch__5947__auto__,c__5962__auto___21646,out))
})();
var state__5964__auto__ = (function (){var statearr_21645 = f__5963__auto__.call(null);
(statearr_21645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5962__auto___21646);

return statearr_21645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5964__auto__);
});})(c__5962__auto___21646,out))
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
