(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode('.__CComponent__[data-v-664def8e]{display:contents}.idrawer-container[data-v-af40e4c9]{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;justify-content:flex-end;z-index:999;background:#00000040;animation:fadeIn .3s var(--ease_appleSpring)}.idrawer-popout[data-v-af40e4c9]{overflow:hidden;width:300px;background:#000c;padding:1em 0;animation:drawerIn-af40e4c9 .3s var(--ease_appleSpring);margin:2em;border-radius:10px;box-shadow:0 0 10px #00000080,0 0 0 1px #ffffff4d;-webkit-backdrop-filter:blur(16px) saturate(180%);backdrop-filter:blur(16px) saturate(180%)}@keyframes drawerIn-af40e4c9{0%{transform:translate(100%)}to{transform:translate(0)}}.config-button[data-v-f1b93843]{height:100%;display:grid;place-items:center;width:90px;background:transparent;border:0;transition:opacity .3s var(--ease_appleSpring);margin-right:1em}.config-button[data-v-f1b93843]:hover{background:#ffffff1a}.config-button[data-v-f1b93843]:active{background:#fff3}.config-button[data-v-f1b93843]>*{zoom:2}.player-container[data-v-f1b93843]{display:grid;width:100%;grid-template-columns:auto 0px 1fr auto;align-items:center;padding-left:1em;padding-bottom:1em;padding-top:1em;max-width:1920px;margin:0 auto;transition:grid-template-columns .5s linear;position:fixed;bottom:0;left:0;right:0}.player-container .metadata-display[data-v-f1b93843]{padding-left:0;zoom:1.25;opacity:0;transition:opacity .5s var(--ease_appleSpring),padding-left .5s var(--ease_appleSpring)}.player-container.is-idle[data-v-f1b93843]{grid-template-columns:auto 30px 1fr auto}.player-container.is-idle .metadata-display[data-v-f1b93843]{padding-left:1em;opacity:1}.player-container.is-idle .controls[data-v-f1b93843],.player-container.is-idle .config-button[data-v-f1b93843]{opacity:0}.my-layout[data-v-f1b93843]{display:grid;grid-template-rows:1fr;height:100%}.main-content[data-v-f1b93843]{display:grid;grid-template-columns:0fr 1fr;grid-template-rows:1fr;gap:0px 0px;grid-template-areas:"left-side right-side";height:100%;width:100%;max-width:1920px;overflow:hidden;transition:grid-template-columns .5s var(--ease_appleSpring),grid-template-rows .5s var(--ease_appleSpring);justify-self:center}.main-content.hide-right-side[data-v-f1b93843]{grid-template-columns:1fr 0fr;grid-template-rows:1fr;grid-template-areas:"left-side"}.main-content.hide-right-side .right-side[data-v-f1b93843]{opacity:0;transform:scale(.9);padding:0}.controls[data-v-f1b93843]{zoom:1.1;transition:opacity .3s var(--ease_appleSpring),transform .3s var(--ease_appleSpring)}.artwork[data-v-f1b93843]{width:90px;height:90px;border-radius:10px;overflow:hidden;cursor:pointer;transition:transform .3s var(--ease_appleSpring)}.artwork[data-v-f1b93843]:active{transform:scale(.95);transition:transform .1s var(--ease_appleSpring)}.left-side[data-v-f1b93843]{display:grid;grid-template-rows:1fr;width:100%;overflow:hidden;align-items:center;justify-items:center;container-type:inline-size;container-name:left-side}.right-side[data-v-f1b93843]{display:grid;width:100%;overflow:hidden;padding:6em;transition:opacity .3s var(--ease_appleSpring),transform .3s var(--ease_appleSpring),padding .3s var(--ease_appleSpring)}[data-v-f1b93843] .lyricView{left:0;width:100%;position:relative}[data-v-f1b93843] .lcdplayer-top{height:45px}[data-v-f1b93843] .lyric-view{--lyricsMaxSize: 50vw;--finishedOpacity: 0;padding-top:32cqh;-webkit-mask-image:linear-gradient(0deg,transparent 0%,black 20%,black 90%,transparent 100%);mask-image:linear-gradient(0deg,transparent 0%,black 20%,black 90%,transparent 100%)}[data-v-f1b93843] .lyric-view .lyric-char{--defaultColor: rgb(200 200 200 / 80%)}[data-v-f1b93843] .lyric-view:hover{--finishedOpacity: 1}[data-v-f1b93843] .lyric-view .lyric-line{--fontSize: clamp(10px, 4vw, var(--lyricsMaxSize));--fontSizeBG: clamp(6px, 2.5vw, var(--lyricsMaxSize));padding:12px;border-radius:12px;filter:unset;text-align:center;transform-origin:center}[data-v-f1b93843] .lyric-view .lyric-line.finished{transition:opacity .5s var(--appleEase),filter .5s var(--appleEase),transform .5s var(--appleEase),grid-template-rows .35s ease-in-out;--lineBlurAmount: 10px;opacity:var(--finishedOpacity)}@media (max-width: 1200px){[data-v-f1b93843] .lyric-view .lyric-line{--fontSize: 30px;--fontSizeBG: 18.5px}}@media (max-width: 960px){[data-v-f1b93843] .lyric-view .lyric-line{--fontSize: 20px;--fontSizeBG: 10px}}@media (max-width: 300px){[data-v-f1b93843] .lyric-view .lyric-line{--fontSize: 15px;--fontSizeBG: 5px}}[data-v-f1b93843] .lyric-view .lyrics-lower-placeholder{height:45cqh}')),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var _l = Object.defineProperty;
var gl = (e, t, n) => t in e ? _l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => gl(e, typeof t != "symbol" ? t + "" : t, n);
var gi = { cider: "2" };
/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const K = gi.NODE_ENV !== "production" ? Object.freeze({}) : {}, Vt = gi.NODE_ENV !== "production" ? Object.freeze([]) : [], le = () => {
}, ml = () => !1, un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $n = (e) => e.startsWith("onUpdate:"), oe = Object.assign, Bo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, El = Object.prototype.hasOwnProperty, W = (e, t) => El.call(e, t), $ = Array.isArray, St = (e) => Wn(e) === "[object Map]", bl = (e) => Wn(e) === "[object Set]", R = (e) => typeof e == "function", ie = (e) => typeof e == "string", Mt = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", Uo = (e) => (te(e) || R(e)) && R(e.then) && R(e.catch), yl = Object.prototype.toString, Wn = (e) => yl.call(e), Wo = (e) => Wn(e).slice(8, -1), Nl = (e) => Wn(e) === "[object Object]", Ko = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = /* @__PURE__ */ Lt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vl = /* @__PURE__ */ Lt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Kn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ol = /-(\w)/g, Ie = Kn(
  (e) => e.replace(Ol, (t, n) => n ? n.toUpperCase() : "")
), wl = /\B([A-Z])/g, Ne = Kn(
  (e) => e.replace(wl, "-$1").toLowerCase()
), qn = Kn((e) => e.charAt(0).toUpperCase() + e.slice(1)), _t = Kn(
  (e) => e ? `on${qn(e)}` : ""
), Oe = (e, t) => !Object.is(e, t), Ut = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Pn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Dl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Dr = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xr;
const qo = () => xr || (xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Go(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ie(o) ? Cl(o) : Go(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || te(e))
    return e;
}
const xl = /;(?![^(]*\))/g, Vl = /:([^]+)/, Sl = /\/\*[^]*?\*\//g;
function Cl(e) {
  const t = {};
  return e.replace(Sl, "").split(xl).forEach((n) => {
    if (n) {
      const o = n.split(Vl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Gn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = Gn(e[n]);
      o && (t += o + " ");
    }
  else if (te(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Tl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Il = /* @__PURE__ */ Lt(Tl);
function mi(e) {
  return !!e || e === "";
}
var z = { cider: "2" };
function je(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ee;
class Al {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    } else z.NODE_ENV !== "production" && je("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ee = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ei() {
  return Ee;
}
function $l(e, t = !1) {
  Ee ? Ee.cleanups.push(e) : z.NODE_ENV !== "production" && !t && je(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let J;
const fo = /* @__PURE__ */ new WeakSet();
class bi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && Ee.active && Ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fo.has(this) && (fo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = Xt, Xt = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vr(this), Ni(this);
    const t = J, n = He;
    J = this, He = !0;
    try {
      return this.fn();
    } finally {
      z.NODE_ENV !== "production" && J !== this && je(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), vi(this), J = t, He = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zo(t);
      this.deps = this.depsTail = void 0, Vr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Oo(this) && this.run();
  }
  get dirty() {
    return Oo(this);
  }
}
let yi = 0, Xt;
function Jo() {
  yi++;
}
function Yo() {
  if (--yi > 0)
    return;
  let e;
  for (; Xt; ) {
    let t = Xt;
    for (Xt = void 0; t; ) {
      const n = t.nextEffect;
      if (t.nextEffect = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ni(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vi(e) {
  let t, n = e.depsTail;
  for (let o = n; o; o = o.prevDep)
    o.version === -1 ? (o === n && (n = o.prevDep), zo(o), Pl(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function Oo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && Oi(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function Oi(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn))
    return;
  e.globalVersion = nn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !Oo(e)) {
    e.flags &= -3;
    return;
  }
  const n = J, o = He;
  J = e, He = !0;
  try {
    Ni(e);
    const r = e.fn(e._value);
    (t.version === 0 || Oe(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    J = n, He = o, vi(e), e.flags &= -3;
  }
}
function zo(e) {
  const { dep: t, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), t.subs === e && (t.subs = n), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep)
      zo(r);
  }
}
function Pl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const wi = [];
function tt() {
  wi.push(He), He = !1;
}
function nt() {
  const e = wi.pop();
  He = e === void 0 ? !0 : e;
}
function Vr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = J;
    J = void 0;
    try {
      t();
    } finally {
      J = n;
    }
  }
}
let nn = 0;
class Jn {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, z.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!J || !He || J === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== J)
      n = this.activeLink = {
        dep: this,
        sub: J,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, J.deps ? (n.prevDep = J.depsTail, J.depsTail.nextDep = n, J.depsTail = n) : J.deps = J.depsTail = n, J.flags & 4 && Di(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = J.depsTail, n.nextDep = void 0, J.depsTail.nextDep = n, J.depsTail = n, J.deps === n && (J.deps = o);
    }
    return z.NODE_ENV !== "production" && J.onTrack && J.onTrack(
      oe(
        {
          effect: J
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, nn++, this.notify(t);
  }
  notify(t) {
    Jo();
    try {
      if (z.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          z.NODE_ENV !== "production" && n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            oe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify();
    } finally {
      Yo();
    }
  }
}
function Di(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let o = t.deps; o; o = o.nextDep)
      Di(o);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)), z.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
}
const wo = /* @__PURE__ */ new WeakMap(), mt = Symbol(
  z.NODE_ENV !== "production" ? "Object iterate" : ""
), Do = Symbol(
  z.NODE_ENV !== "production" ? "Map keys iterate" : ""
), on = Symbol(
  z.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ce(e, t, n) {
  if (He && J) {
    let o = wo.get(e);
    o || wo.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = new Jn()), z.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function qe(e, t, n, o, r, i) {
  const s = wo.get(e);
  if (!s) {
    nn++;
    return;
  }
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else {
    const u = $(e), h = u && Ko(n);
    if (u && n === "length") {
      const d = Number(o);
      s.forEach((f, _) => {
        (_ === "length" || _ === on || !Mt(_) && _ >= d) && l.push(f);
      });
    } else {
      const d = (f) => f && l.push(f);
      switch (n !== void 0 && d(s.get(n)), h && d(s.get(on)), t) {
        case "add":
          u ? h && d(s.get("length")) : (d(s.get(mt)), St(e) && d(s.get(Do)));
          break;
        case "delete":
          u || (d(s.get(mt)), St(e) && d(s.get(Do)));
          break;
        case "set":
          St(e) && d(s.get(mt));
          break;
      }
    }
  }
  Jo();
  for (const u of l)
    z.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: i
    }) : u.trigger();
  Yo();
}
function Ot(e) {
  const t = j(e);
  return t === e ? t : (ce(t, "iterate", on), we(e) ? t : t.map(be));
}
function Xo(e) {
  return ce(e = j(e), "iterate", on), e;
}
const Ll = {
  __proto__: null,
  [Symbol.iterator]() {
    return ao(this, Symbol.iterator, be);
  },
  concat(...e) {
    return Ot(this).concat(
      ...e.map((t) => $(t) ? Ot(t) : t)
    );
  },
  entries() {
    return ao(this, "entries", (e) => (e[1] = be(e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(this, "filter", e, t, (n) => n.map(be), arguments);
  },
  find(e, t) {
    return Ye(this, "find", e, t, be, arguments);
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(this, "findLast", e, t, be, arguments);
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return po(this, "includes", e);
  },
  indexOf(...e) {
    return po(this, "indexOf", e);
  },
  join(e) {
    return Ot(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return po(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wt(this, "pop");
  },
  push(...e) {
    return Wt(this, "push", e);
  },
  reduce(e, ...t) {
    return Sr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Sr(this, "reduceRight", e, t);
  },
  shift() {
    return Wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wt(this, "splice", e);
  },
  toReversed() {
    return Ot(this).toReversed();
  },
  toSorted(e) {
    return Ot(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ot(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wt(this, "unshift", e);
  },
  values() {
    return ao(this, "values", be);
  }
};
function ao(e, t, n) {
  const o = Xo(e), r = o[t]();
  return o !== e && !we(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Ml = Array.prototype;
function Ye(e, t, n, o, r, i) {
  const s = Xo(e), l = s !== e && !we(e), u = s[t];
  if (u !== Ml[t]) {
    const f = u.apply(e, i);
    return l ? be(f) : f;
  }
  let h = n;
  s !== e && (l ? h = function(f, _) {
    return n.call(this, be(f), _, e);
  } : n.length > 2 && (h = function(f, _) {
    return n.call(this, f, _, e);
  }));
  const d = u.call(s, h, o);
  return l && r ? r(d) : d;
}
function Sr(e, t, n, o) {
  const r = Xo(e);
  let i = n;
  return r !== e && (we(e) ? n.length > 3 && (i = function(s, l, u) {
    return n.call(this, s, l, u, e);
  }) : i = function(s, l, u) {
    return n.call(this, s, be(l), u, e);
  }), r[t](i, ...o);
}
function po(e, t, n) {
  const o = j(e);
  ce(o, "iterate", on);
  const r = o[t](...n);
  return (r === -1 || r === !1) && Ln(n[0]) ? (n[0] = j(n[0]), o[t](...n)) : r;
}
function Wt(e, t, n = []) {
  tt(), Jo();
  const o = j(e)[t].apply(e, n);
  return Yo(), nt(), o;
}
const Rl = /* @__PURE__ */ Lt("__proto__,__v_isRef,__isVue"), xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Mt)
);
function Hl(e) {
  Mt(e) || (e = String(e));
  const t = j(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
}
class Vi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? Pi : $i : i ? Ai : Ii).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = $(t);
    if (!r) {
      let u;
      if (s && (u = Ll[n]))
        return u;
      if (n === "hasOwnProperty")
        return Hl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      re(t) ? t : o
    );
    return (Mt(n) ? xi.has(n) : Rl(n)) || (r || ce(t, "get", n), i) ? l : re(l) ? s && Ko(n) ? l : l.value : te(l) ? r ? Li(l) : Zo(l) : l;
  }
}
class Si extends Vi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const u = et(i);
      if (!we(o) && !et(o) && (i = j(i), o = j(o)), !$(t) && re(i) && !re(o))
        return u ? !1 : (i.value = o, !0);
    }
    const s = $(t) && Ko(n) ? Number(n) < t.length : W(t, n), l = Reflect.set(
      t,
      n,
      o,
      re(t) ? t : r
    );
    return t === j(r) && (s ? Oe(o, i) && qe(t, "set", n, o, i) : qe(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = W(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && qe(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Mt(n) || !xi.has(n)) && ce(t, "has", n), o;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      $(t) ? "length" : mt
    ), Reflect.ownKeys(t);
  }
}
class Ci extends Vi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return z.NODE_ENV !== "production" && je(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return z.NODE_ENV !== "production" && je(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const jl = /* @__PURE__ */ new Si(), Fl = /* @__PURE__ */ new Ci(), kl = /* @__PURE__ */ new Si(!0), Bl = /* @__PURE__ */ new Ci(!0), Qo = (e) => e, Yn = (e) => Reflect.getPrototypeOf(e);
function En(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = j(e), i = j(t);
  n || (Oe(t, i) && ce(r, "get", t), ce(r, "get", i));
  const { has: s } = Yn(r), l = o ? Qo : n ? er : be;
  if (s.call(r, t))
    return l(e.get(t));
  if (s.call(r, i))
    return l(e.get(i));
  e !== r && e.get(t);
}
function bn(e, t = !1) {
  const n = this.__v_raw, o = j(n), r = j(e);
  return t || (Oe(e, r) && ce(o, "has", e), ce(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function yn(e, t = !1) {
  return e = e.__v_raw, !t && ce(j(e), "iterate", mt), Reflect.get(e, "size", e);
}
function Cr(e, t = !1) {
  !t && !we(e) && !et(e) && (e = j(e));
  const n = j(this);
  return Yn(n).has.call(n, e) || (n.add(e), qe(n, "add", e, e)), this;
}
function Tr(e, t, n = !1) {
  !n && !we(t) && !et(t) && (t = j(t));
  const o = j(this), { has: r, get: i } = Yn(o);
  let s = r.call(o, e);
  s ? z.NODE_ENV !== "production" && Ti(o, r, e) : (e = j(e), s = r.call(o, e));
  const l = i.call(o, e);
  return o.set(e, t), s ? Oe(t, l) && qe(o, "set", e, t, l) : qe(o, "add", e, t), this;
}
function Ir(e) {
  const t = j(this), { has: n, get: o } = Yn(t);
  let r = n.call(t, e);
  r ? z.NODE_ENV !== "production" && Ti(t, n, e) : (e = j(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, s = t.delete(e);
  return r && qe(t, "delete", e, void 0, i), s;
}
function Ar() {
  const e = j(this), t = e.size !== 0, n = z.NODE_ENV !== "production" ? St(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && qe(e, "clear", void 0, void 0, n), o;
}
function Nn(e, t) {
  return function(o, r) {
    const i = this, s = i.__v_raw, l = j(s), u = t ? Qo : e ? er : be;
    return !e && ce(l, "iterate", mt), s.forEach((h, d) => o.call(r, u(h), u(d), i));
  };
}
function vn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = j(r), s = St(i), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, h = r[e](...o), d = n ? Qo : t ? er : be;
    return !t && ce(
      i,
      "iterate",
      u ? Do : mt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: _ } = h.next();
        return _ ? { value: f, done: _ } : {
          value: l ? [d(f[0]), d(f[1])] : d(f),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function it(e) {
  return function(...t) {
    if (z.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      je(
        `${qn(e)} operation ${n}failed: target is readonly.`,
        j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ul() {
  const e = {
    get(i) {
      return En(this, i);
    },
    get size() {
      return yn(this);
    },
    has: bn,
    add: Cr,
    set: Tr,
    delete: Ir,
    clear: Ar,
    forEach: Nn(!1, !1)
  }, t = {
    get(i) {
      return En(this, i, !1, !0);
    },
    get size() {
      return yn(this);
    },
    has: bn,
    add(i) {
      return Cr.call(this, i, !0);
    },
    set(i, s) {
      return Tr.call(this, i, s, !0);
    },
    delete: Ir,
    clear: Ar,
    forEach: Nn(!1, !0)
  }, n = {
    get(i) {
      return En(this, i, !0);
    },
    get size() {
      return yn(this, !0);
    },
    has(i) {
      return bn.call(this, i, !0);
    },
    add: it("add"),
    set: it("set"),
    delete: it("delete"),
    clear: it("clear"),
    forEach: Nn(!0, !1)
  }, o = {
    get(i) {
      return En(this, i, !0, !0);
    },
    get size() {
      return yn(this, !0);
    },
    has(i) {
      return bn.call(this, i, !0);
    },
    add: it("add"),
    set: it("set"),
    delete: it("delete"),
    clear: it("clear"),
    forEach: Nn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = vn(i, !1, !1), n[i] = vn(i, !0, !1), t[i] = vn(i, !1, !0), o[i] = vn(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Wl,
  Kl,
  ql,
  Gl
] = /* @__PURE__ */ Ul();
function zn(e, t) {
  const n = t ? e ? Gl : ql : e ? Kl : Wl;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    W(n, r) && r in o ? n : o,
    r,
    i
  );
}
const Jl = {
  get: /* @__PURE__ */ zn(!1, !1)
}, Yl = {
  get: /* @__PURE__ */ zn(!1, !0)
}, zl = {
  get: /* @__PURE__ */ zn(!0, !1)
}, Xl = {
  get: /* @__PURE__ */ zn(!0, !0)
};
function Ti(e, t, n) {
  const o = j(n);
  if (o !== n && t.call(e, o)) {
    const r = Wo(e);
    je(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ii = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap();
function Ql(e) {
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
function Zl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ql(Wo(e));
}
function Zo(e) {
  return et(e) ? e : Xn(
    e,
    !1,
    jl,
    Jl,
    Ii
  );
}
function ec(e) {
  return Xn(
    e,
    !1,
    kl,
    Yl,
    Ai
  );
}
function Li(e) {
  return Xn(
    e,
    !0,
    Fl,
    zl,
    $i
  );
}
function Ke(e) {
  return Xn(
    e,
    !0,
    Bl,
    Xl,
    Pi
  );
}
function Xn(e, t, n, o, r) {
  if (!te(e))
    return z.NODE_ENV !== "production" && je(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = Zl(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Ct(e) {
  return et(e) ? Ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function we(e) {
  return !!(e && e.__v_isShallow);
}
function Ln(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function tc(e) {
  return Object.isExtensible(e) && Pn(e, "__v_skip", !0), e;
}
const be = (e) => te(e) ? Zo(e) : e, er = (e) => te(e) ? Li(e) : e;
function re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $t(e) {
  return nc(e, !1);
}
function nc(e, t) {
  return re(e) ? e : new oc(e, t);
}
class oc {
  constructor(t, n) {
    this.dep = new Jn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : be(t), this.__v_isShallow = n;
  }
  get value() {
    return z.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || we(t) || et(t);
    t = o ? t : j(t), Oe(t, n) && (this._rawValue = t, this._value = o ? t : be(t), z.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Qt(e) {
  return re(e) ? e.value : e;
}
const rc = {
  get: (e, t, n) => t === "__v_raw" ? e : Qt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return re(r) && !re(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Mi(e) {
  return Ct(e) ? e : new Proxy(e, rc);
}
class ic {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Jn(), { get: o, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = o, this._set = r;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function sc(e) {
  return new ic(e);
}
class lc {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Jn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    J !== this && (this.flags |= 16, this.dep.notify());
  }
  get value() {
    const t = z.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Oi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : z.NODE_ENV !== "production" && je("Write operation failed: computed value is readonly");
  }
}
function cc(e, t, n = !1) {
  let o, r;
  R(e) ? o = e : (o = e.get, r = e.set);
  const i = new lc(o, r, n);
  return z.NODE_ENV !== "production" && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const On = {}, Mn = /* @__PURE__ */ new WeakMap();
let gt;
function uc(e, t = !1, n = gt) {
  if (n) {
    let o = Mn.get(n);
    o || Mn.set(n, o = []), o.push(e);
  } else z.NODE_ENV !== "production" && !t && je(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function fc(e, t, n = K) {
  const { immediate: o, deep: r, once: i, scheduler: s, augmentJob: l, call: u } = n, h = (I) => {
    (n.onWarn || je)(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (I) => r ? I : we(I) || r === !1 || r === 0 ? ct(I, 1) : ct(I);
  let f, _, b, S, C = !1, X = !1;
  if (re(e) ? (_ = () => e.value, C = we(e)) : Ct(e) ? (_ = () => d(e), C = !0) : $(e) ? (X = !0, C = e.some((I) => Ct(I) || we(I)), _ = () => e.map((I) => {
    if (re(I))
      return I.value;
    if (Ct(I))
      return d(I);
    if (R(I))
      return u ? u(I, 2) : I();
    z.NODE_ENV !== "production" && h(I);
  })) : R(e) ? t ? _ = u ? () => u(e, 2) : e : _ = () => {
    if (b) {
      tt();
      try {
        b();
      } finally {
        nt();
      }
    }
    const I = gt;
    gt = f;
    try {
      return u ? u(e, 3, [S]) : e(S);
    } finally {
      gt = I;
    }
  } : (_ = le, z.NODE_ENV !== "production" && h(e)), t && r) {
    const I = _, se = r === !0 ? 1 / 0 : r;
    _ = () => ct(I(), se);
  }
  const k = Ei(), ee = () => {
    f.stop(), k && Bo(k.effects, f);
  };
  if (i)
    if (t) {
      const I = t;
      t = (...se) => {
        I(...se), ee();
      };
    } else {
      const I = _;
      _ = () => {
        I(), ee();
      };
    }
  let B = X ? new Array(e.length).fill(On) : On;
  const _e = (I) => {
    if (!(!(f.flags & 1) || !f.dirty && !I))
      if (t) {
        const se = f.run();
        if (r || C || (X ? se.some((ve, ue) => Oe(ve, B[ue])) : Oe(se, B))) {
          b && b();
          const ve = gt;
          gt = f;
          try {
            const ue = [
              se,
              // pass undefined as the old value when it's changed for the first time
              B === On ? void 0 : X && B[0] === On ? [] : B,
              S
            ];
            u ? u(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            ), B = se;
          } finally {
            gt = ve;
          }
        }
      } else
        f.run();
  };
  return l && l(_e), f = new bi(_), f.scheduler = s ? () => s(_e, !1) : _e, S = (I) => uc(I, !1, f), b = f.onStop = () => {
    const I = Mn.get(f);
    if (I) {
      if (u)
        u(I, 4);
      else
        for (const se of I) se();
      Mn.delete(f);
    }
  }, z.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? o ? _e(!0) : B = f.run() : s ? s(_e.bind(null, !0), !0) : f.run(), ee.pause = f.pause.bind(f), ee.resume = f.resume.bind(f), ee.stop = ee, ee;
}
function ct(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, re(e))
    ct(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      ct(e[o], t, n);
  else if (bl(e) || St(e))
    e.forEach((o) => {
      ct(o, t, n);
    });
  else if (Nl(e)) {
    for (const o in e)
      ct(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && ct(e[o], t, n);
  }
  return e;
}
var p = { cider: "2" };
const Et = [];
function Dn(e) {
  Et.push(e);
}
function xn() {
  Et.pop();
}
let ho = !1;
function D(e, ...t) {
  if (ho) return;
  ho = !0, tt();
  const n = Et.length ? Et[Et.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = ac();
  if (o)
    Rt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, l;
          return (l = (s = i.toString) == null ? void 0 : s.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${io(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...dc(r)), console.warn(...i);
  }
  nt(), ho = !1;
}
function ac() {
  let e = Et[Et.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function dc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...pc(n));
  }), t;
}
function pc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${io(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...hc(e.props), i] : [r + i];
}
function hc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ri(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ri(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = Ri(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
const tr = {
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
function Rt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    fn(r, t, n);
  }
}
function Ge(e, t, n, o) {
  if (R(e)) {
    const r = Rt(e, t, n, o);
    return r && Uo(r) && r.catch((i) => {
      fn(i, t, n);
    }), r;
  }
  if ($(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ge(e[i], t, n, o));
    return r;
  } else p.NODE_ENV !== "production" && D(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function fn(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || K;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = p.NODE_ENV !== "production" ? tr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, u, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      tt(), Rt(i, null, 10, [
        e,
        u,
        h
      ]), nt();
      return;
    }
  }
  _c(e, n, r, o, s);
}
function _c(e, t, n, o = !0, r = !1) {
  if (p.NODE_ENV !== "production") {
    const i = tr[t];
    if (n && Dn(n), D(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && xn(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
let rn = !1, xo = !1;
const ye = [];
let Ue = 0;
const Tt = [];
let st = null, Dt = 0;
const Hi = /* @__PURE__ */ Promise.resolve();
let nr = null;
const gc = 100;
function ji(e) {
  const t = nr || Hi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mc(e) {
  let t = rn ? Ue + 1 : 0, n = ye.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = ye[o], i = sn(r);
    i < e || i === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Qn(e) {
  if (!(e.flags & 1)) {
    const t = sn(e), n = ye[ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= sn(n) ? ye.push(e) : ye.splice(mc(t), 0, e), e.flags |= 1, Fi();
  }
}
function Fi() {
  !rn && !xo && (xo = !0, nr = Hi.then(Ui));
}
function ki(e) {
  $(e) ? Tt.push(...e) : st && e.id === -1 ? st.splice(Dt + 1, 0, e) : e.flags & 1 || (Tt.push(e), e.flags |= 1), Fi();
}
function $r(e, t, n = rn ? Ue + 1 : 0) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ye.length; n++) {
    const o = ye[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && or(t, o))
        continue;
      ye.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags &= -2;
    }
  }
}
function Bi(e) {
  if (Tt.length) {
    const t = [...new Set(Tt)].sort(
      (n, o) => sn(n) - sn(o)
    );
    if (Tt.length = 0, st) {
      st.push(...t);
      return;
    }
    for (st = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Dt = 0; Dt < st.length; Dt++) {
      const n = st[Dt];
      p.NODE_ENV !== "production" && or(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    st = null, Dt = 0;
  }
}
const sn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ui(e) {
  xo = !1, rn = !0, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => or(e, n) : le;
  try {
    for (Ue = 0; Ue < ye.length; Ue++) {
      const n = ye[Ue];
      if (n && !(n.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Rt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags &= -2;
      }
    }
  } finally {
    for (; Ue < ye.length; Ue++) {
      const n = ye[Ue];
      n && (n.flags &= -2);
    }
    Ue = 0, ye.length = 0, Bi(e), rn = !1, nr = null, (ye.length || Tt.length) && Ui(e);
  }
}
function or(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > gc) {
      const o = t.i, r = o && Os(o.type);
      return fn(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let bt = !1;
const Vn = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (qo().__VUE_HMR_RUNTIME__ = {
  createRecord: _o(Wi),
  rerender: _o(yc),
  reload: _o(Nc)
});
const Nt = /* @__PURE__ */ new Map();
function Ec(e) {
  const t = e.type.__hmrId;
  let n = Nt.get(t);
  n || (Wi(t, e.type), n = Nt.get(t)), n.instances.add(e);
}
function bc(e) {
  Nt.get(e.type.__hmrId).instances.delete(e);
}
function Wi(e, t) {
  return Nt.has(e) ? !1 : (Nt.set(e, {
    initialDef: Rn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rn(e) {
  return ws(e) ? e.__vccOpts : e;
}
function yc(e, t) {
  const n = Nt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Rn(o.type).render = t), o.renderCache = [], bt = !0, o.update(), bt = !1;
  }));
}
function Nc(e, t) {
  const n = Nt.get(e);
  if (!n) return;
  t = Rn(t), Pr(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const i = o[r], s = Rn(i.type);
    let l = Vn.get(s);
    l || (s !== n.initialDef && Pr(s, t), Vn.set(s, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Qn(() => {
      i.parent.update(), l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  ki(() => {
    Vn.clear();
  });
}
function Pr(e, t) {
  oe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function _o(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let We, Jt = [], Vo = !1;
function an(e, ...t) {
  We ? We.emit(e, ...t) : Vo || Jt.push({ event: e, args: t });
}
function Ki(e, t) {
  var n, o;
  We = e, We ? (We.enabled = !0, Jt.forEach(({ event: r, args: i }) => We.emit(r, ...i)), Jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ki(i, t);
  }), setTimeout(() => {
    We || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Vo = !0, Jt = []);
  }, 3e3)) : (Vo = !0, Jt = []);
}
function vc(e, t) {
  an("app:init", e, t, {
    Fragment: Me,
    Text: dn,
    Comment: Ae,
    Static: Tn
  });
}
function Oc(e) {
  an("app:unmount", e);
}
const wc = /* @__PURE__ */ rr(
  "component:added"
  /* COMPONENT_ADDED */
), qi = /* @__PURE__ */ rr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Dc = /* @__PURE__ */ rr(
  "component:removed"
  /* COMPONENT_REMOVED */
), xc = (e) => {
  We && typeof We.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !We.cleanupBuffer(e) && Dc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return (t) => {
    an(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Vc = /* @__PURE__ */ Gi(
  "perf:start"
  /* PERFORMANCE_START */
), Sc = /* @__PURE__ */ Gi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Gi(e) {
  return (t, n, o) => {
    an(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Cc(e, t, n) {
  an(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ce = null, Ji = null;
function Hn(e) {
  const t = Ce;
  return Ce = e, Ji = e && e.type.__scopeId || null, t;
}
function Tc(e, t = Ce, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Kr(-1);
    const i = Hn(t);
    let s;
    try {
      s = e(...r);
    } finally {
      Hn(i), o._d && Kr(1);
    }
    return p.NODE_ENV !== "production" && qi(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Yi(e) {
  vl(e) && D("Do not use built-in directive ids as custom directive id: " + e);
}
function pt(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let u = l.dir[o];
    u && (tt(), Ge(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), nt());
  }
}
const Ic = Symbol("_vte"), Ac = (e) => e.__isTeleport;
function ir(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ir(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zn(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    oe({ name: e.name }, t, { setup: e })
  ) : e;
}
function zi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const $c = /* @__PURE__ */ new WeakSet();
function So(e, t, n, o, r = !1) {
  if ($(e)) {
    e.forEach(
      (S, C) => So(
        S,
        t && ($(t) ? t[C] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Zt(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? _r(o.component) : o.el, s = r ? null : i, { i: l, r: u } = e;
  if (p.NODE_ENV !== "production" && !l) {
    D(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, d = l.refs === K ? l.refs = {} : l.refs, f = l.setupState, _ = j(f), b = f === K ? () => !1 : (S) => p.NODE_ENV !== "production" && $c.has(_[S]) ? !1 : W(_, S);
  if (h != null && h !== u && (ie(h) ? (d[h] = null, b(h) && (f[h] = null)) : re(h) && (h.value = null)), R(u))
    Rt(u, l, 12, [s, d]);
  else {
    const S = ie(u), C = re(u);
    if (S || C) {
      const X = () => {
        if (e.f) {
          const k = S ? b(u) ? f[u] : d[u] : u.value;
          r ? $(k) && Bo(k, i) : $(k) ? k.includes(i) || k.push(i) : S ? (d[u] = [i], b(u) && (f[u] = d[u])) : (u.value = [i], e.k && (d[e.k] = u.value));
        } else S ? (d[u] = s, b(u) && (f[u] = s)) : C ? (u.value = s, e.k && (d[e.k] = s)) : p.NODE_ENV !== "production" && D("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (X.id = -1, Se(X, n)) : X();
    } else p.NODE_ENV !== "production" && D("Invalid template ref type:", u, `(${typeof u})`);
  }
}
const Zt = (e) => !!e.type.__asyncLoader, sr = (e) => e.type.__isKeepAlive;
function Pc(e, t) {
  Xi(e, "a", t);
}
function Lc(e, t) {
  Xi(e, "da", t);
}
function Xi(e, t, n = de) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (eo(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      sr(r.parent.vnode) && Mc(o, t, n, r), r = r.parent;
  }
}
function Mc(e, t, n, o) {
  const r = eo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  to(() => {
    Bo(o[t], r);
  }, n);
}
function eo(e, t, n = de, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      tt();
      const l = hn(n), u = Ge(t, n, e, s);
      return l(), nt(), u;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (p.NODE_ENV !== "production") {
    const r = _t(tr[e].replace(/ hook$/, ""));
    D(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ot = (e) => (t, n = de) => {
  (!ro || e === "sp") && eo(e, (...o) => t(...o), n);
}, Rc = ot("bm"), lr = ot("m"), Hc = ot(
  "bu"
), jc = ot("u"), Fc = ot(
  "bum"
), to = ot("um"), kc = ot(
  "sp"
), Bc = ot("rtg"), Uc = ot("rtc");
function Wc(e, t = de) {
  eo("ec", e, t);
}
const Kc = Symbol.for("v-ndc"), Co = (e) => e ? Ns(e) ? _r(e) : Co(e.parent) : null, yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Ke(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Ke(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Ke(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Ke(e.refs) : e.refs,
    $parent: (e) => Co(e.parent),
    $root: (e) => Co(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ur(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ji.bind(e.proxy)),
    $watch: (e) => Du.bind(e)
  })
), cr = (e) => e === "_" || e === "$", go = (e, t) => e !== K && !e.__isScriptSetup && W(e, t), Qi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: l, appContext: u } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const b = s[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (go(o, t))
          return s[t] = 1, o[t];
        if (r !== K && W(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && W(h, t)
        )
          return s[t] = 3, i[t];
        if (n !== K && W(n, t))
          return s[t] = 4, n[t];
        To && (s[t] = 0);
      }
    }
    const d = yt[t];
    let f, _;
    if (d)
      return t === "$attrs" ? (ce(e.attrs, "get", ""), p.NODE_ENV !== "production" && kn()) : p.NODE_ENV !== "production" && t === "$slots" && ce(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== K && W(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      _ = u.config.globalProperties, W(_, t)
    )
      return _[t];
    p.NODE_ENV !== "production" && Ce && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== K && cr(t[0]) && W(r, t) ? D(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ce && D(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return go(r, t) ? (r[t] = n, !0) : p.NODE_ENV !== "production" && r.__isScriptSetup && W(r, t) ? (D(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && W(o, t) ? (o[t] = n, !0) : W(e.props, t) ? (p.NODE_ENV !== "production" && D(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && D(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let l;
    return !!n[s] || e !== K && W(e, s) || go(t, s) || (l = i[0]) && W(l, s) || W(o, s) || W(yt, s) || W(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : W(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (Qi.ownKeys = (e) => (D(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function qc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(yt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => yt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: le
    });
  }), t;
}
function Gc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: le
    });
  });
}
function Jc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (cr(o[0])) {
        D(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: le
      });
    }
  });
}
function Lr(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Yc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? D(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let To = !0;
function zc(e) {
  const t = ur(e), n = e.proxy, o = e.ctx;
  To = !1, t.beforeCreate && Mr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: u,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: _,
    beforeUpdate: b,
    updated: S,
    activated: C,
    deactivated: X,
    beforeDestroy: k,
    beforeUnmount: ee,
    destroyed: B,
    unmounted: _e,
    render: I,
    renderTracked: se,
    renderTriggered: ve,
    errorCaptured: ue,
    serverPrefetch: pe,
    // public API
    expose: Pe,
    inheritAttrs: Fe,
    // assets
    components: m,
    directives: P,
    filters: ne
  } = t, q = p.NODE_ENV !== "production" ? Yc() : null;
  if (p.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const F in L)
        q("Props", F);
  }
  if (h && Xc(h, o, q), s)
    for (const L in s) {
      const F = s[L];
      R(F) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = F.bind(n), p.NODE_ENV !== "production" && q("Methods", L)) : p.NODE_ENV !== "production" && D(
        `Method "${L}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    p.NODE_ENV !== "production" && !R(r) && D(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = r.call(n, n);
    if (p.NODE_ENV !== "production" && Uo(L) && D(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !te(L))
      p.NODE_ENV !== "production" && D("data() should return an object.");
    else if (e.data = Zo(L), p.NODE_ENV !== "production")
      for (const F in L)
        q("Data", F), cr(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => L[F],
          set: le
        });
  }
  if (To = !0, i)
    for (const L in i) {
      const F = i[L], De = R(F) ? F.bind(n, n) : R(F.get) ? F.get.bind(n, n) : le;
      p.NODE_ENV !== "production" && De === le && D(`Computed property "${L}" has no getter.`);
      const Ht = !R(F) && R(F.set) ? F.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        D(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : le, jt = Ds({
        get: De,
        set: Ht
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => jt.value,
        set: (vt) => jt.value = vt
      }), p.NODE_ENV !== "production" && q("Computed", L);
    }
  if (l)
    for (const L in l)
      Zi(l[L], o, n, L);
  if (u) {
    const L = R(u) ? u.call(n) : u;
    Reflect.ownKeys(L).forEach((F) => {
      ou(F, L[F]);
    });
  }
  d && Mr(d, e, "c");
  function G(L, F) {
    $(F) ? F.forEach((De) => L(De.bind(n))) : F && L(F.bind(n));
  }
  if (G(Rc, f), G(lr, _), G(Hc, b), G(jc, S), G(Pc, C), G(Lc, X), G(Wc, ue), G(Uc, se), G(Bc, ve), G(Fc, ee), G(to, _e), G(kc, pe), $(Pe))
    if (Pe.length) {
      const L = e.exposed || (e.exposed = {});
      Pe.forEach((F) => {
        Object.defineProperty(L, F, {
          get: () => n[F],
          set: (De) => n[F] = De
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === le && (e.render = I), Fe != null && (e.inheritAttrs = Fe), m && (e.components = m), P && (e.directives = P), pe && zi(e);
}
function Xc(e, t, n = le) {
  $(e) && (e = Io(e));
  for (const o in e) {
    const r = e[o];
    let i;
    te(r) ? "default" in r ? i = Sn(
      r.from || o,
      r.default,
      !0
    ) : i = Sn(r.from || o) : i = Sn(r), re(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Mr(e, t, n) {
  Ge(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Zi(e, t, n, o) {
  let r = o.includes(".") ? as(n, o) : () => n[o];
  if (ie(e)) {
    const i = t[e];
    R(i) ? At(r, i) : p.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e}"`, i);
  } else if (R(e))
    At(r, e.bind(n));
  else if (te(e))
    if ($(e))
      e.forEach((i) => Zi(i, t, n, o));
    else {
      const i = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(i) ? At(r, i, e) : p.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else p.NODE_ENV !== "production" && D(`Invalid watch option: "${o}"`, e);
}
function ur(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (h) => jn(u, h, s, !0)
  ), jn(u, t, s)), te(t) && i.set(t, u), u;
}
function jn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && jn(e, i, n, !0), r && r.forEach(
    (s) => jn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      p.NODE_ENV !== "production" && D(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Qc[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Qc = {
  data: Rr,
  props: Hr,
  emits: Hr,
  // objects
  methods: Yt,
  computed: Yt,
  // lifecycle
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  // assets
  components: Yt,
  directives: Yt,
  // watch
  watch: eu,
  // provide / inject
  provide: Rr,
  inject: Zc
};
function Rr(e, t) {
  return t ? e ? function() {
    return oe(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zc(e, t) {
  return Yt(Io(e), Io(t));
}
function Io(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Yt(e, t) {
  return e ? oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hr(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    Lr(e),
    Lr(t ?? {})
  ) : t;
}
function eu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = oe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = me(e[o], t[o]);
  return n;
}
function es() {
  return {
    app: null,
    config: {
      isNativeTag: ml,
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
let tu = 0;
function nu(e, t) {
  return function(o, r = null) {
    R(o) || (o = oe({}, o)), r != null && !te(r) && (p.NODE_ENV !== "production" && D("root props passed to app.mount() must be an object."), r = null);
    const i = es(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const h = i.app = {
      _uid: tu++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Yr,
      get config() {
        return i.config;
      },
      set config(d) {
        p.NODE_ENV !== "production" && D(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return s.has(d) ? p.NODE_ENV !== "production" && D("Plugin has already been applied to target app.") : d && R(d.install) ? (s.add(d), d.install(h, ...f)) : R(d) ? (s.add(d), d(h, ...f)) : p.NODE_ENV !== "production" && D(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(d) {
        return i.mixins.includes(d) ? p.NODE_ENV !== "production" && D(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), h;
      },
      component(d, f) {
        return p.NODE_ENV !== "production" && Mo(d, i.config), f ? (p.NODE_ENV !== "production" && i.components[d] && D(`Component "${d}" has already been registered in target app.`), i.components[d] = f, h) : i.components[d];
      },
      directive(d, f) {
        return p.NODE_ENV !== "production" && Yi(d), f ? (p.NODE_ENV !== "production" && i.directives[d] && D(`Directive "${d}" has already been registered in target app.`), i.directives[d] = f, h) : i.directives[d];
      },
      mount(d, f, _) {
        if (u)
          p.NODE_ENV !== "production" && D(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && d.__vue_app__ && D(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = h._ceVNode || ae(o, r);
          return b.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), p.NODE_ENV !== "production" && (i.reload = () => {
            e(
              ft(b),
              d,
              _
            );
          }), f && t ? t(b, d) : e(b, d, _), u = !0, h._container = d, d.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = b.component, vc(h, Yr)), _r(b.component);
        }
      },
      onUnmount(d) {
        p.NODE_ENV !== "production" && typeof d != "function" && D(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        u ? (Ge(
          l,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, Oc(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && D("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return p.NODE_ENV !== "production" && d in i.provides && D(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = f, h;
      },
      runWithContext(d) {
        const f = It;
        It = h;
        try {
          return d();
        } finally {
          It = f;
        }
      }
    };
    return h;
  };
}
let It = null;
function ou(e, t) {
  if (!de)
    p.NODE_ENV !== "production" && D("provide() can only be used inside setup().");
  else {
    let n = de.provides;
    const o = de.parent && de.parent.provides;
    o === n && (n = de.provides = Object.create(o)), n[e] = t;
  }
}
function Sn(e, t, n = !1) {
  const o = de || Ce;
  if (o || It) {
    const r = It ? It._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && D(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && D("inject() can only be used inside setup() or functional components.");
}
const ts = {}, ns = () => Object.create(ts), os = (e) => Object.getPrototypeOf(e) === ts;
function ru(e, t, n, o = !1) {
  const r = {}, i = ns();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rs(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  p.NODE_ENV !== "production" && ss(t || {}, r, e), n ? e.props = o ? r : ec(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function iu(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function su(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = j(r), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && iu(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let _ = d[f];
        if (no(e.emitsOptions, _))
          continue;
        const b = t[_];
        if (u)
          if (W(i, _))
            b !== i[_] && (i[_] = b, h = !0);
          else {
            const S = Ie(_);
            r[S] = Ao(
              u,
              l,
              S,
              b,
              e,
              !1
            );
          }
        else
          b !== i[_] && (i[_] = b, h = !0);
      }
    }
  } else {
    rs(e, t, r, i) && (h = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !W(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ne(f)) === f || !W(t, d))) && (u ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[f] = Ao(
        u,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (i !== l)
      for (const f in i)
        (!t || !W(t, f)) && (delete i[f], h = !0);
  }
  h && qe(e.attrs, "set", ""), p.NODE_ENV !== "production" && ss(t || {}, r, e);
}
function rs(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (zt(u))
        continue;
      const h = t[u];
      let d;
      r && W(r, d = Ie(u)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : no(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, s = !0);
    }
  if (i) {
    const u = j(n), h = l || K;
    for (let d = 0; d < i.length; d++) {
      const f = i[d];
      n[f] = Ao(
        r,
        u,
        f,
        h[f],
        e,
        !W(h, f)
      );
    }
  }
  return s;
}
function Ao(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const l = W(s, "default");
    if (l && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && R(u)) {
        const { propsDefaults: h } = r;
        if (n in h)
          o = h[n];
        else {
          const d = hn(r);
          o = h[n] = u.call(
            null,
            t
          ), d();
        }
      } else
        o = u;
      r.ce && r.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ne(n)) && (o = !0));
  }
  return o;
}
const lu = /* @__PURE__ */ new WeakMap();
function is(e, t, n = !1) {
  const o = n ? lu : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, l = [];
  let u = !1;
  if (!R(e)) {
    const d = (f) => {
      u = !0;
      const [_, b] = is(f, t, !0);
      oe(s, _), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !u)
    return te(e) && o.set(e, Vt), Vt;
  if ($(i))
    for (let d = 0; d < i.length; d++) {
      p.NODE_ENV !== "production" && !ie(i[d]) && D("props must be strings when using array syntax.", i[d]);
      const f = Ie(i[d]);
      jr(f) && (s[f] = K);
    }
  else if (i) {
    p.NODE_ENV !== "production" && !te(i) && D("invalid props options", i);
    for (const d in i) {
      const f = Ie(d);
      if (jr(f)) {
        const _ = i[d], b = s[f] = $(_) || R(_) ? { type: _ } : oe({}, _), S = b.type;
        let C = !1, X = !0;
        if ($(S))
          for (let k = 0; k < S.length; ++k) {
            const ee = S[k], B = R(ee) && ee.name;
            if (B === "Boolean") {
              C = !0;
              break;
            } else B === "String" && (X = !1);
          }
        else
          C = R(S) && S.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = C, b[
          1
          /* shouldCastTrue */
        ] = X, (C || W(b, "default")) && l.push(f);
      }
    }
  }
  const h = [s, l];
  return te(e) && o.set(e, h), h;
}
function jr(e) {
  return e[0] !== "$" && !zt(e) ? !0 : (p.NODE_ENV !== "production" && D(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function cu(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ss(e, t, n) {
  const o = j(t), r = n.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null && uu(
      i,
      o[i],
      s,
      p.NODE_ENV !== "production" ? Ke(o) : o,
      !W(e, i) && !W(e, Ne(i))
    );
  }
}
function uu(e, t, n, o, r) {
  const { type: i, required: s, validator: l, skipCheck: u } = n;
  if (s && r) {
    D('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !u) {
      let h = !1;
      const d = $(i) ? i : [i], f = [];
      for (let _ = 0; _ < d.length && !h; _++) {
        const { valid: b, expectedType: S } = au(t, d[_]);
        f.push(S || ""), h = b;
      }
      if (!h) {
        D(du(e, t, f));
        return;
      }
    }
    l && !l(t, o) && D('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const fu = /* @__PURE__ */ Lt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function au(e, t) {
  let n;
  const o = cu(t);
  if (o === "null")
    n = e === null;
  else if (fu(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = te(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function du(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(qn).join(" | ")}`;
  const r = n[0], i = Wo(t), s = Fr(t, r), l = Fr(t, i);
  return n.length === 1 && kr(r) && !pu(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, kr(i) && (o += `with value ${l}.`), o;
}
function Fr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function kr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function pu(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ls = (e) => e[0] === "_" || e === "$stable", fr = (e) => $(e) ? e.map(Re) : [Re(e)], hu = (e, t, n) => {
  if (t._n)
    return t;
  const o = Tc((...r) => (p.NODE_ENV !== "production" && de && (!n || n.root === de.root) && D(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fr(t(...r))), n);
  return o._c = !1, o;
}, cs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ls(r)) continue;
    const i = e[r];
    if (R(i))
      t[r] = hu(r, i, o);
    else if (i != null) {
      p.NODE_ENV !== "production" && D(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = fr(i);
      t[r] = () => s;
    }
  }
}, us = (e, t) => {
  p.NODE_ENV !== "production" && !sr(e.vnode) && D(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fr(t);
  e.slots.default = () => n;
}, $o = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, _u = (e, t, n) => {
  const o = e.slots = ns();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? ($o(o, t, n), n && Pn(o, "_", r, !0)) : cs(t, o);
  } else t && us(e, t);
}, gu = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = K;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && bt ? ($o(r, t, n), qe(e, "set", "$slots")) : n && l === 1 ? i = !1 : $o(r, t, n) : (i = !t.$stable, cs(t, r)), s = t;
  } else t && (us(e, t), s = { default: 1 });
  if (i)
    for (const l in r)
      !ls(l) && s[l] == null && delete r[l];
};
let Kt, ut;
function ze(e, t) {
  e.appContext.config.performance && Fn() && ut.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && Vc(e, t, Fn() ? ut.now() : Date.now());
}
function Xe(e, t) {
  if (e.appContext.config.performance && Fn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ut.mark(o), ut.measure(
      `<${io(e, e.type)}> ${t}`,
      n,
      o
    ), ut.clearMarks(n), ut.clearMarks(o);
  }
  p.NODE_ENV !== "production" && Sc(e, t, Fn() ? ut.now() : Date.now());
}
function Fn() {
  return Kt !== void 0 || (typeof window < "u" && window.performance ? (Kt = !0, ut = window.performance) : Kt = !1), Kt;
}
function mu() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Se = Au;
function Eu(e) {
  return bu(e);
}
function bu(e, t) {
  mu();
  const n = qo();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && Ki(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: u,
    setText: h,
    setElementText: d,
    parentNode: f,
    nextSibling: _,
    setScopeId: b = le,
    insertStaticContent: S
  } = e, C = (c, a, g, N = null, E = null, y = null, x = void 0, w = null, O = p.NODE_ENV !== "production" && bt ? !1 : !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !qt(c, a) && (N = mn(c), rt(c, E, y, !0), c = null), a.patchFlag === -2 && (O = !1, a.dynamicChildren = null);
    const { type: v, ref: A, shapeFlag: V } = a;
    switch (v) {
      case dn:
        X(c, a, g, N);
        break;
      case Ae:
        k(c, a, g, N);
        break;
      case Tn:
        c == null ? ee(a, g, N, x) : p.NODE_ENV !== "production" && B(c, a, g, x);
        break;
      case Me:
        P(
          c,
          a,
          g,
          N,
          E,
          y,
          x,
          w,
          O
        );
        break;
      default:
        V & 1 ? se(
          c,
          a,
          g,
          N,
          E,
          y,
          x,
          w,
          O
        ) : V & 6 ? ne(
          c,
          a,
          g,
          N,
          E,
          y,
          x,
          w,
          O
        ) : V & 64 || V & 128 ? v.process(
          c,
          a,
          g,
          N,
          E,
          y,
          x,
          w,
          O,
          kt
        ) : p.NODE_ENV !== "production" && D("Invalid VNode type:", v, `(${typeof v})`);
    }
    A != null && E && So(A, c && c.ref, y, a || c, !a);
  }, X = (c, a, g, N) => {
    if (c == null)
      o(
        a.el = l(a.children),
        g,
        N
      );
    else {
      const E = a.el = c.el;
      a.children !== c.children && h(E, a.children);
    }
  }, k = (c, a, g, N) => {
    c == null ? o(
      a.el = u(a.children || ""),
      g,
      N
    ) : a.el = c.el;
  }, ee = (c, a, g, N) => {
    [c.el, c.anchor] = S(
      c.children,
      a,
      g,
      N,
      c.el,
      c.anchor
    );
  }, B = (c, a, g, N) => {
    if (a.children !== c.children) {
      const E = _(c.anchor);
      I(c), [a.el, a.anchor] = S(
        a.children,
        g,
        E,
        N
      );
    } else
      a.el = c.el, a.anchor = c.anchor;
  }, _e = ({ el: c, anchor: a }, g, N) => {
    let E;
    for (; c && c !== a; )
      E = _(c), o(c, g, N), c = E;
    o(a, g, N);
  }, I = ({ el: c, anchor: a }) => {
    let g;
    for (; c && c !== a; )
      g = _(c), r(c), c = g;
    r(a);
  }, se = (c, a, g, N, E, y, x, w, O) => {
    a.type === "svg" ? x = "svg" : a.type === "math" && (x = "mathml"), c == null ? ve(
      a,
      g,
      N,
      E,
      y,
      x,
      w,
      O
    ) : Pe(
      c,
      a,
      E,
      y,
      x,
      w,
      O
    );
  }, ve = (c, a, g, N, E, y, x, w) => {
    let O, v;
    const { props: A, shapeFlag: V, transition: T, dirs: H } = c;
    if (O = c.el = s(
      c.type,
      y,
      A && A.is,
      A
    ), V & 8 ? d(O, c.children) : V & 16 && pe(
      c.children,
      O,
      null,
      N,
      E,
      mo(c, y),
      x,
      w
    ), H && pt(c, null, N, "created"), ue(O, c, c.scopeId, x, N), A) {
      for (const Q in A)
        Q !== "value" && !zt(Q) && i(O, Q, null, A[Q], y, N);
      "value" in A && i(O, "value", null, A.value, y), (v = A.onVnodeBeforeMount) && Be(v, N, c);
    }
    p.NODE_ENV !== "production" && (Pn(O, "__vnode", c, !0), Pn(O, "__vueParentComponent", N, !0)), H && pt(c, null, N, "beforeMount");
    const U = yu(E, T);
    U && T.beforeEnter(O), o(O, a, g), ((v = A && A.onVnodeMounted) || U || H) && Se(() => {
      v && Be(v, N, c), U && T.enter(O), H && pt(c, null, N, "mounted");
    }, E);
  }, ue = (c, a, g, N, E) => {
    if (g && b(c, g), N)
      for (let y = 0; y < N.length; y++)
        b(c, N[y]);
    if (E) {
      let y = E.subTree;
      if (p.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = dr(y.children) || y), a === y || _s(y.type) && (y.ssContent === a || y.ssFallback === a)) {
        const x = E.vnode;
        ue(
          c,
          x,
          x.scopeId,
          x.slotScopeIds,
          E.parent
        );
      }
    }
  }, pe = (c, a, g, N, E, y, x, w, O = 0) => {
    for (let v = O; v < c.length; v++) {
      const A = c[v] = w ? lt(c[v]) : Re(c[v]);
      C(
        null,
        A,
        a,
        g,
        N,
        E,
        y,
        x,
        w
      );
    }
  }, Pe = (c, a, g, N, E, y, x) => {
    const w = a.el = c.el;
    p.NODE_ENV !== "production" && (w.__vnode = a);
    let { patchFlag: O, dynamicChildren: v, dirs: A } = a;
    O |= c.patchFlag & 16;
    const V = c.props || K, T = a.props || K;
    let H;
    if (g && ht(g, !1), (H = T.onVnodeBeforeUpdate) && Be(H, g, a, c), A && pt(a, c, g, "beforeUpdate"), g && ht(g, !0), p.NODE_ENV !== "production" && bt && (O = 0, x = !1, v = null), (V.innerHTML && T.innerHTML == null || V.textContent && T.textContent == null) && d(w, ""), v ? (Fe(
      c.dynamicChildren,
      v,
      w,
      g,
      N,
      mo(a, E),
      y
    ), p.NODE_ENV !== "production" && Cn(c, a)) : x || De(
      c,
      a,
      w,
      null,
      g,
      N,
      mo(a, E),
      y,
      !1
    ), O > 0) {
      if (O & 16)
        m(w, V, T, g, E);
      else if (O & 2 && V.class !== T.class && i(w, "class", null, T.class, E), O & 4 && i(w, "style", V.style, T.style, E), O & 8) {
        const U = a.dynamicProps;
        for (let Q = 0; Q < U.length; Q++) {
          const Y = U[Q], xe = V[Y], he = T[Y];
          (he !== xe || Y === "value") && i(w, Y, xe, he, E, g);
        }
      }
      O & 1 && c.children !== a.children && d(w, a.children);
    } else !x && v == null && m(w, V, T, g, E);
    ((H = T.onVnodeUpdated) || A) && Se(() => {
      H && Be(H, g, a, c), A && pt(a, c, g, "updated");
    }, N);
  }, Fe = (c, a, g, N, E, y, x) => {
    for (let w = 0; w < a.length; w++) {
      const O = c[w], v = a[w], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qt(O, v) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? f(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      C(
        O,
        v,
        A,
        null,
        N,
        E,
        y,
        x,
        !0
      );
    }
  }, m = (c, a, g, N, E) => {
    if (a !== g) {
      if (a !== K)
        for (const y in a)
          !zt(y) && !(y in g) && i(
            c,
            y,
            a[y],
            null,
            E,
            N
          );
      for (const y in g) {
        if (zt(y)) continue;
        const x = g[y], w = a[y];
        x !== w && y !== "value" && i(c, y, w, x, E, N);
      }
      "value" in g && i(c, "value", a.value, g.value, E);
    }
  }, P = (c, a, g, N, E, y, x, w, O) => {
    const v = a.el = c ? c.el : l(""), A = a.anchor = c ? c.anchor : l("");
    let { patchFlag: V, dynamicChildren: T, slotScopeIds: H } = a;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (bt || V & 2048) && (V = 0, O = !1, T = null), H && (w = w ? w.concat(H) : H), c == null ? (o(v, g, N), o(A, g, N), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      g,
      A,
      E,
      y,
      x,
      w,
      O
    )) : V > 0 && V & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Fe(
      c.dynamicChildren,
      T,
      g,
      E,
      y,
      x,
      w
    ), p.NODE_ENV !== "production" ? Cn(c, a) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (a.key != null || E && a === E.subTree) && Cn(
        c,
        a,
        !0
        /* shallow */
      )
    )) : De(
      c,
      a,
      g,
      A,
      E,
      y,
      x,
      w,
      O
    );
  }, ne = (c, a, g, N, E, y, x, w, O) => {
    a.slotScopeIds = w, c == null ? a.shapeFlag & 512 ? E.ctx.activate(
      a,
      g,
      N,
      x,
      O
    ) : q(
      a,
      g,
      N,
      E,
      y,
      x,
      O
    ) : G(c, a, O);
  }, q = (c, a, g, N, E, y, x) => {
    const w = c.component = Bu(
      c,
      N,
      E
    );
    if (p.NODE_ENV !== "production" && w.type.__hmrId && Ec(w), p.NODE_ENV !== "production" && (Dn(c), ze(w, "mount")), sr(c) && (w.ctx.renderer = kt), p.NODE_ENV !== "production" && ze(w, "init"), Wu(w, !1, x), p.NODE_ENV !== "production" && Xe(w, "init"), w.asyncDep) {
      if (E && E.registerDep(w, L, x), !c.el) {
        const O = w.subTree = ae(Ae);
        k(null, O, a, g);
      }
    } else
      L(
        w,
        c,
        a,
        g,
        E,
        y,
        x
      );
    p.NODE_ENV !== "production" && (xn(), Xe(w, "mount"));
  }, G = (c, a, g) => {
    const N = a.component = c.component;
    if (Tu(c, a, g))
      if (N.asyncDep && !N.asyncResolved) {
        p.NODE_ENV !== "production" && Dn(a), F(N, a, g), p.NODE_ENV !== "production" && xn();
        return;
      } else
        N.next = a, N.update();
    else
      a.el = c.el, N.vnode = a;
  }, L = (c, a, g, N, E, y, x) => {
    const w = () => {
      if (c.isMounted) {
        let { next: V, bu: T, u: H, parent: U, vnode: Q } = c;
        {
          const Ve = fs(c);
          if (Ve) {
            V && (V.el = Q.el, F(c, V, x)), Ve.asyncDep.then(() => {
              c.isUnmounted || w();
            });
            return;
          }
        }
        let Y = V, xe;
        p.NODE_ENV !== "production" && Dn(V || c.vnode), ht(c, !1), V ? (V.el = Q.el, F(c, V, x)) : V = Q, T && Ut(T), (xe = V.props && V.props.onVnodeBeforeUpdate) && Be(xe, U, V, Q), ht(c, !0), p.NODE_ENV !== "production" && ze(c, "render");
        const he = Eo(c);
        p.NODE_ENV !== "production" && Xe(c, "render");
        const Le = c.subTree;
        c.subTree = he, p.NODE_ENV !== "production" && ze(c, "patch"), C(
          Le,
          he,
          // parent may have changed if it's in a teleport
          f(Le.el),
          // anchor may have changed if it's in a fragment
          mn(Le),
          c,
          E,
          y
        ), p.NODE_ENV !== "production" && Xe(c, "patch"), V.el = he.el, Y === null && Iu(c, he.el), H && Se(H, E), (xe = V.props && V.props.onVnodeUpdated) && Se(
          () => Be(xe, U, V, Q),
          E
        ), p.NODE_ENV !== "production" && qi(c), p.NODE_ENV !== "production" && xn();
      } else {
        let V;
        const { el: T, props: H } = a, { bm: U, m: Q, parent: Y, root: xe, type: he } = c, Le = Zt(a);
        if (ht(c, !1), U && Ut(U), !Le && (V = H && H.onVnodeBeforeMount) && Be(V, Y, a), ht(c, !0), T && vr) {
          const Ve = () => {
            p.NODE_ENV !== "production" && ze(c, "render"), c.subTree = Eo(c), p.NODE_ENV !== "production" && Xe(c, "render"), p.NODE_ENV !== "production" && ze(c, "hydrate"), vr(
              T,
              c.subTree,
              c,
              E,
              null
            ), p.NODE_ENV !== "production" && Xe(c, "hydrate");
          };
          Le && he.__asyncHydrate ? he.__asyncHydrate(
            T,
            c,
            Ve
          ) : Ve();
        } else {
          xe.ce && xe.ce._injectChildStyle(he), p.NODE_ENV !== "production" && ze(c, "render");
          const Ve = c.subTree = Eo(c);
          p.NODE_ENV !== "production" && Xe(c, "render"), p.NODE_ENV !== "production" && ze(c, "patch"), C(
            null,
            Ve,
            g,
            N,
            c,
            E,
            y
          ), p.NODE_ENV !== "production" && Xe(c, "patch"), a.el = Ve.el;
        }
        if (Q && Se(Q, E), !Le && (V = H && H.onVnodeMounted)) {
          const Ve = a;
          Se(
            () => Be(V, Y, Ve),
            E
          );
        }
        (a.shapeFlag & 256 || Y && Zt(Y.vnode) && Y.vnode.shapeFlag & 256) && c.a && Se(c.a, E), c.isMounted = !0, p.NODE_ENV !== "production" && wc(c), a = g = N = null;
      }
    };
    c.scope.on();
    const O = c.effect = new bi(w);
    c.scope.off();
    const v = c.update = O.run.bind(O), A = c.job = O.runIfDirty.bind(O);
    A.i = c, A.id = c.uid, O.scheduler = () => Qn(A), ht(c, !0), p.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (V) => Ut(c.rtc, V) : void 0, O.onTrigger = c.rtg ? (V) => Ut(c.rtg, V) : void 0), v();
  }, F = (c, a, g) => {
    a.component = c;
    const N = c.vnode.props;
    c.vnode = a, c.next = null, su(c, a.props, N, g), gu(c, a.children, g), tt(), $r(c), nt();
  }, De = (c, a, g, N, E, y, x, w, O = !1) => {
    const v = c && c.children, A = c ? c.shapeFlag : 0, V = a.children, { patchFlag: T, shapeFlag: H } = a;
    if (T > 0) {
      if (T & 128) {
        jt(
          v,
          V,
          g,
          N,
          E,
          y,
          x,
          w,
          O
        );
        return;
      } else if (T & 256) {
        Ht(
          v,
          V,
          g,
          N,
          E,
          y,
          x,
          w,
          O
        );
        return;
      }
    }
    H & 8 ? (A & 16 && Ft(v, E, y), V !== v && d(g, V)) : A & 16 ? H & 16 ? jt(
      v,
      V,
      g,
      N,
      E,
      y,
      x,
      w,
      O
    ) : Ft(v, E, y, !0) : (A & 8 && d(g, ""), H & 16 && pe(
      V,
      g,
      N,
      E,
      y,
      x,
      w,
      O
    ));
  }, Ht = (c, a, g, N, E, y, x, w, O) => {
    c = c || Vt, a = a || Vt;
    const v = c.length, A = a.length, V = Math.min(v, A);
    let T;
    for (T = 0; T < V; T++) {
      const H = a[T] = O ? lt(a[T]) : Re(a[T]);
      C(
        c[T],
        H,
        g,
        null,
        E,
        y,
        x,
        w,
        O
      );
    }
    v > A ? Ft(
      c,
      E,
      y,
      !0,
      !1,
      V
    ) : pe(
      a,
      g,
      N,
      E,
      y,
      x,
      w,
      O,
      V
    );
  }, jt = (c, a, g, N, E, y, x, w, O) => {
    let v = 0;
    const A = a.length;
    let V = c.length - 1, T = A - 1;
    for (; v <= V && v <= T; ) {
      const H = c[v], U = a[v] = O ? lt(a[v]) : Re(a[v]);
      if (qt(H, U))
        C(
          H,
          U,
          g,
          null,
          E,
          y,
          x,
          w,
          O
        );
      else
        break;
      v++;
    }
    for (; v <= V && v <= T; ) {
      const H = c[V], U = a[T] = O ? lt(a[T]) : Re(a[T]);
      if (qt(H, U))
        C(
          H,
          U,
          g,
          null,
          E,
          y,
          x,
          w,
          O
        );
      else
        break;
      V--, T--;
    }
    if (v > V) {
      if (v <= T) {
        const H = T + 1, U = H < A ? a[H].el : N;
        for (; v <= T; )
          C(
            null,
            a[v] = O ? lt(a[v]) : Re(a[v]),
            g,
            U,
            E,
            y,
            x,
            w,
            O
          ), v++;
      }
    } else if (v > T)
      for (; v <= V; )
        rt(c[v], E, y, !0), v++;
    else {
      const H = v, U = v, Q = /* @__PURE__ */ new Map();
      for (v = U; v <= T; v++) {
        const ge = a[v] = O ? lt(a[v]) : Re(a[v]);
        ge.key != null && (p.NODE_ENV !== "production" && Q.has(ge.key) && D(
          "Duplicate keys found during update:",
          JSON.stringify(ge.key),
          "Make sure keys are unique."
        ), Q.set(ge.key, v));
      }
      let Y, xe = 0;
      const he = T - U + 1;
      let Le = !1, Ve = 0;
      const Bt = new Array(he);
      for (v = 0; v < he; v++) Bt[v] = 0;
      for (v = H; v <= V; v++) {
        const ge = c[v];
        if (xe >= he) {
          rt(ge, E, y, !0);
          continue;
        }
        let ke;
        if (ge.key != null)
          ke = Q.get(ge.key);
        else
          for (Y = U; Y <= T; Y++)
            if (Bt[Y - U] === 0 && qt(ge, a[Y])) {
              ke = Y;
              break;
            }
        ke === void 0 ? rt(ge, E, y, !0) : (Bt[ke - U] = v + 1, ke >= Ve ? Ve = ke : Le = !0, C(
          ge,
          a[ke],
          g,
          null,
          E,
          y,
          x,
          w,
          O
        ), xe++);
      }
      const Or = Le ? Nu(Bt) : Vt;
      for (Y = Or.length - 1, v = he - 1; v >= 0; v--) {
        const ge = U + v, ke = a[ge], wr = ge + 1 < A ? a[ge + 1].el : N;
        Bt[v] === 0 ? C(
          null,
          ke,
          g,
          wr,
          E,
          y,
          x,
          w,
          O
        ) : Le && (Y < 0 || v !== Or[Y] ? vt(ke, g, wr, 2) : Y--);
      }
    }
  }, vt = (c, a, g, N, E = null) => {
    const { el: y, type: x, transition: w, children: O, shapeFlag: v } = c;
    if (v & 6) {
      vt(c.component.subTree, a, g, N);
      return;
    }
    if (v & 128) {
      c.suspense.move(a, g, N);
      return;
    }
    if (v & 64) {
      x.move(c, a, g, kt);
      return;
    }
    if (x === Me) {
      o(y, a, g);
      for (let V = 0; V < O.length; V++)
        vt(O[V], a, g, N);
      o(c.anchor, a, g);
      return;
    }
    if (x === Tn) {
      _e(c, a, g);
      return;
    }
    if (N !== 2 && v & 1 && w)
      if (N === 0)
        w.beforeEnter(y), o(y, a, g), Se(() => w.enter(y), E);
      else {
        const { leave: V, delayLeave: T, afterLeave: H } = w, U = () => o(y, a, g), Q = () => {
          V(y, () => {
            U(), H && H();
          });
        };
        T ? T(y, U, Q) : Q();
      }
    else
      o(y, a, g);
  }, rt = (c, a, g, N = !1, E = !1) => {
    const {
      type: y,
      props: x,
      ref: w,
      children: O,
      dynamicChildren: v,
      shapeFlag: A,
      patchFlag: V,
      dirs: T,
      cacheIndex: H
    } = c;
    if (V === -2 && (E = !1), w != null && So(w, null, g, c, !0), H != null && (a.renderCache[H] = void 0), A & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const U = A & 1 && T, Q = !Zt(c);
    let Y;
    if (Q && (Y = x && x.onVnodeBeforeUnmount) && Be(Y, a, c), A & 6)
      hl(c.component, g, N);
    else {
      if (A & 128) {
        c.suspense.unmount(g, N);
        return;
      }
      U && pt(c, null, a, "beforeUnmount"), A & 64 ? c.type.remove(
        c,
        a,
        g,
        kt,
        N
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Me || V > 0 && V & 64) ? Ft(
        v,
        a,
        g,
        !1,
        !0
      ) : (y === Me && V & 384 || !E && A & 16) && Ft(O, a, g), N && co(c);
    }
    (Q && (Y = x && x.onVnodeUnmounted) || U) && Se(() => {
      Y && Be(Y, a, c), U && pt(c, null, a, "unmounted");
    }, g);
  }, co = (c) => {
    const { type: a, el: g, anchor: N, transition: E } = c;
    if (a === Me) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && E && !E.persisted ? c.children.forEach((x) => {
        x.type === Ae ? r(x.el) : co(x);
      }) : pl(g, N);
      return;
    }
    if (a === Tn) {
      I(c);
      return;
    }
    const y = () => {
      r(g), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (c.shapeFlag & 1 && E && !E.persisted) {
      const { leave: x, delayLeave: w } = E, O = () => x(g, y);
      w ? w(c.el, y, O) : O();
    } else
      y();
  }, pl = (c, a) => {
    let g;
    for (; c !== a; )
      g = _(c), r(c), c = g;
    r(a);
  }, hl = (c, a, g) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && bc(c);
    const { bum: N, scope: E, job: y, subTree: x, um: w, m: O, a: v } = c;
    Br(O), Br(v), N && Ut(N), E.stop(), y && (y.flags |= 8, rt(x, c, a, g)), w && Se(w, a), Se(() => {
      c.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve()), p.NODE_ENV !== "production" && xc(c);
  }, Ft = (c, a, g, N = !1, E = !1, y = 0) => {
    for (let x = y; x < c.length; x++)
      rt(c[x], a, g, N, E);
  }, mn = (c) => {
    if (c.shapeFlag & 6)
      return mn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const a = _(c.anchor || c.el), g = a && a[Ic];
    return g ? _(g) : a;
  };
  let uo = !1;
  const yr = (c, a, g) => {
    c == null ? a._vnode && rt(a._vnode, null, null, !0) : C(
      a._vnode || null,
      c,
      a,
      null,
      null,
      null,
      g
    ), a._vnode = c, uo || (uo = !0, $r(), Bi(), uo = !1);
  }, kt = {
    p: C,
    um: rt,
    m: vt,
    r: co,
    mt: q,
    mc: pe,
    pc: De,
    pbc: Fe,
    n: mn,
    o: e
  };
  let Nr, vr;
  return {
    render: yr,
    hydrate: Nr,
    createApp: nu(yr, Nr)
  };
}
function mo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function yu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Cn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if ($(o) && $(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = lt(r[i]), l.el = s.el), !n && l.patchFlag !== -2 && Cn(s, l)), l.type === dn && (l.el = s.el), p.NODE_ENV !== "production" && l.type === Ae && !l.el && (l.el = s.el);
    }
}
function Nu(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const h = e[o];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        l = i + s >> 1, e[n[l]] < h ? i = l + 1 : s = l;
      h < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function fs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fs(t);
}
function Br(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vu = Symbol.for("v-scx"), Ou = () => {
  {
    const e = Sn(vu);
    return e || p.NODE_ENV !== "production" && D(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function wu(e, t) {
  return ar(
    e,
    null,
    p.NODE_ENV !== "production" ? oe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function At(e, t, n) {
  return p.NODE_ENV !== "production" && !R(t) && D(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ar(e, t, n);
}
function ar(e, t, n = K) {
  const { immediate: o, deep: r, flush: i, once: s } = n;
  p.NODE_ENV !== "production" && !t && (o !== void 0 && D(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && D(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && D(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = oe({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = D);
  let u;
  if (ro)
    if (i === "sync") {
      const _ = Ou();
      u = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!t || o)
      l.once = !0;
    else
      return {
        stop: le,
        resume: le,
        pause: le
      };
  const h = de;
  l.call = (_, b, S) => Ge(_, h, b, S);
  let d = !1;
  i === "post" ? l.scheduler = (_) => {
    Se(_, h && h.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (_, b) => {
    b ? _() : Qn(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, h && (_.id = h.uid, _.i = h));
  };
  const f = fc(e, t, l);
  return u && u.push(f), f;
}
function Du(e, t, n) {
  const o = this.proxy, r = ie(e) ? e.includes(".") ? as(o, e) : () => o[e] : e.bind(o, o);
  let i;
  R(t) ? i = t : (i = t.handler, n = t);
  const s = hn(this), l = ar(r, i.bind(o), n);
  return s(), l;
}
function as(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function xu(e, t, n = K) {
  const o = ys();
  if (p.NODE_ENV !== "production" && !o)
    return D("useModel() called without active instance."), $t();
  if (p.NODE_ENV !== "production" && !o.propsOptions[0][t])
    return D(`useModel() called with prop "${t}" which is not declared.`), $t();
  const r = Ie(t), i = Ne(t), s = ds(e, t), l = sc((u, h) => {
    let d, f = K, _;
    return wu(() => {
      const b = e[t];
      Oe(d, b) && (d = b, h());
    }), {
      get() {
        return u(), n.get ? n.get(d) : d;
      },
      set(b) {
        const S = n.set ? n.set(b) : b;
        if (!Oe(S, d) && !(f !== K && Oe(b, f)))
          return;
        const C = o.vnode.props;
        C && // check if parent has passed v-model
        (t in C || r in C || i in C) && (`onUpdate:${t}` in C || `onUpdate:${r}` in C || `onUpdate:${i}` in C) || (d = b, h()), o.emit(`update:${t}`, S), Oe(b, S) && Oe(b, f) && !Oe(S, _) && h(), f = b, _ = S;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? s || K : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const ds = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ie(t)}Modifiers`] || e[`${Ne(t)}Modifiers`];
function Vu(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || K;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(_t(Ie(t)) in f)) && D(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${_t(Ie(t))}" prop.`
        );
      else {
        const _ = d[t];
        R(_) && (_(...n) || D(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && ds(o, t.slice(7));
  if (s && (s.trim && (r = n.map((d) => ie(d) ? d.trim() : d)), s.number && (r = n.map(Dl))), p.NODE_ENV !== "production" && Cc(e, t, r), p.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[_t(d)] && D(
      `Event "${d}" is emitted in component ${io(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = _t(t)] || // also try camelCase event handler (#2249)
  o[l = _t(Ie(t))];
  !u && i && (u = o[l = _t(Ne(t))]), u && Ge(
    u,
    e,
    6,
    r
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ge(
      h,
      e,
      6,
      r
    );
  }
}
function ps(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, l = !1;
  if (!R(e)) {
    const u = (h) => {
      const d = ps(h, t, !0);
      d && (l = !0, oe(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !l ? (te(e) && o.set(e, null), null) : ($(i) ? i.forEach((u) => s[u] = null) : oe(s, i), te(e) && o.set(e, s), s);
}
function no(e, t) {
  return !e || !un(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Ne(t)) || W(e, t));
}
let Po = !1;
function kn() {
  Po = !0;
}
function Eo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [i],
    slots: s,
    attrs: l,
    emit: u,
    render: h,
    renderCache: d,
    props: f,
    data: _,
    setupState: b,
    ctx: S,
    inheritAttrs: C
  } = e, X = Hn(e);
  let k, ee;
  p.NODE_ENV !== "production" && (Po = !1);
  try {
    if (n.shapeFlag & 4) {
      const I = r || o, se = p.NODE_ENV !== "production" && b.__isScriptSetup ? new Proxy(I, {
        get(ve, ue, pe) {
          return D(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ve, ue, pe);
        }
      }) : I;
      k = Re(
        h.call(
          se,
          I,
          d,
          p.NODE_ENV !== "production" ? Ke(f) : f,
          b,
          _,
          S
        )
      ), ee = l;
    } else {
      const I = t;
      p.NODE_ENV !== "production" && l === f && kn(), k = Re(
        I.length > 1 ? I(
          p.NODE_ENV !== "production" ? Ke(f) : f,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return kn(), Ke(l);
            },
            slots: s,
            emit: u
          } : { attrs: l, slots: s, emit: u }
        ) : I(
          p.NODE_ENV !== "production" ? Ke(f) : f,
          null
        )
      ), ee = t.props ? l : Su(l);
    }
  } catch (I) {
    en.length = 0, fn(I, e, 1), k = ae(Ae);
  }
  let B = k, _e;
  if (p.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([B, _e] = hs(k)), ee && C !== !1) {
    const I = Object.keys(ee), { shapeFlag: se } = B;
    if (I.length) {
      if (se & 7)
        i && I.some($n) && (ee = Cu(
          ee,
          i
        )), B = ft(B, ee, !1, !0);
      else if (p.NODE_ENV !== "production" && !Po && B.type !== Ae) {
        const ve = Object.keys(l), ue = [], pe = [];
        for (let Pe = 0, Fe = ve.length; Pe < Fe; Pe++) {
          const m = ve[Pe];
          un(m) ? $n(m) || ue.push(m[2].toLowerCase() + m.slice(3)) : pe.push(m);
        }
        pe.length && D(
          `Extraneous non-props attributes (${pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ue.length && D(
          `Extraneous non-emits event listeners (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !Ur(B) && D(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = ft(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !Ur(B) && D(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ir(B, n.transition)), p.NODE_ENV !== "production" && _e ? _e(B) : k = B, Hn(X), k;
}
const hs = (e) => {
  const t = e.children, n = e.dynamicChildren, o = dr(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return hs(o);
  } else return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (l) => {
    t[r] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Re(o), s];
};
function dr(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (pr(r)) {
      if (r.type !== Ae || r.children === "v-if") {
        if (n)
          return;
        if (n = r, p.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return dr(n.children);
      }
    } else
      return;
  }
  return n;
}
const Su = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || un(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Cu = (e, t) => {
  const n = {};
  for (const o in e)
    (!$n(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Ur = (e) => e.shapeFlag & 7 || e.type === Ae;
function Tu(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: l, patchFlag: u } = t, h = i.emitsOptions;
  if (p.NODE_ENV !== "production" && (r || l) && bt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Wr(o, s, h) : !!s;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const _ = d[f];
        if (s[_] !== o[_] && !no(h, _))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Wr(o, s, h) : !0 : !!s;
  return !1;
}
function Wr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !no(n, i))
      return !0;
  }
  return !1;
}
function Iu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const _s = (e) => e.__isSuspense;
function Au(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : ki(e);
}
const Me = Symbol.for("v-fgt"), dn = Symbol.for("v-txt"), Ae = Symbol.for("v-cmt"), Tn = Symbol.for("v-stc"), en = [];
let Te = null;
function pn(e = !1) {
  en.push(Te = e ? null : []);
}
function $u() {
  en.pop(), Te = en[en.length - 1] || null;
}
let ln = 1;
function Kr(e) {
  ln += e, e < 0 && Te && (Te.hasOnce = !0);
}
function gs(e) {
  return e.dynamicChildren = ln > 0 ? Te || Vt : null, $u(), ln > 0 && Te && Te.push(e), e;
}
function oo(e, t, n, o, r, i) {
  return gs(
    $e(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
    )
  );
}
function Pu(e, t, n, o, r) {
  return gs(
    ae(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qt(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Vn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Lu = (...e) => Es(
  ...e
), ms = ({ key: e }) => e ?? null, In = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || re(e) || R(e) ? { i: Ce, r: e, k: t, f: !!n } : e : null);
function $e(e, t = null, n = null, o = 0, r = null, i = e === Me ? 0 : 1, s = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ms(t),
    ref: t && In(t),
    scopeId: Ji,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return l ? (hr(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= ie(n) ? 8 : 16), p.NODE_ENV !== "production" && u.key !== u.key && D("VNode created with invalid key (NaN). VNode type:", u.type), ln > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Te.push(u), u;
}
const ae = p.NODE_ENV !== "production" ? Lu : Es;
function Es(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Kc) && (p.NODE_ENV !== "production" && !e && D(`Invalid vnode type when creating vnode: ${e}.`), e = Ae), pr(e)) {
    const l = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && hr(l, n), ln > 0 && !i && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag = -2, l;
  }
  if (ws(e) && (e = e.__vccOpts), t) {
    t = Mu(t);
    let { class: l, style: u } = t;
    l && !ie(l) && (t.class = Gn(l)), te(u) && (Ln(u) && !$(u) && (u = oe({}, u)), t.style = Go(u));
  }
  const s = ie(e) ? 1 : _s(e) ? 128 : Ac(e) ? 64 : te(e) ? 4 : R(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && s & 4 && Ln(e) && (e = j(e), D(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), $e(
    e,
    t,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function Mu(e) {
  return e ? Ln(e) || os(e) ? oe({}, e) : e : null;
}
function ft(e, t, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: s, children: l, transition: u } = e, h = t ? ju(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && ms(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? $(i) ? i.concat(In(t)) : [i, In(t)] : In(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && s === -1 && $(l) ? l.map(bs) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Me ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && ir(
    d,
    u.clone(d)
  ), d;
}
function bs(e) {
  const t = ft(e);
  return $(e.children) && (t.children = e.children.map(bs)), t;
}
function Ru(e = " ", t = 0) {
  return ae(dn, null, e, t);
}
function Hu(e = "", t = !1) {
  return t ? (pn(), Pu(Ae, null, e)) : ae(Ae, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? ae(Ae) : $(e) ? ae(
    Me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? lt(e) : ae(dn, null, String(e));
}
function lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function hr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), hr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !os(t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: Ce }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ru(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ju(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Gn([t.class, o.class]));
      else if (r === "style")
        t.style = Go([t.style, o.style]);
      else if (un(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !($(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Be(e, t, n, o = null) {
  Ge(e, t, 7, [
    n,
    o
  ]);
}
const Fu = es();
let ku = 0;
function Bu(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Fu, i = {
    uid: ku++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Al(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: is(o, r),
    emitsOptions: ps(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return p.NODE_ENV !== "production" ? i.ctx = qc(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Vu.bind(null, i), e.ce && e.ce(i), i;
}
let de = null;
const ys = () => de || Ce;
let Bn, Lo;
{
  const e = qo(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), Lo = t(
    "__VUE_SSR_SETTERS__",
    (n) => ro = n
  );
}
const hn = (e) => {
  const t = de;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, qr = () => {
  de && de.scope.off(), Bn(null);
}, Uu = /* @__PURE__ */ Lt("slot,component");
function Mo(e, { isNativeTag: t }) {
  (Uu(e) || t(e)) && D(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ns(e) {
  return e.vnode.shapeFlag & 4;
}
let ro = !1;
function Wu(e, t = !1, n = !1) {
  t && Lo(t);
  const { props: o, children: r } = e.vnode, i = Ns(e);
  ru(e, o, i, t), _u(e, r, n);
  const s = i ? Ku(e, t) : void 0;
  return t && Lo(!1), s;
}
function Ku(e, t) {
  var n;
  const o = e.type;
  if (p.NODE_ENV !== "production") {
    if (o.name && Mo(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        Mo(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        Yi(i[s]);
    }
    o.compilerOptions && qu() && D(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qi), p.NODE_ENV !== "production" && Gc(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? Ju(e) : null, s = hn(e);
    tt();
    const l = Rt(
      r,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Ke(e.props) : e.props,
        i
      ]
    );
    if (nt(), s(), Uo(l)) {
      if (Zt(e) || zi(e), l.then(qr, qr), t)
        return l.then((u) => {
          Gr(e, u, t);
        }).catch((u) => {
          fn(u, e, 0);
        });
      if (e.asyncDep = l, p.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = o.name) != null ? n : "Anonymous";
        D(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Gr(e, l, t);
  } else
    vs(e, t);
}
function Gr(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) ? (p.NODE_ENV !== "production" && pr(t) && D(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Mi(t), p.NODE_ENV !== "production" && Jc(e)) : p.NODE_ENV !== "production" && t !== void 0 && D(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), vs(e, n);
}
let Ro;
const qu = () => !Ro;
function vs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Ro && !o.render) {
      const r = o.template || ur(e).template;
      if (r) {
        p.NODE_ENV !== "production" && ze(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, h = oe(
          oe(
            {
              isCustomElement: i,
              delimiters: l
            },
            s
          ),
          u
        );
        o.render = Ro(r, h), p.NODE_ENV !== "production" && Xe(e, "compile");
      }
    }
    e.render = o.render || le;
  }
  {
    const r = hn(e);
    tt();
    try {
      zc(e);
    } finally {
      nt(), r();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === le && !t && (o.template ? D(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : D("Component is missing template or render function: ", o));
}
const Jr = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return kn(), ce(e, "get", ""), e[t];
  },
  set() {
    return D("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return D("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ce(e, "get", ""), e[t];
  }
};
function Gu(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ce(e, "get", "$slots"), t[n];
    }
  });
}
function Ju(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && D("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : re(n) && (o = "ref")), o !== "object" && D(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (p.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Jr));
      },
      get slots() {
        return o || (o = Gu(e));
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Jr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function _r(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mi(tc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in yt)
        return yt[n](e);
    },
    has(t, n) {
      return n in t || n in yt;
    }
  })) : e.proxy;
}
const Yu = /(?:^|[-_])(\w)/g, zu = (e) => e.replace(Yu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Os(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function io(e, t, n = !1) {
  let o = Os(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? zu(o) : n ? "App" : "Anonymous";
}
function ws(e) {
  return R(e) && "__vccOpts" in e;
}
const Ds = (e, t) => {
  const n = cc(e, t, ro);
  if (p.NODE_ENV !== "production") {
    const o = ys();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Xu() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(f) {
      return te(f) ? f.__isVue ? ["div", e, "VueInstance"] : re(f) ? [
        "div",
        {},
        ["span", e, d(f)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in f ? f._value : f),
        ">"
      ] : Ct(f) ? [
        "div",
        {},
        ["span", e, we(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${et(f) ? " (readonly)" : ""}`
      ] : et(f) ? [
        "div",
        {},
        ["span", e, we(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...i(f.$)
        ];
    }
  };
  function i(f) {
    const _ = [];
    f.type.props && f.props && _.push(s("props", j(f.props))), f.setupState !== K && _.push(s("setup", f.setupState)), f.data !== K && _.push(s("data", j(f.data)));
    const b = u(f, "computed");
    b && _.push(s("computed", b));
    const S = u(f, "inject");
    return S && _.push(s("injected", S)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), _;
  }
  function s(f, _) {
    return _ = oe({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((b) => [
          "div",
          {},
          ["span", o, b + ": "],
          l(_[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, _ = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : te(f) ? ["object", { object: _ ? j(f) : f }] : ["span", n, String(f)];
  }
  function u(f, _) {
    const b = f.type;
    if (R(b))
      return;
    const S = {};
    for (const C in f.ctx)
      h(b, C, _) && (S[C] = f.ctx[C]);
    return S;
  }
  function h(f, _, b) {
    const S = f[b];
    if ($(S) && S.includes(_) || te(S) && _ in S || f.extends && h(f.extends, _, b) || f.mixins && f.mixins.some((C) => h(C, _, b)))
      return !0;
  }
  function d(f) {
    return we(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Yr = "3.5.3", _n = p.NODE_ENV !== "production" ? D : le;
/*! (c) Andrea Giammarchi - ISC */
const Qu = (() => {
  if (typeof window > "u") return class {
  };
  const e = "DOMContentLoaded", t = /* @__PURE__ */ new WeakMap(), n = [], o = (s) => {
    do
      if (s.nextSibling) return !0;
    while (s = s.parentNode);
    return !1;
  }, r = () => {
    n.splice(0).forEach((s) => {
      t.get(s[0]) !== !0 && (t.set(s[0], !0), s[0][s[1]]());
    });
  };
  window.document.addEventListener(e, r);
  class i extends HTMLElement {
    static withParsedCallback(l, u = "parsed") {
      const { prototype: h } = l, { connectedCallback: d } = h, f = u + "Callback", _ = (S, C, X, k) => {
        C.disconnect(), X.removeEventListener(e, k), b(S);
      }, b = (S) => {
        n.length || requestAnimationFrame(r), n.push([S, f]);
      };
      return Object.defineProperties(h, {
        connectedCallback: {
          configurable: !0,
          writable: !0,
          value() {
            if (d && d.apply(this, arguments), f in this && !t.has(this)) {
              const S = this, { ownerDocument: C } = S;
              if (t.set(S, !1), C.readyState === "complete" || o(S))
                b(S);
              else {
                const X = () => _(S, k, C, X);
                C.addEventListener(e, X);
                const k = new MutationObserver(() => {
                  o(S) && _(S, k, C, X);
                });
                k.observe(S.parentNode, {
                  childList: !0,
                  subtree: !0
                });
              }
            }
          }
        },
        [u]: {
          configurable: !0,
          get() {
            return t.get(this) === !0;
          }
        }
      }), l;
    }
  }
  return i.withParsedCallback(i);
})();
var Pt = { cider: "2" };
let Ho;
const zr = typeof window < "u" && window.trustedTypes;
if (zr)
  try {
    Ho = /* @__PURE__ */ zr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Pt.NODE_ENV !== "production" && _n(`Error creating trusted types policy: ${e}`);
  }
const xs = Ho ? (e) => Ho.createHTML(e) : (e) => e, Zu = "http://www.w3.org/2000/svg", ef = "http://www.w3.org/1998/Math/MathML", Qe = typeof document < "u" ? document : null, Xr = Qe && /* @__PURE__ */ Qe.createElement("template"), tf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Qe.createElementNS(Zu, e) : t === "mathml" ? Qe.createElementNS(ef, e) : n ? Qe.createElement(e, { is: n }) : Qe.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Qe.createTextNode(e),
  createComment: (e) => Qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Xr.innerHTML = xs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Xr.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, nf = Symbol("_vtc");
function of(e, t, n) {
  const o = e[nf];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qr = Symbol("_vod"), rf = Symbol("_vsh"), sf = Symbol(Pt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), lf = /(^|;)\s*display\s*:/;
function cf(e, t, n) {
  const o = e.style, r = ie(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && An(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && An(o, s, "");
    for (const s in n)
      s === "display" && (i = !0), An(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[sf];
      s && (n += ";" + s), o.cssText = n, i = lf.test(n);
    }
  } else t && e.removeAttribute("style");
  Qr in e && (e[Qr] = i ? o.display : "", e[rf] && (o.display = "none"));
}
const uf = /[^\\];\s*$/, Zr = /\s*!important$/;
function An(e, t, n) {
  if ($(n))
    n.forEach((o) => An(e, t, o));
  else if (n == null && (n = ""), Pt.NODE_ENV !== "production" && uf.test(n) && _n(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = ff(e, t);
    Zr.test(n) ? e.setProperty(
      Ne(o),
      n.replace(Zr, ""),
      "important"
    ) : e[o] = n;
  }
}
const ei = ["Webkit", "Moz", "ms"], bo = {};
function ff(e, t) {
  const n = bo[t];
  if (n)
    return n;
  let o = Ie(t);
  if (o !== "filter" && o in e)
    return bo[t] = o;
  o = qn(o);
  for (let r = 0; r < ei.length; r++) {
    const i = ei[r] + o;
    if (i in e)
      return bo[t] = i;
  }
  return t;
}
const ti = "http://www.w3.org/1999/xlink";
function ni(e, t, n, o, r, i = Il(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ti, t.slice(6, t.length)) : e.setAttributeNS(ti, t, n) : n == null || i && !mi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Mt(n) ? String(n) : n
  );
}
function af(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? xs(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const s = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = mi(n) : n == null && s === "string" ? (n = "", i = !0) : s === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (s) {
    Pt.NODE_ENV !== "production" && !i && _n(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      s
    );
  }
  i && e.removeAttribute(t);
}
function df(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function pf(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const oi = Symbol("_vei");
function hf(e, t, n, o, r = null) {
  const i = e[oi] || (e[oi] = {}), s = i[t];
  if (o && s)
    s.value = Pt.NODE_ENV !== "production" ? ii(o, t) : o;
  else {
    const [l, u] = _f(t);
    if (o) {
      const h = i[t] = Ef(
        Pt.NODE_ENV !== "production" ? ii(o, t) : o,
        r
      );
      df(e, l, h, u);
    } else s && (pf(e, l, s, u), i[t] = void 0);
  }
}
const ri = /(?:Once|Passive|Capture)$/;
function _f(e) {
  let t;
  if (ri.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ri); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), t];
}
let yo = 0;
const gf = /* @__PURE__ */ Promise.resolve(), mf = () => yo || (gf.then(() => yo = 0), yo = Date.now());
function Ef(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ge(
      bf(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = mf(), n;
}
function ii(e, t) {
  return R(e) || $(e) ? e : (_n(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), le);
}
function bf(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const si = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yf = (e, t, n, o, r, i) => {
  const s = r === "svg";
  t === "class" ? of(e, o, s) : t === "style" ? cf(e, n, o) : un(t) ? $n(t) || hf(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nf(e, t, o, s)) ? (af(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ni(e, t, o, s, i, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ni(e, t, o, s));
};
function Nf(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && si(t) && R(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return si(t) && ie(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !ie(n)));
}
const vf = ["ctrl", "shift", "alt", "meta"], Of = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => vf.some((n) => e[`${n}Key`] && !t.includes(n))
}, wf = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const l = Of[t[s]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  });
}, Df = /* @__PURE__ */ oe({ patchProp: yf }, tf);
let li;
function xf() {
  return li || (li = Eu(Df));
}
const ci = (...e) => {
  xf().render(...e);
}, No = typeof window.__VUE_HMR_RUNTIME__ < "u";
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ui(e, t, n) {
  const o = /* @__PURE__ */ Zn(e);
  class r extends gr {
    constructor(s) {
      super(o, s, t, n);
    }
  }
  return Je(r, "def", o), r;
}
const Vf = typeof HTMLElement < "u" ? Qu : class {
};
class gr extends Vf {
  constructor(n, o = {}, r = {}, i) {
    super();
    /**
     * @internal
     */
    Je(this, "_instance", null);
    Je(this, "_connected", !1);
    Je(this, "_resolved", !1);
    Je(this, "_numberProps", null);
    Je(this, "_styles");
    Je(this, "_slots");
    Je(this, "_ob", null);
    this._def = n, this._props = o, this._config = r, this._config = oe(
      {
        shadowRoot: !0
      },
      this._config
    ), this._config.shadowRoot ? this.shadowRoot && i ? i(this._createVNode(), this._root) : (No && this.shadowRoot && _n(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def)) : i && i(this._createVNode(), this._root);
  }
  get _root() {
    return this._config.shadowRoot ? this.shadowRoot : this;
  }
  connectedCallback() {
    this._config.shadowRoot ? this._connect() : super.connectedCallback();
  }
  // use of parsedCallback when shadowRoot is disabled
  // to wait for slots to be parsed
  // see https://stackoverflow.com/a/52884370
  parsedCallback() {
    this._config.shadowRoot || this._connect();
  }
  _connect() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), ji(() => {
      this._connected || (ci(null, this._root), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const i of r)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const n = (r, i = !1) => {
      const { props: s, styles: l } = r;
      let u;
      if (s && !$(s))
        for (const h in s) {
          const d = s[h];
          (d === Number || d && d.type === Number) && (h in this._props && (this._props[h] = Dr(this._props[h])), (u || (u = /* @__PURE__ */ Object.create(null)))[Ie(h)] = !0);
        }
      this._numberProps = u, i && this._resolveProps(r), this._config.shadowRoot || (this._slots = Array.from(this.children).map(
        (h) => h.cloneNode(!0)
      ), this.replaceChildren()), this._applyStyles(l), this._update();
    }, o = this._def.__asyncLoader;
    o ? o().then((r) => n(r, !0)) : n(this._def);
  }
  _resolveProps(n) {
    const { props: o } = n, r = $(o) ? o : Object.keys(o || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && r.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of r.map(Ie))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(s) {
          this._setProp(i, s);
        }
      });
  }
  _setAttr(n) {
    let o = this.getAttribute(n);
    const r = Ie(n);
    this._numberProps && this._numberProps[r] && (o = Dr(o)), this._setProp(r, o, !1);
  }
  /**
   * @internal
   */
  _getProp(n) {
    return this._props[n];
  }
  /**
   * @internal
   */
  _setProp(n, o, r = !0, i = !0) {
    o !== this._props[n] && (this._props[n] = o, i && this._instance && this._update(), r && (o === !0 ? this.setAttribute(Ne(n), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(Ne(n), o + "") : o || this.removeAttribute(Ne(n))));
  }
  _update() {
    ci(this._createVNode(), this._root);
  }
  _createVNode() {
    let n = null;
    this._config.shadowRoot || (n = () => {
      const r = (i) => {
        const s = {};
        for (let l = 0, u = i.length; l < u; l++) {
          const h = i[l];
          s[h.nodeName] = h.nodeValue;
        }
        return s;
      };
      return this._slots.map((i) => {
        const s = i.attributes ? r(i.attributes) : {};
        return s.innerHTML = i.innerHTML, ae(i.tagName, s, null);
      });
    });
    const o = ae(this._def, oe({}, this._props), n);
    return this._instance || (o.ce = (r) => {
      this._instance = r, this._config.shadowRoot && (r.isCE = !0), No && (r.ceReload = (l) => {
        this._styles && (this._styles.forEach((u) => this._root.removeChild(u)), this._styles.length = 0), this._applyStyles(l), this._instance = null, this._update();
      });
      const i = (l, u) => {
        this.dispatchEvent(
          new CustomEvent(l, {
            detail: u
          })
        );
      };
      r.emit = (l, ...u) => {
        i(l, u), Ne(l) !== l && i(Ne(l), u);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof gr) {
          r.parent = s._instance, r.provides = s._instance.provides;
          break;
        }
    }), o;
  }
  _applyStyles(n) {
    n && n.forEach((o) => {
      const r = document.createElement("style");
      r.textContent = o, this._root.appendChild(r), No && (this._styles || (this._styles = [])).push(r);
    });
  }
}
var fi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, at = {}, Z = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.output = fe.exists = fe.hash = fe.bytes = fe.bool = fe.number = fe.isBytes = void 0;
function Un(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
fe.number = Un;
function Vs(e) {
  if (typeof e != "boolean")
    throw new Error(`boolean expected, not ${e}`);
}
fe.bool = Vs;
function Ss(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
fe.isBytes = Ss;
function mr(e, ...t) {
  if (!Ss(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
fe.bytes = mr;
function Cs(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Un(e.outputLen), Un(e.blockLen);
}
fe.hash = Cs;
function Ts(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
fe.exists = Ts;
function Is(e, t) {
  mr(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
fe.output = Is;
const Sf = { number: Un, bool: Vs, bytes: mr, hash: Cs, exists: Ts, output: Is };
fe.default = Sf;
var M = {};
Object.defineProperty(M, "__esModule", { value: !0 });
M.add5L = M.add5H = M.add4H = M.add4L = M.add3H = M.add3L = M.add = M.rotlBL = M.rotlBH = M.rotlSL = M.rotlSH = M.rotr32L = M.rotr32H = M.rotrBL = M.rotrBH = M.rotrSL = M.rotrSH = M.shrSL = M.shrSH = M.toBig = M.split = M.fromBig = void 0;
const wn = /* @__PURE__ */ BigInt(2 ** 32 - 1), jo = /* @__PURE__ */ BigInt(32);
function Er(e, t = !1) {
  return t ? { h: Number(e & wn), l: Number(e >> jo & wn) } : { h: Number(e >> jo & wn) | 0, l: Number(e & wn) | 0 };
}
M.fromBig = Er;
function As(e, t = !1) {
  let n = new Uint32Array(e.length), o = new Uint32Array(e.length);
  for (let r = 0; r < e.length; r++) {
    const { h: i, l: s } = Er(e[r], t);
    [n[r], o[r]] = [i, s];
  }
  return [n, o];
}
M.split = As;
const $s = (e, t) => BigInt(e >>> 0) << jo | BigInt(t >>> 0);
M.toBig = $s;
const Ps = (e, t, n) => e >>> n;
M.shrSH = Ps;
const Ls = (e, t, n) => e << 32 - n | t >>> n;
M.shrSL = Ls;
const Ms = (e, t, n) => e >>> n | t << 32 - n;
M.rotrSH = Ms;
const Rs = (e, t, n) => e << 32 - n | t >>> n;
M.rotrSL = Rs;
const Hs = (e, t, n) => e << 64 - n | t >>> n - 32;
M.rotrBH = Hs;
const js = (e, t, n) => e >>> n - 32 | t << 64 - n;
M.rotrBL = js;
const Fs = (e, t) => t;
M.rotr32H = Fs;
const ks = (e, t) => e;
M.rotr32L = ks;
const Bs = (e, t, n) => e << n | t >>> 32 - n;
M.rotlSH = Bs;
const Us = (e, t, n) => t << n | e >>> 32 - n;
M.rotlSL = Us;
const Ws = (e, t, n) => t << n - 32 | e >>> 64 - n;
M.rotlBH = Ws;
const Ks = (e, t, n) => e << n - 32 | t >>> 64 - n;
M.rotlBL = Ks;
function qs(e, t, n, o) {
  const r = (t >>> 0) + (o >>> 0);
  return { h: e + n + (r / 2 ** 32 | 0) | 0, l: r | 0 };
}
M.add = qs;
const Gs = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
M.add3L = Gs;
const Js = (e, t, n, o) => t + n + o + (e / 2 ** 32 | 0) | 0;
M.add3H = Js;
const Ys = (e, t, n, o) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (o >>> 0);
M.add4L = Ys;
const zs = (e, t, n, o, r) => t + n + o + r + (e / 2 ** 32 | 0) | 0;
M.add4H = zs;
const Xs = (e, t, n, o, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (o >>> 0) + (r >>> 0);
M.add5L = Xs;
const Qs = (e, t, n, o, r, i) => t + n + o + r + i + (e / 2 ** 32 | 0) | 0;
M.add5H = Qs;
const Cf = {
  fromBig: Er,
  split: As,
  toBig: $s,
  shrSH: Ps,
  shrSL: Ls,
  rotrSH: Ms,
  rotrSL: Rs,
  rotrBH: Hs,
  rotrBL: js,
  rotr32H: Fs,
  rotr32L: ks,
  rotlSH: Bs,
  rotlSL: Us,
  rotlBH: Ws,
  rotlBL: Ks,
  add: qs,
  add3L: Gs,
  add3H: Js,
  add4L: Ys,
  add4H: zs,
  add5H: Qs,
  add5L: Xs
};
M.default = Cf;
var Zs = {}, so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.crypto = void 0;
so.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.byteSwap32 = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = e.isBytes = void 0;
  const t = so, n = fe;
  function o(m) {
    return m instanceof Uint8Array || m != null && typeof m == "object" && m.constructor.name === "Uint8Array";
  }
  e.isBytes = o;
  const r = (m) => new Uint8Array(m.buffer, m.byteOffset, m.byteLength);
  e.u8 = r;
  const i = (m) => new Uint32Array(m.buffer, m.byteOffset, Math.floor(m.byteLength / 4));
  e.u32 = i;
  const s = (m) => new DataView(m.buffer, m.byteOffset, m.byteLength);
  e.createView = s;
  const l = (m, P) => m << 32 - P | m >>> P;
  e.rotr = l;
  const u = (m, P) => m << P | m >>> 32 - P >>> 0;
  e.rotl = u, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const h = (m) => m << 24 & 4278190080 | m << 8 & 16711680 | m >>> 8 & 65280 | m >>> 24 & 255;
  e.byteSwap = h, e.byteSwapIfBE = e.isLE ? (m) => m : (m) => (0, e.byteSwap)(m);
  function d(m) {
    for (let P = 0; P < m.length; P++)
      m[P] = (0, e.byteSwap)(m[P]);
  }
  e.byteSwap32 = d;
  const f = /* @__PURE__ */ Array.from({ length: 256 }, (m, P) => P.toString(16).padStart(2, "0"));
  function _(m) {
    (0, n.bytes)(m);
    let P = "";
    for (let ne = 0; ne < m.length; ne++)
      P += f[m[ne]];
    return P;
  }
  e.bytesToHex = _;
  const b = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function S(m) {
    if (m >= b._0 && m <= b._9)
      return m - b._0;
    if (m >= b._A && m <= b._F)
      return m - (b._A - 10);
    if (m >= b._a && m <= b._f)
      return m - (b._a - 10);
  }
  function C(m) {
    if (typeof m != "string")
      throw new Error("hex string expected, got " + typeof m);
    const P = m.length, ne = P / 2;
    if (P % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + P);
    const q = new Uint8Array(ne);
    for (let G = 0, L = 0; G < ne; G++, L += 2) {
      const F = S(m.charCodeAt(L)), De = S(m.charCodeAt(L + 1));
      if (F === void 0 || De === void 0) {
        const Ht = m[L] + m[L + 1];
        throw new Error('hex string expected, got non-hex character "' + Ht + '" at index ' + L);
      }
      q[G] = F * 16 + De;
    }
    return q;
  }
  e.hexToBytes = C;
  const X = async () => {
  };
  e.nextTick = X;
  async function k(m, P, ne) {
    let q = Date.now();
    for (let G = 0; G < m; G++) {
      ne(G);
      const L = Date.now() - q;
      L >= 0 && L < P || (await (0, e.nextTick)(), q += L);
    }
  }
  e.asyncLoop = k;
  function ee(m) {
    if (typeof m != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof m}`);
    return new Uint8Array(new TextEncoder().encode(m));
  }
  e.utf8ToBytes = ee;
  function B(m) {
    return typeof m == "string" && (m = ee(m)), (0, n.bytes)(m), m;
  }
  e.toBytes = B;
  function _e(...m) {
    let P = 0;
    for (let q = 0; q < m.length; q++) {
      const G = m[q];
      (0, n.bytes)(G), P += G.length;
    }
    const ne = new Uint8Array(P);
    for (let q = 0, G = 0; q < m.length; q++) {
      const L = m[q];
      ne.set(L, G), G += L.length;
    }
    return ne;
  }
  e.concatBytes = _e;
  class I {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = I;
  const se = {}.toString;
  function ve(m, P) {
    if (P !== void 0 && se.call(P) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(m, P);
  }
  e.checkOpts = ve;
  function ue(m) {
    const P = (q) => m().update(B(q)).digest(), ne = m();
    return P.outputLen = ne.outputLen, P.blockLen = ne.blockLen, P.create = () => m(), P;
  }
  e.wrapConstructor = ue;
  function pe(m) {
    const P = (q, G) => m(G).update(B(q)).digest(), ne = m({});
    return P.outputLen = ne.outputLen, P.blockLen = ne.blockLen, P.create = (q) => m(q), P;
  }
  e.wrapConstructorWithOpts = pe;
  function Pe(m) {
    const P = (q, G) => m(G).update(B(q)).digest(), ne = m({});
    return P.outputLen = ne.outputLen, P.blockLen = ne.blockLen, P.create = (q) => m(q), P;
  }
  e.wrapXOFConstructorWithOpts = Pe;
  function Fe(m = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(m));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = Fe;
})(Zs);
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.shake256 = Z.shake128 = Z.keccak_512 = Z.keccak_384 = Z.keccak_256 = Z.keccak_224 = Z.sha3_512 = Z.sha3_384 = Z.sha3_256 = Z.sha3_224 = Z.Keccak = Z.keccakP = void 0;
const wt = fe, cn = M, Ze = Zs, el = [], tl = [], nl = [], Tf = /* @__PURE__ */ BigInt(0), Gt = /* @__PURE__ */ BigInt(1), If = /* @__PURE__ */ BigInt(2), Af = /* @__PURE__ */ BigInt(7), $f = /* @__PURE__ */ BigInt(256), Pf = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Gt, n = 1, o = 0; e < 24; e++) {
  [n, o] = [o, (2 * n + 3 * o) % 5], el.push(2 * (5 * o + n)), tl.push((e + 1) * (e + 2) / 2 % 64);
  let r = Tf;
  for (let i = 0; i < 7; i++)
    t = (t << Gt ^ (t >> Af) * Pf) % $f, t & If && (r ^= Gt << (Gt << /* @__PURE__ */ BigInt(i)) - Gt);
  nl.push(r);
}
const [Lf, Mf] = /* @__PURE__ */ (0, cn.split)(nl, !0), ai = (e, t, n) => n > 32 ? (0, cn.rotlBH)(e, t, n) : (0, cn.rotlSH)(e, t, n), di = (e, t, n) => n > 32 ? (0, cn.rotlBL)(e, t, n) : (0, cn.rotlSL)(e, t, n);
function ol(e, t = 24) {
  const n = new Uint32Array(10);
  for (let o = 24 - t; o < 24; o++) {
    for (let s = 0; s < 10; s++)
      n[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const l = (s + 8) % 10, u = (s + 2) % 10, h = n[u], d = n[u + 1], f = ai(h, d, 1) ^ n[l], _ = di(h, d, 1) ^ n[l + 1];
      for (let b = 0; b < 50; b += 10)
        e[s + b] ^= f, e[s + b + 1] ^= _;
    }
    let r = e[2], i = e[3];
    for (let s = 0; s < 24; s++) {
      const l = tl[s], u = ai(r, i, l), h = di(r, i, l), d = el[s];
      r = e[d], i = e[d + 1], e[d] = u, e[d + 1] = h;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let l = 0; l < 10; l++)
        n[l] = e[s + l];
      for (let l = 0; l < 10; l++)
        e[s + l] ^= ~n[(l + 2) % 10] & n[(l + 4) % 10];
    }
    e[0] ^= Lf[o], e[1] ^= Mf[o];
  }
  n.fill(0);
}
Z.keccakP = ol;
class gn extends Ze.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, o, r = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = o, this.enableXOF = r, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, wt.number)(o), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Ze.u32)(this.state);
  }
  keccak() {
    Ze.isLE || (0, Ze.byteSwap32)(this.state32), ol(this.state32, this.rounds), Ze.isLE || (0, Ze.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, wt.exists)(this);
    const { blockLen: n, state: o } = this;
    t = (0, Ze.toBytes)(t);
    const r = t.length;
    for (let i = 0; i < r; ) {
      const s = Math.min(n - this.pos, r - i);
      for (let l = 0; l < s; l++)
        o[this.pos++] ^= t[i++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: o, blockLen: r } = this;
    t[o] ^= n, n & 128 && o === r - 1 && this.keccak(), t[r - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    (0, wt.exists)(this, !1), (0, wt.bytes)(t), this.finish();
    const n = this.state, { blockLen: o } = this;
    for (let r = 0, i = t.length; r < i; ) {
      this.posOut >= o && this.keccak();
      const s = Math.min(o - this.posOut, i - r);
      t.set(n.subarray(this.posOut, this.posOut + s), r), this.posOut += s, r += s;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return (0, wt.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, wt.output)(t, this), this.finished)
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
    const { blockLen: n, suffix: o, outputLen: r, rounds: i, enableXOF: s } = this;
    return t || (t = new gn(n, o, r, s, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = o, t.outputLen = r, t.enableXOF = s, t.destroyed = this.destroyed, t;
  }
}
Z.Keccak = gn;
const dt = (e, t, n) => (0, Ze.wrapConstructor)(() => new gn(t, e, n));
Z.sha3_224 = dt(6, 144, 224 / 8);
Z.sha3_256 = dt(6, 136, 256 / 8);
Z.sha3_384 = dt(6, 104, 384 / 8);
Z.sha3_512 = dt(6, 72, 512 / 8);
Z.keccak_224 = dt(1, 144, 224 / 8);
Z.keccak_256 = dt(1, 136, 256 / 8);
Z.keccak_384 = dt(1, 104, 384 / 8);
Z.keccak_512 = dt(1, 72, 512 / 8);
const rl = (e, t, n) => (0, Ze.wrapXOFConstructorWithOpts)((o = {}) => new gn(t, e, o.dkLen === void 0 ? n : o.dkLen, !0));
Z.shake128 = rl(31, 168, 128 / 8);
Z.shake256 = rl(31, 136, 256 / 8);
const { sha3_512: Rf } = Z, il = 24, tn = 32, Fo = (e = 4, t = Math.random) => {
  let n = "";
  for (; n.length < e; )
    n = n + Math.floor(t() * 36).toString(36);
  return n;
};
function sl(e) {
  let t = 8n, n = 0n;
  for (const o of e.values()) {
    const r = BigInt(o);
    n = (n << t) + r;
  }
  return n;
}
const ll = (e = "") => sl(Rf(e)).toString(36).slice(1), pi = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Hf = (e) => pi[Math.floor(e() * pi.length)], cl = ({
  globalObj: e = typeof fi < "u" ? fi : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const n = Object.keys(e).toString(), o = n.length ? n + Fo(tn, t) : Fo(tn, t);
  return ll(o).substring(0, tn);
}, ul = (e) => () => e++, jf = 476782367, fl = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = ul(Math.floor(e() * jf)),
  length: n = il,
  fingerprint: o = cl({ random: e })
} = {}) => function() {
  const i = Hf(e), s = Date.now().toString(36), l = t().toString(36), u = Fo(n, e), h = `${s + u + l + o}`;
  return `${i + ll(h).substring(1, n)}`;
}, Ff = fl(), kf = (e, { minLength: t = 2, maxLength: n = tn } = {}) => {
  const o = e.length, r = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && o >= t && o <= n && r.test(e))
      return !0;
  } finally {
  }
  return !1;
};
at.getConstants = () => ({ defaultLength: il, bigLength: tn });
at.init = fl;
at.createId = Ff;
at.bufToBigInt = sl;
at.createCounter = ul;
at.createFingerprint = cl;
at.isCuid = kf;
const { createId: Bf, init: va, getConstants: Oa, isCuid: wa } = at;
var Uf = Bf;
const al = {
  ce_prefix: Uf(),
  identifier: "dev.booploops.centered-immersive",
  name: "Centered Immersive Lyrics Layout",
  description: "Adds a visualizer to the app.",
  version: "0.0.1",
  author: "booploops",
  repo: "https://github.com/booploops/Cider-Centered-Lyrics",
  entry: {
    "plugin.js": {
      type: "main"
    }
  }
};
function Wf() {
  return al;
}
function vo(e) {
  return `${Wf().ce_prefix}-${e}`;
}
var Kf = { cider: "2" };
function qf() {
  Xu();
}
Kf.NODE_ENV !== "production" && qf();
const lo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Gf = {}, Jf = { class: "q-px-lg plugin-base" };
function Yf(e, t) {
  return pn(), oo("div", Jf);
}
const zf = /* @__PURE__ */ lo(Gf, [["render", Yf]]);
function Xf(e) {
  return __PLUGINSYS__.Components.ImmersiveLayouts.addLayout(e);
}
const Qf = /* @__PURE__ */ Zn({
  __name: "CComponent",
  props: {
    name: {},
    componentProps: {}
  },
  setup(e) {
    const t = $t();
    let n;
    const o = e;
    function r() {
      t.value && (n = __PLUGINSYS__.App.RenderComponent({
        component: o.name,
        element: t.value,
        props: o.componentProps
      }));
    }
    return to(() => {
      n.unmount && n.unmount();
    }), lr(r), At(o, r), (i, s) => (pn(), oo("div", {
      ref_key: "ElRef",
      ref: t,
      class: "__CComponent__"
    }, null, 512));
  }
}), xt = /* @__PURE__ */ lo(Qf, [["__scopeId", "data-v-664def8e"]]);
function Zf(e) {
  return Ei() ? ($l(e), !0) : !1;
}
function br(e) {
  return typeof e == "function" ? e() : Qt(e);
}
const ea = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ta = Object.prototype.toString, na = (e) => ta.call(e) === "[object Object]", hi = () => +Date.now(), ko = () => {
};
function oa(e, t) {
  function n(...o) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(i);
    });
  }
  return n;
}
function ra(...e) {
  let t = 0, n, o = !0, r = ko, i, s, l, u, h;
  !re(e[0]) && typeof e[0] == "object" ? { delay: s, trailing: l = !0, leading: u = !0, rejectOnCancel: h = !1 } = e[0] : [s, l = !0, u = !0, h = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, r(), r = ko);
  };
  return (_) => {
    const b = br(s), S = Date.now() - t, C = () => i = _();
    return d(), b <= 0 ? (t = Date.now(), C()) : (S > b && (u || !o) ? (t = Date.now(), C()) : l && (i = new Promise((X, k) => {
      r = h ? k : X, n = setTimeout(() => {
        t = Date.now(), o = !0, X(C()), d();
      }, Math.max(0, b - S));
    })), !u && !n && (n = setTimeout(() => o = !0, b)), o = !1, i);
  };
}
function ia(e) {
  var t;
  const n = br(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const dl = ea ? window : void 0;
function _i(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = dl) : [t, n, o, r] = e, !t)
    return ko;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], s = () => {
    i.forEach((d) => d()), i.length = 0;
  }, l = (d, f, _, b) => (d.addEventListener(f, _, b), () => d.removeEventListener(f, _, b)), u = At(
    () => [ia(t), br(r)],
    ([d, f]) => {
      if (s(), !d)
        return;
      const _ = na(f) ? { ...f } : f;
      i.push(
        ...n.flatMap((b) => o.map((S) => l(d, b, S, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    u(), s();
  };
  return Zf(h), h;
}
const sa = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"], la = 6e4;
function ca(e = la, t = {}) {
  const {
    initialState: n = !1,
    listenForVisibilityChange: o = !0,
    events: r = sa,
    window: i = dl,
    eventFilter: s = ra(50)
  } = t, l = $t(n), u = $t(hi());
  let h;
  const d = () => {
    l.value = !1, clearTimeout(h), h = setTimeout(() => l.value = !0, e);
  }, f = oa(
    s,
    () => {
      u.value = hi(), d();
    }
  );
  if (i) {
    const _ = i.document;
    for (const b of r)
      _i(i, b, f, { passive: !0 });
    o && _i(_, "visibilitychange", () => {
      _.hidden || f();
    }), d();
  }
  return {
    idle: l,
    lastActive: u,
    reset: d
  };
}
const ua = { class: "idrawer-popout" }, fa = /* @__PURE__ */ Zn({
  __name: "ImmersiveDrawer",
  props: {
    modelValue: { type: Boolean },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = xu(e, "modelValue");
    return (n, o) => t.value ? (pn(), oo("div", {
      key: 0,
      class: "idrawer-container",
      onClick: o[0] || (o[0] = wf((r) => t.value = !1, ["self"]))
    }, [
      $e("div", ua, [
        ae(xt, { name: "AMQueue" })
      ])
    ])) : Hu("", !0);
  }
}), aa = /* @__PURE__ */ lo(fa, [["__scopeId", "data-v-af40e4c9"]]), da = { class: "my-layout plugin-base" }, pa = { class: "main-content" }, ha = { class: "right-side" }, _a = { class: "artwork" }, ga = { class: "metadata-display" }, ma = { class: "controls" }, Ea = /* @__PURE__ */ Zn({
  __name: "CustomImmersiveLayout",
  setup(e) {
    const { idle: t } = ca(1e3), n = Ds(() => !t.value);
    At(n, (s) => {
      s ? i() : r();
    });
    const o = $t(!1);
    function r() {
      var s;
      (s = document.querySelector(".immersive-tabs")) == null || s.classList.add("hidden");
    }
    function i() {
      var s;
      (s = document.querySelector(".immersive-tabs")) == null || s.classList.remove("hidden");
    }
    return lr(() => {
    }), to(() => {
    }), (s, l) => (pn(), oo(Me, null, [
      $e("div", da, [
        $e("div", pa, [
          l[2] || (l[2] = $e("div", { class: "left-side" }, null, -1)),
          $e("div", ha, [
            ae(xt, { name: "ImmersiveLyricView" })
          ])
        ]),
        $e("div", {
          class: Gn(["player-container", {
            "is-idle": Qt(t)
          }])
        }, [
          $e("div", _a, [
            ae(xt, { name: "ImmersiveArtwork" })
          ]),
          $e("div", ga, [
            ae(xt, { name: "AMPMetadataMojave" })
          ]),
          $e("div", ma, [
            ae(xt, {
              name: "MojavePlayer",
              "component-props": {
                noArtwork: !0
              }
            })
          ]),
          $e("button", {
            class: "config-button",
            onClick: l[0] || (l[0] = (u) => o.value = !Qt(o))
          }, [
            ae(xt, {
              name: "QIcon",
              "component-props": {
                name: "svguse:cider-assets/cider-icons/icons.svg#queue-music"
              }
            })
          ])
        ], 2)
      ]),
      ae(aa, {
        modelValue: Qt(o),
        "onUpdate:modelValue": l[1] || (l[1] = (u) => re(o) ? o.value = u : null)
      }, null, 8, ["modelValue"])
    ], 64));
  }
}), ba = /* @__PURE__ */ lo(Ea, [["__scopeId", "data-v-f1b93843"]]), ya = {
  "plugin-settings": /* @__PURE__ */ ui(zf, {
    shadowRoot: !1
  }),
  "immersive-layout": /* @__PURE__ */ ui(ba, {
    shadowRoot: !1
  })
}, Da = {
  name: "Centered Immersive Lyrics",
  identifier: al.identifier,
  /**
   * Defining our custom settings panel element
   */
  SettingsElement: vo("plugin-settings"),
  /**
   * Initial setup function that is executed when the plugin is loaded
   */
  setup() {
    for (const [e, t] of Object.entries(ya)) {
      const n = e;
      customElements.define(vo(n), t);
    }
    Xf({
      name: "Centered Lyrics",
      identifier: "booploops-centered-lyrics",
      component: vo("immersive-layout"),
      type: "normal"
    });
  }
};
export {
  ya as CustomElements,
  Da as default
};
