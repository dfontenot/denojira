var e,t,n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:global,o=e={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this||r,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i;}catch(e){t=i;}try{n="function"==typeof clearTimeout?clearTimeout:u;}catch(e){n=u;}}();var l,s=[],f=!1,a=-1;function h(){f&&l&&(f=!1,l.length?s=l.concat(s):a=-1,s.length&&d());}function d(){if(!f){var e=c(h);f=!0;for(var t=s.length;t;){for(l=s,s=[];++a<t;)l&&l[a].run();a=-1,t=s.length;}l=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this||r,e)}}}(e);}}function m(e,t){(this||r).fun=e,(this||r).array=t;}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||c(d);},m.prototype.run=function(){(this||r).fun.apply(null,(this||r).array);},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return []},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return "/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0};var T=e;var addListener=T.addListener;var argv=T.argv;var binding=T.binding;var browser=T.browser;var chdir=T.chdir;var cwd=T.cwd;var emit=T.emit;var env=T.env;var listeners=T.listeners;var nextTick=T.nextTick;var off=T.off;var on=T.on;var once=T.once;var prependListener=T.prependListener;var prependOnceListener=T.prependOnceListener;var removeAllListeners=T.removeAllListeners;var removeListener=T.removeListener;var title=T.title;var umask=T.umask;var version=T.version;var versions=T.versions;export{addListener as a,argv as b,binding as c,browser as d,chdir as e,cwd as f,emit as g,T as h,env as i,on as j,once as k,listeners as l,prependOnceListener as m,nextTick as n,off as o,prependListener as p,removeListener as q,removeAllListeners as r,versions as s,title as t,umask as u,version as v,T as w};