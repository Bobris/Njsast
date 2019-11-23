(function(undefined) {
    "use strict";
    Object.setPrototypeOf;
    Object.assign;
    console.log("I am dependency");
    function hello() {
        return "Hello";
    }
    console.log(hello());
})();

