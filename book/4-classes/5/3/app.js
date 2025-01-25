"use strict";

(function notes (){
  `
  Not Perfect! Didn't properly understand question.

  Create a BankAccount
    private
      - field balance
    private method
      - #checkBalance
        ( that logs the current balance.)
    public method
      - deposit
          (to add money to the account)
      - withdraw
          (to take money out.)

  Raise a RangeError if there are insufficient funds for the withdrawal.
  `
})

class BankAccount {
  #balance;

  constructor(initialBalance){
    this.balance = initialBalance;
  }

  #checkBalance(newBalance){
    if (newBalance < 0 ) throw new Error ("RangeError: Insufficient funds");
  }

  deposit(amount){
    this.#balance += amount;
  }

  withdraw(amount){
    const ifApprovedNewBalance = this.#balance - amount;
    this.#checkBalance(ifApprovedNewBalance);
    this.#balance = ifApprovedNewBalance;
  }

  set balance(newBalance){
    this.#checkBalance(newBalance);
    this.#balance = newBalance;
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds


(function tests(){

})()