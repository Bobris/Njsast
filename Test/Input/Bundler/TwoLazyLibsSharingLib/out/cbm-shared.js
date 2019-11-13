!function(t) {
    "use strict";
    var n, s, e, _, r;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var s;
        for (s in n) if (n.hasOwnProperty(s)) t[s] = n[s];
    };
    s = Object.assign || function(t) {
        var n, s, e, _;
        for (n = 1, s = arguments.length; n < s; n++) {
            e = arguments[n];
            for (_ in e) if (Object.prototype.hasOwnProperty.call(e, _)) t[_] = e[_];
        }
        return t;
    };
    e;
    _;
    r = !1;
    function i() {
        console.log("shared");
    }
    __bbb.e = i;
}();

