!function(_) {
    "use strict";
    var t, s, n, e, i, r, a;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, t) {
        _.__proto__ = t;
    } || function(_, t) {
        var s;
        for (s in t) if (t.hasOwnProperty(s)) _[s] = t[s];
    };
    s = Object.assign || function(_) {
        var t, s, n, e;
        for (t = 1, s = arguments.length; t < s; t++) {
            n = arguments[t];
            for (e in n) if (Object.prototype.hasOwnProperty.call(n, e)) _[e] = n[e];
        }
        return _;
    };
    n;
    e;
    i = !1;
    r = _;
    a = r;
    function o() {}
    o();
}();

