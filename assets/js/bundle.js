var app = (function () {
  "use strict";
  function t() {}
  const e = (t) => t;
  function i(t, e) {
    for (const i in e) t[i] = e[i];
    return t;
  }
  function n(t) {
    return t();
  }
  function r() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(n);
  }
  function s(t) {
    return "function" == typeof t;
  }
  function a(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  let l;
  function h(t, e) {
    return l || (l = document.createElement("a")), (l.href = e), t === l.href;
  }
  function u(t, e) {
    return t != t ? e == e : t !== e;
  }
  function c(e, i, n) {
    e.$$.on_destroy.push(
      (function (e, ...i) {
        if (null == e) return t;
        const n = e.subscribe(...i);
        return n.unsubscribe ? () => n.unsubscribe() : n;
      })(i, n)
    );
  }
  function p(t, e, i, n) {
    if (t) {
      const r = f(t, e, i, n);
      return t[0](r);
    }
  }
  function f(t, e, n, r) {
    return t[1] && r ? i(n.ctx.slice(), t[1](r(e))) : n.ctx;
  }
  function d(t, e, i, n) {
    if (t[2] && n) {
      const r = t[2](n(i));
      if (void 0 === e.dirty) return r;
      if ("object" == typeof r) {
        const t = [],
          i = Math.max(e.dirty.length, r.length);
        for (let n = 0; n < i; n += 1) t[n] = e.dirty[n] | r[n];
        return t;
      }
      return e.dirty | r;
    }
    return e.dirty;
  }
  function v(t, e, i, n, r, o) {
    if (r) {
      const s = f(e, i, n, o);
      t.p(s, r);
    }
  }
  function m(t) {
    if (t.ctx.length > 32) {
      const e = [],
        i = t.ctx.length / 32;
      for (let t = 0; t < i; t++) e[t] = -1;
      return e;
    }
    return -1;
  }
  function y(t) {
    const e = {};
    for (const i in t) "$" !== i[0] && (e[i] = t[i]);
    return e;
  }
  function g(t) {
    return null == t ? "" : t;
  }
  function w(e) {
    return e && s(e.destroy) ? e.destroy : t;
  }
  const b = "undefined" != typeof window;
  let $ = b ? () => window.performance.now() : () => Date.now(),
    x = b ? (t) => requestAnimationFrame(t) : t;
  const _ = new Set();
  function M(t) {
    _.forEach((e) => {
      e.c(t) || (_.delete(e), e.f());
    }),
      0 !== _.size && x(M);
  }
  function k(t) {
    let e;
    return (
      0 === _.size && x(M),
      {
        promise: new Promise((i) => {
          _.add((e = { c: t, f: i }));
        }),
        abort() {
          _.delete(e);
        },
      }
    );
  }
  function S(t, e) {
    t.appendChild(e);
  }
  function C(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument;
  }
  function L(t) {
    const e = j("style");
    return (
      (function (t, e) {
        S(t.head || t, e);
      })(C(t), e),
      e.sheet
    );
  }
  function D(t, e, i) {
    t.insertBefore(e, i || null);
  }
  function A(t) {
    t.parentNode.removeChild(t);
  }
  function T(t, e) {
    for (let i = 0; i < t.length; i += 1) t[i] && t[i].d(e);
  }
  function j(t) {
    return document.createElement(t);
  }
  function O(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function E(t) {
    return document.createTextNode(t);
  }
  function P() {
    return E(" ");
  }
  function N() {
    return E("");
  }
  function R(t, e, i, n) {
    return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
  }
  function B(t, e, i) {
    null == i
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== i && t.setAttribute(e, i);
  }
  function W(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function z(t, e, i, n) {
    null === i
      ? t.style.removeProperty(e)
      : t.style.setProperty(e, i, n ? "important" : "");
  }
  let H;
  function F() {
    if (void 0 === H) {
      H = !1;
      try {
        "undefined" != typeof window && window.parent && window.parent.document;
      } catch (t) {
        H = !0;
      }
    }
    return H;
  }
  function U(t, e) {
    "static" === getComputedStyle(t).position &&
      (t.style.position = "relative");
    const i = j("iframe");
    i.setAttribute(
      "style",
      "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
    ),
      i.setAttribute("aria-hidden", "true"),
      (i.tabIndex = -1);
    const n = F();
    let r;
    return (
      n
        ? ((i.src =
            "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
          (r = R(window, "message", (t) => {
            t.source === i.contentWindow && e();
          })))
        : ((i.src = "about:blank"),
          (i.onload = () => {
            r = R(i.contentWindow, "resize", e);
          })),
      S(t, i),
      () => {
        (n || (r && i.contentWindow)) && r(), A(i);
      }
    );
  }
  function V(t, e, i) {
    t.classList[i ? "add" : "remove"](e);
  }
  function I(t, e, i = !1) {
    const n = document.createEvent("CustomEvent");
    return n.initCustomEvent(t, i, !1, e), n;
  }
  const q = new Map();
  let X,
    G = 0;
  function J(t, e, i, n, r, o, s, a = 0) {
    const l = 16.666 / n;
    let h = "{\n";
    for (let t = 0; t <= 1; t += l) {
      const n = e + (i - e) * o(t);
      h += 100 * t + `%{${s(n, 1 - n)}}\n`;
    }
    const u = h + `100% {${s(i, 1 - i)}}\n}`,
      c = `__svelte_${(function (t) {
        let e = 5381,
          i = t.length;
        for (; i--; ) e = ((e << 5) - e) ^ t.charCodeAt(i);
        return e >>> 0;
      })(u)}_${a}`,
      p = C(t),
      { stylesheet: f, rules: d } =
        q.get(p) ||
        (function (t, e) {
          const i = { stylesheet: L(e), rules: {} };
          return q.set(t, i), i;
        })(p, t);
    d[c] ||
      ((d[c] = !0), f.insertRule(`@keyframes ${c} ${u}`, f.cssRules.length));
    const v = t.style.animation || "";
    return (
      (t.style.animation = `${
        v ? `${v}, ` : ""
      }${c} ${n}ms linear ${r}ms 1 both`),
      (G += 1),
      c
    );
  }
  function Y(t, e) {
    const i = (t.style.animation || "").split(", "),
      n = i.filter(
        e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte")
      ),
      r = i.length - n.length;
    r &&
      ((t.style.animation = n.join(", ")),
      (G -= r),
      G ||
        x(() => {
          G ||
            (q.forEach((t) => {
              const { stylesheet: e } = t;
              let i = e.cssRules.length;
              for (; i--; ) e.deleteRule(i);
              t.rules = {};
            }),
            q.clear());
        }));
  }
  function Z(t) {
    X = t;
  }
  function K() {
    if (!X) throw new Error("Function called outside component initialization");
    return X;
  }
  function Q(t) {
    K().$$.on_mount.push(t);
  }
  function tt() {
    const t = K();
    return (e, i) => {
      const n = t.$$.callbacks[e];
      if (n) {
        const r = I(e, i);
        n.slice().forEach((e) => {
          e.call(t, r);
        });
      }
    };
  }
  function et(t, e) {
    K().$$.context.set(t, e);
  }
  function it(t, e) {
    const i = t.$$.callbacks[e.type];
    i && i.slice().forEach((t) => t.call(this, e));
  }
  const nt = [],
    rt = [],
    ot = [],
    st = [],
    at = Promise.resolve();
  let lt = !1;
  function ht(t) {
    ot.push(t);
  }
  const ut = new Set();
  let ct,
    pt = 0;
  function ft() {
    const t = X;
    do {
      for (; pt < nt.length; ) {
        const t = nt[pt];
        pt++, Z(t), dt(t.$$);
      }
      for (Z(null), nt.length = 0, pt = 0; rt.length; ) rt.pop()();
      for (let t = 0; t < ot.length; t += 1) {
        const e = ot[t];
        ut.has(e) || (ut.add(e), e());
      }
      ot.length = 0;
    } while (nt.length);
    for (; st.length; ) st.pop()();
    (lt = !1), ut.clear(), Z(t);
  }
  function dt(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(ht);
    }
  }
  function vt() {
    return (
      ct ||
        ((ct = Promise.resolve()),
        ct.then(() => {
          ct = null;
        })),
      ct
    );
  }
  function mt(t, e, i) {
    t.dispatchEvent(I(`${e ? "intro" : "outro"}${i}`));
  }
  const yt = new Set();
  let gt;
  function wt() {
    gt = { r: 0, c: [], p: gt };
  }
  function bt() {
    gt.r || o(gt.c), (gt = gt.p);
  }
  function $t(t, e) {
    t && t.i && (yt.delete(t), t.i(e));
  }
  function xt(t, e, i, n) {
    if (t && t.o) {
      if (yt.has(t)) return;
      yt.add(t),
        gt.c.push(() => {
          yt.delete(t), n && (i && t.d(1), n());
        }),
        t.o(e);
    }
  }
  const _t = { duration: 0 };
  function Mt(i, n, r) {
    let o,
      a,
      l = n(i, r),
      h = !1,
      u = 0;
    function c() {
      o && Y(i, o);
    }
    function p() {
      const {
        delay: n = 0,
        duration: r = 300,
        easing: s = e,
        tick: p = t,
        css: f,
      } = l || _t;
      f && (o = J(i, 0, 1, r, n, s, f, u++)), p(0, 1);
      const d = $() + n,
        v = d + r;
      a && a.abort(),
        (h = !0),
        ht(() => mt(i, !0, "start")),
        (a = k((t) => {
          if (h) {
            if (t >= v) return p(1, 0), mt(i, !0, "end"), c(), (h = !1);
            if (t >= d) {
              const e = s((t - d) / r);
              p(e, 1 - e);
            }
          }
          return h;
        }));
    }
    let f = !1;
    return {
      start() {
        f || ((f = !0), Y(i), s(l) ? ((l = l()), vt().then(p)) : p());
      },
      invalidate() {
        f = !1;
      },
      end() {
        h && (c(), (h = !1));
      },
    };
  }
  function kt(i, n, r) {
    let a,
      l = n(i, r),
      h = !0;
    const u = gt;
    function c() {
      const {
        delay: n = 0,
        duration: r = 300,
        easing: s = e,
        tick: c = t,
        css: p,
      } = l || _t;
      p && (a = J(i, 1, 0, r, n, s, p));
      const f = $() + n,
        d = f + r;
      ht(() => mt(i, !1, "start")),
        k((t) => {
          if (h) {
            if (t >= d) return c(0, 1), mt(i, !1, "end"), --u.r || o(u.c), !1;
            if (t >= f) {
              const e = s((t - f) / r);
              c(1 - e, e);
            }
          }
          return h;
        });
    }
    return (
      (u.r += 1),
      s(l)
        ? vt().then(() => {
            (l = l()), c();
          })
        : c(),
      {
        end(t) {
          t && l.tick && l.tick(1, 0), h && (a && Y(i, a), (h = !1));
        },
      }
    );
  }
  function St(i, n, r, a) {
    let l = n(i, r),
      h = a ? 0 : 1,
      u = null,
      c = null,
      p = null;
    function f() {
      p && Y(i, p);
    }
    function d(t, e) {
      const i = t.b - h;
      return (
        (e *= Math.abs(i)),
        {
          a: h,
          b: t.b,
          d: i,
          duration: e,
          start: t.start,
          end: t.start + e,
          group: t.group,
        }
      );
    }
    function v(n) {
      const {
          delay: r = 0,
          duration: s = 300,
          easing: a = e,
          tick: v = t,
          css: m,
        } = l || _t,
        y = { start: $() + r, b: n };
      n || ((y.group = gt), (gt.r += 1)),
        u || c
          ? (c = y)
          : (m && (f(), (p = J(i, h, n, s, r, a, m))),
            n && v(0, 1),
            (u = d(y, s)),
            ht(() => mt(i, n, "start")),
            k((t) => {
              if (
                (c &&
                  t > c.start &&
                  ((u = d(c, s)),
                  (c = null),
                  mt(i, u.b, "start"),
                  m && (f(), (p = J(i, h, u.b, u.duration, 0, a, l.css)))),
                u)
              )
                if (t >= u.end)
                  v((h = u.b), 1 - h),
                    mt(i, u.b, "end"),
                    c || (u.b ? f() : --u.group.r || o(u.group.c)),
                    (u = null);
                else if (t >= u.start) {
                  const e = t - u.start;
                  (h = u.a + u.d * a(e / u.duration)), v(h, 1 - h);
                }
              return !(!u && !c);
            }));
    }
    return {
      run(t) {
        s(l)
          ? vt().then(() => {
              (l = l()), v(t);
            })
          : v(t);
      },
      end() {
        f(), (u = c = null);
      },
    };
  }
  const Ct =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;
  function Lt(t, e) {
    xt(t, 1, 1, () => {
      e.delete(t.key);
    });
  }
  function Dt(t, e, i, n, r, o, s, a, l, h, u, c) {
    let p = t.length,
      f = o.length,
      d = p;
    const v = {};
    for (; d--; ) v[t[d].key] = d;
    const m = [],
      y = new Map(),
      g = new Map();
    for (d = f; d--; ) {
      const t = c(r, o, d),
        a = i(t);
      let l = s.get(a);
      l ? n && l.p(t, e) : ((l = h(a, t)), l.c()),
        y.set(a, (m[d] = l)),
        a in v && g.set(a, Math.abs(d - v[a]));
    }
    const w = new Set(),
      b = new Set();
    function $(t) {
      $t(t, 1), t.m(a, u), s.set(t.key, t), (u = t.first), f--;
    }
    for (; p && f; ) {
      const e = m[f - 1],
        i = t[p - 1],
        n = e.key,
        r = i.key;
      e === i
        ? ((u = e.first), p--, f--)
        : y.has(r)
        ? !s.has(n) || w.has(n)
          ? $(e)
          : b.has(r)
          ? p--
          : g.get(n) > g.get(r)
          ? (b.add(n), $(e))
          : (w.add(r), p--)
        : (l(i, s), p--);
    }
    for (; p--; ) {
      const e = t[p];
      y.has(e.key) || l(e, s);
    }
    for (; f; ) $(m[f - 1]);
    return m;
  }
  function At(t, e) {
    const i = {},
      n = {},
      r = { $$scope: 1 };
    let o = t.length;
    for (; o--; ) {
      const s = t[o],
        a = e[o];
      if (a) {
        for (const t in s) t in a || (n[t] = 1);
        for (const t in a) r[t] || ((i[t] = a[t]), (r[t] = 1));
        t[o] = a;
      } else for (const t in s) r[t] = 1;
    }
    for (const t in n) t in i || (i[t] = void 0);
    return i;
  }
  function Tt(t) {
    return "object" == typeof t && null !== t ? t : {};
  }
  function jt(t) {
    t && t.c();
  }
  function Ot(t, e, i, r) {
    const { fragment: a, on_mount: l, on_destroy: h, after_update: u } = t.$$;
    a && a.m(e, i),
      r ||
        ht(() => {
          const e = l.map(n).filter(s);
          h ? h.push(...e) : o(e), (t.$$.on_mount = []);
        }),
      u.forEach(ht);
  }
  function Et(t, e) {
    const i = t.$$;
    null !== i.fragment &&
      (o(i.on_destroy),
      i.fragment && i.fragment.d(e),
      (i.on_destroy = i.fragment = null),
      (i.ctx = []));
  }
  function Pt(t, e) {
    -1 === t.$$.dirty[0] &&
      (nt.push(t), lt || ((lt = !0), at.then(ft)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Nt(e, i, n, s, a, l, h, u = [-1]) {
    const c = X;
    Z(e);
    const p = (e.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: t,
      not_equal: a,
      bound: r(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(i.context || (c ? c.$$.context : [])),
      callbacks: r(),
      dirty: u,
      skip_bound: !1,
      root: i.target || c.$$.root,
    });
    h && h(p.root);
    let f = !1;
    if (
      ((p.ctx = n
        ? n(e, i.props || {}, (t, i, ...n) => {
            const r = n.length ? n[0] : i;
            return (
              p.ctx &&
                a(p.ctx[t], (p.ctx[t] = r)) &&
                (!p.skip_bound && p.bound[t] && p.bound[t](r), f && Pt(e, t)),
              i
            );
          })
        : []),
      p.update(),
      (f = !0),
      o(p.before_update),
      (p.fragment = !!s && s(p.ctx)),
      i.target)
    ) {
      if (i.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(i.target);
        p.fragment && p.fragment.l(t), t.forEach(A);
      } else p.fragment && p.fragment.c();
      i.intro && $t(e.$$.fragment),
        Ot(e, i.target, i.anchor, i.customElement),
        ft();
    }
    Z(c);
  }
  class Rt {
    $destroy() {
      Et(this, 1), (this.$destroy = t);
    }
    $on(t, e) {
      const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        i.push(e),
        () => {
          const t = i.indexOf(e);
          -1 !== t && i.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function Bt(t) {
    return Math.sin((t * Math.PI) / 2);
  }
  function Wt(t, { delay: i = 0, duration: n = 400, easing: r = e } = {}) {
    const o = +getComputedStyle(t).opacity;
    return {
      delay: i,
      duration: n,
      easing: r,
      css: (t) => "opacity: " + t * o,
    };
  }
  const { window: zt } = Ct;
  function Ht(t) {
    let e,
      i,
      n,
      r,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y,
      w,
      b,
      $ = t[1].closeButton && Ft(t);
    var x = t[2];
    return (
      x && (l = new x({})),
      {
        c() {
          (e = j("div")),
            (i = j("div")),
            (n = j("div")),
            $ && $.c(),
            (r = P()),
            (a = j("div")),
            l && jt(l.$$.fragment),
            B(a, "class", (h = g(t[1].classContent) + " svelte-g4wg3a")),
            B(a, "style", t[9]),
            V(a, "content", !t[0]),
            B(n, "class", (u = g(t[1].classWindow) + " svelte-g4wg3a")),
            B(n, "role", "dialog"),
            B(n, "aria-modal", "true"),
            B(
              n,
              "aria-label",
              (c = t[1].ariaLabelledBy ? null : t[1].ariaLabel || null)
            ),
            B(n, "aria-labelledby", (p = t[1].ariaLabelledBy || null)),
            B(n, "style", t[8]),
            V(n, "window", !t[0]),
            B(i, "class", (d = g(t[1].classWindowWrap) + " svelte-g4wg3a")),
            B(i, "style", t[7]),
            V(i, "wrap", !t[0]),
            B(e, "class", (v = g(t[1].classBg) + " svelte-g4wg3a")),
            B(e, "style", t[6]),
            V(e, "bg", !t[0]);
        },
        m(o, h) {
          D(o, e, h),
            S(e, i),
            S(i, n),
            $ && $.m(n, null),
            S(n, r),
            S(n, a),
            l && Ot(l, a, null),
            t[48](n),
            t[49](i),
            t[50](e),
            (y = !0),
            w ||
              ((b = [
                R(n, "introstart", function () {
                  s(t[13]) && t[13].apply(this, arguments);
                }),
                R(n, "outrostart", function () {
                  s(t[14]) && t[14].apply(this, arguments);
                }),
                R(n, "introend", function () {
                  s(t[15]) && t[15].apply(this, arguments);
                }),
                R(n, "outroend", function () {
                  s(t[16]) && t[16].apply(this, arguments);
                }),
                R(e, "mousedown", t[20]),
                R(e, "mouseup", t[21]),
              ]),
              (w = !0));
        },
        p(o, s) {
          if (
            ((t = o)[1].closeButton
              ? $
                ? ($.p(t, s), 2 & s[0] && $t($, 1))
                : (($ = Ft(t)), $.c(), $t($, 1), $.m(n, r))
              : $ &&
                (wt(),
                xt($, 1, 1, () => {
                  $ = null;
                }),
                bt()),
            x !== (x = t[2]))
          ) {
            if (l) {
              wt();
              const t = l;
              xt(t.$$.fragment, 1, 0, () => {
                Et(t, 1);
              }),
                bt();
            }
            x
              ? ((l = new x({})),
                jt(l.$$.fragment),
                $t(l.$$.fragment, 1),
                Ot(l, a, null))
              : (l = null);
          }
          (!y ||
            (2 & s[0] &&
              h !== (h = g(t[1].classContent) + " svelte-g4wg3a"))) &&
            B(a, "class", h),
            (!y || 512 & s[0]) && B(a, "style", t[9]),
            3 & s[0] && V(a, "content", !t[0]),
            (!y ||
              (2 & s[0] &&
                u !== (u = g(t[1].classWindow) + " svelte-g4wg3a"))) &&
              B(n, "class", u),
            (!y ||
              (2 & s[0] &&
                c !==
                  (c = t[1].ariaLabelledBy ? null : t[1].ariaLabel || null))) &&
              B(n, "aria-label", c),
            (!y || (2 & s[0] && p !== (p = t[1].ariaLabelledBy || null))) &&
              B(n, "aria-labelledby", p),
            (!y || 256 & s[0]) && B(n, "style", t[8]),
            3 & s[0] && V(n, "window", !t[0]),
            (!y ||
              (2 & s[0] &&
                d !== (d = g(t[1].classWindowWrap) + " svelte-g4wg3a"))) &&
              B(i, "class", d),
            (!y || 128 & s[0]) && B(i, "style", t[7]),
            3 & s[0] && V(i, "wrap", !t[0]),
            (!y ||
              (2 & s[0] && v !== (v = g(t[1].classBg) + " svelte-g4wg3a"))) &&
              B(e, "class", v),
            (!y || 64 & s[0]) && B(e, "style", t[6]),
            3 & s[0] && V(e, "bg", !t[0]);
        },
        i(i) {
          y ||
            ($t($),
            l && $t(l.$$.fragment, i),
            ht(() => {
              f || (f = St(n, t[12], t[1].transitionWindowProps, !0)), f.run(1);
            }),
            ht(() => {
              m || (m = St(e, t[11], t[1].transitionBgProps, !0)), m.run(1);
            }),
            (y = !0));
        },
        o(i) {
          xt($),
            l && xt(l.$$.fragment, i),
            f || (f = St(n, t[12], t[1].transitionWindowProps, !1)),
            f.run(0),
            m || (m = St(e, t[11], t[1].transitionBgProps, !1)),
            m.run(0),
            (y = !1);
        },
        d(i) {
          i && A(e),
            $ && $.d(),
            l && Et(l),
            t[48](null),
            i && f && f.end(),
            t[49](null),
            t[50](null),
            i && m && m.end(),
            (w = !1),
            o(b);
        },
      }
    );
  }
  function Ft(t) {
    let e, i, n, r, o;
    const s = [Vt, Ut],
      a = [];
    function l(t, i) {
      return (
        2 & i[0] && (e = null),
        null == e && (e = !!t[17](t[1].closeButton)),
        e ? 0 : 1
      );
    }
    return (
      (i = l(t, [-1, -1, -1])),
      (n = a[i] = s[i](t)),
      {
        c() {
          n.c(), (r = N());
        },
        m(t, e) {
          a[i].m(t, e), D(t, r, e), (o = !0);
        },
        p(t, e) {
          let o = i;
          (i = l(t, e)),
            i === o
              ? a[i].p(t, e)
              : (wt(),
                xt(a[o], 1, 1, () => {
                  a[o] = null;
                }),
                bt(),
                (n = a[i]),
                n ? n.p(t, e) : ((n = a[i] = s[i](t)), n.c()),
                $t(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          o || ($t(n), (o = !0));
        },
        o(t) {
          xt(n), (o = !1);
        },
        d(t) {
          a[i].d(t), t && A(r);
        },
      }
    );
  }
  function Ut(e) {
    let i, n, r, o;
    return {
      c() {
        (i = j("button")),
          B(i, "class", (n = g(e[1].classCloseButton) + " svelte-g4wg3a")),
          B(i, "aria-label", "Close modal"),
          B(i, "style", e[10]),
          V(i, "close", !e[0]);
      },
      m(t, n) {
        D(t, i, n), r || ((o = R(i, "click", e[18])), (r = !0));
      },
      p(t, e) {
        2 & e[0] &&
          n !== (n = g(t[1].classCloseButton) + " svelte-g4wg3a") &&
          B(i, "class", n),
          1024 & e[0] && B(i, "style", t[10]),
          3 & e[0] && V(i, "close", !t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i), (r = !1), o();
      },
    };
  }
  function Vt(t) {
    let e, i, n;
    var r = t[1].closeButton;
    function o(t) {
      return { props: { onClose: t[18] } };
    }
    return (
      r && (e = new r(o(t))),
      {
        c() {
          e && jt(e.$$.fragment), (i = N());
        },
        m(t, r) {
          e && Ot(e, t, r), D(t, i, r), (n = !0);
        },
        p(t, n) {
          if (r !== (r = t[1].closeButton)) {
            if (e) {
              wt();
              const t = e;
              xt(t.$$.fragment, 1, 0, () => {
                Et(t, 1);
              }),
                bt();
            }
            r
              ? ((e = new r(o(t))),
                jt(e.$$.fragment),
                $t(e.$$.fragment, 1),
                Ot(e, i.parentNode, i))
              : (e = null);
          }
        },
        i(t) {
          n || (e && $t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          e && xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(i), e && Et(e, t);
        },
      }
    );
  }
  function It(t) {
    let e,
      i,
      n,
      r,
      o = t[2] && Ht(t);
    const s = t[47].default,
      a = p(s, t, t[46], null);
    return {
      c() {
        o && o.c(), (e = P()), a && a.c();
      },
      m(s, l) {
        o && o.m(s, l),
          D(s, e, l),
          a && a.m(s, l),
          (i = !0),
          n || ((r = R(zt, "keydown", t[19])), (n = !0));
      },
      p(t, n) {
        t[2]
          ? o
            ? (o.p(t, n), 4 & n[0] && $t(o, 1))
            : ((o = Ht(t)), o.c(), $t(o, 1), o.m(e.parentNode, e))
          : o &&
            (wt(),
            xt(o, 1, 1, () => {
              o = null;
            }),
            bt()),
          a &&
            a.p &&
            (!i || 32768 & n[1]) &&
            v(a, s, t, t[46], i ? d(s, t[46], n, null) : m(t[46]), null);
      },
      i(t) {
        i || ($t(o), $t(a, t), (i = !0));
      },
      o(t) {
        xt(o), xt(a, t), (i = !1);
      },
      d(t) {
        o && o.d(t), t && A(e), a && a.d(t), (n = !1), r();
      },
    };
  }
  function qt(t, e = {}) {
    return function (i) {
      return new t({ ...i, props: { ...e, ...i.props } });
    };
  }
  function Xt(t, e, i) {
    let { $$slots: n = {}, $$scope: r } = e;
    const o = tt(),
      s = et;
    let { show: a = null } = e,
      { key: l = "simple-modal" } = e,
      { ariaLabel: h = null } = e,
      { ariaLabelledBy: u = null } = e,
      { closeButton: c = !0 } = e,
      { closeOnEsc: p = !0 } = e,
      { closeOnOuterClick: f = !0 } = e,
      { styleBg: d = {} } = e,
      { styleWindowWrap: v = {} } = e,
      { styleWindow: m = {} } = e,
      { styleContent: y = {} } = e,
      { styleCloseButton: g = {} } = e,
      { classBg: w = null } = e,
      { classWindowWrap: b = null } = e,
      { classWindow: $ = null } = e,
      { classContent: x = null } = e,
      { classCloseButton: _ = null } = e,
      { unstyled: M = !1 } = e,
      { setContext: k = s } = e,
      { transitionBg: S = Wt } = e,
      { transitionBgProps: C = { duration: 250 } } = e,
      { transitionWindow: L = S } = e,
      { transitionWindowProps: D = C } = e,
      { disableFocusTrap: A = !1 } = e;
    const T = {
      ariaLabel: h,
      ariaLabelledBy: u,
      closeButton: c,
      closeOnEsc: p,
      closeOnOuterClick: f,
      styleBg: d,
      styleWindowWrap: v,
      styleWindow: m,
      styleContent: y,
      styleCloseButton: g,
      classBg: w,
      classWindowWrap: b,
      classWindow: $,
      classContent: x,
      classCloseButton: _,
      transitionBg: S,
      transitionBgProps: C,
      transitionWindow: L,
      transitionWindowProps: D,
      disableFocusTrap: A,
      unstyled: M,
    };
    let j,
      O,
      E,
      P,
      N,
      R,
      B,
      W,
      z,
      H,
      F,
      U,
      V,
      I,
      q,
      X = { ...T },
      G = null;
    const J = (t) =>
        t
          ? Object.keys(t).reduce(
              (e, i) =>
                `${e}; ${((t) =>
                  t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase())(
                  i
                )}: ${t[i]}`,
              ""
            )
          : "",
      Y = (t) => !!(t && t.constructor && t.call && t.apply),
      Z = () => {};
    let it = Z,
      nt = Z,
      ot = Z,
      st = Z;
    const at = (t, e = {}, n = {}, r = {}) => {
        i(2, (G = qt(t, e))),
          i(1, (X = { ...T, ...n })),
          i(
            6,
            (N = J(
              Object.assign(
                {},
                { width: window.innerWidth, height: window.innerHeight },
                X.styleBg
              )
            ))
          ),
          i(7, (R = J(X.styleWindowWrap))),
          i(8, (B = J(X.styleWindow))),
          i(9, (W = J(X.styleContent))),
          i(10, (z = J(X.styleCloseButton))),
          i(11, (H = X.transitionBg)),
          i(12, (F = X.transitionWindow)),
          ht(),
          i(
            13,
            (it = (t) => {
              r.onOpen && r.onOpen(t), o("open"), o("opening");
            })
          ),
          i(
            14,
            (nt = (t) => {
              r.onClose && r.onClose(t), o("close"), o("closing");
            })
          ),
          i(
            15,
            (ot = (t) => {
              r.onOpened && r.onOpened(t), o("opened");
            })
          ),
          i(
            16,
            (st = (t) => {
              r.onClosed && r.onClosed(t), o("closed");
            })
          );
      },
      lt = (t = {}) => {
        G &&
          (i(14, (nt = t.onClose || nt)),
          i(16, (st = t.onClosed || st)),
          i(2, (G = null)),
          ut());
      },
      ht = () => {
        (P = window.scrollY),
          (U = document.body.style.position),
          (V = document.body.style.overflow),
          (I = document.body.style.width),
          (document.body.style.position = "fixed"),
          (document.body.style.top = `-${P}px`),
          (document.body.style.overflow = "hidden"),
          (document.body.style.width = "100%");
      },
      ut = () => {
        (document.body.style.position = U || ""),
          (document.body.style.top = ""),
          (document.body.style.overflow = V || ""),
          (document.body.style.width = I || ""),
          window.scrollTo(0, P);
      };
    k(l, { open: at, close: lt });
    let ct = !1;
    return (
      (function (t) {
        K().$$.on_destroy.push(t);
      })(() => {
        ct && lt();
      }),
      Q(() => {
        i(45, (ct = !0));
      }),
      (t.$$set = (t) => {
        "show" in t && i(22, (a = t.show)),
          "key" in t && i(23, (l = t.key)),
          "ariaLabel" in t && i(24, (h = t.ariaLabel)),
          "ariaLabelledBy" in t && i(25, (u = t.ariaLabelledBy)),
          "closeButton" in t && i(26, (c = t.closeButton)),
          "closeOnEsc" in t && i(27, (p = t.closeOnEsc)),
          "closeOnOuterClick" in t && i(28, (f = t.closeOnOuterClick)),
          "styleBg" in t && i(29, (d = t.styleBg)),
          "styleWindowWrap" in t && i(30, (v = t.styleWindowWrap)),
          "styleWindow" in t && i(31, (m = t.styleWindow)),
          "styleContent" in t && i(32, (y = t.styleContent)),
          "styleCloseButton" in t && i(33, (g = t.styleCloseButton)),
          "classBg" in t && i(34, (w = t.classBg)),
          "classWindowWrap" in t && i(35, (b = t.classWindowWrap)),
          "classWindow" in t && i(36, ($ = t.classWindow)),
          "classContent" in t && i(37, (x = t.classContent)),
          "classCloseButton" in t && i(38, (_ = t.classCloseButton)),
          "unstyled" in t && i(0, (M = t.unstyled)),
          "setContext" in t && i(39, (k = t.setContext)),
          "transitionBg" in t && i(40, (S = t.transitionBg)),
          "transitionBgProps" in t && i(41, (C = t.transitionBgProps)),
          "transitionWindow" in t && i(42, (L = t.transitionWindow)),
          "transitionWindowProps" in t && i(43, (D = t.transitionWindowProps)),
          "disableFocusTrap" in t && i(44, (A = t.disableFocusTrap)),
          "$$scope" in t && i(46, (r = t.$$scope));
      }),
      (t.$$.update = () => {
        (4194304 & t.$$.dirty[0]) | (16384 & t.$$.dirty[1]) &&
          ct &&
          (Y(a) ? at(a) : lt());
      }),
      [
        M,
        X,
        G,
        j,
        O,
        E,
        N,
        R,
        B,
        W,
        z,
        H,
        F,
        it,
        nt,
        ot,
        st,
        Y,
        lt,
        (t) => {
          if (
            (X.closeOnEsc &&
              G &&
              "Escape" === t.key &&
              (t.preventDefault(), lt()),
            G && "Tab" === t.key && !X.disableFocusTrap)
          ) {
            const e = E.querySelectorAll("*"),
              i = Array.from(e).filter((t) => t.tabIndex >= 0);
            let n = i.indexOf(document.activeElement);
            -1 === n && t.shiftKey && (n = 0),
              (n += i.length + (t.shiftKey ? -1 : 1)),
              (n %= i.length),
              i[n].focus(),
              t.preventDefault();
          }
        },
        (t) => {
          !X.closeOnOuterClick ||
            (t.target !== j && t.target !== O) ||
            (q = t.target);
        },
        (t) => {
          X.closeOnOuterClick && t.target === q && (t.preventDefault(), lt());
        },
        a,
        l,
        h,
        u,
        c,
        p,
        f,
        d,
        v,
        m,
        y,
        g,
        w,
        b,
        $,
        x,
        _,
        k,
        S,
        C,
        L,
        D,
        A,
        ct,
        r,
        n,
        function (t) {
          rt[t ? "unshift" : "push"](() => {
            (E = t), i(5, E);
          });
        },
        function (t) {
          rt[t ? "unshift" : "push"](() => {
            (O = t), i(4, O);
          });
        },
        function (t) {
          rt[t ? "unshift" : "push"](() => {
            (j = t), i(3, j);
          });
        },
      ]
    );
  }
  class Gt extends Rt {
    constructor(t) {
      super(),
        Nt(
          this,
          t,
          Xt,
          It,
          a,
          {
            show: 22,
            key: 23,
            ariaLabel: 24,
            ariaLabelledBy: 25,
            closeButton: 26,
            closeOnEsc: 27,
            closeOnOuterClick: 28,
            styleBg: 29,
            styleWindowWrap: 30,
            styleWindow: 31,
            styleContent: 32,
            styleCloseButton: 33,
            classBg: 34,
            classWindowWrap: 35,
            classWindow: 36,
            classContent: 37,
            classCloseButton: 38,
            unstyled: 0,
            setContext: 39,
            transitionBg: 40,
            transitionBgProps: 41,
            transitionWindow: 42,
            transitionWindowProps: 43,
            disableFocusTrap: 44,
          },
          null,
          [-1, -1, -1]
        );
    }
  }
  function Jt(t) {
    const e = t.getBoundingClientRect(),
      { body: i, documentElement: n } = document,
      r = window.pageYOffset || n.scrollTop || i.scrollTop,
      o = window.pageXOffset || n.scrollLeft || i.scrollLeft,
      s = n.clientTop || i.clientTop || 0,
      a = n.clientLeft || i.clientLeft || 0;
    return { top: e.top + r - s, left: e.left + o - a };
  }
  function Yt(t, e) {
    if (t && e) for (let i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    return t;
  }
  function Zt(t, e, i, n = !1) {
    t.addEventListener(e, i, n);
  }
  function Kt(t, e, i, n = !1) {
    t.removeEventListener(e, i, n);
  }
  function Qt() {
    return (
      "ontouchstart" in window ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  function te(t) {
    return "wheel" === t.type ||
      "mousedown" === t.type ||
      "mousemove" === t.type ||
      "mouseup" === t.type
      ? t.clientX
      : t.changedTouches[0].clientX;
  }
  function ee(t) {
    return "wheel" === t.type ||
      "mousedown" === t.type ||
      "mousemove" === t.type ||
      "mouseup" === t.type
      ? t.clientY
      : t.changedTouches[0].clientY;
  }
  function ie(t, e, i = {}) {
    (this._dropHandler = this._dropHandler.bind(this)),
      (this._grabHandler = this._grabHandler.bind(this)),
      (this._moveHandler = this._moveHandler.bind(this)),
      (this.options = Yt(
        { smoothExtinction: !1, onGrab: null, onMove: null, onDrop: null },
        i
      )),
      (this.isTouch = Qt()),
      (this.events = this.isTouch
        ? { grab: "touchstart", move: "touchmove", drop: "touchend" }
        : { grab: "mousedown", move: "mousemove", drop: "mouseup" }),
      (this.events.options = !!this.isTouch && { passive: !0 }),
      (this.window = t),
      (this.content = e),
      Zt(
        this.content.$element,
        this.events.grab,
        this._grabHandler,
        this.events.options
      );
  }
  function ne(t, e = {}) {
    (this._init = this._init.bind(this)),
      (this._prepare = this._prepare.bind(this)),
      (this._computeNewScale = this._computeNewScale.bind(this)),
      (this._computeNewPosition = this._computeNewPosition.bind(this)),
      (this._transform = this._transform.bind(this)),
      (this._wheelHandler = re.bind(this)),
      (this._downHandler = oe.bind(this)),
      (this._upHandler = se.bind(this));
    const i = {
      type: "image",
      width: null,
      height: null,
      dragScrollable: !0,
      dragScrollableOptions: {},
      minScale: null,
      maxScale: 1,
      speed: 50,
      zoomOnClick: !0,
      watchImageChange: !0,
    };
    if (
      ((this.content.$element =
        "string" == typeof t ? document.querySelector(t) : t),
      (this.isTouch = Qt()),
      (this.events = this.isTouch
        ? { down: "touchstart", up: "touchend" }
        : { down: "mousedown", up: "mouseup" }),
      (this.events.options = !!this.isTouch && { passive: !0 }),
      this.content.$element)
    )
      if (
        ((this.options = Yt(i, e)),
        this.options.minScale &&
          this.options.minScale >= this.options.maxScale &&
          (this.options.minScale = null),
        (this.window.$element = this.content.$element.parentNode),
        "image" === this.options.type)
      ) {
        let t = !1;
        this.content.$element.complete && (this._init(), (t = !0)),
          (t && !0 !== this.options.watchImageChange) ||
            Zt(
              this.content.$element,
              "load",
              this._init,
              !this.options.watchImageChange && { once: !0 }
            );
      } else this._init();
  }
  function re(t) {
    t.preventDefault(),
      this._transform(
        this._computeNewPosition(this._computeNewScale(t.deltaY), {
          x: te(t),
          y: ee(t),
        })
      );
  }
  function oe(t) {
    ((this.isTouch && 1 === t.touches.length) || 1 === t.buttons) &&
      ((this.clickExpired = !1),
      setTimeout(() => (this.clickExpired = !0), 150));
  }
  function se(t) {
    this.clickExpired ||
      (this._transform(
        this._computeNewPosition(
          1 === this.direction ? this.content.maxScale : this.content.minScale,
          { x: te(t), y: ee(t) }
        )
      ),
      (this.direction *= -1));
  }
  (ie.prototype = {
    constructor: ie,
    window: null,
    content: null,
    isTouch: !1,
    isGrab: !1,
    events: null,
    moveTimer: null,
    options: {},
    coordinates: null,
    speed: null,
    _grabHandler(t) {
      ((this.isTouch && 1 === t.touches.length) || 1 === t.buttons) &&
        (this.isTouch || t.preventDefault(),
        (this.isGrab = !0),
        (this.coordinates = { left: te(t), top: ee(t) }),
        (this.speed = { x: 0, y: 0 }),
        Zt(document, this.events.drop, this._dropHandler, this.events.options),
        Zt(document, this.events.move, this._moveHandler, this.events.options),
        "function" == typeof this.options.onGrab && this.options.onGrab());
    },
    _dropHandler(t) {
      this.isTouch || t.preventDefault(),
        (this.isGrab = !1),
        Kt(document, this.events.drop, this._dropHandler),
        Kt(document, this.events.move, this._moveHandler),
        "function" == typeof this.options.onDrop && this.options.onDrop();
    },
    _moveHandler(t) {
      this.isTouch || t.preventDefault();
      const {
        window: e,
        content: i,
        speed: n,
        coordinates: r,
        options: o,
      } = this;
      (n.x = te(t) - r.left),
        (n.y = ee(t) - r.top),
        clearTimeout(this.moveTimer),
        (this.moveTimer = setTimeout(() => {
          (n.x = 0), (n.y = 0);
        }, 50));
      const s = i.currentLeft + n.x,
        a = i.currentTop + n.y;
      let l = (i.currentWidth - e.originalWidth) / 2 + i.correctX,
        h = (i.currentHeight - e.originalHeight) / 2 + i.correctY;
      Math.abs(s) <= l && (i.currentLeft = s),
        Math.abs(a) <= h && (i.currentTop = a),
        (function (t, { left: e, top: i, scale: n }) {
          t.style.transform = `translate3d(${e}px, ${i}px, 0px) scale(${n})`;
        })(i.$element, {
          left: i.currentLeft,
          top: i.currentTop,
          scale: i.currentScale,
        }),
        (r.left = te(t)),
        (r.top = ee(t)),
        "function" == typeof o.onMove && o.onMove();
    },
    destroy() {
      Kt(
        this.content.$element,
        this.events.grab,
        this._grabHandler,
        this.events.options
      );
      for (let t in this) this.hasOwnProperty(t) && (this[t] = null);
    },
  }),
    (ne.prototype = {
      constructor: ne,
      isTouch: !1,
      events: null,
      content: {},
      window: {},
      direction: 1,
      options: null,
      dragScrollable: null,
      clickExpired: !0,
      _init() {
        this._prepare(),
          !0 === this.options.dragScrollable &&
            (this.dragScrollable && this.dragScrollable.destroy(),
            (this.dragScrollable = new ie(
              this.window,
              this.content,
              this.options.dragScrollableOptions
            ))),
          Zt(this.content.$element, "wheel", this._wheelHandler),
          this.options.zoomOnClick &&
            (Zt(
              this.content.$element,
              this.events.down,
              this._downHandler,
              this.events.options
            ),
            Zt(
              this.content.$element,
              this.events.up,
              this._upHandler,
              this.events.options
            ));
      },
      _prepare() {
        const t = Jt(this.window.$element);
        (this.window.originalWidth = this.window.$element.offsetWidth),
          (this.window.originalHeight = this.window.$element.offsetHeight),
          (this.window.positionLeft = t.left),
          (this.window.positionTop = t.top),
          "image" === this.options.type
            ? ((this.content.originalWidth =
                this.options.width || this.content.$element.naturalWidth),
              (this.content.originalHeight =
                this.options.height || this.content.$element.naturalHeight))
            : ((this.content.originalWidth =
                this.options.width || this.content.$element.offsetWidth),
              (this.content.originalHeight =
                this.options.height || this.content.$element.offsetHeight)),
          (this.content.minScale =
            this.options.minScale ||
            Math.min(
              this.window.originalWidth / this.content.originalWidth,
              this.window.originalHeight / this.content.originalHeight
            )),
          (this.content.maxScale = this.options.maxScale),
          (this.content.currentWidth =
            this.content.originalWidth * this.content.minScale),
          (this.content.currentHeight =
            this.content.originalHeight * this.content.minScale),
          (this.content.currentLeft = 0),
          (this.content.currentTop = 0),
          (this.content.currentScale = this.content.minScale),
          (this.content.correctX = Math.max(
            0,
            (this.window.originalWidth - this.content.currentWidth) / 2
          )),
          (this.content.correctY = Math.max(
            0,
            (this.window.originalHeight - this.content.currentHeight) / 2
          )),
          (this.content.$element.style.transform = `translate3d(0px, 0px, 0px) scale(${this.content.minScale})`),
          "function" == typeof this.options.prepare && this.options.prepare();
      },
      _computeNewScale(t) {
        this.direction = t < 0 ? 1 : -1;
        const { minScale: e, maxScale: i, currentScale: n } = this.content;
        let r = n + this.direction / this.options.speed;
        return (
          r < e ? (this.direction = 1) : r > i && (this.direction = -1),
          r < e ? e : r > i ? i : r
        );
      },
      _computeNewPosition(t, { x: e, y: i }) {
        const { window: n, content: r } = this,
          o = r.originalWidth * t,
          s = r.originalHeight * t,
          { body: a, documentElement: l } = document,
          h = n.pageXOffset || l.scrollLeft || a.scrollLeft,
          u = n.pageYOffset || l.scrollTop || a.scrollTop,
          c = e + h - n.positionLeft,
          p = n.originalWidth / 2 - c + r.currentLeft;
        let f = p * (o / r.currentWidth) - p + r.currentLeft;
        if (
          -1 === this.direction &&
          (o - n.originalWidth) / 2 + r.correctX < Math.abs(f)
        ) {
          const t = f < 0 ? -1 : 1;
          f = ((o - n.originalWidth) / 2 + r.correctX) * t;
        }
        const d = i + u - n.positionTop,
          v = n.originalHeight / 2 - d + r.currentTop;
        let m = v * (s / r.currentHeight) - v + r.currentTop;
        if (
          -1 === this.direction &&
          (s - n.originalHeight) / 2 + r.correctY < Math.abs(m)
        ) {
          const t = m < 0 ? -1 : 1;
          m = ((s - n.originalHeight) / 2 + r.correctY) * t;
        }
        t === this.content.minScale && (f = m = 0);
        const y = {
          currentLeft: r.currentLeft,
          newLeft: f,
          currentTop: r.currentTop,
          newTop: m,
          currentScale: r.currentScale,
          newScale: t,
        };
        return (
          (r.currentWidth = o),
          (r.currentHeight = s),
          (r.currentLeft = f),
          (r.currentTop = m),
          (r.currentScale = t),
          y
        );
      },
      _transform(
        {
          currentLeft: t,
          newLeft: e,
          currentTop: i,
          newTop: n,
          currentScale: r,
          newScale: o,
        },
        s = 1
      ) {
        (this.content.$element.style.transform = `translate3d(${e}px, ${n}px, 0px) scale(${o})`),
          "function" == typeof this.options.rescale && this.options.rescale();
      },
      _zoom(t) {
        const e = Jt(this.window.$element),
          { window: i } = this,
          { body: n, documentElement: r } = document,
          o = i.pageXOffset || r.scrollLeft || n.scrollLeft,
          s = i.pageYOffset || r.scrollTop || n.scrollTop;
        this._transform(
          this._computeNewPosition(this._computeNewScale(t), {
            x: e.left + this.window.originalWidth / 2 - o,
            y: e.top + this.window.originalHeight / 2 - s,
          })
        );
      },
      prepare() {
        this._prepare();
      },
      zoomUp() {
        this._zoom(-1);
      },
      zoomDown() {
        this._zoom(1);
      },
      destroy() {
        (this.content.$element.style.transform = ""),
          "image" === this.options.type &&
            Kt(this.content.$element, "load", this._init),
          Kt(this.window.$element, "wheel", this._wheelHandler),
          Kt(this.content.$element, "wheel", this._wheelHandler),
          this.options.zoomOnClick &&
            (Kt(
              this.window.$element,
              this.events.down,
              this._downHandler,
              this.events.options
            ),
            Kt(
              this.window.$element,
              this.events.up,
              this._upHandler,
              this.events.options
            )),
          this.dragScrollable && this.dragScrollable.destroy();
        for (let t in this) this.hasOwnProperty(t) && (this[t] = null);
      },
    }),
    (ne.create = function (t, e) {
      return new ne(t, e);
    }),
    (function () {
      var t;
      function e() {
        var t = new window.CustomEvent("resizeend");
        window.dispatchEvent(t);
      }
      window.addEventListener("resize", () => {
        clearTimeout(t), (t = setTimeout(e, 200));
      });
    })();
  let ae = 0;
  const le = () => ae;
  let he = 0;
  const ue = () => he,
    ce = () => {
      const t = window,
        e = document,
        i = e.documentElement,
        n = e.getElementsByTagName("body")[0];
      (ae = t.innerWidth || i.clientWidth || n.clientWidth),
        (he = t.innerHeight || i.clientHeight || n.clientHeight);
    };
  function pe(e) {
    let i, n, r, o, s;
    return {
      c() {
        (i = O("svg")),
          (n = O("circle")),
          (r = O("line")),
          (o = O("line")),
          (s = O("line")),
          B(n, "cx", "11"),
          B(n, "cy", "11"),
          B(n, "r", "8"),
          B(r, "x1", "21"),
          B(r, "y1", "21"),
          B(r, "x2", "16.65"),
          B(r, "y2", "16.65"),
          B(o, "x1", "11"),
          B(o, "y1", "8"),
          B(o, "x2", "11"),
          B(o, "y2", "14"),
          B(s, "x1", "8"),
          B(s, "y1", "11"),
          B(s, "x2", "14"),
          B(s, "y2", "11"),
          B(i, "stroke", "rgb(160,160,160)"),
          B(i, "fill", "none"),
          B(i, "stroke-width", "2"),
          B(i, "viewBox", "0 0 24 24"),
          B(i, "stroke-linecap", "round"),
          B(i, "stroke-linejoin", "round");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(i, s);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  window.addEventListener("resizeend", ce), ce();
  class fe extends Rt {
    constructor(t) {
      super(), Nt(this, t, null, pe, a, {});
    }
  }
  function de(e) {
    let i, n, r, o;
    return {
      c() {
        (i = O("svg")),
          (n = O("circle")),
          (r = O("line")),
          (o = O("line")),
          B(n, "cx", "11"),
          B(n, "cy", "11"),
          B(n, "r", "8"),
          B(r, "x1", "21"),
          B(r, "y1", "21"),
          B(r, "x2", "16.65"),
          B(r, "y2", "16.65"),
          B(o, "x1", "8"),
          B(o, "y1", "11"),
          B(o, "x2", "14"),
          B(o, "y2", "11"),
          B(i, "stroke", "rgb(160,160,160)"),
          B(i, "fill", "none"),
          B(i, "stroke-width", "2"),
          B(i, "viewBox", "0 0 24 24"),
          B(i, "stroke-linecap", "round"),
          B(i, "stroke-linejoin", "round");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  class ve extends Rt {
    constructor(t) {
      super(), Nt(this, t, null, de, a, {});
    }
  }
  function me(e) {
    let i, n, r;
    return {
      c() {
        (i = O("svg")),
          (n = O("polyline")),
          (r = O("polyline")),
          B(n, "points", "30 10 10 30 30 50"),
          B(n, "stroke", "rgba(0,0,0,0.5)"),
          B(n, "stroke-width", "8"),
          B(n, "stroke-linecap", "square"),
          B(n, "fill", "none"),
          B(n, "stroke-linejoin", "round"),
          B(r, "points", "30 10 10 30 30 50"),
          B(r, "stroke", "rgba(255,255,255,0.5)"),
          B(r, "stroke-width", "4"),
          B(r, "stroke-linecap", "square"),
          B(r, "fill", "none"),
          B(r, "stroke-linejoin", "round"),
          B(i, "width", "44"),
          B(i, "height", "60");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  class ye extends Rt {
    constructor(t) {
      super(), Nt(this, t, null, me, a, {});
    }
  }
  function ge(e) {
    let i, n, r;
    return {
      c() {
        (i = O("svg")),
          (n = O("polyline")),
          (r = O("polyline")),
          B(n, "points", "14 10 34 30 14 50"),
          B(n, "stroke", "rgba(0,0,0,0.5)"),
          B(n, "stroke-width", "8"),
          B(n, "stroke-linecap", "square"),
          B(n, "fill", "none"),
          B(n, "stroke-linejoin", "round"),
          B(r, "points", "14 10 34 30 14 50"),
          B(r, "stroke", "rgba(255,255,255,0.5)"),
          B(r, "stroke-width", "4"),
          B(r, "stroke-linecap", "square"),
          B(r, "fill", "none"),
          B(r, "stroke-linejoin", "round"),
          B(i, "width", "44"),
          B(i, "height", "60");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  class we extends Rt {
    constructor(t) {
      super(), Nt(this, t, null, ge, a, {});
    }
  }
  function be(e) {
    let i, n, r, o;
    return {
      c() {
        (i = O("svg")),
          (n = O("g")),
          (r = O("line")),
          (o = O("line")),
          B(r, "x1", "11"),
          B(r, "y1", "11"),
          B(r, "x2", "31"),
          B(r, "y2", "31"),
          B(o, "x1", "11"),
          B(o, "y1", "31"),
          B(o, "x2", "31"),
          B(o, "y2", "11"),
          B(n, "stroke", "rgb(160,160,160)"),
          B(n, "stroke-width", "4"),
          B(i, "width", "36"),
          B(i, "height", "36");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(n, r), S(n, o);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  class $e extends Rt {
    constructor(t) {
      super(), Nt(this, t, null, be, a, {});
    }
  }
  function xe(e) {
    let i, n;
    return {
      c: t,
      m(t, r) {
        i ||
          ((n = [
            R(document.body, "keyup", e[7]),
            R(document.body, "keyup", e[9]),
            R(document.body, "keydown", e[8]),
            R(document.body, "keydown", e[10]),
          ]),
          (i = !0));
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        (i = !1), o(n);
      },
    };
  }
  function _e(t, e, i) {
    let n,
      r,
      { paused: o = !1 } = e,
      { pauseOnInput: s = !1 } = e;
    const a = tt();
    let l = [],
      h = [];
    return (
      (t.$$set = (t) => {
        "paused" in t && i(0, (o = t.paused)),
          "pauseOnInput" in t && i(1, (s = t.pauseOnInput));
      }),
      (t.$$.update = () => {
        4 & t.$$.dirty && i(3, (n = l.join("-"))),
          4 & t.$$.dirty &&
            i(5, (r = l.reduce((t, e) => ({ ...t, [e]: !0 }), {}))),
          12 & t.$$.dirty && l.length > 0 && a("combo", n);
      }),
      [
        o,
        s,
        l,
        n,
        h,
        r,
        a,
        function (e) {
          it.call(this, t, e);
        },
        function (e) {
          it.call(this, t, e);
        },
        ({ key: t }) => {
          i(4, (h = h.filter((e) => e !== t))), h.length > 0 || i(2, (l = []));
        },
        ({ key: t, target: e }) => {
          (s && "BODY" !== e.tagName) ||
            (i(4, (h = [...h, t])),
            o ||
              (t in r ? a("combo", n) : i(2, (l = [...l, t])),
              a(" " === t ? "Space" : t),
              a("key", t)));
        },
      ]
    );
  }
  var Me = class extends Rt {
    constructor(t) {
      super(), Nt(this, t, _e, xe, a, { paused: 0, pauseOnInput: 1 });
    }
  };
  function ke(t) {
    let e, i;
    return (
      (e = new Me({})),
      e.$on("Escape", function () {
        s(t[0]) && t[0].apply(this, arguments);
      }),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, n) {
          Ot(e, t, n), (i = !0);
        },
        p(e, i) {
          t = e;
        },
        i(t) {
          i || ($t(e.$$.fragment, t), (i = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (i = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function Se(e) {
    let i, n;
    return (
      (i = new Me({})),
      i.$on("Escape", e[2]),
      {
        c() {
          jt(i.$$.fragment);
        },
        m(t, e) {
          Ot(i, t, e), (n = !0);
        },
        p: t,
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(i, t);
        },
      }
    );
  }
  function Ce(t) {
    let e, i, n, r;
    const o = [Se, ke],
      s = [];
    function a(t, e) {
      return t[0] && t[1] ? 0 : t[0] ? 1 : -1;
    }
    return (
      ~(e = a(t)) && (i = s[e] = o[e](t)),
      {
        c() {
          i && i.c(), (n = N());
        },
        m(t, i) {
          ~e && s[e].m(t, i), D(t, n, i), (r = !0);
        },
        p(t, [r]) {
          let l = e;
          (e = a(t)),
            e === l
              ? ~e && s[e].p(t, r)
              : (i &&
                  (wt(),
                  xt(s[l], 1, 1, () => {
                    s[l] = null;
                  }),
                  bt()),
                ~e
                  ? ((i = s[e]),
                    i ? i.p(t, r) : ((i = s[e] = o[e](t)), i.c()),
                    $t(i, 1),
                    i.m(n.parentNode, n))
                  : (i = null));
        },
        i(t) {
          r || ($t(i), (r = !0));
        },
        o(t) {
          xt(i), (r = !1);
        },
        d(t) {
          ~e && s[e].d(t), t && A(n);
        },
      }
    );
  }
  function Le(t, e, i) {
    let { onEscape: n } = e,
      { log: r } = e;
    return (
      (t.$$set = (t) => {
        "onEscape" in t && i(0, (n = t.onEscape)),
          "log" in t && i(1, (r = t.log));
      }),
      [
        n,
        r,
        (t) => {
          console.log("onEscape!", t), n(t);
        },
      ]
    );
  }
  class De extends Rt {
    constructor(t) {
      super(), Nt(this, t, Le, Ce, a, { onEscape: 0, log: 1 });
    }
  }
  const Ae = [];
  function Te(e, i = t) {
    let n;
    const r = new Set();
    function o(t) {
      if (a(e, t) && ((e = t), n)) {
        const t = !Ae.length;
        for (const t of r) t[1](), Ae.push(t, e);
        if (t) {
          for (let t = 0; t < Ae.length; t += 2) Ae[t][0](Ae[t + 1]);
          Ae.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (t) {
        o(t(e));
      },
      subscribe: function (s, a = t) {
        const l = [s, a];
        return (
          r.add(l),
          1 === r.size && (n = i(o) || t),
          s(e),
          () => {
            r.delete(l), 0 === r.size && (n(), (n = null));
          }
        );
      },
    };
  }
  const je = Te({}),
    Oe = Te({}),
    Ee = Te({}),
    Pe = Te([]),
    Ne = Te([]),
    Re = Te(null),
    Be = Te({});
  (window.appState = {}),
    je.subscribe((t) => {
      window.appState.tokenPrices = t;
    }),
    Oe.subscribe((t) => {
      window.appState.pricesPrices = t;
    }),
    Ee.subscribe((t) => {
      window.appState.shipTrades = t;
    }),
    Pe.subscribe((t) => {
      window.appState.nfts = t;
    }),
    Ne.subscribe((t) => {
      window.appState.ships = t;
    }),
    Re.subscribe((t) => {
      window.appState.modalStatus = t;
    }),
    Be.subscribe((t) => {
      window.appState.gallery = t;
    });
  const { Boolean: We } = Ct;
  function ze(t, e, i) {
    const n = t.slice();
    return (n[42] = e[i]), n;
  }
  function He(t) {
    let e,
      i,
      n,
      r,
      s,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y,
      w,
      b,
      $,
      x,
      _,
      M,
      k,
      C,
      L;
    (n = new fe({})),
      (a = new ve({})),
      (u = new $e({})),
      (f = new ye({})),
      (m = new we({}));
    let O = t[3] && Fe(t),
      E = t[0],
      N = [];
    for (let e = 0; e < E.length; e += 1) N[e] = Ue(ze(t, E, e));
    const W = (t) =>
      xt(N[t], 1, 1, () => {
        N[t] = null;
      });
    return (
      (M = new De({ props: { onEscape: t[9] } })),
      {
        c() {
          (e = j("div")),
            (i = j("div")),
            jt(n.$$.fragment),
            (r = P()),
            (s = j("div")),
            jt(a.$$.fragment),
            (l = P()),
            (h = j("div")),
            jt(u.$$.fragment),
            (c = P()),
            (p = j("div")),
            jt(f.$$.fragment),
            (d = P()),
            (v = j("div")),
            jt(m.$$.fragment),
            (y = P()),
            O && O.c(),
            (w = P());
          for (let t = 0; t < N.length; t += 1) N[t].c();
          (_ = P()),
            jt(M.$$.fragment),
            B(i, "class", "icon-button magnify svelte-vtd641"),
            B(s, "class", "icon-button de-magnify svelte-vtd641"),
            B(h, "class", "icon-button close-me svelte-vtd641"),
            B(p, "class", "prior svelte-vtd641"),
            B(v, "class", "next svelte-vtd641"),
            B(e, "class", (b = g(t[5]) + " svelte-vtd641"));
        },
        m(o, g) {
          D(o, e, g),
            S(e, i),
            Ot(n, i, null),
            S(e, r),
            S(e, s),
            Ot(a, s, null),
            S(e, l),
            S(e, h),
            Ot(u, h, null),
            S(e, c),
            S(e, p),
            Ot(f, p, null),
            S(e, d),
            S(e, v),
            Ot(m, v, null),
            S(e, y),
            O && O.m(e, null),
            S(e, w);
          for (let t = 0; t < N.length; t += 1) N[t].m(e, null);
          D(o, _, g),
            Ot(M, o, g),
            (k = !0),
            C ||
              ((L = [
                R(i, "click", t[11]),
                R(s, "click", t[12]),
                R(h, "click", t[9]),
                R(p, "click", t[16]),
                R(v, "click", t[15]),
              ]),
              (C = !0));
        },
        p(t, i) {
          if (
            (t[3]
              ? O
                ? (O.p(t, i), 8 & i[0] && $t(O, 1))
                : ((O = Fe(t)), O.c(), $t(O, 1), O.m(e, w))
              : O &&
                (wt(),
                xt(O, 1, 1, () => {
                  O = null;
                }),
                bt()),
            257 & i[0])
          ) {
            let n;
            for (E = t[0], n = 0; n < E.length; n += 1) {
              const r = ze(t, E, n);
              N[n]
                ? (N[n].p(r, i), $t(N[n], 1))
                : ((N[n] = Ue(r)), N[n].c(), $t(N[n], 1), N[n].m(e, null));
            }
            for (wt(), n = E.length; n < N.length; n += 1) W(n);
            bt();
          }
          (!k || (32 & i[0] && b !== (b = g(t[5]) + " svelte-vtd641"))) &&
            B(e, "class", b);
        },
        i(t) {
          if (!k) {
            $t(n.$$.fragment, t),
              $t(a.$$.fragment, t),
              $t(u.$$.fragment, t),
              $t(f.$$.fragment, t),
              $t(m.$$.fragment, t),
              $t(O);
            for (let t = 0; t < E.length; t += 1) $t(N[t]);
            ht(() => {
              x && x.end(1), ($ = Mt(e, Wt, {})), $.start();
            }),
              $t(M.$$.fragment, t),
              (k = !0);
          }
        },
        o(t) {
          xt(n.$$.fragment, t),
            xt(a.$$.fragment, t),
            xt(u.$$.fragment, t),
            xt(f.$$.fragment, t),
            xt(m.$$.fragment, t),
            xt(O),
            (N = N.filter(We));
          for (let t = 0; t < N.length; t += 1) xt(N[t]);
          $ && $.invalidate(),
            (x = kt(e, Wt, {})),
            xt(M.$$.fragment, t),
            (k = !1);
        },
        d(t) {
          t && A(e),
            Et(n),
            Et(a),
            Et(u),
            Et(f),
            Et(m),
            O && O.d(),
            T(N, t),
            t && x && x.end(),
            t && A(_),
            Et(M, t),
            (C = !1),
            o(L);
        },
      }
    );
  }
  function Fe(t) {
    let e, i, n, r, o, s, a, l, u;
    return {
      c() {
        (e = j("div")),
          (i = j("div")),
          (n = j("img")),
          h(n.src, (r = t[7])) || B(n, "src", r),
          B(n, "alt", t[6]),
          B(n, "class", "svelte-vtd641"),
          B(i, "class", "photo svelte-vtd641"),
          B(i, "style", t[4]),
          B(e, "class", "photo-frame svelte-vtd641");
      },
      m(r, o) {
        D(r, e, o),
          S(e, i),
          S(i, n),
          t[28](n),
          (a = !0),
          l || ((u = R(n, "load", t[10]())), (l = !0));
      },
      p(t, e) {
        (!a || (128 & e[0] && !h(n.src, (r = t[7])))) && B(n, "src", r),
          (!a || 64 & e[0]) && B(n, "alt", t[6]),
          (!a || 16 & e[0]) && B(i, "style", t[4]);
      },
      i(i) {
        a ||
          (ht(() => {
            s && s.end(1), (o = Mt(e, t[14], {})), o.start();
          }),
          (a = !0));
      },
      o(i) {
        o && o.invalidate(), (s = kt(e, t[13], {})), (a = !1);
      },
      d(i) {
        i && A(e), t[28](null), i && s && s.end(), (l = !1), u();
      },
    };
  }
  function Ue(t) {
    let e, i, n, r, o, s, a, l, h, u, c;
    return (
      (o = new we({})),
      {
        c() {
          (e = j("div")),
            (i = j("div")),
            (n = j("a")),
            (r = E("Download\r\n                    ")),
            jt(o.$$.fragment),
            (l = P()),
            B(n, "class", "download-button svelte-vtd641"),
            B(n, "href", (s = t[8](t[42]))),
            B(n, "download", (a = t[42].split("/").pop())),
            B(i, "class", "description-column svelte-vtd641"),
            B(e, "class", "description-panel collapsed svelte-vtd641");
        },
        m(t, s) {
          D(t, e, s),
            S(e, i),
            S(i, n),
            S(n, r),
            Ot(o, n, null),
            S(e, l),
            (c = !0);
        },
        p(t, e) {
          (!c || (1 & e[0] && s !== (s = t[8](t[42])))) && B(n, "href", s),
            (!c || (1 & e[0] && a !== (a = t[42].split("/").pop()))) &&
              B(n, "download", a);
        },
        i(t) {
          c ||
            ($t(o.$$.fragment, t),
            ht(() => {
              u && u.end(1), (h = Mt(e, Wt, {})), h.start();
            }),
            (c = !0));
        },
        o(t) {
          xt(o.$$.fragment, t),
            h && h.invalidate(),
            (u = kt(e, Wt, {})),
            (c = !1);
        },
        d(t) {
          t && A(e), Et(o), t && u && u.end();
        },
      }
    );
  }
  function Ve(t) {
    let e,
      i,
      n = t[1] && He(t);
    return {
      c() {
        n && n.c(), (e = N());
      },
      m(t, r) {
        n && n.m(t, r), D(t, e, r), (i = !0);
      },
      p(t, i) {
        t[1]
          ? n
            ? (n.p(t, i), 2 & i[0] && $t(n, 1))
            : ((n = He(t)), n.c(), $t(n, 1), n.m(e.parentNode, e))
          : n &&
            (wt(),
            xt(n, 1, 1, () => {
              n = null;
            }),
            bt());
      },
      i(t) {
        i || ($t(n), (i = !0));
      },
      o(t) {
        xt(n), (i = !1);
      },
      d(t) {
        n && n.d(t), t && A(e);
      },
    };
  }
  function Ie(t, e, i) {
    let n, r, o, s, a, l, h, u, p, f, d, v, m, y;
    c(t, Be, (t) => i(27, (y = t)));
    const g = [];
    let w,
      b,
      $ = !1,
      x = "",
      _ = !0,
      M = 0,
      k = 0;
    const S = (t) =>
        "https://play.staratlas.com/_next/image?url=" +
        encodeURIComponent(t) +
        "&w=1920&q=75",
      C = (t, e) => {
        Be.update((i) => ({ ...i, [t]: e }));
      };
    return (
      Q(() => {
        i(17, ($ = !1));
      }),
      (t.$$.update = () => {
        134217728 & t.$$.dirty[0] && i(26, (n = y.ship)),
          67108864 & t.$$.dirty[0] && i(1, (r = Boolean(n))),
          67108866 & t.$$.dirty[0] &&
            i(0, (o = r ? [n.image, ...n.media.gallery] : g)),
          134217728 & t.$$.dirty[0] && i(20, (s = y.currentIndex || 0)),
          1048579 & t.$$.dirty[0] && i(25, (a = r ? o[s] : "")),
          33554432 & t.$$.dirty[0] && i(23, (l = a ? a.split("/").pop() : "")),
          33554432 & t.$$.dirty[0] && i(7, (h = a ? S(a) : "")),
          262144 & t.$$.dirty[0] && i(21, (u = M || 1920)),
          524288 & t.$$.dirty[0] && i(22, (p = k || 1200)),
          6291456 & t.$$.dirty[0] && i(24, (f = p / u)),
          6291456 & t.$$.dirty[0] &&
            ((t, e) => {
              const i = e / t;
              i > 1 ? ue() : (le() * i).toFixed(1);
            })(u, p),
          6291456 & t.$$.dirty[0] &&
            ((t) => {
              const { width: e, height: i } = t,
                n = i / e;
              n > 1 ? (ue() / n).toFixed(1) : le();
            })(u),
          t.$$.dirty[0],
          8388608 & t.$$.dirty[0] && i(6, (d = l || "image")),
          2 & t.$$.dirty[0] && i(5, (v = "lightbox" + (r ? " active" : ""))),
          t.$$.dirty[0],
          6291456 & t.$$.dirty[0] &&
            i(
              4,
              (m = ((t, e) => {
                const i = t / e;
                return i > 1
                  ? "width:" +
                      (ue() / i).toFixed(1) +
                      "px; height:" +
                      ue() +
                      "px;"
                  : "width:" +
                      le() +
                      "px; height:" +
                      (le() * i).toFixed(1) +
                      "px;";
              })(p, u))
            );
      }),
      [
        o,
        r,
        w,
        _,
        m,
        v,
        d,
        h,
        S,
        () => {
          (x = ""),
            i(17, ($ = !1)),
            b && (b.destroy(), (b = null)),
            C("ship", null);
        },
        () => {
          const t = () => b,
            e = (t) => (b = t);
          return function () {
            const n = t();
            var r, o;
            if (
              ((r = this.height),
              i(19, (k = r)),
              (o = this.width),
              i(18, (M = o)),
              i(17, ($ = !0)),
              !n)
            ) {
              const t = {
                minScale: 1,
                maxScale: 5,
                speed: 6,
                dragScrollableOptions: { smoothExtinction: !0 },
                zoomOnClick: !1,
              };
              e(ne.create(w, t));
            }
          };
        },
        () => {
          b && b.zoomUp();
        },
        () => {
          b && b.zoomDown();
        },
        function (t, { delay: e = 0, duration: i = 150 }) {
          return {
            delay: e,
            duration: i,
            css: (t) => {
              if (!x) return "";
              return `transform: translate(${
                ("forward" === x ? 1 : -1) * (105 * Bt(t) - 105)
              }%, 0)`;
            },
          };
        },
        function (t, { delay: e = 0, duration: i = 350 }) {
          return {
            delay: e,
            duration: i,
            css: (t) => {
              if (!x) return "";
              return `transform: translate(${
                ("forward" === x ? 1 : -1) * (105 - 105 * Bt(t))
              }%, 0)`;
            },
          };
        },
        () => {
          (x = "forward"), b && (b.destroy(), (b = null)), i(3, (_ = !1));
          const t = s === o.length - 1 ? 0 : s + 1;
          setTimeout(() => {
            i(17, ($ = !1)),
              C("currentIndex", t),
              setTimeout(() => {
                b && b.prepare(), i(3, (_ = !0));
              }, 400);
          }, 140);
        },
        () => {
          (x = "previous"), b && (b.destroy(), (b = null)), i(3, (_ = !1));
          const t = 0 === s ? o.length - 1 : s - 1;
          setTimeout(() => {
            i(17, ($ = !1)),
              C("currentIndex", t),
              setTimeout(() => {
                b && b.prepare(), i(3, (_ = !0));
              }, 400);
          }, 140);
        },
        $,
        M,
        k,
        s,
        u,
        p,
        l,
        f,
        a,
        n,
        y,
        function (t) {
          rt[t ? "unshift" : "push"](() => {
            (w = t), i(2, w);
          });
        },
      ]
    );
  }
  class qe extends Rt {
    constructor(t) {
      super(), Nt(this, t, Ie, Ve, a, {}, null, [-1, -1]);
    }
  }
  const Xe = {
      "thumb-220": {
        "CALCH.jpg": !0,
        "CALEV.jpg": !0,
        "CALG.jpg": !0,
        "CHI.jpg": !0,
        "FBLAIR.jpg": !0,
        "FBLBEA.jpg": !0,
        "FBLBPL.jpg": !0,
        "FBLEBO.jpg": !0,
        "FBLEGR.jpg": !0,
        "FBLETR.jpg": !0,
        "OGKAJA.jpg": !0,
        "OGKATP.jpg": !0,
        "OM.jpg": !0,
        "OPALJ.jpg": !0,
        "OPALJJ.jpg": !0,
        "PC11.jpg": !0,
        "PC9.jpg": !0,
        "PF4.jpg": !0,
        "PR8.jpg": !0,
        "PX4.jpg": !0,
        "PX5.jpg": !0,
        "PX6.jpg": !0,
        "TUFAFE.jpg": !0,
        "VZUSAM.jpg": !0,
        "VZUSOP.jpg": !0,
      },
      "med-720": {
        "CALCH.jpg": !0,
        "CALEV.jpg": !0,
        "CALG.jpg": !0,
        "CHI.jpg": !0,
        "FBLAIR.jpg": !0,
        "FBLBEA.jpg": !0,
        "FBLBPL.jpg": !0,
        "FBLEBO.jpg": !0,
        "FBLEGR.jpg": !0,
        "FBLETR.jpg": !0,
        "OGKAJA.jpg": !0,
        "OGKATP.jpg": !0,
        "OM.jpg": !0,
        "OPALJ.jpg": !0,
        "OPALJJ.jpg": !0,
        "PC11.jpg": !0,
        "PC9.jpg": !0,
        "PF4.jpg": !0,
        "PR8.jpg": !0,
        "PX4.jpg": !0,
        "PX5.jpg": !0,
        "PX6.jpg": !0,
        "TUFAFE.jpg": !0,
        "VZUSAM.jpg": !0,
        "VZUSOP.jpg": !0,
      },
    },
    Ge = "ASCEND",
    Je = "DESCEND",
    Ye = { MIN_WIDTH: 750 },
    Ze = {
      rarity: {
        common: 1,
        uncommon: 2,
        rare: 3,
        epic: 4,
        legendary: 5,
        anomaly: 6,
      },
      size: {
        "xx-small": 1,
        "x-small": 2,
        small: 3,
        medium: 4,
        large: 5,
        capital: 6,
        commander: 7,
        titan: 8,
      },
    };
  (Ze.shipClass = Ze.size),
    (window.process = { env: { NODE_ENV: "production" } });
  var Ke = function () {
    (this.__data__ = []), (this.size = 0);
  };
  var Qe = function (t, e) {
    return t === e || (t != t && e != e);
  };
  var ti = function (t, e) {
      for (var i = t.length; i--; ) if (Qe(t[i][0], e)) return i;
      return -1;
    },
    ei = Array.prototype.splice;
  var ii = function (t) {
    var e = this.__data__,
      i = ti(e, t);
    return (
      !(i < 0) &&
      (i == e.length - 1 ? e.pop() : ei.call(e, i, 1), --this.size, !0)
    );
  };
  var ni = function (t) {
    var e = this.__data__,
      i = ti(e, t);
    return i < 0 ? void 0 : e[i][1];
  };
  var ri = function (t) {
    return ti(this.__data__, t) > -1;
  };
  var oi = function (t, e) {
    var i = this.__data__,
      n = ti(i, t);
    return n < 0 ? (++this.size, i.push([t, e])) : (i[n][1] = e), this;
  };
  function si(t) {
    var e = -1,
      i = null == t ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (si.prototype.clear = Ke),
    (si.prototype.delete = ii),
    (si.prototype.get = ni),
    (si.prototype.has = ri),
    (si.prototype.set = oi);
  var ai = si;
  var li = function () {
    (this.__data__ = new ai()), (this.size = 0);
  };
  var hi = function (t) {
    var e = this.__data__,
      i = e.delete(t);
    return (this.size = e.size), i;
  };
  var ui = function (t) {
    return this.__data__.get(t);
  };
  var ci = function (t) {
      return this.__data__.has(t);
    },
    pi =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function fi(t) {
    var e = { exports: {} };
    return t(e, e.exports), e.exports;
  }
  var di = "object" == typeof pi && pi && pi.Object === Object && pi,
    vi = "object" == typeof self && self && self.Object === Object && self,
    mi = di || vi || Function("return this")(),
    yi = mi.Symbol,
    gi = Object.prototype,
    wi = gi.hasOwnProperty,
    bi = gi.toString,
    $i = yi ? yi.toStringTag : void 0;
  var xi = function (t) {
      var e = wi.call(t, $i),
        i = t[$i];
      try {
        t[$i] = void 0;
        var n = !0;
      } catch (t) {}
      var r = bi.call(t);
      return n && (e ? (t[$i] = i) : delete t[$i]), r;
    },
    _i = Object.prototype.toString;
  var Mi = function (t) {
      return _i.call(t);
    },
    ki = yi ? yi.toStringTag : void 0;
  var Si = function (t) {
    return null == t
      ? void 0 === t
        ? "[object Undefined]"
        : "[object Null]"
      : ki && ki in Object(t)
      ? xi(t)
      : Mi(t);
  };
  var Ci = function (t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
  };
  var Li,
    Di = function (t) {
      if (!Ci(t)) return !1;
      var e = Si(t);
      return (
        "[object Function]" == e ||
        "[object GeneratorFunction]" == e ||
        "[object AsyncFunction]" == e ||
        "[object Proxy]" == e
      );
    },
    Ai = mi["__core-js_shared__"],
    Ti = (Li = /[^.]+$/.exec((Ai && Ai.keys && Ai.keys.IE_PROTO) || ""))
      ? "Symbol(src)_1." + Li
      : "";
  var ji = function (t) {
      return !!Ti && Ti in t;
    },
    Oi = Function.prototype.toString;
  var Ei = function (t) {
      if (null != t) {
        try {
          return Oi.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    },
    Pi = /^\[object .+?Constructor\]$/,
    Ni = Function.prototype,
    Ri = Object.prototype,
    Bi = Ni.toString,
    Wi = Ri.hasOwnProperty,
    zi = RegExp(
      "^" +
        Bi.call(Wi)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  var Hi = function (t) {
    return !(!Ci(t) || ji(t)) && (Di(t) ? zi : Pi).test(Ei(t));
  };
  var Fi = function (t, e) {
    return null == t ? void 0 : t[e];
  };
  var Ui = function (t, e) {
      var i = Fi(t, e);
      return Hi(i) ? i : void 0;
    },
    Vi = Ui(mi, "Map"),
    Ii = Ui(Object, "create");
  var qi = function () {
    (this.__data__ = Ii ? Ii(null) : {}), (this.size = 0);
  };
  var Xi = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    },
    Gi = Object.prototype.hasOwnProperty;
  var Ji = function (t) {
      var e = this.__data__;
      if (Ii) {
        var i = e[t];
        return "__lodash_hash_undefined__" === i ? void 0 : i;
      }
      return Gi.call(e, t) ? e[t] : void 0;
    },
    Yi = Object.prototype.hasOwnProperty;
  var Zi = function (t) {
    var e = this.__data__;
    return Ii ? void 0 !== e[t] : Yi.call(e, t);
  };
  var Ki = function (t, e) {
    var i = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (i[t] = Ii && void 0 === e ? "__lodash_hash_undefined__" : e),
      this
    );
  };
  function Qi(t) {
    var e = -1,
      i = null == t ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (Qi.prototype.clear = qi),
    (Qi.prototype.delete = Xi),
    (Qi.prototype.get = Ji),
    (Qi.prototype.has = Zi),
    (Qi.prototype.set = Ki);
  var tn = Qi;
  var en = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new tn(),
        map: new (Vi || ai)(),
        string: new tn(),
      });
  };
  var nn = function (t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e
      ? "__proto__" !== t
      : null === t;
  };
  var rn = function (t, e) {
    var i = t.__data__;
    return nn(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
  };
  var on = function (t) {
    var e = rn(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  };
  var sn = function (t) {
    return rn(this, t).get(t);
  };
  var an = function (t) {
    return rn(this, t).has(t);
  };
  var ln = function (t, e) {
    var i = rn(this, t),
      n = i.size;
    return i.set(t, e), (this.size += i.size == n ? 0 : 1), this;
  };
  function hn(t) {
    var e = -1,
      i = null == t ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (hn.prototype.clear = en),
    (hn.prototype.delete = on),
    (hn.prototype.get = sn),
    (hn.prototype.has = an),
    (hn.prototype.set = ln);
  var un = hn;
  var cn = function (t, e) {
    var i = this.__data__;
    if (i instanceof ai) {
      var n = i.__data__;
      if (!Vi || n.length < 199)
        return n.push([t, e]), (this.size = ++i.size), this;
      i = this.__data__ = new un(n);
    }
    return i.set(t, e), (this.size = i.size), this;
  };
  function pn(t) {
    var e = (this.__data__ = new ai(t));
    this.size = e.size;
  }
  (pn.prototype.clear = li),
    (pn.prototype.delete = hi),
    (pn.prototype.get = ui),
    (pn.prototype.has = ci),
    (pn.prototype.set = cn);
  var fn = pn;
  var dn = function (t, e) {
      for (
        var i = -1, n = null == t ? 0 : t.length;
        ++i < n && !1 !== e(t[i], i, t);

      );
      return t;
    },
    vn = (function () {
      try {
        var t = Ui(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch (t) {}
    })();
  var mn = function (t, e, i) {
      "__proto__" == e && vn
        ? vn(t, e, { configurable: !0, enumerable: !0, value: i, writable: !0 })
        : (t[e] = i);
    },
    yn = Object.prototype.hasOwnProperty;
  var gn = function (t, e, i) {
    var n = t[e];
    (yn.call(t, e) && Qe(n, i) && (void 0 !== i || e in t)) || mn(t, e, i);
  };
  var wn = function (t, e, i, n) {
    var r = !i;
    i || (i = {});
    for (var o = -1, s = e.length; ++o < s; ) {
      var a = e[o],
        l = n ? n(i[a], t[a], a, i, t) : void 0;
      void 0 === l && (l = t[a]), r ? mn(i, a, l) : gn(i, a, l);
    }
    return i;
  };
  var bn = function (t, e) {
    for (var i = -1, n = Array(t); ++i < t; ) n[i] = e(i);
    return n;
  };
  var $n = function (t) {
    return null != t && "object" == typeof t;
  };
  var xn = function (t) {
      return $n(t) && "[object Arguments]" == Si(t);
    },
    _n = Object.prototype,
    Mn = _n.hasOwnProperty,
    kn = _n.propertyIsEnumerable,
    Sn = xn(
      (function () {
        return arguments;
      })()
    )
      ? xn
      : function (t) {
          return $n(t) && Mn.call(t, "callee") && !kn.call(t, "callee");
        },
    Cn = Sn,
    Ln = Array.isArray;
  var Dn = function () {
      return !1;
    },
    An = fi(function (t, e) {
      var i = e && !e.nodeType && e,
        n = i && t && !t.nodeType && t,
        r = n && n.exports === i ? mi.Buffer : void 0,
        o = (r ? r.isBuffer : void 0) || Dn;
      t.exports = o;
    }),
    Tn = /^(?:0|[1-9]\d*)$/;
  var jn = function (t, e) {
    var i = typeof t;
    return (
      !!(e = null == e ? 9007199254740991 : e) &&
      ("number" == i || ("symbol" != i && Tn.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  };
  var On = function (t) {
      return (
        "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      );
    },
    En = {};
  (En["[object Float32Array]"] =
    En["[object Float64Array]"] =
    En["[object Int8Array]"] =
    En["[object Int16Array]"] =
    En["[object Int32Array]"] =
    En["[object Uint8Array]"] =
    En["[object Uint8ClampedArray]"] =
    En["[object Uint16Array]"] =
    En["[object Uint32Array]"] =
      !0),
    (En["[object Arguments]"] =
      En["[object Array]"] =
      En["[object ArrayBuffer]"] =
      En["[object Boolean]"] =
      En["[object DataView]"] =
      En["[object Date]"] =
      En["[object Error]"] =
      En["[object Function]"] =
      En["[object Map]"] =
      En["[object Number]"] =
      En["[object Object]"] =
      En["[object RegExp]"] =
      En["[object Set]"] =
      En["[object String]"] =
      En["[object WeakMap]"] =
        !1);
  var Pn = function (t) {
    return $n(t) && On(t.length) && !!En[Si(t)];
  };
  var Nn = function (t) {
      return function (e) {
        return t(e);
      };
    },
    Rn = fi(function (t, e) {
      var i = e && !e.nodeType && e,
        n = i && t && !t.nodeType && t,
        r = n && n.exports === i && di.process,
        o = (function () {
          try {
            var t = n && n.require && n.require("util").types;
            return t || (r && r.binding && r.binding("util"));
          } catch (t) {}
        })();
      t.exports = o;
    }),
    Bn = Rn && Rn.isTypedArray,
    Wn = Bn ? Nn(Bn) : Pn,
    zn = Object.prototype.hasOwnProperty;
  var Hn = function (t, e) {
      var i = Ln(t),
        n = !i && Cn(t),
        r = !i && !n && An(t),
        o = !i && !n && !r && Wn(t),
        s = i || n || r || o,
        a = s ? bn(t.length, String) : [],
        l = a.length;
      for (var h in t)
        (!e && !zn.call(t, h)) ||
          (s &&
            ("length" == h ||
              (r && ("offset" == h || "parent" == h)) ||
              (o &&
                ("buffer" == h || "byteLength" == h || "byteOffset" == h)) ||
              jn(h, l))) ||
          a.push(h);
      return a;
    },
    Fn = Object.prototype;
  var Un = function (t) {
    var e = t && t.constructor;
    return t === (("function" == typeof e && e.prototype) || Fn);
  };
  var Vn = function (t, e) {
      return function (i) {
        return t(e(i));
      };
    },
    In = Vn(Object.keys, Object),
    qn = Object.prototype.hasOwnProperty;
  var Xn = function (t) {
    if (!Un(t)) return In(t);
    var e = [];
    for (var i in Object(t)) qn.call(t, i) && "constructor" != i && e.push(i);
    return e;
  };
  var Gn = function (t) {
    return null != t && On(t.length) && !Di(t);
  };
  var Jn = function (t) {
    return Gn(t) ? Hn(t) : Xn(t);
  };
  var Yn = function (t, e) {
    return t && wn(e, Jn(e), t);
  };
  var Zn = function (t) {
      var e = [];
      if (null != t) for (var i in Object(t)) e.push(i);
      return e;
    },
    Kn = Object.prototype.hasOwnProperty;
  var Qn = function (t) {
    if (!Ci(t)) return Zn(t);
    var e = Un(t),
      i = [];
    for (var n in t) ("constructor" != n || (!e && Kn.call(t, n))) && i.push(n);
    return i;
  };
  var tr = function (t) {
    return Gn(t) ? Hn(t, !0) : Qn(t);
  };
  var er = function (t, e) {
      return t && wn(e, tr(e), t);
    },
    ir = fi(function (t, e) {
      var i = e && !e.nodeType && e,
        n = i && t && !t.nodeType && t,
        r = n && n.exports === i ? mi.Buffer : void 0,
        o = r ? r.allocUnsafe : void 0;
      t.exports = function (t, e) {
        if (e) return t.slice();
        var i = t.length,
          n = o ? o(i) : new t.constructor(i);
        return t.copy(n), n;
      };
    });
  var nr = function (t, e) {
    var i = -1,
      n = t.length;
    for (e || (e = Array(n)); ++i < n; ) e[i] = t[i];
    return e;
  };
  var rr = function (t, e) {
    for (var i = -1, n = null == t ? 0 : t.length, r = 0, o = []; ++i < n; ) {
      var s = t[i];
      e(s, i, t) && (o[r++] = s);
    }
    return o;
  };
  var or = function () {
      return [];
    },
    sr = Object.prototype.propertyIsEnumerable,
    ar = Object.getOwnPropertySymbols,
    lr = ar
      ? function (t) {
          return null == t
            ? []
            : ((t = Object(t)),
              rr(ar(t), function (e) {
                return sr.call(t, e);
              }));
        }
      : or;
  var hr = function (t, e) {
    return wn(t, lr(t), e);
  };
  var ur = function (t, e) {
      for (var i = -1, n = e.length, r = t.length; ++i < n; ) t[r + i] = e[i];
      return t;
    },
    cr = Vn(Object.getPrototypeOf, Object),
    pr = Object.getOwnPropertySymbols
      ? function (t) {
          for (var e = []; t; ) ur(e, lr(t)), (t = cr(t));
          return e;
        }
      : or;
  var fr = function (t, e) {
    return wn(t, pr(t), e);
  };
  var dr = function (t, e, i) {
    var n = e(t);
    return Ln(t) ? n : ur(n, i(t));
  };
  var vr = function (t) {
    return dr(t, Jn, lr);
  };
  var mr = function (t) {
      return dr(t, tr, pr);
    },
    yr = Ui(mi, "DataView"),
    gr = Ui(mi, "Promise"),
    wr = Ui(mi, "Set"),
    br = Ui(mi, "WeakMap"),
    $r = "[object Map]",
    xr = "[object Promise]",
    _r = "[object Set]",
    Mr = "[object WeakMap]",
    kr = "[object DataView]",
    Sr = Ei(yr),
    Cr = Ei(Vi),
    Lr = Ei(gr),
    Dr = Ei(wr),
    Ar = Ei(br),
    Tr = Si;
  ((yr && Tr(new yr(new ArrayBuffer(1))) != kr) ||
    (Vi && Tr(new Vi()) != $r) ||
    (gr && Tr(gr.resolve()) != xr) ||
    (wr && Tr(new wr()) != _r) ||
    (br && Tr(new br()) != Mr)) &&
    (Tr = function (t) {
      var e = Si(t),
        i = "[object Object]" == e ? t.constructor : void 0,
        n = i ? Ei(i) : "";
      if (n)
        switch (n) {
          case Sr:
            return kr;
          case Cr:
            return $r;
          case Lr:
            return xr;
          case Dr:
            return _r;
          case Ar:
            return Mr;
        }
      return e;
    });
  var jr = Tr,
    Or = Object.prototype.hasOwnProperty;
  var Er = function (t) {
      var e = t.length,
        i = new t.constructor(e);
      return (
        e &&
          "string" == typeof t[0] &&
          Or.call(t, "index") &&
          ((i.index = t.index), (i.input = t.input)),
        i
      );
    },
    Pr = mi.Uint8Array;
  var Nr = function (t) {
    var e = new t.constructor(t.byteLength);
    return new Pr(e).set(new Pr(t)), e;
  };
  var Rr = function (t, e) {
      var i = e ? Nr(t.buffer) : t.buffer;
      return new t.constructor(i, t.byteOffset, t.byteLength);
    },
    Br = /\w*$/;
  var Wr = function (t) {
      var e = new t.constructor(t.source, Br.exec(t));
      return (e.lastIndex = t.lastIndex), e;
    },
    zr = yi ? yi.prototype : void 0,
    Hr = zr ? zr.valueOf : void 0;
  var Fr = function (t) {
    return Hr ? Object(Hr.call(t)) : {};
  };
  var Ur = function (t, e) {
    var i = e ? Nr(t.buffer) : t.buffer;
    return new t.constructor(i, t.byteOffset, t.length);
  };
  var Vr = function (t, e, i) {
      var n = t.constructor;
      switch (e) {
        case "[object ArrayBuffer]":
          return Nr(t);
        case "[object Boolean]":
        case "[object Date]":
          return new n(+t);
        case "[object DataView]":
          return Rr(t, i);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return Ur(t, i);
        case "[object Map]":
        case "[object Set]":
          return new n();
        case "[object Number]":
        case "[object String]":
          return new n(t);
        case "[object RegExp]":
          return Wr(t);
        case "[object Symbol]":
          return Fr(t);
      }
    },
    Ir = Object.create,
    qr = (function () {
      function t() {}
      return function (e) {
        if (!Ci(e)) return {};
        if (Ir) return Ir(e);
        t.prototype = e;
        var i = new t();
        return (t.prototype = void 0), i;
      };
    })();
  var Xr = function (t) {
    return "function" != typeof t.constructor || Un(t) ? {} : qr(cr(t));
  };
  var Gr = function (t) {
      return $n(t) && "[object Map]" == jr(t);
    },
    Jr = Rn && Rn.isMap,
    Yr = Jr ? Nn(Jr) : Gr;
  var Zr = function (t) {
      return $n(t) && "[object Set]" == jr(t);
    },
    Kr = Rn && Rn.isSet,
    Qr = Kr ? Nn(Kr) : Zr,
    to = "[object Arguments]",
    eo = "[object Function]",
    io = "[object Object]",
    no = {};
  (no[to] =
    no["[object Array]"] =
    no["[object ArrayBuffer]"] =
    no["[object DataView]"] =
    no["[object Boolean]"] =
    no["[object Date]"] =
    no["[object Float32Array]"] =
    no["[object Float64Array]"] =
    no["[object Int8Array]"] =
    no["[object Int16Array]"] =
    no["[object Int32Array]"] =
    no["[object Map]"] =
    no["[object Number]"] =
    no[io] =
    no["[object RegExp]"] =
    no["[object Set]"] =
    no["[object String]"] =
    no["[object Symbol]"] =
    no["[object Uint8Array]"] =
    no["[object Uint8ClampedArray]"] =
    no["[object Uint16Array]"] =
    no["[object Uint32Array]"] =
      !0),
    (no["[object Error]"] = no[eo] = no["[object WeakMap]"] = !1);
  var ro = function t(e, i, n, r, o, s) {
    var a,
      l = 1 & i,
      h = 2 & i,
      u = 4 & i;
    if ((n && (a = o ? n(e, r, o, s) : n(e)), void 0 !== a)) return a;
    if (!Ci(e)) return e;
    var c = Ln(e);
    if (c) {
      if (((a = Er(e)), !l)) return nr(e, a);
    } else {
      var p = jr(e),
        f = p == eo || "[object GeneratorFunction]" == p;
      if (An(e)) return ir(e, l);
      if (p == io || p == to || (f && !o)) {
        if (((a = h || f ? {} : Xr(e)), !l))
          return h ? fr(e, er(a, e)) : hr(e, Yn(a, e));
      } else {
        if (!no[p]) return o ? e : {};
        a = Vr(e, p, l);
      }
    }
    s || (s = new fn());
    var d = s.get(e);
    if (d) return d;
    s.set(e, a),
      Qr(e)
        ? e.forEach(function (r) {
            a.add(t(r, i, n, r, e, s));
          })
        : Yr(e) &&
          e.forEach(function (r, o) {
            a.set(o, t(r, i, n, o, e, s));
          });
    var v = c ? void 0 : (u ? (h ? mr : vr) : h ? tr : Jn)(e);
    return (
      dn(v || e, function (r, o) {
        v && (r = e[(o = r)]), gn(a, o, t(r, i, n, o, e, s));
      }),
      a
    );
  };
  var oo = function (t) {
    return ro(t, 5);
  };
  const so = { op: "subscribe", channel: "trades" },
    ao = { op: "subscribe", channel: "level2" },
    lo = {};
  let ho = {},
    uo = {},
    co = {},
    po = [];
  Ne.subscribe((t) => {
    po = t;
  }),
    Oe.subscribe((t) => {
      ho = t;
    }),
    Ee.subscribe((t) => {
      co = t;
    }),
    je.subscribe((t) => {
      uo = t;
    });
  const fo = (() => {
      const t = [
          {
            market: "ATLAS/USDC",
            dexlabAddress: "Di66GTLsV64JgCCYGVcY21RZ173BHkjJVgPyezNN7P1K",
          },
          {
            market: "POLIS/USDC",
            dexlabAddress: "HxFLKUAmAMLz1jtT3hbvCMELwH5H9tpM2QugP8sKyfhW",
          },
          {
            market: "SOL/USDC",
            dexlabAddress: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT",
          },
        ],
        e = (t) =>
          "https://open-api.dexlab.space/v1/prices/" + t + "/closing-price";
      return async () => {
        for (const e of t) {
          const t = await fetch(
            ((i = e.dexlabAddress),
            "https://open-api.dexlab.space/v1/prices/" + i + "/last")
          );
          if (t.ok) {
            const i = await t.json();
            i.success &&
              i.data &&
              ((uo[e.market] = Number(i.data.price)), je.set(uo));
          }
        }
        var i;
        for (const i of t) {
          const t = await fetch(e(i.dexlabAddress));
          if (t.ok) {
            const e = await t.json();
            e.success &&
              e.data &&
              ((uo["CLOSE " + i.market] = Number(e.data.price)), je.set(uo));
          }
        }
      };
    })(),
    vo = (t, e) => t.find((t) => t.markets.find((t) => t.id === e.market)),
    mo = (() => {
      const t = (t, e) =>
          Number(t[0]) > Number(e[0])
            ? 1
            : Number(t[0]) < Number(e[0])
            ? -1
            : 0,
        e = (t, e) => {
          if (!t && !e) return 0;
          const i = Number(t || 0),
            n = Number(e || 0);
          return Math.max(i, n);
        },
        i = (t, e) => {
          if (!t && !e) return 0;
          const i = Number(t || 1 / 0),
            n = Number(e || 1 / 0);
          return Math.min(i, n);
        };
      return (n) => {
        const r = JSON.parse(n.data);
        if (!r) return;
        if ("recent_trades" === r.type) return yo(r);
        if ("l2snapshot" !== r.type && "l2update" !== r.type) return;
        const o = vo(po, r);
        if (!o) return;
        const s = { ...ho },
          a = r.asks.sort(t),
          l = r.bids.sort(t);
        let h = a[0],
          u = l[l.length - 1];
        (h = h ? h[0] : 0),
          (u = u ? u[0] : 0),
          (o.prices = s[o.id] = { ...(s[o.id] || lo), name: o.name, id: o.id });
        const c = o.markets.find((t) => t.id === r.market);
        "ATLAS" === c.quotePair &&
          ((s[o.id].askATLAS = i(s[o.id].askATLAS, h)),
          (s[o.id].bidATLAS = e(s[o.id].bidATLAS, u))),
          "USDC" === c.quotePair &&
            ((s[o.id].askUSDC = i(s[o.id].askUSDC, h)),
            (s[o.id].bidUSDC = e(s[o.id].bidUSDC, u))),
          Ne.set(po),
          Oe.set(s);
      };
    })(),
    yo = (() => {
      const t = (() => {
        const t = (t) => {
            const e = new Date(t).getTime();
            return Math.round(e / 1e3);
          },
          e = (e) => ({ time: t(e.timestamp), value: Number(e.price) }),
          i = (t, e) => t[e].time !== t[e - 1].time,
          n = (t, e) => !t[e + 1] || t[e + 1].time - t[e].time > 1,
          r = (t, e) => (t.time > e.time ? 1 : t.time < e.time ? -1 : 0);
        return (t, o) => {
          const s = t.map(e).sort(r),
            a = [s[0]];
          for (let t = 1; t < s.length; t++)
            i(s, t) ? a.push(s[t]) : n(s, t) && (s[t].time++, a.push(s[t]));
          if (o)
            for (const t of o) a.find((e) => e.time === t.time) || a.push(t);
          return a.sort(r), a;
        };
      })();
      return (e) => {
        if (!e.trades || !e.trades.length) return;
        const i = vo(po, e);
        if (!i) return;
        const { quotePair: n } = i.markets.find((t) => t.id === e.market),
          r = oo(co),
          o = (r[i.id] = r[i.id] || {});
        (o[n] = t(e.trades, o[n])), Ee.set(r);
      };
    })();
  let go = null;
  const wo = async (t) => {
      const e = await fetch(
        ((i = t.id), "https://open-api.dexlab.space/v1/trades/" + i + "/24h")
      );
      var i;
      if (e.ok) {
        const i = await e.json();
        i.success && i.data && i.data.length;
        const n = ((t, e) => {
          const i = t.data
            .filter((t) => "buy" === t.side)
            .map((t) => ({
              type: t.type,
              price: t.price,
              side: t.side,
              timestamp: t.time,
              size: t.size,
              market: e.id,
            }));
          return {
            market: e.id,
            timestamp: Date.now(),
            type: "recent_trades",
            trades: i,
          };
        })(i, t);
        yo(n);
      }
    },
    bo = (() => {
      const t = {};
      return (e) => {
        if (go && !t[e.id]) {
          t[e.id] = !0;
          for (const t of e.markets)
            go.send(JSON.stringify({ ...so, markets: [t.id] })), wo(t);
        }
      };
    })(),
    $o = () => {
      go ||
        (po && po.length
          ? (fo(),
            setInterval(fo, 6e4),
            (go = new WebSocket("wss://serum-vial.staratlas.cloud/v1/ws")),
            (go.onmessage = mo),
            (go.onopen = () => {
              for (const t of po)
                for (const e of t.markets)
                  go.send(JSON.stringify({ ...ao, markets: [e.id] }));
            }))
          : console.log("NOT INITIATED -- SHIP LIST EMPTY??"));
    };
  var xo = {
    VZUSOP: {
      earnDailyAtlas: 69.5131,
      burnDailyAtlas: 13.9578,
      hoursResupply: "3D-20H",
      timeResupply: 331233,
    },
    PX5: {
      earnDailyAtlas: 6.2536,
      burnDailyAtlas: 1.5713,
      hoursResupply: "2D-2H",
      timeResupply: 180790,
    },
    OGKATP: {
      earnDailyAtlas: 360.6708,
      burnDailyAtlas: 77.1313,
      hoursResupply: "5D-1H",
      timeResupply: 437412,
    },
    PF4: {
      earnDailyAtlas: 118.984,
      burnDailyAtlas: 24.2877,
      hoursResupply: "4D-1H",
      timeResupply: 349960,
    },
    OPALJJ: {
      earnDailyAtlas: 12.242,
      burnDailyAtlas: 1.9457,
      hoursResupply: "2D-2H",
      timeResupply: 182140,
    },
    VZUSAM: {
      earnDailyAtlas: 47.742,
      burnDailyAtlas: 7.7423,
      hoursResupply: "3D-9H",
      timeResupply: 291703,
    },
    FBLEGR: {
      earnDailyAtlas: 352.9829,
      burnDailyAtlas: 66.5222,
      hoursResupply: "5D-13H",
      timeResupply: 480520,
    },
    PR8: {
      earnDailyAtlas: 433.9984,
      burnDailyAtlas: 68.0048,
      hoursResupply: "4D-15H",
      timeResupply: 400420,
    },
    PC11: {
      earnDailyAtlas: 3462.0644,
      burnDailyAtlas: 513.0503,
      hoursResupply: "7D-2H",
      timeResupply: 612349,
    },
    OGKAJA: {
      earnDailyAtlas: 1145.2769,
      burnDailyAtlas: 145.9798,
      hoursResupply: "5D-0H",
      timeResupply: 434181,
    },
    PX6: {
      earnDailyAtlas: 38.562,
      burnDailyAtlas: 7.5627,
      hoursResupply: "2D-23H",
      timeResupply: 259097,
    },
    FBLETR: {
      earnDailyAtlas: 3980.1015,
      burnDailyAtlas: 506.8419,
      hoursResupply: "7D-18H",
      timeResupply: 672605,
    },
    CHI: {
      earnDailyAtlas: 40.1198,
      burnDailyAtlas: 6.9534,
      hoursResupply: "3D-1H",
      timeResupply: 265716,
    },
    FBLBEA: {
      earnDailyAtlas: 36.9948,
      burnDailyAtlas: 7.1619,
      hoursResupply: "3D-4H",
      timeResupply: 277061,
    },
    CALEV: {
      earnDailyAtlas: 106.5649,
      burnDailyAtlas: 20.4952,
      hoursResupply: "3D-16H",
      timeResupply: 318199,
    },
    FBLAIR: {
      earnDailyAtlas: 0.7352,
      burnDailyAtlas: 0.18576,
      hoursResupply: "0D-21H",
      timeResupply: 78886.9,
    },
    FBLEBO: {
      earnDailyAtlas: 1374.5989,
      burnDailyAtlas: 168.496,
      hoursResupply: "6D-16H",
      timeResupply: 576560,
    },
    CALG: {
      earnDailyAtlas: 1174.468,
      burnDailyAtlas: 145.0294,
      hoursResupply: "6D-10H",
      timeResupply: 555360,
    },
    OM: {
      earnDailyAtlas: 111.6444,
      burnDailyAtlas: 18.5539,
      hoursResupply: "3D-8H",
      timeResupply: 290309,
    },
    FBLBPL: {
      earnDailyAtlas: 138.9424,
      burnDailyAtlas: 21.8387,
      hoursResupply: "3D-12H",
      timeResupply: 305128,
    },
    CALCH: {
      earnDailyAtlas: 146.8696,
      burnDailyAtlas: 20.6486,
      hoursResupply: "4D-5H",
      timeResupply: 364351,
    },
    PX4: {
      earnDailyAtlas: 0.966,
      burnDailyAtlas: 0.2109,
      hoursResupply: "1D-1H",
      timeResupply: 90157,
    },
    OPALJ: {
      earnDailyAtlas: 0.851,
      burnDailyAtlas: 0.1845,
      hoursResupply: "0D-23H",
      timeResupply: 86400,
    },
    PC9: {
      earnDailyAtlas: 1210.4476,
      burnDailyAtlas: 170.565,
      hoursResupply: "6D-1H",
      timeResupply: 524777,
    },
    TUFAFE: {
      earnDailyAtlas: 33.9492,
      burnDailyAtlas: 7.4495,
      hoursResupply: "4D-8H",
      timeResupply: 377091,
    },
  };
  const _o = (t, e) =>
      e
        ? (i, n) => (
            e[i[t]] || console.error("A", i[t], i),
            e[n[t]] || console.error("B", n[t], n),
            e[i[t]] > e[n[t]] ? 1 : e[i[t]] < e[n[t]] ? -1 : 0
          )
        : (e, i) => (e[t] > i[t] ? 1 : e[t] < i[t] ? -1 : 0),
    Mo = {
      apr: (t, e, i) => {
        if (!i["ATLAS/USDC"]) return 0;
        let n = 0;
        "VWAP" === t
          ? (n = e.tradeSettings.vwap)
          : "askUSDC" === t && (n = e.prices && e.prices.askUSDC);
        const r = e.burnDailyAtlas,
          o = e.earnDailyAtlas;
        return n && r && o ? 365 / (n / Number(i["ATLAS/USDC"]) / (o - r)) : 0;
      },
    };
  let ko = {};
  Oe.subscribe((t) => {
    ko = t;
  });
  const So = (t) => {
    if (!t) return [];
    const e = t.filter(
      (t) =>
        t.attributes &&
        "ship" === t.attributes.itemType &&
        !1 === t.deactivated &&
        t.markets
    );
    if (!e || !e.length) return;
    const i = e
      .map((t) => ({ ...xo[t.symbol], ...t, prices: ko[t.id] }))
      .sort(_o("name"));
    Ne.set(i), setTimeout($o, 50);
  };
  function Co(e) {
    let i, n, r, o, s, a, l, h, u;
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (r = E(e[2])),
          (o = P()),
          (s = j("span")),
          (a = E(e[1])),
          (l = P()),
          (h = j("span")),
          (h.textContent = "%"),
          B(n, "class", "sign svelte-1qbm6mv"),
          B(s, "class", "number svelte-1qbm6mv"),
          B(h, "class", "percent-mark svelte-1qbm6mv"),
          B(i, "class", (u = g(e[4] + e[3]) + " svelte-1qbm6mv")),
          B(i, "style", e[0]);
      },
      m(t, e) {
        D(t, i, e),
          S(i, n),
          S(n, r),
          S(i, o),
          S(i, s),
          S(s, a),
          S(i, l),
          S(i, h);
      },
      p(t, [e]) {
        4 & e && W(r, t[2]),
          2 & e && W(a, t[1]),
          24 & e &&
            u !== (u = g(t[4] + t[3]) + " svelte-1qbm6mv") &&
            B(i, "class", u),
          1 & e && B(i, "style", t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Lo(t, e, i) {
    let n,
      r,
      o,
      s,
      { num: a = 0 } = e,
      { decimals: l = 1 } = e,
      { style: h = "" } = e,
      { className: u = "" } = e;
    return (
      (t.$$set = (t) => {
        "num" in t && i(5, (a = t.num)),
          "decimals" in t && i(6, (l = t.decimals)),
          "style" in t && i(0, (h = t.style)),
          "className" in t && i(7, (u = t.className));
      }),
      (t.$$.update = () => {
        128 & t.$$.dirty && i(4, (n = u ? u + " " : "")),
          32 & t.$$.dirty &&
            i(
              3,
              (r =
                a < 0 ? "percent-display negative" : "percent-display positive")
            ),
          32 & t.$$.dirty && i(2, (o = 0 === a ? "" : a < 0 ? "—" : "+")),
          96 & t.$$.dirty && i(1, (s = Math.abs(100 * a).toFixed(l)));
      }),
      [h, s, o, r, n, a, l, u]
    );
  }
  Pe.subscribe(So);
  class Do extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, Lo, Co, a, { num: 5, decimals: 6, style: 0, className: 7 });
    }
  }
  function Ao(e) {
    let i, n;
    return {
      c() {
        (i = j("div")),
          (i.innerHTML = '<div id="tradingview-target"></div>'),
          B(i, "class", "chart-container svelte-1msyjbr"),
          ht(() => e[2].call(i));
      },
      m(t, r) {
        D(t, i, r), (n = U(i, e[2].bind(i)));
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && A(i), n();
      },
    };
  }
  function To(t, e, i) {
    let n,
      { message: r } = e;
    const o = {
        "ATLAS/USDC": "FTX:ATLASUSD",
        "POLIS/USDC": "FTX:POLISUSD",
        "SOL/USDC": "FTX:SOLUSD",
      },
      s = () => {
        console.log("MARKET>>> ???", r, o[r]);
        const t = Math.max(Math.round(n / 1.6, 500));
        new window.TradingView.widget({
          width: Math.round(n / 1.1),
          height: t,
          symbol: o[r],
          interval: "60",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: !1,
          save_image: !1,
          popup_width: "1000",
          popup_height: "650",
          container_id: "tradingview-target",
        });
      };
    return (
      Q(() => {
        return (
          (t = "https://s3.tradingview.com/tv.js"),
          (e = s),
          (i = document.createElement("script")).setAttribute("async", !0),
          i.setAttribute("type", "text/javascript"),
          i.setAttribute("src", t),
          (i.onload = e),
          void document.getElementsByTagName("head")[0].appendChild(i)
        );
        var t, e, i;
      }),
      (t.$$set = (t) => {
        "message" in t && i(1, (r = t.message));
      }),
      [
        n,
        r,
        function () {
          (n = this.clientWidth), i(0, n);
        },
      ]
    );
  }
  class jo extends Rt {
    constructor(t) {
      super(), Nt(this, t, To, Ao, a, { message: 1 });
    }
  }
  function Oo(t, e, i) {
    const n = t.slice();
    return (n[4] = e[i]), n;
  }
  function Eo(t) {
    let e,
      i,
      n,
      r,
      o,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y = t[4].market[0] + "",
      g = t[4].market[1] + "",
      w = t[4].price + "";
    return (
      (p = new Do({ props: { className: "ticker", num: t[4].diff } })),
      {
        c() {
          (e = j("div")),
            (i = j("div")),
            (n = E(y)),
            (r = j("span")),
            (r.textContent = "/"),
            (o = E(g)),
            (a = P()),
            (l = j("div")),
            (h = E(w)),
            (u = P()),
            (c = j("div")),
            jt(p.$$.fragment),
            (f = P()),
            B(r, "class", "slash svelte-sop6mn"),
            B(i, "class", "market svelte-sop6mn"),
            B(l, "class", "price svelte-sop6mn"),
            B(c, "class", "diff svelte-sop6mn"),
            B(e, "class", "ticker-group svelte-sop6mn");
        },
        m(y, g) {
          D(y, e, g),
            S(e, i),
            S(i, n),
            S(i, r),
            S(i, o),
            S(e, a),
            S(e, l),
            S(l, h),
            S(e, u),
            S(e, c),
            Ot(p, c, null),
            S(e, f),
            (d = !0),
            v ||
              ((m = R(i, "click", function () {
                s(t[1](t[4].market.join("/"))) &&
                  t[1](t[4].market.join("/")).apply(this, arguments);
              })),
              (v = !0));
        },
        p(e, i) {
          (t = e),
            (!d || 1 & i) && y !== (y = t[4].market[0] + "") && W(n, y),
            (!d || 1 & i) && g !== (g = t[4].market[1] + "") && W(o, g),
            (!d || 1 & i) && w !== (w = t[4].price + "") && W(h, w);
          const r = {};
          1 & i && (r.num = t[4].diff), p.$set(r);
        },
        i(t) {
          d || ($t(p.$$.fragment, t), (d = !0));
        },
        o(t) {
          xt(p.$$.fragment, t), (d = !1);
        },
        d(t) {
          t && A(e), Et(p), (v = !1), m();
        },
      }
    );
  }
  function Po(t) {
    let e,
      i,
      n,
      r = t[0],
      o = [];
    for (let e = 0; e < r.length; e += 1) o[e] = Eo(Oo(t, r, e));
    const s = (t) =>
      xt(o[t], 1, 1, () => {
        o[t] = null;
      });
    return {
      c() {
        (e = j("div")), (i = j("div"));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        B(i, "class", "ticker-column svelte-sop6mn"),
          B(e, "class", "ticker-frame svelte-sop6mn");
      },
      m(t, r) {
        D(t, e, r), S(e, i);
        for (let t = 0; t < o.length; t += 1) o[t].m(i, null);
        n = !0;
      },
      p(t, [e]) {
        if (3 & e) {
          let n;
          for (r = t[0], n = 0; n < r.length; n += 1) {
            const s = Oo(t, r, n);
            o[n]
              ? (o[n].p(s, e), $t(o[n], 1))
              : ((o[n] = Eo(s)), o[n].c(), $t(o[n], 1), o[n].m(i, null));
          }
          for (wt(), n = r.length; n < o.length; n += 1) s(n);
          bt();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < r.length; t += 1) $t(o[t]);
          n = !0;
        }
      },
      o(t) {
        o = o.filter(Boolean);
        for (let t = 0; t < o.length; t += 1) xt(o[t]);
        n = !1;
      },
      d(t) {
        t && A(e), T(o, t);
      },
    };
  }
  function No(t, e, i) {
    let n, r;
    c(t, je, (t) => i(2, (r = t)));
    return (
      (t.$$.update = () => {
        4 & t.$$.dirty &&
          i(
            0,
            (n = ((t) => {
              const e = [],
                i = Object.keys(t).filter((t) => !t.startsWith("CLOSE "));
              for (const n of i) {
                const i = t[n],
                  r = t["CLOSE " + n],
                  o = r ? (i - r) / r : 0;
                e.push({ market: n.split("/"), price: i, close: r, diff: o });
              }
              return e;
            })(r))
          );
      }),
      [
        n,
        (t) => () => {
          Re.set(qt(jo, { message: t }));
        },
        r,
      ]
    );
  }
  class Ro extends Rt {
    constructor(t) {
      super(), Nt(this, t, No, Po, a, {});
    }
  }
  function Bo(e) {
    let i, n, r, a, l, h, u, c, p, f;
    return {
      c() {
        (i = j("div")),
          (n = j("div")),
          (r = E("Table")),
          (l = P()),
          (h = j("div")),
          (u = E("Grid")),
          B(n, "class", (a = g(e[2]) + " svelte-8e4kga")),
          B(h, "class", (c = g(e[1]) + " svelte-8e4kga")),
          B(i, "class", "button-display-mode svelte-8e4kga");
      },
      m(t, o) {
        D(t, i, o),
          S(i, n),
          S(n, r),
          S(i, l),
          S(i, h),
          S(h, u),
          p ||
            ((f = [
              R(n, "click", function () {
                s(e[0]("table")) && e[0]("table").apply(this, arguments);
              }),
              R(h, "click", function () {
                s(e[0]("grid")) && e[0]("grid").apply(this, arguments);
              }),
            ]),
            (p = !0));
      },
      p(t, [i]) {
        (e = t),
          4 & i && a !== (a = g(e[2]) + " svelte-8e4kga") && B(n, "class", a),
          2 & i && c !== (c = g(e[1]) + " svelte-8e4kga") && B(h, "class", c);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i), (p = !1), o(f);
      },
    };
  }
  function Wo(t, e, i) {
    let n,
      r,
      { switchDisplayMode: o = () => !1 } = e,
      { displayMode: s } = e;
    return (
      (t.$$set = (t) => {
        "switchDisplayMode" in t && i(0, (o = t.switchDisplayMode)),
          "displayMode" in t && i(3, (s = t.displayMode));
      }),
      (t.$$.update = () => {
        8 & t.$$.dirty &&
          i(2, (n = "mode table" + ("table" === s ? " active" : ""))),
          8 & t.$$.dirty &&
            i(1, (r = "mode grid" + ("grid" === s ? " active" : "")));
      }),
      [o, r, n, s]
    );
  }
  class zo extends Rt {
    constructor(t) {
      super(), Nt(this, t, Wo, Bo, a, { switchDisplayMode: 0, displayMode: 3 });
    }
  }
  function Ho(t) {
    let e, i;
    return (
      (e = new zo({ props: { displayMode: t[1], switchDisplayMode: t[0] } })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, n) {
          Ot(e, t, n), (i = !0);
        },
        p(t, i) {
          const n = {};
          2 & i && (n.displayMode = t[1]),
            1 & i && (n.switchDisplayMode = t[0]),
            e.$set(n);
        },
        i(t) {
          i || ($t(e.$$.fragment, t), (i = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (i = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function Fo(t) {
    let e, i, n, r, o, s, a, l;
    i = new Ro({});
    let h = t[2] && Ho(t);
    return {
      c() {
        (e = j("header")),
          jt(i.$$.fragment),
          (n = P()),
          (r = j("div")),
          (o = j("div")),
          (s = j("h1")),
          (s.textContent = "Ship Markets"),
          (a = P()),
          h && h.c(),
          B(s, "class", "svelte-1ri3j0n"),
          B(o, "class", "header-column svelte-1ri3j0n"),
          B(r, "class", "header-frame svelte-1ri3j0n"),
          B(e, "class", "svelte-1ri3j0n");
      },
      m(t, u) {
        D(t, e, u),
          Ot(i, e, null),
          S(e, n),
          S(e, r),
          S(r, o),
          S(o, s),
          S(o, a),
          h && h.m(o, null),
          (l = !0);
      },
      p(t, [e]) {
        t[2]
          ? h
            ? (h.p(t, e), 4 & e && $t(h, 1))
            : ((h = Ho(t)), h.c(), $t(h, 1), h.m(o, null))
          : h &&
            (wt(),
            xt(h, 1, 1, () => {
              h = null;
            }),
            bt());
      },
      i(t) {
        l || ($t(i.$$.fragment, t), $t(h), (l = !0));
      },
      o(t) {
        xt(i.$$.fragment, t), xt(h), (l = !1);
      },
      d(t) {
        t && A(e), Et(i), h && h.d();
      },
    };
  }
  function Uo(t, e, i) {
    let { switchDisplayMode: n = () => !1 } = e,
      { displayMode: r } = e,
      { showModeSwitch: o } = e;
    return (
      (t.$$set = (t) => {
        "switchDisplayMode" in t && i(0, (n = t.switchDisplayMode)),
          "displayMode" in t && i(1, (r = t.displayMode)),
          "showModeSwitch" in t && i(2, (o = t.showModeSwitch));
      }),
      [n, r, o]
    );
  }
  class Vo extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, Uo, Fo, a, {
          switchDisplayMode: 0,
          displayMode: 1,
          showModeSwitch: 2,
        });
    }
  }
  function Io(t) {
    let e, i;
    return {
      c() {
        (e = O("title")), (i = E(t[0]));
      },
      m(t, n) {
        D(t, e, n), S(e, i);
      },
      p(t, e) {
        1 & e && W(i, t[0]);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function qo(t) {
    let e,
      i,
      n,
      r = t[0] && Io(t);
    const o = t[3].default,
      s = p(o, t, t[2], null);
    return {
      c() {
        (e = O("svg")),
          r && r.c(),
          (i = N()),
          s && s.c(),
          B(e, "xmlns", "http://www.w3.org/2000/svg"),
          B(e, "viewBox", t[1]),
          B(e, "class", "svelte-c8tyih");
      },
      m(t, o) {
        D(t, e, o), r && r.m(e, null), S(e, i), s && s.m(e, null), (n = !0);
      },
      p(t, [a]) {
        t[0]
          ? r
            ? r.p(t, a)
            : ((r = Io(t)), r.c(), r.m(e, i))
          : r && (r.d(1), (r = null)),
          s &&
            s.p &&
            (!n || 4 & a) &&
            v(s, o, t, t[2], n ? d(o, t[2], a, null) : m(t[2]), null),
          (!n || 2 & a) && B(e, "viewBox", t[1]);
      },
      i(t) {
        n || ($t(s, t), (n = !0));
      },
      o(t) {
        xt(s, t), (n = !1);
      },
      d(t) {
        t && A(e), r && r.d(), s && s.d(t);
      },
    };
  }
  function Xo(t, e, i) {
    let { $$slots: n = {}, $$scope: r } = e,
      { title: o = null } = e,
      { viewBox: s } = e;
    return (
      (t.$$set = (t) => {
        "title" in t && i(0, (o = t.title)),
          "viewBox" in t && i(1, (s = t.viewBox)),
          "$$scope" in t && i(2, (r = t.$$scope));
      }),
      [o, s, r, n]
    );
  }
  class Go extends Rt {
    constructor(t) {
      super(), Nt(this, t, Xo, qo, a, { title: 0, viewBox: 1 });
    }
  }
  function Jo(t) {
    let e;
    return {
      c() {
        (e = O("path")),
          B(
            e,
            "d",
            "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          );
      },
      m(t, i) {
        D(t, e, i);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function Yo(t) {
    let e, n;
    const r = [{ viewBox: "0 0 24 24" }, t[0]];
    let o = { $$slots: { default: [Jo] }, $$scope: { ctx: t } };
    for (let t = 0; t < r.length; t += 1) o = i(o, r[t]);
    return (
      (e = new Go({ props: o })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, i) {
          Ot(e, t, i), (n = !0);
        },
        p(t, [i]) {
          const n = 1 & i ? At(r, [r[0], Tt(t[0])]) : {};
          2 & i && (n.$$scope = { dirty: i, ctx: t }), e.$set(n);
        },
        i(t) {
          n || ($t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function Zo(t, e, n) {
    return (
      (t.$$set = (t) => {
        n(0, (e = i(i({}, e), y(t))));
      }),
      [(e = y(e))]
    );
  }
  class Ko extends Rt {
    constructor(t) {
      super(), Nt(this, t, Zo, Yo, a, {});
    }
  }
  function Qo(t) {
    let e, i, n, r, o;
    return (
      (i = new Ko({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "close-button svelte-1xf9c6q");
        },
        m(a, l) {
          D(a, e, l),
            Ot(i, e, null),
            (n = !0),
            r ||
              ((o = R(e, "click", function () {
                s(t[0]) && t[0].apply(this, arguments);
              })),
              (r = !0));
        },
        p(e, [i]) {
          t = e;
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i), (r = !1), o();
        },
      }
    );
  }
  function ts(t, e, i) {
    let { onClose: n } = e;
    return (
      (t.$$set = (t) => {
        "onClose" in t && i(0, (n = t.onClose));
      }),
      [n]
    );
  }
  class es extends Rt {
    constructor(t) {
      super(), Nt(this, t, ts, Qo, a, { onClose: 0 });
    }
  }
  function is(t) {
    let e;
    return {
      c() {
        (e = O("path")),
          B(
            e,
            "d",
            "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
          );
      },
      m(t, i) {
        D(t, e, i);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function ns(t) {
    let e, n;
    const r = [{ viewBox: "0 0 320 512" }, t[0]];
    let o = { $$slots: { default: [is] }, $$scope: { ctx: t } };
    for (let t = 0; t < r.length; t += 1) o = i(o, r[t]);
    return (
      (e = new Go({ props: o })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, i) {
          Ot(e, t, i), (n = !0);
        },
        p(t, [i]) {
          const n = 1 & i ? At(r, [r[0], Tt(t[0])]) : {};
          2 & i && (n.$$scope = { dirty: i, ctx: t }), e.$set(n);
        },
        i(t) {
          n || ($t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function rs(t, e, n) {
    return (
      (t.$$set = (t) => {
        n(0, (e = i(i({}, e), y(t))));
      }),
      [(e = y(e))]
    );
  }
  class os extends Rt {
    constructor(t) {
      super(), Nt(this, t, rs, ns, a, {});
    }
  }
  function ss(t) {
    let e;
    return {
      c() {
        (e = O("path")),
          B(
            e,
            "d",
            "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
          );
      },
      m(t, i) {
        D(t, e, i);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function as(t) {
    let e, n;
    const r = [{ viewBox: "0 0 320 512" }, t[0]];
    let o = { $$slots: { default: [ss] }, $$scope: { ctx: t } };
    for (let t = 0; t < r.length; t += 1) o = i(o, r[t]);
    return (
      (e = new Go({ props: o })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, i) {
          Ot(e, t, i), (n = !0);
        },
        p(t, [i]) {
          const n = 1 & i ? At(r, [r[0], Tt(t[0])]) : {};
          2 & i && (n.$$scope = { dirty: i, ctx: t }), e.$set(n);
        },
        i(t) {
          n || ($t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function ls(t, e, n) {
    return (
      (t.$$set = (t) => {
        n(0, (e = i(i({}, e), y(t))));
      }),
      [(e = y(e))]
    );
  }
  class hs extends Rt {
    constructor(t) {
      super(), Nt(this, t, ls, as, a, {});
    }
  }
  function us(t) {
    let e;
    return {
      c() {
        (e = O("path")),
          B(
            e,
            "d",
            "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
          );
      },
      m(t, i) {
        D(t, e, i);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function cs(t) {
    let e, n;
    const r = [{ viewBox: "0 0 320 512" }, t[0]];
    let o = { $$slots: { default: [us] }, $$scope: { ctx: t } };
    for (let t = 0; t < r.length; t += 1) o = i(o, r[t]);
    return (
      (e = new Go({ props: o })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, i) {
          Ot(e, t, i), (n = !0);
        },
        p(t, [i]) {
          const n = 1 & i ? At(r, [r[0], Tt(t[0])]) : {};
          2 & i && (n.$$scope = { dirty: i, ctx: t }), e.$set(n);
        },
        i(t) {
          n || ($t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function ps(t, e, n) {
    return (
      (t.$$set = (t) => {
        n(0, (e = i(i({}, e), y(t))));
      }),
      [(e = y(e))]
    );
  }
  class fs extends Rt {
    constructor(t) {
      super(), Nt(this, t, ps, cs, a, {});
    }
  }
  function ds(t) {
    let e, i, n;
    return (
      (i = new fs({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon dormant svelte-pcqtwp");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function vs(t) {
    let e, i, n;
    return (
      (i = new os({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon descend svelte-pcqtwp");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function ms(t) {
    let e, i, n;
    return (
      (i = new hs({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon svelte-pcqtwp");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function ys(t) {
    let e,
      i,
      n,
      r,
      o,
      a,
      l,
      h,
      u,
      c = (t[0].displayText || t[0].display) + "";
    const p = [ms, vs, ds],
      f = [];
    function d(t, e) {
      return t[0].sortDirection === Ge
        ? 0
        : t[0].sortDirection === Je
        ? 1
        : t[0].noSort
        ? -1
        : 2;
    }
    return (
      ~(r = d(t)) && (o = f[r] = p[r](t)),
      {
        c() {
          (e = j("div")),
            (i = E(c)),
            (n = P()),
            o && o.c(),
            B(e, "class", (a = g(t[1]) + " svelte-pcqtwp"));
        },
        m(o, a) {
          D(o, e, a),
            S(e, i),
            S(e, n),
            ~r && f[r].m(e, null),
            (l = !0),
            h ||
              ((u = R(e, "click", function () {
                s(t[0].noSort || t[0].clickHandler) &&
                  (t[0].noSort || t[0].clickHandler).apply(this, arguments);
              })),
              (h = !0));
        },
        p(n, [s]) {
          (t = n),
            (!l || 1 & s) &&
              c !== (c = (t[0].displayText || t[0].display) + "") &&
              W(i, c);
          let h = r;
          (r = d(t)),
            r !== h &&
              (o &&
                (wt(),
                xt(f[h], 1, 1, () => {
                  f[h] = null;
                }),
                bt()),
              ~r
                ? ((o = f[r]),
                  o || ((o = f[r] = p[r](t)), o.c()),
                  $t(o, 1),
                  o.m(e, null))
                : (o = null)),
            (!l || (2 & s && a !== (a = g(t[1]) + " svelte-pcqtwp"))) &&
              B(e, "class", a);
        },
        i(t) {
          l || ($t(o), (l = !0));
        },
        o(t) {
          xt(o), (l = !1);
        },
        d(t) {
          t && A(e), ~r && f[r].d(), (h = !1), u();
        },
      }
    );
  }
  function gs(t, e, i) {
    let n,
      { column: r } = e;
    return (
      (t.$$set = (t) => {
        "column" in t && i(0, (r = t.column));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty &&
          i(
            1,
            (n =
              "table-header" +
              (r.sortDirection === Ge ? " ascend" : "") +
              (r.sortDirection === Je ? " descend" : "") +
              (r.doubleLine ? " double-line" : "") +
              (r.alignRight ? " align-right" : ""))
          );
      }),
      [r, n]
    );
  }
  class ws extends Rt {
    constructor(t) {
      super(), Nt(this, t, gs, ys, a, { column: 0 });
    }
  }
  function bs(e) {
    let i,
      n,
      r,
      o,
      s,
      a = e[4].svg + "";
    return {
      c() {
        (i = j("div")),
          (n = O("svg")),
          B(n, "style", (r = e[4].svgStyle || "")),
          B(n, "class", (o = e[5].class)),
          B(n, "focusable", e[2]),
          B(n, "width", e[0]),
          B(n, "height", e[1]),
          B(
            n,
            "viewBox",
            (s =
              "0 0 " + (e[4].boxW || e[4].box) + " " + (e[4].boxH || e[4].box))
          ),
          B(i, "class", "icon"),
          B(i, "style", e[3]);
      },
      m(t, e) {
        D(t, i, e), S(i, n), (n.innerHTML = a);
      },
      p(t, [e]) {
        16 & e && a !== (a = t[4].svg + "") && (n.innerHTML = a),
          16 & e && r !== (r = t[4].svgStyle || "") && B(n, "style", r),
          32 & e && o !== (o = t[5].class) && B(n, "class", o),
          4 & e && B(n, "focusable", t[2]),
          1 & e && B(n, "width", t[0]),
          2 & e && B(n, "height", t[1]),
          16 & e &&
            s !==
              (s =
                "0 0 " +
                (t[4].boxW || t[4].box) +
                " " +
                (t[4].boxH || t[4].box)) &&
            B(n, "viewBox", s),
          8 & e && B(i, "style", t[3]);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function $s(t, e, n) {
    let r,
      { name: o } = e,
      { width: s = "1rem" } = e,
      { height: a = "1rem" } = e,
      { focusable: l = !1 } = e,
      { style: h = "" } = e;
    const u = {
      usdc: {
        boxW: 2e3,
        boxH: 2e3,
        name: "usdc",
        viewBox: "0 0 2000 2000",
        svg: '<path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca"/>\n  <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>\n  <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>',
      },
      trash: {
        box: 32,
        name: "trash",
        svg: '<path d="M12 12h2v12h-2z" /><path d="M18 12h2v12h-2z" /><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" /><path d="M12 2h8v2h-8z" />',
      },
      atlas: {
        boxW: 96,
        boxH: 96,
        box: 96,
        svgStyle: "margin-top: -1px;",
        name: "atlas",
        svg: '<defs><polygon id="path-1" points="8 15.5 0.5 0.5 15.5 0.5"></polygon><path d="M26,20.487 L12.588,49.322 C12.145,50.246 11.915,50.996 10.94,50.996 L2.081,51 C0.811,51 0.111,50.669 0.727,49.326 L22.39,2.112 C22.832,1.327 23.107,0.75 24.083,0.75 L27.918,0.75 C28.893,0.75 29.168,1.327 29.611,2.112 L51.272,49.326 C51.89,50.669 51.189,51 49.919,51 L41.06,50.996 C40.085,50.996 39.855,50.246 39.412,49.322 L26,20.487 L26,20.487 Z" id="path-3"></path></defs><g id="Icon-Reverse" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-3" transform="translate(40.000000, 67.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><g id="Clip-2"></g><polygon id="Fill-1" fill="#32FEFF" mask="url(#mask-2)" points="-3.25 19.25 19.25 19.25 19.25 -3.25 -3.25 -3.25"></polygon></g><g id="Group-6" transform="translate(22.000000, 21.000000)"><mask id="mask-4" fill="white"><use xlink:href="#path-3"></use></mask><g id="Clip-5"></g><polygon id="Fill-4" fill="#17181D" mask="url(#mask-4)" points="-3.25 54.75 55.25 54.75 55.25 -3 -3.25 -3"></polygon></g></g>',
      },
    };
    return (
      (t.$$set = (t) => {
        n(5, (e = i(i({}, e), y(t)))),
          "name" in t && n(6, (o = t.name)),
          "width" in t && n(0, (s = t.width)),
          "height" in t && n(1, (a = t.height)),
          "focusable" in t && n(2, (l = t.focusable)),
          "style" in t && n(3, (h = t.style));
      }),
      (t.$$.update = () => {
        64 & t.$$.dirty && n(4, (r = u[o]));
      }),
      (e = y(e)),
      [s, a, l, h, r, e, o]
    );
  }
  class xs extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, $s, bs, a, {
          name: 6,
          width: 0,
          height: 1,
          focusable: 2,
          style: 3,
        });
    }
  }
  function _s(t) {
    let e, i, n;
    return (
      (i = new fs({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon dormant svelte-6lt8ov");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function Ms(t) {
    let e, i, n;
    return (
      (i = new os({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon descend svelte-6lt8ov");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function ks(t) {
    let e, i, n;
    return (
      (i = new hs({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon svelte-6lt8ov");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function Ss(t) {
    let e,
      i,
      n,
      r,
      o,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v = t[0].displayText + "";
    i = new xs({
      props: { name: "usdc", style: Cs, width: "18px", height: "18px" },
    });
    const m = [ks, Ms, _s],
      y = [];
    function w(t, e) {
      return t[0].sortDirection === Ge ? 0 : t[0].sortDirection === Je ? 1 : 2;
    }
    return (
      (l = w(t)),
      (h = y[l] = m[l](t)),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            (n = P()),
            (r = j("div")),
            (o = E(v)),
            (a = P()),
            h.c(),
            B(r, "clas", "text"),
            B(e, "class", (u = g(t[1]) + " svelte-6lt8ov")),
            B(e, "title", (c = t[0].display || ""));
        },
        m(h, u) {
          D(h, e, u),
            Ot(i, e, null),
            S(e, n),
            S(e, r),
            S(r, o),
            S(e, a),
            y[l].m(e, null),
            (p = !0),
            f ||
              ((d = R(e, "click", function () {
                s(t[0].clickHandler) &&
                  t[0].clickHandler.apply(this, arguments);
              })),
              (f = !0));
        },
        p(i, [n]) {
          (t = i),
            (!p || 1 & n) && v !== (v = t[0].displayText + "") && W(o, v);
          let r = l;
          (l = w(t)),
            l !== r &&
              (wt(),
              xt(y[r], 1, 1, () => {
                y[r] = null;
              }),
              bt(),
              (h = y[l]),
              h || ((h = y[l] = m[l](t)), h.c()),
              $t(h, 1),
              h.m(e, null)),
            (!p || (2 & n && u !== (u = g(t[1]) + " svelte-6lt8ov"))) &&
              B(e, "class", u),
            (!p || (1 & n && c !== (c = t[0].display || ""))) &&
              B(e, "title", c);
        },
        i(t) {
          p || ($t(i.$$.fragment, t), $t(h), (p = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), xt(h), (p = !1);
        },
        d(t) {
          t && A(e), Et(i), y[l].d(), (f = !1), d();
        },
      }
    );
  }
  const Cs = "margin: 8px 6px 0 0; opacity: 0.4;";
  function Ls(t, e, i) {
    let n,
      { column: r } = e;
    return (
      (t.$$set = (t) => {
        "column" in t && i(0, (r = t.column));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty &&
          i(
            1,
            (n =
              "table-header-usdc" +
              (r.sortDirection === Ge ? " ascend" : "") +
              (r.sortDirection === Je ? " descend" : ""))
          );
      }),
      [r, n]
    );
  }
  function Ds(t) {
    let e, i, n;
    return (
      (i = new fs({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon dormant svelte-s4yt7r");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function As(t) {
    let e, i, n;
    return (
      (i = new os({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon descend svelte-s4yt7r");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function Ts(t) {
    let e, i, n;
    return (
      (i = new hs({})),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", "sort-icon svelte-s4yt7r");
        },
        m(t, r) {
          D(t, e, r), Ot(i, e, null), (n = !0);
        },
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function js(t) {
    let e,
      i,
      n,
      r,
      o,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v = t[0].displayText + "";
    i = new xs({
      props: { name: "atlas", style: Os, width: "28px", height: "28px" },
    });
    const m = [Ts, As, Ds],
      y = [];
    function w(t, e) {
      return t[0].sortDirection === Ge ? 0 : t[0].sortDirection === Je ? 1 : 2;
    }
    return (
      (l = w(t)),
      (h = y[l] = m[l](t)),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            (n = P()),
            (r = j("div")),
            (o = E(v)),
            (a = P()),
            h.c(),
            B(r, "clas", "text"),
            B(e, "class", (u = g(t[1]) + " svelte-s4yt7r")),
            B(e, "title", (c = t[0].display || ""));
        },
        m(h, u) {
          D(h, e, u),
            Ot(i, e, null),
            S(e, n),
            S(e, r),
            S(r, o),
            S(e, a),
            y[l].m(e, null),
            (p = !0),
            f ||
              ((d = R(e, "click", function () {
                s(t[0].clickHandler) &&
                  t[0].clickHandler.apply(this, arguments);
              })),
              (f = !0));
        },
        p(i, [n]) {
          (t = i),
            (!p || 1 & n) && v !== (v = t[0].displayText + "") && W(o, v);
          let r = l;
          (l = w(t)),
            l !== r &&
              (wt(),
              xt(y[r], 1, 1, () => {
                y[r] = null;
              }),
              bt(),
              (h = y[l]),
              h || ((h = y[l] = m[l](t)), h.c()),
              $t(h, 1),
              h.m(e, null)),
            (!p || (2 & n && u !== (u = g(t[1]) + " svelte-s4yt7r"))) &&
              B(e, "class", u),
            (!p || (1 & n && c !== (c = t[0].display || ""))) &&
              B(e, "title", c);
        },
        i(t) {
          p || ($t(i.$$.fragment, t), $t(h), (p = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), xt(h), (p = !1);
        },
        d(t) {
          t && A(e), Et(i), y[l].d(), (f = !1), d();
        },
      }
    );
  }
  const Os =
    "margin: -2px 6px 0 0; opacity: 0.9; background: white; border-radius: 40px; height: 28px;";
  function Es(t, e, i) {
    let n,
      { column: r } = e;
    return (
      (t.$$set = (t) => {
        "column" in t && i(0, (r = t.column));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty &&
          i(
            1,
            (n =
              "table-header-atlas" +
              (r.sortDirection === Ge ? " ascend" : "") +
              (r.sortDirection === Je ? " descend" : ""))
          );
      }),
      [r, n]
    );
  }
  function Ps(e) {
    let i, n, r;
    return {
      c() {
        (i = j("div")),
          (n = E(e[3])),
          B(i, "class", (r = g(e[2]) + " svelte-ia2vmo"));
      },
      m(t, e) {
        D(t, i, e), S(i, n);
      },
      p(t, e) {
        8 & e && W(n, t[3]),
          4 & e && r !== (r = g(t[2]) + " svelte-ia2vmo") && B(i, "class", r);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Ns(t) {
    let e, i, n, r;
    return (
      (i = new Do({ props: { className: t[1], num: t[3] } })),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            B(e, "class", (n = g(t[2]) + " svelte-ia2vmo"));
        },
        m(t, n) {
          D(t, e, n), Ot(i, e, null), (r = !0);
        },
        p(t, o) {
          const s = {};
          2 & o && (s.className = t[1]),
            8 & o && (s.num = t[3]),
            i.$set(s),
            (!r || (4 & o && n !== (n = g(t[2]) + " svelte-ia2vmo"))) &&
              B(e, "class", n);
        },
        i(t) {
          r || ($t(i.$$.fragment, t), (r = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && A(e), Et(i);
        },
      }
    );
  }
  function Rs(t) {
    let e, i, n, r;
    const o = [Ns, Ps],
      s = [];
    function a(t, e) {
      return t[0].usePercent ? 0 : 1;
    }
    return (
      (e = a(t)),
      (i = s[e] = o[e](t)),
      {
        c() {
          i.c(), (n = N());
        },
        m(t, i) {
          s[e].m(t, i), D(t, n, i), (r = !0);
        },
        p(t, [r]) {
          let l = e;
          (e = a(t)),
            e === l
              ? s[e].p(t, r)
              : (wt(),
                xt(s[l], 1, 1, () => {
                  s[l] = null;
                }),
                bt(),
                (i = s[e]),
                i ? i.p(t, r) : ((i = s[e] = o[e](t)), i.c()),
                $t(i, 1),
                i.m(n.parentNode, n));
        },
        i(t) {
          r || ($t(i), (r = !0));
        },
        o(t) {
          xt(i), (r = !1);
        },
        d(t) {
          s[e].d(t), t && A(n);
        },
      }
    );
  }
  function Bs(t, e, i) {
    let n,
      r,
      o,
      s,
      { column: a } = e,
      { rowNumber: l } = e,
      { row: h } = e,
      { customClass: u } = e;
    const c = { aprVWAP: !0, aprAskUSDC: !0 };
    return (
      (t.$$set = (t) => {
        "column" in t && i(0, (a = t.column)),
          "rowNumber" in t && i(4, (l = t.rowNumber)),
          "row" in t && i(5, (h = t.row)),
          "customClass" in t && i(6, (u = t.customClass));
      }),
      (t.$$.update = () => {
        33 & t.$$.dirty && i(3, (n = h.data[a.dataName])),
          16 & t.$$.dirty && i(7, (r = Boolean(l % 2))),
          193 & t.$$.dirty &&
            i(
              2,
              (o =
                "cell-basic " +
                (r ? "odd" : "even") +
                (a.sortDirection ? " sorted" : "") +
                (u ? " " + u : "") +
                (a.capitalize ? " capitalize" : ""))
            ),
          65 & t.$$.dirty &&
            i(
              1,
              (s = c[a.dataName]
                ? "simple-table" + (u ? " " + u : "")
                : "table" + (u ? " " + u : ""))
            );
      }),
      [a, s, o, n, l, h, u, r]
    );
  }
  class Ws extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, Bs, Rs, a, {
          column: 0,
          rowNumber: 4,
          row: 5,
          customClass: 6,
        });
    }
  }
  const zs = (t) =>
      t
        ? Number(t).toLocaleString(void 0, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })
        : "0",
    Hs = (t) =>
      t
        ? Number(t).toLocaleString(void 0, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        : "0";
  function Fs(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y,
      w = Hs(t[6]) + "",
      b = Hs(t[5]) + "",
      $ = t[1] && Vs(),
      x = t[1] && Is();
    return {
      c() {
        (e = j("div")),
          (i = j("div")),
          (n = j("div")),
          (r = j("div")),
          (r.textContent = "Ask"),
          (o = P()),
          $ && $.c(),
          (s = P()),
          (a = j("div")),
          (l = E(w)),
          (h = P()),
          (u = j("div")),
          (c = j("div")),
          (p = j("div")),
          (p.textContent = "Bid"),
          (f = P()),
          x && x.c(),
          (d = P()),
          (v = j("div")),
          (m = E(b)),
          B(r, "class", "market-position svelte-7bjqiu"),
          B(a, "class", "price-number svelte-7bjqiu"),
          B(n, "class", "ask-bid-cell primary svelte-7bjqiu"),
          B(i, "class", "ask-row svelte-7bjqiu"),
          B(p, "class", "market-position svelte-7bjqiu"),
          B(v, "class", "price-number svelte-7bjqiu"),
          B(c, "class", "ask-bid-cell primary svelte-7bjqiu"),
          B(u, "class", "bid-row svelte-7bjqiu"),
          B(e, "class", (y = g(t[2]) + " svelte-7bjqiu"));
      },
      m(t, y) {
        D(t, e, y),
          S(e, i),
          S(i, n),
          S(n, r),
          S(n, o),
          $ && $.m(n, null),
          S(n, s),
          S(n, a),
          S(a, l),
          S(e, h),
          S(e, u),
          S(u, c),
          S(c, p),
          S(c, f),
          x && x.m(c, null),
          S(c, d),
          S(c, v),
          S(v, m);
      },
      p(t, i) {
        t[1] ? $ || (($ = Vs()), $.c(), $.m(n, s)) : $ && ($.d(1), ($ = null)),
          64 & i && w !== (w = Hs(t[6]) + "") && W(l, w),
          t[1]
            ? x || ((x = Is()), x.c(), x.m(c, d))
            : x && (x.d(1), (x = null)),
          32 & i && b !== (b = Hs(t[5]) + "") && W(m, b),
          4 & i && y !== (y = g(t[2]) + " svelte-7bjqiu") && B(e, "class", y);
      },
      d(t) {
        t && A(e), $ && $.d(), x && x.d();
      },
    };
  }
  function Us(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y,
      w,
      b,
      $,
      x,
      _,
      M,
      k,
      C,
      L,
      T,
      O = zs(t[8]) + "",
      N = Hs(t[4]) + "",
      R = zs(t[7]) + "",
      z = Hs(t[3]) + "";
    return {
      c() {
        (e = j("div")),
          (i = j("div")),
          (n = j("div")),
          (r = j("div")),
          (r.textContent = "Ask"),
          (o = P()),
          (s = j("div")),
          (a = E(O)),
          (l = P()),
          (h = j("div")),
          (u = j("div")),
          (u.textContent = "$"),
          (c = P()),
          (p = j("div")),
          (f = E(N)),
          (d = P()),
          (v = j("div")),
          (m = j("div")),
          (y = j("div")),
          (y.textContent = "Bid"),
          (w = P()),
          (b = j("div")),
          ($ = E(R)),
          (x = P()),
          (_ = j("div")),
          (M = j("div")),
          (M.textContent = "$"),
          (k = P()),
          (C = j("div")),
          (L = E(z)),
          B(r, "class", "market-position svelte-7bjqiu"),
          B(s, "class", "price-number svelte-7bjqiu"),
          B(n, "class", "ask-bid-cell primary svelte-7bjqiu"),
          B(u, "class", "currency-mark svelte-7bjqiu"),
          B(p, "class", "price-number svelte-7bjqiu"),
          B(h, "class", "ask-bid-cell converted svelte-7bjqiu"),
          B(i, "class", "ask-row svelte-7bjqiu"),
          B(y, "class", "market-position svelte-7bjqiu"),
          B(b, "class", "price-number svelte-7bjqiu"),
          B(m, "class", "ask-bid-cell primary svelte-7bjqiu"),
          B(M, "class", "currency-mark svelte-7bjqiu"),
          B(C, "class", "price-number svelte-7bjqiu"),
          B(_, "class", "ask-bid-cell converted svelte-7bjqiu"),
          B(v, "class", "bid-row svelte-7bjqiu"),
          B(e, "class", (T = g(t[2]) + " svelte-7bjqiu"));
      },
      m(t, g) {
        D(t, e, g),
          S(e, i),
          S(i, n),
          S(n, r),
          S(n, o),
          S(n, s),
          S(s, a),
          S(i, l),
          S(i, h),
          S(h, u),
          S(h, c),
          S(h, p),
          S(p, f),
          S(e, d),
          S(e, v),
          S(v, m),
          S(m, y),
          S(m, w),
          S(m, b),
          S(b, $),
          S(v, x),
          S(v, _),
          S(_, M),
          S(_, k),
          S(_, C),
          S(C, L);
      },
      p(t, i) {
        256 & i && O !== (O = zs(t[8]) + "") && W(a, O),
          16 & i && N !== (N = Hs(t[4]) + "") && W(f, N),
          128 & i && R !== (R = zs(t[7]) + "") && W($, R),
          8 & i && z !== (z = Hs(t[3]) + "") && W(L, z),
          4 & i && T !== (T = g(t[2]) + " svelte-7bjqiu") && B(e, "class", T);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function Vs(t) {
    let e;
    return {
      c() {
        (e = j("div")),
          (e.textContent = "$"),
          B(e, "class", "currency-mark svelte-7bjqiu");
      },
      m(t, i) {
        D(t, e, i);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function Is(t) {
    let e;
    return {
      c() {
        (e = j("div")),
          (e.textContent = "$"),
          B(e, "class", "currency-mark svelte-7bjqiu");
      },
      m(t, i) {
        D(t, e, i);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function qs(e) {
    let i;
    function n(t, e) {
      return "atlas" === t[0].currency
        ? Us
        : "usdc" === t[0].currency
        ? Fs
        : void 0;
    }
    let r = n(e),
      o = r && r(e);
    return {
      c() {
        o && o.c(), (i = N());
      },
      m(t, e) {
        o && o.m(t, e), D(t, i, e);
      },
      p(t, [e]) {
        r === (r = n(t)) && o
          ? o.p(t, e)
          : (o && o.d(1), (o = r && r(t)), o && (o.c(), o.m(i.parentNode, i)));
      },
      i: t,
      o: t,
      d(t) {
        o && o.d(t), t && A(i);
      },
    };
  }
  function Xs(t, e, i) {
    let n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      { column: c } = e,
      { rowNumber: p } = e,
      { row: f } = e,
      { customClass: d } = e;
    return (
      (t.$$set = (t) => {
        "column" in t && i(0, (c = t.column)),
          "rowNumber" in t && i(9, (p = t.rowNumber)),
          "row" in t && i(10, (f = t.row)),
          "customClass" in t && i(1, (d = t.customClass));
      }),
      (t.$$.update = () => {
        1024 & t.$$.dirty && i(8, (n = f.data.askATLAS)),
          1024 & t.$$.dirty && i(7, (r = f.data.bidATLAS)),
          1024 & t.$$.dirty && i(6, (o = f.data.askUSDC)),
          1024 & t.$$.dirty && i(5, (s = f.data.bidUSDC)),
          1024 & t.$$.dirty && i(4, (a = f.data.askAtlasEq)),
          1024 & t.$$.dirty && i(3, (l = f.data.bidAtlasEq)),
          1025 & t.$$.dirty && f.data[c.dataName],
          512 & t.$$.dirty && i(11, (h = Boolean(p % 2))),
          2051 & t.$$.dirty &&
            i(
              2,
              (u =
                "ask-bid-grid " +
                (h ? "odd" : "even") +
                (d ? " " + d : "") +
                (c.sortDirection ? " sorted" : "") +
                ("usdc" === c.currency ? " usdc" : ""))
            );
      }),
      [c, d, u, l, a, s, o, r, n, p, f, h]
    );
  }
  class Gs extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, Xs, qs, a, {
          column: 0,
          rowNumber: 9,
          row: 10,
          customClass: 1,
        });
    }
  }
  var Js = "top",
    Ys = "bottom",
    Zs = "right",
    Ks = "left",
    Qs = "auto",
    ta = [Js, Ys, Zs, Ks],
    ea = "start",
    ia = "end",
    na = "viewport",
    ra = "popper",
    oa = ta.reduce(function (t, e) {
      return t.concat([e + "-" + ea, e + "-" + ia]);
    }, []),
    sa = [].concat(ta, [Qs]).reduce(function (t, e) {
      return t.concat([e, e + "-" + ea, e + "-" + ia]);
    }, []),
    aa = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function la(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function ha(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function ua(t) {
    return t instanceof ha(t).Element || t instanceof Element;
  }
  function ca(t) {
    return t instanceof ha(t).HTMLElement || t instanceof HTMLElement;
  }
  function pa(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof ha(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  var fa = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          r = e.elements[t];
        ca(r) &&
          la(r) &&
          (Object.assign(r.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? r.removeAttribute(t)
              : r.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              r = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            ca(n) &&
              la(n) &&
              (Object.assign(n.style, o),
              Object.keys(r).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function da(t) {
    return t.split("-")[0];
  }
  var va = Math.max,
    ma = Math.min,
    ya = Math.round;
  function ga(t, e) {
    void 0 === e && (e = !1);
    var i = t.getBoundingClientRect(),
      n = 1,
      r = 1;
    if (ca(t) && e) {
      var o = t.offsetHeight,
        s = t.offsetWidth;
      s > 0 && (n = ya(i.width) / s || 1), o > 0 && (r = ya(i.height) / o || 1);
    }
    return {
      width: i.width / n,
      height: i.height / r,
      top: i.top / r,
      right: i.right / n,
      bottom: i.bottom / r,
      left: i.left / n,
      x: i.left / n,
      y: i.top / r,
    };
  }
  function wa(t) {
    var e = ga(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function ba(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && pa(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function $a(t) {
    return ha(t).getComputedStyle(t);
  }
  function xa(t) {
    return ["table", "td", "th"].indexOf(la(t)) >= 0;
  }
  function _a(t) {
    return ((ua(t) ? t.ownerDocument : t.document) || window.document)
      .documentElement;
  }
  function Ma(t) {
    return "html" === la(t)
      ? t
      : t.assignedSlot || t.parentNode || (pa(t) ? t.host : null) || _a(t);
  }
  function ka(t) {
    return ca(t) && "fixed" !== $a(t).position ? t.offsetParent : null;
  }
  function Sa(t) {
    for (var e = ha(t), i = ka(t); i && xa(i) && "static" === $a(i).position; )
      i = ka(i);
    return i &&
      ("html" === la(i) || ("body" === la(i) && "static" === $a(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              ca(t) &&
              "fixed" === $a(t).position
            )
              return null;
            for (
              var i = Ma(t);
              ca(i) && ["html", "body"].indexOf(la(i)) < 0;

            ) {
              var n = $a(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Ca(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function La(t, e, i) {
    return va(t, ma(e, i));
  }
  function Da(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function Aa(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  var Ta = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        r = t.options,
        o = i.elements.arrow,
        s = i.modifiersData.popperOffsets,
        a = da(i.placement),
        l = Ca(a),
        h = [Ks, Zs].indexOf(a) >= 0 ? "height" : "width";
      if (o && s) {
        var u = (function (t, e) {
            return Da(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : Aa(t, ta)
            );
          })(r.padding, i),
          c = wa(o),
          p = "y" === l ? Js : Ks,
          f = "y" === l ? Ys : Zs,
          d =
            i.rects.reference[h] +
            i.rects.reference[l] -
            s[l] -
            i.rects.popper[h],
          v = s[l] - i.rects.reference[l],
          m = Sa(o),
          y = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          g = d / 2 - v / 2,
          w = u[p],
          b = y - c[h] - u[f],
          $ = y / 2 - c[h] / 2 + g,
          x = La(w, $, b),
          _ = l;
        i.modifiersData[n] = (((e = {})[_] = x), (e.centerOffset = x - $), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        ("production" !== process.env.NODE_ENV &&
          (ca(n) ||
            console.error(
              [
                'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
                "the arrow.",
              ].join(" ")
            )),
        ba(e.elements.popper, n)
          ? (e.elements.arrow = n)
          : "production" !== process.env.NODE_ENV &&
            console.error(
              [
                'Popper: "arrow" modifier\'s `element` must be a child of the popper',
                "element.",
              ].join(" ")
            ));
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function ja(t) {
    return t.split("-")[1];
  }
  var Oa = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Ea(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      r = t.placement,
      o = t.variation,
      s = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      h = t.adaptive,
      u = t.roundOffsets,
      c = t.isFixed,
      p = s.x,
      f = void 0 === p ? 0 : p,
      d = s.y,
      v = void 0 === d ? 0 : d,
      m = "function" == typeof u ? u({ x: f, y: v }) : { x: f, y: v };
    (f = m.x), (v = m.y);
    var y = s.hasOwnProperty("x"),
      g = s.hasOwnProperty("y"),
      w = Ks,
      b = Js,
      $ = window;
    if (h) {
      var x = Sa(i),
        _ = "clientHeight",
        M = "clientWidth";
      if (
        (x === ha(i) &&
          "static" !== $a((x = _a(i))).position &&
          "absolute" === a &&
          ((_ = "scrollHeight"), (M = "scrollWidth")),
        (x = x),
        r === Js || ((r === Ks || r === Zs) && o === ia))
      )
        (b = Ys),
          (v -=
            (c && $.visualViewport ? $.visualViewport.height : x[_]) -
            n.height),
          (v *= l ? 1 : -1);
      if (r === Ks || ((r === Js || r === Ys) && o === ia))
        (w = Zs),
          (f -=
            (c && $.visualViewport ? $.visualViewport.width : x[M]) - n.width),
          (f *= l ? 1 : -1);
    }
    var k,
      S = Object.assign({ position: a }, h && Oa),
      C =
        !0 === u
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: ya(e * n) / n || 0, y: ya(i * n) / n || 0 };
            })({ x: f, y: v })
          : { x: f, y: v };
    return (
      (f = C.x),
      (v = C.y),
      l
        ? Object.assign(
            {},
            S,
            (((k = {})[b] = g ? "0" : ""),
            (k[w] = y ? "0" : ""),
            (k.transform =
              ($.devicePixelRatio || 1) <= 1
                ? "translate(" + f + "px, " + v + "px)"
                : "translate3d(" + f + "px, " + v + "px, 0)"),
            k)
          )
        : Object.assign(
            {},
            S,
            (((e = {})[b] = g ? v + "px" : ""),
            (e[w] = y ? f + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  var Pa = { passive: !0 };
  var Na = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (t) {
        var e = t.state,
          i = t.instance,
          n = t.options,
          r = n.scroll,
          o = void 0 === r || r,
          s = n.resize,
          a = void 0 === s || s,
          l = ha(e.elements.popper),
          h = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          o &&
            h.forEach(function (t) {
              t.addEventListener("scroll", i.update, Pa);
            }),
          a && l.addEventListener("resize", i.update, Pa),
          function () {
            o &&
              h.forEach(function (t) {
                t.removeEventListener("scroll", i.update, Pa);
              }),
              a && l.removeEventListener("resize", i.update, Pa);
          }
        );
      },
      data: {},
    },
    Ra = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Ba(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Ra[t];
    });
  }
  var Wa = { start: "end", end: "start" };
  function za(t) {
    return t.replace(/start|end/g, function (t) {
      return Wa[t];
    });
  }
  function Ha(t) {
    var e = ha(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Fa(t) {
    return ga(_a(t)).left + Ha(t).scrollLeft;
  }
  function Ua(t) {
    var e = $a(t),
      i = e.overflow,
      n = e.overflowX,
      r = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + r + n);
  }
  function Va(t) {
    return ["html", "body", "#document"].indexOf(la(t)) >= 0
      ? t.ownerDocument.body
      : ca(t) && Ua(t)
      ? t
      : Va(Ma(t));
  }
  function Ia(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Va(t),
      r = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = ha(n),
      s = r ? [o].concat(o.visualViewport || [], Ua(n) ? n : []) : n,
      a = e.concat(s);
    return r ? a : a.concat(Ia(Ma(s)));
  }
  function qa(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function Xa(t, e) {
    return e === na
      ? qa(
          (function (t) {
            var e = ha(t),
              i = _a(t),
              n = e.visualViewport,
              r = i.clientWidth,
              o = i.clientHeight,
              s = 0,
              a = 0;
            return (
              n &&
                ((r = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((s = n.offsetLeft), (a = n.offsetTop))),
              { width: r, height: o, x: s + Fa(t), y: a }
            );
          })(t)
        )
      : ua(e)
      ? (function (t) {
          var e = ga(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : qa(
          (function (t) {
            var e,
              i = _a(t),
              n = Ha(t),
              r = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = va(
                i.scrollWidth,
                i.clientWidth,
                r ? r.scrollWidth : 0,
                r ? r.clientWidth : 0
              ),
              s = va(
                i.scrollHeight,
                i.clientHeight,
                r ? r.scrollHeight : 0,
                r ? r.clientHeight : 0
              ),
              a = -n.scrollLeft + Fa(t),
              l = -n.scrollTop;
            return (
              "rtl" === $a(r || i).direction &&
                (a += va(i.clientWidth, r ? r.clientWidth : 0) - o),
              { width: o, height: s, x: a, y: l }
            );
          })(_a(t))
        );
  }
  function Ga(t, e, i) {
    var n =
        "clippingParents" === e
          ? (function (t) {
              var e = Ia(Ma(t)),
                i =
                  ["absolute", "fixed"].indexOf($a(t).position) >= 0 && ca(t)
                    ? Sa(t)
                    : t;
              return ua(i)
                ? e.filter(function (t) {
                    return ua(t) && ba(t, i) && "body" !== la(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      r = [].concat(n, [i]),
      o = r[0],
      s = r.reduce(function (e, i) {
        var n = Xa(t, i);
        return (
          (e.top = va(n.top, e.top)),
          (e.right = ma(n.right, e.right)),
          (e.bottom = ma(n.bottom, e.bottom)),
          (e.left = va(n.left, e.left)),
          e
        );
      }, Xa(t, o));
    return (
      (s.width = s.right - s.left),
      (s.height = s.bottom - s.top),
      (s.x = s.left),
      (s.y = s.top),
      s
    );
  }
  function Ja(t) {
    var e,
      i = t.reference,
      n = t.element,
      r = t.placement,
      o = r ? da(r) : null,
      s = r ? ja(r) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case Js:
        e = { x: a, y: i.y - n.height };
        break;
      case Ys:
        e = { x: a, y: i.y + i.height };
        break;
      case Zs:
        e = { x: i.x + i.width, y: l };
        break;
      case Ks:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var h = o ? Ca(o) : null;
    if (null != h) {
      var u = "y" === h ? "height" : "width";
      switch (s) {
        case ea:
          e[h] = e[h] - (i[u] / 2 - n[u] / 2);
          break;
        case ia:
          e[h] = e[h] + (i[u] / 2 - n[u] / 2);
      }
    }
    return e;
  }
  function Ya(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      r = void 0 === n ? t.placement : n,
      o = i.boundary,
      s = void 0 === o ? "clippingParents" : o,
      a = i.rootBoundary,
      l = void 0 === a ? na : a,
      h = i.elementContext,
      u = void 0 === h ? ra : h,
      c = i.altBoundary,
      p = void 0 !== c && c,
      f = i.padding,
      d = void 0 === f ? 0 : f,
      v = Da("number" != typeof d ? d : Aa(d, ta)),
      m = u === ra ? "reference" : ra,
      y = t.rects.popper,
      g = t.elements[p ? m : u],
      w = Ga(ua(g) ? g : g.contextElement || _a(t.elements.popper), s, l),
      b = ga(t.elements.reference),
      $ = Ja({ reference: b, element: y, strategy: "absolute", placement: r }),
      x = qa(Object.assign({}, y, $)),
      _ = u === ra ? x : b,
      M = {
        top: w.top - _.top + v.top,
        bottom: _.bottom - w.bottom + v.bottom,
        left: w.left - _.left + v.left,
        right: _.right - w.right + v.right,
      },
      k = t.modifiersData.offset;
    if (u === ra && k) {
      var S = k[r];
      Object.keys(M).forEach(function (t) {
        var e = [Zs, Ys].indexOf(t) >= 0 ? 1 : -1,
          i = [Js, Ys].indexOf(t) >= 0 ? "y" : "x";
        M[t] += S[i] * e;
      });
    }
    return M;
  }
  function Za(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      r = i.boundary,
      o = i.rootBoundary,
      s = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      h = void 0 === l ? sa : l,
      u = ja(n),
      c = u
        ? a
          ? oa
          : oa.filter(function (t) {
              return ja(t) === u;
            })
        : ta,
      p = c.filter(function (t) {
        return h.indexOf(t) >= 0;
      });
    0 === p.length &&
      ((p = c),
      "production" !== process.env.NODE_ENV &&
        console.error(
          [
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.',
          ].join(" ")
        ));
    var f = p.reduce(function (e, i) {
      return (
        (e[i] = Ya(t, {
          placement: i,
          boundary: r,
          rootBoundary: o,
          padding: s,
        })[da(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  var Ka = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var r = i.mainAxis,
            o = void 0 === r || r,
            s = i.altAxis,
            a = void 0 === s || s,
            l = i.fallbackPlacements,
            h = i.padding,
            u = i.boundary,
            c = i.rootBoundary,
            p = i.altBoundary,
            f = i.flipVariations,
            d = void 0 === f || f,
            v = i.allowedAutoPlacements,
            m = e.options.placement,
            y = da(m),
            g =
              l ||
              (y === m || !d
                ? [Ba(m)]
                : (function (t) {
                    if (da(t) === Qs) return [];
                    var e = Ba(t);
                    return [za(t), e, za(e)];
                  })(m)),
            w = [m].concat(g).reduce(function (t, i) {
              return t.concat(
                da(i) === Qs
                  ? Za(e, {
                      placement: i,
                      boundary: u,
                      rootBoundary: c,
                      padding: h,
                      flipVariations: d,
                      allowedAutoPlacements: v,
                    })
                  : i
              );
            }, []),
            b = e.rects.reference,
            $ = e.rects.popper,
            x = new Map(),
            _ = !0,
            M = w[0],
            k = 0;
          k < w.length;
          k++
        ) {
          var S = w[k],
            C = da(S),
            L = ja(S) === ea,
            D = [Js, Ys].indexOf(C) >= 0,
            A = D ? "width" : "height",
            T = Ya(e, {
              placement: S,
              boundary: u,
              rootBoundary: c,
              altBoundary: p,
              padding: h,
            }),
            j = D ? (L ? Zs : Ks) : L ? Ys : Js;
          b[A] > $[A] && (j = Ba(j));
          var O = Ba(j),
            E = [];
          if (
            (o && E.push(T[C] <= 0),
            a && E.push(T[j] <= 0, T[O] <= 0),
            E.every(function (t) {
              return t;
            }))
          ) {
            (M = S), (_ = !1);
            break;
          }
          x.set(S, E);
        }
        if (_)
          for (
            var P = function (t) {
                var e = w.find(function (e) {
                  var i = x.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (M = e), "break";
              },
              N = d ? 3 : 1;
            N > 0;
            N--
          ) {
            if ("break" === P(N)) break;
          }
        e.placement !== M &&
          ((e.modifiersData[n]._skip = !0), (e.placement = M), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Qa(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function tl(t) {
    return [Js, Zs, Ys, Ks].some(function (e) {
      return t[e] >= 0;
    });
  }
  var el = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        r = i.offset,
        o = void 0 === r ? [0, 0] : r,
        s = sa.reduce(function (t, i) {
          return (
            (t[i] = (function (t, e, i) {
              var n = da(t),
                r = [Ks, Js].indexOf(n) >= 0 ? -1 : 1,
                o =
                  "function" == typeof i
                    ? i(Object.assign({}, e, { placement: t }))
                    : i,
                s = o[0],
                a = o[1];
              return (
                (s = s || 0),
                (a = (a || 0) * r),
                [Ks, Zs].indexOf(n) >= 0 ? { x: a, y: s } : { x: s, y: a }
              );
            })(i, e.rects, o)),
            t
          );
        }, {}),
        a = s[e.placement],
        l = a.x,
        h = a.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += l),
        (e.modifiersData.popperOffsets.y += h)),
        (e.modifiersData[n] = s);
    },
  };
  var il = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        r = i.mainAxis,
        o = void 0 === r || r,
        s = i.altAxis,
        a = void 0 !== s && s,
        l = i.boundary,
        h = i.rootBoundary,
        u = i.altBoundary,
        c = i.padding,
        p = i.tether,
        f = void 0 === p || p,
        d = i.tetherOffset,
        v = void 0 === d ? 0 : d,
        m = Ya(e, { boundary: l, rootBoundary: h, padding: c, altBoundary: u }),
        y = da(e.placement),
        g = ja(e.placement),
        w = !g,
        b = Ca(y),
        $ = "x" === b ? "y" : "x",
        x = e.modifiersData.popperOffsets,
        _ = e.rects.reference,
        M = e.rects.popper,
        k =
          "function" == typeof v
            ? v(Object.assign({}, e.rects, { placement: e.placement }))
            : v,
        S =
          "number" == typeof k
            ? { mainAxis: k, altAxis: k }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
        C = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        L = { x: 0, y: 0 };
      if (x) {
        if (o) {
          var D,
            A = "y" === b ? Js : Ks,
            T = "y" === b ? Ys : Zs,
            j = "y" === b ? "height" : "width",
            O = x[b],
            E = O + m[A],
            P = O - m[T],
            N = f ? -M[j] / 2 : 0,
            R = g === ea ? _[j] : M[j],
            B = g === ea ? -M[j] : -_[j],
            W = e.elements.arrow,
            z = f && W ? wa(W) : { width: 0, height: 0 },
            H = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            F = H[A],
            U = H[T],
            V = La(0, _[j], z[j]),
            I = w ? _[j] / 2 - N - V - F - S.mainAxis : R - V - F - S.mainAxis,
            q = w ? -_[j] / 2 + N + V + U + S.mainAxis : B + V + U + S.mainAxis,
            X = e.elements.arrow && Sa(e.elements.arrow),
            G = X ? ("y" === b ? X.clientTop || 0 : X.clientLeft || 0) : 0,
            J = null != (D = null == C ? void 0 : C[b]) ? D : 0,
            Y = O + q - J,
            Z = La(f ? ma(E, O + I - J - G) : E, O, f ? va(P, Y) : P);
          (x[b] = Z), (L[b] = Z - O);
        }
        if (a) {
          var K,
            Q = "x" === b ? Js : Ks,
            tt = "x" === b ? Ys : Zs,
            et = x[$],
            it = "y" === $ ? "height" : "width",
            nt = et + m[Q],
            rt = et - m[tt],
            ot = -1 !== [Js, Ks].indexOf(y),
            st = null != (K = null == C ? void 0 : C[$]) ? K : 0,
            at = ot ? nt : et - _[it] - M[it] - st + S.altAxis,
            lt = ot ? et + _[it] + M[it] - st - S.altAxis : rt,
            ht =
              f && ot
                ? (function (t, e, i) {
                    var n = La(t, e, i);
                    return n > i ? i : n;
                  })(at, et, lt)
                : La(f ? at : nt, et, f ? lt : rt);
          (x[$] = ht), (L[$] = ht - et);
        }
        e.modifiersData[n] = L;
      }
    },
    requiresIfExists: ["offset"],
  };
  function nl(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      r = ca(e),
      o =
        ca(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = ya(e.width) / t.offsetWidth || 1,
            n = ya(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      s = _a(e),
      a = ga(t, o),
      l = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (r || (!r && !i)) &&
        (("body" !== la(e) || Ua(s)) &&
          (l =
            (n = e) !== ha(n) && ca(n)
              ? (function (t) {
                  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
                })(n)
              : Ha(n)),
        ca(e)
          ? (((h = ga(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : s && (h.x = Fa(s))),
      {
        x: a.left + l.scrollLeft - h.x,
        y: a.top + l.scrollTop - h.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function rl(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function r(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && r(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || r(t);
      }),
      n
    );
  }
  function ol(t) {
    var e;
    return function () {
      return (
        e ||
          (e = new Promise(function (i) {
            Promise.resolve().then(function () {
              (e = void 0), i(t());
            });
          })),
        e
      );
    };
  }
  function sl(t) {
    for (
      var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
      n < e;
      n++
    )
      i[n - 1] = arguments[n];
    return [].concat(i).reduce(function (t, e) {
      return t.replace(/%s/, e);
    }, t);
  }
  var al =
      'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
    ll = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
  var hl =
      "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
    ul = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function cl() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function pl(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      r = e.defaultOptions,
      o = void 0 === r ? ul : r;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var r = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, ul, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        s = [],
        a = !1,
        l = {
          state: r,
          setOptions: function (i) {
            var a = "function" == typeof i ? i(r.options) : i;
            h(),
              (r.options = Object.assign({}, o, r.options, a)),
              (r.scrollParents = {
                reference: ua(t)
                  ? Ia(t)
                  : t.contextElement
                  ? Ia(t.contextElement)
                  : [],
                popper: Ia(e),
              });
            var u = (function (t) {
              var e = rl(t);
              return aa.reduce(function (t, i) {
                return t.concat(
                  e.filter(function (t) {
                    return t.phase === i;
                  })
                );
              }, []);
            })(
              (function (t) {
                var e = t.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {});
                return Object.keys(e).map(function (t) {
                  return e[t];
                });
              })([].concat(n, r.options.modifiers))
            );
            if (
              ((r.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              "production" !== process.env.NODE_ENV)
            ) {
              var c = (function (t, e) {
                var i = new Set();
                return t.filter(function (t) {
                  var n = e(t);
                  if (!i.has(n)) return i.add(n), !0;
                });
              })([].concat(u, r.options.modifiers), function (t) {
                return t.name;
              });
              if (
                ((function (t) {
                  t.forEach(function (e) {
                    []
                      .concat(Object.keys(e), ll)
                      .filter(function (t, e, i) {
                        return i.indexOf(t) === e;
                      })
                      .forEach(function (i) {
                        switch (i) {
                          case "name":
                            "string" != typeof e.name &&
                              console.error(
                                sl(
                                  al,
                                  String(e.name),
                                  '"name"',
                                  '"string"',
                                  '"' + String(e.name) + '"'
                                )
                              );
                            break;
                          case "enabled":
                            "boolean" != typeof e.enabled &&
                              console.error(
                                sl(
                                  al,
                                  e.name,
                                  '"enabled"',
                                  '"boolean"',
                                  '"' + String(e.enabled) + '"'
                                )
                              );
                            break;
                          case "phase":
                            aa.indexOf(e.phase) < 0 &&
                              console.error(
                                sl(
                                  al,
                                  e.name,
                                  '"phase"',
                                  "either " + aa.join(", "),
                                  '"' + String(e.phase) + '"'
                                )
                              );
                            break;
                          case "fn":
                            "function" != typeof e.fn &&
                              console.error(
                                sl(
                                  al,
                                  e.name,
                                  '"fn"',
                                  '"function"',
                                  '"' + String(e.fn) + '"'
                                )
                              );
                            break;
                          case "effect":
                            null != e.effect &&
                              "function" != typeof e.effect &&
                              console.error(
                                sl(
                                  al,
                                  e.name,
                                  '"effect"',
                                  '"function"',
                                  '"' + String(e.fn) + '"'
                                )
                              );
                            break;
                          case "requires":
                            null == e.requires ||
                              Array.isArray(e.requires) ||
                              console.error(
                                sl(
                                  al,
                                  e.name,
                                  '"requires"',
                                  '"array"',
                                  '"' + String(e.requires) + '"'
                                )
                              );
                            break;
                          case "requiresIfExists":
                            Array.isArray(e.requiresIfExists) ||
                              console.error(
                                sl(
                                  al,
                                  e.name,
                                  '"requiresIfExists"',
                                  '"array"',
                                  '"' + String(e.requiresIfExists) + '"'
                                )
                              );
                            break;
                          case "options":
                          case "data":
                            break;
                          default:
                            console.error(
                              'PopperJS: an invalid property has been provided to the "' +
                                e.name +
                                '" modifier, valid properties are ' +
                                ll
                                  .map(function (t) {
                                    return '"' + t + '"';
                                  })
                                  .join(", ") +
                                '; but "' +
                                i +
                                '" was provided.'
                            );
                        }
                        e.requires &&
                          e.requires.forEach(function (i) {
                            null ==
                              t.find(function (t) {
                                return t.name === i;
                              }) &&
                              console.error(
                                sl(
                                  'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
                                  String(e.name),
                                  i,
                                  i
                                )
                              );
                          });
                      });
                  });
                })(c),
                da(r.options.placement) === Qs)
              )
                r.orderedModifiers.find(function (t) {
                  return "flip" === t.name;
                }) ||
                  console.error(
                    [
                      'Popper: "auto" placements require the "flip" modifier be',
                      "present and enabled to work.",
                    ].join(" ")
                  );
              var p = $a(e);
              [p.marginTop, p.marginRight, p.marginBottom, p.marginLeft].some(
                function (t) {
                  return parseFloat(t);
                }
              ) &&
                console.warn(
                  [
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    "between the popper and its reference element or boundary.",
                    "To replicate margin, use the `offset` modifier, as well as",
                    "the `padding` option in the `preventOverflow` and `flip`",
                    "modifiers.",
                  ].join(" ")
                );
            }
            return (
              r.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  o = t.effect;
                if ("function" == typeof o) {
                  var a = o({ state: r, name: e, instance: l, options: n }),
                    h = function () {};
                  s.push(a || h);
                }
              }),
              l.update()
            );
          },
          forceUpdate: function () {
            if (!a) {
              var t = r.elements,
                e = t.reference,
                i = t.popper;
              if (cl(e, i)) {
                (r.rects = {
                  reference: nl(e, Sa(i), "fixed" === r.options.strategy),
                  popper: wa(i),
                }),
                  (r.reset = !1),
                  (r.placement = r.options.placement),
                  r.orderedModifiers.forEach(function (t) {
                    return (r.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0, o = 0; o < r.orderedModifiers.length; o++) {
                  if ("production" !== process.env.NODE_ENV && (n += 1) > 100) {
                    console.error(
                      "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash."
                    );
                    break;
                  }
                  if (!0 !== r.reset) {
                    var s = r.orderedModifiers[o],
                      h = s.fn,
                      u = s.options,
                      c = void 0 === u ? {} : u,
                      p = s.name;
                    "function" == typeof h &&
                      (r =
                        h({ state: r, options: c, name: p, instance: l }) || r);
                  } else (r.reset = !1), (o = -1);
                }
              } else "production" !== process.env.NODE_ENV && console.error(hl);
            }
          },
          update: ol(function () {
            return new Promise(function (t) {
              l.forceUpdate(), t(r);
            });
          }),
          destroy: function () {
            h(), (a = !0);
          },
        };
      if (!cl(t, e))
        return "production" !== process.env.NODE_ENV && console.error(hl), l;
      function h() {
        s.forEach(function (t) {
          return t();
        }),
          (s = []);
      }
      return (
        l.setOptions(i).then(function (t) {
          !a && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        l
      );
    };
  }
  var fl = pl({
      defaultModifiers: [
        Na,
        {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (t) {
            var e = t.state,
              i = t.name;
            e.modifiersData[i] = Ja({
              reference: e.rects.reference,
              element: e.rects.popper,
              strategy: "absolute",
              placement: e.placement,
            });
          },
          data: {},
        },
        {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (t) {
            var e = t.state,
              i = t.options,
              n = i.gpuAcceleration,
              r = void 0 === n || n,
              o = i.adaptive,
              s = void 0 === o || o,
              a = i.roundOffsets,
              l = void 0 === a || a;
            if ("production" !== process.env.NODE_ENV) {
              var h = $a(e.elements.popper).transitionProperty || "";
              s &&
                ["transform", "top", "right", "bottom", "left"].some(function (
                  t
                ) {
                  return h.indexOf(t) >= 0;
                }) &&
                console.warn(
                  [
                    "Popper: Detected CSS transitions on at least one of the following",
                    'CSS properties: "transform", "top", "right", "bottom", "left".',
                    "\n\n",
                    'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
                    "for smooth transitions, or remove these properties from the CSS",
                    "transition declaration on the popper element if only transitioning",
                    "opacity or background-color for example.",
                    "\n\n",
                    "We recommend using the popper element as a wrapper around an inner",
                    "element that can have any CSS property transitioned for animations.",
                  ].join(" ")
                );
            }
            var u = {
              placement: da(e.placement),
              variation: ja(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: r,
              isFixed: "fixed" === e.options.strategy,
            };
            null != e.modifiersData.popperOffsets &&
              (e.styles.popper = Object.assign(
                {},
                e.styles.popper,
                Ea(
                  Object.assign({}, u, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: s,
                    roundOffsets: l,
                  })
                )
              )),
              null != e.modifiersData.arrow &&
                (e.styles.arrow = Object.assign(
                  {},
                  e.styles.arrow,
                  Ea(
                    Object.assign({}, u, {
                      offsets: e.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    })
                  )
                )),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement,
              }));
          },
          data: {},
        },
        fa,
        el,
        Ka,
        il,
        Ta,
        {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (t) {
            var e = t.state,
              i = t.name,
              n = e.rects.reference,
              r = e.rects.popper,
              o = e.modifiersData.preventOverflow,
              s = Ya(e, { elementContext: "reference" }),
              a = Ya(e, { altBoundary: !0 }),
              l = Qa(s, n),
              h = Qa(a, r, o),
              u = tl(l),
              c = tl(h);
            (e.modifiersData[i] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: h,
              isReferenceHidden: u,
              hasPopperEscaped: c,
            }),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": c,
              }));
          },
        },
      ],
    }),
    dl = "tippy-content",
    vl = "tippy-arrow",
    ml = "tippy-svg-arrow",
    yl = { passive: !0, capture: !0 },
    gl = function () {
      return document.body;
    };
  function wl(t, e, i) {
    if (Array.isArray(t)) {
      var n = t[e];
      return null == n ? (Array.isArray(i) ? i[e] : i) : n;
    }
    return t;
  }
  function bl(t, e) {
    var i = {}.toString.call(t);
    return 0 === i.indexOf("[object") && i.indexOf(e + "]") > -1;
  }
  function $l(t, e) {
    return "function" == typeof t ? t.apply(void 0, e) : t;
  }
  function xl(t, e) {
    return 0 === e
      ? t
      : function (n) {
          clearTimeout(i),
            (i = setTimeout(function () {
              t(n);
            }, e));
        };
    var i;
  }
  function _l(t) {
    return [].concat(t);
  }
  function Ml(t, e) {
    -1 === t.indexOf(e) && t.push(e);
  }
  function kl(t) {
    return [].slice.call(t);
  }
  function Sl(t) {
    return Object.keys(t).reduce(function (e, i) {
      return void 0 !== t[i] && (e[i] = t[i]), e;
    }, {});
  }
  function Cl() {
    return document.createElement("div");
  }
  function Ll(t) {
    return ["Element", "Fragment"].some(function (e) {
      return bl(t, e);
    });
  }
  function Dl(t) {
    return Ll(t)
      ? [t]
      : (function (t) {
          return bl(t, "NodeList");
        })(t)
      ? kl(t)
      : Array.isArray(t)
      ? t
      : kl(document.querySelectorAll(t));
  }
  function Al(t, e) {
    t.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function Tl(t, e) {
    t.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function jl(t, e, i) {
    var n = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
      t[n](e, i);
    });
  }
  function Ol(t, e) {
    for (var i = e; i; ) {
      var n;
      if (t.contains(i)) return !0;
      i =
        null == i.getRootNode || null == (n = i.getRootNode())
          ? void 0
          : n.host;
    }
    return !1;
  }
  var El = { isTouch: !1 },
    Pl = 0;
  function Nl() {
    El.isTouch ||
      ((El.isTouch = !0),
      window.performance && document.addEventListener("mousemove", Rl));
  }
  function Rl() {
    var t = performance.now();
    t - Pl < 20 &&
      ((El.isTouch = !1), document.removeEventListener("mousemove", Rl)),
      (Pl = t);
  }
  function Bl() {
    var t,
      e = document.activeElement;
    if ((t = e) && t._tippy && t._tippy.reference === t) {
      var i = e._tippy;
      e.blur && !i.state.isVisible && e.blur();
    }
  }
  var Wl,
    zl =
      !!("undefined" != typeof window && "undefined" != typeof document) &&
      !!window.msCrypto;
  function Hl(t) {
    return [
      t +
        "() was called on a" +
        ("destroy" === t ? "n already-" : " ") +
        "destroyed instance. This is a no-op but",
      "indicates a potential memory leak.",
    ].join(" ");
  }
  function Fl(t) {
    return t
      .replace(/[ \t]{2,}/g, " ")
      .replace(/^[ \t]*/gm, "")
      .trim();
  }
  function Ul(t) {
    return Fl(
      "\n  %ctippy.js\n\n  %c" +
        Fl(t) +
        "\n\n  %c👷‍ This is a development-only message. It will be removed in production.\n  "
    );
  }
  function Vl(t) {
    return [
      Ul(t),
      "color: #00C584; font-size: 1.3em; font-weight: bold;",
      "line-height: 1.5",
      "color: #a6a095;",
    ];
  }
  function Il(t, e) {
    var i;
    t && !Wl.has(e) && (Wl.add(e), (i = console).warn.apply(i, Vl(e)));
  }
  function ql(t, e) {
    var i;
    t && !Wl.has(e) && (Wl.add(e), (i = console).error.apply(i, Vl(e)));
  }
  "production" !== process.env.NODE_ENV && (Wl = new Set());
  var Xl = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Gl = Object.assign(
      {
        appendTo: gl,
        aria: { content: "auto", expanded: "auto" },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null,
      },
      Xl,
      {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999,
      }
    ),
    Jl = Object.keys(Gl);
  function Yl(t) {
    var e = (t.plugins || []).reduce(function (e, i) {
      var n,
        r = i.name,
        o = i.defaultValue;
      r && (e[r] = void 0 !== t[r] ? t[r] : null != (n = Gl[r]) ? n : o);
      return e;
    }, {});
    return Object.assign({}, t, e);
  }
  function Zl(t, e) {
    var i = Object.assign(
      {},
      e,
      { content: $l(e.content, [t]) },
      e.ignoreAttributes
        ? {}
        : (function (t, e) {
            return (
              e ? Object.keys(Yl(Object.assign({}, Gl, { plugins: e }))) : Jl
            ).reduce(function (e, i) {
              var n = (t.getAttribute("data-tippy-" + i) || "").trim();
              if (!n) return e;
              if ("content" === i) e[i] = n;
              else
                try {
                  e[i] = JSON.parse(n);
                } catch (t) {
                  e[i] = n;
                }
              return e;
            }, {});
          })(t, e.plugins)
    );
    return (
      (i.aria = Object.assign({}, Gl.aria, i.aria)),
      (i.aria = {
        expanded: "auto" === i.aria.expanded ? e.interactive : i.aria.expanded,
        content:
          "auto" === i.aria.content
            ? e.interactive
              ? null
              : "describedby"
            : i.aria.content,
      }),
      i
    );
  }
  function Kl(t, e) {
    void 0 === t && (t = {}),
      void 0 === e && (e = []),
      Object.keys(t).forEach(function (t) {
        var i,
          n,
          r = (function (t, e) {
            var i = Object.assign({}, t);
            return (
              e.forEach(function (t) {
                delete i[t];
              }),
              i
            );
          })(Gl, Object.keys(Xl)),
          o = ((i = r), (n = t), !{}.hasOwnProperty.call(i, n));
        o &&
          (o =
            0 ===
            e.filter(function (e) {
              return e.name === t;
            }).length),
          Il(
            o,
            [
              "`" + t + "`",
              "is not a valid prop. You may have spelled it incorrectly, or if it's",
              "a plugin, forgot to pass it in an array as props.plugins.",
              "\n\n",
              "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n",
              "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/",
            ].join(" ")
          );
      });
  }
  function Ql(t, e) {
    t.innerHTML = e;
  }
  function th(t) {
    var e = Cl();
    return (
      !0 === t
        ? (e.className = vl)
        : ((e.className = ml), Ll(t) ? e.appendChild(t) : Ql(e, t)),
      e
    );
  }
  function eh(t, e) {
    Ll(e.content)
      ? (Ql(t, ""), t.appendChild(e.content))
      : "function" != typeof e.content &&
        (e.allowHTML ? Ql(t, e.content) : (t.textContent = e.content));
  }
  function ih(t) {
    var e = t.firstElementChild,
      i = kl(e.children);
    return {
      box: e,
      content: i.find(function (t) {
        return t.classList.contains(dl);
      }),
      arrow: i.find(function (t) {
        return t.classList.contains(vl) || t.classList.contains(ml);
      }),
      backdrop: i.find(function (t) {
        return t.classList.contains("tippy-backdrop");
      }),
    };
  }
  function nh(t) {
    var e = Cl(),
      i = Cl();
    (i.className = "tippy-box"),
      i.setAttribute("data-state", "hidden"),
      i.setAttribute("tabindex", "-1");
    var n = Cl();
    function r(i, n) {
      var r = ih(e),
        o = r.box,
        s = r.content,
        a = r.arrow;
      n.theme
        ? o.setAttribute("data-theme", n.theme)
        : o.removeAttribute("data-theme"),
        "string" == typeof n.animation
          ? o.setAttribute("data-animation", n.animation)
          : o.removeAttribute("data-animation"),
        n.inertia
          ? o.setAttribute("data-inertia", "")
          : o.removeAttribute("data-inertia"),
        (o.style.maxWidth =
          "number" == typeof n.maxWidth ? n.maxWidth + "px" : n.maxWidth),
        n.role ? o.setAttribute("role", n.role) : o.removeAttribute("role"),
        (i.content === n.content && i.allowHTML === n.allowHTML) ||
          eh(s, t.props),
        n.arrow
          ? a
            ? i.arrow !== n.arrow &&
              (o.removeChild(a), o.appendChild(th(n.arrow)))
            : o.appendChild(th(n.arrow))
          : a && o.removeChild(a);
    }
    return (
      (n.className = dl),
      n.setAttribute("data-state", "hidden"),
      eh(n, t.props),
      e.appendChild(i),
      i.appendChild(n),
      r(t.props, t.props),
      { popper: e, onUpdate: r }
    );
  }
  nh.$$tippy = !0;
  var rh = 1,
    oh = [],
    sh = [];
  function ah(t, e) {
    var i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u = Zl(t, Object.assign({}, Gl, Yl(Sl(e)))),
      c = !1,
      p = !1,
      f = !1,
      d = !1,
      v = [],
      m = xl(X, u.interactiveDebounce),
      y = rh++,
      g = (h = u.plugins).filter(function (t, e) {
        return h.indexOf(t) === e;
      }),
      w = {
        id: y,
        reference: t,
        popper: Cl(),
        popperInstance: null,
        props: u,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1,
        },
        plugins: g,
        clearDelayTimeouts: function () {
          clearTimeout(i), clearTimeout(n), cancelAnimationFrame(r);
        },
        setProps: function (e) {
          "production" !== process.env.NODE_ENV &&
            Il(w.state.isDestroyed, Hl("setProps"));
          if (w.state.isDestroyed) return;
          O("onBeforeUpdate", [w, e]), I();
          var i = w.props,
            n = Zl(t, Object.assign({}, i, Sl(e), { ignoreAttributes: !0 }));
          (w.props = n),
            V(),
            i.interactiveDebounce !== n.interactiveDebounce &&
              (N(), (m = xl(X, n.interactiveDebounce)));
          i.triggerTarget && !n.triggerTarget
            ? _l(i.triggerTarget).forEach(function (t) {
                t.removeAttribute("aria-expanded");
              })
            : n.triggerTarget && t.removeAttribute("aria-expanded");
          P(), j(), x && x(i, n);
          w.popperInstance &&
            (Z(),
            Q().forEach(function (t) {
              requestAnimationFrame(t._tippy.popperInstance.forceUpdate);
            }));
          O("onAfterUpdate", [w, e]);
        },
        setContent: function (t) {
          w.setProps({ content: t });
        },
        show: function () {
          "production" !== process.env.NODE_ENV &&
            Il(w.state.isDestroyed, Hl("show"));
          var t = w.state.isVisible,
            e = w.state.isDestroyed,
            i = !w.state.isEnabled,
            n = El.isTouch && !w.props.touch,
            r = wl(w.props.duration, 0, Gl.duration);
          if (t || e || i || n) return;
          if (L().hasAttribute("disabled")) return;
          if ((O("onShow", [w], !1), !1 === w.props.onShow(w))) return;
          (w.state.isVisible = !0), C() && ($.style.visibility = "visible");
          j(), z(), w.state.isMounted || ($.style.transition = "none");
          if (C()) {
            var o = A(),
              s = o.box,
              l = o.content;
            Al([s, l], 0);
          }
          (a = function () {
            var t;
            if (w.state.isVisible && !d) {
              if (
                ((d = !0),
                $.offsetHeight,
                ($.style.transition = w.props.moveTransition),
                C() && w.props.animation)
              ) {
                var e = A(),
                  i = e.box,
                  n = e.content;
                Al([i, n], r), Tl([i, n], "visible");
              }
              E(),
                P(),
                Ml(sh, w),
                null == (t = w.popperInstance) || t.forceUpdate(),
                O("onMount", [w]),
                w.props.animation &&
                  C() &&
                  (function (t, e) {
                    F(t, e);
                  })(r, function () {
                    (w.state.isShown = !0), O("onShown", [w]);
                  });
            }
          }),
            (function () {
              var t,
                e = w.props.appendTo,
                i = L();
              t =
                (w.props.interactive && e === gl) || "parent" === e
                  ? i.parentNode
                  : $l(e, [i]);
              t.contains($) || t.appendChild($);
              (w.state.isMounted = !0),
                Z(),
                "production" !== process.env.NODE_ENV &&
                  Il(
                    w.props.interactive &&
                      e === Gl.appendTo &&
                      i.nextElementSibling !== $,
                    [
                      "Interactive tippy element may not be accessible via keyboard",
                      "navigation because it is not directly after the reference element",
                      "in the DOM source order.",
                      "\n\n",
                      "Using a wrapper <div> or <span> tag around the reference element",
                      "solves this by creating a new parentNode context.",
                      "\n\n",
                      "Specifying `appendTo: document.body` silences this warning, but it",
                      "assumes you are using a focus management solution to handle",
                      "keyboard navigation.",
                      "\n\n",
                      "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity",
                    ].join(" ")
                  );
            })();
        },
        hide: function () {
          "production" !== process.env.NODE_ENV &&
            Il(w.state.isDestroyed, Hl("hide"));
          var t = !w.state.isVisible,
            e = w.state.isDestroyed,
            i = !w.state.isEnabled,
            n = wl(w.props.duration, 1, Gl.duration);
          if (t || e || i) return;
          if ((O("onHide", [w], !1), !1 === w.props.onHide(w))) return;
          (w.state.isVisible = !1),
            (w.state.isShown = !1),
            (d = !1),
            (c = !1),
            C() && ($.style.visibility = "hidden");
          if ((N(), H(), j(!0), C())) {
            var r = A(),
              o = r.box,
              s = r.content;
            w.props.animation && (Al([o, s], n), Tl([o, s], "hidden"));
          }
          E(),
            P(),
            w.props.animation
              ? C() &&
                (function (t, e) {
                  F(t, function () {
                    !w.state.isVisible &&
                      $.parentNode &&
                      $.parentNode.contains($) &&
                      e();
                  });
                })(n, w.unmount)
              : w.unmount();
        },
        hideWithInteractivity: function (t) {
          "production" !== process.env.NODE_ENV &&
            Il(w.state.isDestroyed, Hl("hideWithInteractivity"));
          D().addEventListener("mousemove", m), Ml(oh, m), m(t);
        },
        enable: function () {
          w.state.isEnabled = !0;
        },
        disable: function () {
          w.hide(), (w.state.isEnabled = !1);
        },
        unmount: function () {
          "production" !== process.env.NODE_ENV &&
            Il(w.state.isDestroyed, Hl("unmount"));
          w.state.isVisible && w.hide();
          if (!w.state.isMounted) return;
          K(),
            Q().forEach(function (t) {
              t._tippy.unmount();
            }),
            $.parentNode && $.parentNode.removeChild($);
          (sh = sh.filter(function (t) {
            return t !== w;
          })),
            (w.state.isMounted = !1),
            O("onHidden", [w]);
        },
        destroy: function () {
          "production" !== process.env.NODE_ENV &&
            Il(w.state.isDestroyed, Hl("destroy"));
          if (w.state.isDestroyed) return;
          w.clearDelayTimeouts(),
            w.unmount(),
            I(),
            delete t._tippy,
            (w.state.isDestroyed = !0),
            O("onDestroy", [w]);
        },
      };
    if (!u.render)
      return (
        "production" !== process.env.NODE_ENV &&
          ql(!0, "render() function has not been supplied."),
        w
      );
    var b = u.render(w),
      $ = b.popper,
      x = b.onUpdate;
    $.setAttribute("data-tippy-root", ""),
      ($.id = "tippy-" + w.id),
      (w.popper = $),
      (t._tippy = w),
      ($._tippy = w);
    var _ = g.map(function (t) {
        return t.fn(w);
      }),
      M = t.hasAttribute("aria-expanded");
    return (
      V(),
      P(),
      j(),
      O("onCreate", [w]),
      u.showOnCreate && tt(),
      $.addEventListener("mouseenter", function () {
        w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
      }),
      $.addEventListener("mouseleave", function () {
        w.props.interactive &&
          w.props.trigger.indexOf("mouseenter") >= 0 &&
          D().addEventListener("mousemove", m);
      }),
      w
    );
    function k() {
      var t = w.props.touch;
      return Array.isArray(t) ? t : [t, 0];
    }
    function S() {
      return "hold" === k()[0];
    }
    function C() {
      var t;
      return !(null == (t = w.props.render) || !t.$$tippy);
    }
    function L() {
      return l || t;
    }
    function D() {
      var t = L().parentNode;
      return t
        ? (function (t) {
            var e,
              i = _l(t)[0];
            return null != i && null != (e = i.ownerDocument) && e.body
              ? i.ownerDocument
              : document;
          })(t)
        : document;
    }
    function A() {
      return ih($);
    }
    function T(t) {
      return (w.state.isMounted && !w.state.isVisible) ||
        El.isTouch ||
        (o && "focus" === o.type)
        ? 0
        : wl(w.props.delay, t ? 0 : 1, Gl.delay);
    }
    function j(t) {
      void 0 === t && (t = !1),
        ($.style.pointerEvents = w.props.interactive && !t ? "" : "none"),
        ($.style.zIndex = "" + w.props.zIndex);
    }
    function O(t, e, i) {
      var n;
      (void 0 === i && (i = !0),
      _.forEach(function (i) {
        i[t] && i[t].apply(i, e);
      }),
      i) && (n = w.props)[t].apply(n, e);
    }
    function E() {
      var e = w.props.aria;
      if (e.content) {
        var i = "aria-" + e.content,
          n = $.id;
        _l(w.props.triggerTarget || t).forEach(function (t) {
          var e = t.getAttribute(i);
          if (w.state.isVisible) t.setAttribute(i, e ? e + " " + n : n);
          else {
            var r = e && e.replace(n, "").trim();
            r ? t.setAttribute(i, r) : t.removeAttribute(i);
          }
        });
      }
    }
    function P() {
      !M &&
        w.props.aria.expanded &&
        _l(w.props.triggerTarget || t).forEach(function (t) {
          w.props.interactive
            ? t.setAttribute(
                "aria-expanded",
                w.state.isVisible && t === L() ? "true" : "false"
              )
            : t.removeAttribute("aria-expanded");
        });
    }
    function N() {
      D().removeEventListener("mousemove", m),
        (oh = oh.filter(function (t) {
          return t !== m;
        }));
    }
    function R(e) {
      if (!El.isTouch || (!f && "mousedown" !== e.type)) {
        var i = (e.composedPath && e.composedPath()[0]) || e.target;
        if (!w.props.interactive || !Ol($, i)) {
          if (
            _l(w.props.triggerTarget || t).some(function (t) {
              return Ol(t, i);
            })
          ) {
            if (El.isTouch) return;
            if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
              return;
          } else O("onClickOutside", [w, e]);
          !0 === w.props.hideOnClick &&
            (w.clearDelayTimeouts(),
            w.hide(),
            (p = !0),
            setTimeout(function () {
              p = !1;
            }),
            w.state.isMounted || H());
        }
      }
    }
    function B() {
      f = !0;
    }
    function W() {
      f = !1;
    }
    function z() {
      var t = D();
      t.addEventListener("mousedown", R, !0),
        t.addEventListener("touchend", R, yl),
        t.addEventListener("touchstart", W, yl),
        t.addEventListener("touchmove", B, yl);
    }
    function H() {
      var t = D();
      t.removeEventListener("mousedown", R, !0),
        t.removeEventListener("touchend", R, yl),
        t.removeEventListener("touchstart", W, yl),
        t.removeEventListener("touchmove", B, yl);
    }
    function F(t, e) {
      var i = A().box;
      function n(t) {
        t.target === i && (jl(i, "remove", n), e());
      }
      if (0 === t) return e();
      jl(i, "remove", s), jl(i, "add", n), (s = n);
    }
    function U(e, i, n) {
      void 0 === n && (n = !1),
        _l(w.props.triggerTarget || t).forEach(function (t) {
          t.addEventListener(e, i, n),
            v.push({ node: t, eventType: e, handler: i, options: n });
        });
    }
    function V() {
      var t;
      S() &&
        (U("touchstart", q, { passive: !0 }),
        U("touchend", G, { passive: !0 })),
        ((t = w.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(
          function (t) {
            if ("manual" !== t)
              switch ((U(t, q), t)) {
                case "mouseenter":
                  U("mouseleave", G);
                  break;
                case "focus":
                  U(zl ? "focusout" : "blur", J);
                  break;
                case "focusin":
                  U("focusout", J);
              }
          }
        );
    }
    function I() {
      v.forEach(function (t) {
        var e = t.node,
          i = t.eventType,
          n = t.handler,
          r = t.options;
        e.removeEventListener(i, n, r);
      }),
        (v = []);
    }
    function q(t) {
      var e,
        i = !1;
      if (w.state.isEnabled && !Y(t) && !p) {
        var n = "focus" === (null == (e = o) ? void 0 : e.type);
        (o = t),
          (l = t.currentTarget),
          P(),
          !w.state.isVisible &&
            bl(t, "MouseEvent") &&
            oh.forEach(function (e) {
              return e(t);
            }),
          "click" === t.type &&
          (w.props.trigger.indexOf("mouseenter") < 0 || c) &&
          !1 !== w.props.hideOnClick &&
          w.state.isVisible
            ? (i = !0)
            : tt(t),
          "click" === t.type && (c = !i),
          i && !n && et(t);
      }
    }
    function X(t) {
      var e = t.target,
        i = L().contains(e) || $.contains(e);
      if ("mousemove" !== t.type || !i) {
        var n = Q()
          .concat($)
          .map(function (t) {
            var e,
              i = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
            return i
              ? {
                  popperRect: t.getBoundingClientRect(),
                  popperState: i,
                  props: u,
                }
              : null;
          })
          .filter(Boolean);
        (function (t, e) {
          var i = e.clientX,
            n = e.clientY;
          return t.every(function (t) {
            var e = t.popperRect,
              r = t.popperState,
              o = t.props.interactiveBorder,
              s = r.placement.split("-")[0],
              a = r.modifiersData.offset;
            if (!a) return !0;
            var l = "bottom" === s ? a.top.y : 0,
              h = "top" === s ? a.bottom.y : 0,
              u = "right" === s ? a.left.x : 0,
              c = "left" === s ? a.right.x : 0,
              p = e.top - n + l > o,
              f = n - e.bottom - h > o,
              d = e.left - i + u > o,
              v = i - e.right - c > o;
            return p || f || d || v;
          });
        })(n, t) && (N(), et(t));
      }
    }
    function G(t) {
      Y(t) ||
        (w.props.trigger.indexOf("click") >= 0 && c) ||
        (w.props.interactive ? w.hideWithInteractivity(t) : et(t));
    }
    function J(t) {
      (w.props.trigger.indexOf("focusin") < 0 && t.target !== L()) ||
        (w.props.interactive &&
          t.relatedTarget &&
          $.contains(t.relatedTarget)) ||
        et(t);
    }
    function Y(t) {
      return !!El.isTouch && S() !== t.type.indexOf("touch") >= 0;
    }
    function Z() {
      K();
      var e = w.props,
        i = e.popperOptions,
        n = e.placement,
        r = e.offset,
        o = e.getReferenceClientRect,
        s = e.moveTransition,
        l = C() ? ih($).arrow : null,
        h = o
          ? {
              getBoundingClientRect: o,
              contextElement: o.contextElement || L(),
            }
          : t,
        u = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (t) {
            var e = t.state;
            if (C()) {
              var i = A().box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                t
              ) {
                "placement" === t
                  ? i.setAttribute("data-placement", e.placement)
                  : e.attributes.popper["data-popper-" + t]
                  ? i.setAttribute("data-" + t, "")
                  : i.removeAttribute("data-" + t);
              }),
                (e.attributes.popper = {});
            }
          },
        },
        c = [
          { name: "offset", options: { offset: r } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !s } },
          u,
        ];
      C() &&
        l &&
        c.push({ name: "arrow", options: { element: l, padding: 3 } }),
        c.push.apply(c, (null == i ? void 0 : i.modifiers) || []),
        (w.popperInstance = fl(
          h,
          $,
          Object.assign({}, i, { placement: n, onFirstUpdate: a, modifiers: c })
        ));
    }
    function K() {
      w.popperInstance &&
        (w.popperInstance.destroy(), (w.popperInstance = null));
    }
    function Q() {
      return kl($.querySelectorAll("[data-tippy-root]"));
    }
    function tt(t) {
      w.clearDelayTimeouts(), t && O("onTrigger", [w, t]), z();
      var e = T(!0),
        n = k(),
        r = n[0],
        o = n[1];
      El.isTouch && "hold" === r && o && (e = o),
        e
          ? (i = setTimeout(function () {
              w.show();
            }, e))
          : w.show();
    }
    function et(t) {
      if (
        (w.clearDelayTimeouts(), O("onUntrigger", [w, t]), w.state.isVisible)
      ) {
        if (
          !(
            w.props.trigger.indexOf("mouseenter") >= 0 &&
            w.props.trigger.indexOf("click") >= 0 &&
            ["mouseleave", "mousemove"].indexOf(t.type) >= 0 &&
            c
          )
        ) {
          var e = T(!1);
          e
            ? (n = setTimeout(function () {
                w.state.isVisible && w.hide();
              }, e))
            : (r = requestAnimationFrame(function () {
                w.hide();
              }));
        }
      } else H();
    }
  }
  function lh(t, e) {
    void 0 === e && (e = {});
    var i = Gl.plugins.concat(e.plugins || []);
    "production" !== process.env.NODE_ENV &&
      (!(function (t) {
        var e = !t,
          i =
            "[object Object]" === Object.prototype.toString.call(t) &&
            !t.addEventListener;
        ql(
          e,
          [
            "tippy() was passed",
            "`" + String(t) + "`",
            "as its targets (first) argument. Valid types are: String, Element,",
            "Element[], or NodeList.",
          ].join(" ")
        ),
          ql(
            i,
            [
              "tippy() was passed a plain object which is not supported as an argument",
              "for virtual positioning. Use props.getReferenceClientRect instead.",
            ].join(" ")
          );
      })(t),
      Kl(e, i)),
      document.addEventListener("touchstart", Nl, yl),
      window.addEventListener("blur", Bl);
    var n = Object.assign({}, e, { plugins: i }),
      r = Dl(t);
    if ("production" !== process.env.NODE_ENV) {
      var o = Ll(n.content),
        s = r.length > 1;
      Il(
        o && s,
        [
          "tippy() was passed an Element as the `content` prop, but more than",
          "one tippy instance was created by this invocation. This means the",
          "content element will only be appended to the last tippy instance.",
          "\n\n",
          "Instead, pass the .innerHTML of the element, or use a function that",
          "returns a cloned version of the element instead.",
          "\n\n",
          "1) content: element.innerHTML\n",
          "2) content: () => element.cloneNode(true)",
        ].join(" ")
      );
    }
    var a = r.reduce(function (t, e) {
      var i = e && ah(e, n);
      return i && t.push(i), t;
    }, []);
    return Ll(t) ? a[0] : a;
  }
  function hh(t) {
    let e,
      i,
      n,
      r = zs(t[2]) + "";
    return {
      c() {
        (e = j("div")),
          (i = E(r)),
          B(e, "class", (n = g(t[1]) + " svelte-17jeuor"));
      },
      m(t, n) {
        D(t, e, n), S(e, i);
      },
      p(t, o) {
        4 & o && r !== (r = zs(t[2]) + "") && W(i, r),
          2 & o && n !== (n = g(t[1]) + " svelte-17jeuor") && B(e, "class", n);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function uh(t) {
    let e,
      i,
      n,
      r,
      o,
      a,
      l = zs(t[2]) + "";
    return {
      c() {
        (e = j("div")),
          (i = E(l)),
          B(e, "class", (n = g(t[1] + " point") + " svelte-17jeuor"));
      },
      m(n, s) {
        D(n, e, s),
          S(e, i),
          o ||
            ((a = w((r = t[4].call(null, e, { ...t[3], content: t[0] })))),
            (o = !0));
      },
      p(t, o) {
        4 & o && l !== (l = zs(t[2]) + "") && W(i, l),
          2 & o &&
            n !== (n = g(t[1] + " point") + " svelte-17jeuor") &&
            B(e, "class", n),
          r &&
            s(r.update) &&
            1 & o &&
            r.update.call(null, { ...t[3], content: t[0] });
      },
      d(t) {
        t && A(e), (o = !1), a();
      },
    };
  }
  function ch(e) {
    let i;
    function n(t, e) {
      return t[0] ? uh : hh;
    }
    let r = n(e),
      o = r(e);
    return {
      c() {
        o.c(), (i = N());
      },
      m(t, e) {
        o.m(t, e), D(t, i, e);
      },
      p(t, [e]) {
        r === (r = n(t)) && o
          ? o.p(t, e)
          : (o.d(1), (o = r(t)), o && (o.c(), o.m(i.parentNode, i)));
      },
      i: t,
      o: t,
      d(t) {
        o.d(t), t && A(i);
      },
    };
  }
  function ph(t, e, i) {
    let n,
      r,
      o,
      s,
      a,
      { column: l } = e,
      { rowNumber: h } = e,
      { row: u } = e;
    const c = (t, e) =>
      e
        ? '<span class="market-position">' +
          t +
          "</span>" +
          Hs(Number(e)) +
          '<span class="currency-mark">USDC</span>'
        : 0;
    return (
      (t.$$set = (t) => {
        "column" in t && i(5, (l = t.column)),
          "rowNumber" in t && i(6, (h = t.rowNumber)),
          "row" in t && i(7, (u = t.row));
      }),
      (t.$$.update = () => {
        160 & t.$$.dirty && i(2, (n = u.data[l.dataName])),
          64 & t.$$.dirty && i(9, (r = Boolean(h % 2))),
          544 & t.$$.dirty &&
            i(
              1,
              (o =
                "market-number " +
                (r ? "odd" : "even") +
                (l.sortDirection ? " sorted" : ""))
            ),
          32 & t.$$.dirty &&
            i(
              8,
              (s =
                "askATLAS" === l.dataName
                  ? "Ask"
                  : "bidATLAS" === l.dataName
                  ? "Bid"
                  : "")
            ),
          416 & t.$$.dirty &&
            i(
              0,
              (a =
                "askATLAS" === l.dataName
                  ? c(s, u.data.askAtlasEq)
                  : "bidATLAS" === l.dataName
                  ? c(s, u.data.bidAtlasEq)
                  : 0)
            );
      }),
      [
        a,
        o,
        n,
        { allowHTML: !0, delay: [200, 100], offset: [20, 0], placement: "top" },
        function (t, e) {
          let i = lh(t, e);
          return {
            update: (t) => {
              i.setProps(t);
            },
            destroy: () => {
              i.destroy();
            },
          };
        },
        l,
        h,
        u,
        s,
        r,
      ]
    );
  }
  (lh.defaultProps = Gl),
    (lh.setDefaultProps = function (t) {
      "production" !== process.env.NODE_ENV && Kl(t, []),
        Object.keys(t).forEach(function (e) {
          Gl[e] = t[e];
        });
    }),
    (lh.currentInput = El),
    Object.assign({}, fa, {
      effect: function (t) {
        var e = t.state,
          i = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(e.elements.popper.style, i.popper),
          (e.styles = i),
          e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow);
      },
    }),
    lh.setDefaultProps({ render: nh });
  function fh(t) {
    let e;
    return {
      c() {
        (e = O("path")),
          B(
            e,
            "d",
            "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"
          );
      },
      m(t, i) {
        D(t, e, i);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function dh(t) {
    let e, n;
    const r = [{ viewBox: "0 0 448 512" }, t[0]];
    let o = { $$slots: { default: [fh] }, $$scope: { ctx: t } };
    for (let t = 0; t < r.length; t += 1) o = i(o, r[t]);
    return (
      (e = new Go({ props: o })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, i) {
          Ot(e, t, i), (n = !0);
        },
        p(t, [i]) {
          const n = 1 & i ? At(r, [r[0], Tt(t[0])]) : {};
          2 & i && (n.$$scope = { dirty: i, ctx: t }), e.$set(n);
        },
        i(t) {
          n || ($t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function vh(t, e, n) {
    return (
      (t.$$set = (t) => {
        n(0, (e = i(i({}, e), y(t))));
      }),
      [(e = y(e))]
    );
  }
  class mh extends Rt {
    constructor(t) {
      super(), Nt(this, t, vh, dh, a, {});
    }
  }
  function yh(e) {
    let i,
      n,
      r,
      o,
      s,
      l,
      h,
      u,
      c,
      p = e[8],
      f = e[7];
    function d(t, e) {
      return t[3] ? wh : gh;
    }
    let v = d(e),
      m = v(e),
      y = xh(e);
    function w(t, e) {
      return t[3] ? Mh : _h;
    }
    let b = w(e),
      $ = b(e),
      x = Ch(e);
    return {
      c() {
        (i = j("div")),
          (n = j("div")),
          m.c(),
          (r = P()),
          (o = j("div")),
          y.c(),
          (s = P()),
          (l = j("div")),
          $.c(),
          (h = P()),
          (u = j("div")),
          x.c(),
          B(o, "class", "price-usdc svelte-161yoxw"),
          B(n, "class", "ship-price svelte-161yoxw"),
          B(u, "class", "price-usdc svelte-161yoxw"),
          B(l, "class", "ship-price row-2 svelte-161yoxw"),
          B(i, "class", (c = g(e[1]) + " svelte-161yoxw"));
      },
      m(t, e) {
        D(t, i, e),
          S(i, n),
          m.m(n, null),
          S(n, r),
          S(n, o),
          y.m(o, null),
          S(i, s),
          S(i, l),
          $.m(l, null),
          S(l, h),
          S(l, u),
          x.m(u, null);
      },
      p(e, s) {
        v === (v = d(e)) && m
          ? m.p(e, s)
          : (m.d(1), (m = v(e)), m && (m.c(), $t(m, 1), m.m(n, r))),
          256 & s && a(p, (p = e[8]))
            ? (wt(),
              xt(y, 1, 1, t),
              bt(),
              (y = xh(e)),
              y.c(),
              $t(y),
              y.m(o, null))
            : y.p(e, s),
          b === (b = w(e)) && $
            ? $.p(e, s)
            : ($.d(1), ($ = b(e)), $ && ($.c(), $t($, 1), $.m(l, h))),
          128 & s && a(f, (f = e[7]))
            ? (wt(),
              xt(x, 1, 1, t),
              bt(),
              (x = Ch(e)),
              x.c(),
              $t(x),
              x.m(u, null))
            : x.p(e, s),
          2 & s && c !== (c = g(e[1]) + " svelte-161yoxw") && B(i, "class", c);
      },
      i(t) {
        $t(m), $t(y), $t($), $t(x);
      },
      o(t) {
        xt(y), xt(x);
      },
      d(t) {
        t && A(i), m.d(), y.d(t), $.d(), x.d(t);
      },
    };
  }
  function gh(e) {
    let i,
      n = e[4],
      r = bh(e);
    return {
      c() {
        (i = j("div")), r.c(), B(i, "class", "price-atlas svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), r.m(i, null);
      },
      p(e, o) {
        16 & o && a(n, (n = e[4]))
          ? (wt(),
            xt(r, 1, 1, t),
            bt(),
            (r = bh(e)),
            r.c(),
            $t(r),
            r.m(i, null))
          : r.p(e, o);
      },
      i(t) {
        $t(r);
      },
      o(t) {
        xt(r);
      },
      d(t) {
        t && A(i), r.d(t);
      },
    };
  }
  function wh(e) {
    let i,
      n,
      r,
      o,
      l = e[4],
      h = $h(e);
    return {
      c() {
        (i = j("div")), h.c(), B(i, "class", "price-atlas svelte-161yoxw");
      },
      m(t, s) {
        D(t, i, s),
          h.m(i, null),
          r ||
            ((o = w((n = e[10].call(null, i, { ...e[9], content: e[6] })))),
            (r = !0));
      },
      p(e, r) {
        16 & r && a(l, (l = e[4]))
          ? (wt(),
            xt(h, 1, 1, t),
            bt(),
            (h = $h(e)),
            h.c(),
            $t(h),
            h.m(i, null))
          : h.p(e, r),
          n &&
            s(n.update) &&
            64 & r &&
            n.update.call(null, { ...e[9], content: e[6] });
      },
      i(t) {
        $t(h);
      },
      o(t) {
        xt(h);
      },
      d(t) {
        t && A(i), h.d(t), (r = !1), o();
      },
    };
  }
  function bh(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u = zs(e[4]) + "";
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (n.textContent = "Ask"),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          (l = j("span")),
          (l.textContent = "Atlas"),
          B(n, "class", "market-position svelte-161yoxw"),
          B(o, "class", "market-number svelte-161yoxw"),
          B(l, "class", "currency-mark svelte-161yoxw"),
          B(i, "class", "internal svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(o, s), S(i, a), S(i, l);
      },
      p(t, e) {
        16 & e && u !== (u = zs(t[4]) + "") && W(s, u);
      },
      i(t) {
        h ||
          ht(() => {
            (h = Mt(i, Wt, { duration: 1e3, start: 0.4, amount: 8 })),
              h.start();
          });
      },
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function $h(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u = zs(e[4]) + "";
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (n.textContent = "Ask"),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          (l = j("span")),
          (l.textContent = "Atlas"),
          B(n, "class", "market-position svelte-161yoxw"),
          B(o, "class", "market-number svelte-161yoxw"),
          B(l, "class", "currency-mark svelte-161yoxw"),
          B(i, "class", "internal svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(o, s), S(i, a), S(i, l);
      },
      p(t, e) {
        16 & e && u !== (u = zs(t[4]) + "") && W(s, u);
      },
      i(t) {
        h ||
          ht(() => {
            (h = Mt(i, Wt, { duration: 1e3, start: 0.4, amount: 8 })),
              h.start();
          });
      },
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function xh(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u = Hs(e[8]) + "";
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (n.textContent = "Ask"),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          (l = j("span")),
          (l.textContent = "USDC"),
          B(n, "class", "market-position svelte-161yoxw"),
          B(o, "class", "market-number svelte-161yoxw"),
          B(l, "class", "currency-mark svelte-161yoxw"),
          B(i, "class", "internal svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(o, s), S(i, a), S(i, l);
      },
      p(t, e) {
        256 & e && u !== (u = Hs(t[8]) + "") && W(s, u);
      },
      i(t) {
        h ||
          ht(() => {
            (h = Mt(i, Wt, { duration: 1e3, start: 0.4, amount: 8 })),
              h.start();
          });
      },
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function _h(e) {
    let i,
      n = e[2],
      r = kh(e);
    return {
      c() {
        (i = j("div")), r.c(), B(i, "class", "price-atlas svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), r.m(i, null);
      },
      p(e, o) {
        4 & o && a(n, (n = e[2]))
          ? (wt(),
            xt(r, 1, 1, t),
            bt(),
            (r = kh(e)),
            r.c(),
            $t(r),
            r.m(i, null))
          : r.p(e, o);
      },
      i(t) {
        $t(r);
      },
      o(t) {
        xt(r);
      },
      d(t) {
        t && A(i), r.d(t);
      },
    };
  }
  function Mh(e) {
    let i,
      n,
      r,
      o,
      l = e[2],
      h = Sh(e);
    return {
      c() {
        (i = j("div")), h.c(), B(i, "class", "price-atlas svelte-161yoxw");
      },
      m(t, s) {
        D(t, i, s),
          h.m(i, null),
          r ||
            ((o = w((n = e[10].call(null, i, { ...e[9], content: e[5] })))),
            (r = !0));
      },
      p(e, r) {
        4 & r && a(l, (l = e[2]))
          ? (wt(),
            xt(h, 1, 1, t),
            bt(),
            (h = Sh(e)),
            h.c(),
            $t(h),
            h.m(i, null))
          : h.p(e, r),
          n &&
            s(n.update) &&
            32 & r &&
            n.update.call(null, { ...e[9], content: e[5] });
      },
      i(t) {
        $t(h);
      },
      o(t) {
        xt(h);
      },
      d(t) {
        t && A(i), h.d(t), (r = !1), o();
      },
    };
  }
  function kh(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u = zs(e[2]) + "";
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (n.textContent = "Bid"),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          (l = j("span")),
          (l.textContent = "Atlas"),
          B(n, "class", "market-position svelte-161yoxw"),
          B(o, "class", "market-number svelte-161yoxw"),
          B(l, "class", "currency-mark svelte-161yoxw"),
          B(i, "class", "internal svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(o, s), S(i, a), S(i, l);
      },
      p(t, e) {
        4 & e && u !== (u = zs(t[2]) + "") && W(s, u);
      },
      i(t) {
        h ||
          ht(() => {
            (h = Mt(i, Wt, { duration: 1e3, start: 0.4, amount: 8 })),
              h.start();
          });
      },
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Sh(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u = zs(e[2]) + "";
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (n.textContent = "Bid"),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          (l = j("span")),
          (l.textContent = "Atlas"),
          B(n, "class", "market-position svelte-161yoxw"),
          B(o, "class", "market-number svelte-161yoxw"),
          B(l, "class", "currency-mark svelte-161yoxw"),
          B(i, "class", "internal svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(o, s), S(i, a), S(i, l);
      },
      p(t, e) {
        4 & e && u !== (u = zs(t[2]) + "") && W(s, u);
      },
      i(t) {
        h ||
          ht(() => {
            (h = Mt(i, Wt, { duration: 1e3, start: 0.4, amount: 8 })),
              h.start();
          });
      },
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Ch(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u = Hs(e[7]) + "";
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (n.textContent = "Bid"),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          (l = j("span")),
          (l.textContent = "USDC"),
          B(n, "class", "market-position svelte-161yoxw"),
          B(o, "class", "market-number svelte-161yoxw"),
          B(l, "class", "currency-mark svelte-161yoxw"),
          B(i, "class", "internal svelte-161yoxw");
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(o, s), S(i, a), S(i, l);
      },
      p(t, e) {
        128 & e && u !== (u = Hs(t[7]) + "") && W(s, u);
      },
      i(t) {
        h ||
          ht(() => {
            (h = Mt(i, Wt, { duration: 1e3, start: 0.4, amount: 8 })),
              h.start();
          });
      },
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Lh(e) {
    let i,
      n = e[0].prices && yh(e);
    return {
      c() {
        n && n.c(), (i = N());
      },
      m(t, e) {
        n && n.m(t, e), D(t, i, e);
      },
      p(t, [e]) {
        t[0].prices
          ? n
            ? (n.p(t, e), 1 & e && $t(n, 1))
            : ((n = yh(t)), n.c(), $t(n, 1), n.m(i.parentNode, i))
          : n && (n.d(1), (n = null));
      },
      i(t) {
        $t(n);
      },
      o: t,
      d(t) {
        n && n.d(t), t && A(i);
      },
    };
  }
  function Dh(t, e, i) {
    let n, r, o, s, a, l, h, u;
    c(t, je, (t) => i(11, (u = t)));
    let { ship: p } = e,
      { priceClass: f = "price-ask-bid" } = e;
    const d = (t, e, i) =>
      t
        ? '<span class="market-position">' +
          e +
          "</span>" +
          Hs(Number(i) * t) +
          '<span class="currency-mark">USDC</span>'
        : 0;
    return (
      (t.$$set = (t) => {
        "ship" in t && i(0, (p = t.ship)),
          "priceClass" in t && i(1, (f = t.priceClass));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty && i(4, (n = (p.prices && p.prices.askATLAS) || 0)),
          1 & t.$$.dirty && i(8, (r = (p.prices && p.prices.askUSDC) || 0)),
          1 & t.$$.dirty && i(2, (o = (p.prices && p.prices.bidATLAS) || 0)),
          1 & t.$$.dirty && i(7, (s = (p.prices && p.prices.bidUSDC) || 0)),
          2048 & t.$$.dirty && i(3, (a = u["ATLAS/USDC"] || 0)),
          24 & t.$$.dirty && i(6, (l = d(a, "ask", n))),
          12 & t.$$.dirty && i(5, (h = d(a, "bid", o)));
      }),
      [
        p,
        f,
        o,
        a,
        n,
        h,
        l,
        s,
        r,
        {
          allowHTML: !0,
          delay: [200, 100],
          offset: [-18, -8],
          placement: "top",
        },
        function (t, e) {
          let i = lh(t, e);
          return {
            update: (t) => {
              i.setProps(t);
            },
            destroy: () => {
              i.destroy();
            },
          };
        },
        u,
      ]
    );
  }
  class Ah extends Rt {
    constructor(t) {
      super(), Nt(this, t, Dh, Lh, a, { ship: 0, priceClass: 1 });
    }
  }
  function Th(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h = t[2].attributes.spec + "",
      u = t[2].attributes.class + "",
      c = t[0] && jh(t);
    return {
      c() {
        (e = j("div")),
          (i = j("span")),
          (n = E(h)),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          c && c.c(),
          B(i, "class", "capitalize svelte-1pw61jn"),
          B(o, "class", "subtitle svelte-1pw61jn"),
          B(e, "class", (l = g(t[3]) + " svelte-1pw61jn")),
          B(e, "style", t[1]);
      },
      m(t, l) {
        D(t, e, l),
          S(e, i),
          S(i, n),
          S(e, r),
          S(e, o),
          S(o, s),
          S(e, a),
          c && c.m(e, null);
      },
      p(t, i) {
        4 & i && h !== (h = t[2].attributes.spec + "") && W(n, h),
          4 & i && u !== (u = t[2].attributes.class + "") && W(s, u),
          t[0]
            ? c
              ? c.p(t, i)
              : ((c = jh(t)), c.c(), c.m(e, null))
            : c && (c.d(1), (c = null)),
          8 & i && l !== (l = g(t[3]) + " svelte-1pw61jn") && B(e, "class", l),
          2 & i && B(e, "style", t[1]);
      },
      d(t) {
        t && A(e), c && c.d();
      },
    };
  }
  function jh(t) {
    let e,
      i,
      n,
      r = t[2].symbol + "";
    return {
      c() {
        (e = j("span")),
          (i = E("Symbol: ")),
          (n = E(r)),
          B(e, "class", "ship-symbol svelte-1pw61jn");
      },
      m(t, r) {
        D(t, e, r), S(e, i), S(e, n);
      },
      p(t, e) {
        4 & e && r !== (r = t[2].symbol + "") && W(n, r);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function Oh(e) {
    let i,
      n = e[2] && Th(e);
    return {
      c() {
        n && n.c(), (i = N());
      },
      m(t, e) {
        n && n.m(t, e), D(t, i, e);
      },
      p(t, [e]) {
        t[2]
          ? n
            ? n.p(t, e)
            : ((n = Th(t)), n.c(), n.m(i.parentNode, i))
          : n && (n.d(1), (n = null));
      },
      i: t,
      o: t,
      d(t) {
        n && n.d(t), t && A(i);
      },
    };
  }
  function Eh(t, e, i) {
    let n,
      { includeSymbol: r = !1 } = e,
      { style: o = "" } = e,
      { className: s = "" } = e,
      { ship: a } = e;
    return (
      (t.$$set = (t) => {
        "includeSymbol" in t && i(0, (r = t.includeSymbol)),
          "style" in t && i(1, (o = t.style)),
          "className" in t && i(4, (s = t.className)),
          "ship" in t && i(2, (a = t.ship));
      }),
      (t.$$.update = () => {
        16 & t.$$.dirty && i(3, (n = "ship-meta" + (s ? " " + s : "")));
      }),
      [r, o, a, n, s]
    );
  }
  class Ph extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, Eh, Oh, a, {
          includeSymbol: 0,
          style: 1,
          className: 4,
          ship: 2,
        });
    }
  }
  var Nh = { allowDownsampling: !0 };
  var Rh,
    Bh,
    Wh,
    zh = (function () {
      function t(t, e) {
        var i = this;
        (this._resolutionMediaQueryList = null),
          (this._resolutionListener = function (t) {
            return i._onResolutionChanged();
          }),
          (this._canvasConfiguredListeners = []),
          (this.canvas = t),
          (this._canvasSize = {
            width: this.canvas.clientWidth,
            height: this.canvas.clientHeight,
          }),
          (this._options = e),
          this._configureCanvas(),
          this._installResolutionListener();
      }
      return (
        (t.prototype.destroy = function () {
          (this._canvasConfiguredListeners.length = 0),
            this._uninstallResolutionListener(),
            (this.canvas = null);
        }),
        Object.defineProperty(t.prototype, "canvasSize", {
          get: function () {
            return {
              width: this._canvasSize.width,
              height: this._canvasSize.height,
            };
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.resizeCanvas = function (t) {
          (this._canvasSize = { width: t.width, height: t.height }),
            this._configureCanvas();
        }),
        Object.defineProperty(t.prototype, "pixelRatio", {
          get: function () {
            var t = this.canvas.ownerDocument.defaultView;
            if (null == t)
              throw new Error("No window is associated with the canvas");
            return t.devicePixelRatio > 1 || this._options.allowDownsampling
              ? t.devicePixelRatio
              : 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.subscribeCanvasConfigured = function (t) {
          this._canvasConfiguredListeners.push(t);
        }),
        (t.prototype.unsubscribeCanvasConfigured = function (t) {
          this._canvasConfiguredListeners =
            this._canvasConfiguredListeners.filter(function (e) {
              return e != t;
            });
        }),
        (t.prototype._configureCanvas = function () {
          var t = this.pixelRatio;
          (this.canvas.style.width = this._canvasSize.width + "px"),
            (this.canvas.style.height = this._canvasSize.height + "px"),
            (this.canvas.width = this._canvasSize.width * t),
            (this.canvas.height = this._canvasSize.height * t),
            this._emitCanvasConfigured();
        }),
        (t.prototype._emitCanvasConfigured = function () {
          var t = this;
          this._canvasConfiguredListeners.forEach(function (e) {
            return e.call(t);
          });
        }),
        (t.prototype._installResolutionListener = function () {
          if (null !== this._resolutionMediaQueryList)
            throw new Error("Resolution listener is already installed");
          var t = this.canvas.ownerDocument.defaultView;
          if (null == t)
            throw new Error("No window is associated with the canvas");
          var e = t.devicePixelRatio;
          (this._resolutionMediaQueryList = t.matchMedia(
            "all and (resolution: " + e + "dppx)"
          )),
            this._resolutionMediaQueryList.addListener(
              this._resolutionListener
            );
        }),
        (t.prototype._uninstallResolutionListener = function () {
          null !== this._resolutionMediaQueryList &&
            (this._resolutionMediaQueryList.removeListener(
              this._resolutionListener
            ),
            (this._resolutionMediaQueryList = null));
        }),
        (t.prototype._reinstallResolutionListener = function () {
          this._uninstallResolutionListener(),
            this._installResolutionListener();
        }),
        (t.prototype._onResolutionChanged = function () {
          this._configureCanvas(), this._reinstallResolutionListener();
        }),
        t
      );
    })();
  /*!
   * @license
   * TradingView Lightweight Charts v3.7.0
   * Copyright (c) 2020 TradingView, Inc.
   * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
   */ function Hh(t, e) {
    var i,
      n = (((i = {})[0] = []),
      (i[1] = [t.lineWidth, t.lineWidth]),
      (i[2] = [2 * t.lineWidth, 2 * t.lineWidth]),
      (i[3] = [6 * t.lineWidth, 6 * t.lineWidth]),
      (i[4] = [t.lineWidth, 4 * t.lineWidth]),
      i)[e];
    t.setLineDash(n);
  }
  function Fh(t, e, i, n) {
    t.beginPath();
    var r = t.lineWidth % 2 ? 0.5 : 0;
    t.moveTo(i, e + r), t.lineTo(n, e + r), t.stroke();
  }
  ((Wh = Rh || (Rh = {}))[(Wh.Simple = 0)] = "Simple"),
    (Wh[(Wh.WithSteps = 1)] = "WithSteps"),
    (function (t) {
      (t[(t.Solid = 0)] = "Solid"),
        (t[(t.Dotted = 1)] = "Dotted"),
        (t[(t.Dashed = 2)] = "Dashed"),
        (t[(t.LargeDashed = 3)] = "LargeDashed"),
        (t[(t.SparseDotted = 4)] = "SparseDotted");
    })(Bh || (Bh = {}));
  var Uh = function (t, e) {
    return (
      (Uh =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        }),
      Uh(t, e)
    );
  };
  function Vh(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null"
      );
    function i() {
      this.constructor = t;
    }
    Uh(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
  }
  var Ih = function () {
    return (
      (Ih =
        Object.assign ||
        function (t) {
          for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var r in (e = arguments[i]))
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }),
      Ih.apply(this, arguments)
    );
  };
  function qh(t, e, i) {
    if (i || 2 === arguments.length)
      for (var n, r = 0, o = e.length; r < o; r++)
        (!n && r in e) ||
          (n || (n = Array.prototype.slice.call(e, 0, r)), (n[r] = e[r]));
    return t.concat(n || Array.prototype.slice.call(e));
  }
  function Xh(t, e) {
    if (!t) throw new Error("Assertion failed" + (e ? ": " + e : ""));
  }
  function Gh(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
  }
  function Jh(t) {
    if (null === t) throw new Error("Value is null");
    return t;
  }
  function Yh(t) {
    return Jh(Gh(t));
  }
  function Zh(t) {
    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    for (var n = 0, r = e; n < r.length; n++) {
      var o = r[n];
      for (var s in o)
        void 0 !== o[s] &&
          ("object" != typeof o[s] || void 0 === t[s]
            ? (t[s] = o[s])
            : Zh(t[s], o[s]));
    }
    return t;
  }
  function Kh(t) {
    return "number" == typeof t && isFinite(t);
  }
  function Qh(t) {
    return "number" == typeof t && t % 1 == 0;
  }
  function tu(t) {
    return "string" == typeof t;
  }
  function eu(t) {
    return "boolean" == typeof t;
  }
  function iu(t) {
    var e,
      i,
      n,
      r = t;
    if (!r || "object" != typeof r) return r;
    for (i in ((e = Array.isArray(r) ? [] : {}), r))
      r.hasOwnProperty(i) &&
        ((n = r[i]), (e[i] = n && "object" == typeof n ? iu(n) : n));
    return e;
  }
  function nu(t) {
    return null !== t;
  }
  function ru(t) {
    return null === t ? void 0 : t;
  }
  var ou = (function () {
      function t() {
        this.t = [];
      }
      return (
        (t.prototype.i = function (t) {
          this.t = t;
        }),
        (t.prototype.h = function (t, e, i, n) {
          this.t.forEach(function (r) {
            t.save(), r.h(t, e, i, n), t.restore();
          });
        }),
        t
      );
    })(),
    su = (function () {
      function t() {}
      return (
        (t.prototype.h = function (t, e, i, n) {
          t.save(), t.scale(e, e), this.u(t, i, n), t.restore();
        }),
        (t.prototype.o = function (t, e, i, n) {
          t.save(), t.scale(e, e), this.l(t, i, n), t.restore();
        }),
        (t.prototype.l = function (t, e, i) {}),
        t
      );
    })(),
    au = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.v = null), e;
      }
      return (
        Vh(e, t),
        (e.prototype._ = function (t) {
          this.v = t;
        }),
        (e.prototype.u = function (t) {
          if (null !== this.v && null !== this.v.M) {
            var e = this.v.M,
              i = this.v,
              n = function (n) {
                t.beginPath();
                for (var r = e.to - 1; r >= e.from; --r) {
                  var o = i.m[r];
                  t.moveTo(o.p, o.g), t.arc(o.p, o.g, n, 0, 2 * Math.PI);
                }
                t.fill();
              };
            (t.fillStyle = i.k), n(i.C + 2), (t.fillStyle = i.N), n(i.C);
          }
        }),
        e
      );
    })(su);
  function lu() {
    return { m: [{ p: 0, g: 0, S: 0, D: 0 }], N: "", k: "", C: 0, M: null };
  }
  var hu = { from: 0, to: 1 },
    uu = (function () {
      function t(t, e) {
        (this.A = new ou()),
          (this.T = []),
          (this.B = []),
          (this.L = !0),
          (this.F = t),
          (this.V = e),
          this.A.i(this.T);
      }
      return (
        (t.prototype.O = function (t) {
          var e = this.F.W();
          e.length !== this.T.length &&
            ((this.B = e.map(lu)),
            (this.T = this.B.map(function (t) {
              var e = new au();
              return e._(t), e;
            })),
            this.A.i(this.T)),
            (this.L = !0);
        }),
        (t.prototype.P = function (t, e, i) {
          return this.L && (this.R(t), (this.L = !1)), this.A;
        }),
        (t.prototype.R = function (t) {
          var e = this,
            i = this.F.W(),
            n = this.V.I(),
            r = this.F.j();
          i.forEach(function (i, o) {
            var s,
              a = e.B[o],
              l = i.q(n);
            if (null !== l && i.U()) {
              var h = Jh(i.H());
              (a.N = l.Y),
                (a.C = l.C),
                (a.m[0].D = l.D),
                (a.m[0].g = i.$().K(l.D, h.X)),
                (a.k =
                  null !== (s = l.Z) && void 0 !== s ? s : e.F.J(a.m[0].g / t)),
                (a.m[0].S = n),
                (a.m[0].p = r.G(n)),
                (a.M = hu);
            } else a.M = null;
          });
        }),
        t
      );
    })(),
    cu = (function () {
      function t(t) {
        this.tt = t;
      }
      return (
        (t.prototype.h = function (t, e, i, n) {
          if (null !== this.tt) {
            var r = this.tt.it.U,
              o = this.tt.nt.U;
            if (r || o) {
              t.save();
              var s = Math.round(this.tt.p * e),
                a = Math.round(this.tt.g * e),
                l = Math.ceil(this.tt.st * e),
                h = Math.ceil(this.tt.ht * e);
              (t.lineCap = "butt"),
                r &&
                  s >= 0 &&
                  ((t.lineWidth = Math.floor(this.tt.it.rt * e)),
                  (t.strokeStyle = this.tt.it.et),
                  (t.fillStyle = this.tt.it.et),
                  Hh(t, this.tt.it.ut),
                  (function (t, e, i, n) {
                    t.beginPath();
                    var r = t.lineWidth % 2 ? 0.5 : 0;
                    t.moveTo(e + r, 0), t.lineTo(e + r, n), t.stroke();
                  })(t, s, 0, h)),
                o &&
                  a >= 0 &&
                  ((t.lineWidth = Math.floor(this.tt.nt.rt * e)),
                  (t.strokeStyle = this.tt.nt.et),
                  (t.fillStyle = this.tt.nt.et),
                  Hh(t, this.tt.nt.ut),
                  Fh(t, a, 0, l)),
                t.restore();
            }
          }
        }),
        t
      );
    })(),
    pu = (function () {
      function t(t) {
        (this.L = !0),
          (this.at = {
            it: { rt: 1, ut: 0, et: "", U: !1 },
            nt: { rt: 1, ut: 0, et: "", U: !1 },
            st: 0,
            ht: 0,
            p: 0,
            g: 0,
          }),
          (this.ot = new cu(this.at)),
          (this.lt = t);
      }
      return (
        (t.prototype.O = function () {
          this.L = !0;
        }),
        (t.prototype.P = function (t, e) {
          return this.L && (this.R(), (this.L = !1)), this.ot;
        }),
        (t.prototype.R = function () {
          var t = this.lt.U(),
            e = Jh(this.lt.ft()),
            i = e.vt().ct().crosshair,
            n = this.at;
          (n.nt.U = t && this.lt._t(e)),
            (n.it.U = t && this.lt.dt()),
            (n.nt.rt = i.horzLine.width),
            (n.nt.ut = i.horzLine.style),
            (n.nt.et = i.horzLine.color),
            (n.it.rt = i.vertLine.width),
            (n.it.ut = i.vertLine.style),
            (n.it.et = i.vertLine.color),
            (n.st = e.wt()),
            (n.ht = e.Mt()),
            (n.p = this.lt.bt()),
            (n.g = this.lt.gt());
        }),
        t
      );
    })(),
    fu = {
      khaki: "#f0e68c",
      azure: "#f0ffff",
      aliceblue: "#f0f8ff",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gainsboro: "#dcdcdc",
      gray: "#808080",
      green: "#008000",
      honeydew: "#f0fff0",
      floralwhite: "#fffaf0",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lemonchiffon: "#fffacd",
      hotpink: "#ff69b4",
      lightyellow: "#ffffe0",
      greenyellow: "#adff2f",
      lightgoldenrodyellow: "#fafad2",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      lightcyan: "#e0ffff",
      magenta: "#f0f",
      maroon: "#800000",
      olive: "#808000",
      orange: "#ffa500",
      oldlace: "#fdf5e6",
      mediumblue: "#0000cd",
      transparent: "#0000",
      lime: "#0f0",
      lightpink: "#ffb6c1",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      midnightblue: "#191970",
      orchid: "#da70d6",
      mediumorchid: "#ba55d3",
      mediumturquoise: "#48d1cc",
      orangered: "#ff4500",
      royalblue: "#4169e1",
      powderblue: "#b0e0e6",
      red: "#f00",
      coral: "#ff7f50",
      turquoise: "#40e0d0",
      white: "#fff",
      whitesmoke: "#f5f5f5",
      wheat: "#f5deb3",
      teal: "#008080",
      steelblue: "#4682b4",
      bisque: "#ffe4c4",
      aquamarine: "#7fffd4",
      aqua: "#0ff",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      springgreen: "#00ff7f",
      antiquewhite: "#faebd7",
      burlywood: "#deb887",
      brown: "#a52a2a",
      beige: "#f5f5dc",
      chocolate: "#d2691e",
      chartreuse: "#7fff00",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cadetblue: "#5f9ea0",
      tomato: "#ff6347",
      fuchsia: "#f0f",
      blue: "#00f",
      salmon: "#fa8072",
      blanchedalmond: "#ffebcd",
      slateblue: "#6a5acd",
      slategray: "#708090",
      thistle: "#d8bfd8",
      tan: "#d2b48c",
      cyan: "#0ff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      blueviolet: "#8a2be2",
      black: "#000",
      darkmagenta: "#8b008b",
      darkslateblue: "#483d8b",
      darkkhaki: "#bdb76b",
      darkorchid: "#9932cc",
      darkorange: "#ff8c00",
      darkgreen: "#006400",
      darkred: "#8b0000",
      dodgerblue: "#1e90ff",
      darkslategray: "#2f4f4f",
      dimgray: "#696969",
      deepskyblue: "#00bfff",
      firebrick: "#b22222",
      forestgreen: "#228b22",
      indigo: "#4b0082",
      ivory: "#fffff0",
      lavenderblush: "#fff0f5",
      feldspar: "#d19275",
      indianred: "#cd5c5c",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightskyblue: "#87cefa",
      lightslategray: "#789",
      lightslateblue: "#8470ff",
      snow: "#fffafa",
      lightseagreen: "#20b2aa",
      lightsalmon: "#ffa07a",
      darksalmon: "#e9967a",
      darkviolet: "#9400d3",
      mediumpurple: "#9370d8",
      mediumaquamarine: "#66cdaa",
      skyblue: "#87ceeb",
      lavender: "#e6e6fa",
      lightsteelblue: "#b0c4de",
      mediumvioletred: "#c71585",
      mintcream: "#f5fffa",
      navajowhite: "#ffdead",
      navy: "#000080",
      olivedrab: "#6b8e23",
      palevioletred: "#d87093",
      violetred: "#d02090",
      yellow: "#ff0",
      yellowgreen: "#9acd32",
      lawngreen: "#7cfc00",
      pink: "#ffc0cb",
      paleturquoise: "#afeeee",
      palegoldenrod: "#eee8aa",
      darkolivegreen: "#556b2f",
      darkseagreen: "#8fbc8f",
      darkturquoise: "#00ced1",
      peachpuff: "#ffdab9",
      deeppink: "#ff1493",
      violet: "#ee82ee",
      palegreen: "#98fb98",
      mediumseagreen: "#3cb371",
      peru: "#cd853f",
      saddlebrown: "#8b4513",
      sandybrown: "#f4a460",
      rosybrown: "#bc8f8f",
      purple: "#800080",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      papayawhip: "#ffefd5",
      mediumslateblue: "#7b68ee",
      plum: "#dda0dd",
      mediumspringgreen: "#00fa9a",
    };
  function du(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
  }
  function vu(t) {
    return t <= 0 || t > 0
      ? t < 0
        ? 0
        : t > 1
        ? 1
        : Math.round(1e4 * t) / 1e4
      : 0;
  }
  var mu = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    yu = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    gu = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
    wu =
      /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
  function bu(t) {
    var e;
    if (
      ((t = t.toLowerCase()) in fu && (t = fu[t]),
      (e = wu.exec(t) || gu.exec(t)))
    )
      return [
        du(parseInt(e[1], 10)),
        du(parseInt(e[2], 10)),
        du(parseInt(e[3], 10)),
        vu(e.length < 5 ? 1 : parseFloat(e[4])),
      ];
    if ((e = yu.exec(t)))
      return [
        du(parseInt(e[1], 16)),
        du(parseInt(e[2], 16)),
        du(parseInt(e[3], 16)),
        1,
      ];
    if ((e = mu.exec(t)))
      return [
        du(17 * parseInt(e[1], 16)),
        du(17 * parseInt(e[2], 16)),
        du(17 * parseInt(e[3], 16)),
        1,
      ];
    throw new Error("Cannot parse color: " + t);
  }
  function $u(t) {
    var e,
      i = bu(t);
    return {
      yt: "rgb(" + i[0] + ", " + i[1] + ", " + i[2] + ")",
      kt:
        ((e = i),
        0.199 * e[0] + 0.687 * e[1] + 0.114 * e[2] > 160 ? "black" : "white"),
    };
  }
  function xu(t, e, i, n, r, o) {
    t.fillRect(e + o, i, n - 2 * o, o),
      t.fillRect(e + o, i + r - o, n - 2 * o, o),
      t.fillRect(e, i, o, r),
      t.fillRect(e + n - o, i, o, r);
  }
  function _u(t, e, i) {
    t.save(), t.scale(e, e), i(), t.restore();
  }
  function Mu(t, e, i, n, r, o) {
    t.save(),
      (t.globalCompositeOperation = "copy"),
      (t.fillStyle = o),
      t.fillRect(e, i, n, r),
      t.restore();
  }
  function ku(t, e, i, n, r, o, s) {
    t.save(), (t.globalCompositeOperation = "copy");
    var a = t.createLinearGradient(0, 0, 0, r);
    a.addColorStop(0, o),
      a.addColorStop(1, s),
      (t.fillStyle = a),
      t.fillRect(e, i, n, r),
      t.restore();
  }
  var Su,
    Cu = (function () {
      function t(t, e) {
        this._(t, e);
      }
      return (
        (t.prototype._ = function (t, e) {
          (this.tt = t), (this.Ct = e);
        }),
        (t.prototype.h = function (t, e, i, n, r, o) {
          if (this.tt.U) {
            t.font = e.Nt;
            var s = this.tt.xt || !this.tt.St ? e.Dt : 0,
              a = e.At,
              l = e.Tt,
              h = e.Bt,
              u = e.Lt,
              c = e.Ft,
              p = this.tt.Et,
              f = Math.ceil(i.Vt(t, p)),
              d = e.Ot,
              v = e.Wt + l + h,
              m = Math.ceil(0.5 * v),
              y = a + f + u + c + s,
              g = this.Ct.zt;
            this.Ct.Pt && (g = this.Ct.Pt);
            var w,
              b,
              $ = (g = Math.round(g)) - m,
              x = $ + v,
              _ = "right" === r,
              M = _ ? n : 0,
              k = Math.ceil(n * o),
              S = M;
            if (
              ((t.fillStyle = this.Ct.yt),
              (t.lineWidth = 1),
              (t.lineCap = "butt"),
              p)
            ) {
              _
                ? ((w = M - s), (b = (S = M - y) + c))
                : ((S = M + y), (w = M + s), (b = M + a + s + u));
              var C = Math.max(1, Math.floor(o)),
                L = Math.max(1, Math.floor(a * o)),
                D = _ ? k : 0,
                A = Math.round($ * o),
                T = Math.round(S * o),
                j = Math.round(g * o) - Math.floor(0.5 * o),
                O = j + C + (j - A),
                E = Math.round(w * o);
              t.save(),
                t.beginPath(),
                t.moveTo(D, A),
                t.lineTo(T, A),
                t.lineTo(T, O),
                t.lineTo(D, O),
                t.fill(),
                (t.fillStyle = this.tt.Z),
                t.fillRect(_ ? k - L : 0, A, L, O - A),
                this.tt.xt &&
                  ((t.fillStyle = this.Ct.et), t.fillRect(D, j, E - D, C)),
                (t.textAlign = "left"),
                (t.fillStyle = this.Ct.et),
                _u(t, o, function () {
                  t.fillText(p, b, x - h - d);
                }),
                t.restore();
            }
          }
        }),
        (t.prototype.Mt = function (t, e) {
          return this.tt.U ? t.Wt + t.Tt + t.Bt : 0;
        }),
        t
      );
    })(),
    Lu = (function () {
      function t(t) {
        (this.Rt = { zt: 0, et: "#FFF", yt: "#000" }),
          (this.It = { Et: "", U: !1, xt: !0, St: !1, Z: "" }),
          (this.jt = { Et: "", U: !1, xt: !1, St: !0, Z: "" }),
          (this.L = !0),
          (this.qt = new (t || Cu)(this.It, this.Rt)),
          (this.Ut = new (t || Cu)(this.jt, this.Rt));
      }
      return (
        (t.prototype.Et = function () {
          return this.It.Et;
        }),
        (t.prototype.zt = function () {
          return this.Ht(), this.Rt.zt;
        }),
        (t.prototype.O = function () {
          this.L = !0;
        }),
        (t.prototype.Mt = function (t, e) {
          return (
            void 0 === e && (e = !1),
            Math.max(this.qt.Mt(t, e), this.Ut.Mt(t, e))
          );
        }),
        (t.prototype.Yt = function () {
          return this.Rt.Pt || 0;
        }),
        (t.prototype.Kt = function (t) {
          this.Rt.Pt = t;
        }),
        (t.prototype.$t = function () {
          return this.Ht(), this.It.U || this.jt.U;
        }),
        (t.prototype.Xt = function () {
          return this.Ht(), this.It.U;
        }),
        (t.prototype.P = function (t) {
          return (
            this.Ht(),
            (this.It.xt = this.It.xt && t.ct().drawTicks),
            (this.jt.xt = this.jt.xt && t.ct().drawTicks),
            this.qt._(this.It, this.Rt),
            this.Ut._(this.jt, this.Rt),
            this.qt
          );
        }),
        (t.prototype.Zt = function () {
          return (
            this.Ht(),
            this.qt._(this.It, this.Rt),
            this.Ut._(this.jt, this.Rt),
            this.Ut
          );
        }),
        (t.prototype.Ht = function () {
          this.L &&
            ((this.It.xt = !0),
            (this.jt.xt = !1),
            this.Jt(this.It, this.jt, this.Rt));
        }),
        t
      );
    })(),
    Du = (function (t) {
      function e(e, i, n) {
        var r = t.call(this) || this;
        return (r.lt = e), (r.Gt = i), (r.Qt = n), r;
      }
      return (
        Vh(e, t),
        (e.prototype.Jt = function (t, e, i) {
          t.U = !1;
          var n = this.lt.ct().horzLine;
          if (n.labelVisible) {
            var r = this.Gt.H();
            if (this.lt.U() && !this.Gt.ti() && null !== r) {
              var o = $u(n.labelBackgroundColor);
              (i.yt = o.yt), (i.et = o.kt);
              var s = this.Qt(this.Gt);
              (i.zt = s.zt), (t.Et = this.Gt.ii(s.D, r)), (t.U = !0);
            }
          }
        }),
        e
      );
    })(Lu),
    Au = /[1-9]/g,
    Tu = (function () {
      function t() {
        this.tt = null;
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, e, i) {
          var n = this;
          if (null !== this.tt && !1 !== this.tt.U && 0 !== this.tt.Et.length) {
            t.font = e.Nt;
            var r = Math.round(e.ni.Vt(t, this.tt.Et, Au));
            if (!(r <= 0)) {
              t.save();
              var o = e.si,
                s = r + 2 * o,
                a = s / 2,
                l = this.tt.wt,
                h = this.tt.zt,
                u = Math.floor(h - a) + 0.5;
              u < 0
                ? ((h += Math.abs(0 - u)), (u = Math.floor(h - a) + 0.5))
                : u + s > l &&
                  ((h -= Math.abs(l - (u + s))), (u = Math.floor(h - a) + 0.5));
              var c = u + s,
                p = 0 + e.At + e.Tt + e.Wt + e.Bt;
              t.fillStyle = this.tt.yt;
              var f = Math.round(u * i),
                d = Math.round(0 * i),
                v = Math.round(c * i),
                m = Math.round(p * i);
              t.fillRect(f, d, v - f, m - d);
              var y = Math.round(this.tt.zt * i),
                g = d,
                w = Math.round((g + e.At + e.Dt) * i);
              t.fillStyle = this.tt.et;
              var b = Math.max(1, Math.floor(i)),
                $ = Math.floor(0.5 * i);
              t.fillRect(y - $, g, b, w - g);
              var x = p - e.Ot - e.Bt;
              (t.textAlign = "left"),
                (t.fillStyle = this.tt.et),
                _u(t, i, function () {
                  t.fillText(Jh(n.tt).Et, u + o, x);
                }),
                t.restore();
            }
          }
        }),
        t
      );
    })(),
    ju = (function () {
      function t(t, e, i) {
        (this.L = !0),
          (this.ot = new Tu()),
          (this.at = {
            U: !1,
            yt: "#4c525e",
            et: "white",
            Et: "",
            wt: 0,
            zt: NaN,
          }),
          (this.V = t),
          (this.hi = e),
          (this.Qt = i);
      }
      return (
        (t.prototype.O = function () {
          this.L = !0;
        }),
        (t.prototype.P = function () {
          return (
            this.L && (this.R(), (this.L = !1)), this.ot._(this.at), this.ot
          );
        }),
        (t.prototype.R = function () {
          var t = this.at;
          t.U = !1;
          var e = this.V.ct().vertLine;
          if (e.labelVisible) {
            var i = this.hi.j();
            if (!i.ti()) {
              var n = i.ri(this.V.I());
              t.wt = i.wt();
              var r = this.Qt();
              if (r.S) {
                (t.zt = r.zt), (t.Et = i.ei(Jh(n))), (t.U = !0);
                var o = $u(e.labelBackgroundColor);
                (t.yt = o.yt), (t.et = o.kt);
              }
            }
          }
        }),
        t
      );
    })(),
    Ou = (function () {
      function t() {
        (this.ui = null), (this.ai = 0);
      }
      return (
        (t.prototype.oi = function () {
          return this.ai;
        }),
        (t.prototype.li = function (t) {
          this.ai = t;
        }),
        (t.prototype.$ = function () {
          return this.ui;
        }),
        (t.prototype.fi = function (t) {
          this.ui = t;
        }),
        (t.prototype.ci = function () {
          return [];
        }),
        (t.prototype.U = function () {
          return !0;
        }),
        t
      );
    })();
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
  })(Su || (Su = {}));
  var Eu = (function (t) {
    function e(e, i) {
      var n,
        r,
        o = t.call(this) || this;
      (o.vi = null),
        (o._i = NaN),
        (o.di = 0),
        (o.wi = !0),
        (o.Mi = new Map()),
        (o.bi = !1),
        (o.mi = NaN),
        (o.pi = NaN),
        (o.gi = NaN),
        (o.yi = NaN),
        (o.hi = e),
        (o.ki = i),
        (o.Ci = new uu(e, o)),
        (o.Ni =
          ((n = function () {
            return o._i;
          }),
          (r = function () {
            return o.pi;
          }),
          function (t) {
            var e = r(),
              i = n();
            if (t === Jh(o.vi).xi()) return { D: i, zt: e };
            var s = Jh(t.H());
            return { D: t.Si(e, s), zt: e };
          }));
      var s = function () {
        return { S: o.hi.j().ri(o.di), zt: o.bt() };
      };
      return (o.Di = new ju(o, e, s)), (o.Ai = new pu(o)), o;
    }
    return (
      Vh(e, t),
      (e.prototype.ct = function () {
        return this.ki;
      }),
      (e.prototype.Ti = function (t, e) {
        (this.gi = t), (this.yi = e);
      }),
      (e.prototype.Bi = function () {
        (this.gi = NaN), (this.yi = NaN);
      }),
      (e.prototype.Li = function () {
        return this.gi;
      }),
      (e.prototype.Fi = function () {
        return this.yi;
      }),
      (e.prototype.Ei = function (t, e, i) {
        this.bi || (this.bi = !0), (this.wi = !0), this.Vi(t, e, i);
      }),
      (e.prototype.I = function () {
        return this.di;
      }),
      (e.prototype.bt = function () {
        return this.mi;
      }),
      (e.prototype.gt = function () {
        return this.pi;
      }),
      (e.prototype.U = function () {
        return this.wi;
      }),
      (e.prototype.Oi = function () {
        (this.wi = !1),
          this.Wi(),
          (this._i = NaN),
          (this.mi = NaN),
          (this.pi = NaN),
          (this.vi = null),
          this.Bi();
      }),
      (e.prototype.zi = function (t) {
        return null !== this.vi ? [this.Ai, this.Ci] : [];
      }),
      (e.prototype._t = function (t) {
        return t === this.vi && this.ki.horzLine.visible;
      }),
      (e.prototype.dt = function () {
        return this.ki.vertLine.visible;
      }),
      (e.prototype.Pi = function (t, e) {
        (this.wi && this.vi === t) || this.Mi.clear();
        var i = [];
        return this.vi === t && i.push(this.Ri(this.Mi, e, this.Ni)), i;
      }),
      (e.prototype.ci = function () {
        return this.wi ? [this.Di] : [];
      }),
      (e.prototype.ft = function () {
        return this.vi;
      }),
      (e.prototype.Ii = function () {
        this.Ai.O(),
          this.Mi.forEach(function (t) {
            return t.O();
          }),
          this.Di.O(),
          this.Ci.O();
      }),
      (e.prototype.ji = function (t) {
        return t && !t.xi().ti() ? t.xi() : null;
      }),
      (e.prototype.Vi = function (t, e, i) {
        this.qi(t, e, i) && this.Ii();
      }),
      (e.prototype.qi = function (t, e, i) {
        var n = this.mi,
          r = this.pi,
          o = this._i,
          s = this.di,
          a = this.vi,
          l = this.ji(i);
        (this.di = t),
          (this.mi = isNaN(t) ? NaN : this.hi.j().G(t)),
          (this.vi = i);
        var h = null !== l ? l.H() : null;
        return (
          null !== l && null !== h
            ? ((this._i = e), (this.pi = l.K(e, h)))
            : ((this._i = NaN), (this.pi = NaN)),
          n !== this.mi ||
            r !== this.pi ||
            s !== this.di ||
            o !== this._i ||
            a !== this.vi
        );
      }),
      (e.prototype.Wi = function () {
        var t = this.hi
            .W()
            .map(function (t) {
              return t.Hi().Ui();
            })
            .filter(nu),
          e = 0 === t.length ? null : Math.max.apply(Math, t);
        this.di = null !== e ? e : NaN;
      }),
      (e.prototype.Ri = function (t, e, i) {
        var n = t.get(e);
        return void 0 === n && ((n = new Du(this, e, i)), t.set(e, n)), n;
      }),
      e
    );
  })(Ou);
  function Pu(t, e) {
    if (!Kh(t)) return "n/a";
    if (!Qh(e)) throw new TypeError("invalid length");
    if (e < 0 || e > 16) throw new TypeError("invalid length");
    return 0 === e
      ? t.toString()
      : ("0000000000000000" + t.toString()).slice(-e);
  }
  var Nu = (function () {
      function t(t, e) {
        if ((e || (e = 1), (Kh(t) && Qh(t)) || (t = 100), t < 0))
          throw new TypeError("invalid base");
        (this.Gt = t), (this.Yi = e), this.Ki();
      }
      return (
        (t.prototype.format = function (t) {
          var e = t < 0 ? "−" : "";
          return (t = Math.abs(t)), e + this.$i(t);
        }),
        (t.prototype.Ki = function () {
          if (((this.Xi = 0), this.Gt > 0 && this.Yi > 0))
            for (var t = this.Gt; t > 1; ) (t /= 10), this.Xi++;
        }),
        (t.prototype.$i = function (t) {
          var e = this.Gt / this.Yi,
            i = Math.floor(t),
            n = "",
            r = void 0 !== this.Xi ? this.Xi : NaN;
          if (e > 1) {
            var o = +(Math.round(t * e) - i * e).toFixed(this.Xi);
            o >= e && ((o -= e), (i += 1)),
              (n = "." + Pu(+o.toFixed(this.Xi) * this.Yi, r));
          } else (i = Math.round(i * e) / e), r > 0 && (n = "." + Pu(0, r));
          return i.toFixed(0) + n;
        }),
        t
      );
    })(),
    Ru = (function (t) {
      function e(e) {
        return void 0 === e && (e = 100), t.call(this, e) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.format = function (e) {
          return t.prototype.format.call(this, e) + "%";
        }),
        e
      );
    })(Nu),
    Bu = (function () {
      function t() {
        this.Zi = [];
      }
      return (
        (t.prototype.Ji = function (t, e, i) {
          var n = { Gi: t, Qi: e, tn: !0 === i };
          this.Zi.push(n);
        }),
        (t.prototype.nn = function (t) {
          var e = this.Zi.findIndex(function (e) {
            return t === e.Gi;
          });
          e > -1 && this.Zi.splice(e, 1);
        }),
        (t.prototype.sn = function (t) {
          this.Zi = this.Zi.filter(function (e) {
            return e.Qi === t;
          });
        }),
        (t.prototype.hn = function (t, e) {
          var i = qh([], this.Zi, !0);
          (this.Zi = this.Zi.filter(function (t) {
            return !t.tn;
          })),
            i.forEach(function (i) {
              return i.Gi(t, e);
            });
        }),
        (t.prototype.rn = function () {
          return this.Zi.length > 0;
        }),
        (t.prototype.en = function () {
          this.Zi = [];
        }),
        t
      );
    })(),
    Wu = (function () {
      function t(t, e) {
        (this.un = t), (this.an = e);
      }
      return (
        (t.prototype.on = function (t) {
          return null !== t && this.un === t.un && this.an === t.an;
        }),
        (t.prototype.ln = function () {
          return new t(this.un, this.an);
        }),
        (t.prototype.fn = function () {
          return this.un;
        }),
        (t.prototype.cn = function () {
          return this.an;
        }),
        (t.prototype.vn = function () {
          return this.an - this.un;
        }),
        (t.prototype.ti = function () {
          return (
            this.an === this.un ||
            Number.isNaN(this.an) ||
            Number.isNaN(this.un)
          );
        }),
        (t.prototype._n = function (e) {
          return null === e
            ? this
            : new t(Math.min(this.fn(), e.fn()), Math.max(this.cn(), e.cn()));
        }),
        (t.prototype.dn = function (t) {
          if (Kh(t) && 0 != this.an - this.un) {
            var e = 0.5 * (this.an + this.un),
              i = this.an - e,
              n = this.un - e;
            (i *= t), (n *= t), (this.an = e + i), (this.un = e + n);
          }
        }),
        (t.prototype.wn = function (t) {
          Kh(t) && ((this.an += t), (this.un += t));
        }),
        (t.prototype.Mn = function () {
          return { minValue: this.un, maxValue: this.an };
        }),
        (t.bn = function (e) {
          return null === e ? null : new t(e.minValue, e.maxValue);
        }),
        t
      );
    })();
  function zu(t, e, i) {
    return Math.min(Math.max(t, e), i);
  }
  function Hu(t, e, i) {
    return e - t <= i;
  }
  function Fu(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
  }
  function Uu(t) {
    var e = Math.ceil(t);
    return e % 2 != 0 ? e - 1 : e;
  }
  function Vu(t) {
    var e = Math.ceil(t);
    return e % 2 == 0 ? e - 1 : e;
  }
  function Iu(t, e) {
    var i = (100 * (t - e)) / e;
    return e < 0 ? -i : i;
  }
  function qu(t, e) {
    var i = Iu(t.fn(), e),
      n = Iu(t.cn(), e);
    return new Wu(i, n);
  }
  function Xu(t, e) {
    var i = (100 * (t - e)) / e + 100;
    return e < 0 ? -i : i;
  }
  function Gu(t, e) {
    var i = Xu(t.fn(), e),
      n = Xu(t.cn(), e);
    return new Wu(i, n);
  }
  function Ju(t) {
    var e = Math.abs(t);
    if (e < 1e-8) return 0;
    var i = Fu(e + 1e-4) + 4;
    return t < 0 ? -i : i;
  }
  function Yu(t) {
    var e = Math.abs(t);
    if (e < 1e-8) return 0;
    var i = Math.pow(10, e - 4) - 1e-4;
    return t < 0 ? -i : i;
  }
  function Zu(t) {
    if (null === t) return null;
    var e = Ju(t.fn()),
      i = Ju(t.cn());
    return new Wu(e, i);
  }
  var Ku,
    Qu = (function () {
      function t(t, e) {
        if (
          ((this.mn = t),
          (this.pn = e),
          (function (t) {
            if (t < 0) return !1;
            for (var e = t; e > 1; e /= 10) if (e % 10 != 0) return !1;
            return !0;
          })(this.mn))
        )
          this.gn = [2, 2.5, 2];
        else {
          this.gn = [];
          for (var i = this.mn; 1 !== i; ) {
            if (i % 2 == 0) this.gn.push(2), (i /= 2);
            else {
              if (i % 5 != 0) throw new Error("unexpected base");
              this.gn.push(2, 2.5), (i /= 5);
            }
            if (this.gn.length > 100)
              throw new Error("something wrong with base");
          }
        }
      }
      return (
        (t.prototype.yn = function (t, e, i) {
          for (
            var n,
              r = 0 === this.mn ? 0 : 1 / this.mn,
              o = Math.pow(10, Math.max(0, Math.ceil(Fu(t - e)))),
              s = 0,
              a = this.pn[0];
            ;

          ) {
            var l = Hu(o, r, 1e-14) && o > r + 1e-14,
              h = Hu(o, i * a, 1e-14),
              u = Hu(o, 1, 1e-14);
            if (!(l && h && u)) break;
            (o /= a), (a = this.pn[++s % this.pn.length]);
          }
          if (
            (o <= r + 1e-14 && (o = r),
            (o = Math.max(1, o)),
            this.gn.length > 0 && ((n = o), 1, 1e-14, Math.abs(n - 1) < 1e-14))
          )
            for (s = 0, a = this.gn[0]; Hu(o, i * a, 1e-14) && o > r + 1e-14; )
              (o /= a), (a = this.gn[++s % this.gn.length]);
          return o;
        }),
        t
      );
    })(),
    tc = (function () {
      function t(t, e, i, n) {
        (this.kn = []),
          (this.Gt = t),
          (this.mn = e),
          (this.Cn = i),
          (this.Nn = n);
      }
      return (
        (t.prototype.yn = function (t, e) {
          if (t < e) throw new Error("high < low");
          var i = this.Gt.Mt(),
            n = ((t - e) * this.xn()) / i,
            r = new Qu(this.mn, [2, 2.5, 2]),
            o = new Qu(this.mn, [2, 2, 2.5]),
            s = new Qu(this.mn, [2.5, 2, 2]),
            a = [];
          return (
            a.push(r.yn(t, e, n), o.yn(t, e, n), s.yn(t, e, n)),
            (function (t) {
              if (t.length < 1) throw Error("array is empty");
              for (var e = t[0], i = 1; i < t.length; ++i)
                t[i] < e && (e = t[i]);
              return e;
            })(a)
          );
        }),
        (t.prototype.Sn = function () {
          var t = this.Gt,
            e = t.H();
          if (null !== e) {
            var i = t.Mt(),
              n = this.Cn(i - 1, e),
              r = this.Cn(0, e),
              o = this.Gt.ct().entireTextOnly ? this.Dn() / 2 : 0,
              s = o,
              a = i - 1 - o,
              l = Math.max(n, r),
              h = Math.min(n, r);
            if (l !== h) {
              for (
                var u = this.yn(l, h),
                  c = l % u,
                  p = l >= h ? 1 : -1,
                  f = null,
                  d = 0,
                  v = l - (c += c < 0 ? u : 0);
                v > h;
                v -= u
              ) {
                var m = this.Nn(v, e, !0);
                (null !== f && Math.abs(m - f) < this.xn()) ||
                  m < s ||
                  m > a ||
                  (d < this.kn.length
                    ? ((this.kn[d].An = m), (this.kn[d].Tn = t.Bn(v)))
                    : this.kn.push({ An: m, Tn: t.Bn(v) }),
                  d++,
                  (f = m),
                  t.Ln() && (u = this.yn(v * p, h)));
              }
              this.kn.length = d;
            } else this.kn = [];
          } else this.kn = [];
        }),
        (t.prototype.Fn = function () {
          return this.kn;
        }),
        (t.prototype.Dn = function () {
          return this.Gt.Wt();
        }),
        (t.prototype.xn = function () {
          return Math.ceil(2.5 * this.Dn());
        }),
        t
      );
    })();
  function ec(t) {
    return t.slice().sort(function (t, e) {
      return Jh(t.oi()) - Jh(e.oi());
    });
  }
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"),
      (t[(t.Logarithmic = 1)] = "Logarithmic"),
      (t[(t.Percentage = 2)] = "Percentage"),
      (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
  })(Ku || (Ku = {}));
  var ic,
    nc,
    rc = new Ru(),
    oc = new Nu(100, 1),
    sc = (function () {
      function t(t, e, i, n) {
        (this.En = 0),
          (this.Vn = null),
          (this.On = null),
          (this.Wn = null),
          (this.zn = { Pn: !1, Rn: null }),
          (this.In = 0),
          (this.jn = 0),
          (this.qn = new Bu()),
          (this.Un = new Bu()),
          (this.Hn = []),
          (this.Yn = null),
          (this.Kn = null),
          (this.$n = null),
          (this.Xn = null),
          (this.Zn = oc),
          (this.Jn = t),
          (this.ki = e),
          (this.Gn = i),
          (this.Qn = n),
          (this.ts = new tc(this, 100, this.ns.bind(this), this.ss.bind(this)));
      }
      return (
        (t.prototype.hs = function () {
          return this.Jn;
        }),
        (t.prototype.ct = function () {
          return this.ki;
        }),
        (t.prototype.rs = function (t) {
          if (
            (Zh(this.ki, t),
            this.es(),
            void 0 !== t.mode && this.us({ os: t.mode }),
            void 0 !== t.scaleMargins)
          ) {
            var e = Gh(t.scaleMargins.top),
              i = Gh(t.scaleMargins.bottom);
            if (e < 0 || e > 1)
              throw new Error(
                "Invalid top margin - expect value between 0 and 1, given=" + e
              );
            if (i < 0 || i > 1 || e + i > 1)
              throw new Error(
                "Invalid bottom margin - expect value between 0 and 1, given=" +
                  i
              );
            if (e + i > 1)
              throw new Error(
                "Invalid margins - sum of margins must be less than 1, given=" +
                  (e + i)
              );
            this.ls(), (this.Kn = null);
          }
        }),
        (t.prototype.fs = function () {
          return this.ki.autoScale;
        }),
        (t.prototype.Ln = function () {
          return 1 === this.ki.mode;
        }),
        (t.prototype.cs = function () {
          return 2 === this.ki.mode;
        }),
        (t.prototype.vs = function () {
          return 3 === this.ki.mode;
        }),
        (t.prototype.os = function () {
          return {
            _s: this.ki.autoScale,
            ds: this.ki.invertScale,
            os: this.ki.mode,
          };
        }),
        (t.prototype.us = function (t) {
          var e = this.os(),
            i = null;
          void 0 !== t._s && (this.ki.autoScale = t._s),
            void 0 !== t.os &&
              ((this.ki.mode = t.os),
              (2 !== t.os && 3 !== t.os) || (this.ki.autoScale = !0),
              (this.zn.Pn = !1)),
            1 === e.os &&
              t.os !== e.os &&
              ((function (t) {
                if (null === t) return !1;
                var e = Yu(t.fn()),
                  i = Yu(t.cn());
                return isFinite(e) && isFinite(i);
              })(this.On)
                ? ((i = (function (t) {
                    if (null === t) return null;
                    var e = Yu(t.fn()),
                      i = Yu(t.cn());
                    return new Wu(e, i);
                  })(this.On)),
                  null !== i && this.ws(i))
                : (this.ki.autoScale = !0)),
            1 === t.os &&
              t.os !== e.os &&
              null !== (i = Zu(this.On)) &&
              this.ws(i);
          var n = e.os !== this.ki.mode;
          n && (2 === e.os || this.cs()) && this.es(),
            n && (3 === e.os || this.vs()) && this.es(),
            void 0 !== t.ds &&
              e.ds !== t.ds &&
              ((this.ki.invertScale = t.ds), this.Ms()),
            this.Un.hn(e, this.os());
        }),
        (t.prototype.bs = function () {
          return this.Un;
        }),
        (t.prototype.Wt = function () {
          return this.Gn.fontSize;
        }),
        (t.prototype.Mt = function () {
          return this.En;
        }),
        (t.prototype.ps = function (t) {
          this.En !== t && ((this.En = t), this.ls(), (this.Kn = null));
        }),
        (t.prototype.gs = function () {
          if (this.Vn) return this.Vn;
          var t = this.Mt() - this.ys() - this.ks();
          return (this.Vn = t), t;
        }),
        (t.prototype.Cs = function () {
          return this.Ns(), this.On;
        }),
        (t.prototype.ws = function (t, e) {
          var i = this.On;
          (e || (null === i && null !== t) || (null !== i && !i.on(t))) &&
            ((this.Kn = null), (this.On = t));
        }),
        (t.prototype.ti = function () {
          return this.Ns(), 0 === this.En || !this.On || this.On.ti();
        }),
        (t.prototype.xs = function (t) {
          return this.ds() ? t : this.Mt() - 1 - t;
        }),
        (t.prototype.K = function (t, e) {
          return (
            this.cs() ? (t = Iu(t, e)) : this.vs() && (t = Xu(t, e)),
            this.ss(t, e)
          );
        }),
        (t.prototype.Ss = function (t, e, i) {
          this.Ns();
          for (
            var n = this.ks(),
              r = Jh(this.Cs()),
              o = r.fn(),
              s = r.cn(),
              a = this.gs() - 1,
              l = this.ds(),
              h = a / (s - o),
              u = void 0 === i ? 0 : i.from,
              c = void 0 === i ? t.length : i.to,
              p = this.Ds(),
              f = u;
            f < c;
            f++
          ) {
            var d = t[f],
              v = d.D;
            if (!isNaN(v)) {
              var m = v;
              null !== p && (m = p(d.D, e));
              var y = n + h * (m - o),
                g = l ? y : this.En - 1 - y;
              d.g = g;
            }
          }
        }),
        (t.prototype.As = function (t, e, i) {
          this.Ns();
          for (
            var n = this.ks(),
              r = Jh(this.Cs()),
              o = r.fn(),
              s = r.cn(),
              a = this.gs() - 1,
              l = this.ds(),
              h = a / (s - o),
              u = void 0 === i ? 0 : i.from,
              c = void 0 === i ? t.length : i.to,
              p = this.Ds(),
              f = u;
            f < c;
            f++
          ) {
            var d = t[f],
              v = d.open,
              m = d.high,
              y = d.low,
              g = d.close;
            null !== p &&
              ((v = p(d.open, e)),
              (m = p(d.high, e)),
              (y = p(d.low, e)),
              (g = p(d.close, e)));
            var w = n + h * (v - o),
              b = l ? w : this.En - 1 - w;
            (d.Ts = b),
              (w = n + h * (m - o)),
              (b = l ? w : this.En - 1 - w),
              (d.Bs = b),
              (w = n + h * (y - o)),
              (b = l ? w : this.En - 1 - w),
              (d.Ls = b),
              (w = n + h * (g - o)),
              (b = l ? w : this.En - 1 - w),
              (d.Fs = b);
          }
        }),
        (t.prototype.Si = function (t, e) {
          var i = this.ns(t, e);
          return this.Es(i, e);
        }),
        (t.prototype.Es = function (t, e) {
          var i = t;
          return (
            this.cs()
              ? (i = (function (t, e) {
                  return e < 0 && (t = -t), (t / 100) * e + e;
                })(i, e))
              : this.vs() &&
                (i = (function (t, e) {
                  return (t -= 100), e < 0 && (t = -t), (t / 100) * e + e;
                })(i, e)),
            i
          );
        }),
        (t.prototype.Vs = function () {
          return this.Hn;
        }),
        (t.prototype.Os = function () {
          if (this.Yn) return this.Yn;
          for (var t = [], e = 0; e < this.Hn.length; e++) {
            var i = this.Hn[e];
            null === i.oi() && i.li(e + 1), t.push(i);
          }
          return (t = ec(t)), (this.Yn = t), this.Yn;
        }),
        (t.prototype.Ws = function (t) {
          -1 === this.Hn.indexOf(t) && (this.Hn.push(t), this.es(), this.zs());
        }),
        (t.prototype.Ps = function (t) {
          var e = this.Hn.indexOf(t);
          if (-1 === e) throw new Error("source is not attached to scale");
          this.Hn.splice(e, 1),
            0 === this.Hn.length && (this.us({ _s: !0 }), this.ws(null)),
            this.es(),
            this.zs();
        }),
        (t.prototype.H = function () {
          for (var t = null, e = 0, i = this.Hn; e < i.length; e++) {
            var n = i[e].H();
            null !== n && (null === t || n.Rs < t.Rs) && (t = n);
          }
          return null === t ? null : t.X;
        }),
        (t.prototype.ds = function () {
          return this.ki.invertScale;
        }),
        (t.prototype.Fn = function () {
          return (
            this.Kn || (this.ts.Sn(), (this.Kn = this.ts.Fn()), this.qn.hn()),
            this.Kn
          );
        }),
        (t.prototype.Is = function () {
          return this.qn;
        }),
        (t.prototype.js = function (t) {
          this.cs() ||
            this.vs() ||
            (null === this.$n &&
              null === this.Wn &&
              (this.ti() ||
                ((this.$n = this.En - t), (this.Wn = Jh(this.Cs()).ln()))));
        }),
        (t.prototype.qs = function (t) {
          if (!this.cs() && !this.vs() && null !== this.$n) {
            this.us({ _s: !1 }), (t = this.En - t) < 0 && (t = 0);
            var e = (this.$n + 0.2 * (this.En - 1)) / (t + 0.2 * (this.En - 1)),
              i = Jh(this.Wn).ln();
            (e = Math.max(e, 0.1)), i.dn(e), this.ws(i);
          }
        }),
        (t.prototype.Us = function () {
          this.cs() || this.vs() || ((this.$n = null), (this.Wn = null));
        }),
        (t.prototype.Hs = function (t) {
          this.fs() ||
            (null === this.Xn &&
              null === this.Wn &&
              (this.ti() || ((this.Xn = t), (this.Wn = Jh(this.Cs()).ln()))));
        }),
        (t.prototype.Ys = function (t) {
          if (!this.fs() && null !== this.Xn) {
            var e = Jh(this.Cs()).vn() / (this.gs() - 1),
              i = t - this.Xn;
            this.ds() && (i *= -1);
            var n = i * e,
              r = Jh(this.Wn).ln();
            r.wn(n), this.ws(r, !0), (this.Kn = null);
          }
        }),
        (t.prototype.Ks = function () {
          this.fs() ||
            (null !== this.Xn && ((this.Xn = null), (this.Wn = null)));
        }),
        (t.prototype.$s = function () {
          return this.Zn || this.es(), this.Zn;
        }),
        (t.prototype.ii = function (t, e) {
          switch (this.ki.mode) {
            case 2:
              return this.$s().format(Iu(t, e));
            case 3:
              return this.$s().format(Xu(t, e));
            default:
              return this.Xs(t);
          }
        }),
        (t.prototype.Bn = function (t) {
          switch (this.ki.mode) {
            case 2:
            case 3:
              return this.$s().format(t);
            default:
              return this.Xs(t);
          }
        }),
        (t.prototype.Zs = function (t) {
          return this.Xs(t, Jh(this.Js()).$s());
        }),
        (t.prototype.Gs = function (t, e) {
          return (t = Iu(t, e)), rc.format(t);
        }),
        (t.prototype.Qs = function () {
          return this.Hn;
        }),
        (t.prototype.th = function (t) {
          this.zn = { Rn: t, Pn: !1 };
        }),
        (t.prototype.Ii = function () {
          this.Hn.forEach(function (t) {
            return t.Ii();
          });
        }),
        (t.prototype.es = function () {
          this.Kn = null;
          var t = this.Js(),
            e = 100;
          null !== t && (e = Math.round(1 / t.ih())),
            (this.Zn = oc),
            this.cs()
              ? ((this.Zn = rc), (e = 100))
              : this.vs()
              ? ((this.Zn = new Nu(100, 1)), (e = 100))
              : null !== t && (this.Zn = t.$s()),
            (this.ts = new tc(this, e, this.ns.bind(this), this.ss.bind(this))),
            this.ts.Sn();
        }),
        (t.prototype.zs = function () {
          this.Yn = null;
        }),
        (t.prototype.Js = function () {
          return this.Hn[0] || null;
        }),
        (t.prototype.ys = function () {
          return this.ds()
            ? this.ki.scaleMargins.bottom * this.Mt() + this.jn
            : this.ki.scaleMargins.top * this.Mt() + this.In;
        }),
        (t.prototype.ks = function () {
          return this.ds()
            ? this.ki.scaleMargins.top * this.Mt() + this.In
            : this.ki.scaleMargins.bottom * this.Mt() + this.jn;
        }),
        (t.prototype.Ns = function () {
          this.zn.Pn || ((this.zn.Pn = !0), this.nh());
        }),
        (t.prototype.ls = function () {
          this.Vn = null;
        }),
        (t.prototype.ss = function (t, e) {
          if ((this.Ns(), this.ti())) return 0;
          t = this.Ln() && t ? Ju(t) : t;
          var i = Jh(this.Cs()),
            n = this.ks() + ((this.gs() - 1) * (t - i.fn())) / i.vn();
          return this.xs(n);
        }),
        (t.prototype.ns = function (t, e) {
          if ((this.Ns(), this.ti())) return 0;
          var i = this.xs(t),
            n = Jh(this.Cs()),
            r = n.fn() + n.vn() * ((i - this.ks()) / (this.gs() - 1));
          return this.Ln() ? Yu(r) : r;
        }),
        (t.prototype.Ms = function () {
          (this.Kn = null), this.ts.Sn();
        }),
        (t.prototype.nh = function () {
          var t = this.zn.Rn;
          if (null !== t) {
            for (
              var e = null, i = 0, n = 0, r = 0, o = this.Qs();
              r < o.length;
              r++
            ) {
              var s = o[r];
              if (s.U()) {
                var a = s.H();
                if (null !== a) {
                  var l = s.sh(t.hh(), t.rh()),
                    h = l && l.Cs();
                  if (null !== h) {
                    switch (this.ki.mode) {
                      case 1:
                        h = Zu(h);
                        break;
                      case 2:
                        h = qu(h, a.X);
                        break;
                      case 3:
                        h = Gu(h, a.X);
                    }
                    if (((e = null === e ? h : e._n(Jh(h))), null !== l)) {
                      var u = l.eh();
                      null !== u &&
                        ((i = Math.max(i, u.above)),
                        (n = Math.max(i, u.below)));
                    }
                  }
                }
              }
            }
            if (
              ((i === this.In && n === this.jn) ||
                ((this.In = i), (this.jn = n), (this.Kn = null), this.ls()),
              null !== e)
            ) {
              if (e.fn() === e.cn()) {
                var c = this.Js(),
                  p = 5 * (null === c || this.cs() || this.vs() ? 1 : c.ih());
                e = new Wu(e.fn() - p, e.cn() + p);
              }
              this.ws(e);
            } else null === this.On && this.ws(new Wu(-0.5, 0.5));
            this.zn.Pn = !0;
          }
        }),
        (t.prototype.Ds = function () {
          return this.cs() ? Iu : this.vs() ? Xu : this.Ln() ? Ju : null;
        }),
        (t.prototype.Xs = function (t, e) {
          return void 0 === this.Qn.priceFormatter
            ? (void 0 === e && (e = this.$s()), e.format(t))
            : this.Qn.priceFormatter(t);
        }),
        t
      );
    })();
  function ac(t) {
    void 0 !== t.borderColor &&
      ((t.borderUpColor = t.borderColor), (t.borderDownColor = t.borderColor)),
      void 0 !== t.wickColor &&
        ((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
  }
  !(function (t) {
    (t[(t.Disabled = 0)] = "Disabled"),
      (t[(t.Continuous = 1)] = "Continuous"),
      (t[(t.OnDataUpdate = 2)] = "OnDataUpdate");
  })(ic || (ic = {})),
    (function (t) {
      (t[(t.LastBar = 0)] = "LastBar"),
        (t[(t.LastVisible = 1)] = "LastVisible");
    })(nc || (nc = {}));
  var lc = function (t) {
    return t.getUTCFullYear();
  };
  var hc = (function () {
      function t(t, e) {
        void 0 === t && (t = "yyyy-MM-dd"),
          void 0 === e && (e = "default"),
          (this.uh = t),
          (this.ah = e);
      }
      return (
        (t.prototype.oh = function (t) {
          return (function (t, e, i) {
            return e
              .replace(
                /yyyy/g,
                (function (t) {
                  return Pu(lc(t), 4);
                })(t)
              )
              .replace(
                /yy/g,
                (function (t) {
                  return Pu(lc(t) % 100, 2);
                })(t)
              )
              .replace(
                /MMMM/g,
                (function (t, e) {
                  return new Date(
                    t.getUTCFullYear(),
                    t.getUTCMonth(),
                    1
                  ).toLocaleString(e, { month: "long" });
                })(t, i)
              )
              .replace(
                /MMM/g,
                (function (t, e) {
                  return new Date(
                    t.getUTCFullYear(),
                    t.getUTCMonth(),
                    1
                  ).toLocaleString(e, { month: "short" });
                })(t, i)
              )
              .replace(
                /MM/g,
                (function (t) {
                  return Pu(
                    (function (t) {
                      return t.getUTCMonth() + 1;
                    })(t),
                    2
                  );
                })(t)
              )
              .replace(
                /dd/g,
                (function (t) {
                  return Pu(
                    (function (t) {
                      return t.getUTCDate();
                    })(t),
                    2
                  );
                })(t)
              );
          })(t, this.uh, this.ah);
        }),
        t
      );
    })(),
    uc = (function () {
      function t(t) {
        this.lh = t || "%h:%m:%s";
      }
      return (
        (t.prototype.oh = function (t) {
          return this.lh
            .replace("%h", Pu(t.getUTCHours(), 2))
            .replace("%m", Pu(t.getUTCMinutes(), 2))
            .replace("%s", Pu(t.getUTCSeconds(), 2));
        }),
        t
      );
    })(),
    cc = { fh: "yyyy-MM-dd", _h: "%h:%m:%s", dh: " ", wh: "default" },
    pc = (function () {
      function t(t) {
        void 0 === t && (t = {});
        var e = Ih(Ih({}, cc), t);
        (this.Mh = new hc(e.fh, e.wh)),
          (this.bh = new uc(e._h)),
          (this.mh = e.dh);
      }
      return (
        (t.prototype.oh = function (t) {
          return "" + this.Mh.oh(t) + this.mh + this.bh.oh(t);
        }),
        t
      );
    })();
  function fc(t, e, i, n, r) {
    void 0 === n && (n = 0), void 0 === r && (r = t.length);
    for (var o = r - n; 0 < o; ) {
      var s = o >> 1,
        a = n + s;
      i(t[a], e) ? ((n = a + 1), (o -= s + 1)) : (o = s);
    }
    return n;
  }
  function dc(t, e, i, n, r) {
    void 0 === n && (n = 0), void 0 === r && (r = t.length);
    for (var o = r - n; 0 < o; ) {
      var s = o >> 1,
        a = n + s;
      i(e, t[a]) ? (o = s) : ((n = a + 1), (o -= s + 1));
    }
    return n;
  }
  var vc = (function () {
      function t(t, e) {
        void 0 === e && (e = 50),
          (this.ph = 0),
          (this.gh = 1),
          (this.yh = 1),
          (this.kh = new Map()),
          (this.Ch = new Map()),
          (this.Nh = t),
          (this.xh = e);
      }
      return (
        (t.prototype.oh = function (t) {
          var e =
              void 0 === t.Sh
                ? new Date(1e3 * t.Dh).getTime()
                : new Date(
                    Date.UTC(t.Sh.year, t.Sh.month - 1, t.Sh.day)
                  ).getTime(),
            i = this.kh.get(e);
          if (void 0 !== i) return i.Ah;
          if (this.ph === this.xh) {
            var n = this.Ch.get(this.yh);
            this.Ch.delete(this.yh),
              this.kh.delete(Gh(n)),
              this.yh++,
              this.ph--;
          }
          var r = this.Nh(t);
          return (
            this.kh.set(e, { Ah: r, Th: this.gh }),
            this.Ch.set(this.gh, e),
            this.ph++,
            this.gh++,
            r
          );
        }),
        t
      );
    })(),
    mc = (function () {
      function t(t, e) {
        Xh(t <= e, "right should be >= left"), (this.Bh = t), (this.Lh = e);
      }
      return (
        (t.prototype.hh = function () {
          return this.Bh;
        }),
        (t.prototype.rh = function () {
          return this.Lh;
        }),
        (t.prototype.Fh = function () {
          return this.Lh - this.Bh + 1;
        }),
        (t.prototype.Eh = function (t) {
          return this.Bh <= t && t <= this.Lh;
        }),
        (t.prototype.on = function (t) {
          return this.Bh === t.hh() && this.Lh === t.rh();
        }),
        t
      );
    })();
  function yc(t, e) {
    return null === t || null === e ? t === e : t.on(e);
  }
  var gc,
    wc = (function () {
      function t() {
        (this.Vh = new Map()), (this.kh = null);
      }
      return (
        (t.prototype.Oh = function (t, e) {
          this.Wh(e), (this.kh = null);
          for (var i = e; i < t.length; ++i) {
            var n = t[i],
              r = this.Vh.get(n.zh);
            void 0 === r && ((r = []), this.Vh.set(n.zh, r)),
              r.push({ Ph: i, S: n.S, Rh: n.zh });
          }
        }),
        (t.prototype.Ih = function (t, e) {
          var i = Math.ceil(e / t);
          return (
            (null !== this.kh && this.kh.jh === i) ||
              (this.kh = { Fn: this.qh(i), jh: i }),
            this.kh.Fn
          );
        }),
        (t.prototype.Wh = function (t) {
          if (0 !== t) {
            var e = [];
            this.Vh.forEach(function (i, n) {
              t <= i[0].Ph
                ? e.push(n)
                : i.splice(
                    fc(i, t, function (e) {
                      return e.Ph < t;
                    }),
                    1 / 0
                  );
            });
            for (var i = 0, n = e; i < n.length; i++) {
              var r = n[i];
              this.Vh.delete(r);
            }
          } else this.Vh.clear();
        }),
        (t.prototype.qh = function (t) {
          for (
            var e = [],
              i = 0,
              n = Array.from(this.Vh.keys()).sort(function (t, e) {
                return e - t;
              });
            i < n.length;
            i++
          ) {
            var r = n[i];
            if (this.Vh.get(r)) {
              var o = e;
              e = [];
              for (
                var s = o.length,
                  a = 0,
                  l = Gh(this.Vh.get(r)),
                  h = l.length,
                  u = 1 / 0,
                  c = -1 / 0,
                  p = 0;
                p < h;
                p++
              ) {
                for (var f = l[p], d = f.Ph; a < s; ) {
                  var v = o[a],
                    m = v.Ph;
                  if (!(m < d)) {
                    u = m;
                    break;
                  }
                  a++, e.push(v), (c = m), (u = 1 / 0);
                }
                u - d >= t && d - c >= t && (e.push(f), (c = d));
              }
              for (; a < s; a++) e.push(o[a]);
            }
          }
          return e;
        }),
        t
      );
    })(),
    bc = (function () {
      function t(t) {
        this.Uh = t;
      }
      return (
        (t.prototype.Hh = function () {
          return null === this.Uh
            ? null
            : new mc(Math.floor(this.Uh.hh()), Math.ceil(this.Uh.rh()));
        }),
        (t.prototype.Yh = function () {
          return this.Uh;
        }),
        (t.Kh = function () {
          return new t(null);
        }),
        t
      );
    })();
  !(function (t) {
    (t[(t.Year = 0)] = "Year"),
      (t[(t.Month = 1)] = "Month"),
      (t[(t.DayOfMonth = 2)] = "DayOfMonth"),
      (t[(t.Time = 3)] = "Time"),
      (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
  })(gc || (gc = {}));
  var $c,
    xc = (function () {
      function t(t, e, i) {
        (this.$h = 0),
          (this.Xh = null),
          (this.Zh = []),
          (this.Xn = null),
          (this.$n = null),
          (this.Jh = new wc()),
          (this.Gh = new Map()),
          (this.Qh = bc.Kh()),
          (this.tr = !0),
          (this.ir = new Bu()),
          (this.nr = new Bu()),
          (this.sr = new Bu()),
          (this.hr = null),
          (this.rr = null),
          (this.er = []),
          (this.ki = e),
          (this.Qn = i),
          (this.ur = e.rightOffset),
          (this.ar = e.barSpacing),
          (this.hi = t),
          this.lr();
      }
      return (
        (t.prototype.ct = function () {
          return this.ki;
        }),
        (t.prototype.cr = function (t) {
          Zh(this.Qn, t), this.vr(), this.lr();
        }),
        (t.prototype.rs = function (t, e) {
          var i;
          Zh(this.ki, t),
            this.ki.fixLeftEdge && this._r(),
            this.ki.fixRightEdge && this.dr(),
            void 0 !== t.barSpacing && this.hi.wr(t.barSpacing),
            void 0 !== t.rightOffset && this.hi.Mr(t.rightOffset),
            void 0 !== t.minBarSpacing &&
              this.hi.wr(
                null !== (i = t.barSpacing) && void 0 !== i ? i : this.ar
              ),
            this.vr(),
            this.lr(),
            this.sr.hn();
        }),
        (t.prototype.ri = function (t) {
          var e;
          return (
            (null === (e = this.Zh[t]) || void 0 === e ? void 0 : e.S) || null
          );
        }),
        (t.prototype.br = function (t, e) {
          if (this.Zh.length < 1) return null;
          if (t.Dh > this.Zh[this.Zh.length - 1].S.Dh)
            return e ? this.Zh.length - 1 : null;
          var i = fc(this.Zh, t.Dh, function (t, e) {
            return t.S.Dh < e;
          });
          return t.Dh < this.Zh[i].S.Dh ? (e ? i : null) : i;
        }),
        (t.prototype.ti = function () {
          return 0 === this.$h || 0 === this.Zh.length;
        }),
        (t.prototype.mr = function () {
          return this.pr(), this.Qh.Hh();
        }),
        (t.prototype.gr = function () {
          return this.pr(), this.Qh.Yh();
        }),
        (t.prototype.yr = function () {
          var t = this.mr();
          if (null === t) return null;
          var e = { from: t.hh(), to: t.rh() };
          return this.kr(e);
        }),
        (t.prototype.kr = function (t) {
          var e = Math.round(t.from),
            i = Math.round(t.to),
            n = Jh(this.Cr()),
            r = Jh(this.Nr());
          return {
            from: Jh(this.ri(Math.max(n, e))),
            to: Jh(this.ri(Math.min(r, i))),
          };
        }),
        (t.prototype.Sr = function (t) {
          return { from: Jh(this.br(t.from, !0)), to: Jh(this.br(t.to, !0)) };
        }),
        (t.prototype.wt = function () {
          return this.$h;
        }),
        (t.prototype.Dr = function (t) {
          if (isFinite(t) && !(t <= 0) && this.$h !== t) {
            if (this.ki.lockVisibleTimeRangeOnResize && this.$h) {
              var e = (this.ar * t) / this.$h;
              this.ar = e;
            }
            if (this.ki.fixLeftEdge) {
              var i = this.mr();
              if (null !== i && i.hh() <= 0) {
                var n = this.$h - t;
                this.ur -= Math.round(n / this.ar) + 1;
              }
            }
            (this.$h = t), (this.tr = !0), this.Ar(), this.Tr();
          }
        }),
        (t.prototype.G = function (t) {
          if (this.ti() || !Qh(t)) return 0;
          var e = this.Br() + this.ur - t;
          return this.$h - (e + 0.5) * this.ar - 1;
        }),
        (t.prototype.Lr = function (t, e) {
          for (
            var i = this.Br(),
              n = void 0 === e ? 0 : e.from,
              r = void 0 === e ? t.length : e.to,
              o = n;
            o < r;
            o++
          ) {
            var s = t[o].S,
              a = i + this.ur - s,
              l = this.$h - (a + 0.5) * this.ar - 1;
            t[o].p = l;
          }
        }),
        (t.prototype.Fr = function (t) {
          return Math.ceil(this.Er(t));
        }),
        (t.prototype.Mr = function (t) {
          (this.tr = !0), (this.ur = t), this.Tr(), this.hi.Vr(), this.hi.Or();
        }),
        (t.prototype.Wr = function () {
          return this.ar;
        }),
        (t.prototype.wr = function (t) {
          this.zr(t), this.Tr(), this.hi.Vr(), this.hi.Or();
        }),
        (t.prototype.Pr = function () {
          return this.ur;
        }),
        (t.prototype.Fn = function () {
          if (this.ti()) return null;
          if (null !== this.rr) return this.rr;
          for (
            var t = this.ar,
              e = 5 * (this.hi.ct().layout.fontSize + 4),
              i = Math.round(e / t),
              n = Jh(this.mr()),
              r = Math.max(n.hh(), n.hh() - i),
              o = Math.max(n.rh(), n.rh() - i),
              s = this.Jh.Ih(t, e),
              a = this.Cr() + i,
              l = this.Nr() - i,
              h = 0,
              u = 0,
              c = s;
            u < c.length;
            u++
          ) {
            var p = c[u];
            if (r <= p.Ph && p.Ph <= o) {
              var f = void 0;
              h < this.er.length
                ? (((f = this.er[h]).An = this.G(p.Ph)),
                  (f.Tn = this.Rr(p.S, p.Rh)),
                  (f.Rh = p.Rh))
                : ((f = {
                    Ir: !1,
                    An: this.G(p.Ph),
                    Tn: this.Rr(p.S, p.Rh),
                    Rh: p.Rh,
                  }),
                  this.er.push(f)),
                this.ar > e / 2
                  ? (f.Ir = !1)
                  : (f.Ir =
                      (this.ki.fixLeftEdge && p.Ph <= a) ||
                      (this.ki.fixRightEdge && p.Ph >= l)),
                h++;
            }
          }
          return (this.er.length = h), (this.rr = this.er), this.er;
        }),
        (t.prototype.jr = function () {
          (this.tr = !0),
            this.wr(this.ki.barSpacing),
            this.Mr(this.ki.rightOffset);
        }),
        (t.prototype.qr = function (t) {
          (this.tr = !0), (this.Xh = t), this.Tr(), this._r();
        }),
        (t.prototype.Ur = function (t, e) {
          var i = this.Er(t),
            n = this.Wr(),
            r = n + e * (n / 10);
          this.wr(r),
            this.ki.rightBarStaysOnScroll ||
              this.Mr(this.Pr() + (i - this.Er(t)));
        }),
        (t.prototype.js = function (t) {
          this.Xn && this.Ks(),
            null === this.$n &&
              null === this.hr &&
              (this.ti() || ((this.$n = t), this.Hr()));
        }),
        (t.prototype.qs = function (t) {
          if (null !== this.hr) {
            var e = zu(this.$h - t, 0, this.$h),
              i = zu(this.$h - Jh(this.$n), 0, this.$h);
            0 !== e && 0 !== i && this.wr((this.hr.Wr * e) / i);
          }
        }),
        (t.prototype.Us = function () {
          null !== this.$n && ((this.$n = null), this.Yr());
        }),
        (t.prototype.Hs = function (t) {
          null === this.Xn &&
            null === this.hr &&
            (this.ti() || ((this.Xn = t), this.Hr()));
        }),
        (t.prototype.Ys = function (t) {
          if (null !== this.Xn) {
            var e = (this.Xn - t) / this.Wr();
            (this.ur = Jh(this.hr).Pr + e), (this.tr = !0), this.Tr();
          }
        }),
        (t.prototype.Ks = function () {
          null !== this.Xn && ((this.Xn = null), this.Yr());
        }),
        (t.prototype.Kr = function () {
          this.$r(this.ki.rightOffset);
        }),
        (t.prototype.$r = function (t, e) {
          var i = this;
          if ((void 0 === e && (e = 400), !isFinite(t)))
            throw new RangeError(
              "offset is required and must be finite number"
            );
          if (!isFinite(e) || e <= 0)
            throw new RangeError(
              "animationDuration (optional) must be finite positive number"
            );
          var n = this.ur,
            r = performance.now(),
            o = function () {
              var s = (performance.now() - r) / e,
                a = s >= 1,
                l = a ? t : n + (t - n) * s;
              i.Mr(l), a || setTimeout(o, 20);
            };
          o();
        }),
        (t.prototype.O = function (t, e) {
          (this.tr = !0), (this.Zh = t), this.Jh.Oh(t, e), this.Tr();
        }),
        (t.prototype.Xr = function () {
          return this.ir;
        }),
        (t.prototype.Zr = function () {
          return this.nr;
        }),
        (t.prototype.Jr = function () {
          return this.sr;
        }),
        (t.prototype.Br = function () {
          return this.Xh || 0;
        }),
        (t.prototype.Gr = function (t) {
          var e = t.Fh();
          this.zr(this.$h / e),
            (this.ur = t.rh() - this.Br()),
            this.Tr(),
            (this.tr = !0),
            this.hi.Vr(),
            this.hi.Or();
        }),
        (t.prototype.Qr = function () {
          var t = this.Cr(),
            e = this.Nr();
          null !== t &&
            null !== e &&
            this.Gr(new mc(t, e + this.ki.rightOffset));
        }),
        (t.prototype.te = function (t) {
          var e = new mc(t.from, t.to);
          this.Gr(e);
        }),
        (t.prototype.ei = function (t) {
          return void 0 !== this.Qn.timeFormatter
            ? this.Qn.timeFormatter(t.Sh || t.Dh)
            : this.ie.oh(new Date(1e3 * t.Dh));
        }),
        (t.prototype.Cr = function () {
          return 0 === this.Zh.length ? null : 0;
        }),
        (t.prototype.Nr = function () {
          return 0 === this.Zh.length ? null : this.Zh.length - 1;
        }),
        (t.prototype.ne = function (t) {
          return (this.$h - 1 - t) / this.ar;
        }),
        (t.prototype.Er = function (t) {
          var e = this.ne(t),
            i = this.Br() + this.ur - e;
          return Math.round(1e6 * i) / 1e6;
        }),
        (t.prototype.zr = function (t) {
          var e = this.ar;
          (this.ar = t),
            this.Ar(),
            e !== this.ar && ((this.tr = !0), this.se());
        }),
        (t.prototype.pr = function () {
          if (this.tr)
            if (((this.tr = !1), this.ti())) this.he(bc.Kh());
            else {
              var t = this.Br(),
                e = this.$h / this.ar,
                i = this.ur + t,
                n = new mc(i - e + 1, i);
              this.he(new bc(n));
            }
        }),
        (t.prototype.Ar = function () {
          var t = this.re();
          if ((this.ar < t && ((this.ar = t), (this.tr = !0)), 0 !== this.$h)) {
            var e = 0.5 * this.$h;
            this.ar > e && ((this.ar = e), (this.tr = !0));
          }
        }),
        (t.prototype.re = function () {
          return this.ki.fixLeftEdge &&
            this.ki.fixRightEdge &&
            0 !== this.Zh.length
            ? this.$h / this.Zh.length
            : this.ki.minBarSpacing;
        }),
        (t.prototype.Tr = function () {
          var t = this.ee();
          this.ur > t && ((this.ur = t), (this.tr = !0));
          var e = this.ue();
          null !== e && this.ur < e && ((this.ur = e), (this.tr = !0));
        }),
        (t.prototype.ue = function () {
          var t = this.Cr(),
            e = this.Xh;
          return null === t || null === e
            ? null
            : t -
                e -
                1 +
                (this.ki.fixLeftEdge
                  ? this.$h / this.ar
                  : Math.min(2, this.Zh.length));
        }),
        (t.prototype.ee = function () {
          return this.ki.fixRightEdge
            ? 0
            : this.$h / this.ar - Math.min(2, this.Zh.length);
        }),
        (t.prototype.Hr = function () {
          this.hr = { Wr: this.Wr(), Pr: this.Pr() };
        }),
        (t.prototype.Yr = function () {
          this.hr = null;
        }),
        (t.prototype.Rr = function (t, e) {
          var i = this,
            n = this.Gh.get(e);
          return (
            void 0 === n &&
              ((n = new vc(function (t) {
                return i.ae(t, e);
              })),
              this.Gh.set(e, n)),
            n.oh(t)
          );
        }),
        (t.prototype.ae = function (t, e) {
          var i,
            n = (function (t, e, i) {
              switch (t) {
                case 0:
                case 10:
                  return e ? (i ? 4 : 3) : 2;
                case 20:
                case 21:
                case 22:
                case 30:
                case 31:
                case 32:
                case 33:
                  return e ? 3 : 2;
                case 50:
                  return 2;
                case 60:
                  return 1;
                case 70:
                  return 0;
              }
            })(e, this.ki.timeVisible, this.ki.secondsVisible);
          return void 0 !== this.ki.tickMarkFormatter
            ? this.ki.tickMarkFormatter(
                null !== (i = t.Sh) && void 0 !== i ? i : t.Dh,
                n,
                this.Qn.locale
              )
            : (function (t, e, i) {
                var n = {};
                switch (e) {
                  case 0:
                    n.year = "numeric";
                    break;
                  case 1:
                    n.month = "short";
                    break;
                  case 2:
                    n.day = "numeric";
                    break;
                  case 3:
                    (n.hour12 = !1),
                      (n.hour = "2-digit"),
                      (n.minute = "2-digit");
                    break;
                  case 4:
                    (n.hour12 = !1),
                      (n.hour = "2-digit"),
                      (n.minute = "2-digit"),
                      (n.second = "2-digit");
                }
                var r =
                  void 0 === t.Sh
                    ? new Date(1e3 * t.Dh)
                    : new Date(Date.UTC(t.Sh.year, t.Sh.month - 1, t.Sh.day));
                return new Date(
                  r.getUTCFullYear(),
                  r.getUTCMonth(),
                  r.getUTCDate(),
                  r.getUTCHours(),
                  r.getUTCMinutes(),
                  r.getUTCSeconds(),
                  r.getUTCMilliseconds()
                ).toLocaleString(i, n);
              })(t, n, this.Qn.locale);
        }),
        (t.prototype.he = function (t) {
          var e = this.Qh;
          (this.Qh = t),
            yc(e.Hh(), this.Qh.Hh()) || this.ir.hn(),
            yc(e.Yh(), this.Qh.Yh()) || this.nr.hn(),
            this.se();
        }),
        (t.prototype.se = function () {
          this.rr = null;
        }),
        (t.prototype.vr = function () {
          this.se(), this.Gh.clear();
        }),
        (t.prototype.lr = function () {
          var t = this.Qn.dateFormat;
          this.ki.timeVisible
            ? (this.ie = new pc({
                fh: t,
                _h: this.ki.secondsVisible ? "%h:%m:%s" : "%h:%m",
                dh: "   ",
                wh: this.Qn.locale,
              }))
            : (this.ie = new hc(t, this.Qn.locale));
        }),
        (t.prototype._r = function () {
          if (this.ki.fixLeftEdge) {
            var t = this.Cr();
            if (null !== t) {
              var e = this.mr();
              if (null !== e) {
                var i = e.hh() - t;
                if (i < 0) {
                  var n = this.ur - i - 1;
                  this.Mr(n);
                }
                this.Ar();
              }
            }
          }
        }),
        (t.prototype.dr = function () {
          this.Tr(), this.Ar();
        }),
        t
      );
    })();
  function _c(t) {
    return !Kh(t) && !tu(t);
  }
  function Mc(t) {
    return Kh(t);
  }
  !(function (t) {
    (t.Solid = "solid"), (t.VerticalGradient = "gradient");
  })($c || ($c = {}));
  var kc = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";
  function Sc(t, e, i) {
    return (
      void 0 !== i ? (i += " ") : (i = ""),
      void 0 === e && (e = kc),
      "" + i + t + "px " + e
    );
  }
  var Cc = (function () {
    function t(t) {
      (this.oe = {
        At: 1,
        Dt: 4,
        Wt: NaN,
        Nt: "",
        le: "",
        et: "",
        Bt: 0,
        Lt: 0,
        Ft: 0,
        Tt: 0,
        Ot: 0,
      }),
        (this.F = t);
    }
    return (
      (t.prototype.ct = function () {
        var t = this.oe,
          e = this.fe(),
          i = this.ce();
        return (
          (t.Wt === e && t.le === i) ||
            ((t.Wt = e),
            (t.le = i),
            (t.Nt = Sc(e, i)),
            (t.Tt = Math.floor(e / 3.5)),
            (t.Bt = t.Tt),
            (t.Lt = Math.max(Math.ceil(e / 2 - t.Dt / 2), 0)),
            (t.Ft = Math.ceil(e / 2 + t.Dt / 2)),
            (t.Ot = Math.round(e / 10))),
          (t.et = this.ve()),
          this.oe
        );
      }),
      (t.prototype.ve = function () {
        return this.F.ct().layout.textColor;
      }),
      (t.prototype.fe = function () {
        return this.F.ct().layout.fontSize;
      }),
      (t.prototype.ce = function () {
        return this.F.ct().layout.fontFamily;
      }),
      t
    );
  })();
  function Lc(t) {
    return "left" === t || "right" === t;
  }
  var Dc = (function () {
      function t(t) {
        (this._e = new Map()), (this.de = !1), (this.we = []), (this.Me = t);
      }
      return (
        (t.prototype.be = function (t, e) {
          var i = (function (t, e) {
            return void 0 === t
              ? e
              : { me: Math.max(t.me, e.me), _s: t._s || e._s };
          })(this._e.get(t), e);
          this._e.set(t, i);
        }),
        (t.prototype.pe = function () {
          return this.Me;
        }),
        (t.prototype.ge = function (t) {
          var e = this._e.get(t);
          return void 0 === e
            ? { me: this.Me }
            : { me: Math.max(this.Me, e.me), _s: e._s };
        }),
        (t.prototype.ye = function () {
          this.we = [{ ke: 0 }];
        }),
        (t.prototype.Ce = function (t) {
          this.we = [{ ke: 1, X: t }];
        }),
        (t.prototype.Ne = function () {
          this.we = [{ ke: 4 }];
        }),
        (t.prototype.wr = function (t) {
          this.we.push({ ke: 2, X: t });
        }),
        (t.prototype.Mr = function (t) {
          this.we.push({ ke: 3, X: t });
        }),
        (t.prototype.xe = function () {
          return this.we;
        }),
        (t.prototype._n = function (t) {
          var e = this;
          (this.de = this.de || t.de), (this.we = this.we.concat(t.we));
          for (var i = 0, n = t.we; i < n.length; i++) {
            var r = n[i];
            this.Se(r);
          }
          (this.Me = Math.max(this.Me, t.Me)),
            t._e.forEach(function (t, i) {
              e.be(i, t);
            });
        }),
        (t.prototype.Se = function (t) {
          switch (t.ke) {
            case 0:
              this.ye();
              break;
            case 1:
              this.Ce(t.X);
              break;
            case 2:
              this.wr(t.X);
              break;
            case 3:
              this.Mr(t.X);
              break;
            case 4:
              this.Ne();
          }
        }),
        t
      );
    })(),
    Ac = (function () {
      function t(t) {
        this.De = t;
      }
      return (
        (t.prototype.format = function (t) {
          var e = "";
          return (
            t < 0 && ((e = "-"), (t = -t)),
            t < 995
              ? e + this.Ae(t)
              : t < 999995
              ? e + this.Ae(t / 1e3) + "K"
              : t < 999999995
              ? ((t = 1e3 * Math.round(t / 1e3)), e + this.Ae(t / 1e6) + "M")
              : ((t = 1e6 * Math.round(t / 1e6)), e + this.Ae(t / 1e9) + "B")
          );
        }),
        (t.prototype.Ae = function (t) {
          var e = Math.pow(10, this.De);
          return (
            (t = Math.round(t * e) / e) >= 1e-15 && t < 1
              ? t.toFixed(this.De).replace(/\.?0+$/, "")
              : String(t)
          ).replace(/(\.[1-9]*)0+$/, function (t, e) {
            return e;
          });
        }),
        t
      );
    })();
  function Tc(t, e, i, n) {
    if (0 !== e.length) {
      var r = e[n.from].p,
        o = e[n.from].g;
      t.moveTo(r, o);
      for (var s = n.from + 1; s < n.to; ++s) {
        var a = e[s];
        if (1 === i) {
          var l = e[s - 1].g,
            h = a.p;
          t.lineTo(h, l);
        }
        t.lineTo(a.p, a.g);
      }
    }
  }
  var jc = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.v = null), e;
      }
      return (
        Vh(e, t),
        (e.prototype._ = function (t) {
          this.v = t;
        }),
        (e.prototype.u = function (t) {
          if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
            if (
              ((t.lineCap = "butt"),
              (t.lineJoin = "round"),
              (t.lineWidth = this.v.rt),
              Hh(t, this.v.ut),
              (t.lineWidth = 1),
              t.beginPath(),
              1 === this.v.m.length)
            ) {
              var e = this.v.m[0],
                i = this.v.Te / 2;
              t.moveTo(e.p - i, this.v.Be),
                t.lineTo(e.p - i, e.g),
                t.lineTo(e.p + i, e.g),
                t.lineTo(e.p + i, this.v.Be);
            } else
              t.moveTo(this.v.m[this.v.M.from].p, this.v.Be),
                t.lineTo(this.v.m[this.v.M.from].p, this.v.m[this.v.M.from].g),
                Tc(t, this.v.m, this.v.Le, this.v.M),
                this.v.M.to > this.v.M.from &&
                  (t.lineTo(this.v.m[this.v.M.to - 1].p, this.v.Be),
                  t.lineTo(this.v.m[this.v.M.from].p, this.v.Be));
            t.closePath(), (t.fillStyle = this.Fe(t)), t.fill();
          }
        }),
        e
      );
    })(su),
    Oc = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.Fe = function (t) {
          var e = this.v,
            i = t.createLinearGradient(0, 0, 0, e.Ee);
          return i.addColorStop(0, e.Ve), i.addColorStop(1, e.Oe), i;
        }),
        e
      );
    })(jc),
    Ec = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.v = null), e;
      }
      return (
        Vh(e, t),
        (e.prototype._ = function (t) {
          this.v = t;
        }),
        (e.prototype.u = function (t) {
          if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
            if (
              ((t.lineCap = "butt"),
              (t.lineWidth = this.v.rt),
              Hh(t, this.v.ut),
              (t.strokeStyle = this.We(t)),
              (t.lineJoin = "round"),
              t.beginPath(),
              1 === this.v.m.length)
            ) {
              var e = this.v.m[0];
              t.moveTo(e.p - this.v.Te / 2, e.g),
                t.lineTo(e.p + this.v.Te / 2, e.g);
            } else Tc(t, this.v.m, this.v.Le, this.v.M);
            t.stroke();
          }
        }),
        e
      );
    })(su),
    Pc = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.We = function () {
          return this.v.N;
        }),
        e
      );
    })(Ec);
  function Nc(t, e) {
    return t.S < e;
  }
  function Rc(t, e) {
    return t < e.S;
  }
  function Bc(t, e, i) {
    var n = e.hh(),
      r = e.rh(),
      o = fc(t, n, Nc),
      s = dc(t, r, Rc);
    if (!i) return { from: o, to: s };
    var a = o,
      l = s;
    return (
      o > 0 && o < t.length && t[o].S >= n && (a = o - 1),
      s > 0 && s < t.length && t[s - 1].S <= r && (l = s + 1),
      { from: a, to: l }
    );
  }
  var Wc = (function () {
      function t(t, e, i) {
        (this.ze = !0),
          (this.Pe = !0),
          (this.Re = !0),
          (this.Ie = []),
          (this.je = null),
          (this.qe = t),
          (this.Ue = e),
          (this.He = i);
      }
      return (
        (t.prototype.O = function (t) {
          (this.ze = !0),
            "data" === t && (this.Pe = !0),
            "options" === t && (this.Re = !0);
        }),
        (t.prototype.Ye = function () {
          this.Pe && (this.Ke(), (this.Pe = !1)),
            this.ze && (this.$e(), (this.ze = !1)),
            this.Re && (this.Xe(), (this.Re = !1));
        }),
        (t.prototype.Ze = function () {
          this.je = null;
        }),
        (t.prototype.$e = function () {
          var t = this.qe.$(),
            e = this.Ue.j();
          if ((this.Ze(), !e.ti() && !t.ti())) {
            var i = e.mr();
            if (null !== i && 0 !== this.qe.Hi().Je()) {
              var n = this.qe.H();
              null !== n &&
                ((this.je = Bc(this.Ie, i, this.He)), this.Ge(t, e, n.X));
            }
          }
        }),
        t
      );
    })(),
    zc = (function (t) {
      function e(e, i) {
        return t.call(this, e, i, !0) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.Ge = function (t, e, i) {
          e.Lr(this.Ie, ru(this.je)), t.Ss(this.Ie, i, ru(this.je));
        }),
        (e.prototype.Qe = function (t, e) {
          return { S: t, D: e, p: NaN, g: NaN };
        }),
        (e.prototype.Xe = function () {}),
        (e.prototype.Ke = function () {
          var t = this,
            e = this.qe.tu();
          this.Ie = this.qe
            .Hi()
            .iu()
            .map(function (i) {
              var n = i.X[3];
              return t.nu(i.Ph, n, e);
            });
        }),
        e
      );
    })(Wc),
    Hc = (function (t) {
      function e(e, i) {
        var n = t.call(this, e, i) || this;
        return (
          (n.ot = new ou()),
          (n.su = new Oc()),
          (n.hu = new Pc()),
          n.ot.i([n.su, n.hu]),
          n
        );
      }
      return (
        Vh(e, t),
        (e.prototype.P = function (t, e) {
          if (!this.qe.U()) return null;
          var i = this.qe.ct();
          return (
            this.Ye(),
            this.su._({
              Le: i.lineType,
              m: this.Ie,
              ut: i.lineStyle,
              rt: i.lineWidth,
              Ve: i.topColor,
              Oe: i.bottomColor,
              Be: t,
              Ee: t,
              M: this.je,
              Te: this.Ue.j().Wr(),
            }),
            this.hu._({
              Le: i.lineType,
              m: this.Ie,
              N: i.lineColor,
              ut: i.lineStyle,
              rt: i.lineWidth,
              M: this.je,
              Te: this.Ue.j().Wr(),
            }),
            this.ot
          );
        }),
        (e.prototype.nu = function (t, e) {
          return this.Qe(t, e);
        }),
        e
      );
    })(zc),
    Fc = (function () {
      function t() {
        (this.tt = null), (this.ru = 0), (this.eu = 0);
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, e, i, n) {
          if (
            null !== this.tt &&
            0 !== this.tt.Hi.length &&
            null !== this.tt.M
          ) {
            (this.ru = this.uu(e)),
              this.ru >= 2 &&
                Math.max(1, Math.floor(e)) % 2 != this.ru % 2 &&
                this.ru--,
              (this.eu = this.tt.au
                ? Math.min(this.ru, Math.floor(e))
                : this.ru);
            for (
              var r = null,
                o = this.eu <= this.ru && this.tt.Wr >= Math.floor(1.5 * e),
                s = this.tt.M.from;
              s < this.tt.M.to;
              ++s
            ) {
              var a = this.tt.Hi[s];
              r !== a.et && ((t.fillStyle = a.et), (r = a.et));
              var l = Math.floor(0.5 * this.eu),
                h = Math.round(a.p * e),
                u = h - l,
                c = this.eu,
                p = u + c - 1,
                f = Math.min(a.Bs, a.Ls),
                d = Math.max(a.Bs, a.Ls),
                v = Math.round(f * e) - l,
                m = Math.round(d * e) + l,
                y = Math.max(m - v, this.eu);
              t.fillRect(u, v, c, y);
              var g = Math.ceil(1.5 * this.ru);
              if (o) {
                if (this.tt.ou) {
                  var w = h - g,
                    b = Math.max(v, Math.round(a.Ts * e) - l),
                    $ = b + c - 1;
                  $ > v + y - 1 && (b = ($ = v + y - 1) - c + 1),
                    t.fillRect(w, b, u - w, $ - b + 1);
                }
                var x = h + g,
                  _ = Math.max(v, Math.round(a.Fs * e) - l),
                  M = _ + c - 1;
                M > v + y - 1 && (_ = (M = v + y - 1) - c + 1),
                  t.fillRect(p + 1, _, x - p, M - _ + 1);
              }
            }
          }
        }),
        (t.prototype.uu = function (t) {
          var e = Math.floor(t);
          return Math.max(
            e,
            Math.floor(
              (function (t, e) {
                return Math.floor(0.3 * t * e);
              })(Jh(this.tt).Wr, t)
            )
          );
        }),
        t
      );
    })(),
    Uc = (function (t) {
      function e(e, i) {
        return t.call(this, e, i, !1) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.Ge = function (t, e, i) {
          e.Lr(this.Ie, ru(this.je)), t.As(this.Ie, i, ru(this.je));
        }),
        (e.prototype.lu = function (t, e, i) {
          return {
            S: t,
            open: e.X[0],
            high: e.X[1],
            low: e.X[2],
            close: e.X[3],
            p: NaN,
            Ts: NaN,
            Bs: NaN,
            Ls: NaN,
            Fs: NaN,
          };
        }),
        (e.prototype.Ke = function () {
          var t = this,
            e = this.qe.tu();
          this.Ie = this.qe
            .Hi()
            .iu()
            .map(function (i) {
              return t.nu(i.Ph, i, e);
            });
        }),
        e
      );
    })(Wc),
    Vc = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.ot = new Fc()), e;
      }
      return (
        Vh(e, t),
        (e.prototype.P = function (t, e) {
          if (!this.qe.U()) return null;
          var i = this.qe.ct();
          this.Ye();
          var n = {
            Hi: this.Ie,
            Wr: this.Ue.j().Wr(),
            ou: i.openVisible,
            au: i.thinBars,
            M: this.je,
          };
          return this.ot._(n), this.ot;
        }),
        (e.prototype.Xe = function () {
          var t = this;
          this.Ie.forEach(function (e) {
            e.et = t.qe.tu().cu(e.S).fu;
          });
        }),
        (e.prototype.nu = function (t, e, i) {
          return Ih(Ih({}, this.lu(t, e, i)), { et: i.cu(t).fu });
        }),
        e
      );
    })(Uc),
    Ic = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.Fe = function (t) {
          var e = this.v,
            i = t.createLinearGradient(0, 0, 0, e.Ee),
            n = zu(e.Be / e.Ee, 0, 1);
          return (
            i.addColorStop(0, e.vu),
            i.addColorStop(n, e._u),
            i.addColorStop(n, e.du),
            i.addColorStop(1, e.wu),
            i
          );
        }),
        e
      );
    })(jc),
    qc = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.We = function (t) {
          var e = this.v,
            i = t.createLinearGradient(0, 0, 0, e.Ee),
            n = zu(e.Be / e.Ee, 0, 1);
          return (
            i.addColorStop(0, e.Ve),
            i.addColorStop(n, e.Ve),
            i.addColorStop(n, e.Oe),
            i.addColorStop(1, e.Oe),
            i
          );
        }),
        e
      );
    })(Ec),
    Xc = (function (t) {
      function e(e, i) {
        var n = t.call(this, e, i) || this;
        return (
          (n.Mu = new Ic()),
          (n.bu = new qc()),
          (n.A = new ou()),
          n.A.i([n.Mu, n.bu]),
          n
        );
      }
      return (
        Vh(e, t),
        (e.prototype.P = function (t, e) {
          if (!this.qe.U()) return null;
          var i = this.qe.H();
          if (null === i) return null;
          var n = this.qe.ct();
          this.Ye();
          var r = this.qe.$().K(n.baseValue.price, i.X),
            o = this.Ue.j().Wr();
          return (
            this.Mu._({
              m: this.Ie,
              vu: n.topFillColor1,
              _u: n.topFillColor2,
              du: n.bottomFillColor1,
              wu: n.bottomFillColor2,
              rt: n.lineWidth,
              ut: n.lineStyle,
              Le: 0,
              Be: r,
              Ee: t,
              M: this.je,
              Te: o,
            }),
            this.bu._({
              m: this.Ie,
              Ve: n.topLineColor,
              Oe: n.bottomLineColor,
              rt: n.lineWidth,
              ut: n.lineStyle,
              Le: 0,
              Be: r,
              Ee: t,
              M: this.je,
              Te: o,
            }),
            this.A
          );
        }),
        (e.prototype.nu = function (t, e) {
          return this.Qe(t, e);
        }),
        e
      );
    })(zc),
    Gc = (function () {
      function t() {
        (this.tt = null), (this.ru = 0);
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, e, i, n) {
          if (
            null !== this.tt &&
            0 !== this.tt.Hi.length &&
            null !== this.tt.M
          ) {
            (this.ru = (function (t, e) {
              if (t >= 2.5 && t <= 4) return Math.floor(3 * e);
              var i =
                  1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
                n = Math.floor(t * i * e),
                r = Math.floor(t * e),
                o = Math.min(n, r);
              return Math.max(Math.floor(e), o);
            })(this.tt.Wr, e)),
              this.ru >= 2 && Math.floor(e) % 2 != this.ru % 2 && this.ru--;
            var r = this.tt.Hi;
            this.tt.mu && this.pu(t, r, this.tt.M, e),
              this.tt.gu && this.yu(t, r, this.tt.M, this.tt.Wr, e);
            var o = this.ku(e);
            (!this.tt.gu || this.ru > 2 * o) && this.Cu(t, r, this.tt.M, e);
          }
        }),
        (t.prototype.pu = function (t, e, i, n) {
          if (null !== this.tt) {
            var r = "",
              o = Math.min(Math.floor(n), Math.floor(this.tt.Wr * n));
            o = Math.max(Math.floor(n), Math.min(o, this.ru));
            for (
              var s = Math.floor(0.5 * o), a = null, l = i.from;
              l < i.to;
              l++
            ) {
              var h = e[l];
              h.Nu !== r && ((t.fillStyle = h.Nu), (r = h.Nu));
              var u = Math.round(Math.min(h.Ts, h.Fs) * n),
                c = Math.round(Math.max(h.Ts, h.Fs) * n),
                p = Math.round(h.Bs * n),
                f = Math.round(h.Ls * n),
                d = Math.round(n * h.p) - s,
                v = d + o - 1;
              null !== a && ((d = Math.max(a + 1, d)), (d = Math.min(d, v)));
              var m = v - d + 1;
              t.fillRect(d, p, m, u - p),
                t.fillRect(d, c + 1, m, f - c),
                (a = v);
            }
          }
        }),
        (t.prototype.ku = function (t) {
          var e = Math.floor(1 * t);
          this.ru <= 2 * e && (e = Math.floor(0.5 * (this.ru - 1)));
          var i = Math.max(Math.floor(t), e);
          return this.ru <= 2 * i
            ? Math.max(Math.floor(t), Math.floor(1 * t))
            : i;
        }),
        (t.prototype.yu = function (t, e, i, n, r) {
          if (null !== this.tt)
            for (
              var o = "", s = this.ku(r), a = null, l = i.from;
              l < i.to;
              l++
            ) {
              var h = e[l];
              h.Z !== o && ((t.fillStyle = h.Z), (o = h.Z));
              var u = Math.round(h.p * r) - Math.floor(0.5 * this.ru),
                c = u + this.ru - 1,
                p = Math.round(Math.min(h.Ts, h.Fs) * r),
                f = Math.round(Math.max(h.Ts, h.Fs) * r);
              if (
                (null !== a && ((u = Math.max(a + 1, u)), (u = Math.min(u, c))),
                this.tt.Wr * r > 2 * s)
              )
                xu(t, u, p, c - u + 1, f - p + 1, s);
              else {
                var d = c - u + 1;
                t.fillRect(u, p, d, f - p + 1);
              }
              a = c;
            }
        }),
        (t.prototype.Cu = function (t, e, i, n) {
          if (null !== this.tt)
            for (var r = "", o = this.ku(n), s = i.from; s < i.to; s++) {
              var a = e[s],
                l = Math.round(Math.min(a.Ts, a.Fs) * n),
                h = Math.round(Math.max(a.Ts, a.Fs) * n),
                u = Math.round(a.p * n) - Math.floor(0.5 * this.ru),
                c = u + this.ru - 1;
              if (a.et !== r) {
                var p = a.et;
                (t.fillStyle = p), (r = p);
              }
              this.tt.gu && ((u += o), (l += o), (c -= o), (h -= o)),
                l > h || t.fillRect(u, l, c - u + 1, h - l + 1);
            }
        }),
        t
      );
    })(),
    Jc = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.ot = new Gc()), e;
      }
      return (
        Vh(e, t),
        (e.prototype.P = function (t, e) {
          if (!this.qe.U()) return null;
          var i = this.qe.ct();
          this.Ye();
          var n = {
            Hi: this.Ie,
            Wr: this.Ue.j().Wr(),
            mu: i.wickVisible,
            gu: i.borderVisible,
            M: this.je,
          };
          return this.ot._(n), this.ot;
        }),
        (e.prototype.Xe = function () {
          var t = this;
          this.Ie.forEach(function (e) {
            var i = t.qe.tu().cu(e.S);
            (e.et = i.fu), (e.Nu = i.xu), (e.Z = i.Su);
          });
        }),
        (e.prototype.nu = function (t, e, i) {
          var n = i.cu(t);
          return Ih(Ih({}, this.lu(t, e, i)), { et: n.fu, Nu: n.xu, Z: n.Su });
        }),
        e
      );
    })(Uc),
    Yc = (function () {
      function t() {
        (this.tt = null), (this.Du = []);
      }
      return (
        (t.prototype._ = function (t) {
          (this.tt = t), (this.Du = []);
        }),
        (t.prototype.h = function (t, e, i, n) {
          if (
            null !== this.tt &&
            0 !== this.tt.m.length &&
            null !== this.tt.M
          ) {
            this.Du.length || this.Au(e);
            for (
              var r = Math.max(1, Math.floor(e)),
                o = Math.round(this.tt.Tu * e) - Math.floor(r / 2),
                s = o + r,
                a = this.tt.M.from;
              a < this.tt.M.to;
              a++
            ) {
              var l = this.tt.m[a],
                h = this.Du[a - this.tt.M.from],
                u = Math.round(l.g * e);
              t.fillStyle = l.et;
              var c = void 0,
                p = void 0;
              u <= o
                ? ((c = u), (p = s))
                : ((c = o), (p = u - Math.floor(r / 2) + r)),
                t.fillRect(h.hh, c, h.rh - h.hh + 1, p - c);
            }
          }
        }),
        (t.prototype.Au = function (t) {
          if (
            null !== this.tt &&
            0 !== this.tt.m.length &&
            null !== this.tt.M
          ) {
            var e =
                Math.ceil(this.tt.Wr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
              i = Math.round(this.tt.Wr * t) - e;
            this.Du = new Array(this.tt.M.to - this.tt.M.from);
            for (var n = this.tt.M.from; n < this.tt.M.to; n++) {
              var r,
                o = this.tt.m[n],
                s = Math.round(o.p * t),
                a = void 0,
                l = void 0;
              i % 2
                ? ((a = s - (r = (i - 1) / 2)), (l = s + r))
                : ((a = s - (r = i / 2)), (l = s + r - 1)),
                (this.Du[n - this.tt.M.from] = {
                  hh: a,
                  rh: l,
                  Bu: s,
                  Lu: o.p * t,
                  S: o.S,
                });
            }
            for (n = this.tt.M.from + 1; n < this.tt.M.to; n++) {
              var h = this.Du[n - this.tt.M.from],
                u = this.Du[n - this.tt.M.from - 1];
              h.S === u.S + 1 &&
                h.hh - u.rh !== e + 1 &&
                (u.Bu > u.Lu ? (u.rh = h.hh - e - 1) : (h.hh = u.rh + e + 1));
            }
            var c = Math.ceil(this.tt.Wr * t);
            for (n = this.tt.M.from; n < this.tt.M.to; n++) {
              (h = this.Du[n - this.tt.M.from]).rh < h.hh && (h.rh = h.hh);
              var p = h.rh - h.hh + 1;
              c = Math.min(p, c);
            }
            if (e > 0 && c < 4)
              for (n = this.tt.M.from; n < this.tt.M.to; n++)
                (p = (h = this.Du[n - this.tt.M.from]).rh - h.hh + 1) > c &&
                  (h.Bu > h.Lu ? (h.rh -= 1) : (h.hh += 1));
          } else this.Du = [];
        }),
        t
      );
    })();
  function Zc(t) {
    return { m: [], Wr: t, Tu: NaN, M: null };
  }
  function Kc(t, e, i) {
    return { S: t, D: e, p: NaN, g: NaN, et: i };
  }
  var Qc = (function (t) {
      function e(e, i) {
        var n = t.call(this, e, i, !1) || this;
        return (n.A = new ou()), (n.Fu = Zc(0)), (n.ot = new Yc()), n;
      }
      return (
        Vh(e, t),
        (e.prototype.P = function (t, e) {
          return this.qe.U() ? (this.Ye(), this.A) : null;
        }),
        (e.prototype.Ke = function () {
          var t = this.Ue.j().Wr();
          this.Fu = Zc(t);
          for (
            var e = 0,
              i = 0,
              n = this.qe.ct().color,
              r = 0,
              o = this.qe.Hi().iu();
            r < o.length;
            r++
          ) {
            var s = o[r],
              a = s.X[3],
              l = void 0 !== s.et ? s.et : n,
              h = Kc(s.Ph, a, l);
            ++e < this.Fu.m.length ? (this.Fu.m[e] = h) : this.Fu.m.push(h),
              (this.Ie[i++] = { S: s.Ph, p: 0 });
          }
          this.ot._(this.Fu), this.A.i([this.ot]);
        }),
        (e.prototype.Xe = function () {}),
        (e.prototype.Ze = function () {
          t.prototype.Ze.call(this), (this.Fu.M = null);
        }),
        (e.prototype.Ge = function (t, e, i) {
          if (null !== this.je) {
            var n = e.Wr(),
              r = Jh(e.mr()),
              o = t.K(this.qe.ct().base, i);
            e.Lr(this.Fu.m),
              t.Ss(this.Fu.m, i),
              (this.Fu.Tu = o),
              (this.Fu.M = Bc(this.Fu.m, r, !1)),
              (this.Fu.Wr = n),
              this.ot._(this.Fu);
          }
        }),
        e
      );
    })(Wc),
    tp = (function (t) {
      function e(e, i) {
        var n = t.call(this, e, i) || this;
        return (n.hu = new Pc()), n;
      }
      return (
        Vh(e, t),
        (e.prototype.P = function (t, e) {
          if (!this.qe.U()) return null;
          var i = this.qe.ct();
          this.Ye();
          var n = {
            m: this.Ie,
            N: i.color,
            ut: i.lineStyle,
            Le: i.lineType,
            rt: i.lineWidth,
            M: this.je,
            Te: this.Ue.j().Wr(),
          };
          return this.hu._(n), this.hu;
        }),
        (e.prototype.nu = function (t, e) {
          return this.Qe(t, e);
        }),
        e
      );
    })(zc),
    ep = /[2-9]/g,
    ip = (function () {
      function t(t) {
        void 0 === t && (t = 50),
          (this.kh = new Map()),
          (this.Eu = 0),
          (this.Vu = Array.from(new Array(t)));
      }
      return (
        (t.prototype.Ou = function () {
          this.kh.clear(), this.Vu.fill(void 0);
        }),
        (t.prototype.Vt = function (t, e, i) {
          var n = i || ep,
            r = String(e).replace(n, "0"),
            o = this.kh.get(r);
          if (void 0 === o) {
            if (0 === (o = t.measureText(r).width) && 0 !== e.length) return 0;
            var s = this.Vu[this.Eu];
            void 0 !== s && this.kh.delete(s),
              (this.Vu[this.Eu] = r),
              (this.Eu = (this.Eu + 1) % this.Vu.length),
              this.kh.set(r, o);
          }
          return o;
        }),
        t
      );
    })(),
    np = (function () {
      function t(t) {
        (this.Wu = null),
          (this.oe = null),
          (this.zu = "right"),
          (this.$h = 0),
          (this.Pu = t);
      }
      return (
        (t.prototype.Ru = function (t, e, i, n) {
          (this.Wu = t), (this.oe = e), (this.$h = i), (this.zu = n);
        }),
        (t.prototype.h = function (t, e) {
          null !== this.oe &&
            null !== this.Wu &&
            this.Wu.h(t, this.oe, this.Pu, this.$h, this.zu, e);
        }),
        t
      );
    })(),
    rp = (function () {
      function t(t, e, i) {
        (this.Iu = t),
          (this.Pu = new ip(50)),
          (this.ju = e),
          (this.F = i),
          (this.fe = -1),
          (this.ot = new np(this.Pu));
      }
      return (
        (t.prototype.P = function (t, e) {
          var i = this.F.qu(this.ju);
          if (null === i) return null;
          var n = i.Uu(this.ju) ? i.xi() : this.ju.$();
          if (null === n) return null;
          var r = i.Hu(n);
          if ("overlay" === r) return null;
          var o = this.F.Yu();
          return (
            o.Wt !== this.fe && ((this.fe = o.Wt), this.Pu.Ou()),
            this.ot.Ru(this.Iu.Zt(), o, e, r),
            this.ot
          );
        }),
        t
      );
    })(),
    op = (function () {
      function t() {
        this.tt = null;
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, e, i, n) {
          if (null !== this.tt && !1 !== this.tt.U) {
            var r = Math.round(this.tt.g * e);
            if (!(r < 0 || r > Math.ceil(this.tt.Mt * e))) {
              var o = Math.ceil(this.tt.wt * e);
              (t.lineCap = "butt"),
                (t.strokeStyle = this.tt.et),
                (t.lineWidth = Math.floor(this.tt.rt * e)),
                Hh(t, this.tt.ut),
                Fh(t, r, 0, o);
            }
          }
        }),
        t
      );
    })(),
    sp = (function () {
      function t(t) {
        (this.Ku = {
          wt: 0,
          Mt: 0,
          g: 0,
          et: "rgba(0, 0, 0, 0)",
          rt: 1,
          ut: 0,
          U: !1,
        }),
          (this.$u = new op()),
          (this.L = !0),
          (this.qe = t),
          (this.Ue = t.vt()),
          this.$u._(this.Ku);
      }
      return (
        (t.prototype.O = function () {
          this.L = !0;
        }),
        (t.prototype.P = function (t, e) {
          return this.qe.U()
            ? (this.L && (this.Xu(t, e), (this.L = !1)), this.$u)
            : null;
        }),
        t
      );
    })(),
    ap = (function (t) {
      function e(e) {
        return t.call(this, e) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.Xu = function (t, e) {
          this.Ku.U = !1;
          var i = this.qe.$(),
            n = i.os().os;
          if (2 === n || 3 === n) {
            var r = this.qe.ct();
            if (r.baseLineVisible && this.qe.U()) {
              var o = this.qe.H();
              null !== o &&
                ((this.Ku.U = !0),
                (this.Ku.g = i.K(o.X, o.X)),
                (this.Ku.wt = e),
                (this.Ku.Mt = t),
                (this.Ku.et = r.baseLineColor),
                (this.Ku.rt = r.baseLineWidth),
                (this.Ku.ut = r.baseLineStyle));
            }
          }
        }),
        e
      );
    })(sp),
    lp = (function () {
      function t() {
        this.tt = null;
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.Zu = function () {
          return this.tt;
        }),
        (t.prototype.h = function (t, e, i, n) {
          var r = this.tt;
          if (null !== r) {
            t.save();
            var o = Math.max(1, Math.floor(e)),
              s = (o % 2) / 2,
              a = Math.round(r.Lu.x * e) + s,
              l = r.Lu.y * e;
            (t.fillStyle = r.Ju), t.beginPath();
            var h = Math.max(2, 1.5 * r.Gu) * e;
            t.arc(a, l, h, 0, 2 * Math.PI, !1),
              t.fill(),
              (t.fillStyle = r.Qu),
              t.beginPath(),
              t.arc(a, l, r.C * e, 0, 2 * Math.PI, !1),
              t.fill(),
              (t.lineWidth = o),
              (t.strokeStyle = r.ta),
              t.beginPath(),
              t.arc(a, l, r.C * e + o / 2, 0, 2 * Math.PI, !1),
              t.stroke(),
              t.restore();
          }
        }),
        t
      );
    })(),
    hp = [
      { ia: 0, na: 0.25, sa: 4, ha: 10, ra: 0.25, ea: 0, ua: 0.4, aa: 0.8 },
      { ia: 0.25, na: 0.525, sa: 10, ha: 14, ra: 0, ea: 0, ua: 0.8, aa: 0 },
      { ia: 0.525, na: 1, sa: 14, ha: 14, ra: 0, ea: 0, ua: 0, aa: 0 },
    ];
  function up(t, e, i, n) {
    return (function (t, e) {
      if ("transparent" === t) return t;
      var i = bu(t),
        n = i[3];
      return "rgba(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + e * n + ")";
    })(t, i + (n - i) * e);
  }
  function cp(t, e) {
    for (var i, n = (t % 2600) / 2600, r = 0, o = hp; r < o.length; r++) {
      var s = o[r];
      if (n >= s.ia && n <= s.na) {
        i = s;
        break;
      }
    }
    Xh(void 0 !== i, "Last price animation internal logic error");
    var a,
      l,
      h,
      u = (n - i.ia) / (i.na - i.ia);
    return {
      Qu: up(e, u, i.ra, i.ea),
      ta: up(e, u, i.ua, i.aa),
      C: ((a = u), (l = i.sa), (h = i.ha), l + (h - l) * a),
    };
  }
  var pp = (function () {
    function t(t) {
      (this.ot = new lp()),
        (this.L = !0),
        (this.oa = !0),
        (this.la = performance.now()),
        (this.fa = this.la - 1),
        (this.ca = t);
    }
    return (
      (t.prototype.O = function (t) {
        if (
          ((this.L = !0), "data" === t && 2 === this.ca.ct().lastPriceAnimation)
        ) {
          var e = performance.now(),
            i = this.fa - e;
          if (i > 0) return void (i < 650 && (this.fa += 2600));
          (this.la = e), (this.fa = e + 2600);
        }
      }),
      (t.prototype.va = function () {
        this.oa = !0;
      }),
      (t.prototype.U = function () {
        return 0 !== this.ca.ct().lastPriceAnimation;
      }),
      (t.prototype._a = function () {
        switch (this.ca.ct().lastPriceAnimation) {
          case 0:
            return !1;
          case 1:
            return !0;
          case 2:
            return performance.now() <= this.fa;
        }
      }),
      (t.prototype.P = function (t, e) {
        return (
          this.L
            ? (this.R(t, e), (this.L = !1), (this.oa = !1))
            : this.oa && (this.da(), (this.oa = !1)),
          this.ot
        );
      }),
      (t.prototype.R = function (t, e) {
        this.ot._(null);
        var i = this.ca.vt().j(),
          n = i.mr(),
          r = this.ca.H();
        if (null !== n && null !== r) {
          var o = this.ca.wa(!0);
          if (!o.Ma && n.Eh(o.Ph)) {
            var s = { x: i.G(o.Ph), y: this.ca.$().K(o.D, r.X) },
              a = o.et,
              l = this.ca.ct().lineWidth,
              h = cp(this.ba(), a);
            this.ot._({ Ju: a, Gu: l, Qu: h.Qu, ta: h.ta, C: h.C, Lu: s });
          }
        }
      }),
      (t.prototype.da = function () {
        var t = this.ot.Zu();
        if (null !== t) {
          var e = cp(this.ba(), t.Ju);
          (t.Qu = e.Qu), (t.ta = e.ta), (t.C = e.C);
        }
      }),
      (t.prototype.ba = function () {
        return this._a() ? performance.now() - this.la : 2599;
      }),
      t
    );
  })();
  function fp(t, e) {
    return Vu(Math.min(Math.max(t, 12), 30) * e);
  }
  function dp(t, e) {
    switch (t) {
      case "arrowDown":
      case "arrowUp":
        return fp(e, 1);
      case "circle":
        return fp(e, 0.8);
      case "square":
        return fp(e, 0.7);
    }
  }
  function vp(t) {
    return Uu(fp(t, 1));
  }
  function mp(t) {
    return Math.max(fp(t, 0.1), 3);
  }
  function yp(t, e, i, n, r) {
    var o = dp("square", i),
      s = (o - 1) / 2,
      a = t - s,
      l = e - s;
    return n >= a && n <= a + o && r >= l && r <= l + o;
  }
  function gp(t, e, i, n, r) {
    var o = (dp("arrowUp", r) - 1) / 2,
      s = (Vu(r / 2) - 1) / 2;
    e.beginPath(),
      t
        ? (e.moveTo(i - o, n),
          e.lineTo(i, n - o),
          e.lineTo(i + o, n),
          e.lineTo(i + s, n),
          e.lineTo(i + s, n + o),
          e.lineTo(i - s, n + o),
          e.lineTo(i - s, n))
        : (e.moveTo(i - o, n),
          e.lineTo(i, n + o),
          e.lineTo(i + o, n),
          e.lineTo(i + s, n),
          e.lineTo(i + s, n - o),
          e.lineTo(i - s, n - o),
          e.lineTo(i - s, n)),
      e.fill();
  }
  var wp = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (
        (e.tt = null),
        (e.Pu = new ip()),
        (e.fe = -1),
        (e.ce = ""),
        (e.ma = ""),
        e
      );
    }
    return (
      Vh(e, t),
      (e.prototype._ = function (t) {
        this.tt = t;
      }),
      (e.prototype.Ru = function (t, e) {
        (this.fe === t && this.ce === e) ||
          ((this.fe = t), (this.ce = e), (this.ma = Sc(t, e)), this.Pu.Ou());
      }),
      (e.prototype.pa = function (t, e) {
        if (null === this.tt || null === this.tt.M) return null;
        for (var i = this.tt.M.from; i < this.tt.M.to; i++) {
          var n = this.tt.m[i];
          if ($p(n, t, e)) return { ga: n.ya, ka: n.ka };
        }
        return null;
      }),
      (e.prototype.u = function (t, e, i) {
        if (null !== this.tt && null !== this.tt.M) {
          (t.textBaseline = "middle"), (t.font = this.ma);
          for (var n = this.tt.M.from; n < this.tt.M.to; n++) {
            var r = this.tt.m[n];
            void 0 !== r.Et &&
              ((r.Et.wt = this.Pu.Vt(t, r.Et.Ca)), (r.Et.Mt = this.fe)),
              bp(r, t);
          }
        }
      }),
      e
    );
  })(su);
  function bp(t, e) {
    (e.fillStyle = t.et),
      void 0 !== t.Et &&
        (function (t, e, i, n) {
          t.fillText(e, i, n);
        })(e, t.Et.Ca, t.p - t.Et.wt / 2, t.Et.g),
      (function (t, e) {
        if (0 !== t.Je) {
          switch (t.Na) {
            case "arrowDown":
              return void gp(!1, e, t.p, t.g, t.Je);
            case "arrowUp":
              return void gp(!0, e, t.p, t.g, t.Je);
            case "circle":
              return void (function (t, e, i, n) {
                var r = (dp("circle", n) - 1) / 2;
                t.beginPath(), t.arc(e, i, r, 0, 2 * Math.PI, !1), t.fill();
              })(e, t.p, t.g, t.Je);
            case "square":
              return void (function (t, e, i, n) {
                var r = dp("square", n),
                  o = (r - 1) / 2,
                  s = e - o,
                  a = i - o;
                t.fillRect(s, a, r, r);
              })(e, t.p, t.g, t.Je);
          }
          t.Na;
        }
      })(t, e);
  }
  function $p(t, e, i) {
    return (
      !(
        void 0 === t.Et ||
        !(function (t, e, i, n, r, o) {
          var s = n / 2;
          return r >= t && r <= t + i && o >= e - s && o <= e + s;
        })(t.p, t.Et.g, t.Et.wt, t.Et.Mt, e, i)
      ) ||
      (function (t, e, i) {
        if (0 === t.Je) return !1;
        switch (t.Na) {
          case "arrowDown":
          case "arrowUp":
            return (function (t, e, i, n, r, o) {
              return yp(e, i, n, r, o);
            })(0, t.p, t.g, t.Je, e, i);
          case "circle":
            return (function (t, e, i, n, r) {
              var o = 2 + dp("circle", i) / 2,
                s = t - n,
                a = e - r;
              return Math.sqrt(s * s + a * a) <= o;
            })(t.p, t.g, t.Je, e, i);
          case "square":
            return yp(t.p, t.g, t.Je, e, i);
        }
      })(t, e, i)
    );
  }
  function xp(t, e, i, n, r, o, s, a, l) {
    var h = Kh(i) ? i : i.close,
      u = Kh(i) ? i : i.high,
      c = Kh(i) ? i : i.low,
      p = Kh(e.size) ? Math.max(e.size, 0) : 1,
      f = vp(a.Wr()) * p,
      d = f / 2;
    switch (((t.Je = f), e.position)) {
      case "inBar":
        return (
          (t.g = s.K(h, l)),
          void (void 0 !== t.Et && (t.Et.g = t.g + d + o + 0.6 * r))
        );
      case "aboveBar":
        return (
          (t.g = s.K(u, l) - d - n.xa),
          void 0 !== t.Et && ((t.Et.g = t.g - d - 0.6 * r), (n.xa += 1.2 * r)),
          void (n.xa += f + o)
        );
      case "belowBar":
        return (
          (t.g = s.K(c, l) + d + n.Sa),
          void 0 !== t.Et &&
            ((t.Et.g = t.g + d + o + 0.6 * r), (n.Sa += 1.2 * r)),
          void (n.Sa += f + o)
        );
    }
    e.position;
  }
  var _p = (function () {
      function t(t, e) {
        (this.L = !0),
          (this.Da = !0),
          (this.Aa = !0),
          (this.Ta = null),
          (this.ot = new wp()),
          (this.ca = t),
          (this.hi = e),
          (this.tt = { m: [], M: null });
      }
      return (
        (t.prototype.O = function (t) {
          (this.L = !0), (this.Aa = !0), "data" === t && (this.Da = !0);
        }),
        (t.prototype.P = function (t, e, i) {
          if (!this.ca.U()) return null;
          this.L && this.Ye();
          var n = this.hi.ct().layout;
          return (
            this.ot.Ru(n.fontSize, n.fontFamily), this.ot._(this.tt), this.ot
          );
        }),
        (t.prototype.Ba = function () {
          if (this.Aa) {
            if (this.ca.La().length > 0) {
              var t = this.hi.j().Wr(),
                e = mp(t),
                i = 1.5 * vp(t) + 2 * e;
              this.Ta = { above: i, below: i };
            } else this.Ta = null;
            this.Aa = !1;
          }
          return this.Ta;
        }),
        (t.prototype.Ye = function () {
          var t = this.ca.$(),
            e = this.hi.j(),
            i = this.ca.La();
          this.Da &&
            ((this.tt.m = i.map(function (t) {
              return {
                S: t.time,
                p: 0,
                g: 0,
                Je: 0,
                Na: t.shape,
                et: t.color,
                ya: t.ya,
                ka: t.id,
                Et: void 0,
              };
            })),
            (this.Da = !1));
          var n = this.hi.ct().layout;
          this.tt.M = null;
          var r = e.mr();
          if (null !== r) {
            var o = this.ca.H();
            if (null !== o && 0 !== this.tt.m.length) {
              var s = NaN,
                a = mp(e.Wr()),
                l = { xa: a, Sa: a };
              this.tt.M = Bc(this.tt.m, r, !0);
              for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                var u = i[h];
                u.time !== s && ((l.xa = a), (l.Sa = a), (s = u.time));
                var c = this.tt.m[h];
                (c.p = e.G(u.time)),
                  void 0 !== u.text &&
                    u.text.length > 0 &&
                    (c.Et = { Ca: u.text, g: 0, wt: 0, Mt: 0 });
                var p = this.ca.Fa(u.time);
                null !== p && xp(c, u, p, l, n.fontSize, a, t, e, o.X);
              }
              this.L = !1;
            }
          }
        }),
        t
      );
    })(),
    Mp = (function (t) {
      function e(e) {
        return t.call(this, e) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.Xu = function (t, e) {
          var i = this.Ku;
          i.U = !1;
          var n = this.qe.ct();
          if (n.priceLineVisible && this.qe.U()) {
            var r = this.qe.wa(0 === n.priceLineSource);
            r.Ma ||
              ((i.U = !0),
              (i.g = r.zt),
              (i.et = this.qe.Ea(r.et)),
              (i.wt = e),
              (i.Mt = t),
              (i.rt = n.priceLineWidth),
              (i.ut = n.priceLineStyle));
          }
        }),
        e
      );
    })(sp),
    kp = (function (t) {
      function e(e) {
        var i = t.call(this) || this;
        return (i.lt = e), i;
      }
      return (
        Vh(e, t),
        (e.prototype.Jt = function (t, e, i) {
          (t.U = !1), (e.U = !1);
          var n = this.lt;
          if (n.U()) {
            var r = n.ct(),
              o = r.lastValueVisible,
              s = "" !== n.Va(),
              a = 0 === r.seriesLastValueMode,
              l = n.wa(!1);
            if (!l.Ma) {
              o && ((t.Et = this.Oa(l, o, a)), (t.U = 0 !== t.Et.length)),
                (s || a) &&
                  ((e.Et = this.Wa(l, o, s, a)), (e.U = e.Et.length > 0));
              var h = n.Ea(l.et),
                u = $u(h);
              (i.yt = u.yt),
                (i.et = u.kt),
                (i.zt = l.zt),
                (e.Z = n.vt().J(l.zt / n.$().Mt())),
                (t.Z = h);
            }
          }
        }),
        (e.prototype.Wa = function (t, e, i, n) {
          var r = "",
            o = this.lt.Va();
          return (
            i && 0 !== o.length && (r += o + " "),
            e && n && (r += this.lt.$().cs() ? t.za : t.Pa),
            r.trim()
          );
        }),
        (e.prototype.Oa = function (t, e, i) {
          return e ? (i ? (this.lt.$().cs() ? t.Pa : t.za) : t.Et) : "";
        }),
        e
      );
    })(Lu),
    Sp = (function () {
      function t(t, e) {
        (this.On = t), (this.Ra = e || null);
      }
      return (
        (t.prototype.Cs = function () {
          return this.On;
        }),
        (t.prototype.eh = function () {
          return this.Ra;
        }),
        (t.prototype.Mn = function () {
          return null === this.On
            ? null
            : { priceRange: this.On.Mn(), margins: this.Ra || void 0 };
        }),
        (t.bn = function (e) {
          return null === e ? null : new t(Wu.bn(e.priceRange), e.margins);
        }),
        t
      );
    })(),
    Cp = (function (t) {
      function e(e, i) {
        var n = t.call(this, e) || this;
        return (n.Ia = i), n;
      }
      return (
        Vh(e, t),
        (e.prototype.Xu = function (t, e) {
          var i = this.Ku;
          if (((i.U = !1), this.qe.U())) {
            var n = this.Ia.ja();
            if (null !== n) {
              var r = this.Ia.ct();
              (i.U = !0),
                (i.g = n),
                (i.et = r.color),
                (i.wt = e),
                (i.Mt = t),
                (i.rt = r.lineWidth),
                (i.ut = r.lineStyle);
            }
          }
        }),
        e
      );
    })(sp),
    Lp = (function (t) {
      function e(e, i) {
        var n = t.call(this) || this;
        return (n.ca = e), (n.Ia = i), n;
      }
      return (
        Vh(e, t),
        (e.prototype.Jt = function (t, e, i) {
          (t.U = !1), (e.U = !1);
          var n = this.Ia.ct(),
            r = n.axisLabelVisible,
            o = "" !== n.title,
            s = this.ca;
          if (r && s.U()) {
            var a = this.Ia.ja();
            if (null !== a) {
              o && ((e.Et = n.title), (e.U = !0)),
                (e.Z = s.vt().J(a / s.$().Mt())),
                (t.Et = s.$().Zs(n.price)),
                (t.U = !0);
              var l = $u(n.color);
              (i.yt = l.yt), (i.et = l.kt), (i.zt = a);
            }
          }
        }),
        e
      );
    })(Lu),
    Dp = (function () {
      function t(t, e) {
        (this.ca = t),
          (this.ki = e),
          (this.qa = new Cp(t, this)),
          (this.Iu = new Lp(t, this)),
          (this.Ua = new rp(this.Iu, t, t.vt()));
      }
      return (
        (t.prototype.rs = function (t) {
          Zh(this.ki, t), this.O(), this.ca.vt().Or();
        }),
        (t.prototype.ct = function () {
          return this.ki;
        }),
        (t.prototype.zi = function () {
          return [this.qa, this.Ua];
        }),
        (t.prototype.Ha = function () {
          return this.Iu;
        }),
        (t.prototype.O = function () {
          this.qa.O(), this.Iu.O();
        }),
        (t.prototype.ja = function () {
          var t = this.ca,
            e = t.$();
          if (t.vt().j().ti() || e.ti()) return null;
          var i = t.H();
          return null === i ? null : e.K(this.ki.price, i.X);
        }),
        t
      );
    })(),
    Ap = (function (t) {
      function e(e) {
        var i = t.call(this) || this;
        return (i.hi = e), i;
      }
      return (
        Vh(e, t),
        (e.prototype.vt = function () {
          return this.hi;
        }),
        e
      );
    })(Ou),
    Tp = { fu: "", Su: "", xu: "" },
    jp = (function () {
      function t(t) {
        this.ca = t;
      }
      return (
        (t.prototype.cu = function (t, e) {
          var i = this.ca.Ya(),
            n = this.ca.ct();
          switch (i) {
            case "Line":
              return this.Ka(n);
            case "Area":
              return this.$a(n);
            case "Baseline":
              return this.Xa(n, t, e);
            case "Bar":
              return this.Za(n, t, e);
            case "Candlestick":
              return this.Ja(n, t, e);
            case "Histogram":
              return this.Ga(n, t, e);
          }
          throw new Error("Unknown chart style");
        }),
        (t.prototype.Za = function (t, e, i) {
          var n = Ih({}, Tp),
            r = t.upColor,
            o = t.downColor,
            s = r,
            a = o,
            l = Jh(this.Qa(e, i)),
            h = Yh(l.X[0]) <= Yh(l.X[3]);
          return (n.fu = h ? r : o), (n.Su = h ? s : a), n;
        }),
        (t.prototype.Ja = function (t, e, i) {
          var n = Ih({}, Tp),
            r = t.upColor,
            o = t.downColor,
            s = t.borderUpColor,
            a = t.borderDownColor,
            l = t.wickUpColor,
            h = t.wickDownColor,
            u = Jh(this.Qa(e, i)),
            c = Yh(u.X[0]) <= Yh(u.X[3]);
          return (n.fu = c ? r : o), (n.Su = c ? s : a), (n.xu = c ? l : h), n;
        }),
        (t.prototype.$a = function (t) {
          return Ih(Ih({}, Tp), { fu: t.lineColor });
        }),
        (t.prototype.Xa = function (t, e, i) {
          var n = Jh(this.Qa(e, i)).X[3] >= t.baseValue.price;
          return Ih(Ih({}, Tp), { fu: n ? t.topLineColor : t.bottomLineColor });
        }),
        (t.prototype.Ka = function (t) {
          return Ih(Ih({}, Tp), { fu: t.color });
        }),
        (t.prototype.Ga = function (t, e, i) {
          var n = Ih({}, Tp),
            r = Jh(this.Qa(e, i));
          return (n.fu = void 0 !== r.et ? r.et : t.color), n;
        }),
        (t.prototype.Qa = function (t, e) {
          return void 0 !== e ? e.X : this.ca.Hi().io(t);
        }),
        t
      );
    })(),
    Op = (function () {
      function t() {
        (this.no = []), (this.so = new Map()), (this.ho = new Map());
      }
      return (
        (t.prototype.ro = function () {
          return this.Je() > 0 ? this.no[this.no.length - 1] : null;
        }),
        (t.prototype.eo = function () {
          return this.Je() > 0 ? this.uo(0) : null;
        }),
        (t.prototype.Ui = function () {
          return this.Je() > 0 ? this.uo(this.no.length - 1) : null;
        }),
        (t.prototype.Je = function () {
          return this.no.length;
        }),
        (t.prototype.ti = function () {
          return 0 === this.Je();
        }),
        (t.prototype.Eh = function (t) {
          return null !== this.ao(t, 0);
        }),
        (t.prototype.io = function (t) {
          return this.oo(t);
        }),
        (t.prototype.oo = function (t, e) {
          void 0 === e && (e = 0);
          var i = this.ao(t, e);
          return null === i ? null : Ih(Ih({}, this.lo(i)), { Ph: this.uo(i) });
        }),
        (t.prototype.iu = function () {
          return this.no;
        }),
        (t.prototype.fo = function (t, e, i) {
          if (this.ti()) return null;
          for (var n = null, r = 0, o = i; r < o.length; r++) {
            var s = o[r];
            n = Ep(n, this.co(t, e, s));
          }
          return n;
        }),
        (t.prototype._ = function (t) {
          this.ho.clear(), this.so.clear(), (this.no = t);
        }),
        (t.prototype.uo = function (t) {
          return this.no[t].Ph;
        }),
        (t.prototype.lo = function (t) {
          return this.no[t];
        }),
        (t.prototype.ao = function (t, e) {
          var i = this.vo(t);
          if (null === i && 0 !== e)
            switch (e) {
              case -1:
                return this._o(t);
              case 1:
                return this.do(t);
              default:
                throw new TypeError("Unknown search mode");
            }
          return i;
        }),
        (t.prototype._o = function (t) {
          var e = this.wo(t);
          return (
            e > 0 && (e -= 1), e !== this.no.length && this.uo(e) < t ? e : null
          );
        }),
        (t.prototype.do = function (t) {
          var e = this.Mo(t);
          return e !== this.no.length && t < this.uo(e) ? e : null;
        }),
        (t.prototype.vo = function (t) {
          var e = this.wo(t);
          return e === this.no.length || t < this.no[e].Ph ? null : e;
        }),
        (t.prototype.wo = function (t) {
          return fc(this.no, t, function (t, e) {
            return t.Ph < e;
          });
        }),
        (t.prototype.Mo = function (t) {
          return dc(this.no, t, function (t, e) {
            return e.Ph > t;
          });
        }),
        (t.prototype.bo = function (t, e, i) {
          for (var n = null, r = t; r < e; r++) {
            var o = this.no[r].X[i];
            Number.isNaN(o) ||
              (null === n
                ? (n = { mo: o, po: o })
                : (o < n.mo && (n.mo = o), o > n.po && (n.po = o)));
          }
          return n;
        }),
        (t.prototype.co = function (t, e, i) {
          if (this.ti()) return null;
          var n = null,
            r = Jh(this.eo()),
            o = Jh(this.Ui()),
            s = Math.max(t, r),
            a = Math.min(e, o),
            l = 30 * Math.ceil(s / 30),
            h = Math.max(l, 30 * Math.floor(a / 30)),
            u = this.wo(s),
            c = this.Mo(Math.min(a, l, e));
          n = Ep(n, this.bo(u, c, i));
          var p = this.so.get(i);
          void 0 === p && ((p = new Map()), this.so.set(i, p));
          for (var f = Math.max(l + 1, s); f < h; f += 30) {
            var d = Math.floor(f / 30),
              v = p.get(d);
            if (void 0 === v) {
              var m = this.wo(30 * d),
                y = this.Mo(30 * (d + 1) - 1);
              (v = this.bo(m, y, i)), p.set(d, v);
            }
            n = Ep(n, v);
          }
          return (u = this.wo(h)), (c = this.Mo(a)), Ep(n, this.bo(u, c, i));
        }),
        t
      );
    })();
  function Ep(t, e) {
    return null === t
      ? e
      : null === e
      ? t
      : { mo: Math.min(t.mo, e.mo), po: Math.max(t.po, e.po) };
  }
  var Pp = (function (t) {
      function e(e, i, n) {
        var r = t.call(this, e) || this;
        (r.tt = new Op()),
          (r.qa = new Mp(r)),
          (r.yo = []),
          (r.ko = new ap(r)),
          (r.Co = null),
          (r.No = null),
          (r.xo = []),
          (r.So = []),
          (r.Do = null),
          (r.ki = i),
          (r.Ao = n);
        var o = new kp(r);
        return (
          (r.Mi = [o]),
          (r.Ua = new rp(o, r, e)),
          ("Area" !== n && "Line" !== n && "Baseline" !== n) ||
            (r.Co = new pp(r)),
          r.To(),
          r.Bo(),
          r
        );
      }
      return (
        Vh(e, t),
        (e.prototype.en = function () {
          null !== this.Do && clearTimeout(this.Do);
        }),
        (e.prototype.Ea = function (t) {
          return this.ki.priceLineColor || t;
        }),
        (e.prototype.wa = function (t) {
          var e = { Ma: !0 },
            i = this.$();
          if (this.vt().j().ti() || i.ti() || this.tt.ti()) return e;
          var n,
            r,
            o = this.vt().j().mr(),
            s = this.H();
          if (null === o || null === s) return e;
          if (t) {
            var a = this.tt.ro();
            if (null === a) return e;
            (n = a), (r = a.Ph);
          } else {
            var l = this.tt.oo(o.rh(), -1);
            if (null === l) return e;
            if (null === (n = this.tt.io(l.Ph))) return e;
            r = l.Ph;
          }
          var h = n.X[3],
            u = this.tu().cu(r, { X: n }),
            c = i.K(h, s.X);
          return {
            Ma: !1,
            D: h,
            Et: i.ii(h, s.X),
            za: i.Zs(h),
            Pa: i.Gs(h, s.X),
            et: u.fu,
            zt: c,
            Ph: r,
          };
        }),
        (e.prototype.tu = function () {
          return null !== this.No || (this.No = new jp(this)), this.No;
        }),
        (e.prototype.ct = function () {
          return this.ki;
        }),
        (e.prototype.rs = function (t) {
          var e = t.priceScaleId;
          void 0 !== e && e !== this.ki.priceScaleId && this.vt().Lo(this, e),
            Zh(this.ki, t),
            null !== this.ui &&
              void 0 !== t.scaleMargins &&
              this.ui.rs({ scaleMargins: t.scaleMargins }),
            void 0 !== t.priceFormat && this.To(),
            this.vt().Fo(this),
            this.vt().Eo(),
            this.Ai.O("options");
        }),
        (e.prototype._ = function (t) {
          var e;
          this.tt._(t),
            this.Vo(),
            this.Ai.O("data"),
            this.Ci.O("data"),
            null === (e = this.Co) || void 0 === e || e.O("data");
          var i = this.vt().qu(this);
          this.vt().Oo(i), this.vt().Fo(this), this.vt().Eo(), this.vt().Or();
        }),
        (e.prototype.Wo = function (t) {
          (this.xo = t.map(function (t) {
            return Ih({}, t);
          })),
            this.Vo();
          var e = this.vt().qu(this);
          this.Ci.O("data"),
            this.vt().Oo(e),
            this.vt().Fo(this),
            this.vt().Eo(),
            this.vt().Or();
        }),
        (e.prototype.La = function () {
          return this.So;
        }),
        (e.prototype.zo = function (t) {
          var e = new Dp(this, t);
          return this.yo.push(e), this.vt().Fo(this), e;
        }),
        (e.prototype.Po = function (t) {
          var e = this.yo.indexOf(t);
          -1 !== e && this.yo.splice(e, 1), this.vt().Fo(this);
        }),
        (e.prototype.Ya = function () {
          return this.Ao;
        }),
        (e.prototype.H = function () {
          var t = this.Ro();
          return null === t ? null : { X: t.X[3], Rs: t.S };
        }),
        (e.prototype.Ro = function () {
          var t = this.vt().j().mr();
          if (null === t) return null;
          var e = t.hh();
          return this.tt.oo(e, 1);
        }),
        (e.prototype.Hi = function () {
          return this.tt;
        }),
        (e.prototype.Fa = function (t) {
          var e = this.tt.io(t);
          return null === e
            ? null
            : "Bar" === this.Ao || "Candlestick" === this.Ao
            ? { open: e.X[0], high: e.X[1], low: e.X[2], close: e.X[3] }
            : e.X[3];
        }),
        (e.prototype.Io = function (t) {
          var e = this,
            i = this.Co;
          return null !== i && i.U()
            ? (null === this.Do &&
                i._a() &&
                (this.Do = setTimeout(function () {
                  (e.Do = null), e.vt().jo();
                }, 0)),
              i.va(),
              [i])
            : [];
        }),
        (e.prototype.zi = function () {
          var t = [];
          this.qo() || t.push(this.ko);
          for (var e = 0, i = this.yo; e < i.length; e++) {
            var n = i[e];
            t.push.apply(t, n.zi());
          }
          return t.push(this.Ai, this.qa, this.Ua, this.Ci), t;
        }),
        (e.prototype.Pi = function (t, e) {
          if (e !== this.ui && !this.qo()) return [];
          for (
            var i = qh([], this.Mi, !0), n = 0, r = this.yo;
            n < r.length;
            n++
          ) {
            var o = r[n];
            i.push(o.Ha());
          }
          return i;
        }),
        (e.prototype.sh = function (t, e) {
          var i = this;
          if (void 0 !== this.ki.autoscaleInfoProvider) {
            var n = this.ki.autoscaleInfoProvider(function () {
              var n = i.Uo(t, e);
              return null === n ? null : n.Mn();
            });
            return Sp.bn(n);
          }
          return this.Uo(t, e);
        }),
        (e.prototype.ih = function () {
          return this.ki.priceFormat.minMove;
        }),
        (e.prototype.$s = function () {
          return this.Zn;
        }),
        (e.prototype.Ii = function () {
          var t;
          this.Ai.O(), this.Ci.O();
          for (var e = 0, i = this.Mi; e < i.length; e++) i[e].O();
          for (var n = 0, r = this.yo; n < r.length; n++) r[n].O();
          this.qa.O(),
            this.ko.O(),
            null === (t = this.Co) || void 0 === t || t.O();
        }),
        (e.prototype.$ = function () {
          return Jh(t.prototype.$.call(this));
        }),
        (e.prototype.q = function (t) {
          if (
            ("Line" !== this.Ao &&
              "Area" !== this.Ao &&
              "Baseline" !== this.Ao) ||
            !this.ki.crosshairMarkerVisible
          )
            return null;
          var e = this.tt.io(t);
          return null === e
            ? null
            : { D: e.X[3], C: this.Ho(), Z: this.Yo(), Y: this.Ko(t) };
        }),
        (e.prototype.Va = function () {
          return this.ki.title;
        }),
        (e.prototype.U = function () {
          return this.ki.visible;
        }),
        (e.prototype.qo = function () {
          return !Lc(this.$().hs());
        }),
        (e.prototype.Uo = function (t, e) {
          if (!Qh(t) || !Qh(e) || this.tt.ti()) return null;
          var i =
              "Line" === this.Ao ||
              "Area" === this.Ao ||
              "Baseline" === this.Ao ||
              "Histogram" === this.Ao
                ? [3]
                : [2, 1],
            n = this.tt.fo(t, e, i),
            r = null !== n ? new Wu(n.mo, n.po) : null;
          if ("Histogram" === this.Ya()) {
            var o = this.ki.base,
              s = new Wu(o, o);
            r = null !== r ? r._n(s) : s;
          }
          return new Sp(r, this.Ci.Ba());
        }),
        (e.prototype.Ho = function () {
          switch (this.Ao) {
            case "Line":
            case "Area":
            case "Baseline":
              return this.ki.crosshairMarkerRadius;
          }
          return 0;
        }),
        (e.prototype.Yo = function () {
          switch (this.Ao) {
            case "Line":
            case "Area":
            case "Baseline":
              var t = this.ki.crosshairMarkerBorderColor;
              if (0 !== t.length) return t;
          }
          return null;
        }),
        (e.prototype.Ko = function (t) {
          switch (this.Ao) {
            case "Line":
            case "Area":
            case "Baseline":
              var e = this.ki.crosshairMarkerBackgroundColor;
              if (0 !== e.length) return e;
          }
          return this.tu().cu(t).fu;
        }),
        (e.prototype.To = function () {
          switch (this.ki.priceFormat.type) {
            case "custom":
              this.Zn = { format: this.ki.priceFormat.formatter };
              break;
            case "volume":
              this.Zn = new Ac(this.ki.priceFormat.precision);
              break;
            case "percent":
              this.Zn = new Ru(this.ki.priceFormat.precision);
              break;
            default:
              var t = Math.pow(10, this.ki.priceFormat.precision);
              this.Zn = new Nu(t, this.ki.priceFormat.minMove * t);
          }
          null !== this.ui && this.ui.es();
        }),
        (e.prototype.Vo = function () {
          var t = this,
            e = this.vt().j();
          if (e.ti() || 0 === this.tt.Je()) this.So = [];
          else {
            var i = Jh(this.tt.eo());
            this.So = this.xo.map(function (n, r) {
              var o = Jh(e.br(n.time, !0)),
                s = o < i ? 1 : -1;
              return {
                time: Jh(t.tt.oo(o, s)).Ph,
                position: n.position,
                shape: n.shape,
                color: n.color,
                id: n.id,
                ya: r,
                text: n.text,
                size: n.size,
              };
            });
          }
        }),
        (e.prototype.Bo = function () {
          switch (((this.Ci = new _p(this, this.vt())), this.Ao)) {
            case "Bar":
              this.Ai = new Vc(this, this.vt());
              break;
            case "Candlestick":
              this.Ai = new Jc(this, this.vt());
              break;
            case "Line":
              this.Ai = new tp(this, this.vt());
              break;
            case "Area":
              this.Ai = new Hc(this, this.vt());
              break;
            case "Baseline":
              this.Ai = new Xc(this, this.vt());
              break;
            case "Histogram":
              this.Ai = new Qc(this, this.vt());
              break;
            default:
              throw Error("Unknown chart style assigned: " + this.Ao);
          }
        }),
        e
      );
    })(Ap),
    Np = (function () {
      function t(t) {
        this.ki = t;
      }
      return (
        (t.prototype.$o = function (t, e, i) {
          var n = t;
          if (0 === this.ki.mode) return n;
          var r = i.xi(),
            o = r.H();
          if (null === o) return n;
          var s = r.K(t, o),
            a = i
              .Vs()
              .filter(function (t) {
                return t instanceof Pp;
              })
              .reduce(function (t, n) {
                if (i.Uu(n) || !n.U()) return t;
                var r = n.$(),
                  o = n.Hi();
                if (r.ti() || !o.Eh(e)) return t;
                var s = o.io(e);
                if (null === s) return t;
                var a = Yh(n.H());
                return t.concat([r.K(s.X[3], a.X)]);
              }, []);
          if (0 === a.length) return n;
          a.sort(function (t, e) {
            return Math.abs(t - s) - Math.abs(e - s);
          });
          var l = a[0];
          return r.Si(l, o);
        }),
        t
      );
    })(),
    Rp = (function () {
      function t() {
        this.tt = null;
      }
      return (
        (t.prototype._ = function (t) {
          this.tt = t;
        }),
        (t.prototype.h = function (t, e, i, n) {
          var r = this;
          if (null !== this.tt) {
            var o = Math.max(1, Math.floor(e));
            t.lineWidth = o;
            var s = Math.ceil(this.tt.ht * e),
              a = Math.ceil(this.tt.st * e);
            !(function (t, e) {
              t.save(),
                t.lineWidth % 2 && t.translate(0.5, 0.5),
                e(),
                t.restore();
            })(t, function () {
              var i = Jh(r.tt);
              if (i.Xo) {
                (t.strokeStyle = i.Zo), Hh(t, i.Jo), t.beginPath();
                for (var n = 0, l = i.Go; n < l.length; n++) {
                  var h = l[n],
                    u = Math.round(h.An * e);
                  t.moveTo(u, -o), t.lineTo(u, s + o);
                }
                t.stroke();
              }
              if (i.Qo) {
                (t.strokeStyle = i.tl), Hh(t, i.il), t.beginPath();
                for (var c = 0, p = i.nl; c < p.length; c++) {
                  var f = p[c],
                    d = Math.round(f.An * e);
                  t.moveTo(-o, d), t.lineTo(a + o, d);
                }
                t.stroke();
              }
            });
          }
        }),
        t
      );
    })(),
    Bp = (function () {
      function t(t) {
        (this.ot = new Rp()), (this.L = !0), (this.vi = t);
      }
      return (
        (t.prototype.O = function () {
          this.L = !0;
        }),
        (t.prototype.P = function (t, e) {
          if (this.L) {
            var i = this.vi.vt().ct().grid,
              n = {
                ht: t,
                st: e,
                Qo: i.horzLines.visible,
                Xo: i.vertLines.visible,
                tl: i.horzLines.color,
                Zo: i.vertLines.color,
                il: i.horzLines.style,
                Jo: i.vertLines.style,
                nl: this.vi.xi().Fn(),
                Go: this.vi.vt().j().Fn() || [],
              };
            this.ot._(n), (this.L = !1);
          }
          return this.ot;
        }),
        t
      );
    })(),
    Wp = (function () {
      function t(t) {
        this.Ai = new Bp(t);
      }
      return (
        (t.prototype.sl = function () {
          return this.Ai;
        }),
        t
      );
    })(),
    zp = (function () {
      function t(t, e) {
        (this.Hn = []),
          (this.hl = new Map()),
          (this.En = 0),
          (this.$h = 0),
          (this.rl = 1e3),
          (this.Yn = null),
          (this.el = new Bu()),
          (this.ul = t),
          (this.hi = e),
          (this.al = new Wp(this));
        var i = e.ct();
        (this.ol = this.ll("left", i.leftPriceScale)),
          (this.fl = this.ll("right", i.rightPriceScale)),
          this.ol.bs().Ji(this.cl.bind(this, this.ol), this),
          this.fl.bs().Ji(this.cl.bind(this, this.ol), this),
          this.vl(i);
      }
      return (
        (t.prototype.vl = function (t) {
          if (
            (t.leftPriceScale && this.ol.rs(t.leftPriceScale),
            t.rightPriceScale && this.fl.rs(t.rightPriceScale),
            t.localization && (this.ol.es(), this.fl.es()),
            t.overlayPriceScales)
          )
            for (
              var e = 0, i = Array.from(this.hl.values());
              e < i.length;
              e++
            ) {
              var n = Jh(i[e][0].$());
              n.rs(t.overlayPriceScales), t.localization && n.es();
            }
        }),
        (t.prototype._l = function (t) {
          switch (t) {
            case "left":
              return this.ol;
            case "right":
              return this.fl;
          }
          return this.hl.has(t) ? Gh(this.hl.get(t))[0].$() : null;
        }),
        (t.prototype.en = function () {
          this.vt().dl().sn(this),
            this.ol.bs().sn(this),
            this.fl.bs().sn(this),
            this.Hn.forEach(function (t) {
              t.en && t.en();
            }),
            this.el.hn();
        }),
        (t.prototype.wl = function () {
          return this.rl;
        }),
        (t.prototype.Ml = function (t) {
          this.rl = t;
        }),
        (t.prototype.vt = function () {
          return this.hi;
        }),
        (t.prototype.wt = function () {
          return this.$h;
        }),
        (t.prototype.Mt = function () {
          return this.En;
        }),
        (t.prototype.Dr = function (t) {
          (this.$h = t), this.bl();
        }),
        (t.prototype.ps = function (t) {
          var e = this;
          (this.En = t),
            this.ol.ps(t),
            this.fl.ps(t),
            this.Hn.forEach(function (i) {
              if (e.Uu(i)) {
                var n = i.$();
                null !== n && n.ps(t);
              }
            }),
            this.bl();
        }),
        (t.prototype.Vs = function () {
          return this.Hn;
        }),
        (t.prototype.Uu = function (t) {
          var e = t.$();
          return null === e || (this.ol !== e && this.fl !== e);
        }),
        (t.prototype.Ws = function (t, e, i) {
          var n = void 0 !== i ? i : this.pl().ml + 1;
          this.gl(t, e, n);
        }),
        (t.prototype.Ps = function (t) {
          var e = this.Hn.indexOf(t);
          Xh(-1 !== e, "removeDataSource: invalid data source"),
            this.Hn.splice(e, 1);
          var i = Jh(t.$()).hs();
          if (this.hl.has(i)) {
            var n = Gh(this.hl.get(i)),
              r = n.indexOf(t);
            -1 !== r && (n.splice(r, 1), 0 === n.length && this.hl.delete(i));
          }
          var o = t.$();
          o && o.Vs().indexOf(t) >= 0 && o.Ps(t),
            null !== o && (o.zs(), this.yl(o)),
            (this.Yn = null);
        }),
        (t.prototype.Hu = function (t) {
          return t === this.ol ? "left" : t === this.fl ? "right" : "overlay";
        }),
        (t.prototype.kl = function () {
          return this.ol;
        }),
        (t.prototype.Cl = function () {
          return this.fl;
        }),
        (t.prototype.Nl = function (t, e) {
          t.js(e);
        }),
        (t.prototype.xl = function (t, e) {
          t.qs(e), this.bl();
        }),
        (t.prototype.Sl = function (t) {
          t.Us();
        }),
        (t.prototype.Dl = function (t, e) {
          t.Hs(e);
        }),
        (t.prototype.Al = function (t, e) {
          t.Ys(e), this.bl();
        }),
        (t.prototype.Tl = function (t) {
          t.Ks();
        }),
        (t.prototype.bl = function () {
          this.Hn.forEach(function (t) {
            t.Ii();
          });
        }),
        (t.prototype.xi = function () {
          var t = null;
          return (
            this.hi.ct().rightPriceScale.visible && 0 !== this.fl.Vs().length
              ? (t = this.fl)
              : this.hi.ct().leftPriceScale.visible && 0 !== this.ol.Vs().length
              ? (t = this.ol)
              : 0 !== this.Hn.length && (t = this.Hn[0].$()),
            null === t && (t = this.fl),
            t
          );
        }),
        (t.prototype.yl = function (t) {
          null !== t && t.fs() && this.Bl(t);
        }),
        (t.prototype.Ll = function (t) {
          var e = this.ul.mr();
          t.us({ _s: !0 }), null !== e && t.th(e), this.bl();
        }),
        (t.prototype.Fl = function () {
          this.Bl(this.ol), this.Bl(this.fl);
        }),
        (t.prototype.El = function () {
          var t = this;
          this.yl(this.ol),
            this.yl(this.fl),
            this.Hn.forEach(function (e) {
              t.Uu(e) && t.yl(e.$());
            }),
            this.bl(),
            this.hi.Or();
        }),
        (t.prototype.Os = function () {
          return null === this.Yn && (this.Yn = ec(this.Hn)), this.Yn;
        }),
        (t.prototype.Vl = function () {
          return this.el;
        }),
        (t.prototype.Ol = function () {
          return this.al;
        }),
        (t.prototype.Bl = function (t) {
          var e = t.Qs();
          if (e && e.length > 0 && !this.ul.ti()) {
            var i = this.ul.mr();
            null !== i && t.th(i);
          }
          t.Ii();
        }),
        (t.prototype.pl = function () {
          var t = this.Os();
          if (0 === t.length) return { Wl: 0, ml: 0 };
          for (var e = 0, i = 0, n = 0; n < t.length; n++) {
            var r = t[n].oi();
            null !== r && (r < e && (e = r), r > i && (i = r));
          }
          return { Wl: e, ml: i };
        }),
        (t.prototype.gl = function (t, e, i) {
          var n = this._l(e);
          if (
            (null === n && (n = this.ll(e, this.hi.ct().overlayPriceScales)),
            this.Hn.push(t),
            !Lc(e))
          ) {
            var r = this.hl.get(e) || [];
            r.push(t), this.hl.set(e, r);
          }
          n.Ws(t), t.fi(n), t.li(i), this.yl(n), (this.Yn = null);
        }),
        (t.prototype.cl = function (t, e, i) {
          e.os !== i.os && this.Bl(t);
        }),
        (t.prototype.ll = function (t, e) {
          var i = Ih({ visible: !0, autoScale: !0 }, iu(e)),
            n = new sc(t, i, this.hi.ct().layout, this.hi.ct().localization);
          return n.ps(this.Mt()), n;
        }),
        t
      );
    })(),
    Hp = (function (t) {
      function e(e) {
        var i = t.call(this) || this;
        return (i.zl = new Map()), (i.tt = e), i;
      }
      return (
        Vh(e, t),
        (e.prototype.u = function (t) {}),
        (e.prototype.l = function (t) {
          if (this.tt.U) {
            t.save();
            for (var e = 0, i = 0, n = this.tt.Pl; i < n.length; i++)
              if (0 !== (l = n[i]).Et.length) {
                t.font = l.Nt;
                var r = this.Rl(t, l.Et);
                r > this.tt.wt ? (l.Ur = this.tt.wt / r) : (l.Ur = 1),
                  (e += l.Il * l.Ur);
              }
            var o = 0;
            switch (this.tt.jl) {
              case "top":
                o = 0;
                break;
              case "center":
                o = Math.max((this.tt.Mt - e) / 2, 0);
                break;
              case "bottom":
                o = Math.max(this.tt.Mt - e, 0);
            }
            t.fillStyle = this.tt.et;
            for (var s = 0, a = this.tt.Pl; s < a.length; s++) {
              var l = a[s];
              t.save();
              var h = 0;
              switch (this.tt.ql) {
                case "left":
                  (t.textAlign = "left"), (h = l.Il / 2);
                  break;
                case "center":
                  (t.textAlign = "center"), (h = this.tt.wt / 2);
                  break;
                case "right":
                  (t.textAlign = "right"), (h = this.tt.wt - 1 - l.Il / 2);
              }
              t.translate(h, o),
                (t.textBaseline = "top"),
                (t.font = l.Nt),
                t.scale(l.Ur, l.Ur),
                t.fillText(l.Et, 0, l.Ul),
                t.restore(),
                (o += l.Il * l.Ur);
            }
            t.restore();
          }
        }),
        (e.prototype.Rl = function (t, e) {
          var i = this.Hl(t.font),
            n = i.get(e);
          return void 0 === n && ((n = t.measureText(e).width), i.set(e, n)), n;
        }),
        (e.prototype.Hl = function (t) {
          var e = this.zl.get(t);
          return void 0 === e && ((e = new Map()), this.zl.set(t, e)), e;
        }),
        e
      );
    })(su),
    Fp = (function () {
      function t(t) {
        (this.L = !0),
          (this.at = {
            U: !1,
            et: "",
            Mt: 0,
            wt: 0,
            Pl: [],
            jl: "center",
            ql: "center",
          }),
          (this.ot = new Hp(this.at)),
          (this.lt = t);
      }
      return (
        (t.prototype.O = function () {
          this.L = !0;
        }),
        (t.prototype.P = function (t, e) {
          return this.L && (this.R(t, e), (this.L = !1)), this.ot;
        }),
        (t.prototype.R = function (t, e) {
          var i = this.lt.ct(),
            n = this.at;
          (n.U = i.visible),
            n.U &&
              ((n.et = i.color),
              (n.wt = e),
              (n.Mt = t),
              (n.ql = i.horzAlign),
              (n.jl = i.vertAlign),
              (n.Pl = [
                {
                  Et: i.text,
                  Nt: Sc(i.fontSize, i.fontFamily, i.fontStyle),
                  Il: 1.2 * i.fontSize,
                  Ul: 0,
                  Ur: 0,
                },
              ]));
        }),
        t
      );
    })(),
    Up = (function (t) {
      function e(e, i) {
        var n = t.call(this) || this;
        return (n.ki = i), (n.Ai = new Fp(n)), n;
      }
      return (
        Vh(e, t),
        (e.prototype.Pi = function () {
          return [];
        }),
        (e.prototype.zi = function () {
          return [this.Ai];
        }),
        (e.prototype.ct = function () {
          return this.ki;
        }),
        (e.prototype.Ii = function () {
          this.Ai.O();
        }),
        e
      );
    })(Ou),
    Vp = (function () {
      function t(t, e) {
        (this.Yl = []),
          (this.Kl = []),
          (this.$h = 0),
          (this.$l = null),
          (this.Xl = null),
          (this.Zl = new Bu()),
          (this.Jl = new Bu()),
          (this.Gl = null),
          (this.Ql = t),
          (this.ki = e),
          (this.tf = new Cc(this)),
          (this.ul = new xc(this, e.timeScale, this.ki.localization)),
          (this.V = new Eu(this, e.crosshair)),
          (this.if = new Np(e.crosshair)),
          (this.nf = new Up(this, e.watermark)),
          this.sf(),
          this.Yl[0].Ml(2e3),
          (this.hf = this.rf(0)),
          (this.ef = this.rf(1));
      }
      return (
        (t.prototype.uf = function () {
          this.af(new Dc(3));
        }),
        (t.prototype.Or = function () {
          this.af(new Dc(2));
        }),
        (t.prototype.jo = function () {
          this.af(new Dc(1));
        }),
        (t.prototype.Fo = function (t) {
          var e = this.lf(t);
          this.af(e);
        }),
        (t.prototype.ff = function () {
          return this.Xl;
        }),
        (t.prototype.cf = function (t) {
          var e = this.Xl;
          (this.Xl = t),
            null !== e && this.Fo(e.vf),
            null !== t && this.Fo(t.vf);
        }),
        (t.prototype.ct = function () {
          return this.ki;
        }),
        (t.prototype.rs = function (t) {
          Zh(this.ki, t),
            this.Yl.forEach(function (e) {
              return e.vl(t);
            }),
            void 0 !== t.timeScale && this.ul.rs(t.timeScale),
            void 0 !== t.localization && this.ul.cr(t.localization),
            (t.leftPriceScale || t.rightPriceScale) && this.Zl.hn(),
            (this.hf = this.rf(0)),
            (this.ef = this.rf(1)),
            this.uf();
        }),
        (t.prototype._f = function (t, e) {
          var i = this.df(t);
          null !== i && (i.$.rs(e), this.Zl.hn());
        }),
        (t.prototype.df = function (t) {
          for (var e = 0, i = this.Yl; e < i.length; e++) {
            var n = i[e],
              r = n._l(t);
            if (null !== r) return { ft: n, $: r };
          }
          return null;
        }),
        (t.prototype.j = function () {
          return this.ul;
        }),
        (t.prototype.wf = function () {
          return this.Yl;
        }),
        (t.prototype.Mf = function () {
          return this.nf;
        }),
        (t.prototype.bf = function () {
          return this.V;
        }),
        (t.prototype.mf = function () {
          return this.Jl;
        }),
        (t.prototype.pf = function (t, e) {
          t.ps(e), this.Vr();
        }),
        (t.prototype.Dr = function (t) {
          (this.$h = t),
            this.ul.Dr(this.$h),
            this.Yl.forEach(function (e) {
              return e.Dr(t);
            }),
            this.Vr();
        }),
        (t.prototype.sf = function (t) {
          var e = new zp(this.ul, this);
          void 0 !== t ? this.Yl.splice(t, 0, e) : this.Yl.push(e);
          var i = void 0 === t ? this.Yl.length - 1 : t,
            n = new Dc(3);
          return n.be(i, { me: 0, _s: !0 }), this.af(n), e;
        }),
        (t.prototype.Nl = function (t, e, i) {
          t.Nl(e, i);
        }),
        (t.prototype.xl = function (t, e, i) {
          t.xl(e, i), this.Eo(), this.af(this.gf(t, 2));
        }),
        (t.prototype.Sl = function (t, e) {
          t.Sl(e), this.af(this.gf(t, 2));
        }),
        (t.prototype.Dl = function (t, e, i) {
          e.fs() || t.Dl(e, i);
        }),
        (t.prototype.Al = function (t, e, i) {
          e.fs() || (t.Al(e, i), this.Eo(), this.af(this.gf(t, 2)));
        }),
        (t.prototype.Tl = function (t, e) {
          e.fs() || (t.Tl(e), this.af(this.gf(t, 2)));
        }),
        (t.prototype.Ll = function (t, e) {
          t.Ll(e), this.af(this.gf(t, 2));
        }),
        (t.prototype.yf = function (t) {
          this.ul.js(t);
        }),
        (t.prototype.kf = function (t, e) {
          var i = this.j();
          if (!i.ti() && 0 !== e) {
            var n = i.wt();
            (t = Math.max(1, Math.min(t, n))), i.Ur(t, e), this.Vr();
          }
        }),
        (t.prototype.Cf = function (t) {
          this.Nf(0), this.xf(t), this.Sf();
        }),
        (t.prototype.Df = function (t) {
          this.ul.qs(t), this.Vr();
        }),
        (t.prototype.Af = function () {
          this.ul.Us(), this.Or();
        }),
        (t.prototype.Nf = function (t) {
          (this.$l = t), this.ul.Hs(t);
        }),
        (t.prototype.xf = function (t) {
          var e = !1;
          return (
            null !== this.$l &&
              Math.abs(t - this.$l) > 20 &&
              ((this.$l = null), (e = !0)),
            this.ul.Ys(t),
            this.Vr(),
            e
          );
        }),
        (t.prototype.Sf = function () {
          this.ul.Ks(), this.Or(), (this.$l = null);
        }),
        (t.prototype.W = function () {
          return this.Kl;
        }),
        (t.prototype.Tf = function (t, e, i) {
          this.V.Ti(t, e);
          var n = NaN,
            r = this.ul.Fr(t),
            o = this.ul.mr();
          null !== o && (r = Math.min(Math.max(o.hh(), r), o.rh()));
          var s = i.xi(),
            a = s.H();
          null !== a && (n = s.Si(e, a)),
            (n = this.if.$o(n, r, i)),
            this.V.Ei(r, n, i),
            this.jo(),
            this.Jl.hn(this.V.I(), { x: t, y: e });
        }),
        (t.prototype.Bf = function () {
          this.bf().Oi(), this.jo(), this.Jl.hn(null, null);
        }),
        (t.prototype.Eo = function () {
          var t = this.V.ft();
          if (null !== t) {
            var e = this.V.Li(),
              i = this.V.Fi();
            this.Tf(e, i, t);
          }
          this.V.Ii();
        }),
        (t.prototype.Lf = function (t, e, i) {
          var n = this.ul.ri(0);
          void 0 !== e && void 0 !== i && this.ul.O(e, i);
          var r = this.ul.ri(0),
            o = this.ul.Br(),
            s = this.ul.mr();
          if (null !== s && null !== n && null !== r) {
            var a = s.Eh(o),
              l = n.Dh > r.Dh,
              h = null !== t && t > o && !l,
              u = a && this.ul.ct().shiftVisibleRangeOnNewBar;
            if (h && !u) {
              var c = t - o;
              this.ul.Mr(this.ul.Pr() - c);
            }
          }
          this.ul.qr(t);
        }),
        (t.prototype.Oo = function (t) {
          null !== t && t.El();
        }),
        (t.prototype.qu = function (t) {
          var e = this.Yl.find(function (e) {
            return e.Os().includes(t);
          });
          return void 0 === e ? null : e;
        }),
        (t.prototype.Vr = function () {
          this.nf.Ii(),
            this.Yl.forEach(function (t) {
              return t.El();
            }),
            this.Eo();
        }),
        (t.prototype.en = function () {
          this.Yl.forEach(function (t) {
            return t.en();
          }),
            (this.Yl.length = 0),
            (this.ki.localization.priceFormatter = void 0),
            (this.ki.localization.timeFormatter = void 0);
        }),
        (t.prototype.Ff = function () {
          return this.tf;
        }),
        (t.prototype.Yu = function () {
          return this.tf.ct();
        }),
        (t.prototype.dl = function () {
          return this.Zl;
        }),
        (t.prototype.Ef = function (t, e) {
          var i = this.Yl[0],
            n = this.Vf(e, t, i);
          return (
            this.Kl.push(n), 1 === this.Kl.length ? this.uf() : this.Or(), n
          );
        }),
        (t.prototype.Of = function (t) {
          var e = this.qu(t),
            i = this.Kl.indexOf(t);
          Xh(-1 !== i, "Series not found"),
            this.Kl.splice(i, 1),
            Jh(e).Ps(t),
            t.en && t.en();
        }),
        (t.prototype.Lo = function (t, e) {
          var i = Jh(this.qu(t));
          i.Ps(t);
          var n = this.df(e);
          if (null === n) {
            var r = t.oi();
            i.Ws(t, e, r);
          } else (r = n.ft === i ? t.oi() : void 0), n.ft.Ws(t, e, r);
        }),
        (t.prototype.Qr = function () {
          var t = new Dc(2);
          t.ye(), this.af(t);
        }),
        (t.prototype.Wf = function (t) {
          var e = new Dc(2);
          e.Ce(t), this.af(e);
        }),
        (t.prototype.Ne = function () {
          var t = new Dc(2);
          t.Ne(), this.af(t);
        }),
        (t.prototype.wr = function (t) {
          var e = new Dc(2);
          e.wr(t), this.af(e);
        }),
        (t.prototype.Mr = function (t) {
          var e = new Dc(2);
          e.Mr(t), this.af(e);
        }),
        (t.prototype.zf = function () {
          return this.ki.rightPriceScale.visible ? "right" : "left";
        }),
        (t.prototype.Pf = function () {
          return this.ef;
        }),
        (t.prototype.Rf = function () {
          return this.hf;
        }),
        (t.prototype.J = function (t) {
          var e = this.ef,
            i = this.hf;
          if (e === i) return e;
          if (
            ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
            null === this.Gl || this.Gl.Ve !== i || this.Gl.Oe !== e)
          )
            this.Gl = { Ve: i, Oe: e, If: new Map() };
          else {
            var n = this.Gl.If.get(t);
            if (void 0 !== n) return n;
          }
          var r = (function (t, e, i) {
            var n = bu(t),
              r = n[0],
              o = n[1],
              s = n[2],
              a = n[3],
              l = bu(e),
              h = l[0],
              u = l[1],
              c = l[2],
              p = l[3],
              f = [
                du(r + i * (h - r)),
                du(o + i * (u - o)),
                du(s + i * (c - s)),
                vu(a + i * (p - a)),
              ];
            return (
              "rgba(" + f[0] + ", " + f[1] + ", " + f[2] + ", " + f[3] + ")"
            );
          })(i, e, t / 100);
          return this.Gl.If.set(t, r), r;
        }),
        (t.prototype.gf = function (t, e) {
          var i = new Dc(e);
          if (null !== t) {
            var n = this.Yl.indexOf(t);
            i.be(n, { me: e });
          }
          return i;
        }),
        (t.prototype.lf = function (t, e) {
          return void 0 === e && (e = 2), this.gf(this.qu(t), e);
        }),
        (t.prototype.af = function (t) {
          this.Ql && this.Ql(t),
            this.Yl.forEach(function (t) {
              return t.Ol().sl().O();
            });
        }),
        (t.prototype.Vf = function (t, e, i) {
          var n = new Pp(this, t, e),
            r = void 0 !== t.priceScaleId ? t.priceScaleId : this.zf();
          return i.Ws(n, r), Lc(r) || n.rs(t), n;
        }),
        (t.prototype.rf = function (t) {
          var e = this.ki.layout;
          return "gradient" === e.background.type
            ? 0 === t
              ? e.background.topColor
              : e.background.bottomColor
            : e.background.color;
        }),
        t
      );
    })(),
    Ip = (function () {
      function t(t, e) {
        (this.st = t), (this.ht = e);
      }
      return (
        (t.prototype.on = function (t) {
          return this.st === t.st && this.ht === t.ht;
        }),
        t
      );
    })();
  function qp(t) {
    return (
      (t.ownerDocument &&
        t.ownerDocument.defaultView &&
        t.ownerDocument.defaultView.devicePixelRatio) ||
      1
    );
  }
  function Xp(t) {
    var e = Jh(t.getContext("2d"));
    return e.setTransform(1, 0, 0, 1, 0, 0), e;
  }
  function Gp(t, e) {
    var i = t.createElement("canvas"),
      n = qp(i);
    return (
      (i.style.width = e.st + "px"),
      (i.style.height = e.ht + "px"),
      (i.width = e.st * n),
      (i.height = e.ht * n),
      i
    );
  }
  function Jp(t, e) {
    var i = Jh(t.ownerDocument).createElement("canvas");
    t.appendChild(i);
    var n,
      r = (void 0 === n && (n = Nh), new zh(i, n));
    return r.resizeCanvas({ width: e.st, height: e.ht }), r;
  }
  function Yp(t, e) {
    return t.jf - e.jf;
  }
  function Zp(t, e, i) {
    var n = (t.jf - e.jf) / (t.S - e.S);
    return Math.sign(n) * Math.min(Math.abs(n), i);
  }
  var Kp = (function () {
      function t(t, e, i, n) {
        (this.qf = null),
          (this.Uf = null),
          (this.Hf = null),
          (this.Yf = null),
          (this.Kf = null),
          (this.$f = 0),
          (this.Xf = 0),
          (this.Zf = !1),
          (this.Jf = t),
          (this.Gf = e),
          (this.Qf = i),
          (this.Yi = n);
      }
      return (
        (t.prototype.tc = function (t, e) {
          if (null !== this.qf) {
            if (this.qf.S === e) return void (this.qf.jf = t);
            if (Math.abs(this.qf.jf - t) < this.Yi) return;
          }
          (this.Yf = this.Hf),
            (this.Hf = this.Uf),
            (this.Uf = this.qf),
            (this.qf = { S: e, jf: t });
        }),
        (t.prototype.ia = function (t, e) {
          if (null !== this.qf && null !== this.Uf && !(e - this.qf.S > 50)) {
            var i = 0,
              n = Zp(this.qf, this.Uf, this.Gf),
              r = Yp(this.qf, this.Uf),
              o = [n],
              s = [r];
            if (((i += r), null !== this.Hf)) {
              var a = Zp(this.Uf, this.Hf, this.Gf);
              if (Math.sign(a) === Math.sign(n)) {
                var l = Yp(this.Uf, this.Hf);
                if ((o.push(a), s.push(l), (i += l), null !== this.Yf)) {
                  var h = Zp(this.Hf, this.Yf, this.Gf);
                  if (Math.sign(h) === Math.sign(n)) {
                    var u = Yp(this.Hf, this.Yf);
                    o.push(h), s.push(u), (i += u);
                  }
                }
              }
            }
            for (var c, p, f, d = 0, v = 0; v < o.length; ++v)
              d += (s[v] / i) * o[v];
            Math.abs(d) < this.Jf ||
              ((this.Kf = { jf: t, S: e }),
              (this.Xf = d),
              (this.$f =
                ((c = Math.abs(d)),
                (p = this.Qf),
                (f = Math.log(p)),
                Math.log((1 * f) / -c) / f)));
          }
        }),
        (t.prototype.ic = function (t) {
          var e = Jh(this.Kf),
            i = t - e.S;
          return (
            e.jf + (this.Xf * (Math.pow(this.Qf, i) - 1)) / Math.log(this.Qf)
          );
        }),
        (t.prototype.nc = function (t) {
          return null === this.Kf || this.sc(t) === this.$f;
        }),
        (t.prototype.hc = function () {
          return this.Zf;
        }),
        (t.prototype.rc = function () {
          this.Zf = !0;
        }),
        (t.prototype.sc = function (t) {
          var e = t - Jh(this.Kf).S;
          return Math.min(e, this.$f);
        }),
        t
      );
    })(),
    Qp = "undefined" != typeof window,
    tf = (function () {
      if (!Qp) return !1;
      var t =
        !!navigator.maxTouchPoints ||
        !!navigator.msMaxTouchPoints ||
        (!!Qp &&
          ("ontouchstart" in window ||
            Boolean(
              window.DocumentTouch && document instanceof window.DocumentTouch
            )));
      return "onorientationchange" in window && t;
    })(),
    ef = (function () {
      if (!Qp) return !1;
      var t = /Android/i.test(navigator.userAgent),
        e = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
      return t || e;
    })(),
    nf = (function () {
      function t(t, e, i) {
        (this.ec = 0),
          (this.uc = null),
          (this.ac = null),
          (this.oc = !1),
          (this.lc = null),
          (this.fc = !1),
          (this.cc = !1),
          (this.vc = null),
          (this._c = null),
          (this.dc = null),
          (this.wc = null),
          (this.Mc = 0),
          (this.bc = !1),
          (this.mc = !1),
          (this.gc = !1),
          (this.yc = t),
          (this.kc = e),
          (this.ki = i),
          this.Cc();
      }
      return (
        (t.prototype.en = function () {
          null !== this.vc && (this.vc(), (this.vc = null)),
            null !== this._c && (this._c(), (this._c = null)),
            null !== this.dc && (this.dc(), (this.dc = null)),
            this.Nc(),
            this.xc();
        }),
        (t.prototype.Sc = function (t) {
          var e = this;
          this._c && this._c();
          var i = this.Dc.bind(this);
          (this._c = function () {
            e.yc.removeEventListener("mousemove", i);
          }),
            this.yc.addEventListener("mousemove", i),
            sf(t) && this.Dc(t);
          var n = this.Ac(t);
          this.Tc(n, this.kc.Bc);
        }),
        (t.prototype.xc = function () {
          null !== this.uc && clearTimeout(this.uc),
            (this.ec = 0),
            (this.uc = null);
        }),
        (t.prototype.Dc = function (t) {
          if (!this.gc || sf(t)) {
            var e = this.Ac(t);
            this.Tc(e, this.kc.Lc);
          }
        }),
        (t.prototype.Fc = function (t) {
          if ((!("button" in t) || 0 === t.button) && null === this.wc) {
            var e = sf(t);
            if (!this.mc || !e) {
              this.bc = !0;
              var i = this.Ac(t),
                n = Yh(this.lc),
                r = Math.abs(n.p - i.Ec),
                o = Math.abs(n.g - i.Vc),
                s = r + o > 5;
              if (s || !e) {
                if (s && !this.fc && e) {
                  var a = 0.5 * r,
                    l = o >= a && !this.ki.Oc,
                    h = a > o && !this.ki.Wc;
                  l || h || (this.mc = !0);
                }
                s && ((this.fc = !0), (this.cc = !0), e && this.Nc()),
                  this.mc || (this.Tc(i, this.kc.zc), e && af(t));
              }
            }
          }
        }),
        (t.prototype.Pc = function (t) {
          if (!("button" in t) || 0 === t.button) {
            var e = this.Ac(t);
            this.Nc(),
              (this.lc = null),
              (this.gc = !1),
              this.dc && (this.dc(), (this.dc = null)),
              sf(t) && this.Rc(t),
              this.Tc(e, this.kc.Ic),
              ++this.ec,
              this.uc && this.ec > 1
                ? (this.Tc(e, this.kc.jc), this.xc())
                : this.cc || this.Tc(e, this.kc.qc),
              sf(t) &&
                (af(t), this.Rc(t), 0 === t.touches.length && (this.oc = !1));
          }
        }),
        (t.prototype.Nc = function () {
          null !== this.ac && (clearTimeout(this.ac), (this.ac = null));
        }),
        (t.prototype.Uc = function (t) {
          if (!("button" in t) || 0 === t.button) {
            var e = this.Ac(t);
            (this.cc = !1),
              (this.fc = !1),
              (this.mc = !1),
              sf(t) && this.Sc(t),
              (this.lc = { p: e.Ec, g: e.Vc }),
              this.dc && (this.dc(), (this.dc = null));
            var i = this.Fc.bind(this),
              n = this.Pc.bind(this),
              r = this.yc.ownerDocument.documentElement;
            (this.dc = function () {
              r.removeEventListener("touchmove", i),
                r.removeEventListener("touchend", n),
                r.removeEventListener("mousemove", i),
                r.removeEventListener("mouseup", n);
            }),
              r.addEventListener("touchmove", i, { passive: !1 }),
              r.addEventListener("touchend", n, { passive: !1 }),
              this.Nc(),
              sf(t) && 1 === t.touches.length
                ? (this.ac = setTimeout(this.Hc.bind(this, t), 240))
                : (r.addEventListener("mousemove", i),
                  r.addEventListener("mouseup", n)),
              (this.gc = !0),
              this.Tc(e, this.kc.Yc),
              this.uc ||
                ((this.ec = 0),
                (this.uc = setTimeout(this.xc.bind(this), 500)));
          }
        }),
        (t.prototype.Cc = function () {
          var t = this;
          this.yc.addEventListener("mouseenter", this.Sc.bind(this)),
            this.yc.addEventListener("touchcancel", this.Nc.bind(this));
          var e = this.yc.ownerDocument,
            i = function (e) {
              t.kc.Kc &&
                ((e.composed && t.yc.contains(e.composedPath()[0])) ||
                  (e.target && t.yc.contains(e.target)) ||
                  t.kc.Kc());
            };
          (this.vc = function () {
            e.removeEventListener("mousedown", i),
              e.removeEventListener("touchstart", i);
          }),
            e.addEventListener("mousedown", i),
            e.addEventListener("touchstart", i, { passive: !0 }),
            this.yc.addEventListener("mouseleave", this.Rc.bind(this)),
            this.yc.addEventListener("touchstart", this.Uc.bind(this), {
              passive: !0,
            }),
            tf || this.yc.addEventListener("mousedown", this.Uc.bind(this)),
            this.$c(),
            this.yc.addEventListener("touchmove", function () {}, {
              passive: !1,
            });
        }),
        (t.prototype.$c = function () {
          var t = this;
          (void 0 === this.kc.Xc &&
            void 0 === this.kc.Zc &&
            void 0 === this.kc.Jc) ||
            (this.yc.addEventListener(
              "touchstart",
              function (e) {
                return t.Gc(e.touches);
              },
              { passive: !0 }
            ),
            this.yc.addEventListener(
              "touchmove",
              function (e) {
                if (
                  2 === e.touches.length &&
                  null !== t.wc &&
                  void 0 !== t.kc.Zc
                ) {
                  var i = of(e.touches[0], e.touches[1]) / t.Mc;
                  t.kc.Zc(t.wc, i), af(e);
                }
              },
              { passive: !1 }
            ),
            this.yc.addEventListener("touchend", function (e) {
              t.Gc(e.touches);
            }));
        }),
        (t.prototype.Gc = function (t) {
          1 === t.length && (this.bc = !1),
            2 !== t.length || this.bc || this.oc ? this.Qc() : this.tv(t);
        }),
        (t.prototype.tv = function (t) {
          var e = rf(this.yc);
          (this.wc = {
            p: (t[0].clientX - e.left + (t[1].clientX - e.left)) / 2,
            g: (t[0].clientY - e.top + (t[1].clientY - e.top)) / 2,
          }),
            (this.Mc = of(t[0], t[1])),
            void 0 !== this.kc.Xc && this.kc.Xc(),
            this.Nc();
        }),
        (t.prototype.Qc = function () {
          null !== this.wc &&
            ((this.wc = null), void 0 !== this.kc.Jc && this.kc.Jc());
        }),
        (t.prototype.Rc = function (t) {
          this._c && this._c();
          var e = this.Ac(t);
          this.Tc(e, this.kc.iv);
        }),
        (t.prototype.Hc = function (t) {
          var e = this.Ac(t);
          this.Tc(e, this.kc.nv), (this.cc = !0), (this.oc = !0);
        }),
        (t.prototype.Tc = function (t, e) {
          e && e.call(this.kc, t);
        }),
        (t.prototype.Ac = function (t) {
          var e;
          e =
            "touches" in t && t.touches.length
              ? t.touches[0]
              : "changedTouches" in t && t.changedTouches.length
              ? t.changedTouches[0]
              : t;
          var i = rf(this.yc);
          return {
            sv: e.clientX,
            hv: e.clientY,
            Ec: e.pageX,
            Vc: e.pageY,
            rv: e.screenX,
            ev: e.screenY,
            uv: e.clientX - i.left,
            av: e.clientY - i.top,
            ov: t.ctrlKey,
            lv: t.altKey,
            fv: t.shiftKey,
            cv: t.metaKey,
            ke: t.type.startsWith("mouse") ? "mouse" : "touch",
            vv: t.view,
          };
        }),
        t
      );
    })();
  function rf(t) {
    return t.getBoundingClientRect() || { left: 0, top: 0 };
  }
  function of(t, e) {
    var i = t.clientX - e.clientX,
      n = t.clientY - e.clientY;
    return Math.sqrt(i * i + n * n);
  }
  function sf(t) {
    return Boolean(t.touches);
  }
  function af(t) {
    t.cancelable && t.preventDefault();
  }
  var lf = (function () {
      function t(t, e, i, n) {
        (this.Pu = new ip(200)),
          (this.fe = 0),
          (this._v = ""),
          (this.ma = ""),
          (this.Vu = []),
          (this.dv = new Map()),
          (this.fe = t),
          (this._v = e),
          (this.ma = Sc(t, i, n));
      }
      return (
        (t.prototype.en = function () {
          this.Pu.Ou(), (this.Vu = []), this.dv.clear();
        }),
        (t.prototype.wv = function (t, e, i, n, r) {
          var o = this.Mv(t, e);
          if ("left" !== r) {
            var s = qp(t.canvas);
            i -= Math.floor(o.bv * s);
          }
          (n -= Math.floor(o.Mt / 2)), t.drawImage(o.mv, i, n, o.wt, o.Mt);
        }),
        (t.prototype.Mv = function (t, e) {
          var i,
            n = this;
          if (this.dv.has(e)) i = Gh(this.dv.get(e));
          else {
            if (this.Vu.length >= 200) {
              var r = Gh(this.Vu.shift());
              this.dv.delete(r);
            }
            var o = qp(t.canvas),
              s = Math.ceil(this.fe / 4.5),
              a = Math.round(this.fe / 10),
              l = Math.ceil(this.Pu.Vt(t, e)),
              h = Uu(Math.round(l + 2 * s)),
              u = Uu(this.fe + 2 * s),
              c = Gp(document, new Ip(h, u));
            (i = {
              Et: e,
              bv: Math.round(Math.max(1, l)),
              wt: Math.ceil(h * o),
              Mt: Math.ceil(u * o),
              mv: c,
            }),
              0 !== l && (this.Vu.push(i.Et), this.dv.set(i.Et, i)),
              _u((t = Xp(i.mv)), o, function () {
                (t.font = n.ma),
                  (t.fillStyle = n._v),
                  t.fillText(e, 0, u - s - a);
              });
          }
          return i;
        }),
        t
      );
    })(),
    hf = (function () {
      function t(t, e, i, n) {
        var r = this;
        (this.Gt = null),
          (this.pv = null),
          (this.gv = null),
          (this.yv = !1),
          (this.kv = new ip(50)),
          (this.Cv = new lf(11, "#000")),
          (this._v = null),
          (this.ma = null),
          (this.Nv = 0),
          (this.xv = function () {
            r.Sv(r.tf.ct()), r.vi.Dv().vt().Or();
          }),
          (this.Av = function () {
            r.vi.Dv().vt().Or();
          }),
          (this.vi = t),
          (this.ki = e),
          (this.tf = i),
          (this.Tv = "left" === n),
          (this.Bv = document.createElement("div")),
          (this.Bv.style.height = "100%"),
          (this.Bv.style.overflow = "hidden"),
          (this.Bv.style.width = "25px"),
          (this.Bv.style.left = "0"),
          (this.Bv.style.position = "relative"),
          (this.Lv = Jp(this.Bv, new Ip(16, 16))),
          this.Lv.subscribeCanvasConfigured(this.xv);
        var o = this.Lv.canvas;
        (o.style.position = "absolute"),
          (o.style.zIndex = "1"),
          (o.style.left = "0"),
          (o.style.top = "0"),
          (this.Fv = Jp(this.Bv, new Ip(16, 16))),
          this.Fv.subscribeCanvasConfigured(this.Av);
        var s = this.Fv.canvas;
        (s.style.position = "absolute"),
          (s.style.zIndex = "2"),
          (s.style.left = "0"),
          (s.style.top = "0");
        var a = {
          Yc: this.Ev.bind(this),
          zc: this.Vv.bind(this),
          Kc: this.Ov.bind(this),
          Ic: this.Wv.bind(this),
          jc: this.zv.bind(this),
          Bc: this.Pv.bind(this),
          iv: this.Rv.bind(this),
        };
        this.Iv = new nf(this.Fv.canvas, a, { Oc: !1, Wc: !0 });
      }
      return (
        (t.prototype.en = function () {
          this.Iv.en(),
            this.Fv.unsubscribeCanvasConfigured(this.Av),
            this.Fv.destroy(),
            this.Lv.unsubscribeCanvasConfigured(this.xv),
            this.Lv.destroy(),
            null !== this.Gt && this.Gt.Is().sn(this),
            (this.Gt = null),
            null !== this.gv && (clearTimeout(this.gv), (this.gv = null)),
            this.Cv.en();
        }),
        (t.prototype.jv = function () {
          return this.Bv;
        }),
        (t.prototype.N = function () {
          return Jh(this.Gt).ct().borderColor;
        }),
        (t.prototype.qv = function () {
          return this.ki.textColor;
        }),
        (t.prototype.Wt = function () {
          return this.ki.fontSize;
        }),
        (t.prototype.Uv = function () {
          return Sc(this.Wt(), this.ki.fontFamily);
        }),
        (t.prototype.Hv = function () {
          var t = this.tf.ct(),
            e = this._v !== t.et,
            i = this.ma !== t.Nt;
          return (
            (e || i) && (this.Sv(t), (this._v = t.et)),
            i && (this.kv.Ou(), (this.ma = t.Nt)),
            t
          );
        }),
        (t.prototype.Yv = function () {
          if (null === this.Gt) return 0;
          var t = 34,
            e = this.Hv(),
            i = Xp(this.Lv.canvas),
            n = this.Gt.Fn();
          (i.font = this.Uv()),
            n.length > 0 &&
              (t = Math.max(
                this.kv.Vt(i, n[0].Tn),
                this.kv.Vt(i, n[n.length - 1].Tn)
              ));
          for (var r = this.Kv(), o = r.length; o--; ) {
            var s = this.kv.Vt(i, r[o].Et());
            s > t && (t = s);
          }
          var a = this.Gt.H();
          if (null !== a && null !== this.pv) {
            var l = this.Gt.Si(1, a),
              h = this.Gt.Si(this.pv.ht - 2, a);
            t = Math.max(
              t,
              this.kv.Vt(
                i,
                this.Gt.ii(Math.floor(Math.min(l, h)) + 0.11111111111111, a)
              ),
              this.kv.Vt(
                i,
                this.Gt.ii(Math.ceil(Math.max(l, h)) - 0.11111111111111, a)
              )
            );
          }
          var u = Math.ceil(e.At + e.Dt + e.Lt + e.Ft + t);
          return u + (u % 2);
        }),
        (t.prototype.$v = function (t) {
          if (t.st < 0 || t.ht < 0)
            throw new Error(
              "Try to set invalid size to PriceAxisWidget " + JSON.stringify(t)
            );
          (null !== this.pv && this.pv.on(t)) ||
            ((this.pv = t),
            this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
            this.Fv.resizeCanvas({ width: t.st, height: t.ht }),
            (this.Bv.style.width = t.st + "px"),
            (this.Bv.style.height = t.ht + "px"),
            (this.Bv.style.minWidth = t.st + "px"));
        }),
        (t.prototype.Xv = function () {
          return Jh(this.pv).st;
        }),
        (t.prototype.fi = function (t) {
          this.Gt !== t &&
            (null !== this.Gt && this.Gt.Is().sn(this),
            (this.Gt = t),
            t.Is().Ji(this.qn.bind(this), this));
        }),
        (t.prototype.$ = function () {
          return this.Gt;
        }),
        (t.prototype.Ou = function () {
          var t = this.vi.Zv();
          this.vi.Dv().vt().Ll(t, Jh(this.$()));
        }),
        (t.prototype.Jv = function (t) {
          if (null !== this.pv) {
            if (1 !== t) {
              var e = Xp(this.Lv.canvas);
              this.Gv(),
                this.Qv(e, this.Lv.pixelRatio),
                this.yu(e, this.Lv.pixelRatio),
                this.t_(e, this.Lv.pixelRatio),
                this.i_(e, this.Lv.pixelRatio);
            }
            var i = Xp(this.Fv.canvas),
              n = this.pv.st,
              r = this.pv.ht;
            _u(i, this.Fv.pixelRatio, function () {
              i.clearRect(0, 0, n, r);
            }),
              this.n_(i, this.Fv.pixelRatio);
          }
        }),
        (t.prototype.s_ = function () {
          return this.Lv.canvas;
        }),
        (t.prototype.Ev = function (t) {
          if (
            null !== this.Gt &&
            !this.Gt.ti() &&
            this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
          ) {
            var e = this.vi.Dv().vt(),
              i = this.vi.Zv();
            (this.yv = !0), e.Nl(i, this.Gt, t.av);
          }
        }),
        (t.prototype.Vv = function (t) {
          if (
            null !== this.Gt &&
            this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
          ) {
            var e = this.vi.Dv().vt(),
              i = this.vi.Zv(),
              n = this.Gt;
            e.xl(i, n, t.av);
          }
        }),
        (t.prototype.Ov = function () {
          if (
            null !== this.Gt &&
            this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
          ) {
            var t = this.vi.Dv().vt(),
              e = this.vi.Zv(),
              i = this.Gt;
            this.yv && ((this.yv = !1), t.Sl(e, i));
          }
        }),
        (t.prototype.Wv = function (t) {
          if (
            null !== this.Gt &&
            this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
          ) {
            var e = this.vi.Dv().vt(),
              i = this.vi.Zv();
            (this.yv = !1), e.Sl(i, this.Gt);
          }
        }),
        (t.prototype.zv = function (t) {
          this.vi.Dv().ct().handleScale.axisDoubleClickReset && this.Ou();
        }),
        (t.prototype.Pv = function (t) {
          null !== this.Gt &&
            (!this.vi.Dv().vt().ct().handleScale.axisPressedMouseMove.price ||
              this.Gt.cs() ||
              this.Gt.vs() ||
              this.h_(1));
        }),
        (t.prototype.Rv = function (t) {
          this.h_(0);
        }),
        (t.prototype.Kv = function () {
          var t = this,
            e = [],
            i = null === this.Gt ? void 0 : this.Gt;
          return (
            (function (n) {
              for (var r = 0; r < n.length; ++r)
                for (var o = n[r].Pi(t.vi.Zv(), i), s = 0; s < o.length; s++)
                  e.push(o[s]);
            })(this.vi.Zv().Os()),
            e
          );
        }),
        (t.prototype.Qv = function (t, e) {
          var i = this;
          if (null !== this.pv) {
            var n = this.pv.st,
              r = this.pv.ht;
            _u(t, e, function () {
              var e = i.vi.Zv().vt(),
                o = e.Rf(),
                s = e.Pf();
              o === s ? Mu(t, 0, 0, n, r, o) : ku(t, 0, 0, n, r, o, s);
            });
          }
        }),
        (t.prototype.yu = function (t, e) {
          if (
            null !== this.pv &&
            null !== this.Gt &&
            this.Gt.ct().borderVisible
          ) {
            t.save(), (t.fillStyle = this.N());
            var i,
              n = Math.max(1, Math.floor(this.Hv().At * e));
            (i = this.Tv ? Math.floor(this.pv.st * e) - n : 0),
              t.fillRect(i, 0, n, Math.ceil(this.pv.ht * e)),
              t.restore();
          }
        }),
        (t.prototype.t_ = function (t, e) {
          if (null !== this.pv && null !== this.Gt) {
            var i = this.Gt.Fn();
            t.save(),
              (t.strokeStyle = this.N()),
              (t.font = this.Uv()),
              (t.fillStyle = this.N());
            var n = this.Hv(),
              r = this.Gt.ct().borderVisible && this.Gt.ct().drawTicks,
              o = this.Tv
                ? Math.floor((this.pv.st - n.Dt) * e - n.At * e)
                : Math.floor(n.At * e),
              s = this.Tv
                ? Math.round(o - n.Lt * e)
                : Math.round(o + n.Dt * e + n.Lt * e),
              a = this.Tv ? "right" : "left",
              l = Math.max(1, Math.floor(e)),
              h = Math.floor(0.5 * e);
            if (r) {
              var u = Math.round(n.Dt * e);
              t.beginPath();
              for (var c = 0, p = i; c < p.length; c++) {
                var f = p[c];
                t.rect(o, Math.round(f.An * e) - h, u, l);
              }
              t.fill();
            }
            t.fillStyle = this.qv();
            for (var d = 0, v = i; d < v.length; d++)
              (f = v[d]), this.Cv.wv(t, f.Tn, s, Math.round(f.An * e), a);
            t.restore();
          }
        }),
        (t.prototype.Gv = function () {
          if (null !== this.pv && null !== this.Gt) {
            var t = this.pv.ht / 2,
              e = [],
              i = this.Gt.Os().slice(),
              n = this.vi.Zv(),
              r = this.Hv();
            this.Gt === n.xi() &&
              this.vi
                .Zv()
                .Os()
                .forEach(function (t) {
                  n.Uu(t) && i.push(t);
                });
            var o = this.Gt.Vs()[0],
              s = this.Gt;
            i.forEach(function (i) {
              var r = i.Pi(n, s);
              r.forEach(function (t) {
                t.Kt(null), t.$t() && e.push(t);
              }),
                o === i && r.length > 0 && (t = r[0].zt());
            });
            var a = e.filter(function (e) {
                return e.zt() <= t;
              }),
              l = e.filter(function (e) {
                return e.zt() > t;
              });
            if (
              (a.sort(function (t, e) {
                return e.zt() - t.zt();
              }),
              a.length && l.length && l.push(a[0]),
              l.sort(function (t, e) {
                return t.zt() - e.zt();
              }),
              e.forEach(function (t) {
                return t.Kt(t.zt());
              }),
              this.Gt.ct().alignLabels)
            ) {
              for (var h = 1; h < a.length; h++) {
                var u = a[h],
                  c = (f = a[h - 1]).Mt(r, !1);
                u.zt() > (d = f.Yt()) - c && u.Kt(d - c);
              }
              for (var p = 1; p < l.length; p++) {
                var f, d;
                (u = l[p]),
                  (c = (f = l[p - 1]).Mt(r, !0)),
                  u.zt() < (d = f.Yt()) + c && u.Kt(d + c);
              }
            }
          }
        }),
        (t.prototype.i_ = function (t, e) {
          var i = this;
          if (null !== this.pv) {
            t.save();
            var n = this.pv,
              r = this.Kv(),
              o = this.Hv(),
              s = this.Tv ? "right" : "left";
            r.forEach(function (r) {
              if (r.Xt()) {
                var a = r.P(Jh(i.Gt));
                t.save(), a.h(t, o, i.kv, n.st, s, e), t.restore();
              }
            }),
              t.restore();
          }
        }),
        (t.prototype.n_ = function (t, e) {
          var i = this;
          if (null !== this.pv && null !== this.Gt) {
            t.save();
            var n = this.pv,
              r = this.vi.Dv().vt(),
              o = [],
              s = this.vi.Zv(),
              a = r.bf().Pi(s, this.Gt);
            a.length && o.push(a);
            var l = this.Hv(),
              h = this.Tv ? "right" : "left";
            o.forEach(function (r) {
              r.forEach(function (r) {
                t.save(), r.P(Jh(i.Gt)).h(t, l, i.kv, n.st, h, e), t.restore();
              });
            }),
              t.restore();
          }
        }),
        (t.prototype.h_ = function (t) {
          this.Bv.style.cursor = 1 === t ? "ns-resize" : "default";
        }),
        (t.prototype.qn = function () {
          var t = this,
            e = this.Yv();
          if (this.Nv < e) {
            var i = this.vi.Dv();
            null === this.gv &&
              (this.gv = setTimeout(function () {
                i && i.vt().uf(), (t.gv = null);
              }, 100));
          }
          this.Nv = e;
        }),
        (t.prototype.Sv = function (t) {
          this.Cv.en(), (this.Cv = new lf(t.Wt, t.et, t.le));
        }),
        t
      );
    })(),
    uf = ef;
  function cf(t, e, i, n, r) {
    t.o && t.o(e, i, n, r);
  }
  function pf(t, e, i, n, r) {
    t.h(e, i, n, r);
  }
  function ff(t, e) {
    return t.zi(e);
  }
  function df(t, e) {
    return void 0 !== t.Io ? t.Io(e) : [];
  }
  var vf = (function () {
      function t(t, e) {
        var i = this;
        (this.pv = new Ip(0, 0)),
          (this.r_ = null),
          (this.e_ = null),
          (this.u_ = null),
          (this.a_ = !1),
          (this.o_ = new Bu()),
          (this.l_ = 0),
          (this.f_ = !1),
          (this.c_ = null),
          (this.v_ = !1),
          (this.__ = null),
          (this.d_ = null),
          (this.xv = function () {
            return i.w_ && i.hi().Or();
          }),
          (this.Av = function () {
            return i.w_ && i.hi().Or();
          }),
          (this.M_ = t),
          (this.w_ = e),
          this.w_.Vl().Ji(this.b_.bind(this), this, !0),
          (this.m_ = document.createElement("td")),
          (this.m_.style.padding = "0"),
          (this.m_.style.position = "relative");
        var n = document.createElement("div");
        (n.style.width = "100%"),
          (n.style.height = "100%"),
          (n.style.position = "relative"),
          (n.style.overflow = "hidden"),
          (this.p_ = document.createElement("td")),
          (this.p_.style.padding = "0"),
          (this.g_ = document.createElement("td")),
          (this.g_.style.padding = "0"),
          this.m_.appendChild(n),
          (this.Lv = Jp(n, new Ip(16, 16))),
          this.Lv.subscribeCanvasConfigured(this.xv);
        var r = this.Lv.canvas;
        (r.style.position = "absolute"),
          (r.style.zIndex = "1"),
          (r.style.left = "0"),
          (r.style.top = "0"),
          (this.Fv = Jp(n, new Ip(16, 16))),
          this.Fv.subscribeCanvasConfigured(this.Av);
        var o = this.Fv.canvas;
        (o.style.position = "absolute"),
          (o.style.zIndex = "2"),
          (o.style.left = "0"),
          (o.style.top = "0"),
          (this.y_ = document.createElement("tr")),
          this.y_.appendChild(this.p_),
          this.y_.appendChild(this.m_),
          this.y_.appendChild(this.g_),
          this.k_();
        var s = this.Dv().ct().handleScroll;
        this.Iv = new nf(this.Fv.canvas, this, {
          Oc: !s.vertTouchDrag,
          Wc: !s.horzTouchDrag,
        });
      }
      return (
        (t.prototype.en = function () {
          null !== this.r_ && this.r_.en(),
            null !== this.e_ && this.e_.en(),
            this.Fv.unsubscribeCanvasConfigured(this.Av),
            this.Fv.destroy(),
            this.Lv.unsubscribeCanvasConfigured(this.xv),
            this.Lv.destroy(),
            null !== this.w_ && this.w_.Vl().sn(this),
            this.Iv.en();
        }),
        (t.prototype.Zv = function () {
          return Jh(this.w_);
        }),
        (t.prototype.C_ = function (e) {
          null !== this.w_ && this.w_.Vl().sn(this),
            (this.w_ = e),
            null !== this.w_ &&
              this.w_.Vl().Ji(t.prototype.b_.bind(this), this, !0),
            this.k_();
        }),
        (t.prototype.Dv = function () {
          return this.M_;
        }),
        (t.prototype.jv = function () {
          return this.y_;
        }),
        (t.prototype.k_ = function () {
          if (null !== this.w_ && (this.N_(), 0 !== this.hi().W().length)) {
            if (null !== this.r_) {
              var t = this.w_.kl();
              this.r_.fi(Jh(t));
            }
            if (null !== this.e_) {
              var e = this.w_.Cl();
              this.e_.fi(Jh(e));
            }
          }
        }),
        (t.prototype.wl = function () {
          return null !== this.w_ ? this.w_.wl() : 0;
        }),
        (t.prototype.Ml = function (t) {
          this.w_ && this.w_.Ml(t);
        }),
        (t.prototype.Bc = function (t) {
          if (this.w_) {
            var e = t.uv,
              i = t.av;
            tf || this.x_(e, i);
          }
        }),
        (t.prototype.Yc = function (t) {
          if (((this.f_ = !1), (this.v_ = null !== this.c_), this.w_)) {
            if (
              (this.S_(),
              document.activeElement !== document.body &&
                document.activeElement !== document.documentElement)
            )
              Jh(document.activeElement).blur();
            else {
              var e = document.getSelection();
              null !== e && e.removeAllRanges();
            }
            var i = this.hi();
            if (!this.w_.xi().ti() && !i.j().ti()) {
              if (null !== this.c_) {
                var n = i.bf();
                (this.__ = { x: n.bt(), y: n.gt() }),
                  (this.c_ = { x: t.uv, y: t.av });
              }
              tf || this.x_(t.uv, t.av);
            }
          }
        }),
        (t.prototype.Lc = function (t) {
          if (this.w_) {
            var e = t.uv,
              i = t.av;
            if ((this.D_() && this.A_(), !tf)) {
              this.x_(e, i);
              var n = this.pa(e, i);
              this.hi().cf(n && { vf: n.vf, T_: n.T_ });
            }
          }
        }),
        (t.prototype.qc = function (t) {
          if (null !== this.w_) {
            var e = t.uv,
              i = t.av;
            if (this.o_.rn()) {
              var n = this.hi().bf().I();
              this.o_.hn(n, { x: e, y: i });
            }
            this.B_();
          }
        }),
        (t.prototype.zc = function (t) {
          if (null !== this.w_) {
            var e = this.hi(),
              i = t.uv,
              n = t.av;
            if (null !== this.c_) {
              this.v_ = !1;
              var r = Jh(this.__),
                o = r.x + (i - this.c_.x),
                s = r.y + (n - this.c_.y);
              this.x_(o, s);
            } else this.D_() || this.x_(i, n);
            if (!e.j().ti()) {
              var a = this.M_.ct(),
                l = a.handleScroll,
                h = a.kineticScroll;
              if (
                (l.pressedMouseMove && "touch" !== t.ke) ||
                ((l.horzTouchDrag || l.vertTouchDrag) && "mouse" !== t.ke)
              ) {
                var u = this.w_.xi(),
                  c = performance.now();
                null !== this.u_ ||
                  this.L_() ||
                  (this.u_ = { x: t.sv, y: t.hv, Dh: c, uv: t.uv, av: t.av }),
                  null !== this.d_ && this.d_.tc(t.uv, c),
                  null === this.u_ ||
                    this.a_ ||
                    (this.u_.x === t.sv && this.u_.y === t.hv) ||
                    (null === this.d_ &&
                      (("touch" === t.ke && h.touch) ||
                        ("mouse" === t.ke && h.mouse)) &&
                      ((this.d_ = new Kp(0.2, 7, 0.997, 15)),
                      this.d_.tc(this.u_.uv, this.u_.Dh),
                      this.d_.tc(t.uv, c)),
                    u.ti() || e.Dl(this.w_, u, t.av),
                    e.Nf(t.uv),
                    (this.a_ = !0)),
                  this.a_ && (u.ti() || e.Al(this.w_, u, t.av), e.xf(t.uv));
              }
            }
          }
        }),
        (t.prototype.Ic = function (t) {
          null !== this.w_ && ((this.f_ = !1), this.F_(t));
        }),
        (t.prototype.nv = function (t) {
          if (((this.f_ = !0), null === this.c_ && uf)) {
            var e = { x: t.uv, y: t.av };
            this.E_(e, e);
          }
        }),
        (t.prototype.iv = function (t) {
          null !== this.w_ && (this.w_.vt().cf(null), ef || this.A_());
        }),
        (t.prototype.V_ = function () {
          return this.o_;
        }),
        (t.prototype.Xc = function () {
          (this.l_ = 1), this.S_();
        }),
        (t.prototype.Zc = function (t, e) {
          if (this.M_.ct().handleScale.pinch) {
            var i = 5 * (e - this.l_);
            (this.l_ = e), this.hi().kf(t.p, i);
          }
        }),
        (t.prototype.pa = function (t, e) {
          var i = this.w_;
          if (null === i) return null;
          for (var n = 0, r = i.Os(); n < r.length; n++) {
            var o = r[n],
              s = this.O_(o.zi(i), t, e);
            if (null !== s) return { vf: o, vv: s.vv, T_: s.T_ };
          }
          return null;
        }),
        (t.prototype.W_ = function (t, e) {
          Jh("left" === e ? this.r_ : this.e_).$v(new Ip(t, this.pv.ht));
        }),
        (t.prototype.z_ = function () {
          return this.pv;
        }),
        (t.prototype.$v = function (t) {
          if (t.st < 0 || t.ht < 0)
            throw new Error(
              "Try to set invalid size to PaneWidget " + JSON.stringify(t)
            );
          this.pv.on(t) ||
            ((this.pv = t),
            this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
            this.Fv.resizeCanvas({ width: t.st, height: t.ht }),
            (this.m_.style.width = t.st + "px"),
            (this.m_.style.height = t.ht + "px"));
        }),
        (t.prototype.P_ = function () {
          var t = Jh(this.w_);
          t.yl(t.kl()), t.yl(t.Cl());
          for (var e = 0, i = t.Vs(); e < i.length; e++) {
            var n = i[e];
            if (t.Uu(n)) {
              var r = n.$();
              null !== r && t.yl(r), n.Ii();
            }
          }
        }),
        (t.prototype.s_ = function () {
          return this.Lv.canvas;
        }),
        (t.prototype.Jv = function (t) {
          if (0 !== t && null !== this.w_) {
            if (
              (t > 1 && this.P_(),
              null !== this.r_ && this.r_.Jv(t),
              null !== this.e_ && this.e_.Jv(t),
              1 !== t)
            ) {
              var e = Xp(this.Lv.canvas);
              e.save(),
                this.Qv(e, this.Lv.pixelRatio),
                this.w_ &&
                  (this.R_(e, this.Lv.pixelRatio),
                  this.I_(e, this.Lv.pixelRatio),
                  this.j_(e, this.Lv.pixelRatio, ff)),
                e.restore();
            }
            var i = Xp(this.Fv.canvas);
            i.clearRect(
              0,
              0,
              Math.ceil(this.pv.st * this.Fv.pixelRatio),
              Math.ceil(this.pv.ht * this.Fv.pixelRatio)
            ),
              this.j_(i, this.Lv.pixelRatio, df),
              this.q_(i, this.Fv.pixelRatio);
          }
        }),
        (t.prototype.U_ = function () {
          return this.r_;
        }),
        (t.prototype.H_ = function () {
          return this.e_;
        }),
        (t.prototype.b_ = function () {
          null !== this.w_ && this.w_.Vl().sn(this), (this.w_ = null);
        }),
        (t.prototype.Qv = function (t, e) {
          var i = this;
          _u(t, e, function () {
            var e = i.hi(),
              n = e.Rf(),
              r = e.Pf();
            n === r
              ? Mu(t, 0, 0, i.pv.st, i.pv.ht, r)
              : ku(t, 0, 0, i.pv.st, i.pv.ht, n, r);
          });
        }),
        (t.prototype.R_ = function (t, e) {
          var i = Jh(this.w_),
            n = i.Ol().sl().P(i.Mt(), i.wt());
          null !== n && (t.save(), n.h(t, e, !1), t.restore());
        }),
        (t.prototype.I_ = function (t, e) {
          var i = this.hi().Mf();
          this.Y_(t, e, ff, cf, i), this.Y_(t, e, ff, pf, i);
        }),
        (t.prototype.q_ = function (t, e) {
          this.Y_(t, e, ff, pf, this.hi().bf());
        }),
        (t.prototype.j_ = function (t, e, i) {
          for (var n = Jh(this.w_).Os(), r = 0, o = n; r < o.length; r++) {
            var s = o[r];
            this.Y_(t, e, i, cf, s);
          }
          for (var a = 0, l = n; a < l.length; a++)
            (s = l[a]), this.Y_(t, e, i, pf, s);
        }),
        (t.prototype.Y_ = function (t, e, i, n, r) {
          for (
            var o = Jh(this.w_),
              s = i(r, o),
              a = o.Mt(),
              l = o.wt(),
              h = o.vt().ff(),
              u = null !== h && h.vf === r,
              c = null !== h && u && void 0 !== h.T_ ? h.T_.ga : void 0,
              p = 0,
              f = s;
            p < f.length;
            p++
          ) {
            var d = f[p].P(a, l);
            null !== d && (t.save(), n(d, t, e, u, c), t.restore());
          }
        }),
        (t.prototype.O_ = function (t, e, i) {
          for (var n = 0, r = t; n < r.length; n++) {
            var o = r[n],
              s = o.P(this.pv.ht, this.pv.st);
            if (null !== s && s.pa) {
              var a = s.pa(e, i);
              if (null !== a) return { vv: o, T_: a };
            }
          }
          return null;
        }),
        (t.prototype.N_ = function () {
          if (null !== this.w_) {
            var t = this.M_,
              e = this.w_.kl().ct().visible,
              i = this.w_.Cl().ct().visible;
            e ||
              null === this.r_ ||
              (this.p_.removeChild(this.r_.jv()),
              this.r_.en(),
              (this.r_ = null)),
              i ||
                null === this.e_ ||
                (this.g_.removeChild(this.e_.jv()),
                this.e_.en(),
                (this.e_ = null));
            var n = t.vt().Ff();
            e &&
              null === this.r_ &&
              ((this.r_ = new hf(this, t.ct().layout, n, "left")),
              this.p_.appendChild(this.r_.jv())),
              i &&
                null === this.e_ &&
                ((this.e_ = new hf(this, t.ct().layout, n, "right")),
                this.g_.appendChild(this.e_.jv()));
          }
        }),
        (t.prototype.D_ = function () {
          return uf && null === this.c_;
        }),
        (t.prototype.L_ = function () {
          return (uf && this.f_) || null !== this.c_;
        }),
        (t.prototype.K_ = function (t) {
          return Math.max(0, Math.min(t, this.pv.st - 1));
        }),
        (t.prototype.X_ = function (t) {
          return Math.max(0, Math.min(t, this.pv.ht - 1));
        }),
        (t.prototype.x_ = function (t, e) {
          this.hi().Tf(this.K_(t), this.X_(e), Jh(this.w_));
        }),
        (t.prototype.A_ = function () {
          this.hi().Bf();
        }),
        (t.prototype.B_ = function () {
          this.v_ && ((this.c_ = null), this.A_());
        }),
        (t.prototype.E_ = function (t, e) {
          (this.c_ = t), (this.v_ = !1), this.x_(e.x, e.y);
          var i = this.hi().bf();
          this.__ = { x: i.bt(), y: i.gt() };
        }),
        (t.prototype.hi = function () {
          return this.M_.vt();
        }),
        (t.prototype.Z_ = function () {
          var t = this.hi(),
            e = this.Zv(),
            i = e.xi();
          t.Tl(e, i), t.Sf(), (this.u_ = null), (this.a_ = !1);
        }),
        (t.prototype.F_ = function (t) {
          var e = this;
          if (this.a_) {
            var i = performance.now();
            if (
              (null !== this.d_ && this.d_.ia(t.uv, i),
              null === this.d_ || this.d_.nc(i))
            )
              this.Z_();
            else {
              var n = this.hi(),
                r = n.j(),
                o = this.d_,
                s = function () {
                  if (!o.hc()) {
                    var t = performance.now(),
                      i = o.nc(t);
                    if (!o.hc()) {
                      var a = r.Pr();
                      n.xf(o.ic(t)), a === r.Pr() && ((i = !0), (e.d_ = null));
                    }
                    i ? e.Z_() : requestAnimationFrame(s);
                  }
                };
              requestAnimationFrame(s);
            }
          }
        }),
        (t.prototype.S_ = function () {
          var t = performance.now(),
            e = null === this.d_ || this.d_.nc(t);
          null !== this.d_ && (e || this.Z_()),
            null !== this.d_ && (this.d_.rc(), (this.d_ = null));
        }),
        t
      );
    })(),
    mf = (function () {
      function t(t, e, i, n, r) {
        var o = this;
        (this.L = !0),
          (this.pv = new Ip(0, 0)),
          (this.xv = function () {
            return o.Jv(3);
          }),
          (this.Tv = "left" === t),
          (this.tf = i.Ff),
          (this.ki = e),
          (this.J_ = n),
          (this.G_ = r),
          (this.Bv = document.createElement("div")),
          (this.Bv.style.width = "25px"),
          (this.Bv.style.height = "100%"),
          (this.Bv.style.overflow = "hidden"),
          (this.Lv = Jp(this.Bv, new Ip(16, 16))),
          this.Lv.subscribeCanvasConfigured(this.xv);
      }
      return (
        (t.prototype.en = function () {
          this.Lv.unsubscribeCanvasConfigured(this.xv), this.Lv.destroy();
        }),
        (t.prototype.jv = function () {
          return this.Bv;
        }),
        (t.prototype.z_ = function () {
          return this.pv;
        }),
        (t.prototype.$v = function (t) {
          if (t.st < 0 || t.ht < 0)
            throw new Error(
              "Try to set invalid size to PriceAxisStub " + JSON.stringify(t)
            );
          this.pv.on(t) ||
            ((this.pv = t),
            this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
            (this.Bv.style.width = t.st + "px"),
            (this.Bv.style.minWidth = t.st + "px"),
            (this.Bv.style.height = t.ht + "px"),
            (this.L = !0));
        }),
        (t.prototype.Jv = function (t) {
          if ((!(t < 3) || this.L) && 0 !== this.pv.st && 0 !== this.pv.ht) {
            this.L = !1;
            var e = Xp(this.Lv.canvas);
            this.Qv(e, this.Lv.pixelRatio), this.yu(e, this.Lv.pixelRatio);
          }
        }),
        (t.prototype.s_ = function () {
          return this.Lv.canvas;
        }),
        (t.prototype.yu = function (t, e) {
          if (this.J_()) {
            var i = this.pv.st;
            t.save(), (t.fillStyle = this.ki.timeScale.borderColor);
            var n = Math.floor(this.tf.ct().At * e),
              r = this.Tv ? Math.round(i * e) - n : 0;
            t.fillRect(r, 0, n, n), t.restore();
          }
        }),
        (t.prototype.Qv = function (t, e) {
          var i = this;
          _u(t, e, function () {
            Mu(t, 0, 0, i.pv.st, i.pv.ht, i.G_());
          });
        }),
        t
      );
    })();
  function yf(t, e) {
    return t.Rh > e.Rh ? t : e;
  }
  var gf = (function () {
      function t(t) {
        var e = this;
        (this.Q_ = null),
          (this.td = null),
          (this.oe = null),
          (this.nd = !1),
          (this.pv = new Ip(0, 0)),
          (this.sd = new Bu()),
          (this.kv = new ip(5)),
          (this.xv = function () {
            return e.M_.vt().Or();
          }),
          (this.Av = function () {
            return e.M_.vt().Or();
          }),
          (this.M_ = t),
          (this.ki = t.ct().layout),
          (this.hd = document.createElement("tr")),
          (this.rd = document.createElement("td")),
          (this.rd.style.padding = "0"),
          (this.ed = document.createElement("td")),
          (this.ed.style.padding = "0"),
          (this.Bv = document.createElement("td")),
          (this.Bv.style.height = "25px"),
          (this.Bv.style.padding = "0"),
          (this.ud = document.createElement("div")),
          (this.ud.style.width = "100%"),
          (this.ud.style.height = "100%"),
          (this.ud.style.position = "relative"),
          (this.ud.style.overflow = "hidden"),
          this.Bv.appendChild(this.ud),
          (this.Lv = Jp(this.ud, new Ip(16, 16))),
          this.Lv.subscribeCanvasConfigured(this.xv);
        var i = this.Lv.canvas;
        (i.style.position = "absolute"),
          (i.style.zIndex = "1"),
          (i.style.left = "0"),
          (i.style.top = "0"),
          (this.Fv = Jp(this.ud, new Ip(16, 16))),
          this.Fv.subscribeCanvasConfigured(this.Av);
        var n = this.Fv.canvas;
        (n.style.position = "absolute"),
          (n.style.zIndex = "2"),
          (n.style.left = "0"),
          (n.style.top = "0"),
          this.hd.appendChild(this.rd),
          this.hd.appendChild(this.Bv),
          this.hd.appendChild(this.ed),
          this.ad(),
          this.M_.vt().dl().Ji(this.ad.bind(this), this),
          (this.Iv = new nf(this.Fv.canvas, this, { Oc: !0, Wc: !1 }));
      }
      return (
        (t.prototype.en = function () {
          this.Iv.en(),
            null !== this.Q_ && this.Q_.en(),
            null !== this.td && this.td.en(),
            this.Fv.unsubscribeCanvasConfigured(this.Av),
            this.Fv.destroy(),
            this.Lv.unsubscribeCanvasConfigured(this.xv),
            this.Lv.destroy();
        }),
        (t.prototype.jv = function () {
          return this.hd;
        }),
        (t.prototype.od = function () {
          return this.Q_;
        }),
        (t.prototype.ld = function () {
          return this.td;
        }),
        (t.prototype.Yc = function (t) {
          if (!this.nd) {
            this.nd = !0;
            var e = this.M_.vt();
            !e.j().ti() &&
              this.M_.ct().handleScale.axisPressedMouseMove.time &&
              e.yf(t.uv);
          }
        }),
        (t.prototype.Kc = function () {
          var t = this.M_.vt();
          !t.j().ti() &&
            this.nd &&
            ((this.nd = !1),
            this.M_.ct().handleScale.axisPressedMouseMove.time && t.Af());
        }),
        (t.prototype.zc = function (t) {
          var e = this.M_.vt();
          !e.j().ti() &&
            this.M_.ct().handleScale.axisPressedMouseMove.time &&
            e.Df(t.uv);
        }),
        (t.prototype.Ic = function (t) {
          this.nd = !1;
          var e = this.M_.vt();
          (e.j().ti() && !this.M_.ct().handleScale.axisPressedMouseMove.time) ||
            e.Af();
        }),
        (t.prototype.jc = function () {
          this.M_.ct().handleScale.axisDoubleClickReset && this.M_.vt().Ne();
        }),
        (t.prototype.Bc = function (t) {
          this.M_.vt().ct().handleScale.axisPressedMouseMove.time && this.h_(1);
        }),
        (t.prototype.iv = function (t) {
          this.h_(0);
        }),
        (t.prototype.z_ = function () {
          return this.pv;
        }),
        (t.prototype.fd = function () {
          return this.sd;
        }),
        (t.prototype.vd = function (t, e, i) {
          (this.pv && this.pv.on(t)) ||
            ((this.pv = t),
            this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
            this.Fv.resizeCanvas({ width: t.st, height: t.ht }),
            (this.Bv.style.width = t.st + "px"),
            (this.Bv.style.height = t.ht + "px"),
            this.sd.hn(t)),
            null !== this.Q_ && this.Q_.$v(new Ip(e, t.ht)),
            null !== this.td && this.td.$v(new Ip(i, t.ht));
        }),
        (t.prototype._d = function () {
          var t = this.dd();
          return Math.ceil(t.At + t.Dt + t.Wt + t.Tt + t.Bt);
        }),
        (t.prototype.O = function () {
          this.M_.vt().j().Fn();
        }),
        (t.prototype.s_ = function () {
          return this.Lv.canvas;
        }),
        (t.prototype.Jv = function (t) {
          if (0 !== t) {
            if (1 !== t) {
              var e = Xp(this.Lv.canvas);
              this.Qv(e, this.Lv.pixelRatio),
                this.yu(e, this.Lv.pixelRatio),
                this.t_(e, this.Lv.pixelRatio),
                null !== this.Q_ && this.Q_.Jv(t),
                null !== this.td && this.td.Jv(t);
            }
            var i = Xp(this.Fv.canvas),
              n = this.Fv.pixelRatio;
            i.clearRect(
              0,
              0,
              Math.ceil(this.pv.st * n),
              Math.ceil(this.pv.ht * n)
            ),
              this.wd([this.M_.vt().bf()], i, n);
          }
        }),
        (t.prototype.Qv = function (t, e) {
          var i = this;
          _u(t, e, function () {
            Mu(t, 0, 0, i.pv.st, i.pv.ht, i.M_.vt().Pf());
          });
        }),
        (t.prototype.yu = function (t, e) {
          if (this.M_.ct().timeScale.borderVisible) {
            t.save(), (t.fillStyle = this.Md());
            var i = Math.max(1, Math.floor(this.dd().At * e));
            t.fillRect(0, 0, Math.ceil(this.pv.st * e), i), t.restore();
          }
        }),
        (t.prototype.t_ = function (t, e) {
          var i = this,
            n = this.M_.vt().j().Fn();
          if (n && 0 !== n.length) {
            var r = n.reduce(yf, n[0]).Rh;
            r > 30 && r < 50 && (r = 30), t.save(), (t.strokeStyle = this.Md());
            var o = this.dd(),
              s = o.At + o.Dt + o.Tt + o.Wt - o.Ot;
            (t.textAlign = "center"), (t.fillStyle = this.Md());
            var a = Math.floor(this.dd().At * e),
              l = Math.max(1, Math.floor(e)),
              h = Math.floor(0.5 * e);
            if (this.M_.vt().j().ct().borderVisible) {
              t.beginPath();
              for (var u = Math.round(o.Dt * e), c = n.length; c--; ) {
                var p = Math.round(n[c].An * e);
                t.rect(p - h, a, l, u);
              }
              t.fill();
            }
            (t.fillStyle = this.ve()),
              _u(t, e, function () {
                t.font = i.bd();
                for (var e = 0, o = n; e < o.length; e++)
                  if ((u = o[e]).Rh < r) {
                    var a = u.Ir ? i.md(t, u.An, u.Tn) : u.An;
                    t.fillText(u.Tn, a, s);
                  }
                t.font = i.pd();
                for (var l = 0, h = n; l < h.length; l++) {
                  var u;
                  (u = h[l]).Rh >= r &&
                    ((a = u.Ir ? i.md(t, u.An, u.Tn) : u.An),
                    t.fillText(u.Tn, a, s));
                }
              });
          }
        }),
        (t.prototype.md = function (t, e, i) {
          var n = this.kv.Vt(t, i),
            r = n / 2,
            o = Math.floor(e - r) + 0.5;
          return (
            o < 0
              ? (e += Math.abs(0 - o))
              : o + n > this.pv.st && (e -= Math.abs(this.pv.st - (o + n))),
            e
          );
        }),
        (t.prototype.wd = function (t, e, i) {
          for (var n = this.dd(), r = 0, o = t; r < o.length; r++)
            for (var s = 0, a = o[r].ci(); s < a.length; s++) {
              var l = a[s];
              e.save(), l.P().h(e, n, i), e.restore();
            }
        }),
        (t.prototype.Md = function () {
          return this.M_.ct().timeScale.borderColor;
        }),
        (t.prototype.ve = function () {
          return this.ki.textColor;
        }),
        (t.prototype.fe = function () {
          return this.ki.fontSize;
        }),
        (t.prototype.bd = function () {
          return Sc(this.fe(), this.ki.fontFamily);
        }),
        (t.prototype.pd = function () {
          return Sc(this.fe(), this.ki.fontFamily, "bold");
        }),
        (t.prototype.dd = function () {
          null === this.oe &&
            (this.oe = {
              At: 1,
              Ot: NaN,
              Tt: NaN,
              Bt: NaN,
              si: NaN,
              Dt: 3,
              Wt: NaN,
              Nt: "",
              ni: new ip(),
            });
          var t = this.oe,
            e = this.bd();
          if (t.Nt !== e) {
            var i = this.fe();
            (t.Wt = i),
              (t.Nt = e),
              (t.Tt = Math.ceil(i / 2.5)),
              (t.Bt = t.Tt),
              (t.si = Math.ceil(i / 2)),
              (t.Ot = Math.round(this.fe() / 5)),
              t.ni.Ou();
          }
          return this.oe;
        }),
        (t.prototype.h_ = function (t) {
          this.Bv.style.cursor = 1 === t ? "ew-resize" : "default";
        }),
        (t.prototype.ad = function () {
          var t = this.M_.vt(),
            e = t.ct();
          e.leftPriceScale.visible ||
            null === this.Q_ ||
            (this.rd.removeChild(this.Q_.jv()), this.Q_.en(), (this.Q_ = null)),
            e.rightPriceScale.visible ||
              null === this.td ||
              (this.ed.removeChild(this.td.jv()),
              this.td.en(),
              (this.td = null));
          var i = { Ff: this.M_.vt().Ff() },
            n = function () {
              return e.leftPriceScale.borderVisible && t.j().ct().borderVisible;
            },
            r = function () {
              return t.Pf();
            };
          e.leftPriceScale.visible &&
            null === this.Q_ &&
            ((this.Q_ = new mf("left", e, i, n, r)),
            this.rd.appendChild(this.Q_.jv())),
            e.rightPriceScale.visible &&
              null === this.td &&
              ((this.td = new mf("right", e, i, n, r)),
              this.ed.appendChild(this.td.jv()));
        }),
        t
      );
    })(),
    wf = (function () {
      function t(t, e) {
        var i;
        (this.gd = []),
          (this.yd = 0),
          (this.En = 0),
          (this.$h = 0),
          (this.kd = 0),
          (this.Cd = 0),
          (this.Nd = null),
          (this.xd = !1),
          (this.o_ = new Bu()),
          (this.Jl = new Bu()),
          (this.ki = e),
          (this.hd = document.createElement("div")),
          this.hd.classList.add("tv-lightweight-charts"),
          (this.hd.style.overflow = "hidden"),
          (this.hd.style.width = "100%"),
          (this.hd.style.height = "100%"),
          ((i = this.hd).style.userSelect = "none"),
          (i.style.webkitUserSelect = "none"),
          (i.style.msUserSelect = "none"),
          (i.style.MozUserSelect = "none"),
          (i.style.webkitTapHighlightColor = "transparent"),
          (this.Sd = document.createElement("table")),
          this.Sd.setAttribute("cellspacing", "0"),
          this.hd.appendChild(this.Sd),
          (this.Dd = this.Ad.bind(this)),
          this.hd.addEventListener("wheel", this.Dd, { passive: !1 }),
          (this.hi = new Vp(this.Ql.bind(this), this.ki)),
          this.vt().mf().Ji(this.Td.bind(this), this),
          (this.Bd = new gf(this)),
          this.Sd.appendChild(this.Bd.jv());
        var n = this.ki.width,
          r = this.ki.height;
        if (0 === n || 0 === r) {
          var o = t.getBoundingClientRect();
          0 === n && ((n = Math.floor(o.width)), (n -= n % 2)),
            0 === r && ((r = Math.floor(o.height)), (r -= r % 2));
        }
        this.Ld(n, r),
          this.Fd(),
          t.appendChild(this.hd),
          this.Ed(),
          this.hi.j().Jr().Ji(this.hi.uf.bind(this.hi), this),
          this.hi.dl().Ji(this.hi.uf.bind(this.hi), this);
      }
      return (
        (t.prototype.vt = function () {
          return this.hi;
        }),
        (t.prototype.ct = function () {
          return this.ki;
        }),
        (t.prototype.Vd = function () {
          return this.gd;
        }),
        (t.prototype.Od = function () {
          return this.Bd;
        }),
        (t.prototype.en = function () {
          this.hd.removeEventListener("wheel", this.Dd),
            0 !== this.yd && window.cancelAnimationFrame(this.yd),
            this.hi.mf().sn(this),
            this.hi.j().Jr().sn(this),
            this.hi.dl().sn(this),
            this.hi.en();
          for (var t = 0, e = this.gd; t < e.length; t++) {
            var i = e[t];
            this.Sd.removeChild(i.jv()), i.V_().sn(this), i.en();
          }
          (this.gd = []),
            Jh(this.Bd).en(),
            null !== this.hd.parentElement &&
              this.hd.parentElement.removeChild(this.hd),
            this.Jl.en(),
            this.o_.en();
        }),
        (t.prototype.Ld = function (t, e, i) {
          if ((void 0 === i && (i = !1), this.En !== e || this.$h !== t)) {
            (this.En = e), (this.$h = t);
            var n = e + "px",
              r = t + "px";
            (Jh(this.hd).style.height = n),
              (Jh(this.hd).style.width = r),
              (this.Sd.style.height = n),
              (this.Sd.style.width = r),
              i ? this.Wd(new Dc(3)) : this.hi.uf();
          }
        }),
        (t.prototype.Jv = function (t) {
          void 0 === t && (t = new Dc(3));
          for (var e = 0; e < this.gd.length; e++) this.gd[e].Jv(t.ge(e).me);
          this.ki.timeScale.visible && this.Bd.Jv(t.pe());
        }),
        (t.prototype.rs = function (t) {
          this.hi.rs(t), this.Ed();
          var e = t.width || this.$h,
            i = t.height || this.En;
          this.Ld(e, i);
        }),
        (t.prototype.V_ = function () {
          return this.o_;
        }),
        (t.prototype.mf = function () {
          return this.Jl;
        }),
        (t.prototype.zd = function () {
          var t = this;
          null !== this.Nd && (this.Wd(this.Nd), (this.Nd = null));
          var e = this.gd[0],
            i = Gp(document, new Ip(this.$h, this.En)),
            n = Xp(i),
            r = qp(i);
          return (
            _u(n, r, function () {
              var i = 0,
                r = 0,
                o = function (e) {
                  for (var o = 0; o < t.gd.length; o++) {
                    var s = t.gd[o],
                      a = s.z_().ht,
                      l = Jh("left" === e ? s.U_() : s.H_()),
                      h = l.s_();
                    n.drawImage(h, i, r, l.Xv(), a), (r += a);
                  }
                };
              t.Pd() && (o("left"), (i = Jh(e.U_()).Xv())), (r = 0);
              for (var s = 0; s < t.gd.length; s++) {
                var a = t.gd[s],
                  l = a.z_(),
                  h = a.s_();
                n.drawImage(h, i, r, l.st, l.ht), (r += l.ht);
              }
              (i += e.z_().st), t.Rd() && ((r = 0), o("right"));
              var u = function (e) {
                var o = Jh("left" === e ? t.Bd.od() : t.Bd.ld()),
                  s = o.z_(),
                  a = o.s_();
                n.drawImage(a, i, r, s.st, s.ht);
              };
              if (t.ki.timeScale.visible) {
                (i = 0), t.Pd() && (u("left"), (i = Jh(e.U_()).Xv()));
                var c = t.Bd.z_();
                (h = t.Bd.s_()),
                  n.drawImage(h, i, r, c.st, c.ht),
                  t.Rd() && ((i += e.z_().st), u("right"), n.restore());
              }
            }),
            i
          );
        }),
        (t.prototype.Id = function (t) {
          return "none" === t ||
            ("left" === t && !this.Pd()) ||
            ("right" === t && !this.Rd()) ||
            0 === this.gd.length
            ? 0
            : Jh("left" === t ? this.gd[0].U_() : this.gd[0].H_()).Xv();
        }),
        (t.prototype.jd = function () {
          for (var t = 0, e = 0, i = 0, n = 0, r = this.gd; n < r.length; n++) {
            var o = r[n];
            this.Pd() && (e = Math.max(e, Jh(o.U_()).Yv())),
              this.Rd() && (i = Math.max(i, Jh(o.H_()).Yv())),
              (t += o.wl());
          }
          var s = this.$h,
            a = this.En,
            l = Math.max(s - e - i, 0),
            h = this.ki.timeScale.visible,
            u = h ? this.Bd._d() : 0;
          u % 2 && (u += 1);
          for (
            var c = 0 + u, p = a < c ? 0 : a - c, f = p / t, d = 0, v = 0;
            v < this.gd.length;
            ++v
          ) {
            (o = this.gd[v]).C_(this.hi.wf()[v]);
            var m, y;
            (y = v === this.gd.length - 1 ? p - d : Math.round(o.wl() * f)),
              (d += m = Math.max(y, 2)),
              o.$v(new Ip(l, m)),
              this.Pd() && o.W_(e, "left"),
              this.Rd() && o.W_(i, "right"),
              o.Zv() && this.hi.pf(o.Zv(), m);
          }
          this.Bd.vd(new Ip(h ? l : 0, u), h ? e : 0, h ? i : 0),
            this.hi.Dr(l),
            this.kd !== e && (this.kd = e),
            this.Cd !== i && (this.Cd = i);
        }),
        (t.prototype.Ad = function (t) {
          var e = t.deltaX / 100,
            i = -t.deltaY / 100;
          if (
            (0 !== e && this.ki.handleScroll.mouseWheel) ||
            (0 !== i && this.ki.handleScale.mouseWheel)
          ) {
            switch ((t.cancelable && t.preventDefault(), t.deltaMode)) {
              case t.DOM_DELTA_PAGE:
                (e *= 120), (i *= 120);
                break;
              case t.DOM_DELTA_LINE:
                (e *= 32), (i *= 32);
            }
            if (0 !== i && this.ki.handleScale.mouseWheel) {
              var n = Math.sign(i) * Math.min(1, Math.abs(i)),
                r = t.clientX - this.hd.getBoundingClientRect().left;
              this.vt().kf(r, n);
            }
            0 !== e && this.ki.handleScroll.mouseWheel && this.vt().Cf(-80 * e);
          }
        }),
        (t.prototype.Wd = function (t) {
          var e = t.pe();
          if ((3 === e && this.qd(), 3 === e || 2 === e)) {
            for (var i = this.hi.wf(), n = 0; n < i.length; n++)
              t.ge(n)._s && i[n].Fl();
            for (var r = t.xe(), o = 0, s = r; o < s.length; o++) {
              var a = s[o];
              this.Se(a);
            }
            r.length > 0 && (this.hi.Vr(), this.hi.Eo(), this.hi.Or()),
              this.Bd.O();
          }
          this.Jv(t);
        }),
        (t.prototype.Se = function (t) {
          var e = this.hi.j();
          switch (t.ke) {
            case 0:
              e.Qr();
              break;
            case 1:
              e.te(t.X);
              break;
            case 2:
              e.wr(t.X);
              break;
            case 3:
              e.Mr(t.X);
              break;
            case 4:
              e.jr();
          }
        }),
        (t.prototype.Ql = function (t) {
          var e = this;
          null !== this.Nd ? this.Nd._n(t) : (this.Nd = t),
            this.xd ||
              ((this.xd = !0),
              (this.yd = window.requestAnimationFrame(function () {
                (e.xd = !1),
                  (e.yd = 0),
                  null !== e.Nd && (e.Wd(e.Nd), (e.Nd = null));
              })));
        }),
        (t.prototype.qd = function () {
          this.Fd();
        }),
        (t.prototype.Fd = function () {
          for (
            var t = this.hi.wf(), e = t.length, i = this.gd.length, n = e;
            n < i;
            n++
          ) {
            var r = Gh(this.gd.pop());
            this.Sd.removeChild(r.jv()), r.V_().sn(this), r.en();
          }
          for (n = i; n < e; n++)
            (r = new vf(this, t[n])).V_().Ji(this.Ud.bind(this), this),
              this.gd.push(r),
              this.Sd.insertBefore(r.jv(), this.Bd.jv());
          for (n = 0; n < e; n++) {
            var o = t[n];
            (r = this.gd[n]).Zv() !== o ? r.C_(o) : r.k_();
          }
          this.Ed(), this.jd();
        }),
        (t.prototype.Hd = function (t, e) {
          var i,
            n = new Map();
          if (
            (null !== t &&
              this.hi.W().forEach(function (e) {
                var i = e.Fa(t);
                null !== i && n.set(e, i);
              }),
            null !== t)
          ) {
            var r = this.hi.j().ri(t);
            null !== r && (i = r);
          }
          var o = this.vt().ff(),
            s = null !== o && o.vf instanceof Pp ? o.vf : void 0,
            a = null !== o && void 0 !== o.T_ ? o.T_.ka : void 0;
          return { S: i, Yd: e || void 0, Kd: s, $d: n, Xd: a };
        }),
        (t.prototype.Ud = function (t, e) {
          var i = this;
          this.o_.hn(function () {
            return i.Hd(t, e);
          });
        }),
        (t.prototype.Td = function (t, e) {
          var i = this;
          this.Jl.hn(function () {
            return i.Hd(t, e);
          });
        }),
        (t.prototype.Ed = function () {
          var t = this.ki.timeScale.visible ? "" : "none";
          this.Bd.jv().style.display = t;
        }),
        (t.prototype.Pd = function () {
          return this.gd[0].Zv().kl().ct().visible;
        }),
        (t.prototype.Rd = function () {
          return this.gd[0].Zv().Cl().ct().visible;
        }),
        t
      );
    })();
  function bf(t, e, i) {
    var n = i.value,
      r = { Ph: e, S: t, X: [n, n, n, n] };
    return "color" in i && void 0 !== i.color && (r.et = i.color), r;
  }
  function $f(t, e, i) {
    return { Ph: e, S: t, X: [i.open, i.high, i.low, i.close] };
  }
  function xf(t) {
    return void 0 !== t.X;
  }
  function _f(t) {
    return function (e, i, n) {
      return void 0 === (r = n).open && void 0 === r.value
        ? { S: e, Ph: i }
        : t(e, i, n);
      var r;
    };
  }
  var Mf = {
    Candlestick: _f($f),
    Bar: _f($f),
    Area: _f(bf),
    Baseline: _f(bf),
    Histogram: _f(bf),
    Line: _f(bf),
  };
  function kf(t) {
    return Mf[t];
  }
  function Sf(t) {
    return 60 * t * 60 * 1e3;
  }
  function Cf(t) {
    return 60 * t * 1e3;
  }
  var Lf = [
    { Zd: (1, 1e3), Rh: 10 },
    { Zd: Cf(1), Rh: 20 },
    { Zd: Cf(5), Rh: 21 },
    { Zd: Cf(30), Rh: 22 },
    { Zd: Sf(1), Rh: 30 },
    { Zd: Sf(3), Rh: 31 },
    { Zd: Sf(6), Rh: 32 },
    { Zd: Sf(12), Rh: 33 },
  ];
  function Df(t, e) {
    if (t.getUTCFullYear() !== e.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== e.getUTCMonth()) return 60;
    if (t.getUTCDate() !== e.getUTCDate()) return 50;
    for (var i = Lf.length - 1; i >= 0; --i)
      if (
        Math.floor(e.getTime() / Lf[i].Zd) !==
        Math.floor(t.getTime() / Lf[i].Zd)
      )
        return Lf[i].Rh;
    return 0;
  }
  function Af(t, e) {
    if ((void 0 === e && (e = 0), 0 !== t.length)) {
      for (
        var i = 0 === e ? null : t[e - 1].S.Dh,
          n = null !== i ? new Date(1e3 * i) : null,
          r = 0,
          o = e;
        o < t.length;
        ++o
      ) {
        var s = t[o],
          a = new Date(1e3 * s.S.Dh);
        null !== n && (s.zh = Df(a, n)),
          (r += s.S.Dh - (i || s.S.Dh)),
          (i = s.S.Dh),
          (n = a);
      }
      if (0 === e && t.length > 1) {
        var l = Math.ceil(r / (t.length - 1)),
          h = new Date(1e3 * (t[0].S.Dh - l));
        t[0].zh = Df(new Date(1e3 * t[0].S.Dh), h);
      }
    }
  }
  function Tf(t) {
    if (!_c(t)) throw new Error("time must be of type BusinessDay");
    var e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return { Dh: Math.round(e.getTime() / 1e3), Sh: t };
  }
  function jf(t) {
    if (!Mc(t)) throw new Error("time must be of type isUTCTimestamp");
    return { Dh: t };
  }
  function Of(t) {
    return 0 === t.length ? null : _c(t[0].time) ? Tf : jf;
  }
  function Ef(t) {
    return Mc(t) ? jf(t) : _c(t) ? Tf(t) : Tf(Pf(t));
  }
  function Pf(t) {
    var e = new Date(t);
    if (isNaN(e.getTime()))
      throw new Error(
        "Invalid date string=" + t + ", expected format=yyyy-mm-dd"
      );
    return {
      day: e.getUTCDate(),
      month: e.getUTCMonth() + 1,
      year: e.getUTCFullYear(),
    };
  }
  function Nf(t) {
    tu(t.time) && (t.time = Pf(t.time));
  }
  function Rf(t) {
    return { Ph: 0, Jd: new Map(), Rs: t };
  }
  var Bf = (function () {
    function t() {
      (this.Gd = new Map()),
        (this.Qd = new Map()),
        (this.tw = new Map()),
        (this.iw = []);
    }
    return (
      (t.prototype.en = function () {
        this.Gd.clear(), this.Qd.clear(), this.tw.clear(), (this.iw = []);
      }),
      (t.prototype.nw = function (t, e) {
        var i = this,
          n = 0 !== this.Gd.size,
          r = !1;
        if (this.Qd.has(t))
          if (1 === this.Qd.size) (n = !1), (r = !0), this.Gd.clear();
          else
            for (var o = 0, s = this.iw; o < s.length; o++)
              s[o].pointData.Jd.delete(t) && (r = !0);
        var a = [];
        if (0 !== e.length) {
          !(function (t) {
            t.forEach(Nf);
          })(e);
          var l = Jh(Of(e)),
            h = kf(t.Ya());
          a = e.map(function (e) {
            var n = l(e.time),
              o = i.Gd.get(n.Dh);
            void 0 === o && ((o = Rf(n)), i.Gd.set(n.Dh, o), (r = !0));
            var s = h(n, o.Ph, e);
            return o.Jd.set(t, s), s;
          });
        }
        n && this.sw(), this.hw(t, a);
        var u = -1;
        if (r) {
          var c = [];
          this.Gd.forEach(function (t) {
            c.push({ zh: 0, S: t.Rs, pointData: t });
          }),
            c.sort(function (t, e) {
              return t.S.Dh - e.S.Dh;
            }),
            (u = this.rw(c));
        }
        return this.ew(t, u);
      }),
      (t.prototype.Of = function (t) {
        return this.nw(t, []);
      }),
      (t.prototype.uw = function (t, e) {
        Nf(e);
        var i = Jh(Of([e]))(e.time),
          n = this.tw.get(t);
        if (void 0 !== n && i.Dh < n.Dh)
          throw new Error(
            "Cannot update oldest data, last time=" +
              n.Dh +
              ", new time=" +
              i.Dh
          );
        var r = this.Gd.get(i.Dh),
          o = void 0 === r;
        void 0 === r && ((r = Rf(i)), this.Gd.set(i.Dh, r));
        var s = kf(t.Ya())(i, r.Ph, e);
        if ((r.Jd.set(t, s), this.aw(t, s), !o)) return this.ew(t, -1);
        var a = { zh: 0, S: r.Rs, pointData: r },
          l = fc(this.iw, a.S.Dh, function (t, e) {
            return t.S.Dh < e;
          });
        this.iw.splice(l, 0, a);
        for (var h = l; h < this.iw.length; ++h) Wf(this.iw[h].pointData, h);
        return Af(this.iw, l), this.ew(t, l);
      }),
      (t.prototype.aw = function (t, e) {
        var i = this.Qd.get(t);
        void 0 === i && ((i = []), this.Qd.set(t, i));
        var n = 0 !== i.length ? i[i.length - 1] : null;
        null === n || e.S.Dh > n.S.Dh
          ? xf(e) && i.push(e)
          : xf(e)
          ? (i[i.length - 1] = e)
          : i.splice(-1, 1),
          this.tw.set(t, e.S);
      }),
      (t.prototype.hw = function (t, e) {
        0 !== e.length
          ? (this.Qd.set(t, e.filter(xf)), this.tw.set(t, e[e.length - 1].S))
          : (this.Qd.delete(t), this.tw.delete(t));
      }),
      (t.prototype.sw = function () {
        for (var t = 0, e = this.iw; t < e.length; t++) {
          var i = e[t];
          0 === i.pointData.Jd.size && this.Gd.delete(i.S.Dh);
        }
      }),
      (t.prototype.rw = function (t) {
        for (var e = -1, i = 0; i < this.iw.length && i < t.length; ++i) {
          var n = this.iw[i],
            r = t[i];
          if (n.S.Dh !== r.S.Dh) {
            e = i;
            break;
          }
          (r.zh = n.zh), Wf(r.pointData, i);
        }
        if (
          (-1 === e &&
            this.iw.length !== t.length &&
            (e = Math.min(this.iw.length, t.length)),
          -1 === e)
        )
          return -1;
        for (i = e; i < t.length; ++i) Wf(t[i].pointData, i);
        return Af(t, e), (this.iw = t), e;
      }),
      (t.prototype.ow = function () {
        if (0 === this.Qd.size) return null;
        var t = 0;
        return (
          this.Qd.forEach(function (e) {
            0 !== e.length && (t = Math.max(t, e[e.length - 1].Ph));
          }),
          t
        );
      }),
      (t.prototype.ew = function (t, e) {
        var i = { lw: new Map(), j: { Br: this.ow() } };
        if (-1 !== e)
          this.Qd.forEach(function (t, e) {
            i.lw.set(e, { Zu: t });
          }),
            this.Qd.has(t) || i.lw.set(t, { Zu: [] }),
            (i.j.fw = this.iw),
            (i.j.cw = e);
        else {
          var n = this.Qd.get(t);
          i.lw.set(t, { Zu: n || [] });
        }
        return i;
      }),
      t
    );
  })();
  function Wf(t, e) {
    (t.Ph = e),
      t.Jd.forEach(function (t) {
        t.Ph = e;
      });
  }
  var zf = {
      color: "#FF0000",
      price: 0,
      lineStyle: 2,
      lineWidth: 1,
      axisLabelVisible: !0,
      title: "",
    },
    Hf = (function () {
      function t(t) {
        this.Ia = t;
      }
      return (
        (t.prototype.applyOptions = function (t) {
          this.Ia.rs(t);
        }),
        (t.prototype.options = function () {
          return this.Ia.ct();
        }),
        (t.prototype._w = function () {
          return this.Ia;
        }),
        t
      );
    })();
  function Ff(t) {
    var e = t.overlay,
      i = (function (t, e) {
        var i = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            e.indexOf(n) < 0 &&
            (i[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(t); r < n.length; r++)
            e.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
              (i[n[r]] = t[n[r]]);
        }
        return i;
      })(t, ["overlay"]);
    return e && (i.priceScaleId = ""), i;
  }
  var Uf = (function () {
      function t(t, e, i) {
        (this.qe = t), (this.dw = e), (this.ww = i);
      }
      return (
        (t.prototype.priceFormatter = function () {
          return this.qe.$s();
        }),
        (t.prototype.priceToCoordinate = function (t) {
          var e = this.qe.H();
          return null === e ? null : this.qe.$().K(t, e.X);
        }),
        (t.prototype.coordinateToPrice = function (t) {
          var e = this.qe.H();
          return null === e ? null : this.qe.$().Si(t, e.X);
        }),
        (t.prototype.barsInLogicalRange = function (t) {
          if (null === t) return null;
          var e = new bc(new mc(t.from, t.to)).Hh(),
            i = this.qe.Hi();
          if (i.ti()) return null;
          var n = i.oo(e.hh(), 1),
            r = i.oo(e.rh(), -1),
            o = Jh(i.eo()),
            s = Jh(i.Ui());
          if (null !== n && null !== r && n.Ph > r.Ph)
            return { barsBefore: t.from - o, barsAfter: s - t.to };
          var a = {
            barsBefore: null === n || n.Ph === o ? t.from - o : n.Ph - o,
            barsAfter: null === r || r.Ph === s ? s - t.to : s - r.Ph,
          };
          return (
            null !== n &&
              null !== r &&
              ((a.from = n.S.Sh || n.S.Dh), (a.to = r.S.Sh || r.S.Dh)),
            a
          );
        }),
        (t.prototype.setData = function (t) {
          this.qe.Ya(), this.dw.Mw(this.qe, t);
        }),
        (t.prototype.update = function (t) {
          this.qe.Ya(), this.dw.bw(this.qe, t);
        }),
        (t.prototype.setMarkers = function (t) {
          var e = t.map(function (t) {
            return Ih(Ih({}, t), { time: Ef(t.time) });
          });
          this.qe.Wo(e);
        }),
        (t.prototype.applyOptions = function (t) {
          var e = Ff(t);
          this.qe.rs(e);
        }),
        (t.prototype.options = function () {
          return iu(this.qe.ct());
        }),
        (t.prototype.priceScale = function () {
          return this.ww.priceScale(this.qe.$().hs());
        }),
        (t.prototype.createPriceLine = function (t) {
          var e = Zh(iu(zf), t),
            i = this.qe.zo(e);
          return new Hf(i);
        }),
        (t.prototype.removePriceLine = function (t) {
          this.qe.Po(t._w());
        }),
        (t.prototype.seriesType = function () {
          return this.qe.Ya();
        }),
        t
      );
    })(),
    Vf = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        Vh(e, t),
        (e.prototype.applyOptions = function (e) {
          ac(e), t.prototype.applyOptions.call(this, e);
        }),
        e
      );
    })(Uf),
    If = {
      autoScale: !0,
      mode: 0,
      invertScale: !1,
      alignLabels: !0,
      borderVisible: !0,
      borderColor: "#2B2B43",
      entireTextOnly: !1,
      visible: !1,
      drawTicks: !0,
      scaleMargins: { bottom: 0.1, top: 0.2 },
    },
    qf = {
      color: "rgba(0, 0, 0, 0)",
      visible: !1,
      fontSize: 48,
      fontFamily: kc,
      fontStyle: "",
      text: "",
      horzAlign: "center",
      vertAlign: "center",
    },
    Xf = {
      width: 0,
      height: 0,
      layout: {
        background: { type: "solid", color: "#FFFFFF" },
        textColor: "#191919",
        fontSize: 11,
        fontFamily: kc,
      },
      crosshair: {
        vertLine: {
          color: "#758696",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#4c525e",
        },
        horzLine: {
          color: "#758696",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#4c525e",
        },
        mode: 1,
      },
      grid: {
        vertLines: { color: "#D6DCDE", style: 0, visible: !0 },
        horzLines: { color: "#D6DCDE", style: 0, visible: !0 },
      },
      overlayPriceScales: Ih({}, If),
      leftPriceScale: Ih(Ih({}, If), { visible: !1 }),
      rightPriceScale: Ih(Ih({}, If), { visible: !0 }),
      timeScale: {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: 0.5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0,
      },
      watermark: qf,
      localization: {
        locale: Qp ? navigator.language : "",
        dateFormat: "dd MMM 'yy",
      },
      handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0,
      },
      handleScale: {
        axisPressedMouseMove: { time: !0, price: !0 },
        axisDoubleClickReset: !0,
        mouseWheel: !0,
        pinch: !0,
      },
      kineticScroll: { mouse: !1, touch: !0 },
    },
    Gf = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      wickVisible: !0,
      borderVisible: !0,
      borderColor: "#378658",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickColor: "#737375",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    },
    Jf = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      openVisible: !0,
      thinBars: !0,
    },
    Yf = {
      color: "#2196f3",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
    },
    Zf = {
      topColor: "rgba( 46, 220, 135, 0.4)",
      bottomColor: "rgba( 40, 221, 100, 0)",
      lineColor: "#33D778",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
    },
    Kf = {
      baseValue: { type: "price", price: 0 },
      topFillColor1: "rgba(38, 166, 154, 0.28)",
      topFillColor2: "rgba(38, 166, 154, 0.05)",
      topLineColor: "rgba(38, 166, 154, 1)",
      bottomFillColor1: "rgba(239, 83, 80, 0.05)",
      bottomFillColor2: "rgba(239, 83, 80, 0.28)",
      bottomLineColor: "rgba(239, 83, 80, 1)",
      lineWidth: 3,
      lineStyle: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
    },
    Qf = { color: "#26a69a", base: 0 },
    td = {
      title: "",
      visible: !0,
      lastValueVisible: !0,
      priceLineVisible: !0,
      priceLineSource: 0,
      priceLineWidth: 1,
      priceLineColor: "",
      priceLineStyle: 2,
      baseLineVisible: !0,
      baseLineWidth: 1,
      baseLineColor: "#B2B5BE",
      baseLineStyle: 0,
      priceFormat: { type: "price", precision: 2, minMove: 0.01 },
    },
    ed = (function () {
      function t(t, e) {
        (this.mw = t), (this.pw = e);
      }
      return (
        (t.prototype.applyOptions = function (t) {
          this.mw.vt()._f(this.pw, t);
        }),
        (t.prototype.options = function () {
          return this.Gt().ct();
        }),
        (t.prototype.width = function () {
          return Lc(this.pw)
            ? this.mw.Id("left" === this.pw ? "left" : "right")
            : 0;
        }),
        (t.prototype.Gt = function () {
          return Jh(this.mw.vt().df(this.pw)).$;
        }),
        t
      );
    })(),
    id = (function () {
      function t(t, e) {
        (this.gw = new Bu()),
          (this.nr = new Bu()),
          (this.sd = new Bu()),
          (this.hi = t),
          (this.ul = t.j()),
          (this.Bd = e),
          this.ul.Xr().Ji(this.yw.bind(this)),
          this.ul.Zr().Ji(this.kw.bind(this)),
          this.Bd.fd().Ji(this.Cw.bind(this));
      }
      return (
        (t.prototype.en = function () {
          this.ul.Xr().sn(this),
            this.ul.Zr().sn(this),
            this.Bd.fd().sn(this),
            this.gw.en(),
            this.nr.en(),
            this.sd.en();
        }),
        (t.prototype.scrollPosition = function () {
          return this.ul.Pr();
        }),
        (t.prototype.scrollToPosition = function (t, e) {
          e ? this.ul.$r(t, 1e3) : this.hi.Mr(t);
        }),
        (t.prototype.scrollToRealTime = function () {
          this.ul.Kr();
        }),
        (t.prototype.getVisibleRange = function () {
          var t,
            e,
            i = this.ul.yr();
          return null === i
            ? null
            : {
                from: null !== (t = i.from.Sh) && void 0 !== t ? t : i.from.Dh,
                to: null !== (e = i.to.Sh) && void 0 !== e ? e : i.to.Dh,
              };
        }),
        (t.prototype.setVisibleRange = function (t) {
          var e = { from: Ef(t.from), to: Ef(t.to) },
            i = this.ul.Sr(e);
          this.hi.Wf(i);
        }),
        (t.prototype.getVisibleLogicalRange = function () {
          var t = this.ul.gr();
          return null === t ? null : { from: t.hh(), to: t.rh() };
        }),
        (t.prototype.setVisibleLogicalRange = function (t) {
          Xh(t.from <= t.to, "The from index cannot be after the to index."),
            this.hi.Wf(t);
        }),
        (t.prototype.resetTimeScale = function () {
          this.hi.Ne();
        }),
        (t.prototype.fitContent = function () {
          this.hi.Qr();
        }),
        (t.prototype.logicalToCoordinate = function (t) {
          var e = this.hi.j();
          return e.ti() ? null : e.G(t);
        }),
        (t.prototype.coordinateToLogical = function (t) {
          return this.ul.ti() ? null : this.ul.Fr(t);
        }),
        (t.prototype.timeToCoordinate = function (t) {
          var e = Ef(t),
            i = this.ul.br(e, !1);
          return null === i ? null : this.ul.G(i);
        }),
        (t.prototype.coordinateToTime = function (t) {
          var e,
            i = this.hi.j(),
            n = i.Fr(t),
            r = i.ri(n);
          return null === r
            ? null
            : null !== (e = r.Sh) && void 0 !== e
            ? e
            : r.Dh;
        }),
        (t.prototype.width = function () {
          return this.Bd.z_().st;
        }),
        (t.prototype.height = function () {
          return this.Bd.z_().ht;
        }),
        (t.prototype.subscribeVisibleTimeRangeChange = function (t) {
          this.gw.Ji(t);
        }),
        (t.prototype.unsubscribeVisibleTimeRangeChange = function (t) {
          this.gw.nn(t);
        }),
        (t.prototype.subscribeVisibleLogicalRangeChange = function (t) {
          this.nr.Ji(t);
        }),
        (t.prototype.unsubscribeVisibleLogicalRangeChange = function (t) {
          this.nr.nn(t);
        }),
        (t.prototype.subscribeSizeChange = function (t) {
          this.sd.Ji(t);
        }),
        (t.prototype.unsubscribeSizeChange = function (t) {
          this.sd.nn(t);
        }),
        (t.prototype.applyOptions = function (t) {
          this.ul.rs(t);
        }),
        (t.prototype.options = function () {
          return iu(this.ul.ct());
        }),
        (t.prototype.yw = function () {
          this.gw.rn() && this.gw.hn(this.getVisibleRange());
        }),
        (t.prototype.kw = function () {
          this.nr.rn() && this.nr.hn(this.getVisibleLogicalRange());
        }),
        (t.prototype.Cw = function (t) {
          this.sd.hn(t.st, t.ht);
        }),
        t
      );
    })();
  function nd(t) {
    if (void 0 !== t && "custom" !== t.type) {
      var e = t;
      void 0 !== e.minMove &&
        void 0 === e.precision &&
        (e.precision = (function (t) {
          if (t >= 1) return 0;
          for (var e = 0; e < 8; e++) {
            var i = Math.round(t);
            if (Math.abs(i - t) < 1e-8) return e;
            t *= 10;
          }
          return e;
        })(e.minMove));
    }
  }
  function rd(t) {
    return (
      (function (t) {
        if (eu(t.handleScale)) {
          var e = t.handleScale;
          t.handleScale = {
            axisDoubleClickReset: e,
            axisPressedMouseMove: { time: e, price: e },
            mouseWheel: e,
            pinch: e,
          };
        } else if (
          void 0 !== t.handleScale &&
          eu(t.handleScale.axisPressedMouseMove)
        ) {
          var i = t.handleScale.axisPressedMouseMove;
          t.handleScale.axisPressedMouseMove = { time: i, price: i };
        }
        var n = t.handleScroll;
        eu(n) &&
          (t.handleScroll = {
            horzTouchDrag: n,
            vertTouchDrag: n,
            mouseWheel: n,
            pressedMouseMove: n,
          });
      })(t),
      (function (t) {
        if (t.priceScale) {
          (t.leftPriceScale = t.leftPriceScale || {}),
            (t.rightPriceScale = t.rightPriceScale || {});
          var e = t.priceScale.position;
          delete t.priceScale.position,
            (t.leftPriceScale = Zh(t.leftPriceScale, t.priceScale)),
            (t.rightPriceScale = Zh(t.rightPriceScale, t.priceScale)),
            "left" === e &&
              ((t.leftPriceScale.visible = !0),
              (t.rightPriceScale.visible = !1)),
            "right" === e &&
              ((t.leftPriceScale.visible = !1),
              (t.rightPriceScale.visible = !0)),
            "none" === e &&
              ((t.leftPriceScale.visible = !1),
              (t.rightPriceScale.visible = !1)),
            (t.overlayPriceScales = t.overlayPriceScales || {}),
            void 0 !== t.priceScale.invertScale &&
              (t.overlayPriceScales.invertScale = t.priceScale.invertScale),
            void 0 !== t.priceScale.scaleMargins &&
              (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins);
        }
      })(t),
      (function (t) {
        t.layout &&
          t.layout.backgroundColor &&
          !t.layout.background &&
          (t.layout.background = {
            type: "solid",
            color: t.layout.backgroundColor,
          });
      })(t),
      t
    );
  }
  var od = (function () {
    function t(t, e) {
      var i = this;
      (this.Nw = new Bf()),
        (this.xw = new Map()),
        (this.Sw = new Map()),
        (this.Dw = new Bu()),
        (this.Aw = new Bu());
      var n = void 0 === e ? iu(Xf) : Zh(iu(Xf), rd(e));
      (this.mw = new wf(t, n)),
        this.mw.V_().Ji(function (t) {
          i.Dw.rn() && i.Dw.hn(i.Tw(t()));
        }, this),
        this.mw.mf().Ji(function (t) {
          i.Aw.rn() && i.Aw.hn(i.Tw(t()));
        }, this);
      var r = this.mw.vt();
      this.Bw = new id(r, this.mw.Od());
    }
    return (
      (t.prototype.remove = function () {
        this.mw.V_().sn(this),
          this.mw.mf().sn(this),
          this.Bw.en(),
          this.mw.en(),
          this.xw.clear(),
          this.Sw.clear(),
          this.Dw.en(),
          this.Aw.en(),
          this.Nw.en();
      }),
      (t.prototype.resize = function (t, e, i) {
        this.mw.Ld(t, e, i);
      }),
      (t.prototype.addAreaSeries = function (t) {
        void 0 === t && (t = {}), nd((t = Ff(t)).priceFormat);
        var e = Zh(iu(td), Zf, t),
          i = this.mw.vt().Ef("Area", e),
          n = new Uf(i, this, this);
        return this.xw.set(n, i), this.Sw.set(i, n), n;
      }),
      (t.prototype.addBaselineSeries = function (t) {
        void 0 === t && (t = {}), nd((t = Ff(t)).priceFormat);
        var e = Zh(iu(td), Kf, t),
          i = this.mw.vt().Ef("Baseline", e),
          n = new Uf(i, this, this);
        return this.xw.set(n, i), this.Sw.set(i, n), n;
      }),
      (t.prototype.addBarSeries = function (t) {
        void 0 === t && (t = {}), nd((t = Ff(t)).priceFormat);
        var e = Zh(iu(td), Jf, t),
          i = this.mw.vt().Ef("Bar", e),
          n = new Uf(i, this, this);
        return this.xw.set(n, i), this.Sw.set(i, n), n;
      }),
      (t.prototype.addCandlestickSeries = function (t) {
        void 0 === t && (t = {}), ac((t = Ff(t))), nd(t.priceFormat);
        var e = Zh(iu(td), Gf, t),
          i = this.mw.vt().Ef("Candlestick", e),
          n = new Vf(i, this, this);
        return this.xw.set(n, i), this.Sw.set(i, n), n;
      }),
      (t.prototype.addHistogramSeries = function (t) {
        void 0 === t && (t = {}), nd((t = Ff(t)).priceFormat);
        var e = Zh(iu(td), Qf, t),
          i = this.mw.vt().Ef("Histogram", e),
          n = new Uf(i, this, this);
        return this.xw.set(n, i), this.Sw.set(i, n), n;
      }),
      (t.prototype.addLineSeries = function (t) {
        void 0 === t && (t = {}), nd((t = Ff(t)).priceFormat);
        var e = Zh(iu(td), Yf, t),
          i = this.mw.vt().Ef("Line", e),
          n = new Uf(i, this, this);
        return this.xw.set(n, i), this.Sw.set(i, n), n;
      }),
      (t.prototype.removeSeries = function (t) {
        var e = Gh(this.xw.get(t)),
          i = this.Nw.Of(e);
        this.mw.vt().Of(e), this.Lw(i), this.xw.delete(t), this.Sw.delete(e);
      }),
      (t.prototype.Mw = function (t, e) {
        this.Lw(this.Nw.nw(t, e));
      }),
      (t.prototype.bw = function (t, e) {
        this.Lw(this.Nw.uw(t, e));
      }),
      (t.prototype.subscribeClick = function (t) {
        this.Dw.Ji(t);
      }),
      (t.prototype.unsubscribeClick = function (t) {
        this.Dw.nn(t);
      }),
      (t.prototype.subscribeCrosshairMove = function (t) {
        this.Aw.Ji(t);
      }),
      (t.prototype.unsubscribeCrosshairMove = function (t) {
        this.Aw.nn(t);
      }),
      (t.prototype.priceScale = function (t) {
        return void 0 === t && (t = this.mw.vt().zf()), new ed(this.mw, t);
      }),
      (t.prototype.timeScale = function () {
        return this.Bw;
      }),
      (t.prototype.applyOptions = function (t) {
        this.mw.rs(rd(t));
      }),
      (t.prototype.options = function () {
        return this.mw.ct();
      }),
      (t.prototype.takeScreenshot = function () {
        return this.mw.zd();
      }),
      (t.prototype.Lw = function (t) {
        var e = this.mw.vt();
        e.Lf(t.j.Br, t.j.fw, t.j.cw),
          t.lw.forEach(function (t, e) {
            return e._(t.Zu);
          }),
          e.Vr();
      }),
      (t.prototype.Fw = function (t) {
        return Gh(this.Sw.get(t));
      }),
      (t.prototype.Tw = function (t) {
        var e = this,
          i = new Map();
        t.$d.forEach(function (t, n) {
          i.set(e.Fw(n), t);
        });
        var n = void 0 === t.Kd ? void 0 : this.Fw(t.Kd);
        return {
          time: t.S && (t.S.Sh || t.S.Dh),
          point: t.Yd,
          hoveredSeries: n,
          hoveredMarkerId: t.Xd,
          seriesPrices: i,
        };
      }),
      t
    );
  })();
  function sd(t) {
    if (null == t) throw new Error("no value");
    return t;
  }
  function ad(t, e = [], i, n) {
    const r = new Map();
    for (const o of e) {
      const e = i(t, o);
      e.updateReference(n(o)), r.set(o.id, e);
    }
    return {
      update(e = []) {
        const o = new Set(r.keys()),
          s = new Map(e.map((t) => [t.id, t]));
        for (const t of o)
          if (!s.has(t)) {
            sd(r.get(t)).destroy(), r.delete(t);
          }
        for (const [e, o] of s.entries()) {
          const s = r.get(e);
          if (void 0 === s) {
            const s = i(t, o);
            s.updateReference(n(o)), r.set(e, s);
          } else s.update(o), s.updateReference(n(o));
        }
      },
      destroy() {
        for (const t of r.values()) t.destroy();
      },
    };
  }
  function ld(t, e = []) {
    return ad(t, e, hd, (t) => t.reference);
  }
  function hd(t, e) {
    const i = t.createPriceLine(e.options);
    let n;
    return {
      update(t) {
        t.options && i.applyOptions(t.options);
      },
      updateReference(t) {
        t !== n && (null == n || n(null), (n = t), null == n || n(i));
      },
      destroy() {
        null == n || n(null), t.removePriceLine(i);
      },
    };
  }
  function ud(t, e = []) {
    return ad(t, e, cd, (t) => t.reference);
  }
  function cd(t, e) {
    let i,
      n = pd(t, e),
      r = ld(n, e.priceLines);
    return {
      update(i) {
        if (i.type !== n.seriesType())
          return (
            r.destroy(),
            t.removeSeries(n),
            (n = pd(t, i)),
            void (r = ld(n, e.priceLines))
          );
        i.options && n.applyOptions(i.options), r.update(i.priceLines);
      },
      updateReference(t) {
        t !== i && (null == i || i(null), (i = t), null == i || i(n));
      },
      destroy() {
        null == i || i(null), t.removeSeries(n);
      },
    };
  }
  function pd(t, e) {
    switch (e.type) {
      case "Area": {
        const i = t.addAreaSeries(e.options);
        return i.setData(e.data), i;
      }
      case "Bar": {
        const i = t.addBarSeries(e.options);
        return i.setData(e.data), i;
      }
      case "Candlestick": {
        const i = t.addCandlestickSeries(e.options);
        return i.setData(e.data), i;
      }
      case "Histogram": {
        const i = t.addHistogramSeries(e.options);
        return i.setData(e.data), i;
      }
      case "Line": {
        const i = t.addLineSeries(e.options);
        return i.setData(e.data), i;
      }
    }
  }
  function fd(t) {
    if (void 0 === t)
      return (e = "lightweight-chart-context"), K().$$.context.get(e);
    var e;
    et("lightweight-chart-context", t);
  }
  function dd(t) {
    let e = null;
    const i = fd();
    Q(() => {
      const [n] = t();
      return (
        (e = cd(i, n)),
        () => {
          null == e || e.destroy(), (e = null);
        }
      );
    }),
      (function (t) {
        K().$$.after_update.push(t);
      })(() => {
        const [i, n] = t();
        null == e || e.update(i), null == e || e.updateReference(n);
      });
  }
  function vd(t) {
    let e;
    const i = t[2].default,
      n = p(i, t, t[1], null);
    return {
      c() {
        n && n.c();
      },
      m(t, i) {
        n && n.m(t, i), (e = !0);
      },
      p(t, [r]) {
        n &&
          n.p &&
          (!e || 2 & r) &&
          v(n, i, t, t[1], e ? d(i, t[1], r, null) : m(t[1]), null);
      },
      i(t) {
        e || ($t(n, t), (e = !0));
      },
      o(t) {
        xt(n, t), (e = !1);
      },
      d(t) {
        n && n.d(t);
      },
    };
  }
  function md(t, e, i) {
    let { $$slots: n = {}, $$scope: r } = e,
      { value: o } = e;
    return (
      (t.$$set = (t) => {
        "value" in t && i(0, (o = t.value)),
          "$$scope" in t && i(1, (r = t.$$scope));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty && fd(o);
      }),
      [o, r, n]
    );
  }
  class yd extends Rt {
    constructor(t) {
      super(), Nt(this, t, md, vd, a, { value: 0 });
    }
  }
  function gd(t, e) {
    var i, n;
    let { options: r, reference: o, onClick: s, onCrosshairMove: a } = e,
      l = null !== (i = null == r ? void 0 : r.width) && void 0 !== i ? i : 0,
      h = null !== (n = null == r ? void 0 : r.height) && void 0 !== n ? n : 0;
    const u = (function (t, e) {
      var i;
      if (tu(t)) {
        var n = document.getElementById(t);
        Xh(null !== n, "Cannot find element in DOM with id=" + t), (i = n);
      } else i = t;
      return new od(i, e);
    })(t, r);
    null == o || o(u);
    const c = ud(u, e.series);
    return (
      s && u.subscribeClick(s),
      a && u.subscribeCrosshairMove(a),
      {
        update(t) {
          var e, i;
          const {
            options: n,
            reference: p,
            onClick: f,
            onCrosshairMove: d,
          } = t;
          p !== o && (null == o || o(null), (o = p), null == o || o(u)),
            n &&
              (u.applyOptions(n),
              ((void 0 !== n.width && n.width !== l) ||
                (void 0 !== n.height && n.height !== h)) &&
                ((l = null !== (e = n.width) && void 0 !== e ? e : l),
                (h = null !== (i = n.height) && void 0 !== i ? i : h),
                u.resize(l, h, !0)),
              (r = n)),
            c.update(t.series),
            f !== s &&
              (s && u.unsubscribeCrosshairMove(s),
              (s = f),
              s && u.subscribeCrosshairMove(s)),
            d !== a &&
              (a && u.unsubscribeCrosshairMove(a),
              (a = d),
              a && u.subscribeCrosshairMove(a));
        },
        destroy() {
          c.destroy(),
            s && u.unsubscribeCrosshairMove(s),
            a && u.unsubscribeCrosshairMove(a),
            u.remove(),
            null == o || o(null);
        },
      }
    );
  }
  function wd(t) {
    let e, i;
    return (
      (e = new yd({
        props: { value: t[1], $$slots: { default: [bd] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, n) {
          Ot(e, t, n), (i = !0);
        },
        p(t, i) {
          const n = {};
          2 & i && (n.value = t[1]),
            1048576 & i && (n.$$scope = { dirty: i, ctx: t }),
            e.$set(n);
        },
        i(t) {
          i || ($t(e.$$.fragment, t), (i = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (i = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function bd(t) {
    let e;
    const i = t[19].default,
      n = p(i, t, t[20], null);
    return {
      c() {
        n && n.c();
      },
      m(t, i) {
        n && n.m(t, i), (e = !0);
      },
      p(t, r) {
        n &&
          n.p &&
          (!e || 1048576 & r) &&
          v(n, i, t, t[20], e ? d(i, t[20], r, null) : m(t[20]), null);
      },
      i(t) {
        e || ($t(n, t), (e = !0));
      },
      o(t) {
        xt(n, t), (e = !1);
      },
      d(t) {
        n && n.d(t);
      },
    };
  }
  function $d(t) {
    let e,
      i,
      n,
      r,
      o,
      a = null !== t[1] && wd(t);
    return {
      c() {
        (e = j("div")), a && a.c();
      },
      m(s, l) {
        D(s, e, l),
          a && a.m(e, null),
          (n = !0),
          r ||
            ((o = w(
              (i = gd.call(null, e, {
                options: t[0],
                onCrosshairMove: t[3],
                onClick: t[4],
                reference: t[2],
              }))
            )),
            (r = !0));
      },
      p(t, [n]) {
        null !== t[1]
          ? a
            ? (a.p(t, n), 2 & n && $t(a, 1))
            : ((a = wd(t)), a.c(), $t(a, 1), a.m(e, null))
          : a &&
            (wt(),
            xt(a, 1, 1, () => {
              a = null;
            }),
            bt()),
          i &&
            s(i.update) &&
            5 & n &&
            i.update.call(null, {
              options: t[0],
              onCrosshairMove: t[3],
              onClick: t[4],
              reference: t[2],
            });
      },
      i(t) {
        n || ($t(a), (n = !0));
      },
      o(t) {
        xt(a), (n = !1);
      },
      d(t) {
        t && A(e), a && a.d(), (r = !1), o();
      },
    };
  }
  function xd(t, e, i) {
    let { $$slots: n = {}, $$scope: r } = e;
    const o = tt();
    let s,
      a,
      { width: l = 0 } = e,
      { height: h = 0 } = e,
      { watermark: u } = e,
      { layout: c } = e,
      { leftPriceScale: p } = e,
      { rightPriceScale: f } = e,
      { overlayPriceScales: d } = e,
      { timeScale: v } = e,
      { crosshair: m } = e,
      { grid: y } = e,
      { localization: g } = e,
      { handleScroll: w } = e,
      { handleScale: b } = e,
      { ref: $ } = e,
      x = null;
    return (
      (t.$$set = (t) => {
        "width" in t && i(5, (l = t.width)),
          "height" in t && i(6, (h = t.height)),
          "watermark" in t && i(7, (u = t.watermark)),
          "layout" in t && i(8, (c = t.layout)),
          "leftPriceScale" in t && i(9, (p = t.leftPriceScale)),
          "rightPriceScale" in t && i(10, (f = t.rightPriceScale)),
          "overlayPriceScales" in t && i(11, (d = t.overlayPriceScales)),
          "timeScale" in t && i(12, (v = t.timeScale)),
          "crosshair" in t && i(13, (m = t.crosshair)),
          "grid" in t && i(14, (y = t.grid)),
          "localization" in t && i(15, (g = t.localization)),
          "handleScroll" in t && i(16, (w = t.handleScroll)),
          "handleScale" in t && i(17, (b = t.handleScale)),
          "ref" in t && i(18, ($ = t.ref)),
          "$$scope" in t && i(20, (r = t.$$scope));
      }),
      (t.$$.update = () => {
        262112 & t.$$.dirty &&
          i(
            0,
            (s = {
              width: l,
              height: h,
              watermark: u,
              layout: c,
              leftPriceScale: p,
              rightPriceScale: f,
              overlayPriceScales: d,
              timeScale: v,
              crosshair: m,
              grid: y,
              localization: g,
              handleScroll: w,
              handleScale: b,
            })
          ),
          262144 & t.$$.dirty &&
            i(
              2,
              (a = (t) => {
                i(1, (x = t)), void 0 !== $ && $(t);
              })
            );
      }),
      [
        s,
        x,
        a,
        function (t) {
          o("crosshairMove", t);
        },
        function (t) {
          o("click", t);
        },
        l,
        h,
        u,
        c,
        p,
        f,
        d,
        v,
        m,
        y,
        g,
        w,
        b,
        $,
        n,
        r,
      ]
    );
  }
  class _d extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, xd, $d, u, {
          width: 5,
          height: 6,
          watermark: 7,
          layout: 8,
          leftPriceScale: 9,
          rightPriceScale: 10,
          overlayPriceScales: 11,
          timeScale: 12,
          crosshair: 13,
          grid: 14,
          localization: 15,
          handleScroll: 16,
          handleScale: 17,
          ref: 18,
        });
    }
  }
  function Md(t) {
    let e, i;
    return (
      (e = new yd({
        props: { value: t[0], $$slots: { default: [kd] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, n) {
          Ot(e, t, n), (i = !0);
        },
        p(t, i) {
          const n = {};
          1 & i[0] && (n.value = t[0]),
            268435456 & i[0] && (n.$$scope = { dirty: i, ctx: t }),
            e.$set(n);
        },
        i(t) {
          i || ($t(e.$$.fragment, t), (i = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (i = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function kd(t) {
    let e;
    const i = t[27].default,
      n = p(i, t, t[28], null);
    return {
      c() {
        n && n.c();
      },
      m(t, i) {
        n && n.m(t, i), (e = !0);
      },
      p(t, r) {
        n &&
          n.p &&
          (!e || 268435456 & r[0]) &&
          v(n, i, t, t[28], e ? d(i, t[28], r, null) : m(t[28]), null);
      },
      i(t) {
        e || ($t(n, t), (e = !0));
      },
      o(t) {
        xt(n, t), (e = !1);
      },
      d(t) {
        n && n.d(t);
      },
    };
  }
  function Sd(t) {
    let e,
      i,
      n = null !== t[0] && Md(t);
    return {
      c() {
        n && n.c(), (e = N());
      },
      m(t, r) {
        n && n.m(t, r), D(t, e, r), (i = !0);
      },
      p(t, i) {
        null !== t[0]
          ? n
            ? (n.p(t, i), 1 & i[0] && $t(n, 1))
            : ((n = Md(t)), n.c(), $t(n, 1), n.m(e.parentNode, e))
          : n &&
            (wt(),
            xt(n, 1, 1, () => {
              n = null;
            }),
            bt());
      },
      i(t) {
        i || ($t(n), (i = !0));
      },
      o(t) {
        xt(n), (i = !1);
      },
      d(t) {
        n && n.d(t), t && A(e);
      },
    };
  }
  function Cd(t, e, i) {
    let n,
      r,
      { $$slots: o = {}, $$scope: s } = e,
      { lastValueVisible: a } = e,
      { title: l } = e,
      { priceScaleId: h } = e,
      { visible: u } = e,
      { priceLineVisible: c } = e,
      { priceLineSource: p } = e,
      { priceLineWidth: f } = e,
      { priceLineColor: d } = e,
      { priceLineStyle: v } = e,
      { priceFormat: m } = e,
      { baseLineVisible: y } = e,
      { baseLineColor: g } = e,
      { baseLineWidth: w } = e,
      { baseLineStyle: b } = e,
      { autoscaleInfoProvider: $ } = e,
      { scaleMargins: x } = e,
      { color: _ } = e,
      { lineStyle: M } = e,
      { lineWidth: k } = e,
      { lineType: S } = e,
      { crosshairMarkerVisible: C } = e,
      { crosshairMarkerRadius: L } = e,
      { crosshairMarkerBorderColor: D } = e,
      { crosshairMarkerBackgroundColor: A } = e,
      { ref: T } = e,
      { data: j = [] } = e,
      O = null;
    const E = performance.now().toString();
    return (
      dd(() => [{ id: E, type: "Line", options: n, data: j }, r]),
      (t.$$set = (t) => {
        "lastValueVisible" in t && i(1, (a = t.lastValueVisible)),
          "title" in t && i(2, (l = t.title)),
          "priceScaleId" in t && i(3, (h = t.priceScaleId)),
          "visible" in t && i(4, (u = t.visible)),
          "priceLineVisible" in t && i(5, (c = t.priceLineVisible)),
          "priceLineSource" in t && i(6, (p = t.priceLineSource)),
          "priceLineWidth" in t && i(7, (f = t.priceLineWidth)),
          "priceLineColor" in t && i(8, (d = t.priceLineColor)),
          "priceLineStyle" in t && i(9, (v = t.priceLineStyle)),
          "priceFormat" in t && i(10, (m = t.priceFormat)),
          "baseLineVisible" in t && i(11, (y = t.baseLineVisible)),
          "baseLineColor" in t && i(12, (g = t.baseLineColor)),
          "baseLineWidth" in t && i(13, (w = t.baseLineWidth)),
          "baseLineStyle" in t && i(14, (b = t.baseLineStyle)),
          "autoscaleInfoProvider" in t && i(15, ($ = t.autoscaleInfoProvider)),
          "scaleMargins" in t && i(16, (x = t.scaleMargins)),
          "color" in t && i(17, (_ = t.color)),
          "lineStyle" in t && i(18, (M = t.lineStyle)),
          "lineWidth" in t && i(19, (k = t.lineWidth)),
          "lineType" in t && i(20, (S = t.lineType)),
          "crosshairMarkerVisible" in t &&
            i(21, (C = t.crosshairMarkerVisible)),
          "crosshairMarkerRadius" in t && i(22, (L = t.crosshairMarkerRadius)),
          "crosshairMarkerBorderColor" in t &&
            i(23, (D = t.crosshairMarkerBorderColor)),
          "crosshairMarkerBackgroundColor" in t &&
            i(24, (A = t.crosshairMarkerBackgroundColor)),
          "ref" in t && i(25, (T = t.ref)),
          "data" in t && i(26, (j = t.data)),
          "$$scope" in t && i(28, (s = t.$$scope));
      }),
      (t.$$.update = () => {
        33554430 & t.$$.dirty[0] &&
          (n = {
            lastValueVisible: a,
            title: l,
            priceScaleId: h,
            visible: u,
            priceLineVisible: c,
            priceLineSource: p,
            priceLineWidth: f,
            priceLineColor: d,
            priceLineStyle: v,
            priceFormat: m,
            baseLineVisible: y,
            baseLineColor: g,
            baseLineWidth: w,
            baseLineStyle: b,
            autoscaleInfoProvider: $,
            scaleMargins: x,
            color: _,
            lineStyle: M,
            lineWidth: k,
            lineType: S,
            crosshairMarkerBackgroundColor: A,
            crosshairMarkerBorderColor: D,
            crosshairMarkerRadius: L,
            crosshairMarkerVisible: C,
          }),
          33554432 & t.$$.dirty[0] &&
            (r = (t) => {
              i(0, (O = t)), void 0 !== T && T(t);
            });
      }),
      [
        O,
        a,
        l,
        h,
        u,
        c,
        p,
        f,
        d,
        v,
        m,
        y,
        g,
        w,
        b,
        $,
        x,
        _,
        M,
        k,
        S,
        C,
        L,
        D,
        A,
        T,
        j,
        o,
        s,
      ]
    );
  }
  class Ld extends Rt {
    constructor(t) {
      super(),
        Nt(
          this,
          t,
          Cd,
          Sd,
          u,
          {
            lastValueVisible: 1,
            title: 2,
            priceScaleId: 3,
            visible: 4,
            priceLineVisible: 5,
            priceLineSource: 6,
            priceLineWidth: 7,
            priceLineColor: 8,
            priceLineStyle: 9,
            priceFormat: 10,
            baseLineVisible: 11,
            baseLineColor: 12,
            baseLineWidth: 13,
            baseLineStyle: 14,
            autoscaleInfoProvider: 15,
            scaleMargins: 16,
            color: 17,
            lineStyle: 18,
            lineWidth: 19,
            lineType: 20,
            crosshairMarkerVisible: 21,
            crosshairMarkerRadius: 22,
            crosshairMarkerBorderColor: 23,
            crosshairMarkerBackgroundColor: 24,
            ref: 25,
            data: 26,
          },
          null,
          [-1, -1]
        );
    }
  }
  function Dd(e) {
    let i,
      n,
      r = e[2],
      o = Td(e);
    return {
      c() {
        o.c(), (i = N());
      },
      m(t, e) {
        o.m(t, e), D(t, i, e), (n = !0);
      },
      p(e, n) {
        4 & n && a(r, (r = e[2]))
          ? (wt(),
            xt(o, 1, 1, t),
            bt(),
            (o = Td(e)),
            o.c(),
            $t(o),
            o.m(i.parentNode, i))
          : o.p(e, n);
      },
      i(t) {
        n || ($t(o), (n = !0));
      },
      o(t) {
        xt(o), (n = !1);
      },
      d(t) {
        t && A(i), o.d(t);
      },
    };
  }
  function Ad(t) {
    let e, n;
    const r = [t[3], { data: t[2] }];
    let o = {};
    for (let t = 0; t < r.length; t += 1) o = i(o, r[t]);
    return (
      (e = new Ld({ props: o })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, i) {
          Ot(e, t, i), (n = !0);
        },
        p(t, i) {
          const n =
            12 & i ? At(r, [8 & i && Tt(t[3]), 4 & i && { data: t[2] }]) : {};
          e.$set(n);
        },
        i(t) {
          n || ($t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function Td(t) {
    let e, n, r, o, s, a;
    const l = [t[1]];
    let h = { $$slots: { default: [Ad] }, $$scope: { ctx: t } };
    for (let t = 0; t < l.length; t += 1) h = i(h, l[t]);
    return (
      (n = new _d({ props: h })),
      {
        c() {
          (e = j("div")),
            jt(n.$$.fragment),
            (r = P()),
            (o = j("div")),
            (s = E(t[0])),
            B(o, "class", "legend svelte-1uj9tp0"),
            B(e, "class", "trade-chart-wrapper svelte-1uj9tp0");
        },
        m(t, i) {
          D(t, e, i), Ot(n, e, null), S(e, r), S(e, o), S(o, s), (a = !0);
        },
        p(t, e) {
          const i = 2 & e ? At(l, [Tt(t[1])]) : {};
          1028 & e && (i.$$scope = { dirty: e, ctx: t }),
            n.$set(i),
            (!a || 1 & e) && W(s, t[0]);
        },
        i(t) {
          a || ($t(n.$$.fragment, t), (a = !0));
        },
        o(t) {
          xt(n.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && A(e), Et(n);
        },
      }
    );
  }
  function jd(t) {
    let e,
      i,
      n = t[2] && t[2].length && Dd(t);
    return {
      c() {
        n && n.c(), (e = N());
      },
      m(t, r) {
        n && n.m(t, r), D(t, e, r), (i = !0);
      },
      p(t, [i]) {
        t[2] && t[2].length
          ? n
            ? (n.p(t, i), 4 & i && $t(n, 1))
            : ((n = Dd(t)), n.c(), $t(n, 1), n.m(e.parentNode, e))
          : n &&
            (wt(),
            xt(n, 1, 1, () => {
              n = null;
            }),
            bt());
      },
      i(t) {
        i || ($t(n), (i = !0));
      },
      o(t) {
        xt(n), (i = !1);
      },
      d(t) {
        n && n.d(t), t && A(e);
      },
    };
  }
  function Od(t, e, i) {
    let n, r, o, s;
    c(t, Ee, (t) => i(8, (s = t)));
    const a = {
      width: 280,
      height: 280,
      layout: { backgroundColor: "#faf9f8", textColor: "rgba(80, 80, 80, 1)" },
      crosshair: { mode: Su.Normal },
      rightPriceScale: { borderColor: "rgba(197, 203, 206, 1)" },
      timeScale: {
        borderColor: "rgba(197, 203, 206, 1)",
        barSpacing: 4,
        rightOffset: 1,
        timeVisible: !0,
      },
    };
    let { ship: l } = e,
      { quotePair: h } = e,
      { width: u = 280 } = e,
      { height: p = 280 } = e;
    return (
      (t.$$set = (t) => {
        "ship" in t && i(4, (l = t.ship)),
          "quotePair" in t && i(0, (h = t.quotePair)),
          "width" in t && i(5, (u = t.width)),
          "height" in t && i(6, (p = t.height));
      }),
      (t.$$.update = () => {
        272 & t.$$.dirty && i(7, (n = s[l.id])),
          129 & t.$$.dirty && i(2, (r = n ? oo(n[h]) : [])),
          96 & t.$$.dirty && i(1, (o = { ...a, width: u, height: p }));
      }),
      [h, o, r, { color: "rgb(230, 120, 0)", lineWidth: 2 }, l, u, p, n, s]
    );
  }
  class Ed extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, Od, jd, a, { ship: 4, quotePair: 0, width: 5, height: 6 });
    }
  }
  function Pd(e) {
    let i, n, r, o, s, a, l, h, u;
    return {
      c() {
        (i = j("div")),
          (n = j("span")),
          (r = E(e[2])),
          (o = P()),
          (s = j("span")),
          (a = E(e[1])),
          (l = P()),
          (h = j("span")),
          (h.textContent = "%"),
          B(n, "class", "sign svelte-1qbm6mv"),
          B(s, "class", "number svelte-1qbm6mv"),
          B(h, "class", "percent-mark svelte-1qbm6mv"),
          B(i, "class", (u = g(e[4] + e[3]) + " svelte-1qbm6mv")),
          B(i, "style", e[0]);
      },
      m(t, e) {
        D(t, i, e),
          S(i, n),
          S(n, r),
          S(i, o),
          S(i, s),
          S(s, a),
          S(i, l),
          S(i, h);
      },
      p(t, [e]) {
        4 & e && W(r, t[2]),
          2 & e && W(a, t[1]),
          24 & e &&
            u !== (u = g(t[4] + t[3]) + " svelte-1qbm6mv") &&
            B(i, "class", u),
          1 & e && B(i, "style", t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Nd(t, e, i) {
    let n,
      r,
      o,
      s,
      { num: a = 0 } = e,
      { decimals: l = 1 } = e,
      { style: h = "" } = e,
      { className: u = "" } = e;
    return (
      (t.$$set = (t) => {
        "num" in t && i(5, (a = t.num)),
          "decimals" in t && i(6, (l = t.decimals)),
          "style" in t && i(0, (h = t.style)),
          "className" in t && i(7, (u = t.className));
      }),
      (t.$$.update = () => {
        128 & t.$$.dirty && i(4, (n = u ? u + " " : "")),
          32 & t.$$.dirty &&
            i(
              3,
              (r =
                a < 0 ? "percent-display negative" : "percent-display positive")
            ),
          32 & t.$$.dirty && i(2, (o = 0 === a ? "" : a < 0 ? "—" : "+")),
          96 & t.$$.dirty && i(1, (s = Math.abs(100 * a).toFixed(l)));
      }),
      [h, s, o, r, n, a, l, u]
    );
  }
  class Rd extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, Nd, Pd, a, { num: 5, decimals: 6, style: 0, className: 7 });
    }
  }
  function Bd(t) {
    let e, i, n, r, o, s;
    return (
      (o = new Rd({ props: { num: t[0] } })),
      {
        c() {
          (e = j("div")),
            (i = j("div")),
            (n = E(t[3])),
            (r = P()),
            jt(o.$$.fragment),
            B(i, "class", "label svelte-nih7pe"),
            B(e, "class", "premium svelte-nih7pe");
        },
        m(t, a) {
          D(t, e, a), S(e, i), S(i, n), S(e, r), Ot(o, e, null), (s = !0);
        },
        p(t, e) {
          (!s || 8 & e) && W(n, t[3]);
          const i = {};
          1 & e && (i.num = t[0]), o.$set(i);
        },
        i(t) {
          s || ($t(o.$$.fragment, t), (s = !0));
        },
        o(t) {
          xt(o.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && A(e), Et(o);
        },
      }
    );
  }
  function Wd(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h = Hs(t[2]) + "";
    return {
      c() {
        (e = j("div")),
          (i = j("div")),
          (n = j("div")),
          (n.textContent = "Latest Trade"),
          (r = P()),
          (o = j("div")),
          (s = E(h)),
          (a = P()),
          (l = j("span")),
          (l.textContent = "USDC"),
          B(n, "class", "label svelte-nih7pe"),
          B(o, "class", "value svelte-nih7pe"),
          B(l, "class", "currency-mark svelte-nih7pe"),
          B(i, "class", "last-trade svelte-nih7pe"),
          B(e, "class", "column two svelte-nih7pe");
      },
      m(t, h) {
        D(t, e, h),
          S(e, i),
          S(i, n),
          S(i, r),
          S(i, o),
          S(o, s),
          S(i, a),
          S(i, l);
      },
      p(t, e) {
        4 & e && h !== (h = Hs(t[2]) + "") && W(s, h);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function zd(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d = Hs(t[1]) + "",
      v = t[2] && Bd(t),
      m = t[2] && Wd(t);
    return {
      c() {
        (e = j("div")),
          v && v.c(),
          (i = P()),
          (n = j("div")),
          (r = j("div")),
          (o = j("div")),
          (o.innerHTML =
            'Retail (<span class="small svelte-nih7pe">VWAP</span>)'),
          (s = P()),
          (a = j("div")),
          (l = E(d)),
          (h = P()),
          (u = j("span")),
          (u.textContent = "USDC"),
          (c = P()),
          m && m.c(),
          B(o, "class", "label svelte-nih7pe"),
          B(a, "class", "value svelte-nih7pe"),
          B(u, "class", "currency-mark svelte-nih7pe"),
          B(r, "class", "vwap svelte-nih7pe"),
          B(n, "class", "column one svelte-nih7pe"),
          B(e, "class", (p = g(t[4]) + " svelte-nih7pe"));
      },
      m(t, p) {
        D(t, e, p),
          v && v.m(e, null),
          S(e, i),
          S(e, n),
          S(n, r),
          S(r, o),
          S(r, s),
          S(r, a),
          S(a, l),
          S(r, h),
          S(r, u),
          S(e, c),
          m && m.m(e, null),
          (f = !0);
      },
      p(t, [n]) {
        t[2]
          ? v
            ? (v.p(t, n), 4 & n && $t(v, 1))
            : ((v = Bd(t)), v.c(), $t(v, 1), v.m(e, i))
          : v &&
            (wt(),
            xt(v, 1, 1, () => {
              v = null;
            }),
            bt()),
          (!f || 2 & n) && d !== (d = Hs(t[1]) + "") && W(l, d),
          t[2]
            ? m
              ? m.p(t, n)
              : ((m = Wd(t)), m.c(), m.m(e, null))
            : m && (m.d(1), (m = null)),
          (!f || (16 & n && p !== (p = g(t[4]) + " svelte-nih7pe"))) &&
            B(e, "class", p);
      },
      i(t) {
        f || ($t(v), (f = !0));
      },
      o(t) {
        xt(v), (f = !1);
      },
      d(t) {
        t && A(e), v && v.d(), m && m.d();
      },
    };
  }
  function Hd(t, e, i) {
    let n, r, o, s, a, l, h, u;
    c(t, Ee, (t) => i(9, (u = t)));
    let { ship: p } = e,
      { className: f = "" } = e;
    return (
      (t.$$set = (t) => {
        "ship" in t && i(5, (p = t.ship)),
          "className" in t && i(6, (f = t.className));
      }),
      (t.$$.update = () => {
        64 & t.$$.dirty && i(4, (n = "vwap-wrapper" + (f ? " " + f : ""))),
          544 & t.$$.dirty && i(8, (r = u[p.id])),
          256 & t.$$.dirty && i(7, (o = r && r.USDC ? r.USDC : [])),
          128 & t.$$.dirty &&
            i(2, (s = o[o.length - 1] ? o[o.length - 1].value : 0)),
          32 & t.$$.dirty && i(1, (a = p.tradeSettings.vwap)),
          6 & t.$$.dirty && i(0, (l = (Number(s) - a) / a)),
          1 & t.$$.dirty &&
            i(3, (h = l < 0 ? "Discount vs Retail" : "Premium to Retail"));
      }),
      [l, a, s, h, n, p, f, o, r, u]
    );
  }
  class Fd extends Rt {
    constructor(t) {
      super(), Nt(this, t, Hd, zd, a, { ship: 5, className: 6 });
    }
  }
  function Ud(t, e, i) {
    const n = t.slice();
    return (n[2] = e[i]), (n[4] = i), n;
  }
  function Vd(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c,
      p = t[2].type + "",
      f = ("Crew" === t[1] ? "" : t[2].size) + "",
      d = t[2].quantity + "";
    return {
      c() {
        (e = j("div")),
          (i = j("div")),
          (n = E(p)),
          (r = P()),
          (o = j("div")),
          (s = E(f)),
          (a = P()),
          (l = j("div")),
          (h = E(d)),
          (u = P()),
          B(i, "class", "column type svelte-b6hs27"),
          B(o, "class", "column size svelte-b6hs27"),
          B(l, "class", "column count svelte-b6hs27"),
          B(
            e,
            "class",
            (c = g(t[4] % 2 ? "row" : "row odd") + " svelte-b6hs27")
          );
      },
      m(t, c) {
        D(t, e, c),
          S(e, i),
          S(i, n),
          S(e, r),
          S(e, o),
          S(o, s),
          S(e, a),
          S(e, l),
          S(l, h),
          S(e, u);
      },
      p(t, e) {
        1 & e && p !== (p = t[2].type + "") && W(n, p),
          3 & e &&
            f !== (f = ("Crew" === t[1] ? "" : t[2].size) + "") &&
            W(s, f),
          1 & e && d !== (d = t[2].quantity + "") && W(h, d);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function Id(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c,
      p = "Crew" === e[1] ? "" : "Size",
      f = e[0],
      d = [];
    for (let t = 0; t < f.length; t += 1) d[t] = Vd(Ud(e, f, t));
    return {
      c() {
        (i = j("div")),
          (n = j("div")),
          (r = j("div")),
          (o = E(e[1])),
          (s = P()),
          (a = j("div")),
          (l = E(p)),
          (h = P()),
          (u = j("div")),
          (u.textContent = "#"),
          (c = P());
        for (let t = 0; t < d.length; t += 1) d[t].c();
        B(r, "class", "column type svelte-b6hs27"),
          B(a, "class", "column size svelte-b6hs27"),
          B(u, "class", "column count svelte-b6hs27"),
          B(n, "class", "row header svelte-b6hs27"),
          B(i, "class", "grid-wrapper svelte-b6hs27");
      },
      m(t, e) {
        D(t, i, e),
          S(i, n),
          S(n, r),
          S(r, o),
          S(n, s),
          S(n, a),
          S(a, l),
          S(n, h),
          S(n, u),
          S(i, c);
        for (let t = 0; t < d.length; t += 1) d[t].m(i, null);
      },
      p(t, [e]) {
        if (
          (2 & e && W(o, t[1]),
          2 & e && p !== (p = "Crew" === t[1] ? "" : "Size") && W(l, p),
          3 & e)
        ) {
          let n;
          for (f = t[0], n = 0; n < f.length; n += 1) {
            const r = Ud(t, f, n);
            d[n] ? d[n].p(r, e) : ((d[n] = Vd(r)), d[n].c(), d[n].m(i, null));
          }
          for (; n < d.length; n += 1) d[n].d(1);
          d.length = f.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && A(i), T(d, t);
      },
    };
  }
  function qd(t, e, i) {
    let { slots: n } = e,
      { title: r } = e;
    return (
      (t.$$set = (t) => {
        "slots" in t && i(0, (n = t.slots)),
          "title" in t && i(1, (r = t.title));
      }),
      [n, r]
    );
  }
  class Xd extends Rt {
    constructor(t) {
      super(), Nt(this, t, qd, Id, a, { slots: 0, title: 1 });
    }
  }
  function Gd(e) {
    let i;
    return {
      c() {
        i = j("p");
      },
      m(t, e) {
        D(t, i, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Jd(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y,
      g,
      w,
      b,
      $,
      x,
      _,
      M,
      k,
      C,
      L,
      T,
      O,
      N,
      z,
      H,
      F,
      V,
      I,
      q,
      X,
      G,
      J,
      Y,
      Z,
      K,
      Q,
      tt,
      et,
      it,
      nt,
      rt,
      ot = t[1].name + "",
      st = t[1].description + "";
    return (
      (l = new mh({})),
      (v = new Ph({
        props: { ship: t[1], includeSymbol: !0, className: "large" },
      })),
      (_ = new Ed({
        props: { ship: t[1], quotePair: "USDC", width: t[2], height: t[3] },
      })),
      (k = new Ed({
        props: { ship: t[1], quotePair: "ATLAS", width: t[2], height: t[3] },
      })),
      (O = new Fd({ props: { ship: t[1] } })),
      (G = new Ah({ props: { ship: t[1] } })),
      (Z = new Xd({ props: { slots: t[1].slots.crewSlots, title: "Crew" } })),
      (Q = new Xd({
        props: { slots: t[1].slots.componentSlots, title: "Components" },
      })),
      (et = new Xd({
        props: { slots: t[1].slots.moduleSlots, title: "Modules" },
      })),
      {
        c() {
          (e = j("div")),
            (i = j("div")),
            (n = j("div")),
            (r = j("div")),
            (o = j("div")),
            (o.textContent = "Gallery"),
            (s = P()),
            (a = j("div")),
            jt(l.$$.fragment),
            (h = P()),
            (u = j("div")),
            (c = j("div")),
            (p = j("div")),
            (f = E(ot)),
            (d = P()),
            jt(v.$$.fragment),
            (m = P()),
            (y = j("div")),
            (g = j("div")),
            (w = j("div")),
            (b = j("div")),
            ($ = E(st)),
            (x = P()),
            jt(_.$$.fragment),
            (M = P()),
            jt(k.$$.fragment),
            (L = P()),
            (T = j("div")),
            jt(O.$$.fragment),
            (N = P()),
            (z = j("div")),
            (H = j("a")),
            (F = j("span")),
            (F.textContent = "»"),
            (V = E(
              " \r\n                            To Market Page\r\n                            "
            )),
            (I = j("span")),
            (I.textContent = "»"),
            (q = P()),
            (X = j("div")),
            jt(G.$$.fragment),
            (J = P()),
            (Y = j("div")),
            jt(Z.$$.fragment),
            (K = P()),
            jt(Q.$$.fragment),
            (tt = P()),
            jt(et.$$.fragment),
            B(o, "class", "message svelte-110u2r3"),
            B(a, "class", "icon svelte-110u2r3"),
            B(r, "class", "icon-message svelte-110u2r3"),
            B(n, "class", "image svelte-110u2r3"),
            B(n, "style", t[6]),
            B(i, "class", "image-box svelte-110u2r3"),
            B(p, "class", "ship-title-text svelte-110u2r3"),
            B(c, "class", "ship-title-box svelte-110u2r3"),
            B(u, "class", "title-box svelte-110u2r3"),
            B(b, "class", "ship-description svelte-110u2r3"),
            B(w, "class", "column-box-left svelte-110u2r3"),
            ht(() => t[13].call(w)),
            B(F, "class", "arrow svelte-110u2r3"),
            B(I, "class", "arrow svelte-110u2r3"),
            B(H, "title", t[4]),
            B(H, "href", t[5]),
            B(H, "class", "svelte-110u2r3"),
            B(z, "class", "market-link svelte-110u2r3"),
            B(X, "class", "ship-price-box svelte-110u2r3"),
            B(Y, "class", "slots-wrapper svelte-110u2r3"),
            B(T, "class", "column-box-right svelte-110u2r3"),
            B(g, "class", "content svelte-110u2r3"),
            B(y, "class", "content-box svelte-110u2r3"),
            B(e, "class", "feature-ship svelte-110u2r3");
        },
        m(A, j) {
          D(A, e, j),
            S(e, i),
            S(i, n),
            S(n, r),
            S(r, o),
            S(r, s),
            S(r, a),
            Ot(l, a, null),
            S(e, h),
            S(e, u),
            S(u, c),
            S(c, p),
            S(p, f),
            S(c, d),
            Ot(v, c, null),
            S(e, m),
            S(e, y),
            S(y, g),
            S(g, w),
            S(w, b),
            S(b, $),
            S(w, x),
            Ot(_, w, null),
            S(w, M),
            Ot(k, w, null),
            (C = U(w, t[13].bind(w))),
            S(g, L),
            S(g, T),
            Ot(O, T, null),
            S(T, N),
            S(T, z),
            S(z, H),
            S(H, F),
            S(H, V),
            S(H, I),
            S(T, q),
            S(T, X),
            Ot(G, X, null),
            S(T, J),
            S(T, Y),
            Ot(Z, Y, null),
            S(Y, K),
            Ot(Q, Y, null),
            S(Y, tt),
            Ot(et, Y, null),
            (it = !0),
            nt || ((rt = R(i, "click", t[7])), (nt = !0));
        },
        p(t, e) {
          (!it || 64 & e) && B(n, "style", t[6]),
            (!it || 2 & e) && ot !== (ot = t[1].name + "") && W(f, ot);
          const i = {};
          2 & e && (i.ship = t[1]),
            v.$set(i),
            (!it || 2 & e) && st !== (st = t[1].description + "") && W($, st);
          const r = {};
          2 & e && (r.ship = t[1]),
            4 & e && (r.width = t[2]),
            8 & e && (r.height = t[3]),
            _.$set(r);
          const o = {};
          2 & e && (o.ship = t[1]),
            4 & e && (o.width = t[2]),
            8 & e && (o.height = t[3]),
            k.$set(o);
          const s = {};
          2 & e && (s.ship = t[1]),
            O.$set(s),
            (!it || 16 & e) && B(H, "title", t[4]),
            (!it || 32 & e) && B(H, "href", t[5]);
          const a = {};
          2 & e && (a.ship = t[1]), G.$set(a);
          const l = {};
          2 & e && (l.slots = t[1].slots.crewSlots), Z.$set(l);
          const h = {};
          2 & e && (h.slots = t[1].slots.componentSlots), Q.$set(h);
          const u = {};
          2 & e && (u.slots = t[1].slots.moduleSlots), et.$set(u);
        },
        i(t) {
          it ||
            ($t(l.$$.fragment, t),
            $t(v.$$.fragment, t),
            $t(_.$$.fragment, t),
            $t(k.$$.fragment, t),
            $t(O.$$.fragment, t),
            $t(G.$$.fragment, t),
            $t(Z.$$.fragment, t),
            $t(Q.$$.fragment, t),
            $t(et.$$.fragment, t),
            (it = !0));
        },
        o(t) {
          xt(l.$$.fragment, t),
            xt(v.$$.fragment, t),
            xt(_.$$.fragment, t),
            xt(k.$$.fragment, t),
            xt(O.$$.fragment, t),
            xt(G.$$.fragment, t),
            xt(Z.$$.fragment, t),
            xt(Q.$$.fragment, t),
            xt(et.$$.fragment, t),
            (it = !1);
        },
        d(t) {
          t && A(e),
            Et(l),
            Et(v),
            Et(_),
            Et(k),
            C(),
            Et(O),
            Et(G),
            Et(Z),
            Et(Q),
            Et(et),
            (nt = !1),
            rt();
        },
      }
    );
  }
  function Yd(t) {
    let e, i, n, r;
    const o = [Jd, Gd],
      s = [];
    function a(t, e) {
      return t[1] ? 0 : 1;
    }
    return (
      (e = a(t)),
      (i = s[e] = o[e](t)),
      {
        c() {
          i.c(), (n = N());
        },
        m(t, i) {
          s[e].m(t, i), D(t, n, i), (r = !0);
        },
        p(t, [r]) {
          let l = e;
          (e = a(t)),
            e === l
              ? s[e].p(t, r)
              : (wt(),
                xt(s[l], 1, 1, () => {
                  s[l] = null;
                }),
                bt(),
                (i = s[e]),
                i ? i.p(t, r) : ((i = s[e] = o[e](t)), i.c()),
                $t(i, 1),
                i.m(n.parentNode, n));
        },
        i(t) {
          r || ($t(i), (r = !0));
        },
        o(t) {
          xt(i), (r = !1);
        },
        d(t) {
          s[e].d(t), t && A(n);
        },
      }
    );
  }
  function Zd(t, e, i) {
    let n, r, o, s, a, l, h, u, p, f;
    c(t, Ne, (t) => i(12, (f = t)));
    const d = Xe["med-720"];
    let v,
      { message: m = "Ship!" } = e;
    return (
      Q(() => {
        Be.update((t) => ({ ...t, currentIndex: 0 })), bo(n);
      }),
      (t.$$set = (t) => {
        "message" in t && i(8, (m = t.message));
      }),
      (t.$$.update = () => {
        4352 & t.$$.dirty && i(1, (n = f.find((t) => t.id === m))),
          2 & t.$$.dirty &&
            i(11, (r = n.image ? n.image.split("/").pop() : "")),
          2050 & t.$$.dirty &&
            i(10, (o = d[r] ? "images/med-720/" + r : n.image)),
          1024 & t.$$.dirty &&
            i(6, (s = 'background-image: url("' + o + '");')),
          2 & t.$$.dirty &&
            i(9, (a = n.markets.find((t) => "ATLAS" === t.quotePair))),
          512 & t.$$.dirty &&
            i(5, (l = "https://play.staratlas.com/market/" + a.id)),
          2 & t.$$.dirty &&
            i(4, (h = "Official Star Atlas page for " + n.name)),
          1 & t.$$.dirty && i(2, (u = v - 48)),
          4 & t.$$.dirty && i(3, (p = Math.round(u / 1.6)));
      }),
      [
        v,
        n,
        u,
        p,
        h,
        l,
        s,
        () => {
          Be.update((t) => ({ ...t, ship: n }));
        },
        m,
        a,
        o,
        r,
        f,
        function () {
          (v = this.clientWidth), i(0, v);
        },
      ]
    );
  }
  class Kd extends Rt {
    constructor(t) {
      super(), Nt(this, t, Zd, Yd, a, { message: 8 });
    }
  }
  function Qd(t) {
    let e, i, n, r, o;
    return {
      c() {
        (e = j("div")),
          (i = E(t[3])),
          B(e, "class", (n = g(t[2]) + " svelte-3ficm9"));
      },
      m(n, s) {
        D(n, e, s), S(e, i), r || ((o = R(e, "click", t[4])), (r = !0));
      },
      p(t, r) {
        8 & r && W(i, t[3]),
          4 & r && n !== (n = g(t[2]) + " svelte-3ficm9") && B(e, "class", n);
      },
      d(t) {
        t && A(e), (r = !1), o();
      },
    };
  }
  function tv(t) {
    let e, i, n, r, o, s, a, l, h;
    return {
      c() {
        (e = j("div")),
          (i = j("div")),
          (n = E(t[3])),
          (r = P()),
          (o = j("div")),
          (s = E(t[1])),
          B(i, "class", "title svelte-3ficm9"),
          B(o, "class", "symbol svelte-3ficm9"),
          B(e, "class", (a = g(t[2]) + " svelte-3ficm9"));
      },
      m(a, u) {
        D(a, e, u),
          S(e, i),
          S(i, n),
          S(e, r),
          S(e, o),
          S(o, s),
          l || ((h = R(e, "click", t[4])), (l = !0));
      },
      p(t, i) {
        8 & i && W(n, t[3]),
          2 & i && W(s, t[1]),
          4 & i && a !== (a = g(t[2]) + " svelte-3ficm9") && B(e, "class", a);
      },
      d(t) {
        t && A(e), (l = !1), h();
      },
    };
  }
  function ev(e) {
    let i;
    function n(t, e) {
      return "name" === t[0].dataName ? tv : Qd;
    }
    let r = n(e),
      o = r(e);
    return {
      c() {
        o.c(), (i = N());
      },
      m(t, e) {
        o.m(t, e), D(t, i, e);
      },
      p(t, [e]) {
        r === (r = n(t)) && o
          ? o.p(t, e)
          : (o.d(1), (o = r(t)), o && (o.c(), o.m(i.parentNode, i)));
      },
      i: t,
      o: t,
      d(t) {
        o.d(t), t && A(i);
      },
    };
  }
  function iv(t, e, i) {
    let n,
      r,
      o,
      s,
      { column: a } = e,
      { rowNumber: l } = e,
      { row: h } = e;
    return (
      (t.$$set = (t) => {
        "column" in t && i(0, (a = t.column)),
          "rowNumber" in t && i(5, (l = t.rowNumber)),
          "row" in t && i(6, (h = t.row));
      }),
      (t.$$.update = () => {
        65 & t.$$.dirty && i(3, (n = h.data[a.dataName])),
          32 & t.$$.dirty && i(7, (r = Boolean(l % 2))),
          129 & t.$$.dirty &&
            i(
              2,
              (o =
                "cell-highlight " +
                (r ? "odd" : "even") +
                (a.sortDirection ? " sorted" : "") +
                (a.capitalize ? " capitalize" : ""))
            ),
          64 & t.$$.dirty && i(1, (s = h.data.symbol));
      }),
      [
        a,
        s,
        o,
        n,
        () => {
          Re.set(qt(Kd, { message: h.data.id }));
        },
        l,
        h,
        r,
      ]
    );
  }
  function nv(e) {
    let i, n, r, o, s;
    return {
      c() {
        (i = j("div")),
          (n = j("div")),
          B(n, "class", "image svelte-1t4sk06"),
          B(n, "style", e[0]),
          B(i, "class", (r = g(e[1]) + " svelte-1t4sk06"));
      },
      m(t, r) {
        D(t, i, r), S(i, n), o || ((s = R(i, "click", e[2])), (o = !0));
      },
      p(t, [e]) {
        1 & e && B(n, "style", t[0]),
          2 & e && r !== (r = g(t[1]) + " svelte-1t4sk06") && B(i, "class", r);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i), (o = !1), s();
      },
    };
  }
  function rv(t, e, i) {
    let n,
      r,
      o,
      s,
      a,
      l,
      { column: h } = e,
      { rowNumber: u } = e,
      { row: c } = e;
    return (
      (t.$$set = (t) => {
        "column" in t && i(3, (h = t.column)),
          "rowNumber" in t && i(4, (u = t.rowNumber)),
          "row" in t && i(5, (c = t.row));
      }),
      (t.$$.update = () => {
        40 & t.$$.dirty && i(7, (n = c.data[h.dataName])),
          16 & t.$$.dirty && i(9, (r = Boolean(u % 2))),
          512 & t.$$.dirty && i(1, (o = "cell-image " + (r ? "odd" : "even"))),
          128 & t.$$.dirty && i(8, (s = n ? n.split("/").pop() : "")),
          384 & t.$$.dirty &&
            i(6, (a = Xe["thumb-220"][s] ? "images/thumb-220/" + s : n)),
          64 & t.$$.dirty && i(0, (l = 'background-image: url("' + a + '");'));
      }),
      [
        l,
        o,
        () => {
          Re.set(qt(Kd, { message: c.data.id }));
        },
        h,
        u,
        c,
        a,
        n,
        s,
        r,
      ]
    );
  }
  function ov(e) {
    let i,
      n,
      r,
      o,
      s,
      a,
      l = Hs(e[1]) + "";
    return {
      c() {
        (i = j("div")),
          (n = j("div")),
          (n.textContent = "$"),
          (r = P()),
          (o = j("div")),
          (s = E(l)),
          B(n, "class", "currency-mark svelte-1abidoq"),
          B(o, "class", "number svelte-1abidoq"),
          B(i, "class", (a = g(e[0]) + " svelte-1abidoq"));
      },
      m(t, e) {
        D(t, i, e), S(i, n), S(i, r), S(i, o), S(o, s);
      },
      p(t, [e]) {
        2 & e && l !== (l = Hs(t[1]) + "") && W(s, l),
          1 & e && a !== (a = g(t[0]) + " svelte-1abidoq") && B(i, "class", a);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function sv(t, e, i) {
    let n,
      r,
      o,
      { column: s } = e,
      { rowNumber: a } = e,
      { row: l } = e;
    return (
      (t.$$set = (t) => {
        "column" in t && i(2, (s = t.column)),
          "rowNumber" in t && i(3, (a = t.rowNumber)),
          "row" in t && i(4, (l = t.row));
      }),
      (t.$$.update = () => {
        20 & t.$$.dirty && i(1, (n = l.data[s.dataName])),
          8 & t.$$.dirty && i(5, (r = Boolean(a % 2))),
          36 & t.$$.dirty &&
            i(
              0,
              (o =
                "market-number " +
                (r ? "odd" : "even") +
                (s.sortDirection ? " sorted" : "") +
                (s.parent ? " parent" : "") +
                (s.child ? " child" : "") +
                ("vwap" === s.dataName ? " vwap" : ""))
            );
      }),
      [o, n, s, a, l, r]
    );
  }
  const av = {},
    lv = [
      {
        dataName: "image",
        display: " ",
        width: 64,
        noSort: () => !0,
        cellComponent: class extends Rt {
          constructor(t) {
            super(),
              Nt(this, t, rv, nv, a, { column: 3, rowNumber: 4, row: 5 });
          }
        },
      },
      {
        dataName: "name",
        display: "Ship",
        width: 190,
        cellComponent: class extends Rt {
          constructor(t) {
            super(),
              Nt(this, t, iv, ev, a, { column: 0, rowNumber: 5, row: 6 });
          }
        },
      },
      {
        dataName: "askATLAS",
        display: "Ask -Bid Atlas",
        width: 200,
        displayText: " ",
        currency: "atlas",
        cellComponent: Gs,
        headerComponent: class extends Rt {
          constructor(t) {
            super(), Nt(this, t, Es, js, a, { column: 0 });
          }
        },
        child: !0,
      },
      {
        dataName: "askUSDC",
        display: "Ask-Bid USDC",
        displayText: " ",
        width: 134,
        currency: "usdc",
        cellComponent: Gs,
        headerComponent: class extends Rt {
          constructor(t) {
            super(), Nt(this, t, Ls, Ss, a, { column: 0 });
          }
        },
        child: !0,
      },
      {
        dataName: "vwap",
        display: "Retail (VWAP)",
        displayText: "Retail",
        width: 104,
        alignRight: !0,
        cellComponent: class extends Rt {
          constructor(t) {
            super(),
              Nt(this, t, sv, ov, a, { column: 2, rowNumber: 3, row: 4 });
          }
        },
      },
      {
        dataName: "diff",
        display: "USDC - Ask vs. Retail",
        displayText: "Ask vs Retail",
        width: 84,
        doubleLine: !0,
        usePercent: !0,
      },
      {
        dataName: "aprAskUSDC",
        display: "APR vs Ask (USDC)",
        displayText: "APR Ask",
        width: 92,
        capitalize: !0,
        usePercent: !0,
      },
      {
        dataName: "aprVWAP",
        display: "APR vs Retail (VWAP)",
        displayText: "APR Retail",
        width: 104,
        capitalize: !0,
        usePercent: !0,
      },
      { dataName: "spec", display: "Role", width: 110, capitalize: !0 },
      { dataName: "shipClass", display: "Size", width: 100, capitalize: !0 },
      { dataName: "rarity", display: "Rarity", width: 100, capitalize: !0 },
      {
        dataName: "supply",
        display: "Total Supply",
        width: 86,
        doubleLine: !0,
        alignRight: !0,
        capitalize: !0,
        cellComponent: class extends Rt {
          constructor(t) {
            super(),
              Nt(this, t, ph, ch, a, { column: 5, rowNumber: 6, row: 7 });
          }
        },
      },
    ],
    hv = (t, e, i, n) => {
      const r = [],
        o = (n && n["ATLAS/USDC"]) || 0;
      for (const e of t) {
        const {
            airdrops: t,
            id: i,
            image: s,
            name: a,
            attributes: l,
            symbol: h,
            primarySales: u,
            prices: c,
            tradeSettings: p,
          } = e,
          { askATLAS: f, askUSDC: d, bidATLAS: v, bidUSDC: m } = c || av,
          { rarity: y, spec: g, class: w } = l,
          { vwap: b } = p,
          $ = d ? (Number(d) - b) / b : 0,
          x = Number(f) * o,
          _ = Number(v) * o,
          M = e.image ? e.image.split("/").pop() : "",
          k = Xe["thumb-220"][M] ? "images/thumb-220/" + M : e.image;
        let S = 0;
        for (const e of t) S += e.supply;
        for (const t of u) S += t.supply;
        r.push({
          id: i,
          image: s,
          imageURL: k,
          name: a,
          symbol: h,
          askATLAS: f,
          askAtlasEq: x,
          bidATLAS: v,
          bidAtlasEq: _,
          askUSDC: d,
          bidUSDC: m,
          vwap: b,
          diff: $,
          aprVWAP: Mo.apr("VWAP", e, n),
          aprAskUSDC: Mo.apr("askUSDC", e, n),
          spec: g.toLowerCase(),
          shipClass: w.toLowerCase(),
          supply: S,
          rarity: y.toLowerCase(),
        });
      }
      for (const t of Object.keys(i))
        i[t] === Je
          ? r.sort(_o(t, Ze[t])).reverse()
          : i[t] === Ge && r.sort(_o(t, Ze[t]));
      return r;
    },
    uv = () => {
      const t = {};
      for (const e of lv) t[e.dataName] = "";
      return t;
    };
  function cv(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h = t[2].spec + "",
      u = t[2].shipClass + "",
      c = t[0] && pv(t);
    return {
      c() {
        (e = j("div")),
          (i = j("span")),
          (n = E(h)),
          (r = P()),
          (o = j("span")),
          (s = E(u)),
          (a = P()),
          c && c.c(),
          B(i, "class", "capitalize svelte-1pw61jn"),
          B(o, "class", "subtitle svelte-1pw61jn"),
          B(e, "class", (l = g(t[3]) + " svelte-1pw61jn")),
          B(e, "style", t[1]);
      },
      m(t, l) {
        D(t, e, l),
          S(e, i),
          S(i, n),
          S(e, r),
          S(e, o),
          S(o, s),
          S(e, a),
          c && c.m(e, null);
      },
      p(t, i) {
        4 & i && h !== (h = t[2].spec + "") && W(n, h),
          4 & i && u !== (u = t[2].shipClass + "") && W(s, u),
          t[0]
            ? c
              ? c.p(t, i)
              : ((c = pv(t)), c.c(), c.m(e, null))
            : c && (c.d(1), (c = null)),
          8 & i && l !== (l = g(t[3]) + " svelte-1pw61jn") && B(e, "class", l),
          2 & i && B(e, "style", t[1]);
      },
      d(t) {
        t && A(e), c && c.d();
      },
    };
  }
  function pv(t) {
    let e,
      i,
      n,
      r = t[2].symbol + "";
    return {
      c() {
        (e = j("span")),
          (i = E("Symbol: ")),
          (n = E(r)),
          B(e, "class", "ship-symbol svelte-1pw61jn");
      },
      m(t, r) {
        D(t, e, r), S(e, i), S(e, n);
      },
      p(t, e) {
        4 & e && r !== (r = t[2].symbol + "") && W(n, r);
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function fv(e) {
    let i,
      n = e[2] && cv(e);
    return {
      c() {
        n && n.c(), (i = N());
      },
      m(t, e) {
        n && n.m(t, e), D(t, i, e);
      },
      p(t, [e]) {
        t[2]
          ? n
            ? n.p(t, e)
            : ((n = cv(t)), n.c(), n.m(i.parentNode, i))
          : n && (n.d(1), (n = null));
      },
      i: t,
      o: t,
      d(t) {
        n && n.d(t), t && A(i);
      },
    };
  }
  function dv(t, e, i) {
    let n,
      { includeSymbol: r = !1 } = e,
      { style: o = "" } = e,
      { className: s = "" } = e,
      { ship: a } = e;
    return (
      (t.$$set = (t) => {
        "includeSymbol" in t && i(0, (r = t.includeSymbol)),
          "style" in t && i(1, (o = t.style)),
          "className" in t && i(4, (s = t.className)),
          "ship" in t && i(2, (a = t.ship));
      }),
      (t.$$.update = () => {
        16 & t.$$.dirty && i(3, (n = "ship-meta" + (s ? " " + s : "")));
      }),
      [r, o, a, n, s]
    );
  }
  class vv extends Rt {
    constructor(t) {
      super(),
        Nt(this, t, dv, fv, a, {
          includeSymbol: 0,
          style: 1,
          className: 4,
          ship: 2,
        });
    }
  }
  function mv(t) {
    let e, i, n, r, o, s;
    return (
      (i = new Gs({
        props: { row: { data: t[0] }, customClass: "ship-card", column: t[2] },
      })),
      (r = new Gs({
        props: { row: { data: t[0] }, customClass: "ship-card", column: t[3] },
      })),
      {
        c() {
          (e = j("div")),
            jt(i.$$.fragment),
            (n = P()),
            jt(r.$$.fragment),
            B(e, "class", (o = g(t[1]) + " svelte-l0wbob"));
        },
        m(t, o) {
          D(t, e, o), Ot(i, e, null), S(e, n), Ot(r, e, null), (s = !0);
        },
        p(t, [n]) {
          const a = {};
          1 & n && (a.row = { data: t[0] }), i.$set(a);
          const l = {};
          1 & n && (l.row = { data: t[0] }),
            r.$set(l),
            (!s || (2 & n && o !== (o = g(t[1]) + " svelte-l0wbob"))) &&
              B(e, "class", o);
        },
        i(t) {
          s || ($t(i.$$.fragment, t), $t(r.$$.fragment, t), (s = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), xt(r.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && A(e), Et(i), Et(r);
        },
      }
    );
  }
  function yv(t, e, i) {
    const n = lv.find((t) => "askATLAS" === t.dataName),
      r = lv.find((t) => "askUSDC" === t.dataName);
    let { ship: o } = e,
      { priceClass: s = "price-ask-bid" } = e;
    return (
      (t.$$set = (t) => {
        "ship" in t && i(0, (o = t.ship)),
          "priceClass" in t && i(1, (s = t.priceClass));
      }),
      [o, s, n, r]
    );
  }
  class gv extends Rt {
    constructor(t) {
      super(), Nt(this, t, yv, mv, a, { ship: 0, priceClass: 1 });
    }
  }
  function wv(t) {
    let e,
      i,
      n,
      r,
      s,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y,
      g,
      w,
      b,
      $,
      x,
      _,
      M,
      k,
      C,
      L = t[0].name + "";
    return (
      (a = new vv({ props: { ship: t[0], style: "margin-top: -6px;" } })),
      (f = new gv({ props: { ship: t[0], priceClass: "right-column" } })),
      (y = new Ws({
        props: {
          column: t[2],
          row: { data: t[0] },
          customClass: "ship-card narrow",
        },
      })),
      (w = new Ws({
        props: {
          column: t[3],
          row: { data: t[0] },
          customClass: "ship-card narrow",
        },
      })),
      ($ = new Ws({
        props: { column: t[1], row: { data: t[0] }, customClass: "ship-card" },
      })),
      {
        c() {
          (e = j("li")),
            (i = j("div")),
            (n = j("div")),
            (r = E(L)),
            (s = P()),
            jt(a.$$.fragment),
            (l = P()),
            (h = j("div")),
            (u = j("div")),
            (p = P()),
            jt(f.$$.fragment),
            (d = P()),
            (v = j("div")),
            (m = j("div")),
            jt(y.$$.fragment),
            (g = P()),
            jt(w.$$.fragment),
            (b = P()),
            jt($.$$.fragment),
            (x = P()),
            (_ = j("div")),
            (_.innerHTML =
              '<div class="label diff narrow svelte-10yjrmv">APR Ask</div> \n            <div class="label diff narrow svelte-10yjrmv">APR Retail</div> \n            <div class="label diff svelte-10yjrmv">Ask vs Retail</div>'),
            B(n, "class", "ship-name svelte-10yjrmv"),
            B(i, "class", "header-bar svelte-10yjrmv"),
            B(u, "class", "ship-image svelte-10yjrmv"),
            B(
              u,
              "style",
              (c = 'background-image: url("' + t[0].imageURL + '");')
            ),
            B(h, "class", "card-body svelte-10yjrmv"),
            B(m, "class", "footer-row svelte-10yjrmv"),
            B(_, "class", "footer-row svelte-10yjrmv"),
            B(v, "class", "card-footer svelte-10yjrmv"),
            B(e, "class", "ship-data svelte-10yjrmv");
        },
        m(o, c) {
          D(o, e, c),
            S(e, i),
            S(i, n),
            S(n, r),
            S(i, s),
            Ot(a, i, null),
            S(e, l),
            S(e, h),
            S(h, u),
            S(h, p),
            Ot(f, h, null),
            S(e, d),
            S(e, v),
            S(v, m),
            Ot(y, m, null),
            S(m, g),
            Ot(w, m, null),
            S(m, b),
            Ot($, m, null),
            S(v, x),
            S(v, _),
            (M = !0),
            k || ((C = [R(n, "click", t[4]), R(u, "click", t[4])]), (k = !0));
        },
        p(t, [e]) {
          (!M || 1 & e) && L !== (L = t[0].name + "") && W(r, L);
          const i = {};
          1 & e && (i.ship = t[0]),
            a.$set(i),
            (!M ||
              (1 & e &&
                c !==
                  (c = 'background-image: url("' + t[0].imageURL + '");'))) &&
              B(u, "style", c);
          const n = {};
          1 & e && (n.ship = t[0]), f.$set(n);
          const o = {};
          1 & e && (o.row = { data: t[0] }), y.$set(o);
          const s = {};
          1 & e && (s.row = { data: t[0] }), w.$set(s);
          const l = {};
          1 & e && (l.row = { data: t[0] }), $.$set(l);
        },
        i(t) {
          M ||
            ($t(a.$$.fragment, t),
            $t(f.$$.fragment, t),
            $t(y.$$.fragment, t),
            $t(w.$$.fragment, t),
            $t($.$$.fragment, t),
            (M = !0));
        },
        o(t) {
          xt(a.$$.fragment, t),
            xt(f.$$.fragment, t),
            xt(y.$$.fragment, t),
            xt(w.$$.fragment, t),
            xt($.$$.fragment, t),
            (M = !1);
        },
        d(t) {
          t && A(e), Et(a), Et(f), Et(y), Et(w), Et($), (k = !1), o(C);
        },
      }
    );
  }
  function bv(t, e, i) {
    let { ship: n } = e;
    const r = lv.find((t) => "diff" === t.dataName),
      o = lv.find((t) => "aprAskUSDC" === t.dataName),
      s = lv.find((t) => "aprVWAP" === t.dataName);
    return (
      (t.$$set = (t) => {
        "ship" in t && i(0, (n = t.ship));
      }),
      [
        n,
        r,
        o,
        s,
        () => {
          Re.set(qt(Kd, { message: n.id }));
        },
      ]
    );
  }
  class $v extends Rt {
    constructor(t) {
      super(), Nt(this, t, bv, wv, a, { ship: 0 });
    }
  }
  function xv(t, e, i) {
    const n = t.slice();
    return (n[5] = e[i]), n;
  }
  function _v(t, e, i) {
    const n = t.slice();
    return (n[5] = e[i]), n;
  }
  function Mv(t) {
    let e,
      i,
      n,
      r,
      o = [],
      s = new Map(),
      a = t[1];
    const l = (t) => t[5].id;
    for (let e = 0; e < a.length; e += 1) {
      let i = xv(t, a, e),
        n = l(i);
      s.set(n, (o[e] = Sv(n, i)));
    }
    return {
      c() {
        (e = j("div")), (i = j("div")), (n = j("ul"));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        B(n, "class", "list-grid svelte-1vd75v5"),
          B(i, "class", "grid-column svelte-1vd75v5"),
          B(e, "class", "grid-frame svelte-1vd75v5");
      },
      m(t, s) {
        D(t, e, s), S(e, i), S(i, n);
        for (let t = 0; t < o.length; t += 1) o[t].m(n, null);
        r = !0;
      },
      p(t, e) {
        2 & e &&
          ((a = t[1]),
          wt(),
          (o = Dt(o, e, l, 1, t, a, s, n, Lt, Sv, null, xv)),
          bt());
      },
      i(t) {
        if (!r) {
          for (let t = 0; t < a.length; t += 1) $t(o[t]);
          r = !0;
        }
      },
      o(t) {
        for (let t = 0; t < o.length; t += 1) xt(o[t]);
        r = !1;
      },
      d(t) {
        t && A(e);
        for (let t = 0; t < o.length; t += 1) o[t].d();
      },
    };
  }
  function kv(t) {
    let e,
      i,
      n = [],
      r = new Map(),
      o = t[1];
    const s = (t) => t[5].id;
    for (let e = 0; e < o.length; e += 1) {
      let i = _v(t, o, e),
        a = s(i);
      r.set(a, (n[e] = Cv(a, i)));
    }
    return {
      c() {
        e = j("ul");
        for (let t = 0; t < n.length; t += 1) n[t].c();
        B(e, "class", "list-grid svelte-1vd75v5");
      },
      m(t, r) {
        D(t, e, r);
        for (let t = 0; t < n.length; t += 1) n[t].m(e, null);
        i = !0;
      },
      p(t, i) {
        2 & i &&
          ((o = t[1]),
          wt(),
          (n = Dt(n, i, s, 1, t, o, r, e, Lt, Cv, null, _v)),
          bt());
      },
      i(t) {
        if (!i) {
          for (let t = 0; t < o.length; t += 1) $t(n[t]);
          i = !0;
        }
      },
      o(t) {
        for (let t = 0; t < n.length; t += 1) xt(n[t]);
        i = !1;
      },
      d(t) {
        t && A(e);
        for (let t = 0; t < n.length; t += 1) n[t].d();
      },
    };
  }
  function Sv(t, e) {
    let i, n, r;
    return (
      (n = new $v({ props: { ship: e[5] } })),
      {
        key: t,
        first: null,
        c() {
          (i = N()), jt(n.$$.fragment), (this.first = i);
        },
        m(t, e) {
          D(t, i, e), Ot(n, t, e), (r = !0);
        },
        p(t, i) {
          e = t;
          const r = {};
          2 & i && (r.ship = e[5]), n.$set(r);
        },
        i(t) {
          r || ($t(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          xt(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && A(i), Et(n, t);
        },
      }
    );
  }
  function Cv(t, e) {
    let i, n, r;
    return (
      (n = new $v({ props: { ship: e[5] } })),
      {
        key: t,
        first: null,
        c() {
          (i = N()), jt(n.$$.fragment), (this.first = i);
        },
        m(t, e) {
          D(t, i, e), Ot(n, t, e), (r = !0);
        },
        p(t, i) {
          e = t;
          const r = {};
          2 & i && (r.ship = e[5]), n.$set(r);
        },
        i(t) {
          r || ($t(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          xt(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && A(i), Et(n, t);
        },
      }
    );
  }
  function Lv(t) {
    let e, i, n, r;
    const o = [kv, Mv],
      s = [];
    function a(t, e) {
      return t[0] ? 0 : 1;
    }
    return (
      (e = a(t)),
      (i = s[e] = o[e](t)),
      {
        c() {
          i.c(), (n = N());
        },
        m(t, i) {
          s[e].m(t, i), D(t, n, i), (r = !0);
        },
        p(t, [r]) {
          let l = e;
          (e = a(t)),
            e === l
              ? s[e].p(t, r)
              : (wt(),
                xt(s[l], 1, 1, () => {
                  s[l] = null;
                }),
                bt(),
                (i = s[e]),
                i ? i.p(t, r) : ((i = s[e] = o[e](t)), i.c()),
                $t(i, 1),
                i.m(n.parentNode, n));
        },
        i(t) {
          r || ($t(i), (r = !0));
        },
        o(t) {
          xt(i), (r = !1);
        },
        d(t) {
          s[e].d(t), t && A(n);
        },
      }
    );
  }
  function Dv(t, e, i) {
    let n, r, o;
    c(t, je, (t) => i(2, (r = t))), c(t, Ne, (t) => i(3, (o = t)));
    let { contained: s = !1 } = e;
    const a = uv();
    return (
      (t.$$set = (t) => {
        "contained" in t && i(0, (s = t.contained));
      }),
      (t.$$.update = () => {
        12 & t.$$.dirty && i(1, (n = hv(o, 0, a, r)));
      }),
      [s, n, r, o]
    );
  }
  class Av extends Rt {
    constructor(t) {
      super(), Nt(this, t, Dv, Lv, a, { contained: 0 });
    }
  }
  var Tv = fi(function (t, e) {
    !(function (e, i) {
      var n = (function (t) {
        var e = ["N", "E", "A", "D"];
        function i(t, e) {
          (t.super_ = e),
            (t.prototype = Object.create(e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        }
        function n(t, e) {
          Object.defineProperty(this, "kind", { value: t, enumerable: !0 }),
            e &&
              e.length &&
              Object.defineProperty(this, "path", { value: e, enumerable: !0 });
        }
        function r(t, e, i) {
          r.super_.call(this, "E", t),
            Object.defineProperty(this, "lhs", { value: e, enumerable: !0 }),
            Object.defineProperty(this, "rhs", { value: i, enumerable: !0 });
        }
        function o(t, e) {
          o.super_.call(this, "N", t),
            Object.defineProperty(this, "rhs", { value: e, enumerable: !0 });
        }
        function s(t, e) {
          s.super_.call(this, "D", t),
            Object.defineProperty(this, "lhs", { value: e, enumerable: !0 });
        }
        function a(t, e, i) {
          a.super_.call(this, "A", t),
            Object.defineProperty(this, "index", { value: e, enumerable: !0 }),
            Object.defineProperty(this, "item", { value: i, enumerable: !0 });
        }
        function l(t, e, i) {
          var n = t.slice((i || e) + 1 || t.length);
          return (t.length = e < 0 ? t.length + e : e), t.push.apply(t, n), t;
        }
        function h(t) {
          var e = typeof t;
          return "object" !== e
            ? e
            : t === Math
            ? "math"
            : null === t
            ? "null"
            : Array.isArray(t)
            ? "array"
            : "[object Date]" === Object.prototype.toString.call(t)
            ? "date"
            : "function" == typeof t.toString && /^\/.*\//.test(t.toString())
            ? "regexp"
            : "object";
        }
        function u(t) {
          var e = 0;
          if (0 === t.length) return e;
          for (var i = 0; i < t.length; i++) {
            (e = (e << 5) - e + t.charCodeAt(i)), (e &= e);
          }
          return e;
        }
        function c(t) {
          var e = 0,
            i = h(t);
          if ("array" === i)
            return (
              t.forEach(function (t) {
                e += c(t);
              }),
              e + u("[type: array, hash: " + e + "]")
            );
          if ("object" === i) {
            for (var n in t)
              if (t.hasOwnProperty(n)) {
                var r =
                  "[ type: object, key: " +
                  n +
                  ", value hash: " +
                  c(t[n]) +
                  "]";
                e += u(r);
              }
            return e;
          }
          return e + u("[ type: " + i + " ; value: " + t + "]");
        }
        function p(t, e, i, n, l, u, f, d) {
          (i = i || []), (f = f || []);
          var v = (l = l || []).slice(0);
          if (null != u) {
            if (n) {
              if ("function" == typeof n && n(v, u)) return;
              if ("object" == typeof n) {
                if (n.prefilter && n.prefilter(v, u)) return;
                if (n.normalize) {
                  var m = n.normalize(v, u, t, e);
                  m && ((t = m[0]), (e = m[1]));
                }
              }
            }
            v.push(u);
          }
          "regexp" === h(t) &&
            "regexp" === h(e) &&
            ((t = t.toString()), (e = e.toString()));
          var y,
            g,
            w,
            b,
            $ = typeof t,
            x = typeof e,
            _ =
              "undefined" !== $ ||
              (f &&
                f.length > 0 &&
                f[f.length - 1].lhs &&
                Object.getOwnPropertyDescriptor(f[f.length - 1].lhs, u)),
            M =
              "undefined" !== x ||
              (f &&
                f.length > 0 &&
                f[f.length - 1].rhs &&
                Object.getOwnPropertyDescriptor(f[f.length - 1].rhs, u));
          if (!_ && M) i.push(new o(v, e));
          else if (!M && _) i.push(new s(v, t));
          else if (h(t) !== h(e)) i.push(new r(v, t, e));
          else if ("date" === h(t) && t - e != 0) i.push(new r(v, t, e));
          else if ("object" === $ && null !== t && null !== e) {
            for (y = f.length - 1; y > -1; --y)
              if (f[y].lhs === t) {
                b = !0;
                break;
              }
            if (b) t !== e && i.push(new r(v, t, e));
            else {
              if ((f.push({ lhs: t, rhs: e }), Array.isArray(t))) {
                for (
                  d &&
                    (t.sort(function (t, e) {
                      return c(t) - c(e);
                    }),
                    e.sort(function (t, e) {
                      return c(t) - c(e);
                    })),
                    y = e.length - 1,
                    g = t.length - 1;
                  y > g;

                )
                  i.push(new a(v, y, new o(void 0, e[y--])));
                for (; g > y; ) i.push(new a(v, g, new s(void 0, t[g--])));
                for (; y >= 0; --y) p(t[y], e[y], i, n, v, y, f, d);
              } else {
                var k = Object.keys(t),
                  S = Object.keys(e);
                for (y = 0; y < k.length; ++y)
                  (w = k[y]),
                    (b = S.indexOf(w)) >= 0
                      ? (p(t[w], e[w], i, n, v, w, f, d), (S[b] = null))
                      : p(t[w], void 0, i, n, v, w, f, d);
                for (y = 0; y < S.length; ++y)
                  (w = S[y]) && p(void 0, e[w], i, n, v, w, f, d);
              }
              f.length = f.length - 1;
            }
          } else
            t !== e &&
              (("number" === $ && isNaN(t) && isNaN(e)) ||
                i.push(new r(v, t, e)));
        }
        function f(t, e, i, n, r) {
          var o = [];
          if ((p(t, e, o, n, null, null, null, r), i))
            for (var s = 0; s < o.length; ++s) i(o[s]);
          return o;
        }
        function d(t, e, i, n, r, o, s) {
          return p(t, e, i, n, r, o, s, !0);
        }
        function v(t, e, i, n) {
          var r = f(
            t,
            e,
            n
              ? function (t) {
                  t && n.push(t);
                }
              : void 0,
            i
          );
          return n || (r.length ? r : void 0);
        }
        function m(t, e, i, n) {
          var r = f(
            t,
            e,
            n
              ? function (t) {
                  t && n.push(t);
                }
              : void 0,
            i,
            !0
          );
          return n || (r.length ? r : void 0);
        }
        function y(t, e, i) {
          if (i.path && i.path.length) {
            var n,
              r = t[e],
              o = i.path.length - 1;
            for (n = 0; n < o; n++) r = r[i.path[n]];
            switch (i.kind) {
              case "A":
                y(r[i.path[n]], i.index, i.item);
                break;
              case "D":
                delete r[i.path[n]];
                break;
              case "E":
              case "N":
                r[i.path[n]] = i.rhs;
            }
          } else
            switch (i.kind) {
              case "A":
                y(t[e], i.index, i.item);
                break;
              case "D":
                t = l(t, e);
                break;
              case "E":
              case "N":
                t[e] = i.rhs;
            }
          return t;
        }
        function g(t, i, n) {
          if (
            (void 0 === n && i && ~e.indexOf(i.kind) && (n = i),
            t && n && n.kind)
          ) {
            for (
              var r = t, o = -1, s = n.path ? n.path.length - 1 : 0;
              ++o < s;

            )
              void 0 === r[n.path[o]] &&
                (r[n.path[o]] =
                  void 0 !== n.path[o + 1] && "number" == typeof n.path[o + 1]
                    ? []
                    : {}),
                (r = r[n.path[o]]);
            switch (n.kind) {
              case "A":
                n.path && void 0 === r[n.path[o]] && (r[n.path[o]] = []),
                  y(n.path ? r[n.path[o]] : r, n.index, n.item);
                break;
              case "D":
                delete r[n.path[o]];
                break;
              case "E":
              case "N":
                r[n.path[o]] = n.rhs;
            }
          }
        }
        function w(t, e, i) {
          if (i.path && i.path.length) {
            var n,
              r = t[e],
              o = i.path.length - 1;
            for (n = 0; n < o; n++) r = r[i.path[n]];
            switch (i.kind) {
              case "A":
                w(r[i.path[n]], i.index, i.item);
                break;
              case "D":
              case "E":
                r[i.path[n]] = i.lhs;
                break;
              case "N":
                delete r[i.path[n]];
            }
          } else
            switch (i.kind) {
              case "A":
                w(t[e], i.index, i.item);
                break;
              case "D":
              case "E":
                t[e] = i.lhs;
                break;
              case "N":
                t = l(t, e);
            }
          return t;
        }
        function b(t, e, i) {
          if (t && e && i && i.kind) {
            var n,
              r,
              o = t;
            for (r = i.path.length - 1, n = 0; n < r; n++)
              void 0 === o[i.path[n]] && (o[i.path[n]] = {}),
                (o = o[i.path[n]]);
            switch (i.kind) {
              case "A":
                w(o[i.path[n]], i.index, i.item);
                break;
              case "D":
              case "E":
                o[i.path[n]] = i.lhs;
                break;
              case "N":
                delete o[i.path[n]];
            }
          }
        }
        function $(t, e, i) {
          t &&
            e &&
            f(t, e, function (n) {
              (i && !i(t, e, n)) || g(t, e, n);
            });
        }
        i(r, n),
          i(o, n),
          i(s, n),
          i(a, n),
          Object.defineProperties(v, {
            diff: { value: v, enumerable: !0 },
            orderIndependentDiff: { value: m, enumerable: !0 },
            observableDiff: { value: f, enumerable: !0 },
            orderIndependentObservableDiff: { value: d, enumerable: !0 },
            orderIndepHash: { value: c, enumerable: !0 },
            applyDiff: { value: $, enumerable: !0 },
            applyChange: { value: g, enumerable: !0 },
            revertChange: { value: b, enumerable: !0 },
            isConflict: {
              value: function () {
                return "undefined" != typeof $conflict;
              },
              enumerable: !0,
            },
          }),
          (v.DeepDiff = v),
          t && (t.DeepDiff = v);
        return v;
      })(e);
      t.exports = n;
    })(pi);
  });
  const jv = Tv.applyChange,
    Ov = Tv.diff;
  class Ev {
    constructor(t) {
      (this.obj = JSON.parse(JSON.stringify(t))),
        (this.forward = []),
        (this.backward = []);
    }
    clear() {
      (this.forward = []), (this.backward = []);
    }
    recordChange(t) {
      const e = { redo: Ov(this.obj, t), undo: Ov(t, this.obj) };
      e.redo && e.undo
        ? ((this.obj = JSON.parse(JSON.stringify(t))), this.backward.push(e))
        : console.warn("Objects could not be diffed");
    }
    undo() {
      if (0 === this.backward.length) return null;
      const t = this.backward.pop();
      return (
        t.undo.forEach((t) => jv(this.obj, t)),
        this.forward.push(t),
        JSON.parse(JSON.stringify(this.obj))
      );
    }
    redo() {
      if (0 === this.forward.length) return null;
      const t = this.forward.pop();
      return (
        t.redo.forEach((t) => jv(this.obj, t)),
        this.backward.push(t),
        JSON.parse(JSON.stringify(this.obj))
      );
    }
    undoAll() {
      for (; this.backward.length > 0; ) this.undo();
      return this.obj;
    }
    redoAll() {
      for (; this.forward.length > 0; ) this.redo();
      return this.obj;
    }
  }
  const { window: Pv } = Ct;
  function Nv(t, e, i) {
    const n = t.slice();
    return (n[75] = e[i]), (n[77] = i), n;
  }
  function Rv(t, e, i) {
    const n = t.slice();
    return (n[78] = e[i]), (n[80] = i), n;
  }
  function Bv(t, e, i) {
    const n = t.slice();
    return (n[78] = e[i]), (n[77] = i), n;
  }
  function Wv(t, e, i) {
    const n = t.slice();
    return (n[78] = e[i]), (n[77] = i), n;
  }
  function zv(t) {
    let e;
    return {
      c() {
        (e = j("div")),
          B(e, "class", "column-action-line svelte-15j5yeo"),
          z(e, "left", t[8] - 2 + "px");
      },
      m(t, i) {
        D(t, e, i);
      },
      p(t, i) {
        256 & i[0] && z(e, "left", t[8] - 2 + "px");
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function Hv(t) {
    let e;
    return {
      c() {
        (e = j("div")),
          B(e, "class", "row-action-line svelte-15j5yeo"),
          z(e, "top", t[17] - 2 + "px");
      },
      m(t, i) {
        D(t, e, i);
      },
      p(t, i) {
        131072 & i[0] && z(e, "top", t[17] - 2 + "px");
      },
      d(t) {
        t && A(e);
      },
    };
  }
  function Fv(e) {
    let i,
      n,
      r = (e[78].display || "") + "";
    return {
      c() {
        (i = j("div")),
          (n = E(r)),
          B(i, "class", "cell-default svelte-15j5yeo");
      },
      m(t, e) {
        D(t, i, e), S(i, n);
      },
      p(t, e) {
        1 & e[0] && r !== (r = (t[78].display || "") + "") && W(n, r);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Uv(t) {
    let e, i, n;
    var r = t[78].headerComponent;
    function o(t) {
      return { props: { column: t[78] } };
    }
    return (
      r && (e = new r(o(t))),
      {
        c() {
          e && jt(e.$$.fragment), (i = N());
        },
        m(t, r) {
          e && Ot(e, t, r), D(t, i, r), (n = !0);
        },
        p(t, n) {
          const s = {};
          if (
            (1 & n[0] && (s.column = t[78]), r !== (r = t[78].headerComponent))
          ) {
            if (e) {
              wt();
              const t = e;
              xt(t.$$.fragment, 1, 0, () => {
                Et(t, 1);
              }),
                bt();
            }
            r
              ? ((e = new r(o(t))),
                jt(e.$$.fragment),
                $t(e.$$.fragment, 1),
                Ot(e, i.parentNode, i))
              : (e = null);
          } else r && e.$set(s);
        },
        i(t) {
          n || (e && $t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          e && xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(i), e && Et(e, t);
        },
      }
    );
  }
  function Vv(t) {
    let e, i, n;
    function r(...e) {
      return t[55](t[77], ...e);
    }
    return {
      c() {
        (e = j("div")),
          B(e, "class", "grid-cell-size-capture svelte-15j5yeo"),
          z(
            e,
            "left",
            im({
              i: t[77],
              columnWidths: t[21],
              __affixedColumnIndices: t[1],
              __scrollLeft: t[4],
            }) +
              t[21][t[77]] -
              Math.floor(t[16] / 2) +
              "px"
          ),
          z(e, "width", t[16] + "px");
      },
      m(t, o) {
        D(t, e, o), i || ((n = R(e, "mousedown", r)), (i = !0));
      },
      p(i, n) {
        (t = i),
          2162707 & n[0] &&
            z(
              e,
              "left",
              im({
                i: t[77],
                columnWidths: t[21],
                __affixedColumnIndices: t[1],
                __scrollLeft: t[4],
              }) +
                t[21][t[77]] -
                Math.floor(t[16] / 2) +
                "px"
            ),
          65536 & n[0] && z(e, "width", t[16] + "px");
      },
      d(t) {
        t && A(e), (i = !1), n();
      },
    };
  }
  function Iv(t, e) {
    let i, n, r, a, l, h, u, c, p, f, d;
    const v = [Uv, Fv],
      m = [];
    function y(t, e) {
      return t[78].headerComponent ? 0 : 1;
    }
    function b(...t) {
      return e[54](e[77], ...t);
    }
    (n = y(e)), (r = m[n] = v[n](e));
    let $ = e[13] && !e[78].disallowResize && Vv(e);
    return {
      key: t,
      first: null,
      c() {
        (i = j("div")),
          r.c(),
          (u = P()),
          $ && $.c(),
          (c = N()),
          B(
            i,
            "class",
            (a =
              g(
                "grid-cell" +
                  (e[78].parent ? " parent" : "") +
                  (e[78].child ? " child" : "")
              ) + " svelte-15j5yeo")
          ),
          z(i, "z-index", e[38](e[1], e[77])),
          z(
            i,
            "left",
            im({
              i: e[77],
              columnWidths: e[21],
              __affixedColumnIndices: e[1],
              __scrollLeft: e[4],
            }) + "px"
          ),
          z(i, "width", e[21][e[77]] + "px"),
          z(i, "height", e[11] + "px"),
          z(i, "line-height", e[11] + "px"),
          B(i, "title", (l = e[78].display || "")),
          B(i, "role", "columnheader"),
          (this.first = i);
      },
      m(t, r) {
        D(t, i, r),
          m[n].m(i, null),
          D(t, u, r),
          $ && $.m(t, r),
          D(t, c, r),
          (p = !0),
          f ||
            ((d = [R(i, "mousedown", b), w((h = rm.call(null, i, e[14])))]),
            (f = !0));
      },
      p(t, o) {
        let u = n;
        (n = y((e = t))),
          n === u
            ? m[n].p(e, o)
            : (wt(),
              xt(m[u], 1, 1, () => {
                m[u] = null;
              }),
              bt(),
              (r = m[n]),
              r ? r.p(e, o) : ((r = m[n] = v[n](e)), r.c()),
              $t(r, 1),
              r.m(i, null)),
          (!p ||
            (1 & o[0] &&
              a !==
                (a =
                  g(
                    "grid-cell" +
                      (e[78].parent ? " parent" : "") +
                      (e[78].child ? " child" : "")
                  ) + " svelte-15j5yeo"))) &&
            B(i, "class", a),
          (!p || 3 & o[0]) && z(i, "z-index", e[38](e[1], e[77])),
          (!p || 2097171 & o[0]) &&
            z(
              i,
              "left",
              im({
                i: e[77],
                columnWidths: e[21],
                __affixedColumnIndices: e[1],
                __scrollLeft: e[4],
              }) + "px"
            ),
          (!p || 2097153 & o[0]) && z(i, "width", e[21][e[77]] + "px"),
          (!p || 2048 & o[0]) && z(i, "height", e[11] + "px"),
          (!p || 2048 & o[0]) && z(i, "line-height", e[11] + "px"),
          (!p || (1 & o[0] && l !== (l = e[78].display || ""))) &&
            B(i, "title", l),
          h && s(h.update) && 16384 & o[0] && h.update.call(null, e[14]),
          e[13] && !e[78].disallowResize
            ? $
              ? $.p(e, o)
              : (($ = Vv(e)), $.c(), $.m(c.parentNode, c))
            : $ && ($.d(1), ($ = null));
      },
      i(t) {
        p || ($t(r), (p = !0));
      },
      o(t) {
        xt(r), (p = !1);
      },
      d(t) {
        t && A(i), m[n].d(), t && A(u), $ && $.d(t), t && A(c), (f = !1), o(d);
      },
    };
  }
  function qv(t) {
    let e, i, n;
    return {
      c() {
        (e = j("div")),
          B(e, "class", "column-affix-marker svelte-15j5yeo"),
          z(e, "left", t[24] + "px"),
          z(e, "height", t[26] + "px");
      },
      m(r, o) {
        D(r, e, o), i || ((n = R(e, "mousedown", t[32])), (i = !0));
      },
      p(t, i) {
        16777216 & i[0] && z(e, "left", t[24] + "px"),
          67108864 & i[0] && z(e, "height", t[26] + "px");
      },
      d(t) {
        t && A(e), (i = !1), n();
      },
    };
  }
  function Xv(t) {
    let e,
      i = t[0],
      n = [];
    for (let e = 0; e < i.length; e += 1) n[e] = Jv(Bv(t, i, e));
    return {
      c() {
        for (let t = 0; t < n.length; t += 1) n[t].c();
        e = N();
      },
      m(t, i) {
        for (let e = 0; e < n.length; e += 1) n[e].m(t, i);
        D(t, e, i);
      },
      p(t, r) {
        if ((2162707 & r[0]) | (16 & r[1])) {
          let o;
          for (i = t[0], o = 0; o < i.length; o += 1) {
            const s = Bv(t, i, o);
            n[o]
              ? n[o].p(s, r)
              : ((n[o] = Jv(s)), n[o].c(), n[o].m(e.parentNode, e));
          }
          for (; o < n.length; o += 1) n[o].d(1);
          n.length = i.length;
        }
      },
      d(t) {
        T(n, t), t && A(e);
      },
    };
  }
  function Gv(t) {
    let e, i, n;
    function r(...e) {
      return t[56](t[77], ...e);
    }
    return {
      c() {
        (e = j("div")),
          B(e, "class", "grid-cell-size-capture svelte-15j5yeo"),
          z(
            e,
            "left",
            im({
              i: t[77] + 1,
              columnWidths: t[21],
              __affixedColumnIndices: t[1],
              __scrollLeft: t[4],
            }) -
              Math.floor(t[16] / 2) +
              "px"
          ),
          z(e, "width", t[16] + "px");
      },
      m(t, o) {
        D(t, e, o), i || ((n = R(e, "mousedown", r)), (i = !0));
      },
      p(i, n) {
        (t = i),
          2162706 & n[0] &&
            z(
              e,
              "left",
              im({
                i: t[77] + 1,
                columnWidths: t[21],
                __affixedColumnIndices: t[1],
                __scrollLeft: t[4],
              }) -
                Math.floor(t[16] / 2) +
                "px"
            ),
          65536 & n[0] && z(e, "width", t[16] + "px");
      },
      d(t) {
        t && A(e), (i = !1), n();
      },
    };
  }
  function Jv(t) {
    let e,
      i = !t[78].disallowResize && Gv(t);
    return {
      c() {
        i && i.c(), (e = N());
      },
      m(t, n) {
        i && i.m(t, n), D(t, e, n);
      },
      p(t, n) {
        t[78].disallowResize
          ? i && (i.d(1), (i = null))
          : i
          ? i.p(t, n)
          : ((i = Gv(t)), i.c(), i.m(e.parentNode, e));
      },
      d(t) {
        i && i.d(t), t && A(e);
      },
    };
  }
  function Yv(e) {
    let i,
      n,
      r,
      o,
      s = (e[75].data[e[78].dataName] || "") + "";
    return {
      c() {
        (i = j("div")),
          (n = E(s)),
          B(i, "style", (r = e[78].style)),
          B(
            i,
            "class",
            (o =
              g(
                `cell-default ${
                  e[75].i % 2 != 0 || !e[20] || (e[9] === e[75].i && e[19])
                    ? ""
                    : " stripedRow "
                } ${e[9] === e[75].i && e[19] ? "selectedrow" : ""}`
              ) + " svelte-15j5yeo")
          );
      },
      m(t, e) {
        D(t, i, e), S(i, n);
      },
      p(t, e) {
        134217729 & e[0] &&
          s !== (s = (t[75].data[t[78].dataName] || "") + "") &&
          W(n, s),
          1 & e[0] && r !== (r = t[78].style) && B(i, "style", r),
          135791104 & e[0] &&
            o !==
              (o =
                g(
                  `cell-default ${
                    t[75].i % 2 != 0 || !t[20] || (t[9] === t[75].i && t[19])
                      ? ""
                      : " stripedRow "
                  } ${t[9] === t[75].i && t[19] ? "selectedrow" : ""}`
                ) + " svelte-15j5yeo") &&
            B(i, "class", o);
      },
      i: t,
      o: t,
      d(t) {
        t && A(i);
      },
    };
  }
  function Zv(t) {
    let e, i, n;
    var r = t[78].cellComponent;
    function o(t) {
      return { props: { rowNumber: t[75].i, column: t[78], row: t[75] } };
    }
    return (
      r && ((e = new r(o(t))), e.$on("valueupdate", t[31])),
      {
        c() {
          e && jt(e.$$.fragment), (i = N());
        },
        m(t, r) {
          e && Ot(e, t, r), D(t, i, r), (n = !0);
        },
        p(t, n) {
          const s = {};
          if (
            (134217728 & n[0] && (s.rowNumber = t[75].i),
            1 & n[0] && (s.column = t[78]),
            134217728 & n[0] && (s.row = t[75]),
            r !== (r = t[78].cellComponent))
          ) {
            if (e) {
              wt();
              const t = e;
              xt(t.$$.fragment, 1, 0, () => {
                Et(t, 1);
              }),
                bt();
            }
            r
              ? ((e = new r(o(t))),
                e.$on("valueupdate", t[31]),
                jt(e.$$.fragment),
                $t(e.$$.fragment, 1),
                Ot(e, i.parentNode, i))
              : (e = null);
          } else r && e.$set(s);
        },
        i(t) {
          n || (e && $t(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          e && xt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          t && A(i), e && Et(e, t);
        },
      }
    );
  }
  function Kv(t) {
    let e, i, n, r, o;
    const s = [Zv, Yv],
      a = [];
    function l(t, e) {
      return t[78].cellComponent ? 0 : 1;
    }
    return (
      (i = l(t)),
      (n = a[i] = s[i](t)),
      {
        c() {
          (e = j("div")),
            n.c(),
            B(
              e,
              "class",
              (r =
                g(
                  "grid-cell" +
                    (t[78].parent ? " parent" : "") +
                    (t[78].child ? " child" : "")
                ) + " svelte-15j5yeo")
            ),
            z(e, "z-index", t[38](t[1], t[80])),
            z(
              e,
              "left",
              im({
                i: t[80],
                columnWidths: t[21],
                __affixedColumnIndices: t[1],
                __scrollLeft: t[4],
              }) + "px"
            ),
            z(e, "height", t[10] + "px"),
            z(e, "line-height", t[10] + "px"),
            z(e, "width", t[21][t[80]] + "px"),
            B(e, "role", "cell");
        },
        m(t, n) {
          D(t, e, n), a[i].m(e, null), (o = !0);
        },
        p(t, h) {
          let u = i;
          (i = l(t)),
            i === u
              ? a[i].p(t, h)
              : (wt(),
                xt(a[u], 1, 1, () => {
                  a[u] = null;
                }),
                bt(),
                (n = a[i]),
                n ? n.p(t, h) : ((n = a[i] = s[i](t)), n.c()),
                $t(n, 1),
                n.m(e, null)),
            (!o ||
              (1 & h[0] &&
                r !==
                  (r =
                    g(
                      "grid-cell" +
                        (t[78].parent ? " parent" : "") +
                        (t[78].child ? " child" : "")
                    ) + " svelte-15j5yeo"))) &&
              B(e, "class", r),
            (!o || 2 & h[0]) && z(e, "z-index", t[38](t[1], t[80])),
            (!o || 2097170 & h[0]) &&
              z(
                e,
                "left",
                im({
                  i: t[80],
                  columnWidths: t[21],
                  __affixedColumnIndices: t[1],
                  __scrollLeft: t[4],
                }) + "px"
              ),
            (!o || 1024 & h[0]) && z(e, "height", t[10] + "px"),
            (!o || 1024 & h[0]) && z(e, "line-height", t[10] + "px"),
            (!o || 2097152 & h[0]) && z(e, "width", t[21][t[80]] + "px");
        },
        i(t) {
          o || ($t(n), (o = !0));
        },
        o(t) {
          xt(n), (o = !1);
        },
        d(t) {
          t && A(e), a[i].d();
        },
      }
    );
  }
  function Qv(t) {
    let e,
      i,
      n,
      r,
      o,
      s,
      a,
      l,
      h = t[0],
      u = [];
    for (let e = 0; e < h.length; e += 1) u[e] = Kv(Rv(t, h, e));
    const c = (t) =>
      xt(u[t], 1, 1, () => {
        u[t] = null;
      });
    return {
      c() {
        e = j("div");
        for (let t = 0; t < u.length; t += 1) u[t].c();
        (i = P()),
          B(e, "class", "grid-row  svelte-15j5yeo"),
          z(e, "top", t[39](t[75].i, t[10]) + "px"),
          z(e, "height", t[10] + "px"),
          z(e, "width", t[25] + "px"),
          B(e, "role", "row"),
          B(e, "aria-rowindex", (n = t[75].i)),
          B(e, "rownumber", (r = t[75].i)),
          B(e, "viewindex", (o = t[77]));
      },
      m(n, r) {
        D(n, e, r);
        for (let t = 0; t < u.length; t += 1) u[t].m(e, null);
        S(e, i), (s = !0), a || ((l = R(e, "click", t[40])), (a = !0));
      },
      p(t, o) {
        if ((137889299 & o[0]) | (129 & o[1])) {
          let n;
          for (h = t[0], n = 0; n < h.length; n += 1) {
            const r = Rv(t, h, n);
            u[n]
              ? (u[n].p(r, o), $t(u[n], 1))
              : ((u[n] = Kv(r)), u[n].c(), $t(u[n], 1), u[n].m(e, i));
          }
          for (wt(), n = h.length; n < u.length; n += 1) c(n);
          bt();
        }
        (!s || 134218752 & o[0]) && z(e, "top", t[39](t[75].i, t[10]) + "px"),
          (!s || 1024 & o[0]) && z(e, "height", t[10] + "px"),
          (!s || 33554432 & o[0]) && z(e, "width", t[25] + "px"),
          (!s || (134217728 & o[0] && n !== (n = t[75].i))) &&
            B(e, "aria-rowindex", n),
          (!s || (134217728 & o[0] && r !== (r = t[75].i))) &&
            B(e, "rownumber", r);
      },
      i(t) {
        if (!s) {
          for (let t = 0; t < h.length; t += 1) $t(u[t]);
          s = !0;
        }
      },
      o(t) {
        u = u.filter(Boolean);
        for (let t = 0; t < u.length; t += 1) xt(u[t]);
        s = !1;
      },
      d(t) {
        t && A(e), T(u, t), (a = !1), l();
      },
    };
  }
  function tm(t) {
    let e,
      i,
      n,
      r,
      s,
      a,
      l,
      h,
      u,
      c,
      p,
      f,
      d,
      v,
      m,
      y,
      g,
      w = [],
      b = new Map(),
      $ = (t[2] || t[7] || t[6]) && zv(t),
      x = t[5] && Hv(t),
      _ = t[0];
    const M = (t) => t[77];
    for (let e = 0; e < _.length; e += 1) {
      let i = Wv(t, _, e),
        n = M(i);
      b.set(n, (w[e] = Iv(n, i)));
    }
    let k = t[15] && qv(t),
      C = t[12] && Xv(t),
      L = t[27],
      O = [];
    for (let e = 0; e < L.length; e += 1) O[e] = Qv(Nv(t, L, e));
    const E = (t) =>
      xt(O[t], 1, 1, () => {
        O[t] = null;
      });
    return {
      c() {
        (e = j("div")),
          $ && $.c(),
          (i = P()),
          x && x.c(),
          (n = P()),
          (r = j("div")),
          (s = j("div"));
        for (let t = 0; t < w.length; t += 1) w[t].c();
        (a = P()),
          (l = j("div")),
          k && k.c(),
          (h = P()),
          (u = j("div")),
          (c = P()),
          (p = j("div")),
          C && C.c(),
          (f = P());
        for (let t = 0; t < O.length; t += 1) O[t].c();
        B(s, "class", "grid-header-row svelte-15j5yeo"),
          z(s, "left", "-" + t[4] + "px"),
          z(s, "height", t[11] + "px"),
          z(s, "width", t[25] + "px"),
          B(s, "role", "row"),
          B(r, "class", "grid-headers svelte-15j5yeo"),
          B(r, "rolw", "rowgroup"),
          z(r, "height", t[11] + "px"),
          z(r, "margin-top", t[10] - t[11] + "px"),
          B(u, "class", "row-affix-marker svelte-15j5yeo"),
          z(u, "top", t[18] + "px"),
          z(u, "width", t[25] + "px"),
          B(p, "class", "grid-space svelte-15j5yeo"),
          z(p, "width", t[25] + "px"),
          z(p, "height", t[26] + "px"),
          B(l, "class", "grid-inner svelte-15j5yeo"),
          z(l, "height", "100%"),
          B(l, "role", "rowgroup"),
          ht(() => t[58].call(l)),
          B(
            e,
            "class",
            (v =
              "data-grid-wrapper " +
              (t[2] || t[7] ? "resizing" : "") +
              " svelte-15j5yeo")
          ),
          z(e, "padding-top", t[10] + "px"),
          B(e, "role", "table");
      },
      m(o, v) {
        D(o, e, v),
          $ && $.m(e, null),
          S(e, i),
          x && x.m(e, null),
          S(e, n),
          S(e, r),
          S(r, s);
        for (let t = 0; t < w.length; t += 1) w[t].m(s, null);
        S(e, a),
          S(e, l),
          k && k.m(l, null),
          S(l, h),
          S(l, u),
          S(l, c),
          S(l, p),
          C && C.m(p, null),
          S(l, f);
        for (let t = 0; t < O.length; t += 1) O[t].m(l, null);
        t[57](l),
          (d = U(l, t[58].bind(l))),
          t[59](e),
          (m = !0),
          y ||
            ((g = [
              R(Pv, "mouseup", t[30]),
              R(Pv, "mousemove", t[29]),
              R(Pv, "keydown", t[28]),
              R(u, "mousedown", t[33]),
              R(l, "scroll", t[36]),
              R(l, "mousewheel", t[37]),
              R(l, "DOMMouseScroll", t[37]),
            ]),
            (y = !0));
      },
      p(t, o) {
        if (
          (t[2] || t[7] || t[6]
            ? $
              ? $.p(t, o)
              : (($ = zv(t)), $.c(), $.m(e, i))
            : $ && ($.d(1), ($ = null)),
          t[5]
            ? x
              ? x.p(t, o)
              : ((x = Hv(t)), x.c(), x.m(e, n))
            : x && (x.d(1), (x = null)),
          (2189331 & o[0]) | (152 & o[1]) &&
            ((_ = t[0]),
            wt(),
            (w = Dt(w, o, M, 1, t, _, b, s, Lt, Iv, null, Wv)),
            bt()),
          (!m || 16 & o[0]) && z(s, "left", "-" + t[4] + "px"),
          (!m || 2048 & o[0]) && z(s, "height", t[11] + "px"),
          (!m || 33554432 & o[0]) && z(s, "width", t[25] + "px"),
          (!m || 2048 & o[0]) && z(r, "height", t[11] + "px"),
          (!m || 3072 & o[0]) && z(r, "margin-top", t[10] - t[11] + "px"),
          t[15]
            ? k
              ? k.p(t, o)
              : ((k = qv(t)), k.c(), k.m(l, h))
            : k && (k.d(1), (k = null)),
          (!m || 262144 & o[0]) && z(u, "top", t[18] + "px"),
          (!m || 33554432 & o[0]) && z(u, "width", t[25] + "px"),
          t[12]
            ? C
              ? C.p(t, o)
              : ((C = Xv(t)), C.c(), C.m(p, null))
            : C && (C.d(1), (C = null)),
          (!m || 33554432 & o[0]) && z(p, "width", t[25] + "px"),
          (!m || 67108864 & o[0]) && z(p, "height", t[26] + "px"),
          (171443731 & o[0]) | (897 & o[1]))
        ) {
          let e;
          for (L = t[27], e = 0; e < L.length; e += 1) {
            const i = Nv(t, L, e);
            O[e]
              ? (O[e].p(i, o), $t(O[e], 1))
              : ((O[e] = Qv(i)), O[e].c(), $t(O[e], 1), O[e].m(l, null));
          }
          for (wt(), e = L.length; e < O.length; e += 1) E(e);
          bt();
        }
        (!m ||
          (132 & o[0] &&
            v !==
              (v =
                "data-grid-wrapper " +
                (t[2] || t[7] ? "resizing" : "") +
                " svelte-15j5yeo"))) &&
          B(e, "class", v),
          (!m || 1024 & o[0]) && z(e, "padding-top", t[10] + "px");
      },
      i(t) {
        if (!m) {
          for (let t = 0; t < _.length; t += 1) $t(w[t]);
          for (let t = 0; t < L.length; t += 1) $t(O[t]);
          m = !0;
        }
      },
      o(t) {
        for (let t = 0; t < w.length; t += 1) xt(w[t]);
        O = O.filter(Boolean);
        for (let t = 0; t < O.length; t += 1) xt(O[t]);
        m = !1;
      },
      d(i) {
        i && A(e), $ && $.d(), x && x.d();
        for (let t = 0; t < w.length; t += 1) w[t].d();
        k && k.d(),
          C && C.d(),
          T(O, i),
          t[57](null),
          d(),
          t[59](null),
          (y = !1),
          o(g);
      },
    };
  }
  const em = 30;
  function im({
    i: t,
    columnWidths: e,
    __affixedColumnIndices: i,
    __scrollLeft: n,
  }) {
    if (i.indexOf(t) >= 0) {
      if (0 === t) return n;
      let i = n;
      for (let n = t - 1; n >= 0; n--) i += e[n];
      return i;
    }
    let r = 0;
    for (let i = 0; i < t; i++) r += e[i];
    return r;
  }
  function nm(t, e, i, n) {
    let r = 0;
    for (let o = 0; o < e.length; o++) {
      im({
        i: o,
        columnWidths: e,
        __affixedColumnIndices: i,
        __scrollLeft: n,
      }) +
        Math.floor(e[o] / 2) <
        t && (r = o + 1);
    }
    if (i.length > 0) {
      const o = im({
          i: i[0],
          columnWidths: e,
          __affixedColumnIndices: i,
          __scrollLeft: n,
        }),
        s = im({
          i: i[i.length - 1],
          columnWidths: e,
          __affixedColumnIndices: i,
          __scrollLeft: n,
        }),
        a = s + e[i[i.length - 1]],
        l = im({
          i: r,
          columnWidths: e,
          __affixedColumnIndices: i,
          __scrollLeft: n,
        });
      if (l > o && l < a)
        if (l < a && l > s) r = i[i.length - 1];
        else
          for (let o = 0; o < i.length; o++) {
            im({
              i: i[o],
              columnWidths: e,
              __affixedColumnIndices: i,
              __scrollLeft: n,
            }) +
              Math.floor(e[i[o]] / 2) <
              t && (r = i[o] + 1);
          }
    }
    return r;
  }
  function rm(t, e) {
    let i = null,
      n = !1,
      r = 0;
    function o(t) {
      n && (i.style.left = t.pageX - r + "px");
    }
    function s(t) {
      n &&
        1 === t.which &&
        ((n = !1), document.body.removeChild(i), (i = null));
    }
    function a(e) {
      1 === e.which &&
        ((n = !0),
        i && document.body.removeChild(i),
        (i = (function () {
          const e = document.createElement("div");
          e.innerHTML = t.innerHTML;
          const {
            width: i,
            height: n,
            textAlign: r,
            fontWeight: o,
          } = getComputedStyle(t);
          return (
            (e.style.width = i),
            (e.style.height = n),
            (e.style.maxHeight = n),
            (e.style.textAlign = r),
            (e.style.fontWeight = o),
            (e.style.position = "absolute"),
            (e.style.opacity = "0.5"),
            (e.style.pointerEvents = "none"),
            (e.style.overflow = "hidden"),
            (e.style.background = "#dddddd"),
            (e.style["z-index"] = "99999"),
            e
          );
        })()),
        (r = e.offsetX),
        (i.style.top =
          t.getBoundingClientRect().top +
          (window.pageYOffset ||
            (document.documentElement.clientHeight
              ? document.documentElement.scrollTop
              : document.body.scrollTop)) +
          "px"),
        (i.style.left = e.pageX - r + "px"),
        document.body.appendChild(i));
    }
    function l() {
      window.addEventListener("mousemove", o),
        window.addEventListener("mouseup", s),
        t.addEventListener("mousedown", a);
    }
    function h() {
      window.removeEventListener("mousemove", o),
        window.removeEventListener("mouseup", s),
        t.removeEventListener("mousedown", a);
    }
    return (
      e && l(),
      {
        destroy() {
          h();
        },
        update(t) {
          t ? l() : h();
        },
      }
    );
  }
  function om(t, e, i) {
    const n = tt();
    let r,
      o,
      s = !1,
      a = null,
      { rows: l = [] } = e,
      { columns: h = [] } = e,
      { rowHeight: u = 24 } = e,
      { headerHeight: c = 32 } = e,
      { allowResizeFromTableCells: p = !1 } = e,
      { allowResizeFromTableHeaders: f = !0 } = e,
      { allowColumnReordering: d = !0 } = e,
      { allowColumnAffix: v = !0 } = e,
      { __extraRows: m = 0 } = e,
      { __columnHeaderResizeCaptureWidth: y = 20 } = e,
      { __affixedColumnIndices: g = [] } = e,
      { __affixingRow: w = !1 } = e,
      { __affixingColumn: b = !1 } = e,
      { __rowActionLineTop: $ = 0 } = e,
      { __rowAffixLineTop: x = 0 } = e,
      { __columnDragging: _ = !1 } = e,
      { __columnIndexBeingDragged: M = null } = e,
      { __columnDragOffsetX: k = 0 } = e,
      { __resizing: S = !1 } = e,
      { __columnIndexBeingResized: C = null } = e,
      { __columnActionLineLeft: L = 0 } = e,
      { __innerOffsetHeight: D = 0 } = e,
      { __scrollTop: A = 0 } = e,
      { __scrollLeft: T = 0 } = e,
      { __scrolledAllTheWayToTheRight: j = !1 } = e,
      { threshold: O = 0 } = e,
      { horizontal: E = !1 } = e,
      { hasMore: P = !0 } = e,
      { EnableCursor: N = !1 } = e,
      { CurrentSelectedRow: R = 0 } = e,
      { Striped: B = !1 } = e,
      { fixColumn: W = 0 } = e;
    function z(t) {
      const e = R;
      1 === t
        ? l.length - 1 >= R + 1 && i(9, R++, R)
        : R - 1 >= 0 && i(9, R--, R),
        e !== R && n("changecursor", { CurrentSelectedRow: R }),
        1 === t && R < l.length
          ? i(23, (o.scrollTop += u), o)
          : i(23, (o.scrollTop -= u), o);
    }
    function H(t) {
      i(6, (b = !1));
    }
    function F(t, e) {
      1 === t.which &&
        d &&
        (i(7, (_ = !0)),
        i(44, (M = e)),
        i(45, (k = t.offsetX)),
        i(
          8,
          (L =
            im({
              i: e,
              columnWidths: X,
              __scrollLeft: T,
              __affixedColumnIndices: g,
            }) - T)
        ));
    }
    function U(t) {
      if (1 !== t.which) return;
      if (!_) return;
      const { left: e } = r.getBoundingClientRect(),
        o = nm(t.pageX - e + T - k, X, g, T);
      let s = h;
      s.splice(o > M ? o - 1 : o, 0, s.splice(M, 1)[0]),
        i(0, (h = s)),
        setTimeout(() => n("columnOrderUpdated"), 0),
        i(7, (_ = !1)),
        i(45, (k = 0)),
        i(44, (M = null));
    }
    function V(t, e) {
      if (1 !== t.which) return;
      const { left: n } = r.getBoundingClientRect();
      i(2, (S = !0)),
        i(8, (L = t.pageX - n - T)),
        i(46, (C = e)),
        t.stopPropagation();
    }
    Q(() => {
      (a = new Ev(l)),
        (() => {
          if (W) {
            const t = [];
            for (let e = 0; e <= W; e++) t.push(e);
            i(1, (g = t));
          }
        })();
    });
    let I,
      q = 0,
      X = h.map((t) => t.width || em),
      G = l.length,
      J = 0,
      Y = u * G,
      Z = Math.ceil(D / u);
    return (
      (t.$$set = (t) => {
        "rows" in t && i(41, (l = t.rows)),
          "columns" in t && i(0, (h = t.columns)),
          "rowHeight" in t && i(10, (u = t.rowHeight)),
          "headerHeight" in t && i(11, (c = t.headerHeight)),
          "allowResizeFromTableCells" in t &&
            i(12, (p = t.allowResizeFromTableCells)),
          "allowResizeFromTableHeaders" in t &&
            i(13, (f = t.allowResizeFromTableHeaders)),
          "allowColumnReordering" in t && i(14, (d = t.allowColumnReordering)),
          "allowColumnAffix" in t && i(15, (v = t.allowColumnAffix)),
          "__extraRows" in t && i(47, (m = t.__extraRows)),
          "__columnHeaderResizeCaptureWidth" in t &&
            i(16, (y = t.__columnHeaderResizeCaptureWidth)),
          "__affixedColumnIndices" in t && i(1, (g = t.__affixedColumnIndices)),
          "__affixingRow" in t && i(5, (w = t.__affixingRow)),
          "__affixingColumn" in t && i(6, (b = t.__affixingColumn)),
          "__rowActionLineTop" in t && i(17, ($ = t.__rowActionLineTop)),
          "__rowAffixLineTop" in t && i(18, (x = t.__rowAffixLineTop)),
          "__columnDragging" in t && i(7, (_ = t.__columnDragging)),
          "__columnIndexBeingDragged" in t &&
            i(44, (M = t.__columnIndexBeingDragged)),
          "__columnDragOffsetX" in t && i(45, (k = t.__columnDragOffsetX)),
          "__resizing" in t && i(2, (S = t.__resizing)),
          "__columnIndexBeingResized" in t &&
            i(46, (C = t.__columnIndexBeingResized)),
          "__columnActionLineLeft" in t && i(8, (L = t.__columnActionLineLeft)),
          "__innerOffsetHeight" in t && i(3, (D = t.__innerOffsetHeight)),
          "__scrollTop" in t && i(42, (A = t.__scrollTop)),
          "__scrollLeft" in t && i(4, (T = t.__scrollLeft)),
          "__scrolledAllTheWayToTheRight" in t &&
            i(43, (j = t.__scrolledAllTheWayToTheRight)),
          "threshold" in t && i(48, (O = t.threshold)),
          "horizontal" in t && i(49, (E = t.horizontal)),
          "hasMore" in t && i(50, (P = t.hasMore)),
          "EnableCursor" in t && i(19, (N = t.EnableCursor)),
          "CurrentSelectedRow" in t && i(9, (R = t.CurrentSelectedRow)),
          "Striped" in t && i(20, (B = t.Striped)),
          "fixColumn" in t && i(51, (W = t.fixColumn));
      }),
      (t.$$.update = () => {
        if (
          (1 & t.$$.dirty[0] && i(21, (X = h.map((t) => t.width || em))),
          2097170 & t.$$.dirty[0])
        ) {
          0 === g.length && i(24, (q = 0));
          let t = T;
          for (let e = 0; e < g.length; e++) t += X[g[e]];
          i(24, (q = t));
        }
        if (
          (1024 & t.$$.dirty[1] && i(52, (G = l.length)),
          (2097156 & t.$$.dirty[0]) | (4096 & t.$$.dirty[1]))
        ) {
          let t = 0;
          for (let e = 0; e < X.length; e++) t += X[e];
          S && j && (t *= 2), i(25, (J = t));
        }
        if (
          ((1024 & t.$$.dirty[0]) | (2097152 & t.$$.dirty[1]) &&
            i(26, (Y = u * G)),
          1032 & t.$$.dirty[0] && i(53, (Z = Math.ceil(D / u))),
          (1024 & t.$$.dirty[0]) | (4262912 & t.$$.dirty[1]))
        ) {
          const t = Math.max(0, Math.floor(A / u - m / 2)),
            e = t + Z + m;
          i(27, (I = l.slice(t, e).map((e, i) => ({ i: i + t, data: e }))));
        }
      }),
      [
        h,
        g,
        S,
        D,
        T,
        w,
        b,
        _,
        L,
        R,
        u,
        c,
        p,
        f,
        d,
        v,
        y,
        $,
        x,
        N,
        B,
        X,
        r,
        o,
        q,
        J,
        Y,
        I,
        function (t) {
          if (
            (t.ctrlKey &&
              (90 === t.keyCode &&
                (!(function () {
                  const t = a.undo();
                  t && i(41, (l = t));
                })(),
                t.preventDefault()),
              89 === t.keyCode &&
                (!(function () {
                  const t = a.redo();
                  t && i(41, (l = t));
                })(),
                t.preventDefault())),
            [38, 40].includes(t.keyCode) && N)
          ) {
            z(40 == t.keyCode ? 1 : 0), t.preventDefault();
          }
        },
        function (t) {
          !(function (t) {
            if (!_) return;
            if (1 !== t.which) return void U(t);
            const { left: e } = r.getBoundingClientRect(),
              n = nm(t.pageX - e + T - k, X, g, T);
            i(
              8,
              (L =
                im({
                  i: n,
                  columnWidths: X,
                  __affixedColumnIndices: g,
                  __scrollLeft: T,
                }) - T)
            );
          })(t),
            (function (t) {
              if (!S) return;
              const { left: e } = r.getBoundingClientRect(),
                o = t.pageX - e,
                s = im({
                  i: C,
                  columnWidths: X,
                  __affixedColumnIndices: g,
                  __scrollLeft: T,
                }),
                a = s - T + em,
                l = Math.max(o + T - s, em);
              i(0, (h[C].width = l), h),
                i(8, (L = Math.max(o, a))),
                1 !== t.which &&
                  (i(2, (S = !1)),
                  i(46, (C = null)),
                  setTimeout(
                    () => n("columnWidthUpdated", { idx: C, width: l }),
                    0
                  ));
            })(t),
            (function (t) {
              if (!b) return;
              if (1 !== t.which) return void H();
              const { left: e } = r.getBoundingClientRect(),
                n = t.pageX - e + T,
                o = nm(n, X, g, T),
                s = [];
              for (let t = 0; t < o; t++) s.push(t);
              i(8, (L = n)),
                i(1, (g = s)),
                console.log("INDICES", s),
                t.preventDefault();
            })(t);
        },
        function (t) {
          U(t),
            (function (t) {
              if (!S) return;
              n("columnWidthUpdated"), i(2, (S = !1)), i(46, (C = null));
            })(),
            i(5, (w = !1)),
            H();
        },
        function (t) {
          i(
            41,
            (l[t.detail.rowNumber][t.detail.column.dataName] = t.detail.value),
            l
          ),
            n("valueUpdated", t);
        },
        function (t) {
          1 === t.which &&
            (g.length > 0
              ? (i(23, (o.scrollLeft = 0), o), i(6, (b = !0)))
              : i(6, (b = !0)));
        },
        function (t) {
          i(5, (w = !0));
        },
        F,
        V,
        function (t) {
          const { scrollTop: e, scrollLeft: r } = o;
          A !== e && i(42, (A = e)),
            T !== r && i(4, (T = r)),
            i(
              43,
              (j = Math.ceil(o.scrollWidth - o.scrollLeft) === o.clientWidth)
            ),
            (E
              ? t.target.scrollWidth -
                t.target.clientWidth -
                t.target.scrollLeft
              : t.target.scrollHeight -
                t.target.clientHeight -
                t.target.scrollTop) <= O
              ? (!s && P && n("loadMore"), (s = !0))
              : (s = !1);
        },
        function (t) {
          if (N) {
            let e = Math.sign(t.deltaY);
            e || (e = t.detail > 0 ? 1 : 0), z(e), t.preventDefault();
          }
        },
        function (t, e) {
          return -1 === t.indexOf(e) ? 1 : 2;
        },
        function (t, e) {
          return t * e;
        },
        (t) => {
          const e =
            t.target.offsetParent.offsetParent.getAttribute("rownumber");
          n("clickrow", { index: e }),
            N &&
              (i(9, (R = parseInt(e, 10))),
              n("changecursor", { CurrentSelectedRow: R }));
        },
        l,
        A,
        j,
        M,
        k,
        C,
        m,
        O,
        E,
        P,
        W,
        G,
        Z,
        (t, e) => F(e, t),
        (t, e) => V(e, t),
        (t, e) => V(e, t),
        function (t) {
          rt[t ? "unshift" : "push"](() => {
            (o = t), i(23, o);
          });
        },
        function () {
          (D = this.offsetHeight), i(3, D);
        },
        function (t) {
          rt[t ? "unshift" : "push"](() => {
            (r = t), i(22, r);
          });
        },
      ]
    );
  }
  class sm extends Rt {
    constructor(t) {
      super(),
        Nt(
          this,
          t,
          om,
          tm,
          a,
          {
            rows: 41,
            columns: 0,
            rowHeight: 10,
            headerHeight: 11,
            allowResizeFromTableCells: 12,
            allowResizeFromTableHeaders: 13,
            allowColumnReordering: 14,
            allowColumnAffix: 15,
            __extraRows: 47,
            __columnHeaderResizeCaptureWidth: 16,
            __affixedColumnIndices: 1,
            __affixingRow: 5,
            __affixingColumn: 6,
            __rowActionLineTop: 17,
            __rowAffixLineTop: 18,
            __columnDragging: 7,
            __columnIndexBeingDragged: 44,
            __columnDragOffsetX: 45,
            __resizing: 2,
            __columnIndexBeingResized: 46,
            __columnActionLineLeft: 8,
            __innerOffsetHeight: 3,
            __scrollTop: 42,
            __scrollLeft: 4,
            __scrolledAllTheWayToTheRight: 43,
            threshold: 48,
            horizontal: 49,
            hasMore: 50,
            EnableCursor: 19,
            CurrentSelectedRow: 9,
            Striped: 20,
            fixColumn: 51,
          },
          null,
          [-1, -1, -1]
        );
    }
  }
  function am(t) {
    let e, i, n, r, o;
    return (
      (n = new sm({
        props: {
          headerHeight: 44,
          rowHeight: 52,
          rows: t[4],
          columns: t[1],
          fixColumn: 1,
          allowColumnReordering: !1,
        },
      })),
      {
        c() {
          (e = j("div")),
            (i = j("div")),
            jt(n.$$.fragment),
            B(i, "class", "grid-wrapper svelte-15w4stl"),
            ht(() => t[10].call(i)),
            B(e, "class", "grid-frame svelte-15w4stl"),
            B(e, "style", t[3]);
        },
        m(s, a) {
          D(s, e, a),
            S(e, i),
            Ot(n, i, null),
            (r = U(i, t[10].bind(i))),
            (o = !0);
        },
        p(t, [i]) {
          const r = {};
          16 & i && (r.rows = t[4]),
            2 & i && (r.columns = t[1]),
            n.$set(r),
            (!o || 8 & i) && B(e, "style", t[3]);
        },
        i(t) {
          o || ($t(n.$$.fragment, t), (o = !0));
        },
        o(t) {
          xt(n.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && A(e), Et(n), r();
        },
      }
    );
  }
  function lm(t, e, i) {
    let n, r, o, s, a, l;
    c(t, Ne, (t) => i(8, (a = t))), c(t, je, (t) => i(9, (l = t)));
    let h,
      u,
      { heightOffset: p = 0 } = e,
      f = uv();
    const d = (t) => (e) => {
      i(6, (f[t] = "" === f[t] ? Ge : f[t] === Ge ? Je : ""), f);
      for (const e of Object.keys(f)) e !== t && i(6, (f[e] = ""), f);
      i(6, (f = { ...f }));
    };
    return (
      (t.$$set = (t) => {
        "heightOffset" in t && i(5, (p = t.heightOffset));
      }),
      (t.$$.update = () => {
        32 & t.$$.dirty && i(7, (n = 126 + p)),
          65 & t.$$.dirty &&
            i(
              1,
              (r = h
                ? ((t, e) =>
                    lv.map((i) => ({
                      ...i,
                      headerComponent: i.headerComponent || ws,
                      cellComponent: i.cellComponent || Ws,
                      clickHandler: t(i.dataName),
                      sortDirection: e[i.dataName],
                    })))(d, f)
                : [])
            ),
          834 & t.$$.dirty && i(4, (o = hv(a, 0, f, l))),
          384 & t.$$.dirty &&
            i(
              3,
              (s =
                "height: " +
                ((t, e) => {
                  const i = 53 * (t.length || 1) + 56,
                    n = le() < 760,
                    r = ue() < 600;
                  return n || r ? i : Math.min(ue() - e, i);
                })(a, n) +
                "px;")
            );
      }),
      [
        h,
        r,
        u,
        s,
        o,
        p,
        f,
        n,
        a,
        l,
        function () {
          (h = this.clientWidth), (u = this.clientHeight), i(0, h), i(2, u);
        },
      ]
    );
  }
  class hm extends Rt {
    constructor(t) {
      super(), Nt(this, t, lm, am, a, { heightOffset: 5 });
    }
  }
  function um(t) {
    let e, i;
    return (
      (e = new hm({ props: { heightOffset: t[2] } })),
      {
        c() {
          jt(e.$$.fragment);
        },
        m(t, n) {
          Ot(e, t, n), (i = !0);
        },
        p(t, i) {
          const n = {};
          4 & i && (n.heightOffset = t[2]), e.$set(n);
        },
        i(t) {
          i || ($t(e.$$.fragment, t), (i = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), (i = !1);
        },
        d(t) {
          Et(e, t);
        },
      }
    );
  }
  function cm(e) {
    let i, n;
    return (
      (i = new Av({})),
      {
        c() {
          jt(i.$$.fragment);
        },
        m(t, e) {
          Ot(i, t, e), (n = !0);
        },
        p: t,
        i(t) {
          n || ($t(i.$$.fragment, t), (n = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), (n = !1);
        },
        d(t) {
          Et(i, t);
        },
      }
    );
  }
  function pm(t) {
    let e, i, n, r, o, s;
    e = new Vo({
      props: {
        showModeSwitch: t[1],
        displayMode: t[0],
        switchDisplayMode: t[4],
      },
    });
    const a = [cm, um],
      l = [];
    function h(t, e) {
      return "grid" === t[0] ? 0 : "table" === t[0] ? 1 : -1;
    }
    return (
      ~(n = h(t)) && (r = l[n] = a[n](t)),
      {
        c() {
          jt(e.$$.fragment), (i = P()), r && r.c(), (o = N());
        },
        m(t, r) {
          Ot(e, t, r), D(t, i, r), ~n && l[n].m(t, r), D(t, o, r), (s = !0);
        },
        p(t, i) {
          const s = {};
          2 & i && (s.showModeSwitch = t[1]),
            1 & i && (s.displayMode = t[0]),
            e.$set(s);
          let u = n;
          (n = h(t)),
            n === u
              ? ~n && l[n].p(t, i)
              : (r &&
                  (wt(),
                  xt(l[u], 1, 1, () => {
                    l[u] = null;
                  }),
                  bt()),
                ~n
                  ? ((r = l[n]),
                    r ? r.p(t, i) : ((r = l[n] = a[n](t)), r.c()),
                    $t(r, 1),
                    r.m(o.parentNode, o))
                  : (r = null));
        },
        i(t) {
          s || ($t(e.$$.fragment, t), $t(r), (s = !0));
        },
        o(t) {
          xt(e.$$.fragment, t), xt(r), (s = !1);
        },
        d(t) {
          Et(e, t), t && A(i), ~n && l[n].d(t), t && A(o);
        },
      }
    );
  }
  function fm(t) {
    let e, i, n, r, o;
    return (
      (i = new Gt({
        props: {
          show: t[3],
          unstyled: !0,
          classBg: "modal-bg",
          classWindowWrap: "modal-window-wrap",
          classWindow: "modal-window",
          classContent: "modal-content",
          classCloseButton: "modal-close-button",
          closeButton: es,
          $$slots: { default: [pm] },
          $$scope: { ctx: t },
        },
      })),
      (r = new qe({})),
      {
        c() {
          (e = j("main")),
            jt(i.$$.fragment),
            (n = P()),
            jt(r.$$.fragment),
            B(e, "class", "svelte-app-main svelte-1ixvpnf");
        },
        m(t, s) {
          D(t, e, s), Ot(i, e, null), S(e, n), Ot(r, e, null), (o = !0);
        },
        p(t, [e]) {
          const n = {};
          8 & e && (n.show = t[3]),
            135 & e && (n.$$scope = { dirty: e, ctx: t }),
            i.$set(n);
        },
        i(t) {
          o || ($t(i.$$.fragment, t), $t(r.$$.fragment, t), (o = !0));
        },
        o(t) {
          xt(i.$$.fragment, t), xt(r.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && A(e), Et(i), Et(r);
        },
      }
    );
  }
  function dm(t, e, i) {
    let n;
    c(t, Re, (t) => i(3, (n = t)));
    const { MIN_WIDTH: r } = Ye;
    let o = le() < r ? "grid" : "table",
      s = !1,
      a = 0;
    const l = () => {
      i(0, (o = le() < r ? "grid" : o)), i(1, (s = !(le() < r)));
    };
    Q(() => {
      window.addEventListener("resizeend", l),
        l(),
        (async () => {
          const t = await fetch("https://galaxy.staratlas.com/nfts"),
            e = await t.json();
          Pe.set(e);
        })();
      const t = document.getElementById("star-atlas-dashboard");
      i(2, (a = Number(t.getAttribute("data-height-offset") || 0)));
    });
    return [
      o,
      s,
      a,
      n,
      (t) => () => {
        i(
          0,
          (o = t
            ? le() < r
              ? "grid"
              : t
            : "grid" === o
            ? le() < r
              ? "grid"
              : "table"
            : "grid")
        );
      },
    ];
  }
  return new (class extends Rt {
    constructor(t) {
      super(), Nt(this, t, dm, fm, a, {});
    }
  })({ target: document.getElementById("star-atlas-dashboard") });
})();
//# sourceMappingURL=bundle.js.map
