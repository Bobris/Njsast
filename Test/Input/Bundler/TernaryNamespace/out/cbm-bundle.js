(function(_) {
    "use strict";
    var n, t, b;
    Object.setPrototypeOf;
    Object.assign;
    function e(_, n) {
        return _ + n;
    }
    n = {
        fn: e
    };
    function o(_, n) {
        return _ - n;
    }
    t = {
        fn: o
    };
    b = Math.random() > 0.5 ? n : t;
    console.log(b.fn(1, 2));
})();

