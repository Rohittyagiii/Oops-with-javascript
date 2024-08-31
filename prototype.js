function BankAccount(customerName,balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance =balance;

    // this.deposit = function(amount){
    //     this.balance += amount;
    // };

    // this.withdraw =(amount) => {
    //     this.balance -= amount;
    // };
}


const rohitAccount = new BankAccount("Rohit");
// console.log(rohitAccount);

const akashAccount = new BankAccount("Akash",5000);
// console.log(akashAccount);


BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
};

rohitAccount.deposit(3000)

console.log(rohitAccount);

BankAccount.prototype.withdraw =(amount) => {
    this.balance -= amount;
};

akashAccount.deposit(10000);
console.log(akashAccount);




