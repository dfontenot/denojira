/* esm.sh - esbuild bundle(react@18.2.0/jsx-runtime) es2020 production */
var z=Object.create;var j=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var Y=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var J=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of W(t))!G.call(e,o)&&o!==r&&j(e,o,{get:()=>t[o],enumerable:!(n=H(t,o))||n.enumerable});return e};var K=(e,t,r)=>(r=e!=null?z(Y(e)):{},J(t||!e||!e.__esModule?j(r,"default",{value:e,enumerable:!0}):r,e));var D=d(u=>{"use strict";var y=Symbol.for("react.element"),Q=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),re=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ue=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),$=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,P={};function p(e,t,r){this.props=e,this.context=t,this.refs=P,this.updater=r||x}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function g(){}g.prototype=p.prototype;function E(e,t,r){this.props=e,this.context=t,this.refs=P,this.updater=r||x}var k=E.prototype=new g;k.constructor=E;C(k,p.prototype);k.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,R={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)I.call(t,n)&&!q.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(f===1)o.children=r;else if(1<f){for(var c=Array(f),a=0;a<f;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(n in f=e.defaultProps,f)o[n]===void 0&&(o[n]=f[n]);return{$$typeof:y,type:e,key:i,ref:s,props:o,_owner:R.current}}function ce(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function fe(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var O=/\/+/g;function S(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fe(""+e.key):t.toString(36)}function m(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case y:case Q:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+S(s,0):n,b(o)?(r="",e!=null&&(r=e.replace(O,"$&/")+"/"),m(o,t,r,"",function(a){return a})):o!=null&&(w(o)&&(o=ce(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",b(e))for(var f=0;f<e.length;f++){i=e[f];var c=n+S(i,f);s+=m(i,t,r,c,o)}else if(c=se(e),typeof c=="function")for(e=c.call(e),f=0;!(i=e.next()).done;)i=i.value,c=n+S(i,f++),s+=m(i,t,r,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _(e,t,r){if(e==null)return e;var n=[],o=0;return m(e,n,"","",function(i){return t.call(r,i,o++)}),n}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},v={transition:null},ae={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:v,ReactCurrentOwner:R};u.Children={map:_,forEach:function(e,t,r){_(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=X;u.Profiler=ee;u.PureComponent=E;u.StrictMode=Z;u.Suspense=oe;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae;u.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=C({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=R.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(c in t)I.call(t,c)&&!q.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&f!==void 0?f[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){f=Array(c);for(var a=0;a<c;a++)f[a]=arguments[a+2];n.children=f}return{$$typeof:y,type:e.type,key:o,ref:i,props:n,_owner:s}};u.createContext=function(e){return e={$$typeof:re,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:te,_context:e},e.Consumer=e};u.createElement=N;u.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:ne,render:e}};u.isValidElement=w;u.lazy=function(e){return{$$typeof:ie,_payload:{_status:-1,_result:e},_init:le}};u.memo=function(e,t){return{$$typeof:ue,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return l.current.useCallback(e,t)};u.useContext=function(e){return l.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return l.current.useDeferredValue(e)};u.useEffect=function(e,t){return l.current.useEffect(e,t)};u.useId=function(){return l.current.useId()};u.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)};u.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return l.current.useMemo(e,t)};u.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)};u.useRef=function(e){return l.current.useRef(e)};u.useState=function(e){return l.current.useState(e)};u.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)};u.useTransition=function(){return l.current.useTransition()};u.version="18.2.0"});var V=d((ke,T)=>{"use strict";T.exports=D()});var L=d(h=>{"use strict";var pe=V(),ye=Symbol.for("react.element"),de=Symbol.for("react.fragment"),_e=Object.prototype.hasOwnProperty,me=pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ve={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)_e.call(t,n)&&!ve.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:ye,type:e,key:i,ref:s,props:o,_owner:me.current}}h.Fragment=de;h.jsx=F;h.jsxs=F});var A=d((we,U)=>{"use strict";U.exports=L()});var B=K(A()),{Fragment:je,jsx:$e,jsxs:be}=B,{default:M,...he}=B,Oe=M!==void 0?M:he;export{je as Fragment,Oe as default,$e as jsx,be as jsxs};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
