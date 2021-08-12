export{}

export interface account{
    name: string;
    amount:number;
    showName:()=>string;
    showAmount:()=>number;
}

export class Accounts implements account {
    name: string;
    amount: number;
    
    constructor(name: string, amount:number){
        this.name = name;
        this.amount = amount;
    }
    showName(){
       return this.name
    }
    showAmount(){
       return this.amount
    }
    
}





