// Compiled by ClojureScript 1.9.376
goog.provide("clojure.test.check.random.doubles");
(function (){
clojure.test.check.random.doubles.double_unit = (function (){var i = (53);
var x = (1);
while(true){
if((i === (0))){
return x;
} else {
var G__25 = (i - (1));
var G__26 = (x / (2));
i = G__25;
x = G__26;
continue;
}
break;
}
})(); return (
new cljs.core.Var(function(){return clojure.test.check.random.doubles.double_unit;},new cljs.core.Symbol("clojure.test.check.random.doubles","double-unit","clojure.test.check.random.doubles/double-unit",(1360285475),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.doubles","clojure.test.check.random.doubles",(877405703),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"double-unit","double-unit",(-1686592302),null),"clojure/test/check/random/doubles.cljs",(27),(1),(14),(14),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.doubles.double_unit)?clojure.test.check.random.doubles.double_unit.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.doubles.big_double_unit = (clojure.test.check.random.doubles.double_unit * (4294967296)); return (
new cljs.core.Var(function(){return clojure.test.check.random.doubles.big_double_unit;},new cljs.core.Symbol("clojure.test.check.random.doubles","big-double-unit","clojure.test.check.random.doubles/big-double-unit",(1529803339),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.doubles","clojure.test.check.random.doubles",(877405703),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"big-double-unit","big-double-unit",(-1779279110),null),"clojure/test/check/random/doubles.cljs",(31),(1),(20),(20),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.doubles.big_double_unit)?clojure.test.check.random.doubles.big_double_unit.cljs$lang$test:null)])));})()
;
/**
 * Given a uniformly distributed random long, returns a uniformly
 *   distributed double between 0.0 (inclusive) and 1.0 (exclusive).
 */
(function (){
clojure.test.check.random.doubles.rand_long__GT_rand_double = (function clojure$test$check$random$doubles$rand_long__GT_rand_double(long$){
var x = clojure.test.check.random.longs.unsigned_bit_shift_right.call(null,long$,(11));
var low_bits = x.getLowBitsUnsigned();
var high_bits = x.getHighBits();
return ((clojure.test.check.random.doubles.double_unit * low_bits) + (clojure.test.check.random.doubles.big_double_unit * high_bits));
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.doubles.rand_long__GT_rand_double;},new cljs.core.Symbol("clojure.test.check.random.doubles","rand-long->rand-double","clojure.test.check.random.doubles/rand-long->rand-double",(-1242606343),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.doubles","clojure.test.check.random.doubles",(877405703),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"rand-long->rand-double","rand-long->rand-double",(-280286134),null),"clojure/test/check/random/doubles.cljs",(29),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),"Given a uniformly distributed random long, returns a uniformly\n  distributed double between 0.0 (inclusive) and 1.0 (exclusive).",(cljs.core.truth_(clojure.test.check.random.doubles.rand_long__GT_rand_double)?clojure.test.check.random.doubles.rand_long__GT_rand_double.cljs$lang$test:null)])));})()
;

//# sourceURL=clojure/test/check/random/doubles.js?rel=1483438380754
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvanVyZS90ZXN0L2NoZWNrL3JhbmRvbS9kb3VibGVzLmpzP3JlbD0xNDgzNDM4MzgwNzU0Iiwic291cmNlcyI6WyJkb3VibGVzLmNsanM/cmVsPTE0ODM0MzgzODA3NTQiXSwibGluZUNvdW50IjozOSwibWFwcGluZ3MiOiI7QUFhQTtBQUFlQSxnREFDYixxQkFBQSxKQUFPQztRQUFQLEpBQVlDOztBQUFaLEFBQ0UsR0FBSSxPQUFBLE5BQU9EO0FBQ1RDOztBQUNBLFlBQU8sS0FBQSxKQUFLRDtZQUFHLEtBQUEsSkFBR0M7Ozs7Ozs7O0FBSnhCLG9GQUFBLDBJQUFBLHdDQUFBLDZEQUFBLGtEQUFBLHVEQUFBLHdEQUFBLG1FQUFBLDJEQUFBLHNEQUFBLCtEQUFBLCtEQUFBLHFEQUFBLHdEQUFBLEtBQUEsb0JBQUEsb0hBQUEsMkNBQUEsMkRBQUEsMkJBQUEsMEVBQUEseUNBQUEsS0FBQSxJQUFBLEtBQUEsS0FBQSxxQkFBQSxLQUFBLGlFQUFBLEFBQUEsNkRBQUEsNUdBQWVGLCtDQUFBQTs7QUFNZjtBQUFlRyxvREFFYixpREFBQSxoREFBR0g7QUFGTCx3RkFBQSxrSkFBQSx3Q0FBQSw2REFBQSxrREFBQSx1REFBQSx3REFBQSxtRUFBQSwyREFBQSxzREFBQSwrREFBQSwrREFBQSxxREFBQSx3REFBQSxLQUFBLG9CQUFBLG9IQUFBLDJDQUFBLDJEQUFBLDJCQUFBLGtGQUFBLHlDQUFBLEtBQUEsSUFBQSxLQUFBLEtBQUEscUJBQUEsS0FBQSxxRUFBQSxBQUFBLGlFQUFBLHBIQUFlRyxtREFBQUE7O0FBSWY7Ozs7OzhEQUFBLDlEQUFNQyxvSUFHSEM7QUFISCxBQUlFLElBQU1ILElBQUUseUVBQUEsekVBQUNJLG1FQUErQkQ7SUFDbENFLFdBQVMsQUFBcUJMO0lBQzlCTSxZQUFVLEFBQWNOO0FBRjlCLEFBR0UsUUFBRyxDQUFHRixnREFBWU8sWUFDZixDQUFHSixvREFBZ0JLOztBQVIxQixrR0FBQSxpS0FBQSx3Q0FBQSxrREFBQSx1REFBQSx3REFBQSxtRUFBQSwyREFBQSxzREFBQSwrREFBQSwrREFBQSxxREFBQSx3REFBQSxvQkFBQSxvSEFBQSwyQ0FBQSwyREFBQSwyQkFBQSwrRkFBQSx5Q0FBQSxLQUFBLElBQUEsS0FBQSxLQUFBLGVBQUEsbUZBQUEsb0VBQUEsb0lBQUEsK0VBQUEsQUFBQSwyRUFBQSx4SUFBTUosNkRBQUFBIiwibmFtZXMiOlsiY2xvanVyZS50ZXN0LmNoZWNrLnJhbmRvbS5kb3VibGVzL2RvdWJsZS11bml0IiwiaSIsIngiLCJjbG9qdXJlLnRlc3QuY2hlY2sucmFuZG9tLmRvdWJsZXMvYmlnLWRvdWJsZS11bml0IiwiY2xvanVyZS50ZXN0LmNoZWNrLnJhbmRvbS5kb3VibGVzL3JhbmQtbG9uZy0+cmFuZC1kb3VibGUiLCJsb25nIiwiY2xvanVyZS50ZXN0LmNoZWNrLnJhbmRvbS5sb25ncy91bnNpZ25lZC1iaXQtc2hpZnQtcmlnaHQiLCJsb3ctYml0cyIsImhpZ2gtYml0cyJdLCJzb3VyY2VzQ29udGVudCI6WyI7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleSwgUmVpZCBEcmFwZXIsIGFuZCBjb250cmlidXRvcnMuXG47ICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuKG5zIF57OmF1dGhvciBcIkdhcnkgRnJlZGVyaWNrc1wifVxuICBjbG9qdXJlLnRlc3QuY2hlY2sucmFuZG9tLmRvdWJsZXNcbiAgKDpyZXF1aXJlIFtjbG9qdXJlLnRlc3QuY2hlY2sucmFuZG9tLmxvbmdzIDphcyBsb25nc10pKVxuXG4oZGVmIF46cHJpdmF0ZSBkb3VibGUtdW5pdFxuICAobG9vcCBbaSA1MyB4IDFdXG4gICAgKGlmICh6ZXJvPyBpKVxuICAgICAgeFxuICAgICAgKHJlY3VyIChkZWMgaSkgKC8geCAyKSkpKSlcblxuKGRlZiBeOnByaXZhdGUgYmlnLWRvdWJsZS11bml0XG4gIDs7ICgqIGRvdWJsZS11bml0IDB4MTAwMDAwMDAwKVxuICAoKiBkb3VibGUtdW5pdCA0Mjk0OTY3Mjk2KSlcblxuKGRlZm4gcmFuZC1sb25nLT5yYW5kLWRvdWJsZVxuICBcIkdpdmVuIGEgdW5pZm9ybWx5IGRpc3RyaWJ1dGVkIHJhbmRvbSBsb25nLCByZXR1cm5zIGEgdW5pZm9ybWx5XG4gIGRpc3RyaWJ1dGVkIGRvdWJsZSBiZXR3ZWVuIDAuMCAoaW5jbHVzaXZlKSBhbmQgMS4wIChleGNsdXNpdmUpLlwiXG4gIFtsb25nXVxuICAobGV0IFt4IChsb25ncy91bnNpZ25lZC1iaXQtc2hpZnQtcmlnaHQgbG9uZyAxMSlcbiAgICAgICAgbG93LWJpdHMgKC5nZXRMb3dCaXRzVW5zaWduZWQgeClcbiAgICAgICAgaGlnaC1iaXRzICguZ2V0SGlnaEJpdHMgeCldXG4gICAgKCsgKCogZG91YmxlLXVuaXQgbG93LWJpdHMpXG4gICAgICAgKCogYmlnLWRvdWJsZS11bml0IGhpZ2gtYml0cykpKSlcbiJdfQ==