(function(n) {
    "use strict";
    var _;
    function u() {
        console.log("fun");
    }
    (function(n) {
        function _() {
            u();
        }
        n.fun = _;
    })(_ || (_ = {}));
    _.fun();
}).call(this);
