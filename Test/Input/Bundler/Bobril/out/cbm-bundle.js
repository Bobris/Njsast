!function(e) {
    "use strict";
    var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, _, E, D, P, F, A, j, O, B, M, R, T, V, K, U, L, H, X, Y, z, G, $, q, W, Z, J, Q, ee, ne, te, re, ae, ie, de, oe, le, ce, se, ue, fe, he, pe, me, ve, ge, be, ye, xe, we, Ce, Se, ke, Ie, Ne, _e, Ee, De, Pe, Fe, Ae, je, Oe, Be, Me, Re, Te, Ve, Ke, Ue, Le, He, Xe, Ye, ze, Ge, $e, qe, We, Ze, Je, Qe, en, nn, tn, rn, an, dn, on, ln, cn, sn, un, fn, hn, pn, mn, vn, gn, bn, yn, xn, wn, Cn, Sn, kn, In, Nn, _n, En, Dn, Pn, Fn, An, jn, On, Bn, Mn, Rn, Tn, Vn, Kn, Un, Ln, Hn, Xn, Yn, zn, Gn, $n;
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
    r = !1;
    a = function() {
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
    function qn(e, n) {}
    i = Array.isArray;
    d = {};
    function Wn(e) {
        return document.createTextNode(e);
    }
    function Zn(e) {
        return document.createElement(e);
    }
    function Jn(n) {
        return n === null ? e : n;
    }
    function Qn(e) {
        return typeof e == "number";
    }
    function et(e) {
        return typeof e == "string";
    }
    function nt(e) {
        return typeof e == "function";
    }
    function tt(e) {
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
    o = Object.assign;
    l = !1;
    c = !1;
    s = [];
    u = [];
    f = function(e, n, t, r) {
        if (t !== r) e[oe] = t;
    };
    function rt(e) {
        var n = f;
        f = e;
        return n;
    }
    function at() {
        return Object.create(null);
    }
    h = [ "Webkit", "Moz", "ms", "O" ];
    p = document.createElement("div").style;
    function it(e) {
        return et(p[e]);
    }
    m = at();
    v = {
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
    function dt(n) {
        return function(t, r, a) {
            t[n] = r;
            t[a] = e;
        };
    }
    function ot(n) {
        return function(t, r, a) {
            if (Qn(r)) {
                t[n] = r + "px";
            } else {
                t[n] = r;
            }
            t[a] = e;
        };
    }
    function lt(e, n, t) {
        if (Qn(n)) e[t] = n + "px";
    }
    function ct() {
        return document.documentMode;
    }
    function st(n) {
        var t, r, a, i, d, o, l, c;
        t = Object.keys(n);
        for (r = 0, a = t.length; r < a; r++) {
            i = t[r];
            d = m[i];
            o = n[i];
            if (o === e) continue;
            if (d === e) {
                if (it(i)) {
                    d = v[i] === !0 ? null : lt;
                } else {
                    l = i.replace(/^\w/, function(e) {
                        return e.toUpperCase();
                    });
                    for (c = 0; c < h.length; c++) {
                        if (it(h[c] + l)) {
                            d = (v[i] === !0 ? dt : ot)(h[c] + l);
                            break;
                        }
                    }
                    if (d === e) {
                        d = v[i] === !0 ? null : lt;
                    }
                }
                m[i] = d;
            }
            if (d !== null) d(n, o, i);
        }
    }
    function ut(e, n) {
        e[n] = "";
    }
    function ft(e, n, t) {
        var r;
        if (et(t)) {
            r = t.length;
            if (r > 11 && t.substr(r - 11, 11) === " !important") {
                e.setProperty(n, t.substr(0, r - 11), "important");
                return;
            }
        }
        e[n] = t;
    }
    function ht(n, t, r) {
        var a, i, d;
        a = n.style;
        if (tt(t)) {
            st(t);
            if (tt(r)) {
                for (i in r) {
                    if (!(i in t)) ut(a, i);
                }
                for (i in t) {
                    d = t[i];
                    if (d !== e) {
                        if (r[i] !== d) ft(a, i, d);
                    } else {
                        ut(a, i);
                    }
                }
            } else {
                if (r) a.cssText = "";
                for (i in t) {
                    d = t[i];
                    if (d !== e) ft(a, i, d);
                }
            }
        } else if (t) {
            a.cssText = t;
        } else {
            if (tt(r)) {
                for (i in r) {
                    ut(a, i);
                }
            } else if (r) {
                a.cssText = "";
            }
        }
    }
    function pt(e, n) {
        if (l) e.setAttribute("class", n); else e.className = n;
    }
    g = /^input$|^select$|^textarea$|^button$/;
    b = "tabindex";
    function mt(n, t, r, a, i) {
        var d = !1, o, c, s, u, h;
        if (r != null) for (o in r) {
            c = r[o];
            s = a[o];
            if (i && o === b) {
                c = -1;
                d = !0;
            } else if (o === oe && !l) {
                if (nt(c)) {
                    a[ae] = c;
                    c = c();
                }
                u = s;
                h = c;
                a[o] = c;
                continue;
            }
            if (s !== c) {
                a[o] = c;
                if (l) {
                    if (o === "href") t.setAttributeNS("http://www.w3.org/1999/xlink", "href", c); else t.setAttribute(o, c);
                } else if (o in t && !(o === "list" || o === "form")) {
                    t[o] = c;
                } else t.setAttribute(o, c);
            }
        }
        if (i && !d && n.tag && g.test(n.tag)) {
            t.setAttribute(b, "-1");
            a[b] = -1;
        }
        if (r == null) {
            for (o in a) {
                if (a[o] !== e) {
                    if (i && o === b) continue;
                    if (o === ae) continue;
                    a[o] = e;
                    t.removeAttribute(o);
                }
            }
        } else {
            for (o in a) {
                if (a[o] !== e && !(o in r)) {
                    if (i && o === b) continue;
                    if (o === ae) continue;
                    a[o] = e;
                    t.removeAttribute(o);
                }
            }
        }
        if (h !== e) {
            f(t, n, h, u);
        }
        return a;
    }
    function vt(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postInitDom;
            if (t) {
                s.push(t);
                u.push(e);
            }
        }
    }
    function gt(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDom;
            if (t) {
                s.push(t);
                u.push(e);
            }
            t = n.postUpdateDomEverytime;
            if (t) {
                s.push(t);
                u.push(e);
            }
        }
    }
    function bt(e) {
        var n, t;
        n = e.component;
        if (n) {
            t = n.postUpdateDomEverytime;
            if (t) {
                s.push(t);
                u.push(e);
            }
        }
    }
    function yt(n) {
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
    function xt(e, n) {
        var t, r;
        if (e == null) return;
        if (nt(e)) {
            e(n);
            return;
        }
        t = e[0];
        r = t.refs;
        if (r == null) {
            r = at();
            t.refs = r;
        }
        r[e[1]] = n;
    }
    y = [];
    x = null;
    function wt(n, t, r, a) {
        var i, d, o, s, u, f, h, p, m, v, g, b, y, w, C, S;
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
        d = l;
        o = c;
        s = i.component;
        xt(i.ref, i);
        if (s) {
            if (s.ctxClass) {
                u = new s.ctxClass(i.data || {}, i);
                if (u.data === e) u.data = i.data || {};
                if (u.me === e) u.me = i;
            } else {
                u = {
                    data: i.data || {},
                    me: i,
                    cfg: e
                };
            }
            u.cfg = n.cfg === e ? yt(t) : n.cfg;
            i.ctx = u;
            Un = u;
            if (s.init) {
                s.init(u, i);
            }
            if (V !== T) V(n, 0);
            if (s.render) {
                s.render(u, i);
            }
            Un = e;
        } else {}
        f = i.tag;
        if (f === "-") {
            i.tag = e;
            i.children = e;
            return i;
        }
        h = i.children;
        p = !1;
        if (Qn(h)) {
            h = "" + h;
            i.children = h;
        }
        if (f === e) {
            if (et(h)) {
                m = Wn(h);
                i.element = m;
                r.insertBefore(m, a);
            } else {
                St(i, r, a);
            }
            if (s) {
                if (s.postRender) {
                    s.postRender(i.ctx, i);
                }
                vt(i);
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
                w = r;
                if (!m.insertAdjacentHTML) {
                    m = w.insertBefore(Zn("i"), m);
                    y = !0;
                }
                m.insertAdjacentHTML("beforebegin", v);
                if (b) {
                    b = b.nextSibling;
                } else {
                    b = w.firstChild;
                }
                C = [];
                while (b !== m) {
                    C.push(b);
                    b = b.nextSibling;
                }
                i.element = C;
                if (y) {
                    w.removeChild(m);
                }
            }
            if (s) {
                if (s.postRender) {
                    s.postRender(i.ctx, i);
                }
                vt(i);
            }
            return i;
        }
        if (l || f === "svg") {
            m = document.createElementNS("http://www.w3.org/2000/svg", f);
            p = f === "foreignObject";
            l = !p;
        } else {
            m = Zn(f);
        }
        r.insertBefore(m, a);
        i.element = m;
        St(i, m, null);
        if (s) {
            if (s.postRender) {
                s.postRender(i.ctx, i);
            }
        }
        if (c && x === i) c = !1;
        if (p) l = !0;
        if (i.attrs || c) i.attrs = mt(i, m, i.attrs, {}, c);
        if (i.style) ht(m, i.style, e);
        S = i.className;
        if (S) pt(m, S);
        l = d;
        c = o;
        vt(i);
        return i;
    }
    function Ct(n) {
        if (n === !1 || n === !0 || n === null) return e;
        if (et(n)) {
            return {
                children: n
            };
        }
        if (Qn(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function St(e, n, t) {
        var r, a, d, o;
        r = e.children;
        if (!r) return;
        if (!i(r)) {
            if (et(r)) {
                n.textContent = r;
                return;
            }
            r = [ r ];
        }
        r = r.slice(0);
        a = 0;
        d = r.length;
        while (a < d) {
            o = r[a];
            if (i(o)) {
                r.splice.apply(r, [ a, 1 ].concat(o));
                d = r.length;
                continue;
            }
            o = Ct(o);
            if (o == null) {
                r.splice(a, 1);
                d--;
                continue;
            }
            r[a] = wt(o, e, n, t);
            a++;
        }
        e.children = r;
    }
    function kt(e) {
        var n, t, r, a, d, o, l, c;
        xt(e.ref, null);
        n = e.children;
        if (i(n)) {
            for (t = 0, r = n.length; t < r; t++) {
                kt(n[t]);
            }
        }
        a = e.component;
        if (a) {
            d = e.ctx;
            Un = d;
            if (V !== T) V(e, 3);
            if (a.destroy) a.destroy(d, e, e.element);
            o = d.disposables;
            if (i(o)) {
                for (l = o.length; l-- > 0; ) {
                    c = o[l];
                    if (nt(c)) c(d); else c.dispose();
                }
            }
        }
    }
    function It(e) {
        var n, t, r, a, d, o, l;
        n = e.element;
        if (i(n)) {
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
            d = e.children;
            if (i(d)) {
                for (o = 0, l = d.length; o < l; o++) {
                    It(d[o]);
                }
            }
        }
    }
    function Nt(e) {
        kt(e);
        It(e);
    }
    w = at();
    function _t(n, t, r, a) {
        var d, o, l, c, s;
        d = n.element;
        o = n.children;
        if (i(d)) {
            for (l = 0; l < d.length; l++) {
                if (d[l] === t) {
                    a.push(n);
                    if (i(o)) {
                        return o;
                    }
                    return null;
                }
            }
        } else if (d == null) {
            if (i(o)) {
                for (c = 0; c < o.length; c++) {
                    s = _t(o[c], t, r, a);
                    if (s !== e) {
                        a.splice(r, 0, n);
                        return s;
                    }
                }
            }
        } else if (d === t) {
            a.push(n);
            if (i(o)) {
                return o;
            }
            return null;
        }
        return e;
    }
    function Et(n) {
        var t = [], r, a, i, d, o, l, c, s, u, f, h;
        if (n == null) return t;
        r = Object.keys(w);
        a = r.map(function(e) {
            return w[e].e || document.body;
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
                c = w[r[d]].n;
                if (c === e) continue;
                s = _t(c, l, t.length, t);
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
                s = _t(h, l, t.length, t);
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
    function Dt(e) {
        var n, t;
        n = Et(e);
        t = null;
        while (t === null) {
            t = n.pop();
        }
        return t;
    }
    function Pt(n, t, r) {
        if (r) {
            if (r.postRender) {
                Un = t.ctx;
                r.postRender(Un, n, t);
                Un = e;
            }
        }
        t.data = n.data;
        gt(t);
    }
    function Ft(n, t, r) {
        var a, d;
        Un = e;
        if (i(n.children)) {
            a = l;
            d = c;
            if (n.tag === "svg") {
                l = !0;
            } else if (l && n.tag === "foreignObject") l = !1;
            if (c && x === n) c = !1;
            Gt(n.children, n.element || t, n.element != null ? null : r);
            l = a;
            c = d;
        }
        bt(n);
    }
    function At(n, t, r, a, s, u) {
        var f, h = !1, p, m, v, g, b, y, w, C, S, k, I, N;
        f = n.component;
        p = t.ctx;
        if (f != null && p != null) {
            m = !1;
            if (p[_] === j) {
                s = Math.max(s, p[E]);
                m = !0;
            }
            if (f.id !== t.component.id) {
                h = !0;
            } else {
                Un = p;
                if (n.cfg !== e) p.cfg = n.cfg; else p.cfg = yt(t.parent);
                if (f.shouldChange) if (!f.shouldChange(p, n, t) && !z && !m) {
                    Ft(t, r, a);
                    return t;
                }
                p.data = n.data || {};
                t.component = f;
                if (V !== T) V(n, u ? 2 : 1);
                if (f.render) {
                    t.orig = n;
                    n = o({}, n);
                    t.cfg = e;
                    if (n.cfg !== e) n.cfg = e;
                    f.render(p, n, t);
                    if (n.cfg !== e) {
                        if (t.cfg === e) t.cfg = n.cfg; else o(t.cfg, n.cfg);
                    }
                }
                Un = e;
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
            Ft(t, r, a);
            return t;
        }
        y = l;
        w = c;
        if (Qn(v)) {
            v = "" + v;
        }
        if (h || f != null && p == null || f == null && p != null && p.me.component !== d) {} else if (b === "/") {
            if (t.tag === "/" && g === v) {
                Pt(n, t, f);
                return t;
            }
        } else if (b === t.tag) {
            if (b === e) {
                if (et(v) && et(g)) {
                    if (v !== g) {
                        C = t.element;
                        C.textContent = v;
                        t.children = v;
                    }
                } else {
                    if (c && x === t) c = !1;
                    if (s <= 0) {
                        if (i(g)) Gt(t.children, r, a);
                    } else {
                        t.children = Kt(r, v, g, t, a, s - 1);
                    }
                    l = y;
                    c = w;
                }
                Pt(n, t, f);
                return t;
            } else {
                S = !1;
                if (b === "svg") {
                    l = !0;
                } else if (l && b === "foreignObject") {
                    S = !0;
                    l = !1;
                }
                if (c && x === t) c = !1;
                C = t.element;
                if (et(v) && !i(g)) {
                    if (v !== g) {
                        C.textContent = v;
                        g = v;
                    }
                } else {
                    if (s <= 0) {
                        if (i(g)) Gt(t.children, C, a);
                    } else {
                        g = Kt(C, v, g, t, null, s - 1);
                    }
                }
                t.children = g;
                if (S) l = !0;
                Pt(n, t, f);
                if (t.attrs || n.attrs || c) t.attrs = mt(t, C, n.attrs, t.attrs || {}, c);
                ht(C, n.style, t.style);
                t.style = n.style;
                k = n.className;
                if (k !== t.className) {
                    pt(C, k || "");
                    t.className = k;
                }
                l = y;
                c = w;
                return t;
            }
        }
        I = t.element;
        if (i(I)) I = I[0];
        if (I == null) I = r; else I = I.parentNode;
        N = wt(n, t.parent, I, jt(t));
        Nt(t);
        return N;
    }
    function jt(n) {
        var t, r, a;
        if (n === e) return null;
        t = n.element;
        if (t != null) {
            if (i(t)) return t[0];
            return t;
        }
        r = n.children;
        if (!i(r)) return null;
        for (a = 0; a < r.length; a++) {
            t = jt(r[a]);
            if (t) return t;
        }
        return null;
    }
    function Ot(e, n, t, r) {
        var a, i;
        while (++n < t) {
            a = e[n];
            if (a == null) continue;
            i = jt(a);
            if (i != null) return i;
        }
        return r;
    }
    function Bt() {
        var n, t, r;
        n = u.length;
        for (t = 0; t < n; t++) {
            r = u[t];
            Un = r.ctx;
            s[t].call(r.component, Un, r, r.element);
        }
        Un = e;
        s = [];
        u = [];
    }
    function Mt(e, n, t, r, a, i, d) {
        n[t] = At(e, n[t], i, Ot(n, t, r, a), d);
    }
    function Rt(e, n, t) {
        var r, a, d;
        r = e.element;
        if (r != null) {
            if (i(r)) {
                for (a = 0; a < r.length; a++) {
                    n.insertBefore(r[a], t);
                }
            } else n.insertBefore(r, t);
            return;
        }
        d = e.children;
        if (!i(d)) return;
        for (a = 0; a < d.length; a++) {
            Rt(d[a], n, t);
        }
    }
    function Tt(e, n, t, r, a) {
        var i, d, o;
        i = Ot(e, n, t, r);
        d = e[n];
        o = jt(d);
        if (o != null && o !== i) {
            Rt(d, a, i);
        }
    }
    function Vt(e, n, t, r, a, i, d) {
        var o, l, c;
        o = Ot(n, t, r, a);
        l = n[t];
        c = jt(l);
        if (c != null && c !== o) {
            Rt(l, i, o);
        }
        n[t] = At(e, l, i, o, d);
    }
    function Kt(e, n, t, r, a, d) {
        var o, l, c, s;
        if (n == null) n = [];
        if (!i(n)) {
            n = [ n ];
        }
        if (t == null) t = [];
        if (!i(t)) {
            if (e.firstChild) e.removeChild(e.firstChild);
            t = [];
        }
        o = n;
        o = o.slice(0);
        l = o.length;
        for (c = 0; c < l; ) {
            s = o[c];
            if (i(s)) {
                o.splice.apply(o, [ c, 1 ].concat(s));
                l = o.length;
                continue;
            }
            s = Ct(s);
            if (s == null) {
                o.splice(c, 1);
                l--;
                continue;
            }
            o[c] = s;
            c++;
        }
        return Ut(e, o, t, r, a, d);
    }
    function Ut(n, t, r, a, i, d) {
        var o, l, c, s = 0, u = 0, f, h, p, m, v, g, b, y, x, w, C;
        o = t.length;
        l = r.length;
        c = l;
        while (s < o && u < c) {
            if (t[s].key === r[u].key) {
                Mt(t[s], r, u, l, i, n, d);
                s++;
                u++;
                continue;
            }
            while (!0) {
                if (t[o - 1].key === r[c - 1].key) {
                    o--;
                    c--;
                    Mt(t[o], r, c, l, i, n, d);
                    if (s < o && u < c) continue;
                }
                break;
            }
            if (s < o && u < c) {
                if (t[s].key === r[c - 1].key) {
                    r.splice(u, 0, r[c - 1]);
                    r.splice(c, 1);
                    Vt(t[s], r, u, l, i, n, d);
                    s++;
                    u++;
                    continue;
                }
                if (t[o - 1].key === r[u].key) {
                    r.splice(c, 0, r[u]);
                    r.splice(u, 1);
                    c--;
                    o--;
                    Vt(t[o], r, c, l, i, n, d);
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
                r.splice(u, 0, wt(t[s], a, n, Ot(r, u - 1, l, i)));
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
                Nt(r[c]);
                r.splice(c, 1);
            }
            return r;
        }
        f = at();
        h = at();
        p = s;
        m = u;
        v = 0;
        for (;u < c; u++) {
            g = r[u];
            b = g.key;
            if (b != null) {
                qn(!(b in f));
                f[b] = u;
            } else v--;
        }
        y = -v - v;
        for (;s < o; s++) {
            g = t[s];
            b = g.key;
            if (b != null) {
                qn(!(b in h));
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
                r.splice(u, 0, wt(t[s], a, n, Ot(r, u - 1, l, i)));
                x++;
                s++;
                u++;
                c++;
                l++;
                continue;
            }
            if (!(w in h)) {
                Nt(r[u]);
                r.splice(u, 1);
                x--;
                c--;
                l--;
                continue;
            }
            if (u === C + x) {
                Mt(t[s], r, u, l, i, n, d);
                s++;
                u++;
            } else {
                r.splice(u, 0, r[C + x]);
                x++;
                r[C + x] = null;
                Vt(t[s], r, u, l, i, n, d);
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
                Nt(r[u]);
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
                r.splice(u, 0, wt(t[s], a, n, Ot(r, u - 1, l, i)));
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
                Mt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u = s;
                continue;
            }
            if (b != null) {
                qn(s === u);
                if (y === 0 && v < 0) {
                    while (!0) {
                        Nt(r[u]);
                        r.splice(u, 1);
                        c--;
                        l--;
                        v++;
                        qn(u !== c, "there still need to exist key node");
                        if (r[u].key != null) break;
                    }
                    continue;
                }
                while (r[u].key == null) u++;
                qn(b === r[u].key);
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Tt(r, s, l, i, n);
                s++;
                u = s;
                continue;
            }
            if (u < c) {
                r.splice(s, 0, r[u]);
                r.splice(u + 1, 1);
                Vt(t[s], r, s, l, i, n, d);
                y--;
                s++;
                u++;
            } else {
                r.splice(s, 0, wt(t[s], a, n, Ot(r, s - 1, l, i)));
                c++;
                l++;
                s++;
                u++;
            }
        }
        while (c > s) {
            c--;
            Nt(r[c]);
            r.splice(c, 1);
        }
        return r;
    }
    C = !1;
    S = window.requestAnimationFrame;
    if (S) {
        S(function(e) {
            if (e === +e) C = !0;
        });
    }
    k = Date.now || function() {
        return new Date().getTime();
    };
    I = k();
    N = 0;
    function Lt(e) {
        var n;
        if (C) {
            S(e);
        } else {
            n = 50 / 3 + N - k();
            if (n < 0) n = 0;
            window.setTimeout(function() {
                N = k();
                e(N - I);
            }, n);
        }
    }
    _ = "$invalidated";
    E = "$deepness";
    D = !0;
    P = !1;
    F = !0;
    A = 0;
    j = 0;
    O = 0;
    B = 0;
    M = {};
    function Ht(e, n, t) {
        var r;
        if (Ln == null) Ln = {};
        r = Ln[e] || [];
        r.push({
            priority: n,
            callback: t
        });
        Ln[e] = r;
    }
    function Xt(e, n, t, r) {
        var a, i;
        a = M[e];
        if (a) for (i = 0; i < a.length; i++) {
            if (a[i](n, t, r)) return !0;
        }
        return !1;
    }
    R = 0;
    function Yt(e, n) {
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
            a = Dt(r);
            R++;
            Xt(n, t, r, a);
            R--;
            if (R == 0 && H) Zt();
        }
        if ("on" + r in window) e = window;
        e.addEventListener(r, a, t);
    }
    function zt() {
        var n, t, r, a, i, d;
        if (Ln === e) return;
        n = Object.keys(Ln);
        for (t = 0; t < n.length; t++) {
            r = n[t];
            a = Ln[r];
            a = a.sort(function(e, n) {
                return e.priority - n.priority;
            });
            M[r] = a.map(function(e) {
                return e.callback;
            });
        }
        Ln = e;
        i = document.body;
        for (d = 0; d < n.length; d++) {
            Yt(i, n[d]);
        }
    }
    function Gt(e, n, t) {
        var r, a, d, o, s, u;
        r = e.length;
        for (a = 0; a < r; a++) {
            d = e[a];
            o = d.ctx;
            if (o != null && o[_] === j) {
                e[a] = At(d.orig, d, n, t, o[E], !0);
            } else if (i(d.children)) {
                s = l;
                u = c;
                if (c && x === d) c = !1;
                if (d.tag === "svg") l = !0; else if (l && d.tag === "foreignObject") l = !1;
                Gt(d.children, d.element || n, Ot(e, a, r, t));
                bt(d);
                l = s;
                c = u;
            }
        }
    }
    T = function() {};
    V = T;
    K = function() {};
    U = function() {};
    L = function() {};
    function $t(e) {
        var n = K;
        K = e;
        return n;
    }
    function qt(e) {
        var n = L;
        L = e;
        return n;
    }
    function Wt(e, n, t) {
        var r, a, i;
        while (n != null) {
            if (e === n) return !0;
            r = n.parent;
            if (r == null) {
                for (a = 0; a < t.length; a++) {
                    i = w[t[a]];
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
    H = !1;
    function Zt() {
        H = !1;
        Qt(k() - I);
    }
    function Jt(e) {
        P = !1;
        Qt(e);
    }
    X = Oa({
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
    function Qt(n) {
        var t, r, a, d, o, l, s, u, f;
        B = k();
        zt();
        U();
        j++;
        z = Y;
        Y = !1;
        A = n;
        K();
        x = y.length === 0 ? null : y[y.length - 1];
        c = !1;
        t = !1;
        if (D) {
            D = !1;
            t = !0;
        }
        Hn = Object.keys(w);
        for (r = 0; r < Hn.length; r++) {
            a = w[Hn[r]];
            if (!a) continue;
            d = a.n;
            o = null;
            for (l = r + 1; l < Hn.length; l++) {
                s = w[Hn[l]];
                if (s === e) continue;
                o = jt(s.n);
                if (o != null) break;
            }
            if (x) c = !Wt(x, a.p, Hn);
            if (a.e === e) a.e = document.body;
            if (d) {
                if (t || d.ctx[_] === j) {
                    u = X(a);
                    At(u, d, a.e, o, t ? 1000000 : d.ctx[E]);
                } else {
                    if (i(a.c)) Gt(a.c, a.e, o);
                }
            } else {
                u = X(a);
                d = wt(u, e, a.e, o);
                a.n = d;
            }
            a.c = d.children;
        }
        Hn = e;
        Bt();
        f = w["0"];
        L(f ? f.c : null);
        O = k() - B;
    }
    Y = !1;
    z = !1;
    function er() {
        Y = !0;
        G();
    }
    function nr(e) {
        var n = G;
        G = e;
        return n;
    }
    G = function(n, t) {
        if (n != null) {
            if (t == e) t = 1000000;
            if (n[_] !== j + 1) {
                n[_] = j + 1;
                n[E] = t;
            } else {
                if (t > n[E]) n[E] = t;
            }
        } else {
            D = !0;
        }
        if (P || F) return;
        P = !0;
        Lt(Jt);
    };
    $ = 0;
    function tr(n, t, r) {
        var a;
        $++;
        a = "" + $;
        w[a] = {
            f: n,
            e: t,
            c: [],
            p: r,
            n: e
        };
        if (Hn != null) {
            Hn.push(a);
        } else {
            dr();
        }
        return a;
    }
    function rr(e) {
        var n = w[e];
        if (!n) return;
        if (n.n) Nt(n.n);
        delete w[e];
    }
    function ar() {
        return w;
    }
    function ir() {
        F = !1;
        G();
    }
    q = ir;
    function dr() {
        F = !0;
        q();
        q = ir;
    }
    function or(n, t) {
        qn(Hn == null, "init should not be called from render");
        rr("0");
        w["0"] = {
            f: n,
            e: t,
            c: [],
            p: e,
            n: e
        };
        dr();
    }
    function lr(e) {
        var n = q;
        q = function() {
            e(n);
        };
    }
    function cr(n, t, r) {
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
    function sr(n, t, r) {
        var a, d, o, l, c, s;
        if (!n) return e;
        a = n.component;
        if (a) {
            d = n.ctx;
            o = a[t];
            if (o) {
                if (o.call(a, d, r)) return d;
            }
            o = a.shouldStopBroadcast;
            if (o) {
                if (o.call(a, d, t, r)) return e;
            }
        }
        l = n.children;
        if (i(l)) {
            for (c = 0; c < l.length; c++) {
                s = sr(l[c], t, r);
                if (s != null) return s;
            }
        }
        return e;
    }
    function ur(n, t) {
        var r, a, i, d;
        r = Object.keys(w);
        for (a = 0; a < r.length; a++) {
            i = w[r[a]].n;
            if (i != null) {
                d = sr(i, n, t);
                if (d != null) return d;
            }
        }
        return e;
    }
    W = {};
    function fr(e) {
        var n = e.preventDefault;
        if (n) n.call(e); else e.returnValue = !1;
    }
    function hr(e) {
        var n, t;
        e = e.slice(0);
        for (n = 0; n < e.length; n++) {
            t = e[n];
            if (i(t)) {
                e[n] = hr(t);
            } else if (tt(t)) {
                e[n] = pr(t);
            }
        }
        return e;
    }
    function pr(e) {
        var n, t;
        n = o({}, e);
        if (n.attrs) {
            n.attrs = o({}, n.attrs);
        }
        if (tt(n.style)) {
            n.style = o({}, n.style);
        }
        t = n.children;
        if (t) {
            if (i(t)) {
                n.children = hr(t);
            } else if (tt(t)) {
                n.children = pr(t);
            }
        }
        return n;
    }
    function mr(e, n) {
        m[e] = n;
    }
    Z = null;
    J = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function vr() {
        Z = null;
        G();
        return !1;
    }
    Q = [ "resize", "orientationchange" ];
    for (ee = 0; ee < Q.length; ee++) Ht(Q[ee], 10, vr);
    ne = window.document.documentElement;
    te = /Android/i.test(navigator.userAgent);
    function gr() {
        var e, n, t, r, a, i;
        if (Z == null) {
            e = ne.clientWidth;
            n = ne.clientHeight;
            t = window.orientation;
            r = n >= e;
            if (t == null) t = r ? 0 : 90;
            if (te) {
                a = Math.abs(t) % 180 === 90;
                if (Xn == null) {
                    Xn = a === r;
                } else {
                    r = a === Xn;
                }
            }
            i = 0;
            while (e > J[+!r][i]) i++;
            Z = {
                width: e,
                height: n,
                orientation: t,
                deviceCategory: i,
                portrait: r
            };
        }
        return Z;
    }
    re = function() {
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
                re(function() {
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
                var t;
                try {
                    if (e === this) throw new TypeError("Promise self resolve");
                    if (Object(e) === e) {
                        t = e.then;
                        if (typeof t === "function") {
                            d(n(t, e), n(o, this), n(a, this));
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
                d(e, n(o, this), n(a, this));
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
                var e = [].slice.call(arguments.length === 1 && i(arguments[0]) ? arguments[0] : arguments);
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
    if (ct() === 9) {
        (function() {
            var e = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
            function n(e, n) {
                var t;
                if (e.zoom == null) e.zoom = "1";
                t = e.filter;
                e.filter = t == null ? n : t + " " + n;
            }
            mr("background", function(t, r, a) {
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
                    mr("background", t);
                })();
            }
        })();
    }
    ae = "b$value";
    ie = "b$selStart";
    de = "b$selEnd";
    oe = "value";
    function br(e) {
        var n = e.type;
        return n === "checkbox" || n === "radio";
    }
    function yr(e, n) {
        var t, r;
        t = e.length;
        if (t !== n.length) return !1;
        for (r = 0; r < t; r++) {
            if (e[r] !== n[r]) return !1;
        }
        return !0;
    }
    function xr(e, n) {
        var t;
        for (t = 0; t < e.length; t++) {
            if (e[t] === n) return !0;
        }
        return !1;
    }
    function wr(e) {
        var n = [], t;
        for (t = 0; t < e.length; t++) {
            if (e[t].selected) n.push(e[t].value);
        }
        return n;
    }
    le = rt(function(n, t, r, a) {
        var i, o, l, c, s, u, f, h, p, m, v;
        i = n.tagName;
        o = i === "SELECT";
        l = i === "INPUT" || i === "TEXTAREA";
        if (!l && !o) {
            le(n, t, r, a);
            return;
        }
        if (t.ctx === e) {
            t.ctx = {
                me: t
            };
            t.component = d;
        }
        if (a === e) {
            t.ctx[ae] = r;
        }
        c = o && n.multiple;
        s = !1;
        if (c) {
            u = n.options;
            f = wr(u);
            if (!yr(r, f)) {
                if (a === e || yr(f, a) || !yr(r, t.ctx[ae])) {
                    for (h = 0; h < u.length; h++) {
                        u[h].selected = xr(r, u[h].value);
                    }
                    f = wr(u);
                    if (yr(f, r)) {
                        s = !0;
                    }
                } else {
                    s = !0;
                }
            }
        } else if (l || o) {
            if (l && br(n)) {
                p = n.checked;
                if (r !== p) {
                    if (a === e || p === a || r !== t.ctx[ae]) {
                        n.checked = r;
                    } else {
                        s = !0;
                    }
                }
            } else {
                m = o && n.size < 2;
                v = n[oe];
                if (r !== v) {
                    if (a === e || v === a || r !== t.ctx[ae]) {
                        if (o) {
                            if (r === "") {
                                n.selectedIndex = m ? 0 : -1;
                            } else {
                                n[oe] = r;
                            }
                            if (r !== "" || m) {
                                v = n[oe];
                                if (r !== v) {
                                    s = !0;
                                }
                            }
                        } else {
                            n[oe] = r;
                        }
                    } else {
                        s = !0;
                    }
                }
            }
        }
        if (s) {
            Cr(e, n, t);
        } else {
            t.ctx[ae] = r;
        }
    });
    function Cr(n, t, r) {
        var a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S, k, I, N, _, E, D, P;
        if (t && t.nodeName === "OPTION") {
            t = document.activeElement;
            r = Dt(t);
        }
        if (!r) {
            return !1;
        }
        a = r.component;
        i = r.attrs && r.attrs[ae];
        d = a && a.onChange != null;
        o = i || d;
        l = a && a.onSelectionChange != null;
        if (!o && !l) return !1;
        c = r.ctx;
        s = t.tagName;
        u = s === "SELECT";
        f = u && t.multiple;
        if (o && f) {
            h = wr(t.options);
            if (!yr(c[ae], h)) {
                c[ae] = h;
                if (i) i(h);
                if (d) a.onChange(c, h);
            }
        } else if (o && br(t)) {
            if (n && n.type === "change") {
                setTimeout(function() {
                    Cr(e, t, r);
                }, 10);
                return !1;
            }
            if (t.type === "radio") {
                p = document.getElementsByName(t.name);
                for (m = 0; m < p.length; m++) {
                    v = p[m];
                    g = Dt(v);
                    if (!g) continue;
                    b = r.attrs[ae];
                    y = g.component;
                    x = y && y.onChange != null;
                    if (!b && !x) continue;
                    w = g.ctx;
                    C = v.checked;
                    if (w[ae] !== C) {
                        w[ae] = C;
                        if (b) b(C);
                        if (x) y.onChange(w, C);
                    }
                }
            } else {
                S = t.checked;
                if (c[ae] !== S) {
                    c[ae] = S;
                    if (i) i(S);
                    if (d) a.onChange(c, S);
                }
            }
        } else {
            if (o) {
                k = t.value;
                if (c[ae] !== k) {
                    c[ae] = k;
                    if (i) i(k);
                    if (d) a.onChange(c, k);
                }
            }
            if (l) {
                I = t.selectionStart;
                N = t.selectionEnd;
                _ = t.selectionDirection;
                E = !1;
                D = c[ie];
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
                Sr(r, I, N);
            }
        }
        return !1;
    }
    function Sr(e, n, t) {
        var r, a;
        r = e.component;
        a = e.ctx;
        if (r && (a[ie] !== n || a[de] !== t)) {
            a[ie] = n;
            a[de] = t;
            if (r.onSelectionChange) r.onSelectionChange(a, {
                startPosition: n,
                endPosition: t
            });
        }
    }
    function kr(e, n, t) {
        var r = ia();
        if (r) Cr(e, r.element, r);
        return !1;
    }
    Q = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (ee = 0; ee < Q.length; ee++) Ht(Q[ee], 10, Cr);
    ce = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (ee = 0; ee < ce.length; ee++) Ht(ce[ee], 2, kr);
    function Ir(e) {
        return {
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey || !1,
            which: e.which || e.keyCode
        };
    }
    function Nr(e, n, t) {
        var r;
        if (!t) return !1;
        r = Ir(e);
        if (cr(t, "onKeyDown", r)) {
            fr(e);
            return !0;
        }
        return !1;
    }
    function _r(e, n, t) {
        var r;
        if (!t) return !1;
        r = Ir(e);
        if (cr(t, "onKeyUp", r)) {
            fr(e);
            return !0;
        }
        return !1;
    }
    function Er(e, n, t) {
        var r;
        if (!t) return !1;
        if (e.which === 0) return !1;
        r = {
            charCode: e.which || e.keyCode
        };
        if (cr(t, "onKeyPress", r)) {
            fr(e);
            return !0;
        }
        return !1;
    }
    Ht("keydown", 50, Nr);
    Ht("keyup", 50, _r);
    Ht("keypress", 50, Er);
    se = 13;
    ue = 750;
    fe = 500;
    he = 800;
    pe = 50;
    me = null;
    ve = "onClick";
    ge = "onDoubleClick";
    function Dr(e, n) {
        var t, r;
        if (me == null) {
            return !1;
        }
        t = me.me.component[e];
        if (!t) {
            return !1;
        }
        Yn = !0;
        r = t(me, n);
        Yn = !1;
        return r;
    }
    function Pr(n) {
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
    function Fr(e) {
        var n = Dt(e);
        return Pr(n);
    }
    function Ar(e) {
        var n;
        if (e.length) {
            for (n = e.length - 1; n >= 0; --n) {
                e[n].t.style.visibility = e[n].p;
            }
            return !0;
        }
        return !1;
    }
    function jr(e, n) {
        e.push({
            t: n,
            p: n.style.visibility
        });
        n.style.visibility = "hidden";
    }
    function Or(e, n, t) {
        var r = [], a;
        a = n;
        while (Fr(a)) {
            jr(r, a);
            a = document.elementFromPoint(e.x, e.y);
        }
        if (Ar(r)) {
            try {
                a.dispatchEvent(e);
            } catch (e) {
                return !1;
            }
            fr(e);
            return !0;
        }
        return !1;
    }
    function Br(e, n) {
        Ht(e, 5, n);
    }
    be = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (ct() && ct() < 11) {
        ce = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (ee = 0; ee < ce.length; ++ee) {
            Ht(ce[ee], 1, Or);
        }
    }
    function Mr(e) {
        if (e === "mouse" || e === 4) return 0;
        if (e === "pen" || e === 3) return 2;
        return 1;
    }
    function Rr(e, n, t, r) {
        var a = [], i;
        i = t;
        while (Pr(r)) {
            jr(a, i);
            i = document.elementFromPoint(e, n);
            r = Dt(i);
        }
        Ar(a);
        return [ i, r ];
    }
    function Tr(e) {
        return function n(t, r, a) {
            var i, d, o, l, c;
            if (Pr(a)) {
                i = Rr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = t.button + 1;
            o = Mr(t.pointerType);
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
            if (Xt("!" + e, c, r, a)) {
                fr(t);
                return !0;
            }
            return !1;
        };
    }
    function Vr(e) {
        return function n(t, r, a) {
            var i = !1, d, o, l;
            for (d = 0; d < t.changedTouches.length; d++) {
                o = t.changedTouches[d];
                r = document.elementFromPoint(o.clientX, o.clientY);
                a = Dt(r);
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
                if (Xt("!" + e, l, r, a)) i = !0;
            }
            if (i) {
                fr(t);
                return !0;
            }
            return !1;
        };
    }
    function Kr(e) {
        return function n(t, r, a) {
            var i, d;
            r = document.elementFromPoint(t.clientX, t.clientY);
            a = Dt(r);
            if (Pr(a)) {
                i = Rr(t.clientX, t.clientY, r, a);
                r = i[0];
                a = i[1];
            }
            d = {
                id: 1,
                type: 0,
                x: t.clientX,
                y: t.clientY,
                button: Jr(t),
                shift: t.shiftKey,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                meta: t.metaKey || !1,
                count: t.detail
            };
            if (Xt("!" + e, d, r, a)) {
                fr(t);
                return !0;
            }
            return !1;
        };
    }
    function Ur() {
        Br("mousedown", Kr(be[0]));
        Br("mousemove", Kr(be[1]));
        Br("mouseup", Kr(be[2]));
    }
    if (window.ontouchstart !== e) {
        Br("touchstart", Vr(be[0]));
        Br("touchmove", Vr(be[1]));
        Br("touchend", Vr(be[2]));
        Br("touchcancel", Vr(be[3]));
        Ur();
    } else if (window.onpointerdown !== e) {
        for (ee = 0; ee < 4; ee++) {
            ye = be[ee];
            Br(ye.toLowerCase(), Tr(ye));
        }
    } else if (window.onmspointerdown !== e) {
        for (ee = 0; ee < 4; ee++) {
            ye = be[ee];
            Br("@MS" + ye, Tr(ye));
        }
    } else {
        Ur();
    }
    for (xe = 0; xe < 4; xe++) {
        (function(e) {
            var n = "on" + e;
            Ht("!" + e, 50, function(e, t, r) {
                return Dr(n, e) || cr(r, n, e) != null;
            });
        })(be[xe]);
    }
    we = at();
    Ce = [];
    Se = -1;
    ke = 0;
    Ie = 0;
    Ne = 0;
    _e = !1;
    function Lr(e, n, t) {
        return Math.abs(e - n) < t;
    }
    Ee = [];
    function Hr(n) {
        var t, r, a, i, d, o, l, c;
        zn = n;
        t = document.elementFromPoint(n.x, n.y);
        r = Et(t);
        a = r.length == 0 ? e : r[r.length - 1];
        if (Pr(a)) {
            i = Rr(n.x, n.y, t, a == null ? e : a);
            t = i[0];
            r = Et(t);
        }
        cr(a, "onMouseOver", n);
        d = 0;
        while (d < Ee.length && d < r.length && Ee[d] === r[d]) d++;
        o = Ee.length;
        if (o > 0) {
            l = Ee[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseOut) c.onMouseOut(l.ctx, n);
            }
        }
        while (o > d) {
            o--;
            l = Ee[o];
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
        Ee = r;
        if (o > 0) {
            l = Ee[o - 1];
            if (l) {
                c = l.component;
                if (c && c.onMouseIn) c.onMouseIn(l.ctx, n);
            }
        }
        return !1;
    }
    function Xr() {
        return Object.keys(we).length === 0;
    }
    function Yr(e, n, t) {
        if (Se === -1 && Xr()) {
            Se = e.id;
            ke = k();
            Ie = e.x;
            Ne = e.y;
            _e = !1;
            Hr(e);
        }
        we[e.id] = e.type;
        if (Se !== e.id) {
            _e = !0;
        }
        return !1;
    }
    function zr(e, n, t) {
        if (e.type === 0 && e.button === 0 && we[e.id] != null) {
            e.button = 1;
            Xt("!PointerUp", e, n, t);
            e.button = 0;
        }
        if (Se === e.id) {
            Hr(e);
            if (!Lr(Ie, e.x, se) || !Lr(Ne, e.y, se)) _e = !0;
        } else if (Xr()) {
            Hr(e);
        }
        return !1;
    }
    De = 0;
    Pe = 0;
    function Gr(e) {
        var n;
        if (Pe == 0) return !1;
        n = k();
        if (n < De + 1000 && e >= Pe) {
            De = n;
            Pe = e;
            return !0;
        }
        Pe = 0;
        return !1;
    }
    function $r(e, n, t) {
        var r, a;
        delete we[e.id];
        if (Se == e.id) {
            Hr(e);
            Se = -1;
            if (e.type == 1 && !_e) {
                if (k() - ke < ue) {
                    Xt("!PointerCancel", e, n, t);
                    Gr(1);
                    r = Dr(ve, e) || cr(t, ve, e) != null;
                    a = ct() ? he : fe;
                    Ce.push([ e.x, e.y, k() + a, r ? 1 : 0 ]);
                    return r;
                }
            }
        }
        return !1;
    }
    function qr(e, n, t) {
        delete we[e.id];
        if (Se == e.id) {
            Se = -1;
        }
        return !1;
    }
    function Wr(e, n, t) {
        var r, a, i;
        r = k();
        for (a = 0; a < Ce.length; a++) {
            i = Ce[a];
            if (i[2] < r) {
                Ce.splice(a, 1);
                a--;
                continue;
            }
            if (Lr(i[0], e.clientX, pe) && Lr(i[1], e.clientY, pe)) {
                Ce.splice(a, 1);
                if (i[3]) fr(e);
                return !0;
            }
        }
        return !1;
    }
    Fe = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    Ae = [ Yr, zr, $r, qr, Wr ];
    for (ee = 0; ee < 5; ee++) {
        Ht(Fe[ee], 3, Ae[ee]);
    }
    function Zr(e) {
        return function(n, t, r) {
            if (Se != n.id && !Xr()) return !1;
            if (Dr(e, n) || cr(r, e, n)) {
                return !0;
            }
            return !1;
        };
    }
    je = [ "Down", "Move", "Up", "Up" ];
    for (ee = 0; ee < 4; ee++) {
        Ht(Fe[ee], 80, Zr("onMouse" + je[ee]));
    }
    function Jr(e) {
        return e.which || e.button;
    }
    function Qr(e, n) {
        return function(t, r, a) {
            var i, d, o;
            if (R == 1 && (r.nodeName != "INPUT" || t.clientX != 0 || t.clientY != 0)) {
                r = document.elementFromPoint(t.clientX, t.clientY);
                a = Dt(r);
                if (Pr(a)) {
                    i = Rr(t.clientX, t.clientY, r, a);
                    r = i[0];
                    a = i[1];
                }
            }
            d = Jr(t) || 1;
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
            if (e == ge) o.count = 2;
            if (Gr(o.count) || Dr(e, o) || cr(a, e, o)) {
                fr(t);
                return !0;
            }
            return !1;
        };
    }
    function ea(e, n) {
        var t, r, a;
        t = document.elementFromPoint(e, n);
        r = Dt(t);
        if (Pr(r)) {
            a = Rr(e, n, t, r);
            r = a[1];
        }
        return r;
    }
    function na(e, n, t) {
        var r, a;
        while (t) {
            r = t.style;
            if (r) {
                a = r.userSelect;
                if (a === "none") {
                    fr(e);
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
    Br("selectstart", na);
    Br("^click", Qr(ve));
    Br("^dblclick", Qr(ge));
    Br("contextmenu", Qr("onContextMenu", !0));
    Oe = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function ta(e, n, t) {
        var r, a, i, d, o, l;
        if (Pr(t)) {
            r = Rr(e.x, e.y, n, t);
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
        if (Oe == "mousewheel") {
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
        if (Dr("onMouseWheel", l) || cr(t, "onMouseWheel", l)) {
            fr(e);
            return !0;
        }
        return !1;
    }
    Br(Oe, ta);
    Be = function(e, n) {
        var t = ct() ? he : fe;
        Ce.push([ e, n, k() + t, 1 ]);
    };
    Me = e;
    Re = e;
    Te = [];
    function ra(n) {
        var t, r, a, i, d, o;
        t = document.hasFocus() || n ? document.activeElement : e;
        if (t !== Me) {
            Me = t;
            r = Et(Me);
            a = 0;
            while (a < Te.length && a < r.length && Te[a] === r[a]) a++;
            i = Te.length - 1;
            if (i >= a) {
                d = Te[i];
                if (d) {
                    o = d.component;
                    if (o && o.onBlur) o.onBlur(d.ctx);
                }
                i--;
            }
            while (i >= a) {
                d = Te[i];
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
            Te = r;
            Re = Te.length == 0 ? e : Jn(Te[Te.length - 1]);
        }
        return !1;
    }
    function aa() {
        setTimeout(function() {
            return ra(!1);
        }, 10);
        return !1;
    }
    Ht("^focus", 50, function() {
        return ra(!0);
    });
    Ht("^blur", 50, aa);
    function ia() {
        return Re;
    }
    Ve = [];
    function da(e, n, t) {
        var r, a;
        r = {
            node: t
        };
        for (a = 0; a < Ve.length; a++) {
            Ve[a](r);
        }
        return !1;
    }
    Ht("^scroll", 10, da);
    Ke = /^(?:html)$/i;
    Ue = /^(?:auto)$|^(?:scroll)$/i;
    Le = function() {
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
    He = 0;
    Xe = [];
    Ye = null;
    ze = null;
    Ge = {
        userSelect: ""
    };
    st(Ge);
    $e = Object.keys(Ge);
    qe = $e[$e.length - 1];
    We = function(n) {
        this.id = ++He;
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
        this.data = at();
        if (n >= 0) en[n] = this;
        Xe.push(this);
    };
    function oa() {
        var e;
        if (ze == null) {
            e = document.body.style;
            Gn = e.cursor;
            $n = e[qe];
            e[qe] = "none";
            ze = tr(ca);
        }
    }
    Ze = {
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
    function la() {
        var e = "no-drop", n;
        if (Xe.length !== 0) {
            n = Xe[0];
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
    Je = {
        render: function(e, n) {
            var t = [], r, a, i, d;
            for (r = 0; r < Xe.length; r++) {
                a = Xe[r];
                if (a.beforeDrag) continue;
                if (a.dragView != null && (a.x != 0 || a.y != 0)) {
                    t.push({
                        key: "" + a.id,
                        data: a,
                        component: Ze
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
            d = la();
            if (d && i.cursor !== d) i.cursor = d;
            n.children = t;
        },
        onDrag: function(e) {
            G(e);
            return !1;
        }
    };
    function ca() {
        return {
            component: Je
        };
    }
    Qe = We.prototype;
    Qe.setOperation = function(e) {
        this.operation = e;
    };
    Qe.setDragNodeView = function(e) {
        this.dragView = e;
    };
    Qe.addData = function(e, n) {
        this.data[e] = n;
        return !0;
    };
    Qe.listData = function() {
        return Object.keys(this.data);
    };
    Qe.hasData = function(n) {
        return this.data[n] !== e;
    };
    Qe.getData = function(e) {
        return this.data[e];
    };
    Qe.setEnabledOps = function(e) {
        this.enabledOperations = e;
    };
    Qe.cancelDnd = function() {
        ua(e, this);
        this.destroy();
    };
    Qe.destroy = function() {
        var e, n;
        this.ended = !0;
        if (this.started) ur("onDragEnd", this);
        delete en[this.pointerid];
        for (e = 0; e < Xe.length; e++) {
            if (Xe[e] === this) {
                Xe.splice(e, 1);
                break;
            }
        }
        if (Ye === this) {
            Ye = null;
        }
        if (Xe.length === 0 && ze != null) {
            rr(ze);
            ze = null;
            n = document.body.style;
            n.cursor = Gn;
            n[qe] = $n;
        }
    };
    en = at();
    function sa(e, n, t) {
        var r, a, i, d, o;
        r = en[e.id];
        if (r) {
            r.cancelDnd();
        }
        if (e.button <= 1) {
            r = new We(e.id);
            r.startX = e.x;
            r.startY = e.y;
            r.lastX = e.x;
            r.lastY = e.y;
            r.overNode = t;
            fa(r, e);
            a = cr(t, "onDragStart", r);
            if (a) {
                i = jt(a.me);
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
                    ua(t, r);
                }
                oa();
            } else {
                r.destroy();
            }
        }
        return !1;
    }
    function ua(e, n) {
        n.overNode = e;
        n.targetCtx = cr(e, "onDragOver", n);
        if (n.targetCtx == null) {
            n.operation = 0;
        }
        ur("onDrag", n);
    }
    function fa(e, n) {
        e.shift = n.shift;
        e.ctrl = n.ctrl;
        e.alt = n.alt;
        e.meta = n.meta;
        e.x = n.x;
        e.y = n.y;
    }
    function ha(e, n, t) {
        var r = en[e.id];
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
        fa(r, e);
        ua(t, r);
        r.lastX = e.x;
        r.lastY = e.y;
        return !0;
    }
    function pa(e, n, t) {
        var r, a;
        r = en[e.id];
        if (!r) return !1;
        if (!r.beforeDrag) {
            fa(r, e);
            ua(t, r);
            a = r.targetCtx;
            if (a && cr(a.me, "onDrop", r)) {
                r.destroy();
            } else {
                r.cancelDnd();
            }
            Be(e.x, e.y);
            return !0;
        }
        r.destroy();
        return !1;
    }
    function ma(e, n, t) {
        var r = en[e.id];
        if (!r) return !1;
        if (r.system) return !1;
        if (!r.beforeDrag) {
            r.cancelDnd();
        } else {
            r.destroy();
        }
        return !1;
    }
    function va(e, n) {
        var t;
        e.shift = n.shiftKey;
        e.ctrl = n.ctrlKey;
        e.alt = n.altKey;
        e.meta = n.metaKey;
        e.x = n.clientX;
        e.y = n.clientY;
        e.totalX += Math.abs(e.x - e.lastX);
        e.totalY += Math.abs(e.y - e.lastY);
        t = ea(e.x, e.y);
        ua(t, e);
        e.lastX = e.x;
        e.lastY = e.y;
    }
    nn = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function ga(e, n, t) {
        var r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        r = Ye;
        if (r != null) {
            r.destroy();
        }
        a = Object.keys(en);
        if (a.length > 0) {
            r = en[a[0]];
            r.system = !0;
            Ye = r;
        } else {
            i = e.clientX;
            d = e.clientY;
            r = new We(-1);
            r.system = !0;
            Ye = r;
            r.x = i;
            r.y = d;
            r.lastX = i;
            r.lastY = d;
            r.startX = i;
            r.startY = d;
            o = cr(t, "onDragStart", r);
            if (o) {
                l = jt(o.me);
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
                oa();
            } else {
                r.destroy();
                return !1;
            }
        }
        r.beforeDrag = !1;
        u = nn[r.enabledOperations];
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
                if (!et(S)) S = JSON.stringify(S);
                e.dataTransfer.setData(C, S);
            } catch (e) {}
        }
        va(r, e);
        return !1;
    }
    function ba(e, n) {
        e.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][n];
    }
    function ya(n, t, r) {
        var a, i, d, o, l, c, s;
        a = Ye;
        if (a == null) {
            a = new We(-1);
            a.system = !0;
            Ye = a;
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
                if (nn[d] === o) break;
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
        va(a, n);
        ba(n, a.operation);
        if (a.operation != 0) {
            fr(n);
            return !0;
        }
        return !1;
    }
    function xa(e, n, t) {
        var r, a, i;
        r = e.clientX;
        a = e.clientY;
        i = gr();
        if (Ye != null && (r === 0 && a === 0 || r < 0 || a < 0 || r >= i.width || a >= i.height)) {
            Ye.x = 0;
            Ye.y = 0;
            Ye.operation = 0;
            ur("onDrag", Ye);
        }
        return !1;
    }
    function wa(e, n, t) {
        if (Ye != null) {
            Ye.destroy();
        }
        return !1;
    }
    function Ca(e, n, t) {
        var r, a, i, d, o, l, c;
        r = Ye;
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
        va(r, e);
        c = r.targetCtx;
        if (c && cr(c.me, "onDrop", r)) {
            ba(e, r.operation);
            r.destroy();
            fr(e);
        } else {
            r.cancelDnd();
        }
        return !0;
    }
    function Sa(e, n, t) {
        fr(e);
        return !0;
    }
    function ka(e, n, t) {
        if (Xe.length === 0) return !1;
        fr(e);
        return !0;
    }
    Ht("!PointerDown", 4, sa);
    Ht("!PointerMove", 4, ha);
    Ht("!PointerUp", 4, pa);
    Ht("!PointerCancel", 4, ma);
    Ht("selectstart", 4, ka);
    Ht("dragstart", 5, ga);
    Ht("dragover", 5, ya);
    Ht("dragend", 5, wa);
    Ht("drag", 5, xa);
    Ht("drop", 5, Ca);
    Ht("dragenter", 5, Sa);
    Ht("dragleave", 5, Sa);
    tn = function() {
        return Xe;
    };
    rn = -1;
    function Ia() {
        if (rn >= 0) clearTimeout(rn);
        rn = -1;
        G();
        return !1;
    }
    Ht("hashchange", 10, Ia);
    an = 0;
    dn = "";
    on = {};
    ln = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
    cn = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
    sn = {};
    un = [];
    fn = at();
    hn = [];
    pn = [];
    mn = /.*(?:\:|\/).*/;
    vn = !0;
    gn = null;
    bn = null;
    yn = 0;
    xn = 1;
    wn = at();
    Cn = at();
    Sn = at();
    kn = [];
    In = at();
    Nn = "";
    _n = !1;
    En = null;
    Dn = 0;
    Pn = ct() === 9;
    Fn = $t(Da);
    An = /\:|\ |\>/;
    function Na(e) {
        var n, t;
        n = An.exec(e);
        if (!n) return wn[e].name;
        t = n.index;
        return wn[e.substring(0, t)].name + e.substring(t);
    }
    function _a(e, n) {
        var t = "", r;
        if (e) {
            if (i(e)) {
                for (r = 0; r < e.length; r++) {
                    if (r > 0) {
                        t += ",";
                    }
                    t += "." + Na(e[r]) + "." + n;
                }
            } else {
                t = "." + Na(e) + "." + n;
            }
        } else {
            t = "." + n;
        }
        return t;
    }
    function Ea(n, t, r, a) {
        var d, o, l, c, s, u;
        if (et(r)) {
            d = wn[r];
            if (d === e) {
                throw new Error("Unknown style " + r);
            }
            Ea(n, t, d.style, d.pseudo);
        } else if (nt(r)) {
            r(n, t);
        } else if (i(r)) {
            for (o = 0; o < r.length; o++) {
                Ea(n, t, r[o], e);
            }
        } else if (typeof r === "object") {
            for (s in r) {
                if (!Object.prototype.hasOwnProperty.call(r, s)) continue;
                l = r[s];
                if (nt(l)) {
                    l = l(n, s);
                }
                n[s] = l;
            }
        }
        if (a != null && t != null) {
            for (u in a) {
                c = t[u];
                if (c === e) {
                    c = at();
                    t[u] = c;
                }
                Ea(c, e, a[u], e);
            }
        }
    }
    jn = !1;
    function Da() {
        var n, t, r, a, i, d, o, l, c, s, u, f, h, p, m, v, g, b, y, x, w, C, S;
        n = document.body.style;
        if (jn && A >= 150) {
            n.opacity = "1";
            jn = !1;
        }
        if (_n) {
            if (j === 1 && "webkitAnimation" in n) {
                jn = !0;
                n.opacity = "0";
                setTimeout(G, 200);
            }
            for (t = 0; t < kn.length; t++) {
                r = kn[t];
                a = In[r.url];
                if (a == null) continue;
                i = r.color();
                if (i !== r.lastColor) {
                    r.lastColor = i;
                    if (r.width == null) r.width = a.width;
                    if (r.height == null) r.height = a.height;
                    d = ja(a, i, r.width, r.height, r.left, r.top);
                    o = wn[r.styleId];
                    o.style = {
                        backgroundImage: "url(" + d + ")",
                        width: r.width,
                        height: r.height,
                        backgroundPosition: 0
                    };
                }
            }
            l = Nn;
            for (C in wn) {
                c = wn[C];
                s = c.parent;
                u = c.name;
                f = c.pseudo;
                h = c.style;
                if (nt(h) && h.length === 0) {
                    p = h(), h = p[0], f = p[1];
                }
                if (et(h) && f == null) {
                    c.realName = h;
                    qn(u != null, "Cannot link existing class to selector");
                    continue;
                }
                c.realName = u;
                m = at();
                v = at();
                Ea(e, v, e, f);
                Ea(m, v, h, e);
                g = null;
                if (m["pointerEvents"]) {
                    g = at();
                    g["pointerEvents"] = m["pointerEvents"];
                }
                if (Pn) {
                    if (m["userSelect"]) {
                        if (g == null) g = at();
                        g["userSelect"] = m["userSelect"];
                        delete m["userSelect"];
                    }
                }
                c.inlStyle = g;
                st(m);
                b = Fa(m);
                if (b.length > 0) l += (u == null ? s : _a(s, u)) + " {" + b + "}\n";
                for (S in v) {
                    y = v[S];
                    st(y);
                    l += (u == null ? s + ":" + S : _a(s, u + ":" + S)) + " {" + Fa(y) + "}\n";
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
            if (En != null) {
                w.replaceChild(x, En);
            } else {
                w.appendChild(x);
            }
            En = x;
            _n = !1;
        }
        Fn();
    }
    On = /([A-Z])/g;
    Bn = /^ms-/;
    function Pa(e) {
        if (e === "cssFloat") return "float";
        return e.replace(On, "-$1").toLowerCase().replace(Bn, "-ms-");
    }
    function Fa(n) {
        var t = "", r, a;
        for (a in n) {
            r = n[a];
            if (r === e) continue;
            t += Pa(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        t = t.slice(0, -1);
        return t;
    }
    function Aa() {
        _n = !0;
        G();
    }
    Mn = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function ja(e, n, t, r, a, i) {
        var d, o, l, c, s, u, f, h, p, m, v, g;
        d = document.createElement("canvas");
        d.width = t;
        d.height = r;
        o = d.getContext("2d");
        o.drawImage(e, -a, -i);
        l = o.getImageData(0, 0, t, r);
        c = l.data;
        s = Mn.exec(n);
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
    Rn = 0;
    Tn = "b@funcId";
    Vn = !1;
    Kn = window["bobrilBPath"] || "bundle.png";
    function Oa(n) {
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
        deref: Dt,
        getRoots: ar,
        setInvalidate: nr,
        invalidateStyles: Aa,
        ignoreShouldChange: er,
        setAfterFrame: qt,
        setBeforeFrame: $t,
        getDnds: tn,
        setBeforeInit: lr
    };
    or(function() {
        return "hello";
    });
}();

