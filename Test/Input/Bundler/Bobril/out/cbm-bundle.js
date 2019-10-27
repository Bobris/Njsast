!function(e) {
    "use strict";
    var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, _, I, N, E, D, P, F, A, j, O, B, M, R, T, V, K, U, L, H, X, Y, z, G, $, q, W, Z, J, Q, ee, ne, te, re, ae, ie, de, oe, le, ce, se, ue, fe, he, pe, me, ve, ge, be, ye, xe, we, Ce, Se, ke, _e, Ie, Ne, Ee, De, Pe, Fe, Ae, je, Oe, Be, Me, Re, Te, Ve, Ke, Ue, Le, He, Xe, Ye, ze, Ge, $e, qe, We, Ze, Je, Qe, en, nn, tn, rn, an, dn, on, ln, cn, sn, un, fn, hn, pn, mn, vn, gn, bn, yn, xn, wn, Cn, Sn, kn, _n, In, Nn, En, Dn, Pn, Fn, An, jn, On, Bn, Mn, Rn, Tn, Vn, Kn, Un, Ln, Hn, Xn, Yn, zn, Gn, $n, qn, Wn, Zn, Jn, Qn, et;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, n) {
        e.__proto__ = n;
    } || function(e, n) {
        var t;
        for (t in n) if (n.hasOwnProperty(t)) e[t] = n[t];
    };
    t = Object.assign || function(e) {
        var n, t, r, a;
        for (n = 1, t = arguments.length; n < t; n++) {
            r = arguments[n];
            for (a in r) if (Object.prototype.hasOwnProperty.call(r, a)) e[a] = r[a];
        }
        return e;
    };
    r;
    a;
    i;
    d = !1;
    o = function() {
        function n(n, t) {
            this.data = n;
            this.me = t;
            this.cfg = e;
            this.refs = e;
            this.disposables = e;
            this.$bobxCtx = e;
        }
        return n;
    }();
    function nt(e, n) {}
    l = Array.isArray;
    c = {};
    function tt(e) {
        return document.createTextNode(e);
    }
    function rt(e) {
        return document.createElement(e);
    }
    function at(n) {
        return n === null ? e : n;
    }
    function it(e) {
        return typeof e == "number";
    }
    function dt(e) {
        return typeof e == "string";
    }
    function ot(e) {
        return typeof e == "function";
    }
    function lt(e) {
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
    s = Object.assign;
    u = !1;
    f = !1;
    h = [];
    p = [];
    m = function(e, n, t, r) {
        if (t !== r) e[se] = t;
    };
    function ct(e) {
        var n = m;
        m = e;
        return n;
    }
    function st() {
        return Object.create(null);
    }
    v = [ "Webkit", "Moz", "ms", "O" ];
    g = document.createElement("div").style;
    function ut(e) {
        return dt(g[e]);
    }
    b = st();
    y = {
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
    function ft(n) {
        return function(t, r, a) {
            t[n] = r;
            t[a] = e;
        };
    }
    function ht(n) {
        return function(t, r, a) {
            if (it(r)) {
                t[n] = r + "px";
            } else {
                t[n] = r;
            }
            t[a] = e;
        };
    }
    function pt(e, n, t) {
        if (it(n)) e[t] = n + "px";
    }
    function mt() {
        return document.documentMode;
    }
    function vt(n) {
        var t, r, a, i, d, o, l, c;
        t = Object.keys(n);
        for (r = 0, a = t.length; r < a; r++) {
            i = t[r];
            d = b[i];
            o = n[i];
            if (o === e) continue;
            if (d === e) {
                if (ut(i)) {
                    d = y[i] === !0 ? null : pt;
                } else {
                    l = i.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (c = 0; c < v.length; c++) {
                        if (ut(v[c] + l)) {
                            d = (y[i] === !0 ? ft : ht)(v[c] + l);
                            break;
                        }
                    }
                    if (d === e) {
                        d = y[i] === !0 ? null : pt;
                    }
                }
                b[i] = d;
            }
            if (d !== null) d(n, o, i);
        }
    }
    function gt(e, n) {
        e[n] = "";
    }
    function bt(e, n, t) {
        var r;
        if (dt(t)) {
            r = t.length;
            if (r > 11 && t.substr(r - 11, 11) === " !important") {
                e.setProperty(n, t.substr(0, r - 11), "important");
                return;
            }
        }
        e[n] = t;
    }
    function yt(n, t, r) {
        var a, i, d;
        a = n.style;
        if (lt(t)) {
            vt(t);
            if (lt(r)) {
                for (i in r) {
                    if (!(i in t)) gt(a, i);
                }
                for (i in t) {
                    d = t[i];
                    if (d !== e) {
                        if (r[i] !== d) bt(a, i, d);
                    } else {
                        gt(a, i);
                    }
                }
            } else {
                if (r) a.cssText = "";
                for (i in t) {
                    d = t[i];
                    if (d !== e) bt(a, i, d);
                }
            }
        } else if (t) {
            a.cssText = t;
        } else {
            if (lt(r)) {
                for (i in r) {
                    gt(a, i);
                }
            } else if (r) {
                a.cssText = "";
            }
        }
    }
    function xt(e, n) {
        if (u) e.setAttribute("class", n); else e.className = n;
    }
    x = /^input$|^select$|^textarea$|^button$/;
    w = "tabindex";
    function wt(n, t, r, a, i) {
        var d = !1, o, l, c, s, f;
        if (r != null) for (o in r) {
            l = r[o];
            c = a[o];
            if (i && o === w) {
                l = -1;
                d = !0;
            } else if (o === se && !u) {
                if (ot(l)) {
                    a[oe] = l;
                    l = l();
                }
                s = c;
                f = l;
                a[o] = l;
                continue;
            }
            if (c !== l) {
                a[o] = l;
                if (u) {
                    if (o === "href") t.setAttributeNS("http://www.w3.org/1999/xlink", "href", l); else t.setAttribute(o, l);
                } else if (o in t && !(o === "list" || o === "form")) {
                    t[o] = l;
                } else t.setAttribute(o, l);
            }
        }
        if (i && !d && n.tag && x.test(n.tag)) {
            t.setAttribute(w, "-1");
            a[w] = -1;
        }
        if (r == null) {
            for (o in a) {
                if (a[o] !== e) {
                    if (i && o === w) continue;
                    if (o === oe) continue;
                    a[o] = e;
                    t.removeAttribute(o);
                }
            }
        } else {
            for (o in a) {
                if (a[o] !== e && !(o in r)) {
                    if (i && o === w) continue;
                    if (o === oe) continue;
                    a[o] = e;
                    t.removeAttribute(o);
                }
            }
        }
        if (f !== e) {
            m(t, n, f, s);
        }
        return a;
    }
    function Ct(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postInitDom;
            if (t) {
                h.push(t);
                p.push(e);
            }
        }
    }
    function St(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDom;
            if (t) {
                h.push(t);
                p.push(e);
            }
            t = n.postUpdateDomEverytime;
            if (t) {
                h.push(t);
                p.push(e);
            }
        }
    }
    function kt(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDomEverytime;
            if (t) {
                h.push(t);
                p.push(e);
            }
        }
    }
    function _t(n) {
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
    function It(e, n) {
        var t, r;
        if (e == null) return;
        if (ot(e)) {
            e(n);
            return;
        }
        t = e[0];
        r = t.refs;
        if (r == null) {
            r = st();
            t.refs = r;
        }
        r[e[1]] = n;
    }
    C = [];
    S = null;
    function Nt(n, t, r, a) {
        var i, d, o, l, c, s, h, p, m, v, g, b, y, x, w, C;
        i = {
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
        d = u;
        o = f;
        l = i.component;
        It(i.ref, i);
        if (l) {
            if (l.ctxClass) {
                c = new l.ctxClass(i.data || {}, i);
                if (c.data === e) c.data = i.data || {};
                if (c.me === e) c.me = i;
            } else {
                c = {
                    data: i.data || {},
                    me: i,
                    cfg: e
                };
            }
            c.cfg = n.cfg === e ? _t(t) : n.cfg;
            i.ctx = c;
            Xn = c;
            if (l.init) {
                l.init(c, i);
            }
            if (L !== U) L(n, 0);
            if (l.render) {
                l.render(c, i);
            }
            Xn = e;
        } else {}
        s = i.tag;
        if (s === "-") {
            i.tag = e;
            i.children = e;
            return i;
        }
        h = i.children;
        p = !1;
        if (it(h)) {
            h = "" + h;
            i.children = h;
        }
        if (s === e) {
            if (dt(h)) {
                m = tt(h);
                i.element = m;
                r.insertBefore(m, a);
            } else {
                Dt(i, r, a);
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(i.ctx, i);
                }
                Ct(i);
            }
            return i;
        }
        if (s === "/") {
            v = h;
            if (v === "") {} else if (a == null) {
                g = r.lastChild;
                r.insertAdjacentHTML("beforeend", v);
                i.element = [];
                if (g) {
                    g = g.nextSibling;
                } else {
                    g = r.firstChild;
                }
                while (g) {
                    i.element.push(g);
                    g = g.nextSibling;
                }
            } else {
                m = a;
                b = a.previousSibling;
                y = !1;
                x = r;
                if (!m.insertAdjacentHTML) {
                    m = x.insertBefore(rt("i"), m);
                    y = !0;
                }
                m.insertAdjacentHTML("beforebegin", v);
                if (b) {
                    b = b.nextSibling;
                } else {
                    b = x.firstChild;
                }
                w = [];
                while (b !== m) {
                    w.push(b);
                    b = b.nextSibling;
                }
                i.element = w;
                if (y) {
                    x.removeChild(m);
                }
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(i.ctx, i);
                }
                Ct(i);
            }
            return i;
        }
        if (u || s === "svg") {
            m = document.createElementNS("http://www.w3.org/2000/svg", s);
            p = s === "foreignObject";
            u = !p;
        } else {
            m = rt(s);
        }
        r.insertBefore(m, a);
        i.element = m;
        Dt(i, m, null);
        if (l) {
            if (l.postRender) {
                l.postRender(i.ctx, i);
            }
        }
        if (f && S === i) f = !1;
        if (p) u = !0;
        if (i.attrs || f) i.attrs = wt(i, m, i.attrs, {}, f);
        if (i.style) yt(m, i.style, e);
        C = i.className;
        if (C) xt(m, C);
        u = d;
        f = o;
        Ct(i);
        return i;
    }
    function Et(n) {
        if (n === !1 || n === !0 || n === null) return e;
        if (dt(n)) {
            return {
                children: n
            };
        }
        if (it(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function Dt(e, n, t) {
        var r, a, i, d;
        r = e.children;
        if (!r) return;
        if (!l(r)) {
            if (dt(r)) {
                n.textContent = r;
                return;
            }
            r = [ r ];
        }
        r = r.slice(0);
        a = 0;
        i = r.length;
        while (a < i) {
            d = r[a];
            if (l(d)) {
                r.splice.apply(r, [ a, 1 ].concat(d));
                i = r.length;
                continue;
            }
            d = Et(d);
            if (d == null) {
                r.splice(a, 1);
                i--;
                continue;
            }
            r[a] = Nt(d, e, n, t);
            a++;
        }
        e.children = r;
    }
    function Pt(e) {
        var n, t, r, a, i, d, o, c;
        It(e.ref, null);
        n = e.children;
        if (l(n)) {
            for (t = 0, r = n.length; t < r; t++) {
                Pt(n[t]);
            }
        }
        a = e.component;
        if (a) {
            i = e.ctx;
            Xn = i;
            if (L !== U) L(e, 3);
            if (a.destroy) a.destroy(i, e, e.element);
            d = i.disposables;
            if (l(d)) {
                for (o = d.length; o-- > 0; ) {
                    c = d[o];
                    if (ot(c)) c(i); else c.dispose();
                }
            }
        }
    }
    function Ft(e) {
        var n, t, r, a, i, d, o;
        n = e.element;
        if (l(n)) {
            t = n[0].parentNode;
            if (t) {
                for (r = 0; r < n.length; r++) {
                    t.removeChild(n[r]);
                }
            }
        } else if (n != null) {
            a = n.parentNode;
            if (a) a.removeChild(n);
        } else {
            i = e.children;
            if (l(i)) {
                for (d = 0, o = i.length; d < o; d++) {
                    Ft(i[d]);
                }
            }
        }
    }
    function At(e) {
        Pt(e);
        Ft(e);
    }
    k = st();
    function jt(n, t, r, a) {
        var i, d, o, c, s;
        i = n.element;
        d = n.children;
        if (l(i)) {
            for (o = 0; o < i.length; o++) {
                if (i[o] === t) {
                    a.push(n);
                    if (l(d)) {
                        return d;
                    }
                    return null;
                }
            }
        } else if (i == null) {
            if (l(d)) {
                for (c = 0; c < d.length; c++) {
                    s = jt(d[c], t, r, a);
                    if (s !== e) {
                        a.splice(r, 0, n);
                        return s;
                    }
                }
            }
        } else if (i === t) {
            a.push(n);
            if (l(d)) {
                return d;
            }
            return null;
        }
        return e;
    }
    function Ot(n) {
        var t = [], r, a, i, d, o, l, c, s, u, f, h;
        if (n == null) return t;
        r = Object.keys(k);
        a = r.map(function(e) {
            return k[e].e || document.body;
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
                c = k[r[d]].n;
                if (c === e) continue;
                s = jt(c, l, t.length, t);
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
                s = jt(h, l, t.length, t);
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
    function Bt(e) {
        var n, t;
        n = Ot(e);
        t = null;
        while (t === null) {
            t = n.pop();
        }
        return t;
    }
    function Mt(n, t, r) {
        if (r) {
            if (r.postRender) {
                Xn = t.ctx;
                r.postRender(Xn, n, t);
                Xn = e;
            }
        }
        t.data = n.data;
        St(t);
    }
    function Rt(n, t, r) {
        var a, i;
        Xn = e;
        if (l(n.children)) {
            a = u;
            i = f;
            if (n.tag === "svg") {
                u = !0;
            } else if (u && n.tag === "foreignObject") u = !1;
            if (f && S === n) f = !1;
            Qt(n.children, n.element || t, n.element != null ? null : r);
            u = a;
            f = i;
        }
        kt(n);
    }
    function Tt(n, t, r, a, i, d) {
        var o, h = !1, p, m, v, g, b, y, x, w, C, k, _, I;
        o = n.component;
        p = t.ctx;
        if (o != null && p != null) {
            m = !1;
            if (p[P] === M) {
                i = Math.max(i, p[F]);
                m = !0;
            }
            if (o.id !== t.component.id) {
                h = !0;
            } else {
                Xn = p;
                if (n.cfg !== e) p.cfg = n.cfg; else p.cfg = _t(t.parent);
                if (o.shouldChange) if (!o.shouldChange(p, n, t) && !q && !m) {
                    Rt(t, r, a);
                    return t;
                }
                p.data = n.data || {};
                t.component = o;
                if (L !== U) L(n, d ? 2 : 1);
                if (o.render) {
                    t.orig = n;
                    n = s({}, n);
                    t.cfg = e;
                    if (n.cfg !== e) n.cfg = e;
                    o.render(p, n, t);
                    if (n.cfg !== e) {
                        if (t.cfg === e) t.cfg = n.cfg; else s(t.cfg, n.cfg);
                    }
                }
                Xn = e;
            }
        } else {
            if (t.orig === n) {
                return t;
            }
            t.orig = n;
        }
        v = n.children;
        g = t.children;
        b = n.tag;
        if (b === "-") {
            Rt(t, r, a);
            return t;
        }
        y = u;
        x = f;
        if (it(v)) {
            v = "" + v;
        }
        if (h || o != null && p == null || o == null && p != null && p.me.component !== c) {} else if (b === "/") {
            if (t.tag === "/" && g === v) {
                Mt(n, t, o);
                return t;
            }
        } else if (b === t.tag) {
            if (b === e) {
                if (dt(v) && dt(g)) {
                    if (v !== g) {
                        w = t.element;
                        w.textContent = v;
                        t.children = v;
                    }
                } else {
                    if (f && S === t) f = !1;
                    if (i <= 0) {
                        if (l(g)) Qt(t.children, r, a);
                    } else {
                        t.children = zt(r, v, g, t, a, i - 1);
                    }
                    u = y;
                    f = x;
                }
                Mt(n, t, o);
                return t;
            } else {
                C = !1;
                if (b === "svg") {
                    u = !0;
                } else if (u && b === "foreignObject") {
                    C = !0;
                    u = !1;
                }
                if (f && S === t) f = !1;
                w = t.element;
                if (dt(v) && !l(g)) {
                    if (v !== g) {
                        w.textContent = v;
                        g = v;
                    }
                } else {
                    if (i <= 0) {
                        if (l(g)) Qt(t.children, w, a);
                    } else {
                        g = zt(w, v, g, t, null, i - 1);
                    }
                }
                t.children = g;
                if (C) u = !0;
                Mt(n, t, o);
                if (t.attrs || n.attrs || f) t.attrs = wt(t, w, n.attrs, t.attrs || {}, f);
                yt(w, n.style, t.style);
                t.style = n.style;
                k = n.className;
                if (k !== t.className) {
                    xt(w, k || "");
                    t.className = k;
                }
                u = y;
                f = x;
                return t;
            }
        }
        _ = t.element;
        if (l(_)) _ = _[0];
        if (_ == null) _ = r; else _ = _.parentNode;
        I = Nt(n, t.parent, _, Vt(t));
        At(t);
        return I;
    }
    function Vt(n) {
        var t, r, a;
        if (n === e) return null;
        t = n.element;
        if (t != null) {
            if (l(t)) return t[0];
            return t;
        }
        r = n.children;
        if (!l(r)) return null;
        for (a = 0; a < r.length; a++) {
            t = Vt(r[a]);
            if (t) return t;
        }
        return null;
    }
    function Kt(e, n, t, r) {
        var a, i;
        while (++n < t) {
            a = e[n];
            if (a == null) continue;
            i = Vt(a);
            if (i != null) return i;
        }
        return r;
    }
    function Ut() {
        var n, t, r;
        n = p.length;
        for (t = 0; t < n; t++) {
            r = p[t];
            Xn = r.ctx;
            h[t].call(r.component, Xn, r, r.element);
        }
        Xn = e;
        h = [];
        p = [];
    }
    function Lt(e, n, t, r, a, i, d) {
        n[t] = Tt(e, n[t], i, Kt(n, t, r, a), d);
    }
    function Ht(e, n, t) {
        var r, a, i;
        r = e.element;
        if (r != null) {
            if (l(r)) {
                for (a = 0; a < r.length; a++) {
                    n.insertBefore(r[a], t);
                }
            } else n.insertBefore(r, t);
            return;
        }
        i = e.children;
        if (!l(i)) return;
        for (a = 0; a < i.length; a++) {
            Ht(i[a], n, t);
        }
    }
    function Xt(e, n, t, r, a) {
        var i, d, o;
        i = Kt(e, n, t, r);
        d = e[n];
        o = Vt(d);
        if (o != null && o !== i) {
            Ht(d, a, i);
        }
    }
    function Yt(e, n, t, r, a, i, d) {
        var o, l, c;
        o = Kt(n, t, r, a);
        l = n[t];
        c = Vt(l);
        if (c != null && c !== o) {
            Ht(l, i, o);
        }
        n[t] = Tt(e, l, i, o, d);
    }
    function zt(e, n, t, r, a, i) {
        var d, o, c, s;
        if (n == null) n = [];
        if (!l(n)) {
            n = [ n ];
        }
        if (t == null) t = [];
        if (!l(t)) {
            if (e.firstChild) e.removeChild(e.firstChild);
            t = [];
        }
        d = n;
        d = d.slice(0);
        o = d.length;
        for (c = 0; c < o; ) {
            s = d[c];
            if (l(s)) {
                d.splice.apply(d, [ c, 1 ].concat(s));
                o = d.length;
                continue;
            }
            s = Et(s);
            if (s == null) {
                d.splice(c, 1);
                o--;
                continue;
            }
            d[c] = s;
            c++;
        }
        return Gt(e, d, t, r, a, i);
    }
    function Gt(n, t, r, a, i, d) {
        var o, l, c, s = 0, u = 0, f, h, p, m, v, g, b, y, x, w, C;
        o = t.length;
        l = r.length;
        c = l;
        while (s < o && u < c) {
            if (t[s].key === r[u].key) {
                Lt(t[s], r, u, l, i, n, d);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (t[o - 1].key === r[c - 1].key) {
                    o--;
                    c--;
                    Lt(t[o], r, c, l, i, n, d);
                    if (s < o && u < c) continue;
                }
                break;
            }
            if (s < o && u < c) {
                if (t[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    Yt(t[s], r, u, l, i, n, d);
                    s++;
                    u++;
                    continue;
                }
                if (t[o - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    o--;
                    Yt(t[o], r, c, l, i, n, d);
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
                r.splice(u, 0, Nt(t[s], a, n, Kt(r, u - 1, l, i)));
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
                At(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = st();
        h = st();
        p = s;
        m = u;
        v = 0;
        for (;u < c; u++) {
            g = r[u];
            b = g.key;
            if (b != null) {
                nt(!(b in f));
                f[b] = u;
            } else v--;
        }
        y = -v - v;
        for (;s < o; s++) {
            g = t[s];
            b = g.key;
            if (b != null) {
                nt(!(b in h));
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
                r.splice(u, 0, Nt(t[s], a, n, Kt(r, u - 1, l, i)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(w in h)) {
                At(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                Lt(t[s], r, u, l, i, n, d);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                Yt(t[s], r, u, l, i, n, d);
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
                At(r[u]);
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
                r.splice(u, 0, Nt(t[s], a, n, Kt(r, u - 1, l, i)));
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
                Lt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u = s;
                continue;
            }
            if (b != null) {
                nt(s === u);
                if (y === 0 && v < 0) {
                    while (!0) {
                        At(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        v++;
                        nt(u !== c, "there still need to exist key node");
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == null) u++;
                nt(b === r[u].key);
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Xt(r, s, l, i, n);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Yt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, Nt(t[s], a, n, Kt(r, s - 1, l, i)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            At(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    _ = !1;
    I = window.requestAnimationFrame;
    if (I) {
        I(function(e) {
            if (e === +e) _ = !0;
        });
    }
    N = Date.now || function() {
        return new Date().getTime();
    };
    E = N();
    D = 0;
    function $t(e) {
        var n;
        if (_) {
            I(e);
        } else {
            n = 50 / 3 + D - N();
            if (n < 0) n = 0;
            window.setTimeout(function() {
                D = N();
                e(D - E);
            }, n);
        }
    }
    P = "$invalidated";
    F = "$deepness";
    A = !0;
    j = !1;
    O = !0;
    B = 0;
    M = 0;
    R = 0;
    T = 0;
    V = {};
    function qt(e, n, t) {
        var r;
        if (Yn == null) Yn = {};
        r = Yn[e] || [];
        r.push({
            priority: n,
            callback: t
        });
        Yn[e] = r;
    }
    function Wt(e, n, t, r) {
        var a, i;
        a = V[e];
        if (a) for (i = 0; i < a.length; i++) {
            if (a[i](n, t, r)) return !0;
        }
        return !1;
    }
    K = 0;
    function Zt(e, n) {
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
            a = Bt(r);
            K++;
            Wt(n, t, r, a);
            K--;
            if (K == 0 && z) rr();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, a, t);
    }
    function Jt() {
        var n, t, r, a, i, d;
        if (Yn === e) return;
        n = Object.keys(Yn);
        for (t = 0; t < n.length; t++) {
            r = n[t];
            a = Yn[r];
            a = a.sort(function(e, n) {
                return e.priority - n.priority;
            });
            V[r] = a.map(function(e) {
                return e.callback;
            });
        }
        Yn = e;
        i = document.body;
        for (d = 0; d < n.length; d++) {
            Zt(i, n[d]);
        }
    }
    function Qt(e, n, t) {
        var r, a, i, d, o, c;
        r = e.length;
        for (a = 0; a < r; a++) {
            i = e[a];
            d = i.ctx;
            if (d != null && d[P] === M) {
                e[a] = Tt(i.orig, i, n, t, d[F], !0);
            } else if (l(i.children)) {
                o = u;
                c = f;
                if (f && S === i) f = !1;
                if (i.tag === "svg") u = !0; else if (u && i.tag === "foreignObject") u = !1;
                Qt(i.children, i.element || n, Kt(e, a, r, t));
                kt(i);
                u = o;
                f = c;
            }
        }
    }
    U = function() {};
    L = U;
    H = function() {};
    X = function() {};
    Y = function() {};
    function er(e) {
        var n = H;
        H = e;
        return n;
    }
    function nr(e) {
        var n = Y;
        Y = e;
        return n;
    }
    function tr(e, n, t) {
        var r, a, i;
        while (n != null) {
            if (e === n) return !0;
            r = n.parent;
            if (r == null) {
                for (a = 0; a < t.length; a++) {
                    i = k[t[a]];
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
    z = !1;
    function rr() {
        z = !1;
        ir(N() - E);
    }
    function ar(e) {
        j = !1;
        ir(e);
    }
    G = Ka({
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
    function ir(n) {
        var t, r, a, i, d, o, c, s, u;
        T = N();
        Jt();
        X();
        M++;
        q = $;
        $ = !1;
        B = n;
        H();
        S = C.length === 0 ? null : C[C.length - 1];
        f = !1;
        t = !1;
        if (A) {
            A = !1;
            t = !0;
        }
        zn = Object.keys(k);
        for (r = 0; r < zn.length; r++) {
            a = k[zn[r]];
            if (!a) continue;
            i = a.n;
            d = null;
            for (o = r + 1; o < zn.length; o++) {
                c = k[zn[o]];
                if (c === e) continue;
                d = Vt(c.n);
                if (d != null) break;
            }
            if (S) f = !tr(S, a.p, zn);
            if (a.e === e) a.e = document.body;
            if (i) {
                if (t || i.ctx[P] === M) {
                    s = G(a);
                    Tt(s, i, a.e, d, t ? 1000000 : i.ctx[F]);
                } else {
                    if (l(a.c)) Qt(a.c, a.e, d);
                }
            } else {
                s = G(a);
                i = Nt(s, e, a.e, d);
                a.n = i;
            }
            a.c = i.children;
        }
        zn = e;
        Ut();
        u = k["0"];
        Y(u ? u.c : null);
        R = N() - T;
    }
    $ = !1;
    q = !1;
    function dr() {
        $ = !0;
        W();
    }
    function or(e) {
        var n = W;
        W = e;
        return n;
    }
    W = function(n, t) {
        if (n != null) {
            if (t == e) t = 1000000;
            if (n[P] !== M + 1) {
                n[P] = M + 1;
                n[F] = t;
            } else {
                if (t > n[F]) n[F] = t;
            }
        } else {
            A = !0;
        }
        if (j || O) return;
        j = !0;
        $t(ar);
    };
    Z = 0;
    function lr(n, t, r) {
        var a;
        Z++;
        a = "" + Z;
        k[a] = {
            f: n,
            e: t,
            c: [],
            p: r,
            n: e
        };
        if (zn != null) {
            zn.push(a);
        } else {
            fr();
        }
        return a;
    }
    function cr(e) {
        var n = k[e];
        if (!n) return;
        if (n.n) At(n.n);
        delete k[e];
    }
    function sr() {
        return k;
    }
    function ur() {
        O = !1;
        W();
    }
    J = ur;
    function fr() {
        O = !0;
        J();
        J = ur;
    }
    function hr(n, t) {
        nt(zn == null, "init should not be called from render");
        cr("0");
        k["0"] = {
            f: n,
            e: t,
            c: [],
            p: e,
            n: e
        };
        fr();
    }
    function pr(e) {
        var n = J;
        J = function() {
            e(n);
        };
    }
    function mr(n, t, r) {
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
    function vr(n, t, r) {
        var a, i, d, o, c, s;
        if (!n) return e;
        a = n.component;
        if (a) {
            i = n.ctx;
            d = a[t];
            if (d) {
                if (d.call(a, i, r)) return i;
            }
            d = a.shouldStopBroadcast;
            if (d) {
                if (d.call(a, i, t, r)) return e;
            }
        }
        o = n.children;
        if (l(o)) {
            for (c = 0; c < o.length; c++) {
                s = vr(o[c], t, r);
                if (s != null) return s;
            }
        }
        return e;
    }
    function gr(n, t) {
        var r, a, i, d;
        r = Object.keys(k);
        for (a = 0; a < r.length; a++) {
            i = k[r[a]].n;
            if (i != null) {
                d = vr(i, n, t);
                if (d != null) return d;
            }
        }
        return e;
    }
    Q = {};
    function br(e) {
        var n = e.preventDefault;
        if (n) n.call(e); else e.returnValue = !1;
    }
    function yr(e) {
        var n, t;
        e = e.slice(0);
        for (n = 0; n < e.length; n++) {
            t = e[n];
            if (l(t)) {
                e[n] = yr(t);
            } else if (lt(t)) {
                e[n] = xr(t);
            }
        }
        return e;
    }
    function xr(e) {
        var n, t;
        n = s({}, e);
        if (n.attrs) {
            n.attrs = s({}, n.attrs);
        }
        if (lt(n.style)) {
            n.style = s({}, n.style);
        }
        t = n.children;
        if (t) {
            if (l(t)) {
                n.children = yr(t);
            } else if (lt(t)) {
                n.children = xr(t);
            }
        }
        return n;
    }
    function wr(e, n) {
        b[e] = n;
    }
    ee = null;
    ne = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function Cr() {
        ee = null;
        W();
        return !1;
    }
    te = [ "resize", "orientationchange" ];
    for (re = 0; re < te.length; re++) qt(te[re], 10, Cr);
    ae = window.document.documentElement;
    ie = /Android/i.test(navigator.userAgent);
    function Sr() {
        var e, n, t, r, a, i;
        if (ee == null) {
            e = ae.clientWidth;
            n = ae.clientHeight;
            t = window.orientation;
            r = n >= e;
            if (t == null) t = r ? 0 : 90;
            if (ie) {
                a = Math.abs(t) % 180 === 90;
                if (Gn == null) {
                    Gn = a === r;
                } else {
                    r = a === Gn;
                }
            }
            i = 0;
            while (e > ne[+!r][i]) i++;
            ee = {
                width: e,
                height: n,
                orientation: t,
                deviceCategory: i,
                portrait: r
            };
        }
        return ee;
    }
    de = function() {
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
            function n(e, n) {
                return function() {
                    e.apply(n, arguments);
                };
            }
            function t(e) {
                var n = this;
                if (this.s === null) {
                    this.d.push(e);
                    return;
                }
                de(function() {
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
            function r() {
                var e, n;
                for (e = 0, n = this.d.length; e < n; e++) {
                    t.call(this, this.d[e]);
                }
                this.d = null;
            }
            function a(e) {
                this.s = !1;
                this.v = e;
                r.call(this);
            }
            function i(e, n, t) {
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
            function d(e) {
                var t;
                try {
                    if (e === this) throw new TypeError("Promise self resolve");
                    if (Object(e) === e) {
                        t = e.then;
                        if (typeof t === "function") {
                            i(n(t, e), n(d, this), n(a, this));
                            return;
                        }
                    }
                    this.s = !0;
                    this.v = e;
                    r.call(this);
                } catch (e) {
                    a.call(this, e);
                }
            }
            function o(e) {
                this.s = null;
                this.v = null;
                this.d = [];
                i(e, n(d, this), n(a, this));
            }
            o.prototype.then = function(e, n) {
                var r = this;
                return new o(function(a, i) {
                    t.call(r, [ e, n, a, i ]);
                });
            };
            o.prototype["catch"] = function(n) {
                return this.then(e, n);
            };
            o.all = function() {
                var e = [].slice.call(arguments.length === 1 && l(arguments[0]) ? arguments[0] : arguments);
                return new o(function(n, t) {
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
            o.resolve = function(e) {
                if (e && typeof e === "object" && e.constructor === o) {
                    return e;
                }
                return new o(function(n) {
                    n(e);
                });
            };
            o.reject = function(e) {
                return new o(function(n, t) {
                    t(e);
                });
            };
            o.race = function(e) {
                return new o(function(n, t) {
                    var r, a;
                    for (r = 0, a = e.length; r < a; r++) {
                        e[r].then(n, t);
                    }
                });
            };
            window["Promise"] = o;
        })();
    }
    if (mt() === 9) {
        (function() {
            var e = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
            function n(e, n) {
                var t;
                if (e.zoom == null) e.zoom = "1";
                t = e.filter;
                e.filter = t == null ? n : t + " " + n;
            }
            wr("background", function(t, r, a) {
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
                    wr("background", t);
                })();
            }
        })();
    }
    oe = "b$value";
    le = "b$selStart";
    ce = "b$selEnd";
    se = "value";
    function kr(e) {
        var n = e.type;
        return n === "checkbox" || n === "radio";
    }
    function _r(e, n) {
        var t, r;
        t = e.length;
        if (t !== n.length) return !1;
        for (r = 0; r < t; r++) {
            if (e[r] !== n[r]) return !1;
        }
        return !0;
    }
    function Ir(e, n) {
        var t;
        for (t = 0; t < e.length; t++) {
            if (e[t] === n) return !0;
        }
        return !1;
    }
    function Nr(e) {
        var n = [], t;
        for (t = 0; t < e.length; t++) {
            if (e[t].selected) n.push(e[t].value);
        }
        return n;
    }
    ue = ct(function(n, t, r, a) {
        var i, d, o, l, s, u, f, h, p, m, v;
        i = n.tagName;
        d = i === "SELECT";
        o = i === "INPUT" || i === "TEXTAREA";
        if (!o && !d) {
            ue(n, t, r, a);
            return;
        }
        if (t.ctx === e) {
            t.ctx = {
                me: t
            };
            t.component = c;
        }
        if (a === e) {
            t.ctx[oe] = r;
        }
        l = d && n.multiple;
        s = !1;
        if (l) {
            u = n.options;
            f = Nr(u);
            if (!_r(r, f)) {
                if (a === e || _r(f, a) || !_r(r, t.ctx[oe])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = Ir(r, u[h].value);
                    }
                    f = Nr(u);
                    if (_r(f, r)) {
                        s = !0;
                    }
                } else {
                    s = !0;
                }
            }
        } else if (o || d) {
            if (o && kr(n)) {
                p = n.checked;
                if (r !== p) {
                    if (a === e || p === a || r !== t.ctx[oe]) {
                        n.checked = r;
                    } else {
                        s = !0;
                    }
                }
            } else {
                m = d && n.size < 2;
                v = n[se];
                if (r !== v) {
                    if (a === e || v === a || r !== t.ctx[oe]) {
                        if (d) {
                            if (r === "") {
                                n.selectedIndex = m ? 0 : -1;
                            } else {
                                n[se] = r;
                            }
                            if (r !== "" || m) {
                                v = n[se];
                                if (r !== v) {
                                    s = !0;
                                }
                            }
                        } else {
                            n[se] = r;
                        }
                    } else {
                        s = !0;
                    }
                }
            }
        }
        if (s) {
            Er(e, n, t);
        } else {
            t.ctx[oe] = r;
        }
    });
    function Er(n, t, r) {
        var a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, _, I, N, E, D, P;
        if (t && t.nodeName === "OPTION") {
            t = document.activeElement;
            r = Bt(t);
        }
        if (!r) {
            return !1;
        }
        a = r.component;
        i = r.attrs && r.attrs[oe];
        d = a && a.onChange != null;
        o = i || d;
        l = a && a.onSelectionChange != null;
        if (!o && !l) return !1;
        c = r.ctx;
        s = t.tagName;
        u = s === "SELECT";
        f = u && t.multiple;
        if (o && f) {
            h = Nr(t.options);
            if (!_r(c[oe], h)) {
                c[oe] = h;
                if (i) i(h);
                if (d) a.onChange(c, h);
            }
        } else if (o && kr(t)) {
            if (n && n.type === "change") {
                setTimeout(function() {
                    Er(e, t, r);
                }, 10);
                return !1;
            }
            if (t.type === "radio") {
                p = document.getElementsByName(t.name);
                for (m = 0; m < p.length; m++) {
                    v = p[m];
                    g = Bt(v);
                    if (!g) continue;
                    b = r.attrs[oe];
                    y = g.component;
                    x = y && y.onChange != null;
                    if (!b && !x) continue;
                    w = g.ctx;
                    C = v.checked;
                    if (w[oe] !== C) {
                        w[oe] = C;
                        if (b) b(C);
                        if (x) y.onChange(w, C);
                    }
                }
            } else {
                S = t.checked;
                if (c[oe] !== S) {
                    c[oe] = S;
                    if (i) i(S);
                    if (d) a.onChange(c, S);
                }
            }
        } else {
            if (o) {
                k = t.value;
                if (c[oe] !== k) {
                    c[oe] = k;
                    if (i) i(k);
                    if (d) a.onChange(c, k);
                }
            }
            if (l) {
                _ = t.selectionStart;
                I = t.selectionEnd;
                N = t.selectionDirection;
                E = !1;
                D = c[le];
                if (N == null) {
                    if (I === D) E = !0;
                } else if (N === "backward") {
                    E = !0;
                }
                if (E) {
                    P = _;
                    _ = I;
                    I = P;
                }
                Dr(r, _, I);
            }
        }
        return !1;
    }
    function Dr(e, n, t) {
        var r, a;
        r = e.component;
        a = e.ctx;
        if (r && (a[le] !== n || a[ce] !== t)) {
            a[le] = n;
            a[ce] = t;
            if (r.onSelectionChange) r.onSelectionChange(a, {
                startPosition: n,
                endPosition: t
            });
        }
    }
    function Pr(e, n, t) {
        var r = ua();
        if (r) Er(e, r.element, r);
        return !1;
    }
    te = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (re = 0; re < te.length; re++) qt(te[re], 10, Er);
    fe = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (re = 0; re < fe.length; re++) qt(fe[re], 2, Pr);
    function Fr(e) {
        return {
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            which: e.which || e.keyCode
        };
    }
    function Ar(e, n, t) {
        var r;
        if (!t) return !1;
        r = Fr(e);
        if (mr(t, "onKeyDown", r)) {
            br(e);
            return !0;
        }
        return !1;
    }
    function jr(e, n, t) {
        var r;
        if (!t) return !1;
        r = Fr(e);
        if (mr(t, "onKeyUp", r)) {
            br(e);
            return !0;
        }
        return !1;
    }
    function Or(e, n, t) {
        var r;
        if (!t) return !1;
        if (e.which === 0) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (mr(t, "onKeyPress", r)) {
            br(e);
            return !0;
        }
        return !1;
    }
    qt("keydown", 50, Ar);
    qt("keyup", 50, jr);
    qt("keypress", 50, Or);
    he = 13;
    pe = 750;
    me = 500;
    ve = 800;
    ge = 50;
    be = null;
    ye = "onClick";
    xe = "onDoubleClick";
    function Br(e, n) {
        var t, r;
        if (be == null) {
            return !1;
        }
        t = be.me.component[e];
        if (!t) {
            return !1;
        }
        $n = !0;
        r = t(be, n);
        $n = !1;
        return r;
    }
    function Mr(n) {
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
    function Rr(e) {
        var n = Bt(e);
        return Mr(n);
    }
    function Tr(e) {
        var n;
        if (e.length) {
            for (n = e.length - 1; n >= 0; --n) {
                e[n].t.style.visibility = e[n].p;
            }
            return !0;
        }
        return !1;
    }
    function Vr(e, n) {
        e.push({
            t: n,
            p: n.style.visibility
        });
        n.style.visibility = "hidden";
    }
    function Kr(e, n, t) {
        var r = [], a;
        a = n;
        while (Rr(a)) {
            Vr(r, a);
            a = document.elementFromPoint(e.x, e.y);
        }
        if (Tr(r)) {
            try {
                a.dispatchEvent(e);
            } catch (e) {
                return !1;
            }
            br(e);
            return !0;
        }
        return !1;
    }
    function Ur(e, n) {
        qt(e, 5, n);
    }
    we = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (mt() && mt() < 11) {
        fe = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (re = 0; re < fe.length; ++re) {
            qt(fe[re], 1, Kr);
        }
    }
    function Lr(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function Hr(e, n, t, r) {
        var a = [], i;
        i = t;
        while (Mr(r)) {
            Vr(a, i);
            i = document.elementFromPoint(e, n);
            r = Bt(i);
        }
        Tr(a);
        return [ i, r ];
    }
    function Xr(e) {
        return function n(t, r, a) {
            var i, d, o, l, c;
            if (Mr(a)) {
                i = Hr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = t.button + 1;
            o = Lr(t.pointerType);
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
            if (Wt("!" + e, c, r, a)) {
                br(t);
                return !0;
            }
            return !1;
        };
    }
    function Yr(e) {
        return function n(t, r, a) {
            var i = !1, d, o, l;
            for (d = 0; d < t.changedTouches.length; d++) {
                o = t.changedTouches[d];
                r = document.elementFromPoint(o.clientX, o.clientY);
                a = Bt(r);
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
                if (Wt("!" + e, l, r, a)) i = !0;
            }
            if (i) {
                br(t);
                return !0;
            }
            return !1;
        };
    }
    function zr(e) {
        return function n(t, r, a) {
            var i, d;
            r = document.elementFromPoint(t.clientX, t.clientY);
            a = Bt(r);
            if (Mr(a)) {
                i = Hr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = {
                id: 1,
                type: 0,
                x: t.clientX,
                y: t.clientY,
                button: aa(t),
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            if (Wt("!" + e, d, r, a)) {
                br(t);
                return !0;
            }
            return !1;
        };
    }
    function Gr() {
        Ur("mousedown", zr(we[0]));
        Ur("mousemove", zr(we[1]));
        Ur("mouseup", zr(we[2]));
    }
    if (window.ontouchstart !== e) {
        Ur("touchstart", Yr(we[0]));
        Ur("touchmove", Yr(we[1]));
        Ur("touchend", Yr(we[2]));
        Ur("touchcancel", Yr(we[3]));
        Gr();
    } else if (window.onpointerdown !== e) {
        for (re = 0; re < 4; re++) {
            Ce = we[re];
            Ur(Ce.toLowerCase(), Xr(Ce));
        }
    } else if (window.onmspointerdown !== e) {
        for (re = 0; re < 4; re++) {
            Ce = we[re];
            Ur("@MS" + Ce, Xr(Ce));
        }
    } else {
        Gr();
    }
    for (Se = 0; Se < 4; Se++) {
        (function(e) {
            var n = "on" + e;
            qt("!" + e, 50, function(e, t, r) {
                return Br(n, e) || mr(r, n, e) != null;
            });
        })(we[Se]);
    }
    ke = st();
    _e = [];
    Ie = -1;
    Ne = 0;
    Ee = 0;
    De = 0;
    Pe = !1;
    function $r(e, n, t) {
        return Math.abs(e - n) < t;
    }
    Fe = [];
    function qr(n) {
        var t, r, a, i, d, o, l, c;
        qn = n;
        t = document.elementFromPoint(n.x, n.y);
        r = Ot(t);
        a = r.length == 0 ? e : r[r.length - 1];
        if (Mr(a)) {
            i = Hr(n.x, n.y, t, a == null ? e : a);
            t = i[0];
            r = Ot(t);
        }
        mr(a, "onMouseOver", n);
        d = 0;
        while (d < Fe.length && d < r.length && Fe[d] === r[d]) d++;
        o = Fe.length;
        if (o > 0) {
            l = Fe[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, n);
            }
        }
        while (o > d) {
            o--;
            l = Fe[o];
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
        Fe = r;
        if (o > 0) {
            l = Fe[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, n);
            }
        }
        return !1;
    }
    function Wr() {
        return Object.keys(ke).length === 0;
    }
    function Zr(e, n, t) {
        if (Ie === -1 && Wr()) {
            Ie = e.id;
            Ne = N();
            Ee = e.x;
            De = e.y;
            Pe = !1;
            qr(e);
        }
        ke[e.id] = e.type;
        if (Ie !== e.id) {
            Pe = !0;
        }
        return !1;
    }
    function Jr(e, n, t) {
        if (e.type === 0 && e.button === 0 && ke[e.id] != null) {
            e.button = 1;
            Wt("!PointerUp", e, n, t);
            e.button = 0;
        }
        if (Ie === e.id) {
            qr(e);
            if (!$r(Ee, e.x, he) || !$r(De, e.y, he)) Pe = !0;
        } else if (Wr()) {
            qr(e);
        }
        return !1;
    }
    Ae = 0;
    je = 0;
    function Qr(e) {
        var n;
        if (je == 0) return !1;
        n = N();
        if (n < Ae + 1000 && e >= je) {
            Ae = n;
            je = e;
            return !0;
        }
        je = 0;
        return !1;
    }
    function ea(e, n, t) {
        var r, a;
        delete ke[e.id];
        if (Ie == e.id) {
            qr(e);
            Ie = -1;
            if (e.type == 1 && !Pe) {
                if (N() - Ne < pe) {
                    Wt("!PointerCancel", e, n, t);
                    Qr(1);
                    r = Br(ye, e) || mr(t, ye, e) != null;
                    a = mt() ? ve : me;
                    _e.push([ e.x, e.y, N() + a, r ? 1 : 0 ]);
                    return r;
                }
            }
        }
        return !1;
    }
    function na(e, n, t) {
        delete ke[e.id];
        if (Ie == e.id) {
            Ie = -1;
        }
        return !1;
    }
    function ta(e, n, t) {
        var r, a, i;
        r = N();
        for (a = 0; a < _e.length; a++) {
            i = _e[a];
            if (i[2] < r) {
                _e.splice(a, 1);
                a--;
                continue;
            }
            if ($r(i[0], e.clientX, ge) && $r(i[1], e.clientY, ge)) {
                _e.splice(a, 1);
                if (i[3]) br(e);
                return !0;
            }
        }
        return !1;
    }
    Oe = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Be = [ Zr, Jr, ea, na, ta ];
    for (re = 0; re < 5; re++) {
        qt(Oe[re], 3, Be[re]);
    }
    function ra(e) {
        return function(n, t, r) {
            if (Ie != n.id && !Wr()) return !1;
            if (Br(e, n) || mr(r, e, n)) {
                return !0;
            }
            return !1;
        };
    }
    Me = [ "Down", "Move", "Up", "Up" ];
    for (re = 0; re < 4; re++) {
        qt(Oe[re], 80, ra("onMouse" + Me[re]));
    }
    function aa(e) {
        return e.which || e.button;
    }
    function ia(e, n) {
        return function(t, r, a) {
            var i, d, o;
            if (K == 1 && (r.nodeName != "INPUT" || t.clientX != 0 || t.clientY != 0)) {
                r = document.elementFromPoint(t.clientX, t.clientY);
                a = Bt(r);
                if (Mr(a)) {
                    i = Hr(t.clientX, t.clientY, r, a);
                    r = i[0];
                    a = i[1];
                }
            }
            d = aa(t) || 1;
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
            if (e == xe) o.count = 2;
            if (Qr(o.count) || Br(e, o) || mr(a, e, o)) {
                br(t);
                return !0;
            }
            return !1;
        };
    }
    function da(e, n) {
        var t, r, a;
        t = document.elementFromPoint(e, n);
        r = Bt(t);
        if (Mr(r)) {
            a = Hr(e, n, t, r);
            r = a[1];
        }
        return r;
    }
    function oa(e, n, t) {
        var r, a;
        while (t) {
            r = t.style;
            if (r) {
                a = r.userSelect;
                if (a === "none") {
                    br(e);
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
    Ur("selectstart", oa);
    Ur("^click", ia(ye));
    Ur("^dblclick", ia(xe));
    Ur("contextmenu", ia("onContextMenu", !0));
    Re = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function la(e, n, t) {
        var r, a, i, d, o, l;
        if (Mr(t)) {
            r = Hr(e.x, e.y, n, t);
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
        if (Re == "mousewheel") {
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
        if (Br("onMouseWheel", l) || mr(t, "onMouseWheel", l)) {
            br(e);
            return !0;
        }
        return !1;
    }
    Ur(Re, la);
    Te = function(e, n) {
        var t = mt() ? ve : me;
        _e.push([ e, n, N() + t, 1 ]);
    };
    Ve = e;
    Ke = e;
    Ue = [];
    function ca(n) {
        var t, r, a, i, d, o;
        t = document.hasFocus() || n ? document.activeElement : e;
        if (t !== Ve) {
            Ve = t;
            r = Ot(Ve);
            a = 0;
            while (a < Ue.length && a < r.length && Ue[a] === r[a]) a++;
            i = Ue.length - 1;
            if (i >= a) {
                d = Ue[i];
                if (d) {
                    o = d.component;
                    if (o && o.onBlur) o.onBlur(d.ctx);
                }
                i--;
            }
            while (i >= a) {
                d = Ue[i];
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
            Ue = r;
            Ke = Ue.length == 0 ? e : at(Ue[Ue.length - 1]);
        }
        return !1;
    }
    function sa() {
        setTimeout(function() {
            return ca(!1);
        }, 10);
        return !1;
    }
    qt("^focus", 50, function() {
        return ca(!0);
    });
    qt("^blur", 50, sa);
    function ua() {
        return Ke;
    }
    Le = [];
    function fa(e, n, t) {
        var r, a;
        r = {
            node: t
        };
        for (a = 0; a < Le.length; a++) {
            Le[a](r);
        }
        return !1;
    }
    qt("^scroll", 10, fa);
    He = /^(?:html)$/i;
    Xe = /^(?:auto)$|^(?:scroll)$/i;
    Ye = function() {
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
    }();
    ze = 0;
    Ge = [];
    $e = null;
    qe = null;
    We = {
        userSelect: ""
    };
    vt(We);
    Ze = Object.keys(We);
    Je = Ze[Ze.length - 1];
    Qe = function(n) {
        this.id = ++ze;
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
        this.data = st();
        if (n >= 0) rn[n] = this;
        Ge.push(this);
    };
    function ha() {
        var e;
        if (qe == null) {
            e = document.body.style;
            Zn = e.cursor;
            Jn = e[Je];
            e[Je] = "none";
            qe = lr(ma);
        }
    }
    en = {
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
    function pa() {
        var e = "no-drop", n;
        if (Ge.length !== 0) {
            n = Ge[0];
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
    nn = {
        render: function(e, n) {
            var t = [], r, a, i, d;
            for (r = 0; r < Ge.length; r++) {
                a = Ge[r];
                if (a.beforeDrag) continue;
                if (a.dragView != null && (a.x != 0 || a.y != 0)) {
                    t.push({
                        key: "" + a.id,
                        data: a,
                        component: en
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
            d = pa();
            if (d && i.cursor !== d) i.cursor = d;
            n.children = t;
        },
        onDrag: function(e) {
            W(e);
            return !1;
        }
    };
    function ma() {
        return {
            component: nn
        };
    }
    tn = Qe.prototype;
    tn.setOperation = function(e) {
        this.operation = e;
    };
    tn.setDragNodeView = function(e) {
        this.dragView = e;
    };
    tn.addData = function(e, n) {
        this.data[e] = n;
        return !0;
    };
    tn.listData = function() {
        return Object.keys(this.data);
    };
    tn.hasData = function(n) {
        return this.data[n] !== e;
    };
    tn.getData = function(e) {
        return this.data[e];
    };
    tn.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    tn.cancelDnd = function() {
        ga(e, this);
        this.destroy();
    };
    tn.destroy = function() {
        var e, n;
        this.ended = !0;
        if (this.started) gr("onDragEnd", this);
        delete rn[this.pointerid];
        for (e = 0; e < Ge.length; e++) {
            if (Ge[e] === this) {
                Ge.splice(e, 1);
                break;
            }
        }
        if ($e === this) {
            $e = null;
        }
        if (Ge.length === 0 && qe != null) {
            cr(qe);
            qe = null;
            n = document.body.style;
            n.cursor = Zn;
            n[Je] = Jn;
        }
    };
    rn = st();
    function va(e, n, t) {
        var r, a, i, d, o;
        r = rn[e.id];
        if (r) {
            r.cancelDnd();
        }
        if (e.button <= 1) {
            r = new Qe(e.id);
            r.startX = e.x;
            r.startY = e.y;
            r.lastX = e.x;
            r.lastY = e.y;
            r.overNode = t;
            ba(r, e);
            a = mr(t, "onDragStart", r);
            if (a) {
                i = Vt(a.me);
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
                    ga(t, r);
                }
                ha();
            } else {
                r.destroy();
            }
        }
        return !1;
    }
    function ga(e, n) {
        n.overNode = e;
        n.targetCtx = mr(e, "onDragOver", n);
        if (n.targetCtx == null) {
            n.operation = 0;
        }
        gr("onDrag", n);
    }
    function ba(e, n) {
        e.shift = n.shift;
        e.ctrl = n.ctrl;
        e.alt = n.alt;
        e.meta = n.meta;
        e.x = n.x;
        e.y = n.y;
    }
    function ya(e, n, t) {
        var r = rn[e.id];
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
        ba(r, e);
        ga(t, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function xa(e, n, t) {
        var r, a;
        r = rn[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            ba(r, e);
            ga(t, r);
            a = r.targetCtx;
            if (a && mr(a.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            Te(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function wa(e, n, t) {
        var r = rn[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function Ca(e, n) {
        var t;
        e.shift = n.shiftKey;
        e.ctrl = n.ctrlKey;
        e.alt = n.altKey;
        e.meta = n.metaKey;
        e.x = n.clientX;
        e.y = n.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        t = da(e.x, e.y);
        ga(t, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    an = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function Sa(e, n, t) {
        var r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        r = $e;
        if (r != null) {
            r.destroy();
        }
        a = Object.keys(rn);
        if (a.length > 0) {
            r = rn[a[0]];
            r.system = !0;
            $e = r;
        } else {
            i = e.clientX;
            d = e.clientY;
            r = new Qe(-1);
            r.system = !0;
            $e = r;
            r.x = i;
            r.y = d;
            r.lastX = i;
            r.lastY = d;
            r.startX = i;
            r.startY = d;
            o = mr(t, "onDragStart", r);
            if (o) {
                l = Vt(o.me);
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
                ha();
            } else {
                r.destroy();
                return !1;
            }
        }
        r.beforeDrag = !1;
        u = an[r.enabledOperations];
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
                if (!dt(S)) S = JSON.stringify(S);
                e.dataTransfer.setData(C, S);
            } catch (e) {}
        }
        Ca(r, e);
        return !1;
    }
    function ka(e, n) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][n];
    }
    function _a(n, t, r) {
        var a, i, d, o, l, c, s;
        a = $e;
        if (a == null) {
            a = new Qe(-1);
            a.system = !0;
            $e = a;
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
                if (an[d] === o) break;
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
        Ca(a, n);
        ka(n, a.operation);
        if (a.operation != 0) {
            br(n);
            return !0;
        }
        return !1;
    }
    function Ia(e, n, t) {
        var r, a, i;
        r = e.clientX;
        a = e.clientY;
        i = Sr();
        if ($e != null && (r === 0 && a === 0 || r < 0 || a < 0 || r >= i.width || a >= i.height)) {
            $e.x = 0;
            $e.y = 0;
            $e.operation = 0;
            gr("onDrag", $e);
        }
        return !1;
    }
    function Na(e, n, t) {
        if ($e != null) {
            $e.destroy();
        }
        return !1;
    }
    function Ea(e, n, t) {
        var r, a, i, d, o, l, c;
        r = $e;
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
        Ca(r, e);
        c = r.targetCtx;
        if (c && mr(c.me, "onDrop", r)) {
            ka(e, r.operation);
            r.destroy();
            br(e);
        } else {
            r.cancelDnd();
        }
        return !0;
    }
    function Da(e, n, t) {
        br(e);
        return !0;
    }
    function Pa(e, n, t) {
        if (Ge.length === 0) return !1;
        br(e);
        return !0;
    }
    qt("!PointerDown", 4, va);
    qt("!PointerMove", 4, ya);
    qt("!PointerUp", 4, xa);
    qt("!PointerCancel", 4, wa);
    qt("selectstart", 4, Pa);
    qt("dragstart", 5, Sa);
    qt("dragover", 5, _a);
    qt("dragend", 5, Na);
    qt("drag", 5, Ia);
    qt("drop", 5, Ea);
    qt("dragenter", 5, Da);
    qt("dragleave", 5, Da);
    dn = function() {
        return Ge;
    };
    on = -1;
    function Fa() {
        if (on >= 0) clearTimeout(on);
        on = -1;
        W();
        return !1;
    }
    qt("hashchange", 10, Fa);
    ln = 0;
    cn = "";
    sn = {};
    un = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
    fn = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
    hn = {};
    pn = [];
    mn = st();
    vn = [];
    gn = [];
    bn = /.*(?:\:|\/).*/;
    yn = !0;
    xn = null;
    wn = null;
    Cn = 0;
    Sn = 1;
    kn = st();
    _n = st();
    In = st();
    Nn = [];
    En = st();
    Dn = "";
    Pn = !1;
    Fn = null;
    An = 0;
    jn = mt() === 9;
    On = er(Ba);
    Bn = /\:|\ |\>/;
    function Aa(e) {
        var n, t;
        n = Bn.exec(e);
        if (!n) return kn[e].name;
        t = n.index;
        return kn[e.substring(0, t)].name + e.substring(t);
    }
    function ja(e, n) {
        var t = "", r;
        if (e) {
            if (l(e)) {
                for (r = 0; r < e.length; r++) {
                    if (r > 0) {
                        t += ",";
                    }
                    t += "." + Aa(e[r]) + "." + n;
                }
            } else {
                t = "." + Aa(e) + "." + n;
            }
        } else {
            t = "." + n;
        }
        return t;
    }
    function Oa(n, t, r, a) {
        var i, d, o, c, s, u;
        if (dt(r)) {
            i = kn[r];
            if (i === e) {
                throw new Error("Unknown style " + r);
            }
            Oa(n, t, i.style, i.pseudo);
        } else if (ot(r)) {
            r(n, t);
        } else if (l(r)) {
            for (d = 0; d < r.length; d++) {
                Oa(n, t, r[d], e);
            }
        } else if (typeof r === "object") {
            for (s in r) {
                if (!Object.prototype.hasOwnProperty.call(r, s)) continue;
                o = r[s];
                if (ot(o)) {
                    o = o(n, s);
                }
                n[s] = o;
            }
        }
        if (a != null && t != null) {
            for (u in a) {
                c = t[u];
                if (c === e) {
                    c = st();
                    t[u] = c;
                }
                Oa(c, e, a[u], e);
            }
        }
    }
    Mn = !1;
    function Ba() {
        var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        n = document.body.style;
        if (Mn && B >= 150) {
            n.opacity = "1";
            Mn = !1;
        }
        if (Pn) {
            if (M === 1 && "webkitAnimation" in n) {
                Mn = !0;
                n.opacity = "0";
                setTimeout(W, 200);
            }
            for (t = 0; t < Nn.length; t++) {
                r = Nn[t];
                a = En[r.url];
                if (a == null) continue;
                i = r.color();
                if (i !== r.lastColor) {
                    r.lastColor = i;
                    if (r.width == null) r.width = a.width;
                    if (r.height == null) r.height = a.height;
                    d = Va(a, i, r.width, r.height, r.left, r.top);
                    o = kn[r.styleId];
                    o.style = {
                        backgroundImage: "url(" + d + ")",
                        width: r.width,
                        height: r.height,
                        backgroundPosition: 0
                    };
                }
            }
            l = Dn;
            for (C in kn) {
                c = kn[C];
                s = c.parent;
                u = c.name;
                f = c.pseudo;
                h = c.style;
                if (ot(h) && h.length === 0) {
                    p = h(), h = p[0], f = p[1];
                }
                if (dt(h) && f == null) {
                    c.realName = h;
                    nt(u != null, "Cannot link existing class to selector");
                    continue;
                }
                c.realName = u;
                m = st();
                v = st();
                Oa(e, v, e, f);
                Oa(m, v, h, e);
                g = null;
                if (m["pointerEvents"]) {
                    g = st();
                    g["pointerEvents"] = m["pointerEvents"];
                }
                if (jn) {
                    if (m["userSelect"]) {
                        if (g == null) g = st();
                        g["userSelect"] = m["userSelect"];
                        delete m["userSelect"];
                    }
                }
                c.inlStyle = g;
                vt(m);
                b = Ra(m);
                if (b.length > 0) l += (u == null ? s : ja(s, u)) + " {" + b + "}\n";
                for (S in v) {
                    y = v[S];
                    vt(y);
                    l += (u == null ? s + ":" + S : ja(s, u + ":" + S)) + " {" + Ra(y) + "}\n";
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
            if (Fn != null) {
                w.replaceChild(x, Fn);
            } else {
                w.appendChild(x);
            }
            Fn = x;
            Pn = !1;
        }
        On();
    }
    Rn = /([A-Z])/g;
    Tn = /^ms-/;
    function Ma(e) {
        if (e === "cssFloat") return "float";
        return e.replace(Rn, "-$1").toLowerCase().replace(Tn, "-ms-");
    }
    function Ra(n) {
        var t = "", r, a;
        for (a in n) {
            r = n[a];
            if (r === e) continue;
            t += Ma(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        t = t.slice(0, -1);
        return t;
    }
    function Ta() {
        Pn = !0;
        W();
    }
    Vn = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Va(e, n, t, r, a, i) {
        var d, o, l, c, s, u, f, h, p, m, v, g;
        d = document.createElement("canvas");
        d.width = t;
        d.height = r;
        o = d.getContext("2d");
        o.drawImage(e, -a, -i);
        l = o.getImageData(0, 0, t, r);
        c = l.data;
        s = Vn.exec(n);
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
    Kn = 0;
    Un = "b@funcId";
    Ln = !1;
    Hn = window["bobrilBPath"] || "bundle.png";
    function Ka(n) {
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
        deref: Bt,
        getRoots: sr,
        setInvalidate: or,
        invalidateStyles: Ta,
        ignoreShouldChange: dr,
        setAfterFrame: nr,
        setBeforeFrame: er,
        getDnds: dn,
        setBeforeInit: pr
    };
    hr(function() {
        return "hello";
    });
}();

