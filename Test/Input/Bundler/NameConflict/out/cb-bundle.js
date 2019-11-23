!function(undefined) {
    "use strict";
    var a_index = 2;
    function fn(a, b) {
        return a + b;
    }
    function fn_index(a_index, b) {
        return a_index - b;
    }
    console.log(fn(fn_index(a_index, 1), a_index));
}();

