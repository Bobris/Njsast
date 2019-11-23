(function(e) {
    "use strict";
    var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, E, _, D, P, F, A, j, B, O, M, R, T, V, K, L, U, H, X, Y, z, G, q, W, $, Z, J, Q, ee, ne, te, re, ae, ie, de, oe, le, ce, se, ue, fe, he, pe, me, ve, ge, be, ye, xe, we, Ce, Se, ke, Ie, Ne, Ee, _e, De, Pe, Fe, Ae, je, Be, Oe, Me, Re, Te, Ve, Ke, Le, Ue, He, Xe, Ye, ze, Ge, qe, We, $e, Ze, Je, Qe, en, nn, tn, rn, an, dn, on, ln, cn, sn, un, fn, hn;
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
    function pn(e, n) {}
    n = Array.isArray;
    t = {};
    function mn(e) {
        return document.createTextNode(e);
    }
    function vn(e) {
        return document.createElement(e);
    }
    function gn(n) {
        return n === null ? e : n;
    }
    function bn(e) {
        return typeof e == "number";
    }
    function yn(e) {
        return typeof e == "string";
    }
    function xn(e) {
        return typeof e == "function";
    }
    function wn(e) {
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
    function Cn(e) {
        var n = l;
        l = e;
        return n;
    }
    function Sn() {
        return Object.create(null);
    }
    c = [ "Webkit", "Moz", "ms", "O" ];
    s = document.createElement("div").style;
    function kn(e) {
        return yn(s[e]);
    }
    u = Sn();
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
    function In(n) {
        return function(t, r, a) {
            t[n] = r;
            t[a] = e;
        };
    }
    function Nn(n) {
        return function(t, r, a) {
            if (bn(r)) {
                t[n] = r + "px";
            } else {
                t[n] = r;
            }
            t[a] = e;
        };
    }
    function En(e, n, t) {
        if (bn(n)) e[t] = n + "px";
    }
    function _n() {
        return document.documentMode;
    }
    function Dn(n) {
        var t, r, a, i, d, o, l, s;
        t = Object.keys(n);
        for (r = 0, a = t.length; r < a; r++) {
            i = t[r];
            d = u[i];
            o = n[i];
            if (o === e) continue;
            if (d === e) {
                if (kn(i)) {
                    d = f[i] === !0 ? null : En;
                } else {
                    l = i.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (s = 0; s < c.length; s++) {
                        if (kn(c[s] + l)) {
                            d = (f[i] === !0 ? In : Nn)(c[s] + l);
                            break;
                        }
                    }
                    if (d === e) {
                        d = f[i] === !0 ? null : En;
                    }
                }
                u[i] = d;
            }
            if (d !== null) d(n, o, i);
        }
    }
    function Pn(e, n) {
        e[n] = "";
    }
    function Fn(e, n, t) {
        var r;
        if (yn(t)) {
            r = t.length;
            if (r > 11 && t.substr(r - 11, 11) === " !important") {
                e.setProperty(n, t.substr(0, r - 11), "important");
                return;
            }
        }
        e[n] = t;
    }
    function An(n, t, r) {
        var a, i, d;
        a = n.style;
        if (wn(t)) {
            Dn(t);
            if (wn(r)) {
                for (i in r) {
                    if (!(i in t)) Pn(a, i);
                }
                for (i in t) {
                    d = t[i];
                    if (d !== e) {
                        if (r[i] !== d) Fn(a, i, d);
                    } else {
                        Pn(a, i);
                    }
                }
            } else {
                if (r) a.cssText = "";
                for (i in t) {
                    d = t[i];
                    if (d !== e) Fn(a, i, d);
                }
            }
        } else if (t) {
            a.cssText = t;
        } else {
            if (wn(r)) {
                for (i in r) {
                    Pn(a, i);
                }
            } else if (r) {
                a.cssText = "";
            }
        }
    }
    function jn(e, n) {
        if (a) e.setAttribute("class", n); else e.className = n;
    }
    h = /^input$|^select$|^textarea$|^button$/;
    p = "tabindex";
    function Bn(n, t, r, i, d) {
        var o = !1, c, s, u, f, m;
        if (r != null) for (c in r) {
            s = r[c];
            u = i[c];
            if (d && c === p) {
                s = -1;
                o = !0;
            } else if (c === ee && !a) {
                if (xn(s)) {
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
    function On(e) {
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
    function Mn(e) {
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
    function Rn(e) {
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
    function Tn(n) {
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
    function Vn(e, n) {
        var t, r;
        if (e == null) return;
        if (xn(e)) {
            e(n);
            return;
        }
        t = e[0];
        r = t.refs;
        if (r == null) {
            r = Sn();
            t.refs = r;
        }
        r[e[1]] = n;
    }
    m = [];
    v = null;
    function Kn(n, t, r, d) {
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
        Vn(o.ref, o);
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
            u.cfg = n.cfg === e ? Tn(t) : n.cfg;
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
        if (bn(h)) {
            h = "" + h;
            o.children = h;
        }
        if (f === e) {
            if (yn(h)) {
                m = mn(h);
                o.element = m;
                r.insertBefore(m, d);
            } else {
                Un(o, r, d);
            }
            if (s) {
                if (s.postRender) {
                    s.postRender(o.ctx, o);
                }
                On(o);
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
                    m = w.insertBefore(vn("i"), m);
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
                On(o);
            }
            return o;
        }
        if (a || f === "svg") {
            m = document.createElementNS("http://www.w3.org/2000/svg", f);
            p = f === "foreignObject";
            a = !p;
        } else {
            m = vn(f);
        }
        r.insertBefore(m, d);
        o.element = m;
        Un(o, m, null);
        if (s) {
            if (s.postRender) {
                s.postRender(o.ctx, o);
            }
        }
        if (i && v === o) i = !1;
        if (p) a = !0;
        if (o.attrs || i) o.attrs = Bn(o, m, o.attrs, {}, i);
        if (o.style) An(m, o.style, e);
        S = o.className;
        if (S) jn(m, S);
        a = l;
        i = c;
        On(o);
        return o;
    }
    function Ln(n) {
        if (n === !1 || n === !0 || n === null) return e;
        if (yn(n)) {
            return {
                children: n
            };
        }
        if (bn(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function Un(e, t, r) {
        var a, i, d, o;
        a = e.children;
        if (!a) return;
        if (!n(a)) {
            if (yn(a)) {
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
            o = Ln(o);
            if (o == null) {
                a.splice(i, 1);
                d--;
                continue;
            }
            a[i] = Kn(o, e, t, r);
            i++;
        }
        e.children = a;
    }
    function Hn(e) {
        var t, r, a, i, d, o, l, c;
        Vn(e.ref, null);
        t = e.children;
        if (n(t)) {
            for (r = 0, a = t.length; r < a; r++) {
                Hn(t[r]);
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
                    if (xn(c)) c(d); else c.dispose();
                }
            }
        }
    }
    function Xn(e) {
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
                    Xn(d[o]);
                }
            }
        }
    }
    function Yn(e) {
        Hn(e);
        Xn(e);
    }
    g = Sn();
    function zn(t, r, a, i) {
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
                    s = zn(o[c], r, a, i);
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
    function Gn(n) {
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
                s = zn(c, l, t.length, t);
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
                s = zn(h, l, t.length, t);
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
    function qn(e) {
        var n, t;
        n = Gn(e);
        t = null;
        while (t === null) {
            t = n.pop();
        }
        return t;
    }
    function Wn(n, t, r) {
        if (r) {
            if (r.postRender) {
                ln = t.ctx;
                r.postRender(ln, n, t);
                ln = e;
            }
        }
        t.data = n.data;
        Mn(t);
    }
    function $n(t, r, d) {
        var o, l;
        ln = e;
        if (n(t.children)) {
            o = a;
            l = i;
            if (t.tag === "svg") {
                a = !0;
            } else if (a && t.tag === "foreignObject") a = !1;
            if (i && v === t) i = !1;
            ft(t.children, t.element || r, t.element != null ? null : d);
            a = o;
            i = l;
        }
        Rn(t);
    }
    function Zn(d, o, l, c, s, u) {
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
                ln = p;
                if (d.cfg !== e) p.cfg = d.cfg; else p.cfg = Tn(o.parent);
                if (f.shouldChange) if (!f.shouldChange(p, d, o) && !K && !m) {
                    $n(o, l, c);
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
            $n(o, l, c);
            return o;
        }
        x = a;
        w = i;
        if (bn(g)) {
            g = "" + g;
        }
        if (h || f != null && p == null || f == null && p != null && p.me.component !== t) {} else if (y === "/") {
            if (o.tag === "/" && b === g) {
                Wn(d, o, f);
                return o;
            }
        } else if (y === o.tag) {
            if (y === e) {
                if (yn(g) && yn(b)) {
                    if (g !== b) {
                        C = o.element;
                        C.textContent = g;
                        o.children = g;
                    }
                } else {
                    if (i && v === o) i = !1;
                    if (s <= 0) {
                        if (n(b)) ft(o.children, l, c);
                    } else {
                        o.children = it(l, g, b, o, c, s - 1);
                    }
                    a = x;
                    i = w;
                }
                Wn(d, o, f);
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
                if (yn(g) && !n(b)) {
                    if (g !== b) {
                        C.textContent = g;
                        b = g;
                    }
                } else {
                    if (s <= 0) {
                        if (n(b)) ft(o.children, C, c);
                    } else {
                        b = it(C, g, b, o, null, s - 1);
                    }
                }
                o.children = b;
                if (I) a = !0;
                Wn(d, o, f);
                if (o.attrs || d.attrs || i) o.attrs = Bn(o, C, d.attrs, o.attrs || {}, i);
                An(C, d.style, o.style);
                o.style = d.style;
                N = d.className;
                if (N !== o.className) {
                    jn(C, N || "");
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
        _ = Kn(d, o.parent, E, Jn(o));
        Yn(o);
        return _;
    }
    function Jn(t) {
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
            r = Jn(a[i]);
            if (r) return r;
        }
        return null;
    }
    function Qn(e, n, t, r) {
        var a, i;
        while (++n < t) {
            a = e[n];
            if (a == null) continue;
            i = Jn(a);
            if (i != null) return i;
        }
        return r;
    }
    function et() {
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
    function nt(e, n, t, r, a, i, d) {
        n[t] = Zn(e, n[t], i, Qn(n, t, r, a), d);
    }
    function tt(e, t, r) {
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
            tt(d[i], t, r);
        }
    }
    function rt(e, n, t, r, a) {
        var i, d, o;
        i = Qn(e, n, t, r);
        d = e[n];
        o = Jn(d);
        if (o != null && o !== i) {
            tt(d, a, i);
        }
    }
    function at(e, n, t, r, a, i, d) {
        var o, l, c;
        o = Qn(n, t, r, a);
        l = n[t];
        c = Jn(l);
        if (c != null && c !== o) {
            tt(l, i, o);
        }
        n[t] = Zn(e, l, i, o, d);
    }
    function it(e, t, r, a, i, d) {
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
            s = Ln(s);
            if (s == null) {
                o.splice(c, 1);
                l--;
                continue;
            }
            o[c] = s;
            c++;
        }
        return dt(e, o, r, a, i, d);
    }
    function dt(n, t, r, a, i, d) {
        var o, l, c, s = 0, u = 0, f, h, p, m, v, g, b, y, x, w, C;
        o = t.length;
        l = r.length;
        c = l;
        while (s < o && u < c) {
            if (t[s].key === r[u].key) {
                nt(t[s], r, u, l, i, n, d);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (t[o - 1].key === r[c - 1].key) {
                    o--;
                    c--;
                    nt(t[o], r, c, l, i, n, d);
                    if (s < o && u < c) continue;
                }
                break;
            }
            if (s < o && u < c) {
                if (t[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    at(t[s], r, u, l, i, n, d);
                    s++;
                    u++;
                    continue;
                }
                if (t[o - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    o--;
                    at(t[o], r, c, l, i, n, d);
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
                r.splice(u, 0, Kn(t[s], a, n, Qn(r, u - 1, l, i)));
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
                Yn(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = Sn();
        h = Sn();
        p = s;
        m = u;
        v = 0;
        for (;u < c; u++) {
            g = r[u];
            b = g.key;
            if (b != null) {
                pn(!(b in f));
                f[b] = u;
            } else v--;
        }
        y = -v - v;
        for (;s < o; s++) {
            g = t[s];
            b = g.key;
            if (b != null) {
                pn(!(b in h));
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
                r.splice(u, 0, Kn(t[s], a, n, Qn(r, u - 1, l, i)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(w in h)) {
                Yn(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                nt(t[s], r, u, l, i, n, d);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                at(t[s], r, u, l, i, n, d);
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
                Yn(r[u]);
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
                r.splice(u, 0, Kn(t[s], a, n, Qn(r, u - 1, l, i)));
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
                nt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u = s;
                continue;
            }
            if (b != null) {
                pn(s === u);
                if (y === 0 && v < 0) {
                    while (!0) {
                        Yn(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        v++;
                        pn(u !== c, "there still need to exist key node");
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == null) u++;
                pn(b === r[u].key);
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                rt(r, s, l, i, n);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                at(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, Kn(t[s], a, n, Qn(r, s - 1, l, i)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            Yn(r[c]);
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
    function ot(e) {
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
    P = {};
    function lt(e, n, t) {
        var r;
        if (cn == null) cn = {};
        r = cn[e] || [];
        r.push({
            priority: n,
            callback: t
        });
        cn[e] = r;
    }
    function ct(e, n, t, r) {
        var a, i;
        a = P[e];
        if (a) for (i = 0; i < a.length; i++) {
            if (a[i](n, t, r)) return !0;
        }
        return !1;
    }
    F = 0;
    function st(e, n) {
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
            a = qn(r);
            F++;
            ct(n, t, r, a);
            F--;
            if (F == 0 && R) vt();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, a, t);
    }
    function ut() {
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
            st(i, n[d]);
        }
    }
    function ft(e, t, r) {
        var d, o, l, c, s, u;
        d = e.length;
        for (o = 0; o < d; o++) {
            l = e[o];
            c = l.ctx;
            if (c != null && c[S] === D) {
                e[o] = Zn(l.orig, l, t, r, c[k], !0);
            } else if (n(l.children)) {
                s = a;
                u = i;
                if (i && v === l) i = !1;
                if (l.tag === "svg") a = !0; else if (a && l.tag === "foreignObject") a = !1;
                ft(l.children, l.element || t, Qn(e, o, d, r));
                Rn(l);
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
    function ht(e) {
        var n = B;
        B = e;
        return n;
    }
    function pt(e) {
        var n = M;
        M = e;
        return n;
    }
    function mt(e, n, t) {
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
    function vt() {
        R = !1;
        bt(x() - w);
    }
    function gt(e) {
        N = !1;
        bt(e);
    }
    T = Qr({
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
    function bt(t) {
        var r, a, d, o, l, c, s, u, f;
        x();
        ut();
        O();
        D++;
        K = V;
        V = !1;
        _ = t;
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
                l = Jn(s.n);
                if (l != null) break;
            }
            if (v) i = !mt(v, d.p, sn);
            if (d.e === e) d.e = document.body;
            if (o) {
                if (r || o.ctx[S] === D) {
                    u = T(d);
                    Zn(u, o, d.e, l, r ? 1000000 : o.ctx[k]);
                } else {
                    if (n(d.c)) ft(d.c, d.e, l);
                }
            } else {
                u = T(d);
                o = Kn(u, e, d.e, l);
                d.n = o;
            }
            d.c = o.children;
        }
        sn = e;
        et();
        f = g["0"];
        M(f ? f.c : null);
        x();
    }
    V = !1;
    K = !1;
    function yt() {
        V = !0;
        L();
    }
    function xt(e) {
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
        if (N || E) return;
        N = !0;
        ot(gt);
    };
    U = 0;
    function wt(n, t, r) {
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
            It();
        }
        return a;
    }
    function Ct(e) {
        var n = g[e];
        if (!n) return;
        if (n.n) Yn(n.n);
        delete g[e];
    }
    function St() {
        return g;
    }
    function kt() {
        E = !1;
        L();
    }
    H = kt;
    function It() {
        E = !0;
        H();
        H = kt;
    }
    function Nt(n, t) {
        pn(sn == null, "init should not be called from render");
        Ct("0");
        g["0"] = {
            f: n,
            e: t,
            c: [],
            p: e,
            n: e
        };
        It();
    }
    function Et(e) {
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
    function Dt(t, r, a) {
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
                s = Dt(l[c], r, a);
                if (s != null) return s;
            }
        }
        return e;
    }
    function Pt(n, t) {
        var r, a, i, d;
        r = Object.keys(g);
        for (a = 0; a < r.length; a++) {
            i = g[r[a]].n;
            if (i != null) {
                d = Dt(i, n, t);
                if (d != null) return d;
            }
        }
        return e;
    }
    function Ft(e) {
        var n = e.preventDefault;
        if (n) n.call(e); else e.returnValue = !1;
    }
    function At(e) {
        var t, r;
        e = e.slice(0);
        for (t = 0; t < e.length; t++) {
            r = e[t];
            if (n(r)) {
                e[t] = At(r);
            } else if (wn(r)) {
                e[t] = jt(r);
            }
        }
        return e;
    }
    function jt(e) {
        var t, a;
        t = r({}, e);
        if (t.attrs) {
            t.attrs = r({}, t.attrs);
        }
        if (wn(t.style)) {
            t.style = r({}, t.style);
        }
        a = t.children;
        if (a) {
            if (n(a)) {
                t.children = At(a);
            } else if (wn(a)) {
                t.children = jt(a);
            }
        }
        return t;
    }
    function Bt(e, n) {
        u[e] = n;
    }
    X = null;
    Y = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function Ot() {
        X = null;
        L();
        return !1;
    }
    z = [ "resize", "orientationchange" ];
    for (G = 0; G < z.length; G++) lt(z[G], 10, Ot);
    q = window.document.documentElement;
    W = /Android/i.test(navigator.userAgent);
    function Mt() {
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
            Bt("background", function(t, r, a) {
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
                    Bt("background", t);
                })();
            }
        })();
    }
    Z = "b$value";
    J = "b$selStart";
    Q = "b$selEnd";
    ee = "value";
    function Rt(e) {
        var n = e.type;
        return n === "checkbox" || n === "radio";
    }
    function Tt(e, n) {
        var t, r;
        t = e.length;
        if (t !== n.length) return !1;
        for (r = 0; r < t; r++) {
            if (e[r] !== n[r]) return !1;
        }
        return !0;
    }
    function Vt(e, n) {
        var t;
        for (t = 0; t < e.length; t++) {
            if (e[t] === n) return !0;
        }
        return !1;
    }
    function Kt(e) {
        var n = [], t;
        for (t = 0; t < e.length; t++) {
            if (e[t].selected) n.push(e[t].value);
        }
        return n;
    }
    ne = Cn(function(n, r, a, i) {
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
            f = Kt(u);
            if (!Tt(a, f)) {
                if (i === e || Tt(f, i) || !Tt(a, r.ctx[Z])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = Vt(a, u[h].value);
                    }
                    f = Kt(u);
                    if (Tt(f, a)) {
                        s = !0;
                    }
                } else {
                    s = !0;
                }
            }
        } else if (l || o) {
            if (l && Rt(n)) {
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
            Lt(e, n, r);
        } else {
            r.ctx[Z] = a;
        }
    });
    function Lt(n, t, r) {
        var a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, E, _, D, P;
        if (t && t.nodeName === "OPTION") {
            t = document.activeElement;
            r = qn(t);
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
            h = Kt(t.options);
            if (!Tt(c[Z], h)) {
                c[Z] = h;
                if (i) i(h);
                if (d) a.onChange(c, h);
            }
        } else if (o && Rt(t)) {
            if (n && n.type === "change") {
                setTimeout(function() {
                    Lt(e, t, r);
                }, 10);
                return !1;
            }
            if (t.type === "radio") {
                p = document.getElementsByName(t.name);
                for (m = 0; m < p.length; m++) {
                    v = p[m];
                    g = qn(v);
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
                E = t.selectionDirection;
                _ = !1;
                D = c[J];
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
                Ut(r, I, N);
            }
        }
        return !1;
    }
    function Ut(e, n, t) {
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
    function Ht(e, n, t) {
        var r = kr();
        if (r) Lt(e, r.element, r);
        return !1;
    }
    z = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (G = 0; G < z.length; G++) lt(z[G], 10, Lt);
    te = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (G = 0; G < te.length; G++) lt(te[G], 2, Ht);
    function Xt(e) {
        return {
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            which: e.which || e.keyCode
        };
    }
    function Yt(e, n, t) {
        var r;
        if (!t) return !1;
        r = Xt(e);
        if (_t(t, "onKeyDown", r)) {
            Ft(e);
            return !0;
        }
        return !1;
    }
    function zt(e, n, t) {
        var r;
        if (!t) return !1;
        r = Xt(e);
        if (_t(t, "onKeyUp", r)) {
            Ft(e);
            return !0;
        }
        return !1;
    }
    function Gt(e, n, t) {
        var r;
        if (!t) return !1;
        if (e.which === 0) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (_t(t, "onKeyPress", r)) {
            Ft(e);
            return !0;
        }
        return !1;
    }
    lt("keydown", 50, Yt);
    lt("keyup", 50, zt);
    lt("keypress", 50, Gt);
    re = 13;
    ae = 750;
    ie = 500;
    de = 800;
    oe = 50;
    le = null;
    ce = "onClick";
    se = "onDoubleClick";
    function qt(e, n) {
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
    function Wt(n) {
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
    function $t(e) {
        var n = qn(e);
        return Wt(n);
    }
    function Zt(e) {
        var n;
        if (e.length) {
            for (n = e.length - 1; n >= 0; --n) {
                e[n].t.style.visibility = e[n].p;
            }
            return !0;
        }
        return !1;
    }
    function Jt(e, n) {
        e.push({
            t: n,
            p: n.style.visibility
        });
        n.style.visibility = "hidden";
    }
    function Qt(e, n, t) {
        var r = [], a;
        a = n;
        while ($t(a)) {
            Jt(r, a);
            a = document.elementFromPoint(e.x, e.y);
        }
        if (Zt(r)) {
            try {
                a.dispatchEvent(e);
            } catch (e) {
                return !1;
            }
            Ft(e);
            return !0;
        }
        return !1;
    }
    function er(e, n) {
        lt(e, 5, n);
    }
    ue = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (_n() && _n() < 11) {
        te = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (G = 0; G < te.length; ++G) {
            lt(te[G], 1, Qt);
        }
    }
    function nr(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function tr(e, n, t, r) {
        var a = [], i;
        i = t;
        while (Wt(r)) {
            Jt(a, i);
            i = document.elementFromPoint(e, n);
            r = qn(i);
        }
        Zt(a);
        return [ i, r ];
    }
    function rr(e) {
        return function n(t, r, a) {
            var i, d, o, l, c;
            if (Wt(a)) {
                i = tr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = t.button + 1;
            o = nr(t.pointerType);
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
            if (ct("!" + e, c, r, a)) {
                Ft(t);
                return !0;
            }
            return !1;
        };
    }
    function ar(e) {
        return function n(t, r, a) {
            var i = !1, d, o, l;
            for (d = 0; d < t.changedTouches.length; d++) {
                o = t.changedTouches[d];
                r = document.elementFromPoint(o.clientX, o.clientY);
                a = qn(r);
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
                if (ct("!" + e, l, r, a)) i = !0;
            }
            if (i) {
                Ft(t);
                return !0;
            }
            return !1;
        };
    }
    function ir(e) {
        return function n(t, r, a) {
            var i, d;
            r = document.elementFromPoint(t.clientX, t.clientY);
            a = qn(r);
            if (Wt(a)) {
                i = tr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = {
                id: 1,
                type: 0,
                x: t.clientX,
                y: t.clientY,
                button: gr(t),
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            if (ct("!" + e, d, r, a)) {
                Ft(t);
                return !0;
            }
            return !1;
        };
    }
    function dr() {
        er("mousedown", ir(ue[0]));
        er("mousemove", ir(ue[1]));
        er("mouseup", ir(ue[2]));
    }
    if (window.ontouchstart !== e) {
        er("touchstart", ar(ue[0]));
        er("touchmove", ar(ue[1]));
        er("touchend", ar(ue[2]));
        er("touchcancel", ar(ue[3]));
        dr();
    } else if (window.onpointerdown !== e) {
        for (G = 0; G < 4; G++) {
            fe = ue[G];
            er(fe.toLowerCase(), rr(fe));
        }
    } else if (window.onmspointerdown !== e) {
        for (G = 0; G < 4; G++) {
            fe = ue[G];
            er("@MS" + fe, rr(fe));
        }
    } else {
        dr();
    }
    for (he = 0; he < 4; he++) {
        (function(e) {
            var n = "on" + e;
            lt("!" + e, 50, function(e, t, r) {
                return qt(n, e) || _t(r, n, e) != null;
            });
        })(ue[he]);
    }
    pe = Sn();
    me = [];
    ve = -1;
    ge = 0;
    be = 0;
    ye = 0;
    xe = !1;
    function or(e, n, t) {
        return Math.abs(e - n) < t;
    }
    we = [];
    function lr(n) {
        var t, r, a, i, d, o, l, c;
        t = document.elementFromPoint(n.x, n.y);
        r = Gn(t);
        a = r.length == 0 ? e : r[r.length - 1];
        if (Wt(a)) {
            i = tr(n.x, n.y, t, a == null ? e : a);
            t = i[0];
            r = Gn(t);
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
    function cr() {
        return Object.keys(pe).length === 0;
    }
    function sr(e, n, t) {
        if (ve === -1 && cr()) {
            ve = e.id;
            ge = x();
            be = e.x;
            ye = e.y;
            xe = !1;
            lr(e);
        }
        pe[e.id] = e.type;
        if (ve !== e.id) {
            xe = !0;
        }
        return !1;
    }
    function ur(e, n, t) {
        if (e.type === 0 && e.button === 0 && pe[e.id] != null) {
            e.button = 1;
            ct("!PointerUp", e, n, t);
            e.button = 0;
        }
        if (ve === e.id) {
            lr(e);
            if (!or(be, e.x, re) || !or(ye, e.y, re)) xe = !0;
        } else if (cr()) {
            lr(e);
        }
        return !1;
    }
    Ce = 0;
    Se = 0;
    function fr(e) {
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
    function hr(e, n, t) {
        var r, a;
        delete pe[e.id];
        if (ve == e.id) {
            lr(e);
            ve = -1;
            if (e.type == 1 && !xe) {
                if (x() - ge < ae) {
                    ct("!PointerCancel", e, n, t);
                    fr(1);
                    r = qt(ce, e) || _t(t, ce, e) != null;
                    a = _n() ? de : ie;
                    me.push([ e.x, e.y, x() + a, r ? 1 : 0 ]);
                    return r;
                }
            }
        }
        return !1;
    }
    function pr(e, n, t) {
        delete pe[e.id];
        if (ve == e.id) {
            ve = -1;
        }
        return !1;
    }
    function mr(e, n, t) {
        var r, a, i;
        r = x();
        for (a = 0; a < me.length; a++) {
            i = me[a];
            if (i[2] < r) {
                me.splice(a, 1);
                a--;
                continue;
            }
            if (or(i[0], e.clientX, oe) && or(i[1], e.clientY, oe)) {
                me.splice(a, 1);
                if (i[3]) Ft(e);
                return !0;
            }
        }
        return !1;
    }
    ke = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Ie = [ sr, ur, hr, pr, mr ];
    for (G = 0; G < 5; G++) {
        lt(ke[G], 3, Ie[G]);
    }
    function vr(e) {
        return function(n, t, r) {
            if (ve != n.id && !cr()) return !1;
            if (qt(e, n) || _t(r, e, n)) {
                return !0;
            }
            return !1;
        };
    }
    Ne = [ "Down", "Move", "Up", "Up" ];
    for (G = 0; G < 4; G++) {
        lt(ke[G], 80, vr("onMouse" + Ne[G]));
    }
    function gr(e) {
        return e.which || e.button;
    }
    function br(e, n) {
        return function(t, r, a) {
            var i, d, o;
            if (F == 1 && (r.nodeName != "INPUT" || t.clientX != 0 || t.clientY != 0)) {
                r = document.elementFromPoint(t.clientX, t.clientY);
                a = qn(r);
                if (Wt(a)) {
                    i = tr(t.clientX, t.clientY, r, a);
                    r = i[0];
                    a = i[1];
                }
            }
            d = gr(t) || 1;
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
            if (fr(o.count) || qt(e, o) || _t(a, e, o)) {
                Ft(t);
                return !0;
            }
            return !1;
        };
    }
    function yr(e, n) {
        var t, r, a;
        t = document.elementFromPoint(e, n);
        r = qn(t);
        if (Wt(r)) {
            a = tr(e, n, t, r);
            r = a[1];
        }
        return r;
    }
    function xr(e, n, t) {
        var r, a;
        while (t) {
            r = t.style;
            if (r) {
                a = r.userSelect;
                if (a === "none") {
                    Ft(e);
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
    er("selectstart", xr);
    er("^click", br(ce));
    er("^dblclick", br(se));
    er("contextmenu", br("onContextMenu", !0));
    Ee = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function wr(e, n, t) {
        var r, a, i, d, o, l;
        if (Wt(t)) {
            r = tr(e.x, e.y, n, t);
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
        if (Ee == "mousewheel") {
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
        if (qt("onMouseWheel", l) || _t(t, "onMouseWheel", l)) {
            Ft(e);
            return !0;
        }
        return !1;
    }
    er(Ee, wr);
    _e = function(e, n) {
        var t = _n() ? de : ie;
        me.push([ e, n, x() + t, 1 ]);
    };
    De = e;
    Pe = e;
    Fe = [];
    function Cr(n) {
        var t, r, a, i, d, o;
        t = document.hasFocus() || n ? document.activeElement : e;
        if (t !== De) {
            De = t;
            r = Gn(De);
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
            Pe = Fe.length == 0 ? e : gn(Fe[Fe.length - 1]);
        }
        return !1;
    }
    function Sr() {
        setTimeout(function() {
            return Cr(!1);
        }, 10);
        return !1;
    }
    lt("^focus", 50, function() {
        return Cr(!0);
    });
    lt("^blur", 50, Sr);
    function kr() {
        return Pe;
    }
    Ae = [];
    function Ir(e, n, t) {
        var r, a;
        r = {
            node: t
        };
        for (a = 0; a < Ae.length; a++) {
            Ae[a](r);
        }
        return !1;
    }
    lt("^scroll", 10, Ir);
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
    Dn(Re);
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
        this.data = Sn();
        if (n >= 0) Xe[n] = this;
        Be.push(this);
    };
    function Nr() {
        var e;
        if (Me == null) {
            e = document.body.style;
            fn = e.cursor;
            hn = e[Ve];
            e[Ve] = "none";
            Me = wt(_r);
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
    function Er() {
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
            d = Er();
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
        Pr(e, this);
        this.destroy();
    };
    He.destroy = function() {
        var e, n;
        this.ended = !0;
        if (this.started) Pt("onDragEnd", this);
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
            Ct(Me);
            Me = null;
            n = document.body.style;
            n.cursor = fn;
            n[Ve] = hn;
        }
    };
    Xe = Sn();
    function Dr(e, n, t) {
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
            Fr(r, e);
            a = _t(t, "onDragStart", r);
            if (a) {
                i = Jn(a.me);
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
                    Pr(t, r);
                }
                Nr();
            } else {
                r.destroy();
            }
        }
        return !1;
    }
    function Pr(e, n) {
        n.overNode = e;
        n.targetCtx = _t(e, "onDragOver", n);
        if (n.targetCtx == null) {
            n.operation = 0;
        }
        Pt("onDrag", n);
    }
    function Fr(e, n) {
        e.shift = n.shift;
        e.ctrl = n.ctrl;
        e.alt = n.alt;
        e.meta = n.meta;
        e.x = n.x;
        e.y = n.y;
    }
    function Ar(e, n, t) {
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
        Fr(r, e);
        Pr(t, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function jr(e, n, t) {
        var r, a;
        r = Xe[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            Fr(r, e);
            Pr(t, r);
            a = r.targetCtx;
            if (a && _t(a.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            _e(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function Br(e, n, t) {
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
    function Or(e, n) {
        var t;
        e.shift = n.shiftKey;
        e.ctrl = n.ctrlKey;
        e.alt = n.altKey;
        e.meta = n.metaKey;
        e.x = n.clientX;
        e.y = n.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        t = yr(e.x, e.y);
        Pr(t, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    Ye = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function Mr(e, n, t) {
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
                l = Jn(o.me);
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
                Nr();
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
                if (!yn(S)) S = JSON.stringify(S);
                e.dataTransfer.setData(C, S);
            } catch (e) {}
        }
        Or(r, e);
        return !1;
    }
    function Rr(e, n) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][n];
    }
    function Tr(n, t, r) {
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
        Or(a, n);
        Rr(n, a.operation);
        if (a.operation != 0) {
            Ft(n);
            return !0;
        }
        return !1;
    }
    function Vr(e, n, t) {
        var r, a, i;
        r = e.clientX;
        a = e.clientY;
        i = Mt();
        if (Oe != null && (r === 0 && a === 0 || r < 0 || a < 0 || r >= i.width || a >= i.height)) {
            Oe.x = 0;
            Oe.y = 0;
            Oe.operation = 0;
            Pt("onDrag", Oe);
        }
        return !1;
    }
    function Kr(e, n, t) {
        if (Oe != null) {
            Oe.destroy();
        }
        return !1;
    }
    function Lr(e, n, t) {
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
        Or(r, e);
        c = r.targetCtx;
        if (c && _t(c.me, "onDrop", r)) {
            Rr(e, r.operation);
            r.destroy();
            Ft(e);
        } else {
            r.cancelDnd();
        }
        return !0;
    }
    function Ur(e, n, t) {
        Ft(e);
        return !0;
    }
    function Hr(e, n, t) {
        if (Be.length === 0) return !1;
        Ft(e);
        return !0;
    }
    lt("!PointerDown", 4, Dr);
    lt("!PointerMove", 4, Ar);
    lt("!PointerUp", 4, jr);
    lt("!PointerCancel", 4, Br);
    lt("selectstart", 4, Hr);
    lt("dragstart", 5, Mr);
    lt("dragover", 5, Tr);
    lt("dragend", 5, Kr);
    lt("drag", 5, Vr);
    lt("drop", 5, Lr);
    lt("dragenter", 5, Ur);
    lt("dragleave", 5, Ur);
    ze = function() {
        return Be;
    };
    Ge = -1;
    function Xr() {
        if (Ge >= 0) clearTimeout(Ge);
        Ge = -1;
        L();
        return !1;
    }
    lt("hashchange", 10, Xr);
    Sn();
    qe = Sn();
    Sn();
    Sn();
    We = [];
    $e = Sn();
    Ze = "";
    Je = !1;
    Qe = null;
    en = _n() === 9;
    nn = ht(qr);
    tn = /\:|\ |\>/;
    function Yr(e) {
        var n, t;
        n = tn.exec(e);
        if (!n) return qe[e].name;
        t = n.index;
        return qe[e.substring(0, t)].name + e.substring(t);
    }
    function zr(e, t) {
        var r = "", a;
        if (e) {
            if (n(e)) {
                for (a = 0; a < e.length; a++) {
                    if (a > 0) {
                        r += ",";
                    }
                    r += "." + Yr(e[a]) + "." + t;
                }
            } else {
                r = "." + Yr(e) + "." + t;
            }
        } else {
            r = "." + t;
        }
        return r;
    }
    function Gr(t, r, a, i) {
        var d, o, l, c, s, u;
        if (yn(a)) {
            d = qe[a];
            if (d === e) {
                throw new Error("Unknown style " + a);
            }
            Gr(t, r, d.style, d.pseudo);
        } else if (xn(a)) {
            a(t, r);
        } else if (n(a)) {
            for (o = 0; o < a.length; o++) {
                Gr(t, r, a[o], e);
            }
        } else if (typeof a === "object") {
            for (s in a) {
                if (!Object.prototype.hasOwnProperty.call(a, s)) continue;
                l = a[s];
                if (xn(l)) {
                    l = l(t, s);
                }
                t[s] = l;
            }
        }
        if (i != null && r != null) {
            for (u in i) {
                c = r[u];
                if (c === e) {
                    c = Sn();
                    r[u] = c;
                }
                Gr(c, e, i[u], e);
            }
        }
    }
    rn = !1;
    function qr() {
        var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        n = document.body.style;
        if (rn && _ >= 150) {
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
                    d = Jr(a, i, r.width, r.height, r.left, r.top);
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
                if (xn(h) && h.length === 0) {
                    p = h(), h = p[0], f = p[1];
                }
                if (yn(h) && f == null) {
                    c.realName = h;
                    pn(u != null, "Cannot link existing class to selector");
                    continue;
                }
                c.realName = u;
                m = Sn();
                v = Sn();
                Gr(e, v, e, f);
                Gr(m, v, h, e);
                g = null;
                if (m["pointerEvents"]) {
                    g = Sn();
                    g["pointerEvents"] = m["pointerEvents"];
                }
                if (en) {
                    if (m["userSelect"]) {
                        if (g == null) g = Sn();
                        g["userSelect"] = m["userSelect"];
                        delete m["userSelect"];
                    }
                }
                c.inlStyle = g;
                Dn(m);
                b = $r(m);
                if (b.length > 0) l += (u == null ? s : zr(s, u)) + " {" + b + "}\n";
                for (S in v) {
                    y = v[S];
                    Dn(y);
                    l += (u == null ? s + ":" + S : zr(s, u + ":" + S)) + " {" + $r(y) + "}\n";
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
    function Wr(e) {
        if (e === "cssFloat") return "float";
        return e.replace(an, "-$1").toLowerCase().replace(dn, "-ms-");
    }
    function $r(n) {
        var t = "", r, a;
        for (a in n) {
            r = n[a];
            if (r === e) continue;
            t += Wr(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        t = t.slice(0, -1);
        return t;
    }
    function Zr() {
        Je = !0;
        L();
    }
    on = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Jr(e, n, t, r, a, i) {
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
    function Qr(n) {
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
        deref: qn,
        getRoots: St,
        setInvalidate: xt,
        invalidateStyles: Zr,
        ignoreShouldChange: yt,
        setAfterFrame: pt,
        setBeforeFrame: ht,
        getDnds: ze,
        setBeforeInit: Et
    };
    Nt(function() {
        return "hello";
    });
})();

