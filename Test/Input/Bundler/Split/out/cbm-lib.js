!function(t) {
    "use strict";
    var n, e, _, r;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, _, r;
        for (n = 1, e = arguments.length; n < e; n++) {
            _ = arguments[n];
            for (r in _) if (Object.prototype.hasOwnProperty.call(_, r)) t[r] = _[r];
        }
        return t;
    };
    _ = !1;
    function o() {
        return "Hello";
    }
    r = {
        hello: o
    };
    __bbb.a = r;
}();

