(function(_) {
    "use strict";
    var n, b, t;
    function r(_, n) {
        return _ + n;
    }
    n = {
        fn: r
    };
    function o(_, n) {
        return _ - n;
    }
    b = {
        fn: o
    };
    t = Math.random() > 0.5 ? n : b;
    console.log(t.fn(1, 2));
})();

