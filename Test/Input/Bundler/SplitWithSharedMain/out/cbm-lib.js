(function(r) {
    "use strict";
    var t, _;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(r, t) {
        r.__proto__ = t;
    } || function(r, t) {
        var _;
        for (_ in t) if (t.hasOwnProperty(_)) r[_] = t[_];
    };
    Object.assign || function(r) {
        var t, _, e, n;
        for (t = 1, _ = arguments.length; t < _; t++) {
            e = arguments[t];
            for (n in e) if (Object.prototype.hasOwnProperty.call(e, n)) r[n] = e[n];
        }
        return r;
    };
    t = __bbb.b;
    t();
    function e() {
        return "Hello";
    }
    _ = {
        hello: e
    };
    __bbb.a = _;
})();

