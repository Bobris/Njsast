(function(r) {
    "use strict";
    var e, t;
    e = function(e, t) {
        var o, n;
        o = __bbb;
        n = o[t];
        if (n !== r) {
            if (n instanceof Promise) return n;
            return Promise.resolve(n);
        }
        n = new Promise(function(i, s) {
            var p, u;
            p = document.createElement("script");
            u = setTimeout(b, 120000);
            function b() {
                p.onload = p.onerror = r;
                clearTimeout(u);
                if (o[t] === n) {
                    o[t] = r;
                    s(new Error("Fail to load " + e));
                } else i(o[t]);
            }
            p.charset = "utf-8";
            p.onload = p.onerror = b;
            p.src = e;
            document.head.appendChild(p);
        });
        return o[t] = n;
    };
    e(r, "b").then(function(r) {
        return r.shared();
    });
    function o() {
        return "Hello";
    }
    t = {
        hello: o
    };
    __bbb.a = t;
}).call(this);

