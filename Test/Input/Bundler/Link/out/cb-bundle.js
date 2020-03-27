(function(undefined) {
    "use strict";
    function link_index(name) {
        return name;
    }
    function doit() {
        var link = link_index("hello");
        console.log(link);
    }
    doit();
}).call(this);

