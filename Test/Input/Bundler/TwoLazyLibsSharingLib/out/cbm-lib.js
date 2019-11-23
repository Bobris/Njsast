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
        var t, e, _, n;
        for (t = 1, e = arguments.length; t < e; t++) {
            _ = arguments[t];
            for (n in _) if (Object.prototype.hasOwnProperty.call(_, n)) r[n] = _[n];
        }
        return r;
    };
    t = __bbb.e;
    t();
    function _() {
        return "Hello";
    }
    e = {
        hello: _
    };
    __bbb.b = e;
})();

