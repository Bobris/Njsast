"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sessionUpdater = require("./sessionUpdater");
var sessionStopper = require("./sessionStopper");
sessionUpdater.start();
console.log("working");
sessionStopper.stop();
