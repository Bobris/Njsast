(function(n) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var i;
        for (i in t) if (t.hasOwnProperty(i)) n[i] = t[i];
    };
    Object.assign || function(n) {
        var t, i, o, r;
        for (t = 1, i = arguments.length; t < i; t++) {
            o = arguments[t];
            for (r in o) if (Object.prototype.hasOwnProperty.call(o, r)) n[r] = o[r];
        }
        return n;
    };
    function t(n) {
        return n;
    }
    function i() {
        var n = t("hello");
        console.log(n);
    }
    i();
})();

