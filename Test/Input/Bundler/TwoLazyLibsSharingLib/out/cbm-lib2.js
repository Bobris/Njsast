!function(_) {
    "use strict";
    var t, r, n, e, s;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, t) {
        _.__proto__ = t;
    } || function(_, t) {
        var r;
        for (r in t) if (t.hasOwnProperty(r)) _[r] = t[r];
    };
    r = Object.assign || function(_) {
        var t, r, n, e;
        for (t = 1, r = arguments.length; t < r; t++) {
            n = arguments[t];
            for (e in n) if (Object.prototype.hasOwnProperty.call(n, e)) _[e] = n[e];
        }
        return _;
    };
    n = !1;
    e = __bbb.e;
    e();
    function o() {
        return "World";
    }
    s = {
        world: o
    };
    __bbb.c = s;
}();

