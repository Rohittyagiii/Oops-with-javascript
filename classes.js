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

const rohitAccount = new BankAccount("Rohit",2000);
// rohitAccount.deposit(3000)
// rohitAccount.withdraw(1900

console.log(rohitAccount);
