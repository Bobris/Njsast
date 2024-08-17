"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn = void 0;
var lib_1 = require("./lib");
__exportStar(require("./lib"), exports);
function fn() {
    console.log((0, lib_1.fn)());
    return "OK2";
}
exports.fn = fn;
