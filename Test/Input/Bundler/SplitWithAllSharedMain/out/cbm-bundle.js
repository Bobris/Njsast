var __bbb = {};

(function(e) {
    "use strict";
    var r, o;
    r = function(r, o) {
        var t, n;
        t = __bbb;
        n = t[o];
        if (n !== e) {
            if (n instanceof Promise) return n;
            return Promise.resolve(n);
        }
        n = new Promise(function(s, i) {
            var u, b;
            u = document.createElement("script");
            b = setTimeout(p, 12e4);
            function p() {
                u.onload = u.onerror = e;
                clearTimeout(b);
                if (t[o] === n) {
                    t[o] = e;
                    i(new Error("Fail to load " + r));
                } else s(t[o]);
            }
            u.charset = "utf-8";
            u.onload = u.onerror = p;
            u.src = r;
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
    r("cbm-lib.js", "a").then(function(e) {
        console.log(e.hello());
    });
    __bbb.b = o;
}).call(this);

