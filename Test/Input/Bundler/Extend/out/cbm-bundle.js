!function(e) {
    "use strict";
    var n, t, r, o, s, i, p;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, n) {
        e.__proto__ = n;
    } || function(e, n) {
        var t;
        for (t in n) if (n.hasOwnProperty(t)) e[t] = n[t];
    };
    t = function(e, t) {
        n(e, t);
        function r() {
            this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
    };
    r = Object.assign || function(e) {
        var n, t, r, o;
        for (n = 1, t = arguments.length; n < t; n++) {
            r = arguments[n];
            for (o in r) if (Object.prototype.hasOwnProperty.call(r, o)) e[o] = r[o];
        }
        return e;
    };
    o = !1;
    s = function() {
        function e() {}
        e.prototype.hello = function() {
            console.log("Base");
        };
        return e;
    }();
    i = function(e) {
        t(n, e);
        function n() {
            return e !== null && e.apply(this, arguments) || this;
        }
        n.prototype.hello = function() {
            console.log("Derived");
        };
        return n;
    }(s);
    p = function(e) {
        t(n, e);
        function n() {
            return e !== null && e.apply(this, arguments) || this;
        }
        n.prototype.hello = function() {
            console.log("Main");
        };
        return n;
    }(s);
    new p().hello();
}();

