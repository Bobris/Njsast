(function(undefined) {
    "use strict";
    (function(p, s) {
        "use strict";
        window.phoenix = window.phoenix || {};
        phoenix.json = phoenix.json || {};
        phoenix.json.X = !1;
        p = phoenix.json;
        p.doIt = function() {
            console.log("Ok");
        };
    })();
    function hello() {
        phoenix.json.doIt();
    }
    hello();
}).call(this);

