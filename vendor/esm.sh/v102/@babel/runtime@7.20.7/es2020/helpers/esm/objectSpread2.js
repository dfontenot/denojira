/* esm.sh - esbuild bundle(@babel/runtime@7.20.7/helpers/esm/objectSpread2) es2020 production */
var a=Object.defineProperty;var b=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})};var p={};b(p,{default:()=>m});function n(t){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}function f(t,e){if(n(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(n(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function i(t){var e=f(t,"string");return n(e)==="symbol"?e:String(e)}function u(t,e,r){return e=i(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(y){return Object.getOwnPropertyDescriptor(t,y).enumerable})),r.push.apply(r,o)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(o){u(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}var{default:c,...d}=p,h=c!==void 0?c:d;export{h as default};
