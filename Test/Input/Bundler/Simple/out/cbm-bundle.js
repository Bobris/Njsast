!function(t) {
    "use strict";
    var n, o, e;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var o;
        for (o in n) if (n.hasOwnProperty(o)) t[o] = n[o];
    };
    o = Object.assign || function(t) {
        var n, o, e, r;
        for (n = 1, o = arguments.length; n < o; n++) {
            e = arguments[n];
            for (r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
        }
        return t;
    };
    e = !1;
    function r() {
        return "Hello";
    }
    console.log(r());
}();

