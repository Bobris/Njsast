(function(e) {
    "use strict";
    var a;
    function n() {
        return new Image();
    }
    a = function() {
        function e() {
            console.log("constructed");
        }
        return e;
    }();
    new a();
    n();
}).call(this);

