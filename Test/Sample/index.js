"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = require("bobril");
var g = require("bobril-g11n");
b.init(function () {
    console.log(g.t("Hello"));
    console.log(g.t("World{p}", { p: "!" }));
    console.log(g.t("{p}", { p: "?", pp: "not used" }));
});
//# sourceMappingURL=index.js.map