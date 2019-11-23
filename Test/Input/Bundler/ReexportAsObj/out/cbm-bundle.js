!function(n) {
    "use strict";
    var _, t;
    function o(n, _) {
        return n + _;
    }
    _ = {
        fn: o
    };
    t = _;
    console.log(t.fn(1, 2));
}();

