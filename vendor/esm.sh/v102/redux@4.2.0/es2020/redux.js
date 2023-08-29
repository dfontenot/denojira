/* esm.sh - esbuild bundle(redux@4.2.0) es2020 production */
import O from"/v102/@babel/runtime@7.20.7/es2020/helpers/esm/objectSpread2.js";function i(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var x=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),N=function(){return Math.random().toString(36).substring(7).split("").join(".")},E={INIT:"@@redux/INIT"+N(),REPLACE:"@@redux/REPLACE"+N(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+N()}};function I(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function k(e,t,r){var o;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(i(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(i(1));return r(k)(e,t)}if(typeof e!="function")throw new Error(i(2));var s=e,d=t,h=[],a=h,u=!1;function l(){a===h&&(a=h.slice())}function v(){if(u)throw new Error(i(3));return d}function m(n){if(typeof n!="function")throw new Error(i(4));if(u)throw new Error(i(5));var p=!0;return l(),a.push(n),function(){if(p){if(u)throw new Error(i(6));p=!1,l();var c=a.indexOf(n);a.splice(c,1),h=null}}}function f(n){if(!I(n))throw new Error(i(7));if(typeof n.type>"u")throw new Error(i(8));if(u)throw new Error(i(9));try{u=!0,d=s(d,n)}finally{u=!1}for(var p=h=a,y=0;y<p.length;y++){var c=p[y];c()}return n}function b(n){if(typeof n!="function")throw new Error(i(10));s=n,f({type:E.REPLACE})}function g(){var n,p=m;return n={subscribe:function(c){if(typeof c!="object"||c===null)throw new Error(i(11));function w(){c.next&&c.next(v())}w();var _=p(w);return{unsubscribe:_}}},n[x]=function(){return this},n}return f({type:E.INIT}),o={dispatch:f,subscribe:m,getState:v,replaceReducer:b},o[x]=g,o}var A=k;function S(e){Object.keys(e).forEach(function(t){var r=e[t],o=r(void 0,{type:E.INIT});if(typeof o>"u")throw new Error(i(12));if(typeof r(void 0,{type:E.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(i(13))})}function V(e){for(var t=Object.keys(e),r={},o=0;o<t.length;o++){var s=t[o];typeof e[s]=="function"&&(r[s]=e[s])}var d=Object.keys(r),h,a;try{S(r)}catch(u){a=u}return function(l,v){if(l===void 0&&(l={}),a)throw a;if(!1)var m;for(var f=!1,b={},g=0;g<d.length;g++){var n=d[g],p=r[n],y=l[n],c=p(y,v);if(typeof c>"u"){var w=v&&v.type;throw new Error(i(14))}b[n]=c,f=f||c!==y}return f=f||d.length!==Object.keys(l).length,f?b:l}}function D(e,t){return function(){return t(e.apply(this,arguments))}}function R(e,t){if(typeof e=="function")return D(e,t);if(typeof e!="object"||e===null)throw new Error(i(16));var r={};for(var o in e){var s=e[o];typeof s=="function"&&(r[o]=D(s,t))}return r}function T(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(o){return o}:t.length===1?t[0]:t.reduce(function(o,s){return function(){return o(s.apply(void 0,arguments))}})}function C(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){return function(){var s=o.apply(void 0,arguments),d=function(){throw new Error(i(15))},h={getState:s.getState,dispatch:function(){return d.apply(void 0,arguments)}},a=t.map(function(u){return u(h)});return d=T.apply(void 0,a)(s.dispatch),O(O({},s),{},{dispatch:d})}}}export{E as __DO_NOT_USE__ActionTypes,C as applyMiddleware,R as bindActionCreators,V as combineReducers,T as compose,k as createStore,A as legacy_createStore};
