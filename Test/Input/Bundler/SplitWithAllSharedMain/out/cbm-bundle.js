var __bbb = {};

!function(r) {
    "use strict";
    var e, t, n, o, s, i, p;
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
    n;
    o;
    s = function(e, t) {
        var n, o;
        n = __bbb;
        o = n[t];
        if (o !== r) {
            if (o instanceof Promise) return o;
            return Promise.resolve(o);
        }
        o = new Promise(function(s, i) {
            var p, _;
            p = document.createElement("script");
            _ = setTimeout(b, 120000);
            function b() {
                p.onload = p.onerror = r;
                clearTimeout(_);
                if (n[t] === o) {
                    n[t] = r;
                    i(new Error("Fail to load " + e));
                } else s(n[t]);
            }
            p.charset = "utf-8";
            p.onload = p.onerror = b;
            p.src = e;
            document.head.appendChild(p);
        });
        return n[t] = o;
    };
    i = !1;
    function _() {
        console.log("shared");
    }
    function b() {
        return "unused";
    }
    p = {
        shared: _,
        unused: b
    };
    _();
    s("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
    __bbb.b = p;
}();

