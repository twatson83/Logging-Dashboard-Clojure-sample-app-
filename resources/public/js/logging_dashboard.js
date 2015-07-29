// Compiled by ClojureScript 0.0-2411
goog.provide('logging_dashboard');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
taoensso.encore.debugf.call(null,"ClojureScript appears to have loaded correctly.");
var rand_chsk_type_17305 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var map__17304_17306 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_17305], null));
var map__17304_17307__$1 = ((cljs.core.seq_QMARK_.call(null,map__17304_17306))?cljs.core.apply.call(null,cljs.core.hash_map,map__17304_17306):map__17304_17306);
var state_17308 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn_17309 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv_17310 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var chsk_17311 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
logging_dashboard.chsk = chsk_17311;

logging_dashboard.ch_chsk = ch_recv_17310;

logging_dashboard.chsk_send_BANG_ = send_fn_17309;

logging_dashboard.chsk_state = state_17308;
logging_dashboard.event_msg_handler = (function (){var method_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4657__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"logging-dashboard","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4657__auto__,method_table__4653__auto__,prefer_table__4654__auto__,method_cache__4655__auto__,cached_hierarchy__4656__auto__));
})();
logging_dashboard.event_msg_handler_STAR_ = (function event_msg_handler_STAR_(p__17312){
var map__17314 = p__17312;
var map__17314__$1 = ((cljs.core.seq_QMARK_.call(null,map__17314))?cljs.core.apply.call(null,cljs.core.hash_map,map__17314):map__17314);
var ev_msg = map__17314__$1;
var event = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_data = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var id = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
taoensso.encore.debugf.call(null,"Event: %s",event);

return logging_dashboard.event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,logging_dashboard.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17315){
var map__17316 = p__17315;
var map__17316__$1 = ((cljs.core.seq_QMARK_.call(null,map__17316))?cljs.core.apply.call(null,cljs.core.hash_map,map__17316):map__17316);
var ev_msg = map__17316__$1;
var event = cljs.core.get.call(null,map__17316__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.debugf.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,logging_dashboard.event_msg_handler,new cljs.core.Keyword("some","broadcast","some/broadcast",1765715220),(function (p__17317){
var map__17318 = p__17317;
var map__17318__$1 = ((cljs.core.seq_QMARK_.call(null,map__17318))?cljs.core.apply.call(null,cljs.core.hash_map,map__17318):map__17318);
var ev_msg = map__17318__$1;
var _QMARK_data = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return taoensso.encore.debugf.call(null,"Broadcast: %s",_QMARK_data);
}));
var temp__4126__auto___17319 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4126__auto___17319)){
var target_el_17320 = temp__4126__auto___17319;
target_el_17320.addEventListener("click",((function (target_el_17320,temp__4126__auto___17319){
return (function (ev){
taoensso.encore.debugf.call(null,"Triggering event");

return logging_dashboard.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","echo","test/echo",1458372903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"1234"], null)], null),(10000),((function (target_el_17320,temp__4126__auto___17319){
return (function (cb_reply){
return taoensso.encore.debugf.call(null,"Reply - %s",cb_reply);
});})(target_el_17320,temp__4126__auto___17319))
);
});})(target_el_17320,temp__4126__auto___17319))
);
} else {
}
logging_dashboard.router_ = cljs.core.atom.call(null,null);
logging_dashboard.stop_router_BANG_ = (function stop_router_BANG_(){
var temp__4126__auto__ = cljs.core.deref.call(null,logging_dashboard.router_);
if(cljs.core.truth_(temp__4126__auto__)){
var stop_f = temp__4126__auto__;
return stop_f.call(null);
} else {
return null;
}
});
logging_dashboard.start_router_BANG_ = (function start_router_BANG_(){
logging_dashboard.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,logging_dashboard.router_,taoensso.sente.start_chsk_router_BANG_.call(null,logging_dashboard.ch_chsk,logging_dashboard.event_msg_handler_STAR_));
});
logging_dashboard.start_BANG_ = (function start_BANG_(){
return logging_dashboard.start_router_BANG_.call(null);
});
logging_dashboard.start_BANG_.call(null);
