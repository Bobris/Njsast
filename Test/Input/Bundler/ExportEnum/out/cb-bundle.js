!function(undefined) {
    "use strict";
    var __extendStatics, __assign, DEBUG, Opts, __export_Opts;
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
    (function(Opts) {
        Opts[Opts["Start"] = 0] = "Start";
        Opts[Opts["Stop"] = 1] = "Stop";
    })(Opts = __export_Opts || (__export_Opts = {}));
    console.log(__export_Opts.Start);
}();

