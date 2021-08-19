"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const js_sha256_1 = require("js-sha256");
class Block {
    constructor(transactionData, previousHash, nonce = 2) {
        this.transactionData = transactionData;
        this.timestamp = Date.now();
        this.previousHash = previousHash;
        this.hash = this.getHash();
        this.nonce = nonce;
    }
    getHash() {
        const hash = js_sha256_1.sha256((JSON.stringify(this.transactionData)) + (this.previousHash) + JSON.stringify(this.timestamp));
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
