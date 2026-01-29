/* esm.sh - @inversifyjs/common@1.4.0 */
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

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
var _a, _e;
_a = t;
var r = class {
  constructor(e2) {
    __publicField(this, _a);
    __privateAdd(this, _e);
    __privateSet(this, _e, e2), this[t] = true;
  }
  static is(e2) {
    return "object" == typeof e2 && null !== e2 && true === e2[t];
  }
  unwrap() {
    return __privateGet(this, _e).call(this);
  }
};
_e = new WeakMap();
export {
  r as LazyServiceIdentifier,
  e as stringifyServiceIdentifier
};
//# sourceMappingURL=common.development.mjs.map