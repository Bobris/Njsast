!function(t) {
    "use strict";
    var n, _, i, s, e;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, i, s;
        for (n = 1, _ = arguments.length; n < _; n++) {
            i = arguments[n];
            for (s in i) if (Object.prototype.hasOwnProperty.call(i, s)) t[s] = i[s];
        }
        return t;
    };
    i;
    s;
    e = !1;
    function r() {
        return "OK";
    }
    console.log(r());
}();

