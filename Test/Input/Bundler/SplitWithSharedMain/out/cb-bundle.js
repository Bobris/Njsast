var __bbb = {};

!function(undefined) {
    "use strict";
    var __extendStatics, __assign, __values, __await, __import, DEBUG;
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
    __await;
    __import = function(url, prop) {
        var bbb, res;
        bbb = __bbb;
        res = bbb[prop];
        if (res !== undefined) {
            if (res instanceof Promise) return res;
            return Promise.resolve(res);
        }
        res = new Promise(function(r, e) {
            var script, timeout;
            script = document.createElement("script");
            timeout = setTimeout(handle, 120000);
            function handle() {
                script.onload = script.onerror = undefined;
                clearTimeout(timeout);
                if (bbb[prop] === res) {
                    bbb[prop] = undefined;
                    e(new Error("Fail to load " + url));
                } else r(bbb[prop]);
            }
            script.charset = "utf-8";
            script.onload = script.onerror = handle;
            script.src = url;
            document.head.appendChild(script);
        });
        return bbb[prop] = res;
    };
    DEBUG = !1;
    function shared() {
        console.log("shared");
    }
    shared();
    __import("cb-lib.js", "a").then(function(lib) {
        console.log(lib.hello());
    });
    __bbb.b = shared;
}();

