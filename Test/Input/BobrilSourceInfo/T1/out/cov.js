"use strict";
var __c0v = new Uint32Array(2);

window.__c0v = __c0v;

function __c0vS(i) {
    __c0v[i]++;
}

function __c0vC(r, i) {
    __c0v[i + (r ? 1 : 0)]++;
    return r;
}

Object.defineProperty(exports, "__esModule", {
    value: true
});

var b = require("bobril");

var g = require("bobril-g11n");

__c0vS(0);

b.init(function() {
    __c0vS(1);
    return b.createElement(g.T, {
        p1: "param1"
    }, "Before", b.createElement("hr", null), g.t("{p1}"));
});

//# sourceMappingURL=cov.js.map
