class BankAccount {
    customerName;
    accountNumber;
    balance =0;

    constructor(customerName,balance = 0){
       this.customerName = customerName;
       this.accountNumber = Date.now();
       this.balance = balance;
    }

      deposit(amount){
        this.balance += amount;
      }

      withdraw(amount){
        this.balance -= amount;
      }

}
  
class CurrentAccount extends BankAccount{
    tranactionLimit = 50000;

    constructor(customerName,balance = 0){
        super(customerName,balance)
    }
    takeBussinessLoan(amount){
            console.log('Taking Bussiness Loan:' + amount);
        };
}

class  SavingsAccount extends BankAccount{
    tranactionLimit = 20000;

    constructor(customerName,balance = 0){
        super(customerName,balance)
    }
    takePeronalLoan(amount){
            console.log('Taking Personal Loan:' + amount);
        };
}

const rohitAccount = new SavingsAccount("Rohit",2000);
// rohitAccount.deposit(200);
rohitAccount.withdraw(900);
console.log(rohitAccount);


// function BankAccount(cutomerName, balance = 0){
//     this.cutomerName = cutomerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function(amount){
//     this.balance  += amount;
// };

// BankAccount.prototype.withdraw = function(amount){
//     this.balance  -= amount;
// };


// function CurrentAccount(cutomerName, balance = 0){
//     // this.cutomerName = cutomerName;
//     // this.accountNumber = Date.now();
//     // this.balance = balance;
//     BankAccount.call(this,cutomerName,balance)
//     this.transactionLimit = 50000;
// }

//  CurrentAccount.prototype.takeBussinessLoan = function(amount){
//     console.log('Taking Bussiness Loan:' + amount);
    
// };

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// // CurrentAccount.prototype.deposit = function(amount){
// //     this.balance  += amount;
// // };

// // CurrentAccount.prototype.withdraw = function(amount){
// //     this.balance  -= amount;
// // };


// function SavingsAccount(cutomerName, balance = 0){
//     // this.cutomerName = cutomerName;
//     // this.accountNumber = Date.now();
//     // this.balance = balance;
//     BankAccount.call(this,cutomerName,balance)
//     this.transactionLimit = 20000;
// }

// SavingsAccount.prototype = Object.create(BankAccount.prototype);


// SavingsAccount.prototype.takePersonalLoan = function(amount){
//     console.log('Taking Personal Loan:' + amount);
    
// };

// // SavingsAccount.prototype.deposit = function(amount){
// //     this.balance  += amount;
// // };

// // SavingsAccount.prototype.withdraw = function(amount){
// //     this.balance  -= amount;
// // };


// // const rohitAccount = new  CurrentAccount("Rohit",4000);
// const rohitAccount = new SavingsAccount("Rohit",4000);
// // rohitAccount.deposit(2000);
// rohitAccount.withdraw(2000);
// console.log(rohitAccount);
