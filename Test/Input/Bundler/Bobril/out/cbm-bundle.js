(e => {
    var t, n, r, i, a, o, d, l, c, s, u, f, h, p, m, v, b, g, y, x, C, _, w, k, S, E, N, I, D, P, A, R, F, j, B, O, T, M, V, U, H, L, K, W, X, Y, z, $, Q, q, G, Z, J, ee, te, ne, re, ie, ae, oe, de, le, ce, se, ue, fe, he, pe, me, ve, be, ge, ye, xe, Ce, _e, we, ke, Se, Ee, Ne, Ie, De, Pe, Ae, Re, Fe, je, Be, Oe, Te, Me, Ve, Ue, He, Le, Ke, We, Xe, Ye, ze, $e, Qe, qe, Ge, Ze, Je, et, tt, nt, rt, it, at, ot, dt, lt, ct, st, ut, ft, ht, pt, mt, vt, bt, gt, yt, xt, Ct, _t, wt, kt, St, Et, Nt, It, Dt = {}, Pt, At, Rt, Ft, jt, Bt, Ot, Tt;
    t = function(e) {
        var t = typeof Symbol === "function" && e[Symbol.iterator], n = 0;
        if (t) return t.call(e);
        return {
            next: function() {
                e && n >= e.length && (e = void 0);
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
    function Mt(e) {
        return document.createTextNode(e);
    }
    function Vt(e) {
        return document.createElement(e);
    }
    function Ut(t) {
        return t === null ? e : t;
    }
    function Ht(e) {
        return typeof e == "number";
    }
    function Lt(e) {
        return typeof e == "string";
    }
    function Kt(e) {
        return typeof e == "boolean";
    }
    function Wt(e) {
        return typeof e == "function";
    }
    function Xt(e) {
        return typeof e === "object";
    }
    Object.assign == e && (Object.assign = function t(n) {
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
    });
    Object.is || (Object.is = function(e, t) {
        if (e === t) {
            return e !== 0 || 1 / e === 1 / t;
        } else {
            return e !== e && t !== t;
        }
    });
    u = Object.prototype.hasOwnProperty;
    f = Object.assign;
    function Yt(e, t, n) {
        e[t] || Object.defineProperty(e, t, {
            value: n,
            configurable: !0,
            writable: !0
        });
    }
    Yt(Array.prototype, "find", function(e) {
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
    Yt(Array.prototype, "findIndex", function(e) {
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
    Yt(Array.prototype, "some", function(e) {
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
    Yt(String.prototype, "includes", function(e, t) {
        Ht(t) || (t = 0);
        if (t + e.length > this.length) {
            return !1;
        } else {
            return this.indexOf(e, t) !== -1;
        }
    });
    Yt(String.prototype, "startsWith", function(e, t) {
        return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
    });
    Yt(String.prototype, "endsWith", function(e, t) {
        var n, r;
        n = this.toString();
        (!Ht(t) || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length);
        t -= e.length;
        r = n.indexOf(e, t);
        return r !== -1 && r === t;
    });
    h = !1;
    p = !1;
    m = [];
    v = [];
    b = function(e, t, n, r) {
        n !== r && (e[fe] = n);
    };
    function zt(e) {
        var t = b;
        b = e;
        return t;
    }
    function $t() {
        return Object.create(null);
    }
    g = [ "Webkit", "Moz", "ms", "O" ];
    y = document.createElement("div").style;
    function Qt(e) {
        return Lt(y[e]);
    }
    x = new Map();
    C = {
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
    function qt(t) {
        return function(n, r, i) {
            n[t] = r;
            n[i] = e;
        };
    }
    function Gt(t) {
        return function(n, r, i) {
            if (Ht(r)) {
                n[t] = r + "px";
            } else {
                n[t] = r;
            }
            n[i] = e;
        };
    }
    function Zt(e, t, n) {
        Ht(t) && (e[n] = t + "px");
    }
    function Jt() {
        return document.documentMode;
    }
    function en(t) {
        var n, r, i, a, o, d, l, c;
        n = Object.keys(t);
        for (r = 0, i = n.length; r < i; r++) {
            a = n[r];
            o = x.get(a);
            d = t[a];
            if (d === e) continue;
            if (o === e) {
                if (Qt(a)) {
                    o = C[a] === !0 ? wi : Zt;
                } else {
                    l = a.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (c = 0; c < g.length; c++) {
                        if (Qt(g[c] + l)) {
                            o = (C[a] === !0 ? qt : Gt)(g[c] + l);
                            break;
                        }
                    }
                    o === e && (o = C[a] === !0 ? wi : Zt);
                }
                x.set(a, o);
            }
            o(t, d, a);
        }
    }
    function tn(e, t) {
        e[t] = "";
    }
    function nn(e, t, n) {
        var r;
        if (Lt(n)) {
            r = n.length;
            if (r > 11 && n.substr(r - 11, 11) === " !important") {
                e.setProperty(Ii(t), n.substr(0, r - 11), "important");
                return;
            }
        }
        e[t] = n;
    }
    function rn(t, n, r) {
        var i, a, o;
        i = t.style;
        if (Xt(n)) {
            en(n);
            if (Xt(r)) {
                for (a in r) {
                    if (r[a] === e) continue;
                    n[a] === e && tn(i, a);
                }
                for (a in n) {
                    o = n[a];
                    if (o !== e) {
                        r[a] !== o && nn(i, a, o);
                    } else r[a] !== e && tn(i, a);
                }
            } else {
                r && (i.cssText = "");
                for (a in n) {
                    o = n[a];
                    o !== e && nn(i, a, o);
                }
            }
        } else if (n) {
            i.cssText = n;
        } else {
            if (Xt(r)) {
                for (a in r) {
                    tn(i, a);
                }
            } else r && (i.cssText = "");
        }
    }
    function an(e, t) {
        if (h) e.setAttribute("class", t); else e.className = t;
    }
    _ = /^input$|^select$|^textarea$|^button$/;
    w = "tabindex";
    function on(t, n) {
        if (t == e) return !1;
        if (_.test(t)) return !0;
        if (t === "a" && n != null && n.href != null) return !0;
        return !1;
    }
    function dn(t, n, r, i, a) {
        var o = !1, d, l, c, s, u;
        if (r != null) for (d in r) {
            l = r[d];
            c = i[d];
            if (a && d === w) {
                l = -1;
                o = !0;
            } else if (d === fe && !h) {
                if (Wt(l)) {
                    i[ce] = l;
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
        if (a && !o && on(t.tag, r)) {
            n.setAttribute(w, "-1");
            i[w] = -1;
        }
        if (r == e) {
            for (d in i) {
                if (i[d] !== e) {
                    if (a && d === w) continue;
                    if (d === ce) continue;
                    i[d] = e;
                    n.removeAttribute(d);
                }
            }
        } else {
            for (d in i) {
                if (i[d] !== e && !(d in r)) {
                    if (a && d === w) continue;
                    if (d === ce) continue;
                    i[d] = e;
                    n.removeAttribute(d);
                }
            }
        }
        u !== e && b(n, t, u, s);
        return i;
    }
    function ln(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postInitDom;
            if (n) {
                m.push(n);
                v.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & r) {
                m.push(Bi);
                v.push(e);
            }
        }
    }
    function cn(e) {
        var t, n, r;
        t = e.component;
        if (t) {
            n = t.postUpdateDom;
            if (n) {
                m.push(n);
                v.push(e);
            }
            r = e.ctx.$hookFlags || 0;
            if (r & i) {
                m.push(Oi);
                v.push(e);
            }
            n = t.postUpdateDomEverytime;
            if (n) {
                m.push(n);
                v.push(e);
            }
            if (r & a) {
                m.push(Ti);
                v.push(e);
            }
        }
    }
    function sn(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postUpdateDomEverytime;
            if (n) {
                m.push(n);
                v.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & a) {
                m.push(Ti);
                v.push(e);
            }
        }
    }
    function un(t) {
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
    function fn(t, n) {
        var r, i;
        if (t === e) return;
        if ("current" in t) {
            t.current = n;
        } else if (Wt(t)) {
            t(n);
        } else if (l(t)) {
            r = t[0];
            i = r.refs;
            if (i === e) {
                i = $t();
                r.refs = i;
            }
            i[t[1]] = n;
        }
    }
    k = [];
    S = null;
    function hn(t, n, r, i) {
        var a, o, d, l, c, s, u, f, m, v, b, g, y, x, C, _;
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
        fn(a.ref, a);
        if (l) {
            if (l.ctxClass) {
                c = new l.ctxClass(a.data || {}, a);
                c.data === e && (c.data = a.data || {});
                c.me === e && (c.me = a);
            } else {
                c = {
                    data: a.data || {},
                    me: a,
                    cfg: e
                };
            }
            c.cfg = t.cfg === e ? un(n) : t.cfg;
            a.ctx = c;
            Ft = c;
            l.init && l.init(c, a);
            X !== W && X(t, 0);
            l.render && l.render(c, a);
            Ft = e;
        } else {}
        s = a.tag;
        if (s === "-") {
            a.tag = e;
            a.children = e;
            return a;
        } else if (s === "@") {
            r = a.data;
            N.set(r, a);
            i = null;
            s = e;
        }
        u = a.children;
        f = !1;
        if (Ht(u)) {
            u = "" + u;
            a.children = u;
        }
        if (s === e) {
            if (Lt(u)) {
                m = Mt(u);
                a.element = m;
                r.insertBefore(m, i);
            } else {
                mn(a, r, i);
            }
            if (l) {
                l.postRender && l.postRender(a.ctx, a);
                ln(a);
            }
            return a;
        }
        if (s === "/") {
            v = u;
            if (v === "") {} else if (i == e) {
                b = r.lastChild;
                r.insertAdjacentHTML("beforeend", v);
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
                m = i;
                g = i.previousSibling;
                y = !1;
                x = r;
                if (!m.insertAdjacentHTML) {
                    m = x.insertBefore(Vt("i"), m);
                    y = !0;
                }
                m.insertAdjacentHTML("beforebegin", v);
                if (g) {
                    g = g.nextSibling;
                } else {
                    g = x.firstChild;
                }
                C = [];
                while (g !== m) {
                    C.push(g);
                    g = g.nextSibling;
                }
                a.element = C;
                y && x.removeChild(m);
            }
            if (l) {
                l.postRender && l.postRender(a.ctx, a);
                ln(a);
            }
            return a;
        }
        if (h || s === "svg") {
            m = document.createElementNS("http://www.w3.org/2000/svg", s);
            f = s === "foreignObject";
            h = !f;
        } else {
            m = Vt(s);
        }
        r.insertBefore(m, i);
        a.element = m;
        mn(a, m, null);
        l && (l.postRender && l.postRender(a.ctx, a));
        p && S === a && (p = !1);
        f && (h = !0);
        (a.attrs || p) && (a.attrs = dn(a, m, a.attrs, {}, p));
        a.style && rn(m, a.style, e);
        _ = a.className;
        _ && an(m, _);
        h = o;
        p = d;
        ln(a);
        return a;
    }
    function pn(t) {
        if (t === !1 || t === !0 || t === null) return e;
        if (Lt(t)) {
            return {
                children: t
            };
        }
        if (Ht(t)) {
            return {
                children: "" + t
            };
        }
        return t;
    }
    function mn(e, t, n) {
        var r, i, a;
        r = e.children;
        if (Lt(r)) {
            t.textContent = r;
            return;
        }
        i = [];
        jn(i, r);
        for (a = 0; a < i.length; a++) {
            i[a] = hn(i[a], e, t, n);
        }
        e.children = i;
    }
    function vn(t) {
        var n, r, i, a, o, d, c, s;
        fn(t.ref, e);
        n = t.children;
        if (l(n)) {
            for (r = 0, i = n.length; r < i; r++) {
                vn(n[r]);
            }
        }
        a = t.component;
        if (a) {
            o = t.ctx;
            Ft = o;
            X !== W && X(t, 3);
            a.destroy && a.destroy(o, t, t.element);
            d = o.disposables;
            if (l(d)) {
                for (c = d.length; c-- > 0; ) {
                    s = d[c];
                    if (Wt(s)) s(o); else s.dispose();
                }
            }
            Ft = e;
        }
        if (t.tag === "@") {
            N.delete(t.data);
            bn(t);
        }
    }
    function bn(e) {
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
            i && i.removeChild(t);
        } else {
            a = e.children;
            if (l(a)) {
                for (o = 0, d = a.length; o < d; o++) {
                    bn(a[o]);
                }
            }
        }
    }
    function gn(e) {
        vn(e);
        bn(e);
    }
    E = $t();
    N = new Map();
    function yn(t, n, r, i) {
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
                    s = yn(o[c], n, r, i);
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
    function xn(t) {
        var n = [], r, i, a, o, d, l, c, s, u, f, h, p, m;
        if (t == e) return n;
        r = Object.keys(E);
        i = r.map(function(e) {
            return E[e].e || document.body;
        });
        a = r.map(function(e) {
            return E[e].n;
        });
        N.forEach(function(e, t) {
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
                    f = yn(s, c, n.length, n);
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
                f = yn(m, c, n.length, n);
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
    function Cn(e) {
        var t, n;
        t = xn(e);
        n = null;
        while (n === null) {
            n = t.pop();
        }
        return n;
    }
    function _n(t, n, r) {
        if (r) {
            if (r.postRender) {
                Ft = n.ctx;
                r.postRender(Ft, t, n);
                Ft = e;
            }
        }
        n.data = t.data;
        cn(n);
    }
    function wn(t, n, r) {
        var i, a;
        Ft = e;
        if (l(t.children)) {
            i = h;
            a = p;
            if (t.tag === "svg") {
                h = !0;
            } else h && t.tag === "foreignObject" && (h = !1);
            p && S === t && (p = !1);
            Ln(t.children, t.element || n, t.element != null ? null : r);
            h = i;
            p = a;
        }
        sn(t);
    }
    function kn(t, n, r, i, a, o) {
        var d, c = !1, u, m, v, b, g, y, x, C, _, w, k, E;
        d = t.component;
        u = n.ctx;
        if (d != null && u != null) {
            m = !1;
            if (u[j] >= V) {
                a = Math.max(a, u[B]);
                m = !0;
            }
            if (d.id !== n.component.id) {
                c = !0;
            } else {
                Ft = u;
                if (t.cfg !== e) u.cfg = t.cfg; else u.cfg = un(n.parent);
                if (d.shouldChange) if (!d.shouldChange(u, t, n) && !Z && !m) {
                    wn(n, r, i);
                    return n;
                }
                u.data = t.data || {};
                n.component = d;
                X !== W && X(t, o ? 2 : 1);
                if (d.render) {
                    n.orig = t;
                    t = f({}, t);
                    n.cfg = e;
                    t.cfg !== e && (t.cfg = e);
                    d.render(u, t, n);
                    if (t.cfg !== e) {
                        if (n.cfg === e) n.cfg = t.cfg; else f(n.cfg, t.cfg);
                    }
                }
                Ft = e;
            }
        } else {
            if (n.orig === t && !Z) {
                wn(n, r, i);
                return n;
            }
            n.orig = t;
        }
        v = t.children;
        b = n.children;
        g = t.tag;
        if (g === "-") {
            wn(n, r, i);
            return n;
        }
        y = h;
        x = p;
        Ht(v) && (v = "" + v);
        if (c || d != e && u == e || d == e && u != e && u.me.component !== s) {} else if (g === "/") {
            if (n.tag === "/" && b === v) {
                _n(t, n, d);
                return n;
            }
        } else if (g === n.tag) {
            if (g === "@") {
                if (t.data !== n.data) {
                    C = hn(t, n.parent, t.data, null);
                    gn(n);
                    return C;
                }
                r = t.data;
                i = En(n);
                i != null && (i = i.nextSibling);
                g = e;
            }
            if (g === e) {
                if (Lt(v) && Lt(b)) {
                    if (v !== b) {
                        _ = n.element;
                        _.textContent = v;
                        n.children = v;
                    }
                } else {
                    p && S === n && (p = !1);
                    if (a <= 0) {
                        l(b) && Ln(n.children, r, i);
                    } else {
                        n.children = Bn(r, v, b, n, i, a - 1);
                    }
                    h = y;
                    p = x;
                }
                _n(t, n, d);
                return n;
            } else {
                w = !1;
                if (g === "svg") {
                    h = !0;
                } else if (h && g === "foreignObject") {
                    w = !0;
                    h = !1;
                }
                p && S === n && (p = !1);
                _ = n.element;
                if (Lt(v) && !l(b)) {
                    if (v !== b) {
                        _.textContent = v;
                        b = v;
                    }
                } else {
                    if (a <= 0) {
                        l(b) && Ln(n.children, _, null);
                    } else {
                        b = Bn(_, v, b, n, null, a - 1);
                    }
                }
                n.children = b;
                w && (h = !0);
                _n(t, n, d);
                (n.attrs || t.attrs || p) && (n.attrs = dn(n, _, t.attrs, n.attrs || {}, p));
                rn(_, t.style, n.style);
                n.style = t.style;
                k = t.className;
                if (k !== n.className) {
                    an(_, k || "");
                    n.className = k;
                }
                h = y;
                p = x;
                return n;
            }
        }
        E = n.element;
        l(E) && (E = E[0]);
        if (E == e) E = r; else E = E.parentNode;
        C = hn(t, n.parent, E, Sn(n));
        gn(n);
        return C;
    }
    function Sn(t) {
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
            n = Sn(r[i]);
            if (n) return n;
        }
        return null;
    }
    function En(t) {
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
            n = En(r[i]);
            if (n) return n;
        }
        return null;
    }
    function Nn(t, n, r, i) {
        var a, o;
        while (++n < r) {
            a = t[n];
            if (a == e) continue;
            o = Sn(a);
            if (o != null) return o;
        }
        return i;
    }
    function In() {
        var t, n, r;
        t = v.length;
        for (n = 0; n < t; n++) {
            r = v[n];
            Ft = r.ctx;
            m[n].call(r.component, Ft, r, r.element);
        }
        Ft = e;
        m = [];
        v = [];
    }
    function Dn(e, t, n, r, i, a, o) {
        t[n] = kn(e, t[n], a, Nn(t, n, r, i), o);
    }
    function Pn(e, t, n) {
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
            Pn(a[i], t, n);
        }
    }
    function An(e, t, n, r, i) {
        var a, o, d;
        a = Nn(e, t, n, r);
        o = e[t];
        d = Sn(o);
        d != null && d !== a && Pn(o, i, a);
    }
    function Rn(e, t, n, r, i, a, o) {
        var d, l, c;
        d = Nn(t, n, r, i);
        l = t[n];
        c = Sn(l);
        c != null && c !== d && Pn(l, a, d);
        t[n] = kn(e, l, a, d, o);
    }
    function Fn(t, n) {
        var r, i;
        if (n == e) return;
        if (c(n)) {
            for (r = 0; r < n.length; r++) {
                Fn(t, n[r]);
            }
        } else {
            i = pn(n);
            i !== e && t.push(i);
        }
    }
    function jn(e, t) {
        Fn(e, t);
    }
    function Bn(t, n, r, i, a, o) {
        var d;
        r == e && (r = []);
        if (!l(r)) {
            t.firstChild && t.removeChild(t.firstChild);
            r = [];
        }
        d = [];
        jn(d, n);
        return On(t, d, r, i, a, o);
    }
    function On(t, n, r, i, a, o) {
        var d, l, c, s = 0, u = 0, f, h, p, m, v, b, g, y, x, C, _;
        d = n.length;
        l = r.length;
        c = l;
        while (s < d && u < c) {
            if (n[s].key === r[u].key) {
                Dn(n[s], r, u, l, a, t, o);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (n[d - 1].key === r[c - 1].key) {
                    d--;
                    c--;
                    Dn(n[d], r, c, l, a, t, o);
                    if (s < d && u < c) continue;
                }
                break;
            }
            if (s < d && u < c) {
                if (n[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    Rn(n[s], r, u, l, a, t, o);
                    s++;
                    u++;
                    continue;
                }
                if (n[d - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    d--;
                    Rn(n[d], r, c, l, a, t, o);
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
                r.splice(u, 0, hn(n[s], i, t, Nn(r, u - 1, l, a)));
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
                gn(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = $t();
        h = $t();
        p = s;
        m = u;
        v = 0;
        for (;u < c; u++) {
            b = r[u];
            g = b.key;
            if (g != null) {
                f[g] = u;
            } else v--;
        }
        y = -v - v;
        for (;s < d; s++) {
            b = n[s];
            g = b.key;
            if (g != null) {
                h[g] = s;
            } else v++;
        }
        y += v;
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
            C = r[u].key;
            if (C == e) {
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
            _ = f[g];
            if (_ === e) {
                r.splice(u, 0, hn(n[s], i, t, Nn(r, u - 1, l, a)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(C in h)) {
                gn(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === _ + x) {
                Dn(n[s], r, u, l, a, t, o);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[_ + x]);
                x++;
                r[_ + x] = null;
                Rn(n[s], r, u, l, a, t, o);
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
                gn(r[u]);
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
                r.splice(u, 0, hn(n[s], i, t, Nn(r, u - 1, l, a)));
                c++;
                l++;
                x++;
                u++;
            }
            s++;
        }
        if (!y) return r;
        y = y - Math.abs(v) >> 1;
        s = p;
        u = m;
        while (s < d) {
            if (u < c) {
                C = r[u].key;
                if (C != null) {
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
                Dn(n[s], r, s, l, a, t, o);
                y--;
                s++;
                u = s;
                continue;
            }
            if (g != null) {
                if (y === 0 && v < 0) {
                    while (!0) {
                        gn(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        v++;
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == e) u++;
                r[u].key;
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                An(r, s, l, a, t);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Rn(n[s], r, s, l, a, t, o);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, hn(n[s], i, t, Nn(r, s - 1, l, a)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            gn(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    I = !1;
    D = window.requestAnimationFrame;
    D && D(function(e) {
        e === +e && (I = !0);
    });
    P = window.setTimeout;
    A = Date.now || function() {
        return new Date().getTime();
    };
    R = A();
    F = 0;
    function Tn(e) {
        var t;
        if (I) {
            D(e);
        } else {
            t = 50 / 3 + F - A();
            t < 0 && (t = 0);
            P(function() {
                F = A();
                e(F - R);
            }, t);
        }
    }
    j = "$invalidated";
    B = "$deepness";
    O = !0;
    T = !1;
    M = !0;
    V = 0;
    U = {};
    function Mn(t, n, r) {
        var i;
        jt == e && (jt = {});
        i = jt[t] || [];
        i.push({
            priority: n,
            callback: r
        });
        jt[t] = i;
    }
    function Vn(e, t, n, r) {
        var i, a;
        i = U[e];
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
    function Un(e, t) {
        var n, r;
        if (t[0] == "!") return;
        n = t[0] == "^";
        r = t;
        if (t[0] == "@") {
            r = t.slice(1);
            e = document;
        }
        n && (r = t.slice(1));
        function i(n) {
            var r, i;
            n = n || window.event;
            r = n.target || n.srcElement || e;
            i = Cn(r);
            K++;
            Vn(t, n, r, i);
            K--;
            K == 0 && Q && Yn();
        }
        "on" + r in window && (e = window);
        e.addEventListener(r, i, H ? {
            capture: n,
            passive: !1
        } : n);
    }
    function Hn() {
        var t, n, r, i, a, o;
        if (jt === e) return;
        t = Object.keys(jt);
        for (n = 0; n < t.length; n++) {
            r = t[n];
            i = jt[r];
            i = i.sort(function(e, t) {
                return e.priority - t.priority;
            });
            U[r] = i.map(function(e) {
                return e.callback;
            });
        }
        jt = e;
        a = document.body;
        for (o = 0; o < t.length; o++) {
            Un(a, t[o]);
        }
    }
    function Ln(t, n, r) {
        var i, a, o, d, c, s, u;
        i = t.length;
        for (a = 0; a < i; a++) {
            o = t[a];
            d = o.ctx;
            if (d != null && d[j] >= V) {
                t[a] = kn(o.orig, o, n, Nn(t, a, i, r), d[B], !0);
            } else if (l(o.children)) {
                c = h;
                s = p;
                p && S === o && (p = !1);
                if (o.tag === "svg") h = !0; else h && o.tag === "foreignObject" && (h = !1);
                u = o.element;
                if (u != e) {
                    Ln(o.children, u, null);
                } else {
                    Ln(o.children, n, Nn(t, a, i, r));
                }
                sn(o);
                h = c;
                p = s;
            }
        }
    }
    W = function() {};
    X = W;
    Y = function() {};
    z = function() {};
    $ = function() {};
    function Kn(e) {
        var t = Y;
        Y = e;
        return t;
    }
    function Wn(e) {
        var t = $;
        $ = e;
        return t;
    }
    function Xn(t, n, r) {
        var i, a, o;
        while (n != null) {
            if (t === n) return !0;
            i = n.parent;
            if (i == e) {
                for (a = 0; a < r.length; a++) {
                    o = E[r[a]];
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
    Q = !1;
    function Yn() {
        Q = !1;
        $n(A() - R);
        Mi();
    }
    function zn(e) {
        T = !1;
        $n(e);
        le(Mi);
    }
    q = ji({
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
    function $n(t) {
        var n, r, i, a, o, d, c, s, u, f;
        A();
        Hn();
        z();
        V++;
        Z = G;
        G = !1;
        Y();
        n = !1;
        if (O) {
            O = !1;
            n = !0;
        }
        K++;
        for (r = 0; r < 2; r++) {
            S = k.length === 0 ? null : k[k.length - 1];
            p = !1;
            Bt = Object.keys(E);
            for (i = 0; i < Bt.length; i++) {
                a = E[Bt[i]];
                if (!a) continue;
                o = a.n;
                d = null;
                for (c = i + 1; c < Bt.length; c++) {
                    s = E[Bt[c]];
                    if (s === e) continue;
                    d = Sn(s.n);
                    if (d != null) break;
                }
                S && (p = !Xn(S, a.p, Bt));
                a.e === e && (a.e = document.body);
                if (o) {
                    if (n || o.ctx[j] >= V) {
                        u = q(a);
                        kn(u, o, a.e, d, n ? 1e6 : o.ctx[B]);
                    } else {
                        l(a.c) && Ln(a.c, a.e, d);
                    }
                } else {
                    u = q(a);
                    o = hn(u, e, a.e, d);
                    a.n = o;
                }
                a.c = o.children;
            }
            Bt = e;
            In();
            if (!Q) break;
        }
        Q = !1;
        K--;
        f = E["0"];
        $(f ? f.c : null);
        A();
    }
    G = !1;
    Z = !1;
    function Qn() {
        G = !0;
        J();
    }
    function qn(e) {
        var t = J;
        J = e;
        return t;
    }
    J = function(t, n) {
        if (t != null) {
            n == e && (n = 1e6);
            if (t[j] !== V + 1) {
                t[j] = V + 1;
                t[B] = n;
            } else {
                n > t[B] && (t[B] = n);
            }
        } else {
            O = !0;
        }
        if (T || M) return;
        T = !0;
        Tn(zn);
    };
    ee = 0;
    function Gn(t, n, r) {
        var i;
        ee++;
        i = "" + ee;
        E[i] = {
            f: t,
            e: n,
            c: [],
            p: r,
            n: e
        };
        if (Bt != null) {
            Bt.push(i);
        } else {
            tr();
        }
        return i;
    }
    function Zn(e) {
        var t = E[e];
        if (!t) return;
        t.n && gn(t.n);
        delete E[e];
    }
    function Jn() {
        return E;
    }
    function er() {
        M = !1;
        J();
    }
    te = er;
    function tr() {
        M = !0;
        te();
        te = er;
    }
    function nr(t, n) {
        Zn("0");
        E["0"] = {
            f: t,
            e: n,
            c: [],
            p: e,
            n: e
        };
        tr();
    }
    function rr(e) {
        var t = te;
        te = function() {
            e(t);
        };
    }
    function ir(t, n, r) {
        var i, a, d, l, c, s, u, f, h, p;
        if (r == e) {
            r = {
                target: t
            };
        } else Xt(r) && r.target == e && (r.target = t);
        i = dr(n, r);
        if (i != e) return i;
        a = Ot;
        while (t) {
            d = t.component;
            if (d) {
                l = t.ctx;
                Ot = l;
                if (((l.$hookFlags || 0) & o) === o) {
                    c = l.$hooks;
                    for (s = 0, u = c.length; s < u; s++) {
                        f = c[s];
                        if (f instanceof At) {
                            h = f.events[n];
                            if (h !== e) {
                                p = +h.call(l, r);
                                if (p == 1) {
                                    Ot = a;
                                    return l;
                                }
                                if (p == 2) {
                                    Ot = a;
                                    return e;
                                }
                                p == Dt.NotHandledPreventDefault && (i = l);
                            }
                        }
                    }
                }
                h = d[n];
                if (h) {
                    p = +h.call(d, l, r);
                    if (p == 1) {
                        Ot = a;
                        return l;
                    }
                    if (p == 2) {
                        Ot = a;
                        return e;
                    }
                    p == Dt.NotHandledPreventDefault && (i = l);
                }
                h = d.shouldStopBubble;
                if (h) {
                    if (h.call(d, l, n, r)) break;
                }
            }
            t = t.parent;
        }
        Ot = a;
        return i;
    }
    function ar(t, n, r) {
        var i, a, d, c, s, u, f, h, p, m, v, b;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            d = Ot;
            Ot = a;
            if (((a.$hookFlags || 0) & o) === o) {
                c = a.$hooks;
                for (s = 0, u = c.length; s < u; s++) {
                    f = c[s];
                    if (f instanceof At) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == 1) {
                                Ot = d;
                                return a;
                            }
                            if (p == 2) {
                                Ot = d;
                                return e;
                            }
                            p == Dt.NotHandledPreventDefault && (m = a);
                        }
                    }
                }
            }
            h = i[n];
            if (h) {
                p = +h.call(i, a, r);
                if (p == 1) {
                    Ot = d;
                    return a;
                }
                if (p == 2) {
                    Ot = d;
                    return e;
                }
                p == Dt.NotHandledPreventDefault && (m = a);
            }
            h = i.shouldStopBroadcast;
            if (h) {
                if (h.call(i, a, n, r)) {
                    Ot = d;
                    return m;
                }
            }
            Ot = d;
        }
        v = t.children;
        if (l(v)) {
            for (s = 0; s < v.length; s++) {
                b = ar(v[s], n, r);
                if (b != e) return b;
            }
        }
        return m;
    }
    function or(t, n, r) {
        var i, a, o, c, s, u, f, h, p, m, v, b;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            if (((a.$hookFlags || 0) & d) === d) {
                o = a.$hooks;
                c = Ot;
                Ot = a;
                for (s = 0, u = o.length; s < u; s++) {
                    f = o[s];
                    if (f instanceof Rt) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == 1) {
                                Ot = c;
                                return a;
                            }
                            if (p == 2) {
                                Ot = c;
                                return e;
                            }
                            p == Dt.NotHandledPreventDefault && (m = a);
                        }
                    }
                }
                Ot = c;
            }
        }
        v = t.children;
        if (l(v)) {
            for (s = 0, u = v.length; s < u; s++) {
                b = or(v[s], n, r);
                if (b != e) return b;
            }
        }
        return m;
    }
    function dr(t, n) {
        var r, i, a, o;
        r = Object.keys(E);
        for (i = 0; i < r.length; i++) {
            a = E[r[i]].n;
            if (a != null) {
                o = or(a, t, n);
                if (o != null) return o;
            }
        }
        return e;
    }
    function lr(t, n) {
        var r, i, a, o;
        r = dr(t, n);
        if (r != null) return r;
        i = Object.keys(E);
        for (a = 0; a < i.length; a++) {
            o = E[i[a]].n;
            if (o != null) {
                r = ar(o, t, n);
                if (r != null) return r;
            }
        }
        return e;
    }
    function cr(e) {
        var t = e.preventDefault;
        if (t) t.call(e); else e.returnValue = !1;
    }
    function sr(e) {
        var t, n;
        e = e.slice(0);
        for (t = 0; t < e.length; t++) {
            n = e[t];
            if (l(n)) {
                e[t] = sr(n);
            } else Xt(n) && (e[t] = ur(n));
        }
        return e;
    }
    function ur(e) {
        var t, n;
        t = f({}, e);
        t.attrs && (t.attrs = f({}, t.attrs));
        Xt(t.style) && (t.style = f({}, t.style));
        n = t.children;
        if (n) {
            if (l(n)) {
                t.children = sr(n);
            } else Xt(n) && (t.children = ur(n));
        }
        return t;
    }
    function fr(e, t) {
        x.set(e, t);
    }
    fr("float", qt("cssFloat"));
    ne = null;
    re = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function hr() {
        ne = null;
        J();
        return !1;
    }
    ie = [ "resize", "orientationchange" ];
    for (ae = 0; ae < ie.length; ae++) Mn(ie[ae], 10, hr);
    oe = window.document.documentElement;
    de = /Android/i.test(navigator.userAgent);
    function pr() {
        var t, n, r, i, a, o;
        if (ne == e) {
            t = oe.clientWidth;
            n = oe.clientHeight;
            r = window.orientation;
            i = n >= t;
            if (r == e) r = i ? 0 : 90; else r = +r;
            if (de) {
                a = Math.abs(r) % 180 === 90;
                if (Tt == e) {
                    Tt = a === i;
                } else {
                    i = a === Tt;
                }
            }
            o = 0;
            while (t > re[+!i][o]) o++;
            ne = {
                width: t,
                height: n,
                orientation: r,
                deviceCategory: o,
                portrait: i,
                dppx: window.devicePixelRatio
            };
        }
        return ne;
    }
    le = function() {
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
                t.length || n.setAttribute("yes", "no");
                t.push(e);
            };
        } else {
            r = window.setImmediate || P;
            return function(n) {
                t.push(n);
                i || (i = r(function() {
                    i = e;
                    a();
                }, 0));
            };
        }
    }();
    window.Promise || function() {
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
            le(function() {
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
                        --r === 0 && t(e);
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
    }();
    ce = "b$value";
    se = "b$selStart";
    ue = "b$selEnd";
    fe = "value";
    function mr(e) {
        var t = e.type;
        return t === "checkbox" || t === "radio";
    }
    function vr(e, t) {
        var n, r;
        n = e.length;
        if (n !== t.length) return !1;
        for (r = 0; r < n; r++) {
            if (e[r] !== t[r]) return !1;
        }
        return !0;
    }
    function br(e, t) {
        var n;
        for (n = 0; n < e.length; n++) {
            if (e[n] === t) return !0;
        }
        return !1;
    }
    function gr(e) {
        var t = [], n;
        for (n = 0; n < e.length; n++) {
            e[n].selected && t.push(e[n].value);
        }
        return t;
    }
    he = zt(function(t, n, r, i) {
        var a, o, d, l, c, u, f, h, p, m, v;
        a = t.tagName;
        o = a === "SELECT";
        d = a === "INPUT" || a === "TEXTAREA";
        if (!d && !o) {
            he(t, n, r, i);
            return;
        }
        if (n.ctx === e) {
            n.ctx = {
                data: e,
                me: n
            };
            n.component = s;
        }
        i === e && (n.ctx[ce] = r);
        l = o && t.multiple;
        c = !1;
        if (l) {
            u = t.options;
            f = gr(u);
            if (!vr(r, f)) {
                if (i === e || vr(f, i) || !vr(r, n.ctx[ce])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = br(r, u[h].value);
                    }
                    f = gr(u);
                    vr(f, r) && (c = !0);
                } else {
                    c = !0;
                }
            }
        } else if (d || o) {
            if (d && mr(t)) {
                p = t.checked;
                if (r !== p) {
                    if (i === e || p === i || r !== n.ctx[ce]) {
                        t.checked = r;
                    } else {
                        c = !0;
                    }
                }
            } else {
                m = o && t.size < 2;
                v = t[fe];
                if (r !== v) {
                    if (i === e || v === i || r !== n.ctx[ce]) {
                        if (o) {
                            if (r === "") {
                                t.selectedIndex = m ? 0 : -1;
                            } else {
                                t[fe] = r;
                            }
                            if (r !== "" || m) {
                                v = t[fe];
                                r !== v && (c = !0);
                            }
                        } else {
                            t[fe] = r;
                        }
                    } else {
                        c = !0;
                    }
                }
            }
        }
        if (c) {
            yr(e, t, n);
        } else {
            n.ctx[ce] = r;
        }
    });
    function yr(t, n, r) {
        var i, a, o, d, l, c, u, f, h, p, m, v, b, g, y, x, C, _, w;
        if (n && n.nodeName === "OPTION") {
            n = document.activeElement;
            r = Cn(n);
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
            l = gr(n.options);
            if (!vr(i[ce], l)) {
                i[ce] = l;
                xr(r, l);
            }
        } else if (mr(n)) {
            if (t && t.type === "change") {
                P(function() {
                    yr(e, n, r);
                }, 10);
                return !1;
            }
            if (n.type === "radio") {
                c = document.getElementsByName(n.name);
                for (u = 0; u < c.length; u++) {
                    f = c[u];
                    h = Cn(f);
                    if (!h) continue;
                    p = h.ctx;
                    m = f.checked;
                    if (p[ce] !== m) {
                        p[ce] = m;
                        xr(h, m);
                    }
                }
            } else {
                v = n.checked;
                if (i[ce] !== v) {
                    i[ce] = v;
                    xr(r, v);
                }
            }
        } else {
            b = n.value;
            if (i[ce] !== b) {
                i[ce] = b;
                xr(r, b);
            }
            g = n.selectionStart;
            y = n.selectionEnd;
            x = n.selectionDirection;
            C = !1;
            _ = i[se];
            if (x == e) {
                y === _ && (C = !0);
            } else x === "backward" && (C = !0);
            if (C) {
                w = g;
                g = y;
                y = w;
            }
            Cr(r, g, y);
        }
        return !1;
    }
    function xr(e, t) {
        var n, r, i, a, o;
        n = Ot;
        r = e.ctx;
        i = e.component;
        Ot = r;
        a = e.attrs && e.attrs[ce];
        Wt(a) && a(t);
        o = i && i.onChange;
        Wt(o) && o(r, t);
        Ot = n;
        ir(e, "onInput", {
            target: e,
            value: t
        });
    }
    function Cr(e, t, n) {
        var r, i;
        r = e.component;
        i = e.ctx;
        if (r && (i[se] !== t || i[ue] !== n)) {
            i[se] = t;
            i[ue] = n;
            ir(e, "onSelectionChange", {
                target: e,
                startPosition: t,
                endPosition: n
            });
        }
    }
    function _r(e, t, n) {
        var r = ni();
        r && yr(e, r.element, r);
        return !1;
    }
    ie = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (ae = 0; ae < ie.length; ae++) Mn(ie[ae], 10, yr);
    pe = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (ae = 0; ae < pe.length; ae++) Mn(pe[ae], 2, _r);
    function wr(t) {
        return {
            target: e,
            shift: t.shiftKey,
            ctrl: t.ctrlKey,
            alt: t.altKey,
            meta: t.metaKey || !1,
            which: t.which || t.keyCode
        };
    }
    function kr(e, t, n) {
        var r;
        if (!n) return !1;
        r = wr(e);
        if (ir(n, "onKeyDown", r)) {
            cr(e);
            return !0;
        }
        return !1;
    }
    function Sr(e, t, n) {
        var r;
        if (!n) return !1;
        r = wr(e);
        if (ir(n, "onKeyUp", r)) {
            cr(e);
            return !0;
        }
        return !1;
    }
    function Er(e, t, n) {
        var r;
        if (!n) return !1;
        if (e.which === 0 || e.altKey) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (ir(n, "onKeyPress", r)) {
            cr(e);
            return !0;
        }
        return !1;
    }
    Mn("keydown", 50, kr);
    Mn("keyup", 50, Sr);
    Mn("keypress", 50, Er);
    me = 13;
    ve = 750;
    be = 500;
    ge = 800;
    ye = 50;
    xe = null;
    Ce = "onClick";
    _e = "onDoubleClick";
    function Nr(t, n) {
        var r, i, a, o;
        if (xe == e) {
            return !1;
        }
        r = xe.me.component;
        i = r[t];
        if (!i) {
            return !1;
        }
        a = Ot;
        Ot = xe;
        o = i.call(r, xe, n);
        Ot = a;
        return o;
    }
    function Ir(t) {
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
    function Dr(e) {
        var t;
        if (e.length) {
            for (t = e.length - 1; t >= 0; --t) {
                e[t].t.style.visibility = e[t].p;
            }
            return !0;
        }
        return !1;
    }
    function Pr(e, t) {
        e.push({
            t,
            p: t.style.visibility
        });
        t.style.visibility = "hidden";
    }
    function Ar(e, t) {
        Mn(e, 5, t);
    }
    we = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    function Rr(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function Fr(e, t, n, r) {
        var i = [], a;
        a = n;
        while (Ir(r)) {
            Pr(i, a);
            a = document.elementFromPoint(e, t);
            r = Cn(a);
        }
        Dr(i);
        return [ a, r ];
    }
    function jr(e) {
        return function t(n, r, i) {
            var a, o, d, l, c;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = Cn(r);
            if (Ir(i)) {
                a = Fr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            o = n.button + 1;
            d = Rr(n.pointerType);
            l = n.buttons;
            if (o === 0 && d === 0 && l) {
                o = 1;
                while (!(l & 1)) {
                    l = l >> 1;
                    o++;
                }
            }
            c = {
                target: i,
                id: n.pointerId,
                cancelable: Qr(n),
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
            if (Vn("!" + e, c, r, i)) {
                cr(n);
                return !0;
            }
            return !1;
        };
    }
    function Br(e) {
        return function t(n, r, i) {
            var a = !1, o, d, l;
            for (o = 0; o < n.changedTouches.length; o++) {
                d = n.changedTouches[o];
                r = document.elementFromPoint(d.clientX, d.clientY);
                i = Cn(r);
                l = {
                    target: i,
                    id: d.identifier + 2,
                    cancelable: Qr(n),
                    type: 1,
                    x: d.clientX,
                    y: d.clientY,
                    button: 1,
                    shift: n.shiftKey,
                    ctrl: n.ctrlKey,
                    alt: n.altKey,
                    meta: n.metaKey || !1,
                    count: n.detail
                };
                Vn("!" + e, l, r, i) && (a = !0);
            }
            if (a) {
                cr(n);
                return !0;
            }
            return !1;
        };
    }
    function Or(e) {
        return function t(n, r, i) {
            var a, o;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = Cn(r);
            if (Ir(i)) {
                a = Fr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            o = {
                target: i,
                id: 1,
                type: 0,
                cancelable: Qr(n),
                x: n.clientX,
                y: n.clientY,
                button: $r(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail
            };
            if (Vn("!" + e, o, r, i)) {
                cr(n);
                return !0;
            }
            return !1;
        };
    }
    function Tr() {
        Ar("mousedown", Or(we[0]));
        Ar("mousemove", Or(we[1]));
        Ar("mouseup", Or(we[2]));
    }
    if (window.ontouchstart !== e) {
        Ar("touchstart", Br(we[0]));
        Ar("touchmove", Br(we[1]));
        Ar("touchend", Br(we[2]));
        Ar("touchcancel", Br(we[3]));
        Tr();
    } else if (window.onpointerdown !== e) {
        for (ae = 0; ae < 4; ae++) {
            ke = we[ae];
            Ar(ke.toLowerCase(), jr(ke));
        }
    } else if (window.onmspointerdown !== e) {
        for (ae = 0; ae < 4; ae++) {
            ke = we[ae];
            Ar("@MS" + ke, jr(ke));
        }
    } else {
        Tr();
    }
    for (Se = 0; Se < 4; Se++) {
        (function(t) {
            var n = "on" + t;
            Mn("!" + t, 50, function(t, r, i) {
                return Nr(n, t) || ir(i, n, t) != e;
            });
        })(we[Se]);
    }
    Ee = $t();
    Ne = [];
    Ie = -1;
    De = 0;
    Pe = 0;
    Ae = 0;
    Re = !1;
    function Mr(e, t, n) {
        return Math.abs(e - t) < n;
    }
    Fe = [];
    function Vr(t) {
        var n, r, i, a, o, d, l, c;
        n = document.elementFromPoint(t.x, t.y);
        r = xn(n);
        i = r.length == 0 ? e : r[r.length - 1];
        if (Ir(i)) {
            a = Fr(t.x, t.y, n, i == e ? e : i);
            n = a[0];
            r = xn(n);
        }
        ir(i, "onMouseOver", t);
        o = 0;
        while (o < Fe.length && o < r.length && Fe[o] === r[o]) o++;
        d = Fe.length;
        if (d > 0 && (d > o || d != r.length)) {
            l = Fe[d - 1];
            if (l) {
                c = l.component;
                c && c.onMouseOut && c.onMouseOut(l.ctx, t);
            }
        }
        while (d > o) {
            d--;
            l = Fe[d];
            if (l) {
                c = l.component;
                c && c.onMouseLeave && c.onMouseLeave(l.ctx, t);
            }
        }
        while (d < r.length) {
            l = r[d];
            if (l) {
                c = l.component;
                c && c.onMouseEnter && c.onMouseEnter(l.ctx, t);
            }
            d++;
        }
        Fe = r;
        if (d > 0 && (d > o || d != Fe.length)) {
            l = Fe[d - 1];
            if (l) {
                c = l.component;
                c && c.onMouseIn && c.onMouseIn(l.ctx, t);
            }
        }
        return !1;
    }
    function Ur() {
        return Object.keys(Ee).length === 0;
    }
    function Hr(e, t, n) {
        if (Ie === -1 && Ur()) {
            Ie = e.id;
            De = A();
            Pe = e.x;
            Ae = e.y;
            Re = !1;
            Vr(e);
        }
        Ee[e.id] = e.type;
        Ie !== e.id && (Re = !0);
        return !1;
    }
    function Lr(e, t, n) {
        if (e.type === 0 && e.button === 0 && Ee[e.id] != null) {
            e.button = 1;
            Vn("!PointerUp", e, t, n);
            e.button = 0;
        }
        if (Ie === e.id) {
            Vr(e);
            (!Mr(Pe, e.x, me) || !Mr(Ae, e.y, me)) && (Re = !0);
        } else Ur() && Vr(e);
        return !1;
    }
    je = 0;
    Be = 0;
    function Kr(e) {
        var t;
        if (Be == 0) return !1;
        t = A();
        if (t < je + 1e3 && e >= Be) {
            je = t;
            Be = e;
            return !0;
        }
        Be = 0;
        return !1;
    }
    function Wr(e, t, n) {
        var r, i;
        delete Ee[e.id];
        if (Ie == e.id) {
            Vr(e);
            Ie = -1;
            if (e.type == 1 && !Re) {
                if (A() - De < ve) {
                    Vn("!PointerCancel", e, t, n);
                    Kr(1);
                    r = Nr(Ce, e) || ir(n, Ce, e) != null;
                    i = Jt() ? ge : be;
                    Ne.push([ e.x, e.y, A() + i, r ? 1 : 0 ]);
                    return r;
                }
            } else Re && Ue(e.x, e.y);
        }
        return !1;
    }
    function Xr(e, t, n) {
        delete Ee[e.id];
        Ie == e.id && (Ie = -1);
        return !1;
    }
    function Yr(e, t, n) {
        var r, i, a;
        r = A();
        for (i = 0; i < Ne.length; i++) {
            a = Ne[i];
            if (a[2] < r) {
                Ne.splice(i, 1);
                i--;
                continue;
            }
            if (Mr(a[0], e.clientX, ye) && Mr(a[1], e.clientY, ye)) {
                Ne.splice(i, 1);
                a[3] && cr(e);
                return !0;
            }
        }
        return !1;
    }
    Oe = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Te = [ Hr, Lr, Wr, Xr, Yr ];
    for (ae = 0; ae < 5; ae++) {
        Mn(Oe[ae], 3, Te[ae]);
    }
    function zr(e) {
        return function(t, n, r) {
            if (Ie != t.id && !Ur()) return !1;
            if (Nr(e, t) || ir(r, e, t)) {
                return !0;
            }
            return !1;
        };
    }
    Me = [ "Down", "Move", "Up", "Up" ];
    for (ae = 0; ae < 4; ae++) {
        Mn(Oe[ae], 80, zr("onMouse" + Me[ae]));
    }
    function $r(e) {
        return e.which || e.button;
    }
    function Qr(e) {
        var t = e.cancelable;
        return !Kt(t) || t;
    }
    function qr(e, t) {
        return function(n, r, i) {
            var a, o;
            a = $r(n) || 1;
            if (!t && a !== 1) return !1;
            o = {
                target: i,
                x: n.clientX,
                y: n.clientY,
                button: a,
                cancelable: Qr(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail || 1
            };
            e == _e && (o.count = 2);
            if (Kr(o.count) || Nr(e, o) || ir(i, e, o)) {
                cr(n);
                return !0;
            }
            return !1;
        };
    }
    function Gr(e, t) {
        var n, r, i;
        n = document.elementFromPoint(e, t);
        r = Cn(n);
        if (Ir(r)) {
            i = Fr(e, t, n, r);
            r = i[1];
        }
        return r;
    }
    function Zr(e, t, n) {
        var r, i;
        while (n) {
            r = n.style;
            if (r) {
                i = r.userSelect;
                if (i === "none") {
                    cr(e);
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
    Ar("selectstart", Zr);
    Ar("^click", qr(Ce));
    Ar("^dblclick", qr(_e));
    Ar("contextmenu", qr("onContextMenu", !0));
    Ve = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function Jr(e, t, n) {
        var r, i, a, o, d, l;
        if (Ir(n)) {
            r = Fr(e.x, e.y, t, n);
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
        if (Ve == "mousewheel") {
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
            cancelable: Qr(e),
            button: i,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            count: e.detail
        };
        if (Nr("onMouseWheel", l) || ir(n, "onMouseWheel", l)) {
            cr(e);
            return !0;
        }
        return !1;
    }
    Ar(Ve, Jr);
    Ue = function(e, t) {
        var n = Jt() ? ge : be;
        Ne.push([ e, t, A() + n, 1 ]);
    };
    He = e;
    Le = e;
    Ke = [];
    We = !1;
    function ei(t) {
        var n, r, i, a, o, d;
        if (We) return !1;
        We = !0;
        while (!0) {
            n = document.hasFocus() || t ? document.activeElement : e;
            if (n === He) break;
            He = n;
            r = xn(He);
            i = 0;
            while (i < Ke.length && i < r.length && Ke[i] === r[i]) i++;
            a = Ke.length - 1;
            if (a >= i) {
                o = Ke[a];
                ir(o, "onBlur");
                a--;
            }
            while (a >= i) {
                o = Ke[a];
                if (o) {
                    d = o.component;
                    d && d.onFocusOut && d.onFocusOut(o.ctx);
                }
                a--;
            }
            a = i;
            while (a + 1 < r.length) {
                o = r[a];
                if (o) {
                    d = o.component;
                    d && d.onFocusIn && d.onFocusIn(o.ctx);
                }
                a++;
            }
            if (a < r.length) {
                o = r[a];
                ir(o, "onFocus");
            }
            Ke = r;
            Le = Ke.length == 0 ? e : Ut(Ke[Ke.length - 1]);
        }
        We = !1;
        return !1;
    }
    function ti() {
        P(function() {
            return ei(!1);
        }, 10);
        return !1;
    }
    Mn("^focus", 50, function() {
        return ei(!0);
    });
    Mn("^blur", 50, ti);
    function ni() {
        return Le;
    }
    Xe = [];
    function ri(e, t, n) {
        var r, i;
        r = {
            node: n
        };
        for (i = 0; i < Xe.length; i++) {
            Xe[i](r);
        }
        dr("onScroll", r);
        return !1;
    }
    Mn("^scroll", 10, ri);
    Ye = 0;
    ze = [];
    $e = null;
    Qe = null;
    qe = function(t) {
        this.id = ++Ye;
        this.pointerid = t;
        this.enabledOperations = 7;
        this.operation = 0;
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
        this.data = $t();
        t >= 0 && (tt[t] = this);
        ze.push(this);
    };
    Ge = "b-dragging";
    function ii() {
        var t;
        if (Qe == e) {
            t = document.documentElement;
            t.classList.add(Ge);
            Qe = Gn(oi);
        }
    }
    Ze = {
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
    function ai() {
        var e = "no-drop", t;
        if (ze.length !== 0) {
            t = ze[0];
            if (t.beforeDrag) return "";
            if (t.cursor != null) return t.cursor;
            if (t.system) return "";
            switch (t.operation) {
              case 3:
                e = "move";
                break;

              case 1:
                e = "alias";
                break;

              case 2:
                e = "copy";
            }
        }
        return e;
    }
    Je = {
        render: function(e, t) {
            var n = [], r, i, a, o;
            for (r = 0; r < ze.length; r++) {
                i = ze[r];
                if (i.beforeDrag) continue;
                i.dragView != null && (i.x != 0 || i.y != 0) && n.push({
                    key: "" + i.id,
                    data: i,
                    component: Ze
                });
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
            o = ai();
            if (o) {
                a.cursor !== o && a.setProperty("cursor", o, "important");
            } else {
                a.setProperty("cursor", "");
            }
            t.children = n;
        },
        onDrag: function(e) {
            J(e);
            return !1;
        }
    };
    function oi() {
        return {
            component: Je
        };
    }
    et = qe.prototype;
    et.setOperation = function(e) {
        this.operation = e;
    };
    et.setDragNodeView = function(e) {
        this.dragView = e;
    };
    et.addData = function(e, t) {
        this.data[e] = t;
        return !0;
    };
    et.listData = function() {
        return Object.keys(this.data);
    };
    et.hasData = function(t) {
        return this.data[t] !== e;
    };
    et.getData = function(e) {
        return this.data[e];
    };
    et.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    et.cancelDnd = function() {
        li(e, this);
        this.destroy();
    };
    et.destroy = function() {
        var e, t;
        this.ended = !0;
        this.started && lr("onDragEnd", this);
        delete tt[this.pointerid];
        for (e = 0; e < ze.length; e++) {
            if (ze[e] === this) {
                ze.splice(e, 1);
                break;
            }
        }
        $e === this && ($e = null);
        if (ze.length === 0 && Qe != null) {
            Zn(Qe);
            Qe = null;
            t = document.documentElement;
            t.classList.remove(Ge);
            t.style.setProperty("cursor", "");
        }
    };
    tt = $t();
    function di(t, n, r) {
        var i, a, o, d, l;
        i = tt[t.id];
        i && i.cancelDnd();
        if (t.button <= 1) {
            i = new qe(t.id);
            i.startX = t.x;
            i.startY = t.y;
            i.lastX = t.x;
            i.lastY = t.y;
            i.overNode = r;
            ci(i, t);
            a = ir(r, "onDragStart", i);
            if (a) {
                o = Sn(a.me);
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
                    li(r, i);
                }
                ii();
            } else {
                i.destroy();
            }
        }
        return !1;
    }
    function li(t, n) {
        n.overNode = t;
        n.targetCtx = ir(t, "onDragOver", n);
        n.targetCtx == e && (n.operation = 0);
        lr("onDrag", n);
    }
    function ci(e, t) {
        e.shift = t.shift;
        e.ctrl = t.ctrl;
        e.alt = t.alt;
        e.meta = t.meta;
        e.x = t.x;
        e.y = t.y;
    }
    function si(e, t, n) {
        var r = tt[e.id];
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
        ci(r, e);
        li(n, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function ui(e, t, n) {
        var r, i;
        r = tt[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            ci(r, e);
            li(n, r);
            i = r.targetCtx;
            if (i && ir(i.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            Ue(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function fi(e, t, n) {
        var r = tt[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function hi(e, t) {
        var n;
        e.shift = t.shiftKey;
        e.ctrl = t.ctrlKey;
        e.alt = t.altKey;
        e.meta = t.metaKey;
        e.x = t.clientX;
        e.y = t.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        n = Gr(e.x, e.y);
        li(n, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    nt = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function pi(t, n, r) {
        var i, a, o, d, l, c, s, u, f, h, p, m, v, b, g, y, x, C, _, w, k;
        i = $e;
        i != null && i.destroy();
        a = Object.keys(tt);
        if (a.length > 0) {
            i = tt[a[0]];
            i.system = !0;
            $e = i;
        } else {
            o = t.clientX;
            d = t.clientY;
            i = new qe(-1);
            i.system = !0;
            $e = i;
            i.x = o;
            i.y = d;
            i.lastX = o;
            i.lastY = d;
            i.startX = o;
            i.startY = d;
            l = ir(r, "onDragStart", i);
            if (l) {
                c = Sn(l.me);
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
                ii();
            } else {
                i.destroy();
                return !1;
            }
        }
        i.beforeDrag = !1;
        f = nt[i.enabledOperations];
        h = t.dataTransfer;
        h.effectAllowed = f;
        if (h.setDragImage) {
            p = document.createElement("div");
            p.style.pointerEvents = "none";
            h.setDragImage(p, 0, 0);
        } else {
            m = t.target.style;
            v = m.opacity;
            b = m.width;
            g = m.height;
            y = m.padding;
            m.opacity = "0";
            m.width = "0";
            m.height = "0";
            m.padding = "0";
            P(function() {
                m.opacity = v;
                m.width = b;
                m.height = g;
                m.padding = y;
            }, 0);
        }
        x = i.data;
        C = Object.keys(x);
        for (_ = 0; _ < C.length; _++) {
            try {
                w = C[_];
                k = x[w];
                Lt(k) || (k = JSON.stringify(k));
                t.dataTransfer.setData(w, k);
            } catch (e) {}
        }
        hi(i, t);
        return !1;
    }
    function mi(e, t) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][t];
    }
    function vi(t, n, r) {
        var i, a, o, d, l, c, s;
        i = $e;
        if (i == e) {
            i = new qe(-1);
            i.system = !0;
            $e = i;
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
                if (nt[o] === d) break;
            }
            i.enabledOperations = o;
            l = a.types;
            if (l) {
                for (c = 0; c < l.length; c++) {
                    s = l[c];
                    if (s === "text/plain") s = "Text"; else s === "text/uri-list" && (s = "Url");
                    i.data[s] = null;
                }
            } else {
                a.getData("Text") !== e && (i.data["Text"] = null);
            }
        }
        hi(i, t);
        mi(t, i.operation);
        if (i.operation != 0) {
            cr(t);
            return !0;
        }
        return !1;
    }
    function bi(e, t, n) {
        var r, i, a;
        r = e.clientX;
        i = e.clientY;
        a = pr();
        if ($e != null && (r === 0 && i === 0 || r < 0 || i < 0 || r >= a.width || i >= a.height)) {
            $e.x = 0;
            $e.y = 0;
            $e.operation = 0;
            lr("onDrag", $e);
        }
        return !0;
    }
    function gi(e, t, n) {
        $e != null && $e.destroy();
        return !1;
    }
    function yi(t, n, r) {
        var i, a, o, d, l, c, s;
        i = $e;
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
        hi(i, t);
        s = i.targetCtx;
        if (s && ir(s.me, "onDrop", i)) {
            mi(t, i.operation);
            i.destroy();
            cr(t);
        } else {
            i.cancelDnd();
        }
        return !0;
    }
    function xi(e, t, n) {
        cr(e);
        return !0;
    }
    function Ci(e, t, n) {
        if (ze.length === 0) return !1;
        cr(e);
        return !0;
    }
    Mn("!PointerDown", 4, di);
    Mn("!PointerMove", 4, si);
    Mn("!PointerUp", 4, ui);
    Mn("!PointerCancel", 4, fi);
    Mn("selectstart", 4, Ci);
    Mn("dragstart", 5, pi);
    Mn("dragover", 5, vi);
    Mn("dragend", 5, gi);
    Mn("drag", 5, bi);
    Mn("drop", 5, yi);
    Mn("dragenter", 5, xi);
    Mn("dragleave", 5, xi);
    rt = function() {
        return ze;
    };
    it = -1;
    function _i() {
        it >= 0 && clearTimeout(it);
        it = -1;
        J();
        return !1;
    }
    Mn("hashchange", 10, _i);
    $t();
    function wi() {
        return e;
    }
    at = $t();
    ot = $t();
    dt = $t();
    $t();
    lt = $t();
    $t();
    ct = [];
    st = [];
    ut = $t();
    ft = "";
    ht = !1;
    pt = null;
    mt = 0;
    vt = Kn(Ni);
    bt = /\:|\ |\>/;
    function ki(e) {
        var t, n;
        t = bt.exec(e);
        if (!t) return at[e].name;
        n = t.index;
        return at[e.substring(0, n)].name + e.substring(n);
    }
    function Si(e, t) {
        var n = "", r;
        if (e) {
            if (l(e)) {
                for (r = 0; r < e.length; r++) {
                    r > 0 && (n += ",");
                    n += "." + ki(e[r]) + "." + t;
                }
            } else {
                n = "." + ki(e) + "." + t;
            }
        } else {
            n = "." + t;
        }
        return n;
    }
    function Ei(t, n, r, i) {
        var a, o, d, c, s, f;
        if (Lt(r)) {
            a = at[r];
            if (a === e) {
                throw new Error("Unknown style " + r);
            }
            Ei(t, n, a.style, a.pseudo);
        } else if (Wt(r)) {
            r(t, n);
        } else if (l(r)) {
            for (o = 0; o < r.length; o++) {
                Ei(t, n, r[o], e);
            }
        } else if (typeof r === "object") {
            for (s in r) {
                if (!u.call(r, s)) continue;
                d = r[s];
                Wt(d) && (d = d(t, s));
                t[s] = d;
            }
        }
        if (i != e && n != e) {
            for (f in i) {
                c = n[f];
                if (c === e) {
                    c = $t();
                    n[f] = c;
                }
                Ei(c, e, i[f], e);
            }
        }
    }
    gt = 0;
    yt = "";
    xt = 1;
    Ct = !1;
    _t = !0;
    function Ni() {
        var r, i, a, o, d, l, c, s, u, f, h, p, m, v, b, g, y, x, C, _, w, k, S, E, N, I, D, P, A, R, F, j, B, O, T, M, V, U, H, L, K, W, X, Y, z, $;
        if (Ct && gt != pr().dppx) {
            gt = pr().dppx;
            r = Nt;
            i = 1;
            if (gt > 1) {
                for (a = 0; a < It.length; a++) {
                    if (a == It.length - 1 || It[a][1] >= gt) {
                        r = It[a][0];
                        i = It[a][1];
                    } else break;
                }
            }
            if (yt != r) {
                yt = r;
                xt = i;
                ht = !0;
                _t = !0;
            }
        }
        if (ht) {
            if (Ct) {
                o = ut[yt];
                if (o === e) {
                    o = null;
                    ut[yt] = o;
                    Fi(yt, function(e) {
                        ut[yt] = e;
                        Ai();
                    });
                }
                if (o != null) {
                    for (d = 0; d < st.length; d++) {
                        l = st[d];
                        c = l.color;
                        Lt(c) || (c = c());
                        if (_t || c !== l.lastColor) {
                            l.lastColor = c;
                            s = l.width * xt | 0;
                            u = l.height * xt | 0;
                            f = Ri(o, c, s, u, l.left * xt | 0, l.top * xt | 0);
                            h = at[l.styleId];
                            h.style = {
                                backgroundImage: "url(" + f + ")",
                                width: l.width,
                                height: l.height,
                                backgroundPosition: 0,
                                backgroundSize: "100%"
                            };
                        }
                    }
                    if (_t) {
                        p = o.width / xt;
                        m = o.height / xt;
                        for (Y in lt) {
                            v = lt[Y];
                            if (v.color !== e) continue;
                            h = at[v.styleId];
                            b = v.width;
                            g = v.height;
                            y = 100 * p / b;
                            x = 100 * m / g;
                            h.style = {
                                backgroundImage: "url(" + yt + ")",
                                width: b,
                                height: g,
                                backgroundPosition: 100 * v.left / (p - b) + "% " + 100 * v.top / (m - g) + "%",
                                backgroundSize: y + "% " + x + "%"
                            };
                        }
                    }
                    _t = !1;
                }
            }
            for (C = 0; C < ct.length; C++) {
                l = ct[C];
                _ = ut[l.url];
                if (_ == e) continue;
                c = l.color();
                if (c !== l.lastColor) {
                    l.lastColor = c;
                    l.width == e && (l.width = _.width);
                    l.height == e && (l.height = _.height);
                    f = Ri(_, c, l.width, l.height, l.left, l.top);
                    h = at[l.styleId];
                    h.style = {
                        backgroundImage: "url(" + f + ")",
                        width: l.width,
                        height: l.height,
                        backgroundPosition: 0
                    };
                }
            }
            w = ft;
            for (z in ot) {
                k = ot[z];
                w += "@keyframes " + k.name + " {";
                for ($ in k.def) {
                    S = k.def[$];
                    E = $t();
                    Ei(E, e, S, e);
                    en(E);
                    w += $ + ($ == "from" || $ == "to" ? "" : "%") + " {" + Di(E) + "}\n";
                }
                w += "}\n";
            }
            for (z in at) {
                N = at[z];
                I = N.parent;
                D = N.name;
                P = N.pseudo;
                A = N.style;
                Wt(A) && A.length === 0 && (R = n(A(), 2), A = R[0], P = R[1]);
                if (Lt(A) && P == e) {
                    N.realName = A;
                    continue;
                }
                N.realName = D;
                F = $t();
                j = $t();
                Ei(e, j, e, P);
                Ei(F, j, A, e);
                B = null;
                if (F["pointerEvents"]) {
                    B = $t();
                    B["pointerEvents"] = F["pointerEvents"];
                }
                N.inlStyle = B;
                en(F);
                O = Di(F);
                O.length > 0 && (w += (D == e ? I : Si(I, D)) + " {" + O + "}\n");
                for ($ in j) {
                    S = j[$];
                    en(S);
                    w += (D == e ? I + ":" + $ : Si(I, D + ":" + $)) + " {" + Di(S) + "}\n";
                }
            }
            for (z in dt) {
                T = dt[z];
                w += "@media " + z + "{";
                try {
                    for (M = (L = void 0, t(T)), V = M.next(); !V.done; V = M.next()) {
                        U = V.value;
                        for ($ in U) {
                            S = U[$];
                            H = $t();
                            Ei(H, e, S, e);
                            en(H);
                            w += "." + $ + " {" + Di(H) + "}\n";
                        }
                    }
                } catch (e) {
                    L = {
                        error: e
                    };
                } finally {
                    try {
                        if (V && !V.done && (K = M.return)) K.call(M);
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
            if (pt != null) {
                X.replaceChild(W, pt);
            } else {
                X.appendChild(W);
            }
            pt = W;
            ht = !1;
        }
        vt();
    }
    wt = /([A-Z])/g;
    kt = /^ms-/;
    function Ii(e) {
        if (e === "cssFloat") return "float";
        return e.replace(wt, "-$1").toLowerCase().replace(kt, "-ms-");
    }
    function Di(t) {
        var n = "", r, i;
        for (i in t) {
            r = t[i];
            if (r === e) continue;
            n += Ii(i) + ":" + (r === "" ? '""' : r) + ";";
        }
        n = n.slice(0, -1);
        return n;
    }
    function Pi(t, n, r) {
        at["b-" + mt++] = {
            name: null,
            realName: null,
            parent: t,
            style: n,
            inlStyle: e,
            pseudo: r
        };
        Ai();
    }
    function Ai() {
        ht = !0;
        J();
    }
    St = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Ri(e, t, n, r, i, a) {
        var o, d, l, c, s, u, f, h, p, m, v, b;
        o = document.createElement("canvas");
        o.width = n;
        o.height = r;
        d = o.getContext("2d");
        d.drawImage(e, -i, -a);
        l = d.getImageData(0, 0, n, r);
        c = l.data;
        s = St.exec(t);
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
                v = c[m];
                if (v === c[m + 1] && v === c[m + 2] && (v === 128 || c[m + 3] < 255 && v > 112)) {
                    c[m] = u;
                    c[m + 1] = f;
                    c[m + 2] = h;
                }
            }
        } else {
            for (m = 0; m < c.length; m += 4) {
                v = c[m];
                b = c[m + 3];
                if (v === c[m + 1] && v === c[m + 2] && (v === 128 || b < 255 && v > 112)) {
                    if (b === 255) {
                        c[m] = u;
                        c[m + 1] = f;
                        c[m + 2] = h;
                        c[m + 3] = p;
                    } else {
                        b = b * (1 / 255);
                        c[m] = Math.round(u * b);
                        c[m + 1] = Math.round(f * b);
                        c[m + 2] = Math.round(h * b);
                        c[m + 3] = Math.round(p * b);
                    }
                }
            }
        }
        d.putImageData(l, 0, 0);
        return o.toDataURL();
    }
    Et = !1;
    function Fi(e, t) {
        var n = new Image();
        n.crossOrigin = Et ? "use-credentials" : "anonymous";
        n.addEventListener("load", function() {
            return t(n);
        });
        n.src = e;
    }
    Nt = window["bobrilBPath"] || "bundle.png";
    It = window["bobrilBPath2"] || [];
    Pi("html." + Ge + " *", {
        cursor: "inherit !important",
        userSelect: "none !important"
    });
    function ji(t) {
        return function(n, r) {
            if (r !== e) {
                n == e && (n = {});
                n.children = r;
            }
            return {
                data: n,
                component: t
            };
        };
    }
    window.b || (window.b = {
        deref: Cn,
        getRoots: Jn,
        setInvalidate: qn,
        invalidateStyles: Ai,
        ignoreShouldChange: Qn,
        setAfterFrame: Wn,
        setBeforeFrame: Kn,
        getDnds: rt,
        setBeforeInit: rr
    });
    (function(e) {
        e[e["NotHandled"] = 0] = "NotHandled";
        e[e["HandledPreventDefault"] = 1] = "HandledPreventDefault";
        e[e["HandledButRunDefault"] = 2] = "HandledButRunDefault";
        e[e["NotHandledPreventDefault"] = 3] = "NotHandledPreventDefault";
    })(Dt);
    function Bi(t) {
        var n, r, i, a, o;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            o = a.postInitDom;
            o !== e && o.call(a, t);
        }
    }
    function Oi(t) {
        var n, r, i, a, o;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            o = a.postUpdateDom;
            o !== e && o.call(a, t);
        }
    }
    function Ti(t) {
        var n, r, i, a, o;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            o = a.postUpdateDomEverytime;
            o !== e && o.call(a, t);
        }
    }
    Pt = [];
    function Mi() {
        var e, t, n;
        e = Pt;
        Pt = [];
        for (t = 0, n = e.length; t < n; t++) {
            e[t]();
        }
    }
    At = function() {
        function e() {}
        return e;
    }();
    Rt = function() {
        function e() {}
        return e;
    }();
    nr(function() {
        return "hello";
    });
})();

