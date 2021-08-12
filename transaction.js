"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const account_1 = require("./account");
exports.Transactions = [];
/*function checks if the sender's amount is enough, then substract the amount from sender account and add the amount to recepient account
*@params Accounts's object
*/
function transact(sender, recipient, amount) {
    if (sender.amount >= amount) {
        sender.amount = sender.amount - amount;
        if (recipient) {
            recipient.amount = recipient.amount + amount;
            let transaction = {
                sender: sender.name,
                recipient: recipient.name,
                amount: amount
            };
            exports.Transactions.push(transaction);
        }
        else {
            console.log('recipient address is invalid');
        }
    }
    else {
        console.log(`The address ${sender.name} has insufficient funds`);
    }
}
//instantiating objects
const mrisho = new account_1.Accounts('mrisho', 100);
const lukamba = new account_1.Accounts('lukamba', 200);
const haji = new account_1.Accounts('haji', 250);
const zaid = new account_1.Accounts('zaid', 20);
console.log(mrisho.showAmount());
console.log(zaid.showAmount());
//transactions
transact(mrisho, zaid, 10);
console.log(mrisho.showAmount());
console.log(zaid.showAmount());
console.log(exports.Transactions);
