!function(r) {
    "use strict";
    var e, t, n, o, i, s, p, _;
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
    i;
    s = function(e, t) {
        var n, o;
        n = __bbb;
        o = n[t];
        if (o !== r) {
            if (o instanceof Promise) return o;
            return Promise.resolve(o);
        }
        o = new Promise(function(i, s) {
            var p, _;
            p = document.createElement("script");
            _ = setTimeout(a, 120000);
            function a() {
                p.onload = p.onerror = r;
                clearTimeout(_);
                if (n[t] === o) {
                    n[t] = r;
                    s(new Error("Fail to load " + e));
                } else i(n[t]);
            }
            p.charset = "utf-8";
            p.onload = p.onerror = a;
            p.src = e;
            document.head.appendChild(p);
        });
        return n[t] = o;
    };
    p = !1;
    s(r, "b").then(function(r) {
        return r.shared();
    });
    function a() {
        return "Hello";
    }
    _ = {
        hello: a
    };
    __bbb.a = _;
}();

