!function(n) {
    "use strict";
    var t, i, e;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var i;
        for (i in t) if (t.hasOwnProperty(i)) n[i] = t[i];
    };
    i = Object.assign || function(n) {
        var t, i, e, o;
        for (t = 1, i = arguments.length; t < i; t++) {
            e = arguments[t];
            for (o in e) if (Object.prototype.hasOwnProperty.call(e, o)) n[o] = e[o];
        }
        return n;
    };
    e = !1;
    function o(n) {
        return n;
    }
    function r() {
        var n = o("hello");
        console.log(n);
    }
    r();
}();

