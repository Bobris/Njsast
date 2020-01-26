(function(l) {
    "use strict";
    console.log("I am dependency");
    function e() {
        return "Hello";
    }
    console.log(e());
}).call(this);

