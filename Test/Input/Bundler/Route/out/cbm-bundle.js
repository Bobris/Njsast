!function(t) {
    "use strict";
    var n, e, _, o, r, i, a;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, _, o;
        for (n = 1, e = arguments.length; n < e; n++) {
            _ = arguments[n];
            for (o in _) if (Object.prototype.hasOwnProperty.call(_, o)) t[o] = _[o];
        }
        return t;
    };
    _;
    o;
    r = !1;
    function p(t) {
        return t;
    }
    function s(t) {
        return t;
    }
    i = "OK";
    a = p("KO");
    function u() {
        var t = s("hello");
        console.log(t);
    }
    u();
    console.log(i);
}();

