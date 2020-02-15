"use strict";
var __c0v = new Uint32Array(4);

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

__c0vS(0);

var b = require("bobril");

__c0vS(1);

var g = require("bobril-g11n");

__c0vS(2);

b.init(function() {
    __c0vS(3);
    return b.createElement(g.T, {
        p1: "param1"
    }, "Before", b.createElement("hr", null), g.t("{p1}"));
});

//# sourceMappingURL=cov.js.map
