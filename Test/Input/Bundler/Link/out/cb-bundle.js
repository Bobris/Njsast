(function(undefined) {
    "use strict";
    Object.setPrototypeOf;
    Object.assign;
    function link(name) {
        return name;
    }
    function doit() {
        var link_index = link("hello");
        console.log(link_index);
    }
    doit();
})();

