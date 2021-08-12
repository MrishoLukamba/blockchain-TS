export{}
import { Accounts } from "./account";
import { account } from "./account";

type Transaction = {
    sender:string;
    recipient:string;
    amount:number;
}

export const Transactions:Transaction[] = [];

/*function checks if the sender's amount is enough, then substract the amount from sender account and add the amount to recepient account  
*@params Accounts's object
*/
function transact(sender:account, recipient:account, amount:number):void{
    if (sender.amount >= amount){
        sender.amount = sender.amount-amount;
        if(recipient){
            recipient.amount = recipient.amount + amount;

            let transaction:Transaction ={
                sender: sender.name,
                recipient:recipient.name,
                amount:amount
            }
            Transactions.push(transaction);
        }else{
            console.log('recipient address is invalid')
        }
    }else{
        console.log(`The address ${sender.name} has insufficient funds`)
    }
    
    
}

//instantiating objects
const mrisho = new Accounts('mrisho',100);
const lukamba = new Accounts('lukamba',200);
const haji = new Accounts('haji',250);
const zaid = new Accounts('zaid',20);

console.log(mrisho.showAmount())
console.log(zaid.showAmount())
//transactions
transact(mrisho,zaid,10);
console.log(mrisho.showAmount())
console.log(zaid.showAmount())

console.log(Transactions)