function bg(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Ho = { exports: {} },
  mi = {};
var Rm;
function _g() {
  if (Rm) return mi;
  Rm = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function u(o, r, d) {
    var m = null;
    if (
      (d !== void 0 && (m = "" + d),
      r.key !== void 0 && (m = "" + r.key),
      "key" in r)
    ) {
      d = {};
      for (var p in r) p !== "key" && (d[p] = r[p]);
    } else d = r;
    return (
      (r = d.ref),
      { $$typeof: l, type: o, key: m, ref: r !== void 0 ? r : null, props: d }
    );
  }
  return (mi.Fragment = i), (mi.jsx = u), (mi.jsxs = u), mi;
}
var Am;
function Eg() {
  return Am || ((Am = 1), (Ho.exports = _g())), Ho.exports;
}
var J = Eg(),
  qo = { exports: {} },
  ct = {};
var Mm;
function Tg() {
  if (Mm) return ct;
  Mm = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    _ = Symbol.iterator;
  function z(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (_ && A[_]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    U = {};
  function Y(A, q, k) {
    (this.props = A),
      (this.context = q),
      (this.refs = U),
      (this.updater = k || B);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (A, q) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, q, "setState");
    }),
    (Y.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function Z() {}
  Z.prototype = Y.prototype;
  function X(A, q, k) {
    (this.props = A),
      (this.context = q),
      (this.refs = U),
      (this.updater = k || B);
  }
  var F = (X.prototype = new Z());
  (F.constructor = X), O(F, Y.prototype), (F.isPureReactComponent = !0);
  var at = Array.isArray;
  function V() {}
  var G = { H: null, A: null, T: null, S: null },
    Q = Object.prototype.hasOwnProperty;
  function I(A, q, k) {
    var W = k.ref;
    return {
      $$typeof: l,
      type: A,
      key: q,
      ref: W !== void 0 ? W : null,
      props: k,
    };
  }
  function ft(A, q) {
    return I(A.type, q, A.props);
  }
  function ot(A) {
    return typeof A == "object" && A !== null && A.$$typeof === l;
  }
  function Mt(A) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (k) {
        return q[k];
      })
    );
  }
  var Gt = /\/+/g;
  function Xt(A, q) {
    return typeof A == "object" && A !== null && A.key != null
      ? Mt("" + A.key)
      : q.toString(36);
  }
  function Ht(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(V, V)
            : ((A.status = "pending"),
              A.then(
                function (q) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = q));
                },
                function (q) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = q));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function L(A, q, k, W, it) {
    var ut = typeof A;
    (ut === "undefined" || ut === "boolean") && (A = null);
    var vt = !1;
    if (A === null) vt = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case l:
            case i:
              vt = !0;
              break;
            case b:
              return (vt = A._init), L(vt(A._payload), q, k, W, it);
          }
      }
    if (vt)
      return (
        (it = it(A)),
        (vt = W === "" ? "." + Xt(A, 0) : W),
        at(it)
          ? ((k = ""),
            vt != null && (k = vt.replace(Gt, "$&/") + "/"),
            L(it, q, k, "", function (Pe) {
              return Pe;
            }))
          : it != null &&
            (ot(it) &&
              (it = ft(
                it,
                k +
                  (it.key == null || (A && A.key === it.key)
                    ? ""
                    : ("" + it.key).replace(Gt, "$&/") + "/") +
                  vt,
              )),
            q.push(it)),
        1
      );
    vt = 0;
    var Kt = W === "" ? "." : W + ":";
    if (at(A))
      for (var Ot = 0; Ot < A.length; Ot++)
        (W = A[Ot]), (ut = Kt + Xt(W, Ot)), (vt += L(W, q, k, ut, it));
    else if (((Ot = z(A)), typeof Ot == "function"))
      for (A = Ot.call(A), Ot = 0; !(W = A.next()).done; )
        (W = W.value), (ut = Kt + Xt(W, Ot++)), (vt += L(W, q, k, ut, it));
    else if (ut === "object") {
      if (typeof A.then == "function") return L(Ht(A), q, k, W, it);
      throw (
        ((q = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return vt;
  }
  function K(A, q, k) {
    if (A == null) return A;
    var W = [],
      it = 0;
    return (
      L(A, W, "", "", function (ut) {
        return q.call(k, ut, it++);
      }),
      W
    );
  }
  function lt(A) {
    if (A._status === -1) {
      var q = A._result;
      (q = q()),
        q.then(
          function (k) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = k));
          },
          function (k) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = k));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = q));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var Tt =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(q)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    zt = {
      map: K,
      forEach: function (A, q, k) {
        K(
          A,
          function () {
            q.apply(this, arguments);
          },
          k,
        );
      },
      count: function (A) {
        var q = 0;
        return (
          K(A, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (A) {
        return (
          K(A, function (q) {
            return q;
          }) || []
        );
      },
      only: function (A) {
        if (!ot(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    };
  return (
    (ct.Activity = g),
    (ct.Children = zt),
    (ct.Component = Y),
    (ct.Fragment = u),
    (ct.Profiler = r),
    (ct.PureComponent = X),
    (ct.StrictMode = o),
    (ct.Suspense = y),
    (ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (ct.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return G.H.useMemoCache(A);
      },
    }),
    (ct.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (ct.cacheSignal = function () {
      return null;
    }),
    (ct.cloneElement = function (A, q, k) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + ".",
        );
      var W = O({}, A.props),
        it = A.key;
      if (q != null)
        for (ut in (q.key !== void 0 && (it = "" + q.key), q))
          !Q.call(q, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && q.ref === void 0) ||
            (W[ut] = q[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) W.children = k;
      else if (1 < ut) {
        for (var vt = Array(ut), Kt = 0; Kt < ut; Kt++)
          vt[Kt] = arguments[Kt + 2];
        W.children = vt;
      }
      return I(A.type, it, W);
    }),
    (ct.createContext = function (A) {
      return (
        (A = {
          $$typeof: m,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: d, _context: A }),
        A
      );
    }),
    (ct.createElement = function (A, q, k) {
      var W,
        it = {},
        ut = null;
      if (q != null)
        for (W in (q.key !== void 0 && (ut = "" + q.key), q))
          Q.call(q, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (it[W] = q[W]);
      var vt = arguments.length - 2;
      if (vt === 1) it.children = k;
      else if (1 < vt) {
        for (var Kt = Array(vt), Ot = 0; Ot < vt; Ot++)
          Kt[Ot] = arguments[Ot + 2];
        it.children = Kt;
      }
      if (A && A.defaultProps)
        for (W in ((vt = A.defaultProps), vt))
          it[W] === void 0 && (it[W] = vt[W]);
      return I(A, ut, it);
    }),
    (ct.createRef = function () {
      return { current: null };
    }),
    (ct.forwardRef = function (A) {
      return { $$typeof: p, render: A };
    }),
    (ct.isValidElement = ot),
    (ct.lazy = function (A) {
      return { $$typeof: b, _payload: { _status: -1, _result: A }, _init: lt };
    }),
    (ct.memo = function (A, q) {
      return { $$typeof: h, type: A, compare: q === void 0 ? null : q };
    }),
    (ct.startTransition = function (A) {
      var q = G.T,
        k = {};
      G.T = k;
      try {
        var W = A(),
          it = G.S;
        it !== null && it(k, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(V, Tt);
      } catch (ut) {
        Tt(ut);
      } finally {
        q !== null && k.types !== null && (q.types = k.types), (G.T = q);
      }
    }),
    (ct.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (ct.use = function (A) {
      return G.H.use(A);
    }),
    (ct.useActionState = function (A, q, k) {
      return G.H.useActionState(A, q, k);
    }),
    (ct.useCallback = function (A, q) {
      return G.H.useCallback(A, q);
    }),
    (ct.useContext = function (A) {
      return G.H.useContext(A);
    }),
    (ct.useDebugValue = function () {}),
    (ct.useDeferredValue = function (A, q) {
      return G.H.useDeferredValue(A, q);
    }),
    (ct.useEffect = function (A, q) {
      return G.H.useEffect(A, q);
    }),
    (ct.useEffectEvent = function (A) {
      return G.H.useEffectEvent(A);
    }),
    (ct.useId = function () {
      return G.H.useId();
    }),
    (ct.useImperativeHandle = function (A, q, k) {
      return G.H.useImperativeHandle(A, q, k);
    }),
    (ct.useInsertionEffect = function (A, q) {
      return G.H.useInsertionEffect(A, q);
    }),
    (ct.useLayoutEffect = function (A, q) {
      return G.H.useLayoutEffect(A, q);
    }),
    (ct.useMemo = function (A, q) {
      return G.H.useMemo(A, q);
    }),
    (ct.useOptimistic = function (A, q) {
      return G.H.useOptimistic(A, q);
    }),
    (ct.useReducer = function (A, q, k) {
      return G.H.useReducer(A, q, k);
    }),
    (ct.useRef = function (A) {
      return G.H.useRef(A);
    }),
    (ct.useState = function (A) {
      return G.H.useState(A);
    }),
    (ct.useSyncExternalStore = function (A, q, k) {
      return G.H.useSyncExternalStore(A, q, k);
    }),
    (ct.useTransition = function () {
      return G.H.useTransition();
    }),
    (ct.version = "19.2.0"),
    ct
  );
}
var zm;
function xi() {
  return zm || ((zm = 1), (qo.exports = Tg())), qo.exports;
}
var nt = xi();
const Ai = bg(nt);
var Yo = { exports: {} },
  yi = {},
  Go = { exports: {} },
  Xo = {};
var Om;
function Rg() {
  return (
    Om ||
      ((Om = 1),
      (function (l) {
        function i(L, K) {
          var lt = L.length;
          L.push(K);
          t: for (; 0 < lt; ) {
            var Tt = (lt - 1) >>> 1,
              zt = L[Tt];
            if (0 < r(zt, K)) (L[Tt] = K), (L[lt] = zt), (lt = Tt);
            else break t;
          }
        }
        function u(L) {
          return L.length === 0 ? null : L[0];
        }
        function o(L) {
          if (L.length === 0) return null;
          var K = L[0],
            lt = L.pop();
          if (lt !== K) {
            L[0] = lt;
            t: for (var Tt = 0, zt = L.length, A = zt >>> 1; Tt < A; ) {
              var q = 2 * (Tt + 1) - 1,
                k = L[q],
                W = q + 1,
                it = L[W];
              if (0 > r(k, lt))
                W < zt && 0 > r(it, k)
                  ? ((L[Tt] = it), (L[W] = lt), (Tt = W))
                  : ((L[Tt] = k), (L[q] = lt), (Tt = q));
              else if (W < zt && 0 > r(it, lt))
                (L[Tt] = it), (L[W] = lt), (Tt = W);
              else break t;
            }
          }
          return K;
        }
        function r(L, K) {
          var lt = L.sortIndex - K.sortIndex;
          return lt !== 0 ? lt : L.id - K.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          l.unstable_now = function () {
            return d.now();
          };
        } else {
          var m = Date,
            p = m.now();
          l.unstable_now = function () {
            return m.now() - p;
          };
        }
        var y = [],
          h = [],
          b = 1,
          g = null,
          _ = 3,
          z = !1,
          B = !1,
          O = !1,
          U = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          Z = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function F(L) {
          for (var K = u(h); K !== null; ) {
            if (K.callback === null) o(h);
            else if (K.startTime <= L)
              o(h), (K.sortIndex = K.expirationTime), i(y, K);
            else break;
            K = u(h);
          }
        }
        function at(L) {
          if (((O = !1), F(L), !B))
            if (u(y) !== null) (B = !0), V || ((V = !0), Mt());
            else {
              var K = u(h);
              K !== null && Ht(at, K.startTime - L);
            }
        }
        var V = !1,
          G = -1,
          Q = 5,
          I = -1;
        function ft() {
          return U ? !0 : !(l.unstable_now() - I < Q);
        }
        function ot() {
          if (((U = !1), V)) {
            var L = l.unstable_now();
            I = L;
            var K = !0;
            try {
              t: {
                (B = !1), O && ((O = !1), Z(G), (G = -1)), (z = !0);
                var lt = _;
                try {
                  e: {
                    for (
                      F(L), g = u(y);
                      g !== null && !(g.expirationTime > L && ft());
                    ) {
                      var Tt = g.callback;
                      if (typeof Tt == "function") {
                        (g.callback = null), (_ = g.priorityLevel);
                        var zt = Tt(g.expirationTime <= L);
                        if (((L = l.unstable_now()), typeof zt == "function")) {
                          (g.callback = zt), F(L), (K = !0);
                          break e;
                        }
                        g === u(y) && o(y), F(L);
                      } else o(y);
                      g = u(y);
                    }
                    if (g !== null) K = !0;
                    else {
                      var A = u(h);
                      A !== null && Ht(at, A.startTime - L), (K = !1);
                    }
                  }
                  break t;
                } finally {
                  (g = null), (_ = lt), (z = !1);
                }
                K = void 0;
              }
            } finally {
              K ? Mt() : (V = !1);
            }
          }
        }
        var Mt;
        if (typeof X == "function")
          Mt = function () {
            X(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Gt = new MessageChannel(),
            Xt = Gt.port2;
          (Gt.port1.onmessage = ot),
            (Mt = function () {
              Xt.postMessage(null);
            });
        } else
          Mt = function () {
            Y(ot, 0);
          };
        function Ht(L, K) {
          G = Y(function () {
            L(l.unstable_now());
          }, K);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (l.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Q = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (l.unstable_next = function (L) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = _;
            }
            var lt = _;
            _ = K;
            try {
              return L();
            } finally {
              _ = lt;
            }
          }),
          (l.unstable_requestPaint = function () {
            U = !0;
          }),
          (l.unstable_runWithPriority = function (L, K) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var lt = _;
            _ = L;
            try {
              return K();
            } finally {
              _ = lt;
            }
          }),
          (l.unstable_scheduleCallback = function (L, K, lt) {
            var Tt = l.unstable_now();
            switch (
              (typeof lt == "object" && lt !== null
                ? ((lt = lt.delay),
                  (lt = typeof lt == "number" && 0 < lt ? Tt + lt : Tt))
                : (lt = Tt),
              L)
            ) {
              case 1:
                var zt = -1;
                break;
              case 2:
                zt = 250;
                break;
              case 5:
                zt = 1073741823;
                break;
              case 4:
                zt = 1e4;
                break;
              default:
                zt = 5e3;
            }
            return (
              (zt = lt + zt),
              (L = {
                id: b++,
                callback: K,
                priorityLevel: L,
                startTime: lt,
                expirationTime: zt,
                sortIndex: -1,
              }),
              lt > Tt
                ? ((L.sortIndex = lt),
                  i(h, L),
                  u(y) === null &&
                    L === u(h) &&
                    (O ? (Z(G), (G = -1)) : (O = !0), Ht(at, lt - Tt)))
                : ((L.sortIndex = zt),
                  i(y, L),
                  B || z || ((B = !0), V || ((V = !0), Mt()))),
              L
            );
          }),
          (l.unstable_shouldYield = ft),
          (l.unstable_wrapCallback = function (L) {
            var K = _;
            return function () {
              var lt = _;
              _ = K;
              try {
                return L.apply(this, arguments);
              } finally {
                _ = lt;
              }
            };
          });
      })(Xo)),
    Xo
  );
}
var xm;
function Ag() {
  return xm || ((xm = 1), (Go.exports = Rg())), Go.exports;
}
var Vo = { exports: {} },
  se = {};
var Cm;
function Mg() {
  if (Cm) return se;
  Cm = 1;
  var l = xi();
  function i(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        h += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(i(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function d(y, h, b) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: g == null ? null : "" + g,
      children: y,
      containerInfo: h,
      implementation: b,
    };
  }
  var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, h) {
    if (y === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (se.createPortal = function (y, h) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(i(299));
      return d(y, h, null, b);
    }),
    (se.flushSync = function (y) {
      var h = m.T,
        b = o.p;
      try {
        if (((m.T = null), (o.p = 2), y)) return y();
      } finally {
        (m.T = h), (o.p = b), o.d.f();
      }
    }),
    (se.preconnect = function (y, h) {
      typeof y == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        o.d.C(y, h));
    }),
    (se.prefetchDNS = function (y) {
      typeof y == "string" && o.d.D(y);
    }),
    (se.preinit = function (y, h) {
      if (typeof y == "string" && h && typeof h.as == "string") {
        var b = h.as,
          g = p(b, h.crossOrigin),
          _ = typeof h.integrity == "string" ? h.integrity : void 0,
          z = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        b === "style"
          ? o.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: g,
              integrity: _,
              fetchPriority: z,
            })
          : b === "script" &&
            o.d.X(y, {
              crossOrigin: g,
              integrity: _,
              fetchPriority: z,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (se.preinitModule = function (y, h) {
      if (typeof y == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var b = p(h.as, h.crossOrigin);
            o.d.M(y, {
              crossOrigin: b,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && o.d.M(y);
    }),
    (se.preload = function (y, h) {
      if (
        typeof y == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var b = h.as,
          g = p(b, h.crossOrigin);
        o.d.L(y, b, {
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (se.preloadModule = function (y, h) {
      if (typeof y == "string")
        if (h) {
          var b = p(h.as, h.crossOrigin);
          o.d.m(y, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: b,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else o.d.m(y);
    }),
    (se.requestFormReset = function (y) {
      o.d.r(y);
    }),
    (se.unstable_batchedUpdates = function (y, h) {
      return y(h);
    }),
    (se.useFormState = function (y, h, b) {
      return m.H.useFormState(y, h, b);
    }),
    (se.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (se.version = "19.2.0"),
    se
  );
}
var Dm;
function ly() {
  if (Dm) return Vo.exports;
  Dm = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), (Vo.exports = Mg()), Vo.exports;
}
var wm;
function zg() {
  if (wm) return yi;
  wm = 1;
  var l = Ag(),
    i = xi(),
    u = ly();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function m(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (d(t) !== t) throw Error(o(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var c = n.return;
      if (c === null) break;
      var s = c.alternate;
      if (s === null) {
        if (((a = c.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (c.child === s.child) {
        for (s = c.child; s; ) {
          if (s === n) return y(c), t;
          if (s === a) return y(c), e;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) (n = c), (a = s);
      else {
        for (var f = !1, v = c.child; v; ) {
          if (v === n) {
            (f = !0), (n = c), (a = s);
            break;
          }
          if (v === a) {
            (f = !0), (a = c), (n = s);
            break;
          }
          v = v.sibling;
        }
        if (!f) {
          for (v = s.child; v; ) {
            if (v === n) {
              (f = !0), (n = s), (a = c);
              break;
            }
            if (v === a) {
              (f = !0), (a = s), (n = c);
              break;
            }
            v = v.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = b(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    _ = Symbol.for("react.element"),
    z = Symbol.for("react.transitional.element"),
    B = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    U = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    Z = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    at = Symbol.for("react.suspense"),
    V = Symbol.for("react.suspense_list"),
    G = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    I = Symbol.for("react.activity"),
    ft = Symbol.for("react.memo_cache_sentinel"),
    ot = Symbol.iterator;
  function Mt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ot && t[ot]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Gt = Symbol.for("react.client.reference");
  function Xt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Gt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case O:
        return "Fragment";
      case Y:
        return "Profiler";
      case U:
        return "StrictMode";
      case at:
        return "Suspense";
      case V:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case B:
          return "Portal";
        case X:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case F:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case G:
          return (
            (e = t.displayName || null), e !== null ? e : Xt(t.type) || "Memo"
          );
        case Q:
          (e = t._payload), (t = t._init);
          try {
            return Xt(t(e));
          } catch {}
      }
    return null;
  }
  var Ht = Array.isArray,
    L = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = { pending: !1, data: null, method: null, action: null },
    Tt = [],
    zt = -1;
  function A(t) {
    return { current: t };
  }
  function q(t) {
    0 > zt || ((t.current = Tt[zt]), (Tt[zt] = null), zt--);
  }
  function k(t, e) {
    zt++, (Tt[zt] = t.current), (t.current = e);
  }
  var W = A(null),
    it = A(null),
    ut = A(null),
    vt = A(null);
  function Kt(t, e) {
    switch ((k(ut, e), k(it, t), k(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Jh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Jh(e)), (t = kh(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    q(W), k(W, t);
  }
  function Ot() {
    q(W), q(it), q(ut);
  }
  function Pe(t) {
    t.memoizedState !== null && k(vt, t);
    var e = W.current,
      n = kh(e, t.type);
    e !== n && (k(it, t), k(W, n));
  }
  function Sn(t) {
    it.current === t && (q(W), q(it)),
      vt.current === t && (q(vt), (ri._currentValue = lt));
  }
  var Ge, Di;
  function Ie(t) {
    if (Ge === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Ge = (e && e[1]) || ""),
          (Di =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Ge +
      t +
      Di
    );
  }
  var xa = !1;
  function bl(t, e) {
    if (!t || xa) return "";
    xa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (w) {
                  var D = w;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (w) {
                  D = w;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                D = w;
              }
              (H = t()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (w) {
            if (w && D && typeof w.stack == "string") return [w.stack, D.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      c &&
        c.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = a.DetermineComponentFrameRoot(),
        f = s[0],
        v = s[1];
      if (f && v) {
        var E = f.split(`
`),
          C = v.split(`
`);
        for (
          c = a = 0;
          a < E.length && !E[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; c < C.length && !C[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (a === E.length || c === C.length)
          for (
            a = E.length - 1, c = C.length - 1;
            1 <= a && 0 <= c && E[a] !== C[c];
          )
            c--;
        for (; 1 <= a && 0 <= c; a--, c--)
          if (E[a] !== C[c]) {
            if (a !== 1 || c !== 1)
              do
                if ((a--, c--, 0 > c || E[a] !== C[c])) {
                  var N =
                    `
` + E[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", t.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= c);
            break;
          }
      }
    } finally {
      (xa = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Ie(n) : "";
  }
  function Rc(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ie(t.type);
      case 16:
        return Ie("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Ie("Suspense Fallback")
          : Ie("Suspense");
      case 19:
        return Ie("SuspenseList");
      case 0:
      case 15:
        return bl(t.type, !1);
      case 11:
        return bl(t.type.render, !1);
      case 1:
        return bl(t.type, !0);
      case 31:
        return Ie("Activity");
      default:
        return "";
    }
  }
  function wi(t) {
    try {
      var e = "",
        n = null;
      do (e += Rc(t, n)), (n = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var bn = Object.prototype.hasOwnProperty,
    _n = l.unstable_scheduleCallback,
    Ca = l.unstable_cancelCallback,
    Ui = l.unstable_shouldYield,
    xt = l.unstable_requestPaint,
    bt = l.unstable_now,
    Se = l.unstable_getCurrentPriorityLevel,
    _l = l.unstable_ImmediatePriority,
    Ar = l.unstable_UserBlockingPriority,
    Li = l.unstable_NormalPriority,
    ev = l.unstable_LowPriority,
    Mr = l.unstable_IdlePriority,
    nv = l.log,
    av = l.unstable_setDisableYieldValue,
    El = null,
    be = null;
  function En(t) {
    if (
      (typeof nv == "function" && av(t),
      be && typeof be.setStrictMode == "function")
    )
      try {
        be.setStrictMode(El, t);
      } catch {}
  }
  var _e = Math.clz32 ? Math.clz32 : uv,
    lv = Math.log,
    iv = Math.LN2;
  function uv(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((lv(t) / iv) | 0)) | 0;
  }
  var Ni = 256,
    Bi = 262144,
    ji = 4194304;
  function na(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Hi(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var c = 0,
      s = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var v = a & 134217727;
    return (
      v !== 0
        ? ((a = v & ~s),
          a !== 0
            ? (c = na(a))
            : ((f &= v),
              f !== 0
                ? (c = na(f))
                : n || ((n = v & ~t), n !== 0 && (c = na(n)))))
        : ((v = a & ~s),
          v !== 0
            ? (c = na(v))
            : f !== 0
              ? (c = na(f))
              : n || ((n = a & ~t), n !== 0 && (c = na(n)))),
      c === 0
        ? 0
        : e !== 0 &&
            e !== c &&
            (e & s) === 0 &&
            ((s = c & -c),
            (n = e & -e),
            s >= n || (s === 32 && (n & 4194048) !== 0))
          ? e
          : c
    );
  }
  function Tl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function cv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zr() {
    var t = ji;
    return (ji <<= 1), (ji & 62914560) === 0 && (ji = 4194304), t;
  }
  function Ac(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Rl(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function sv(t, e, n, a, c, s) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      E = t.expirationTimes,
      C = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var N = 31 - _e(n),
        H = 1 << N;
      (v[N] = 0), (E[N] = -1);
      var D = C[N];
      if (D !== null)
        for (C[N] = null, N = 0; N < D.length; N++) {
          var w = D[N];
          w !== null && (w.lane &= -536870913);
        }
      n &= ~H;
    }
    a !== 0 && Or(t, a, 0),
      s !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(f & ~e));
  }
  function Or(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - _e(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930));
  }
  function xr(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - _e(n),
        c = 1 << a;
      (c & e) | (t[a] & e) && (t[a] |= e), (n &= ~c);
    }
  }
  function Cr(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Mc(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Mc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function zc(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Dr() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : pm(t.type));
  }
  function wr(t, e) {
    var n = K.p;
    try {
      return (K.p = t), e();
    } finally {
      K.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2),
    ne = "__reactFiber$" + Tn,
    re = "__reactProps$" + Tn,
    Da = "__reactContainer$" + Tn,
    Oc = "__reactEvents$" + Tn,
    ov = "__reactListeners$" + Tn,
    rv = "__reactHandles$" + Tn,
    Ur = "__reactResources$" + Tn,
    Al = "__reactMarker$" + Tn;
  function xc(t) {
    delete t[ne], delete t[re], delete t[Oc], delete t[ov], delete t[rv];
  }
  function wa(t) {
    var e = t[ne];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Da] || n[ne])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = em(t); t !== null; ) {
            if ((n = t[ne])) return n;
            t = em(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ua(t) {
    if ((t = t[ne] || t[Da])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ml(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function La(t) {
    var e = t[Ur];
    return (
      e ||
        (e = t[Ur] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Pt(t) {
    t[Al] = !0;
  }
  var Lr = new Set(),
    Nr = {};
  function aa(t, e) {
    Na(t, e), Na(t + "Capture", e);
  }
  function Na(t, e) {
    for (Nr[t] = e, t = 0; t < e.length; t++) Lr.add(e[t]);
  }
  var fv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Br = {},
    jr = {};
  function dv(t) {
    return bn.call(jr, t)
      ? !0
      : bn.call(Br, t)
        ? !1
        : fv.test(t)
          ? (jr[t] = !0)
          : ((Br[t] = !0), !1);
  }
  function qi(t, e, n) {
    if (dv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Yi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function tn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function Ce(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Hr(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function hv(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var c = a.get,
        s = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (f) {
            (n = "" + f), s.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Cc(t) {
    if (!t._valueTracker) {
      var e = Hr(t) ? "checked" : "value";
      t._valueTracker = hv(t, e, "" + t[e]);
    }
  }
  function qr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Hr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Gi(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var mv = /[\n"\\]/g;
  function De(t) {
    return t.replace(mv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Dc(t, e, n, a, c, s, f, v) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ce(e))
          : t.value !== "" + Ce(e) && (t.value = "" + Ce(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? wc(t, f, Ce(e))
        : n != null
          ? wc(t, f, Ce(n))
          : a != null && t.removeAttribute("value"),
      c == null && s != null && (t.defaultChecked = !!s),
      c != null &&
        (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Ce(v))
        : t.removeAttribute("name");
  }
  function Yr(t, e, n, a, c, s, f, v) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (t.type = s),
      e != null || n != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || e != null)) {
        Cc(t);
        return;
      }
      (n = n != null ? "" + Ce(n) : ""),
        (e = e != null ? "" + Ce(e) : n),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? c),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = v ? t.checked : !!a),
      (t.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      Cc(t);
  }
  function wc(t, e, n) {
    (e === "number" && Gi(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ba(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var c = 0; c < n.length; c++) e["$" + n[c]] = !0;
      for (n = 0; n < t.length; n++)
        (c = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== c && (t[n].selected = c),
          c && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ce(n), e = null, c = 0; c < t.length; c++) {
        if (t[c].value === n) {
          (t[c].selected = !0), a && (t[c].defaultSelected = !0);
          return;
        }
        e !== null || t[c].disabled || (e = t[c]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Gr(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ce(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ce(n) : "";
  }
  function Xr(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (Ht(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Ce(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      Cc(t);
  }
  function ja(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var yv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Vr(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || yv.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Qr(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var c in e)
        (a = e[c]), e.hasOwnProperty(c) && n[c] !== a && Vr(t, c, a);
    } else for (var s in e) e.hasOwnProperty(s) && Vr(t, s, e[s]);
  }
  function Uc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    pv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xi(t) {
    return pv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function en() {}
  var Lc = null;
  function Nc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ha = null,
    qa = null;
  function Zr(t) {
    var e = Ua(t);
    if (e && (t = e.stateNode)) {
      var n = t[re] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Dc(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + De("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var c = a[re] || null;
                if (!c) throw Error(o(90));
                Dc(
                  a,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && qr(a);
          }
          break t;
        case "textarea":
          Gr(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ba(t, !!n.multiple, e, !1);
      }
    }
  }
  var Bc = !1;
  function Kr(t, e, n) {
    if (Bc) return t(e, n);
    Bc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Bc = !1),
        (Ha !== null || qa !== null) &&
          (xu(), Ha && ((e = Ha), (t = qa), (qa = Ha = null), Zr(e), t)))
      )
        for (e = 0; e < t.length; e++) Zr(t[e]);
    }
  }
  function zl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[re] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    jc = !1;
  if (nn)
    try {
      var Ol = {};
      Object.defineProperty(Ol, "passive", {
        get: function () {
          jc = !0;
        },
      }),
        window.addEventListener("test", Ol, Ol),
        window.removeEventListener("test", Ol, Ol);
    } catch {
      jc = !1;
    }
  var Rn = null,
    Hc = null,
    Vi = null;
  function Jr() {
    if (Vi) return Vi;
    var t,
      e = Hc,
      n = e.length,
      a,
      c = "value" in Rn ? Rn.value : Rn.textContent,
      s = c.length;
    for (t = 0; t < n && e[t] === c[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === c[s - a]; a++);
    return (Vi = c.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Qi(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Zi() {
    return !0;
  }
  function kr() {
    return !1;
  }
  function fe(t) {
    function e(n, a, c, s, f) {
      (this._reactName = n),
        (this._targetInst = c),
        (this.type = a),
        (this.nativeEvent = s),
        (this.target = f),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((n = t[v]), (this[v] = n ? n(s) : s[v]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null
            ? s.defaultPrevented
            : s.returnValue === !1
        )
          ? Zi
          : kr),
        (this.isPropagationStopped = kr),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Zi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Zi));
        },
        persist: function () {},
        isPersistent: Zi,
      }),
      e
    );
  }
  var la = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ki = fe(la),
    xl = g({}, la, { view: 0, detail: 0 }),
    gv = fe(xl),
    qc,
    Yc,
    Cl,
    Ji = g({}, xl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Xc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Cl &&
              (Cl && t.type === "mousemove"
                ? ((qc = t.screenX - Cl.screenX), (Yc = t.screenY - Cl.screenY))
                : (Yc = qc = 0),
              (Cl = t)),
            qc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Yc;
      },
    }),
    Fr = fe(Ji),
    Sv = g({}, Ji, { dataTransfer: 0 }),
    bv = fe(Sv),
    _v = g({}, xl, { relatedTarget: 0 }),
    Gc = fe(_v),
    Ev = g({}, la, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tv = fe(Ev),
    Rv = g({}, la, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Av = fe(Rv),
    Mv = g({}, la, { data: 0 }),
    Wr = fe(Mv),
    zv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ov = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    xv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Cv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = xv[t])
        ? !!e[t]
        : !1;
  }
  function Xc() {
    return Cv;
  }
  var Dv = g({}, xl, {
      key: function (t) {
        if (t.key) {
          var e = zv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Qi(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Ov[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xc,
      charCode: function (t) {
        return t.type === "keypress" ? Qi(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Qi(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    wv = fe(Dv),
    Uv = g({}, Ji, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    $r = fe(Uv),
    Lv = g({}, xl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xc,
    }),
    Nv = fe(Lv),
    Bv = g({}, la, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jv = fe(Bv),
    Hv = g({}, Ji, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    qv = fe(Hv),
    Yv = g({}, la, { newState: 0, oldState: 0 }),
    Gv = fe(Yv),
    Xv = [9, 13, 27, 32],
    Vc = nn && "CompositionEvent" in window,
    Dl = null;
  nn && "documentMode" in document && (Dl = document.documentMode);
  var Vv = nn && "TextEvent" in window && !Dl,
    Pr = nn && (!Vc || (Dl && 8 < Dl && 11 >= Dl)),
    Ir = " ",
    tf = !1;
  function ef(t, e) {
    switch (t) {
      case "keyup":
        return Xv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ya = !1;
  function Qv(t, e) {
    switch (t) {
      case "compositionend":
        return nf(e);
      case "keypress":
        return e.which !== 32 ? null : ((tf = !0), Ir);
      case "textInput":
        return (t = e.data), t === Ir && tf ? null : t;
      default:
        return null;
    }
  }
  function Zv(t, e) {
    if (Ya)
      return t === "compositionend" || (!Vc && ef(t, e))
        ? ((t = Jr()), (Vi = Hc = Rn = null), (Ya = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Pr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Kv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function af(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Kv[t.type] : e === "textarea";
  }
  function lf(t, e, n, a) {
    Ha ? (qa ? qa.push(a) : (qa = [a])) : (Ha = a),
      (e = Bu(e, "onChange")),
      0 < e.length &&
        ((n = new Ki("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var wl = null,
    Ul = null;
  function Jv(t) {
    Gh(t, 0);
  }
  function ki(t) {
    var e = Ml(t);
    if (qr(e)) return t;
  }
  function uf(t, e) {
    if (t === "change") return e;
  }
  var cf = !1;
  if (nn) {
    var Qc;
    if (nn) {
      var Zc = "oninput" in document;
      if (!Zc) {
        var sf = document.createElement("div");
        sf.setAttribute("oninput", "return;"),
          (Zc = typeof sf.oninput == "function");
      }
      Qc = Zc;
    } else Qc = !1;
    cf = Qc && (!document.documentMode || 9 < document.documentMode);
  }
  function of() {
    wl && (wl.detachEvent("onpropertychange", rf), (Ul = wl = null));
  }
  function rf(t) {
    if (t.propertyName === "value" && ki(Ul)) {
      var e = [];
      lf(e, Ul, t, Nc(t)), Kr(Jv, e);
    }
  }
  function kv(t, e, n) {
    t === "focusin"
      ? (of(), (wl = e), (Ul = n), wl.attachEvent("onpropertychange", rf))
      : t === "focusout" && of();
  }
  function Fv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ki(Ul);
  }
  function Wv(t, e) {
    if (t === "click") return ki(e);
  }
  function $v(t, e) {
    if (t === "input" || t === "change") return ki(e);
  }
  function Pv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ee = typeof Object.is == "function" ? Object.is : Pv;
  function Ll(t, e) {
    if (Ee(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var c = n[a];
      if (!bn.call(e, c) || !Ee(t[c], e[c])) return !1;
    }
    return !0;
  }
  function ff(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function df(t, e) {
    var n = ff(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ff(n);
    }
  }
  function hf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? hf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function mf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Gi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Gi(t.document);
    }
    return e;
  }
  function Kc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Iv = nn && "documentMode" in document && 11 >= document.documentMode,
    Ga = null,
    Jc = null,
    Nl = null,
    kc = !1;
  function yf(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    kc ||
      Ga == null ||
      Ga !== Gi(a) ||
      ((a = Ga),
      "selectionStart" in a && Kc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Nl && Ll(Nl, a)) ||
        ((Nl = a),
        (a = Bu(Jc, "onSelect")),
        0 < a.length &&
          ((e = new Ki("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = Ga))));
  }
  function ia(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Xa = {
      animationend: ia("Animation", "AnimationEnd"),
      animationiteration: ia("Animation", "AnimationIteration"),
      animationstart: ia("Animation", "AnimationStart"),
      transitionrun: ia("Transition", "TransitionRun"),
      transitionstart: ia("Transition", "TransitionStart"),
      transitioncancel: ia("Transition", "TransitionCancel"),
      transitionend: ia("Transition", "TransitionEnd"),
    },
    Fc = {},
    vf = {};
  nn &&
    ((vf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xa.animationend.animation,
      delete Xa.animationiteration.animation,
      delete Xa.animationstart.animation),
    "TransitionEvent" in window || delete Xa.transitionend.transition);
  function ua(t) {
    if (Fc[t]) return Fc[t];
    if (!Xa[t]) return t;
    var e = Xa[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in vf) return (Fc[t] = e[n]);
    return t;
  }
  var pf = ua("animationend"),
    gf = ua("animationiteration"),
    Sf = ua("animationstart"),
    tp = ua("transitionrun"),
    ep = ua("transitionstart"),
    np = ua("transitioncancel"),
    bf = ua("transitionend"),
    _f = new Map(),
    Wc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Wc.push("scrollEnd");
  function Xe(t, e) {
    _f.set(t, e), aa(e, [t]);
  }
  var Fi =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    we = [],
    Va = 0,
    $c = 0;
  function Wi() {
    for (var t = Va, e = ($c = Va = 0); e < t; ) {
      var n = we[e];
      we[e++] = null;
      var a = we[e];
      we[e++] = null;
      var c = we[e];
      we[e++] = null;
      var s = we[e];
      if (((we[e++] = null), a !== null && c !== null)) {
        var f = a.pending;
        f === null ? (c.next = c) : ((c.next = f.next), (f.next = c)),
          (a.pending = c);
      }
      s !== 0 && Ef(n, c, s);
    }
  }
  function $i(t, e, n, a) {
    (we[Va++] = t),
      (we[Va++] = e),
      (we[Va++] = n),
      (we[Va++] = a),
      ($c |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Pc(t, e, n, a) {
    return $i(t, e, n, a), Pi(t);
  }
  function ca(t, e) {
    return $i(t, null, null, e), Pi(t);
  }
  function Ef(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var c = !1, s = t.return; s !== null; )
      (s.childLanes |= n),
        (a = s.alternate),
        a !== null && (a.childLanes |= n),
        s.tag === 22 &&
          ((t = s.stateNode), t === null || t._visibility & 1 || (c = !0)),
        (t = s),
        (s = s.return);
    return t.tag === 3
      ? ((s = t.stateNode),
        c &&
          e !== null &&
          ((c = 31 - _e(n)),
          (t = s.hiddenUpdates),
          (a = t[c]),
          a === null ? (t[c] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        s)
      : null;
  }
  function Pi(t) {
    if (50 < ai) throw ((ai = 0), (co = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Qa = {};
  function ap(t, e, n, a) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Te(t, e, n, a) {
    return new ap(t, e, n, a);
  }
  function Ic(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function an(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Te(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Tf(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Ii(t, e, n, a, c, s) {
    var f = 0;
    if (((a = t), typeof t == "function")) Ic(t) && (f = 1);
    else if (typeof t == "string")
      f = sg(t, n, W.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case I:
          return (t = Te(31, n, e, c)), (t.elementType = I), (t.lanes = s), t;
        case O:
          return sa(n.children, c, s, e);
        case U:
          (f = 8), (c |= 24);
          break;
        case Y:
          return (
            (t = Te(12, n, e, c | 2)), (t.elementType = Y), (t.lanes = s), t
          );
        case at:
          return (t = Te(13, n, e, c)), (t.elementType = at), (t.lanes = s), t;
        case V:
          return (t = Te(19, n, e, c)), (t.elementType = V), (t.lanes = s), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case X:
                f = 10;
                break t;
              case Z:
                f = 9;
                break t;
              case F:
                f = 11;
                break t;
              case G:
                f = 14;
                break t;
              case Q:
                (f = 16), (a = null);
                break t;
            }
          (f = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = Te(f, n, e, c)), (e.elementType = t), (e.type = a), (e.lanes = s), e
    );
  }
  function sa(t, e, n, a) {
    return (t = Te(7, t, a, e)), (t.lanes = n), t;
  }
  function ts(t, e, n) {
    return (t = Te(6, t, null, e)), (t.lanes = n), t;
  }
  function Rf(t) {
    var e = Te(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function es(t, e, n) {
    return (
      (e = Te(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Af = new WeakMap();
  function Ue(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Af.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: wi(e) }), Af.set(t, e), e);
    }
    return { value: t, source: e, stack: wi(e) };
  }
  var Za = [],
    Ka = 0,
    tu = null,
    Bl = 0,
    Le = [],
    Ne = 0,
    An = null,
    Ke = 1,
    Je = "";
  function ln(t, e) {
    (Za[Ka++] = Bl), (Za[Ka++] = tu), (tu = t), (Bl = e);
  }
  function Mf(t, e, n) {
    (Le[Ne++] = Ke), (Le[Ne++] = Je), (Le[Ne++] = An), (An = t);
    var a = Ke;
    t = Je;
    var c = 32 - _e(a) - 1;
    (a &= ~(1 << c)), (n += 1);
    var s = 32 - _e(e) + c;
    if (30 < s) {
      var f = c - (c % 5);
      (s = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (c -= f),
        (Ke = (1 << (32 - _e(e) + c)) | (n << c) | a),
        (Je = s + t);
    } else (Ke = (1 << s) | (n << c) | a), (Je = t);
  }
  function ns(t) {
    t.return !== null && (ln(t, 1), Mf(t, 1, 0));
  }
  function as(t) {
    for (; t === tu; )
      (tu = Za[--Ka]), (Za[Ka] = null), (Bl = Za[--Ka]), (Za[Ka] = null);
    for (; t === An; )
      (An = Le[--Ne]),
        (Le[Ne] = null),
        (Je = Le[--Ne]),
        (Le[Ne] = null),
        (Ke = Le[--Ne]),
        (Le[Ne] = null);
  }
  function zf(t, e) {
    (Le[Ne++] = Ke),
      (Le[Ne++] = Je),
      (Le[Ne++] = An),
      (Ke = e.id),
      (Je = e.overflow),
      (An = t);
  }
  var ae = null,
    Lt = null,
    pt = !1,
    Mn = null,
    Be = !1,
    ls = Error(o(519));
  function zn(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (jl(Ue(e, t)), ls);
  }
  function Of(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[ne] = t), (e[re] = a), n)) {
      case "dialog":
        ht("cancel", e), ht("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ii.length; n++) ht(ii[n], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ht("error", e), ht("load", e);
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        ht("invalid", e),
          Yr(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          );
        break;
      case "select":
        ht("invalid", e);
        break;
      case "textarea":
        ht("invalid", e), Xr(e, a.value, a.defaultValue, a.children);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Zh(e.textContent, n)
        ? (a.popover != null && (ht("beforetoggle", e), ht("toggle", e)),
          a.onScroll != null && ht("scroll", e),
          a.onScrollEnd != null && ht("scrollend", e),
          a.onClick != null && (e.onclick = en),
          (e = !0))
        : (e = !1),
      e || zn(t, !0);
  }
  function xf(t) {
    for (ae = t.return; ae; )
      switch (ae.tag) {
        case 5:
        case 31:
        case 13:
          Be = !1;
          return;
        case 27:
        case 3:
          Be = !0;
          return;
        default:
          ae = ae.return;
      }
  }
  function Ja(t) {
    if (t !== ae) return !1;
    if (!pt) return xf(t), (pt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || To(t.type, t.memoizedProps))),
        (n = !n)),
      n && Lt && zn(t),
      xf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Lt = tm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Lt = tm(t);
    } else
      e === 27
        ? ((e = Lt), Gn(t.type) ? ((t = Oo), (Oo = null), (Lt = t)) : (Lt = e))
        : (Lt = ae ? He(t.stateNode.nextSibling) : null);
    return !0;
  }
  function oa() {
    (Lt = ae = null), (pt = !1);
  }
  function is() {
    var t = Mn;
    return (
      t !== null &&
        (ye === null ? (ye = t) : ye.push.apply(ye, t), (Mn = null)),
      t
    );
  }
  function jl(t) {
    Mn === null ? (Mn = [t]) : Mn.push(t);
  }
  var us = A(null),
    ra = null,
    un = null;
  function On(t, e, n) {
    k(us, e._currentValue), (e._currentValue = n);
  }
  function cn(t) {
    (t._currentValue = us.current), q(us);
  }
  function cs(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function ss(t, e, n, a) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var s = c.dependencies;
      if (s !== null) {
        var f = c.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var v = s;
          s = c;
          for (var E = 0; E < e.length; E++)
            if (v.context === e[E]) {
              (s.lanes |= n),
                (v = s.alternate),
                v !== null && (v.lanes |= n),
                cs(s.return, n, t),
                a || (f = null);
              break t;
            }
          s = v.next;
        }
      } else if (c.tag === 18) {
        if (((f = c.return), f === null)) throw Error(o(341));
        (f.lanes |= n),
          (s = f.alternate),
          s !== null && (s.lanes |= n),
          cs(f, n, t),
          (f = null);
      } else f = c.child;
      if (f !== null) f.return = c;
      else
        for (f = c; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((c = f.sibling), c !== null)) {
            (c.return = f.return), (f = c);
            break;
          }
          f = f.return;
        }
      c = f;
    }
  }
  function ka(t, e, n, a) {
    t = null;
    for (var c = e, s = !1; c !== null; ) {
      if (!s) {
        if ((c.flags & 524288) !== 0) s = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var f = c.alternate;
        if (f === null) throw Error(o(387));
        if (((f = f.memoizedProps), f !== null)) {
          var v = c.type;
          Ee(c.pendingProps.value, f.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (c === vt.current) {
        if (((f = c.alternate), f === null)) throw Error(o(387));
        f.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (t !== null ? t.push(ri) : (t = [ri]));
      }
      c = c.return;
    }
    t !== null && ss(e, t, n, a), (e.flags |= 262144);
  }
  function eu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ee(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function fa(t) {
    (ra = t),
      (un = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function le(t) {
    return Cf(ra, t);
  }
  function nu(t, e) {
    return ra === null && fa(t), Cf(t, e);
  }
  function Cf(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), un === null)) {
      if (t === null) throw Error(o(308));
      (un = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else un = un.next = e;
    return n;
  }
  var lp =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    ip = l.unstable_scheduleCallback,
    up = l.unstable_NormalPriority,
    Jt = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function os() {
    return { controller: new lp(), data: new Map(), refCount: 0 };
  }
  function Hl(t) {
    t.refCount--,
      t.refCount === 0 &&
        ip(up, function () {
          t.controller.abort();
        });
  }
  var ql = null,
    rs = 0,
    Fa = 0,
    Wa = null;
  function cp(t, e) {
    if (ql === null) {
      var n = (ql = []);
      (rs = 0),
        (Fa = mo()),
        (Wa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return rs++, e.then(Df, Df), e;
  }
  function Df() {
    if (--rs === 0 && ql !== null) {
      Wa !== null && (Wa.status = "fulfilled");
      var t = ql;
      (ql = null), (Fa = 0), (Wa = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function sp(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          n.push(c);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var c = 0; c < n.length; c++) (0, n[c])(e);
        },
        function (c) {
          for (a.status = "rejected", a.reason = c, c = 0; c < n.length; c++)
            (0, n[c])(void 0);
        },
      ),
      a
    );
  }
  var wf = L.S;
  L.S = function (t, e) {
    (yh = bt()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        cp(t, e),
      wf !== null && wf(t, e);
  };
  var da = A(null);
  function fs() {
    var t = da.current;
    return t !== null ? t : Ut.pooledCache;
  }
  function au(t, e) {
    e === null ? k(da, da.current) : k(da, e.pool);
  }
  function Uf() {
    var t = fs();
    return t === null ? null : { parent: Jt._currentValue, pool: t };
  }
  var $a = Error(o(460)),
    ds = Error(o(474)),
    lu = Error(o(542)),
    iu = { then: function () {} };
  function Lf(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Nf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(en, en), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), jf(t), t);
      default:
        if (typeof e.status == "string") e.then(en, en);
        else {
          if (((t = Ut), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var c = e;
                  (c.status = "fulfilled"), (c.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var c = e;
                  (c.status = "rejected"), (c.reason = a);
                }
              },
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), jf(t), t);
        }
        throw ((ma = e), $a);
    }
  }
  function ha(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((ma = n), $a)
        : n;
    }
  }
  var ma = null;
  function Bf() {
    if (ma === null) throw Error(o(459));
    var t = ma;
    return (ma = null), t;
  }
  function jf(t) {
    if (t === $a || t === lu) throw Error(o(483));
  }
  var Pa = null,
    Yl = 0;
  function uu(t) {
    var e = Yl;
    return (Yl += 1), Pa === null && (Pa = []), Nf(Pa, t, e);
  }
  function Gl(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function cu(t, e) {
    throw e.$$typeof === _
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Hf(t) {
    function e(M, R) {
      if (t) {
        var x = M.deletions;
        x === null ? ((M.deletions = [R]), (M.flags |= 16)) : x.push(R);
      }
    }
    function n(M, R) {
      if (!t) return null;
      for (; R !== null; ) e(M, R), (R = R.sibling);
      return null;
    }
    function a(M) {
      for (var R = new Map(); M !== null; )
        M.key !== null ? R.set(M.key, M) : R.set(M.index, M), (M = M.sibling);
      return R;
    }
    function c(M, R) {
      return (M = an(M, R)), (M.index = 0), (M.sibling = null), M;
    }
    function s(M, R, x) {
      return (
        (M.index = x),
        t
          ? ((x = M.alternate),
            x !== null
              ? ((x = x.index), x < R ? ((M.flags |= 67108866), R) : x)
              : ((M.flags |= 67108866), R))
          : ((M.flags |= 1048576), R)
      );
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, R, x, j) {
      return R === null || R.tag !== 6
        ? ((R = ts(x, M.mode, j)), (R.return = M), R)
        : ((R = c(R, x)), (R.return = M), R);
    }
    function E(M, R, x, j) {
      var tt = x.type;
      return tt === O
        ? N(M, R, x.props.children, j, x.key)
        : R !== null &&
            (R.elementType === tt ||
              (typeof tt == "object" &&
                tt !== null &&
                tt.$$typeof === Q &&
                ha(tt) === R.type))
          ? ((R = c(R, x.props)), Gl(R, x), (R.return = M), R)
          : ((R = Ii(x.type, x.key, x.props, null, M.mode, j)),
            Gl(R, x),
            (R.return = M),
            R);
    }
    function C(M, R, x, j) {
      return R === null ||
        R.tag !== 4 ||
        R.stateNode.containerInfo !== x.containerInfo ||
        R.stateNode.implementation !== x.implementation
        ? ((R = es(x, M.mode, j)), (R.return = M), R)
        : ((R = c(R, x.children || [])), (R.return = M), R);
    }
    function N(M, R, x, j, tt) {
      return R === null || R.tag !== 7
        ? ((R = sa(x, M.mode, j, tt)), (R.return = M), R)
        : ((R = c(R, x)), (R.return = M), R);
    }
    function H(M, R, x) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return (R = ts("" + R, M.mode, x)), (R.return = M), R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case z:
            return (
              (x = Ii(R.type, R.key, R.props, null, M.mode, x)),
              Gl(x, R),
              (x.return = M),
              x
            );
          case B:
            return (R = es(R, M.mode, x)), (R.return = M), R;
          case Q:
            return (R = ha(R)), H(M, R, x);
        }
        if (Ht(R) || Mt(R))
          return (R = sa(R, M.mode, x, null)), (R.return = M), R;
        if (typeof R.then == "function") return H(M, uu(R), x);
        if (R.$$typeof === X) return H(M, nu(M, R), x);
        cu(M, R);
      }
      return null;
    }
    function D(M, R, x, j) {
      var tt = R !== null ? R.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return tt !== null ? null : v(M, R, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case z:
            return x.key === tt ? E(M, R, x, j) : null;
          case B:
            return x.key === tt ? C(M, R, x, j) : null;
          case Q:
            return (x = ha(x)), D(M, R, x, j);
        }
        if (Ht(x) || Mt(x)) return tt !== null ? null : N(M, R, x, j, null);
        if (typeof x.then == "function") return D(M, R, uu(x), j);
        if (x.$$typeof === X) return D(M, R, nu(M, x), j);
        cu(M, x);
      }
      return null;
    }
    function w(M, R, x, j, tt) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return (M = M.get(x) || null), v(R, M, "" + j, tt);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case z:
            return (
              (M = M.get(j.key === null ? x : j.key) || null), E(R, M, j, tt)
            );
          case B:
            return (
              (M = M.get(j.key === null ? x : j.key) || null), C(R, M, j, tt)
            );
          case Q:
            return (j = ha(j)), w(M, R, x, j, tt);
        }
        if (Ht(j) || Mt(j)) return (M = M.get(x) || null), N(R, M, j, tt, null);
        if (typeof j.then == "function") return w(M, R, x, uu(j), tt);
        if (j.$$typeof === X) return w(M, R, x, nu(R, j), tt);
        cu(R, j);
      }
      return null;
    }
    function $(M, R, x, j) {
      for (
        var tt = null, gt = null, P = R, rt = (R = 0), yt = null;
        P !== null && rt < x.length;
        rt++
      ) {
        P.index > rt ? ((yt = P), (P = null)) : (yt = P.sibling);
        var St = D(M, P, x[rt], j);
        if (St === null) {
          P === null && (P = yt);
          break;
        }
        t && P && St.alternate === null && e(M, P),
          (R = s(St, R, rt)),
          gt === null ? (tt = St) : (gt.sibling = St),
          (gt = St),
          (P = yt);
      }
      if (rt === x.length) return n(M, P), pt && ln(M, rt), tt;
      if (P === null) {
        for (; rt < x.length; rt++)
          (P = H(M, x[rt], j)),
            P !== null &&
              ((R = s(P, R, rt)),
              gt === null ? (tt = P) : (gt.sibling = P),
              (gt = P));
        return pt && ln(M, rt), tt;
      }
      for (P = a(P); rt < x.length; rt++)
        (yt = w(P, M, rt, x[rt], j)),
          yt !== null &&
            (t &&
              yt.alternate !== null &&
              P.delete(yt.key === null ? rt : yt.key),
            (R = s(yt, R, rt)),
            gt === null ? (tt = yt) : (gt.sibling = yt),
            (gt = yt));
      return (
        t &&
          P.forEach(function (Kn) {
            return e(M, Kn);
          }),
        pt && ln(M, rt),
        tt
      );
    }
    function et(M, R, x, j) {
      if (x == null) throw Error(o(151));
      for (
        var tt = null, gt = null, P = R, rt = (R = 0), yt = null, St = x.next();
        P !== null && !St.done;
        rt++, St = x.next()
      ) {
        P.index > rt ? ((yt = P), (P = null)) : (yt = P.sibling);
        var Kn = D(M, P, St.value, j);
        if (Kn === null) {
          P === null && (P = yt);
          break;
        }
        t && P && Kn.alternate === null && e(M, P),
          (R = s(Kn, R, rt)),
          gt === null ? (tt = Kn) : (gt.sibling = Kn),
          (gt = Kn),
          (P = yt);
      }
      if (St.done) return n(M, P), pt && ln(M, rt), tt;
      if (P === null) {
        for (; !St.done; rt++, St = x.next())
          (St = H(M, St.value, j)),
            St !== null &&
              ((R = s(St, R, rt)),
              gt === null ? (tt = St) : (gt.sibling = St),
              (gt = St));
        return pt && ln(M, rt), tt;
      }
      for (P = a(P); !St.done; rt++, St = x.next())
        (St = w(P, M, rt, St.value, j)),
          St !== null &&
            (t &&
              St.alternate !== null &&
              P.delete(St.key === null ? rt : St.key),
            (R = s(St, R, rt)),
            gt === null ? (tt = St) : (gt.sibling = St),
            (gt = St));
      return (
        t &&
          P.forEach(function (Sg) {
            return e(M, Sg);
          }),
        pt && ln(M, rt),
        tt
      );
    }
    function wt(M, R, x, j) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === O &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case z:
            t: {
              for (var tt = x.key; R !== null; ) {
                if (R.key === tt) {
                  if (((tt = x.type), tt === O)) {
                    if (R.tag === 7) {
                      n(M, R.sibling),
                        (j = c(R, x.props.children)),
                        (j.return = M),
                        (M = j);
                      break t;
                    }
                  } else if (
                    R.elementType === tt ||
                    (typeof tt == "object" &&
                      tt !== null &&
                      tt.$$typeof === Q &&
                      ha(tt) === R.type)
                  ) {
                    n(M, R.sibling),
                      (j = c(R, x.props)),
                      Gl(j, x),
                      (j.return = M),
                      (M = j);
                    break t;
                  }
                  n(M, R);
                  break;
                } else e(M, R);
                R = R.sibling;
              }
              x.type === O
                ? ((j = sa(x.props.children, M.mode, j, x.key)),
                  (j.return = M),
                  (M = j))
                : ((j = Ii(x.type, x.key, x.props, null, M.mode, j)),
                  Gl(j, x),
                  (j.return = M),
                  (M = j));
            }
            return f(M);
          case B:
            t: {
              for (tt = x.key; R !== null; ) {
                if (R.key === tt)
                  if (
                    R.tag === 4 &&
                    R.stateNode.containerInfo === x.containerInfo &&
                    R.stateNode.implementation === x.implementation
                  ) {
                    n(M, R.sibling),
                      (j = c(R, x.children || [])),
                      (j.return = M),
                      (M = j);
                    break t;
                  } else {
                    n(M, R);
                    break;
                  }
                else e(M, R);
                R = R.sibling;
              }
              (j = es(x, M.mode, j)), (j.return = M), (M = j);
            }
            return f(M);
          case Q:
            return (x = ha(x)), wt(M, R, x, j);
        }
        if (Ht(x)) return $(M, R, x, j);
        if (Mt(x)) {
          if (((tt = Mt(x)), typeof tt != "function")) throw Error(o(150));
          return (x = tt.call(x)), et(M, R, x, j);
        }
        if (typeof x.then == "function") return wt(M, R, uu(x), j);
        if (x.$$typeof === X) return wt(M, R, nu(M, x), j);
        cu(M, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          R !== null && R.tag === 6
            ? (n(M, R.sibling), (j = c(R, x)), (j.return = M), (M = j))
            : (n(M, R), (j = ts(x, M.mode, j)), (j.return = M), (M = j)),
          f(M))
        : n(M, R);
    }
    return function (M, R, x, j) {
      try {
        Yl = 0;
        var tt = wt(M, R, x, j);
        return (Pa = null), tt;
      } catch (P) {
        if (P === $a || P === lu) throw P;
        var gt = Te(29, P, null, M.mode);
        return (gt.lanes = j), (gt.return = M), gt;
      } finally {
      }
    };
  }
  var ya = Hf(!0),
    qf = Hf(!1),
    xn = !1;
  function hs(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ms(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Cn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Dn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (_t & 2) !== 0)) {
      var c = a.pending;
      return (
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
        (a.pending = e),
        (e = Pi(t)),
        Ef(t, null, n),
        e
      );
    }
    return $i(t, a, e, n), Pi(t);
  }
  function Xl(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), xr(t, n);
    }
  }
  function ys(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var c = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          s === null ? (c = s = f) : (s = s.next = f), (n = n.next);
        } while (n !== null);
        s === null ? (c = s = e) : (s = s.next = e);
      } else c = s = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var vs = !1;
  function Vl() {
    if (vs) {
      var t = Wa;
      if (t !== null) throw t;
    }
  }
  function Ql(t, e, n, a) {
    vs = !1;
    var c = t.updateQueue;
    xn = !1;
    var s = c.firstBaseUpdate,
      f = c.lastBaseUpdate,
      v = c.shared.pending;
    if (v !== null) {
      c.shared.pending = null;
      var E = v,
        C = E.next;
      (E.next = null), f === null ? (s = C) : (f.next = C), (f = E);
      var N = t.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (v = N.lastBaseUpdate),
        v !== f &&
          (v === null ? (N.firstBaseUpdate = C) : (v.next = C),
          (N.lastBaseUpdate = E)));
    }
    if (s !== null) {
      var H = c.baseState;
      (f = 0), (N = C = E = null), (v = s);
      do {
        var D = v.lane & -536870913,
          w = D !== v.lane;
        if (w ? (mt & D) === D : (a & D) === D) {
          D !== 0 && D === Fa && (vs = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var $ = t,
              et = v;
            D = e;
            var wt = n;
            switch (et.tag) {
              case 1:
                if ((($ = et.payload), typeof $ == "function")) {
                  H = $.call(wt, H, D);
                  break t;
                }
                H = $;
                break t;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = et.payload),
                  (D = typeof $ == "function" ? $.call(wt, H, D) : $),
                  D == null)
                )
                  break t;
                H = g({}, H, D);
                break t;
              case 2:
                xn = !0;
            }
          }
          (D = v.callback),
            D !== null &&
              ((t.flags |= 64),
              w && (t.flags |= 8192),
              (w = c.callbacks),
              w === null ? (c.callbacks = [D]) : w.push(D));
        } else
          (w = {
            lane: D,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            N === null ? ((C = N = w), (E = H)) : (N = N.next = w),
            (f |= D);
        if (((v = v.next), v === null)) {
          if (((v = c.shared.pending), v === null)) break;
          (w = v),
            (v = w.next),
            (w.next = null),
            (c.lastBaseUpdate = w),
            (c.shared.pending = null);
        }
      } while (!0);
      N === null && (E = H),
        (c.baseState = E),
        (c.firstBaseUpdate = C),
        (c.lastBaseUpdate = N),
        s === null && (c.shared.lanes = 0),
        (Bn |= f),
        (t.lanes = f),
        (t.memoizedState = H);
    }
  }
  function Yf(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Gf(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Yf(n[t], e);
  }
  var Ia = A(null),
    su = A(0);
  function Xf(t, e) {
    (t = vn), k(su, t), k(Ia, e), (vn = t | e.baseLanes);
  }
  function ps() {
    k(su, vn), k(Ia, Ia.current);
  }
  function gs() {
    (vn = su.current), q(Ia), q(su);
  }
  var Re = A(null),
    je = null;
  function wn(t) {
    var e = t.alternate;
    k(Vt, Vt.current & 1),
      k(Re, t),
      je === null &&
        (e === null || Ia.current !== null || e.memoizedState !== null) &&
        (je = t);
  }
  function Ss(t) {
    k(Vt, Vt.current), k(Re, t), je === null && (je = t);
  }
  function Vf(t) {
    t.tag === 22
      ? (k(Vt, Vt.current), k(Re, t), je === null && (je = t))
      : Un();
  }
  function Un() {
    k(Vt, Vt.current), k(Re, Re.current);
  }
  function Ae(t) {
    q(Re), je === t && (je = null), q(Vt);
  }
  var Vt = A(0);
  function ou(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Mo(n) || zo(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var sn = 0,
    st = null,
    Ct = null,
    kt = null,
    ru = !1,
    tl = !1,
    va = !1,
    fu = 0,
    Zl = 0,
    el = null,
    op = 0;
  function qt() {
    throw Error(o(321));
  }
  function bs(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ee(t[n], e[n])) return !1;
    return !0;
  }
  function _s(t, e, n, a, c, s) {
    return (
      (sn = s),
      (st = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (L.H = t === null || t.memoizedState === null ? Md : Bs),
      (va = !1),
      (s = n(a, c)),
      (va = !1),
      tl && (s = Zf(e, n, a, c)),
      Qf(t),
      s
    );
  }
  function Qf(t) {
    L.H = kl;
    var e = Ct !== null && Ct.next !== null;
    if (((sn = 0), (kt = Ct = st = null), (ru = !1), (Zl = 0), (el = null), e))
      throw Error(o(300));
    t === null ||
      Ft ||
      ((t = t.dependencies), t !== null && eu(t) && (Ft = !0));
  }
  function Zf(t, e, n, a) {
    st = t;
    var c = 0;
    do {
      if ((tl && (el = null), (Zl = 0), (tl = !1), 25 <= c))
        throw Error(o(301));
      if (((c += 1), (kt = Ct = null), t.updateQueue != null)) {
        var s = t.updateQueue;
        (s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0);
      }
      (L.H = zd), (s = e(n, a));
    } while (tl);
    return s;
  }
  function rp() {
    var t = L.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Kl(e) : e),
      (t = t.useState()[0]),
      (Ct !== null ? Ct.memoizedState : null) !== t && (st.flags |= 1024),
      e
    );
  }
  function Es() {
    var t = fu !== 0;
    return (fu = 0), t;
  }
  function Ts(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Rs(t) {
    if (ru) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      ru = !1;
    }
    (sn = 0), (kt = Ct = st = null), (tl = !1), (Zl = fu = 0), (el = null);
  }
  function oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return kt === null ? (st.memoizedState = kt = t) : (kt = kt.next = t), kt;
  }
  function Qt() {
    if (Ct === null) {
      var t = st.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ct.next;
    var e = kt === null ? st.memoizedState : kt.next;
    if (e !== null) (kt = e), (Ct = t);
    else {
      if (t === null)
        throw st.alternate === null ? Error(o(467)) : Error(o(310));
      (Ct = t),
        (t = {
          memoizedState: Ct.memoizedState,
          baseState: Ct.baseState,
          baseQueue: Ct.baseQueue,
          queue: Ct.queue,
          next: null,
        }),
        kt === null ? (st.memoizedState = kt = t) : (kt = kt.next = t);
    }
    return kt;
  }
  function du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Kl(t) {
    var e = Zl;
    return (
      (Zl += 1),
      el === null && (el = []),
      (t = Nf(el, t, e)),
      (e = st),
      (kt === null ? e.memoizedState : kt.next) === null &&
        ((e = e.alternate),
        (L.H = e === null || e.memoizedState === null ? Md : Bs)),
      t
    );
  }
  function hu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Kl(t);
      if (t.$$typeof === X) return le(t);
    }
    throw Error(o(438, String(t)));
  }
  function As(t) {
    var e = null,
      n = st.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = st.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = du()), (st.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = ft;
    return e.index++, n;
  }
  function on(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function mu(t) {
    var e = Qt();
    return Ms(e, Ct, t);
  }
  function Ms(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var c = t.baseQueue,
      s = a.pending;
    if (s !== null) {
      if (c !== null) {
        var f = c.next;
        (c.next = s.next), (s.next = f);
      }
      (e.baseQueue = c = s), (a.pending = null);
    }
    if (((s = t.baseState), c === null)) t.memoizedState = s;
    else {
      e = c.next;
      var v = (f = null),
        E = null,
        C = e,
        N = !1;
      do {
        var H = C.lane & -536870913;
        if (H !== C.lane ? (mt & H) === H : (sn & H) === H) {
          var D = C.revertLane;
          if (D === 0)
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              H === Fa && (N = !0);
          else if ((sn & D) === D) {
            (C = C.next), D === Fa && (N = !0);
            continue;
          } else
            (H = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              E === null ? ((v = E = H), (f = s)) : (E = E.next = H),
              (st.lanes |= D),
              (Bn |= D);
          (H = C.action),
            va && n(s, H),
            (s = C.hasEagerState ? C.eagerState : n(s, H));
        } else
          (D = {
            lane: H,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            E === null ? ((v = E = D), (f = s)) : (E = E.next = D),
            (st.lanes |= H),
            (Bn |= H);
        C = C.next;
      } while (C !== null && C !== e);
      if (
        (E === null ? (f = s) : (E.next = v),
        !Ee(s, t.memoizedState) && ((Ft = !0), N && ((n = Wa), n !== null)))
      )
        throw n;
      (t.memoizedState = s),
        (t.baseState = f),
        (t.baseQueue = E),
        (a.lastRenderedState = s);
    }
    return c === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function zs(t) {
    var e = Qt(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      c = n.pending,
      s = e.memoizedState;
    if (c !== null) {
      n.pending = null;
      var f = (c = c.next);
      do (s = t(s, f.action)), (f = f.next);
      while (f !== c);
      Ee(s, e.memoizedState) || (Ft = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, a];
  }
  function Kf(t, e, n) {
    var a = st,
      c = Qt(),
      s = pt;
    if (s) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !Ee((Ct || c).memoizedState, n);
    if (
      (f && ((c.memoizedState = n), (Ft = !0)),
      (c = c.queue),
      Cs(Ff.bind(null, a, c, t), [t]),
      c.getSnapshot !== e || f || (kt !== null && kt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        nl(9, { destroy: void 0 }, kf.bind(null, a, c, n, e), null),
        Ut === null)
      )
        throw Error(o(349));
      s || (sn & 127) !== 0 || Jf(a, e, n);
    }
    return n;
  }
  function Jf(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = st.updateQueue),
      e === null
        ? ((e = du()), (st.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function kf(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), Wf(e) && $f(t);
  }
  function Ff(t, e, n) {
    return n(function () {
      Wf(e) && $f(t);
    });
  }
  function Wf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ee(t, n);
    } catch {
      return !0;
    }
  }
  function $f(t) {
    var e = ca(t, 2);
    e !== null && ve(e, t, 2);
  }
  function Os(t) {
    var e = oe();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), va)) {
        En(!0);
        try {
          n();
        } finally {
          En(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: on,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Pf(t, e, n, a) {
    return (t.baseState = n), Ms(t, Ct, typeof a == "function" ? a : on);
  }
  function fp(t, e, n, a, c) {
    if (pu(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var s = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          s.listeners.push(f);
        },
      };
      L.T !== null ? n(!0) : (s.isTransition = !1),
        a(s),
        (n = e.pending),
        n === null
          ? ((s.next = e.pending = s), If(e, s))
          : ((s.next = n.next), (e.pending = n.next = s));
    }
  }
  function If(t, e) {
    var n = e.action,
      a = e.payload,
      c = t.state;
    if (e.isTransition) {
      var s = L.T,
        f = {};
      L.T = f;
      try {
        var v = n(c, a),
          E = L.S;
        E !== null && E(f, v), td(t, e, v);
      } catch (C) {
        xs(t, e, C);
      } finally {
        s !== null && f.types !== null && (s.types = f.types), (L.T = s);
      }
    } else
      try {
        (s = n(c, a)), td(t, e, s);
      } catch (C) {
        xs(t, e, C);
      }
  }
  function td(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            ed(t, e, a);
          },
          function (a) {
            return xs(t, e, a);
          },
        )
      : ed(t, e, n);
  }
  function ed(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      nd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), If(t, n)));
  }
  function xs(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), nd(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function nd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ad(t, e) {
    return e;
  }
  function ld(t, e) {
    if (pt) {
      var n = Ut.formState;
      if (n !== null) {
        t: {
          var a = st;
          if (pt) {
            if (Lt) {
              e: {
                for (var c = Lt, s = Be; c.nodeType !== 8; ) {
                  if (!s) {
                    c = null;
                    break e;
                  }
                  if (((c = He(c.nextSibling)), c === null)) {
                    c = null;
                    break e;
                  }
                }
                (s = c.data), (c = s === "F!" || s === "F" ? c : null);
              }
              if (c) {
                (Lt = He(c.nextSibling)), (a = c.data === "F!");
                break t;
              }
            }
            zn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = oe()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ad,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = Td.bind(null, st, a)),
      (a.dispatch = n),
      (a = Os(!1)),
      (s = Ns.bind(null, st, !1, a.queue)),
      (a = oe()),
      (c = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = c),
      (n = fp.bind(null, st, c, s, n)),
      (c.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function id(t) {
    var e = Qt();
    return ud(e, Ct, t);
  }
  function ud(t, e, n) {
    if (
      ((e = Ms(t, e, ad)[0]),
      (t = mu(on)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Kl(e);
      } catch (f) {
        throw f === $a ? lu : f;
      }
    else a = e;
    e = Qt();
    var c = e.queue,
      s = c.dispatch;
    return (
      n !== e.memoizedState &&
        ((st.flags |= 2048),
        nl(9, { destroy: void 0 }, dp.bind(null, c, n), null)),
      [a, s, t]
    );
  }
  function dp(t, e) {
    t.action = e;
  }
  function cd(t) {
    var e = Qt(),
      n = Ct;
    if (n !== null) return ud(e, n, t);
    Qt(), (e = e.memoizedState), (n = Qt());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function nl(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = st.updateQueue),
      e === null && ((e = du()), (st.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function sd() {
    return Qt().memoizedState;
  }
  function yu(t, e, n, a) {
    var c = oe();
    (st.flags |= t),
      (c.memoizedState = nl(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      ));
  }
  function vu(t, e, n, a) {
    var c = Qt();
    a = a === void 0 ? null : a;
    var s = c.memoizedState.inst;
    Ct !== null && a !== null && bs(a, Ct.memoizedState.deps)
      ? (c.memoizedState = nl(e, s, n, a))
      : ((st.flags |= t), (c.memoizedState = nl(1 | e, s, n, a)));
  }
  function od(t, e) {
    yu(8390656, 8, t, e);
  }
  function Cs(t, e) {
    vu(2048, 8, t, e);
  }
  function hp(t) {
    st.flags |= 4;
    var e = st.updateQueue;
    if (e === null) (e = du()), (st.updateQueue = e), (e.events = [t]);
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function rd(t) {
    var e = Qt().memoizedState;
    return (
      hp({ ref: e, nextImpl: t }),
      function () {
        if ((_t & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function fd(t, e) {
    return vu(4, 2, t, e);
  }
  function dd(t, e) {
    return vu(4, 4, t, e);
  }
  function hd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function md(t, e, n) {
    (n = n != null ? n.concat([t]) : null), vu(4, 4, hd.bind(null, e, t), n);
  }
  function Ds() {}
  function yd(t, e) {
    var n = Qt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && bs(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function vd(t, e) {
    var n = Qt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && bs(e, a[1])) return a[0];
    if (((a = t()), va)) {
      En(!0);
      try {
        t();
      } finally {
        En(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function ws(t, e, n) {
    return n === void 0 || ((sn & 1073741824) !== 0 && (mt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = ph()), (st.lanes |= t), (Bn |= t), n);
  }
  function pd(t, e, n, a) {
    return Ee(n, e)
      ? n
      : Ia.current !== null
        ? ((t = ws(t, n, a)), Ee(t, e) || (Ft = !0), t)
        : (sn & 42) === 0 || ((sn & 1073741824) !== 0 && (mt & 261930) === 0)
          ? ((Ft = !0), (t.memoizedState = n))
          : ((t = ph()), (st.lanes |= t), (Bn |= t), e);
  }
  function gd(t, e, n, a, c) {
    var s = K.p;
    K.p = s !== 0 && 8 > s ? s : 8;
    var f = L.T,
      v = {};
    (L.T = v), Ns(t, !1, e, n);
    try {
      var E = c(),
        C = L.S;
      if (
        (C !== null && C(v, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var N = sp(E, a);
        Jl(t, e, N, Oe(t));
      } else Jl(t, e, a, Oe(t));
    } catch (H) {
      Jl(t, e, { then: function () {}, status: "rejected", reason: H }, Oe());
    } finally {
      (K.p = s),
        f !== null && v.types !== null && (f.types = v.types),
        (L.T = f);
    }
  }
  function mp() {}
  function Us(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var c = Sd(t).queue;
    gd(
      t,
      c,
      e,
      lt,
      n === null
        ? mp
        : function () {
            return bd(t), n(a);
          },
    );
  }
  function Sd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: on,
        lastRenderedState: lt,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: on,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function bd(t) {
    var e = Sd(t);
    e.next === null && (e = t.alternate.memoizedState),
      Jl(t, e.next.queue, {}, Oe());
  }
  function Ls() {
    return le(ri);
  }
  function _d() {
    return Qt().memoizedState;
  }
  function Ed() {
    return Qt().memoizedState;
  }
  function yp(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Oe();
          t = Cn(n);
          var a = Dn(e, t, n);
          a !== null && (ve(a, e, n), Xl(a, e, n)),
            (e = { cache: os() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function vp(t, e, n) {
    var a = Oe();
    (n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      pu(t)
        ? Rd(e, n)
        : ((n = Pc(t, e, n, a)), n !== null && (ve(n, t, a), Ad(n, e, a)));
  }
  function Td(t, e, n) {
    var a = Oe();
    Jl(t, e, n, a);
  }
  function Jl(t, e, n, a) {
    var c = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (pu(t)) Rd(e, c);
    else {
      var s = t.alternate;
      if (
        t.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = e.lastRenderedReducer), s !== null)
      )
        try {
          var f = e.lastRenderedState,
            v = s(f, n);
          if (((c.hasEagerState = !0), (c.eagerState = v), Ee(v, f)))
            return $i(t, e, c, 0), Ut === null && Wi(), !1;
        } catch {
        } finally {
        }
      if (((n = Pc(t, e, c, a)), n !== null))
        return ve(n, t, a), Ad(n, e, a), !0;
    }
    return !1;
  }
  function Ns(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: mo(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      pu(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = Pc(t, n, a, 2)), e !== null && ve(e, t, 2);
  }
  function pu(t) {
    var e = t.alternate;
    return t === st || (e !== null && e === st);
  }
  function Rd(t, e) {
    tl = ru = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Ad(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), xr(t, n);
    }
  }
  var kl = {
    readContext: le,
    use: hu,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt,
  };
  kl.useEffectEvent = qt;
  var Md = {
      readContext: le,
      use: hu,
      useCallback: function (t, e) {
        return (oe().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: le,
      useEffect: od,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          yu(4194308, 4, hd.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return yu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        yu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = oe();
        e = e === void 0 ? null : e;
        var a = t();
        if (va) {
          En(!0);
          try {
            t();
          } finally {
            En(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = oe();
        if (n !== void 0) {
          var c = n(e);
          if (va) {
            En(!0);
            try {
              n(e);
            } finally {
              En(!1);
            }
          }
        } else c = e;
        return (
          (a.memoizedState = a.baseState = c),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: c,
          }),
          (a.queue = t),
          (t = t.dispatch = vp.bind(null, st, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = oe();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Os(t);
        var e = t.queue,
          n = Td.bind(null, st, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Ds,
      useDeferredValue: function (t, e) {
        var n = oe();
        return ws(n, t, e);
      },
      useTransition: function () {
        var t = Os(!1);
        return (
          (t = gd.bind(null, st, t.queue, !0, !1)),
          (oe().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = st,
          c = oe();
        if (pt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Ut === null)) throw Error(o(349));
          (mt & 127) !== 0 || Jf(a, e, n);
        }
        c.memoizedState = n;
        var s = { value: n, getSnapshot: e };
        return (
          (c.queue = s),
          od(Ff.bind(null, a, s, t), [t]),
          (a.flags |= 2048),
          nl(9, { destroy: void 0 }, kf.bind(null, a, s, n, e), null),
          n
        );
      },
      useId: function () {
        var t = oe(),
          e = Ut.identifierPrefix;
        if (pt) {
          var n = Je,
            a = Ke;
          (n = (a & ~(1 << (32 - _e(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = fu++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_");
        } else (n = op++), (e = "_" + e + "r_" + n.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ls,
      useFormState: ld,
      useActionState: ld,
      useOptimistic: function (t) {
        var e = oe();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Ns.bind(null, st, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: As,
      useCacheRefresh: function () {
        return (oe().memoizedState = yp.bind(null, st));
      },
      useEffectEvent: function (t) {
        var e = oe(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((_t & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Bs = {
      readContext: le,
      use: hu,
      useCallback: yd,
      useContext: le,
      useEffect: Cs,
      useImperativeHandle: md,
      useInsertionEffect: fd,
      useLayoutEffect: dd,
      useMemo: vd,
      useReducer: mu,
      useRef: sd,
      useState: function () {
        return mu(on);
      },
      useDebugValue: Ds,
      useDeferredValue: function (t, e) {
        var n = Qt();
        return pd(n, Ct.memoizedState, t, e);
      },
      useTransition: function () {
        var t = mu(on)[0],
          e = Qt().memoizedState;
        return [typeof t == "boolean" ? t : Kl(t), e];
      },
      useSyncExternalStore: Kf,
      useId: _d,
      useHostTransitionStatus: Ls,
      useFormState: id,
      useActionState: id,
      useOptimistic: function (t, e) {
        var n = Qt();
        return Pf(n, Ct, t, e);
      },
      useMemoCache: As,
      useCacheRefresh: Ed,
    };
  Bs.useEffectEvent = rd;
  var zd = {
    readContext: le,
    use: hu,
    useCallback: yd,
    useContext: le,
    useEffect: Cs,
    useImperativeHandle: md,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: vd,
    useReducer: zs,
    useRef: sd,
    useState: function () {
      return zs(on);
    },
    useDebugValue: Ds,
    useDeferredValue: function (t, e) {
      var n = Qt();
      return Ct === null ? ws(n, t, e) : pd(n, Ct.memoizedState, t, e);
    },
    useTransition: function () {
      var t = zs(on)[0],
        e = Qt().memoizedState;
      return [typeof t == "boolean" ? t : Kl(t), e];
    },
    useSyncExternalStore: Kf,
    useId: _d,
    useHostTransitionStatus: Ls,
    useFormState: cd,
    useActionState: cd,
    useOptimistic: function (t, e) {
      var n = Qt();
      return Ct !== null
        ? Pf(n, Ct, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: As,
    useCacheRefresh: Ed,
  };
  zd.useEffectEvent = rd;
  function js(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Hs = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Oe(),
        c = Cn(a);
      (c.payload = e),
        n != null && (c.callback = n),
        (e = Dn(t, c, a)),
        e !== null && (ve(e, t, a), Xl(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Oe(),
        c = Cn(a);
      (c.tag = 1),
        (c.payload = e),
        n != null && (c.callback = n),
        (e = Dn(t, c, a)),
        e !== null && (ve(e, t, a), Xl(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Oe(),
        a = Cn(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Dn(t, a, n)),
        e !== null && (ve(e, t, n), Xl(e, t, n));
    },
  };
  function Od(t, e, n, a, c, s, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, s, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ll(n, a) || !Ll(c, s)
          : !0
    );
  }
  function xd(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Hs.enqueueReplaceState(e, e.state, null);
  }
  function pa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var c in t) n[c] === void 0 && (n[c] = t[c]);
    }
    return n;
  }
  function Cd(t) {
    Fi(t);
  }
  function Dd(t) {
    console.error(t);
  }
  function wd(t) {
    Fi(t);
  }
  function gu(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ud(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function qs(t, e, n) {
    return (
      (n = Cn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        gu(t, e);
      }),
      n
    );
  }
  function Ld(t) {
    return (t = Cn(t)), (t.tag = 3), t;
  }
  function Nd(t, e, n, a) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var s = a.value;
      (t.payload = function () {
        return c(s);
      }),
        (t.callback = function () {
          Ud(e, n, a);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        Ud(e, n, a),
          typeof c != "function" &&
            (jn === null ? (jn = new Set([this])) : jn.add(this));
        var v = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function pp(t, e, n, a, c) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && ka(e, n, c, !0),
        (n = Re.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              je === null ? Cu() : n.alternate === null && Yt === 0 && (Yt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              a === iu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  ro(t, a, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === iu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  ro(t, a, c)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return ro(t, a, c), Cu(), !1;
    }
    if (pt)
      return (
        (e = Re.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = c),
            a !== ls && ((t = Error(o(422), { cause: a })), jl(Ue(t, n))))
          : (a !== ls && ((e = Error(o(423), { cause: a })), jl(Ue(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (c &= -c),
            (t.lanes |= c),
            (a = Ue(a, n)),
            (c = qs(t.stateNode, a, c)),
            ys(t, c),
            Yt !== 4 && (Yt = 2)),
        !1
      );
    var s = Error(o(520), { cause: a });
    if (
      ((s = Ue(s, n)),
      ni === null ? (ni = [s]) : ni.push(s),
      Yt !== 4 && (Yt = 2),
      e === null)
    )
      return !0;
    (a = Ue(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = c & -c),
            (n.lanes |= t),
            (t = qs(n.stateNode, a, t)),
            ys(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (s = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (jn === null || !jn.has(s)))))
          )
            return (
              (n.flags |= 65536),
              (c &= -c),
              (n.lanes |= c),
              (c = Ld(c)),
              Nd(c, t, n, a),
              ys(n, c),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ys = Error(o(461)),
    Ft = !1;
  function ie(t, e, n, a) {
    e.child = t === null ? qf(e, null, n, a) : ya(e, t.child, n, a);
  }
  function Bd(t, e, n, a, c) {
    n = n.render;
    var s = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var v in a) v !== "ref" && (f[v] = a[v]);
    } else f = a;
    return (
      fa(e),
      (a = _s(t, e, n, f, s, c)),
      (v = Es()),
      t !== null && !Ft
        ? (Ts(t, e, c), rn(t, e, c))
        : (pt && v && ns(e), (e.flags |= 1), ie(t, e, a, c), e.child)
    );
  }
  function jd(t, e, n, a, c) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Ic(s) &&
        s.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = s), Hd(t, e, s, a, c))
        : ((t = Ii(n.type, null, a, e, e.mode, c)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((s = t.child), !ks(t, c))) {
      var f = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ll), n(f, a) && t.ref === e.ref)
      )
        return rn(t, e, c);
    }
    return (
      (e.flags |= 1),
      (t = an(s, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hd(t, e, n, a, c) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Ll(s, a) && t.ref === e.ref)
        if (((Ft = !1), (e.pendingProps = a = s), ks(t, c)))
          (t.flags & 131072) !== 0 && (Ft = !0);
        else return (e.lanes = t.lanes), rn(t, e, c);
    }
    return Gs(t, e, n, a, c);
  }
  function qd(t, e, n, a) {
    var c = a.children,
      s = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((s = s !== null ? s.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, c = 0; a !== null; )
            (c = c | a.lanes | a.childLanes), (a = a.sibling);
          a = c & ~s;
        } else (a = 0), (e.child = null);
        return Yd(t, e, s, n, a);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && au(e, s !== null ? s.cachePool : null),
          s !== null ? Xf(e, s) : ps(),
          Vf(e);
      else
        return (
          (a = e.lanes = 536870912),
          Yd(t, e, s !== null ? s.baseLanes | n : n, n, a)
        );
    } else
      s !== null
        ? (au(e, s.cachePool), Xf(e, s), Un(), (e.memoizedState = null))
        : (t !== null && au(e, null), ps(), Un());
    return ie(t, e, c, n), e.child;
  }
  function Fl(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Yd(t, e, n, a, c) {
    var s = fs();
    return (
      (s = s === null ? null : { parent: Jt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && au(e, null),
      ps(),
      Vf(e),
      t !== null && ka(t, e, a, !0),
      (e.childLanes = c),
      null
    );
  }
  function Su(t, e) {
    return (
      (e = _u({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Gd(t, e, n) {
    return (
      ya(e, t.child, null, n),
      (t = Su(e, e.pendingProps)),
      (t.flags |= 2),
      Ae(e),
      (e.memoizedState = null),
      t
    );
  }
  function gp(t, e, n) {
    var a = e.pendingProps,
      c = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (pt) {
        if (a.mode === "hidden")
          return (t = Su(e, a)), (e.lanes = 536870912), Fl(null, t);
        if (
          (Ss(e),
          (t = Lt)
            ? ((t = Ih(t, Be)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: An !== null ? { id: Ke, overflow: Je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Rf(t)),
                (n.return = e),
                (e.child = n),
                (ae = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw zn(e);
        return (e.lanes = 536870912), null;
      }
      return Su(e, a);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var f = s.dehydrated;
      if ((Ss(e), c))
        if (e.flags & 256) (e.flags &= -257), (e = Gd(t, e, n));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(o(558));
      else if (
        (Ft || ka(t, e, n, !1), (c = (n & t.childLanes) !== 0), Ft || c)
      ) {
        if (
          ((a = Ut),
          a !== null && ((f = Cr(a, n)), f !== 0 && f !== s.retryLane))
        )
          throw ((s.retryLane = f), ca(t, f), ve(a, t, f), Ys);
        Cu(), (e = Gd(t, e, n));
      } else
        (t = s.treeContext),
          (Lt = He(f.nextSibling)),
          (ae = e),
          (pt = !0),
          (Mn = null),
          (Be = !1),
          t !== null && zf(e, t),
          (e = Su(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = an(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function bu(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Gs(t, e, n, a, c) {
    return (
      fa(e),
      (n = _s(t, e, n, a, void 0, c)),
      (a = Es()),
      t !== null && !Ft
        ? (Ts(t, e, c), rn(t, e, c))
        : (pt && a && ns(e), (e.flags |= 1), ie(t, e, n, c), e.child)
    );
  }
  function Xd(t, e, n, a, c, s) {
    return (
      fa(e),
      (e.updateQueue = null),
      (n = Zf(e, a, n, c)),
      Qf(t),
      (a = Es()),
      t !== null && !Ft
        ? (Ts(t, e, s), rn(t, e, s))
        : (pt && a && ns(e), (e.flags |= 1), ie(t, e, n, s), e.child)
    );
  }
  function Vd(t, e, n, a, c) {
    if ((fa(e), e.stateNode === null)) {
      var s = Qa,
        f = n.contextType;
      typeof f == "object" && f !== null && (s = le(f)),
        (s = new n(a, s)),
        (e.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Hs),
        (e.stateNode = s),
        (s._reactInternals = e),
        (s = e.stateNode),
        (s.props = a),
        (s.state = e.memoizedState),
        (s.refs = {}),
        hs(e),
        (f = n.contextType),
        (s.context = typeof f == "object" && f !== null ? le(f) : Qa),
        (s.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (js(e, n, f, a), (s.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((f = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          f !== s.state && Hs.enqueueReplaceState(s, s.state, null),
          Ql(e, a, s, c),
          Vl(),
          (s.state = e.memoizedState)),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      s = e.stateNode;
      var v = e.memoizedProps,
        E = pa(n, v);
      s.props = E;
      var C = s.context,
        N = n.contextType;
      (f = Qa), typeof N == "object" && N !== null && (f = le(N));
      var H = n.getDerivedStateFromProps;
      (N =
        typeof H == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        N ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((v || C !== f) && xd(e, s, a, f)),
        (xn = !1);
      var D = e.memoizedState;
      (s.state = D),
        Ql(e, a, s, c),
        Vl(),
        (C = e.memoizedState),
        v || D !== C || xn
          ? (typeof H == "function" && (js(e, n, H, a), (C = e.memoizedState)),
            (E = xn || Od(e, n, E, a, D, C, f))
              ? (N ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = C)),
            (s.props = a),
            (s.state = C),
            (s.context = f),
            (a = E))
          : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (s = e.stateNode),
        ms(t, e),
        (f = e.memoizedProps),
        (N = pa(n, f)),
        (s.props = N),
        (H = e.pendingProps),
        (D = s.context),
        (C = n.contextType),
        (E = Qa),
        typeof C == "object" && C !== null && (E = le(C)),
        (v = n.getDerivedStateFromProps),
        (C =
          typeof v == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((f !== H || D !== E) && xd(e, s, a, E)),
        (xn = !1),
        (D = e.memoizedState),
        (s.state = D),
        Ql(e, a, s, c),
        Vl();
      var w = e.memoizedState;
      f !== H ||
      D !== w ||
      xn ||
      (t !== null && t.dependencies !== null && eu(t.dependencies))
        ? (typeof v == "function" && (js(e, n, v, a), (w = e.memoizedState)),
          (N =
            xn ||
            Od(e, n, N, a, D, w, E) ||
            (t !== null && t.dependencies !== null && eu(t.dependencies)))
            ? (C ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(a, w, E),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(a, w, E)),
              typeof s.componentDidUpdate == "function" && (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (f === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = w)),
          (s.props = a),
          (s.state = w),
          (s.context = E),
          (a = N))
        : (typeof s.componentDidUpdate != "function" ||
            (f === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (s = a),
      bu(t, e),
      (a = (e.flags & 128) !== 0),
      s || a
        ? ((s = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ya(e, t.child, null, c)),
              (e.child = ya(e, null, n, c)))
            : ie(t, e, n, c),
          (e.memoizedState = s.state),
          (t = e.child))
        : (t = rn(t, e, c)),
      t
    );
  }
  function Qd(t, e, n, a) {
    return oa(), (e.flags |= 256), ie(t, e, n, a), e.child;
  }
  var Xs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Vs(t) {
    return { baseLanes: t, cachePool: Uf() };
  }
  function Qs(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= ze), t;
  }
  function Zd(t, e, n) {
    var a = e.pendingProps,
      c = !1,
      s = (e.flags & 128) !== 0,
      f;
    if (
      ((f = s) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (Vt.current & 2) !== 0),
      f && ((c = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (pt) {
        if (
          (c ? wn(e) : Un(),
          (t = Lt)
            ? ((t = Ih(t, Be)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: An !== null ? { id: Ke, overflow: Je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Rf(t)),
                (n.return = e),
                (e.child = n),
                (ae = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw zn(e);
        return zo(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var v = a.children;
      return (
        (a = a.fallback),
        c
          ? (Un(),
            (c = e.mode),
            (v = _u({ mode: "hidden", children: v }, c)),
            (a = sa(a, c, n, null)),
            (v.return = e),
            (a.return = e),
            (v.sibling = a),
            (e.child = v),
            (a = e.child),
            (a.memoizedState = Vs(n)),
            (a.childLanes = Qs(t, f, n)),
            (e.memoizedState = Xs),
            Fl(null, a))
          : (wn(e), Zs(e, v))
      );
    }
    var E = t.memoizedState;
    if (E !== null && ((v = E.dehydrated), v !== null)) {
      if (s)
        e.flags & 256
          ? (wn(e), (e.flags &= -257), (e = Ks(t, e, n)))
          : e.memoizedState !== null
            ? (Un(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Un(),
              (v = a.fallback),
              (c = e.mode),
              (a = _u({ mode: "visible", children: a.children }, c)),
              (v = sa(v, c, n, null)),
              (v.flags |= 2),
              (a.return = e),
              (v.return = e),
              (a.sibling = v),
              (e.child = a),
              ya(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = Vs(n)),
              (a.childLanes = Qs(t, f, n)),
              (e.memoizedState = Xs),
              (e = Fl(null, a)));
      else if ((wn(e), zo(v))) {
        if (((f = v.nextSibling && v.nextSibling.dataset), f)) var C = f.dgst;
        (f = C),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = f),
          jl({ value: a, source: null, stack: null }),
          (e = Ks(t, e, n));
      } else if (
        (Ft || ka(t, e, n, !1), (f = (n & t.childLanes) !== 0), Ft || f)
      ) {
        if (
          ((f = Ut),
          f !== null && ((a = Cr(f, n)), a !== 0 && a !== E.retryLane))
        )
          throw ((E.retryLane = a), ca(t, a), ve(f, t, a), Ys);
        Mo(v) || Cu(), (e = Ks(t, e, n));
      } else
        Mo(v)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = E.treeContext),
            (Lt = He(v.nextSibling)),
            (ae = e),
            (pt = !0),
            (Mn = null),
            (Be = !1),
            t !== null && zf(e, t),
            (e = Zs(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return c
      ? (Un(),
        (v = a.fallback),
        (c = e.mode),
        (E = t.child),
        (C = E.sibling),
        (a = an(E, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = E.subtreeFlags & 65011712),
        C !== null ? (v = an(C, v)) : ((v = sa(v, c, n, null)), (v.flags |= 2)),
        (v.return = e),
        (a.return = e),
        (a.sibling = v),
        (e.child = a),
        Fl(null, a),
        (a = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Vs(n))
          : ((c = v.cachePool),
            c !== null
              ? ((E = Jt._currentValue),
                (c = c.parent !== E ? { parent: E, pool: E } : c))
              : (c = Uf()),
            (v = { baseLanes: v.baseLanes | n, cachePool: c })),
        (a.memoizedState = v),
        (a.childLanes = Qs(t, f, n)),
        (e.memoizedState = Xs),
        Fl(t.child, a))
      : (wn(e),
        (n = t.child),
        (t = n.sibling),
        (n = an(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Zs(t, e) {
    return (
      (e = _u({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function _u(t, e) {
    return (t = Te(22, t, null, e)), (t.lanes = 0), t;
  }
  function Ks(t, e, n) {
    return (
      ya(e, t.child, null, n),
      (t = Zs(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Kd(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), cs(t.return, e, n);
  }
  function Js(t, e, n, a, c, s) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: c,
          treeForkCount: s,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = n),
        (f.tailMode = c),
        (f.treeForkCount = s));
  }
  function Jd(t, e, n) {
    var a = e.pendingProps,
      c = a.revealOrder,
      s = a.tail;
    a = a.children;
    var f = Vt.current,
      v = (f & 2) !== 0;
    if (
      (v ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      k(Vt, f),
      ie(t, e, a, n),
      (a = pt ? Bl : 0),
      !v && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Kd(t, n, e);
        else if (t.tag === 19) Kd(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (c) {
      case "forwards":
        for (n = e.child, c = null; n !== null; )
          (t = n.alternate),
            t !== null && ou(t) === null && (c = n),
            (n = n.sibling);
        (n = c),
          n === null
            ? ((c = e.child), (e.child = null))
            : ((c = n.sibling), (n.sibling = null)),
          Js(e, !1, c, n, s, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, c = e.child, e.child = null; c !== null; ) {
          if (((t = c.alternate), t !== null && ou(t) === null)) {
            e.child = c;
            break;
          }
          (t = c.sibling), (c.sibling = n), (n = c), (c = t);
        }
        Js(e, !0, n, null, s, a);
        break;
      case "together":
        Js(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function rn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Bn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ka(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = an(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        (t = t.sibling),
          (n = n.sibling = an(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function ks(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && eu(t)));
  }
  function Sp(t, e, n) {
    switch (e.tag) {
      case 3:
        Kt(e, e.stateNode.containerInfo),
          On(e, Jt, t.memoizedState.cache),
          oa();
        break;
      case 27:
      case 5:
        Pe(e);
        break;
      case 4:
        Kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        On(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), Ss(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (wn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Zd(t, e, n)
              : (wn(e), (t = rn(t, e, n)), t !== null ? t.sibling : null);
        wn(e);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (ka(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          c)
        ) {
          if (a) return Jd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((c = e.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          k(Vt, Vt.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), qd(t, e, n, e.pendingProps);
      case 24:
        On(e, Jt, t.memoizedState.cache);
    }
    return rn(t, e, n);
  }
  function kd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ft = !0;
      else {
        if (!ks(t, n) && (e.flags & 128) === 0) return (Ft = !1), Sp(t, e, n);
        Ft = (t.flags & 131072) !== 0;
      }
    else (Ft = !1), pt && (e.flags & 1048576) !== 0 && Mf(e, Bl, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = ha(e.elementType)), (e.type = t), typeof t == "function"))
            Ic(t)
              ? ((a = pa(t, a)), (e.tag = 1), (e = Vd(null, e, t, a, n)))
              : ((e.tag = 0), (e = Gs(null, e, t, a, n)));
          else {
            if (t != null) {
              var c = t.$$typeof;
              if (c === F) {
                (e.tag = 11), (e = Bd(null, e, t, a, n));
                break t;
              } else if (c === G) {
                (e.tag = 14), (e = jd(null, e, t, a, n));
                break t;
              }
            }
            throw ((e = Xt(t) || t), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return Gs(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (c = pa(a, e.pendingProps)), Vd(t, e, a, c, n);
      case 3:
        t: {
          if ((Kt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          a = e.pendingProps;
          var s = e.memoizedState;
          (c = s.element), ms(t, e), Ql(e, a, null, n);
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            On(e, Jt, a),
            a !== s.cache && ss(e, [Jt], n, !0),
            Vl(),
            (a = f.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = Qd(t, e, a, n);
              break t;
            } else if (a !== c) {
              (c = Ue(Error(o(424)), e)), jl(c), (e = Qd(t, e, a, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Lt = He(t.firstChild),
                  ae = e,
                  pt = !0,
                  Mn = null,
                  Be = !0,
                  n = qf(e, null, a, n),
                  e.child = n;
                n;
              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((oa(), a === c)) {
              e = rn(t, e, n);
              break t;
            }
            ie(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          bu(t, e),
          t === null
            ? (n = im(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : pt ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = ju(ut.current).createElement(n)),
                (a[ne] = e),
                (a[re] = t),
                ue(a, n, t),
                Pt(a),
                (e.stateNode = a))
            : (e.memoizedState = im(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Pe(e),
          t === null &&
            pt &&
            ((a = e.stateNode = nm(e.type, e.pendingProps, ut.current)),
            (ae = e),
            (Be = !0),
            (c = Lt),
            Gn(e.type) ? ((Oo = c), (Lt = He(a.firstChild))) : (Lt = c)),
          ie(t, e, e.pendingProps.children, n),
          bu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            pt &&
            ((c = a = Lt) &&
              ((a = Fp(a, e.type, e.pendingProps, Be)),
              a !== null
                ? ((e.stateNode = a),
                  (ae = e),
                  (Lt = He(a.firstChild)),
                  (Be = !1),
                  (c = !0))
                : (c = !1)),
            c || zn(e)),
          Pe(e),
          (c = e.type),
          (s = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (a = s.children),
          To(c, s) ? (a = null) : f !== null && To(c, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((c = _s(t, e, rp, null, null, n)), (ri._currentValue = c)),
          bu(t, e),
          ie(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            pt &&
            ((t = n = Lt) &&
              ((n = Wp(n, e.pendingProps, Be)),
              n !== null
                ? ((e.stateNode = n), (ae = e), (Lt = null), (t = !0))
                : (t = !1)),
            t || zn(e)),
          null
        );
      case 13:
        return Zd(t, e, n);
      case 4:
        return (
          Kt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = ya(e, null, a, n)) : ie(t, e, a, n),
          e.child
        );
      case 11:
        return Bd(t, e, e.type, e.pendingProps, n);
      case 7:
        return ie(t, e, e.pendingProps, n), e.child;
      case 8:
        return ie(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ie(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          On(e, e.type, a.value),
          ie(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (c = e.type._context),
          (a = e.pendingProps.children),
          fa(e),
          (c = le(c)),
          (a = a(c)),
          (e.flags |= 1),
          ie(t, e, a, n),
          e.child
        );
      case 14:
        return jd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Hd(t, e, e.type, e.pendingProps, n);
      case 19:
        return Jd(t, e, n);
      case 31:
        return gp(t, e, n);
      case 22:
        return qd(t, e, n, e.pendingProps);
      case 24:
        return (
          fa(e),
          (a = le(Jt)),
          t === null
            ? ((c = fs()),
              c === null &&
                ((c = Ut),
                (s = os()),
                (c.pooledCache = s),
                s.refCount++,
                s !== null && (c.pooledCacheLanes |= n),
                (c = s)),
              (e.memoizedState = { parent: a, cache: c }),
              hs(e),
              On(e, Jt, c))
            : ((t.lanes & n) !== 0 && (ms(t, e), Ql(e, null, null, n), Vl()),
              (c = t.memoizedState),
              (s = e.memoizedState),
              c.parent !== a
                ? ((c = { parent: a, cache: a }),
                  (e.memoizedState = c),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = c),
                  On(e, Jt, a))
                : ((a = s.cache),
                  On(e, Jt, a),
                  a !== c.cache && ss(e, [Jt], n, !0))),
          ie(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function fn(t) {
    t.flags |= 4;
  }
  function Fs(t, e, n, a, c) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (c & 335544128) === c))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (_h()) t.flags |= 8192;
        else throw ((ma = iu), ds);
    } else t.flags &= -16777217;
  }
  function Fd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !rm(e)))
      if (_h()) t.flags |= 8192;
      else throw ((ma = iu), ds);
  }
  function Eu(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? zr() : 536870912), (t.lanes |= e), (ul |= e));
  }
  function Wl(t, e) {
    if (!pt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Nt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var c = t.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (a |= c.subtreeFlags & 65011712),
          (a |= c.flags & 65011712),
          (c.return = t),
          (c = c.sibling);
    else
      for (c = t.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (a |= c.subtreeFlags),
          (a |= c.flags),
          (c.return = t),
          (c = c.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function bp(t, e, n) {
    var a = e.pendingProps;
    switch ((as(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nt(e), null;
      case 1:
        return Nt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          cn(Jt),
          Ot(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ja(e)
              ? fn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), is())),
          Nt(e),
          null
        );
      case 26:
        var c = e.type,
          s = e.memoizedState;
        return (
          t === null
            ? (fn(e),
              s !== null ? (Nt(e), Fd(e, s)) : (Nt(e), Fs(e, c, null, a, n)))
            : s
              ? s !== t.memoizedState
                ? (fn(e), Nt(e), Fd(e, s))
                : (Nt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && fn(e),
                Nt(e),
                Fs(e, c, t, a, n)),
          null
        );
      case 27:
        if (
          (Sn(e),
          (n = ut.current),
          (c = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && fn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return Nt(e), null;
          }
          (t = W.current),
            Ja(e) ? Of(e) : ((t = nm(c, a, n)), (e.stateNode = t), fn(e));
        }
        return Nt(e), null;
      case 5:
        if ((Sn(e), (c = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && fn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return Nt(e), null;
          }
          if (((s = W.current), Ja(e))) Of(e);
          else {
            var f = ju(ut.current);
            switch (s) {
              case 1:
                s = f.createElementNS("http://www.w3.org/2000/svg", c);
                break;
              case 2:
                s = f.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                break;
              default:
                switch (c) {
                  case "svg":
                    s = f.createElementNS("http://www.w3.org/2000/svg", c);
                    break;
                  case "math":
                    s = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c,
                    );
                    break;
                  case "script":
                    (s = f.createElement("div")),
                      (s.innerHTML = "<script><\/script>"),
                      (s = s.removeChild(s.firstChild));
                    break;
                  case "select":
                    (s =
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple
                        ? (s.multiple = !0)
                        : a.size && (s.size = a.size);
                    break;
                  default:
                    s =
                      typeof a.is == "string"
                        ? f.createElement(c, { is: a.is })
                        : f.createElement(c);
                }
            }
            (s[ne] = e), (s[re] = a);
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) s.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            e.stateNode = s;
            t: switch ((ue(s, c, a), c)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && fn(e);
          }
        }
        return (
          Nt(e),
          Fs(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && fn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = ut.current), Ja(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (c = ae),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  a = c.memoizedProps;
              }
            (t[ne] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Zh(t.nodeValue, n)
              )),
              t || zn(e, !0);
          } else (t = ju(t).createTextNode(a)), (t[ne] = e), (e.stateNode = t);
        }
        return Nt(e), null;
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = Ja(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(o(557));
              t[ne] = e;
            } else
              oa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Nt(e), (t = !1);
          } else
            (n = is()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0);
          if (!t) return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return Nt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((c = Ja(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!c) throw Error(o(318));
              if (
                ((c = e.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(o(317));
              c[ne] = e;
            } else
              oa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Nt(e), (c = !1);
          } else
            (c = is()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
        }
        return (
          Ae(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (c = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (c = a.alternate.memoizedState.cachePool.pool),
                (s = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (s = a.memoizedState.cachePool.pool),
                s !== c && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Eu(e, e.updateQueue),
              Nt(e),
              null)
        );
      case 4:
        return Ot(), t === null && go(e.stateNode.containerInfo), Nt(e), null;
      case 10:
        return cn(e.type), Nt(e), null;
      case 19:
        if ((q(Vt), (a = e.memoizedState), a === null)) return Nt(e), null;
        if (((c = (e.flags & 128) !== 0), (s = a.rendering), s === null))
          if (c) Wl(a, !1);
          else {
            if (Yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((s = ou(t)), s !== null)) {
                  for (
                    e.flags |= 128,
                      Wl(a, !1),
                      t = s.updateQueue,
                      e.updateQueue = t,
                      Eu(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    Tf(n, t), (n = n.sibling);
                  return (
                    k(Vt, (Vt.current & 1) | 2),
                    pt && ln(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              bt() > zu &&
              ((e.flags |= 128), (c = !0), Wl(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!c)
            if (((t = ou(s)), t !== null)) {
              if (
                ((e.flags |= 128),
                (c = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Eu(e, t),
                Wl(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !s.alternate &&
                  !pt)
              )
                return Nt(e), null;
            } else
              2 * bt() - a.renderingStartTime > zu &&
                n !== 536870912 &&
                ((e.flags |= 128), (c = !0), Wl(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((s.sibling = e.child), (e.child = s))
            : ((t = a.last),
              t !== null ? (t.sibling = s) : (e.child = s),
              (a.last = s));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = bt()),
            (t.sibling = null),
            (n = Vt.current),
            k(Vt, c ? (n & 1) | 2 : n & 1),
            pt && ln(e, a.treeForkCount),
            t)
          : (Nt(e), null);
      case 22:
      case 23:
        return (
          Ae(e),
          gs(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Nt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Nt(e),
          (n = e.updateQueue),
          n !== null && Eu(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && q(da),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          cn(Jt),
          Nt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function _p(t, e) {
    switch ((as(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          cn(Jt),
          Ot(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Sn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Ae(e), e.alternate === null)) throw Error(o(340));
          oa();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Ae(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          oa();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return q(Vt), null;
      case 4:
        return Ot(), null;
      case 10:
        return cn(e.type), null;
      case 22:
      case 23:
        return (
          Ae(e),
          gs(),
          t !== null && q(da),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return cn(Jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wd(t, e) {
    switch ((as(e), e.tag)) {
      case 3:
        cn(Jt), Ot();
        break;
      case 26:
      case 27:
      case 5:
        Sn(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && Ae(e);
        break;
      case 13:
        Ae(e);
        break;
      case 19:
        q(Vt);
        break;
      case 10:
        cn(e.type);
        break;
      case 22:
      case 23:
        Ae(e), gs(), t !== null && q(da);
        break;
      case 24:
        cn(Jt);
    }
  }
  function $l(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var c = a.next;
        n = c;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var s = n.create,
              f = n.inst;
            (a = s()), (f.destroy = a);
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (v) {
      At(e, e.return, v);
    }
  }
  function Ln(t, e, n) {
    try {
      var a = e.updateQueue,
        c = a !== null ? a.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        a = s;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
              v = f.destroy;
            if (v !== void 0) {
              (f.destroy = void 0), (c = e);
              var E = n,
                C = v;
              try {
                C();
              } catch (N) {
                At(c, E, N);
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (N) {
      At(e, e.return, N);
    }
  }
  function $d(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Gf(e, n);
      } catch (a) {
        At(t, t.return, a);
      }
    }
  }
  function Pd(t, e, n) {
    (n.props = pa(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      At(t, e, a);
    }
  }
  function Pl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (c) {
      At(t, e, c);
    }
  }
  function ke(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (c) {
          At(t, e, c);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (c) {
          At(t, e, c);
        }
      else n.current = null;
  }
  function Id(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (c) {
      At(t, t.return, c);
    }
  }
  function Ws(t, e, n) {
    try {
      var a = t.stateNode;
      Vp(a, t.type, n, e), (a[re] = e);
    } catch (c) {
      At(t, t.return, c);
    }
  }
  function th(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Gn(t.type)) ||
      t.tag === 4
    );
  }
  function $s(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || th(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Gn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ps(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = en));
    else if (
      a !== 4 &&
      (a === 27 && Gn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Ps(t, e, n), t = t.sibling; t !== null; )
        Ps(t, e, n), (t = t.sibling);
  }
  function Tu(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Gn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Tu(t, e, n), t = t.sibling; t !== null; )
        Tu(t, e, n), (t = t.sibling);
  }
  function eh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, c = e.attributes; c.length; )
        e.removeAttributeNode(c[0]);
      ue(e, a, n), (e[ne] = t), (e[re] = n);
    } catch (s) {
      At(t, t.return, s);
    }
  }
  var dn = !1,
    Wt = !1,
    Is = !1,
    nh = typeof WeakSet == "function" ? WeakSet : Set,
    It = null;
  function Ep(t, e) {
    if (((t = t.containerInfo), (_o = Qu), (t = mf(t)), Kc(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var c = a.anchorOffset,
              s = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              v = -1,
              E = -1,
              C = 0,
              N = 0,
              H = t,
              D = null;
            e: for (;;) {
              for (
                var w;
                H !== n || (c !== 0 && H.nodeType !== 3) || (v = f + c),
                  H !== s || (a !== 0 && H.nodeType !== 3) || (E = f + a),
                  H.nodeType === 3 && (f += H.nodeValue.length),
                  (w = H.firstChild) !== null;
              )
                (D = H), (H = w);
              for (;;) {
                if (H === t) break e;
                if (
                  (D === n && ++C === c && (v = f),
                  D === s && ++N === a && (E = f),
                  (w = H.nextSibling) !== null)
                )
                  break;
                (H = D), (D = H.parentNode);
              }
              H = w;
            }
            n = v === -1 || E === -1 ? null : { start: v, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Eo = { focusedElem: t, selectionRange: n }, Qu = !1, It = e;
      It !== null;
    )
      if (
        ((e = It), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (It = t);
      else
        for (; It !== null; ) {
          switch (((e = It), (s = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  (c = t[n]), (c.ref.impl = c.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && s !== null) {
                (t = void 0),
                  (n = e),
                  (c = s.memoizedProps),
                  (s = s.memoizedState),
                  (a = n.stateNode);
                try {
                  var $ = pa(n.type, c);
                  (t = a.getSnapshotBeforeUpdate($, s)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (et) {
                  At(n, n.return, et);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Ao(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ao(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (It = t);
            break;
          }
          It = e.return;
        }
  }
  function ah(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        mn(t, n), a & 4 && $l(5, n);
        break;
      case 1:
        if ((mn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              At(n, n.return, f);
            }
          else {
            var c = pa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(c, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              At(n, n.return, f);
            }
          }
        a & 64 && $d(n), a & 512 && Pl(n, n.return);
        break;
      case 3:
        if ((mn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Gf(t, e);
          } catch (f) {
            At(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && eh(n);
      case 26:
      case 5:
        mn(t, n), e === null && a & 4 && Id(n), a & 512 && Pl(n, n.return);
        break;
      case 12:
        mn(t, n);
        break;
      case 31:
        mn(t, n), a & 4 && uh(t, n);
        break;
      case 13:
        mn(t, n),
          a & 4 && ch(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Dp.bind(null, n)), $p(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || dn), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Wt), (c = dn);
          var s = Wt;
          (dn = a),
            (Wt = e) && !s ? yn(t, n, (n.subtreeFlags & 8772) !== 0) : mn(t, n),
            (dn = c),
            (Wt = s);
        }
        break;
      case 30:
        break;
      default:
        mn(t, n);
    }
  }
  function lh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), lh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && xc(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var jt = null,
    de = !1;
  function hn(t, e, n) {
    for (n = n.child; n !== null; ) ih(t, e, n), (n = n.sibling);
  }
  function ih(t, e, n) {
    if (be && typeof be.onCommitFiberUnmount == "function")
      try {
        be.onCommitFiberUnmount(El, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Wt || ke(n, e),
          hn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Wt || ke(n, e);
        var a = jt,
          c = de;
        Gn(n.type) && ((jt = n.stateNode), (de = !1)),
          hn(t, e, n),
          ci(n.stateNode),
          (jt = a),
          (de = c);
        break;
      case 5:
        Wt || ke(n, e);
      case 6:
        if (
          ((a = jt),
          (c = de),
          (jt = null),
          hn(t, e, n),
          (jt = a),
          (de = c),
          jt !== null)
        )
          if (de)
            try {
              (jt.nodeType === 9
                ? jt.body
                : jt.nodeName === "HTML"
                  ? jt.ownerDocument.body
                  : jt
              ).removeChild(n.stateNode);
            } catch (s) {
              At(n, e, s);
            }
          else
            try {
              jt.removeChild(n.stateNode);
            } catch (s) {
              At(n, e, s);
            }
        break;
      case 18:
        jt !== null &&
          (de
            ? ((t = jt),
              $h(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              ml(t))
            : $h(jt, n.stateNode));
        break;
      case 4:
        (a = jt),
          (c = de),
          (jt = n.stateNode.containerInfo),
          (de = !0),
          hn(t, e, n),
          (jt = a),
          (de = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ln(2, n, e), Wt || Ln(4, n, e), hn(t, e, n);
        break;
      case 1:
        Wt ||
          (ke(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Pd(n, e, a)),
          hn(t, e, n);
        break;
      case 21:
        hn(t, e, n);
        break;
      case 22:
        (Wt = (a = Wt) || n.memoizedState !== null), hn(t, e, n), (Wt = a);
        break;
      default:
        hn(t, e, n);
    }
  }
  function uh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ml(t);
      } catch (n) {
        At(e, e.return, n);
      }
    }
  }
  function ch(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ml(t);
      } catch (n) {
        At(e, e.return, n);
      }
  }
  function Tp(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new nh()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new nh()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Ru(t, e) {
    var n = Tp(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var c = wp.bind(null, t, a);
        a.then(c, c);
      }
    });
  }
  function he(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var c = n[a],
          s = t,
          f = e,
          v = f;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Gn(v.type)) {
                (jt = v.stateNode), (de = !1);
                break t;
              }
              break;
            case 5:
              (jt = v.stateNode), (de = !1);
              break t;
            case 3:
            case 4:
              (jt = v.stateNode.containerInfo), (de = !0);
              break t;
          }
          v = v.return;
        }
        if (jt === null) throw Error(o(160));
        ih(s, f, c),
          (jt = null),
          (de = !1),
          (s = c.alternate),
          s !== null && (s.return = null),
          (c.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) sh(e, t), (e = e.sibling);
  }
  var Ve = null;
  function sh(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        he(e, t),
          me(t),
          a & 4 && (Ln(3, t, t.return), $l(3, t), Ln(5, t, t.return));
        break;
      case 1:
        he(e, t),
          me(t),
          a & 512 && (Wt || n === null || ke(n, n.return)),
          a & 64 &&
            dn &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var c = Ve;
        if (
          (he(e, t),
          me(t),
          a & 512 && (Wt || n === null || ke(n, n.return)),
          a & 4)
        ) {
          var s = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (c = c.ownerDocument || c);
                  e: switch (a) {
                    case "title":
                      (s = c.getElementsByTagName("title")[0]),
                        (!s ||
                          s[Al] ||
                          s[ne] ||
                          s.namespaceURI === "http://www.w3.org/2000/svg" ||
                          s.hasAttribute("itemprop")) &&
                          ((s = c.createElement(a)),
                          c.head.insertBefore(
                            s,
                            c.querySelector("head > title"),
                          )),
                        ue(s, a, n),
                        (s[ne] = t),
                        Pt(s),
                        (a = s);
                      break t;
                    case "link":
                      var f = sm("link", "href", c).get(a + (n.href || ""));
                      if (f) {
                        for (var v = 0; v < f.length; v++)
                          if (
                            ((s = f[v]),
                            s.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              s.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              s.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              s.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(v, 1);
                            break e;
                          }
                      }
                      (s = c.createElement(a)),
                        ue(s, a, n),
                        c.head.appendChild(s);
                      break;
                    case "meta":
                      if (
                        (f = sm("meta", "content", c).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (v = 0; v < f.length; v++)
                          if (
                            ((s = f[v]),
                            s.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              s.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              s.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              s.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              s.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(v, 1);
                            break e;
                          }
                      }
                      (s = c.createElement(a)),
                        ue(s, a, n),
                        c.head.appendChild(s);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (s[ne] = t), Pt(s), (a = s);
                }
                t.stateNode = a;
              } else om(c, t.type, t.stateNode);
            else t.stateNode = cm(c, a, t.memoizedProps);
          else
            s !== a
              ? (s === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : s.count--,
                a === null
                  ? om(c, t.type, t.stateNode)
                  : cm(c, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Ws(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        he(e, t),
          me(t),
          a & 512 && (Wt || n === null || ke(n, n.return)),
          n !== null && a & 4 && Ws(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (he(e, t),
          me(t),
          a & 512 && (Wt || n === null || ke(n, n.return)),
          t.flags & 32)
        ) {
          c = t.stateNode;
          try {
            ja(c, "");
          } catch ($) {
            At(t, t.return, $);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((c = t.memoizedProps), Ws(t, c, n !== null ? n.memoizedProps : c)),
          a & 1024 && (Is = !0);
        break;
      case 6:
        if ((he(e, t), me(t), a & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch ($) {
            At(t, t.return, $);
          }
        }
        break;
      case 3:
        if (
          ((Yu = null),
          (c = Ve),
          (Ve = Hu(e.containerInfo)),
          he(e, t),
          (Ve = c),
          me(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ml(e.containerInfo);
          } catch ($) {
            At(t, t.return, $);
          }
        Is && ((Is = !1), oh(t));
        break;
      case 4:
        (a = Ve),
          (Ve = Hu(t.stateNode.containerInfo)),
          he(e, t),
          me(t),
          (Ve = a);
        break;
      case 12:
        he(e, t), me(t);
        break;
      case 31:
        he(e, t),
          me(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ru(t, a)));
        break;
      case 13:
        he(e, t),
          me(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Mu = bt()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ru(t, a)));
        break;
      case 22:
        c = t.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          C = dn,
          N = Wt;
        if (
          ((dn = C || c),
          (Wt = N || E),
          he(e, t),
          (Wt = N),
          (dn = C),
          me(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = c ? e._visibility & -2 : e._visibility | 1,
              c && (n === null || E || dn || Wt || ga(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                E = n = e;
                try {
                  if (((s = E.stateNode), c))
                    (f = s.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    v = E.stateNode;
                    var H = E.memoizedProps.style,
                      D =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    v.style.display =
                      D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch ($) {
                  At(E, E.return, $);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = c ? "" : E.memoizedProps;
                } catch ($) {
                  At(E, E.return, $);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                E = e;
                try {
                  var w = E.stateNode;
                  c ? Ph(w, !0) : Ph(E.stateNode, !1);
                } catch ($) {
                  At(E, E.return, $);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), Ru(t, n))));
        break;
      case 19:
        he(e, t),
          me(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ru(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        he(e, t), me(t);
    }
  }
  function me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (th(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var c = n.stateNode,
              s = $s(t);
            Tu(t, s, c);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (ja(f, ""), (n.flags &= -33));
            var v = $s(t);
            Tu(t, v, f);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              C = $s(t);
            Ps(t, C, E);
            break;
          default:
            throw Error(o(161));
        }
      } catch (N) {
        At(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function oh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        oh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function mn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) ah(t, e.alternate, e), (e = e.sibling);
  }
  function ga(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ln(4, e, e.return), ga(e);
          break;
        case 1:
          ke(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Pd(e, e.return, n),
            ga(e);
          break;
        case 27:
          ci(e.stateNode);
        case 26:
        case 5:
          ke(e, e.return), ga(e);
          break;
        case 22:
          e.memoizedState === null && ga(e);
          break;
        case 30:
          ga(e);
          break;
        default:
          ga(e);
      }
      t = t.sibling;
    }
  }
  function yn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        c = t,
        s = e,
        f = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          yn(c, s, n), $l(4, s);
          break;
        case 1:
          if (
            (yn(c, s, n),
            (a = s),
            (c = a.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (C) {
              At(a, a.return, C);
            }
          if (((a = s), (c = a.updateQueue), c !== null)) {
            var v = a.stateNode;
            try {
              var E = c.shared.hiddenCallbacks;
              if (E !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < E.length; c++)
                  Yf(E[c], v);
            } catch (C) {
              At(a, a.return, C);
            }
          }
          n && f & 64 && $d(s), Pl(s, s.return);
          break;
        case 27:
          eh(s);
        case 26:
        case 5:
          yn(c, s, n), n && a === null && f & 4 && Id(s), Pl(s, s.return);
          break;
        case 12:
          yn(c, s, n);
          break;
        case 31:
          yn(c, s, n), n && f & 4 && uh(c, s);
          break;
        case 13:
          yn(c, s, n), n && f & 4 && ch(c, s);
          break;
        case 22:
          s.memoizedState === null && yn(c, s, n), Pl(s, s.return);
          break;
        case 30:
          break;
        default:
          yn(c, s, n);
      }
      e = e.sibling;
    }
  }
  function to(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Hl(n));
  }
  function eo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Hl(t));
  }
  function Qe(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) rh(t, e, n, a), (e = e.sibling);
  }
  function rh(t, e, n, a) {
    var c = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qe(t, e, n, a), c & 2048 && $l(9, e);
        break;
      case 1:
        Qe(t, e, n, a);
        break;
      case 3:
        Qe(t, e, n, a),
          c & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Hl(t)));
        break;
      case 12:
        if (c & 2048) {
          Qe(t, e, n, a), (t = e.stateNode);
          try {
            var s = e.memoizedProps,
              f = s.id,
              v = s.onPostCommit;
            typeof v == "function" &&
              v(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (E) {
            At(e, e.return, E);
          }
        } else Qe(t, e, n, a);
        break;
      case 31:
        Qe(t, e, n, a);
        break;
      case 13:
        Qe(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (s = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? s._visibility & 2
              ? Qe(t, e, n, a)
              : Il(t, e)
            : s._visibility & 2
              ? Qe(t, e, n, a)
              : ((s._visibility |= 2),
                al(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          c & 2048 && to(f, e);
        break;
      case 24:
        Qe(t, e, n, a), c & 2048 && eo(e.alternate, e);
        break;
      default:
        Qe(t, e, n, a);
    }
  }
  function al(t, e, n, a, c) {
    for (
      c = c && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var s = t,
        f = e,
        v = n,
        E = a,
        C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          al(s, f, v, E, c), $l(8, f);
          break;
        case 23:
          break;
        case 22:
          var N = f.stateNode;
          f.memoizedState !== null
            ? N._visibility & 2
              ? al(s, f, v, E, c)
              : Il(s, f)
            : ((N._visibility |= 2), al(s, f, v, E, c)),
            c && C & 2048 && to(f.alternate, f);
          break;
        case 24:
          al(s, f, v, E, c), c && C & 2048 && eo(f.alternate, f);
          break;
        default:
          al(s, f, v, E, c);
      }
      e = e.sibling;
    }
  }
  function Il(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          c = a.flags;
        switch (a.tag) {
          case 22:
            Il(n, a), c & 2048 && to(a.alternate, a);
            break;
          case 24:
            Il(n, a), c & 2048 && eo(a.alternate, a);
            break;
          default:
            Il(n, a);
        }
        e = e.sibling;
      }
  }
  var ti = 8192;
  function ll(t, e, n) {
    if (t.subtreeFlags & ti)
      for (t = t.child; t !== null; ) fh(t, e, n), (t = t.sibling);
  }
  function fh(t, e, n) {
    switch (t.tag) {
      case 26:
        ll(t, e, n),
          t.flags & ti &&
            t.memoizedState !== null &&
            og(n, Ve, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ll(t, e, n);
        break;
      case 3:
      case 4:
        var a = Ve;
        (Ve = Hu(t.stateNode.containerInfo)), ll(t, e, n), (Ve = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ti), (ti = 16777216), ll(t, e, n), (ti = a))
            : ll(t, e, n));
        break;
      default:
        ll(t, e, n);
    }
  }
  function dh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function ei(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (It = a), mh(a, t);
        }
      dh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) hh(t), (t = t.sibling);
  }
  function hh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ei(t), t.flags & 2048 && Ln(9, t, t.return);
        break;
      case 3:
        ei(t);
        break;
      case 12:
        ei(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Au(t))
          : ei(t);
        break;
      default:
        ei(t);
    }
  }
  function Au(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (It = a), mh(a, t);
        }
      dh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Ln(8, e, e.return), Au(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Au(e));
          break;
        default:
          Au(e);
      }
      t = t.sibling;
    }
  }
  function mh(t, e) {
    for (; It !== null; ) {
      var n = It;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Hl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (It = a);
      else
        t: for (n = t; It !== null; ) {
          a = It;
          var c = a.sibling,
            s = a.return;
          if ((lh(a), a === n)) {
            It = null;
            break t;
          }
          if (c !== null) {
            (c.return = s), (It = c);
            break t;
          }
          It = s;
        }
    }
  }
  var Rp = {
      getCacheForType: function (t) {
        var e = le(Jt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
      cacheSignal: function () {
        return le(Jt).controller.signal;
      },
    },
    Ap = typeof WeakMap == "function" ? WeakMap : Map,
    _t = 0,
    Ut = null,
    dt = null,
    mt = 0,
    Rt = 0,
    Me = null,
    Nn = !1,
    il = !1,
    no = !1,
    vn = 0,
    Yt = 0,
    Bn = 0,
    Sa = 0,
    ao = 0,
    ze = 0,
    ul = 0,
    ni = null,
    ye = null,
    lo = !1,
    Mu = 0,
    yh = 0,
    zu = 1 / 0,
    Ou = null,
    jn = null,
    $t = 0,
    Hn = null,
    cl = null,
    pn = 0,
    io = 0,
    uo = null,
    vh = null,
    ai = 0,
    co = null;
  function Oe() {
    return (_t & 2) !== 0 && mt !== 0 ? mt & -mt : L.T !== null ? mo() : Dr();
  }
  function ph() {
    if (ze === 0)
      if ((mt & 536870912) === 0 || pt) {
        var t = Bi;
        (Bi <<= 1), (Bi & 3932160) === 0 && (Bi = 262144), (ze = t);
      } else ze = 536870912;
    return (t = Re.current), t !== null && (t.flags |= 32), ze;
  }
  function ve(t, e, n) {
    ((t === Ut && (Rt === 2 || Rt === 9)) || t.cancelPendingCommit !== null) &&
      (sl(t, 0), qn(t, mt, ze, !1)),
      Rl(t, n),
      ((_t & 2) === 0 || t !== Ut) &&
        (t === Ut &&
          ((_t & 2) === 0 && (Sa |= n), Yt === 4 && qn(t, mt, ze, !1)),
        Fe(t));
  }
  function gh(t, e, n) {
    if ((_t & 6) !== 0) throw Error(o(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Tl(t, e),
      c = a ? Op(t, e) : oo(t, e, !0),
      s = a;
    do {
      if (c === 0) {
        il && !a && qn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), s && !Mp(n))) {
          (c = oo(t, e, !1)), (s = !1);
          continue;
        }
        if (c === 2) {
          if (((s = e), t.errorRecoveryDisabledLanes & s)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var v = t;
              c = ni;
              var E = v.current.memoizedState.isDehydrated;
              if ((E && (sl(v, f).flags |= 256), (f = oo(v, f, !1)), f !== 2)) {
                if (no && !E) {
                  (v.errorRecoveryDisabledLanes |= s), (Sa |= s), (c = 4);
                  break t;
                }
                (s = ye),
                  (ye = c),
                  s !== null && (ye === null ? (ye = s) : ye.push.apply(ye, s));
              }
              c = f;
            }
            if (((s = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          sl(t, 0), qn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (s = c), s)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              qn(a, e, ze, !Nn);
              break t;
            case 2:
              ye = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((c = Mu + 300 - bt()), 10 < c)) {
            if ((qn(a, e, ze, !Nn), Hi(a, 0, !0) !== 0)) break t;
            (pn = e),
              (a.timeoutHandle = Fh(
                Sh.bind(
                  null,
                  a,
                  n,
                  ye,
                  Ou,
                  lo,
                  e,
                  ze,
                  Sa,
                  ul,
                  Nn,
                  s,
                  "Throttled",
                  -0,
                  0,
                ),
                c,
              ));
            break t;
          }
          Sh(a, n, ye, Ou, lo, e, ze, Sa, ul, Nn, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Fe(t);
  }
  function Sh(t, e, n, a, c, s, f, v, E, C, N, H, D, w) {
    if (
      ((t.timeoutHandle = -1),
      (H = e.subtreeFlags),
      H & 8192 || (H & 16785408) === 16785408)
    ) {
      (H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: en,
      }),
        fh(e, s, H);
      var $ =
        (s & 62914560) === s ? Mu - bt() : (s & 4194048) === s ? yh - bt() : 0;
      if ((($ = rg(H, $)), $ !== null)) {
        (pn = s),
          (t.cancelPendingCommit = $(
            zh.bind(null, t, e, s, n, a, c, f, v, E, N, H, null, D, w),
          )),
          qn(t, s, f, !C);
        return;
      }
    }
    zh(t, e, s, n, a, c, f, v, E);
  }
  function Mp(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var c = n[a],
            s = c.getSnapshot;
          c = c.value;
          try {
            if (!Ee(s(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function qn(t, e, n, a) {
    (e &= ~ao),
      (e &= ~Sa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var c = e; 0 < c; ) {
      var s = 31 - _e(c),
        f = 1 << s;
      (a[s] = -1), (c &= ~f);
    }
    n !== 0 && Or(t, n, e);
  }
  function xu() {
    return (_t & 6) === 0 ? (li(0), !1) : !0;
  }
  function so() {
    if (dt !== null) {
      if (Rt === 0) var t = dt.return;
      else (t = dt), (un = ra = null), Rs(t), (Pa = null), (Yl = 0), (t = dt);
      for (; t !== null; ) Wd(t.alternate, t), (t = t.return);
      dt = null;
    }
  }
  function sl(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), Kp(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (pn = 0),
      so(),
      (Ut = t),
      (dt = n = an(t.current, null)),
      (mt = e),
      (Rt = 0),
      (Me = null),
      (Nn = !1),
      (il = Tl(t, e)),
      (no = !1),
      (ul = ze = ao = Sa = Bn = Yt = 0),
      (ye = ni = null),
      (lo = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var c = 31 - _e(a),
          s = 1 << c;
        (e |= t[c]), (a &= ~s);
      }
    return (vn = e), Wi(), n;
  }
  function bh(t, e) {
    (st = null),
      (L.H = kl),
      e === $a || e === lu
        ? ((e = Bf()), (Rt = 3))
        : e === ds
          ? ((e = Bf()), (Rt = 4))
          : (Rt =
              e === Ys
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Me = e),
      dt === null && ((Yt = 1), gu(t, Ue(e, t.current)));
  }
  function _h() {
    var t = Re.current;
    return t === null
      ? !0
      : (mt & 4194048) === mt
        ? je === null
        : (mt & 62914560) === mt || (mt & 536870912) !== 0
          ? t === je
          : !1;
  }
  function Eh() {
    var t = L.H;
    return (L.H = kl), t === null ? kl : t;
  }
  function Th() {
    var t = L.A;
    return (L.A = Rp), t;
  }
  function Cu() {
    (Yt = 4),
      Nn || ((mt & 4194048) !== mt && Re.current !== null) || (il = !0),
      ((Bn & 134217727) === 0 && (Sa & 134217727) === 0) ||
        Ut === null ||
        qn(Ut, mt, ze, !1);
  }
  function oo(t, e, n) {
    var a = _t;
    _t |= 2;
    var c = Eh(),
      s = Th();
    (Ut !== t || mt !== e) && ((Ou = null), sl(t, e)), (e = !1);
    var f = Yt;
    t: do
      try {
        if (Rt !== 0 && dt !== null) {
          var v = dt,
            E = Me;
          switch (Rt) {
            case 8:
              so(), (f = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Re.current === null && (e = !0);
              var C = Rt;
              if (((Rt = 0), (Me = null), ol(t, v, E, C), n && il)) {
                f = 0;
                break t;
              }
              break;
            default:
              (C = Rt), (Rt = 0), (Me = null), ol(t, v, E, C);
          }
        }
        zp(), (f = Yt);
        break;
      } catch (N) {
        bh(t, N);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (un = ra = null),
      (_t = a),
      (L.H = c),
      (L.A = s),
      dt === null && ((Ut = null), (mt = 0), Wi()),
      f
    );
  }
  function zp() {
    for (; dt !== null; ) Rh(dt);
  }
  function Op(t, e) {
    var n = _t;
    _t |= 2;
    var a = Eh(),
      c = Th();
    Ut !== t || mt !== e
      ? ((Ou = null), (zu = bt() + 500), sl(t, e))
      : (il = Tl(t, e));
    t: do
      try {
        if (Rt !== 0 && dt !== null) {
          e = dt;
          var s = Me;
          e: switch (Rt) {
            case 1:
              (Rt = 0), (Me = null), ol(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (Lf(s)) {
                (Rt = 0), (Me = null), Ah(e);
                break;
              }
              (e = function () {
                (Rt !== 2 && Rt !== 9) || Ut !== t || (Rt = 7), Fe(t);
              }),
                s.then(e, e);
              break t;
            case 3:
              Rt = 7;
              break t;
            case 4:
              Rt = 5;
              break t;
            case 7:
              Lf(s)
                ? ((Rt = 0), (Me = null), Ah(e))
                : ((Rt = 0), (Me = null), ol(t, e, s, 7));
              break;
            case 5:
              var f = null;
              switch (dt.tag) {
                case 26:
                  f = dt.memoizedState;
                case 5:
                case 27:
                  var v = dt;
                  if (f ? rm(f) : v.stateNode.complete) {
                    (Rt = 0), (Me = null);
                    var E = v.sibling;
                    if (E !== null) dt = E;
                    else {
                      var C = v.return;
                      C !== null ? ((dt = C), Du(C)) : (dt = null);
                    }
                    break e;
                  }
              }
              (Rt = 0), (Me = null), ol(t, e, s, 5);
              break;
            case 6:
              (Rt = 0), (Me = null), ol(t, e, s, 6);
              break;
            case 8:
              so(), (Yt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        xp();
        break;
      } catch (N) {
        bh(t, N);
      }
    while (!0);
    return (
      (un = ra = null),
      (L.H = a),
      (L.A = c),
      (_t = n),
      dt !== null ? 0 : ((Ut = null), (mt = 0), Wi(), Yt)
    );
  }
  function xp() {
    for (; dt !== null && !Ui(); ) Rh(dt);
  }
  function Rh(t) {
    var e = kd(t.alternate, t, vn);
    (t.memoizedProps = t.pendingProps), e === null ? Du(t) : (dt = e);
  }
  function Ah(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Xd(n, e, e.pendingProps, e.type, void 0, mt);
        break;
      case 11:
        e = Xd(n, e, e.pendingProps, e.type.render, e.ref, mt);
        break;
      case 5:
        Rs(e);
      default:
        Wd(n, e), (e = dt = Tf(e, vn)), (e = kd(n, e, vn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Du(t) : (dt = e);
  }
  function ol(t, e, n, a) {
    (un = ra = null), Rs(e), (Pa = null), (Yl = 0);
    var c = e.return;
    try {
      if (pp(t, c, e, n, mt)) {
        (Yt = 1), gu(t, Ue(n, t.current)), (dt = null);
        return;
      }
    } catch (s) {
      if (c !== null) throw ((dt = c), s);
      (Yt = 1), gu(t, Ue(n, t.current)), (dt = null);
      return;
    }
    e.flags & 32768
      ? (pt || a === 1
          ? (t = !0)
          : il || (mt & 536870912) !== 0
            ? (t = !1)
            : ((Nn = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Re.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Mh(e, t))
      : Du(e);
  }
  function Du(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Mh(e, Nn);
        return;
      }
      t = e.return;
      var n = bp(e.alternate, e, vn);
      if (n !== null) {
        dt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        dt = e;
        return;
      }
      dt = e = t;
    } while (e !== null);
    Yt === 0 && (Yt = 5);
  }
  function Mh(t, e) {
    do {
      var n = _p(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (dt = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        dt = t;
        return;
      }
      dt = t = n;
    } while (t !== null);
    (Yt = 6), (dt = null);
  }
  function zh(t, e, n, a, c, s, f, v, E) {
    t.cancelPendingCommit = null;
    do wu();
    while ($t !== 0);
    if ((_t & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= $c),
        sv(t, n, s, f, v, E),
        t === Ut && ((dt = Ut = null), (mt = 0)),
        (cl = e),
        (Hn = t),
        (pn = n),
        (io = s),
        (uo = c),
        (vh = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Up(Li, function () {
              return wh(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = L.T), (L.T = null), (c = K.p), (K.p = 2), (f = _t), (_t |= 4);
        try {
          Ep(t, e, n);
        } finally {
          (_t = f), (K.p = c), (L.T = a);
        }
      }
      ($t = 1), Oh(), xh(), Ch();
    }
  }
  function Oh() {
    if ($t === 1) {
      $t = 0;
      var t = Hn,
        e = cl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = L.T), (L.T = null);
        var a = K.p;
        K.p = 2;
        var c = _t;
        _t |= 4;
        try {
          sh(e, t);
          var s = Eo,
            f = mf(t.containerInfo),
            v = s.focusedElem,
            E = s.selectionRange;
          if (
            f !== v &&
            v &&
            v.ownerDocument &&
            hf(v.ownerDocument.documentElement, v)
          ) {
            if (E !== null && Kc(v)) {
              var C = E.start,
                N = E.end;
              if ((N === void 0 && (N = C), "selectionStart" in v))
                (v.selectionStart = C),
                  (v.selectionEnd = Math.min(N, v.value.length));
              else {
                var H = v.ownerDocument || document,
                  D = (H && H.defaultView) || window;
                if (D.getSelection) {
                  var w = D.getSelection(),
                    $ = v.textContent.length,
                    et = Math.min(E.start, $),
                    wt = E.end === void 0 ? et : Math.min(E.end, $);
                  !w.extend && et > wt && ((f = wt), (wt = et), (et = f));
                  var M = df(v, et),
                    R = df(v, wt);
                  if (
                    M &&
                    R &&
                    (w.rangeCount !== 1 ||
                      w.anchorNode !== M.node ||
                      w.anchorOffset !== M.offset ||
                      w.focusNode !== R.node ||
                      w.focusOffset !== R.offset)
                  ) {
                    var x = H.createRange();
                    x.setStart(M.node, M.offset),
                      w.removeAllRanges(),
                      et > wt
                        ? (w.addRange(x), w.extend(R.node, R.offset))
                        : (x.setEnd(R.node, R.offset), w.addRange(x));
                  }
                }
              }
            }
            for (H = [], w = v; (w = w.parentNode); )
              w.nodeType === 1 &&
                H.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < H.length;
              v++
            ) {
              var j = H[v];
              (j.element.scrollLeft = j.left), (j.element.scrollTop = j.top);
            }
          }
          (Qu = !!_o), (Eo = _o = null);
        } finally {
          (_t = c), (K.p = a), (L.T = n);
        }
      }
      (t.current = e), ($t = 2);
    }
  }
  function xh() {
    if ($t === 2) {
      $t = 0;
      var t = Hn,
        e = cl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = L.T), (L.T = null);
        var a = K.p;
        K.p = 2;
        var c = _t;
        _t |= 4;
        try {
          ah(t, e.alternate, e);
        } finally {
          (_t = c), (K.p = a), (L.T = n);
        }
      }
      $t = 3;
    }
  }
  function Ch() {
    if ($t === 4 || $t === 3) {
      ($t = 0), xt();
      var t = Hn,
        e = cl,
        n = pn,
        a = vh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? ($t = 5)
        : (($t = 0), (cl = Hn = null), Dh(t, t.pendingLanes));
      var c = t.pendingLanes;
      if (
        (c === 0 && (jn = null),
        zc(n),
        (e = e.stateNode),
        be && typeof be.onCommitFiberRoot == "function")
      )
        try {
          be.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = L.T), (c = K.p), (K.p = 2), (L.T = null);
        try {
          for (var s = t.onRecoverableError, f = 0; f < a.length; f++) {
            var v = a[f];
            s(v.value, { componentStack: v.stack });
          }
        } finally {
          (L.T = e), (K.p = c);
        }
      }
      (pn & 3) !== 0 && wu(),
        Fe(t),
        (c = t.pendingLanes),
        (n & 261930) !== 0 && (c & 42) !== 0
          ? t === co
            ? ai++
            : ((ai = 0), (co = t))
          : (ai = 0),
        li(0);
    }
  }
  function Dh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Hl(e)));
  }
  function wu() {
    return Oh(), xh(), Ch(), wh();
  }
  function wh() {
    if ($t !== 5) return !1;
    var t = Hn,
      e = io;
    io = 0;
    var n = zc(pn),
      a = L.T,
      c = K.p;
    try {
      (K.p = 32 > n ? 32 : n), (L.T = null), (n = uo), (uo = null);
      var s = Hn,
        f = pn;
      if ((($t = 0), (cl = Hn = null), (pn = 0), (_t & 6) !== 0))
        throw Error(o(331));
      var v = _t;
      if (
        ((_t |= 4),
        hh(s.current),
        rh(s, s.current, f, n),
        (_t = v),
        li(0, !1),
        be && typeof be.onPostCommitFiberRoot == "function")
      )
        try {
          be.onPostCommitFiberRoot(El, s);
        } catch {}
      return !0;
    } finally {
      (K.p = c), (L.T = a), Dh(t, e);
    }
  }
  function Uh(t, e, n) {
    (e = Ue(n, e)),
      (e = qs(t.stateNode, e, 2)),
      (t = Dn(t, e, 2)),
      t !== null && (Rl(t, 2), Fe(t));
  }
  function At(t, e, n) {
    if (t.tag === 3) Uh(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Uh(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (jn === null || !jn.has(a)))
          ) {
            (t = Ue(n, t)),
              (n = Ld(2)),
              (a = Dn(e, n, 2)),
              a !== null && (Nd(n, a, e, t), Rl(a, 2), Fe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function ro(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Ap();
      var c = new Set();
      a.set(e, c);
    } else (c = a.get(e)), c === void 0 && ((c = new Set()), a.set(e, c));
    c.has(n) ||
      ((no = !0), c.add(n), (t = Cp.bind(null, t, e, n)), e.then(t, t));
  }
  function Cp(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Ut === t &&
        (mt & n) === n &&
        (Yt === 4 || (Yt === 3 && (mt & 62914560) === mt && 300 > bt() - Mu)
          ? (_t & 2) === 0 && sl(t, 0)
          : (ao |= n),
        ul === mt && (ul = 0)),
      Fe(t);
  }
  function Lh(t, e) {
    e === 0 && (e = zr()), (t = ca(t, e)), t !== null && (Rl(t, e), Fe(t));
  }
  function Dp(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Lh(t, n);
  }
  function wp(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          c = t.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(e), Lh(t, n);
  }
  function Up(t, e) {
    return _n(t, e);
  }
  var Uu = null,
    rl = null,
    fo = !1,
    Lu = !1,
    ho = !1,
    Yn = 0;
  function Fe(t) {
    t !== rl &&
      t.next === null &&
      (rl === null ? (Uu = rl = t) : (rl = rl.next = t)),
      (Lu = !0),
      fo || ((fo = !0), Np());
  }
  function li(t, e) {
    if (!ho && Lu) {
      ho = !0;
      do
        for (var n = !1, a = Uu; a !== null; ) {
          if (t !== 0) {
            var c = a.pendingLanes;
            if (c === 0) var s = 0;
            else {
              var f = a.suspendedLanes,
                v = a.pingedLanes;
              (s = (1 << (31 - _e(42 | t) + 1)) - 1),
                (s &= c & ~(f & ~v)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0);
            }
            s !== 0 && ((n = !0), Hh(a, s));
          } else
            (s = mt),
              (s = Hi(
                a,
                a === Ut ? s : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (s & 3) === 0 || Tl(a, s) || ((n = !0), Hh(a, s));
          a = a.next;
        }
      while (n);
      ho = !1;
    }
  }
  function Lp() {
    Nh();
  }
  function Nh() {
    Lu = fo = !1;
    var t = 0;
    Yn !== 0 && Zp() && (t = Yn);
    for (var e = bt(), n = null, a = Uu; a !== null; ) {
      var c = a.next,
        s = Bh(a, e);
      s === 0
        ? ((a.next = null),
          n === null ? (Uu = c) : (n.next = c),
          c === null && (rl = n))
        : ((n = a), (t !== 0 || (s & 3) !== 0) && (Lu = !0)),
        (a = c);
    }
    ($t !== 0 && $t !== 5) || li(t), Yn !== 0 && (Yn = 0);
  }
  function Bh(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        c = t.expirationTimes,
        s = t.pendingLanes & -62914561;
      0 < s;
    ) {
      var f = 31 - _e(s),
        v = 1 << f,
        E = c[f];
      E === -1
        ? ((v & n) === 0 || (v & a) !== 0) && (c[f] = cv(v, e))
        : E <= e && (t.expiredLanes |= v),
        (s &= ~v);
    }
    if (
      ((e = Ut),
      (n = mt),
      (n = Hi(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (Rt === 2 || Rt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ca(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Tl(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && Ca(a), zc(n))) {
        case 2:
        case 8:
          n = Ar;
          break;
        case 32:
          n = Li;
          break;
        case 268435456:
          n = Mr;
          break;
        default:
          n = Li;
      }
      return (
        (a = jh.bind(null, t)),
        (n = _n(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && Ca(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function jh(t, e) {
    if ($t !== 0 && $t !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (wu() && t.callbackNode !== n) return null;
    var a = mt;
    return (
      (a = Hi(
        t,
        t === Ut ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (gh(t, a, e),
          Bh(t, bt()),
          t.callbackNode != null && t.callbackNode === n
            ? jh.bind(null, t)
            : null)
    );
  }
  function Hh(t, e) {
    if (wu()) return null;
    gh(t, e, !0);
  }
  function Np() {
    Jp(function () {
      (_t & 6) !== 0 ? _n(_l, Lp) : Nh();
    });
  }
  function mo() {
    if (Yn === 0) {
      var t = Fa;
      t === 0 && ((t = Ni), (Ni <<= 1), (Ni & 261888) === 0 && (Ni = 256)),
        (Yn = t);
    }
    return Yn;
  }
  function qh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Xi("" + t);
  }
  function Yh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Bp(t, e, n, a, c) {
    if (e === "submit" && n && n.stateNode === c) {
      var s = qh((c[re] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[re] || null)
          ? qh(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((s = e), (f = null)));
      var v = new Ki("action", "action", null, a, c);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Yn !== 0) {
                  var E = f ? Yh(c, f) : new FormData(c);
                  Us(
                    n,
                    { pending: !0, data: E, method: c.method, action: s },
                    null,
                    E,
                  );
                }
              } else
                typeof s == "function" &&
                  (v.preventDefault(),
                  (E = f ? Yh(c, f) : new FormData(c)),
                  Us(
                    n,
                    { pending: !0, data: E, method: c.method, action: s },
                    s,
                    E,
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var yo = 0; yo < Wc.length; yo++) {
    var vo = Wc[yo],
      jp = vo.toLowerCase(),
      Hp = vo[0].toUpperCase() + vo.slice(1);
    Xe(jp, "on" + Hp);
  }
  Xe(pf, "onAnimationEnd"),
    Xe(gf, "onAnimationIteration"),
    Xe(Sf, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(tp, "onTransitionRun"),
    Xe(ep, "onTransitionStart"),
    Xe(np, "onTransitionCancel"),
    Xe(bf, "onTransitionEnd"),
    Na("onMouseEnter", ["mouseout", "mouseover"]),
    Na("onMouseLeave", ["mouseout", "mouseover"]),
    Na("onPointerEnter", ["pointerout", "pointerover"]),
    Na("onPointerLeave", ["pointerout", "pointerover"]),
    aa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    aa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    aa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    aa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    aa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ii =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    qp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ii),
    );
  function Gh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        c = a.event;
      a = a.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var v = a[f],
              E = v.instance,
              C = v.currentTarget;
            if (((v = v.listener), E !== s && c.isPropagationStopped()))
              break t;
            (s = v), (c.currentTarget = C);
            try {
              s(c);
            } catch (N) {
              Fi(N);
            }
            (c.currentTarget = null), (s = E);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((v = a[f]),
              (E = v.instance),
              (C = v.currentTarget),
              (v = v.listener),
              E !== s && c.isPropagationStopped())
            )
              break t;
            (s = v), (c.currentTarget = C);
            try {
              s(c);
            } catch (N) {
              Fi(N);
            }
            (c.currentTarget = null), (s = E);
          }
      }
    }
  }
  function ht(t, e) {
    var n = e[Oc];
    n === void 0 && (n = e[Oc] = new Set());
    var a = t + "__bubble";
    n.has(a) || (Xh(e, t, 2, !1), n.add(a));
  }
  function po(t, e, n) {
    var a = 0;
    e && (a |= 4), Xh(n, t, a, e);
  }
  var Nu = "_reactListening" + Math.random().toString(36).slice(2);
  function go(t) {
    if (!t[Nu]) {
      (t[Nu] = !0),
        Lr.forEach(function (n) {
          n !== "selectionchange" && (qp.has(n) || po(n, !1, t), po(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Nu] || ((e[Nu] = !0), po("selectionchange", !1, e));
    }
  }
  function Xh(t, e, n, a) {
    switch (pm(e)) {
      case 2:
        var c = hg;
        break;
      case 8:
        c = mg;
        break;
      default:
        c = Uo;
    }
    (n = c.bind(null, e, n, t)),
      (c = void 0),
      !jc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (c = !0),
      a
        ? c !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: c })
          : t.addEventListener(e, n, !0)
        : c !== void 0
          ? t.addEventListener(e, n, { passive: c })
          : t.addEventListener(e, n, !1);
  }
  function So(t, e, n, a, c) {
    var s = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var v = a.stateNode.containerInfo;
          if (v === c) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var E = f.tag;
              if ((E === 3 || E === 4) && f.stateNode.containerInfo === c)
                return;
              f = f.return;
            }
          for (; v !== null; ) {
            if (((f = wa(v)), f === null)) return;
            if (((E = f.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              a = s = f;
              continue t;
            }
            v = v.parentNode;
          }
        }
        a = a.return;
      }
    Kr(function () {
      var C = s,
        N = Nc(n),
        H = [];
      t: {
        var D = _f.get(t);
        if (D !== void 0) {
          var w = Ki,
            $ = t;
          switch (t) {
            case "keypress":
              if (Qi(n) === 0) break t;
            case "keydown":
            case "keyup":
              w = wv;
              break;
            case "focusin":
              ($ = "focus"), (w = Gc);
              break;
            case "focusout":
              ($ = "blur"), (w = Gc);
              break;
            case "beforeblur":
            case "afterblur":
              w = Gc;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Fr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = bv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Nv;
              break;
            case pf:
            case gf:
            case Sf:
              w = Tv;
              break;
            case bf:
              w = jv;
              break;
            case "scroll":
            case "scrollend":
              w = gv;
              break;
            case "wheel":
              w = qv;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = Av;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = $r;
              break;
            case "toggle":
            case "beforetoggle":
              w = Gv;
          }
          var et = (e & 4) !== 0,
            wt = !et && (t === "scroll" || t === "scrollend"),
            M = et ? (D !== null ? D + "Capture" : null) : D;
          et = [];
          for (var R = C, x; R !== null; ) {
            var j = R;
            if (
              ((x = j.stateNode),
              (j = j.tag),
              (j !== 5 && j !== 26 && j !== 27) ||
                x === null ||
                M === null ||
                ((j = zl(R, M)), j != null && et.push(ui(R, j, x))),
              wt)
            )
              break;
            R = R.return;
          }
          0 < et.length &&
            ((D = new w(D, $, null, n, N)),
            H.push({ event: D, listeners: et }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((D = t === "mouseover" || t === "pointerover"),
            (w = t === "mouseout" || t === "pointerout"),
            D &&
              n !== Lc &&
              ($ = n.relatedTarget || n.fromElement) &&
              (wa($) || $[Da]))
          )
            break t;
          if (
            (w || D) &&
            ((D =
              N.window === N
                ? N
                : (D = N.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            w
              ? (($ = n.relatedTarget || n.toElement),
                (w = C),
                ($ = $ ? wa($) : null),
                $ !== null &&
                  ((wt = d($)),
                  (et = $.tag),
                  $ !== wt || (et !== 5 && et !== 27 && et !== 6)) &&
                  ($ = null))
              : ((w = null), ($ = C)),
            w !== $)
          ) {
            if (
              ((et = Fr),
              (j = "onMouseLeave"),
              (M = "onMouseEnter"),
              (R = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((et = $r),
                (j = "onPointerLeave"),
                (M = "onPointerEnter"),
                (R = "pointer")),
              (wt = w == null ? D : Ml(w)),
              (x = $ == null ? D : Ml($)),
              (D = new et(j, R + "leave", w, n, N)),
              (D.target = wt),
              (D.relatedTarget = x),
              (j = null),
              wa(N) === C &&
                ((et = new et(M, R + "enter", $, n, N)),
                (et.target = x),
                (et.relatedTarget = wt),
                (j = et)),
              (wt = j),
              w && $)
            )
              e: {
                for (et = Yp, M = w, R = $, x = 0, j = M; j; j = et(j)) x++;
                j = 0;
                for (var tt = R; tt; tt = et(tt)) j++;
                for (; 0 < x - j; ) (M = et(M)), x--;
                for (; 0 < j - x; ) (R = et(R)), j--;
                for (; x--; ) {
                  if (M === R || (R !== null && M === R.alternate)) {
                    et = M;
                    break e;
                  }
                  (M = et(M)), (R = et(R));
                }
                et = null;
              }
            else et = null;
            w !== null && Vh(H, D, w, et, !1),
              $ !== null && wt !== null && Vh(H, wt, $, et, !0);
          }
        }
        t: {
          if (
            ((D = C ? Ml(C) : window),
            (w = D.nodeName && D.nodeName.toLowerCase()),
            w === "select" || (w === "input" && D.type === "file"))
          )
            var gt = uf;
          else if (af(D))
            if (cf) gt = $v;
            else {
              gt = Fv;
              var P = kv;
            }
          else
            (w = D.nodeName),
              !w ||
              w.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? C && Uc(C.elementType) && (gt = uf)
                : (gt = Wv);
          if (gt && (gt = gt(t, C))) {
            lf(H, gt, n, N);
            break t;
          }
          P && P(t, D, C),
            t === "focusout" &&
              C &&
              D.type === "number" &&
              C.memoizedProps.value != null &&
              wc(D, "number", D.value);
        }
        switch (((P = C ? Ml(C) : window), t)) {
          case "focusin":
            (af(P) || P.contentEditable === "true") &&
              ((Ga = P), (Jc = C), (Nl = null));
            break;
          case "focusout":
            Nl = Jc = Ga = null;
            break;
          case "mousedown":
            kc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (kc = !1), yf(H, n, N);
            break;
          case "selectionchange":
            if (Iv) break;
          case "keydown":
          case "keyup":
            yf(H, n, N);
        }
        var rt;
        if (Vc)
          t: {
            switch (t) {
              case "compositionstart":
                var yt = "onCompositionStart";
                break t;
              case "compositionend":
                yt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                yt = "onCompositionUpdate";
                break t;
            }
            yt = void 0;
          }
        else
          Ya
            ? ef(t, n) && (yt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (yt = "onCompositionStart");
        yt &&
          (Pr &&
            n.locale !== "ko" &&
            (Ya || yt !== "onCompositionStart"
              ? yt === "onCompositionEnd" && Ya && (rt = Jr())
              : ((Rn = N),
                (Hc = "value" in Rn ? Rn.value : Rn.textContent),
                (Ya = !0))),
          (P = Bu(C, yt)),
          0 < P.length &&
            ((yt = new Wr(yt, t, null, n, N)),
            H.push({ event: yt, listeners: P }),
            rt
              ? (yt.data = rt)
              : ((rt = nf(n)), rt !== null && (yt.data = rt)))),
          (rt = Vv ? Qv(t, n) : Zv(t, n)) &&
            ((yt = Bu(C, "onBeforeInput")),
            0 < yt.length &&
              ((P = new Wr("onBeforeInput", "beforeinput", null, n, N)),
              H.push({ event: P, listeners: yt }),
              (P.data = rt))),
          Bp(H, t, C, n, N);
      }
      Gh(H, e);
    });
  }
  function ui(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Bu(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var c = t,
        s = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          s === null ||
          ((c = zl(t, n)),
          c != null && a.unshift(ui(t, c, s)),
          (c = zl(t, e)),
          c != null && a.push(ui(t, c, s))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Yp(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Vh(t, e, n, a, c) {
    for (var s = e._reactName, f = []; n !== null && n !== a; ) {
      var v = n,
        E = v.alternate,
        C = v.stateNode;
      if (((v = v.tag), E !== null && E === a)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        C === null ||
        ((E = C),
        c
          ? ((C = zl(n, s)), C != null && f.unshift(ui(n, C, E)))
          : c || ((C = zl(n, s)), C != null && f.push(ui(n, C, E)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Gp = /\r\n?/g,
    Xp = /\u0000|\uFFFD/g;
  function Qh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Gp,
        `
`,
      )
      .replace(Xp, "");
  }
  function Zh(t, e) {
    return (e = Qh(e)), Qh(t) === e;
  }
  function Dt(t, e, n, a, c, s) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || ja(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            ja(t, "" + a);
        break;
      case "className":
        Yi(t, "class", a);
        break;
      case "tabIndex":
        Yi(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yi(t, n, a);
        break;
      case "style":
        Qr(t, a, s);
        break;
      case "data":
        if (e !== "object") {
          Yi(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = Xi("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof s == "function" &&
            (n === "formAction"
              ? (e !== "input" && Dt(t, e, "name", c.name, c, null),
                Dt(t, e, "formEncType", c.formEncType, c, null),
                Dt(t, e, "formMethod", c.formMethod, c, null),
                Dt(t, e, "formTarget", c.formTarget, c, null))
              : (Dt(t, e, "encType", c.encType, c, null),
                Dt(t, e, "method", c.method, c, null),
                Dt(t, e, "target", c.target, c, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = Xi("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = en);
        break;
      case "onScroll":
        a != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (c.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Xi("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        ht("beforetoggle", t), ht("toggle", t), qi(t, "popover", a);
        break;
      case "xlinkActuate":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        qi(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = vv.get(n) || n), qi(t, n, a));
    }
  }
  function bo(t, e, n, a, c, s) {
    switch (n) {
      case "style":
        Qr(t, a, s);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (c.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ja(t, a)
          : (typeof a == "number" || typeof a == "bigint") && ja(t, "" + a);
        break;
      case "onScroll":
        a != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ht("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = en);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Nr.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((c = n.endsWith("Capture")),
              (e = n.slice(2, c ? n.length - 7 : void 0)),
              (s = t[re] || null),
              (s = s != null ? s[n] : null),
              typeof s == "function" && t.removeEventListener(e, s, c),
              typeof a == "function")
            ) {
              typeof s != "function" &&
                s !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, c);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : qi(t, n, a);
          }
    }
  }
  function ue(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ht("error", t), ht("load", t);
        var a = !1,
          c = !1,
          s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var f = n[s];
            if (f != null)
              switch (s) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Dt(t, e, s, f, n, null);
              }
          }
        c && Dt(t, e, "srcSet", n.srcSet, n, null),
          a && Dt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ht("invalid", t);
        var v = (s = f = c = null),
          E = null,
          C = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var N = n[a];
            if (N != null)
              switch (a) {
                case "name":
                  c = N;
                  break;
                case "type":
                  f = N;
                  break;
                case "checked":
                  E = N;
                  break;
                case "defaultChecked":
                  C = N;
                  break;
                case "value":
                  s = N;
                  break;
                case "defaultValue":
                  v = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(o(137, e));
                  break;
                default:
                  Dt(t, e, a, N, n, null);
              }
          }
        Yr(t, s, v, E, C, f, c, !1);
        return;
      case "select":
        ht("invalid", t), (a = f = s = null);
        for (c in n)
          if (n.hasOwnProperty(c) && ((v = n[c]), v != null))
            switch (c) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                f = v;
                break;
              case "multiple":
                a = v;
              default:
                Dt(t, e, c, v, n, null);
            }
        (e = s),
          (n = f),
          (t.multiple = !!a),
          e != null ? Ba(t, !!a, e, !1) : n != null && Ba(t, !!a, n, !0);
        return;
      case "textarea":
        ht("invalid", t), (s = c = a = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((v = n[f]), v != null))
            switch (f) {
              case "value":
                a = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
                s = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(o(91));
                break;
              default:
                Dt(t, e, f, v, n, null);
            }
        Xr(t, a, c, s);
        return;
      case "option":
        for (E in n)
          if (n.hasOwnProperty(E) && ((a = n[E]), a != null))
            switch (E) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Dt(t, e, E, a, n, null);
            }
        return;
      case "dialog":
        ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ii.length; a++) ht(ii[a], t);
        break;
      case "image":
        ht("error", t), ht("load", t);
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ht("error", t), ht("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && ((a = n[C]), a != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Dt(t, e, C, a, n, null);
            }
        return;
      default:
        if (Uc(e)) {
          for (N in n)
            n.hasOwnProperty(N) &&
              ((a = n[N]), a !== void 0 && bo(t, e, N, a, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((a = n[v]), a != null && Dt(t, e, v, a, n, null));
  }
  function Vp(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          s = null,
          f = null,
          v = null,
          E = null,
          C = null,
          N = null;
        for (w in n) {
          var H = n[w];
          if (n.hasOwnProperty(w) && H != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = H;
              default:
                a.hasOwnProperty(w) || Dt(t, e, w, null, a, H);
            }
        }
        for (var D in a) {
          var w = a[D];
          if (((H = n[D]), a.hasOwnProperty(D) && (w != null || H != null)))
            switch (D) {
              case "type":
                s = w;
                break;
              case "name":
                c = w;
                break;
              case "checked":
                C = w;
                break;
              case "defaultChecked":
                N = w;
                break;
              case "value":
                f = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(o(137, e));
                break;
              default:
                w !== H && Dt(t, e, D, w, a, H);
            }
        }
        Dc(t, f, v, E, C, N, s, c);
        return;
      case "select":
        w = f = v = D = null;
        for (s in n)
          if (((E = n[s]), n.hasOwnProperty(s) && E != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                w = E;
              default:
                a.hasOwnProperty(s) || Dt(t, e, s, null, a, E);
            }
        for (c in a)
          if (
            ((s = a[c]),
            (E = n[c]),
            a.hasOwnProperty(c) && (s != null || E != null))
          )
            switch (c) {
              case "value":
                D = s;
                break;
              case "defaultValue":
                v = s;
                break;
              case "multiple":
                f = s;
              default:
                s !== E && Dt(t, e, c, s, a, E);
            }
        (e = v),
          (n = f),
          (a = w),
          D != null
            ? Ba(t, !!n, D, !1)
            : !!a != !!n &&
              (e != null ? Ba(t, !!n, e, !0) : Ba(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        w = D = null;
        for (v in n)
          if (
            ((c = n[v]),
            n.hasOwnProperty(v) && c != null && !a.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, v, null, a, c);
            }
        for (f in a)
          if (
            ((c = a[f]),
            (s = n[f]),
            a.hasOwnProperty(f) && (c != null || s != null))
          )
            switch (f) {
              case "value":
                D = c;
                break;
              case "defaultValue":
                w = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                c !== s && Dt(t, e, f, c, a, s);
            }
        Gr(t, D, w);
        return;
      case "option":
        for (var $ in n)
          if (
            ((D = n[$]),
            n.hasOwnProperty($) && D != null && !a.hasOwnProperty($))
          )
            switch ($) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Dt(t, e, $, null, a, D);
            }
        for (E in a)
          if (
            ((D = a[E]),
            (w = n[E]),
            a.hasOwnProperty(E) && D !== w && (D != null || w != null))
          )
            switch (E) {
              case "selected":
                t.selected =
                  D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                Dt(t, e, E, D, a, w);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var et in n)
          (D = n[et]),
            n.hasOwnProperty(et) &&
              D != null &&
              !a.hasOwnProperty(et) &&
              Dt(t, e, et, null, a, D);
        for (C in a)
          if (
            ((D = a[C]),
            (w = n[C]),
            a.hasOwnProperty(C) && D !== w && (D != null || w != null))
          )
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(o(137, e));
                break;
              default:
                Dt(t, e, C, D, a, w);
            }
        return;
      default:
        if (Uc(e)) {
          for (var wt in n)
            (D = n[wt]),
              n.hasOwnProperty(wt) &&
                D !== void 0 &&
                !a.hasOwnProperty(wt) &&
                bo(t, e, wt, void 0, a, D);
          for (N in a)
            (D = a[N]),
              (w = n[N]),
              !a.hasOwnProperty(N) ||
                D === w ||
                (D === void 0 && w === void 0) ||
                bo(t, e, N, D, a, w);
          return;
        }
    }
    for (var M in n)
      (D = n[M]),
        n.hasOwnProperty(M) &&
          D != null &&
          !a.hasOwnProperty(M) &&
          Dt(t, e, M, null, a, D);
    for (H in a)
      (D = a[H]),
        (w = n[H]),
        !a.hasOwnProperty(H) ||
          D === w ||
          (D == null && w == null) ||
          Dt(t, e, H, D, a, w);
  }
  function Kh(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Qp() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var c = n[a],
          s = c.transferSize,
          f = c.initiatorType,
          v = c.duration;
        if (s && v && Kh(f)) {
          for (f = 0, v = c.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a],
              C = E.startTime;
            if (C > v) break;
            var N = E.transferSize,
              H = E.initiatorType;
            N &&
              Kh(H) &&
              ((E = E.responseEnd), (f += N * (E < v ? 1 : (v - C) / (E - C))));
          }
          if ((--a, (e += (8 * (s + f)) / (c.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var _o = null,
    Eo = null;
  function ju(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Jh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function kh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function To(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ro = null;
  function Zp() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ro
        ? !1
        : ((Ro = t), !0)
      : ((Ro = null), !1);
  }
  var Fh = typeof setTimeout == "function" ? setTimeout : void 0,
    Kp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wh = typeof Promise == "function" ? Promise : void 0,
    Jp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wh < "u"
          ? function (t) {
              return Wh.resolve(null).then(t).catch(kp);
            }
          : Fh;
  function kp(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Gn(t) {
    return t === "head";
  }
  function $h(t, e) {
    var n = e,
      a = 0;
    do {
      var c = n.nextSibling;
      if ((t.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            t.removeChild(c), ml(e);
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") ci(t.ownerDocument.documentElement);
        else if (n === "head") {
          (n = t.ownerDocument.head), ci(n);
          for (var s = n.firstChild; s; ) {
            var f = s.nextSibling,
              v = s.nodeName;
            s[Al] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(s),
              (s = f);
          }
        } else n === "body" && ci(t.ownerDocument.body);
      n = c;
    } while (n);
    ml(e);
  }
  function Ph(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function Ao(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ao(n), xc(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Fp(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var c = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Al])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((s = t.getAttribute("rel")),
                s === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== c.rel ||
                t.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                t.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                t.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((s = t.getAttribute("src")),
                (s !== (c.src == null ? null : c.src) ||
                  t.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  t.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  s &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === s) return t;
      } else return t;
      if (((t = He(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Wp(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = He(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ih(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = He(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Mo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function zo(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function $p(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function He(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Oo = null;
  function tm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return He(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function em(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function nm(t, e, n) {
    switch (((e = ju(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function ci(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    xc(t);
  }
  var qe = new Map(),
    am = new Set();
  function Hu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var gn = K.d;
  K.d = { f: Pp, r: Ip, D: tg, C: eg, L: ng, m: ag, X: ig, S: lg, M: ug };
  function Pp() {
    var t = gn.f(),
      e = xu();
    return t || e;
  }
  function Ip(t) {
    var e = Ua(t);
    e !== null && e.tag === 5 && e.type === "form" ? bd(e) : gn.r(t);
  }
  var fl = typeof document > "u" ? null : document;
  function lm(t, e, n) {
    var a = fl;
    if (a && typeof e == "string" && e) {
      var c = De(e);
      (c = 'link[rel="' + t + '"][href="' + c + '"]'),
        typeof n == "string" && (c += '[crossorigin="' + n + '"]'),
        am.has(c) ||
          (am.add(c),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(c) === null &&
            ((e = a.createElement("link")),
            ue(e, "link", t),
            Pt(e),
            a.head.appendChild(e)));
    }
  }
  function tg(t) {
    gn.D(t), lm("dns-prefetch", t, null);
  }
  function eg(t, e) {
    gn.C(t, e), lm("preconnect", t, e);
  }
  function ng(t, e, n) {
    gn.L(t, e, n);
    var a = fl;
    if (a && t && e) {
      var c = 'link[rel="preload"][as="' + De(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + De(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (c += '[imagesizes="' + De(n.imageSizes) + '"]'))
        : (c += '[href="' + De(t) + '"]');
      var s = c;
      switch (e) {
        case "style":
          s = dl(t);
          break;
        case "script":
          s = hl(t);
      }
      qe.has(s) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        qe.set(s, t),
        a.querySelector(c) !== null ||
          (e === "style" && a.querySelector(si(s))) ||
          (e === "script" && a.querySelector(oi(s))) ||
          ((e = a.createElement("link")),
          ue(e, "link", t),
          Pt(e),
          a.head.appendChild(e)));
    }
  }
  function ag(t, e) {
    gn.m(t, e);
    var n = fl;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        c =
          'link[rel="modulepreload"][as="' + De(a) + '"][href="' + De(t) + '"]',
        s = c;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = hl(t);
      }
      if (
        !qe.has(s) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        qe.set(s, t),
        n.querySelector(c) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(oi(s))) return;
        }
        (a = n.createElement("link")),
          ue(a, "link", t),
          Pt(a),
          n.head.appendChild(a);
      }
    }
  }
  function lg(t, e, n) {
    gn.S(t, e, n);
    var a = fl;
    if (a && t) {
      var c = La(a).hoistableStyles,
        s = dl(t);
      e = e || "default";
      var f = c.get(s);
      if (!f) {
        var v = { loading: 0, preload: null };
        if ((f = a.querySelector(si(s)))) v.loading = 5;
        else {
          (t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = qe.get(s)) && xo(t, n);
          var E = (f = a.createElement("link"));
          Pt(E),
            ue(E, "link", t),
            (E._p = new Promise(function (C, N) {
              (E.onload = C), (E.onerror = N);
            })),
            E.addEventListener("load", function () {
              v.loading |= 1;
            }),
            E.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            qu(f, e, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: v }),
          c.set(s, f);
      }
    }
  }
  function ig(t, e) {
    gn.X(t, e);
    var n = fl;
    if (n && t) {
      var a = La(n).hoistableScripts,
        c = hl(t),
        s = a.get(c);
      s ||
        ((s = n.querySelector(oi(c))),
        s ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = qe.get(c)) && Co(t, e),
          (s = n.createElement("script")),
          Pt(s),
          ue(s, "link", t),
          n.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(c, s));
    }
  }
  function ug(t, e) {
    gn.M(t, e);
    var n = fl;
    if (n && t) {
      var a = La(n).hoistableScripts,
        c = hl(t),
        s = a.get(c);
      s ||
        ((s = n.querySelector(oi(c))),
        s ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = qe.get(c)) && Co(t, e),
          (s = n.createElement("script")),
          Pt(s),
          ue(s, "link", t),
          n.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(c, s));
    }
  }
  function im(t, e, n, a) {
    var c = (c = ut.current) ? Hu(c) : null;
    if (!c) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = dl(n.href)),
            (n = La(c).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = dl(n.href);
          var s = La(c).hoistableStyles,
            f = s.get(t);
          if (
            (f ||
              ((c = c.ownerDocument || c),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(t, f),
              (s = c.querySelector(si(t))) &&
                !s._p &&
                ((f.instance = s), (f.state.loading = 5)),
              qe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                qe.set(t, n),
                s || cg(c, t, n, f.state))),
            e && a === null)
          )
            throw Error(o(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = hl(n)),
              (n = La(c).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function dl(t) {
    return 'href="' + De(t) + '"';
  }
  function si(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function um(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function cg(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ue(e, "link", n),
        Pt(e),
        t.head.appendChild(e));
  }
  function hl(t) {
    return '[src="' + De(t) + '"]';
  }
  function oi(t) {
    return "script[async]" + t;
  }
  function cm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + De(n.href) + '"]');
          if (a) return (e.instance = a), Pt(a), a;
          var c = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Pt(a),
            ue(a, "style", c),
            qu(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          c = dl(n.href);
          var s = t.querySelector(si(c));
          if (s) return (e.state.loading |= 4), (e.instance = s), Pt(s), s;
          (a = um(n)),
            (c = qe.get(c)) && xo(a, c),
            (s = (t.ownerDocument || t).createElement("link")),
            Pt(s);
          var f = s;
          return (
            (f._p = new Promise(function (v, E) {
              (f.onload = v), (f.onerror = E);
            })),
            ue(s, "link", a),
            (e.state.loading |= 4),
            qu(s, n.precedence, t),
            (e.instance = s)
          );
        case "script":
          return (
            (s = hl(n.src)),
            (c = t.querySelector(oi(s)))
              ? ((e.instance = c), Pt(c), c)
              : ((a = n),
                (c = qe.get(s)) && ((a = g({}, n)), Co(a, c)),
                (t = t.ownerDocument || t),
                (c = t.createElement("script")),
                Pt(c),
                ue(c, "link", a),
                t.head.appendChild(c),
                (e.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), qu(a, n.precedence, t));
    return e.instance;
  }
  function qu(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        c = a.length ? a[a.length - 1] : null,
        s = c,
        f = 0;
      f < a.length;
      f++
    ) {
      var v = a[f];
      if (v.dataset.precedence === e) s = v;
      else if (s !== c) break;
    }
    s
      ? s.parentNode.insertBefore(t, s.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function xo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Co(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Yu = null;
  function sm(t, e, n) {
    if (Yu === null) {
      var a = new Map(),
        c = (Yu = new Map());
      c.set(n, a);
    } else (c = Yu), (a = c.get(n)), a || ((a = new Map()), c.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), c = 0;
      c < n.length;
      c++
    ) {
      var s = n[c];
      if (
        !(
          s[Al] ||
          s[ne] ||
          (t === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = s.getAttribute(e) || "";
        f = t + f;
        var v = a.get(f);
        v ? v.push(s) : a.set(f, [s]);
      }
    }
    return a;
  }
  function om(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      );
  }
  function sg(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function rm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function og(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var c = dl(a.href),
          s = e.querySelector(si(c));
        if (s) {
          (e = s._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Gu.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = s),
            Pt(s);
          return;
        }
        (s = e.ownerDocument || e),
          (a = um(a)),
          (c = qe.get(c)) && xo(a, c),
          (s = s.createElement("link")),
          Pt(s);
        var f = s;
        (f._p = new Promise(function (v, E) {
          (f.onload = v), (f.onerror = E);
        })),
          ue(s, "link", a),
          (n.instance = s);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Gu.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  var Do = 0;
  function rg(t, e) {
    return (
      t.stylesheets && t.count === 0 && Vu(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Vu(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                (t.unsuspend = null), s();
              }
            }, 6e4 + e);
            0 < t.imgBytes && Do === 0 && (Do = 62500 * Qp());
            var c = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Vu(t, t.stylesheets), t.unsuspend))
                ) {
                  var s = t.unsuspend;
                  (t.unsuspend = null), s();
                }
              },
              (t.imgBytes > Do ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(c);
              }
            );
          }
        : null
    );
  }
  function Gu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Vu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Xu = null;
  function Vu(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Xu = new Map()),
        e.forEach(fg, t),
        (Xu = null),
        Gu.call(t));
  }
  function fg(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Xu.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), Xu.set(t, n);
        for (
          var c = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            s = 0;
          s < c.length;
          s++
        ) {
          var f = c[s];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (a = f));
        }
        a && n.set(null, a);
      }
      (c = e.instance),
        (f = c.getAttribute("data-precedence")),
        (s = n.get(f) || a),
        s === a && n.set(null, c),
        n.set(f, c),
        this.count++,
        (a = Gu.bind(this)),
        c.addEventListener("load", a),
        c.addEventListener("error", a),
        s
          ? s.parentNode.insertBefore(c, s.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(c, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var ri = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0,
  };
  function dg(t, e, n, a, c, s, f, v, E) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ac(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ac(0)),
      (this.hiddenUpdates = Ac(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = c),
      (this.onCaughtError = s),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map());
  }
  function fm(t, e, n, a, c, s, f, v, E, C, N, H) {
    return (
      (t = new dg(t, e, n, f, E, C, N, H, v)),
      (e = 1),
      s === !0 && (e |= 24),
      (s = Te(3, null, null, e)),
      (t.current = s),
      (s.stateNode = t),
      (e = os()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (s.memoizedState = { element: a, isDehydrated: n, cache: e }),
      hs(s),
      t
    );
  }
  function dm(t) {
    return t ? ((t = Qa), t) : Qa;
  }
  function hm(t, e, n, a, c, s) {
    (c = dm(c)),
      a.context === null ? (a.context = c) : (a.pendingContext = c),
      (a = Cn(e)),
      (a.payload = { element: n }),
      (s = s === void 0 ? null : s),
      s !== null && (a.callback = s),
      (n = Dn(t, a, e)),
      n !== null && (ve(n, t, e), Xl(n, t, e));
  }
  function mm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function wo(t, e) {
    mm(t, e), (t = t.alternate) && mm(t, e);
  }
  function ym(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ca(t, 67108864);
      e !== null && ve(e, t, 67108864), wo(t, 67108864);
    }
  }
  function vm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Oe();
      e = Mc(e);
      var n = ca(t, e);
      n !== null && ve(n, t, e), wo(t, e);
    }
  }
  var Qu = !0;
  function hg(t, e, n, a) {
    var c = L.T;
    L.T = null;
    var s = K.p;
    try {
      (K.p = 2), Uo(t, e, n, a);
    } finally {
      (K.p = s), (L.T = c);
    }
  }
  function mg(t, e, n, a) {
    var c = L.T;
    L.T = null;
    var s = K.p;
    try {
      (K.p = 8), Uo(t, e, n, a);
    } finally {
      (K.p = s), (L.T = c);
    }
  }
  function Uo(t, e, n, a) {
    if (Qu) {
      var c = Lo(a);
      if (c === null) So(t, e, a, Zu, n), gm(t, a);
      else if (vg(c, t, e, n, a)) a.stopPropagation();
      else if ((gm(t, a), e & 4 && -1 < yg.indexOf(t))) {
        for (; c !== null; ) {
          var s = Ua(c);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var f = na(s.pendingLanes);
                  if (f !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; f; ) {
                      var E = 1 << (31 - _e(f));
                      (v.entanglements[1] |= E), (f &= ~E);
                    }
                    Fe(s), (_t & 6) === 0 && ((zu = bt() + 500), li(0));
                  }
                }
                break;
              case 31:
              case 13:
                (v = ca(s, 2)), v !== null && ve(v, s, 2), xu(), wo(s, 2);
            }
          if (((s = Lo(a)), s === null && So(t, e, a, Zu, n), s === c)) break;
          c = s;
        }
        c !== null && a.stopPropagation();
      } else So(t, e, a, null, n);
    }
  }
  function Lo(t) {
    return (t = Nc(t)), No(t);
  }
  var Zu = null;
  function No(t) {
    if (((Zu = null), (t = wa(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Zu = t), null;
  }
  function pm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Se()) {
          case _l:
            return 2;
          case Ar:
            return 8;
          case Li:
          case ev:
            return 32;
          case Mr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Bo = !1,
    Xn = null,
    Vn = null,
    Qn = null,
    fi = new Map(),
    di = new Map(),
    Zn = [],
    yg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function gm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Qn = null;
        break;
      case "pointerover":
      case "pointerout":
        fi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        di.delete(e.pointerId);
    }
  }
  function hi(t, e, n, a, c, s) {
    return t === null || t.nativeEvent !== s
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: s,
          targetContainers: [c],
        }),
        e !== null && ((e = Ua(e)), e !== null && ym(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        c !== null && e.indexOf(c) === -1 && e.push(c),
        t);
  }
  function vg(t, e, n, a, c) {
    switch (e) {
      case "focusin":
        return (Xn = hi(Xn, t, e, n, a, c)), !0;
      case "dragenter":
        return (Vn = hi(Vn, t, e, n, a, c)), !0;
      case "mouseover":
        return (Qn = hi(Qn, t, e, n, a, c)), !0;
      case "pointerover":
        var s = c.pointerId;
        return fi.set(s, hi(fi.get(s) || null, t, e, n, a, c)), !0;
      case "gotpointercapture":
        return (
          (s = c.pointerId), di.set(s, hi(di.get(s) || null, t, e, n, a, c)), !0
        );
    }
    return !1;
  }
  function Sm(t) {
    var e = wa(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = m(n)), e !== null)) {
            (t.blockedOn = e),
              wr(t.priority, function () {
                vm(n);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = p(n)), e !== null)) {
            (t.blockedOn = e),
              wr(t.priority, function () {
                vm(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ku(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Lo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (Lc = a), n.target.dispatchEvent(a), (Lc = null);
      } else return (e = Ua(n)), e !== null && ym(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function bm(t, e, n) {
    Ku(t) && n.delete(e);
  }
  function pg() {
    (Bo = !1),
      Xn !== null && Ku(Xn) && (Xn = null),
      Vn !== null && Ku(Vn) && (Vn = null),
      Qn !== null && Ku(Qn) && (Qn = null),
      fi.forEach(bm),
      di.forEach(bm);
  }
  function Ju(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Bo ||
        ((Bo = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, pg)));
  }
  var ku = null;
  function _m(t) {
    ku !== t &&
      ((ku = t),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        ku === t && (ku = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            c = t[e + 2];
          if (typeof a != "function") {
            if (No(a || n) === null) continue;
            break;
          }
          var s = Ua(n);
          s !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Us(s, { pending: !0, data: c, method: n.method, action: a }, a, c));
        }
      }));
  }
  function ml(t) {
    function e(E) {
      return Ju(E, t);
    }
    Xn !== null && Ju(Xn, t),
      Vn !== null && Ju(Vn, t),
      Qn !== null && Ju(Qn, t),
      fi.forEach(e),
      di.forEach(e);
    for (var n = 0; n < Zn.length; n++) {
      var a = Zn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Zn.length && ((n = Zn[0]), n.blockedOn === null); )
      Sm(n), n.blockedOn === null && Zn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var c = n[a],
          s = n[a + 1],
          f = c[re] || null;
        if (typeof s == "function") f || _m(n);
        else if (f) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (((c = s), (f = s[re] || null))) v = f.formAction;
            else if (No(c) !== null) continue;
          } else v = f.action;
          typeof v == "function" ? (n[a + 1] = v) : (n.splice(a, 3), (a -= 3)),
            _m(n);
        }
      }
  }
  function Em() {
    function t(s) {
      s.canIntercept &&
        s.info === "react-transition" &&
        s.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (c = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      c !== null && (c(), (c = null)), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var s = navigation.currentEntry;
        s &&
          s.url != null &&
          navigation.navigate(s.url, {
            state: s.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        c = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            c !== null && (c(), (c = null));
        }
      );
    }
  }
  function jo(t) {
    this._internalRoot = t;
  }
  (Fu.prototype.render = jo.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        a = Oe();
      hm(n, a, t, e, null, null);
    }),
    (Fu.prototype.unmount = jo.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          hm(t.current, 2, null, t, null, null), xu(), (e[Da] = null);
        }
      });
  function Fu(t) {
    this._internalRoot = t;
  }
  Fu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Dr();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Zn.length && e !== 0 && e < Zn[n].priority; n++);
      Zn.splice(n, 0, t), n === 0 && Sm(t);
    }
  };
  var Tm = i.version;
  if (Tm !== "19.2.0") throw Error(o(527, Tm, "19.2.0"));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = h(e)),
      (t = t !== null ? b(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var gg = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wu.isDisabled && Wu.supportsFiber)
      try {
        (El = Wu.inject(gg)), (be = Wu);
      } catch {}
  }
  return (
    (yi.createRoot = function (t, e) {
      if (!r(t)) throw Error(o(299));
      var n = !1,
        a = "",
        c = Cd,
        s = Dd,
        f = wd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (c = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = fm(t, 1, !1, null, null, n, a, null, c, s, f, Em)),
        (t[Da] = e.current),
        go(t),
        new jo(e)
      );
    }),
    (yi.hydrateRoot = function (t, e, n) {
      if (!r(t)) throw Error(o(299));
      var a = !1,
        c = "",
        s = Cd,
        f = Dd,
        v = wd,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.formState !== void 0 && (E = n.formState)),
        (e = fm(t, 1, !0, e, n ?? null, a, c, E, s, f, v, Em)),
        (e.context = dm(null)),
        (n = e.current),
        (a = Oe()),
        (a = Mc(a)),
        (c = Cn(a)),
        (c.callback = null),
        Dn(n, c, a),
        (n = a),
        (e.current.lanes = n),
        Rl(e, n),
        Fe(e),
        (t[Da] = e.current),
        go(t),
        new Fu(e)
      );
    }),
    (yi.version = "19.2.0"),
    yi
  );
}
var Um;
function Og() {
  if (Um) return Yo.exports;
  Um = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), (Yo.exports = zg()), Yo.exports;
}
var xg = Og();
const ur = new WeakMap(),
  Cg = new WeakMap(),
  cc = { current: [] };
let Qo = !1,
  bi = 0;
const Si = new Set(),
  $u = new Map();
function iy(l) {
  for (const i of l) {
    if (cc.current.includes(i)) continue;
    cc.current.push(i), i.recompute();
    const u = Cg.get(i);
    if (u)
      for (const o of u) {
        const r = ur.get(o);
        r?.length && iy(r);
      }
  }
}
function Dg(l) {
  const i = { prevVal: l.prevState, currentVal: l.state };
  for (const u of l.listeners) u(i);
}
function wg(l) {
  const i = { prevVal: l.prevState, currentVal: l.state };
  for (const u of l.listeners) u(i);
}
function uy(l) {
  if (
    (bi > 0 && !$u.has(l) && $u.set(l, l.prevState),
    Si.add(l),
    !(bi > 0) && !Qo)
  )
    try {
      for (Qo = !0; Si.size > 0; ) {
        const i = Array.from(Si);
        Si.clear();
        for (const u of i) {
          const o = $u.get(u) ?? u.prevState;
          (u.prevState = o), Dg(u);
        }
        for (const u of i) {
          const o = ur.get(u);
          o && (cc.current.push(u), iy(o));
        }
        for (const u of i) {
          const o = ur.get(u);
          if (o) for (const r of o) wg(r);
        }
      }
    } finally {
      (Qo = !1), (cc.current = []), $u.clear();
    }
}
function pl(l) {
  bi++;
  try {
    l();
  } finally {
    if ((bi--, bi === 0)) {
      const i = Si.values().next().value;
      i && uy(i);
    }
  }
}
function Ug(l) {
  return typeof l == "function";
}
class Lg {
  constructor(i, u) {
    (this.listeners = new Set()),
      (this.subscribe = (o) => {
        var r, d;
        this.listeners.add(o);
        const m =
          (d = (r = this.options) == null ? void 0 : r.onSubscribe) == null
            ? void 0
            : d.call(r, o, this);
        return () => {
          this.listeners.delete(o), m?.();
        };
      }),
      (this.prevState = i),
      (this.state = i),
      (this.options = u);
  }
  setState(i) {
    var u, o, r;
    (this.prevState = this.state),
      (u = this.options) != null && u.updateFn
        ? (this.state = this.options.updateFn(this.prevState)(i))
        : Ug(i)
          ? (this.state = i(this.prevState))
          : (this.state = i),
      (r = (o = this.options) == null ? void 0 : o.onUpdate) == null ||
        r.call(o),
      uy(this);
  }
}
const Fn = "__TSR_index",
  Lm = "popstate",
  Nm = "beforeunload";
function Ng(l) {
  let i = l.getLocation();
  const u = new Set(),
    o = (m) => {
      (i = l.getLocation()), u.forEach((p) => p({ location: i, action: m }));
    },
    r = (m) => {
      (l.notifyOnIndexChange ?? !0) ? o(m) : (i = l.getLocation());
    },
    d = async ({ task: m, navigateOpts: p, ...y }) => {
      if (p?.ignoreBlocker ?? !1) {
        m();
        return;
      }
      const b = l.getBlockers?.() ?? [],
        g = y.type === "PUSH" || y.type === "REPLACE";
      if (typeof document < "u" && b.length && g)
        for (const _ of b) {
          const z = sc(y.path, y.state);
          if (
            await _.blockerFn({
              currentLocation: i,
              nextLocation: z,
              action: y.type,
            })
          ) {
            l.onBlocked?.();
            return;
          }
        }
      m();
    };
  return {
    get location() {
      return i;
    },
    get length() {
      return l.getLength();
    },
    subscribers: u,
    subscribe: (m) => (
      u.add(m),
      () => {
        u.delete(m);
      }
    ),
    push: (m, p, y) => {
      const h = i.state[Fn];
      (p = Bm(h + 1, p)),
        d({
          task: () => {
            l.pushState(m, p), o({ type: "PUSH" });
          },
          navigateOpts: y,
          type: "PUSH",
          path: m,
          state: p,
        });
    },
    replace: (m, p, y) => {
      const h = i.state[Fn];
      (p = Bm(h, p)),
        d({
          task: () => {
            l.replaceState(m, p), o({ type: "REPLACE" });
          },
          navigateOpts: y,
          type: "REPLACE",
          path: m,
          state: p,
        });
    },
    go: (m, p) => {
      d({
        task: () => {
          l.go(m), r({ type: "GO", index: m });
        },
        navigateOpts: p,
        type: "GO",
      });
    },
    back: (m) => {
      d({
        task: () => {
          l.back(m?.ignoreBlocker ?? !1), r({ type: "BACK" });
        },
        navigateOpts: m,
        type: "BACK",
      });
    },
    forward: (m) => {
      d({
        task: () => {
          l.forward(m?.ignoreBlocker ?? !1), r({ type: "FORWARD" });
        },
        navigateOpts: m,
        type: "FORWARD",
      });
    },
    canGoBack: () => i.state[Fn] !== 0,
    createHref: (m) => l.createHref(m),
    block: (m) => {
      if (!l.setBlockers) return () => {};
      const p = l.getBlockers?.() ?? [];
      return (
        l.setBlockers([...p, m]),
        () => {
          const y = l.getBlockers?.() ?? [];
          l.setBlockers?.(y.filter((h) => h !== m));
        }
      );
    },
    flush: () => l.flush?.(),
    destroy: () => l.destroy?.(),
    notify: o,
  };
}
function Bm(l, i) {
  i || (i = {});
  const u = dr();
  return { ...i, key: u, __TSR_key: u, [Fn]: l };
}
function Bg(l) {
  const i = typeof document < "u" ? window : void 0,
    u = i.history.pushState,
    o = i.history.replaceState;
  let r = [];
  const d = () => r,
    m = (Q) => (r = Q),
    p = (Q) => Q,
    y = () =>
      sc(
        `${i.location.pathname}${i.location.search}${i.location.hash}`,
        i.history.state,
      );
  if (!i.history.state?.__TSR_key && !i.history.state?.key) {
    const Q = dr();
    i.history.replaceState({ [Fn]: 0, key: Q, __TSR_key: Q }, "");
  }
  let h = y(),
    b,
    g = !1,
    _ = !1,
    z = !1,
    B = !1;
  const O = () => h;
  let U, Y;
  const Z = () => {
      U &&
        ((G._ignoreSubscribers = !0),
        (U.isPush ? i.history.pushState : i.history.replaceState)(
          U.state,
          "",
          U.href,
        ),
        (G._ignoreSubscribers = !1),
        (U = void 0),
        (Y = void 0),
        (b = void 0));
    },
    X = (Q, I, ft) => {
      const ot = p(I);
      Y || (b = h),
        (h = sc(I, ft)),
        (U = { href: ot, state: ft, isPush: U?.isPush || Q === "push" }),
        Y || (Y = Promise.resolve().then(() => Z()));
    },
    F = (Q) => {
      (h = y()), G.notify({ type: Q });
    },
    at = async () => {
      if (_) {
        _ = !1;
        return;
      }
      const Q = y(),
        I = Q.state[Fn] - h.state[Fn],
        ft = I === 1,
        ot = I === -1,
        Mt = (!ft && !ot) || g;
      g = !1;
      const Gt = Mt ? "GO" : ot ? "BACK" : "FORWARD",
        Xt = Mt ? { type: "GO", index: I } : { type: ot ? "BACK" : "FORWARD" };
      if (z) z = !1;
      else {
        const Ht = d();
        if (typeof document < "u" && Ht.length) {
          for (const L of Ht)
            if (
              await L.blockerFn({
                currentLocation: h,
                nextLocation: Q,
                action: Gt,
              })
            ) {
              (_ = !0), i.history.go(1), G.notify(Xt);
              return;
            }
        }
      }
      (h = y()), G.notify(Xt);
    },
    V = (Q) => {
      if (B) {
        B = !1;
        return;
      }
      let I = !1;
      const ft = d();
      if (typeof document < "u" && ft.length)
        for (const ot of ft) {
          const Mt = ot.enableBeforeUnload ?? !0;
          if (Mt === !0) {
            I = !0;
            break;
          }
          if (typeof Mt == "function" && Mt() === !0) {
            I = !0;
            break;
          }
        }
      if (I) return Q.preventDefault(), (Q.returnValue = "");
    },
    G = Ng({
      getLocation: O,
      getLength: () => i.history.length,
      pushState: (Q, I) => X("push", Q, I),
      replaceState: (Q, I) => X("replace", Q, I),
      back: (Q) => (Q && (z = !0), (B = !0), i.history.back()),
      forward: (Q) => {
        Q && (z = !0), (B = !0), i.history.forward();
      },
      go: (Q) => {
        (g = !0), i.history.go(Q);
      },
      createHref: (Q) => p(Q),
      flush: Z,
      destroy: () => {
        (i.history.pushState = u),
          (i.history.replaceState = o),
          i.removeEventListener(Nm, V, { capture: !0 }),
          i.removeEventListener(Lm, at);
      },
      onBlocked: () => {
        b && h !== b && (h = b);
      },
      getBlockers: d,
      setBlockers: m,
      notifyOnIndexChange: !1,
    });
  return (
    i.addEventListener(Nm, V, { capture: !0 }),
    i.addEventListener(Lm, at),
    (i.history.pushState = function (...Q) {
      const I = u.apply(i.history, Q);
      return G._ignoreSubscribers || F("PUSH"), I;
    }),
    (i.history.replaceState = function (...Q) {
      const I = o.apply(i.history, Q);
      return G._ignoreSubscribers || F("REPLACE"), I;
    }),
    G
  );
}
function sc(l, i) {
  const u = l.indexOf("#"),
    o = l.indexOf("?"),
    r = dr();
  return {
    href: l,
    pathname: l.substring(
      0,
      u > 0 ? (o > 0 ? Math.min(u, o) : u) : o > 0 ? o : l.length,
    ),
    hash: u > -1 ? l.substring(u) : "",
    search: o > -1 ? l.slice(o, u === -1 ? void 0 : u) : "",
    state: i || { [Fn]: 0, key: r, __TSR_key: r },
  };
}
function dr() {
  return (Math.random() + 1).toString(36).substring(7);
}
function oc(l) {
  return l[l.length - 1];
}
function jg(l) {
  return typeof l == "function";
}
function Jn(l, i) {
  return jg(l) ? l(i) : l;
}
const Hg = Object.prototype.hasOwnProperty;
function Ye(l, i) {
  if (l === i) return l;
  const u = i,
    o = qm(l) && qm(u);
  if (!o && !(Mi(l) && Mi(u))) return u;
  const r = o ? l : jm(l);
  if (!r) return u;
  const d = o ? u : jm(u);
  if (!d) return u;
  const m = r.length,
    p = d.length,
    y = o ? new Array(p) : {};
  let h = 0;
  for (let b = 0; b < p; b++) {
    const g = o ? b : d[b],
      _ = l[g],
      z = u[g];
    if (_ === z) {
      (y[g] = _), (o ? b < m : Hg.call(l, g)) && h++;
      continue;
    }
    if (
      _ === null ||
      z === null ||
      typeof _ != "object" ||
      typeof z != "object"
    ) {
      y[g] = z;
      continue;
    }
    const B = Ye(_, z);
    (y[g] = B), B === _ && h++;
  }
  return m === p && h === m ? l : y;
}
function jm(l) {
  const i = [],
    u = Object.getOwnPropertyNames(l);
  for (const r of u) {
    if (!Object.prototype.propertyIsEnumerable.call(l, r)) return !1;
    i.push(r);
  }
  const o = Object.getOwnPropertySymbols(l);
  for (const r of o) {
    if (!Object.prototype.propertyIsEnumerable.call(l, r)) return !1;
    i.push(r);
  }
  return i;
}
function Mi(l) {
  if (!Hm(l)) return !1;
  const i = l.constructor;
  if (typeof i > "u") return !0;
  const u = i.prototype;
  return !(!Hm(u) || !u.hasOwnProperty("isPrototypeOf"));
}
function Hm(l) {
  return Object.prototype.toString.call(l) === "[object Object]";
}
function qm(l) {
  return Array.isArray(l) && l.length === Object.keys(l).length;
}
function Ea(l, i, u) {
  if (l === i) return !0;
  if (typeof l != typeof i) return !1;
  if (Array.isArray(l) && Array.isArray(i)) {
    if (l.length !== i.length) return !1;
    for (let o = 0, r = l.length; o < r; o++) if (!Ea(l[o], i[o], u)) return !1;
    return !0;
  }
  if (Mi(l) && Mi(i)) {
    const o = u?.ignoreUndefined ?? !0;
    if (u?.partial) {
      for (const m in i)
        if ((!o || i[m] !== void 0) && !Ea(l[m], i[m], u)) return !1;
      return !0;
    }
    let r = 0;
    if (!o) r = Object.keys(l).length;
    else for (const m in l) l[m] !== void 0 && r++;
    let d = 0;
    for (const m in i)
      if ((!o || i[m] !== void 0) && (d++, d > r || !Ea(l[m], i[m], u)))
        return !1;
    return r === d;
  }
  return !1;
}
function Aa(l) {
  let i, u;
  const o = new Promise((r, d) => {
    (i = r), (u = d);
  });
  return (
    (o.status = "pending"),
    (o.resolve = (r) => {
      (o.status = "resolved"), (o.value = r), i(r), l?.(r);
    }),
    (o.reject = (r) => {
      (o.status = "rejected"), u(r);
    }),
    o
  );
}
function qg(l) {
  return typeof l?.message != "string"
    ? !1
    : l.message.startsWith("Failed to fetch dynamically imported module") ||
        l.message.startsWith("error loading dynamically imported module") ||
        l.message.startsWith("Importing a module script failed");
}
function Wn(l) {
  return !!(l && typeof l == "object" && typeof l.then == "function");
}
function Ym(l) {
  try {
    return decodeURI(l);
  } catch {
    return l.replaceAll(/%[0-9A-F]{2}/gi, (i) => {
      try {
        return decodeURI(i);
      } catch {
        return i;
      }
    });
  }
}
function Gm(l, i) {
  if (!l) return l;
  const u = /%25|%5C/gi;
  let o = 0,
    r = "",
    d;
  for (; (d = u.exec(l)) !== null; )
    (r += Ym(l.slice(o, d.index)) + d[0]), (o = u.lastIndex);
  return r + Ym(o ? l.slice(o) : l);
}
var Yg = "Invariant failed";
function pe(l, i) {
  if (!l) throw new Error(Yg);
}
function rc(l) {
  const i = new Map();
  let u, o;
  const r = (d) => {
    d.next &&
      (d.prev
        ? ((d.prev.next = d.next),
          (d.next.prev = d.prev),
          (d.next = void 0),
          o && ((o.next = d), (d.prev = o)))
        : ((d.next.prev = void 0),
          (u = d.next),
          (d.next = void 0),
          o && ((d.prev = o), (o.next = d))),
      (o = d));
  };
  return {
    get(d) {
      const m = i.get(d);
      if (m) return r(m), m.value;
    },
    set(d, m) {
      if (i.size >= l && u) {
        const y = u;
        i.delete(y.key),
          y.next && ((u = y.next), (y.next.prev = void 0)),
          y === o && (o = void 0);
      }
      const p = i.get(d);
      if (p) (p.value = m), r(p);
      else {
        const y = { key: d, value: m, prev: o };
        o && (o.next = y), (o = y), u || (u = y), i.set(d, y);
      }
    },
    clear() {
      i.clear(), (u = void 0), (o = void 0);
    },
  };
}
const Sl = 0,
  Ma = 1,
  za = 2,
  zi = 3,
  Gg = /^([^{]*)\{\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,
  Xg = /^([^{]*)\{-\$([a-zA-Z_$][a-zA-Z0-9_$]*)\}([^}]*)$/,
  Vg = /^([^{]*)\{\$\}([^}]*)$/;
function hr(l, i, u = new Uint16Array(6)) {
  const o = l.indexOf("/", i),
    r = o === -1 ? l.length : o,
    d = l.substring(i, r);
  if (!d || !d.includes("$"))
    return (
      (u[0] = Sl), (u[1] = i), (u[2] = i), (u[3] = r), (u[4] = r), (u[5] = r), u
    );
  if (d === "$") {
    const h = l.length;
    return (
      (u[0] = za), (u[1] = i), (u[2] = i), (u[3] = h), (u[4] = h), (u[5] = h), u
    );
  }
  if (d.charCodeAt(0) === 36)
    return (
      (u[0] = Ma),
      (u[1] = i),
      (u[2] = i + 1),
      (u[3] = r),
      (u[4] = r),
      (u[5] = r),
      u
    );
  const m = d.match(Vg);
  if (m) {
    const b = m[1].length;
    return (
      (u[0] = za),
      (u[1] = i + b),
      (u[2] = i + b + 1),
      (u[3] = i + b + 2),
      (u[4] = i + b + 3),
      (u[5] = l.length),
      u
    );
  }
  const p = d.match(Xg);
  if (p) {
    const h = p[1],
      b = p[2],
      g = p[3],
      _ = h.length;
    return (
      (u[0] = zi),
      (u[1] = i + _),
      (u[2] = i + _ + 3),
      (u[3] = i + _ + 3 + b.length),
      (u[4] = r - g.length),
      (u[5] = r),
      u
    );
  }
  const y = d.match(Gg);
  if (y) {
    const h = y[1],
      b = y[2],
      g = y[3],
      _ = h.length;
    return (
      (u[0] = Ma),
      (u[1] = i + _),
      (u[2] = i + _ + 2),
      (u[3] = i + _ + 2 + b.length),
      (u[4] = r - g.length),
      (u[5] = r),
      u
    );
  }
  return (
    (u[0] = Sl), (u[1] = i), (u[2] = i), (u[3] = r), (u[4] = r), (u[5] = r), u
  );
}
function yc(l, i, u, o, r, d, m) {
  m?.(u);
  let p = o;
  {
    const y = u.fullPath ?? u.from,
      h = y.length,
      b = u.options?.caseSensitive ?? l;
    for (; p < h; ) {
      const g = hr(y, p, i);
      let _;
      const z = p,
        B = g[5];
      switch (((p = B + 1), d++, g[0])) {
        case Sl: {
          const U = y.substring(g[2], g[3]);
          if (b) {
            const Y = r.static?.get(U);
            if (Y) _ = Y;
            else {
              r.static ??= new Map();
              const Z = Oi(u.fullPath ?? u.from);
              (Z.parent = r), (Z.depth = d), (_ = Z), r.static.set(U, Z);
            }
          } else {
            const Y = U.toLowerCase(),
              Z = r.staticInsensitive?.get(Y);
            if (Z) _ = Z;
            else {
              r.staticInsensitive ??= new Map();
              const X = Oi(u.fullPath ?? u.from);
              (X.parent = r),
                (X.depth = d),
                (_ = X),
                r.staticInsensitive.set(Y, X);
            }
          }
          break;
        }
        case Ma: {
          const U = y.substring(z, g[1]),
            Y = y.substring(g[4], B),
            Z = b && !!(U || Y),
            X = U ? (Z ? U : U.toLowerCase()) : void 0,
            F = Y ? (Z ? Y : Y.toLowerCase()) : void 0,
            at = r.dynamic?.find(
              (V) => V.caseSensitive === Z && V.prefix === X && V.suffix === F,
            );
          if (at) _ = at;
          else {
            const V = Ko(Ma, u.fullPath ?? u.from, Z, X, F);
            (_ = V),
              (V.depth = d),
              (V.parent = r),
              (r.dynamic ??= []),
              r.dynamic.push(V);
          }
          break;
        }
        case zi: {
          const U = y.substring(z, g[1]),
            Y = y.substring(g[4], B),
            Z = b && !!(U || Y),
            X = U ? (Z ? U : U.toLowerCase()) : void 0,
            F = Y ? (Z ? Y : Y.toLowerCase()) : void 0,
            at = r.optional?.find(
              (V) => V.caseSensitive === Z && V.prefix === X && V.suffix === F,
            );
          if (at) _ = at;
          else {
            const V = Ko(zi, u.fullPath ?? u.from, Z, X, F);
            (_ = V),
              (V.parent = r),
              (V.depth = d),
              (r.optional ??= []),
              r.optional.push(V);
          }
          break;
        }
        case za: {
          const U = y.substring(z, g[1]),
            Y = y.substring(g[4], B),
            Z = b && !!(U || Y),
            X = U ? (Z ? U : U.toLowerCase()) : void 0,
            F = Y ? (Z ? Y : Y.toLowerCase()) : void 0,
            at = Ko(za, u.fullPath ?? u.from, Z, X, F);
          (_ = at),
            (at.parent = r),
            (at.depth = d),
            (r.wildcard ??= []),
            r.wildcard.push(at);
        }
      }
      r = _;
    }
    if ((u.path || !u.children) && !u.isRoot) {
      const g = y.endsWith("/");
      g || (r.notFound = u),
        (!r.route || (!r.isIndex && g)) &&
          ((r.route = u), (r.fullPath = u.fullPath ?? u.from)),
        (r.isIndex ||= g);
    }
  }
  if (u.children) for (const y of u.children) yc(l, i, y, p, r, d, m);
}
function Zo(l, i) {
  if (l.prefix && i.prefix && l.prefix !== i.prefix) {
    if (l.prefix.startsWith(i.prefix)) return -1;
    if (i.prefix.startsWith(l.prefix)) return 1;
  }
  if (l.suffix && i.suffix && l.suffix !== i.suffix) {
    if (l.suffix.endsWith(i.suffix)) return -1;
    if (i.suffix.endsWith(l.suffix)) return 1;
  }
  return l.prefix && !i.prefix
    ? -1
    : !l.prefix && i.prefix
      ? 1
      : l.suffix && !i.suffix
        ? -1
        : !l.suffix && i.suffix
          ? 1
          : l.caseSensitive && !i.caseSensitive
            ? -1
            : !l.caseSensitive && i.caseSensitive
              ? 1
              : 0;
}
function ba(l) {
  if (l.static) for (const i of l.static.values()) ba(i);
  if (l.staticInsensitive) for (const i of l.staticInsensitive.values()) ba(i);
  if (l.dynamic?.length) {
    l.dynamic.sort(Zo);
    for (const i of l.dynamic) ba(i);
  }
  if (l.optional?.length) {
    l.optional.sort(Zo);
    for (const i of l.optional) ba(i);
  }
  if (l.wildcard?.length) {
    l.wildcard.sort(Zo);
    for (const i of l.wildcard) ba(i);
  }
}
function Oi(l) {
  return {
    kind: Sl,
    depth: 0,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: l,
    parent: null,
    isIndex: !1,
    notFound: null,
  };
}
function Ko(l, i, u, o, r) {
  return {
    kind: l,
    depth: 0,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: i,
    parent: null,
    isIndex: !1,
    notFound: null,
    caseSensitive: u,
    prefix: o,
    suffix: r,
  };
}
function Qg(l, i) {
  const u = Oi("/"),
    o = new Uint16Array(6);
  for (const r of l) yc(!1, o, r, 1, u, 0);
  ba(u), (i.masksTree = u), (i.flatCache = rc(1e3));
}
function Zg(l, i) {
  l ||= "/";
  const u = i.flatCache.get(l);
  if (u) return u;
  const o = mr(l, i.masksTree);
  return i.flatCache.set(l, o), o;
}
function Kg(l, i, u, o, r) {
  (l ||= "/"), (o ||= "/");
  const d = i ? `case\0${l}` : l;
  let m = r.singleCache.get(d);
  if (!m) {
    m = Oi("/");
    const p = new Uint16Array(6);
    yc(i, p, { from: l }, 1, m, 0), r.singleCache.set(d, m);
  }
  return mr(o, m, u);
}
function Jg(l, i, u = !1) {
  const o = u ? l : `nofuzz\0${l}`,
    r = i.matchCache.get(o);
  if (r !== void 0) return r;
  l ||= "/";
  const d = mr(l, i.segmentTree, u);
  return d && (d.branch = $g(d.route)), i.matchCache.set(o, d), d;
}
function kg(l) {
  return l === "/" ? l : l.replace(/\/{1,}$/, "");
}
function Fg(l, i = !1, u) {
  const o = Oi(l.fullPath),
    r = new Uint16Array(6),
    d = {},
    m = {};
  let p = 0;
  return (
    yc(i, r, l, 1, o, 0, (h) => {
      if (
        (u?.(h, p),
        pe(!(h.id in d), `Duplicate routes found with id: ${String(h.id)}`),
        (d[h.id] = h),
        p !== 0 && h.path)
      ) {
        const b = kg(h.fullPath);
        (!m[b] || h.fullPath.endsWith("/")) && (m[b] = h);
      }
      p++;
    }),
    ba(o),
    {
      processedTree: {
        segmentTree: o,
        singleCache: rc(1e3),
        matchCache: rc(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: d,
      routesByPath: m,
    }
  );
}
function mr(l, i, u = !1) {
  const o = l.split("/"),
    r = Ig(l, o, i, u);
  if (!r) return null;
  const d = Wg(l, o, r),
    m = "**" in r;
  return (
    m && (d["**"] = r["**"]),
    { route: m ? (r.node.notFound ?? r.node.route) : r.node.route, params: d }
  );
}
function Wg(l, i, u) {
  const o = Pg(u.node);
  let r = null;
  const d = {};
  for (let m = 0, p = 0, y = 0; p < o.length; m++, p++, y++) {
    const h = o[p],
      b = i[m],
      g = y;
    if ((b && (y += b.length), h.kind === Ma)) {
      r ??= u.node.fullPath.split("/");
      const _ = r[p],
        z = h.prefix?.length ?? 0;
      if (_.charCodeAt(z) === 123) {
        const O = h.suffix?.length ?? 0,
          U = _.substring(z + 2, _.length - O - 1),
          Y = b.substring(z, b.length - O);
        d[U] = decodeURIComponent(Y);
      } else {
        const O = _.substring(1);
        d[O] = decodeURIComponent(b);
      }
    } else if (h.kind === zi) {
      if (u.skipped & (1 << p)) {
        m--;
        continue;
      }
      r ??= u.node.fullPath.split("/");
      const _ = r[p],
        z = h.prefix?.length ?? 0,
        B = h.suffix?.length ?? 0,
        O = _.substring(z + 3, _.length - B - 1),
        U = h.suffix || h.prefix ? b.substring(z, b.length - B) : b;
      U && (d[O] = decodeURIComponent(U));
    } else if (h.kind === za) {
      const _ = h,
        z = l.substring(
          g + (_.prefix?.length ?? 0),
          l.length - (_.suffix?.length ?? 0),
        ),
        B = decodeURIComponent(z);
      (d["*"] = B), (d._splat = B);
      break;
    }
  }
  return d;
}
function $g(l) {
  const i = [l];
  for (; l.parentRoute; ) (l = l.parentRoute), i.push(l);
  return i.reverse(), i;
}
function Pg(l) {
  const i = Array(l.depth + 1);
  do (i[l.depth] = l), (l = l.parent);
  while (l);
  return i;
}
function Ig(l, i, u, o) {
  const r = !oc(i),
    d = r && l !== "/",
    m = i.length - (r ? 1 : 0),
    p = [
      {
        node: u,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 1,
        dynamics: 0,
        optionals: 0,
      },
    ];
  let y = null,
    h = null,
    b = null;
  for (; p.length; ) {
    const g = p.pop();
    let {
      node: _,
      index: z,
      skipped: B,
      depth: O,
      statics: U,
      dynamics: Y,
      optionals: Z,
    } = g;
    o && _.notFound && Pu(h, g) && (h = g);
    const X = z === m;
    if (X) {
      if (
        _.route &&
        (!d || _.isIndex) &&
        (Pu(b, g) && (b = g), U === m && _.isIndex)
      )
        return b;
      if (!_.optional && !_.wildcard) continue;
    }
    const F = X ? void 0 : i[z];
    let at;
    if (_.wildcard && Pu(y, g))
      for (const V of _.wildcard) {
        const { prefix: G, suffix: Q } = V;
        if (
          !(
            G &&
            (X ||
              !(V.caseSensitive ? F : (at ??= F.toLowerCase())).startsWith(G))
          )
        ) {
          if (Q) {
            if (X) continue;
            const I = i.slice(z).join("/").slice(-Q.length);
            if ((V.caseSensitive ? I : I.toLowerCase()) !== Q) continue;
          }
          y = {
            node: V,
            index: z,
            skipped: B,
            depth: O,
            statics: U,
            dynamics: Y,
            optionals: Z,
          };
          break;
        }
      }
    if (_.optional) {
      const V = B | (1 << O),
        G = O + 1;
      for (let Q = _.optional.length - 1; Q >= 0; Q--) {
        const I = _.optional[Q];
        p.push({
          node: I,
          index: z,
          skipped: V,
          depth: G,
          statics: U,
          dynamics: Y,
          optionals: Z,
        });
      }
      if (!X)
        for (let Q = _.optional.length - 1; Q >= 0; Q--) {
          const I = _.optional[Q],
            { prefix: ft, suffix: ot } = I;
          if (ft || ot) {
            const Mt = I.caseSensitive ? F : (at ??= F.toLowerCase());
            if ((ft && !Mt.startsWith(ft)) || (ot && !Mt.endsWith(ot)))
              continue;
          }
          p.push({
            node: I,
            index: z + 1,
            skipped: B,
            depth: G,
            statics: U,
            dynamics: Y,
            optionals: Z + 1,
          });
        }
    }
    if (!X && _.dynamic && F)
      for (let V = _.dynamic.length - 1; V >= 0; V--) {
        const G = _.dynamic[V],
          { prefix: Q, suffix: I } = G;
        if (Q || I) {
          const ft = G.caseSensitive ? F : (at ??= F.toLowerCase());
          if ((Q && !ft.startsWith(Q)) || (I && !ft.endsWith(I))) continue;
        }
        p.push({
          node: G,
          index: z + 1,
          skipped: B,
          depth: O + 1,
          statics: U,
          dynamics: Y + 1,
          optionals: Z,
        });
      }
    if (!X && _.staticInsensitive) {
      const V = _.staticInsensitive.get((at ??= F.toLowerCase()));
      V &&
        p.push({
          node: V,
          index: z + 1,
          skipped: B,
          depth: O + 1,
          statics: U + 1,
          dynamics: Y,
          optionals: Z,
        });
    }
    if (!X && _.static) {
      const V = _.static.get(F);
      V &&
        p.push({
          node: V,
          index: z + 1,
          skipped: B,
          depth: O + 1,
          statics: U + 1,
          dynamics: Y,
          optionals: Z,
        });
    }
  }
  if (b && y) return Pu(y, b) ? b : y;
  if (b) return b;
  if (y) return y;
  if (o && h) {
    let g = h.index;
    for (let z = 0; z < h.index; z++) g += i[z].length;
    const _ = g === l.length ? "/" : l.slice(g);
    return { node: h.node, skipped: h.skipped, "**": decodeURIComponent(_) };
  }
  return null;
}
function Pu(l, i) {
  return l
    ? i.statics > l.statics ||
        (i.statics === l.statics &&
          (i.dynamics > l.dynamics ||
            (i.dynamics === l.dynamics &&
              (i.optionals > l.optionals ||
                (i.optionals === l.optionals &&
                  (i.node.isIndex > l.node.isIndex ||
                    (i.node.isIndex === l.node.isIndex &&
                      i.depth > l.depth)))))))
    : !0;
}
function ac(l) {
  return yr(l.filter((i) => i !== void 0).join("/"));
}
function yr(l) {
  return l.replace(/\/{2,}/g, "/");
}
function cy(l) {
  return l === "/" ? l : l.replace(/^\/{1,}/, "");
}
function Ta(l) {
  const i = l.length;
  return i > 1 && l[i - 1] === "/" ? l.replace(/\/{1,}$/, "") : l;
}
function lc(l) {
  return Ta(cy(l));
}
function fc(l, i) {
  return l?.endsWith("/") && l !== "/" && l !== `${i}/` ? l.slice(0, -1) : l;
}
function t0(l, i, u) {
  return fc(l, u) === fc(i, u);
}
function e0({ base: l, to: i, trailingSlash: u = "never", cache: o }) {
  const r = i.startsWith("/"),
    d = !r && i === ".";
  let m;
  if (o) {
    m = r ? i : d ? l : l + "\0" + i;
    const g = o.get(m);
    if (g) return g;
  }
  let p;
  if (d) p = l.split("/");
  else if (r) p = i.split("/");
  else {
    for (p = l.split("/"); p.length > 1 && oc(p) === ""; ) p.pop();
    const g = i.split("/");
    for (let _ = 0, z = g.length; _ < z; _++) {
      const B = g[_];
      B === ""
        ? _
          ? _ === z - 1 && p.push(B)
          : (p = [B])
        : B === ".."
          ? p.pop()
          : B === "." || p.push(B);
    }
  }
  p.length > 1 &&
    (oc(p) === "" ? u === "never" && p.pop() : u === "always" && p.push(""));
  let y,
    h = "";
  for (let g = 0; g < p.length; g++) {
    g > 0 && (h += "/");
    const _ = p[g];
    if (!_) continue;
    y = hr(_, 0, y);
    const z = y[0];
    if (z === Sl) {
      h += _;
      continue;
    }
    const B = y[5],
      O = _.substring(0, y[1]),
      U = _.substring(y[4], B),
      Y = _.substring(y[2], y[3]);
    z === Ma
      ? (h += O || U ? `${O}{$${Y}}${U}` : `$${Y}`)
      : z === za
        ? (h += O || U ? `${O}{$}${U}` : "$")
        : (h += `${O}{-$${Y}}${U}`);
  }
  h = yr(h);
  const b = h || "/";
  return m && o && o.set(m, b), b;
}
function Jo(l, i, u) {
  const o = i[l];
  return typeof o != "string" ? o : l === "_splat" ? encodeURI(o) : n0(o, u);
}
function ko({ path: l, params: i, decodeCharMap: u }) {
  let o = !1;
  const r = {};
  if (!l || l === "/")
    return { interpolatedPath: "/", usedParams: r, isMissingParams: o };
  if (!l.includes("$"))
    return { interpolatedPath: l, usedParams: r, isMissingParams: o };
  const d = l.length;
  let m = 0,
    p,
    y = "";
  for (; m < d; ) {
    const b = m;
    p = hr(l, b, p);
    const g = p[5];
    if (((m = g + 1), b === g)) continue;
    const _ = p[0];
    if (_ === Sl) {
      y += "/" + l.substring(b, g);
      continue;
    }
    if (_ === za) {
      const z = i._splat;
      (r._splat = z), (r["*"] = z);
      const B = l.substring(b, p[1]),
        O = l.substring(p[4], g);
      if (!z) {
        (o = !0), (B || O) && (y += "/" + B + O);
        continue;
      }
      const U = Jo("_splat", i, u);
      y += "/" + B + U + O;
      continue;
    }
    if (_ === Ma) {
      const z = l.substring(p[2], p[3]);
      !o && !(z in i) && (o = !0), (r[z] = i[z]);
      const B = l.substring(b, p[1]),
        O = l.substring(p[4], g),
        U = Jo(z, i, u) ?? "undefined";
      y += "/" + B + U + O;
      continue;
    }
    if (_ === zi) {
      const z = l.substring(p[2], p[3]),
        B = i[z];
      if (B == null) continue;
      r[z] = B;
      const O = l.substring(b, p[1]),
        U = l.substring(p[4], g),
        Y = Jo(z, i, u) ?? "";
      y += "/" + O + Y + U;
      continue;
    }
  }
  return (
    l.endsWith("/") && (y += "/"),
    { usedParams: r, interpolatedPath: y || "/", isMissingParams: o }
  );
}
function n0(l, i) {
  let u = encodeURIComponent(l);
  if (i) for (const [o, r] of i) u = u.replaceAll(o, r);
  return u;
}
function ge(l) {
  return !!l?.isNotFound;
}
function a0() {
  try {
    if (typeof window < "u" && typeof window.sessionStorage == "object")
      return window.sessionStorage;
  } catch {}
}
const dc = "tsr-scroll-restoration-v1_3",
  l0 = (l, i) => {
    let u;
    return (...o) => {
      u ||
        (u = setTimeout(() => {
          l(...o), (u = null);
        }, i));
    };
  };
function i0() {
  const l = a0();
  if (!l) return null;
  const i = l.getItem(dc);
  let u = i ? JSON.parse(i) : {};
  return {
    state: u,
    set: (o) => ((u = Jn(o, u) || u), l.setItem(dc, JSON.stringify(u))),
  };
}
const Iu = i0(),
  cr = (l) => l.state.__TSR_key || l.href;
function u0(l) {
  const i = [];
  let u;
  for (; (u = l.parentNode); )
    i.push(
      `${l.tagName}:nth-child(${Array.prototype.indexOf.call(u.children, l) + 1})`,
    ),
      (l = u);
  return `${i.reverse().join(" > ")}`.toLowerCase();
}
let hc = !1;
function sy({
  storageKey: l,
  key: i,
  behavior: u,
  shouldScrollRestoration: o,
  scrollToTopSelectors: r,
  location: d,
}) {
  let m;
  try {
    m = JSON.parse(sessionStorage.getItem(l) || "{}");
  } catch (h) {
    console.error(h);
    return;
  }
  const p = i || window.history.state?.__TSR_key,
    y = m[p];
  hc = !0;
  t: {
    if (o && y && Object.keys(y).length > 0) {
      for (const g in y) {
        const _ = y[g];
        if (g === "window")
          window.scrollTo({ top: _.scrollY, left: _.scrollX, behavior: u });
        else if (g) {
          const z = document.querySelector(g);
          z && ((z.scrollLeft = _.scrollX), (z.scrollTop = _.scrollY));
        }
      }
      break t;
    }
    const h = (d ?? window.location).hash.split("#", 2)[1];
    if (h) {
      const g = window.history.state?.__hashScrollIntoViewOptions ?? !0;
      if (g) {
        const _ = document.getElementById(h);
        _ && _.scrollIntoView(g);
      }
      break t;
    }
    const b = { top: 0, left: 0, behavior: u };
    if ((window.scrollTo(b), r))
      for (const g of r) {
        if (g === "window") continue;
        const _ = typeof g == "function" ? g() : document.querySelector(g);
        _ && _.scrollTo(b);
      }
  }
  hc = !1;
}
function c0(l, i) {
  if (
    (!Iu && !l.isServer) ||
    ((l.options.scrollRestoration ?? !1) && (l.isScrollRestoring = !0),
    l.isServer || l.isScrollRestorationSetup || !Iu)
  )
    return;
  (l.isScrollRestorationSetup = !0), (hc = !1);
  const o = l.options.getScrollRestorationKey || cr;
  window.history.scrollRestoration = "manual";
  const r = (d) => {
    if (hc || !l.isScrollRestoring) return;
    let m = "";
    if (d.target === document || d.target === window) m = "window";
    else {
      const y = d.target.getAttribute("data-scroll-restoration-id");
      y ? (m = `[data-scroll-restoration-id="${y}"]`) : (m = u0(d.target));
    }
    const p = o(l.state.location);
    Iu.set((y) => {
      const h = (y[p] ||= {}),
        b = (h[m] ||= {});
      if (m === "window")
        (b.scrollX = window.scrollX || 0), (b.scrollY = window.scrollY || 0);
      else if (m) {
        const g = document.querySelector(m);
        g && ((b.scrollX = g.scrollLeft || 0), (b.scrollY = g.scrollTop || 0));
      }
      return y;
    });
  };
  typeof document < "u" && document.addEventListener("scroll", l0(r, 100), !0),
    l.subscribe("onRendered", (d) => {
      const m = o(d.toLocation);
      if (!l.resetNextScroll) {
        l.resetNextScroll = !0;
        return;
      }
      (typeof l.options.scrollRestoration == "function" &&
        !l.options.scrollRestoration({ location: l.latestLocation })) ||
        (sy({
          storageKey: dc,
          key: m,
          behavior: l.options.scrollRestorationBehavior,
          shouldScrollRestoration: l.isScrollRestoring,
          scrollToTopSelectors: l.options.scrollToTopSelectors,
          location: l.history.location,
        }),
        l.isScrollRestoring && Iu.set((p) => ((p[m] ||= {}), p)));
    });
}
function s0(l) {
  if (typeof document < "u" && document.querySelector) {
    const i = l.state.location.state.__hashScrollIntoViewOptions ?? !0;
    if (i && l.state.location.hash !== "") {
      const u = document.getElementById(l.state.location.hash);
      u && u.scrollIntoView(i);
    }
  }
}
function oy(l, i = String) {
  const u = new URLSearchParams();
  for (const o in l) {
    const r = l[o];
    r !== void 0 && u.set(o, i(r));
  }
  return u.toString();
}
function Fo(l) {
  return l
    ? l === "false"
      ? !1
      : l === "true"
        ? !0
        : +l * 0 === 0 && +l + "" === l
          ? +l
          : l
    : "";
}
function o0(l) {
  const i = new URLSearchParams(l),
    u = {};
  for (const [o, r] of i.entries()) {
    const d = u[o];
    d == null
      ? (u[o] = Fo(r))
      : Array.isArray(d)
        ? d.push(Fo(r))
        : (u[o] = [d, Fo(r)]);
  }
  return u;
}
const r0 = d0(JSON.parse),
  f0 = h0(JSON.stringify, JSON.parse);
function d0(l) {
  return (i) => {
    i[0] === "?" && (i = i.substring(1));
    const u = o0(i);
    for (const o in u) {
      const r = u[o];
      if (typeof r == "string")
        try {
          u[o] = l(r);
        } catch {}
    }
    return u;
  };
}
function h0(l, i) {
  const u = typeof i == "function";
  function o(r) {
    if (typeof r == "object" && r !== null)
      try {
        return l(r);
      } catch {}
    else if (u && typeof r == "string")
      try {
        return i(r), l(r);
      } catch {}
    return r;
  }
  return (r) => {
    const d = oy(r, o);
    return d ? `?${d}` : "";
  };
}
const xe = "__root__";
function ry(l) {
  if (
    ((l.statusCode = l.statusCode || l.code || 307),
    !l.reloadDocument && typeof l.href == "string")
  )
    try {
      new URL(l.href), (l.reloadDocument = !0);
    } catch {}
  const i = new Headers(l.headers);
  l.href && i.get("Location") === null && i.set("Location", l.href);
  const u = new Response(null, { status: l.statusCode, headers: i });
  if (((u.options = l), l.throw)) throw u;
  return u;
}
function Ze(l) {
  return l instanceof Response && !!l.options;
}
function m0(l) {
  if (l !== null && typeof l == "object" && l.isSerializedRedirect)
    return ry(l);
}
const ic = (l) => {
    if (!l.rendered) return (l.rendered = !0), l.onReady?.();
  },
  vc = (l, i) =>
    !!(l.preload && !l.router.state.matches.some((u) => u.id === i)),
  fy = (l, i) => {
    const u = l.router.routesById[i.routeId ?? ""] ?? l.router.routeTree;
    !u.options.notFoundComponent &&
      l.router.options?.defaultNotFoundComponent &&
      (u.options.notFoundComponent = l.router.options.defaultNotFoundComponent),
      pe(u.options.notFoundComponent);
    const o = l.matches.find((r) => r.routeId === u.id);
    pe(o, "Could not find match for route: " + u.id),
      l.updateMatch(o.id, (r) => ({
        ...r,
        status: "notFound",
        error: i,
        isFetching: !1,
      })),
      i.routerCode === "BEFORE_LOAD" &&
        u.parentRoute &&
        ((i.routeId = u.parentRoute.id), fy(l, i));
  },
  kn = (l, i, u) => {
    if (!(!Ze(u) && !ge(u))) {
      if (Ze(u) && u.redirectHandled && !u.options.reloadDocument) throw u;
      if (i) {
        i._nonReactive.beforeLoadPromise?.resolve(),
          i._nonReactive.loaderPromise?.resolve(),
          (i._nonReactive.beforeLoadPromise = void 0),
          (i._nonReactive.loaderPromise = void 0);
        const o = Ze(u) ? "redirected" : "notFound";
        (i._nonReactive.error = u),
          l.updateMatch(i.id, (r) => ({
            ...r,
            status: o,
            isFetching: !1,
            error: u,
          })),
          ge(u) && !u.routeId && (u.routeId = i.routeId),
          i._nonReactive.loadPromise?.resolve();
      }
      throw Ze(u)
        ? ((l.rendered = !0),
          (u.options._fromLocation = l.location),
          (u.redirectHandled = !0),
          (u = l.router.resolveRedirect(u)),
          u)
        : (fy(l, u), u);
    }
  },
  dy = (l, i) => {
    const u = l.router.getMatch(i);
    return !!(
      (!l.router.isServer && u._nonReactive.dehydrated) ||
      (l.router.isServer && u.ssr === !1)
    );
  },
  vi = (l, i, u, o) => {
    const { id: r, routeId: d } = l.matches[i],
      m = l.router.looseRoutesById[d];
    if (u instanceof Promise) throw u;
    (u.routerCode = o),
      (l.firstBadMatchIndex ??= i),
      kn(l, l.router.getMatch(r), u);
    try {
      m.options.onError?.(u);
    } catch (p) {
      (u = p), kn(l, l.router.getMatch(r), u);
    }
    l.updateMatch(
      r,
      (p) => (
        p._nonReactive.beforeLoadPromise?.resolve(),
        (p._nonReactive.beforeLoadPromise = void 0),
        p._nonReactive.loadPromise?.resolve(),
        {
          ...p,
          error: u,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    );
  },
  y0 = (l, i, u, o) => {
    const r = l.router.getMatch(i),
      d = l.matches[u - 1]?.id,
      m = d ? l.router.getMatch(d) : void 0;
    if (l.router.isShell()) {
      r.ssr = o.id === xe;
      return;
    }
    if (m?.ssr === !1) {
      r.ssr = !1;
      return;
    }
    const p = (z) => (z === !0 && m?.ssr === "data-only" ? "data-only" : z),
      y = l.router.options.defaultSsr ?? !0;
    if (o.options.ssr === void 0) {
      r.ssr = p(y);
      return;
    }
    if (typeof o.options.ssr != "function") {
      r.ssr = p(o.options.ssr);
      return;
    }
    const { search: h, params: b } = r,
      g = {
        search: tc(h, r.searchError),
        params: tc(b, r.paramsError),
        location: l.location,
        matches: l.matches.map((z) => ({
          index: z.index,
          pathname: z.pathname,
          fullPath: z.fullPath,
          staticData: z.staticData,
          id: z.id,
          routeId: z.routeId,
          search: tc(z.search, z.searchError),
          params: tc(z.params, z.paramsError),
          ssr: z.ssr,
        })),
      },
      _ = o.options.ssr(g);
    if (Wn(_))
      return _.then((z) => {
        r.ssr = p(z ?? y);
      });
    r.ssr = p(_ ?? y);
  },
  hy = (l, i, u, o) => {
    if (o._nonReactive.pendingTimeout !== void 0) return;
    const r = u.options.pendingMs ?? l.router.options.defaultPendingMs;
    if (
      !!(
        l.onReady &&
        !l.router.isServer &&
        !vc(l, i) &&
        (u.options.loader || u.options.beforeLoad || vy(u)) &&
        typeof r == "number" &&
        r !== 1 / 0 &&
        (u.options.pendingComponent ??
          l.router.options?.defaultPendingComponent)
      )
    ) {
      const m = setTimeout(() => {
        ic(l);
      }, r);
      o._nonReactive.pendingTimeout = m;
    }
  },
  v0 = (l, i, u) => {
    const o = l.router.getMatch(i);
    if (!o._nonReactive.beforeLoadPromise && !o._nonReactive.loaderPromise)
      return;
    hy(l, i, u, o);
    const r = () => {
      const d = l.router.getMatch(i);
      d.preload &&
        (d.status === "redirected" || d.status === "notFound") &&
        kn(l, d, d.error);
    };
    return o._nonReactive.beforeLoadPromise
      ? o._nonReactive.beforeLoadPromise.then(r)
      : r();
  },
  p0 = (l, i, u, o) => {
    const r = l.router.getMatch(i),
      d = r._nonReactive.loadPromise;
    r._nonReactive.loadPromise = Aa(() => {
      d?.resolve();
    });
    const { paramsError: m, searchError: p } = r;
    m && vi(l, u, m, "PARSE_PARAMS"),
      p && vi(l, u, p, "VALIDATE_SEARCH"),
      hy(l, i, o, r);
    const y = new AbortController(),
      h = l.matches[u - 1]?.id,
      _ = {
        ...((h ? l.router.getMatch(h) : void 0)?.context ??
          l.router.options.context ??
          void 0),
        ...r.__routeContext,
      };
    let z = !1;
    const B = () => {
        z ||
          ((z = !0),
          l.updateMatch(i, (G) => ({
            ...G,
            isFetching: "beforeLoad",
            fetchCount: G.fetchCount + 1,
            abortController: y,
            context: _,
          })));
      },
      O = () => {
        r._nonReactive.beforeLoadPromise?.resolve(),
          (r._nonReactive.beforeLoadPromise = void 0),
          l.updateMatch(i, (G) => ({ ...G, isFetching: !1 }));
      };
    if (!o.options.beforeLoad) {
      pl(() => {
        B(), O();
      });
      return;
    }
    r._nonReactive.beforeLoadPromise = Aa();
    const { search: U, params: Y, cause: Z } = r,
      X = vc(l, i),
      F = {
        search: U,
        abortController: y,
        params: Y,
        preload: X,
        context: _,
        location: l.location,
        navigate: (G) => l.router.navigate({ ...G, _fromLocation: l.location }),
        buildLocation: l.router.buildLocation,
        cause: X ? "preload" : Z,
        matches: l.matches,
        ...l.router.options.additionalContext,
      },
      at = (G) => {
        if (G === void 0) {
          pl(() => {
            B(), O();
          });
          return;
        }
        (Ze(G) || ge(G)) && (B(), vi(l, u, G, "BEFORE_LOAD")),
          pl(() => {
            B(),
              l.updateMatch(i, (Q) => ({
                ...Q,
                __beforeLoadContext: G,
                context: { ...Q.context, ...G },
              })),
              O();
          });
      };
    let V;
    try {
      if (((V = o.options.beforeLoad(F)), Wn(V)))
        return (
          B(),
          V.catch((G) => {
            vi(l, u, G, "BEFORE_LOAD");
          }).then(at)
        );
    } catch (G) {
      B(), vi(l, u, G, "BEFORE_LOAD");
    }
    at(V);
  },
  g0 = (l, i) => {
    const { id: u, routeId: o } = l.matches[i],
      r = l.router.looseRoutesById[o],
      d = () => {
        if (l.router.isServer) {
          const y = y0(l, u, i, r);
          if (Wn(y)) return y.then(p);
        }
        return p();
      },
      m = () => p0(l, u, i, r),
      p = () => {
        if (dy(l, u)) return;
        const y = v0(l, u, r);
        return Wn(y) ? y.then(m) : m();
      };
    return d();
  },
  _i = (l, i, u) => {
    const o = l.router.getMatch(i);
    if (!o || (!u.options.head && !u.options.scripts && !u.options.headers))
      return;
    const r = {
      matches: l.matches,
      match: o,
      params: o.params,
      loaderData: o.loaderData,
    };
    return Promise.all([
      u.options.head?.(r),
      u.options.scripts?.(r),
      u.options.headers?.(r),
    ]).then(([d, m, p]) => {
      const y = d?.meta,
        h = d?.links,
        b = d?.scripts,
        g = d?.styles;
      return {
        meta: y,
        links: h,
        headScripts: b,
        headers: p,
        scripts: m,
        styles: g,
      };
    });
  },
  my = (l, i, u, o) => {
    const r = l.matchPromises[u - 1],
      {
        params: d,
        loaderDeps: m,
        abortController: p,
        cause: y,
      } = l.router.getMatch(i);
    let h = l.router.options.context ?? {};
    for (let g = 0; g <= u; g++) {
      const _ = l.matches[g];
      if (!_) continue;
      const z = l.router.getMatch(_.id);
      z &&
        (h = {
          ...h,
          ...(z.__routeContext ?? {}),
          ...(z.__beforeLoadContext ?? {}),
        });
    }
    const b = vc(l, i);
    return {
      params: d,
      deps: m,
      preload: !!b,
      parentMatchPromise: r,
      abortController: p,
      context: h,
      location: l.location,
      navigate: (g) => l.router.navigate({ ...g, _fromLocation: l.location }),
      cause: b ? "preload" : y,
      route: o,
      ...l.router.options.additionalContext,
    };
  },
  Xm = async (l, i, u, o) => {
    try {
      const r = l.router.getMatch(i);
      try {
        (!l.router.isServer || r.ssr === !0) && yy(o);
        const d = o.options.loader?.(my(l, i, u, o)),
          m = o.options.loader && Wn(d);
        if (
          (!!(
            m ||
            o._lazyPromise ||
            o._componentsPromise ||
            o.options.head ||
            o.options.scripts ||
            o.options.headers ||
            r._nonReactive.minPendingPromise
          ) && l.updateMatch(i, (g) => ({ ...g, isFetching: "loader" })),
          o.options.loader)
        ) {
          const g = m ? await d : d;
          kn(l, l.router.getMatch(i), g),
            g !== void 0 && l.updateMatch(i, (_) => ({ ..._, loaderData: g }));
        }
        o._lazyPromise && (await o._lazyPromise);
        const y = _i(l, i, o),
          h = y ? await y : void 0,
          b = r._nonReactive.minPendingPromise;
        b && (await b),
          o._componentsPromise && (await o._componentsPromise),
          l.updateMatch(i, (g) => ({
            ...g,
            error: void 0,
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
            ...h,
          }));
      } catch (d) {
        let m = d;
        const p = r._nonReactive.minPendingPromise;
        p && (await p),
          ge(d) && (await o.options.notFoundComponent?.preload?.()),
          kn(l, l.router.getMatch(i), d);
        try {
          o.options.onError?.(d);
        } catch (b) {
          (m = b), kn(l, l.router.getMatch(i), b);
        }
        const y = _i(l, i, o),
          h = y ? await y : void 0;
        l.updateMatch(i, (b) => ({
          ...b,
          error: m,
          status: "error",
          isFetching: !1,
          ...h,
        }));
      }
    } catch (r) {
      const d = l.router.getMatch(i);
      if (d) {
        const m = _i(l, i, o);
        if (m) {
          const p = await m;
          l.updateMatch(i, (y) => ({ ...y, ...p }));
        }
        d._nonReactive.loaderPromise = void 0;
      }
      kn(l, d, r);
    }
  },
  S0 = async (l, i) => {
    const { id: u, routeId: o } = l.matches[i];
    let r = !1,
      d = !1;
    const m = l.router.looseRoutesById[o];
    if (dy(l, u)) {
      if (l.router.isServer) {
        const h = _i(l, u, m);
        if (h) {
          const b = await h;
          l.updateMatch(u, (g) => ({ ...g, ...b }));
        }
        return l.router.getMatch(u);
      }
    } else {
      const h = l.router.getMatch(u);
      if (h._nonReactive.loaderPromise) {
        if (h.status === "success" && !l.sync && !h.preload) return h;
        await h._nonReactive.loaderPromise;
        const b = l.router.getMatch(u),
          g = b._nonReactive.error || b.error;
        g && kn(l, b, g);
      } else {
        const b = Date.now() - h.updatedAt,
          g = vc(l, u),
          _ = g
            ? (m.options.preloadStaleTime ??
              l.router.options.defaultPreloadStaleTime ??
              3e4)
            : (m.options.staleTime ?? l.router.options.defaultStaleTime ?? 0),
          z = m.options.shouldReload,
          B = typeof z == "function" ? z(my(l, u, i, m)) : z,
          O = !!g && !l.router.state.matches.some((X) => X.id === u),
          U = l.router.getMatch(u);
        (U._nonReactive.loaderPromise = Aa()),
          O !== U.preload && l.updateMatch(u, (X) => ({ ...X, preload: O }));
        const { status: Y, invalid: Z } = U;
        if (
          ((r = Y === "success" && (Z || (B ?? b > _))),
          !(g && m.options.preload === !1))
        )
          if (r && !l.sync)
            (d = !0),
              (async () => {
                try {
                  await Xm(l, u, i, m);
                  const X = l.router.getMatch(u);
                  X._nonReactive.loaderPromise?.resolve(),
                    X._nonReactive.loadPromise?.resolve(),
                    (X._nonReactive.loaderPromise = void 0);
                } catch (X) {
                  Ze(X) && (await l.router.navigate(X.options));
                }
              })();
          else if (Y !== "success" || (r && l.sync)) await Xm(l, u, i, m);
          else {
            const X = _i(l, u, m);
            if (X) {
              const F = await X;
              l.updateMatch(u, (at) => ({ ...at, ...F }));
            }
          }
      }
    }
    const p = l.router.getMatch(u);
    d ||
      (p._nonReactive.loaderPromise?.resolve(),
      p._nonReactive.loadPromise?.resolve()),
      clearTimeout(p._nonReactive.pendingTimeout),
      (p._nonReactive.pendingTimeout = void 0),
      d || (p._nonReactive.loaderPromise = void 0),
      (p._nonReactive.dehydrated = void 0);
    const y = d ? p.isFetching : !1;
    return y !== p.isFetching || p.invalid !== !1
      ? (l.updateMatch(u, (h) => ({ ...h, isFetching: y, invalid: !1 })),
        l.router.getMatch(u))
      : p;
  };
async function Vm(l) {
  const i = Object.assign(l, { matchPromises: [] });
  !i.router.isServer &&
    i.router.state.matches.some((u) => u._forcePending) &&
    ic(i);
  try {
    for (let r = 0; r < i.matches.length; r++) {
      const d = g0(i, r);
      Wn(d) && (await d);
    }
    const u = i.firstBadMatchIndex ?? i.matches.length;
    for (let r = 0; r < u; r++) i.matchPromises.push(S0(i, r));
    await Promise.all(i.matchPromises);
    const o = ic(i);
    Wn(o) && (await o);
  } catch (u) {
    if (ge(u) && !i.preload) {
      const o = ic(i);
      throw (Wn(o) && (await o), u);
    }
    if (Ze(u)) throw u;
  }
  return i.matches;
}
async function yy(l) {
  if (
    (!l._lazyLoaded &&
      l._lazyPromise === void 0 &&
      (l.lazyFn
        ? (l._lazyPromise = l.lazyFn().then((i) => {
            const { id: u, ...o } = i.options;
            Object.assign(l.options, o),
              (l._lazyLoaded = !0),
              (l._lazyPromise = void 0);
          }))
        : (l._lazyLoaded = !0)),
    !l._componentsLoaded && l._componentsPromise === void 0)
  ) {
    const i = () => {
      const u = [];
      for (const o of py) {
        const r = l.options[o]?.preload;
        r && u.push(r());
      }
      if (u.length)
        return Promise.all(u).then(() => {
          (l._componentsLoaded = !0), (l._componentsPromise = void 0);
        });
      (l._componentsLoaded = !0), (l._componentsPromise = void 0);
    };
    l._componentsPromise = l._lazyPromise ? l._lazyPromise.then(i) : i();
  }
  return l._componentsPromise;
}
function tc(l, i) {
  return i ? { status: "error", error: i } : { status: "success", value: l };
}
function vy(l) {
  for (const i of py) if (l.options[i]?.preload) return !0;
  return !1;
}
const py = [
  "component",
  "errorComponent",
  "pendingComponent",
  "notFoundComponent",
];
function b0(l) {
  return {
    input: ({ url: i }) => {
      for (const u of l) i = gy(u, i);
      return i;
    },
    output: ({ url: i }) => {
      for (let u = l.length - 1; u >= 0; u--) i = Sy(l[u], i);
      return i;
    },
  };
}
function _0(l) {
  const i = lc(l.basepath),
    u = `/${i}`,
    o = `${u}/`,
    r = l.caseSensitive ? u : u.toLowerCase(),
    d = l.caseSensitive ? o : o.toLowerCase();
  return {
    input: ({ url: m }) => {
      const p = l.caseSensitive ? m.pathname : m.pathname.toLowerCase();
      return (
        p === r
          ? (m.pathname = "/")
          : p.startsWith(d) && (m.pathname = m.pathname.slice(u.length)),
        m
      );
    },
    output: ({ url: m }) => ((m.pathname = ac(["/", i, m.pathname])), m),
  };
}
function gy(l, i) {
  const u = l?.input?.({ url: i });
  if (u) {
    if (typeof u == "string") return new URL(u);
    if (u instanceof URL) return u;
  }
  return i;
}
function Sy(l, i) {
  const u = l?.output?.({ url: i });
  if (u) {
    if (typeof u == "string") return new URL(u);
    if (u instanceof URL) return u;
  }
  return i;
}
function E0(l) {
  return l instanceof Error
    ? { name: l.name, message: l.message }
    : { data: l };
}
function Ra(l) {
  const i = l.resolvedLocation,
    u = l.location,
    o = i?.pathname !== u.pathname,
    r = i?.href !== u.href,
    d = i?.hash !== u.hash;
  return {
    fromLocation: i,
    toLocation: u,
    pathChanged: o,
    hrefChanged: r,
    hashChanged: d,
  };
}
class T0 {
  constructor(i) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.isScrollRestoring = !1),
      (this.isScrollRestorationSetup = !1),
      (this.startTransition = (u) => u()),
      (this.update = (u) => {
        u.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.",
          );
        const o = this.options,
          r = this.basepath ?? o?.basepath ?? "/",
          d = this.basepath === void 0,
          m = o?.rewrite;
        (this.options = { ...o, ...u }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (this.pathParamsDecodeCharMap = this.options
            .pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((_) => [
                  encodeURIComponent(_),
                  _,
                ]),
              )
            : void 0),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            (this.options.history
              ? (this.history = this.options.history)
              : this.isServer || (this.history = Bg())),
          (this.origin = this.options.origin),
          this.origin ||
            (!this.isServer && window?.origin && window.origin !== "null"
              ? (this.origin = window.origin)
              : (this.origin = "http://localhost")),
          this.history && this.updateLatestLocation(),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          !this.__store &&
            this.latestLocation &&
            ((this.__store = new Lg(A0(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (_) => !["redirected"].includes(_.status),
                  ),
                };
              },
            })),
            c0(this));
        let p = !1;
        const y = this.options.basepath ?? "/",
          h = this.options.rewrite;
        if (d || r !== y || m !== h) {
          this.basepath = y;
          const _ = [];
          lc(y) !== "" && _.push(_0({ basepath: y })),
            h && _.push(h),
            (this.rewrite =
              _.length === 0 ? void 0 : _.length === 1 ? _[0] : b0(_)),
            this.history && this.updateLatestLocation(),
            (p = !0);
        }
        p &&
          this.__store &&
          (this.__store.state = {
            ...this.state,
            location: this.latestLocation,
          }),
          typeof window < "u" &&
            "CSS" in window &&
            typeof window.CSS?.supports == "function" &&
            (this.isViewTransitionTypesSupported = window.CSS.supports(
              "selector(:active-view-transition-type(a)",
            ));
      }),
      (this.updateLatestLocation = () => {
        this.latestLocation = this.parseLocation(
          this.history.location,
          this.latestLocation,
        );
      }),
      (this.buildRouteTree = () => {
        const {
          routesById: u,
          routesByPath: o,
          processedTree: r,
        } = Fg(this.routeTree, this.options.caseSensitive, (m, p) => {
          m.init({ originalIndex: p });
        });
        this.options.routeMasks && Qg(this.options.routeMasks, r),
          (this.routesById = u),
          (this.routesByPath = o),
          (this.processedTree = r);
        const d = this.options.notFoundRoute;
        d &&
          (d.init({ originalIndex: 99999999999 }), (this.routesById[d.id] = d));
      }),
      (this.subscribe = (u, o) => {
        const r = { eventType: u, fn: o };
        return (
          this.subscribers.add(r),
          () => {
            this.subscribers.delete(r);
          }
        );
      }),
      (this.emit = (u) => {
        this.subscribers.forEach((o) => {
          o.eventType === u.type && o.fn(u);
        });
      }),
      (this.parseLocation = (u, o) => {
        const r = ({ href: y, state: h }) => {
            const b = new URL(y, this.origin),
              g = gy(this.rewrite, b),
              _ = this.options.parseSearch(g.search),
              z = this.options.stringifySearch(_);
            g.search = z;
            const B = g.href.replace(g.origin, ""),
              { pathname: O, hash: U } = g;
            return {
              href: B,
              publicHref: y,
              url: g.href,
              pathname: Gm(O),
              searchStr: z,
              search: Ye(o?.search, _),
              hash: U.split("#").reverse()[0] ?? "",
              state: Ye(o?.state, h),
            };
          },
          d = r(u),
          { __tempLocation: m, __tempKey: p } = d.state;
        if (m && (!p || p === this.tempLocationKey)) {
          const y = r(m);
          return (
            (y.state.key = d.state.key),
            (y.state.__TSR_key = d.state.__TSR_key),
            delete y.state.__tempLocation,
            { ...y, maskedLocation: d }
          );
        }
        return d;
      }),
      (this.resolvePathCache = rc(1e3)),
      (this.resolvePathWithBase = (u, o) =>
        e0({
          base: u,
          to: yr(o),
          trailingSlash: this.options.trailingSlash,
          cache: this.resolvePathCache,
        })),
      (this.matchRoutes = (u, o, r) =>
        typeof u == "string"
          ? this.matchRoutesInternal({ pathname: u, search: o }, r)
          : this.matchRoutesInternal(u, o)),
      (this.getMatchedRoutes = (u) =>
        M0({
          pathname: u,
          routesById: this.routesById,
          processedTree: this.processedTree,
        })),
      (this.cancelMatch = (u) => {
        const o = this.getMatch(u);
        o &&
          (o.abortController.abort(),
          clearTimeout(o._nonReactive.pendingTimeout),
          (o._nonReactive.pendingTimeout = void 0));
      }),
      (this.cancelMatches = () => {
        const u = this.state.matches.filter((d) => d.status === "pending"),
          o = this.state.matches.filter((d) => d.isFetching === "loader");
        new Set([...(this.state.pendingMatches ?? []), ...u, ...o]).forEach(
          (d) => {
            this.cancelMatch(d.id);
          },
        );
      }),
      (this.buildLocation = (u) => {
        const o = (d = {}) => {
            const m =
                d._fromLocation ||
                this.pendingBuiltLocation ||
                this.latestLocation,
              p = this.matchRoutes(m, { _buildLocation: !0 }),
              y = oc(p);
            d.from;
            const h =
                d.unsafeRelative === "path"
                  ? m.pathname
                  : (d.from ?? y.fullPath),
              b = this.resolvePathWithBase(h, "."),
              g = y.search,
              _ = { ...y.params },
              z = d.to
                ? this.resolvePathWithBase(b, `${d.to}`)
                : this.resolvePathWithBase(b, "."),
              B =
                d.params === !1 || d.params === null
                  ? {}
                  : (d.params ?? !0) === !0
                    ? _
                    : Object.assign(_, Jn(d.params, _)),
              O = ko({ path: z, params: B }).interpolatedPath,
              U = this.matchRoutes(O, void 0, { _buildLocation: !0 }).map(
                (ft) => this.looseRoutesById[ft.routeId],
              );
            if (Object.keys(B).length > 0)
              for (const ft of U) {
                const ot =
                  ft.options.params?.stringify ?? ft.options.stringifyParams;
                ot && Object.assign(B, ot(B));
              }
            const Y = u.leaveParams
              ? z
              : Gm(
                  ko({
                    path: z,
                    params: B,
                    decodeCharMap: this.pathParamsDecodeCharMap,
                  }).interpolatedPath,
                );
            let Z = g;
            if (u._includeValidateSearch && this.options.search?.strict) {
              const ft = {};
              U.forEach((ot) => {
                if (ot.options.validateSearch)
                  try {
                    Object.assign(
                      ft,
                      sr(ot.options.validateSearch, { ...ft, ...Z }),
                    );
                  } catch {}
              }),
                (Z = ft);
            }
            (Z = z0({
              search: Z,
              dest: d,
              destRoutes: U,
              _includeValidateSearch: u._includeValidateSearch,
            })),
              (Z = Ye(g, Z));
            const X = this.options.stringifySearch(Z),
              F = d.hash === !0 ? m.hash : d.hash ? Jn(d.hash, m.hash) : void 0,
              at = F ? `#${F}` : "";
            let V =
              d.state === !0 ? m.state : d.state ? Jn(d.state, m.state) : {};
            V = Ye(m.state, V);
            const G = `${Y}${X}${at}`,
              Q = new URL(G, this.origin),
              I = Sy(this.rewrite, Q);
            return {
              publicHref: I.pathname + I.search + I.hash,
              href: G,
              url: I.href,
              pathname: Y,
              search: Z,
              searchStr: X,
              state: V,
              hash: F ?? "",
              unmaskOnReload: d.unmaskOnReload,
            };
          },
          r = (d = {}, m) => {
            const p = o(d);
            let y = m ? o(m) : void 0;
            if (!y) {
              const h = {};
              if (this.options.routeMasks) {
                const b = Zg(p.pathname, this.processedTree);
                if (b) {
                  Object.assign(h, b.params);
                  const { from: g, params: _, ...z } = b.route,
                    B =
                      _ === !1 || _ === null
                        ? {}
                        : (_ ?? !0) === !0
                          ? h
                          : Object.assign(h, Jn(_, h));
                  (m = { from: u.from, ...z, params: B }), (y = o(m));
                }
              }
            }
            return y && (p.maskedLocation = y), p;
          };
        return u.mask ? r(u, { from: u.from, ...u.mask }) : r(u);
      }),
      (this.commitLocation = ({
        viewTransition: u,
        ignoreBlocker: o,
        ...r
      }) => {
        const d = () => {
            const y = [
              "key",
              "__TSR_key",
              "__TSR_index",
              "__hashScrollIntoViewOptions",
            ];
            y.forEach((b) => {
              r.state[b] = this.latestLocation.state[b];
            });
            const h = Ea(r.state, this.latestLocation.state);
            return (
              y.forEach((b) => {
                delete r.state[b];
              }),
              h
            );
          },
          m = Ta(this.latestLocation.href) === Ta(r.href),
          p = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = Aa(() => {
            p?.resolve();
          })),
          m && d())
        )
          this.load();
        else {
          let { maskedLocation: y, hashScrollIntoView: h, ...b } = r;
          y &&
            ((b = {
              ...y,
              state: {
                ...y.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...b,
                  search: b.searchStr,
                  state: {
                    ...b.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    __TSR_key: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (b.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (b.state.__tempKey = this.tempLocationKey)),
            (b.state.__hashScrollIntoViewOptions =
              h ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = u),
            this.history[r.replace ? "replace" : "push"](
              b.publicHref,
              b.state,
              { ignoreBlocker: o },
            );
        }
        return (
          (this.resetNextScroll = r.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: u,
        resetScroll: o,
        hashScrollIntoView: r,
        viewTransition: d,
        ignoreBlocker: m,
        href: p,
        ...y
      } = {}) => {
        if (p) {
          const g = this.history.location.state.__TSR_index,
            _ = sc(p, { __TSR_index: u ? g : g + 1 });
          (y.to = _.pathname),
            (y.search = this.options.parseSearch(_.search)),
            (y.hash = _.hash.slice(1));
        }
        const h = this.buildLocation({ ...y, _includeValidateSearch: !0 });
        this.pendingBuiltLocation = h;
        const b = this.commitLocation({
          ...h,
          viewTransition: d,
          replace: u,
          resetScroll: o,
          hashScrollIntoView: r,
          ignoreBlocker: m,
        });
        return (
          Promise.resolve().then(() => {
            this.pendingBuiltLocation === h &&
              (this.pendingBuiltLocation = void 0);
          }),
          b
        );
      }),
      (this.navigate = async ({ to: u, reloadDocument: o, href: r, ...d }) => {
        if (!o && r)
          try {
            new URL(`${r}`), (o = !0);
          } catch {}
        if (o) {
          if (
            (r || (r = this.buildLocation({ to: u, ...d }).url),
            !d.ignoreBlocker)
          ) {
            const p = this.history.getBlockers?.() ?? [];
            for (const y of p)
              if (
                y?.blockerFn &&
                (await y.blockerFn({
                  currentLocation: this.latestLocation,
                  nextLocation: this.latestLocation,
                  action: "PUSH",
                }))
              )
                return Promise.resolve();
          }
          return (
            d.replace ? window.location.replace(r) : (window.location.href = r),
            Promise.resolve()
          );
        }
        return this.buildAndCommitLocation({
          ...d,
          href: r,
          to: u,
          _isNavigate: !0,
        });
      }),
      (this.beforeLoad = () => {
        if (
          (this.cancelMatches(), this.updateLatestLocation(), this.isServer)
        ) {
          const o = this.buildLocation({
              to: this.latestLocation.pathname,
              search: !0,
              params: !0,
              hash: !0,
              state: !0,
              _includeValidateSearch: !0,
            }),
            r = (d) => {
              try {
                return encodeURI(decodeURI(d));
              } catch {
                return d;
              }
            };
          if (lc(r(this.latestLocation.href)) !== lc(r(o.href))) {
            let d = o.url;
            throw (
              (this.origin &&
                d.startsWith(this.origin) &&
                (d = d.replace(this.origin, "") || "/"),
              ry({ href: d }))
            );
          }
        }
        const u = this.matchRoutes(this.latestLocation);
        this.__store.setState((o) => ({
          ...o,
          status: "pending",
          statusCode: 200,
          isLoading: !0,
          location: this.latestLocation,
          pendingMatches: u,
          cachedMatches: o.cachedMatches.filter(
            (r) => !u.some((d) => d.id === r.id),
          ),
        }));
      }),
      (this.load = async (u) => {
        let o, r, d;
        for (
          d = new Promise((p) => {
            this.startTransition(async () => {
              try {
                this.beforeLoad();
                const y = this.latestLocation,
                  h = this.state.resolvedLocation;
                this.state.redirect ||
                  this.emit({
                    type: "onBeforeNavigate",
                    ...Ra({ resolvedLocation: h, location: y }),
                  }),
                  this.emit({
                    type: "onBeforeLoad",
                    ...Ra({ resolvedLocation: h, location: y }),
                  }),
                  await Vm({
                    router: this,
                    sync: u?.sync,
                    matches: this.state.pendingMatches,
                    location: y,
                    updateMatch: this.updateMatch,
                    onReady: async () => {
                      this.startTransition(() => {
                        this.startViewTransition(async () => {
                          let b = [],
                            g = [],
                            _ = [];
                          pl(() => {
                            this.__store.setState((z) => {
                              const B = z.matches,
                                O = z.pendingMatches || z.matches;
                              return (
                                (b = B.filter(
                                  (U) => !O.some((Y) => Y.id === U.id),
                                )),
                                (g = O.filter(
                                  (U) => !B.some((Y) => Y.id === U.id),
                                )),
                                (_ = O.filter((U) =>
                                  B.some((Y) => Y.id === U.id),
                                )),
                                {
                                  ...z,
                                  isLoading: !1,
                                  loadedAt: Date.now(),
                                  matches: O,
                                  pendingMatches: void 0,
                                  cachedMatches: [
                                    ...z.cachedMatches,
                                    ...b.filter(
                                      (U) =>
                                        U.status !== "error" &&
                                        U.status !== "notFound",
                                    ),
                                  ],
                                }
                              );
                            }),
                              this.clearExpiredCache();
                          }),
                            [
                              [b, "onLeave"],
                              [g, "onEnter"],
                              [_, "onStay"],
                            ].forEach(([z, B]) => {
                              z.forEach((O) => {
                                this.looseRoutesById[O.routeId].options[B]?.(O);
                              });
                            });
                        });
                      });
                    },
                  });
              } catch (y) {
                Ze(y)
                  ? ((o = y),
                    this.isServer ||
                      this.navigate({
                        ...o.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                  : ge(y) && (r = y),
                  this.__store.setState((h) => ({
                    ...h,
                    statusCode: o
                      ? o.status
                      : r
                        ? 404
                        : h.matches.some((b) => b.status === "error")
                          ? 500
                          : 200,
                    redirect: o,
                  }));
              }
              this.latestLoadPromise === d &&
                (this.commitLocationPromise?.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                p();
            });
          }),
            this.latestLoadPromise = d,
            await d;
          this.latestLoadPromise && d !== this.latestLoadPromise;
        )
          await this.latestLoadPromise;
        let m;
        this.hasNotFoundMatch()
          ? (m = 404)
          : this.__store.state.matches.some((p) => p.status === "error") &&
            (m = 500),
          m !== void 0 &&
            this.__store.setState((p) => ({ ...p, statusCode: m }));
      }),
      (this.startViewTransition = (u) => {
        const o =
          this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          o &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            typeof document.startViewTransition == "function")
        ) {
          let r;
          if (typeof o == "object" && this.isViewTransitionTypesSupported) {
            const d = this.latestLocation,
              m = this.state.resolvedLocation,
              p =
                typeof o.types == "function"
                  ? o.types(Ra({ resolvedLocation: m, location: d }))
                  : o.types;
            if (p === !1) {
              u();
              return;
            }
            r = { update: u, types: p };
          } else r = u;
          document.startViewTransition(r);
        } else u();
      }),
      (this.updateMatch = (u, o) => {
        this.startTransition(() => {
          const r = this.state.pendingMatches?.some((d) => d.id === u)
            ? "pendingMatches"
            : this.state.matches.some((d) => d.id === u)
              ? "matches"
              : this.state.cachedMatches.some((d) => d.id === u)
                ? "cachedMatches"
                : "";
          r &&
            this.__store.setState((d) => ({
              ...d,
              [r]: d[r]?.map((m) => (m.id === u ? o(m) : m)),
            }));
        });
      }),
      (this.getMatch = (u) => {
        const o = (r) => r.id === u;
        return (
          this.state.cachedMatches.find(o) ??
          this.state.pendingMatches?.find(o) ??
          this.state.matches.find(o)
        );
      }),
      (this.invalidate = (u) => {
        const o = (r) =>
          (u?.filter?.(r) ?? !0)
            ? {
                ...r,
                invalid: !0,
                ...(u?.forcePending ||
                r.status === "error" ||
                r.status === "notFound"
                  ? { status: "pending", error: void 0 }
                  : void 0),
              }
            : r;
        return (
          this.__store.setState((r) => ({
            ...r,
            matches: r.matches.map(o),
            cachedMatches: r.cachedMatches.map(o),
            pendingMatches: r.pendingMatches?.map(o),
          })),
          (this.shouldViewTransition = !1),
          this.load({ sync: u?.sync })
        );
      }),
      (this.resolveRedirect = (u) => {
        if (!u.options.href) {
          const o = this.buildLocation(u.options);
          let r = o.url;
          this.origin &&
            r.startsWith(this.origin) &&
            (r = r.replace(this.origin, "") || "/"),
            (u.options.href = o.href),
            u.headers.set("Location", r);
        }
        return (
          u.headers.get("Location") ||
            u.headers.set("Location", u.options.href),
          u
        );
      }),
      (this.clearCache = (u) => {
        const o = u?.filter;
        o !== void 0
          ? this.__store.setState((r) => ({
              ...r,
              cachedMatches: r.cachedMatches.filter((d) => !o(d)),
            }))
          : this.__store.setState((r) => ({ ...r, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const u = (o) => {
          const r = this.looseRoutesById[o.routeId];
          if (!r.options.loader) return !0;
          const d =
            (o.preload
              ? (r.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (r.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
          return o.status === "error" ? !0 : Date.now() - o.updatedAt >= d;
        };
        this.clearCache({ filter: u });
      }),
      (this.loadRouteChunk = yy),
      (this.preloadRoute = async (u) => {
        const o = this.buildLocation(u);
        let r = this.matchRoutes(o, { throwOnError: !0, preload: !0, dest: u });
        const d = new Set(
            [...this.state.matches, ...(this.state.pendingMatches ?? [])].map(
              (p) => p.id,
            ),
          ),
          m = new Set([...d, ...this.state.cachedMatches.map((p) => p.id)]);
        pl(() => {
          r.forEach((p) => {
            m.has(p.id) ||
              this.__store.setState((y) => ({
                ...y,
                cachedMatches: [...y.cachedMatches, p],
              }));
          });
        });
        try {
          return (
            (r = await Vm({
              router: this,
              matches: r,
              location: o,
              preload: !0,
              updateMatch: (p, y) => {
                d.has(p)
                  ? (r = r.map((h) => (h.id === p ? y(h) : h)))
                  : this.updateMatch(p, y);
              },
            })),
            r
          );
        } catch (p) {
          if (Ze(p))
            return p.options.reloadDocument
              ? void 0
              : await this.preloadRoute({ ...p.options, _fromLocation: o });
          ge(p) || console.error(p);
          return;
        }
      }),
      (this.matchRoute = (u, o) => {
        const r = {
            ...u,
            to: u.to ? this.resolvePathWithBase(u.from || "", u.to) : void 0,
            params: u.params || {},
            leaveParams: !0,
          },
          d = this.buildLocation(r);
        if (o?.pending && this.state.status !== "pending") return !1;
        const p = (o?.pending === void 0 ? !this.state.isLoading : o.pending)
            ? this.latestLocation
            : this.state.resolvedLocation || this.state.location,
          y = Kg(
            d.pathname,
            o?.caseSensitive ?? !1,
            o?.fuzzy ?? !1,
            p.pathname,
            this.processedTree,
          );
        return !y || (u.params && !Ea(y.params, u.params, { partial: !0 }))
          ? !1
          : (o?.includeSearch ?? !0)
            ? Ea(p.search, d.search, { partial: !0 })
              ? y.params
              : !1
            : y.params;
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some(
          (u) => u.status === "notFound" || u.globalNotFound,
        )),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...i,
        caseSensitive: i.caseSensitive ?? !1,
        notFoundMode: i.notFoundMode ?? "fuzzy",
        stringifySearch: i.stringifySearch ?? f0,
        parseSearch: i.parseSearch ?? r0,
      }),
      typeof document < "u" && (self.__TSR_ROUTER__ = this);
  }
  isShell() {
    return !!this.options.isShell;
  }
  isPrerendering() {
    return !!this.options.isPrerendering;
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutesInternal(i, u) {
    const o = this.getMatchedRoutes(i.pathname),
      { foundRoute: r, routeParams: d } = o;
    let { matchedRoutes: m } = o,
      p = !1;
    (r ? r.path !== "/" && d["**"] : Ta(i.pathname)) &&
      (this.options.notFoundRoute
        ? (m = [...m, this.options.notFoundRoute])
        : (p = !0));
    const y = (() => {
        if (p) {
          if (this.options.notFoundMode !== "root")
            for (let g = m.length - 1; g >= 0; g--) {
              const _ = m[g];
              if (_.children) return _.id;
            }
          return xe;
        }
      })(),
      h = [],
      b = (g) =>
        g?.id
          ? (g.context ?? this.options.context ?? void 0)
          : (this.options.context ?? void 0);
    return (
      m.forEach((g, _) => {
        const z = h[_ - 1],
          [B, O, U] = (() => {
            const Gt = z?.search ?? i.search,
              Xt = z?._strictSearch ?? void 0;
            try {
              const Ht = sr(g.options.validateSearch, { ...Gt }) ?? void 0;
              return [{ ...Gt, ...Ht }, { ...Xt, ...Ht }, void 0];
            } catch (Ht) {
              let L = Ht;
              if (
                (Ht instanceof mc || (L = new mc(Ht.message, { cause: Ht })),
                u?.throwOnError)
              )
                throw L;
              return [Gt, {}, L];
            }
          })(),
          Y = g.options.loaderDeps?.({ search: B }) ?? "",
          Z = Y ? JSON.stringify(Y) : "",
          { interpolatedPath: X, usedParams: F } = ko({
            path: g.fullPath,
            params: d,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          at = g.id + X + Z,
          V = this.getMatch(at),
          G = this.state.matches.find((Gt) => Gt.routeId === g.id),
          Q = V?._strictParams ?? F;
        let I;
        if (!V) {
          const Gt = g.options.params?.parse ?? g.options.parseParams;
          if (Gt)
            try {
              Object.assign(Q, Gt(Q));
            } catch (Xt) {
              if (
                (ge(Xt) || Ze(Xt)
                  ? (I = Xt)
                  : (I = new R0(Xt.message, { cause: Xt })),
                u?.throwOnError)
              )
                throw I;
            }
        }
        Object.assign(d, Q);
        const ft = G ? "stay" : "enter";
        let ot;
        if (V)
          ot = {
            ...V,
            cause: ft,
            params: G ? Ye(G.params, d) : d,
            _strictParams: Q,
            search: Ye(G ? G.search : V.search, B),
            _strictSearch: O,
          };
        else {
          const Gt =
            g.options.loader || g.options.beforeLoad || g.lazyFn || vy(g)
              ? "pending"
              : "success";
          ot = {
            id: at,
            ssr: this.isServer ? void 0 : g.options.ssr,
            index: _,
            routeId: g.id,
            params: G ? Ye(G.params, d) : d,
            _strictParams: Q,
            pathname: X,
            updatedAt: Date.now(),
            search: G ? Ye(G.search, B) : B,
            _strictSearch: O,
            searchError: void 0,
            status: Gt,
            isFetching: !1,
            error: void 0,
            paramsError: I,
            __routeContext: void 0,
            _nonReactive: { loadPromise: Aa() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ft,
            loaderDeps: G ? Ye(G.loaderDeps, Y) : Y,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: g.options.staticData || {},
            fullPath: g.fullPath,
          };
        }
        u?.preload || (ot.globalNotFound = y === g.id), (ot.searchError = U);
        const Mt = b(z);
        (ot.context = {
          ...Mt,
          ...ot.__routeContext,
          ...ot.__beforeLoadContext,
        }),
          h.push(ot);
      }),
      h.forEach((g, _) => {
        const z = this.looseRoutesById[g.routeId];
        if (!this.getMatch(g.id) && u?._buildLocation !== !0) {
          const O = h[_ - 1],
            U = b(O);
          if (z.options.context) {
            const Y = {
              deps: g.loaderDeps,
              params: g.params,
              context: U ?? {},
              location: i,
              navigate: (Z) => this.navigate({ ...Z, _fromLocation: i }),
              buildLocation: this.buildLocation,
              cause: g.cause,
              abortController: g.abortController,
              preload: !!g.preload,
              matches: h,
            };
            g.__routeContext = z.options.context(Y) ?? void 0;
          }
          g.context = { ...U, ...g.__routeContext, ...g.__beforeLoadContext };
        }
      }),
      h
    );
  }
}
class mc extends Error {}
class R0 extends Error {}
function A0(l) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: l,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function sr(l, i) {
  if (l == null) return {};
  if ("~standard" in l) {
    const u = l["~standard"].validate(i);
    if (u instanceof Promise) throw new mc("Async validation not supported");
    if (u.issues)
      throw new mc(JSON.stringify(u.issues, void 0, 2), { cause: u });
    return u.value;
  }
  return "parse" in l ? l.parse(i) : typeof l == "function" ? l(i) : {};
}
function M0({ pathname: l, routesById: i, processedTree: u }) {
  const o = {},
    r = Ta(l);
  let d;
  const m = Jg(r, u, !0);
  return (
    m && ((d = m.route), Object.assign(o, m.params)),
    { matchedRoutes: m?.branch || [i[xe]], routeParams: o, foundRoute: d }
  );
}
function z0({ search: l, dest: i, destRoutes: u, _includeValidateSearch: o }) {
  const r =
      u.reduce((p, y) => {
        const h = [];
        if ("search" in y.options)
          y.options.search?.middlewares &&
            h.push(...y.options.search.middlewares);
        else if (y.options.preSearchFilters || y.options.postSearchFilters) {
          const b = ({ search: g, next: _ }) => {
            let z = g;
            "preSearchFilters" in y.options &&
              y.options.preSearchFilters &&
              (z = y.options.preSearchFilters.reduce((O, U) => U(O), g));
            const B = _(z);
            return "postSearchFilters" in y.options &&
              y.options.postSearchFilters
              ? y.options.postSearchFilters.reduce((O, U) => U(O), B)
              : B;
          };
          h.push(b);
        }
        if (o && y.options.validateSearch) {
          const b = ({ search: g, next: _ }) => {
            const z = _(g);
            try {
              return { ...z, ...(sr(y.options.validateSearch, z) ?? void 0) };
            } catch {
              return z;
            }
          };
          h.push(b);
        }
        return p.concat(h);
      }, []) ?? [],
    d = ({ search: p }) =>
      i.search ? (i.search === !0 ? p : Jn(i.search, p)) : {};
  r.push(d);
  const m = (p, y) => {
    if (p >= r.length) return y;
    const h = r[p];
    return h({ search: y, next: (g) => m(p + 1, g) });
  };
  return m(0, l);
}
const We = Symbol.for("TSR_DEFERRED_PROMISE");
function O0(l, i) {
  const u = l;
  return (
    u[We] ||
      ((u[We] = { status: "pending" }),
      u
        .then((o) => {
          (u[We].status = "success"), (u[We].data = o);
        })
        .catch((o) => {
          (u[We].status = "error"),
            (u[We].error = { data: E0(o), __isServerError: !0 });
        })),
    u
  );
}
const x0 = "Error preloading route! ☝️";
class by {
  constructor(i) {
    if (
      ((this.init = (u) => {
        this.originalIndex = u.originalIndex;
        const o = this.options,
          r = !o?.path && !o?.id;
        (this.parentRoute = this.options.getParentRoute?.()),
          r ? (this._path = xe) : this.parentRoute || pe(!1);
        let d = r ? xe : o?.path;
        d && d !== "/" && (d = cy(d));
        const m = o?.id || d;
        let p = r
          ? xe
          : ac([this.parentRoute.id === xe ? "" : this.parentRoute.id, m]);
        d === xe && (d = "/"), p !== xe && (p = ac(["/", p]));
        const y = p === xe ? "/" : ac([this.parentRoute.fullPath, d]);
        (this._path = d), (this._id = p), (this._fullPath = y), (this._to = y);
      }),
      (this.addChildren = (u) => this._addFileChildren(u)),
      (this._addFileChildren = (u) => (
        Array.isArray(u) && (this.children = u),
        typeof u == "object" &&
          u !== null &&
          (this.children = Object.values(u)),
        this
      )),
      (this._addFileTypes = () => this),
      (this.updateLoader = (u) => (Object.assign(this.options, u), this)),
      (this.update = (u) => (Object.assign(this.options, u), this)),
      (this.lazy = (u) => ((this.lazyFn = u), this)),
      (this.options = i || {}),
      (this.isRoot = !i?.getParentRoute),
      i?.id && i?.path)
    )
      throw new Error("Route cannot have both an 'id' and a 'path' option.");
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
}
class C0 extends by {
  constructor(i) {
    super(i);
  }
}
var D0 = ((l) => (
    (l[(l.AggregateError = 1)] = "AggregateError"),
    (l[(l.ArrowFunction = 2)] = "ArrowFunction"),
    (l[(l.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (l[(l.ObjectAssign = 8)] = "ObjectAssign"),
    (l[(l.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    l
  ))(D0 || {}),
  $n = Symbol.asyncIterator,
  _y = Symbol.hasInstance,
  Ei = Symbol.isConcatSpreadable,
  Pn = Symbol.iterator,
  Ey = Symbol.match,
  Ty = Symbol.matchAll,
  Ry = Symbol.replace,
  Ay = Symbol.search,
  My = Symbol.species,
  zy = Symbol.split,
  Oy = Symbol.toPrimitive,
  Ti = Symbol.toStringTag,
  xy = Symbol.unscopables,
  Cy = {
    [$n]: 0,
    [_y]: 1,
    [Ei]: 2,
    [Pn]: 3,
    [Ey]: 4,
    [Ty]: 5,
    [Ry]: 6,
    [Ay]: 7,
    [My]: 8,
    [zy]: 9,
    [Oy]: 10,
    [Ti]: 11,
    [xy]: 12,
  },
  w0 = {
    0: $n,
    1: _y,
    2: Ei,
    3: Pn,
    4: Ey,
    5: Ty,
    6: Ry,
    7: Ay,
    8: My,
    9: zy,
    10: Oy,
    11: Ti,
    12: xy,
  },
  U0 = {
    2: !0,
    3: !1,
    1: void 0,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN,
  },
  L0 = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  N0 = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  },
  S = void 0;
function Et(l, i, u, o, r, d, m, p, y, h, b, g) {
  return { t: l, i, s: u, l: o, c: r, m: d, p: m, e: p, a: y, f: h, b, o: g };
}
function In(l) {
  return Et(2, S, l, S, S, S, S, S, S, S, S, S);
}
var Dy = In(2),
  wy = In(3),
  B0 = In(1),
  j0 = In(0),
  H0 = In(4),
  q0 = In(5),
  Y0 = In(6),
  G0 = In(7);
function X0(l) {
  switch (l) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function ta(l) {
  let i = "",
    u = 0,
    o;
  for (let r = 0, d = l.length; r < d; r++)
    (o = X0(l[r])), o && ((i += l.slice(u, r) + o), (u = r + 1));
  return u === 0 ? (i = l) : (i += l.slice(u)), i;
}
function V0(l) {
  switch (l) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return l;
  }
}
function ea(l) {
  return l.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, V0);
}
var ec = "__SEROVAL_REFS__",
  Uy = new Map(),
  vl = new Map();
function Ly(l) {
  return Uy.has(l);
}
function Q0(l) {
  return vl.has(l);
}
function Z0(l) {
  if (Ly(l)) return Uy.get(l);
  throw new ES(l);
}
function K0(l) {
  if (Q0(l)) return vl.get(l);
  throw new TS(l);
}
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, ec, {
      value: vl,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
    ? Object.defineProperty(window, ec, {
        value: vl,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < "u"
      ? Object.defineProperty(self, ec, {
          value: vl,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < "u" &&
        Object.defineProperty(global, ec, {
          value: vl,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function vr(l) {
  return l instanceof EvalError
    ? 1
    : l instanceof RangeError
      ? 2
      : l instanceof ReferenceError
        ? 3
        : l instanceof SyntaxError
          ? 4
          : l instanceof TypeError
            ? 5
            : l instanceof URIError
              ? 6
              : 0;
}
function J0(l) {
  let i = L0[vr(l)];
  return l.name !== i
    ? { name: l.name }
    : l.constructor.name !== i
      ? { name: l.constructor.name }
      : {};
}
function Ny(l, i) {
  let u = J0(l),
    o = Object.getOwnPropertyNames(l);
  for (let r = 0, d = o.length, m; r < d; r++)
    (m = o[r]),
      m !== "name" &&
        m !== "message" &&
        (m === "stack"
          ? i & 4 && ((u = u || {}), (u[m] = l[m]))
          : ((u = u || {}), (u[m] = l[m])));
  return u;
}
function By(l) {
  return Object.isFrozen(l)
    ? 3
    : Object.isSealed(l)
      ? 2
      : Object.isExtensible(l)
        ? 0
        : 1;
}
function k0(l) {
  switch (l) {
    case Number.POSITIVE_INFINITY:
      return q0;
    case Number.NEGATIVE_INFINITY:
      return Y0;
  }
  return l !== l
    ? G0
    : Object.is(l, -0)
      ? H0
      : Et(0, S, l, S, S, S, S, S, S, S, S, S);
}
function jy(l) {
  return Et(1, S, ta(l), S, S, S, S, S, S, S, S, S);
}
function F0(l) {
  return Et(3, S, "" + l, S, S, S, S, S, S, S, S, S);
}
function W0(l) {
  return Et(4, l, S, S, S, S, S, S, S, S, S, S);
}
function $0(l, i) {
  let u = i.valueOf();
  return Et(5, l, u !== u ? "" : i.toISOString(), S, S, S, S, S, S, S, S, S);
}
function P0(l, i) {
  return Et(6, l, S, S, ta(i.source), i.flags, S, S, S, S, S, S);
}
function I0(l, i) {
  return Et(17, l, Cy[i], S, S, S, S, S, S, S, S, S);
}
function tS(l, i) {
  return Et(18, l, ta(Z0(i)), S, S, S, S, S, S, S, S, S);
}
function eS(l, i, u) {
  return Et(25, l, u, S, ta(i), S, S, S, S, S, S, S);
}
function nS(l, i, u) {
  return Et(9, l, S, i.length, S, S, S, S, u, S, S, By(i));
}
function aS(l, i) {
  return Et(21, l, S, S, S, S, S, S, S, i, S, S);
}
function lS(l, i, u) {
  return Et(
    15,
    l,
    S,
    i.length,
    i.constructor.name,
    S,
    S,
    S,
    S,
    u,
    i.byteOffset,
    S,
  );
}
function iS(l, i, u) {
  return Et(
    16,
    l,
    S,
    i.length,
    i.constructor.name,
    S,
    S,
    S,
    S,
    u,
    i.byteOffset,
    S,
  );
}
function uS(l, i, u) {
  return Et(20, l, S, i.byteLength, S, S, S, S, S, u, i.byteOffset, S);
}
function cS(l, i, u) {
  return Et(13, l, vr(i), S, S, ta(i.message), u, S, S, S, S, S);
}
function sS(l, i, u) {
  return Et(14, l, vr(i), S, S, ta(i.message), u, S, S, S, S, S);
}
function oS(l, i, u) {
  return Et(7, l, S, i, S, S, S, S, u, S, S, S);
}
function rS(l, i) {
  return Et(28, S, S, S, S, S, S, S, [l, i], S, S, S);
}
function fS(l, i) {
  return Et(30, S, S, S, S, S, S, S, [l, i], S, S, S);
}
function dS(l, i, u) {
  return Et(31, l, S, S, S, S, S, S, u, i, S, S);
}
function hS(l, i) {
  return Et(32, l, S, S, S, S, S, S, S, i, S, S);
}
function mS(l, i) {
  return Et(33, l, S, S, S, S, S, S, S, i, S, S);
}
function yS(l, i) {
  return Et(34, l, S, S, S, S, S, S, S, i, S, S);
}
var vS = { parsing: 1, serialization: 2, deserialization: 3 };
function pS(l) {
  return `Seroval Error (step: ${vS[l]})`;
}
var gS = (l, i) => pS(l),
  Hy = class extends Error {
    constructor(l, i) {
      super(gS(l)), (this.cause = i);
    }
  },
  Qm = class extends Hy {
    constructor(l) {
      super("parsing", l);
    }
  },
  SS = class extends Hy {
    constructor(l) {
      super("deserialization", l);
    }
  };
function Oa(l) {
  return `Seroval Error (specific: ${l})`;
}
var pc = class extends Error {
    constructor(l) {
      super(Oa(1)), (this.value = l);
    }
  },
  bS = class extends Error {
    constructor(l) {
      super(Oa(2));
    }
  },
  _S = class extends Error {
    constructor(l) {
      super(Oa(3));
    }
  },
  Ci = class extends Error {
    constructor(l) {
      super(Oa(4));
    }
  },
  ES = class extends Error {
    constructor(l) {
      super(Oa(5)), (this.value = l);
    }
  },
  TS = class extends Error {
    constructor(l) {
      super(Oa(6));
    }
  },
  RS = class extends Error {
    constructor(l) {
      super(Oa(7));
    }
  },
  AS = class {
    constructor(l, i) {
      (this.value = l), (this.replacement = i);
    }
  },
  gc = () => {
    let l = { p: 0, s: 0, f: 0 };
    return (
      (l.p = new Promise((i, u) => {
        (l.s = i), (l.f = u);
      })),
      l
    );
  },
  MS = (l, i) => {
    l.s(i), (l.p.s = 1), (l.p.v = i);
  },
  zS = (l, i) => {
    l.f(i), (l.p.s = 2), (l.p.v = i);
  };
gc.toString();
MS.toString();
zS.toString();
var OS = () => {
    let l = [],
      i = [],
      u = !0,
      o = !1,
      r = 0,
      d = (y, h, b) => {
        for (b = 0; b < r; b++) i[b] && i[b][h](y);
      },
      m = (y, h, b, g) => {
        for (h = 0, b = l.length; h < b; h++)
          (g = l[h]),
            !u && h === b - 1 ? y[o ? "return" : "throw"](g) : y.next(g);
      },
      p = (y, h) => (
        u && ((h = r++), (i[h] = y)),
        m(y),
        () => {
          u && ((i[h] = i[r]), (i[r--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (y) => p(y),
      next: (y) => {
        u && (l.push(y), d(y, "next"));
      },
      throw: (y) => {
        u && (l.push(y), d(y, "throw"), (u = !1), (o = !1), (i.length = 0));
      },
      return: (y) => {
        u && (l.push(y), d(y, "return"), (u = !1), (o = !0), (i.length = 0));
      },
    };
  },
  xS = (l) => (i) => () => {
    let u = 0,
      o = {
        [l]: () => o,
        next: () => {
          if (u > i.d) return { done: !0, value: void 0 };
          let r = u++,
            d = i.v[r];
          if (r === i.t) throw d;
          return { done: r === i.d, value: d };
        },
      };
    return o;
  },
  CS = (l, i) => (u) => () => {
    let o = 0,
      r = -1,
      d = !1,
      m = [],
      p = [],
      y = (b = 0, g = p.length) => {
        for (; b < g; b++) p[b].s({ done: !0, value: void 0 });
      };
    u.on({
      next: (b) => {
        let g = p.shift();
        g && g.s({ done: !1, value: b }), m.push(b);
      },
      throw: (b) => {
        let g = p.shift();
        g && g.f(b), y(), (r = m.length), (d = !0), m.push(b);
      },
      return: (b) => {
        let g = p.shift();
        g && g.s({ done: !0, value: b }), y(), (r = m.length), m.push(b);
      },
    });
    let h = {
      [l]: () => h,
      next: () => {
        if (r === -1) {
          let _ = o++;
          if (_ >= m.length) {
            let z = i();
            return p.push(z), z.p;
          }
          return { done: !1, value: m[_] };
        }
        if (o > r) return { done: !0, value: void 0 };
        let b = o++,
          g = m[b];
        if (b !== r) return { done: !1, value: g };
        if (d) throw g;
        return { done: !0, value: g };
      },
    };
    return h;
  },
  qy = (l, i) => {
    let u = atob(i),
      o = new Uint8Array(l);
    for (let r = 0; r < l; r++) o[r] = u.charCodeAt(r);
    return o.buffer;
  };
qy.toString();
var DS = {},
  wS = {},
  US = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function LS(l) {
  return "__SEROVAL_STREAM__" in l;
}
function Sc() {
  return OS();
}
function NS(l) {
  let i = Sc(),
    u = l[$n]();
  async function o() {
    try {
      let r = await u.next();
      r.done ? i.return(r.value) : (i.next(r.value), await o());
    } catch (r) {
      i.throw(r);
    }
  }
  return o().catch(() => {}), i;
}
var BS = CS($n, gc);
function jS(l) {
  return BS(l);
}
function HS(l) {
  let i = [],
    u = -1,
    o = -1,
    r = l[Pn]();
  for (;;)
    try {
      let d = r.next();
      if ((i.push(d.value), d.done)) {
        o = i.length - 1;
        break;
      }
    } catch (d) {
      (u = i.length), i.push(d);
    }
  return { v: i, t: u, d: o };
}
var qS = xS(Pn);
function YS(l) {
  return qS(l);
}
async function GS(l) {
  try {
    return [1, await l];
  } catch (i) {
    return [0, i];
  }
}
function XS(l, i) {
  return {
    plugins: i.plugins,
    mode: l,
    marked: new Set(),
    features: 31 ^ (i.disabledFeatures || 0),
    refs: i.refs || new Map(),
  };
}
function uc(l, i) {
  l.marked.add(i);
}
function VS(l, i) {
  let u = l.refs.size;
  return l.refs.set(i, u), u;
}
function bc(l, i) {
  let u = l.refs.get(i);
  return u != null
    ? (uc(l, u), { type: 1, value: W0(u) })
    : { type: 0, value: VS(l, i) };
}
function pr(l, i) {
  let u = bc(l, i);
  return u.type === 1 ? u : Ly(i) ? { type: 2, value: tS(u.value, i) } : u;
}
function _a(l, i) {
  let u = pr(l, i);
  if (u.type !== 0) return u.value;
  if (i in Cy) return I0(u.value, i);
  throw new pc(i);
}
function _c(l, i) {
  let u = bc(l, US[i]);
  return u.type === 1 ? u.value : Et(26, u.value, i, S, S, S, S, S, S, S, S, S);
}
function QS(l) {
  let i = bc(l, DS);
  return i.type === 1
    ? i.value
    : Et(27, i.value, S, S, S, S, S, S, S, _a(l, Pn), S, S);
}
function ZS(l) {
  let i = bc(l, wS);
  return i.type === 1
    ? i.value
    : Et(29, i.value, S, S, S, S, S, S, [_c(l, 1), _a(l, $n)], S, S, S);
}
function KS(l, i, u, o) {
  return Et(u ? 11 : 10, l, S, S, S, S, o, S, S, S, S, By(i));
}
function JS(l, i, u, o, r) {
  return Et(8, i, S, S, S, S, S, { k: u, v: o, s: r }, S, _c(l, 0), S, S);
}
function kS(l, i, u) {
  let o = new Uint8Array(u),
    r = o.length,
    d = "";
  for (let m = 0; m < r; m++) d += String.fromCharCode(o[m]);
  return Et(19, i, ta(btoa(d)), r, S, S, S, S, S, _c(l, 5), S, S);
}
function FS(l, i) {
  return { base: XS(l, i), child: void 0 };
}
var WS = class {
  constructor(l) {
    this._p = l;
  }
  parse(l) {
    return te(this._p, l);
  }
};
async function $S(l, i) {
  let u = [];
  for (let o = 0, r = i.length; o < r; o++)
    o in i && (u[o] = await te(l, i[o]));
  return u;
}
async function PS(l, i, u) {
  return nS(i, u, await $S(l, u));
}
async function gr(l, i) {
  let u = Object.entries(i),
    o = [],
    r = [];
  for (let d = 0, m = u.length; d < m; d++)
    o.push(ta(u[d][0])), r.push(await te(l, u[d][1]));
  return (
    Pn in i &&
      (o.push(_a(l.base, Pn)), r.push(rS(QS(l.base), await te(l, HS(i))))),
    $n in i &&
      (o.push(_a(l.base, $n)), r.push(fS(ZS(l.base), await te(l, NS(i))))),
    Ti in i && (o.push(_a(l.base, Ti)), r.push(jy(i[Ti]))),
    Ei in i && (o.push(_a(l.base, Ei)), r.push(i[Ei] ? Dy : wy)),
    { k: o, v: r, s: o.length }
  );
}
async function Wo(l, i, u, o) {
  return KS(i, u, o, await gr(l, u));
}
async function IS(l, i, u) {
  return aS(i, await te(l, u.valueOf()));
}
async function t1(l, i, u) {
  return lS(i, u, await te(l, u.buffer));
}
async function e1(l, i, u) {
  return iS(i, u, await te(l, u.buffer));
}
async function n1(l, i, u) {
  return uS(i, u, await te(l, u.buffer));
}
async function Zm(l, i, u) {
  let o = Ny(u, l.base.features);
  return cS(i, u, o ? await gr(l, o) : S);
}
async function a1(l, i, u) {
  let o = Ny(u, l.base.features);
  return sS(i, u, o ? await gr(l, o) : S);
}
async function l1(l, i, u) {
  let o = [],
    r = [];
  for (let [d, m] of u.entries())
    o.push(await te(l, d)), r.push(await te(l, m));
  return JS(l.base, i, o, r, u.size);
}
async function i1(l, i, u) {
  let o = [];
  for (let r of u.keys()) o.push(await te(l, r));
  return oS(i, u.size, o);
}
async function Yy(l, i, u) {
  let o = l.base.plugins;
  if (o)
    for (let r = 0, d = o.length; r < d; r++) {
      let m = o[r];
      if (m.parse.async && m.test(u))
        return (
          l.child == null && (l.child = new WS(l)),
          eS(i, m.tag, await m.parse.async(u, l.child, { id: i }))
        );
    }
  return S;
}
async function u1(l, i, u) {
  let [o, r] = await GS(u);
  return Et(12, i, o, S, S, S, S, S, S, await te(l, r), S, S);
}
function c1(l, i, u, o) {
  let r = [],
    d = i.on({
      next: (m) => {
        uc(this.base, l),
          te(this, m).then(
            (p) => {
              r.push(hS(l, p));
            },
            (p) => {
              o(p), d();
            },
          );
      },
      throw: (m) => {
        uc(this.base, l),
          te(this, m).then(
            (p) => {
              r.push(mS(l, p)), u(r), d();
            },
            (p) => {
              o(p), d();
            },
          );
      },
      return: (m) => {
        uc(this.base, l),
          te(this, m).then(
            (p) => {
              r.push(yS(l, p)), u(r), d();
            },
            (p) => {
              o(p), d();
            },
          );
      },
    });
}
async function s1(l, i, u) {
  return dS(i, _c(l.base, 4), await new Promise(c1.bind(l, i, u)));
}
async function o1(l, i, u) {
  if (Array.isArray(u)) return PS(l, i, u);
  if (LS(u)) return s1(l, i, u);
  let o = u.constructor;
  if (o === AS) return te(l, u.replacement);
  let r = await Yy(l, i, u);
  if (r) return r;
  switch (o) {
    case Object:
      return Wo(l, i, u, !1);
    case S:
      return Wo(l, i, u, !0);
    case Date:
      return $0(i, u);
    case RegExp:
      return P0(i, u);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return Zm(l, i, u);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return IS(l, i, u);
    case ArrayBuffer:
      return kS(l.base, i, u);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return t1(l, i, u);
    case DataView:
      return n1(l, i, u);
    case Map:
      return l1(l, i, u);
    case Set:
      return i1(l, i, u);
  }
  if (o === Promise || u instanceof Promise) return u1(l, i, u);
  let d = l.base.features;
  if (d & 16)
    switch (o) {
      case BigInt64Array:
      case BigUint64Array:
        return e1(l, i, u);
    }
  if (
    d & 1 &&
    typeof AggregateError < "u" &&
    (o === AggregateError || u instanceof AggregateError)
  )
    return a1(l, i, u);
  if (u instanceof Error) return Zm(l, i, u);
  if (Pn in u || $n in u) return Wo(l, i, u, !!o);
  throw new pc(u);
}
async function r1(l, i) {
  let u = pr(l.base, i);
  if (u.type !== 0) return u.value;
  let o = await Yy(l, u.value, i);
  if (o) return o;
  throw new pc(i);
}
async function te(l, i) {
  switch (typeof i) {
    case "boolean":
      return i ? Dy : wy;
    case "undefined":
      return B0;
    case "string":
      return jy(i);
    case "number":
      return k0(i);
    case "bigint":
      return F0(i);
    case "object": {
      if (i) {
        let u = pr(l.base, i);
        return u.type === 0 ? await o1(l, u.value, i) : u.value;
      }
      return j0;
    }
    case "symbol":
      return _a(l.base, i);
    case "function":
      return r1(l, i);
    default:
      throw new pc(i);
  }
}
async function f1(l, i) {
  try {
    return await te(l, i);
  } catch (u) {
    throw u instanceof Qm ? u : new Qm(u);
  }
}
var d1 = ((l) => (
  (l[(l.Vanilla = 1)] = "Vanilla"), (l[(l.Cross = 2)] = "Cross"), l
))(d1 || {});
function Gy(l, i) {
  for (let u = 0, o = i.length; u < o; u++) {
    let r = i[u];
    l.has(r) || (l.add(r), r.extends && Gy(l, r.extends));
  }
}
function Xy(l) {
  if (l) {
    let i = new Set();
    return Gy(i, l), [...i];
  }
}
function h1(l) {
  switch (l) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new RS(l);
  }
}
function Vy(l, i) {
  switch (i) {
    case 3:
      return Object.freeze(l);
    case 1:
      return Object.preventExtensions(l);
    case 2:
      return Object.seal(l);
    default:
      return l;
  }
}
function m1(l, i) {
  return { mode: l, plugins: i.plugins, refs: i.refs || new Map() };
}
function y1(l) {
  return { mode: 2, base: m1(2, l), child: void 0 };
}
var v1 = class {
  constructor(l) {
    this._p = l;
  }
  deserialize(l) {
    return Bt(this._p, l);
  }
};
function p1(l, i, u) {
  return l.state.marked.has(i) && l.base.refs.set(i, u), u;
}
function g1(l, i, u) {
  return l.base.refs.has(i) || l.base.refs.set(i, u), u;
}
function ee(l, i, u) {
  return l.mode === 1 ? p1(l, i, u) : g1(l, i, u);
}
function S1(l, i) {
  return ee(l, i.i, K0(ea(i.s)));
}
function b1(l, i) {
  let u = i.l,
    o = ee(l, i.i, new Array(u)),
    r;
  for (let d = 0; d < u; d++) (r = i.a[d]), r && (o[d] = Bt(l, r));
  return Vy(o, i.o), o;
}
function Qy(l, i, u) {
  let o = i.s;
  if (o) {
    let r = i.k,
      d = i.v;
    for (let m = 0, p; m < o; m++)
      (p = r[m]),
        typeof p == "string"
          ? (u[ea(p)] = Bt(l, d[m]))
          : (u[Bt(l, p)] = Bt(l, d[m]));
  }
  return u;
}
function _1(l, i) {
  let u = ee(l, i.i, i.t === 10 ? {} : Object.create(null));
  return Qy(l, i.p, u), Vy(u, i.o), u;
}
function E1(l, i) {
  return ee(l, i.i, new Date(i.s));
}
function T1(l, i) {
  return ee(l, i.i, new RegExp(ea(i.c), i.m));
}
function R1(l, i) {
  let u = ee(l, i.i, new Set()),
    o = i.a;
  for (let r = 0, d = i.l; r < d; r++) u.add(Bt(l, o[r]));
  return u;
}
function A1(l, i) {
  let u = ee(l, i.i, new Map()),
    o = i.e.k,
    r = i.e.v;
  for (let d = 0, m = i.e.s; d < m; d++) u.set(Bt(l, o[d]), Bt(l, r[d]));
  return u;
}
function M1(l, i) {
  return ee(l, i.i, qy(i.l, ea(i.s)));
}
function z1(l, i) {
  let u = h1(i.c),
    o = Bt(l, i.f);
  return ee(l, i.i, new u(o, i.b, i.l));
}
function O1(l, i) {
  let u = Bt(l, i.f);
  return ee(l, i.i, new DataView(u, i.b, i.l));
}
function Zy(l, i, u) {
  if (i.p) {
    let o = Qy(l, i.p, {});
    Object.assign(u, o);
  }
  return u;
}
function x1(l, i) {
  let u = ee(l, i.i, new AggregateError([], ea(i.m)));
  return Zy(l, i, u);
}
function C1(l, i) {
  let u = N0[i.s],
    o = ee(l, i.i, new u(ea(i.m)));
  return Zy(l, i, o);
}
function D1(l, i) {
  let u = gc(),
    o = ee(l, i.i, u.p),
    r = Bt(l, i.f);
  return i.s ? u.s(r) : u.f(r), o;
}
function w1(l, i) {
  return ee(l, i.i, Object(Bt(l, i.f)));
}
function U1(l, i) {
  let u = l.base.plugins;
  if (u) {
    let o = ea(i.c);
    for (let r = 0, d = u.length; r < d; r++) {
      let m = u[r];
      if (m.tag === o)
        return (
          l.child == null && (l.child = new v1(l)),
          ee(l, i.i, m.deserialize(i.s, l.child, { id: i.i }))
        );
    }
  }
  throw new _S(i.c);
}
function L1(l, i) {
  return ee(l, i.i, ee(l, i.s, gc()).p);
}
function N1(l, i) {
  let u = l.base.refs.get(i.i);
  if (u) {
    u.s(Bt(l, i.a[1]));
    return;
  }
  throw new Ci("Promise");
}
function B1(l, i) {
  let u = l.base.refs.get(i.i);
  if (u) {
    u.f(Bt(l, i.a[1]));
    return;
  }
  throw new Ci("Promise");
}
function j1(l, i) {
  Bt(l, i.a[0]);
  let u = Bt(l, i.a[1]);
  return YS(u);
}
function H1(l, i) {
  Bt(l, i.a[0]);
  let u = Bt(l, i.a[1]);
  return jS(u);
}
function q1(l, i) {
  let u = ee(l, i.i, Sc()),
    o = i.a.length;
  if (o) for (let r = 0; r < o; r++) Bt(l, i.a[r]);
  return u;
}
function Y1(l, i) {
  let u = l.base.refs.get(i.i);
  if (u) {
    u.next(Bt(l, i.f));
    return;
  }
  throw new Ci("Stream");
}
function G1(l, i) {
  let u = l.base.refs.get(i.i);
  if (u) {
    u.throw(Bt(l, i.f));
    return;
  }
  throw new Ci("Stream");
}
function X1(l, i) {
  let u = l.base.refs.get(i.i);
  if (u) {
    u.return(Bt(l, i.f));
    return;
  }
  throw new Ci("Stream");
}
function V1(l, i) {
  Bt(l, i.f);
}
function Q1(l, i) {
  Bt(l, i.a[1]);
}
function Bt(l, i) {
  switch (i.t) {
    case 2:
      return U0[i.s];
    case 0:
      return i.s;
    case 1:
      return ea(i.s);
    case 3:
      return BigInt(i.s);
    case 4:
      return l.base.refs.get(i.i);
    case 18:
      return S1(l, i);
    case 9:
      return b1(l, i);
    case 10:
    case 11:
      return _1(l, i);
    case 5:
      return E1(l, i);
    case 6:
      return T1(l, i);
    case 7:
      return R1(l, i);
    case 8:
      return A1(l, i);
    case 19:
      return M1(l, i);
    case 16:
    case 15:
      return z1(l, i);
    case 20:
      return O1(l, i);
    case 14:
      return x1(l, i);
    case 13:
      return C1(l, i);
    case 12:
      return D1(l, i);
    case 17:
      return w0[i.s];
    case 21:
      return w1(l, i);
    case 25:
      return U1(l, i);
    case 22:
      return L1(l, i);
    case 23:
      return N1(l, i);
    case 24:
      return B1(l, i);
    case 28:
      return j1(l, i);
    case 30:
      return H1(l, i);
    case 31:
      return q1(l, i);
    case 32:
      return Y1(l, i);
    case 33:
      return G1(l, i);
    case 34:
      return X1(l, i);
    case 27:
      return V1(l, i);
    case 29:
      return Q1(l, i);
    default:
      throw new bS(i);
  }
}
function Z1(l, i) {
  try {
    return Bt(l, i);
  } catch (u) {
    throw new SS(u);
  }
}
var K1 = () => T;
K1.toString();
function $o(l, i) {
  let u = Xy(i.plugins),
    o = y1({ plugins: u, refs: i.refs });
  return Z1(o, l);
}
async function J1(l, i = {}) {
  let u = Xy(i.plugins),
    o = FS(1, { plugins: u, disabledFeatures: i.disabledFeatures });
  return {
    t: await f1(o, l),
    f: o.base.features,
    m: Array.from(o.base.marked),
  };
}
function k1(l) {
  return {
    tag: "$TSR/t/" + l.key,
    test: l.test,
    parse: {
      sync(i, u) {
        return u.parse(l.toSerializable(i));
      },
      async async(i, u) {
        return await u.parse(l.toSerializable(i));
      },
      stream(i, u) {
        return u.parse(l.toSerializable(i));
      },
    },
    serialize: void 0,
    deserialize(i, u) {
      return l.fromSerializable(u.deserialize(i));
    },
  };
}
var Ri = {},
  Ky = (l) =>
    new ReadableStream({
      start: (i) => {
        l.on({
          next: (u) => {
            try {
              i.enqueue(u);
            } catch {}
          },
          throw: (u) => {
            i.error(u);
          },
          return: () => {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  F1 = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(l) {
      return l === Ri;
    },
    parse: {
      sync() {},
      async async() {
        return await Promise.resolve(void 0);
      },
      stream() {},
    },
    serialize() {
      return Ky.toString();
    },
    deserialize() {
      return Ri;
    },
  };
function Km(l) {
  let i = Sc(),
    u = l.getReader();
  async function o() {
    try {
      let r = await u.read();
      r.done ? i.return(r.value) : (i.next(r.value), await o());
    } catch (r) {
      i.throw(r);
    }
  }
  return o().catch(() => {}), i;
}
var W1 = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [F1],
    test(l) {
      return typeof ReadableStream > "u" ? !1 : l instanceof ReadableStream;
    },
    parse: {
      sync(l, i) {
        return { factory: i.parse(Ri), stream: i.parse(Sc()) };
      },
      async async(l, i) {
        return { factory: await i.parse(Ri), stream: await i.parse(Km(l)) };
      },
      stream(l, i) {
        return { factory: i.parse(Ri), stream: i.parse(Km(l)) };
      },
    },
    serialize(l, i) {
      return "(" + i.serialize(l.factory) + ")(" + i.serialize(l.stream) + ")";
    },
    deserialize(l, i) {
      let u = i.deserialize(l.stream);
      return Ky(u);
    },
  },
  $1 = W1;
const P1 = {
    tag: "$TSR/Error",
    test(l) {
      return l instanceof Error;
    },
    parse: {
      sync(l, i) {
        return { message: i.parse(l.message) };
      },
      async async(l, i) {
        return { message: await i.parse(l.message) };
      },
      stream(l, i) {
        return { message: i.parse(l.message) };
      },
    },
    serialize(l, i) {
      return "new Error(" + i.serialize(l.message) + ")";
    },
    deserialize(l, i) {
      return new Error(i.deserialize(l.message));
    },
  },
  I1 = [P1, $1];
function tb({ promise: l }) {
  const i = O0(l);
  if (i[We].status === "pending") throw i;
  if (i[We].status === "error") throw i[We].error;
  return [i[We].data, i];
}
function eb(l) {
  const i = J.jsx(nb, { ...l });
  return l.fallback
    ? J.jsx(nt.Suspense, { fallback: l.fallback, children: i })
    : i;
}
function nb(l) {
  const [i] = tb(l);
  return l.children(i);
}
function Sr(l) {
  const i = l.errorComponent ?? Ec;
  return J.jsx(ab, {
    getResetKey: l.getResetKey,
    onCatch: l.onCatch,
    children: ({ error: u, reset: o }) =>
      u ? nt.createElement(i, { error: u, reset: o }) : l.children,
  });
}
class ab extends nt.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(i) {
    return { resetKey: i.getResetKey() };
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(i, u) {
    u.error && u.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(i, u) {
    this.props.onCatch && this.props.onCatch(i, u);
  }
  render() {
    return this.props.children({
      error:
        this.state.resetKey !== this.props.getResetKey()
          ? null
          : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function Ec({ error: l }) {
  const [i, u] = nt.useState(!1);
  return J.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      J.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          J.jsx("strong", {
            style: { fontSize: "1rem" },
            children: "Something went wrong!",
          }),
          J.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => u((o) => !o),
            children: i ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      J.jsx("div", { style: { height: ".25rem" } }),
      i
        ? J.jsx("div", {
            children: J.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: l.message
                ? J.jsx("code", { children: l.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function lb({ children: l, fallback: i = null }) {
  return ib()
    ? J.jsx(Ai.Fragment, { children: l })
    : J.jsx(Ai.Fragment, { children: i });
}
function ib() {
  return Ai.useSyncExternalStore(
    ub,
    () => !0,
    () => !1,
  );
}
function ub() {
  return () => {};
}
var Po = { exports: {} },
  Io = {},
  tr = { exports: {} },
  er = {};
var Jm;
function cb() {
  if (Jm) return er;
  Jm = 1;
  var l = xi();
  function i(g, _) {
    return (g === _ && (g !== 0 || 1 / g === 1 / _)) || (g !== g && _ !== _);
  }
  var u = typeof Object.is == "function" ? Object.is : i,
    o = l.useState,
    r = l.useEffect,
    d = l.useLayoutEffect,
    m = l.useDebugValue;
  function p(g, _) {
    var z = _(),
      B = o({ inst: { value: z, getSnapshot: _ } }),
      O = B[0].inst,
      U = B[1];
    return (
      d(
        function () {
          (O.value = z), (O.getSnapshot = _), y(O) && U({ inst: O });
        },
        [g, z, _],
      ),
      r(
        function () {
          return (
            y(O) && U({ inst: O }),
            g(function () {
              y(O) && U({ inst: O });
            })
          );
        },
        [g],
      ),
      m(z),
      z
    );
  }
  function y(g) {
    var _ = g.getSnapshot;
    g = g.value;
    try {
      var z = _();
      return !u(g, z);
    } catch {
      return !0;
    }
  }
  function h(g, _) {
    return _();
  }
  var b =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? h
      : p;
  return (
    (er.useSyncExternalStore =
      l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : b),
    er
  );
}
var km;
function sb() {
  return km || ((km = 1), (tr.exports = cb())), tr.exports;
}
var Fm;
function ob() {
  if (Fm) return Io;
  Fm = 1;
  var l = xi(),
    i = sb();
  function u(h, b) {
    return (h === b && (h !== 0 || 1 / h === 1 / b)) || (h !== h && b !== b);
  }
  var o = typeof Object.is == "function" ? Object.is : u,
    r = i.useSyncExternalStore,
    d = l.useRef,
    m = l.useEffect,
    p = l.useMemo,
    y = l.useDebugValue;
  return (
    (Io.useSyncExternalStoreWithSelector = function (h, b, g, _, z) {
      var B = d(null);
      if (B.current === null) {
        var O = { hasValue: !1, value: null };
        B.current = O;
      } else O = B.current;
      B = p(
        function () {
          function Y(V) {
            if (!Z) {
              if (((Z = !0), (X = V), (V = _(V)), z !== void 0 && O.hasValue)) {
                var G = O.value;
                if (z(G, V)) return (F = G);
              }
              return (F = V);
            }
            if (((G = F), o(X, V))) return G;
            var Q = _(V);
            return z !== void 0 && z(G, Q) ? ((X = V), G) : ((X = V), (F = Q));
          }
          var Z = !1,
            X,
            F,
            at = g === void 0 ? null : g;
          return [
            function () {
              return Y(b());
            },
            at === null
              ? void 0
              : function () {
                  return Y(at());
                },
          ];
        },
        [b, g, _, z],
      );
      var U = r(h, B[0], B[1]);
      return (
        m(
          function () {
            (O.hasValue = !0), (O.value = U);
          },
          [U],
        ),
        y(U),
        U
      );
    }),
    Io
  );
}
var Wm;
function rb() {
  return Wm || ((Wm = 1), (Po.exports = ob())), Po.exports;
}
var fb = rb();
function db(l, i = (o) => o, u = {}) {
  const o = u.equal ?? hb;
  return fb.useSyncExternalStoreWithSelector(
    l.subscribe,
    () => l.state,
    () => l.state,
    i,
    o,
  );
}
function hb(l, i) {
  if (Object.is(l, i)) return !0;
  if (typeof l != "object" || l === null || typeof i != "object" || i === null)
    return !1;
  if (l instanceof Map && i instanceof Map) {
    if (l.size !== i.size) return !1;
    for (const [o, r] of l) if (!i.has(o) || !Object.is(r, i.get(o))) return !1;
    return !0;
  }
  if (l instanceof Set && i instanceof Set) {
    if (l.size !== i.size) return !1;
    for (const o of l) if (!i.has(o)) return !1;
    return !0;
  }
  if (l instanceof Date && i instanceof Date)
    return l.getTime() === i.getTime();
  const u = $m(l);
  if (u.length !== $m(i).length) return !1;
  for (let o = 0; o < u.length; o++)
    if (
      !Object.prototype.hasOwnProperty.call(i, u[o]) ||
      !Object.is(l[u[o]], i[u[o]])
    )
      return !1;
  return !0;
}
function $m(l) {
  return Object.keys(l).concat(Object.getOwnPropertySymbols(l));
}
const nr = nt.createContext(null);
function Jy() {
  return typeof document > "u"
    ? nr
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = nr), nr);
}
function ce(l) {
  const i = nt.useContext(Jy());
  return l?.warn, i;
}
function Zt(l) {
  const i = ce({ warn: l?.router === void 0 }),
    u = l?.router || i,
    o = nt.useRef(void 0);
  return db(u.__store, (r) => {
    if (l?.select) {
      if (l.structuralSharing ?? u.options.defaultStructuralSharing) {
        const d = Ye(o.current, l.select(r));
        return (o.current = d), d;
      }
      return l.select(r);
    }
    return r;
  });
}
const Tc = nt.createContext(void 0),
  mb = nt.createContext(void 0);
function $e(l) {
  const i = nt.useContext(l.from ? mb : Tc);
  return Zt({
    select: (o) => {
      const r = o.matches.find((d) =>
        l.from ? l.from === d.routeId : d.id === i,
      );
      if (
        (pe(
          !((l.shouldThrow ?? !0) && !r),
          `Could not find ${l.from ? `an active match from "${l.from}"` : "a nearest match!"}`,
        ),
        r !== void 0)
      )
        return l.select ? l.select(r) : r;
    },
    structuralSharing: l.structuralSharing,
  });
}
function br(l) {
  return $e({
    from: l.from,
    strict: l.strict,
    structuralSharing: l.structuralSharing,
    select: (i) => (l.select ? l.select(i.loaderData) : i.loaderData),
  });
}
function _r(l) {
  const { select: i, ...u } = l;
  return $e({ ...u, select: (o) => (i ? i(o.loaderDeps) : o.loaderDeps) });
}
function Er(l) {
  return $e({
    from: l.from,
    shouldThrow: l.shouldThrow,
    structuralSharing: l.structuralSharing,
    strict: l.strict,
    select: (i) => {
      const u = l.strict === !1 ? i.params : i._strictParams;
      return l.select ? l.select(u) : u;
    },
  });
}
function Tr(l) {
  return $e({
    from: l.from,
    strict: l.strict,
    shouldThrow: l.shouldThrow,
    structuralSharing: l.structuralSharing,
    select: (i) => (l.select ? l.select(i.search) : i.search),
  });
}
const nc = typeof window < "u" ? nt.useLayoutEffect : nt.useEffect;
function ar(l) {
  const i = nt.useRef({ value: l, prev: null }),
    u = i.current.value;
  return l !== u && (i.current = { value: l, prev: u }), i.current.prev;
}
function yb(l, i, u = {}, o = {}) {
  nt.useEffect(() => {
    if (!l.current || o.disabled || typeof IntersectionObserver != "function")
      return;
    const r = new IntersectionObserver(([d]) => {
      i(d);
    }, u);
    return (
      r.observe(l.current),
      () => {
        r.disconnect();
      }
    );
  }, [i, u, o.disabled, l]);
}
function vb(l) {
  const i = nt.useRef(null);
  return nt.useImperativeHandle(l, () => i.current, []), i;
}
function Rr(l) {
  const i = ce();
  return nt.useCallback(
    (u) => i.navigate({ ...u, from: u.from ?? l?.from }),
    [l?.from, i],
  );
}
var pb = ly();
function gb(l, i) {
  const u = ce(),
    [o, r] = nt.useState(!1),
    d = nt.useRef(!1),
    m = vb(i),
    {
      activeProps: p,
      inactiveProps: y,
      activeOptions: h,
      to: b,
      preload: g,
      preloadDelay: _,
      hashScrollIntoView: z,
      replace: B,
      startTransition: O,
      resetScroll: U,
      viewTransition: Y,
      children: Z,
      target: X,
      disabled: F,
      style: at,
      className: V,
      onClick: G,
      onFocus: Q,
      onMouseEnter: I,
      onMouseLeave: ft,
      onTouchStart: ot,
      ignoreBlocker: Mt,
      params: Gt,
      search: Xt,
      hash: Ht,
      state: L,
      mask: K,
      reloadDocument: lt,
      unsafeRelative: Tt,
      from: zt,
      _fromLocation: A,
      ...q
    } = l,
    k = Zt({ select: (xt) => xt.location.search, structuralSharing: !0 }),
    W = l.from,
    it = nt.useMemo(
      () => ({ ...l, from: W }),
      [
        u,
        k,
        W,
        l._fromLocation,
        l.hash,
        l.to,
        l.search,
        l.params,
        l.state,
        l.mask,
        l.unsafeRelative,
      ],
    ),
    ut = nt.useMemo(() => u.buildLocation({ ...it }), [u, it]),
    vt = nt.useMemo(() => {
      if (F) return;
      let xt = ut.maskedLocation ? ut.maskedLocation.url : ut.url,
        bt = !1;
      return (
        u.origin &&
          (xt.startsWith(u.origin)
            ? (xt = u.history.createHref(xt.replace(u.origin, "")) || "/")
            : (bt = !0)),
        { href: xt, external: bt }
      );
    }, [F, ut.maskedLocation, ut.url, u.origin, u.history]),
    Kt = nt.useMemo(() => {
      if (vt?.external) return vt.href;
      try {
        return new URL(b), b;
      } catch {}
    }, [b, vt]),
    Ot = l.reloadDocument || Kt ? !1 : (g ?? u.options.defaultPreload),
    Pe = _ ?? u.options.defaultPreloadDelay ?? 0,
    Sn = Zt({
      select: (xt) => {
        if (Kt) return !1;
        if (h?.exact) {
          if (!t0(xt.location.pathname, ut.pathname, u.basepath)) return !1;
        } else {
          const bt = fc(xt.location.pathname, u.basepath),
            Se = fc(ut.pathname, u.basepath);
          if (
            !(
              bt.startsWith(Se) &&
              (bt.length === Se.length || bt[Se.length] === "/")
            )
          )
            return !1;
        }
        return (h?.includeSearch ?? !0) &&
          !Ea(xt.location.search, ut.search, {
            partial: !h?.exact,
            ignoreUndefined: !h?.explicitUndefined,
          })
          ? !1
          : h?.includeHash
            ? xt.location.hash === ut.hash
            : !0;
      },
    }),
    Ge = nt.useCallback(() => {
      u.preloadRoute({ ...it }).catch((xt) => {
        console.warn(xt), console.warn(x0);
      });
    }, [u, it]),
    Di = nt.useCallback(
      (xt) => {
        xt?.isIntersecting && Ge();
      },
      [Ge],
    );
  yb(m, Di, Tb, { disabled: !!F || Ot !== "viewport" }),
    nt.useEffect(() => {
      d.current || (!F && Ot === "render" && (Ge(), (d.current = !0)));
    }, [F, Ge, Ot]);
  const Ie = (xt) => {
    const bt = xt.currentTarget.getAttribute("target"),
      Se = X !== void 0 ? X : bt;
    if (
      !F &&
      !Rb(xt) &&
      !xt.defaultPrevented &&
      (!Se || Se === "_self") &&
      xt.button === 0
    ) {
      xt.preventDefault(),
        pb.flushSync(() => {
          r(!0);
        });
      const _l = u.subscribe("onResolved", () => {
        _l(), r(!1);
      });
      u.navigate({
        ...it,
        replace: B,
        resetScroll: U,
        hashScrollIntoView: z,
        startTransition: O,
        viewTransition: Y,
        ignoreBlocker: Mt,
      });
    }
  };
  if (Kt)
    return {
      ...q,
      ref: m,
      href: Kt,
      ...(Z && { children: Z }),
      ...(X && { target: X }),
      ...(F && { disabled: F }),
      ...(at && { style: at }),
      ...(V && { className: V }),
      ...(G && { onClick: G }),
      ...(Q && { onFocus: Q }),
      ...(I && { onMouseEnter: I }),
      ...(ft && { onMouseLeave: ft }),
      ...(ot && { onTouchStart: ot }),
    };
  const xa = (xt) => {
      F || (Ot && Ge());
    },
    bl = xa,
    Rc = (xt) => {
      if (!(F || !Ot))
        if (!Pe) Ge();
        else {
          const bt = xt.target;
          if (pi.has(bt)) return;
          const Se = setTimeout(() => {
            pi.delete(bt), Ge();
          }, Pe);
          pi.set(bt, Se);
        }
    },
    wi = (xt) => {
      if (F || !Ot || !Pe) return;
      const bt = xt.target,
        Se = pi.get(bt);
      Se && (clearTimeout(Se), pi.delete(bt));
    },
    bn = Sn ? (Jn(p, {}) ?? Sb) : lr,
    _n = Sn ? lr : (Jn(y, {}) ?? lr),
    Ca = [V, bn.className, _n.className].filter(Boolean).join(" "),
    Ui = (at || bn.style || _n.style) && { ...at, ...bn.style, ..._n.style };
  return {
    ...q,
    ...bn,
    ..._n,
    href: vt?.href,
    ref: m,
    onClick: gi([G, Ie]),
    onFocus: gi([Q, xa]),
    onMouseEnter: gi([I, Rc]),
    onMouseLeave: gi([ft, wi]),
    onTouchStart: gi([ot, bl]),
    disabled: !!F,
    target: X,
    ...(Ui && { style: Ui }),
    ...(Ca && { className: Ca }),
    ...(F && bb),
    ...(Sn && _b),
    ...(o && Eb),
  };
}
const lr = {},
  Sb = { className: "active" },
  bb = { role: "link", "aria-disabled": !0 },
  _b = { "data-status": "active", "aria-current": "page" },
  Eb = { "data-transitioning": "transitioning" },
  pi = new WeakMap(),
  Tb = { rootMargin: "100px" },
  gi = (l) => (i) => {
    for (const u of l)
      if (u) {
        if (i.defaultPrevented) return;
        u(i);
      }
  },
  ky = nt.forwardRef((l, i) => {
    const { _asChild: u, ...o } = l,
      { type: r, ref: d, ...m } = gb(o, i),
      p =
        typeof o.children == "function"
          ? o.children({ isActive: m["data-status"] === "active" })
          : o.children;
    return (
      u === void 0 && delete m.disabled,
      nt.createElement(u || "a", { ...m, ref: d }, p)
    );
  });
function Rb(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
let Ab = class extends by {
  constructor(i) {
    super(i),
      (this.useMatch = (u) =>
        $e({
          select: u?.select,
          from: this.id,
          structuralSharing: u?.structuralSharing,
        })),
      (this.useRouteContext = (u) =>
        $e({
          ...u,
          from: this.id,
          select: (o) => (u?.select ? u.select(o.context) : o.context),
        })),
      (this.useSearch = (u) =>
        Tr({
          select: u?.select,
          structuralSharing: u?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (u) =>
        Er({
          select: u?.select,
          structuralSharing: u?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (u) => _r({ ...u, from: this.id })),
      (this.useLoaderData = (u) => br({ ...u, from: this.id })),
      (this.useNavigate = () => Rr({ from: this.fullPath })),
      (this.Link = Ai.forwardRef((u, o) =>
        J.jsx(ky, { ref: o, from: this.fullPath, ...u }),
      )),
      (this.$$typeof = Symbol.for("react.memo"));
  }
};
function Mb(l) {
  return new Ab(l);
}
class zb extends C0 {
  constructor(i) {
    super(i),
      (this.useMatch = (u) =>
        $e({
          select: u?.select,
          from: this.id,
          structuralSharing: u?.structuralSharing,
        })),
      (this.useRouteContext = (u) =>
        $e({
          ...u,
          from: this.id,
          select: (o) => (u?.select ? u.select(o.context) : o.context),
        })),
      (this.useSearch = (u) =>
        Tr({
          select: u?.select,
          structuralSharing: u?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (u) =>
        Er({
          select: u?.select,
          structuralSharing: u?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (u) => _r({ ...u, from: this.id })),
      (this.useLoaderData = (u) => br({ ...u, from: this.id })),
      (this.useNavigate = () => Rr({ from: this.fullPath })),
      (this.Link = Ai.forwardRef((u, o) =>
        J.jsx(ky, { ref: o, from: this.fullPath, ...u }),
      )),
      (this.$$typeof = Symbol.for("react.memo"));
  }
}
function Ob(l) {
  return new zb(l);
}
function or(l) {
  return typeof l == "object"
    ? new Pm(l, { silent: !0 }).createRoute(l)
    : new Pm(l, { silent: !0 }).createRoute;
}
class Pm {
  constructor(i, u) {
    (this.path = i),
      (this.createRoute = (o) => {
        this.silent;
        const r = Mb(o);
        return (r.isRoot = !1), r;
      }),
      (this.silent = u?.silent);
  }
}
class Im {
  constructor(i) {
    (this.useMatch = (u) =>
      $e({
        select: u?.select,
        from: this.options.id,
        structuralSharing: u?.structuralSharing,
      })),
      (this.useRouteContext = (u) =>
        $e({
          from: this.options.id,
          select: (o) => (u?.select ? u.select(o.context) : o.context),
        })),
      (this.useSearch = (u) =>
        Tr({
          select: u?.select,
          structuralSharing: u?.structuralSharing,
          from: this.options.id,
        })),
      (this.useParams = (u) =>
        Er({
          select: u?.select,
          structuralSharing: u?.structuralSharing,
          from: this.options.id,
        })),
      (this.useLoaderDeps = (u) => _r({ ...u, from: this.options.id })),
      (this.useLoaderData = (u) => br({ ...u, from: this.options.id })),
      (this.useNavigate = () => {
        const u = ce();
        return Rr({ from: u.routesById[this.options.id].fullPath });
      }),
      (this.options = i),
      (this.$$typeof = Symbol.for("react.memo"));
  }
}
function ty(l) {
  return typeof l == "object" ? new Im(l) : (i) => new Im({ id: l, ...i });
}
function xb(l, i) {
  let u, o, r, d;
  const m = () => (
      u ||
        (u = l()
          .then((y) => {
            (u = void 0), (o = y[i]);
          })
          .catch((y) => {
            if (
              ((r = y),
              qg(r) &&
                r instanceof Error &&
                typeof window < "u" &&
                typeof sessionStorage < "u")
            ) {
              const h = `tanstack_router_reload:${r.message}`;
              sessionStorage.getItem(h) ||
                (sessionStorage.setItem(h, "1"), (d = !0));
            }
          })),
      u
    ),
    p = function (h) {
      if (d) throw (window.location.reload(), new Promise(() => {}));
      if (r) throw r;
      if (!o) throw m();
      return nt.createElement(o, h);
    };
  return (p.preload = m), p;
}
function Cb() {
  const l = ce(),
    i = nt.useRef({ router: l, mounted: !1 }),
    [u, o] = nt.useState(!1),
    { hasPendingMatches: r, isLoading: d } = Zt({
      select: (g) => ({
        isLoading: g.isLoading,
        hasPendingMatches: g.matches.some((_) => _.status === "pending"),
      }),
      structuralSharing: !0,
    }),
    m = ar(d),
    p = d || u || r,
    y = ar(p),
    h = d || r,
    b = ar(h);
  return (
    (l.startTransition = (g) => {
      o(!0),
        nt.startTransition(() => {
          g(), o(!1);
        });
    }),
    nt.useEffect(() => {
      const g = l.history.subscribe(l.load),
        _ = l.buildLocation({
          to: l.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Ta(l.latestLocation.href) !== Ta(_.href) &&
          l.commitLocation({ ..._, replace: !0 }),
        () => {
          g();
        }
      );
    }, [l, l.history]),
    nc(() => {
      if (
        (typeof window < "u" && l.ssr) ||
        (i.current.router === l && i.current.mounted)
      )
        return;
      (i.current = { router: l, mounted: !0 }),
        (async () => {
          try {
            await l.load();
          } catch (_) {
            console.error(_);
          }
        })();
    }, [l]),
    nc(() => {
      m && !d && l.emit({ type: "onLoad", ...Ra(l.state) });
    }, [m, l, d]),
    nc(() => {
      b && !h && l.emit({ type: "onBeforeRouteMount", ...Ra(l.state) });
    }, [h, b, l]),
    nc(() => {
      if (y && !p) {
        const g = Ra(l.state);
        l.emit({ type: "onResolved", ...g }),
          l.__store.setState((_) => ({
            ..._,
            status: "idle",
            resolvedLocation: _.location,
          })),
          g.hrefChanged && s0(l);
      }
    }, [p, y, l]),
    null
  );
}
function Db(l) {
  const i = Zt({
    select: (u) => `not-found-${u.location.pathname}-${u.status}`,
  });
  return J.jsx(Sr, {
    getResetKey: () => i,
    onCatch: (u, o) => {
      if (ge(u)) l.onCatch?.(u, o);
      else throw u;
    },
    errorComponent: ({ error: u }) => {
      if (ge(u)) return l.fallback?.(u);
      throw u;
    },
    children: l.children,
  });
}
function wb() {
  return J.jsx("p", { children: "Not Found" });
}
function yl(l) {
  return J.jsx(J.Fragment, { children: l.children });
}
function Fy(l, i, u) {
  return i.options.notFoundComponent
    ? J.jsx(i.options.notFoundComponent, { ...u })
    : l.options.defaultNotFoundComponent
      ? J.jsx(l.options.defaultNotFoundComponent, { ...u })
      : J.jsx(wb, {});
}
function Ub({ children: l }) {
  const i = ce();
  return i.isServer
    ? J.jsx("script", {
        nonce: i.options.ssr?.nonce,
        className: "$tsr",
        dangerouslySetInnerHTML: {
          __html: l + ';typeof $_TSR !== "undefined" && $_TSR.c()',
        },
      })
    : null;
}
function Lb() {
  const l = ce();
  if (
    !l.isScrollRestoring ||
    !l.isServer ||
    (typeof l.options.scrollRestoration == "function" &&
      !l.options.scrollRestoration({ location: l.latestLocation }))
  )
    return null;
  const u = (l.options.getScrollRestorationKey || cr)(l.latestLocation),
    o = u !== cr(l.latestLocation) ? u : void 0,
    r = { storageKey: dc, shouldScrollRestoration: !0 };
  return (
    o && (r.key = o),
    J.jsx(Ub, { children: `(${sy.toString()})(${JSON.stringify(r)})` })
  );
}
const Wy = nt.memo(function ({ matchId: i }) {
  const u = ce(),
    o = Zt({
      select: (Y) => {
        const Z = Y.matches.find((X) => X.id === i);
        return (
          pe(Z),
          { routeId: Z.routeId, ssr: Z.ssr, _displayPending: Z._displayPending }
        );
      },
      structuralSharing: !0,
    }),
    r = u.routesById[o.routeId],
    d = r.options.pendingComponent ?? u.options.defaultPendingComponent,
    m = d ? J.jsx(d, {}) : null,
    p = r.options.errorComponent ?? u.options.defaultErrorComponent,
    y = r.options.onCatch ?? u.options.defaultOnCatch,
    h = r.isRoot
      ? (r.options.notFoundComponent ??
        u.options.notFoundRoute?.options.component)
      : r.options.notFoundComponent,
    b = o.ssr === !1 || o.ssr === "data-only",
    g =
      (!r.isRoot || r.options.wrapInSuspense || b) &&
      (r.options.wrapInSuspense ??
        d ??
        (r.options.errorComponent?.preload || b))
        ? nt.Suspense
        : yl,
    _ = p ? Sr : yl,
    z = h ? Db : yl,
    B = Zt({ select: (Y) => Y.loadedAt }),
    O = Zt({
      select: (Y) => {
        const Z = Y.matches.findIndex((X) => X.id === i);
        return Y.matches[Z - 1]?.routeId;
      },
    }),
    U = r.isRoot ? (r.options.shellComponent ?? yl) : yl;
  return J.jsxs(U, {
    children: [
      J.jsx(Tc.Provider, {
        value: i,
        children: J.jsx(g, {
          fallback: m,
          children: J.jsx(_, {
            getResetKey: () => B,
            errorComponent: p || Ec,
            onCatch: (Y, Z) => {
              if (ge(Y)) throw Y;
              y?.(Y, Z);
            },
            children: J.jsx(z, {
              fallback: (Y) => {
                if (
                  !h ||
                  (Y.routeId && Y.routeId !== o.routeId) ||
                  (!Y.routeId && !r.isRoot)
                )
                  throw Y;
                return nt.createElement(h, Y);
              },
              children:
                b || o._displayPending
                  ? J.jsx(lb, {
                      fallback: m,
                      children: J.jsx(ey, { matchId: i }),
                    })
                  : J.jsx(ey, { matchId: i }),
            }),
          }),
        }),
      }),
      O === xe && u.options.scrollRestoration
        ? J.jsxs(J.Fragment, { children: [J.jsx(Nb, {}), J.jsx(Lb, {})] })
        : null,
    ],
  });
});
function Nb() {
  const l = ce(),
    i = nt.useRef(void 0);
  return J.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      ref: (u) => {
        u &&
          (i.current === void 0 || i.current.href !== l.latestLocation.href) &&
          (l.emit({ type: "onRendered", ...Ra(l.state) }),
          (i.current = l.latestLocation));
      },
    },
    l.latestLocation.state.__TSR_key,
  );
}
const ey = nt.memo(function ({ matchId: i }) {
    const u = ce(),
      {
        match: o,
        key: r,
        routeId: d,
      } = Zt({
        select: (y) => {
          const h = y.matches.find((B) => B.id === i),
            b = h.routeId,
            _ = (
              u.routesById[b].options.remountDeps ??
              u.options.defaultRemountDeps
            )?.({
              routeId: b,
              loaderDeps: h.loaderDeps,
              params: h._strictParams,
              search: h._strictSearch,
            });
          return {
            key: _ ? JSON.stringify(_) : void 0,
            routeId: b,
            match: {
              id: h.id,
              status: h.status,
              error: h.error,
              _forcePending: h._forcePending,
              _displayPending: h._displayPending,
            },
          };
        },
        structuralSharing: !0,
      }),
      m = u.routesById[d],
      p = nt.useMemo(() => {
        const y = m.options.component ?? u.options.defaultComponent;
        return y ? J.jsx(y, {}, r) : J.jsx($y, {});
      }, [r, m.options.component, u.options.defaultComponent]);
    if (o._displayPending)
      throw u.getMatch(o.id)?._nonReactive.displayPendingPromise;
    if (o._forcePending) throw u.getMatch(o.id)?._nonReactive.minPendingPromise;
    if (o.status === "pending") {
      const y = m.options.pendingMinMs ?? u.options.defaultPendingMinMs;
      if (y) {
        const h = u.getMatch(o.id);
        if (h && !h._nonReactive.minPendingPromise && !u.isServer) {
          const b = Aa();
          (h._nonReactive.minPendingPromise = b),
            setTimeout(() => {
              b.resolve(), (h._nonReactive.minPendingPromise = void 0);
            }, y);
        }
      }
      throw u.getMatch(o.id)?._nonReactive.loadPromise;
    }
    if (o.status === "notFound") return pe(ge(o.error)), Fy(u, m, o.error);
    if (o.status === "redirected")
      throw (pe(Ze(o.error)), u.getMatch(o.id)?._nonReactive.loadPromise);
    if (o.status === "error") {
      if (u.isServer) {
        const y =
          (m.options.errorComponent ?? u.options.defaultErrorComponent) || Ec;
        return J.jsx(y, {
          error: o.error,
          reset: void 0,
          info: { componentStack: "" },
        });
      }
      throw o.error;
    }
    return p;
  }),
  $y = nt.memo(function () {
    const i = ce(),
      u = nt.useContext(Tc),
      o = Zt({ select: (h) => h.matches.find((b) => b.id === u)?.routeId }),
      r = i.routesById[o],
      d = Zt({
        select: (h) => {
          const g = h.matches.find((_) => _.id === u);
          return pe(g), g.globalNotFound;
        },
      }),
      m = Zt({
        select: (h) => {
          const b = h.matches,
            g = b.findIndex((_) => _.id === u);
          return b[g + 1]?.id;
        },
      }),
      p = i.options.defaultPendingComponent
        ? J.jsx(i.options.defaultPendingComponent, {})
        : null;
    if (d) return Fy(i, r, void 0);
    if (!m) return null;
    const y = J.jsx(Wy, { matchId: m });
    return o === xe ? J.jsx(nt.Suspense, { fallback: p, children: y }) : y;
  });
function Bb() {
  const l = ce(),
    u =
      l.routesById[xe].options.pendingComponent ??
      l.options.defaultPendingComponent,
    o = u ? J.jsx(u, {}) : null,
    r = l.isServer || (typeof document < "u" && l.ssr) ? yl : nt.Suspense,
    d = J.jsxs(r, {
      fallback: o,
      children: [!l.isServer && J.jsx(Cb, {}), J.jsx(jb, {})],
    });
  return l.options.InnerWrap ? J.jsx(l.options.InnerWrap, { children: d }) : d;
}
function jb() {
  const l = ce(),
    i = Zt({ select: (r) => r.matches[0]?.id }),
    u = Zt({ select: (r) => r.loadedAt }),
    o = i ? J.jsx(Wy, { matchId: i }) : null;
  return J.jsx(Tc.Provider, {
    value: i,
    children: l.options.disableGlobalCatchBoundary
      ? o
      : J.jsx(Sr, {
          getResetKey: () => u,
          errorComponent: Ec,
          onCatch: (r) => {
            r.message || r.toString();
          },
          children: o,
        }),
  });
}
const Hb = (l) => new qb(l);
class qb extends T0 {
  constructor(i) {
    super(i);
  }
}
typeof globalThis < "u"
  ? ((globalThis.createFileRoute = or), (globalThis.createLazyFileRoute = ty))
  : typeof window < "u" &&
    ((window.createFileRoute = or), (window.createLazyFileRoute = ty));
function Yb({ router: l, children: i, ...u }) {
  Object.keys(u).length > 0 &&
    l.update({
      ...l.options,
      ...u,
      context: { ...l.options.context, ...u.context },
    });
  const o = Jy(),
    r = J.jsx(o.Provider, { value: l, children: i });
  return l.options.Wrap ? J.jsx(l.options.Wrap, { children: r }) : r;
}
function Gb({ router: l, ...i }) {
  return J.jsx(Yb, { router: l, ...i, children: J.jsx(Bb, {}) });
}
function Py({ tag: l, attrs: i, children: u, nonce: o }) {
  switch (l) {
    case "title":
      return J.jsx("title", {
        ...i,
        suppressHydrationWarning: !0,
        children: u,
      });
    case "meta":
      return J.jsx("meta", { ...i, suppressHydrationWarning: !0 });
    case "link":
      return J.jsx("link", { ...i, nonce: o, suppressHydrationWarning: !0 });
    case "style":
      return J.jsx("style", {
        ...i,
        dangerouslySetInnerHTML: { __html: u },
        nonce: o,
      });
    case "script":
      return J.jsx(Xb, { attrs: i, children: u });
    default:
      return null;
  }
}
function Xb({ attrs: l, children: i }) {
  const u = ce();
  if (
    (nt.useEffect(() => {
      if (l?.src) {
        const o = (() => {
          try {
            const m = document.baseURI || window.location.href;
            return new URL(l.src, m).href;
          } catch {
            return l.src;
          }
        })();
        if (
          Array.from(document.querySelectorAll("script[src]")).find(
            (m) => m.src === o,
          )
        )
          return;
        const d = document.createElement("script");
        for (const [m, p] of Object.entries(l))
          m !== "suppressHydrationWarning" &&
            p !== void 0 &&
            p !== !1 &&
            d.setAttribute(m, typeof p == "boolean" ? "" : String(p));
        return (
          document.head.appendChild(d),
          () => {
            d.parentNode && d.parentNode.removeChild(d);
          }
        );
      }
      if (typeof i == "string") {
        const o = typeof l?.type == "string" ? l.type : "text/javascript",
          r = typeof l?.nonce == "string" ? l.nonce : void 0;
        if (
          Array.from(document.querySelectorAll("script:not([src])")).find(
            (p) => {
              if (!(p instanceof HTMLScriptElement)) return !1;
              const y = p.getAttribute("type") ?? "text/javascript",
                h = p.getAttribute("nonce") ?? void 0;
              return p.textContent === i && y === o && h === r;
            },
          )
        )
          return;
        const m = document.createElement("script");
        if (((m.textContent = i), l))
          for (const [p, y] of Object.entries(l))
            p !== "suppressHydrationWarning" &&
              y !== void 0 &&
              y !== !1 &&
              m.setAttribute(p, typeof y == "boolean" ? "" : String(y));
        return (
          document.head.appendChild(m),
          () => {
            m.parentNode && m.parentNode.removeChild(m);
          }
        );
      }
    }, [l, i]),
    !u.isServer)
  ) {
    const { src: o, ...r } = l || {};
    return J.jsx("script", {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: "" },
      ...r,
    });
  }
  return l?.src && typeof l.src == "string"
    ? J.jsx("script", { ...l, suppressHydrationWarning: !0 })
    : typeof i == "string"
      ? J.jsx("script", {
          ...l,
          dangerouslySetInnerHTML: { __html: i },
          suppressHydrationWarning: !0,
        })
      : null;
}
const Vb = () => {
  const l = ce(),
    i = l.options.ssr?.nonce,
    u = Zt({ select: (y) => y.matches.map((h) => h.meta).filter(Boolean) }),
    o = nt.useMemo(() => {
      const y = [],
        h = {};
      let b;
      for (let g = u.length - 1; g >= 0; g--) {
        const _ = u[g];
        for (let z = _.length - 1; z >= 0; z--) {
          const B = _[z];
          if (B)
            if (B.title) b || (b = { tag: "title", children: B.title });
            else {
              const O = B.name ?? B.property;
              if (O) {
                if (h[O]) continue;
                h[O] = !0;
              }
              y.push({ tag: "meta", attrs: { ...B, nonce: i } });
            }
        }
      }
      return (
        b && y.push(b),
        i &&
          y.push({ tag: "meta", attrs: { property: "csp-nonce", content: i } }),
        y.reverse(),
        y
      );
    }, [u, i]),
    r = Zt({
      select: (y) => {
        const h = y.matches
            .map((_) => _.links)
            .filter(Boolean)
            .flat(1)
            .map((_) => ({ tag: "link", attrs: { ..._, nonce: i } })),
          b = l.ssr?.manifest,
          g = y.matches
            .map((_) => b?.routes[_.routeId]?.assets ?? [])
            .filter(Boolean)
            .flat(1)
            .filter((_) => _.tag === "link")
            .map((_) => ({
              tag: "link",
              attrs: { ..._.attrs, suppressHydrationWarning: !0, nonce: i },
            }));
        return [...h, ...g];
      },
      structuralSharing: !0,
    }),
    d = Zt({
      select: (y) => {
        const h = [];
        return (
          y.matches
            .map((b) => l.looseRoutesById[b.routeId])
            .forEach((b) =>
              l.ssr?.manifest?.routes[b.id]?.preloads
                ?.filter(Boolean)
                .forEach((g) => {
                  h.push({
                    tag: "link",
                    attrs: { rel: "modulepreload", href: g, nonce: i },
                  });
                }),
            ),
          h
        );
      },
      structuralSharing: !0,
    }),
    m = Zt({
      select: (y) =>
        y.matches
          .map((h) => h.styles)
          .flat(1)
          .filter(Boolean)
          .map(({ children: h, ...b }) => ({
            tag: "style",
            attrs: b,
            children: h,
            nonce: i,
          })),
      structuralSharing: !0,
    }),
    p = Zt({
      select: (y) =>
        y.matches
          .map((h) => h.headScripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: h, ...b }) => ({
            tag: "script",
            attrs: { ...b, nonce: i },
            children: h,
          })),
      structuralSharing: !0,
    });
  return Zb([...o, ...d, ...r, ...m, ...p], (y) => JSON.stringify(y));
};
function Qb() {
  const l = Vb(),
    u = ce().options.ssr?.nonce;
  return l.map((o) =>
    nt.createElement(Py, {
      ...o,
      key: `tsr-meta-${JSON.stringify(o)}`,
      nonce: u,
    }),
  );
}
function Zb(l, i) {
  const u = new Set();
  return l.filter((o) => {
    const r = i(o);
    return u.has(r) ? !1 : (u.add(r), !0);
  });
}
const Kb = () => {
  const l = ce(),
    i = l.options.ssr?.nonce,
    u = Zt({
      select: (m) => {
        const p = [],
          y = l.ssr?.manifest;
        return y
          ? (m.matches
              .map((h) => l.looseRoutesById[h.routeId])
              .forEach((h) =>
                y.routes[h.id]?.assets
                  ?.filter((b) => b.tag === "script")
                  .forEach((b) => {
                    p.push({
                      tag: "script",
                      attrs: { ...b.attrs, nonce: i },
                      children: b.children,
                    });
                  }),
              ),
            p)
          : [];
      },
      structuralSharing: !0,
    }),
    { scripts: o } = Zt({
      select: (m) => ({
        scripts: m.matches
          .map((p) => p.scripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: p, ...y }) => ({
            tag: "script",
            attrs: { ...y, suppressHydrationWarning: !0, nonce: i },
            children: p,
          })),
      }),
      structuralSharing: !0,
    });
  let r;
  l.serverSsr && (r = l.serverSsr.takeBufferedScripts());
  const d = [...o, ...u];
  return (
    r && d.unshift(r),
    J.jsx(J.Fragment, {
      children: d.map((m, p) =>
        nt.createElement(Py, { ...m, key: `tsr-scripts-${m.tag}-${p}` }),
      ),
    })
  );
};
function Jb(l, i) {
  (l.id = i.i),
    (l.__beforeLoadContext = i.b),
    (l.loaderData = i.l),
    (l.status = i.s),
    (l.ssr = i.ssr),
    (l.updatedAt = i.u),
    (l.error = i.e);
}
async function kb(l) {
  pe(window.$_TSR);
  const i = l.options.serializationAdapters;
  if (i?.length) {
    const O = new Map();
    i.forEach((U) => {
      O.set(U.key, U.fromSerializable);
    }),
      (window.$_TSR.t = O),
      window.$_TSR.buffer.forEach((U) => U());
  }
  (window.$_TSR.initialized = !0), pe(window.$_TSR.router);
  const {
    manifest: u,
    dehydratedData: o,
    lastMatchId: r,
  } = window.$_TSR.router;
  l.ssr = { manifest: u };
  const m = document.querySelector('meta[property="csp-nonce"]')?.content;
  l.options.ssr = { nonce: m };
  const p = l.matchRoutes(l.state.location),
    y = Promise.all(
      p.map((O) => {
        const U = l.looseRoutesById[O.routeId];
        return l.loadRouteChunk(U);
      }),
    );
  function h(O) {
    const Y =
      l.looseRoutesById[O.routeId].options.pendingMinMs ??
      l.options.defaultPendingMinMs;
    if (Y) {
      const Z = Aa();
      (O._nonReactive.minPendingPromise = Z),
        (O._forcePending = !0),
        setTimeout(() => {
          Z.resolve(),
            l.updateMatch(
              O.id,
              (X) => (
                (X._nonReactive.minPendingPromise = void 0),
                { ...X, _forcePending: void 0 }
              ),
            );
        }, Y);
    }
  }
  function b(O) {
    const U = l.looseRoutesById[O.routeId];
    U && (U.options.ssr = O.ssr);
  }
  let g;
  p.forEach((O) => {
    const U = window.$_TSR.router.matches.find((Y) => Y.i === O.id);
    if (!U) {
      (O._nonReactive.dehydrated = !1), (O.ssr = !1), b(O);
      return;
    }
    Jb(O, U),
      b(O),
      (O._nonReactive.dehydrated = O.ssr !== !1),
      (O.ssr === "data-only" || O.ssr === !1) &&
        g === void 0 &&
        ((g = O.index), h(O));
  }),
    l.__store.setState((O) => ({ ...O, matches: p })),
    await l.options.hydrate?.(o),
    (window.$_TSR.hydrated = !0),
    window.$_TSR.c(),
    await Promise.all(
      l.state.matches.map(async (O) => {
        try {
          const U = l.looseRoutesById[O.routeId],
            Z = l.state.matches[O.index - 1]?.context ?? l.options.context;
          if (U.options.context) {
            const V = {
              deps: O.loaderDeps,
              params: O.params,
              context: Z ?? {},
              location: l.state.location,
              navigate: (G) =>
                l.navigate({ ...G, _fromLocation: l.state.location }),
              buildLocation: l.buildLocation,
              cause: O.cause,
              abortController: O.abortController,
              preload: !1,
              matches: p,
            };
            O.__routeContext = U.options.context(V) ?? void 0;
          }
          O.context = { ...Z, ...O.__routeContext, ...O.__beforeLoadContext };
          const X = {
              matches: l.state.matches,
              match: O,
              params: O.params,
              loaderData: O.loaderData,
            },
            F = await U.options.head?.(X),
            at = await U.options.scripts?.(X);
          (O.meta = F?.meta),
            (O.links = F?.links),
            (O.headScripts = F?.scripts),
            (O.styles = F?.styles),
            (O.scripts = at);
        } catch (U) {
          if (ge(U))
            (O.error = { isNotFound: !0 }),
              console.error(
                `NotFound error during hydration for routeId: ${O.routeId}`,
                U,
              );
          else
            throw (
              ((O.error = U),
              console.error(
                `Error during hydration for route ${O.routeId}:`,
                U,
              ),
              U)
            );
        }
      }),
    );
  const _ = p[p.length - 1].id !== r;
  if (!p.some((O) => O.ssr === !1) && !_)
    return (
      p.forEach((O) => {
        O._nonReactive.dehydrated = void 0;
      }),
      y
    );
  const B = Promise.resolve()
    .then(() => l.load())
    .catch((O) => {
      console.error("Error during router hydration:", O);
    });
  if (_) {
    const O = p[1];
    pe(O),
      h(O),
      (O._displayPending = !0),
      (O._nonReactive.displayPendingPromise = B),
      B.then(() => {
        pl(() => {
          l.__store.state.status === "pending" &&
            l.__store.setState((U) => ({
              ...U,
              status: "idle",
              resolvedLocation: U.location,
            })),
            l.updateMatch(O.id, (U) => ({
              ...U,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            }));
        });
      });
  }
  return y;
}
const Fb = "__TSS_CONTEXT",
  rr = Symbol.for("TSS_SERVER_FUNCTION"),
  Wb = "x-tss-serialized",
  $b = "x-tss-raw",
  Pb = () => window.__TSS_START_OPTIONS__;
function Ib() {
  return [...(Pb()?.serializationAdapters?.map(k1) ?? []), ...I1];
}
let gl = null;
async function t_(l, i, u) {
  gl || (gl = Ib());
  const o = i[0];
  if (Mi(o) && o.method) {
    const r = o,
      d = r.data instanceof FormData ? "formData" : "payload",
      m = new Headers({
        "x-tsr-redirect": "manual",
        ...(r.headers instanceof Headers
          ? Object.fromEntries(r.headers.entries())
          : r.headers),
      });
    if (
      (d === "payload" &&
        m.set("accept", "application/x-ndjson, application/json"),
      r.method === "GET")
    ) {
      if (d === "formData")
        throw new Error("FormData is not supported with GET requests");
      if ((await fr(r)) !== void 0) {
        const h = oy({ payload: await fr(r) });
        l.includes("?") ? (l += `&${h}`) : (l += `?${h}`);
      }
    }
    l.includes("?") ? (l += "&createServerFn") : (l += "?createServerFn");
    let p;
    if (r.method === "POST") {
      const y = await e_(r);
      y?.contentType && m.set("content-type", y.contentType), (p = y?.body);
    }
    return await ny(async () =>
      u(l, { method: r.method, headers: m, signal: r.signal, body: p }),
    );
  }
  return await ny(() =>
    u(l, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(i),
    }),
  );
}
async function fr(l) {
  let i = !1;
  const u = {};
  if (
    (l.data !== void 0 && ((i = !0), (u.data = l.data)),
    l.context &&
      Object.keys(l.context).length > 0 &&
      ((i = !0), (u.context = l.context)),
    i)
  )
    return Iy(u);
}
async function Iy(l) {
  return JSON.stringify(await Promise.resolve(J1(l, { plugins: gl })));
}
async function e_(l) {
  if (l.data instanceof FormData) {
    let u;
    return (
      l.context &&
        Object.keys(l.context).length > 0 &&
        (u = await Iy(l.context)),
      u !== void 0 && l.data.set(Fb, u),
      { body: l.data }
    );
  }
  const i = await fr(l);
  if (i) return { body: i, contentType: "application/json" };
}
async function ny(l) {
  const i = await (async () => {
    try {
      return await l();
    } catch (r) {
      if (r instanceof Response) return r;
      throw (console.log(r), r);
    }
  })();
  if (i.headers.get($b) === "true") return i;
  const u = i.headers.get("content-type");
  pe(u);
  const o = !!i.headers.get(Wb);
  if (!i.ok) {
    if (o && u.includes("application/json")) {
      const r = await i.json();
      throw $o(r, { plugins: gl });
    }
    throw new Error(await i.text());
  }
  if (o) {
    let r;
    if (u.includes("application/x-ndjson")) {
      const d = new Map();
      r = await n_({
        response: i,
        onMessage: (m) => $o(m, { refs: d, plugins: gl }),
        onError(m, p) {
          console.error(m, p);
        },
      });
    }
    if (u.includes("application/json")) {
      const d = await i.json();
      r = $o(d, { plugins: gl });
    }
    if ((pe(r), r instanceof Error)) throw r;
    return r;
  }
  if (u.includes("application/json")) {
    const r = await i.json(),
      d = m0(r);
    if (d) throw d;
    if (ge(r)) throw r;
    return r;
  }
  return i;
}
async function n_({ response: l, onMessage: i, onError: u }) {
  if (!l.body) throw new Error("No response body");
  const o = l.body.pipeThrough(new TextDecoderStream()).getReader();
  let r = "",
    d = !1,
    m;
  for (; !d; ) {
    const { value: p, done: y } = await o.read();
    if ((p && (r += p), r.length === 0 && y))
      throw new Error("Stream ended before first object");
    if (
      r.endsWith(`
`)
    ) {
      const h = r
          .split(`
`)
          .filter(Boolean),
        b = h[0];
      if (!b) throw new Error("No JSON line in the first chunk");
      (m = JSON.parse(b)),
        (d = !0),
        (r = h.slice(1).join(`
`));
    } else {
      const h = r.indexOf(`
`);
      if (h >= 0) {
        const b = r.slice(0, h).trim();
        (r = r.slice(h + 1)), b.length > 0 && ((m = JSON.parse(b)), (d = !0));
      }
    }
  }
  return (
    (async () => {
      try {
        for (;;) {
          const { value: p, done: y } = await o.read();
          p && (r += p);
          const h = r.lastIndexOf(`
`);
          if (h >= 0) {
            const b = r.slice(0, h);
            r = r.slice(h + 1);
            const g = b
              .split(`
`)
              .filter(Boolean);
            for (const _ of g)
              try {
                i(JSON.parse(_));
              } catch (z) {
                u?.(`Invalid JSON line: ${_}`, z);
              }
          }
          if (y) break;
        }
      } catch (p) {
        u?.("Stream processing error:", p);
      }
    })(),
    i(m)
  );
}
function a_(l) {
  const i = "/_serverFn/" + l;
  return Object.assign((...o) => t_(i, o, fetch), {
    url: i,
    functionId: l,
    [rr]: !0,
  });
}
const l_ = {
    key: "$TSS/serverfn",
    test: (l) => (typeof l != "function" || !(rr in l) ? !1 : !!l[rr]),
    toSerializable: ({ functionId: l }) => ({ functionId: l }),
    fromSerializable: ({ functionId: l }) => a_(l),
  },
  tv = Ob({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "TanStack Start Starter" },
      ],
    }),
    component: i_,
  });
function i_() {
  return J.jsxs("html", {
    lang: "en",
    children: [
      J.jsx("head", { children: J.jsx(Qb, {}) }),
      J.jsxs("body", { children: [J.jsx($y, {}), J.jsx(Kb, {})] }),
    ],
  });
}
const u_ = "modulepreload",
  c_ = function (l) {
    return "/" + l;
  },
  ay = {},
  s_ = function (i, u, o) {
    let r = Promise.resolve();
    if (u && u.length > 0) {
      let y = function (h) {
        return Promise.all(
          h.map((b) =>
            Promise.resolve(b).then(
              (g) => ({ status: "fulfilled", value: g }),
              (g) => ({ status: "rejected", reason: g }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const m = document.querySelector("meta[property=csp-nonce]"),
        p = m?.nonce || m?.getAttribute("nonce");
      r = y(
        u.map((h) => {
          if (((h = c_(h)), h in ay)) return;
          ay[h] = !0;
          const b = h.endsWith(".css"),
            g = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${h}"]${g}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = b ? "stylesheet" : u_),
            b || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = h),
            p && _.setAttribute("nonce", p),
            document.head.appendChild(_),
            b)
          )
            return new Promise((z, B) => {
              _.addEventListener("load", z),
                _.addEventListener("error", () =>
                  B(new Error(`Unable to preload CSS for ${h}`)),
                );
            });
        }),
      );
    }
    function d(m) {
      const p = new Event("vite:preloadError", { cancelable: !0 });
      if (((p.payload = m), window.dispatchEvent(p), !p.defaultPrevented))
        throw m;
    }
    return r.then((m) => {
      for (const p of m || []) p.status === "rejected" && d(p.reason);
      return i().catch(d);
    });
  },
  o_ = () => s_(() => import("./index-DF2X2BAE.js"), []),
  r_ = or("/")({ component: xb(o_, "component") }),
  f_ = r_.update({ id: "/", path: "/", getParentRoute: () => tv }),
  d_ = { IndexRoute: f_ },
  h_ = tv._addFileChildren(d_);
function m_() {
  return Hb({ routeTree: h_, defaultPreload: "intent" });
}
async function y_() {
  const l = await m_();
  let i;
  return (
    (i = []),
    (window.__TSS_START_OPTIONS__ = { serializationAdapters: i }),
    i.push(l_),
    l.options.serializationAdapters &&
      i.push(...l.options.serializationAdapters),
    l.update({ basepath: "", serializationAdapters: i }),
    l.state.matches.length || (await kb(l)),
    l
  );
}
let ir;
function v_() {
  return (
    ir || (ir = y_()),
    J.jsx(eb, { promise: ir, children: (l) => J.jsx(Gb, { router: l }) })
  );
}
nt.startTransition(() => {
  xg.hydrateRoot(document, J.jsx(nt.StrictMode, { children: J.jsx(v_, {}) }));
});
export { J as j };
