!function(t) {
    "use strict";
    var n, e, o, r, _;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, o, r;
        for (n = 1, e = arguments.length; n < e; n++) {
            o = arguments[n];
            for (r in o) if (Object.prototype.hasOwnProperty.call(o, r)) t[r] = o[r];
        }
        return t;
    };
    o = !1;
    function i(t) {
        return t;
    }
    function p(t) {
        return t;
    }
    r = "OK";
    _ = i("KO");
    function a() {
        var t = p("hello");
        console.log(t);
    }
    a();
    console.log(r);
}();

