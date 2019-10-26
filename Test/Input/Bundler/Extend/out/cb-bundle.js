!function(undefined) {
    "use strict";
    var __extendStatics, __extends, __assign, __values, __read, __await, DEBUG, Base, Derived, Main;
    __extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        var p;
        for (p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    __extends = function(d, b) {
        __extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
    Base = function() {
        function Base() {}
        Base.prototype.hello = function() {
            console.log("Base");
        };
        return Base;
    }();
    Derived = function(_super) {
        __extends(Derived, _super);
        function Derived() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Derived.prototype.hello = function() {
            console.log("Derived");
        };
        return Derived;
    }(Base);
    Main = function(_super) {
        __extends(Main, _super);
        function Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Main.prototype.hello = function() {
            console.log("Main");
        };
        return Main;
    }(Base);
    new Main().hello();
}();

