(function(t) {
    "use strict";
    function i(t) {
        const {isActive: i = !0} = t;
        if (!i) {
            console.log("Should not be printed");
        }
    }
    i({});
}).call(this);

