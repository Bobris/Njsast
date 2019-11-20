(function(n) {
    "use strict";
    var t = "OK";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var o;
        for (o in t) if (t.hasOwnProperty(o)) n[o] = t[o];
    };
    Object.assign || function(n) {
        var t, o, r, e;
        for (t = 1, o = arguments.length; t < o; t++) {
            r = arguments[t];
            for (e in r) if (Object.prototype.hasOwnProperty.call(r, e)) n[e] = r[e];
        }
        return n;
    };
    function o(n) {
        return n;
    }
    function r(n) {
        return n;
    }
    o("KO");
    function e() {
        var n = r("hello");
        console.log(n);
    }
    e();
    console.log(t);
})();

