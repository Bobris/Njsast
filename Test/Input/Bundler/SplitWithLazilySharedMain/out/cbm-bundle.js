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
        n = new Promise(function(i, s) {
            var b, u;
            b = document.createElement("script");
            u = setTimeout(p, 12e4);
            function p() {
                b.onload = b.onerror = r;
                clearTimeout(u);
                if (t[o] === n) {
                    t[o] = r;
                    s(new Error("Fail to load " + e));
                } else i(t[o]);
            }
            b.charset = "utf-8";
            b.onload = b.onerror = p;
            b.src = e;
            document.head.appendChild(b);
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

