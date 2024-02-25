class BankAccount {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this._balance = 0; 
    }

    
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

   
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, interestRate) {
        super(accountNumber);
        this.interestRate = interestRate;
        this.withdrawalLimit = 1000; 
    }

   
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance && amount <= this.withdrawalLimit) {
            this._balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Insufficient funds, invalid withdrawal amount, or exceeded withdrawal limit.");
        }
    }
}
const mySavingsAccount = new SavingsAccount("SA123", 0.02); 
mySavingsAccount.deposit(2000);
mySavingsAccount.withdraw(500); 
mySavingsAccount.withdraw(1500); 
