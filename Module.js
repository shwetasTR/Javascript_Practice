// Immediately Invoked Function Expression (IIFE): The entire BankAccount is wrapped in (function() { ... })();. 
//This is similar to creating a static class in C#. It's immediately executed and its return value is assigned to BankAccount.
// No explicit class declaration. The module pattern simulates a class-like structure.
// Privacy is achieved through closure, not access modifiers.
// Methods are defined as object properties.
// No type declarations for variables or function parameters.


const BankAccount = (function() {
    // Private variables
    //Private Members: In C#, you'd use the private keyword. 
    //In this JavaScript pattern, variables and functions defined inside the IIFE but outside the returned object are private.

    let balance = 0;
    const minBalance = 100;
  
    // Private function
    function validateWithdrawal(amount) {
      return balance - amount >= minBalance;
    }
  
    // Public interface
    //Public Interface: The returned object is similar to defining public methods in a C# class. These methods have access to the 
    //private variables due to closure.

    //Method Definitions: In C#, you'd write methods like public void Deposit(decimal amount) { ... }.
    // In JavaScript, methods are defined as properties of an object that happen to be functions.
//String Interpolation: JavaScript uses backticks (`) for template literals, similar to C#'s string interpolation with $"...".



    return {
      deposit: function(amount) {
        if (amount > 0) {
          balance += amount;
          //String Interpolation: JavaScript uses backticks (`) for template literals, similar to C#'s string interpolation with $"...".


          console.log(`Deposited ${amount}. New balance: ${balance}`);
        }
      },
      withdraw: function(amount) {
        if (amount > 0 && validateWithdrawal(amount)) {
          balance -= amount;
          console.log(`Withdrawn ${amount}. New balance: ${balance}`);
        } else {
          console.log("Withdrawal not allowed. Insufficient funds.");
        }
      },
      getBalance: function() {
        return balance;
      }
    };
  })();
  
  // Usage
  BankAccount.deposit(500);  // Deposited 500. New balance: 500
  BankAccount.withdraw(200); // Withdrawn 200. New balance: 300
  console.log(BankAccount.getBalance()); // 300
  BankAccount.withdraw(250); // Withdrawal not allowed. Insufficient funds.
  
  // These will not work, as they're private:
  // console.log(BankAccount.balance);  // undefined
  // BankAccount.validateWithdrawal(50);  // Error