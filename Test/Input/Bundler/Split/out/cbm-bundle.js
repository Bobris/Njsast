var __bbb = {};

!function(r) {
    "use strict";
    var e, t, n, o;
    e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(r, e) {
        r.__proto__ = e;
    } || function(r, e) {
        var t;
        for (t in e) if (e.hasOwnProperty(t)) r[t] = e[t];
    };
    t = Object.assign || function(r) {
        var e, t, n, o;
        for (e = 1, t = arguments.length; e < t; e++) {
            n = arguments[e];
            for (o in n) if (Object.prototype.hasOwnProperty.call(n, o)) r[o] = n[o];
        }
        return r;
    };
    n = function(e, t) {
        var n, o;
        n = __bbb;
        o = n[t];
        if (o !== r) {
            if (o instanceof Promise) return o;
            return Promise.resolve(o);
        }
        o = new Promise(function(i, s) {
            var p, b;
            p = document.createElement("script");
            b = setTimeout(c, 120000);
            function c() {
                p.onload = p.onerror = r;
                clearTimeout(b);
                if (n[t] === o) {
                    n[t] = r;
                    s(new Error("Fail to load " + e));
                } else i(n[t]);
            }
            p.charset = "utf-8";
            p.onload = p.onerror = c;
            p.src = e;
            document.head.appendChild(p);
        });
        return n[t] = o;
    };
    o = !1;
    n("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
}();

