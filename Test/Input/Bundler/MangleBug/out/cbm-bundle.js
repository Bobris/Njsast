(function(e) {
    "use strict";
    var l = {}, t = 0;
    function r(e, r, o) {
        l["b-" + t++] = {
            name: null,
            realName: null,
            parent: e,
            style: r,
            pseudo: o
        };
    }
    r("*", {
        color: "blue"
    });
}).call(this);

