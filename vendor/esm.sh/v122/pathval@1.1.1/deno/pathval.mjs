/* esm.sh - esbuild bundle(pathval@1.1.1) deno production */
var I=Object.create;var p=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var G=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),M=(e,t)=>{for(var n in t)p(e,n,{get:t[n],enumerable:!0})},s=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of O(t))!F.call(e,a)&&a!==n&&p(e,a,{get:()=>t[a],enumerable:!(r=$(t,a))||r.enumerable});return e},o=(e,t,n)=>(s(e,t,"default"),n&&s(n,t,"default")),v=(e,t,n)=>(n=e!=null?I(A(e)):{},s(t||!e||!e.__esModule?p(n,"default",{value:e,enumerable:!0}):n,e));var d=G((K,_)=>{"use strict";function g(e,t){return typeof e>"u"||e===null?!1:t in Object(e)}function P(e){var t=e.replace(/([^\\])\[/g,"$1.["),n=t.match(/(\\\.|[^.]+?)+/g);return n.map(function(a){if(a==="constructor"||a==="__proto__"||a==="prototype")return{};var f=/^\[(\d+)\]$/,u=f.exec(a),l=null;return u?l={i:parseFloat(u[1])}:l={p:a.replace(/\\([.[\]])/g,"$1")},l})}function h(e,t,n){var r=e,a=null;n=typeof n>"u"?t.length:n;for(var f=0;f<n;f++){var u=t[f];r&&(typeof u.p>"u"?r=r[u.i]:r=r[u.p],f===n-1&&(a=r))}return a}function S(e,t,n){for(var r=e,a=n.length,f=null,u=0;u<a;u++){var l=null,c=null;if(f=n[u],u===a-1)l=typeof f.p>"u"?f.i:f.p,r[l]=t;else if(typeof f.p<"u"&&r[f.p])r=r[f.p];else if(typeof f.i<"u"&&r[f.i])r=r[f.i];else{var x=n[u+1];l=typeof f.p>"u"?f.i:f.p,c=typeof x.p>"u"?[]:{},r[l]=c,r=r[l]}}}function y(e,t){var n=P(t),r=n[n.length-1],a={parent:n.length>1?h(e,n,n.length-1):e,name:r.p||r.i,value:h(e,n)};return a.exists=g(a.parent,a.name),a}function k(e,t){var n=y(e,t);return n.value}function q(e,t,n){var r=P(t);return S(e,n,r),e}_.exports={hasProperty:g,getPathInfo:y,getPathValue:k,setPathValue:q}});var i={};M(i,{default:()=>H,getPathInfo:()=>z,getPathValue:()=>B,hasProperty:()=>w,setPathValue:()=>C});var V=v(d());o(i,v(d()));var{hasProperty:w,getPathInfo:z,getPathValue:B,setPathValue:C}=V,{default:m,...E}=V,H=m!==void 0?m:E;export{H as default,z as getPathInfo,B as getPathValue,w as hasProperty,C as setPathValue};
//# sourceMappingURL=pathval.mjs.map