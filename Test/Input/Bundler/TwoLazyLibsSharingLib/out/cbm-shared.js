!function(t) {
    "use strict";
    var n, s, e;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var s;
        for (s in n) if (n.hasOwnProperty(s)) t[s] = n[s];
    };
    s = Object.assign || function(t) {
        var n, s, e, r;
        for (n = 1, s = arguments.length; n < s; n++) {
            e = arguments[n];
            for (r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
        }
        return t;
    };
    e = !1;
    function r() {
        console.log("shared");
    }
    __bbb.e = r;
}();

