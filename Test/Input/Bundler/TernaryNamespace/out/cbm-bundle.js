(function(_) {
    "use strict";
    var n, b, t;
    function i(_, n) {
        return _ + n;
    }
    n = {
        fn: i
    };
    function r(_, n) {
        return _ - n;
    }
    b = {
        fn: r
    };
    t = Math.random() > .5 ? n : b;
    console.log(t.fn(1, 2));
}).call(this);

