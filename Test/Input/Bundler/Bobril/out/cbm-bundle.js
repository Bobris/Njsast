(function(e) {
    "use strict";
    var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, _, E, D, P, F, A, j, B, O, M, R, T, V, K, L, U, H, X, Y, z, G, q, W, $, Z, J, Q, ee, ne, te, re, ae, ie, de, oe, le, ce, se, ue, fe, he, pe, me, ve, ge, be, ye, xe, we, Ce, Se, ke, Ie, Ne, _e, Ee, De, Pe, Fe, Ae, je, Be, Oe, Me, Re, Te, Ve, Ke, Le, Ue, He, Xe, Ye, ze, Ge, qe, We, $e, Ze, Je, Qe, en, nn, tn, rn, an, dn, on, ln, cn, sn, un, fn, hn;
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
    n = Array.isArray;
    t = {};
    function pn(e) {
        return document.createTextNode(e);
    }
    function mn(e) {
        return document.createElement(e);
    }
    function vn(n) {
        return n === null ? e : n;
    }
    function gn(e) {
        return typeof e == "number";
    }
    function bn(e) {
        return typeof e == "string";
    }
    function yn(e) {
        return typeof e == "function";
    }
    function xn(e) {
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
        if (t !== r) e[ee] = t;
    };
    function wn(e) {
        var n = l;
        l = e;
        return n;
    }
    function Cn() {
        return Object.create(null);
    }
    c = [ "Webkit", "Moz", "ms", "O" ];
    s = document.createElement("div").style;
    function Sn(e) {
        return bn(s[e]);
    }
    u = Cn();
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
    function kn(n) {
        return function(t, r, a) {
            t[n] = r;
            t[a] = e;
        };
    }
    function In(n) {
        return function(t, r, a) {
            if (gn(r)) {
                t[n] = r + "px";
            } else {
                t[n] = r;
            }
            t[a] = e;
        };
    }
    function Nn(e, n, t) {
        if (gn(n)) e[t] = n + "px";
    }
    function _n() {
        return document.documentMode;
    }
    function En(n) {
        var t, r, a, i, d, o, l, s;
        t = Object.keys(n);
        for (r = 0, a = t.length; r < a; r++) {
            i = t[r];
            d = u[i];
            o = n[i];
            if (o === e) continue;
            if (d === e) {
                if (Sn(i)) {
                    d = f[i] === !0 ? null : Nn;
                } else {
                    l = i.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (s = 0; s < c.length; s++) {
                        if (Sn(c[s] + l)) {
                            d = (f[i] === !0 ? kn : In)(c[s] + l);
                            break;
                        }
                    }
                    if (d === e) {
                        d = f[i] === !0 ? null : Nn;
                    }
                }
                u[i] = d;
            }
            if (d !== null) d(n, o, i);
        }
    }
    function Dn(e, n) {
        e[n] = "";
    }
    function Pn(e, n, t) {
        var r;
        if (bn(t)) {
            r = t.length;
            if (r > 11 && t.substr(r - 11, 11) === " !important") {
                e.setProperty(n, t.substr(0, r - 11), "important");
                return;
            }
        }
        e[n] = t;
    }
    function Fn(n, t, r) {
        var a, i, d;
        a = n.style;
        if (xn(t)) {
            En(t);
            if (xn(r)) {
                for (i in r) {
                    if (!(i in t)) Dn(a, i);
                }
                for (i in t) {
                    d = t[i];
                    if (d !== e) {
                        if (r[i] !== d) Pn(a, i, d);
                    } else {
                        Dn(a, i);
                    }
                }
            } else {
                if (r) a.cssText = "";
                for (i in t) {
                    d = t[i];
                    if (d !== e) Pn(a, i, d);
                }
            }
        } else if (t) {
            a.cssText = t;
        } else {
            if (xn(r)) {
                for (i in r) {
                    Dn(a, i);
                }
            } else if (r) {
                a.cssText = "";
            }
        }
    }
    function An(e, n) {
        if (a) e.setAttribute("class", n); else e.className = n;
    }
    h = /^input$|^select$|^textarea$|^button$/;
    p = "tabindex";
    function jn(n, t, r, i, d) {
        var o = !1, c, s, u, f, m;
        if (r != null) for (c in r) {
            s = r[c];
            u = i[c];
            if (d && c === p) {
                s = -1;
                o = !0;
            } else if (c === ee && !a) {
                if (yn(s)) {
                    i[Z] = s;
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
                    if (c === Z) continue;
                    i[c] = e;
                    t.removeAttribute(c);
                }
            }
        } else {
            for (c in i) {
                if (i[c] !== e && !(c in r)) {
                    if (d && c === p) continue;
                    if (c === Z) continue;
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
    function Bn(e) {
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
    function On(e) {
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
    function Mn(e) {
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
    function Rn(n) {
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
    function Tn(e, n) {
        var t, r;
        if (e == null) return;
        if (yn(e)) {
            e(n);
            return;
        }
        t = e[0];
        r = t.refs;
        if (r == null) {
            r = Cn();
            t.refs = r;
        }
        r[e[1]] = n;
    }
    m = [];
    v = null;
    function Vn(n, t, r, d) {
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
        Tn(o.ref, o);
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
            u.cfg = n.cfg === e ? Rn(t) : n.cfg;
            o.ctx = u;
            ln = u;
            if (s.init) {
                s.init(u, o);
            }
            if (j !== A) j(n, 0);
            if (s.render) {
                s.render(u, o);
            }
            ln = e;
        } else {}
        f = o.tag;
        if (f === "-") {
            o.tag = e;
            o.children = e;
            return o;
        }
        h = o.children;
        p = !1;
        if (gn(h)) {
            h = "" + h;
            o.children = h;
        }
        if (f === e) {
            if (bn(h)) {
                m = pn(h);
                o.element = m;
                r.insertBefore(m, d);
            } else {
                Ln(o, r, d);
            }
            if (s) {
                if (s.postRender) {
                    s.postRender(o.ctx, o);
                }
                Bn(o);
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
                    m = w.insertBefore(mn("i"), m);
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
                Bn(o);
            }
            return o;
        }
        if (a || f === "svg") {
            m = document.createElementNS("http://www.w3.org/2000/svg", f);
            p = f === "foreignObject";
            a = !p;
        } else {
            m = mn(f);
        }
        r.insertBefore(m, d);
        o.element = m;
        Ln(o, m, null);
        if (s) {
            if (s.postRender) {
                s.postRender(o.ctx, o);
            }
        }
        if (i && v === o) i = !1;
        if (p) a = !0;
        if (o.attrs || i) o.attrs = jn(o, m, o.attrs, {}, i);
        if (o.style) Fn(m, o.style, e);
        S = o.className;
        if (S) An(m, S);
        a = l;
        i = c;
        Bn(o);
        return o;
    }
    function Kn(n) {
        if (n === !1 || n === !0 || n === null) return e;
        if (bn(n)) {
            return {
                children: n
            };
        }
        if (gn(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function Ln(e, t, r) {
        var a, i, d, o;
        a = e.children;
        if (!a) return;
        if (!n(a)) {
            if (bn(a)) {
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
            o = Kn(o);
            if (o == null) {
                a.splice(i, 1);
                d--;
                continue;
            }
            a[i] = Vn(o, e, t, r);
            i++;
        }
        e.children = a;
    }
    function Un(e) {
        var t, r, a, i, d, o, l, c;
        Tn(e.ref, null);
        t = e.children;
        if (n(t)) {
            for (r = 0, a = t.length; r < a; r++) {
                Un(t[r]);
            }
        }
        i = e.component;
        if (i) {
            d = e.ctx;
            ln = d;
            if (j !== A) j(e, 3);
            if (i.destroy) i.destroy(d, e, e.element);
            o = d.disposables;
            if (n(o)) {
                for (l = o.length; l-- > 0; ) {
                    c = o[l];
                    if (yn(c)) c(d); else c.dispose();
                }
            }
        }
    }
    function Hn(e) {
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
                    Hn(d[o]);
                }
            }
        }
    }
    function Xn(e) {
        Un(e);
        Hn(e);
    }
    g = Cn();
    function Yn(t, r, a, i) {
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
                    s = Yn(o[c], r, a, i);
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
    function zn(n) {
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
                s = Yn(c, l, t.length, t);
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
                s = Yn(h, l, t.length, t);
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
    function Gn(e) {
        var n, t;
        n = zn(e);
        t = null;
        while (t === null) {
            t = n.pop();
        }
        return t;
    }
    function qn(n, t, r) {
        if (r) {
            if (r.postRender) {
                ln = t.ctx;
                r.postRender(ln, n, t);
                ln = e;
            }
        }
        t.data = n.data;
        On(t);
    }
    function Wn(t, r, d) {
        var o, l;
        ln = e;
        if (n(t.children)) {
            o = a;
            l = i;
            if (t.tag === "svg") {
                a = !0;
            } else if (a && t.tag === "foreignObject") a = !1;
            if (i && v === t) i = !1;
            ut(t.children, t.element || r, t.element != null ? null : d);
            a = o;
            i = l;
        }
        Mn(t);
    }
    function $n(d, o, l, c, s, u) {
        var f, h = !1, p, m, g, b, y, x, w, C, I, N, _, E;
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
                ln = p;
                if (d.cfg !== e) p.cfg = d.cfg; else p.cfg = Rn(o.parent);
                if (f.shouldChange) if (!f.shouldChange(p, d, o) && !K && !m) {
                    Wn(o, l, c);
                    return o;
                }
                p.data = d.data || {};
                o.component = f;
                if (j !== A) j(d, u ? 2 : 1);
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
                ln = e;
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
            Wn(o, l, c);
            return o;
        }
        x = a;
        w = i;
        if (gn(g)) {
            g = "" + g;
        }
        if (h || f != null && p == null || f == null && p != null && p.me.component !== t) {} else if (y === "/") {
            if (o.tag === "/" && b === g) {
                qn(d, o, f);
                return o;
            }
        } else if (y === o.tag) {
            if (y === e) {
                if (bn(g) && bn(b)) {
                    if (g !== b) {
                        C = o.element;
                        C.textContent = g;
                        o.children = g;
                    }
                } else {
                    if (i && v === o) i = !1;
                    if (s <= 0) {
                        if (n(b)) ut(o.children, l, c);
                    } else {
                        o.children = at(l, g, b, o, c, s - 1);
                    }
                    a = x;
                    i = w;
                }
                qn(d, o, f);
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
                if (bn(g) && !n(b)) {
                    if (g !== b) {
                        C.textContent = g;
                        b = g;
                    }
                } else {
                    if (s <= 0) {
                        if (n(b)) ut(o.children, C, c);
                    } else {
                        b = at(C, g, b, o, null, s - 1);
                    }
                }
                o.children = b;
                if (I) a = !0;
                qn(d, o, f);
                if (o.attrs || d.attrs || i) o.attrs = jn(o, C, d.attrs, o.attrs || {}, i);
                Fn(C, d.style, o.style);
                o.style = d.style;
                N = d.className;
                if (N !== o.className) {
                    An(C, N || "");
                    o.className = N;
                }
                a = x;
                i = w;
                return o;
            }
        }
        _ = o.element;
        if (n(_)) _ = _[0];
        if (_ == null) _ = l; else _ = _.parentNode;
        E = Vn(d, o.parent, _, Zn(o));
        Xn(o);
        return E;
    }
    function Zn(t) {
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
            r = Zn(a[i]);
            if (r) return r;
        }
        return null;
    }
    function Jn(e, n, t, r) {
        var a, i;
        while (++n < t) {
            a = e[n];
            if (a == null) continue;
            i = Zn(a);
            if (i != null) return i;
        }
        return r;
    }
    function Qn() {
        var n, t, r;
        n = o.length;
        for (t = 0; t < n; t++) {
            r = o[t];
            ln = r.ctx;
            d[t].call(r.component, ln, r, r.element);
        }
        ln = e;
        d = [];
        o = [];
    }
    function et(e, n, t, r, a, i, d) {
        n[t] = $n(e, n[t], i, Jn(n, t, r, a), d);
    }
    function nt(e, t, r) {
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
            nt(d[i], t, r);
        }
    }
    function tt(e, n, t, r, a) {
        var i, d, o;
        i = Jn(e, n, t, r);
        d = e[n];
        o = Zn(d);
        if (o != null && o !== i) {
            nt(d, a, i);
        }
    }
    function rt(e, n, t, r, a, i, d) {
        var o, l, c;
        o = Jn(n, t, r, a);
        l = n[t];
        c = Zn(l);
        if (c != null && c !== o) {
            nt(l, i, o);
        }
        n[t] = $n(e, l, i, o, d);
    }
    function at(e, t, r, a, i, d) {
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
            s = Kn(s);
            if (s == null) {
                o.splice(c, 1);
                l--;
                continue;
            }
            o[c] = s;
            c++;
        }
        return it(e, o, r, a, i, d);
    }
    function it(n, t, r, a, i, d) {
        var o, l, c, s = 0, u = 0, f, h, p, m, v, g, b, y, x, w, C;
        o = t.length;
        l = r.length;
        c = l;
        while (s < o && u < c) {
            if (t[s].key === r[u].key) {
                et(t[s], r, u, l, i, n, d);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (t[o - 1].key === r[c - 1].key) {
                    o--;
                    c--;
                    et(t[o], r, c, l, i, n, d);
                    if (s < o && u < c) continue;
                }
                break;
            }
            if (s < o && u < c) {
                if (t[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    rt(t[s], r, u, l, i, n, d);
                    s++;
                    u++;
                    continue;
                }
                if (t[o - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    o--;
                    rt(t[o], r, c, l, i, n, d);
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
                r.splice(u, 0, Vn(t[s], a, n, Jn(r, u - 1, l, i)));
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
                Xn(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = Cn();
        h = Cn();
        p = s;
        m = u;
        v = 0;
        for (;u < c; u++) {
            g = r[u];
            b = g.key;
            if (b != null) {
                f[b] = u;
            } else v--;
        }
        y = -v - v;
        for (;s < o; s++) {
            g = t[s];
            b = g.key;
            if (b != null) {
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
                r.splice(u, 0, Vn(t[s], a, n, Jn(r, u - 1, l, i)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(w in h)) {
                Xn(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                et(t[s], r, u, l, i, n, d);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                rt(t[s], r, u, l, i, n, d);
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
                Xn(r[u]);
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
                r.splice(u, 0, Vn(t[s], a, n, Jn(r, u - 1, l, i)));
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
                et(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u = s;
                continue;
            }
            if (b != null) {
                if (y === 0 && v < 0) {
                    while (!0) {
                        Xn(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        v++;
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == null) u++;
                r[u].key;
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                tt(r, s, l, i, n);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                rt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, Vn(t[s], a, n, Jn(r, s - 1, l, i)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            Xn(r[c]);
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
    function dt(e) {
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
    _ = !0;
    E = 0;
    D = 0;
    P = {};
    function ot(e, n, t) {
        var r;
        if (cn == null) cn = {};
        r = cn[e] || [];
        r.push({
            priority: n,
            callback: t
        });
        cn[e] = r;
    }
    function lt(e, n, t, r) {
        var a, i;
        a = P[e];
        if (a) for (i = 0; i < a.length; i++) {
            if (a[i](n, t, r)) return !0;
        }
        return !1;
    }
    F = 0;
    function ct(e, n) {
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
            a = Gn(r);
            F++;
            lt(n, t, r, a);
            F--;
            if (F == 0 && R) mt();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, a, t);
    }
    function st() {
        var n, t, r, a, i, d;
        if (cn === e) return;
        n = Object.keys(cn);
        for (t = 0; t < n.length; t++) {
            r = n[t];
            a = cn[r];
            a = a.sort(function(e, n) {
                return e.priority - n.priority;
            });
            P[r] = a.map(function(e) {
                return e.callback;
            });
        }
        cn = e;
        i = document.body;
        for (d = 0; d < n.length; d++) {
            ct(i, n[d]);
        }
    }
    function ut(e, t, r) {
        var d, o, l, c, s, u;
        d = e.length;
        for (o = 0; o < d; o++) {
            l = e[o];
            c = l.ctx;
            if (c != null && c[S] === D) {
                e[o] = $n(l.orig, l, t, r, c[k], !0);
            } else if (n(l.children)) {
                s = a;
                u = i;
                if (i && v === l) i = !1;
                if (l.tag === "svg") a = !0; else if (a && l.tag === "foreignObject") a = !1;
                ut(l.children, l.element || t, Jn(e, o, d, r));
                Mn(l);
                a = s;
                i = u;
            }
        }
    }
    A = function() {};
    j = A;
    B = function() {};
    O = function() {};
    M = function() {};
    function ft(e) {
        var n = B;
        B = e;
        return n;
    }
    function ht(e) {
        var n = M;
        M = e;
        return n;
    }
    function pt(e, n, t) {
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
    R = !1;
    function mt() {
        R = !1;
        gt(x() - w);
    }
    function vt(e) {
        N = !1;
        gt(e);
    }
    T = Jr({
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
    function gt(t) {
        var r, a, d, o, l, c, s, u, f;
        x();
        st();
        O();
        D++;
        K = V;
        V = !1;
        E = t;
        B();
        v = m.length === 0 ? null : m[m.length - 1];
        i = !1;
        r = !1;
        if (I) {
            I = !1;
            r = !0;
        }
        sn = Object.keys(g);
        for (a = 0; a < sn.length; a++) {
            d = g[sn[a]];
            if (!d) continue;
            o = d.n;
            l = null;
            for (c = a + 1; c < sn.length; c++) {
                s = g[sn[c]];
                if (s === e) continue;
                l = Zn(s.n);
                if (l != null) break;
            }
            if (v) i = !pt(v, d.p, sn);
            if (d.e === e) d.e = document.body;
            if (o) {
                if (r || o.ctx[S] === D) {
                    u = T(d);
                    $n(u, o, d.e, l, r ? 1000000 : o.ctx[k]);
                } else {
                    if (n(d.c)) ut(d.c, d.e, l);
                }
            } else {
                u = T(d);
                o = Vn(u, e, d.e, l);
                d.n = o;
            }
            d.c = o.children;
        }
        sn = e;
        Qn();
        f = g["0"];
        M(f ? f.c : null);
        x();
    }
    V = !1;
    K = !1;
    function bt() {
        V = !0;
        L();
    }
    function yt(e) {
        var n = L;
        L = e;
        return n;
    }
    L = function(n, t) {
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
        if (N || _) return;
        N = !0;
        dt(vt);
    };
    U = 0;
    function xt(n, t, r) {
        var a;
        U++;
        a = "" + U;
        g[a] = {
            f: n,
            e: t,
            c: [],
            p: r,
            n: e
        };
        if (sn != null) {
            sn.push(a);
        } else {
            kt();
        }
        return a;
    }
    function wt(e) {
        var n = g[e];
        if (!n) return;
        if (n.n) Xn(n.n);
        delete g[e];
    }
    function Ct() {
        return g;
    }
    function St() {
        _ = !1;
        L();
    }
    H = St;
    function kt() {
        _ = !0;
        H();
        H = St;
    }
    function It(n, t) {
        wt("0");
        g["0"] = {
            f: n,
            e: t,
            c: [],
            p: e,
            n: e
        };
        kt();
    }
    function Nt(e) {
        var n = H;
        H = function() {
            e(n);
        };
    }
    function _t(n, t, r) {
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
    function Et(t, r, a) {
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
                s = Et(l[c], r, a);
                if (s != null) return s;
            }
        }
        return e;
    }
    function Dt(n, t) {
        var r, a, i, d;
        r = Object.keys(g);
        for (a = 0; a < r.length; a++) {
            i = g[r[a]].n;
            if (i != null) {
                d = Et(i, n, t);
                if (d != null) return d;
            }
        }
        return e;
    }
    function Pt(e) {
        var n = e.preventDefault;
        if (n) n.call(e); else e.returnValue = !1;
    }
    function Ft(e) {
        var t, r;
        e = e.slice(0);
        for (t = 0; t < e.length; t++) {
            r = e[t];
            if (n(r)) {
                e[t] = Ft(r);
            } else if (xn(r)) {
                e[t] = At(r);
            }
        }
        return e;
    }
    function At(e) {
        var t, a;
        t = r({}, e);
        if (t.attrs) {
            t.attrs = r({}, t.attrs);
        }
        if (xn(t.style)) {
            t.style = r({}, t.style);
        }
        a = t.children;
        if (a) {
            if (n(a)) {
                t.children = Ft(a);
            } else if (xn(a)) {
                t.children = At(a);
            }
        }
        return t;
    }
    function jt(e, n) {
        u[e] = n;
    }
    X = null;
    Y = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function Bt() {
        X = null;
        L();
        return !1;
    }
    z = [ "resize", "orientationchange" ];
    for (G = 0; G < z.length; G++) ot(z[G], 10, Bt);
    q = window.document.documentElement;
    W = /Android/i.test(navigator.userAgent);
    function Ot() {
        var e, n, t, r, a, i;
        if (X == null) {
            e = q.clientWidth;
            n = q.clientHeight;
            t = window.orientation;
            r = n >= e;
            if (t == null) t = r ? 0 : 90;
            if (W) {
                a = Math.abs(t) % 180 === 90;
                if (un == null) {
                    un = a === r;
                } else {
                    r = a === un;
                }
            }
            i = 0;
            while (e > Y[+!r][i]) i++;
            X = {
                width: e,
                height: n,
                orientation: t,
                deviceCategory: i,
                portrait: r
            };
        }
        return X;
    }
    $ = function() {
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
                $(function() {
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
    if (_n() === 9) {
        (function() {
            var e = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
            function n(e, n) {
                var t;
                if (e.zoom == null) e.zoom = "1";
                t = e.filter;
                e.filter = t == null ? n : t + " " + n;
            }
            jt("background", function(t, r, a) {
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
                    jt("background", t);
                })();
            }
        })();
    }
    Z = "b$value";
    J = "b$selStart";
    Q = "b$selEnd";
    ee = "value";
    function Mt(e) {
        var n = e.type;
        return n === "checkbox" || n === "radio";
    }
    function Rt(e, n) {
        var t, r;
        t = e.length;
        if (t !== n.length) return !1;
        for (r = 0; r < t; r++) {
            if (e[r] !== n[r]) return !1;
        }
        return !0;
    }
    function Tt(e, n) {
        var t;
        for (t = 0; t < e.length; t++) {
            if (e[t] === n) return !0;
        }
        return !1;
    }
    function Vt(e) {
        var n = [], t;
        for (t = 0; t < e.length; t++) {
            if (e[t].selected) n.push(e[t].value);
        }
        return n;
    }
    ne = wn(function(n, r, a, i) {
        var d, o, l, c, s, u, f, h, p, m, v;
        d = n.tagName;
        o = d === "SELECT";
        l = d === "INPUT" || d === "TEXTAREA";
        if (!l && !o) {
            ne(n, r, a, i);
            return;
        }
        if (r.ctx === e) {
            r.ctx = {
                me: r
            };
            r.component = t;
        }
        if (i === e) {
            r.ctx[Z] = a;
        }
        c = o && n.multiple;
        s = !1;
        if (c) {
            u = n.options;
            f = Vt(u);
            if (!Rt(a, f)) {
                if (i === e || Rt(f, i) || !Rt(a, r.ctx[Z])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = Tt(a, u[h].value);
                    }
                    f = Vt(u);
                    if (Rt(f, a)) {
                        s = !0;
                    }
                } else {
                    s = !0;
                }
            }
        } else if (l || o) {
            if (l && Mt(n)) {
                p = n.checked;
                if (a !== p) {
                    if (i === e || p === i || a !== r.ctx[Z]) {
                        n.checked = a;
                    } else {
                        s = !0;
                    }
                }
            } else {
                m = o && n.size < 2;
                v = n[ee];
                if (a !== v) {
                    if (i === e || v === i || a !== r.ctx[Z]) {
                        if (o) {
                            if (a === "") {
                                n.selectedIndex = m ? 0 : -1;
                            } else {
                                n[ee] = a;
                            }
                            if (a !== "" || m) {
                                v = n[ee];
                                if (a !== v) {
                                    s = !0;
                                }
                            }
                        } else {
                            n[ee] = a;
                        }
                    } else {
                        s = !0;
                    }
                }
            }
        }
        if (s) {
            Kt(e, n, r);
        } else {
            r.ctx[Z] = a;
        }
    });
    function Kt(n, t, r) {
        var a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, _, E, D, P;
        if (t && t.nodeName === "OPTION") {
            t = document.activeElement;
            r = Gn(t);
        }
        if (!r) {
            return !1;
        }
        a = r.component;
        i = r.attrs && r.attrs[Z];
        d = a && a.onChange != null;
        o = i || d;
        l = a && a.onSelectionChange != null;
        if (!o && !l) return !1;
        c = r.ctx;
        s = t.tagName;
        u = s === "SELECT";
        f = u && t.multiple;
        if (o && f) {
            h = Vt(t.options);
            if (!Rt(c[Z], h)) {
                c[Z] = h;
                if (i) i(h);
                if (d) a.onChange(c, h);
            }
        } else if (o && Mt(t)) {
            if (n && n.type === "change") {
                setTimeout(function() {
                    Kt(e, t, r);
                }, 10);
                return !1;
            }
            if (t.type === "radio") {
                p = document.getElementsByName(t.name);
                for (m = 0; m < p.length; m++) {
                    v = p[m];
                    g = Gn(v);
                    if (!g) continue;
                    b = r.attrs[Z];
                    y = g.component;
                    x = y && y.onChange != null;
                    if (!b && !x) continue;
                    w = g.ctx;
                    C = v.checked;
                    if (w[Z] !== C) {
                        w[Z] = C;
                        if (b) b(C);
                        if (x) y.onChange(w, C);
                    }
                }
            } else {
                S = t.checked;
                if (c[Z] !== S) {
                    c[Z] = S;
                    if (i) i(S);
                    if (d) a.onChange(c, S);
                }
            }
        } else {
            if (o) {
                k = t.value;
                if (c[Z] !== k) {
                    c[Z] = k;
                    if (i) i(k);
                    if (d) a.onChange(c, k);
                }
            }
            if (l) {
                I = t.selectionStart;
                N = t.selectionEnd;
                _ = t.selectionDirection;
                E = !1;
                D = c[J];
                if (_ == null) {
                    if (N === D) E = !0;
                } else if (_ === "backward") {
                    E = !0;
                }
                if (E) {
                    P = I;
                    I = N;
                    N = P;
                }
                Lt(r, I, N);
            }
        }
        return !1;
    }
    function Lt(e, n, t) {
        var r, a;
        r = e.component;
        a = e.ctx;
        if (r && (a[J] !== n || a[Q] !== t)) {
            a[J] = n;
            a[Q] = t;
            if (r.onSelectionChange) r.onSelectionChange(a, {
                startPosition: n,
                endPosition: t
            });
        }
    }
    function Ut(e, n, t) {
        var r = Sr();
        if (r) Kt(e, r.element, r);
        return !1;
    }
    z = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (G = 0; G < z.length; G++) ot(z[G], 10, Kt);
    te = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (G = 0; G < te.length; G++) ot(te[G], 2, Ut);
    function Ht(e) {
        return {
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            which: e.which || e.keyCode
        };
    }
    function Xt(e, n, t) {
        var r;
        if (!t) return !1;
        r = Ht(e);
        if (_t(t, "onKeyDown", r)) {
            Pt(e);
            return !0;
        }
        return !1;
    }
    function Yt(e, n, t) {
        var r;
        if (!t) return !1;
        r = Ht(e);
        if (_t(t, "onKeyUp", r)) {
            Pt(e);
            return !0;
        }
        return !1;
    }
    function zt(e, n, t) {
        var r;
        if (!t) return !1;
        if (e.which === 0) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (_t(t, "onKeyPress", r)) {
            Pt(e);
            return !0;
        }
        return !1;
    }
    ot("keydown", 50, Xt);
    ot("keyup", 50, Yt);
    ot("keypress", 50, zt);
    re = 13;
    ae = 750;
    ie = 500;
    de = 800;
    oe = 50;
    le = null;
    ce = "onClick";
    se = "onDoubleClick";
    function Gt(e, n) {
        var t, r;
        if (le == null) {
            return !1;
        }
        t = le.me.component[e];
        if (!t) {
            return !1;
        }
        r = t(le, n);
        return r;
    }
    function qt(n) {
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
    function Wt(e) {
        var n = Gn(e);
        return qt(n);
    }
    function $t(e) {
        var n;
        if (e.length) {
            for (n = e.length - 1; n >= 0; --n) {
                e[n].t.style.visibility = e[n].p;
            }
            return !0;
        }
        return !1;
    }
    function Zt(e, n) {
        e.push({
            t: n,
            p: n.style.visibility
        });
        n.style.visibility = "hidden";
    }
    function Jt(e, n, t) {
        var r = [], a;
        a = n;
        while (Wt(a)) {
            Zt(r, a);
            a = document.elementFromPoint(e.x, e.y);
        }
        if ($t(r)) {
            try {
                a.dispatchEvent(e);
            } catch (e) {
                return !1;
            }
            Pt(e);
            return !0;
        }
        return !1;
    }
    function Qt(e, n) {
        ot(e, 5, n);
    }
    ue = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (_n() && _n() < 11) {
        te = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (G = 0; G < te.length; ++G) {
            ot(te[G], 1, Jt);
        }
    }
    function er(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function nr(e, n, t, r) {
        var a = [], i;
        i = t;
        while (qt(r)) {
            Zt(a, i);
            i = document.elementFromPoint(e, n);
            r = Gn(i);
        }
        $t(a);
        return [ i, r ];
    }
    function tr(e) {
        return function n(t, r, a) {
            var i, d, o, l, c;
            if (qt(a)) {
                i = nr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = t.button + 1;
            o = er(t.pointerType);
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
            if (lt("!" + e, c, r, a)) {
                Pt(t);
                return !0;
            }
            return !1;
        };
    }
    function rr(e) {
        return function n(t, r, a) {
            var i = !1, d, o, l;
            for (d = 0; d < t.changedTouches.length; d++) {
                o = t.changedTouches[d];
                r = document.elementFromPoint(o.clientX, o.clientY);
                a = Gn(r);
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
                if (lt("!" + e, l, r, a)) i = !0;
            }
            if (i) {
                Pt(t);
                return !0;
            }
            return !1;
        };
    }
    function ar(e) {
        return function n(t, r, a) {
            var i, d;
            r = document.elementFromPoint(t.clientX, t.clientY);
            a = Gn(r);
            if (qt(a)) {
                i = nr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = {
                id: 1,
                type: 0,
                x: t.clientX,
                y: t.clientY,
                button: vr(t),
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            if (lt("!" + e, d, r, a)) {
                Pt(t);
                return !0;
            }
            return !1;
        };
    }
    function ir() {
        Qt("mousedown", ar(ue[0]));
        Qt("mousemove", ar(ue[1]));
        Qt("mouseup", ar(ue[2]));
    }
    if (window.ontouchstart !== e) {
        Qt("touchstart", rr(ue[0]));
        Qt("touchmove", rr(ue[1]));
        Qt("touchend", rr(ue[2]));
        Qt("touchcancel", rr(ue[3]));
        ir();
    } else if (window.onpointerdown !== e) {
        for (G = 0; G < 4; G++) {
            fe = ue[G];
            Qt(fe.toLowerCase(), tr(fe));
        }
    } else if (window.onmspointerdown !== e) {
        for (G = 0; G < 4; G++) {
            fe = ue[G];
            Qt("@MS" + fe, tr(fe));
        }
    } else {
        ir();
    }
    for (he = 0; he < 4; he++) {
        (function(e) {
            var n = "on" + e;
            ot("!" + e, 50, function(e, t, r) {
                return Gt(n, e) || _t(r, n, e) != null;
            });
        })(ue[he]);
    }
    pe = Cn();
    me = [];
    ve = -1;
    ge = 0;
    be = 0;
    ye = 0;
    xe = !1;
    function dr(e, n, t) {
        return Math.abs(e - n) < t;
    }
    we = [];
    function or(n) {
        var t, r, a, i, d, o, l, c;
        t = document.elementFromPoint(n.x, n.y);
        r = zn(t);
        a = r.length == 0 ? e : r[r.length - 1];
        if (qt(a)) {
            i = nr(n.x, n.y, t, a == null ? e : a);
            t = i[0];
            r = zn(t);
        }
        _t(a, "onMouseOver", n);
        d = 0;
        while (d < we.length && d < r.length && we[d] === r[d]) d++;
        o = we.length;
        if (o > 0) {
            l = we[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, n);
            }
        }
        while (o > d) {
            o--;
            l = we[o];
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
        we = r;
        if (o > 0) {
            l = we[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, n);
            }
        }
        return !1;
    }
    function lr() {
        return Object.keys(pe).length === 0;
    }
    function cr(e, n, t) {
        if (ve === -1 && lr()) {
            ve = e.id;
            ge = x();
            be = e.x;
            ye = e.y;
            xe = !1;
            or(e);
        }
        pe[e.id] = e.type;
        if (ve !== e.id) {
            xe = !0;
        }
        return !1;
    }
    function sr(e, n, t) {
        if (e.type === 0 && e.button === 0 && pe[e.id] != null) {
            e.button = 1;
            lt("!PointerUp", e, n, t);
            e.button = 0;
        }
        if (ve === e.id) {
            or(e);
            if (!dr(be, e.x, re) || !dr(ye, e.y, re)) xe = !0;
        } else if (lr()) {
            or(e);
        }
        return !1;
    }
    Ce = 0;
    Se = 0;
    function ur(e) {
        var n;
        if (Se == 0) return !1;
        n = x();
        if (n < Ce + 1000 && e >= Se) {
            Ce = n;
            Se = e;
            return !0;
        }
        Se = 0;
        return !1;
    }
    function fr(e, n, t) {
        var r, a;
        delete pe[e.id];
        if (ve == e.id) {
            or(e);
            ve = -1;
            if (e.type == 1 && !xe) {
                if (x() - ge < ae) {
                    lt("!PointerCancel", e, n, t);
                    ur(1);
                    r = Gt(ce, e) || _t(t, ce, e) != null;
                    a = _n() ? de : ie;
                    me.push([ e.x, e.y, x() + a, r ? 1 : 0 ]);
                    return r;
                }
            }
        }
        return !1;
    }
    function hr(e, n, t) {
        delete pe[e.id];
        if (ve == e.id) {
            ve = -1;
        }
        return !1;
    }
    function pr(e, n, t) {
        var r, a, i;
        r = x();
        for (a = 0; a < me.length; a++) {
            i = me[a];
            if (i[2] < r) {
                me.splice(a, 1);
                a--;
                continue;
            }
            if (dr(i[0], e.clientX, oe) && dr(i[1], e.clientY, oe)) {
                me.splice(a, 1);
                if (i[3]) Pt(e);
                return !0;
            }
        }
        return !1;
    }
    ke = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Ie = [ cr, sr, fr, hr, pr ];
    for (G = 0; G < 5; G++) {
        ot(ke[G], 3, Ie[G]);
    }
    function mr(e) {
        return function(n, t, r) {
            if (ve != n.id && !lr()) return !1;
            if (Gt(e, n) || _t(r, e, n)) {
                return !0;
            }
            return !1;
        };
    }
    Ne = [ "Down", "Move", "Up", "Up" ];
    for (G = 0; G < 4; G++) {
        ot(ke[G], 80, mr("onMouse" + Ne[G]));
    }
    function vr(e) {
        return e.which || e.button;
    }
    function gr(e, n) {
        return function(t, r, a) {
            var i, d, o;
            if (F == 1 && (r.nodeName != "INPUT" || t.clientX != 0 || t.clientY != 0)) {
                r = document.elementFromPoint(t.clientX, t.clientY);
                a = Gn(r);
                if (qt(a)) {
                    i = nr(t.clientX, t.clientY, r, a);
                    r = i[0];
                    a = i[1];
                }
            }
            d = vr(t) || 1;
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
            if (e == se) o.count = 2;
            if (ur(o.count) || Gt(e, o) || _t(a, e, o)) {
                Pt(t);
                return !0;
            }
            return !1;
        };
    }
    function br(e, n) {
        var t, r, a;
        t = document.elementFromPoint(e, n);
        r = Gn(t);
        if (qt(r)) {
            a = nr(e, n, t, r);
            r = a[1];
        }
        return r;
    }
    function yr(e, n, t) {
        var r, a;
        while (t) {
            r = t.style;
            if (r) {
                a = r.userSelect;
                if (a === "none") {
                    Pt(e);
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
    Qt("selectstart", yr);
    Qt("^click", gr(ce));
    Qt("^dblclick", gr(se));
    Qt("contextmenu", gr("onContextMenu", !0));
    _e = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function xr(e, n, t) {
        var r, a, i, d, o, l;
        if (qt(t)) {
            r = nr(e.x, e.y, n, t);
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
        if (Gt("onMouseWheel", l) || _t(t, "onMouseWheel", l)) {
            Pt(e);
            return !0;
        }
        return !1;
    }
    Qt(_e, xr);
    Ee = function(e, n) {
        var t = _n() ? de : ie;
        me.push([ e, n, x() + t, 1 ]);
    };
    De = e;
    Pe = e;
    Fe = [];
    function wr(n) {
        var t, r, a, i, d, o;
        t = document.hasFocus() || n ? document.activeElement : e;
        if (t !== De) {
            De = t;
            r = zn(De);
            a = 0;
            while (a < Fe.length && a < r.length && Fe[a] === r[a]) a++;
            i = Fe.length - 1;
            if (i >= a) {
                d = Fe[i];
                if (d) {
                    o = d.component;
                    if (o && o.onBlur) o.onBlur(d.ctx);
                }
                i--;
            }
            while (i >= a) {
                d = Fe[i];
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
            Fe = r;
            Pe = Fe.length == 0 ? e : vn(Fe[Fe.length - 1]);
        }
        return !1;
    }
    function Cr() {
        setTimeout(function() {
            return wr(!1);
        }, 10);
        return !1;
    }
    ot("^focus", 50, function() {
        return wr(!0);
    });
    ot("^blur", 50, Cr);
    function Sr() {
        return Pe;
    }
    Ae = [];
    function kr(e, n, t) {
        var r, a;
        r = {
            node: t
        };
        for (a = 0; a < Ae.length; a++) {
            Ae[a](r);
        }
        return !1;
    }
    ot("^scroll", 10, kr);
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
    je = 0;
    Be = [];
    Oe = null;
    Me = null;
    Re = {
        userSelect: ""
    };
    En(Re);
    Te = Object.keys(Re);
    Ve = Te[Te.length - 1];
    Ke = function(n) {
        this.id = ++je;
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
        this.data = Cn();
        if (n >= 0) Xe[n] = this;
        Be.push(this);
    };
    function Ir() {
        var e;
        if (Me == null) {
            e = document.body.style;
            fn = e.cursor;
            hn = e[Ve];
            e[Ve] = "none";
            Me = xt(_r);
        }
    }
    Le = {
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
    function Nr() {
        var e = "no-drop", n;
        if (Be.length !== 0) {
            n = Be[0];
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
    Ue = {
        render: function(e, n) {
            var t = [], r, a, i, d;
            for (r = 0; r < Be.length; r++) {
                a = Be[r];
                if (a.beforeDrag) continue;
                if (a.dragView != null && (a.x != 0 || a.y != 0)) {
                    t.push({
                        key: "" + a.id,
                        data: a,
                        component: Le
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
            d = Nr();
            if (d && i.cursor !== d) i.cursor = d;
            n.children = t;
        },
        onDrag: function(e) {
            L(e);
            return !1;
        }
    };
    function _r() {
        return {
            component: Ue
        };
    }
    He = Ke.prototype;
    He.setOperation = function(e) {
        this.operation = e;
    };
    He.setDragNodeView = function(e) {
        this.dragView = e;
    };
    He.addData = function(e, n) {
        this.data[e] = n;
        return !0;
    };
    He.listData = function() {
        return Object.keys(this.data);
    };
    He.hasData = function(n) {
        return this.data[n] !== e;
    };
    He.getData = function(e) {
        return this.data[e];
    };
    He.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    He.cancelDnd = function() {
        Dr(e, this);
        this.destroy();
    };
    He.destroy = function() {
        var e, n;
        this.ended = !0;
        if (this.started) Dt("onDragEnd", this);
        delete Xe[this.pointerid];
        for (e = 0; e < Be.length; e++) {
            if (Be[e] === this) {
                Be.splice(e, 1);
                break;
            }
        }
        if (Oe === this) {
            Oe = null;
        }
        if (Be.length === 0 && Me != null) {
            wt(Me);
            Me = null;
            n = document.body.style;
            n.cursor = fn;
            n[Ve] = hn;
        }
    };
    Xe = Cn();
    function Er(e, n, t) {
        var r, a, i, d, o;
        r = Xe[e.id];
        if (r) {
            r.cancelDnd();
        }
        if (e.button <= 1) {
            r = new Ke(e.id);
            r.startX = e.x;
            r.startY = e.y;
            r.lastX = e.x;
            r.lastY = e.y;
            r.overNode = t;
            Pr(r, e);
            a = _t(t, "onDragStart", r);
            if (a) {
                i = Zn(a.me);
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
                    Dr(t, r);
                }
                Ir();
            } else {
                r.destroy();
            }
        }
        return !1;
    }
    function Dr(e, n) {
        n.overNode = e;
        n.targetCtx = _t(e, "onDragOver", n);
        if (n.targetCtx == null) {
            n.operation = 0;
        }
        Dt("onDrag", n);
    }
    function Pr(e, n) {
        e.shift = n.shift;
        e.ctrl = n.ctrl;
        e.alt = n.alt;
        e.meta = n.meta;
        e.x = n.x;
        e.y = n.y;
    }
    function Fr(e, n, t) {
        var r = Xe[e.id];
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
        Pr(r, e);
        Dr(t, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function Ar(e, n, t) {
        var r, a;
        r = Xe[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            Pr(r, e);
            Dr(t, r);
            a = r.targetCtx;
            if (a && _t(a.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            Ee(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function jr(e, n, t) {
        var r = Xe[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function Br(e, n) {
        var t;
        e.shift = n.shiftKey;
        e.ctrl = n.ctrlKey;
        e.alt = n.altKey;
        e.meta = n.metaKey;
        e.x = n.clientX;
        e.y = n.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        t = br(e.x, e.y);
        Dr(t, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    Ye = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function Or(e, n, t) {
        var r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        r = Oe;
        if (r != null) {
            r.destroy();
        }
        a = Object.keys(Xe);
        if (a.length > 0) {
            r = Xe[a[0]];
            r.system = !0;
            Oe = r;
        } else {
            i = e.clientX;
            d = e.clientY;
            r = new Ke(-1);
            r.system = !0;
            Oe = r;
            r.x = i;
            r.y = d;
            r.lastX = i;
            r.lastY = d;
            r.startX = i;
            r.startY = d;
            o = _t(t, "onDragStart", r);
            if (o) {
                l = Zn(o.me);
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
                Ir();
            } else {
                r.destroy();
                return !1;
            }
        }
        r.beforeDrag = !1;
        u = Ye[r.enabledOperations];
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
                if (!bn(S)) S = JSON.stringify(S);
                e.dataTransfer.setData(C, S);
            } catch (e) {}
        }
        Br(r, e);
        return !1;
    }
    function Mr(e, n) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][n];
    }
    function Rr(n, t, r) {
        var a, i, d, o, l, c, s;
        a = Oe;
        if (a == null) {
            a = new Ke(-1);
            a.system = !0;
            Oe = a;
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
                if (Ye[d] === o) break;
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
        Br(a, n);
        Mr(n, a.operation);
        if (a.operation != 0) {
            Pt(n);
            return !0;
        }
        return !1;
    }
    function Tr(e, n, t) {
        var r, a, i;
        r = e.clientX;
        a = e.clientY;
        i = Ot();
        if (Oe != null && (r === 0 && a === 0 || r < 0 || a < 0 || r >= i.width || a >= i.height)) {
            Oe.x = 0;
            Oe.y = 0;
            Oe.operation = 0;
            Dt("onDrag", Oe);
        }
        return !1;
    }
    function Vr(e, n, t) {
        if (Oe != null) {
            Oe.destroy();
        }
        return !1;
    }
    function Kr(e, n, t) {
        var r, a, i, d, o, l, c;
        r = Oe;
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
        Br(r, e);
        c = r.targetCtx;
        if (c && _t(c.me, "onDrop", r)) {
            Mr(e, r.operation);
            r.destroy();
            Pt(e);
        } else {
            r.cancelDnd();
        }
        return !0;
    }
    function Lr(e, n, t) {
        Pt(e);
        return !0;
    }
    function Ur(e, n, t) {
        if (Be.length === 0) return !1;
        Pt(e);
        return !0;
    }
    ot("!PointerDown", 4, Er);
    ot("!PointerMove", 4, Fr);
    ot("!PointerUp", 4, Ar);
    ot("!PointerCancel", 4, jr);
    ot("selectstart", 4, Ur);
    ot("dragstart", 5, Or);
    ot("dragover", 5, Rr);
    ot("dragend", 5, Vr);
    ot("drag", 5, Tr);
    ot("drop", 5, Kr);
    ot("dragenter", 5, Lr);
    ot("dragleave", 5, Lr);
    ze = function() {
        return Be;
    };
    Ge = -1;
    function Hr() {
        if (Ge >= 0) clearTimeout(Ge);
        Ge = -1;
        L();
        return !1;
    }
    ot("hashchange", 10, Hr);
    Cn();
    qe = Cn();
    Cn();
    Cn();
    We = [];
    $e = Cn();
    Ze = "";
    Je = !1;
    Qe = null;
    en = _n() === 9;
    nn = ft(Gr);
    tn = /\:|\ |\>/;
    function Xr(e) {
        var n, t;
        n = tn.exec(e);
        if (!n) return qe[e].name;
        t = n.index;
        return qe[e.substring(0, t)].name + e.substring(t);
    }
    function Yr(e, t) {
        var r = "", a;
        if (e) {
            if (n(e)) {
                for (a = 0; a < e.length; a++) {
                    if (a > 0) {
                        r += ",";
                    }
                    r += "." + Xr(e[a]) + "." + t;
                }
            } else {
                r = "." + Xr(e) + "." + t;
            }
        } else {
            r = "." + t;
        }
        return r;
    }
    function zr(t, r, a, i) {
        var d, o, l, c, s, u;
        if (bn(a)) {
            d = qe[a];
            if (d === e) {
                throw new Error("Unknown style " + a);
            }
            zr(t, r, d.style, d.pseudo);
        } else if (yn(a)) {
            a(t, r);
        } else if (n(a)) {
            for (o = 0; o < a.length; o++) {
                zr(t, r, a[o], e);
            }
        } else if (typeof a === "object") {
            for (s in a) {
                if (!Object.prototype.hasOwnProperty.call(a, s)) continue;
                l = a[s];
                if (yn(l)) {
                    l = l(t, s);
                }
                t[s] = l;
            }
        }
        if (i != null && r != null) {
            for (u in i) {
                c = r[u];
                if (c === e) {
                    c = Cn();
                    r[u] = c;
                }
                zr(c, e, i[u], e);
            }
        }
    }
    rn = !1;
    function Gr() {
        var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        n = document.body.style;
        if (rn && E >= 150) {
            n.opacity = "1";
            rn = !1;
        }
        if (Je) {
            if (D === 1 && "webkitAnimation" in n) {
                rn = !0;
                n.opacity = "0";
                setTimeout(L, 200);
            }
            for (t = 0; t < We.length; t++) {
                r = We[t];
                a = $e[r.url];
                if (a == null) continue;
                i = r.color();
                if (i !== r.lastColor) {
                    r.lastColor = i;
                    if (r.width == null) r.width = a.width;
                    if (r.height == null) r.height = a.height;
                    d = Zr(a, i, r.width, r.height, r.left, r.top);
                    o = qe[r.styleId];
                    o.style = {
                        backgroundImage: "url(" + d + ")",
                        width: r.width,
                        height: r.height,
                        backgroundPosition: 0
                    };
                }
            }
            l = Ze;
            for (C in qe) {
                c = qe[C];
                s = c.parent;
                u = c.name;
                f = c.pseudo;
                h = c.style;
                if (yn(h) && h.length === 0) {
                    p = h(), h = p[0], f = p[1];
                }
                if (bn(h) && f == null) {
                    c.realName = h;
                    continue;
                }
                c.realName = u;
                m = Cn();
                v = Cn();
                zr(e, v, e, f);
                zr(m, v, h, e);
                g = null;
                if (m["pointerEvents"]) {
                    g = Cn();
                    g["pointerEvents"] = m["pointerEvents"];
                }
                if (en) {
                    if (m["userSelect"]) {
                        if (g == null) g = Cn();
                        g["userSelect"] = m["userSelect"];
                        delete m["userSelect"];
                    }
                }
                c.inlStyle = g;
                En(m);
                b = Wr(m);
                if (b.length > 0) l += (u == null ? s : Yr(s, u)) + " {" + b + "}\n";
                for (S in v) {
                    y = v[S];
                    En(y);
                    l += (u == null ? s + ":" + S : Yr(s, u + ":" + S)) + " {" + Wr(y) + "}\n";
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
            if (Qe != null) {
                w.replaceChild(x, Qe);
            } else {
                w.appendChild(x);
            }
            Qe = x;
            Je = !1;
        }
        nn();
    }
    an = /([A-Z])/g;
    dn = /^ms-/;
    function qr(e) {
        if (e === "cssFloat") return "float";
        return e.replace(an, "-$1").toLowerCase().replace(dn, "-ms-");
    }
    function Wr(n) {
        var t = "", r, a;
        for (a in n) {
            r = n[a];
            if (r === e) continue;
            t += qr(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        t = t.slice(0, -1);
        return t;
    }
    function $r() {
        Je = !0;
        L();
    }
    on = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Zr(e, n, t, r, a, i) {
        var d, o, l, c, s, u, f, h, p, m, v, g;
        d = document.createElement("canvas");
        d.width = t;
        d.height = r;
        o = d.getContext("2d");
        o.drawImage(e, -a, -i);
        l = o.getImageData(0, 0, t, r);
        c = l.data;
        s = on.exec(n);
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
    function Jr(n) {
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
        deref: Gn,
        getRoots: Ct,
        setInvalidate: yt,
        invalidateStyles: $r,
        ignoreShouldChange: bt,
        setAfterFrame: ht,
        setBeforeFrame: ft,
        getDnds: ze,
        setBeforeInit: Nt
    };
    It(function() {
        return "hello";
    });
}).call(this);

