
class BankAccount {
  #balance; // private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance!");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(200);
account.deposit(100);  // Deposited: 100
account.withdraw(50);  // Withdrew: 50
console.log(account.getBalance()); // 250

// ❌ Cannot access directly
console.log(account.#balance); // SyntaxError
