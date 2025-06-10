// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().




class Bankaccount{
    constructor(userName,balance){
        this.mybalance = balance;
        this.userName = userName
    }
    
    
     deposit(num){
         this.mybalance =  this.mybalance+num;
    }
    
     withraw(num2){
        if(this.mybalance > num2){
            this.mybalance = this.mybalance-num2;
        }else{
            console.log(`${this.userName} , Low Balance!!`);
        }
    }
    
     displaybalance(){
        console.log(`${this.userName} balance is ${this.mybalance}`)
    }
    
    
    
}


let myAccount = new Bankaccount('nirmit',1000)
// myAccount.deposit(300);
// myAccount.withraw(400);
myAccount.displaybalance();



