!function(_) {
    "use strict";
    var t, r, e, n, s, a, o;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, t) {
        _.__proto__ = t;
    } || function(_, t) {
        var r;
        for (r in t) if (t.hasOwnProperty(r)) _[r] = t[r];
    };
    r = Object.assign || function(_) {
        var t, r, e, n;
        for (t = 1, r = arguments.length; t < r; t++) {
            e = arguments[t];
            for (n in e) if (Object.prototype.hasOwnProperty.call(e, n)) _[n] = e[n];
        }
        return _;
    };
    e;
    n;
    s = !1;
    a = __bbb.e;
    a();
    function i() {
        return "World";
    }
    o = {
        world: i
    };
    __bbb.c = o;
}();

