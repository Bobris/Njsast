(function(r) {
    "use strict";
    var e, t;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(r, e) {
        r.__proto__ = e;
    } || function(r, e) {
        var t;
        for (t in e) if (e.hasOwnProperty(t)) r[t] = e[t];
    };
    Object.assign || function(r) {
        var e, t, n, o;
        for (e = 1, t = arguments.length; e < t; e++) {
            n = arguments[e];
            for (o in n) if (Object.prototype.hasOwnProperty.call(n, o)) r[o] = n[o];
        }
        return r;
    };
    e = function(e, t) {
        var n, o;
        n = __bbb;
        o = n[t];
        if (o !== r) {
            if (o instanceof Promise) return o;
            return Promise.resolve(o);
        }
        o = new Promise(function(i, p) {
            var s, b;
            s = document.createElement("script");
            b = setTimeout(u, 120000);
            function u() {
                s.onload = s.onerror = r;
                clearTimeout(b);
                if (n[t] === o) {
                    n[t] = r;
                    p(new Error("Fail to load " + e));
                } else i(n[t]);
            }
            s.charset = "utf-8";
            s.onload = s.onerror = u;
            s.src = e;
            document.head.appendChild(s);
        });
        return n[t] = o;
    };
    e(r, "b").then(function(r) {
        return r.shared();
    });
    function n() {
        return "Hello";
    }
    t = {
        hello: n
    };
    __bbb.a = t;
})();

