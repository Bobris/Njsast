(function(e) {
    "use strict";
    var r, t;
    Object.setPrototypeOf;
    Object.assign;
    r = function(r, t) {
        var o, n;
        o = __bbb;
        n = o[t];
        if (n !== e) {
            if (n instanceof Promise) return n;
            return Promise.resolve(n);
        }
        n = new Promise(function(i, s) {
            var p, b;
            p = document.createElement("script");
            b = setTimeout(u, 120000);
            function u() {
                p.onload = p.onerror = e;
                clearTimeout(b);
                if (o[t] === n) {
                    o[t] = e;
                    s(new Error("Fail to load " + r));
                } else i(o[t]);
            }
            p.charset = "utf-8";
            p.onload = p.onerror = u;
            p.src = r;
            document.head.appendChild(p);
        });
        return o[t] = n;
    };
    r(e, "b").then(function(e) {
        return e.shared();
    });
    function o() {
        return "Hello";
    }
    t = {
        hello: o
    };
    __bbb.a = t;
})();

