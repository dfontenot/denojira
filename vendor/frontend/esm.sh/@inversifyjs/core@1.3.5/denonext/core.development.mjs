/* esm.sh - @inversifyjs/core@1.3.5 */
// node_modules/@inversifyjs/core/lib/esm/index.js
import { getReflectMetadata as t, updateReflectMetadata as e } from "/@inversifyjs/reflect-metadata-utils@0.2.4/denonext/reflect-metadata-utils.development.mjs";
import { LazyServiceIdentifier as n } from "/@inversifyjs/common@1.4.0/denonext/common.development.mjs";
var a = "named";
var r = "name";
var i = "unmanaged";
var o = "optional";
var s = "inject";
var c = "multi_inject";
var u = "post_construct";
var d = "pre_destroy";
var m = [s, c, r, i, a, o];
var l = /* @__PURE__ */ Symbol.for("@inversifyjs/core/InversifyCoreError");
var f = class _f extends Error {
  [l];
  kind;
  constructor(t2, e2, n2) {
    super(e2, n2), this[l] = true, this.kind = t2;
  }
  static is(t2) {
    return "object" == typeof t2 && null !== t2 && true === t2[l];
  }
  static isErrorOfKind(t2, e2) {
    return _f.is(t2) && t2.kind === e2;
  }
};
var g;
var p;
function h(t2, e2) {
  const n2 = [];
  for (let t3 = 0; t3 < e2.length; ++t3) {
    void 0 === e2[t3] && n2.push(t3);
  }
  if (n2.length > 0) throw new f(g.missingInjectionDecorator, `Found unexpected missing metadata on type "${t2.name}" at constructor indexes "${n2.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
}
function y(t2) {
  return { kind: p.singleInjection, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), targetName: void 0, value: t2 };
}
function v(t2) {
  const e2 = t2.find(((t3) => t3.key === s)), n2 = t2.find(((t3) => t3.key === c));
  if (void 0 !== t2.find(((t3) => t3.key === i))) return (function(t3, e3) {
    if (void 0 !== e3 || void 0 !== t3) throw new f(g.missingInjectionDecorator, "Expected a single @inject, @multiInject or @unmanaged metadata");
    return { kind: p.unmanaged };
  })(e2, n2);
  if (void 0 === n2 && void 0 === e2) throw new f(g.missingInjectionDecorator, "Expected @inject, @multiInject or @unmanaged metadata");
  const u2 = t2.find(((t3) => t3.key === a)), d2 = t2.find(((t3) => t3.key === o)), l2 = t2.find(((t3) => t3.key === r));
  return { kind: void 0 === e2 ? p.multipleInjection : p.singleInjection, name: u2?.value, optional: void 0 !== d2, tags: new Map(t2.filter(((t3) => m.every(((e3) => t3.key !== e3)))).map(((t3) => [t3.key, t3.value]))), targetName: l2?.value, value: void 0 === e2 ? n2?.value : e2.value };
}
function j(t2, e2, n2) {
  try {
    return v(n2);
  } catch (n3) {
    throw f.isErrorOfKind(n3, g.missingInjectionDecorator) ? new f(g.missingInjectionDecorator, `Expected a single @inject, @multiInject or @unmanaged decorator at type "${t2.name}" at constructor arguments at index "${e2.toString()}"`, { cause: n3 }) : n3;
  }
}
function k(e2) {
  const n2 = t(e2, "design:paramtypes"), a2 = t(e2, "inversify:tagged"), r2 = [];
  if (void 0 !== a2) for (const [t2, n3] of Object.entries(a2)) {
    const a3 = parseInt(t2);
    r2[a3] = j(e2, a3, n3);
  }
  if (void 0 !== n2) {
    for (let t2 = 0; t2 < n2.length; ++t2) if (void 0 === r2[t2]) {
      const e3 = n2[t2];
      r2[t2] = y(e3);
    }
  }
  return h(e2, r2), r2;
}
function I(t2, e2, n2) {
  try {
    return v(n2);
  } catch (n3) {
    throw f.isErrorOfKind(n3, g.missingInjectionDecorator) ? new f(g.missingInjectionDecorator, `Expected a single @inject, @multiInject or @unmanaged decorator at type "${t2.name}" at property "${e2.toString()}"`, { cause: n3 }) : n3;
  }
}
function w(e2) {
  const n2 = t(e2, "inversify:tagged_props"), a2 = /* @__PURE__ */ new Map();
  if (void 0 !== n2) for (const t2 of Reflect.ownKeys(n2)) {
    const r2 = n2[t2];
    a2.set(t2, I(e2, t2, r2));
  }
  return a2;
}
function M(e2) {
  const n2 = t(e2, u), a2 = t(e2, d);
  return { constructorArguments: k(e2), lifecycle: { postConstructMethodName: n2?.value, preDestroyMethodName: a2?.value }, properties: w(e2) };
}
function N(t2, e2) {
  const n2 = e2.getConstructorMetadata(t2), a2 = [];
  for (const [e3, r2] of Object.entries(n2.userGeneratedMetadata)) {
    const n3 = parseInt(e3);
    a2[n3] = j(t2, n3, r2);
  }
  if (void 0 !== n2.compilerGeneratedMetadata) {
    for (let t3 = 0; t3 < n2.compilerGeneratedMetadata.length; ++t3) if (void 0 === a2[t3]) {
      const e3 = n2.compilerGeneratedMetadata[t3];
      a2[t3] = y(e3);
    }
  }
  return h(t2, a2), a2;
}
function E(t2, e2) {
  const n2 = e2.getPropertiesMetadata(t2), a2 = /* @__PURE__ */ new Map();
  for (const e3 of Reflect.ownKeys(n2)) {
    const r2 = n2[e3];
    a2.set(e3, I(t2, e3, r2));
  }
  return a2;
}
function D(e2, n2) {
  const a2 = t(e2, u), r2 = t(e2, d);
  return { constructorArguments: N(e2, n2), lifecycle: { postConstructMethodName: a2?.value, preDestroyMethodName: r2?.value }, properties: E(e2, n2) };
}
function b(t2) {
  const e2 = Object.getPrototypeOf(t2.prototype), n2 = e2?.constructor;
  return n2;
}
function O(t2) {
  return t2.kind === p.unmanaged ? [{ key: i, value: true }] : (function(t3) {
    const e2 = [A(t3)];
    void 0 !== t3.name && e2.push({ key: a, value: t3.name });
    t3.optional && e2.push({ key: o, value: true });
    for (const [n2, a2] of t3.tags) e2.push({ key: n2, value: a2 });
    void 0 !== t3.targetName && e2.push({ key: r, value: t3.targetName });
    return e2;
  })(t2);
}
function A(t2) {
  let e2;
  switch (t2.kind) {
    case p.multipleInjection:
      e2 = { key: c, value: t2.value };
      break;
    case p.singleInjection:
      e2 = { key: s, value: t2.value };
  }
  return e2;
}
!(function(t2) {
  t2[t2.injectionDecoratorConflict = 0] = "injectionDecoratorConflict", t2[t2.missingInjectionDecorator = 1] = "missingInjectionDecorator", t2[t2.planning = 2] = "planning", t2[t2.unknown = 3] = "unknown";
})(g || (g = {})), (function(t2) {
  t2[t2.multipleInjection = 0] = "multipleInjection", t2[t2.singleInjection = 1] = "singleInjection", t2[t2.unmanaged = 2] = "unmanaged";
})(p || (p = {}));
var x = class {
  #t;
  constructor(t2) {
    this.#t = t2;
  }
  startsWith(t2) {
    return this.#t.startsWith(t2);
  }
  endsWith(t2) {
    return this.#t.endsWith(t2);
  }
  contains(t2) {
    return this.#t.includes(t2);
  }
  equals(t2) {
    return this.#t === t2;
  }
  value() {
    return this.#t;
  }
};
var C = "@inversifyjs/core/targetId";
var T = class {
  #e;
  #n;
  #a;
  #r;
  #i;
  #o;
  constructor(n2, a2, r2) {
    this.#n = (function() {
      const n3 = t(Object, C) ?? 0;
      return n3 === Number.MAX_SAFE_INTEGER ? e(Object, C, n3, (() => Number.MIN_SAFE_INTEGER)) : e(Object, C, n3, ((t2) => t2 + 1)), n3;
    })(), this.#a = n2, this.#r = void 0, this.#e = a2, this.#i = new x("string" == typeof n2 ? n2 : n2.toString().slice(7, -1)), this.#o = r2;
  }
  get id() {
    return this.#n;
  }
  get identifier() {
    return this.#a;
  }
  get metadata() {
    return void 0 === this.#r && (this.#r = O(this.#e)), this.#r;
  }
  get name() {
    return this.#i;
  }
  get type() {
    return this.#o;
  }
  get serviceIdentifier() {
    return n.is(this.#e.value) ? this.#e.value.unwrap() : this.#e.value;
  }
  getCustomTags() {
    return [...this.#e.tags.entries()].map((([t2, e2]) => ({ key: t2, value: e2 })));
  }
  getNamedTag() {
    return void 0 === this.#e.name ? null : { key: a, value: this.#e.name };
  }
  hasTag(t2) {
    return this.metadata.some(((e2) => e2.key === t2));
  }
  isArray() {
    return this.#e.kind === p.multipleInjection;
  }
  isNamed() {
    return void 0 !== this.#e.name;
  }
  isOptional() {
    return this.#e.optional;
  }
  isTagged() {
    return this.#e.tags.size > 0;
  }
  matchesArray(t2) {
    return this.isArray() && this.#e.value === t2;
  }
  matchesNamedTag(t2) {
    return this.#e.name === t2;
  }
  matchesTag(t2) {
    return (e2) => this.metadata.some(((n2) => n2.key === t2 && n2.value === e2));
  }
};
var _ = (t2) => /* @__PURE__ */ (function(t3, e2) {
  return function(n2) {
    const a2 = t3(n2);
    let r2 = b(n2);
    for (; void 0 !== r2 && r2 !== Object; ) {
      const t4 = e2(r2);
      for (const [e3, n3] of t4) a2.properties.has(e3) || a2.properties.set(e3, n3);
      r2 = b(r2);
    }
    const i2 = [];
    for (const t4 of a2.constructorArguments) if (t4.kind !== p.unmanaged) {
      const e3 = t4.targetName ?? "";
      i2.push(new T(e3, t4, "ConstructorArgument"));
    }
    for (const [t4, e3] of a2.properties) if (e3.kind !== p.unmanaged) {
      const n3 = e3.targetName ?? t4;
      i2.push(new T(n3, e3, "ClassProperty"));
    }
    return i2;
  };
})(void 0 === t2 ? M : (e2) => D(e2, t2), void 0 === t2 ? w : (e2) => E(e2, t2));
export {
  p as ClassElementMetadataKind,
  T as LegacyTargetImpl,
  v as getClassElementMetadataFromLegacyMetadata,
  M as getClassMetadata,
  D as getClassMetadataFromMetadataReader,
  _ as getTargets
};
//# sourceMappingURL=core.development.mjs.map