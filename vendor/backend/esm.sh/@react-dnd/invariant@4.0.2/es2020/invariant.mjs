/* esm.sh - @react-dnd/invariant@4.0.2 */
import __Process$ from "/node/process.mjs";
function a(r,n,...i){if(t()&&n===void 0)throw new Error("invariant requires an error message argument");if(!r){let e;if(n===void 0)e=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;e=new Error(n.replace(/%s/g,function(){return i[o++]})),e.name="Invariant Violation"}throw e.framesToPop=1,e}}function t(){return typeof __Process$<"u"&&!0}export{a as invariant};
//# sourceMappingURL=invariant.mjs.map