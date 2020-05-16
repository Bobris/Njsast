(function(o) {
    "use strict";
    var l, t;
    function e(o) {
        console.log("function Url:" + o);
    }
    e.hello = function() {
        console.log("Hello");
    };
    l = e;
    t = {
        test: function() {
            console.log(new l(1));
        }
    };
    t.test();
    function n() {
        URL.createObjectURL("");
    }
    n();
}).call(this);

