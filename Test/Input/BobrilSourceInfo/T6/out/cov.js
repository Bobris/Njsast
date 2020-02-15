"use strict";
var __c0v = new Uint32Array(6);

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
    var param = {
        p1: "Visit page"
    };
    __c0vS(4);
    var param2 = {
        p2: "Bobril"
    };
    __c0vS(5);
    return b.createElement(g.T, __assign({
        hint: "hint"
    }, param, param2), g.t("{p1}"), " of ", b.createElement("a", {
        href: "https://bobril.com"
    }, g.t("{p2}")), " ", b.createElement("img", {
        src: b.asset("./logo.png")
    }));
});

//# sourceMappingURL=cov.js.map
