(function(n) {
    "use strict";
    var t, r, _;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var r;
        for (r in t) if (t.hasOwnProperty(r)) n[r] = t[r];
    };
    Object.assign || function(n) {
        var t, r, _, o;
        for (t = 1, r = arguments.length; t < r; t++) {
            _ = arguments[t];
            for (o in _) if (Object.prototype.hasOwnProperty.call(_, o)) n[o] = _[o];
        }
        return n;
    };
    function o(n, t) {
        return n + t;
    }
    t = {
        fn: o
    };
    function i(n, t) {
        return n - t;
    }
    r = {
        fn: i
    };
    _ = Math.random() > 0.5 ? t : r;
    console.log(_.fn(1, 2));
})();

