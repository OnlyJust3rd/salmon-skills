---
type: "medium"
title: "ACID Properties: Ensuring Database Reliability"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/databases/database-foundations/database-systems/microskills/acid-properties|acid-properties]]"
learning-time-in-minutes: 4
---
# ACID Properties: Ensuring Database Reliability

Database transactions are fundamental to maintaining the integrity and reliability of your data. To ensure this, transactions adhere to a set of properties known as ACID. This lesson focuses on understanding these crucial properties: Atomicity, Consistency, Isolation, and Durability.

## What are ACID Properties?

ACID properties are a set of assurances that database transactions will be processed reliably. They guarantee that even in the event of errors, power failures, or other issues, the database will remain in a consistent and accurate state.

### Atomicity

Atomicity means that a transaction is treated as a single, indivisible unit of work. Either all of its operations are completed successfully, or none of them are. There's no in-between state.

Think of it like transferring money between two bank accounts. If the transaction involves debiting one account and crediting another, both operations must succeed. If the debit happens but the credit fails, the transaction is rolled back, and the debit is undone.

### Consistency

Consistency ensures that a transaction brings the database from one valid state to another. It means that any data written to the database must be valid according to all defined rules, including constraints, cascades, and triggers.

For example, if a bank account cannot have a negative balance, a transaction that would result in a negative balance will fail to maintain consistency.

### Isolation

Isolation means that concurrently executing transactions are isolated from each other. The effect of concurrent transactions should be the same as if they were executed serially, one after another. This prevents one transaction from interfering with another.

Imagine two people trying to book the last available seat on a flight simultaneously. Isolation ensures that only one person successfully books the seat, not both.

### Durability

Durability guarantees that once a transaction has been committed (i.e., successfully completed), its changes are permanent and will survive any subsequent system failures, such as power outages or crashes.

Once you receive confirmation that your online order has been placed, durability ensures that the order data is safely stored and won't be lost even if the server restarts.

## Practical Scenario: Online Order Processing

Let's consider an online order. When a customer places an order, several database operations occur:

1.  **Check Inventory:** Verify if the items are in stock.
2.  **Update Inventory:** Decrease the stock count for the ordered items.
3.  **Create Order Record:** Record the details of the order.
4.  **Process Payment:** Charge the customer's payment method.

For this entire process to be a reliable transaction, ACID properties are essential:

*   **Atomicity:** If any of these steps fail (e.g., payment fails after inventory is updated), the entire transaction is rolled back. The inventory is restored, no order is created, and no charge is made. All steps must succeed, or none do.
*   **Consistency:** The database must maintain valid states. For instance, if an item is out of stock, the "Check Inventory" step would fail, preventing an inconsistent state where an order is placed for an unavailable item.
*   **Isolation:** If multiple customers place orders simultaneously, isolation ensures that their transactions don't interfere with each other. One customer's order update shouldn't affect another's inventory check.
*   **Durability:** Once the order is confirmed (committed), the changes (updated inventory, new order record) are permanently saved. Even if the system crashes immediately after confirmation, the order details and updated inventory will be restored upon recovery.

## Practice Task

Imagine you are designing a simple library system. A user wants to borrow two books. This operation involves updating the book's status to "borrowed" and creating a "borrowing record" for the user.

Describe how each ACID property would apply to this borrowing transaction.

## Self-Check Questions

1.  If a transaction fails halfway through, which ACID property ensures that the database is returned to its original state?
2.  Which ACID property prevents users from seeing incomplete or intermediate results of another transaction?
3.  What does it mean for a database transaction to be "atomic"?
4.  If a transaction violates a database rule (like exceeding a credit limit), which ACID property is being enforced?
5.  After a transaction is successfully committed, which ACID property guarantees that the changes will persist even if the database server crashes?

## Supports

- [[skills/computing/data-ai/databases/database-foundations/database-systems/microskills/acid-properties|ACID Properties]]
