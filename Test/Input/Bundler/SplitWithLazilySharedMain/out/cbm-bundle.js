var __bbb = {};

(function(r) {
    "use strict";
    var e, o;
    e = function(e, o) {
        var t, n;
        t = __bbb;
        n = t[o];
        if (n !== r) {
            if (n instanceof Promise) return n;
            return Promise.resolve(n);
        }
        n = new Promise(function(s, i) {
            var u, b;
            u = document.createElement("script");
            b = setTimeout(p, 120000);
            function p() {
                u.onload = u.onerror = r;
                clearTimeout(b);
                if (t[o] === n) {
                    t[o] = r;
                    i(new Error("Fail to load " + e));
                } else s(t[o]);
            }
            u.charset = "utf-8";
            u.onload = u.onerror = p;
            u.src = e;
            document.head.appendChild(u);
        });
        return t[o] = n;
    };
    function t() {
        console.log("shared");
    }
    function n() {
        return "unused";
    }
    o = {
        shared: t,
        unused: n
    };
    t();
    e("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
    __bbb.b = o;
}).call(this);

