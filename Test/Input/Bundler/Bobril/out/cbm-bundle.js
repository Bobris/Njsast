(function(e) {
    "use strict";
    var t, n, r, i, a, o, d, l, c, s, u, f, h, p, m, b, v, y, g, x, _, C, k, w, S, D, E, N, I, P, R, B, A, O, F, T, j, M, U, H, V, L, K, W, X, Y, z, $, q, Q, G, Z, J, ee, te, ne, re, ie, ae, oe, de, le, ce, se, ue, fe, he, pe, me, be, ve, ye, ge, xe, _e, Ce, ke, we, Se, De, Ee, Ne, Ie, Pe, Re, Be, Ae, Oe, Fe, Te, je, Me, Ue, He, Ve, Le, Ke, We, Xe, Ye, ze, $e, qe, Qe, Ge, Ze, Je, et, tt, nt, rt, it, at, ot, dt, lt, ct, st, ut, ft, ht, pt, mt, bt, vt, yt, gt, xt, _t, Ct, kt, wt, St, Dt, Et, Nt, It, Pt, Rt, Bt, At, Ot, Ft, Tt, jt, Mt, Ut, Ht, Vt, Lt, Kt, Wt, Xt, Yt, zt, $t, qt, Qt, Gt, Zt, Jt, en;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        var n;
        for (n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
    };
    n = function(e, n) {
        t(e, n);
        function r() {
            this.constructor = e;
        }
        e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
    r = function(e) {
        var t = typeof Symbol === "function" && e[Symbol.iterator], n = 0;
        if (t) return t.call(e);
        return {
            next: function() {
                if (e && n >= e.length) e = void 0;
                return {
                    value: e && e[n++],
                    done: !e
                };
            }
        };
    };
    i = function(e, t) {
        var n, r, i, a, o;
        n = typeof Symbol === "function" && e[Symbol.iterator];
        if (!n) return e;
        r = n.call(e);
        i = [];
        try {
            while ((t === void 0 || t-- > 0) && !(o = r.next()).done) i.push(o.value);
        } catch (e) {
            a = {
                error: e
            };
        } finally {
            try {
                if (o && !o.done && (n = r["return"])) n.call(r);
            } finally {
                if (a) throw a.error;
            }
        }
        return i;
    };
    a = 1;
    o = 2;
    d = 4;
    l = 8;
    c = 16;
    (function() {
        function e() {
            this.tokens = [];
        }
        e.prototype.pushOptionalTokens = function(e, t) {
            !!e && this.tokens.push({
                type: e
            });
            !!t && this.tokens.push({
                type: t
            });
        };
        e.prototype.rule = function(e, t) {
            if (t === void 0) {
                t = "all";
            }
            this.pushOptionalTokens(e, t);
            return this;
        };
        e.prototype.and = function(e) {
            this.tokens.push({
                type: "and"
            });
            this.tokens.push(e);
            return this;
        };
        e.prototype.or = function() {
            this.tokens.push({
                type: "or"
            });
            return this;
        };
        e.prototype.build = function() {
            return this.tokens.reduce(tn, "");
        };
        return e;
    })();
    function tn(e, t) {
        var n = "";
        switch (t.type) {
          case "aspect-ratio":
            n = "(" + t.type + ": " + t.width + "/" + t.height + ")";
            break;

          case "all":
          case "and":
          case "not":
          case "only":
          case "print":
          case "screen":
          case "speech":
            n = "" + t.type;
            break;

          case "or":
            n = ",";
            break;

          case "color":
            n = "(" + t.type + ")";
            break;

          case "max-height":
          case "max-width":
          case "min-height":
          case "min-width":
            n = "(" + t.type + ": " + t.value + t.unit + ")";
            break;

          case "min-color":
          case "orientation":
            n = "(" + t.type + ": " + t.value + ")";
            break;

          default:
            n = nn(t);
        }
        return e + n + " ";
    }
    function nn(e) {
        return "";
    }
    (function() {
        function t(t, n) {
            this.data = t;
            this.me = n;
            this.cfg = e;
            this.refs = e;
            this.disposables = e;
            this.$bobxCtx = e;
        }
        return t;
    })();
    s = Array.isArray;
    u = s;
    f = {};
    function rn(e) {
        return document.createTextNode(e);
    }
    function an(e) {
        return document.createElement(e);
    }
    function on(t) {
        return t === null ? e : t;
    }
    function dn(e) {
        return typeof e == "number";
    }
    function ln(e) {
        return typeof e == "string";
    }
    function cn(e) {
        return typeof e == "boolean";
    }
    function sn(e) {
        return typeof e == "function";
    }
    function un(e) {
        return typeof e === "object";
    }
    if (Object.assign == e) {
        Object.assign = function t(n) {
            var r = [], i, a, o, d, l, c, s, u;
            for (i = 1; i < arguments.length; i++) {
                r[i - 1] = arguments[i];
            }
            if (n == e) throw new TypeError("Target in assign cannot be undefined or null");
            a = arguments.length;
            for (o = 1; o < a; o++) {
                d = arguments[o];
                if (d == e) continue;
                l = Object.keys(d);
                c = l.length;
                for (s = 0; s < c; s++) {
                    u = l[s];
                    n[u] = d[u];
                }
            }
            return n;
        };
    }
    if (!Object.is) {
        Object.is = function(e, t) {
            if (e === t) {
                return e !== 0 || 1 / e === 1 / t;
            } else {
                return e !== e && t !== t;
            }
        };
    }
    h = Object.is;
    p = Object.prototype.hasOwnProperty;
    m = Object.assign;
    function fn(e, t, n) {
        if (!e[t]) {
            Object.defineProperty(e, t, {
                value: n,
                configurable: !0,
                writable: !0
            });
        }
    }
    fn(Array.prototype, "find", function(e) {
        var t, n, r, i, a;
        t = Object(this);
        n = t.length >>> 0;
        r = arguments[1];
        for (i = 0; i < n; i++) {
            a = t[i];
            if (e.call(r, a, i, t)) {
                return a;
            }
        }
    });
    fn(Array.prototype, "findIndex", function(e) {
        var t, n, r, i, a;
        t = Object(this);
        n = t.length >>> 0;
        r = arguments[1];
        for (i = 0; i < n; i++) {
            a = t[i];
            if (e.call(r, a, i, t)) {
                return i;
            }
        }
        return -1;
    });
    fn(Array.prototype, "some", function(e) {
        var t, n, r, i;
        t = Object(this);
        n = t.length >>> 0;
        r = arguments[1];
        for (i = 0; i < n; i++) {
            if (i in t && e.call(r, t[i], i, t)) {
                return !0;
            }
        }
        return !1;
    });
    fn(String.prototype, "includes", function(e, t) {
        if (!dn(t)) t = 0;
        if (t + e.length > this.length) {
            return !1;
        } else {
            return this.indexOf(e, t) !== -1;
        }
    });
    fn(String.prototype, "startsWith", function(e, t) {
        return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
    });
    fn(String.prototype, "endsWith", function(e, t) {
        var n, r;
        n = this.toString();
        if (!dn(t) || !isFinite(t) || Math.floor(t) !== t || t > n.length) {
            t = n.length;
        }
        t -= e.length;
        r = n.indexOf(e, t);
        return r !== -1 && r === t;
    });
    b = !1;
    v = !1;
    y = [];
    g = [];
    x = function(e, t, n, r) {
        if (n !== r) e[ye] = n;
    };
    function hn(e) {
        var t = x;
        x = e;
        return t;
    }
    function pn() {
        return Object.create(null);
    }
    _ = [ "Webkit", "Moz", "ms", "O" ];
    C = document.createElement("div").style;
    function mn(e) {
        return ln(C[e]);
    }
    k = new Map();
    w = {
        boxFlex: !0,
        boxFlexGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexNegative: !0,
        flexPositive: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        strokeDashoffset: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    };
    function bn(t) {
        return function(n, r, i) {
            n[t] = r;
            n[i] = e;
        };
    }
    function vn(t) {
        return function(n, r, i) {
            if (dn(r)) {
                n[t] = r + "px";
            } else {
                n[t] = r;
            }
            n[i] = e;
        };
    }
    function yn(e, t, n) {
        if (dn(t)) e[n] = t + "px";
    }
    function gn() {
        return document.documentMode;
    }
    function xn(t) {
        var n, r, i, a, o, d, l, c;
        n = Object.keys(t);
        for (r = 0, i = n.length; r < i; r++) {
            a = n[r];
            o = k.get(a);
            d = t[a];
            if (d === e) continue;
            if (o === e) {
                if (mn(a)) {
                    o = w[a] === !0 ? Ki : yn;
                } else {
                    l = a.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (c = 0; c < _.length; c++) {
                        if (mn(_[c] + l)) {
                            o = (w[a] === !0 ? bn : vn)(_[c] + l);
                            break;
                        }
                    }
                    if (o === e) {
                        o = w[a] === !0 ? Ki : yn;
                    }
                }
                k.set(a, o);
            }
            o(t, d, a);
        }
    }
    function _n(e, t) {
        e[t] = "";
    }
    function Cn(e, t, n) {
        var r;
        if (ln(n)) {
            r = n.length;
            if (r > 11 && n.substr(r - 11, 11) === " !important") {
                e.setProperty($i(t), n.substr(0, r - 11), "important");
                return;
            }
        }
        e[t] = n;
    }
    function kn(t, n, r) {
        var i, a, o;
        i = t.style;
        if (un(n)) {
            xn(n);
            if (un(r)) {
                for (a in r) {
                    if (r[a] === e) continue;
                    if (n[a] === e) _n(i, a);
                }
                for (a in n) {
                    o = n[a];
                    if (o !== e) {
                        if (r[a] !== o) Cn(i, a, o);
                    } else if (r[a] !== e) {
                        _n(i, a);
                    }
                }
            } else {
                if (r) i.cssText = "";
                for (a in n) {
                    o = n[a];
                    if (o !== e) Cn(i, a, o);
                }
            }
        } else if (n) {
            i.cssText = n;
        } else {
            if (un(r)) {
                for (a in r) {
                    _n(i, a);
                }
            } else if (r) {
                i.cssText = "";
            }
        }
    }
    function wn(e, t) {
        if (b) e.setAttribute("class", t); else e.className = t;
    }
    S = /^input$|^select$|^textarea$|^button$/;
    D = "tabindex";
    function Sn(t, n) {
        if (t == e) return !1;
        if (S.test(t)) return !0;
        if (t === "a" && n != null && n.href != null) return !0;
        return !1;
    }
    function Dn(t, n, r, i, a) {
        var o = !1, d, l, c, s, u;
        if (r != null) for (d in r) {
            l = r[d];
            c = i[d];
            if (a && d === D) {
                l = -1;
                o = !0;
            } else if (d === ye && !b) {
                if (sn(l)) {
                    i[me] = l;
                    l = l();
                }
                s = c;
                u = l;
                i[d] = l;
                continue;
            }
            if (c !== l) {
                i[d] = l;
                if (b) {
                    if (d === "href") n.setAttributeNS("http://www.w3.org/1999/xlink", "href", l); else n.setAttribute(d, l);
                } else if (d in n && !(d === "list" || d === "form")) {
                    n[d] = l;
                } else n.setAttribute(d, l);
            }
        }
        if (a && !o && Sn(t.tag, r)) {
            n.setAttribute(D, "-1");
            i[D] = -1;
        }
        if (r == e) {
            for (d in i) {
                if (i[d] !== e) {
                    if (a && d === D) continue;
                    if (d === me) continue;
                    i[d] = e;
                    n.removeAttribute(d);
                }
            }
        } else {
            for (d in i) {
                if (i[d] !== e && !(d in r)) {
                    if (a && d === D) continue;
                    if (d === me) continue;
                    i[d] = e;
                    n.removeAttribute(d);
                }
            }
        }
        if (u !== e) {
            x(n, t, u, s);
        }
        return i;
    }
    function En(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postInitDom;
            if (n) {
                y.push(n);
                g.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & a) {
                y.push(na);
                g.push(e);
            }
        }
    }
    function Nn(e) {
        var t, n, r;
        t = e.component;
        if (t) {
            n = t.postUpdateDom;
            if (n) {
                y.push(n);
                g.push(e);
            }
            r = e.ctx.$hookFlags || 0;
            if (r & o) {
                y.push(ra);
                g.push(e);
            }
            n = t.postUpdateDomEverytime;
            if (n) {
                y.push(n);
                g.push(e);
            }
            if (r & d) {
                y.push(ia);
                g.push(e);
            }
        }
    }
    function In(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postUpdateDomEverytime;
            if (n) {
                y.push(n);
                g.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & d) {
                y.push(ia);
                g.push(e);
            }
        }
    }
    function Pn(t) {
        var n;
        while (t) {
            n = t.cfg;
            if (n !== e) break;
            if (t.ctx !== e && t.component !== f) {
                n = t.ctx.cfg;
                break;
            }
            t = t.parent;
        }
        return n;
    }
    function Rn(t, n) {
        var r, i;
        if (t === e) return;
        if ("current" in t) {
            t.current = n;
        } else if (sn(t)) {
            t(n);
        } else if (s(t)) {
            r = t[0];
            i = r.refs;
            if (i === e) {
                i = pn();
                r.refs = i;
            }
            i[t[1]] = n;
        }
    }
    E = [];
    N = null;
    function Bn(t, n, r, i) {
        var a, o, d, l, c, s, u, f, h, p, m, y, g, x, _, C;
        a = {
            tag: t.tag,
            key: t.key,
            ref: t.ref,
            className: t.className,
            style: t.style,
            attrs: t.attrs,
            children: t.children,
            component: t.component,
            data: t.data,
            cfg: e,
            parent: n,
            element: e,
            ctx: e,
            orig: t
        };
        o = b;
        d = v;
        l = a.component;
        Rn(a.ref, a);
        if (l) {
            if (l.ctxClass) {
                c = new l.ctxClass(a.data || {}, a);
                if (c.data === e) c.data = a.data || {};
                if (c.me === e) c.me = a;
            } else {
                c = {
                    data: a.data || {},
                    me: a,
                    cfg: e
                };
            }
            c.cfg = t.cfg === e ? Pn(n) : t.cfg;
            a.ctx = c;
            Qt = c;
            if (l.init) {
                l.init(c, a);
            }
            if (Q !== q) Q(t, z.Create);
            if (l.render) {
                l.render(c, a);
            }
            Qt = e;
        } else {}
        s = a.tag;
        if (s === "-") {
            a.tag = e;
            a.children = e;
            return a;
        } else if (s === "@") {
            r = a.data;
            P.set(r, a);
            i = null;
            s = e;
        }
        u = a.children;
        f = !1;
        if (dn(u)) {
            u = "" + u;
            a.children = u;
        }
        if (s === e) {
            if (ln(u)) {
                h = rn(u);
                a.element = h;
                r.insertBefore(h, i);
            } else {
                On(a, r, i);
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(a.ctx, a);
                }
                En(a);
            }
            return a;
        }
        if (s === "/") {
            p = u;
            if (p === "") {} else if (i == e) {
                m = r.lastChild;
                r.insertAdjacentHTML("beforeend", p);
                a.element = [];
                if (m) {
                    m = m.nextSibling;
                } else {
                    m = r.firstChild;
                }
                while (m) {
                    a.element.push(m);
                    m = m.nextSibling;
                }
            } else {
                h = i;
                y = i.previousSibling;
                g = !1;
                x = r;
                if (!h.insertAdjacentHTML) {
                    h = x.insertBefore(an("i"), h);
                    g = !0;
                }
                h.insertAdjacentHTML("beforebegin", p);
                if (y) {
                    y = y.nextSibling;
                } else {
                    y = x.firstChild;
                }
                _ = [];
                while (y !== h) {
                    _.push(y);
                    y = y.nextSibling;
                }
                a.element = _;
                if (g) {
                    x.removeChild(h);
                }
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(a.ctx, a);
                }
                En(a);
            }
            return a;
        }
        if (b || s === "svg") {
            h = document.createElementNS("http://www.w3.org/2000/svg", s);
            f = s === "foreignObject";
            b = !f;
        } else {
            h = an(s);
        }
        r.insertBefore(h, i);
        a.element = h;
        On(a, h, null);
        if (l) {
            if (l.postRender) {
                l.postRender(a.ctx, a);
            }
        }
        if (v && N === a) v = !1;
        if (f) b = !0;
        if (a.attrs || v) a.attrs = Dn(a, h, a.attrs, {}, v);
        if (a.style) kn(h, a.style, e);
        C = a.className;
        if (C) wn(h, C);
        b = o;
        v = d;
        En(a);
        return a;
    }
    function An(t) {
        if (t === !1 || t === !0 || t === null) return e;
        if (ln(t)) {
            return {
                children: t
            };
        }
        if (dn(t)) {
            return {
                children: "" + t
            };
        }
        return t;
    }
    function On(e, t, n) {
        var r, i, a;
        r = e.children;
        if (ln(r)) {
            t.textContent = r;
            return;
        }
        i = [];
        Jn(i, r);
        for (a = 0; a < i.length; a++) {
            i[a] = Bn(i[a], e, t, n);
        }
        e.children = i;
    }
    function Fn(t) {
        var n, r, i, a, o, d, l, c;
        Rn(t.ref, e);
        n = t.children;
        if (s(n)) {
            for (r = 0, i = n.length; r < i; r++) {
                Fn(n[r]);
            }
        }
        a = t.component;
        if (a) {
            o = t.ctx;
            Qt = o;
            if (Q !== q) Q(t, z.Destroy);
            if (a.destroy) a.destroy(o, t, t.element);
            d = o.disposables;
            if (s(d)) {
                for (l = d.length; l-- > 0; ) {
                    c = d[l];
                    if (sn(c)) c(o); else c.dispose();
                }
            }
            Qt = e;
        }
        if (t.tag === "@") {
            P.delete(t.data);
            Tn(t);
        }
    }
    function Tn(e) {
        var t, n, r, i, a, o, d;
        t = e.element;
        if (s(t)) {
            n = t[0].parentNode;
            if (n) {
                for (r = 0; r < t.length; r++) {
                    n.removeChild(t[r]);
                }
            }
        } else if (t != null) {
            i = t.parentNode;
            if (i) i.removeChild(t);
        } else {
            a = e.children;
            if (s(a)) {
                for (o = 0, d = a.length; o < d; o++) {
                    Tn(a[o]);
                }
            }
        }
    }
    function jn(e) {
        Fn(e);
        Tn(e);
    }
    I = pn();
    P = new Map();
    function Mn(t, n, r, i) {
        var a, o, d, l, c;
        a = t.element;
        o = t.children;
        if (s(a)) {
            for (d = 0; d < a.length; d++) {
                if (a[d] === n) {
                    i.push(t);
                    if (s(o)) {
                        return o;
                    }
                    return null;
                }
            }
        } else if (a == e) {
            if (s(o)) {
                for (l = 0; l < o.length; l++) {
                    c = Mn(o[l], n, r, i);
                    if (c !== e) {
                        i.splice(r, 0, t);
                        return c;
                    }
                }
            }
        } else if (a === n) {
            i.push(t);
            if (s(o)) {
                return o;
            }
            return null;
        }
        return e;
    }
    function Un(t) {
        var n = [], r, i, a, o, d, l, c, s, u, f, h, p, m;
        if (t == e) return n;
        r = Object.keys(I);
        i = r.map(function(e) {
            return I[e].e || document.body;
        });
        a = r.map(function(e) {
            return I[e].n;
        });
        P.forEach(function(e, t) {
            i.push(t);
            a.push(e);
        });
        o = [];
        e: while (!0) {
            t: while (t) {
                for (d = 0; d < i.length; d++) {
                    if (t === i[d]) break t;
                }
                o.push(t);
                t = t.parentNode;
            }
            if (!t || o.length === 0) return n;
            l = null;
            c = o.pop();
            for (d = 0; d < i.length; d++) {
                if (t === i[d]) {
                    s = a[d];
                    if (s === e) continue;
                    n = [];
                    if (s.parent !== e) {
                        u = s;
                        while (u = u.parent) {
                            n.push(u);
                        }
                        n.reverse();
                    }
                    f = Mn(s, c, n.length, n);
                    if (f !== e) {
                        l = f;
                        break e;
                    }
                }
            }
            o.push(c);
            o.push(t);
            t = t.parentNode;
        }
        e: while (o.length) {
            c = o.pop();
            if (l && l.length) for (h = 0, p = l.length; h < p; h++) {
                m = l[h];
                f = Mn(m, c, n.length, n);
                if (f !== e) {
                    l = f;
                    continue e;
                }
            }
            n.push(null);
            break;
        }
        return n;
    }
    function Hn(e) {
        var t, n;
        t = Un(e);
        n = null;
        while (n === null) {
            n = t.pop();
        }
        return n;
    }
    function Vn(t, n, r) {
        if (r) {
            if (r.postRender) {
                Qt = n.ctx;
                r.postRender(Qt, t, n);
                Qt = e;
            }
        }
        n.data = t.data;
        Nn(n);
    }
    function Ln(t, n, r) {
        var i, a;
        Qt = e;
        if (s(t.children)) {
            i = b;
            a = v;
            if (t.tag === "svg") {
                b = !0;
            } else if (b && t.tag === "foreignObject") b = !1;
            if (v && N === t) v = !1;
            dr(t.children, t.element || n, t.element != null ? null : r);
            b = i;
            v = a;
        }
        In(t);
    }
    function Kn(t, n, r, i, a, o) {
        var d, l = !1, c, u, h, p, y, g, x, _, C, k, w, S;
        d = t.component;
        c = n.ctx;
        if (d != null && c != null) {
            u = !1;
            if (c[j] >= L) {
                a = Math.max(a, c[M]);
                u = !0;
            }
            if (d.id !== n.component.id) {
                l = !0;
            } else {
                Qt = c;
                if (t.cfg !== e) c.cfg = t.cfg; else c.cfg = Pn(n.parent);
                if (d.shouldChange) if (!d.shouldChange(c, t, n) && !re && !u) {
                    Ln(n, r, i);
                    return n;
                }
                c.data = t.data || {};
                n.component = d;
                if (Q !== q) Q(t, o ? z.LocalUpdate : z.Update);
                if (d.render) {
                    n.orig = t;
                    t = m({}, t);
                    n.cfg = e;
                    if (t.cfg !== e) t.cfg = e;
                    d.render(c, t, n);
                    if (t.cfg !== e) {
                        if (n.cfg === e) n.cfg = t.cfg; else m(n.cfg, t.cfg);
                    }
                }
                Qt = e;
            }
        } else {
            if (n.orig === t && !re) {
                Ln(n, r, i);
                return n;
            }
            n.orig = t;
        }
        h = t.children;
        p = n.children;
        y = t.tag;
        if (y === "-") {
            Ln(n, r, i);
            return n;
        }
        g = b;
        x = v;
        if (dn(h)) {
            h = "" + h;
        }
        if (l || d != e && c == e || d == e && c != e && c.me.component !== f) {} else if (y === "/") {
            if (n.tag === "/" && p === h) {
                Vn(t, n, d);
                return n;
            }
        } else if (y === n.tag) {
            if (y === "@") {
                if (t.data !== n.data) {
                    _ = Bn(t, n.parent, t.data, null);
                    jn(n);
                    return _;
                }
                r = t.data;
                i = Xn(n);
                if (i != null) i = i.nextSibling;
                y = e;
            }
            if (y === e) {
                if (ln(h) && ln(p)) {
                    if (h !== p) {
                        C = n.element;
                        C.textContent = h;
                        n.children = h;
                    }
                } else {
                    if (v && N === n) v = !1;
                    if (a <= 0) {
                        if (s(p)) dr(n.children, r, i);
                    } else {
                        n.children = er(r, h, p, n, i, a - 1);
                    }
                    b = g;
                    v = x;
                }
                Vn(t, n, d);
                return n;
            } else {
                k = !1;
                if (y === "svg") {
                    b = !0;
                } else if (b && y === "foreignObject") {
                    k = !0;
                    b = !1;
                }
                if (v && N === n) v = !1;
                C = n.element;
                if (ln(h) && !s(p)) {
                    if (h !== p) {
                        C.textContent = h;
                        p = h;
                    }
                } else {
                    if (a <= 0) {
                        if (s(p)) dr(n.children, C, null);
                    } else {
                        p = er(C, h, p, n, null, a - 1);
                    }
                }
                n.children = p;
                if (k) b = !0;
                Vn(t, n, d);
                if (n.attrs || t.attrs || v) n.attrs = Dn(n, C, t.attrs, n.attrs || {}, v);
                kn(C, t.style, n.style);
                n.style = t.style;
                w = t.className;
                if (w !== n.className) {
                    wn(C, w || "");
                    n.className = w;
                }
                b = g;
                v = x;
                return n;
            }
        }
        S = n.element;
        if (s(S)) S = S[0];
        if (S == e) S = r; else S = S.parentNode;
        _ = Bn(t, n.parent, S, Wn(n));
        jn(n);
        return _;
    }
    function Wn(t) {
        var n, r, i;
        if (t === e) return null;
        n = t.element;
        if (n != null) {
            if (s(n)) return n[0];
            return n;
        }
        r = t.children;
        if (!s(r)) return null;
        for (i = 0; i < r.length; i++) {
            n = Wn(r[i]);
            if (n) return n;
        }
        return null;
    }
    function Xn(t) {
        var n, r, i;
        if (t === e) return null;
        n = t.element;
        if (n != null) {
            if (s(n)) return n[n.length - 1];
            return n;
        }
        r = t.children;
        if (!s(r)) return null;
        for (i = r.length; i-- > 0; ) {
            n = Xn(r[i]);
            if (n) return n;
        }
        return null;
    }
    function Yn(t, n, r, i) {
        var a, o;
        while (++n < r) {
            a = t[n];
            if (a == e) continue;
            o = Wn(a);
            if (o != null) return o;
        }
        return i;
    }
    function zn() {
        var t, n, r;
        t = g.length;
        for (n = 0; n < t; n++) {
            r = g[n];
            Qt = r.ctx;
            y[n].call(r.component, Qt, r, r.element);
        }
        Qt = e;
        y = [];
        g = [];
    }
    function $n(e, t, n, r, i, a, o) {
        t[n] = Kn(e, t[n], a, Yn(t, n, r, i), o);
    }
    function qn(e, t, n) {
        var r, i, a;
        r = e.element;
        if (r != null) {
            if (s(r)) {
                for (i = 0; i < r.length; i++) {
                    t.insertBefore(r[i], n);
                }
            } else t.insertBefore(r, n);
            return;
        }
        a = e.children;
        if (!s(a)) return;
        for (i = 0; i < a.length; i++) {
            qn(a[i], t, n);
        }
    }
    function Qn(e, t, n, r, i) {
        var a, o, d;
        a = Yn(e, t, n, r);
        o = e[t];
        d = Wn(o);
        if (d != null && d !== a) {
            qn(o, i, a);
        }
    }
    function Gn(e, t, n, r, i, a, o) {
        var d, l, c;
        d = Yn(t, n, r, i);
        l = t[n];
        c = Wn(l);
        if (c != null && c !== d) {
            qn(l, a, d);
        }
        t[n] = Kn(e, l, a, d, o);
    }
    function Zn(t, n) {
        var r, i;
        if (n == e) return;
        if (u(n)) {
            for (r = 0; r < n.length; r++) {
                Zn(t, n[r]);
            }
        } else {
            i = An(n);
            if (i !== e) t.push(i);
        }
    }
    function Jn(e, t) {
        Zn(e, t);
    }
    function er(t, n, r, i, a, o) {
        var d;
        if (r == e) r = [];
        if (!s(r)) {
            if (t.firstChild) t.removeChild(t.firstChild);
            r = [];
        }
        d = [];
        Jn(d, n);
        return tr(t, d, r, i, a, o);
    }
    function tr(t, n, r, i, a, o) {
        var d, l, c, s = 0, u = 0, f, h, p, m, b, v, y, g, x, _, C;
        d = n.length;
        l = r.length;
        c = l;
        while (s < d && u < c) {
            if (n[s].key === r[u].key) {
                $n(n[s], r, u, l, a, t, o);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (n[d - 1].key === r[c - 1].key) {
                    d--;
                    c--;
                    $n(n[d], r, c, l, a, t, o);
                    if (s < d && u < c) continue;
                }
                break;
            }
            if (s < d && u < c) {
                if (n[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    Gn(n[s], r, u, l, a, t, o);
                    s++;
                    u++;
                    continue;
                }
                if (n[d - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    d--;
                    Gn(n[d], r, c, l, a, t, o);
                    continue;
                }
            }
            break;
        }
        if (u === c) {
            if (s === d) {
                return r;
            }
            while (s < d) {
                r.splice(u, 0, Bn(n[s], i, t, Yn(r, u - 1, l, a)));
                u++;
                c++;
                l++;
                s++;
            }
            return r;
        }
        if (s === d) {
            while (u < c) {
                c--;
                jn(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = pn();
        h = pn();
        p = s;
        m = u;
        b = 0;
        for (;u < c; u++) {
            v = r[u];
            y = v.key;
            if (y != null) {
                f[y] = u;
            } else b--;
        }
        g = -b - b;
        for (;s < d; s++) {
            v = n[s];
            y = v.key;
            if (y != null) {
                h[y] = s;
            } else b++;
        }
        g += b;
        x = 0;
        s = p;
        u = m;
        while (u < c && s < d) {
            if (r[u] === null) {
                r.splice(u, 1);
                c--;
                l--;
                x--;
                continue;
            }
            _ = r[u].key;
            if (_ == e) {
                u++;
                continue;
            }
            y = n[s].key;
            if (y == e) {
                s++;
                while (s < d) {
                    y = n[s].key;
                    if (y != e) break;
                    s++;
                }
                if (y == e) break;
            }
            C = f[y];
            if (C === e) {
                r.splice(u, 0, Bn(n[s], i, t, Yn(r, u - 1, l, a)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(_ in h)) {
                jn(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                $n(n[s], r, u, l, a, t, o);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                Gn(n[s], r, u, l, a, t, o);
                u++;
                c++;
                l++;
                s++;
            }
        }
        while (u < c) {
            if (r[u] === null) {
                r.splice(u, 1);
                c--;
                l--;
                continue;
            }
            if (r[u].key != null) {
                jn(r[u]);
                r.splice(u, 1);
                c--;
                l--;
                continue;
            }
            u++;
        }
        while (s < d) {
            y = n[s].key;
            if (y != null) {
                r.splice(u, 0, Bn(n[s], i, t, Yn(r, u - 1, l, a)));
                c++;
                l++;
                x++;
                u++;
            }
            s++;
        }
        if (!g) return r;
        g = g - Math.abs(b) >> 1;
        s = p;
        u = m;
        while (s < d) {
            if (u < c) {
                _ = r[u].key;
                if (_ != null) {
                    u++;
                    continue;
                }
            }
            y = n[s].key;
            if (s < c && y === r[s].key) {
                if (y != null) {
                    s++;
                    continue;
                }
                $n(n[s], r, s, l, a, t, o);
                g--;
                s++;
                u = s;
                continue;
            }
            if (y != null) {
                if (g === 0 && b < 0) {
                    while (!0) {
                        jn(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        b++;
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == e) u++;
                r[u].key;
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Qn(r, s, l, a, t);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Gn(n[s], r, s, l, a, t, o);
                g--;
                s++;
                u++;
            } else {
                r.splice(s, 0, Bn(n[s], i, t, Yn(r, s - 1, l, a)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            jn(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    R = !1;
    B = window.requestAnimationFrame;
    if (B) {
        B(function(e) {
            if (e === +e) R = !0;
        });
    }
    A = window.setTimeout;
    O = Date.now || function() {
        return new Date().getTime();
    };
    F = O();
    T = 0;
    function nr(e) {
        var t;
        if (R) {
            B(e);
        } else {
            t = 50 / 3 + T - O();
            if (t < 0) t = 0;
            A(function() {
                T = O();
                e(T - F);
            }, t);
        }
    }
    j = "$invalidated";
    M = "$deepness";
    U = !0;
    H = !1;
    V = !0;
    L = 0;
    K = {};
    function rr(t, n, r) {
        var i;
        if (Gt == e) Gt = {};
        i = Gt[t] || [];
        i.push({
            priority: n,
            callback: r
        });
        Gt[t] = i;
    }
    function ir(e, t, n, r) {
        var i, a;
        i = K[e];
        if (i) for (a = 0; a < i.length; a++) {
            if (i[a](t, n, r)) return !0;
        }
        return !1;
    }
    W = !1;
    try {
        X = Object.defineProperty({}, "passive", {
            get: function() {
                W = !0;
            }
        });
        window.addEventListener("test", X, X);
        window.removeEventListener("test", X, X);
    } catch (e) {
        W = !1;
    }
    Y = 0;
    function ar(e, t) {
        var n, r;
        if (t[0] == "!") return;
        n = t[0] == "^";
        r = t;
        if (t[0] == "@") {
            r = t.slice(1);
            e = document;
        }
        if (n) {
            r = t.slice(1);
        }
        function i(n) {
            var r, i;
            n = n || window.event;
            r = n.target || n.srcElement || e;
            i = Hn(r);
            Y++;
            ir(t, n, r, i);
            Y--;
            if (Y == 0 && ee) ur();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, i, W ? {
            capture: n,
            passive: !1
        } : n);
    }
    function or() {
        var t, n, r, i, a, o;
        if (Gt === e) return;
        t = Object.keys(Gt);
        for (n = 0; n < t.length; n++) {
            r = t[n];
            i = Gt[r];
            i = i.sort(function(e, t) {
                return e.priority - t.priority;
            });
            K[r] = i.map(function(e) {
                return e.callback;
            });
        }
        Gt = e;
        a = document.body;
        for (o = 0; o < t.length; o++) {
            ar(a, t[o]);
        }
    }
    function dr(t, n, r) {
        var i, a, o, d, l, c, u;
        i = t.length;
        for (a = 0; a < i; a++) {
            o = t[a];
            d = o.ctx;
            if (d != null && d[j] >= L) {
                t[a] = Kn(o.orig, o, n, Yn(t, a, i, r), d[M], !0);
            } else if (s(o.children)) {
                l = b;
                c = v;
                if (v && N === o) v = !1;
                if (o.tag === "svg") b = !0; else if (b && o.tag === "foreignObject") b = !1;
                u = o.element;
                if (u != e) {
                    dr(o.children, u, null);
                } else {
                    dr(o.children, n, Yn(t, a, i, r));
                }
                In(o);
                b = l;
                v = c;
            }
        }
    }
    (function(e) {
        e[e["Create"] = 0] = "Create";
        e[e["Update"] = 1] = "Update";
        e[e["LocalUpdate"] = 2] = "LocalUpdate";
        e[e["Destroy"] = 3] = "Destroy";
    })(z = $ || ($ = {}));
    q = function() {};
    Q = q;
    G = function() {};
    Z = function() {};
    J = function() {};
    function lr(e) {
        var t = G;
        G = e;
        return t;
    }
    function cr(e) {
        var t = J;
        J = e;
        return t;
    }
    function sr(t, n, r) {
        var i, a, o;
        while (n != null) {
            if (t === n) return !0;
            i = n.parent;
            if (i == e) {
                for (a = 0; a < r.length; a++) {
                    o = I[r[a]];
                    if (!o) continue;
                    if (o.n === n) {
                        i = o.p;
                        break;
                    }
                }
            }
            n = i;
        }
        return !1;
    }
    ee = !1;
    function ur() {
        ee = !1;
        pr(O() - F);
        aa();
    }
    function fr() {
        if (Y > 0) {
            ee = !0;
            return;
        }
        ur();
    }
    function hr(e) {
        H = !1;
        pr(e);
        pe(aa);
    }
    te = ea({
        render: function(t, n) {
            var r, i;
            r = t.data;
            i = r.f(r);
            if (i === e) {
                n.tag = "-";
            } else {
                n.children = i;
            }
        }
    });
    function pr(t) {
        var n, r, i, a, o, d, l, c, u, f;
        O();
        or();
        Z();
        L++;
        re = ne;
        ne = !1;
        G();
        n = !1;
        if (U) {
            U = !1;
            n = !0;
        }
        Y++;
        for (r = 0; r < 2; r++) {
            N = E.length === 0 ? null : E[E.length - 1];
            v = !1;
            Zt = Object.keys(I);
            for (i = 0; i < Zt.length; i++) {
                a = I[Zt[i]];
                if (!a) continue;
                o = a.n;
                d = null;
                for (l = i + 1; l < Zt.length; l++) {
                    c = I[Zt[l]];
                    if (c === e) continue;
                    d = Wn(c.n);
                    if (d != null) break;
                }
                if (N) v = !sr(N, a.p, Zt);
                if (a.e === e) a.e = document.body;
                if (o) {
                    if (n || o.ctx[j] >= L) {
                        u = te(a);
                        Kn(u, o, a.e, d, n ? 1e6 : o.ctx[M]);
                    } else {
                        if (s(a.c)) dr(a.c, a.e, d);
                    }
                } else {
                    u = te(a);
                    o = Bn(u, e, a.e, d);
                    a.n = o;
                }
                a.c = o.children;
            }
            Zt = e;
            zn();
            if (!ee) break;
        }
        ee = !1;
        Y--;
        f = I["0"];
        J(f ? f.c : null);
        O();
    }
    ne = !1;
    re = !1;
    function mr() {
        ne = !0;
        ie();
    }
    function br(e) {
        var t = ie;
        ie = e;
        return t;
    }
    ie = function(t, n) {
        if (t != null) {
            if (n == e) n = 1e6;
            if (t[j] !== L + 1) {
                t[j] = L + 1;
                t[M] = n;
            } else {
                if (n > t[M]) t[M] = n;
            }
        } else {
            U = !0;
        }
        if (H || V) return;
        H = !0;
        nr(hr);
    };
    ae = 0;
    function vr(t, n, r) {
        var i;
        ae++;
        i = "" + ae;
        I[i] = {
            f: t,
            e: n,
            c: [],
            p: r,
            n: e
        };
        if (Zt != null) {
            Zt.push(i);
        } else {
            _r();
        }
        return i;
    }
    function yr(e) {
        var t = I[e];
        if (!t) return;
        if (t.n) jn(t.n);
        delete I[e];
    }
    function gr() {
        return I;
    }
    function xr() {
        V = !1;
        ie();
    }
    oe = xr;
    function _r() {
        V = !0;
        oe();
        oe = xr;
    }
    function Cr(t, n) {
        yr("0");
        I["0"] = {
            f: t,
            e: n,
            c: [],
            p: e,
            n: e
        };
        _r();
    }
    function kr(e) {
        var t = oe;
        oe = function() {
            e(t);
        };
    }
    function wr(t, n, r) {
        var i, a, o, d, c, s, u, f, h, p;
        if (r == e) {
            r = {
                target: t
            };
        } else if (un(r) && r.target == e) {
            r.target = t;
        }
        i = Er(n, r);
        if (i != e) return i;
        a = Jt;
        while (t) {
            o = t.component;
            if (o) {
                d = t.ctx;
                Jt = d;
                if (((d.$hookFlags || 0) & l) === l) {
                    c = d.$hooks;
                    for (s = 0, u = c.length; s < u; s++) {
                        f = c[s];
                        if (f instanceof $t) {
                            h = f.events[n];
                            if (h !== e) {
                                p = +h.call(d, r);
                                if (p == Lt.HandledPreventDefault) {
                                    Jt = a;
                                    return d;
                                }
                                if (p == Lt.HandledButRunDefault) {
                                    Jt = a;
                                    return e;
                                }
                                if (p == Lt.NotHandledPreventDefault) {
                                    i = d;
                                }
                            }
                        }
                    }
                }
                h = o[n];
                if (h) {
                    p = +h.call(o, d, r);
                    if (p == Lt.HandledPreventDefault) {
                        Jt = a;
                        return d;
                    }
                    if (p == Lt.HandledButRunDefault) {
                        Jt = a;
                        return e;
                    }
                    if (p == Lt.NotHandledPreventDefault) {
                        i = d;
                    }
                }
                h = o.shouldStopBubble;
                if (h) {
                    if (h.call(o, d, n, r)) break;
                }
            }
            t = t.parent;
        }
        Jt = a;
        return i;
    }
    function Sr(t, n, r) {
        var i, a, o, d, c, u, f, h, p, m, b, v;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            o = Jt;
            Jt = a;
            if (((a.$hookFlags || 0) & l) === l) {
                d = a.$hooks;
                for (c = 0, u = d.length; c < u; c++) {
                    f = d[c];
                    if (f instanceof $t) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == Lt.HandledPreventDefault) {
                                Jt = o;
                                return a;
                            }
                            if (p == Lt.HandledButRunDefault) {
                                Jt = o;
                                return e;
                            }
                            if (p == Lt.NotHandledPreventDefault) {
                                m = a;
                            }
                        }
                    }
                }
            }
            h = i[n];
            if (h) {
                p = +h.call(i, a, r);
                if (p == Lt.HandledPreventDefault) {
                    Jt = o;
                    return a;
                }
                if (p == Lt.HandledButRunDefault) {
                    Jt = o;
                    return e;
                }
                if (p == Lt.NotHandledPreventDefault) {
                    m = a;
                }
            }
            h = i.shouldStopBroadcast;
            if (h) {
                if (h.call(i, a, n, r)) {
                    Jt = o;
                    return m;
                }
            }
            Jt = o;
        }
        b = t.children;
        if (s(b)) {
            for (c = 0; c < b.length; c++) {
                v = Sr(b[c], n, r);
                if (v != e) return v;
            }
        }
        return m;
    }
    function Dr(t, n, r) {
        var i, a, o, d, l, u, f, h, p, m, b, v;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            if (((a.$hookFlags || 0) & c) === c) {
                o = a.$hooks;
                d = Jt;
                Jt = a;
                for (l = 0, u = o.length; l < u; l++) {
                    f = o[l];
                    if (f instanceof qt) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == Lt.HandledPreventDefault) {
                                Jt = d;
                                return a;
                            }
                            if (p == Lt.HandledButRunDefault) {
                                Jt = d;
                                return e;
                            }
                            if (p == Lt.NotHandledPreventDefault) {
                                m = a;
                            }
                        }
                    }
                }
                Jt = d;
            }
        }
        b = t.children;
        if (s(b)) {
            for (l = 0, u = b.length; l < u; l++) {
                v = Dr(b[l], n, r);
                if (v != e) return v;
            }
        }
        return m;
    }
    function Er(t, n) {
        var r, i, a, o;
        r = Object.keys(I);
        for (i = 0; i < r.length; i++) {
            a = I[r[i]].n;
            if (a != null) {
                o = Dr(a, t, n);
                if (o != null) return o;
            }
        }
        return e;
    }
    function Nr(t, n) {
        var r, i, a, o;
        r = Er(t, n);
        if (r != null) return r;
        i = Object.keys(I);
        for (a = 0; a < i.length; a++) {
            o = I[i[a]].n;
            if (o != null) {
                r = Sr(o, t, n);
                if (r != null) return r;
            }
        }
        return e;
    }
    function Ir(e) {
        var t = e.preventDefault;
        if (t) t.call(e); else e.returnValue = !1;
    }
    function Pr(e) {
        var t, n;
        e = e.slice(0);
        for (t = 0; t < e.length; t++) {
            n = e[t];
            if (s(n)) {
                e[t] = Pr(n);
            } else if (un(n)) {
                e[t] = Rr(n);
            }
        }
        return e;
    }
    function Rr(e) {
        var t, n;
        t = m({}, e);
        if (t.attrs) {
            t.attrs = m({}, t.attrs);
        }
        if (un(t.style)) {
            t.style = m({}, t.style);
        }
        n = t.children;
        if (n) {
            if (s(n)) {
                t.children = Pr(n);
            } else if (un(n)) {
                t.children = Rr(n);
            }
        }
        return t;
    }
    function Br(e, t) {
        k.set(e, t);
    }
    Br("float", bn("cssFloat"));
    (function(e) {
        e[e["Mobile"] = 0] = "Mobile";
        e[e["Tablet"] = 1] = "Tablet";
        e[e["Desktop"] = 2] = "Desktop";
        e[e["LargeDesktop"] = 3] = "LargeDesktop";
    })(de || (de = {}));
    le = null;
    ce = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function Ar() {
        le = null;
        ie();
        return !1;
    }
    se = [ "resize", "orientationchange" ];
    for (ue = 0; ue < se.length; ue++) rr(se[ue], 10, Ar);
    fe = window.document.documentElement;
    he = /Android/i.test(navigator.userAgent);
    function Or() {
        var t, n, r, i, a, o;
        if (le == e) {
            t = fe.clientWidth;
            n = fe.clientHeight;
            r = window.orientation;
            i = n >= t;
            if (r == e) r = i ? 0 : 90; else r = +r;
            if (he) {
                a = Math.abs(r) % 180 === 90;
                if (en == e) {
                    en = a === i;
                } else {
                    i = a === en;
                }
            }
            o = 0;
            while (t > ce[+!i][o]) o++;
            le = {
                width: t,
                height: n,
                orientation: r,
                deviceCategory: o,
                portrait: i,
                dppx: window.devicePixelRatio
            };
        }
        return le;
    }
    pe = function() {
        var t = [], n, r, i;
        function a() {
            var e, n, r;
            e = t;
            t = [];
            for (n = 0, r = e.length; n < r; n++) {
                e[n]();
            }
        }
        if (window.MutationObserver) {
            n = document.createElement("div");
            new MutationObserver(a).observe(n, {
                attributes: !0
            });
            return function(e) {
                if (!t.length) {
                    n.setAttribute("yes", "no");
                }
                t.push(e);
            };
        } else {
            r = window.setImmediate || A;
            return function(n) {
                t.push(n);
                if (!i) {
                    i = r(function() {
                        i = e;
                        a();
                    }, 0);
                }
            };
        }
    }();
    if (!window.Promise) {
        (function() {
            function t(e, t) {
                return function() {
                    e.apply(t, arguments);
                };
            }
            function n(t) {
                var n = this;
                if (this.s === null) {
                    this.d.push(t);
                    return;
                }
                pe(function() {
                    var r, i;
                    r = n.s ? t[0] : t[1];
                    if (r == e) {
                        (n.s ? t[2] : t[3])(n.v);
                        return;
                    }
                    try {
                        i = r(n.v);
                    } catch (e) {
                        t[3](e);
                        return;
                    }
                    t[2](i);
                });
            }
            function r() {
                var e, t;
                for (e = 0, t = this.d.length; e < t; e++) {
                    n.call(this, this.d[e]);
                }
                this.d = null;
            }
            function i(e) {
                this.s = !1;
                this.v = e;
                r.call(this);
            }
            function a(e, t, n) {
                var r = !1;
                try {
                    e(function(e) {
                        if (r) return;
                        r = !0;
                        t(e);
                    }, function(e) {
                        if (r) return;
                        r = !0;
                        n(e);
                    });
                } catch (e) {
                    if (r) return;
                    r = !0;
                    n(e);
                }
            }
            function o(e) {
                var n;
                try {
                    if (e === this) throw new TypeError("Promise self resolve");
                    if (Object(e) === e) {
                        n = e.then;
                        if (typeof n === "function") {
                            a(t(n, e), t(o, this), t(i, this));
                            return;
                        }
                    }
                    this.s = !0;
                    this.v = e;
                    r.call(this);
                } catch (e) {
                    i.call(this, e);
                }
            }
            function d(e) {
                this.s = null;
                this.v = null;
                this.d = [];
                a(e, t(o, this), t(i, this));
            }
            d.prototype.then = function(e, t) {
                var r = this;
                return new d(function(i, a) {
                    n.call(r, [ e, t, i, a ]);
                });
            };
            d.prototype["catch"] = function(t) {
                return this.then(e, t);
            };
            d.all = function() {
                var e = [].slice.call(arguments.length === 1 && s(arguments[0]) ? arguments[0] : arguments);
                return new d(function(t, n) {
                    var r, i;
                    if (e.length === 0) {
                        t(e);
                        return;
                    }
                    r = e.length;
                    function a(i, o) {
                        var d;
                        try {
                            if (o && (typeof o === "object" || typeof o === "function")) {
                                d = o.then;
                                if (typeof d === "function") {
                                    d.call(o, function(e) {
                                        a(i, e);
                                    }, n);
                                    return;
                                }
                            }
                            e[i] = o;
                            if (--r === 0) {
                                t(e);
                            }
                        } catch (e) {
                            n(e);
                        }
                    }
                    for (i = 0; i < e.length; i++) {
                        a(i, e[i]);
                    }
                });
            };
            d.resolve = function(e) {
                if (e && typeof e === "object" && e.constructor === d) {
                    return e;
                }
                return new d(function(t) {
                    t(e);
                });
            };
            d.reject = function(e) {
                return new d(function(t, n) {
                    n(e);
                });
            };
            d.race = function(e) {
                return new d(function(t, n) {
                    var r, i;
                    for (r = 0, i = e.length; r < i; r++) {
                        e[r].then(t, n);
                    }
                });
            };
            window["Promise"] = d;
        })();
    }
    me = "b$value";
    be = "b$selStart";
    ve = "b$selEnd";
    ye = "value";
    function Fr(e) {
        var t = e.type;
        return t === "checkbox" || t === "radio";
    }
    function Tr(e, t) {
        var n, r;
        n = e.length;
        if (n !== t.length) return !1;
        for (r = 0; r < n; r++) {
            if (e[r] !== t[r]) return !1;
        }
        return !0;
    }
    function jr(e, t) {
        var n;
        for (n = 0; n < e.length; n++) {
            if (e[n] === t) return !0;
        }
        return !1;
    }
    function Mr(e) {
        var t = [], n;
        for (n = 0; n < e.length; n++) {
            if (e[n].selected) t.push(e[n].value);
        }
        return t;
    }
    ge = hn(function(t, n, r, i) {
        var a, o, d, l, c, s, u, h, p, m, b;
        a = t.tagName;
        o = a === "SELECT";
        d = a === "INPUT" || a === "TEXTAREA";
        if (!d && !o) {
            ge(t, n, r, i);
            return;
        }
        if (n.ctx === e) {
            n.ctx = {
                data: e,
                me: n
            };
            n.component = f;
        }
        if (i === e) {
            n.ctx[me] = r;
        }
        l = o && t.multiple;
        c = !1;
        if (l) {
            s = t.options;
            u = Mr(s);
            if (!Tr(r, u)) {
                if (i === e || Tr(u, i) || !Tr(r, n.ctx[me])) {
                    for (h = 0; h < s.length; h++) {
                        s[h].selected = jr(r, s[h].value);
                    }
                    u = Mr(s);
                    if (Tr(u, r)) {
                        c = !0;
                    }
                } else {
                    c = !0;
                }
            }
        } else if (d || o) {
            if (d && Fr(t)) {
                p = t.checked;
                if (r !== p) {
                    if (i === e || p === i || r !== n.ctx[me]) {
                        t.checked = r;
                    } else {
                        c = !0;
                    }
                }
            } else {
                m = o && t.size < 2;
                b = t[ye];
                if (r !== b) {
                    if (i === e || b === i || r !== n.ctx[me]) {
                        if (o) {
                            if (r === "") {
                                t.selectedIndex = m ? 0 : -1;
                            } else {
                                t[ye] = r;
                            }
                            if (r !== "" || m) {
                                b = t[ye];
                                if (r !== b) {
                                    c = !0;
                                }
                            }
                        } else {
                            t[ye] = r;
                        }
                    } else {
                        c = !0;
                    }
                }
            }
        }
        if (c) {
            Ur(e, t, n);
        } else {
            n.ctx[me] = r;
        }
    });
    function Ur(t, n, r) {
        var i, a, o, d, l, c, s, u, h, p, m, b, v, y, g, x, _, C, k;
        if (n && n.nodeName === "OPTION") {
            n = document.activeElement;
            r = Hn(n);
        }
        if (!r) {
            return !1;
        }
        if (r.ctx === e) {
            r.ctx = {
                data: e,
                me: r
            };
            r.component = f;
        }
        i = r.ctx;
        a = n.tagName;
        o = a === "SELECT";
        d = o && n.multiple;
        if (d) {
            l = Mr(n.options);
            if (!Tr(i[me], l)) {
                i[me] = l;
                Hr(r, l);
            }
        } else if (Fr(n)) {
            if (t && t.type === "change") {
                A(function() {
                    Ur(e, n, r);
                }, 10);
                return !1;
            }
            if (n.type === "radio") {
                c = document.getElementsByName(n.name);
                for (s = 0; s < c.length; s++) {
                    u = c[s];
                    h = Hn(u);
                    if (!h) continue;
                    p = h.ctx;
                    m = u.checked;
                    if (p[me] !== m) {
                        p[me] = m;
                        Hr(h, m);
                    }
                }
            } else {
                b = n.checked;
                if (i[me] !== b) {
                    i[me] = b;
                    Hr(r, b);
                }
            }
        } else {
            v = n.value;
            if (i[me] !== v) {
                i[me] = v;
                Hr(r, v);
            }
            y = n.selectionStart;
            g = n.selectionEnd;
            x = n.selectionDirection;
            _ = !1;
            C = i[be];
            if (x == e) {
                if (g === C) _ = !0;
            } else if (x === "backward") {
                _ = !0;
            }
            if (_) {
                k = y;
                y = g;
                g = k;
            }
            Vr(r, y, g);
        }
        return !1;
    }
    function Hr(e, t) {
        var n, r, i, a, o;
        n = Jt;
        r = e.ctx;
        i = e.component;
        Jt = r;
        a = e.attrs && e.attrs[me];
        if (sn(a)) a(t);
        o = i && i.onChange;
        if (sn(o)) o(r, t);
        Jt = n;
        wr(e, "onInput", {
            target: e,
            value: t
        });
    }
    function Vr(e, t, n) {
        var r, i;
        r = e.component;
        i = e.ctx;
        if (r && (i[be] !== t || i[ve] !== n)) {
            i[be] = t;
            i[ve] = n;
            wr(e, "onSelectionChange", {
                target: e,
                startPosition: t,
                endPosition: n
            });
        }
    }
    function Lr(e, t, n) {
        var r = Ci();
        if (r) Ur(e, r.element, r);
        return !1;
    }
    se = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (ue = 0; ue < se.length; ue++) rr(se[ue], 10, Ur);
    xe = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (ue = 0; ue < xe.length; ue++) rr(xe[ue], 2, Lr);
    function Kr(t) {
        return {
            target: e,
            shift: t.shiftKey,
            ctrl: t.ctrlKey,
            alt: t.altKey,
            meta: t.metaKey || !1,
            which: t.which || t.keyCode
        };
    }
    function Wr(e, t, n) {
        var r;
        if (!n) return !1;
        r = Kr(e);
        if (wr(n, "onKeyDown", r)) {
            Ir(e);
            return !0;
        }
        return !1;
    }
    function Xr(e, t, n) {
        var r;
        if (!n) return !1;
        r = Kr(e);
        if (wr(n, "onKeyUp", r)) {
            Ir(e);
            return !0;
        }
        return !1;
    }
    function Yr(e, t, n) {
        var r;
        if (!n) return !1;
        if (e.which === 0 || e.altKey) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (wr(n, "onKeyPress", r)) {
            Ir(e);
            return !0;
        }
        return !1;
    }
    rr("keydown", 50, Wr);
    rr("keyup", 50, Xr);
    rr("keypress", 50, Yr);
    (function(e) {
        e[e["Mouse"] = 0] = "Mouse";
        e[e["Touch"] = 1] = "Touch";
        e[e["Pen"] = 2] = "Pen";
    })(_e = Ce || (Ce = {}));
    ke = 13;
    we = 750;
    Se = 500;
    De = 800;
    Ee = 50;
    Ne = null;
    Ie = "onClick";
    Pe = "onDoubleClick";
    function zr(t, n) {
        var r, i, a, o;
        if (Ne == e) {
            return !1;
        }
        r = Ne.me.component;
        i = r[t];
        if (!i) {
            return !1;
        }
        a = Jt;
        Jt = Ne;
        o = i.call(r, Ne, n);
        Jt = a;
        return o;
    }
    function $r(t) {
        var n, r;
        while (t) {
            n = t.style;
            if (n) {
                r = n.pointerEvents;
                if (r !== e) {
                    if (r === "none") return !0;
                    return !1;
                }
            }
            t = t.parent;
        }
        return !1;
    }
    function qr(e) {
        var t;
        if (e.length) {
            for (t = e.length - 1; t >= 0; --t) {
                e[t].t.style.visibility = e[t].p;
            }
            return !0;
        }
        return !1;
    }
    function Qr(e, t) {
        e.push({
            t: t,
            p: t.style.visibility
        });
        t.style.visibility = "hidden";
    }
    function Gr(e, t) {
        rr(e, 5, t);
    }
    Re = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    function Zr(e) {
        if (e === "mouse" || e === 4) return _e.Mouse;
        if (e === "pen" || e === 3) return _e.Pen;
        return _e.Touch;
    }
    function Jr(e, t, n, r) {
        var i = [], a;
        a = n;
        while ($r(r)) {
            Qr(i, a);
            a = document.elementFromPoint(e, t);
            r = Hn(a);
        }
        qr(i);
        return [ a, r ];
    }
    function ei(e) {
        return function t(n, r, i) {
            var a, o, d, l, c;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = Hn(r);
            if ($r(i)) {
                a = Jr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            o = n.button + 1;
            d = Zr(n.pointerType);
            l = n.buttons;
            if (o === 0 && d === _e.Mouse && l) {
                o = 1;
                while (!(l & 1)) {
                    l = l >> 1;
                    o++;
                }
            }
            c = {
                target: i,
                id: n.pointerId,
                cancelable: mi(n),
                type: d,
                x: n.clientX,
                y: n.clientY,
                button: o,
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail
            };
            if (ir("!" + e, c, r, i)) {
                Ir(n);
                return !0;
            }
            return !1;
        };
    }
    function ti(e) {
        return function t(n, r, i) {
            var a = !1, o, d, l;
            for (o = 0; o < n.changedTouches.length; o++) {
                d = n.changedTouches[o];
                r = document.elementFromPoint(d.clientX, d.clientY);
                i = Hn(r);
                l = {
                    target: i,
                    id: d.identifier + 2,
                    cancelable: mi(n),
                    type: _e.Touch,
                    x: d.clientX,
                    y: d.clientY,
                    button: 1,
                    shift: n.shiftKey,
                    ctrl: n.ctrlKey,
                    alt: n.altKey,
                    meta: n.metaKey || !1,
                    count: n.detail
                };
                if (ir("!" + e, l, r, i)) a = !0;
            }
            if (a) {
                Ir(n);
                return !0;
            }
            return !1;
        };
    }
    function ni(e) {
        return function t(n, r, i) {
            var a, o;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = Hn(r);
            if ($r(i)) {
                a = Jr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            o = {
                target: i,
                id: 1,
                type: _e.Mouse,
                cancelable: mi(n),
                x: n.clientX,
                y: n.clientY,
                button: pi(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail
            };
            if (ir("!" + e, o, r, i)) {
                Ir(n);
                return !0;
            }
            return !1;
        };
    }
    function ri() {
        Gr("mousedown", ni(Re[0]));
        Gr("mousemove", ni(Re[1]));
        Gr("mouseup", ni(Re[2]));
    }
    if (window.ontouchstart !== e) {
        Gr("touchstart", ti(Re[0]));
        Gr("touchmove", ti(Re[1]));
        Gr("touchend", ti(Re[2]));
        Gr("touchcancel", ti(Re[3]));
        ri();
    } else if (window.onpointerdown !== e) {
        for (ue = 0; ue < 4; ue++) {
            Be = Re[ue];
            Gr(Be.toLowerCase(), ei(Be));
        }
    } else if (window.onmspointerdown !== e) {
        for (ue = 0; ue < 4; ue++) {
            Be = Re[ue];
            Gr("@MS" + Be, ei(Be));
        }
    } else {
        ri();
    }
    for (Ae = 0; Ae < 4; Ae++) {
        (function(t) {
            var n = "on" + t;
            rr("!" + t, 50, function(t, r, i) {
                return zr(n, t) || wr(i, n, t) != e;
            });
        })(Re[Ae]);
    }
    Oe = pn();
    Fe = [];
    Te = -1;
    je = 0;
    Me = 0;
    Ue = 0;
    He = !1;
    function ii(e, t, n) {
        return Math.abs(e - t) < n;
    }
    Ve = [];
    function ai(t) {
        var n, r, i, a, o, d, l, c;
        n = document.elementFromPoint(t.x, t.y);
        r = Un(n);
        i = r.length == 0 ? e : r[r.length - 1];
        if ($r(i)) {
            a = Jr(t.x, t.y, n, i == e ? e : i);
            n = a[0];
            r = Un(n);
        }
        wr(i, "onMouseOver", t);
        o = 0;
        while (o < Ve.length && o < r.length && Ve[o] === r[o]) o++;
        d = Ve.length;
        if (d > 0 && (d > o || d != r.length)) {
            l = Ve[d - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, t);
            }
        }
        while (d > o) {
            d--;
            l = Ve[d];
            if (l) {
                c = l.component;
                if (c && c.onMouseLeave) c.onMouseLeave(l.ctx, t);
            }
        }
        while (d < r.length) {
            l = r[d];
            if (l) {
                c = l.component;
                if (c && c.onMouseEnter) c.onMouseEnter(l.ctx, t);
            }
            d++;
        }
        Ve = r;
        if (d > 0 && (d > o || d != Ve.length)) {
            l = Ve[d - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, t);
            }
        }
        return !1;
    }
    function oi() {
        return Object.keys(Oe).length === 0;
    }
    function di(e, t, n) {
        if (Te === -1 && oi()) {
            Te = e.id;
            je = O();
            Me = e.x;
            Ue = e.y;
            He = !1;
            ai(e);
        }
        Oe[e.id] = e.type;
        if (Te !== e.id) {
            He = !0;
        }
        return !1;
    }
    function li(e, t, n) {
        if (e.type === _e.Mouse && e.button === 0 && Oe[e.id] != null) {
            e.button = 1;
            ir("!PointerUp", e, t, n);
            e.button = 0;
        }
        if (Te === e.id) {
            ai(e);
            if (!ii(Me, e.x, ke) || !ii(Ue, e.y, ke)) He = !0;
        } else if (oi()) {
            ai(e);
        }
        return !1;
    }
    Le = 0;
    Ke = 0;
    function ci(e) {
        var t;
        if (Ke == 0) return !1;
        t = O();
        if (t < Le + 1e3 && e >= Ke) {
            Le = t;
            Ke = e;
            return !0;
        }
        Ke = 0;
        return !1;
    }
    function si(e, t, n) {
        var r, i;
        delete Oe[e.id];
        if (Te == e.id) {
            ai(e);
            Te = -1;
            if (e.type == _e.Touch && !He) {
                if (O() - je < we) {
                    ir("!PointerCancel", e, t, n);
                    ci(1);
                    r = zr(Ie, e) || wr(n, Ie, e) != null;
                    i = gn() ? De : Se;
                    Fe.push([ e.x, e.y, O() + i, r ? 1 : 0 ]);
                    return r;
                }
            } else if (He) {
                $e(e.x, e.y);
            }
        }
        return !1;
    }
    function ui(e, t, n) {
        delete Oe[e.id];
        if (Te == e.id) {
            Te = -1;
        }
        return !1;
    }
    function fi(e, t, n) {
        var r, i, a;
        r = O();
        for (i = 0; i < Fe.length; i++) {
            a = Fe[i];
            if (a[2] < r) {
                Fe.splice(i, 1);
                i--;
                continue;
            }
            if (ii(a[0], e.clientX, Ee) && ii(a[1], e.clientY, Ee)) {
                Fe.splice(i, 1);
                if (a[3]) Ir(e);
                return !0;
            }
        }
        return !1;
    }
    We = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Xe = [ di, li, si, ui, fi ];
    for (ue = 0; ue < 5; ue++) {
        rr(We[ue], 3, Xe[ue]);
    }
    function hi(e) {
        return function(t, n, r) {
            if (Te != t.id && !oi()) return !1;
            if (zr(e, t) || wr(r, e, t)) {
                return !0;
            }
            return !1;
        };
    }
    Ye = [ "Down", "Move", "Up", "Up" ];
    for (ue = 0; ue < 4; ue++) {
        rr(We[ue], 80, hi("onMouse" + Ye[ue]));
    }
    function pi(e) {
        return e.which || e.button;
    }
    function mi(e) {
        var t = e.cancelable;
        return !cn(t) || t;
    }
    function bi(e, t) {
        return function(n, r, i) {
            var a, o;
            a = pi(n) || 1;
            if (!t && a !== 1) return !1;
            o = {
                target: i,
                x: n.clientX,
                y: n.clientY,
                button: a,
                cancelable: mi(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail || 1
            };
            if (e == Pe) o.count = 2;
            if (ci(o.count) || zr(e, o) || wr(i, e, o)) {
                Ir(n);
                return !0;
            }
            return !1;
        };
    }
    function vi(e, t) {
        var n, r, i;
        n = document.elementFromPoint(e, t);
        r = Hn(n);
        if ($r(r)) {
            i = Jr(e, t, n, r);
            r = i[1];
        }
        return r;
    }
    function yi(e, t, n) {
        var r, i;
        while (n) {
            r = n.style;
            if (r) {
                i = r.userSelect;
                if (i === "none") {
                    Ir(e);
                    return !0;
                }
                if (i) {
                    break;
                }
            }
            n = n.parent;
        }
        return !1;
    }
    Gr("selectstart", yi);
    Gr("^click", bi(Ie));
    Gr("^dblclick", bi(Pe));
    Gr("contextmenu", bi("onContextMenu", !0));
    ze = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function gi(e, t, n) {
        var r, i, a, o, d, l;
        if ($r(n)) {
            r = Jr(e.x, e.y, t, n);
            t = r[0];
            n = r[1];
        }
        i = e.button + 1;
        a = e.buttons;
        if (i === 0 && a) {
            i = 1;
            while (!(a & 1)) {
                a = a >> 1;
                i++;
            }
        }
        o = 0;
        if (ze == "mousewheel") {
            d = -1 / 40 * e.wheelDelta;
            e.wheelDeltaX && (o = -1 / 40 * e.wheelDeltaX);
        } else {
            o = e.deltaX;
            d = e.deltaY;
        }
        l = {
            target: n,
            dx: o,
            dy: d,
            x: e.clientX,
            y: e.clientY,
            cancelable: mi(e),
            button: i,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            count: e.detail
        };
        if (zr("onMouseWheel", l) || wr(n, "onMouseWheel", l)) {
            Ir(e);
            return !0;
        }
        return !1;
    }
    Gr(ze, gi);
    $e = function(e, t) {
        var n = gn() ? De : Se;
        Fe.push([ e, t, O() + n, 1 ]);
    };
    qe = e;
    Qe = e;
    Ge = [];
    Ze = !1;
    function xi(t) {
        var n, r, i, a, o, d;
        if (Ze) return !1;
        Ze = !0;
        while (!0) {
            n = document.hasFocus() || t ? document.activeElement : e;
            if (n === qe) break;
            qe = n;
            r = Un(qe);
            i = 0;
            while (i < Ge.length && i < r.length && Ge[i] === r[i]) i++;
            a = Ge.length - 1;
            if (a >= i) {
                o = Ge[a];
                wr(o, "onBlur");
                a--;
            }
            while (a >= i) {
                o = Ge[a];
                if (o) {
                    d = o.component;
                    if (d && d.onFocusOut) d.onFocusOut(o.ctx);
                }
                a--;
            }
            a = i;
            while (a + 1 < r.length) {
                o = r[a];
                if (o) {
                    d = o.component;
                    if (d && d.onFocusIn) d.onFocusIn(o.ctx);
                }
                a++;
            }
            if (a < r.length) {
                o = r[a];
                wr(o, "onFocus");
            }
            Ge = r;
            Qe = Ge.length == 0 ? e : on(Ge[Ge.length - 1]);
        }
        Ze = !1;
        return !1;
    }
    function _i() {
        A(function() {
            return xi(!1);
        }, 10);
        return !1;
    }
    rr("^focus", 50, function() {
        return xi(!0);
    });
    rr("^blur", 50, _i);
    function Ci() {
        return Qe;
    }
    Je = [];
    function ki(e, t, n) {
        var r, i;
        r = {
            node: n
        };
        for (i = 0; i < Je.length; i++) {
            Je[i](r);
        }
        Er("onScroll", r);
        return !1;
    }
    rr("^scroll", 10, ki);
    (function() {
        function e(e) {
            this.data = e;
        }
        e.fromString = function(t) {
            var n = t.match(/matrix3?d?\(([^\)]+)\)/i)[1].split(",");
            if (n.length === 6) {
                n = [ n[0], n[1], "0", "0", n[2], n[3], "0", "0", "0", "0", "1", "0", n[4], n[5], "0", "1" ];
            }
            return new e([ parseFloat(n[0]), parseFloat(n[4]), parseFloat(n[8]), parseFloat(n[12]), parseFloat(n[1]), parseFloat(n[5]), parseFloat(n[9]), parseFloat(n[13]), parseFloat(n[2]), parseFloat(n[6]), parseFloat(n[10]), parseFloat(n[14]), parseFloat(n[3]), parseFloat(n[7]), parseFloat(n[11]), parseFloat(n[15]) ]);
        };
        e.identity = function() {
            return new e([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
        };
        e.prototype.multiply = function(t) {
            var n = this.data, r;
            r = t.data;
            return new e([ n[0] * r[0] + n[1] * r[4] + n[2] * r[8] + n[3] * r[12], n[0] * r[1] + n[1] * r[5] + n[2] * r[9] + n[3] * r[13], n[0] * r[2] + n[1] * r[6] + n[2] * r[10] + n[3] * r[14], n[0] * r[3] + n[1] * r[7] + n[2] * r[11] + n[3] * r[15], n[4] * r[0] + n[5] * r[4] + n[6] * r[8] + n[7] * r[12], n[4] * r[1] + n[5] * r[5] + n[6] * r[9] + n[7] * r[13], n[4] * r[2] + n[5] * r[6] + n[6] * r[10] + n[7] * r[14], n[4] * r[3] + n[5] * r[7] + n[6] * r[11] + n[7] * r[15], n[8] * r[0] + n[9] * r[4] + n[10] * r[8] + n[11] * r[12], n[8] * r[1] + n[9] * r[5] + n[10] * r[9] + n[11] * r[13], n[8] * r[2] + n[9] * r[6] + n[10] * r[10] + n[11] * r[14], n[8] * r[3] + n[9] * r[7] + n[10] * r[11] + n[11] * r[15], n[12] * r[0] + n[13] * r[4] + n[14] * r[8] + n[15] * r[12], n[12] * r[1] + n[13] * r[5] + n[14] * r[9] + n[15] * r[13], n[12] * r[2] + n[13] * r[6] + n[14] * r[10] + n[15] * r[14], n[12] * r[3] + n[13] * r[7] + n[14] * r[11] + n[15] * r[15] ]);
        };
        e.prototype.translate = function(t, n, r) {
            var i = new e([ 1, 0, 0, t, 0, 1, 0, n, 0, 0, 1, r, 0, 0, 0, 1 ]);
            return this.multiply(i);
        };
        e.prototype.inverse = function() {
            var t = this.data, n = t[0], r = t[1], i = t[2], a = t[4], o = t[5], d = t[6], l = t[8], c = t[9], s = t[10], u = o * s - d * c, f = d * l - a * s, h = a * c - o * l, p = i * c - r * s, m = n * s - i * l, b = r * l - n * c, v = r * d - i * o, y = i * a - n * d, g = n * o - r * a, x = n * u + r * f + i * h, _, C;
            _ = new e([ u / x, p / x, v / x, 0, f / x, m / x, y / x, 0, h / x, b / x, g / x, 0, 0, 0, 0, 1 ]);
            C = new e([ 1, 0, 0, -t[3], 0, 1, 0, -t[7], 0, 0, 1, -t[11], 0, 0, 0, 1 ]);
            return _.multiply(C);
        };
        e.prototype.transformPoint = function(e, t) {
            var n = this.data;
            return [ n[0] * e + n[1] * t + n[3], n[4] * e + n[5] * t + n[7] ];
        };
        return e;
    })();
    (function(e) {
        e[e["None"] = 0] = "None";
        e[e["Link"] = 1] = "Link";
        e[e["Copy"] = 2] = "Copy";
        e[e["Move"] = 3] = "Move";
    })(et = tt || (tt = {}));
    (function(e) {
        e[e["None"] = 0] = "None";
        e[e["Link"] = 1] = "Link";
        e[e["Copy"] = 2] = "Copy";
        e[e["LinkCopy"] = 3] = "LinkCopy";
        e[e["Move"] = 4] = "Move";
        e[e["MoveLink"] = 5] = "MoveLink";
        e[e["MoveCopy"] = 6] = "MoveCopy";
        e[e["MoveCopyLink"] = 7] = "MoveCopyLink";
    })(nt = rt || (rt = {}));
    it = 0;
    at = [];
    ot = null;
    dt = null;
    lt = function(t) {
        this.id = ++it;
        this.pointerid = t;
        this.enabledOperations = nt.MoveCopyLink;
        this.operation = et.None;
        this.started = !1;
        this.beforeDrag = !0;
        this.local = !0;
        this.system = !1;
        this.ended = !1;
        this.cursor = null;
        this.overNode = e;
        this.targetCtx = null;
        this.dragView = e;
        this.startX = 0;
        this.startY = 0;
        this.distanceToStart = 10;
        this.x = 0;
        this.y = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.totalX = 0;
        this.totalY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.shift = !1;
        this.ctrl = !1;
        this.alt = !1;
        this.meta = !1;
        this.data = pn();
        if (t >= 0) ht[t] = this;
        at.push(this);
    };
    ct = "b-dragging";
    function wi() {
        var t;
        if (dt == e) {
            t = document.documentElement;
            t.classList.add(ct);
            dt = vr(Di);
        }
    }
    st = {
        render: function(e, t) {
            var n = e.data;
            t.tag = "div";
            t.style = {
                position: "absolute",
                left: n.x,
                top: n.y
            };
            t.children = n.dragView(n);
        }
    };
    function Si() {
        var e = "no-drop", t;
        if (at.length !== 0) {
            t = at[0];
            if (t.beforeDrag) return "";
            if (t.cursor != null) return t.cursor;
            if (t.system) return "";
            switch (t.operation) {
              case et.Move:
                e = "move";
                break;

              case et.Link:
                e = "alias";
                break;

              case et.Copy:
                e = "copy";
            }
        }
        return e;
    }
    ut = {
        render: function(e, t) {
            var n = [], r, i, a, o;
            for (r = 0; r < at.length; r++) {
                i = at[r];
                if (i.beforeDrag) continue;
                if (i.dragView != null && (i.x != 0 || i.y != 0)) {
                    n.push({
                        key: "" + i.id,
                        data: i,
                        component: st
                    });
                }
            }
            t.tag = "div";
            t.style = {
                position: "fixed",
                zIndex: 1e9,
                pointerEvents: "none",
                userSelect: "none",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            a = document.documentElement.style;
            o = Si();
            if (o) {
                if (a.cursor !== o) a.setProperty("cursor", o, "important");
            } else {
                a.setProperty("cursor", "");
            }
            t.children = n;
        },
        onDrag: function(e) {
            ie(e);
            return !1;
        }
    };
    function Di() {
        return {
            component: ut
        };
    }
    ft = lt.prototype;
    ft.setOperation = function(e) {
        this.operation = e;
    };
    ft.setDragNodeView = function(e) {
        this.dragView = e;
    };
    ft.addData = function(e, t) {
        this.data[e] = t;
        return !0;
    };
    ft.listData = function() {
        return Object.keys(this.data);
    };
    ft.hasData = function(t) {
        return this.data[t] !== e;
    };
    ft.getData = function(e) {
        return this.data[e];
    };
    ft.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    ft.cancelDnd = function() {
        Ni(e, this);
        this.destroy();
    };
    ft.destroy = function() {
        var e, t;
        this.ended = !0;
        if (this.started) Nr("onDragEnd", this);
        delete ht[this.pointerid];
        for (e = 0; e < at.length; e++) {
            if (at[e] === this) {
                at.splice(e, 1);
                break;
            }
        }
        if (ot === this) {
            ot = null;
        }
        if (at.length === 0 && dt != null) {
            yr(dt);
            dt = null;
            t = document.documentElement;
            t.classList.remove(ct);
            t.style.setProperty("cursor", "");
        }
    };
    ht = pn();
    function Ei(t, n, r) {
        var i, a, o, d, l;
        i = ht[t.id];
        if (i) {
            i.cancelDnd();
        }
        if (t.button <= 1) {
            i = new lt(t.id);
            i.startX = t.x;
            i.startY = t.y;
            i.lastX = t.x;
            i.lastY = t.y;
            i.overNode = r;
            Ii(i, t);
            a = wr(r, "onDragStart", i);
            if (a) {
                o = Wn(a.me);
                if (o == e) {
                    i.destroy();
                    return !1;
                }
                i.started = !0;
                d = o.getBoundingClientRect;
                if (d) {
                    l = d.call(o);
                    i.deltaX = l.left - t.x;
                    i.deltaY = l.top - t.y;
                }
                if (i.distanceToStart <= 0) {
                    i.beforeDrag = !1;
                    Ni(r, i);
                }
                wi();
            } else {
                i.destroy();
            }
        }
        return !1;
    }
    function Ni(t, n) {
        n.overNode = t;
        n.targetCtx = wr(t, "onDragOver", n);
        if (n.targetCtx == e) {
            n.operation = et.None;
        }
        Nr("onDrag", n);
    }
    function Ii(e, t) {
        e.shift = t.shift;
        e.ctrl = t.ctrl;
        e.alt = t.alt;
        e.meta = t.meta;
        e.x = t.x;
        e.y = t.y;
    }
    function Pi(e, t, n) {
        var r = ht[e.id];
        if (!r) return !1;
        r.totalX += Math.abs(e.x - r.lastX);
        r.totalY += Math.abs(e.y - r.lastY);
        if (r.beforeDrag) {
            if (r.totalX + r.totalY <= r.distanceToStart) {
                r.lastX = e.x;
                r.lastY = e.y;
                return !1;
            }
            r.beforeDrag = !1;
        }
        Ii(r, e);
        Ni(n, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function Ri(e, t, n) {
        var r, i;
        r = ht[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            Ii(r, e);
            Ni(n, r);
            i = r.targetCtx;
            if (i && wr(i.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            $e(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function Bi(e, t, n) {
        var r = ht[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function Ai(e, t) {
        var n;
        e.shift = t.shiftKey;
        e.ctrl = t.ctrlKey;
        e.alt = t.altKey;
        e.meta = t.metaKey;
        e.x = t.clientX;
        e.y = t.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        n = vi(e.x, e.y);
        Ni(n, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    pt = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function Oi(t, n, r) {
        var i, a, o, d, l, c, s, u, f, h, p, m, b, v, y, g, x, _, C, k, w;
        i = ot;
        if (i != null) {
            i.destroy();
        }
        a = Object.keys(ht);
        if (a.length > 0) {
            i = ht[a[0]];
            i.system = !0;
            ot = i;
        } else {
            o = t.clientX;
            d = t.clientY;
            i = new lt(-1);
            i.system = !0;
            ot = i;
            i.x = o;
            i.y = d;
            i.lastX = o;
            i.lastY = d;
            i.startX = o;
            i.startY = d;
            l = wr(r, "onDragStart", i);
            if (l) {
                c = Wn(l.me);
                if (c == e) {
                    i.destroy();
                    return !1;
                }
                i.started = !0;
                s = c.getBoundingClientRect;
                if (s) {
                    u = s.call(c);
                    i.deltaX = u.left - o;
                    i.deltaY = u.top - d;
                }
                wi();
            } else {
                i.destroy();
                return !1;
            }
        }
        i.beforeDrag = !1;
        f = pt[i.enabledOperations];
        h = t.dataTransfer;
        h.effectAllowed = f;
        if (h.setDragImage) {
            p = document.createElement("div");
            p.style.pointerEvents = "none";
            h.setDragImage(p, 0, 0);
        } else {
            m = t.target.style;
            b = m.opacity;
            v = m.width;
            y = m.height;
            g = m.padding;
            m.opacity = "0";
            m.width = "0";
            m.height = "0";
            m.padding = "0";
            A(function() {
                m.opacity = b;
                m.width = v;
                m.height = y;
                m.padding = g;
            }, 0);
        }
        x = i.data;
        _ = Object.keys(x);
        for (C = 0; C < _.length; C++) {
            try {
                k = _[C];
                w = x[k];
                if (!ln(w)) w = JSON.stringify(w);
                t.dataTransfer.setData(k, w);
            } catch (e) {}
        }
        Ai(i, t);
        return !1;
    }
    function Fi(e, t) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][t];
    }
    function Ti(t, n, r) {
        var i, a, o, d, l, c, s;
        i = ot;
        if (i == e) {
            i = new lt(-1);
            i.system = !0;
            ot = i;
            i.x = t.clientX;
            i.y = t.clientY;
            i.startX = i.x;
            i.startY = i.y;
            i.local = !1;
            a = t.dataTransfer;
            o = 0;
            d = e;
            try {
                d = a.effectAllowed;
            } catch (e) {}
            for (;o < 7; o++) {
                if (pt[o] === d) break;
            }
            i.enabledOperations = o;
            l = a.types;
            if (l) {
                for (c = 0; c < l.length; c++) {
                    s = l[c];
                    if (s === "text/plain") s = "Text"; else if (s === "text/uri-list") s = "Url";
                    i.data[s] = null;
                }
            } else {
                if (a.getData("Text") !== e) i.data["Text"] = null;
            }
        }
        Ai(i, t);
        Fi(t, i.operation);
        if (i.operation != et.None) {
            Ir(t);
            return !0;
        }
        return !1;
    }
    function ji(e, t, n) {
        var r, i, a;
        r = e.clientX;
        i = e.clientY;
        a = Or();
        if (ot != null && (r === 0 && i === 0 || r < 0 || i < 0 || r >= a.width || i >= a.height)) {
            ot.x = 0;
            ot.y = 0;
            ot.operation = et.None;
            Nr("onDrag", ot);
        }
        return !0;
    }
    function Mi(e, t, n) {
        if (ot != null) {
            ot.destroy();
        }
        return !1;
    }
    function Ui(t, n, r) {
        var i, a, o, d, l, c, s;
        i = ot;
        if (i == e) return !1;
        i.x = t.clientX;
        i.y = t.clientY;
        if (!i.local) {
            a = Object.keys(i.data);
            o = t.dataTransfer;
            for (d = 0; d < a.length; d++) {
                l = a[d];
                if (l === "Files") {
                    c = [].slice.call(o.files, 0);
                } else {
                    c = o.getData(l);
                }
                i.data[l] = c;
            }
        }
        Ai(i, t);
        s = i.targetCtx;
        if (s && wr(s.me, "onDrop", i)) {
            Fi(t, i.operation);
            i.destroy();
            Ir(t);
        } else {
            i.cancelDnd();
        }
        return !0;
    }
    function Hi(e, t, n) {
        Ir(e);
        return !0;
    }
    function Vi(e, t, n) {
        if (at.length === 0) return !1;
        Ir(e);
        return !0;
    }
    rr("!PointerDown", 4, Ei);
    rr("!PointerMove", 4, Pi);
    rr("!PointerUp", 4, Ri);
    rr("!PointerCancel", 4, Bi);
    rr("selectstart", 4, Vi);
    rr("dragstart", 5, Oi);
    rr("dragover", 5, Ti);
    rr("dragend", 5, Mi);
    rr("drag", 5, ji);
    rr("drop", 5, Ui);
    rr("dragenter", 5, Hi);
    rr("dragleave", 5, Hi);
    mt = function() {
        return at;
    };
    (function(e) {
        e[e["Push"] = 0] = "Push";
        e[e["Replace"] = 1] = "Replace";
        e[e["Pop"] = 2] = "Pop";
    })(bt || (bt = {}));
    vt = -1;
    function Li() {
        if (vt >= 0) clearTimeout(vt);
        vt = -1;
        ie();
        return !1;
    }
    rr("hashchange", 10, Li);
    pn();
    function Ki() {
        return e;
    }
    yt = pn();
    gt = pn();
    xt = pn();
    pn();
    _t = pn();
    pn();
    Ct = [];
    kt = [];
    wt = pn();
    St = "";
    Dt = !1;
    Et = null;
    Nt = 0;
    It = lr(zi);
    Pt = /\:|\ |\>/;
    function Wi(e) {
        var t, n;
        t = Pt.exec(e);
        if (!t) return yt[e].name;
        n = t.index;
        return yt[e.substring(0, n)].name + e.substring(n);
    }
    function Xi(e, t) {
        var n = "", r;
        if (e) {
            if (s(e)) {
                for (r = 0; r < e.length; r++) {
                    if (r > 0) {
                        n += ",";
                    }
                    n += "." + Wi(e[r]) + "." + t;
                }
            } else {
                n = "." + Wi(e) + "." + t;
            }
        } else {
            n = "." + t;
        }
        return n;
    }
    function Yi(t, n, r, i) {
        var a, o, d, l, c, u;
        if (ln(r)) {
            a = yt[r];
            if (a === e) {
                throw new Error("Unknown style " + r);
            }
            Yi(t, n, a.style, a.pseudo);
        } else if (sn(r)) {
            r(t, n);
        } else if (s(r)) {
            for (o = 0; o < r.length; o++) {
                Yi(t, n, r[o], e);
            }
        } else if (typeof r === "object") {
            for (c in r) {
                if (!p.call(r, c)) continue;
                d = r[c];
                if (sn(d)) {
                    d = d(t, c);
                }
                t[c] = d;
            }
        }
        if (i != e && n != e) {
            for (u in i) {
                l = n[u];
                if (l === e) {
                    l = pn();
                    n[u] = l;
                }
                Yi(l, e, i[u], e);
            }
        }
    }
    Rt = 0;
    Bt = "";
    At = 1;
    Ot = !1;
    Ft = !0;
    function zi() {
        var t, n, a, o, d, l, c, s, u, f, h, p, m, b, v, y, g, x, _, C, k, w, S, D, E, N, I, P, R, B, A, O, F, T, j, M, U, H, V, L, K, W, X, Y, z, $;
        if (Ot && Rt != Or().dppx) {
            Rt = Or().dppx;
            t = Ht;
            n = 1;
            if (Rt > 1) {
                for (a = 0; a < Vt.length; a++) {
                    if (a == Vt.length - 1 || Vt[a][1] >= Rt) {
                        t = Vt[a][0];
                        n = Vt[a][1];
                    } else break;
                }
            }
            if (Bt != t) {
                Bt = t;
                At = n;
                Dt = !0;
                Ft = !0;
            }
        }
        if (Dt) {
            if (Ot) {
                o = wt[Bt];
                if (o === e) {
                    o = null;
                    wt[Bt] = o;
                    Ji(Bt, function(e) {
                        wt[Bt] = e;
                        Gi();
                    });
                }
                if (o != null) {
                    for (d = 0; d < kt.length; d++) {
                        l = kt[d];
                        c = l.color;
                        if (!ln(c)) c = c();
                        if (Ft || c !== l.lastColor) {
                            l.lastColor = c;
                            s = l.width * At | 0;
                            u = l.height * At | 0;
                            f = Zi(o, c, s, u, l.left * At | 0, l.top * At | 0);
                            h = yt[l.styleId];
                            h.style = {
                                backgroundImage: "url(" + f + ")",
                                width: l.width,
                                height: l.height,
                                backgroundPosition: 0,
                                backgroundSize: "100%"
                            };
                        }
                    }
                    if (Ft) {
                        p = o.width / At;
                        m = o.height / At;
                        for (Y in _t) {
                            b = _t[Y];
                            if (b.color !== e) continue;
                            h = yt[b.styleId];
                            v = b.width;
                            y = b.height;
                            g = 100 * p / v;
                            x = 100 * m / y;
                            h.style = {
                                backgroundImage: "url(" + Bt + ")",
                                width: v,
                                height: y,
                                backgroundPosition: 100 * b.left / (p - v) + "% " + 100 * b.top / (m - y) + "%",
                                backgroundSize: g + "% " + x + "%"
                            };
                        }
                    }
                    Ft = !1;
                }
            }
            for (_ = 0; _ < Ct.length; _++) {
                l = Ct[_];
                C = wt[l.url];
                if (C == e) continue;
                c = l.color();
                if (c !== l.lastColor) {
                    l.lastColor = c;
                    if (l.width == e) l.width = C.width;
                    if (l.height == e) l.height = C.height;
                    f = Zi(C, c, l.width, l.height, l.left, l.top);
                    h = yt[l.styleId];
                    h.style = {
                        backgroundImage: "url(" + f + ")",
                        width: l.width,
                        height: l.height,
                        backgroundPosition: 0
                    };
                }
            }
            k = St;
            for (z in gt) {
                w = gt[z];
                k += "@keyframes " + w.name + " {";
                for ($ in w.def) {
                    S = w.def[$];
                    D = pn();
                    Yi(D, e, S, e);
                    xn(D);
                    k += $ + ($ == "from" || $ == "to" ? "" : "%") + " {" + qi(D) + "}\n";
                }
                k += "}\n";
            }
            for (z in yt) {
                E = yt[z];
                N = E.parent;
                I = E.name;
                P = E.pseudo;
                R = E.style;
                if (sn(R) && R.length === 0) {
                    B = i(R(), 2), R = B[0], P = B[1];
                }
                if (ln(R) && P == e) {
                    E.realName = R;
                    continue;
                }
                E.realName = I;
                A = pn();
                O = pn();
                Yi(e, O, e, P);
                Yi(A, O, R, e);
                F = null;
                if (A["pointerEvents"]) {
                    F = pn();
                    F["pointerEvents"] = A["pointerEvents"];
                }
                E.inlStyle = F;
                xn(A);
                T = qi(A);
                if (T.length > 0) k += (I == e ? N : Xi(N, I)) + " {" + T + "}\n";
                for ($ in O) {
                    S = O[$];
                    xn(S);
                    k += (I == e ? N + ":" + $ : Xi(N, I + ":" + $)) + " {" + qi(S) + "}\n";
                }
            }
            for (z in xt) {
                j = xt[z];
                k += "@media " + z + "{";
                try {
                    for (M = (L = void 0, r(j)), U = M.next(); !U.done; U = M.next()) {
                        H = U.value;
                        for ($ in H) {
                            S = H[$];
                            V = pn();
                            Yi(V, e, S, e);
                            xn(V);
                            k += "." + $ + " {" + qi(V) + "}\n";
                        }
                    }
                } catch (e) {
                    L = {
                        error: e
                    };
                } finally {
                    try {
                        if (U && !U.done && (K = M.return)) K.call(M);
                    } finally {
                        if (L) throw L.error;
                    }
                }
                k += "}\n";
            }
            W = document.createElement("style");
            W.type = "text/css";
            if (W.styleSheet) {
                W.styleSheet.cssText = k;
            } else {
                W.appendChild(document.createTextNode(k));
            }
            X = document.head || document.getElementsByTagName("head")[0];
            if (Et != null) {
                X.replaceChild(W, Et);
            } else {
                X.appendChild(W);
            }
            Et = W;
            Dt = !1;
        }
        It();
    }
    Tt = /([A-Z])/g;
    jt = /^ms-/;
    function $i(e) {
        if (e === "cssFloat") return "float";
        return e.replace(Tt, "-$1").toLowerCase().replace(jt, "-ms-");
    }
    function qi(t) {
        var n = "", r, i;
        for (i in t) {
            r = t[i];
            if (r === e) continue;
            n += $i(i) + ":" + (r === "" ? '""' : r) + ";";
        }
        n = n.slice(0, -1);
        return n;
    }
    function Qi(t, n, r) {
        yt["b-" + Nt++] = {
            name: null,
            realName: null,
            parent: t,
            style: n,
            inlStyle: e,
            pseudo: r
        };
        Gi();
    }
    function Gi() {
        Dt = !0;
        ie();
    }
    Mt = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Zi(e, t, n, r, i, a) {
        var o, d, l, c, s, u, f, h, p, m, b, v;
        o = document.createElement("canvas");
        o.width = n;
        o.height = r;
        d = o.getContext("2d");
        d.drawImage(e, -i, -a);
        l = d.getImageData(0, 0, n, r);
        c = l.data;
        s = Mt.exec(t);
        if (s) {
            u = parseInt(s[1], 10);
            f = parseInt(s[2], 10);
            h = parseInt(s[3], 10);
            p = Math.round(parseFloat(s[4]) * 255);
        } else {
            u = parseInt(t.substr(1, 2), 16);
            f = parseInt(t.substr(3, 2), 16);
            h = parseInt(t.substr(5, 2), 16);
            p = parseInt(t.substr(7, 2), 16) || 255;
        }
        if (p === 255) {
            for (m = 0; m < c.length; m += 4) {
                b = c[m];
                if (b === c[m + 1] && b === c[m + 2] && (b === 128 || c[m + 3] < 255 && b > 112)) {
                    c[m] = u;
                    c[m + 1] = f;
                    c[m + 2] = h;
                }
            }
        } else {
            for (m = 0; m < c.length; m += 4) {
                b = c[m];
                v = c[m + 3];
                if (b === c[m + 1] && b === c[m + 2] && (b === 128 || v < 255 && b > 112)) {
                    if (v === 255) {
                        c[m] = u;
                        c[m + 1] = f;
                        c[m + 2] = h;
                        c[m + 3] = p;
                    } else {
                        v = v * (1 / 255);
                        c[m] = Math.round(u * v);
                        c[m + 1] = Math.round(f * v);
                        c[m + 2] = Math.round(h * v);
                        c[m + 3] = Math.round(p * v);
                    }
                }
            }
        }
        d.putImageData(l, 0, 0);
        return o.toDataURL();
    }
    Ut = !1;
    function Ji(e, t) {
        var n = new Image();
        n.crossOrigin = Ut ? "use-credentials" : "anonymous";
        n.addEventListener("load", function() {
            return t(n);
        });
        n.src = e;
    }
    Ht = window["bobrilBPath"] || "bundle.png";
    Vt = window["bobrilBPath2"] || [];
    Qi("html." + ct + " *", {
        cursor: "inherit !important",
        userSelect: "none !important"
    });
    function ea(t) {
        return function(n, r) {
            if (r !== e) {
                if (n == e) n = {};
                n.children = r;
            }
            return {
                data: n,
                component: t
            };
        };
    }
    if (!window.b) window.b = {
        deref: Hn,
        getRoots: gr,
        setInvalidate: br,
        invalidateStyles: Gi,
        ignoreShouldChange: mr,
        setAfterFrame: cr,
        setBeforeFrame: lr,
        getDnds: mt,
        setBeforeInit: kr
    };
    function ta(e, t) {
        var n, r, i;
        if (h(e, t)) {
            return !0;
        }
        if (!un(e) || !un(t)) {
            return !1;
        }
        n = Object.keys(e);
        r = Object.keys(t);
        if (n.length !== r.length) {
            return !1;
        }
        for (i = 0; i < n.length; i++) {
            if (!p.call(t, n[i]) || !h(e[n[i]], t[n[i]])) {
                return !1;
            }
        }
        return !0;
    }
    new Map();
    (function(e) {
        e[e["NotHandled"] = 0] = "NotHandled";
        e[e["HandledPreventDefault"] = 1] = "HandledPreventDefault";
        e[e["HandledButRunDefault"] = 2] = "HandledButRunDefault";
        e[e["NotHandledPreventDefault"] = 3] = "NotHandledPreventDefault";
    })(Lt = Kt || (Kt = {}));
    Wt = function() {
        function t(t, n) {
            this.data = t;
            this.me = n;
            this.cfg = e;
            this.refs = e;
        }
        return t;
    }();
    (function(e) {
        n(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this;
        }
        t.prototype.shouldChange = function(e, t) {
            return !ta(e, t);
        };
        return t;
    })(Wt);
    function na(t) {
        var n, r, i, a, o;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            o = a.postInitDom;
            if (o !== e) {
                o.call(a, t);
            }
        }
    }
    function ra(t) {
        var n, r, i, a, o;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            o = a.postUpdateDom;
            if (o !== e) {
                o.call(a, t);
            }
        }
    }
    function ia(t) {
        var n, r, i, a, o;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            o = a.postUpdateDomEverytime;
            if (o !== e) {
                o.call(a, t);
            }
        }
    }
    Xt = function() {
        function t() {}
        t.prototype.detectChange = function(t) {
            var n = !1, r, i, a;
            if (t != e) {
                r = this.deps;
                if (r == e) {
                    n = !0;
                } else {
                    i = t.length;
                    if (i != r.length) n = !0; else {
                        for (a = 0; a < i; a++) {
                            if (!h(t[a], r[a])) {
                                n = !0;
                                break;
                            }
                        }
                    }
                }
            } else n = !0;
            this.deps = t;
            return n;
        };
        return t;
    }();
    (function(e) {
        n(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this;
        }
        t.prototype.memoize = function(e, t) {
            if (this.detectChange(t)) {
                this.current = e();
            }
            return this.current;
        };
        return t;
    })(Xt);
    Yt = [];
    function aa() {
        var e, t, n;
        e = Yt;
        Yt = [];
        for (t = 0, n = e.length; t < n; t++) {
            e[t]();
        }
    }
    zt = function(t) {
        n(r, t);
        function r() {
            return t !== null && t.apply(this, arguments) || this;
        }
        r.prototype.update = function(e, t) {
            this.callback = e;
            if (this.detectChange(t)) {
                this.doRun();
            }
        };
        r.prototype.doRun = function() {
            Yt.push(this.run);
        };
        r.prototype.run = function() {
            var t = this.callback;
            if (t != e) {
                this.dispose();
                this.lastDisposer = t();
            }
        };
        r.prototype.dispose = function() {
            this.callback = e;
            if (sn(this.lastDisposer)) this.lastDisposer();
            this.lastDisposer = e;
        };
        return r;
    }(Xt);
    (function(e) {
        n(t, e);
        function t() {
            var t = e.call(this) || this;
            t.shouldRun = !1;
            return t;
        }
        t.prototype.postInitDom = function(e) {
            this.postUpdateDomEverytime(e);
        };
        t.prototype.postUpdateDomEverytime = function(e) {
            if (this.shouldRun) {
                this.shouldRun = !1;
                this.run();
                if (e[j] > L) {
                    fr();
                }
            }
        };
        t.prototype.doRun = function() {
            this.shouldRun = !0;
        };
        return t;
    })(zt);
    $t = function() {
        function e() {}
        return e;
    }();
    qt = function() {
        function e() {}
        return e;
    }();
    Cr(function() {
        return "hello";
    });
}).call(this);

