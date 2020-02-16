"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientsPageStore = /** @class */ (function () {
    function ClientsPageStore() {
    }
    ClientsPageStore.prototype.clear = function () {
        exports.clientsPageStore = new ClientsPageStore();
    };
    return ClientsPageStore;
}());
exports.ClientsPageStore = ClientsPageStore;
exports.clientsPageStore = new ClientsPageStore();
