import * as U from "react";
import W, { useState as C1, useRef as he } from "react";
import { useTranslation as e1, Trans as pe } from "react-i18next";
import { createPortal as xe } from "react-dom";
var V = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S1;
function ge() {
  if (S1) return F;
  S1 = 1;
  var n = W, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(x, i, O) {
    var R, w = {}, C = null, L = null;
    O !== void 0 && (C = "" + O), i.key !== void 0 && (C = "" + i.key), i.ref !== void 0 && (L = i.ref);
    for (R in i) v.call(i, R) && !b.hasOwnProperty(R) && (w[R] = i[R]);
    if (x && x.defaultProps) for (R in i = x.defaultProps, i) w[R] === void 0 && (w[R] = i[R]);
    return { $$typeof: s, type: x, key: C, ref: L, props: w, _owner: u.current };
  }
  return F.Fragment = f, F.jsx = h, F.jsxs = h, F;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k1;
function be() {
  return k1 || (k1 = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = W, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), x = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), r1 = Symbol.iterator, P1 = "@@iterator";
    function M1(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = r1 && e[r1] || e[P1];
      return typeof t == "function" ? t : null;
    }
    var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        N1("error", e, a);
      }
    }
    function N1(e, t, a) {
      {
        var l = P.ReactDebugCurrentFrame, d = l.getStackAddendum();
        d !== "" && (t += "%s", a = a.concat([d]));
        var p = a.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var D1 = !1, A1 = !1, F1 = !1, Z1 = !1, W1 = !1, t1;
    t1 = Symbol.for("react.module.reference");
    function L1(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === b || W1 || e === u || e === O || e === R || Z1 || e === L || D1 || A1 || F1 || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === w || e.$$typeof === h || e.$$typeof === x || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === t1 || e.getModuleId !== void 0));
    }
    function $1(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var d = t.displayName || t.name || "";
      return d !== "" ? a + "(" + d + ")" : a;
    }
    function n1(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case f:
          return "Portal";
        case b:
          return "Profiler";
        case u:
          return "StrictMode";
        case O:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return n1(t) + ".Consumer";
          case h:
            var a = e;
            return n1(a._context) + ".Provider";
          case i:
            return $1(e, e.render, "ForwardRef");
          case w:
            var l = e.displayName || null;
            return l !== null ? l : T(e.type) || "Memo";
          case C: {
            var d = e, p = d._payload, c = d._init;
            try {
              return T(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, a1, l1, s1, i1, o1, c1, u1;
    function f1() {
    }
    f1.__reactDisabledLog = !0;
    function I1() {
      {
        if (D === 0) {
          a1 = console.log, l1 = console.info, s1 = console.warn, i1 = console.error, o1 = console.group, c1 = console.groupCollapsed, u1 = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: f1,
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
        D++;
      }
    }
    function B1() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: a1
            }),
            info: S({}, e, {
              value: l1
            }),
            warn: S({}, e, {
              value: s1
            }),
            error: S({}, e, {
              value: i1
            }),
            group: S({}, e, {
              value: o1
            }),
            groupCollapsed: S({}, e, {
              value: c1
            }),
            groupEnd: S({}, e, {
              value: u1
            })
          });
        }
        D < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = P.ReactCurrentDispatcher, q;
    function $(e, t, a) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (d) {
            var l = d.stack.trim().match(/\n( *(at )?)/);
            q = l && l[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, I;
    {
      var Y1 = typeof WeakMap == "function" ? WeakMap : Map;
      I = new Y1();
    }
    function d1(e, t) {
      if (!e || z)
        return "";
      {
        var a = I.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      z = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = J.current, J.current = null, I1();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (_) {
              l = _;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (_) {
              l = _;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            l = _;
          }
          e();
        }
      } catch (_) {
        if (_ && l && typeof _.stack == "string") {
          for (var o = _.stack.split(`
`), j = l.stack.split(`
`), g = o.length - 1, m = j.length - 1; g >= 1 && m >= 0 && o[g] !== j[m]; )
            m--;
          for (; g >= 1 && m >= 0; g--, m--)
            if (o[g] !== j[m]) {
              if (g !== 1 || m !== 1)
                do
                  if (g--, m--, m < 0 || o[g] !== j[m]) {
                    var E = `
` + o[g].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, E), E;
                  }
                while (g >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = p, B1(), Error.prepareStackTrace = d;
      }
      var N = e ? e.displayName || e.name : "", k = N ? $(N) : "";
      return typeof e == "function" && I.set(e, k), k;
    }
    function V1(e, t, a) {
      return d1(e, !1);
    }
    function U1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function B(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return d1(e, U1(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case O:
          return $("Suspense");
        case R:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return V1(e.render);
          case w:
            return B(e.type, t, a);
          case C: {
            var l = e, d = l._payload, p = l._init;
            try {
              return B(p(d), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, v1 = {}, h1 = P.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var t = e._owner, a = B(e.type, e._source, t ? t.type : null);
        h1.setExtraStackFrame(a);
      } else
        h1.setExtraStackFrame(null);
    }
    function J1(e, t, a, l, d) {
      {
        var p = Function.call.bind(A);
        for (var c in e)
          if (p(e, c)) {
            var o = void 0;
            try {
              if (typeof e[c] != "function") {
                var j = Error((l || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              o = e[c](t, c, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              o = g;
            }
            o && !(o instanceof Error) && (Y(d), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, c, typeof o), Y(null)), o instanceof Error && !(o.message in v1) && (v1[o.message] = !0, Y(d), y("Failed %s type: %s", a, o.message), Y(null));
          }
      }
    }
    var q1 = Array.isArray;
    function K(e) {
      return q1(e);
    }
    function z1(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function K1(e) {
      try {
        return p1(e), !1;
      } catch {
        return !0;
      }
    }
    function p1(e) {
      return "" + e;
    }
    function x1(e) {
      if (K1(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", z1(e)), p1(e);
    }
    var g1 = P.ReactCurrentOwner, G1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, b1, m1;
    function X1(e) {
      if (A.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function H1(e) {
      if (A.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Q1(e, t) {
      typeof e.ref == "string" && g1.current;
    }
    function ee(e, t) {
      {
        var a = function() {
          b1 || (b1 = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function re(e, t) {
      {
        var a = function() {
          m1 || (m1 = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var te = function(e, t, a, l, d, p, c) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
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
        value: l
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ne(e, t, a, l, d) {
      {
        var p, c = {}, o = null, j = null;
        a !== void 0 && (x1(a), o = "" + a), H1(t) && (x1(t.key), o = "" + t.key), X1(t) && (j = t.ref, Q1(t, d));
        for (p in t)
          A.call(t, p) && !G1.hasOwnProperty(p) && (c[p] = t[p]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (p in g)
            c[p] === void 0 && (c[p] = g[p]);
        }
        if (o || j) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ee(c, m), j && re(c, m);
        }
        return te(e, o, j, d, l, g1.current, c);
      }
    }
    var G = P.ReactCurrentOwner, y1 = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var t = e._owner, a = B(e.type, e._source, t ? t.type : null);
        y1.setExtraStackFrame(a);
      } else
        y1.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function j1() {
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
    function ae(e) {
      return "";
    }
    var _1 = {};
    function le(e) {
      {
        var t = j1();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function R1(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = le(t);
        if (_1[a])
          return;
        _1[a] = !0;
        var l = "";
        e && e._owner && e._owner !== G.current && (l = " It was passed a child from " + T(e._owner.type) + "."), M(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, l), M(null);
      }
    }
    function E1(e, t) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var a = 0; a < e.length; a++) {
            var l = e[a];
            H(l) && R1(l, t);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = M1(e);
          if (typeof d == "function" && d !== e.entries)
            for (var p = d.call(e), c; !(c = p.next()).done; )
              H(c.value) && R1(c.value, t);
        }
      }
    }
    function se(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          a = t.propTypes;
        else
          return;
        if (a) {
          var l = T(t);
          J1(a, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !X) {
          X = !0;
          var d = T(t);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ie(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var l = t[a];
          if (l !== "children" && l !== "key") {
            M(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var w1 = {};
    function T1(e, t, a, l, d, p) {
      {
        var c = L1(e);
        if (!c) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ae();
          j ? o += j : o += j1();
          var g;
          e === null ? g = "null" : K(e) ? g = "array" : e !== void 0 && e.$$typeof === s ? (g = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, o);
        }
        var m = ne(e, t, a, d, p);
        if (m == null)
          return m;
        if (c) {
          var E = t.children;
          if (E !== void 0)
            if (l)
              if (K(E)) {
                for (var N = 0; N < E.length; N++)
                  E1(E[N], e);
                Object.freeze && Object.freeze(E);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              E1(E, e);
        }
        if (A.call(t, "key")) {
          var k = T(e), _ = Object.keys(t).filter(function(ve) {
            return ve !== "key";
          }), Q = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!w1[k + Q]) {
            var de = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, k, de, k), w1[k + Q] = !0;
          }
        }
        return e === v ? ie(m) : se(m), m;
      }
    }
    function oe(e, t, a) {
      return T1(e, t, a, !0);
    }
    function ce(e, t, a) {
      return T1(e, t, a, !1);
    }
    var ue = ce, fe = oe;
    Z.Fragment = v, Z.jsx = ue, Z.jsxs = fe;
  })()), Z;
}
var O1;
function me() {
  return O1 || (O1 = 1, process.env.NODE_ENV === "production" ? V.exports = ge() : V.exports = be()), V.exports;
}
var r = me();
function ye({ children: n }) {
  return /* @__PURE__ */ r.jsx("div", { className: "rounded-lg bg-white p-4 border border-1 border-gray-200", children: n });
}
ye.Heading = function({ className: n, children: s }) {
  return /* @__PURE__ */ r.jsx("h2", { className: `text-xl font-bold tracking-tight text-gray-800 pb-2 ${n}`, children: s });
};
function Me({ href: n, to: s, children: f, className: v = "", onClick: u, ...b }) {
  const h = !n && !!u, x = (i) => {
    h && i.preventDefault(), u && u(i);
  };
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-500 font-semibold text-white py-1 px-2 rounded ${v}`,
      onClick: x,
      ...b,
      children: f
    }
  );
}
function Ne({ href: n, to: s, children: f, className: v = "", onClick: u, ...b }) {
  const h = !n && !!u, x = (i) => {
    h && i.preventDefault(), u && u(i);
  };
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `inline-flex items-center gap-1 bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-1 px-2 border border-blue-600 hover:border-transparent rounded ${v}`,
      onClick: x,
      ...b,
      children: f
    }
  );
}
function De({ href: n, to: s, children: f, className: v = "", onClick: u, ...b }) {
  const h = !n && !!u, x = (i) => {
    h && i.preventDefault(), u && u(i);
  };
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `inline-flex items-center gap-1 bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded ${v}`,
      onClick: x,
      ...b,
      children: f
    }
  );
}
function Ae({ href: n, to: s, children: f, className: v = "", onClick: u, ...b }) {
  const h = !n && !!u, x = (i) => {
    h && i.preventDefault(), u && u(i);
  };
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `inline-flex items-center gap-1 hover:bg-gray-400 bg-gray-500 font-semibold text-white py-1 px-2 rounded ${v}`,
      onClick: x,
      ...b,
      children: f
    }
  );
}
function je({ className: n }) {
  return /* @__PURE__ */ r.jsx("svg", { id: "Signet", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 250 250", className: n, children: /* @__PURE__ */ r.jsx("g", { id: "Logo_-_Signet", children: /* @__PURE__ */ r.jsx("g", { id: "Signet-2", "data-name": "Signet", children: /* @__PURE__ */ r.jsxs("g", { children: [
    /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M12.74,155.82l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M69.86,99.25l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M126.51,155.89l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ r.jsx("rect", { fill: "currentColor", x: "59.49", y: "183.5", width: "71.84", height: "10.07", rx: "5.03", ry: "5.03", transform: "translate(-104.96 121.44) rotate(-44.64)" }),
    /* @__PURE__ */ r.jsx("rect", { fill: "currentColor", x: "105.76", y: "84.94", width: "152.12", height: "10.09", rx: "5.05", ry: "5.05", transform: "translate(246.75 282.18) rotate(-135)" })
  ] }) }) }) });
}
function Fe({ url: n, className: s = "" }) {
  if (!n)
    return null;
  const { t: f } = e1();
  return /* @__PURE__ */ r.jsx("div", { className: `flex gap-2 ${s}`, children: /* @__PURE__ */ r.jsxs(
    "a",
    {
      href: n,
      target: "_blank",
      className: "text-sm inline-flex items-center gap-1 bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-1 px-2 border border-blue-600 hover:border-transparent rounded",
      children: [
        /* @__PURE__ */ r.jsx(je, { className: "size-4" }),
        " ",
        f("openSibDpp")
      ]
    }
  ) });
}
function _e({
  title: n,
  titleId: s,
  ...f
}, v) {
  return /* @__PURE__ */ U.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: v,
    "aria-labelledby": s
  }, f), n ? /* @__PURE__ */ U.createElement("title", {
    id: s
  }, n) : null, /* @__PURE__ */ U.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
  }));
}
const Re = /* @__PURE__ */ U.forwardRef(_e);
function Ze({ children: n, loading: s, message: f }) {
  const v = W.Children.toArray(n), u = v.find((h) => W.isValidElement(h) && h.type === "footer"), b = v.filter((h) => !W.isValidElement(h) || h.type !== "footer");
  return /* @__PURE__ */ r.jsx("div", { className: "flex items-stretch inset-0 bg-gray-50 min-h-screen p-4 xl:pt-10", children: /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col flex-1 max-w-7xl mx-auto gap-4 justify-between", children: [
    /* @__PURE__ */ r.jsx(Ee, { children: b, loading: s, message: f }),
    /* @__PURE__ */ r.jsx("div", { children: u })
  ] }) });
}
function Ee({ loading: n, message: s, children: f }) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col flex-1 justify-center items-center gap-4", children: [
    /* @__PURE__ */ r.jsx(Re, { className: "h-12 w-12 animate-spin text-gray-400" }),
    s && /* @__PURE__ */ r.jsx("p", { className: "text-center text-lg text-gray-600", children: s })
  ] }) : s ? /* @__PURE__ */ r.jsx("div", { className: "flex flex-col flex-1 justify-center items-center gap-4", children: /* @__PURE__ */ r.jsx("p", { className: "text-center text-lg text-gray-600", children: s }) }) : /* @__PURE__ */ r.jsx("div", { className: "flex flex-col gap-4", children: f });
}
function we({ className: n }) {
  return /* @__PURE__ */ r.jsx("svg", { id: "Signet", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 250 250", className: n, children: /* @__PURE__ */ r.jsx("g", { id: "Logo_-_Signet", children: /* @__PURE__ */ r.jsx("g", { id: "Signet-2", "data-name": "Signet", children: /* @__PURE__ */ r.jsxs("g", { children: [
    /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M12.74,155.82l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M69.86,99.25l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M126.51,155.89l45.56,45.65c1.44,1.44,3.77,1.44,5.2,0l45.11-45.27c1.43-1.44,1.43-3.76,0-5.19l-45.36-45.39c-1.43-1.43-3.75-1.44-5.19,0l-45.31,45.01c-1.44,1.43-1.45,3.76-.01,5.2Z" }),
    /* @__PURE__ */ r.jsx("rect", { style: { fill: "#191a1a" }, x: "59.49", y: "183.5", width: "71.84", height: "10.07", rx: "5.03", ry: "5.03", transform: "translate(-104.96 121.44) rotate(-44.64)" }),
    /* @__PURE__ */ r.jsx("rect", { style: { fill: "#019b9f" }, x: "105.76", y: "84.94", width: "152.12", height: "10.09", rx: "5.05", ry: "5.05", transform: "translate(246.75 282.18) rotate(-135)" })
  ] }) }) }) });
}
function Te() {
  return /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1 pr-1", children: [
    /* @__PURE__ */ r.jsx(we, { className: "size-4" }),
    /* @__PURE__ */ r.jsx("span", { children: "Powered by" }),
    /* @__PURE__ */ r.jsx("a", { className: "font-semibold hover:underline", href: "https://durablox.cloud", target: "_blank", children: "Durablox.cloud" })
  ] });
}
function Ce({ children: n, tooltip: s }) {
  const [f, v] = C1(!1), [u, b] = C1({ top: 0, left: 0 }), h = he(null);
  function x() {
    if (h.current) {
      const i = h.current.getBoundingClientRect();
      b({
        top: i.top - 8,
        left: i.left + i.width / 2
      });
    }
  }
  return s ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: h,
      className: "relative inline-block cursor-pointer",
      onMouseEnter: () => {
        x(), v(!0);
      },
      onMouseLeave: () => v(!1),
      onClick: () => {
        x(), v((i) => !i);
      },
      children: [
        n,
        f && xe(
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fixed z-50 rounded bg-gray-800 px-3 py-2 text-sm text-white shadow-lg pointer-events-none",
              style: {
                top: u.top,
                left: u.left,
                transform: "translate(-50%, -100%)",
                maxWidth: "min(90vw, 400px)"
              },
              children: s
            }
          ),
          document.body
        )
      ]
    }
  ) : /* @__PURE__ */ r.jsx("div", { className: "relative inline-block", children: n });
}
function We({ serverVersion: n, clientVersion: s, licensesUri: f }) {
  const { t: v } = e1();
  return /* @__PURE__ */ r.jsxs("div", { className: "flex text-gray-500 text-xs justify-between", children: [
    /* @__PURE__ */ r.jsx(Te, {}),
    /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ r.jsx(Ce, { tooltip: n, children: s }),
      /* @__PURE__ */ r.jsx("a", { className: "font-semibold hover:underline cursor-pointer", href: f, target: "_blank", children: v("licenses") })
    ] })
  ] });
}
function Le({ href: n, to: s, children: f, className: v = "", onClick: u, ...b }) {
  const h = !n && !!u, x = (i) => {
    h && i.preventDefault(), u && u(i);
  };
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      href: n || "#",
      target: n != null && n.startsWith("http") ? "_blank" : void 0,
      rel: n != null && n.startsWith("http") ? "noopener noreferrer" : void 0,
      className: `font-semibold inline-flex items-center gap-1 text-blue-600 hover:underline ${v}`,
      onClick: x,
      ...b,
      children: f
    }
  );
}
function $e({ className: n }) {
  return /* @__PURE__ */ r.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 900 250", preserveAspectRatio: "xMidYMid meet", className: n, children: /* @__PURE__ */ r.jsxs("g", { children: [
    /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M284.91,162.45v-58.8h26.71c6.38,0,12.01,1.22,16.88,3.65,4.87,2.43,8.68,5.85,11.42,10.25,2.75,4.4,4.12,9.56,4.12,15.5s-1.37,11.1-4.12,15.5c-2.74,4.4-6.55,7.81-11.42,10.25-4.87,2.44-10.5,3.65-16.88,3.65h-26.71ZM298.6,151.36h12.35c3.92,0,7.32-.74,10.2-2.23,2.88-1.48,5.12-3.61,6.72-6.38,1.6-2.77,2.4-6.01,2.4-9.7s-.8-7-2.4-9.74c-1.6-2.74-3.84-4.86-6.72-6.34-2.88-1.48-6.29-2.23-10.2-2.23h-12.35v36.62Z" }),
        /* @__PURE__ */ r.jsxs("g", { children: [
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M285.41,162.45v-56.4c0-.72.13-1.59,0-2.3,0-.03,0-.07,0-.1l-.5.5h20.12c2.51,0,5.02-.04,7.52,0,7.59.14,15.28,2.23,21.22,7.13s9.07,11.53,9.66,18.9-1.15,15.13-6.02,21.01-11.66,9.06-18.9,10.23c-3.6.58-7.22.52-10.85.52h-22.75c-.64,0-.64,1,0,1h20.6c2.87,0,5.77.09,8.64-.07,7.56-.4,15.07-2.79,20.85-7.8s8.81-11.71,9.42-19.06-1.1-15.19-5.82-21.23-11.45-9.5-18.67-10.89c-3.91-.75-7.83-.76-11.78-.76h-23.24c-.27,0-.5.23-.5.5v56.4c0,.76-.05,1.54,0,2.3,0,.03,0,.07,0,.1,0,.64,1,.64,1,0Z" }),
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M298.6,151.86h11.01c2.51,0,5.01-.09,7.46-.69,3.65-.89,7.08-2.8,9.51-5.7s3.84-6.76,4.13-10.65-.36-8.31-2.45-11.85c-1.94-3.28-4.93-5.74-8.46-7.17-2.94-1.19-6.1-1.56-9.25-1.56h-11.95c-.27,0-.5.23-.5.5v36.62c0,.64,1,.64,1,0v-36.62l-.5.5h10.62c2.17,0,4.33.01,6.48.42,3.73.71,7.25,2.42,9.82,5.26s3.98,6.76,4.21,10.67-.48,8.07-2.64,11.5c-1.98,3.15-5.05,5.43-8.56,6.63-2.67.91-5.44,1.15-8.25,1.15h-11.68c-.64,0-.64,1,0,1Z" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M390.49,163.46c-8.35,0-14.87-2.32-19.57-6.97s-7.06-11.31-7.06-19.99v-32.84h13.69v32.51c0,5.54,1.15,9.56,3.44,12.05,2.3,2.49,5.49,3.74,9.58,3.74s7.36-1.25,9.66-3.74c2.3-2.49,3.45-6.51,3.45-12.05v-32.51h13.35v32.84c0,8.68-2.35,15.34-7.05,19.99-4.71,4.65-11.2,6.97-19.49,6.97Z" }),
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M390.49,162.96c-7.54-.02-15.19-2.11-20.3-7.98-4.46-5.12-5.83-12.01-5.83-18.63,0-2.99,0-5.98,0-8.97v-22.52c0-.34.05-.73,0-1.07,0-.04,0-.09,0-.14l-.5.5h13.69l-.5-.5v28.86c0,2.7-.08,5.41.29,8.09s1.23,5.56,3.07,7.7c1.96,2.29,4.78,3.59,7.74,3.99,3.16.42,6.61.1,9.46-1.42,2.42-1.29,4.18-3.39,5.19-5.92,1.35-3.37,1.39-7.03,1.39-10.61v-30.7l-.5.5h13.35l-.5-.5v32.3c0,5.93-.92,11.99-4.29,17.01-4.18,6.24-11.3,9.3-18.6,9.87-1.05.08-2.1.12-3.15.12-.64,0-.64,1,0,1,7.57-.02,15.26-2.11,20.53-7.84,4.9-5.32,6.5-12.61,6.51-19.67,0-2.84,0-5.67,0-8.51v-14.95c0-3.06.09-6.13,0-9.19,0-.05,0-.1,0-.15,0-.27-.23-.5-.5-.5h-13.35c-.27,0-.5.23-.5.5v28.27c0,2.31.08,4.65-.1,6.96-.22,2.83-.84,5.8-2.52,8.16s-4.46,3.78-7.32,4.23c-3.17.5-6.71.18-9.51-1.47-2.41-1.42-3.95-3.7-4.75-6.34-.94-3.13-.91-6.38-.91-9.61v-30.18c0-.27-.23-.5-.5-.5h-13.69c-.27,0-.5.23-.5.5v32.52c0,6.32,1.14,12.85,4.95,18.05,4.46,6.07,11.55,9.02,18.9,9.61,1.09.09,2.18.12,3.28.13.64,0,.64-1,0-1Z" })
      ] }),
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M436.47,162.45v-58.8h25.45c5.26,0,9.8.85,13.61,2.56,3.81,1.71,6.75,4.16,8.82,7.35,2.07,3.19,3.11,6.97,3.11,11.34s-1.04,8.22-3.11,11.38c-2.07,3.17-5.01,5.57-8.82,7.22-3.81,1.65-8.35,2.48-13.61,2.48h-17.98l6.22-5.88v22.34h-13.69ZM450.16,141.62l-6.22-6.47h17.22c4.15,0,7.28-.9,9.41-2.69,2.13-1.79,3.19-4.31,3.19-7.56s-1.06-5.75-3.19-7.52c-2.13-1.76-5.26-2.65-9.41-2.65h-17.22l6.22-6.47v33.35ZM473.94,162.45l-14.78-21.34h14.62l14.78,21.34h-14.62Z" }),
        /* @__PURE__ */ r.jsxs("g", { children: [
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M436.97,162.45v-56.4c0-.72.13-1.59,0-2.3,0-.03,0-.07,0-.1l-.5.5h23.8c3.38,0,6.75.12,10.07.87,5.53,1.26,10.74,4.2,13.78,9.12s3.62,11.67,1.94,17.27-5.9,9.67-11.18,11.83c-4.29,1.76-8.93,2.24-13.53,2.24h-17.41l.35.85c2.07-1.96,4.14-3.92,6.22-5.88l-.85-.35v22.34l.5-.5h-13.69c-.64,0-.64,1,0,1h13.69c.27,0,.5-.23.5-.5v-22.34c0-.44-.54-.65-.85-.35-2.07,1.96-4.14,3.92-6.22,5.88-.32.3-.07.85.35.85h16.43c4.04,0,8.06-.21,11.97-1.32,5.42-1.54,10.36-4.77,13.13-9.79s3.23-11.82,1.49-17.39-5.92-9.85-11.18-12.21c-4.44-1.99-9.31-2.63-14.14-2.63h-25.17c-.27,0-.5.23-.5.5v56.4c0,.76-.05,1.54,0,2.3,0,.03,0,.07,0,.1,0,.64,1,.64,1,0Z" }),
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M450.52,141.27c-2.07-2.16-4.14-4.31-6.22-6.47l-.35.85h16.65c2.66,0,5.35-.21,7.81-1.28,3.31-1.44,5.37-4.4,5.77-7.96s-.66-7.46-3.71-9.73c-3.91-2.9-9.15-2.43-13.77-2.43h-12.75l.35.85c2.07-2.16,4.14-4.31,6.22-6.47l-.85-.35v33.35c0,.64,1,.64,1,0v-33.35c0-.43-.55-.67-.85-.35-2.07,2.16-4.14,4.31-6.22,6.47-.3.31-.09.85.35.85h16.27c2.29,0,4.58.08,6.78.8,1.55.5,3,1.33,4.1,2.54,1.21,1.33,1.88,3.05,2.08,4.83.42,3.67-.71,7.44-3.99,9.43-3.82,2.33-8.75,1.81-13.06,1.81-3.98,0-7.97-.04-11.95,0-.08,0-.16,0-.24,0-.44,0-.65.54-.35.85,2.07,2.16,4.14,4.31,6.22,6.47.45.46,1.15-.24.71-.71Z" }),
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M474.37,162.2c-1.67-2.41-3.34-4.82-5.01-7.24l-7.95-11.47c-.61-.88-1.22-1.76-1.83-2.63l-.43.75h14.62l-.43-.25c1.67,2.41,3.34,4.82,5.01,7.24,2.65,3.82,5.3,7.64,7.95,11.47.61.88,1.22,1.76,1.83,2.63l.43-.75h-14.62c-.64,0-.64,1,0,1h14.62c.36,0,.65-.43.43-.75-3.3-4.77-6.6-9.53-9.91-14.3l-4.63-6.68c-.08-.12-.16-.25-.25-.36-.26-.31-.59-.25-.96-.25h-14.09c-.36,0-.65.43-.43.75,1.67,2.41,3.34,4.82,5.01,7.24,2.65,3.82,5.3,7.64,7.95,11.47.61.88,1.22,1.76,1.83,2.63.36.53,1.23.03.86-.5Z" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M500.56,162.45l26.12-58.8h13.44l26.38,58.8h-14.28l-21.59-51.91h5.46l-21.59,51.91h-13.94ZM513.75,149.85l3.44-10.33h30.41l3.53,10.33h-37.38Z" }),
        /* @__PURE__ */ r.jsxs("g", { children: [
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M500.99,162.7c.87-1.95,1.73-3.9,2.6-5.85,2.08-4.69,4.16-9.37,6.24-14.06,2.52-5.67,5.03-11.33,7.55-17,2.17-4.88,4.34-9.76,6.51-14.65l2.15-4.84.67-1.52c.11-.24.29-.52.35-.78,0-.03.03-.07.04-.1l-.43.25h13.44l-.43-.25c.87,1.95,1.75,3.89,2.62,5.84,2.1,4.68,4.2,9.35,6.29,14.03,2.54,5.66,5.08,11.32,7.62,16.98,2.2,4.9,4.39,9.79,6.59,14.69l2.19,4.87c.33.73.59,1.62,1.03,2.29.02.03.03.07.05.1l.43-.75h-14.28l.48.37c-.72-1.73-1.44-3.45-2.15-5.18-1.72-4.13-3.43-8.25-5.15-12.38-2.07-4.99-4.15-9.98-6.22-14.97-1.8-4.33-3.6-8.66-5.4-12.99l-1.78-4.28-.55-1.33c-.09-.22-.16-.5-.29-.69-.02-.02-.02-.06-.04-.09l-.48.63h5.46l-.48-.63c-.72,1.73-1.44,3.45-2.15,5.18-1.72,4.13-3.43,8.25-5.15,12.38-2.07,4.99-4.15,9.98-6.22,14.97-1.8,4.33-3.6,8.66-5.4,12.99l-1.78,4.28c-.27.64-.68,1.35-.84,2.03,0,.03-.02.06-.04.09l.48-.37h-13.94c-.64,0-.64,1,0,1h13.94c.24,0,.4-.16.48-.37.72-1.73,1.44-3.45,2.15-5.18,1.72-4.13,3.43-8.25,5.15-12.38,2.07-4.99,4.15-9.98,6.22-14.97,1.8-4.33,3.6-8.66,5.4-12.99l1.78-4.28c.27-.66.64-1.34.84-2.03,0-.03.02-.06.04-.09.13-.31-.19-.63-.48-.63h-5.46c-.29,0-.61.33-.48.63.72,1.73,1.44,3.45,2.15,5.18,1.72,4.13,3.43,8.25,5.15,12.38,2.07,4.99,4.15,9.98,6.22,14.97,1.8,4.33,3.6,8.66,5.4,12.99.87,2.1,1.67,4.24,2.62,6.31.01.03.02.06.04.09.09.21.24.37.48.37h14.28c.41,0,.58-.42.43-.75-.87-1.95-1.75-3.89-2.62-5.84-2.1-4.68-4.2-9.35-6.29-14.03-2.54-5.66-5.08-11.32-7.62-16.98-2.2-4.9-4.39-9.79-6.59-14.69l-2.19-4.87c-.34-.75-.62-1.57-1.03-2.29-.02-.03-.03-.07-.05-.1-.07-.16-.27-.25-.43-.25h-13.44c-.16,0-.36.09-.43.25-.87,1.95-1.73,3.9-2.6,5.85-2.08,4.69-4.16,9.37-6.24,14.06-2.52,5.67-5.03,11.33-7.55,17l-6.51,14.65c-1.06,2.38-2.19,4.73-3.17,7.14-.01.03-.03.07-.04.1-.26.58.6,1.09.86.5Z" }),
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M514.23,149.98c1-3.01,2.01-6.02,3.01-9.04.14-.43.29-.86.43-1.29l-.48.37h30.41l-.48-.37c1.03,3,2.05,6.01,3.08,9.01.15.44.3.88.45,1.32l.48-.63h-37.38c-.64,0-.64,1,0,1h37.38c.31,0,.59-.32.48-.63-1.03-3-2.05-6.01-3.08-9.01-.15-.44-.3-.88-.45-1.32-.07-.21-.25-.37-.48-.37h-30.41c-.23,0-.41.16-.48.37-1,3.01-2.01,6.02-3.01,9.04-.14.43-.29.86-.43,1.29-.2.61.76.87.96.27Z" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M582.71,162.45v-58.8h28.73c7.39,0,12.95,1.4,16.67,4.2,3.72,2.8,5.59,6.5,5.59,11.09,0,3.08-.76,5.75-2.27,8.02-1.51,2.27-3.6,4.02-6.26,5.25-2.66,1.23-5.67,1.85-9.03,1.85l1.6-3.53c3.7,0,6.96.62,9.79,1.85,2.83,1.23,5.05,3.02,6.68,5.38,1.62,2.35,2.44,5.24,2.44,8.65,0,5.04-1.99,8.97-5.96,11.8-3.98,2.83-9.83,4.24-17.56,4.24h-30.41ZM596.24,152.2h15.96c3.47,0,6.13-.59,7.98-1.76,1.85-1.18,2.77-3,2.77-5.46s-.92-4.37-2.77-5.54c-1.85-1.18-4.51-1.76-7.98-1.76h-16.97v-9.91h14.53c3.3,0,5.84-.57,7.6-1.72,1.76-1.15,2.64-2.9,2.64-5.25s-.88-4.09-2.64-5.21c-1.76-1.12-4.3-1.68-7.6-1.68h-13.52v38.3Z" }),
        /* @__PURE__ */ r.jsxs("g", { children: [
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M583.21,162.45v-56.4c0-.72.13-1.59,0-2.3,0-.03,0-.07,0-.1l-.5.5h22.83c3.53,0,7.11-.12,10.63.22s7.27,1.16,10.38,3.04,5.56,4.89,6.34,8.52c.85,3.98.03,8.4-2.5,11.62s-6.65,5.16-10.78,5.77c-1.15.17-2.31.23-3.47.24l.43.75,1.6-3.53-.43.25c4.54.02,9.26.96,12.95,3.75,1.68,1.27,3.1,2.94,4.03,4.83.99,2,1.39,4.24,1.42,6.46.06,3.97-1.25,7.72-4.19,10.46-2.74,2.55-6.34,3.91-9.96,4.64-4.39.89-8.87.78-13.33.78h-15.19c-3.53,0-7.07-.09-10.59,0-.06,0-.11,0-.17,0-.64,0-.64,1,0,1h25.3c4.51,0,9.04.12,13.5-.68,3.74-.67,7.43-1.96,10.4-4.38s4.83-6.05,5.17-9.97c.37-4.41-.78-8.85-3.82-12.15s-7.34-4.94-11.68-5.5c-1.27-.17-2.56-.24-3.84-.24-.16,0-.36.09-.43.25l-1.6,3.53c-.15.33.02.75.43.75,4.4-.02,8.9-1.09,12.44-3.82,3.31-2.56,5.27-6.34,5.57-10.5.28-3.88-.78-7.7-3.39-10.64-2.38-2.68-5.62-4.34-9.04-5.26-4.51-1.22-9.17-1.18-13.81-1.18h-14.55c-3.49,0-6.99-.08-10.47,0-.06,0-.12,0-.18,0-.27,0-.5.23-.5.5v56.4c0,.76-.05,1.54,0,2.3,0,.03,0,.07,0,.1,0,.64,1,.64,1,0Z" }),
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M596.24,152.7h15.22c2.3,0,4.64-.09,6.84-.84,1.42-.48,2.79-1.23,3.74-2.42s1.39-2.8,1.41-4.37-.34-3.22-1.32-4.52c-.9-1.2-2.21-1.96-3.59-2.47-2.22-.81-4.6-.92-6.94-.92h-11.8c-1.44,0-2.9-.09-4.34,0-.08,0-.15,0-.23,0l.5.5v-9.91l-.5.5h13.6c1.89,0,3.78-.05,5.62-.49,2.61-.63,5.05-2.13,5.79-4.86s.07-5.77-2.2-7.47c-3.24-2.42-7.69-2.04-11.53-2.04h-10.27c-.27,0-.5.23-.5.5v38.3c0,.64,1,.64,1,0v-38.3l-.5.5h8.31c3.37,0,7.08-.33,10.34.63,1.26.37,2.52.97,3.4,1.98s1.23,2.42,1.23,3.78-.36,2.85-1.34,3.92c-.87.95-2.07,1.54-3.29,1.91-3.19.96-6.81.64-10.11.64h-9.54c-.27,0-.5.23-.5.5v9.91c0,.27.23.5.5.5h14.94c1.39,0,2.78-.03,4.16.08,2.98.24,6.69,1.16,7.76,4.35.51,1.52.51,3.34-.05,4.85s-1.7,2.44-3.06,3.08c-2.23,1.04-4.78,1.18-7.2,1.18h-4.63c-3.56,0-7.12-.06-10.68,0-.08,0-.15,0-.23,0-.64,0-.64,1,0,1Z" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M657.05,162.45v-58.8h13.69v47.71h29.32v11.09h-43.01Z" }),
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M657.55,162.45v-56.4c0-.72.13-1.59,0-2.3,0-.03,0-.07,0-.1l-.5.5h13.69l-.5-.5v45.75c0,.62-.05,1.26,0,1.88,0,.03,0,.06,0,.08,0,.27.23.5.5.5h29.32l-.5-.5v11.09l.5-.5h-37.7c-1.73,0-3.51-.13-5.23,0-.02,0-.05,0-.07,0-.64,0-.64,1,0,1h37.7c1.73,0,3.51.13,5.23,0,.02,0,.05,0,.07,0,.27,0,.5-.23.5-.5v-11.09c0-.27-.23-.5-.5-.5h-29.32l.5.5v-45.75c0-.62.05-1.26,0-1.88,0-.03,0-.06,0-.08,0-.27-.23-.5-.5-.5h-13.69c-.27,0-.5.23-.5.5v56.4c0,.76-.05,1.54,0,2.3,0,.03,0,.07,0,.1,0,.64,1,.64,1,0Z" })
      ] }),
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M746.43,163.46c-4.65,0-8.93-.76-12.85-2.27-3.92-1.51-7.34-3.64-10.25-6.38-2.91-2.74-5.17-5.96-6.76-9.66-1.6-3.7-2.4-7.73-2.4-12.1s.8-8.47,2.4-12.14c1.59-3.67,3.85-6.87,6.76-9.62,2.91-2.74,6.31-4.87,10.2-6.38,3.89-1.51,8.16-2.27,12.81-2.27s8.92.74,12.81,2.23c3.89,1.48,7.29,3.6,10.2,6.34s5.17,5.96,6.76,9.66c1.6,3.7,2.4,7.76,2.4,12.18s-.8,8.42-2.4,12.14c-1.6,3.73-3.85,6.96-6.76,9.7-2.91,2.75-6.31,4.86-10.2,6.34-3.89,1.48-8.13,2.23-12.73,2.23ZM746.34,151.95c2.63,0,5.05-.46,7.27-1.39s4.16-2.24,5.84-3.95c1.68-1.71,2.98-3.7,3.91-5.97s1.39-4.8,1.39-7.6-.46-5.33-1.39-7.6-2.23-4.26-3.91-5.97c-1.68-1.71-3.63-3.02-5.84-3.95s-4.63-1.39-7.27-1.39-5.07.46-7.31,1.39-4.19,2.24-5.84,3.95c-1.65,1.71-2.94,3.7-3.86,5.97-.92,2.27-1.39,4.8-1.39,7.6s.46,5.33,1.39,7.6c.92,2.27,2.21,4.26,3.86,5.97,1.65,1.71,3.6,3.02,5.84,3.95s4.68,1.39,7.31,1.39Z" }),
        /* @__PURE__ */ r.jsxs("g", { children: [
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M746.43,162.96c-6.51-.02-12.94-1.61-18.45-5.15-5.17-3.32-9.23-8.24-11.41-13.99-2.31-6.1-2.53-13.13-.73-19.39,1.7-5.9,5.38-11.13,10.27-14.83s11.32-5.98,17.68-6.37,13.11.7,18.88,3.79c5.41,2.9,9.83,7.43,12.5,12.96,2.83,5.87,3.53,12.77,2.29,19.15s-4.38,11.8-9.06,15.98-10.76,6.76-17.01,7.56c-1.65.21-3.3.3-4.96.31-.64,0-.64,1,0,1,6.75-.02,13.48-1.69,19.14-5.44,5.31-3.51,9.39-8.63,11.59-14.61,2.31-6.29,2.49-13.55.59-19.97-1.8-6.1-5.6-11.47-10.67-15.28-5.25-3.95-11.66-6.03-18.19-6.43s-13.67.83-19.66,4.14c-5.53,3.06-10.08,7.8-12.76,13.53-2.83,6.04-3.48,13.06-2.19,19.59s4.62,12.12,9.45,16.37c4.86,4.28,11.02,6.9,17.42,7.76,1.75.23,3.51.34,5.27.34.64,0,.64-1,0-1Z" }),
          /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M746.34,152.45c3.99-.02,7.9-1.13,11.15-3.49s5.51-5.54,6.74-9.23c2.52-7.55.5-16.54-5.66-21.74s-15.42-5.78-22.23-1.65c-3.33,2.02-5.88,5.14-7.38,8.72s-1.85,7.89-1.2,11.81,2.49,7.48,5.23,10.25,6.42,4.55,10.29,5.11c1.02.15,2.04.22,3.07.22.64,0,.64-1,0-1-3.8-.02-7.52-1.06-10.62-3.29s-5.2-5.32-6.33-8.79c-2.33-7.12-.5-15.54,5.22-20.53s14.74-5.55,21.17-1.63c3.15,1.92,5.61,4.85,7.04,8.24s1.77,7.54,1.14,11.26c-1.27,7.41-7.12,13.38-14.6,14.53-1,.15-2,.21-3.01.22-.64,0-.64,1,0,1Z" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M792.21,162.45l25.2-34.86v9.91l-24.11-33.85h15.37l16.72,23.52-6.55.17,16.63-23.69h14.7l-24.02,33.26v-9.74l25.45,35.28h-15.71l-17.3-24.95h6.22l-17.05,24.95h-15.54Z" }),
        /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M792.64,162.7c.84-1.16,1.67-2.31,2.51-3.47,2.01-2.78,4.02-5.56,6.03-8.34,2.42-3.34,4.83-6.69,7.25-10.03,2.1-2.91,4.2-5.81,6.3-8.72l2.08-2.88c.31-.42.77-.89.99-1.37,0-.02.03-.04.04-.06l-.93-.25v9.91l.93-.25c-2.72-3.82-5.45-7.65-8.17-11.47-4.33-6.08-8.66-12.16-12.99-18.24-.98-1.38-1.97-2.76-2.95-4.14l-.43.75h15.37l-.43-.25c1.89,2.65,3.77,5.31,5.66,7.96,3,4.22,6,8.45,9.01,12.67.68.96,1.37,1.93,2.05,2.89l.43-.75c-2.18.06-4.37.11-6.55.17l.43.75c1.88-2.68,3.76-5.35,5.64-8.03,2.98-4.24,5.96-8.49,8.94-12.73.69-.98,1.37-1.95,2.06-2.93l-.43.25h14.7l-.43-.75c-2.72,3.77-5.44,7.53-8.16,11.3-4.3,5.96-8.61,11.91-12.91,17.87-.98,1.36-1.97,2.73-2.95,4.09l.93.25v-9.74l-.93.25c.84,1.17,1.68,2.33,2.53,3.5,2.02,2.8,4.05,5.61,6.07,8.41,2.45,3.39,4.9,6.79,7.35,10.18l6.36,8.81,2.1,2.91c.31.43.61,1.04,1,1.39.02.02.03.04.05.06l.43-.75h-15.71l.43.25c-1.95-2.81-3.9-5.63-5.85-8.44-3.11-4.48-6.21-8.96-9.32-13.44-.71-1.02-1.42-2.05-2.13-3.07l-.43.75h6.22l-.43-.75c-1.93,2.82-3.86,5.64-5.79,8.47-3.05,4.46-6.1,8.92-9.15,13.38-.71,1.03-1.41,2.07-2.12,3.1l.43-.25h-15.54c-.64,0-.64,1,0,1h14.78c.28,0,.75.08,1.01-.07.17-.1.3-.36.41-.52,1.66-2.43,3.33-4.87,4.99-7.3,2.46-3.6,4.92-7.2,7.38-10.79l2.9-4.25c.49-.72,1.03-1.42,1.48-2.17.02-.03.05-.07.07-.1.22-.32-.07-.75-.43-.75h-6.22c-.36,0-.65.43-.43.75,1.24,1.78,2.47,3.56,3.71,5.35l7.44,10.72c1.87,2.7,3.75,5.4,5.62,8.11.32.45.55,1.01,1.15,1.02,1.43.03,2.86,0,4.28,0,3.67,0,7.34.06,11.01,0,.08,0,.15,0,.23,0,.35,0,.66-.44.43-.75-.84-1.17-1.68-2.33-2.53-3.5-2.02-2.8-4.05-5.61-6.07-8.41-2.45-3.39-4.9-6.79-7.35-10.18-2.12-2.94-4.24-5.88-6.36-8.81-1.03-1.43-2-2.93-3.1-4.3-.02-.02-.03-.04-.05-.06-.28-.38-.93-.28-.93.25v9.74c0,.53.66.64.93.25,2.72-3.77,5.44-7.53,8.16-11.3,4.3-5.96,8.61-11.91,12.91-17.87.98-1.36,1.97-2.73,2.95-4.09.23-.32-.08-.75-.43-.75h-14.08c-.35,0-.76-.07-1.02.2-.11.12-.2.28-.29.41-1.62,2.31-3.25,4.63-4.87,6.94-2.4,3.41-4.79,6.83-7.19,10.24l-2.81,4c-.47.67-1.02,1.33-1.43,2.04-.02.03-.05.06-.07.1-.22.31.07.76.43.75,2.18-.06,4.37-.11,6.55-.17.35,0,.66-.43.43-.75-1.21-1.7-2.42-3.41-3.63-5.11-2.42-3.4-4.83-6.8-7.25-10.2-1.8-2.53-3.6-5.07-5.4-7.6-.13-.19-.26-.39-.4-.57-.22-.27-.43-.28-.74-.28h-4.36c-3.5,0-7.01-.06-10.51,0-.07,0-.14,0-.22,0-.35,0-.66.43-.43.75,2.72,3.82,5.45,7.65,8.17,11.47,4.33,6.08,8.66,12.16,12.99,18.24.98,1.38,1.97,2.76,2.95,4.14.27.39.93.28.93-.25v-9.91c0-.53-.66-.63-.93-.25-.84,1.16-1.67,2.31-2.51,3.47l-6.03,8.34c-2.42,3.34-4.83,6.69-7.25,10.03-2.1,2.91-4.2,5.81-6.3,8.72l-2.08,2.88c-.32.45-.72.89-.99,1.37-.01.02-.03.04-.04.06-.38.52.49,1.02.86.5Z" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("g", { id: "Signet", children: /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("path", { style: { fill: "#191a1a" }, d: "M49.26,157.43l36.44,36.52c1.15,1.15,3.02,1.15,4.16,0l36.09-36.22c1.14-1.15,1.14-3.01,0-4.15l-36.29-36.31c-1.15-1.15-3-1.15-4.15,0l-36.24,36.01c-1.15,1.15-1.16,3.01,0,4.16Z" }),
      /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M94.96,112.18l36.44,36.52c1.15,1.15,3.02,1.15,4.16,0l36.09-36.22c1.14-1.15,1.14-3.01,0-4.15l-36.29-36.31c-1.15-1.15-3-1.15-4.15,0l-36.24,36.01c-1.15,1.15-1.16,3.01,0,4.16Z" }),
      /* @__PURE__ */ r.jsx("path", { style: { fill: "#019b9f" }, d: "M140.28,157.49l36.44,36.52c1.15,1.15,3.02,1.15,4.16,0l36.09-36.22c1.14-1.15,1.14-3.01,0-4.15l-36.29-36.31c-1.15-1.15-3-1.15-4.15,0l-36.24,36.01c-1.15,1.15-1.16,3.01,0,4.16Z" }),
      /* @__PURE__ */ r.jsx("rect", { style: { fill: "#191a1a" }, x: "86.66", y: "179.58", width: "57.47", height: "8.05", rx: "4.03", ry: "4.03", transform: "translate(-95.73 134.06) rotate(-44.64)" }),
      /* @__PURE__ */ r.jsx("rect", { style: { fill: "#019b9f" }, x: "123.67", y: "100.73", width: "121.69", height: "8.07", rx: "4.04", ry: "4.04", transform: "translate(240.92 309.32) rotate(-135)" })
    ] }) })
  ] }) });
}
function Ie({ text: n }) {
  return /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 pt-2", children: n });
}
function Se({ id: n, type: s = "text", name: f, autoComplete: v, value: u, onChange: b, placeholder: h = "", className: x = "" }) {
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      id: n,
      name: f,
      type: s,
      autoComplete: v,
      value: u,
      placeholder: h,
      onChange: b,
      className: `block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-1 border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${x}`
    }
  );
}
Se.Label = function({ htmlFor: n = "", text: s, className: f = "" }) {
  return /* @__PURE__ */ r.jsx("label", { htmlFor: n, className: `block text-sm font-medium text-gray-700 ${f}`, children: s });
};
function Be({ i18nKey: n, ...s }) {
  const { t: f } = e1();
  return console.log(n, s), /* @__PURE__ */ r.jsx(
    pe,
    {
      i18nKey: n,
      values: { ...s },
      components: {
        p: /* @__PURE__ */ r.jsx("p", { className: "mb-2 last:mb-0" }),
        b: /* @__PURE__ */ r.jsx("span", { className: "font-semibold" })
      }
    }
  );
}
export {
  ye as Box,
  Ae as Button,
  De as ButtonOutline,
  Ze as Container,
  We as Footer,
  Se as Input,
  Le as Link,
  we as LogoColored,
  je as LogoIcon,
  $e as LogoInline,
  Me as PrimaryButton,
  Ne as PrimaryButtonOutline,
  Fe as SibButton,
  Ie as TextBlock,
  Ce as Tooltip,
  Be as Translated
};
