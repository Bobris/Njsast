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
        var t, _, n, e;
        for (t = 1, _ = arguments.length; t < _; t++) {
            n = arguments[t];
            for (e in n) if (Object.prototype.hasOwnProperty.call(n, e)) r[e] = n[e];
        }
        return r;
    };
    t = __bbb.e;
    t();
    function n() {
        return "World";
    }
    _ = {
        world: n
    };
    __bbb.c = _;
})();

