(function(e) {
    "use strict";
    var s;
    s = function() {
        function e() {
            console.log("Ok");
        }
        return e;
    }();
    new s();
}).call(this);

