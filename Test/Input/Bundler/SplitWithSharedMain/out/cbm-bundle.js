var __bbb = {};

(function(r) {
    "use strict";
    var e;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(r, e) {
        r.__proto__ = e;
    } || function(r, e) {
        var t;
        for (t in e) if (e.hasOwnProperty(t)) r[t] = e[t];
    };
    Object.assign || function(r) {
        var e, t, o, n;
        for (e = 1, t = arguments.length; e < t; e++) {
            o = arguments[e];
            for (n in o) if (Object.prototype.hasOwnProperty.call(o, n)) r[n] = o[n];
        }
        return r;
    };
    e = function(e, t) {
        var o, n;
        o = __bbb;
        n = o[t];
        if (n !== r) {
            if (n instanceof Promise) return n;
            return Promise.resolve(n);
        }
        n = new Promise(function(i, s) {
            var p, b;
            p = document.createElement("script");
            b = setTimeout(c, 120000);
            function c() {
                p.onload = p.onerror = r;
                clearTimeout(b);
                if (o[t] === n) {
                    o[t] = r;
                    s(new Error("Fail to load " + e));
                } else i(o[t]);
            }
            p.charset = "utf-8";
            p.onload = p.onerror = c;
            p.src = e;
            document.head.appendChild(p);
        });
        return o[t] = n;
    };
    function t() {
        console.log("shared");
    }
    t();
    e("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
    __bbb.b = t;
})();

