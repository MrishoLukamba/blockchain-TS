export{}

import {Transaction} from "./transaction";
import {sha256} from "js-sha256";

export interface block {
    timestamp:number,
    transactionData:Transaction,
    hash:string;
    previousHash:string;
    nonce:number;

    getHash:()=>string,
    getprevHash:()=>string
    getTime:()=>number

}

export class Block implements block {
    timestamp;
    transactionData;
    hash;
    previousHash;
    nonce;
    
    constructor(transactionData:Transaction, previousHash:string, nonce:number = 2){
        this.transactionData = transactionData;
        this.timestamp = Date.now();
        this.previousHash = previousHash;
        this.hash = this.getHash();
        this.nonce = nonce
        
    }
    getHash():string{
        const hash:string = sha256((JSON.stringify(this.transactionData))+(this.previousHash)+JSON.stringify(this.timestamp));
        return hash
    }
    getprevHash():string{
        return this.previousHash;
    }
    getTime():number{
        return this.timestamp
    }
}

