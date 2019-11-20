!function(t) {
    "use strict";
    var n, i, r;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var i;
        for (i in n) if (n.hasOwnProperty(i)) t[i] = n[i];
    };
    i = Object.assign || function(t) {
        var n, i, r, s;
        for (n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (s in r) if (Object.prototype.hasOwnProperty.call(r, s)) t[s] = r[s];
        }
        return t;
    };
    r = !1;
    function s() {
        return "OK";
    }
    console.log(s());
}();

