(function(r) {
    "use strict";
    var t;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(r, t) {
        r.__proto__ = t;
    } || function(r, t) {
        var n;
        for (n in t) if (t.hasOwnProperty(n)) r[n] = t[n];
    };
    Object.assign || function(r) {
        var t, n, e, _;
        for (t = 1, n = arguments.length; t < n; t++) {
            e = arguments[t];
            for (_ in e) if (Object.prototype.hasOwnProperty.call(e, _)) r[_] = e[_];
        }
        return r;
    };
    t = __bbb.e;
    t();
    function n() {
        return "World";
    }
    ({
        world: n
    });
    __bbb.c = e;
})();

