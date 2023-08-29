/* esm.sh - esbuild bundle(deep-eql@4.1.3) deno production */
import * as _1$ from "/v122/type-detect@4.0.8/deno/type-detect.mjs";const __1$ = _1$.default??_1$;var W=Object.create;var E=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var Z=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var L=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),N=(e,r)=>{for(var t in r)E(e,t,{get:r[t],enumerable:!0})},b=(e,r,t,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of C(r))!R.call(e,o)&&o!==t&&E(e,o,{get:()=>r[o],enumerable:!(u=B(r,o))||u.enumerable});return e},m=(e,r,t)=>(b(e,r,"default"),t&&b(t,r,"default")),w=(e,r,t)=>(t=e!=null?W(G(e)):{},b(r||!e||!e.__esModule?E(t,"default",{value:e,enumerable:!0}):t,e));var T=L((d,A)=>{"use strict";var x=__1$;function j(){this._key="chai/deep-eql__"+Math.random()+Date.now()}j.prototype={get:function(r){return r[this._key]},set:function(r,t){Object.isExtensible(r)&&Object.defineProperty(r,this._key,{value:t,configurable:!0})}};var z=typeof WeakMap=="function"?WeakMap:j;function M(e,r,t){if(!t||n(e)||n(r))return null;var u=t.get(e);if(u){var o=u.get(r);if(typeof o=="boolean")return o}return null}function y(e,r,t,u){if(!(!t||n(e)||n(r))){var o=t.get(e);o?o.set(r,u):(o=new z,o.set(r,u),t.set(e,o))}}A.exports=v;A.exports.MemoizeMap=z;function v(e,r,t){if(t&&t.comparator)return D(e,r,t);var u=k(e,r);return u!==null?u:D(e,r,t)}function k(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r?!0:n(e)||n(r)?!1:null}function D(e,r,t){t=t||{},t.memoize=t.memoize===!1?!1:t.memoize||new z;var u=t&&t.comparator,o=M(e,r,t.memoize);if(o!==null)return o;var c=M(r,e,t.memoize);if(c!==null)return c;if(u){var l=u(e,r);if(l===!1||l===!0)return y(e,r,t.memoize,l),l;var s=k(e,r);if(s!==null)return s}var f=x(e);if(f!==x(r))return y(e,r,t.memoize,!1),!1;y(e,r,t.memoize,!0);var q=V(e,r,f,t);return y(e,r,t.memoize,q),q}function V(e,r,t,u){switch(t){case"String":case"Number":case"Boolean":case"Date":return v(e.valueOf(),r.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===r;case"Error":return h(e,r,["name","message","code"],u);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return a(e,r,u);case"RegExp":return Y(e,r);case"Generator":return J(e,r,u);case"DataView":return a(new Uint8Array(e.buffer),new Uint8Array(r.buffer),u);case"ArrayBuffer":return a(new Uint8Array(e),new Uint8Array(r),u);case"Set":return _(e,r,u);case"Map":return _(e,r,u);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(r);case"Temporal.Duration":return e.total("nanoseconds")===r.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===r.toString();default:return X(e,r,u)}}function Y(e,r){return e.toString()===r.toString()}function _(e,r,t){if(e.size!==r.size)return!1;if(e.size===0)return!0;var u=[],o=[];return e.forEach(function(l,s){u.push([l,s])}),r.forEach(function(l,s){o.push([l,s])}),a(u.sort(),o.sort(),t)}function a(e,r,t){var u=e.length;if(u!==r.length)return!1;if(u===0)return!0;for(var o=-1;++o<u;)if(v(e[o],r[o],t)===!1)return!1;return!0}function J(e,r,t){return a(S(e),S(r),t)}function Q(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function P(e){if(Q(e))try{return S(e[Symbol.iterator]())}catch{return[]}return[]}function S(e){for(var r=e.next(),t=[r.value];r.done===!1;)r=e.next(),t.push(r.value);return t}function I(e){var r=[];for(var t in e)r.push(t);return r}function U(e){for(var r=[],t=Object.getOwnPropertySymbols(e),u=0;u<t.length;u+=1){var o=t[u];Object.getOwnPropertyDescriptor(e,o).enumerable&&r.push(o)}return r}function h(e,r,t,u){var o=t.length;if(o===0)return!0;for(var c=0;c<o;c+=1)if(v(e[t[c]],r[t[c]],u)===!1)return!1;return!0}function X(e,r,t){var u=I(e),o=I(r),c=U(e),l=U(r);if(u=u.concat(c),o=o.concat(l),u.length&&u.length===o.length)return a(g(u).sort(),g(o).sort())===!1?!1:h(e,r,u,t);var s=P(e),f=P(r);return s.length&&s.length===f.length?(s.sort(),f.sort(),a(s,f,t)):u.length===0&&s.length===0&&o.length===0&&f.length===0}function n(e){return e===null||typeof e!="object"}function g(e){return e.map(function(t){return typeof t=="symbol"?t.toString():t})}});var i={};N(i,{MemoizeMap:()=>$,default:()=>H});var K=w(T());m(i,w(T()));var{MemoizeMap:$}=K,{default:F,...p}=K,H=F!==void 0?F:p;export{$ as MemoizeMap,H as default};
/*! Bundled license information:

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
//# sourceMappingURL=deep-eql.mjs.map