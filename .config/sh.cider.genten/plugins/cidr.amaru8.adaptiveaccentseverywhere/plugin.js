(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("div[data-v-ef148765]{margin:10px 0}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var ty = { cider: "2" };
/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _n(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const je = ty.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ki = ty.NODE_ENV !== "production" ? Object.freeze([]) : [], Ot = () => {
}, JA = () => !1, ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ba = (e) => e.startsWith("onUpdate:"), st = Object.assign, Xl = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, XA = Object.prototype.hasOwnProperty, Re = (e, t) => XA.call(e, t), pe = Array.isArray, qi = (e) => os(e) === "[object Map]", is = (e) => os(e) === "[object Set]", Fd = (e) => os(e) === "[object Date]", be = (e) => typeof e == "function", ct = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Ql = (e) => (Je(e) || be(e)) && be(e.then) && be(e.catch), QA = Object.prototype.toString, os = (e) => QA.call(e), Zl = (e) => os(e).slice(8, -1), ec = (e) => os(e) === "[object Object]", tc = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Uo = /* @__PURE__ */ _n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ZA = /* @__PURE__ */ _n(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), uu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, ex = /-(\w)/g, pr = uu(
  (e) => e.replace(ex, (t, r) => r ? r.toUpperCase() : "")
), tx = /\B([A-Z])/g, tr = uu(
  (e) => e.replace(tx, "-$1").toLowerCase()
), fu = uu((e) => e.charAt(0).toUpperCase() + e.slice(1)), ri = uu(
  (e) => e ? `on${fu(e)}` : ""
), Un = (e, t) => !Object.is(e, t), Vi = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Ua = (e, t, r, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: r
  });
}, ry = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Vd = (e) => {
  const t = ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Bd;
const rc = () => Bd || (Bd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nc(e) {
  if (pe(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = ct(o) ? ox(o) : nc(o);
      if (s)
        for (const u in s)
          t[u] = s[u];
    }
    return t;
  } else if (ct(e) || Je(e))
    return e;
}
const rx = /;(?![^(]*\))/g, nx = /:([^]+)/, ix = /\/\*[^]*?\*\//g;
function ox(e) {
  const t = {};
  return e.replace(ix, "").split(rx).forEach((r) => {
    if (r) {
      const o = r.split(nx);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ic(e) {
  let t = "";
  if (ct(e))
    t = e;
  else if (pe(e))
    for (let r = 0; r < e.length; r++) {
      const o = ic(e[r]);
      o && (t += o + " ");
    }
  else if (Je(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const sx = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ax = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ux = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", fx = /* @__PURE__ */ _n(sx), lx = /* @__PURE__ */ _n(ax), cx = /* @__PURE__ */ _n(ux), px = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hx = /* @__PURE__ */ _n(px);
function ny(e) {
  return !!e || e === "";
}
function dx(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let o = 0; r && o < e.length; o++)
    r = ss(e[o], t[o]);
  return r;
}
function ss(e, t) {
  if (e === t) return !0;
  let r = Fd(e), o = Fd(t);
  if (r || o)
    return r && o ? e.getTime() === t.getTime() : !1;
  if (r = Bn(e), o = Bn(t), r || o)
    return e === t;
  if (r = pe(e), o = pe(t), r || o)
    return r && o ? dx(e, t) : !1;
  if (r = Je(e), o = Je(t), r || o) {
    if (!r || !o)
      return !1;
    const s = Object.keys(e).length, u = Object.keys(t).length;
    if (s !== u)
      return !1;
    for (const f in e) {
      const c = e.hasOwnProperty(f), p = t.hasOwnProperty(f);
      if (c && !p || !c && p || !ss(e[f], t[f]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function oc(e, t) {
  return e.findIndex((r) => ss(r, t));
}
var Ke = { cider: "2" };
function qr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let lr;
class iy {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = lr, !t && lr && (this.index = (lr.scopes || (lr.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = lr;
      try {
        return lr = this, t();
      } finally {
        lr = r;
      }
    } else Ke.NODE_ENV !== "production" && qr("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    lr = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    lr = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, o;
      for (r = 0, o = this.effects.length; r < o; r++)
        this.effects[r].stop();
      for (r = 0, o = this.cleanups.length; r < o; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, o = this.scopes.length; r < o; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function gx(e) {
  return new iy(e);
}
function vx() {
  return lr;
}
let We;
const kf = /* @__PURE__ */ new WeakSet();
class oy {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, lr && lr.active && lr.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, kf.has(this) && (kf.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ay(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ud(this), uy(this);
    const t = We, r = Ir;
    We = this, Ir = !0;
    try {
      return this.fn();
    } finally {
      Ke.NODE_ENV !== "production" && We !== this && qr(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), fy(this), We = t, Ir = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        uc(t);
      this.deps = this.depsTail = void 0, Ud(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? kf.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gl(this) && this.run();
  }
  get dirty() {
    return gl(this);
  }
}
let sy = 0, ki;
function ay(e) {
  e.flags |= 8, e.next = ki, ki = e;
}
function sc() {
  sy++;
}
function ac() {
  if (--sy > 0)
    return;
  let e;
  for (; ki; ) {
    let t = ki, r;
    for (; t; )
      t.flags & 1 || (t.flags &= -9), t = t.next;
    for (t = ki, ki = void 0; t; ) {
      if (r = t.next, t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function uy(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fy(e) {
  let t, r = e.depsTail, o = r;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === r && (r = s), uc(o), yx(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = r;
}
function gl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ly(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ly(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Yo))
    return;
  e.globalVersion = Yo;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !gl(e)) {
    e.flags &= -3;
    return;
  }
  const r = We, o = Ir;
  We = e, Ir = !0;
  try {
    uy(e);
    const s = e.fn(e._value);
    (t.version === 0 || Un(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    We = r, Ir = o, fy(e), e.flags &= -3;
  }
}
function uc(e, t = !1) {
  const { dep: r, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), r.subs === e && (r.subs = o), Ke.NODE_ENV !== "production" && r.subsHead === e && (r.subsHead = s), !r.subs && r.computed) {
    r.computed.flags &= -5;
    for (let u = r.computed.deps; u; u = u.nextDep)
      uc(u, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function yx(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Ir = !0;
const cy = [];
function mn() {
  cy.push(Ir), Ir = !1;
}
function bn() {
  const e = cy.pop();
  Ir = e === void 0 ? !0 : e;
}
function Ud(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = We;
    We = void 0;
    try {
      t();
    } finally {
      We = r;
    }
  }
}
let Yo = 0;
class _x {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class fc {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0, Ke.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!We || !Ir || We === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== We)
      r = this.activeLink = new _x(We, this), We.deps ? (r.prevDep = We.depsTail, We.depsTail.nextDep = r, We.depsTail = r) : We.deps = We.depsTail = r, py(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const o = r.nextDep;
      o.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = o), r.prevDep = We.depsTail, r.nextDep = void 0, We.depsTail.nextDep = r, We.depsTail = r, We.deps === r && (We.deps = o);
    }
    return Ke.NODE_ENV !== "production" && We.onTrack && We.onTrack(
      st(
        {
          effect: We
        },
        t
      )
    ), r;
  }
  trigger(t) {
    this.version++, Yo++, this.notify(t);
  }
  notify(t) {
    sc();
    try {
      if (Ke.NODE_ENV !== "production")
        for (let r = this.subsHead; r; r = r.nextSub)
          r.sub.onTrigger && !(r.sub.flags & 8) && r.sub.onTrigger(
            st(
              {
                effect: r.sub
              },
              t
            )
          );
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      ac();
    }
  }
}
function py(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        py(o);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), Ke.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const vl = /* @__PURE__ */ new WeakMap(), ai = Symbol(
  Ke.NODE_ENV !== "production" ? "Object iterate" : ""
), yl = Symbol(
  Ke.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Jo = Symbol(
  Ke.NODE_ENV !== "production" ? "Array iterate" : ""
);
function At(e, t, r) {
  if (Ir && We) {
    let o = vl.get(e);
    o || vl.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(r);
    s || (o.set(r, s = new fc()), s.target = e, s.map = o, s.key = r), Ke.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: r
    }) : s.track();
  }
}
function Kr(e, t, r, o, s, u) {
  const f = vl.get(e);
  if (!f) {
    Yo++;
    return;
  }
  const c = (p) => {
    p && (Ke.NODE_ENV !== "production" ? p.trigger({
      target: e,
      type: t,
      key: r,
      newValue: o,
      oldValue: s,
      oldTarget: u
    }) : p.trigger());
  };
  if (sc(), t === "clear")
    f.forEach(c);
  else {
    const p = pe(e), g = p && tc(r);
    if (p && r === "length") {
      const y = Number(o);
      f.forEach((_, m) => {
        (m === "length" || m === Jo || !Bn(m) && m >= y) && c(_);
      });
    } else
      switch (r !== void 0 && c(f.get(r)), g && c(f.get(Jo)), t) {
        case "add":
          p ? g && c(f.get("length")) : (c(f.get(ai)), qi(e) && c(f.get(yl)));
          break;
        case "delete":
          p || (c(f.get(ai)), qi(e) && c(f.get(yl)));
          break;
        case "set":
          qi(e) && c(f.get(ai));
          break;
      }
  }
  ac();
}
function Di(e) {
  const t = Oe(e);
  return t === e ? t : (At(t, "iterate", Jo), rr(e) ? t : t.map(Kt));
}
function lc(e) {
  return At(e = Oe(e), "iterate", Jo), e;
}
const mx = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gf(this, Symbol.iterator, Kt);
  },
  concat(...e) {
    return Di(this).concat(
      ...e.map((t) => pe(t) ? Di(t) : t)
    );
  },
  entries() {
    return Gf(this, "entries", (e) => (e[1] = Kt(e[1]), e));
  },
  every(e, t) {
    return un(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return un(this, "filter", e, t, (r) => r.map(Kt), arguments);
  },
  find(e, t) {
    return un(this, "find", e, t, Kt, arguments);
  },
  findIndex(e, t) {
    return un(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return un(this, "findLast", e, t, Kt, arguments);
  },
  findLastIndex(e, t) {
    return un(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return un(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Kf(this, "includes", e);
  },
  indexOf(...e) {
    return Kf(this, "indexOf", e);
  },
  join(e) {
    return Di(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Kf(this, "lastIndexOf", e);
  },
  map(e, t) {
    return un(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Co(this, "pop");
  },
  push(...e) {
    return Co(this, "push", e);
  },
  reduce(e, ...t) {
    return Hd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hd(this, "reduceRight", e, t);
  },
  shift() {
    return Co(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return un(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Co(this, "splice", e);
  },
  toReversed() {
    return Di(this).toReversed();
  },
  toSorted(e) {
    return Di(this).toSorted(e);
  },
  toSpliced(...e) {
    return Di(this).toSpliced(...e);
  },
  unshift(...e) {
    return Co(this, "unshift", e);
  },
  values() {
    return Gf(this, "values", Kt);
  }
};
function Gf(e, t, r) {
  const o = lc(e), s = o[t]();
  return o !== e && !rr(e) && (s._next = s.next, s.next = () => {
    const u = s._next();
    return u.value && (u.value = r(u.value)), u;
  }), s;
}
const bx = Array.prototype;
function un(e, t, r, o, s, u) {
  const f = lc(e), c = f !== e && !rr(e), p = f[t];
  if (p !== bx[t]) {
    const _ = p.apply(e, u);
    return c ? Kt(_) : _;
  }
  let g = r;
  f !== e && (c ? g = function(_, m) {
    return r.call(this, Kt(_), m, e);
  } : r.length > 2 && (g = function(_, m) {
    return r.call(this, _, m, e);
  }));
  const y = p.call(f, g, o);
  return c && s ? s(y) : y;
}
function Hd(e, t, r, o) {
  const s = lc(e);
  let u = r;
  return s !== e && (rr(e) ? r.length > 3 && (u = function(f, c, p) {
    return r.call(this, f, c, p, e);
  }) : u = function(f, c, p) {
    return r.call(this, f, Kt(c), p, e);
  }), s[t](u, ...o);
}
function Kf(e, t, r) {
  const o = Oe(e);
  At(o, "iterate", Jo);
  const s = o[t](...r);
  return (s === -1 || s === !1) && Ha(r[0]) ? (r[0] = Oe(r[0]), o[t](...r)) : s;
}
function Co(e, t, r = []) {
  mn(), sc();
  const o = Oe(e)[t].apply(e, r);
  return ac(), bn(), o;
}
const wx = /* @__PURE__ */ _n("__proto__,__v_isRef,__isVue"), hy = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn)
);
function Ex(e) {
  Bn(e) || (e = String(e));
  const t = Oe(this);
  return At(t, "has", e), t.hasOwnProperty(e);
}
class dy {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, o) {
    const s = this._isReadonly, u = this._isShallow;
    if (r === "__v_isReactive")
      return !s;
    if (r === "__v_isReadonly")
      return s;
    if (r === "__v_isShallow")
      return u;
    if (r === "__v_raw")
      return o === (s ? u ? wy : by : u ? my : _y).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const f = pe(t);
    if (!s) {
      let p;
      if (f && (p = mx[r]))
        return p;
      if (r === "hasOwnProperty")
        return Ex;
    }
    const c = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      St(t) ? t : o
    );
    return (Bn(r) ? hy.has(r) : wx(r)) || (s || At(t, "get", r), u) ? c : St(c) ? f && tc(r) ? c : c.value : Je(c) ? s ? Ey(c) : pc(c) : c;
  }
}
class gy extends dy {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, o, s) {
    let u = t[r];
    if (!this._isShallow) {
      const p = yn(u);
      if (!rr(o) && !yn(o) && (u = Oe(u), o = Oe(o)), !pe(t) && St(u) && !St(o))
        return p ? !1 : (u.value = o, !0);
    }
    const f = pe(t) && tc(r) ? Number(r) < t.length : Re(t, r), c = Reflect.set(
      t,
      r,
      o,
      St(t) ? t : s
    );
    return t === Oe(s) && (f ? Un(o, u) && Kr(t, "set", r, o, u) : Kr(t, "add", r, o)), c;
  }
  deleteProperty(t, r) {
    const o = Re(t, r), s = t[r], u = Reflect.deleteProperty(t, r);
    return u && o && Kr(t, "delete", r, void 0, s), u;
  }
  has(t, r) {
    const o = Reflect.has(t, r);
    return (!Bn(r) || !hy.has(r)) && At(t, "has", r), o;
  }
  ownKeys(t) {
    return At(
      t,
      "iterate",
      pe(t) ? "length" : ai
    ), Reflect.ownKeys(t);
  }
}
class vy extends dy {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return Ke.NODE_ENV !== "production" && qr(
      `Set operation on key "${String(r)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, r) {
    return Ke.NODE_ENV !== "production" && qr(
      `Delete operation on key "${String(r)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ox = /* @__PURE__ */ new gy(), Sx = /* @__PURE__ */ new vy(), Ax = /* @__PURE__ */ new gy(!0), xx = /* @__PURE__ */ new vy(!0), cc = (e) => e, lu = (e) => Reflect.getPrototypeOf(e);
function fa(e, t, r = !1, o = !1) {
  e = e.__v_raw;
  const s = Oe(e), u = Oe(t);
  r || (Un(t, u) && At(s, "get", t), At(s, "get", u));
  const { has: f } = lu(s), c = o ? cc : r ? dc : Kt;
  if (f.call(s, t))
    return c(e.get(t));
  if (f.call(s, u))
    return c(e.get(u));
  e !== s && e.get(t);
}
function la(e, t = !1) {
  const r = this.__v_raw, o = Oe(r), s = Oe(e);
  return t || (Un(e, s) && At(o, "has", e), At(o, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s);
}
function ca(e, t = !1) {
  return e = e.__v_raw, !t && At(Oe(e), "iterate", ai), Reflect.get(e, "size", e);
}
function Wd(e, t = !1) {
  !t && !rr(e) && !yn(e) && (e = Oe(e));
  const r = Oe(this);
  return lu(r).has.call(r, e) || (r.add(e), Kr(r, "add", e, e)), this;
}
function jd(e, t, r = !1) {
  !r && !rr(t) && !yn(t) && (t = Oe(t));
  const o = Oe(this), { has: s, get: u } = lu(o);
  let f = s.call(o, e);
  f ? Ke.NODE_ENV !== "production" && yy(o, s, e) : (e = Oe(e), f = s.call(o, e));
  const c = u.call(o, e);
  return o.set(e, t), f ? Un(t, c) && Kr(o, "set", e, t, c) : Kr(o, "add", e, t), this;
}
function kd(e) {
  const t = Oe(this), { has: r, get: o } = lu(t);
  let s = r.call(t, e);
  s ? Ke.NODE_ENV !== "production" && yy(t, r, e) : (e = Oe(e), s = r.call(t, e));
  const u = o ? o.call(t, e) : void 0, f = t.delete(e);
  return s && Kr(t, "delete", e, void 0, u), f;
}
function Gd() {
  const e = Oe(this), t = e.size !== 0, r = Ke.NODE_ENV !== "production" ? qi(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Kr(e, "clear", void 0, void 0, r), o;
}
function pa(e, t) {
  return function(o, s) {
    const u = this, f = u.__v_raw, c = Oe(f), p = t ? cc : e ? dc : Kt;
    return !e && At(c, "iterate", ai), f.forEach((g, y) => o.call(s, p(g), p(y), u));
  };
}
function ha(e, t, r) {
  return function(...o) {
    const s = this.__v_raw, u = Oe(s), f = qi(u), c = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, g = s[e](...o), y = r ? cc : t ? dc : Kt;
    return !t && At(
      u,
      "iterate",
      p ? yl : ai
    ), {
      // iterator protocol
      next() {
        const { value: _, done: m } = g.next();
        return m ? { value: _, done: m } : {
          value: c ? [y(_[0]), y(_[1])] : y(_),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function In(e) {
  return function(...t) {
    if (Ke.NODE_ENV !== "production") {
      const r = t[0] ? `on key "${t[0]}" ` : "";
      qr(
        `${fu(e)} operation ${r}failed: target is readonly.`,
        Oe(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $x() {
  const e = {
    get(u) {
      return fa(this, u);
    },
    get size() {
      return ca(this);
    },
    has: la,
    add: Wd,
    set: jd,
    delete: kd,
    clear: Gd,
    forEach: pa(!1, !1)
  }, t = {
    get(u) {
      return fa(this, u, !1, !0);
    },
    get size() {
      return ca(this);
    },
    has: la,
    add(u) {
      return Wd.call(this, u, !0);
    },
    set(u, f) {
      return jd.call(this, u, f, !0);
    },
    delete: kd,
    clear: Gd,
    forEach: pa(!1, !0)
  }, r = {
    get(u) {
      return fa(this, u, !0);
    },
    get size() {
      return ca(this, !0);
    },
    has(u) {
      return la.call(this, u, !0);
    },
    add: In("add"),
    set: In("set"),
    delete: In("delete"),
    clear: In("clear"),
    forEach: pa(!0, !1)
  }, o = {
    get(u) {
      return fa(this, u, !0, !0);
    },
    get size() {
      return ca(this, !0);
    },
    has(u) {
      return la.call(this, u, !0);
    },
    add: In("add"),
    set: In("set"),
    delete: In("delete"),
    clear: In("clear"),
    forEach: pa(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((u) => {
    e[u] = ha(u, !1, !1), r[u] = ha(u, !0, !1), t[u] = ha(u, !1, !0), o[u] = ha(
      u,
      !0,
      !0
    );
  }), [
    e,
    r,
    t,
    o
  ];
}
const [
  Tx,
  Cx,
  Nx,
  Ix
] = /* @__PURE__ */ $x();
function cu(e, t) {
  const r = t ? e ? Ix : Nx : e ? Cx : Tx;
  return (o, s, u) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    Re(r, s) && s in o ? r : o,
    s,
    u
  );
}
const Dx = {
  get: /* @__PURE__ */ cu(!1, !1)
}, Px = {
  get: /* @__PURE__ */ cu(!1, !0)
}, Lx = {
  get: /* @__PURE__ */ cu(!0, !1)
}, Mx = {
  get: /* @__PURE__ */ cu(!0, !0)
};
function yy(e, t, r) {
  const o = Oe(r);
  if (o !== r && t.call(e, o)) {
    const s = Zl(e);
    qr(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const _y = /* @__PURE__ */ new WeakMap(), my = /* @__PURE__ */ new WeakMap(), by = /* @__PURE__ */ new WeakMap(), wy = /* @__PURE__ */ new WeakMap();
function Rx(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Fx(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rx(Zl(e));
}
function pc(e) {
  return yn(e) ? e : pu(
    e,
    !1,
    Ox,
    Dx,
    _y
  );
}
function Vx(e) {
  return pu(
    e,
    !1,
    Ax,
    Px,
    my
  );
}
function Ey(e) {
  return pu(
    e,
    !0,
    Sx,
    Lx,
    by
  );
}
function kr(e) {
  return pu(
    e,
    !0,
    xx,
    Mx,
    wy
  );
}
function pu(e, t, r, o, s) {
  if (!Je(e))
    return Ke.NODE_ENV !== "production" && qr(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const u = s.get(e);
  if (u)
    return u;
  const f = Fx(e);
  if (f === 0)
    return e;
  const c = new Proxy(
    e,
    f === 2 ? o : r
  );
  return s.set(e, c), c;
}
function zi(e) {
  return yn(e) ? zi(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yn(e) {
  return !!(e && e.__v_isReadonly);
}
function rr(e) {
  return !!(e && e.__v_isShallow);
}
function Ha(e) {
  return e ? !!e.__v_raw : !1;
}
function Oe(e) {
  const t = e && e.__v_raw;
  return t ? Oe(t) : e;
}
function hc(e) {
  return !Re(e, "__v_skip") && Object.isExtensible(e) && Ua(e, "__v_skip", !0), e;
}
const Kt = (e) => Je(e) ? pc(e) : e, dc = (e) => Je(e) ? Ey(e) : e;
function St(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Oy(e) {
  return Bx(e, !1);
}
function Bx(e, t) {
  return St(e) ? e : new Ux(e, t);
}
class Ux {
  constructor(t, r) {
    this.dep = new fc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : Oe(t), this._value = r ? t : Kt(t), this.__v_isShallow = r;
  }
  get value() {
    return Ke.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, o = this.__v_isShallow || rr(t) || yn(t);
    t = o ? t : Oe(t), Un(t, r) && (this._rawValue = t, this._value = o ? t : Kt(t), Ke.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: r
    }) : this.dep.trigger());
  }
}
function _t(e) {
  return St(e) ? e.value : e;
}
const Hx = {
  get: (e, t, r) => t === "__v_raw" ? e : _t(Reflect.get(e, t, r)),
  set: (e, t, r, o) => {
    const s = e[t];
    return St(s) && !St(r) ? (s.value = r, !0) : Reflect.set(e, t, r, o);
  }
};
function Sy(e) {
  return zi(e) ? e : new Proxy(e, Hx);
}
class Wx {
  constructor(t, r, o) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new fc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Yo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    We !== this)
      return ay(this), !0;
  }
  get value() {
    const t = Ke.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ly(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ke.NODE_ENV !== "production" && qr("Write operation failed: computed value is readonly");
  }
}
function jx(e, t, r = !1) {
  let o, s;
  be(e) ? o = e : (o = e.get, s = e.set);
  const u = new Wx(o, s, r);
  return Ke.NODE_ENV !== "production" && t && !r && (u.onTrack = t.onTrack, u.onTrigger = t.onTrigger), u;
}
const da = {}, Wa = /* @__PURE__ */ new WeakMap();
let ni;
function kx(e, t = !1, r = ni) {
  if (r) {
    let o = Wa.get(r);
    o || Wa.set(r, o = []), o.push(e);
  } else Ke.NODE_ENV !== "production" && !t && qr(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Gx(e, t, r = je) {
  const { immediate: o, deep: s, once: u, scheduler: f, augmentJob: c, call: p } = r, g = (V) => {
    (r.onWarn || qr)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, y = (V) => s ? V : rr(V) || s === !1 || s === 0 ? vn(V, 1) : vn(V);
  let _, m, A, O, $ = !1, N = !1;
  if (St(e) ? (m = () => e.value, $ = rr(e)) : zi(e) ? (m = () => y(e), $ = !0) : pe(e) ? (N = !0, $ = e.some((V) => zi(V) || rr(V)), m = () => e.map((V) => {
    if (St(V))
      return V.value;
    if (zi(V))
      return y(V);
    if (be(V))
      return p ? p(V, 2) : V();
    Ke.NODE_ENV !== "production" && g(V);
  })) : be(e) ? t ? m = p ? () => p(e, 2) : e : m = () => {
    if (A) {
      mn();
      try {
        A();
      } finally {
        bn();
      }
    }
    const V = ni;
    ni = _;
    try {
      return p ? p(e, 3, [O]) : e(O);
    } finally {
      ni = V;
    }
  } : (m = Ot, Ke.NODE_ENV !== "production" && g(e)), t && s) {
    const V = m, ee = s === !0 ? 1 / 0 : s;
    m = () => vn(V(), ee);
  }
  const R = vx(), L = () => {
    _.stop(), R && Xl(R.effects, _);
  };
  if (u && t) {
    const V = t;
    t = (...ee) => {
      V(...ee), L();
    };
  }
  let D = N ? new Array(e.length).fill(da) : da;
  const X = (V) => {
    if (!(!(_.flags & 1) || !_.dirty && !V))
      if (t) {
        const ee = _.run();
        if (s || $ || (N ? ee.some((he, se) => Un(he, D[se])) : Un(ee, D))) {
          A && A();
          const he = ni;
          ni = _;
          try {
            const se = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              D === da ? void 0 : N && D[0] === da ? [] : D,
              O
            ];
            p ? p(t, 3, se) : (
              // @ts-expect-error
              t(...se)
            ), D = ee;
          } finally {
            ni = he;
          }
        }
      } else
        _.run();
  };
  return c && c(X), _ = new oy(m), _.scheduler = f ? () => f(X, !1) : X, O = (V) => kx(V, !1, _), A = _.onStop = () => {
    const V = Wa.get(_);
    if (V) {
      if (p)
        p(V, 4);
      else
        for (const ee of V) ee();
      Wa.delete(_);
    }
  }, Ke.NODE_ENV !== "production" && (_.onTrack = r.onTrack, _.onTrigger = r.onTrigger), t ? o ? X(!0) : D = _.run() : f ? f(X.bind(null, !0), !0) : _.run(), L.pause = _.pause.bind(_), L.resume = _.resume.bind(_), L.stop = L, L;
}
function vn(e, t = 1 / 0, r) {
  if (t <= 0 || !Je(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, St(e))
    vn(e.value, t, r);
  else if (pe(e))
    for (let o = 0; o < e.length; o++)
      vn(e[o], t, r);
  else if (is(e) || qi(e))
    e.forEach((o) => {
      vn(o, t, r);
    });
  else if (ec(e)) {
    for (const o in e)
      vn(e[o], t, r);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && vn(e[o], t, r);
  }
  return e;
}
var C = { cider: "2" };
const ui = [];
function Aa(e) {
  ui.push(e);
}
function xa() {
  ui.pop();
}
let qf = !1;
function J(e, ...t) {
  if (qf) return;
  qf = !0, mn();
  const r = ui.length ? ui[ui.length - 1].component : null, o = r && r.appContext.config.warnHandler, s = Kx();
  if (o)
    no(
      o,
      r,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((u) => {
          var f, c;
          return (c = (f = u.toString) == null ? void 0 : f.call(u)) != null ? c : JSON.stringify(u);
        }).join(""),
        r && r.proxy,
        s.map(
          ({ vnode: u }) => `at <${mu(r, u.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const u = [`[Vue warn]: ${e}`, ...t];
    s.length && u.push(`
`, ...qx(s)), console.warn(...u);
  }
  bn(), qf = !1;
}
function Kx() {
  let e = ui[ui.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function qx(e) {
  const t = [];
  return e.forEach((r, o) => {
    t.push(...o === 0 ? [] : [`
`], ...zx(r));
  }), t;
}
function zx({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${mu(
    e.component,
    e.type,
    o
  )}`, u = ">" + r;
  return e.props ? [s, ...Yx(e.props), u] : [s + u];
}
function Yx(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((o) => {
    t.push(...Ay(o, e[o]));
  }), r.length > 3 && t.push(" ..."), t;
}
function Ay(e, t, r) {
  return ct(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : St(t) ? (t = Ay(e, Oe(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : be(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Oe(t), r ? t : [`${e}=`, t]);
}
const gc = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function no(e, t, r, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    as(s, t, r);
  }
}
function zr(e, t, r, o) {
  if (be(e)) {
    const s = no(e, t, r, o);
    return s && Ql(s) && s.catch((u) => {
      as(u, t, r);
    }), s;
  }
  if (pe(e)) {
    const s = [];
    for (let u = 0; u < e.length; u++)
      s.push(zr(e[u], t, r, o));
    return s;
  } else C.NODE_ENV !== "production" && J(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function as(e, t, r, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: u, throwUnhandledErrorInProduction: f } = t && t.appContext.config || je;
  if (t) {
    let c = t.parent;
    const p = t.proxy, g = C.NODE_ENV !== "production" ? gc[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; c; ) {
      const y = c.ec;
      if (y) {
        for (let _ = 0; _ < y.length; _++)
          if (y[_](e, p, g) === !1)
            return;
      }
      c = c.parent;
    }
    if (u) {
      mn(), no(u, null, 10, [
        e,
        p,
        g
      ]), bn();
      return;
    }
  }
  Jx(e, r, s, o, f);
}
function Jx(e, t, r, o = !0, s = !1) {
  if (C.NODE_ENV !== "production") {
    const u = gc[t];
    if (r && Aa(r), J(`Unhandled error${u ? ` during execution of ${u}` : ""}`), r && xa(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
let Xo = !1, _l = !1;
const qt = [];
let Br = 0;
const Yi = [];
let Pn = null, Bi = 0;
const xy = /* @__PURE__ */ Promise.resolve();
let vc = null;
const Xx = 100;
function yc(e) {
  const t = vc || xy;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qx(e) {
  let t = Xo ? Br + 1 : 0, r = qt.length;
  for (; t < r; ) {
    const o = t + r >>> 1, s = qt[o], u = Qo(s);
    u < e || u === e && s.flags & 2 ? t = o + 1 : r = o;
  }
  return t;
}
function hu(e) {
  if (!(e.flags & 1)) {
    const t = Qo(e), r = qt[qt.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qo(r) ? qt.push(e) : qt.splice(Qx(t), 0, e), e.flags |= 1, $y();
  }
}
function $y() {
  !Xo && !_l && (_l = !0, vc = xy.then(Ny));
}
function Ty(e) {
  pe(e) ? Yi.push(...e) : Pn && e.id === -1 ? Pn.splice(Bi + 1, 0, e) : e.flags & 1 || (Yi.push(e), e.flags |= 1), $y();
}
function Kd(e, t, r = Xo ? Br + 1 : 0) {
  for (C.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); r < qt.length; r++) {
    const o = qt[r];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || C.NODE_ENV !== "production" && _c(t, o))
        continue;
      qt.splice(r, 1), r--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Cy(e) {
  if (Yi.length) {
    const t = [...new Set(Yi)].sort(
      (r, o) => Qo(r) - Qo(o)
    );
    if (Yi.length = 0, Pn) {
      Pn.push(...t);
      return;
    }
    for (Pn = t, C.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Bi = 0; Bi < Pn.length; Bi++) {
      const r = Pn[Bi];
      C.NODE_ENV !== "production" && _c(e, r) || (r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2);
    }
    Pn = null, Bi = 0;
  }
}
const Qo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ny(e) {
  _l = !1, Xo = !0, C.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = C.NODE_ENV !== "production" ? (r) => _c(e, r) : Ot;
  try {
    for (Br = 0; Br < qt.length; Br++) {
      const r = qt[Br];
      if (r && !(r.flags & 8)) {
        if (C.NODE_ENV !== "production" && t(r))
          continue;
        r.flags & 4 && (r.flags &= -2), no(
          r,
          r.i,
          r.i ? 15 : 14
        ), r.flags & 4 || (r.flags &= -2);
      }
    }
  } finally {
    for (; Br < qt.length; Br++) {
      const r = qt[Br];
      r && (r.flags &= -2);
    }
    Br = 0, qt.length = 0, Cy(e), Xo = !1, vc = null, (qt.length || Yi.length) && Ny(e);
  }
}
function _c(e, t) {
  const r = e.get(t) || 0;
  if (r > Xx) {
    const o = t.i, s = o && c_(o.type);
    return as(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, r + 1), !1;
}
let Gr = !1;
const $a = /* @__PURE__ */ new Map();
C.NODE_ENV !== "production" && (rc().__VUE_HMR_RUNTIME__ = {
  createRecord: zf(Iy),
  rerender: zf(t$),
  reload: zf(r$)
});
const hi = /* @__PURE__ */ new Map();
function Zx(e) {
  const t = e.type.__hmrId;
  let r = hi.get(t);
  r || (Iy(t, e.type), r = hi.get(t)), r.instances.add(e);
}
function e$(e) {
  hi.get(e.type.__hmrId).instances.delete(e);
}
function Iy(e, t) {
  return hi.has(e) ? !1 : (hi.set(e, {
    initialDef: ja(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ja(e) {
  return p_(e) ? e.__vccOpts : e;
}
function t$(e, t) {
  const r = hi.get(e);
  r && (r.initialDef.render = t, [...r.instances].forEach((o) => {
    t && (o.render = t, ja(o.type).render = t), o.renderCache = [], Gr = !0, o.update(), Gr = !1;
  }));
}
function r$(e, t) {
  const r = hi.get(e);
  if (!r) return;
  t = ja(t), qd(r.initialDef, t);
  const o = [...r.instances];
  for (let s = 0; s < o.length; s++) {
    const u = o[s], f = ja(u.type);
    let c = $a.get(f);
    c || (f !== r.initialDef && qd(f, t), $a.set(f, c = /* @__PURE__ */ new Set())), c.add(u), u.appContext.propsCache.delete(u.type), u.appContext.emitsCache.delete(u.type), u.appContext.optionsCache.delete(u.type), u.ceReload ? (c.add(u), u.ceReload(t.styles), c.delete(u)) : u.parent ? hu(() => {
      Gr = !0, u.parent.update(), Gr = !1, c.delete(u);
    }) : u.appContext.reload ? u.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), u.root.ce && u !== u.root && u.root.ce._removeChildStyle(f);
  }
  Ty(() => {
    $a.clear();
  });
}
function qd(e, t) {
  st(e, t);
  for (const r in e)
    r !== "__file" && !(r in t) && delete e[r];
}
function zf(e) {
  return (t, r) => {
    try {
      return e(t, r);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let jr, Fo = [], ml = !1;
function us(e, ...t) {
  jr ? jr.emit(e, ...t) : ml || Fo.push({ event: e, args: t });
}
function Dy(e, t) {
  var r, o;
  jr = e, jr ? (jr.enabled = !0, Fo.forEach(({ event: s, args: u }) => jr.emit(s, ...u)), Fo = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (r = window.navigator) == null ? void 0 : r.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((u) => {
    Dy(u, t);
  }), setTimeout(() => {
    jr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ml = !0, Fo = []);
  }, 3e3)) : (ml = !0, Fo = []);
}
function n$(e, t) {
  us("app:init", e, t, {
    Fragment: Hr,
    Text: fs,
    Comment: hr,
    Static: jo
  });
}
function i$(e) {
  us("app:unmount", e);
}
const o$ = /* @__PURE__ */ mc(
  "component:added"
  /* COMPONENT_ADDED */
), Py = /* @__PURE__ */ mc(
  "component:updated"
  /* COMPONENT_UPDATED */
), s$ = /* @__PURE__ */ mc(
  "component:removed"
  /* COMPONENT_REMOVED */
), a$ = (e) => {
  jr && typeof jr.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !jr.cleanupBuffer(e) && s$(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function mc(e) {
  return (t) => {
    us(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const u$ = /* @__PURE__ */ Ly(
  "perf:start"
  /* PERFORMANCE_START */
), f$ = /* @__PURE__ */ Ly(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ly(e) {
  return (t, r, o) => {
    us(e, t.appContext.app, t.uid, t, r, o);
  };
}
function l$(e, t, r) {
  us(
    "component:emit",
    e.appContext.app,
    e,
    t,
    r
  );
}
let zt = null, My = null;
function ka(e) {
  const t = zt;
  return zt = e, My = e && e.type.__scopeId || null, t;
}
function c$(e, t = zt, r) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && ig(-1);
    const u = ka(t);
    let f;
    try {
      f = e(...s);
    } finally {
      ka(u), o._d && ig(1);
    }
    return C.NODE_ENV !== "production" && Py(t), f;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ry(e) {
  ZA(e) && J("Do not use built-in directive ids as custom directive id: " + e);
}
function No(e, t) {
  if (zt === null)
    return C.NODE_ENV !== "production" && J("withDirectives can only be used inside render functions."), e;
  const r = _u(zt), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [u, f, c, p = je] = t[s];
    u && (be(u) && (u = {
      mounted: u,
      updated: u
    }), u.deep && vn(f), o.push({
      dir: u,
      instance: r,
      value: f,
      oldValue: void 0,
      arg: c,
      modifiers: p
    }));
  }
  return e;
}
function ei(e, t, r, o) {
  const s = e.dirs, u = t && t.dirs;
  for (let f = 0; f < s.length; f++) {
    const c = s[f];
    u && (c.oldValue = u[f].value);
    let p = c.dir[o];
    p && (mn(), zr(p, r, 8, [
      e.el,
      c,
      e,
      t
    ]), bn());
  }
}
const p$ = Symbol("_vte"), h$ = (e) => e.__isTeleport;
function bc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fy(e, t) {
  return be(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, t, { setup: e })
  ) : e;
}
function Vy(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const d$ = /* @__PURE__ */ new WeakSet();
function bl(e, t, r, o, s = !1) {
  if (pe(e)) {
    e.forEach(
      (O, $) => bl(
        O,
        t && (pe(t) ? t[$] : t),
        r,
        o,
        s
      )
    );
    return;
  }
  if (Ho(o) && !s)
    return;
  const u = o.shapeFlag & 4 ? _u(o.component) : o.el, f = s ? null : u, { i: c, r: p } = e;
  if (C.NODE_ENV !== "production" && !c) {
    J(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const g = t && t.r, y = c.refs === je ? c.refs = {} : c.refs, _ = c.setupState, m = Oe(_), A = _ === je ? () => !1 : (O) => C.NODE_ENV !== "production" && d$.has(m[O]) ? !1 : Re(m, O);
  if (g != null && g !== p && (ct(g) ? (y[g] = null, A(g) && (_[g] = null)) : St(g) && (g.value = null)), be(p))
    no(p, c, 12, [f, y]);
  else {
    const O = ct(p), $ = St(p);
    if (O || $) {
      const N = () => {
        if (e.f) {
          const R = O ? A(p) ? _[p] : y[p] : p.value;
          s ? pe(R) && Xl(R, u) : pe(R) ? R.includes(u) || R.push(u) : O ? (y[p] = [u], A(p) && (_[p] = y[p])) : (p.value = [u], e.k && (y[e.k] = p.value));
        } else O ? (y[p] = f, A(p) && (_[p] = f)) : $ ? (p.value = f, e.k && (y[e.k] = f)) : C.NODE_ENV !== "production" && J("Invalid template ref type:", p, `(${typeof p})`);
      };
      f ? (N.id = -1, fr(N, r)) : N();
    } else C.NODE_ENV !== "production" && J("Invalid template ref type:", p, `(${typeof p})`);
  }
}
const Ho = (e) => !!e.type.__asyncLoader, wc = (e) => e.type.__isKeepAlive;
function g$(e, t) {
  By(e, "a", t);
}
function v$(e, t) {
  By(e, "da", t);
}
function By(e, t, r = Nt) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = r;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (du(t, o, r), r) {
    let s = r.parent;
    for (; s && s.parent; )
      wc(s.parent.vnode) && y$(o, t, r, s), s = s.parent;
  }
}
function y$(e, t, r, o) {
  const s = du(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Uy(() => {
    Xl(o[t], s);
  }, r);
}
function du(e, t, r = Nt, o = !1) {
  if (r) {
    const s = r[e] || (r[e] = []), u = t.__weh || (t.__weh = (...f) => {
      mn();
      const c = ls(r), p = zr(t, r, e, f);
      return c(), bn(), p;
    });
    return o ? s.unshift(u) : s.push(u), u;
  } else if (C.NODE_ENV !== "production") {
    const s = ri(gc[e].replace(/ hook$/, ""));
    J(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const wn = (e) => (t, r = Nt) => {
  (!yu || e === "sp") && du(e, (...o) => t(...o), r);
}, _$ = wn("bm"), m$ = wn("m"), b$ = wn(
  "bu"
), w$ = wn("u"), E$ = wn(
  "bum"
), Uy = wn("um"), O$ = wn(
  "sp"
), S$ = wn("rtg"), A$ = wn("rtc");
function x$(e, t = Nt) {
  du("ec", e, t);
}
const $$ = Symbol.for("v-ndc"), wl = (e) => e ? f_(e) ? _u(e) : wl(e.parent) : null, fi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ st(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => C.NODE_ENV !== "production" ? kr(e.props) : e.props,
    $attrs: (e) => C.NODE_ENV !== "production" ? kr(e.attrs) : e.attrs,
    $slots: (e) => C.NODE_ENV !== "production" ? kr(e.slots) : e.slots,
    $refs: (e) => C.NODE_ENV !== "production" ? kr(e.refs) : e.refs,
    $parent: (e) => wl(e.parent),
    $root: (e) => wl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Oc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = yc.bind(e.proxy)),
    $watch: (e) => sT.bind(e)
  })
), Ec = (e) => e === "_" || e === "$", Yf = (e, t) => e !== je && !e.__isScriptSetup && Re(e, t), Hy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: o, data: s, props: u, accessCache: f, type: c, appContext: p } = e;
    if (C.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let g;
    if (t[0] !== "$") {
      const A = f[t];
      if (A !== void 0)
        switch (A) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return r[t];
          case 3:
            return u[t];
        }
      else {
        if (Yf(o, t))
          return f[t] = 1, o[t];
        if (s !== je && Re(s, t))
          return f[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (g = e.propsOptions[0]) && Re(g, t)
        )
          return f[t] = 3, u[t];
        if (r !== je && Re(r, t))
          return f[t] = 4, r[t];
        El && (f[t] = 0);
      }
    }
    const y = fi[t];
    let _, m;
    if (y)
      return t === "$attrs" ? (At(e.attrs, "get", ""), C.NODE_ENV !== "production" && qa()) : C.NODE_ENV !== "production" && t === "$slots" && At(e, "get", t), y(e);
    if (
      // css module (injected by vue-loader)
      (_ = c.__cssModules) && (_ = _[t])
    )
      return _;
    if (r !== je && Re(r, t))
      return f[t] = 4, r[t];
    if (
      // global properties
      m = p.config.globalProperties, Re(m, t)
    )
      return m[t];
    C.NODE_ENV !== "production" && zt && (!ct(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== je && Ec(t[0]) && Re(s, t) ? J(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === zt && J(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, r) {
    const { data: o, setupState: s, ctx: u } = e;
    return Yf(s, t) ? (s[t] = r, !0) : C.NODE_ENV !== "production" && s.__isScriptSetup && Re(s, t) ? (J(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== je && Re(o, t) ? (o[t] = r, !0) : Re(e.props, t) ? (C.NODE_ENV !== "production" && J(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (C.NODE_ENV !== "production" && J(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (C.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(u, t, {
      enumerable: !0,
      configurable: !0,
      value: r
    }) : u[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: o, appContext: s, propsOptions: u }
  }, f) {
    let c;
    return !!r[f] || e !== je && Re(e, f) || Yf(t, f) || (c = u[0]) && Re(c, f) || Re(o, f) || Re(fi, f) || Re(s.config.globalProperties, f);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Re(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
C.NODE_ENV !== "production" && (Hy.ownKeys = (e) => (J(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function T$(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(fi).forEach((r) => {
    Object.defineProperty(t, r, {
      configurable: !0,
      enumerable: !1,
      get: () => fi[r](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ot
    });
  }), t;
}
function C$(e) {
  const {
    ctx: t,
    propsOptions: [r]
  } = e;
  r && Object.keys(r).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Ot
    });
  });
}
function N$(e) {
  const { ctx: t, setupState: r } = e;
  Object.keys(Oe(r)).forEach((o) => {
    if (!r.__isScriptSetup) {
      if (Ec(o[0])) {
        J(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => r[o],
        set: Ot
      });
    }
  });
}
function zd(e) {
  return pe(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
function I$() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, r) => {
    e[r] ? J(`${t} property "${r}" is already defined in ${e[r]}.`) : e[r] = t;
  };
}
let El = !0;
function D$(e) {
  const t = Oc(e), r = e.proxy, o = e.ctx;
  El = !1, t.beforeCreate && Yd(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: u,
    methods: f,
    watch: c,
    provide: p,
    inject: g,
    // lifecycle
    created: y,
    beforeMount: _,
    mounted: m,
    beforeUpdate: A,
    updated: O,
    activated: $,
    deactivated: N,
    beforeDestroy: R,
    beforeUnmount: L,
    destroyed: D,
    unmounted: X,
    render: V,
    renderTracked: ee,
    renderTriggered: he,
    errorCaptured: se,
    serverPrefetch: fe,
    // public API
    expose: Ae,
    inheritAttrs: ke,
    // assets
    components: M,
    directives: Q,
    filters: de
  } = t, ae = C.NODE_ENV !== "production" ? I$() : null;
  if (C.NODE_ENV !== "production") {
    const [te] = e.propsOptions;
    if (te)
      for (const ce in te)
        ae("Props", ce);
  }
  if (g && P$(g, o, ae), f)
    for (const te in f) {
      const ce = f[te];
      be(ce) ? (C.NODE_ENV !== "production" ? Object.defineProperty(o, te, {
        value: ce.bind(r),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[te] = ce.bind(r), C.NODE_ENV !== "production" && ae("Methods", te)) : C.NODE_ENV !== "production" && J(
        `Method "${te}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    C.NODE_ENV !== "production" && !be(s) && J(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const te = s.call(r, r);
    if (C.NODE_ENV !== "production" && Ql(te) && J(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Je(te))
      C.NODE_ENV !== "production" && J("data() should return an object.");
    else if (e.data = pc(te), C.NODE_ENV !== "production")
      for (const ce in te)
        ae("Data", ce), Ec(ce[0]) || Object.defineProperty(o, ce, {
          configurable: !0,
          enumerable: !0,
          get: () => te[ce],
          set: Ot
        });
  }
  if (El = !0, u)
    for (const te in u) {
      const ce = u[te], Ze = be(ce) ? ce.bind(r, r) : be(ce.get) ? ce.get.bind(r, r) : Ot;
      C.NODE_ENV !== "production" && Ze === Ot && J(`Computed property "${te}" has no getter.`);
      const re = !be(ce) && be(ce.set) ? ce.set.bind(r) : C.NODE_ENV !== "production" ? () => {
        J(
          `Write operation failed: computed property "${te}" is readonly.`
        );
      } : Ot, oe = IT({
        get: Ze,
        set: re
      });
      Object.defineProperty(o, te, {
        enumerable: !0,
        configurable: !0,
        get: () => oe.value,
        set: (Te) => oe.value = Te
      }), C.NODE_ENV !== "production" && ae("Computed", te);
    }
  if (c)
    for (const te in c)
      Wy(c[te], o, r, te);
  if (p) {
    const te = be(p) ? p.call(r) : p;
    Reflect.ownKeys(te).forEach((ce) => {
      B$(ce, te[ce]);
    });
  }
  y && Yd(y, e, "c");
  function ne(te, ce) {
    pe(ce) ? ce.forEach((Ze) => te(Ze.bind(r))) : ce && te(ce.bind(r));
  }
  if (ne(_$, _), ne(m$, m), ne(b$, A), ne(w$, O), ne(g$, $), ne(v$, N), ne(x$, se), ne(A$, ee), ne(S$, he), ne(E$, L), ne(Uy, X), ne(O$, fe), pe(Ae))
    if (Ae.length) {
      const te = e.exposed || (e.exposed = {});
      Ae.forEach((ce) => {
        Object.defineProperty(te, ce, {
          get: () => r[ce],
          set: (Ze) => r[ce] = Ze
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Ot && (e.render = V), ke != null && (e.inheritAttrs = ke), M && (e.components = M), Q && (e.directives = Q), fe && Vy(e);
}
function P$(e, t, r = Ot) {
  pe(e) && (e = Ol(e));
  for (const o in e) {
    const s = e[o];
    let u;
    Je(s) ? "default" in s ? u = Ta(
      s.from || o,
      s.default,
      !0
    ) : u = Ta(s.from || o) : u = Ta(s), St(u) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => u.value,
      set: (f) => u.value = f
    }) : t[o] = u, C.NODE_ENV !== "production" && r("Inject", o);
  }
}
function Yd(e, t, r) {
  zr(
    pe(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Wy(e, t, r, o) {
  let s = o.includes(".") ? t_(r, o) : () => r[o];
  if (ct(e)) {
    const u = t[e];
    be(u) ? Wo(s, u) : C.NODE_ENV !== "production" && J(`Invalid watch handler specified by key "${e}"`, u);
  } else if (be(e))
    Wo(s, e.bind(r));
  else if (Je(e))
    if (pe(e))
      e.forEach((u) => Wy(u, t, r, o));
    else {
      const u = be(e.handler) ? e.handler.bind(r) : t[e.handler];
      be(u) ? Wo(s, u, e) : C.NODE_ENV !== "production" && J(`Invalid watch handler specified by key "${e.handler}"`, u);
    }
  else C.NODE_ENV !== "production" && J(`Invalid watch option: "${o}"`, e);
}
function Oc(e) {
  const t = e.type, { mixins: r, extends: o } = t, {
    mixins: s,
    optionsCache: u,
    config: { optionMergeStrategies: f }
  } = e.appContext, c = u.get(t);
  let p;
  return c ? p = c : !s.length && !r && !o ? p = t : (p = {}, s.length && s.forEach(
    (g) => Ga(p, g, f, !0)
  ), Ga(p, t, f)), Je(t) && u.set(t, p), p;
}
function Ga(e, t, r, o = !1) {
  const { mixins: s, extends: u } = t;
  u && Ga(e, u, r, !0), s && s.forEach(
    (f) => Ga(e, f, r, !0)
  );
  for (const f in t)
    if (o && f === "expose")
      C.NODE_ENV !== "production" && J(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = L$[f] || r && r[f];
      e[f] = c ? c(e[f], t[f]) : t[f];
    }
  return e;
}
const L$ = {
  data: Jd,
  props: Xd,
  emits: Xd,
  // objects
  methods: Vo,
  computed: Vo,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: Vo,
  directives: Vo,
  // watch
  watch: R$,
  // provide / inject
  provide: Jd,
  inject: M$
};
function Jd(e, t) {
  return t ? e ? function() {
    return st(
      be(e) ? e.call(this, this) : e,
      be(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function M$(e, t) {
  return Vo(Ol(e), Ol(t));
}
function Ol(e) {
  if (pe(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Gt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vo(e, t) {
  return e ? st(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xd(e, t) {
  return e ? pe(e) && pe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : st(
    /* @__PURE__ */ Object.create(null),
    zd(e),
    zd(t ?? {})
  ) : t;
}
function R$(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = st(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    r[o] = Gt(e[o], t[o]);
  return r;
}
function jy() {
  return {
    app: null,
    config: {
      isNativeTag: JA,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let F$ = 0;
function V$(e, t) {
  return function(o, s = null) {
    be(o) || (o = st({}, o)), s != null && !Je(s) && (C.NODE_ENV !== "production" && J("root props passed to app.mount() must be an object."), s = null);
    const u = jy(), f = /* @__PURE__ */ new WeakSet(), c = [];
    let p = !1;
    const g = u.app = {
      _uid: F$++,
      _component: o,
      _props: s,
      _container: null,
      _context: u,
      _instance: null,
      version: fg,
      get config() {
        return u.config;
      },
      set config(y) {
        C.NODE_ENV !== "production" && J(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(y, ..._) {
        return f.has(y) ? C.NODE_ENV !== "production" && J("Plugin has already been applied to target app.") : y && be(y.install) ? (f.add(y), y.install(g, ..._)) : be(y) ? (f.add(y), y(g, ..._)) : C.NODE_ENV !== "production" && J(
          'A plugin must either be a function or an object with an "install" function.'
        ), g;
      },
      mixin(y) {
        return u.mixins.includes(y) ? C.NODE_ENV !== "production" && J(
          "Mixin has already been applied to target app" + (y.name ? `: ${y.name}` : "")
        ) : u.mixins.push(y), g;
      },
      component(y, _) {
        return C.NODE_ENV !== "production" && Tl(y, u.config), _ ? (C.NODE_ENV !== "production" && u.components[y] && J(`Component "${y}" has already been registered in target app.`), u.components[y] = _, g) : u.components[y];
      },
      directive(y, _) {
        return C.NODE_ENV !== "production" && Ry(y), _ ? (C.NODE_ENV !== "production" && u.directives[y] && J(`Directive "${y}" has already been registered in target app.`), u.directives[y] = _, g) : u.directives[y];
      },
      mount(y, _, m) {
        if (p)
          C.NODE_ENV !== "production" && J(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          C.NODE_ENV !== "production" && y.__vue_app__ && J(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const A = g._ceVNode || Dr(o, s);
          return A.appContext = u, m === !0 ? m = "svg" : m === !1 && (m = void 0), C.NODE_ENV !== "production" && (u.reload = () => {
            e(
              Hn(A),
              y,
              m
            );
          }), _ && t ? t(A, y) : e(A, y, m), p = !0, g._container = y, y.__vue_app__ = g, C.NODE_ENV !== "production" && (g._instance = A.component, n$(g, fg)), _u(A.component);
        }
      },
      onUnmount(y) {
        C.NODE_ENV !== "production" && typeof y != "function" && J(
          `Expected function as first argument to app.onUnmount(), but got ${typeof y}`
        ), c.push(y);
      },
      unmount() {
        p ? (zr(
          c,
          g._instance,
          16
        ), e(null, g._container), C.NODE_ENV !== "production" && (g._instance = null, i$(g)), delete g._container.__vue_app__) : C.NODE_ENV !== "production" && J("Cannot unmount an app that is not mounted.");
      },
      provide(y, _) {
        return C.NODE_ENV !== "production" && y in u.provides && J(
          `App already provides property with key "${String(y)}". It will be overwritten with the new value.`
        ), u.provides[y] = _, g;
      },
      runWithContext(y) {
        const _ = Ji;
        Ji = g;
        try {
          return y();
        } finally {
          Ji = _;
        }
      }
    };
    return g;
  };
}
let Ji = null;
function B$(e, t) {
  if (!Nt)
    C.NODE_ENV !== "production" && J("provide() can only be used inside setup().");
  else {
    let r = Nt.provides;
    const o = Nt.parent && Nt.parent.provides;
    o === r && (r = Nt.provides = Object.create(o)), r[e] = t;
  }
}
function Ta(e, t, r = !1) {
  const o = Nt || zt;
  if (o || Ji) {
    const s = Ji ? Ji._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return r && be(t) ? t.call(o && o.proxy) : t;
    C.NODE_ENV !== "production" && J(`injection "${String(e)}" not found.`);
  } else C.NODE_ENV !== "production" && J("inject() can only be used inside setup() or functional components.");
}
const ky = {}, Gy = () => Object.create(ky), Ky = (e) => Object.getPrototypeOf(e) === ky;
function U$(e, t, r, o = !1) {
  const s = {}, u = Gy();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qy(e, t, s, u);
  for (const f in e.propsOptions[0])
    f in s || (s[f] = void 0);
  C.NODE_ENV !== "production" && Yy(t || {}, s, e), r ? e.props = o ? s : Vx(s) : e.type.props ? e.props = s : e.props = u, e.attrs = u;
}
function H$(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function W$(e, t, r, o) {
  const {
    props: s,
    attrs: u,
    vnode: { patchFlag: f }
  } = e, c = Oe(s), [p] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(C.NODE_ENV !== "production" && H$(e)) && (o || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const y = e.vnode.dynamicProps;
      for (let _ = 0; _ < y.length; _++) {
        let m = y[_];
        if (gu(e.emitsOptions, m))
          continue;
        const A = t[m];
        if (p)
          if (Re(u, m))
            A !== u[m] && (u[m] = A, g = !0);
          else {
            const O = pr(m);
            s[O] = Sl(
              p,
              c,
              O,
              A,
              e,
              !1
            );
          }
        else
          A !== u[m] && (u[m] = A, g = !0);
      }
    }
  } else {
    qy(e, t, s, u) && (g = !0);
    let y;
    for (const _ in c)
      (!t || // for camelCase
      !Re(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = tr(_)) === _ || !Re(t, y))) && (p ? r && // for camelCase
      (r[_] !== void 0 || // for kebab-case
      r[y] !== void 0) && (s[_] = Sl(
        p,
        c,
        _,
        void 0,
        e,
        !0
      )) : delete s[_]);
    if (u !== c)
      for (const _ in u)
        (!t || !Re(t, _)) && (delete u[_], g = !0);
  }
  g && Kr(e.attrs, "set", ""), C.NODE_ENV !== "production" && Yy(t || {}, s, e);
}
function qy(e, t, r, o) {
  const [s, u] = e.propsOptions;
  let f = !1, c;
  if (t)
    for (let p in t) {
      if (Uo(p))
        continue;
      const g = t[p];
      let y;
      s && Re(s, y = pr(p)) ? !u || !u.includes(y) ? r[y] = g : (c || (c = {}))[y] = g : gu(e.emitsOptions, p) || (!(p in o) || g !== o[p]) && (o[p] = g, f = !0);
    }
  if (u) {
    const p = Oe(r), g = c || je;
    for (let y = 0; y < u.length; y++) {
      const _ = u[y];
      r[_] = Sl(
        s,
        p,
        _,
        g[_],
        e,
        !Re(g, _)
      );
    }
  }
  return f;
}
function Sl(e, t, r, o, s, u) {
  const f = e[r];
  if (f != null) {
    const c = Re(f, "default");
    if (c && o === void 0) {
      const p = f.default;
      if (f.type !== Function && !f.skipFactory && be(p)) {
        const { propsDefaults: g } = s;
        if (r in g)
          o = g[r];
        else {
          const y = ls(s);
          o = g[r] = p.call(
            null,
            t
          ), y();
        }
      } else
        o = p;
      s.ce && s.ce._setProp(r, o);
    }
    f[
      0
      /* shouldCast */
    ] && (u && !c ? o = !1 : f[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === tr(r)) && (o = !0));
  }
  return o;
}
const j$ = /* @__PURE__ */ new WeakMap();
function zy(e, t, r = !1) {
  const o = r ? j$ : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const u = e.props, f = {}, c = [];
  let p = !1;
  if (!be(e)) {
    const y = (_) => {
      p = !0;
      const [m, A] = zy(_, t, !0);
      st(f, m), A && c.push(...A);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!u && !p)
    return Je(e) && o.set(e, Ki), Ki;
  if (pe(u))
    for (let y = 0; y < u.length; y++) {
      C.NODE_ENV !== "production" && !ct(u[y]) && J("props must be strings when using array syntax.", u[y]);
      const _ = pr(u[y]);
      Qd(_) && (f[_] = je);
    }
  else if (u) {
    C.NODE_ENV !== "production" && !Je(u) && J("invalid props options", u);
    for (const y in u) {
      const _ = pr(y);
      if (Qd(_)) {
        const m = u[y], A = f[_] = pe(m) || be(m) ? { type: m } : st({}, m), O = A.type;
        let $ = !1, N = !0;
        if (pe(O))
          for (let R = 0; R < O.length; ++R) {
            const L = O[R], D = be(L) && L.name;
            if (D === "Boolean") {
              $ = !0;
              break;
            } else D === "String" && (N = !1);
          }
        else
          $ = be(O) && O.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = $, A[
          1
          /* shouldCastTrue */
        ] = N, ($ || Re(A, "default")) && c.push(_);
      }
    }
  }
  const g = [f, c];
  return Je(e) && o.set(e, g), g;
}
function Qd(e) {
  return e[0] !== "$" && !Uo(e) ? !0 : (C.NODE_ENV !== "production" && J(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function k$(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Yy(e, t, r) {
  const o = Oe(t), s = r.propsOptions[0];
  for (const u in s) {
    let f = s[u];
    f != null && G$(
      u,
      o[u],
      f,
      C.NODE_ENV !== "production" ? kr(o) : o,
      !Re(e, u) && !Re(e, tr(u))
    );
  }
}
function G$(e, t, r, o, s) {
  const { type: u, required: f, validator: c, skipCheck: p } = r;
  if (f && s) {
    J('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !f)) {
    if (u != null && u !== !0 && !p) {
      let g = !1;
      const y = pe(u) ? u : [u], _ = [];
      for (let m = 0; m < y.length && !g; m++) {
        const { valid: A, expectedType: O } = q$(t, y[m]);
        _.push(O || ""), g = A;
      }
      if (!g) {
        J(z$(e, t, _));
        return;
      }
    }
    c && !c(t, o) && J('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const K$ = /* @__PURE__ */ _n(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function q$(e, t) {
  let r;
  const o = k$(t);
  if (o === "null")
    r = e === null;
  else if (K$(o)) {
    const s = typeof e;
    r = s === o.toLowerCase(), !r && s === "object" && (r = e instanceof t);
  } else o === "Object" ? r = Je(e) : o === "Array" ? r = pe(e) : r = e instanceof t;
  return {
    valid: r,
    expectedType: o
  };
}
function z$(e, t, r) {
  if (r.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${r.map(fu).join(" | ")}`;
  const s = r[0], u = Zl(t), f = Zd(t, s), c = Zd(t, u);
  return r.length === 1 && eg(s) && !Y$(s, u) && (o += ` with value ${f}`), o += `, got ${u} `, eg(u) && (o += `with value ${c}.`), o;
}
function Zd(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function eg(e) {
  return ["string", "number", "boolean"].some((r) => e.toLowerCase() === r);
}
function Y$(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Jy = (e) => e[0] === "_" || e === "$stable", Sc = (e) => pe(e) ? e.map(Nr) : [Nr(e)], J$ = (e, t, r) => {
  if (t._n)
    return t;
  const o = c$((...s) => (C.NODE_ENV !== "production" && Nt && (!r || r.root === Nt.root) && J(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Sc(t(...s))), r);
  return o._c = !1, o;
}, Xy = (e, t, r) => {
  const o = e._ctx;
  for (const s in e) {
    if (Jy(s)) continue;
    const u = e[s];
    if (be(u))
      t[s] = J$(s, u, o);
    else if (u != null) {
      C.NODE_ENV !== "production" && J(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const f = Sc(u);
      t[s] = () => f;
    }
  }
}, Qy = (e, t) => {
  C.NODE_ENV !== "production" && !wc(e.vnode) && J(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const r = Sc(t);
  e.slots.default = () => r;
}, Al = (e, t, r) => {
  for (const o in t)
    (r || o !== "_") && (e[o] = t[o]);
}, X$ = (e, t, r) => {
  const o = e.slots = Gy();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Al(o, t, r), r && Ua(o, "_", s, !0)) : Xy(t, o);
  } else t && Qy(e, t);
}, Q$ = (e, t, r) => {
  const { vnode: o, slots: s } = e;
  let u = !0, f = je;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? C.NODE_ENV !== "production" && Gr ? (Al(s, t, r), Kr(e, "set", "$slots")) : r && c === 1 ? u = !1 : Al(s, t, r) : (u = !t.$stable, Xy(t, s)), f = t;
  } else t && (Qy(e, t), f = { default: 1 });
  if (u)
    for (const c in s)
      !Jy(c) && f[c] == null && delete s[c];
};
let Io, Rn;
function pn(e, t) {
  e.appContext.config.performance && Ka() && Rn.mark(`vue-${t}-${e.uid}`), C.NODE_ENV !== "production" && u$(e, t, Ka() ? Rn.now() : Date.now());
}
function hn(e, t) {
  if (e.appContext.config.performance && Ka()) {
    const r = `vue-${t}-${e.uid}`, o = r + ":end";
    Rn.mark(o), Rn.measure(
      `<${mu(e, e.type)}> ${t}`,
      r,
      o
    ), Rn.clearMarks(r), Rn.clearMarks(o);
  }
  C.NODE_ENV !== "production" && f$(e, t, Ka() ? Rn.now() : Date.now());
}
function Ka() {
  return Io !== void 0 || (typeof window < "u" && window.performance ? (Io = !0, Rn = window.performance) : Io = !1), Io;
}
function Z$() {
  const e = [];
  if (C.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const fr = hT;
function eT(e) {
  return tT(e);
}
function tT(e, t) {
  Z$();
  const r = rc();
  r.__VUE__ = !0, C.NODE_ENV !== "production" && Dy(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r);
  const {
    insert: o,
    remove: s,
    patchProp: u,
    createElement: f,
    createText: c,
    createComment: p,
    setText: g,
    setElementText: y,
    parentNode: _,
    nextSibling: m,
    setScopeId: A = Ot,
    insertStaticContent: O
  } = e, $ = (b, E, P, W = null, H = null, k = null, z = void 0, K = null, q = C.NODE_ENV !== "production" && Gr ? !1 : !!E.dynamicChildren) => {
    if (b === E)
      return;
    b && !Po(b, E) && (W = ut(b), Fe(b, H, k, !0), b = null), E.patchFlag === -2 && (q = !1, E.dynamicChildren = null);
    const { type: G, ref: ge, shapeFlag: Y } = E;
    switch (G) {
      case fs:
        N(b, E, P, W);
        break;
      case hr:
        R(b, E, P, W);
        break;
      case jo:
        b == null ? L(E, P, W, z) : C.NODE_ENV !== "production" && D(b, E, P, z);
        break;
      case Hr:
        Q(
          b,
          E,
          P,
          W,
          H,
          k,
          z,
          K,
          q
        );
        break;
      default:
        Y & 1 ? ee(
          b,
          E,
          P,
          W,
          H,
          k,
          z,
          K,
          q
        ) : Y & 6 ? de(
          b,
          E,
          P,
          W,
          H,
          k,
          z,
          K,
          q
        ) : Y & 64 || Y & 128 ? G.process(
          b,
          E,
          P,
          W,
          H,
          k,
          z,
          K,
          q,
          ze
        ) : C.NODE_ENV !== "production" && J("Invalid VNode type:", G, `(${typeof G})`);
    }
    ge != null && H && bl(ge, b && b.ref, k, E || b, !E);
  }, N = (b, E, P, W) => {
    if (b == null)
      o(
        E.el = c(E.children),
        P,
        W
      );
    else {
      const H = E.el = b.el;
      E.children !== b.children && g(H, E.children);
    }
  }, R = (b, E, P, W) => {
    b == null ? o(
      E.el = p(E.children || ""),
      P,
      W
    ) : E.el = b.el;
  }, L = (b, E, P, W) => {
    [b.el, b.anchor] = O(
      b.children,
      E,
      P,
      W,
      b.el,
      b.anchor
    );
  }, D = (b, E, P, W) => {
    if (E.children !== b.children) {
      const H = m(b.anchor);
      V(b), [E.el, E.anchor] = O(
        E.children,
        P,
        H,
        W
      );
    } else
      E.el = b.el, E.anchor = b.anchor;
  }, X = ({ el: b, anchor: E }, P, W) => {
    let H;
    for (; b && b !== E; )
      H = m(b), o(b, P, W), b = H;
    o(E, P, W);
  }, V = ({ el: b, anchor: E }) => {
    let P;
    for (; b && b !== E; )
      P = m(b), s(b), b = P;
    s(E);
  }, ee = (b, E, P, W, H, k, z, K, q) => {
    E.type === "svg" ? z = "svg" : E.type === "math" && (z = "mathml"), b == null ? he(
      E,
      P,
      W,
      H,
      k,
      z,
      K,
      q
    ) : Ae(
      b,
      E,
      H,
      k,
      z,
      K,
      q
    );
  }, he = (b, E, P, W, H, k, z, K) => {
    let q, G;
    const { props: ge, shapeFlag: Y, transition: le, dirs: ve } = b;
    if (q = b.el = f(
      b.type,
      k,
      ge && ge.is,
      ge
    ), Y & 8 ? y(q, b.children) : Y & 16 && fe(
      b.children,
      q,
      null,
      W,
      H,
      Jf(b, k),
      z,
      K
    ), ve && ei(b, null, W, "created"), se(q, b, b.scopeId, z, W), ge) {
      for (const Be in ge)
        Be !== "value" && !Uo(Be) && u(q, Be, null, ge[Be], k, W);
      "value" in ge && u(q, "value", null, ge.value, k), (G = ge.onVnodeBeforeMount) && Fr(G, W, b);
    }
    C.NODE_ENV !== "production" && (Ua(q, "__vnode", b, !0), Ua(q, "__vueParentComponent", W, !0)), ve && ei(b, null, W, "beforeMount");
    const xe = rT(H, le);
    xe && le.beforeEnter(q), o(q, E, P), ((G = ge && ge.onVnodeMounted) || xe || ve) && fr(() => {
      G && Fr(G, W, b), xe && le.enter(q), ve && ei(b, null, W, "mounted");
    }, H);
  }, se = (b, E, P, W, H) => {
    if (P && A(b, P), W)
      for (let k = 0; k < W.length; k++)
        A(b, W[k]);
    if (H) {
      let k = H.subTree;
      if (C.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && (k = Ac(k.children) || k), E === k || i_(k.type) && (k.ssContent === E || k.ssFallback === E)) {
        const z = H.vnode;
        se(
          b,
          z,
          z.scopeId,
          z.slotScopeIds,
          H.parent
        );
      }
    }
  }, fe = (b, E, P, W, H, k, z, K, q = 0) => {
    for (let G = q; G < b.length; G++) {
      const ge = b[G] = K ? Ln(b[G]) : Nr(b[G]);
      $(
        null,
        ge,
        E,
        P,
        W,
        H,
        k,
        z,
        K
      );
    }
  }, Ae = (b, E, P, W, H, k, z) => {
    const K = E.el = b.el;
    C.NODE_ENV !== "production" && (K.__vnode = E);
    let { patchFlag: q, dynamicChildren: G, dirs: ge } = E;
    q |= b.patchFlag & 16;
    const Y = b.props || je, le = E.props || je;
    let ve;
    if (P && ti(P, !1), (ve = le.onVnodeBeforeUpdate) && Fr(ve, P, E, b), ge && ei(E, b, P, "beforeUpdate"), P && ti(P, !0), C.NODE_ENV !== "production" && Gr && (q = 0, z = !1, G = null), (Y.innerHTML && le.innerHTML == null || Y.textContent && le.textContent == null) && y(K, ""), G ? (ke(
      b.dynamicChildren,
      G,
      K,
      P,
      W,
      Jf(E, H),
      k
    ), C.NODE_ENV !== "production" && Ca(b, E)) : z || Ze(
      b,
      E,
      K,
      null,
      P,
      W,
      Jf(E, H),
      k,
      !1
    ), q > 0) {
      if (q & 16)
        M(K, Y, le, P, H);
      else if (q & 2 && Y.class !== le.class && u(K, "class", null, le.class, H), q & 4 && u(K, "style", Y.style, le.style, H), q & 8) {
        const xe = E.dynamicProps;
        for (let Be = 0; Be < xe.length; Be++) {
          const Ve = xe[Be], Dt = Y[Ve], yt = le[Ve];
          (yt !== Dt || Ve === "value") && u(K, Ve, Dt, yt, H, P);
        }
      }
      q & 1 && b.children !== E.children && y(K, E.children);
    } else !z && G == null && M(K, Y, le, P, H);
    ((ve = le.onVnodeUpdated) || ge) && fr(() => {
      ve && Fr(ve, P, E, b), ge && ei(E, b, P, "updated");
    }, W);
  }, ke = (b, E, P, W, H, k, z) => {
    for (let K = 0; K < E.length; K++) {
      const q = b[K], G = E[K], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === Hr || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Po(q, G) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 70) ? _(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          P
        )
      );
      $(
        q,
        G,
        ge,
        null,
        W,
        H,
        k,
        z,
        !0
      );
    }
  }, M = (b, E, P, W, H) => {
    if (E !== P) {
      if (E !== je)
        for (const k in E)
          !Uo(k) && !(k in P) && u(
            b,
            k,
            E[k],
            null,
            H,
            W
          );
      for (const k in P) {
        if (Uo(k)) continue;
        const z = P[k], K = E[k];
        z !== K && k !== "value" && u(b, k, K, z, H, W);
      }
      "value" in P && u(b, "value", E.value, P.value, H);
    }
  }, Q = (b, E, P, W, H, k, z, K, q) => {
    const G = E.el = b ? b.el : c(""), ge = E.anchor = b ? b.anchor : c("");
    let { patchFlag: Y, dynamicChildren: le, slotScopeIds: ve } = E;
    C.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Gr || Y & 2048) && (Y = 0, q = !1, le = null), ve && (K = K ? K.concat(ve) : ve), b == null ? (o(G, P, W), o(ge, P, W), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      P,
      ge,
      H,
      k,
      z,
      K,
      q
    )) : Y > 0 && Y & 64 && le && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (ke(
      b.dynamicChildren,
      le,
      P,
      H,
      k,
      z,
      K
    ), C.NODE_ENV !== "production" ? Ca(b, E) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (E.key != null || H && E === H.subTree) && Ca(
        b,
        E,
        !0
        /* shallow */
      )
    )) : Ze(
      b,
      E,
      P,
      ge,
      H,
      k,
      z,
      K,
      q
    );
  }, de = (b, E, P, W, H, k, z, K, q) => {
    E.slotScopeIds = K, b == null ? E.shapeFlag & 512 ? H.ctx.activate(
      E,
      P,
      W,
      z,
      q
    ) : ae(
      E,
      P,
      W,
      H,
      k,
      z,
      q
    ) : ne(b, E, q);
  }, ae = (b, E, P, W, H, k, z) => {
    const K = b.component = wT(
      b,
      W,
      H
    );
    if (C.NODE_ENV !== "production" && K.type.__hmrId && Zx(K), C.NODE_ENV !== "production" && (Aa(b), pn(K, "mount")), wc(b) && (K.ctx.renderer = ze), C.NODE_ENV !== "production" && pn(K, "init"), ST(K, !1, z), C.NODE_ENV !== "production" && hn(K, "init"), K.asyncDep) {
      if (C.NODE_ENV !== "production" && Gr && (b.el = null), H && H.registerDep(K, te, z), !b.el) {
        const q = K.subTree = Dr(hr);
        R(null, q, E, P);
      }
    } else
      te(
        K,
        b,
        E,
        P,
        H,
        k,
        z
      );
    C.NODE_ENV !== "production" && (xa(), hn(K, "mount"));
  }, ne = (b, E, P) => {
    const W = E.component = b.component;
    if (cT(b, E, P))
      if (W.asyncDep && !W.asyncResolved) {
        C.NODE_ENV !== "production" && Aa(E), ce(W, E, P), C.NODE_ENV !== "production" && xa();
        return;
      } else
        W.next = E, W.update();
    else
      E.el = b.el, W.vnode = E;
  }, te = (b, E, P, W, H, k, z) => {
    const K = () => {
      if (b.isMounted) {
        let { next: Y, bu: le, u: ve, parent: xe, vnode: Be } = b;
        {
          const Pt = Zy(b);
          if (Pt) {
            Y && (Y.el = Be.el, ce(b, Y, z)), Pt.asyncDep.then(() => {
              b.isUnmounted || K();
            });
            return;
          }
        }
        let Ve = Y, Dt;
        C.NODE_ENV !== "production" && Aa(Y || b.vnode), ti(b, !1), Y ? (Y.el = Be.el, ce(b, Y, z)) : Y = Be, le && Vi(le), (Dt = Y.props && Y.props.onVnodeBeforeUpdate) && Fr(Dt, xe, Y, Be), ti(b, !0), C.NODE_ENV !== "production" && pn(b, "render");
        const yt = Xf(b);
        C.NODE_ENV !== "production" && hn(b, "render");
        const Ht = b.subTree;
        b.subTree = yt, C.NODE_ENV !== "production" && pn(b, "patch"), $(
          Ht,
          yt,
          // parent may have changed if it's in a teleport
          _(Ht.el),
          // anchor may have changed if it's in a fragment
          ut(Ht),
          b,
          H,
          k
        ), C.NODE_ENV !== "production" && hn(b, "patch"), Y.el = yt.el, Ve === null && pT(b, yt.el), ve && fr(ve, H), (Dt = Y.props && Y.props.onVnodeUpdated) && fr(
          () => Fr(Dt, xe, Y, Be),
          H
        ), C.NODE_ENV !== "production" && Py(b), C.NODE_ENV !== "production" && xa();
      } else {
        let Y;
        const { el: le, props: ve } = E, { bm: xe, m: Be, parent: Ve, root: Dt, type: yt } = b, Ht = Ho(E);
        if (ti(b, !1), xe && Vi(xe), !Ht && (Y = ve && ve.onVnodeBeforeMount) && Fr(Y, Ve, E), ti(b, !0), le && It) {
          const Pt = () => {
            C.NODE_ENV !== "production" && pn(b, "render"), b.subTree = Xf(b), C.NODE_ENV !== "production" && hn(b, "render"), C.NODE_ENV !== "production" && pn(b, "hydrate"), It(
              le,
              b.subTree,
              b,
              H,
              null
            ), C.NODE_ENV !== "production" && hn(b, "hydrate");
          };
          Ht && yt.__asyncHydrate ? yt.__asyncHydrate(
            le,
            b,
            Pt
          ) : Pt();
        } else {
          Dt.ce && Dt.ce._injectChildStyle(yt), C.NODE_ENV !== "production" && pn(b, "render");
          const Pt = b.subTree = Xf(b);
          C.NODE_ENV !== "production" && hn(b, "render"), C.NODE_ENV !== "production" && pn(b, "patch"), $(
            null,
            Pt,
            P,
            W,
            b,
            H,
            k
          ), C.NODE_ENV !== "production" && hn(b, "patch"), E.el = Pt.el;
        }
        if (Be && fr(Be, H), !Ht && (Y = ve && ve.onVnodeMounted)) {
          const Pt = E;
          fr(
            () => Fr(Y, Ve, Pt),
            H
          );
        }
        (E.shapeFlag & 256 || Ve && Ho(Ve.vnode) && Ve.vnode.shapeFlag & 256) && b.a && fr(b.a, H), b.isMounted = !0, C.NODE_ENV !== "production" && o$(b), E = P = W = null;
      }
    };
    b.scope.on();
    const q = b.effect = new oy(K);
    b.scope.off();
    const G = b.update = q.run.bind(q), ge = b.job = q.runIfDirty.bind(q);
    ge.i = b, ge.id = b.uid, q.scheduler = () => hu(ge), ti(b, !0), C.NODE_ENV !== "production" && (q.onTrack = b.rtc ? (Y) => Vi(b.rtc, Y) : void 0, q.onTrigger = b.rtg ? (Y) => Vi(b.rtg, Y) : void 0), G();
  }, ce = (b, E, P) => {
    E.component = b;
    const W = b.vnode.props;
    b.vnode = E, b.next = null, W$(b, E.props, W, P), Q$(b, E.children, P), mn(), Kd(b), bn();
  }, Ze = (b, E, P, W, H, k, z, K, q = !1) => {
    const G = b && b.children, ge = b ? b.shapeFlag : 0, Y = E.children, { patchFlag: le, shapeFlag: ve } = E;
    if (le > 0) {
      if (le & 128) {
        oe(
          G,
          Y,
          P,
          W,
          H,
          k,
          z,
          K,
          q
        );
        return;
      } else if (le & 256) {
        re(
          G,
          Y,
          P,
          W,
          H,
          k,
          z,
          K,
          q
        );
        return;
      }
    }
    ve & 8 ? (ge & 16 && pt(G, H, k), Y !== G && y(P, Y)) : ge & 16 ? ve & 16 ? oe(
      G,
      Y,
      P,
      W,
      H,
      k,
      z,
      K,
      q
    ) : pt(G, H, k, !0) : (ge & 8 && y(P, ""), ve & 16 && fe(
      Y,
      P,
      W,
      H,
      k,
      z,
      K,
      q
    ));
  }, re = (b, E, P, W, H, k, z, K, q) => {
    b = b || Ki, E = E || Ki;
    const G = b.length, ge = E.length, Y = Math.min(G, ge);
    let le;
    for (le = 0; le < Y; le++) {
      const ve = E[le] = q ? Ln(E[le]) : Nr(E[le]);
      $(
        b[le],
        ve,
        P,
        null,
        H,
        k,
        z,
        K,
        q
      );
    }
    G > ge ? pt(
      b,
      H,
      k,
      !0,
      !1,
      Y
    ) : fe(
      E,
      P,
      W,
      H,
      k,
      z,
      K,
      q,
      Y
    );
  }, oe = (b, E, P, W, H, k, z, K, q) => {
    let G = 0;
    const ge = E.length;
    let Y = b.length - 1, le = ge - 1;
    for (; G <= Y && G <= le; ) {
      const ve = b[G], xe = E[G] = q ? Ln(E[G]) : Nr(E[G]);
      if (Po(ve, xe))
        $(
          ve,
          xe,
          P,
          null,
          H,
          k,
          z,
          K,
          q
        );
      else
        break;
      G++;
    }
    for (; G <= Y && G <= le; ) {
      const ve = b[Y], xe = E[le] = q ? Ln(E[le]) : Nr(E[le]);
      if (Po(ve, xe))
        $(
          ve,
          xe,
          P,
          null,
          H,
          k,
          z,
          K,
          q
        );
      else
        break;
      Y--, le--;
    }
    if (G > Y) {
      if (G <= le) {
        const ve = le + 1, xe = ve < ge ? E[ve].el : W;
        for (; G <= le; )
          $(
            null,
            E[G] = q ? Ln(E[G]) : Nr(E[G]),
            P,
            xe,
            H,
            k,
            z,
            K,
            q
          ), G++;
      }
    } else if (G > le)
      for (; G <= Y; )
        Fe(b[G], H, k, !0), G++;
    else {
      const ve = G, xe = G, Be = /* @__PURE__ */ new Map();
      for (G = xe; G <= le; G++) {
        const mt = E[G] = q ? Ln(E[G]) : Nr(E[G]);
        mt.key != null && (C.NODE_ENV !== "production" && Be.has(mt.key) && J(
          "Duplicate keys found during update:",
          JSON.stringify(mt.key),
          "Make sure keys are unique."
        ), Be.set(mt.key, G));
      }
      let Ve, Dt = 0;
      const yt = le - xe + 1;
      let Ht = !1, Pt = 0;
      const Xr = new Array(yt);
      for (G = 0; G < yt; G++) Xr[G] = 0;
      for (G = ve; G <= Y; G++) {
        const mt = b[G];
        if (Dt >= yt) {
          Fe(mt, H, k, !0);
          continue;
        }
        let gr;
        if (mt.key != null)
          gr = Be.get(mt.key);
        else
          for (Ve = xe; Ve <= le; Ve++)
            if (Xr[Ve - xe] === 0 && Po(mt, E[Ve])) {
              gr = Ve;
              break;
            }
        gr === void 0 ? Fe(mt, H, k, !0) : (Xr[gr - xe] = G + 1, gr >= Pt ? Pt = gr : Ht = !0, $(
          mt,
          E[gr],
          P,
          null,
          H,
          k,
          z,
          K,
          q
        ), Dt++);
      }
      const yi = Ht ? nT(Xr) : Ki;
      for (Ve = yi.length - 1, G = yt - 1; G >= 0; G--) {
        const mt = xe + G, gr = E[mt], bs = mt + 1 < ge ? E[mt + 1].el : W;
        Xr[G] === 0 ? $(
          null,
          gr,
          P,
          bs,
          H,
          k,
          z,
          K,
          q
        ) : Ht && (Ve < 0 || G !== yi[Ve] ? Te(gr, P, bs, 2) : Ve--);
      }
    }
  }, Te = (b, E, P, W, H = null) => {
    const { el: k, type: z, transition: K, children: q, shapeFlag: G } = b;
    if (G & 6) {
      Te(b.component.subTree, E, P, W);
      return;
    }
    if (G & 128) {
      b.suspense.move(E, P, W);
      return;
    }
    if (G & 64) {
      z.move(b, E, P, ze);
      return;
    }
    if (z === Hr) {
      o(k, E, P);
      for (let Y = 0; Y < q.length; Y++)
        Te(q[Y], E, P, W);
      o(b.anchor, E, P);
      return;
    }
    if (z === jo) {
      X(b, E, P);
      return;
    }
    if (W !== 2 && G & 1 && K)
      if (W === 0)
        K.beforeEnter(k), o(k, E, P), fr(() => K.enter(k), H);
      else {
        const { leave: Y, delayLeave: le, afterLeave: ve } = K, xe = () => o(k, E, P), Be = () => {
          Y(k, () => {
            xe(), ve && ve();
          });
        };
        le ? le(k, xe, Be) : Be();
      }
    else
      o(k, E, P);
  }, Fe = (b, E, P, W = !1, H = !1) => {
    const {
      type: k,
      props: z,
      ref: K,
      children: q,
      dynamicChildren: G,
      shapeFlag: ge,
      patchFlag: Y,
      dirs: le,
      cacheIndex: ve
    } = b;
    if (Y === -2 && (H = !1), K != null && bl(K, null, P, b, !0), ve != null && (E.renderCache[ve] = void 0), ge & 256) {
      E.ctx.deactivate(b);
      return;
    }
    const xe = ge & 1 && le, Be = !Ho(b);
    let Ve;
    if (Be && (Ve = z && z.onVnodeBeforeUnmount) && Fr(Ve, E, b), ge & 6)
      it(b.component, P, W);
    else {
      if (ge & 128) {
        b.suspense.unmount(P, W);
        return;
      }
      xe && ei(b, null, E, "beforeUnmount"), ge & 64 ? b.type.remove(
        b,
        E,
        P,
        ze,
        W
      ) : G && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !G.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Hr || Y > 0 && Y & 64) ? pt(
        G,
        E,
        P,
        !1,
        !0
      ) : (k === Hr && Y & 384 || !H && ge & 16) && pt(q, E, P), W && qe(b);
    }
    (Be && (Ve = z && z.onVnodeUnmounted) || xe) && fr(() => {
      Ve && Fr(Ve, E, b), xe && ei(b, null, E, "unmounted");
    }, P);
  }, qe = (b) => {
    const { type: E, el: P, anchor: W, transition: H } = b;
    if (E === Hr) {
      C.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && H && !H.persisted ? b.children.forEach((z) => {
        z.type === hr ? s(z.el) : qe(z);
      }) : nt(P, W);
      return;
    }
    if (E === jo) {
      V(b);
      return;
    }
    const k = () => {
      s(P), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (b.shapeFlag & 1 && H && !H.persisted) {
      const { leave: z, delayLeave: K } = H, q = () => z(P, k);
      K ? K(b.el, k, q) : q();
    } else
      k();
  }, nt = (b, E) => {
    let P;
    for (; b !== E; )
      P = m(b), s(b), b = P;
    s(E);
  }, it = (b, E, P) => {
    C.NODE_ENV !== "production" && b.type.__hmrId && e$(b);
    const { bum: W, scope: H, job: k, subTree: z, um: K, m: q, a: G } = b;
    tg(q), tg(G), W && Vi(W), H.stop(), k && (k.flags |= 8, Fe(z, b, E, P)), K && fr(K, E), fr(() => {
      b.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), C.NODE_ENV !== "production" && a$(b);
  }, pt = (b, E, P, W = !1, H = !1, k = 0) => {
    for (let z = k; z < b.length; z++)
      Fe(b[z], E, P, W, H);
  }, ut = (b) => {
    if (b.shapeFlag & 6)
      return ut(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const E = m(b.anchor || b.el), P = E && E[p$];
    return P ? m(P) : E;
  };
  let gt = !1;
  const Yt = (b, E, P) => {
    b == null ? E._vnode && Fe(E._vnode, null, null, !0) : $(
      E._vnode || null,
      b,
      E,
      null,
      null,
      null,
      P
    ), E._vnode = b, gt || (gt = !0, Kd(), Cy(), gt = !1);
  }, ze = {
    p: $,
    um: Fe,
    m: Te,
    r: qe,
    mt: ae,
    mc: fe,
    pc: Ze,
    pbc: ke,
    n: ut,
    o: e
  };
  let vt, It;
  return {
    render: Yt,
    hydrate: vt,
    createApp: V$(Yt, vt)
  };
}
function Jf({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ti({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rT(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ca(e, t, r = !1) {
  const o = e.children, s = t.children;
  if (pe(o) && pe(s))
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      let c = s[u];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[u] = Ln(s[u]), c.el = f.el), !r && c.patchFlag !== -2 && Ca(f, c)), c.type === fs && (c.el = f.el), C.NODE_ENV !== "production" && c.type === hr && !c.el && (c.el = f.el);
    }
}
function nT(e) {
  const t = e.slice(), r = [0];
  let o, s, u, f, c;
  const p = e.length;
  for (o = 0; o < p; o++) {
    const g = e[o];
    if (g !== 0) {
      if (s = r[r.length - 1], e[s] < g) {
        t[o] = s, r.push(o);
        continue;
      }
      for (u = 0, f = r.length - 1; u < f; )
        c = u + f >> 1, e[r[c]] < g ? u = c + 1 : f = c;
      g < e[r[u]] && (u > 0 && (t[o] = r[u - 1]), r[u] = o);
    }
  }
  for (u = r.length, f = r[u - 1]; u-- > 0; )
    r[u] = f, f = t[f];
  return r;
}
function Zy(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zy(t);
}
function tg(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const iT = Symbol.for("v-scx"), oT = () => {
  {
    const e = Ta(iT);
    return e || C.NODE_ENV !== "production" && J(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Wo(e, t, r) {
  return C.NODE_ENV !== "production" && !be(t) && J(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), e_(e, t, r);
}
function e_(e, t, r = je) {
  const { immediate: o, deep: s, flush: u, once: f } = r;
  C.NODE_ENV !== "production" && !t && (o !== void 0 && J(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && J(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), f !== void 0 && J(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = st({}, r);
  C.NODE_ENV !== "production" && (c.onWarn = J);
  let p;
  if (yu)
    if (u === "sync") {
      const m = oT();
      p = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!t || o)
      c.once = !0;
    else {
      const m = () => {
      };
      return m.stop = Ot, m.resume = Ot, m.pause = Ot, m;
    }
  const g = Nt;
  c.call = (m, A, O) => zr(m, g, A, O);
  let y = !1;
  u === "post" ? c.scheduler = (m) => {
    fr(m, g && g.suspense);
  } : u !== "sync" && (y = !0, c.scheduler = (m, A) => {
    A ? m() : hu(m);
  }), c.augmentJob = (m) => {
    t && (m.flags |= 4), y && (m.flags |= 2, g && (m.id = g.uid, m.i = g));
  };
  const _ = Gx(e, t, c);
  return p && p.push(_), _;
}
function sT(e, t, r) {
  const o = this.proxy, s = ct(e) ? e.includes(".") ? t_(o, e) : () => o[e] : e.bind(o, o);
  let u;
  be(t) ? u = t : (u = t.handler, r = t);
  const f = ls(this), c = e_(s, u.bind(o), r);
  return f(), c;
}
function t_(e, t) {
  const r = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < r.length && o; s++)
      o = o[r[s]];
    return o;
  };
}
const aT = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pr(t)}Modifiers`] || e[`${tr(t)}Modifiers`];
function uT(e, t, ...r) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || je;
  if (C.NODE_ENV !== "production") {
    const {
      emitsOptions: y,
      propsOptions: [_]
    } = e;
    if (y)
      if (!(t in y))
        (!_ || !(ri(pr(t)) in _)) && J(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ri(pr(t))}" prop.`
        );
      else {
        const m = y[t];
        be(m) && (m(...r) || J(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = r;
  const u = t.startsWith("update:"), f = u && aT(o, t.slice(7));
  if (f && (f.trim && (s = r.map((y) => ct(y) ? y.trim() : y)), f.number && (s = r.map(ry))), C.NODE_ENV !== "production" && l$(e, t, s), C.NODE_ENV !== "production") {
    const y = t.toLowerCase();
    y !== t && o[ri(y)] && J(
      `Event "${y}" is emitted in component ${mu(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tr(
        t
      )}" instead of "${t}".`
    );
  }
  let c, p = o[c = ri(t)] || // also try camelCase event handler (#2249)
  o[c = ri(pr(t))];
  !p && u && (p = o[c = ri(tr(t))]), p && zr(
    p,
    e,
    6,
    s
  );
  const g = o[c + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, zr(
      g,
      e,
      6,
      s
    );
  }
}
function r_(e, t, r = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const u = e.emits;
  let f = {}, c = !1;
  if (!be(e)) {
    const p = (g) => {
      const y = r_(g, t, !0);
      y && (c = !0, st(f, y));
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !u && !c ? (Je(e) && o.set(e, null), null) : (pe(u) ? u.forEach((p) => f[p] = null) : st(f, u), Je(e) && o.set(e, f), f);
}
function gu(e, t) {
  return !e || !ns(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Re(e, t[0].toLowerCase() + t.slice(1)) || Re(e, tr(t)) || Re(e, t));
}
let xl = !1;
function qa() {
  xl = !0;
}
function Xf(e) {
  const {
    type: t,
    vnode: r,
    proxy: o,
    withProxy: s,
    propsOptions: [u],
    slots: f,
    attrs: c,
    emit: p,
    render: g,
    renderCache: y,
    props: _,
    data: m,
    setupState: A,
    ctx: O,
    inheritAttrs: $
  } = e, N = ka(e);
  let R, L;
  C.NODE_ENV !== "production" && (xl = !1);
  try {
    if (r.shapeFlag & 4) {
      const V = s || o, ee = C.NODE_ENV !== "production" && A.__isScriptSetup ? new Proxy(V, {
        get(he, se, fe) {
          return J(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(he, se, fe);
        }
      }) : V;
      R = Nr(
        g.call(
          ee,
          V,
          y,
          C.NODE_ENV !== "production" ? kr(_) : _,
          A,
          m,
          O
        )
      ), L = c;
    } else {
      const V = t;
      C.NODE_ENV !== "production" && c === _ && qa(), R = Nr(
        V.length > 1 ? V(
          C.NODE_ENV !== "production" ? kr(_) : _,
          C.NODE_ENV !== "production" ? {
            get attrs() {
              return qa(), kr(c);
            },
            slots: f,
            emit: p
          } : { attrs: c, slots: f, emit: p }
        ) : V(
          C.NODE_ENV !== "production" ? kr(_) : _,
          null
        )
      ), L = t.props ? c : fT(c);
    }
  } catch (V) {
    ko.length = 0, as(V, e, 1), R = Dr(hr);
  }
  let D = R, X;
  if (C.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && ([D, X] = n_(R)), L && $ !== !1) {
    const V = Object.keys(L), { shapeFlag: ee } = D;
    if (V.length) {
      if (ee & 7)
        u && V.some(Ba) && (L = lT(
          L,
          u
        )), D = Hn(D, L, !1, !0);
      else if (C.NODE_ENV !== "production" && !xl && D.type !== hr) {
        const he = Object.keys(c), se = [], fe = [];
        for (let Ae = 0, ke = he.length; Ae < ke; Ae++) {
          const M = he[Ae];
          ns(M) ? Ba(M) || se.push(M[2].toLowerCase() + M.slice(3)) : fe.push(M);
        }
        fe.length && J(
          `Extraneous non-props attributes (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), se.length && J(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return r.dirs && (C.NODE_ENV !== "production" && !rg(D) && J(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), D = Hn(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition && (C.NODE_ENV !== "production" && !rg(D) && J(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), bc(D, r.transition)), C.NODE_ENV !== "production" && X ? X(D) : R = D, ka(N), R;
}
const n_ = (e) => {
  const t = e.children, r = e.dynamicChildren, o = Ac(t, !1);
  if (o) {
    if (C.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return n_(o);
  } else return [e, void 0];
  const s = t.indexOf(o), u = r ? r.indexOf(o) : -1, f = (c) => {
    t[s] = c, r && (u > -1 ? r[u] = c : c.patchFlag > 0 && (e.dynamicChildren = [...r, c]));
  };
  return [Nr(o), f];
};
function Ac(e, t = !0) {
  let r;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (vu(s)) {
      if (s.type !== hr || s.children === "v-if") {
        if (r)
          return;
        if (r = s, C.NODE_ENV !== "production" && t && r.patchFlag > 0 && r.patchFlag & 2048)
          return Ac(r.children);
      }
    } else
      return;
  }
  return r;
}
const fT = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ns(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lT = (e, t) => {
  const r = {};
  for (const o in e)
    (!Ba(o) || !(o.slice(9) in t)) && (r[o] = e[o]);
  return r;
}, rg = (e) => e.shapeFlag & 7 || e.type === hr;
function cT(e, t, r) {
  const { props: o, children: s, component: u } = e, { props: f, children: c, patchFlag: p } = t, g = u.emitsOptions;
  if (C.NODE_ENV !== "production" && (s || c) && Gr || t.dirs || t.transition)
    return !0;
  if (r && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return o ? ng(o, f, g) : !!f;
    if (p & 8) {
      const y = t.dynamicProps;
      for (let _ = 0; _ < y.length; _++) {
        const m = y[_];
        if (f[m] !== o[m] && !gu(g, m))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : o === f ? !1 : o ? f ? ng(o, f, g) : !0 : !!f;
  return !1;
}
function ng(e, t, r) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const u = o[s];
    if (t[u] !== e[u] && !gu(r, u))
      return !0;
  }
  return !1;
}
function pT({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const i_ = (e) => e.__isSuspense;
function hT(e, t) {
  t && t.pendingBranch ? pe(e) ? t.effects.push(...e) : t.effects.push(e) : Ty(e);
}
const Hr = Symbol.for("v-fgt"), fs = Symbol.for("v-txt"), hr = Symbol.for("v-cmt"), jo = Symbol.for("v-stc"), ko = [];
let cr = null;
function Ui(e = !1) {
  ko.push(cr = e ? null : []);
}
function dT() {
  ko.pop(), cr = ko[ko.length - 1] || null;
}
let Zo = 1;
function ig(e) {
  Zo += e, e < 0 && cr && (cr.hasOnce = !0);
}
function o_(e) {
  return e.dynamicChildren = Zo > 0 ? cr || Ki : null, dT(), Zo > 0 && cr && cr.push(e), e;
}
function Do(e, t, r, o, s, u) {
  return o_(
    $t(
      e,
      t,
      r,
      o,
      s,
      u,
      !0
    )
  );
}
function gT(e, t, r, o, s) {
  return o_(
    Dr(
      e,
      t,
      r,
      o,
      s,
      !0
    )
  );
}
function vu(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Po(e, t) {
  if (C.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const r = $a.get(t.type);
    if (r && r.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const vT = (...e) => a_(
  ...e
), s_ = ({ key: e }) => e ?? null, Na = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || St(e) || be(e) ? { i: zt, r: e, k: t, f: !!r } : e : null);
function $t(e, t = null, r = null, o = 0, s = null, u = e === Hr ? 0 : 1, f = !1, c = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && s_(t),
    ref: t && Na(t),
    scopeId: My,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: u,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: zt
  };
  return c ? (xc(p, r), u & 128 && e.normalize(p)) : r && (p.shapeFlag |= ct(r) ? 8 : 16), C.NODE_ENV !== "production" && p.key !== p.key && J("VNode created with invalid key (NaN). VNode type:", p.type), Zo > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  cr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || u & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && cr.push(p), p;
}
const Dr = C.NODE_ENV !== "production" ? vT : a_;
function a_(e, t = null, r = null, o = 0, s = null, u = !1) {
  if ((!e || e === $$) && (C.NODE_ENV !== "production" && !e && J(`Invalid vnode type when creating vnode: ${e}.`), e = hr), vu(e)) {
    const c = Hn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && xc(c, r), Zo > 0 && !u && cr && (c.shapeFlag & 6 ? cr[cr.indexOf(e)] = c : cr.push(c)), c.patchFlag = -2, c;
  }
  if (p_(e) && (e = e.__vccOpts), t) {
    t = yT(t);
    let { class: c, style: p } = t;
    c && !ct(c) && (t.class = ic(c)), Je(p) && (Ha(p) && !pe(p) && (p = st({}, p)), t.style = nc(p));
  }
  const f = ct(e) ? 1 : i_(e) ? 128 : h$(e) ? 64 : Je(e) ? 4 : be(e) ? 2 : 0;
  return C.NODE_ENV !== "production" && f & 4 && Ha(e) && (e = Oe(e), J(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), $t(
    e,
    t,
    r,
    o,
    s,
    f,
    u,
    !0
  );
}
function yT(e) {
  return e ? Ha(e) || Ky(e) ? st({}, e) : e : null;
}
function Hn(e, t, r = !1, o = !1) {
  const { props: s, ref: u, patchFlag: f, children: c, transition: p } = e, g = t ? _T(s || {}, t) : s, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && s_(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && u ? pe(u) ? u.concat(Na(t)) : [u, Na(t)] : Na(t)
    ) : u,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: C.NODE_ENV !== "production" && f === -1 && pe(c) ? c.map(u_) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Hr ? f === -1 ? 16 : f | 16 : f,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Hn(e.ssContent),
    ssFallback: e.ssFallback && Hn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && o && bc(
    y,
    p.clone(y)
  ), y;
}
function u_(e) {
  const t = Hn(e);
  return pe(e.children) && (t.children = e.children.map(u_)), t;
}
function Hi(e = " ", t = 0) {
  return Dr(fs, null, e, t);
}
function og(e, t) {
  const r = Dr(jo, null, e);
  return r.staticCount = t, r;
}
function ga(e = "", t = !1) {
  return t ? (Ui(), gT(hr, null, e)) : Dr(hr, null, e);
}
function Nr(e) {
  return e == null || typeof e == "boolean" ? Dr(hr) : pe(e) ? Dr(
    Hr,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vu(e) ? Ln(e) : Dr(fs, null, String(e));
}
function Ln(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hn(e);
}
function xc(e, t) {
  let r = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (pe(t))
    r = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), xc(e, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = t._;
      !s && !Ky(t) ? t._ctx = zt : s === 3 && zt && (zt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else be(t) ? (t = { default: t, _ctx: zt }, r = 32) : (t = String(t), o & 64 ? (r = 16, t = [Hi(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function _T(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ic([t.class, o.class]));
      else if (s === "style")
        t.style = nc([t.style, o.style]);
      else if (ns(s)) {
        const u = t[s], f = o[s];
        f && u !== f && !(pe(u) && u.includes(f)) && (t[s] = u ? [].concat(u, f) : f);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Fr(e, t, r, o = null) {
  zr(e, t, 7, [
    r,
    o
  ]);
}
const mT = jy();
let bT = 0;
function wT(e, t, r) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || mT, u = {
    uid: bT++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new iy(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: zy(o, s),
    emitsOptions: r_(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: je,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: je,
    data: je,
    props: je,
    attrs: je,
    slots: je,
    refs: je,
    setupState: je,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return C.NODE_ENV !== "production" ? u.ctx = T$(u) : u.ctx = { _: u }, u.root = t ? t.root : u, u.emit = uT.bind(null, u), e.ce && e.ce(u), u;
}
let Nt = null;
const ET = () => Nt || zt;
let za, $l;
{
  const e = rc(), t = (r, o) => {
    let s;
    return (s = e[r]) || (s = e[r] = []), s.push(o), (u) => {
      s.length > 1 ? s.forEach((f) => f(u)) : s[0](u);
    };
  };
  za = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Nt = r
  ), $l = t(
    "__VUE_SSR_SETTERS__",
    (r) => yu = r
  );
}
const ls = (e) => {
  const t = Nt;
  return za(e), e.scope.on(), () => {
    e.scope.off(), za(t);
  };
}, sg = () => {
  Nt && Nt.scope.off(), za(null);
}, OT = /* @__PURE__ */ _n("slot,component");
function Tl(e, { isNativeTag: t }) {
  (OT(e) || t(e)) && J(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function f_(e) {
  return e.vnode.shapeFlag & 4;
}
let yu = !1;
function ST(e, t = !1, r = !1) {
  t && $l(t);
  const { props: o, children: s } = e.vnode, u = f_(e);
  U$(e, o, u, t), X$(e, s, r);
  const f = u ? AT(e, t) : void 0;
  return t && $l(!1), f;
}
function AT(e, t) {
  var r;
  const o = e.type;
  if (C.NODE_ENV !== "production") {
    if (o.name && Tl(o.name, e.appContext.config), o.components) {
      const u = Object.keys(o.components);
      for (let f = 0; f < u.length; f++)
        Tl(u[f], e.appContext.config);
    }
    if (o.directives) {
      const u = Object.keys(o.directives);
      for (let f = 0; f < u.length; f++)
        Ry(u[f]);
    }
    o.compilerOptions && xT() && J(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hy), C.NODE_ENV !== "production" && C$(e);
  const { setup: s } = o;
  if (s) {
    const u = e.setupContext = s.length > 1 ? TT(e) : null, f = ls(e);
    mn();
    const c = no(
      s,
      e,
      0,
      [
        C.NODE_ENV !== "production" ? kr(e.props) : e.props,
        u
      ]
    );
    if (bn(), f(), Ql(c)) {
      if (Ho(e) || Vy(e), c.then(sg, sg), t)
        return c.then((p) => {
          ag(e, p, t);
        }).catch((p) => {
          as(p, e, 0);
        });
      if (e.asyncDep = c, C.NODE_ENV !== "production" && !e.suspense) {
        const p = (r = o.name) != null ? r : "Anonymous";
        J(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ag(e, c, t);
  } else
    l_(e, t);
}
function ag(e, t, r) {
  be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) ? (C.NODE_ENV !== "production" && vu(t) && J(
    "setup() should not return VNodes directly - return a render function instead."
  ), C.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Sy(t), C.NODE_ENV !== "production" && N$(e)) : C.NODE_ENV !== "production" && t !== void 0 && J(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), l_(e, r);
}
let Cl;
const xT = () => !Cl;
function l_(e, t, r) {
  const o = e.type;
  if (!e.render) {
    if (!t && Cl && !o.render) {
      const s = o.template || Oc(e).template;
      if (s) {
        C.NODE_ENV !== "production" && pn(e, "compile");
        const { isCustomElement: u, compilerOptions: f } = e.appContext.config, { delimiters: c, compilerOptions: p } = o, g = st(
          st(
            {
              isCustomElement: u,
              delimiters: c
            },
            f
          ),
          p
        );
        o.render = Cl(s, g), C.NODE_ENV !== "production" && hn(e, "compile");
      }
    }
    e.render = o.render || Ot;
  }
  {
    const s = ls(e);
    mn();
    try {
      D$(e);
    } finally {
      bn(), s();
    }
  }
  C.NODE_ENV !== "production" && !o.render && e.render === Ot && !t && (o.template ? J(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : J("Component is missing template or render function: ", o));
}
const ug = C.NODE_ENV !== "production" ? {
  get(e, t) {
    return qa(), At(e, "get", ""), e[t];
  },
  set() {
    return J("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return J("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return At(e, "get", ""), e[t];
  }
};
function $T(e) {
  return new Proxy(e.slots, {
    get(t, r) {
      return At(e, "get", "$slots"), t[r];
    }
  });
}
function TT(e) {
  const t = (r) => {
    if (C.NODE_ENV !== "production" && (e.exposed && J("expose() should be called only once per setup()."), r != null)) {
      let o = typeof r;
      o === "object" && (pe(r) ? o = "array" : St(r) && (o = "ref")), o !== "object" && J(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = r || {};
  };
  if (C.NODE_ENV !== "production") {
    let r, o;
    return Object.freeze({
      get attrs() {
        return r || (r = new Proxy(e.attrs, ug));
      },
      get slots() {
        return o || (o = $T(e));
      },
      get emit() {
        return (s, ...u) => e.emit(s, ...u);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ug),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function _u(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Sy(hc(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in fi)
        return fi[r](e);
    },
    has(t, r) {
      return r in t || r in fi;
    }
  })) : e.proxy;
}
const CT = /(?:^|[-_])(\w)/g, NT = (e) => e.replace(CT, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function c_(e, t = !0) {
  return be(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mu(e, t, r = !1) {
  let o = c_(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (u) => {
      for (const f in u)
        if (u[f] === t)
          return f;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? NT(o) : r ? "App" : "Anonymous";
}
function p_(e) {
  return be(e) && "__vccOpts" in e;
}
const IT = (e, t) => {
  const r = jx(e, t, yu);
  if (C.NODE_ENV !== "production") {
    const o = ET();
    o && o.appContext.config.warnRecursiveComputed && (r._warnRecursive = !0);
  }
  return r;
};
function DT() {
  if (C.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(_) {
      return Je(_) ? _.__isVue ? ["div", e, "VueInstance"] : St(_) ? [
        "div",
        {},
        ["span", e, y(_)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in _ ? _._value : _),
        ">"
      ] : zi(_) ? [
        "div",
        {},
        ["span", e, rr(_) ? "ShallowReactive" : "Reactive"],
        "<",
        c(_),
        `>${yn(_) ? " (readonly)" : ""}`
      ] : yn(_) ? [
        "div",
        {},
        ["span", e, rr(_) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(_),
        ">"
      ] : null : null;
    },
    hasBody(_) {
      return _ && _.__isVue;
    },
    body(_) {
      if (_ && _.__isVue)
        return [
          "div",
          {},
          ...u(_.$)
        ];
    }
  };
  function u(_) {
    const m = [];
    _.type.props && _.props && m.push(f("props", Oe(_.props))), _.setupState !== je && m.push(f("setup", _.setupState)), _.data !== je && m.push(f("data", Oe(_.data)));
    const A = p(_, "computed");
    A && m.push(f("computed", A));
    const O = p(_, "inject");
    return O && m.push(f("injected", O)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: _ }]
    ]), m;
  }
  function f(_, m) {
    return m = st({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        _
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((A) => [
          "div",
          {},
          ["span", o, A + ": "],
          c(m[A], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(_, m = !0) {
    return typeof _ == "number" ? ["span", t, _] : typeof _ == "string" ? ["span", r, JSON.stringify(_)] : typeof _ == "boolean" ? ["span", o, _] : Je(_) ? ["object", { object: m ? Oe(_) : _ }] : ["span", r, String(_)];
  }
  function p(_, m) {
    const A = _.type;
    if (be(A))
      return;
    const O = {};
    for (const $ in _.ctx)
      g(A, $, m) && (O[$] = _.ctx[$]);
    return O;
  }
  function g(_, m, A) {
    const O = _[A];
    if (pe(O) && O.includes(m) || Je(O) && m in O || _.extends && g(_.extends, m, A) || _.mixins && _.mixins.some(($) => g($, m, A)))
      return !0;
  }
  function y(_) {
    return rr(_) ? "ShallowRef" : _.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const fg = "3.5.10", dr = C.NODE_ENV !== "production" ? J : Ot;
var Rt = { cider: "2" };
let Nl;
const lg = typeof window < "u" && window.trustedTypes;
if (lg)
  try {
    Nl = /* @__PURE__ */ lg.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Rt.NODE_ENV !== "production" && dr(`Error creating trusted types policy: ${e}`);
  }
const h_ = Nl ? (e) => Nl.createHTML(e) : (e) => e, PT = "http://www.w3.org/2000/svg", LT = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, cg = dn && /* @__PURE__ */ dn.createElement("template"), MT = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, o) => {
    const s = t === "svg" ? dn.createElementNS(PT, e) : t === "mathml" ? dn.createElementNS(LT, e) : r ? dn.createElement(e, { is: r }) : dn.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => dn.createTextNode(e),
  createComment: (e) => dn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, o, s, u) {
    const f = r ? r.previousSibling : t.lastChild;
    if (s && (s === u || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), r), !(s === u || !(s = s.nextSibling)); )
        ;
    else {
      cg.innerHTML = h_(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = cg.content;
      if (o === "svg" || o === "mathml") {
        const p = c.firstChild;
        for (; p.firstChild; )
          c.appendChild(p.firstChild);
        c.removeChild(p);
      }
      t.insertBefore(c, r);
    }
    return [
      // first
      f ? f.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, RT = Symbol("_vtc");
function FT(e, t, r) {
  const o = e[RT];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const pg = Symbol("_vod"), VT = Symbol("_vsh"), BT = Symbol(Rt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), UT = /(^|;)\s*display\s*:/;
function HT(e, t, r) {
  const o = e.style, s = ct(r);
  let u = !1;
  if (r && !s) {
    if (t)
      if (ct(t))
        for (const f of t.split(";")) {
          const c = f.slice(0, f.indexOf(":")).trim();
          r[c] == null && Ia(o, c, "");
        }
      else
        for (const f in t)
          r[f] == null && Ia(o, f, "");
    for (const f in r)
      f === "display" && (u = !0), Ia(o, f, r[f]);
  } else if (s) {
    if (t !== r) {
      const f = o[BT];
      f && (r += ";" + f), o.cssText = r, u = UT.test(r);
    }
  } else t && e.removeAttribute("style");
  pg in e && (e[pg] = u ? o.display : "", e[VT] && (o.display = "none"));
}
const WT = /[^\\];\s*$/, hg = /\s*!important$/;
function Ia(e, t, r) {
  if (pe(r))
    r.forEach((o) => Ia(e, t, o));
  else if (r == null && (r = ""), Rt.NODE_ENV !== "production" && WT.test(r) && dr(
    `Unexpected semicolon at the end of '${t}' style value: '${r}'`
  ), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const o = jT(e, t);
    hg.test(r) ? e.setProperty(
      tr(o),
      r.replace(hg, ""),
      "important"
    ) : e[o] = r;
  }
}
const dg = ["Webkit", "Moz", "ms"], Qf = {};
function jT(e, t) {
  const r = Qf[t];
  if (r)
    return r;
  let o = pr(t);
  if (o !== "filter" && o in e)
    return Qf[t] = o;
  o = fu(o);
  for (let s = 0; s < dg.length; s++) {
    const u = dg[s] + o;
    if (u in e)
      return Qf[t] = u;
  }
  return t;
}
const gg = "http://www.w3.org/1999/xlink";
function vg(e, t, r, o, s, u = hx(t)) {
  o && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(gg, t.slice(6, t.length)) : e.setAttributeNS(gg, t, r) : r == null || u && !ny(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    u ? "" : Bn(r) ? String(r) : r
  );
}
function yg(e, t, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? h_(r) : r);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? e.getAttribute("value") || "" : e.value, c = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (f !== c || !("_value" in e)) && (e.value = c), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let u = !1;
  if (r === "" || r == null) {
    const f = typeof e[t];
    f === "boolean" ? r = ny(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0);
  }
  try {
    e[t] = r;
  } catch (f) {
    Rt.NODE_ENV !== "production" && !u && dr(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${r} is invalid.`,
      f
    );
  }
  u && e.removeAttribute(t);
}
function $c(e, t, r, o) {
  e.addEventListener(t, r, o);
}
function kT(e, t, r, o) {
  e.removeEventListener(t, r, o);
}
const _g = Symbol("_vei");
function GT(e, t, r, o, s = null) {
  const u = e[_g] || (e[_g] = {}), f = u[t];
  if (o && f)
    f.value = Rt.NODE_ENV !== "production" ? bg(o, t) : o;
  else {
    const [c, p] = KT(t);
    if (o) {
      const g = u[t] = YT(
        Rt.NODE_ENV !== "production" ? bg(o, t) : o,
        s
      );
      $c(e, c, g, p);
    } else f && (kT(e, c, f, p), u[t] = void 0);
  }
}
const mg = /(?:Once|Passive|Capture)$/;
function KT(e) {
  let t;
  if (mg.test(e)) {
    t = {};
    let o;
    for (; o = e.match(mg); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tr(e.slice(2)), t];
}
let Zf = 0;
const qT = /* @__PURE__ */ Promise.resolve(), zT = () => Zf || (qT.then(() => Zf = 0), Zf = Date.now());
function YT(e, t) {
  const r = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= r.attached)
      return;
    zr(
      JT(o, r.value),
      t,
      5,
      [o]
    );
  };
  return r.value = e, r.attached = zT(), r;
}
function bg(e, t) {
  return be(e) || pe(e) ? e : (dr(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ot);
}
function JT(e, t) {
  if (pe(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const wg = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, XT = (e, t, r, o, s, u) => {
  const f = s === "svg";
  t === "class" ? FT(e, o, f) : t === "style" ? HT(e, r, o) : ns(t) ? Ba(t) || GT(e, t, r, o, u) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : QT(e, t, o, f)) ? (yg(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vg(e, t, o, f, u, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ct(o)) ? yg(e, pr(t), o) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), vg(e, t, o, f));
};
function QT(e, t, r, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wg(t) && be(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return wg(t) && ct(r) ? !1 : t in e;
}
const Eg = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ZT(e, t, r) {
  const o = /* @__PURE__ */ Fy(e, t);
  ec(o) && st(o, t);
  class s extends Tc {
    constructor(f) {
      super(o, f, r);
    }
  }
  return s.def = o, s;
}
const eC = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Tc extends eC {
  constructor(t, r = {}, o = xg) {
    super(), this._def = t, this._props = r, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== xg ? this._root = this.shadowRoot : (Rt.NODE_ENV !== "production" && this.shadowRoot && dr(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Tc) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, yc(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const s of o)
        this._setAttr(s.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, s = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: u, styles: f } = o;
      let c;
      if (u && !pe(u))
        for (const p in u) {
          const g = u[p];
          (g === Number || g && g.type === Number) && (p in this._props && (this._props[p] = Vd(this._props[p])), (c || (c = /* @__PURE__ */ Object.create(null)))[pr(p)] = !0);
        }
      this._numberProps = c, s && this._resolveProps(o), this.shadowRoot ? this._applyStyles(f) : Rt.NODE_ENV !== "production" && f && dr(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, r = this._def.__asyncLoader;
    r ? this._pendingResolve = r().then(
      (o) => t(this._def = o, !0)
    ) : t(this._def);
  }
  _mount(t) {
    Rt.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const r = this._instance && this._instance.exposed;
    if (r)
      for (const o in r)
        Re(this, o) ? Rt.NODE_ENV !== "production" && dr(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => _t(r[o])
        });
  }
  _resolveProps(t) {
    const { props: r } = t, o = pe(r) ? r : Object.keys(r || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && o.includes(s) && this._setProp(s, this[s]);
    for (const s of o.map(pr))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(u) {
          this._setProp(s, u, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const r = this.hasAttribute(t);
    let o = r ? this.getAttribute(t) : Eg;
    const s = pr(t);
    r && this._numberProps && this._numberProps[s] && (o = Vd(o)), this._setProp(s, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, r, o = !0, s = !1) {
    r !== this._props[t] && (r === Eg ? delete this._props[t] : (this._props[t] = r, t === "key" && this._app && (this._app._ceVNode.key = r)), s && this._instance && this._update(), o && (r === !0 ? this.setAttribute(tr(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(tr(t), r + "") : r || this.removeAttribute(tr(t))));
  }
  _update() {
    nC(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const r = Dr(this._def, st(t, this._props));
    return this._instance || (r.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, Rt.NODE_ENV !== "production" && (o.ceReload = (u) => {
        this._styles && (this._styles.forEach((f) => this._root.removeChild(f)), this._styles.length = 0), this._applyStyles(u), this._instance = null, this._update();
      });
      const s = (u, f) => {
        this.dispatchEvent(
          new CustomEvent(
            u,
            ec(f[0]) ? st({ detail: f }, f[0]) : { detail: f }
          )
        );
      };
      o.emit = (u, ...f) => {
        s(u, f), tr(u) !== u && s(tr(u), f);
      }, this._setParent();
    }), r;
  }
  _applyStyles(t, r) {
    if (!t) return;
    if (r) {
      if (r === this._def || this._styleChildren.has(r))
        return;
      this._styleChildren.add(r);
    }
    const o = this._nonce;
    for (let s = t.length - 1; s >= 0; s--) {
      const u = document.createElement("style");
      if (o && u.setAttribute("nonce", o), u.textContent = t[s], this.shadowRoot.prepend(u), Rt.NODE_ENV !== "production")
        if (r) {
          if (r.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let f = this._childStyles.get(r.__hmrId);
            f || this._childStyles.set(r.__hmrId, f = []), f.push(u);
          }
        } else
          (this._styles || (this._styles = [])).push(u);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let r;
    for (; r = this.firstChild; ) {
      const o = r.nodeType === 1 && r.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(r), this.removeChild(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), r = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const s = t[o], u = s.getAttribute("name") || "default", f = this._slots[u], c = s.parentNode;
      if (f)
        for (const p of f) {
          if (r && p.nodeType === 1) {
            const g = r + "-s", y = document.createTreeWalker(p, 1);
            p.setAttribute(g, "");
            let _;
            for (; _ = y.nextNode(); )
              _.setAttribute(g, "");
          }
          c.insertBefore(p, s);
        }
      else
        for (; s.firstChild; ) c.insertBefore(s.firstChild, s);
      c.removeChild(s);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (Rt.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const r = this._childStyles.get(t.__hmrId);
      r && (r.forEach((o) => this._root.removeChild(o)), r.length = 0);
    }
  }
}
const Ya = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return pe(t) ? (r) => Vi(t, r) : t;
}, Xi = Symbol("_assign"), tC = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, r) {
    e[Xi] = Ya(r), $c(e, "change", () => {
      const o = e._modelValue, s = es(e), u = e.checked, f = e[Xi];
      if (pe(o)) {
        const c = oc(o, s), p = c !== -1;
        if (u && !p)
          f(o.concat(s));
        else if (!u && p) {
          const g = [...o];
          g.splice(c, 1), f(g);
        }
      } else if (is(o)) {
        const c = new Set(o);
        u ? c.add(s) : c.delete(s), f(c);
      } else
        f(d_(e, u));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Og,
  beforeUpdate(e, t, r) {
    e[Xi] = Ya(r), Og(e, t, r);
  }
};
function Og(e, { value: t }, r) {
  e._modelValue = t;
  let o;
  pe(t) ? o = oc(t, r.props.value) > -1 : is(t) ? o = t.has(r.props.value) : o = ss(t, d_(e, !0)), e.checked !== o && (e.checked = o);
}
const va = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, o) {
    const s = is(t);
    $c(e, "change", () => {
      const u = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => r ? ry(es(f)) : es(f)
      );
      e[Xi](
        e.multiple ? s ? new Set(u) : u : u[0]
      ), e._assigning = !0, yc(() => {
        e._assigning = !1;
      });
    }), e[Xi] = Ya(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Sg(e, t);
  },
  beforeUpdate(e, t, r) {
    e[Xi] = Ya(r);
  },
  updated(e, { value: t }) {
    e._assigning || Sg(e, t);
  }
};
function Sg(e, t) {
  const r = e.multiple, o = pe(t);
  if (r && !o && !is(t)) {
    Rt.NODE_ENV !== "production" && dr(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, u = e.options.length; s < u; s++) {
    const f = e.options[s], c = es(f);
    if (r)
      if (o) {
        const p = typeof c;
        p === "string" || p === "number" ? f.selected = t.some((g) => String(g) === String(c)) : f.selected = oc(t, c) > -1;
      } else
        f.selected = t.has(c);
    else if (ss(es(f), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function es(e) {
  return "_value" in e ? e._value : e.value;
}
function d_(e, t) {
  const r = t ? "_trueValue" : "_falseValue";
  return r in e ? e[r] : t;
}
const rC = /* @__PURE__ */ st({ patchProp: XT }, MT);
let Ag;
function g_() {
  return Ag || (Ag = eT(rC));
}
const nC = (...e) => {
  g_().render(...e);
}, xg = (...e) => {
  const t = g_().createApp(...e);
  Rt.NODE_ENV !== "production" && (oC(t), sC(t));
  const { mount: r } = t;
  return t.mount = (o) => {
    const s = aC(o);
    if (!s) return;
    const u = t._component;
    !be(u) && !u.render && !u.template && (u.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const f = r(s, !1, iC(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), f;
  }, t;
};
function iC(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function oC(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => fx(t) || lx(t) || cx(t),
    writable: !1
  });
}
function sC(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        dr(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const r = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return dr(o), r;
      },
      set() {
        dr(o);
      }
    });
  }
}
function aC(e) {
  if (ct(e)) {
    const t = document.querySelector(e);
    return Rt.NODE_ENV !== "production" && !t && dr(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Rt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && dr(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var uC = { cider: "2" };
function fC() {
  DT();
}
uC.NODE_ENV !== "production" && fC();
var lC = !1;
function cC() {
  return v_().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function v_() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const pC = typeof Proxy == "function", hC = "devtools-plugin:setup", dC = "plugin:settings:set";
let Pi, Il;
function gC() {
  var e;
  return Pi !== void 0 || (typeof window < "u" && window.performance ? (Pi = !0, Il = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Pi = !0, Il = globalThis.perf_hooks.performance) : Pi = !1), Pi;
}
function vC() {
  return gC() ? Il.now() : Date.now();
}
class yC {
  constructor(t, r) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = r;
    const o = {};
    if (t.settings)
      for (const f in t.settings) {
        const c = t.settings[f];
        o[f] = c.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let u = Object.assign({}, o);
    try {
      const f = localStorage.getItem(s), c = JSON.parse(f);
      Object.assign(u, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return u;
      },
      setSettings(f) {
        try {
          localStorage.setItem(s, JSON.stringify(f));
        } catch {
        }
        u = f;
      },
      now() {
        return vC();
      }
    }, r && r.on(dC, (f, c) => {
      f === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (f, c) => this.target ? this.target.on[c] : (...p) => {
        this.onQueue.push({
          method: c,
          args: p
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (f, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...p) => (this.targetQueue.push({
        method: c,
        args: p,
        resolve: () => {
        }
      }), this.fallbacks[c](...p)) : (...p) => new Promise((g) => {
        this.targetQueue.push({
          method: c,
          args: p,
          resolve: g
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const r of this.onQueue)
      this.target.on[r.method](...r.args);
    for (const r of this.targetQueue)
      r.resolve(await this.target[r.method](...r.args));
  }
}
function y_(e, t) {
  const r = e, o = v_(), s = cC(), u = pC && r.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !u))
    s.emit(hC, e, t);
  else {
    const f = u ? new yC(r, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: r,
      setupFn: t,
      proxy: f
    }), f && t(f.proxiedTarget);
  }
}
var Bo = { cider: "2" };
const _C = Bo.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
var li;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(li || (li = {}));
const __ = typeof window < "u", $g = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function mC(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Cc(e, t, r) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    w_(o.response, t, r);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function m_(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Da(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const r = document.createEvent("MouseEvents");
    r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(r);
  }
}
const Pa = typeof navigator == "object" ? navigator : { userAgent: "" }, b_ = /Macintosh/.test(Pa.userAgent) && /AppleWebKit/.test(Pa.userAgent) && !/Safari/.test(Pa.userAgent), w_ = __ ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !b_ ? bC : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Pa ? wC : (
      // Fallback to using FileReader and a popup
      EC
    )
  )
) : () => {
};
function bC(e, t = "download", r) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? m_(o.href) ? Cc(e, t, r) : (o.target = "_blank", Da(o)) : Da(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    Da(o);
  }, 0));
}
function wC(e, t = "download", r) {
  if (typeof e == "string")
    if (m_(e))
      Cc(e, t, r);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        Da(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(mC(e, r), t);
}
function EC(e, t, r, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Cc(e, t, r);
  const s = e.type === "application/octet-stream", u = /constructor/i.test(String($g.HTMLElement)) || "safari" in $g, f = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((f || s && u || b_) && typeof FileReader < "u") {
    const c = new FileReader();
    c.onloadend = function() {
      let p = c.result;
      if (typeof p != "string")
        throw o = null, new Error("Wrong reader.result type");
      p = f ? p : p.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = p : location.assign(p), o = null;
    }, c.readAsDataURL(e);
  } else {
    const c = URL.createObjectURL(e);
    o ? o.location.assign(c) : location.href = c, o = null, setTimeout(function() {
      URL.revokeObjectURL(c);
    }, 4e4);
  }
}
function Ct(e, t) {
  const r = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(r, t) : t === "error" ? console.error(r) : t === "warn" ? console.warn(r) : console.log(r);
}
function Nc(e) {
  return "_a" in e && "install" in e;
}
function E_() {
  if (!("clipboard" in navigator))
    return Ct("Your browser doesn't support the Clipboard API", "error"), !0;
}
function O_(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Ct('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function OC(e) {
  if (!E_())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Ct("Global state copied to clipboard.");
    } catch (t) {
      if (O_(t))
        return;
      Ct("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function SC(e) {
  if (!E_())
    try {
      S_(e, JSON.parse(await navigator.clipboard.readText())), Ct("Global state pasted from clipboard.");
    } catch (t) {
      if (O_(t))
        return;
      Ct("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function AC(e) {
  try {
    w_(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Ct("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let fn;
function xC() {
  fn || (fn = document.createElement("input"), fn.type = "file", fn.accept = ".json");
  function e() {
    return new Promise((t, r) => {
      fn.onchange = async () => {
        const o = fn.files;
        if (!o)
          return t(null);
        const s = o.item(0);
        return t(s ? { text: await s.text(), file: s } : null);
      }, fn.oncancel = () => t(null), fn.onerror = r, fn.click();
    });
  }
  return e;
}
async function $C(e) {
  try {
    const r = await xC()();
    if (!r)
      return;
    const { text: o, file: s } = r;
    S_(e, JSON.parse(o)), Ct(`Global state imported from "${s.name}".`);
  } catch (t) {
    Ct("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function S_(e, t) {
  for (const r in t) {
    const o = e.state.value[r];
    o ? Object.assign(o, t[r]) : e.state.value[r] = t[r];
  }
}
function Cr(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const A_ = "🍍 Pinia (root)", La = "_root";
function TC(e) {
  return Nc(e) ? {
    id: La,
    label: A_
  } : {
    id: e.$id,
    label: e.$id
  };
}
function CC(e) {
  if (Nc(e)) {
    const r = Array.from(e._s.keys()), o = e._s;
    return {
      state: r.map((u) => ({
        editable: !0,
        key: u,
        value: e.state.value[u]
      })),
      getters: r.filter((u) => o.get(u)._getters).map((u) => {
        const f = o.get(u);
        return {
          editable: !1,
          key: u,
          value: f._getters.reduce((c, p) => (c[p] = f[p], c), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((r) => ({
      editable: !0,
      key: r,
      value: e.$state[r]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((r) => ({
    editable: !1,
    key: r,
    value: e[r]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((r) => ({
    editable: !0,
    key: r,
    value: e[r]
  }))), t;
}
function NC(e) {
  return e ? Array.isArray(e) ? e.reduce((t, r) => (t.keys.push(r.key), t.operations.push(r.type), t.oldValue[r.key] = r.oldValue, t.newValue[r.key] = r.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Cr(e.type),
    key: Cr(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function IC(e) {
  switch (e) {
    case li.direct:
      return "mutation";
    case li.patchFunction:
      return "$patch";
    case li.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Gi = !0;
const Ma = [], ii = "pinia:mutations", Bt = "pinia", { assign: DC } = Object, Ja = (e) => "🍍 " + e;
function PC(e, t) {
  y_({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ma,
    app: e
  }, (r) => {
    typeof r.now != "function" && Ct("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.addTimelineLayer({
      id: ii,
      label: "Pinia 🍍",
      color: 15064968
    }), r.addInspector({
      id: Bt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            OC(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await SC(t), r.sendInspectorTree(Bt), r.sendInspectorState(Bt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            AC(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await $C(t), r.sendInspectorTree(Bt), r.sendInspectorState(Bt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const s = t._s.get(o);
            s ? typeof s.$reset != "function" ? Ct(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (s.$reset(), Ct(`Store "${o}" reset.`)) : Ct(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), r.on.inspectComponent((o, s) => {
      const u = o.componentInstance && o.componentInstance.proxy;
      if (u && u._pStores) {
        const f = o.componentInstance.proxy._pStores;
        Object.values(f).forEach((c) => {
          o.instanceData.state.push({
            type: Ja(c.$id),
            key: "state",
            editable: !0,
            value: c._isOptionsAPI ? {
              _custom: {
                value: Oe(c.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => c.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(c.$state).reduce((p, g) => (p[g] = c.$state[g], p), {})
            )
          }), c._getters && c._getters.length && o.instanceData.state.push({
            type: Ja(c.$id),
            key: "getters",
            editable: !1,
            value: c._getters.reduce((p, g) => {
              try {
                p[g] = c[g];
              } catch (y) {
                p[g] = y;
              }
              return p;
            }, {})
          });
        });
      }
    }), r.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === Bt) {
        let s = [t];
        s = s.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? s.filter((u) => "$id" in u ? u.$id.toLowerCase().includes(o.filter.toLowerCase()) : A_.toLowerCase().includes(o.filter.toLowerCase())) : s).map(TC);
      }
    }), globalThis.$pinia = t, r.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === Bt) {
        const s = o.nodeId === La ? t : t._s.get(o.nodeId);
        if (!s)
          return;
        s && (o.nodeId !== La && (globalThis.$store = Oe(s)), o.state = CC(s));
      }
    }), r.on.editInspectorState((o, s) => {
      if (o.app === e && o.inspectorId === Bt) {
        const u = o.nodeId === La ? t : t._s.get(o.nodeId);
        if (!u)
          return Ct(`store "${o.nodeId}" not found`, "error");
        const { path: f } = o;
        Nc(u) ? f.unshift("state") : (f.length !== 1 || !u._customProperties.has(f[0]) || f[0] in u.$state) && f.unshift("$state"), Gi = !1, o.set(u, f, o.state.value), Gi = !0;
      }
    }), r.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const s = o.type.replace(/^🍍\s*/, ""), u = t._s.get(s);
        if (!u)
          return Ct(`store "${s}" not found`, "error");
        const { path: f } = o;
        if (f[0] !== "state")
          return Ct(`Invalid path for store "${s}":
${f}
Only state can be modified.`);
        f[0] = "$state", Gi = !1, o.set(u, f, o.state.value), Gi = !0;
      }
    });
  });
}
function LC(e, t) {
  Ma.includes(Ja(t.$id)) || Ma.push(Ja(t.$id)), y_({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ma,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (r) => {
    const o = typeof r.now == "function" ? r.now.bind(r) : Date.now;
    t.$onAction(({ after: f, onError: c, name: p, args: g }) => {
      const y = x_++;
      r.addTimelineEvent({
        layerId: ii,
        event: {
          time: o(),
          title: "🛫 " + p,
          subtitle: "start",
          data: {
            store: Cr(t.$id),
            action: Cr(p),
            args: g
          },
          groupId: y
        }
      }), f((_) => {
        Fn = void 0, r.addTimelineEvent({
          layerId: ii,
          event: {
            time: o(),
            title: "🛬 " + p,
            subtitle: "end",
            data: {
              store: Cr(t.$id),
              action: Cr(p),
              args: g,
              result: _
            },
            groupId: y
          }
        });
      }), c((_) => {
        Fn = void 0, r.addTimelineEvent({
          layerId: ii,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + p,
            subtitle: "end",
            data: {
              store: Cr(t.$id),
              action: Cr(p),
              args: g,
              error: _
            },
            groupId: y
          }
        });
      });
    }, !0), t._customProperties.forEach((f) => {
      Wo(() => _t(t[f]), (c, p) => {
        r.notifyComponentUpdate(), r.sendInspectorState(Bt), Gi && r.addTimelineEvent({
          layerId: ii,
          event: {
            time: o(),
            title: "Change",
            subtitle: f,
            data: {
              newValue: c,
              oldValue: p
            },
            groupId: Fn
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: f, type: c }, p) => {
      if (r.notifyComponentUpdate(), r.sendInspectorState(Bt), !Gi)
        return;
      const g = {
        time: o(),
        title: IC(c),
        data: DC({ store: Cr(t.$id) }, NC(f)),
        groupId: Fn
      };
      c === li.patchFunction ? g.subtitle = "⤵️" : c === li.patchObject ? g.subtitle = "🧩" : f && !Array.isArray(f) && (g.subtitle = f.type), f && (g.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: f
        }
      }), r.addTimelineEvent({
        layerId: ii,
        event: g
      });
    }, { detached: !0, flush: "sync" });
    const s = t._hotUpdate;
    t._hotUpdate = hc((f) => {
      s(f), r.addTimelineEvent({
        layerId: ii,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Cr(t.$id),
            info: Cr("HMR update")
          }
        }
      }), r.notifyComponentUpdate(), r.sendInspectorTree(Bt), r.sendInspectorState(Bt);
    });
    const { $dispose: u } = t;
    t.$dispose = () => {
      u(), r.notifyComponentUpdate(), r.sendInspectorTree(Bt), r.sendInspectorState(Bt), r.getSettings().logStoreChanges && Ct(`Disposed "${t.$id}" store 🗑`);
    }, r.notifyComponentUpdate(), r.sendInspectorTree(Bt), r.sendInspectorState(Bt), r.getSettings().logStoreChanges && Ct(`"${t.$id}" store installed 🆕`);
  });
}
let x_ = 0, Fn;
function Tg(e, t, r) {
  const o = t.reduce((s, u) => (s[u] = Oe(e)[u], s), {});
  for (const s in o)
    e[s] = function() {
      const u = x_, f = r ? new Proxy(e, {
        get(...p) {
          return Fn = u, Reflect.get(...p);
        },
        set(...p) {
          return Fn = u, Reflect.set(...p);
        }
      }) : e;
      Fn = u;
      const c = o[s].apply(f, arguments);
      return Fn = void 0, c;
    };
}
function MC({ app: e, store: t, options: r }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!r.state, !t._p._testing) {
      Tg(t, Object.keys(r.actions), t._isOptionsAPI);
      const o = t._hotUpdate;
      Oe(t)._hotUpdate = function(s) {
        o.apply(this, arguments), Tg(t, Object.keys(s._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    LC(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function RC() {
  const e = gx(!0), t = e.run(() => Oy({}));
  let r = [], o = [];
  const s = hc({
    install(u) {
      s._a = u, u.provide(_C, s), u.config.globalProperties.$pinia = s, Bo.NODE_ENV !== "production" && Bo.NODE_ENV !== "test" && __ && PC(u, s), o.forEach((f) => r.push(f)), o = [];
    },
    use(u) {
      return !this._a && !lC ? o.push(u) : r.push(u), this;
    },
    _p: r,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Bo.NODE_ENV !== "production" && Bo.NODE_ENV !== "test" && typeof Proxy < "u" && s.use(MC), s;
}
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function FC(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function VC(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var s = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(r, o, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), r;
}
var Xa = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Xa.exports;
(function(e, t) {
  (function() {
    var r, o = "4.17.21", s = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", c = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", g = 500, y = "__lodash_placeholder__", _ = 1, m = 2, A = 4, O = 1, $ = 2, N = 1, R = 2, L = 4, D = 8, X = 16, V = 32, ee = 64, he = 128, se = 256, fe = 512, Ae = 30, ke = "...", M = 800, Q = 16, de = 1, ae = 2, ne = 3, te = 1 / 0, ce = 9007199254740991, Ze = 17976931348623157e292, re = NaN, oe = 4294967295, Te = oe - 1, Fe = oe >>> 1, qe = [
      ["ary", he],
      ["bind", N],
      ["bindKey", R],
      ["curry", D],
      ["curryRight", X],
      ["flip", fe],
      ["partial", V],
      ["partialRight", ee],
      ["rearg", se]
    ], nt = "[object Arguments]", it = "[object Array]", pt = "[object AsyncFunction]", ut = "[object Boolean]", gt = "[object Date]", Yt = "[object DOMException]", ze = "[object Error]", vt = "[object Function]", It = "[object GeneratorFunction]", b = "[object Map]", E = "[object Number]", P = "[object Null]", W = "[object Object]", H = "[object Promise]", k = "[object Proxy]", z = "[object RegExp]", K = "[object Set]", q = "[object String]", G = "[object Symbol]", ge = "[object Undefined]", Y = "[object WeakMap]", le = "[object WeakSet]", ve = "[object ArrayBuffer]", xe = "[object DataView]", Be = "[object Float32Array]", Ve = "[object Float64Array]", Dt = "[object Int8Array]", yt = "[object Int16Array]", Ht = "[object Int32Array]", Pt = "[object Uint8Array]", Xr = "[object Uint8ClampedArray]", yi = "[object Uint16Array]", mt = "[object Uint32Array]", gr = /\b__p \+= '';/g, bs = /\b(__p \+=) '' \+/g, mb = /(__e\(.*?\)|\b__t\)) \+\n'';/g, up = /&(?:amp|lt|gt|quot|#39);/g, fp = /[&<>"']/g, bb = RegExp(up.source), wb = RegExp(fp.source), Eb = /<%-([\s\S]+?)%>/g, Ob = /<%([\s\S]+?)%>/g, lp = /<%=([\s\S]+?)%>/g, Sb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ab = /^\w*$/, xb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Iu = /[\\^$.*+?()[\]{}|]/g, $b = RegExp(Iu.source), Du = /^\s+/, Tb = /\s/, Cb = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Nb = /\{\n\/\* \[wrapped with (.+)\] \*/, Ib = /,? & /, Db = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Pb = /[()=,{}\[\]\/\s]/, Lb = /\\(\\)?/g, Mb = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, cp = /\w*$/, Rb = /^[-+]0x[0-9a-f]+$/i, Fb = /^0b[01]+$/i, Vb = /^\[object .+?Constructor\]$/, Bb = /^0o[0-7]+$/i, Ub = /^(?:0|[1-9]\d*)$/, Hb = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ws = /($^)/, Wb = /['\n\r\u2028\u2029\\]/g, Es = "\\ud800-\\udfff", jb = "\\u0300-\\u036f", kb = "\\ufe20-\\ufe2f", Gb = "\\u20d0-\\u20ff", pp = jb + kb + Gb, hp = "\\u2700-\\u27bf", dp = "a-z\\xdf-\\xf6\\xf8-\\xff", Kb = "\\xac\\xb1\\xd7\\xf7", qb = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", zb = "\\u2000-\\u206f", Yb = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", gp = "A-Z\\xc0-\\xd6\\xd8-\\xde", vp = "\\ufe0e\\ufe0f", yp = Kb + qb + zb + Yb, Pu = "['’]", Jb = "[" + Es + "]", _p = "[" + yp + "]", Os = "[" + pp + "]", mp = "\\d+", Xb = "[" + hp + "]", bp = "[" + dp + "]", wp = "[^" + Es + yp + mp + hp + dp + gp + "]", Lu = "\\ud83c[\\udffb-\\udfff]", Qb = "(?:" + Os + "|" + Lu + ")", Ep = "[^" + Es + "]", Mu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ru = "[\\ud800-\\udbff][\\udc00-\\udfff]", _i = "[" + gp + "]", Op = "\\u200d", Sp = "(?:" + bp + "|" + wp + ")", Zb = "(?:" + _i + "|" + wp + ")", Ap = "(?:" + Pu + "(?:d|ll|m|re|s|t|ve))?", xp = "(?:" + Pu + "(?:D|LL|M|RE|S|T|VE))?", $p = Qb + "?", Tp = "[" + vp + "]?", e0 = "(?:" + Op + "(?:" + [Ep, Mu, Ru].join("|") + ")" + Tp + $p + ")*", t0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", r0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Cp = Tp + $p + e0, n0 = "(?:" + [Xb, Mu, Ru].join("|") + ")" + Cp, i0 = "(?:" + [Ep + Os + "?", Os, Mu, Ru, Jb].join("|") + ")", o0 = RegExp(Pu, "g"), s0 = RegExp(Os, "g"), Fu = RegExp(Lu + "(?=" + Lu + ")|" + i0 + Cp, "g"), a0 = RegExp([
      _i + "?" + bp + "+" + Ap + "(?=" + [_p, _i, "$"].join("|") + ")",
      Zb + "+" + xp + "(?=" + [_p, _i + Sp, "$"].join("|") + ")",
      _i + "?" + Sp + "+" + Ap,
      _i + "+" + xp,
      r0,
      t0,
      mp,
      n0
    ].join("|"), "g"), u0 = RegExp("[" + Op + Es + pp + vp + "]"), f0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, l0 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], c0 = -1, et = {};
    et[Be] = et[Ve] = et[Dt] = et[yt] = et[Ht] = et[Pt] = et[Xr] = et[yi] = et[mt] = !0, et[nt] = et[it] = et[ve] = et[ut] = et[xe] = et[gt] = et[ze] = et[vt] = et[b] = et[E] = et[W] = et[z] = et[K] = et[q] = et[Y] = !1;
    var Xe = {};
    Xe[nt] = Xe[it] = Xe[ve] = Xe[xe] = Xe[ut] = Xe[gt] = Xe[Be] = Xe[Ve] = Xe[Dt] = Xe[yt] = Xe[Ht] = Xe[b] = Xe[E] = Xe[W] = Xe[z] = Xe[K] = Xe[q] = Xe[G] = Xe[Pt] = Xe[Xr] = Xe[yi] = Xe[mt] = !0, Xe[ze] = Xe[vt] = Xe[Y] = !1;
    var p0 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, h0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, d0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, g0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, v0 = parseFloat, y0 = parseInt, Np = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, _0 = typeof self == "object" && self && self.Object === Object && self, Lt = Np || _0 || Function("return this")(), Vu = t && !t.nodeType && t, Gn = Vu && !0 && e && !e.nodeType && e, Ip = Gn && Gn.exports === Vu, Bu = Ip && Np.process, vr = function() {
      try {
        var x = Gn && Gn.require && Gn.require("util").types;
        return x || Bu && Bu.binding && Bu.binding("util");
      } catch {
      }
    }(), Dp = vr && vr.isArrayBuffer, Pp = vr && vr.isDate, Lp = vr && vr.isMap, Mp = vr && vr.isRegExp, Rp = vr && vr.isSet, Fp = vr && vr.isTypedArray;
    function nr(x, F, I) {
      switch (I.length) {
        case 0:
          return x.call(F);
        case 1:
          return x.call(F, I[0]);
        case 2:
          return x.call(F, I[0], I[1]);
        case 3:
          return x.call(F, I[0], I[1], I[2]);
      }
      return x.apply(F, I);
    }
    function m0(x, F, I, ie) {
      for (var we = -1, Ue = x == null ? 0 : x.length; ++we < Ue; ) {
        var bt = x[we];
        F(ie, bt, I(bt), x);
      }
      return ie;
    }
    function yr(x, F) {
      for (var I = -1, ie = x == null ? 0 : x.length; ++I < ie && F(x[I], I, x) !== !1; )
        ;
      return x;
    }
    function b0(x, F) {
      for (var I = x == null ? 0 : x.length; I-- && F(x[I], I, x) !== !1; )
        ;
      return x;
    }
    function Vp(x, F) {
      for (var I = -1, ie = x == null ? 0 : x.length; ++I < ie; )
        if (!F(x[I], I, x))
          return !1;
      return !0;
    }
    function En(x, F) {
      for (var I = -1, ie = x == null ? 0 : x.length, we = 0, Ue = []; ++I < ie; ) {
        var bt = x[I];
        F(bt, I, x) && (Ue[we++] = bt);
      }
      return Ue;
    }
    function Ss(x, F) {
      var I = x == null ? 0 : x.length;
      return !!I && mi(x, F, 0) > -1;
    }
    function Uu(x, F, I) {
      for (var ie = -1, we = x == null ? 0 : x.length; ++ie < we; )
        if (I(F, x[ie]))
          return !0;
      return !1;
    }
    function ot(x, F) {
      for (var I = -1, ie = x == null ? 0 : x.length, we = Array(ie); ++I < ie; )
        we[I] = F(x[I], I, x);
      return we;
    }
    function On(x, F) {
      for (var I = -1, ie = F.length, we = x.length; ++I < ie; )
        x[we + I] = F[I];
      return x;
    }
    function Hu(x, F, I, ie) {
      var we = -1, Ue = x == null ? 0 : x.length;
      for (ie && Ue && (I = x[++we]); ++we < Ue; )
        I = F(I, x[we], we, x);
      return I;
    }
    function w0(x, F, I, ie) {
      var we = x == null ? 0 : x.length;
      for (ie && we && (I = x[--we]); we--; )
        I = F(I, x[we], we, x);
      return I;
    }
    function Wu(x, F) {
      for (var I = -1, ie = x == null ? 0 : x.length; ++I < ie; )
        if (F(x[I], I, x))
          return !0;
      return !1;
    }
    var E0 = ju("length");
    function O0(x) {
      return x.split("");
    }
    function S0(x) {
      return x.match(Db) || [];
    }
    function Bp(x, F, I) {
      var ie;
      return I(x, function(we, Ue, bt) {
        if (F(we, Ue, bt))
          return ie = Ue, !1;
      }), ie;
    }
    function As(x, F, I, ie) {
      for (var we = x.length, Ue = I + (ie ? 1 : -1); ie ? Ue-- : ++Ue < we; )
        if (F(x[Ue], Ue, x))
          return Ue;
      return -1;
    }
    function mi(x, F, I) {
      return F === F ? R0(x, F, I) : As(x, Up, I);
    }
    function A0(x, F, I, ie) {
      for (var we = I - 1, Ue = x.length; ++we < Ue; )
        if (ie(x[we], F))
          return we;
      return -1;
    }
    function Up(x) {
      return x !== x;
    }
    function Hp(x, F) {
      var I = x == null ? 0 : x.length;
      return I ? Gu(x, F) / I : re;
    }
    function ju(x) {
      return function(F) {
        return F == null ? r : F[x];
      };
    }
    function ku(x) {
      return function(F) {
        return x == null ? r : x[F];
      };
    }
    function Wp(x, F, I, ie, we) {
      return we(x, function(Ue, bt, Ye) {
        I = ie ? (ie = !1, Ue) : F(I, Ue, bt, Ye);
      }), I;
    }
    function x0(x, F) {
      var I = x.length;
      for (x.sort(F); I--; )
        x[I] = x[I].value;
      return x;
    }
    function Gu(x, F) {
      for (var I, ie = -1, we = x.length; ++ie < we; ) {
        var Ue = F(x[ie]);
        Ue !== r && (I = I === r ? Ue : I + Ue);
      }
      return I;
    }
    function Ku(x, F) {
      for (var I = -1, ie = Array(x); ++I < x; )
        ie[I] = F(I);
      return ie;
    }
    function $0(x, F) {
      return ot(F, function(I) {
        return [I, x[I]];
      });
    }
    function jp(x) {
      return x && x.slice(0, qp(x) + 1).replace(Du, "");
    }
    function ir(x) {
      return function(F) {
        return x(F);
      };
    }
    function qu(x, F) {
      return ot(F, function(I) {
        return x[I];
      });
    }
    function ho(x, F) {
      return x.has(F);
    }
    function kp(x, F) {
      for (var I = -1, ie = x.length; ++I < ie && mi(F, x[I], 0) > -1; )
        ;
      return I;
    }
    function Gp(x, F) {
      for (var I = x.length; I-- && mi(F, x[I], 0) > -1; )
        ;
      return I;
    }
    function T0(x, F) {
      for (var I = x.length, ie = 0; I--; )
        x[I] === F && ++ie;
      return ie;
    }
    var C0 = ku(p0), N0 = ku(h0);
    function I0(x) {
      return "\\" + g0[x];
    }
    function D0(x, F) {
      return x == null ? r : x[F];
    }
    function bi(x) {
      return u0.test(x);
    }
    function P0(x) {
      return f0.test(x);
    }
    function L0(x) {
      for (var F, I = []; !(F = x.next()).done; )
        I.push(F.value);
      return I;
    }
    function zu(x) {
      var F = -1, I = Array(x.size);
      return x.forEach(function(ie, we) {
        I[++F] = [we, ie];
      }), I;
    }
    function Kp(x, F) {
      return function(I) {
        return x(F(I));
      };
    }
    function Sn(x, F) {
      for (var I = -1, ie = x.length, we = 0, Ue = []; ++I < ie; ) {
        var bt = x[I];
        (bt === F || bt === y) && (x[I] = y, Ue[we++] = I);
      }
      return Ue;
    }
    function xs(x) {
      var F = -1, I = Array(x.size);
      return x.forEach(function(ie) {
        I[++F] = ie;
      }), I;
    }
    function M0(x) {
      var F = -1, I = Array(x.size);
      return x.forEach(function(ie) {
        I[++F] = [ie, ie];
      }), I;
    }
    function R0(x, F, I) {
      for (var ie = I - 1, we = x.length; ++ie < we; )
        if (x[ie] === F)
          return ie;
      return -1;
    }
    function F0(x, F, I) {
      for (var ie = I + 1; ie--; )
        if (x[ie] === F)
          return ie;
      return ie;
    }
    function wi(x) {
      return bi(x) ? B0(x) : E0(x);
    }
    function Ar(x) {
      return bi(x) ? U0(x) : O0(x);
    }
    function qp(x) {
      for (var F = x.length; F-- && Tb.test(x.charAt(F)); )
        ;
      return F;
    }
    var V0 = ku(d0);
    function B0(x) {
      for (var F = Fu.lastIndex = 0; Fu.test(x); )
        ++F;
      return F;
    }
    function U0(x) {
      return x.match(Fu) || [];
    }
    function H0(x) {
      return x.match(a0) || [];
    }
    var W0 = function x(F) {
      F = F == null ? Lt : Ei.defaults(Lt.Object(), F, Ei.pick(Lt, l0));
      var I = F.Array, ie = F.Date, we = F.Error, Ue = F.Function, bt = F.Math, Ye = F.Object, Yu = F.RegExp, j0 = F.String, _r = F.TypeError, $s = I.prototype, k0 = Ue.prototype, Oi = Ye.prototype, Ts = F["__core-js_shared__"], Cs = k0.toString, Ge = Oi.hasOwnProperty, G0 = 0, zp = function() {
        var n = /[^.]+$/.exec(Ts && Ts.keys && Ts.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Ns = Oi.toString, K0 = Cs.call(Ye), q0 = Lt._, z0 = Yu(
        "^" + Cs.call(Ge).replace(Iu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Is = Ip ? F.Buffer : r, An = F.Symbol, Ds = F.Uint8Array, Yp = Is ? Is.allocUnsafe : r, Ps = Kp(Ye.getPrototypeOf, Ye), Jp = Ye.create, Xp = Oi.propertyIsEnumerable, Ls = $s.splice, Qp = An ? An.isConcatSpreadable : r, go = An ? An.iterator : r, Kn = An ? An.toStringTag : r, Ms = function() {
        try {
          var n = Xn(Ye, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Y0 = F.clearTimeout !== Lt.clearTimeout && F.clearTimeout, J0 = ie && ie.now !== Lt.Date.now && ie.now, X0 = F.setTimeout !== Lt.setTimeout && F.setTimeout, Rs = bt.ceil, Fs = bt.floor, Ju = Ye.getOwnPropertySymbols, Q0 = Is ? Is.isBuffer : r, Zp = F.isFinite, Z0 = $s.join, e1 = Kp(Ye.keys, Ye), wt = bt.max, Ft = bt.min, t1 = ie.now, r1 = F.parseInt, eh = bt.random, n1 = $s.reverse, Xu = Xn(F, "DataView"), vo = Xn(F, "Map"), Qu = Xn(F, "Promise"), Si = Xn(F, "Set"), yo = Xn(F, "WeakMap"), _o = Xn(Ye, "create"), Vs = yo && new yo(), Ai = {}, i1 = Qn(Xu), o1 = Qn(vo), s1 = Qn(Qu), a1 = Qn(Si), u1 = Qn(yo), Bs = An ? An.prototype : r, mo = Bs ? Bs.valueOf : r, th = Bs ? Bs.toString : r;
      function d(n) {
        if (ft(n) && !Se(n) && !(n instanceof Pe)) {
          if (n instanceof mr)
            return n;
          if (Ge.call(n, "__wrapped__"))
            return rd(n);
        }
        return new mr(n);
      }
      var xi = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!at(i))
            return {};
          if (Jp)
            return Jp(i);
          n.prototype = i;
          var a = new n();
          return n.prototype = r, a;
        };
      }();
      function Us() {
      }
      function mr(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      d.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Eb,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ob,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: lp,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: d
        }
      }, d.prototype = Us.prototype, d.prototype.constructor = d, mr.prototype = xi(Us.prototype), mr.prototype.constructor = mr;
      function Pe(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = oe, this.__views__ = [];
      }
      function f1() {
        var n = new Pe(this.__wrapped__);
        return n.__actions__ = Jt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Jt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Jt(this.__views__), n;
      }
      function l1() {
        if (this.__filtered__) {
          var n = new Pe(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function c1() {
        var n = this.__wrapped__.value(), i = this.__dir__, a = Se(n), l = i < 0, h = a ? n.length : 0, v = Ow(0, h, this.__views__), w = v.start, S = v.end, T = S - w, B = l ? S : w - 1, U = this.__iteratees__, j = U.length, Z = 0, ue = Ft(T, this.__takeCount__);
        if (!a || !l && h == T && ue == T)
          return Ah(n, this.__actions__);
        var _e = [];
        e:
          for (; T-- && Z < ue; ) {
            B += i;
            for (var Ce = -1, me = n[B]; ++Ce < j; ) {
              var De = U[Ce], Me = De.iteratee, ar = De.type, kt = Me(me);
              if (ar == ae)
                me = kt;
              else if (!kt) {
                if (ar == de)
                  continue e;
                break e;
              }
            }
            _e[Z++] = me;
          }
        return _e;
      }
      Pe.prototype = xi(Us.prototype), Pe.prototype.constructor = Pe;
      function qn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var l = n[i];
          this.set(l[0], l[1]);
        }
      }
      function p1() {
        this.__data__ = _o ? _o(null) : {}, this.size = 0;
      }
      function h1(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function d1(n) {
        var i = this.__data__;
        if (_o) {
          var a = i[n];
          return a === p ? r : a;
        }
        return Ge.call(i, n) ? i[n] : r;
      }
      function g1(n) {
        var i = this.__data__;
        return _o ? i[n] !== r : Ge.call(i, n);
      }
      function v1(n, i) {
        var a = this.__data__;
        return this.size += this.has(n) ? 0 : 1, a[n] = _o && i === r ? p : i, this;
      }
      qn.prototype.clear = p1, qn.prototype.delete = h1, qn.prototype.get = d1, qn.prototype.has = g1, qn.prototype.set = v1;
      function Qr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var l = n[i];
          this.set(l[0], l[1]);
        }
      }
      function y1() {
        this.__data__ = [], this.size = 0;
      }
      function _1(n) {
        var i = this.__data__, a = Hs(i, n);
        if (a < 0)
          return !1;
        var l = i.length - 1;
        return a == l ? i.pop() : Ls.call(i, a, 1), --this.size, !0;
      }
      function m1(n) {
        var i = this.__data__, a = Hs(i, n);
        return a < 0 ? r : i[a][1];
      }
      function b1(n) {
        return Hs(this.__data__, n) > -1;
      }
      function w1(n, i) {
        var a = this.__data__, l = Hs(a, n);
        return l < 0 ? (++this.size, a.push([n, i])) : a[l][1] = i, this;
      }
      Qr.prototype.clear = y1, Qr.prototype.delete = _1, Qr.prototype.get = m1, Qr.prototype.has = b1, Qr.prototype.set = w1;
      function Zr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var l = n[i];
          this.set(l[0], l[1]);
        }
      }
      function E1() {
        this.size = 0, this.__data__ = {
          hash: new qn(),
          map: new (vo || Qr)(),
          string: new qn()
        };
      }
      function O1(n) {
        var i = Zs(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function S1(n) {
        return Zs(this, n).get(n);
      }
      function A1(n) {
        return Zs(this, n).has(n);
      }
      function x1(n, i) {
        var a = Zs(this, n), l = a.size;
        return a.set(n, i), this.size += a.size == l ? 0 : 1, this;
      }
      Zr.prototype.clear = E1, Zr.prototype.delete = O1, Zr.prototype.get = S1, Zr.prototype.has = A1, Zr.prototype.set = x1;
      function zn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.__data__ = new Zr(); ++i < a; )
          this.add(n[i]);
      }
      function $1(n) {
        return this.__data__.set(n, p), this;
      }
      function T1(n) {
        return this.__data__.has(n);
      }
      zn.prototype.add = zn.prototype.push = $1, zn.prototype.has = T1;
      function xr(n) {
        var i = this.__data__ = new Qr(n);
        this.size = i.size;
      }
      function C1() {
        this.__data__ = new Qr(), this.size = 0;
      }
      function N1(n) {
        var i = this.__data__, a = i.delete(n);
        return this.size = i.size, a;
      }
      function I1(n) {
        return this.__data__.get(n);
      }
      function D1(n) {
        return this.__data__.has(n);
      }
      function P1(n, i) {
        var a = this.__data__;
        if (a instanceof Qr) {
          var l = a.__data__;
          if (!vo || l.length < s - 1)
            return l.push([n, i]), this.size = ++a.size, this;
          a = this.__data__ = new Zr(l);
        }
        return a.set(n, i), this.size = a.size, this;
      }
      xr.prototype.clear = C1, xr.prototype.delete = N1, xr.prototype.get = I1, xr.prototype.has = D1, xr.prototype.set = P1;
      function rh(n, i) {
        var a = Se(n), l = !a && Zn(n), h = !a && !l && Nn(n), v = !a && !l && !h && Ni(n), w = a || l || h || v, S = w ? Ku(n.length, j0) : [], T = S.length;
        for (var B in n)
          (i || Ge.call(n, B)) && !(w && // Safari 9 has enumerable `arguments.length` in strict mode.
          (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          v && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
          nn(B, T))) && S.push(B);
        return S;
      }
      function nh(n) {
        var i = n.length;
        return i ? n[lf(0, i - 1)] : r;
      }
      function L1(n, i) {
        return ea(Jt(n), Yn(i, 0, n.length));
      }
      function M1(n) {
        return ea(Jt(n));
      }
      function Zu(n, i, a) {
        (a !== r && !$r(n[i], a) || a === r && !(i in n)) && en(n, i, a);
      }
      function bo(n, i, a) {
        var l = n[i];
        (!(Ge.call(n, i) && $r(l, a)) || a === r && !(i in n)) && en(n, i, a);
      }
      function Hs(n, i) {
        for (var a = n.length; a--; )
          if ($r(n[a][0], i))
            return a;
        return -1;
      }
      function R1(n, i, a, l) {
        return xn(n, function(h, v, w) {
          i(l, h, a(h), w);
        }), l;
      }
      function ih(n, i) {
        return n && Mr(i, xt(i), n);
      }
      function F1(n, i) {
        return n && Mr(i, Qt(i), n);
      }
      function en(n, i, a) {
        i == "__proto__" && Ms ? Ms(n, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : n[i] = a;
      }
      function ef(n, i) {
        for (var a = -1, l = i.length, h = I(l), v = n == null; ++a < l; )
          h[a] = v ? r : Mf(n, i[a]);
        return h;
      }
      function Yn(n, i, a) {
        return n === n && (a !== r && (n = n <= a ? n : a), i !== r && (n = n >= i ? n : i)), n;
      }
      function br(n, i, a, l, h, v) {
        var w, S = i & _, T = i & m, B = i & A;
        if (a && (w = h ? a(n, l, h, v) : a(n)), w !== r)
          return w;
        if (!at(n))
          return n;
        var U = Se(n);
        if (U) {
          if (w = Aw(n), !S)
            return Jt(n, w);
        } else {
          var j = Vt(n), Z = j == vt || j == It;
          if (Nn(n))
            return Th(n, S);
          if (j == W || j == nt || Z && !h) {
            if (w = T || Z ? {} : qh(n), !S)
              return T ? dw(n, F1(w, n)) : hw(n, ih(w, n));
          } else {
            if (!Xe[j])
              return h ? n : {};
            w = xw(n, j, S);
          }
        }
        v || (v = new xr());
        var ue = v.get(n);
        if (ue)
          return ue;
        v.set(n, w), Ed(n) ? n.forEach(function(me) {
          w.add(br(me, i, a, me, n, v));
        }) : bd(n) && n.forEach(function(me, De) {
          w.set(De, br(me, i, a, De, n, v));
        });
        var _e = B ? T ? wf : bf : T ? Qt : xt, Ce = U ? r : _e(n);
        return yr(Ce || n, function(me, De) {
          Ce && (De = me, me = n[De]), bo(w, De, br(me, i, a, De, n, v));
        }), w;
      }
      function V1(n) {
        var i = xt(n);
        return function(a) {
          return oh(a, n, i);
        };
      }
      function oh(n, i, a) {
        var l = a.length;
        if (n == null)
          return !l;
        for (n = Ye(n); l--; ) {
          var h = a[l], v = i[h], w = n[h];
          if (w === r && !(h in n) || !v(w))
            return !1;
        }
        return !0;
      }
      function sh(n, i, a) {
        if (typeof n != "function")
          throw new _r(f);
        return $o(function() {
          n.apply(r, a);
        }, i);
      }
      function wo(n, i, a, l) {
        var h = -1, v = Ss, w = !0, S = n.length, T = [], B = i.length;
        if (!S)
          return T;
        a && (i = ot(i, ir(a))), l ? (v = Uu, w = !1) : i.length >= s && (v = ho, w = !1, i = new zn(i));
        e:
          for (; ++h < S; ) {
            var U = n[h], j = a == null ? U : a(U);
            if (U = l || U !== 0 ? U : 0, w && j === j) {
              for (var Z = B; Z--; )
                if (i[Z] === j)
                  continue e;
              T.push(U);
            } else v(i, j, l) || T.push(U);
          }
        return T;
      }
      var xn = Ph(Lr), ah = Ph(rf, !0);
      function B1(n, i) {
        var a = !0;
        return xn(n, function(l, h, v) {
          return a = !!i(l, h, v), a;
        }), a;
      }
      function Ws(n, i, a) {
        for (var l = -1, h = n.length; ++l < h; ) {
          var v = n[l], w = i(v);
          if (w != null && (S === r ? w === w && !sr(w) : a(w, S)))
            var S = w, T = v;
        }
        return T;
      }
      function U1(n, i, a, l) {
        var h = n.length;
        for (a = $e(a), a < 0 && (a = -a > h ? 0 : h + a), l = l === r || l > h ? h : $e(l), l < 0 && (l += h), l = a > l ? 0 : Sd(l); a < l; )
          n[a++] = i;
        return n;
      }
      function uh(n, i) {
        var a = [];
        return xn(n, function(l, h, v) {
          i(l, h, v) && a.push(l);
        }), a;
      }
      function Mt(n, i, a, l, h) {
        var v = -1, w = n.length;
        for (a || (a = Tw), h || (h = []); ++v < w; ) {
          var S = n[v];
          i > 0 && a(S) ? i > 1 ? Mt(S, i - 1, a, l, h) : On(h, S) : l || (h[h.length] = S);
        }
        return h;
      }
      var tf = Lh(), fh = Lh(!0);
      function Lr(n, i) {
        return n && tf(n, i, xt);
      }
      function rf(n, i) {
        return n && fh(n, i, xt);
      }
      function js(n, i) {
        return En(i, function(a) {
          return on(n[a]);
        });
      }
      function Jn(n, i) {
        i = Tn(i, n);
        for (var a = 0, l = i.length; n != null && a < l; )
          n = n[Rr(i[a++])];
        return a && a == l ? n : r;
      }
      function lh(n, i, a) {
        var l = i(n);
        return Se(n) ? l : On(l, a(n));
      }
      function Wt(n) {
        return n == null ? n === r ? ge : P : Kn && Kn in Ye(n) ? Ew(n) : Mw(n);
      }
      function nf(n, i) {
        return n > i;
      }
      function H1(n, i) {
        return n != null && Ge.call(n, i);
      }
      function W1(n, i) {
        return n != null && i in Ye(n);
      }
      function j1(n, i, a) {
        return n >= Ft(i, a) && n < wt(i, a);
      }
      function of(n, i, a) {
        for (var l = a ? Uu : Ss, h = n[0].length, v = n.length, w = v, S = I(v), T = 1 / 0, B = []; w--; ) {
          var U = n[w];
          w && i && (U = ot(U, ir(i))), T = Ft(U.length, T), S[w] = !a && (i || h >= 120 && U.length >= 120) ? new zn(w && U) : r;
        }
        U = n[0];
        var j = -1, Z = S[0];
        e:
          for (; ++j < h && B.length < T; ) {
            var ue = U[j], _e = i ? i(ue) : ue;
            if (ue = a || ue !== 0 ? ue : 0, !(Z ? ho(Z, _e) : l(B, _e, a))) {
              for (w = v; --w; ) {
                var Ce = S[w];
                if (!(Ce ? ho(Ce, _e) : l(n[w], _e, a)))
                  continue e;
              }
              Z && Z.push(_e), B.push(ue);
            }
          }
        return B;
      }
      function k1(n, i, a, l) {
        return Lr(n, function(h, v, w) {
          i(l, a(h), v, w);
        }), l;
      }
      function Eo(n, i, a) {
        i = Tn(i, n), n = Xh(n, i);
        var l = n == null ? n : n[Rr(Er(i))];
        return l == null ? r : nr(l, n, a);
      }
      function ch(n) {
        return ft(n) && Wt(n) == nt;
      }
      function G1(n) {
        return ft(n) && Wt(n) == ve;
      }
      function K1(n) {
        return ft(n) && Wt(n) == gt;
      }
      function Oo(n, i, a, l, h) {
        return n === i ? !0 : n == null || i == null || !ft(n) && !ft(i) ? n !== n && i !== i : q1(n, i, a, l, Oo, h);
      }
      function q1(n, i, a, l, h, v) {
        var w = Se(n), S = Se(i), T = w ? it : Vt(n), B = S ? it : Vt(i);
        T = T == nt ? W : T, B = B == nt ? W : B;
        var U = T == W, j = B == W, Z = T == B;
        if (Z && Nn(n)) {
          if (!Nn(i))
            return !1;
          w = !0, U = !1;
        }
        if (Z && !U)
          return v || (v = new xr()), w || Ni(n) ? kh(n, i, a, l, h, v) : bw(n, i, T, a, l, h, v);
        if (!(a & O)) {
          var ue = U && Ge.call(n, "__wrapped__"), _e = j && Ge.call(i, "__wrapped__");
          if (ue || _e) {
            var Ce = ue ? n.value() : n, me = _e ? i.value() : i;
            return v || (v = new xr()), h(Ce, me, a, l, v);
          }
        }
        return Z ? (v || (v = new xr()), ww(n, i, a, l, h, v)) : !1;
      }
      function z1(n) {
        return ft(n) && Vt(n) == b;
      }
      function sf(n, i, a, l) {
        var h = a.length, v = h, w = !l;
        if (n == null)
          return !v;
        for (n = Ye(n); h--; ) {
          var S = a[h];
          if (w && S[2] ? S[1] !== n[S[0]] : !(S[0] in n))
            return !1;
        }
        for (; ++h < v; ) {
          S = a[h];
          var T = S[0], B = n[T], U = S[1];
          if (w && S[2]) {
            if (B === r && !(T in n))
              return !1;
          } else {
            var j = new xr();
            if (l)
              var Z = l(B, U, T, n, i, j);
            if (!(Z === r ? Oo(U, B, O | $, l, j) : Z))
              return !1;
          }
        }
        return !0;
      }
      function ph(n) {
        if (!at(n) || Nw(n))
          return !1;
        var i = on(n) ? z0 : Vb;
        return i.test(Qn(n));
      }
      function Y1(n) {
        return ft(n) && Wt(n) == z;
      }
      function J1(n) {
        return ft(n) && Vt(n) == K;
      }
      function X1(n) {
        return ft(n) && sa(n.length) && !!et[Wt(n)];
      }
      function hh(n) {
        return typeof n == "function" ? n : n == null ? Zt : typeof n == "object" ? Se(n) ? vh(n[0], n[1]) : gh(n) : Md(n);
      }
      function af(n) {
        if (!xo(n))
          return e1(n);
        var i = [];
        for (var a in Ye(n))
          Ge.call(n, a) && a != "constructor" && i.push(a);
        return i;
      }
      function Q1(n) {
        if (!at(n))
          return Lw(n);
        var i = xo(n), a = [];
        for (var l in n)
          l == "constructor" && (i || !Ge.call(n, l)) || a.push(l);
        return a;
      }
      function uf(n, i) {
        return n < i;
      }
      function dh(n, i) {
        var a = -1, l = Xt(n) ? I(n.length) : [];
        return xn(n, function(h, v, w) {
          l[++a] = i(h, v, w);
        }), l;
      }
      function gh(n) {
        var i = Of(n);
        return i.length == 1 && i[0][2] ? Yh(i[0][0], i[0][1]) : function(a) {
          return a === n || sf(a, n, i);
        };
      }
      function vh(n, i) {
        return Af(n) && zh(i) ? Yh(Rr(n), i) : function(a) {
          var l = Mf(a, n);
          return l === r && l === i ? Rf(a, n) : Oo(i, l, O | $);
        };
      }
      function ks(n, i, a, l, h) {
        n !== i && tf(i, function(v, w) {
          if (h || (h = new xr()), at(v))
            Z1(n, i, w, a, ks, l, h);
          else {
            var S = l ? l($f(n, w), v, w + "", n, i, h) : r;
            S === r && (S = v), Zu(n, w, S);
          }
        }, Qt);
      }
      function Z1(n, i, a, l, h, v, w) {
        var S = $f(n, a), T = $f(i, a), B = w.get(T);
        if (B) {
          Zu(n, a, B);
          return;
        }
        var U = v ? v(S, T, a + "", n, i, w) : r, j = U === r;
        if (j) {
          var Z = Se(T), ue = !Z && Nn(T), _e = !Z && !ue && Ni(T);
          U = T, Z || ue || _e ? Se(S) ? U = S : ht(S) ? U = Jt(S) : ue ? (j = !1, U = Th(T, !0)) : _e ? (j = !1, U = Ch(T, !0)) : U = [] : To(T) || Zn(T) ? (U = S, Zn(S) ? U = Ad(S) : (!at(S) || on(S)) && (U = qh(T))) : j = !1;
        }
        j && (w.set(T, U), h(U, T, l, v, w), w.delete(T)), Zu(n, a, U);
      }
      function yh(n, i) {
        var a = n.length;
        if (a)
          return i += i < 0 ? a : 0, nn(i, a) ? n[i] : r;
      }
      function _h(n, i, a) {
        i.length ? i = ot(i, function(v) {
          return Se(v) ? function(w) {
            return Jn(w, v.length === 1 ? v[0] : v);
          } : v;
        }) : i = [Zt];
        var l = -1;
        i = ot(i, ir(ye()));
        var h = dh(n, function(v, w, S) {
          var T = ot(i, function(B) {
            return B(v);
          });
          return { criteria: T, index: ++l, value: v };
        });
        return x0(h, function(v, w) {
          return pw(v, w, a);
        });
      }
      function ew(n, i) {
        return mh(n, i, function(a, l) {
          return Rf(n, l);
        });
      }
      function mh(n, i, a) {
        for (var l = -1, h = i.length, v = {}; ++l < h; ) {
          var w = i[l], S = Jn(n, w);
          a(S, w) && So(v, Tn(w, n), S);
        }
        return v;
      }
      function tw(n) {
        return function(i) {
          return Jn(i, n);
        };
      }
      function ff(n, i, a, l) {
        var h = l ? A0 : mi, v = -1, w = i.length, S = n;
        for (n === i && (i = Jt(i)), a && (S = ot(n, ir(a))); ++v < w; )
          for (var T = 0, B = i[v], U = a ? a(B) : B; (T = h(S, U, T, l)) > -1; )
            S !== n && Ls.call(S, T, 1), Ls.call(n, T, 1);
        return n;
      }
      function bh(n, i) {
        for (var a = n ? i.length : 0, l = a - 1; a--; ) {
          var h = i[a];
          if (a == l || h !== v) {
            var v = h;
            nn(h) ? Ls.call(n, h, 1) : hf(n, h);
          }
        }
        return n;
      }
      function lf(n, i) {
        return n + Fs(eh() * (i - n + 1));
      }
      function rw(n, i, a, l) {
        for (var h = -1, v = wt(Rs((i - n) / (a || 1)), 0), w = I(v); v--; )
          w[l ? v : ++h] = n, n += a;
        return w;
      }
      function cf(n, i) {
        var a = "";
        if (!n || i < 1 || i > ce)
          return a;
        do
          i % 2 && (a += n), i = Fs(i / 2), i && (n += n);
        while (i);
        return a;
      }
      function Ne(n, i) {
        return Tf(Jh(n, i, Zt), n + "");
      }
      function nw(n) {
        return nh(Ii(n));
      }
      function iw(n, i) {
        var a = Ii(n);
        return ea(a, Yn(i, 0, a.length));
      }
      function So(n, i, a, l) {
        if (!at(n))
          return n;
        i = Tn(i, n);
        for (var h = -1, v = i.length, w = v - 1, S = n; S != null && ++h < v; ) {
          var T = Rr(i[h]), B = a;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return n;
          if (h != w) {
            var U = S[T];
            B = l ? l(U, T, S) : r, B === r && (B = at(U) ? U : nn(i[h + 1]) ? [] : {});
          }
          bo(S, T, B), S = S[T];
        }
        return n;
      }
      var wh = Vs ? function(n, i) {
        return Vs.set(n, i), n;
      } : Zt, ow = Ms ? function(n, i) {
        return Ms(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Vf(i),
          writable: !0
        });
      } : Zt;
      function sw(n) {
        return ea(Ii(n));
      }
      function wr(n, i, a) {
        var l = -1, h = n.length;
        i < 0 && (i = -i > h ? 0 : h + i), a = a > h ? h : a, a < 0 && (a += h), h = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var v = I(h); ++l < h; )
          v[l] = n[l + i];
        return v;
      }
      function aw(n, i) {
        var a;
        return xn(n, function(l, h, v) {
          return a = i(l, h, v), !a;
        }), !!a;
      }
      function Gs(n, i, a) {
        var l = 0, h = n == null ? l : n.length;
        if (typeof i == "number" && i === i && h <= Fe) {
          for (; l < h; ) {
            var v = l + h >>> 1, w = n[v];
            w !== null && !sr(w) && (a ? w <= i : w < i) ? l = v + 1 : h = v;
          }
          return h;
        }
        return pf(n, i, Zt, a);
      }
      function pf(n, i, a, l) {
        var h = 0, v = n == null ? 0 : n.length;
        if (v === 0)
          return 0;
        i = a(i);
        for (var w = i !== i, S = i === null, T = sr(i), B = i === r; h < v; ) {
          var U = Fs((h + v) / 2), j = a(n[U]), Z = j !== r, ue = j === null, _e = j === j, Ce = sr(j);
          if (w)
            var me = l || _e;
          else B ? me = _e && (l || Z) : S ? me = _e && Z && (l || !ue) : T ? me = _e && Z && !ue && (l || !Ce) : ue || Ce ? me = !1 : me = l ? j <= i : j < i;
          me ? h = U + 1 : v = U;
        }
        return Ft(v, Te);
      }
      function Eh(n, i) {
        for (var a = -1, l = n.length, h = 0, v = []; ++a < l; ) {
          var w = n[a], S = i ? i(w) : w;
          if (!a || !$r(S, T)) {
            var T = S;
            v[h++] = w === 0 ? 0 : w;
          }
        }
        return v;
      }
      function Oh(n) {
        return typeof n == "number" ? n : sr(n) ? re : +n;
      }
      function or(n) {
        if (typeof n == "string")
          return n;
        if (Se(n))
          return ot(n, or) + "";
        if (sr(n))
          return th ? th.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -te ? "-0" : i;
      }
      function $n(n, i, a) {
        var l = -1, h = Ss, v = n.length, w = !0, S = [], T = S;
        if (a)
          w = !1, h = Uu;
        else if (v >= s) {
          var B = i ? null : _w(n);
          if (B)
            return xs(B);
          w = !1, h = ho, T = new zn();
        } else
          T = i ? [] : S;
        e:
          for (; ++l < v; ) {
            var U = n[l], j = i ? i(U) : U;
            if (U = a || U !== 0 ? U : 0, w && j === j) {
              for (var Z = T.length; Z--; )
                if (T[Z] === j)
                  continue e;
              i && T.push(j), S.push(U);
            } else h(T, j, a) || (T !== S && T.push(j), S.push(U));
          }
        return S;
      }
      function hf(n, i) {
        return i = Tn(i, n), n = Xh(n, i), n == null || delete n[Rr(Er(i))];
      }
      function Sh(n, i, a, l) {
        return So(n, i, a(Jn(n, i)), l);
      }
      function Ks(n, i, a, l) {
        for (var h = n.length, v = l ? h : -1; (l ? v-- : ++v < h) && i(n[v], v, n); )
          ;
        return a ? wr(n, l ? 0 : v, l ? v + 1 : h) : wr(n, l ? v + 1 : 0, l ? h : v);
      }
      function Ah(n, i) {
        var a = n;
        return a instanceof Pe && (a = a.value()), Hu(i, function(l, h) {
          return h.func.apply(h.thisArg, On([l], h.args));
        }, a);
      }
      function df(n, i, a) {
        var l = n.length;
        if (l < 2)
          return l ? $n(n[0]) : [];
        for (var h = -1, v = I(l); ++h < l; )
          for (var w = n[h], S = -1; ++S < l; )
            S != h && (v[h] = wo(v[h] || w, n[S], i, a));
        return $n(Mt(v, 1), i, a);
      }
      function xh(n, i, a) {
        for (var l = -1, h = n.length, v = i.length, w = {}; ++l < h; ) {
          var S = l < v ? i[l] : r;
          a(w, n[l], S);
        }
        return w;
      }
      function gf(n) {
        return ht(n) ? n : [];
      }
      function vf(n) {
        return typeof n == "function" ? n : Zt;
      }
      function Tn(n, i) {
        return Se(n) ? n : Af(n, i) ? [n] : td(He(n));
      }
      var uw = Ne;
      function Cn(n, i, a) {
        var l = n.length;
        return a = a === r ? l : a, !i && a >= l ? n : wr(n, i, a);
      }
      var $h = Y0 || function(n) {
        return Lt.clearTimeout(n);
      };
      function Th(n, i) {
        if (i)
          return n.slice();
        var a = n.length, l = Yp ? Yp(a) : new n.constructor(a);
        return n.copy(l), l;
      }
      function yf(n) {
        var i = new n.constructor(n.byteLength);
        return new Ds(i).set(new Ds(n)), i;
      }
      function fw(n, i) {
        var a = i ? yf(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.byteLength);
      }
      function lw(n) {
        var i = new n.constructor(n.source, cp.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function cw(n) {
        return mo ? Ye(mo.call(n)) : {};
      }
      function Ch(n, i) {
        var a = i ? yf(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.length);
      }
      function Nh(n, i) {
        if (n !== i) {
          var a = n !== r, l = n === null, h = n === n, v = sr(n), w = i !== r, S = i === null, T = i === i, B = sr(i);
          if (!S && !B && !v && n > i || v && w && T && !S && !B || l && w && T || !a && T || !h)
            return 1;
          if (!l && !v && !B && n < i || B && a && h && !l && !v || S && a && h || !w && h || !T)
            return -1;
        }
        return 0;
      }
      function pw(n, i, a) {
        for (var l = -1, h = n.criteria, v = i.criteria, w = h.length, S = a.length; ++l < w; ) {
          var T = Nh(h[l], v[l]);
          if (T) {
            if (l >= S)
              return T;
            var B = a[l];
            return T * (B == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function Ih(n, i, a, l) {
        for (var h = -1, v = n.length, w = a.length, S = -1, T = i.length, B = wt(v - w, 0), U = I(T + B), j = !l; ++S < T; )
          U[S] = i[S];
        for (; ++h < w; )
          (j || h < v) && (U[a[h]] = n[h]);
        for (; B--; )
          U[S++] = n[h++];
        return U;
      }
      function Dh(n, i, a, l) {
        for (var h = -1, v = n.length, w = -1, S = a.length, T = -1, B = i.length, U = wt(v - S, 0), j = I(U + B), Z = !l; ++h < U; )
          j[h] = n[h];
        for (var ue = h; ++T < B; )
          j[ue + T] = i[T];
        for (; ++w < S; )
          (Z || h < v) && (j[ue + a[w]] = n[h++]);
        return j;
      }
      function Jt(n, i) {
        var a = -1, l = n.length;
        for (i || (i = I(l)); ++a < l; )
          i[a] = n[a];
        return i;
      }
      function Mr(n, i, a, l) {
        var h = !a;
        a || (a = {});
        for (var v = -1, w = i.length; ++v < w; ) {
          var S = i[v], T = l ? l(a[S], n[S], S, a, n) : r;
          T === r && (T = n[S]), h ? en(a, S, T) : bo(a, S, T);
        }
        return a;
      }
      function hw(n, i) {
        return Mr(n, Sf(n), i);
      }
      function dw(n, i) {
        return Mr(n, Gh(n), i);
      }
      function qs(n, i) {
        return function(a, l) {
          var h = Se(a) ? m0 : R1, v = i ? i() : {};
          return h(a, n, ye(l, 2), v);
        };
      }
      function $i(n) {
        return Ne(function(i, a) {
          var l = -1, h = a.length, v = h > 1 ? a[h - 1] : r, w = h > 2 ? a[2] : r;
          for (v = n.length > 3 && typeof v == "function" ? (h--, v) : r, w && jt(a[0], a[1], w) && (v = h < 3 ? r : v, h = 1), i = Ye(i); ++l < h; ) {
            var S = a[l];
            S && n(i, S, l, v);
          }
          return i;
        });
      }
      function Ph(n, i) {
        return function(a, l) {
          if (a == null)
            return a;
          if (!Xt(a))
            return n(a, l);
          for (var h = a.length, v = i ? h : -1, w = Ye(a); (i ? v-- : ++v < h) && l(w[v], v, w) !== !1; )
            ;
          return a;
        };
      }
      function Lh(n) {
        return function(i, a, l) {
          for (var h = -1, v = Ye(i), w = l(i), S = w.length; S--; ) {
            var T = w[n ? S : ++h];
            if (a(v[T], T, v) === !1)
              break;
          }
          return i;
        };
      }
      function gw(n, i, a) {
        var l = i & N, h = Ao(n);
        function v() {
          var w = this && this !== Lt && this instanceof v ? h : n;
          return w.apply(l ? a : this, arguments);
        }
        return v;
      }
      function Mh(n) {
        return function(i) {
          i = He(i);
          var a = bi(i) ? Ar(i) : r, l = a ? a[0] : i.charAt(0), h = a ? Cn(a, 1).join("") : i.slice(1);
          return l[n]() + h;
        };
      }
      function Ti(n) {
        return function(i) {
          return Hu(Pd(Dd(i).replace(o0, "")), n, "");
        };
      }
      function Ao(n) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new n();
            case 1:
              return new n(i[0]);
            case 2:
              return new n(i[0], i[1]);
            case 3:
              return new n(i[0], i[1], i[2]);
            case 4:
              return new n(i[0], i[1], i[2], i[3]);
            case 5:
              return new n(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var a = xi(n.prototype), l = n.apply(a, i);
          return at(l) ? l : a;
        };
      }
      function vw(n, i, a) {
        var l = Ao(n);
        function h() {
          for (var v = arguments.length, w = I(v), S = v, T = Ci(h); S--; )
            w[S] = arguments[S];
          var B = v < 3 && w[0] !== T && w[v - 1] !== T ? [] : Sn(w, T);
          if (v -= B.length, v < a)
            return Uh(
              n,
              i,
              zs,
              h.placeholder,
              r,
              w,
              B,
              r,
              r,
              a - v
            );
          var U = this && this !== Lt && this instanceof h ? l : n;
          return nr(U, this, w);
        }
        return h;
      }
      function Rh(n) {
        return function(i, a, l) {
          var h = Ye(i);
          if (!Xt(i)) {
            var v = ye(a, 3);
            i = xt(i), a = function(S) {
              return v(h[S], S, h);
            };
          }
          var w = n(i, a, l);
          return w > -1 ? h[v ? i[w] : w] : r;
        };
      }
      function Fh(n) {
        return rn(function(i) {
          var a = i.length, l = a, h = mr.prototype.thru;
          for (n && i.reverse(); l--; ) {
            var v = i[l];
            if (typeof v != "function")
              throw new _r(f);
            if (h && !w && Qs(v) == "wrapper")
              var w = new mr([], !0);
          }
          for (l = w ? l : a; ++l < a; ) {
            v = i[l];
            var S = Qs(v), T = S == "wrapper" ? Ef(v) : r;
            T && xf(T[0]) && T[1] == (he | D | V | se) && !T[4].length && T[9] == 1 ? w = w[Qs(T[0])].apply(w, T[3]) : w = v.length == 1 && xf(v) ? w[S]() : w.thru(v);
          }
          return function() {
            var B = arguments, U = B[0];
            if (w && B.length == 1 && Se(U))
              return w.plant(U).value();
            for (var j = 0, Z = a ? i[j].apply(this, B) : U; ++j < a; )
              Z = i[j].call(this, Z);
            return Z;
          };
        });
      }
      function zs(n, i, a, l, h, v, w, S, T, B) {
        var U = i & he, j = i & N, Z = i & R, ue = i & (D | X), _e = i & fe, Ce = Z ? r : Ao(n);
        function me() {
          for (var De = arguments.length, Me = I(De), ar = De; ar--; )
            Me[ar] = arguments[ar];
          if (ue)
            var kt = Ci(me), ur = T0(Me, kt);
          if (l && (Me = Ih(Me, l, h, ue)), v && (Me = Dh(Me, v, w, ue)), De -= ur, ue && De < B) {
            var dt = Sn(Me, kt);
            return Uh(
              n,
              i,
              zs,
              me.placeholder,
              a,
              Me,
              dt,
              S,
              T,
              B - De
            );
          }
          var Tr = j ? a : this, an = Z ? Tr[n] : n;
          return De = Me.length, S ? Me = Rw(Me, S) : _e && De > 1 && Me.reverse(), U && T < De && (Me.length = T), this && this !== Lt && this instanceof me && (an = Ce || Ao(an)), an.apply(Tr, Me);
        }
        return me;
      }
      function Vh(n, i) {
        return function(a, l) {
          return k1(a, n, i(l), {});
        };
      }
      function Ys(n, i) {
        return function(a, l) {
          var h;
          if (a === r && l === r)
            return i;
          if (a !== r && (h = a), l !== r) {
            if (h === r)
              return l;
            typeof a == "string" || typeof l == "string" ? (a = or(a), l = or(l)) : (a = Oh(a), l = Oh(l)), h = n(a, l);
          }
          return h;
        };
      }
      function _f(n) {
        return rn(function(i) {
          return i = ot(i, ir(ye())), Ne(function(a) {
            var l = this;
            return n(i, function(h) {
              return nr(h, l, a);
            });
          });
        });
      }
      function Js(n, i) {
        i = i === r ? " " : or(i);
        var a = i.length;
        if (a < 2)
          return a ? cf(i, n) : i;
        var l = cf(i, Rs(n / wi(i)));
        return bi(i) ? Cn(Ar(l), 0, n).join("") : l.slice(0, n);
      }
      function yw(n, i, a, l) {
        var h = i & N, v = Ao(n);
        function w() {
          for (var S = -1, T = arguments.length, B = -1, U = l.length, j = I(U + T), Z = this && this !== Lt && this instanceof w ? v : n; ++B < U; )
            j[B] = l[B];
          for (; T--; )
            j[B++] = arguments[++S];
          return nr(Z, h ? a : this, j);
        }
        return w;
      }
      function Bh(n) {
        return function(i, a, l) {
          return l && typeof l != "number" && jt(i, a, l) && (a = l = r), i = sn(i), a === r ? (a = i, i = 0) : a = sn(a), l = l === r ? i < a ? 1 : -1 : sn(l), rw(i, a, l, n);
        };
      }
      function Xs(n) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = Or(i), a = Or(a)), n(i, a);
        };
      }
      function Uh(n, i, a, l, h, v, w, S, T, B) {
        var U = i & D, j = U ? w : r, Z = U ? r : w, ue = U ? v : r, _e = U ? r : v;
        i |= U ? V : ee, i &= ~(U ? ee : V), i & L || (i &= ~(N | R));
        var Ce = [
          n,
          i,
          h,
          ue,
          j,
          _e,
          Z,
          S,
          T,
          B
        ], me = a.apply(r, Ce);
        return xf(n) && Qh(me, Ce), me.placeholder = l, Zh(me, n, i);
      }
      function mf(n) {
        var i = bt[n];
        return function(a, l) {
          if (a = Or(a), l = l == null ? 0 : Ft($e(l), 292), l && Zp(a)) {
            var h = (He(a) + "e").split("e"), v = i(h[0] + "e" + (+h[1] + l));
            return h = (He(v) + "e").split("e"), +(h[0] + "e" + (+h[1] - l));
          }
          return i(a);
        };
      }
      var _w = Si && 1 / xs(new Si([, -0]))[1] == te ? function(n) {
        return new Si(n);
      } : Hf;
      function Hh(n) {
        return function(i) {
          var a = Vt(i);
          return a == b ? zu(i) : a == K ? M0(i) : $0(i, n(i));
        };
      }
      function tn(n, i, a, l, h, v, w, S) {
        var T = i & R;
        if (!T && typeof n != "function")
          throw new _r(f);
        var B = l ? l.length : 0;
        if (B || (i &= ~(V | ee), l = h = r), w = w === r ? w : wt($e(w), 0), S = S === r ? S : $e(S), B -= h ? h.length : 0, i & ee) {
          var U = l, j = h;
          l = h = r;
        }
        var Z = T ? r : Ef(n), ue = [
          n,
          i,
          a,
          l,
          h,
          U,
          j,
          v,
          w,
          S
        ];
        if (Z && Pw(ue, Z), n = ue[0], i = ue[1], a = ue[2], l = ue[3], h = ue[4], S = ue[9] = ue[9] === r ? T ? 0 : n.length : wt(ue[9] - B, 0), !S && i & (D | X) && (i &= ~(D | X)), !i || i == N)
          var _e = gw(n, i, a);
        else i == D || i == X ? _e = vw(n, i, S) : (i == V || i == (N | V)) && !h.length ? _e = yw(n, i, a, l) : _e = zs.apply(r, ue);
        var Ce = Z ? wh : Qh;
        return Zh(Ce(_e, ue), n, i);
      }
      function Wh(n, i, a, l) {
        return n === r || $r(n, Oi[a]) && !Ge.call(l, a) ? i : n;
      }
      function jh(n, i, a, l, h, v) {
        return at(n) && at(i) && (v.set(i, n), ks(n, i, r, jh, v), v.delete(i)), n;
      }
      function mw(n) {
        return To(n) ? r : n;
      }
      function kh(n, i, a, l, h, v) {
        var w = a & O, S = n.length, T = i.length;
        if (S != T && !(w && T > S))
          return !1;
        var B = v.get(n), U = v.get(i);
        if (B && U)
          return B == i && U == n;
        var j = -1, Z = !0, ue = a & $ ? new zn() : r;
        for (v.set(n, i), v.set(i, n); ++j < S; ) {
          var _e = n[j], Ce = i[j];
          if (l)
            var me = w ? l(Ce, _e, j, i, n, v) : l(_e, Ce, j, n, i, v);
          if (me !== r) {
            if (me)
              continue;
            Z = !1;
            break;
          }
          if (ue) {
            if (!Wu(i, function(De, Me) {
              if (!ho(ue, Me) && (_e === De || h(_e, De, a, l, v)))
                return ue.push(Me);
            })) {
              Z = !1;
              break;
            }
          } else if (!(_e === Ce || h(_e, Ce, a, l, v))) {
            Z = !1;
            break;
          }
        }
        return v.delete(n), v.delete(i), Z;
      }
      function bw(n, i, a, l, h, v, w) {
        switch (a) {
          case xe:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case ve:
            return !(n.byteLength != i.byteLength || !v(new Ds(n), new Ds(i)));
          case ut:
          case gt:
          case E:
            return $r(+n, +i);
          case ze:
            return n.name == i.name && n.message == i.message;
          case z:
          case q:
            return n == i + "";
          case b:
            var S = zu;
          case K:
            var T = l & O;
            if (S || (S = xs), n.size != i.size && !T)
              return !1;
            var B = w.get(n);
            if (B)
              return B == i;
            l |= $, w.set(n, i);
            var U = kh(S(n), S(i), l, h, v, w);
            return w.delete(n), U;
          case G:
            if (mo)
              return mo.call(n) == mo.call(i);
        }
        return !1;
      }
      function ww(n, i, a, l, h, v) {
        var w = a & O, S = bf(n), T = S.length, B = bf(i), U = B.length;
        if (T != U && !w)
          return !1;
        for (var j = T; j--; ) {
          var Z = S[j];
          if (!(w ? Z in i : Ge.call(i, Z)))
            return !1;
        }
        var ue = v.get(n), _e = v.get(i);
        if (ue && _e)
          return ue == i && _e == n;
        var Ce = !0;
        v.set(n, i), v.set(i, n);
        for (var me = w; ++j < T; ) {
          Z = S[j];
          var De = n[Z], Me = i[Z];
          if (l)
            var ar = w ? l(Me, De, Z, i, n, v) : l(De, Me, Z, n, i, v);
          if (!(ar === r ? De === Me || h(De, Me, a, l, v) : ar)) {
            Ce = !1;
            break;
          }
          me || (me = Z == "constructor");
        }
        if (Ce && !me) {
          var kt = n.constructor, ur = i.constructor;
          kt != ur && "constructor" in n && "constructor" in i && !(typeof kt == "function" && kt instanceof kt && typeof ur == "function" && ur instanceof ur) && (Ce = !1);
        }
        return v.delete(n), v.delete(i), Ce;
      }
      function rn(n) {
        return Tf(Jh(n, r, od), n + "");
      }
      function bf(n) {
        return lh(n, xt, Sf);
      }
      function wf(n) {
        return lh(n, Qt, Gh);
      }
      var Ef = Vs ? function(n) {
        return Vs.get(n);
      } : Hf;
      function Qs(n) {
        for (var i = n.name + "", a = Ai[i], l = Ge.call(Ai, i) ? a.length : 0; l--; ) {
          var h = a[l], v = h.func;
          if (v == null || v == n)
            return h.name;
        }
        return i;
      }
      function Ci(n) {
        var i = Ge.call(d, "placeholder") ? d : n;
        return i.placeholder;
      }
      function ye() {
        var n = d.iteratee || Bf;
        return n = n === Bf ? hh : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Zs(n, i) {
        var a = n.__data__;
        return Cw(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Of(n) {
        for (var i = xt(n), a = i.length; a--; ) {
          var l = i[a], h = n[l];
          i[a] = [l, h, zh(h)];
        }
        return i;
      }
      function Xn(n, i) {
        var a = D0(n, i);
        return ph(a) ? a : r;
      }
      function Ew(n) {
        var i = Ge.call(n, Kn), a = n[Kn];
        try {
          n[Kn] = r;
          var l = !0;
        } catch {
        }
        var h = Ns.call(n);
        return l && (i ? n[Kn] = a : delete n[Kn]), h;
      }
      var Sf = Ju ? function(n) {
        return n == null ? [] : (n = Ye(n), En(Ju(n), function(i) {
          return Xp.call(n, i);
        }));
      } : Wf, Gh = Ju ? function(n) {
        for (var i = []; n; )
          On(i, Sf(n)), n = Ps(n);
        return i;
      } : Wf, Vt = Wt;
      (Xu && Vt(new Xu(new ArrayBuffer(1))) != xe || vo && Vt(new vo()) != b || Qu && Vt(Qu.resolve()) != H || Si && Vt(new Si()) != K || yo && Vt(new yo()) != Y) && (Vt = function(n) {
        var i = Wt(n), a = i == W ? n.constructor : r, l = a ? Qn(a) : "";
        if (l)
          switch (l) {
            case i1:
              return xe;
            case o1:
              return b;
            case s1:
              return H;
            case a1:
              return K;
            case u1:
              return Y;
          }
        return i;
      });
      function Ow(n, i, a) {
        for (var l = -1, h = a.length; ++l < h; ) {
          var v = a[l], w = v.size;
          switch (v.type) {
            case "drop":
              n += w;
              break;
            case "dropRight":
              i -= w;
              break;
            case "take":
              i = Ft(i, n + w);
              break;
            case "takeRight":
              n = wt(n, i - w);
              break;
          }
        }
        return { start: n, end: i };
      }
      function Sw(n) {
        var i = n.match(Nb);
        return i ? i[1].split(Ib) : [];
      }
      function Kh(n, i, a) {
        i = Tn(i, n);
        for (var l = -1, h = i.length, v = !1; ++l < h; ) {
          var w = Rr(i[l]);
          if (!(v = n != null && a(n, w)))
            break;
          n = n[w];
        }
        return v || ++l != h ? v : (h = n == null ? 0 : n.length, !!h && sa(h) && nn(w, h) && (Se(n) || Zn(n)));
      }
      function Aw(n) {
        var i = n.length, a = new n.constructor(i);
        return i && typeof n[0] == "string" && Ge.call(n, "index") && (a.index = n.index, a.input = n.input), a;
      }
      function qh(n) {
        return typeof n.constructor == "function" && !xo(n) ? xi(Ps(n)) : {};
      }
      function xw(n, i, a) {
        var l = n.constructor;
        switch (i) {
          case ve:
            return yf(n);
          case ut:
          case gt:
            return new l(+n);
          case xe:
            return fw(n, a);
          case Be:
          case Ve:
          case Dt:
          case yt:
          case Ht:
          case Pt:
          case Xr:
          case yi:
          case mt:
            return Ch(n, a);
          case b:
            return new l();
          case E:
          case q:
            return new l(n);
          case z:
            return lw(n);
          case K:
            return new l();
          case G:
            return cw(n);
        }
      }
      function $w(n, i) {
        var a = i.length;
        if (!a)
          return n;
        var l = a - 1;
        return i[l] = (a > 1 ? "& " : "") + i[l], i = i.join(a > 2 ? ", " : " "), n.replace(Cb, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Tw(n) {
        return Se(n) || Zn(n) || !!(Qp && n && n[Qp]);
      }
      function nn(n, i) {
        var a = typeof n;
        return i = i ?? ce, !!i && (a == "number" || a != "symbol" && Ub.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function jt(n, i, a) {
        if (!at(a))
          return !1;
        var l = typeof i;
        return (l == "number" ? Xt(a) && nn(i, a.length) : l == "string" && i in a) ? $r(a[i], n) : !1;
      }
      function Af(n, i) {
        if (Se(n))
          return !1;
        var a = typeof n;
        return a == "number" || a == "symbol" || a == "boolean" || n == null || sr(n) ? !0 : Ab.test(n) || !Sb.test(n) || i != null && n in Ye(i);
      }
      function Cw(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function xf(n) {
        var i = Qs(n), a = d[i];
        if (typeof a != "function" || !(i in Pe.prototype))
          return !1;
        if (n === a)
          return !0;
        var l = Ef(a);
        return !!l && n === l[0];
      }
      function Nw(n) {
        return !!zp && zp in n;
      }
      var Iw = Ts ? on : jf;
      function xo(n) {
        var i = n && n.constructor, a = typeof i == "function" && i.prototype || Oi;
        return n === a;
      }
      function zh(n) {
        return n === n && !at(n);
      }
      function Yh(n, i) {
        return function(a) {
          return a == null ? !1 : a[n] === i && (i !== r || n in Ye(a));
        };
      }
      function Dw(n) {
        var i = ia(n, function(l) {
          return a.size === g && a.clear(), l;
        }), a = i.cache;
        return i;
      }
      function Pw(n, i) {
        var a = n[1], l = i[1], h = a | l, v = h < (N | R | he), w = l == he && a == D || l == he && a == se && n[7].length <= i[8] || l == (he | se) && i[7].length <= i[8] && a == D;
        if (!(v || w))
          return n;
        l & N && (n[2] = i[2], h |= a & N ? 0 : L);
        var S = i[3];
        if (S) {
          var T = n[3];
          n[3] = T ? Ih(T, S, i[4]) : S, n[4] = T ? Sn(n[3], y) : i[4];
        }
        return S = i[5], S && (T = n[5], n[5] = T ? Dh(T, S, i[6]) : S, n[6] = T ? Sn(n[5], y) : i[6]), S = i[7], S && (n[7] = S), l & he && (n[8] = n[8] == null ? i[8] : Ft(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = h, n;
      }
      function Lw(n) {
        var i = [];
        if (n != null)
          for (var a in Ye(n))
            i.push(a);
        return i;
      }
      function Mw(n) {
        return Ns.call(n);
      }
      function Jh(n, i, a) {
        return i = wt(i === r ? n.length - 1 : i, 0), function() {
          for (var l = arguments, h = -1, v = wt(l.length - i, 0), w = I(v); ++h < v; )
            w[h] = l[i + h];
          h = -1;
          for (var S = I(i + 1); ++h < i; )
            S[h] = l[h];
          return S[i] = a(w), nr(n, this, S);
        };
      }
      function Xh(n, i) {
        return i.length < 2 ? n : Jn(n, wr(i, 0, -1));
      }
      function Rw(n, i) {
        for (var a = n.length, l = Ft(i.length, a), h = Jt(n); l--; ) {
          var v = i[l];
          n[l] = nn(v, a) ? h[v] : r;
        }
        return n;
      }
      function $f(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var Qh = ed(wh), $o = X0 || function(n, i) {
        return Lt.setTimeout(n, i);
      }, Tf = ed(ow);
      function Zh(n, i, a) {
        var l = i + "";
        return Tf(n, $w(l, Fw(Sw(l), a)));
      }
      function ed(n) {
        var i = 0, a = 0;
        return function() {
          var l = t1(), h = Q - (l - a);
          if (a = l, h > 0) {
            if (++i >= M)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function ea(n, i) {
        var a = -1, l = n.length, h = l - 1;
        for (i = i === r ? l : i; ++a < i; ) {
          var v = lf(a, h), w = n[v];
          n[v] = n[a], n[a] = w;
        }
        return n.length = i, n;
      }
      var td = Dw(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(xb, function(a, l, h, v) {
          i.push(h ? v.replace(Lb, "$1") : l || a);
        }), i;
      });
      function Rr(n) {
        if (typeof n == "string" || sr(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -te ? "-0" : i;
      }
      function Qn(n) {
        if (n != null) {
          try {
            return Cs.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Fw(n, i) {
        return yr(qe, function(a) {
          var l = "_." + a[0];
          i & a[1] && !Ss(n, l) && n.push(l);
        }), n.sort();
      }
      function rd(n) {
        if (n instanceof Pe)
          return n.clone();
        var i = new mr(n.__wrapped__, n.__chain__);
        return i.__actions__ = Jt(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function Vw(n, i, a) {
        (a ? jt(n, i, a) : i === r) ? i = 1 : i = wt($e(i), 0);
        var l = n == null ? 0 : n.length;
        if (!l || i < 1)
          return [];
        for (var h = 0, v = 0, w = I(Rs(l / i)); h < l; )
          w[v++] = wr(n, h, h += i);
        return w;
      }
      function Bw(n) {
        for (var i = -1, a = n == null ? 0 : n.length, l = 0, h = []; ++i < a; ) {
          var v = n[i];
          v && (h[l++] = v);
        }
        return h;
      }
      function Uw() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = I(n - 1), a = arguments[0], l = n; l--; )
          i[l - 1] = arguments[l];
        return On(Se(a) ? Jt(a) : [a], Mt(i, 1));
      }
      var Hw = Ne(function(n, i) {
        return ht(n) ? wo(n, Mt(i, 1, ht, !0)) : [];
      }), Ww = Ne(function(n, i) {
        var a = Er(i);
        return ht(a) && (a = r), ht(n) ? wo(n, Mt(i, 1, ht, !0), ye(a, 2)) : [];
      }), jw = Ne(function(n, i) {
        var a = Er(i);
        return ht(a) && (a = r), ht(n) ? wo(n, Mt(i, 1, ht, !0), r, a) : [];
      });
      function kw(n, i, a) {
        var l = n == null ? 0 : n.length;
        return l ? (i = a || i === r ? 1 : $e(i), wr(n, i < 0 ? 0 : i, l)) : [];
      }
      function Gw(n, i, a) {
        var l = n == null ? 0 : n.length;
        return l ? (i = a || i === r ? 1 : $e(i), i = l - i, wr(n, 0, i < 0 ? 0 : i)) : [];
      }
      function Kw(n, i) {
        return n && n.length ? Ks(n, ye(i, 3), !0, !0) : [];
      }
      function qw(n, i) {
        return n && n.length ? Ks(n, ye(i, 3), !0) : [];
      }
      function zw(n, i, a, l) {
        var h = n == null ? 0 : n.length;
        return h ? (a && typeof a != "number" && jt(n, i, a) && (a = 0, l = h), U1(n, i, a, l)) : [];
      }
      function nd(n, i, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var h = a == null ? 0 : $e(a);
        return h < 0 && (h = wt(l + h, 0)), As(n, ye(i, 3), h);
      }
      function id(n, i, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var h = l - 1;
        return a !== r && (h = $e(a), h = a < 0 ? wt(l + h, 0) : Ft(h, l - 1)), As(n, ye(i, 3), h, !0);
      }
      function od(n) {
        var i = n == null ? 0 : n.length;
        return i ? Mt(n, 1) : [];
      }
      function Yw(n) {
        var i = n == null ? 0 : n.length;
        return i ? Mt(n, te) : [];
      }
      function Jw(n, i) {
        var a = n == null ? 0 : n.length;
        return a ? (i = i === r ? 1 : $e(i), Mt(n, i)) : [];
      }
      function Xw(n) {
        for (var i = -1, a = n == null ? 0 : n.length, l = {}; ++i < a; ) {
          var h = n[i];
          l[h[0]] = h[1];
        }
        return l;
      }
      function sd(n) {
        return n && n.length ? n[0] : r;
      }
      function Qw(n, i, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var h = a == null ? 0 : $e(a);
        return h < 0 && (h = wt(l + h, 0)), mi(n, i, h);
      }
      function Zw(n) {
        var i = n == null ? 0 : n.length;
        return i ? wr(n, 0, -1) : [];
      }
      var eE = Ne(function(n) {
        var i = ot(n, gf);
        return i.length && i[0] === n[0] ? of(i) : [];
      }), tE = Ne(function(n) {
        var i = Er(n), a = ot(n, gf);
        return i === Er(a) ? i = r : a.pop(), a.length && a[0] === n[0] ? of(a, ye(i, 2)) : [];
      }), rE = Ne(function(n) {
        var i = Er(n), a = ot(n, gf);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === n[0] ? of(a, r, i) : [];
      });
      function nE(n, i) {
        return n == null ? "" : Z0.call(n, i);
      }
      function Er(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function iE(n, i, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var h = l;
        return a !== r && (h = $e(a), h = h < 0 ? wt(l + h, 0) : Ft(h, l - 1)), i === i ? F0(n, i, h) : As(n, Up, h, !0);
      }
      function oE(n, i) {
        return n && n.length ? yh(n, $e(i)) : r;
      }
      var sE = Ne(ad);
      function ad(n, i) {
        return n && n.length && i && i.length ? ff(n, i) : n;
      }
      function aE(n, i, a) {
        return n && n.length && i && i.length ? ff(n, i, ye(a, 2)) : n;
      }
      function uE(n, i, a) {
        return n && n.length && i && i.length ? ff(n, i, r, a) : n;
      }
      var fE = rn(function(n, i) {
        var a = n == null ? 0 : n.length, l = ef(n, i);
        return bh(n, ot(i, function(h) {
          return nn(h, a) ? +h : h;
        }).sort(Nh)), l;
      });
      function lE(n, i) {
        var a = [];
        if (!(n && n.length))
          return a;
        var l = -1, h = [], v = n.length;
        for (i = ye(i, 3); ++l < v; ) {
          var w = n[l];
          i(w, l, n) && (a.push(w), h.push(l));
        }
        return bh(n, h), a;
      }
      function Cf(n) {
        return n == null ? n : n1.call(n);
      }
      function cE(n, i, a) {
        var l = n == null ? 0 : n.length;
        return l ? (a && typeof a != "number" && jt(n, i, a) ? (i = 0, a = l) : (i = i == null ? 0 : $e(i), a = a === r ? l : $e(a)), wr(n, i, a)) : [];
      }
      function pE(n, i) {
        return Gs(n, i);
      }
      function hE(n, i, a) {
        return pf(n, i, ye(a, 2));
      }
      function dE(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var l = Gs(n, i);
          if (l < a && $r(n[l], i))
            return l;
        }
        return -1;
      }
      function gE(n, i) {
        return Gs(n, i, !0);
      }
      function vE(n, i, a) {
        return pf(n, i, ye(a, 2), !0);
      }
      function yE(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var l = Gs(n, i, !0) - 1;
          if ($r(n[l], i))
            return l;
        }
        return -1;
      }
      function _E(n) {
        return n && n.length ? Eh(n) : [];
      }
      function mE(n, i) {
        return n && n.length ? Eh(n, ye(i, 2)) : [];
      }
      function bE(n) {
        var i = n == null ? 0 : n.length;
        return i ? wr(n, 1, i) : [];
      }
      function wE(n, i, a) {
        return n && n.length ? (i = a || i === r ? 1 : $e(i), wr(n, 0, i < 0 ? 0 : i)) : [];
      }
      function EE(n, i, a) {
        var l = n == null ? 0 : n.length;
        return l ? (i = a || i === r ? 1 : $e(i), i = l - i, wr(n, i < 0 ? 0 : i, l)) : [];
      }
      function OE(n, i) {
        return n && n.length ? Ks(n, ye(i, 3), !1, !0) : [];
      }
      function SE(n, i) {
        return n && n.length ? Ks(n, ye(i, 3)) : [];
      }
      var AE = Ne(function(n) {
        return $n(Mt(n, 1, ht, !0));
      }), xE = Ne(function(n) {
        var i = Er(n);
        return ht(i) && (i = r), $n(Mt(n, 1, ht, !0), ye(i, 2));
      }), $E = Ne(function(n) {
        var i = Er(n);
        return i = typeof i == "function" ? i : r, $n(Mt(n, 1, ht, !0), r, i);
      });
      function TE(n) {
        return n && n.length ? $n(n) : [];
      }
      function CE(n, i) {
        return n && n.length ? $n(n, ye(i, 2)) : [];
      }
      function NE(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? $n(n, r, i) : [];
      }
      function Nf(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = En(n, function(a) {
          if (ht(a))
            return i = wt(a.length, i), !0;
        }), Ku(i, function(a) {
          return ot(n, ju(a));
        });
      }
      function ud(n, i) {
        if (!(n && n.length))
          return [];
        var a = Nf(n);
        return i == null ? a : ot(a, function(l) {
          return nr(i, r, l);
        });
      }
      var IE = Ne(function(n, i) {
        return ht(n) ? wo(n, i) : [];
      }), DE = Ne(function(n) {
        return df(En(n, ht));
      }), PE = Ne(function(n) {
        var i = Er(n);
        return ht(i) && (i = r), df(En(n, ht), ye(i, 2));
      }), LE = Ne(function(n) {
        var i = Er(n);
        return i = typeof i == "function" ? i : r, df(En(n, ht), r, i);
      }), ME = Ne(Nf);
      function RE(n, i) {
        return xh(n || [], i || [], bo);
      }
      function FE(n, i) {
        return xh(n || [], i || [], So);
      }
      var VE = Ne(function(n) {
        var i = n.length, a = i > 1 ? n[i - 1] : r;
        return a = typeof a == "function" ? (n.pop(), a) : r, ud(n, a);
      });
      function fd(n) {
        var i = d(n);
        return i.__chain__ = !0, i;
      }
      function BE(n, i) {
        return i(n), n;
      }
      function ta(n, i) {
        return i(n);
      }
      var UE = rn(function(n) {
        var i = n.length, a = i ? n[0] : 0, l = this.__wrapped__, h = function(v) {
          return ef(v, n);
        };
        return i > 1 || this.__actions__.length || !(l instanceof Pe) || !nn(a) ? this.thru(h) : (l = l.slice(a, +a + (i ? 1 : 0)), l.__actions__.push({
          func: ta,
          args: [h],
          thisArg: r
        }), new mr(l, this.__chain__).thru(function(v) {
          return i && !v.length && v.push(r), v;
        }));
      });
      function HE() {
        return fd(this);
      }
      function WE() {
        return new mr(this.value(), this.__chain__);
      }
      function jE() {
        this.__values__ === r && (this.__values__ = Od(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function kE() {
        return this;
      }
      function GE(n) {
        for (var i, a = this; a instanceof Us; ) {
          var l = rd(a);
          l.__index__ = 0, l.__values__ = r, i ? h.__wrapped__ = l : i = l;
          var h = l;
          a = a.__wrapped__;
        }
        return h.__wrapped__ = n, i;
      }
      function KE() {
        var n = this.__wrapped__;
        if (n instanceof Pe) {
          var i = n;
          return this.__actions__.length && (i = new Pe(this)), i = i.reverse(), i.__actions__.push({
            func: ta,
            args: [Cf],
            thisArg: r
          }), new mr(i, this.__chain__);
        }
        return this.thru(Cf);
      }
      function qE() {
        return Ah(this.__wrapped__, this.__actions__);
      }
      var zE = qs(function(n, i, a) {
        Ge.call(n, a) ? ++n[a] : en(n, a, 1);
      });
      function YE(n, i, a) {
        var l = Se(n) ? Vp : B1;
        return a && jt(n, i, a) && (i = r), l(n, ye(i, 3));
      }
      function JE(n, i) {
        var a = Se(n) ? En : uh;
        return a(n, ye(i, 3));
      }
      var XE = Rh(nd), QE = Rh(id);
      function ZE(n, i) {
        return Mt(ra(n, i), 1);
      }
      function eO(n, i) {
        return Mt(ra(n, i), te);
      }
      function tO(n, i, a) {
        return a = a === r ? 1 : $e(a), Mt(ra(n, i), a);
      }
      function ld(n, i) {
        var a = Se(n) ? yr : xn;
        return a(n, ye(i, 3));
      }
      function cd(n, i) {
        var a = Se(n) ? b0 : ah;
        return a(n, ye(i, 3));
      }
      var rO = qs(function(n, i, a) {
        Ge.call(n, a) ? n[a].push(i) : en(n, a, [i]);
      });
      function nO(n, i, a, l) {
        n = Xt(n) ? n : Ii(n), a = a && !l ? $e(a) : 0;
        var h = n.length;
        return a < 0 && (a = wt(h + a, 0)), aa(n) ? a <= h && n.indexOf(i, a) > -1 : !!h && mi(n, i, a) > -1;
      }
      var iO = Ne(function(n, i, a) {
        var l = -1, h = typeof i == "function", v = Xt(n) ? I(n.length) : [];
        return xn(n, function(w) {
          v[++l] = h ? nr(i, w, a) : Eo(w, i, a);
        }), v;
      }), oO = qs(function(n, i, a) {
        en(n, a, i);
      });
      function ra(n, i) {
        var a = Se(n) ? ot : dh;
        return a(n, ye(i, 3));
      }
      function sO(n, i, a, l) {
        return n == null ? [] : (Se(i) || (i = i == null ? [] : [i]), a = l ? r : a, Se(a) || (a = a == null ? [] : [a]), _h(n, i, a));
      }
      var aO = qs(function(n, i, a) {
        n[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function uO(n, i, a) {
        var l = Se(n) ? Hu : Wp, h = arguments.length < 3;
        return l(n, ye(i, 4), a, h, xn);
      }
      function fO(n, i, a) {
        var l = Se(n) ? w0 : Wp, h = arguments.length < 3;
        return l(n, ye(i, 4), a, h, ah);
      }
      function lO(n, i) {
        var a = Se(n) ? En : uh;
        return a(n, oa(ye(i, 3)));
      }
      function cO(n) {
        var i = Se(n) ? nh : nw;
        return i(n);
      }
      function pO(n, i, a) {
        (a ? jt(n, i, a) : i === r) ? i = 1 : i = $e(i);
        var l = Se(n) ? L1 : iw;
        return l(n, i);
      }
      function hO(n) {
        var i = Se(n) ? M1 : sw;
        return i(n);
      }
      function dO(n) {
        if (n == null)
          return 0;
        if (Xt(n))
          return aa(n) ? wi(n) : n.length;
        var i = Vt(n);
        return i == b || i == K ? n.size : af(n).length;
      }
      function gO(n, i, a) {
        var l = Se(n) ? Wu : aw;
        return a && jt(n, i, a) && (i = r), l(n, ye(i, 3));
      }
      var vO = Ne(function(n, i) {
        if (n == null)
          return [];
        var a = i.length;
        return a > 1 && jt(n, i[0], i[1]) ? i = [] : a > 2 && jt(i[0], i[1], i[2]) && (i = [i[0]]), _h(n, Mt(i, 1), []);
      }), na = J0 || function() {
        return Lt.Date.now();
      };
      function yO(n, i) {
        if (typeof i != "function")
          throw new _r(f);
        return n = $e(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function pd(n, i, a) {
        return i = a ? r : i, i = n && i == null ? n.length : i, tn(n, he, r, r, r, r, i);
      }
      function hd(n, i) {
        var a;
        if (typeof i != "function")
          throw new _r(f);
        return n = $e(n), function() {
          return --n > 0 && (a = i.apply(this, arguments)), n <= 1 && (i = r), a;
        };
      }
      var If = Ne(function(n, i, a) {
        var l = N;
        if (a.length) {
          var h = Sn(a, Ci(If));
          l |= V;
        }
        return tn(n, l, i, a, h);
      }), dd = Ne(function(n, i, a) {
        var l = N | R;
        if (a.length) {
          var h = Sn(a, Ci(dd));
          l |= V;
        }
        return tn(i, l, n, a, h);
      });
      function gd(n, i, a) {
        i = a ? r : i;
        var l = tn(n, D, r, r, r, r, r, i);
        return l.placeholder = gd.placeholder, l;
      }
      function vd(n, i, a) {
        i = a ? r : i;
        var l = tn(n, X, r, r, r, r, r, i);
        return l.placeholder = vd.placeholder, l;
      }
      function yd(n, i, a) {
        var l, h, v, w, S, T, B = 0, U = !1, j = !1, Z = !0;
        if (typeof n != "function")
          throw new _r(f);
        i = Or(i) || 0, at(a) && (U = !!a.leading, j = "maxWait" in a, v = j ? wt(Or(a.maxWait) || 0, i) : v, Z = "trailing" in a ? !!a.trailing : Z);
        function ue(dt) {
          var Tr = l, an = h;
          return l = h = r, B = dt, w = n.apply(an, Tr), w;
        }
        function _e(dt) {
          return B = dt, S = $o(De, i), U ? ue(dt) : w;
        }
        function Ce(dt) {
          var Tr = dt - T, an = dt - B, Rd = i - Tr;
          return j ? Ft(Rd, v - an) : Rd;
        }
        function me(dt) {
          var Tr = dt - T, an = dt - B;
          return T === r || Tr >= i || Tr < 0 || j && an >= v;
        }
        function De() {
          var dt = na();
          if (me(dt))
            return Me(dt);
          S = $o(De, Ce(dt));
        }
        function Me(dt) {
          return S = r, Z && l ? ue(dt) : (l = h = r, w);
        }
        function ar() {
          S !== r && $h(S), B = 0, l = T = h = S = r;
        }
        function kt() {
          return S === r ? w : Me(na());
        }
        function ur() {
          var dt = na(), Tr = me(dt);
          if (l = arguments, h = this, T = dt, Tr) {
            if (S === r)
              return _e(T);
            if (j)
              return $h(S), S = $o(De, i), ue(T);
          }
          return S === r && (S = $o(De, i)), w;
        }
        return ur.cancel = ar, ur.flush = kt, ur;
      }
      var _O = Ne(function(n, i) {
        return sh(n, 1, i);
      }), mO = Ne(function(n, i, a) {
        return sh(n, Or(i) || 0, a);
      });
      function bO(n) {
        return tn(n, fe);
      }
      function ia(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new _r(f);
        var a = function() {
          var l = arguments, h = i ? i.apply(this, l) : l[0], v = a.cache;
          if (v.has(h))
            return v.get(h);
          var w = n.apply(this, l);
          return a.cache = v.set(h, w) || v, w;
        };
        return a.cache = new (ia.Cache || Zr)(), a;
      }
      ia.Cache = Zr;
      function oa(n) {
        if (typeof n != "function")
          throw new _r(f);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, i[0]);
            case 2:
              return !n.call(this, i[0], i[1]);
            case 3:
              return !n.call(this, i[0], i[1], i[2]);
          }
          return !n.apply(this, i);
        };
      }
      function wO(n) {
        return hd(2, n);
      }
      var EO = uw(function(n, i) {
        i = i.length == 1 && Se(i[0]) ? ot(i[0], ir(ye())) : ot(Mt(i, 1), ir(ye()));
        var a = i.length;
        return Ne(function(l) {
          for (var h = -1, v = Ft(l.length, a); ++h < v; )
            l[h] = i[h].call(this, l[h]);
          return nr(n, this, l);
        });
      }), Df = Ne(function(n, i) {
        var a = Sn(i, Ci(Df));
        return tn(n, V, r, i, a);
      }), _d = Ne(function(n, i) {
        var a = Sn(i, Ci(_d));
        return tn(n, ee, r, i, a);
      }), OO = rn(function(n, i) {
        return tn(n, se, r, r, r, i);
      });
      function SO(n, i) {
        if (typeof n != "function")
          throw new _r(f);
        return i = i === r ? i : $e(i), Ne(n, i);
      }
      function AO(n, i) {
        if (typeof n != "function")
          throw new _r(f);
        return i = i == null ? 0 : wt($e(i), 0), Ne(function(a) {
          var l = a[i], h = Cn(a, 0, i);
          return l && On(h, l), nr(n, this, h);
        });
      }
      function xO(n, i, a) {
        var l = !0, h = !0;
        if (typeof n != "function")
          throw new _r(f);
        return at(a) && (l = "leading" in a ? !!a.leading : l, h = "trailing" in a ? !!a.trailing : h), yd(n, i, {
          leading: l,
          maxWait: i,
          trailing: h
        });
      }
      function $O(n) {
        return pd(n, 1);
      }
      function TO(n, i) {
        return Df(vf(i), n);
      }
      function CO() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return Se(n) ? n : [n];
      }
      function NO(n) {
        return br(n, A);
      }
      function IO(n, i) {
        return i = typeof i == "function" ? i : r, br(n, A, i);
      }
      function DO(n) {
        return br(n, _ | A);
      }
      function PO(n, i) {
        return i = typeof i == "function" ? i : r, br(n, _ | A, i);
      }
      function LO(n, i) {
        return i == null || oh(n, i, xt(i));
      }
      function $r(n, i) {
        return n === i || n !== n && i !== i;
      }
      var MO = Xs(nf), RO = Xs(function(n, i) {
        return n >= i;
      }), Zn = ch(/* @__PURE__ */ function() {
        return arguments;
      }()) ? ch : function(n) {
        return ft(n) && Ge.call(n, "callee") && !Xp.call(n, "callee");
      }, Se = I.isArray, FO = Dp ? ir(Dp) : G1;
      function Xt(n) {
        return n != null && sa(n.length) && !on(n);
      }
      function ht(n) {
        return ft(n) && Xt(n);
      }
      function VO(n) {
        return n === !0 || n === !1 || ft(n) && Wt(n) == ut;
      }
      var Nn = Q0 || jf, BO = Pp ? ir(Pp) : K1;
      function UO(n) {
        return ft(n) && n.nodeType === 1 && !To(n);
      }
      function HO(n) {
        if (n == null)
          return !0;
        if (Xt(n) && (Se(n) || typeof n == "string" || typeof n.splice == "function" || Nn(n) || Ni(n) || Zn(n)))
          return !n.length;
        var i = Vt(n);
        if (i == b || i == K)
          return !n.size;
        if (xo(n))
          return !af(n).length;
        for (var a in n)
          if (Ge.call(n, a))
            return !1;
        return !0;
      }
      function WO(n, i) {
        return Oo(n, i);
      }
      function jO(n, i, a) {
        a = typeof a == "function" ? a : r;
        var l = a ? a(n, i) : r;
        return l === r ? Oo(n, i, r, a) : !!l;
      }
      function Pf(n) {
        if (!ft(n))
          return !1;
        var i = Wt(n);
        return i == ze || i == Yt || typeof n.message == "string" && typeof n.name == "string" && !To(n);
      }
      function kO(n) {
        return typeof n == "number" && Zp(n);
      }
      function on(n) {
        if (!at(n))
          return !1;
        var i = Wt(n);
        return i == vt || i == It || i == pt || i == k;
      }
      function md(n) {
        return typeof n == "number" && n == $e(n);
      }
      function sa(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ce;
      }
      function at(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function ft(n) {
        return n != null && typeof n == "object";
      }
      var bd = Lp ? ir(Lp) : z1;
      function GO(n, i) {
        return n === i || sf(n, i, Of(i));
      }
      function KO(n, i, a) {
        return a = typeof a == "function" ? a : r, sf(n, i, Of(i), a);
      }
      function qO(n) {
        return wd(n) && n != +n;
      }
      function zO(n) {
        if (Iw(n))
          throw new we(u);
        return ph(n);
      }
      function YO(n) {
        return n === null;
      }
      function JO(n) {
        return n == null;
      }
      function wd(n) {
        return typeof n == "number" || ft(n) && Wt(n) == E;
      }
      function To(n) {
        if (!ft(n) || Wt(n) != W)
          return !1;
        var i = Ps(n);
        if (i === null)
          return !0;
        var a = Ge.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && Cs.call(a) == K0;
      }
      var Lf = Mp ? ir(Mp) : Y1;
      function XO(n) {
        return md(n) && n >= -ce && n <= ce;
      }
      var Ed = Rp ? ir(Rp) : J1;
      function aa(n) {
        return typeof n == "string" || !Se(n) && ft(n) && Wt(n) == q;
      }
      function sr(n) {
        return typeof n == "symbol" || ft(n) && Wt(n) == G;
      }
      var Ni = Fp ? ir(Fp) : X1;
      function QO(n) {
        return n === r;
      }
      function ZO(n) {
        return ft(n) && Vt(n) == Y;
      }
      function eS(n) {
        return ft(n) && Wt(n) == le;
      }
      var tS = Xs(uf), rS = Xs(function(n, i) {
        return n <= i;
      });
      function Od(n) {
        if (!n)
          return [];
        if (Xt(n))
          return aa(n) ? Ar(n) : Jt(n);
        if (go && n[go])
          return L0(n[go]());
        var i = Vt(n), a = i == b ? zu : i == K ? xs : Ii;
        return a(n);
      }
      function sn(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Or(n), n === te || n === -te) {
          var i = n < 0 ? -1 : 1;
          return i * Ze;
        }
        return n === n ? n : 0;
      }
      function $e(n) {
        var i = sn(n), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function Sd(n) {
        return n ? Yn($e(n), 0, oe) : 0;
      }
      function Or(n) {
        if (typeof n == "number")
          return n;
        if (sr(n))
          return re;
        if (at(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = at(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = jp(n);
        var a = Fb.test(n);
        return a || Bb.test(n) ? y0(n.slice(2), a ? 2 : 8) : Rb.test(n) ? re : +n;
      }
      function Ad(n) {
        return Mr(n, Qt(n));
      }
      function nS(n) {
        return n ? Yn($e(n), -ce, ce) : n === 0 ? n : 0;
      }
      function He(n) {
        return n == null ? "" : or(n);
      }
      var iS = $i(function(n, i) {
        if (xo(i) || Xt(i)) {
          Mr(i, xt(i), n);
          return;
        }
        for (var a in i)
          Ge.call(i, a) && bo(n, a, i[a]);
      }), xd = $i(function(n, i) {
        Mr(i, Qt(i), n);
      }), ua = $i(function(n, i, a, l) {
        Mr(i, Qt(i), n, l);
      }), oS = $i(function(n, i, a, l) {
        Mr(i, xt(i), n, l);
      }), sS = rn(ef);
      function aS(n, i) {
        var a = xi(n);
        return i == null ? a : ih(a, i);
      }
      var uS = Ne(function(n, i) {
        n = Ye(n);
        var a = -1, l = i.length, h = l > 2 ? i[2] : r;
        for (h && jt(i[0], i[1], h) && (l = 1); ++a < l; )
          for (var v = i[a], w = Qt(v), S = -1, T = w.length; ++S < T; ) {
            var B = w[S], U = n[B];
            (U === r || $r(U, Oi[B]) && !Ge.call(n, B)) && (n[B] = v[B]);
          }
        return n;
      }), fS = Ne(function(n) {
        return n.push(r, jh), nr($d, r, n);
      });
      function lS(n, i) {
        return Bp(n, ye(i, 3), Lr);
      }
      function cS(n, i) {
        return Bp(n, ye(i, 3), rf);
      }
      function pS(n, i) {
        return n == null ? n : tf(n, ye(i, 3), Qt);
      }
      function hS(n, i) {
        return n == null ? n : fh(n, ye(i, 3), Qt);
      }
      function dS(n, i) {
        return n && Lr(n, ye(i, 3));
      }
      function gS(n, i) {
        return n && rf(n, ye(i, 3));
      }
      function vS(n) {
        return n == null ? [] : js(n, xt(n));
      }
      function yS(n) {
        return n == null ? [] : js(n, Qt(n));
      }
      function Mf(n, i, a) {
        var l = n == null ? r : Jn(n, i);
        return l === r ? a : l;
      }
      function _S(n, i) {
        return n != null && Kh(n, i, H1);
      }
      function Rf(n, i) {
        return n != null && Kh(n, i, W1);
      }
      var mS = Vh(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = Ns.call(i)), n[i] = a;
      }, Vf(Zt)), bS = Vh(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = Ns.call(i)), Ge.call(n, i) ? n[i].push(a) : n[i] = [a];
      }, ye), wS = Ne(Eo);
      function xt(n) {
        return Xt(n) ? rh(n) : af(n);
      }
      function Qt(n) {
        return Xt(n) ? rh(n, !0) : Q1(n);
      }
      function ES(n, i) {
        var a = {};
        return i = ye(i, 3), Lr(n, function(l, h, v) {
          en(a, i(l, h, v), l);
        }), a;
      }
      function OS(n, i) {
        var a = {};
        return i = ye(i, 3), Lr(n, function(l, h, v) {
          en(a, h, i(l, h, v));
        }), a;
      }
      var SS = $i(function(n, i, a) {
        ks(n, i, a);
      }), $d = $i(function(n, i, a, l) {
        ks(n, i, a, l);
      }), AS = rn(function(n, i) {
        var a = {};
        if (n == null)
          return a;
        var l = !1;
        i = ot(i, function(v) {
          return v = Tn(v, n), l || (l = v.length > 1), v;
        }), Mr(n, wf(n), a), l && (a = br(a, _ | m | A, mw));
        for (var h = i.length; h--; )
          hf(a, i[h]);
        return a;
      });
      function xS(n, i) {
        return Td(n, oa(ye(i)));
      }
      var $S = rn(function(n, i) {
        return n == null ? {} : ew(n, i);
      });
      function Td(n, i) {
        if (n == null)
          return {};
        var a = ot(wf(n), function(l) {
          return [l];
        });
        return i = ye(i), mh(n, a, function(l, h) {
          return i(l, h[0]);
        });
      }
      function TS(n, i, a) {
        i = Tn(i, n);
        var l = -1, h = i.length;
        for (h || (h = 1, n = r); ++l < h; ) {
          var v = n == null ? r : n[Rr(i[l])];
          v === r && (l = h, v = a), n = on(v) ? v.call(n) : v;
        }
        return n;
      }
      function CS(n, i, a) {
        return n == null ? n : So(n, i, a);
      }
      function NS(n, i, a, l) {
        return l = typeof l == "function" ? l : r, n == null ? n : So(n, i, a, l);
      }
      var Cd = Hh(xt), Nd = Hh(Qt);
      function IS(n, i, a) {
        var l = Se(n), h = l || Nn(n) || Ni(n);
        if (i = ye(i, 4), a == null) {
          var v = n && n.constructor;
          h ? a = l ? new v() : [] : at(n) ? a = on(v) ? xi(Ps(n)) : {} : a = {};
        }
        return (h ? yr : Lr)(n, function(w, S, T) {
          return i(a, w, S, T);
        }), a;
      }
      function DS(n, i) {
        return n == null ? !0 : hf(n, i);
      }
      function PS(n, i, a) {
        return n == null ? n : Sh(n, i, vf(a));
      }
      function LS(n, i, a, l) {
        return l = typeof l == "function" ? l : r, n == null ? n : Sh(n, i, vf(a), l);
      }
      function Ii(n) {
        return n == null ? [] : qu(n, xt(n));
      }
      function MS(n) {
        return n == null ? [] : qu(n, Qt(n));
      }
      function RS(n, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = Or(a), a = a === a ? a : 0), i !== r && (i = Or(i), i = i === i ? i : 0), Yn(Or(n), i, a);
      }
      function FS(n, i, a) {
        return i = sn(i), a === r ? (a = i, i = 0) : a = sn(a), n = Or(n), j1(n, i, a);
      }
      function VS(n, i, a) {
        if (a && typeof a != "boolean" && jt(n, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof n == "boolean" && (a = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = sn(n), i === r ? (i = n, n = 0) : i = sn(i)), n > i) {
          var l = n;
          n = i, i = l;
        }
        if (a || n % 1 || i % 1) {
          var h = eh();
          return Ft(n + h * (i - n + v0("1e-" + ((h + "").length - 1))), i);
        }
        return lf(n, i);
      }
      var BS = Ti(function(n, i, a) {
        return i = i.toLowerCase(), n + (a ? Id(i) : i);
      });
      function Id(n) {
        return Ff(He(n).toLowerCase());
      }
      function Dd(n) {
        return n = He(n), n && n.replace(Hb, C0).replace(s0, "");
      }
      function US(n, i, a) {
        n = He(n), i = or(i);
        var l = n.length;
        a = a === r ? l : Yn($e(a), 0, l);
        var h = a;
        return a -= i.length, a >= 0 && n.slice(a, h) == i;
      }
      function HS(n) {
        return n = He(n), n && wb.test(n) ? n.replace(fp, N0) : n;
      }
      function WS(n) {
        return n = He(n), n && $b.test(n) ? n.replace(Iu, "\\$&") : n;
      }
      var jS = Ti(function(n, i, a) {
        return n + (a ? "-" : "") + i.toLowerCase();
      }), kS = Ti(function(n, i, a) {
        return n + (a ? " " : "") + i.toLowerCase();
      }), GS = Mh("toLowerCase");
      function KS(n, i, a) {
        n = He(n), i = $e(i);
        var l = i ? wi(n) : 0;
        if (!i || l >= i)
          return n;
        var h = (i - l) / 2;
        return Js(Fs(h), a) + n + Js(Rs(h), a);
      }
      function qS(n, i, a) {
        n = He(n), i = $e(i);
        var l = i ? wi(n) : 0;
        return i && l < i ? n + Js(i - l, a) : n;
      }
      function zS(n, i, a) {
        n = He(n), i = $e(i);
        var l = i ? wi(n) : 0;
        return i && l < i ? Js(i - l, a) + n : n;
      }
      function YS(n, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), r1(He(n).replace(Du, ""), i || 0);
      }
      function JS(n, i, a) {
        return (a ? jt(n, i, a) : i === r) ? i = 1 : i = $e(i), cf(He(n), i);
      }
      function XS() {
        var n = arguments, i = He(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var QS = Ti(function(n, i, a) {
        return n + (a ? "_" : "") + i.toLowerCase();
      });
      function ZS(n, i, a) {
        return a && typeof a != "number" && jt(n, i, a) && (i = a = r), a = a === r ? oe : a >>> 0, a ? (n = He(n), n && (typeof i == "string" || i != null && !Lf(i)) && (i = or(i), !i && bi(n)) ? Cn(Ar(n), 0, a) : n.split(i, a)) : [];
      }
      var eA = Ti(function(n, i, a) {
        return n + (a ? " " : "") + Ff(i);
      });
      function tA(n, i, a) {
        return n = He(n), a = a == null ? 0 : Yn($e(a), 0, n.length), i = or(i), n.slice(a, a + i.length) == i;
      }
      function rA(n, i, a) {
        var l = d.templateSettings;
        a && jt(n, i, a) && (i = r), n = He(n), i = ua({}, i, l, Wh);
        var h = ua({}, i.imports, l.imports, Wh), v = xt(h), w = qu(h, v), S, T, B = 0, U = i.interpolate || ws, j = "__p += '", Z = Yu(
          (i.escape || ws).source + "|" + U.source + "|" + (U === lp ? Mb : ws).source + "|" + (i.evaluate || ws).source + "|$",
          "g"
        ), ue = "//# sourceURL=" + (Ge.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++c0 + "]") + `
`;
        n.replace(Z, function(me, De, Me, ar, kt, ur) {
          return Me || (Me = ar), j += n.slice(B, ur).replace(Wb, I0), De && (S = !0, j += `' +
__e(` + De + `) +
'`), kt && (T = !0, j += `';
` + kt + `;
__p += '`), Me && (j += `' +
((__t = (` + Me + `)) == null ? '' : __t) +
'`), B = ur + me.length, me;
        }), j += `';
`;
        var _e = Ge.call(i, "variable") && i.variable;
        if (!_e)
          j = `with (obj) {
` + j + `
}
`;
        else if (Pb.test(_e))
          throw new we(c);
        j = (T ? j.replace(gr, "") : j).replace(bs, "$1").replace(mb, "$1;"), j = "function(" + (_e || "obj") + `) {
` + (_e ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (S ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + j + `return __p
}`;
        var Ce = Ld(function() {
          return Ue(v, ue + "return " + j).apply(r, w);
        });
        if (Ce.source = j, Pf(Ce))
          throw Ce;
        return Ce;
      }
      function nA(n) {
        return He(n).toLowerCase();
      }
      function iA(n) {
        return He(n).toUpperCase();
      }
      function oA(n, i, a) {
        if (n = He(n), n && (a || i === r))
          return jp(n);
        if (!n || !(i = or(i)))
          return n;
        var l = Ar(n), h = Ar(i), v = kp(l, h), w = Gp(l, h) + 1;
        return Cn(l, v, w).join("");
      }
      function sA(n, i, a) {
        if (n = He(n), n && (a || i === r))
          return n.slice(0, qp(n) + 1);
        if (!n || !(i = or(i)))
          return n;
        var l = Ar(n), h = Gp(l, Ar(i)) + 1;
        return Cn(l, 0, h).join("");
      }
      function aA(n, i, a) {
        if (n = He(n), n && (a || i === r))
          return n.replace(Du, "");
        if (!n || !(i = or(i)))
          return n;
        var l = Ar(n), h = kp(l, Ar(i));
        return Cn(l, h).join("");
      }
      function uA(n, i) {
        var a = Ae, l = ke;
        if (at(i)) {
          var h = "separator" in i ? i.separator : h;
          a = "length" in i ? $e(i.length) : a, l = "omission" in i ? or(i.omission) : l;
        }
        n = He(n);
        var v = n.length;
        if (bi(n)) {
          var w = Ar(n);
          v = w.length;
        }
        if (a >= v)
          return n;
        var S = a - wi(l);
        if (S < 1)
          return l;
        var T = w ? Cn(w, 0, S).join("") : n.slice(0, S);
        if (h === r)
          return T + l;
        if (w && (S += T.length - S), Lf(h)) {
          if (n.slice(S).search(h)) {
            var B, U = T;
            for (h.global || (h = Yu(h.source, He(cp.exec(h)) + "g")), h.lastIndex = 0; B = h.exec(U); )
              var j = B.index;
            T = T.slice(0, j === r ? S : j);
          }
        } else if (n.indexOf(or(h), S) != S) {
          var Z = T.lastIndexOf(h);
          Z > -1 && (T = T.slice(0, Z));
        }
        return T + l;
      }
      function fA(n) {
        return n = He(n), n && bb.test(n) ? n.replace(up, V0) : n;
      }
      var lA = Ti(function(n, i, a) {
        return n + (a ? " " : "") + i.toUpperCase();
      }), Ff = Mh("toUpperCase");
      function Pd(n, i, a) {
        return n = He(n), i = a ? r : i, i === r ? P0(n) ? H0(n) : S0(n) : n.match(i) || [];
      }
      var Ld = Ne(function(n, i) {
        try {
          return nr(n, r, i);
        } catch (a) {
          return Pf(a) ? a : new we(a);
        }
      }), cA = rn(function(n, i) {
        return yr(i, function(a) {
          a = Rr(a), en(n, a, If(n[a], n));
        }), n;
      });
      function pA(n) {
        var i = n == null ? 0 : n.length, a = ye();
        return n = i ? ot(n, function(l) {
          if (typeof l[1] != "function")
            throw new _r(f);
          return [a(l[0]), l[1]];
        }) : [], Ne(function(l) {
          for (var h = -1; ++h < i; ) {
            var v = n[h];
            if (nr(v[0], this, l))
              return nr(v[1], this, l);
          }
        });
      }
      function hA(n) {
        return V1(br(n, _));
      }
      function Vf(n) {
        return function() {
          return n;
        };
      }
      function dA(n, i) {
        return n == null || n !== n ? i : n;
      }
      var gA = Fh(), vA = Fh(!0);
      function Zt(n) {
        return n;
      }
      function Bf(n) {
        return hh(typeof n == "function" ? n : br(n, _));
      }
      function yA(n) {
        return gh(br(n, _));
      }
      function _A(n, i) {
        return vh(n, br(i, _));
      }
      var mA = Ne(function(n, i) {
        return function(a) {
          return Eo(a, n, i);
        };
      }), bA = Ne(function(n, i) {
        return function(a) {
          return Eo(n, a, i);
        };
      });
      function Uf(n, i, a) {
        var l = xt(i), h = js(i, l);
        a == null && !(at(i) && (h.length || !l.length)) && (a = i, i = n, n = this, h = js(i, xt(i)));
        var v = !(at(a) && "chain" in a) || !!a.chain, w = on(n);
        return yr(h, function(S) {
          var T = i[S];
          n[S] = T, w && (n.prototype[S] = function() {
            var B = this.__chain__;
            if (v || B) {
              var U = n(this.__wrapped__), j = U.__actions__ = Jt(this.__actions__);
              return j.push({ func: T, args: arguments, thisArg: n }), U.__chain__ = B, U;
            }
            return T.apply(n, On([this.value()], arguments));
          });
        }), n;
      }
      function wA() {
        return Lt._ === this && (Lt._ = q0), this;
      }
      function Hf() {
      }
      function EA(n) {
        return n = $e(n), Ne(function(i) {
          return yh(i, n);
        });
      }
      var OA = _f(ot), SA = _f(Vp), AA = _f(Wu);
      function Md(n) {
        return Af(n) ? ju(Rr(n)) : tw(n);
      }
      function xA(n) {
        return function(i) {
          return n == null ? r : Jn(n, i);
        };
      }
      var $A = Bh(), TA = Bh(!0);
      function Wf() {
        return [];
      }
      function jf() {
        return !1;
      }
      function CA() {
        return {};
      }
      function NA() {
        return "";
      }
      function IA() {
        return !0;
      }
      function DA(n, i) {
        if (n = $e(n), n < 1 || n > ce)
          return [];
        var a = oe, l = Ft(n, oe);
        i = ye(i), n -= oe;
        for (var h = Ku(l, i); ++a < n; )
          i(a);
        return h;
      }
      function PA(n) {
        return Se(n) ? ot(n, Rr) : sr(n) ? [n] : Jt(td(He(n)));
      }
      function LA(n) {
        var i = ++G0;
        return He(n) + i;
      }
      var MA = Ys(function(n, i) {
        return n + i;
      }, 0), RA = mf("ceil"), FA = Ys(function(n, i) {
        return n / i;
      }, 1), VA = mf("floor");
      function BA(n) {
        return n && n.length ? Ws(n, Zt, nf) : r;
      }
      function UA(n, i) {
        return n && n.length ? Ws(n, ye(i, 2), nf) : r;
      }
      function HA(n) {
        return Hp(n, Zt);
      }
      function WA(n, i) {
        return Hp(n, ye(i, 2));
      }
      function jA(n) {
        return n && n.length ? Ws(n, Zt, uf) : r;
      }
      function kA(n, i) {
        return n && n.length ? Ws(n, ye(i, 2), uf) : r;
      }
      var GA = Ys(function(n, i) {
        return n * i;
      }, 1), KA = mf("round"), qA = Ys(function(n, i) {
        return n - i;
      }, 0);
      function zA(n) {
        return n && n.length ? Gu(n, Zt) : 0;
      }
      function YA(n, i) {
        return n && n.length ? Gu(n, ye(i, 2)) : 0;
      }
      return d.after = yO, d.ary = pd, d.assign = iS, d.assignIn = xd, d.assignInWith = ua, d.assignWith = oS, d.at = sS, d.before = hd, d.bind = If, d.bindAll = cA, d.bindKey = dd, d.castArray = CO, d.chain = fd, d.chunk = Vw, d.compact = Bw, d.concat = Uw, d.cond = pA, d.conforms = hA, d.constant = Vf, d.countBy = zE, d.create = aS, d.curry = gd, d.curryRight = vd, d.debounce = yd, d.defaults = uS, d.defaultsDeep = fS, d.defer = _O, d.delay = mO, d.difference = Hw, d.differenceBy = Ww, d.differenceWith = jw, d.drop = kw, d.dropRight = Gw, d.dropRightWhile = Kw, d.dropWhile = qw, d.fill = zw, d.filter = JE, d.flatMap = ZE, d.flatMapDeep = eO, d.flatMapDepth = tO, d.flatten = od, d.flattenDeep = Yw, d.flattenDepth = Jw, d.flip = bO, d.flow = gA, d.flowRight = vA, d.fromPairs = Xw, d.functions = vS, d.functionsIn = yS, d.groupBy = rO, d.initial = Zw, d.intersection = eE, d.intersectionBy = tE, d.intersectionWith = rE, d.invert = mS, d.invertBy = bS, d.invokeMap = iO, d.iteratee = Bf, d.keyBy = oO, d.keys = xt, d.keysIn = Qt, d.map = ra, d.mapKeys = ES, d.mapValues = OS, d.matches = yA, d.matchesProperty = _A, d.memoize = ia, d.merge = SS, d.mergeWith = $d, d.method = mA, d.methodOf = bA, d.mixin = Uf, d.negate = oa, d.nthArg = EA, d.omit = AS, d.omitBy = xS, d.once = wO, d.orderBy = sO, d.over = OA, d.overArgs = EO, d.overEvery = SA, d.overSome = AA, d.partial = Df, d.partialRight = _d, d.partition = aO, d.pick = $S, d.pickBy = Td, d.property = Md, d.propertyOf = xA, d.pull = sE, d.pullAll = ad, d.pullAllBy = aE, d.pullAllWith = uE, d.pullAt = fE, d.range = $A, d.rangeRight = TA, d.rearg = OO, d.reject = lO, d.remove = lE, d.rest = SO, d.reverse = Cf, d.sampleSize = pO, d.set = CS, d.setWith = NS, d.shuffle = hO, d.slice = cE, d.sortBy = vO, d.sortedUniq = _E, d.sortedUniqBy = mE, d.split = ZS, d.spread = AO, d.tail = bE, d.take = wE, d.takeRight = EE, d.takeRightWhile = OE, d.takeWhile = SE, d.tap = BE, d.throttle = xO, d.thru = ta, d.toArray = Od, d.toPairs = Cd, d.toPairsIn = Nd, d.toPath = PA, d.toPlainObject = Ad, d.transform = IS, d.unary = $O, d.union = AE, d.unionBy = xE, d.unionWith = $E, d.uniq = TE, d.uniqBy = CE, d.uniqWith = NE, d.unset = DS, d.unzip = Nf, d.unzipWith = ud, d.update = PS, d.updateWith = LS, d.values = Ii, d.valuesIn = MS, d.without = IE, d.words = Pd, d.wrap = TO, d.xor = DE, d.xorBy = PE, d.xorWith = LE, d.zip = ME, d.zipObject = RE, d.zipObjectDeep = FE, d.zipWith = VE, d.entries = Cd, d.entriesIn = Nd, d.extend = xd, d.extendWith = ua, Uf(d, d), d.add = MA, d.attempt = Ld, d.camelCase = BS, d.capitalize = Id, d.ceil = RA, d.clamp = RS, d.clone = NO, d.cloneDeep = DO, d.cloneDeepWith = PO, d.cloneWith = IO, d.conformsTo = LO, d.deburr = Dd, d.defaultTo = dA, d.divide = FA, d.endsWith = US, d.eq = $r, d.escape = HS, d.escapeRegExp = WS, d.every = YE, d.find = XE, d.findIndex = nd, d.findKey = lS, d.findLast = QE, d.findLastIndex = id, d.findLastKey = cS, d.floor = VA, d.forEach = ld, d.forEachRight = cd, d.forIn = pS, d.forInRight = hS, d.forOwn = dS, d.forOwnRight = gS, d.get = Mf, d.gt = MO, d.gte = RO, d.has = _S, d.hasIn = Rf, d.head = sd, d.identity = Zt, d.includes = nO, d.indexOf = Qw, d.inRange = FS, d.invoke = wS, d.isArguments = Zn, d.isArray = Se, d.isArrayBuffer = FO, d.isArrayLike = Xt, d.isArrayLikeObject = ht, d.isBoolean = VO, d.isBuffer = Nn, d.isDate = BO, d.isElement = UO, d.isEmpty = HO, d.isEqual = WO, d.isEqualWith = jO, d.isError = Pf, d.isFinite = kO, d.isFunction = on, d.isInteger = md, d.isLength = sa, d.isMap = bd, d.isMatch = GO, d.isMatchWith = KO, d.isNaN = qO, d.isNative = zO, d.isNil = JO, d.isNull = YO, d.isNumber = wd, d.isObject = at, d.isObjectLike = ft, d.isPlainObject = To, d.isRegExp = Lf, d.isSafeInteger = XO, d.isSet = Ed, d.isString = aa, d.isSymbol = sr, d.isTypedArray = Ni, d.isUndefined = QO, d.isWeakMap = ZO, d.isWeakSet = eS, d.join = nE, d.kebabCase = jS, d.last = Er, d.lastIndexOf = iE, d.lowerCase = kS, d.lowerFirst = GS, d.lt = tS, d.lte = rS, d.max = BA, d.maxBy = UA, d.mean = HA, d.meanBy = WA, d.min = jA, d.minBy = kA, d.stubArray = Wf, d.stubFalse = jf, d.stubObject = CA, d.stubString = NA, d.stubTrue = IA, d.multiply = GA, d.nth = oE, d.noConflict = wA, d.noop = Hf, d.now = na, d.pad = KS, d.padEnd = qS, d.padStart = zS, d.parseInt = YS, d.random = VS, d.reduce = uO, d.reduceRight = fO, d.repeat = JS, d.replace = XS, d.result = TS, d.round = KA, d.runInContext = x, d.sample = cO, d.size = dO, d.snakeCase = QS, d.some = gO, d.sortedIndex = pE, d.sortedIndexBy = hE, d.sortedIndexOf = dE, d.sortedLastIndex = gE, d.sortedLastIndexBy = vE, d.sortedLastIndexOf = yE, d.startCase = eA, d.startsWith = tA, d.subtract = qA, d.sum = zA, d.sumBy = YA, d.template = rA, d.times = DA, d.toFinite = sn, d.toInteger = $e, d.toLength = Sd, d.toLower = nA, d.toNumber = Or, d.toSafeInteger = nS, d.toString = He, d.toUpper = iA, d.trim = oA, d.trimEnd = sA, d.trimStart = aA, d.truncate = uA, d.unescape = fA, d.uniqueId = LA, d.upperCase = lA, d.upperFirst = Ff, d.each = ld, d.eachRight = cd, d.first = sd, Uf(d, function() {
        var n = {};
        return Lr(d, function(i, a) {
          Ge.call(d.prototype, a) || (n[a] = i);
        }), n;
      }(), { chain: !1 }), d.VERSION = o, yr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        d[n].placeholder = d;
      }), yr(["drop", "take"], function(n, i) {
        Pe.prototype[n] = function(a) {
          a = a === r ? 1 : wt($e(a), 0);
          var l = this.__filtered__ && !i ? new Pe(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ft(a, l.__takeCount__) : l.__views__.push({
            size: Ft(a, oe),
            type: n + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, Pe.prototype[n + "Right"] = function(a) {
          return this.reverse()[n](a).reverse();
        };
      }), yr(["filter", "map", "takeWhile"], function(n, i) {
        var a = i + 1, l = a == de || a == ne;
        Pe.prototype[n] = function(h) {
          var v = this.clone();
          return v.__iteratees__.push({
            iteratee: ye(h, 3),
            type: a
          }), v.__filtered__ = v.__filtered__ || l, v;
        };
      }), yr(["head", "last"], function(n, i) {
        var a = "take" + (i ? "Right" : "");
        Pe.prototype[n] = function() {
          return this[a](1).value()[0];
        };
      }), yr(["initial", "tail"], function(n, i) {
        var a = "drop" + (i ? "" : "Right");
        Pe.prototype[n] = function() {
          return this.__filtered__ ? new Pe(this) : this[a](1);
        };
      }), Pe.prototype.compact = function() {
        return this.filter(Zt);
      }, Pe.prototype.find = function(n) {
        return this.filter(n).head();
      }, Pe.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Pe.prototype.invokeMap = Ne(function(n, i) {
        return typeof n == "function" ? new Pe(this) : this.map(function(a) {
          return Eo(a, n, i);
        });
      }), Pe.prototype.reject = function(n) {
        return this.filter(oa(ye(n)));
      }, Pe.prototype.slice = function(n, i) {
        n = $e(n);
        var a = this;
        return a.__filtered__ && (n > 0 || i < 0) ? new Pe(a) : (n < 0 ? a = a.takeRight(-n) : n && (a = a.drop(n)), i !== r && (i = $e(i), a = i < 0 ? a.dropRight(-i) : a.take(i - n)), a);
      }, Pe.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Pe.prototype.toArray = function() {
        return this.take(oe);
      }, Lr(Pe.prototype, function(n, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), l = /^(?:head|last)$/.test(i), h = d[l ? "take" + (i == "last" ? "Right" : "") : i], v = l || /^find/.test(i);
        h && (d.prototype[i] = function() {
          var w = this.__wrapped__, S = l ? [1] : arguments, T = w instanceof Pe, B = S[0], U = T || Se(w), j = function(De) {
            var Me = h.apply(d, On([De], S));
            return l && Z ? Me[0] : Me;
          };
          U && a && typeof B == "function" && B.length != 1 && (T = U = !1);
          var Z = this.__chain__, ue = !!this.__actions__.length, _e = v && !Z, Ce = T && !ue;
          if (!v && U) {
            w = Ce ? w : new Pe(this);
            var me = n.apply(w, S);
            return me.__actions__.push({ func: ta, args: [j], thisArg: r }), new mr(me, Z);
          }
          return _e && Ce ? n.apply(this, S) : (me = this.thru(j), _e ? l ? me.value()[0] : me.value() : me);
        });
      }), yr(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = $s[n], a = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(n);
        d.prototype[n] = function() {
          var h = arguments;
          if (l && !this.__chain__) {
            var v = this.value();
            return i.apply(Se(v) ? v : [], h);
          }
          return this[a](function(w) {
            return i.apply(Se(w) ? w : [], h);
          });
        };
      }), Lr(Pe.prototype, function(n, i) {
        var a = d[i];
        if (a) {
          var l = a.name + "";
          Ge.call(Ai, l) || (Ai[l] = []), Ai[l].push({ name: i, func: a });
        }
      }), Ai[zs(r, R).name] = [{
        name: "wrapper",
        func: r
      }], Pe.prototype.clone = f1, Pe.prototype.reverse = l1, Pe.prototype.value = c1, d.prototype.at = UE, d.prototype.chain = HE, d.prototype.commit = WE, d.prototype.next = jE, d.prototype.plant = GE, d.prototype.reverse = KE, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = qE, d.prototype.first = d.prototype.head, go && (d.prototype[go] = kE), d;
    }, Ei = W0();
    Gn ? ((Gn.exports = Ei)._ = Ei, Vu._ = Ei) : Lt._ = Ei;
  }).call(Ie);
})(Xa, Xa.exports);
var Cg = Xa.exports;
function BC() {
  return Ic().router;
}
function Ic() {
  return window.CiderApp;
}
function UC(e) {
  const t = () => e;
  function r(f) {
    return `${t()?.ce_prefix ?? e.identifier}-${f}`;
  }
  function o(f) {
    const c = { ...f }, p = Ic().config.getRef(), { identifier: g } = t();
    p.plugins || (p.plugins = {}), p.plugins[g] || (p.plugins[g] = {});
    const y = p.plugins[g];
    p.plugins[g] = Cg.merge(c, y);
    const _ = Oy(Cg.clone(p.plugins[g]));
    return Wo(() => _, (m) => {
      p.plugins[g] = m;
    }, {
      deep: !0
    }), _;
  }
  async function s(f) {
    const c = r(f.name);
    return await BC().push(`/ugc/plugins/ce/${c}`);
  }
  return {
    customElementName: r,
    goToPage: s,
    useCPlugin: t,
    setupConfig: o,
    plugin: e
  };
}
__PLUGINSYS__.ExternalMessages;
const HC = { class: "q-px-lg plugin-base" }, WC = { key: 0 }, jC = { key: 1 }, kC = { key: 2 }, GC = { key: 3 }, KC = /* @__PURE__ */ Fy({
  __name: "PluginSettings",
  setup(e) {
    const t = Dn();
    return (r, o) => (Ui(), Do("div", HC, [
      $t("div", null, [
        $t("label", null, [
          No($t("input", {
            type: "checkbox",
            "onUpdate:modelValue": o[0] || (o[0] = (s) => _t(t).frozen = s)
          }, null, 512), [
            [tC, _t(t).frozen]
          ]),
          o[5] || (o[5] = Hi(" Freeze Colors "))
        ])
      ]),
      _t(t).frozen ? ga("", !0) : (Ui(), Do("div", WC, [
        $t("label", null, [
          o[7] || (o[7] = Hi(" Algorithm: ")),
          No($t("select", {
            class: "c-select",
            "onUpdate:modelValue": o[1] || (o[1] = (s) => _t(t).algorithm = s)
          }, o[6] || (o[6] = [
            $t("option", { value: "musicKit" }, "MusicKit", -1),
            $t("option", { value: "internal" }, "Internal", -1)
          ]), 512), [
            [va, _t(t).algorithm]
          ])
        ])
      ])),
      !_t(t).frozen && _t(t).algorithm === "internal" ? (Ui(), Do("div", jC, [
        $t("label", null, [
          o[9] || (o[9] = Hi(" Color Scheme Matching Rule of Internal Algorithm: ")),
          No($t("select", {
            class: "c-select",
            "onUpdate:modelValue": o[2] || (o[2] = (s) => _t(t).internal_SchemeMatching = s)
          }, o[8] || (o[8] = [
            $t("option", { value: "generic" }, "Generic", -1),
            $t("option", { value: "matching" }, "Matching", -1),
            $t("option", { value: "inverted" }, "Inverted", -1)
          ]), 512), [
            [va, _t(t).internal_SchemeMatching]
          ])
        ])
      ])) : ga("", !0),
      !_t(t).frozen && _t(t).algorithm === "musicKit" ? (Ui(), Do("div", kC, [
        $t("label", null, [
          o[11] || (o[11] = Hi(" Key Color based on: ")),
          No($t("select", {
            class: "c-select",
            "onUpdate:modelValue": o[3] || (o[3] = (s) => _t(t).mkAlgo_keyColor = s)
          }, o[10] || (o[10] = [
            og('<option value="bgColor" data-v-ef148765>Background Color</option><option value="textColor1" data-v-ef148765>Text Color 1</option><option value="textColor2" data-v-ef148765>Text Color 2</option><option value="textColor3" data-v-ef148765>Text Color 3</option><option value="textColor4" data-v-ef148765>Text Color 4</option><option value="cider" data-v-ef148765>Cider Default</option>', 6)
          ]), 512), [
            [va, _t(t).mkAlgo_keyColor]
          ])
        ])
      ])) : ga("", !0),
      !_t(t).frozen && _t(t).algorithm === "musicKit" ? (Ui(), Do("div", GC, [
        $t("label", null, [
          o[13] || (o[13] = Hi(" Music Key Color based on: ")),
          No($t("select", {
            class: "c-select",
            "onUpdate:modelValue": o[4] || (o[4] = (s) => _t(t).mkAlgo_musicKeyColor = s)
          }, o[12] || (o[12] = [
            og('<option value="bgColor" data-v-ef148765>Background Color</option><option value="textColor1" data-v-ef148765>Text Color 1</option><option value="textColor2" data-v-ef148765>Text Color 2</option><option value="textColor3" data-v-ef148765>Text Color 3</option><option value="textColor4" data-v-ef148765>Text Color 4</option><option value="cider" data-v-ef148765>Cider Default</option>', 6)
          ]), 512), [
            [va, _t(t).mkAlgo_musicKeyColor]
          ])
        ])
      ])) : ga("", !0)
    ]));
  }
}), qC = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, s] of t)
    r[o] = s;
  return r;
}, zC = /* @__PURE__ */ qC(KC, [["__scopeId", "data-v-ef148765"]]);
var Wn = {}, rt = {}, Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.isBytes = T_;
Pr.number = Qa;
Pr.bool = $_;
Pr.bytes = Dc;
Pr.hash = C_;
Pr.exists = N_;
Pr.output = I_;
function Qa(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function $_(e) {
  if (typeof e != "boolean")
    throw new Error(`boolean expected, not ${e}`);
}
function T_(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Dc(e, ...t) {
  if (!T_(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function C_(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Qa(e.outputLen), Qa(e.blockLen);
}
function N_(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function I_(e, t) {
  Dc(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const YC = { number: Qa, bool: $_, bytes: Dc, hash: C_, exists: N_, output: I_ };
Pr.default = YC;
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.add5L = Ee.add5H = Ee.add4H = Ee.add4L = Ee.add3H = Ee.add3L = Ee.rotlBL = Ee.rotlBH = Ee.rotlSL = Ee.rotlSH = Ee.rotr32L = Ee.rotr32H = Ee.rotrBL = Ee.rotrBH = Ee.rotrSL = Ee.rotrSH = Ee.shrSL = Ee.shrSH = Ee.toBig = void 0;
Ee.fromBig = Pc;
Ee.split = D_;
Ee.add = K_;
const ya = /* @__PURE__ */ BigInt(2 ** 32 - 1), Dl = /* @__PURE__ */ BigInt(32);
function Pc(e, t = !1) {
  return t ? { h: Number(e & ya), l: Number(e >> Dl & ya) } : { h: Number(e >> Dl & ya) | 0, l: Number(e & ya) | 0 };
}
function D_(e, t = !1) {
  let r = new Uint32Array(e.length), o = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: u, l: f } = Pc(e[s], t);
    [r[s], o[s]] = [u, f];
  }
  return [r, o];
}
const P_ = (e, t) => BigInt(e >>> 0) << Dl | BigInt(t >>> 0);
Ee.toBig = P_;
const L_ = (e, t, r) => e >>> r;
Ee.shrSH = L_;
const M_ = (e, t, r) => e << 32 - r | t >>> r;
Ee.shrSL = M_;
const R_ = (e, t, r) => e >>> r | t << 32 - r;
Ee.rotrSH = R_;
const F_ = (e, t, r) => e << 32 - r | t >>> r;
Ee.rotrSL = F_;
const V_ = (e, t, r) => e << 64 - r | t >>> r - 32;
Ee.rotrBH = V_;
const B_ = (e, t, r) => e >>> r - 32 | t << 64 - r;
Ee.rotrBL = B_;
const U_ = (e, t) => t;
Ee.rotr32H = U_;
const H_ = (e, t) => e;
Ee.rotr32L = H_;
const W_ = (e, t, r) => e << r | t >>> 32 - r;
Ee.rotlSH = W_;
const j_ = (e, t, r) => t << r | e >>> 32 - r;
Ee.rotlSL = j_;
const k_ = (e, t, r) => t << r - 32 | e >>> 64 - r;
Ee.rotlBH = k_;
const G_ = (e, t, r) => e << r - 32 | t >>> 64 - r;
Ee.rotlBL = G_;
function K_(e, t, r, o) {
  const s = (t >>> 0) + (o >>> 0);
  return { h: e + r + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const q_ = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
Ee.add3L = q_;
const z_ = (e, t, r, o) => t + r + o + (e / 2 ** 32 | 0) | 0;
Ee.add3H = z_;
const Y_ = (e, t, r, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (o >>> 0);
Ee.add4L = Y_;
const J_ = (e, t, r, o, s) => t + r + o + s + (e / 2 ** 32 | 0) | 0;
Ee.add4H = J_;
const X_ = (e, t, r, o, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (o >>> 0) + (s >>> 0);
Ee.add5L = X_;
const Q_ = (e, t, r, o, s, u) => t + r + o + s + u + (e / 2 ** 32 | 0) | 0;
Ee.add5H = Q_;
const JC = {
  fromBig: Pc,
  split: D_,
  toBig: P_,
  shrSH: L_,
  shrSL: M_,
  rotrSH: R_,
  rotrSL: F_,
  rotrBH: V_,
  rotrBL: B_,
  rotr32H: U_,
  rotr32L: H_,
  rotlSH: W_,
  rotlSL: j_,
  rotlBH: k_,
  rotlBL: G_,
  add: K_,
  add3L: q_,
  add3H: z_,
  add4L: Y_,
  add4H: J_,
  add5H: Q_,
  add5L: X_
};
Ee.default = JC;
var Z_ = {}, bu = {};
Object.defineProperty(bu, "__esModule", { value: !0 });
bu.crypto = void 0;
bu.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Hash = e.nextTick = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = void 0, e.isBytes = o, e.byteSwap32 = y, e.bytesToHex = m, e.hexToBytes = $, e.asyncLoop = R, e.utf8ToBytes = L, e.toBytes = D, e.concatBytes = X, e.checkOpts = he, e.wrapConstructor = se, e.wrapConstructorWithOpts = fe, e.wrapXOFConstructorWithOpts = Ae, e.randomBytes = ke;
  const t = bu, r = Pr;
  function o(M) {
    return M instanceof Uint8Array || M != null && typeof M == "object" && M.constructor.name === "Uint8Array";
  }
  const s = (M) => new Uint8Array(M.buffer, M.byteOffset, M.byteLength);
  e.u8 = s;
  const u = (M) => new Uint32Array(M.buffer, M.byteOffset, Math.floor(M.byteLength / 4));
  e.u32 = u;
  const f = (M) => new DataView(M.buffer, M.byteOffset, M.byteLength);
  e.createView = f;
  const c = (M, Q) => M << 32 - Q | M >>> Q;
  e.rotr = c;
  const p = (M, Q) => M << Q | M >>> 32 - Q >>> 0;
  e.rotl = p, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const g = (M) => M << 24 & 4278190080 | M << 8 & 16711680 | M >>> 8 & 65280 | M >>> 24 & 255;
  e.byteSwap = g, e.byteSwapIfBE = e.isLE ? (M) => M : (M) => (0, e.byteSwap)(M);
  function y(M) {
    for (let Q = 0; Q < M.length; Q++)
      M[Q] = (0, e.byteSwap)(M[Q]);
  }
  const _ = /* @__PURE__ */ Array.from({ length: 256 }, (M, Q) => Q.toString(16).padStart(2, "0"));
  function m(M) {
    (0, r.bytes)(M);
    let Q = "";
    for (let de = 0; de < M.length; de++)
      Q += _[M[de]];
    return Q;
  }
  const A = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function O(M) {
    if (M >= A._0 && M <= A._9)
      return M - A._0;
    if (M >= A._A && M <= A._F)
      return M - (A._A - 10);
    if (M >= A._a && M <= A._f)
      return M - (A._a - 10);
  }
  function $(M) {
    if (typeof M != "string")
      throw new Error("hex string expected, got " + typeof M);
    const Q = M.length, de = Q / 2;
    if (Q % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + Q);
    const ae = new Uint8Array(de);
    for (let ne = 0, te = 0; ne < de; ne++, te += 2) {
      const ce = O(M.charCodeAt(te)), Ze = O(M.charCodeAt(te + 1));
      if (ce === void 0 || Ze === void 0) {
        const re = M[te] + M[te + 1];
        throw new Error('hex string expected, got non-hex character "' + re + '" at index ' + te);
      }
      ae[ne] = ce * 16 + Ze;
    }
    return ae;
  }
  const N = async () => {
  };
  e.nextTick = N;
  async function R(M, Q, de) {
    let ae = Date.now();
    for (let ne = 0; ne < M; ne++) {
      de(ne);
      const te = Date.now() - ae;
      te >= 0 && te < Q || (await (0, e.nextTick)(), ae += te);
    }
  }
  function L(M) {
    if (typeof M != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof M}`);
    return new Uint8Array(new TextEncoder().encode(M));
  }
  function D(M) {
    return typeof M == "string" && (M = L(M)), (0, r.bytes)(M), M;
  }
  function X(...M) {
    let Q = 0;
    for (let ae = 0; ae < M.length; ae++) {
      const ne = M[ae];
      (0, r.bytes)(ne), Q += ne.length;
    }
    const de = new Uint8Array(Q);
    for (let ae = 0, ne = 0; ae < M.length; ae++) {
      const te = M[ae];
      de.set(te, ne), ne += te.length;
    }
    return de;
  }
  class V {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = V;
  const ee = {}.toString;
  function he(M, Q) {
    if (Q !== void 0 && ee.call(Q) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(M, Q);
  }
  function se(M) {
    const Q = (ae) => M().update(D(ae)).digest(), de = M();
    return Q.outputLen = de.outputLen, Q.blockLen = de.blockLen, Q.create = () => M(), Q;
  }
  function fe(M) {
    const Q = (ae, ne) => M(ne).update(D(ae)).digest(), de = M({});
    return Q.outputLen = de.outputLen, Q.blockLen = de.blockLen, Q.create = (ae) => M(ae), Q;
  }
  function Ae(M) {
    const Q = (ae, ne) => M(ne).update(D(ae)).digest(), de = M({});
    return Q.outputLen = de.outputLen, Q.blockLen = de.blockLen, Q.create = (ae) => M(ae), Q;
  }
  function ke(M = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(M));
    if (t.crypto && typeof t.crypto.randomBytes == "function")
      return t.crypto.randomBytes(M);
    throw new Error("crypto.getRandomValues must be defined");
  }
})(Z_);
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.shake256 = rt.shake128 = rt.keccak_512 = rt.keccak_384 = rt.keccak_256 = rt.keccak_224 = rt.sha3_512 = rt.sha3_384 = rt.sha3_256 = rt.sha3_224 = rt.Keccak = void 0;
rt.keccakP = nm;
const Li = Pr, ts = Ee, gn = Z_, em = [], tm = [], rm = [], XC = /* @__PURE__ */ BigInt(0), Lo = /* @__PURE__ */ BigInt(1), QC = /* @__PURE__ */ BigInt(2), ZC = /* @__PURE__ */ BigInt(7), eN = /* @__PURE__ */ BigInt(256), tN = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Lo, r = 1, o = 0; e < 24; e++) {
  [r, o] = [o, (2 * r + 3 * o) % 5], em.push(2 * (5 * o + r)), tm.push((e + 1) * (e + 2) / 2 % 64);
  let s = XC;
  for (let u = 0; u < 7; u++)
    t = (t << Lo ^ (t >> ZC) * tN) % eN, t & QC && (s ^= Lo << (Lo << /* @__PURE__ */ BigInt(u)) - Lo);
  rm.push(s);
}
const [rN, nN] = /* @__PURE__ */ (0, ts.split)(rm, !0), Ng = (e, t, r) => r > 32 ? (0, ts.rotlBH)(e, t, r) : (0, ts.rotlSH)(e, t, r), Ig = (e, t, r) => r > 32 ? (0, ts.rotlBL)(e, t, r) : (0, ts.rotlSL)(e, t, r);
function nm(e, t = 24) {
  const r = new Uint32Array(10);
  for (let o = 24 - t; o < 24; o++) {
    for (let f = 0; f < 10; f++)
      r[f] = e[f] ^ e[f + 10] ^ e[f + 20] ^ e[f + 30] ^ e[f + 40];
    for (let f = 0; f < 10; f += 2) {
      const c = (f + 8) % 10, p = (f + 2) % 10, g = r[p], y = r[p + 1], _ = Ng(g, y, 1) ^ r[c], m = Ig(g, y, 1) ^ r[c + 1];
      for (let A = 0; A < 50; A += 10)
        e[f + A] ^= _, e[f + A + 1] ^= m;
    }
    let s = e[2], u = e[3];
    for (let f = 0; f < 24; f++) {
      const c = tm[f], p = Ng(s, u, c), g = Ig(s, u, c), y = em[f];
      s = e[y], u = e[y + 1], e[y] = p, e[y + 1] = g;
    }
    for (let f = 0; f < 50; f += 10) {
      for (let c = 0; c < 10; c++)
        r[c] = e[f + c];
      for (let c = 0; c < 10; c++)
        e[f + c] ^= ~r[(c + 2) % 10] & r[(c + 4) % 10];
    }
    e[0] ^= rN[o], e[1] ^= nN[o];
  }
  r.fill(0);
}
class cs extends gn.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, o, s = !1, u = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = o, this.enableXOF = s, this.rounds = u, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Li.number)(o), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, gn.u32)(this.state);
  }
  keccak() {
    gn.isLE || (0, gn.byteSwap32)(this.state32), nm(this.state32, this.rounds), gn.isLE || (0, gn.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, Li.exists)(this);
    const { blockLen: r, state: o } = this;
    t = (0, gn.toBytes)(t);
    const s = t.length;
    for (let u = 0; u < s; ) {
      const f = Math.min(r - this.pos, s - u);
      for (let c = 0; c < f; c++)
        o[this.pos++] ^= t[u++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: r, pos: o, blockLen: s } = this;
    t[o] ^= r, r & 128 && o === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    (0, Li.exists)(this, !1), (0, Li.bytes)(t), this.finish();
    const r = this.state, { blockLen: o } = this;
    for (let s = 0, u = t.length; s < u; ) {
      this.posOut >= o && this.keccak();
      const f = Math.min(o - this.posOut, u - s);
      t.set(r.subarray(this.posOut, this.posOut + f), s), this.posOut += f, s += f;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return (0, Li.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, Li.output)(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: o, outputLen: s, rounds: u, enableXOF: f } = this;
    return t || (t = new cs(r, o, s, f, u)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = u, t.suffix = o, t.outputLen = s, t.enableXOF = f, t.destroyed = this.destroyed, t;
  }
}
rt.Keccak = cs;
const jn = (e, t, r) => (0, gn.wrapConstructor)(() => new cs(t, e, r));
rt.sha3_224 = jn(6, 144, 224 / 8);
rt.sha3_256 = jn(6, 136, 256 / 8);
rt.sha3_384 = jn(6, 104, 384 / 8);
rt.sha3_512 = jn(6, 72, 512 / 8);
rt.keccak_224 = jn(1, 144, 224 / 8);
rt.keccak_256 = jn(1, 136, 256 / 8);
rt.keccak_384 = jn(1, 104, 384 / 8);
rt.keccak_512 = jn(1, 72, 512 / 8);
const im = (e, t, r) => (0, gn.wrapXOFConstructorWithOpts)((o = {}) => new cs(t, e, o.dkLen === void 0 ? r : o.dkLen, !0));
rt.shake128 = im(31, 168, 128 / 8);
rt.shake256 = im(31, 136, 256 / 8);
const { sha3_512: iN } = rt, om = 24, Go = 32, Pl = (e = 4, t = Math.random) => {
  let r = "";
  for (; r.length < e; )
    r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function sm(e) {
  let t = 8n, r = 0n;
  for (const o of e.values()) {
    const s = BigInt(o);
    r = (r << t) + s;
  }
  return r;
}
const am = (e = "") => sm(iN(e)).toString(36).slice(1), Dg = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), oN = (e) => Dg[Math.floor(e() * Dg.length)], um = ({
  globalObj: e = typeof Ie < "u" ? Ie : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), o = r.length ? r + Pl(Go, t) : Pl(Go, t);
  return am(o).substring(0, Go);
}, fm = (e) => () => e++, sN = 476782367, lm = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = fm(Math.floor(e() * sN)),
  length: r = om,
  fingerprint: o = um({ random: e })
} = {}) => function() {
  const u = oN(e), f = Date.now().toString(36), c = t().toString(36), p = Pl(r, e), g = `${f + p + c + o}`;
  return `${u + am(g).substring(1, r)}`;
}, aN = lm(), uN = (e, { minLength: t = 2, maxLength: r = Go } = {}) => {
  const o = e.length, s = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && o >= t && o <= r && s.test(e))
      return !0;
  } finally {
  }
  return !1;
};
Wn.getConstants = () => ({ defaultLength: om, bigLength: Go });
Wn.init = lm;
Wn.createId = aN;
Wn.bufToBigInt = sm;
Wn.createCounter = fm;
Wn.createFingerprint = um;
Wn.isCuid = uN;
const { createId: fN, init: rH, getConstants: nH, isCuid: iH } = Wn;
var lN = fN;
const Pg = {
  ce_prefix: lN(),
  identifier: "cidr.amaru8.adaptiveaccentseverywhere",
  name: "Adaptive Accents Everywhere",
  description: "Changes the accent color of the app based on the playing song's album cover.",
  version: "1.0.0",
  author: "amaru8",
  repo: "https://github.com/Amaru8/Cider-AdaptiveAccentsEverywhere",
  entry: {
    "plugin.js": {
      type: "main"
    }
  }
};
var _a = {}, io = {}, ps = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getColorIndex = e.getColorDiffStatus = e.hexDiff = e.rgbDiff = e.deltaE94 = e.rgbToCIELab = e.xyzToCIELab = e.rgbToXyz = e.hslToRgb = e.rgbToHsl = e.rgbToHex = e.hexToRgb = e.defer = e.RSHIFT = e.SIGBITS = e.DELTAE94_DIFF_STATUS = void 0, e.DELTAE94_DIFF_STATUS = {
    NA: 0,
    PERFECT: 1,
    CLOSE: 2,
    GOOD: 10,
    SIMILAR: 50
  }, e.SIGBITS = 5, e.RSHIFT = 8 - e.SIGBITS;
  function t() {
    var O, $, N = new Promise(function(R, L) {
      O = R, $ = L;
    });
    return { resolve: O, reject: $, promise: N };
  }
  e.defer = t;
  function r(O) {
    var $ = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(O);
    return $ === null ? null : [$[1], $[2], $[3]].map(function(N) {
      return parseInt(N, 16);
    });
  }
  e.hexToRgb = r;
  function o(O, $, N) {
    return "#" + ((1 << 24) + (O << 16) + ($ << 8) + N).toString(16).slice(1, 7);
  }
  e.rgbToHex = o;
  function s(O, $, N) {
    O /= 255, $ /= 255, N /= 255;
    var R = Math.max(O, $, N), L = Math.min(O, $, N), D, X, V = (R + L) / 2;
    if (R === L)
      D = X = 0;
    else {
      var ee = R - L;
      switch (X = V > 0.5 ? ee / (2 - R - L) : ee / (R + L), R) {
        case O:
          D = ($ - N) / ee + ($ < N ? 6 : 0);
          break;
        case $:
          D = (N - O) / ee + 2;
          break;
        case N:
          D = (O - $) / ee + 4;
          break;
      }
      D /= 6;
    }
    return [D, X, V];
  }
  e.rgbToHsl = s;
  function u(O, $, N) {
    var R, L, D;
    function X(he, se, fe) {
      return fe < 0 && (fe += 1), fe > 1 && (fe -= 1), fe < 1 / 6 ? he + (se - he) * 6 * fe : fe < 1 / 2 ? se : fe < 2 / 3 ? he + (se - he) * (2 / 3 - fe) * 6 : he;
    }
    if ($ === 0)
      R = L = D = N;
    else {
      var V = N < 0.5 ? N * (1 + $) : N + $ - N * $, ee = 2 * N - V;
      R = X(ee, V, O + 1 / 3), L = X(ee, V, O), D = X(ee, V, O - 1 / 3);
    }
    return [
      R * 255,
      L * 255,
      D * 255
    ];
  }
  e.hslToRgb = u;
  function f(O, $, N) {
    O /= 255, $ /= 255, N /= 255, O = O > 0.04045 ? Math.pow((O + 5e-3) / 1.055, 2.4) : O / 12.92, $ = $ > 0.04045 ? Math.pow(($ + 5e-3) / 1.055, 2.4) : $ / 12.92, N = N > 0.04045 ? Math.pow((N + 5e-3) / 1.055, 2.4) : N / 12.92, O *= 100, $ *= 100, N *= 100;
    var R = O * 0.4124 + $ * 0.3576 + N * 0.1805, L = O * 0.2126 + $ * 0.7152 + N * 0.0722, D = O * 0.0193 + $ * 0.1192 + N * 0.9505;
    return [R, L, D];
  }
  e.rgbToXyz = f;
  function c(O, $, N) {
    var R = 95.047, L = 100, D = 108.883;
    O /= R, $ /= L, N /= D, O = O > 8856e-6 ? Math.pow(O, 1 / 3) : 7.787 * O + 16 / 116, $ = $ > 8856e-6 ? Math.pow($, 1 / 3) : 7.787 * $ + 16 / 116, N = N > 8856e-6 ? Math.pow(N, 1 / 3) : 7.787 * N + 16 / 116;
    var X = 116 * $ - 16, V = 500 * (O - $), ee = 200 * ($ - N);
    return [X, V, ee];
  }
  e.xyzToCIELab = c;
  function p(O, $, N) {
    var R = f(O, $, N), L = R[0], D = R[1], X = R[2];
    return c(L, D, X);
  }
  e.rgbToCIELab = p;
  function g(O, $) {
    var N = 1, R = 1, L = 1, D = O[0], X = O[1], V = O[2], ee = $[0], he = $[1], se = $[2], fe = D - ee, Ae = X - he, ke = V - se, M = Math.sqrt(X * X + V * V), Q = Math.sqrt(he * he + se * se), de = ee - D, ae = Q - M, ne = Math.sqrt(fe * fe + Ae * Ae + ke * ke), te = Math.sqrt(ne) > Math.sqrt(Math.abs(de)) + Math.sqrt(Math.abs(ae)) ? Math.sqrt(ne * ne - de * de - ae * ae) : 0, ce = 1 + 0.045 * M, Ze = 1 + 0.015 * M;
    return de /= N, ae /= R * ce, te /= L * Ze, Math.sqrt(de * de + ae * ae + te * te);
  }
  e.deltaE94 = g;
  function y(O, $) {
    var N = p.apply(void 0, O), R = p.apply(void 0, $);
    return g(N, R);
  }
  e.rgbDiff = y;
  function _(O, $) {
    var N = r(O), R = r($);
    return y(N, R);
  }
  e.hexDiff = _;
  function m(O) {
    return O < e.DELTAE94_DIFF_STATUS.NA ? "N/A" : O <= e.DELTAE94_DIFF_STATUS.PERFECT ? "Perfect" : O <= e.DELTAE94_DIFF_STATUS.CLOSE ? "Close" : O <= e.DELTAE94_DIFF_STATUS.GOOD ? "Good" : O < e.DELTAE94_DIFF_STATUS.SIMILAR ? "Similar" : "Wrong";
  }
  e.getColorDiffStatus = m;
  function A(O, $, N) {
    return (O << 2 * e.SIGBITS) + ($ << e.SIGBITS) + N;
  }
  e.getColorIndex = A;
})(ps);
function cN(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, s = 0, u = []; ++r < o; ) {
    var f = e[r];
    t(f, r, e) && (u[s++] = f);
  }
  return u;
}
var cm = cN;
function pN(e) {
  return function(t, r, o) {
    for (var s = -1, u = Object(t), f = o(t), c = f.length; c--; ) {
      var p = f[e ? c : ++s];
      if (r(u[p], p, u) === !1)
        break;
    }
    return t;
  };
}
var hN = pN, dN = hN, gN = dN(), vN = gN;
function yN(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var _N = yN, mN = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, pm = mN, bN = pm, wN = typeof self == "object" && self && self.Object === Object && self, EN = bN || wN || Function("return this")(), Yr = EN, ON = Yr, SN = ON.Symbol, hs = SN, Lg = hs, hm = Object.prototype, AN = hm.hasOwnProperty, xN = hm.toString, Mo = Lg ? Lg.toStringTag : void 0;
function $N(e) {
  var t = AN.call(e, Mo), r = e[Mo];
  try {
    e[Mo] = void 0;
    var o = !0;
  } catch {
  }
  var s = xN.call(e);
  return o && (t ? e[Mo] = r : delete e[Mo]), s;
}
var TN = $N, CN = Object.prototype, NN = CN.toString;
function IN(e) {
  return NN.call(e);
}
var DN = IN, Mg = hs, PN = TN, LN = DN, MN = "[object Null]", RN = "[object Undefined]", Rg = Mg ? Mg.toStringTag : void 0;
function FN(e) {
  return e == null ? e === void 0 ? RN : MN : Rg && Rg in Object(e) ? PN(e) : LN(e);
}
var ds = FN;
function VN(e) {
  return e != null && typeof e == "object";
}
var di = VN, BN = ds, UN = di, HN = "[object Arguments]";
function WN(e) {
  return UN(e) && BN(e) == HN;
}
var jN = WN, Fg = jN, kN = di, dm = Object.prototype, GN = dm.hasOwnProperty, KN = dm.propertyIsEnumerable, qN = Fg(/* @__PURE__ */ function() {
  return arguments;
}()) ? Fg : function(e) {
  return kN(e) && GN.call(e, "callee") && !KN.call(e, "callee");
}, gm = qN, zN = Array.isArray, Jr = zN, Za = { exports: {} };
function YN() {
  return !1;
}
var JN = YN;
Za.exports;
(function(e, t) {
  var r = Yr, o = JN, s = t && !t.nodeType && t, u = s && !0 && e && !e.nodeType && e, f = u && u.exports === s, c = f ? r.Buffer : void 0, p = c ? c.isBuffer : void 0, g = p || o;
  e.exports = g;
})(Za, Za.exports);
var Lc = Za.exports, XN = 9007199254740991, QN = /^(?:0|[1-9]\d*)$/;
function ZN(e, t) {
  var r = typeof e;
  return t = t ?? XN, !!t && (r == "number" || r != "symbol" && QN.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Mc = ZN, eI = 9007199254740991;
function tI(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eI;
}
var Rc = tI, rI = ds, nI = Rc, iI = di, oI = "[object Arguments]", sI = "[object Array]", aI = "[object Boolean]", uI = "[object Date]", fI = "[object Error]", lI = "[object Function]", cI = "[object Map]", pI = "[object Number]", hI = "[object Object]", dI = "[object RegExp]", gI = "[object Set]", vI = "[object String]", yI = "[object WeakMap]", _I = "[object ArrayBuffer]", mI = "[object DataView]", bI = "[object Float32Array]", wI = "[object Float64Array]", EI = "[object Int8Array]", OI = "[object Int16Array]", SI = "[object Int32Array]", AI = "[object Uint8Array]", xI = "[object Uint8ClampedArray]", $I = "[object Uint16Array]", TI = "[object Uint32Array]", tt = {};
tt[bI] = tt[wI] = tt[EI] = tt[OI] = tt[SI] = tt[AI] = tt[xI] = tt[$I] = tt[TI] = !0;
tt[oI] = tt[sI] = tt[_I] = tt[aI] = tt[mI] = tt[uI] = tt[fI] = tt[lI] = tt[cI] = tt[pI] = tt[hI] = tt[dI] = tt[gI] = tt[vI] = tt[yI] = !1;
function CI(e) {
  return iI(e) && nI(e.length) && !!tt[rI(e)];
}
var NI = CI;
function II(e) {
  return function(t) {
    return e(t);
  };
}
var Fc = II, eu = { exports: {} };
eu.exports;
(function(e, t) {
  var r = pm, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, u = s && s.exports === o, f = u && r.process, c = function() {
    try {
      var p = s && s.require && s.require("util").types;
      return p || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(eu, eu.exports);
var Vc = eu.exports, DI = NI, PI = Fc, Vg = Vc, Bg = Vg && Vg.isTypedArray, LI = Bg ? PI(Bg) : DI, vm = LI, MI = _N, RI = gm, FI = Jr, VI = Lc, BI = Mc, UI = vm, HI = Object.prototype, WI = HI.hasOwnProperty;
function jI(e, t) {
  var r = FI(e), o = !r && RI(e), s = !r && !o && VI(e), u = !r && !o && !s && UI(e), f = r || o || s || u, c = f ? MI(e.length, String) : [], p = c.length;
  for (var g in e)
    (t || WI.call(e, g)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
    BI(g, p))) && c.push(g);
  return c;
}
var ym = jI, kI = Object.prototype;
function GI(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || kI;
  return e === r;
}
var Bc = GI;
function KI(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var _m = KI, qI = _m, zI = qI(Object.keys, Object), YI = zI, JI = Bc, XI = YI, QI = Object.prototype, ZI = QI.hasOwnProperty;
function eD(e) {
  if (!JI(e))
    return XI(e);
  var t = [];
  for (var r in Object(e))
    ZI.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var tD = eD;
function rD(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gi = rD, nD = ds, iD = gi, oD = "[object AsyncFunction]", sD = "[object Function]", aD = "[object GeneratorFunction]", uD = "[object Proxy]";
function fD(e) {
  if (!iD(e))
    return !1;
  var t = nD(e);
  return t == sD || t == aD || t == oD || t == uD;
}
var mm = fD, lD = mm, cD = Rc;
function pD(e) {
  return e != null && cD(e.length) && !lD(e);
}
var wu = pD, hD = ym, dD = tD, gD = wu;
function vD(e) {
  return gD(e) ? hD(e) : dD(e);
}
var gs = vD, yD = vN, _D = gs;
function mD(e, t) {
  return e && yD(e, t, _D);
}
var bD = mD, wD = wu;
function ED(e, t) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!wD(r))
      return e(r, o);
    for (var s = r.length, u = t ? s : -1, f = Object(r); (t ? u-- : ++u < s) && o(f[u], u, f) !== !1; )
      ;
    return r;
  };
}
var OD = ED, SD = bD, AD = OD, xD = AD(SD), $D = xD, TD = $D;
function CD(e, t) {
  var r = [];
  return TD(e, function(o, s, u) {
    t(o, s, u) && r.push(o);
  }), r;
}
var ND = CD;
function ID() {
  this.__data__ = [], this.size = 0;
}
var DD = ID;
function PD(e, t) {
  return e === t || e !== e && t !== t;
}
var vs = PD, LD = vs;
function MD(e, t) {
  for (var r = e.length; r--; )
    if (LD(e[r][0], t))
      return r;
  return -1;
}
var Eu = MD, RD = Eu, FD = Array.prototype, VD = FD.splice;
function BD(e) {
  var t = this.__data__, r = RD(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : VD.call(t, r, 1), --this.size, !0;
}
var UD = BD, HD = Eu;
function WD(e) {
  var t = this.__data__, r = HD(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var jD = WD, kD = Eu;
function GD(e) {
  return kD(this.__data__, e) > -1;
}
var KD = GD, qD = Eu;
function zD(e, t) {
  var r = this.__data__, o = qD(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
var YD = zD, JD = DD, XD = UD, QD = jD, ZD = KD, eP = YD;
function oo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oo.prototype.clear = JD;
oo.prototype.delete = XD;
oo.prototype.get = QD;
oo.prototype.has = ZD;
oo.prototype.set = eP;
var Ou = oo, tP = Ou;
function rP() {
  this.__data__ = new tP(), this.size = 0;
}
var nP = rP;
function iP(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var oP = iP;
function sP(e) {
  return this.__data__.get(e);
}
var aP = sP;
function uP(e) {
  return this.__data__.has(e);
}
var fP = uP, lP = Yr, cP = lP["__core-js_shared__"], pP = cP, el = pP, Ug = function() {
  var e = /[^.]+$/.exec(el && el.keys && el.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hP(e) {
  return !!Ug && Ug in e;
}
var dP = hP, gP = Function.prototype, vP = gP.toString;
function yP(e) {
  if (e != null) {
    try {
      return vP.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bm = yP, _P = mm, mP = dP, bP = gi, wP = bm, EP = /[\\^$.*+?()[\]{}|]/g, OP = /^\[object .+?Constructor\]$/, SP = Function.prototype, AP = Object.prototype, xP = SP.toString, $P = AP.hasOwnProperty, TP = RegExp(
  "^" + xP.call($P).replace(EP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function CP(e) {
  if (!bP(e) || mP(e))
    return !1;
  var t = _P(e) ? TP : OP;
  return t.test(wP(e));
}
var NP = CP;
function IP(e, t) {
  return e?.[t];
}
var DP = IP, PP = NP, LP = DP;
function MP(e, t) {
  var r = LP(e, t);
  return PP(r) ? r : void 0;
}
var vi = MP, RP = vi, FP = Yr, VP = RP(FP, "Map"), Uc = VP, BP = vi, UP = BP(Object, "create"), Su = UP, Hg = Su;
function HP() {
  this.__data__ = Hg ? Hg(null) : {}, this.size = 0;
}
var WP = HP;
function jP(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kP = jP, GP = Su, KP = "__lodash_hash_undefined__", qP = Object.prototype, zP = qP.hasOwnProperty;
function YP(e) {
  var t = this.__data__;
  if (GP) {
    var r = t[e];
    return r === KP ? void 0 : r;
  }
  return zP.call(t, e) ? t[e] : void 0;
}
var JP = YP, XP = Su, QP = Object.prototype, ZP = QP.hasOwnProperty;
function e2(e) {
  var t = this.__data__;
  return XP ? t[e] !== void 0 : ZP.call(t, e);
}
var t2 = e2, r2 = Su, n2 = "__lodash_hash_undefined__";
function i2(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = r2 && t === void 0 ? n2 : t, this;
}
var o2 = i2, s2 = WP, a2 = kP, u2 = JP, f2 = t2, l2 = o2;
function so(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
so.prototype.clear = s2;
so.prototype.delete = a2;
so.prototype.get = u2;
so.prototype.has = f2;
so.prototype.set = l2;
var c2 = so, Wg = c2, p2 = Ou, h2 = Uc;
function d2() {
  this.size = 0, this.__data__ = {
    hash: new Wg(),
    map: new (h2 || p2)(),
    string: new Wg()
  };
}
var g2 = d2;
function v2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var y2 = v2, _2 = y2;
function m2(e, t) {
  var r = e.__data__;
  return _2(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Au = m2, b2 = Au;
function w2(e) {
  var t = b2(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var E2 = w2, O2 = Au;
function S2(e) {
  return O2(this, e).get(e);
}
var A2 = S2, x2 = Au;
function $2(e) {
  return x2(this, e).has(e);
}
var T2 = $2, C2 = Au;
function N2(e, t) {
  var r = C2(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
var I2 = N2, D2 = g2, P2 = E2, L2 = A2, M2 = T2, R2 = I2;
function ao(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ao.prototype.clear = D2;
ao.prototype.delete = P2;
ao.prototype.get = L2;
ao.prototype.has = M2;
ao.prototype.set = R2;
var Hc = ao, F2 = Ou, V2 = Uc, B2 = Hc, U2 = 200;
function H2(e, t) {
  var r = this.__data__;
  if (r instanceof F2) {
    var o = r.__data__;
    if (!V2 || o.length < U2 - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new B2(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
var W2 = H2, j2 = Ou, k2 = nP, G2 = oP, K2 = aP, q2 = fP, z2 = W2;
function uo(e) {
  var t = this.__data__ = new j2(e);
  this.size = t.size;
}
uo.prototype.clear = k2;
uo.prototype.delete = G2;
uo.prototype.get = K2;
uo.prototype.has = q2;
uo.prototype.set = z2;
var Wc = uo, Y2 = "__lodash_hash_undefined__";
function J2(e) {
  return this.__data__.set(e, Y2), this;
}
var X2 = J2;
function Q2(e) {
  return this.__data__.has(e);
}
var Z2 = Q2, eL = Hc, tL = X2, rL = Z2;
function tu(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new eL(); ++t < r; )
    this.add(e[t]);
}
tu.prototype.add = tu.prototype.push = tL;
tu.prototype.has = rL;
var nL = tu;
function iL(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var oL = iL;
function sL(e, t) {
  return e.has(t);
}
var aL = sL, uL = nL, fL = oL, lL = aL, cL = 1, pL = 2;
function hL(e, t, r, o, s, u) {
  var f = r & cL, c = e.length, p = t.length;
  if (c != p && !(f && p > c))
    return !1;
  var g = u.get(e), y = u.get(t);
  if (g && y)
    return g == t && y == e;
  var _ = -1, m = !0, A = r & pL ? new uL() : void 0;
  for (u.set(e, t), u.set(t, e); ++_ < c; ) {
    var O = e[_], $ = t[_];
    if (o)
      var N = f ? o($, O, _, t, e, u) : o(O, $, _, e, t, u);
    if (N !== void 0) {
      if (N)
        continue;
      m = !1;
      break;
    }
    if (A) {
      if (!fL(t, function(R, L) {
        if (!lL(A, L) && (O === R || s(O, R, r, o, u)))
          return A.push(L);
      })) {
        m = !1;
        break;
      }
    } else if (!(O === $ || s(O, $, r, o, u))) {
      m = !1;
      break;
    }
  }
  return u.delete(e), u.delete(t), m;
}
var wm = hL, dL = Yr, gL = dL.Uint8Array, Em = gL;
function vL(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o, s) {
    r[++t] = [s, o];
  }), r;
}
var yL = vL;
function _L(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++t] = o;
  }), r;
}
var mL = _L, jg = hs, kg = Em, bL = vs, wL = wm, EL = yL, OL = mL, SL = 1, AL = 2, xL = "[object Boolean]", $L = "[object Date]", TL = "[object Error]", CL = "[object Map]", NL = "[object Number]", IL = "[object RegExp]", DL = "[object Set]", PL = "[object String]", LL = "[object Symbol]", ML = "[object ArrayBuffer]", RL = "[object DataView]", Gg = jg ? jg.prototype : void 0, tl = Gg ? Gg.valueOf : void 0;
function FL(e, t, r, o, s, u, f) {
  switch (r) {
    case RL:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ML:
      return !(e.byteLength != t.byteLength || !u(new kg(e), new kg(t)));
    case xL:
    case $L:
    case NL:
      return bL(+e, +t);
    case TL:
      return e.name == t.name && e.message == t.message;
    case IL:
    case PL:
      return e == t + "";
    case CL:
      var c = EL;
    case DL:
      var p = o & SL;
      if (c || (c = OL), e.size != t.size && !p)
        return !1;
      var g = f.get(e);
      if (g)
        return g == t;
      o |= AL, f.set(e, t);
      var y = wL(c(e), c(t), o, s, u, f);
      return f.delete(e), y;
    case LL:
      if (tl)
        return tl.call(e) == tl.call(t);
  }
  return !1;
}
var VL = FL;
function BL(e, t) {
  for (var r = -1, o = t.length, s = e.length; ++r < o; )
    e[s + r] = t[r];
  return e;
}
var Om = BL, UL = Om, HL = Jr;
function WL(e, t, r) {
  var o = t(e);
  return HL(e) ? o : UL(o, r(e));
}
var Sm = WL;
function jL() {
  return [];
}
var Am = jL, kL = cm, GL = Am, KL = Object.prototype, qL = KL.propertyIsEnumerable, Kg = Object.getOwnPropertySymbols, zL = Kg ? function(e) {
  return e == null ? [] : (e = Object(e), kL(Kg(e), function(t) {
    return qL.call(e, t);
  }));
} : GL, jc = zL, YL = Sm, JL = jc, XL = gs;
function QL(e) {
  return YL(e, XL, JL);
}
var xm = QL, qg = xm, ZL = 1, eM = Object.prototype, tM = eM.hasOwnProperty;
function rM(e, t, r, o, s, u) {
  var f = r & ZL, c = qg(e), p = c.length, g = qg(t), y = g.length;
  if (p != y && !f)
    return !1;
  for (var _ = p; _--; ) {
    var m = c[_];
    if (!(f ? m in t : tM.call(t, m)))
      return !1;
  }
  var A = u.get(e), O = u.get(t);
  if (A && O)
    return A == t && O == e;
  var $ = !0;
  u.set(e, t), u.set(t, e);
  for (var N = f; ++_ < p; ) {
    m = c[_];
    var R = e[m], L = t[m];
    if (o)
      var D = f ? o(L, R, m, t, e, u) : o(R, L, m, e, t, u);
    if (!(D === void 0 ? R === L || s(R, L, r, o, u) : D)) {
      $ = !1;
      break;
    }
    N || (N = m == "constructor");
  }
  if ($ && !N) {
    var X = e.constructor, V = t.constructor;
    X != V && "constructor" in e && "constructor" in t && !(typeof X == "function" && X instanceof X && typeof V == "function" && V instanceof V) && ($ = !1);
  }
  return u.delete(e), u.delete(t), $;
}
var nM = rM, iM = vi, oM = Yr, sM = iM(oM, "DataView"), aM = sM, uM = vi, fM = Yr, lM = uM(fM, "Promise"), cM = lM, pM = vi, hM = Yr, dM = pM(hM, "Set"), gM = dM, vM = vi, yM = Yr, _M = vM(yM, "WeakMap"), mM = _M, Ll = aM, Ml = Uc, Rl = cM, Fl = gM, Vl = mM, $m = ds, fo = bm, zg = "[object Map]", bM = "[object Object]", Yg = "[object Promise]", Jg = "[object Set]", Xg = "[object WeakMap]", Qg = "[object DataView]", wM = fo(Ll), EM = fo(Ml), OM = fo(Rl), SM = fo(Fl), AM = fo(Vl), oi = $m;
(Ll && oi(new Ll(new ArrayBuffer(1))) != Qg || Ml && oi(new Ml()) != zg || Rl && oi(Rl.resolve()) != Yg || Fl && oi(new Fl()) != Jg || Vl && oi(new Vl()) != Xg) && (oi = function(e) {
  var t = $m(e), r = t == bM ? e.constructor : void 0, o = r ? fo(r) : "";
  if (o)
    switch (o) {
      case wM:
        return Qg;
      case EM:
        return zg;
      case OM:
        return Yg;
      case SM:
        return Jg;
      case AM:
        return Xg;
    }
  return t;
});
var xu = oi, rl = Wc, xM = wm, $M = VL, TM = nM, Zg = xu, ev = Jr, tv = Lc, CM = vm, NM = 1, rv = "[object Arguments]", nv = "[object Array]", ma = "[object Object]", IM = Object.prototype, iv = IM.hasOwnProperty;
function DM(e, t, r, o, s, u) {
  var f = ev(e), c = ev(t), p = f ? nv : Zg(e), g = c ? nv : Zg(t);
  p = p == rv ? ma : p, g = g == rv ? ma : g;
  var y = p == ma, _ = g == ma, m = p == g;
  if (m && tv(e)) {
    if (!tv(t))
      return !1;
    f = !0, y = !1;
  }
  if (m && !y)
    return u || (u = new rl()), f || CM(e) ? xM(e, t, r, o, s, u) : $M(e, t, p, r, o, s, u);
  if (!(r & NM)) {
    var A = y && iv.call(e, "__wrapped__"), O = _ && iv.call(t, "__wrapped__");
    if (A || O) {
      var $ = A ? e.value() : e, N = O ? t.value() : t;
      return u || (u = new rl()), s($, N, r, o, u);
    }
  }
  return m ? (u || (u = new rl()), TM(e, t, r, o, s, u)) : !1;
}
var PM = DM, LM = PM, ov = di;
function Tm(e, t, r, o, s) {
  return e === t ? !0 : e == null || t == null || !ov(e) && !ov(t) ? e !== e && t !== t : LM(e, t, r, o, Tm, s);
}
var Cm = Tm, MM = Wc, RM = Cm, FM = 1, VM = 2;
function BM(e, t, r, o) {
  var s = r.length, u = s, f = !o;
  if (e == null)
    return !u;
  for (e = Object(e); s--; ) {
    var c = r[s];
    if (f && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return !1;
  }
  for (; ++s < u; ) {
    c = r[s];
    var p = c[0], g = e[p], y = c[1];
    if (f && c[2]) {
      if (g === void 0 && !(p in e))
        return !1;
    } else {
      var _ = new MM();
      if (o)
        var m = o(g, y, p, e, t, _);
      if (!(m === void 0 ? RM(y, g, FM | VM, o, _) : m))
        return !1;
    }
  }
  return !0;
}
var UM = BM, HM = gi;
function WM(e) {
  return e === e && !HM(e);
}
var Nm = WM, jM = Nm, kM = gs;
function GM(e) {
  for (var t = kM(e), r = t.length; r--; ) {
    var o = t[r], s = e[o];
    t[r] = [o, s, jM(s)];
  }
  return t;
}
var KM = GM;
function qM(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Im = qM, zM = UM, YM = KM, JM = Im;
function XM(e) {
  var t = YM(e);
  return t.length == 1 && t[0][2] ? JM(t[0][0], t[0][1]) : function(r) {
    return r === e || zM(r, e, t);
  };
}
var QM = XM, ZM = ds, eR = di, tR = "[object Symbol]";
function rR(e) {
  return typeof e == "symbol" || eR(e) && ZM(e) == tR;
}
var kc = rR, nR = Jr, iR = kc, oR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sR = /^\w*$/;
function aR(e, t) {
  if (nR(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || iR(e) ? !0 : sR.test(e) || !oR.test(e) || t != null && e in Object(t);
}
var Gc = aR, Dm = Hc, uR = "Expected a function";
function Kc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(uR);
  var r = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], u = r.cache;
    if (u.has(s))
      return u.get(s);
    var f = e.apply(this, o);
    return r.cache = u.set(s, f) || u, f;
  };
  return r.cache = new (Kc.Cache || Dm)(), r;
}
Kc.Cache = Dm;
var fR = Kc, lR = fR, cR = 500;
function pR(e) {
  var t = lR(e, function(o) {
    return r.size === cR && r.clear(), o;
  }), r = t.cache;
  return t;
}
var hR = pR, dR = hR, gR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vR = /\\(\\)?/g, yR = dR(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(gR, function(r, o, s, u) {
    t.push(s ? u.replace(vR, "$1") : o || r);
  }), t;
}), _R = yR;
function mR(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, s = Array(o); ++r < o; )
    s[r] = t(e[r], r, e);
  return s;
}
var bR = mR, sv = hs, wR = bR, ER = Jr, OR = kc, SR = 1 / 0, av = sv ? sv.prototype : void 0, uv = av ? av.toString : void 0;
function Pm(e) {
  if (typeof e == "string")
    return e;
  if (ER(e))
    return wR(e, Pm) + "";
  if (OR(e))
    return uv ? uv.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -SR ? "-0" : t;
}
var AR = Pm, xR = AR;
function $R(e) {
  return e == null ? "" : xR(e);
}
var TR = $R, CR = Jr, NR = Gc, IR = _R, DR = TR;
function PR(e, t) {
  return CR(e) ? e : NR(e, t) ? [e] : IR(DR(e));
}
var Lm = PR, LR = kc, MR = 1 / 0;
function RR(e) {
  if (typeof e == "string" || LR(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -MR ? "-0" : t;
}
var $u = RR, FR = Lm, VR = $u;
function BR(e, t) {
  t = FR(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[VR(t[r++])];
  return r && r == o ? e : void 0;
}
var Mm = BR, UR = Mm;
function HR(e, t, r) {
  var o = e == null ? void 0 : UR(e, t);
  return o === void 0 ? r : o;
}
var WR = HR;
function jR(e, t) {
  return e != null && t in Object(e);
}
var kR = jR, GR = Lm, KR = gm, qR = Jr, zR = Mc, YR = Rc, JR = $u;
function XR(e, t, r) {
  t = GR(t, e);
  for (var o = -1, s = t.length, u = !1; ++o < s; ) {
    var f = JR(t[o]);
    if (!(u = e != null && r(e, f)))
      break;
    e = e[f];
  }
  return u || ++o != s ? u : (s = e == null ? 0 : e.length, !!s && YR(s) && zR(f, s) && (qR(e) || KR(e)));
}
var QR = XR, ZR = kR, eF = QR;
function tF(e, t) {
  return e != null && eF(e, t, ZR);
}
var rF = tF, nF = Cm, iF = WR, oF = rF, sF = Gc, aF = Nm, uF = Im, fF = $u, lF = 1, cF = 2;
function pF(e, t) {
  return sF(e) && aF(t) ? uF(fF(e), t) : function(r) {
    var o = iF(r, e);
    return o === void 0 && o === t ? oF(r, e) : nF(t, o, lF | cF);
  };
}
var hF = pF;
function dF(e) {
  return e;
}
var qc = dF;
function gF(e) {
  return function(t) {
    return t?.[e];
  };
}
var vF = gF, yF = Mm;
function _F(e) {
  return function(t) {
    return yF(t, e);
  };
}
var mF = _F, bF = vF, wF = mF, EF = Gc, OF = $u;
function SF(e) {
  return EF(e) ? bF(OF(e)) : wF(e);
}
var AF = SF, xF = QM, $F = hF, TF = qc, CF = Jr, NF = AF;
function IF(e) {
  return typeof e == "function" ? e : e == null ? TF : typeof e == "object" ? CF(e) ? $F(e[0], e[1]) : xF(e) : NF(e);
}
var DF = IF, PF = cm, LF = ND, MF = DF, RF = Jr;
function FF(e, t) {
  var r = RF(e) ? PF : LF;
  return r(e, MF(t));
}
var VF = FF;
Object.defineProperty(io, "__esModule", { value: !0 });
io.Swatch = void 0;
var fv = ps, BF = VF, UF = (
  /** @class */
  function() {
    function e(t, r) {
      this._rgb = t, this._population = r;
    }
    return e.applyFilter = function(t, r) {
      return typeof r == "function" ? BF(t, function(o) {
        var s = o.r, u = o.g, f = o.b;
        return r(s, u, f, 255);
      }) : t;
    }, Object.defineProperty(e.prototype, "r", {
      get: function() {
        return this._rgb[0];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "g", {
      get: function() {
        return this._rgb[1];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "b", {
      get: function() {
        return this._rgb[2];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "rgb", {
      get: function() {
        return this._rgb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "hsl", {
      get: function() {
        if (!this._hsl) {
          var t = this._rgb, r = t[0], o = t[1], s = t[2];
          this._hsl = fv.rgbToHsl(r, o, s);
        }
        return this._hsl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "hex", {
      get: function() {
        if (!this._hex) {
          var t = this._rgb, r = t[0], o = t[1], s = t[2];
          this._hex = fv.rgbToHex(r, o, s);
        }
        return this._hex;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "population", {
      get: function() {
        return this._population;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toJSON = function() {
      return {
        rgb: this.rgb,
        population: this.population
      };
    }, e.prototype.getRgb = function() {
      return this._rgb;
    }, e.prototype.getHsl = function() {
      return this.hsl;
    }, e.prototype.getPopulation = function() {
      return this._population;
    }, e.prototype.getHex = function() {
      return this.hex;
    }, e.prototype.getYiq = function() {
      if (!this._yiq) {
        var t = this._rgb;
        this._yiq = (t[0] * 299 + t[1] * 587 + t[2] * 114) / 1e3;
      }
      return this._yiq;
    }, Object.defineProperty(e.prototype, "titleTextColor", {
      get: function() {
        return this._titleTextColor || (this._titleTextColor = this.getYiq() < 200 ? "#fff" : "#000"), this._titleTextColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "bodyTextColor", {
      get: function() {
        return this._bodyTextColor || (this._bodyTextColor = this.getYiq() < 150 ? "#fff" : "#000"), this._bodyTextColor;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getTitleTextColor = function() {
      return this.titleTextColor;
    }, e.prototype.getBodyTextColor = function() {
      return this.bodyTextColor;
    }, e;
  }()
);
io.Swatch = UF;
var ba = {};
function HF(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var WF = HF, jF = vi, kF = function() {
  try {
    var e = jF(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Rm = kF, lv = Rm;
function GF(e, t, r) {
  t == "__proto__" && lv ? lv(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Fm = GF, KF = Fm, qF = vs, zF = Object.prototype, YF = zF.hasOwnProperty;
function JF(e, t, r) {
  var o = e[t];
  (!(YF.call(e, t) && qF(o, r)) || r === void 0 && !(t in e)) && KF(e, t, r);
}
var Vm = JF, XF = Vm, QF = Fm;
function ZF(e, t, r, o) {
  var s = !r;
  r || (r = {});
  for (var u = -1, f = t.length; ++u < f; ) {
    var c = t[u], p = o ? o(r[c], e[c], c, r, e) : void 0;
    p === void 0 && (p = e[c]), s ? QF(r, c, p) : XF(r, c, p);
  }
  return r;
}
var Tu = ZF, eV = Tu, tV = gs;
function rV(e, t) {
  return e && eV(t, tV(t), e);
}
var nV = rV;
function iV(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var oV = iV, sV = gi, aV = Bc, uV = oV, fV = Object.prototype, lV = fV.hasOwnProperty;
function cV(e) {
  if (!sV(e))
    return uV(e);
  var t = aV(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !lV.call(e, o)) || r.push(o);
  return r;
}
var pV = cV, hV = ym, dV = pV, gV = wu;
function vV(e) {
  return gV(e) ? hV(e, !0) : dV(e);
}
var Cu = vV, yV = Tu, _V = Cu;
function mV(e, t) {
  return e && yV(t, _V(t), e);
}
var bV = mV, ru = { exports: {} };
ru.exports;
(function(e, t) {
  var r = Yr, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, u = s && s.exports === o, f = u ? r.Buffer : void 0, c = f ? f.allocUnsafe : void 0;
  function p(g, y) {
    if (y)
      return g.slice();
    var _ = g.length, m = c ? c(_) : new g.constructor(_);
    return g.copy(m), m;
  }
  e.exports = p;
})(ru, ru.exports);
var wV = ru.exports;
function EV(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var OV = EV, SV = Tu, AV = jc;
function xV(e, t) {
  return SV(e, AV(e), t);
}
var $V = xV, TV = _m, CV = TV(Object.getPrototypeOf, Object), Bm = CV, NV = Om, IV = Bm, DV = jc, PV = Am, LV = Object.getOwnPropertySymbols, MV = LV ? function(e) {
  for (var t = []; e; )
    NV(t, DV(e)), e = IV(e);
  return t;
} : PV, Um = MV, RV = Tu, FV = Um;
function VV(e, t) {
  return RV(e, FV(e), t);
}
var BV = VV, UV = Sm, HV = Um, WV = Cu;
function jV(e) {
  return UV(e, WV, HV);
}
var kV = jV, GV = Object.prototype, KV = GV.hasOwnProperty;
function qV(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && KV.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var zV = qV, cv = Em;
function YV(e) {
  var t = new e.constructor(e.byteLength);
  return new cv(t).set(new cv(e)), t;
}
var zc = YV, JV = zc;
function XV(e, t) {
  var r = t ? JV(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var QV = XV, ZV = /\w*$/;
function e3(e) {
  var t = new e.constructor(e.source, ZV.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var t3 = e3, pv = hs, hv = pv ? pv.prototype : void 0, dv = hv ? hv.valueOf : void 0;
function r3(e) {
  return dv ? Object(dv.call(e)) : {};
}
var n3 = r3, i3 = zc;
function o3(e, t) {
  var r = t ? i3(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var s3 = o3, a3 = zc, u3 = QV, f3 = t3, l3 = n3, c3 = s3, p3 = "[object Boolean]", h3 = "[object Date]", d3 = "[object Map]", g3 = "[object Number]", v3 = "[object RegExp]", y3 = "[object Set]", _3 = "[object String]", m3 = "[object Symbol]", b3 = "[object ArrayBuffer]", w3 = "[object DataView]", E3 = "[object Float32Array]", O3 = "[object Float64Array]", S3 = "[object Int8Array]", A3 = "[object Int16Array]", x3 = "[object Int32Array]", $3 = "[object Uint8Array]", T3 = "[object Uint8ClampedArray]", C3 = "[object Uint16Array]", N3 = "[object Uint32Array]";
function I3(e, t, r) {
  var o = e.constructor;
  switch (t) {
    case b3:
      return a3(e);
    case p3:
    case h3:
      return new o(+e);
    case w3:
      return u3(e, r);
    case E3:
    case O3:
    case S3:
    case A3:
    case x3:
    case $3:
    case T3:
    case C3:
    case N3:
      return c3(e, r);
    case d3:
      return new o();
    case g3:
    case _3:
      return new o(e);
    case v3:
      return f3(e);
    case y3:
      return new o();
    case m3:
      return l3(e);
  }
}
var D3 = I3, P3 = gi, gv = Object.create, L3 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!P3(t))
      return {};
    if (gv)
      return gv(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), M3 = L3, R3 = M3, F3 = Bm, V3 = Bc;
function B3(e) {
  return typeof e.constructor == "function" && !V3(e) ? R3(F3(e)) : {};
}
var U3 = B3, H3 = xu, W3 = di, j3 = "[object Map]";
function k3(e) {
  return W3(e) && H3(e) == j3;
}
var G3 = k3, K3 = G3, q3 = Fc, vv = Vc, yv = vv && vv.isMap, z3 = yv ? q3(yv) : K3, Y3 = z3, J3 = xu, X3 = di, Q3 = "[object Set]";
function Z3(e) {
  return X3(e) && J3(e) == Q3;
}
var eB = Z3, tB = eB, rB = Fc, _v = Vc, mv = _v && _v.isSet, nB = mv ? rB(mv) : tB, iB = nB, oB = Wc, sB = WF, aB = Vm, uB = nV, fB = bV, lB = wV, cB = OV, pB = $V, hB = BV, dB = xm, gB = kV, vB = xu, yB = zV, _B = D3, mB = U3, bB = Jr, wB = Lc, EB = Y3, OB = gi, SB = iB, AB = gs, xB = Cu, $B = 1, TB = 2, CB = 4, Hm = "[object Arguments]", NB = "[object Array]", IB = "[object Boolean]", DB = "[object Date]", PB = "[object Error]", Wm = "[object Function]", LB = "[object GeneratorFunction]", MB = "[object Map]", RB = "[object Number]", jm = "[object Object]", FB = "[object RegExp]", VB = "[object Set]", BB = "[object String]", UB = "[object Symbol]", HB = "[object WeakMap]", WB = "[object ArrayBuffer]", jB = "[object DataView]", kB = "[object Float32Array]", GB = "[object Float64Array]", KB = "[object Int8Array]", qB = "[object Int16Array]", zB = "[object Int32Array]", YB = "[object Uint8Array]", JB = "[object Uint8ClampedArray]", XB = "[object Uint16Array]", QB = "[object Uint32Array]", Qe = {};
Qe[Hm] = Qe[NB] = Qe[WB] = Qe[jB] = Qe[IB] = Qe[DB] = Qe[kB] = Qe[GB] = Qe[KB] = Qe[qB] = Qe[zB] = Qe[MB] = Qe[RB] = Qe[jm] = Qe[FB] = Qe[VB] = Qe[BB] = Qe[UB] = Qe[YB] = Qe[JB] = Qe[XB] = Qe[QB] = !0;
Qe[PB] = Qe[Wm] = Qe[HB] = !1;
function Ra(e, t, r, o, s, u) {
  var f, c = t & $B, p = t & TB, g = t & CB;
  if (r && (f = s ? r(e, o, s, u) : r(e)), f !== void 0)
    return f;
  if (!OB(e))
    return e;
  var y = bB(e);
  if (y) {
    if (f = yB(e), !c)
      return cB(e, f);
  } else {
    var _ = vB(e), m = _ == Wm || _ == LB;
    if (wB(e))
      return lB(e, c);
    if (_ == jm || _ == Hm || m && !s) {
      if (f = p || m ? {} : mB(e), !c)
        return p ? hB(e, fB(f, e)) : pB(e, uB(f, e));
    } else {
      if (!Qe[_])
        return s ? e : {};
      f = _B(e, _, c);
    }
  }
  u || (u = new oB());
  var A = u.get(e);
  if (A)
    return A;
  u.set(e, f), SB(e) ? e.forEach(function(N) {
    f.add(Ra(N, t, r, N, e, u));
  }) : EB(e) && e.forEach(function(N, R) {
    f.set(R, Ra(N, t, r, R, e, u));
  });
  var O = g ? p ? gB : dB : p ? xB : AB, $ = y ? void 0 : O(e);
  return sB($ || e, function(N, R) {
    $ && (R = N, N = e[R]), aB(f, R, Ra(N, t, r, R, e, u));
  }), f;
}
var ZB = Ra, eU = ZB, tU = 4;
function rU(e) {
  return eU(e, tU);
}
var nU = rU, bv;
function iU() {
  if (bv) return ba;
  bv = 1;
  var e = Ie && Ie.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(ba, "__esModule", { value: !0 });
  var t = e(Jm()), r = nU, o = (
    /** @class */
    function() {
      function s(u, f) {
        f === void 0 && (f = {}), this._src = u, this._opts = f, this._opts.filters = r(t.default.DefaultOpts.filters);
      }
      return s.prototype.maxColorCount = function(u) {
        return this._opts.colorCount = u, this;
      }, s.prototype.maxDimension = function(u) {
        return this._opts.maxDimension = u, this;
      }, s.prototype.addFilter = function(u) {
        return this._opts.filters.push(u), this;
      }, s.prototype.removeFilter = function(u) {
        var f = this._opts.filters.indexOf(u);
        return f > 0 && this._opts.filters.splice(f), this;
      }, s.prototype.clearFilters = function() {
        return this._opts.filters = [], this;
      }, s.prototype.quality = function(u) {
        return this._opts.quality = u, this;
      }, s.prototype.useImageClass = function(u) {
        return this._opts.ImageClass = u, this;
      }, s.prototype.useGenerator = function(u) {
        return this._opts.generator = u, this;
      }, s.prototype.useQuantizer = function(u) {
        return this._opts.quantizer = u, this;
      }, s.prototype.build = function() {
        return new t.default(this._src, this._opts);
      }, s.prototype.getPalette = function(u) {
        return this.build().getPalette(u);
      }, s.prototype.getSwatches = function(u) {
        return this.build().getPalette(u);
      }, s;
    }()
  );
  return ba.default = o, ba;
}
var km = {}, Yc = {}, Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
var er = ps, oU = (
  /** @class */
  function() {
    function e(t, r, o, s, u, f, c) {
      this._volume = -1, this._count = -1, this.dimension = { r1: t, r2: r, g1: o, g2: s, b1: u, b2: f }, this.hist = c;
    }
    return e.build = function(t, r) {
      var o = 1 << 3 * er.SIGBITS, s = new Uint32Array(o), u, f, c, p, g, y, _, m, A, O;
      u = c = g = 0, f = p = y = Number.MAX_VALUE;
      for (var $ = t.length / 4, N = 0; N < $; ) {
        var R = N * 4;
        if (N++, _ = t[R + 0], m = t[R + 1], A = t[R + 2], O = t[R + 3], O !== 0) {
          _ = _ >> er.RSHIFT, m = m >> er.RSHIFT, A = A >> er.RSHIFT;
          var L = er.getColorIndex(_, m, A);
          s[L] += 1, _ > u && (u = _), _ < f && (f = _), m > c && (c = m), m < p && (p = m), A > g && (g = A), A < y && (y = A);
        }
      }
      return new e(f, u, p, c, y, g, s);
    }, e.prototype.invalidate = function() {
      this._volume = this._count = -1, this._avg = null;
    }, e.prototype.volume = function() {
      if (this._volume < 0) {
        var t = this.dimension, r = t.r1, o = t.r2, s = t.g1, u = t.g2, f = t.b1, c = t.b2;
        this._volume = (o - r + 1) * (u - s + 1) * (c - f + 1);
      }
      return this._volume;
    }, e.prototype.count = function() {
      if (this._count < 0) {
        for (var t = this.hist, r = this.dimension, o = r.r1, s = r.r2, u = r.g1, f = r.g2, c = r.b1, p = r.b2, g = 0, y = o; y <= s; y++)
          for (var _ = u; _ <= f; _++)
            for (var m = c; m <= p; m++) {
              var A = er.getColorIndex(y, _, m);
              g += t[A];
            }
        this._count = g;
      }
      return this._count;
    }, e.prototype.clone = function() {
      var t = this.hist, r = this.dimension, o = r.r1, s = r.r2, u = r.g1, f = r.g2, c = r.b1, p = r.b2;
      return new e(o, s, u, f, c, p, t);
    }, e.prototype.avg = function() {
      if (!this._avg) {
        var t = this.hist, r = this.dimension, o = r.r1, s = r.r2, u = r.g1, f = r.g2, c = r.b1, p = r.b2, g = 0, y = 1 << 8 - er.SIGBITS, _ = void 0, m = void 0, A = void 0;
        _ = m = A = 0;
        for (var O = o; O <= s; O++)
          for (var $ = u; $ <= f; $++)
            for (var N = c; N <= p; N++) {
              var R = er.getColorIndex(O, $, N), L = t[R];
              g += L, _ += L * (O + 0.5) * y, m += L * ($ + 0.5) * y, A += L * (N + 0.5) * y;
            }
        g ? this._avg = [
          ~~(_ / g),
          ~~(m / g),
          ~~(A / g)
        ] : this._avg = [
          ~~(y * (o + s + 1) / 2),
          ~~(y * (u + f + 1) / 2),
          ~~(y * (c + p + 1) / 2)
        ];
      }
      return this._avg;
    }, e.prototype.contains = function(t) {
      var r = t[0], o = t[1], s = t[2], u = this.dimension, f = u.r1, c = u.r2, p = u.g1, g = u.g2, y = u.b1, _ = u.b2;
      return r >>= er.RSHIFT, o >>= er.RSHIFT, s >>= er.RSHIFT, r >= f && r <= c && o >= p && o <= g && s >= y && s <= _;
    }, e.prototype.split = function() {
      var t = this.hist, r = this.dimension, o = r.r1, s = r.r2, u = r.g1, f = r.g2, c = r.b1, p = r.b2, g = this.count();
      if (!g)
        return [];
      if (g === 1)
        return [this.clone()];
      var y = s - o + 1, _ = f - u + 1, m = p - c + 1, A = Math.max(y, _, m), O = null, $, N;
      $ = N = 0;
      var R = null;
      if (A === y) {
        R = "r", O = new Uint32Array(s + 1);
        for (var L = o; L <= s; L++) {
          $ = 0;
          for (var D = u; D <= f; D++)
            for (var X = c; X <= p; X++) {
              var V = er.getColorIndex(L, D, X);
              $ += t[V];
            }
          N += $, O[L] = N;
        }
      } else if (A === _) {
        R = "g", O = new Uint32Array(f + 1);
        for (var D = u; D <= f; D++) {
          $ = 0;
          for (var L = o; L <= s; L++)
            for (var X = c; X <= p; X++) {
              var V = er.getColorIndex(L, D, X);
              $ += t[V];
            }
          N += $, O[D] = N;
        }
      } else {
        R = "b", O = new Uint32Array(p + 1);
        for (var X = c; X <= p; X++) {
          $ = 0;
          for (var L = o; L <= s; L++)
            for (var D = u; D <= f; D++) {
              var V = er.getColorIndex(L, D, X);
              $ += t[V];
            }
          N += $, O[X] = N;
        }
      }
      for (var ee = -1, he = new Uint32Array(O.length), se = 0; se < O.length; se++) {
        var fe = O[se];
        ee < 0 && fe > N / 2 && (ee = se), he[se] = N - fe;
      }
      var Ae = this;
      function ke(M) {
        var Q = M + "1", de = M + "2", ae = Ae.dimension[Q], ne = Ae.dimension[de], te = Ae.clone(), ce = Ae.clone(), Ze = ee - ae, re = ne - ee;
        for (Ze <= re ? (ne = Math.min(ne - 1, ~~(ee + re / 2)), ne = Math.max(0, ne)) : (ne = Math.max(ae, ~~(ee - 1 - Ze / 2)), ne = Math.min(Ae.dimension[de], ne)); !O[ne]; )
          ne++;
        for (var oe = he[ne]; !oe && O[ne - 1]; )
          oe = he[--ne];
        return te.dimension[de] = ne, ce.dimension[Q] = ne + 1, [te, ce];
      }
      return ke(R);
    }, e;
  }()
);
Jc.default = oU;
var Xc = {};
Object.defineProperty(Xc, "__esModule", { value: !0 });
var sU = (
  /** @class */
  function() {
    function e(t) {
      this._comparator = t, this.contents = [], this._sorted = !1;
    }
    return e.prototype._sort = function() {
      this._sorted || (this.contents.sort(this._comparator), this._sorted = !0);
    }, e.prototype.push = function(t) {
      this.contents.push(t), this._sorted = !1;
    }, e.prototype.peek = function(t) {
      return this._sort(), t = typeof t == "number" ? t : this.contents.length - 1, this.contents[t];
    }, e.prototype.pop = function() {
      return this._sort(), this.contents.pop();
    }, e.prototype.size = function() {
      return this.contents.length;
    }, e.prototype.map = function(t) {
      return this._sort(), this.contents.map(t);
    }, e;
  }()
);
Xc.default = sU;
var Gm = Ie && Ie.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Yc, "__esModule", { value: !0 });
var aU = io, uU = Gm(Jc), wv = Gm(Xc), fU = 0.75;
function Ev(e, t) {
  for (var r = e.size(); e.size() < t; ) {
    var o = e.pop();
    if (o && o.count() > 0) {
      var s = o.split(), u = s[0], f = s[1];
      if (e.push(u), f && f.count() > 0 && e.push(f), e.size() === r)
        break;
      r = e.size();
    } else
      break;
  }
}
var lU = function(e, t) {
  if (e.length === 0 || t.colorCount < 2 || t.colorCount > 256)
    throw new Error("Wrong MMCQ parameters");
  var r = uU.default.build(e), o = r.hist;
  Object.keys(o).length;
  var s = new wv.default(function(f, c) {
    return f.count() - c.count();
  });
  s.push(r), Ev(s, fU * t.colorCount);
  var u = new wv.default(function(f, c) {
    return f.count() * f.volume() - c.count() * c.volume();
  });
  return u.contents = s.contents, Ev(u, t.colorCount - u.size()), cU(u);
};
function cU(e) {
  for (var t = []; e.size(); ) {
    var r = e.pop(), o = r.avg();
    o[0], o[1], o[2], t.push(new aU.Swatch(o, r.count()));
  }
  return t;
}
Yc.default = lU;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebWorker = void 0;
  var t = Yc;
  Object.defineProperty(e, "MMCQ", { enumerable: !0, get: function() {
    return t.default;
  } }), e.WebWorker = null;
})(km);
var Km = {}, Qc = {};
function pU(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var hU = pU, dU = hU, Ov = Math.max;
function gU(e, t, r) {
  return t = Ov(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, u = Ov(o.length - t, 0), f = Array(u); ++s < u; )
      f[s] = o[t + s];
    s = -1;
    for (var c = Array(t + 1); ++s < t; )
      c[s] = o[s];
    return c[t] = r(f), dU(e, this, c);
  };
}
var vU = gU;
function yU(e) {
  return function() {
    return e;
  };
}
var _U = yU, mU = _U, Sv = Rm, bU = qc, wU = Sv ? function(e, t) {
  return Sv(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: mU(t),
    writable: !0
  });
} : bU, EU = wU, OU = 800, SU = 16, AU = Date.now;
function xU(e) {
  var t = 0, r = 0;
  return function() {
    var o = AU(), s = SU - (o - r);
    if (r = o, s > 0) {
      if (++t >= OU)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var $U = xU, TU = EU, CU = $U, NU = CU(TU), IU = NU, DU = qc, PU = vU, LU = IU;
function MU(e, t) {
  return LU(PU(e, t, DU), e + "");
}
var RU = MU, FU = vs, VU = wu, BU = Mc, UU = gi;
function HU(e, t, r) {
  if (!UU(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? VU(r) && BU(t, r.length) : o == "string" && t in r) ? FU(r[t], e) : !1;
}
var WU = HU, jU = RU, kU = vs, GU = WU, KU = Cu, qm = Object.prototype, qU = qm.hasOwnProperty, zU = jU(function(e, t) {
  e = Object(e);
  var r = -1, o = t.length, s = o > 2 ? t[2] : void 0;
  for (s && GU(t[0], t[1], s) && (o = 1); ++r < o; )
    for (var u = t[r], f = KU(u), c = -1, p = f.length; ++c < p; ) {
      var g = f[c], y = e[g];
      (y === void 0 || kU(y, qm[g]) && !qU.call(e, g)) && (e[g] = u[g]);
    }
  return e;
}), zm = zU;
Object.defineProperty(Qc, "__esModule", { value: !0 });
var ln = io, cn = ps, YU = zm, JU = {
  targetDarkLuma: 0.26,
  maxDarkLuma: 0.45,
  minLightLuma: 0.55,
  targetLightLuma: 0.74,
  minNormalLuma: 0.3,
  targetNormalLuma: 0.5,
  maxNormalLuma: 0.7,
  targetMutesSaturation: 0.3,
  maxMutesSaturation: 0.4,
  targetVibrantSaturation: 1,
  minVibrantSaturation: 0.35,
  weightSaturation: 3,
  weightLuma: 6.5,
  weightPopulation: 0.5
};
function XU(e) {
  var t = 0;
  return e.forEach(function(r) {
    t = Math.max(t, r.getPopulation());
  }), t;
}
function QU(e, t) {
  return e.Vibrant === t || e.DarkVibrant === t || e.LightVibrant === t || e.Muted === t || e.DarkMuted === t || e.LightMuted === t;
}
function ZU(e, t, r, o, s, u, f) {
  function c() {
    for (var g = [], y = 0; y < arguments.length; y++)
      g[y] = arguments[y];
    for (var _ = 0, m = 0, A = 0; A < g.length; A += 2) {
      var O = g[A], $ = g[A + 1];
      _ += O * $, m += $;
    }
    return _ / m;
  }
  function p(g, y) {
    return 1 - Math.abs(g - y);
  }
  return c(p(e, t), f.weightSaturation, p(r, o), f.weightLuma, s / u, f.weightPopulation);
}
function Mi(e, t, r, o, s, u, f, c, p, g) {
  var y = null, _ = 0;
  return t.forEach(function(m) {
    var A = m.getHsl(), O = A[1], $ = A[2];
    if (O >= c && O <= p && $ >= s && $ <= u && !QU(e, m)) {
      var N = ZU(O, f, $, o, m.getPopulation(), r, g);
      (y === null || N > _) && (y = m, _ = N);
    }
  }), y;
}
function e6(e, t, r) {
  var o = {};
  return o.Vibrant = Mi(o, e, t, r.targetNormalLuma, r.minNormalLuma, r.maxNormalLuma, r.targetVibrantSaturation, r.minVibrantSaturation, 1, r), o.LightVibrant = Mi(o, e, t, r.targetLightLuma, r.minLightLuma, 1, r.targetVibrantSaturation, r.minVibrantSaturation, 1, r), o.DarkVibrant = Mi(o, e, t, r.targetDarkLuma, 0, r.maxDarkLuma, r.targetVibrantSaturation, r.minVibrantSaturation, 1, r), o.Muted = Mi(o, e, t, r.targetNormalLuma, r.minNormalLuma, r.maxNormalLuma, r.targetMutesSaturation, 0, r.maxMutesSaturation, r), o.LightMuted = Mi(o, e, t, r.targetLightLuma, r.minLightLuma, 1, r.targetMutesSaturation, 0, r.maxMutesSaturation, r), o.DarkMuted = Mi(o, e, t, r.targetDarkLuma, 0, r.maxDarkLuma, r.targetMutesSaturation, 0, r.maxMutesSaturation, r), o;
}
function t6(e, t, r) {
  if (e.Vibrant === null && e.DarkVibrant === null && e.LightVibrant === null) {
    if (e.DarkVibrant === null && e.DarkMuted !== null) {
      var o = e.DarkMuted.getHsl(), s = o[0], u = o[1], f = o[2];
      f = r.targetDarkLuma, e.DarkVibrant = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
    }
    if (e.LightVibrant === null && e.LightMuted !== null) {
      var c = e.LightMuted.getHsl(), s = c[0], u = c[1], f = c[2];
      f = r.targetDarkLuma, e.DarkVibrant = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
    }
  }
  if (e.Vibrant === null && e.DarkVibrant !== null) {
    var p = e.DarkVibrant.getHsl(), s = p[0], u = p[1], f = p[2];
    f = r.targetNormalLuma, e.Vibrant = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
  } else if (e.Vibrant === null && e.LightVibrant !== null) {
    var g = e.LightVibrant.getHsl(), s = g[0], u = g[1], f = g[2];
    f = r.targetNormalLuma, e.Vibrant = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
  }
  if (e.DarkVibrant === null && e.Vibrant !== null) {
    var y = e.Vibrant.getHsl(), s = y[0], u = y[1], f = y[2];
    f = r.targetDarkLuma, e.DarkVibrant = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
  }
  if (e.LightVibrant === null && e.Vibrant !== null) {
    var _ = e.Vibrant.getHsl(), s = _[0], u = _[1], f = _[2];
    f = r.targetLightLuma, e.LightVibrant = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
  }
  if (e.Muted === null && e.Vibrant !== null) {
    var m = e.Vibrant.getHsl(), s = m[0], u = m[1], f = m[2];
    f = r.targetMutesSaturation, e.Muted = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
  }
  if (e.DarkMuted === null && e.DarkVibrant !== null) {
    var A = e.DarkVibrant.getHsl(), s = A[0], u = A[1], f = A[2];
    f = r.targetMutesSaturation, e.DarkMuted = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
  }
  if (e.LightMuted === null && e.LightVibrant !== null) {
    var O = e.LightVibrant.getHsl(), s = O[0], u = O[1], f = O[2];
    f = r.targetMutesSaturation, e.LightMuted = new ln.Swatch(cn.hslToRgb(s, u, f), 0);
  }
}
var r6 = function(e, t) {
  t = YU({}, t, JU);
  var r = XU(e), o = e6(e, r, t);
  return t6(o, r, t), o;
};
Qc.default = r6;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Qc;
  Object.defineProperty(e, "Default", { enumerable: !0, get: function() {
    return t.default;
  } });
})(Km);
var Ym = {}, Zc = {};
Object.defineProperty(Zc, "__esModule", { value: !0 });
function n6(e, t, r, o) {
  return o >= 125 && !(e > 250 && t > 250 && r > 250);
}
Zc.default = n6;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.combineFilters = void 0;
  var t = Zc;
  Object.defineProperty(e, "Default", { enumerable: !0, get: function() {
    return t.default;
  } });
  function r(o) {
    return !Array.isArray(o) || o.length === 0 ? null : function(s, u, f, c) {
      if (c === 0)
        return !1;
      for (var p = 0; p < o.length; p++)
        if (!o[p](s, u, f, c))
          return !1;
      return !0;
    };
  }
  e.combineFilters = r;
})(Ym);
var Av;
function Jm() {
  if (Av) return _a;
  Av = 1;
  var e = Ie && Ie.__createBinding || (Object.create ? function(m, A, O, $) {
    $ === void 0 && ($ = O), Object.defineProperty(m, $, { enumerable: !0, get: function() {
      return A[O];
    } });
  } : function(m, A, O, $) {
    $ === void 0 && ($ = O), m[$] = A[O];
  }), t = Ie && Ie.__setModuleDefault || (Object.create ? function(m, A) {
    Object.defineProperty(m, "default", { enumerable: !0, value: A });
  } : function(m, A) {
    m.default = A;
  }), r = Ie && Ie.__importStar || function(m) {
    if (m && m.__esModule) return m;
    var A = {};
    if (m != null) for (var O in m) O !== "default" && Object.hasOwnProperty.call(m, O) && e(A, m, O);
    return t(A, m), A;
  }, o = Ie && Ie.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  };
  Object.defineProperty(_a, "__esModule", { value: !0 });
  var s = io, u = o(iU()), f = r(ps), c = r(km), p = r(Km), g = r(Ym), y = zm, _ = (
    /** @class */
    function() {
      function m(A, O) {
        this._src = A, this.opts = y({}, O, m.DefaultOpts), this.opts.combinedFilter = g.combineFilters(this.opts.filters);
      }
      return m.from = function(A) {
        return new u.default(A);
      }, m.prototype._process = function(A, O) {
        var $ = O.quantizer, N = O.generator;
        return A.scaleDown(O), A.applyFilter(O.combinedFilter).then(function(R) {
          return $(R.data, O);
        }).then(function(R) {
          return s.Swatch.applyFilter(R, O.combinedFilter);
        }).then(function(R) {
          return Promise.resolve(N(R));
        });
      }, m.prototype.palette = function() {
        return this.swatches();
      }, m.prototype.swatches = function() {
        return this._palette;
      }, m.prototype.getPalette = function(A) {
        var O = this, $ = new this.opts.ImageClass(), N = $.load(this._src).then(function(R) {
          return O._process(R, O.opts);
        }).then(function(R) {
          return O._palette = R, $.remove(), R;
        }, function(R) {
          throw $.remove(), R;
        });
        return A && N.then(function(R) {
          return A(null, R);
        }, function(R) {
          return A(R);
        }), N;
      }, m.Builder = u.default, m.Quantizer = c, m.Generator = p, m.Filter = g, m.Util = f, m.Swatch = s.Swatch, m.DefaultOpts = {
        colorCount: 64,
        quality: 5,
        generator: p.Default,
        ImageClass: null,
        quantizer: c.MMCQ,
        filters: [g.Default]
      }, m;
    }()
  );
  return _a.default = _, _a;
}
var ep = {}, Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
Nu.ImageBase = void 0;
var i6 = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.scaleDown = function(t) {
      var r = this.getWidth(), o = this.getHeight(), s = 1;
      if (t.maxDimension > 0) {
        var u = Math.max(r, o);
        u > t.maxDimension && (s = t.maxDimension / u);
      } else
        s = 1 / t.quality;
      s < 1 && this.resize(r * s, o * s, s);
    }, e.prototype.applyFilter = function(t) {
      var r = this.getImageData();
      if (typeof t == "function")
        for (var o = r.data, s = o.length / 4, u = void 0, f = void 0, c = void 0, p = void 0, g = void 0, y = 0; y < s; y++)
          u = y * 4, f = o[u + 0], c = o[u + 1], p = o[u + 2], g = o[u + 3], t(f, c, p, g) || (o[u + 3] = 0);
      return Promise.resolve(r);
    }, e;
  }()
);
Nu.ImageBase = i6;
var lo = {}, nu = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
nu.exports;
(function(e, t) {
  (function(r) {
    var o = t && !t.nodeType && t, s = e && !e.nodeType && e, u = typeof Ie == "object" && Ie;
    (u.global === u || u.window === u || u.self === u) && (r = u);
    var f, c = 2147483647, p = 36, g = 1, y = 26, _ = 38, m = 700, A = 72, O = 128, $ = "-", N = /^xn--/, R = /[^\x20-\x7E]/, L = /[\x2E\u3002\uFF0E\uFF61]/g, D = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, X = p - g, V = Math.floor, ee = String.fromCharCode, he;
    function se(re) {
      throw new RangeError(D[re]);
    }
    function fe(re, oe) {
      for (var Te = re.length, Fe = []; Te--; )
        Fe[Te] = oe(re[Te]);
      return Fe;
    }
    function Ae(re, oe) {
      var Te = re.split("@"), Fe = "";
      Te.length > 1 && (Fe = Te[0] + "@", re = Te[1]), re = re.replace(L, ".");
      var qe = re.split("."), nt = fe(qe, oe).join(".");
      return Fe + nt;
    }
    function ke(re) {
      for (var oe = [], Te = 0, Fe = re.length, qe, nt; Te < Fe; )
        qe = re.charCodeAt(Te++), qe >= 55296 && qe <= 56319 && Te < Fe ? (nt = re.charCodeAt(Te++), (nt & 64512) == 56320 ? oe.push(((qe & 1023) << 10) + (nt & 1023) + 65536) : (oe.push(qe), Te--)) : oe.push(qe);
      return oe;
    }
    function M(re) {
      return fe(re, function(oe) {
        var Te = "";
        return oe > 65535 && (oe -= 65536, Te += ee(oe >>> 10 & 1023 | 55296), oe = 56320 | oe & 1023), Te += ee(oe), Te;
      }).join("");
    }
    function Q(re) {
      return re - 48 < 10 ? re - 22 : re - 65 < 26 ? re - 65 : re - 97 < 26 ? re - 97 : p;
    }
    function de(re, oe) {
      return re + 22 + 75 * (re < 26) - ((oe != 0) << 5);
    }
    function ae(re, oe, Te) {
      var Fe = 0;
      for (re = Te ? V(re / m) : re >> 1, re += V(re / oe); re > X * y >> 1; Fe += p)
        re = V(re / X);
      return V(Fe + (X + 1) * re / (re + _));
    }
    function ne(re) {
      var oe = [], Te = re.length, Fe, qe = 0, nt = O, it = A, pt, ut, gt, Yt, ze, vt, It, b, E;
      for (pt = re.lastIndexOf($), pt < 0 && (pt = 0), ut = 0; ut < pt; ++ut)
        re.charCodeAt(ut) >= 128 && se("not-basic"), oe.push(re.charCodeAt(ut));
      for (gt = pt > 0 ? pt + 1 : 0; gt < Te; ) {
        for (Yt = qe, ze = 1, vt = p; gt >= Te && se("invalid-input"), It = Q(re.charCodeAt(gt++)), (It >= p || It > V((c - qe) / ze)) && se("overflow"), qe += It * ze, b = vt <= it ? g : vt >= it + y ? y : vt - it, !(It < b); vt += p)
          E = p - b, ze > V(c / E) && se("overflow"), ze *= E;
        Fe = oe.length + 1, it = ae(qe - Yt, Fe, Yt == 0), V(qe / Fe) > c - nt && se("overflow"), nt += V(qe / Fe), qe %= Fe, oe.splice(qe++, 0, nt);
      }
      return M(oe);
    }
    function te(re) {
      var oe, Te, Fe, qe, nt, it, pt, ut, gt, Yt, ze, vt = [], It, b, E, P;
      for (re = ke(re), It = re.length, oe = O, Te = 0, nt = A, it = 0; it < It; ++it)
        ze = re[it], ze < 128 && vt.push(ee(ze));
      for (Fe = qe = vt.length, qe && vt.push($); Fe < It; ) {
        for (pt = c, it = 0; it < It; ++it)
          ze = re[it], ze >= oe && ze < pt && (pt = ze);
        for (b = Fe + 1, pt - oe > V((c - Te) / b) && se("overflow"), Te += (pt - oe) * b, oe = pt, it = 0; it < It; ++it)
          if (ze = re[it], ze < oe && ++Te > c && se("overflow"), ze == oe) {
            for (ut = Te, gt = p; Yt = gt <= nt ? g : gt >= nt + y ? y : gt - nt, !(ut < Yt); gt += p)
              P = ut - Yt, E = p - Yt, vt.push(
                ee(de(Yt + P % E, 0))
              ), ut = V(P / E);
            vt.push(ee(de(ut, 0))), nt = ae(Te, b, Fe == qe), Te = 0, ++Fe;
          }
        ++Te, ++oe;
      }
      return vt.join("");
    }
    function ce(re) {
      return Ae(re, function(oe) {
        return N.test(oe) ? ne(oe.slice(4).toLowerCase()) : oe;
      });
    }
    function Ze(re) {
      return Ae(re, function(oe) {
        return R.test(oe) ? "xn--" + te(oe) : oe;
      });
    }
    if (f = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.4.1",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: ke,
        encode: M
      },
      decode: ne,
      encode: te,
      toASCII: Ze,
      toUnicode: ce
    }, o && s)
      if (e.exports == o)
        s.exports = f;
      else
        for (he in f)
          f.hasOwnProperty(he) && (o[he] = f[he]);
    else
      r.punycode = f;
  })(Ie);
})(nu, nu.exports);
var o6 = nu.exports, s6 = Error, a6 = EvalError, u6 = RangeError, f6 = ReferenceError, Xm = SyntaxError, ys = TypeError, l6 = URIError, c6 = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), o = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
    return !1;
  var s = 42;
  t[r] = s;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var u = Object.getOwnPropertySymbols(t);
  if (u.length !== 1 || u[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var f = Object.getOwnPropertyDescriptor(t, r);
    if (f.value !== s || f.enumerable !== !0)
      return !1;
  }
  return !0;
}, xv = typeof Symbol < "u" && Symbol, p6 = c6, h6 = function() {
  return typeof xv != "function" || typeof Symbol != "function" || typeof xv("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : p6();
}, nl = {
  __proto__: null,
  foo: {}
}, d6 = Object, g6 = function() {
  return { __proto__: nl }.foo === nl.foo && !(nl instanceof d6);
}, v6 = "Function.prototype.bind called on incompatible ", y6 = Object.prototype.toString, _6 = Math.max, m6 = "[object Function]", $v = function(t, r) {
  for (var o = [], s = 0; s < t.length; s += 1)
    o[s] = t[s];
  for (var u = 0; u < r.length; u += 1)
    o[u + t.length] = r[u];
  return o;
}, b6 = function(t, r) {
  for (var o = [], s = r, u = 0; s < t.length; s += 1, u += 1)
    o[u] = t[s];
  return o;
}, w6 = function(e, t) {
  for (var r = "", o = 0; o < e.length; o += 1)
    r += e[o], o + 1 < e.length && (r += t);
  return r;
}, E6 = function(t) {
  var r = this;
  if (typeof r != "function" || y6.apply(r) !== m6)
    throw new TypeError(v6 + r);
  for (var o = b6(arguments, 1), s, u = function() {
    if (this instanceof s) {
      var y = r.apply(
        this,
        $v(o, arguments)
      );
      return Object(y) === y ? y : this;
    }
    return r.apply(
      t,
      $v(o, arguments)
    );
  }, f = _6(0, r.length - o.length), c = [], p = 0; p < f; p++)
    c[p] = "$" + p;
  if (s = Function("binder", "return function (" + w6(c, ",") + "){ return binder.apply(this,arguments); }")(u), r.prototype) {
    var g = function() {
    };
    g.prototype = r.prototype, s.prototype = new g(), g.prototype = null;
  }
  return s;
}, O6 = E6, tp = Function.prototype.bind || O6, S6 = Function.prototype.call, A6 = Object.prototype.hasOwnProperty, x6 = tp, $6 = x6.call(S6, A6), Le, T6 = s6, C6 = a6, N6 = u6, I6 = f6, eo = Xm, Qi = ys, D6 = l6, Qm = Function, il = function(e) {
  try {
    return Qm('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ci = Object.getOwnPropertyDescriptor;
if (ci)
  try {
    ci({}, "");
  } catch {
    ci = null;
  }
var ol = function() {
  throw new Qi();
}, P6 = ci ? function() {
  try {
    return arguments.callee, ol;
  } catch {
    try {
      return ci(arguments, "callee").get;
    } catch {
      return ol;
    }
  }
}() : ol, Ri = h6(), L6 = g6(), Tt = Object.getPrototypeOf || (L6 ? function(e) {
  return e.__proto__;
} : null), Wi = {}, M6 = typeof Uint8Array > "u" || !Tt ? Le : Tt(Uint8Array), pi = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? Le : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Le : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ri && Tt ? Tt([][Symbol.iterator]()) : Le,
  "%AsyncFromSyncIteratorPrototype%": Le,
  "%AsyncFunction%": Wi,
  "%AsyncGenerator%": Wi,
  "%AsyncGeneratorFunction%": Wi,
  "%AsyncIteratorPrototype%": Wi,
  "%Atomics%": typeof Atomics > "u" ? Le : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Le : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Le : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Le : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Le : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": T6,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": C6,
  "%Float32Array%": typeof Float32Array > "u" ? Le : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Le : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Le : FinalizationRegistry,
  "%Function%": Qm,
  "%GeneratorFunction%": Wi,
  "%Int8Array%": typeof Int8Array > "u" ? Le : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Le : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Le : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ri && Tt ? Tt(Tt([][Symbol.iterator]())) : Le,
  "%JSON%": typeof JSON == "object" ? JSON : Le,
  "%Map%": typeof Map > "u" ? Le : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ri || !Tt ? Le : Tt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Le : Promise,
  "%Proxy%": typeof Proxy > "u" ? Le : Proxy,
  "%RangeError%": N6,
  "%ReferenceError%": I6,
  "%Reflect%": typeof Reflect > "u" ? Le : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Le : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ri || !Tt ? Le : Tt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Le : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ri && Tt ? Tt(""[Symbol.iterator]()) : Le,
  "%Symbol%": Ri ? Symbol : Le,
  "%SyntaxError%": eo,
  "%ThrowTypeError%": P6,
  "%TypedArray%": M6,
  "%TypeError%": Qi,
  "%Uint8Array%": typeof Uint8Array > "u" ? Le : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Le : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Le : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Le : Uint32Array,
  "%URIError%": D6,
  "%WeakMap%": typeof WeakMap > "u" ? Le : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Le : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Le : WeakSet
};
if (Tt)
  try {
    null.error;
  } catch (e) {
    var R6 = Tt(Tt(e));
    pi["%Error.prototype%"] = R6;
  }
var F6 = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = il("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = il("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = il("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var o = e("%AsyncGeneratorFunction%");
    o && (r = o.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var s = e("%AsyncGenerator%");
    s && Tt && (r = Tt(s.prototype));
  }
  return pi[t] = r, r;
}, Tv = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, _s = tp, iu = $6, V6 = _s.call(Function.call, Array.prototype.concat), B6 = _s.call(Function.apply, Array.prototype.splice), Cv = _s.call(Function.call, String.prototype.replace), ou = _s.call(Function.call, String.prototype.slice), U6 = _s.call(Function.call, RegExp.prototype.exec), H6 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, W6 = /\\(\\)?/g, j6 = function(t) {
  var r = ou(t, 0, 1), o = ou(t, -1);
  if (r === "%" && o !== "%")
    throw new eo("invalid intrinsic syntax, expected closing `%`");
  if (o === "%" && r !== "%")
    throw new eo("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Cv(t, H6, function(u, f, c, p) {
    s[s.length] = c ? Cv(p, W6, "$1") : f || u;
  }), s;
}, k6 = function(t, r) {
  var o = t, s;
  if (iu(Tv, o) && (s = Tv[o], o = "%" + s[0] + "%"), iu(pi, o)) {
    var u = pi[o];
    if (u === Wi && (u = F6(o)), typeof u > "u" && !r)
      throw new Qi("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: o,
      value: u
    };
  }
  throw new eo("intrinsic " + t + " does not exist!");
}, co = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Qi("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Qi('"allowMissing" argument must be a boolean');
  if (U6(/^%?[^%]*%?$/, t) === null)
    throw new eo("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var o = j6(t), s = o.length > 0 ? o[0] : "", u = k6("%" + s + "%", r), f = u.name, c = u.value, p = !1, g = u.alias;
  g && (s = g[0], B6(o, V6([0, 1], g)));
  for (var y = 1, _ = !0; y < o.length; y += 1) {
    var m = o[y], A = ou(m, 0, 1), O = ou(m, -1);
    if ((A === '"' || A === "'" || A === "`" || O === '"' || O === "'" || O === "`") && A !== O)
      throw new eo("property names with quotes must have matching quotes");
    if ((m === "constructor" || !_) && (p = !0), s += "." + m, f = "%" + s + "%", iu(pi, f))
      c = pi[f];
    else if (c != null) {
      if (!(m in c)) {
        if (!r)
          throw new Qi("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ci && y + 1 >= o.length) {
        var $ = ci(c, m);
        _ = !!$, _ && "get" in $ && !("originalValue" in $.get) ? c = $.get : c = c[m];
      } else
        _ = iu(c, m), c = c[m];
      _ && !p && (pi[f] = c);
    }
  }
  return c;
}, Zm = { exports: {} }, sl, Nv;
function rp() {
  if (Nv) return sl;
  Nv = 1;
  var e = co, t = e("%Object.defineProperty%", !0) || !1;
  if (t)
    try {
      t({}, "a", { value: 1 });
    } catch {
      t = !1;
    }
  return sl = t, sl;
}
var G6 = co, Fa = G6("%Object.getOwnPropertyDescriptor%", !0);
if (Fa)
  try {
    Fa([], "length");
  } catch {
    Fa = null;
  }
var eb = Fa, Iv = rp(), K6 = Xm, Fi = ys, Dv = eb, q6 = function(t, r, o) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new Fi("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Fi("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Fi("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Fi("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Fi("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Fi("`loose`, if provided, must be a boolean");
  var s = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, f = arguments.length > 5 ? arguments[5] : null, c = arguments.length > 6 ? arguments[6] : !1, p = !!Dv && Dv(t, r);
  if (Iv)
    Iv(t, r, {
      configurable: f === null && p ? p.configurable : !f,
      enumerable: s === null && p ? p.enumerable : !s,
      value: o,
      writable: u === null && p ? p.writable : !u
    });
  else if (c || !s && !u && !f)
    t[r] = o;
  else
    throw new K6("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Bl = rp(), tb = function() {
  return !!Bl;
};
tb.hasArrayLengthDefineBug = function() {
  if (!Bl)
    return null;
  try {
    return Bl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var z6 = tb, Y6 = co, Pv = q6, J6 = z6(), Lv = eb, Mv = ys, X6 = Y6("%Math.floor%"), Q6 = function(t, r) {
  if (typeof t != "function")
    throw new Mv("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || X6(r) !== r)
    throw new Mv("`length` must be a positive 32-bit integer");
  var o = arguments.length > 2 && !!arguments[2], s = !0, u = !0;
  if ("length" in t && Lv) {
    var f = Lv(t, "length");
    f && !f.configurable && (s = !1), f && !f.writable && (u = !1);
  }
  return (s || u || !o) && (J6 ? Pv(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : Pv(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = tp, r = co, o = Q6, s = ys, u = r("%Function.prototype.apply%"), f = r("%Function.prototype.call%"), c = r("%Reflect.apply%", !0) || t.call(f, u), p = rp(), g = r("%Math.max%");
  e.exports = function(m) {
    if (typeof m != "function")
      throw new s("a function is required");
    var A = c(t, f, arguments);
    return o(
      A,
      1 + g(0, m.length - (arguments.length - 1)),
      !0
    );
  };
  var y = function() {
    return c(t, u, arguments);
  };
  p ? p(e.exports, "apply", { value: y }) : e.exports.apply = y;
})(Zm);
var Z6 = Zm.exports, rb = co, nb = Z6, e8 = nb(rb("String.prototype.indexOf")), t8 = function(t, r) {
  var o = rb(t, !!r);
  return typeof o == "function" && e8(t, ".prototype.") > -1 ? nb(o) : o;
};
const r8 = {}, n8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r8
}, Symbol.toStringTag, { value: "Module" })), i8 = /* @__PURE__ */ VC(n8);
var np = typeof Map == "function" && Map.prototype, al = Object.getOwnPropertyDescriptor && np ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, su = np && al && typeof al.get == "function" ? al.get : null, Rv = np && Map.prototype.forEach, ip = typeof Set == "function" && Set.prototype, ul = Object.getOwnPropertyDescriptor && ip ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, au = ip && ul && typeof ul.get == "function" ? ul.get : null, Fv = ip && Set.prototype.forEach, o8 = typeof WeakMap == "function" && WeakMap.prototype, Ko = o8 ? WeakMap.prototype.has : null, s8 = typeof WeakSet == "function" && WeakSet.prototype, qo = s8 ? WeakSet.prototype.has : null, a8 = typeof WeakRef == "function" && WeakRef.prototype, Vv = a8 ? WeakRef.prototype.deref : null, u8 = Boolean.prototype.valueOf, f8 = Object.prototype.toString, l8 = Function.prototype.toString, c8 = String.prototype.match, op = String.prototype.slice, Vn = String.prototype.replace, p8 = String.prototype.toUpperCase, Bv = String.prototype.toLowerCase, ib = RegExp.prototype.test, Uv = Array.prototype.concat, Wr = Array.prototype.join, h8 = Array.prototype.slice, Hv = Math.floor, Ul = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, fl = Object.getOwnPropertySymbols, Hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, to = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ut = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === to || !0) ? Symbol.toStringTag : null, ob = Object.prototype.propertyIsEnumerable, Wv = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function jv(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || ib.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var o = e < 0 ? -Hv(-e) : Hv(e);
    if (o !== e) {
      var s = String(o), u = op.call(t, s.length + 1);
      return Vn.call(s, r, "$&_") + "." + Vn.call(Vn.call(u, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Vn.call(t, r, "$&_");
}
var Wl = i8, kv = Wl.custom, Gv = ab(kv) ? kv : null, d8 = function e(t, r, o, s) {
  var u = r || {};
  if (Mn(u, "quoteStyle") && u.quoteStyle !== "single" && u.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Mn(u, "maxStringLength") && (typeof u.maxStringLength == "number" ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : u.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var f = Mn(u, "customInspect") ? u.customInspect : !0;
  if (typeof f != "boolean" && f !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Mn(u, "indent") && u.indent !== null && u.indent !== "	" && !(parseInt(u.indent, 10) === u.indent && u.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Mn(u, "numericSeparator") && typeof u.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var c = u.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return fb(t, u);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var p = String(t);
    return c ? jv(t, p) : p;
  }
  if (typeof t == "bigint") {
    var g = String(t) + "n";
    return c ? jv(t, g) : g;
  }
  var y = typeof u.depth > "u" ? 5 : u.depth;
  if (typeof o > "u" && (o = 0), o >= y && y > 0 && typeof t == "object")
    return jl(t) ? "[Array]" : "[Object]";
  var _ = D8(u, o);
  if (typeof s > "u")
    s = [];
  else if (ub(s, t) >= 0)
    return "[Circular]";
  function m(Q, de, ae) {
    if (de && (s = h8.call(s), s.push(de)), ae) {
      var ne = {
        depth: u.depth
      };
      return Mn(u, "quoteStyle") && (ne.quoteStyle = u.quoteStyle), e(Q, ne, o + 1, s);
    }
    return e(Q, u, o + 1, s);
  }
  if (typeof t == "function" && !Kv(t)) {
    var A = O8(t), O = wa(t, m);
    return "[Function" + (A ? ": " + A : " (anonymous)") + "]" + (O.length > 0 ? " { " + Wr.call(O, ", ") + " }" : "");
  }
  if (ab(t)) {
    var $ = to ? Vn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Hl.call(t);
    return typeof t == "object" && !to ? Ro($) : $;
  }
  if (C8(t)) {
    for (var N = "<" + Bv.call(String(t.nodeName)), R = t.attributes || [], L = 0; L < R.length; L++)
      N += " " + R[L].name + "=" + sb(g8(R[L].value), "double", u);
    return N += ">", t.childNodes && t.childNodes.length && (N += "..."), N += "</" + Bv.call(String(t.nodeName)) + ">", N;
  }
  if (jl(t)) {
    if (t.length === 0)
      return "[]";
    var D = wa(t, m);
    return _ && !I8(D) ? "[" + kl(D, _) + "]" : "[ " + Wr.call(D, ", ") + " ]";
  }
  if (y8(t)) {
    var X = wa(t, m);
    return !("cause" in Error.prototype) && "cause" in t && !ob.call(t, "cause") ? "{ [" + String(t) + "] " + Wr.call(Uv.call("[cause]: " + m(t.cause), X), ", ") + " }" : X.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Wr.call(X, ", ") + " }";
  }
  if (typeof t == "object" && f) {
    if (Gv && typeof t[Gv] == "function" && Wl)
      return Wl(t, { depth: y - o });
    if (f !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (S8(t)) {
    var V = [];
    return Rv && Rv.call(t, function(Q, de) {
      V.push(m(de, t, !0) + " => " + m(Q, t));
    }), qv("Map", su.call(t), V, _);
  }
  if ($8(t)) {
    var ee = [];
    return Fv && Fv.call(t, function(Q) {
      ee.push(m(Q, t));
    }), qv("Set", au.call(t), ee, _);
  }
  if (A8(t))
    return ll("WeakMap");
  if (T8(t))
    return ll("WeakSet");
  if (x8(t))
    return ll("WeakRef");
  if (m8(t))
    return Ro(m(Number(t)));
  if (w8(t))
    return Ro(m(Ul.call(t)));
  if (b8(t))
    return Ro(u8.call(t));
  if (_8(t))
    return Ro(m(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Ie < "u" && t === Ie)
    return "{ [object globalThis] }";
  if (!v8(t) && !Kv(t)) {
    var he = wa(t, m), se = Wv ? Wv(t) === Object.prototype : t instanceof Object || t.constructor === Object, fe = t instanceof Object ? "" : "null prototype", Ae = !se && Ut && Object(t) === t && Ut in t ? op.call(kn(t), 8, -1) : fe ? "Object" : "", ke = se || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", M = ke + (Ae || fe ? "[" + Wr.call(Uv.call([], Ae || [], fe || []), ": ") + "] " : "");
    return he.length === 0 ? M + "{}" : _ ? M + "{" + kl(he, _) + "}" : M + "{ " + Wr.call(he, ", ") + " }";
  }
  return String(t);
};
function sb(e, t, r) {
  var o = (r.quoteStyle || t) === "double" ? '"' : "'";
  return o + e + o;
}
function g8(e) {
  return Vn.call(String(e), /"/g, "&quot;");
}
function jl(e) {
  return kn(e) === "[object Array]" && (!Ut || !(typeof e == "object" && Ut in e));
}
function v8(e) {
  return kn(e) === "[object Date]" && (!Ut || !(typeof e == "object" && Ut in e));
}
function Kv(e) {
  return kn(e) === "[object RegExp]" && (!Ut || !(typeof e == "object" && Ut in e));
}
function y8(e) {
  return kn(e) === "[object Error]" && (!Ut || !(typeof e == "object" && Ut in e));
}
function _8(e) {
  return kn(e) === "[object String]" && (!Ut || !(typeof e == "object" && Ut in e));
}
function m8(e) {
  return kn(e) === "[object Number]" && (!Ut || !(typeof e == "object" && Ut in e));
}
function b8(e) {
  return kn(e) === "[object Boolean]" && (!Ut || !(typeof e == "object" && Ut in e));
}
function ab(e) {
  if (to)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Hl)
    return !1;
  try {
    return Hl.call(e), !0;
  } catch {
  }
  return !1;
}
function w8(e) {
  if (!e || typeof e != "object" || !Ul)
    return !1;
  try {
    return Ul.call(e), !0;
  } catch {
  }
  return !1;
}
var E8 = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Mn(e, t) {
  return E8.call(e, t);
}
function kn(e) {
  return f8.call(e);
}
function O8(e) {
  if (e.name)
    return e.name;
  var t = c8.call(l8.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function ub(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, o = e.length; r < o; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function S8(e) {
  if (!su || !e || typeof e != "object")
    return !1;
  try {
    su.call(e);
    try {
      au.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function A8(e) {
  if (!Ko || !e || typeof e != "object")
    return !1;
  try {
    Ko.call(e, Ko);
    try {
      qo.call(e, qo);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function x8(e) {
  if (!Vv || !e || typeof e != "object")
    return !1;
  try {
    return Vv.call(e), !0;
  } catch {
  }
  return !1;
}
function $8(e) {
  if (!au || !e || typeof e != "object")
    return !1;
  try {
    au.call(e);
    try {
      su.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function T8(e) {
  if (!qo || !e || typeof e != "object")
    return !1;
  try {
    qo.call(e, qo);
    try {
      Ko.call(e, Ko);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function C8(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function fb(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, o = "... " + r + " more character" + (r > 1 ? "s" : "");
    return fb(op.call(e, 0, t.maxStringLength), t) + o;
  }
  var s = Vn.call(Vn.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, N8);
  return sb(s, "single", t);
}
function N8(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + p8.call(t.toString(16));
}
function Ro(e) {
  return "Object(" + e + ")";
}
function ll(e) {
  return e + " { ? }";
}
function qv(e, t, r, o) {
  var s = o ? kl(r, o) : Wr.call(r, ", ");
  return e + " (" + t + ") {" + s + "}";
}
function I8(e) {
  for (var t = 0; t < e.length; t++)
    if (ub(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function D8(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Wr.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Wr.call(Array(t + 1), r)
  };
}
function kl(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Wr.call(e, "," + r) + `
` + t.prev;
}
function wa(e, t) {
  var r = jl(e), o = [];
  if (r) {
    o.length = e.length;
    for (var s = 0; s < e.length; s++)
      o[s] = Mn(e, s) ? t(e[s], e) : "";
  }
  var u = typeof fl == "function" ? fl(e) : [], f;
  if (to) {
    f = {};
    for (var c = 0; c < u.length; c++)
      f["$" + u[c]] = u[c];
  }
  for (var p in e)
    Mn(e, p) && (r && String(Number(p)) === p && p < e.length || to && f["$" + p] instanceof Symbol || (ib.call(/[^\w$]/, p) ? o.push(t(p, e) + ": " + t(e[p], e)) : o.push(p + ": " + t(e[p], e))));
  if (typeof fl == "function")
    for (var g = 0; g < u.length; g++)
      ob.call(e, u[g]) && o.push("[" + t(u[g]) + "]: " + t(e[u[g]], e));
  return o;
}
var lb = co, po = t8, P8 = d8, L8 = ys, Ea = lb("%WeakMap%", !0), Oa = lb("%Map%", !0), M8 = po("WeakMap.prototype.get", !0), R8 = po("WeakMap.prototype.set", !0), F8 = po("WeakMap.prototype.has", !0), V8 = po("Map.prototype.get", !0), B8 = po("Map.prototype.set", !0), U8 = po("Map.prototype.has", !0), sp = function(e, t) {
  for (var r = e, o; (o = r.next) !== null; r = o)
    if (o.key === t)
      return r.next = o.next, o.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = o, o;
}, H8 = function(e, t) {
  var r = sp(e, t);
  return r && r.value;
}, W8 = function(e, t, r) {
  var o = sp(e, t);
  o ? o.value = r : e.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, j8 = function(e, t) {
  return !!sp(e, t);
}, k8 = function() {
  var t, r, o, s = {
    assert: function(u) {
      if (!s.has(u))
        throw new L8("Side channel does not contain " + P8(u));
    },
    get: function(u) {
      if (Ea && u && (typeof u == "object" || typeof u == "function")) {
        if (t)
          return M8(t, u);
      } else if (Oa) {
        if (r)
          return V8(r, u);
      } else if (o)
        return H8(o, u);
    },
    has: function(u) {
      if (Ea && u && (typeof u == "object" || typeof u == "function")) {
        if (t)
          return F8(t, u);
      } else if (Oa) {
        if (r)
          return U8(r, u);
      } else if (o)
        return j8(o, u);
      return !1;
    },
    set: function(u, f) {
      Ea && u && (typeof u == "object" || typeof u == "function") ? (t || (t = new Ea()), R8(t, u, f)) : Oa ? (r || (r = new Oa()), B8(r, u, f)) : (o || (o = { key: {}, next: null }), W8(o, u, f));
    }
  };
  return s;
}, G8 = String.prototype.replace, K8 = /%20/g, cl = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, ap = {
  default: cl.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return G8.call(e, K8, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: cl.RFC1738,
  RFC3986: cl.RFC3986
}, q8 = ap, pl = Object.prototype.hasOwnProperty, si = Array.isArray, Vr = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), z8 = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), o = r.obj[r.prop];
    if (si(o)) {
      for (var s = [], u = 0; u < o.length; ++u)
        typeof o[u] < "u" && s.push(o[u]);
      r.obj[r.prop] = s;
    }
  }
}, cb = function(t, r) {
  for (var o = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = 0; s < t.length; ++s)
    typeof t[s] < "u" && (o[s] = t[s]);
  return o;
}, Y8 = function e(t, r, o) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (si(t))
      t.push(r);
    else if (t && typeof t == "object")
      (o && (o.plainObjects || o.allowPrototypes) || !pl.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var s = t;
  return si(t) && !si(r) && (s = cb(t, o)), si(t) && si(r) ? (r.forEach(function(u, f) {
    if (pl.call(t, f)) {
      var c = t[f];
      c && typeof c == "object" && u && typeof u == "object" ? t[f] = e(c, u, o) : t.push(u);
    } else
      t[f] = u;
  }), t) : Object.keys(r).reduce(function(u, f) {
    var c = r[f];
    return pl.call(u, f) ? u[f] = e(u[f], c, o) : u[f] = c, u;
  }, s);
}, J8 = function(t, r) {
  return Object.keys(r).reduce(function(o, s) {
    return o[s] = r[s], o;
  }, t);
}, X8 = function(e, t, r) {
  var o = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return o.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(o);
  } catch {
    return o;
  }
}, hl = 1024, Q8 = function(t, r, o, s, u) {
  if (t.length === 0)
    return t;
  var f = t;
  if (typeof t == "symbol" ? f = Symbol.prototype.toString.call(t) : typeof t != "string" && (f = String(t)), o === "iso-8859-1")
    return escape(f).replace(/%u[0-9a-f]{4}/gi, function(A) {
      return "%26%23" + parseInt(A.slice(2), 16) + "%3B";
    });
  for (var c = "", p = 0; p < f.length; p += hl) {
    for (var g = f.length >= hl ? f.slice(p, p + hl) : f, y = [], _ = 0; _ < g.length; ++_) {
      var m = g.charCodeAt(_);
      if (m === 45 || m === 46 || m === 95 || m === 126 || m >= 48 && m <= 57 || m >= 65 && m <= 90 || m >= 97 && m <= 122 || u === q8.RFC1738 && (m === 40 || m === 41)) {
        y[y.length] = g.charAt(_);
        continue;
      }
      if (m < 128) {
        y[y.length] = Vr[m];
        continue;
      }
      if (m < 2048) {
        y[y.length] = Vr[192 | m >> 6] + Vr[128 | m & 63];
        continue;
      }
      if (m < 55296 || m >= 57344) {
        y[y.length] = Vr[224 | m >> 12] + Vr[128 | m >> 6 & 63] + Vr[128 | m & 63];
        continue;
      }
      _ += 1, m = 65536 + ((m & 1023) << 10 | g.charCodeAt(_) & 1023), y[y.length] = Vr[240 | m >> 18] + Vr[128 | m >> 12 & 63] + Vr[128 | m >> 6 & 63] + Vr[128 | m & 63];
    }
    c += y.join("");
  }
  return c;
}, Z8 = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], o = [], s = 0; s < r.length; ++s)
    for (var u = r[s], f = u.obj[u.prop], c = Object.keys(f), p = 0; p < c.length; ++p) {
      var g = c[p], y = f[g];
      typeof y == "object" && y !== null && o.indexOf(y) === -1 && (r.push({ obj: f, prop: g }), o.push(y));
    }
  return z8(r), t;
}, e4 = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, t4 = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, r4 = function(t, r) {
  return [].concat(t, r);
}, n4 = function(t, r) {
  if (si(t)) {
    for (var o = [], s = 0; s < t.length; s += 1)
      o.push(r(t[s]));
    return o;
  }
  return r(t);
}, pb = {
  arrayToObject: cb,
  assign: J8,
  combine: r4,
  compact: Z8,
  decode: X8,
  encode: Q8,
  isBuffer: t4,
  isRegExp: e4,
  maybeMap: n4,
  merge: Y8
}, hb = k8, Va = pb, zo = ap, i4 = Object.prototype.hasOwnProperty, db = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, Ur = Array.isArray, o4 = Array.prototype.push, gb = function(e, t) {
  o4.apply(e, Ur(t) ? t : [t]);
}, s4 = Date.prototype.toISOString, zv = zo.default, Et = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Va.encode,
  encodeValuesOnly: !1,
  format: zv,
  formatter: zo.formatters[zv],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return s4.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, a4 = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, dl = {}, u4 = function e(t, r, o, s, u, f, c, p, g, y, _, m, A, O, $, N, R, L) {
  for (var D = t, X = L, V = 0, ee = !1; (X = X.get(dl)) !== void 0 && !ee; ) {
    var he = X.get(t);
    if (V += 1, typeof he < "u") {
      if (he === V)
        throw new RangeError("Cyclic object value");
      ee = !0;
    }
    typeof X.get(dl) > "u" && (V = 0);
  }
  if (typeof y == "function" ? D = y(r, D) : D instanceof Date ? D = A(D) : o === "comma" && Ur(D) && (D = Va.maybeMap(D, function(re) {
    return re instanceof Date ? A(re) : re;
  })), D === null) {
    if (f)
      return g && !N ? g(r, Et.encoder, R, "key", O) : r;
    D = "";
  }
  if (a4(D) || Va.isBuffer(D)) {
    if (g) {
      var se = N ? r : g(r, Et.encoder, R, "key", O);
      return [$(se) + "=" + $(g(D, Et.encoder, R, "value", O))];
    }
    return [$(r) + "=" + $(String(D))];
  }
  var fe = [];
  if (typeof D > "u")
    return fe;
  var Ae;
  if (o === "comma" && Ur(D))
    N && g && (D = Va.maybeMap(D, g)), Ae = [{ value: D.length > 0 ? D.join(",") || null : void 0 }];
  else if (Ur(y))
    Ae = y;
  else {
    var ke = Object.keys(D);
    Ae = _ ? ke.sort(_) : ke;
  }
  var M = p ? r.replace(/\./g, "%2E") : r, Q = s && Ur(D) && D.length === 1 ? M + "[]" : M;
  if (u && Ur(D) && D.length === 0)
    return Q + "[]";
  for (var de = 0; de < Ae.length; ++de) {
    var ae = Ae[de], ne = typeof ae == "object" && typeof ae.value < "u" ? ae.value : D[ae];
    if (!(c && ne === null)) {
      var te = m && p ? ae.replace(/\./g, "%2E") : ae, ce = Ur(D) ? typeof o == "function" ? o(Q, te) : Q : Q + (m ? "." + te : "[" + te + "]");
      L.set(t, V);
      var Ze = hb();
      Ze.set(dl, L), gb(fe, e(
        ne,
        ce,
        o,
        s,
        u,
        f,
        c,
        p,
        o === "comma" && N && Ur(D) ? null : g,
        y,
        _,
        m,
        A,
        O,
        $,
        N,
        R,
        Ze
      ));
    }
  }
  return fe;
}, f4 = function(t) {
  if (!t)
    return Et;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || Et.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var o = zo.default;
  if (typeof t.format < "u") {
    if (!i4.call(zo.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    o = t.format;
  }
  var s = zo.formatters[o], u = Et.filter;
  (typeof t.filter == "function" || Ur(t.filter)) && (u = t.filter);
  var f;
  if (t.arrayFormat in db ? f = t.arrayFormat : "indices" in t ? f = t.indices ? "indices" : "repeat" : f = Et.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : Et.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Et.addQueryPrefix,
    allowDots: c,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : Et.allowEmptyArrays,
    arrayFormat: f,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Et.charsetSentinel,
    commaRoundTrip: t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? Et.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : Et.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : Et.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : Et.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Et.encodeValuesOnly,
    filter: u,
    format: o,
    formatter: s,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Et.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Et.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Et.strictNullHandling
  };
}, l4 = function(e, t) {
  var r = e, o = f4(t), s, u;
  typeof o.filter == "function" ? (u = o.filter, r = u("", r)) : Ur(o.filter) && (u = o.filter, s = u);
  var f = [];
  if (typeof r != "object" || r === null)
    return "";
  var c = db[o.arrayFormat], p = c === "comma" && o.commaRoundTrip;
  s || (s = Object.keys(r)), o.sort && s.sort(o.sort);
  for (var g = hb(), y = 0; y < s.length; ++y) {
    var _ = s[y];
    o.skipNulls && r[_] === null || gb(f, u4(
      r[_],
      _,
      c,
      p,
      o.allowEmptyArrays,
      o.strictNullHandling,
      o.skipNulls,
      o.encodeDotInKeys,
      o.encode ? o.encoder : null,
      o.filter,
      o.sort,
      o.allowDots,
      o.serializeDate,
      o.format,
      o.formatter,
      o.encodeValuesOnly,
      o.charset,
      g
    ));
  }
  var m = f.join(o.delimiter), A = o.addQueryPrefix === !0 ? "?" : "";
  return o.charsetSentinel && (o.charset === "iso-8859-1" ? A += "utf8=%26%2310003%3B&" : A += "utf8=%E2%9C%93&"), m.length > 0 ? A + m : "";
}, ro = pb, Gl = Object.prototype.hasOwnProperty, c4 = Array.isArray, lt = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: ro.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1
}, p4 = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, vb = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, h4 = "utf8=%26%2310003%3B", d4 = "utf8=%E2%9C%93", g4 = function(t, r) {
  var o = { __proto__: null }, s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  s = s.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var u = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, f = s.split(r.delimiter, u), c = -1, p, g = r.charset;
  if (r.charsetSentinel)
    for (p = 0; p < f.length; ++p)
      f[p].indexOf("utf8=") === 0 && (f[p] === d4 ? g = "utf-8" : f[p] === h4 && (g = "iso-8859-1"), c = p, p = f.length);
  for (p = 0; p < f.length; ++p)
    if (p !== c) {
      var y = f[p], _ = y.indexOf("]="), m = _ === -1 ? y.indexOf("=") : _ + 1, A, O;
      m === -1 ? (A = r.decoder(y, lt.decoder, g, "key"), O = r.strictNullHandling ? null : "") : (A = r.decoder(y.slice(0, m), lt.decoder, g, "key"), O = ro.maybeMap(
        vb(y.slice(m + 1), r),
        function(N) {
          return r.decoder(N, lt.decoder, g, "value");
        }
      )), O && r.interpretNumericEntities && g === "iso-8859-1" && (O = p4(O)), y.indexOf("[]=") > -1 && (O = c4(O) ? [O] : O);
      var $ = Gl.call(o, A);
      $ && r.duplicates === "combine" ? o[A] = ro.combine(o[A], O) : (!$ || r.duplicates === "last") && (o[A] = O);
    }
  return o;
}, v4 = function(e, t, r, o) {
  for (var s = o ? t : vb(t, r), u = e.length - 1; u >= 0; --u) {
    var f, c = e[u];
    if (c === "[]" && r.parseArrays)
      f = r.allowEmptyArrays && (s === "" || r.strictNullHandling && s === null) ? [] : [].concat(s);
    else {
      f = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var p = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c, g = r.decodeDotInKeys ? p.replace(/%2E/g, ".") : p, y = parseInt(g, 10);
      !r.parseArrays && g === "" ? f = { 0: s } : !isNaN(y) && c !== g && String(y) === g && y >= 0 && r.parseArrays && y <= r.arrayLimit ? (f = [], f[y] = s) : g !== "__proto__" && (f[g] = s);
    }
    s = f;
  }
  return s;
}, y4 = function(t, r, o, s) {
  if (t) {
    var u = o.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, f = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, p = o.depth > 0 && f.exec(u), g = p ? u.slice(0, p.index) : u, y = [];
    if (g) {
      if (!o.plainObjects && Gl.call(Object.prototype, g) && !o.allowPrototypes)
        return;
      y.push(g);
    }
    for (var _ = 0; o.depth > 0 && (p = c.exec(u)) !== null && _ < o.depth; ) {
      if (_ += 1, !o.plainObjects && Gl.call(Object.prototype, p[1].slice(1, -1)) && !o.allowPrototypes)
        return;
      y.push(p[1]);
    }
    if (p) {
      if (o.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + o.depth + " and strictDepth is true");
      y.push("[" + u.slice(p.index) + "]");
    }
    return v4(y, r, o, s);
  }
}, _4 = function(t) {
  if (!t)
    return lt;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? lt.charset : t.charset, o = typeof t.duplicates > "u" ? lt.duplicates : t.duplicates;
  if (o !== "combine" && o !== "first" && o !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var s = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : lt.allowDots : !!t.allowDots;
  return {
    allowDots: s,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : lt.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : lt.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : lt.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : lt.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : lt.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : lt.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : lt.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : lt.decoder,
    delimiter: typeof t.delimiter == "string" || ro.isRegExp(t.delimiter) ? t.delimiter : lt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : lt.depth,
    duplicates: o,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : lt.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : lt.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : lt.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : lt.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : lt.strictNullHandling
  };
}, m4 = function(e, t) {
  var r = _4(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var o = typeof e == "string" ? g4(e, r) : e, s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, u = Object.keys(o), f = 0; f < u.length; ++f) {
    var c = u[f], p = y4(c, o[c], r, typeof e == "string");
    s = ro.merge(s, p, r);
  }
  return r.allowSparse === !0 ? s : ro.compact(s);
}, b4 = l4, w4 = m4, E4 = ap, O4 = {
  formats: E4,
  parse: w4,
  stringify: b4
}, S4 = o6;
function Sr() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var A4 = /^([a-z0-9.+-]+:)/i, x4 = /:[0-9]*$/, $4 = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, T4 = [
  "<",
  ">",
  '"',
  "`",
  " ",
  "\r",
  `
`,
  "	"
], C4 = [
  "{",
  "}",
  "|",
  "\\",
  "^",
  "`"
].concat(T4), Kl = ["'"].concat(C4), Yv = [
  "%",
  "/",
  "?",
  ";",
  "#"
].concat(Kl), Jv = [
  "/",
  "?",
  "#"
], N4 = 255, Xv = /^[+a-z0-9A-Z_-]{0,63}$/, I4 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, D4 = {
  javascript: !0,
  "javascript:": !0
}, ql = {
  javascript: !0,
  "javascript:": !0
}, Zi = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, zl = O4;
function ms(e, t, r) {
  if (e && typeof e == "object" && e instanceof Sr)
    return e;
  var o = new Sr();
  return o.parse(e, t, r), o;
}
Sr.prototype.parse = function(e, t, r) {
  if (typeof e != "string")
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var o = e.indexOf("?"), s = o !== -1 && o < e.indexOf("#") ? "?" : "#", u = e.split(s), f = /\\/g;
  u[0] = u[0].replace(f, "/"), e = u.join(s);
  var c = e;
  if (c = c.trim(), !r && e.split("#").length === 1) {
    var p = $4.exec(c);
    if (p)
      return this.path = c, this.href = c, this.pathname = p[1], p[2] ? (this.search = p[2], t ? this.query = zl.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var g = A4.exec(c);
  if (g) {
    g = g[0];
    var y = g.toLowerCase();
    this.protocol = y, c = c.substr(g.length);
  }
  if (r || g || c.match(/^\/\/[^@/]+@[^@/]+/)) {
    var _ = c.substr(0, 2) === "//";
    _ && !(g && ql[g]) && (c = c.substr(2), this.slashes = !0);
  }
  if (!ql[g] && (_ || g && !Zi[g])) {
    for (var m = -1, A = 0; A < Jv.length; A++) {
      var O = c.indexOf(Jv[A]);
      O !== -1 && (m === -1 || O < m) && (m = O);
    }
    var $, N;
    m === -1 ? N = c.lastIndexOf("@") : N = c.lastIndexOf("@", m), N !== -1 && ($ = c.slice(0, N), c = c.slice(N + 1), this.auth = decodeURIComponent($)), m = -1;
    for (var A = 0; A < Yv.length; A++) {
      var O = c.indexOf(Yv[A]);
      O !== -1 && (m === -1 || O < m) && (m = O);
    }
    m === -1 && (m = c.length), this.host = c.slice(0, m), c = c.slice(m), this.parseHost(), this.hostname = this.hostname || "";
    var R = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!R)
      for (var L = this.hostname.split(/\./), A = 0, D = L.length; A < D; A++) {
        var X = L[A];
        if (X && !X.match(Xv)) {
          for (var V = "", ee = 0, he = X.length; ee < he; ee++)
            X.charCodeAt(ee) > 127 ? V += "x" : V += X[ee];
          if (!V.match(Xv)) {
            var se = L.slice(0, A), fe = L.slice(A + 1), Ae = X.match(I4);
            Ae && (se.push(Ae[1]), fe.unshift(Ae[2])), fe.length && (c = "/" + fe.join(".") + c), this.hostname = se.join(".");
            break;
          }
        }
      }
    this.hostname.length > N4 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), R || (this.hostname = S4.toASCII(this.hostname));
    var ke = this.port ? ":" + this.port : "", M = this.hostname || "";
    this.host = M + ke, this.href += this.host, R && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), c[0] !== "/" && (c = "/" + c));
  }
  if (!D4[y])
    for (var A = 0, D = Kl.length; A < D; A++) {
      var Q = Kl[A];
      if (c.indexOf(Q) !== -1) {
        var de = encodeURIComponent(Q);
        de === Q && (de = escape(Q)), c = c.split(Q).join(de);
      }
    }
  var ae = c.indexOf("#");
  ae !== -1 && (this.hash = c.substr(ae), c = c.slice(0, ae));
  var ne = c.indexOf("?");
  if (ne !== -1 ? (this.search = c.substr(ne), this.query = c.substr(ne + 1), t && (this.query = zl.parse(this.query)), c = c.slice(0, ne)) : t && (this.search = "", this.query = {}), c && (this.pathname = c), Zi[y] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var ke = this.pathname || "", te = this.search || "";
    this.path = ke + te;
  }
  return this.href = this.format(), this;
};
function P4(e) {
  return typeof e == "string" && (e = ms(e)), e instanceof Sr ? e.format() : Sr.prototype.format.call(e);
}
Sr.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", r = this.pathname || "", o = this.hash || "", s = !1, u = "";
  this.host ? s = e + this.host : this.hostname && (s = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (u = zl.stringify(this.query, {
    arrayFormat: "repeat",
    addQueryPrefix: !1
  }));
  var f = this.search || u && "?" + u || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || Zi[t]) && s !== !1 ? (s = "//" + (s || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : s || (s = ""), o && o.charAt(0) !== "#" && (o = "#" + o), f && f.charAt(0) !== "?" && (f = "?" + f), r = r.replace(/[?#]/g, function(c) {
    return encodeURIComponent(c);
  }), f = f.replace("#", "%23"), t + s + r + f + o;
};
function L4(e, t) {
  return ms(e, !1, !0).resolve(t);
}
Sr.prototype.resolve = function(e) {
  return this.resolveObject(ms(e, !1, !0)).format();
};
function M4(e, t) {
  return e ? ms(e, !1, !0).resolveObject(t) : t;
}
Sr.prototype.resolveObject = function(e) {
  if (typeof e == "string") {
    var t = new Sr();
    t.parse(e, !1, !0), e = t;
  }
  for (var r = new Sr(), o = Object.keys(this), s = 0; s < o.length; s++) {
    var u = o[s];
    r[u] = this[u];
  }
  if (r.hash = e.hash, e.href === "")
    return r.href = r.format(), r;
  if (e.slashes && !e.protocol) {
    for (var f = Object.keys(e), c = 0; c < f.length; c++) {
      var p = f[c];
      p !== "protocol" && (r[p] = e[p]);
    }
    return Zi[r.protocol] && r.hostname && !r.pathname && (r.pathname = "/", r.path = r.pathname), r.href = r.format(), r;
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!Zi[e.protocol]) {
      for (var g = Object.keys(e), y = 0; y < g.length; y++) {
        var _ = g[y];
        r[_] = e[_];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, !e.host && !ql[e.protocol]) {
      for (var D = (e.pathname || "").split("/"); D.length && !(e.host = D.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), D[0] !== "" && D.unshift(""), D.length < 2 && D.unshift(""), r.pathname = D.join("/");
    } else
      r.pathname = e.pathname;
    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
      var m = r.pathname || "", A = r.search || "";
      r.path = m + A;
    }
    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
  }
  var O = r.pathname && r.pathname.charAt(0) === "/", $ = e.host || e.pathname && e.pathname.charAt(0) === "/", N = $ || O || r.host && e.pathname, R = N, L = r.pathname && r.pathname.split("/") || [], D = e.pathname && e.pathname.split("/") || [], X = r.protocol && !Zi[r.protocol];
  if (X && (r.hostname = "", r.port = null, r.host && (L[0] === "" ? L[0] = r.host : L.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (D[0] === "" ? D[0] = e.host : D.unshift(e.host)), e.host = null), N = N && (D[0] === "" || L[0] === "")), $)
    r.host = e.host || e.host === "" ? e.host : r.host, r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, L = D;
  else if (D.length)
    L || (L = []), L.pop(), L = L.concat(D), r.search = e.search, r.query = e.query;
  else if (e.search != null) {
    if (X) {
      r.host = L.shift(), r.hostname = r.host;
      var V = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      V && (r.auth = V.shift(), r.hostname = V.shift(), r.host = r.hostname);
    }
    return r.search = e.search, r.query = e.query, (r.pathname !== null || r.search !== null) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!L.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var ee = L.slice(-1)[0], he = (r.host || e.host || L.length > 1) && (ee === "." || ee === "..") || ee === "", se = 0, fe = L.length; fe >= 0; fe--)
    ee = L[fe], ee === "." ? L.splice(fe, 1) : ee === ".." ? (L.splice(fe, 1), se++) : se && (L.splice(fe, 1), se--);
  if (!N && !R)
    for (; se--; se)
      L.unshift("..");
  N && L[0] !== "" && (!L[0] || L[0].charAt(0) !== "/") && L.unshift(""), he && L.join("/").substr(-1) !== "/" && L.push("");
  var Ae = L[0] === "" || L[0] && L[0].charAt(0) === "/";
  if (X) {
    r.hostname = Ae ? "" : L.length ? L.shift() : "", r.host = r.hostname;
    var V = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    V && (r.auth = V.shift(), r.hostname = V.shift(), r.host = r.hostname);
  }
  return N = N || r.host && L.length, N && !Ae && L.unshift(""), L.length > 0 ? r.pathname = L.join("/") : (r.pathname = null, r.path = null), (r.pathname !== null || r.search !== null) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
};
Sr.prototype.parseHost = function() {
  var e = this.host, t = x4.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
lo.parse = ms;
lo.resolve = L4;
lo.resolveObject = M4;
lo.format = P4;
lo.Url = Sr;
var R4 = Ie && Ie.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
      o.__proto__ = s;
    } || function(o, s) {
      for (var u in s) s.hasOwnProperty(u) && (o[u] = s[u]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function o() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
  };
}(), F4 = Ie && Ie.__createBinding || (Object.create ? function(e, t, r, o) {
  o === void 0 && (o = r), Object.defineProperty(e, o, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, o) {
  o === void 0 && (o = r), e[o] = t[r];
}), V4 = Ie && Ie.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), B4 = Ie && Ie.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r in e) r !== "default" && Object.hasOwnProperty.call(e, r) && F4(t, e, r);
  return V4(t, e), t;
};
Object.defineProperty(ep, "__esModule", { value: !0 });
var U4 = Nu, Yl = B4(lo);
function H4(e) {
  var t = Yl.parse(e);
  return t.protocol === null && t.host === null && t.port === null;
}
function W4(e, t) {
  var r = Yl.parse(e), o = Yl.parse(t);
  return r.protocol === o.protocol && r.hostname === o.hostname && r.port === o.port;
}
var j4 = (
  /** @class */
  function(e) {
    R4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype._initCanvas = function() {
      var r = this.image, o = this._canvas = document.createElement("canvas"), s = this._context = o.getContext("2d");
      o.className = "vibrant-canvas", o.style.display = "none", this._width = o.width = r.width, this._height = o.height = r.height, s.drawImage(r, 0, 0), document.body.appendChild(o);
    }, t.prototype.load = function(r) {
      var o = this, s = null, u = null;
      if (typeof r == "string")
        s = document.createElement("img"), !H4(r) && !W4(window.location.href, r) && (s.crossOrigin = "anonymous"), u = s.src = r;
      else if (r instanceof HTMLImageElement)
        s = r, u = r.src;
      else
        return Promise.reject(new Error("Cannot load buffer as an image in browser"));
      return this.image = s, new Promise(function(f, c) {
        var p = function() {
          o._initCanvas(), f(o);
        };
        s.complete ? p() : (s.onload = p, s.onerror = function(g) {
          return c(new Error("Fail to load image: " + u));
        });
      });
    }, t.prototype.clear = function() {
      this._context.clearRect(0, 0, this._width, this._height);
    }, t.prototype.update = function(r) {
      this._context.putImageData(r, 0, 0);
    }, t.prototype.getWidth = function() {
      return this._width;
    }, t.prototype.getHeight = function() {
      return this._height;
    }, t.prototype.resize = function(r, o, s) {
      var u = this, f = u._canvas, c = u._context, p = u.image;
      this._width = f.width = r, this._height = f.height = o, c.scale(s, s), c.drawImage(p, 0, 0);
    }, t.prototype.getPixelCount = function() {
      return this._width * this._height;
    }, t.prototype.getImageData = function() {
      return this._context.getImageData(0, 0, this._width, this._height);
    }, t.prototype.remove = function() {
      this._canvas && this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas);
    }, t;
  }(U4.ImageBase)
);
ep.default = j4;
var yb = Ie && Ie.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, _b = yb(Jm()), k4 = yb(ep);
_b.default.DefaultOpts.ImageClass = k4.default;
var G4 = _b.default;
const K4 = /* @__PURE__ */ FC(G4), rs = Ic(), Sa = localStorage.getItem("appleMusic.storefront") ?? "auto";
async function q4(e, t = !1) {
  try {
    let r = e;
    const o = e.startsWith("i.");
    let s;
    if (t === !0)
      s = `/v1/catalog/${Sa}/albums/${r}`;
    else {
      if (!o && !e.includes("l.")) {
        const c = `/v1/catalog/${Sa}/songs/${e}`, p = await rs.v3(c, {
          fields: "albums"
        });
        if (!p.data?.data?.[0]?.relationships?.albums?.data?.[0]?.id)
          throw new Error("[Adaptive Accents Everywhere] Album not found for the given song");
        r = p.data.data[0].relationships.albums.data[0].id;
      }
      s = o ? `/v1/me/library/albums/${r}` : `/v1/catalog/${Sa}/albums/${r}`;
    }
    const u = await rs.v3(s, {
      include: "tracks",
      fields: "artistName,artistUrl,artwork,contentRating,editorialArtwork,editorialNotes,name,playParams,releaseDate,trackCount,url"
    });
    if (!u.data?.data?.[0])
      throw new Error("[Adaptive Accents Everywhere] Album not found");
    const f = u.data.data[0];
    return f.href || (f.href = `/v1/${o ? "me/library" : `catalog/${Sa}`}/albums/${r}`), f;
  } catch (r) {
    throw console.error("[Adaptive Accents Everywhere] Error fetching album MediaItem:", r), r;
  }
}
function z4() {
  return new Promise((e) => {
    const t = setInterval(() => {
      MusicKit.getInstance() && (clearInterval(t), e());
    }, 100);
  });
}
async function Qv(e, t) {
  if (Dn().algorithm === "musicKit")
    return Y4(
      t.attributes.artwork[Dn()[e]],
      J4(t.attributes.artwork)
    );
  const r = t.attributes.artwork;
  let o = rs.config.cfg.value.visual.appearance;
  o === "auto" && (o = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  let s = await K4.from(
    X4(r.url, r.width / 4, r.height / 4)
  ).getPalette(), u;
  switch (o) {
    case "dark":
      if (Dn().internal_SchemeMatching === "generic") {
        u = s.Vibrant?.getHex();
        break;
      }
      u = Dn().internal_SchemeMatching === "inverted" ? s.LightVibrant?.getHex() : s.DarkVibrant?.getHex();
      break;
    case "light":
      if (Dn().internal_SchemeMatching === "generic") {
        u = s.Vibrant?.getHex();
        break;
      }
      u = Dn().internal_SchemeMatching === "inverted" ? s.DarkVibrant?.getHex() : s.LightVibrant?.getHex();
      break;
  }
  return u ? u.replace("#", "") : t.attributes.artwork[Dn()[e]];
}
function Y4(e, t, r = 4.5) {
  let o = Zv(e, t), s = 0;
  const u = 50;
  for (; o < r && s < u; )
    Jl(e) > 0.5 ? e = (parseInt(e, 16) - 1118481).toString(16).padStart(6, "0") : e = (parseInt(e, 16) + 1118481).toString(16).padStart(6, "0"), o = Zv(e, t), s++;
  return console.debug(`[Adaptive Accents Everywhere] Color adjustment attempts: ${s}`), e;
}
function Zv(e, t) {
  const r = Jl(e), o = Jl(t);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function Jl(e) {
  const t = parseInt(e, 16), r = t >> 16 & 255, o = t >> 8 & 255, s = t >> 0 & 255, u = r / 255, f = o / 255, c = s / 255, p = u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4), g = f <= 0.03928 ? f / 12.92 : Math.pow((f + 0.055) / 1.055, 2.4), y = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * p + 0.7152 * g + 0.0722 * y;
}
function J4(e) {
  let t = rs.config.cfg.value.visual.appearance;
  switch (t === "auto" && (t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), t) {
    case "dark":
      return rs.config.cfg.value.visual.sweetener.useImmersiveBG === !0 ? e.bgColor : "000000";
    case "light":
      return "ffffff";
  }
  return "000000";
}
function X4(e, t, r) {
  return e.replace("{w}", Math.floor(t).toString()).replace("{h}", Math.floor(r).toString()).replace("{f}", "webp");
}
const Q4 = RC();
function Z4(e) {
  e.use(Q4);
}
const ey = {
  settings: /* @__PURE__ */ ZT(zC, {
    shadowRoot: !1,
    configureApp: Z4
  })
}, { plugin: oH, setupConfig: eH, customElementName: tH, goToPage: sH, useCPlugin: aH } = UC({
  ...Pg,
  CustomElements: ey,
  SettingsElement: `${Pg.ce_prefix}-settings`,
  setup() {
    for (const [e, t] of Object.entries(ey)) {
      const r = e;
      customElements.define(tH(r), t);
    }
    z4().then(() => {
      console.log("[Adaptive Accents Everywhere] MusicKit loaded, registering event listener."), MusicKit.getInstance().addEventListener("nowPlayingItemDidChange", async (e) => {
        if (ji.value.frozen === !0 || !e.item) return;
        let t = null, r = !1;
        try {
          if (e.item.attributes?.playParams?.catalogId ? t = e.item.attributes.playParams.catalogId : e.item.relationships?.albums?.data?.[0]?.id ? (t = e.item.relationships.albums.data[0].id, r = !0) : e.item.attributes?.playParams?.id ? t = e.item.attributes.playParams.id : console.warn("[Adaptive Accents Everywhere] No identifiable album or song ID.", e.item), !t) return;
          const o = await q4(t, r);
          if (!o.attributes || !o.attributes.artwork) {
            console.warn(
              "[Adaptive Accents Everywhere] Album media item does not have expected attributes."
            );
            return;
          }
          try {
            if (ji.value.mkAlgo_keyColor !== "cider" || ji.value.algorithm === "internal") {
              let s = await Qv("mkAlgo_keyColor", o);
              console.debug("[Adaptive Accents Everywhere] Setting key color:", s), document.body.style.setProperty("--keyColor", "#" + s);
            }
            if (ji.value.mkAlgo_musicKeyColor !== "cider" || ji.value.algorithm === "internal") {
              let s = await Qv("mkAlgo_musicKeyColor", o);
              console.debug("[Adaptive Accents Everywhere] Setting music key color:", s), document.documentElement.style.setProperty("--musicKeyColor", "#" + s);
            }
          } catch (s) {
            console.warn("[Adaptive Accents Everywhere] Error processing colors:", s);
          }
        } catch (o) {
          console.warn("[Adaptive Accents Everywhere] Error processing now playing item:", o);
        }
      });
    });
  }
}), ji = eH({
  frozen: !1,
  algorithm: "musicKit",
  mkAlgo_keyColor: "textColor1",
  mkAlgo_musicKeyColor: "textColor4",
  internal_SchemeMatching: "generic"
});
function Dn() {
  return ji.value;
}
export {
  ey as CustomElements,
  ji as cfg,
  tH as customElementName,
  oH as default,
  sH as goToPage,
  eH as setupConfig,
  aH as useCPlugin,
  Dn as useConfig
};
