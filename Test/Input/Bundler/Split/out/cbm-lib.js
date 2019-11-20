(function(t) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var o;
        for (o in n) if (n.hasOwnProperty(o)) t[o] = n[o];
    };
    Object.assign || function(t) {
        var n, o, r, e;
        for (n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (e in r) if (Object.prototype.hasOwnProperty.call(r, e)) t[e] = r[e];
        }
        return t;
    };
    function n() {
        return "Hello";
    }
    ({
        hello: n
    });
    __bbb.a = o;
})();

