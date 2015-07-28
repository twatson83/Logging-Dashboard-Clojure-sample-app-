// Compiled by ClojureScript 0.0-2069
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_7351 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7352 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7353 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7353,opt_wrapper_7351,table_section_wrapper_7352,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_7351,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_7352,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7352,cell_wrapper_7353,table_section_wrapper_7352,table_section_wrapper_7352]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3273__auto__ = div.firstChild;if(cljs.core.truth_(and__3273__auto__))
{return div.firstChild.childNodes;
} else
{return and__3273__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7358 = cljs.core.seq.call(null,tbody);var chunk__7359 = null;var count__7360 = 0;var i__7361 = 0;while(true){
if((i__7361 < count__7360))
{var child = cljs.core._nth.call(null,chunk__7359,i__7361);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7362 = seq__7358;
var G__7363 = chunk__7359;
var G__7364 = count__7360;
var G__7365 = (i__7361 + 1);
seq__7358 = G__7362;
chunk__7359 = G__7363;
count__7360 = G__7364;
i__7361 = G__7365;
continue;
}
} else
{var temp__4406__auto__ = cljs.core.seq.call(null,seq__7358);if(temp__4406__auto__)
{var seq__7358__$1 = temp__4406__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7358__$1))
{var c__4004__auto__ = cljs.core.chunk_first.call(null,seq__7358__$1);{
var G__7366 = cljs.core.chunk_rest.call(null,seq__7358__$1);
var G__7367 = c__4004__auto__;
var G__7368 = cljs.core.count.call(null,c__4004__auto__);
var G__7369 = 0;
seq__7358 = G__7366;
chunk__7359 = G__7367;
count__7360 = G__7368;
i__7361 = G__7369;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7358__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7370 = cljs.core.next.call(null,seq__7358__$1);
var G__7371 = null;
var G__7372 = 0;
var G__7373 = 0;
seq__7358 = G__7370;
chunk__7359 = G__7371;
count__7360 = G__7372;
i__7361 = G__7373;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7375 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7375,0,null);var start_wrap = cljs.core.nth.call(null,vec__7375,1,null);var end_wrap = cljs.core.nth.call(null,vec__7375,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7376 = wrapper.lastChild;
var G__7377 = (level - 1);
wrapper = G__7376;
level = G__7377;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3273__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3273__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3273__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj7379 = {};return obj7379;
})();
domina.nodes = (function nodes(content){if((function (){var and__3273__auto__ = content;if(and__3273__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3273__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3883__auto__ = (((content == null))?null:content);return (function (){var or__3285__auto__ = (domina.nodes[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.nodes["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3273__auto__ = nodeseq;if(and__3273__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3273__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3883__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3285__auto__ = (domina.single_node[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.single_node["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3273__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3273__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3273__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__7380){
var mesg = cljs.core.seq(arglist__7380);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7381){
var mesg = cljs.core.seq(arglist__7381);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__7382){
var contents = cljs.core.seq(arglist__7382);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7383_SHARP_){return p1__7383_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7384_SHARP_,p2__7385_SHARP_){return goog.dom.insertChildAt(p1__7384_SHARP_,p2__7385_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7387_SHARP_,p2__7386_SHARP_){return goog.dom.insertSiblingBefore(p2__7386_SHARP_,p1__7387_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7389_SHARP_,p2__7388_SHARP_){return goog.dom.insertSiblingAfter(p2__7388_SHARP_,p1__7389_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7391_SHARP_,p2__7390_SHARP_){return goog.dom.replaceNode(p2__7390_SHARP_,p1__7391_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__7396_7400 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7397_7401 = null;var count__7398_7402 = 0;var i__7399_7403 = 0;while(true){
if((i__7399_7403 < count__7398_7402))
{var n_7404 = cljs.core._nth.call(null,chunk__7397_7401,i__7399_7403);goog.style.setStyle(n_7404,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7405 = seq__7396_7400;
var G__7406 = chunk__7397_7401;
var G__7407 = count__7398_7402;
var G__7408 = (i__7399_7403 + 1);
seq__7396_7400 = G__7405;
chunk__7397_7401 = G__7406;
count__7398_7402 = G__7407;
i__7399_7403 = G__7408;
continue;
}
} else
{var temp__4406__auto___7409 = cljs.core.seq.call(null,seq__7396_7400);if(temp__4406__auto___7409)
{var seq__7396_7410__$1 = temp__4406__auto___7409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7396_7410__$1))
{var c__4004__auto___7411 = cljs.core.chunk_first.call(null,seq__7396_7410__$1);{
var G__7412 = cljs.core.chunk_rest.call(null,seq__7396_7410__$1);
var G__7413 = c__4004__auto___7411;
var G__7414 = cljs.core.count.call(null,c__4004__auto___7411);
var G__7415 = 0;
seq__7396_7400 = G__7412;
chunk__7397_7401 = G__7413;
count__7398_7402 = G__7414;
i__7399_7403 = G__7415;
continue;
}
} else
{var n_7416 = cljs.core.first.call(null,seq__7396_7410__$1);goog.style.setStyle(n_7416,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7417 = cljs.core.next.call(null,seq__7396_7410__$1);
var G__7418 = null;
var G__7419 = 0;
var G__7420 = 0;
seq__7396_7400 = G__7417;
chunk__7397_7401 = G__7418;
count__7398_7402 = G__7419;
i__7399_7403 = G__7420;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7421){
var content = cljs.core.first(arglist__7421);
arglist__7421 = cljs.core.next(arglist__7421);
var name = cljs.core.first(arglist__7421);
var value = cljs.core.rest(arglist__7421);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__7426_7430 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7427_7431 = null;var count__7428_7432 = 0;var i__7429_7433 = 0;while(true){
if((i__7429_7433 < count__7428_7432))
{var n_7434 = cljs.core._nth.call(null,chunk__7427_7431,i__7429_7433);n_7434.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7435 = seq__7426_7430;
var G__7436 = chunk__7427_7431;
var G__7437 = count__7428_7432;
var G__7438 = (i__7429_7433 + 1);
seq__7426_7430 = G__7435;
chunk__7427_7431 = G__7436;
count__7428_7432 = G__7437;
i__7429_7433 = G__7438;
continue;
}
} else
{var temp__4406__auto___7439 = cljs.core.seq.call(null,seq__7426_7430);if(temp__4406__auto___7439)
{var seq__7426_7440__$1 = temp__4406__auto___7439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7426_7440__$1))
{var c__4004__auto___7441 = cljs.core.chunk_first.call(null,seq__7426_7440__$1);{
var G__7442 = cljs.core.chunk_rest.call(null,seq__7426_7440__$1);
var G__7443 = c__4004__auto___7441;
var G__7444 = cljs.core.count.call(null,c__4004__auto___7441);
var G__7445 = 0;
seq__7426_7430 = G__7442;
chunk__7427_7431 = G__7443;
count__7428_7432 = G__7444;
i__7429_7433 = G__7445;
continue;
}
} else
{var n_7446 = cljs.core.first.call(null,seq__7426_7440__$1);n_7446.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7447 = cljs.core.next.call(null,seq__7426_7440__$1);
var G__7448 = null;
var G__7449 = 0;
var G__7450 = 0;
seq__7426_7430 = G__7447;
chunk__7427_7431 = G__7448;
count__7428_7432 = G__7449;
i__7429_7433 = G__7450;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7451){
var content = cljs.core.first(arglist__7451);
arglist__7451 = cljs.core.next(arglist__7451);
var name = cljs.core.first(arglist__7451);
var value = cljs.core.rest(arglist__7451);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7456_7460 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7457_7461 = null;var count__7458_7462 = 0;var i__7459_7463 = 0;while(true){
if((i__7459_7463 < count__7458_7462))
{var n_7464 = cljs.core._nth.call(null,chunk__7457_7461,i__7459_7463);n_7464.removeAttribute(cljs.core.name.call(null,name));
{
var G__7465 = seq__7456_7460;
var G__7466 = chunk__7457_7461;
var G__7467 = count__7458_7462;
var G__7468 = (i__7459_7463 + 1);
seq__7456_7460 = G__7465;
chunk__7457_7461 = G__7466;
count__7458_7462 = G__7467;
i__7459_7463 = G__7468;
continue;
}
} else
{var temp__4406__auto___7469 = cljs.core.seq.call(null,seq__7456_7460);if(temp__4406__auto___7469)
{var seq__7456_7470__$1 = temp__4406__auto___7469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7456_7470__$1))
{var c__4004__auto___7471 = cljs.core.chunk_first.call(null,seq__7456_7470__$1);{
var G__7472 = cljs.core.chunk_rest.call(null,seq__7456_7470__$1);
var G__7473 = c__4004__auto___7471;
var G__7474 = cljs.core.count.call(null,c__4004__auto___7471);
var G__7475 = 0;
seq__7456_7460 = G__7472;
chunk__7457_7461 = G__7473;
count__7458_7462 = G__7474;
i__7459_7463 = G__7475;
continue;
}
} else
{var n_7476 = cljs.core.first.call(null,seq__7456_7470__$1);n_7476.removeAttribute(cljs.core.name.call(null,name));
{
var G__7477 = cljs.core.next.call(null,seq__7456_7470__$1);
var G__7478 = null;
var G__7479 = 0;
var G__7480 = 0;
seq__7456_7460 = G__7477;
chunk__7457_7461 = G__7478;
count__7458_7462 = G__7479;
i__7459_7463 = G__7480;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7482 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7482,0,null);var v = cljs.core.nth.call(null,vec__7482,1,null);if(cljs.core.truth_((function (){var and__3273__auto__ = k;if(cljs.core.truth_(and__3273__auto__))
{return v;
} else
{return and__3273__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__7483_SHARP_){var attr = attrs__$1.item(p1__7483_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7490_7496 = cljs.core.seq.call(null,styles);var chunk__7491_7497 = null;var count__7492_7498 = 0;var i__7493_7499 = 0;while(true){
if((i__7493_7499 < count__7492_7498))
{var vec__7494_7500 = cljs.core._nth.call(null,chunk__7491_7497,i__7493_7499);var name_7501 = cljs.core.nth.call(null,vec__7494_7500,0,null);var value_7502 = cljs.core.nth.call(null,vec__7494_7500,1,null);domina.set_style_BANG_.call(null,content,name_7501,value_7502);
{
var G__7503 = seq__7490_7496;
var G__7504 = chunk__7491_7497;
var G__7505 = count__7492_7498;
var G__7506 = (i__7493_7499 + 1);
seq__7490_7496 = G__7503;
chunk__7491_7497 = G__7504;
count__7492_7498 = G__7505;
i__7493_7499 = G__7506;
continue;
}
} else
{var temp__4406__auto___7507 = cljs.core.seq.call(null,seq__7490_7496);if(temp__4406__auto___7507)
{var seq__7490_7508__$1 = temp__4406__auto___7507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7490_7508__$1))
{var c__4004__auto___7509 = cljs.core.chunk_first.call(null,seq__7490_7508__$1);{
var G__7510 = cljs.core.chunk_rest.call(null,seq__7490_7508__$1);
var G__7511 = c__4004__auto___7509;
var G__7512 = cljs.core.count.call(null,c__4004__auto___7509);
var G__7513 = 0;
seq__7490_7496 = G__7510;
chunk__7491_7497 = G__7511;
count__7492_7498 = G__7512;
i__7493_7499 = G__7513;
continue;
}
} else
{var vec__7495_7514 = cljs.core.first.call(null,seq__7490_7508__$1);var name_7515 = cljs.core.nth.call(null,vec__7495_7514,0,null);var value_7516 = cljs.core.nth.call(null,vec__7495_7514,1,null);domina.set_style_BANG_.call(null,content,name_7515,value_7516);
{
var G__7517 = cljs.core.next.call(null,seq__7490_7508__$1);
var G__7518 = null;
var G__7519 = 0;
var G__7520 = 0;
seq__7490_7496 = G__7517;
chunk__7491_7497 = G__7518;
count__7492_7498 = G__7519;
i__7493_7499 = G__7520;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7527_7533 = cljs.core.seq.call(null,attrs);var chunk__7528_7534 = null;var count__7529_7535 = 0;var i__7530_7536 = 0;while(true){
if((i__7530_7536 < count__7529_7535))
{var vec__7531_7537 = cljs.core._nth.call(null,chunk__7528_7534,i__7530_7536);var name_7538 = cljs.core.nth.call(null,vec__7531_7537,0,null);var value_7539 = cljs.core.nth.call(null,vec__7531_7537,1,null);domina.set_attr_BANG_.call(null,content,name_7538,value_7539);
{
var G__7540 = seq__7527_7533;
var G__7541 = chunk__7528_7534;
var G__7542 = count__7529_7535;
var G__7543 = (i__7530_7536 + 1);
seq__7527_7533 = G__7540;
chunk__7528_7534 = G__7541;
count__7529_7535 = G__7542;
i__7530_7536 = G__7543;
continue;
}
} else
{var temp__4406__auto___7544 = cljs.core.seq.call(null,seq__7527_7533);if(temp__4406__auto___7544)
{var seq__7527_7545__$1 = temp__4406__auto___7544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7527_7545__$1))
{var c__4004__auto___7546 = cljs.core.chunk_first.call(null,seq__7527_7545__$1);{
var G__7547 = cljs.core.chunk_rest.call(null,seq__7527_7545__$1);
var G__7548 = c__4004__auto___7546;
var G__7549 = cljs.core.count.call(null,c__4004__auto___7546);
var G__7550 = 0;
seq__7527_7533 = G__7547;
chunk__7528_7534 = G__7548;
count__7529_7535 = G__7549;
i__7530_7536 = G__7550;
continue;
}
} else
{var vec__7532_7551 = cljs.core.first.call(null,seq__7527_7545__$1);var name_7552 = cljs.core.nth.call(null,vec__7532_7551,0,null);var value_7553 = cljs.core.nth.call(null,vec__7532_7551,1,null);domina.set_attr_BANG_.call(null,content,name_7552,value_7553);
{
var G__7554 = cljs.core.next.call(null,seq__7527_7545__$1);
var G__7555 = null;
var G__7556 = 0;
var G__7557 = 0;
seq__7527_7533 = G__7554;
chunk__7528_7534 = G__7555;
count__7529_7535 = G__7556;
i__7530_7536 = G__7557;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7562_7566 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7563_7567 = null;var count__7564_7568 = 0;var i__7565_7569 = 0;while(true){
if((i__7565_7569 < count__7564_7568))
{var node_7570 = cljs.core._nth.call(null,chunk__7563_7567,i__7565_7569);goog.dom.classes.add(node_7570,class$);
{
var G__7571 = seq__7562_7566;
var G__7572 = chunk__7563_7567;
var G__7573 = count__7564_7568;
var G__7574 = (i__7565_7569 + 1);
seq__7562_7566 = G__7571;
chunk__7563_7567 = G__7572;
count__7564_7568 = G__7573;
i__7565_7569 = G__7574;
continue;
}
} else
{var temp__4406__auto___7575 = cljs.core.seq.call(null,seq__7562_7566);if(temp__4406__auto___7575)
{var seq__7562_7576__$1 = temp__4406__auto___7575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7562_7576__$1))
{var c__4004__auto___7577 = cljs.core.chunk_first.call(null,seq__7562_7576__$1);{
var G__7578 = cljs.core.chunk_rest.call(null,seq__7562_7576__$1);
var G__7579 = c__4004__auto___7577;
var G__7580 = cljs.core.count.call(null,c__4004__auto___7577);
var G__7581 = 0;
seq__7562_7566 = G__7578;
chunk__7563_7567 = G__7579;
count__7564_7568 = G__7580;
i__7565_7569 = G__7581;
continue;
}
} else
{var node_7582 = cljs.core.first.call(null,seq__7562_7576__$1);goog.dom.classes.add(node_7582,class$);
{
var G__7583 = cljs.core.next.call(null,seq__7562_7576__$1);
var G__7584 = null;
var G__7585 = 0;
var G__7586 = 0;
seq__7562_7566 = G__7583;
chunk__7563_7567 = G__7584;
count__7564_7568 = G__7585;
i__7565_7569 = G__7586;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7591_7595 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7592_7596 = null;var count__7593_7597 = 0;var i__7594_7598 = 0;while(true){
if((i__7594_7598 < count__7593_7597))
{var node_7599 = cljs.core._nth.call(null,chunk__7592_7596,i__7594_7598);goog.dom.classes.remove(node_7599,class$);
{
var G__7600 = seq__7591_7595;
var G__7601 = chunk__7592_7596;
var G__7602 = count__7593_7597;
var G__7603 = (i__7594_7598 + 1);
seq__7591_7595 = G__7600;
chunk__7592_7596 = G__7601;
count__7593_7597 = G__7602;
i__7594_7598 = G__7603;
continue;
}
} else
{var temp__4406__auto___7604 = cljs.core.seq.call(null,seq__7591_7595);if(temp__4406__auto___7604)
{var seq__7591_7605__$1 = temp__4406__auto___7604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7591_7605__$1))
{var c__4004__auto___7606 = cljs.core.chunk_first.call(null,seq__7591_7605__$1);{
var G__7607 = cljs.core.chunk_rest.call(null,seq__7591_7605__$1);
var G__7608 = c__4004__auto___7606;
var G__7609 = cljs.core.count.call(null,c__4004__auto___7606);
var G__7610 = 0;
seq__7591_7595 = G__7607;
chunk__7592_7596 = G__7608;
count__7593_7597 = G__7609;
i__7594_7598 = G__7610;
continue;
}
} else
{var node_7611 = cljs.core.first.call(null,seq__7591_7605__$1);goog.dom.classes.remove(node_7611,class$);
{
var G__7612 = cljs.core.next.call(null,seq__7591_7605__$1);
var G__7613 = null;
var G__7614 = 0;
var G__7615 = 0;
seq__7591_7595 = G__7612;
chunk__7592_7596 = G__7613;
count__7593_7597 = G__7614;
i__7594_7598 = G__7615;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7620_7624 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7621_7625 = null;var count__7622_7626 = 0;var i__7623_7627 = 0;while(true){
if((i__7623_7627 < count__7622_7626))
{var node_7628 = cljs.core._nth.call(null,chunk__7621_7625,i__7623_7627);goog.dom.classes.toggle(node_7628,class$);
{
var G__7629 = seq__7620_7624;
var G__7630 = chunk__7621_7625;
var G__7631 = count__7622_7626;
var G__7632 = (i__7623_7627 + 1);
seq__7620_7624 = G__7629;
chunk__7621_7625 = G__7630;
count__7622_7626 = G__7631;
i__7623_7627 = G__7632;
continue;
}
} else
{var temp__4406__auto___7633 = cljs.core.seq.call(null,seq__7620_7624);if(temp__4406__auto___7633)
{var seq__7620_7634__$1 = temp__4406__auto___7633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7620_7634__$1))
{var c__4004__auto___7635 = cljs.core.chunk_first.call(null,seq__7620_7634__$1);{
var G__7636 = cljs.core.chunk_rest.call(null,seq__7620_7634__$1);
var G__7637 = c__4004__auto___7635;
var G__7638 = cljs.core.count.call(null,c__4004__auto___7635);
var G__7639 = 0;
seq__7620_7624 = G__7636;
chunk__7621_7625 = G__7637;
count__7622_7626 = G__7638;
i__7623_7627 = G__7639;
continue;
}
} else
{var node_7640 = cljs.core.first.call(null,seq__7620_7634__$1);goog.dom.classes.toggle(node_7640,class$);
{
var G__7641 = cljs.core.next.call(null,seq__7620_7634__$1);
var G__7642 = null;
var G__7643 = 0;
var G__7644 = 0;
seq__7620_7624 = G__7641;
chunk__7621_7625 = G__7642;
count__7622_7626 = G__7643;
i__7623_7627 = G__7644;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7653__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7649_7654 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7650_7655 = null;var count__7651_7656 = 0;var i__7652_7657 = 0;while(true){
if((i__7652_7657 < count__7651_7656))
{var node_7658 = cljs.core._nth.call(null,chunk__7650_7655,i__7652_7657);goog.dom.classes.set(node_7658,classes_7653__$1);
{
var G__7659 = seq__7649_7654;
var G__7660 = chunk__7650_7655;
var G__7661 = count__7651_7656;
var G__7662 = (i__7652_7657 + 1);
seq__7649_7654 = G__7659;
chunk__7650_7655 = G__7660;
count__7651_7656 = G__7661;
i__7652_7657 = G__7662;
continue;
}
} else
{var temp__4406__auto___7663 = cljs.core.seq.call(null,seq__7649_7654);if(temp__4406__auto___7663)
{var seq__7649_7664__$1 = temp__4406__auto___7663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7649_7664__$1))
{var c__4004__auto___7665 = cljs.core.chunk_first.call(null,seq__7649_7664__$1);{
var G__7666 = cljs.core.chunk_rest.call(null,seq__7649_7664__$1);
var G__7667 = c__4004__auto___7665;
var G__7668 = cljs.core.count.call(null,c__4004__auto___7665);
var G__7669 = 0;
seq__7649_7654 = G__7666;
chunk__7650_7655 = G__7667;
count__7651_7656 = G__7668;
i__7652_7657 = G__7669;
continue;
}
} else
{var node_7670 = cljs.core.first.call(null,seq__7649_7664__$1);goog.dom.classes.set(node_7670,classes_7653__$1);
{
var G__7671 = cljs.core.next.call(null,seq__7649_7664__$1);
var G__7672 = null;
var G__7673 = 0;
var G__7674 = 0;
seq__7649_7654 = G__7671;
chunk__7650_7655 = G__7672;
count__7651_7656 = G__7673;
i__7652_7657 = G__7674;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7679_7683 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7680_7684 = null;var count__7681_7685 = 0;var i__7682_7686 = 0;while(true){
if((i__7682_7686 < count__7681_7685))
{var node_7687 = cljs.core._nth.call(null,chunk__7680_7684,i__7682_7686);goog.dom.setTextContent(node_7687,value);
{
var G__7688 = seq__7679_7683;
var G__7689 = chunk__7680_7684;
var G__7690 = count__7681_7685;
var G__7691 = (i__7682_7686 + 1);
seq__7679_7683 = G__7688;
chunk__7680_7684 = G__7689;
count__7681_7685 = G__7690;
i__7682_7686 = G__7691;
continue;
}
} else
{var temp__4406__auto___7692 = cljs.core.seq.call(null,seq__7679_7683);if(temp__4406__auto___7692)
{var seq__7679_7693__$1 = temp__4406__auto___7692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7679_7693__$1))
{var c__4004__auto___7694 = cljs.core.chunk_first.call(null,seq__7679_7693__$1);{
var G__7695 = cljs.core.chunk_rest.call(null,seq__7679_7693__$1);
var G__7696 = c__4004__auto___7694;
var G__7697 = cljs.core.count.call(null,c__4004__auto___7694);
var G__7698 = 0;
seq__7679_7683 = G__7695;
chunk__7680_7684 = G__7696;
count__7681_7685 = G__7697;
i__7682_7686 = G__7698;
continue;
}
} else
{var node_7699 = cljs.core.first.call(null,seq__7679_7693__$1);goog.dom.setTextContent(node_7699,value);
{
var G__7700 = cljs.core.next.call(null,seq__7679_7693__$1);
var G__7701 = null;
var G__7702 = 0;
var G__7703 = 0;
seq__7679_7683 = G__7700;
chunk__7680_7684 = G__7701;
count__7681_7685 = G__7702;
i__7682_7686 = G__7703;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7708_7712 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7709_7713 = null;var count__7710_7714 = 0;var i__7711_7715 = 0;while(true){
if((i__7711_7715 < count__7710_7714))
{var node_7716 = cljs.core._nth.call(null,chunk__7709_7713,i__7711_7715);goog.dom.forms.setValue(node_7716,value);
{
var G__7717 = seq__7708_7712;
var G__7718 = chunk__7709_7713;
var G__7719 = count__7710_7714;
var G__7720 = (i__7711_7715 + 1);
seq__7708_7712 = G__7717;
chunk__7709_7713 = G__7718;
count__7710_7714 = G__7719;
i__7711_7715 = G__7720;
continue;
}
} else
{var temp__4406__auto___7721 = cljs.core.seq.call(null,seq__7708_7712);if(temp__4406__auto___7721)
{var seq__7708_7722__$1 = temp__4406__auto___7721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7708_7722__$1))
{var c__4004__auto___7723 = cljs.core.chunk_first.call(null,seq__7708_7722__$1);{
var G__7724 = cljs.core.chunk_rest.call(null,seq__7708_7722__$1);
var G__7725 = c__4004__auto___7723;
var G__7726 = cljs.core.count.call(null,c__4004__auto___7723);
var G__7727 = 0;
seq__7708_7712 = G__7724;
chunk__7709_7713 = G__7725;
count__7710_7714 = G__7726;
i__7711_7715 = G__7727;
continue;
}
} else
{var node_7728 = cljs.core.first.call(null,seq__7708_7722__$1);goog.dom.forms.setValue(node_7728,value);
{
var G__7729 = cljs.core.next.call(null,seq__7708_7722__$1);
var G__7730 = null;
var G__7731 = 0;
var G__7732 = 0;
seq__7708_7712 = G__7729;
chunk__7709_7713 = G__7730;
count__7710_7714 = G__7731;
i__7711_7715 = G__7732;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3273__auto__ = allows_inner_html_QMARK_;if(and__3273__auto__)
{var and__3273__auto____$1 = (function (){var or__3285__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3273__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
})()))
{var value_7743 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7739_7744 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7740_7745 = null;var count__7741_7746 = 0;var i__7742_7747 = 0;while(true){
if((i__7742_7747 < count__7741_7746))
{var node_7748 = cljs.core._nth.call(null,chunk__7740_7745,i__7742_7747);node_7748.innerHTML = value_7743;
{
var G__7749 = seq__7739_7744;
var G__7750 = chunk__7740_7745;
var G__7751 = count__7741_7746;
var G__7752 = (i__7742_7747 + 1);
seq__7739_7744 = G__7749;
chunk__7740_7745 = G__7750;
count__7741_7746 = G__7751;
i__7742_7747 = G__7752;
continue;
}
} else
{var temp__4406__auto___7753 = cljs.core.seq.call(null,seq__7739_7744);if(temp__4406__auto___7753)
{var seq__7739_7754__$1 = temp__4406__auto___7753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7739_7754__$1))
{var c__4004__auto___7755 = cljs.core.chunk_first.call(null,seq__7739_7754__$1);{
var G__7756 = cljs.core.chunk_rest.call(null,seq__7739_7754__$1);
var G__7757 = c__4004__auto___7755;
var G__7758 = cljs.core.count.call(null,c__4004__auto___7755);
var G__7759 = 0;
seq__7739_7744 = G__7756;
chunk__7740_7745 = G__7757;
count__7741_7746 = G__7758;
i__7742_7747 = G__7759;
continue;
}
} else
{var node_7760 = cljs.core.first.call(null,seq__7739_7754__$1);node_7760.innerHTML = value_7743;
{
var G__7761 = cljs.core.next.call(null,seq__7739_7754__$1);
var G__7762 = null;
var G__7763 = 0;
var G__7764 = 0;
seq__7739_7744 = G__7761;
chunk__7740_7745 = G__7762;
count__7741_7746 = G__7763;
i__7742_7747 = G__7764;
continue;
}
}
} else
{}
}
break;
}
}catch (e7738){if((e7738 instanceof Error))
{var e_7765 = e7738;domina.replace_children_BANG_.call(null,content,value_7743);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7738;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3273__auto__ = bubble;if(cljs.core.truth_(and__3273__auto__))
{return (value == null);
} else
{return and__3273__auto__;
}
})()))
{var temp__4406__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4406__auto__))
{var parent = temp__4406__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3285__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7772_7776 = cljs.core.seq.call(null,children);var chunk__7773_7777 = null;var count__7774_7778 = 0;var i__7775_7779 = 0;while(true){
if((i__7775_7779 < count__7774_7778))
{var child_7780 = cljs.core._nth.call(null,chunk__7773_7777,i__7775_7779);frag.appendChild(child_7780);
{
var G__7781 = seq__7772_7776;
var G__7782 = chunk__7773_7777;
var G__7783 = count__7774_7778;
var G__7784 = (i__7775_7779 + 1);
seq__7772_7776 = G__7781;
chunk__7773_7777 = G__7782;
count__7774_7778 = G__7783;
i__7775_7779 = G__7784;
continue;
}
} else
{var temp__4406__auto___7785 = cljs.core.seq.call(null,seq__7772_7776);if(temp__4406__auto___7785)
{var seq__7772_7786__$1 = temp__4406__auto___7785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7772_7786__$1))
{var c__4004__auto___7787 = cljs.core.chunk_first.call(null,seq__7772_7786__$1);{
var G__7788 = cljs.core.chunk_rest.call(null,seq__7772_7786__$1);
var G__7789 = c__4004__auto___7787;
var G__7790 = cljs.core.count.call(null,c__4004__auto___7787);
var G__7791 = 0;
seq__7772_7776 = G__7788;
chunk__7773_7777 = G__7789;
count__7774_7778 = G__7790;
i__7775_7779 = G__7791;
continue;
}
} else
{var child_7792 = cljs.core.first.call(null,seq__7772_7786__$1);frag.appendChild(child_7792);
{
var G__7793 = cljs.core.next.call(null,seq__7772_7786__$1);
var G__7794 = null;
var G__7795 = 0;
var G__7796 = 0;
seq__7772_7776 = G__7793;
chunk__7773_7777 = G__7794;
count__7774_7778 = G__7795;
i__7775_7779 = G__7796;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7766_SHARP_,p2__7767_SHARP_){return f.call(null,p1__7766_SHARP_,p2__7767_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3273__auto__ = obj;if(cljs.core.truth_(and__3273__auto__))
{var and__3273__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3273__auto____$1)
{return obj.length;
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7798 = list_thing;if(G__7798)
{var bit__3906__auto__ = (G__7798.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__7798.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7798.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7798);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7799 = content;if(G__7799)
{var bit__3906__auto__ = (G__7799.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__7799.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7799.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7799);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7799);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__7800 = content;if(G__7800)
{var bit__3906__auto__ = (G__7800.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__7800.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7800.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7800);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7800);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
