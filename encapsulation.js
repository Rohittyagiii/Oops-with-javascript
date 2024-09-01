class BankAccount {
    customerName;
    accountNumber;
    #balance =0;

    constructor(customerName,balance = 0){
       this.customerName = customerName;
       this.accountNumber = Date.now();
       this.#balance = balance;
    }

      deposit(amount){
        this.#balance += amount;
      }

      withdraw(amount){
        this.#balance -= amount;
      }
      
      set balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not a valid input')
        }
        this.#balance = amount;
      }

      get balance(){
         return this.#balance;
      }

}
  
class CurrentAccount extends BankAccount{
    tranactionLimit = 50000;

    constructor(customerName,balance = 0){
        super(customerName,balance)
    }

        #calculateInterest(amount){
            console.log('Calculating Interest');
        }

    takeBussinessLoan(amount){
        this.#calculateInterest(amount)
            console.log('Taking Bussiness Loan:' + amount);
        };
}

const rohitAccount =  new CurrentAccount("Rohit",1200)
// rohitAccount.setBalance(300);
// rohitAccount.balance = 5000;
rohitAccount.takeBussinessLoan(25000);
// rohitAccount.setBalance('hello');
// console.log(rohitAccount.balance);
console.log(rohitAccount);

