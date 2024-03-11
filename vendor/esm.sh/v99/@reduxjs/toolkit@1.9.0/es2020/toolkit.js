/* esm.sh - esbuild bundle(@reduxjs/toolkit@1.9.0) es2020 production */
import __Process$ from "/v99/node_process.js";var __global$ = globalThis || (typeof window !== "undefined" ? window : self);import{enableES5 as Le}from"/v99/immer@9.0.16/es2020/immer.js";export*from"/v99/redux@4.2.0/es2020/redux.js";import{default as Hr,current as Qr,freeze as Yr,original as Jr,isDraft as Zr}from"/v99/immer@9.0.16/es2020/immer.js";import{createSelector as et}from"/v99/reselect@4.1.7/es2020/reselect.js";import{current as qe,isDraft as ze}from"/v99/immer@9.0.16/es2020/immer.js";import{createSelector as We}from"/v99/reselect@4.1.7/es2020/reselect.js";import{createStore as Fe,compose as Be,applyMiddleware as Ue,combineReducers as Ke}from"/v99/redux@4.2.0/es2020/redux.js";import{compose as ue}from"/v99/redux@4.2.0/es2020/redux.js";import oe from"/v99/redux-thunk@2.4.2/es2020/redux-thunk.js";import Ge,{isDraftable as He}from"/v99/immer@9.0.16/es2020/immer.js";import ur,{isDraft as or,isDraftable as cr}from"/v99/immer@9.0.16/es2020/immer.js";import mr,{isDraft as pr}from"/v99/immer@9.0.16/es2020/immer.js";var Ie=function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),V=function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,f;return f={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function v(o){return function(l){return p([o,l])}}function p(o){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,a&&(i=o[0]&2?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[o[0]&2,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,a=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){t.label=o[1];break}if(o[0]===6&&t.label<i[1]){t.label=i[1],i=o;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(o);break}i[2]&&t.ops.pop(),t.trys.pop();continue}o=r.call(e,t)}catch(l){o=[6,l],a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},P=function(e,r){for(var t=0,n=r.length,a=e.length;t<n;t++,a++)e[a]=r[t];return e},Re=Object.defineProperty,xe=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,ie=function(e,r,t){return r in e?Re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},k=function(e,r){for(var t in r||(r={}))_e.call(r,t)&&ie(e,t,r[t]);if(ae)for(var n=0,a=ae(r);n<a.length;n++){var t=a[n];Ve.call(r,t)&&ie(e,t,r[t])}return e},X=function(e,r){return xe(e,Pe(r))},L=function(e,r,t){return new Promise(function(n,a){var i=function(p){try{v(t.next(p))}catch(o){a(o)}},f=function(p){try{v(t.throw(p))}catch(o){a(o)}},v=function(p){return p.done?n(p.value):Promise.resolve(p.value).then(i,f)};v((t=t.apply(e,r)).next())})},N=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=We.apply(void 0,e),n=function(a){for(var i=[],f=1;f<arguments.length;f++)i[f-1]=arguments[f];return t.apply(void 0,P([ze(a)?qe(a):a],i))};return n},Xe=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ue:ue.apply(null,arguments)},it=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}};function $(e){if(typeof e!="object"||e===null)return!1;var r=Object.getPrototypeOf(e);if(r===null)return!0;for(var t=r;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return r===t}function me(e,r){var t=0;return{measureTime:function(n){var a=Date.now();try{return n()}finally{var i=Date.now();t+=i-a}},warnIfExceeded:function(){t>e&&console.warn(r+" took "+t+"ms, which is more than the warning threshold of "+e+`ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`)}}}var Qe=function(e){Ie(r,e);function r(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=e.apply(this,t)||this;return Object.setPrototypeOf(a,r.prototype),a}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},r.prototype.prepend=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length===1&&Array.isArray(t[0])?new(r.bind.apply(r,P([void 0],t[0].concat(this)))):new(r.bind.apply(r,P([void 0],t.concat(this))))},r}(Array);function Q(e){return He(e)?Ge(e,function(){}):e}var Ye=!0,ce="Invariant failed";function fe(e,r){if(!e)throw Ye?new Error(ce):new Error(ce+": "+(r||""))}function Je(e,r,t,n){return JSON.stringify(e,Ze(r,n),t)}function Ze(e,r){var t=[],n=[];return r||(r=function(a,i){return t[0]===i?"[Circular ~]":"[Circular ~."+n.slice(0,t.indexOf(i)).join(".")+"]"}),function(a,i){if(t.length>0){var f=t.indexOf(this);~f?t.splice(f+1):t.push(this),~f?n.splice(f,1/0,a):n.push(a),~t.indexOf(i)&&(i=r.call(this,a,i))}else t.push(i);return e==null?i:e.call(this,a,i)}}function $e(e){return typeof e!="object"||e==null||Object.isFrozen(e)}function er(e,r,t){var n=pe(e,r,t);return{detectMutations:function(){return ye(e,r,n,t)}}}function pe(e,r,t,n){r===void 0&&(r=[]),n===void 0&&(n="");var a={value:t};if(!e(t)){a.children={};for(var i in t){var f=n?n+"."+i:i;r.length&&r.indexOf(f)!==-1||(a.children[i]=pe(e,r,t[i],f))}}return a}function ye(e,r,t,n,a,i){r===void 0&&(r=[]),a===void 0&&(a=!1),i===void 0&&(i="");var f=t?t.value:void 0,v=f===n;if(a&&!v&&!Number.isNaN(n))return{wasMutated:!0,path:i};if(e(f)||e(n))return{wasMutated:!1};var p={};for(var o in t.children)p[o]=!0;for(var o in n)p[o]=!0;for(var o in p){var l=i?i+"."+o:o;if(!(r.length&&r.indexOf(l)!==-1)){var h=ye(e,r,t.children[o],n[o],v,l);if(h.wasMutated)return h}}return{wasMutated:!1}}function ct(e){return e===void 0&&(e={}),function(){return function(p){return function(o){return p(o)}}};var r=e.isImmutable,t=r===void 0?$e:r,n=e.ignoredPaths,a=e.warnAfter,i=a===void 0?32:a,f=e.ignore;n=n||f;var v=er.bind(null,t,n);return function(p){var o=p.getState,l=o(),h=v(l),y;return function(d){return function(u){var c=me(i,"ImmutableStateInvariantMiddleware");c.measureTime(function(){l=o(),y=h.detectMutations(),h=v(l),fe(!y.wasMutated,"A state mutation was detected between dispatches, in the path '"+(y.path||"")+"'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)")});var b=d(u);return c.measureTime(function(){l=o(),y=h.detectMutations(),h=v(l),y.wasMutated&&fe(!y.wasMutated,"A state mutation was detected inside a dispatch, in the path: "+(y.path||"")+". Take a look at the reducer(s) handling the action "+Je(u)+". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)")}),c.warnIfExceeded(),b}}}}function be(e){var r=typeof e;return e==null||r==="string"||r==="boolean"||r==="number"||Array.isArray(e)||$(e)}function Y(e,r,t,n,a){r===void 0&&(r=""),t===void 0&&(t=be),a===void 0&&(a=[]);var i;if(!t(e))return{keyPath:r||"<root>",value:e};if(typeof e!="object"||e===null)return!1;for(var f=n!=null?n(e):Object.entries(e),v=a.length>0,p=0,o=f;p<o.length;p++){var l=o[p],h=l[0],y=l[1],d=r?r+"."+h:h;if(!(v&&a.indexOf(d)>=0)){if(!t(y))return{keyPath:d,value:y};if(typeof y=="object"&&(i=Y(y,d,t,n,a),i))return i}}return!1}function ft(e){return e===void 0&&(e={}),function(){return function(b){return function(g){return b(g)}}};var r=e.isSerializable,t=r===void 0?be:r,n=e.getEntries,a=e.ignoredActions,i=a===void 0?[]:a,f=e.ignoredActionPaths,v=f===void 0?["meta.arg","meta.baseQueryMeta"]:f,p=e.ignoredPaths,o=p===void 0?[]:p,l=e.warnAfter,h=l===void 0?32:l,y=e.ignoreState,d=y===void 0?!1:y,u=e.ignoreActions,c=u===void 0?!1:u;return function(b){return function(g){return function(s){var m=g(s),w=me(h,"SerializableStateInvariantMiddleware");return!c&&!(i.length&&i.indexOf(s.type)!==-1)&&w.measureTime(function(){var O=Y(s,"",t,n,v);if(O){var A=O.keyPath,M=O.value;console.error("A non-serializable value was detected in an action, in the path: `"+A+"`. Value:",M,`
Take a look at the logic that dispatched this action: `,s,`
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`,`
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`)}}),d||(w.measureTime(function(){var O=b.getState(),A=Y(O,"",t,n,o);if(A){var M=A.keyPath,S=A.value;console.error("A non-serializable value was detected in the state, in the path: `"+M+"`. Value:",S,`
Take a look at the reducer(s) handling this action type: `+s.type+`.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`)}}),w.warnIfExceeded()),m}}}}function rr(e){return typeof e=="boolean"}function tr(){return function(r){return nr(r)}}function nr(e){e===void 0&&(e={});var r=e.thunk,t=r===void 0?!0:r,n=e.immutableCheck,a=n===void 0?!0:n,i=e.serializableCheck,f=i===void 0?!0:i,v=new Qe;if(t&&(rr(t)?v.push(oe):v.push(oe.withExtraArgument(t.extraArgument))),!1){if(a)var p;if(f)var o}return v}var G=!0;function lt(e){var r=tr(),t=e||{},n=t.reducer,a=n===void 0?void 0:n,i=t.middleware,f=i===void 0?r():i,v=t.devTools,p=v===void 0?!0:v,o=t.preloadedState,l=o===void 0?void 0:o,h=t.enhancers,y=h===void 0?void 0:h,d;if(typeof a=="function")d=a;else if($(a))d=Ke(a);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var u=f;if(typeof u=="function"&&(u=u(r),!G&&!Array.isArray(u)))throw new Error("when using a middleware builder function, an array of middleware must be returned");if(!G&&u.some(function(m){return typeof m!="function"}))throw new Error("each middleware provided to configureStore must be a function");var c=Ue.apply(void 0,u),b=Be;p&&(b=Xe(k({trace:!G},typeof p=="object"&&p)));var g=[c];Array.isArray(y)?g=P([c],y):typeof y=="function"&&(g=y(g));var s=b.apply(void 0,g);return Fe(d,l,s)}function C(e,r){function t(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r){var i=r.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return k(k({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return t.toString=function(){return""+e},t.type=e,t.match=function(n){return n.type===e},t}function ar(e){return $(e)&&typeof e.type=="string"&&Object.keys(e).every(ir)}function ir(e){return["type","payload","error","meta"].indexOf(e)>-1}function st(e){return""+e}function ge(e){var r={},t=[],n,a={addCase:function(i,f){var v=typeof i=="string"?i:i.type;if(v in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[v]=f,a},addMatcher:function(i,f){return t.push({matcher:i,reducer:f}),a},addDefaultCase:function(i){return n=i,a}};return e(a),[r,t,n]}function fr(e){return typeof e=="function"}function lr(e,r,t,n){t===void 0&&(t=[]);var a=typeof r=="function"?ge(r):[r,t,n],i=a[0],f=a[1],v=a[2],p;if(fr(e))p=function(){return Q(e())};else{var o=Q(e);p=function(){return o}}function l(h,y){h===void 0&&(h=p());var d=P([i[y.type]],f.filter(function(u){var c=u.matcher;return c(y)}).map(function(u){var c=u.reducer;return c}));return d.filter(function(u){return!!u}).length===0&&(d=[v]),d.reduce(function(u,c){if(c)if(or(u)){var b=u,g=c(b,y);return g===void 0?u:g}else{if(cr(u))return ur(u,function(s){return c(s,y)});var g=c(u,y);if(g===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return u},h)}return l.getInitialState=p,l}function sr(e,r){return e+"/"+r}function vt(e){var r=e.name;if(!r)throw new Error("`name` is a required option for createSlice");typeof __Process$<"u";var t=typeof e.initialState=="function"?e.initialState:Q(e.initialState),n=e.reducers||{},a=Object.keys(n),i={},f={},v={};a.forEach(function(l){var h=n[l],y=sr(r,l),d,u;"reducer"in h?(d=h.reducer,u=h.prepare):d=h,i[l]=d,f[y]=d,v[l]=u?C(y,u):C(y)});function p(){var l=typeof e.extraReducers=="function"?ge(e.extraReducers):[e.extraReducers],h=l[0],y=h===void 0?{}:h,d=l[1],u=d===void 0?[]:d,c=l[2],b=c===void 0?void 0:c,g=k(k({},y),f);return lr(t,function(s){for(var m in g)s.addCase(m,g[m]);for(var w=0,O=u;w<O.length;w++){var A=O[w];s.addMatcher(A.matcher,A.reducer)}b&&s.addDefaultCase(b)})}var o;return{name:r,reducer:function(l,h){return o||(o=p()),o(l,h)},actions:v,caseReducers:i,getInitialState:function(){return o||(o=p()),o.getInitialState()}}}function dr(){return{ids:[],entities:{}}}function vr(){function e(r){return r===void 0&&(r={}),Object.assign(dr(),r)}return{getInitialState:e}}function hr(){function e(r){var t=function(o){return o.ids},n=function(o){return o.entities},a=N(t,n,function(o,l){return o.map(function(h){return l[h]})}),i=function(o,l){return l},f=function(o,l){return o[l]},v=N(t,function(o){return o.length});if(!r)return{selectIds:t,selectEntities:n,selectAll:a,selectTotal:v,selectById:N(n,i,f)};var p=N(r,n);return{selectIds:N(r,t),selectEntities:p,selectAll:N(r,a),selectTotal:N(r,v),selectById:N(p,i,f)}}return{getSelectors:e}}function yr(e){var r=E(function(t,n){return e(n)});return function(n){return r(n,void 0)}}function E(e){return function(t,n){function a(f){return ar(f)}var i=function(f){a(n)?e(n.payload,f):e(n,f)};return pr(t)?(i(t),t):mr(t,i)}}function _(e,r){var t=r(e);return t}function D(e){return Array.isArray(e)||(e=Object.values(e)),e}function we(e,r,t){e=D(e);for(var n=[],a=[],i=0,f=e;i<f.length;i++){var v=f[i],p=_(v,r);p in t.entities?a.push({id:p,changes:v}):n.push(v)}return[n,a]}function Oe(e){function r(u,c){var b=_(u,e);b in c.entities||(c.ids.push(b),c.entities[b]=u)}function t(u,c){u=D(u);for(var b=0,g=u;b<g.length;b++){var s=g[b];r(s,c)}}function n(u,c){var b=_(u,e);b in c.entities||c.ids.push(b),c.entities[b]=u}function a(u,c){u=D(u);for(var b=0,g=u;b<g.length;b++){var s=g[b];n(s,c)}}function i(u,c){u=D(u),c.ids=[],c.entities={},t(u,c)}function f(u,c){return v([u],c)}function v(u,c){var b=!1;u.forEach(function(g){g in c.entities&&(delete c.entities[g],b=!0)}),b&&(c.ids=c.ids.filter(function(g){return g in c.entities}))}function p(u){Object.assign(u,{ids:[],entities:{}})}function o(u,c,b){var g=b.entities[c.id],s=Object.assign({},g,c.changes),m=_(s,e),w=m!==c.id;return w&&(u[c.id]=m,delete b.entities[c.id]),b.entities[m]=s,w}function l(u,c){return h([u],c)}function h(u,c){var b={},g={};u.forEach(function(w){w.id in c.entities&&(g[w.id]={id:w.id,changes:k(k({},g[w.id]?g[w.id].changes:null),w.changes)})}),u=Object.values(g);var s=u.length>0;if(s){var m=u.filter(function(w){return o(b,w,c)}).length>0;m&&(c.ids=Object.keys(c.entities))}}function y(u,c){return d([u],c)}function d(u,c){var b=we(u,e,c),g=b[0],s=b[1];h(s,c),t(g,c)}return{removeAll:yr(p),addOne:E(r),addMany:E(t),setOne:E(n),setMany:E(a),setAll:E(i),updateOne:E(l),updateMany:E(h),upsertOne:E(y),upsertMany:E(d),removeOne:E(f),removeMany:E(v)}}function br(e,r){var t=Oe(e),n=t.removeOne,a=t.removeMany,i=t.removeAll;function f(s,m){return v([s],m)}function v(s,m){s=D(s);var w=s.filter(function(O){return!(_(O,e)in m.entities)});w.length!==0&&b(w,m)}function p(s,m){return o([s],m)}function o(s,m){s=D(s),s.length!==0&&b(s,m)}function l(s,m){s=D(s),m.entities={},m.ids=[],v(s,m)}function h(s,m){return y([s],m)}function y(s,m){for(var w=!1,O=0,A=s;O<A.length;O++){var M=A[O],S=m.entities[M.id];if(!!S){w=!0,Object.assign(S,M.changes);var j=e(S);M.id!==j&&(delete m.entities[M.id],m.entities[j]=S)}}w&&g(m)}function d(s,m){return u([s],m)}function u(s,m){var w=we(s,e,m),O=w[0],A=w[1];y(A,m),v(O,m)}function c(s,m){if(s.length!==m.length)return!1;for(var w=0;w<s.length&&w<m.length;w++)if(s[w]!==m[w])return!1;return!0}function b(s,m){s.forEach(function(w){m.entities[e(w)]=w}),g(m)}function g(s){var m=Object.values(s.entities);m.sort(r);var w=m.map(e),O=s.ids;c(O,w)||(s.ids=w)}return{removeOne:n,removeMany:a,removeAll:i,addOne:E(f),updateOne:E(h),upsertOne:E(d),setOne:E(p),setMany:E(o),setAll:E(l),addMany:E(v),updateMany:E(y),upsertMany:E(u)}}function mt(e){e===void 0&&(e={});var r=k({sortComparer:!1,selectId:function(v){return v.id}},e),t=r.selectId,n=r.sortComparer,a=vr(),i=hr(),f=n?br(t,n):Oe(t);return k(k(k({selectId:t,sortComparer:n},a),i),f)}var gr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ae=function(e){e===void 0&&(e=21);for(var r="",t=e;t--;)r+=gr[Math.random()*64|0];return r},wr=["name","message","stack","code"],H=function(){function e(r,t){this.payload=r,this.meta=t}return e}(),le=function(){function e(r,t){this.payload=r,this.meta=t}return e}(),Or=function(e){if(typeof e=="object"&&e!==null){for(var r={},t=0,n=wr;t<n.length;t++){var a=n[t];typeof e[a]=="string"&&(r[a]=e[a])}return r}return{message:String(e)}},pt=function(){function e(r,t,n){var a=C(r+"/fulfilled",function(l,h,y,d){return{payload:l,meta:X(k({},d||{}),{arg:y,requestId:h,requestStatus:"fulfilled"})}}),i=C(r+"/pending",function(l,h,y){return{payload:void 0,meta:X(k({},y||{}),{arg:h,requestId:l,requestStatus:"pending"})}}),f=C(r+"/rejected",function(l,h,y,d,u){return{payload:d,error:(n&&n.serializeError||Or)(l||"Rejected"),meta:X(k({},u||{}),{arg:y,requestId:h,rejectedWithValue:!!d,requestStatus:"rejected",aborted:l?.name==="AbortError",condition:l?.name==="ConditionError"})}}),v=!1,p=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function o(l){return function(h,y,d){var u=n?.idGenerator?n.idGenerator(l):Ae(),c=new p,b,g=new Promise(function(O,A){return c.signal.addEventListener("abort",function(){return A({name:"AbortError",message:b||"Aborted"})})}),s=!1;function m(O){s&&(b=O,c.abort())}var w=function(){return L(this,null,function(){var O,A,M,S,j,ne;return V(this,function(I){switch(I.label){case 0:return I.trys.push([0,4,,5]),S=(O=n?.condition)==null?void 0:O.call(n,l,{getState:y,extra:d}),Er(S)?[4,S]:[3,2];case 1:S=I.sent(),I.label=2;case 2:if(S===!1)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return s=!0,h(i(u,l,(A=n?.getPendingMeta)==null?void 0:A.call(n,{requestId:u,arg:l},{getState:y,extra:d}))),[4,Promise.race([g,Promise.resolve(t(l,{dispatch:h,getState:y,extra:d,requestId:u,signal:c.signal,abort:m,rejectWithValue:function(T,K){return new H(T,K)},fulfillWithValue:function(T,K){return new le(T,K)}})).then(function(T){if(T instanceof H)throw T;return T instanceof le?a(T.payload,u,l,T.meta):a(T,u,l)})])];case 3:return M=I.sent(),[3,5];case 4:return j=I.sent(),M=j instanceof H?f(null,u,l,j.payload,j.meta):f(j,u,l),[3,5];case 5:return ne=n&&!n.dispatchConditionRejection&&f.match(M)&&M.meta.condition,ne||h(M),[2,M]}})})}();return Object.assign(w,{abort:m,requestId:u,arg:l,unwrap:function(){return w.then(Ar)}})}}return Object.assign(o,{pending:i,rejected:f,fulfilled:a,typePrefix:r})}return e.withTypes=e,e}();function Ar(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Er(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Mr=function(e){return e&&typeof e.match=="function"},Ee=function(e,r){return Mr(e)?e.match(r):e(r)};function F(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return function(t){return e.some(function(n){return Ee(n,t)})}}function se(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return function(t){return e.every(function(n){return Ee(n,t)})}}function B(e,r){if(!e||!e.meta)return!1;var t=typeof e.meta.requestId=="string",n=r.indexOf(e.meta.requestStatus)>-1;return t&&n}function q(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Sr(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.length===0?function(t){return B(t,["pending"])}:q(e)?function(t){var n=e.map(function(i){return i.pending}),a=F.apply(void 0,n);return a(t)}:Sr()(e[0])}function J(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.length===0?function(t){return B(t,["rejected"])}:q(e)?function(t){var n=e.map(function(i){return i.rejected}),a=F.apply(void 0,n);return a(t)}:J()(e[0])}function kr(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=function(n){return n&&n.meta&&n.meta.rejectedWithValue};return e.length===0?function(n){var a=se(J.apply(void 0,e),t);return a(n)}:q(e)?function(n){var a=se(J.apply(void 0,e),t);return a(n)}:kr()(e[0])}function jr(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.length===0?function(t){return B(t,["fulfilled"])}:q(e)?function(t){var n=e.map(function(i){return i.fulfilled}),a=F.apply(void 0,n);return a(t)}:jr()(e[0])}function Tr(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.length===0?function(t){return B(t,["pending","fulfilled","rejected"])}:q(e)?function(t){for(var n=[],a=0,i=e;a<i.length;a++){var f=i[a];n.push(f.pending,f.rejected,f.fulfilled)}var v=F.apply(void 0,n);return v(t)}:Tr()(e[0])}var ee=function(e,r){if(typeof e!="function")throw new TypeError(r+" is not a function")},Cr=function(){},re=function(e,r){return r===void 0&&(r=Cr),e.catch(r),e},Me=function(e,r){e.addEventListener("abort",r,{once:!0})},R=function(e,r){var t=e.signal;t.aborted||("reason"in t||Object.defineProperty(t,"reason",{enumerable:!0,value:r,configurable:!0,writable:!0}),e.abort(r))},Nr="task",Se="listener",ke="completed",te="cancelled",Dr="task-"+te,Ir="task-"+ke,je=Se+"-"+te,Rr=Se+"-"+ke,U=function(){function e(r){this.code=r,this.name="TaskAbortError",this.message=Nr+" "+te+" (reason: "+r+")"}return e}(),x=function(e){if(e.aborted)throw new U(e.reason)},Te=function(e){return re(new Promise(function(r,t){var n=function(){return t(new U(e.reason))};e.aborted?n():Me(e,n)}))},xr=function(e,r){return L(void 0,null,function(){var t,n;return V(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,4,5]),[4,Promise.resolve()];case 1:return a.sent(),[4,e()];case 2:return t=a.sent(),[2,{status:"ok",value:t}];case 3:return n=a.sent(),[2,{status:n instanceof U?"cancelled":"rejected",error:n}];case 4:return r?.(),[7];case 5:return[2]}})})},W=function(e){return function(r){return re(Promise.race([Te(e),r]).then(function(t){return x(e),t}))}},Ce=function(e){var r=W(e);return function(t){return r(new Promise(function(n){return setTimeout(n,t)}))}},Pr=Object.assign,de={},z="listenerMiddleware",_r=function(e){var r=function(t){return Me(e,function(){return R(t,e.reason)})};return function(t){ee(t,"taskExecutor");var n=new AbortController;r(n);var a=xr(function(){return L(void 0,null,function(){var i;return V(this,function(f){switch(f.label){case 0:return x(e),x(n.signal),[4,t({pause:W(n.signal),delay:Ce(n.signal),signal:n.signal})];case 1:return i=f.sent(),x(n.signal),[2,i]}})})},function(){return R(n,Ir)});return{result:W(e)(a),cancel:function(){R(n,Dr)}}}},Vr=function(e,r){var t=function(n,a){return L(void 0,null,function(){var i,f,v,p;return V(this,function(o){switch(o.label){case 0:x(r),i=function(){},f=new Promise(function(l){i=e({predicate:n,effect:function(h,y){y.unsubscribe(),l([h,y.getState(),y.getOriginalState()])}})}),v=[Te(r),f],a!=null&&v.push(new Promise(function(l){return setTimeout(l,a,null)})),o.label=1;case 1:return o.trys.push([1,,3,4]),[4,Promise.race(v)];case 2:return p=o.sent(),x(r),[2,p];case 3:return i(),[7];case 4:return[2]}})})};return function(n,a){return re(t(n,a))}},Ne=function(e){var r=e.type,t=e.actionCreator,n=e.matcher,a=e.predicate,i=e.effect;if(r)a=C(r).match;else if(t)r=t.type,a=t.match;else if(n)a=n;else if(!a)throw new Error("Creating or removing a listener requires one of the known fields for matching an action");return ee(i,"options.listener"),{predicate:a,type:r,effect:i}},Lr=function(e){var r=Ne(e),t=r.type,n=r.predicate,a=r.effect,i=Ae(),f={id:i,effect:a,type:t,predicate:n,pending:new Set,unsubscribe:function(){throw new Error("Unsubscribe not initialized")}};return f},qr=function(e){return function(){e.forEach(Z),e.clear()}},ve=function(e,r,t){try{e(r,t)}catch(n){setTimeout(function(){throw n},0)}},zr=C(z+"/add"),Wr=C(z+"/removeAll"),Fr=C(z+"/remove"),Br=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];console.error.apply(console,P([z+"/error"],e))},Z=function(e){e.pending.forEach(function(r){R(r,je)})};function yt(e){var r=this;e===void 0&&(e={});var t=new Map,n=e.extra,a=e.onError,i=a===void 0?Br:a;ee(i,"onError");var f=function(d){return d.unsubscribe=function(){return t.delete(d.id)},t.set(d.id,d),function(u){d.unsubscribe(),u?.cancelActive&&Z(d)}},v=function(d){for(var u=0,c=Array.from(t.values());u<c.length;u++){var b=c[u];if(d(b))return b}},p=function(d){var u=v(function(c){return c.effect===d.effect});return u||(u=Lr(d)),f(u)},o=function(d){var u=Ne(d),c=u.type,b=u.effect,g=u.predicate,s=v(function(m){var w=typeof c=="string"?m.type===c:m.predicate===g;return w&&m.effect===b});return s&&(s.unsubscribe(),d.cancelActive&&Z(s)),!!s},l=function(d,u,c,b){return L(r,null,function(){var g,s,m;return V(this,function(w){switch(w.label){case 0:g=new AbortController,s=Vr(p,g.signal),w.label=1;case 1:return w.trys.push([1,3,4,5]),d.pending.add(g),[4,Promise.resolve(d.effect(u,Pr({},c,{getOriginalState:b,condition:function(O,A){return s(O,A).then(Boolean)},take:s,delay:Ce(g.signal),pause:W(g.signal),extra:n,signal:g.signal,fork:_r(g.signal),unsubscribe:d.unsubscribe,subscribe:function(){t.set(d.id,d)},cancelActiveListeners:function(){d.pending.forEach(function(O,A,M){O!==g&&(R(O,je),M.delete(O))})}})))];case 2:return w.sent(),[3,5];case 3:return m=w.sent(),m instanceof U||ve(i,m,{raisedBy:"effect"}),[3,5];case 4:return R(g,Rr),d.pending.delete(g),[7];case 5:return[2]}})})},h=qr(t),y=function(d){return function(u){return function(c){if(zr.match(c))return p(c.payload);if(Wr.match(c)){h();return}if(Fr.match(c))return o(c.payload);var b=d.getState(),g=function(){if(b===de)throw new Error(z+": getOriginalState can only be called synchronously");return b},s;try{if(s=u(c),t.size>0)for(var m=d.getState(),w=Array.from(t.values()),O=0,A=w;O<A.length;O++){var M=A[O],S=!1;try{S=M.predicate(c,m,b)}catch(j){S=!1,ve(i,j,{raisedBy:"predicate"})}!S||l(M,c,d,g)}}finally{b=de}return s}}};return{middleware:y,startListening:p,stopListening:o,clearListeners:h}}var De="RTK_autoBatch",bt=function(){return function(e){var r;return{payload:e,meta:(r={},r[De]=!0,r)}}},he,Ur=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:__global$):function(e){return(he||(he=Promise.resolve())).then(e).catch(function(r){return setTimeout(function(){throw r},0)})},Kr=function(e){return function(r){setTimeout(r,e)}},gt=function(e){return e===void 0&&(e={type:"raf"}),function(r){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=r.apply(void 0,t),i=!0,f=!1,v=!1,p=new Set,o=e.type==="tick"?Ur:e.type==="raf"?requestAnimationFrame:e.type==="callback"?e.queueNotification:Kr(e.timeout),l=function(){v=!1,f&&(f=!1,p.forEach(function(h){return h()}))};return Object.assign({},a,{subscribe:function(h){var y=function(){return i&&h()},d=a.subscribe(y);return p.add(h),function(){d(),p.delete(h)}},dispatch:function(h){var y;try{return i=!((y=h?.meta)!=null&&y[De]),f=!i,f&&(v||(v=!0,o(l))),a.dispatch(h)}finally{i=!0}}})}}};Le();export{Qe as MiddlewareArray,De as SHOULD_AUTOBATCH,U as TaskAbortError,zr as addListener,gt as autoBatchEnhancer,Wr as clearAllListeners,lt as configureStore,C as createAction,pt as createAsyncThunk,N as createDraftSafeSelector,mt as createEntityAdapter,ct as createImmutableStateInvariantMiddleware,yt as createListenerMiddleware,Hr as createNextState,lr as createReducer,et as createSelector,ft as createSerializableStateInvariantMiddleware,vt as createSlice,Qr as current,Y as findNonSerializableValue,Yr as freeze,nr as getDefaultMiddleware,st as getType,se as isAllOf,F as isAnyOf,Tr as isAsyncThunkAction,Zr as isDraft,jr as isFulfilled,$e as isImmutableDefault,Sr as isPending,be as isPlain,$ as isPlainObject,J as isRejected,kr as isRejectedWithValue,Or as miniSerializeError,Ae as nanoid,Jr as original,bt as prepareAutoBatched,Fr as removeListener,Ar as unwrapResult};