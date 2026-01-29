/* esm.sh - @inversifyjs/common@1.4.0 */
// node_modules/@inversifyjs/common/lib/esm/index.js
function e(e2) {
  switch (typeof e2) {
    case "string":
    case "symbol":
      return e2.toString();
    case "function":
      return e2.name;
    default:
      throw new Error(`Unexpected ${typeof e2} service id type`);
  }
}
var t = /* @__PURE__ */ Symbol.for("@inversifyjs/common/islazyServiceIdentifier");
var r = class {
  [t];
  #e;
  constructor(e2) {
    this.#e = e2, this[t] = true;
  }
  static is(e2) {
    return "object" == typeof e2 && null !== e2 && true === e2[t];
  }
  unwrap() {
    return this.#e();
  }
};
export {
  r as LazyServiceIdentifier,
  e as stringifyServiceIdentifier
};
//# sourceMappingURL=common.development.mjs.map