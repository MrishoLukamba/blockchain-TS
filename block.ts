export{}

import {Transaction} from "./transaction";
import {sha256} from "js-sha256";

export interface block {
    timestamp:number,
    transactionData:Transaction,
    previousHash:string,

    getHash:()=>string,
    getprevHash:()=>string
    getTime:()=>number

}

export class Block implements block {
    timestamp;
    transactionData;
    previousHash;
    
    constructor(transactionData:Transaction, previousHash:string,){
        this.transactionData = transactionData;
        this.previousHash = previousHash;
        this.timestamp = Date.now();
    }
    getHash():string{
        const hash:string = sha256((JSON.stringify(this.transactionData))+(this.previousHash));
        return hash
    }
    getprevHash():string{
        return this.previousHash;
    }
    getTime():number{
        return this.timestamp
    }
}

const mm = new Block({ sender:'string',
    recipient:'string',
    amount:7},'jkkh')