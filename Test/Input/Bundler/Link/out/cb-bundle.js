!function(undefined) {
    "use strict";
    var __extendStatics, __assign, DEBUG;
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
    DEBUG = !1;
    function link(name) {
        return name;
    }
    function doit() {
        var link_index = link("hello");
        console.log(link_index);
    }
    doit();
}();

