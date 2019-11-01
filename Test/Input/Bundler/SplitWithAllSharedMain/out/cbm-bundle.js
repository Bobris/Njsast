var __bbb = {};

!function(r) {
    "use strict";
    var e, t, n, o, s, i, _, p;
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
    s;
    i = function(e, t) {
        var n, o;
        n = __bbb;
        o = n[t];
        if (o !== r) {
            if (o instanceof Promise) return o;
            return Promise.resolve(o);
        }
        o = new Promise(function(s, i) {
            var _, p;
            _ = document.createElement("script");
            p = setTimeout(a, 120000);
            function a() {
                _.onload = _.onerror = r;
                clearTimeout(p);
                if (n[t] === o) {
                    n[t] = r;
                    i(new Error("Fail to load " + e));
                } else s(n[t]);
            }
            _.charset = "utf-8";
            _.onload = _.onerror = a;
            _.src = e;
            document.head.appendChild(_);
        });
        return n[t] = o;
    };
    _ = !1;
    function a() {
        console.log("shared");
    }
    function b() {
        return "unused";
    }
    p = {
        shared: a,
        unused: b
    };
    a();
    i("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
    __bbb.b = p;
}();

