!function(t) {
    "use strict";
    var n, _, i, o, e, r;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, i, o;
        for (n = 1, _ = arguments.length; n < _; n++) {
            i = arguments[n];
            for (o in i) if (Object.prototype.hasOwnProperty.call(i, o)) t[o] = i[o];
        }
        return t;
    };
    i;
    o;
    e = !1;
    r = Date.now;
    function s() {
        r();
    }
    s();
}();

