console.log("I am dependency");

(function(l) {
    "use strict";
    function e() {
        return "Hello";
    }
    console.log(e());
}).call(this);

