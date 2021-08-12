"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
class Accounts {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    showName() {
        return this.name;
    }
    showAmount() {
        return this.amount;
    }
}
exports.Accounts = Accounts;
