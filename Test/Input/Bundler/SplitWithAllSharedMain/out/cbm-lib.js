(function(r) {
    "use strict";
    var t, e;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(r, t) {
        r.__proto__ = t;
    } || function(r, t) {
        var e;
        for (e in t) if (t.hasOwnProperty(e)) r[e] = t[e];
    };
    Object.assign || function(r) {
        var t, e, n, _;
        for (t = 1, e = arguments.length; t < e; t++) {
            n = arguments[t];
            for (_ in n) if (Object.prototype.hasOwnProperty.call(n, _)) r[_] = n[_];
        }
        return r;
    };
    t = __bbb.b;
    e = t;
    e.shared();
    function n() {
        return "Hello";
    }
    ({
        hello: n
    });
    __bbb.a = _;
})();

