!function(_) {
    "use strict";
    var t, r, e, n, s, a, o, i;
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
    s;
    a = !1;
    o = __bbb.e;
    o();
    function p() {
        return "World";
    }
    i = {
        world: p
    };
    __bbb.c = i;
}();

