(function(n) {
    "use strict";
    var u = {};
    function f() {
        console.log("fun");
    }
    (function(n) {
        function u() {
            f();
        }
        n.fun = u;
    })(u);
    u.fun();
}).call(this);

