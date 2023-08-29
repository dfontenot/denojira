/* esm.sh - esbuild bundle(immer@9.0.16) es2020 production */
function O(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];if(!1)var c,l;throw Error("[Immer] minified error nr: "+e+(o.length?" "+o.map(function(f){return"'"+f+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function S(e){return!!e&&!!e[d]}function _(e){var t;return!!e&&(function(o){if(!o||typeof o!="object")return!1;var r=Object.getPrototypeOf(o);if(r===null)return!0;var c=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return c===Object||typeof c=="function"&&Function.toString.call(c)===we}(e)||Array.isArray(e)||!!e[M]||!!(!((t=e.constructor)===null||t===void 0)&&t[M])||$(e)||G(e))}function Ae(e){return S(e)||O(23,e),e[d].t}function N(e,t,o){o===void 0&&(o=!1),I(e)===0?(o?Object.keys:k)(e).forEach(function(r){o&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,c){return t(c,r,e)})}function I(e){var t=e[d];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:$(e)?2:G(e)?3:0}function x(e,t){return I(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function K(e,t){return I(e)===2?e.get(t):e[t]}function le(e,t,o){var r=I(e);r===2?e.set(t,o):r===3?(e.delete(t),e.add(o)):e[t]=o}function pe(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function $(e){return Pe&&e instanceof Map}function G(e){return Oe&&e instanceof Set}function P(e){return e.o||e.t}function Q(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=he(e);delete t[d];for(var o=k(t),r=0;r<o.length;r++){var c=o[r],l=t[c];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(t[c]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[c]})}return Object.create(Object.getPrototypeOf(e),t)}function Z(e,t){return t===void 0&&(t=!1),ee(e)||S(e)||!_(e)||(I(e)>1&&(e.set=e.add=e.clear=e.delete=ve),Object.freeze(e),t&&N(e,function(o,r){return Z(r,!0)},!0)),e}function ve(){O(2)}function ee(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function E(e){var t=L[e];return t||O(18,e),t}function te(e,t){L[e]||(L[e]=t)}function F(){return R}function X(e,t){t&&(E("Patches"),e.u=[],e.s=[],e.v=t)}function U(e){H(e),e.p.forEach(de),e.p=null}function H(e){e===R&&(R=e.l)}function ae(e){return R={p:[],l:R,h:e,m:!0,_:0}}function de(e){var t=e[d];t.i===0||t.i===1?t.j():t.O=!0}function Y(e,t){t._=t.p.length;var o=t.p[0],r=e!==void 0&&e!==o;return t.h.g||E("ES5").S(t,e,r),r?(o[d].P&&(U(t),O(4)),_(e)&&(e=W(t,e),t.l||J(t,e)),t.u&&E("Patches").M(o[d].t,e,t.u,t.s)):e=W(t,o,[]),U(t),t.u&&t.v(t.u,t.s),e!==ne?e:void 0}function W(e,t,o){if(ee(t))return t;var r=t[d];if(!r)return N(t,function(l,f){return ie(e,r,t,l,f,o)},!0),t;if(r.A!==e)return t;if(!r.P)return J(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var c=r.i===4||r.i===5?r.o=Q(r.k):r.o;N(r.i===3?new Set(c):c,function(l,f){return ie(e,r,c,l,f,o)}),J(e,c,!1),o&&e.u&&E("Patches").R(r,o,e.u,e.s)}return r.o}function ie(e,t,o,r,c,l){if(S(c)){var f=W(e,c,l&&t&&t.i!==3&&!x(t.D,r)?l.concat(r):void 0);if(le(o,r,f),!S(f))return;e.m=!1}if(_(c)&&!ee(c)){if(!e.h.F&&e._<1)return;W(e,c),t&&t.A.l||J(e,c)}}function J(e,t,o){o===void 0&&(o=!1),e.h.F&&e.m&&Z(t,o)}function q(e,t){var o=e[d];return(o?P(o):e)[t]}function ue(e,t){if(t in e)for(var o=Object.getPrototypeOf(e);o;){var r=Object.getOwnPropertyDescriptor(o,t);if(r)return r;o=Object.getPrototypeOf(o)}}function w(e){e.P||(e.P=!0,e.l&&w(e.l))}function B(e){e.o||(e.o=Q(e.t))}function C(e,t,o){var r=$(t)?E("MapSet").N(t,o):G(t)?E("MapSet").T(t,o):e.g?function(c,l){var f=Array.isArray(c),u={i:f?1:0,A:l?l.A:F(),P:!1,I:!1,D:{},l,t:c,k:null,o:null,j:null,C:!1},i=u,n=T;f&&(i=[u],n=z);var a=Proxy.revocable(i,n),s=a.revoke,p=a.proxy;return u.k=p,u.j=s,p}(t,o):E("ES5").J(t,o);return(o?o.A:F()).p.push(r),r}function ye(e){return S(e)||O(22,e),function t(o){if(!_(o))return o;var r,c=o[d],l=I(o);if(c){if(!c.P&&(c.i<4||!E("ES5").K(c)))return c.t;c.I=!0,r=ce(o,l),c.I=!1}else r=ce(o,l);return N(r,function(f,u){c&&K(c.t,f)===u||le(r,f,t(u))}),l===3?new Set(r):r}(e)}function ce(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Q(e)}function ge(){function e(f,u){var i=l[f];return i?i.enumerable=u:l[f]=i={configurable:!0,enumerable:u,get:function(){var n=this[d];return T.get(n,f)},set:function(n){var a=this[d];T.set(a,f,n)}},i}function t(f){for(var u=f.length-1;u>=0;u--){var i=f[u][d];if(!i.P)switch(i.i){case 5:r(i)&&w(i);break;case 4:o(i)&&w(i)}}}function o(f){for(var u=f.t,i=f.k,n=k(i),a=n.length-1;a>=0;a--){var s=n[a];if(s!==d){var p=u[s];if(p===void 0&&!x(u,s))return!0;var h=i[s],v=h&&h[d];if(v?v.t!==p:!pe(h,p))return!0}}var y=!!u[d];return n.length!==k(u).length+(y?0:1)}function r(f){var u=f.k;if(u.length!==f.t.length)return!0;var i=Object.getOwnPropertyDescriptor(u,u.length-1);if(i&&!i.get)return!0;for(var n=0;n<u.length;n++)if(!u.hasOwnProperty(n))return!0;return!1}function c(f){f.O&&O(3,JSON.stringify(P(f)))}var l={};te("ES5",{J:function(f,u){var i=Array.isArray(f),n=function(s,p){if(s){for(var h=Array(p.length),v=0;v<p.length;v++)Object.defineProperty(h,""+v,e(v,!0));return h}var y=he(p);delete y[d];for(var b=k(y),g=0;g<b.length;g++){var m=b[g];y[m]=e(m,s||!!y[m].enumerable)}return Object.create(Object.getPrototypeOf(p),y)}(i,f),a={i:i?5:4,A:u?u.A:F(),P:!1,I:!1,D:{},l:u,t:f,k:n,o:null,O:!1,C:!1};return Object.defineProperty(n,d,{value:a,writable:!0}),n},S:function(f,u,i){i?S(u)&&u[d].A===f&&t(f.p):(f.u&&function n(a){if(a&&typeof a=="object"){var s=a[d];if(s){var p=s.t,h=s.k,v=s.D,y=s.i;if(y===4)N(h,function(A){A!==d&&(p[A]!==void 0||x(p,A)?v[A]||n(h[A]):(v[A]=!0,w(s)))}),N(p,function(A){h[A]!==void 0||x(h,A)||(v[A]=!1,w(s))});else if(y===5){if(r(s)&&(w(s),v.length=!0),h.length<p.length)for(var b=h.length;b<p.length;b++)v[b]=!1;else for(var g=p.length;g<h.length;g++)v[g]=!0;for(var m=Math.min(h.length,p.length),j=0;j<m;j++)h.hasOwnProperty(j)||(v[j]=!0),v[j]===void 0&&n(h[j])}}}}(f.p[0]),t(f.p))},K:function(f){return f.i===4?o(f):r(f)}})}function be(){function e(r){if(!_(r))return r;if(Array.isArray(r))return r.map(e);if($(r))return new Map(Array.from(r.entries()).map(function(f){return[f[0],e(f[1])]}));if(G(r))return new Set(Array.from(r).map(e));var c=Object.create(Object.getPrototypeOf(r));for(var l in r)c[l]=e(r[l]);return x(r,M)&&(c[M]=r[M]),c}function t(r){return S(r)?e(r):r}var o="add";te("Patches",{$:function(r,c){return c.forEach(function(l){for(var f=l.path,u=l.op,i=r,n=0;n<f.length-1;n++){var a=I(i),s=""+f[n];a!==0&&a!==1||s!=="__proto__"&&s!=="constructor"||O(24),typeof i=="function"&&s==="prototype"&&O(24),typeof(i=K(i,s))!="object"&&O(15,f.join("/"))}var p=I(i),h=e(l.value),v=f[f.length-1];switch(u){case"replace":switch(p){case 2:return i.set(v,h);case 3:O(16);default:return i[v]=h}case o:switch(p){case 1:return v==="-"?i.push(h):i.splice(v,0,h);case 2:return i.set(v,h);case 3:return i.add(h);default:return i[v]=h}case"remove":switch(p){case 1:return i.splice(v,1);case 2:return i.delete(v);case 3:return i.delete(l.value);default:return delete i[v]}default:O(17,u)}}),r},R:function(r,c,l,f){switch(r.i){case 0:case 4:case 2:return function(u,i,n,a){var s=u.t,p=u.o;N(u.D,function(h,v){var y=K(s,h),b=K(p,h),g=v?x(s,h)?"replace":o:"remove";if(y!==b||g!=="replace"){var m=i.concat(h);n.push(g==="remove"?{op:g,path:m}:{op:g,path:m,value:b}),a.push(g===o?{op:"remove",path:m}:g==="remove"?{op:o,path:m,value:t(y)}:{op:"replace",path:m,value:t(y)})}})}(r,c,l,f);case 5:case 1:return function(u,i,n,a){var s=u.t,p=u.D,h=u.o;if(h.length<s.length){var v=[h,s];s=v[0],h=v[1];var y=[a,n];n=y[0],a=y[1]}for(var b=0;b<s.length;b++)if(p[b]&&h[b]!==s[b]){var g=i.concat([b]);n.push({op:"replace",path:g,value:t(h[b])}),a.push({op:"replace",path:g,value:t(s[b])})}for(var m=s.length;m<h.length;m++){var j=i.concat([m]);n.push({op:o,path:j,value:t(h[m])})}s.length<h.length&&a.push({op:"replace",path:i.concat(["length"]),value:s.length})}(r,c,l,f);case 3:return function(u,i,n,a){var s=u.t,p=u.o,h=0;s.forEach(function(v){if(!p.has(v)){var y=i.concat([h]);n.push({op:"remove",path:y,value:v}),a.unshift({op:o,path:y,value:v})}h++}),h=0,p.forEach(function(v){if(!s.has(v)){var y=i.concat([h]);n.push({op:o,path:y,value:v}),a.unshift({op:"remove",path:y,value:v})}h++})}(r,c,l,f)}},M:function(r,c,l,f){l.push({op:"replace",path:[],value:c===ne?void 0:c}),f.push({op:"replace",path:[],value:r})}})}function me(){function e(u,i){function n(){this.constructor=u}c(u,i),u.prototype=(n.prototype=i.prototype,new n)}function t(u){u.o||(u.D=new Map,u.o=new Map(u.t))}function o(u){u.o||(u.o=new Set,u.t.forEach(function(i){if(_(i)){var n=C(u.A.h,i,u);u.p.set(i,n),u.o.add(n)}else u.o.add(i)}))}function r(u){u.O&&O(3,JSON.stringify(P(u)))}var c=function(u,i){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)a.hasOwnProperty(s)&&(n[s]=a[s])})(u,i)},l=function(){function u(n,a){return this[d]={i:2,l:a,A:a?a.A:F(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}e(u,Map);var i=u.prototype;return Object.defineProperty(i,"size",{get:function(){return P(this[d]).size}}),i.has=function(n){return P(this[d]).has(n)},i.set=function(n,a){var s=this[d];return r(s),P(s).has(n)&&P(s).get(n)===a||(t(s),w(s),s.D.set(n,!0),s.o.set(n,a),s.D.set(n,!0)),this},i.delete=function(n){if(!this.has(n))return!1;var a=this[d];return r(a),t(a),w(a),a.t.has(n)?a.D.set(n,!1):a.D.delete(n),a.o.delete(n),!0},i.clear=function(){var n=this[d];r(n),P(n).size&&(t(n),w(n),n.D=new Map,N(n.t,function(a){n.D.set(a,!1)}),n.o.clear())},i.forEach=function(n,a){var s=this;P(this[d]).forEach(function(p,h){n.call(a,s.get(h),h,s)})},i.get=function(n){var a=this[d];r(a);var s=P(a).get(n);if(a.I||!_(s)||s!==a.t.get(n))return s;var p=C(a.A.h,s,a);return t(a),a.o.set(n,p),p},i.keys=function(){return P(this[d]).keys()},i.values=function(){var n,a=this,s=this.keys();return(n={})[V]=function(){return a.values()},n.next=function(){var p=s.next();return p.done?p:{done:!1,value:a.get(p.value)}},n},i.entries=function(){var n,a=this,s=this.keys();return(n={})[V]=function(){return a.entries()},n.next=function(){var p=s.next();if(p.done)return p;var h=a.get(p.value);return{done:!1,value:[p.value,h]}},n},i[V]=function(){return this.entries()},u}(),f=function(){function u(n,a){return this[d]={i:3,l:a,A:a?a.A:F(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}e(u,Set);var i=u.prototype;return Object.defineProperty(i,"size",{get:function(){return P(this[d]).size}}),i.has=function(n){var a=this[d];return r(a),a.o?!!a.o.has(n)||!(!a.p.has(n)||!a.o.has(a.p.get(n))):a.t.has(n)},i.add=function(n){var a=this[d];return r(a),this.has(n)||(o(a),w(a),a.o.add(n)),this},i.delete=function(n){if(!this.has(n))return!1;var a=this[d];return r(a),o(a),w(a),a.o.delete(n)||!!a.p.has(n)&&a.o.delete(a.p.get(n))},i.clear=function(){var n=this[d];r(n),P(n).size&&(o(n),w(n),n.o.clear())},i.values=function(){var n=this[d];return r(n),o(n),n.o.values()},i.entries=function(){var n=this[d];return r(n),o(n),n.o.entries()},i.keys=function(){return this.values()},i[V]=function(){return this.values()},i.forEach=function(n,a){for(var s=this.values(),p=s.next();!p.done;)n.call(a,p.value,p.value,this),p=s.next()},u}();te("MapSet",{N:function(u,i){return new l(u,i)},T:function(u,i){return new f(u,i)}})}function Ee(){ge(),me(),be()}function _e(e){return e}function Se(e){return e}var fe,R,re=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Pe=typeof Map<"u",Oe=typeof Set<"u",se=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",ne=re?Symbol.for("immer-nothing"):((fe={})["immer-nothing"]=!0,fe),M=re?Symbol.for("immer-draftable"):"__$immer_draftable",d=re?Symbol.for("immer-state"):"__$immer_state",V=typeof Symbol<"u"&&Symbol.iterator||"@@iterator";var we=""+Object.prototype.constructor,k=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,he=Object.getOwnPropertyDescriptors||function(e){var t={};return k(e).forEach(function(o){t[o]=Object.getOwnPropertyDescriptor(e,o)}),t},L={},T={get:function(e,t){if(t===d)return e;var o=P(e);if(!x(o,t))return function(c,l,f){var u,i=ue(l,f);return i?"value"in i?i.value:(u=i.get)===null||u===void 0?void 0:u.call(c.k):void 0}(e,o,t);var r=o[t];return e.I||!_(r)?r:r===q(e.t,t)?(B(e),e.o[t]=C(e.A.h,r,e)):r},has:function(e,t){return t in P(e)},ownKeys:function(e){return Reflect.ownKeys(P(e))},set:function(e,t,o){var r=ue(P(e),t);if(r?.set)return r.set.call(e.k,o),!0;if(!e.P){var c=q(P(e),t),l=c?.[d];if(l&&l.t===o)return e.o[t]=o,e.D[t]=!1,!0;if(pe(o,c)&&(o!==void 0||x(e.t,t)))return!0;B(e),w(e)}return e.o[t]===o&&typeof o!="number"&&(o!==void 0||t in e.o)||(e.o[t]=o,e.D[t]=!0,!0)},deleteProperty:function(e,t){return q(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,B(e),w(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var o=P(e),r=Reflect.getOwnPropertyDescriptor(o,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:o[t]}},defineProperty:function(){O(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){O(12)}},z={};N(T,function(e,t){z[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),z.deleteProperty=function(e,t){return z.set.call(this,e,t,void 0)},z.set=function(e,t,o){return T.set.call(this,e[0],t,o,e[0])};var je=function(){function e(o){var r=this;this.g=se,this.F=!0,this.produce=function(c,l,f){if(typeof c=="function"&&typeof l!="function"){var u=l;l=c;var i=r;return function(y){var b=this;y===void 0&&(y=u);for(var g=arguments.length,m=Array(g>1?g-1:0),j=1;j<g;j++)m[j-1]=arguments[j];return i.produce(y,function(A){var oe;return(oe=l).call.apply(oe,[b,A].concat(m))})}}var n;if(typeof l!="function"&&O(6),f!==void 0&&typeof f!="function"&&O(7),_(c)){var a=ae(r),s=C(r,c,void 0),p=!0;try{n=l(s),p=!1}finally{p?U(a):H(a)}return typeof Promise<"u"&&n instanceof Promise?n.then(function(y){return X(a,f),Y(y,a)},function(y){throw U(a),y}):(X(a,f),Y(n,a))}if(!c||typeof c!="object"){if((n=l(c))===void 0&&(n=c),n===ne&&(n=void 0),r.F&&Z(n,!0),f){var h=[],v=[];E("Patches").M(c,n,h,v),f(h,v)}return n}O(21,c)},this.produceWithPatches=function(c,l){if(typeof c=="function")return function(n){for(var a=arguments.length,s=Array(a>1?a-1:0),p=1;p<a;p++)s[p-1]=arguments[p];return r.produceWithPatches(n,function(h){return c.apply(void 0,[h].concat(s))})};var f,u,i=r.produce(c,l,function(n,a){f=n,u=a});return typeof Promise<"u"&&i instanceof Promise?i.then(function(n){return[n,f,u]}):[i,f,u]},typeof o?.useProxies=="boolean"&&this.setUseProxies(o.useProxies),typeof o?.autoFreeze=="boolean"&&this.setAutoFreeze(o.autoFreeze)}var t=e.prototype;return t.createDraft=function(o){_(o)||O(8),S(o)&&(o=ye(o));var r=ae(this),c=C(this,o,void 0);return c[d].C=!0,H(r),c},t.finishDraft=function(o,r){var c=o&&o[d],l=c.A;return X(l,r),Y(void 0,l)},t.setAutoFreeze=function(o){this.F=o},t.setUseProxies=function(o){o&&!se&&O(20),this.g=o},t.applyPatches=function(o,r){var c;for(c=r.length-1;c>=0;c--){var l=r[c];if(l.path.length===0&&l.op==="replace"){o=l.value;break}}c>-1&&(r=r.slice(c+1));var f=E("Patches").$;return S(o)?f(o,r):this.produce(o,function(u){return f(u,r)})},e}(),D=new je,De=D.produce,Ne=D.produceWithPatches.bind(D),xe=D.setAutoFreeze.bind(D),Ie=D.setUseProxies.bind(D),ke=D.applyPatches.bind(D),ze=D.createDraft.bind(D),Me=D.finishDraft.bind(D),Fe=De;export{je as Immer,ke as applyPatches,_e as castDraft,Se as castImmutable,ze as createDraft,ye as current,Fe as default,Ee as enableAllPlugins,ge as enableES5,me as enableMapSet,be as enablePatches,Me as finishDraft,Z as freeze,M as immerable,S as isDraft,_ as isDraftable,ne as nothing,Ae as original,De as produce,Ne as produceWithPatches,xe as setAutoFreeze,Ie as setUseProxies};
