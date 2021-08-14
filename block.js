"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const js_sha256_1 = require("js-sha256");
class Block {
    constructor(transactionData, previousHash) {
        this.transactionData = transactionData;
        this.previousHash = previousHash;
        this.timestamp = Date.now();
    }
    getHash() {
        const hash = js_sha256_1.sha256((JSON.stringify(this.transactionData)) + (this.previousHash));
        return hash;
    }
    getprevHash() {
        return this.previousHash;
    }
    getTime() {
        return this.timestamp;
    }
}
exports.Block = Block;
const mm = new Block({ sender: 'string',
    recipient: 'string',
    amount: 7 }, 'jkkh');
