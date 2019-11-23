var __bbb = {};

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
        n = new Promise(function(s, i) {
            var b, u;
            b = document.createElement("script");
            u = setTimeout(p, 120000);
            function p() {
                b.onload = b.onerror = e;
                clearTimeout(u);
                if (o[t] === n) {
                    o[t] = e;
                    i(new Error("Fail to load " + r));
                } else s(o[t]);
            }
            b.charset = "utf-8";
            b.onload = b.onerror = p;
            b.src = r;
            document.head.appendChild(b);
        });
        return o[t] = n;
    };
    function o() {
        console.log("shared");
    }
    function n() {
        return "unused";
    }
    t = {
        shared: o,
        unused: n
    };
    o();
    r("cbm-lib.js", "a").then(function(e) {
        console.log(e.hello());
    });
    __bbb.b = t;
})();

