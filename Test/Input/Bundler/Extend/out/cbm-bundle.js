(function(e) {
    "use strict";
    var t, n, o, r;
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
        function o() {
            this.constructor = e;
        }
        e.prototype = n === null ? Object.create(n) : (o.prototype = n.prototype, new o());
    };
    Object.assign || function(e) {
        var t, n, o, r;
        for (t = 1, n = arguments.length; t < n; t++) {
            o = arguments[t];
            for (r in o) if (Object.prototype.hasOwnProperty.call(o, r)) e[r] = o[r];
        }
        return e;
    };
    o = function() {
        function e() {}
        e.prototype.hello = function() {
            console.log("Base");
        };
        return e;
    }();
    (function(e) {
        n(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this;
        }
        t.prototype.hello = function() {
            console.log("Derived");
        };
        return t;
    })(o);
    r = function(e) {
        n(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this;
        }
        t.prototype.hello = function() {
            console.log("Main");
        };
        return t;
    }(o);
    new r().hello();
})();

