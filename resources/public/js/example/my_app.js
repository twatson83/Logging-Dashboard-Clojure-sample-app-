// Compiled by ClojureScript 0.0-2411
goog.provide('example.my_app');
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
goog.require('clojure.string');
goog.require('clojure.string');
example.my_app.packer = new cljs.core.Keyword(null,"edn","edn",1317840885);
taoensso.encore.debugf.call(null,"ClojureScript appears to have loaded correctly.");
var rand_chsk_type_17305 = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var map__17304_17306 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_17305], null));
var map__17304_17307__$1 = ((cljs.core.seq_QMARK_.call(null,map__17304_17306))?cljs.core.apply.call(null,cljs.core.hash_map,map__17304_17306):map__17304_17306);
var state_17308 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var send_fn_17309 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv_17310 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var chsk_17311 = cljs.core.get.call(null,map__17304_17307__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
taoensso.encore.debugf.call(null,"Randomly selected chsk type: %s",rand_chsk_type_17305);

example.my_app.chsk = chsk_17311;

example.my_app.ch_chsk = ch_recv_17310;

example.my_app.chsk_send_BANG_ = send_fn_17309;

example.my_app.chsk_state = state_17308;
example.my_app.event_msg_handler = (function (){var method_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4657__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"example.my-app","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4657__auto__,method_table__4653__auto__,prefer_table__4654__auto__,method_cache__4655__auto__,cached_hierarchy__4656__auto__));
})();
example.my_app.event_msg_handler_STAR_ = (function event_msg_handler_STAR_(p__17312){
var map__17314 = p__17312;
var map__17314__$1 = ((cljs.core.seq_QMARK_.call(null,map__17314))?cljs.core.apply.call(null,cljs.core.hash_map,map__17314):map__17314);
var ev_msg = map__17314__$1;
var event = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_data = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var id = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
taoensso.encore.debugf.call(null,"Event: %s",event);

return example.my_app.event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,example.my_app.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17315){
var map__17316 = p__17315;
var map__17316__$1 = ((cljs.core.seq_QMARK_.call(null,map__17316))?cljs.core.apply.call(null,cljs.core.hash_map,map__17316):map__17316);
var ev_msg = map__17316__$1;
var event = cljs.core.get.call(null,map__17316__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.debugf.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,example.my_app.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__17317){
var map__17318 = p__17317;
var map__17318__$1 = ((cljs.core.seq_QMARK_.call(null,map__17318))?cljs.core.apply.call(null,cljs.core.hash_map,map__17318):map__17318);
var ev_msg = map__17318__$1;
var _QMARK_data = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return taoensso.encore.debugf.call(null,"Channel socket successfully established!");
} else {
return taoensso.encore.debugf.call(null,"Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,example.my_app.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__17319){
var map__17320 = p__17319;
var map__17320__$1 = ((cljs.core.seq_QMARK_.call(null,map__17320))?cljs.core.apply.call(null,cljs.core.hash_map,map__17320):map__17320);
var ev_msg = map__17320__$1;
var _QMARK_data = cljs.core.get.call(null,map__17320__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return taoensso.encore.debugf.call(null,"Push event from server: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,example.my_app.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__17321){
var map__17322 = p__17321;
var map__17322__$1 = ((cljs.core.seq_QMARK_.call(null,map__17322))?cljs.core.apply.call(null,cljs.core.hash_map,map__17322):map__17322);
var ev_msg = map__17322__$1;
var _QMARK_data = cljs.core.get.call(null,map__17322__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__17323 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__17323,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__17323,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__17323,(2),null);
return taoensso.encore.debugf.call(null,"Handshake: %s",_QMARK_data);
}));
var temp__4126__auto___17324 = document.getElementById("btn1");
if(cljs.core.truth_(temp__4126__auto___17324)){
var target_el_17325 = temp__4126__auto___17324;
target_el_17325.addEventListener("click",((function (target_el_17325,temp__4126__auto___17324){
return (function (ev){
taoensso.encore.debugf.call(null,"Button 1 was clicked (won't receive any reply from server)");

return example.my_app.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button1","example/button1",-349884645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"nope"], null)], null));
});})(target_el_17325,temp__4126__auto___17324))
);
} else {
}
var temp__4126__auto___17326 = document.getElementById("btn2");
if(cljs.core.truth_(temp__4126__auto___17326)){
var target_el_17327 = temp__4126__auto___17326;
target_el_17327.addEventListener("click",((function (target_el_17327,temp__4126__auto___17326){
return (function (ev){
taoensso.encore.debugf.call(null,"Button 2 was clicked (will receive reply from server)");

return example.my_app.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","button2","example/button2",-675598425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"indeed"], null)], null),(5000),((function (target_el_17327,temp__4126__auto___17326){
return (function (cb_reply){
return taoensso.encore.debugf.call(null,"Callback reply: %s",cb_reply);
});})(target_el_17327,temp__4126__auto___17326))
);
});})(target_el_17327,temp__4126__auto___17326))
);
} else {
}
example.my_app.router_ = cljs.core.atom.call(null,null);
example.my_app.stop_router_BANG_ = (function stop_router_BANG_(){
var temp__4126__auto__ = cljs.core.deref.call(null,example.my_app.router_);
if(cljs.core.truth_(temp__4126__auto__)){
var stop_f = temp__4126__auto__;
return stop_f.call(null);
} else {
return null;
}
});
example.my_app.start_router_BANG_ = (function start_router_BANG_(){
example.my_app.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,example.my_app.router_,taoensso.sente.start_chsk_router_BANG_.call(null,example.my_app.ch_chsk,example.my_app.event_msg_handler_STAR_));
});
example.my_app.start_BANG_ = (function start_BANG_(){
return example.my_app.start_router_BANG_.call(null);
});
example.my_app.start_BANG_.call(null);
