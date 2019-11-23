(function(e) {
    "use strict";
    var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, E, _, D, P, F, A, j, B, O, M, R, T, V, K, L, U, H, X, Y, z, G, q, W, $, Z, J, Q, ee, ne, te, re, ae, ie, de, oe, le, ce, se, ue, fe, he, pe, me, ve, ge, be, ye, xe, we, Ce, Se, ke, Ie, Ne, Ee, _e, De, Pe, Fe, Ae, je, Be, Oe, Me, Re, Te, Ve, Ke, Le, Ue, He, Xe, Ye, ze, Ge, qe, We, $e, Ze, Je, Qe, en, nn, tn, rn, an, dn, on, ln, cn, sn, un, fn, hn, pn;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, n) {
        e.__proto__ = n;
    } || function(e, n) {
        var t;
        for (t in n) if (n.hasOwnProperty(t)) e[t] = n[t];
    };
    Object.assign || function(e) {
        var n, t, r, a;
        for (n = 1, t = arguments.length; n < t; n++) {
            r = arguments[n];
            for (a in r) if (Object.prototype.hasOwnProperty.call(r, a)) e[a] = r[a];
        }
        return e;
    };
    (function() {
        function n(n, t) {
            this.data = n;
            this.me = t;
            this.cfg = e;
            this.refs = e;
            this.disposables = e;
            this.$bobxCtx = e;
        }
        return n;
    })();
    function mn(e, n) {}
    n = Array.isArray;
    t = {};
    function vn(e) {
        return document.createTextNode(e);
    }
    function gn(e) {
        return document.createElement(e);
    }
    function bn(n) {
        return n === null ? e : n;
    }
    function yn(e) {
        return typeof e == "number";
    }
    function xn(e) {
        return typeof e == "string";
    }
    function wn(e) {
        return typeof e == "function";
    }
    function Cn(e) {
        return typeof e === "object";
    }
    if (Object.assign == null) {
        Object.assign = function e(n) {
            var t = [], r, a, i, d, o, l, c, s;
            for (r = 1; r < arguments.length; r++) {
                t[r - 1] = arguments[r];
            }
            if (n == null) throw new TypeError("Target in assign cannot be undefined or null");
            a = arguments.length;
            for (i = 1; i < a; i++) {
                d = arguments[i];
                if (d == null) continue;
                o = Object.keys(d);
                l = o.length;
                for (c = 0; c < l; c++) {
                    s = o[c];
                    n[s] = d[s];
                }
            }
            return n;
        };
    }
    r = Object.assign;
    a = !1;
    i = !1;
    d = [];
    o = [];
    l = function(e, n, t, r) {
        if (t !== r) e[ne] = t;
    };
    function Sn(e) {
        var n = l;
        l = e;
        return n;
    }
    function kn() {
        return Object.create(null);
    }
    c = [ "Webkit", "Moz", "ms", "O" ];
    s = document.createElement("div").style;
    function In(e) {
        return xn(s[e]);
    }
    u = kn();
    f = {
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
    function Nn(n) {
        return function(t, r, a) {
            t[n] = r;
            t[a] = e;
        };
    }
    function En(n) {
        return function(t, r, a) {
            if (yn(r)) {
                t[n] = r + "px";
            } else {
                t[n] = r;
            }
            t[a] = e;
        };
    }
    function _n(e, n, t) {
        if (yn(n)) e[t] = n + "px";
    }
    function Dn() {
        return document.documentMode;
    }
    function Pn(n) {
        var t, r, a, i, d, o, l, s;
        t = Object.keys(n);
        for (r = 0, a = t.length; r < a; r++) {
            i = t[r];
            d = u[i];
            o = n[i];
            if (o === e) continue;
            if (d === e) {
                if (In(i)) {
                    d = f[i] === !0 ? null : _n;
                } else {
                    l = i.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (s = 0; s < c.length; s++) {
                        if (In(c[s] + l)) {
                            d = (f[i] === !0 ? Nn : En)(c[s] + l);
                            break;
                        }
                    }
                    if (d === e) {
                        d = f[i] === !0 ? null : _n;
                    }
                }
                u[i] = d;
            }
            if (d !== null) d(n, o, i);
        }
    }
    function Fn(e, n) {
        e[n] = "";
    }
    function An(e, n, t) {
        var r;
        if (xn(t)) {
            r = t.length;
            if (r > 11 && t.substr(r - 11, 11) === " !important") {
                e.setProperty(n, t.substr(0, r - 11), "important");
                return;
            }
        }
        e[n] = t;
    }
    function jn(n, t, r) {
        var a, i, d;
        a = n.style;
        if (Cn(t)) {
            Pn(t);
            if (Cn(r)) {
                for (i in r) {
                    if (!(i in t)) Fn(a, i);
                }
                for (i in t) {
                    d = t[i];
                    if (d !== e) {
                        if (r[i] !== d) An(a, i, d);
                    } else {
                        Fn(a, i);
                    }
                }
            } else {
                if (r) a.cssText = "";
                for (i in t) {
                    d = t[i];
                    if (d !== e) An(a, i, d);
                }
            }
        } else if (t) {
            a.cssText = t;
        } else {
            if (Cn(r)) {
                for (i in r) {
                    Fn(a, i);
                }
            } else if (r) {
                a.cssText = "";
            }
        }
    }
    function Bn(e, n) {
        if (a) e.setAttribute("class", n); else e.className = n;
    }
    h = /^input$|^select$|^textarea$|^button$/;
    p = "tabindex";
    function On(n, t, r, i, d) {
        var o = !1, c, s, u, f, m;
        if (r != null) for (c in r) {
            s = r[c];
            u = i[c];
            if (d && c === p) {
                s = -1;
                o = !0;
            } else if (c === ne && !a) {
                if (wn(s)) {
                    i[J] = s;
                    s = s();
                }
                f = u;
                m = s;
                i[c] = s;
                continue;
            }
            if (u !== s) {
                i[c] = s;
                if (a) {
                    if (c === "href") t.setAttributeNS("http://www.w3.org/1999/xlink", "href", s); else t.setAttribute(c, s);
                } else if (c in t && !(c === "list" || c === "form")) {
                    t[c] = s;
                } else t.setAttribute(c, s);
            }
        }
        if (d && !o && n.tag && h.test(n.tag)) {
            t.setAttribute(p, "-1");
            i[p] = -1;
        }
        if (r == null) {
            for (c in i) {
                if (i[c] !== e) {
                    if (d && c === p) continue;
                    if (c === J) continue;
                    i[c] = e;
                    t.removeAttribute(c);
                }
            }
        } else {
            for (c in i) {
                if (i[c] !== e && !(c in r)) {
                    if (d && c === p) continue;
                    if (c === J) continue;
                    i[c] = e;
                    t.removeAttribute(c);
                }
            }
        }
        if (m !== e) {
            l(t, n, m, f);
        }
        return i;
    }
    function Mn(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postInitDom;
            if (t) {
                d.push(t);
                o.push(e);
            }
        }
    }
    function Rn(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDom;
            if (t) {
                d.push(t);
                o.push(e);
            }
            t = n.postUpdateDomEverytime;
            if (t) {
                d.push(t);
                o.push(e);
            }
        }
    }
    function Tn(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDomEverytime;
            if (t) {
                d.push(t);
                o.push(e);
            }
        }
    }
    function Vn(n) {
        var t;
        while (n) {
            t = n.cfg;
            if (t !== e) break;
            if (n.ctx) {
                t = n.ctx.cfg;
                break;
            }
            n = n.parent;
        }
        return t;
    }
    function Kn(e, n) {
        var t, r;
        if (e == null) return;
        if (wn(e)) {
            e(n);
            return;
        }
        t = e[0];
        r = t.refs;
        if (r == null) {
            r = kn();
            t.refs = r;
        }
        r[e[1]] = n;
    }
    m = [];
    v = null;
    function Ln(n, t, r, d) {
        var o, l, c, s, u, f, h, p, m, g, b, y, x, w, C, S;
        o = {
            tag: n.tag,
            key: n.key,
            ref: n.ref,
            className: n.className,
            style: n.style,
            attrs: n.attrs,
            children: n.children,
            component: n.component,
            data: n.data,
            cfg: e,
            parent: t,
            element: e,
            ctx: e,
            orig: n
        };
        l = a;
        c = i;
        s = o.component;
        Kn(o.ref, o);
        if (s) {
            if (s.ctxClass) {
                u = new s.ctxClass(o.data || {}, o);
                if (u.data === e) u.data = o.data || {};
                if (u.me === e) u.me = o;
            } else {
                u = {
                    data: o.data || {},
                    me: o,
                    cfg: e
                };
            }
            u.cfg = n.cfg === e ? Vn(t) : n.cfg;
            o.ctx = u;
            cn = u;
            if (s.init) {
                s.init(u, o);
            }
            if (B !== j) B(n, 0);
            if (s.render) {
                s.render(u, o);
            }
            cn = e;
        } else {}
        f = o.tag;
        if (f === "-") {
            o.tag = e;
            o.children = e;
            return o;
        }
        h = o.children;
        p = !1;
        if (yn(h)) {
            h = "" + h;
            o.children = h;
        }
        if (f === e) {
            if (xn(h)) {
                m = vn(h);
                o.element = m;
                r.insertBefore(m, d);
            } else {
                Hn(o, r, d);
            }
            if (s) {
                if (s.postRender) {
                    s.postRender(o.ctx, o);
                }
                Mn(o);
            }
            return o;
        }
        if (f === "/") {
            g = h;
            if (g === "") {} else if (d == null) {
                b = r.lastChild;
                r.insertAdjacentHTML("beforeend", g);
                o.element = [];
                if (b) {
                    b = b.nextSibling;
                } else {
                    b = r.firstChild;
                }
                while (b) {
                    o.element.push(b);
                    b = b.nextSibling;
                }
            } else {
                m = d;
                y = d.previousSibling;
                x = !1;
                w = r;
                if (!m.insertAdjacentHTML) {
                    m = w.insertBefore(gn("i"), m);
                    x = !0;
                }
                m.insertAdjacentHTML("beforebegin", g);
                if (y) {
                    y = y.nextSibling;
                } else {
                    y = w.firstChild;
                }
                C = [];
                while (y !== m) {
                    C.push(y);
                    y = y.nextSibling;
                }
                o.element = C;
                if (x) {
                    w.removeChild(m);
                }
            }
            if (s) {
                if (s.postRender) {
                    s.postRender(o.ctx, o);
                }
                Mn(o);
            }
            return o;
        }
        if (a || f === "svg") {
            m = document.createElementNS("http://www.w3.org/2000/svg", f);
            p = f === "foreignObject";
            a = !p;
        } else {
            m = gn(f);
        }
        r.insertBefore(m, d);
        o.element = m;
        Hn(o, m, null);
        if (s) {
            if (s.postRender) {
                s.postRender(o.ctx, o);
            }
        }
        if (i && v === o) i = !1;
        if (p) a = !0;
        if (o.attrs || i) o.attrs = On(o, m, o.attrs, {}, i);
        if (o.style) jn(m, o.style, e);
        S = o.className;
        if (S) Bn(m, S);
        a = l;
        i = c;
        Mn(o);
        return o;
    }
    function Un(n) {
        if (n === !1 || n === !0 || n === null) return e;
        if (xn(n)) {
            return {
                children: n
            };
        }
        if (yn(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function Hn(e, t, r) {
        var a, i, d, o;
        a = e.children;
        if (!a) return;
        if (!n(a)) {
            if (xn(a)) {
                t.textContent = a;
                return;
            }
            a = [ a ];
        }
        a = a.slice(0);
        i = 0;
        d = a.length;
        while (i < d) {
            o = a[i];
            if (n(o)) {
                a.splice.apply(a, [ i, 1 ].concat(o));
                d = a.length;
                continue;
            }
            o = Un(o);
            if (o == null) {
                a.splice(i, 1);
                d--;
                continue;
            }
            a[i] = Ln(o, e, t, r);
            i++;
        }
        e.children = a;
    }
    function Xn(e) {
        var t, r, a, i, d, o, l, c;
        Kn(e.ref, null);
        t = e.children;
        if (n(t)) {
            for (r = 0, a = t.length; r < a; r++) {
                Xn(t[r]);
            }
        }
        i = e.component;
        if (i) {
            d = e.ctx;
            cn = d;
            if (B !== j) B(e, 3);
            if (i.destroy) i.destroy(d, e, e.element);
            o = d.disposables;
            if (n(o)) {
                for (l = o.length; l-- > 0; ) {
                    c = o[l];
                    if (wn(c)) c(d); else c.dispose();
                }
            }
        }
    }
    function Yn(e) {
        var t, r, a, i, d, o, l;
        t = e.element;
        if (n(t)) {
            r = t[0].parentNode;
            if (r) {
                for (a = 0; a < t.length; a++) {
                    r.removeChild(t[a]);
                }
            }
        } else if (t != null) {
            i = t.parentNode;
            if (i) i.removeChild(t);
        } else {
            d = e.children;
            if (n(d)) {
                for (o = 0, l = d.length; o < l; o++) {
                    Yn(d[o]);
                }
            }
        }
    }
    function zn(e) {
        Xn(e);
        Yn(e);
    }
    g = kn();
    function Gn(t, r, a, i) {
        var d, o, l, c, s;
        d = t.element;
        o = t.children;
        if (n(d)) {
            for (l = 0; l < d.length; l++) {
                if (d[l] === r) {
                    i.push(t);
                    if (n(o)) {
                        return o;
                    }
                    return null;
                }
            }
        } else if (d == null) {
            if (n(o)) {
                for (c = 0; c < o.length; c++) {
                    s = Gn(o[c], r, a, i);
                    if (s !== e) {
                        i.splice(a, 0, t);
                        return s;
                    }
                }
            }
        } else if (d === r) {
            i.push(t);
            if (n(o)) {
                return o;
            }
            return null;
        }
        return e;
    }
    function qn(n) {
        var t = [], r, a, i, d, o, l, c, s, u, f, h;
        if (n == null) return t;
        r = Object.keys(g);
        a = r.map(function(e) {
            return g[e].e || document.body;
        });
        i = [];
        e: while (n) {
            for (d = 0; d < a.length; d++) {
                if (n === a[d]) break e;
            }
            i.push(n);
            n = n.parentNode;
        }
        if (!n || i.length === 0) return t;
        o = null;
        l = i.pop();
        for (d = 0; d < a.length; d++) {
            if (n === a[d]) {
                c = g[r[d]].n;
                if (c === e) continue;
                s = Gn(c, l, t.length, t);
                if (s !== e) {
                    o = s;
                    break;
                }
            }
        }
        e: while (i.length) {
            l = i.pop();
            if (o && o.length) for (u = 0, f = o.length; u < f; u++) {
                h = o[u];
                s = Gn(h, l, t.length, t);
                if (s !== e) {
                    o = s;
                    continue e;
                }
            }
            t.push(null);
            break;
        }
        return t;
    }
    function Wn(e) {
        var n, t;
        n = qn(e);
        t = null;
        while (t === null) {
            t = n.pop();
        }
        return t;
    }
    function $n(n, t, r) {
        if (r) {
            if (r.postRender) {
                cn = t.ctx;
                r.postRender(cn, n, t);
                cn = e;
            }
        }
        t.data = n.data;
        Rn(t);
    }
    function Zn(t, r, d) {
        var o, l;
        cn = e;
        if (n(t.children)) {
            o = a;
            l = i;
            if (t.tag === "svg") {
                a = !0;
            } else if (a && t.tag === "foreignObject") a = !1;
            if (i && v === t) i = !1;
            ht(t.children, t.element || r, t.element != null ? null : d);
            a = o;
            i = l;
        }
        Tn(t);
    }
    function Jn(d, o, l, c, s, u) {
        var f, h = !1, p, m, g, b, y, x, w, C, I, N, E, _;
        f = d.component;
        p = o.ctx;
        if (f != null && p != null) {
            m = !1;
            if (p[S] === D) {
                s = Math.max(s, p[k]);
                m = !0;
            }
            if (f.id !== o.component.id) {
                h = !0;
            } else {
                cn = p;
                if (d.cfg !== e) p.cfg = d.cfg; else p.cfg = Vn(o.parent);
                if (f.shouldChange) if (!f.shouldChange(p, d, o) && !L && !m) {
                    Zn(o, l, c);
                    return o;
                }
                p.data = d.data || {};
                o.component = f;
                if (B !== j) B(d, u ? 2 : 1);
                if (f.render) {
                    o.orig = d;
                    d = r({}, d);
                    o.cfg = e;
                    if (d.cfg !== e) d.cfg = e;
                    f.render(p, d, o);
                    if (d.cfg !== e) {
                        if (o.cfg === e) o.cfg = d.cfg; else r(o.cfg, d.cfg);
                    }
                }
                cn = e;
            }
        } else {
            if (o.orig === d) {
                return o;
            }
            o.orig = d;
        }
        g = d.children;
        b = o.children;
        y = d.tag;
        if (y === "-") {
            Zn(o, l, c);
            return o;
        }
        x = a;
        w = i;
        if (yn(g)) {
            g = "" + g;
        }
        if (h || f != null && p == null || f == null && p != null && p.me.component !== t) {} else if (y === "/") {
            if (o.tag === "/" && b === g) {
                $n(d, o, f);
                return o;
            }
        } else if (y === o.tag) {
            if (y === e) {
                if (xn(g) && xn(b)) {
                    if (g !== b) {
                        C = o.element;
                        C.textContent = g;
                        o.children = g;
                    }
                } else {
                    if (i && v === o) i = !1;
                    if (s <= 0) {
                        if (n(b)) ht(o.children, l, c);
                    } else {
                        o.children = dt(l, g, b, o, c, s - 1);
                    }
                    a = x;
                    i = w;
                }
                $n(d, o, f);
                return o;
            } else {
                I = !1;
                if (y === "svg") {
                    a = !0;
                } else if (a && y === "foreignObject") {
                    I = !0;
                    a = !1;
                }
                if (i && v === o) i = !1;
                C = o.element;
                if (xn(g) && !n(b)) {
                    if (g !== b) {
                        C.textContent = g;
                        b = g;
                    }
                } else {
                    if (s <= 0) {
                        if (n(b)) ht(o.children, C, c);
                    } else {
                        b = dt(C, g, b, o, null, s - 1);
                    }
                }
                o.children = b;
                if (I) a = !0;
                $n(d, o, f);
                if (o.attrs || d.attrs || i) o.attrs = On(o, C, d.attrs, o.attrs || {}, i);
                jn(C, d.style, o.style);
                o.style = d.style;
                N = d.className;
                if (N !== o.className) {
                    Bn(C, N || "");
                    o.className = N;
                }
                a = x;
                i = w;
                return o;
            }
        }
        E = o.element;
        if (n(E)) E = E[0];
        if (E == null) E = l; else E = E.parentNode;
        _ = Ln(d, o.parent, E, Qn(o));
        zn(o);
        return _;
    }
    function Qn(t) {
        var r, a, i;
        if (t === e) return null;
        r = t.element;
        if (r != null) {
            if (n(r)) return r[0];
            return r;
        }
        a = t.children;
        if (!n(a)) return null;
        for (i = 0; i < a.length; i++) {
            r = Qn(a[i]);
            if (r) return r;
        }
        return null;
    }
    function et(e, n, t, r) {
        var a, i;
        while (++n < t) {
            a = e[n];
            if (a == null) continue;
            i = Qn(a);
            if (i != null) return i;
        }
        return r;
    }
    function nt() {
        var n, t, r;
        n = o.length;
        for (t = 0; t < n; t++) {
            r = o[t];
            cn = r.ctx;
            d[t].call(r.component, cn, r, r.element);
        }
        cn = e;
        d = [];
        o = [];
    }
    function tt(e, n, t, r, a, i, d) {
        n[t] = Jn(e, n[t], i, et(n, t, r, a), d);
    }
    function rt(e, t, r) {
        var a, i, d;
        a = e.element;
        if (a != null) {
            if (n(a)) {
                for (i = 0; i < a.length; i++) {
                    t.insertBefore(a[i], r);
                }
            } else t.insertBefore(a, r);
            return;
        }
        d = e.children;
        if (!n(d)) return;
        for (i = 0; i < d.length; i++) {
            rt(d[i], t, r);
        }
    }
    function at(e, n, t, r, a) {
        var i, d, o;
        i = et(e, n, t, r);
        d = e[n];
        o = Qn(d);
        if (o != null && o !== i) {
            rt(d, a, i);
        }
    }
    function it(e, n, t, r, a, i, d) {
        var o, l, c;
        o = et(n, t, r, a);
        l = n[t];
        c = Qn(l);
        if (c != null && c !== o) {
            rt(l, i, o);
        }
        n[t] = Jn(e, l, i, o, d);
    }
    function dt(e, t, r, a, i, d) {
        var o, l, c, s;
        if (t == null) t = [];
        if (!n(t)) {
            t = [ t ];
        }
        if (r == null) r = [];
        if (!n(r)) {
            if (e.firstChild) e.removeChild(e.firstChild);
            r = [];
        }
        o = t;
        o = o.slice(0);
        l = o.length;
        for (c = 0; c < l; ) {
            s = o[c];
            if (n(s)) {
                o.splice.apply(o, [ c, 1 ].concat(s));
                l = o.length;
                continue;
            }
            s = Un(s);
            if (s == null) {
                o.splice(c, 1);
                l--;
                continue;
            }
            o[c] = s;
            c++;
        }
        return ot(e, o, r, a, i, d);
    }
    function ot(n, t, r, a, i, d) {
        var o, l, c, s = 0, u = 0, f, h, p, m, v, g, b, y, x, w, C;
        o = t.length;
        l = r.length;
        c = l;
        while (s < o && u < c) {
            if (t[s].key === r[u].key) {
                tt(t[s], r, u, l, i, n, d);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (t[o - 1].key === r[c - 1].key) {
                    o--;
                    c--;
                    tt(t[o], r, c, l, i, n, d);
                    if (s < o && u < c) continue;
                }
                break;
            }
            if (s < o && u < c) {
                if (t[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    it(t[s], r, u, l, i, n, d);
                    s++;
                    u++;
                    continue;
                }
                if (t[o - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    o--;
                    it(t[o], r, c, l, i, n, d);
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
                r.splice(u, 0, Ln(t[s], a, n, et(r, u - 1, l, i)));
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
                zn(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = kn();
        h = kn();
        p = s;
        m = u;
        v = 0;
        for (;u < c; u++) {
            g = r[u];
            b = g.key;
            if (b != null) {
                mn(!(b in f));
                f[b] = u;
            } else v--;
        }
        y = -v - v;
        for (;s < o; s++) {
            g = t[s];
            b = g.key;
            if (b != null) {
                mn(!(b in h));
                h[b] = s;
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
            w = r[u].key;
            if (w == null) {
                u++;
                continue;
            }
            b = t[s].key;
            if (b == null) {
                s++;
                while (s < o) {
                    b = t[s].key;
                    if (b != null) break;
                    s++;
                }
                if (b == null) break;
            }
            C = f[b];
            if (C === e) {
                r.splice(u, 0, Ln(t[s], a, n, et(r, u - 1, l, i)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(w in h)) {
                zn(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                tt(t[s], r, u, l, i, n, d);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                it(t[s], r, u, l, i, n, d);
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
                zn(r[u]);
                r.splice(u, 1);
                c--;
                l--;
                continue;
            }
            u++;
        }
        while (s < o) {
            b = t[s].key;
            if (b != null) {
                r.splice(u, 0, Ln(t[s], a, n, et(r, u - 1, l, i)));
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
                w = r[u].key;
                if (w != null) {
                    u++;
                    continue;
                }
            }
            b = t[s].key;
            if (s < c && b === r[s].key) {
                if (b != null) {
                    s++;
                    continue;
                }
                tt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u = s;
                continue;
            }
            if (b != null) {
                mn(s === u);
                if (y === 0 && v < 0) {
                    while (!0) {
                        zn(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        v++;
                        mn(u !== c, "there still need to exist key node");
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == null) u++;
                mn(b === r[u].key);
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                at(r, s, l, i, n);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                it(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, Ln(t[s], a, n, et(r, s - 1, l, i)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            zn(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    b = !1;
    y = window.requestAnimationFrame;
    if (y) {
        y(function(e) {
            if (e === +e) b = !0;
        });
    }
    x = Date.now || function() {
        return new Date().getTime();
    };
    w = x();
    C = 0;
    function lt(e) {
        var n;
        if (b) {
            y(e);
        } else {
            n = 50 / 3 + C - x();
            if (n < 0) n = 0;
            window.setTimeout(function() {
                C = x();
                e(C - w);
            }, n);
        }
    }
    S = "$invalidated";
    k = "$deepness";
    I = !0;
    N = !1;
    E = !0;
    _ = 0;
    D = 0;
    P = 0;
    F = {};
    function ct(e, n, t) {
        var r;
        if (sn == null) sn = {};
        r = sn[e] || [];
        r.push({
            priority: n,
            callback: t
        });
        sn[e] = r;
    }
    function st(e, n, t, r) {
        var a, i;
        a = F[e];
        if (a) for (i = 0; i < a.length; i++) {
            if (a[i](n, t, r)) return !0;
        }
        return !1;
    }
    A = 0;
    function ut(e, n) {
        var t, r;
        if (n[0] == "!") return;
        t = n[0] == "^";
        r = n;
        if (n[0] == "@") {
            r = n.slice(1);
            e = document;
        }
        if (t) {
            r = n.slice(1);
        }
        function a(t) {
            var r, a;
            t = t || window.event;
            r = t.target || t.srcElement || e;
            a = Wn(r);
            A++;
            st(n, t, r, a);
            A--;
            if (A == 0 && T) gt();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, a, t);
    }
    function ft() {
        var n, t, r, a, i, d;
        if (sn === e) return;
        n = Object.keys(sn);
        for (t = 0; t < n.length; t++) {
            r = n[t];
            a = sn[r];
            a = a.sort(function(e, n) {
                return e.priority - n.priority;
            });
            F[r] = a.map(function(e) {
                return e.callback;
            });
        }
        sn = e;
        i = document.body;
        for (d = 0; d < n.length; d++) {
            ut(i, n[d]);
        }
    }
    function ht(e, t, r) {
        var d, o, l, c, s, u;
        d = e.length;
        for (o = 0; o < d; o++) {
            l = e[o];
            c = l.ctx;
            if (c != null && c[S] === D) {
                e[o] = Jn(l.orig, l, t, r, c[k], !0);
            } else if (n(l.children)) {
                s = a;
                u = i;
                if (i && v === l) i = !1;
                if (l.tag === "svg") a = !0; else if (a && l.tag === "foreignObject") a = !1;
                ht(l.children, l.element || t, et(e, o, d, r));
                Tn(l);
                a = s;
                i = u;
            }
        }
    }
    j = function() {};
    B = j;
    O = function() {};
    M = function() {};
    R = function() {};
    function pt(e) {
        var n = O;
        O = e;
        return n;
    }
    function mt(e) {
        var n = R;
        R = e;
        return n;
    }
    function vt(e, n, t) {
        var r, a, i;
        while (n != null) {
            if (e === n) return !0;
            r = n.parent;
            if (r == null) {
                for (a = 0; a < t.length; a++) {
                    i = g[t[a]];
                    if (!i) continue;
                    if (i.n === n) {
                        r = i.p;
                        break;
                    }
                }
            }
            n = r;
        }
        return !1;
    }
    T = !1;
    function gt() {
        T = !1;
        yt(x() - w);
    }
    function bt(e) {
        N = !1;
        yt(e);
    }
    V = ea({
        render: function(n, t) {
            var r, a;
            r = n.data;
            a = r.f(r);
            if (a === e) {
                t.tag = "-";
            } else {
                t.children = a;
            }
        }
    });
    function yt(t) {
        var r, a, d, o, l, c, s, u, f;
        P = x();
        ft();
        M();
        D++;
        L = K;
        K = !1;
        _ = t;
        O();
        v = m.length === 0 ? null : m[m.length - 1];
        i = !1;
        r = !1;
        if (I) {
            I = !1;
            r = !0;
        }
        un = Object.keys(g);
        for (a = 0; a < un.length; a++) {
            d = g[un[a]];
            if (!d) continue;
            o = d.n;
            l = null;
            for (c = a + 1; c < un.length; c++) {
                s = g[un[c]];
                if (s === e) continue;
                l = Qn(s.n);
                if (l != null) break;
            }
            if (v) i = !vt(v, d.p, un);
            if (d.e === e) d.e = document.body;
            if (o) {
                if (r || o.ctx[S] === D) {
                    u = V(d);
                    Jn(u, o, d.e, l, r ? 1000000 : o.ctx[k]);
                } else {
                    if (n(d.c)) ht(d.c, d.e, l);
                }
            } else {
                u = V(d);
                o = Ln(u, e, d.e, l);
                d.n = o;
            }
            d.c = o.children;
        }
        un = e;
        nt();
        f = g["0"];
        R(f ? f.c : null);
        x() - P;
    }
    K = !1;
    L = !1;
    function xt() {
        K = !0;
        U();
    }
    function wt(e) {
        var n = U;
        U = e;
        return n;
    }
    U = function(n, t) {
        if (n != null) {
            if (t == e) t = 1000000;
            if (n[S] !== D + 1) {
                n[S] = D + 1;
                n[k] = t;
            } else {
                if (t > n[k]) n[k] = t;
            }
        } else {
            I = !0;
        }
        if (N || E) return;
        N = !0;
        lt(bt);
    };
    H = 0;
    function Ct(n, t, r) {
        var a;
        H++;
        a = "" + H;
        g[a] = {
            f: n,
            e: t,
            c: [],
            p: r,
            n: e
        };
        if (un != null) {
            un.push(a);
        } else {
            Nt();
        }
        return a;
    }
    function St(e) {
        var n = g[e];
        if (!n) return;
        if (n.n) zn(n.n);
        delete g[e];
    }
    function kt() {
        return g;
    }
    function It() {
        E = !1;
        U();
    }
    X = It;
    function Nt() {
        E = !0;
        X();
        X = It;
    }
    function Et(n, t) {
        mn(un == null, "init should not be called from render");
        St("0");
        g["0"] = {
            f: n,
            e: t,
            c: [],
            p: e,
            n: e
        };
        Nt();
    }
    function _t(e) {
        var n = X;
        X = function() {
            e(n);
        };
    }
    function Dt(n, t, r) {
        var a, i, d;
        while (n) {
            a = n.component;
            if (a) {
                i = n.ctx;
                d = a[t];
                if (d) {
                    if (d.call(a, i, r)) return i;
                }
                d = a.shouldStopBubble;
                if (d) {
                    if (d.call(a, i, t, r)) break;
                }
            }
            n = n.parent;
        }
        return e;
    }
    function Pt(t, r, a) {
        var i, d, o, l, c, s;
        if (!t) return e;
        i = t.component;
        if (i) {
            d = t.ctx;
            o = i[r];
            if (o) {
                if (o.call(i, d, a)) return d;
            }
            o = i.shouldStopBroadcast;
            if (o) {
                if (o.call(i, d, r, a)) return e;
            }
        }
        l = t.children;
        if (n(l)) {
            for (c = 0; c < l.length; c++) {
                s = Pt(l[c], r, a);
                if (s != null) return s;
            }
        }
        return e;
    }
    function Ft(n, t) {
        var r, a, i, d;
        r = Object.keys(g);
        for (a = 0; a < r.length; a++) {
            i = g[r[a]].n;
            if (i != null) {
                d = Pt(i, n, t);
                if (d != null) return d;
            }
        }
        return e;
    }
    function At(e) {
        var n = e.preventDefault;
        if (n) n.call(e); else e.returnValue = !1;
    }
    function jt(e) {
        var t, r;
        e = e.slice(0);
        for (t = 0; t < e.length; t++) {
            r = e[t];
            if (n(r)) {
                e[t] = jt(r);
            } else if (Cn(r)) {
                e[t] = Bt(r);
            }
        }
        return e;
    }
    function Bt(e) {
        var t, a;
        t = r({}, e);
        if (t.attrs) {
            t.attrs = r({}, t.attrs);
        }
        if (Cn(t.style)) {
            t.style = r({}, t.style);
        }
        a = t.children;
        if (a) {
            if (n(a)) {
                t.children = jt(a);
            } else if (Cn(a)) {
                t.children = Bt(a);
            }
        }
        return t;
    }
    function Ot(e, n) {
        u[e] = n;
    }
    Y = null;
    z = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function Mt() {
        Y = null;
        U();
        return !1;
    }
    G = [ "resize", "orientationchange" ];
    for (q = 0; q < G.length; q++) ct(G[q], 10, Mt);
    W = window.document.documentElement;
    $ = /Android/i.test(navigator.userAgent);
    function Rt() {
        var e, n, t, r, a, i;
        if (Y == null) {
            e = W.clientWidth;
            n = W.clientHeight;
            t = window.orientation;
            r = n >= e;
            if (t == null) t = r ? 0 : 90;
            if ($) {
                a = Math.abs(t) % 180 === 90;
                if (fn == null) {
                    fn = a === r;
                } else {
                    r = a === fn;
                }
            }
            i = 0;
            while (e > z[+!r][i]) i++;
            Y = {
                width: e,
                height: n,
                orientation: t,
                deviceCategory: i,
                portrait: r
            };
        }
        return Y;
    }
    Z = function() {
        var n = [], t = "onreadystatechange", r, a, i, d, o, l, c;
        function s() {
            var e, t, r;
            e = n;
            n = [];
            for (t = 0, r = e.length; t < r; t++) {
                e[t]();
            }
        }
        if (window.MutationObserver) {
            r = document.createElement("div");
            new MutationObserver(s).observe(r, {
                attributes: !0
            });
            return function(e) {
                if (!n.length) {
                    r.setAttribute("yes", "no");
                }
                n.push(e);
            };
        } else if (!window.setImmediate && window.postMessage && window.addEventListener) {
            a = "basap" + Math.random();
            i = !1;
            d = function(e) {
                if (e.source === window && e.data === a) {
                    i = !1;
                    s();
                }
            };
            window.addEventListener("message", d, !1);
            return function(e) {
                n.push(e);
                if (!i) {
                    i = !0;
                    window.postMessage(a, "*");
                }
            };
        } else if (!window.setImmediate && t in document.createElement("script")) {
            return function(e) {
                n.push(e);
                if (!l) {
                    l = document.createElement("script");
                    l[t] = function() {
                        l[t] = null;
                        l.parentNode.removeChild(l);
                        l = null;
                        s();
                    };
                    document.body.appendChild(l);
                }
            };
        } else {
            o = window.setImmediate || setTimeout;
            return function(t) {
                n.push(t);
                if (!c) {
                    c = o(function() {
                        c = e;
                        s();
                    }, 0);
                }
            };
        }
    }();
    if (!window.Promise) {
        (function() {
            function t(e, n) {
                return function() {
                    e.apply(n, arguments);
                };
            }
            function r(e) {
                var n = this;
                if (this.s === null) {
                    this.d.push(e);
                    return;
                }
                Z(function() {
                    var t, r;
                    t = n.s ? e[0] : e[1];
                    if (t == null) {
                        (n.s ? e[2] : e[3])(n.v);
                        return;
                    }
                    try {
                        r = t(n.v);
                    } catch (n) {
                        e[3](n);
                        return;
                    }
                    e[2](r);
                });
            }
            function a() {
                var e, n;
                for (e = 0, n = this.d.length; e < n; e++) {
                    r.call(this, this.d[e]);
                }
                this.d = null;
            }
            function i(e) {
                this.s = !1;
                this.v = e;
                a.call(this);
            }
            function d(e, n, t) {
                var r = !1;
                try {
                    e(function(e) {
                        if (r) return;
                        r = !0;
                        n(e);
                    }, function(e) {
                        if (r) return;
                        r = !0;
                        t(e);
                    });
                } catch (e) {
                    if (r) return;
                    r = !0;
                    t(e);
                }
            }
            function o(e) {
                var n;
                try {
                    if (e === this) throw new TypeError("Promise self resolve");
                    if (Object(e) === e) {
                        n = e.then;
                        if (typeof n === "function") {
                            d(t(n, e), t(o, this), t(i, this));
                            return;
                        }
                    }
                    this.s = !0;
                    this.v = e;
                    a.call(this);
                } catch (e) {
                    i.call(this, e);
                }
            }
            function l(e) {
                this.s = null;
                this.v = null;
                this.d = [];
                d(e, t(o, this), t(i, this));
            }
            l.prototype.then = function(e, n) {
                var t = this;
                return new l(function(a, i) {
                    r.call(t, [ e, n, a, i ]);
                });
            };
            l.prototype["catch"] = function(n) {
                return this.then(e, n);
            };
            l.all = function() {
                var e = [].slice.call(arguments.length === 1 && n(arguments[0]) ? arguments[0] : arguments);
                return new l(function(n, t) {
                    var r, a;
                    if (e.length === 0) {
                        n(e);
                        return;
                    }
                    r = e.length;
                    function i(a, d) {
                        var o;
                        try {
                            if (d && (typeof d === "object" || typeof d === "function")) {
                                o = d.then;
                                if (typeof o === "function") {
                                    o.call(d, function(e) {
                                        i(a, e);
                                    }, t);
                                    return;
                                }
                            }
                            e[a] = d;
                            if (--r === 0) {
                                n(e);
                            }
                        } catch (e) {
                            t(e);
                        }
                    }
                    for (a = 0; a < e.length; a++) {
                        i(a, e[a]);
                    }
                });
            };
            l.resolve = function(e) {
                if (e && typeof e === "object" && e.constructor === l) {
                    return e;
                }
                return new l(function(n) {
                    n(e);
                });
            };
            l.reject = function(e) {
                return new l(function(n, t) {
                    t(e);
                });
            };
            l.race = function(e) {
                return new l(function(n, t) {
                    var r, a;
                    for (r = 0, a = e.length; r < a; r++) {
                        e[r].then(n, t);
                    }
                });
            };
            window["Promise"] = l;
        })();
    }
    if (Dn() === 9) {
        (function() {
            var e = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
            function n(e, n) {
                var t;
                if (e.zoom == null) e.zoom = "1";
                t = e.filter;
                e.filter = t == null ? n : t + " " + n;
            }
            Ot("background", function(t, r, a) {
                var i, d, o, l, c;
                i = e.exec(r);
                if (i == null) return;
                d = i[1];
                o = i[2];
                l = i[3];
                switch (d) {
                  case "top":
                    d = "0";
                    c = o;
                    o = l;
                    l = c;
                    break;

                  case "bottom":
                    d = "0";
                    break;

                  case "left":
                    d = "1";
                    c = o;
                    o = l;
                    l = c;
                    break;

                  case "right":
                    d = "1";
                    break;

                  default:
                    return;
                }
                t[a] = "none";
                n(t, 'progid:DXImageTransform.Microsoft.gradient(startColorstr=\'' + o + '\',endColorstr=\'' + l + '\', gradientType=\'' + d + '\')');
            });
        })();
    } else {
        (function() {
            var e = document.createElement("div").style;
            e.cssText = "background:-webkit-linear-gradient(top,red,red)";
            if (e.background.length > 0) {
                (function() {
                    var e = /^(?:repeating\-)?(?:linear|radial)\-gradient/gi, n = {
                        top: "bottom",
                        bottom: "top",
                        left: "right",
                        right: "left"
                    };
                    function t(t, r, a) {
                        var i, d, o;
                        if (e.test(r)) {
                            i = r.indexOf("(to ");
                            if (i > 0) {
                                i += 4;
                                d = r.indexOf(",", i);
                                o = r.slice(i, d);
                                o = o.split(" ").map(function(e) {
                                    return n[e] || e;
                                }).join(" ");
                                r = r.slice(0, i - 3) + o + r.slice(d);
                            }
                            r = "-webkit-" + r;
                        }
                        t[a] = r;
                    }
                    Ot("background", t);
                })();
            }
        })();
    }
    J = "b$value";
    Q = "b$selStart";
    ee = "b$selEnd";
    ne = "value";
    function Tt(e) {
        var n = e.type;
        return n === "checkbox" || n === "radio";
    }
    function Vt(e, n) {
        var t, r;
        t = e.length;
        if (t !== n.length) return !1;
        for (r = 0; r < t; r++) {
            if (e[r] !== n[r]) return !1;
        }
        return !0;
    }
    function Kt(e, n) {
        var t;
        for (t = 0; t < e.length; t++) {
            if (e[t] === n) return !0;
        }
        return !1;
    }
    function Lt(e) {
        var n = [], t;
        for (t = 0; t < e.length; t++) {
            if (e[t].selected) n.push(e[t].value);
        }
        return n;
    }
    te = Sn(function(n, r, a, i) {
        var d, o, l, c, s, u, f, h, p, m, v;
        d = n.tagName;
        o = d === "SELECT";
        l = d === "INPUT" || d === "TEXTAREA";
        if (!l && !o) {
            te(n, r, a, i);
            return;
        }
        if (r.ctx === e) {
            r.ctx = {
                me: r
            };
            r.component = t;
        }
        if (i === e) {
            r.ctx[J] = a;
        }
        c = o && n.multiple;
        s = !1;
        if (c) {
            u = n.options;
            f = Lt(u);
            if (!Vt(a, f)) {
                if (i === e || Vt(f, i) || !Vt(a, r.ctx[J])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = Kt(a, u[h].value);
                    }
                    f = Lt(u);
                    if (Vt(f, a)) {
                        s = !0;
                    }
                } else {
                    s = !0;
                }
            }
        } else if (l || o) {
            if (l && Tt(n)) {
                p = n.checked;
                if (a !== p) {
                    if (i === e || p === i || a !== r.ctx[J]) {
                        n.checked = a;
                    } else {
                        s = !0;
                    }
                }
            } else {
                m = o && n.size < 2;
                v = n[ne];
                if (a !== v) {
                    if (i === e || v === i || a !== r.ctx[J]) {
                        if (o) {
                            if (a === "") {
                                n.selectedIndex = m ? 0 : -1;
                            } else {
                                n[ne] = a;
                            }
                            if (a !== "" || m) {
                                v = n[ne];
                                if (a !== v) {
                                    s = !0;
                                }
                            }
                        } else {
                            n[ne] = a;
                        }
                    } else {
                        s = !0;
                    }
                }
            }
        }
        if (s) {
            Ut(e, n, r);
        } else {
            r.ctx[J] = a;
        }
    });
    function Ut(n, t, r) {
        var a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, E, _, D, P;
        if (t && t.nodeName === "OPTION") {
            t = document.activeElement;
            r = Wn(t);
        }
        if (!r) {
            return !1;
        }
        a = r.component;
        i = r.attrs && r.attrs[J];
        d = a && a.onChange != null;
        o = i || d;
        l = a && a.onSelectionChange != null;
        if (!o && !l) return !1;
        c = r.ctx;
        s = t.tagName;
        u = s === "SELECT";
        f = u && t.multiple;
        if (o && f) {
            h = Lt(t.options);
            if (!Vt(c[J], h)) {
                c[J] = h;
                if (i) i(h);
                if (d) a.onChange(c, h);
            }
        } else if (o && Tt(t)) {
            if (n && n.type === "change") {
                setTimeout(function() {
                    Ut(e, t, r);
                }, 10);
                return !1;
            }
            if (t.type === "radio") {
                p = document.getElementsByName(t.name);
                for (m = 0; m < p.length; m++) {
                    v = p[m];
                    g = Wn(v);
                    if (!g) continue;
                    b = r.attrs[J];
                    y = g.component;
                    x = y && y.onChange != null;
                    if (!b && !x) continue;
                    w = g.ctx;
                    C = v.checked;
                    if (w[J] !== C) {
                        w[J] = C;
                        if (b) b(C);
                        if (x) y.onChange(w, C);
                    }
                }
            } else {
                S = t.checked;
                if (c[J] !== S) {
                    c[J] = S;
                    if (i) i(S);
                    if (d) a.onChange(c, S);
                }
            }
        } else {
            if (o) {
                k = t.value;
                if (c[J] !== k) {
                    c[J] = k;
                    if (i) i(k);
                    if (d) a.onChange(c, k);
                }
            }
            if (l) {
                I = t.selectionStart;
                N = t.selectionEnd;
                E = t.selectionDirection;
                _ = !1;
                D = c[Q];
                if (E == null) {
                    if (N === D) _ = !0;
                } else if (E === "backward") {
                    _ = !0;
                }
                if (_) {
                    P = I;
                    I = N;
                    N = P;
                }
                Ht(r, I, N);
            }
        }
        return !1;
    }
    function Ht(e, n, t) {
        var r, a;
        r = e.component;
        a = e.ctx;
        if (r && (a[Q] !== n || a[ee] !== t)) {
            a[Q] = n;
            a[ee] = t;
            if (r.onSelectionChange) r.onSelectionChange(a, {
                startPosition: n,
                endPosition: t
            });
        }
    }
    function Xt(e, n, t) {
        var r = Ir();
        if (r) Ut(e, r.element, r);
        return !1;
    }
    G = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (q = 0; q < G.length; q++) ct(G[q], 10, Ut);
    re = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (q = 0; q < re.length; q++) ct(re[q], 2, Xt);
    function Yt(e) {
        return {
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            which: e.which || e.keyCode
        };
    }
    function zt(e, n, t) {
        var r;
        if (!t) return !1;
        r = Yt(e);
        if (Dt(t, "onKeyDown", r)) {
            At(e);
            return !0;
        }
        return !1;
    }
    function Gt(e, n, t) {
        var r;
        if (!t) return !1;
        r = Yt(e);
        if (Dt(t, "onKeyUp", r)) {
            At(e);
            return !0;
        }
        return !1;
    }
    function qt(e, n, t) {
        var r;
        if (!t) return !1;
        if (e.which === 0) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (Dt(t, "onKeyPress", r)) {
            At(e);
            return !0;
        }
        return !1;
    }
    ct("keydown", 50, zt);
    ct("keyup", 50, Gt);
    ct("keypress", 50, qt);
    ae = 13;
    ie = 750;
    de = 500;
    oe = 800;
    le = 50;
    ce = null;
    se = "onClick";
    ue = "onDoubleClick";
    function Wt(e, n) {
        var t, r;
        if (ce == null) {
            return !1;
        }
        t = ce.me.component[e];
        if (!t) {
            return !1;
        }
        r = t(ce, n);
        return r;
    }
    function $t(n) {
        var t, r;
        while (n) {
            t = n.style;
            if (t) {
                r = t.pointerEvents;
                if (r !== e) {
                    if (r === "none") return !0;
                    return !1;
                }
            }
            n = n.parent;
        }
        return !1;
    }
    function Zt(e) {
        var n = Wn(e);
        return $t(n);
    }
    function Jt(e) {
        var n;
        if (e.length) {
            for (n = e.length - 1; n >= 0; --n) {
                e[n].t.style.visibility = e[n].p;
            }
            return !0;
        }
        return !1;
    }
    function Qt(e, n) {
        e.push({
            t: n,
            p: n.style.visibility
        });
        n.style.visibility = "hidden";
    }
    function er(e, n, t) {
        var r = [], a;
        a = n;
        while (Zt(a)) {
            Qt(r, a);
            a = document.elementFromPoint(e.x, e.y);
        }
        if (Jt(r)) {
            try {
                a.dispatchEvent(e);
            } catch (e) {
                return !1;
            }
            At(e);
            return !0;
        }
        return !1;
    }
    function nr(e, n) {
        ct(e, 5, n);
    }
    fe = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (Dn() && Dn() < 11) {
        re = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (q = 0; q < re.length; ++q) {
            ct(re[q], 1, er);
        }
    }
    function tr(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function rr(e, n, t, r) {
        var a = [], i;
        i = t;
        while ($t(r)) {
            Qt(a, i);
            i = document.elementFromPoint(e, n);
            r = Wn(i);
        }
        Jt(a);
        return [ i, r ];
    }
    function ar(e) {
        return function n(t, r, a) {
            var i, d, o, l, c;
            if ($t(a)) {
                i = rr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = t.button + 1;
            o = tr(t.pointerType);
            l = t.buttons;
            if (d === 0 && o === 0 && l) {
                d = 1;
                while (!(l & 1)) {
                    l = l >> 1;
                    d++;
                }
            }
            c = {
                id: t.pointerId,
                type: o,
                x: t.clientX,
                y: t.clientY,
                button: d,
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            if (st("!" + e, c, r, a)) {
                At(t);
                return !0;
            }
            return !1;
        };
    }
    function ir(e) {
        return function n(t, r, a) {
            var i = !1, d, o, l;
            for (d = 0; d < t.changedTouches.length; d++) {
                o = t.changedTouches[d];
                r = document.elementFromPoint(o.clientX, o.clientY);
                a = Wn(r);
                l = {
                    id: o.identifier + 2,
                    type: 1,
                    x: o.clientX,
                    y: o.clientY,
                    button: 1,
                    shift: t.shiftKey,
                    ctrl: t.ctrlKey,
                    alt: t.altKey,
                    meta: t.metaKey || !1,
                    count: t.detail
                };
                if (st("!" + e, l, r, a)) i = !0;
            }
            if (i) {
                At(t);
                return !0;
            }
            return !1;
        };
    }
    function dr(e) {
        return function n(t, r, a) {
            var i, d;
            r = document.elementFromPoint(t.clientX, t.clientY);
            a = Wn(r);
            if ($t(a)) {
                i = rr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = {
                id: 1,
                type: 0,
                x: t.clientX,
                y: t.clientY,
                button: br(t),
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            if (st("!" + e, d, r, a)) {
                At(t);
                return !0;
            }
            return !1;
        };
    }
    function or() {
        nr("mousedown", dr(fe[0]));
        nr("mousemove", dr(fe[1]));
        nr("mouseup", dr(fe[2]));
    }
    if (window.ontouchstart !== e) {
        nr("touchstart", ir(fe[0]));
        nr("touchmove", ir(fe[1]));
        nr("touchend", ir(fe[2]));
        nr("touchcancel", ir(fe[3]));
        or();
    } else if (window.onpointerdown !== e) {
        for (q = 0; q < 4; q++) {
            he = fe[q];
            nr(he.toLowerCase(), ar(he));
        }
    } else if (window.onmspointerdown !== e) {
        for (q = 0; q < 4; q++) {
            he = fe[q];
            nr("@MS" + he, ar(he));
        }
    } else {
        or();
    }
    for (pe = 0; pe < 4; pe++) {
        (function(e) {
            var n = "on" + e;
            ct("!" + e, 50, function(e, t, r) {
                return Wt(n, e) || Dt(r, n, e) != null;
            });
        })(fe[pe]);
    }
    me = kn();
    ve = [];
    ge = -1;
    be = 0;
    ye = 0;
    xe = 0;
    we = !1;
    function lr(e, n, t) {
        return Math.abs(e - n) < t;
    }
    Ce = [];
    function cr(n) {
        var t, r, a, i, d, o, l, c;
        t = document.elementFromPoint(n.x, n.y);
        r = qn(t);
        a = r.length == 0 ? e : r[r.length - 1];
        if ($t(a)) {
            i = rr(n.x, n.y, t, a == null ? e : a);
            t = i[0];
            r = qn(t);
        }
        Dt(a, "onMouseOver", n);
        d = 0;
        while (d < Ce.length && d < r.length && Ce[d] === r[d]) d++;
        o = Ce.length;
        if (o > 0) {
            l = Ce[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, n);
            }
        }
        while (o > d) {
            o--;
            l = Ce[o];
            if (l) {
                c = l.component;
                if (c && c.onMouseLeave) c.onMouseLeave(l.ctx, n);
            }
        }
        while (o < r.length) {
            l = r[o];
            if (l) {
                c = l.component;
                if (c && c.onMouseEnter) c.onMouseEnter(l.ctx, n);
            }
            o++;
        }
        Ce = r;
        if (o > 0) {
            l = Ce[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, n);
            }
        }
        return !1;
    }
    function sr() {
        return Object.keys(me).length === 0;
    }
    function ur(e, n, t) {
        if (ge === -1 && sr()) {
            ge = e.id;
            be = x();
            ye = e.x;
            xe = e.y;
            we = !1;
            cr(e);
        }
        me[e.id] = e.type;
        if (ge !== e.id) {
            we = !0;
        }
        return !1;
    }
    function fr(e, n, t) {
        if (e.type === 0 && e.button === 0 && me[e.id] != null) {
            e.button = 1;
            st("!PointerUp", e, n, t);
            e.button = 0;
        }
        if (ge === e.id) {
            cr(e);
            if (!lr(ye, e.x, ae) || !lr(xe, e.y, ae)) we = !0;
        } else if (sr()) {
            cr(e);
        }
        return !1;
    }
    Se = 0;
    ke = 0;
    function hr(e) {
        var n;
        if (ke == 0) return !1;
        n = x();
        if (n < Se + 1000 && e >= ke) {
            Se = n;
            ke = e;
            return !0;
        }
        ke = 0;
        return !1;
    }
    function pr(e, n, t) {
        var r, a;
        delete me[e.id];
        if (ge == e.id) {
            cr(e);
            ge = -1;
            if (e.type == 1 && !we) {
                if (x() - be < ie) {
                    st("!PointerCancel", e, n, t);
                    hr(1);
                    r = Wt(se, e) || Dt(t, se, e) != null;
                    a = Dn() ? oe : de;
                    ve.push([ e.x, e.y, x() + a, r ? 1 : 0 ]);
                    return r;
                }
            }
        }
        return !1;
    }
    function mr(e, n, t) {
        delete me[e.id];
        if (ge == e.id) {
            ge = -1;
        }
        return !1;
    }
    function vr(e, n, t) {
        var r, a, i;
        r = x();
        for (a = 0; a < ve.length; a++) {
            i = ve[a];
            if (i[2] < r) {
                ve.splice(a, 1);
                a--;
                continue;
            }
            if (lr(i[0], e.clientX, le) && lr(i[1], e.clientY, le)) {
                ve.splice(a, 1);
                if (i[3]) At(e);
                return !0;
            }
        }
        return !1;
    }
    Ie = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Ne = [ ur, fr, pr, mr, vr ];
    for (q = 0; q < 5; q++) {
        ct(Ie[q], 3, Ne[q]);
    }
    function gr(e) {
        return function(n, t, r) {
            if (ge != n.id && !sr()) return !1;
            if (Wt(e, n) || Dt(r, e, n)) {
                return !0;
            }
            return !1;
        };
    }
    Ee = [ "Down", "Move", "Up", "Up" ];
    for (q = 0; q < 4; q++) {
        ct(Ie[q], 80, gr("onMouse" + Ee[q]));
    }
    function br(e) {
        return e.which || e.button;
    }
    function yr(e, n) {
        return function(t, r, a) {
            var i, d, o;
            if (A == 1 && (r.nodeName != "INPUT" || t.clientX != 0 || t.clientY != 0)) {
                r = document.elementFromPoint(t.clientX, t.clientY);
                a = Wn(r);
                if ($t(a)) {
                    i = rr(t.clientX, t.clientY, r, a);
                    r = i[0];
                    a = i[1];
                }
            }
            d = br(t) || 1;
            if (!n && d !== 1) return !1;
            o = {
                x: t.clientX,
                y: t.clientY,
                button: d,
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail || 1
            };
            if (e == ue) o.count = 2;
            if (hr(o.count) || Wt(e, o) || Dt(a, e, o)) {
                At(t);
                return !0;
            }
            return !1;
        };
    }
    function xr(e, n) {
        var t, r, a;
        t = document.elementFromPoint(e, n);
        r = Wn(t);
        if ($t(r)) {
            a = rr(e, n, t, r);
            r = a[1];
        }
        return r;
    }
    function wr(e, n, t) {
        var r, a;
        while (t) {
            r = t.style;
            if (r) {
                a = r.userSelect;
                if (a === "none") {
                    At(e);
                    return !0;
                }
                if (a) {
                    break;
                }
            }
            t = t.parent;
        }
        return !1;
    }
    nr("selectstart", wr);
    nr("^click", yr(se));
    nr("^dblclick", yr(ue));
    nr("contextmenu", yr("onContextMenu", !0));
    _e = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function Cr(e, n, t) {
        var r, a, i, d, o, l;
        if ($t(t)) {
            r = rr(e.x, e.y, n, t);
            n = r[0];
            t = r[1];
        }
        a = e.button + 1;
        i = e.buttons;
        if (a === 0 && i) {
            a = 1;
            while (!(i & 1)) {
                i = i >> 1;
                a++;
            }
        }
        d = 0;
        if (_e == "mousewheel") {
            o = -1 / 40 * e.wheelDelta;
            e.wheelDeltaX && (d = -1 / 40 * e.wheelDeltaX);
        } else {
            d = e.deltaX;
            o = e.deltaY;
        }
        l = {
            dx: d,
            dy: o,
            x: e.clientX,
            y: e.clientY,
            button: a,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            count: e.detail
        };
        if (Wt("onMouseWheel", l) || Dt(t, "onMouseWheel", l)) {
            At(e);
            return !0;
        }
        return !1;
    }
    nr(_e, Cr);
    De = function(e, n) {
        var t = Dn() ? oe : de;
        ve.push([ e, n, x() + t, 1 ]);
    };
    Pe = e;
    Fe = e;
    Ae = [];
    function Sr(n) {
        var t, r, a, i, d, o;
        t = document.hasFocus() || n ? document.activeElement : e;
        if (t !== Pe) {
            Pe = t;
            r = qn(Pe);
            a = 0;
            while (a < Ae.length && a < r.length && Ae[a] === r[a]) a++;
            i = Ae.length - 1;
            if (i >= a) {
                d = Ae[i];
                if (d) {
                    o = d.component;
                    if (o && o.onBlur) o.onBlur(d.ctx);
                }
                i--;
            }
            while (i >= a) {
                d = Ae[i];
                if (d) {
                    o = d.component;
                    if (o && o.onFocusOut) o.onFocusOut(d.ctx);
                }
                i--;
            }
            i = a;
            while (i + 1 < r.length) {
                d = r[i];
                if (d) {
                    o = d.component;
                    if (o && o.onFocusIn) o.onFocusIn(d.ctx);
                }
                i++;
            }
            if (i < r.length) {
                d = r[i];
                if (d) {
                    o = d.component;
                    if (o && o.onFocus) o.onFocus(d.ctx);
                }
                i++;
            }
            Ae = r;
            Fe = Ae.length == 0 ? e : bn(Ae[Ae.length - 1]);
        }
        return !1;
    }
    function kr() {
        setTimeout(function() {
            return Sr(!1);
        }, 10);
        return !1;
    }
    ct("^focus", 50, function() {
        return Sr(!0);
    });
    ct("^blur", 50, kr);
    function Ir() {
        return Fe;
    }
    je = [];
    function Nr(e, n, t) {
        var r, a;
        r = {
            node: t
        };
        for (a = 0; a < je.length; a++) {
            je[a](r);
        }
        return !1;
    }
    ct("^scroll", 10, Nr);
    (function() {
        function e(e) {
            this.data = e;
        }
        e.fromString = function(n) {
            var t = n.match(/matrix3?d?\(([^\)]+)\)/i)[1].split(",");
            if (t.length === 6) {
                t = [ t[0], t[1], "0", "0", t[2], t[3], "0", "0", "0", "0", "1", "0", t[4], t[5], "0", "1" ];
            }
            return new e([ parseFloat(t[0]), parseFloat(t[4]), parseFloat(t[8]), parseFloat(t[12]), parseFloat(t[1]), parseFloat(t[5]), parseFloat(t[9]), parseFloat(t[13]), parseFloat(t[2]), parseFloat(t[6]), parseFloat(t[10]), parseFloat(t[14]), parseFloat(t[3]), parseFloat(t[7]), parseFloat(t[11]), parseFloat(t[15]) ]);
        };
        e.identity = function() {
            return new e([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
        };
        e.prototype.multiply = function(n) {
            var t = this.data, r;
            r = n.data;
            return new e([ t[0] * r[0] + t[1] * r[4] + t[2] * r[8] + t[3] * r[12], t[0] * r[1] + t[1] * r[5] + t[2] * r[9] + t[3] * r[13], t[0] * r[2] + t[1] * r[6] + t[2] * r[10] + t[3] * r[14], t[0] * r[3] + t[1] * r[7] + t[2] * r[11] + t[3] * r[15], t[4] * r[0] + t[5] * r[4] + t[6] * r[8] + t[7] * r[12], t[4] * r[1] + t[5] * r[5] + t[6] * r[9] + t[7] * r[13], t[4] * r[2] + t[5] * r[6] + t[6] * r[10] + t[7] * r[14], t[4] * r[3] + t[5] * r[7] + t[6] * r[11] + t[7] * r[15], t[8] * r[0] + t[9] * r[4] + t[10] * r[8] + t[11] * r[12], t[8] * r[1] + t[9] * r[5] + t[10] * r[9] + t[11] * r[13], t[8] * r[2] + t[9] * r[6] + t[10] * r[10] + t[11] * r[14], t[8] * r[3] + t[9] * r[7] + t[10] * r[11] + t[11] * r[15], t[12] * r[0] + t[13] * r[4] + t[14] * r[8] + t[15] * r[12], t[12] * r[1] + t[13] * r[5] + t[14] * r[9] + t[15] * r[13], t[12] * r[2] + t[13] * r[6] + t[14] * r[10] + t[15] * r[14], t[12] * r[3] + t[13] * r[7] + t[14] * r[11] + t[15] * r[15] ]);
        };
        e.prototype.translate = function(n, t, r) {
            var a = new e([ 1, 0, 0, n, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1 ]);
            return this.multiply(a);
        };
        e.prototype.inverse = function() {
            var n = this.data, t = n[0], r = n[1], a = n[2], i = n[4], d = n[5], o = n[6], l = n[8], c = n[9], s = n[10], u = d * s - o * c, f = o * l - i * s, h = i * c - d * l, p = a * c - r * s, m = t * s - a * l, v = r * l - t * c, g = r * o - a * d, b = a * i - t * o, y = t * d - r * i, x = t * u + r * f + a * h, w, C;
            w = new e([ u / x, p / x, g / x, 0, f / x, m / x, b / x, 0, h / x, v / x, y / x, 0, 0, 0, 0, 1 ]);
            C = new e([ 1, 0, 0, -n[3], 0, 1, 0, -n[7], 0, 0, 1, -n[11], 0, 0, 0, 1 ]);
            return w.multiply(C);
        };
        e.prototype.transformPoint = function(e, n) {
            var t = this.data;
            return [ t[0] * e + t[1] * n + t[3], t[4] * e + t[5] * n + t[7] ];
        };
        return e;
    })();
    Be = 0;
    Oe = [];
    Me = null;
    Re = null;
    Te = {
        userSelect: ""
    };
    Pn(Te);
    Ve = Object.keys(Te);
    Ke = Ve[Ve.length - 1];
    Le = function(n) {
        this.id = ++Be;
        this.pointerid = n;
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
        this.data = kn();
        if (n >= 0) Ye[n] = this;
        Oe.push(this);
    };
    function Er() {
        var e;
        if (Re == null) {
            e = document.body.style;
            hn = e.cursor;
            pn = e[Ke];
            e[Ke] = "none";
            Re = Ct(Dr);
        }
    }
    Ue = {
        render: function(e, n) {
            var t = e.data;
            n.tag = "div";
            n.style = {
                position: "absolute",
                left: t.x,
                top: t.y
            };
            n.children = t.dragView(t);
        }
    };
    function _r() {
        var e = "no-drop", n;
        if (Oe.length !== 0) {
            n = Oe[0];
            if (n.beforeDrag) return "";
            if (n.cursor != null) return n.cursor;
            if (n.system) return "";
            switch (n.operation) {
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
    He = {
        render: function(e, n) {
            var t = [], r, a, i, d;
            for (r = 0; r < Oe.length; r++) {
                a = Oe[r];
                if (a.beforeDrag) continue;
                if (a.dragView != null && (a.x != 0 || a.y != 0)) {
                    t.push({
                        key: "" + a.id,
                        data: a,
                        component: Ue
                    });
                }
            }
            n.tag = "div";
            n.style = {
                position: "fixed",
                pointerEvents: "none",
                userSelect: "none",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            i = document.body.style;
            d = _r();
            if (d && i.cursor !== d) i.cursor = d;
            n.children = t;
        },
        onDrag: function(e) {
            U(e);
            return !1;
        }
    };
    function Dr() {
        return {
            component: He
        };
    }
    Xe = Le.prototype;
    Xe.setOperation = function(e) {
        this.operation = e;
    };
    Xe.setDragNodeView = function(e) {
        this.dragView = e;
    };
    Xe.addData = function(e, n) {
        this.data[e] = n;
        return !0;
    };
    Xe.listData = function() {
        return Object.keys(this.data);
    };
    Xe.hasData = function(n) {
        return this.data[n] !== e;
    };
    Xe.getData = function(e) {
        return this.data[e];
    };
    Xe.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    Xe.cancelDnd = function() {
        Fr(e, this);
        this.destroy();
    };
    Xe.destroy = function() {
        var e, n;
        this.ended = !0;
        if (this.started) Ft("onDragEnd", this);
        delete Ye[this.pointerid];
        for (e = 0; e < Oe.length; e++) {
            if (Oe[e] === this) {
                Oe.splice(e, 1);
                break;
            }
        }
        if (Me === this) {
            Me = null;
        }
        if (Oe.length === 0 && Re != null) {
            St(Re);
            Re = null;
            n = document.body.style;
            n.cursor = hn;
            n[Ke] = pn;
        }
    };
    Ye = kn();
    function Pr(e, n, t) {
        var r, a, i, d, o;
        r = Ye[e.id];
        if (r) {
            r.cancelDnd();
        }
        if (e.button <= 1) {
            r = new Le(e.id);
            r.startX = e.x;
            r.startY = e.y;
            r.lastX = e.x;
            r.lastY = e.y;
            r.overNode = t;
            Ar(r, e);
            a = Dt(t, "onDragStart", r);
            if (a) {
                i = Qn(a.me);
                if (i == null) {
                    r.destroy();
                    return !1;
                }
                r.started = !0;
                d = i.getBoundingClientRect;
                if (d) {
                    o = d.call(i);
                    r.deltaX = o.left - e.x;
                    r.deltaY = o.top - e.y;
                }
                if (r.distanceToStart <= 0) {
                    r.beforeDrag = !1;
                    Fr(t, r);
                }
                Er();
            } else {
                r.destroy();
            }
        }
        return !1;
    }
    function Fr(e, n) {
        n.overNode = e;
        n.targetCtx = Dt(e, "onDragOver", n);
        if (n.targetCtx == null) {
            n.operation = 0;
        }
        Ft("onDrag", n);
    }
    function Ar(e, n) {
        e.shift = n.shift;
        e.ctrl = n.ctrl;
        e.alt = n.alt;
        e.meta = n.meta;
        e.x = n.x;
        e.y = n.y;
    }
    function jr(e, n, t) {
        var r = Ye[e.id];
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
        Ar(r, e);
        Fr(t, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function Br(e, n, t) {
        var r, a;
        r = Ye[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            Ar(r, e);
            Fr(t, r);
            a = r.targetCtx;
            if (a && Dt(a.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            De(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function Or(e, n, t) {
        var r = Ye[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function Mr(e, n) {
        var t;
        e.shift = n.shiftKey;
        e.ctrl = n.ctrlKey;
        e.alt = n.altKey;
        e.meta = n.metaKey;
        e.x = n.clientX;
        e.y = n.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        t = xr(e.x, e.y);
        Fr(t, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    ze = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function Rr(e, n, t) {
        var r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        r = Me;
        if (r != null) {
            r.destroy();
        }
        a = Object.keys(Ye);
        if (a.length > 0) {
            r = Ye[a[0]];
            r.system = !0;
            Me = r;
        } else {
            i = e.clientX;
            d = e.clientY;
            r = new Le(-1);
            r.system = !0;
            Me = r;
            r.x = i;
            r.y = d;
            r.lastX = i;
            r.lastY = d;
            r.startX = i;
            r.startY = d;
            o = Dt(t, "onDragStart", r);
            if (o) {
                l = Qn(o.me);
                if (l == null) {
                    r.destroy();
                    return !1;
                }
                r.started = !0;
                c = l.getBoundingClientRect;
                if (c) {
                    s = c.call(l);
                    r.deltaX = s.left - i;
                    r.deltaY = s.top - d;
                }
                Er();
            } else {
                r.destroy();
                return !1;
            }
        }
        r.beforeDrag = !1;
        u = ze[r.enabledOperations];
        f = e.dataTransfer;
        f.effectAllowed = u;
        if (f.setDragImage) {
            h = document.createElement("div");
            h.style.pointerEvents = "none";
            f.setDragImage(h, 0, 0);
        } else {
            p = e.target.style;
            m = p.opacity;
            v = p.width;
            g = p.height;
            b = p.padding;
            p.opacity = "0";
            p.width = "0";
            p.height = "0";
            p.padding = "0";
            window.setTimeout(function() {
                p.opacity = m;
                p.width = v;
                p.height = g;
                p.padding = b;
            }, 0);
        }
        y = r.data;
        x = Object.keys(y);
        for (w = 0; w < x.length; w++) {
            try {
                C = x[w];
                S = y[C];
                if (!xn(S)) S = JSON.stringify(S);
                e.dataTransfer.setData(C, S);
            } catch (e) {}
        }
        Mr(r, e);
        return !1;
    }
    function Tr(e, n) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][n];
    }
    function Vr(n, t, r) {
        var a, i, d, o, l, c, s;
        a = Me;
        if (a == null) {
            a = new Le(-1);
            a.system = !0;
            Me = a;
            a.x = n.clientX;
            a.y = n.clientY;
            a.startX = a.x;
            a.startY = a.y;
            a.local = !1;
            i = n.dataTransfer;
            d = 0;
            o = e;
            try {
                o = i.effectAllowed;
            } catch (e) {}
            for (;d < 7; d++) {
                if (ze[d] === o) break;
            }
            a.enabledOperations = d;
            l = i.types;
            if (l) {
                for (c = 0; c < l.length; c++) {
                    s = l[c];
                    if (s === "text/plain") s = "Text"; else if (s === "text/uri-list") s = "Url";
                    a.data[s] = null;
                }
            } else {
                if (i.getData("Text") !== e) a.data["Text"] = null;
            }
        }
        Mr(a, n);
        Tr(n, a.operation);
        if (a.operation != 0) {
            At(n);
            return !0;
        }
        return !1;
    }
    function Kr(e, n, t) {
        var r, a, i;
        r = e.clientX;
        a = e.clientY;
        i = Rt();
        if (Me != null && (r === 0 && a === 0 || r < 0 || a < 0 || r >= i.width || a >= i.height)) {
            Me.x = 0;
            Me.y = 0;
            Me.operation = 0;
            Ft("onDrag", Me);
        }
        return !1;
    }
    function Lr(e, n, t) {
        if (Me != null) {
            Me.destroy();
        }
        return !1;
    }
    function Ur(e, n, t) {
        var r, a, i, d, o, l, c;
        r = Me;
        if (r == null) return !1;
        r.x = e.clientX;
        r.y = e.clientY;
        if (!r.local) {
            a = Object.keys(r.data);
            i = e.dataTransfer;
            for (d = 0; d < a.length; d++) {
                o = a[d];
                if (o === "Files") {
                    l = [].slice.call(i.files, 0);
                } else {
                    l = i.getData(o);
                }
                r.data[o] = l;
            }
        }
        Mr(r, e);
        c = r.targetCtx;
        if (c && Dt(c.me, "onDrop", r)) {
            Tr(e, r.operation);
            r.destroy();
            At(e);
        } else {
            r.cancelDnd();
        }
        return !0;
    }
    function Hr(e, n, t) {
        At(e);
        return !0;
    }
    function Xr(e, n, t) {
        if (Oe.length === 0) return !1;
        At(e);
        return !0;
    }
    ct("!PointerDown", 4, Pr);
    ct("!PointerMove", 4, jr);
    ct("!PointerUp", 4, Br);
    ct("!PointerCancel", 4, Or);
    ct("selectstart", 4, Xr);
    ct("dragstart", 5, Rr);
    ct("dragover", 5, Vr);
    ct("dragend", 5, Lr);
    ct("drag", 5, Kr);
    ct("drop", 5, Ur);
    ct("dragenter", 5, Hr);
    ct("dragleave", 5, Hr);
    Ge = function() {
        return Oe;
    };
    qe = -1;
    function Yr() {
        if (qe >= 0) clearTimeout(qe);
        qe = -1;
        U();
        return !1;
    }
    ct("hashchange", 10, Yr);
    [];
    kn();
    [];
    [];
    We = kn();
    kn();
    kn();
    $e = [];
    Ze = kn();
    Je = "";
    Qe = !1;
    en = null;
    nn = Dn() === 9;
    tn = pt(Wr);
    rn = /\:|\ |\>/;
    function zr(e) {
        var n, t;
        n = rn.exec(e);
        if (!n) return We[e].name;
        t = n.index;
        return We[e.substring(0, t)].name + e.substring(t);
    }
    function Gr(e, t) {
        var r = "", a;
        if (e) {
            if (n(e)) {
                for (a = 0; a < e.length; a++) {
                    if (a > 0) {
                        r += ",";
                    }
                    r += "." + zr(e[a]) + "." + t;
                }
            } else {
                r = "." + zr(e) + "." + t;
            }
        } else {
            r = "." + t;
        }
        return r;
    }
    function qr(t, r, a, i) {
        var d, o, l, c, s, u;
        if (xn(a)) {
            d = We[a];
            if (d === e) {
                throw new Error("Unknown style " + a);
            }
            qr(t, r, d.style, d.pseudo);
        } else if (wn(a)) {
            a(t, r);
        } else if (n(a)) {
            for (o = 0; o < a.length; o++) {
                qr(t, r, a[o], e);
            }
        } else if (typeof a === "object") {
            for (s in a) {
                if (!Object.prototype.hasOwnProperty.call(a, s)) continue;
                l = a[s];
                if (wn(l)) {
                    l = l(t, s);
                }
                t[s] = l;
            }
        }
        if (i != null && r != null) {
            for (u in i) {
                c = r[u];
                if (c === e) {
                    c = kn();
                    r[u] = c;
                }
                qr(c, e, i[u], e);
            }
        }
    }
    an = !1;
    function Wr() {
        var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        n = document.body.style;
        if (an && _ >= 150) {
            n.opacity = "1";
            an = !1;
        }
        if (Qe) {
            if (D === 1 && "webkitAnimation" in n) {
                an = !0;
                n.opacity = "0";
                setTimeout(U, 200);
            }
            for (t = 0; t < $e.length; t++) {
                r = $e[t];
                a = Ze[r.url];
                if (a == null) continue;
                i = r.color();
                if (i !== r.lastColor) {
                    r.lastColor = i;
                    if (r.width == null) r.width = a.width;
                    if (r.height == null) r.height = a.height;
                    d = Qr(a, i, r.width, r.height, r.left, r.top);
                    o = We[r.styleId];
                    o.style = {
                        backgroundImage: "url(" + d + ")",
                        width: r.width,
                        height: r.height,
                        backgroundPosition: 0
                    };
                }
            }
            l = Je;
            for (C in We) {
                c = We[C];
                s = c.parent;
                u = c.name;
                f = c.pseudo;
                h = c.style;
                if (wn(h) && h.length === 0) {
                    p = h(), h = p[0], f = p[1];
                }
                if (xn(h) && f == null) {
                    c.realName = h;
                    mn(u != null, "Cannot link existing class to selector");
                    continue;
                }
                c.realName = u;
                m = kn();
                v = kn();
                qr(e, v, e, f);
                qr(m, v, h, e);
                g = null;
                if (m["pointerEvents"]) {
                    g = kn();
                    g["pointerEvents"] = m["pointerEvents"];
                }
                if (nn) {
                    if (m["userSelect"]) {
                        if (g == null) g = kn();
                        g["userSelect"] = m["userSelect"];
                        delete m["userSelect"];
                    }
                }
                c.inlStyle = g;
                Pn(m);
                b = Zr(m);
                if (b.length > 0) l += (u == null ? s : Gr(s, u)) + " {" + b + "}\n";
                for (S in v) {
                    y = v[S];
                    Pn(y);
                    l += (u == null ? s + ":" + S : Gr(s, u + ":" + S)) + " {" + Zr(y) + "}\n";
                }
            }
            x = document.createElement("style");
            x.type = "text/css";
            if (x.styleSheet) {
                x.styleSheet.cssText = l;
            } else {
                x.appendChild(document.createTextNode(l));
            }
            w = document.head || document.getElementsByTagName("head")[0];
            if (en != null) {
                w.replaceChild(x, en);
            } else {
                w.appendChild(x);
            }
            en = x;
            Qe = !1;
        }
        tn();
    }
    dn = /([A-Z])/g;
    on = /^ms-/;
    function $r(e) {
        if (e === "cssFloat") return "float";
        return e.replace(dn, "-$1").toLowerCase().replace(on, "-ms-");
    }
    function Zr(n) {
        var t = "", r, a;
        for (a in n) {
            r = n[a];
            if (r === e) continue;
            t += $r(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        t = t.slice(0, -1);
        return t;
    }
    function Jr() {
        Qe = !0;
        U();
    }
    ln = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Qr(e, n, t, r, a, i) {
        var d, o, l, c, s, u, f, h, p, m, v, g;
        d = document.createElement("canvas");
        d.width = t;
        d.height = r;
        o = d.getContext("2d");
        o.drawImage(e, -a, -i);
        l = o.getImageData(0, 0, t, r);
        c = l.data;
        s = ln.exec(n);
        if (s) {
            u = parseInt(s[1], 10);
            f = parseInt(s[2], 10);
            h = parseInt(s[3], 10);
            p = Math.round(parseFloat(s[4]) * 255);
        } else {
            u = parseInt(n.substr(1, 2), 16);
            f = parseInt(n.substr(3, 2), 16);
            h = parseInt(n.substr(5, 2), 16);
            p = parseInt(n.substr(7, 2), 16) || 255;
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
                g = c[m + 3];
                if (v === c[m + 1] && v === c[m + 2] && (v === 128 || g < 255 && v > 112)) {
                    if (g === 255) {
                        c[m] = u;
                        c[m + 1] = f;
                        c[m + 2] = h;
                        c[m + 3] = p;
                    } else {
                        g = g * (1 / 255);
                        c[m] = Math.round(u * g);
                        c[m + 1] = Math.round(f * g);
                        c[m + 2] = Math.round(h * g);
                        c[m + 3] = Math.round(p * g);
                    }
                }
            }
        }
        o.putImageData(l, 0, 0);
        return d.toDataURL();
    }
    window["bobrilBPath"] || "bundle.png";
    function ea(n) {
        return function(t, r) {
            if (r !== e) {
                if (t == null) t = {};
                t.children = r;
            }
            return {
                data: t,
                component: n
            };
        };
    }
    if (!window.b) window.b = {
        deref: Wn,
        getRoots: kt,
        setInvalidate: wt,
        invalidateStyles: Jr,
        ignoreShouldChange: xt,
        setAfterFrame: mt,
        setBeforeFrame: pt,
        getDnds: Ge,
        setBeforeInit: _t
    };
    Et(function() {
        return "hello";
    });
})();

