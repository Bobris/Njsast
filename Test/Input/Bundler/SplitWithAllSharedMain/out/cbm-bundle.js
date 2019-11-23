var __bbb = {};

!function(r) {
    "use strict";
    var e, o;
    e = function(e, o) {
        var n, t;
        n = __bbb;
        t = n[o];
        if (t !== r) {
            if (t instanceof Promise) return t;
            return Promise.resolve(t);
        }
        t = new Promise(function(s, i) {
            var u, b;
            u = document.createElement("script");
            b = setTimeout(p, 120000);
            function p() {
                u.onload = u.onerror = r;
                clearTimeout(b);
                if (n[o] === t) {
                    n[o] = r;
                    i(new Error("Fail to load " + e));
                } else s(n[o]);
            }
            u.charset = "utf-8";
            u.onload = u.onerror = p;
            u.src = e;
            document.head.appendChild(u);
        });
        return n[o] = t;
    };
    function n() {
        console.log("shared");
    }
    function t() {
        return "unused";
    }
    o = {
        shared: n,
        unused: t
    };
    n();
    e("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
    __bbb.b = o;
}();

