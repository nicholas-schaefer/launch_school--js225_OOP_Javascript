const _notes = () => {
  `
Change the code so that users can access the account balance, account number, and transactions list by calling methods,
but not by directly accessing those properties.

Got through to half way through 8.
  `
}

const makeBank = () => {
  return {
    accounts: [],
    openAccount(){
      const number = this.accounts.length + 101;;
      const account = makeAccount(number);
      this.accounts.push(account);
      return account;
    },

    transfer(source, destination, amount){
      if (source.balance < amount) return "Insufficient funds, transfer failed";
      destination.deposit(source.withdraw(amount));
      return amount;
    },

  }
}

const makeAccount = (accountNumber) => {
  const number = accountNumber;
  let balance = 0;
  const transactions = [];

  return {
    balance(){
      return balance;
    },

    number(){
      return number;
    },

    transactions(){
      return transactions;
    },


    logTransaction(type, amount) {
      transactions.push({ type, amount });
    },

    deposit(amount) {
      this.balance += amount;
      this.logTransaction('deposit', amount);
      return amount;
    },

    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }
      this.balance -= amount;
      this.logTransaction('withdrawal', amount);
      return amount;
    },
  }
}

function tests() {
  let bank = makeBank();
  let account = bank.openAccount();
  console.log(account.balance());// 0
  console.log(account.number());// 101

  return
  console.log(account.deposit(17));// 17
  let secondAccount = bank.openAccount();
  console.log(secondAccount.number());// 102
  console.log(account.transactions());// [{...}]
}
tests()