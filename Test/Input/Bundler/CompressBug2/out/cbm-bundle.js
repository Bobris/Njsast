(function(t) {
    "use strict";
    var n;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var o;
        for (o in n) if (n.hasOwnProperty(o)) t[o] = n[o];
    };
    Object.assign || function(t) {
        var n, o, r, i;
        for (n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (i in r) if (Object.prototype.hasOwnProperty.call(r, i)) t[i] = r[i];
        }
        return t;
    };
    n = Date.now;
    function o() {
        n();
    }
    o();
})();

