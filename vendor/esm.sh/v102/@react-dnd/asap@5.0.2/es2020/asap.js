/* esm.sh - esbuild bundle(@react-dnd/asap@5.0.2) es2020 production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);var l=typeof __global$<"u"?__global$:self,u=l.MutationObserver||l.WebKitMutationObserver;function h(s){return function(){let t=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(t),clearInterval(r),s()}}}function p(s){let e=1,t=new u(s),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}var c=typeof u=="function"?p:h;var o=class{enqueueTask(e){let{queue:t,requestFlush:r}=this;t.length||(r(),this.flushing=!0),t[t.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{let{queue:e}=this;for(;this.index<e.length;){let t=this.index;if(this.index++,e[t].call(),this.index>this.capacity){for(let r=0,n=e.length-this.index;r<n;r++)e[r]=e[r+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=c(this.flush),this.requestErrorThrow=h(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}};var i=class{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,t){this.onError=e,this.release=t,this.task=null}};var a=class{create(e){let t=this.freeTasks,r=t.length?t.pop():new i(this.onError,n=>t[t.length]=n);return r.task=e,r}constructor(e){this.onError=e,this.freeTasks=[]}};var f=new o,m=new a(f.registerPendingError);function b(s){f.enqueueTask(m.create(s))}export{o as AsapQueue,a as TaskFactory,b as asap};