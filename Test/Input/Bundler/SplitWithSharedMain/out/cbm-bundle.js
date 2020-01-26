var __bbb = {};

(function(r) {
    "use strict";
    var e;
    e = function(e, o) {
        var t, i;
        t = __bbb;
        i = t[o];
        if (i !== r) {
            if (i instanceof Promise) return i;
            return Promise.resolve(i);
        }
        i = new Promise(function(n, s) {
            var b, c;
            b = document.createElement("script");
            c = setTimeout(p, 120000);
            function p() {
                b.onload = b.onerror = r;
                clearTimeout(c);
                if (t[o] === i) {
                    t[o] = r;
                    s(new Error("Fail to load " + e));
                } else n(t[o]);
            }
            b.charset = "utf-8";
            b.onload = b.onerror = p;
            b.src = e;
            document.head.appendChild(b);
        });
        return t[o] = i;
    };
    function o() {
        console.log("shared");
    }
    o();
    e("cbm-lib.js", "a").then(function(r) {
        console.log(r.hello());
    });
    __bbb.b = o;
}).call(this);

