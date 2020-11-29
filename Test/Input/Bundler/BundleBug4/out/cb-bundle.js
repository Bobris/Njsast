(function(undefined) {
    "use strict";
    var __export_ns = {};
    function fun_lib2() {
        console.log("fun");
    }
    (function(ns) {
        function fun() {
            fun_lib2();
        }
        ns.fun = fun;
    })(__export_ns);
    __export_ns.fun();
}).call(this);

