---
type: "medium"
title: "Implementing Abstraction in Code"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/object-oriented-programming/microskills/abstraction-application|Abstraction Application]]"
---
# Implementing Abstraction in Code

Abstraction is a fundamental principle of Object-Oriented Programming (OOP). It's about hiding complex implementation details and exposing only the essential features of an object. Think of it like driving a car: you interact with the steering wheel, pedals, and gear shift, but you don't need to understand the intricate workings of the engine or transmission to drive.

## What is Abstraction?

In programming, abstraction allows us to model real-world objects or concepts by focusing on their relevant characteristics and behaviors, while ignoring irrelevant details. This simplifies our code, making it more understandable, maintainable, and reusable.

### Key Ideas:

*   **Focus on "What" not "How":** Abstraction defines what an object *does*, not *how* it does it.
*   **Simplification:** It reduces complexity by hiding unnecessary details.
*   **Interface vs. Implementation:** Abstraction separates the interface (what you can do with an object) from its implementation (how it does it).

## Applying Abstraction: A Practical Example

Let's consider a common scenario: managing different types of bank accounts. We want to be able to deposit and withdraw money from any account, but the specific rules for each account type (like savings or checking) might differ.

### Using Abstract Classes (Java Example)

Abstract classes are a powerful way to implement abstraction in many OOP languages. An abstract class defines a common interface for a group of subclasses but cannot be instantiated on its own.

```java
// Abstract class representing a generic bank account
abstract class BankAccount {
    protected double balance; // Essential feature: balance

    public BankAccount(double initialDeposit) {
        if (initialDeposit > 0) {
            this.balance = initialDeposit;
        } else {
            this.balance = 0;
        }
    }

    // Abstract method: Must be implemented by subclasses
    // Defines WHAT can be done (withdraw)
    public abstract boolean withdraw(double amount);

    // Concrete method: Defines WHAT else can be done (deposit)
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposited: " + amount);
        }
    }

    // Concrete method: Common feature accessible to all
    public double getBalance() {
        return this.balance;
    }
}
```

In this `BankAccount` abstract class:

*   `balance` is an essential feature.
*   `deposit()` and `getBalance()` are concrete methods, providing a standard way to interact with any bank account.
*   `withdraw()` is an `abstract` method. This signifies that *all* `BankAccount`s must have a way to withdraw money, but the *specific logic* for withdrawal (e.g., checking for overdrafts in a checking account, or applying withdrawal limits in a savings account) will be defined by the concrete subclasses.

### Concrete Subclasses

Now, let's create concrete subclasses that extend `BankAccount` and provide their own implementation for the abstract `withdraw` method.

**Savings Account:**

```java
class SavingsAccount extends BankAccount {
    private static final double MIN_BALANCE = 100; // Savings specific rule

    public SavingsAccount(double initialDeposit) {
        super(initialDeposit);
    }

    @Override
    public boolean withdraw(double amount) {
        if (amount > 0 && (this.balance - amount) >= MIN_BALANCE) {
            this.balance -= amount;
            System.out.println("Withdrawal successful. New balance: " + this.balance);
            return true;
        } else {
            System.out.println("Withdrawal failed. Insufficient funds or below minimum balance.");
            return false;
        }
    }
}
```

**Checking Account:**

```java
class CheckingAccount extends BankAccount {
    private static final double OVERDRAFT_FEE = 30; // Checking specific rule

    public CheckingAccount(double initialDeposit) {
        super(initialDeposit);
    }

    @Override
    public boolean withdraw(double amount) {
        if (amount > 0 && (this.balance - amount) >= 0) { // Allows overdraft up to 0 balance
            this.balance -= amount;
            System.out.println("Withdrawal successful. New balance: " + this.balance);
            return true;
        } else if (amount > 0 && (this.balance - amount) < 0) { // Overdraft scenario
            this.balance -= (amount + OVERDRAFT_FEE);
            System.out.println("Withdrawal successful with overdraft. Fee applied. New balance: " + this.balance);
            return true;
        } else {
            System.out.println("Withdrawal failed.");
            return false;
        }
    }
}
```

### How Abstraction is Applied Here:

1.  **Hiding Complexity:** The `BankAccount` class hides the internal `balance` variable. Users of `BankAccount` objects don't directly manipulate `balance`; they use `deposit()` and `withdraw()`.
2.  **Defining Essential Operations:** The abstract class defines the core operations (`deposit`, `withdraw`, `getBalance`) that are common to all bank accounts.
3.  **Allowing Specialization:** Subclasses like `SavingsAccount` and `CheckingAccount` provide specific implementations for `withdraw` that cater to their unique rules, without altering the fundamental interface of a bank account.

When you use a `SavingsAccount` or `CheckingAccount` object, you can call `deposit()` and `withdraw()` without needing to know the internal logic of each account type. The `BankAccount` abstraction ensures a consistent way to interact with them.

## Abstraction vs. Encapsulation

Abstraction and Encapsulation are often used together but are distinct OOP principles.

*   **Abstraction:** Focuses on **hiding complexity** and showing only the essential features. It answers the question: "What does it do?"
*   **Encapsulation:** Focuses on **bundling data (attributes) and methods (behaviors) that operate on that data** into a single unit (an object), and controlling access to that data. It answers the question: "How is it done internally, and how do I interact with it safely?"

In our example, `balance` is encapsulated within `BankAccount` and its subclasses. The `deposit` and `withdraw` methods provide an abstract interface to interact with that encapsulated data.

## When to Use Abstraction:

*   When you want to create a common interface for a set of related classes.
*   When you want to hide complex implementation details from users of your code.
*   When you want to promote code reusability and maintainability.
*   When you are designing systems that need to be flexible and adaptable to future changes.

By mastering abstraction, you can write cleaner, more robust, and easier-to-understand object-oriented programs.

## Supports

- [[skills/programming/software-engineering/object-oriented-programming/microskills/abstraction-application|Abstraction Application]]
