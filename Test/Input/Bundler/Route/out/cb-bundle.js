!function(undefined) {
    "use strict";
    var __extendStatics, __assign, __values, __read, __await, DEBUG, __export_page, __export_route;
    __extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        var p;
        for (p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    __assign = Object.assign || function(t) {
        var i, n, s, p;
        for (i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    __values;
    __read;
    __await;
    DEBUG = !1;
    function route(param) {
        return param;
    }
    function link(name) {
        return name;
    }
    __export_page = "OK";
    __export_route = route("KO");
    function doit() {
        var link_index = link("hello");
        console.log(link_index);
    }
    doit();
    console.log(__export_page);
}();

