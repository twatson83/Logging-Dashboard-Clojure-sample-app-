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
var map__17304_17305 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__17304_17306__$1 = ((cljs.core.seq_QMARK_.call(null,map__17304_17305))?cljs.core.apply.call(null,cljs.core.hash_map,map__17304_17305):map__17304_17305);
var state_17307 = cljs.core.get.call(null,map__17304_17306__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn_17308 = cljs.core.get.call(null,map__17304_17306__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv_17309 = cljs.core.get.call(null,map__17304_17306__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var chsk_17310 = cljs.core.get.call(null,map__17304_17306__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
logging_dashboard.chsk = chsk_17310;

logging_dashboard.ch_chsk = ch_recv_17309;

logging_dashboard.chsk_send_BANG_ = send_fn_17308;

logging_dashboard.chsk_state = state_17307;
logging_dashboard.event_msg_handler = (function (){var method_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4657__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"logging-dashboard","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4657__auto__,method_table__4653__auto__,prefer_table__4654__auto__,method_cache__4655__auto__,cached_hierarchy__4656__auto__));
})();
logging_dashboard.event_msg_handler_STAR_ = (function event_msg_handler_STAR_(p__17311){
var map__17313 = p__17311;
var map__17313__$1 = ((cljs.core.seq_QMARK_.call(null,map__17313))?cljs.core.apply.call(null,cljs.core.hash_map,map__17313):map__17313);
var ev_msg = map__17313__$1;
var event = cljs.core.get.call(null,map__17313__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_data = cljs.core.get.call(null,map__17313__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var id = cljs.core.get.call(null,map__17313__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
taoensso.encore.debugf.call(null,"Event: %s",event);

return logging_dashboard.event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,logging_dashboard.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17314){
var map__17315 = p__17314;
var map__17315__$1 = ((cljs.core.seq_QMARK_.call(null,map__17315))?cljs.core.apply.call(null,cljs.core.hash_map,map__17315):map__17315);
var ev_msg = map__17315__$1;
var event = cljs.core.get.call(null,map__17315__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.debugf.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,logging_dashboard.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__17316){
var map__17317 = p__17316;
var map__17317__$1 = ((cljs.core.seq_QMARK_.call(null,map__17317))?cljs.core.apply.call(null,cljs.core.hash_map,map__17317):map__17317);
var ev_msg = map__17317__$1;
var _QMARK_data = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return taoensso.encore.debugf.call(null,"Channel socket successfully established!");
} else {
return taoensso.encore.debugf.call(null,"Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,logging_dashboard.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__17318){
var map__17319 = p__17318;
var map__17319__$1 = ((cljs.core.seq_QMARK_.call(null,map__17319))?cljs.core.apply.call(null,cljs.core.hash_map,map__17319):map__17319);
var ev_msg = map__17319__$1;
var _QMARK_data = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return taoensso.encore.debugf.call(null,"Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,logging_dashboard.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__17320){
var map__17321 = p__17320;
var map__17321__$1 = ((cljs.core.seq_QMARK_.call(null,map__17321))?cljs.core.apply.call(null,cljs.core.hash_map,map__17321):map__17321);
var ev_msg = map__17321__$1;
var _QMARK_data = cljs.core.get.call(null,map__17321__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__17322 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__17322,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__17322,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__17322,(2),null);
return taoensso.encore.debugf.call(null,"Handshake: %s",_QMARK_data);
}));
var temp__4126__auto___17323 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4126__auto___17323)){
var target_el_17324 = temp__4126__auto___17323;
target_el_17324.addEventListener("click",((function (target_el_17324,temp__4126__auto___17323){
return (function (ev){
taoensso.encore.debugf.call(null,"Triggering event");

return logging_dashboard.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","echo","test/echo",1458372903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"1234"], null)], null),(10000),((function (target_el_17324,temp__4126__auto___17323){
return (function (cb_reply){
return taoensso.encore.debugf.call(null,"Reply - %s",cb_reply);
});})(target_el_17324,temp__4126__auto___17323))
);
});})(target_el_17324,temp__4126__auto___17323))
);
} else {
}
