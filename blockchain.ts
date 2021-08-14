export{}

import { Transactions, Transaction } from "./transaction";
import {block, Block} from "./block";

interface blockchain{
    chain:block[]
    transactions:Transaction[]
    genesisBlock:(transaction:Transaction)=>block
    addBlock:(transaction:Transaction,prevHash:string)=>block
    validateChain:()=>boolean;
    proofOfWork:(block:block,difficulty:number)=>void

}

class Blockchain implements blockchain {
    chain:block[];
    transactions:Transaction[];
    constructor(transaction:Transaction[]){
        this.transactions = transaction;
        this.chain =[];
    }
    genesisBlock(transaction:Transaction):block{
        
    }
}
console.log(Transactions)