/* esm.sh - inversify@6.2.2 */
// node_modules/inversify/lib/esm/index.js
import "/reflect-metadata@~0.2.2?target=denonext&dev";
import { LazyServiceIdentifier as t } from "/@inversifyjs/common@1.4.0/denonext/common.development.mjs";
import { LazyServiceIdentifier } from "/@inversifyjs/common@1.4.0/denonext/common.development.mjs";
import { getTargets as n, getClassElementMetadataFromLegacyMetadata as e, ClassElementMetadataKind as i, LegacyTargetImpl as r } from "/@inversifyjs/core@1.3.5/denonext/core.development.mjs";
var s = "named";
var o = "name";
var a = "unmanaged";
var c = "optional";
var d = "inject";
var u = "multi_inject";
var h = "inversify:tagged";
var l = "inversify:tagged_props";
var g = "inversify:paramtypes";
var y = "design:paramtypes";
var p = "post_construct";
var f = "pre_destroy";
var _ = [d, u, o, a, s, c];
var v = Object.freeze({ __proto__: null, DESIGN_PARAM_TYPES: y, INJECT_TAG: d, MULTI_INJECT_TAG: u, NAMED_TAG: s, NAME_TAG: o, NON_CUSTOM_TAG_KEYS: _, OPTIONAL_TAG: c, PARAM_TYPES: g, POST_CONSTRUCT: p, PRE_DESTROY: f, TAGGED: h, TAGGED_PROP: l, UNMANAGED_TAG: a });
var b = { Request: "Request", Singleton: "Singleton", Transient: "Transient" };
var w = { ConstantValue: "ConstantValue", Constructor: "Constructor", DynamicValue: "DynamicValue", Factory: "Factory", Function: "Function", Instance: "Instance", Invalid: "Invalid", Provider: "Provider" };
var m = { ClassProperty: "ClassProperty", ConstructorArgument: "ConstructorArgument", Variable: "Variable" };
var A = 0;
function S() {
  return A++;
}
var I = class _I {
  id;
  moduleId;
  activated;
  serviceIdentifier;
  implementationType;
  cache;
  dynamicValue;
  scope;
  type;
  factory;
  provider;
  constraint;
  onActivation;
  onDeactivation;
  constructor(t2, n2) {
    this.id = S(), this.activated = false, this.serviceIdentifier = t2, this.scope = n2, this.type = w.Invalid, this.constraint = (t3) => true, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, this.onActivation = null, this.onDeactivation = null, this.dynamicValue = null;
  }
  clone() {
    const t2 = new _I(this.serviceIdentifier, this.scope);
    return t2.activated = t2.scope === b.Singleton && this.activated, t2.implementationType = this.implementationType, t2.dynamicValue = this.dynamicValue, t2.scope = this.scope, t2.type = this.type, t2.factory = this.factory, t2.provider = this.provider, t2.constraint = this.constraint, t2.onActivation = this.onActivation, t2.onDeactivation = this.onDeactivation, t2.cache = this.cache, t2;
  }
};
var T = "Metadata key was used more than once in a parameter:";
var D = "NULL argument";
var N = "Key Not Found";
var C = "Ambiguous match found for serviceIdentifier:";
var x = "No matching bindings found for serviceIdentifier:";
var R = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
var E = (t2, n2) => `onDeactivation() error in class ${t2}: ${n2}`;
var M = class {
  getConstructorMetadata(t2) {
    return { compilerGeneratedMetadata: Reflect.getMetadata(y, t2) ?? [], userGeneratedMetadata: Reflect.getMetadata(h, t2) ?? {} };
  }
  getPropertiesMetadata(t2) {
    return Reflect.getMetadata(l, t2) ?? {};
  }
};
var B;
function P(t2) {
  return t2 instanceof RangeError || "Maximum call stack size exceeded" === t2.message;
}
!(function(t2) {
  t2[t2.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", t2[t2.NoBindingsAvailable = 0] = "NoBindingsAvailable", t2[t2.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
})(B || (B = {}));
function k(t2) {
  return "function" == typeof t2 ? t2.name : "symbol" == typeof t2 ? t2.toString() : t2;
}
function q(t2, n2, e2) {
  let i2 = "";
  const r2 = e2(t2, n2);
  return 0 !== r2.length && (i2 = "\nRegistered bindings:", r2.forEach(((t3) => {
    let n3 = "Object";
    null !== t3.implementationType && (n3 = O(t3.implementationType)), i2 = `${i2}
 ${n3}`, t3.constraint.metaData && (i2 = `${i2} - ${t3.constraint.metaData}`);
  }))), i2;
}
function F(t2, n2) {
  return null !== t2.parentRequest && (t2.parentRequest.serviceIdentifier === n2 || F(t2.parentRequest, n2));
}
function j(t2) {
  t2.childRequests.forEach(((n2) => {
    if (F(t2, n2.serviceIdentifier)) {
      const t3 = (function(t4) {
        const n3 = (function t5(n4, e2 = []) {
          const i2 = k(n4.serviceIdentifier);
          return e2.push(i2), null !== n4.parentRequest ? t5(n4.parentRequest, e2) : e2;
        })(t4);
        return n3.reverse().join(" --> ");
      })(n2);
      throw new Error(`Circular dependency found: ${t3}`);
    }
    j(n2);
  }));
}
function O(t2) {
  if (null != t2.name && "" !== t2.name) return t2.name;
  {
    const n2 = t2.toString(), e2 = n2.match(/^function\s*([^\s(]+)/);
    return null === e2 ? `Anonymous function: ${n2}` : e2[1];
  }
}
function $(t2) {
  return `{"key":"${t2.key.toString()}","value":"${t2.value.toString()}"}`;
}
var V = class {
  id;
  container;
  plan;
  currentRequest;
  constructor(t2) {
    this.id = S(), this.container = t2;
  }
  addPlan(t2) {
    this.plan = t2;
  }
  setCurrentRequest(t2) {
    this.currentRequest = t2;
  }
};
var W = class {
  key;
  value;
  constructor(t2, n2) {
    this.key = t2, this.value = n2;
  }
  toString() {
    return this.key === s ? `named: ${String(this.value).toString()} ` : `tagged: { key:${this.key.toString()}, value: ${String(this.value)} }`;
  }
};
var G = class {
  parentContext;
  rootRequest;
  constructor(t2, n2) {
    this.parentContext = t2, this.rootRequest = n2;
  }
};
function K(t2, e2) {
  const i2 = (function(t3) {
    const n2 = Object.getPrototypeOf(t3.prototype), e3 = n2?.constructor;
    return e3;
  })(e2);
  if (void 0 === i2 || i2 === Object) return 0;
  const r2 = n(t2)(i2), s2 = r2.map(((t3) => t3.metadata.filter(((t4) => t4.key === a)))), o2 = [].concat.apply([], s2).length, c2 = r2.length - o2;
  return c2 > 0 ? c2 : K(t2, i2);
}
var H = class _H {
  id;
  serviceIdentifier;
  parentContext;
  parentRequest;
  bindings;
  childRequests;
  target;
  requestScope;
  constructor(t2, n2, e2, i2, r2) {
    this.id = S(), this.serviceIdentifier = t2, this.parentContext = n2, this.parentRequest = e2, this.target = r2, this.childRequests = [], this.bindings = Array.isArray(i2) ? i2 : [i2], this.requestScope = null === e2 ? /* @__PURE__ */ new Map() : null;
  }
  addChildRequest(t2, n2, e2) {
    const i2 = new _H(t2, this.parentContext, this, n2, e2);
    return this.childRequests.push(i2), i2;
  }
};
function U(t2) {
  return t2._bindingDictionary;
}
function L(t2, n2, e2, i2, r2) {
  let s2 = J(e2.container, r2.serviceIdentifier), o2 = [];
  return s2.length === B.NoBindingsAvailable && true === e2.container.options.autoBindInjectable && "function" == typeof r2.serviceIdentifier && t2.getConstructorMetadata(r2.serviceIdentifier).compilerGeneratedMetadata && (e2.container.bind(r2.serviceIdentifier).toSelf(), s2 = J(e2.container, r2.serviceIdentifier)), o2 = n2 ? s2 : s2.filter(((t3) => {
    const n3 = new H(t3.serviceIdentifier, e2, i2, t3, r2);
    return t3.constraint(n3);
  })), (function(t3, n3, e3, i3, r3) {
    switch (n3.length) {
      case B.NoBindingsAvailable:
        if (i3.isOptional()) return n3;
        {
          const n4 = k(t3);
          let s3 = x;
          throw s3 += (function(t4, n5) {
            if (n5.isTagged() || n5.isNamed()) {
              let e4 = "";
              const i4 = n5.getNamedTag(), r4 = n5.getCustomTags();
              return null !== i4 && (e4 += $(i4) + "\n"), null !== r4 && r4.forEach(((t5) => {
                e4 += $(t5) + "\n";
              })), ` ${t4}
 ${t4} - ${e4}`;
            }
            return ` ${t4}`;
          })(n4, i3), s3 += q(r3, n4, J), null !== e3 && (s3 += `
Trying to resolve bindings for "${k(e3.serviceIdentifier)}"`), new Error(s3);
        }
      case B.OnlyOneBindingAvailable:
        return n3;
      case B.MultipleBindingsAvailable:
      default:
        if (i3.isArray()) return n3;
        {
          const n4 = k(t3);
          let e4 = `${C} ${n4}`;
          throw e4 += q(r3, n4, J), new Error(e4);
        }
    }
  })(r2.serviceIdentifier, o2, i2, r2, e2.container), o2;
}
function Y(t2, n2) {
  const e2 = n2.isMultiInject ? u : d, i2 = [new W(e2, t2)];
  return void 0 !== n2.customTag && i2.push(new W(n2.customTag.key, n2.customTag.value)), true === n2.isOptional && i2.push(new W(c, true)), i2;
}
function z(t2, e2, i2, r2, s2, o2) {
  let a2, c2;
  if (null === s2) {
    a2 = L(t2, e2, r2, null, o2), c2 = new H(i2, r2, null, a2, o2);
    const n2 = new G(r2, c2);
    r2.addPlan(n2);
  } else a2 = L(t2, e2, r2, s2, o2), c2 = s2.addChildRequest(o2.serviceIdentifier, a2, o2);
  a2.forEach(((e3) => {
    let i3 = null;
    if (o2.isArray()) i3 = c2.addChildRequest(e3.serviceIdentifier, e3, o2);
    else {
      if (null !== e3.cache) return;
      i3 = c2;
    }
    if (e3.type === w.Instance && null !== e3.implementationType) {
      const s3 = (function(t3, e4) {
        return n(t3)(e4);
      })(t2, e3.implementationType);
      if (true !== r2.container.options.skipBaseClassChecks) {
        const n2 = K(t2, e3.implementationType);
        if (s3.length < n2) {
          const t3 = `The number of constructor arguments in the derived class ${O(e3.implementationType)} must be >= than the number of constructor arguments of its base class.`;
          throw new Error(t3);
        }
      }
      s3.forEach(((n2) => {
        z(t2, false, n2.serviceIdentifier, r2, i3, n2);
      }));
    }
  }));
}
function J(t2, n2) {
  let e2 = [];
  const i2 = U(t2);
  return i2.hasKey(n2) ? e2 = i2.get(n2) : null !== t2.parent && (e2 = J(t2.parent, n2)), e2;
}
function Q(t2, n2, s2, o2, a2, c2 = false) {
  const d2 = new V(n2), u2 = (function(t3, n3, s3) {
    const o3 = Y(n3, s3), a3 = e(o3);
    if (a3.kind === i.unmanaged) throw new Error("Unexpected metadata when creating target");
    return new r("", a3, t3);
  })(s2, o2, a2);
  try {
    return z(t2, c2, o2, d2, null, u2), d2;
  } catch (t3) {
    throw P(t3) && j(d2.plan.rootRequest), t3;
  }
}
function X(t2) {
  return ("object" == typeof t2 && null !== t2 || "function" == typeof t2) && "function" == typeof t2.then;
}
function Z(t2) {
  return !!X(t2) || Array.isArray(t2) && t2.some(X);
}
var tt = (t2, n2, e2) => {
  t2.has(n2.id) || t2.set(n2.id, e2);
};
var nt = (t2, n2) => {
  t2.cache = n2, t2.activated = true, X(n2) && et(t2, n2);
};
var et = async (t2, n2) => {
  try {
    const e2 = await n2;
    t2.cache = e2;
  } catch (n3) {
    throw t2.cache = null, t2.activated = false, n3;
  }
};
var it;
!(function(t2) {
  t2.DynamicValue = "toDynamicValue", t2.Factory = "toFactory", t2.Provider = "toProvider";
})(it || (it = {}));
var rt = (t2) => (n2) => (...e2) => {
  e2.forEach(((e3) => {
    t2.bind(e3).toService(n2);
  }));
};
function st(t2, n2, e2) {
  let i2;
  if (n2.length > 0) {
    const r2 = (function(t3, n3) {
      return t3.reduce(((t4, e3) => {
        const i3 = n3(e3);
        return e3.target.type === m.ConstructorArgument ? t4.constructorInjections.push(i3) : (t4.propertyRequests.push(e3), t4.propertyInjections.push(i3)), t4.isAsync || (t4.isAsync = Z(i3)), t4;
      }), { constructorInjections: [], isAsync: false, propertyInjections: [], propertyRequests: [] });
    })(n2, e2), s2 = { ...r2, constr: t2 };
    i2 = r2.isAsync ? (async function(t3) {
      const n3 = await at(t3.constructorInjections), e3 = await at(t3.propertyInjections);
      return ot({ ...t3, constructorInjections: n3, propertyInjections: e3 });
    })(s2) : ot(s2);
  } else i2 = new t2();
  return i2;
}
function ot(t2) {
  const n2 = new t2.constr(...t2.constructorInjections);
  return t2.propertyRequests.forEach(((e2, i2) => {
    const r2 = e2.target.identifier, s2 = t2.propertyInjections[i2];
    e2.target.isOptional() && void 0 === s2 || (n2[r2] = s2);
  })), n2;
}
async function at(t2) {
  const n2 = [];
  for (const e2 of t2) Array.isArray(e2) ? n2.push(Promise.all(e2)) : n2.push(e2);
  return Promise.all(n2);
}
function ct(t2, n2) {
  const e2 = (function(t3, n3) {
    if (Reflect.hasMetadata(p, t3)) {
      const r2 = Reflect.getMetadata(p, t3);
      try {
        return n3[r2.value]?.();
      } catch (n4) {
        if (n4 instanceof Error) throw new Error((e3 = t3.name, i2 = n4.message, `@postConstruct error in class ${e3}: ${i2}`));
      }
    }
    var e3, i2;
  })(t2, n2);
  return X(e2) ? e2.then((() => n2)) : n2;
}
function dt(t2, n2) {
  t2.scope !== b.Singleton && (function(t3, n3) {
    const e2 = `Class cannot be instantiated in ${t3.scope === b.Request ? "request" : "transient"} scope.`;
    if ("function" == typeof t3.onDeactivation) throw new Error(E(n3.name, e2));
    if (Reflect.hasMetadata(f, n3)) throw new Error(`@preDestroy error in class ${n3.name}: ${e2}`);
  })(t2, n2);
}
var ut = (t2) => (n2) => {
  n2.parentContext.setCurrentRequest(n2);
  const e2 = n2.bindings, i2 = n2.childRequests, r2 = n2.target && n2.target.isArray(), s2 = !(n2.parentRequest && n2.parentRequest.target && n2.target && n2.parentRequest.target.matchesArray(n2.target.serviceIdentifier));
  if (r2 && s2) return i2.map(((n3) => ut(t2)(n3)));
  {
    if (n2.target.isOptional() && 0 === e2.length) return;
    const i3 = e2[0];
    return yt(t2, n2, i3);
  }
};
var ht = (t2, n2) => {
  const e2 = ((t3) => {
    switch (t3.type) {
      case w.Factory:
        return { factory: t3.factory, factoryType: it.Factory };
      case w.Provider:
        return { factory: t3.provider, factoryType: it.Provider };
      case w.DynamicValue:
        return { factory: t3.dynamicValue, factoryType: it.DynamicValue };
      default:
        throw new Error(`Unexpected factory type ${t3.type}`);
    }
  })(t2);
  return ((t3, n3) => {
    try {
      return t3();
    } catch (t4) {
      if (P(t4)) throw n3();
      throw t4;
    }
  })((() => e2.factory.bind(t2)(n2)), (() => {
    return new Error((t3 = e2.factoryType, i2 = n2.currentRequest.serviceIdentifier.toString(), `It looks like there is a circular dependency in one of the '${t3}' bindings. Please investigate bindings with service identifier '${i2}'.`));
    var t3, i2;
  }));
};
var lt = (t2, n2, e2) => {
  let i2;
  const r2 = n2.childRequests;
  switch (((t3) => {
    let n3 = null;
    switch (t3.type) {
      case w.ConstantValue:
      case w.Function:
        n3 = t3.cache;
        break;
      case w.Constructor:
      case w.Instance:
        n3 = t3.implementationType;
        break;
      case w.DynamicValue:
        n3 = t3.dynamicValue;
        break;
      case w.Provider:
        n3 = t3.provider;
        break;
      case w.Factory:
        n3 = t3.factory;
    }
    if (null === n3) {
      const n4 = k(t3.serviceIdentifier);
      throw new Error(`Invalid binding type: ${n4}`);
    }
  })(e2), e2.type) {
    case w.ConstantValue:
    case w.Function:
      i2 = e2.cache;
      break;
    case w.Constructor:
      i2 = e2.implementationType;
      break;
    case w.Instance:
      i2 = (function(t3, n3, e3, i3) {
        dt(t3, n3);
        const r3 = st(n3, e3, i3);
        return X(r3) ? r3.then(((t4) => ct(n3, t4))) : ct(n3, r3);
      })(e2, e2.implementationType, r2, ut(t2));
      break;
    default:
      i2 = ht(e2, n2.parentContext);
  }
  return i2;
};
var gt = (t2, n2, e2) => {
  let i2 = ((t3, n3) => n3.scope === b.Singleton && n3.activated ? n3.cache : n3.scope === b.Request && t3.has(n3.id) ? t3.get(n3.id) : null)(t2, n2);
  return null !== i2 || (i2 = e2(), ((t3, n3, e3) => {
    n3.scope === b.Singleton && nt(n3, e3), n3.scope === b.Request && tt(t3, n3, e3);
  })(t2, n2, i2)), i2;
};
var yt = (t2, n2, e2) => gt(t2, e2, (() => {
  let i2 = lt(t2, n2, e2);
  return i2 = X(i2) ? i2.then(((t3) => pt(n2, e2, t3))) : pt(n2, e2, i2), i2;
}));
function pt(t2, n2, e2) {
  let i2 = ft(t2.parentContext, n2, e2);
  const r2 = wt(t2.parentContext.container);
  let s2, o2 = r2.next();
  do {
    s2 = o2.value;
    const n3 = t2.parentContext, e3 = t2.serviceIdentifier, a2 = bt(s2, e3);
    i2 = X(i2) ? vt(a2, n3, i2) : _t(a2, n3, i2), o2 = r2.next();
  } while (true !== o2.done && !U(s2).hasKey(t2.serviceIdentifier));
  return i2;
}
var ft = (t2, n2, e2) => {
  let i2;
  return i2 = "function" == typeof n2.onActivation ? n2.onActivation(t2, e2) : e2, i2;
};
var _t = (t2, n2, e2) => {
  let i2 = t2.next();
  for (; true !== i2.done; ) {
    if (X(e2 = i2.value(n2, e2))) return vt(t2, n2, e2);
    i2 = t2.next();
  }
  return e2;
};
var vt = async (t2, n2, e2) => {
  let i2 = await e2, r2 = t2.next();
  for (; true !== r2.done; ) i2 = await r2.value(n2, i2), r2 = t2.next();
  return i2;
};
var bt = (t2, n2) => {
  const e2 = t2._activations;
  return e2.hasKey(n2) ? e2.get(n2).values() : [].values();
};
var wt = (t2) => {
  const n2 = [t2];
  let e2 = t2.parent;
  for (; null !== e2; ) n2.push(e2), e2 = e2.parent;
  return { next: () => {
    const t3 = n2.pop();
    return void 0 !== t3 ? { done: false, value: t3 } : { done: true, value: void 0 };
  } };
};
var mt = (t2, n2) => {
  const e2 = t2.parentRequest;
  return null !== e2 && (!!n2(e2) || mt(e2, n2));
};
var At = (t2) => (n2) => {
  const e2 = (e3) => null !== e3 && null !== e3.target && e3.target.matchesTag(t2)(n2);
  return e2.metaData = new W(t2, n2), e2;
};
var St = At(s);
var It = (t2) => (n2) => {
  let e2 = null;
  if (null !== n2) {
    if (e2 = n2.bindings[0], "string" == typeof t2) return e2.serviceIdentifier === t2;
    {
      const e3 = n2.bindings[0].implementationType;
      return t2 === e3;
    }
  }
  return false;
};
var Tt = class {
  _binding;
  constructor(t2) {
    this._binding = t2;
  }
  when(t2) {
    return this._binding.constraint = t2, new Dt(this._binding);
  }
  whenTargetNamed(t2) {
    return this._binding.constraint = St(t2), new Dt(this._binding);
  }
  whenTargetIsDefault() {
    return this._binding.constraint = (t2) => {
      if (null === t2) return false;
      return null !== t2.target && !t2.target.isNamed() && !t2.target.isTagged();
    }, new Dt(this._binding);
  }
  whenTargetTagged(t2, n2) {
    return this._binding.constraint = At(t2)(n2), new Dt(this._binding);
  }
  whenInjectedInto(t2) {
    return this._binding.constraint = (n2) => null !== n2 && It(t2)(n2.parentRequest), new Dt(this._binding);
  }
  whenParentNamed(t2) {
    return this._binding.constraint = (n2) => null !== n2 && St(t2)(n2.parentRequest), new Dt(this._binding);
  }
  whenParentTagged(t2, n2) {
    return this._binding.constraint = (e2) => null !== e2 && At(t2)(n2)(e2.parentRequest), new Dt(this._binding);
  }
  whenAnyAncestorIs(t2) {
    return this._binding.constraint = (n2) => null !== n2 && mt(n2, It(t2)), new Dt(this._binding);
  }
  whenNoAncestorIs(t2) {
    return this._binding.constraint = (n2) => null !== n2 && !mt(n2, It(t2)), new Dt(this._binding);
  }
  whenAnyAncestorNamed(t2) {
    return this._binding.constraint = (n2) => null !== n2 && mt(n2, St(t2)), new Dt(this._binding);
  }
  whenNoAncestorNamed(t2) {
    return this._binding.constraint = (n2) => null !== n2 && !mt(n2, St(t2)), new Dt(this._binding);
  }
  whenAnyAncestorTagged(t2, n2) {
    return this._binding.constraint = (e2) => null !== e2 && mt(e2, At(t2)(n2)), new Dt(this._binding);
  }
  whenNoAncestorTagged(t2, n2) {
    return this._binding.constraint = (e2) => null !== e2 && !mt(e2, At(t2)(n2)), new Dt(this._binding);
  }
  whenAnyAncestorMatches(t2) {
    return this._binding.constraint = (n2) => null !== n2 && mt(n2, t2), new Dt(this._binding);
  }
  whenNoAncestorMatches(t2) {
    return this._binding.constraint = (n2) => null !== n2 && !mt(n2, t2), new Dt(this._binding);
  }
};
var Dt = class {
  _binding;
  constructor(t2) {
    this._binding = t2;
  }
  onActivation(t2) {
    return this._binding.onActivation = t2, new Tt(this._binding);
  }
  onDeactivation(t2) {
    return this._binding.onDeactivation = t2, new Tt(this._binding);
  }
};
var Nt = class {
  _bindingWhenSyntax;
  _bindingOnSyntax;
  _binding;
  constructor(t2) {
    this._binding = t2, this._bindingWhenSyntax = new Tt(this._binding), this._bindingOnSyntax = new Dt(this._binding);
  }
  when(t2) {
    return this._bindingWhenSyntax.when(t2);
  }
  whenTargetNamed(t2) {
    return this._bindingWhenSyntax.whenTargetNamed(t2);
  }
  whenTargetIsDefault() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  }
  whenTargetTagged(t2, n2) {
    return this._bindingWhenSyntax.whenTargetTagged(t2, n2);
  }
  whenInjectedInto(t2) {
    return this._bindingWhenSyntax.whenInjectedInto(t2);
  }
  whenParentNamed(t2) {
    return this._bindingWhenSyntax.whenParentNamed(t2);
  }
  whenParentTagged(t2, n2) {
    return this._bindingWhenSyntax.whenParentTagged(t2, n2);
  }
  whenAnyAncestorIs(t2) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(t2);
  }
  whenNoAncestorIs(t2) {
    return this._bindingWhenSyntax.whenNoAncestorIs(t2);
  }
  whenAnyAncestorNamed(t2) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(t2);
  }
  whenAnyAncestorTagged(t2, n2) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(t2, n2);
  }
  whenNoAncestorNamed(t2) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(t2);
  }
  whenNoAncestorTagged(t2, n2) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(t2, n2);
  }
  whenAnyAncestorMatches(t2) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(t2);
  }
  whenNoAncestorMatches(t2) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(t2);
  }
  onActivation(t2) {
    return this._bindingOnSyntax.onActivation(t2);
  }
  onDeactivation(t2) {
    return this._bindingOnSyntax.onDeactivation(t2);
  }
};
var Ct = class {
  _binding;
  constructor(t2) {
    this._binding = t2;
  }
  inRequestScope() {
    return this._binding.scope = b.Request, new Nt(this._binding);
  }
  inSingletonScope() {
    return this._binding.scope = b.Singleton, new Nt(this._binding);
  }
  inTransientScope() {
    return this._binding.scope = b.Transient, new Nt(this._binding);
  }
};
var xt = class {
  _bindingInSyntax;
  _bindingWhenSyntax;
  _bindingOnSyntax;
  _binding;
  constructor(t2) {
    this._binding = t2, this._bindingWhenSyntax = new Tt(this._binding), this._bindingOnSyntax = new Dt(this._binding), this._bindingInSyntax = new Ct(t2);
  }
  inRequestScope() {
    return this._bindingInSyntax.inRequestScope();
  }
  inSingletonScope() {
    return this._bindingInSyntax.inSingletonScope();
  }
  inTransientScope() {
    return this._bindingInSyntax.inTransientScope();
  }
  when(t2) {
    return this._bindingWhenSyntax.when(t2);
  }
  whenTargetNamed(t2) {
    return this._bindingWhenSyntax.whenTargetNamed(t2);
  }
  whenTargetIsDefault() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  }
  whenTargetTagged(t2, n2) {
    return this._bindingWhenSyntax.whenTargetTagged(t2, n2);
  }
  whenInjectedInto(t2) {
    return this._bindingWhenSyntax.whenInjectedInto(t2);
  }
  whenParentNamed(t2) {
    return this._bindingWhenSyntax.whenParentNamed(t2);
  }
  whenParentTagged(t2, n2) {
    return this._bindingWhenSyntax.whenParentTagged(t2, n2);
  }
  whenAnyAncestorIs(t2) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(t2);
  }
  whenNoAncestorIs(t2) {
    return this._bindingWhenSyntax.whenNoAncestorIs(t2);
  }
  whenAnyAncestorNamed(t2) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(t2);
  }
  whenAnyAncestorTagged(t2, n2) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(t2, n2);
  }
  whenNoAncestorNamed(t2) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(t2);
  }
  whenNoAncestorTagged(t2, n2) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(t2, n2);
  }
  whenAnyAncestorMatches(t2) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(t2);
  }
  whenNoAncestorMatches(t2) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(t2);
  }
  onActivation(t2) {
    return this._bindingOnSyntax.onActivation(t2);
  }
  onDeactivation(t2) {
    return this._bindingOnSyntax.onDeactivation(t2);
  }
};
var Rt = class {
  _binding;
  constructor(t2) {
    this._binding = t2;
  }
  to(t2) {
    return this._binding.type = w.Instance, this._binding.implementationType = t2, new xt(this._binding);
  }
  toSelf() {
    if ("function" != typeof this._binding.serviceIdentifier) throw new Error("The toSelf function can only be applied when a constructor is used as service identifier");
    const t2 = this._binding.serviceIdentifier;
    return this.to(t2);
  }
  toConstantValue(t2) {
    return this._binding.type = w.ConstantValue, this._binding.cache = t2, this._binding.dynamicValue = null, this._binding.implementationType = null, this._binding.scope = b.Singleton, new Nt(this._binding);
  }
  toDynamicValue(t2) {
    return this._binding.type = w.DynamicValue, this._binding.cache = null, this._binding.dynamicValue = t2, this._binding.implementationType = null, new xt(this._binding);
  }
  toConstructor(t2) {
    return this._binding.type = w.Constructor, this._binding.implementationType = t2, this._binding.scope = b.Singleton, new Nt(this._binding);
  }
  toFactory(t2) {
    return this._binding.type = w.Factory, this._binding.factory = t2, this._binding.scope = b.Singleton, new Nt(this._binding);
  }
  toFunction(t2) {
    if ("function" != typeof t2) throw new Error("Value provided to function binding must be a function!");
    const n2 = this.toConstantValue(t2);
    return this._binding.type = w.Function, this._binding.scope = b.Singleton, n2;
  }
  toAutoFactory(t2) {
    return this._binding.type = w.Factory, this._binding.factory = (n2) => () => n2.container.get(t2), this._binding.scope = b.Singleton, new Nt(this._binding);
  }
  toAutoNamedFactory(t2) {
    return this._binding.type = w.Factory, this._binding.factory = (n2) => (e2) => n2.container.getNamed(t2, e2), new Nt(this._binding);
  }
  toProvider(t2) {
    return this._binding.type = w.Provider, this._binding.provider = t2, this._binding.scope = b.Singleton, new Nt(this._binding);
  }
  toService(t2) {
    this._binding.type = w.DynamicValue, Object.defineProperty(this._binding, "cache", { configurable: true, enumerable: true, get: () => null, set(t3) {
    } }), this._binding.dynamicValue = (n2) => {
      try {
        return n2.container.get(t2);
      } catch (e2) {
        return n2.container.getAsync(t2);
      }
    }, this._binding.implementationType = null;
  }
};
var Et = class _Et {
  bindings;
  activations;
  deactivations;
  middleware;
  moduleActivationStore;
  static of(t2, n2, e2, i2, r2) {
    const s2 = new _Et();
    return s2.bindings = t2, s2.middleware = n2, s2.deactivations = i2, s2.activations = e2, s2.moduleActivationStore = r2, s2;
  }
};
var Mt = class _Mt {
  _map;
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  getMap() {
    return this._map;
  }
  add(t2, n2) {
    if (this._checkNonNulish(t2), null == n2) throw new Error(D);
    const e2 = this._map.get(t2);
    void 0 !== e2 ? e2.push(n2) : this._map.set(t2, [n2]);
  }
  get(t2) {
    this._checkNonNulish(t2);
    const n2 = this._map.get(t2);
    if (void 0 !== n2) return n2;
    throw new Error(N);
  }
  remove(t2) {
    if (this._checkNonNulish(t2), !this._map.delete(t2)) throw new Error(N);
  }
  removeIntersection(t2) {
    this.traverse(((n2, e2) => {
      const i2 = t2.hasKey(n2) ? t2.get(n2) : void 0;
      if (void 0 !== i2) {
        const t3 = e2.filter(((t4) => !i2.some(((n3) => t4 === n3))));
        this._setValue(n2, t3);
      }
    }));
  }
  removeByCondition(t2) {
    const n2 = [];
    return this._map.forEach(((e2, i2) => {
      const r2 = [];
      for (const i3 of e2) {
        t2(i3) ? n2.push(i3) : r2.push(i3);
      }
      this._setValue(i2, r2);
    })), n2;
  }
  hasKey(t2) {
    return this._checkNonNulish(t2), this._map.has(t2);
  }
  clone() {
    const t2 = new _Mt();
    return this._map.forEach(((n2, e2) => {
      n2.forEach(((n3) => {
        var i2;
        t2.add(e2, "object" == typeof (i2 = n3) && null !== i2 && "clone" in i2 && "function" == typeof i2.clone ? n3.clone() : n3);
      }));
    })), t2;
  }
  traverse(t2) {
    this._map.forEach(((n2, e2) => {
      t2(e2, n2);
    }));
  }
  _checkNonNulish(t2) {
    if (null == t2) throw new Error(D);
  }
  _setValue(t2, n2) {
    n2.length > 0 ? this._map.set(t2, n2) : this._map.delete(t2);
  }
};
var Bt = class _Bt {
  _map = /* @__PURE__ */ new Map();
  remove(t2) {
    const n2 = this._map.get(t2);
    return void 0 === n2 ? this._getEmptyHandlersStore() : (this._map.delete(t2), n2);
  }
  addDeactivation(t2, n2, e2) {
    this._getModuleActivationHandlers(t2).onDeactivations.add(n2, e2);
  }
  addActivation(t2, n2, e2) {
    this._getModuleActivationHandlers(t2).onActivations.add(n2, e2);
  }
  clone() {
    const t2 = new _Bt();
    return this._map.forEach(((n2, e2) => {
      t2._map.set(e2, { onActivations: n2.onActivations.clone(), onDeactivations: n2.onDeactivations.clone() });
    })), t2;
  }
  _getModuleActivationHandlers(t2) {
    let n2 = this._map.get(t2);
    return void 0 === n2 && (n2 = this._getEmptyHandlersStore(), this._map.set(t2, n2)), n2;
  }
  _getEmptyHandlersStore() {
    return { onActivations: new Mt(), onDeactivations: new Mt() };
  }
};
var Pt = class _Pt {
  id;
  parent;
  options;
  _middleware;
  _bindingDictionary;
  _activations;
  _deactivations;
  _snapshots;
  _metadataReader;
  _moduleActivationStore;
  constructor(t2) {
    const n2 = t2 || {};
    if ("object" != typeof n2) throw new Error("Invalid Container constructor argument. Container options must be an object.");
    if (void 0 === n2.defaultScope) n2.defaultScope = b.Transient;
    else if (n2.defaultScope !== b.Singleton && n2.defaultScope !== b.Transient && n2.defaultScope !== b.Request) throw new Error('Invalid Container option. Default scope must be a string ("singleton" or "transient").');
    if (void 0 === n2.autoBindInjectable) n2.autoBindInjectable = false;
    else if ("boolean" != typeof n2.autoBindInjectable) throw new Error("Invalid Container option. Auto bind injectable must be a boolean");
    if (void 0 === n2.skipBaseClassChecks) n2.skipBaseClassChecks = false;
    else if ("boolean" != typeof n2.skipBaseClassChecks) throw new Error("Invalid Container option. Skip base check must be a boolean");
    this.options = { autoBindInjectable: n2.autoBindInjectable, defaultScope: n2.defaultScope, skipBaseClassChecks: n2.skipBaseClassChecks }, this.id = S(), this._bindingDictionary = new Mt(), this._snapshots = [], this._middleware = null, this._activations = new Mt(), this._deactivations = new Mt(), this.parent = null, this._metadataReader = new M(), this._moduleActivationStore = new Bt();
  }
  static merge(t2, n2, ...e2) {
    const i2 = new _Pt(), r2 = [t2, n2, ...e2].map(((t3) => U(t3))), s2 = U(i2);
    return r2.forEach(((t3) => {
      var n3;
      n3 = s2, t3.traverse(((t4, e3) => {
        e3.forEach(((t5) => {
          n3.add(t5.serviceIdentifier, t5.clone());
        }));
      }));
    })), i2;
  }
  load(...t2) {
    const n2 = this._getContainerModuleHelpersFactory();
    for (const e2 of t2) {
      const t3 = n2(e2.id);
      e2.registry(t3.bindFunction, t3.unbindFunction, t3.isboundFunction, t3.rebindFunction, t3.unbindAsyncFunction, t3.onActivationFunction, t3.onDeactivationFunction);
    }
  }
  async loadAsync(...t2) {
    const n2 = this._getContainerModuleHelpersFactory();
    for (const e2 of t2) {
      const t3 = n2(e2.id);
      await e2.registry(t3.bindFunction, t3.unbindFunction, t3.isboundFunction, t3.rebindFunction, t3.unbindAsyncFunction, t3.onActivationFunction, t3.onDeactivationFunction);
    }
  }
  unload(...t2) {
    t2.forEach(((t3) => {
      const n2 = this._removeModuleBindings(t3.id);
      this._deactivateSingletons(n2), this._removeModuleHandlers(t3.id);
    }));
  }
  async unloadAsync(...t2) {
    for (const n2 of t2) {
      const t3 = this._removeModuleBindings(n2.id);
      await this._deactivateSingletonsAsync(t3), this._removeModuleHandlers(n2.id);
    }
  }
  bind(t2) {
    return this._bind(this._buildBinding(t2));
  }
  rebind(t2) {
    return this.unbind(t2), this.bind(t2);
  }
  async rebindAsync(t2) {
    return await this.unbindAsync(t2), this.bind(t2);
  }
  unbind(t2) {
    if (this._bindingDictionary.hasKey(t2)) {
      const n2 = this._bindingDictionary.get(t2);
      this._deactivateSingletons(n2);
    }
    this._removeServiceFromDictionary(t2);
  }
  async unbindAsync(t2) {
    if (this._bindingDictionary.hasKey(t2)) {
      const n2 = this._bindingDictionary.get(t2);
      await this._deactivateSingletonsAsync(n2);
    }
    this._removeServiceFromDictionary(t2);
  }
  unbindAll() {
    this._bindingDictionary.traverse(((t2, n2) => {
      this._deactivateSingletons(n2);
    })), this._bindingDictionary = new Mt();
  }
  async unbindAllAsync() {
    const t2 = [];
    this._bindingDictionary.traverse(((n2, e2) => {
      t2.push(this._deactivateSingletonsAsync(e2));
    })), await Promise.all(t2), this._bindingDictionary = new Mt();
  }
  onActivation(t2, n2) {
    this._activations.add(t2, n2);
  }
  onDeactivation(t2, n2) {
    this._deactivations.add(t2, n2);
  }
  isBound(t2) {
    let n2 = this._bindingDictionary.hasKey(t2);
    return !n2 && this.parent && (n2 = this.parent.isBound(t2)), n2;
  }
  isCurrentBound(t2) {
    return this._bindingDictionary.hasKey(t2);
  }
  isBoundNamed(t2, n2) {
    return this.isBoundTagged(t2, s, n2);
  }
  isBoundTagged(t2, n2, s2) {
    let o2 = false;
    if (this._bindingDictionary.hasKey(t2)) {
      const a2 = this._bindingDictionary.get(t2), c2 = (function(t3, n3, s3) {
        const o3 = Y(n3, s3), a3 = e(o3);
        if (a3.kind === i.unmanaged) throw new Error("Unexpected metadata when creating target");
        const c3 = new r("", a3, "Variable"), d2 = new V(t3);
        return new H(n3, d2, null, [], c3);
      })(this, t2, { customTag: { key: n2, value: s2 }, isMultiInject: false });
      o2 = a2.some(((t3) => t3.constraint(c2)));
    }
    return !o2 && this.parent && (o2 = this.parent.isBoundTagged(t2, n2, s2)), o2;
  }
  snapshot() {
    this._snapshots.push(Et.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
  }
  restore() {
    const t2 = this._snapshots.pop();
    if (void 0 === t2) throw new Error("No snapshot available to restore.");
    this._bindingDictionary = t2.bindings, this._activations = t2.activations, this._deactivations = t2.deactivations, this._middleware = t2.middleware, this._moduleActivationStore = t2.moduleActivationStore;
  }
  createChild(t2) {
    const n2 = new _Pt(t2 || this.options);
    return n2.parent = this, n2;
  }
  applyMiddleware(...t2) {
    const n2 = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = t2.reduce(((t3, n3) => n3(t3)), n2);
  }
  applyCustomMetadataReader(t2) {
    this._metadataReader = t2;
  }
  get(t2) {
    const n2 = this._getNotAllArgs(t2, false, false);
    return this._getButThrowIfAsync(n2);
  }
  async getAsync(t2) {
    const n2 = this._getNotAllArgs(t2, false, false);
    return this._get(n2);
  }
  getTagged(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, false, false, n2, e2);
    return this._getButThrowIfAsync(i2);
  }
  async getTaggedAsync(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, false, false, n2, e2);
    return this._get(i2);
  }
  getNamed(t2, n2) {
    return this.getTagged(t2, s, n2);
  }
  async getNamedAsync(t2, n2) {
    return this.getTaggedAsync(t2, s, n2);
  }
  getAll(t2, n2) {
    const e2 = this._getAllArgs(t2, n2, false);
    return this._getButThrowIfAsync(e2);
  }
  async getAllAsync(t2, n2) {
    const e2 = this._getAllArgs(t2, n2, false);
    return this._getAll(e2);
  }
  getAllTagged(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, true, false, n2, e2);
    return this._getButThrowIfAsync(i2);
  }
  async getAllTaggedAsync(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, true, false, n2, e2);
    return this._getAll(i2);
  }
  getAllNamed(t2, n2) {
    return this.getAllTagged(t2, s, n2);
  }
  async getAllNamedAsync(t2, n2) {
    return this.getAllTaggedAsync(t2, s, n2);
  }
  resolve(t2) {
    const n2 = this.isBound(t2);
    n2 || this.bind(t2).toSelf();
    const e2 = this.get(t2);
    return n2 || this.unbind(t2), e2;
  }
  tryGet(t2) {
    const n2 = this._getNotAllArgs(t2, false, true);
    return this._getButThrowIfAsync(n2);
  }
  async tryGetAsync(t2) {
    const n2 = this._getNotAllArgs(t2, false, true);
    return this._get(n2);
  }
  tryGetTagged(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, false, true, n2, e2);
    return this._getButThrowIfAsync(i2);
  }
  async tryGetTaggedAsync(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, false, true, n2, e2);
    return this._get(i2);
  }
  tryGetNamed(t2, n2) {
    return this.tryGetTagged(t2, s, n2);
  }
  async tryGetNamedAsync(t2, n2) {
    return this.tryGetTaggedAsync(t2, s, n2);
  }
  tryGetAll(t2, n2) {
    const e2 = this._getAllArgs(t2, n2, true);
    return this._getButThrowIfAsync(e2);
  }
  async tryGetAllAsync(t2, n2) {
    const e2 = this._getAllArgs(t2, n2, true);
    return this._getAll(e2);
  }
  tryGetAllTagged(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, true, true, n2, e2);
    return this._getButThrowIfAsync(i2);
  }
  async tryGetAllTaggedAsync(t2, n2, e2) {
    const i2 = this._getNotAllArgs(t2, true, true, n2, e2);
    return this._getAll(i2);
  }
  tryGetAllNamed(t2, n2) {
    return this.tryGetAllTagged(t2, s, n2);
  }
  async tryGetAllNamedAsync(t2, n2) {
    return this.tryGetAllTaggedAsync(t2, s, n2);
  }
  _preDestroy(t2, n2) {
    if (void 0 !== t2 && Reflect.hasMetadata(f, t2)) {
      const e2 = Reflect.getMetadata(f, t2);
      return n2[e2.value]?.();
    }
  }
  _removeModuleHandlers(t2) {
    const n2 = this._moduleActivationStore.remove(t2);
    this._activations.removeIntersection(n2.onActivations), this._deactivations.removeIntersection(n2.onDeactivations);
  }
  _removeModuleBindings(t2) {
    return this._bindingDictionary.removeByCondition(((n2) => n2.moduleId === t2));
  }
  _deactivate(t2, n2) {
    const e2 = null == n2 ? void 0 : Object.getPrototypeOf(n2).constructor;
    try {
      if (this._deactivations.hasKey(t2.serviceIdentifier)) {
        const i3 = this._deactivateContainer(n2, this._deactivations.get(t2.serviceIdentifier).values());
        if (X(i3)) return this._handleDeactivationError(i3.then((async () => this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(t2, n2, e2))), t2.serviceIdentifier);
      }
      const i2 = this._propagateContainerDeactivationThenBindingAndPreDestroy(t2, n2, e2);
      if (X(i2)) return this._handleDeactivationError(i2, t2.serviceIdentifier);
    } catch (n3) {
      if (n3 instanceof Error) throw new Error(E(k(t2.serviceIdentifier), n3.message));
    }
  }
  async _handleDeactivationError(t2, n2) {
    try {
      await t2;
    } catch (t3) {
      if (t3 instanceof Error) throw new Error(E(k(n2), t3.message));
    }
  }
  _deactivateContainer(t2, n2) {
    let e2 = n2.next();
    for (; "function" == typeof e2.value; ) {
      const i2 = e2.value(t2);
      if (X(i2)) return i2.then((async () => this._deactivateContainerAsync(t2, n2)));
      e2 = n2.next();
    }
  }
  async _deactivateContainerAsync(t2, n2) {
    let e2 = n2.next();
    for (; "function" == typeof e2.value; ) await e2.value(t2), e2 = n2.next();
  }
  _getContainerModuleHelpersFactory() {
    const t2 = (t3) => (n3) => {
      const e3 = this._buildBinding(n3);
      return e3.moduleId = t3, this._bind(e3);
    }, n2 = () => (t3) => {
      this.unbind(t3);
    }, e2 = () => async (t3) => this.unbindAsync(t3), i2 = () => (t3) => this.isBound(t3), r2 = (n3) => {
      const e3 = t2(n3);
      return (t3) => (this.unbind(t3), e3(t3));
    }, s2 = (t3) => (n3, e3) => {
      this._moduleActivationStore.addActivation(t3, n3, e3), this.onActivation(n3, e3);
    }, o2 = (t3) => (n3, e3) => {
      this._moduleActivationStore.addDeactivation(t3, n3, e3), this.onDeactivation(n3, e3);
    };
    return (a2) => ({ bindFunction: t2(a2), isboundFunction: i2(), onActivationFunction: s2(a2), onDeactivationFunction: o2(a2), rebindFunction: r2(a2), unbindAsyncFunction: e2(), unbindFunction: n2() });
  }
  _bind(t2) {
    return this._bindingDictionary.add(t2.serviceIdentifier, t2), new Rt(t2);
  }
  _buildBinding(t2) {
    const n2 = this.options.defaultScope || b.Transient;
    return new I(t2, n2);
  }
  async _getAll(t2) {
    return Promise.all(this._get(t2));
  }
  _get(t2) {
    const n2 = { ...t2, contextInterceptor: (t3) => t3, targetType: m.Variable };
    if (this._middleware) {
      const t3 = this._middleware(n2);
      if (null == t3) throw new Error("Invalid return type in middleware. Middleware must return!");
      return t3;
    }
    return this._planAndResolve()(n2);
  }
  _getButThrowIfAsync(t2) {
    const n2 = this._get(t2);
    if (Z(n2)) throw new Error(`You are attempting to construct ${(function(t3) {
      return "function" == typeof t3 ? `[function/class ${t3.name || "<anonymous>"}]` : "symbol" == typeof t3 ? t3.toString() : `'${t3}'`;
    })(t2.serviceIdentifier)} in a synchronous way but it has asynchronous dependencies.`);
    return n2;
  }
  _getAllArgs(t2, n2, e2) {
    return { avoidConstraints: !n2?.enforceBindingConstraints, isMultiInject: true, isOptional: e2, serviceIdentifier: t2 };
  }
  _getNotAllArgs(t2, n2, e2, i2, r2) {
    return { avoidConstraints: false, isMultiInject: n2, isOptional: e2, key: i2, serviceIdentifier: t2, value: r2 };
  }
  _getPlanMetadataFromNextArgs(t2) {
    const n2 = { isMultiInject: t2.isMultiInject };
    return void 0 !== t2.key && (n2.customTag = { key: t2.key, value: t2.value }), true === t2.isOptional && (n2.isOptional = true), n2;
  }
  _planAndResolve() {
    return (t2) => {
      let n2 = Q(this._metadataReader, this, t2.targetType, t2.serviceIdentifier, this._getPlanMetadataFromNextArgs(t2), t2.avoidConstraints);
      n2 = t2.contextInterceptor(n2);
      const e2 = (function(t3) {
        return ut(t3.plan.rootRequest.requestScope)(t3.plan.rootRequest);
      })(n2);
      return e2;
    };
  }
  _deactivateIfSingleton(t2) {
    if (t2.activated) return X(t2.cache) ? t2.cache.then(((n2) => this._deactivate(t2, n2))) : this._deactivate(t2, t2.cache);
  }
  _deactivateSingletons(t2) {
    for (const n2 of t2) {
      if (X(this._deactivateIfSingleton(n2))) throw new Error("Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)");
    }
  }
  async _deactivateSingletonsAsync(t2) {
    await Promise.all(t2.map((async (t3) => this._deactivateIfSingleton(t3))));
  }
  _propagateContainerDeactivationThenBindingAndPreDestroy(t2, n2, e2) {
    return this.parent ? this._deactivate.bind(this.parent)(t2, n2) : this._bindingDeactivationAndPreDestroy(t2, n2, e2);
  }
  async _propagateContainerDeactivationThenBindingAndPreDestroyAsync(t2, n2, e2) {
    this.parent ? await this._deactivate.bind(this.parent)(t2, n2) : await this._bindingDeactivationAndPreDestroyAsync(t2, n2, e2);
  }
  _removeServiceFromDictionary(t2) {
    try {
      this._bindingDictionary.remove(t2);
    } catch (n2) {
      throw new Error(`Could not unbind serviceIdentifier: ${k(t2)}`);
    }
  }
  _bindingDeactivationAndPreDestroy(t2, n2, e2) {
    if ("function" == typeof t2.onDeactivation) {
      const i2 = t2.onDeactivation(n2);
      if (X(i2)) return i2.then((() => this._preDestroy(e2, n2)));
    }
    return this._preDestroy(e2, n2);
  }
  async _bindingDeactivationAndPreDestroyAsync(t2, n2, e2) {
    "function" == typeof t2.onDeactivation && await t2.onDeactivation(n2), await this._preDestroy(e2, n2);
  }
};
var kt = class {
  id;
  registry;
  constructor(t2) {
    this.id = S(), this.registry = t2;
  }
};
var qt = class {
  id;
  registry;
  constructor(t2) {
    this.id = S(), this.registry = t2;
  }
};
function Ft(t2, n2, e2, i2) {
  !(function(t3) {
    if (void 0 !== t3) throw new Error(R);
  })(n2), Ot(h, t2, e2.toString(), i2);
}
function jt(t2) {
  let n2 = [];
  if (Array.isArray(t2)) {
    n2 = t2;
    const e2 = (function(t3) {
      const n3 = /* @__PURE__ */ new Set();
      for (const e3 of t3) {
        if (n3.has(e3)) return e3;
        n3.add(e3);
      }
    })(n2.map(((t3) => t3.key)));
    if (void 0 !== e2) throw new Error(`${T} ${e2.toString()}`);
  } else n2 = [t2];
  return n2;
}
function Ot(t2, n2, e2, i2) {
  const r2 = jt(i2);
  let s2 = {};
  Reflect.hasOwnMetadata(t2, n2) && (s2 = Reflect.getMetadata(t2, n2));
  let o2 = s2[e2];
  if (void 0 === o2) o2 = [];
  else for (const t3 of o2) if (r2.some(((n3) => n3.key === t3.key))) throw new Error(`${T} ${t3.key.toString()}`);
  o2.push(...r2), s2[e2] = o2, Reflect.defineMetadata(t2, s2, n2);
}
function $t(t2) {
  return (n2, e2, i2) => {
    "number" == typeof i2 ? Ft(n2, e2, i2, t2) : (function(t3, n3, e3) {
      if (void 0 !== t3.prototype) throw new Error(R);
      Ot(l, t3.constructor, n3, e3);
    })(n2, e2, t2);
  };
}
function Vt(t2, n2) {
  Reflect.decorate(t2, n2);
}
function Wt(t2, n2) {
  return function(e2, i2) {
    n2(e2, i2, t2);
  };
}
function Gt(t2, n2, e2) {
  "number" == typeof e2 ? Vt([Wt(e2, t2)], n2) : "string" == typeof e2 ? Reflect.decorate([t2], n2, e2) : Vt([t2], n2);
}
function Kt() {
  return function(t2) {
    if (Reflect.hasOwnMetadata(g, t2)) throw new Error("Cannot apply @injectable decorator multiple times.");
    const n2 = Reflect.getMetadata(y, t2) || [];
    return Reflect.defineMetadata(g, n2, t2), t2;
  };
}
function Ht(t2, n2) {
  return $t(new W(t2, n2));
}
function Ut(t2) {
  return $t(new W(s, t2));
}
function Lt(t2) {
  return (n2) => (e2, i2, r2) => {
    if (void 0 === n2) {
      const t3 = "function" == typeof e2 ? e2.name : e2.constructor.name;
      throw new Error(`@inject called with undefined this could mean that the class ${t3} has a circular dependency problem. You can use a LazyServiceIdentifer to overcome this limitation.`);
    }
    $t(new W(t2, n2))(e2, i2, r2);
  };
}
var Yt = Lt(d);
function zt() {
  return $t(new W(c, true));
}
function Jt() {
  return function(t2, n2, e2) {
    Ft(t2, n2, e2, new W(a, true));
  };
}
var Qt = Lt(u);
function Xt(t2) {
  return function(n2, e2, i2) {
    Ft(n2, e2, i2, new W(o, t2));
  };
}
function Zt(t2, n2) {
  return () => (e2, i2) => {
    const r2 = new W(t2, i2);
    if (Reflect.hasOwnMetadata(t2, e2.constructor)) throw new Error(n2);
    Reflect.defineMetadata(t2, r2, e2.constructor);
  };
}
var tn = Zt(p, "Cannot apply @postConstruct decorator multiple times in the same class");
var nn = Zt(f, "Cannot apply @preDestroy decorator multiple times in the same class");
var en = t;
var rn = v;
export {
  qt as AsyncContainerModule,
  b as BindingScopeEnum,
  w as BindingTypeEnum,
  Pt as Container,
  kt as ContainerModule,
  en as LazyServiceIdentifer,
  LazyServiceIdentifier,
  rn as METADATA_KEY,
  M as MetadataReader,
  m as TargetTypeEnum,
  $t as createTaggedDecorator,
  Gt as decorate,
  k as getServiceIdentifierAsString,
  S as id,
  Yt as inject,
  Kt as injectable,
  rt as multiBindToService,
  Qt as multiInject,
  Ut as named,
  St as namedConstraint,
  zt as optional,
  tn as postConstruct,
  nn as preDestroy,
  Ht as tagged,
  At as taggedConstraint,
  Xt as targetName,
  mt as traverseAncerstors,
  It as typeConstraint,
  Jt as unmanaged
};
//# sourceMappingURL=inversify.development.mjs.map