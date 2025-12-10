import { r as b, R as Xe, j as u } from "./main-CpdB2svA.js";
const Qe = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  er = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, r, t) =>
      t ? t.toUpperCase() : r.toLowerCase(),
    ),
  ye = (e) => {
    const o = er(e);
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  Re = (...e) =>
    e
      .filter((o, r, t) => !!o && o.trim() !== "" && t.indexOf(o) === r)
      .join(" ")
      .trim(),
  rr = (e) => {
    for (const o in e)
      if (o.startsWith("aria-") || o === "role" || o === "title") return !0;
  };
var or = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const tr = b.forwardRef(
  (
    {
      color: e = "currentColor",
      size: o = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: t,
      className: n = "",
      children: s,
      iconNode: a,
      ...d
    },
    c,
  ) =>
    b.createElement(
      "svg",
      {
        ref: c,
        ...or,
        width: o,
        height: o,
        stroke: e,
        strokeWidth: t ? (Number(r) * 24) / Number(o) : r,
        className: Re("lucide", n),
        ...(!s && !rr(d) && { "aria-hidden": "true" }),
        ...d,
      },
      [
        ...a.map(([m, h]) => b.createElement(m, h)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
const te = (e, o) => {
  const r = b.forwardRef(({ className: t, ...n }, s) =>
    b.createElement(tr, {
      ref: s,
      iconNode: o,
      className: Re(`lucide-${Qe(ye(e))}`, `lucide-${e}`, t),
      ...n,
    }),
  );
  return (r.displayName = ye(e)), r;
};
const nr = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  sr = te("check", nr);
const ar = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  ir = te("copy", ar);
const lr = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  cr = te("loader-circle", lr);
const dr = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  mr = te("sparkles", dr);
function ve(e, o) {
  if (typeof e == "function") return e(o);
  e != null && (e.current = o);
}
function ur(...e) {
  return (o) => {
    let r = !1;
    const t = e.map((n) => {
      const s = ve(n, o);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let n = 0; n < t.length; n++) {
          const s = t[n];
          typeof s == "function" ? s() : ve(e[n], null);
        }
      };
  };
}
var pr = Symbol.for("react.lazy"),
  re = Xe[" use ".trim().toString()];
function fr(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Ie(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === pr &&
    "_payload" in e &&
    fr(e._payload)
  );
}
function gr(e) {
  const o = hr(e),
    r = b.forwardRef((t, n) => {
      let { children: s, ...a } = t;
      Ie(s) && typeof re == "function" && (s = re(s._payload));
      const d = b.Children.toArray(s),
        c = d.find(yr);
      if (c) {
        const m = c.props.children,
          h = d.map((y) =>
            y === c
              ? b.Children.count(m) > 1
                ? b.Children.only(null)
                : b.isValidElement(m)
                  ? m.props.children
                  : null
              : y,
          );
        return u.jsx(o, {
          ...a,
          ref: n,
          children: b.isValidElement(m) ? b.cloneElement(m, void 0, h) : null,
        });
      }
      return u.jsx(o, { ...a, ref: n, children: s });
    });
  return (r.displayName = `${e}.Slot`), r;
}
var br = gr("Slot");
function hr(e) {
  const o = b.forwardRef((r, t) => {
    let { children: n, ...s } = r;
    if (
      (Ie(n) && typeof re == "function" && (n = re(n._payload)),
      b.isValidElement(n))
    ) {
      const a = wr(n),
        d = vr(s, n.props);
      return (
        n.type !== b.Fragment && (d.ref = t ? ur(t, a) : a),
        b.cloneElement(n, d)
      );
    }
    return b.Children.count(n) > 1 ? b.Children.only(null) : null;
  });
  return (o.displayName = `${e}.SlotClone`), o;
}
var xr = Symbol("radix.slottable");
function yr(e) {
  return (
    b.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === xr
  );
}
function vr(e, o) {
  const r = { ...o };
  for (const t in o) {
    const n = e[t],
      s = o[t];
    /^on[A-Z]/.test(t)
      ? n && s
        ? (r[t] = (...d) => {
            const c = s(...d);
            return n(...d), c;
          })
        : n && (r[t] = n)
      : t === "style"
        ? (r[t] = { ...n, ...s })
        : t === "className" && (r[t] = [n, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function wr(e) {
  let o = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = o && "isReactWarning" in o && o.isReactWarning;
  return r
    ? e.ref
    : ((o = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = o && "isReactWarning" in o && o.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
function Ee(e) {
  var o,
    r,
    t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (o = 0; o < n; o++)
        e[o] && (r = Ee(e[o])) && (t && (t += " "), (t += r));
    } else for (r in e) e[r] && (t && (t += " "), (t += r));
  return t;
}
function Pe() {
  for (var e, o, r = 0, t = "", n = arguments.length; r < n; r++)
    (e = arguments[r]) && (o = Ee(e)) && (t && (t += " "), (t += o));
  return t;
}
const we = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  ke = Pe,
  kr = (e, o) => (r) => {
    var t;
    if (o?.variants == null) return ke(e, r?.class, r?.className);
    const { variants: n, defaultVariants: s } = o,
      a = Object.keys(n).map((m) => {
        const h = r?.[m],
          y = s?.[m];
        if (h === null) return null;
        const x = we(h) || we(y);
        return n[m][x];
      }),
      d =
        r &&
        Object.entries(r).reduce((m, h) => {
          let [y, x] = h;
          return x === void 0 || (m[y] = x), m;
        }, {}),
      c =
        o == null || (t = o.compoundVariants) === null || t === void 0
          ? void 0
          : t.reduce((m, h) => {
              let { class: y, className: x, ...R } = h;
              return Object.entries(R).every((I) => {
                let [j, v] = I;
                return Array.isArray(v)
                  ? v.includes({ ...s, ...d }[j])
                  : { ...s, ...d }[j] === v;
              })
                ? [...m, y, x]
                : m;
            }, []);
    return ke(e, a, c, r?.class, r?.className);
  },
  Cr = (e, o) => {
    const r = new Array(e.length + o.length);
    for (let t = 0; t < e.length; t++) r[t] = e[t];
    for (let t = 0; t < o.length; t++) r[e.length + t] = o[t];
    return r;
  },
  jr = (e, o) => ({ classGroupId: e, validator: o }),
  Me = (e = new Map(), o = null, r) => ({
    nextPart: e,
    validators: o,
    classGroupId: r,
  }),
  oe = "-",
  Ce = [],
  Sr = "arbitrary..",
  Nr = (e) => {
    const o = Ar(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: t } = e;
    return {
      getClassGroupId: (a) => {
        if (a.startsWith("[") && a.endsWith("]")) return zr(a);
        const d = a.split(oe),
          c = d[0] === "" && d.length > 1 ? 1 : 0;
        return Te(d, c, o);
      },
      getConflictingClassGroupIds: (a, d) => {
        if (d) {
          const c = t[a],
            m = r[a];
          return c ? (m ? Cr(m, c) : c) : m || Ce;
        }
        return r[a] || Ce;
      },
    };
  },
  Te = (e, o, r) => {
    if (e.length - o === 0) return r.classGroupId;
    const n = e[o],
      s = r.nextPart.get(n);
    if (s) {
      const m = Te(e, o + 1, s);
      if (m) return m;
    }
    const a = r.validators;
    if (a === null) return;
    const d = o === 0 ? e.join(oe) : e.slice(o).join(oe),
      c = a.length;
    for (let m = 0; m < c; m++) {
      const h = a[m];
      if (h.validator(d)) return h.classGroupId;
    }
  },
  zr = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const o = e.slice(1, -1),
            r = o.indexOf(":"),
            t = o.slice(0, r);
          return t ? Sr + t : void 0;
        })(),
  Ar = (e) => {
    const { theme: o, classGroups: r } = e;
    return Rr(r, o);
  },
  Rr = (e, o) => {
    const r = Me();
    for (const t in e) {
      const n = e[t];
      de(n, r, t, o);
    }
    return r;
  },
  de = (e, o, r, t) => {
    const n = e.length;
    for (let s = 0; s < n; s++) {
      const a = e[s];
      Ir(a, o, r, t);
    }
  },
  Ir = (e, o, r, t) => {
    if (typeof e == "string") {
      Er(e, o, r);
      return;
    }
    if (typeof e == "function") {
      Pr(e, o, r, t);
      return;
    }
    Mr(e, o, r, t);
  },
  Er = (e, o, r) => {
    const t = e === "" ? o : _e(o, e);
    t.classGroupId = r;
  },
  Pr = (e, o, r, t) => {
    if (Tr(e)) {
      de(e(t), o, r, t);
      return;
    }
    o.validators === null && (o.validators = []), o.validators.push(jr(r, e));
  },
  Mr = (e, o, r, t) => {
    const n = Object.entries(e),
      s = n.length;
    for (let a = 0; a < s; a++) {
      const [d, c] = n[a];
      de(c, _e(o, d), r, t);
    }
  },
  _e = (e, o) => {
    let r = e;
    const t = o.split(oe),
      n = t.length;
    for (let s = 0; s < n; s++) {
      const a = t[s];
      let d = r.nextPart.get(a);
      d || ((d = Me()), r.nextPart.set(a, d)), (r = d);
    }
    return r;
  },
  Tr = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  _r = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      r = Object.create(null),
      t = Object.create(null);
    const n = (s, a) => {
      (r[s] = a), o++, o > e && ((o = 0), (t = r), (r = Object.create(null)));
    };
    return {
      get(s) {
        let a = r[s];
        if (a !== void 0) return a;
        if ((a = t[s]) !== void 0) return n(s, a), a;
      },
      set(s, a) {
        s in r ? (r[s] = a) : n(s, a);
      },
    };
  },
  ce = "!",
  je = ":",
  Gr = [],
  Se = (e, o, r, t, n) => ({
    modifiers: e,
    hasImportantModifier: o,
    baseClassName: r,
    maybePostfixModifierPosition: t,
    isExternal: n,
  }),
  Or = (e) => {
    const { prefix: o, experimentalParseClassName: r } = e;
    let t = (n) => {
      const s = [];
      let a = 0,
        d = 0,
        c = 0,
        m;
      const h = n.length;
      for (let j = 0; j < h; j++) {
        const v = n[j];
        if (a === 0 && d === 0) {
          if (v === je) {
            s.push(n.slice(c, j)), (c = j + 1);
            continue;
          }
          if (v === "/") {
            m = j;
            continue;
          }
        }
        v === "[" ? a++ : v === "]" ? a-- : v === "(" ? d++ : v === ")" && d--;
      }
      const y = s.length === 0 ? n : n.slice(c);
      let x = y,
        R = !1;
      y.endsWith(ce)
        ? ((x = y.slice(0, -1)), (R = !0))
        : y.startsWith(ce) && ((x = y.slice(1)), (R = !0));
      const I = m && m > c ? m - c : void 0;
      return Se(s, R, x, I);
    };
    if (o) {
      const n = o + je,
        s = t;
      t = (a) =>
        a.startsWith(n) ? s(a.slice(n.length)) : Se(Gr, !1, a, void 0, !0);
    }
    if (r) {
      const n = t;
      t = (s) => r({ className: s, parseClassName: n });
    }
    return t;
  },
  Vr = (e) => {
    const o = new Map();
    return (
      e.orderSensitiveModifiers.forEach((r, t) => {
        o.set(r, 1e6 + t);
      }),
      (r) => {
        const t = [];
        let n = [];
        for (let s = 0; s < r.length; s++) {
          const a = r[s],
            d = a[0] === "[",
            c = o.has(a);
          d || c
            ? (n.length > 0 && (n.sort(), t.push(...n), (n = [])), t.push(a))
            : n.push(a);
        }
        return n.length > 0 && (n.sort(), t.push(...n)), t;
      }
    );
  },
  Lr = (e) => ({
    cache: _r(e.cacheSize),
    parseClassName: Or(e),
    sortModifiers: Vr(e),
    ...Nr(e),
  }),
  $r = /\s+/,
  Fr = (e, o) => {
    const {
        parseClassName: r,
        getClassGroupId: t,
        getConflictingClassGroupIds: n,
        sortModifiers: s,
      } = o,
      a = [],
      d = e.trim().split($r);
    let c = "";
    for (let m = d.length - 1; m >= 0; m -= 1) {
      const h = d[m],
        {
          isExternal: y,
          modifiers: x,
          hasImportantModifier: R,
          baseClassName: I,
          maybePostfixModifierPosition: j,
        } = r(h);
      if (y) {
        c = h + (c.length > 0 ? " " + c : c);
        continue;
      }
      let v = !!j,
        w = t(v ? I.substring(0, j) : I);
      if (!w) {
        if (!v) {
          c = h + (c.length > 0 ? " " + c : c);
          continue;
        }
        if (((w = t(I)), !w)) {
          c = h + (c.length > 0 ? " " + c : c);
          continue;
        }
        v = !1;
      }
      const U = x.length === 0 ? "" : x.length === 1 ? x[0] : s(x).join(":"),
        _ = R ? U + ce : U,
        z = _ + w;
      if (a.indexOf(z) > -1) continue;
      a.push(z);
      const E = n(w, v);
      for (let S = 0; S < E.length; ++S) {
        const V = E[S];
        a.push(_ + V);
      }
      c = h + (c.length > 0 ? " " + c : c);
    }
    return c;
  },
  Br = (...e) => {
    let o = 0,
      r,
      t,
      n = "";
    for (; o < e.length; )
      (r = e[o++]) && (t = Ge(r)) && (n && (n += " "), (n += t));
    return n;
  },
  Ge = (e) => {
    if (typeof e == "string") return e;
    let o,
      r = "";
    for (let t = 0; t < e.length; t++)
      e[t] && (o = Ge(e[t])) && (r && (r += " "), (r += o));
    return r;
  },
  Wr = (e, ...o) => {
    let r, t, n, s;
    const a = (c) => {
        const m = o.reduce((h, y) => y(h), e());
        return (r = Lr(m)), (t = r.cache.get), (n = r.cache.set), (s = d), d(c);
      },
      d = (c) => {
        const m = t(c);
        if (m) return m;
        const h = Fr(c, r);
        return n(c, h), h;
      };
    return (s = a), (...c) => s(Br(...c));
  },
  Dr = [],
  k = (e) => {
    const o = (r) => r[e] || Dr;
    return (o.isThemeGetter = !0), o;
  },
  Oe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ve = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Ur = /^\d+\/\d+$/,
  Hr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Jr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Yr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  qr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Zr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  B = (e) => Ur.test(e),
  g = (e) => !!e && !Number.isNaN(Number(e)),
  G = (e) => !!e && Number.isInteger(Number(e)),
  ie = (e) => e.endsWith("%") && g(e.slice(0, -1)),
  T = (e) => Hr.test(e),
  Kr = () => !0,
  Xr = (e) => Jr.test(e) && !Yr.test(e),
  Le = () => !1,
  Qr = (e) => qr.test(e),
  eo = (e) => Zr.test(e),
  ro = (e) => !i(e) && !l(e),
  oo = (e) => W(e, Be, Le),
  i = (e) => Oe.test(e),
  $ = (e) => W(e, We, Xr),
  le = (e) => W(e, io, g),
  Ne = (e) => W(e, $e, Le),
  to = (e) => W(e, Fe, eo),
  Q = (e) => W(e, De, Qr),
  l = (e) => Ve.test(e),
  H = (e) => D(e, We),
  no = (e) => D(e, lo),
  ze = (e) => D(e, $e),
  so = (e) => D(e, Be),
  ao = (e) => D(e, Fe),
  ee = (e) => D(e, De, !0),
  W = (e, o, r) => {
    const t = Oe.exec(e);
    return t ? (t[1] ? o(t[1]) : r(t[2])) : !1;
  },
  D = (e, o, r = !1) => {
    const t = Ve.exec(e);
    return t ? (t[1] ? o(t[1]) : r) : !1;
  },
  $e = (e) => e === "position" || e === "percentage",
  Fe = (e) => e === "image" || e === "url",
  Be = (e) => e === "length" || e === "size" || e === "bg-size",
  We = (e) => e === "length",
  io = (e) => e === "number",
  lo = (e) => e === "family-name",
  De = (e) => e === "shadow",
  co = () => {
    const e = k("color"),
      o = k("font"),
      r = k("text"),
      t = k("font-weight"),
      n = k("tracking"),
      s = k("leading"),
      a = k("breakpoint"),
      d = k("container"),
      c = k("spacing"),
      m = k("radius"),
      h = k("shadow"),
      y = k("inset-shadow"),
      x = k("text-shadow"),
      R = k("drop-shadow"),
      I = k("blur"),
      j = k("perspective"),
      v = k("aspect"),
      w = k("ease"),
      U = k("animate"),
      _ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      z = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      E = () => [...z(), l, i],
      S = () => ["auto", "hidden", "clip", "visible", "scroll"],
      V = () => ["auto", "contain", "none"],
      f = () => [l, i, c],
      P = () => [B, "full", "auto", ...f()],
      me = () => [G, "none", "subgrid", l, i],
      ue = () => ["auto", { span: ["full", G, l, i] }, G, l, i],
      Y = () => [G, "auto", l, i],
      pe = () => ["auto", "min", "max", "fr", l, i],
      ne = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      F = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      M = () => ["auto", ...f()],
      L = () => [
        B,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...f(),
      ],
      p = () => [e, l, i],
      fe = () => [...z(), ze, Ne, { position: [l, i] }],
      ge = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      be = () => ["auto", "cover", "contain", so, oo, { size: [l, i] }],
      se = () => [ie, H, $],
      N = () => ["", "none", "full", m, l, i],
      A = () => ["", g, H, $],
      q = () => ["solid", "dashed", "dotted", "double"],
      he = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      C = () => [g, ie, ze, Ne],
      xe = () => ["", "none", I, l, i],
      Z = () => ["none", g, l, i],
      K = () => ["none", g, l, i],
      ae = () => [g, l, i],
      X = () => [B, "full", ...f()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [T],
        breakpoint: [T],
        color: [Kr],
        container: [T],
        "drop-shadow": [T],
        ease: ["in", "out", "in-out"],
        font: [ro],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [T],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [T],
        shadow: [T],
        spacing: ["px", g],
        text: [T],
        "text-shadow": [T],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", B, i, l, v] }],
        container: ["container"],
        columns: [{ columns: [g, i, l, d] }],
        "break-after": [{ "break-after": _() }],
        "break-before": [{ "break-before": _() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: E() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: V() }],
        "overscroll-x": [{ "overscroll-x": V() }],
        "overscroll-y": [{ "overscroll-y": V() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: P() }],
        "inset-x": [{ "inset-x": P() }],
        "inset-y": [{ "inset-y": P() }],
        start: [{ start: P() }],
        end: [{ end: P() }],
        top: [{ top: P() }],
        right: [{ right: P() }],
        bottom: [{ bottom: P() }],
        left: [{ left: P() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [G, "auto", l, i] }],
        basis: [{ basis: [B, "full", "auto", d, ...f()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [g, B, "auto", "initial", "none", i] }],
        grow: [{ grow: ["", g, l, i] }],
        shrink: [{ shrink: ["", g, l, i] }],
        order: [{ order: [G, "first", "last", "none", l, i] }],
        "grid-cols": [{ "grid-cols": me() }],
        "col-start-end": [{ col: ue() }],
        "col-start": [{ "col-start": Y() }],
        "col-end": [{ "col-end": Y() }],
        "grid-rows": [{ "grid-rows": me() }],
        "row-start-end": [{ row: ue() }],
        "row-start": [{ "row-start": Y() }],
        "row-end": [{ "row-end": Y() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": pe() }],
        "auto-rows": [{ "auto-rows": pe() }],
        gap: [{ gap: f() }],
        "gap-x": [{ "gap-x": f() }],
        "gap-y": [{ "gap-y": f() }],
        "justify-content": [{ justify: [...ne(), "normal"] }],
        "justify-items": [{ "justify-items": [...F(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...F()] }],
        "align-content": [{ content: ["normal", ...ne()] }],
        "align-items": [{ items: [...F(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...F(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ne() }],
        "place-items": [{ "place-items": [...F(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...F()] }],
        p: [{ p: f() }],
        px: [{ px: f() }],
        py: [{ py: f() }],
        ps: [{ ps: f() }],
        pe: [{ pe: f() }],
        pt: [{ pt: f() }],
        pr: [{ pr: f() }],
        pb: [{ pb: f() }],
        pl: [{ pl: f() }],
        m: [{ m: M() }],
        mx: [{ mx: M() }],
        my: [{ my: M() }],
        ms: [{ ms: M() }],
        me: [{ me: M() }],
        mt: [{ mt: M() }],
        mr: [{ mr: M() }],
        mb: [{ mb: M() }],
        ml: [{ ml: M() }],
        "space-x": [{ "space-x": f() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": f() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: L() }],
        w: [{ w: [d, "screen", ...L()] }],
        "min-w": [{ "min-w": [d, "screen", "none", ...L()] }],
        "max-w": [
          { "max-w": [d, "screen", "none", "prose", { screen: [a] }, ...L()] },
        ],
        h: [{ h: ["screen", "lh", ...L()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...L()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...L()] }],
        "font-size": [{ text: ["base", r, H, $] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [t, l, le] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ie,
              i,
            ],
          },
        ],
        "font-family": [{ font: [no, i, o] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [n, l, i] }],
        "line-clamp": [{ "line-clamp": [g, "none", l, le] }],
        leading: [{ leading: [s, ...f()] }],
        "list-image": [{ "list-image": ["none", l, i] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", l, i] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: p() }],
        "text-color": [{ text: p() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [g, "from-font", "auto", l, $] },
        ],
        "text-decoration-color": [{ decoration: p() }],
        "underline-offset": [{ "underline-offset": [g, "auto", l, i] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: f() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              l,
              i,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", l, i] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: fe() }],
        "bg-repeat": [{ bg: ge() }],
        "bg-size": [{ bg: be() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  G,
                  l,
                  i,
                ],
                radial: ["", l, i],
                conic: [G, l, i],
              },
              ao,
              to,
            ],
          },
        ],
        "bg-color": [{ bg: p() }],
        "gradient-from-pos": [{ from: se() }],
        "gradient-via-pos": [{ via: se() }],
        "gradient-to-pos": [{ to: se() }],
        "gradient-from": [{ from: p() }],
        "gradient-via": [{ via: p() }],
        "gradient-to": [{ to: p() }],
        rounded: [{ rounded: N() }],
        "rounded-s": [{ "rounded-s": N() }],
        "rounded-e": [{ "rounded-e": N() }],
        "rounded-t": [{ "rounded-t": N() }],
        "rounded-r": [{ "rounded-r": N() }],
        "rounded-b": [{ "rounded-b": N() }],
        "rounded-l": [{ "rounded-l": N() }],
        "rounded-ss": [{ "rounded-ss": N() }],
        "rounded-se": [{ "rounded-se": N() }],
        "rounded-ee": [{ "rounded-ee": N() }],
        "rounded-es": [{ "rounded-es": N() }],
        "rounded-tl": [{ "rounded-tl": N() }],
        "rounded-tr": [{ "rounded-tr": N() }],
        "rounded-br": [{ "rounded-br": N() }],
        "rounded-bl": [{ "rounded-bl": N() }],
        "border-w": [{ border: A() }],
        "border-w-x": [{ "border-x": A() }],
        "border-w-y": [{ "border-y": A() }],
        "border-w-s": [{ "border-s": A() }],
        "border-w-e": [{ "border-e": A() }],
        "border-w-t": [{ "border-t": A() }],
        "border-w-r": [{ "border-r": A() }],
        "border-w-b": [{ "border-b": A() }],
        "border-w-l": [{ "border-l": A() }],
        "divide-x": [{ "divide-x": A() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": A() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...q(), "hidden", "none"] }],
        "divide-style": [{ divide: [...q(), "hidden", "none"] }],
        "border-color": [{ border: p() }],
        "border-color-x": [{ "border-x": p() }],
        "border-color-y": [{ "border-y": p() }],
        "border-color-s": [{ "border-s": p() }],
        "border-color-e": [{ "border-e": p() }],
        "border-color-t": [{ "border-t": p() }],
        "border-color-r": [{ "border-r": p() }],
        "border-color-b": [{ "border-b": p() }],
        "border-color-l": [{ "border-l": p() }],
        "divide-color": [{ divide: p() }],
        "outline-style": [{ outline: [...q(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [g, l, i] }],
        "outline-w": [{ outline: ["", g, H, $] }],
        "outline-color": [{ outline: p() }],
        shadow: [{ shadow: ["", "none", h, ee, Q] }],
        "shadow-color": [{ shadow: p() }],
        "inset-shadow": [{ "inset-shadow": ["none", y, ee, Q] }],
        "inset-shadow-color": [{ "inset-shadow": p() }],
        "ring-w": [{ ring: A() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: p() }],
        "ring-offset-w": [{ "ring-offset": [g, $] }],
        "ring-offset-color": [{ "ring-offset": p() }],
        "inset-ring-w": [{ "inset-ring": A() }],
        "inset-ring-color": [{ "inset-ring": p() }],
        "text-shadow": [{ "text-shadow": ["none", x, ee, Q] }],
        "text-shadow-color": [{ "text-shadow": p() }],
        opacity: [{ opacity: [g, l, i] }],
        "mix-blend": [
          { "mix-blend": [...he(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": he() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [g] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": C() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": C() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": p() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": p() }],
        "mask-image-t-from-pos": [{ "mask-t-from": C() }],
        "mask-image-t-to-pos": [{ "mask-t-to": C() }],
        "mask-image-t-from-color": [{ "mask-t-from": p() }],
        "mask-image-t-to-color": [{ "mask-t-to": p() }],
        "mask-image-r-from-pos": [{ "mask-r-from": C() }],
        "mask-image-r-to-pos": [{ "mask-r-to": C() }],
        "mask-image-r-from-color": [{ "mask-r-from": p() }],
        "mask-image-r-to-color": [{ "mask-r-to": p() }],
        "mask-image-b-from-pos": [{ "mask-b-from": C() }],
        "mask-image-b-to-pos": [{ "mask-b-to": C() }],
        "mask-image-b-from-color": [{ "mask-b-from": p() }],
        "mask-image-b-to-color": [{ "mask-b-to": p() }],
        "mask-image-l-from-pos": [{ "mask-l-from": C() }],
        "mask-image-l-to-pos": [{ "mask-l-to": C() }],
        "mask-image-l-from-color": [{ "mask-l-from": p() }],
        "mask-image-l-to-color": [{ "mask-l-to": p() }],
        "mask-image-x-from-pos": [{ "mask-x-from": C() }],
        "mask-image-x-to-pos": [{ "mask-x-to": C() }],
        "mask-image-x-from-color": [{ "mask-x-from": p() }],
        "mask-image-x-to-color": [{ "mask-x-to": p() }],
        "mask-image-y-from-pos": [{ "mask-y-from": C() }],
        "mask-image-y-to-pos": [{ "mask-y-to": C() }],
        "mask-image-y-from-color": [{ "mask-y-from": p() }],
        "mask-image-y-to-color": [{ "mask-y-to": p() }],
        "mask-image-radial": [{ "mask-radial": [l, i] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": C() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": C() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": p() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": p() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": z() }],
        "mask-image-conic-pos": [{ "mask-conic": [g] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": C() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": C() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": p() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": p() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: fe() }],
        "mask-repeat": [{ mask: ge() }],
        "mask-size": [{ mask: be() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", l, i] }],
        filter: [{ filter: ["", "none", l, i] }],
        blur: [{ blur: xe() }],
        brightness: [{ brightness: [g, l, i] }],
        contrast: [{ contrast: [g, l, i] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", R, ee, Q] }],
        "drop-shadow-color": [{ "drop-shadow": p() }],
        grayscale: [{ grayscale: ["", g, l, i] }],
        "hue-rotate": [{ "hue-rotate": [g, l, i] }],
        invert: [{ invert: ["", g, l, i] }],
        saturate: [{ saturate: [g, l, i] }],
        sepia: [{ sepia: ["", g, l, i] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", l, i] }],
        "backdrop-blur": [{ "backdrop-blur": xe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [g, l, i] }],
        "backdrop-contrast": [{ "backdrop-contrast": [g, l, i] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", g, l, i] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g, l, i] }],
        "backdrop-invert": [{ "backdrop-invert": ["", g, l, i] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g, l, i] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g, l, i] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", g, l, i] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": f() }],
        "border-spacing-x": [{ "border-spacing-x": f() }],
        "border-spacing-y": [{ "border-spacing-y": f() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              l,
              i,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [g, "initial", l, i] }],
        ease: [{ ease: ["linear", "initial", w, l, i] }],
        delay: [{ delay: [g, l, i] }],
        animate: [{ animate: ["none", U, l, i] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [j, l, i] }],
        "perspective-origin": [{ "perspective-origin": E() }],
        rotate: [{ rotate: Z() }],
        "rotate-x": [{ "rotate-x": Z() }],
        "rotate-y": [{ "rotate-y": Z() }],
        "rotate-z": [{ "rotate-z": Z() }],
        scale: [{ scale: K() }],
        "scale-x": [{ "scale-x": K() }],
        "scale-y": [{ "scale-y": K() }],
        "scale-z": [{ "scale-z": K() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ae() }],
        "skew-x": [{ "skew-x": ae() }],
        "skew-y": [{ "skew-y": ae() }],
        transform: [{ transform: [l, i, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: E() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: X() }],
        "translate-x": [{ "translate-x": X() }],
        "translate-y": [{ "translate-y": X() }],
        "translate-z": [{ "translate-z": X() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: p() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: p() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              l,
              i,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": f() }],
        "scroll-mx": [{ "scroll-mx": f() }],
        "scroll-my": [{ "scroll-my": f() }],
        "scroll-ms": [{ "scroll-ms": f() }],
        "scroll-me": [{ "scroll-me": f() }],
        "scroll-mt": [{ "scroll-mt": f() }],
        "scroll-mr": [{ "scroll-mr": f() }],
        "scroll-mb": [{ "scroll-mb": f() }],
        "scroll-ml": [{ "scroll-ml": f() }],
        "scroll-p": [{ "scroll-p": f() }],
        "scroll-px": [{ "scroll-px": f() }],
        "scroll-py": [{ "scroll-py": f() }],
        "scroll-ps": [{ "scroll-ps": f() }],
        "scroll-pe": [{ "scroll-pe": f() }],
        "scroll-pt": [{ "scroll-pt": f() }],
        "scroll-pr": [{ "scroll-pr": f() }],
        "scroll-pb": [{ "scroll-pb": f() }],
        "scroll-pl": [{ "scroll-pl": f() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", l, i] },
        ],
        fill: [{ fill: ["none", ...p()] }],
        "stroke-w": [{ stroke: [g, H, $, le] }],
        stroke: [{ stroke: ["none", ...p()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  mo = Wr(co);
function O(...e) {
  return mo(Pe(e));
}
const uo = kr(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow hover:bg-[var(--color-primary)]/90",
          destructive:
            "bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] shadow-sm hover:bg-[var(--color-destructive)]/90",
          outline:
            "border border-[var(--color-input)] bg-[var(--color-background)] shadow-sm hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]",
          secondary:
            "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] shadow-sm hover:bg-[var(--color-secondary)]/80",
          ghost:
            "hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]",
          link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  J = b.forwardRef(
    ({ className: e, variant: o, size: r, asChild: t = !1, ...n }, s) => {
      const a = t ? br : "button";
      return u.jsx(a, {
        className: O(uo({ variant: o, size: r, className: e })),
        ref: s,
        ...n,
      });
    },
  );
J.displayName = "Button";
const Ue = b.forwardRef(({ className: e, ...o }, r) =>
  u.jsx("div", {
    ref: r,
    className: O(
      "rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-card-foreground)] shadow",
      e,
    ),
    ...o,
  }),
);
Ue.displayName = "Card";
const He = b.forwardRef(({ className: e, ...o }, r) =>
  u.jsx("div", {
    ref: r,
    className: O("flex flex-col space-y-1.5 p-6", e),
    ...o,
  }),
);
He.displayName = "CardHeader";
const Je = b.forwardRef(({ className: e, ...o }, r) =>
  u.jsx("div", {
    ref: r,
    className: O("font-semibold leading-none tracking-tight", e),
    ...o,
  }),
);
Je.displayName = "CardTitle";
const Ye = b.forwardRef(({ className: e, ...o }, r) =>
  u.jsx("div", {
    ref: r,
    className: O("text-sm text-[var(--color-muted-foreground)]", e),
    ...o,
  }),
);
Ye.displayName = "CardDescription";
const qe = b.forwardRef(({ className: e, ...o }, r) =>
  u.jsx("div", { ref: r, className: O("p-6 pt-0", e), ...o }),
);
qe.displayName = "CardContent";
const Ze = b.forwardRef(({ className: e, ...o }, r) =>
  u.jsx("div", { ref: r, className: O("flex items-center p-6 pt-0", e), ...o }),
);
Ze.displayName = "CardFooter";
const Ke = b.forwardRef(({ className: e, type: o, ...r }, t) =>
  u.jsx("input", {
    type: o,
    className: O(
      "flex h-9 w-full rounded-md border border-[var(--color-input)] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: t,
    ...r,
  }),
);
Ke.displayName = "Input";
const Ae = "http://localhost:8080/api";
function po() {
  const [e, o] = b.useState(""),
    [r, t] = b.useState(!1),
    [n, s] = b.useState(""),
    [a, d] = b.useState(null),
    [c, m] = b.useState(null),
    [h, y] = b.useState(!1),
    x = b.useRef(null),
    R = async () => {
      if (e.trim()) {
        t(!0), s(""), m(null), d(null);
        try {
          const w = await fetch(`${Ae}/blog`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ topic: e.trim() }),
          });
          if (!w.ok) throw new Error("Failed to create blog job");
          const _ = (await w.json()).job_id;
          d(_);
          const z = new EventSource(`${Ae}/stream/${_}`);
          (x.current = z),
            (z.onmessage = (E) => {
              try {
                const S = JSON.parse(E.data);
                S.done
                  ? (t(!1), z.close())
                  : S.error
                    ? (m(S.error), t(!1), z.close())
                    : S.chunk && s((V) => V + S.chunk);
              } catch (S) {
                console.error("Error parsing SSE data:", S);
              }
            }),
            (z.onerror = (E) => {
              console.error("SSE error:", E),
                m("Connection error. Please try again."),
                t(!1),
                z.close();
            });
        } catch (w) {
          m(w instanceof Error ? w.message : "An error occurred"), t(!1);
        }
      }
    },
    I = () => {
      x.current && (x.current.close(), (x.current = null)), t(!1);
    },
    j = async () => {
      try {
        await navigator.clipboard.writeText(n),
          y(!0),
          setTimeout(() => y(!1), 2e3);
      } catch (w) {
        console.error("Failed to copy:", w);
      }
    },
    v = () => {
      o(""), s(""), m(null), d(null), I();
    };
  return (
    b.useEffect(
      () => () => {
        x.current && x.current.close();
      },
      [],
    ),
    u.jsxs("div", {
      className: "container mx-auto max-w-4xl p-4 space-y-6",
      children: [
        u.jsxs("div", {
          className: "text-center space-y-2 py-8",
          children: [
            u.jsx("h1", {
              className: "text-4xl font-bold tracking-tight",
              children: "Content Samurai",
            }),
            u.jsx("p", {
              className: "text-[var(--color-muted-foreground)] text-lg",
              children:
                "AI-powered SEO blog generator with real-time streaming",
            }),
          ],
        }),
        u.jsxs(Ue, {
          children: [
            u.jsxs(He, {
              children: [
                u.jsx(Je, { children: "Generate Blog Post" }),
                u.jsx(Ye, {
                  children:
                    "Enter a topic and let AI create an SEO-optimized blog post for you",
                }),
              ],
            }),
            u.jsxs(qe, {
              className: "space-y-4",
              children: [
                u.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    u.jsx(Ke, {
                      placeholder:
                        "Enter your blog topic (e.g., 'How to learn Go programming')",
                      value: e,
                      onChange: (w) => o(w.target.value),
                      onKeyDown: (w) => {
                        w.key === "Enter" && !r && R();
                      },
                      disabled: r,
                      className: "flex-1",
                    }),
                    r
                      ? u.jsx(J, {
                          onClick: I,
                          variant: "destructive",
                          children: "Stop",
                        })
                      : u.jsxs(J, {
                          onClick: R,
                          disabled: !e.trim() || r,
                          children: [
                            u.jsx(mr, { className: "mr-2 h-4 w-4" }),
                            "Generate",
                          ],
                        }),
                  ],
                }),
                c &&
                  u.jsx("div", {
                    className:
                      "p-4 bg-[var(--color-destructive)]/10 border border-[var(--color-destructive)] rounded-md",
                    children: u.jsx("p", {
                      className: "text-sm text-[var(--color-destructive)]",
                      children: c,
                    }),
                  }),
                a &&
                  u.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]",
                    children: [
                      u.jsxs("span", {
                        className:
                          "font-mono text-xs bg-[var(--color-muted)] px-2 py-1 rounded",
                        children: ["Job ID: ", a],
                      }),
                      r &&
                        u.jsxs("span", {
                          className: "flex items-center gap-1",
                          children: [
                            u.jsx(cr, { className: "h-3 w-3 animate-spin" }),
                            "Generating...",
                          ],
                        }),
                    ],
                  }),
                n &&
                  u.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          u.jsx("h3", {
                            className: "text-sm font-medium",
                            children: "Generated Content",
                          }),
                          u.jsx(J, {
                            size: "sm",
                            variant: "outline",
                            onClick: j,
                            disabled: r,
                            children: h
                              ? u.jsxs(u.Fragment, {
                                  children: [
                                    u.jsx(sr, { className: "h-4 w-4 mr-2" }),
                                    "Copied!",
                                  ],
                                })
                              : u.jsxs(u.Fragment, {
                                  children: [
                                    u.jsx(ir, { className: "h-4 w-4 mr-2" }),
                                    "Copy",
                                  ],
                                }),
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "relative",
                        children: u.jsxs("div", {
                          className:
                            "min-h-[300px] max-h-[600px] overflow-y-auto p-4 bg-[var(--color-muted)]/30 rounded-md border border-[var(--color-border)]",
                          children: [
                            u.jsx("div", {
                              className:
                                "prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap",
                              children: n,
                            }),
                            r &&
                              u.jsx("span", {
                                className:
                                  "inline-block w-2 h-4 bg-[var(--color-primary)] animate-pulse ml-1",
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            n &&
              !r &&
              u.jsx(Ze, {
                children: u.jsx(J, {
                  onClick: v,
                  variant: "outline",
                  className: "w-full",
                  children: "Generate Another Blog",
                }),
              }),
          ],
        }),
        u.jsx("div", {
          className: "text-center text-sm text-[var(--color-muted-foreground)]",
          children: u.jsx("p", {
            children:
              "Powered by AI • Using RabbitMQ for job queuing • Real-time streaming via Redis Pub/Sub",
          }),
        }),
      ],
    })
  );
}
function go() {
  return u.jsx("main", {
    className: "min-h-screen bg-background",
    children: u.jsx(po, {}),
  });
}
export { go as component };
