(function(undefined) {
    "use strict";
    Object.setPrototypeOf;
    Object.assign;
    function functionUsingEval() {
        eval("return 1");
    }
    function longname(parameter) {
        return parameter + functionUsingEval();
    }
    console.log(longname("a"));
})();

