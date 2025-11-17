import * as J from "react";
import I, { useState as dr } from "react";
import { useTranslation as vr } from "react-i18next";
var U = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function pr() {
  if (Te) return M;
  Te = 1;
  var n = I, c = Symbol.for("react.element"), x = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, p = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(_, f, k) {
    var E, w = {}, C = null, L = null;
    k !== void 0 && (C = "" + k), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (L = f.ref);
    for (E in f) d.call(f, E) && !R.hasOwnProperty(E) && (w[E] = f[E]);
    if (_ && _.defaultProps) for (E in f = _.defaultProps, f) w[E] === void 0 && (w[E] = f[E]);
    return { $$typeof: c, type: _, key: C, ref: L, props: w, _owner: p.current };
  }
  return M.Fragment = x, M.jsx = h, M.jsxs = h, M;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function gr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = I, c = Symbol.for("react.element"), x = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), _ = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), ee = Symbol.iterator, Oe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var u = t.map(function(s) {
          return String(s);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Ae = !1, Fe = !1, Ne = !1, Me = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === R || Me || e === p || e === k || e === E || Ne || e === L || De || Ae || Fe || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === w || e.$$typeof === h || e.$$typeof === _ || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case x:
          return "Portal";
        case R:
          return "Profiler";
        case p:
          return "StrictMode";
        case k:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return te(r) + ".Consumer";
          case h:
            var t = e;
            return te(t._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case w:
            var a = e.displayName || null;
            return a !== null ? a : T(e.type) || "Memo";
          case C: {
            var l = e, u = l._payload, s = l._init;
            try {
              return T(s(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ne, ae, ie, oe, se, le, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, le = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function $e() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: ie
            }),
            error: S({}, e, {
              value: oe
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: le
            }),
            groupEnd: S({}, e, {
              value: ue
            })
          });
        }
        F < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, K;
    function $(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            K = a && a[1] || "";
          }
        return `
` + K + e;
      }
    }
    var z = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      z = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Le();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (y) {
              a = y;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (y) {
              a = y;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            a = y;
          }
          e();
        }
      } catch (y) {
        if (y && a && typeof y.stack == "string") {
          for (var o = y.stack.split(`
`), b = a.stack.split(`
`), v = o.length - 1, g = b.length - 1; v >= 1 && g >= 0 && o[v] !== b[g]; )
            g--;
          for (; v >= 1 && g >= 0; v--, g--)
            if (o[v] !== b[g]) {
              if (v !== 1 || g !== 1)
                do
                  if (v--, g--, g < 0 || o[v] !== b[g]) {
                    var j = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, j), j;
                  }
                while (v >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = u, $e(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", O = A ? $(A) : "";
      return typeof e == "function" && Y.set(e, O), O;
    }
    function Be(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case k:
          return $("Suspense");
        case E:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Be(e.render);
          case w:
            return B(e.type, r, t);
          case C: {
            var a = e, l = a._payload, u = a._init;
            try {
              return B(u(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, de = {}, ve = P.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ue(e, r, t, a, l) {
      {
        var u = Function.call.bind(N);
        for (var s in e)
          if (u(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var b = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (V(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), V(null)), o instanceof Error && !(o.message in de) && (de[o.message] = !0, V(l), m("Failed %s type: %s", t, o.message), V(null));
          }
      }
    }
    var Je = Array.isArray;
    function Z(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ke(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var xe = P.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me;
    function Ze(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && xe.current;
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, l, u, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, a, l) {
      {
        var u, s = {}, o = null, b = null;
        t !== void 0 && (ge(t), o = "" + t), Ge(r) && (ge(r.key), o = "" + r.key), Ze(r) && (b = r.ref, Xe(r, l));
        for (u in r)
          N.call(r, u) && !ze.hasOwnProperty(u) && (s[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            s[u] === void 0 && (s[u] = v[u]);
        }
        if (o || b) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && He(s, g), b && Qe(s, g);
        }
        return er(e, o, b, l, a, xe.current, s);
      }
    }
    var G = P.ReactCurrentOwner, be = P.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function ye() {
      {
        if (G.current) {
          var e = T(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var _e = {};
    function nr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var a = "";
        e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + T(e._owner.type) + "."), D(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            H(a) && Ee(a, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = ke(e);
          if (typeof l == "function" && l !== e.entries)
            for (var u = l.call(e), s; !(s = u.next()).done; )
              H(s.value) && Ee(s.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = T(r);
          Ue(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var l = T(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var je = {};
    function we(e, r, t, a, l, u) {
      {
        var s = We(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = tr();
          b ? o += b : o += ye();
          var v;
          e === null ? v = "null" : Z(e) ? v = "array" : e !== void 0 && e.$$typeof === c ? (v = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var g = rr(e, r, t, l, u);
        if (g == null)
          return g;
        if (s) {
          var j = r.children;
          if (j !== void 0)
            if (a)
              if (Z(j)) {
                for (var A = 0; A < j.length; A++)
                  Re(j[A], e);
                Object.freeze && Object.freeze(j);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(j, e);
        }
        if (N.call(r, "key")) {
          var O = T(e), y = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Q = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[O + Q]) {
            var cr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, O, cr, O), je[O + Q] = !0;
          }
        }
        return e === d ? ir(g) : ar(g), g;
      }
    }
    function or(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var lr = sr, ur = or;
    W.Fragment = d, W.jsx = lr, W.jsxs = ur;
  })()), W;
}
var Se;
function xr() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? U.exports = pr() : U.exports = gr()), U.exports;
}
var i = xr();
function hr({ children: n }) {
  return /* @__PURE__ */ i.jsx("div", { className: "rounded-lg bg-white p-4 border border-1 border-gray-200", children: n });
}
hr.Heading = function({ className: n, children: c }) {
  return /* @__PURE__ */ i.jsx("h2", { className: `text-xl font-bold tracking-tight text-gray-800 pb-2 ${n}`, children: c });
};
function Tr({ href: n, to: c, children: x, className: d = "", onClick: p, ...R }) {
  const h = !n && !!p, _ = (f) => {
    h && f.preventDefault(), p && p(f);
  };
  return /* @__PURE__ */ i.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `inline-flex items-center gap-1 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded ${d}`,
      onClick: _,
      ...R,
      children: x
    }
  );
}
function Cr({ href: n, to: c, children: x, className: d = "", onClick: p, ...R }) {
  const h = !n && !!p, _ = (f) => {
    h && f.preventDefault(), p && p(f);
  };
  return /* @__PURE__ */ i.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `inline-flex items-center gap-1 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded ${d}`,
      onClick: _,
      ...R,
      children: x
    }
  );
}
function mr({
  title: n,
  titleId: c,
  ...x
}, d) {
  return /* @__PURE__ */ J.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": c
  }, x), n ? /* @__PURE__ */ J.createElement("title", {
    id: c
  }, n) : null, /* @__PURE__ */ J.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
  }));
}
const br = /* @__PURE__ */ J.forwardRef(mr);
function Sr({ children: n, loading: c, message: x }) {
  const d = I.Children.toArray(n), p = d.find((h) => I.isValidElement(h) && h.type === "footer"), R = d.filter((h) => !I.isValidElement(h) || h.type !== "footer");
  return /* @__PURE__ */ i.jsx("div", { className: "flex items-stretch inset-0 bg-gray-50 min-h-screen p-4 xl:pt-10", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col flex-1 max-w-7xl mx-auto gap-4 justify-between", children: [
    /* @__PURE__ */ i.jsx(yr, { children: R, loading: c, message: x }),
    /* @__PURE__ */ i.jsx("div", { children: p })
  ] }) });
}
function yr({ loading: n, message: c, children: x }) {
  return n ? /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col flex-1 justify-center items-center gap-4", children: [
    /* @__PURE__ */ i.jsx(br, { className: "h-12 w-12 animate-spin text-gray-400" }),
    c && /* @__PURE__ */ i.jsx("p", { className: "text-center text-lg text-gray-600", children: c })
  ] }) : c ? /* @__PURE__ */ i.jsx("div", { className: "flex flex-col flex-1 justify-center items-center gap-4", children: /* @__PURE__ */ i.jsx("p", { className: "text-center text-lg text-gray-600", children: c }) }) : /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-4", children: x });
}
function _r({ className: n }) {
  return /* @__PURE__ */ i.jsx("svg", { id: "Signet", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 250 250", className: n, children: /* @__PURE__ */ i.jsx("g", { id: "Logo_-_Signet", children: /* @__PURE__ */ i.jsx("g", { id: "Signet-2", "data-name": "Signet", children: /* @__PURE__ */ i.jsxs("g", { children: [
    /* @__PURE__ */ i.jsx("path", { style: { fill: "#191a1a" }, d: "M12.74,155.82l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ i.jsx("path", { style: { fill: "#019b9f" }, d: "M69.86,99.25l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ i.jsx("path", { style: { fill: "#019b9f" }, d: "M126.51,155.89l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ i.jsx("rect", { style: { fill: "#191a1a" }, x: "59.49", y: "183.5", width: "71.84", height: "10.07", rx: "5.03", ry: "5.03", transform: "translate(-104.96 121.44) rotate(-44.64)" }),
    /* @__PURE__ */ i.jsx("rect", { style: { fill: "#019b9f" }, x: "105.76", y: "84.94", width: "152.12", height: "10.09", rx: "5.05", ry: "5.05", transform: "translate(246.75 282.18) rotate(-135)" })
  ] }) }) }) });
}
function Er() {
  return /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1 pr-1", children: [
    /* @__PURE__ */ i.jsx(_r, { className: "size-4" }),
    /* @__PURE__ */ i.jsx("span", { children: "Powered by" }),
    /* @__PURE__ */ i.jsx("a", { className: "font-semibold hover:underline", href: "https://durablox.com", target: "_blank", children: "Durablox.com" })
  ] });
}
function Rr({ children: n, tooltip: c }) {
  const [x, d] = dr(!1);
  return c ? /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "relative inline-block cursor-pointer",
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      onClick: () => d((p) => !p),
      children: [
        n,
        x && /* @__PURE__ */ i.jsx("div", { className: `absolute z-10 bottom-full mb-2 left-1/2 -translate-x-1/2
                        whitespace-nowrap rounded bg-gray-800 px-3 py-2 text-sm text-white
                        shadow-lg transition-opacity duration-300`, children: c })
      ]
    }
  ) : /* @__PURE__ */ i.jsx("div", { className: "relative inline-block", children: n });
}
function Or({ serverVersion: n, clientVersion: c, licensesUri: x }) {
  const { t: d } = vr();
  return /* @__PURE__ */ i.jsxs("div", { className: "flex text-gray-500 text-xs justify-between", children: [
    /* @__PURE__ */ i.jsx(Er, {}),
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ i.jsx(Rr, { tooltip: n, children: c }),
      /* @__PURE__ */ i.jsx("a", { className: "font-semibold hover:underline cursor-pointer", href: x, target: "_blank", children: d("licenses") })
    ] })
  ] });
}
function kr({ href: n, to: c, children: x, className: d = "", onClick: p, ...R }) {
  const h = !n && !!p, _ = (f) => {
    h && f.preventDefault(), p && p(f);
  };
  return /* @__PURE__ */ i.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `font-semibold inline-flex items-center gap-1 text-blue-500 hover:underline ${d}`,
      onClick: _,
      ...R,
      children: x
    }
  );
}
function Pr({ className: n }) {
  return /* @__PURE__ */ i.jsx("svg", { id: "Signet", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 250 250", className: n, children: /* @__PURE__ */ i.jsx("g", { id: "Logo_-_Signet", children: /* @__PURE__ */ i.jsx("g", { id: "Signet-2", "data-name": "Signet", children: /* @__PURE__ */ i.jsxs("g", { children: [
    /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M12.74,155.82l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M69.86,99.25l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M126.51,155.89l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ i.jsx("rect", { fill: "currentColor", x: "59.49", y: "183.5", width: "71.84", height: "10.07", rx: "5.03", ry: "5.03", transform: "translate(-104.96 121.44) rotate(-44.64)" }),
    /* @__PURE__ */ i.jsx("rect", { fill: "currentColor", x: "105.76", y: "84.94", width: "152.12", height: "10.09", rx: "5.05", ry: "5.05", transform: "translate(246.75 282.18) rotate(-135)" })
  ] }) }) }) });
}
function Dr({ text: n }) {
  return /* @__PURE__ */ i.jsx("p", { className: "text-gray-600 pt-2", children: n });
}
export {
  hr as Box,
  Cr as ButtonOutline,
  Sr as Container,
  Or as Footer,
  kr as Link,
  _r as LogoColored,
  Pr as LogoIcon,
  Tr as PrimaryButtonOutline,
  Dr as TextBlock,
  Rr as Tooltip
};
