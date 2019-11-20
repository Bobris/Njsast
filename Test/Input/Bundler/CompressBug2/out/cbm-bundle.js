!function(t) {
    "use strict";
    var n, o, i, _;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var o;
        for (o in n) if (n.hasOwnProperty(o)) t[o] = n[o];
    };
    o = Object.assign || function(t) {
        var n, o, i, _;
        for (n = 1, o = arguments.length; n < o; n++) {
            i = arguments[n];
            for (_ in i) if (Object.prototype.hasOwnProperty.call(i, _)) t[_] = i[_];
        }
        return t;
    };
    i = !1;
    _ = Date.now;
    function r() {
        _();
    }
    r();
}();

