"use strict";
var __c0v = new Uint32Array(5);

window.__c0v = __c0v;

function __c0vS(i) {
    __c0v[i]++;
}

function __c0vC(r, i) {
    __c0v[i + (r ? 1 : 0)]++;
    return r;
}

__c0vS(0);

Object.defineProperty(exports, "__esModule", {
    value: true
});

__c0vS(1);

var b = require("bobril");

__c0vS(2);

var g = require("bobril-g11n");

__c0vS(3);

b.init(function() {
    __c0vS(4);
    return b.createElement(g.T, null, "Before", b.createElement("b", null, b.createElement("i", null, "Middle")), "After");
});

//# sourceMappingURL=cov.js.map
