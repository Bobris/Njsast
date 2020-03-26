(function(e) {
    "use strict";
    var n;
    function a() {
        return new Image();
    }
    n = function() {
        function e() {
            console.log("constructed");
        }
        return e;
    }();
    URL.createObjectURL("");
    new n();
    a();
}).call(this);

