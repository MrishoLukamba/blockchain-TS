"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("./transaction");
const block_1 = require("./block");
class Blockchain {
    constructor(transaction) {
        this.transactions = transaction;
        this.chain = [];
        this.genesisBlock();
    }
    genesisBlock() {
        const block = new block_1.Block(this.transactions[this.transactions.length - 1], '0');
        this.transactions.pop();
        this.chain.push(block);
        return;
    }
    addBlock(transaction, prevHash) {
        const block = new block_1.Block(transaction, prevHash);
        this.chain.push(block);
        this.transactions.pop();
        transaction_1.Transactions.pop();
    }
    getChain() {
        return this.chain;
    }
    validateChain() {
        for (let index = this.chain.length - 1; index >= 0; index--) {
            const current_block = this.chain[index];
            const previous_block = this.chain[index - 1];
            if (current_block.hash === current_block.getHash()) {
                return true;
                if (current_block.previousHash === previous_block.getHash()) {
                    return true;
                }
                else {
                    console.log(`${previous_block} has been tempered`);
                    return false;
                }
            }
            else {
                console.log(`${current_block} has been tempered`);
                return false;
            }
        }
        return true;
    }
}
console.log(transaction_1.Transactions);
const circle = new Blockchain(transaction_1.Transactions);
console.log('---------------------------------');
console.log(circle.transactions);
circle.addBlock(transaction_1.Transactions[transaction_1.Transactions.length - 1], circle.getChain()[circle.getChain().length - 1].getHash());
circle.addBlock(transaction_1.Transactions[transaction_1.Transactions.length - 1], circle.getChain()[circle.getChain().length - 1].getHash());
console.log('------------------------------------');
console.log(circle.validateChain());
console.log(`------------------------`);
console.log(circle.getChain());
console.log(`------------------------`);
