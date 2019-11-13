!function(e) {
    "use strict";
    var t, n, r, o, s, i, _, a, u;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        var n;
        for (n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
    };
    n = function(e, n) {
        t(e, n);
        function r() {
            this.constructor = e;
        }
        e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
    r = Object.assign || function(e) {
        var t, n, r, o;
        for (t = 1, n = arguments.length; t < n; t++) {
            r = arguments[t];
            for (o in r) if (Object.prototype.hasOwnProperty.call(r, o)) e[o] = r[o];
        }
        return e;
    };
    o;
    s;
    i = !1;
    _ = function() {
        function e() {}
        e.prototype.hello = function() {
            console.log("Base");
        };
        return e;
    }();
    a = function(e) {
        n(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this;
        }
        t.prototype.hello = function() {
            console.log("Derived");
        };
        return t;
    }(_);
    u = function(e) {
        n(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this;
        }
        t.prototype.hello = function() {
            console.log("Main");
        };
        return t;
    }(_);
    new u().hello();
}();

