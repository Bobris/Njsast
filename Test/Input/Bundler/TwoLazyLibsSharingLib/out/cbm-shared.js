!function(t) {
    "use strict";
    var n, _, e, s, r, a;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, e, s;
        for (n = 1, _ = arguments.length; n < _; n++) {
            e = arguments[n];
            for (s in e) if (Object.prototype.hasOwnProperty.call(e, s)) t[s] = e[s];
        }
        return t;
    };
    e;
    s;
    r;
    a = !1;
    function i() {
        console.log("shared");
    }
    __bbb.e = i;
}();

