var Dd = { cider: "2" };
/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kn(t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of t.split(",")) r[i] = 1;
  return (i) => i in r;
}
const Le = Dd.NODE_ENV !== "production" ? Object.freeze({}) : {}, oi = Dd.NODE_ENV !== "production" ? Object.freeze([]) : [], tt = () => {
}, gb = () => !1, ji = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), cs = (t) => t.startsWith("onUpdate:"), Ke = Object.assign, xf = (t, r) => {
  const i = t.indexOf(r);
  i > -1 && t.splice(i, 1);
}, _b = Object.prototype.hasOwnProperty, Ee = (t, r) => _b.call(t, r), re = Array.isArray, si = (t) => Ns(t) === "[object Map]", mb = (t) => Ns(t) === "[object Set]", ue = (t) => typeof t == "function", je = (t) => typeof t == "string", ci = (t) => typeof t == "symbol", Ue = (t) => t !== null && typeof t == "object", Sf = (t) => (Ue(t) || ue(t)) && ue(t.then) && ue(t.catch), vb = Object.prototype.toString, Ns = (t) => vb.call(t), Af = (t) => Ns(t).slice(8, -1), Cf = (t) => Ns(t) === "[object Object]", Tf = (t) => je(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, $i = /* @__PURE__ */ kn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), yb = /* @__PURE__ */ kn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), xs = (t) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (i) => r[i] || (r[i] = t(i));
}, Eb = /-(\w)/g, Ut = xs(
  (t) => t.replace(Eb, (r, i) => i ? i.toUpperCase() : "")
), bb = /\B([A-Z])/g, Tt = xs(
  (t) => t.replace(bb, "-$1").toLowerCase()
), Ss = xs((t) => t.charAt(0).toUpperCase() + t.slice(1)), Cr = xs(
  (t) => t ? `on${Ss(t)}` : ""
), ar = (t, r) => !Object.is(t, r), Ti = (t, ...r) => {
  for (let i = 0; i < t.length; i++)
    t[i](...r);
}, as = (t, r, i, s = !1) => {
  Object.defineProperty(t, r, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: i
  });
}, wb = (t) => {
  const r = parseFloat(t);
  return isNaN(r) ? t : r;
}, Ma = (t) => {
  const r = je(t) ? Number(t) : NaN;
  return isNaN(r) ? t : r;
};
let $a;
const Df = () => $a || ($a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function If(t) {
  if (re(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++) {
      const s = t[i], f = je(s) ? Sb(s) : If(s);
      if (f)
        for (const l in f)
          r[l] = f[l];
    }
    return r;
  } else if (je(t) || Ue(t))
    return t;
}
const Ob = /;(?![^(]*\))/g, Nb = /:([^]+)/, xb = /\/\*[^]*?\*\//g;
function Sb(t) {
  const r = {};
  return t.replace(xb, "").split(Ob).forEach((i) => {
    if (i) {
      const s = i.split(Nb);
      s.length > 1 && (r[s[0].trim()] = s[1].trim());
    }
  }), r;
}
function Lf(t) {
  let r = "";
  if (je(t))
    r = t;
  else if (re(t))
    for (let i = 0; i < t.length; i++) {
      const s = Lf(t[i]);
      s && (r += s + " ");
    }
  else if (Ue(t))
    for (const i in t)
      t[i] && (r += i + " ");
  return r.trim();
}
const Ab = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Cb = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Tb = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Db = /* @__PURE__ */ kn(Ab), Ib = /* @__PURE__ */ kn(Cb), Lb = /* @__PURE__ */ kn(Tb), Rb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vb = /* @__PURE__ */ kn(Rb);
function Id(t) {
  return !!t || t === "";
}
var Re = { cider: "2" };
function On(t, ...r) {
  console.warn(`[Vue warn] ${t}`, ...r);
}
let Ft;
class Ld {
  constructor(r = !1) {
    this.detached = r, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ft, !r && Ft && (this.index = (Ft.scopes || (Ft.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let r, i;
      if (this.scopes)
        for (r = 0, i = this.scopes.length; r < i; r++)
          this.scopes[r].pause();
      for (r = 0, i = this.effects.length; r < i; r++)
        this.effects[r].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let r, i;
      if (this.scopes)
        for (r = 0, i = this.scopes.length; r < i; r++)
          this.scopes[r].resume();
      for (r = 0, i = this.effects.length; r < i; r++)
        this.effects[r].resume();
    }
  }
  run(r) {
    if (this._active) {
      const i = Ft;
      try {
        return Ft = this, r();
      } finally {
        Ft = i;
      }
    } else Re.NODE_ENV !== "production" && On("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ft = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ft = this.parent;
  }
  stop(r) {
    if (this._active) {
      let i, s;
      for (i = 0, s = this.effects.length; i < s; i++)
        this.effects[i].stop();
      for (i = 0, s = this.cleanups.length; i < s; i++)
        this.cleanups[i]();
      if (this.scopes)
        for (i = 0, s = this.scopes.length; i < s; i++)
          this.scopes[i].stop(!0);
      if (!this.detached && this.parent && !r) {
        const f = this.parent.scopes.pop();
        f && f !== this && (this.parent.scopes[this.index] = f, f.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Pb(t) {
  return new Ld(t);
}
function Mb() {
  return Ft;
}
let De;
const Yu = /* @__PURE__ */ new WeakSet();
class Rd {
  constructor(r) {
    this.fn = r, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ft && Ft.active && Ft.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yu.has(this) && (Yu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fa(this), Md(this);
    const r = De, i = sn;
    De = this, sn = !0;
    try {
      return this.fn();
    } finally {
      Re.NODE_ENV !== "production" && De !== this && On(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), $d(this), De = r, sn = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let r = this.deps; r; r = r.nextDep)
        Pf(r);
      this.deps = this.depsTail = void 0, Fa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    sf(this) && this.run();
  }
  get dirty() {
    return sf(this);
  }
}
let Vd = 0, ri;
function Pd(t) {
  t.flags |= 8, t.next = ri, ri = t;
}
function Rf() {
  Vd++;
}
function Vf() {
  if (--Vd > 0)
    return;
  let t;
  for (; ri; ) {
    let r = ri, i;
    for (; r; )
      r.flags & 1 || (r.flags &= -9), r = r.next;
    for (r = ri, ri = void 0; r; ) {
      if (i = r.next, r.next = void 0, r.flags &= -9, r.flags & 1)
        try {
          r.trigger();
        } catch (s) {
          t || (t = s);
        }
      r = i;
    }
  }
  if (t) throw t;
}
function Md(t) {
  for (let r = t.deps; r; r = r.nextDep)
    r.version = -1, r.prevActiveLink = r.dep.activeLink, r.dep.activeLink = r;
}
function $d(t) {
  let r, i = t.depsTail, s = i;
  for (; s; ) {
    const f = s.prevDep;
    s.version === -1 ? (s === i && (i = f), Pf(s), $b(s)) : r = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = f;
  }
  t.deps = r, t.depsTail = i;
}
function sf(t) {
  for (let r = t.deps; r; r = r.nextDep)
    if (r.dep.version !== r.version || r.dep.computed && (Fd(r.dep.computed) || r.dep.version !== r.version))
      return !0;
  return !!t._dirty;
}
function Fd(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Wi))
    return;
  t.globalVersion = Wi;
  const r = t.dep;
  if (t.flags |= 2, r.version > 0 && !t.isSSR && t.deps && !sf(t)) {
    t.flags &= -3;
    return;
  }
  const i = De, s = sn;
  De = t, sn = !0;
  try {
    Md(t);
    const f = t.fn(t._value);
    (r.version === 0 || ar(f, t._value)) && (t._value = f, r.version++);
  } catch (f) {
    throw r.version++, f;
  } finally {
    De = i, sn = s, $d(t), t.flags &= -3;
  }
}
function Pf(t, r = !1) {
  const { dep: i, prevSub: s, nextSub: f } = t;
  if (s && (s.nextSub = f, t.prevSub = void 0), f && (f.prevSub = s, t.nextSub = void 0), i.subs === t && (i.subs = s), Re.NODE_ENV !== "production" && i.subsHead === t && (i.subsHead = f), !i.subs && i.computed) {
    i.computed.flags &= -5;
    for (let l = i.computed.deps; l; l = l.nextDep)
      Pf(l, !0);
  }
  !r && !--i.sc && i.map && i.map.delete(i.key);
}
function $b(t) {
  const { prevDep: r, nextDep: i } = t;
  r && (r.nextDep = i, t.prevDep = void 0), i && (i.prevDep = r, t.nextDep = void 0);
}
let sn = !0;
const Bd = [];
function Kn() {
  Bd.push(sn), sn = !1;
}
function Gn() {
  const t = Bd.pop();
  sn = t === void 0 ? !0 : t;
}
function Fa(t) {
  const { cleanup: r } = t;
  if (t.cleanup = void 0, r) {
    const i = De;
    De = void 0;
    try {
      r();
    } finally {
      De = i;
    }
  }
}
let Wi = 0;
class Fb {
  constructor(r, i) {
    this.sub = r, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mf {
  constructor(r) {
    this.computed = r, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0, Re.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(r) {
    if (!De || !sn || De === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== De)
      i = this.activeLink = new Fb(De, this), De.deps ? (i.prevDep = De.depsTail, De.depsTail.nextDep = i, De.depsTail = i) : De.deps = De.depsTail = i, Hd(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const s = i.nextDep;
      s.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = s), i.prevDep = De.depsTail, i.nextDep = void 0, De.depsTail.nextDep = i, De.depsTail = i, De.deps === i && (De.deps = s);
    }
    return Re.NODE_ENV !== "production" && De.onTrack && De.onTrack(
      Ke(
        {
          effect: De
        },
        r
      )
    ), i;
  }
  trigger(r) {
    this.version++, Wi++, this.notify(r);
  }
  notify(r) {
    Rf();
    try {
      if (Re.NODE_ENV !== "production")
        for (let i = this.subsHead; i; i = i.nextSub)
          i.sub.onTrigger && !(i.sub.flags & 8) && i.sub.onTrigger(
            Ke(
              {
                effect: i.sub
              },
              r
            )
          );
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Vf();
    }
  }
}
function Hd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const r = t.dep.computed;
    if (r && !t.dep.subs) {
      r.flags |= 20;
      for (let s = r.deps; s; s = s.nextDep)
        Hd(s);
    }
    const i = t.dep.subs;
    i !== t && (t.prevSub = i, i && (i.nextSub = t)), Re.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const uf = /* @__PURE__ */ new WeakMap(), Lr = Symbol(
  Re.NODE_ENV !== "production" ? "Object iterate" : ""
), ff = Symbol(
  Re.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ki = Symbol(
  Re.NODE_ENV !== "production" ? "Array iterate" : ""
);
function rt(t, r, i) {
  if (sn && De) {
    let s = uf.get(t);
    s || uf.set(t, s = /* @__PURE__ */ new Map());
    let f = s.get(i);
    f || (s.set(i, f = new Mf()), f.target = t, f.map = s, f.key = i), Re.NODE_ENV !== "production" ? f.track({
      target: t,
      type: r,
      key: i
    }) : f.track();
  }
}
function wn(t, r, i, s, f, l) {
  const c = uf.get(t);
  if (!c) {
    Wi++;
    return;
  }
  const h = (g) => {
    g && (Re.NODE_ENV !== "production" ? g.trigger({
      target: t,
      type: r,
      key: i,
      newValue: s,
      oldValue: f,
      oldTarget: l
    }) : g.trigger());
  };
  if (Rf(), r === "clear")
    c.forEach(h);
  else {
    const g = re(t), N = g && Tf(i);
    if (g && i === "length") {
      const O = Number(s);
      c.forEach((v, A) => {
        (A === "length" || A === ki || !ci(A) && A >= O) && h(v);
      });
    } else
      switch (i !== void 0 && h(c.get(i)), N && h(c.get(ki)), r) {
        case "add":
          g ? N && h(c.get("length")) : (h(c.get(Lr)), si(t) && h(c.get(ff)));
          break;
        case "delete":
          g || (h(c.get(Lr)), si(t) && h(c.get(ff)));
          break;
        case "set":
          si(t) && h(c.get(Lr));
          break;
      }
  }
  Vf();
}
function Qr(t) {
  const r = ce(t);
  return r === t ? r : (rt(r, "iterate", ki), Dt(t) ? r : r.map(Ot));
}
function $f(t) {
  return rt(t = ce(t), "iterate", ki), t;
}
const Bb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ju(this, Symbol.iterator, Ot);
  },
  concat(...t) {
    return Qr(this).concat(
      ...t.map((r) => re(r) ? Qr(r) : r)
    );
  },
  entries() {
    return Ju(this, "entries", (t) => (t[1] = Ot(t[1]), t));
  },
  every(t, r) {
    return Mn(this, "every", t, r, void 0, arguments);
  },
  filter(t, r) {
    return Mn(this, "filter", t, r, (i) => i.map(Ot), arguments);
  },
  find(t, r) {
    return Mn(this, "find", t, r, Ot, arguments);
  },
  findIndex(t, r) {
    return Mn(this, "findIndex", t, r, void 0, arguments);
  },
  findLast(t, r) {
    return Mn(this, "findLast", t, r, Ot, arguments);
  },
  findLastIndex(t, r) {
    return Mn(this, "findLastIndex", t, r, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, r) {
    return Mn(this, "forEach", t, r, void 0, arguments);
  },
  includes(...t) {
    return Xu(this, "includes", t);
  },
  indexOf(...t) {
    return Xu(this, "indexOf", t);
  },
  join(t) {
    return Qr(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return Xu(this, "lastIndexOf", t);
  },
  map(t, r) {
    return Mn(this, "map", t, r, void 0, arguments);
  },
  pop() {
    return Di(this, "pop");
  },
  push(...t) {
    return Di(this, "push", t);
  },
  reduce(t, ...r) {
    return Ba(this, "reduce", t, r);
  },
  reduceRight(t, ...r) {
    return Ba(this, "reduceRight", t, r);
  },
  shift() {
    return Di(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, r) {
    return Mn(this, "some", t, r, void 0, arguments);
  },
  splice(...t) {
    return Di(this, "splice", t);
  },
  toReversed() {
    return Qr(this).toReversed();
  },
  toSorted(t) {
    return Qr(this).toSorted(t);
  },
  toSpliced(...t) {
    return Qr(this).toSpliced(...t);
  },
  unshift(...t) {
    return Di(this, "unshift", t);
  },
  values() {
    return Ju(this, "values", Ot);
  }
};
function Ju(t, r, i) {
  const s = $f(t), f = s[r]();
  return s !== t && !Dt(t) && (f._next = f.next, f.next = () => {
    const l = f._next();
    return l.value && (l.value = i(l.value)), l;
  }), f;
}
const Hb = Array.prototype;
function Mn(t, r, i, s, f, l) {
  const c = $f(t), h = c !== t && !Dt(t), g = c[r];
  if (g !== Hb[r]) {
    const v = g.apply(t, l);
    return h ? Ot(v) : v;
  }
  let N = i;
  c !== t && (h ? N = function(v, A) {
    return i.call(this, Ot(v), A, t);
  } : i.length > 2 && (N = function(v, A) {
    return i.call(this, v, A, t);
  }));
  const O = g.call(c, N, s);
  return h && f ? f(O) : O;
}
function Ba(t, r, i, s) {
  const f = $f(t);
  let l = i;
  return f !== t && (Dt(t) ? i.length > 3 && (l = function(c, h, g) {
    return i.call(this, c, h, g, t);
  }) : l = function(c, h, g) {
    return i.call(this, c, Ot(h), g, t);
  }), f[r](l, ...s);
}
function Xu(t, r, i) {
  const s = ce(t);
  rt(s, "iterate", ki);
  const f = s[r](...i);
  return (f === -1 || f === !1) && ds(i[0]) ? (i[0] = ce(i[0]), s[r](...i)) : f;
}
function Di(t, r, i = []) {
  Kn(), Rf();
  const s = ce(t)[r].apply(t, i);
  return Vf(), Gn(), s;
}
const Ub = /* @__PURE__ */ kn("__proto__,__v_isRef,__isVue"), Ud = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ci)
);
function Wb(t) {
  ci(t) || (t = String(t));
  const r = ce(this);
  return rt(r, "has", t), r.hasOwnProperty(t);
}
class Wd {
  constructor(r = !1, i = !1) {
    this._isReadonly = r, this._isShallow = i;
  }
  get(r, i, s) {
    const f = this._isReadonly, l = this._isShallow;
    if (i === "__v_isReactive")
      return !f;
    if (i === "__v_isReadonly")
      return f;
    if (i === "__v_isShallow")
      return l;
    if (i === "__v_raw")
      return s === (f ? l ? Yd : jd : l ? zd : qd).get(r) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(r) === Object.getPrototypeOf(s) ? r : void 0;
    const c = re(r);
    if (!f) {
      let g;
      if (c && (g = Bb[i]))
        return g;
      if (i === "hasOwnProperty")
        return Wb;
    }
    const h = Reflect.get(
      r,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      nt(r) ? r : s
    );
    return (ci(i) ? Ud.has(i) : Ub(i)) || (f || rt(r, "get", i), l) ? h : nt(h) ? c && Tf(i) ? h : h.value : Ue(h) ? f ? Jd(h) : Bf(h) : h;
  }
}
class kd extends Wd {
  constructor(r = !1) {
    super(!1, r);
  }
  set(r, i, s, f) {
    let l = r[i];
    if (!this._isShallow) {
      const g = Wn(l);
      if (!Dt(s) && !Wn(s) && (l = ce(l), s = ce(s)), !re(r) && nt(l) && !nt(s))
        return g ? !1 : (l.value = s, !0);
    }
    const c = re(r) && Tf(i) ? Number(i) < r.length : Ee(r, i), h = Reflect.set(
      r,
      i,
      s,
      nt(r) ? r : f
    );
    return r === ce(f) && (c ? ar(s, l) && wn(r, "set", i, s, l) : wn(r, "add", i, s)), h;
  }
  deleteProperty(r, i) {
    const s = Ee(r, i), f = r[i], l = Reflect.deleteProperty(r, i);
    return l && s && wn(r, "delete", i, void 0, f), l;
  }
  has(r, i) {
    const s = Reflect.has(r, i);
    return (!ci(i) || !Ud.has(i)) && rt(r, "has", i), s;
  }
  ownKeys(r) {
    return rt(
      r,
      "iterate",
      re(r) ? "length" : Lr
    ), Reflect.ownKeys(r);
  }
}
class Kd extends Wd {
  constructor(r = !1) {
    super(!0, r);
  }
  set(r, i) {
    return Re.NODE_ENV !== "production" && On(
      `Set operation on key "${String(i)}" failed: target is readonly.`,
      r
    ), !0;
  }
  deleteProperty(r, i) {
    return Re.NODE_ENV !== "production" && On(
      `Delete operation on key "${String(i)}" failed: target is readonly.`,
      r
    ), !0;
  }
}
const kb = /* @__PURE__ */ new kd(), Kb = /* @__PURE__ */ new Kd(), Gb = /* @__PURE__ */ new kd(!0), qb = /* @__PURE__ */ new Kd(!0), Ff = (t) => t, As = (t) => Reflect.getPrototypeOf(t);
function Go(t, r, i = !1, s = !1) {
  t = t.__v_raw;
  const f = ce(t), l = ce(r);
  i || (ar(r, l) && rt(f, "get", r), rt(f, "get", l));
  const { has: c } = As(f), h = s ? Ff : i ? Uf : Ot;
  if (c.call(f, r))
    return h(t.get(r));
  if (c.call(f, l))
    return h(t.get(l));
  t !== f && t.get(r);
}
function qo(t, r = !1) {
  const i = this.__v_raw, s = ce(i), f = ce(t);
  return r || (ar(t, f) && rt(s, "has", t), rt(s, "has", f)), t === f ? i.has(t) : i.has(t) || i.has(f);
}
function zo(t, r = !1) {
  return t = t.__v_raw, !r && rt(ce(t), "iterate", Lr), Reflect.get(t, "size", t);
}
function Ha(t, r = !1) {
  !r && !Dt(t) && !Wn(t) && (t = ce(t));
  const i = ce(this);
  return As(i).has.call(i, t) || (i.add(t), wn(i, "add", t, t)), this;
}
function Ua(t, r, i = !1) {
  !i && !Dt(r) && !Wn(r) && (r = ce(r));
  const s = ce(this), { has: f, get: l } = As(s);
  let c = f.call(s, t);
  c ? Re.NODE_ENV !== "production" && Gd(s, f, t) : (t = ce(t), c = f.call(s, t));
  const h = l.call(s, t);
  return s.set(t, r), c ? ar(r, h) && wn(s, "set", t, r, h) : wn(s, "add", t, r), this;
}
function Wa(t) {
  const r = ce(this), { has: i, get: s } = As(r);
  let f = i.call(r, t);
  f ? Re.NODE_ENV !== "production" && Gd(r, i, t) : (t = ce(t), f = i.call(r, t));
  const l = s ? s.call(r, t) : void 0, c = r.delete(t);
  return f && wn(r, "delete", t, void 0, l), c;
}
function ka() {
  const t = ce(this), r = t.size !== 0, i = Re.NODE_ENV !== "production" ? si(t) ? new Map(t) : new Set(t) : void 0, s = t.clear();
  return r && wn(t, "clear", void 0, void 0, i), s;
}
function jo(t, r) {
  return function(s, f) {
    const l = this, c = l.__v_raw, h = ce(c), g = r ? Ff : t ? Uf : Ot;
    return !t && rt(h, "iterate", Lr), c.forEach((N, O) => s.call(f, g(N), g(O), l));
  };
}
function Yo(t, r, i) {
  return function(...s) {
    const f = this.__v_raw, l = ce(f), c = si(l), h = t === "entries" || t === Symbol.iterator && c, g = t === "keys" && c, N = f[t](...s), O = i ? Ff : r ? Uf : Ot;
    return !r && rt(
      l,
      "iterate",
      g ? ff : Lr
    ), {
      // iterator protocol
      next() {
        const { value: v, done: A } = N.next();
        return A ? { value: v, done: A } : {
          value: h ? [O(v[0]), O(v[1])] : O(v),
          done: A
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ir(t) {
  return function(...r) {
    if (Re.NODE_ENV !== "production") {
      const i = r[0] ? `on key "${r[0]}" ` : "";
      On(
        `${Ss(t)} operation ${i}failed: target is readonly.`,
        ce(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function zb() {
  const t = {
    get(l) {
      return Go(this, l);
    },
    get size() {
      return zo(this);
    },
    has: qo,
    add: Ha,
    set: Ua,
    delete: Wa,
    clear: ka,
    forEach: jo(!1, !1)
  }, r = {
    get(l) {
      return Go(this, l, !1, !0);
    },
    get size() {
      return zo(this);
    },
    has: qo,
    add(l) {
      return Ha.call(this, l, !0);
    },
    set(l, c) {
      return Ua.call(this, l, c, !0);
    },
    delete: Wa,
    clear: ka,
    forEach: jo(!1, !0)
  }, i = {
    get(l) {
      return Go(this, l, !0);
    },
    get size() {
      return zo(this, !0);
    },
    has(l) {
      return qo.call(this, l, !0);
    },
    add: ir("add"),
    set: ir("set"),
    delete: ir("delete"),
    clear: ir("clear"),
    forEach: jo(!0, !1)
  }, s = {
    get(l) {
      return Go(this, l, !0, !0);
    },
    get size() {
      return zo(this, !0);
    },
    has(l) {
      return qo.call(this, l, !0);
    },
    add: ir("add"),
    set: ir("set"),
    delete: ir("delete"),
    clear: ir("clear"),
    forEach: jo(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    t[l] = Yo(l, !1, !1), i[l] = Yo(l, !0, !1), r[l] = Yo(l, !1, !0), s[l] = Yo(
      l,
      !0,
      !0
    );
  }), [
    t,
    i,
    r,
    s
  ];
}
const [
  jb,
  Yb,
  Jb,
  Xb
] = /* @__PURE__ */ zb();
function Cs(t, r) {
  const i = r ? t ? Xb : Jb : t ? Yb : jb;
  return (s, f, l) => f === "__v_isReactive" ? !t : f === "__v_isReadonly" ? t : f === "__v_raw" ? s : Reflect.get(
    Ee(i, f) && f in s ? i : s,
    f,
    l
  );
}
const Zb = {
  get: /* @__PURE__ */ Cs(!1, !1)
}, Qb = {
  get: /* @__PURE__ */ Cs(!1, !0)
}, ew = {
  get: /* @__PURE__ */ Cs(!0, !1)
}, tw = {
  get: /* @__PURE__ */ Cs(!0, !0)
};
function Gd(t, r, i) {
  const s = ce(i);
  if (s !== i && r.call(t, s)) {
    const f = Af(t);
    On(
      `Reactive ${f} contains both the raw and reactive versions of the same object${f === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const qd = /* @__PURE__ */ new WeakMap(), zd = /* @__PURE__ */ new WeakMap(), jd = /* @__PURE__ */ new WeakMap(), Yd = /* @__PURE__ */ new WeakMap();
function nw(t) {
  switch (t) {
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
function rw(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : nw(Af(t));
}
function Bf(t) {
  return Wn(t) ? t : Ts(
    t,
    !1,
    kb,
    Zb,
    qd
  );
}
function iw(t) {
  return Ts(
    t,
    !1,
    Gb,
    Qb,
    zd
  );
}
function Jd(t) {
  return Ts(
    t,
    !0,
    Kb,
    ew,
    jd
  );
}
function En(t) {
  return Ts(
    t,
    !0,
    qb,
    tw,
    Yd
  );
}
function Ts(t, r, i, s, f) {
  if (!Ue(t))
    return Re.NODE_ENV !== "production" && On(
      `value cannot be made ${r ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(r && t.__v_isReactive))
    return t;
  const l = f.get(t);
  if (l)
    return l;
  const c = rw(t);
  if (c === 0)
    return t;
  const h = new Proxy(
    t,
    c === 2 ? s : i
  );
  return f.set(t, h), h;
}
function ui(t) {
  return Wn(t) ? ui(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Wn(t) {
  return !!(t && t.__v_isReadonly);
}
function Dt(t) {
  return !!(t && t.__v_isShallow);
}
function ds(t) {
  return t ? !!t.__v_raw : !1;
}
function ce(t) {
  const r = t && t.__v_raw;
  return r ? ce(r) : t;
}
function Hf(t) {
  return !Ee(t, "__v_skip") && Object.isExtensible(t) && as(t, "__v_skip", !0), t;
}
const Ot = (t) => Ue(t) ? Bf(t) : t, Uf = (t) => Ue(t) ? Jd(t) : t;
function nt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function hs(t) {
  return ow(t, !1);
}
function ow(t, r) {
  return nt(t) ? t : new sw(t, r);
}
class sw {
  constructor(r, i) {
    this.dep = new Mf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? r : ce(r), this._value = i ? r : Ot(r), this.__v_isShallow = i;
  }
  get value() {
    return Re.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(r) {
    const i = this._rawValue, s = this.__v_isShallow || Dt(r) || Wn(r);
    r = s ? r : ce(r), ar(r, i) && (this._rawValue = r, this._value = s ? r : Ot(r), Re.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: r,
      oldValue: i
    }) : this.dep.trigger());
  }
}
function Wf(t) {
  return nt(t) ? t.value : t;
}
const uw = {
  get: (t, r, i) => r === "__v_raw" ? t : Wf(Reflect.get(t, r, i)),
  set: (t, r, i, s) => {
    const f = t[r];
    return nt(f) && !nt(i) ? (f.value = i, !0) : Reflect.set(t, r, i, s);
  }
};
function Xd(t) {
  return ui(t) ? t : new Proxy(t, uw);
}
class fw {
  constructor(r, i, s) {
    this.fn = r, this.setter = i, this._value = void 0, this.dep = new Mf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    De !== this)
      return Pd(this), !0;
  }
  get value() {
    const r = Re.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Fd(this), r && (r.version = this.dep.version), this._value;
  }
  set value(r) {
    this.setter ? this.setter(r) : Re.NODE_ENV !== "production" && On("Write operation failed: computed value is readonly");
  }
}
function lw(t, r, i = !1) {
  let s, f;
  ue(t) ? s = t : (s = t.get, f = t.set);
  const l = new fw(s, f, i);
  return Re.NODE_ENV !== "production" && r && !i && (l.onTrack = r.onTrack, l.onTrigger = r.onTrigger), l;
}
const Jo = {}, ps = /* @__PURE__ */ new WeakMap();
let Tr;
function cw(t, r = !1, i = Tr) {
  if (i) {
    let s = ps.get(i);
    s || ps.set(i, s = []), s.push(t);
  } else Re.NODE_ENV !== "production" && !r && On(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function aw(t, r, i = Le) {
  const { immediate: s, deep: f, once: l, scheduler: c, augmentJob: h, call: g } = i, N = (G) => {
    (i.onWarn || On)(
      "Invalid watch source: ",
      G,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, O = (G) => f ? G : Dt(G) || f === !1 || f === 0 ? ur(G, 1) : ur(G);
  let v, A, H, Y, ie = !1, be = !1;
  if (nt(t) ? (A = () => t.value, ie = Dt(t)) : ui(t) ? (A = () => O(t), ie = !0) : re(t) ? (be = !0, ie = t.some((G) => ui(G) || Dt(G)), A = () => t.map((G) => {
    if (nt(G))
      return G.value;
    if (ui(G))
      return O(G);
    if (ue(G))
      return g ? g(G, 2) : G();
    Re.NODE_ENV !== "production" && N(G);
  })) : ue(t) ? r ? A = g ? () => g(t, 2) : t : A = () => {
    if (H) {
      Kn();
      try {
        H();
      } finally {
        Gn();
      }
    }
    const G = Tr;
    Tr = v;
    try {
      return g ? g(t, 3, [Y]) : t(Y);
    } finally {
      Tr = G;
    }
  } : (A = tt, Re.NODE_ENV !== "production" && N(t)), r && f) {
    const G = A, Ce = f === !0 ? 1 / 0 : f;
    A = () => ur(G(), Ce);
  }
  const _e = Mb(), Ae = () => {
    v.stop(), _e && xf(_e.effects, v);
  };
  if (l && r) {
    const G = r;
    r = (...Ce) => {
      G(...Ce), Ae();
    };
  }
  let oe = be ? new Array(t.length).fill(Jo) : Jo;
  const We = (G) => {
    if (!(!(v.flags & 1) || !v.dirty && !G))
      if (r) {
        const Ce = v.run();
        if (f || ie || (be ? Ce.some(($e, Ve) => ar($e, oe[Ve])) : ar(Ce, oe))) {
          H && H();
          const $e = Tr;
          Tr = v;
          try {
            const Ve = [
              Ce,
              // pass undefined as the old value when it's changed for the first time
              oe === Jo ? void 0 : be && oe[0] === Jo ? [] : oe,
              Y
            ];
            g ? g(r, 3, Ve) : (
              // @ts-expect-error
              r(...Ve)
            ), oe = Ce;
          } finally {
            Tr = $e;
          }
        }
      } else
        v.run();
  };
  return h && h(We), v = new Rd(A), v.scheduler = c ? () => c(We, !1) : We, Y = (G) => cw(G, !1, v), H = v.onStop = () => {
    const G = ps.get(v);
    if (G) {
      if (g)
        g(G, 4);
      else
        for (const Ce of G) Ce();
      ps.delete(v);
    }
  }, Re.NODE_ENV !== "production" && (v.onTrack = i.onTrack, v.onTrigger = i.onTrigger), r ? s ? We(!0) : oe = v.run() : c ? c(We.bind(null, !0), !0) : v.run(), Ae.pause = v.pause.bind(v), Ae.resume = v.resume.bind(v), Ae.stop = Ae, Ae;
}
function ur(t, r = 1 / 0, i) {
  if (r <= 0 || !Ue(t) || t.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(t)))
    return t;
  if (i.add(t), r--, nt(t))
    ur(t.value, r, i);
  else if (re(t))
    for (let s = 0; s < t.length; s++)
      ur(t[s], r, i);
  else if (mb(t) || si(t))
    t.forEach((s) => {
      ur(s, r, i);
    });
  else if (Cf(t)) {
    for (const s in t)
      ur(t[s], r, i);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && ur(t[s], r, i);
  }
  return t;
}
var x = { cider: "2" };
const Rr = [];
function Zo(t) {
  Rr.push(t);
}
function Qo() {
  Rr.pop();
}
let Zu = !1;
function k(t, ...r) {
  if (Zu) return;
  Zu = !0, Kn();
  const i = Rr.length ? Rr[Rr.length - 1].component : null, s = i && i.appContext.config.warnHandler, f = dw();
  if (s)
    ai(
      s,
      i,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + r.map((l) => {
          var c, h;
          return (h = (c = l.toString) == null ? void 0 : c.call(l)) != null ? h : JSON.stringify(l);
        }).join(""),
        i && i.proxy,
        f.map(
          ({ vnode: l }) => `at <${Ps(i, l.type)}>`
        ).join(`
`),
        f
      ]
    );
  else {
    const l = [`[Vue warn]: ${t}`, ...r];
    f.length && l.push(`
`, ...hw(f)), console.warn(...l);
  }
  Gn(), Zu = !1;
}
function dw() {
  let t = Rr[Rr.length - 1];
  if (!t)
    return [];
  const r = [];
  for (; t; ) {
    const i = r[0];
    i && i.vnode === t ? i.recurseCount++ : r.push({
      vnode: t,
      recurseCount: 0
    });
    const s = t.component && t.component.parent;
    t = s && s.vnode;
  }
  return r;
}
function hw(t) {
  const r = [];
  return t.forEach((i, s) => {
    r.push(...s === 0 ? [] : [`
`], ...pw(i));
  }), r;
}
function pw({ vnode: t, recurseCount: r }) {
  const i = r > 0 ? `... (${r} recursive calls)` : "", s = t.component ? t.component.parent == null : !1, f = ` at <${Ps(
    t.component,
    t.type,
    s
  )}`, l = ">" + i;
  return t.props ? [f, ...gw(t.props), l] : [f + l];
}
function gw(t) {
  const r = [], i = Object.keys(t);
  return i.slice(0, 3).forEach((s) => {
    r.push(...Zd(s, t[s]));
  }), i.length > 3 && r.push(" ..."), r;
}
function Zd(t, r, i) {
  return je(r) ? (r = JSON.stringify(r), i ? r : [`${t}=${r}`]) : typeof r == "number" || typeof r == "boolean" || r == null ? i ? r : [`${t}=${r}`] : nt(r) ? (r = Zd(t, ce(r.value), !0), i ? r : [`${t}=Ref<`, r, ">"]) : ue(r) ? [`${t}=fn${r.name ? `<${r.name}>` : ""}`] : (r = ce(r), i ? r : [`${t}=`, r]);
}
const kf = {
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
function ai(t, r, i, s) {
  try {
    return s ? t(...s) : t();
  } catch (f) {
    Yi(f, r, i);
  }
}
function Nn(t, r, i, s) {
  if (ue(t)) {
    const f = ai(t, r, i, s);
    return f && Sf(f) && f.catch((l) => {
      Yi(l, r, i);
    }), f;
  }
  if (re(t)) {
    const f = [];
    for (let l = 0; l < t.length; l++)
      f.push(Nn(t[l], r, i, s));
    return f;
  } else x.NODE_ENV !== "production" && k(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function Yi(t, r, i, s = !0) {
  const f = r ? r.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: c } = r && r.appContext.config || Le;
  if (r) {
    let h = r.parent;
    const g = r.proxy, N = x.NODE_ENV !== "production" ? kf[i] : `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; h; ) {
      const O = h.ec;
      if (O) {
        for (let v = 0; v < O.length; v++)
          if (O[v](t, g, N) === !1)
            return;
      }
      h = h.parent;
    }
    if (l) {
      Kn(), ai(l, null, 10, [
        t,
        g,
        N
      ]), Gn();
      return;
    }
  }
  _w(t, i, f, s, c);
}
function _w(t, r, i, s = !0, f = !1) {
  if (x.NODE_ENV !== "production") {
    const l = kf[r];
    if (i && Zo(i), k(`Unhandled error${l ? ` during execution of ${l}` : ""}`), i && Qo(), s)
      throw t;
    console.error(t);
  } else {
    if (f)
      throw t;
    console.error(t);
  }
}
let Ki = !1, lf = !1;
const Nt = [];
let mn = 0;
const fi = [];
let or = null, ni = 0;
const Qd = /* @__PURE__ */ Promise.resolve();
let Kf = null;
const mw = 100;
function eh(t) {
  const r = Kf || Qd;
  return t ? r.then(this ? t.bind(this) : t) : r;
}
function vw(t) {
  let r = Ki ? mn + 1 : 0, i = Nt.length;
  for (; r < i; ) {
    const s = r + i >>> 1, f = Nt[s], l = Gi(f);
    l < t || l === t && f.flags & 2 ? r = s + 1 : i = s;
  }
  return r;
}
function Ds(t) {
  if (!(t.flags & 1)) {
    const r = Gi(t), i = Nt[Nt.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(t.flags & 2) && r >= Gi(i) ? Nt.push(t) : Nt.splice(vw(r), 0, t), t.flags |= 1, th();
  }
}
function th() {
  !Ki && !lf && (lf = !0, Kf = Qd.then(ih));
}
function nh(t) {
  re(t) ? fi.push(...t) : or && t.id === -1 ? or.splice(ni + 1, 0, t) : t.flags & 1 || (fi.push(t), t.flags |= 1), th();
}
function Ka(t, r, i = Ki ? mn + 1 : 0) {
  for (x.NODE_ENV !== "production" && (r = r || /* @__PURE__ */ new Map()); i < Nt.length; i++) {
    const s = Nt[i];
    if (s && s.flags & 2) {
      if (t && s.id !== t.uid || x.NODE_ENV !== "production" && Gf(r, s))
        continue;
      Nt.splice(i, 1), i--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function rh(t) {
  if (fi.length) {
    const r = [...new Set(fi)].sort(
      (i, s) => Gi(i) - Gi(s)
    );
    if (fi.length = 0, or) {
      or.push(...r);
      return;
    }
    for (or = r, x.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ni = 0; ni < or.length; ni++) {
      const i = or[ni];
      x.NODE_ENV !== "production" && Gf(t, i) || (i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2);
    }
    or = null, ni = 0;
  }
}
const Gi = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function ih(t) {
  lf = !1, Ki = !0, x.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const r = x.NODE_ENV !== "production" ? (i) => Gf(t, i) : tt;
  try {
    for (mn = 0; mn < Nt.length; mn++) {
      const i = Nt[mn];
      if (i && !(i.flags & 8)) {
        if (x.NODE_ENV !== "production" && r(i))
          continue;
        i.flags & 4 && (i.flags &= -2), ai(
          i,
          i.i,
          i.i ? 15 : 14
        ), i.flags & 4 || (i.flags &= -2);
      }
    }
  } finally {
    for (; mn < Nt.length; mn++) {
      const i = Nt[mn];
      i && (i.flags &= -2);
    }
    mn = 0, Nt.length = 0, rh(t), Ki = !1, Kf = null, (Nt.length || fi.length) && ih(t);
  }
}
function Gf(t, r) {
  const i = t.get(r) || 0;
  if (i > mw) {
    const s = r.i, f = s && Fh(s.type);
    return Yi(
      `Maximum recursive updates exceeded${f ? ` in component <${f}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(r, i + 1), !1;
}
let bn = !1;
const es = /* @__PURE__ */ new Map();
x.NODE_ENV !== "production" && (Df().__VUE_HMR_RUNTIME__ = {
  createRecord: Qu(oh),
  rerender: Qu(bw),
  reload: Qu(ww)
});
const Mr = /* @__PURE__ */ new Map();
function yw(t) {
  const r = t.type.__hmrId;
  let i = Mr.get(r);
  i || (oh(r, t.type), i = Mr.get(r)), i.instances.add(t);
}
function Ew(t) {
  Mr.get(t.type.__hmrId).instances.delete(t);
}
function oh(t, r) {
  return Mr.has(t) ? !1 : (Mr.set(t, {
    initialDef: gs(r),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gs(t) {
  return Bh(t) ? t.__vccOpts : t;
}
function bw(t, r) {
  const i = Mr.get(t);
  i && (i.initialDef.render = r, [...i.instances].forEach((s) => {
    r && (s.render = r, gs(s.type).render = r), s.renderCache = [], bn = !0, s.update(), bn = !1;
  }));
}
function ww(t, r) {
  const i = Mr.get(t);
  if (!i) return;
  r = gs(r), Ga(i.initialDef, r);
  const s = [...i.instances];
  for (let f = 0; f < s.length; f++) {
    const l = s[f], c = gs(l.type);
    let h = es.get(c);
    h || (c !== i.initialDef && Ga(c, r), es.set(c, h = /* @__PURE__ */ new Set())), h.add(l), l.appContext.propsCache.delete(l.type), l.appContext.emitsCache.delete(l.type), l.appContext.optionsCache.delete(l.type), l.ceReload ? (h.add(l), l.ceReload(r.styles), h.delete(l)) : l.parent ? Ds(() => {
      bn = !0, l.parent.update(), bn = !1, h.delete(l);
    }) : l.appContext.reload ? l.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), l.root.ce && l !== l.root && l.root.ce._removeChildStyle(c);
  }
  nh(() => {
    es.clear();
  });
}
function Ga(t, r) {
  Ke(t, r);
  for (const i in t)
    i !== "__file" && !(i in r) && delete t[i];
}
function Qu(t) {
  return (r, i) => {
    try {
      return t(r, i);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let yn, Vi = [], cf = !1;
function Ji(t, ...r) {
  yn ? yn.emit(t, ...r) : cf || Vi.push({ event: t, args: r });
}
function sh(t, r) {
  var i, s;
  yn = t, yn ? (yn.enabled = !0, Vi.forEach(({ event: f, args: l }) => yn.emit(f, ...l)), Vi = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (i = window.navigator) == null ? void 0 : i.userAgent) != null && s.includes("jsdom")) ? ((r.__VUE_DEVTOOLS_HOOK_REPLAY__ = r.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((l) => {
    sh(l, r);
  }), setTimeout(() => {
    yn || (r.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, cf = !0, Vi = []);
  }, 3e3)) : (cf = !0, Vi = []);
}
function Ow(t, r) {
  Ji("app:init", t, r, {
    Fragment: vn,
    Text: Xi,
    Comment: un,
    Static: rs
  });
}
function Nw(t) {
  Ji("app:unmount", t);
}
const xw = /* @__PURE__ */ qf(
  "component:added"
  /* COMPONENT_ADDED */
), uh = /* @__PURE__ */ qf(
  "component:updated"
  /* COMPONENT_UPDATED */
), Sw = /* @__PURE__ */ qf(
  "component:removed"
  /* COMPONENT_REMOVED */
), Aw = (t) => {
  yn && typeof yn.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !yn.cleanupBuffer(t) && Sw(t);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qf(t) {
  return (r) => {
    Ji(
      t,
      r.appContext.app,
      r.uid,
      r.parent ? r.parent.uid : void 0,
      r
    );
  };
}
const Cw = /* @__PURE__ */ fh(
  "perf:start"
  /* PERFORMANCE_START */
), Tw = /* @__PURE__ */ fh(
  "perf:end"
  /* PERFORMANCE_END */
);
function fh(t) {
  return (r, i, s) => {
    Ji(t, r.appContext.app, r.uid, r, i, s);
  };
}
function Dw(t, r, i) {
  Ji(
    "component:emit",
    t.appContext.app,
    t,
    r,
    i
  );
}
let Bt = null, lh = null;
function _s(t) {
  const r = Bt;
  return Bt = t, lh = t && t.type.__scopeId || null, r;
}
function Iw(t, r = Bt, i) {
  if (!r || t._n)
    return t;
  const s = (...f) => {
    s._d && nd(-1);
    const l = _s(r);
    let c;
    try {
      c = t(...f);
    } finally {
      _s(l), s._d && nd(1);
    }
    return x.NODE_ENV !== "production" && uh(r), c;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ch(t) {
  yb(t) && k("Do not use built-in directive ids as custom directive id: " + t);
}
function Sr(t, r, i, s) {
  const f = t.dirs, l = r && r.dirs;
  for (let c = 0; c < f.length; c++) {
    const h = f[c];
    l && (h.oldValue = l[c].value);
    let g = h.dir[s];
    g && (Kn(), Nn(g, i, 8, [
      t.el,
      h,
      t,
      r
    ]), Gn());
  }
}
const Lw = Symbol("_vte"), Rw = (t) => t.__isTeleport;
function zf(t, r) {
  t.shapeFlag & 6 && t.component ? (t.transition = r, zf(t.component.subTree, r)) : t.shapeFlag & 128 ? (t.ssContent.transition = r.clone(t.ssContent), t.ssFallback.transition = r.clone(t.ssFallback)) : t.transition = r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ah(t, r) {
  return ue(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ke({ name: t.name }, r, { setup: t })
  ) : t;
}
function dh(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
const Vw = /* @__PURE__ */ new WeakSet();
function af(t, r, i, s, f = !1) {
  if (re(t)) {
    t.forEach(
      (Y, ie) => af(
        Y,
        r && (re(r) ? r[ie] : r),
        i,
        s,
        f
      )
    );
    return;
  }
  if (Fi(s) && !f)
    return;
  const l = s.shapeFlag & 4 ? tl(s.component) : s.el, c = f ? null : l, { i: h, r: g } = t;
  if (x.NODE_ENV !== "production" && !h) {
    k(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const N = r && r.r, O = h.refs === Le ? h.refs = {} : h.refs, v = h.setupState, A = ce(v), H = v === Le ? () => !1 : (Y) => x.NODE_ENV !== "production" && Vw.has(A[Y]) ? !1 : Ee(A, Y);
  if (N != null && N !== g && (je(N) ? (O[N] = null, H(N) && (v[N] = null)) : nt(N) && (N.value = null)), ue(g))
    ai(g, h, 12, [c, O]);
  else {
    const Y = je(g), ie = nt(g);
    if (Y || ie) {
      const be = () => {
        if (t.f) {
          const _e = Y ? H(g) ? v[g] : O[g] : g.value;
          f ? re(_e) && xf(_e, l) : re(_e) ? _e.includes(l) || _e.push(l) : Y ? (O[g] = [l], H(g) && (v[g] = O[g])) : (g.value = [l], t.k && (O[t.k] = g.value));
        } else Y ? (O[g] = c, H(g) && (v[g] = c)) : ie ? (g.value = c, t.k && (O[t.k] = c)) : x.NODE_ENV !== "production" && k("Invalid template ref type:", g, `(${typeof g})`);
      };
      c ? (be.id = -1, $t(be, i)) : be();
    } else x.NODE_ENV !== "production" && k("Invalid template ref type:", g, `(${typeof g})`);
  }
}
const Fi = (t) => !!t.type.__asyncLoader, jf = (t) => t.type.__isKeepAlive;
function Pw(t, r) {
  hh(t, "a", r);
}
function Mw(t, r) {
  hh(t, "da", r);
}
function hh(t, r, i = st) {
  const s = t.__wdc || (t.__wdc = () => {
    let f = i;
    for (; f; ) {
      if (f.isDeactivated)
        return;
      f = f.parent;
    }
    return t();
  });
  if (Is(r, s, i), i) {
    let f = i.parent;
    for (; f && f.parent; )
      jf(f.parent.vnode) && $w(s, r, i, f), f = f.parent;
  }
}
function $w(t, r, i, s) {
  const f = Is(
    r,
    t,
    s,
    !0
    /* prepend */
  );
  ph(() => {
    xf(s[r], f);
  }, i);
}
function Is(t, r, i = st, s = !1) {
  if (i) {
    const f = i[t] || (i[t] = []), l = r.__weh || (r.__weh = (...c) => {
      Kn();
      const h = Zi(i), g = Nn(r, i, t, c);
      return h(), Gn(), g;
    });
    return s ? f.unshift(l) : f.push(l), l;
  } else if (x.NODE_ENV !== "production") {
    const f = Cr(kf[t].replace(/ hook$/, ""));
    k(
      `${f} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const qn = (t) => (r, i = st) => {
  (!Vs || t === "sp") && Is(t, (...s) => r(...s), i);
}, Fw = qn("bm"), Bw = qn("m"), Hw = qn(
  "bu"
), Uw = qn("u"), Ww = qn(
  "bum"
), ph = qn("um"), kw = qn(
  "sp"
), Kw = qn("rtg"), Gw = qn("rtc");
function qw(t, r = st) {
  Is("ec", t, r);
}
const zw = Symbol.for("v-ndc"), df = (t) => t ? Mh(t) ? tl(t) : df(t.parent) : null, Vr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ke(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => x.NODE_ENV !== "production" ? En(t.props) : t.props,
    $attrs: (t) => x.NODE_ENV !== "production" ? En(t.attrs) : t.attrs,
    $slots: (t) => x.NODE_ENV !== "production" ? En(t.slots) : t.slots,
    $refs: (t) => x.NODE_ENV !== "production" ? En(t.refs) : t.refs,
    $parent: (t) => df(t.parent),
    $root: (t) => df(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Jf(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Ds(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = eh.bind(t.proxy)),
    $watch: (t) => S1.bind(t)
  })
), Yf = (t) => t === "_" || t === "$", ef = (t, r) => t !== Le && !t.__isScriptSetup && Ee(t, r), gh = {
  get({ _: t }, r) {
    if (r === "__v_skip")
      return !0;
    const { ctx: i, setupState: s, data: f, props: l, accessCache: c, type: h, appContext: g } = t;
    if (x.NODE_ENV !== "production" && r === "__isVue")
      return !0;
    let N;
    if (r[0] !== "$") {
      const H = c[r];
      if (H !== void 0)
        switch (H) {
          case 1:
            return s[r];
          case 2:
            return f[r];
          case 4:
            return i[r];
          case 3:
            return l[r];
        }
      else {
        if (ef(s, r))
          return c[r] = 1, s[r];
        if (f !== Le && Ee(f, r))
          return c[r] = 2, f[r];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (N = t.propsOptions[0]) && Ee(N, r)
        )
          return c[r] = 3, l[r];
        if (i !== Le && Ee(i, r))
          return c[r] = 4, i[r];
        hf && (c[r] = 0);
      }
    }
    const O = Vr[r];
    let v, A;
    if (O)
      return r === "$attrs" ? (rt(t.attrs, "get", ""), x.NODE_ENV !== "production" && ys()) : x.NODE_ENV !== "production" && r === "$slots" && rt(t, "get", r), O(t);
    if (
      // css module (injected by vue-loader)
      (v = h.__cssModules) && (v = v[r])
    )
      return v;
    if (i !== Le && Ee(i, r))
      return c[r] = 4, i[r];
    if (
      // global properties
      A = g.config.globalProperties, Ee(A, r)
    )
      return A[r];
    x.NODE_ENV !== "production" && Bt && (!je(r) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    r.indexOf("__v") !== 0) && (f !== Le && Yf(r[0]) && Ee(f, r) ? k(
      `Property ${JSON.stringify(
        r
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === Bt && k(
      `Property ${JSON.stringify(r)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, r, i) {
    const { data: s, setupState: f, ctx: l } = t;
    return ef(f, r) ? (f[r] = i, !0) : x.NODE_ENV !== "production" && f.__isScriptSetup && Ee(f, r) ? (k(`Cannot mutate <script setup> binding "${r}" from Options API.`), !1) : s !== Le && Ee(s, r) ? (s[r] = i, !0) : Ee(t.props, r) ? (x.NODE_ENV !== "production" && k(`Attempting to mutate prop "${r}". Props are readonly.`), !1) : r[0] === "$" && r.slice(1) in t ? (x.NODE_ENV !== "production" && k(
      `Attempting to mutate public property "${r}". Properties starting with $ are reserved and readonly.`
    ), !1) : (x.NODE_ENV !== "production" && r in t.appContext.config.globalProperties ? Object.defineProperty(l, r, {
      enumerable: !0,
      configurable: !0,
      value: i
    }) : l[r] = i, !0);
  },
  has({
    _: { data: t, setupState: r, accessCache: i, ctx: s, appContext: f, propsOptions: l }
  }, c) {
    let h;
    return !!i[c] || t !== Le && Ee(t, c) || ef(r, c) || (h = l[0]) && Ee(h, c) || Ee(s, c) || Ee(Vr, c) || Ee(f.config.globalProperties, c);
  },
  defineProperty(t, r, i) {
    return i.get != null ? t._.accessCache[r] = 0 : Ee(i, "value") && this.set(t, r, i.value, null), Reflect.defineProperty(t, r, i);
  }
};
x.NODE_ENV !== "production" && (gh.ownKeys = (t) => (k(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function jw(t) {
  const r = {};
  return Object.defineProperty(r, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(Vr).forEach((i) => {
    Object.defineProperty(r, i, {
      configurable: !0,
      enumerable: !1,
      get: () => Vr[i](t),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: tt
    });
  }), r;
}
function Yw(t) {
  const {
    ctx: r,
    propsOptions: [i]
  } = t;
  i && Object.keys(i).forEach((s) => {
    Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[s],
      set: tt
    });
  });
}
function Jw(t) {
  const { ctx: r, setupState: i } = t;
  Object.keys(ce(i)).forEach((s) => {
    if (!i.__isScriptSetup) {
      if (Yf(s[0])) {
        k(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(r, s, {
        enumerable: !0,
        configurable: !0,
        get: () => i[s],
        set: tt
      });
    }
  });
}
function qa(t) {
  return re(t) ? t.reduce(
    (r, i) => (r[i] = null, r),
    {}
  ) : t;
}
function Xw() {
  const t = /* @__PURE__ */ Object.create(null);
  return (r, i) => {
    t[i] ? k(`${r} property "${i}" is already defined in ${t[i]}.`) : t[i] = r;
  };
}
let hf = !0;
function Zw(t) {
  const r = Jf(t), i = t.proxy, s = t.ctx;
  hf = !1, r.beforeCreate && za(r.beforeCreate, t, "bc");
  const {
    // state
    data: f,
    computed: l,
    methods: c,
    watch: h,
    provide: g,
    inject: N,
    // lifecycle
    created: O,
    beforeMount: v,
    mounted: A,
    beforeUpdate: H,
    updated: Y,
    activated: ie,
    deactivated: be,
    beforeDestroy: _e,
    beforeUnmount: Ae,
    destroyed: oe,
    unmounted: We,
    render: G,
    renderTracked: Ce,
    renderTriggered: $e,
    errorCaptured: Ve,
    serverPrefetch: qe,
    // public API
    expose: _t,
    inheritAttrs: Wt,
    // assets
    components: L,
    directives: ee,
    filters: Pe
  } = r, we = x.NODE_ENV !== "production" ? Xw() : null;
  if (x.NODE_ENV !== "production") {
    const [J] = t.propsOptions;
    if (J)
      for (const se in J)
        we("Props", se);
  }
  if (N && Qw(N, s, we), c)
    for (const J in c) {
      const se = c[J];
      ue(se) ? (x.NODE_ENV !== "production" ? Object.defineProperty(s, J, {
        value: se.bind(i),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[J] = se.bind(i), x.NODE_ENV !== "production" && we("Methods", J)) : x.NODE_ENV !== "production" && k(
        `Method "${J}" has type "${typeof se}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (f) {
    x.NODE_ENV !== "production" && !ue(f) && k(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const J = f.call(i, i);
    if (x.NODE_ENV !== "production" && Sf(J) && k(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Ue(J))
      x.NODE_ENV !== "production" && k("data() should return an object.");
    else if (t.data = Bf(J), x.NODE_ENV !== "production")
      for (const se in J)
        we("Data", se), Yf(se[0]) || Object.defineProperty(s, se, {
          configurable: !0,
          enumerable: !0,
          get: () => J[se],
          set: tt
        });
  }
  if (hf = !0, l)
    for (const J in l) {
      const se = l[J], mt = ue(se) ? se.bind(i, i) : ue(se.get) ? se.get.bind(i, i) : tt;
      x.NODE_ENV !== "production" && mt === tt && k(`Computed property "${J}" has no getter.`);
      const ln = !ue(se) && ue(se.set) ? se.set.bind(i) : x.NODE_ENV !== "production" ? () => {
        k(
          `Write operation failed: computed property "${J}" is readonly.`
        );
      } : tt, at = eO({
        get: mt,
        set: ln
      });
      Object.defineProperty(s, J, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: (zn) => at.value = zn
      }), x.NODE_ENV !== "production" && we("Computed", J);
    }
  if (h)
    for (const J in h)
      _h(h[J], s, i, J);
  if (g) {
    const J = ue(g) ? g.call(i) : g;
    Reflect.ownKeys(J).forEach((se) => {
      o1(se, J[se]);
    });
  }
  O && za(O, t, "c");
  function Oe(J, se) {
    re(se) ? se.forEach((mt) => J(mt.bind(i))) : se && J(se.bind(i));
  }
  if (Oe(Fw, v), Oe(Bw, A), Oe(Hw, H), Oe(Uw, Y), Oe(Pw, ie), Oe(Mw, be), Oe(qw, Ve), Oe(Gw, Ce), Oe(Kw, $e), Oe(Ww, Ae), Oe(ph, We), Oe(kw, qe), re(_t))
    if (_t.length) {
      const J = t.exposed || (t.exposed = {});
      _t.forEach((se) => {
        Object.defineProperty(J, se, {
          get: () => i[se],
          set: (mt) => i[se] = mt
        });
      });
    } else t.exposed || (t.exposed = {});
  G && t.render === tt && (t.render = G), Wt != null && (t.inheritAttrs = Wt), L && (t.components = L), ee && (t.directives = ee), qe && dh(t);
}
function Qw(t, r, i = tt) {
  re(t) && (t = pf(t));
  for (const s in t) {
    const f = t[s];
    let l;
    Ue(f) ? "default" in f ? l = ts(
      f.from || s,
      f.default,
      !0
    ) : l = ts(f.from || s) : l = ts(f), nt(l) ? Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (c) => l.value = c
    }) : r[s] = l, x.NODE_ENV !== "production" && i("Inject", s);
  }
}
function za(t, r, i) {
  Nn(
    re(t) ? t.map((s) => s.bind(r.proxy)) : t.bind(r.proxy),
    r,
    i
  );
}
function _h(t, r, i, s) {
  let f = s.includes(".") ? Th(i, s) : () => i[s];
  if (je(t)) {
    const l = r[t];
    ue(l) ? Bi(f, l) : x.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${t}"`, l);
  } else if (ue(t))
    Bi(f, t.bind(i));
  else if (Ue(t))
    if (re(t))
      t.forEach((l) => _h(l, r, i, s));
    else {
      const l = ue(t.handler) ? t.handler.bind(i) : r[t.handler];
      ue(l) ? Bi(f, l, t) : x.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${t.handler}"`, l);
    }
  else x.NODE_ENV !== "production" && k(`Invalid watch option: "${s}"`, t);
}
function Jf(t) {
  const r = t.type, { mixins: i, extends: s } = r, {
    mixins: f,
    optionsCache: l,
    config: { optionMergeStrategies: c }
  } = t.appContext, h = l.get(r);
  let g;
  return h ? g = h : !f.length && !i && !s ? g = r : (g = {}, f.length && f.forEach(
    (N) => ms(g, N, c, !0)
  ), ms(g, r, c)), Ue(r) && l.set(r, g), g;
}
function ms(t, r, i, s = !1) {
  const { mixins: f, extends: l } = r;
  l && ms(t, l, i, !0), f && f.forEach(
    (c) => ms(t, c, i, !0)
  );
  for (const c in r)
    if (s && c === "expose")
      x.NODE_ENV !== "production" && k(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const h = e1[c] || i && i[c];
      t[c] = h ? h(t[c], r[c]) : r[c];
    }
  return t;
}
const e1 = {
  data: ja,
  props: Ya,
  emits: Ya,
  // objects
  methods: Pi,
  computed: Pi,
  // lifecycle
  beforeCreate: wt,
  created: wt,
  beforeMount: wt,
  mounted: wt,
  beforeUpdate: wt,
  updated: wt,
  beforeDestroy: wt,
  beforeUnmount: wt,
  destroyed: wt,
  unmounted: wt,
  activated: wt,
  deactivated: wt,
  errorCaptured: wt,
  serverPrefetch: wt,
  // assets
  components: Pi,
  directives: Pi,
  // watch
  watch: n1,
  // provide / inject
  provide: ja,
  inject: t1
};
function ja(t, r) {
  return r ? t ? function() {
    return Ke(
      ue(t) ? t.call(this, this) : t,
      ue(r) ? r.call(this, this) : r
    );
  } : r : t;
}
function t1(t, r) {
  return Pi(pf(t), pf(r));
}
function pf(t) {
  if (re(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++)
      r[t[i]] = t[i];
    return r;
  }
  return t;
}
function wt(t, r) {
  return t ? [...new Set([].concat(t, r))] : r;
}
function Pi(t, r) {
  return t ? Ke(/* @__PURE__ */ Object.create(null), t, r) : r;
}
function Ya(t, r) {
  return t ? re(t) && re(r) ? [.../* @__PURE__ */ new Set([...t, ...r])] : Ke(
    /* @__PURE__ */ Object.create(null),
    qa(t),
    qa(r ?? {})
  ) : r;
}
function n1(t, r) {
  if (!t) return r;
  if (!r) return t;
  const i = Ke(/* @__PURE__ */ Object.create(null), t);
  for (const s in r)
    i[s] = wt(t[s], r[s]);
  return i;
}
function mh() {
  return {
    app: null,
    config: {
      isNativeTag: gb,
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
let r1 = 0;
function i1(t, r) {
  return function(s, f = null) {
    ue(s) || (s = Ke({}, s)), f != null && !Ue(f) && (x.NODE_ENV !== "production" && k("root props passed to app.mount() must be an object."), f = null);
    const l = mh(), c = /* @__PURE__ */ new WeakSet(), h = [];
    let g = !1;
    const N = l.app = {
      _uid: r1++,
      _component: s,
      _props: f,
      _container: null,
      _context: l,
      _instance: null,
      version: sd,
      get config() {
        return l.config;
      },
      set config(O) {
        x.NODE_ENV !== "production" && k(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(O, ...v) {
        return c.has(O) ? x.NODE_ENV !== "production" && k("Plugin has already been applied to target app.") : O && ue(O.install) ? (c.add(O), O.install(N, ...v)) : ue(O) ? (c.add(O), O(N, ...v)) : x.NODE_ENV !== "production" && k(
          'A plugin must either be a function or an object with an "install" function.'
        ), N;
      },
      mixin(O) {
        return l.mixins.includes(O) ? x.NODE_ENV !== "production" && k(
          "Mixin has already been applied to target app" + (O.name ? `: ${O.name}` : "")
        ) : l.mixins.push(O), N;
      },
      component(O, v) {
        return x.NODE_ENV !== "production" && yf(O, l.config), v ? (x.NODE_ENV !== "production" && l.components[O] && k(`Component "${O}" has already been registered in target app.`), l.components[O] = v, N) : l.components[O];
      },
      directive(O, v) {
        return x.NODE_ENV !== "production" && ch(O), v ? (x.NODE_ENV !== "production" && l.directives[O] && k(`Directive "${O}" has already been registered in target app.`), l.directives[O] = v, N) : l.directives[O];
      },
      mount(O, v, A) {
        if (g)
          x.NODE_ENV !== "production" && k(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          x.NODE_ENV !== "production" && O.__vue_app__ && k(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const H = N._ceVNode || cr(s, f);
          return H.appContext = l, A === !0 ? A = "svg" : A === !1 && (A = void 0), x.NODE_ENV !== "production" && (l.reload = () => {
            t(
              dr(H),
              O,
              A
            );
          }), v && r ? r(H, O) : t(H, O, A), g = !0, N._container = O, O.__vue_app__ = N, x.NODE_ENV !== "production" && (N._instance = H.component, Ow(N, sd)), tl(H.component);
        }
      },
      onUnmount(O) {
        x.NODE_ENV !== "production" && typeof O != "function" && k(
          `Expected function as first argument to app.onUnmount(), but got ${typeof O}`
        ), h.push(O);
      },
      unmount() {
        g ? (Nn(
          h,
          N._instance,
          16
        ), t(null, N._container), x.NODE_ENV !== "production" && (N._instance = null, Nw(N)), delete N._container.__vue_app__) : x.NODE_ENV !== "production" && k("Cannot unmount an app that is not mounted.");
      },
      provide(O, v) {
        return x.NODE_ENV !== "production" && O in l.provides && k(
          `App already provides property with key "${String(O)}". It will be overwritten with the new value.`
        ), l.provides[O] = v, N;
      },
      runWithContext(O) {
        const v = li;
        li = N;
        try {
          return O();
        } finally {
          li = v;
        }
      }
    };
    return N;
  };
}
let li = null;
function o1(t, r) {
  if (!st)
    x.NODE_ENV !== "production" && k("provide() can only be used inside setup().");
  else {
    let i = st.provides;
    const s = st.parent && st.parent.provides;
    s === i && (i = st.provides = Object.create(s)), i[t] = r;
  }
}
function ts(t, r, i = !1) {
  const s = st || Bt;
  if (s || li) {
    const f = li ? li._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (f && t in f)
      return f[t];
    if (arguments.length > 1)
      return i && ue(r) ? r.call(s && s.proxy) : r;
    x.NODE_ENV !== "production" && k(`injection "${String(t)}" not found.`);
  } else x.NODE_ENV !== "production" && k("inject() can only be used inside setup() or functional components.");
}
const vh = {}, yh = () => Object.create(vh), Eh = (t) => Object.getPrototypeOf(t) === vh;
function s1(t, r, i, s = !1) {
  const f = {}, l = yh();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), bh(t, r, f, l);
  for (const c in t.propsOptions[0])
    c in f || (f[c] = void 0);
  x.NODE_ENV !== "production" && Oh(r || {}, f, t), i ? t.props = s ? f : iw(f) : t.type.props ? t.props = f : t.props = l, t.attrs = l;
}
function u1(t) {
  for (; t; ) {
    if (t.type.__hmrId) return !0;
    t = t.parent;
  }
}
function f1(t, r, i, s) {
  const {
    props: f,
    attrs: l,
    vnode: { patchFlag: c }
  } = t, h = ce(f), [g] = t.propsOptions;
  let N = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(x.NODE_ENV !== "production" && u1(t)) && (s || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const O = t.vnode.dynamicProps;
      for (let v = 0; v < O.length; v++) {
        let A = O[v];
        if (Ls(t.emitsOptions, A))
          continue;
        const H = r[A];
        if (g)
          if (Ee(l, A))
            H !== l[A] && (l[A] = H, N = !0);
          else {
            const Y = Ut(A);
            f[Y] = gf(
              g,
              h,
              Y,
              H,
              t,
              !1
            );
          }
        else
          H !== l[A] && (l[A] = H, N = !0);
      }
    }
  } else {
    bh(t, r, f, l) && (N = !0);
    let O;
    for (const v in h)
      (!r || // for camelCase
      !Ee(r, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((O = Tt(v)) === v || !Ee(r, O))) && (g ? i && // for camelCase
      (i[v] !== void 0 || // for kebab-case
      i[O] !== void 0) && (f[v] = gf(
        g,
        h,
        v,
        void 0,
        t,
        !0
      )) : delete f[v]);
    if (l !== h)
      for (const v in l)
        (!r || !Ee(r, v)) && (delete l[v], N = !0);
  }
  N && wn(t.attrs, "set", ""), x.NODE_ENV !== "production" && Oh(r || {}, f, t);
}
function bh(t, r, i, s) {
  const [f, l] = t.propsOptions;
  let c = !1, h;
  if (r)
    for (let g in r) {
      if ($i(g))
        continue;
      const N = r[g];
      let O;
      f && Ee(f, O = Ut(g)) ? !l || !l.includes(O) ? i[O] = N : (h || (h = {}))[O] = N : Ls(t.emitsOptions, g) || (!(g in s) || N !== s[g]) && (s[g] = N, c = !0);
    }
  if (l) {
    const g = ce(i), N = h || Le;
    for (let O = 0; O < l.length; O++) {
      const v = l[O];
      i[v] = gf(
        f,
        g,
        v,
        N[v],
        t,
        !Ee(N, v)
      );
    }
  }
  return c;
}
function gf(t, r, i, s, f, l) {
  const c = t[i];
  if (c != null) {
    const h = Ee(c, "default");
    if (h && s === void 0) {
      const g = c.default;
      if (c.type !== Function && !c.skipFactory && ue(g)) {
        const { propsDefaults: N } = f;
        if (i in N)
          s = N[i];
        else {
          const O = Zi(f);
          s = N[i] = g.call(
            null,
            r
          ), O();
        }
      } else
        s = g;
      f.ce && f.ce._setProp(i, s);
    }
    c[
      0
      /* shouldCast */
    ] && (l && !h ? s = !1 : c[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Tt(i)) && (s = !0));
  }
  return s;
}
const l1 = /* @__PURE__ */ new WeakMap();
function wh(t, r, i = !1) {
  const s = i ? l1 : r.propsCache, f = s.get(t);
  if (f)
    return f;
  const l = t.props, c = {}, h = [];
  let g = !1;
  if (!ue(t)) {
    const O = (v) => {
      g = !0;
      const [A, H] = wh(v, r, !0);
      Ke(c, A), H && h.push(...H);
    };
    !i && r.mixins.length && r.mixins.forEach(O), t.extends && O(t.extends), t.mixins && t.mixins.forEach(O);
  }
  if (!l && !g)
    return Ue(t) && s.set(t, oi), oi;
  if (re(l))
    for (let O = 0; O < l.length; O++) {
      x.NODE_ENV !== "production" && !je(l[O]) && k("props must be strings when using array syntax.", l[O]);
      const v = Ut(l[O]);
      Ja(v) && (c[v] = Le);
    }
  else if (l) {
    x.NODE_ENV !== "production" && !Ue(l) && k("invalid props options", l);
    for (const O in l) {
      const v = Ut(O);
      if (Ja(v)) {
        const A = l[O], H = c[v] = re(A) || ue(A) ? { type: A } : Ke({}, A), Y = H.type;
        let ie = !1, be = !0;
        if (re(Y))
          for (let _e = 0; _e < Y.length; ++_e) {
            const Ae = Y[_e], oe = ue(Ae) && Ae.name;
            if (oe === "Boolean") {
              ie = !0;
              break;
            } else oe === "String" && (be = !1);
          }
        else
          ie = ue(Y) && Y.name === "Boolean";
        H[
          0
          /* shouldCast */
        ] = ie, H[
          1
          /* shouldCastTrue */
        ] = be, (ie || Ee(H, "default")) && h.push(v);
      }
    }
  }
  const N = [c, h];
  return Ue(t) && s.set(t, N), N;
}
function Ja(t) {
  return t[0] !== "$" && !$i(t) ? !0 : (x.NODE_ENV !== "production" && k(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function c1(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function Oh(t, r, i) {
  const s = ce(r), f = i.propsOptions[0];
  for (const l in f) {
    let c = f[l];
    c != null && a1(
      l,
      s[l],
      c,
      x.NODE_ENV !== "production" ? En(s) : s,
      !Ee(t, l) && !Ee(t, Tt(l))
    );
  }
}
function a1(t, r, i, s, f) {
  const { type: l, required: c, validator: h, skipCheck: g } = i;
  if (c && f) {
    k('Missing required prop: "' + t + '"');
    return;
  }
  if (!(r == null && !c)) {
    if (l != null && l !== !0 && !g) {
      let N = !1;
      const O = re(l) ? l : [l], v = [];
      for (let A = 0; A < O.length && !N; A++) {
        const { valid: H, expectedType: Y } = h1(r, O[A]);
        v.push(Y || ""), N = H;
      }
      if (!N) {
        k(p1(t, r, v));
        return;
      }
    }
    h && !h(r, s) && k('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const d1 = /* @__PURE__ */ kn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function h1(t, r) {
  let i;
  const s = c1(r);
  if (s === "null")
    i = t === null;
  else if (d1(s)) {
    const f = typeof t;
    i = f === s.toLowerCase(), !i && f === "object" && (i = t instanceof r);
  } else s === "Object" ? i = Ue(t) : s === "Array" ? i = re(t) : i = t instanceof r;
  return {
    valid: i,
    expectedType: s
  };
}
function p1(t, r, i) {
  if (i.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${t}". Expected ${i.map(Ss).join(" | ")}`;
  const f = i[0], l = Af(r), c = Xa(r, f), h = Xa(r, l);
  return i.length === 1 && Za(f) && !g1(f, l) && (s += ` with value ${c}`), s += `, got ${l} `, Za(l) && (s += `with value ${h}.`), s;
}
function Xa(t, r) {
  return r === "String" ? `"${t}"` : r === "Number" ? `${Number(t)}` : `${t}`;
}
function Za(t) {
  return ["string", "number", "boolean"].some((i) => t.toLowerCase() === i);
}
function g1(...t) {
  return t.some((r) => r.toLowerCase() === "boolean");
}
const Nh = (t) => t[0] === "_" || t === "$stable", Xf = (t) => re(t) ? t.map(on) : [on(t)], _1 = (t, r, i) => {
  if (r._n)
    return r;
  const s = Iw((...f) => (x.NODE_ENV !== "production" && st && (!i || i.root === st.root) && k(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Xf(r(...f))), i);
  return s._c = !1, s;
}, xh = (t, r, i) => {
  const s = t._ctx;
  for (const f in t) {
    if (Nh(f)) continue;
    const l = t[f];
    if (ue(l))
      r[f] = _1(f, l, s);
    else if (l != null) {
      x.NODE_ENV !== "production" && k(
        `Non-function value encountered for slot "${f}". Prefer function slots for better performance.`
      );
      const c = Xf(l);
      r[f] = () => c;
    }
  }
}, Sh = (t, r) => {
  x.NODE_ENV !== "production" && !jf(t.vnode) && k(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const i = Xf(r);
  t.slots.default = () => i;
}, _f = (t, r, i) => {
  for (const s in r)
    (i || s !== "_") && (t[s] = r[s]);
}, m1 = (t, r, i) => {
  const s = t.slots = yh();
  if (t.vnode.shapeFlag & 32) {
    const f = r._;
    f ? (_f(s, r, i), i && as(s, "_", f, !0)) : xh(r, s);
  } else r && Sh(t, r);
}, v1 = (t, r, i) => {
  const { vnode: s, slots: f } = t;
  let l = !0, c = Le;
  if (s.shapeFlag & 32) {
    const h = r._;
    h ? x.NODE_ENV !== "production" && bn ? (_f(f, r, i), wn(t, "set", "$slots")) : i && h === 1 ? l = !1 : _f(f, r, i) : (l = !r.$stable, xh(r, f)), c = r;
  } else r && (Sh(t, r), c = { default: 1 });
  if (l)
    for (const h in f)
      !Nh(h) && c[h] == null && delete f[h];
};
let Ii, fr;
function Fn(t, r) {
  t.appContext.config.performance && vs() && fr.mark(`vue-${r}-${t.uid}`), x.NODE_ENV !== "production" && Cw(t, r, vs() ? fr.now() : Date.now());
}
function Bn(t, r) {
  if (t.appContext.config.performance && vs()) {
    const i = `vue-${r}-${t.uid}`, s = i + ":end";
    fr.mark(s), fr.measure(
      `<${Ps(t, t.type)}> ${r}`,
      i,
      s
    ), fr.clearMarks(i), fr.clearMarks(s);
  }
  x.NODE_ENV !== "production" && Tw(t, r, vs() ? fr.now() : Date.now());
}
function vs() {
  return Ii !== void 0 || (typeof window < "u" && window.performance ? (Ii = !0, fr = window.performance) : Ii = !1), Ii;
}
function y1() {
  const t = [];
  if (x.NODE_ENV !== "production" && t.length) {
    const r = t.length > 1;
    console.warn(
      `Feature flag${r ? "s" : ""} ${t.join(", ")} ${r ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const $t = R1;
function E1(t) {
  return b1(t);
}
function b1(t, r) {
  y1();
  const i = Df();
  i.__VUE__ = !0, x.NODE_ENV !== "production" && sh(i.__VUE_DEVTOOLS_GLOBAL_HOOK__, i);
  const {
    insert: s,
    remove: f,
    patchProp: l,
    createElement: c,
    createText: h,
    createComment: g,
    setText: N,
    setElementText: O,
    parentNode: v,
    nextSibling: A,
    setScopeId: H = tt,
    insertStaticContent: Y
  } = t, ie = (_, E, C, V = null, R = null, M = null, U = void 0, F = null, B = x.NODE_ENV !== "production" && bn ? !1 : !!E.dynamicChildren) => {
    if (_ === E)
      return;
    _ && !Li(_, E) && (V = an(_), cn(_, R, M, !0), _ = null), E.patchFlag === -2 && (B = !1, E.dynamicChildren = null);
    const { type: $, ref: X, shapeFlag: W } = E;
    switch ($) {
      case Xi:
        be(_, E, C, V);
        break;
      case un:
        _e(_, E, C, V);
        break;
      case rs:
        _ == null ? Ae(E, C, V, U) : x.NODE_ENV !== "production" && oe(_, E, C, U);
        break;
      case vn:
        ee(
          _,
          E,
          C,
          V,
          R,
          M,
          U,
          F,
          B
        );
        break;
      default:
        W & 1 ? Ce(
          _,
          E,
          C,
          V,
          R,
          M,
          U,
          F,
          B
        ) : W & 6 ? Pe(
          _,
          E,
          C,
          V,
          R,
          M,
          U,
          F,
          B
        ) : W & 64 || W & 128 ? $.process(
          _,
          E,
          C,
          V,
          R,
          M,
          U,
          F,
          B,
          dn
        ) : x.NODE_ENV !== "production" && k("Invalid VNode type:", $, `(${typeof $})`);
    }
    X != null && R && af(X, _ && _.ref, M, E || _, !E);
  }, be = (_, E, C, V) => {
    if (_ == null)
      s(
        E.el = h(E.children),
        C,
        V
      );
    else {
      const R = E.el = _.el;
      E.children !== _.children && N(R, E.children);
    }
  }, _e = (_, E, C, V) => {
    _ == null ? s(
      E.el = g(E.children || ""),
      C,
      V
    ) : E.el = _.el;
  }, Ae = (_, E, C, V) => {
    [_.el, _.anchor] = Y(
      _.children,
      E,
      C,
      V,
      _.el,
      _.anchor
    );
  }, oe = (_, E, C, V) => {
    if (E.children !== _.children) {
      const R = A(_.anchor);
      G(_), [E.el, E.anchor] = Y(
        E.children,
        C,
        R,
        V
      );
    } else
      E.el = _.el, E.anchor = _.anchor;
  }, We = ({ el: _, anchor: E }, C, V) => {
    let R;
    for (; _ && _ !== E; )
      R = A(_), s(_, C, V), _ = R;
    s(E, C, V);
  }, G = ({ el: _, anchor: E }) => {
    let C;
    for (; _ && _ !== E; )
      C = A(_), f(_), _ = C;
    f(E);
  }, Ce = (_, E, C, V, R, M, U, F, B) => {
    E.type === "svg" ? U = "svg" : E.type === "math" && (U = "mathml"), _ == null ? $e(
      E,
      C,
      V,
      R,
      M,
      U,
      F,
      B
    ) : _t(
      _,
      E,
      R,
      M,
      U,
      F,
      B
    );
  }, $e = (_, E, C, V, R, M, U, F) => {
    let B, $;
    const { props: X, shapeFlag: W, transition: j, dirs: Z } = _;
    if (B = _.el = c(
      _.type,
      M,
      X && X.is,
      X
    ), W & 8 ? O(B, _.children) : W & 16 && qe(
      _.children,
      B,
      null,
      V,
      R,
      tf(_, M),
      U,
      F
    ), Z && Sr(_, null, V, "created"), Ve(B, _, _.scopeId, U, V), X) {
      for (const xe in X)
        xe !== "value" && !$i(xe) && l(B, xe, null, X[xe], M, V);
      "value" in X && l(B, "value", null, X.value, M), ($ = X.onVnodeBeforeMount) && _n($, V, _);
    }
    x.NODE_ENV !== "production" && (as(B, "__vnode", _, !0), as(B, "__vueParentComponent", V, !0)), Z && Sr(_, null, V, "beforeMount");
    const de = w1(R, j);
    de && j.beforeEnter(B), s(B, E, C), (($ = X && X.onVnodeMounted) || de || Z) && $t(() => {
      $ && _n($, V, _), de && j.enter(B), Z && Sr(_, null, V, "mounted");
    }, R);
  }, Ve = (_, E, C, V, R) => {
    if (C && H(_, C), V)
      for (let M = 0; M < V.length; M++)
        H(_, V[M]);
    if (R) {
      let M = R.subTree;
      if (x.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && (M = Zf(M.children) || M), E === M || Lh(M.type) && (M.ssContent === E || M.ssFallback === E)) {
        const U = R.vnode;
        Ve(
          _,
          U,
          U.scopeId,
          U.slotScopeIds,
          R.parent
        );
      }
    }
  }, qe = (_, E, C, V, R, M, U, F, B = 0) => {
    for (let $ = B; $ < _.length; $++) {
      const X = _[$] = F ? sr(_[$]) : on(_[$]);
      ie(
        null,
        X,
        E,
        C,
        V,
        R,
        M,
        U,
        F
      );
    }
  }, _t = (_, E, C, V, R, M, U) => {
    const F = E.el = _.el;
    x.NODE_ENV !== "production" && (F.__vnode = E);
    let { patchFlag: B, dynamicChildren: $, dirs: X } = E;
    B |= _.patchFlag & 16;
    const W = _.props || Le, j = E.props || Le;
    let Z;
    if (C && Ar(C, !1), (Z = j.onVnodeBeforeUpdate) && _n(Z, C, E, _), X && Sr(E, _, C, "beforeUpdate"), C && Ar(C, !0), x.NODE_ENV !== "production" && bn && (B = 0, U = !1, $ = null), (W.innerHTML && j.innerHTML == null || W.textContent && j.textContent == null) && O(F, ""), $ ? (Wt(
      _.dynamicChildren,
      $,
      F,
      C,
      V,
      tf(E, R),
      M
    ), x.NODE_ENV !== "production" && ns(_, E)) : U || mt(
      _,
      E,
      F,
      null,
      C,
      V,
      tf(E, R),
      M,
      !1
    ), B > 0) {
      if (B & 16)
        L(F, W, j, C, R);
      else if (B & 2 && W.class !== j.class && l(F, "class", null, j.class, R), B & 4 && l(F, "style", W.style, j.style, R), B & 8) {
        const de = E.dynamicProps;
        for (let xe = 0; xe < de.length; xe++) {
          const Ne = de[xe], ut = W[Ne], Xe = j[Ne];
          (Xe !== ut || Ne === "value") && l(F, Ne, ut, Xe, R, C);
        }
      }
      B & 1 && _.children !== E.children && O(F, E.children);
    } else !U && $ == null && L(F, W, j, C, R);
    ((Z = j.onVnodeUpdated) || X) && $t(() => {
      Z && _n(Z, C, E, _), X && Sr(E, _, C, "updated");
    }, V);
  }, Wt = (_, E, C, V, R, M, U) => {
    for (let F = 0; F < E.length; F++) {
      const B = _[F], $ = E[F], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === vn || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Li(B, $) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 70) ? v(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      ie(
        B,
        $,
        X,
        null,
        V,
        R,
        M,
        U,
        !0
      );
    }
  }, L = (_, E, C, V, R) => {
    if (E !== C) {
      if (E !== Le)
        for (const M in E)
          !$i(M) && !(M in C) && l(
            _,
            M,
            E[M],
            null,
            R,
            V
          );
      for (const M in C) {
        if ($i(M)) continue;
        const U = C[M], F = E[M];
        U !== F && M !== "value" && l(_, M, F, U, R, V);
      }
      "value" in C && l(_, "value", E.value, C.value, R);
    }
  }, ee = (_, E, C, V, R, M, U, F, B) => {
    const $ = E.el = _ ? _.el : h(""), X = E.anchor = _ ? _.anchor : h("");
    let { patchFlag: W, dynamicChildren: j, slotScopeIds: Z } = E;
    x.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (bn || W & 2048) && (W = 0, B = !1, j = null), Z && (F = F ? F.concat(Z) : Z), _ == null ? (s($, C, V), s(X, C, V), qe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      C,
      X,
      R,
      M,
      U,
      F,
      B
    )) : W > 0 && W & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (Wt(
      _.dynamicChildren,
      j,
      C,
      R,
      M,
      U,
      F
    ), x.NODE_ENV !== "production" ? ns(_, E) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (E.key != null || R && E === R.subTree) && ns(
        _,
        E,
        !0
        /* shallow */
      )
    )) : mt(
      _,
      E,
      C,
      X,
      R,
      M,
      U,
      F,
      B
    );
  }, Pe = (_, E, C, V, R, M, U, F, B) => {
    E.slotScopeIds = F, _ == null ? E.shapeFlag & 512 ? R.ctx.activate(
      E,
      C,
      V,
      U,
      B
    ) : we(
      E,
      C,
      V,
      R,
      M,
      U,
      B
    ) : Oe(_, E, B);
  }, we = (_, E, C, V, R, M, U) => {
    const F = _.component = K1(
      _,
      V,
      R
    );
    if (x.NODE_ENV !== "production" && F.type.__hmrId && yw(F), x.NODE_ENV !== "production" && (Zo(_), Fn(F, "mount")), jf(_) && (F.ctx.renderer = dn), x.NODE_ENV !== "production" && Fn(F, "init"), z1(F, !1, U), x.NODE_ENV !== "production" && Bn(F, "init"), F.asyncDep) {
      if (x.NODE_ENV !== "production" && bn && (_.el = null), R && R.registerDep(F, J, U), !_.el) {
        const B = F.subTree = cr(un);
        _e(null, B, E, C);
      }
    } else
      J(
        F,
        _,
        E,
        C,
        R,
        M,
        U
      );
    x.NODE_ENV !== "production" && (Qo(), Bn(F, "mount"));
  }, Oe = (_, E, C) => {
    const V = E.component = _.component;
    if (I1(_, E, C))
      if (V.asyncDep && !V.asyncResolved) {
        x.NODE_ENV !== "production" && Zo(E), se(V, E, C), x.NODE_ENV !== "production" && Qo();
        return;
      } else
        V.next = E, V.update();
    else
      E.el = _.el, V.vnode = E;
  }, J = (_, E, C, V, R, M, U) => {
    const F = () => {
      if (_.isMounted) {
        let { next: W, bu: j, u: Z, parent: de, vnode: xe } = _;
        {
          const ft = Ah(_);
          if (ft) {
            W && (W.el = xe.el, se(_, W, U)), ft.asyncDep.then(() => {
              _.isUnmounted || F();
            });
            return;
          }
        }
        let Ne = W, ut;
        x.NODE_ENV !== "production" && Zo(W || _.vnode), Ar(_, !1), W ? (W.el = xe.el, se(_, W, U)) : W = xe, j && Ti(j), (ut = W.props && W.props.onVnodeBeforeUpdate) && _n(ut, de, W, xe), Ar(_, !0), x.NODE_ENV !== "production" && Fn(_, "render");
        const Xe = nf(_);
        x.NODE_ENV !== "production" && Bn(_, "render");
        const vt = _.subTree;
        _.subTree = Xe, x.NODE_ENV !== "production" && Fn(_, "patch"), ie(
          vt,
          Xe,
          // parent may have changed if it's in a teleport
          v(vt.el),
          // anchor may have changed if it's in a fragment
          an(vt),
          _,
          R,
          M
        ), x.NODE_ENV !== "production" && Bn(_, "patch"), W.el = Xe.el, Ne === null && L1(_, Xe.el), Z && $t(Z, R), (ut = W.props && W.props.onVnodeUpdated) && $t(
          () => _n(ut, de, W, xe),
          R
        ), x.NODE_ENV !== "production" && uh(_), x.NODE_ENV !== "production" && Qo();
      } else {
        let W;
        const { el: j, props: Z } = E, { bm: de, m: xe, parent: Ne, root: ut, type: Xe } = _, vt = Fi(E);
        if (Ar(_, !1), de && Ti(de), !vt && (W = Z && Z.onVnodeBeforeMount) && _n(W, Ne, E), Ar(_, !0), j && hi) {
          const ft = () => {
            x.NODE_ENV !== "production" && Fn(_, "render"), _.subTree = nf(_), x.NODE_ENV !== "production" && Bn(_, "render"), x.NODE_ENV !== "production" && Fn(_, "hydrate"), hi(
              j,
              _.subTree,
              _,
              R,
              null
            ), x.NODE_ENV !== "production" && Bn(_, "hydrate");
          };
          vt && Xe.__asyncHydrate ? Xe.__asyncHydrate(
            j,
            _,
            ft
          ) : ft();
        } else {
          ut.ce && ut.ce._injectChildStyle(Xe), x.NODE_ENV !== "production" && Fn(_, "render");
          const ft = _.subTree = nf(_);
          x.NODE_ENV !== "production" && Bn(_, "render"), x.NODE_ENV !== "production" && Fn(_, "patch"), ie(
            null,
            ft,
            C,
            V,
            _,
            R,
            M
          ), x.NODE_ENV !== "production" && Bn(_, "patch"), E.el = ft.el;
        }
        if (xe && $t(xe, R), !vt && (W = Z && Z.onVnodeMounted)) {
          const ft = E;
          $t(
            () => _n(W, Ne, ft),
            R
          );
        }
        (E.shapeFlag & 256 || Ne && Fi(Ne.vnode) && Ne.vnode.shapeFlag & 256) && _.a && $t(_.a, R), _.isMounted = !0, x.NODE_ENV !== "production" && xw(_), E = C = V = null;
      }
    };
    _.scope.on();
    const B = _.effect = new Rd(F);
    _.scope.off();
    const $ = _.update = B.run.bind(B), X = _.job = B.runIfDirty.bind(B);
    X.i = _, X.id = _.uid, B.scheduler = () => Ds(X), Ar(_, !0), x.NODE_ENV !== "production" && (B.onTrack = _.rtc ? (W) => Ti(_.rtc, W) : void 0, B.onTrigger = _.rtg ? (W) => Ti(_.rtg, W) : void 0), $();
  }, se = (_, E, C) => {
    E.component = _;
    const V = _.vnode.props;
    _.vnode = E, _.next = null, f1(_, E.props, V, C), v1(_, E.children, C), Kn(), Ka(_), Gn();
  }, mt = (_, E, C, V, R, M, U, F, B = !1) => {
    const $ = _ && _.children, X = _ ? _.shapeFlag : 0, W = E.children, { patchFlag: j, shapeFlag: Z } = E;
    if (j > 0) {
      if (j & 128) {
        at(
          $,
          W,
          C,
          V,
          R,
          M,
          U,
          F,
          B
        );
        return;
      } else if (j & 256) {
        ln(
          $,
          W,
          C,
          V,
          R,
          M,
          U,
          F,
          B
        );
        return;
      }
    }
    Z & 8 ? (X & 16 && gr($, R, M), W !== $ && O(C, W)) : X & 16 ? Z & 16 ? at(
      $,
      W,
      C,
      V,
      R,
      M,
      U,
      F,
      B
    ) : gr($, R, M, !0) : (X & 8 && O(C, ""), Z & 16 && qe(
      W,
      C,
      V,
      R,
      M,
      U,
      F,
      B
    ));
  }, ln = (_, E, C, V, R, M, U, F, B) => {
    _ = _ || oi, E = E || oi;
    const $ = _.length, X = E.length, W = Math.min($, X);
    let j;
    for (j = 0; j < W; j++) {
      const Z = E[j] = B ? sr(E[j]) : on(E[j]);
      ie(
        _[j],
        Z,
        C,
        null,
        R,
        M,
        U,
        F,
        B
      );
    }
    $ > X ? gr(
      _,
      R,
      M,
      !0,
      !1,
      W
    ) : qe(
      E,
      C,
      V,
      R,
      M,
      U,
      F,
      B,
      W
    );
  }, at = (_, E, C, V, R, M, U, F, B) => {
    let $ = 0;
    const X = E.length;
    let W = _.length - 1, j = X - 1;
    for (; $ <= W && $ <= j; ) {
      const Z = _[$], de = E[$] = B ? sr(E[$]) : on(E[$]);
      if (Li(Z, de))
        ie(
          Z,
          de,
          C,
          null,
          R,
          M,
          U,
          F,
          B
        );
      else
        break;
      $++;
    }
    for (; $ <= W && $ <= j; ) {
      const Z = _[W], de = E[j] = B ? sr(E[j]) : on(E[j]);
      if (Li(Z, de))
        ie(
          Z,
          de,
          C,
          null,
          R,
          M,
          U,
          F,
          B
        );
      else
        break;
      W--, j--;
    }
    if ($ > W) {
      if ($ <= j) {
        const Z = j + 1, de = Z < X ? E[Z].el : V;
        for (; $ <= j; )
          ie(
            null,
            E[$] = B ? sr(E[$]) : on(E[$]),
            C,
            de,
            R,
            M,
            U,
            F,
            B
          ), $++;
      }
    } else if ($ > j)
      for (; $ <= W; )
        cn(_[$], R, M, !0), $++;
    else {
      const Z = $, de = $, xe = /* @__PURE__ */ new Map();
      for ($ = de; $ <= j; $++) {
        const Ze = E[$] = B ? sr(E[$]) : on(E[$]);
        Ze.key != null && (x.NODE_ENV !== "production" && xe.has(Ze.key) && k(
          "Duplicate keys found during update:",
          JSON.stringify(Ze.key),
          "Make sure keys are unique."
        ), xe.set(Ze.key, $));
      }
      let Ne, ut = 0;
      const Xe = j - de + 1;
      let vt = !1, ft = 0;
      const Sn = new Array(Xe);
      for ($ = 0; $ < Xe; $++) Sn[$] = 0;
      for ($ = Z; $ <= W; $++) {
        const Ze = _[$];
        if (ut >= Xe) {
          cn(Ze, R, M, !0);
          continue;
        }
        let kt;
        if (Ze.key != null)
          kt = xe.get(Ze.key);
        else
          for (Ne = de; Ne <= j; Ne++)
            if (Sn[Ne - de] === 0 && Li(Ze, E[Ne])) {
              kt = Ne;
              break;
            }
        kt === void 0 ? cn(Ze, R, M, !0) : (Sn[kt - de] = $ + 1, kt >= ft ? ft = kt : vt = !0, ie(
          Ze,
          E[kt],
          C,
          null,
          R,
          M,
          U,
          F,
          B
        ), ut++);
      }
      const Fr = vt ? O1(Sn) : oi;
      for (Ne = Fr.length - 1, $ = Xe - 1; $ >= 0; $--) {
        const Ze = de + $, kt = E[Ze], to = Ze + 1 < X ? E[Ze + 1].el : V;
        Sn[$] === 0 ? ie(
          null,
          kt,
          C,
          to,
          R,
          M,
          U,
          F,
          B
        ) : vt && (Ne < 0 || $ !== Fr[Ne] ? zn(kt, C, to, 2) : Ne--);
      }
    }
  }, zn = (_, E, C, V, R = null) => {
    const { el: M, type: U, transition: F, children: B, shapeFlag: $ } = _;
    if ($ & 6) {
      zn(_.component.subTree, E, C, V);
      return;
    }
    if ($ & 128) {
      _.suspense.move(E, C, V);
      return;
    }
    if ($ & 64) {
      U.move(_, E, C, dn);
      return;
    }
    if (U === vn) {
      s(M, E, C);
      for (let W = 0; W < B.length; W++)
        zn(B[W], E, C, V);
      s(_.anchor, E, C);
      return;
    }
    if (U === rs) {
      We(_, E, C);
      return;
    }
    if (V !== 2 && $ & 1 && F)
      if (V === 0)
        F.beforeEnter(M), s(M, E, C), $t(() => F.enter(M), R);
      else {
        const { leave: W, delayLeave: j, afterLeave: Z } = F, de = () => s(M, E, C), xe = () => {
          W(M, () => {
            de(), Z && Z();
          });
        };
        j ? j(M, de, xe) : xe();
      }
    else
      s(M, E, C);
  }, cn = (_, E, C, V = !1, R = !1) => {
    const {
      type: M,
      props: U,
      ref: F,
      children: B,
      dynamicChildren: $,
      shapeFlag: X,
      patchFlag: W,
      dirs: j,
      cacheIndex: Z
    } = _;
    if (W === -2 && (R = !1), F != null && af(F, null, C, _, !0), Z != null && (E.renderCache[Z] = void 0), X & 256) {
      E.ctx.deactivate(_);
      return;
    }
    const de = X & 1 && j, xe = !Fi(_);
    let Ne;
    if (xe && (Ne = U && U.onVnodeBeforeUnmount) && _n(Ne, E, _), X & 6)
      $r(_.component, C, V);
    else {
      if (X & 128) {
        _.suspense.unmount(C, V);
        return;
      }
      de && Sr(_, null, E, "beforeUnmount"), X & 64 ? _.type.remove(
        _,
        E,
        C,
        dn,
        V
      ) : $ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !$.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== vn || W > 0 && W & 64) ? gr(
        $,
        E,
        C,
        !1,
        !0
      ) : (M === vn && W & 384 || !R && X & 16) && gr(B, E, C), V && di(_);
    }
    (xe && (Ne = U && U.onVnodeUnmounted) || de) && $t(() => {
      Ne && _n(Ne, E, _), de && Sr(_, null, E, "unmounted");
    }, C);
  }, di = (_) => {
    const { type: E, el: C, anchor: V, transition: R } = _;
    if (E === vn) {
      x.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && R && !R.persisted ? _.children.forEach((U) => {
        U.type === un ? f(U.el) : di(U);
      }) : jn(C, V);
      return;
    }
    if (E === rs) {
      G(_);
      return;
    }
    const M = () => {
      f(C), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (_.shapeFlag & 1 && R && !R.persisted) {
      const { leave: U, delayLeave: F } = R, B = () => U(C, M);
      F ? F(_.el, M, B) : B();
    } else
      M();
  }, jn = (_, E) => {
    let C;
    for (; _ !== E; )
      C = A(_), f(_), _ = C;
    f(E);
  }, $r = (_, E, C) => {
    x.NODE_ENV !== "production" && _.type.__hmrId && Ew(_);
    const { bum: V, scope: R, job: M, subTree: U, um: F, m: B, a: $ } = _;
    Qa(B), Qa($), V && Ti(V), R.stop(), M && (M.flags |= 8, cn(U, _, E, C)), F && $t(F, E), $t(() => {
      _.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), x.NODE_ENV !== "production" && Aw(_);
  }, gr = (_, E, C, V = !1, R = !1, M = 0) => {
    for (let U = M; U < _.length; U++)
      cn(_[U], E, C, V, R);
  }, an = (_) => {
    if (_.shapeFlag & 6)
      return an(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const E = A(_.anchor || _.el), C = E && E[Lw];
    return C ? A(C) : E;
  };
  let xn = !1;
  const eo = (_, E, C) => {
    _ == null ? E._vnode && cn(E._vnode, null, null, !0) : ie(
      E._vnode || null,
      _,
      E,
      null,
      null,
      null,
      C
    ), E._vnode = _, xn || (xn = !0, Ka(), rh(), xn = !1);
  }, dn = {
    p: ie,
    um: cn,
    m: zn,
    r: di,
    mt: we,
    mc: qe,
    pc: mt,
    pbc: Wt,
    n: an,
    o: t
  };
  let _r, hi;
  return {
    render: eo,
    hydrate: _r,
    createApp: i1(eo, _r)
  };
}
function tf({ type: t, props: r }, i) {
  return i === "svg" && t === "foreignObject" || i === "mathml" && t === "annotation-xml" && r && r.encoding && r.encoding.includes("html") ? void 0 : i;
}
function Ar({ effect: t, job: r }, i) {
  i ? (t.flags |= 32, r.flags |= 4) : (t.flags &= -33, r.flags &= -5);
}
function w1(t, r) {
  return (!t || t && !t.pendingBranch) && r && !r.persisted;
}
function ns(t, r, i = !1) {
  const s = t.children, f = r.children;
  if (re(s) && re(f))
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      let h = f[l];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = f[l] = sr(f[l]), h.el = c.el), !i && h.patchFlag !== -2 && ns(c, h)), h.type === Xi && (h.el = c.el), x.NODE_ENV !== "production" && h.type === un && !h.el && (h.el = c.el);
    }
}
function O1(t) {
  const r = t.slice(), i = [0];
  let s, f, l, c, h;
  const g = t.length;
  for (s = 0; s < g; s++) {
    const N = t[s];
    if (N !== 0) {
      if (f = i[i.length - 1], t[f] < N) {
        r[s] = f, i.push(s);
        continue;
      }
      for (l = 0, c = i.length - 1; l < c; )
        h = l + c >> 1, t[i[h]] < N ? l = h + 1 : c = h;
      N < t[i[l]] && (l > 0 && (r[s] = i[l - 1]), i[l] = s);
    }
  }
  for (l = i.length, c = i[l - 1]; l-- > 0; )
    i[l] = c, c = r[c];
  return i;
}
function Ah(t) {
  const r = t.subTree.component;
  if (r)
    return r.asyncDep && !r.asyncResolved ? r : Ah(r);
}
function Qa(t) {
  if (t)
    for (let r = 0; r < t.length; r++)
      t[r].flags |= 8;
}
const N1 = Symbol.for("v-scx"), x1 = () => {
  {
    const t = ts(N1);
    return t || x.NODE_ENV !== "production" && k(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function Bi(t, r, i) {
  return x.NODE_ENV !== "production" && !ue(r) && k(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ch(t, r, i);
}
function Ch(t, r, i = Le) {
  const { immediate: s, deep: f, flush: l, once: c } = i;
  x.NODE_ENV !== "production" && !r && (s !== void 0 && k(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), f !== void 0 && k(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), c !== void 0 && k(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const h = Ke({}, i);
  x.NODE_ENV !== "production" && (h.onWarn = k);
  let g;
  if (Vs)
    if (l === "sync") {
      const A = x1();
      g = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!r || s)
      h.once = !0;
    else {
      const A = () => {
      };
      return A.stop = tt, A.resume = tt, A.pause = tt, A;
    }
  const N = st;
  h.call = (A, H, Y) => Nn(A, N, H, Y);
  let O = !1;
  l === "post" ? h.scheduler = (A) => {
    $t(A, N && N.suspense);
  } : l !== "sync" && (O = !0, h.scheduler = (A, H) => {
    H ? A() : Ds(A);
  }), h.augmentJob = (A) => {
    r && (A.flags |= 4), O && (A.flags |= 2, N && (A.id = N.uid, A.i = N));
  };
  const v = aw(t, r, h);
  return g && g.push(v), v;
}
function S1(t, r, i) {
  const s = this.proxy, f = je(t) ? t.includes(".") ? Th(s, t) : () => s[t] : t.bind(s, s);
  let l;
  ue(r) ? l = r : (l = r.handler, i = r);
  const c = Zi(this), h = Ch(f, l.bind(s), i);
  return c(), h;
}
function Th(t, r) {
  const i = r.split(".");
  return () => {
    let s = t;
    for (let f = 0; f < i.length && s; f++)
      s = s[i[f]];
    return s;
  };
}
const A1 = (t, r) => r === "modelValue" || r === "model-value" ? t.modelModifiers : t[`${r}Modifiers`] || t[`${Ut(r)}Modifiers`] || t[`${Tt(r)}Modifiers`];
function C1(t, r, ...i) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || Le;
  if (x.NODE_ENV !== "production") {
    const {
      emitsOptions: O,
      propsOptions: [v]
    } = t;
    if (O)
      if (!(r in O))
        (!v || !(Cr(Ut(r)) in v)) && k(
          `Component emitted event "${r}" but it is neither declared in the emits option nor as an "${Cr(Ut(r))}" prop.`
        );
      else {
        const A = O[r];
        ue(A) && (A(...i) || k(
          `Invalid event arguments: event validation failed for event "${r}".`
        ));
      }
  }
  let f = i;
  const l = r.startsWith("update:"), c = l && A1(s, r.slice(7));
  if (c && (c.trim && (f = i.map((O) => je(O) ? O.trim() : O)), c.number && (f = i.map(wb))), x.NODE_ENV !== "production" && Dw(t, r, f), x.NODE_ENV !== "production") {
    const O = r.toLowerCase();
    O !== r && s[Cr(O)] && k(
      `Event "${O}" is emitted in component ${Ps(
        t,
        t.type
      )} but the handler is registered for "${r}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Tt(
        r
      )}" instead of "${r}".`
    );
  }
  let h, g = s[h = Cr(r)] || // also try camelCase event handler (#2249)
  s[h = Cr(Ut(r))];
  !g && l && (g = s[h = Cr(Tt(r))]), g && Nn(
    g,
    t,
    6,
    f
  );
  const N = s[h + "Once"];
  if (N) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[h])
      return;
    t.emitted[h] = !0, Nn(
      N,
      t,
      6,
      f
    );
  }
}
function Dh(t, r, i = !1) {
  const s = r.emitsCache, f = s.get(t);
  if (f !== void 0)
    return f;
  const l = t.emits;
  let c = {}, h = !1;
  if (!ue(t)) {
    const g = (N) => {
      const O = Dh(N, r, !0);
      O && (h = !0, Ke(c, O));
    };
    !i && r.mixins.length && r.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !l && !h ? (Ue(t) && s.set(t, null), null) : (re(l) ? l.forEach((g) => c[g] = null) : Ke(c, l), Ue(t) && s.set(t, c), c);
}
function Ls(t, r) {
  return !t || !ji(r) ? !1 : (r = r.slice(2).replace(/Once$/, ""), Ee(t, r[0].toLowerCase() + r.slice(1)) || Ee(t, Tt(r)) || Ee(t, r));
}
let mf = !1;
function ys() {
  mf = !0;
}
function nf(t) {
  const {
    type: r,
    vnode: i,
    proxy: s,
    withProxy: f,
    propsOptions: [l],
    slots: c,
    attrs: h,
    emit: g,
    render: N,
    renderCache: O,
    props: v,
    data: A,
    setupState: H,
    ctx: Y,
    inheritAttrs: ie
  } = t, be = _s(t);
  let _e, Ae;
  x.NODE_ENV !== "production" && (mf = !1);
  try {
    if (i.shapeFlag & 4) {
      const G = f || s, Ce = x.NODE_ENV !== "production" && H.__isScriptSetup ? new Proxy(G, {
        get($e, Ve, qe) {
          return k(
            `Property '${String(
              Ve
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get($e, Ve, qe);
        }
      }) : G;
      _e = on(
        N.call(
          Ce,
          G,
          O,
          x.NODE_ENV !== "production" ? En(v) : v,
          H,
          A,
          Y
        )
      ), Ae = h;
    } else {
      const G = r;
      x.NODE_ENV !== "production" && h === v && ys(), _e = on(
        G.length > 1 ? G(
          x.NODE_ENV !== "production" ? En(v) : v,
          x.NODE_ENV !== "production" ? {
            get attrs() {
              return ys(), En(h);
            },
            slots: c,
            emit: g
          } : { attrs: h, slots: c, emit: g }
        ) : G(
          x.NODE_ENV !== "production" ? En(v) : v,
          null
        )
      ), Ae = r.props ? h : T1(h);
    }
  } catch (G) {
    Hi.length = 0, Yi(G, t, 1), _e = cr(un);
  }
  let oe = _e, We;
  if (x.NODE_ENV !== "production" && _e.patchFlag > 0 && _e.patchFlag & 2048 && ([oe, We] = Ih(_e)), Ae && ie !== !1) {
    const G = Object.keys(Ae), { shapeFlag: Ce } = oe;
    if (G.length) {
      if (Ce & 7)
        l && G.some(cs) && (Ae = D1(
          Ae,
          l
        )), oe = dr(oe, Ae, !1, !0);
      else if (x.NODE_ENV !== "production" && !mf && oe.type !== un) {
        const $e = Object.keys(h), Ve = [], qe = [];
        for (let _t = 0, Wt = $e.length; _t < Wt; _t++) {
          const L = $e[_t];
          ji(L) ? cs(L) || Ve.push(L[2].toLowerCase() + L.slice(3)) : qe.push(L);
        }
        qe.length && k(
          `Extraneous non-props attributes (${qe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Ve.length && k(
          `Extraneous non-emits event listeners (${Ve.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return i.dirs && (x.NODE_ENV !== "production" && !ed(oe) && k(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), oe = dr(oe, null, !1, !0), oe.dirs = oe.dirs ? oe.dirs.concat(i.dirs) : i.dirs), i.transition && (x.NODE_ENV !== "production" && !ed(oe) && k(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), zf(oe, i.transition)), x.NODE_ENV !== "production" && We ? We(oe) : _e = oe, _s(be), _e;
}
const Ih = (t) => {
  const r = t.children, i = t.dynamicChildren, s = Zf(r, !1);
  if (s) {
    if (x.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Ih(s);
  } else return [t, void 0];
  const f = r.indexOf(s), l = i ? i.indexOf(s) : -1, c = (h) => {
    r[f] = h, i && (l > -1 ? i[l] = h : h.patchFlag > 0 && (t.dynamicChildren = [...i, h]));
  };
  return [on(s), c];
};
function Zf(t, r = !0) {
  let i;
  for (let s = 0; s < t.length; s++) {
    const f = t[s];
    if (Rs(f)) {
      if (f.type !== un || f.children === "v-if") {
        if (i)
          return;
        if (i = f, x.NODE_ENV !== "production" && r && i.patchFlag > 0 && i.patchFlag & 2048)
          return Zf(i.children);
      }
    } else
      return;
  }
  return i;
}
const T1 = (t) => {
  let r;
  for (const i in t)
    (i === "class" || i === "style" || ji(i)) && ((r || (r = {}))[i] = t[i]);
  return r;
}, D1 = (t, r) => {
  const i = {};
  for (const s in t)
    (!cs(s) || !(s.slice(9) in r)) && (i[s] = t[s]);
  return i;
}, ed = (t) => t.shapeFlag & 7 || t.type === un;
function I1(t, r, i) {
  const { props: s, children: f, component: l } = t, { props: c, children: h, patchFlag: g } = r, N = l.emitsOptions;
  if (x.NODE_ENV !== "production" && (f || h) && bn || r.dirs || r.transition)
    return !0;
  if (i && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return s ? td(s, c, N) : !!c;
    if (g & 8) {
      const O = r.dynamicProps;
      for (let v = 0; v < O.length; v++) {
        const A = O[v];
        if (c[A] !== s[A] && !Ls(N, A))
          return !0;
      }
    }
  } else
    return (f || h) && (!h || !h.$stable) ? !0 : s === c ? !1 : s ? c ? td(s, c, N) : !0 : !!c;
  return !1;
}
function td(t, r, i) {
  const s = Object.keys(r);
  if (s.length !== Object.keys(t).length)
    return !0;
  for (let f = 0; f < s.length; f++) {
    const l = s[f];
    if (r[l] !== t[l] && !Ls(i, l))
      return !0;
  }
  return !1;
}
function L1({ vnode: t, parent: r }, i) {
  for (; r; ) {
    const s = r.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t)
      (t = r.vnode).el = i, r = r.parent;
    else
      break;
  }
}
const Lh = (t) => t.__isSuspense;
function R1(t, r) {
  r && r.pendingBranch ? re(t) ? r.effects.push(...t) : r.effects.push(t) : nh(t);
}
const vn = Symbol.for("v-fgt"), Xi = Symbol.for("v-txt"), un = Symbol.for("v-cmt"), rs = Symbol.for("v-stc"), Hi = [];
let Ht = null;
function V1(t = !1) {
  Hi.push(Ht = t ? null : []);
}
function P1() {
  Hi.pop(), Ht = Hi[Hi.length - 1] || null;
}
let qi = 1;
function nd(t) {
  qi += t, t < 0 && Ht && (Ht.hasOnce = !0);
}
function M1(t) {
  return t.dynamicChildren = qi > 0 ? Ht || oi : null, P1(), qi > 0 && Ht && Ht.push(t), t;
}
function $1(t, r, i, s, f, l) {
  return M1(
    Qf(
      t,
      r,
      i,
      s,
      f,
      l,
      !0
    )
  );
}
function Rs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Li(t, r) {
  if (x.NODE_ENV !== "production" && r.shapeFlag & 6 && t.component) {
    const i = es.get(r.type);
    if (i && i.has(t.component))
      return t.shapeFlag &= -257, r.shapeFlag &= -513, !1;
  }
  return t.type === r.type && t.key === r.key;
}
const F1 = (...t) => Vh(
  ...t
), Rh = ({ key: t }) => t ?? null, is = ({
  ref: t,
  ref_key: r,
  ref_for: i
}) => (typeof t == "number" && (t = "" + t), t != null ? je(t) || nt(t) || ue(t) ? { i: Bt, r: t, k: r, f: !!i } : t : null);
function Qf(t, r = null, i = null, s = 0, f = null, l = t === vn ? 0 : 1, c = !1, h = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: r,
    key: r && Rh(r),
    ref: r && is(r),
    scopeId: lh,
    slotScopeIds: null,
    children: i,
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
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: f,
    dynamicChildren: null,
    appContext: null,
    ctx: Bt
  };
  return h ? (el(g, i), l & 128 && t.normalize(g)) : i && (g.shapeFlag |= je(i) ? 8 : 16), x.NODE_ENV !== "production" && g.key !== g.key && k("VNode created with invalid key (NaN). VNode type:", g.type), qi > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && Ht.push(g), g;
}
const cr = x.NODE_ENV !== "production" ? F1 : Vh;
function Vh(t, r = null, i = null, s = 0, f = null, l = !1) {
  if ((!t || t === zw) && (x.NODE_ENV !== "production" && !t && k(`Invalid vnode type when creating vnode: ${t}.`), t = un), Rs(t)) {
    const h = dr(
      t,
      r,
      !0
      /* mergeRef: true */
    );
    return i && el(h, i), qi > 0 && !l && Ht && (h.shapeFlag & 6 ? Ht[Ht.indexOf(t)] = h : Ht.push(h)), h.patchFlag = -2, h;
  }
  if (Bh(t) && (t = t.__vccOpts), r) {
    r = B1(r);
    let { class: h, style: g } = r;
    h && !je(h) && (r.class = Lf(h)), Ue(g) && (ds(g) && !re(g) && (g = Ke({}, g)), r.style = If(g));
  }
  const c = je(t) ? 1 : Lh(t) ? 128 : Rw(t) ? 64 : Ue(t) ? 4 : ue(t) ? 2 : 0;
  return x.NODE_ENV !== "production" && c & 4 && ds(t) && (t = ce(t), k(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Qf(
    t,
    r,
    i,
    s,
    f,
    c,
    l,
    !0
  );
}
function B1(t) {
  return t ? ds(t) || Eh(t) ? Ke({}, t) : t : null;
}
function dr(t, r, i = !1, s = !1) {
  const { props: f, ref: l, patchFlag: c, children: h, transition: g } = t, N = r ? U1(f || {}, r) : f, O = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: N,
    key: N && Rh(N),
    ref: r && r.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && l ? re(l) ? l.concat(is(r)) : [l, is(r)] : is(r)
    ) : l,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: x.NODE_ENV !== "production" && c === -1 && re(h) ? h.map(Ph) : h,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: r && t.type !== vn ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: g,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && dr(t.ssContent),
    ssFallback: t.ssFallback && dr(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && s && zf(
    O,
    g.clone(O)
  ), O;
}
function Ph(t) {
  const r = dr(t);
  return re(t.children) && (r.children = t.children.map(Ph)), r;
}
function H1(t = " ", r = 0) {
  return cr(Xi, null, t, r);
}
function on(t) {
  return t == null || typeof t == "boolean" ? cr(un) : re(t) ? cr(
    vn,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Rs(t) ? sr(t) : cr(Xi, null, String(t));
}
function sr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : dr(t);
}
function el(t, r) {
  let i = 0;
  const { shapeFlag: s } = t;
  if (r == null)
    r = null;
  else if (re(r))
    i = 16;
  else if (typeof r == "object")
    if (s & 65) {
      const f = r.default;
      f && (f._c && (f._d = !1), el(t, f()), f._c && (f._d = !0));
      return;
    } else {
      i = 32;
      const f = r._;
      !f && !Eh(r) ? r._ctx = Bt : f === 3 && Bt && (Bt.slots._ === 1 ? r._ = 1 : (r._ = 2, t.patchFlag |= 1024));
    }
  else ue(r) ? (r = { default: r, _ctx: Bt }, i = 32) : (r = String(r), s & 64 ? (i = 16, r = [H1(r)]) : i = 8);
  t.children = r, t.shapeFlag |= i;
}
function U1(...t) {
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    for (const f in s)
      if (f === "class")
        r.class !== s.class && (r.class = Lf([r.class, s.class]));
      else if (f === "style")
        r.style = If([r.style, s.style]);
      else if (ji(f)) {
        const l = r[f], c = s[f];
        c && l !== c && !(re(l) && l.includes(c)) && (r[f] = l ? [].concat(l, c) : c);
      } else f !== "" && (r[f] = s[f]);
  }
  return r;
}
function _n(t, r, i, s = null) {
  Nn(t, r, 7, [
    i,
    s
  ]);
}
const W1 = mh();
let k1 = 0;
function K1(t, r, i) {
  const s = t.type, f = (r ? r.appContext : t.appContext) || W1, l = {
    uid: k1++,
    vnode: t,
    type: s,
    parent: r,
    appContext: f,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ld(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: r ? r.provides : Object.create(f.provides),
    ids: r ? r.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: wh(s, f),
    emitsOptions: Dh(s, f),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Le,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Le,
    data: Le,
    props: Le,
    attrs: Le,
    slots: Le,
    refs: Le,
    setupState: Le,
    setupContext: null,
    // suspense related
    suspense: i,
    suspenseId: i ? i.pendingId : 0,
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
  return x.NODE_ENV !== "production" ? l.ctx = jw(l) : l.ctx = { _: l }, l.root = r ? r.root : l, l.emit = C1.bind(null, l), t.ce && t.ce(l), l;
}
let st = null;
const G1 = () => st || Bt;
let Es, vf;
{
  const t = Df(), r = (i, s) => {
    let f;
    return (f = t[i]) || (f = t[i] = []), f.push(s), (l) => {
      f.length > 1 ? f.forEach((c) => c(l)) : f[0](l);
    };
  };
  Es = r(
    "__VUE_INSTANCE_SETTERS__",
    (i) => st = i
  ), vf = r(
    "__VUE_SSR_SETTERS__",
    (i) => Vs = i
  );
}
const Zi = (t) => {
  const r = st;
  return Es(t), t.scope.on(), () => {
    t.scope.off(), Es(r);
  };
}, rd = () => {
  st && st.scope.off(), Es(null);
}, q1 = /* @__PURE__ */ kn("slot,component");
function yf(t, { isNativeTag: r }) {
  (q1(t) || r(t)) && k(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Mh(t) {
  return t.vnode.shapeFlag & 4;
}
let Vs = !1;
function z1(t, r = !1, i = !1) {
  r && vf(r);
  const { props: s, children: f } = t.vnode, l = Mh(t);
  s1(t, s, l, r), m1(t, f, i);
  const c = l ? j1(t, r) : void 0;
  return r && vf(!1), c;
}
function j1(t, r) {
  var i;
  const s = t.type;
  if (x.NODE_ENV !== "production") {
    if (s.name && yf(s.name, t.appContext.config), s.components) {
      const l = Object.keys(s.components);
      for (let c = 0; c < l.length; c++)
        yf(l[c], t.appContext.config);
    }
    if (s.directives) {
      const l = Object.keys(s.directives);
      for (let c = 0; c < l.length; c++)
        ch(l[c]);
    }
    s.compilerOptions && Y1() && k(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, gh), x.NODE_ENV !== "production" && Yw(t);
  const { setup: f } = s;
  if (f) {
    const l = t.setupContext = f.length > 1 ? X1(t) : null, c = Zi(t);
    Kn();
    const h = ai(
      f,
      t,
      0,
      [
        x.NODE_ENV !== "production" ? En(t.props) : t.props,
        l
      ]
    );
    if (Gn(), c(), Sf(h)) {
      if (Fi(t) || dh(t), h.then(rd, rd), r)
        return h.then((g) => {
          id(t, g, r);
        }).catch((g) => {
          Yi(g, t, 0);
        });
      if (t.asyncDep = h, x.NODE_ENV !== "production" && !t.suspense) {
        const g = (i = s.name) != null ? i : "Anonymous";
        k(
          `Component <${g}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      id(t, h, r);
  } else
    $h(t, r);
}
function id(t, r, i) {
  ue(r) ? t.type.__ssrInlineRender ? t.ssrRender = r : t.render = r : Ue(r) ? (x.NODE_ENV !== "production" && Rs(r) && k(
    "setup() should not return VNodes directly - return a render function instead."
  ), x.NODE_ENV !== "production" && (t.devtoolsRawSetupState = r), t.setupState = Xd(r), x.NODE_ENV !== "production" && Jw(t)) : x.NODE_ENV !== "production" && r !== void 0 && k(
    `setup() should return an object. Received: ${r === null ? "null" : typeof r}`
  ), $h(t, i);
}
let Ef;
const Y1 = () => !Ef;
function $h(t, r, i) {
  const s = t.type;
  if (!t.render) {
    if (!r && Ef && !s.render) {
      const f = s.template || Jf(t).template;
      if (f) {
        x.NODE_ENV !== "production" && Fn(t, "compile");
        const { isCustomElement: l, compilerOptions: c } = t.appContext.config, { delimiters: h, compilerOptions: g } = s, N = Ke(
          Ke(
            {
              isCustomElement: l,
              delimiters: h
            },
            c
          ),
          g
        );
        s.render = Ef(f, N), x.NODE_ENV !== "production" && Bn(t, "compile");
      }
    }
    t.render = s.render || tt;
  }
  {
    const f = Zi(t);
    Kn();
    try {
      Zw(t);
    } finally {
      Gn(), f();
    }
  }
  x.NODE_ENV !== "production" && !s.render && t.render === tt && !r && (s.template ? k(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : k("Component is missing template or render function: ", s));
}
const od = x.NODE_ENV !== "production" ? {
  get(t, r) {
    return ys(), rt(t, "get", ""), t[r];
  },
  set() {
    return k("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return k("setupContext.attrs is readonly."), !1;
  }
} : {
  get(t, r) {
    return rt(t, "get", ""), t[r];
  }
};
function J1(t) {
  return new Proxy(t.slots, {
    get(r, i) {
      return rt(t, "get", "$slots"), r[i];
    }
  });
}
function X1(t) {
  const r = (i) => {
    if (x.NODE_ENV !== "production" && (t.exposed && k("expose() should be called only once per setup()."), i != null)) {
      let s = typeof i;
      s === "object" && (re(i) ? s = "array" : nt(i) && (s = "ref")), s !== "object" && k(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    t.exposed = i || {};
  };
  if (x.NODE_ENV !== "production") {
    let i, s;
    return Object.freeze({
      get attrs() {
        return i || (i = new Proxy(t.attrs, od));
      },
      get slots() {
        return s || (s = J1(t));
      },
      get emit() {
        return (f, ...l) => t.emit(f, ...l);
      },
      expose: r
    });
  } else
    return {
      attrs: new Proxy(t.attrs, od),
      slots: t.slots,
      emit: t.emit,
      expose: r
    };
}
function tl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Xd(Hf(t.exposed)), {
    get(r, i) {
      if (i in r)
        return r[i];
      if (i in Vr)
        return Vr[i](t);
    },
    has(r, i) {
      return i in r || i in Vr;
    }
  })) : t.proxy;
}
const Z1 = /(?:^|[-_])(\w)/g, Q1 = (t) => t.replace(Z1, (r) => r.toUpperCase()).replace(/[-_]/g, "");
function Fh(t, r = !0) {
  return ue(t) ? t.displayName || t.name : t.name || r && t.__name;
}
function Ps(t, r, i = !1) {
  let s = Fh(r);
  if (!s && r.__file) {
    const f = r.__file.match(/([^/\\]+)\.\w+$/);
    f && (s = f[1]);
  }
  if (!s && t && t.parent) {
    const f = (l) => {
      for (const c in l)
        if (l[c] === r)
          return c;
    };
    s = f(
      t.components || t.parent.type.components
    ) || f(t.appContext.components);
  }
  return s ? Q1(s) : i ? "App" : "Anonymous";
}
function Bh(t) {
  return ue(t) && "__vccOpts" in t;
}
const eO = (t, r) => {
  const i = lw(t, r, Vs);
  if (x.NODE_ENV !== "production") {
    const s = G1();
    s && s.appContext.config.warnRecursiveComputed && (i._warnRecursive = !0);
  }
  return i;
};
function tO() {
  if (x.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, r = { style: "color:#1677ff" }, i = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, f = {
    __vue_custom_formatter: !0,
    header(v) {
      return Ue(v) ? v.__isVue ? ["div", t, "VueInstance"] : nt(v) ? [
        "div",
        {},
        ["span", t, O(v)],
        "<",
        // avoid debugger accessing value affecting behavior
        h("_value" in v ? v._value : v),
        ">"
      ] : ui(v) ? [
        "div",
        {},
        ["span", t, Dt(v) ? "ShallowReactive" : "Reactive"],
        "<",
        h(v),
        `>${Wn(v) ? " (readonly)" : ""}`
      ] : Wn(v) ? [
        "div",
        {},
        ["span", t, Dt(v) ? "ShallowReadonly" : "Readonly"],
        "<",
        h(v),
        ">"
      ] : null : null;
    },
    hasBody(v) {
      return v && v.__isVue;
    },
    body(v) {
      if (v && v.__isVue)
        return [
          "div",
          {},
          ...l(v.$)
        ];
    }
  };
  function l(v) {
    const A = [];
    v.type.props && v.props && A.push(c("props", ce(v.props))), v.setupState !== Le && A.push(c("setup", v.setupState)), v.data !== Le && A.push(c("data", ce(v.data)));
    const H = g(v, "computed");
    H && A.push(c("computed", H));
    const Y = g(v, "inject");
    return Y && A.push(c("injected", Y)), A.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: v }]
    ]), A;
  }
  function c(v, A) {
    return A = Ke({}, A), Object.keys(A).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        v
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(A).map((H) => [
          "div",
          {},
          ["span", s, H + ": "],
          h(A[H], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function h(v, A = !0) {
    return typeof v == "number" ? ["span", r, v] : typeof v == "string" ? ["span", i, JSON.stringify(v)] : typeof v == "boolean" ? ["span", s, v] : Ue(v) ? ["object", { object: A ? ce(v) : v }] : ["span", i, String(v)];
  }
  function g(v, A) {
    const H = v.type;
    if (ue(H))
      return;
    const Y = {};
    for (const ie in v.ctx)
      N(H, ie, A) && (Y[ie] = v.ctx[ie]);
    return Y;
  }
  function N(v, A, H) {
    const Y = v[H];
    if (re(Y) && Y.includes(A) || Ue(Y) && A in Y || v.extends && N(v.extends, A, H) || v.mixins && v.mixins.some((ie) => N(ie, A, H)))
      return !0;
  }
  function O(v) {
    return Dt(v) ? "ShallowRef" : v.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(f) : window.devtoolsFormatters = [f];
}
const sd = "3.5.10", Zt = x.NODE_ENV !== "production" ? k : tt;
var gt = { cider: "2" };
let bf;
const ud = typeof window < "u" && window.trustedTypes;
if (ud)
  try {
    bf = /* @__PURE__ */ ud.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch (t) {
    gt.NODE_ENV !== "production" && Zt(`Error creating trusted types policy: ${t}`);
  }
const Hh = bf ? (t) => bf.createHTML(t) : (t) => t, nO = "http://www.w3.org/2000/svg", rO = "http://www.w3.org/1998/Math/MathML", Hn = typeof document < "u" ? document : null, fd = Hn && /* @__PURE__ */ Hn.createElement("template"), iO = {
  insert: (t, r, i) => {
    r.insertBefore(t, i || null);
  },
  remove: (t) => {
    const r = t.parentNode;
    r && r.removeChild(t);
  },
  createElement: (t, r, i, s) => {
    const f = r === "svg" ? Hn.createElementNS(nO, t) : r === "mathml" ? Hn.createElementNS(rO, t) : i ? Hn.createElement(t, { is: i }) : Hn.createElement(t);
    return t === "select" && s && s.multiple != null && f.setAttribute("multiple", s.multiple), f;
  },
  createText: (t) => Hn.createTextNode(t),
  createComment: (t) => Hn.createComment(t),
  setText: (t, r) => {
    t.nodeValue = r;
  },
  setElementText: (t, r) => {
    t.textContent = r;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Hn.querySelector(t),
  setScopeId(t, r) {
    t.setAttribute(r, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, r, i, s, f, l) {
    const c = i ? i.previousSibling : r.lastChild;
    if (f && (f === l || f.nextSibling))
      for (; r.insertBefore(f.cloneNode(!0), i), !(f === l || !(f = f.nextSibling)); )
        ;
    else {
      fd.innerHTML = Hh(
        s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t
      );
      const h = fd.content;
      if (s === "svg" || s === "mathml") {
        const g = h.firstChild;
        for (; g.firstChild; )
          h.appendChild(g.firstChild);
        h.removeChild(g);
      }
      r.insertBefore(h, i);
    }
    return [
      // first
      c ? c.nextSibling : r.firstChild,
      // last
      i ? i.previousSibling : r.lastChild
    ];
  }
}, oO = Symbol("_vtc");
function sO(t, r, i) {
  const s = t[oO];
  s && (r = (r ? [r, ...s] : [...s]).join(" ")), r == null ? t.removeAttribute("class") : i ? t.setAttribute("class", r) : t.className = r;
}
const ld = Symbol("_vod"), uO = Symbol("_vsh"), fO = Symbol(gt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), lO = /(^|;)\s*display\s*:/;
function cO(t, r, i) {
  const s = t.style, f = je(i);
  let l = !1;
  if (i && !f) {
    if (r)
      if (je(r))
        for (const c of r.split(";")) {
          const h = c.slice(0, c.indexOf(":")).trim();
          i[h] == null && os(s, h, "");
        }
      else
        for (const c in r)
          i[c] == null && os(s, c, "");
    for (const c in i)
      c === "display" && (l = !0), os(s, c, i[c]);
  } else if (f) {
    if (r !== i) {
      const c = s[fO];
      c && (i += ";" + c), s.cssText = i, l = lO.test(i);
    }
  } else r && t.removeAttribute("style");
  ld in t && (t[ld] = l ? s.display : "", t[uO] && (s.display = "none"));
}
const aO = /[^\\];\s*$/, cd = /\s*!important$/;
function os(t, r, i) {
  if (re(i))
    i.forEach((s) => os(t, r, s));
  else if (i == null && (i = ""), gt.NODE_ENV !== "production" && aO.test(i) && Zt(
    `Unexpected semicolon at the end of '${r}' style value: '${i}'`
  ), r.startsWith("--"))
    t.setProperty(r, i);
  else {
    const s = dO(t, r);
    cd.test(i) ? t.setProperty(
      Tt(s),
      i.replace(cd, ""),
      "important"
    ) : t[s] = i;
  }
}
const ad = ["Webkit", "Moz", "ms"], rf = {};
function dO(t, r) {
  const i = rf[r];
  if (i)
    return i;
  let s = Ut(r);
  if (s !== "filter" && s in t)
    return rf[r] = s;
  s = Ss(s);
  for (let f = 0; f < ad.length; f++) {
    const l = ad[f] + s;
    if (l in t)
      return rf[r] = l;
  }
  return r;
}
const dd = "http://www.w3.org/1999/xlink";
function hd(t, r, i, s, f, l = Vb(r)) {
  s && r.startsWith("xlink:") ? i == null ? t.removeAttributeNS(dd, r.slice(6, r.length)) : t.setAttributeNS(dd, r, i) : i == null || l && !Id(i) ? t.removeAttribute(r) : t.setAttribute(
    r,
    l ? "" : ci(i) ? String(i) : i
  );
}
function pd(t, r, i, s) {
  if (r === "innerHTML" || r === "textContent") {
    i != null && (t[r] = r === "innerHTML" ? Hh(i) : i);
    return;
  }
  const f = t.tagName;
  if (r === "value" && f !== "PROGRESS" && // custom elements may use _value internally
  !f.includes("-")) {
    const c = f === "OPTION" ? t.getAttribute("value") || "" : t.value, h = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(i);
    (c !== h || !("_value" in t)) && (t.value = h), i == null && t.removeAttribute(r), t._value = i;
    return;
  }
  let l = !1;
  if (i === "" || i == null) {
    const c = typeof t[r];
    c === "boolean" ? i = Id(i) : i == null && c === "string" ? (i = "", l = !0) : c === "number" && (i = 0, l = !0);
  }
  try {
    t[r] = i;
  } catch (c) {
    gt.NODE_ENV !== "production" && !l && Zt(
      `Failed setting prop "${r}" on <${f.toLowerCase()}>: value ${i} is invalid.`,
      c
    );
  }
  l && t.removeAttribute(r);
}
function hO(t, r, i, s) {
  t.addEventListener(r, i, s);
}
function pO(t, r, i, s) {
  t.removeEventListener(r, i, s);
}
const gd = Symbol("_vei");
function gO(t, r, i, s, f = null) {
  const l = t[gd] || (t[gd] = {}), c = l[r];
  if (s && c)
    c.value = gt.NODE_ENV !== "production" ? md(s, r) : s;
  else {
    const [h, g] = _O(r);
    if (s) {
      const N = l[r] = yO(
        gt.NODE_ENV !== "production" ? md(s, r) : s,
        f
      );
      hO(t, h, N, g);
    } else c && (pO(t, h, c, g), l[r] = void 0);
  }
}
const _d = /(?:Once|Passive|Capture)$/;
function _O(t) {
  let r;
  if (_d.test(t)) {
    r = {};
    let s;
    for (; s = t.match(_d); )
      t = t.slice(0, t.length - s[0].length), r[s[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Tt(t.slice(2)), r];
}
let of = 0;
const mO = /* @__PURE__ */ Promise.resolve(), vO = () => of || (mO.then(() => of = 0), of = Date.now());
function yO(t, r) {
  const i = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= i.attached)
      return;
    Nn(
      EO(s, i.value),
      r,
      5,
      [s]
    );
  };
  return i.value = t, i.attached = vO(), i;
}
function md(t, r) {
  return ue(t) || re(t) ? t : (Zt(
    `Wrong type passed as event handler to ${r} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), tt);
}
function EO(t, r) {
  if (re(r)) {
    const i = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      i.call(t), t._stopped = !0;
    }, r.map(
      (s) => (f) => !f._stopped && s && s(f)
    );
  } else
    return r;
}
const vd = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, bO = (t, r, i, s, f, l) => {
  const c = f === "svg";
  r === "class" ? sO(t, s, c) : r === "style" ? cO(t, i, s) : ji(r) ? cs(r) || gO(t, r, i, s, l) : (r[0] === "." ? (r = r.slice(1), !0) : r[0] === "^" ? (r = r.slice(1), !1) : wO(t, r, s, c)) ? (pd(t, r, s), !t.tagName.includes("-") && (r === "value" || r === "checked" || r === "selected") && hd(t, r, s, c, l, r !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(r) || !je(s)) ? pd(t, Ut(r), s) : (r === "true-value" ? t._trueValue = s : r === "false-value" && (t._falseValue = s), hd(t, r, s, c));
};
function wO(t, r, i, s) {
  if (s)
    return !!(r === "innerHTML" || r === "textContent" || r in t && vd(r) && ue(i));
  if (r === "spellcheck" || r === "draggable" || r === "translate" || r === "form" || r === "list" && t.tagName === "INPUT" || r === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (r === "width" || r === "height") {
    const f = t.tagName;
    if (f === "IMG" || f === "VIDEO" || f === "CANVAS" || f === "SOURCE")
      return !1;
  }
  return vd(r) && je(i) ? !1 : r in t;
}
const yd = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function OO(t, r, i) {
  const s = /* @__PURE__ */ ah(t, r);
  Cf(s) && Ke(s, r);
  class f extends nl {
    constructor(c) {
      super(s, c, i);
    }
  }
  return f.def = s, f;
}
const NO = typeof HTMLElement < "u" ? HTMLElement : class {
};
class nl extends NO {
  constructor(r, i = {}, s = bd) {
    super(), this._def = r, this._props = i, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== bd ? this._root = this.shadowRoot : (gt.NODE_ENV !== "production" && this.shadowRoot && Zt(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), r.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let r = this;
    for (; r = r && (r.parentNode || r.host); )
      if (r instanceof nl) {
        this._parent = r;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : r && r._pendingResolve ? this._pendingResolve = r._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(r = this._parent) {
    r && (this._instance.parent = r._instance, this._instance.provides = r._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, eh(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const f of s)
        this._setAttr(f.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const r = (s, f = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: l, styles: c } = s;
      let h;
      if (l && !re(l))
        for (const g in l) {
          const N = l[g];
          (N === Number || N && N.type === Number) && (g in this._props && (this._props[g] = Ma(this._props[g])), (h || (h = /* @__PURE__ */ Object.create(null)))[Ut(g)] = !0);
        }
      this._numberProps = h, f && this._resolveProps(s), this.shadowRoot ? this._applyStyles(c) : gt.NODE_ENV !== "production" && c && Zt(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, i = this._def.__asyncLoader;
    i ? this._pendingResolve = i().then(
      (s) => r(this._def = s, !0)
    ) : r(this._def);
  }
  _mount(r) {
    gt.NODE_ENV !== "production" && !r.name && (r.name = "VueElement"), this._app = this._createApp(r), r.configureApp && r.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const i = this._instance && this._instance.exposed;
    if (i)
      for (const s in i)
        Ee(this, s) ? gt.NODE_ENV !== "production" && Zt(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Wf(i[s])
        });
  }
  _resolveProps(r) {
    const { props: i } = r, s = re(i) ? i : Object.keys(i || {});
    for (const f of Object.keys(this))
      f[0] !== "_" && s.includes(f) && this._setProp(f, this[f]);
    for (const f of s.map(Ut))
      Object.defineProperty(this, f, {
        get() {
          return this._getProp(f);
        },
        set(l) {
          this._setProp(f, l, !0, !0);
        }
      });
  }
  _setAttr(r) {
    if (r.startsWith("data-v-")) return;
    const i = this.hasAttribute(r);
    let s = i ? this.getAttribute(r) : yd;
    const f = Ut(r);
    i && this._numberProps && this._numberProps[f] && (s = Ma(s)), this._setProp(f, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(r) {
    return this._props[r];
  }
  /**
   * @internal
   */
  _setProp(r, i, s = !0, f = !1) {
    i !== this._props[r] && (i === yd ? delete this._props[r] : (this._props[r] = i, r === "key" && this._app && (this._app._ceVNode.key = i)), f && this._instance && this._update(), s && (i === !0 ? this.setAttribute(Tt(r), "") : typeof i == "string" || typeof i == "number" ? this.setAttribute(Tt(r), i + "") : i || this.removeAttribute(Tt(r))));
  }
  _update() {
    SO(this._createVNode(), this._root);
  }
  _createVNode() {
    const r = {};
    this.shadowRoot || (r.onVnodeMounted = r.onVnodeUpdated = this._renderSlots.bind(this));
    const i = cr(this._def, Ke(r, this._props));
    return this._instance || (i.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, gt.NODE_ENV !== "production" && (s.ceReload = (l) => {
        this._styles && (this._styles.forEach((c) => this._root.removeChild(c)), this._styles.length = 0), this._applyStyles(l), this._instance = null, this._update();
      });
      const f = (l, c) => {
        this.dispatchEvent(
          new CustomEvent(
            l,
            Cf(c[0]) ? Ke({ detail: c }, c[0]) : { detail: c }
          )
        );
      };
      s.emit = (l, ...c) => {
        f(l, c), Tt(l) !== l && f(Tt(l), c);
      }, this._setParent();
    }), i;
  }
  _applyStyles(r, i) {
    if (!r) return;
    if (i) {
      if (i === this._def || this._styleChildren.has(i))
        return;
      this._styleChildren.add(i);
    }
    const s = this._nonce;
    for (let f = r.length - 1; f >= 0; f--) {
      const l = document.createElement("style");
      if (s && l.setAttribute("nonce", s), l.textContent = r[f], this.shadowRoot.prepend(l), gt.NODE_ENV !== "production")
        if (i) {
          if (i.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let c = this._childStyles.get(i.__hmrId);
            c || this._childStyles.set(i.__hmrId, c = []), c.push(l);
          }
        } else
          (this._styles || (this._styles = [])).push(l);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const r = this._slots = {};
    let i;
    for (; i = this.firstChild; ) {
      const s = i.nodeType === 1 && i.getAttribute("slot") || "default";
      (r[s] || (r[s] = [])).push(i), this.removeChild(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const r = (this._teleportTarget || this).querySelectorAll("slot"), i = this._instance.type.__scopeId;
    for (let s = 0; s < r.length; s++) {
      const f = r[s], l = f.getAttribute("name") || "default", c = this._slots[l], h = f.parentNode;
      if (c)
        for (const g of c) {
          if (i && g.nodeType === 1) {
            const N = i + "-s", O = document.createTreeWalker(g, 1);
            g.setAttribute(N, "");
            let v;
            for (; v = O.nextNode(); )
              v.setAttribute(N, "");
          }
          h.insertBefore(g, f);
        }
      else
        for (; f.firstChild; ) h.insertBefore(f.firstChild, f);
      h.removeChild(f);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(r) {
    this._applyStyles(r.styles, r);
  }
  /**
   * @internal
   */
  _removeChildStyle(r) {
    if (gt.NODE_ENV !== "production" && (this._styleChildren.delete(r), this._childStyles && r.__hmrId)) {
      const i = this._childStyles.get(r.__hmrId);
      i && (i.forEach((s) => this._root.removeChild(s)), i.length = 0);
    }
  }
}
const xO = /* @__PURE__ */ Ke({ patchProp: bO }, iO);
let Ed;
function Uh() {
  return Ed || (Ed = E1(xO));
}
const SO = (...t) => {
  Uh().render(...t);
}, bd = (...t) => {
  const r = Uh().createApp(...t);
  gt.NODE_ENV !== "production" && (CO(r), TO(r));
  const { mount: i } = r;
  return r.mount = (s) => {
    const f = DO(s);
    if (!f) return;
    const l = r._component;
    !ue(l) && !l.render && !l.template && (l.template = f.innerHTML), f.nodeType === 1 && (f.textContent = "");
    const c = i(f, !1, AO(f));
    return f instanceof Element && (f.removeAttribute("v-cloak"), f.setAttribute("data-v-app", "")), c;
  }, r;
};
function AO(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function CO(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (r) => Db(r) || Ib(r) || Lb(r),
    writable: !1
  });
}
function TO(t) {
  {
    const r = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return r;
      },
      set() {
        Zt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const i = t.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return Zt(s), i;
      },
      set() {
        Zt(s);
      }
    });
  }
}
function DO(t) {
  if (je(t)) {
    const r = document.querySelector(t);
    return gt.NODE_ENV !== "production" && !r && Zt(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), r;
  }
  return gt.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && Zt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
var IO = { cider: "2" };
function LO() {
  tO();
}
IO.NODE_ENV !== "production" && LO();
var RO = !1;
function VO() {
  return Wh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Wh() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const PO = typeof Proxy == "function", MO = "devtools-plugin:setup", $O = "plugin:settings:set";
let ei, wf;
function FO() {
  var t;
  return ei !== void 0 || (typeof window < "u" && window.performance ? (ei = !0, wf = window.performance) : typeof globalThis < "u" && (!((t = globalThis.perf_hooks) === null || t === void 0) && t.performance) ? (ei = !0, wf = globalThis.perf_hooks.performance) : ei = !1), ei;
}
function BO() {
  return FO() ? wf.now() : Date.now();
}
class HO {
  constructor(r, i) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = r, this.hook = i;
    const s = {};
    if (r.settings)
      for (const c in r.settings) {
        const h = r.settings[c];
        s[c] = h.defaultValue;
      }
    const f = `__vue-devtools-plugin-settings__${r.id}`;
    let l = Object.assign({}, s);
    try {
      const c = localStorage.getItem(f), h = JSON.parse(c);
      Object.assign(l, h);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return l;
      },
      setSettings(c) {
        try {
          localStorage.setItem(f, JSON.stringify(c));
        } catch {
        }
        l = c;
      },
      now() {
        return BO();
      }
    }, i && i.on($O, (c, h) => {
      c === this.plugin.id && this.fallbacks.setSettings(h);
    }), this.proxiedOn = new Proxy({}, {
      get: (c, h) => this.target ? this.target.on[h] : (...g) => {
        this.onQueue.push({
          method: h,
          args: g
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (c, h) => this.target ? this.target[h] : h === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(h) ? (...g) => (this.targetQueue.push({
        method: h,
        args: g,
        resolve: () => {
        }
      }), this.fallbacks[h](...g)) : (...g) => new Promise((N) => {
        this.targetQueue.push({
          method: h,
          args: g,
          resolve: N
        });
      })
    });
  }
  async setRealTarget(r) {
    this.target = r;
    for (const i of this.onQueue)
      this.target.on[i.method](...i.args);
    for (const i of this.targetQueue)
      i.resolve(await this.target[i.method](...i.args));
  }
}
function kh(t, r) {
  const i = t, s = Wh(), f = VO(), l = PO && i.enableEarlyProxy;
  if (f && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !l))
    f.emit(MO, t, r);
  else {
    const c = l ? new HO(i, f) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: i,
      setupFn: r,
      proxy: c
    }), c && r(c.proxiedTarget);
  }
}
var Mi = { cider: "2" };
const UO = Mi.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
var Pr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Pr || (Pr = {}));
const Kh = typeof window < "u", wd = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function WO(t, { autoBom: r = !1 } = {}) {
  return r && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\uFEFF", t], { type: t.type }) : t;
}
function rl(t, r, i) {
  const s = new XMLHttpRequest();
  s.open("GET", t), s.responseType = "blob", s.onload = function() {
    zh(s.response, r, i);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function Gh(t) {
  const r = new XMLHttpRequest();
  r.open("HEAD", t, !1);
  try {
    r.send();
  } catch {
  }
  return r.status >= 200 && r.status <= 299;
}
function ss(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const i = document.createEvent("MouseEvents");
    i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
  }
}
const us = typeof navigator == "object" ? navigator : { userAgent: "" }, qh = /Macintosh/.test(us.userAgent) && /AppleWebKit/.test(us.userAgent) && !/Safari/.test(us.userAgent), zh = Kh ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !qh ? kO : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in us ? KO : (
      // Fallback to using FileReader and a popup
      GO
    )
  )
) : () => {
};
function kO(t, r = "download", i) {
  const s = document.createElement("a");
  s.download = r, s.rel = "noopener", typeof t == "string" ? (s.href = t, s.origin !== location.origin ? Gh(s.href) ? rl(t, r, i) : (s.target = "_blank", ss(s)) : ss(s)) : (s.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    ss(s);
  }, 0));
}
function KO(t, r = "download", i) {
  if (typeof t == "string")
    if (Gh(t))
      rl(t, r, i);
    else {
      const s = document.createElement("a");
      s.href = t, s.target = "_blank", setTimeout(function() {
        ss(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(WO(t, i), r);
}
function GO(t, r, i, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof t == "string")
    return rl(t, r, i);
  const f = t.type === "application/octet-stream", l = /constructor/i.test(String(wd.HTMLElement)) || "safari" in wd, c = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((c || f && l || qh) && typeof FileReader < "u") {
    const h = new FileReader();
    h.onloadend = function() {
      let g = h.result;
      if (typeof g != "string")
        throw s = null, new Error("Wrong reader.result type");
      g = c ? g : g.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = g : location.assign(g), s = null;
    }, h.readAsDataURL(t);
  } else {
    const h = URL.createObjectURL(t);
    s ? s.location.assign(h) : location.href = h, s = null, setTimeout(function() {
      URL.revokeObjectURL(h);
    }, 4e4);
  }
}
function ot(t, r) {
  const i = "🍍 " + t;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(i, r) : r === "error" ? console.error(i) : r === "warn" ? console.warn(i) : console.log(i);
}
function il(t) {
  return "_a" in t && "install" in t;
}
function jh() {
  if (!("clipboard" in navigator))
    return ot("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Yh(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (ot('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function qO(t) {
  if (!jh())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), ot("Global state copied to clipboard.");
    } catch (r) {
      if (Yh(r))
        return;
      ot("Failed to serialize the state. Check the console for more details.", "error"), console.error(r);
    }
}
async function zO(t) {
  if (!jh())
    try {
      Jh(t, JSON.parse(await navigator.clipboard.readText())), ot("Global state pasted from clipboard.");
    } catch (r) {
      if (Yh(r))
        return;
      ot("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(r);
    }
}
async function jO(t) {
  try {
    zh(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (r) {
    ot("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(r);
  }
}
let $n;
function YO() {
  $n || ($n = document.createElement("input"), $n.type = "file", $n.accept = ".json");
  function t() {
    return new Promise((r, i) => {
      $n.onchange = async () => {
        const s = $n.files;
        if (!s)
          return r(null);
        const f = s.item(0);
        return r(f ? { text: await f.text(), file: f } : null);
      }, $n.oncancel = () => r(null), $n.onerror = i, $n.click();
    });
  }
  return t;
}
async function JO(t) {
  try {
    const i = await YO()();
    if (!i)
      return;
    const { text: s, file: f } = i;
    Jh(t, JSON.parse(s)), ot(`Global state imported from "${f.name}".`);
  } catch (r) {
    ot("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(r);
  }
}
function Jh(t, r) {
  for (const i in r) {
    const s = t.state.value[i];
    s ? Object.assign(s, r[i]) : t.state.value[i] = r[i];
  }
}
function rn(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const Xh = "🍍 Pinia (root)", fs = "_root";
function XO(t) {
  return il(t) ? {
    id: fs,
    label: Xh
  } : {
    id: t.$id,
    label: t.$id
  };
}
function ZO(t) {
  if (il(t)) {
    const i = Array.from(t._s.keys()), s = t._s;
    return {
      state: i.map((l) => ({
        editable: !0,
        key: l,
        value: t.state.value[l]
      })),
      getters: i.filter((l) => s.get(l)._getters).map((l) => {
        const c = s.get(l);
        return {
          editable: !1,
          key: l,
          value: c._getters.reduce((h, g) => (h[g] = c[g], h), {})
        };
      })
    };
  }
  const r = {
    state: Object.keys(t.$state).map((i) => ({
      editable: !0,
      key: i,
      value: t.$state[i]
    }))
  };
  return t._getters && t._getters.length && (r.getters = t._getters.map((i) => ({
    editable: !1,
    key: i,
    value: t[i]
  }))), t._customProperties.size && (r.customProperties = Array.from(t._customProperties).map((i) => ({
    editable: !0,
    key: i,
    value: t[i]
  }))), r;
}
function QO(t) {
  return t ? Array.isArray(t) ? t.reduce((r, i) => (r.keys.push(i.key), r.operations.push(i.type), r.oldValue[i.key] = i.oldValue, r.newValue[i.key] = i.newValue, r), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: rn(t.type),
    key: rn(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function eN(t) {
  switch (t) {
    case Pr.direct:
      return "mutation";
    case Pr.patchFunction:
      return "$patch";
    case Pr.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let ii = !0;
const ls = [], Dr = "pinia:mutations", pt = "pinia", { assign: tN } = Object, bs = (t) => "🍍 " + t;
function nN(t, r) {
  kh({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ls,
    app: t
  }, (i) => {
    typeof i.now != "function" && ot("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.addTimelineLayer({
      id: Dr,
      label: "Pinia 🍍",
      color: 15064968
    }), i.addInspector({
      id: pt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            qO(r);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await zO(r), i.sendInspectorTree(pt), i.sendInspectorState(pt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            jO(r);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await JO(r), i.sendInspectorTree(pt), i.sendInspectorState(pt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (s) => {
            const f = r._s.get(s);
            f ? typeof f.$reset != "function" ? ot(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (f.$reset(), ot(`Store "${s}" reset.`)) : ot(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), i.on.inspectComponent((s, f) => {
      const l = s.componentInstance && s.componentInstance.proxy;
      if (l && l._pStores) {
        const c = s.componentInstance.proxy._pStores;
        Object.values(c).forEach((h) => {
          s.instanceData.state.push({
            type: bs(h.$id),
            key: "state",
            editable: !0,
            value: h._isOptionsAPI ? {
              _custom: {
                value: ce(h.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => h.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(h.$state).reduce((g, N) => (g[N] = h.$state[N], g), {})
            )
          }), h._getters && h._getters.length && s.instanceData.state.push({
            type: bs(h.$id),
            key: "getters",
            editable: !1,
            value: h._getters.reduce((g, N) => {
              try {
                g[N] = h[N];
              } catch (O) {
                g[N] = O;
              }
              return g;
            }, {})
          });
        });
      }
    }), i.on.getInspectorTree((s) => {
      if (s.app === t && s.inspectorId === pt) {
        let f = [r];
        f = f.concat(Array.from(r._s.values())), s.rootNodes = (s.filter ? f.filter((l) => "$id" in l ? l.$id.toLowerCase().includes(s.filter.toLowerCase()) : Xh.toLowerCase().includes(s.filter.toLowerCase())) : f).map(XO);
      }
    }), globalThis.$pinia = r, i.on.getInspectorState((s) => {
      if (s.app === t && s.inspectorId === pt) {
        const f = s.nodeId === fs ? r : r._s.get(s.nodeId);
        if (!f)
          return;
        f && (s.nodeId !== fs && (globalThis.$store = ce(f)), s.state = ZO(f));
      }
    }), i.on.editInspectorState((s, f) => {
      if (s.app === t && s.inspectorId === pt) {
        const l = s.nodeId === fs ? r : r._s.get(s.nodeId);
        if (!l)
          return ot(`store "${s.nodeId}" not found`, "error");
        const { path: c } = s;
        il(l) ? c.unshift("state") : (c.length !== 1 || !l._customProperties.has(c[0]) || c[0] in l.$state) && c.unshift("$state"), ii = !1, s.set(l, c, s.state.value), ii = !0;
      }
    }), i.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const f = s.type.replace(/^🍍\s*/, ""), l = r._s.get(f);
        if (!l)
          return ot(`store "${f}" not found`, "error");
        const { path: c } = s;
        if (c[0] !== "state")
          return ot(`Invalid path for store "${f}":
${c}
Only state can be modified.`);
        c[0] = "$state", ii = !1, s.set(l, c, s.state.value), ii = !0;
      }
    });
  });
}
function rN(t, r) {
  ls.includes(bs(r.$id)) || ls.push(bs(r.$id)), kh({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ls,
    app: t,
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
  }, (i) => {
    const s = typeof i.now == "function" ? i.now.bind(i) : Date.now;
    r.$onAction(({ after: c, onError: h, name: g, args: N }) => {
      const O = Zh++;
      i.addTimelineEvent({
        layerId: Dr,
        event: {
          time: s(),
          title: "🛫 " + g,
          subtitle: "start",
          data: {
            store: rn(r.$id),
            action: rn(g),
            args: N
          },
          groupId: O
        }
      }), c((v) => {
        lr = void 0, i.addTimelineEvent({
          layerId: Dr,
          event: {
            time: s(),
            title: "🛬 " + g,
            subtitle: "end",
            data: {
              store: rn(r.$id),
              action: rn(g),
              args: N,
              result: v
            },
            groupId: O
          }
        });
      }), h((v) => {
        lr = void 0, i.addTimelineEvent({
          layerId: Dr,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + g,
            subtitle: "end",
            data: {
              store: rn(r.$id),
              action: rn(g),
              args: N,
              error: v
            },
            groupId: O
          }
        });
      });
    }, !0), r._customProperties.forEach((c) => {
      Bi(() => Wf(r[c]), (h, g) => {
        i.notifyComponentUpdate(), i.sendInspectorState(pt), ii && i.addTimelineEvent({
          layerId: Dr,
          event: {
            time: s(),
            title: "Change",
            subtitle: c,
            data: {
              newValue: h,
              oldValue: g
            },
            groupId: lr
          }
        });
      }, { deep: !0 });
    }), r.$subscribe(({ events: c, type: h }, g) => {
      if (i.notifyComponentUpdate(), i.sendInspectorState(pt), !ii)
        return;
      const N = {
        time: s(),
        title: eN(h),
        data: tN({ store: rn(r.$id) }, QO(c)),
        groupId: lr
      };
      h === Pr.patchFunction ? N.subtitle = "⤵️" : h === Pr.patchObject ? N.subtitle = "🧩" : c && !Array.isArray(c) && (N.subtitle = c.type), c && (N.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: c
        }
      }), i.addTimelineEvent({
        layerId: Dr,
        event: N
      });
    }, { detached: !0, flush: "sync" });
    const f = r._hotUpdate;
    r._hotUpdate = Hf((c) => {
      f(c), i.addTimelineEvent({
        layerId: Dr,
        event: {
          time: s(),
          title: "🔥 " + r.$id,
          subtitle: "HMR update",
          data: {
            store: rn(r.$id),
            info: rn("HMR update")
          }
        }
      }), i.notifyComponentUpdate(), i.sendInspectorTree(pt), i.sendInspectorState(pt);
    });
    const { $dispose: l } = r;
    r.$dispose = () => {
      l(), i.notifyComponentUpdate(), i.sendInspectorTree(pt), i.sendInspectorState(pt), i.getSettings().logStoreChanges && ot(`Disposed "${r.$id}" store 🗑`);
    }, i.notifyComponentUpdate(), i.sendInspectorTree(pt), i.sendInspectorState(pt), i.getSettings().logStoreChanges && ot(`"${r.$id}" store installed 🆕`);
  });
}
let Zh = 0, lr;
function Od(t, r, i) {
  const s = r.reduce((f, l) => (f[l] = ce(t)[l], f), {});
  for (const f in s)
    t[f] = function() {
      const l = Zh, c = i ? new Proxy(t, {
        get(...g) {
          return lr = l, Reflect.get(...g);
        },
        set(...g) {
          return lr = l, Reflect.set(...g);
        }
      }) : t;
      lr = l;
      const h = s[f].apply(c, arguments);
      return lr = void 0, h;
    };
}
function iN({ app: t, store: r, options: i }) {
  if (!r.$id.startsWith("__hot:")) {
    if (r._isOptionsAPI = !!i.state, !r._p._testing) {
      Od(r, Object.keys(i.actions), r._isOptionsAPI);
      const s = r._hotUpdate;
      ce(r)._hotUpdate = function(f) {
        s.apply(this, arguments), Od(r, Object.keys(f._hmrPayload.actions), !!r._isOptionsAPI);
      };
    }
    rN(
      t,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      r
    );
  }
}
function oN() {
  const t = Pb(!0), r = t.run(() => hs({}));
  let i = [], s = [];
  const f = Hf({
    install(l) {
      f._a = l, l.provide(UO, f), l.config.globalProperties.$pinia = f, Mi.NODE_ENV !== "production" && Mi.NODE_ENV !== "test" && Kh && nN(l, f), s.forEach((c) => i.push(c)), s = [];
    },
    use(l) {
      return !this._a && !RO ? s.push(l) : i.push(l), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: r
  });
  return Mi.NODE_ENV !== "production" && Mi.NODE_ENV !== "test" && typeof Proxy < "u" && f.use(iN), f;
}
var Ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ws = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ws.exports;
(function(t, r) {
  (function() {
    var i, s = "4.17.21", f = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", h = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", N = 500, O = "__lodash_placeholder__", v = 1, A = 2, H = 4, Y = 1, ie = 2, be = 1, _e = 2, Ae = 4, oe = 8, We = 16, G = 32, Ce = 64, $e = 128, Ve = 256, qe = 512, _t = 30, Wt = "...", L = 800, ee = 16, Pe = 1, we = 2, Oe = 3, J = 1 / 0, se = 9007199254740991, mt = 17976931348623157e292, ln = NaN, at = 4294967295, zn = at - 1, cn = at >>> 1, di = [
      ["ary", $e],
      ["bind", be],
      ["bindKey", _e],
      ["curry", oe],
      ["curryRight", We],
      ["flip", qe],
      ["partial", G],
      ["partialRight", Ce],
      ["rearg", Ve]
    ], jn = "[object Arguments]", $r = "[object Array]", gr = "[object AsyncFunction]", an = "[object Boolean]", xn = "[object Date]", eo = "[object DOMException]", dn = "[object Error]", _r = "[object Function]", hi = "[object GeneratorFunction]", _ = "[object Map]", E = "[object Number]", C = "[object Null]", V = "[object Object]", R = "[object Promise]", M = "[object Proxy]", U = "[object RegExp]", F = "[object Set]", B = "[object String]", $ = "[object Symbol]", X = "[object Undefined]", W = "[object WeakMap]", j = "[object WeakSet]", Z = "[object ArrayBuffer]", de = "[object DataView]", xe = "[object Float32Array]", Ne = "[object Float64Array]", ut = "[object Int8Array]", Xe = "[object Int16Array]", vt = "[object Int32Array]", ft = "[object Uint8Array]", Sn = "[object Uint8ClampedArray]", Fr = "[object Uint16Array]", Ze = "[object Uint32Array]", kt = /\b__p \+= '';/g, to = /\b(__p \+=) '' \+/g, Fp = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ul = /&(?:amp|lt|gt|quot|#39);/g, fl = /[&<>"']/g, Bp = RegExp(ul.source), Hp = RegExp(fl.source), Up = /<%-([\s\S]+?)%>/g, Wp = /<%([\s\S]+?)%>/g, ll = /<%=([\s\S]+?)%>/g, kp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Kp = /^\w*$/, Gp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $s = /[\\^$.*+?()[\]{}|]/g, qp = RegExp($s.source), Fs = /^\s+/, zp = /\s/, jp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Yp = /\{\n\/\* \[wrapped with (.+)\] \*/, Jp = /,? & /, Xp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Zp = /[()=,{}\[\]\/\s]/, Qp = /\\(\\)?/g, eg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, cl = /\w*$/, tg = /^[-+]0x[0-9a-f]+$/i, ng = /^0b[01]+$/i, rg = /^\[object .+?Constructor\]$/, ig = /^0o[0-7]+$/i, og = /^(?:0|[1-9]\d*)$/, sg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, no = /($^)/, ug = /['\n\r\u2028\u2029\\]/g, ro = "\\ud800-\\udfff", fg = "\\u0300-\\u036f", lg = "\\ufe20-\\ufe2f", cg = "\\u20d0-\\u20ff", al = fg + lg + cg, dl = "\\u2700-\\u27bf", hl = "a-z\\xdf-\\xf6\\xf8-\\xff", ag = "\\xac\\xb1\\xd7\\xf7", dg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", hg = "\\u2000-\\u206f", pg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", pl = "A-Z\\xc0-\\xd6\\xd8-\\xde", gl = "\\ufe0e\\ufe0f", _l = ag + dg + hg + pg, Bs = "['’]", gg = "[" + ro + "]", ml = "[" + _l + "]", io = "[" + al + "]", vl = "\\d+", _g = "[" + dl + "]", yl = "[" + hl + "]", El = "[^" + ro + _l + vl + dl + hl + pl + "]", Hs = "\\ud83c[\\udffb-\\udfff]", mg = "(?:" + io + "|" + Hs + ")", bl = "[^" + ro + "]", Us = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ws = "[\\ud800-\\udbff][\\udc00-\\udfff]", Br = "[" + pl + "]", wl = "\\u200d", Ol = "(?:" + yl + "|" + El + ")", vg = "(?:" + Br + "|" + El + ")", Nl = "(?:" + Bs + "(?:d|ll|m|re|s|t|ve))?", xl = "(?:" + Bs + "(?:D|LL|M|RE|S|T|VE))?", Sl = mg + "?", Al = "[" + gl + "]?", yg = "(?:" + wl + "(?:" + [bl, Us, Ws].join("|") + ")" + Al + Sl + ")*", Eg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", bg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Cl = Al + Sl + yg, wg = "(?:" + [_g, Us, Ws].join("|") + ")" + Cl, Og = "(?:" + [bl + io + "?", io, Us, Ws, gg].join("|") + ")", Ng = RegExp(Bs, "g"), xg = RegExp(io, "g"), ks = RegExp(Hs + "(?=" + Hs + ")|" + Og + Cl, "g"), Sg = RegExp([
      Br + "?" + yl + "+" + Nl + "(?=" + [ml, Br, "$"].join("|") + ")",
      vg + "+" + xl + "(?=" + [ml, Br + Ol, "$"].join("|") + ")",
      Br + "?" + Ol + "+" + Nl,
      Br + "+" + xl,
      bg,
      Eg,
      vl,
      wg
    ].join("|"), "g"), Ag = RegExp("[" + wl + ro + al + gl + "]"), Cg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Tg = [
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
    ], Dg = -1, Be = {};
    Be[xe] = Be[Ne] = Be[ut] = Be[Xe] = Be[vt] = Be[ft] = Be[Sn] = Be[Fr] = Be[Ze] = !0, Be[jn] = Be[$r] = Be[Z] = Be[an] = Be[de] = Be[xn] = Be[dn] = Be[_r] = Be[_] = Be[E] = Be[V] = Be[U] = Be[F] = Be[B] = Be[W] = !1;
    var Fe = {};
    Fe[jn] = Fe[$r] = Fe[Z] = Fe[de] = Fe[an] = Fe[xn] = Fe[xe] = Fe[Ne] = Fe[ut] = Fe[Xe] = Fe[vt] = Fe[_] = Fe[E] = Fe[V] = Fe[U] = Fe[F] = Fe[B] = Fe[$] = Fe[ft] = Fe[Sn] = Fe[Fr] = Fe[Ze] = !0, Fe[dn] = Fe[_r] = Fe[W] = !1;
    var Ig = {
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
    }, Lg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Rg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Vg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Pg = parseFloat, Mg = parseInt, Tl = typeof Ir == "object" && Ir && Ir.Object === Object && Ir, $g = typeof self == "object" && self && self.Object === Object && self, lt = Tl || $g || Function("return this")(), Ks = r && !r.nodeType && r, mr = Ks && !0 && t && !t.nodeType && t, Dl = mr && mr.exports === Ks, Gs = Dl && Tl.process, Kt = function() {
      try {
        var b = mr && mr.require && mr.require("util").types;
        return b || Gs && Gs.binding && Gs.binding("util");
      } catch {
      }
    }(), Il = Kt && Kt.isArrayBuffer, Ll = Kt && Kt.isDate, Rl = Kt && Kt.isMap, Vl = Kt && Kt.isRegExp, Pl = Kt && Kt.isSet, Ml = Kt && Kt.isTypedArray;
    function It(b, T, S) {
      switch (S.length) {
        case 0:
          return b.call(T);
        case 1:
          return b.call(T, S[0]);
        case 2:
          return b.call(T, S[0], S[1]);
        case 3:
          return b.call(T, S[0], S[1], S[2]);
      }
      return b.apply(T, S);
    }
    function Fg(b, T, S, q) {
      for (var fe = -1, Se = b == null ? 0 : b.length; ++fe < Se; ) {
        var Qe = b[fe];
        T(q, Qe, S(Qe), b);
      }
      return q;
    }
    function Gt(b, T) {
      for (var S = -1, q = b == null ? 0 : b.length; ++S < q && T(b[S], S, b) !== !1; )
        ;
      return b;
    }
    function Bg(b, T) {
      for (var S = b == null ? 0 : b.length; S-- && T(b[S], S, b) !== !1; )
        ;
      return b;
    }
    function $l(b, T) {
      for (var S = -1, q = b == null ? 0 : b.length; ++S < q; )
        if (!T(b[S], S, b))
          return !1;
      return !0;
    }
    function Yn(b, T) {
      for (var S = -1, q = b == null ? 0 : b.length, fe = 0, Se = []; ++S < q; ) {
        var Qe = b[S];
        T(Qe, S, b) && (Se[fe++] = Qe);
      }
      return Se;
    }
    function oo(b, T) {
      var S = b == null ? 0 : b.length;
      return !!S && Hr(b, T, 0) > -1;
    }
    function qs(b, T, S) {
      for (var q = -1, fe = b == null ? 0 : b.length; ++q < fe; )
        if (S(T, b[q]))
          return !0;
      return !1;
    }
    function ke(b, T) {
      for (var S = -1, q = b == null ? 0 : b.length, fe = Array(q); ++S < q; )
        fe[S] = T(b[S], S, b);
      return fe;
    }
    function Jn(b, T) {
      for (var S = -1, q = T.length, fe = b.length; ++S < q; )
        b[fe + S] = T[S];
      return b;
    }
    function zs(b, T, S, q) {
      var fe = -1, Se = b == null ? 0 : b.length;
      for (q && Se && (S = b[++fe]); ++fe < Se; )
        S = T(S, b[fe], fe, b);
      return S;
    }
    function Hg(b, T, S, q) {
      var fe = b == null ? 0 : b.length;
      for (q && fe && (S = b[--fe]); fe--; )
        S = T(S, b[fe], fe, b);
      return S;
    }
    function js(b, T) {
      for (var S = -1, q = b == null ? 0 : b.length; ++S < q; )
        if (T(b[S], S, b))
          return !0;
      return !1;
    }
    var Ug = Ys("length");
    function Wg(b) {
      return b.split("");
    }
    function kg(b) {
      return b.match(Xp) || [];
    }
    function Fl(b, T, S) {
      var q;
      return S(b, function(fe, Se, Qe) {
        if (T(fe, Se, Qe))
          return q = Se, !1;
      }), q;
    }
    function so(b, T, S, q) {
      for (var fe = b.length, Se = S + (q ? 1 : -1); q ? Se-- : ++Se < fe; )
        if (T(b[Se], Se, b))
          return Se;
      return -1;
    }
    function Hr(b, T, S) {
      return T === T ? t_(b, T, S) : so(b, Bl, S);
    }
    function Kg(b, T, S, q) {
      for (var fe = S - 1, Se = b.length; ++fe < Se; )
        if (q(b[fe], T))
          return fe;
      return -1;
    }
    function Bl(b) {
      return b !== b;
    }
    function Hl(b, T) {
      var S = b == null ? 0 : b.length;
      return S ? Xs(b, T) / S : ln;
    }
    function Ys(b) {
      return function(T) {
        return T == null ? i : T[b];
      };
    }
    function Js(b) {
      return function(T) {
        return b == null ? i : b[T];
      };
    }
    function Ul(b, T, S, q, fe) {
      return fe(b, function(Se, Qe, Me) {
        S = q ? (q = !1, Se) : T(S, Se, Qe, Me);
      }), S;
    }
    function Gg(b, T) {
      var S = b.length;
      for (b.sort(T); S--; )
        b[S] = b[S].value;
      return b;
    }
    function Xs(b, T) {
      for (var S, q = -1, fe = b.length; ++q < fe; ) {
        var Se = T(b[q]);
        Se !== i && (S = S === i ? Se : S + Se);
      }
      return S;
    }
    function Zs(b, T) {
      for (var S = -1, q = Array(b); ++S < b; )
        q[S] = T(S);
      return q;
    }
    function qg(b, T) {
      return ke(T, function(S) {
        return [S, b[S]];
      });
    }
    function Wl(b) {
      return b && b.slice(0, ql(b) + 1).replace(Fs, "");
    }
    function Lt(b) {
      return function(T) {
        return b(T);
      };
    }
    function Qs(b, T) {
      return ke(T, function(S) {
        return b[S];
      });
    }
    function pi(b, T) {
      return b.has(T);
    }
    function kl(b, T) {
      for (var S = -1, q = b.length; ++S < q && Hr(T, b[S], 0) > -1; )
        ;
      return S;
    }
    function Kl(b, T) {
      for (var S = b.length; S-- && Hr(T, b[S], 0) > -1; )
        ;
      return S;
    }
    function zg(b, T) {
      for (var S = b.length, q = 0; S--; )
        b[S] === T && ++q;
      return q;
    }
    var jg = Js(Ig), Yg = Js(Lg);
    function Jg(b) {
      return "\\" + Vg[b];
    }
    function Xg(b, T) {
      return b == null ? i : b[T];
    }
    function Ur(b) {
      return Ag.test(b);
    }
    function Zg(b) {
      return Cg.test(b);
    }
    function Qg(b) {
      for (var T, S = []; !(T = b.next()).done; )
        S.push(T.value);
      return S;
    }
    function eu(b) {
      var T = -1, S = Array(b.size);
      return b.forEach(function(q, fe) {
        S[++T] = [fe, q];
      }), S;
    }
    function Gl(b, T) {
      return function(S) {
        return b(T(S));
      };
    }
    function Xn(b, T) {
      for (var S = -1, q = b.length, fe = 0, Se = []; ++S < q; ) {
        var Qe = b[S];
        (Qe === T || Qe === O) && (b[S] = O, Se[fe++] = S);
      }
      return Se;
    }
    function uo(b) {
      var T = -1, S = Array(b.size);
      return b.forEach(function(q) {
        S[++T] = q;
      }), S;
    }
    function e_(b) {
      var T = -1, S = Array(b.size);
      return b.forEach(function(q) {
        S[++T] = [q, q];
      }), S;
    }
    function t_(b, T, S) {
      for (var q = S - 1, fe = b.length; ++q < fe; )
        if (b[q] === T)
          return q;
      return -1;
    }
    function n_(b, T, S) {
      for (var q = S + 1; q--; )
        if (b[q] === T)
          return q;
      return q;
    }
    function Wr(b) {
      return Ur(b) ? i_(b) : Ug(b);
    }
    function Qt(b) {
      return Ur(b) ? o_(b) : Wg(b);
    }
    function ql(b) {
      for (var T = b.length; T-- && zp.test(b.charAt(T)); )
        ;
      return T;
    }
    var r_ = Js(Rg);
    function i_(b) {
      for (var T = ks.lastIndex = 0; ks.test(b); )
        ++T;
      return T;
    }
    function o_(b) {
      return b.match(ks) || [];
    }
    function s_(b) {
      return b.match(Sg) || [];
    }
    var u_ = function b(T) {
      T = T == null ? lt : kr.defaults(lt.Object(), T, kr.pick(lt, Tg));
      var S = T.Array, q = T.Date, fe = T.Error, Se = T.Function, Qe = T.Math, Me = T.Object, tu = T.RegExp, f_ = T.String, qt = T.TypeError, fo = S.prototype, l_ = Se.prototype, Kr = Me.prototype, lo = T["__core-js_shared__"], co = l_.toString, Ie = Kr.hasOwnProperty, c_ = 0, zl = function() {
        var e = /[^.]+$/.exec(lo && lo.keys && lo.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ao = Kr.toString, a_ = co.call(Me), d_ = lt._, h_ = tu(
        "^" + co.call(Ie).replace($s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ho = Dl ? T.Buffer : i, Zn = T.Symbol, po = T.Uint8Array, jl = ho ? ho.allocUnsafe : i, go = Gl(Me.getPrototypeOf, Me), Yl = Me.create, Jl = Kr.propertyIsEnumerable, _o = fo.splice, Xl = Zn ? Zn.isConcatSpreadable : i, gi = Zn ? Zn.iterator : i, vr = Zn ? Zn.toStringTag : i, mo = function() {
        try {
          var e = Or(Me, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), p_ = T.clearTimeout !== lt.clearTimeout && T.clearTimeout, g_ = q && q.now !== lt.Date.now && q.now, __ = T.setTimeout !== lt.setTimeout && T.setTimeout, vo = Qe.ceil, yo = Qe.floor, nu = Me.getOwnPropertySymbols, m_ = ho ? ho.isBuffer : i, Zl = T.isFinite, v_ = fo.join, y_ = Gl(Me.keys, Me), et = Qe.max, dt = Qe.min, E_ = q.now, b_ = T.parseInt, Ql = Qe.random, w_ = fo.reverse, ru = Or(T, "DataView"), _i = Or(T, "Map"), iu = Or(T, "Promise"), Gr = Or(T, "Set"), mi = Or(T, "WeakMap"), vi = Or(Me, "create"), Eo = mi && new mi(), qr = {}, O_ = Nr(ru), N_ = Nr(_i), x_ = Nr(iu), S_ = Nr(Gr), A_ = Nr(mi), bo = Zn ? Zn.prototype : i, yi = bo ? bo.valueOf : i, ec = bo ? bo.toString : i;
      function d(e) {
        if (ze(e) && !ae(e) && !(e instanceof ve)) {
          if (e instanceof zt)
            return e;
          if (Ie.call(e, "__wrapped__"))
            return ta(e);
        }
        return new zt(e);
      }
      var zr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(n) {
          if (!Ge(n))
            return {};
          if (Yl)
            return Yl(n);
          e.prototype = n;
          var o = new e();
          return e.prototype = i, o;
        };
      }();
      function wo() {
      }
      function zt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = i;
      }
      d.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Up,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Wp,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ll,
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
      }, d.prototype = wo.prototype, d.prototype.constructor = d, zt.prototype = zr(wo.prototype), zt.prototype.constructor = zt;
      function ve(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = at, this.__views__ = [];
      }
      function C_() {
        var e = new ve(this.__wrapped__);
        return e.__actions__ = xt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = xt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = xt(this.__views__), e;
      }
      function T_() {
        if (this.__filtered__) {
          var e = new ve(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function D_() {
        var e = this.__wrapped__.value(), n = this.__dir__, o = ae(e), u = n < 0, a = o ? e.length : 0, p = Wm(0, a, this.__views__), m = p.start, y = p.end, w = y - m, D = u ? y : m - 1, I = this.__iteratees__, P = I.length, K = 0, z = dt(w, this.__takeCount__);
        if (!o || !u && a == w && z == w)
          return Nc(e, this.__actions__);
        var te = [];
        e:
          for (; w-- && K < z; ) {
            D += n;
            for (var pe = -1, ne = e[D]; ++pe < P; ) {
              var me = I[pe], ye = me.iteratee, Pt = me.type, bt = ye(ne);
              if (Pt == we)
                ne = bt;
              else if (!bt) {
                if (Pt == Pe)
                  continue e;
                break e;
              }
            }
            te[K++] = ne;
          }
        return te;
      }
      ve.prototype = zr(wo.prototype), ve.prototype.constructor = ve;
      function yr(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var u = e[n];
          this.set(u[0], u[1]);
        }
      }
      function I_() {
        this.__data__ = vi ? vi(null) : {}, this.size = 0;
      }
      function L_(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function R_(e) {
        var n = this.__data__;
        if (vi) {
          var o = n[e];
          return o === g ? i : o;
        }
        return Ie.call(n, e) ? n[e] : i;
      }
      function V_(e) {
        var n = this.__data__;
        return vi ? n[e] !== i : Ie.call(n, e);
      }
      function P_(e, n) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = vi && n === i ? g : n, this;
      }
      yr.prototype.clear = I_, yr.prototype.delete = L_, yr.prototype.get = R_, yr.prototype.has = V_, yr.prototype.set = P_;
      function An(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var u = e[n];
          this.set(u[0], u[1]);
        }
      }
      function M_() {
        this.__data__ = [], this.size = 0;
      }
      function $_(e) {
        var n = this.__data__, o = Oo(n, e);
        if (o < 0)
          return !1;
        var u = n.length - 1;
        return o == u ? n.pop() : _o.call(n, o, 1), --this.size, !0;
      }
      function F_(e) {
        var n = this.__data__, o = Oo(n, e);
        return o < 0 ? i : n[o][1];
      }
      function B_(e) {
        return Oo(this.__data__, e) > -1;
      }
      function H_(e, n) {
        var o = this.__data__, u = Oo(o, e);
        return u < 0 ? (++this.size, o.push([e, n])) : o[u][1] = n, this;
      }
      An.prototype.clear = M_, An.prototype.delete = $_, An.prototype.get = F_, An.prototype.has = B_, An.prototype.set = H_;
      function Cn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var u = e[n];
          this.set(u[0], u[1]);
        }
      }
      function U_() {
        this.size = 0, this.__data__ = {
          hash: new yr(),
          map: new (_i || An)(),
          string: new yr()
        };
      }
      function W_(e) {
        var n = Po(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function k_(e) {
        return Po(this, e).get(e);
      }
      function K_(e) {
        return Po(this, e).has(e);
      }
      function G_(e, n) {
        var o = Po(this, e), u = o.size;
        return o.set(e, n), this.size += o.size == u ? 0 : 1, this;
      }
      Cn.prototype.clear = U_, Cn.prototype.delete = W_, Cn.prototype.get = k_, Cn.prototype.has = K_, Cn.prototype.set = G_;
      function Er(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new Cn(); ++n < o; )
          this.add(e[n]);
      }
      function q_(e) {
        return this.__data__.set(e, g), this;
      }
      function z_(e) {
        return this.__data__.has(e);
      }
      Er.prototype.add = Er.prototype.push = q_, Er.prototype.has = z_;
      function en(e) {
        var n = this.__data__ = new An(e);
        this.size = n.size;
      }
      function j_() {
        this.__data__ = new An(), this.size = 0;
      }
      function Y_(e) {
        var n = this.__data__, o = n.delete(e);
        return this.size = n.size, o;
      }
      function J_(e) {
        return this.__data__.get(e);
      }
      function X_(e) {
        return this.__data__.has(e);
      }
      function Z_(e, n) {
        var o = this.__data__;
        if (o instanceof An) {
          var u = o.__data__;
          if (!_i || u.length < f - 1)
            return u.push([e, n]), this.size = ++o.size, this;
          o = this.__data__ = new Cn(u);
        }
        return o.set(e, n), this.size = o.size, this;
      }
      en.prototype.clear = j_, en.prototype.delete = Y_, en.prototype.get = J_, en.prototype.has = X_, en.prototype.set = Z_;
      function tc(e, n) {
        var o = ae(e), u = !o && xr(e), a = !o && !u && rr(e), p = !o && !u && !a && Xr(e), m = o || u || a || p, y = m ? Zs(e.length, f_) : [], w = y.length;
        for (var D in e)
          (n || Ie.call(e, D)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
          (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
          Ln(D, w))) && y.push(D);
        return y;
      }
      function nc(e) {
        var n = e.length;
        return n ? e[gu(0, n - 1)] : i;
      }
      function Q_(e, n) {
        return Mo(xt(e), br(n, 0, e.length));
      }
      function em(e) {
        return Mo(xt(e));
      }
      function ou(e, n, o) {
        (o !== i && !tn(e[n], o) || o === i && !(n in e)) && Tn(e, n, o);
      }
      function Ei(e, n, o) {
        var u = e[n];
        (!(Ie.call(e, n) && tn(u, o)) || o === i && !(n in e)) && Tn(e, n, o);
      }
      function Oo(e, n) {
        for (var o = e.length; o--; )
          if (tn(e[o][0], n))
            return o;
        return -1;
      }
      function tm(e, n, o, u) {
        return Qn(e, function(a, p, m) {
          n(u, a, o(a), m);
        }), u;
      }
      function rc(e, n) {
        return e && pn(n, it(n), e);
      }
      function nm(e, n) {
        return e && pn(n, At(n), e);
      }
      function Tn(e, n, o) {
        n == "__proto__" && mo ? mo(e, n, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[n] = o;
      }
      function su(e, n) {
        for (var o = -1, u = n.length, a = S(u), p = e == null; ++o < u; )
          a[o] = p ? i : Hu(e, n[o]);
        return a;
      }
      function br(e, n, o) {
        return e === e && (o !== i && (e = e <= o ? e : o), n !== i && (e = e >= n ? e : n)), e;
      }
      function jt(e, n, o, u, a, p) {
        var m, y = n & v, w = n & A, D = n & H;
        if (o && (m = a ? o(e, u, a, p) : o(e)), m !== i)
          return m;
        if (!Ge(e))
          return e;
        var I = ae(e);
        if (I) {
          if (m = Km(e), !y)
            return xt(e, m);
        } else {
          var P = ht(e), K = P == _r || P == hi;
          if (rr(e))
            return Ac(e, y);
          if (P == V || P == jn || K && !a) {
            if (m = w || K ? {} : qc(e), !y)
              return w ? Rm(e, nm(m, e)) : Lm(e, rc(m, e));
          } else {
            if (!Fe[P])
              return a ? e : {};
            m = Gm(e, P, y);
          }
        }
        p || (p = new en());
        var z = p.get(e);
        if (z)
          return z;
        p.set(e, m), ba(e) ? e.forEach(function(ne) {
          m.add(jt(ne, n, o, ne, e, p));
        }) : ya(e) && e.forEach(function(ne, me) {
          m.set(me, jt(ne, n, o, me, e, p));
        });
        var te = D ? w ? Su : xu : w ? At : it, pe = I ? i : te(e);
        return Gt(pe || e, function(ne, me) {
          pe && (me = ne, ne = e[me]), Ei(m, me, jt(ne, n, o, me, e, p));
        }), m;
      }
      function rm(e) {
        var n = it(e);
        return function(o) {
          return ic(o, e, n);
        };
      }
      function ic(e, n, o) {
        var u = o.length;
        if (e == null)
          return !u;
        for (e = Me(e); u--; ) {
          var a = o[u], p = n[a], m = e[a];
          if (m === i && !(a in e) || !p(m))
            return !1;
        }
        return !0;
      }
      function oc(e, n, o) {
        if (typeof e != "function")
          throw new qt(c);
        return Ai(function() {
          e.apply(i, o);
        }, n);
      }
      function bi(e, n, o, u) {
        var a = -1, p = oo, m = !0, y = e.length, w = [], D = n.length;
        if (!y)
          return w;
        o && (n = ke(n, Lt(o))), u ? (p = qs, m = !1) : n.length >= f && (p = pi, m = !1, n = new Er(n));
        e:
          for (; ++a < y; ) {
            var I = e[a], P = o == null ? I : o(I);
            if (I = u || I !== 0 ? I : 0, m && P === P) {
              for (var K = D; K--; )
                if (n[K] === P)
                  continue e;
              w.push(I);
            } else p(n, P, u) || w.push(I);
          }
        return w;
      }
      var Qn = Lc(hn), sc = Lc(fu, !0);
      function im(e, n) {
        var o = !0;
        return Qn(e, function(u, a, p) {
          return o = !!n(u, a, p), o;
        }), o;
      }
      function No(e, n, o) {
        for (var u = -1, a = e.length; ++u < a; ) {
          var p = e[u], m = n(p);
          if (m != null && (y === i ? m === m && !Vt(m) : o(m, y)))
            var y = m, w = p;
        }
        return w;
      }
      function om(e, n, o, u) {
        var a = e.length;
        for (o = he(o), o < 0 && (o = -o > a ? 0 : a + o), u = u === i || u > a ? a : he(u), u < 0 && (u += a), u = o > u ? 0 : Oa(u); o < u; )
          e[o++] = n;
        return e;
      }
      function uc(e, n) {
        var o = [];
        return Qn(e, function(u, a, p) {
          n(u, a, p) && o.push(u);
        }), o;
      }
      function ct(e, n, o, u, a) {
        var p = -1, m = e.length;
        for (o || (o = zm), a || (a = []); ++p < m; ) {
          var y = e[p];
          n > 0 && o(y) ? n > 1 ? ct(y, n - 1, o, u, a) : Jn(a, y) : u || (a[a.length] = y);
        }
        return a;
      }
      var uu = Rc(), fc = Rc(!0);
      function hn(e, n) {
        return e && uu(e, n, it);
      }
      function fu(e, n) {
        return e && fc(e, n, it);
      }
      function xo(e, n) {
        return Yn(n, function(o) {
          return Rn(e[o]);
        });
      }
      function wr(e, n) {
        n = tr(n, e);
        for (var o = 0, u = n.length; e != null && o < u; )
          e = e[gn(n[o++])];
        return o && o == u ? e : i;
      }
      function lc(e, n, o) {
        var u = n(e);
        return ae(e) ? u : Jn(u, o(e));
      }
      function yt(e) {
        return e == null ? e === i ? X : C : vr && vr in Me(e) ? Um(e) : e0(e);
      }
      function lu(e, n) {
        return e > n;
      }
      function sm(e, n) {
        return e != null && Ie.call(e, n);
      }
      function um(e, n) {
        return e != null && n in Me(e);
      }
      function fm(e, n, o) {
        return e >= dt(n, o) && e < et(n, o);
      }
      function cu(e, n, o) {
        for (var u = o ? qs : oo, a = e[0].length, p = e.length, m = p, y = S(p), w = 1 / 0, D = []; m--; ) {
          var I = e[m];
          m && n && (I = ke(I, Lt(n))), w = dt(I.length, w), y[m] = !o && (n || a >= 120 && I.length >= 120) ? new Er(m && I) : i;
        }
        I = e[0];
        var P = -1, K = y[0];
        e:
          for (; ++P < a && D.length < w; ) {
            var z = I[P], te = n ? n(z) : z;
            if (z = o || z !== 0 ? z : 0, !(K ? pi(K, te) : u(D, te, o))) {
              for (m = p; --m; ) {
                var pe = y[m];
                if (!(pe ? pi(pe, te) : u(e[m], te, o)))
                  continue e;
              }
              K && K.push(te), D.push(z);
            }
          }
        return D;
      }
      function lm(e, n, o, u) {
        return hn(e, function(a, p, m) {
          n(u, o(a), p, m);
        }), u;
      }
      function wi(e, n, o) {
        n = tr(n, e), e = Jc(e, n);
        var u = e == null ? e : e[gn(Jt(n))];
        return u == null ? i : It(u, e, o);
      }
      function cc(e) {
        return ze(e) && yt(e) == jn;
      }
      function cm(e) {
        return ze(e) && yt(e) == Z;
      }
      function am(e) {
        return ze(e) && yt(e) == xn;
      }
      function Oi(e, n, o, u, a) {
        return e === n ? !0 : e == null || n == null || !ze(e) && !ze(n) ? e !== e && n !== n : dm(e, n, o, u, Oi, a);
      }
      function dm(e, n, o, u, a, p) {
        var m = ae(e), y = ae(n), w = m ? $r : ht(e), D = y ? $r : ht(n);
        w = w == jn ? V : w, D = D == jn ? V : D;
        var I = w == V, P = D == V, K = w == D;
        if (K && rr(e)) {
          if (!rr(n))
            return !1;
          m = !0, I = !1;
        }
        if (K && !I)
          return p || (p = new en()), m || Xr(e) ? kc(e, n, o, u, a, p) : Bm(e, n, w, o, u, a, p);
        if (!(o & Y)) {
          var z = I && Ie.call(e, "__wrapped__"), te = P && Ie.call(n, "__wrapped__");
          if (z || te) {
            var pe = z ? e.value() : e, ne = te ? n.value() : n;
            return p || (p = new en()), a(pe, ne, o, u, p);
          }
        }
        return K ? (p || (p = new en()), Hm(e, n, o, u, a, p)) : !1;
      }
      function hm(e) {
        return ze(e) && ht(e) == _;
      }
      function au(e, n, o, u) {
        var a = o.length, p = a, m = !u;
        if (e == null)
          return !p;
        for (e = Me(e); a--; ) {
          var y = o[a];
          if (m && y[2] ? y[1] !== e[y[0]] : !(y[0] in e))
            return !1;
        }
        for (; ++a < p; ) {
          y = o[a];
          var w = y[0], D = e[w], I = y[1];
          if (m && y[2]) {
            if (D === i && !(w in e))
              return !1;
          } else {
            var P = new en();
            if (u)
              var K = u(D, I, w, e, n, P);
            if (!(K === i ? Oi(I, D, Y | ie, u, P) : K))
              return !1;
          }
        }
        return !0;
      }
      function ac(e) {
        if (!Ge(e) || Ym(e))
          return !1;
        var n = Rn(e) ? h_ : rg;
        return n.test(Nr(e));
      }
      function pm(e) {
        return ze(e) && yt(e) == U;
      }
      function gm(e) {
        return ze(e) && ht(e) == F;
      }
      function _m(e) {
        return ze(e) && Wo(e.length) && !!Be[yt(e)];
      }
      function dc(e) {
        return typeof e == "function" ? e : e == null ? Ct : typeof e == "object" ? ae(e) ? gc(e[0], e[1]) : pc(e) : Va(e);
      }
      function du(e) {
        if (!Si(e))
          return y_(e);
        var n = [];
        for (var o in Me(e))
          Ie.call(e, o) && o != "constructor" && n.push(o);
        return n;
      }
      function mm(e) {
        if (!Ge(e))
          return Qm(e);
        var n = Si(e), o = [];
        for (var u in e)
          u == "constructor" && (n || !Ie.call(e, u)) || o.push(u);
        return o;
      }
      function hu(e, n) {
        return e < n;
      }
      function hc(e, n) {
        var o = -1, u = St(e) ? S(e.length) : [];
        return Qn(e, function(a, p, m) {
          u[++o] = n(a, p, m);
        }), u;
      }
      function pc(e) {
        var n = Cu(e);
        return n.length == 1 && n[0][2] ? jc(n[0][0], n[0][1]) : function(o) {
          return o === e || au(o, e, n);
        };
      }
      function gc(e, n) {
        return Du(e) && zc(n) ? jc(gn(e), n) : function(o) {
          var u = Hu(o, e);
          return u === i && u === n ? Uu(o, e) : Oi(n, u, Y | ie);
        };
      }
      function So(e, n, o, u, a) {
        e !== n && uu(n, function(p, m) {
          if (a || (a = new en()), Ge(p))
            vm(e, n, m, o, So, u, a);
          else {
            var y = u ? u(Lu(e, m), p, m + "", e, n, a) : i;
            y === i && (y = p), ou(e, m, y);
          }
        }, At);
      }
      function vm(e, n, o, u, a, p, m) {
        var y = Lu(e, o), w = Lu(n, o), D = m.get(w);
        if (D) {
          ou(e, o, D);
          return;
        }
        var I = p ? p(y, w, o + "", e, n, m) : i, P = I === i;
        if (P) {
          var K = ae(w), z = !K && rr(w), te = !K && !z && Xr(w);
          I = w, K || z || te ? ae(y) ? I = y : Ye(y) ? I = xt(y) : z ? (P = !1, I = Ac(w, !0)) : te ? (P = !1, I = Cc(w, !0)) : I = [] : Ci(w) || xr(w) ? (I = y, xr(y) ? I = Na(y) : (!Ge(y) || Rn(y)) && (I = qc(w))) : P = !1;
        }
        P && (m.set(w, I), a(I, w, u, p, m), m.delete(w)), ou(e, o, I);
      }
      function _c(e, n) {
        var o = e.length;
        if (o)
          return n += n < 0 ? o : 0, Ln(n, o) ? e[n] : i;
      }
      function mc(e, n, o) {
        n.length ? n = ke(n, function(p) {
          return ae(p) ? function(m) {
            return wr(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [Ct];
        var u = -1;
        n = ke(n, Lt(Q()));
        var a = hc(e, function(p, m, y) {
          var w = ke(n, function(D) {
            return D(p);
          });
          return { criteria: w, index: ++u, value: p };
        });
        return Gg(a, function(p, m) {
          return Im(p, m, o);
        });
      }
      function ym(e, n) {
        return vc(e, n, function(o, u) {
          return Uu(e, u);
        });
      }
      function vc(e, n, o) {
        for (var u = -1, a = n.length, p = {}; ++u < a; ) {
          var m = n[u], y = wr(e, m);
          o(y, m) && Ni(p, tr(m, e), y);
        }
        return p;
      }
      function Em(e) {
        return function(n) {
          return wr(n, e);
        };
      }
      function pu(e, n, o, u) {
        var a = u ? Kg : Hr, p = -1, m = n.length, y = e;
        for (e === n && (n = xt(n)), o && (y = ke(e, Lt(o))); ++p < m; )
          for (var w = 0, D = n[p], I = o ? o(D) : D; (w = a(y, I, w, u)) > -1; )
            y !== e && _o.call(y, w, 1), _o.call(e, w, 1);
        return e;
      }
      function yc(e, n) {
        for (var o = e ? n.length : 0, u = o - 1; o--; ) {
          var a = n[o];
          if (o == u || a !== p) {
            var p = a;
            Ln(a) ? _o.call(e, a, 1) : vu(e, a);
          }
        }
        return e;
      }
      function gu(e, n) {
        return e + yo(Ql() * (n - e + 1));
      }
      function bm(e, n, o, u) {
        for (var a = -1, p = et(vo((n - e) / (o || 1)), 0), m = S(p); p--; )
          m[u ? p : ++a] = e, e += o;
        return m;
      }
      function _u(e, n) {
        var o = "";
        if (!e || n < 1 || n > se)
          return o;
        do
          n % 2 && (o += e), n = yo(n / 2), n && (e += e);
        while (n);
        return o;
      }
      function ge(e, n) {
        return Ru(Yc(e, n, Ct), e + "");
      }
      function wm(e) {
        return nc(Zr(e));
      }
      function Om(e, n) {
        var o = Zr(e);
        return Mo(o, br(n, 0, o.length));
      }
      function Ni(e, n, o, u) {
        if (!Ge(e))
          return e;
        n = tr(n, e);
        for (var a = -1, p = n.length, m = p - 1, y = e; y != null && ++a < p; ) {
          var w = gn(n[a]), D = o;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return e;
          if (a != m) {
            var I = y[w];
            D = u ? u(I, w, y) : i, D === i && (D = Ge(I) ? I : Ln(n[a + 1]) ? [] : {});
          }
          Ei(y, w, D), y = y[w];
        }
        return e;
      }
      var Ec = Eo ? function(e, n) {
        return Eo.set(e, n), e;
      } : Ct, Nm = mo ? function(e, n) {
        return mo(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ku(n),
          writable: !0
        });
      } : Ct;
      function xm(e) {
        return Mo(Zr(e));
      }
      function Yt(e, n, o) {
        var u = -1, a = e.length;
        n < 0 && (n = -n > a ? 0 : a + n), o = o > a ? a : o, o < 0 && (o += a), a = n > o ? 0 : o - n >>> 0, n >>>= 0;
        for (var p = S(a); ++u < a; )
          p[u] = e[u + n];
        return p;
      }
      function Sm(e, n) {
        var o;
        return Qn(e, function(u, a, p) {
          return o = n(u, a, p), !o;
        }), !!o;
      }
      function Ao(e, n, o) {
        var u = 0, a = e == null ? u : e.length;
        if (typeof n == "number" && n === n && a <= cn) {
          for (; u < a; ) {
            var p = u + a >>> 1, m = e[p];
            m !== null && !Vt(m) && (o ? m <= n : m < n) ? u = p + 1 : a = p;
          }
          return a;
        }
        return mu(e, n, Ct, o);
      }
      function mu(e, n, o, u) {
        var a = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = o(n);
        for (var m = n !== n, y = n === null, w = Vt(n), D = n === i; a < p; ) {
          var I = yo((a + p) / 2), P = o(e[I]), K = P !== i, z = P === null, te = P === P, pe = Vt(P);
          if (m)
            var ne = u || te;
          else D ? ne = te && (u || K) : y ? ne = te && K && (u || !z) : w ? ne = te && K && !z && (u || !pe) : z || pe ? ne = !1 : ne = u ? P <= n : P < n;
          ne ? a = I + 1 : p = I;
        }
        return dt(p, zn);
      }
      function bc(e, n) {
        for (var o = -1, u = e.length, a = 0, p = []; ++o < u; ) {
          var m = e[o], y = n ? n(m) : m;
          if (!o || !tn(y, w)) {
            var w = y;
            p[a++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function wc(e) {
        return typeof e == "number" ? e : Vt(e) ? ln : +e;
      }
      function Rt(e) {
        if (typeof e == "string")
          return e;
        if (ae(e))
          return ke(e, Rt) + "";
        if (Vt(e))
          return ec ? ec.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -J ? "-0" : n;
      }
      function er(e, n, o) {
        var u = -1, a = oo, p = e.length, m = !0, y = [], w = y;
        if (o)
          m = !1, a = qs;
        else if (p >= f) {
          var D = n ? null : $m(e);
          if (D)
            return uo(D);
          m = !1, a = pi, w = new Er();
        } else
          w = n ? [] : y;
        e:
          for (; ++u < p; ) {
            var I = e[u], P = n ? n(I) : I;
            if (I = o || I !== 0 ? I : 0, m && P === P) {
              for (var K = w.length; K--; )
                if (w[K] === P)
                  continue e;
              n && w.push(P), y.push(I);
            } else a(w, P, o) || (w !== y && w.push(P), y.push(I));
          }
        return y;
      }
      function vu(e, n) {
        return n = tr(n, e), e = Jc(e, n), e == null || delete e[gn(Jt(n))];
      }
      function Oc(e, n, o, u) {
        return Ni(e, n, o(wr(e, n)), u);
      }
      function Co(e, n, o, u) {
        for (var a = e.length, p = u ? a : -1; (u ? p-- : ++p < a) && n(e[p], p, e); )
          ;
        return o ? Yt(e, u ? 0 : p, u ? p + 1 : a) : Yt(e, u ? p + 1 : 0, u ? a : p);
      }
      function Nc(e, n) {
        var o = e;
        return o instanceof ve && (o = o.value()), zs(n, function(u, a) {
          return a.func.apply(a.thisArg, Jn([u], a.args));
        }, o);
      }
      function yu(e, n, o) {
        var u = e.length;
        if (u < 2)
          return u ? er(e[0]) : [];
        for (var a = -1, p = S(u); ++a < u; )
          for (var m = e[a], y = -1; ++y < u; )
            y != a && (p[a] = bi(p[a] || m, e[y], n, o));
        return er(ct(p, 1), n, o);
      }
      function xc(e, n, o) {
        for (var u = -1, a = e.length, p = n.length, m = {}; ++u < a; ) {
          var y = u < p ? n[u] : i;
          o(m, e[u], y);
        }
        return m;
      }
      function Eu(e) {
        return Ye(e) ? e : [];
      }
      function bu(e) {
        return typeof e == "function" ? e : Ct;
      }
      function tr(e, n) {
        return ae(e) ? e : Du(e, n) ? [e] : ea(Te(e));
      }
      var Am = ge;
      function nr(e, n, o) {
        var u = e.length;
        return o = o === i ? u : o, !n && o >= u ? e : Yt(e, n, o);
      }
      var Sc = p_ || function(e) {
        return lt.clearTimeout(e);
      };
      function Ac(e, n) {
        if (n)
          return e.slice();
        var o = e.length, u = jl ? jl(o) : new e.constructor(o);
        return e.copy(u), u;
      }
      function wu(e) {
        var n = new e.constructor(e.byteLength);
        return new po(n).set(new po(e)), n;
      }
      function Cm(e, n) {
        var o = n ? wu(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function Tm(e) {
        var n = new e.constructor(e.source, cl.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function Dm(e) {
        return yi ? Me(yi.call(e)) : {};
      }
      function Cc(e, n) {
        var o = n ? wu(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function Tc(e, n) {
        if (e !== n) {
          var o = e !== i, u = e === null, a = e === e, p = Vt(e), m = n !== i, y = n === null, w = n === n, D = Vt(n);
          if (!y && !D && !p && e > n || p && m && w && !y && !D || u && m && w || !o && w || !a)
            return 1;
          if (!u && !p && !D && e < n || D && o && a && !u && !p || y && o && a || !m && a || !w)
            return -1;
        }
        return 0;
      }
      function Im(e, n, o) {
        for (var u = -1, a = e.criteria, p = n.criteria, m = a.length, y = o.length; ++u < m; ) {
          var w = Tc(a[u], p[u]);
          if (w) {
            if (u >= y)
              return w;
            var D = o[u];
            return w * (D == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Dc(e, n, o, u) {
        for (var a = -1, p = e.length, m = o.length, y = -1, w = n.length, D = et(p - m, 0), I = S(w + D), P = !u; ++y < w; )
          I[y] = n[y];
        for (; ++a < m; )
          (P || a < p) && (I[o[a]] = e[a]);
        for (; D--; )
          I[y++] = e[a++];
        return I;
      }
      function Ic(e, n, o, u) {
        for (var a = -1, p = e.length, m = -1, y = o.length, w = -1, D = n.length, I = et(p - y, 0), P = S(I + D), K = !u; ++a < I; )
          P[a] = e[a];
        for (var z = a; ++w < D; )
          P[z + w] = n[w];
        for (; ++m < y; )
          (K || a < p) && (P[z + o[m]] = e[a++]);
        return P;
      }
      function xt(e, n) {
        var o = -1, u = e.length;
        for (n || (n = S(u)); ++o < u; )
          n[o] = e[o];
        return n;
      }
      function pn(e, n, o, u) {
        var a = !o;
        o || (o = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var y = n[p], w = u ? u(o[y], e[y], y, o, e) : i;
          w === i && (w = e[y]), a ? Tn(o, y, w) : Ei(o, y, w);
        }
        return o;
      }
      function Lm(e, n) {
        return pn(e, Tu(e), n);
      }
      function Rm(e, n) {
        return pn(e, Kc(e), n);
      }
      function To(e, n) {
        return function(o, u) {
          var a = ae(o) ? Fg : tm, p = n ? n() : {};
          return a(o, e, Q(u, 2), p);
        };
      }
      function jr(e) {
        return ge(function(n, o) {
          var u = -1, a = o.length, p = a > 1 ? o[a - 1] : i, m = a > 2 ? o[2] : i;
          for (p = e.length > 3 && typeof p == "function" ? (a--, p) : i, m && Et(o[0], o[1], m) && (p = a < 3 ? i : p, a = 1), n = Me(n); ++u < a; ) {
            var y = o[u];
            y && e(n, y, u, p);
          }
          return n;
        });
      }
      function Lc(e, n) {
        return function(o, u) {
          if (o == null)
            return o;
          if (!St(o))
            return e(o, u);
          for (var a = o.length, p = n ? a : -1, m = Me(o); (n ? p-- : ++p < a) && u(m[p], p, m) !== !1; )
            ;
          return o;
        };
      }
      function Rc(e) {
        return function(n, o, u) {
          for (var a = -1, p = Me(n), m = u(n), y = m.length; y--; ) {
            var w = m[e ? y : ++a];
            if (o(p[w], w, p) === !1)
              break;
          }
          return n;
        };
      }
      function Vm(e, n, o) {
        var u = n & be, a = xi(e);
        function p() {
          var m = this && this !== lt && this instanceof p ? a : e;
          return m.apply(u ? o : this, arguments);
        }
        return p;
      }
      function Vc(e) {
        return function(n) {
          n = Te(n);
          var o = Ur(n) ? Qt(n) : i, u = o ? o[0] : n.charAt(0), a = o ? nr(o, 1).join("") : n.slice(1);
          return u[e]() + a;
        };
      }
      function Yr(e) {
        return function(n) {
          return zs(La(Ia(n).replace(Ng, "")), e, "");
        };
      }
      function xi(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var o = zr(e.prototype), u = e.apply(o, n);
          return Ge(u) ? u : o;
        };
      }
      function Pm(e, n, o) {
        var u = xi(e);
        function a() {
          for (var p = arguments.length, m = S(p), y = p, w = Jr(a); y--; )
            m[y] = arguments[y];
          var D = p < 3 && m[0] !== w && m[p - 1] !== w ? [] : Xn(m, w);
          if (p -= D.length, p < o)
            return Bc(
              e,
              n,
              Do,
              a.placeholder,
              i,
              m,
              D,
              i,
              i,
              o - p
            );
          var I = this && this !== lt && this instanceof a ? u : e;
          return It(I, this, m);
        }
        return a;
      }
      function Pc(e) {
        return function(n, o, u) {
          var a = Me(n);
          if (!St(n)) {
            var p = Q(o, 3);
            n = it(n), o = function(y) {
              return p(a[y], y, a);
            };
          }
          var m = e(n, o, u);
          return m > -1 ? a[p ? n[m] : m] : i;
        };
      }
      function Mc(e) {
        return In(function(n) {
          var o = n.length, u = o, a = zt.prototype.thru;
          for (e && n.reverse(); u--; ) {
            var p = n[u];
            if (typeof p != "function")
              throw new qt(c);
            if (a && !m && Vo(p) == "wrapper")
              var m = new zt([], !0);
          }
          for (u = m ? u : o; ++u < o; ) {
            p = n[u];
            var y = Vo(p), w = y == "wrapper" ? Au(p) : i;
            w && Iu(w[0]) && w[1] == ($e | oe | G | Ve) && !w[4].length && w[9] == 1 ? m = m[Vo(w[0])].apply(m, w[3]) : m = p.length == 1 && Iu(p) ? m[y]() : m.thru(p);
          }
          return function() {
            var D = arguments, I = D[0];
            if (m && D.length == 1 && ae(I))
              return m.plant(I).value();
            for (var P = 0, K = o ? n[P].apply(this, D) : I; ++P < o; )
              K = n[P].call(this, K);
            return K;
          };
        });
      }
      function Do(e, n, o, u, a, p, m, y, w, D) {
        var I = n & $e, P = n & be, K = n & _e, z = n & (oe | We), te = n & qe, pe = K ? i : xi(e);
        function ne() {
          for (var me = arguments.length, ye = S(me), Pt = me; Pt--; )
            ye[Pt] = arguments[Pt];
          if (z)
            var bt = Jr(ne), Mt = zg(ye, bt);
          if (u && (ye = Dc(ye, u, a, z)), p && (ye = Ic(ye, p, m, z)), me -= Mt, z && me < D) {
            var Je = Xn(ye, bt);
            return Bc(
              e,
              n,
              Do,
              ne.placeholder,
              o,
              ye,
              Je,
              y,
              w,
              D - me
            );
          }
          var nn = P ? o : this, Pn = K ? nn[e] : e;
          return me = ye.length, y ? ye = t0(ye, y) : te && me > 1 && ye.reverse(), I && w < me && (ye.length = w), this && this !== lt && this instanceof ne && (Pn = pe || xi(Pn)), Pn.apply(nn, ye);
        }
        return ne;
      }
      function $c(e, n) {
        return function(o, u) {
          return lm(o, e, n(u), {});
        };
      }
      function Io(e, n) {
        return function(o, u) {
          var a;
          if (o === i && u === i)
            return n;
          if (o !== i && (a = o), u !== i) {
            if (a === i)
              return u;
            typeof o == "string" || typeof u == "string" ? (o = Rt(o), u = Rt(u)) : (o = wc(o), u = wc(u)), a = e(o, u);
          }
          return a;
        };
      }
      function Ou(e) {
        return In(function(n) {
          return n = ke(n, Lt(Q())), ge(function(o) {
            var u = this;
            return e(n, function(a) {
              return It(a, u, o);
            });
          });
        });
      }
      function Lo(e, n) {
        n = n === i ? " " : Rt(n);
        var o = n.length;
        if (o < 2)
          return o ? _u(n, e) : n;
        var u = _u(n, vo(e / Wr(n)));
        return Ur(n) ? nr(Qt(u), 0, e).join("") : u.slice(0, e);
      }
      function Mm(e, n, o, u) {
        var a = n & be, p = xi(e);
        function m() {
          for (var y = -1, w = arguments.length, D = -1, I = u.length, P = S(I + w), K = this && this !== lt && this instanceof m ? p : e; ++D < I; )
            P[D] = u[D];
          for (; w--; )
            P[D++] = arguments[++y];
          return It(K, a ? o : this, P);
        }
        return m;
      }
      function Fc(e) {
        return function(n, o, u) {
          return u && typeof u != "number" && Et(n, o, u) && (o = u = i), n = Vn(n), o === i ? (o = n, n = 0) : o = Vn(o), u = u === i ? n < o ? 1 : -1 : Vn(u), bm(n, o, u, e);
        };
      }
      function Ro(e) {
        return function(n, o) {
          return typeof n == "string" && typeof o == "string" || (n = Xt(n), o = Xt(o)), e(n, o);
        };
      }
      function Bc(e, n, o, u, a, p, m, y, w, D) {
        var I = n & oe, P = I ? m : i, K = I ? i : m, z = I ? p : i, te = I ? i : p;
        n |= I ? G : Ce, n &= ~(I ? Ce : G), n & Ae || (n &= ~(be | _e));
        var pe = [
          e,
          n,
          a,
          z,
          P,
          te,
          K,
          y,
          w,
          D
        ], ne = o.apply(i, pe);
        return Iu(e) && Xc(ne, pe), ne.placeholder = u, Zc(ne, e, n);
      }
      function Nu(e) {
        var n = Qe[e];
        return function(o, u) {
          if (o = Xt(o), u = u == null ? 0 : dt(he(u), 292), u && Zl(o)) {
            var a = (Te(o) + "e").split("e"), p = n(a[0] + "e" + (+a[1] + u));
            return a = (Te(p) + "e").split("e"), +(a[0] + "e" + (+a[1] - u));
          }
          return n(o);
        };
      }
      var $m = Gr && 1 / uo(new Gr([, -0]))[1] == J ? function(e) {
        return new Gr(e);
      } : qu;
      function Hc(e) {
        return function(n) {
          var o = ht(n);
          return o == _ ? eu(n) : o == F ? e_(n) : qg(n, e(n));
        };
      }
      function Dn(e, n, o, u, a, p, m, y) {
        var w = n & _e;
        if (!w && typeof e != "function")
          throw new qt(c);
        var D = u ? u.length : 0;
        if (D || (n &= ~(G | Ce), u = a = i), m = m === i ? m : et(he(m), 0), y = y === i ? y : he(y), D -= a ? a.length : 0, n & Ce) {
          var I = u, P = a;
          u = a = i;
        }
        var K = w ? i : Au(e), z = [
          e,
          n,
          o,
          u,
          a,
          I,
          P,
          p,
          m,
          y
        ];
        if (K && Zm(z, K), e = z[0], n = z[1], o = z[2], u = z[3], a = z[4], y = z[9] = z[9] === i ? w ? 0 : e.length : et(z[9] - D, 0), !y && n & (oe | We) && (n &= ~(oe | We)), !n || n == be)
          var te = Vm(e, n, o);
        else n == oe || n == We ? te = Pm(e, n, y) : (n == G || n == (be | G)) && !a.length ? te = Mm(e, n, o, u) : te = Do.apply(i, z);
        var pe = K ? Ec : Xc;
        return Zc(pe(te, z), e, n);
      }
      function Uc(e, n, o, u) {
        return e === i || tn(e, Kr[o]) && !Ie.call(u, o) ? n : e;
      }
      function Wc(e, n, o, u, a, p) {
        return Ge(e) && Ge(n) && (p.set(n, e), So(e, n, i, Wc, p), p.delete(n)), e;
      }
      function Fm(e) {
        return Ci(e) ? i : e;
      }
      function kc(e, n, o, u, a, p) {
        var m = o & Y, y = e.length, w = n.length;
        if (y != w && !(m && w > y))
          return !1;
        var D = p.get(e), I = p.get(n);
        if (D && I)
          return D == n && I == e;
        var P = -1, K = !0, z = o & ie ? new Er() : i;
        for (p.set(e, n), p.set(n, e); ++P < y; ) {
          var te = e[P], pe = n[P];
          if (u)
            var ne = m ? u(pe, te, P, n, e, p) : u(te, pe, P, e, n, p);
          if (ne !== i) {
            if (ne)
              continue;
            K = !1;
            break;
          }
          if (z) {
            if (!js(n, function(me, ye) {
              if (!pi(z, ye) && (te === me || a(te, me, o, u, p)))
                return z.push(ye);
            })) {
              K = !1;
              break;
            }
          } else if (!(te === pe || a(te, pe, o, u, p))) {
            K = !1;
            break;
          }
        }
        return p.delete(e), p.delete(n), K;
      }
      function Bm(e, n, o, u, a, p, m) {
        switch (o) {
          case de:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case Z:
            return !(e.byteLength != n.byteLength || !p(new po(e), new po(n)));
          case an:
          case xn:
          case E:
            return tn(+e, +n);
          case dn:
            return e.name == n.name && e.message == n.message;
          case U:
          case B:
            return e == n + "";
          case _:
            var y = eu;
          case F:
            var w = u & Y;
            if (y || (y = uo), e.size != n.size && !w)
              return !1;
            var D = m.get(e);
            if (D)
              return D == n;
            u |= ie, m.set(e, n);
            var I = kc(y(e), y(n), u, a, p, m);
            return m.delete(e), I;
          case $:
            if (yi)
              return yi.call(e) == yi.call(n);
        }
        return !1;
      }
      function Hm(e, n, o, u, a, p) {
        var m = o & Y, y = xu(e), w = y.length, D = xu(n), I = D.length;
        if (w != I && !m)
          return !1;
        for (var P = w; P--; ) {
          var K = y[P];
          if (!(m ? K in n : Ie.call(n, K)))
            return !1;
        }
        var z = p.get(e), te = p.get(n);
        if (z && te)
          return z == n && te == e;
        var pe = !0;
        p.set(e, n), p.set(n, e);
        for (var ne = m; ++P < w; ) {
          K = y[P];
          var me = e[K], ye = n[K];
          if (u)
            var Pt = m ? u(ye, me, K, n, e, p) : u(me, ye, K, e, n, p);
          if (!(Pt === i ? me === ye || a(me, ye, o, u, p) : Pt)) {
            pe = !1;
            break;
          }
          ne || (ne = K == "constructor");
        }
        if (pe && !ne) {
          var bt = e.constructor, Mt = n.constructor;
          bt != Mt && "constructor" in e && "constructor" in n && !(typeof bt == "function" && bt instanceof bt && typeof Mt == "function" && Mt instanceof Mt) && (pe = !1);
        }
        return p.delete(e), p.delete(n), pe;
      }
      function In(e) {
        return Ru(Yc(e, i, ia), e + "");
      }
      function xu(e) {
        return lc(e, it, Tu);
      }
      function Su(e) {
        return lc(e, At, Kc);
      }
      var Au = Eo ? function(e) {
        return Eo.get(e);
      } : qu;
      function Vo(e) {
        for (var n = e.name + "", o = qr[n], u = Ie.call(qr, n) ? o.length : 0; u--; ) {
          var a = o[u], p = a.func;
          if (p == null || p == e)
            return a.name;
        }
        return n;
      }
      function Jr(e) {
        var n = Ie.call(d, "placeholder") ? d : e;
        return n.placeholder;
      }
      function Q() {
        var e = d.iteratee || Ku;
        return e = e === Ku ? dc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Po(e, n) {
        var o = e.__data__;
        return jm(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
      }
      function Cu(e) {
        for (var n = it(e), o = n.length; o--; ) {
          var u = n[o], a = e[u];
          n[o] = [u, a, zc(a)];
        }
        return n;
      }
      function Or(e, n) {
        var o = Xg(e, n);
        return ac(o) ? o : i;
      }
      function Um(e) {
        var n = Ie.call(e, vr), o = e[vr];
        try {
          e[vr] = i;
          var u = !0;
        } catch {
        }
        var a = ao.call(e);
        return u && (n ? e[vr] = o : delete e[vr]), a;
      }
      var Tu = nu ? function(e) {
        return e == null ? [] : (e = Me(e), Yn(nu(e), function(n) {
          return Jl.call(e, n);
        }));
      } : zu, Kc = nu ? function(e) {
        for (var n = []; e; )
          Jn(n, Tu(e)), e = go(e);
        return n;
      } : zu, ht = yt;
      (ru && ht(new ru(new ArrayBuffer(1))) != de || _i && ht(new _i()) != _ || iu && ht(iu.resolve()) != R || Gr && ht(new Gr()) != F || mi && ht(new mi()) != W) && (ht = function(e) {
        var n = yt(e), o = n == V ? e.constructor : i, u = o ? Nr(o) : "";
        if (u)
          switch (u) {
            case O_:
              return de;
            case N_:
              return _;
            case x_:
              return R;
            case S_:
              return F;
            case A_:
              return W;
          }
        return n;
      });
      function Wm(e, n, o) {
        for (var u = -1, a = o.length; ++u < a; ) {
          var p = o[u], m = p.size;
          switch (p.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = dt(n, e + m);
              break;
            case "takeRight":
              e = et(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function km(e) {
        var n = e.match(Yp);
        return n ? n[1].split(Jp) : [];
      }
      function Gc(e, n, o) {
        n = tr(n, e);
        for (var u = -1, a = n.length, p = !1; ++u < a; ) {
          var m = gn(n[u]);
          if (!(p = e != null && o(e, m)))
            break;
          e = e[m];
        }
        return p || ++u != a ? p : (a = e == null ? 0 : e.length, !!a && Wo(a) && Ln(m, a) && (ae(e) || xr(e)));
      }
      function Km(e) {
        var n = e.length, o = new e.constructor(n);
        return n && typeof e[0] == "string" && Ie.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function qc(e) {
        return typeof e.constructor == "function" && !Si(e) ? zr(go(e)) : {};
      }
      function Gm(e, n, o) {
        var u = e.constructor;
        switch (n) {
          case Z:
            return wu(e);
          case an:
          case xn:
            return new u(+e);
          case de:
            return Cm(e, o);
          case xe:
          case Ne:
          case ut:
          case Xe:
          case vt:
          case ft:
          case Sn:
          case Fr:
          case Ze:
            return Cc(e, o);
          case _:
            return new u();
          case E:
          case B:
            return new u(e);
          case U:
            return Tm(e);
          case F:
            return new u();
          case $:
            return Dm(e);
        }
      }
      function qm(e, n) {
        var o = n.length;
        if (!o)
          return e;
        var u = o - 1;
        return n[u] = (o > 1 ? "& " : "") + n[u], n = n.join(o > 2 ? ", " : " "), e.replace(jp, `{
/* [wrapped with ` + n + `] */
`);
      }
      function zm(e) {
        return ae(e) || xr(e) || !!(Xl && e && e[Xl]);
      }
      function Ln(e, n) {
        var o = typeof e;
        return n = n ?? se, !!n && (o == "number" || o != "symbol" && og.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Et(e, n, o) {
        if (!Ge(o))
          return !1;
        var u = typeof n;
        return (u == "number" ? St(o) && Ln(n, o.length) : u == "string" && n in o) ? tn(o[n], e) : !1;
      }
      function Du(e, n) {
        if (ae(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || Vt(e) ? !0 : Kp.test(e) || !kp.test(e) || n != null && e in Me(n);
      }
      function jm(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Iu(e) {
        var n = Vo(e), o = d[n];
        if (typeof o != "function" || !(n in ve.prototype))
          return !1;
        if (e === o)
          return !0;
        var u = Au(o);
        return !!u && e === u[0];
      }
      function Ym(e) {
        return !!zl && zl in e;
      }
      var Jm = lo ? Rn : ju;
      function Si(e) {
        var n = e && e.constructor, o = typeof n == "function" && n.prototype || Kr;
        return e === o;
      }
      function zc(e) {
        return e === e && !Ge(e);
      }
      function jc(e, n) {
        return function(o) {
          return o == null ? !1 : o[e] === n && (n !== i || e in Me(o));
        };
      }
      function Xm(e) {
        var n = Ho(e, function(u) {
          return o.size === N && o.clear(), u;
        }), o = n.cache;
        return n;
      }
      function Zm(e, n) {
        var o = e[1], u = n[1], a = o | u, p = a < (be | _e | $e), m = u == $e && o == oe || u == $e && o == Ve && e[7].length <= n[8] || u == ($e | Ve) && n[7].length <= n[8] && o == oe;
        if (!(p || m))
          return e;
        u & be && (e[2] = n[2], a |= o & be ? 0 : Ae);
        var y = n[3];
        if (y) {
          var w = e[3];
          e[3] = w ? Dc(w, y, n[4]) : y, e[4] = w ? Xn(e[3], O) : n[4];
        }
        return y = n[5], y && (w = e[5], e[5] = w ? Ic(w, y, n[6]) : y, e[6] = w ? Xn(e[5], O) : n[6]), y = n[7], y && (e[7] = y), u & $e && (e[8] = e[8] == null ? n[8] : dt(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = a, e;
      }
      function Qm(e) {
        var n = [];
        if (e != null)
          for (var o in Me(e))
            n.push(o);
        return n;
      }
      function e0(e) {
        return ao.call(e);
      }
      function Yc(e, n, o) {
        return n = et(n === i ? e.length - 1 : n, 0), function() {
          for (var u = arguments, a = -1, p = et(u.length - n, 0), m = S(p); ++a < p; )
            m[a] = u[n + a];
          a = -1;
          for (var y = S(n + 1); ++a < n; )
            y[a] = u[a];
          return y[n] = o(m), It(e, this, y);
        };
      }
      function Jc(e, n) {
        return n.length < 2 ? e : wr(e, Yt(n, 0, -1));
      }
      function t0(e, n) {
        for (var o = e.length, u = dt(n.length, o), a = xt(e); u--; ) {
          var p = n[u];
          e[u] = Ln(p, o) ? a[p] : i;
        }
        return e;
      }
      function Lu(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Xc = Qc(Ec), Ai = __ || function(e, n) {
        return lt.setTimeout(e, n);
      }, Ru = Qc(Nm);
      function Zc(e, n, o) {
        var u = n + "";
        return Ru(e, qm(u, n0(km(u), o)));
      }
      function Qc(e) {
        var n = 0, o = 0;
        return function() {
          var u = E_(), a = ee - (u - o);
          if (o = u, a > 0) {
            if (++n >= L)
              return arguments[0];
          } else
            n = 0;
          return e.apply(i, arguments);
        };
      }
      function Mo(e, n) {
        var o = -1, u = e.length, a = u - 1;
        for (n = n === i ? u : n; ++o < n; ) {
          var p = gu(o, a), m = e[p];
          e[p] = e[o], e[o] = m;
        }
        return e.length = n, e;
      }
      var ea = Xm(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Gp, function(o, u, a, p) {
          n.push(a ? p.replace(Qp, "$1") : u || o);
        }), n;
      });
      function gn(e) {
        if (typeof e == "string" || Vt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -J ? "-0" : n;
      }
      function Nr(e) {
        if (e != null) {
          try {
            return co.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function n0(e, n) {
        return Gt(di, function(o) {
          var u = "_." + o[0];
          n & o[1] && !oo(e, u) && e.push(u);
        }), e.sort();
      }
      function ta(e) {
        if (e instanceof ve)
          return e.clone();
        var n = new zt(e.__wrapped__, e.__chain__);
        return n.__actions__ = xt(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function r0(e, n, o) {
        (o ? Et(e, n, o) : n === i) ? n = 1 : n = et(he(n), 0);
        var u = e == null ? 0 : e.length;
        if (!u || n < 1)
          return [];
        for (var a = 0, p = 0, m = S(vo(u / n)); a < u; )
          m[p++] = Yt(e, a, a += n);
        return m;
      }
      function i0(e) {
        for (var n = -1, o = e == null ? 0 : e.length, u = 0, a = []; ++n < o; ) {
          var p = e[n];
          p && (a[u++] = p);
        }
        return a;
      }
      function o0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = S(e - 1), o = arguments[0], u = e; u--; )
          n[u - 1] = arguments[u];
        return Jn(ae(o) ? xt(o) : [o], ct(n, 1));
      }
      var s0 = ge(function(e, n) {
        return Ye(e) ? bi(e, ct(n, 1, Ye, !0)) : [];
      }), u0 = ge(function(e, n) {
        var o = Jt(n);
        return Ye(o) && (o = i), Ye(e) ? bi(e, ct(n, 1, Ye, !0), Q(o, 2)) : [];
      }), f0 = ge(function(e, n) {
        var o = Jt(n);
        return Ye(o) && (o = i), Ye(e) ? bi(e, ct(n, 1, Ye, !0), i, o) : [];
      });
      function l0(e, n, o) {
        var u = e == null ? 0 : e.length;
        return u ? (n = o || n === i ? 1 : he(n), Yt(e, n < 0 ? 0 : n, u)) : [];
      }
      function c0(e, n, o) {
        var u = e == null ? 0 : e.length;
        return u ? (n = o || n === i ? 1 : he(n), n = u - n, Yt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function a0(e, n) {
        return e && e.length ? Co(e, Q(n, 3), !0, !0) : [];
      }
      function d0(e, n) {
        return e && e.length ? Co(e, Q(n, 3), !0) : [];
      }
      function h0(e, n, o, u) {
        var a = e == null ? 0 : e.length;
        return a ? (o && typeof o != "number" && Et(e, n, o) && (o = 0, u = a), om(e, n, o, u)) : [];
      }
      function na(e, n, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var a = o == null ? 0 : he(o);
        return a < 0 && (a = et(u + a, 0)), so(e, Q(n, 3), a);
      }
      function ra(e, n, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var a = u - 1;
        return o !== i && (a = he(o), a = o < 0 ? et(u + a, 0) : dt(a, u - 1)), so(e, Q(n, 3), a, !0);
      }
      function ia(e) {
        var n = e == null ? 0 : e.length;
        return n ? ct(e, 1) : [];
      }
      function p0(e) {
        var n = e == null ? 0 : e.length;
        return n ? ct(e, J) : [];
      }
      function g0(e, n) {
        var o = e == null ? 0 : e.length;
        return o ? (n = n === i ? 1 : he(n), ct(e, n)) : [];
      }
      function _0(e) {
        for (var n = -1, o = e == null ? 0 : e.length, u = {}; ++n < o; ) {
          var a = e[n];
          u[a[0]] = a[1];
        }
        return u;
      }
      function oa(e) {
        return e && e.length ? e[0] : i;
      }
      function m0(e, n, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var a = o == null ? 0 : he(o);
        return a < 0 && (a = et(u + a, 0)), Hr(e, n, a);
      }
      function v0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Yt(e, 0, -1) : [];
      }
      var y0 = ge(function(e) {
        var n = ke(e, Eu);
        return n.length && n[0] === e[0] ? cu(n) : [];
      }), E0 = ge(function(e) {
        var n = Jt(e), o = ke(e, Eu);
        return n === Jt(o) ? n = i : o.pop(), o.length && o[0] === e[0] ? cu(o, Q(n, 2)) : [];
      }), b0 = ge(function(e) {
        var n = Jt(e), o = ke(e, Eu);
        return n = typeof n == "function" ? n : i, n && o.pop(), o.length && o[0] === e[0] ? cu(o, i, n) : [];
      });
      function w0(e, n) {
        return e == null ? "" : v_.call(e, n);
      }
      function Jt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : i;
      }
      function O0(e, n, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var a = u;
        return o !== i && (a = he(o), a = a < 0 ? et(u + a, 0) : dt(a, u - 1)), n === n ? n_(e, n, a) : so(e, Bl, a, !0);
      }
      function N0(e, n) {
        return e && e.length ? _c(e, he(n)) : i;
      }
      var x0 = ge(sa);
      function sa(e, n) {
        return e && e.length && n && n.length ? pu(e, n) : e;
      }
      function S0(e, n, o) {
        return e && e.length && n && n.length ? pu(e, n, Q(o, 2)) : e;
      }
      function A0(e, n, o) {
        return e && e.length && n && n.length ? pu(e, n, i, o) : e;
      }
      var C0 = In(function(e, n) {
        var o = e == null ? 0 : e.length, u = su(e, n);
        return yc(e, ke(n, function(a) {
          return Ln(a, o) ? +a : a;
        }).sort(Tc)), u;
      });
      function T0(e, n) {
        var o = [];
        if (!(e && e.length))
          return o;
        var u = -1, a = [], p = e.length;
        for (n = Q(n, 3); ++u < p; ) {
          var m = e[u];
          n(m, u, e) && (o.push(m), a.push(u));
        }
        return yc(e, a), o;
      }
      function Vu(e) {
        return e == null ? e : w_.call(e);
      }
      function D0(e, n, o) {
        var u = e == null ? 0 : e.length;
        return u ? (o && typeof o != "number" && Et(e, n, o) ? (n = 0, o = u) : (n = n == null ? 0 : he(n), o = o === i ? u : he(o)), Yt(e, n, o)) : [];
      }
      function I0(e, n) {
        return Ao(e, n);
      }
      function L0(e, n, o) {
        return mu(e, n, Q(o, 2));
      }
      function R0(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var u = Ao(e, n);
          if (u < o && tn(e[u], n))
            return u;
        }
        return -1;
      }
      function V0(e, n) {
        return Ao(e, n, !0);
      }
      function P0(e, n, o) {
        return mu(e, n, Q(o, 2), !0);
      }
      function M0(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var u = Ao(e, n, !0) - 1;
          if (tn(e[u], n))
            return u;
        }
        return -1;
      }
      function $0(e) {
        return e && e.length ? bc(e) : [];
      }
      function F0(e, n) {
        return e && e.length ? bc(e, Q(n, 2)) : [];
      }
      function B0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Yt(e, 1, n) : [];
      }
      function H0(e, n, o) {
        return e && e.length ? (n = o || n === i ? 1 : he(n), Yt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function U0(e, n, o) {
        var u = e == null ? 0 : e.length;
        return u ? (n = o || n === i ? 1 : he(n), n = u - n, Yt(e, n < 0 ? 0 : n, u)) : [];
      }
      function W0(e, n) {
        return e && e.length ? Co(e, Q(n, 3), !1, !0) : [];
      }
      function k0(e, n) {
        return e && e.length ? Co(e, Q(n, 3)) : [];
      }
      var K0 = ge(function(e) {
        return er(ct(e, 1, Ye, !0));
      }), G0 = ge(function(e) {
        var n = Jt(e);
        return Ye(n) && (n = i), er(ct(e, 1, Ye, !0), Q(n, 2));
      }), q0 = ge(function(e) {
        var n = Jt(e);
        return n = typeof n == "function" ? n : i, er(ct(e, 1, Ye, !0), i, n);
      });
      function z0(e) {
        return e && e.length ? er(e) : [];
      }
      function j0(e, n) {
        return e && e.length ? er(e, Q(n, 2)) : [];
      }
      function Y0(e, n) {
        return n = typeof n == "function" ? n : i, e && e.length ? er(e, i, n) : [];
      }
      function Pu(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = Yn(e, function(o) {
          if (Ye(o))
            return n = et(o.length, n), !0;
        }), Zs(n, function(o) {
          return ke(e, Ys(o));
        });
      }
      function ua(e, n) {
        if (!(e && e.length))
          return [];
        var o = Pu(e);
        return n == null ? o : ke(o, function(u) {
          return It(n, i, u);
        });
      }
      var J0 = ge(function(e, n) {
        return Ye(e) ? bi(e, n) : [];
      }), X0 = ge(function(e) {
        return yu(Yn(e, Ye));
      }), Z0 = ge(function(e) {
        var n = Jt(e);
        return Ye(n) && (n = i), yu(Yn(e, Ye), Q(n, 2));
      }), Q0 = ge(function(e) {
        var n = Jt(e);
        return n = typeof n == "function" ? n : i, yu(Yn(e, Ye), i, n);
      }), ev = ge(Pu);
      function tv(e, n) {
        return xc(e || [], n || [], Ei);
      }
      function nv(e, n) {
        return xc(e || [], n || [], Ni);
      }
      var rv = ge(function(e) {
        var n = e.length, o = n > 1 ? e[n - 1] : i;
        return o = typeof o == "function" ? (e.pop(), o) : i, ua(e, o);
      });
      function fa(e) {
        var n = d(e);
        return n.__chain__ = !0, n;
      }
      function iv(e, n) {
        return n(e), e;
      }
      function $o(e, n) {
        return n(e);
      }
      var ov = In(function(e) {
        var n = e.length, o = n ? e[0] : 0, u = this.__wrapped__, a = function(p) {
          return su(p, e);
        };
        return n > 1 || this.__actions__.length || !(u instanceof ve) || !Ln(o) ? this.thru(a) : (u = u.slice(o, +o + (n ? 1 : 0)), u.__actions__.push({
          func: $o,
          args: [a],
          thisArg: i
        }), new zt(u, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(i), p;
        }));
      });
      function sv() {
        return fa(this);
      }
      function uv() {
        return new zt(this.value(), this.__chain__);
      }
      function fv() {
        this.__values__ === i && (this.__values__ = wa(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? i : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function lv() {
        return this;
      }
      function cv(e) {
        for (var n, o = this; o instanceof wo; ) {
          var u = ta(o);
          u.__index__ = 0, u.__values__ = i, n ? a.__wrapped__ = u : n = u;
          var a = u;
          o = o.__wrapped__;
        }
        return a.__wrapped__ = e, n;
      }
      function av() {
        var e = this.__wrapped__;
        if (e instanceof ve) {
          var n = e;
          return this.__actions__.length && (n = new ve(this)), n = n.reverse(), n.__actions__.push({
            func: $o,
            args: [Vu],
            thisArg: i
          }), new zt(n, this.__chain__);
        }
        return this.thru(Vu);
      }
      function dv() {
        return Nc(this.__wrapped__, this.__actions__);
      }
      var hv = To(function(e, n, o) {
        Ie.call(e, o) ? ++e[o] : Tn(e, o, 1);
      });
      function pv(e, n, o) {
        var u = ae(e) ? $l : im;
        return o && Et(e, n, o) && (n = i), u(e, Q(n, 3));
      }
      function gv(e, n) {
        var o = ae(e) ? Yn : uc;
        return o(e, Q(n, 3));
      }
      var _v = Pc(na), mv = Pc(ra);
      function vv(e, n) {
        return ct(Fo(e, n), 1);
      }
      function yv(e, n) {
        return ct(Fo(e, n), J);
      }
      function Ev(e, n, o) {
        return o = o === i ? 1 : he(o), ct(Fo(e, n), o);
      }
      function la(e, n) {
        var o = ae(e) ? Gt : Qn;
        return o(e, Q(n, 3));
      }
      function ca(e, n) {
        var o = ae(e) ? Bg : sc;
        return o(e, Q(n, 3));
      }
      var bv = To(function(e, n, o) {
        Ie.call(e, o) ? e[o].push(n) : Tn(e, o, [n]);
      });
      function wv(e, n, o, u) {
        e = St(e) ? e : Zr(e), o = o && !u ? he(o) : 0;
        var a = e.length;
        return o < 0 && (o = et(a + o, 0)), ko(e) ? o <= a && e.indexOf(n, o) > -1 : !!a && Hr(e, n, o) > -1;
      }
      var Ov = ge(function(e, n, o) {
        var u = -1, a = typeof n == "function", p = St(e) ? S(e.length) : [];
        return Qn(e, function(m) {
          p[++u] = a ? It(n, m, o) : wi(m, n, o);
        }), p;
      }), Nv = To(function(e, n, o) {
        Tn(e, o, n);
      });
      function Fo(e, n) {
        var o = ae(e) ? ke : hc;
        return o(e, Q(n, 3));
      }
      function xv(e, n, o, u) {
        return e == null ? [] : (ae(n) || (n = n == null ? [] : [n]), o = u ? i : o, ae(o) || (o = o == null ? [] : [o]), mc(e, n, o));
      }
      var Sv = To(function(e, n, o) {
        e[o ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Av(e, n, o) {
        var u = ae(e) ? zs : Ul, a = arguments.length < 3;
        return u(e, Q(n, 4), o, a, Qn);
      }
      function Cv(e, n, o) {
        var u = ae(e) ? Hg : Ul, a = arguments.length < 3;
        return u(e, Q(n, 4), o, a, sc);
      }
      function Tv(e, n) {
        var o = ae(e) ? Yn : uc;
        return o(e, Uo(Q(n, 3)));
      }
      function Dv(e) {
        var n = ae(e) ? nc : wm;
        return n(e);
      }
      function Iv(e, n, o) {
        (o ? Et(e, n, o) : n === i) ? n = 1 : n = he(n);
        var u = ae(e) ? Q_ : Om;
        return u(e, n);
      }
      function Lv(e) {
        var n = ae(e) ? em : xm;
        return n(e);
      }
      function Rv(e) {
        if (e == null)
          return 0;
        if (St(e))
          return ko(e) ? Wr(e) : e.length;
        var n = ht(e);
        return n == _ || n == F ? e.size : du(e).length;
      }
      function Vv(e, n, o) {
        var u = ae(e) ? js : Sm;
        return o && Et(e, n, o) && (n = i), u(e, Q(n, 3));
      }
      var Pv = ge(function(e, n) {
        if (e == null)
          return [];
        var o = n.length;
        return o > 1 && Et(e, n[0], n[1]) ? n = [] : o > 2 && Et(n[0], n[1], n[2]) && (n = [n[0]]), mc(e, ct(n, 1), []);
      }), Bo = g_ || function() {
        return lt.Date.now();
      };
      function Mv(e, n) {
        if (typeof n != "function")
          throw new qt(c);
        return e = he(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function aa(e, n, o) {
        return n = o ? i : n, n = e && n == null ? e.length : n, Dn(e, $e, i, i, i, i, n);
      }
      function da(e, n) {
        var o;
        if (typeof n != "function")
          throw new qt(c);
        return e = he(e), function() {
          return --e > 0 && (o = n.apply(this, arguments)), e <= 1 && (n = i), o;
        };
      }
      var Mu = ge(function(e, n, o) {
        var u = be;
        if (o.length) {
          var a = Xn(o, Jr(Mu));
          u |= G;
        }
        return Dn(e, u, n, o, a);
      }), ha = ge(function(e, n, o) {
        var u = be | _e;
        if (o.length) {
          var a = Xn(o, Jr(ha));
          u |= G;
        }
        return Dn(n, u, e, o, a);
      });
      function pa(e, n, o) {
        n = o ? i : n;
        var u = Dn(e, oe, i, i, i, i, i, n);
        return u.placeholder = pa.placeholder, u;
      }
      function ga(e, n, o) {
        n = o ? i : n;
        var u = Dn(e, We, i, i, i, i, i, n);
        return u.placeholder = ga.placeholder, u;
      }
      function _a(e, n, o) {
        var u, a, p, m, y, w, D = 0, I = !1, P = !1, K = !0;
        if (typeof e != "function")
          throw new qt(c);
        n = Xt(n) || 0, Ge(o) && (I = !!o.leading, P = "maxWait" in o, p = P ? et(Xt(o.maxWait) || 0, n) : p, K = "trailing" in o ? !!o.trailing : K);
        function z(Je) {
          var nn = u, Pn = a;
          return u = a = i, D = Je, m = e.apply(Pn, nn), m;
        }
        function te(Je) {
          return D = Je, y = Ai(me, n), I ? z(Je) : m;
        }
        function pe(Je) {
          var nn = Je - w, Pn = Je - D, Pa = n - nn;
          return P ? dt(Pa, p - Pn) : Pa;
        }
        function ne(Je) {
          var nn = Je - w, Pn = Je - D;
          return w === i || nn >= n || nn < 0 || P && Pn >= p;
        }
        function me() {
          var Je = Bo();
          if (ne(Je))
            return ye(Je);
          y = Ai(me, pe(Je));
        }
        function ye(Je) {
          return y = i, K && u ? z(Je) : (u = a = i, m);
        }
        function Pt() {
          y !== i && Sc(y), D = 0, u = w = a = y = i;
        }
        function bt() {
          return y === i ? m : ye(Bo());
        }
        function Mt() {
          var Je = Bo(), nn = ne(Je);
          if (u = arguments, a = this, w = Je, nn) {
            if (y === i)
              return te(w);
            if (P)
              return Sc(y), y = Ai(me, n), z(w);
          }
          return y === i && (y = Ai(me, n)), m;
        }
        return Mt.cancel = Pt, Mt.flush = bt, Mt;
      }
      var $v = ge(function(e, n) {
        return oc(e, 1, n);
      }), Fv = ge(function(e, n, o) {
        return oc(e, Xt(n) || 0, o);
      });
      function Bv(e) {
        return Dn(e, qe);
      }
      function Ho(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new qt(c);
        var o = function() {
          var u = arguments, a = n ? n.apply(this, u) : u[0], p = o.cache;
          if (p.has(a))
            return p.get(a);
          var m = e.apply(this, u);
          return o.cache = p.set(a, m) || p, m;
        };
        return o.cache = new (Ho.Cache || Cn)(), o;
      }
      Ho.Cache = Cn;
      function Uo(e) {
        if (typeof e != "function")
          throw new qt(c);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function Hv(e) {
        return da(2, e);
      }
      var Uv = Am(function(e, n) {
        n = n.length == 1 && ae(n[0]) ? ke(n[0], Lt(Q())) : ke(ct(n, 1), Lt(Q()));
        var o = n.length;
        return ge(function(u) {
          for (var a = -1, p = dt(u.length, o); ++a < p; )
            u[a] = n[a].call(this, u[a]);
          return It(e, this, u);
        });
      }), $u = ge(function(e, n) {
        var o = Xn(n, Jr($u));
        return Dn(e, G, i, n, o);
      }), ma = ge(function(e, n) {
        var o = Xn(n, Jr(ma));
        return Dn(e, Ce, i, n, o);
      }), Wv = In(function(e, n) {
        return Dn(e, Ve, i, i, i, n);
      });
      function kv(e, n) {
        if (typeof e != "function")
          throw new qt(c);
        return n = n === i ? n : he(n), ge(e, n);
      }
      function Kv(e, n) {
        if (typeof e != "function")
          throw new qt(c);
        return n = n == null ? 0 : et(he(n), 0), ge(function(o) {
          var u = o[n], a = nr(o, 0, n);
          return u && Jn(a, u), It(e, this, a);
        });
      }
      function Gv(e, n, o) {
        var u = !0, a = !0;
        if (typeof e != "function")
          throw new qt(c);
        return Ge(o) && (u = "leading" in o ? !!o.leading : u, a = "trailing" in o ? !!o.trailing : a), _a(e, n, {
          leading: u,
          maxWait: n,
          trailing: a
        });
      }
      function qv(e) {
        return aa(e, 1);
      }
      function zv(e, n) {
        return $u(bu(n), e);
      }
      function jv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return ae(e) ? e : [e];
      }
      function Yv(e) {
        return jt(e, H);
      }
      function Jv(e, n) {
        return n = typeof n == "function" ? n : i, jt(e, H, n);
      }
      function Xv(e) {
        return jt(e, v | H);
      }
      function Zv(e, n) {
        return n = typeof n == "function" ? n : i, jt(e, v | H, n);
      }
      function Qv(e, n) {
        return n == null || ic(e, n, it(n));
      }
      function tn(e, n) {
        return e === n || e !== e && n !== n;
      }
      var ey = Ro(lu), ty = Ro(function(e, n) {
        return e >= n;
      }), xr = cc(/* @__PURE__ */ function() {
        return arguments;
      }()) ? cc : function(e) {
        return ze(e) && Ie.call(e, "callee") && !Jl.call(e, "callee");
      }, ae = S.isArray, ny = Il ? Lt(Il) : cm;
      function St(e) {
        return e != null && Wo(e.length) && !Rn(e);
      }
      function Ye(e) {
        return ze(e) && St(e);
      }
      function ry(e) {
        return e === !0 || e === !1 || ze(e) && yt(e) == an;
      }
      var rr = m_ || ju, iy = Ll ? Lt(Ll) : am;
      function oy(e) {
        return ze(e) && e.nodeType === 1 && !Ci(e);
      }
      function sy(e) {
        if (e == null)
          return !0;
        if (St(e) && (ae(e) || typeof e == "string" || typeof e.splice == "function" || rr(e) || Xr(e) || xr(e)))
          return !e.length;
        var n = ht(e);
        if (n == _ || n == F)
          return !e.size;
        if (Si(e))
          return !du(e).length;
        for (var o in e)
          if (Ie.call(e, o))
            return !1;
        return !0;
      }
      function uy(e, n) {
        return Oi(e, n);
      }
      function fy(e, n, o) {
        o = typeof o == "function" ? o : i;
        var u = o ? o(e, n) : i;
        return u === i ? Oi(e, n, i, o) : !!u;
      }
      function Fu(e) {
        if (!ze(e))
          return !1;
        var n = yt(e);
        return n == dn || n == eo || typeof e.message == "string" && typeof e.name == "string" && !Ci(e);
      }
      function ly(e) {
        return typeof e == "number" && Zl(e);
      }
      function Rn(e) {
        if (!Ge(e))
          return !1;
        var n = yt(e);
        return n == _r || n == hi || n == gr || n == M;
      }
      function va(e) {
        return typeof e == "number" && e == he(e);
      }
      function Wo(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= se;
      }
      function Ge(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ze(e) {
        return e != null && typeof e == "object";
      }
      var ya = Rl ? Lt(Rl) : hm;
      function cy(e, n) {
        return e === n || au(e, n, Cu(n));
      }
      function ay(e, n, o) {
        return o = typeof o == "function" ? o : i, au(e, n, Cu(n), o);
      }
      function dy(e) {
        return Ea(e) && e != +e;
      }
      function hy(e) {
        if (Jm(e))
          throw new fe(l);
        return ac(e);
      }
      function py(e) {
        return e === null;
      }
      function gy(e) {
        return e == null;
      }
      function Ea(e) {
        return typeof e == "number" || ze(e) && yt(e) == E;
      }
      function Ci(e) {
        if (!ze(e) || yt(e) != V)
          return !1;
        var n = go(e);
        if (n === null)
          return !0;
        var o = Ie.call(n, "constructor") && n.constructor;
        return typeof o == "function" && o instanceof o && co.call(o) == a_;
      }
      var Bu = Vl ? Lt(Vl) : pm;
      function _y(e) {
        return va(e) && e >= -se && e <= se;
      }
      var ba = Pl ? Lt(Pl) : gm;
      function ko(e) {
        return typeof e == "string" || !ae(e) && ze(e) && yt(e) == B;
      }
      function Vt(e) {
        return typeof e == "symbol" || ze(e) && yt(e) == $;
      }
      var Xr = Ml ? Lt(Ml) : _m;
      function my(e) {
        return e === i;
      }
      function vy(e) {
        return ze(e) && ht(e) == W;
      }
      function yy(e) {
        return ze(e) && yt(e) == j;
      }
      var Ey = Ro(hu), by = Ro(function(e, n) {
        return e <= n;
      });
      function wa(e) {
        if (!e)
          return [];
        if (St(e))
          return ko(e) ? Qt(e) : xt(e);
        if (gi && e[gi])
          return Qg(e[gi]());
        var n = ht(e), o = n == _ ? eu : n == F ? uo : Zr;
        return o(e);
      }
      function Vn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Xt(e), e === J || e === -J) {
          var n = e < 0 ? -1 : 1;
          return n * mt;
        }
        return e === e ? e : 0;
      }
      function he(e) {
        var n = Vn(e), o = n % 1;
        return n === n ? o ? n - o : n : 0;
      }
      function Oa(e) {
        return e ? br(he(e), 0, at) : 0;
      }
      function Xt(e) {
        if (typeof e == "number")
          return e;
        if (Vt(e))
          return ln;
        if (Ge(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Ge(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Wl(e);
        var o = ng.test(e);
        return o || ig.test(e) ? Mg(e.slice(2), o ? 2 : 8) : tg.test(e) ? ln : +e;
      }
      function Na(e) {
        return pn(e, At(e));
      }
      function wy(e) {
        return e ? br(he(e), -se, se) : e === 0 ? e : 0;
      }
      function Te(e) {
        return e == null ? "" : Rt(e);
      }
      var Oy = jr(function(e, n) {
        if (Si(n) || St(n)) {
          pn(n, it(n), e);
          return;
        }
        for (var o in n)
          Ie.call(n, o) && Ei(e, o, n[o]);
      }), xa = jr(function(e, n) {
        pn(n, At(n), e);
      }), Ko = jr(function(e, n, o, u) {
        pn(n, At(n), e, u);
      }), Ny = jr(function(e, n, o, u) {
        pn(n, it(n), e, u);
      }), xy = In(su);
      function Sy(e, n) {
        var o = zr(e);
        return n == null ? o : rc(o, n);
      }
      var Ay = ge(function(e, n) {
        e = Me(e);
        var o = -1, u = n.length, a = u > 2 ? n[2] : i;
        for (a && Et(n[0], n[1], a) && (u = 1); ++o < u; )
          for (var p = n[o], m = At(p), y = -1, w = m.length; ++y < w; ) {
            var D = m[y], I = e[D];
            (I === i || tn(I, Kr[D]) && !Ie.call(e, D)) && (e[D] = p[D]);
          }
        return e;
      }), Cy = ge(function(e) {
        return e.push(i, Wc), It(Sa, i, e);
      });
      function Ty(e, n) {
        return Fl(e, Q(n, 3), hn);
      }
      function Dy(e, n) {
        return Fl(e, Q(n, 3), fu);
      }
      function Iy(e, n) {
        return e == null ? e : uu(e, Q(n, 3), At);
      }
      function Ly(e, n) {
        return e == null ? e : fc(e, Q(n, 3), At);
      }
      function Ry(e, n) {
        return e && hn(e, Q(n, 3));
      }
      function Vy(e, n) {
        return e && fu(e, Q(n, 3));
      }
      function Py(e) {
        return e == null ? [] : xo(e, it(e));
      }
      function My(e) {
        return e == null ? [] : xo(e, At(e));
      }
      function Hu(e, n, o) {
        var u = e == null ? i : wr(e, n);
        return u === i ? o : u;
      }
      function $y(e, n) {
        return e != null && Gc(e, n, sm);
      }
      function Uu(e, n) {
        return e != null && Gc(e, n, um);
      }
      var Fy = $c(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = ao.call(n)), e[n] = o;
      }, ku(Ct)), By = $c(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = ao.call(n)), Ie.call(e, n) ? e[n].push(o) : e[n] = [o];
      }, Q), Hy = ge(wi);
      function it(e) {
        return St(e) ? tc(e) : du(e);
      }
      function At(e) {
        return St(e) ? tc(e, !0) : mm(e);
      }
      function Uy(e, n) {
        var o = {};
        return n = Q(n, 3), hn(e, function(u, a, p) {
          Tn(o, n(u, a, p), u);
        }), o;
      }
      function Wy(e, n) {
        var o = {};
        return n = Q(n, 3), hn(e, function(u, a, p) {
          Tn(o, a, n(u, a, p));
        }), o;
      }
      var ky = jr(function(e, n, o) {
        So(e, n, o);
      }), Sa = jr(function(e, n, o, u) {
        So(e, n, o, u);
      }), Ky = In(function(e, n) {
        var o = {};
        if (e == null)
          return o;
        var u = !1;
        n = ke(n, function(p) {
          return p = tr(p, e), u || (u = p.length > 1), p;
        }), pn(e, Su(e), o), u && (o = jt(o, v | A | H, Fm));
        for (var a = n.length; a--; )
          vu(o, n[a]);
        return o;
      });
      function Gy(e, n) {
        return Aa(e, Uo(Q(n)));
      }
      var qy = In(function(e, n) {
        return e == null ? {} : ym(e, n);
      });
      function Aa(e, n) {
        if (e == null)
          return {};
        var o = ke(Su(e), function(u) {
          return [u];
        });
        return n = Q(n), vc(e, o, function(u, a) {
          return n(u, a[0]);
        });
      }
      function zy(e, n, o) {
        n = tr(n, e);
        var u = -1, a = n.length;
        for (a || (a = 1, e = i); ++u < a; ) {
          var p = e == null ? i : e[gn(n[u])];
          p === i && (u = a, p = o), e = Rn(p) ? p.call(e) : p;
        }
        return e;
      }
      function jy(e, n, o) {
        return e == null ? e : Ni(e, n, o);
      }
      function Yy(e, n, o, u) {
        return u = typeof u == "function" ? u : i, e == null ? e : Ni(e, n, o, u);
      }
      var Ca = Hc(it), Ta = Hc(At);
      function Jy(e, n, o) {
        var u = ae(e), a = u || rr(e) || Xr(e);
        if (n = Q(n, 4), o == null) {
          var p = e && e.constructor;
          a ? o = u ? new p() : [] : Ge(e) ? o = Rn(p) ? zr(go(e)) : {} : o = {};
        }
        return (a ? Gt : hn)(e, function(m, y, w) {
          return n(o, m, y, w);
        }), o;
      }
      function Xy(e, n) {
        return e == null ? !0 : vu(e, n);
      }
      function Zy(e, n, o) {
        return e == null ? e : Oc(e, n, bu(o));
      }
      function Qy(e, n, o, u) {
        return u = typeof u == "function" ? u : i, e == null ? e : Oc(e, n, bu(o), u);
      }
      function Zr(e) {
        return e == null ? [] : Qs(e, it(e));
      }
      function eE(e) {
        return e == null ? [] : Qs(e, At(e));
      }
      function tE(e, n, o) {
        return o === i && (o = n, n = i), o !== i && (o = Xt(o), o = o === o ? o : 0), n !== i && (n = Xt(n), n = n === n ? n : 0), br(Xt(e), n, o);
      }
      function nE(e, n, o) {
        return n = Vn(n), o === i ? (o = n, n = 0) : o = Vn(o), e = Xt(e), fm(e, n, o);
      }
      function rE(e, n, o) {
        if (o && typeof o != "boolean" && Et(e, n, o) && (n = o = i), o === i && (typeof n == "boolean" ? (o = n, n = i) : typeof e == "boolean" && (o = e, e = i)), e === i && n === i ? (e = 0, n = 1) : (e = Vn(e), n === i ? (n = e, e = 0) : n = Vn(n)), e > n) {
          var u = e;
          e = n, n = u;
        }
        if (o || e % 1 || n % 1) {
          var a = Ql();
          return dt(e + a * (n - e + Pg("1e-" + ((a + "").length - 1))), n);
        }
        return gu(e, n);
      }
      var iE = Yr(function(e, n, o) {
        return n = n.toLowerCase(), e + (o ? Da(n) : n);
      });
      function Da(e) {
        return Wu(Te(e).toLowerCase());
      }
      function Ia(e) {
        return e = Te(e), e && e.replace(sg, jg).replace(xg, "");
      }
      function oE(e, n, o) {
        e = Te(e), n = Rt(n);
        var u = e.length;
        o = o === i ? u : br(he(o), 0, u);
        var a = o;
        return o -= n.length, o >= 0 && e.slice(o, a) == n;
      }
      function sE(e) {
        return e = Te(e), e && Hp.test(e) ? e.replace(fl, Yg) : e;
      }
      function uE(e) {
        return e = Te(e), e && qp.test(e) ? e.replace($s, "\\$&") : e;
      }
      var fE = Yr(function(e, n, o) {
        return e + (o ? "-" : "") + n.toLowerCase();
      }), lE = Yr(function(e, n, o) {
        return e + (o ? " " : "") + n.toLowerCase();
      }), cE = Vc("toLowerCase");
      function aE(e, n, o) {
        e = Te(e), n = he(n);
        var u = n ? Wr(e) : 0;
        if (!n || u >= n)
          return e;
        var a = (n - u) / 2;
        return Lo(yo(a), o) + e + Lo(vo(a), o);
      }
      function dE(e, n, o) {
        e = Te(e), n = he(n);
        var u = n ? Wr(e) : 0;
        return n && u < n ? e + Lo(n - u, o) : e;
      }
      function hE(e, n, o) {
        e = Te(e), n = he(n);
        var u = n ? Wr(e) : 0;
        return n && u < n ? Lo(n - u, o) + e : e;
      }
      function pE(e, n, o) {
        return o || n == null ? n = 0 : n && (n = +n), b_(Te(e).replace(Fs, ""), n || 0);
      }
      function gE(e, n, o) {
        return (o ? Et(e, n, o) : n === i) ? n = 1 : n = he(n), _u(Te(e), n);
      }
      function _E() {
        var e = arguments, n = Te(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var mE = Yr(function(e, n, o) {
        return e + (o ? "_" : "") + n.toLowerCase();
      });
      function vE(e, n, o) {
        return o && typeof o != "number" && Et(e, n, o) && (n = o = i), o = o === i ? at : o >>> 0, o ? (e = Te(e), e && (typeof n == "string" || n != null && !Bu(n)) && (n = Rt(n), !n && Ur(e)) ? nr(Qt(e), 0, o) : e.split(n, o)) : [];
      }
      var yE = Yr(function(e, n, o) {
        return e + (o ? " " : "") + Wu(n);
      });
      function EE(e, n, o) {
        return e = Te(e), o = o == null ? 0 : br(he(o), 0, e.length), n = Rt(n), e.slice(o, o + n.length) == n;
      }
      function bE(e, n, o) {
        var u = d.templateSettings;
        o && Et(e, n, o) && (n = i), e = Te(e), n = Ko({}, n, u, Uc);
        var a = Ko({}, n.imports, u.imports, Uc), p = it(a), m = Qs(a, p), y, w, D = 0, I = n.interpolate || no, P = "__p += '", K = tu(
          (n.escape || no).source + "|" + I.source + "|" + (I === ll ? eg : no).source + "|" + (n.evaluate || no).source + "|$",
          "g"
        ), z = "//# sourceURL=" + (Ie.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Dg + "]") + `
`;
        e.replace(K, function(ne, me, ye, Pt, bt, Mt) {
          return ye || (ye = Pt), P += e.slice(D, Mt).replace(ug, Jg), me && (y = !0, P += `' +
__e(` + me + `) +
'`), bt && (w = !0, P += `';
` + bt + `;
__p += '`), ye && (P += `' +
((__t = (` + ye + `)) == null ? '' : __t) +
'`), D = Mt + ne.length, ne;
        }), P += `';
`;
        var te = Ie.call(n, "variable") && n.variable;
        if (!te)
          P = `with (obj) {
` + P + `
}
`;
        else if (Zp.test(te))
          throw new fe(h);
        P = (w ? P.replace(kt, "") : P).replace(to, "$1").replace(Fp, "$1;"), P = "function(" + (te || "obj") + `) {
` + (te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var pe = Ra(function() {
          return Se(p, z + "return " + P).apply(i, m);
        });
        if (pe.source = P, Fu(pe))
          throw pe;
        return pe;
      }
      function wE(e) {
        return Te(e).toLowerCase();
      }
      function OE(e) {
        return Te(e).toUpperCase();
      }
      function NE(e, n, o) {
        if (e = Te(e), e && (o || n === i))
          return Wl(e);
        if (!e || !(n = Rt(n)))
          return e;
        var u = Qt(e), a = Qt(n), p = kl(u, a), m = Kl(u, a) + 1;
        return nr(u, p, m).join("");
      }
      function xE(e, n, o) {
        if (e = Te(e), e && (o || n === i))
          return e.slice(0, ql(e) + 1);
        if (!e || !(n = Rt(n)))
          return e;
        var u = Qt(e), a = Kl(u, Qt(n)) + 1;
        return nr(u, 0, a).join("");
      }
      function SE(e, n, o) {
        if (e = Te(e), e && (o || n === i))
          return e.replace(Fs, "");
        if (!e || !(n = Rt(n)))
          return e;
        var u = Qt(e), a = kl(u, Qt(n));
        return nr(u, a).join("");
      }
      function AE(e, n) {
        var o = _t, u = Wt;
        if (Ge(n)) {
          var a = "separator" in n ? n.separator : a;
          o = "length" in n ? he(n.length) : o, u = "omission" in n ? Rt(n.omission) : u;
        }
        e = Te(e);
        var p = e.length;
        if (Ur(e)) {
          var m = Qt(e);
          p = m.length;
        }
        if (o >= p)
          return e;
        var y = o - Wr(u);
        if (y < 1)
          return u;
        var w = m ? nr(m, 0, y).join("") : e.slice(0, y);
        if (a === i)
          return w + u;
        if (m && (y += w.length - y), Bu(a)) {
          if (e.slice(y).search(a)) {
            var D, I = w;
            for (a.global || (a = tu(a.source, Te(cl.exec(a)) + "g")), a.lastIndex = 0; D = a.exec(I); )
              var P = D.index;
            w = w.slice(0, P === i ? y : P);
          }
        } else if (e.indexOf(Rt(a), y) != y) {
          var K = w.lastIndexOf(a);
          K > -1 && (w = w.slice(0, K));
        }
        return w + u;
      }
      function CE(e) {
        return e = Te(e), e && Bp.test(e) ? e.replace(ul, r_) : e;
      }
      var TE = Yr(function(e, n, o) {
        return e + (o ? " " : "") + n.toUpperCase();
      }), Wu = Vc("toUpperCase");
      function La(e, n, o) {
        return e = Te(e), n = o ? i : n, n === i ? Zg(e) ? s_(e) : kg(e) : e.match(n) || [];
      }
      var Ra = ge(function(e, n) {
        try {
          return It(e, i, n);
        } catch (o) {
          return Fu(o) ? o : new fe(o);
        }
      }), DE = In(function(e, n) {
        return Gt(n, function(o) {
          o = gn(o), Tn(e, o, Mu(e[o], e));
        }), e;
      });
      function IE(e) {
        var n = e == null ? 0 : e.length, o = Q();
        return e = n ? ke(e, function(u) {
          if (typeof u[1] != "function")
            throw new qt(c);
          return [o(u[0]), u[1]];
        }) : [], ge(function(u) {
          for (var a = -1; ++a < n; ) {
            var p = e[a];
            if (It(p[0], this, u))
              return It(p[1], this, u);
          }
        });
      }
      function LE(e) {
        return rm(jt(e, v));
      }
      function ku(e) {
        return function() {
          return e;
        };
      }
      function RE(e, n) {
        return e == null || e !== e ? n : e;
      }
      var VE = Mc(), PE = Mc(!0);
      function Ct(e) {
        return e;
      }
      function Ku(e) {
        return dc(typeof e == "function" ? e : jt(e, v));
      }
      function ME(e) {
        return pc(jt(e, v));
      }
      function $E(e, n) {
        return gc(e, jt(n, v));
      }
      var FE = ge(function(e, n) {
        return function(o) {
          return wi(o, e, n);
        };
      }), BE = ge(function(e, n) {
        return function(o) {
          return wi(e, o, n);
        };
      });
      function Gu(e, n, o) {
        var u = it(n), a = xo(n, u);
        o == null && !(Ge(n) && (a.length || !u.length)) && (o = n, n = e, e = this, a = xo(n, it(n)));
        var p = !(Ge(o) && "chain" in o) || !!o.chain, m = Rn(e);
        return Gt(a, function(y) {
          var w = n[y];
          e[y] = w, m && (e.prototype[y] = function() {
            var D = this.__chain__;
            if (p || D) {
              var I = e(this.__wrapped__), P = I.__actions__ = xt(this.__actions__);
              return P.push({ func: w, args: arguments, thisArg: e }), I.__chain__ = D, I;
            }
            return w.apply(e, Jn([this.value()], arguments));
          });
        }), e;
      }
      function HE() {
        return lt._ === this && (lt._ = d_), this;
      }
      function qu() {
      }
      function UE(e) {
        return e = he(e), ge(function(n) {
          return _c(n, e);
        });
      }
      var WE = Ou(ke), kE = Ou($l), KE = Ou(js);
      function Va(e) {
        return Du(e) ? Ys(gn(e)) : Em(e);
      }
      function GE(e) {
        return function(n) {
          return e == null ? i : wr(e, n);
        };
      }
      var qE = Fc(), zE = Fc(!0);
      function zu() {
        return [];
      }
      function ju() {
        return !1;
      }
      function jE() {
        return {};
      }
      function YE() {
        return "";
      }
      function JE() {
        return !0;
      }
      function XE(e, n) {
        if (e = he(e), e < 1 || e > se)
          return [];
        var o = at, u = dt(e, at);
        n = Q(n), e -= at;
        for (var a = Zs(u, n); ++o < e; )
          n(o);
        return a;
      }
      function ZE(e) {
        return ae(e) ? ke(e, gn) : Vt(e) ? [e] : xt(ea(Te(e)));
      }
      function QE(e) {
        var n = ++c_;
        return Te(e) + n;
      }
      var eb = Io(function(e, n) {
        return e + n;
      }, 0), tb = Nu("ceil"), nb = Io(function(e, n) {
        return e / n;
      }, 1), rb = Nu("floor");
      function ib(e) {
        return e && e.length ? No(e, Ct, lu) : i;
      }
      function ob(e, n) {
        return e && e.length ? No(e, Q(n, 2), lu) : i;
      }
      function sb(e) {
        return Hl(e, Ct);
      }
      function ub(e, n) {
        return Hl(e, Q(n, 2));
      }
      function fb(e) {
        return e && e.length ? No(e, Ct, hu) : i;
      }
      function lb(e, n) {
        return e && e.length ? No(e, Q(n, 2), hu) : i;
      }
      var cb = Io(function(e, n) {
        return e * n;
      }, 1), ab = Nu("round"), db = Io(function(e, n) {
        return e - n;
      }, 0);
      function hb(e) {
        return e && e.length ? Xs(e, Ct) : 0;
      }
      function pb(e, n) {
        return e && e.length ? Xs(e, Q(n, 2)) : 0;
      }
      return d.after = Mv, d.ary = aa, d.assign = Oy, d.assignIn = xa, d.assignInWith = Ko, d.assignWith = Ny, d.at = xy, d.before = da, d.bind = Mu, d.bindAll = DE, d.bindKey = ha, d.castArray = jv, d.chain = fa, d.chunk = r0, d.compact = i0, d.concat = o0, d.cond = IE, d.conforms = LE, d.constant = ku, d.countBy = hv, d.create = Sy, d.curry = pa, d.curryRight = ga, d.debounce = _a, d.defaults = Ay, d.defaultsDeep = Cy, d.defer = $v, d.delay = Fv, d.difference = s0, d.differenceBy = u0, d.differenceWith = f0, d.drop = l0, d.dropRight = c0, d.dropRightWhile = a0, d.dropWhile = d0, d.fill = h0, d.filter = gv, d.flatMap = vv, d.flatMapDeep = yv, d.flatMapDepth = Ev, d.flatten = ia, d.flattenDeep = p0, d.flattenDepth = g0, d.flip = Bv, d.flow = VE, d.flowRight = PE, d.fromPairs = _0, d.functions = Py, d.functionsIn = My, d.groupBy = bv, d.initial = v0, d.intersection = y0, d.intersectionBy = E0, d.intersectionWith = b0, d.invert = Fy, d.invertBy = By, d.invokeMap = Ov, d.iteratee = Ku, d.keyBy = Nv, d.keys = it, d.keysIn = At, d.map = Fo, d.mapKeys = Uy, d.mapValues = Wy, d.matches = ME, d.matchesProperty = $E, d.memoize = Ho, d.merge = ky, d.mergeWith = Sa, d.method = FE, d.methodOf = BE, d.mixin = Gu, d.negate = Uo, d.nthArg = UE, d.omit = Ky, d.omitBy = Gy, d.once = Hv, d.orderBy = xv, d.over = WE, d.overArgs = Uv, d.overEvery = kE, d.overSome = KE, d.partial = $u, d.partialRight = ma, d.partition = Sv, d.pick = qy, d.pickBy = Aa, d.property = Va, d.propertyOf = GE, d.pull = x0, d.pullAll = sa, d.pullAllBy = S0, d.pullAllWith = A0, d.pullAt = C0, d.range = qE, d.rangeRight = zE, d.rearg = Wv, d.reject = Tv, d.remove = T0, d.rest = kv, d.reverse = Vu, d.sampleSize = Iv, d.set = jy, d.setWith = Yy, d.shuffle = Lv, d.slice = D0, d.sortBy = Pv, d.sortedUniq = $0, d.sortedUniqBy = F0, d.split = vE, d.spread = Kv, d.tail = B0, d.take = H0, d.takeRight = U0, d.takeRightWhile = W0, d.takeWhile = k0, d.tap = iv, d.throttle = Gv, d.thru = $o, d.toArray = wa, d.toPairs = Ca, d.toPairsIn = Ta, d.toPath = ZE, d.toPlainObject = Na, d.transform = Jy, d.unary = qv, d.union = K0, d.unionBy = G0, d.unionWith = q0, d.uniq = z0, d.uniqBy = j0, d.uniqWith = Y0, d.unset = Xy, d.unzip = Pu, d.unzipWith = ua, d.update = Zy, d.updateWith = Qy, d.values = Zr, d.valuesIn = eE, d.without = J0, d.words = La, d.wrap = zv, d.xor = X0, d.xorBy = Z0, d.xorWith = Q0, d.zip = ev, d.zipObject = tv, d.zipObjectDeep = nv, d.zipWith = rv, d.entries = Ca, d.entriesIn = Ta, d.extend = xa, d.extendWith = Ko, Gu(d, d), d.add = eb, d.attempt = Ra, d.camelCase = iE, d.capitalize = Da, d.ceil = tb, d.clamp = tE, d.clone = Yv, d.cloneDeep = Xv, d.cloneDeepWith = Zv, d.cloneWith = Jv, d.conformsTo = Qv, d.deburr = Ia, d.defaultTo = RE, d.divide = nb, d.endsWith = oE, d.eq = tn, d.escape = sE, d.escapeRegExp = uE, d.every = pv, d.find = _v, d.findIndex = na, d.findKey = Ty, d.findLast = mv, d.findLastIndex = ra, d.findLastKey = Dy, d.floor = rb, d.forEach = la, d.forEachRight = ca, d.forIn = Iy, d.forInRight = Ly, d.forOwn = Ry, d.forOwnRight = Vy, d.get = Hu, d.gt = ey, d.gte = ty, d.has = $y, d.hasIn = Uu, d.head = oa, d.identity = Ct, d.includes = wv, d.indexOf = m0, d.inRange = nE, d.invoke = Hy, d.isArguments = xr, d.isArray = ae, d.isArrayBuffer = ny, d.isArrayLike = St, d.isArrayLikeObject = Ye, d.isBoolean = ry, d.isBuffer = rr, d.isDate = iy, d.isElement = oy, d.isEmpty = sy, d.isEqual = uy, d.isEqualWith = fy, d.isError = Fu, d.isFinite = ly, d.isFunction = Rn, d.isInteger = va, d.isLength = Wo, d.isMap = ya, d.isMatch = cy, d.isMatchWith = ay, d.isNaN = dy, d.isNative = hy, d.isNil = gy, d.isNull = py, d.isNumber = Ea, d.isObject = Ge, d.isObjectLike = ze, d.isPlainObject = Ci, d.isRegExp = Bu, d.isSafeInteger = _y, d.isSet = ba, d.isString = ko, d.isSymbol = Vt, d.isTypedArray = Xr, d.isUndefined = my, d.isWeakMap = vy, d.isWeakSet = yy, d.join = w0, d.kebabCase = fE, d.last = Jt, d.lastIndexOf = O0, d.lowerCase = lE, d.lowerFirst = cE, d.lt = Ey, d.lte = by, d.max = ib, d.maxBy = ob, d.mean = sb, d.meanBy = ub, d.min = fb, d.minBy = lb, d.stubArray = zu, d.stubFalse = ju, d.stubObject = jE, d.stubString = YE, d.stubTrue = JE, d.multiply = cb, d.nth = N0, d.noConflict = HE, d.noop = qu, d.now = Bo, d.pad = aE, d.padEnd = dE, d.padStart = hE, d.parseInt = pE, d.random = rE, d.reduce = Av, d.reduceRight = Cv, d.repeat = gE, d.replace = _E, d.result = zy, d.round = ab, d.runInContext = b, d.sample = Dv, d.size = Rv, d.snakeCase = mE, d.some = Vv, d.sortedIndex = I0, d.sortedIndexBy = L0, d.sortedIndexOf = R0, d.sortedLastIndex = V0, d.sortedLastIndexBy = P0, d.sortedLastIndexOf = M0, d.startCase = yE, d.startsWith = EE, d.subtract = db, d.sum = hb, d.sumBy = pb, d.template = bE, d.times = XE, d.toFinite = Vn, d.toInteger = he, d.toLength = Oa, d.toLower = wE, d.toNumber = Xt, d.toSafeInteger = wy, d.toString = Te, d.toUpper = OE, d.trim = NE, d.trimEnd = xE, d.trimStart = SE, d.truncate = AE, d.unescape = CE, d.uniqueId = QE, d.upperCase = TE, d.upperFirst = Wu, d.each = la, d.eachRight = ca, d.first = oa, Gu(d, function() {
        var e = {};
        return hn(d, function(n, o) {
          Ie.call(d.prototype, o) || (e[o] = n);
        }), e;
      }(), { chain: !1 }), d.VERSION = s, Gt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        d[e].placeholder = d;
      }), Gt(["drop", "take"], function(e, n) {
        ve.prototype[e] = function(o) {
          o = o === i ? 1 : et(he(o), 0);
          var u = this.__filtered__ && !n ? new ve(this) : this.clone();
          return u.__filtered__ ? u.__takeCount__ = dt(o, u.__takeCount__) : u.__views__.push({
            size: dt(o, at),
            type: e + (u.__dir__ < 0 ? "Right" : "")
          }), u;
        }, ve.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), Gt(["filter", "map", "takeWhile"], function(e, n) {
        var o = n + 1, u = o == Pe || o == Oe;
        ve.prototype[e] = function(a) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: Q(a, 3),
            type: o
          }), p.__filtered__ = p.__filtered__ || u, p;
        };
      }), Gt(["head", "last"], function(e, n) {
        var o = "take" + (n ? "Right" : "");
        ve.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), Gt(["initial", "tail"], function(e, n) {
        var o = "drop" + (n ? "" : "Right");
        ve.prototype[e] = function() {
          return this.__filtered__ ? new ve(this) : this[o](1);
        };
      }), ve.prototype.compact = function() {
        return this.filter(Ct);
      }, ve.prototype.find = function(e) {
        return this.filter(e).head();
      }, ve.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ve.prototype.invokeMap = ge(function(e, n) {
        return typeof e == "function" ? new ve(this) : this.map(function(o) {
          return wi(o, e, n);
        });
      }), ve.prototype.reject = function(e) {
        return this.filter(Uo(Q(e)));
      }, ve.prototype.slice = function(e, n) {
        e = he(e);
        var o = this;
        return o.__filtered__ && (e > 0 || n < 0) ? new ve(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), n !== i && (n = he(n), o = n < 0 ? o.dropRight(-n) : o.take(n - e)), o);
      }, ve.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ve.prototype.toArray = function() {
        return this.take(at);
      }, hn(ve.prototype, function(e, n) {
        var o = /^(?:filter|find|map|reject)|While$/.test(n), u = /^(?:head|last)$/.test(n), a = d[u ? "take" + (n == "last" ? "Right" : "") : n], p = u || /^find/.test(n);
        a && (d.prototype[n] = function() {
          var m = this.__wrapped__, y = u ? [1] : arguments, w = m instanceof ve, D = y[0], I = w || ae(m), P = function(me) {
            var ye = a.apply(d, Jn([me], y));
            return u && K ? ye[0] : ye;
          };
          I && o && typeof D == "function" && D.length != 1 && (w = I = !1);
          var K = this.__chain__, z = !!this.__actions__.length, te = p && !K, pe = w && !z;
          if (!p && I) {
            m = pe ? m : new ve(this);
            var ne = e.apply(m, y);
            return ne.__actions__.push({ func: $o, args: [P], thisArg: i }), new zt(ne, K);
          }
          return te && pe ? e.apply(this, y) : (ne = this.thru(P), te ? u ? ne.value()[0] : ne.value() : ne);
        });
      }), Gt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = fo[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(e);
        d.prototype[e] = function() {
          var a = arguments;
          if (u && !this.__chain__) {
            var p = this.value();
            return n.apply(ae(p) ? p : [], a);
          }
          return this[o](function(m) {
            return n.apply(ae(m) ? m : [], a);
          });
        };
      }), hn(ve.prototype, function(e, n) {
        var o = d[n];
        if (o) {
          var u = o.name + "";
          Ie.call(qr, u) || (qr[u] = []), qr[u].push({ name: n, func: o });
        }
      }), qr[Do(i, _e).name] = [{
        name: "wrapper",
        func: i
      }], ve.prototype.clone = C_, ve.prototype.reverse = T_, ve.prototype.value = D_, d.prototype.at = ov, d.prototype.chain = sv, d.prototype.commit = uv, d.prototype.next = fv, d.prototype.plant = cv, d.prototype.reverse = av, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = dv, d.prototype.first = d.prototype.head, gi && (d.prototype[gi] = lv), d;
    }, kr = u_();
    mr ? ((mr.exports = kr)._ = kr, Ks._ = kr) : lt._ = kr;
  }).call(Ir);
})(ws, ws.exports);
var Nd = ws.exports;
function sN() {
  return Qh().router;
}
function Qh() {
  return window.CiderApp;
}
function uN(t) {
  const r = () => t;
  function i(c) {
    return `${r()?.ce_prefix ?? t.identifier}-${c}`;
  }
  function s(c) {
    const h = { ...c }, g = Qh().config.getRef(), { identifier: N } = r();
    g.plugins || (g.plugins = {}), g.plugins[N] || (g.plugins[N] = {});
    const O = g.plugins[N];
    g.plugins[N] = Nd.merge(h, O);
    const v = hs(Nd.clone(g.plugins[N]));
    return Bi(() => v, (A) => {
      g.plugins[N] = A;
    }, {
      deep: !0
    }), v;
  }
  async function f(c) {
    const h = i(c.name);
    return await sN().push(`/ugc/plugins/ce/${h}`);
  }
  return {
    customElementName: i,
    goToPage: f,
    useCPlugin: r,
    setupConfig: s,
    plugin: t
  };
}
function fN() {
  return window.CiderAudio;
}
__PLUGINSYS__.ExternalMessages;
const lN = { class: "q-px-lg plugin-base" }, cN = /* @__PURE__ */ ah({
  __name: "MySettings",
  setup(t) {
    return (r, i) => (V1(), $1("div", lN, i[0] || (i[0] = [
      Qf("div", null, " No settings for this plugin. ", -1)
    ])));
  }
});
var hr = {}, He = {}, fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.isBytes = tp;
fn.number = Os;
fn.bool = ep;
fn.bytes = ol;
fn.hash = np;
fn.exists = rp;
fn.output = ip;
function Os(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
function ep(t) {
  if (typeof t != "boolean")
    throw new Error(`boolean expected, not ${t}`);
}
function tp(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function ol(t, ...r) {
  if (!tp(t))
    throw new Error("Uint8Array expected");
  if (r.length > 0 && !r.includes(t.length))
    throw new Error(`Uint8Array expected of length ${r}, not of length=${t.length}`);
}
function np(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Os(t.outputLen), Os(t.blockLen);
}
function rp(t, r = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (r && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function ip(t, r) {
  ol(t);
  const i = r.outputLen;
  if (t.length < i)
    throw new Error(`digestInto() expects output buffer of length at least ${i}`);
}
const aN = { number: Os, bool: ep, bytes: ol, hash: np, exists: rp, output: ip };
fn.default = aN;
var le = {};
Object.defineProperty(le, "__esModule", { value: !0 });
le.add5L = le.add5H = le.add4H = le.add4L = le.add3H = le.add3L = le.rotlBL = le.rotlBH = le.rotlSL = le.rotlSH = le.rotr32L = le.rotr32H = le.rotrBL = le.rotrBH = le.rotrSL = le.rotrSH = le.shrSL = le.shrSH = le.toBig = void 0;
le.fromBig = sl;
le.split = op;
le.add = yp;
const Xo = /* @__PURE__ */ BigInt(2 ** 32 - 1), Of = /* @__PURE__ */ BigInt(32);
function sl(t, r = !1) {
  return r ? { h: Number(t & Xo), l: Number(t >> Of & Xo) } : { h: Number(t >> Of & Xo) | 0, l: Number(t & Xo) | 0 };
}
function op(t, r = !1) {
  let i = new Uint32Array(t.length), s = new Uint32Array(t.length);
  for (let f = 0; f < t.length; f++) {
    const { h: l, l: c } = sl(t[f], r);
    [i[f], s[f]] = [l, c];
  }
  return [i, s];
}
const sp = (t, r) => BigInt(t >>> 0) << Of | BigInt(r >>> 0);
le.toBig = sp;
const up = (t, r, i) => t >>> i;
le.shrSH = up;
const fp = (t, r, i) => t << 32 - i | r >>> i;
le.shrSL = fp;
const lp = (t, r, i) => t >>> i | r << 32 - i;
le.rotrSH = lp;
const cp = (t, r, i) => t << 32 - i | r >>> i;
le.rotrSL = cp;
const ap = (t, r, i) => t << 64 - i | r >>> i - 32;
le.rotrBH = ap;
const dp = (t, r, i) => t >>> i - 32 | r << 64 - i;
le.rotrBL = dp;
const hp = (t, r) => r;
le.rotr32H = hp;
const pp = (t, r) => t;
le.rotr32L = pp;
const gp = (t, r, i) => t << i | r >>> 32 - i;
le.rotlSH = gp;
const _p = (t, r, i) => r << i | t >>> 32 - i;
le.rotlSL = _p;
const mp = (t, r, i) => r << i - 32 | t >>> 64 - i;
le.rotlBH = mp;
const vp = (t, r, i) => t << i - 32 | r >>> 64 - i;
le.rotlBL = vp;
function yp(t, r, i, s) {
  const f = (r >>> 0) + (s >>> 0);
  return { h: t + i + (f / 2 ** 32 | 0) | 0, l: f | 0 };
}
const Ep = (t, r, i) => (t >>> 0) + (r >>> 0) + (i >>> 0);
le.add3L = Ep;
const bp = (t, r, i, s) => r + i + s + (t / 2 ** 32 | 0) | 0;
le.add3H = bp;
const wp = (t, r, i, s) => (t >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0);
le.add4L = wp;
const Op = (t, r, i, s, f) => r + i + s + f + (t / 2 ** 32 | 0) | 0;
le.add4H = Op;
const Np = (t, r, i, s, f) => (t >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0) + (f >>> 0);
le.add5L = Np;
const xp = (t, r, i, s, f, l) => r + i + s + f + l + (t / 2 ** 32 | 0) | 0;
le.add5H = xp;
const dN = {
  fromBig: sl,
  split: op,
  toBig: sp,
  shrSH: up,
  shrSL: fp,
  rotrSH: lp,
  rotrSL: cp,
  rotrBH: ap,
  rotrBL: dp,
  rotr32H: hp,
  rotr32L: pp,
  rotlSH: gp,
  rotlSL: _p,
  rotlBH: mp,
  rotlBL: vp,
  add: yp,
  add3L: Ep,
  add3H: bp,
  add4L: wp,
  add4H: Op,
  add5H: xp,
  add5L: Np
};
le.default = dN;
var Sp = {}, Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.crypto = void 0;
Ms.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(t) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Hash = t.nextTick = t.byteSwapIfBE = t.byteSwap = t.isLE = t.rotl = t.rotr = t.createView = t.u32 = t.u8 = void 0, t.isBytes = s, t.byteSwap32 = O, t.bytesToHex = A, t.hexToBytes = ie, t.asyncLoop = _e, t.utf8ToBytes = Ae, t.toBytes = oe, t.concatBytes = We, t.checkOpts = $e, t.wrapConstructor = Ve, t.wrapConstructorWithOpts = qe, t.wrapXOFConstructorWithOpts = _t, t.randomBytes = Wt;
  const r = Ms, i = fn;
  function s(L) {
    return L instanceof Uint8Array || L != null && typeof L == "object" && L.constructor.name === "Uint8Array";
  }
  const f = (L) => new Uint8Array(L.buffer, L.byteOffset, L.byteLength);
  t.u8 = f;
  const l = (L) => new Uint32Array(L.buffer, L.byteOffset, Math.floor(L.byteLength / 4));
  t.u32 = l;
  const c = (L) => new DataView(L.buffer, L.byteOffset, L.byteLength);
  t.createView = c;
  const h = (L, ee) => L << 32 - ee | L >>> ee;
  t.rotr = h;
  const g = (L, ee) => L << ee | L >>> 32 - ee >>> 0;
  t.rotl = g, t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const N = (L) => L << 24 & 4278190080 | L << 8 & 16711680 | L >>> 8 & 65280 | L >>> 24 & 255;
  t.byteSwap = N, t.byteSwapIfBE = t.isLE ? (L) => L : (L) => (0, t.byteSwap)(L);
  function O(L) {
    for (let ee = 0; ee < L.length; ee++)
      L[ee] = (0, t.byteSwap)(L[ee]);
  }
  const v = /* @__PURE__ */ Array.from({ length: 256 }, (L, ee) => ee.toString(16).padStart(2, "0"));
  function A(L) {
    (0, i.bytes)(L);
    let ee = "";
    for (let Pe = 0; Pe < L.length; Pe++)
      ee += v[L[Pe]];
    return ee;
  }
  const H = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function Y(L) {
    if (L >= H._0 && L <= H._9)
      return L - H._0;
    if (L >= H._A && L <= H._F)
      return L - (H._A - 10);
    if (L >= H._a && L <= H._f)
      return L - (H._a - 10);
  }
  function ie(L) {
    if (typeof L != "string")
      throw new Error("hex string expected, got " + typeof L);
    const ee = L.length, Pe = ee / 2;
    if (ee % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + ee);
    const we = new Uint8Array(Pe);
    for (let Oe = 0, J = 0; Oe < Pe; Oe++, J += 2) {
      const se = Y(L.charCodeAt(J)), mt = Y(L.charCodeAt(J + 1));
      if (se === void 0 || mt === void 0) {
        const ln = L[J] + L[J + 1];
        throw new Error('hex string expected, got non-hex character "' + ln + '" at index ' + J);
      }
      we[Oe] = se * 16 + mt;
    }
    return we;
  }
  const be = async () => {
  };
  t.nextTick = be;
  async function _e(L, ee, Pe) {
    let we = Date.now();
    for (let Oe = 0; Oe < L; Oe++) {
      Pe(Oe);
      const J = Date.now() - we;
      J >= 0 && J < ee || (await (0, t.nextTick)(), we += J);
    }
  }
  function Ae(L) {
    if (typeof L != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof L}`);
    return new Uint8Array(new TextEncoder().encode(L));
  }
  function oe(L) {
    return typeof L == "string" && (L = Ae(L)), (0, i.bytes)(L), L;
  }
  function We(...L) {
    let ee = 0;
    for (let we = 0; we < L.length; we++) {
      const Oe = L[we];
      (0, i.bytes)(Oe), ee += Oe.length;
    }
    const Pe = new Uint8Array(ee);
    for (let we = 0, Oe = 0; we < L.length; we++) {
      const J = L[we];
      Pe.set(J, Oe), Oe += J.length;
    }
    return Pe;
  }
  class G {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  t.Hash = G;
  const Ce = {}.toString;
  function $e(L, ee) {
    if (ee !== void 0 && Ce.call(ee) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(L, ee);
  }
  function Ve(L) {
    const ee = (we) => L().update(oe(we)).digest(), Pe = L();
    return ee.outputLen = Pe.outputLen, ee.blockLen = Pe.blockLen, ee.create = () => L(), ee;
  }
  function qe(L) {
    const ee = (we, Oe) => L(Oe).update(oe(we)).digest(), Pe = L({});
    return ee.outputLen = Pe.outputLen, ee.blockLen = Pe.blockLen, ee.create = (we) => L(we), ee;
  }
  function _t(L) {
    const ee = (we, Oe) => L(Oe).update(oe(we)).digest(), Pe = L({});
    return ee.outputLen = Pe.outputLen, ee.blockLen = Pe.blockLen, ee.create = (we) => L(we), ee;
  }
  function Wt(L = 32) {
    if (r.crypto && typeof r.crypto.getRandomValues == "function")
      return r.crypto.getRandomValues(new Uint8Array(L));
    if (r.crypto && typeof r.crypto.randomBytes == "function")
      return r.crypto.randomBytes(L);
    throw new Error("crypto.getRandomValues must be defined");
  }
})(Sp);
Object.defineProperty(He, "__esModule", { value: !0 });
He.shake256 = He.shake128 = He.keccak_512 = He.keccak_384 = He.keccak_256 = He.keccak_224 = He.sha3_512 = He.sha3_384 = He.sha3_256 = He.sha3_224 = He.Keccak = void 0;
He.keccakP = Dp;
const ti = fn, zi = le, Un = Sp, Ap = [], Cp = [], Tp = [], hN = /* @__PURE__ */ BigInt(0), Ri = /* @__PURE__ */ BigInt(1), pN = /* @__PURE__ */ BigInt(2), gN = /* @__PURE__ */ BigInt(7), _N = /* @__PURE__ */ BigInt(256), mN = /* @__PURE__ */ BigInt(113);
for (let t = 0, r = Ri, i = 1, s = 0; t < 24; t++) {
  [i, s] = [s, (2 * i + 3 * s) % 5], Ap.push(2 * (5 * s + i)), Cp.push((t + 1) * (t + 2) / 2 % 64);
  let f = hN;
  for (let l = 0; l < 7; l++)
    r = (r << Ri ^ (r >> gN) * mN) % _N, r & pN && (f ^= Ri << (Ri << /* @__PURE__ */ BigInt(l)) - Ri);
  Tp.push(f);
}
const [vN, yN] = /* @__PURE__ */ (0, zi.split)(Tp, !0), xd = (t, r, i) => i > 32 ? (0, zi.rotlBH)(t, r, i) : (0, zi.rotlSH)(t, r, i), Sd = (t, r, i) => i > 32 ? (0, zi.rotlBL)(t, r, i) : (0, zi.rotlSL)(t, r, i);
function Dp(t, r = 24) {
  const i = new Uint32Array(10);
  for (let s = 24 - r; s < 24; s++) {
    for (let c = 0; c < 10; c++)
      i[c] = t[c] ^ t[c + 10] ^ t[c + 20] ^ t[c + 30] ^ t[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const h = (c + 8) % 10, g = (c + 2) % 10, N = i[g], O = i[g + 1], v = xd(N, O, 1) ^ i[h], A = Sd(N, O, 1) ^ i[h + 1];
      for (let H = 0; H < 50; H += 10)
        t[c + H] ^= v, t[c + H + 1] ^= A;
    }
    let f = t[2], l = t[3];
    for (let c = 0; c < 24; c++) {
      const h = Cp[c], g = xd(f, l, h), N = Sd(f, l, h), O = Ap[c];
      f = t[O], l = t[O + 1], t[O] = g, t[O + 1] = N;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let h = 0; h < 10; h++)
        i[h] = t[c + h];
      for (let h = 0; h < 10; h++)
        t[c + h] ^= ~i[(h + 2) % 10] & i[(h + 4) % 10];
    }
    t[0] ^= vN[s], t[1] ^= yN[s];
  }
  i.fill(0);
}
class Qi extends Un.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(r, i, s, f = !1, l = 24) {
    if (super(), this.blockLen = r, this.suffix = i, this.outputLen = s, this.enableXOF = f, this.rounds = l, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, ti.number)(s), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Un.u32)(this.state);
  }
  keccak() {
    Un.isLE || (0, Un.byteSwap32)(this.state32), Dp(this.state32, this.rounds), Un.isLE || (0, Un.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(r) {
    (0, ti.exists)(this);
    const { blockLen: i, state: s } = this;
    r = (0, Un.toBytes)(r);
    const f = r.length;
    for (let l = 0; l < f; ) {
      const c = Math.min(i - this.pos, f - l);
      for (let h = 0; h < c; h++)
        s[this.pos++] ^= r[l++];
      this.pos === i && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: r, suffix: i, pos: s, blockLen: f } = this;
    r[s] ^= i, i & 128 && s === f - 1 && this.keccak(), r[f - 1] ^= 128, this.keccak();
  }
  writeInto(r) {
    (0, ti.exists)(this, !1), (0, ti.bytes)(r), this.finish();
    const i = this.state, { blockLen: s } = this;
    for (let f = 0, l = r.length; f < l; ) {
      this.posOut >= s && this.keccak();
      const c = Math.min(s - this.posOut, l - f);
      r.set(i.subarray(this.posOut, this.posOut + c), f), this.posOut += c, f += c;
    }
    return r;
  }
  xofInto(r) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(r);
  }
  xof(r) {
    return (0, ti.number)(r), this.xofInto(new Uint8Array(r));
  }
  digestInto(r) {
    if ((0, ti.output)(r, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(r), this.destroy(), r;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(r) {
    const { blockLen: i, suffix: s, outputLen: f, rounds: l, enableXOF: c } = this;
    return r || (r = new Qi(i, s, f, c, l)), r.state32.set(this.state32), r.pos = this.pos, r.posOut = this.posOut, r.finished = this.finished, r.rounds = l, r.suffix = s, r.outputLen = f, r.enableXOF = c, r.destroyed = this.destroyed, r;
  }
}
He.Keccak = Qi;
const pr = (t, r, i) => (0, Un.wrapConstructor)(() => new Qi(r, t, i));
He.sha3_224 = pr(6, 144, 224 / 8);
He.sha3_256 = pr(6, 136, 256 / 8);
He.sha3_384 = pr(6, 104, 384 / 8);
He.sha3_512 = pr(6, 72, 512 / 8);
He.keccak_224 = pr(1, 144, 224 / 8);
He.keccak_256 = pr(1, 136, 256 / 8);
He.keccak_384 = pr(1, 104, 384 / 8);
He.keccak_512 = pr(1, 72, 512 / 8);
const Ip = (t, r, i) => (0, Un.wrapXOFConstructorWithOpts)((s = {}) => new Qi(r, t, s.dkLen === void 0 ? i : s.dkLen, !0));
He.shake128 = Ip(31, 168, 128 / 8);
He.shake256 = Ip(31, 136, 256 / 8);
const { sha3_512: EN } = He, Lp = 24, Ui = 32, Nf = (t = 4, r = Math.random) => {
  let i = "";
  for (; i.length < t; )
    i = i + Math.floor(r() * 36).toString(36);
  return i;
};
function Rp(t) {
  let r = 8n, i = 0n;
  for (const s of t.values()) {
    const f = BigInt(s);
    i = (i << r) + f;
  }
  return i;
}
const Vp = (t = "") => Rp(EN(t)).toString(36).slice(1), Ad = Array.from(
  { length: 26 },
  (t, r) => String.fromCharCode(r + 97)
), bN = (t) => Ad[Math.floor(t() * Ad.length)], Pp = ({
  globalObj: t = typeof Ir < "u" ? Ir : typeof window < "u" ? window : {},
  random: r = Math.random
} = {}) => {
  const i = Object.keys(t).toString(), s = i.length ? i + Nf(Ui, r) : Nf(Ui, r);
  return Vp(s).substring(0, Ui);
}, Mp = (t) => () => t++, wN = 476782367, $p = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: t = Math.random,
  counter: r = Mp(Math.floor(t() * wN)),
  length: i = Lp,
  fingerprint: s = Pp({ random: t })
} = {}) => function() {
  const l = bN(t), c = Date.now().toString(36), h = r().toString(36), g = Nf(i, t), N = `${c + g + h + s}`;
  return `${l + Vp(N).substring(1, i)}`;
}, ON = $p(), NN = (t, { minLength: r = 2, maxLength: i = Ui } = {}) => {
  const s = t.length, f = /^[0-9a-z]+$/;
  try {
    if (typeof t == "string" && s >= r && s <= i && f.test(t))
      return !0;
  } finally {
  }
  return !1;
};
hr.getConstants = () => ({ defaultLength: Lp, bigLength: Ui });
hr.init = $p;
hr.createId = ON;
hr.bufToBigInt = Rp;
hr.createCounter = Mp;
hr.createFingerprint = Pp;
hr.isCuid = NN;
const { createId: xN, init: LN, getConstants: RN, isCuid: VN } = hr;
var SN = xN;
const AN = {
  ce_prefix: SN(),
  identifier: "me.thebroz.better-visualizer",
  name: "Better Visualizer",
  description: "Replaces the default visualizer with opne that reacts to your music. Requires Cider Audio.",
  version: "0.0.1",
  author: "thebroz",
  repo: "https://github.com/the-broz/better-visualizer",
  entry: {
    "plugin.js": {
      type: "main"
    }
  }
}, CN = oN();
function TN(t) {
  t.use(CN);
}
const Cd = {
  settings: /* @__PURE__ */ OO(cN, {
    shadowRoot: !1,
    configureApp: TN
  })
}, { plugin: PN, setupConfig: DN, customElementName: Td } = uN({
  ...AN,
  CustomElements: Cd,
  setup() {
    for (const [c, h] of Object.entries(Cd)) {
      const g = c;
      customElements.define(Td(g), h);
    }
    this.SettingsElement = Td("settings");
    const t = fN(), r = hs(null), i = hs(!1);
    let s = null;
    t.subscribe("ready", () => {
      if (i.value = !0, t.context) {
        const c = t.context;
        if (!s) {
          s = c.createAnalyser(), s.fftSize = 32;
          const h = s.frequencyBinCount;
          r.value = new Uint8Array(h), t.source && t.source.connect(s);
        }
      }
    });
    const f = (c) => {
      if (s === null) {
        console.warn("Analyser not attached! Attempting to connect!");
        try {
          const v = t.context;
          if (!s) {
            s = v.createAnalyser(), s.fftSize = 32;
            const A = s.frequencyBinCount;
            r.value = new Uint8Array(A), t.source && t.source.connect(s);
          }
        } catch (v) {
          console.error(v);
          return;
        }
      }
      c.querySelector(".playing-indicator")?.remove();
      const h = document.querySelector("#song-visualizer");
      h && h.remove();
      const g = document.createElement("canvas");
      g.width = 800, g.height = 100, g.style.width = "100%", g.style.height = "100%", g.id = "song-visualizer", g.style.display = "block", g.style.padding = "20%", c.appendChild(g);
      const N = g.getContext("2d"), O = () => {
        if (!N || !r.value || !s) return;
        s.getByteFrequencyData(r.value), N.clearRect(0, 0, g.width, g.height);
        const v = r.value.length, A = Math.floor(v / 6), H = g.width / 6 * 0.8, Y = g.height / 2;
        let ie = 0;
        const be = [5, 4, 0, 1, 2, 3], _e = getComputedStyle(document.documentElement).getPropertyValue("--musicKeyColor").trim();
        be.forEach((Ae) => {
          const oe = Ae * A, We = (Ae + 1) * A, G = r.value.slice(oe, We), Ce = G.reduce((qe, _t) => qe + _t, 0) / G.length, $e = Math.log1p(Ce) * 20, Ve = Math.max(10, $e);
          N.fillStyle = _e || `rgb(${Ce + 100}, 50, 150)`, N.beginPath(), N.roundRect(
            ie,
            Y - Ve / 2,
            H,
            Ve,
            10
          ), N.stroke(), N.fill(), N.closePath(), ie += g.width / 6;
        }), requestAnimationFrame(O);
      };
      O();
    };
    new MutationObserver((c) => {
      c.forEach((h) => {
        if (h.type === "childList") {
          const g = document.querySelector(".playing-indicator")?.parentElement, N = document.querySelector(".playing-indicator")?.parentElement?.parentElement;
          N?.classList.contains("trackNumber") ? f(N) : g && f(g);
        }
      });
    }).observe(document.body, {
      childList: !0,
      subtree: !0
    });
  }
}), IN = DN({
  visualizerDampening: 0.45,
  visualizerColoring: "cider-red"
});
function MN() {
  return IN.value;
}
export {
  Cd as CustomElements,
  IN as cfg,
  Td as customElementName,
  PN as default,
  DN as setupConfig,
  MN as useConfig
};
