/* esm.sh - esbuild bundle(react-dnd@16.0.1) es2020 production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);import{createContext as K}from"/stable/react@18.2.0/es2020/react.js";var d=K({dragDropManager:void 0});import{jsx as ee}from"/stable/react@18.2.0/es2020/jsx-runtime.js";import{createDragDropManager as re}from"/v102/dnd-core@16.0.1/es2020/dnd-core.js";import{memo as te,useEffect as ne}from"/stable/react@18.2.0/es2020/react.js";function Q(t,e){if(t==null)return{};var r=Z(t,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Z(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var P=0,l=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),qe=te(function(e){var{children:r}=e,n=Q(e,["children"]);let[o,i]=oe(n);return ne(()=>{if(i){let c=y();return++P,()=>{--P===0&&(c[l]=null)}}},[]),ee(d.Provider,{value:o,children:r})});function oe(t){if("manager"in t)return[{dragDropManager:t.manager},!1];let e=ie(t.backend,t.context,t.options,t.debugMode),r=!t.context;return[e,r]}function ie(t,e=y(),r,n){let o=e;return o[l]||(o[l]={dragDropManager:re(t,e,r,n)}),o[l]}function y(){return typeof __global$<"u"?__global$:window}import{memo as se,useEffect as ae}from"/stable/react@18.2.0/es2020/react.js";var Be=se(function({connect:e,src:r}){return ae(()=>{if(typeof Image>"u")return;let n=!1,o=new Image;return o.src=r,o.onload=()=>{e(o),n=!0},()=>{n&&e(null)}}),null});import{invariant as xe}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";import ge from"/v102/fast-deep-equal@3.1.3/es2020/fast-deep-equal.js";import{useCallback as de,useState as le}from"/stable/react@18.2.0/es2020/react.js";import{useEffect as ce,useLayoutEffect as ue}from"/stable/react@18.2.0/es2020/react.js";var a=typeof window<"u"?ue:ce;function p(t,e,r){let[n,o]=le(()=>e(t)),i=de(()=>{let c=e(t);ge(n,c)||(o(c),r&&r())},[n,t,r]);return a(i),[n,i]}function x(t,e,r){let[n,o]=p(t,e,r);return a(function(){let c=t.getHandlerId();if(c!=null)return t.subscribeToStateChange(o,{handlerIds:[c]})},[t,o]),n}function f(t,e,r){return x(e,t||(()=>({})),()=>r.reconnect())}import{useMemo as pe}from"/stable/react@18.2.0/es2020/react.js";function h(t,e){let r=[...e||[]];return e==null&&typeof t!="function"&&r.push(t),pe(()=>typeof t=="function"?t():t,r)}import{useMemo as R}from"/stable/react@18.2.0/es2020/react.js";function E(t){return R(()=>t.hooks.dragSource(),[t])}function H(t){return R(()=>t.hooks.dragPreview(),[t])}import{useMemo as Oe}from"/stable/react@18.2.0/es2020/react.js";import{invariant as k}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";var b=!1,w=!1,m=class{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){k(!b,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return b=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{b=!1}}isDragging(){if(!this.sourceId)return!1;k(!w,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return w=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{w=!1}}subscribeToStateChange(e,r){return this.internalMonitor.subscribeToStateChange(e,r)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,r){return this.internalMonitor.isOverTarget(e,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}};import{invariant as fe}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";var M=!1,D=class{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,r){return this.internalMonitor.subscribeToStateChange(e,r)}canDrop(){if(!this.targetId)return!1;fe(!M,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return M=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{M=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}};function N(t,e,r){let n=r.getRegistry(),o=n.addTarget(t,e);return[o,()=>n.removeTarget(o)]}function j(t,e,r){let n=r.getRegistry(),o=n.addSource(t,e);return[o,()=>n.removeSource(o)]}import{shallowEqual as A}from"/v102/@react-dnd/shallowequal@4.0.2/es2020/shallowequal.js";function g(t){return t!==null&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}import{invariant as he}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";import{cloneElement as L,isValidElement as me}from"/stable/react@18.2.0/es2020/react.js";function De(t){if(typeof t.type=="string")return;let e=t.type.displayName||t.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function Ce(t){return(e=null,r=null)=>{if(!me(e)){let i=e;return t(i,r),i}let n=e;return De(n),Ie(n,r?i=>t(i,r):t)}}function C(t){let e={};return Object.keys(t).forEach(r=>{let n=t[r];if(r.endsWith("Ref"))e[r]=t[r];else{let o=Ce(n);e[r]=()=>o}}),e}function _(t,e){typeof t=="function"?t(e):t.current=e}function Ie(t,e){let r=t.ref;return he(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?L(t,{ref:n=>{_(r,n),_(e,n)}}):L(t,{ref:e})}var I=class{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){let e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){let e=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?e?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),r):(this.lastConnectedDragSource=e,r):r}reconnectDragPreview(e=!1){let r=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!A(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!A(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=C({dragSource:(r,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,g(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,g(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}};import{shallowEqual as ve}from"/v102/@react-dnd/shallowequal@4.0.2/es2020/shallowequal.js";var v=class{get connectTarget(){return this.dropTarget}reconnect(){let e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();let r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!ve(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=C({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,g(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}};import{invariant as Se}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";import{useContext as Te}from"/stable/react@18.2.0/es2020/react.js";function s(){let{dragDropManager:t}=Te(d);return Se(t!=null,"Expected drag drop context"),t}function F(t,e){let r=s(),n=Oe(()=>new I(r.getBackend()),[r]);return a(()=>(n.dragSourceOptions=t||null,n.reconnect(),()=>n.disconnectDragSource()),[n,t]),a(()=>(n.dragPreviewOptions=e||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,e]),n}import{useMemo as be}from"/stable/react@18.2.0/es2020/react.js";function U(){let t=s();return be(()=>new m(t),[t])}import{useEffect as we,useMemo as Me}from"/stable/react@18.2.0/es2020/react.js";var S=class{beginDrag(){let e=this.spec,r=this.monitor,n=null;return typeof e.item=="object"?n=e.item:typeof e.item=="function"?n=e.item(r):n={},n??null}canDrag(){let e=this.spec,r=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(r):!0}isDragging(e,r){let n=this.spec,o=this.monitor,{isDragging:i}=n;return i?i(o):r===e.getSourceId()}endDrag(){let e=this.spec,r=this.monitor,n=this.connector,{end:o}=e;o&&o(r.getItem(),r),n.reconnect()}constructor(e,r,n){this.spec=e,this.monitor=r,this.connector=n}};function Y(t,e,r){let n=Me(()=>new S(t,e,r),[e,r]);return we(()=>{n.spec=t},[t]),n}import{invariant as Pe}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";import{useMemo as ye}from"/stable/react@18.2.0/es2020/react.js";function W(t){return ye(()=>{let e=t.type;return Pe(e!=null,"spec.type must be defined"),e},[t])}function q(t,e,r){let n=s(),o=Y(t,e,r),i=W(t);a(function(){if(i!=null){let[u,O]=j(i,o,n);return e.receiveHandlerId(u),r.receiveHandlerId(u),O}},[n,e,r,o,i])}function it(t,e){let r=h(t,e);xe(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");let n=U(),o=F(r.options,r.previewOptions);return q(r,n,o),[f(r.collect,n,o),E(o),H(o)]}import{useEffect as G}from"/stable/react@18.2.0/es2020/react.js";function gt(t){let r=s().getMonitor(),[n,o]=p(r,t);return G(()=>r.subscribeToOffsetChange(o)),G(()=>r.subscribeToStateChange(o)),n}import{useMemo as Re}from"/stable/react@18.2.0/es2020/react.js";function V(t){return Re(()=>t.hooks.dropTarget(),[t])}import{useMemo as Ee}from"/stable/react@18.2.0/es2020/react.js";function B(t){let e=s(),r=Ee(()=>new v(e.getBackend()),[e]);return a(()=>(r.dropTargetOptions=t||null,r.reconnect(),()=>r.disconnectDropTarget()),[t]),r}import{useMemo as He}from"/stable/react@18.2.0/es2020/react.js";function z(){let t=s();return He(()=>new D(t),[t])}import{invariant as ke}from"/v102/@react-dnd/invariant@4.0.2/es2020/invariant.js";import{useMemo as Ne}from"/stable/react@18.2.0/es2020/react.js";function X(t){let{accept:e}=t;return Ne(()=>(ke(t.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}import{useEffect as je,useMemo as Le}from"/stable/react@18.2.0/es2020/react.js";var T=class{canDrop(){let e=this.spec,r=this.monitor;return e.canDrop?e.canDrop(r.getItem(),r):!0}hover(){let e=this.spec,r=this.monitor;e.hover&&e.hover(r.getItem(),r)}drop(){let e=this.spec,r=this.monitor;if(e.drop)return e.drop(r.getItem(),r)}constructor(e,r){this.spec=e,this.monitor=r}};function $(t,e){let r=Le(()=>new T(t,e),[e]);return je(()=>{r.spec=t},[t]),r}function J(t,e,r){let n=s(),o=$(t,e),i=X(t);a(function(){let[u,O]=N(i,o,n);return e.receiveHandlerId(u),r.receiveHandlerId(u),O},[n,e,o,r,i.map(c=>c.toString()).join("|")])}function Wt(t,e){let r=h(t,e),n=z(),o=B(r.options);return J(r,n,o),[f(r.collect,n,o),V(o)]}export{d as DndContext,qe as DndProvider,Be as DragPreviewImage,it as useDrag,s as useDragDropManager,gt as useDragLayer,Wt as useDrop};