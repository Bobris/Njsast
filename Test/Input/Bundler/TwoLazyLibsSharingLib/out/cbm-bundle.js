var __bbb = {};

(function(r) {
    "use strict";
    var e;
    e = function(e, t) {
        var o, n;
        o = __bbb;
        n = o[t];
        if (n !== r) {
            if (n instanceof Promise) return n;
            return Promise.resolve(n);
        }
        n = new Promise(function(i, s) {
            var b, c;
            b = document.createElement("script");
            c = setTimeout(p, 12e4);
            function p() {
                b.onload = b.onerror = r;
                clearTimeout(c);
                if (o[t] === n) {
                    o[t] = r;
                    s(new Error("Fail to load " + e));
                } else i(o[t]);
            }
            b.charset = "utf-8";
            b.onload = b.onerror = p;
            b.src = e;
            document.head.appendChild(b);
        });
        return o[t] = n;
    };
    e("cbm-shared.js", "a").then(function() {
        return e("cbm-lib.js", "b");
    }).then(function(r) {
        console.log(r.hello());
    });
    e("cbm-shared.js", "a").then(function() {
        return e("cbm-lib2.js", "c");
    }).then(function(r) {
        console.log(r.world());
    });
}).call(this);

