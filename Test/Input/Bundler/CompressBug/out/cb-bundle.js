!function(undefined) {
    "use strict";
    var __extendStatics, __assign, DEBUG, uppercasePattern, msPattern;
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
    uppercasePattern = /([A-Z])/g;
    msPattern = /^ms-/;
    function hyphenateStyle(s) {
        if (s === "cssFloat") return "float";
        return s.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
    }
    function inlineStyleToCssDeclaration(style) {
        var res = "", v, key;
        for (key in style) {
            v = style[key];
            if (v === undefined) continue;
            res += hyphenateStyle(key) + ":" + (v === "" ? "\"\"" : v) + ";";
        }
        res = res.slice(0, -1);
        return res;
    }
    console.log(inlineStyleToCssDeclaration({
        a: 1,
        b: 2
    }));
}();

