/* esm.sh - @inversifyjs/reflect-metadata-utils@0.2.4 */
// node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js
function t(t2, e2) {
  return Reflect.getMetadata(e2, t2);
}
function e(e2, n, a, c) {
  const f = c(t(e2, n) ?? a);
  Reflect.defineMetadata(n, f, e2);
}
export {
  t as getReflectMetadata,
  e as updateReflectMetadata
};
//# sourceMappingURL=reflect-metadata-utils.development.mjs.map