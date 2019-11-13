!function(e) {
    "use strict";
    var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, _, N, E, D, P, F, A, j, O, B, M, R, T, V, K, U, L, H, X, Y, z, G, $, q, W, Z, J, Q, ee, ne, te, re, ae, ie, de, oe, le, ce, se, ue, fe, he, pe, me, ve, ge, be, ye, xe, we, Ce, Se, ke, Ie, _e, Ne, Ee, De, Pe, Fe, Ae, je, Oe, Be, Me, Re, Te, Ve, Ke, Ue, Le, He, Xe, Ye, ze, Ge, $e, qe, We, Ze, Je, Qe, en, nn, tn, rn, an, dn, on, ln, cn, sn, un, fn, hn, pn, mn, vn, gn, bn, yn, xn, wn, Cn, Sn, kn, In, _n, Nn, En, Dn, Pn, Fn, An, jn, On, Bn, Mn, Rn, Tn, Vn, Kn, Un, Ln, Hn, Xn, Yn, zn, Gn, $n, qn, Wn, Zn, Jn, Qn;
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
    i = !1;
    d = function() {
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
    function et(e, n) {}
    o = Array.isArray;
    l = {};
    function nt(e) {
        return document.createTextNode(e);
    }
    function tt(e) {
        return document.createElement(e);
    }
    function rt(n) {
        return n === null ? e : n;
    }
    function at(e) {
        return typeof e == "number";
    }
    function it(e) {
        return typeof e == "string";
    }
    function dt(e) {
        return typeof e == "function";
    }
    function ot(e) {
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
    c = Object.assign;
    s = !1;
    u = !1;
    f = [];
    h = [];
    p = function(e, n, t, r) {
        if (t !== r) e[ce] = t;
    };
    function lt(e) {
        var n = p;
        p = e;
        return n;
    }
    function ct() {
        return Object.create(null);
    }
    m = [ "Webkit", "Moz", "ms", "O" ];
    v = document.createElement("div").style;
    function st(e) {
        return it(v[e]);
    }
    g = ct();
    b = {
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
    function ut(n) {
        return function(t, r, a) {
            t[n] = r;
            t[a] = e;
        };
    }
    function ft(n) {
        return function(t, r, a) {
            if (at(r)) {
                t[n] = r + "px";
            } else {
                t[n] = r;
            }
            t[a] = e;
        };
    }
    function ht(e, n, t) {
        if (at(n)) e[t] = n + "px";
    }
    function pt() {
        return document.documentMode;
    }
    function mt(n) {
        var t, r, a, i, d, o, l, c;
        t = Object.keys(n);
        for (r = 0, a = t.length; r < a; r++) {
            i = t[r];
            d = g[i];
            o = n[i];
            if (o === e) continue;
            if (d === e) {
                if (st(i)) {
                    d = b[i] === !0 ? null : ht;
                } else {
                    l = i.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (c = 0; c < m.length; c++) {
                        if (st(m[c] + l)) {
                            d = (b[i] === !0 ? ut : ft)(m[c] + l);
                            break;
                        }
                    }
                    if (d === e) {
                        d = b[i] === !0 ? null : ht;
                    }
                }
                g[i] = d;
            }
            if (d !== null) d(n, o, i);
        }
    }
    function vt(e, n) {
        e[n] = "";
    }
    function gt(e, n, t) {
        var r;
        if (it(t)) {
            r = t.length;
            if (r > 11 && t.substr(r - 11, 11) === " !important") {
                e.setProperty(n, t.substr(0, r - 11), "important");
                return;
            }
        }
        e[n] = t;
    }
    function bt(n, t, r) {
        var a, i, d;
        a = n.style;
        if (ot(t)) {
            mt(t);
            if (ot(r)) {
                for (i in r) {
                    if (!(i in t)) vt(a, i);
                }
                for (i in t) {
                    d = t[i];
                    if (d !== e) {
                        if (r[i] !== d) gt(a, i, d);
                    } else {
                        vt(a, i);
                    }
                }
            } else {
                if (r) a.cssText = "";
                for (i in t) {
                    d = t[i];
                    if (d !== e) gt(a, i, d);
                }
            }
        } else if (t) {
            a.cssText = t;
        } else {
            if (ot(r)) {
                for (i in r) {
                    vt(a, i);
                }
            } else if (r) {
                a.cssText = "";
            }
        }
    }
    function yt(e, n) {
        if (s) e.setAttribute("class", n); else e.className = n;
    }
    y = /^input$|^select$|^textarea$|^button$/;
    x = "tabindex";
    function xt(n, t, r, a, i) {
        var d = !1, o, l, c, u, f;
        if (r != null) for (o in r) {
            l = r[o];
            c = a[o];
            if (i && o === x) {
                l = -1;
                d = !0;
            } else if (o === ce && !s) {
                if (dt(l)) {
                    a[de] = l;
                    l = l();
                }
                u = c;
                f = l;
                a[o] = l;
                continue;
            }
            if (c !== l) {
                a[o] = l;
                if (s) {
                    if (o === "href") t.setAttributeNS("http://www.w3.org/1999/xlink", "href", l); else t.setAttribute(o, l);
                } else if (o in t && !(o === "list" || o === "form")) {
                    t[o] = l;
                } else t.setAttribute(o, l);
            }
        }
        if (i && !d && n.tag && y.test(n.tag)) {
            t.setAttribute(x, "-1");
            a[x] = -1;
        }
        if (r == null) {
            for (o in a) {
                if (a[o] !== e) {
                    if (i && o === x) continue;
                    if (o === de) continue;
                    a[o] = e;
                    t.removeAttribute(o);
                }
            }
        } else {
            for (o in a) {
                if (a[o] !== e && !(o in r)) {
                    if (i && o === x) continue;
                    if (o === de) continue;
                    a[o] = e;
                    t.removeAttribute(o);
                }
            }
        }
        if (f !== e) {
            p(t, n, f, u);
        }
        return a;
    }
    function wt(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postInitDom;
            if (t) {
                f.push(t);
                h.push(e);
            }
        }
    }
    function Ct(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDom;
            if (t) {
                f.push(t);
                h.push(e);
            }
            t = n.postUpdateDomEverytime;
            if (t) {
                f.push(t);
                h.push(e);
            }
        }
    }
    function St(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDomEverytime;
            if (t) {
                f.push(t);
                h.push(e);
            }
        }
    }
    function kt(n) {
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
        if (dt(e)) {
            e(n);
            return;
        }
        t = e[0];
        r = t.refs;
        if (r == null) {
            r = ct();
            t.refs = r;
        }
        r[e[1]] = n;
    }
    w = [];
    C = null;
    function _t(n, t, r, a) {
        var i, d, o, l, c, f, h, p, m, v, g, b, y, x, w, S;
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
        d = s;
        o = u;
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
            c.cfg = n.cfg === e ? kt(t) : n.cfg;
            i.ctx = c;
            Hn = c;
            if (l.init) {
                l.init(c, i);
            }
            if (U !== K) U(n, 0);
            if (l.render) {
                l.render(c, i);
            }
            Hn = e;
        } else {}
        f = i.tag;
        if (f === "-") {
            i.tag = e;
            i.children = e;
            return i;
        }
        h = i.children;
        p = !1;
        if (at(h)) {
            h = "" + h;
            i.children = h;
        }
        if (f === e) {
            if (it(h)) {
                m = nt(h);
                i.element = m;
                r.insertBefore(m, a);
            } else {
                Et(i, r, a);
            }
            if (l) {
                if (l.postRender) {
                    l.postRender(i.ctx, i);
                }
                wt(i);
            }
            return i;
        }
        if (f === "/") {
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
                    m = x.insertBefore(tt("i"), m);
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
                wt(i);
            }
            return i;
        }
        if (s || f === "svg") {
            m = document.createElementNS("http://www.w3.org/2000/svg", f);
            p = f === "foreignObject";
            s = !p;
        } else {
            m = tt(f);
        }
        r.insertBefore(m, a);
        i.element = m;
        Et(i, m, null);
        if (l) {
            if (l.postRender) {
                l.postRender(i.ctx, i);
            }
        }
        if (u && C === i) u = !1;
        if (p) s = !0;
        if (i.attrs || u) i.attrs = xt(i, m, i.attrs, {}, u);
        if (i.style) bt(m, i.style, e);
        S = i.className;
        if (S) yt(m, S);
        s = d;
        u = o;
        wt(i);
        return i;
    }
    function Nt(n) {
        if (n === !1 || n === !0 || n === null) return e;
        if (it(n)) {
            return {
                children: n
            };
        }
        if (at(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function Et(e, n, t) {
        var r, a, i, d;
        r = e.children;
        if (!r) return;
        if (!o(r)) {
            if (it(r)) {
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
            if (o(d)) {
                r.splice.apply(r, [ a, 1 ].concat(d));
                i = r.length;
                continue;
            }
            d = Nt(d);
            if (d == null) {
                r.splice(a, 1);
                i--;
                continue;
            }
            r[a] = _t(d, e, n, t);
            a++;
        }
        e.children = r;
    }
    function Dt(e) {
        var n, t, r, a, i, d, l, c;
        It(e.ref, null);
        n = e.children;
        if (o(n)) {
            for (t = 0, r = n.length; t < r; t++) {
                Dt(n[t]);
            }
        }
        a = e.component;
        if (a) {
            i = e.ctx;
            Hn = i;
            if (U !== K) U(e, 3);
            if (a.destroy) a.destroy(i, e, e.element);
            d = i.disposables;
            if (o(d)) {
                for (l = d.length; l-- > 0; ) {
                    c = d[l];
                    if (dt(c)) c(i); else c.dispose();
                }
            }
        }
    }
    function Pt(e) {
        var n, t, r, a, i, d, l;
        n = e.element;
        if (o(n)) {
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
            if (o(i)) {
                for (d = 0, l = i.length; d < l; d++) {
                    Pt(i[d]);
                }
            }
        }
    }
    function Ft(e) {
        Dt(e);
        Pt(e);
    }
    S = ct();
    function At(n, t, r, a) {
        var i, d, l, c, s;
        i = n.element;
        d = n.children;
        if (o(i)) {
            for (l = 0; l < i.length; l++) {
                if (i[l] === t) {
                    a.push(n);
                    if (o(d)) {
                        return d;
                    }
                    return null;
                }
            }
        } else if (i == null) {
            if (o(d)) {
                for (c = 0; c < d.length; c++) {
                    s = At(d[c], t, r, a);
                    if (s !== e) {
                        a.splice(r, 0, n);
                        return s;
                    }
                }
            }
        } else if (i === t) {
            a.push(n);
            if (o(d)) {
                return d;
            }
            return null;
        }
        return e;
    }
    function jt(n) {
        var t = [], r, a, i, d, o, l, c, s, u, f, h;
        if (n == null) return t;
        r = Object.keys(S);
        a = r.map(function(e) {
            return S[e].e || document.body;
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
                c = S[r[d]].n;
                if (c === e) continue;
                s = At(c, l, t.length, t);
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
                s = At(h, l, t.length, t);
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
    function Ot(e) {
        var n, t;
        n = jt(e);
        t = null;
        while (t === null) {
            t = n.pop();
        }
        return t;
    }
    function Bt(n, t, r) {
        if (r) {
            if (r.postRender) {
                Hn = t.ctx;
                r.postRender(Hn, n, t);
                Hn = e;
            }
        }
        t.data = n.data;
        Ct(t);
    }
    function Mt(n, t, r) {
        var a, i;
        Hn = e;
        if (o(n.children)) {
            a = s;
            i = u;
            if (n.tag === "svg") {
                s = !0;
            } else if (s && n.tag === "foreignObject") s = !1;
            if (u && C === n) u = !1;
            Jt(n.children, n.element || t, n.element != null ? null : r);
            s = a;
            u = i;
        }
        St(n);
    }
    function Rt(n, t, r, a, i, d) {
        var f, h = !1, p, m, v, g, b, y, x, w, S, k, I, _;
        f = n.component;
        p = t.ctx;
        if (f != null && p != null) {
            m = !1;
            if (p[D] === B) {
                i = Math.max(i, p[P]);
                m = !0;
            }
            if (f.id !== t.component.id) {
                h = !0;
            } else {
                Hn = p;
                if (n.cfg !== e) p.cfg = n.cfg; else p.cfg = kt(t.parent);
                if (f.shouldChange) if (!f.shouldChange(p, n, t) && !$ && !m) {
                    Mt(t, r, a);
                    return t;
                }
                p.data = n.data || {};
                t.component = f;
                if (U !== K) U(n, d ? 2 : 1);
                if (f.render) {
                    t.orig = n;
                    n = c({}, n);
                    t.cfg = e;
                    if (n.cfg !== e) n.cfg = e;
                    f.render(p, n, t);
                    if (n.cfg !== e) {
                        if (t.cfg === e) t.cfg = n.cfg; else c(t.cfg, n.cfg);
                    }
                }
                Hn = e;
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
            Mt(t, r, a);
            return t;
        }
        y = s;
        x = u;
        if (at(v)) {
            v = "" + v;
        }
        if (h || f != null && p == null || f == null && p != null && p.me.component !== l) {} else if (b === "/") {
            if (t.tag === "/" && g === v) {
                Bt(n, t, f);
                return t;
            }
        } else if (b === t.tag) {
            if (b === e) {
                if (it(v) && it(g)) {
                    if (v !== g) {
                        w = t.element;
                        w.textContent = v;
                        t.children = v;
                    }
                } else {
                    if (u && C === t) u = !1;
                    if (i <= 0) {
                        if (o(g)) Jt(t.children, r, a);
                    } else {
                        t.children = Yt(r, v, g, t, a, i - 1);
                    }
                    s = y;
                    u = x;
                }
                Bt(n, t, f);
                return t;
            } else {
                S = !1;
                if (b === "svg") {
                    s = !0;
                } else if (s && b === "foreignObject") {
                    S = !0;
                    s = !1;
                }
                if (u && C === t) u = !1;
                w = t.element;
                if (it(v) && !o(g)) {
                    if (v !== g) {
                        w.textContent = v;
                        g = v;
                    }
                } else {
                    if (i <= 0) {
                        if (o(g)) Jt(t.children, w, a);
                    } else {
                        g = Yt(w, v, g, t, null, i - 1);
                    }
                }
                t.children = g;
                if (S) s = !0;
                Bt(n, t, f);
                if (t.attrs || n.attrs || u) t.attrs = xt(t, w, n.attrs, t.attrs || {}, u);
                bt(w, n.style, t.style);
                t.style = n.style;
                k = n.className;
                if (k !== t.className) {
                    yt(w, k || "");
                    t.className = k;
                }
                s = y;
                u = x;
                return t;
            }
        }
        I = t.element;
        if (o(I)) I = I[0];
        if (I == null) I = r; else I = I.parentNode;
        _ = _t(n, t.parent, I, Tt(t));
        Ft(t);
        return _;
    }
    function Tt(n) {
        var t, r, a;
        if (n === e) return null;
        t = n.element;
        if (t != null) {
            if (o(t)) return t[0];
            return t;
        }
        r = n.children;
        if (!o(r)) return null;
        for (a = 0; a < r.length; a++) {
            t = Tt(r[a]);
            if (t) return t;
        }
        return null;
    }
    function Vt(e, n, t, r) {
        var a, i;
        while (++n < t) {
            a = e[n];
            if (a == null) continue;
            i = Tt(a);
            if (i != null) return i;
        }
        return r;
    }
    function Kt() {
        var n, t, r;
        n = h.length;
        for (t = 0; t < n; t++) {
            r = h[t];
            Hn = r.ctx;
            f[t].call(r.component, Hn, r, r.element);
        }
        Hn = e;
        f = [];
        h = [];
    }
    function Ut(e, n, t, r, a, i, d) {
        n[t] = Rt(e, n[t], i, Vt(n, t, r, a), d);
    }
    function Lt(e, n, t) {
        var r, a, i;
        r = e.element;
        if (r != null) {
            if (o(r)) {
                for (a = 0; a < r.length; a++) {
                    n.insertBefore(r[a], t);
                }
            } else n.insertBefore(r, t);
            return;
        }
        i = e.children;
        if (!o(i)) return;
        for (a = 0; a < i.length; a++) {
            Lt(i[a], n, t);
        }
    }
    function Ht(e, n, t, r, a) {
        var i, d, o;
        i = Vt(e, n, t, r);
        d = e[n];
        o = Tt(d);
        if (o != null && o !== i) {
            Lt(d, a, i);
        }
    }
    function Xt(e, n, t, r, a, i, d) {
        var o, l, c;
        o = Vt(n, t, r, a);
        l = n[t];
        c = Tt(l);
        if (c != null && c !== o) {
            Lt(l, i, o);
        }
        n[t] = Rt(e, l, i, o, d);
    }
    function Yt(e, n, t, r, a, i) {
        var d, l, c, s;
        if (n == null) n = [];
        if (!o(n)) {
            n = [ n ];
        }
        if (t == null) t = [];
        if (!o(t)) {
            if (e.firstChild) e.removeChild(e.firstChild);
            t = [];
        }
        d = n;
        d = d.slice(0);
        l = d.length;
        for (c = 0; c < l; ) {
            s = d[c];
            if (o(s)) {
                d.splice.apply(d, [ c, 1 ].concat(s));
                l = d.length;
                continue;
            }
            s = Nt(s);
            if (s == null) {
                d.splice(c, 1);
                l--;
                continue;
            }
            d[c] = s;
            c++;
        }
        return zt(e, d, t, r, a, i);
    }
    function zt(n, t, r, a, i, d) {
        var o, l, c, s = 0, u = 0, f, h, p, m, v, g, b, y, x, w, C;
        o = t.length;
        l = r.length;
        c = l;
        while (s < o && u < c) {
            if (t[s].key === r[u].key) {
                Ut(t[s], r, u, l, i, n, d);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (t[o - 1].key === r[c - 1].key) {
                    o--;
                    c--;
                    Ut(t[o], r, c, l, i, n, d);
                    if (s < o && u < c) continue;
                }
                break;
            }
            if (s < o && u < c) {
                if (t[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    Xt(t[s], r, u, l, i, n, d);
                    s++;
                    u++;
                    continue;
                }
                if (t[o - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    o--;
                    Xt(t[o], r, c, l, i, n, d);
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
                r.splice(u, 0, _t(t[s], a, n, Vt(r, u - 1, l, i)));
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
                Ft(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = ct();
        h = ct();
        p = s;
        m = u;
        v = 0;
        for (;u < c; u++) {
            g = r[u];
            b = g.key;
            if (b != null) {
                et(!(b in f));
                f[b] = u;
            } else v--;
        }
        y = -v - v;
        for (;s < o; s++) {
            g = t[s];
            b = g.key;
            if (b != null) {
                et(!(b in h));
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
                r.splice(u, 0, _t(t[s], a, n, Vt(r, u - 1, l, i)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(w in h)) {
                Ft(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                Ut(t[s], r, u, l, i, n, d);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                Xt(t[s], r, u, l, i, n, d);
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
                Ft(r[u]);
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
                r.splice(u, 0, _t(t[s], a, n, Vt(r, u - 1, l, i)));
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
                Ut(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u = s;
                continue;
            }
            if (b != null) {
                et(s === u);
                if (y === 0 && v < 0) {
                    while (!0) {
                        Ft(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        v++;
                        et(u !== c, "there still need to exist key node");
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == null) u++;
                et(b === r[u].key);
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Ht(r, s, l, i, n);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Xt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, _t(t[s], a, n, Vt(r, s - 1, l, i)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            Ft(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    k = !1;
    I = window.requestAnimationFrame;
    if (I) {
        I(function(e) {
            if (e === +e) k = !0;
        });
    }
    _ = Date.now || function() {
        return new Date().getTime();
    };
    N = _();
    E = 0;
    function Gt(e) {
        var n;
        if (k) {
            I(e);
        } else {
            n = 50 / 3 + E - _();
            if (n < 0) n = 0;
            window.setTimeout(function() {
                E = _();
                e(E - N);
            }, n);
        }
    }
    D = "$invalidated";
    P = "$deepness";
    F = !0;
    A = !1;
    j = !0;
    O = 0;
    B = 0;
    M = 0;
    R = 0;
    T = {};
    function $t(e, n, t) {
        var r;
        if (Xn == null) Xn = {};
        r = Xn[e] || [];
        r.push({
            priority: n,
            callback: t
        });
        Xn[e] = r;
    }
    function qt(e, n, t, r) {
        var a, i;
        a = T[e];
        if (a) for (i = 0; i < a.length; i++) {
            if (a[i](n, t, r)) return !0;
        }
        return !1;
    }
    V = 0;
    function Wt(e, n) {
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
            a = Ot(r);
            V++;
            qt(n, t, r, a);
            V--;
            if (V == 0 && Y) tr();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, a, t);
    }
    function Zt() {
        var n, t, r, a, i, d;
        if (Xn === e) return;
        n = Object.keys(Xn);
        for (t = 0; t < n.length; t++) {
            r = n[t];
            a = Xn[r];
            a = a.sort(function(e, n) {
                return e.priority - n.priority;
            });
            T[r] = a.map(function(e) {
                return e.callback;
            });
        }
        Xn = e;
        i = document.body;
        for (d = 0; d < n.length; d++) {
            Wt(i, n[d]);
        }
    }
    function Jt(e, n, t) {
        var r, a, i, d, l, c;
        r = e.length;
        for (a = 0; a < r; a++) {
            i = e[a];
            d = i.ctx;
            if (d != null && d[D] === B) {
                e[a] = Rt(i.orig, i, n, t, d[P], !0);
            } else if (o(i.children)) {
                l = s;
                c = u;
                if (u && C === i) u = !1;
                if (i.tag === "svg") s = !0; else if (s && i.tag === "foreignObject") s = !1;
                Jt(i.children, i.element || n, Vt(e, a, r, t));
                St(i);
                s = l;
                u = c;
            }
        }
    }
    K = function() {};
    U = K;
    L = function() {};
    H = function() {};
    X = function() {};
    function Qt(e) {
        var n = L;
        L = e;
        return n;
    }
    function er(e) {
        var n = X;
        X = e;
        return n;
    }
    function nr(e, n, t) {
        var r, a, i;
        while (n != null) {
            if (e === n) return !0;
            r = n.parent;
            if (r == null) {
                for (a = 0; a < t.length; a++) {
                    i = S[t[a]];
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
    Y = !1;
    function tr() {
        Y = !1;
        ar(_() - N);
    }
    function rr(e) {
        A = !1;
        ar(e);
    }
    z = Va({
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
    function ar(n) {
        var t, r, a, i, d, l, c, s, f;
        R = _();
        Zt();
        H();
        B++;
        $ = G;
        G = !1;
        O = n;
        L();
        C = w.length === 0 ? null : w[w.length - 1];
        u = !1;
        t = !1;
        if (F) {
            F = !1;
            t = !0;
        }
        Yn = Object.keys(S);
        for (r = 0; r < Yn.length; r++) {
            a = S[Yn[r]];
            if (!a) continue;
            i = a.n;
            d = null;
            for (l = r + 1; l < Yn.length; l++) {
                c = S[Yn[l]];
                if (c === e) continue;
                d = Tt(c.n);
                if (d != null) break;
            }
            if (C) u = !nr(C, a.p, Yn);
            if (a.e === e) a.e = document.body;
            if (i) {
                if (t || i.ctx[D] === B) {
                    s = z(a);
                    Rt(s, i, a.e, d, t ? 1000000 : i.ctx[P]);
                } else {
                    if (o(a.c)) Jt(a.c, a.e, d);
                }
            } else {
                s = z(a);
                i = _t(s, e, a.e, d);
                a.n = i;
            }
            a.c = i.children;
        }
        Yn = e;
        Kt();
        f = S["0"];
        X(f ? f.c : null);
        M = _() - R;
    }
    G = !1;
    $ = !1;
    function ir() {
        G = !0;
        q();
    }
    function dr(e) {
        var n = q;
        q = e;
        return n;
    }
    q = function(n, t) {
        if (n != null) {
            if (t == e) t = 1000000;
            if (n[D] !== B + 1) {
                n[D] = B + 1;
                n[P] = t;
            } else {
                if (t > n[P]) n[P] = t;
            }
        } else {
            F = !0;
        }
        if (A || j) return;
        A = !0;
        Gt(rr);
    };
    W = 0;
    function or(n, t, r) {
        var a;
        W++;
        a = "" + W;
        S[a] = {
            f: n,
            e: t,
            c: [],
            p: r,
            n: e
        };
        if (Yn != null) {
            Yn.push(a);
        } else {
            ur();
        }
        return a;
    }
    function lr(e) {
        var n = S[e];
        if (!n) return;
        if (n.n) Ft(n.n);
        delete S[e];
    }
    function cr() {
        return S;
    }
    function sr() {
        j = !1;
        q();
    }
    Z = sr;
    function ur() {
        j = !0;
        Z();
        Z = sr;
    }
    function fr(n, t) {
        et(Yn == null, "init should not be called from render");
        lr("0");
        S["0"] = {
            f: n,
            e: t,
            c: [],
            p: e,
            n: e
        };
        ur();
    }
    function hr(e) {
        var n = Z;
        Z = function() {
            e(n);
        };
    }
    function pr(n, t, r) {
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
    function mr(n, t, r) {
        var a, i, d, l, c, s;
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
        l = n.children;
        if (o(l)) {
            for (c = 0; c < l.length; c++) {
                s = mr(l[c], t, r);
                if (s != null) return s;
            }
        }
        return e;
    }
    function vr(n, t) {
        var r, a, i, d;
        r = Object.keys(S);
        for (a = 0; a < r.length; a++) {
            i = S[r[a]].n;
            if (i != null) {
                d = mr(i, n, t);
                if (d != null) return d;
            }
        }
        return e;
    }
    J = {};
    function gr(e) {
        var n = e.preventDefault;
        if (n) n.call(e); else e.returnValue = !1;
    }
    function br(e) {
        var n, t;
        e = e.slice(0);
        for (n = 0; n < e.length; n++) {
            t = e[n];
            if (o(t)) {
                e[n] = br(t);
            } else if (ot(t)) {
                e[n] = yr(t);
            }
        }
        return e;
    }
    function yr(e) {
        var n, t;
        n = c({}, e);
        if (n.attrs) {
            n.attrs = c({}, n.attrs);
        }
        if (ot(n.style)) {
            n.style = c({}, n.style);
        }
        t = n.children;
        if (t) {
            if (o(t)) {
                n.children = br(t);
            } else if (ot(t)) {
                n.children = yr(t);
            }
        }
        return n;
    }
    function xr(e, n) {
        g[e] = n;
    }
    Q = null;
    ee = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function wr() {
        Q = null;
        q();
        return !1;
    }
    ne = [ "resize", "orientationchange" ];
    for (te = 0; te < ne.length; te++) $t(ne[te], 10, wr);
    re = window.document.documentElement;
    ae = /Android/i.test(navigator.userAgent);
    function Cr() {
        var e, n, t, r, a, i;
        if (Q == null) {
            e = re.clientWidth;
            n = re.clientHeight;
            t = window.orientation;
            r = n >= e;
            if (t == null) t = r ? 0 : 90;
            if (ae) {
                a = Math.abs(t) % 180 === 90;
                if (zn == null) {
                    zn = a === r;
                } else {
                    r = a === zn;
                }
            }
            i = 0;
            while (e > ee[+!r][i]) i++;
            Q = {
                width: e,
                height: n,
                orientation: t,
                deviceCategory: i,
                portrait: r
            };
        }
        return Q;
    }
    ie = function() {
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
                ie(function() {
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
            function l(e) {
                this.s = null;
                this.v = null;
                this.d = [];
                i(e, n(d, this), n(a, this));
            }
            l.prototype.then = function(e, n) {
                var r = this;
                return new l(function(a, i) {
                    t.call(r, [ e, n, a, i ]);
                });
            };
            l.prototype["catch"] = function(n) {
                return this.then(e, n);
            };
            l.all = function() {
                var e = [].slice.call(arguments.length === 1 && o(arguments[0]) ? arguments[0] : arguments);
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
    if (pt() === 9) {
        (function() {
            var e = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
            function n(e, n) {
                var t;
                if (e.zoom == null) e.zoom = "1";
                t = e.filter;
                e.filter = t == null ? n : t + " " + n;
            }
            xr("background", function(t, r, a) {
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
                    xr("background", t);
                })();
            }
        })();
    }
    de = "b$value";
    oe = "b$selStart";
    le = "b$selEnd";
    ce = "value";
    function Sr(e) {
        var n = e.type;
        return n === "checkbox" || n === "radio";
    }
    function kr(e, n) {
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
    function _r(e) {
        var n = [], t;
        for (t = 0; t < e.length; t++) {
            if (e[t].selected) n.push(e[t].value);
        }
        return n;
    }
    se = lt(function(n, t, r, a) {
        var i, d, o, c, s, u, f, h, p, m, v;
        i = n.tagName;
        d = i === "SELECT";
        o = i === "INPUT" || i === "TEXTAREA";
        if (!o && !d) {
            se(n, t, r, a);
            return;
        }
        if (t.ctx === e) {
            t.ctx = {
                me: t
            };
            t.component = l;
        }
        if (a === e) {
            t.ctx[de] = r;
        }
        c = d && n.multiple;
        s = !1;
        if (c) {
            u = n.options;
            f = _r(u);
            if (!kr(r, f)) {
                if (a === e || kr(f, a) || !kr(r, t.ctx[de])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = Ir(r, u[h].value);
                    }
                    f = _r(u);
                    if (kr(f, r)) {
                        s = !0;
                    }
                } else {
                    s = !0;
                }
            }
        } else if (o || d) {
            if (o && Sr(n)) {
                p = n.checked;
                if (r !== p) {
                    if (a === e || p === a || r !== t.ctx[de]) {
                        n.checked = r;
                    } else {
                        s = !0;
                    }
                }
            } else {
                m = d && n.size < 2;
                v = n[ce];
                if (r !== v) {
                    if (a === e || v === a || r !== t.ctx[de]) {
                        if (d) {
                            if (r === "") {
                                n.selectedIndex = m ? 0 : -1;
                            } else {
                                n[ce] = r;
                            }
                            if (r !== "" || m) {
                                v = n[ce];
                                if (r !== v) {
                                    s = !0;
                                }
                            }
                        } else {
                            n[ce] = r;
                        }
                    } else {
                        s = !0;
                    }
                }
            }
        }
        if (s) {
            Nr(e, n, t);
        } else {
            t.ctx[de] = r;
        }
    });
    function Nr(n, t, r) {
        var a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, _, N, E, D, P;
        if (t && t.nodeName === "OPTION") {
            t = document.activeElement;
            r = Ot(t);
        }
        if (!r) {
            return !1;
        }
        a = r.component;
        i = r.attrs && r.attrs[de];
        d = a && a.onChange != null;
        o = i || d;
        l = a && a.onSelectionChange != null;
        if (!o && !l) return !1;
        c = r.ctx;
        s = t.tagName;
        u = s === "SELECT";
        f = u && t.multiple;
        if (o && f) {
            h = _r(t.options);
            if (!kr(c[de], h)) {
                c[de] = h;
                if (i) i(h);
                if (d) a.onChange(c, h);
            }
        } else if (o && Sr(t)) {
            if (n && n.type === "change") {
                setTimeout(function() {
                    Nr(e, t, r);
                }, 10);
                return !1;
            }
            if (t.type === "radio") {
                p = document.getElementsByName(t.name);
                for (m = 0; m < p.length; m++) {
                    v = p[m];
                    g = Ot(v);
                    if (!g) continue;
                    b = r.attrs[de];
                    y = g.component;
                    x = y && y.onChange != null;
                    if (!b && !x) continue;
                    w = g.ctx;
                    C = v.checked;
                    if (w[de] !== C) {
                        w[de] = C;
                        if (b) b(C);
                        if (x) y.onChange(w, C);
                    }
                }
            } else {
                S = t.checked;
                if (c[de] !== S) {
                    c[de] = S;
                    if (i) i(S);
                    if (d) a.onChange(c, S);
                }
            }
        } else {
            if (o) {
                k = t.value;
                if (c[de] !== k) {
                    c[de] = k;
                    if (i) i(k);
                    if (d) a.onChange(c, k);
                }
            }
            if (l) {
                I = t.selectionStart;
                _ = t.selectionEnd;
                N = t.selectionDirection;
                E = !1;
                D = c[oe];
                if (N == null) {
                    if (_ === D) E = !0;
                } else if (N === "backward") {
                    E = !0;
                }
                if (E) {
                    P = I;
                    I = _;
                    _ = P;
                }
                Er(r, I, _);
            }
        }
        return !1;
    }
    function Er(e, n, t) {
        var r, a;
        r = e.component;
        a = e.ctx;
        if (r && (a[oe] !== n || a[le] !== t)) {
            a[oe] = n;
            a[le] = t;
            if (r.onSelectionChange) r.onSelectionChange(a, {
                startPosition: n,
                endPosition: t
            });
        }
    }
    function Dr(e, n, t) {
        var r = sa();
        if (r) Nr(e, r.element, r);
        return !1;
    }
    ne = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (te = 0; te < ne.length; te++) $t(ne[te], 10, Nr);
    ue = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (te = 0; te < ue.length; te++) $t(ue[te], 2, Dr);
    function Pr(e) {
        return {
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            which: e.which || e.keyCode
        };
    }
    function Fr(e, n, t) {
        var r;
        if (!t) return !1;
        r = Pr(e);
        if (pr(t, "onKeyDown", r)) {
            gr(e);
            return !0;
        }
        return !1;
    }
    function Ar(e, n, t) {
        var r;
        if (!t) return !1;
        r = Pr(e);
        if (pr(t, "onKeyUp", r)) {
            gr(e);
            return !0;
        }
        return !1;
    }
    function jr(e, n, t) {
        var r;
        if (!t) return !1;
        if (e.which === 0) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (pr(t, "onKeyPress", r)) {
            gr(e);
            return !0;
        }
        return !1;
    }
    $t("keydown", 50, Fr);
    $t("keyup", 50, Ar);
    $t("keypress", 50, jr);
    fe = 13;
    he = 750;
    pe = 500;
    me = 800;
    ve = 50;
    ge = null;
    be = "onClick";
    ye = "onDoubleClick";
    function Or(e, n) {
        var t, r;
        if (ge == null) {
            return !1;
        }
        t = ge.me.component[e];
        if (!t) {
            return !1;
        }
        Gn = !0;
        r = t(ge, n);
        Gn = !1;
        return r;
    }
    function Br(n) {
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
    function Mr(e) {
        var n = Ot(e);
        return Br(n);
    }
    function Rr(e) {
        var n;
        if (e.length) {
            for (n = e.length - 1; n >= 0; --n) {
                e[n].t.style.visibility = e[n].p;
            }
            return !0;
        }
        return !1;
    }
    function Tr(e, n) {
        e.push({
            t: n,
            p: n.style.visibility
        });
        n.style.visibility = "hidden";
    }
    function Vr(e, n, t) {
        var r = [], a;
        a = n;
        while (Mr(a)) {
            Tr(r, a);
            a = document.elementFromPoint(e.x, e.y);
        }
        if (Rr(r)) {
            try {
                a.dispatchEvent(e);
            } catch (e) {
                return !1;
            }
            gr(e);
            return !0;
        }
        return !1;
    }
    function Kr(e, n) {
        $t(e, 5, n);
    }
    xe = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (pt() && pt() < 11) {
        ue = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (te = 0; te < ue.length; ++te) {
            $t(ue[te], 1, Vr);
        }
    }
    function Ur(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function Lr(e, n, t, r) {
        var a = [], i;
        i = t;
        while (Br(r)) {
            Tr(a, i);
            i = document.elementFromPoint(e, n);
            r = Ot(i);
        }
        Rr(a);
        return [ i, r ];
    }
    function Hr(e) {
        return function n(t, r, a) {
            var i, d, o, l, c;
            if (Br(a)) {
                i = Lr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = t.button + 1;
            o = Ur(t.pointerType);
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
            if (qt("!" + e, c, r, a)) {
                gr(t);
                return !0;
            }
            return !1;
        };
    }
    function Xr(e) {
        return function n(t, r, a) {
            var i = !1, d, o, l;
            for (d = 0; d < t.changedTouches.length; d++) {
                o = t.changedTouches[d];
                r = document.elementFromPoint(o.clientX, o.clientY);
                a = Ot(r);
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
                if (qt("!" + e, l, r, a)) i = !0;
            }
            if (i) {
                gr(t);
                return !0;
            }
            return !1;
        };
    }
    function Yr(e) {
        return function n(t, r, a) {
            var i, d;
            r = document.elementFromPoint(t.clientX, t.clientY);
            a = Ot(r);
            if (Br(a)) {
                i = Lr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = {
                id: 1,
                type: 0,
                x: t.clientX,
                y: t.clientY,
                button: ra(t),
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            if (qt("!" + e, d, r, a)) {
                gr(t);
                return !0;
            }
            return !1;
        };
    }
    function zr() {
        Kr("mousedown", Yr(xe[0]));
        Kr("mousemove", Yr(xe[1]));
        Kr("mouseup", Yr(xe[2]));
    }
    if (window.ontouchstart !== e) {
        Kr("touchstart", Xr(xe[0]));
        Kr("touchmove", Xr(xe[1]));
        Kr("touchend", Xr(xe[2]));
        Kr("touchcancel", Xr(xe[3]));
        zr();
    } else if (window.onpointerdown !== e) {
        for (te = 0; te < 4; te++) {
            we = xe[te];
            Kr(we.toLowerCase(), Hr(we));
        }
    } else if (window.onmspointerdown !== e) {
        for (te = 0; te < 4; te++) {
            we = xe[te];
            Kr("@MS" + we, Hr(we));
        }
    } else {
        zr();
    }
    for (Ce = 0; Ce < 4; Ce++) {
        (function(e) {
            var n = "on" + e;
            $t("!" + e, 50, function(e, t, r) {
                return Or(n, e) || pr(r, n, e) != null;
            });
        })(xe[Ce]);
    }
    Se = ct();
    ke = [];
    Ie = -1;
    _e = 0;
    Ne = 0;
    Ee = 0;
    De = !1;
    function Gr(e, n, t) {
        return Math.abs(e - n) < t;
    }
    Pe = [];
    function $r(n) {
        var t, r, a, i, d, o, l, c;
        $n = n;
        t = document.elementFromPoint(n.x, n.y);
        r = jt(t);
        a = r.length == 0 ? e : r[r.length - 1];
        if (Br(a)) {
            i = Lr(n.x, n.y, t, a == null ? e : a);
            t = i[0];
            r = jt(t);
        }
        pr(a, "onMouseOver", n);
        d = 0;
        while (d < Pe.length && d < r.length && Pe[d] === r[d]) d++;
        o = Pe.length;
        if (o > 0) {
            l = Pe[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, n);
            }
        }
        while (o > d) {
            o--;
            l = Pe[o];
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
        Pe = r;
        if (o > 0) {
            l = Pe[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, n);
            }
        }
        return !1;
    }
    function qr() {
        return Object.keys(Se).length === 0;
    }
    function Wr(e, n, t) {
        if (Ie === -1 && qr()) {
            Ie = e.id;
            _e = _();
            Ne = e.x;
            Ee = e.y;
            De = !1;
            $r(e);
        }
        Se[e.id] = e.type;
        if (Ie !== e.id) {
            De = !0;
        }
        return !1;
    }
    function Zr(e, n, t) {
        if (e.type === 0 && e.button === 0 && Se[e.id] != null) {
            e.button = 1;
            qt("!PointerUp", e, n, t);
            e.button = 0;
        }
        if (Ie === e.id) {
            $r(e);
            if (!Gr(Ne, e.x, fe) || !Gr(Ee, e.y, fe)) De = !0;
        } else if (qr()) {
            $r(e);
        }
        return !1;
    }
    Fe = 0;
    Ae = 0;
    function Jr(e) {
        var n;
        if (Ae == 0) return !1;
        n = _();
        if (n < Fe + 1000 && e >= Ae) {
            Fe = n;
            Ae = e;
            return !0;
        }
        Ae = 0;
        return !1;
    }
    function Qr(e, n, t) {
        var r, a;
        delete Se[e.id];
        if (Ie == e.id) {
            $r(e);
            Ie = -1;
            if (e.type == 1 && !De) {
                if (_() - _e < he) {
                    qt("!PointerCancel", e, n, t);
                    Jr(1);
                    r = Or(be, e) || pr(t, be, e) != null;
                    a = pt() ? me : pe;
                    ke.push([ e.x, e.y, _() + a, r ? 1 : 0 ]);
                    return r;
                }
            }
        }
        return !1;
    }
    function ea(e, n, t) {
        delete Se[e.id];
        if (Ie == e.id) {
            Ie = -1;
        }
        return !1;
    }
    function na(e, n, t) {
        var r, a, i;
        r = _();
        for (a = 0; a < ke.length; a++) {
            i = ke[a];
            if (i[2] < r) {
                ke.splice(a, 1);
                a--;
                continue;
            }
            if (Gr(i[0], e.clientX, ve) && Gr(i[1], e.clientY, ve)) {
                ke.splice(a, 1);
                if (i[3]) gr(e);
                return !0;
            }
        }
        return !1;
    }
    je = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Oe = [ Wr, Zr, Qr, ea, na ];
    for (te = 0; te < 5; te++) {
        $t(je[te], 3, Oe[te]);
    }
    function ta(e) {
        return function(n, t, r) {
            if (Ie != n.id && !qr()) return !1;
            if (Or(e, n) || pr(r, e, n)) {
                return !0;
            }
            return !1;
        };
    }
    Be = [ "Down", "Move", "Up", "Up" ];
    for (te = 0; te < 4; te++) {
        $t(je[te], 80, ta("onMouse" + Be[te]));
    }
    function ra(e) {
        return e.which || e.button;
    }
    function aa(e, n) {
        return function(t, r, a) {
            var i, d, o;
            if (V == 1 && (r.nodeName != "INPUT" || t.clientX != 0 || t.clientY != 0)) {
                r = document.elementFromPoint(t.clientX, t.clientY);
                a = Ot(r);
                if (Br(a)) {
                    i = Lr(t.clientX, t.clientY, r, a);
                    r = i[0];
                    a = i[1];
                }
            }
            d = ra(t) || 1;
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
            if (e == ye) o.count = 2;
            if (Jr(o.count) || Or(e, o) || pr(a, e, o)) {
                gr(t);
                return !0;
            }
            return !1;
        };
    }
    function ia(e, n) {
        var t, r, a;
        t = document.elementFromPoint(e, n);
        r = Ot(t);
        if (Br(r)) {
            a = Lr(e, n, t, r);
            r = a[1];
        }
        return r;
    }
    function da(e, n, t) {
        var r, a;
        while (t) {
            r = t.style;
            if (r) {
                a = r.userSelect;
                if (a === "none") {
                    gr(e);
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
    Kr("selectstart", da);
    Kr("^click", aa(be));
    Kr("^dblclick", aa(ye));
    Kr("contextmenu", aa("onContextMenu", !0));
    Me = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function oa(e, n, t) {
        var r, a, i, d, o, l;
        if (Br(t)) {
            r = Lr(e.x, e.y, n, t);
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
        if (Me == "mousewheel") {
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
        if (Or("onMouseWheel", l) || pr(t, "onMouseWheel", l)) {
            gr(e);
            return !0;
        }
        return !1;
    }
    Kr(Me, oa);
    Re = function(e, n) {
        var t = pt() ? me : pe;
        ke.push([ e, n, _() + t, 1 ]);
    };
    Te = e;
    Ve = e;
    Ke = [];
    function la(n) {
        var t, r, a, i, d, o;
        t = document.hasFocus() || n ? document.activeElement : e;
        if (t !== Te) {
            Te = t;
            r = jt(Te);
            a = 0;
            while (a < Ke.length && a < r.length && Ke[a] === r[a]) a++;
            i = Ke.length - 1;
            if (i >= a) {
                d = Ke[i];
                if (d) {
                    o = d.component;
                    if (o && o.onBlur) o.onBlur(d.ctx);
                }
                i--;
            }
            while (i >= a) {
                d = Ke[i];
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
            Ke = r;
            Ve = Ke.length == 0 ? e : rt(Ke[Ke.length - 1]);
        }
        return !1;
    }
    function ca() {
        setTimeout(function() {
            return la(!1);
        }, 10);
        return !1;
    }
    $t("^focus", 50, function() {
        return la(!0);
    });
    $t("^blur", 50, ca);
    function sa() {
        return Ve;
    }
    Ue = [];
    function ua(e, n, t) {
        var r, a;
        r = {
            node: t
        };
        for (a = 0; a < Ue.length; a++) {
            Ue[a](r);
        }
        return !1;
    }
    $t("^scroll", 10, ua);
    Le = /^(?:html)$/i;
    He = /^(?:auto)$|^(?:scroll)$/i;
    Xe = function() {
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
    Ye = 0;
    ze = [];
    Ge = null;
    $e = null;
    qe = {
        userSelect: ""
    };
    mt(qe);
    We = Object.keys(qe);
    Ze = We[We.length - 1];
    Je = function(n) {
        this.id = ++Ye;
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
        this.data = ct();
        if (n >= 0) tn[n] = this;
        ze.push(this);
    };
    function fa() {
        var e;
        if ($e == null) {
            e = document.body.style;
            Wn = e.cursor;
            Zn = e[Ze];
            e[Ze] = "none";
            $e = or(pa);
        }
    }
    Qe = {
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
    function ha() {
        var e = "no-drop", n;
        if (ze.length !== 0) {
            n = ze[0];
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
    en = {
        render: function(e, n) {
            var t = [], r, a, i, d;
            for (r = 0; r < ze.length; r++) {
                a = ze[r];
                if (a.beforeDrag) continue;
                if (a.dragView != null && (a.x != 0 || a.y != 0)) {
                    t.push({
                        key: "" + a.id,
                        data: a,
                        component: Qe
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
            d = ha();
            if (d && i.cursor !== d) i.cursor = d;
            n.children = t;
        },
        onDrag: function(e) {
            q(e);
            return !1;
        }
    };
    function pa() {
        return {
            component: en
        };
    }
    nn = Je.prototype;
    nn.setOperation = function(e) {
        this.operation = e;
    };
    nn.setDragNodeView = function(e) {
        this.dragView = e;
    };
    nn.addData = function(e, n) {
        this.data[e] = n;
        return !0;
    };
    nn.listData = function() {
        return Object.keys(this.data);
    };
    nn.hasData = function(n) {
        return this.data[n] !== e;
    };
    nn.getData = function(e) {
        return this.data[e];
    };
    nn.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    nn.cancelDnd = function() {
        va(e, this);
        this.destroy();
    };
    nn.destroy = function() {
        var e, n;
        this.ended = !0;
        if (this.started) vr("onDragEnd", this);
        delete tn[this.pointerid];
        for (e = 0; e < ze.length; e++) {
            if (ze[e] === this) {
                ze.splice(e, 1);
                break;
            }
        }
        if (Ge === this) {
            Ge = null;
        }
        if (ze.length === 0 && $e != null) {
            lr($e);
            $e = null;
            n = document.body.style;
            n.cursor = Wn;
            n[Ze] = Zn;
        }
    };
    tn = ct();
    function ma(e, n, t) {
        var r, a, i, d, o;
        r = tn[e.id];
        if (r) {
            r.cancelDnd();
        }
        if (e.button <= 1) {
            r = new Je(e.id);
            r.startX = e.x;
            r.startY = e.y;
            r.lastX = e.x;
            r.lastY = e.y;
            r.overNode = t;
            ga(r, e);
            a = pr(t, "onDragStart", r);
            if (a) {
                i = Tt(a.me);
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
                    va(t, r);
                }
                fa();
            } else {
                r.destroy();
            }
        }
        return !1;
    }
    function va(e, n) {
        n.overNode = e;
        n.targetCtx = pr(e, "onDragOver", n);
        if (n.targetCtx == null) {
            n.operation = 0;
        }
        vr("onDrag", n);
    }
    function ga(e, n) {
        e.shift = n.shift;
        e.ctrl = n.ctrl;
        e.alt = n.alt;
        e.meta = n.meta;
        e.x = n.x;
        e.y = n.y;
    }
    function ba(e, n, t) {
        var r = tn[e.id];
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
        ga(r, e);
        va(t, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function ya(e, n, t) {
        var r, a;
        r = tn[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            ga(r, e);
            va(t, r);
            a = r.targetCtx;
            if (a && pr(a.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            Re(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function xa(e, n, t) {
        var r = tn[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function wa(e, n) {
        var t;
        e.shift = n.shiftKey;
        e.ctrl = n.ctrlKey;
        e.alt = n.altKey;
        e.meta = n.metaKey;
        e.x = n.clientX;
        e.y = n.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        t = ia(e.x, e.y);
        va(t, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    rn = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function Ca(e, n, t) {
        var r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        r = Ge;
        if (r != null) {
            r.destroy();
        }
        a = Object.keys(tn);
        if (a.length > 0) {
            r = tn[a[0]];
            r.system = !0;
            Ge = r;
        } else {
            i = e.clientX;
            d = e.clientY;
            r = new Je(-1);
            r.system = !0;
            Ge = r;
            r.x = i;
            r.y = d;
            r.lastX = i;
            r.lastY = d;
            r.startX = i;
            r.startY = d;
            o = pr(t, "onDragStart", r);
            if (o) {
                l = Tt(o.me);
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
                fa();
            } else {
                r.destroy();
                return !1;
            }
        }
        r.beforeDrag = !1;
        u = rn[r.enabledOperations];
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
                if (!it(S)) S = JSON.stringify(S);
                e.dataTransfer.setData(C, S);
            } catch (e) {}
        }
        wa(r, e);
        return !1;
    }
    function Sa(e, n) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][n];
    }
    function ka(n, t, r) {
        var a, i, d, o, l, c, s;
        a = Ge;
        if (a == null) {
            a = new Je(-1);
            a.system = !0;
            Ge = a;
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
                if (rn[d] === o) break;
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
        wa(a, n);
        Sa(n, a.operation);
        if (a.operation != 0) {
            gr(n);
            return !0;
        }
        return !1;
    }
    function Ia(e, n, t) {
        var r, a, i;
        r = e.clientX;
        a = e.clientY;
        i = Cr();
        if (Ge != null && (r === 0 && a === 0 || r < 0 || a < 0 || r >= i.width || a >= i.height)) {
            Ge.x = 0;
            Ge.y = 0;
            Ge.operation = 0;
            vr("onDrag", Ge);
        }
        return !1;
    }
    function _a(e, n, t) {
        if (Ge != null) {
            Ge.destroy();
        }
        return !1;
    }
    function Na(e, n, t) {
        var r, a, i, d, o, l, c;
        r = Ge;
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
        wa(r, e);
        c = r.targetCtx;
        if (c && pr(c.me, "onDrop", r)) {
            Sa(e, r.operation);
            r.destroy();
            gr(e);
        } else {
            r.cancelDnd();
        }
        return !0;
    }
    function Ea(e, n, t) {
        gr(e);
        return !0;
    }
    function Da(e, n, t) {
        if (ze.length === 0) return !1;
        gr(e);
        return !0;
    }
    $t("!PointerDown", 4, ma);
    $t("!PointerMove", 4, ba);
    $t("!PointerUp", 4, ya);
    $t("!PointerCancel", 4, xa);
    $t("selectstart", 4, Da);
    $t("dragstart", 5, Ca);
    $t("dragover", 5, ka);
    $t("dragend", 5, _a);
    $t("drag", 5, Ia);
    $t("drop", 5, Na);
    $t("dragenter", 5, Ea);
    $t("dragleave", 5, Ea);
    an = function() {
        return ze;
    };
    dn = -1;
    function Pa() {
        if (dn >= 0) clearTimeout(dn);
        dn = -1;
        q();
        return !1;
    }
    $t("hashchange", 10, Pa);
    on = 0;
    ln = "";
    cn = {};
    sn = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
    un = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
    fn = {};
    hn = [];
    pn = ct();
    mn = [];
    vn = [];
    gn = /.*(?:\:|\/).*/;
    bn = !0;
    yn = null;
    xn = null;
    wn = 0;
    Cn = 1;
    Sn = ct();
    kn = ct();
    In = ct();
    _n = [];
    Nn = ct();
    En = "";
    Dn = !1;
    Pn = null;
    Fn = 0;
    An = pt() === 9;
    jn = Qt(Oa);
    On = /\:|\ |\>/;
    function Fa(e) {
        var n, t;
        n = On.exec(e);
        if (!n) return Sn[e].name;
        t = n.index;
        return Sn[e.substring(0, t)].name + e.substring(t);
    }
    function Aa(e, n) {
        var t = "", r;
        if (e) {
            if (o(e)) {
                for (r = 0; r < e.length; r++) {
                    if (r > 0) {
                        t += ",";
                    }
                    t += "." + Fa(e[r]) + "." + n;
                }
            } else {
                t = "." + Fa(e) + "." + n;
            }
        } else {
            t = "." + n;
        }
        return t;
    }
    function ja(n, t, r, a) {
        var i, d, l, c, s, u;
        if (it(r)) {
            i = Sn[r];
            if (i === e) {
                throw new Error("Unknown style " + r);
            }
            ja(n, t, i.style, i.pseudo);
        } else if (dt(r)) {
            r(n, t);
        } else if (o(r)) {
            for (d = 0; d < r.length; d++) {
                ja(n, t, r[d], e);
            }
        } else if (typeof r === "object") {
            for (s in r) {
                if (!Object.prototype.hasOwnProperty.call(r, s)) continue;
                l = r[s];
                if (dt(l)) {
                    l = l(n, s);
                }
                n[s] = l;
            }
        }
        if (a != null && t != null) {
            for (u in a) {
                c = t[u];
                if (c === e) {
                    c = ct();
                    t[u] = c;
                }
                ja(c, e, a[u], e);
            }
        }
    }
    Bn = !1;
    function Oa() {
        var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        n = document.body.style;
        if (Bn && O >= 150) {
            n.opacity = "1";
            Bn = !1;
        }
        if (Dn) {
            if (B === 1 && "webkitAnimation" in n) {
                Bn = !0;
                n.opacity = "0";
                setTimeout(q, 200);
            }
            for (t = 0; t < _n.length; t++) {
                r = _n[t];
                a = Nn[r.url];
                if (a == null) continue;
                i = r.color();
                if (i !== r.lastColor) {
                    r.lastColor = i;
                    if (r.width == null) r.width = a.width;
                    if (r.height == null) r.height = a.height;
                    d = Ta(a, i, r.width, r.height, r.left, r.top);
                    o = Sn[r.styleId];
                    o.style = {
                        backgroundImage: "url(" + d + ")",
                        width: r.width,
                        height: r.height,
                        backgroundPosition: 0
                    };
                }
            }
            l = En;
            for (C in Sn) {
                c = Sn[C];
                s = c.parent;
                u = c.name;
                f = c.pseudo;
                h = c.style;
                if (dt(h) && h.length === 0) {
                    p = h(), h = p[0], f = p[1];
                }
                if (it(h) && f == null) {
                    c.realName = h;
                    et(u != null, "Cannot link existing class to selector");
                    continue;
                }
                c.realName = u;
                m = ct();
                v = ct();
                ja(e, v, e, f);
                ja(m, v, h, e);
                g = null;
                if (m["pointerEvents"]) {
                    g = ct();
                    g["pointerEvents"] = m["pointerEvents"];
                }
                if (An) {
                    if (m["userSelect"]) {
                        if (g == null) g = ct();
                        g["userSelect"] = m["userSelect"];
                        delete m["userSelect"];
                    }
                }
                c.inlStyle = g;
                mt(m);
                b = Ma(m);
                if (b.length > 0) l += (u == null ? s : Aa(s, u)) + " {" + b + "}\n";
                for (S in v) {
                    y = v[S];
                    mt(y);
                    l += (u == null ? s + ":" + S : Aa(s, u + ":" + S)) + " {" + Ma(y) + "}\n";
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
            if (Pn != null) {
                w.replaceChild(x, Pn);
            } else {
                w.appendChild(x);
            }
            Pn = x;
            Dn = !1;
        }
        jn();
    }
    Mn = /([A-Z])/g;
    Rn = /^ms-/;
    function Ba(e) {
        if (e === "cssFloat") return "float";
        return e.replace(Mn, "-$1").toLowerCase().replace(Rn, "-ms-");
    }
    function Ma(n) {
        var t = "", r, a;
        for (a in n) {
            r = n[a];
            if (r === e) continue;
            t += Ba(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        t = t.slice(0, -1);
        return t;
    }
    function Ra() {
        Dn = !0;
        q();
    }
    Tn = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function Ta(e, n, t, r, a, i) {
        var d, o, l, c, s, u, f, h, p, m, v, g;
        d = document.createElement("canvas");
        d.width = t;
        d.height = r;
        o = d.getContext("2d");
        o.drawImage(e, -a, -i);
        l = o.getImageData(0, 0, t, r);
        c = l.data;
        s = Tn.exec(n);
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
    Vn = 0;
    Kn = "b@funcId";
    Un = !1;
    Ln = window["bobrilBPath"] || "bundle.png";
    function Va(n) {
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
        deref: Ot,
        getRoots: cr,
        setInvalidate: dr,
        invalidateStyles: Ra,
        ignoreShouldChange: ir,
        setAfterFrame: er,
        setBeforeFrame: Qt,
        getDnds: an,
        setBeforeInit: hr
    };
    fr(function() {
        return "hello";
    });
}();

