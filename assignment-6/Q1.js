// 1. Create a class BankAccount with properties balance and owner 
// and methods deposit(), withdraw(), and displayBalance().

class BankAccount{
    constructor(name,balance){
            this.name = name;
            this.balance = balance
    }

    deposit(amount){
        this.balance += amount;
        console.log(`${this.name}, your amount deposited is ${amount}`);
    }

    withraw(money){
        if(this.balance < money){
        console.log(`${this.name}, your bank balance is running low`);
        }else{
            this.balance -= money;
        }
    }


    displayBalance(){
        console.log(`${this.name}, your bank balance ${this.balance}`)
    }



}








const account = new BankAccount("nirmit",1000);
account.deposit(500);
account.withraw(200);
account.displayBalance();