!function(n) {
    "use strict";
    var t, e, r;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var e;
        for (e in t) if (t.hasOwnProperty(e)) n[e] = t[e];
    };
    e = Object.assign || function(n) {
        var t, e, r, o;
        for (t = 1, e = arguments.length; t < e; t++) {
            r = arguments[t];
            for (o in r) if (Object.prototype.hasOwnProperty.call(r, o)) n[o] = r[o];
        }
        return n;
    };
    r = !1;
    function o() {
        eval("return 1");
    }
    function i(n) {
        return n + o();
    }
    console.log(i("a"));
}();

