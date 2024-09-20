(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
        for (const i of l) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
        const i = {};
        return (
            l.integrity && (i.integrity = l.integrity),
            l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials" ? (i.credentials = "include") : l.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"),
            i
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i);
    }
})();
var Vu = { exports: {} },
    el = {},
    Hu = { exports: {} },
    T = {};
/**

 * @license React

 * react.production.min.js

 *

 * Copyright (c) Facebook, Inc. and its affiliates.

 *

 * This source code is licensed under the MIT license found in the

 * LICENSE file in the root directory of this source tree.

 */ var Xn = Symbol.for(
        "react.element"
    ),
    nc = Symbol.for("react.portal"),
    rc = Symbol.for("react.fragment"),
    lc = Symbol.for("react.strict_mode"),
    ic = Symbol.for("react.profiler"),
    oc = Symbol.for("react.provider"),
    uc = Symbol.for("react.context"),
    sc = Symbol.for("react.forward_ref"),
    ac = Symbol.for("react.suspense"),
    cc = Symbol.for("react.memo"),
    fc = Symbol.for("react.lazy"),
    Oo = Symbol.iterator;
function dc(e) {
    return e === null || typeof e != "object" ? null : ((e = (Oo && e[Oo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Wu = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Qu = Object.assign,
    Ku = {};
function rn(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Ku), (this.updater = n || Wu);
}
rn.prototype.isReactComponent = {};
rn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
};
rn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yu() {}
Yu.prototype = rn.prototype;
function Fi(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Ku), (this.updater = n || Wu);
}
var Ui = (Fi.prototype = new Yu());
Ui.constructor = Fi;
Qu(Ui, rn.prototype);
Ui.isPureReactComponent = !0;
var Mo = Array.isArray,
    Xu = Object.prototype.hasOwnProperty,
    $i = { current: null },
    Gu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zu(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    if (t != null) for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t)) Xu.call(t, r) && !Gu.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        l.children = s;
    }
    if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return { $$typeof: Xn, type: e, key: i, ref: o, props: l, _owner: $i.current };
}
function pc(e, t) {
    return { $$typeof: Xn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ai(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function mc(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Do = /\/+/g;
function wl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? mc("" + e.key) : t.toString(36);
}
function yr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Xn:
                    case nc:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (l = l(o)),
            (e = r === "" ? "." + wl(o, 0) : r),
            Mo(l)
                ? ((n = ""),
                  e != null && (n = e.replace(Do, "$&/") + "/"),
                  yr(l, t, n, "", function (c) {
                      return c;
                  }))
                : l != null && (Ai(l) && (l = pc(l, n + (!l.key || (o && o.key === l.key) ? "" : ("" + l.key).replace(Do, "$&/") + "/") + e)), t.push(l)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Mo(e)))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + wl(i, u);
            o += yr(i, t, n, s, l);
        }
    else if (((s = dc(e)), typeof s == "function")) for (e = s.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (s = r + wl(i, u++)), (o += yr(i, t, n, s, l));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."))
        );
    return o;
}
function tr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        yr(e, r, "", "", function (i) {
            return t.call(n, i, l++);
        }),
        r
    );
}
function vc(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var oe = { current: null },
    wr = { transition: null },
    hc = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: wr, ReactCurrentOwner: $i };
function Ju() {
    throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
    map: tr,
    forEach: function (e, t, n) {
        tr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            tr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            tr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Ai(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
T.Component = rn;
T.Fragment = rc;
T.Profiler = ic;
T.PureComponent = Fi;
T.StrictMode = lc;
T.Suspense = ac;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hc;
T.act = Ju;
T.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Qu({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if ((t.ref !== void 0 && ((i = t.ref), (o = $i.current)), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
        for (s in t) Xu.call(t, s) && !Gu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
    }
    return { $$typeof: Xn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
    return (e = { $$typeof: uc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: oc, _context: e }), (e.Consumer = e);
};
T.createElement = Zu;
T.createFactory = function (e) {
    var t = Zu.bind(null, e);
    return (t.type = e), t;
};
T.createRef = function () {
    return { current: null };
};
T.forwardRef = function (e) {
    return { $$typeof: sc, render: e };
};
T.isValidElement = Ai;
T.lazy = function (e) {
    return { $$typeof: fc, _payload: { _status: -1, _result: e }, _init: vc };
};
T.memo = function (e, t) {
    return { $$typeof: cc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
    var t = wr.transition;
    wr.transition = {};
    try {
        e();
    } finally {
        wr.transition = t;
    }
};
T.unstable_act = Ju;
T.useCallback = function (e, t) {
    return oe.current.useCallback(e, t);
};
T.useContext = function (e) {
    return oe.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
    return oe.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
    return oe.current.useEffect(e, t);
};
T.useId = function () {
    return oe.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
    return oe.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
    return oe.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
    return oe.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
    return oe.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
    return oe.current.useReducer(e, t, n);
};
T.useRef = function (e) {
    return oe.current.useRef(e);
};
T.useState = function (e) {
    return oe.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
    return oe.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
    return oe.current.useTransition();
};
T.version = "18.3.1";
Hu.exports = T;
var Ln = Hu.exports;
/**

 * @license React

 * react-jsx-runtime.production.min.js

 *

 * Copyright (c) Facebook, Inc. and its affiliates.

 *

 * This source code is licensed under the MIT license found in the

 * LICENSE file in the root directory of this source tree.

 */ var gc = Ln,
    yc = Symbol.for("react.element"),
    wc = Symbol.for("react.fragment"),
    kc = Object.prototype.hasOwnProperty,
    Sc = gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) kc.call(t, r) && !Ec.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return { $$typeof: yc, type: e, key: i, ref: o, props: l, _owner: Sc.current };
}
el.Fragment = wc;
el.jsx = qu;
el.jsxs = qu;
Vu.exports = el;
var Me = Vu.exports,
    bu = { exports: {} },
    ge = {},
    es = { exports: {} },
    ts = {};
/**

 * @license React

 * scheduler.production.min.js

 *

 * Copyright (c) Facebook, Inc. and its affiliates.

 *

 * This source code is licensed under the MIT license found in the

 * LICENSE file in the root directory of this source tree.

 */ (function (
    e
) {
    function t(x, N) {
        var z = x.length;
        x.push(N);
        e: for (; 0 < z; ) {
            var H = (z - 1) >>> 1,
                X = x[H];
            if (0 < l(X, N)) (x[H] = N), (x[z] = X), (z = H);
            else break e;
        }
    }
    function n(x) {
        return x.length === 0 ? null : x[0];
    }
    function r(x) {
        if (x.length === 0) return null;
        var N = x[0],
            z = x.pop();
        if (z !== N) {
            x[0] = z;
            e: for (var H = 0, X = x.length, bn = X >>> 1; H < bn; ) {
                var vt = 2 * (H + 1) - 1,
                    yl = x[vt],
                    ht = vt + 1,
                    er = x[ht];
                if (0 > l(yl, z)) ht < X && 0 > l(er, yl) ? ((x[H] = er), (x[ht] = z), (H = ht)) : ((x[H] = yl), (x[vt] = z), (H = vt));
                else if (ht < X && 0 > l(er, z)) (x[H] = er), (x[ht] = z), (H = ht);
                else break e;
            }
        }
        return N;
    }
    function l(x, N) {
        var z = x.sortIndex - N.sortIndex;
        return z !== 0 ? z : x.id - N.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function () {
            return o.now() - u;
        };
    }
    var s = [],
        c = [],
        v = 1,
        m = null,
        p = 3,
        y = !1,
        w = !1,
        k = !1,
        I = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(x) {
        for (var N = n(c); N !== null; ) {
            if (N.callback === null) r(c);
            else if (N.startTime <= x) r(c), (N.sortIndex = N.expirationTime), t(s, N);
            else break;
            N = n(c);
        }
    }
    function h(x) {
        if (((k = !1), d(x), !w))
            if (n(s) !== null) (w = !0), hl(E);
            else {
                var N = n(c);
                N !== null && gl(h, N.startTime - x);
            }
    }
    function E(x, N) {
        (w = !1), k && ((k = !1), f(P), (P = -1)), (y = !0);
        var z = p;
        try {
            for (d(N), m = n(s); m !== null && (!(m.expirationTime > N) || (x && !_e())); ) {
                var H = m.callback;
                if (typeof H == "function") {
                    (m.callback = null), (p = m.priorityLevel);
                    var X = H(m.expirationTime <= N);
                    (N = e.unstable_now()), typeof X == "function" ? (m.callback = X) : m === n(s) && r(s), d(N);
                } else r(s);
                m = n(s);
            }
            if (m !== null) var bn = !0;
            else {
                var vt = n(c);
                vt !== null && gl(h, vt.startTime - N), (bn = !1);
            }
            return bn;
        } finally {
            (m = null), (p = z), (y = !1);
        }
    }
    var C = !1,
        _ = null,
        P = -1,
        V = 5,
        L = -1;
    function _e() {
        return !(e.unstable_now() - L < V);
    }
    function un() {
        if (_ !== null) {
            var x = e.unstable_now();
            L = x;
            var N = !0;
            try {
                N = _(!0, x);
            } finally {
                N ? sn() : ((C = !1), (_ = null));
            }
        } else C = !1;
    }
    var sn;
    if (typeof a == "function")
        sn = function () {
            a(un);
        };
    else if (typeof MessageChannel < "u") {
        var Ro = new MessageChannel(),
            tc = Ro.port2;
        (Ro.port1.onmessage = un),
            (sn = function () {
                tc.postMessage(null);
            });
    } else
        sn = function () {
            I(un, 0);
        };
    function hl(x) {
        (_ = x), C || ((C = !0), sn());
    }
    function gl(x, N) {
        P = I(function () {
            x(e.unstable_now());
        }, N);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (x) {
            x.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || y || ((w = !0), hl(E));
        }),
        (e.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (V = 0 < x ? Math.floor(1e3 / x) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (x) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var N = 3;
                    break;
                default:
                    N = p;
            }
            var z = p;
            p = N;
            try {
                return x();
            } finally {
                p = z;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (x, N) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    x = 3;
            }
            var z = p;
            p = x;
            try {
                return N();
            } finally {
                p = z;
            }
        }),
        (e.unstable_scheduleCallback = function (x, N, z) {
            var H = e.unstable_now();
            switch ((typeof z == "object" && z !== null ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? H + z : H)) : (z = H), x)) {
                case 1:
                    var X = -1;
                    break;
                case 2:
                    X = 250;
                    break;
                case 5:
                    X = 1073741823;
                    break;
                case 4:
                    X = 1e4;
                    break;
                default:
                    X = 5e3;
            }
            return (
                (X = z + X),
                (x = { id: v++, callback: N, priorityLevel: x, startTime: z, expirationTime: X, sortIndex: -1 }),
                z > H ? ((x.sortIndex = z), t(c, x), n(s) === null && x === n(c) && (k ? (f(P), (P = -1)) : (k = !0), gl(h, z - H))) : ((x.sortIndex = X), t(s, x), w || y || ((w = !0), hl(E))),
                x
            );
        }),
        (e.unstable_shouldYield = _e),
        (e.unstable_wrapCallback = function (x) {
            var N = p;
            return function () {
                var z = p;
                p = N;
                try {
                    return x.apply(this, arguments);
                } finally {
                    p = z;
                }
            };
        });
})(ts);
es.exports = ts;
var xc = es.exports;
/**

 * @license React

 * react-dom.production.min.js

 *

 * Copyright (c) Facebook, Inc. and its affiliates.

 *

 * This source code is licensed under the MIT license found in the

 * LICENSE file in the root directory of this source tree.

 */ var Cc = Ln,
    he = xc;
function g(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ns = new Set(),
    jn = {};
function Tt(e, t) {
    Zt(e, t), Zt(e + "Capture", t);
}
function Zt(e, t) {
    for (jn[e] = t, e = 0; e < t.length; e++) ns.add(t[e]);
}
var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ql = Object.prototype.hasOwnProperty,
    _c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Io = {},
    Fo = {};
function Pc(e) {
    return Ql.call(Fo, e) ? !0 : Ql.call(Io, e) ? !1 : _c.test(e) ? (Fo[e] = !0) : ((Io[e] = !0), !1);
}
function Nc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function zc(e, t, n, r) {
    if (t === null || typeof t > "u" || Nc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function ue(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = l), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = o);
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    b[e] = new ue(e, 0, !1, e, null, !1, !1);
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    b[t] = new ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    b[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    b[e] = new ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        b[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    b[e] = new ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    b[e] = new ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    b[e] = new ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    b[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bi = /[\-:]([a-z])/g;
function Vi(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Bi, Vi);
        b[t] = new ue(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Bi, Vi);
    b[t] = new ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Bi, Vi);
    b[t] = new ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hi(e, t, n, r) {
    var l = b.hasOwnProperty(t) ? b[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (zc(t, n, l, r) && (n = null),
        r || l === null
            ? Pc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
            ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
            : ((t = l.attributeName), (r = l.attributeNamespace), n === null ? e.removeAttribute(t) : ((l = l.type), (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nr = Symbol.for("react.element"),
    Rt = Symbol.for("react.portal"),
    Ot = Symbol.for("react.fragment"),
    Wi = Symbol.for("react.strict_mode"),
    Kl = Symbol.for("react.profiler"),
    rs = Symbol.for("react.provider"),
    ls = Symbol.for("react.context"),
    Qi = Symbol.for("react.forward_ref"),
    Yl = Symbol.for("react.suspense"),
    Xl = Symbol.for("react.suspense_list"),
    Ki = Symbol.for("react.memo"),
    Ze = Symbol.for("react.lazy"),
    is = Symbol.for("react.offscreen"),
    Uo = Symbol.iterator;
function an(e) {
    return e === null || typeof e != "object" ? null : ((e = (Uo && e[Uo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var A = Object.assign,
    kl;
function gn(e) {
    if (kl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            kl = (t && t[1]) || "";
        }
    return (
        `

` +
        kl +
        e
    );
}
var Sl = !1;
function El(e, t) {
    if (!e || Sl) return "";
    Sl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var l = c.stack.split(`

`),
                    i = r.stack.split(`

`),
                    o = l.length - 1,
                    u = i.length - 1;
                1 <= o && 0 <= u && l[o] !== i[u];

            )
                u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if ((o--, u--, 0 > u || l[o] !== i[u])) {
                                var s =
                                    `

` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                            }
                        while (1 <= o && 0 <= u);
                    break;
                }
        }
    } finally {
        (Sl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? gn(e) : "";
}
function Tc(e) {
    switch (e.tag) {
        case 5:
            return gn(e.type);
        case 16:
            return gn("Lazy");
        case 13:
            return gn("Suspense");
        case 19:
            return gn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = El(e.type, !1)), e;
        case 11:
            return (e = El(e.type.render, !1)), e;
        case 1:
            return (e = El(e.type, !0)), e;
        default:
            return "";
    }
}
function Gl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ot:
            return "Fragment";
        case Rt:
            return "Portal";
        case Kl:
            return "Profiler";
        case Wi:
            return "StrictMode";
        case Yl:
            return "Suspense";
        case Xl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case ls:
                return (e.displayName || "Context") + ".Consumer";
            case rs:
                return (e._context.displayName || "Context") + ".Provider";
            case Qi:
                var t = e.render;
                return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
            case Ki:
                return (t = e.displayName || null), t !== null ? t : Gl(e.type) || "Memo";
            case Ze:
                (t = e._payload), (e = e._init);
                try {
                    return Gl(e(t));
                } catch {}
        }
    return null;
}
function Lc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Gl(t);
        case 8:
            return t === Wi ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function ct(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function os(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function jc(e) {
    var t = os(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function rr(e) {
    e._valueTracker || (e._valueTracker = jc(e));
}
function us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = os(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Lr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Zl(e, t) {
    var n = t.checked;
    return A({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function $o(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ct(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function ss(e, t) {
    (t = t.checked), t != null && Hi(e, "checked", t, !1);
}
function Jl(e, t) {
    ss(e, t);
    var n = ct(t.value),
        r = t.type;
    if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ? ql(e, t.type, n) : t.hasOwnProperty("defaultValue") && ql(e, t.type, ct(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ao(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function ql(e, t, n) {
    (t !== "number" || Lr(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yn = Array.isArray;
function Wt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) (l = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + ct(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function bl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
    return A({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bo(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(g(92));
            if (yn(n)) {
                if (1 < n.length) throw Error(g(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ct(n) };
}
function as(e, t) {
    var n = ct(t.value),
        r = ct(t.defaultValue);
    n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cs(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function ei(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? cs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var lr,
    fs = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (lr = lr || document.createElement("div"), lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = lr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Rn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Sn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Rc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sn).forEach(function (e) {
    Rc.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sn[t] = Sn[e]);
    });
});
function ds(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Sn.hasOwnProperty(e) && Sn[e]) ? ("" + t).trim() : t + "px";
}
function ps(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = ds(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var Oc = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ti(e, t) {
    if (t) {
        if (Oc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(g(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(g(62));
    }
}
function ni(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
var ri = null;
function Yi(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var li = null,
    Qt = null,
    Kt = null;
function Ho(e) {
    if ((e = Jn(e))) {
        if (typeof li != "function") throw Error(g(280));
        var t = e.stateNode;
        t && ((t = il(t)), li(e.stateNode, e.type, t));
    }
}
function ms(e) {
    Qt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Qt = e);
}
function vs() {
    if (Qt) {
        var e = Qt,
            t = Kt;
        if (((Kt = Qt = null), Ho(e), t)) for (e = 0; e < t.length; e++) Ho(t[e]);
    }
}
function hs(e, t) {
    return e(t);
}
function gs() {}
var xl = !1;
function ys(e, t, n) {
    if (xl) return e(t, n);
    xl = !0;
    try {
        return hs(e, t, n);
    } finally {
        (xl = !1), (Qt !== null || Kt !== null) && (gs(), vs());
    }
}
function On(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = il(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(g(231, t, typeof n));
    return n;
}
var ii = !1;
if (We)
    try {
        var cn = {};
        Object.defineProperty(cn, "passive", {
            get: function () {
                ii = !0;
            },
        }),
            window.addEventListener("test", cn, cn),
            window.removeEventListener("test", cn, cn);
    } catch {
        ii = !1;
    }
function Mc(e, t, n, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (v) {
        this.onError(v);
    }
}
var En = !1,
    jr = null,
    Rr = !1,
    oi = null,
    Dc = {
        onError: function (e) {
            (En = !0), (jr = e);
        },
    };
function Ic(e, t, n, r, l, i, o, u, s) {
    (En = !1), (jr = null), Mc.apply(Dc, arguments);
}
function Fc(e, t, n, r, l, i, o, u, s) {
    if ((Ic.apply(this, arguments), En)) {
        if (En) {
            var c = jr;
            (En = !1), (jr = null);
        } else throw Error(g(198));
        Rr || ((Rr = !0), (oi = c));
    }
}
function Lt(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function ws(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Wo(e) {
    if (Lt(e) !== e) throw Error(g(188));
}
function Uc(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Lt(e)), t === null)) throw Error(g(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n) return Wo(l), e;
                if (i === r) return Wo(l), t;
                i = i.sibling;
            }
            throw Error(g(188));
        }
        if (n.return !== r.return) (n = l), (r = i);
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    (o = !0), (n = l), (r = i);
                    break;
                }
                if (u === r) {
                    (o = !0), (r = l), (n = i);
                    break;
                }
                u = u.sibling;
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        (o = !0), (n = i), (r = l);
                        break;
                    }
                    if (u === r) {
                        (o = !0), (r = i), (n = l);
                        break;
                    }
                    u = u.sibling;
                }
                if (!o) throw Error(g(189));
            }
        }
        if (n.alternate !== r) throw Error(g(190));
    }
    if (n.tag !== 3) throw Error(g(188));
    return n.stateNode.current === n ? e : t;
}
function ks(e) {
    return (e = Uc(e)), e !== null ? Ss(e) : null;
}
function Ss(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Ss(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Es = he.unstable_scheduleCallback,
    Qo = he.unstable_cancelCallback,
    $c = he.unstable_shouldYield,
    Ac = he.unstable_requestPaint,
    W = he.unstable_now,
    Bc = he.unstable_getCurrentPriorityLevel,
    Xi = he.unstable_ImmediatePriority,
    xs = he.unstable_UserBlockingPriority,
    Or = he.unstable_NormalPriority,
    Vc = he.unstable_LowPriority,
    Cs = he.unstable_IdlePriority,
    tl = null,
    Fe = null;
function Hc(e) {
    if (Fe && typeof Fe.onCommitFiberRoot == "function")
        try {
            Fe.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var Le = Math.clz32 ? Math.clz32 : Kc,
    Wc = Math.log,
    Qc = Math.LN2;
function Kc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Wc(e) / Qc) | 0)) | 0;
}
var ir = 64,
    or = 4194304;
function wn(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Mr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? (r = wn(u)) : ((i &= o), i !== 0 && (r = wn(i)));
    } else (o = n & ~l), o !== 0 ? (r = wn(o)) : i !== 0 && (r = wn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Le(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function Yc(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Xc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Le(i),
            u = 1 << o,
            s = l[o];
        s === -1 ? (!(u & n) || u & r) && (l[o] = Yc(u, t)) : s <= t && (e.expiredLanes |= u), (i &= ~u);
    }
}
function ui(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function _s() {
    var e = ir;
    return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Gn(e, t, n) {
    (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Le(t)), (e[t] = n);
}
function Gc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Le(n),
            i = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
}
function Gi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Le(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var R = 0;
function Ps(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ns,
    Zi,
    zs,
    Ts,
    Ls,
    si = !1,
    ur = [],
    nt = null,
    rt = null,
    lt = null,
    Mn = new Map(),
    Dn = new Map(),
    qe = [],
    Zc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
    );
function Ko(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            nt = null;
            break;
        case "dragenter":
        case "dragleave":
            rt = null;
            break;
        case "mouseover":
        case "mouseout":
            lt = null;
            break;
        case "pointerover":
        case "pointerout":
            Mn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Dn.delete(t.pointerId);
    }
}
function fn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }), t !== null && ((t = Jn(t)), t !== null && Zi(t)), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Jc(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (nt = fn(nt, e, t, n, r, l)), !0;
        case "dragenter":
            return (rt = fn(rt, e, t, n, r, l)), !0;
        case "mouseover":
            return (lt = fn(lt, e, t, n, r, l)), !0;
        case "pointerover":
            var i = l.pointerId;
            return Mn.set(i, fn(Mn.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return (i = l.pointerId), Dn.set(i, fn(Dn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
}
function js(e) {
    var t = wt(e.target);
    if (t !== null) {
        var n = Lt(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = ws(n)), t !== null)) {
                    (e.blockedOn = t),
                        Ls(e.priority, function () {
                            zs(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (ri = r), n.target.dispatchEvent(r), (ri = null);
        } else return (t = Jn(n)), t !== null && Zi(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Yo(e, t, n) {
    kr(e) && n.delete(t);
}
function qc() {
    (si = !1), nt !== null && kr(nt) && (nt = null), rt !== null && kr(rt) && (rt = null), lt !== null && kr(lt) && (lt = null), Mn.forEach(Yo), Dn.forEach(Yo);
}
function dn(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), si || ((si = !0), he.unstable_scheduleCallback(he.unstable_NormalPriority, qc)));
}
function In(e) {
    function t(l) {
        return dn(l, e);
    }
    if (0 < ur.length) {
        dn(ur[0], e);
        for (var n = 1; n < ur.length; n++) {
            var r = ur[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (nt !== null && dn(nt, e), rt !== null && dn(rt, e), lt !== null && dn(lt, e), Mn.forEach(t), Dn.forEach(t), n = 0; n < qe.length; n++) (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); ) js(n), n.blockedOn === null && qe.shift();
}
var Yt = Xe.ReactCurrentBatchConfig,
    Dr = !0;
function bc(e, t, n, r) {
    var l = R,
        i = Yt.transition;
    Yt.transition = null;
    try {
        (R = 1), Ji(e, t, n, r);
    } finally {
        (R = l), (Yt.transition = i);
    }
}
function ef(e, t, n, r) {
    var l = R,
        i = Yt.transition;
    Yt.transition = null;
    try {
        (R = 4), Ji(e, t, n, r);
    } finally {
        (R = l), (Yt.transition = i);
    }
}
function Ji(e, t, n, r) {
    if (Dr) {
        var l = ai(e, t, n, r);
        if (l === null) Ml(e, t, r, Ir, n), Ko(e, r);
        else if (Jc(l, e, t, n, r)) r.stopPropagation();
        else if ((Ko(e, r), t & 4 && -1 < Zc.indexOf(e))) {
            for (; l !== null; ) {
                var i = Jn(l);
                if ((i !== null && Ns(i), (i = ai(e, t, n, r)), i === null && Ml(e, t, r, Ir, n), i === l)) break;
                l = i;
            }
            l !== null && r.stopPropagation();
        } else Ml(e, t, r, null, n);
    }
}
var Ir = null;
function ai(e, t, n, r) {
    if (((Ir = null), (e = Yi(r)), (e = wt(e)), e !== null))
        if (((t = Lt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = ws(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Ir = e), null;
}
function Rs(e) {
    switch (e) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Bc()) {
                case Xi:
                    return 1;
                case xs:
                    return 4;
                case Or:
                case Vc:
                    return 16;
                case Cs:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var et = null,
    qi = null,
    Sr = null;
function Os() {
    if (Sr) return Sr;
    var e,
        t = qi,
        n = t.length,
        r,
        l = "value" in et ? et.value : et.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sr() {
    return !0;
}
function Xo() {
    return !1;
}
function ye(e) {
    function t(n, r, l, i, o) {
        (this._reactName = n), (this._targetInst = l), (this.type = r), (this.nativeEvent = i), (this.target = o), (this.currentTarget = null);
        for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
        return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? sr : Xo), (this.isPropagationStopped = Xo), this;
    }
    return (
        A(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = sr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = sr));
            },
            persist: function () {},
            isPersistent: sr,
        }),
        t
    );
}
var ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    bi = ye(ln),
    Zn = A({}, ln, { view: 0, detail: 0 }),
    tf = ye(Zn),
    _l,
    Pl,
    pn,
    nl = A({}, Zn, {
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
        getModifierState: eo,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== pn && (pn && e.type === "mousemove" ? ((_l = e.screenX - pn.screenX), (Pl = e.screenY - pn.screenY)) : (Pl = _l = 0), (pn = e)), _l);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Pl;
        },
    }),
    Go = ye(nl),
    nf = A({}, nl, { dataTransfer: 0 }),
    rf = ye(nf),
    lf = A({}, Zn, { relatedTarget: 0 }),
    Nl = ye(lf),
    of = A({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uf = ye(of),
    sf = A({}, ln, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    af = ye(sf),
    cf = A({}, ln, { data: 0 }),
    Zo = ye(cf),
    ff = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    df = {
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
    pf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function mf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = pf[e]) ? !!t[e] : !1;
}
function eo() {
    return mf;
}
var vf = A({}, Zn, {
        key: function (e) {
            if (e.key) {
                var t = ff[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? df[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: eo,
        charCode: function (e) {
            return e.type === "keypress" ? Er(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    hf = ye(vf),
    gf = A({}, nl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Jo = ye(gf),
    yf = A({}, Zn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eo }),
    wf = ye(yf),
    kf = A({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sf = ye(kf),
    Ef = A({}, nl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    xf = ye(Ef),
    Cf = [9, 13, 27, 32],
    to = We && "CompositionEvent" in window,
    xn = null;
We && "documentMode" in document && (xn = document.documentMode);
var _f = We && "TextEvent" in window && !xn,
    Ms = We && (!to || (xn && 8 < xn && 11 >= xn)),
    qo = " ",
    bo = !1;
function Ds(e, t) {
    switch (e) {
        case "keyup":
            return Cf.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Is(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mt = !1;
function Pf(e, t) {
    switch (e) {
        case "compositionend":
            return Is(t);
        case "keypress":
            return t.which !== 32 ? null : ((bo = !0), qo);
        case "textInput":
            return (e = t.data), e === qo && bo ? null : e;
        default:
            return null;
    }
}
function Nf(e, t) {
    if (Mt) return e === "compositionend" || (!to && Ds(e, t)) ? ((e = Os()), (Sr = qi = et = null), (Mt = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Ms && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var zf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zf[e.type] : t === "textarea";
}
function Fs(e, t, n, r) {
    ms(r), (t = Fr(t, "onChange")), 0 < t.length && ((n = new bi("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Cn = null,
    Fn = null;
function Tf(e) {
    Xs(e, 0);
}
function rl(e) {
    var t = Ft(e);
    if (us(t)) return e;
}
function Lf(e, t) {
    if (e === "change") return t;
}
var Us = !1;
if (We) {
    var zl;
    if (We) {
        var Tl = "oninput" in document;
        if (!Tl) {
            var tu = document.createElement("div");
            tu.setAttribute("oninput", "return;"), (Tl = typeof tu.oninput == "function");
        }
        zl = Tl;
    } else zl = !1;
    Us = zl && (!document.documentMode || 9 < document.documentMode);
}
function nu() {
    Cn && (Cn.detachEvent("onpropertychange", $s), (Fn = Cn = null));
}
function $s(e) {
    if (e.propertyName === "value" && rl(Fn)) {
        var t = [];
        Fs(t, Fn, e, Yi(e)), ys(Tf, t);
    }
}
function jf(e, t, n) {
    e === "focusin" ? (nu(), (Cn = t), (Fn = n), Cn.attachEvent("onpropertychange", $s)) : e === "focusout" && nu();
}
function Rf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return rl(Fn);
}
function Of(e, t) {
    if (e === "click") return rl(t);
}
function Mf(e, t) {
    if (e === "input" || e === "change") return rl(t);
}
function Df(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Re = typeof Object.is == "function" ? Object.is : Df;
function Un(e, t) {
    if (Re(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Ql.call(t, l) || !Re(e[l], t[l])) return !1;
    }
    return !0;
}
function ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function lu(e, t) {
    var n = ru(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = ru(n);
    }
}
function As(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? As(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function Bs() {
    for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Lr(e.document);
    }
    return t;
}
function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function If(e) {
    var t = Bs(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && As(n.ownerDocument.documentElement, n)) {
        if (r !== null && no(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                (r = r.end === void 0 ? i : Math.min(r.end, l)), !e.extend && i > r && ((l = r), (r = i), (i = l)), (l = lu(n, i));
                var o = lu(n, r);
                l &&
                    o &&
                    (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) &&
                    ((t = t.createRange()), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var Ff = We && "documentMode" in document && 11 >= document.documentMode,
    Dt = null,
    ci = null,
    _n = null,
    fi = !1;
function iu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi ||
        Dt == null ||
        Dt !== Lr(r) ||
        ((r = Dt),
        "selectionStart" in r && no(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (_n && Un(_n, r)) || ((_n = r), (r = Fr(ci, "onSelect")), 0 < r.length && ((t = new bi("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Dt))));
}
function ar(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var It = { animationend: ar("Animation", "AnimationEnd"), animationiteration: ar("Animation", "AnimationIteration"), animationstart: ar("Animation", "AnimationStart"), transitionend: ar("Transition", "TransitionEnd") },
    Ll = {},
    Vs = {};
We &&
    ((Vs = document.createElement("div").style),
    "AnimationEvent" in window || (delete It.animationend.animation, delete It.animationiteration.animation, delete It.animationstart.animation),
    "TransitionEvent" in window || delete It.transitionend.transition);
function ll(e) {
    if (Ll[e]) return Ll[e];
    if (!It[e]) return e;
    var t = It[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Vs) return (Ll[e] = t[n]);
    return e;
}
var Hs = ll("animationend"),
    Ws = ll("animationiteration"),
    Qs = ll("animationstart"),
    Ks = ll("transitionend"),
    Ys = new Map(),
    ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
    );
function dt(e, t) {
    Ys.set(e, t), Tt(t, [e]);
}
for (var jl = 0; jl < ou.length; jl++) {
    var Rl = ou[jl],
        Uf = Rl.toLowerCase(),
        $f = Rl[0].toUpperCase() + Rl.slice(1);
    dt(Uf, "on" + $f);
}
dt(Hs, "onAnimationEnd");
dt(Ws, "onAnimationIteration");
dt(Qs, "onAnimationStart");
dt("dblclick", "onDoubleClick");
dt("focusin", "onFocus");
dt("focusout", "onBlur");
dt(Ks, "onTransitionEnd");
Zt("onMouseEnter", ["mouseout", "mouseover"]);
Zt("onMouseLeave", ["mouseout", "mouseover"]);
Zt("onPointerEnter", ["pointerout", "pointerover"]);
Zt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    Af = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function uu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Fc(r, t, void 0, e), (e.currentTarget = null);
}
function Xs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        s = u.instance,
                        c = u.currentTarget;
                    if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
                    uu(l, u, c), (i = s);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (((u = r[o]), (s = u.instance), (c = u.currentTarget), (u = u.listener), s !== i && l.isPropagationStopped())) break e;
                    uu(l, u, c), (i = s);
                }
        }
    }
    if (Rr) throw ((e = oi), (Rr = !1), (oi = null), e);
}
function M(e, t) {
    var n = t[hi];
    n === void 0 && (n = t[hi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Gs(t, e, 2, !1), n.add(r));
}
function Ol(e, t, n) {
    var r = 0;
    t && (r |= 4), Gs(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
    if (!e[cr]) {
        (e[cr] = !0),
            ns.forEach(function (n) {
                n !== "selectionchange" && (Af.has(n) || Ol(n, !1, e), Ol(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[cr] || ((t[cr] = !0), Ol("selectionchange", !1, t));
    }
}
function Gs(e, t, n, r) {
    switch (Rs(t)) {
        case 1:
            var l = bc;
            break;
        case 4:
            l = ef;
            break;
        default:
            l = Ji;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !ii || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
        r ? (l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0)) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && ((s = o.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))) return;
                        o = o.return;
                    }
                for (; u !== null; ) {
                    if (((o = wt(u)), o === null)) return;
                    if (((s = o.tag), s === 5 || s === 6)) {
                        r = i = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    ys(function () {
        var c = i,
            v = Yi(n),
            m = [];
        e: {
            var p = Ys.get(e);
            if (p !== void 0) {
                var y = bi,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Er(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = hf;
                        break;
                    case "focusin":
                        (w = "focus"), (y = Nl);
                        break;
                    case "focusout":
                        (w = "blur"), (y = Nl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Nl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = Go;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = rf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = wf;
                        break;
                    case Hs:
                    case Ws:
                    case Qs:
                        y = uf;
                        break;
                    case Ks:
                        y = Sf;
                        break;
                    case "scroll":
                        y = tf;
                        break;
                    case "wheel":
                        y = xf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = af;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = Jo;
                }
                var k = (t & 4) !== 0,
                    I = !k && e === "scroll",
                    f = k ? (p !== null ? p + "Capture" : null) : p;
                k = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var h = d.stateNode;
                    if ((d.tag === 5 && h !== null && ((d = h), f !== null && ((h = On(a, f)), h != null && k.push(An(a, h, d)))), I)) break;
                    a = a.return;
                }
                0 < k.length && ((p = new y(p, w, null, n, v)), m.push({ event: p, listeners: k }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (((p = e === "mouseover" || e === "pointerover"), (y = e === "mouseout" || e === "pointerout"), p && n !== ri && (w = n.relatedTarget || n.fromElement) && (wt(w) || w[Qe]))) break e;
                if (
                    (y || p) &&
                    ((p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window),
                    y ? ((w = n.relatedTarget || n.toElement), (y = c), (w = w ? wt(w) : null), w !== null && ((I = Lt(w)), w !== I || (w.tag !== 5 && w.tag !== 6)) && (w = null)) : ((y = null), (w = c)),
                    y !== w)
                ) {
                    if (
                        ((k = Go),
                        (h = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (a = "mouse"),
                        (e === "pointerout" || e === "pointerover") && ((k = Jo), (h = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
                        (I = y == null ? p : Ft(y)),
                        (d = w == null ? p : Ft(w)),
                        (p = new k(h, a + "leave", y, n, v)),
                        (p.target = I),
                        (p.relatedTarget = d),
                        (h = null),
                        wt(v) === c && ((k = new k(f, a + "enter", w, n, v)), (k.target = d), (k.relatedTarget = I), (h = k)),
                        (I = h),
                        y && w)
                    )
                        t: {
                            for (k = y, f = w, a = 0, d = k; d; d = jt(d)) a++;
                            for (d = 0, h = f; h; h = jt(h)) d++;
                            for (; 0 < a - d; ) (k = jt(k)), a--;
                            for (; 0 < d - a; ) (f = jt(f)), d--;
                            for (; a--; ) {
                                if (k === f || (f !== null && k === f.alternate)) break t;
                                (k = jt(k)), (f = jt(f));
                            }
                            k = null;
                        }
                    else k = null;
                    y !== null && su(m, p, y, k, !1), w !== null && I !== null && su(m, I, w, k, !0);
                }
            }
            e: {
                if (((p = c ? Ft(c) : window), (y = p.nodeName && p.nodeName.toLowerCase()), y === "select" || (y === "input" && p.type === "file"))) var E = Lf;
                else if (eu(p))
                    if (Us) E = Mf;
                    else {
                        E = Rf;
                        var C = jf;
                    }
                else (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Of);
                if (E && (E = E(e, c))) {
                    Fs(m, E, n, v);
                    break e;
                }
                C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && ql(p, "number", p.value);
            }
            switch (((C = c ? Ft(c) : window), e)) {
                case "focusin":
                    (eu(C) || C.contentEditable === "true") && ((Dt = C), (ci = c), (_n = null));
                    break;
                case "focusout":
                    _n = ci = Dt = null;
                    break;
                case "mousedown":
                    fi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (fi = !1), iu(m, n, v);
                    break;
                case "selectionchange":
                    if (Ff) break;
                case "keydown":
                case "keyup":
                    iu(m, n, v);
            }
            var _;
            if (to)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e;
                    }
                    P = void 0;
                }
            else Mt ? Ds(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P &&
                (Ms && n.locale !== "ko" && (Mt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Mt && (_ = Os()) : ((et = v), (qi = "value" in et ? et.value : et.textContent), (Mt = !0))),
                (C = Fr(c, P)),
                0 < C.length && ((P = new Zo(P, e, null, n, v)), m.push({ event: P, listeners: C }), _ ? (P.data = _) : ((_ = Is(n)), _ !== null && (P.data = _)))),
                (_ = _f ? Pf(e, n) : Nf(e, n)) && ((c = Fr(c, "onBeforeInput")), 0 < c.length && ((v = new Zo("onBeforeInput", "beforeinput", null, n, v)), m.push({ event: v, listeners: c }), (v.data = _)));
        }
        Xs(m, t);
    });
}
function An(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Fr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && ((l = i), (i = On(e, n)), i != null && r.unshift(An(e, i, l)), (i = On(e, t)), i != null && r.push(An(e, i, l))), (e = e.return);
    }
    return r;
}
function jt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function su(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            c = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 && c !== null && ((u = c), l ? ((s = On(n, i)), s != null && o.unshift(An(n, s, u))) : l || ((s = On(n, i)), s != null && o.push(An(n, s, u)))), (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var Bf = /\r\n?/g,
    Vf = /\u0000|\uFFFD/g;
function au(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Bf,
            `

`
        )
        .replace(Vf, "");
}
function fr(e, t, n) {
    if (((t = au(t)), au(e) !== t && n)) throw Error(g(425));
}
function Ur() {}
var di = null,
    pi = null;
function mi(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0,
    Hf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cu = typeof Promise == "function" ? Promise : void 0,
    Wf =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof cu < "u"
            ? function (e) {
                  return cu.resolve(null).then(e).catch(Qf);
              }
            : vi;
function Qf(e) {
    setTimeout(function () {
        throw e;
    });
}
function Dl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), In(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    In(t);
}
function it(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function fu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var on = Math.random().toString(36).slice(2),
    Ie = "__reactFiber$" + on,
    Bn = "__reactProps$" + on,
    Qe = "__reactContainer$" + on,
    hi = "__reactEvents$" + on,
    Kf = "__reactListeners$" + on,
    Yf = "__reactHandles$" + on;
function wt(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Qe] || n[Ie])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = fu(e); e !== null; ) {
                    if ((n = e[Ie])) return n;
                    e = fu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Jn(e) {
    return (e = e[Ie] || e[Qe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ft(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(g(33));
}
function il(e) {
    return e[Bn] || null;
}
var gi = [],
    Ut = -1;
function pt(e) {
    return { current: e };
}
function D(e) {
    0 > Ut || ((e.current = gi[Ut]), (gi[Ut] = null), Ut--);
}
function O(e, t) {
    Ut++, (gi[Ut] = e.current), (e.current = t);
}
var ft = {},
    re = pt(ft),
    ce = pt(!1),
    Ct = ft;
function Jt(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function fe(e) {
    return (e = e.childContextTypes), e != null;
}
function $r() {
    D(ce), D(re);
}
function du(e, t, n) {
    if (re.current !== ft) throw Error(g(168));
    O(re, t), O(ce, n);
}
function Zs(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(g(108, Lc(e) || "Unknown", l));
    return A({}, n, r);
}
function Ar(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft), (Ct = re.current), O(re, e), O(ce, ce.current), !0;
}
function pu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(g(169));
    n ? ((e = Zs(e, t, Ct)), (r.__reactInternalMemoizedMergedChildContext = e), D(ce), D(re), O(re, e)) : D(ce), O(ce, n);
}
var Ae = null,
    ol = !1,
    Il = !1;
function Js(e) {
    Ae === null ? (Ae = [e]) : Ae.push(e);
}
function Xf(e) {
    (ol = !0), Js(e);
}
function mt() {
    if (!Il && Ae !== null) {
        Il = !0;
        var e = 0,
            t = R;
        try {
            var n = Ae;
            for (R = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Ae = null), (ol = !1);
        } catch (l) {
            throw (Ae !== null && (Ae = Ae.slice(e + 1)), Es(Xi, mt), l);
        } finally {
            (R = t), (Il = !1);
        }
    }
    return null;
}
var $t = [],
    At = 0,
    Br = null,
    Vr = 0,
    we = [],
    ke = 0,
    _t = null,
    Be = 1,
    Ve = "";
function gt(e, t) {
    ($t[At++] = Vr), ($t[At++] = Br), (Br = e), (Vr = t);
}
function qs(e, t, n) {
    (we[ke++] = Be), (we[ke++] = Ve), (we[ke++] = _t), (_t = e);
    var r = Be;
    e = Ve;
    var l = 32 - Le(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - Le(t) + l;
    if (30 < i) {
        var o = l - (l % 5);
        (i = (r & ((1 << o) - 1)).toString(32)), (r >>= o), (l -= o), (Be = (1 << (32 - Le(t) + l)) | (n << l) | r), (Ve = i + e);
    } else (Be = (1 << i) | (n << l) | r), (Ve = e);
}
function ro(e) {
    e.return !== null && (gt(e, 1), qs(e, 1, 0));
}
function lo(e) {
    for (; e === Br; ) (Br = $t[--At]), ($t[At] = null), (Vr = $t[--At]), ($t[At] = null);
    for (; e === _t; ) (_t = we[--ke]), (we[ke] = null), (Ve = we[--ke]), (we[ke] = null), (Be = we[--ke]), (we[ke] = null);
}
var ve = null,
    me = null,
    F = !1,
    Te = null;
function bs(e, t) {
    var n = Se(5, null, null, 0);
    (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function mu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (ve = e), (me = it(t.firstChild)), !0) : !1;
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (ve = e), (me = null), !0) : !1;
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = _t !== null ? { id: Be, overflow: Ve } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Se(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ve = e),
                      (me = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function yi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wi(e) {
    if (F) {
        var t = me;
        if (t) {
            var n = t;
            if (!mu(e, t)) {
                if (yi(e)) throw Error(g(418));
                t = it(n.nextSibling);
                var r = ve;
                t && mu(e, t) ? bs(r, n) : ((e.flags = (e.flags & -4097) | 2), (F = !1), (ve = e));
            }
        } else {
            if (yi(e)) throw Error(g(418));
            (e.flags = (e.flags & -4097) | 2), (F = !1), (ve = e);
        }
    }
}
function vu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ve = e;
}
function dr(e) {
    if (e !== ve) return !1;
    if (!F) return vu(e), (F = !0), !1;
    var t;
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !mi(e.type, e.memoizedProps))), t && (t = me))) {
        if (yi(e)) throw (ea(), Error(g(418)));
        for (; t; ) bs(e, t), (t = it(t.nextSibling));
    }
    if ((vu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(g(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            me = it(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            me = null;
        }
    } else me = ve ? it(e.stateNode.nextSibling) : null;
    return !0;
}
function ea() {
    for (var e = me; e; ) e = it(e.nextSibling);
}
function qt() {
    (me = ve = null), (F = !1);
}
function io(e) {
    Te === null ? (Te = [e]) : Te.push(e);
}
var Gf = Xe.ReactCurrentBatchConfig;
function mn(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(g(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(g(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                      var u = l.refs;
                      o === null ? delete u[i] : (u[i] = o);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(g(284));
        if (!n._owner) throw Error(g(290, e));
    }
    return e;
}
function pr(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function hu(e) {
    var t = e._init;
    return t(e._payload);
}
function ta(e) {
    function t(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
        }
    }
    function n(f, a) {
        if (!e) return null;
        for (; a !== null; ) t(f, a), (a = a.sibling);
        return null;
    }
    function r(f, a) {
        for (f = new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
        return f;
    }
    function l(f, a) {
        return (f = at(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function i(f, a, d) {
        return (f.index = d), e ? ((d = f.alternate), d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a)) : ((f.flags |= 1048576), a);
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, h) {
        return a === null || a.tag !== 6 ? ((a = Hl(d, f.mode, h)), (a.return = f), a) : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, h) {
        var E = d.type;
        return E === Ot
            ? v(f, a, d.props.children, h, d.key)
            : a !== null && (a.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === Ze && hu(E) === a.type))
            ? ((h = l(a, d.props)), (h.ref = mn(f, a, d)), (h.return = f), h)
            : ((h = Tr(d.type, d.key, d.props, null, f.mode, h)), (h.ref = mn(f, a, d)), (h.return = f), h);
    }
    function c(f, a, d, h) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? ((a = Wl(d, f.mode, h)), (a.return = f), a) : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function v(f, a, d, h, E) {
        return a === null || a.tag !== 7 ? ((a = xt(d, f.mode, h, E)), (a.return = f), a) : ((a = l(a, d)), (a.return = f), a);
    }
    function m(f, a, d) {
        if ((typeof a == "string" && a !== "") || typeof a == "number") return (a = Hl("" + a, f.mode, d)), (a.return = f), a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case nr:
                    return (d = Tr(a.type, a.key, a.props, null, f.mode, d)), (d.ref = mn(f, null, a)), (d.return = f), d;
                case Rt:
                    return (a = Wl(a, f.mode, d)), (a.return = f), a;
                case Ze:
                    var h = a._init;
                    return m(f, h(a._payload), d);
            }
            if (yn(a) || an(a)) return (a = xt(a, f.mode, d, null)), (a.return = f), a;
            pr(f, a);
        }
        return null;
    }
    function p(f, a, d, h) {
        var E = a !== null ? a.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number") return E !== null ? null : u(f, a, "" + d, h);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case nr:
                    return d.key === E ? s(f, a, d, h) : null;
                case Rt:
                    return d.key === E ? c(f, a, d, h) : null;
                case Ze:
                    return (E = d._init), p(f, a, E(d._payload), h);
            }
            if (yn(d) || an(d)) return E !== null ? null : v(f, a, d, h, null);
            pr(f, d);
        }
        return null;
    }
    function y(f, a, d, h, E) {
        if ((typeof h == "string" && h !== "") || typeof h == "number") return (f = f.get(d) || null), u(a, f, "" + h, E);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case nr:
                    return (f = f.get(h.key === null ? d : h.key) || null), s(a, f, h, E);
                case Rt:
                    return (f = f.get(h.key === null ? d : h.key) || null), c(a, f, h, E);
                case Ze:
                    var C = h._init;
                    return y(f, a, d, C(h._payload), E);
            }
            if (yn(h) || an(h)) return (f = f.get(d) || null), v(a, f, h, E, null);
            pr(a, h);
        }
        return null;
    }
    function w(f, a, d, h) {
        for (var E = null, C = null, _ = a, P = (a = 0), V = null; _ !== null && P < d.length; P++) {
            _.index > P ? ((V = _), (_ = null)) : (V = _.sibling);
            var L = p(f, _, d[P], h);
            if (L === null) {
                _ === null && (_ = V);
                break;
            }
            e && _ && L.alternate === null && t(f, _), (a = i(L, a, P)), C === null ? (E = L) : (C.sibling = L), (C = L), (_ = V);
        }
        if (P === d.length) return n(f, _), F && gt(f, P), E;
        if (_ === null) {
            for (; P < d.length; P++) (_ = m(f, d[P], h)), _ !== null && ((a = i(_, a, P)), C === null ? (E = _) : (C.sibling = _), (C = _));
            return F && gt(f, P), E;
        }
        for (_ = r(f, _); P < d.length; P++) (V = y(_, f, P, d[P], h)), V !== null && (e && V.alternate !== null && _.delete(V.key === null ? P : V.key), (a = i(V, a, P)), C === null ? (E = V) : (C.sibling = V), (C = V));
        return (
            e &&
                _.forEach(function (_e) {
                    return t(f, _e);
                }),
            F && gt(f, P),
            E
        );
    }
    function k(f, a, d, h) {
        var E = an(d);
        if (typeof E != "function") throw Error(g(150));
        if (((d = E.call(d)), d == null)) throw Error(g(151));
        for (var C = (E = null), _ = a, P = (a = 0), V = null, L = d.next(); _ !== null && !L.done; P++, L = d.next()) {
            _.index > P ? ((V = _), (_ = null)) : (V = _.sibling);
            var _e = p(f, _, L.value, h);
            if (_e === null) {
                _ === null && (_ = V);
                break;
            }
            e && _ && _e.alternate === null && t(f, _), (a = i(_e, a, P)), C === null ? (E = _e) : (C.sibling = _e), (C = _e), (_ = V);
        }
        if (L.done) return n(f, _), F && gt(f, P), E;
        if (_ === null) {
            for (; !L.done; P++, L = d.next()) (L = m(f, L.value, h)), L !== null && ((a = i(L, a, P)), C === null ? (E = L) : (C.sibling = L), (C = L));
            return F && gt(f, P), E;
        }
        for (_ = r(f, _); !L.done; P++, L = d.next()) (L = y(_, f, P, L.value, h)), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? P : L.key), (a = i(L, a, P)), C === null ? (E = L) : (C.sibling = L), (C = L));
        return (
            e &&
                _.forEach(function (un) {
                    return t(f, un);
                }),
            F && gt(f, P),
            E
        );
    }
    function I(f, a, d, h) {
        if ((typeof d == "object" && d !== null && d.type === Ot && d.key === null && (d = d.props.children), typeof d == "object" && d !== null)) {
            switch (d.$$typeof) {
                case nr:
                    e: {
                        for (var E = d.key, C = a; C !== null; ) {
                            if (C.key === E) {
                                if (((E = d.type), E === Ot)) {
                                    if (C.tag === 7) {
                                        n(f, C.sibling), (a = l(C, d.props.children)), (a.return = f), (f = a);
                                        break e;
                                    }
                                } else if (C.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === Ze && hu(E) === C.type)) {
                                    n(f, C.sibling), (a = l(C, d.props)), (a.ref = mn(f, C, d)), (a.return = f), (f = a);
                                    break e;
                                }
                                n(f, C);
                                break;
                            } else t(f, C);
                            C = C.sibling;
                        }
                        d.type === Ot ? ((a = xt(d.props.children, f.mode, h, d.key)), (a.return = f), (f = a)) : ((h = Tr(d.type, d.key, d.props, null, f.mode, h)), (h.ref = mn(f, a, d)), (h.return = f), (f = h));
                    }
                    return o(f);
                case Rt:
                    e: {
                        for (C = d.key; a !== null; ) {
                            if (a.key === C)
                                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                                    n(f, a.sibling), (a = l(a, d.children || [])), (a.return = f), (f = a);
                                    break e;
                                } else {
                                    n(f, a);
                                    break;
                                }
                            else t(f, a);
                            a = a.sibling;
                        }
                        (a = Wl(d, f.mode, h)), (a.return = f), (f = a);
                    }
                    return o(f);
                case Ze:
                    return (C = d._init), I(f, a, C(d._payload), h);
            }
            if (yn(d)) return w(f, a, d, h);
            if (an(d)) return k(f, a, d, h);
            pr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d), a !== null && a.tag === 6 ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a)) : (n(f, a), (a = Hl(d, f.mode, h)), (a.return = f), (f = a)), o(f))
            : n(f, a);
    }
    return I;
}
var bt = ta(!0),
    na = ta(!1),
    Hr = pt(null),
    Wr = null,
    Bt = null,
    oo = null;
function uo() {
    oo = Bt = Wr = null;
}
function so(e) {
    var t = Hr.current;
    D(Hr), (e._currentValue = t);
}
function ki(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
        e = e.return;
    }
}
function Xt(e, t) {
    (Wr = e), (oo = Bt = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (ae = !0), (e.firstContext = null));
}
function xe(e) {
    var t = e._currentValue;
    if (oo !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Bt === null)) {
            if (Wr === null) throw Error(g(308));
            (Bt = e), (Wr.dependencies = { lanes: 0, firstContext: e });
        } else Bt = Bt.next = e;
    return t;
}
var kt = null;
function ao(e) {
    kt === null ? (kt = [e]) : kt.push(e);
}
function ra(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? ((n.next = n), ao(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), Ke(e, r);
}
function Ke(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function co(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function la(e, t) {
    (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function He(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ot(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), j & 2)) {
        var l = r.pending;
        return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), Ke(e, n);
    }
    return (l = r.interleaved), l === null ? ((t.next = t), ao(r)) : ((t.next = l.next), (l.next = t)), (r.interleaved = t), Ke(e, n);
}
function xr(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
    }
}
function gu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (l = i = t) : (i = i.next = t);
        } else l = i = t;
        (n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Qr(e, t, n, r) {
    var l = e.updateQueue;
    Je = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            c = s.next;
        (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
        var v = e.alternate;
        v !== null && ((v = v.updateQueue), (u = v.lastBaseUpdate), u !== o && (u === null ? (v.firstBaseUpdate = c) : (u.next = c), (v.lastBaseUpdate = s)));
    }
    if (i !== null) {
        var m = l.baseState;
        (o = 0), (v = c = s = null), (u = i);
        do {
            var p = u.lane,
                y = u.eventTime;
            if ((r & p) === p) {
                v !== null && (v = v.next = { eventTime: y, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
                e: {
                    var w = e,
                        k = u;
                    switch (((p = t), (y = n), k.tag)) {
                        case 1:
                            if (((w = k.payload), typeof w == "function")) {
                                m = w.call(y, m, p);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (((w = k.payload), (p = typeof w == "function" ? w.call(y, m, p) : w), p == null)) break e;
                            m = A({}, m, p);
                            break e;
                        case 2:
                            Je = !0;
                    }
                }
                u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [u]) : p.push(u));
            } else (y = { eventTime: y, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }), v === null ? ((c = v = y), (s = m)) : (v = v.next = y), (o |= p);
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break;
                (p = u), (u = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null);
            }
        } while (!0);
        if ((v === null && (s = m), (l.baseState = s), (l.firstBaseUpdate = c), (l.lastBaseUpdate = v), (t = l.shared.interleaved), t !== null)) {
            l = t;
            do (o |= l.lane), (l = l.next);
            while (l !== t);
        } else i === null && (l.shared.lanes = 0);
        (Nt |= o), (e.lanes = o), (e.memoizedState = m);
    }
}
function yu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function")) throw Error(g(191, l));
                l.call(r);
            }
        }
}
var qn = {},
    Ue = pt(qn),
    Vn = pt(qn),
    Hn = pt(qn);
function St(e) {
    if (e === qn) throw Error(g(174));
    return e;
}
function fo(e, t) {
    switch ((O(Hn, t), O(Vn, e), O(Ue, qn), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ei(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ei(t, e));
    }
    D(Ue), O(Ue, t);
}
function en() {
    D(Ue), D(Vn), D(Hn);
}
function ia(e) {
    St(Hn.current);
    var t = St(Ue.current),
        n = ei(t, e.type);
    t !== n && (O(Vn, e), O(Ue, n));
}
function po(e) {
    Vn.current === e && (D(Ue), D(Vn));
}
var U = pt(0);
function Kr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Fl = [];
function mo() {
    for (var e = 0; e < Fl.length; e++) Fl[e]._workInProgressVersionPrimary = null;
    Fl.length = 0;
}
var Cr = Xe.ReactCurrentDispatcher,
    Ul = Xe.ReactCurrentBatchConfig,
    Pt = 0,
    $ = null,
    K = null,
    G = null,
    Yr = !1,
    Pn = !1,
    Wn = 0,
    Zf = 0;
function ee() {
    throw Error(g(321));
}
function vo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Re(e[n], t[n])) return !1;
    return !0;
}
function ho(e, t, n, r, l, i) {
    if (((Pt = i), ($ = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Cr.current = e === null || e.memoizedState === null ? ed : td), (e = n(r, l)), Pn)) {
        i = 0;
        do {
            if (((Pn = !1), (Wn = 0), 25 <= i)) throw Error(g(301));
            (i += 1), (G = K = null), (t.updateQueue = null), (Cr.current = nd), (e = n(r, l));
        } while (Pn);
    }
    if (((Cr.current = Xr), (t = K !== null && K.next !== null), (Pt = 0), (G = K = $ = null), (Yr = !1), t)) throw Error(g(300));
    return e;
}
function go() {
    var e = Wn !== 0;
    return (Wn = 0), e;
}
function De() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return G === null ? ($.memoizedState = G = e) : (G = G.next = e), G;
}
function Ce() {
    if (K === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = K.next;
    var t = G === null ? $.memoizedState : G.next;
    if (t !== null) (G = t), (K = e);
    else {
        if (e === null) throw Error(g(310));
        (K = e), (e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }), G === null ? ($.memoizedState = G = e) : (G = G.next = e);
    }
    return G;
}
function Qn(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function $l(e) {
    var t = Ce(),
        n = t.queue;
    if (n === null) throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = K,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            (l.next = i.next), (i.next = o);
        }
        (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
        (i = l.next), (r = r.baseState);
        var u = (o = null),
            s = null,
            c = i;
        do {
            var v = c.lane;
            if ((Pt & v) === v) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var m = { lane: v, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                s === null ? ((u = s = m), (o = r)) : (s = s.next = m), ($.lanes |= v), (Nt |= v);
            }
            c = c.next;
        } while (c !== null && c !== i);
        s === null ? (o = r) : (s.next = u), Re(r, t.memoizedState) || (ae = !0), (t.memoizedState = r), (t.baseState = o), (t.baseQueue = s), (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (i = l.lane), ($.lanes |= i), (Nt |= i), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Al(e) {
    var t = Ce(),
        n = t.queue;
    if (n === null) throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = (l = l.next);
        do (i = e(i, o.action)), (o = o.next);
        while (o !== l);
        Re(i, t.memoizedState) || (ae = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
    }
    return [i, r];
}
function oa() {}
function ua(e, t) {
    var n = $,
        r = Ce(),
        l = t(),
        i = !Re(r.memoizedState, l);
    if ((i && ((r.memoizedState = l), (ae = !0)), (r = r.queue), yo(ca.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || (G !== null && G.memoizedState.tag & 1))) {
        if (((n.flags |= 2048), Kn(9, aa.bind(null, n, r, l, t), void 0, null), Z === null)) throw Error(g(349));
        Pt & 30 || sa(n, t, l);
    }
    return l;
}
function sa(e, t, n) {
    (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = $.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), ($.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function aa(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), fa(t) && da(e);
}
function ca(e, t, n) {
    return n(function () {
        fa(t) && da(e);
    });
}
function fa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Re(e, n);
    } catch {
        return !0;
    }
}
function da(e) {
    var t = Ke(e, 1);
    t !== null && je(t, e, 1, -1);
}
function wu(e) {
    var t = De();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qn, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = bf.bind(null, $, e)),
        [t.memoizedState, e]
    );
}
function Kn(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = $.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), ($.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function pa() {
    return Ce().memoizedState;
}
function _r(e, t, n, r) {
    var l = De();
    ($.flags |= e), (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ul(e, t, n, r) {
    var l = Ce();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (K !== null) {
        var o = K.memoizedState;
        if (((i = o.destroy), r !== null && vo(r, o.deps))) {
            l.memoizedState = Kn(t, n, i, r);
            return;
        }
    }
    ($.flags |= e), (l.memoizedState = Kn(1 | t, n, i, r));
}
function ku(e, t) {
    return _r(8390656, 8, e, t);
}
function yo(e, t) {
    return ul(2048, 8, e, t);
}
function ma(e, t) {
    return ul(4, 2, e, t);
}
function va(e, t) {
    return ul(4, 4, e, t);
}
function ha(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function ga(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ul(4, 4, ha.bind(null, t, e), n);
}
function wo() {}
function ya(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function wa(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vo(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ka(e, t, n) {
    return Pt & 21 ? (Re(n, t) || ((n = _s()), ($.lanes |= n), (Nt |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (ae = !0)), (e.memoizedState = n));
}
function Jf(e, t) {
    var n = R;
    (R = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ul.transition;
    Ul.transition = {};
    try {
        e(!1), t();
    } finally {
        (R = n), (Ul.transition = r);
    }
}
function Sa() {
    return Ce().memoizedState;
}
function qf(e, t, n) {
    var r = st(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ea(e))) xa(t, n);
    else if (((n = ra(e, t, n, r)), n !== null)) {
        var l = ie();
        je(n, e, r, l), Ca(n, t, r);
    }
}
function bf(e, t, n) {
    var r = st(e),
        l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ea(e)) xa(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
            try {
                var o = t.lastRenderedState,
                    u = i(o, n);
                if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
                    var s = t.interleaved;
                    s === null ? ((l.next = l), ao(t)) : ((l.next = s.next), (s.next = l)), (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = ra(e, t, l, r)), n !== null && ((l = ie()), je(n, e, r, l), Ca(n, t, r));
    }
}
function Ea(e) {
    var t = e.alternate;
    return e === $ || (t !== null && t === $);
}
function xa(e, t) {
    Pn = Yr = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Ca(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
    }
}
var Xr = {
        readContext: xe,
        useCallback: ee,
        useContext: ee,
        useEffect: ee,
        useImperativeHandle: ee,
        useInsertionEffect: ee,
        useLayoutEffect: ee,
        useMemo: ee,
        useReducer: ee,
        useRef: ee,
        useState: ee,
        useDebugValue: ee,
        useDeferredValue: ee,
        useTransition: ee,
        useMutableSource: ee,
        useSyncExternalStore: ee,
        useId: ee,
        unstable_isNewReconciler: !1,
    },
    ed = {
        readContext: xe,
        useCallback: function (e, t) {
            return (De().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: xe,
        useEffect: ku,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), _r(4194308, 4, ha.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return _r(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return _r(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = De();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = De();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = qf.bind(null, $, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = De();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: wu,
        useDebugValue: wo,
        useDeferredValue: function (e) {
            return (De().memoizedState = e);
        },
        useTransition: function () {
            var e = wu(!1),
                t = e[0];
            return (e = Jf.bind(null, e[1])), (De().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = $,
                l = De();
            if (F) {
                if (n === void 0) throw Error(g(407));
                n = n();
            } else {
                if (((n = t()), Z === null)) throw Error(g(349));
                Pt & 30 || sa(r, t, n);
            }
            l.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (l.queue = i), ku(ca.bind(null, r, i, e), [e]), (r.flags |= 2048), Kn(9, aa.bind(null, r, i, n, t), void 0, null), n;
        },
        useId: function () {
            var e = De(),
                t = Z.identifierPrefix;
            if (F) {
                var n = Ve,
                    r = Be;
                (n = (r & ~(1 << (32 - Le(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = Wn++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
            } else (n = Zf++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    td = {
        readContext: xe,
        useCallback: ya,
        useContext: xe,
        useEffect: yo,
        useImperativeHandle: ga,
        useInsertionEffect: ma,
        useLayoutEffect: va,
        useMemo: wa,
        useReducer: $l,
        useRef: pa,
        useState: function () {
            return $l(Qn);
        },
        useDebugValue: wo,
        useDeferredValue: function (e) {
            var t = Ce();
            return ka(t, K.memoizedState, e);
        },
        useTransition: function () {
            var e = $l(Qn)[0],
                t = Ce().memoizedState;
            return [e, t];
        },
        useMutableSource: oa,
        useSyncExternalStore: ua,
        useId: Sa,
        unstable_isNewReconciler: !1,
    },
    nd = {
        readContext: xe,
        useCallback: ya,
        useContext: xe,
        useEffect: yo,
        useImperativeHandle: ga,
        useInsertionEffect: ma,
        useLayoutEffect: va,
        useMemo: wa,
        useReducer: Al,
        useRef: pa,
        useState: function () {
            return Al(Qn);
        },
        useDebugValue: wo,
        useDeferredValue: function (e) {
            var t = Ce();
            return K === null ? (t.memoizedState = e) : ka(t, K.memoizedState, e);
        },
        useTransition: function () {
            var e = Al(Qn)[0],
                t = Ce().memoizedState;
            return [e, t];
        },
        useMutableSource: oa,
        useSyncExternalStore: ua,
        useId: Sa,
        unstable_isNewReconciler: !1,
    };
function Ne(e, t) {
    if (e && e.defaultProps) {
        (t = A({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Si(e, t, n, r) {
    (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : A({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Lt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ie(),
            l = st(e),
            i = He(r, l);
        (i.payload = t), n != null && (i.callback = n), (t = ot(e, i, l)), t !== null && (je(t, e, l, r), xr(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ie(),
            l = st(e),
            i = He(r, l);
        (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = ot(e, i, l)), t !== null && (je(t, e, l, r), xr(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ie(),
            r = st(e),
            l = He(n, r);
        (l.tag = 2), t != null && (l.callback = t), (t = ot(e, l, r)), t !== null && (je(t, e, r, n), xr(t, e, r));
    },
};
function Su(e, t, n, r, l, i, o) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, i) : !0;
}
function _a(e, t, n) {
    var r = !1,
        l = ft,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null ? (i = xe(i)) : ((l = fe(t) ? Ct : re.current), (r = t.contextTypes), (i = (r = r != null) ? Jt(e, l) : ft)),
        (t = new t(n, i)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = sl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Eu(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && sl.enqueueReplaceState(t, t.state, null);
}
function Ei(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), co(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? (l.context = xe(i)) : ((i = fe(t) ? Ct : re.current), (l.context = Jt(e, i))),
        (l.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (Si(e, t, i, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
            ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
            t !== l.state && sl.enqueueReplaceState(l, l.state, null),
            Qr(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Tc(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (i) {
        l =
            `

Error generating stack: ` +
            i.message +
            `

` +
            i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}
function Bl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xi(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var rd = typeof WeakMap == "function" ? WeakMap : Map;
function Pa(e, t, n) {
    (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Zr || ((Zr = !0), (Oi = r)), xi(e, t);
        }),
        n
    );
}
function Na(e, t, n) {
    (n = He(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                xi(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                xi(e, t), typeof r != "function" && (ut === null ? (ut = new Set([this])) : ut.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
            }),
        n
    );
}
function xu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new rd();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = gd.bind(null, e, t, n)), t.then(e, e));
}
function Cu(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function _u(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = He(-1, 1)), (t.tag = 2), ot(n, t, 1))), (n.lanes |= 1)), e);
}
var ld = Xe.ReactCurrentOwner,
    ae = !1;
function le(e, t, n, r) {
    t.child = e === null ? na(t, null, n, r) : bt(t, e.child, n, r);
}
function Pu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Xt(t, l), (r = ho(e, t, n, r, i, l)), (n = go()), e !== null && !ae ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ye(e, t, l)) : (F && n && ro(t), (t.flags |= 1), le(e, t, r, l), t.child);
}
function Nu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !No(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), za(e, t, i, r, l))
            : ((e = Tr(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
        var o = i.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : Un), n(o, r) && e.ref === t.ref)) return Ye(e, t, l);
    }
    return (t.flags |= 1), (e = at(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function za(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Un(i, r) && e.ref === t.ref)
            if (((ae = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0)) e.flags & 131072 && (ae = !0);
            else return (t.lanes = e.lanes), Ye(e, t, l);
    }
    return Ci(e, t, n, r, l);
}
function Ta(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), O(Ht, pe), (pe |= n);
        else {
            if (!(n & 1073741824))
                return (e = i !== null ? i.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), O(Ht, pe), (pe |= e), null;
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), O(Ht, pe), (pe |= r);
        }
    else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), O(Ht, pe), (pe |= r);
    return le(e, t, l, n), t.child;
}
function La(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ci(e, t, n, r, l) {
    var i = fe(n) ? Ct : re.current;
    return (
        (i = Jt(t, i)), Xt(t, l), (n = ho(e, t, n, r, i, l)), (r = go()), e !== null && !ae ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ye(e, t, l)) : (F && r && ro(t), (t.flags |= 1), le(e, t, n, l), t.child)
    );
}
function zu(e, t, n, r, l) {
    if (fe(n)) {
        var i = !0;
        Ar(t);
    } else i = !1;
    if ((Xt(t, l), t.stateNode === null)) Pr(e, t), _a(t, n, r), Ei(t, n, r, l), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var s = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? (c = xe(c)) : ((c = fe(n) ? Ct : re.current), (c = Jt(t, c)));
        var v = n.getDerivedStateFromProps,
            m = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        m || (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") || ((u !== r || s !== c) && Eu(t, o, r, c)), (Je = !1);
        var p = t.memoizedState;
        (o.state = p),
            Qr(t, r, o, l),
            (s = t.memoizedState),
            u !== r || p !== s || ce.current || Je
                ? (typeof v == "function" && (Si(t, n, v, r), (s = t.memoizedState)),
                  (u = Je || Su(t, n, u, r, p, s, c))
                      ? (m ||
                            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = c),
                  (r = u))
                : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (o = t.stateNode),
            la(e, t),
            (u = t.memoizedProps),
            (c = t.type === t.elementType ? u : Ne(t.type, u)),
            (o.props = c),
            (m = t.pendingProps),
            (p = o.context),
            (s = n.contextType),
            typeof s == "object" && s !== null ? (s = xe(s)) : ((s = fe(n) ? Ct : re.current), (s = Jt(t, s)));
        var y = n.getDerivedStateFromProps;
        (v = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
            ((u !== m || p !== s) && Eu(t, o, r, s)),
            (Je = !1),
            (p = t.memoizedState),
            (o.state = p),
            Qr(t, r, o, l);
        var w = t.memoizedState;
        u !== m || p !== w || ce.current || Je
            ? (typeof y == "function" && (Si(t, n, y, r), (w = t.memoizedState)),
              (c = Je || Su(t, n, c, r, p, w, s) || !1)
                  ? (v ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (o.props = r),
              (o.state = w),
              (o.context = s),
              (r = c))
            : (typeof o.componentDidUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return _i(e, t, n, r, i, l);
}
function _i(e, t, n, r, l, i) {
    La(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && pu(t, n, !1), Ye(e, t, i);
    (r = t.stateNode), (ld.current = t);
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (t.flags |= 1), e !== null && o ? ((t.child = bt(t, e.child, null, i)), (t.child = bt(t, null, u, i))) : le(e, t, u, i), (t.memoizedState = r.state), l && pu(t, n, !0), t.child;
}
function ja(e) {
    var t = e.stateNode;
    t.pendingContext ? du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && du(e, t.context, !1), fo(e, t.containerInfo);
}
function Tu(e, t, n, r, l) {
    return qt(), io(l), (t.flags |= 256), le(e, t, n, r), t.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ni(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ra(e, t, n) {
    var r = t.pendingProps,
        l = U.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        u;
    if (((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1), O(U, l & 1), e === null))
        return (
            wi(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((o = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = o)) : (i = fl(o, r, 0, null)),
                        (e = xt(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = Ni(n)),
                        (t.memoizedState = Pi),
                        e)
                      : ko(t, o))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null))) return id(e, t, o, r, u, l, n);
    if (i) {
        (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
        var s = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && t.child !== l ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null)) : ((r = at(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null ? (i = at(u, i)) : ((i = xt(i, o, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (o = e.child.memoizedState),
            (o = o === null ? Ni(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
            (i.memoizedState = o),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = Pi),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = at(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ko(e, t) {
    return (t = fl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function mr(e, t, n, r) {
    return r !== null && io(r), bt(t, e.child, null, n), (e = ko(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function id(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Bl(Error(g(422)))), mr(e, t, o, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (l = t.mode),
              (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
              (i = xt(i, l, o, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && bt(t, e.child, null, o),
              (t.child.memoizedState = Ni(o)),
              (t.memoizedState = Pi),
              i);
    if (!(t.mode & 1)) return mr(e, t, o, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (r = u), (i = Error(g(419))), (r = Bl(i, r, void 0)), mr(e, t, o, r);
    }
    if (((u = (o & e.childLanes) !== 0), ae || u)) {
        if (((r = Z), r !== null)) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | o) ? 0 : l), l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ke(e, l), je(r, e, l, -1));
        }
        return Po(), (r = Bl(Error(g(421)))), mr(e, t, o, r);
    }
    return l.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = yd.bind(null, e)), (l._reactRetry = t), null)
        : ((e = i.treeContext),
          (me = it(l.nextSibling)),
          (ve = t),
          (F = !0),
          (Te = null),
          e !== null && ((we[ke++] = Be), (we[ke++] = Ve), (we[ke++] = _t), (Be = e.id), (Ve = e.overflow), (_t = t)),
          (t = ko(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Lu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function Vl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l })
        : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = l));
}
function Oa(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if ((le(e, t, r.children, n), (r = U.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Lu(e, n, t);
                else if (e.tag === 19) Lu(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((O(U, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null; ) (e = n.alternate), e !== null && Kr(e) === null && (l = n), (n = n.sibling);
                (n = l), n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)), Vl(t, !1, l, n, i);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && Kr(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                Vl(t, !0, n, null, i);
                break;
            case "together":
                Vl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Pr(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Nt |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(g(153));
    if (t.child !== null) {
        for (e = t.child, n = at(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = at(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function od(e, t, n) {
    switch (t.tag) {
        case 3:
            ja(t), qt();
            break;
        case 5:
            ia(t);
            break;
        case 1:
            fe(t.type) && Ar(t);
            break;
        case 4:
            fo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            O(Hr, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null ? (O(U, U.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Ra(e, t, n) : (O(U, U.current & 1), (e = Ye(e, t, n)), e !== null ? e.sibling : null);
            O(U, U.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Oa(e, t, n);
                t.flags |= 128;
            }
            if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), O(U, U.current), r)) break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Ta(e, t, n);
    }
    return Ye(e, t, n);
}
var Ma, zi, Da, Ia;
Ma = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
zi = function () {};
Da = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), St(Ue.current);
        var i = null;
        switch (n) {
            case "input":
                (l = Zl(e, l)), (r = Zl(e, r)), (i = []);
                break;
            case "select":
                (l = A({}, l, { value: void 0 })), (r = A({}, r, { value: void 0 })), (i = []);
                break;
            case "textarea":
                (l = bl(e, l)), (r = bl(e, r)), (i = []);
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ur);
        }
        ti(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (jn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (((u = l != null ? l[c] : void 0), r.hasOwnProperty(c) && s !== u && (s != null || u != null)))
                if (c === "style")
                    if (u) {
                        for (o in u) !u.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
                        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), s != null && u !== s && (i = i || []).push(c, s))
                        : c === "children"
                        ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(c, "" + s)
                        : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (jn.hasOwnProperty(c) ? (s != null && c === "onScroll" && M("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
Ia = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function vn(e, t) {
    if (!F)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t) for (var l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags & 14680064), (r |= l.flags & 14680064), (l.return = e), (l = l.sibling);
    else for (l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ud(e, t, n) {
    var r = t.pendingProps;
    switch ((lo(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return te(t), null;
        case 1:
            return fe(t.type) && $r(), te(t), null;
        case 3:
            return (
                (r = t.stateNode),
                en(),
                D(ce),
                D(re),
                mo(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) && (dr(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), Te !== null && (Ii(Te), (Te = null)))),
                zi(e, t),
                te(t),
                null
            );
        case 5:
            po(t);
            var l = St(Hn.current);
            if (((n = t.type), e !== null && t.stateNode != null)) Da(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(g(166));
                    return te(t), null;
                }
                if (((e = St(Ue.current)), dr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (((r[Ie] = t), (r[Bn] = i), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            M("cancel", r), M("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            M("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < kn.length; l++) M(kn[l], r);
                            break;
                        case "source":
                            M("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            M("error", r), M("load", r);
                            break;
                        case "details":
                            M("toggle", r);
                            break;
                        case "input":
                            $o(r, i), M("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }), M("invalid", r);
                            break;
                        case "textarea":
                            Bo(r, i), M("invalid", r);
                    }
                    ti(n, i), (l = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var u = i[o];
                            o === "children"
                                ? typeof u == "string"
                                    ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e), (l = ["children", u]))
                                    : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e), (l = ["children", "" + u]))
                                : jn.hasOwnProperty(o) && u != null && o === "onScroll" && M("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            rr(r), Ao(r, i, !0);
                            break;
                        case "textarea":
                            rr(r), Vo(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Ur);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = cs(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = o.createElement(n, { is: r.is }))
                                : ((e = o.createElement(n)), n === "select" && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[Ie] = t),
                        (e[Bn] = r),
                        Ma(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = ni(n, r)), n)) {
                            case "dialog":
                                M("cancel", e), M("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                M("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < kn.length; l++) M(kn[l], e);
                                l = r;
                                break;
                            case "source":
                                M("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                M("error", e), M("load", e), (l = r);
                                break;
                            case "details":
                                M("toggle", e), (l = r);
                                break;
                            case "input":
                                $o(e, r), (l = Zl(e, r)), M("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (l = A({}, r, { value: void 0 })), M("invalid", e);
                                break;
                            case "textarea":
                                Bo(e, r), (l = bl(e, r)), M("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        ti(n, l), (u = l);
                        for (i in u)
                            if (u.hasOwnProperty(i)) {
                                var s = u[i];
                                i === "style"
                                    ? ps(e, s)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0), s != null && fs(e, s))
                                    : i === "children"
                                    ? typeof s == "string"
                                        ? (n !== "textarea" || s !== "") && Rn(e, s)
                                        : typeof s == "number" && Rn(e, "" + s)
                                    : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (jn.hasOwnProperty(i) ? s != null && i === "onScroll" && M("scroll", e) : s != null && Hi(e, i, s, o));
                            }
                        switch (n) {
                            case "input":
                                rr(e), Ao(e, r, !1);
                                break;
                            case "textarea":
                                rr(e), Vo(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ct(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple), (i = r.value), i != null ? Wt(e, !!r.multiple, i, !1) : r.defaultValue != null && Wt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Ur);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return te(t), null;
        case 6:
            if (e && t.stateNode != null) Ia(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
                if (((n = St(Hn.current)), St(Ue.current), dr(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[Ie] = t), (i = r.nodeValue !== n) && ((e = ve), e !== null)))
                        switch (e.tag) {
                            case 3:
                                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ie] = t), (t.stateNode = r);
            }
            return te(t), null;
        case 13:
            if ((D(U), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if (F && me !== null && t.mode & 1 && !(t.flags & 128)) ea(), qt(), (t.flags |= 98560), (i = !1);
                else if (((i = dr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(g(318));
                        if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(g(317));
                        i[Ie] = t;
                    } else qt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    te(t), (i = !1);
                } else Te !== null && (Ii(Te), (Te = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Po())),
                  t.updateQueue !== null && (t.flags |= 4),
                  te(t),
                  null);
        case 4:
            return en(), zi(e, t), e === null && $n(t.stateNode.containerInfo), te(t), null;
        case 10:
            return so(t.type._context), te(t), null;
        case 17:
            return fe(t.type) && $r(), te(t), null;
        case 19:
            if ((D(U), (i = t.memoizedState), i === null)) return te(t), null;
            if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) vn(i, !1);
                else {
                    if (Y !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = Kr(e)), o !== null)) {
                                for (t.flags |= 128, vn(i, !1), r = o.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps = o.memoizedProps),
                                              (i.memoizedState = o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (e = o.dependencies),
                                              (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return O(U, (U.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null && W() > nn && ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Kr(o)), e !== null)) {
                        if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), vn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !F)) return te(t), null;
                    } else 2 * W() - i.renderingStartTime > nn && n !== 1073741824 && ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
                i.isBackwards ? ((o.sibling = t.child), (t.child = o)) : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
            }
            return i.tail !== null ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = W()), (t.sibling = null), (n = U.current), O(U, r ? (n & 1) | 2 : n & 1), t) : (te(t), null);
        case 22:
        case 23:
            return _o(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? pe & 1073741824 && (te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : te(t), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(g(156, t.tag));
}
function sd(e, t) {
    switch ((lo(t), t.tag)) {
        case 1:
            return fe(t.type) && $r(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return en(), D(ce), D(re), mo(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return po(t), null;
        case 13:
            if ((D(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(g(340));
                qt();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return D(U), null;
        case 4:
            return en(), null;
        case 10:
            return so(t.type._context), null;
        case 22:
        case 23:
            return _o(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var vr = !1,
    ne = !1,
    ad = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;
function Vt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                B(e, t, r);
            }
        else n.current = null;
}
function Ti(e, t, n) {
    try {
        n();
    } catch (r) {
        B(e, t, r);
    }
}
var ju = !1;
function cd(e, t) {
    if (((di = Dr), (e = Bs()), no(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        u = -1,
                        s = -1,
                        c = 0,
                        v = 0,
                        m = e,
                        p = null;
                    t: for (;;) {
                        for (var y; m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l), m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (y = m.firstChild) !== null; )
                            (p = m), (m = y);
                        for (;;) {
                            if (m === e) break t;
                            if ((p === n && ++c === l && (u = o), p === i && ++v === r && (s = o), (y = m.nextSibling) !== null)) break;
                            (m = p), (p = m.parentNode);
                        }
                        m = y;
                    }
                    n = u === -1 || s === -1 ? null : { start: u, end: s };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (pi = { focusedElem: e, selectionRange: n }, Dr = !1, S = t; S !== null; )
        if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (S = e);
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var k = w.memoizedProps,
                                        I = w.memoizedState,
                                        f = t.stateNode,
                                        a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Ne(t.type, k), I);
                                    f.__reactInternalSnapshotBeforeUpdate = a;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1 ? (d.textContent = "") : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(g(163));
                        }
                } catch (h) {
                    B(t, t.return, h);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (S = e);
                    break;
                }
                S = t.return;
            }
    return (w = ju), (ju = !1), w;
}
function Nn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                (l.destroy = void 0), i !== void 0 && Ti(t, n, i);
            }
            l = l.next;
        } while (l !== r);
    }
}
function al(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Li(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Fa(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Fa(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Ie], delete t[Bn], delete t[hi], delete t[Kf], delete t[Yf])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ua(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ji(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = Ur));
    else if (r !== 4 && ((e = e.child), e !== null)) for (ji(e, t, n), e = e.sibling; e !== null; ) ji(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var J = null,
    ze = !1;
function Ge(e, t, n) {
    for (n = n.child; n !== null; ) $a(e, t, n), (n = n.sibling);
}
function $a(e, t, n) {
    if (Fe && typeof Fe.onCommitFiberUnmount == "function")
        try {
            Fe.onCommitFiberUnmount(tl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            ne || Vt(n, t);
        case 6:
            var r = J,
                l = ze;
            (J = null), Ge(e, t, n), (J = r), (ze = l), J !== null && (ze ? ((e = J), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : J.removeChild(n.stateNode));
            break;
        case 18:
            J !== null && (ze ? ((e = J), (n = n.stateNode), e.nodeType === 8 ? Dl(e.parentNode, n) : e.nodeType === 1 && Dl(e, n), In(e)) : Dl(J, n.stateNode));
            break;
        case 4:
            (r = J), (l = ze), (J = n.stateNode.containerInfo), (ze = !0), Ge(e, t, n), (J = r), (ze = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ne && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    (i = i.tag), o !== void 0 && (i & 2 || i & 4) && Ti(n, t, o), (l = l.next);
                } while (l !== r);
            }
            Ge(e, t, n);
            break;
        case 1:
            if (!ne && (Vt(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (u) {
                    B(n, t, u);
                }
            Ge(e, t, n);
            break;
        case 21:
            Ge(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((ne = (r = ne) || n.memoizedState !== null), Ge(e, t, n), (ne = r)) : Ge(e, t, n);
            break;
        default:
            Ge(e, t, n);
    }
}
function Ou(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ad()),
            t.forEach(function (r) {
                var l = wd.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function Pe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            (J = u.stateNode), (ze = !1);
                            break e;
                        case 3:
                            (J = u.stateNode.containerInfo), (ze = !0);
                            break e;
                        case 4:
                            (J = u.stateNode.containerInfo), (ze = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (J === null) throw Error(g(160));
                $a(i, o, l), (J = null), (ze = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (c) {
                B(l, t, c);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Aa(t, e), (t = t.sibling);
}
function Aa(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Pe(t, e), Oe(e), r & 4)) {
                try {
                    Nn(3, e, e.return), al(3, e);
                } catch (k) {
                    B(e, e.return, k);
                }
                try {
                    Nn(5, e, e.return);
                } catch (k) {
                    B(e, e.return, k);
                }
            }
            break;
        case 1:
            Pe(t, e), Oe(e), r & 512 && n !== null && Vt(n, n.return);
            break;
        case 5:
            if ((Pe(t, e), Oe(e), r & 512 && n !== null && Vt(n, n.return), e.flags & 32)) {
                var l = e.stateNode;
                try {
                    Rn(l, "");
                } catch (k) {
                    B(e, e.return, k);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    u = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === "input" && i.type === "radio" && i.name != null && ss(l, i), ni(u, o);
                        var c = ni(u, i);
                        for (o = 0; o < s.length; o += 2) {
                            var v = s[o],
                                m = s[o + 1];
                            v === "style" ? ps(l, m) : v === "dangerouslySetInnerHTML" ? fs(l, m) : v === "children" ? Rn(l, m) : Hi(l, v, m, c);
                        }
                        switch (u) {
                            case "input":
                                Jl(l, i);
                                break;
                            case "textarea":
                                as(l, i);
                                break;
                            case "select":
                                var p = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!i.multiple;
                                var y = i.value;
                                y != null ? Wt(l, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? Wt(l, !!i.multiple, i.defaultValue, !0) : Wt(l, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        l[Bn] = i;
                    } catch (k) {
                        B(e, e.return, k);
                    }
            }
            break;
        case 6:
            if ((Pe(t, e), Oe(e), r & 4)) {
                if (e.stateNode === null) throw Error(g(162));
                (l = e.stateNode), (i = e.memoizedProps);
                try {
                    l.nodeValue = i;
                } catch (k) {
                    B(e, e.return, k);
                }
            }
            break;
        case 3:
            if ((Pe(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    In(t.containerInfo);
                } catch (k) {
                    B(e, e.return, k);
                }
            break;
        case 4:
            Pe(t, e), Oe(e);
            break;
        case 13:
            Pe(t, e), Oe(e), (l = e.child), l.flags & 8192 && ((i = l.memoizedState !== null), (l.stateNode.isHidden = i), !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (xo = W())), r & 4 && Ou(e);
            break;
        case 22:
            if (((v = n !== null && n.memoizedState !== null), e.mode & 1 ? ((ne = (c = ne) || v), Pe(t, e), (ne = c)) : Pe(t, e), Oe(e), r & 8192)) {
                if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !v && e.mode & 1))
                    for (S = e, v = e.child; v !== null; ) {
                        for (m = S = v; S !== null; ) {
                            switch (((p = S), (y = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Nn(4, p, p.return);
                                    break;
                                case 1:
                                    Vt(p, p.return);
                                    var w = p.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
                                        } catch (k) {
                                            B(r, n, k);
                                        }
                                    }
                                    break;
                                case 5:
                                    Vt(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Du(m);
                                        continue;
                                    }
                            }
                            y !== null ? ((y.return = p), (S = y)) : Du(m);
                        }
                        v = v.sibling;
                    }
                e: for (v = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (v === null) {
                            v = m;
                            try {
                                (l = m.stateNode),
                                    c
                                        ? ((i = l.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none"))
                                        : ((u = m.stateNode), (s = m.memoizedProps.style), (o = s != null && s.hasOwnProperty("display") ? s.display : null), (u.style.display = ds("display", o)));
                            } catch (k) {
                                B(e, e.return, k);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (v === null)
                            try {
                                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                            } catch (k) {
                                B(e, e.return, k);
                            }
                    } else if (((m.tag !== 22 && m.tag !== 23) || m.memoizedState === null || m === e) && m.child !== null) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e;
                        v === m && (v = null), (m = m.return);
                    }
                    v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
                }
            }
            break;
        case 19:
            Pe(t, e), Oe(e), r & 4 && Ou(e);
            break;
        case 21:
            break;
        default:
            Pe(t, e), Oe(e);
    }
}
function Oe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ua(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(g(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
                    var i = Ru(e);
                    Ri(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = Ru(e);
                    ji(e, u, o);
                    break;
                default:
                    throw Error(g(161));
            }
        } catch (s) {
            B(e, e.return, s);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function fd(e, t, n) {
    (S = e), Ba(e);
}
function Ba(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || vr;
            if (!o) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || ne;
                u = vr;
                var c = ne;
                if (((vr = o), (ne = s) && !c)) for (S = l; S !== null; ) (o = S), (s = o.child), o.tag === 22 && o.memoizedState !== null ? Iu(l) : s !== null ? ((s.return = o), (S = s)) : Iu(l);
                for (; i !== null; ) (S = i), Ba(i), (i = i.sibling);
                (S = l), (vr = u), (ne = c);
            }
            Mu(e);
        } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Mu(e);
    }
}
function Mu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ne || al(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ne)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : Ne(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            i !== null && yu(t, i, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                yu(t, o, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var v = c.memoizedState;
                                    if (v !== null) {
                                        var m = v.dehydrated;
                                        m !== null && In(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(g(163));
                    }
                ne || (t.flags & 512 && Li(t));
            } catch (p) {
                B(t, t.return, p);
            }
        }
        if (t === e) {
            S = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (S = n);
            break;
        }
        S = t.return;
    }
}
function Du(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (S = n);
            break;
        }
        S = t.return;
    }
}
function Iu(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        al(4, t);
                    } catch (s) {
                        B(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            B(t, l, s);
                        }
                    }
                    var i = t.return;
                    try {
                        Li(t);
                    } catch (s) {
                        B(t, i, s);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Li(t);
                    } catch (s) {
                        B(t, o, s);
                    }
            }
        } catch (s) {
            B(t, t.return, s);
        }
        if (t === e) {
            S = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (S = u);
            break;
        }
        S = t.return;
    }
}
var dd = Math.ceil,
    Gr = Xe.ReactCurrentDispatcher,
    So = Xe.ReactCurrentOwner,
    Ee = Xe.ReactCurrentBatchConfig,
    j = 0,
    Z = null,
    Q = null,
    q = 0,
    pe = 0,
    Ht = pt(0),
    Y = 0,
    Yn = null,
    Nt = 0,
    cl = 0,
    Eo = 0,
    zn = null,
    se = null,
    xo = 0,
    nn = 1 / 0,
    $e = null,
    Zr = !1,
    Oi = null,
    ut = null,
    hr = !1,
    tt = null,
    Jr = 0,
    Tn = 0,
    Mi = null,
    Nr = -1,
    zr = 0;
function ie() {
    return j & 6 ? W() : Nr !== -1 ? Nr : (Nr = W());
}
function st(e) {
    return e.mode & 1 ? (j & 2 && q !== 0 ? q & -q : Gf.transition !== null ? (zr === 0 && (zr = _s()), zr) : ((e = R), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rs(e.type))), e)) : 1;
}
function je(e, t, n, r) {
    if (50 < Tn) throw ((Tn = 0), (Mi = null), Error(g(185)));
    Gn(e, n, r), (!(j & 2) || e !== Z) && (e === Z && (!(j & 2) && (cl |= n), Y === 4 && be(e, q)), de(e, r), n === 1 && j === 0 && !(t.mode & 1) && ((nn = W() + 500), ol && mt()));
}
function de(e, t) {
    var n = e.callbackNode;
    Xc(e, t);
    var r = Mr(e, e === Z ? q : 0);
    if (r === 0) n !== null && Qo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Qo(n), t === 1))
            e.tag === 0 ? Xf(Fu.bind(null, e)) : Js(Fu.bind(null, e)),
                Wf(function () {
                    !(j & 6) && mt();
                }),
                (n = null);
        else {
            switch (Ps(r)) {
                case 1:
                    n = Xi;
                    break;
                case 4:
                    n = xs;
                    break;
                case 16:
                    n = Or;
                    break;
                case 536870912:
                    n = Cs;
                    break;
                default:
                    n = Or;
            }
            n = Ga(n, Va.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Va(e, t) {
    if (((Nr = -1), (zr = 0), j & 6)) throw Error(g(327));
    var n = e.callbackNode;
    if (Gt() && e.callbackNode !== n) return null;
    var r = Mr(e, e === Z ? q : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = qr(e, r);
    else {
        t = r;
        var l = j;
        j |= 2;
        var i = Wa();
        (Z !== e || q !== t) && (($e = null), (nn = W() + 500), Et(e, t));
        do
            try {
                vd();
                break;
            } catch (u) {
                Ha(e, u);
            }
        while (!0);
        uo(), (Gr.current = i), (j = l), Q !== null ? (t = 0) : ((Z = null), (q = 0), (t = Y));
    }
    if (t !== 0) {
        if ((t === 2 && ((l = ui(e)), l !== 0 && ((r = l), (t = Di(e, l)))), t === 1)) throw ((n = Yn), Et(e, 0), be(e, r), de(e, W()), n);
        if (t === 6) be(e, r);
        else {
            if (((l = e.current.alternate), !(r & 30) && !pd(l) && ((t = qr(e, r)), t === 2 && ((i = ui(e)), i !== 0 && ((r = i), (t = Di(e, i)))), t === 1))) throw ((n = Yn), Et(e, 0), be(e, r), de(e, W()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(g(345));
                case 2:
                    yt(e, se, $e);
                    break;
                case 3:
                    if ((be(e, r), (r & 130023424) === r && ((t = xo + 500 - W()), 10 < t))) {
                        if (Mr(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            ie(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = vi(yt.bind(null, e, se, $e), t);
                        break;
                    }
                    yt(e, se, $e);
                    break;
                case 4:
                    if ((be(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var o = 31 - Le(r);
                        (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
                    }
                    if (((r = l), (r = W() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dd(r / 1960)) - r), 10 < r)) {
                        e.timeoutHandle = vi(yt.bind(null, e, se, $e), r);
                        break;
                    }
                    yt(e, se, $e);
                    break;
                case 5:
                    yt(e, se, $e);
                    break;
                default:
                    throw Error(g(329));
            }
        }
    }
    return de(e, W()), e.callbackNode === n ? Va.bind(null, e) : null;
}
function Di(e, t) {
    var n = zn;
    return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), (e = qr(e, t)), e !== 2 && ((t = se), (se = n), t !== null && Ii(t)), e;
}
function Ii(e) {
    se === null ? (se = e) : se.push.apply(se, e);
}
function pd(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Re(i(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function be(e, t) {
    for (t &= ~Eo, t &= ~cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Le(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Fu(e) {
    if (j & 6) throw Error(g(327));
    Gt();
    var t = Mr(e, 0);
    if (!(t & 1)) return de(e, W()), null;
    var n = qr(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ui(e);
        r !== 0 && ((t = r), (n = Di(e, r)));
    }
    if (n === 1) throw ((n = Yn), Et(e, 0), be(e, t), de(e, W()), n);
    if (n === 6) throw Error(g(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), yt(e, se, $e), de(e, W()), null;
}
function Co(e, t) {
    var n = j;
    j |= 1;
    try {
        return e(t);
    } finally {
        (j = n), j === 0 && ((nn = W() + 500), ol && mt());
    }
}
function zt(e) {
    tt !== null && tt.tag === 0 && !(j & 6) && Gt();
    var t = j;
    j |= 1;
    var n = Ee.transition,
        r = R;
    try {
        if (((Ee.transition = null), (R = 1), e)) return e();
    } finally {
        (R = r), (Ee.transition = n), (j = t), !(j & 6) && mt();
    }
}
function _o() {
    (pe = Ht.current), D(Ht);
}
function Et(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Hf(n)), Q !== null))
        for (n = Q.return; n !== null; ) {
            var r = n;
            switch ((lo(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && $r();
                    break;
                case 3:
                    en(), D(ce), D(re), mo();
                    break;
                case 5:
                    po(r);
                    break;
                case 4:
                    en();
                    break;
                case 13:
                    D(U);
                    break;
                case 19:
                    D(U);
                    break;
                case 10:
                    so(r.type._context);
                    break;
                case 22:
                case 23:
                    _o();
            }
            n = n.return;
        }
    if (((Z = e), (Q = e = at(e.current, null)), (q = pe = t), (Y = 0), (Yn = null), (Eo = cl = Nt = 0), (se = zn = null), kt !== null)) {
        for (t = 0; t < kt.length; t++)
            if (((n = kt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = l), (r.next = o);
                }
                n.pending = r;
            }
        kt = null;
    }
    return e;
}
function Ha(e, t) {
    do {
        var n = Q;
        try {
            if ((uo(), (Cr.current = Xr), Yr)) {
                for (var r = $.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                Yr = !1;
            }
            if (((Pt = 0), (G = K = $ = null), (Pn = !1), (Wn = 0), (So.current = null), n === null || n.return === null)) {
                (Y = 1), (Yn = t), (Q = null);
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    u = n,
                    s = t;
                if (((t = q), (u.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
                    var c = s,
                        v = u,
                        m = v.tag;
                    if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = v.alternate;
                        p ? ((v.updateQueue = p.updateQueue), (v.memoizedState = p.memoizedState), (v.lanes = p.lanes)) : ((v.updateQueue = null), (v.memoizedState = null));
                    }
                    var y = Cu(o);
                    if (y !== null) {
                        (y.flags &= -257), _u(y, o, u, i, t), y.mode & 1 && xu(i, c, t), (t = y), (s = c);
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set();
                            k.add(s), (t.updateQueue = k);
                        } else w.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            xu(i, c, t), Po();
                            break e;
                        }
                        s = Error(g(426));
                    }
                } else if (F && u.mode & 1) {
                    var I = Cu(o);
                    if (I !== null) {
                        !(I.flags & 65536) && (I.flags |= 256), _u(I, o, u, i, t), io(tn(s, u));
                        break e;
                    }
                }
                (i = s = tn(s, u)), Y !== 4 && (Y = 2), zn === null ? (zn = [i]) : zn.push(i), (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var f = Pa(i, s, t);
                            gu(i, f);
                            break e;
                        case 1:
                            u = s;
                            var a = i.type,
                                d = i.stateNode;
                            if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || (d !== null && typeof d.componentDidCatch == "function" && (ut === null || !ut.has(d))))) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var h = Na(i, u, t);
                                gu(i, h);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Ka(n);
        } catch (E) {
            (t = E), Q === n && n !== null && (Q = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Wa() {
    var e = Gr.current;
    return (Gr.current = Xr), e === null ? Xr : e;
}
function Po() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || (!(Nt & 268435455) && !(cl & 268435455)) || be(Z, q);
}
function qr(e, t) {
    var n = j;
    j |= 2;
    var r = Wa();
    (Z !== e || q !== t) && (($e = null), Et(e, t));
    do
        try {
            md();
            break;
        } catch (l) {
            Ha(e, l);
        }
    while (!0);
    if ((uo(), (j = n), (Gr.current = r), Q !== null)) throw Error(g(261));
    return (Z = null), (q = 0), Y;
}
function md() {
    for (; Q !== null; ) Qa(Q);
}
function vd() {
    for (; Q !== null && !$c(); ) Qa(Q);
}
function Qa(e) {
    var t = Xa(e.alternate, e, pe);
    (e.memoizedProps = e.pendingProps), t === null ? Ka(e) : (Q = t), (So.current = null);
}
function Ka(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = sd(n, t)), n !== null)) {
                (n.flags &= 32767), (Q = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Y = 6), (Q = null);
                return;
            }
        } else if (((n = ud(n, t, pe)), n !== null)) {
            Q = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Q = t;
            return;
        }
        Q = t = e;
    } while (t !== null);
    Y === 0 && (Y = 5);
}
function yt(e, t, n) {
    var r = R,
        l = Ee.transition;
    try {
        (Ee.transition = null), (R = 1), hd(e, t, n, r);
    } finally {
        (Ee.transition = l), (R = r);
    }
    return null;
}
function hd(e, t, n, r) {
    do Gt();
    while (tt !== null);
    if (j & 6) throw Error(g(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(g(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (Gc(e, i),
        e === Z && ((Q = Z = null), (q = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            hr ||
            ((hr = !0),
            Ga(Or, function () {
                return Gt(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = Ee.transition), (Ee.transition = null);
        var o = R;
        R = 1;
        var u = j;
        (j |= 4), (So.current = null), cd(e, n), Aa(n, e), If(pi), (Dr = !!di), (pi = di = null), (e.current = n), fd(n), Ac(), (j = u), (R = o), (Ee.transition = i);
    } else e.current = n;
    if ((hr && ((hr = !1), (tt = e), (Jr = l)), (i = e.pendingLanes), i === 0 && (ut = null), Hc(n.stateNode), de(e, W()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Zr) throw ((Zr = !1), (e = Oi), (Oi = null), e);
    return Jr & 1 && e.tag !== 0 && Gt(), (i = e.pendingLanes), i & 1 ? (e === Mi ? Tn++ : ((Tn = 0), (Mi = e))) : (Tn = 0), mt(), null;
}
function Gt() {
    if (tt !== null) {
        var e = Ps(Jr),
            t = Ee.transition,
            n = R;
        try {
            if (((Ee.transition = null), (R = 16 > e ? 16 : e), tt === null)) var r = !1;
            else {
                if (((e = tt), (tt = null), (Jr = 0), j & 6)) throw Error(g(331));
                var l = j;
                for (j |= 4, S = e.current; S !== null; ) {
                    var i = S,
                        o = i.child;
                    if (S.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (S = c; S !== null; ) {
                                    var v = S;
                                    switch (v.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Nn(8, v, i);
                                    }
                                    var m = v.child;
                                    if (m !== null) (m.return = v), (S = m);
                                    else
                                        for (; S !== null; ) {
                                            v = S;
                                            var p = v.sibling,
                                                y = v.return;
                                            if ((Fa(v), v === c)) {
                                                S = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = y), (S = p);
                                                break;
                                            }
                                            S = y;
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var I = k.sibling;
                                        (k.sibling = null), (k = I);
                                    } while (k !== null);
                                }
                            }
                            S = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
                    else
                        e: for (; S !== null; ) {
                            if (((i = S), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Nn(9, i, i.return);
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                (f.return = i.return), (S = f);
                                break e;
                            }
                            S = i.return;
                        }
                }
                var a = e.current;
                for (S = a; S !== null; ) {
                    o = S;
                    var d = o.child;
                    if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d);
                    else
                        e: for (o = a; S !== null; ) {
                            if (((u = S), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            al(9, u);
                                    }
                                } catch (E) {
                                    B(u, u.return, E);
                                }
                            if (u === o) {
                                S = null;
                                break e;
                            }
                            var h = u.sibling;
                            if (h !== null) {
                                (h.return = u.return), (S = h);
                                break e;
                            }
                            S = u.return;
                        }
                }
                if (((j = l), mt(), Fe && typeof Fe.onPostCommitFiberRoot == "function"))
                    try {
                        Fe.onPostCommitFiberRoot(tl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (R = n), (Ee.transition = t);
        }
    }
    return !1;
}
function Uu(e, t, n) {
    (t = tn(n, t)), (t = Pa(e, t, 1)), (e = ot(e, t, 1)), (t = ie()), e !== null && (Gn(e, 1, t), de(e, t));
}
function B(e, t, n) {
    if (e.tag === 3) Uu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Uu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (ut === null || !ut.has(r)))) {
                    (e = tn(n, e)), (e = Na(t, e, 1)), (t = ot(t, e, 1)), (e = ie()), t !== null && (Gn(t, 1, e), de(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function gd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), (t = ie()), (e.pingedLanes |= e.suspendedLanes & n), Z === e && (q & n) === n && (Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > W() - xo) ? Et(e, 0) : (Eo |= n)), de(e, t);
}
function Ya(e, t) {
    t === 0 && (e.mode & 1 ? ((t = or), (or <<= 1), !(or & 130023424) && (or = 4194304)) : (t = 1));
    var n = ie();
    (e = Ke(e, t)), e !== null && (Gn(e, t, n), de(e, n));
}
function yd(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Ya(e, n);
}
function wd(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(g(314));
    }
    r !== null && r.delete(t), Ya(e, n);
}
var Xa;
Xa = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ce.current) ae = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (ae = !1), od(e, t, n);
            ae = !!(e.flags & 131072);
        }
    else (ae = !1), F && t.flags & 1048576 && qs(t, Vr, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Pr(e, t), (e = t.pendingProps);
            var l = Jt(t, re.current);
            Xt(t, n), (l = ho(null, t, r, e, l, n));
            var i = go();
            return (
                (t.flags |= 1),
                typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      fe(r) ? ((i = !0), Ar(t)) : (i = !1),
                      (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
                      co(t),
                      (l.updater = sl),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      Ei(t, r, e, n),
                      (t = _i(null, t, r, !0, i, n)))
                    : ((t.tag = 0), F && i && ro(t), le(null, t, l, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch ((Pr(e, t), (e = t.pendingProps), (l = r._init), (r = l(r._payload)), (t.type = r), (l = t.tag = Sd(r)), (e = Ne(r, e)), l)) {
                    case 0:
                        t = Ci(null, t, r, e, n);
                        break e;
                    case 1:
                        t = zu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Pu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Nu(null, t, r, Ne(r.type, e), n);
                        break e;
                }
                throw Error(g(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Ne(r, l)), Ci(e, t, r, l, n);
        case 1:
            return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Ne(r, l)), zu(e, t, r, l, n);
        case 3:
            e: {
                if ((ja(t), e === null)) throw Error(g(387));
                (r = t.pendingProps), (i = t.memoizedState), (l = i.element), la(e, t), Qr(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (((i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }), (t.updateQueue.baseState = i), (t.memoizedState = i), t.flags & 256)) {
                        (l = tn(Error(g(423)), t)), (t = Tu(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = tn(Error(g(424)), t)), (t = Tu(e, t, r, n, l));
                        break e;
                    } else for (me = it(t.stateNode.containerInfo.firstChild), ve = t, F = !0, Te = null, n = na(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((qt(), r === l)) {
                        t = Ye(e, t, n);
                        break e;
                    }
                    le(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                ia(t),
                e === null && wi(t),
                (r = t.type),
                (l = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (o = l.children),
                mi(r, l) ? (o = null) : i !== null && mi(r, i) && (t.flags |= 32),
                La(e, t),
                le(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && wi(t), null;
        case 13:
            return Ra(e, t, n);
        case 4:
            return fo(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = bt(t, null, r, n)) : le(e, t, r, n), t.child;
        case 11:
            return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Ne(r, l)), Pu(e, t, r, l, n);
        case 7:
            return le(e, t, t.pendingProps, n), t.child;
        case 8:
            return le(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return le(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (((r = t.type._context), (l = t.pendingProps), (i = t.memoizedProps), (o = l.value), O(Hr, r._currentValue), (r._currentValue = o), i !== null))
                    if (Re(i.value, o)) {
                        if (i.children === l.children && !ce.current) {
                            t = Ye(e, t, n);
                            break e;
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                            var u = i.dependencies;
                            if (u !== null) {
                                o = i.child;
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (i.tag === 1) {
                                            (s = He(-1, n & -n)), (s.tag = 2);
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var v = c.pending;
                                                v === null ? (s.next = s) : ((s.next = v.next), (v.next = s)), (c.pending = s);
                                            }
                                        }
                                        (i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), ki(i.return, n, t), (u.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null)) throw Error(g(341));
                                (o.lanes |= n), (u = o.alternate), u !== null && (u.lanes |= n), ki(o, n, t), (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                le(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (l = t.type), (r = t.pendingProps.children), Xt(t, n), (l = xe(l)), (r = r(l)), (t.flags |= 1), le(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (l = Ne(r, t.pendingProps)), (l = Ne(r.type, l)), Nu(e, t, r, l, n);
        case 15:
            return za(e, t, t.type, t.pendingProps, n);
        case 17:
            return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Ne(r, l)), Pr(e, t), (t.tag = 1), fe(r) ? ((e = !0), Ar(t)) : (e = !1), Xt(t, n), _a(t, r, l), Ei(t, r, l, n), _i(null, t, r, !0, e, n);
        case 19:
            return Oa(e, t, n);
        case 22:
            return Ta(e, t, n);
    }
    throw Error(g(156, t.tag));
};
function Ga(e, t) {
    return Es(e, t);
}
function kd(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Se(e, t, n, r) {
    return new kd(e, t, n, r);
}
function No(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sd(e) {
    if (typeof e == "function") return No(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Qi)) return 11;
        if (e === Ki) return 14;
    }
    return 2;
}
function at(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Se(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Tr(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) No(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case Ot:
                return xt(n.children, l, i, t);
            case Wi:
                (o = 8), (l |= 8);
                break;
            case Kl:
                return (e = Se(12, n, t, l | 2)), (e.elementType = Kl), (e.lanes = i), e;
            case Yl:
                return (e = Se(13, n, t, l)), (e.elementType = Yl), (e.lanes = i), e;
            case Xl:
                return (e = Se(19, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
            case is:
                return fl(n, l, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case rs:
                            o = 10;
                            break e;
                        case ls:
                            o = 9;
                            break e;
                        case Qi:
                            o = 11;
                            break e;
                        case Ki:
                            o = 14;
                            break e;
                        case Ze:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(g(130, e == null ? e : typeof e, ""));
        }
    return (t = Se(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function xt(e, t, n, r) {
    return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
    return (e = Se(22, e, r, t)), (e.elementType = is), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Hl(e, t, n) {
    return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
    return (t = Se(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function Ed(e, t, n, r, l) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Cl(0)),
        (this.expirationTimes = Cl(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = Cl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function zo(e, t, n, r, l, i, o, u, s) {
    return (
        (e = new Ed(e, t, n, u, s)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Se(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        co(i),
        e
    );
}
function xd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Rt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Za(e) {
    if (!e) return ft;
    e = e._reactInternals;
    e: {
        if (Lt(e) !== e || e.tag !== 1) throw Error(g(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (fe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(g(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (fe(n)) return Zs(e, n, t);
    }
    return t;
}
function Ja(e, t, n, r, l, i, o, u, s) {
    return (e = zo(n, r, !0, e, l, i, o, u, s)), (e.context = Za(null)), (n = e.current), (r = ie()), (l = st(n)), (i = He(r, l)), (i.callback = t ?? null), ot(n, i, l), (e.current.lanes = l), Gn(e, l, r), de(e, r), e;
}
function dl(e, t, n, r) {
    var l = t.current,
        i = ie(),
        o = st(l);
    return (
        (n = Za(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = He(i, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = ot(l, t, o)),
        e !== null && (je(e, l, o, i), xr(e, l, o)),
        o
    );
}
function br(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function $u(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function To(e, t) {
    $u(e, t), (e = e.alternate) && $u(e, t);
}
function Cd() {
    return null;
}
var qa =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Lo(e) {
    this._internalRoot = e;
}
pl.prototype.render = Lo.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(g(409));
    dl(e, t, null, null);
};
pl.prototype.unmount = Lo.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zt(function () {
            dl(null, e, null, null);
        }),
            (t[Qe] = null);
    }
};
function pl(e) {
    this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Ts();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
        qe.splice(n, 0, e), n === 0 && js(e);
    }
};
function jo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Au() {}
function _d(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var c = br(o);
                i.call(c);
            };
        }
        var o = Ja(t, r, e, 0, null, !1, !1, "", Au);
        return (e._reactRootContainer = o), (e[Qe] = o.current), $n(e.nodeType === 8 ? e.parentNode : e), zt(), o;
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var c = br(s);
            u.call(c);
        };
    }
    var s = zo(e, 0, !1, null, null, !1, !1, "", Au);
    return (
        (e._reactRootContainer = s),
        (e[Qe] = s.current),
        $n(e.nodeType === 8 ? e.parentNode : e),
        zt(function () {
            dl(t, s, n, r);
        }),
        s
    );
}
function vl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var s = br(o);
                u.call(s);
            };
        }
        dl(t, o, e, l);
    } else o = _d(n, t, e, l, r);
    return br(o);
}
Ns = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = wn(t.pendingLanes);
                n !== 0 && (Gi(t, n | 1), de(t, W()), !(j & 6) && ((nn = W() + 500), mt()));
            }
            break;
        case 13:
            zt(function () {
                var r = Ke(e, 1);
                if (r !== null) {
                    var l = ie();
                    je(r, e, 1, l);
                }
            }),
                To(e, 1);
    }
};
Zi = function (e) {
    if (e.tag === 13) {
        var t = Ke(e, 134217728);
        if (t !== null) {
            var n = ie();
            je(t, e, 134217728, n);
        }
        To(e, 134217728);
    }
};
zs = function (e) {
    if (e.tag === 13) {
        var t = st(e),
            n = Ke(e, t);
        if (n !== null) {
            var r = ie();
            je(n, e, t, r);
        }
        To(e, t);
    }
};
Ts = function () {
    return R;
};
Ls = function (e, t) {
    var n = R;
    try {
        return (R = e), t();
    } finally {
        R = n;
    }
};
li = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = il(r);
                        if (!l) throw Error(g(90));
                        us(r), Jl(r, l);
                    }
                }
            }
            break;
        case "textarea":
            as(e, n);
            break;
        case "select":
            (t = n.value), t != null && Wt(e, !!n.multiple, t, !1);
    }
};
hs = Co;
gs = zt;
var Pd = { usingClientEntryPoint: !1, Events: [Jn, Ft, il, ms, vs, Co] },
    hn = { findFiberByHostInstance: wt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    Nd = {
        bundleType: hn.bundleType,
        version: hn.version,
        rendererPackageName: hn.rendererPackageName,
        rendererConfig: hn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = ks(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: hn.findFiberByHostInstance || Cd,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            (tl = gr.inject(Nd)), (Fe = gr);
        } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd;
ge.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!jo(t)) throw Error(g(200));
    return xd(e, t, null, n);
};
ge.createRoot = function (e, t) {
    if (!jo(e)) throw Error(g(299));
    var n = !1,
        r = "",
        l = qa;
    return (
        t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = zo(e, 1, !1, null, null, n, !1, r, l)),
        (e[Qe] = t.current),
        $n(e.nodeType === 8 ? e.parentNode : e),
        new Lo(t)
    );
};
ge.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(g(188)) : ((e = Object.keys(e).join(",")), Error(g(268, e)));
    return (e = ks(t)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
    return zt(e);
};
ge.hydrate = function (e, t, n) {
    if (!ml(t)) throw Error(g(200));
    return vl(null, e, t, !0, n);
};
ge.hydrateRoot = function (e, t, n) {
    if (!jo(e)) throw Error(g(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = qa;
    if (
        (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Ja(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[Qe] = t.current),
        $n(e),
        r)
    )
        for (e = 0; e < r.length; e++) (n = r[e]), (l = n._getVersion), (l = l(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, l]) : t.mutableSourceEagerHydrationData.push(n, l);
    return new pl(t);
};
ge.render = function (e, t, n) {
    if (!ml(t)) throw Error(g(200));
    return vl(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function (e) {
    if (!ml(e)) throw Error(g(40));
    return e._reactRootContainer
        ? (zt(function () {
              vl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Qe] = null);
              });
          }),
          !0)
        : !1;
};
ge.unstable_batchedUpdates = Co;
ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ml(n)) throw Error(g(200));
    if (e == null || e._reactInternals === void 0) throw Error(g(38));
    return vl(e, t, n, !1, r);
};
ge.version = "18.3.1-next-f1338f8080-20240426";
function ba() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ba);
        } catch (e) {
            console.error(e);
        }
}
ba(), (bu.exports = ge);
var zd = bu.exports,
    ec,
    Bu = zd;
(ec = Bu.createRoot), Bu.hydrateRoot;
const Td = [
    {
        title: "Upgrade Cards",
        cards: [
            { id: 1, img: "1-1.jpg", text: "10 cards" },
            { id: 2, img: "1-2.jpg", text: "25 cards" },
            { id: 3, img: "1-3.jpg", text: "50 cards" },
            { id: 4, img: "1-4.jpg", text: "200 cards" },
            { id: 5, img: "1-5.jpg", text: "500 cards" },
        ],
    },
    {
        title: "Upgrade cards to level 15",
        cards: [
            { id: 6, img: "2-1.jpg", text: "1 cards" },
            { id: 7, img: "2-2.jpg", text: "5 cards" },
            { id: 8, img: "2-3.jpg", text: "10 cards" },
            { id: 9, img: "2-4.jpg", text: "25 cards" },
            { id: 10, img: "2-5.jpg", text: "50 cards" },
        ],
    },
    {
        title: "Upgrade cards to level 25",
        cards: [
            { id: 11, img: "3-1.jpg", text: "1 cards" },
            { id: 12, img: "3-2.jpg", text: "5 cards" },
            { id: 13, img: "3-3.jpg", text: "10 cards" },
            { id: 14, img: "3-4.jpg", text: "25 cards" },
            { id: 15, img: "3-5.jpg", text: "50 cards" },
        ],
    },
    {
        title: "Collect coins",
        cards: [
            { id: 16, img: "4-1.jpg", text: "1M coins" },
            { id: 17, img: "4-2.jpg", text: "10M coins" },
            { id: 18, img: "4-3.jpg", text: "200M coins" },
            { id: 19, img: "4-4.jpg", text: "1.58 coins" },
            { id: 20, img: "4-5.jpg", text: "158 coins" },
        ],
    },
    {
        title: "Unlock skins",
        cards: [
            { id: 26, img: "6-1.jpg", text: "1 skin" },
            { id: 27, img: "6-2.jpg", text: "5 skins" },
            { id: 28, img: "6-3.jpg", text: "10 skins" },
            { id: 29, img: "6-4.jpg", text: "25 skins" },
            { id: 30, img: "6-5.jpg", text: "50 skins" },
        ],
    },
    {
        title: "Profit per hour",
        cards: [
            { id: 31, img: "7-1.jpg", text: "100k coins" },
            { id: 32, img: "7-2.jpg", text: "500k coins" },
            { id: 33, img: "7-3.jpg", text: "1M coins" },
            { id: 34, img: "7-4.jpg", text: "2M coins" },
            { id: 35, img: "7-5.jpg", text: "3M coins" },
        ],
    },
    {
        title: "Watch Hamster Youtube videos",
        cards: [
            { id: 36, img: "8-1.jpg", text: "5 videos" },
            { id: 37, img: "8-2.jpg", text: "10 videos" },
            { id: 38, img: "8-3.jpg", text: "25 videos" },
            { id: 39, img: "8-4.jpg", text: "50 videos" },
            { id: 40, img: "8-5.jpg", text: "100 videos" },
        ],
    },
    {
        title: "Subscribed to Hamster TG",
        cards: [
            { id: 41, img: "9-1.jpg", text: "10 days" },
            { id: 42, img: "9-2.jpg", text: "30 days" },
            { id: 43, img: "9-3.jpg", text: "60 days" },
            { id: 44, img: "9-4.jpg", text: "100 days" },
            { id: 45, img: "9-5.jpg", text: "200 days" },
        ],
    },
    { title: "Unlock special cards", cards: [{ id: 46, img: "10-1.jpg", text: "Rescue team" }] },
    { title: "Cheating is Bad", cards: [{ id: 47, img: "11-1.jpg", text: "Cheating is bad" }] },
];
function Ld({ updateUserProfit: e }) {
    const [t, n] = Ln.useState({}),
        [r, l] = Ln.useState(0),
        i = (u, s) => {
            n((c) => {
                const v = Array.from({ length: s + 1 }, (m, p) => `${u}-${p}`);
                return { ...c, [u]: v };
            });
        },
        o = () => {
            if (((document.getElementById("root").style.display = "none"), (document.getElementById("container-1").style.display = "block"), !Object.keys(t).length > 0)) return;
            let u = 0;
            Object.keys(t).forEach((s) => {
                s = parseInt(s);
                var c = 0,
                    v = t[s];
                switch (s) {
                    case 0:
                        c = 2e4;
                        break;
                    case 1:
                        c = 4e4;
                        break;
                    case 2:
                        c = 5e5;
                        break;
                    case 3:
                        c = 1e5;
                        break;
                    case 4:
                        c = 8e4;
                        break;
                    case 5:
                        c = 5e4;
                        break;
                    case 6:
                        c = 3e4;
                        break;
                    case 7:
                        c = 2e4;
                        break;
                    case 8:
                        c = 1e6;
                        break;
                    case 9:
                        document.getElementById("key").value = 0;
                        break;
                }
                u += v.length * c;
            }),
                l(u),
                e(u),
                (document.getElementById("select").style.background = "#3fba32"),
                (document.getElementById("select").innerText = "تغییر دستاوردها"),
                (document.getElementById("desc").innerText = "دستاوردها تنظیم شدند");
        };
    return Me.jsxs("div", {
        className: "app-container",
        children: [
            Me.jsx("button", { className: "close-button", onClick: o, children: "ذخیره" }),
            Td.map((u, s) =>
                Me.jsxs(
                    "div",
                    {
                        children: [
                            Me.jsx("h3", { className: "h-2 font-bold text-white m-3", children: u.title }),
                            Me.jsx("div", {
                                className: "grid grid-cols-5 mt-8 justify-items-center",
                                children: u.cards.map((c, v) => {
                                    var p;
                                    const m = `${s}-${v}`;
                                    return Me.jsxs(
                                        "div",
                                        {
                                            id: m,
                                            className: `box flex flex-col justify-around items-center bg-stone-700 ${(p = t[s]) != null && p.includes(m) ? "" : "brightness-50"}`,
                                            onClick: () => i(s, v),
                                            children: [Me.jsx("img", { src: c.img, alt: "", className: "rounded-full" }), Me.jsx("p", { className: "text-center text-gray-200 sub-box", children: c.text })],
                                        },
                                        m
                                    );
                                }),
                            }),
                        ],
                    },
                    s
                )
            ),
        ],
    });
}
function jd(e) {
    window.achievementProfit = e;
}
ec(document.getElementById("root")).render(Me.jsx(Ln.StrictMode, { children: Me.jsx(Ld, { updateUserProfit: jd }) }));
