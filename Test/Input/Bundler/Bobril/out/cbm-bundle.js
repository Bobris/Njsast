(function(e) {
    "use strict";
    var t, n, r, i, a, o, d, l, c, s, u, f, h, p, v, m, b, g, y, x, _, C, w, k, S, D, E, N, I, P, R, A, B, O, F, T, j, M, U, V, H, L, K, W, X, Y, z, $, Q, q, G, Z, J, ee, te, ne, re, ie, ae, oe, de, le, ce, se, ue, fe, he, pe, ve, me, be, ge, ye, xe, _e, Ce, we, ke, Se, De, Ee, Ne, Ie, Pe, Re, Ae, Be, Oe, Fe, Te, je, Me, Ue, Ve, He, Le, Ke, We, Xe, Ye, ze, $e, Qe, qe, Ge, Ze, Je, et, tt, nt, rt, it, at, ot, dt, lt, ct, st, ut, ft, ht, pt, vt, mt, bt, gt, yt, xt, _t, Ct, wt, kt, St, Dt, Et, Nt, It, Pt, Rt, At, Bt, Ot, Ft, Tt, jt, Mt, Ut, Vt, Ht, Lt, Kt, Wt, Xt, Yt, zt, $t;
    t = function(e) {
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
    n = function(e, t) {
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
    r = 1;
    i = 2;
    a = 4;
    o = 8;
    d = 16;
    l = Array.isArray;
    c = l;
    s = {};
    function Qt(e) {
        return document.createTextNode(e);
    }
    function qt(e) {
        return document.createElement(e);
    }
    function Gt(t) {
        return t === null ? e : t;
    }
    function Zt(e) {
        return typeof e == "number";
    }
    function Jt(e) {
        return typeof e == "string";
    }
    function en(e) {
        return typeof e == "boolean";
    }
    function tn(e) {
        return typeof e == "function";
    }
    function nn(e) {
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
    u = Object.prototype.hasOwnProperty;
    f = Object.assign;
    function rn(e, t, n) {
        if (!e[t]) {
            Object.defineProperty(e, t, {
                value: n,
                configurable: !0,
                writable: !0
            });
        }
    }
    rn(Array.prototype, "find", function(e) {
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
    rn(Array.prototype, "findIndex", function(e) {
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
    rn(Array.prototype, "some", function(e) {
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
    rn(String.prototype, "includes", function(e, t) {
        if (!Zt(t)) t = 0;
        if (t + e.length > this.length) {
            return !1;
        } else {
            return this.indexOf(e, t) !== -1;
        }
    });
    rn(String.prototype, "startsWith", function(e, t) {
        return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
    });
    rn(String.prototype, "endsWith", function(e, t) {
        var n, r;
        n = this.toString();
        if (!Zt(t) || !isFinite(t) || Math.floor(t) !== t || t > n.length) {
            t = n.length;
        }
        t -= e.length;
        r = n.indexOf(e, t);
        return r !== -1 && r === t;
    });
    h = !1;
    p = !1;
    v = [];
    m = [];
    b = function(e, t, n, r) {
        if (n !== r) e[ve] = n;
    };
    function an(e) {
        var t = b;
        b = e;
        return t;
    }
    function on() {
        return Object.create(null);
    }
    g = [ "Webkit", "Moz", "ms", "O" ];
    y = document.createElement("div").style;
    function dn(e) {
        return Jt(y[e]);
    }
    x = new Map();
    _ = {
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
    function ln(t) {
        return function(n, r, i) {
            n[t] = r;
            n[i] = e;
        };
    }
    function cn(t) {
        return function(n, r, i) {
            if (Zt(r)) {
                n[t] = r + "px";
            } else {
                n[t] = r;
            }
            n[i] = e;
        };
    }
    function sn(e, t, n) {
        if (Zt(t)) e[n] = t + "px";
    }
    function un() {
        return document.documentMode;
    }
    function fn(t) {
        var n, r, i, a, o, d, l, c;
        n = Object.keys(t);
        for (r = 0, i = n.length; r < i; r++) {
            a = n[r];
            o = x.get(a);
            d = t[a];
            if (d === e) continue;
            if (o === e) {
                if (dn(a)) {
                    o = _[a] === !0 ? Oi : sn;
                } else {
                    l = a.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (c = 0; c < g.length; c++) {
                        if (dn(g[c] + l)) {
                            o = (_[a] === !0 ? ln : cn)(g[c] + l);
                            break;
                        }
                    }
                    if (o === e) {
                        o = _[a] === !0 ? Oi : sn;
                    }
                }
                x.set(a, o);
            }
            o(t, d, a);
        }
    }
    function hn(e, t) {
        e[t] = "";
    }
    function pn(e, t, n) {
        var r;
        if (Jt(n)) {
            r = n.length;
            if (r > 11 && n.substr(r - 11, 11) === " !important") {
                e.setProperty(Ui(t), n.substr(0, r - 11), "important");
                return;
            }
        }
        e[t] = n;
    }
    function vn(t, n, r) {
        var i, a, o;
        i = t.style;
        if (nn(n)) {
            fn(n);
            if (nn(r)) {
                for (a in r) {
                    if (r[a] === e) continue;
                    if (n[a] === e) hn(i, a);
                }
                for (a in n) {
                    o = n[a];
                    if (o !== e) {
                        if (r[a] !== o) pn(i, a, o);
                    } else if (r[a] !== e) {
                        hn(i, a);
                    }
                }
            } else {
                if (r) i.cssText = "";
                for (a in n) {
                    o = n[a];
                    if (o !== e) pn(i, a, o);
                }
            }
        } else if (n) {
            i.cssText = n;
        } else {
            if (nn(r)) {
                for (a in r) {
                    hn(i, a);
                }
            } else if (r) {
                i.cssText = "";
            }
        }
    }
    function mn(e, t) {
        if (h) e.setAttribute("class", t); else e.className = t;
    }
    C = /^input$|^select$|^textarea$|^button$/;
    w = "tabindex";
    function bn(t, n) {
        if (t == e) return !1;
        if (C.test(t)) return !0;
        if (t === "a" && n != null && n.href != null) return !0;
        return !1;
    }
    function gn(t, n, r, i, a) {
        var o = !1, d, l, c, s, u;
        if (r != null) for (d in r) {
            l = r[d];
            c = i[d];
            if (a && d === w) {
                l = -1;
                o = !0;
            } else if (d === ve && !h) {
                if (tn(l)) {
                    i[fe] = l;
                    l = l();
                }
                s = c;
                u = l;
                i[d] = l;
                continue;
            }
            if (c !== l) {
                i[d] = l;
                if (h) {
                    if (d === "href") n.setAttributeNS("http://www.w3.org/1999/xlink", "href", l); else n.setAttribute(d, l);
                } else if (d in n && !(d === "list" || d === "form")) {
                    n[d] = l;
                } else n.setAttribute(d, l);
            }
        }
        if (a && !o && bn(t.tag, r)) {
            n.setAttribute(w, "-1");
            i[w] = -1;
        }
        if (r == e) {
            for (d in i) {
                if (i[d] !== e) {
                    if (a && d === w) continue;
                    if (d === fe) continue;
                    i[d] = e;
                    n.removeAttribute(d);
                }
            }
        } else {
            for (d in i) {
                if (i[d] !== e && !(d in r)) {
                    if (a && d === w) continue;
                    if (d === fe) continue;
                    i[d] = e;
                    n.removeAttribute(d);
                }
            }
        }
        if (u !== e) {
            b(n, t, u, s);
        }
        return i;
    }
    function yn(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postInitDom;
            if (n) {
                v.push(n);
                m.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & r) {
                v.push(Yi);
                m.push(e);
            }
        }
    }
    function xn(e) {
        var t, n, r;
        t = e.component;
        if (t) {
            n = t.postUpdateDom;
            if (n) {
                v.push(n);
                m.push(e);
            }
            r = e.ctx.$hookFlags || 0;
            if (r & i) {
                v.push(zi);
                m.push(e);
            }
            n = t.postUpdateDomEverytime;
            if (n) {
                v.push(n);
                m.push(e);
            }
            if (r & a) {
                v.push($i);
                m.push(e);
            }
        }
    }
    function _n(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postUpdateDomEverytime;
            if (n) {
                v.push(n);
                m.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & a) {
                v.push($i);
                m.push(e);
            }
        }
    }
    function Cn(t) {
        var n;
        while (t) {
            n = t.cfg;
            if (n !== e) break;
            if (t.ctx !== e && t.component !== s) {
                n = t.ctx.cfg;
                break;
            }
            t = t.parent;
        }
        return n;
    }
    function wn(t, n) {
        var r, i;
        if (t === e) return;
        if ("current" in t) {
            t.current = n;
        } else if (tn(t)) {
            t(n);
        } else if (l(t)) {
            r = t[0];
            i = r.refs;
            if (i === e) {
                i = on();
                r.refs = i;
            }
            i[t[1]] = n;
        }
    }
    k = [];
    S = null;
    function kn(t, n, r, i) {
        var a, o, d, l, c, s, u, f, v, m, b, g, y, x, _, C;
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
        o = h;
        d = p;
        l = a.component;
        wn(a.ref, a);
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
            c.cfg = t.cfg === e ? Cn(n) : t.cfg;
            a.ctx = c;
            Wt = c;
            if (l.init) {
                l.init(c, a);
            }
            if (z !== Y) z(t, W.Create);
            if (l.render) {
                l.render(c, a);
            }
            Wt = e;
        } else {}
        s = a.tag;
        if (s === "-") {
            a.tag = e;
            a.children = e;
            return a;
        } else if (s === "@") {
            r = a.data;
            E.set(r, a);
            i = null;
            s = e;
        }
        u = a.children;
        f = !1;
        if (Zt(u)) {
            u = "" + u;
            a.children = u;
        }
        if (s === e) {
            if (Jt(u)) {
                v = Qt(u);
                a.element = v;
                r.insertBefore(v, i);
            } else {
                Dn(a, r, i);
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(a.ctx, a);
                }
                yn(a);
            }
            return a;
        }
        if (s === "/") {
            m = u;
            if (m === "") {} else if (i == e) {
                b = r.lastChild;
                r.insertAdjacentHTML("beforeend", m);
                a.element = [];
                if (b) {
                    b = b.nextSibling;
                } else {
                    b = r.firstChild;
                }
                while (b) {
                    a.element.push(b);
                    b = b.nextSibling;
                }
            } else {
                v = i;
                g = i.previousSibling;
                y = !1;
                x = r;
                if (!v.insertAdjacentHTML) {
                    v = x.insertBefore(qt("i"), v);
                    y = !0;
                }
                v.insertAdjacentHTML("beforebegin", m);
                if (g) {
                    g = g.nextSibling;
                } else {
                    g = x.firstChild;
                }
                _ = [];
                while (g !== v) {
                    _.push(g);
                    g = g.nextSibling;
                }
                a.element = _;
                if (y) {
                    x.removeChild(v);
                }
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(a.ctx, a);
                }
                yn(a);
            }
            return a;
        }
        if (h || s === "svg") {
            v = document.createElementNS("http://www.w3.org/2000/svg", s);
            f = s === "foreignObject";
            h = !f;
        } else {
            v = qt(s);
        }
        r.insertBefore(v, i);
        a.element = v;
        Dn(a, v, null);
        if (l) {
            if (l.postRender) {
                l.postRender(a.ctx, a);
            }
        }
        if (p && S === a) p = !1;
        if (f) h = !0;
        if (a.attrs || p) a.attrs = gn(a, v, a.attrs, {}, p);
        if (a.style) vn(v, a.style, e);
        C = a.className;
        if (C) mn(v, C);
        h = o;
        p = d;
        yn(a);
        return a;
    }
    function Sn(t) {
        if (t === !1 || t === !0 || t === null) return e;
        if (Jt(t)) {
            return {
                children: t
            };
        }
        if (Zt(t)) {
            return {
                children: "" + t
            };
        }
        return t;
    }
    function Dn(e, t, n) {
        var r, i, a;
        r = e.children;
        if (Jt(r)) {
            t.textContent = r;
            return;
        }
        i = [];
        Xn(i, r);
        for (a = 0; a < i.length; a++) {
            i[a] = kn(i[a], e, t, n);
        }
        e.children = i;
    }
    function En(t) {
        var n, r, i, a, o, d, c, s;
        wn(t.ref, e);
        n = t.children;
        if (l(n)) {
            for (r = 0, i = n.length; r < i; r++) {
                En(n[r]);
            }
        }
        a = t.component;
        if (a) {
            o = t.ctx;
            Wt = o;
            if (z !== Y) z(t, W.Destroy);
            if (a.destroy) a.destroy(o, t, t.element);
            d = o.disposables;
            if (l(d)) {
                for (c = d.length; c-- > 0; ) {
                    s = d[c];
                    if (tn(s)) s(o); else s.dispose();
                }
            }
            Wt = e;
        }
        if (t.tag === "@") {
            E.delete(t.data);
            Nn(t);
        }
    }
    function Nn(e) {
        var t, n, r, i, a, o, d;
        t = e.element;
        if (l(t)) {
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
            if (l(a)) {
                for (o = 0, d = a.length; o < d; o++) {
                    Nn(a[o]);
                }
            }
        }
    }
    function In(e) {
        En(e);
        Nn(e);
    }
    D = on();
    E = new Map();
    function Pn(t, n, r, i) {
        var a, o, d, c, s;
        a = t.element;
        o = t.children;
        if (l(a)) {
            for (d = 0; d < a.length; d++) {
                if (a[d] === n) {
                    i.push(t);
                    if (l(o)) {
                        return o;
                    }
                    return null;
                }
            }
        } else if (a == e) {
            if (l(o)) {
                for (c = 0; c < o.length; c++) {
                    s = Pn(o[c], n, r, i);
                    if (s !== e) {
                        i.splice(r, 0, t);
                        return s;
                    }
                }
            }
        } else if (a === n) {
            i.push(t);
            if (l(o)) {
                return o;
            }
            return null;
        }
        return e;
    }
    function Rn(t) {
        var n = [], r, i, a, o, d, l, c, s, u, f, h, p, v;
        if (t == e) return n;
        r = Object.keys(D);
        i = r.map(function(e) {
            return D[e].e || document.body;
        });
        a = r.map(function(e) {
            return D[e].n;
        });
        E.forEach(function(e, t) {
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
                    f = Pn(s, c, n.length, n);
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
                v = l[h];
                f = Pn(v, c, n.length, n);
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
    function An(e) {
        var t, n;
        t = Rn(e);
        n = null;
        while (n === null) {
            n = t.pop();
        }
        return n;
    }
    function Bn(t, n, r) {
        if (r) {
            if (r.postRender) {
                Wt = n.ctx;
                r.postRender(Wt, t, n);
                Wt = e;
            }
        }
        n.data = t.data;
        xn(n);
    }
    function On(t, n, r) {
        var i, a;
        Wt = e;
        if (l(t.children)) {
            i = h;
            a = p;
            if (t.tag === "svg") {
                h = !0;
            } else if (h && t.tag === "foreignObject") h = !1;
            if (p && S === t) p = !1;
            Jn(t.children, t.element || n, t.element != null ? null : r);
            h = i;
            p = a;
        }
        _n(t);
    }
    function Fn(t, n, r, i, a, o) {
        var d, c = !1, u, v, m, b, g, y, x, _, C, w, k, D;
        d = t.component;
        u = n.ctx;
        if (d != null && u != null) {
            v = !1;
            if (u[O] >= U) {
                a = Math.max(a, u[F]);
                v = !0;
            }
            if (d.id !== n.component.id) {
                c = !0;
            } else {
                Wt = u;
                if (t.cfg !== e) u.cfg = t.cfg; else u.cfg = Cn(n.parent);
                if (d.shouldChange) if (!d.shouldChange(u, t, n) && !ee && !v) {
                    On(n, r, i);
                    return n;
                }
                u.data = t.data || {};
                n.component = d;
                if (z !== Y) z(t, o ? W.LocalUpdate : W.Update);
                if (d.render) {
                    n.orig = t;
                    t = f({}, t);
                    n.cfg = e;
                    if (t.cfg !== e) t.cfg = e;
                    d.render(u, t, n);
                    if (t.cfg !== e) {
                        if (n.cfg === e) n.cfg = t.cfg; else f(n.cfg, t.cfg);
                    }
                }
                Wt = e;
            }
        } else {
            if (n.orig === t && !ee) {
                On(n, r, i);
                return n;
            }
            n.orig = t;
        }
        m = t.children;
        b = n.children;
        g = t.tag;
        if (g === "-") {
            On(n, r, i);
            return n;
        }
        y = h;
        x = p;
        if (Zt(m)) {
            m = "" + m;
        }
        if (c || d != e && u == e || d == e && u != e && u.me.component !== s) {} else if (g === "/") {
            if (n.tag === "/" && b === m) {
                Bn(t, n, d);
                return n;
            }
        } else if (g === n.tag) {
            if (g === "@") {
                if (t.data !== n.data) {
                    _ = kn(t, n.parent, t.data, null);
                    In(n);
                    return _;
                }
                r = t.data;
                i = jn(n);
                if (i != null) i = i.nextSibling;
                g = e;
            }
            if (g === e) {
                if (Jt(m) && Jt(b)) {
                    if (m !== b) {
                        C = n.element;
                        C.textContent = m;
                        n.children = m;
                    }
                } else {
                    if (p && S === n) p = !1;
                    if (a <= 0) {
                        if (l(b)) Jn(n.children, r, i);
                    } else {
                        n.children = Yn(r, m, b, n, i, a - 1);
                    }
                    h = y;
                    p = x;
                }
                Bn(t, n, d);
                return n;
            } else {
                w = !1;
                if (g === "svg") {
                    h = !0;
                } else if (h && g === "foreignObject") {
                    w = !0;
                    h = !1;
                }
                if (p && S === n) p = !1;
                C = n.element;
                if (Jt(m) && !l(b)) {
                    if (m !== b) {
                        C.textContent = m;
                        b = m;
                    }
                } else {
                    if (a <= 0) {
                        if (l(b)) Jn(n.children, C, null);
                    } else {
                        b = Yn(C, m, b, n, null, a - 1);
                    }
                }
                n.children = b;
                if (w) h = !0;
                Bn(t, n, d);
                if (n.attrs || t.attrs || p) n.attrs = gn(n, C, t.attrs, n.attrs || {}, p);
                vn(C, t.style, n.style);
                n.style = t.style;
                k = t.className;
                if (k !== n.className) {
                    mn(C, k || "");
                    n.className = k;
                }
                h = y;
                p = x;
                return n;
            }
        }
        D = n.element;
        if (l(D)) D = D[0];
        if (D == e) D = r; else D = D.parentNode;
        _ = kn(t, n.parent, D, Tn(n));
        In(n);
        return _;
    }
    function Tn(t) {
        var n, r, i;
        if (t === e) return null;
        n = t.element;
        if (n != null) {
            if (l(n)) return n[0];
            return n;
        }
        r = t.children;
        if (!l(r)) return null;
        for (i = 0; i < r.length; i++) {
            n = Tn(r[i]);
            if (n) return n;
        }
        return null;
    }
    function jn(t) {
        var n, r, i;
        if (t === e) return null;
        n = t.element;
        if (n != null) {
            if (l(n)) return n[n.length - 1];
            return n;
        }
        r = t.children;
        if (!l(r)) return null;
        for (i = r.length; i-- > 0; ) {
            n = jn(r[i]);
            if (n) return n;
        }
        return null;
    }
    function Mn(t, n, r, i) {
        var a, o;
        while (++n < r) {
            a = t[n];
            if (a == e) continue;
            o = Tn(a);
            if (o != null) return o;
        }
        return i;
    }
    function Un() {
        var t, n, r;
        t = m.length;
        for (n = 0; n < t; n++) {
            r = m[n];
            Wt = r.ctx;
            v[n].call(r.component, Wt, r, r.element);
        }
        Wt = e;
        v = [];
        m = [];
    }
    function Vn(e, t, n, r, i, a, o) {
        t[n] = Fn(e, t[n], a, Mn(t, n, r, i), o);
    }
    function Hn(e, t, n) {
        var r, i, a;
        r = e.element;
        if (r != null) {
            if (l(r)) {
                for (i = 0; i < r.length; i++) {
                    t.insertBefore(r[i], n);
                }
            } else t.insertBefore(r, n);
            return;
        }
        a = e.children;
        if (!l(a)) return;
        for (i = 0; i < a.length; i++) {
            Hn(a[i], t, n);
        }
    }
    function Ln(e, t, n, r, i) {
        var a, o, d;
        a = Mn(e, t, n, r);
        o = e[t];
        d = Tn(o);
        if (d != null && d !== a) {
            Hn(o, i, a);
        }
    }
    function Kn(e, t, n, r, i, a, o) {
        var d, l, c;
        d = Mn(t, n, r, i);
        l = t[n];
        c = Tn(l);
        if (c != null && c !== d) {
            Hn(l, a, d);
        }
        t[n] = Fn(e, l, a, d, o);
    }
    function Wn(t, n) {
        var r, i;
        if (n == e) return;
        if (c(n)) {
            for (r = 0; r < n.length; r++) {
                Wn(t, n[r]);
            }
        } else {
            i = Sn(n);
            if (i !== e) t.push(i);
        }
    }
    function Xn(e, t) {
        Wn(e, t);
    }
    function Yn(t, n, r, i, a, o) {
        var d;
        if (r == e) r = [];
        if (!l(r)) {
            if (t.firstChild) t.removeChild(t.firstChild);
            r = [];
        }
        d = [];
        Xn(d, n);
        return zn(t, d, r, i, a, o);
    }
    function zn(t, n, r, i, a, o) {
        var d, l, c, s = 0, u = 0, f, h, p, v, m, b, g, y, x, _, C;
        d = n.length;
        l = r.length;
        c = l;
        while (s < d && u < c) {
            if (n[s].key === r[u].key) {
                Vn(n[s], r, u, l, a, t, o);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (n[d - 1].key === r[c - 1].key) {
                    d--;
                    c--;
                    Vn(n[d], r, c, l, a, t, o);
                    if (s < d && u < c) continue;
                }
                break;
            }
            if (s < d && u < c) {
                if (n[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    Kn(n[s], r, u, l, a, t, o);
                    s++;
                    u++;
                    continue;
                }
                if (n[d - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    d--;
                    Kn(n[d], r, c, l, a, t, o);
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
                r.splice(u, 0, kn(n[s], i, t, Mn(r, u - 1, l, a)));
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
                In(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = on();
        h = on();
        p = s;
        v = u;
        m = 0;
        for (;u < c; u++) {
            b = r[u];
            g = b.key;
            if (g != null) {
                f[g] = u;
            } else m--;
        }
        y = -m - m;
        for (;s < d; s++) {
            b = n[s];
            g = b.key;
            if (g != null) {
                h[g] = s;
            } else m++;
        }
        y += m;
        x = 0;
        s = p;
        u = v;
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
            g = n[s].key;
            if (g == e) {
                s++;
                while (s < d) {
                    g = n[s].key;
                    if (g != e) break;
                    s++;
                }
                if (g == e) break;
            }
            C = f[g];
            if (C === e) {
                r.splice(u, 0, kn(n[s], i, t, Mn(r, u - 1, l, a)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(_ in h)) {
                In(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                Vn(n[s], r, u, l, a, t, o);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                Kn(n[s], r, u, l, a, t, o);
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
                In(r[u]);
                r.splice(u, 1);
                c--;
                l--;
                continue;
            }
            u++;
        }
        while (s < d) {
            g = n[s].key;
            if (g != null) {
                r.splice(u, 0, kn(n[s], i, t, Mn(r, u - 1, l, a)));
                c++;
                l++;
                x++;
                u++;
            }
            s++;
        }
        if (!y) return r;
        y = y - Math.abs(m) >> 1;
        s = p;
        u = v;
        while (s < d) {
            if (u < c) {
                _ = r[u].key;
                if (_ != null) {
                    u++;
                    continue;
                }
            }
            g = n[s].key;
            if (s < c && g === r[s].key) {
                if (g != null) {
                    s++;
                    continue;
                }
                Vn(n[s], r, s, l, a, t, o);
                y--;
                s++;
                u = s;
                continue;
            }
            if (g != null) {
                if (y === 0 && m < 0) {
                    while (!0) {
                        In(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        m++;
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == e) u++;
                r[u].key;
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Ln(r, s, l, a, t);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Kn(n[s], r, s, l, a, t, o);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, kn(n[s], i, t, Mn(r, s - 1, l, a)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            In(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    N = !1;
    I = window.requestAnimationFrame;
    if (I) {
        I(function(e) {
            if (e === +e) N = !0;
        });
    }
    P = window.setTimeout;
    R = Date.now || function() {
        return new Date().getTime();
    };
    A = R();
    B = 0;
    function $n(e) {
        var t;
        if (N) {
            I(e);
        } else {
            t = 50 / 3 + B - R();
            if (t < 0) t = 0;
            P(function() {
                B = R();
                e(B - A);
            }, t);
        }
    }
    O = "$invalidated";
    F = "$deepness";
    T = !0;
    j = !1;
    M = !0;
    U = 0;
    V = {};
    function Qn(t, n, r) {
        var i;
        if (Xt == e) Xt = {};
        i = Xt[t] || [];
        i.push({
            priority: n,
            callback: r
        });
        Xt[t] = i;
    }
    function qn(e, t, n, r) {
        var i, a;
        i = V[e];
        if (i) for (a = 0; a < i.length; a++) {
            if (i[a](t, n, r)) return !0;
        }
        return !1;
    }
    H = !1;
    try {
        L = Object.defineProperty({}, "passive", {
            get: function() {
                H = !0;
            }
        });
        window.addEventListener("test", L, L);
        window.removeEventListener("test", L, L);
    } catch (e) {
        H = !1;
    }
    K = 0;
    function Gn(e, t) {
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
            i = An(r);
            K++;
            qn(t, n, r, i);
            K--;
            if (K == 0 && G) rr();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, i, H ? {
            capture: n,
            passive: !1
        } : n);
    }
    function Zn() {
        var t, n, r, i, a, o;
        if (Xt === e) return;
        t = Object.keys(Xt);
        for (n = 0; n < t.length; n++) {
            r = t[n];
            i = Xt[r];
            i = i.sort(function(e, t) {
                return e.priority - t.priority;
            });
            V[r] = i.map(function(e) {
                return e.callback;
            });
        }
        Xt = e;
        a = document.body;
        for (o = 0; o < t.length; o++) {
            Gn(a, t[o]);
        }
    }
    function Jn(t, n, r) {
        var i, a, o, d, c, s, u;
        i = t.length;
        for (a = 0; a < i; a++) {
            o = t[a];
            d = o.ctx;
            if (d != null && d[O] >= U) {
                t[a] = Fn(o.orig, o, n, Mn(t, a, i, r), d[F], !0);
            } else if (l(o.children)) {
                c = h;
                s = p;
                if (p && S === o) p = !1;
                if (o.tag === "svg") h = !0; else if (h && o.tag === "foreignObject") h = !1;
                u = o.element;
                if (u != e) {
                    Jn(o.children, u, null);
                } else {
                    Jn(o.children, n, Mn(t, a, i, r));
                }
                _n(o);
                h = c;
                p = s;
            }
        }
    }
    (function(e) {
        e[e["Create"] = 0] = "Create";
        e[e["Update"] = 1] = "Update";
        e[e["LocalUpdate"] = 2] = "LocalUpdate";
        e[e["Destroy"] = 3] = "Destroy";
    })(W = X || (X = {}));
    Y = function() {};
    z = Y;
    $ = function() {};
    Q = function() {};
    q = function() {};
    function er(e) {
        var t = $;
        $ = e;
        return t;
    }
    function tr(e) {
        var t = q;
        q = e;
        return t;
    }
    function nr(t, n, r) {
        var i, a, o;
        while (n != null) {
            if (t === n) return !0;
            i = n.parent;
            if (i == e) {
                for (a = 0; a < r.length; a++) {
                    o = D[r[a]];
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
    G = !1;
    function rr() {
        G = !1;
        ar(R() - A);
        Qi();
    }
    function ir(e) {
        j = !1;
        ar(e);
        ue(Qi);
    }
    Z = Xi({
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
    function ar(t) {
        var n, r, i, a, o, d, c, s, u, f;
        R();
        Zn();
        Q();
        U++;
        ee = J;
        J = !1;
        $();
        n = !1;
        if (T) {
            T = !1;
            n = !0;
        }
        K++;
        for (r = 0; r < 2; r++) {
            S = k.length === 0 ? null : k[k.length - 1];
            p = !1;
            Yt = Object.keys(D);
            for (i = 0; i < Yt.length; i++) {
                a = D[Yt[i]];
                if (!a) continue;
                o = a.n;
                d = null;
                for (c = i + 1; c < Yt.length; c++) {
                    s = D[Yt[c]];
                    if (s === e) continue;
                    d = Tn(s.n);
                    if (d != null) break;
                }
                if (S) p = !nr(S, a.p, Yt);
                if (a.e === e) a.e = document.body;
                if (o) {
                    if (n || o.ctx[O] >= U) {
                        u = Z(a);
                        Fn(u, o, a.e, d, n ? 1e6 : o.ctx[F]);
                    } else {
                        if (l(a.c)) Jn(a.c, a.e, d);
                    }
                } else {
                    u = Z(a);
                    o = kn(u, e, a.e, d);
                    a.n = o;
                }
                a.c = o.children;
            }
            Yt = e;
            Un();
            if (!G) break;
        }
        G = !1;
        K--;
        f = D["0"];
        q(f ? f.c : null);
        R();
    }
    J = !1;
    ee = !1;
    function or() {
        J = !0;
        te();
    }
    function dr(e) {
        var t = te;
        te = e;
        return t;
    }
    te = function(t, n) {
        if (t != null) {
            if (n == e) n = 1e6;
            if (t[O] !== U + 1) {
                t[O] = U + 1;
                t[F] = n;
            } else {
                if (n > t[F]) t[F] = n;
            }
        } else {
            T = !0;
        }
        if (j || M) return;
        j = !0;
        $n(ir);
    };
    ne = 0;
    function lr(t, n, r) {
        var i;
        ne++;
        i = "" + ne;
        D[i] = {
            f: t,
            e: n,
            c: [],
            p: r,
            n: e
        };
        if (Yt != null) {
            Yt.push(i);
        } else {
            fr();
        }
        return i;
    }
    function cr(e) {
        var t = D[e];
        if (!t) return;
        if (t.n) In(t.n);
        delete D[e];
    }
    function sr() {
        return D;
    }
    function ur() {
        M = !1;
        te();
    }
    re = ur;
    function fr() {
        M = !0;
        re();
        re = ur;
    }
    function hr(t, n) {
        cr("0");
        D["0"] = {
            f: t,
            e: n,
            c: [],
            p: e,
            n: e
        };
        fr();
    }
    function pr(e) {
        var t = re;
        re = function() {
            e(t);
        };
    }
    function vr(t, n, r) {
        var i, a, d, l, c, s, u, f, h, p;
        if (r == e) {
            r = {
                target: t
            };
        } else if (nn(r) && r.target == e) {
            r.target = t;
        }
        i = gr(n, r);
        if (i != e) return i;
        a = zt;
        while (t) {
            d = t.component;
            if (d) {
                l = t.ctx;
                zt = l;
                if (((l.$hookFlags || 0) & o) === o) {
                    c = l.$hooks;
                    for (s = 0, u = c.length; s < u; s++) {
                        f = c[s];
                        if (f instanceof Lt) {
                            h = f.events[n];
                            if (h !== e) {
                                p = +h.call(l, r);
                                if (p == Ut.HandledPreventDefault) {
                                    zt = a;
                                    return l;
                                }
                                if (p == Ut.HandledButRunDefault) {
                                    zt = a;
                                    return e;
                                }
                                if (p == Ut.NotHandledPreventDefault) {
                                    i = l;
                                }
                            }
                        }
                    }
                }
                h = d[n];
                if (h) {
                    p = +h.call(d, l, r);
                    if (p == Ut.HandledPreventDefault) {
                        zt = a;
                        return l;
                    }
                    if (p == Ut.HandledButRunDefault) {
                        zt = a;
                        return e;
                    }
                    if (p == Ut.NotHandledPreventDefault) {
                        i = l;
                    }
                }
                h = d.shouldStopBubble;
                if (h) {
                    if (h.call(d, l, n, r)) break;
                }
            }
            t = t.parent;
        }
        zt = a;
        return i;
    }
    function mr(t, n, r) {
        var i, a, d, c, s, u, f, h, p, v, m, b;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            d = zt;
            zt = a;
            if (((a.$hookFlags || 0) & o) === o) {
                c = a.$hooks;
                for (s = 0, u = c.length; s < u; s++) {
                    f = c[s];
                    if (f instanceof Lt) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == Ut.HandledPreventDefault) {
                                zt = d;
                                return a;
                            }
                            if (p == Ut.HandledButRunDefault) {
                                zt = d;
                                return e;
                            }
                            if (p == Ut.NotHandledPreventDefault) {
                                v = a;
                            }
                        }
                    }
                }
            }
            h = i[n];
            if (h) {
                p = +h.call(i, a, r);
                if (p == Ut.HandledPreventDefault) {
                    zt = d;
                    return a;
                }
                if (p == Ut.HandledButRunDefault) {
                    zt = d;
                    return e;
                }
                if (p == Ut.NotHandledPreventDefault) {
                    v = a;
                }
            }
            h = i.shouldStopBroadcast;
            if (h) {
                if (h.call(i, a, n, r)) {
                    zt = d;
                    return v;
                }
            }
            zt = d;
        }
        m = t.children;
        if (l(m)) {
            for (s = 0; s < m.length; s++) {
                b = mr(m[s], n, r);
                if (b != e) return b;
            }
        }
        return v;
    }
    function br(t, n, r) {
        var i, a, o, c, s, u, f, h, p, v, m, b;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            if (((a.$hookFlags || 0) & d) === d) {
                o = a.$hooks;
                c = zt;
                zt = a;
                for (s = 0, u = o.length; s < u; s++) {
                    f = o[s];
                    if (f instanceof Kt) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == Ut.HandledPreventDefault) {
                                zt = c;
                                return a;
                            }
                            if (p == Ut.HandledButRunDefault) {
                                zt = c;
                                return e;
                            }
                            if (p == Ut.NotHandledPreventDefault) {
                                v = a;
                            }
                        }
                    }
                }
                zt = c;
            }
        }
        m = t.children;
        if (l(m)) {
            for (s = 0, u = m.length; s < u; s++) {
                b = br(m[s], n, r);
                if (b != e) return b;
            }
        }
        return v;
    }
    function gr(t, n) {
        var r, i, a, o;
        r = Object.keys(D);
        for (i = 0; i < r.length; i++) {
            a = D[r[i]].n;
            if (a != null) {
                o = br(a, t, n);
                if (o != null) return o;
            }
        }
        return e;
    }
    function yr(t, n) {
        var r, i, a, o;
        r = gr(t, n);
        if (r != null) return r;
        i = Object.keys(D);
        for (a = 0; a < i.length; a++) {
            o = D[i[a]].n;
            if (o != null) {
                r = mr(o, t, n);
                if (r != null) return r;
            }
        }
        return e;
    }
    function xr(e) {
        var t = e.preventDefault;
        if (t) t.call(e); else e.returnValue = !1;
    }
    function _r(e) {
        var t, n;
        e = e.slice(0);
        for (t = 0; t < e.length; t++) {
            n = e[t];
            if (l(n)) {
                e[t] = _r(n);
            } else if (nn(n)) {
                e[t] = Cr(n);
            }
        }
        return e;
    }
    function Cr(e) {
        var t, n;
        t = f({}, e);
        if (t.attrs) {
            t.attrs = f({}, t.attrs);
        }
        if (nn(t.style)) {
            t.style = f({}, t.style);
        }
        n = t.children;
        if (n) {
            if (l(n)) {
                t.children = _r(n);
            } else if (nn(n)) {
                t.children = Cr(n);
            }
        }
        return t;
    }
    function wr(e, t) {
        x.set(e, t);
    }
    wr("float", ln("cssFloat"));
    (function(e) {
        e[e["Mobile"] = 0] = "Mobile";
        e[e["Tablet"] = 1] = "Tablet";
        e[e["Desktop"] = 2] = "Desktop";
        e[e["LargeDesktop"] = 3] = "LargeDesktop";
    })(ie || (ie = {}));
    ae = null;
    oe = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function kr() {
        ae = null;
        te();
        return !1;
    }
    de = [ "resize", "orientationchange" ];
    for (le = 0; le < de.length; le++) Qn(de[le], 10, kr);
    ce = window.document.documentElement;
    se = /Android/i.test(navigator.userAgent);
    function Sr() {
        var t, n, r, i, a, o;
        if (ae == e) {
            t = ce.clientWidth;
            n = ce.clientHeight;
            r = window.orientation;
            i = n >= t;
            if (r == e) r = i ? 0 : 90; else r = +r;
            if (se) {
                a = Math.abs(r) % 180 === 90;
                if ($t == e) {
                    $t = a === i;
                } else {
                    i = a === $t;
                }
            }
            o = 0;
            while (t > oe[+!i][o]) o++;
            ae = {
                width: t,
                height: n,
                orientation: r,
                deviceCategory: o,
                portrait: i,
                dppx: window.devicePixelRatio
            };
        }
        return ae;
    }
    ue = function() {
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
            r = window.setImmediate || P;
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
                ue(function() {
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
                var e = [].slice.call(arguments.length === 1 && l(arguments[0]) ? arguments[0] : arguments);
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
    fe = "b$value";
    he = "b$selStart";
    pe = "b$selEnd";
    ve = "value";
    function Dr(e) {
        var t = e.type;
        return t === "checkbox" || t === "radio";
    }
    function Er(e, t) {
        var n, r;
        n = e.length;
        if (n !== t.length) return !1;
        for (r = 0; r < n; r++) {
            if (e[r] !== t[r]) return !1;
        }
        return !0;
    }
    function Nr(e, t) {
        var n;
        for (n = 0; n < e.length; n++) {
            if (e[n] === t) return !0;
        }
        return !1;
    }
    function Ir(e) {
        var t = [], n;
        for (n = 0; n < e.length; n++) {
            if (e[n].selected) t.push(e[n].value);
        }
        return t;
    }
    me = an(function(t, n, r, i) {
        var a, o, d, l, c, u, f, h, p, v, m;
        a = t.tagName;
        o = a === "SELECT";
        d = a === "INPUT" || a === "TEXTAREA";
        if (!d && !o) {
            me(t, n, r, i);
            return;
        }
        if (n.ctx === e) {
            n.ctx = {
                data: e,
                me: n
            };
            n.component = s;
        }
        if (i === e) {
            n.ctx[fe] = r;
        }
        l = o && t.multiple;
        c = !1;
        if (l) {
            u = t.options;
            f = Ir(u);
            if (!Er(r, f)) {
                if (i === e || Er(f, i) || !Er(r, n.ctx[fe])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = Nr(r, u[h].value);
                    }
                    f = Ir(u);
                    if (Er(f, r)) {
                        c = !0;
                    }
                } else {
                    c = !0;
                }
            }
        } else if (d || o) {
            if (d && Dr(t)) {
                p = t.checked;
                if (r !== p) {
                    if (i === e || p === i || r !== n.ctx[fe]) {
                        t.checked = r;
                    } else {
                        c = !0;
                    }
                }
            } else {
                v = o && t.size < 2;
                m = t[ve];
                if (r !== m) {
                    if (i === e || m === i || r !== n.ctx[fe]) {
                        if (o) {
                            if (r === "") {
                                t.selectedIndex = v ? 0 : -1;
                            } else {
                                t[ve] = r;
                            }
                            if (r !== "" || v) {
                                m = t[ve];
                                if (r !== m) {
                                    c = !0;
                                }
                            }
                        } else {
                            t[ve] = r;
                        }
                    } else {
                        c = !0;
                    }
                }
            }
        }
        if (c) {
            Pr(e, t, n);
        } else {
            n.ctx[fe] = r;
        }
    });
    function Pr(t, n, r) {
        var i, a, o, d, l, c, u, f, h, p, v, m, b, g, y, x, _, C, w;
        if (n && n.nodeName === "OPTION") {
            n = document.activeElement;
            r = An(n);
        }
        if (!r) {
            return !1;
        }
        if (r.ctx === e) {
            r.ctx = {
                data: e,
                me: r
            };
            r.component = s;
        }
        i = r.ctx;
        a = n.tagName;
        o = a === "SELECT";
        d = o && n.multiple;
        if (d) {
            l = Ir(n.options);
            if (!Er(i[fe], l)) {
                i[fe] = l;
                Rr(r, l);
            }
        } else if (Dr(n)) {
            if (t && t.type === "change") {
                P(function() {
                    Pr(e, n, r);
                }, 10);
                return !1;
            }
            if (n.type === "radio") {
                c = document.getElementsByName(n.name);
                for (u = 0; u < c.length; u++) {
                    f = c[u];
                    h = An(f);
                    if (!h) continue;
                    p = h.ctx;
                    v = f.checked;
                    if (p[fe] !== v) {
                        p[fe] = v;
                        Rr(h, v);
                    }
                }
            } else {
                m = n.checked;
                if (i[fe] !== m) {
                    i[fe] = m;
                    Rr(r, m);
                }
            }
        } else {
            b = n.value;
            if (i[fe] !== b) {
                i[fe] = b;
                Rr(r, b);
            }
            g = n.selectionStart;
            y = n.selectionEnd;
            x = n.selectionDirection;
            _ = !1;
            C = i[he];
            if (x == e) {
                if (y === C) _ = !0;
            } else if (x === "backward") {
                _ = !0;
            }
            if (_) {
                w = g;
                g = y;
                y = w;
            }
            Ar(r, g, y);
        }
        return !1;
    }
    function Rr(e, t) {
        var n, r, i, a, o;
        n = zt;
        r = e.ctx;
        i = e.component;
        zt = r;
        a = e.attrs && e.attrs[fe];
        if (tn(a)) a(t);
        o = i && i.onChange;
        if (tn(o)) o(r, t);
        zt = n;
        vr(e, "onInput", {
            target: e,
            value: t
        });
    }
    function Ar(e, t, n) {
        var r, i;
        r = e.component;
        i = e.ctx;
        if (r && (i[he] !== t || i[pe] !== n)) {
            i[he] = t;
            i[pe] = n;
            vr(e, "onSelectionChange", {
                target: e,
                startPosition: t,
                endPosition: n
            });
        }
    }
    function Br(e, t, n) {
        var r = hi();
        if (r) Pr(e, r.element, r);
        return !1;
    }
    de = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (le = 0; le < de.length; le++) Qn(de[le], 10, Pr);
    be = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (le = 0; le < be.length; le++) Qn(be[le], 2, Br);
    function Or(t) {
        return {
            target: e,
            shift: t.shiftKey,
            ctrl: t.ctrlKey,
            alt: t.altKey,
            meta: t.metaKey || !1,
            which: t.which || t.keyCode
        };
    }
    function Fr(e, t, n) {
        var r;
        if (!n) return !1;
        r = Or(e);
        if (vr(n, "onKeyDown", r)) {
            xr(e);
            return !0;
        }
        return !1;
    }
    function Tr(e, t, n) {
        var r;
        if (!n) return !1;
        r = Or(e);
        if (vr(n, "onKeyUp", r)) {
            xr(e);
            return !0;
        }
        return !1;
    }
    function jr(e, t, n) {
        var r;
        if (!n) return !1;
        if (e.which === 0 || e.altKey) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (vr(n, "onKeyPress", r)) {
            xr(e);
            return !0;
        }
        return !1;
    }
    Qn("keydown", 50, Fr);
    Qn("keyup", 50, Tr);
    Qn("keypress", 50, jr);
    (function(e) {
        e[e["Mouse"] = 0] = "Mouse";
        e[e["Touch"] = 1] = "Touch";
        e[e["Pen"] = 2] = "Pen";
    })(ge = ye || (ye = {}));
    xe = 13;
    _e = 750;
    Ce = 500;
    we = 800;
    ke = 50;
    Se = null;
    De = "onClick";
    Ee = "onDoubleClick";
    function Mr(t, n) {
        var r, i, a, o;
        if (Se == e) {
            return !1;
        }
        r = Se.me.component;
        i = r[t];
        if (!i) {
            return !1;
        }
        a = zt;
        zt = Se;
        o = i.call(r, Se, n);
        zt = a;
        return o;
    }
    function Ur(t) {
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
    function Vr(e) {
        var t;
        if (e.length) {
            for (t = e.length - 1; t >= 0; --t) {
                e[t].t.style.visibility = e[t].p;
            }
            return !0;
        }
        return !1;
    }
    function Hr(e, t) {
        e.push({
            t: t,
            p: t.style.visibility
        });
        t.style.visibility = "hidden";
    }
    function Lr(e, t) {
        Qn(e, 5, t);
    }
    Ne = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    function Kr(e) {
        if (e === "mouse" || e === 4) return ge.Mouse;
        if (e === "pen" || e === 3) return ge.Pen;
        return ge.Touch;
    }
    function Wr(e, t, n, r) {
        var i = [], a;
        a = n;
        while (Ur(r)) {
            Hr(i, a);
            a = document.elementFromPoint(e, t);
            r = An(a);
        }
        Vr(i);
        return [ a, r ];
    }
    function Xr(e) {
        return function t(n, r, i) {
            var a, o, d, l, c;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = An(r);
            if (Ur(i)) {
                a = Wr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            o = n.button + 1;
            d = Kr(n.pointerType);
            l = n.buttons;
            if (o === 0 && d === ge.Mouse && l) {
                o = 1;
                while (!(l & 1)) {
                    l = l >> 1;
                    o++;
                }
            }
            c = {
                target: i,
                id: n.pointerId,
                cancelable: oi(n),
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
            if (qn("!" + e, c, r, i)) {
                xr(n);
                return !0;
            }
            return !1;
        };
    }
    function Yr(e) {
        return function t(n, r, i) {
            var a = !1, o, d, l;
            for (o = 0; o < n.changedTouches.length; o++) {
                d = n.changedTouches[o];
                r = document.elementFromPoint(d.clientX, d.clientY);
                i = An(r);
                l = {
                    target: i,
                    id: d.identifier + 2,
                    cancelable: oi(n),
                    type: ge.Touch,
                    x: d.clientX,
                    y: d.clientY,
                    button: 1,
                    shift: n.shiftKey,
                    ctrl: n.ctrlKey,
                    alt: n.altKey,
                    meta: n.metaKey || !1,
                    count: n.detail
                };
                if (qn("!" + e, l, r, i)) a = !0;
            }
            if (a) {
                xr(n);
                return !0;
            }
            return !1;
        };
    }
    function zr(e) {
        return function t(n, r, i) {
            var a, o;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = An(r);
            if (Ur(i)) {
                a = Wr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            o = {
                target: i,
                id: 1,
                type: ge.Mouse,
                cancelable: oi(n),
                x: n.clientX,
                y: n.clientY,
                button: ai(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail
            };
            if (qn("!" + e, o, r, i)) {
                xr(n);
                return !0;
            }
            return !1;
        };
    }
    function $r() {
        Lr("mousedown", zr(Ne[0]));
        Lr("mousemove", zr(Ne[1]));
        Lr("mouseup", zr(Ne[2]));
    }
    if (window.ontouchstart !== e) {
        Lr("touchstart", Yr(Ne[0]));
        Lr("touchmove", Yr(Ne[1]));
        Lr("touchend", Yr(Ne[2]));
        Lr("touchcancel", Yr(Ne[3]));
        $r();
    } else if (window.onpointerdown !== e) {
        for (le = 0; le < 4; le++) {
            Ie = Ne[le];
            Lr(Ie.toLowerCase(), Xr(Ie));
        }
    } else if (window.onmspointerdown !== e) {
        for (le = 0; le < 4; le++) {
            Ie = Ne[le];
            Lr("@MS" + Ie, Xr(Ie));
        }
    } else {
        $r();
    }
    for (Pe = 0; Pe < 4; Pe++) {
        (function(t) {
            var n = "on" + t;
            Qn("!" + t, 50, function(t, r, i) {
                return Mr(n, t) || vr(i, n, t) != e;
            });
        })(Ne[Pe]);
    }
    Re = on();
    Ae = [];
    Be = -1;
    Oe = 0;
    Fe = 0;
    Te = 0;
    je = !1;
    function Qr(e, t, n) {
        return Math.abs(e - t) < n;
    }
    Me = [];
    function qr(t) {
        var n, r, i, a, o, d, l, c;
        n = document.elementFromPoint(t.x, t.y);
        r = Rn(n);
        i = r.length == 0 ? e : r[r.length - 1];
        if (Ur(i)) {
            a = Wr(t.x, t.y, n, i == e ? e : i);
            n = a[0];
            r = Rn(n);
        }
        vr(i, "onMouseOver", t);
        o = 0;
        while (o < Me.length && o < r.length && Me[o] === r[o]) o++;
        d = Me.length;
        if (d > 0 && (d > o || d != r.length)) {
            l = Me[d - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, t);
            }
        }
        while (d > o) {
            d--;
            l = Me[d];
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
        Me = r;
        if (d > 0 && (d > o || d != Me.length)) {
            l = Me[d - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, t);
            }
        }
        return !1;
    }
    function Gr() {
        return Object.keys(Re).length === 0;
    }
    function Zr(e, t, n) {
        if (Be === -1 && Gr()) {
            Be = e.id;
            Oe = R();
            Fe = e.x;
            Te = e.y;
            je = !1;
            qr(e);
        }
        Re[e.id] = e.type;
        if (Be !== e.id) {
            je = !0;
        }
        return !1;
    }
    function Jr(e, t, n) {
        if (e.type === ge.Mouse && e.button === 0 && Re[e.id] != null) {
            e.button = 1;
            qn("!PointerUp", e, t, n);
            e.button = 0;
        }
        if (Be === e.id) {
            qr(e);
            if (!Qr(Fe, e.x, xe) || !Qr(Te, e.y, xe)) je = !0;
        } else if (Gr()) {
            qr(e);
        }
        return !1;
    }
    Ue = 0;
    Ve = 0;
    function ei(e) {
        var t;
        if (Ve == 0) return !1;
        t = R();
        if (t < Ue + 1e3 && e >= Ve) {
            Ue = t;
            Ve = e;
            return !0;
        }
        Ve = 0;
        return !1;
    }
    function ti(e, t, n) {
        var r, i;
        delete Re[e.id];
        if (Be == e.id) {
            qr(e);
            Be = -1;
            if (e.type == ge.Touch && !je) {
                if (R() - Oe < _e) {
                    qn("!PointerCancel", e, t, n);
                    ei(1);
                    r = Mr(De, e) || vr(n, De, e) != null;
                    i = un() ? we : Ce;
                    Ae.push([ e.x, e.y, R() + i, r ? 1 : 0 ]);
                    return r;
                }
            } else if (je) {
                Xe(e.x, e.y);
            }
        }
        return !1;
    }
    function ni(e, t, n) {
        delete Re[e.id];
        if (Be == e.id) {
            Be = -1;
        }
        return !1;
    }
    function ri(e, t, n) {
        var r, i, a;
        r = R();
        for (i = 0; i < Ae.length; i++) {
            a = Ae[i];
            if (a[2] < r) {
                Ae.splice(i, 1);
                i--;
                continue;
            }
            if (Qr(a[0], e.clientX, ke) && Qr(a[1], e.clientY, ke)) {
                Ae.splice(i, 1);
                if (a[3]) xr(e);
                return !0;
            }
        }
        return !1;
    }
    He = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Le = [ Zr, Jr, ti, ni, ri ];
    for (le = 0; le < 5; le++) {
        Qn(He[le], 3, Le[le]);
    }
    function ii(e) {
        return function(t, n, r) {
            if (Be != t.id && !Gr()) return !1;
            if (Mr(e, t) || vr(r, e, t)) {
                return !0;
            }
            return !1;
        };
    }
    Ke = [ "Down", "Move", "Up", "Up" ];
    for (le = 0; le < 4; le++) {
        Qn(He[le], 80, ii("onMouse" + Ke[le]));
    }
    function ai(e) {
        return e.which || e.button;
    }
    function oi(e) {
        var t = e.cancelable;
        return !en(t) || t;
    }
    function di(e, t) {
        return function(n, r, i) {
            var a, o;
            a = ai(n) || 1;
            if (!t && a !== 1) return !1;
            o = {
                target: i,
                x: n.clientX,
                y: n.clientY,
                button: a,
                cancelable: oi(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail || 1
            };
            if (e == Ee) o.count = 2;
            if (ei(o.count) || Mr(e, o) || vr(i, e, o)) {
                xr(n);
                return !0;
            }
            return !1;
        };
    }
    function li(e, t) {
        var n, r, i;
        n = document.elementFromPoint(e, t);
        r = An(n);
        if (Ur(r)) {
            i = Wr(e, t, n, r);
            r = i[1];
        }
        return r;
    }
    function ci(e, t, n) {
        var r, i;
        while (n) {
            r = n.style;
            if (r) {
                i = r.userSelect;
                if (i === "none") {
                    xr(e);
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
    Lr("selectstart", ci);
    Lr("^click", di(De));
    Lr("^dblclick", di(Ee));
    Lr("contextmenu", di("onContextMenu", !0));
    We = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function si(e, t, n) {
        var r, i, a, o, d, l;
        if (Ur(n)) {
            r = Wr(e.x, e.y, t, n);
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
        if (We == "mousewheel") {
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
            cancelable: oi(e),
            button: i,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            count: e.detail
        };
        if (Mr("onMouseWheel", l) || vr(n, "onMouseWheel", l)) {
            xr(e);
            return !0;
        }
        return !1;
    }
    Lr(We, si);
    Xe = function(e, t) {
        var n = un() ? we : Ce;
        Ae.push([ e, t, R() + n, 1 ]);
    };
    Ye = e;
    ze = e;
    $e = [];
    Qe = !1;
    function ui(t) {
        var n, r, i, a, o, d;
        if (Qe) return !1;
        Qe = !0;
        while (!0) {
            n = document.hasFocus() || t ? document.activeElement : e;
            if (n === Ye) break;
            Ye = n;
            r = Rn(Ye);
            i = 0;
            while (i < $e.length && i < r.length && $e[i] === r[i]) i++;
            a = $e.length - 1;
            if (a >= i) {
                o = $e[a];
                vr(o, "onBlur");
                a--;
            }
            while (a >= i) {
                o = $e[a];
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
                vr(o, "onFocus");
            }
            $e = r;
            ze = $e.length == 0 ? e : Gt($e[$e.length - 1]);
        }
        Qe = !1;
        return !1;
    }
    function fi() {
        P(function() {
            return ui(!1);
        }, 10);
        return !1;
    }
    Qn("^focus", 50, function() {
        return ui(!0);
    });
    Qn("^blur", 50, fi);
    function hi() {
        return ze;
    }
    qe = [];
    function pi(e, t, n) {
        var r, i;
        r = {
            node: n
        };
        for (i = 0; i < qe.length; i++) {
            qe[i](r);
        }
        gr("onScroll", r);
        return !1;
    }
    Qn("^scroll", 10, pi);
    (function(e) {
        e[e["None"] = 0] = "None";
        e[e["Link"] = 1] = "Link";
        e[e["Copy"] = 2] = "Copy";
        e[e["Move"] = 3] = "Move";
    })(Ge = Ze || (Ze = {}));
    (function(e) {
        e[e["None"] = 0] = "None";
        e[e["Link"] = 1] = "Link";
        e[e["Copy"] = 2] = "Copy";
        e[e["LinkCopy"] = 3] = "LinkCopy";
        e[e["Move"] = 4] = "Move";
        e[e["MoveLink"] = 5] = "MoveLink";
        e[e["MoveCopy"] = 6] = "MoveCopy";
        e[e["MoveCopyLink"] = 7] = "MoveCopyLink";
    })(Je = et || (et = {}));
    tt = 0;
    nt = [];
    rt = null;
    it = null;
    at = function(t) {
        this.id = ++tt;
        this.pointerid = t;
        this.enabledOperations = Je.MoveCopyLink;
        this.operation = Ge.None;
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
        this.data = on();
        if (t >= 0) st[t] = this;
        nt.push(this);
    };
    ot = "b-dragging";
    function vi() {
        var t;
        if (it == e) {
            t = document.documentElement;
            t.classList.add(ot);
            it = lr(bi);
        }
    }
    dt = {
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
    function mi() {
        var e = "no-drop", t;
        if (nt.length !== 0) {
            t = nt[0];
            if (t.beforeDrag) return "";
            if (t.cursor != null) return t.cursor;
            if (t.system) return "";
            switch (t.operation) {
              case Ge.Move:
                e = "move";
                break;

              case Ge.Link:
                e = "alias";
                break;

              case Ge.Copy:
                e = "copy";
            }
        }
        return e;
    }
    lt = {
        render: function(e, t) {
            var n = [], r, i, a, o;
            for (r = 0; r < nt.length; r++) {
                i = nt[r];
                if (i.beforeDrag) continue;
                if (i.dragView != null && (i.x != 0 || i.y != 0)) {
                    n.push({
                        key: "" + i.id,
                        data: i,
                        component: dt
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
            o = mi();
            if (o) {
                if (a.cursor !== o) a.setProperty("cursor", o, "important");
            } else {
                a.setProperty("cursor", "");
            }
            t.children = n;
        },
        onDrag: function(e) {
            te(e);
            return !1;
        }
    };
    function bi() {
        return {
            component: lt
        };
    }
    ct = at.prototype;
    ct.setOperation = function(e) {
        this.operation = e;
    };
    ct.setDragNodeView = function(e) {
        this.dragView = e;
    };
    ct.addData = function(e, t) {
        this.data[e] = t;
        return !0;
    };
    ct.listData = function() {
        return Object.keys(this.data);
    };
    ct.hasData = function(t) {
        return this.data[t] !== e;
    };
    ct.getData = function(e) {
        return this.data[e];
    };
    ct.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    ct.cancelDnd = function() {
        yi(e, this);
        this.destroy();
    };
    ct.destroy = function() {
        var e, t;
        this.ended = !0;
        if (this.started) yr("onDragEnd", this);
        delete st[this.pointerid];
        for (e = 0; e < nt.length; e++) {
            if (nt[e] === this) {
                nt.splice(e, 1);
                break;
            }
        }
        if (rt === this) {
            rt = null;
        }
        if (nt.length === 0 && it != null) {
            cr(it);
            it = null;
            t = document.documentElement;
            t.classList.remove(ot);
            t.style.setProperty("cursor", "");
        }
    };
    st = on();
    function gi(t, n, r) {
        var i, a, o, d, l;
        i = st[t.id];
        if (i) {
            i.cancelDnd();
        }
        if (t.button <= 1) {
            i = new at(t.id);
            i.startX = t.x;
            i.startY = t.y;
            i.lastX = t.x;
            i.lastY = t.y;
            i.overNode = r;
            xi(i, t);
            a = vr(r, "onDragStart", i);
            if (a) {
                o = Tn(a.me);
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
                    yi(r, i);
                }
                vi();
            } else {
                i.destroy();
            }
        }
        return !1;
    }
    function yi(t, n) {
        n.overNode = t;
        n.targetCtx = vr(t, "onDragOver", n);
        if (n.targetCtx == e) {
            n.operation = Ge.None;
        }
        yr("onDrag", n);
    }
    function xi(e, t) {
        e.shift = t.shift;
        e.ctrl = t.ctrl;
        e.alt = t.alt;
        e.meta = t.meta;
        e.x = t.x;
        e.y = t.y;
    }
    function _i(e, t, n) {
        var r = st[e.id];
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
        xi(r, e);
        yi(n, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function Ci(e, t, n) {
        var r, i;
        r = st[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            xi(r, e);
            yi(n, r);
            i = r.targetCtx;
            if (i && vr(i.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            Xe(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function wi(e, t, n) {
        var r = st[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function ki(e, t) {
        var n;
        e.shift = t.shiftKey;
        e.ctrl = t.ctrlKey;
        e.alt = t.altKey;
        e.meta = t.metaKey;
        e.x = t.clientX;
        e.y = t.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        n = li(e.x, e.y);
        yi(n, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    ut = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function Si(t, n, r) {
        var i, a, o, d, l, c, s, u, f, h, p, v, m, b, g, y, x, _, C, w, k;
        i = rt;
        if (i != null) {
            i.destroy();
        }
        a = Object.keys(st);
        if (a.length > 0) {
            i = st[a[0]];
            i.system = !0;
            rt = i;
        } else {
            o = t.clientX;
            d = t.clientY;
            i = new at(-1);
            i.system = !0;
            rt = i;
            i.x = o;
            i.y = d;
            i.lastX = o;
            i.lastY = d;
            i.startX = o;
            i.startY = d;
            l = vr(r, "onDragStart", i);
            if (l) {
                c = Tn(l.me);
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
                vi();
            } else {
                i.destroy();
                return !1;
            }
        }
        i.beforeDrag = !1;
        f = ut[i.enabledOperations];
        h = t.dataTransfer;
        h.effectAllowed = f;
        if (h.setDragImage) {
            p = document.createElement("div");
            p.style.pointerEvents = "none";
            h.setDragImage(p, 0, 0);
        } else {
            v = t.target.style;
            m = v.opacity;
            b = v.width;
            g = v.height;
            y = v.padding;
            v.opacity = "0";
            v.width = "0";
            v.height = "0";
            v.padding = "0";
            P(function() {
                v.opacity = m;
                v.width = b;
                v.height = g;
                v.padding = y;
            }, 0);
        }
        x = i.data;
        _ = Object.keys(x);
        for (C = 0; C < _.length; C++) {
            try {
                w = _[C];
                k = x[w];
                if (!Jt(k)) k = JSON.stringify(k);
                t.dataTransfer.setData(w, k);
            } catch (e) {}
        }
        ki(i, t);
        return !1;
    }
    function Di(e, t) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][t];
    }
    function Ei(t, n, r) {
        var i, a, o, d, l, c, s;
        i = rt;
        if (i == e) {
            i = new at(-1);
            i.system = !0;
            rt = i;
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
                if (ut[o] === d) break;
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
        ki(i, t);
        Di(t, i.operation);
        if (i.operation != Ge.None) {
            xr(t);
            return !0;
        }
        return !1;
    }
    function Ni(e, t, n) {
        var r, i, a;
        r = e.clientX;
        i = e.clientY;
        a = Sr();
        if (rt != null && (r === 0 && i === 0 || r < 0 || i < 0 || r >= a.width || i >= a.height)) {
            rt.x = 0;
            rt.y = 0;
            rt.operation = Ge.None;
            yr("onDrag", rt);
        }
        return !0;
    }
    function Ii(e, t, n) {
        if (rt != null) {
            rt.destroy();
        }
        return !1;
    }
    function Pi(t, n, r) {
        var i, a, o, d, l, c, s;
        i = rt;
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
        ki(i, t);
        s = i.targetCtx;
        if (s && vr(s.me, "onDrop", i)) {
            Di(t, i.operation);
            i.destroy();
            xr(t);
        } else {
            i.cancelDnd();
        }
        return !0;
    }
    function Ri(e, t, n) {
        xr(e);
        return !0;
    }
    function Ai(e, t, n) {
        if (nt.length === 0) return !1;
        xr(e);
        return !0;
    }
    Qn("!PointerDown", 4, gi);
    Qn("!PointerMove", 4, _i);
    Qn("!PointerUp", 4, Ci);
    Qn("!PointerCancel", 4, wi);
    Qn("selectstart", 4, Ai);
    Qn("dragstart", 5, Si);
    Qn("dragover", 5, Ei);
    Qn("dragend", 5, Ii);
    Qn("drag", 5, Ni);
    Qn("drop", 5, Pi);
    Qn("dragenter", 5, Ri);
    Qn("dragleave", 5, Ri);
    ft = function() {
        return nt;
    };
    (function(e) {
        e[e["Push"] = 0] = "Push";
        e[e["Replace"] = 1] = "Replace";
        e[e["Pop"] = 2] = "Pop";
    })(ht || (ht = {}));
    pt = -1;
    function Bi() {
        if (pt >= 0) clearTimeout(pt);
        pt = -1;
        te();
        return !1;
    }
    Qn("hashchange", 10, Bi);
    on();
    function Oi() {
        return e;
    }
    vt = on();
    mt = on();
    bt = on();
    on();
    gt = on();
    on();
    yt = [];
    xt = [];
    _t = on();
    Ct = "";
    wt = !1;
    kt = null;
    St = 0;
    Dt = er(Mi);
    Et = /\:|\ |\>/;
    function Fi(e) {
        var t, n;
        t = Et.exec(e);
        if (!t) return vt[e].name;
        n = t.index;
        return vt[e.substring(0, n)].name + e.substring(n);
    }
    function Ti(e, t) {
        var n = "", r;
        if (e) {
            if (l(e)) {
                for (r = 0; r < e.length; r++) {
                    if (r > 0) {
                        n += ",";
                    }
                    n += "." + Fi(e[r]) + "." + t;
                }
            } else {
                n = "." + Fi(e) + "." + t;
            }
        } else {
            n = "." + t;
        }
        return n;
    }
    function ji(t, n, r, i) {
        var a, o, d, c, s, f;
        if (Jt(r)) {
            a = vt[r];
            if (a === e) {
                throw new Error("Unknown style " + r);
            }
            ji(t, n, a.style, a.pseudo);
        } else if (tn(r)) {
            r(t, n);
        } else if (l(r)) {
            for (o = 0; o < r.length; o++) {
                ji(t, n, r[o], e);
            }
        } else if (typeof r === "object") {
            for (s in r) {
                if (!u.call(r, s)) continue;
                d = r[s];
                if (tn(d)) {
                    d = d(t, s);
                }
                t[s] = d;
            }
        }
        if (i != e && n != e) {
            for (f in i) {
                c = n[f];
                if (c === e) {
                    c = on();
                    n[f] = c;
                }
                ji(c, e, i[f], e);
            }
        }
    }
    Nt = 0;
    It = "";
    Pt = 1;
    Rt = !1;
    At = !0;
    function Mi() {
        var r, i, a, o, d, l, c, s, u, f, h, p, v, m, b, g, y, x, _, C, w, k, S, D, E, N, I, P, R, A, B, O, F, T, j, M, U, V, H, L, K, W, X, Y, z, $;
        if (Rt && Nt != Sr().dppx) {
            Nt = Sr().dppx;
            r = jt;
            i = 1;
            if (Nt > 1) {
                for (a = 0; a < Mt.length; a++) {
                    if (a == Mt.length - 1 || Mt[a][1] >= Nt) {
                        r = Mt[a][0];
                        i = Mt[a][1];
                    } else break;
                }
            }
            if (It != r) {
                It = r;
                Pt = i;
                wt = !0;
                At = !0;
            }
        }
        if (wt) {
            if (Rt) {
                o = _t[It];
                if (o === e) {
                    o = null;
                    _t[It] = o;
                    Wi(It, function(e) {
                        _t[It] = e;
                        Li();
                    });
                }
                if (o != null) {
                    for (d = 0; d < xt.length; d++) {
                        l = xt[d];
                        c = l.color;
                        if (!Jt(c)) c = c();
                        if (At || c !== l.lastColor) {
                            l.lastColor = c;
                            s = l.width * Pt | 0;
                            u = l.height * Pt | 0;
                            f = Ki(o, c, s, u, l.left * Pt | 0, l.top * Pt | 0);
                            h = vt[l.styleId];
                            h.style = {
                                backgroundImage: "url(" + f + ")",
                                width: l.width,
                                height: l.height,
                                backgroundPosition: 0,
                                backgroundSize: "100%"
                            };
                        }
                    }
                    if (At) {
                        p = o.width / Pt;
                        v = o.height / Pt;
                        for (Y in gt) {
                            m = gt[Y];
                            if (m.color !== e) continue;
                            h = vt[m.styleId];
                            b = m.width;
                            g = m.height;
                            y = 100 * p / b;
                            x = 100 * v / g;
                            h.style = {
                                backgroundImage: "url(" + It + ")",
                                width: b,
                                height: g,
                                backgroundPosition: 100 * m.left / (p - b) + "% " + 100 * m.top / (v - g) + "%",
                                backgroundSize: y + "% " + x + "%"
                            };
                        }
                    }
                    At = !1;
                }
            }
            for (_ = 0; _ < yt.length; _++) {
                l = yt[_];
                C = _t[l.url];
                if (C == e) continue;
                c = l.color();
                if (c !== l.lastColor) {
                    l.lastColor = c;
                    if (l.width == e) l.width = C.width;
                    if (l.height == e) l.height = C.height;
                    f = Ki(C, c, l.width, l.height, l.left, l.top);
                    h = vt[l.styleId];
                    h.style = {
                        backgroundImage: "url(" + f + ")",
                        width: l.width,
                        height: l.height,
                        backgroundPosition: 0
                    };
                }
            }
            w = Ct;
            for (z in mt) {
                k = mt[z];
                w += "@keyframes " + k.name + " {";
                for ($ in k.def) {
                    S = k.def[$];
                    D = on();
                    ji(D, e, S, e);
                    fn(D);
                    w += $ + ($ == "from" || $ == "to" ? "" : "%") + " {" + Vi(D) + "}\n";
                }
                w += "}\n";
            }
            for (z in vt) {
                E = vt[z];
                N = E.parent;
                I = E.name;
                P = E.pseudo;
                R = E.style;
                if (tn(R) && R.length === 0) {
                    A = n(R(), 2), R = A[0], P = A[1];
                }
                if (Jt(R) && P == e) {
                    E.realName = R;
                    continue;
                }
                E.realName = I;
                B = on();
                O = on();
                ji(e, O, e, P);
                ji(B, O, R, e);
                F = null;
                if (B["pointerEvents"]) {
                    F = on();
                    F["pointerEvents"] = B["pointerEvents"];
                }
                E.inlStyle = F;
                fn(B);
                T = Vi(B);
                if (T.length > 0) w += (I == e ? N : Ti(N, I)) + " {" + T + "}\n";
                for ($ in O) {
                    S = O[$];
                    fn(S);
                    w += (I == e ? N + ":" + $ : Ti(N, I + ":" + $)) + " {" + Vi(S) + "}\n";
                }
            }
            for (z in bt) {
                j = bt[z];
                w += "@media " + z + "{";
                try {
                    for (M = (L = void 0, t(j)), U = M.next(); !U.done; U = M.next()) {
                        V = U.value;
                        for ($ in V) {
                            S = V[$];
                            H = on();
                            ji(H, e, S, e);
                            fn(H);
                            w += "." + $ + " {" + Vi(H) + "}\n";
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
                w += "}\n";
            }
            W = document.createElement("style");
            W.type = "text/css";
            if (W.styleSheet) {
                W.styleSheet.cssText = w;
            } else {
                W.appendChild(document.createTextNode(w));
            }
            X = document.head || document.getElementsByTagName("head")[0];
            if (kt != null) {
                X.replaceChild(W, kt);
            } else {
                X.appendChild(W);
            }
            kt = W;
            wt = !1;
        }
        Dt();
    }
    Bt = /([A-Z])/g;
    Ot = /^ms-/;
    function Ui(e) {
        if (e === "cssFloat") return "float";
        return e.replace(Bt, "-$1").toLowerCase().replace(Ot, "-ms-");
    }
    function Vi(t) {
        var n = "", r, i;
        for (i in t) {
            r = t[i];
            if (r === e) continue;
            n += Ui(i) + ":" + (r === "" ? '""' : r) + ";";
        }
        n = n.slice(0, -1);
        return n;
    }
    function Hi(t, n, r) {
        vt["b-" + St++] = {
            name: null,
            realName: null,
            parent: t,
            style: n,
            inlStyle: e,
            pseudo: r
        };
        Li();
    }
    function Li() {
        wt = !0;
        te();
    }
    Ft = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Ki(e, t, n, r, i, a) {
        var o, d, l, c, s, u, f, h, p, v, m, b;
        o = document.createElement("canvas");
        o.width = n;
        o.height = r;
        d = o.getContext("2d");
        d.drawImage(e, -i, -a);
        l = d.getImageData(0, 0, n, r);
        c = l.data;
        s = Ft.exec(t);
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
            for (v = 0; v < c.length; v += 4) {
                m = c[v];
                if (m === c[v + 1] && m === c[v + 2] && (m === 128 || c[v + 3] < 255 && m > 112)) {
                    c[v] = u;
                    c[v + 1] = f;
                    c[v + 2] = h;
                }
            }
        } else {
            for (v = 0; v < c.length; v += 4) {
                m = c[v];
                b = c[v + 3];
                if (m === c[v + 1] && m === c[v + 2] && (m === 128 || b < 255 && m > 112)) {
                    if (b === 255) {
                        c[v] = u;
                        c[v + 1] = f;
                        c[v + 2] = h;
                        c[v + 3] = p;
                    } else {
                        b = b * (1 / 255);
                        c[v] = Math.round(u * b);
                        c[v + 1] = Math.round(f * b);
                        c[v + 2] = Math.round(h * b);
                        c[v + 3] = Math.round(p * b);
                    }
                }
            }
        }
        d.putImageData(l, 0, 0);
        return o.toDataURL();
    }
    Tt = !1;
    function Wi(e, t) {
        var n = new Image();
        n.crossOrigin = Tt ? "use-credentials" : "anonymous";
        n.addEventListener("load", function() {
            return t(n);
        });
        n.src = e;
    }
    jt = window["bobrilBPath"] || "bundle.png";
    Mt = window["bobrilBPath2"] || [];
    Hi("html." + ot + " *", {
        cursor: "inherit !important",
        userSelect: "none !important"
    });
    function Xi(t) {
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
        deref: An,
        getRoots: sr,
        setInvalidate: dr,
        invalidateStyles: Li,
        ignoreShouldChange: or,
        setAfterFrame: tr,
        setBeforeFrame: er,
        getDnds: ft,
        setBeforeInit: pr
    };
    new Map();
    (function(e) {
        e[e["NotHandled"] = 0] = "NotHandled";
        e[e["HandledPreventDefault"] = 1] = "HandledPreventDefault";
        e[e["HandledButRunDefault"] = 2] = "HandledButRunDefault";
        e[e["NotHandledPreventDefault"] = 3] = "NotHandledPreventDefault";
    })(Ut = Vt || (Vt = {}));
    function Yi(t) {
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
    function zi(t) {
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
    function $i(t) {
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
    Ht = [];
    function Qi() {
        var e, t, n;
        e = Ht;
        Ht = [];
        for (t = 0, n = e.length; t < n; t++) {
            e[t]();
        }
    }
    Lt = function() {
        function e() {}
        return e;
    }();
    Kt = function() {
        function e() {}
        return e;
    }();
    hr(function() {
        return "hello";
    });
}).call(this);

