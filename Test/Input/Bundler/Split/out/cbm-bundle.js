var __bbb = {};

!function(r) {
    "use strict";
    var e, t, n, i, o, s;
    e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(r, e) {
        r.__proto__ = e;
    } || function(r, e) {
        var t;
        for (t in e) if (e.hasOwnProperty(t)) r[t] = e[t];
    };
    t = Object.assign || function(r) {
        var e, t, n, i;
        for (e = 1, t = arguments.length; e < t; e++) {
            n = arguments[e];
            for (i in n) if (Object.prototype.hasOwnProperty.call(n, i)) r[i] = n[i];
        }
        return r;
    };
    n;
    i;
    o = function(e, t) {
        var n, i;
        n = __bbb;
        i = n[t];
        if (i !== r) {
            if (i instanceof Promise) return i;
            return Promise.resolve(i);
        }
        i = new Promise(function(o, s) {
            var p, b;
            p = document.createElement("script");
            b = setTimeout(a, 120000);
            function a() {
                p.onload = p.onerror = r;
                clearTimeout(b);
                if (n[t] === i) {
                    n[t] = r;
                    s(new Error("Fail to load " + e));
                } else o(n[t]);
            }
            p.charset = "utf-8";
            p.onload = p.onerror = a;
            p.src = e;
            document.head.appendChild(p);
        });
        return n[t] = i;
    };
    s = !1;
    o("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
}();

