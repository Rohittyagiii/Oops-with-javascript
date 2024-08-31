function BankAccount(customerName,balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

      this.deposit=function(amount){
        this.balance += amount;
      }  

      this.withdraw=(amount)=>{
        this.balance -= amount;
      }  

}

// const rohitAccount = new BankAccount("Rohit",1000);
// const akashAccount = new BankAccount("Akash",);
// console.log(rohitAccount.accountNumber);
// console.log(rohitAccount.balance);
// rohitAccount.deposit(5000)
// akashAccount.deposit(1000)

// rohitAccount.withdraw(2000)
// akashAccount.withdraw(3000)


// console.log(rohitAccount);
// console.log(akashAccount);

const accounts =[];
const accountForm =document.querySelector("#accountForm");
const  customerName =document.querySelector("#customerName");
const balance =document.querySelector("#balance");

const depositForm =document.querySelector("#depositForm");
const  accountNumber =document.querySelector("#accountNumber");
const Amount =document.querySelector("#amount");

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account =new BankAccount(customerName.value ,+balance.value)
    accounts.push(account)
    console.log(accounts);
})

depositForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.deposit(+amount.value)
    console.log(accounts);
    
})