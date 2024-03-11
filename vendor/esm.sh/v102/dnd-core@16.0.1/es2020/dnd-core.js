/* esm.sh - esbuild bundle(dnd-core@16.0.1) es2020 production */
import{createStore as Xe}from"/v102/redux@4.2.0/es2020/redux.js";import{invariant as _}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";function V(t,e,r){return e.split(".").reduce((n,o)=>n&&n[o]?n[o]:r||null,t)}function B(t,e){return t.filter(r=>r!==e)}function v(t){return typeof t=="object"}function L(t,e){let r=new Map,n=i=>{r.set(i,r.has(i)?r.get(i)+1:1)};t.forEach(n),e.forEach(n);let o=[];return r.forEach((i,s)=>{i===1&&o.push(s)}),o}function q(t,e){return t.filter(r=>e.indexOf(r)>-1)}var S="dnd-core/INIT_COORDS",f="dnd-core/BEGIN_DRAG",y="dnd-core/PUBLISH_DRAG_SOURCE",l="dnd-core/HOVER",p="dnd-core/DROP",d="dnd-core/END_DRAG";function M(t,e){return{type:S,payload:{sourceClientOffset:e||null,clientOffset:t||null}}}var Se={type:S,payload:{clientOffset:null,sourceClientOffset:null}};function k(t){return function(r=[],n={publishSource:!0}){let{publishSource:o=!0,clientOffset:i,getSourceClientOffset:s}=n,c=t.getMonitor(),h=t.getRegistry();t.dispatch(M(i)),ye(r,c,h);let u=Te(r,c);if(u==null){t.dispatch(Se);return}let N=null;if(i){if(!s)throw new Error("getSourceClientOffset must be defined");De(s),N=s(u)}t.dispatch(M(i,N));let H=h.getSource(u).beginDrag(c,u);if(H==null)return;Ee(H),h.pinSource(u);let Oe=h.getSourceType(u);return{type:f,payload:{itemType:Oe,item:H,sourceId:u,clientOffset:i||null,sourceClientOffset:N||null,isSourcePublic:!!o}}}}function ye(t,e,r){_(!e.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(n){_(r.getSource(n),"Expected sourceIds to be registered.")})}function De(t){_(typeof t=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Ee(t){_(v(t),"Item must be an object.")}function Te(t,e){let r=null;for(let n=t.length-1;n>=0;n--)if(e.canDragSource(t[n])){r=t[n];break}return r}import{invariant as j}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";function be(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Re(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){be(t,o,r[o])})}return t}function $(t){return function(r={}){let n=t.getMonitor(),o=t.getRegistry();xe(n),ve(n).forEach((s,c)=>{let h=Ie(s,c,o,n),u={type:p,payload:{dropResult:Re({},r,h)}};t.dispatch(u)})}}function xe(t){j(t.isDragging(),"Cannot call drop while not dragging."),j(!t.didDrop(),"Cannot call drop twice during one drag operation.")}function Ie(t,e,r,n){let o=r.getTarget(t),i=o?o.drop(n,t):void 0;return Ce(i),typeof i>"u"&&(i=e===0?{}:n.getDropResult()),i}function Ce(t){j(typeof t>"u"||v(t),"Drop result must either be an object or undefined.")}function ve(t){let e=t.getTargetIds().filter(t.canDropOnTarget,t);return e.reverse(),e}import{invariant as _e}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";function F(t){return function(){let r=t.getMonitor(),n=t.getRegistry();Ae(r);let o=r.getSourceId();return o!=null&&(n.getSource(o,!0).endDrag(r,o),n.unpinSource()),{type:d}}}function Ae(t){_e(t.isDragging(),"Cannot call endDrag while not dragging.")}import{invariant as R}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";function b(t,e){return e===null?t===null:Array.isArray(t)?t.some(r=>r===e):t===e}function X(t){return function(r,{clientOffset:n}={}){Pe(r);let o=r.slice(0),i=t.getMonitor(),s=t.getRegistry(),c=i.getItemType();return Ge(o,s,c),we(o,i,s),Ue(o,i,s),{type:l,payload:{targetIds:o,clientOffset:n||null}}}}function Pe(t){R(Array.isArray(t),"Expected targetIds to be an array.")}function we(t,e,r){R(e.isDragging(),"Cannot call hover while not dragging."),R(!e.didDrop(),"Cannot call hover after drop.");for(let n=0;n<t.length;n++){let o=t[n];R(t.lastIndexOf(o)===n,"Expected targetIds to be unique in the passed array.");let i=r.getTarget(o);R(i,"Expected targetIds to be registered.")}}function Ge(t,e,r){for(let n=t.length-1;n>=0;n--){let o=t[n],i=e.getTargetType(o);b(i,r)||t.splice(n,1)}}function Ue(t,e,r){t.forEach(function(n){r.getTarget(n).hover(e,n)})}function W(t){return function(){if(t.getMonitor().isDragging())return{type:y}}}function z(t){return{beginDrag:k(t),publishDragSource:W(t),hover:X(t),drop:$(t),endDrag:F(t)}}var A=class{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){let e=this,{dispatch:r}=this.store;function n(i){return(...s)=>{let c=i.apply(e,s);typeof c<"u"&&r(c)}}let o=z(this);return Object.keys(o).reduce((i,s)=>{let c=o[s];return i[s]=n(c),i},{})}dispatch(e){this.store.dispatch(e)}constructor(e,r){this.isSetUp=!1,this.handleRefCountChange=()=>{let n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=r,e.subscribe(this.handleRefCountChange)}};import{invariant as E}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";function Ne(t,e){return{x:t.x+e.x,y:t.y+e.y}}function J(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Q(t){let{clientOffset:e,initialClientOffset:r,initialSourceClientOffset:n}=t;return!e||!r||!n?null:J(Ne(e,n),r)}function Y(t){let{clientOffset:e,initialClientOffset:r}=t;return!e||!r?null:J(e,r)}var D=[],P=[];D.__IS_NONE__=!0;P.__IS_ALL__=!0;function Z(t,e){return t===D?!1:t===P||typeof e>"u"?!0:q(e,t).length>0}var w=class{subscribeToStateChange(e,r={}){let{handlerIds:n}=r;E(typeof e=="function","listener must be a function."),E(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let o=this.store.getState().stateId,i=()=>{let s=this.store.getState(),c=s.stateId;try{c===o||c===o+1&&!Z(s.dirtyHandlerIds,n)||e()}finally{o=c}};return this.store.subscribe(i)}subscribeToOffsetChange(e){E(typeof e=="function","listener must be a function.");let r=this.store.getState().dragOffset,n=()=>{let o=this.store.getState().dragOffset;o!==r&&(r=o,e())};return this.store.subscribe(n)}canDragSource(e){if(!e)return!1;let r=this.registry.getSource(e);return E(r,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:r.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;let r=this.registry.getTarget(e);if(E(r,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;let n=this.registry.getTargetType(e),o=this.getItemType();return b(n,o)&&r.canDrop(this,e)}isDragging(){return Boolean(this.getItemType())}isDraggingSource(e){if(!e)return!1;let r=this.registry.getSource(e,!0);if(E(r,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;let n=this.registry.getSourceType(e),o=this.getItemType();return n!==o?!1:r.isDragging(this,e)}isOverTarget(e,r={shallow:!1}){if(!e)return!1;let{shallow:n}=r;if(!this.isDragging())return!1;let o=this.registry.getTargetType(e),i=this.getItemType();if(i&&!b(o,i))return!1;let s=this.getTargetIds();if(!s.length)return!1;let c=s.indexOf(e);return n?c===s.length-1:c>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return Boolean(this.store.getState().dragOperation.isSourcePublic)}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Q(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Y(this.store.getState().dragOffset)}constructor(e,r){this.store=e,this.registry=r}};import{asap as Me}from"/v102/@react-dnd/asap@5.0.2/es2020/asap.js";import{invariant as g}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";var x="dnd-core/ADD_SOURCE",I="dnd-core/ADD_TARGET",C="dnd-core/REMOVE_SOURCE",m="dnd-core/REMOVE_TARGET";function K(t){return{type:x,payload:{sourceId:t}}}function ee(t){return{type:I,payload:{targetId:t}}}function te(t){return{type:C,payload:{sourceId:t}}}function re(t){return{type:m,payload:{targetId:t}}}import{invariant as O}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";function ne(t){O(typeof t.canDrag=="function","Expected canDrag to be a function."),O(typeof t.beginDrag=="function","Expected beginDrag to be a function."),O(typeof t.endDrag=="function","Expected endDrag to be a function.")}function oe(t){O(typeof t.canDrop=="function","Expected canDrop to be a function."),O(typeof t.hover=="function","Expected hover to be a function."),O(typeof t.drop=="function","Expected beginDrag to be a function.")}function G(t,e){if(e&&Array.isArray(t)){t.forEach(r=>G(r,!1));return}O(typeof t=="string"||typeof t=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var a;(function(t){t.SOURCE="SOURCE",t.TARGET="TARGET"})(a||(a={}));var He=0;function ie(){return He++}function je(t){let e=ie().toString();switch(t){case a.SOURCE:return`S${e}`;case a.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${t}`)}}function se(t){switch(t[0]){case"S":return a.SOURCE;case"T":return a.TARGET;default:throw new Error(`Cannot parse handler ID: ${t}`)}}function ce(t,e){let r=t.entries(),n=!1;do{let{done:o,value:[,i]}=r.next();if(i===e)return!0;n=!!o}while(!n);return!1}var U=class{addSource(e,r){G(e),ne(r);let n=this.addHandler(a.SOURCE,e,r);return this.store.dispatch(K(n)),n}addTarget(e,r){G(e,!0),oe(r);let n=this.addHandler(a.TARGET,e,r);return this.store.dispatch(ee(n)),n}containsHandler(e){return ce(this.dragSources,e)||ce(this.dropTargets,e)}getSource(e,r=!1){return g(this.isSourceId(e),"Expected a valid source ID."),r&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return g(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return g(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return g(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return se(e)===a.SOURCE}isTargetId(e){return se(e)===a.TARGET}removeSource(e){g(this.getSource(e),"Expected an existing source."),this.store.dispatch(te(e)),Me(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){g(this.getTarget(e),"Expected an existing target."),this.store.dispatch(re(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){let r=this.getSource(e);g(r,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=r}unpinSource(){g(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,r,n){let o=je(e);return this.types.set(o,r),e===a.SOURCE?this.dragSources.set(o,n):e===a.TARGET&&this.dropTargets.set(o,n),o}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}};var Ve=(t,e)=>t===e;function ae(t,e){return!t&&!e?!0:!t||!e?!1:t.x===e.x&&t.y===e.y}function ue(t,e,r=Ve){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!r(t[n],e[n]))return!1;return!0}function fe(t=D,e){switch(e.type){case l:break;case x:case I:case m:case C:return D;case f:case y:case d:case p:default:return P}let{targetIds:r=[],prevTargetIds:n=[]}=e.payload,o=L(r,n);if(!(o.length>0||!ue(r,n)))return D;let s=n[n.length-1],c=r[r.length-1];return s!==c&&(s&&o.push(s),c&&o.push(c)),o}function Be(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Le(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){Be(t,o,r[o])})}return t}var le={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function pe(t=le,e){let{payload:r}=e;switch(e.type){case S:case f:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case l:return ae(t.clientOffset,r.clientOffset)?t:Le({},t,{clientOffset:r.clientOffset});case d:case p:return le;default:return t}}function qe(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){qe(t,o,r[o])})}return t}var ke={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function de(t=ke,e){let{payload:r}=e;switch(e.type){case f:return T({},t,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case y:return T({},t,{isSourcePublic:!0});case l:return T({},t,{targetIds:r.targetIds});case m:return t.targetIds.indexOf(r.targetId)===-1?t:T({},t,{targetIds:B(t.targetIds,r.targetId)});case p:return T({},t,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case d:return T({},t,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return t}}function ge(t=0,e){switch(e.type){case x:case I:return t+1;case C:case m:return t-1;default:return t}}function he(t=0){return t+1}function $e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Fe(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){$e(t,o,r[o])})}return t}function me(t={},e){return{dirtyHandlerIds:fe(t.dirtyHandlerIds,{type:e.type,payload:Fe({},e.payload,{prevTargetIds:V(t,"dragOperation.targetIds",[])})}),dragOffset:pe(t.dragOffset,e),refCount:ge(t.refCount,e),dragOperation:de(t.dragOperation,e),stateId:he(t.stateId)}}function Tr(t,e=void 0,r={},n=!1){let o=We(n),i=new w(o,new U(o)),s=new A(o,i),c=t(s,e,r);return s.receiveBackend(c),s}function We(t){let e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return Xe(me,t&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}export{a as HandlerRole,Tr as createDragDropManager};