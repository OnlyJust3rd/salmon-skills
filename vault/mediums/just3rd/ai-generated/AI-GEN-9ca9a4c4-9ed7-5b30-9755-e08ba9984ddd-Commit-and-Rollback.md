---
type: "medium"
title: "Mastering Commit and Rollback: Completing or Undoing Database Work"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/databases/database-system/microskills/commit-and-rollback|commit-and-rollback]]"
---
# Mastering Commit and Rollback: Completing or Undoing Database Work

In database systems, a **transaction** is a single unit of work. This unit can involve one or more operations, like inserting data, updating records, or deleting information. For database systems to remain reliable, it's crucial that transactions are handled correctly, either completing fully or being entirely undone. This is where `COMMIT` and `ROLLBACK` come into play.

## What are Commit and Rollback?

Think of a transaction as a series of steps you need to complete.

*   **`COMMIT`**: This command signals that all operations within the current transaction have been executed successfully. Once committed, the changes are permanent and visible to other users. It's like saying, "All done, this is now official!"

*   **`ROLLBACK`**: This command signifies that something went wrong, or you've decided to undo the transaction. All operations performed since the start of the transaction (or since the last `COMMIT` or `ROLLBACK`) are discarded. The database returns to the state it was in before the transaction began. It's like saying, "Oops, let's go back to how things were before I started."

## Why are they Important?

`COMMIT` and `ROLLBACK` are fundamental to ensuring the **ACID** properties of database transactions, specifically **Atomicity** and **Consistency**.

*   **Atomicity**: Transactions are "all or nothing." Either all operations succeed (`COMMIT`), or none of them take effect (`ROLLBACK`).
*   **Consistency**: A transaction brings the database from one valid state to another. If a transaction fails, `ROLLBACK` ensures the database doesn't end up in an inconsistent, partially updated state.

## Practical Scenario: Bank Transfer

Imagine you're transferring money from your checking account to your savings account. This involves two operations:

1.  **Debit** your checking account.
2.  **Credit** your savings account.

Let's see how `COMMIT` and `ROLLBACK` handle this:

**Scenario 1: Successful Transfer**

1.  **Start Transaction**
2.  **Debit $100 from Checking:** Checking balance goes from $500 to $400.
3.  **Credit $100 to Savings:** Savings balance goes from $1000 to $1100.
4.  **`COMMIT`**: Both operations are successful. The transaction is complete. Your new balances are $400 in checking and $1100 in savings.

**Scenario 2: Failed Transfer (e.g., insufficient funds)**

1.  **Start Transaction**
2.  **Debit $600 from Checking:** You only have $500. This operation fails.
3.  **The system detects the failure.**
4.  **`ROLLBACK`**: The system undoes the failed debit operation. The database returns to its state before the transaction started. Your checking balance remains $500. The credit to savings never happens.

**Scenario 3: Failed Transfer (after debit)**

1.  **Start Transaction**
2.  **Debit $100 from Checking:** Checking balance goes from $500 to $400.
3.  **Credit $100 to Savings:** This operation fails (e.g., due to a system error or constraint violation).
4.  **The system detects the failure.**
5.  **`ROLLBACK`**: The system undoes both the debit from checking and the attempted credit to savings. Your checking balance returns to $500, and your savings balance remains $1000.

## SQL Example

In SQL, you'd typically manage transactions like this:

```sql
START TRANSACTION; -- Or BEGIN TRANSACTION;

-- Operation 1: Decrease balance in account_a
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'A';

-- Operation 2: Increase balance in account_b
UPDATE accounts SET balance = balance + 100 WHERE account_id = 'B';

-- Check for errors or conditions here.
-- If everything is okay:
COMMIT;

-- If an error occurred or you want to cancel:
-- ROLLBACK;
```

If the `UPDATE` statements execute without errors and all conditions are met, `COMMIT` makes the changes permanent. If an error occurs during either `UPDATE`, the database system will often automatically `ROLLBACK` the entire transaction, or you can explicitly issue `ROLLBACK`.

## Practice Task

Imagine you are updating a product's price and its inventory count in an e-commerce database.

1.  Start a transaction.
2.  Update the price of product 'XYZ' to $25.
3.  Update the inventory count of product 'XYZ' to 95.
4.  If both operations were successful, `COMMIT` the transaction.
5.  If either operation failed (e.g., product 'XYZ' doesn't exist, or the price is invalid), `ROLLBACK` the transaction.

Write the SQL pseudocode to perform this task, including both the `COMMIT` and `ROLLBACK` paths.

## Self-Check Questions

1.  What is the primary purpose of a `COMMIT` command in a database transaction?
2.  When would you use a `ROLLBACK` command instead of a `COMMIT`?
3.  In the bank transfer example, what would happen to the account balances if the `ROLLBACK` command was executed after the debit but before the credit?

## Supports

- [[skills/data/databases/database-system/microskills/commit-and-rollback|Commit and Rollback]]
