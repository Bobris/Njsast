"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = require("bobril");
var g = require("bobril-g11n");
var icons_1 = require("./icons");
b.init(function () {
    b.asset("logo.png");
    b.asset("" + Date.now());
    b.styleDef({ color: "red" });
    b.styleDefEx("parent", { color: "blue" });
    b.styleDef({ color: "red" }, { hover: { color: "pink" } });
    b.styleDefEx("parent", { color: "blue" }, { hover: { color: "pink" } });
    b.styleDef({ color: "red" }, undefined, "class1");
    b.styleDefEx("parent", { color: "blue" }, undefined, "class2");
    b.styleDef({ color: "red" }, { hover: { color: "pink" } }, "class3");
    b.styleDefEx("parent", { color: "blue" }, { hover: { color: "pink" } }, "class4");
    b.styleDef({ color: "red" }, undefined, "" + Date.now());
    b.sprite(icons_1.icon_png);
    b.sprite("logo.png", "#123456");
    b.sprite("logo.png", function () { return "#" + Date.now(); });
    b.sprite("logo.png", undefined, 10, 20);
    b.sprite("logo.png", undefined, 10, 20, 30, 40);
    var d1 = g.dt("Delayed", null, "Hint");
    var d2 = g.dt("Delayed", undefined, "Hint");
    console.log(g.f("{d1} {d2}", { d1: d1, d2: d2 }));
    console.log(g.t("Hello"));
    console.log(g.t("Hello", undefined, "hint"));
    console.log(g.t("World{p}", { p: "!" }));
    console.log(g.t("{p}", { p: d1, pp: d2 }));
    var notConst = "" + Date.now();
    console.log(g.t(notConst, null, "" + Date.now()));
});
//# sourceMappingURL=index.js.map