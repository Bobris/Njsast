(function(e) {
    "use strict";
    var l = {}, t = 0;
    function s(e, s, r) {
        l["b-" + t++] = {
            name: null,
            realName: null,
            parent: e,
            style: s,
            pseudo: r
        };
    }
    s("*", {
        color: "blue"
    });
}).call(this);

