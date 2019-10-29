!function(t) {
    "use strict";
    var _, e, n, r, o, i, a;
    _ = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, _) {
        t.__proto__ = _;
    } || function(t, _) {
        var e;
        for (e in _) if (_.hasOwnProperty(e)) t[e] = _[e];
    };
    e = Object.assign || function(t) {
        var _, e, n, r;
        for (_ = 1, e = arguments.length; _ < e; _++) {
            n = arguments[_];
            for (r in n) if (Object.prototype.hasOwnProperty.call(n, r)) t[r] = n[r];
        }
        return t;
    };
    n;
    r;
    o;
    i = !1;
    function s() {
        return "Hello";
    }
    a = {
        hello: s
    };
    __bbb.a = a;
}();

