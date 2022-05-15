(e => {
    var t, n, r, i, a, d, o, l, c, s, u, f, h, p, m, v, b, g, y, x, _, C, w, k, S, E, N, D, I, P, R, A, F, j, B, O, T, U, M, V, H, L, K, W = {}, X, Y, z, $, Q, q, G, Z, J, ee, te, ne, re, ie, ae, de, oe, le, ce, se, ue, fe, he, pe, me, ve, be, ge, ye, xe, _e, Ce, we, ke, Se, Ee, Ne, De, Ie, Pe, Re, Ae, Fe, je, Be, Oe, Te, Ue, Me, Ve, He, Le, Ke, We, Xe, Ye, ze, $e, Qe, qe, Ge, Ze, Je, et, tt, nt, rt, it, at, dt, ot, lt, ct, st, ut, ft, ht, pt, mt, vt, bt, gt, yt, xt, _t, Ct, wt, kt, St, Et, Nt, Dt, It, Pt = {}, Rt, At, Ft, jt, Bt, Ot, Tt, Ut;
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
        var n, r, i, a, d;
        n = typeof Symbol === "function" && e[Symbol.iterator];
        if (!n) return e;
        r = n.call(e);
        i = [];
        try {
            while ((t === void 0 || t-- > 0) && !(d = r.next()).done) i.push(d.value);
        } catch (e) {
            a = {
                error: e
            };
        } finally {
            try {
                if (d && !d.done && (n = r["return"])) n.call(r);
            } finally {
                if (a) throw a.error;
            }
        }
        return i;
    };
    r = 1;
    i = 2;
    a = 4;
    d = 8;
    o = 16;
    l = Array.isArray;
    c = l;
    s = {};
    function Mt(e) {
        return document.createTextNode(e);
    }
    function Vt(e) {
        return document.createElement(e);
    }
    function Ht(t) {
        return t === null ? e : t;
    }
    function Lt(e) {
        return typeof e == "number";
    }
    function Kt(e) {
        return typeof e == "string";
    }
    function Wt(e) {
        return typeof e == "boolean";
    }
    function Xt(e) {
        return typeof e == "function";
    }
    function Yt(e) {
        return typeof e === "object";
    }
    if (Object.assign == e) {
        Object.assign = function t(n) {
            var r = [], i, a, d, o, l, c, s, u;
            for (i = 1; i < arguments.length; i++) {
                r[i - 1] = arguments[i];
            }
            if (n == e) throw new TypeError("Target in assign cannot be undefined or null");
            a = arguments.length;
            for (d = 1; d < a; d++) {
                o = arguments[d];
                if (o == e) continue;
                l = Object.keys(o);
                c = l.length;
                for (s = 0; s < c; s++) {
                    u = l[s];
                    n[u] = o[u];
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
    function zt(e, t, n) {
        if (!e[t]) {
            Object.defineProperty(e, t, {
                value: n,
                configurable: !0,
                writable: !0
            });
        }
    }
    zt(Array.prototype, "find", function(e) {
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
    zt(Array.prototype, "findIndex", function(e) {
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
    zt(Array.prototype, "some", function(e) {
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
    zt(String.prototype, "includes", function(e, t) {
        if (!Lt(t)) t = 0;
        if (t + e.length > this.length) {
            return !1;
        } else {
            return this.indexOf(e, t) !== -1;
        }
    });
    zt(String.prototype, "startsWith", function(e, t) {
        return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
    });
    zt(String.prototype, "endsWith", function(e, t) {
        var n, r;
        n = this.toString();
        if (!Lt(t) || !isFinite(t) || Math.floor(t) !== t || t > n.length) {
            t = n.length;
        }
        t -= e.length;
        r = n.indexOf(e, t);
        return r !== -1 && r === t;
    });
    h = !1;
    p = !1;
    m = [];
    v = [];
    b = function(e, t, n, r) {
        if (n !== r) e[he] = n;
    };
    function $t(e) {
        var t = b;
        b = e;
        return t;
    }
    function Qt() {
        return Object.create(null);
    }
    g = [ "Webkit", "Moz", "ms", "O" ];
    y = document.createElement("div").style;
    function qt(e) {
        return Kt(y[e]);
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
    function Gt(t) {
        return function(n, r, i) {
            n[t] = r;
            n[i] = e;
        };
    }
    function Zt(t) {
        return function(n, r, i) {
            if (Lt(r)) {
                n[t] = r + "px";
            } else {
                n[t] = r;
            }
            n[i] = e;
        };
    }
    function Jt(e, t, n) {
        if (Lt(t)) e[n] = t + "px";
    }
    function en() {
        return document.documentMode;
    }
    function tn(t) {
        var n, r, i, a, d, o, l, c;
        n = Object.keys(t);
        for (r = 0, i = n.length; r < i; r++) {
            a = n[r];
            d = x.get(a);
            o = t[a];
            if (o === e) continue;
            if (d === e) {
                if (qt(a)) {
                    d = _[a] === !0 ? ki : Jt;
                } else {
                    l = a.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (c = 0; c < g.length; c++) {
                        if (qt(g[c] + l)) {
                            d = (_[a] === !0 ? Gt : Zt)(g[c] + l);
                            break;
                        }
                    }
                    if (d === e) {
                        d = _[a] === !0 ? ki : Jt;
                    }
                }
                x.set(a, d);
            }
            d(t, o, a);
        }
    }
    function nn(e, t) {
        e[t] = "";
    }
    function rn(e, t, n) {
        var r;
        if (Kt(n)) {
            r = n.length;
            if (r > 11 && n.substr(r - 11, 11) === " !important") {
                e.setProperty(Ii(t), n.substr(0, r - 11), "important");
                return;
            }
        }
        e[t] = n;
    }
    function an(t, n, r) {
        var i, a, d;
        i = t.style;
        if (Yt(n)) {
            tn(n);
            if (Yt(r)) {
                for (a in r) {
                    if (r[a] === e) continue;
                    if (n[a] === e) nn(i, a);
                }
                for (a in n) {
                    d = n[a];
                    if (d !== e) {
                        if (r[a] !== d) rn(i, a, d);
                    } else if (r[a] !== e) {
                        nn(i, a);
                    }
                }
            } else {
                if (r) i.cssText = "";
                for (a in n) {
                    d = n[a];
                    if (d !== e) rn(i, a, d);
                }
            }
        } else if (n) {
            i.cssText = n;
        } else {
            if (Yt(r)) {
                for (a in r) {
                    nn(i, a);
                }
            } else if (r) {
                i.cssText = "";
            }
        }
    }
    function dn(e, t) {
        if (h) e.setAttribute("class", t); else e.className = t;
    }
    C = /^input$|^select$|^textarea$|^button$/;
    w = "tabindex";
    function on(t, n) {
        if (t == e) return !1;
        if (C.test(t)) return !0;
        if (t === "a" && n != null && n.href != null) return !0;
        return !1;
    }
    function ln(t, n, r, i, a) {
        var d = !1, o, l, c, s, u;
        if (r != null) for (o in r) {
            l = r[o];
            c = i[o];
            if (a && o === w) {
                l = -1;
                d = !0;
            } else if (o === he && !h) {
                if (Xt(l)) {
                    i[se] = l;
                    l = l();
                }
                s = c;
                u = l;
                i[o] = l;
                continue;
            }
            if (c !== l) {
                i[o] = l;
                if (h) {
                    if (o === "href") n.setAttributeNS("http://www.w3.org/1999/xlink", "href", l); else n.setAttribute(o, l);
                } else if (o in n && !(o === "list" || o === "form")) {
                    n[o] = l;
                } else n.setAttribute(o, l);
            }
        }
        if (a && !d && on(t.tag, r)) {
            n.setAttribute(w, "-1");
            i[w] = -1;
        }
        if (r == e) {
            for (o in i) {
                if (i[o] !== e) {
                    if (a && o === w) continue;
                    if (o === se) continue;
                    i[o] = e;
                    n.removeAttribute(o);
                }
            }
        } else {
            for (o in i) {
                if (i[o] !== e && !(o in r)) {
                    if (a && o === w) continue;
                    if (o === se) continue;
                    i[o] = e;
                    n.removeAttribute(o);
                }
            }
        }
        if (u !== e) {
            b(n, t, u, s);
        }
        return i;
    }
    function cn(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postInitDom;
            if (n) {
                m.push(n);
                v.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & r) {
                m.push(Oi);
                v.push(e);
            }
        }
    }
    function sn(e) {
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
                m.push(Ti);
                v.push(e);
            }
            n = t.postUpdateDomEverytime;
            if (n) {
                m.push(n);
                v.push(e);
            }
            if (r & a) {
                m.push(Ui);
                v.push(e);
            }
        }
    }
    function un(e) {
        var t, n;
        t = e.component;
        if (t) {
            n = t.postUpdateDomEverytime;
            if (n) {
                m.push(n);
                v.push(e);
            }
            if ((e.ctx.$hookFlags || 0) & a) {
                m.push(Ui);
                v.push(e);
            }
        }
    }
    function fn(t) {
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
    function hn(t, n) {
        var r, i;
        if (t === e) return;
        if ("current" in t) {
            t.current = n;
        } else if (Xt(t)) {
            t(n);
        } else if (l(t)) {
            r = t[0];
            i = r.refs;
            if (i === e) {
                i = Qt();
                r.refs = i;
            }
            i[t[1]] = n;
        }
    }
    k = [];
    S = null;
    function pn(t, n, r, i) {
        var a, d, o, l, c, s, u, f, m, v, b, g, y, x, _, C;
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
        d = h;
        o = p;
        l = a.component;
        hn(a.ref, a);
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
            c.cfg = t.cfg === e ? fn(n) : t.cfg;
            a.ctx = c;
            jt = c;
            if (l.init) {
                l.init(c, a);
            }
            if (Y !== X) Y(t, W.Create);
            if (l.render) {
                l.render(c, a);
            }
            jt = e;
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
        if (Lt(u)) {
            u = "" + u;
            a.children = u;
        }
        if (s === e) {
            if (Kt(u)) {
                m = Mt(u);
                a.element = m;
                r.insertBefore(m, i);
            } else {
                vn(a, r, i);
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(a.ctx, a);
                }
                cn(a);
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
                _ = [];
                while (g !== m) {
                    _.push(g);
                    g = g.nextSibling;
                }
                a.element = _;
                if (y) {
                    x.removeChild(m);
                }
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(a.ctx, a);
                }
                cn(a);
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
        vn(a, m, null);
        if (l) {
            if (l.postRender) {
                l.postRender(a.ctx, a);
            }
        }
        if (p && S === a) p = !1;
        if (f) h = !0;
        if (a.attrs || p) a.attrs = ln(a, m, a.attrs, {}, p);
        if (a.style) an(m, a.style, e);
        C = a.className;
        if (C) dn(m, C);
        h = d;
        p = o;
        cn(a);
        return a;
    }
    function mn(t) {
        if (t === !1 || t === !0 || t === null) return e;
        if (Kt(t)) {
            return {
                children: t
            };
        }
        if (Lt(t)) {
            return {
                children: "" + t
            };
        }
        return t;
    }
    function vn(e, t, n) {
        var r, i, a;
        r = e.children;
        if (Kt(r)) {
            t.textContent = r;
            return;
        }
        i = [];
        Bn(i, r);
        for (a = 0; a < i.length; a++) {
            i[a] = pn(i[a], e, t, n);
        }
        e.children = i;
    }
    function bn(t) {
        var n, r, i, a, d, o, c, s;
        hn(t.ref, e);
        n = t.children;
        if (l(n)) {
            for (r = 0, i = n.length; r < i; r++) {
                bn(n[r]);
            }
        }
        a = t.component;
        if (a) {
            d = t.ctx;
            jt = d;
            if (Y !== X) Y(t, W.Destroy);
            if (a.destroy) a.destroy(d, t, t.element);
            o = d.disposables;
            if (l(o)) {
                for (c = o.length; c-- > 0; ) {
                    s = o[c];
                    if (Xt(s)) s(d); else s.dispose();
                }
            }
            jt = e;
        }
        if (t.tag === "@") {
            N.delete(t.data);
            gn(t);
        }
    }
    function gn(e) {
        var t, n, r, i, a, d, o;
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
                for (d = 0, o = a.length; d < o; d++) {
                    gn(a[d]);
                }
            }
        }
    }
    function yn(e) {
        bn(e);
        gn(e);
    }
    E = Qt();
    N = new Map();
    function xn(t, n, r, i) {
        var a, d, o, c, s;
        a = t.element;
        d = t.children;
        if (l(a)) {
            for (o = 0; o < a.length; o++) {
                if (a[o] === n) {
                    i.push(t);
                    if (l(d)) {
                        return d;
                    }
                    return null;
                }
            }
        } else if (a == e) {
            if (l(d)) {
                for (c = 0; c < d.length; c++) {
                    s = xn(d[c], n, r, i);
                    if (s !== e) {
                        i.splice(r, 0, t);
                        return s;
                    }
                }
            }
        } else if (a === n) {
            i.push(t);
            if (l(d)) {
                return d;
            }
            return null;
        }
        return e;
    }
    function _n(t) {
        var n = [], r, i, a, d, o, l, c, s, u, f, h, p, m;
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
        d = [];
        e: while (!0) {
            t: while (t) {
                for (o = 0; o < i.length; o++) {
                    if (t === i[o]) break t;
                }
                d.push(t);
                t = t.parentNode;
            }
            if (!t || d.length === 0) return n;
            l = null;
            c = d.pop();
            for (o = 0; o < i.length; o++) {
                if (t === i[o]) {
                    s = a[o];
                    if (s === e) continue;
                    n = [];
                    if (s.parent !== e) {
                        u = s;
                        while (u = u.parent) {
                            n.push(u);
                        }
                        n.reverse();
                    }
                    f = xn(s, c, n.length, n);
                    if (f !== e) {
                        l = f;
                        break e;
                    }
                }
            }
            d.push(c);
            d.push(t);
            t = t.parentNode;
        }
        e: while (d.length) {
            c = d.pop();
            if (l && l.length) for (h = 0, p = l.length; h < p; h++) {
                m = l[h];
                f = xn(m, c, n.length, n);
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
        t = _n(e);
        n = null;
        while (n === null) {
            n = t.pop();
        }
        return n;
    }
    function wn(t, n, r) {
        if (r) {
            if (r.postRender) {
                jt = n.ctx;
                r.postRender(jt, t, n);
                jt = e;
            }
        }
        n.data = t.data;
        sn(n);
    }
    function kn(t, n, r) {
        var i, a;
        jt = e;
        if (l(t.children)) {
            i = h;
            a = p;
            if (t.tag === "svg") {
                h = !0;
            } else if (h && t.tag === "foreignObject") h = !1;
            if (p && S === t) p = !1;
            Kn(t.children, t.element || n, t.element != null ? null : r);
            h = i;
            p = a;
        }
        un(t);
    }
    function Sn(t, n, r, i, a, d) {
        var o, c = !1, u, m, v, b, g, y, x, _, C, w, k, E;
        o = t.component;
        u = n.ctx;
        if (o != null && u != null) {
            m = !1;
            if (u[j] >= M) {
                a = Math.max(a, u[B]);
                m = !0;
            }
            if (o.id !== n.component.id) {
                c = !0;
            } else {
                jt = u;
                if (t.cfg !== e) u.cfg = t.cfg; else u.cfg = fn(n.parent);
                if (o.shouldChange) if (!o.shouldChange(u, t, n) && !J && !m) {
                    kn(n, r, i);
                    return n;
                }
                u.data = t.data || {};
                n.component = o;
                if (Y !== X) Y(t, d ? W.LocalUpdate : W.Update);
                if (o.render) {
                    n.orig = t;
                    t = f({}, t);
                    n.cfg = e;
                    if (t.cfg !== e) t.cfg = e;
                    o.render(u, t, n);
                    if (t.cfg !== e) {
                        if (n.cfg === e) n.cfg = t.cfg; else f(n.cfg, t.cfg);
                    }
                }
                jt = e;
            }
        } else {
            if (n.orig === t && !J) {
                kn(n, r, i);
                return n;
            }
            n.orig = t;
        }
        v = t.children;
        b = n.children;
        g = t.tag;
        if (g === "-") {
            kn(n, r, i);
            return n;
        }
        y = h;
        x = p;
        if (Lt(v)) {
            v = "" + v;
        }
        if (c || o != e && u == e || o == e && u != e && u.me.component !== s) {} else if (g === "/") {
            if (n.tag === "/" && b === v) {
                wn(t, n, o);
                return n;
            }
        } else if (g === n.tag) {
            if (g === "@") {
                if (t.data !== n.data) {
                    _ = pn(t, n.parent, t.data, null);
                    yn(n);
                    return _;
                }
                r = t.data;
                i = Nn(n);
                if (i != null) i = i.nextSibling;
                g = e;
            }
            if (g === e) {
                if (Kt(v) && Kt(b)) {
                    if (v !== b) {
                        C = n.element;
                        C.textContent = v;
                        n.children = v;
                    }
                } else {
                    if (p && S === n) p = !1;
                    if (a <= 0) {
                        if (l(b)) Kn(n.children, r, i);
                    } else {
                        n.children = On(r, v, b, n, i, a - 1);
                    }
                    h = y;
                    p = x;
                }
                wn(t, n, o);
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
                if (Kt(v) && !l(b)) {
                    if (v !== b) {
                        C.textContent = v;
                        b = v;
                    }
                } else {
                    if (a <= 0) {
                        if (l(b)) Kn(n.children, C, null);
                    } else {
                        b = On(C, v, b, n, null, a - 1);
                    }
                }
                n.children = b;
                if (w) h = !0;
                wn(t, n, o);
                if (n.attrs || t.attrs || p) n.attrs = ln(n, C, t.attrs, n.attrs || {}, p);
                an(C, t.style, n.style);
                n.style = t.style;
                k = t.className;
                if (k !== n.className) {
                    dn(C, k || "");
                    n.className = k;
                }
                h = y;
                p = x;
                return n;
            }
        }
        E = n.element;
        if (l(E)) E = E[0];
        if (E == e) E = r; else E = E.parentNode;
        _ = pn(t, n.parent, E, En(n));
        yn(n);
        return _;
    }
    function En(t) {
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
            n = En(r[i]);
            if (n) return n;
        }
        return null;
    }
    function Nn(t) {
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
            n = Nn(r[i]);
            if (n) return n;
        }
        return null;
    }
    function Dn(t, n, r, i) {
        var a, d;
        while (++n < r) {
            a = t[n];
            if (a == e) continue;
            d = En(a);
            if (d != null) return d;
        }
        return i;
    }
    function In() {
        var t, n, r;
        t = v.length;
        for (n = 0; n < t; n++) {
            r = v[n];
            jt = r.ctx;
            m[n].call(r.component, jt, r, r.element);
        }
        jt = e;
        m = [];
        v = [];
    }
    function Pn(e, t, n, r, i, a, d) {
        t[n] = Sn(e, t[n], a, Dn(t, n, r, i), d);
    }
    function Rn(e, t, n) {
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
            Rn(a[i], t, n);
        }
    }
    function An(e, t, n, r, i) {
        var a, d, o;
        a = Dn(e, t, n, r);
        d = e[t];
        o = En(d);
        if (o != null && o !== a) {
            Rn(d, i, a);
        }
    }
    function Fn(e, t, n, r, i, a, d) {
        var o, l, c;
        o = Dn(t, n, r, i);
        l = t[n];
        c = En(l);
        if (c != null && c !== o) {
            Rn(l, a, o);
        }
        t[n] = Sn(e, l, a, o, d);
    }
    function jn(t, n) {
        var r, i;
        if (n == e) return;
        if (c(n)) {
            for (r = 0; r < n.length; r++) {
                jn(t, n[r]);
            }
        } else {
            i = mn(n);
            if (i !== e) t.push(i);
        }
    }
    function Bn(e, t) {
        jn(e, t);
    }
    function On(t, n, r, i, a, d) {
        var o;
        if (r == e) r = [];
        if (!l(r)) {
            if (t.firstChild) t.removeChild(t.firstChild);
            r = [];
        }
        o = [];
        Bn(o, n);
        return Tn(t, o, r, i, a, d);
    }
    function Tn(t, n, r, i, a, d) {
        var o, l, c, s = 0, u = 0, f, h, p, m, v, b, g, y, x, _, C;
        o = n.length;
        l = r.length;
        c = l;
        while (s < o && u < c) {
            if (n[s].key === r[u].key) {
                Pn(n[s], r, u, l, a, t, d);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (n[o - 1].key === r[c - 1].key) {
                    o--;
                    c--;
                    Pn(n[o], r, c, l, a, t, d);
                    if (s < o && u < c) continue;
                }
                break;
            }
            if (s < o && u < c) {
                if (n[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    Fn(n[s], r, u, l, a, t, d);
                    s++;
                    u++;
                    continue;
                }
                if (n[o - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    o--;
                    Fn(n[o], r, c, l, a, t, d);
                    continue;
                }
            }
            break;
        }
        if (u === c) {
            if (s === o) {
                return r;
            }
            while (s < o) {
                r.splice(u, 0, pn(n[s], i, t, Dn(r, u - 1, l, a)));
                u++;
                c++;
                l++;
                s++;
            }
            return r;
        }
        if (s === o) {
            while (u < c) {
                c--;
                yn(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = Qt();
        h = Qt();
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
        for (;s < o; s++) {
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
        while (u < c && s < o) {
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
                while (s < o) {
                    g = n[s].key;
                    if (g != e) break;
                    s++;
                }
                if (g == e) break;
            }
            C = f[g];
            if (C === e) {
                r.splice(u, 0, pn(n[s], i, t, Dn(r, u - 1, l, a)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(_ in h)) {
                yn(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                Pn(n[s], r, u, l, a, t, d);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                Fn(n[s], r, u, l, a, t, d);
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
                yn(r[u]);
                r.splice(u, 1);
                c--;
                l--;
                continue;
            }
            u++;
        }
        while (s < o) {
            g = n[s].key;
            if (g != null) {
                r.splice(u, 0, pn(n[s], i, t, Dn(r, u - 1, l, a)));
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
        while (s < o) {
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
                Pn(n[s], r, s, l, a, t, d);
                y--;
                s++;
                u = s;
                continue;
            }
            if (g != null) {
                if (y === 0 && v < 0) {
                    while (!0) {
                        yn(r[u]);
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
                Fn(n[s], r, s, l, a, t, d);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, pn(n[s], i, t, Dn(r, s - 1, l, a)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            yn(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    D = !1;
    I = window.requestAnimationFrame;
    if (I) {
        I(function(e) {
            if (e === +e) D = !0;
        });
    }
    P = window.setTimeout;
    R = Date.now || function() {
        return new Date().getTime();
    };
    A = R();
    F = 0;
    function Un(e) {
        var t;
        if (D) {
            I(e);
        } else {
            t = 50 / 3 + F - R();
            if (t < 0) t = 0;
            P(function() {
                F = R();
                e(F - A);
            }, t);
        }
    }
    j = "$invalidated";
    B = "$deepness";
    O = !0;
    T = !1;
    U = !0;
    M = 0;
    V = {};
    function Mn(t, n, r) {
        var i;
        if (Bt == e) Bt = {};
        i = Bt[t] || [];
        i.push({
            priority: n,
            callback: r
        });
        Bt[t] = i;
    }
    function Vn(e, t, n, r) {
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
    function Hn(e, t) {
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
            i = Cn(r);
            K++;
            Vn(t, n, r, i);
            K--;
            if (K == 0 && q) zn();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, i, H ? {
            capture: n,
            passive: !1
        } : n);
    }
    function Ln() {
        var t, n, r, i, a, d;
        if (Bt === e) return;
        t = Object.keys(Bt);
        for (n = 0; n < t.length; n++) {
            r = t[n];
            i = Bt[r];
            i = i.sort(function(e, t) {
                return e.priority - t.priority;
            });
            V[r] = i.map(function(e) {
                return e.callback;
            });
        }
        Bt = e;
        a = document.body;
        for (d = 0; d < t.length; d++) {
            Hn(a, t[d]);
        }
    }
    function Kn(t, n, r) {
        var i, a, d, o, c, s, u;
        i = t.length;
        for (a = 0; a < i; a++) {
            d = t[a];
            o = d.ctx;
            if (o != null && o[j] >= M) {
                t[a] = Sn(d.orig, d, n, Dn(t, a, i, r), o[B], !0);
            } else if (l(d.children)) {
                c = h;
                s = p;
                if (p && S === d) p = !1;
                if (d.tag === "svg") h = !0; else if (h && d.tag === "foreignObject") h = !1;
                u = d.element;
                if (u != e) {
                    Kn(d.children, u, null);
                } else {
                    Kn(d.children, n, Dn(t, a, i, r));
                }
                un(d);
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
    })(W);
    X = function() {};
    Y = X;
    z = function() {};
    $ = function() {};
    Q = function() {};
    function Wn(e) {
        var t = z;
        z = e;
        return t;
    }
    function Xn(e) {
        var t = Q;
        Q = e;
        return t;
    }
    function Yn(t, n, r) {
        var i, a, d;
        while (n != null) {
            if (t === n) return !0;
            i = n.parent;
            if (i == e) {
                for (a = 0; a < r.length; a++) {
                    d = E[r[a]];
                    if (!d) continue;
                    if (d.n === n) {
                        i = d.p;
                        break;
                    }
                }
            }
            n = i;
        }
        return !1;
    }
    q = !1;
    function zn() {
        q = !1;
        Qn(R() - A);
        Mi();
    }
    function $n(e) {
        T = !1;
        Qn(e);
        ce(Mi);
    }
    G = Bi({
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
    function Qn(t) {
        var n, r, i, a, d, o, c, s, u, f;
        R();
        Ln();
        $();
        M++;
        J = Z;
        Z = !1;
        z();
        n = !1;
        if (O) {
            O = !1;
            n = !0;
        }
        K++;
        for (r = 0; r < 2; r++) {
            S = k.length === 0 ? null : k[k.length - 1];
            p = !1;
            Ot = Object.keys(E);
            for (i = 0; i < Ot.length; i++) {
                a = E[Ot[i]];
                if (!a) continue;
                d = a.n;
                o = null;
                for (c = i + 1; c < Ot.length; c++) {
                    s = E[Ot[c]];
                    if (s === e) continue;
                    o = En(s.n);
                    if (o != null) break;
                }
                if (S) p = !Yn(S, a.p, Ot);
                if (a.e === e) a.e = document.body;
                if (d) {
                    if (n || d.ctx[j] >= M) {
                        u = G(a);
                        Sn(u, d, a.e, o, n ? 1e6 : d.ctx[B]);
                    } else {
                        if (l(a.c)) Kn(a.c, a.e, o);
                    }
                } else {
                    u = G(a);
                    d = pn(u, e, a.e, o);
                    a.n = d;
                }
                a.c = d.children;
            }
            Ot = e;
            In();
            if (!q) break;
        }
        q = !1;
        K--;
        f = E["0"];
        Q(f ? f.c : null);
        R();
    }
    Z = !1;
    J = !1;
    function qn() {
        Z = !0;
        ee();
    }
    function Gn(e) {
        var t = ee;
        ee = e;
        return t;
    }
    ee = function(t, n) {
        if (t != null) {
            if (n == e) n = 1e6;
            if (t[j] !== M + 1) {
                t[j] = M + 1;
                t[B] = n;
            } else {
                if (n > t[B]) t[B] = n;
            }
        } else {
            O = !0;
        }
        if (T || U) return;
        T = !0;
        Un($n);
    };
    te = 0;
    function Zn(t, n, r) {
        var i;
        te++;
        i = "" + te;
        E[i] = {
            f: t,
            e: n,
            c: [],
            p: r,
            n: e
        };
        if (Ot != null) {
            Ot.push(i);
        } else {
            nr();
        }
        return i;
    }
    function Jn(e) {
        var t = E[e];
        if (!t) return;
        if (t.n) yn(t.n);
        delete E[e];
    }
    function er() {
        return E;
    }
    function tr() {
        U = !1;
        ee();
    }
    ne = tr;
    function nr() {
        U = !0;
        ne();
        ne = tr;
    }
    function rr(t, n) {
        Jn("0");
        E["0"] = {
            f: t,
            e: n,
            c: [],
            p: e,
            n: e
        };
        nr();
    }
    function ir(e) {
        var t = ne;
        ne = function() {
            e(t);
        };
    }
    function ar(t, n, r) {
        var i, a, o, l, c, s, u, f, h, p;
        if (r == e) {
            r = {
                target: t
            };
        } else if (Yt(r) && r.target == e) {
            r.target = t;
        }
        i = lr(n, r);
        if (i != e) return i;
        a = Tt;
        while (t) {
            o = t.component;
            if (o) {
                l = t.ctx;
                Tt = l;
                if (((l.$hookFlags || 0) & d) === d) {
                    c = l.$hooks;
                    for (s = 0, u = c.length; s < u; s++) {
                        f = c[s];
                        if (f instanceof At) {
                            h = f.events[n];
                            if (h !== e) {
                                p = +h.call(l, r);
                                if (p == Pt.HandledPreventDefault) {
                                    Tt = a;
                                    return l;
                                }
                                if (p == Pt.HandledButRunDefault) {
                                    Tt = a;
                                    return e;
                                }
                                if (p == Pt.NotHandledPreventDefault) {
                                    i = l;
                                }
                            }
                        }
                    }
                }
                h = o[n];
                if (h) {
                    p = +h.call(o, l, r);
                    if (p == Pt.HandledPreventDefault) {
                        Tt = a;
                        return l;
                    }
                    if (p == Pt.HandledButRunDefault) {
                        Tt = a;
                        return e;
                    }
                    if (p == Pt.NotHandledPreventDefault) {
                        i = l;
                    }
                }
                h = o.shouldStopBubble;
                if (h) {
                    if (h.call(o, l, n, r)) break;
                }
            }
            t = t.parent;
        }
        Tt = a;
        return i;
    }
    function dr(t, n, r) {
        var i, a, o, c, s, u, f, h, p, m, v, b;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            o = Tt;
            Tt = a;
            if (((a.$hookFlags || 0) & d) === d) {
                c = a.$hooks;
                for (s = 0, u = c.length; s < u; s++) {
                    f = c[s];
                    if (f instanceof At) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == Pt.HandledPreventDefault) {
                                Tt = o;
                                return a;
                            }
                            if (p == Pt.HandledButRunDefault) {
                                Tt = o;
                                return e;
                            }
                            if (p == Pt.NotHandledPreventDefault) {
                                m = a;
                            }
                        }
                    }
                }
            }
            h = i[n];
            if (h) {
                p = +h.call(i, a, r);
                if (p == Pt.HandledPreventDefault) {
                    Tt = o;
                    return a;
                }
                if (p == Pt.HandledButRunDefault) {
                    Tt = o;
                    return e;
                }
                if (p == Pt.NotHandledPreventDefault) {
                    m = a;
                }
            }
            h = i.shouldStopBroadcast;
            if (h) {
                if (h.call(i, a, n, r)) {
                    Tt = o;
                    return m;
                }
            }
            Tt = o;
        }
        v = t.children;
        if (l(v)) {
            for (s = 0; s < v.length; s++) {
                b = dr(v[s], n, r);
                if (b != e) return b;
            }
        }
        return m;
    }
    function or(t, n, r) {
        var i, a, d, c, s, u, f, h, p, m, v, b;
        if (!t) return e;
        i = t.component;
        if (i) {
            a = t.ctx;
            if (((a.$hookFlags || 0) & o) === o) {
                d = a.$hooks;
                c = Tt;
                Tt = a;
                for (s = 0, u = d.length; s < u; s++) {
                    f = d[s];
                    if (f instanceof Ft) {
                        h = f.events[n];
                        if (h !== e) {
                            p = +h.call(a, r);
                            if (p == Pt.HandledPreventDefault) {
                                Tt = c;
                                return a;
                            }
                            if (p == Pt.HandledButRunDefault) {
                                Tt = c;
                                return e;
                            }
                            if (p == Pt.NotHandledPreventDefault) {
                                m = a;
                            }
                        }
                    }
                }
                Tt = c;
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
    function lr(t, n) {
        var r, i, a, d;
        r = Object.keys(E);
        for (i = 0; i < r.length; i++) {
            a = E[r[i]].n;
            if (a != null) {
                d = or(a, t, n);
                if (d != null) return d;
            }
        }
        return e;
    }
    function cr(t, n) {
        var r, i, a, d;
        r = lr(t, n);
        if (r != null) return r;
        i = Object.keys(E);
        for (a = 0; a < i.length; a++) {
            d = E[i[a]].n;
            if (d != null) {
                r = dr(d, t, n);
                if (r != null) return r;
            }
        }
        return e;
    }
    function sr(e) {
        var t = e.preventDefault;
        if (t) t.call(e); else e.returnValue = !1;
    }
    function ur(e) {
        var t, n;
        e = e.slice(0);
        for (t = 0; t < e.length; t++) {
            n = e[t];
            if (l(n)) {
                e[t] = ur(n);
            } else if (Yt(n)) {
                e[t] = fr(n);
            }
        }
        return e;
    }
    function fr(e) {
        var t, n;
        t = f({}, e);
        if (t.attrs) {
            t.attrs = f({}, t.attrs);
        }
        if (Yt(t.style)) {
            t.style = f({}, t.style);
        }
        n = t.children;
        if (n) {
            if (l(n)) {
                t.children = ur(n);
            } else if (Yt(n)) {
                t.children = fr(n);
            }
        }
        return t;
    }
    function hr(e, t) {
        x.set(e, t);
    }
    hr("float", Gt("cssFloat"));
    re = null;
    ie = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function pr() {
        re = null;
        ee();
        return !1;
    }
    ae = [ "resize", "orientationchange" ];
    for (de = 0; de < ae.length; de++) Mn(ae[de], 10, pr);
    oe = window.document.documentElement;
    le = /Android/i.test(navigator.userAgent);
    function mr() {
        var t, n, r, i, a, d;
        if (re == e) {
            t = oe.clientWidth;
            n = oe.clientHeight;
            r = window.orientation;
            i = n >= t;
            if (r == e) r = i ? 0 : 90; else r = +r;
            if (le) {
                a = Math.abs(r) % 180 === 90;
                if (Ut == e) {
                    Ut = a === i;
                } else {
                    i = a === Ut;
                }
            }
            d = 0;
            while (t > ie[+!i][d]) d++;
            re = {
                width: t,
                height: n,
                orientation: r,
                deviceCategory: d,
                portrait: i,
                dppx: window.devicePixelRatio
            };
        }
        return re;
    }
    ce = function() {
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
                ce(function() {
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
            function d(e) {
                var n;
                try {
                    if (e === this) throw new TypeError("Promise self resolve");
                    if (Object(e) === e) {
                        n = e.then;
                        if (typeof n === "function") {
                            a(t(n, e), t(d, this), t(i, this));
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
            function o(e) {
                this.s = null;
                this.v = null;
                this.d = [];
                a(e, t(d, this), t(i, this));
            }
            o.prototype.then = function(e, t) {
                var r = this;
                return new o(function(i, a) {
                    n.call(r, [ e, t, i, a ]);
                });
            };
            o.prototype["catch"] = function(t) {
                return this.then(e, t);
            };
            o.all = function() {
                var e = [].slice.call(arguments.length === 1 && l(arguments[0]) ? arguments[0] : arguments);
                return new o(function(t, n) {
                    var r, i;
                    if (e.length === 0) {
                        t(e);
                        return;
                    }
                    r = e.length;
                    function a(i, d) {
                        var o;
                        try {
                            if (d && (typeof d === "object" || typeof d === "function")) {
                                o = d.then;
                                if (typeof o === "function") {
                                    o.call(d, function(e) {
                                        a(i, e);
                                    }, n);
                                    return;
                                }
                            }
                            e[i] = d;
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
            o.resolve = function(e) {
                if (e && typeof e === "object" && e.constructor === o) {
                    return e;
                }
                return new o(function(t) {
                    t(e);
                });
            };
            o.reject = function(e) {
                return new o(function(t, n) {
                    n(e);
                });
            };
            o.race = function(e) {
                return new o(function(t, n) {
                    var r, i;
                    for (r = 0, i = e.length; r < i; r++) {
                        e[r].then(t, n);
                    }
                });
            };
            window["Promise"] = o;
        })();
    }
    se = "b$value";
    ue = "b$selStart";
    fe = "b$selEnd";
    he = "value";
    function vr(e) {
        var t = e.type;
        return t === "checkbox" || t === "radio";
    }
    function br(e, t) {
        var n, r;
        n = e.length;
        if (n !== t.length) return !1;
        for (r = 0; r < n; r++) {
            if (e[r] !== t[r]) return !1;
        }
        return !0;
    }
    function gr(e, t) {
        var n;
        for (n = 0; n < e.length; n++) {
            if (e[n] === t) return !0;
        }
        return !1;
    }
    function yr(e) {
        var t = [], n;
        for (n = 0; n < e.length; n++) {
            if (e[n].selected) t.push(e[n].value);
        }
        return t;
    }
    pe = $t(function(t, n, r, i) {
        var a, d, o, l, c, u, f, h, p, m, v;
        a = t.tagName;
        d = a === "SELECT";
        o = a === "INPUT" || a === "TEXTAREA";
        if (!o && !d) {
            pe(t, n, r, i);
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
            n.ctx[se] = r;
        }
        l = d && t.multiple;
        c = !1;
        if (l) {
            u = t.options;
            f = yr(u);
            if (!br(r, f)) {
                if (i === e || br(f, i) || !br(r, n.ctx[se])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = gr(r, u[h].value);
                    }
                    f = yr(u);
                    if (br(f, r)) {
                        c = !0;
                    }
                } else {
                    c = !0;
                }
            }
        } else if (o || d) {
            if (o && vr(t)) {
                p = t.checked;
                if (r !== p) {
                    if (i === e || p === i || r !== n.ctx[se]) {
                        t.checked = r;
                    } else {
                        c = !0;
                    }
                }
            } else {
                m = d && t.size < 2;
                v = t[he];
                if (r !== v) {
                    if (i === e || v === i || r !== n.ctx[se]) {
                        if (d) {
                            if (r === "") {
                                t.selectedIndex = m ? 0 : -1;
                            } else {
                                t[he] = r;
                            }
                            if (r !== "" || m) {
                                v = t[he];
                                if (r !== v) {
                                    c = !0;
                                }
                            }
                        } else {
                            t[he] = r;
                        }
                    } else {
                        c = !0;
                    }
                }
            }
        }
        if (c) {
            xr(e, t, n);
        } else {
            n.ctx[se] = r;
        }
    });
    function xr(t, n, r) {
        var i, a, d, o, l, c, u, f, h, p, m, v, b, g, y, x, _, C, w;
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
        d = a === "SELECT";
        o = d && n.multiple;
        if (o) {
            l = yr(n.options);
            if (!br(i[se], l)) {
                i[se] = l;
                _r(r, l);
            }
        } else if (vr(n)) {
            if (t && t.type === "change") {
                P(function() {
                    xr(e, n, r);
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
                    if (p[se] !== m) {
                        p[se] = m;
                        _r(h, m);
                    }
                }
            } else {
                v = n.checked;
                if (i[se] !== v) {
                    i[se] = v;
                    _r(r, v);
                }
            }
        } else {
            b = n.value;
            if (i[se] !== b) {
                i[se] = b;
                _r(r, b);
            }
            g = n.selectionStart;
            y = n.selectionEnd;
            x = n.selectionDirection;
            _ = !1;
            C = i[ue];
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
            Cr(r, g, y);
        }
        return !1;
    }
    function _r(e, t) {
        var n, r, i, a, d;
        n = Tt;
        r = e.ctx;
        i = e.component;
        Tt = r;
        a = e.attrs && e.attrs[se];
        if (Xt(a)) a(t);
        d = i && i.onChange;
        if (Xt(d)) d(r, t);
        Tt = n;
        ar(e, "onInput", {
            target: e,
            value: t
        });
    }
    function Cr(e, t, n) {
        var r, i;
        r = e.component;
        i = e.ctx;
        if (r && (i[ue] !== t || i[fe] !== n)) {
            i[ue] = t;
            i[fe] = n;
            ar(e, "onSelectionChange", {
                target: e,
                startPosition: t,
                endPosition: n
            });
        }
    }
    function wr(e, t, n) {
        var r = ri();
        if (r) xr(e, r.element, r);
        return !1;
    }
    ae = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (de = 0; de < ae.length; de++) Mn(ae[de], 10, xr);
    me = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (de = 0; de < me.length; de++) Mn(me[de], 2, wr);
    function kr(t) {
        return {
            target: e,
            shift: t.shiftKey,
            ctrl: t.ctrlKey,
            alt: t.altKey,
            meta: t.metaKey || !1,
            which: t.which || t.keyCode
        };
    }
    function Sr(e, t, n) {
        var r;
        if (!n) return !1;
        r = kr(e);
        if (ar(n, "onKeyDown", r)) {
            sr(e);
            return !0;
        }
        return !1;
    }
    function Er(e, t, n) {
        var r;
        if (!n) return !1;
        r = kr(e);
        if (ar(n, "onKeyUp", r)) {
            sr(e);
            return !0;
        }
        return !1;
    }
    function Nr(e, t, n) {
        var r;
        if (!n) return !1;
        if (e.which === 0 || e.altKey) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (ar(n, "onKeyPress", r)) {
            sr(e);
            return !0;
        }
        return !1;
    }
    Mn("keydown", 50, Sr);
    Mn("keyup", 50, Er);
    Mn("keypress", 50, Nr);
    ve = 13;
    be = 750;
    ge = 500;
    ye = 800;
    xe = 50;
    _e = null;
    Ce = "onClick";
    we = "onDoubleClick";
    function Dr(t, n) {
        var r, i, a, d;
        if (_e == e) {
            return !1;
        }
        r = _e.me.component;
        i = r[t];
        if (!i) {
            return !1;
        }
        a = Tt;
        Tt = _e;
        d = i.call(r, _e, n);
        Tt = a;
        return d;
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
    function Pr(e) {
        var t;
        if (e.length) {
            for (t = e.length - 1; t >= 0; --t) {
                e[t].t.style.visibility = e[t].p;
            }
            return !0;
        }
        return !1;
    }
    function Rr(e, t) {
        e.push({
            t,
            p: t.style.visibility
        });
        t.style.visibility = "hidden";
    }
    function Ar(e, t) {
        Mn(e, 5, t);
    }
    ke = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    function Fr(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function jr(e, t, n, r) {
        var i = [], a;
        a = n;
        while (Ir(r)) {
            Rr(i, a);
            a = document.elementFromPoint(e, t);
            r = Cn(a);
        }
        Pr(i);
        return [ a, r ];
    }
    function Br(e) {
        return function t(n, r, i) {
            var a, d, o, l, c;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = Cn(r);
            if (Ir(i)) {
                a = jr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            d = n.button + 1;
            o = Fr(n.pointerType);
            l = n.buttons;
            if (d === 0 && o === 0 && l) {
                d = 1;
                while (!(l & 1)) {
                    l = l >> 1;
                    d++;
                }
            }
            c = {
                target: i,
                id: n.pointerId,
                cancelable: qr(n),
                type: o,
                x: n.clientX,
                y: n.clientY,
                button: d,
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail
            };
            if (Vn("!" + e, c, r, i)) {
                sr(n);
                return !0;
            }
            return !1;
        };
    }
    function Or(e) {
        return function t(n, r, i) {
            var a = !1, d, o, l;
            for (d = 0; d < n.changedTouches.length; d++) {
                o = n.changedTouches[d];
                r = document.elementFromPoint(o.clientX, o.clientY);
                i = Cn(r);
                l = {
                    target: i,
                    id: o.identifier + 2,
                    cancelable: qr(n),
                    type: 1,
                    x: o.clientX,
                    y: o.clientY,
                    button: 1,
                    shift: n.shiftKey,
                    ctrl: n.ctrlKey,
                    alt: n.altKey,
                    meta: n.metaKey || !1,
                    count: n.detail
                };
                if (Vn("!" + e, l, r, i)) a = !0;
            }
            if (a) {
                sr(n);
                return !0;
            }
            return !1;
        };
    }
    function Tr(e) {
        return function t(n, r, i) {
            var a, d;
            r = document.elementFromPoint(n.clientX, n.clientY);
            i = Cn(r);
            if (Ir(i)) {
                a = jr(n.clientX, n.clientY, r, i);
                r = a[0];
                i = a[1];
            }
            d = {
                target: i,
                id: 1,
                type: 0,
                cancelable: qr(n),
                x: n.clientX,
                y: n.clientY,
                button: Qr(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail
            };
            if (Vn("!" + e, d, r, i)) {
                sr(n);
                return !0;
            }
            return !1;
        };
    }
    function Ur() {
        Ar("mousedown", Tr(ke[0]));
        Ar("mousemove", Tr(ke[1]));
        Ar("mouseup", Tr(ke[2]));
    }
    if (window.ontouchstart !== e) {
        Ar("touchstart", Or(ke[0]));
        Ar("touchmove", Or(ke[1]));
        Ar("touchend", Or(ke[2]));
        Ar("touchcancel", Or(ke[3]));
        Ur();
    } else if (window.onpointerdown !== e) {
        for (de = 0; de < 4; de++) {
            Se = ke[de];
            Ar(Se.toLowerCase(), Br(Se));
        }
    } else if (window.onmspointerdown !== e) {
        for (de = 0; de < 4; de++) {
            Se = ke[de];
            Ar("@MS" + Se, Br(Se));
        }
    } else {
        Ur();
    }
    for (Ee = 0; Ee < 4; Ee++) {
        (function(t) {
            var n = "on" + t;
            Mn("!" + t, 50, function(t, r, i) {
                return Dr(n, t) || ar(i, n, t) != e;
            });
        })(ke[Ee]);
    }
    Ne = Qt();
    De = [];
    Ie = -1;
    Pe = 0;
    Re = 0;
    Ae = 0;
    Fe = !1;
    function Mr(e, t, n) {
        return Math.abs(e - t) < n;
    }
    je = [];
    function Vr(t) {
        var n, r, i, a, d, o, l, c;
        n = document.elementFromPoint(t.x, t.y);
        r = _n(n);
        i = r.length == 0 ? e : r[r.length - 1];
        if (Ir(i)) {
            a = jr(t.x, t.y, n, i == e ? e : i);
            n = a[0];
            r = _n(n);
        }
        ar(i, "onMouseOver", t);
        d = 0;
        while (d < je.length && d < r.length && je[d] === r[d]) d++;
        o = je.length;
        if (o > 0 && (o > d || o != r.length)) {
            l = je[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, t);
            }
        }
        while (o > d) {
            o--;
            l = je[o];
            if (l) {
                c = l.component;
                if (c && c.onMouseLeave) c.onMouseLeave(l.ctx, t);
            }
        }
        while (o < r.length) {
            l = r[o];
            if (l) {
                c = l.component;
                if (c && c.onMouseEnter) c.onMouseEnter(l.ctx, t);
            }
            o++;
        }
        je = r;
        if (o > 0 && (o > d || o != je.length)) {
            l = je[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, t);
            }
        }
        return !1;
    }
    function Hr() {
        return Object.keys(Ne).length === 0;
    }
    function Lr(e, t, n) {
        if (Ie === -1 && Hr()) {
            Ie = e.id;
            Pe = R();
            Re = e.x;
            Ae = e.y;
            Fe = !1;
            Vr(e);
        }
        Ne[e.id] = e.type;
        if (Ie !== e.id) {
            Fe = !0;
        }
        return !1;
    }
    function Kr(e, t, n) {
        if (e.type === 0 && e.button === 0 && Ne[e.id] != null) {
            e.button = 1;
            Vn("!PointerUp", e, t, n);
            e.button = 0;
        }
        if (Ie === e.id) {
            Vr(e);
            if (!Mr(Re, e.x, ve) || !Mr(Ae, e.y, ve)) Fe = !0;
        } else if (Hr()) {
            Vr(e);
        }
        return !1;
    }
    Be = 0;
    Oe = 0;
    function Wr(e) {
        var t;
        if (Oe == 0) return !1;
        t = R();
        if (t < Be + 1e3 && e >= Oe) {
            Be = t;
            Oe = e;
            return !0;
        }
        Oe = 0;
        return !1;
    }
    function Xr(e, t, n) {
        var r, i;
        delete Ne[e.id];
        if (Ie == e.id) {
            Vr(e);
            Ie = -1;
            if (e.type == 1 && !Fe) {
                if (R() - Pe < be) {
                    Vn("!PointerCancel", e, t, n);
                    Wr(1);
                    r = Dr(Ce, e) || ar(n, Ce, e) != null;
                    i = en() ? ye : ge;
                    De.push([ e.x, e.y, R() + i, r ? 1 : 0 ]);
                    return r;
                }
            } else if (Fe) {
                He(e.x, e.y);
            }
        }
        return !1;
    }
    function Yr(e, t, n) {
        delete Ne[e.id];
        if (Ie == e.id) {
            Ie = -1;
        }
        return !1;
    }
    function zr(e, t, n) {
        var r, i, a;
        r = R();
        for (i = 0; i < De.length; i++) {
            a = De[i];
            if (a[2] < r) {
                De.splice(i, 1);
                i--;
                continue;
            }
            if (Mr(a[0], e.clientX, xe) && Mr(a[1], e.clientY, xe)) {
                De.splice(i, 1);
                if (a[3]) sr(e);
                return !0;
            }
        }
        return !1;
    }
    Te = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Ue = [ Lr, Kr, Xr, Yr, zr ];
    for (de = 0; de < 5; de++) {
        Mn(Te[de], 3, Ue[de]);
    }
    function $r(e) {
        return function(t, n, r) {
            if (Ie != t.id && !Hr()) return !1;
            if (Dr(e, t) || ar(r, e, t)) {
                return !0;
            }
            return !1;
        };
    }
    Me = [ "Down", "Move", "Up", "Up" ];
    for (de = 0; de < 4; de++) {
        Mn(Te[de], 80, $r("onMouse" + Me[de]));
    }
    function Qr(e) {
        return e.which || e.button;
    }
    function qr(e) {
        var t = e.cancelable;
        return !Wt(t) || t;
    }
    function Gr(e, t) {
        return function(n, r, i) {
            var a, d;
            a = Qr(n) || 1;
            if (!t && a !== 1) return !1;
            d = {
                target: i,
                x: n.clientX,
                y: n.clientY,
                button: a,
                cancelable: qr(n),
                shift: n.shiftKey,
                ctrl: n.ctrlKey,
                alt: n.altKey,
                meta: n.metaKey || !1,
                count: n.detail || 1
            };
            if (e == we) d.count = 2;
            if (Wr(d.count) || Dr(e, d) || ar(i, e, d)) {
                sr(n);
                return !0;
            }
            return !1;
        };
    }
    function Zr(e, t) {
        var n, r, i;
        n = document.elementFromPoint(e, t);
        r = Cn(n);
        if (Ir(r)) {
            i = jr(e, t, n, r);
            r = i[1];
        }
        return r;
    }
    function Jr(e, t, n) {
        var r, i;
        while (n) {
            r = n.style;
            if (r) {
                i = r.userSelect;
                if (i === "none") {
                    sr(e);
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
    Ar("selectstart", Jr);
    Ar("^click", Gr(Ce));
    Ar("^dblclick", Gr(we));
    Ar("contextmenu", Gr("onContextMenu", !0));
    Ve = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function ei(e, t, n) {
        var r, i, a, d, o, l;
        if (Ir(n)) {
            r = jr(e.x, e.y, t, n);
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
        d = 0;
        if (Ve == "mousewheel") {
            o = -1 / 40 * e.wheelDelta;
            e.wheelDeltaX && (d = -1 / 40 * e.wheelDeltaX);
        } else {
            d = e.deltaX;
            o = e.deltaY;
        }
        l = {
            target: n,
            dx: d,
            dy: o,
            x: e.clientX,
            y: e.clientY,
            cancelable: qr(e),
            button: i,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            count: e.detail
        };
        if (Dr("onMouseWheel", l) || ar(n, "onMouseWheel", l)) {
            sr(e);
            return !0;
        }
        return !1;
    }
    Ar(Ve, ei);
    He = function(e, t) {
        var n = en() ? ye : ge;
        De.push([ e, t, R() + n, 1 ]);
    };
    Le = e;
    Ke = e;
    We = [];
    Xe = !1;
    function ti(t) {
        var n, r, i, a, d, o;
        if (Xe) return !1;
        Xe = !0;
        while (!0) {
            n = document.hasFocus() || t ? document.activeElement : e;
            if (n === Le) break;
            Le = n;
            r = _n(Le);
            i = 0;
            while (i < We.length && i < r.length && We[i] === r[i]) i++;
            a = We.length - 1;
            if (a >= i) {
                d = We[a];
                ar(d, "onBlur");
                a--;
            }
            while (a >= i) {
                d = We[a];
                if (d) {
                    o = d.component;
                    if (o && o.onFocusOut) o.onFocusOut(d.ctx);
                }
                a--;
            }
            a = i;
            while (a + 1 < r.length) {
                d = r[a];
                if (d) {
                    o = d.component;
                    if (o && o.onFocusIn) o.onFocusIn(d.ctx);
                }
                a++;
            }
            if (a < r.length) {
                d = r[a];
                ar(d, "onFocus");
            }
            We = r;
            Ke = We.length == 0 ? e : Ht(We[We.length - 1]);
        }
        Xe = !1;
        return !1;
    }
    function ni() {
        P(function() {
            return ti(!1);
        }, 10);
        return !1;
    }
    Mn("^focus", 50, function() {
        return ti(!0);
    });
    Mn("^blur", 50, ni);
    function ri() {
        return Ke;
    }
    Ye = [];
    function ii(e, t, n) {
        var r, i;
        r = {
            node: n
        };
        for (i = 0; i < Ye.length; i++) {
            Ye[i](r);
        }
        lr("onScroll", r);
        return !1;
    }
    Mn("^scroll", 10, ii);
    ze = 0;
    $e = [];
    Qe = null;
    qe = null;
    Ge = function(t) {
        this.id = ++ze;
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
        this.data = Qt();
        if (t >= 0) nt[t] = this;
        $e.push(this);
    };
    Ze = "b-dragging";
    function ai() {
        var t;
        if (qe == e) {
            t = document.documentElement;
            t.classList.add(Ze);
            qe = Zn(oi);
        }
    }
    Je = {
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
    function di() {
        var e = "no-drop", t;
        if ($e.length !== 0) {
            t = $e[0];
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
    et = {
        render: function(e, t) {
            var n = [], r, i, a, d;
            for (r = 0; r < $e.length; r++) {
                i = $e[r];
                if (i.beforeDrag) continue;
                if (i.dragView != null && (i.x != 0 || i.y != 0)) {
                    n.push({
                        key: "" + i.id,
                        data: i,
                        component: Je
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
            d = di();
            if (d) {
                if (a.cursor !== d) a.setProperty("cursor", d, "important");
            } else {
                a.setProperty("cursor", "");
            }
            t.children = n;
        },
        onDrag: function(e) {
            ee(e);
            return !1;
        }
    };
    function oi() {
        return {
            component: et
        };
    }
    tt = Ge.prototype;
    tt.setOperation = function(e) {
        this.operation = e;
    };
    tt.setDragNodeView = function(e) {
        this.dragView = e;
    };
    tt.addData = function(e, t) {
        this.data[e] = t;
        return !0;
    };
    tt.listData = function() {
        return Object.keys(this.data);
    };
    tt.hasData = function(t) {
        return this.data[t] !== e;
    };
    tt.getData = function(e) {
        return this.data[e];
    };
    tt.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    tt.cancelDnd = function() {
        ci(e, this);
        this.destroy();
    };
    tt.destroy = function() {
        var e, t;
        this.ended = !0;
        if (this.started) cr("onDragEnd", this);
        delete nt[this.pointerid];
        for (e = 0; e < $e.length; e++) {
            if ($e[e] === this) {
                $e.splice(e, 1);
                break;
            }
        }
        if (Qe === this) {
            Qe = null;
        }
        if ($e.length === 0 && qe != null) {
            Jn(qe);
            qe = null;
            t = document.documentElement;
            t.classList.remove(Ze);
            t.style.setProperty("cursor", "");
        }
    };
    nt = Qt();
    function li(t, n, r) {
        var i, a, d, o, l;
        i = nt[t.id];
        if (i) {
            i.cancelDnd();
        }
        if (t.button <= 1) {
            i = new Ge(t.id);
            i.startX = t.x;
            i.startY = t.y;
            i.lastX = t.x;
            i.lastY = t.y;
            i.overNode = r;
            si(i, t);
            a = ar(r, "onDragStart", i);
            if (a) {
                d = En(a.me);
                if (d == e) {
                    i.destroy();
                    return !1;
                }
                i.started = !0;
                o = d.getBoundingClientRect;
                if (o) {
                    l = o.call(d);
                    i.deltaX = l.left - t.x;
                    i.deltaY = l.top - t.y;
                }
                if (i.distanceToStart <= 0) {
                    i.beforeDrag = !1;
                    ci(r, i);
                }
                ai();
            } else {
                i.destroy();
            }
        }
        return !1;
    }
    function ci(t, n) {
        n.overNode = t;
        n.targetCtx = ar(t, "onDragOver", n);
        if (n.targetCtx == e) {
            n.operation = 0;
        }
        cr("onDrag", n);
    }
    function si(e, t) {
        e.shift = t.shift;
        e.ctrl = t.ctrl;
        e.alt = t.alt;
        e.meta = t.meta;
        e.x = t.x;
        e.y = t.y;
    }
    function ui(e, t, n) {
        var r = nt[e.id];
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
        si(r, e);
        ci(n, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function fi(e, t, n) {
        var r, i;
        r = nt[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            si(r, e);
            ci(n, r);
            i = r.targetCtx;
            if (i && ar(i.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            He(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function hi(e, t, n) {
        var r = nt[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function pi(e, t) {
        var n;
        e.shift = t.shiftKey;
        e.ctrl = t.ctrlKey;
        e.alt = t.altKey;
        e.meta = t.metaKey;
        e.x = t.clientX;
        e.y = t.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        n = Zr(e.x, e.y);
        ci(n, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    rt = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function mi(t, n, r) {
        var i, a, d, o, l, c, s, u, f, h, p, m, v, b, g, y, x, _, C, w, k;
        i = Qe;
        if (i != null) {
            i.destroy();
        }
        a = Object.keys(nt);
        if (a.length > 0) {
            i = nt[a[0]];
            i.system = !0;
            Qe = i;
        } else {
            d = t.clientX;
            o = t.clientY;
            i = new Ge(-1);
            i.system = !0;
            Qe = i;
            i.x = d;
            i.y = o;
            i.lastX = d;
            i.lastY = o;
            i.startX = d;
            i.startY = o;
            l = ar(r, "onDragStart", i);
            if (l) {
                c = En(l.me);
                if (c == e) {
                    i.destroy();
                    return !1;
                }
                i.started = !0;
                s = c.getBoundingClientRect;
                if (s) {
                    u = s.call(c);
                    i.deltaX = u.left - d;
                    i.deltaY = u.top - o;
                }
                ai();
            } else {
                i.destroy();
                return !1;
            }
        }
        i.beforeDrag = !1;
        f = rt[i.enabledOperations];
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
        _ = Object.keys(x);
        for (C = 0; C < _.length; C++) {
            try {
                w = _[C];
                k = x[w];
                if (!Kt(k)) k = JSON.stringify(k);
                t.dataTransfer.setData(w, k);
            } catch (e) {}
        }
        pi(i, t);
        return !1;
    }
    function vi(e, t) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][t];
    }
    function bi(t, n, r) {
        var i, a, d, o, l, c, s;
        i = Qe;
        if (i == e) {
            i = new Ge(-1);
            i.system = !0;
            Qe = i;
            i.x = t.clientX;
            i.y = t.clientY;
            i.startX = i.x;
            i.startY = i.y;
            i.local = !1;
            a = t.dataTransfer;
            d = 0;
            o = e;
            try {
                o = a.effectAllowed;
            } catch (e) {}
            for (;d < 7; d++) {
                if (rt[d] === o) break;
            }
            i.enabledOperations = d;
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
        pi(i, t);
        vi(t, i.operation);
        if (i.operation != 0) {
            sr(t);
            return !0;
        }
        return !1;
    }
    function gi(e, t, n) {
        var r, i, a;
        r = e.clientX;
        i = e.clientY;
        a = mr();
        if (Qe != null && (r === 0 && i === 0 || r < 0 || i < 0 || r >= a.width || i >= a.height)) {
            Qe.x = 0;
            Qe.y = 0;
            Qe.operation = 0;
            cr("onDrag", Qe);
        }
        return !0;
    }
    function yi(e, t, n) {
        if (Qe != null) {
            Qe.destroy();
        }
        return !1;
    }
    function xi(t, n, r) {
        var i, a, d, o, l, c, s;
        i = Qe;
        if (i == e) return !1;
        i.x = t.clientX;
        i.y = t.clientY;
        if (!i.local) {
            a = Object.keys(i.data);
            d = t.dataTransfer;
            for (o = 0; o < a.length; o++) {
                l = a[o];
                if (l === "Files") {
                    c = [].slice.call(d.files, 0);
                } else {
                    c = d.getData(l);
                }
                i.data[l] = c;
            }
        }
        pi(i, t);
        s = i.targetCtx;
        if (s && ar(s.me, "onDrop", i)) {
            vi(t, i.operation);
            i.destroy();
            sr(t);
        } else {
            i.cancelDnd();
        }
        return !0;
    }
    function _i(e, t, n) {
        sr(e);
        return !0;
    }
    function Ci(e, t, n) {
        if ($e.length === 0) return !1;
        sr(e);
        return !0;
    }
    Mn("!PointerDown", 4, li);
    Mn("!PointerMove", 4, ui);
    Mn("!PointerUp", 4, fi);
    Mn("!PointerCancel", 4, hi);
    Mn("selectstart", 4, Ci);
    Mn("dragstart", 5, mi);
    Mn("dragover", 5, bi);
    Mn("dragend", 5, yi);
    Mn("drag", 5, gi);
    Mn("drop", 5, xi);
    Mn("dragenter", 5, _i);
    Mn("dragleave", 5, _i);
    it = function() {
        return $e;
    };
    at = -1;
    function wi() {
        if (at >= 0) clearTimeout(at);
        at = -1;
        ee();
        return !1;
    }
    Mn("hashchange", 10, wi);
    Qt();
    function ki() {
        return e;
    }
    dt = Qt();
    ot = Qt();
    lt = Qt();
    Qt();
    ct = Qt();
    Qt();
    st = [];
    ut = [];
    ft = Qt();
    ht = "";
    pt = !1;
    mt = null;
    vt = 0;
    bt = Wn(Di);
    gt = /\:|\ |\>/;
    function Si(e) {
        var t, n;
        t = gt.exec(e);
        if (!t) return dt[e].name;
        n = t.index;
        return dt[e.substring(0, n)].name + e.substring(n);
    }
    function Ei(e, t) {
        var n = "", r;
        if (e) {
            if (l(e)) {
                for (r = 0; r < e.length; r++) {
                    if (r > 0) {
                        n += ",";
                    }
                    n += "." + Si(e[r]) + "." + t;
                }
            } else {
                n = "." + Si(e) + "." + t;
            }
        } else {
            n = "." + t;
        }
        return n;
    }
    function Ni(t, n, r, i) {
        var a, d, o, c, s, f;
        if (Kt(r)) {
            a = dt[r];
            if (a === e) {
                throw new Error("Unknown style " + r);
            }
            Ni(t, n, a.style, a.pseudo);
        } else if (Xt(r)) {
            r(t, n);
        } else if (l(r)) {
            for (d = 0; d < r.length; d++) {
                Ni(t, n, r[d], e);
            }
        } else if (typeof r === "object") {
            for (s in r) {
                if (!u.call(r, s)) continue;
                o = r[s];
                if (Xt(o)) {
                    o = o(t, s);
                }
                t[s] = o;
            }
        }
        if (i != e && n != e) {
            for (f in i) {
                c = n[f];
                if (c === e) {
                    c = Qt();
                    n[f] = c;
                }
                Ni(c, e, i[f], e);
            }
        }
    }
    yt = 0;
    xt = "";
    _t = 1;
    Ct = !1;
    wt = !0;
    function Di() {
        var r, i, a, d, o, l, c, s, u, f, h, p, m, v, b, g, y, x, _, C, w, k, S, E, N, D, I, P, R, A, F, j, B, O, T, U, M, V, H, L, K, W, X, Y, z, $;
        if (Ct && yt != mr().dppx) {
            yt = mr().dppx;
            r = Dt;
            i = 1;
            if (yt > 1) {
                for (a = 0; a < It.length; a++) {
                    if (a == It.length - 1 || It[a][1] >= yt) {
                        r = It[a][0];
                        i = It[a][1];
                    } else break;
                }
            }
            if (xt != r) {
                xt = r;
                _t = i;
                pt = !0;
                wt = !0;
            }
        }
        if (pt) {
            if (Ct) {
                d = ft[xt];
                if (d === e) {
                    d = null;
                    ft[xt] = d;
                    ji(xt, function(e) {
                        ft[xt] = e;
                        Ai();
                    });
                }
                if (d != null) {
                    for (o = 0; o < ut.length; o++) {
                        l = ut[o];
                        c = l.color;
                        if (!Kt(c)) c = c();
                        if (wt || c !== l.lastColor) {
                            l.lastColor = c;
                            s = l.width * _t | 0;
                            u = l.height * _t | 0;
                            f = Fi(d, c, s, u, l.left * _t | 0, l.top * _t | 0);
                            h = dt[l.styleId];
                            h.style = {
                                backgroundImage: "url(" + f + ")",
                                width: l.width,
                                height: l.height,
                                backgroundPosition: 0,
                                backgroundSize: "100%"
                            };
                        }
                    }
                    if (wt) {
                        p = d.width / _t;
                        m = d.height / _t;
                        for (Y in ct) {
                            v = ct[Y];
                            if (v.color !== e) continue;
                            h = dt[v.styleId];
                            b = v.width;
                            g = v.height;
                            y = 100 * p / b;
                            x = 100 * m / g;
                            h.style = {
                                backgroundImage: "url(" + xt + ")",
                                width: b,
                                height: g,
                                backgroundPosition: 100 * v.left / (p - b) + "% " + 100 * v.top / (m - g) + "%",
                                backgroundSize: y + "% " + x + "%"
                            };
                        }
                    }
                    wt = !1;
                }
            }
            for (_ = 0; _ < st.length; _++) {
                l = st[_];
                C = ft[l.url];
                if (C == e) continue;
                c = l.color();
                if (c !== l.lastColor) {
                    l.lastColor = c;
                    if (l.width == e) l.width = C.width;
                    if (l.height == e) l.height = C.height;
                    f = Fi(C, c, l.width, l.height, l.left, l.top);
                    h = dt[l.styleId];
                    h.style = {
                        backgroundImage: "url(" + f + ")",
                        width: l.width,
                        height: l.height,
                        backgroundPosition: 0
                    };
                }
            }
            w = ht;
            for (z in ot) {
                k = ot[z];
                w += "@keyframes " + k.name + " {";
                for ($ in k.def) {
                    S = k.def[$];
                    E = Qt();
                    Ni(E, e, S, e);
                    tn(E);
                    w += $ + ($ == "from" || $ == "to" ? "" : "%") + " {" + Pi(E) + "}\n";
                }
                w += "}\n";
            }
            for (z in dt) {
                N = dt[z];
                D = N.parent;
                I = N.name;
                P = N.pseudo;
                R = N.style;
                if (Xt(R) && R.length === 0) {
                    A = n(R(), 2), R = A[0], P = A[1];
                }
                if (Kt(R) && P == e) {
                    N.realName = R;
                    continue;
                }
                N.realName = I;
                F = Qt();
                j = Qt();
                Ni(e, j, e, P);
                Ni(F, j, R, e);
                B = null;
                if (F["pointerEvents"]) {
                    B = Qt();
                    B["pointerEvents"] = F["pointerEvents"];
                }
                N.inlStyle = B;
                tn(F);
                O = Pi(F);
                if (O.length > 0) w += (I == e ? D : Ei(D, I)) + " {" + O + "}\n";
                for ($ in j) {
                    S = j[$];
                    tn(S);
                    w += (I == e ? D + ":" + $ : Ei(D, I + ":" + $)) + " {" + Pi(S) + "}\n";
                }
            }
            for (z in lt) {
                T = lt[z];
                w += "@media " + z + "{";
                try {
                    for (U = (L = void 0, t(T)), M = U.next(); !M.done; M = U.next()) {
                        V = M.value;
                        for ($ in V) {
                            S = V[$];
                            H = Qt();
                            Ni(H, e, S, e);
                            tn(H);
                            w += "." + $ + " {" + Pi(H) + "}\n";
                        }
                    }
                } catch (e) {
                    L = {
                        error: e
                    };
                } finally {
                    try {
                        if (M && !M.done && (K = U.return)) K.call(U);
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
            if (mt != null) {
                X.replaceChild(W, mt);
            } else {
                X.appendChild(W);
            }
            mt = W;
            pt = !1;
        }
        bt();
    }
    kt = /([A-Z])/g;
    St = /^ms-/;
    function Ii(e) {
        if (e === "cssFloat") return "float";
        return e.replace(kt, "-$1").toLowerCase().replace(St, "-ms-");
    }
    function Pi(t) {
        var n = "", r, i;
        for (i in t) {
            r = t[i];
            if (r === e) continue;
            n += Ii(i) + ":" + (r === "" ? '""' : r) + ";";
        }
        n = n.slice(0, -1);
        return n;
    }
    function Ri(t, n, r) {
        dt["b-" + vt++] = {
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
        pt = !0;
        ee();
    }
    Et = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Fi(e, t, n, r, i, a) {
        var d, o, l, c, s, u, f, h, p, m, v, b;
        d = document.createElement("canvas");
        d.width = n;
        d.height = r;
        o = d.getContext("2d");
        o.drawImage(e, -i, -a);
        l = o.getImageData(0, 0, n, r);
        c = l.data;
        s = Et.exec(t);
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
        o.putImageData(l, 0, 0);
        return d.toDataURL();
    }
    Nt = !1;
    function ji(e, t) {
        var n = new Image();
        n.crossOrigin = Nt ? "use-credentials" : "anonymous";
        n.addEventListener("load", function() {
            return t(n);
        });
        n.src = e;
    }
    Dt = window["bobrilBPath"] || "bundle.png";
    It = window["bobrilBPath2"] || [];
    Ri("html." + Ze + " *", {
        cursor: "inherit !important",
        userSelect: "none !important"
    });
    function Bi(t) {
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
        deref: Cn,
        getRoots: er,
        setInvalidate: Gn,
        invalidateStyles: Ai,
        ignoreShouldChange: qn,
        setAfterFrame: Xn,
        setBeforeFrame: Wn,
        getDnds: it,
        setBeforeInit: ir
    };
    (function(e) {
        e[e["NotHandled"] = 0] = "NotHandled";
        e[e["HandledPreventDefault"] = 1] = "HandledPreventDefault";
        e[e["HandledButRunDefault"] = 2] = "HandledButRunDefault";
        e[e["NotHandledPreventDefault"] = 3] = "NotHandledPreventDefault";
    })(Pt);
    function Oi(t) {
        var n, r, i, a, d;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            d = a.postInitDom;
            if (d !== e) {
                d.call(a, t);
            }
        }
    }
    function Ti(t) {
        var n, r, i, a, d;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            d = a.postUpdateDom;
            if (d !== e) {
                d.call(a, t);
            }
        }
    }
    function Ui(t) {
        var n, r, i, a, d;
        n = t.$hooks;
        r = n.length;
        for (i = 0; i < r; i++) {
            a = n[i];
            d = a.postUpdateDomEverytime;
            if (d !== e) {
                d.call(a, t);
            }
        }
    }
    Rt = [];
    function Mi() {
        var e, t, n;
        e = Rt;
        Rt = [];
        for (t = 0, n = e.length; t < n; t++) {
            e[t]();
        }
    }
    At = function() {
        function e() {}
        return e;
    }();
    Ft = function() {
        function e() {}
        return e;
    }();
    rr(function() {
        return "hello";
    });
})();

