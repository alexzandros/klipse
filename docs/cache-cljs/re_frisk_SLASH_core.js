goog.provide("re_frisk.core");
(function (){
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.first.call(null,value).call(null,new cljs.core.Keyword(null,"contexts","contexts",(4351546)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.call(null,cntx,new cljs.core.Keyword(null,"event","event",(301435442)),value):value));
}); return (
new cljs.core.Var(function(){return re_frisk.core.post_event_callback;},new cljs.core.Symbol("re-frisk.core","post-event-callback","re-frisk.core/post-event-callback",(-1967381285),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"post-event-callback","post-event-callback",(1781574985),null),"re_frisk/core.cljs",(26),(1),(11),(11),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(re_frisk.core.post_event_callback)?re_frisk.core.post_event_callback.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

window.onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"win","win",(-1624642689)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return new cljs.core.Keyword(null,"win","win",(-1624642689)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stoped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_shell,re_frisk.data.re_frame_data,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),re_frisk.devtool.open_debugger_window], null),params)], null),div);
}); return (
new cljs.core.Var(function(){return re_frisk.core.render_re_frisk;},new cljs.core.Symbol("re-frisk.core","render-re-frisk","re-frisk.core/render-re-frisk",(-762203300),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"render-re-frisk","render-re-frisk",(-182179638),null),"re_frisk/core.cljs",(23),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(re_frisk.core.render_re_frisk)?re_frisk.core.render_re_frisk.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__25948__auto__ = [];
var len__25946__auto___25 = arguments.length;
var i__25947__auto___26 = (0);
while(true){
if((i__25947__auto___26 < len__25946__auto___25)){
args__25948__auto__.push((arguments[i__25947__auto___26]));

var G__27 = (i__25947__auto___26 + (1));
i__25947__auto___26 = G__27;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((0) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frisk.core.enable_re_frisk_BANG_;},new cljs.core.Symbol("re-frisk.core","enable-re-frisk!","re-frisk.core/enable-re-frisk!",(1568665984),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"enable-re-frisk!","enable-re-frisk!",(2111994866),null),"re_frisk/core.cljs",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(re_frisk.core.enable_re_frisk_BANG_)?re_frisk.core.enable_re_frisk_BANG_.cljs$lang$test:null)])));})()
;

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
var prefs = cljs.core.first.call(null,params);
var event = reagent.ratom.make_reaction.call(null,((function (prefs){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prefs){
return (function (a){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,a)],[(function (){var intc = cljs.core.map.call(null,((function (prefs){
return (function (p1__10_SHARP_,p2__11_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),(((cljs.core._EQ_.call(null,p2__11_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)))))?new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):(((cljs.core._EQ_.call(null,p2__11_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)))))?new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",(579530098))))?new cljs.core.Keyword(null,"db-handler","db-handler",(579530098)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",(-549783097))))?new cljs.core.Keyword(null,"fx-handler","fx-handler",(-549783097)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):"id"
))))]),(cljs.core.truth_(new cljs.core.Keyword(null,"before","before",(-1633692388)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",(-1633692388)),(((cljs.core._EQ_.call(null,p2__11_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)))))?new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",(579530098))))?new cljs.core.Keyword(null,"db-handler","db-handler",(579530098)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",(-549783097))))?new cljs.core.Keyword(null,"fx-handler","fx-handler",(-549783097)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"after","after",(594996914)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",(594996914)),(((cljs.core._EQ_.call(null,p2__11_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(p1__10_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)))))?new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)], null):null));
});})(prefs))
,cljs.core.second.call(null,a),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.second.call(null,a))));
return cljs.core.PersistentHashMap.fromArrays([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,intc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" interceptors")].join('')],[intc]);
})()]);
});})(prefs))
,cljs.core.filter.call(null,((function (prefs){
return (function (p1__12_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.key.call(null,p1__12_SHARP_),new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",(-658524246)));
});})(prefs))
,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (prefs){
return (function (){
return new cljs.core.Keyword(null,"event","event",(301435442)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
});})(prefs))
)))));
});})(prefs))
);
var sub = reagent.ratom.make_reaction.call(null,((function (prefs,event){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prefs,event){
return (function (p1__13_SHARP_){
var k = cljs.core.first.call(null,p1__13_SHARP_);
return cljs.core.PersistentHashMap.fromArrays([k],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))]);
});})(prefs,event))
,cljs.core.filter.call(null,((function (prefs,event){
return (function (p1__14_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p1__14_SHARP_),new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",(447694709)));
});})(prefs,event))
,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (prefs,event){
return (function (){
return new cljs.core.Keyword(null,"sub","sub",(-2093760025)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
});})(prefs,event))
)))));
});})(prefs,event))
);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",(447694709)),((function (prefs,event,sub){
return (function (db,_){
return db;
});})(prefs,event,sub))
);

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",(79528781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",(301435442)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.count.call(null,cljs.core.deref.call(null,event)),event]),new cljs.core.Keyword(null,"sub","sub",(-2093760025)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.count.call(null,cljs.core.deref.call(null,sub)),sub]),new cljs.core.Keyword(null,"fx","fx",(-1237829572)),reagent.ratom.make_reaction.call(null,((function (prefs,event,sub){
return (function (){
return cljs.core.map.call(null,((function (prefs,event,sub){
return (function (p1__15_SHARP_){
if(cljs.core.truth_(p1__15_SHARP_.call(null,re_frisk.help.fx))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__15_SHARP_,p1__15_SHARP_.call(null,re_frisk.help.fx)]);
} else {
return p1__15_SHARP_;
}
});})(prefs,event,sub))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"fx","fx",(-1237829572)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});})(prefs,event,sub))
),new cljs.core.Keyword(null,"cofx","cofx",(2013202907)),reagent.ratom.make_reaction.call(null,((function (prefs,event,sub){
return (function (){
return cljs.core.map.call(null,((function (prefs,event,sub){
return (function (p1__16_SHARP_){
if(cljs.core.truth_(p1__16_SHARP_.call(null,re_frisk.help.cofx))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__16_SHARP_,p1__16_SHARP_.call(null,re_frisk.help.cofx)]);
} else {
return p1__16_SHARP_;
}
});})(prefs,event,sub))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cofx","cofx",(2013202907)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});})(prefs,event,sub))
)], null),new cljs.core.Keyword(null,"app-db","app-db",(865606302)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",(447694709))], null))], null));

cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"prefs","prefs",(-1818938470)),prefs);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",(-780512682)).cljs$core$IFn$_invoke$arity$1(prefs),false)){
} else {
re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);
}

return setTimeout(re_frisk.core.render_re_frisk,(100),prefs);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq24){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24));
});

new cljs.core.Var(function(){return re_frisk.core.enable_re_frisk_BANG_;},new cljs.core.Symbol("re-frisk.core","enable-re-frisk!","re-frisk.core/enable-re-frisk!",(1568665984),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"enable-re-frisk!","enable-re-frisk!",(2111994866),null),"re_frisk/core.cljs",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(re_frisk.core.enable_re_frisk_BANG_)?re_frisk.core.enable_re_frisk_BANG_.cljs$lang$test:null)]));
(function (){
re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__25948__auto__ = [];
var len__25946__auto___29 = arguments.length;
var i__25947__auto___30 = (0);
while(true){
if((i__25947__auto___30 < len__25946__auto___29)){
args__25948__auto__.push((arguments[i__25947__auto___30]));

var G__31 = (i__25947__auto___30 + (1));
i__25947__auto___30 = G__31;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((0) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frisk.core.enable_frisk_BANG_;},new cljs.core.Symbol("re-frisk.core","enable-frisk!","re-frisk.core/enable-frisk!",(-854840141),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"enable-frisk!","enable-frisk!",(-359029215),null),"re_frisk/core.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(re_frisk.core.enable_frisk_BANG_)?re_frisk.core.enable_frisk_BANG_.cljs$lang$test:null)])));})()
;

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq28){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28));
});

new cljs.core.Var(function(){return re_frisk.core.enable_frisk_BANG_;},new cljs.core.Symbol("re-frisk.core","enable-frisk!","re-frisk.core/enable-frisk!",(-854840141),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"enable-frisk!","enable-frisk!",(-359029215),null),"re_frisk/core.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(re_frisk.core.enable_frisk_BANG_)?re_frisk.core.enable_frisk_BANG_.cljs$lang$test:null)]));
(function (){
re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
}); return (
new cljs.core.Var(function(){return re_frisk.core.add_data;},new cljs.core.Symbol("re-frisk.core","add-data","re-frisk.core/add-data",(1599354136),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"add-data","add-data",(-1093096566),null),"re_frisk/core.cljs",(15),(1),(66),(66),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(re_frisk.core.add_data)?re_frisk.core.add_data.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
}); return (
new cljs.core.Var(function(){return re_frisk.core.add_in_data;},new cljs.core.Symbol("re-frisk.core","add-in-data","re-frisk.core/add-in-data",(-545157374),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"add-in-data","add-in-data",(-15795856),null),"re_frisk/core.cljs",(18),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",(-1586012071),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(re_frisk.core.add_in_data)?re_frisk.core.add_in_data.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.core.watch_context = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"re-frisk-watch-context","re-frisk-watch-context",(1102368726)),new cljs.core.Keyword(null,"before","before",(-1633692388)),(function (context){
cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contexts","contexts",(4351546)),cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",(301435442)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)).cljs$core$IFn$_invoke$arity$1(context))),new cljs.core.Keyword(null,"before","before",(-1633692388))], null),context);

return context;
})); return (
new cljs.core.Var(function(){return re_frisk.core.watch_context;},new cljs.core.Symbol("re-frisk.core","watch-context","re-frisk.core/watch-context",(-932671574),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"watch-context","watch-context",(668796188),null),"re_frisk/core.cljs",(19),(1),(72),(72),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.core.watch_context)?re_frisk.core.watch_context.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",(865606302)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",(1450155487)),view,new cljs.core.Keyword(null,"events","events",(1792552201))], null),cljs.core.set.call(null,events));

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",(1450155487)),view,new cljs.core.Keyword(null,"subs","subs",(-186681991))], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__17_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__17_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17_SHARP_], null))]);
}),subs)));

var seq__36 = cljs.core.seq.call(null,subs);
var chunk__37 = null;
var count__38 = (0);
var i__39 = (0);
while(true){
if((i__39 < count__38)){
var s = cljs.core._nth.call(null,chunk__37,i__39);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",(-186681991)),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__40 = seq__36;
var G__41 = chunk__37;
var G__42 = count__38;
var G__43 = (i__39 + (1));
seq__36 = G__40;
chunk__37 = G__41;
count__38 = G__42;
i__39 = G__43;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__36);
if(temp__22186__auto__){
var seq__36__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__36__$1);
var G__44 = cljs.core.chunk_rest.call(null,seq__36__$1);
var G__45 = c__25653__auto__;
var G__46 = cljs.core.count.call(null,c__25653__auto__);
var G__47 = (0);
seq__36 = G__44;
chunk__37 = G__45;
count__38 = G__46;
i__39 = G__47;
continue;
} else {
var s = cljs.core.first.call(null,seq__36__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",(-186681991)),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__48 = cljs.core.next.call(null,seq__36__$1);
var G__49 = null;
var G__50 = (0);
var G__51 = (0);
seq__36 = G__48;
chunk__37 = G__49;
count__38 = G__50;
i__39 = G__51;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return re_frisk.core.reg_view;},new cljs.core.Symbol("re-frisk.core","reg-view","re-frisk.core/reg-view",(-616397354),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"reg-view","reg-view",(-1143600540),null),"re_frisk/core.cljs",(15),(1),(79),(79),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"subs","subs",(1453849536),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),null,(cljs.core.truth_(re_frisk.core.reg_view)?re_frisk.core.reg_view.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",(865606302)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",(1450155487))], null),cljs.core.dissoc,view);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return re_frisk.core.unmount_view;},new cljs.core.Symbol("re-frisk.core","unmount-view","re-frisk.core/unmount-view",(1892735012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.core","re-frisk.core",(-747495726),null),new cljs.core.Symbol(null,"unmount-view","unmount-view",(1348822930),null),"re_frisk/core.cljs",(19),(1),(87),(87),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"view","view",(-1406440955),null)], null)),null,(cljs.core.truth_(re_frisk.core.unmount_view)?re_frisk.core.unmount_view.cljs$lang$test:null)])));})()
;
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",(-658524246)),(function (db,p__52){
var vec__53 = p__52;
var _ = cljs.core.nth.call(null,vec__53,(0),null);
var value = cljs.core.nth.call(null,vec__53,(1),null);
return value;
}));
