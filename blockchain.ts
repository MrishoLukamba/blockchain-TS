export{}

import { Transactions, Transaction } from "./transaction";
import {block, Block} from "./block";

interface blockchain{
    chain:block[]
    transactions:Transaction[]
    //private genesisBlock:()=>void
    addBlock:(transaction:Transaction,prevHash:string)=>void
    validateChain:()=>boolean;
   // proofOfWork:(block:block,difficulty:number)=>void

}

class Blockchain implements blockchain {
    chain:block[];
    transactions:Transaction[];
    constructor(transaction:Transaction[]){
        this.transactions = transaction;
        this.chain =[];
        this.genesisBlock()
    }
    private genesisBlock():void{
        const block:Block = new Block(this.transactions[this.transactions.length- 1],'0')
        this.transactions.pop();
        this.chain.push(block);
        return 
    }
    addBlock(transaction:Transaction,prevHash:string){
        const block:Block = new Block(transaction,prevHash)
        this.chain.push(block)
        this.transactions.pop();
        Transactions.pop()

    }
    getChain(){
        return this.chain
    }
    validateChain():boolean{
        for(let index:number=this.chain.length-1; index >=0 ; index--){
            const current_block:Block = this.chain[index]
            const previous_block = this.chain[index-1]
            if (current_block.hash === current_block.getHash()){
                return true

                if(current_block.previousHash === previous_block.getHash()){
                    return true

                }else{
                    console.log(`${previous_block} has been tempered`)
                    return false
                }

            }else{
                console.log(`${current_block} has been tempered`)
                return false
            }
        }
        return true
    }

}
console.log(Transactions)

const circle = new Blockchain(Transactions)
console.log('---------------------------------')
console.log(circle.transactions)
circle.addBlock(Transactions[Transactions.length-1],circle.getChain()[circle.getChain().length-1].getHash())
circle.addBlock(Transactions[Transactions.length-1],circle.getChain()[circle.getChain().length-1].getHash())

console.log('------------------------------------')
console.log(circle.validateChain())

console.log(`------------------------`)
console.log(circle.getChain())
console.log(`------------------------`)

//remaining proof of work functionality


