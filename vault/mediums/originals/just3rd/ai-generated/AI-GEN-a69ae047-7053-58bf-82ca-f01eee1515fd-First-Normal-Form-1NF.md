---
type: "medium"
title: "Understanding First Normal Form (1NF)"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/databases/relational-databases/relational-database/microskills/first-normal-form-1nf|first-normal-form-1nf]]"
learning-time-in-minutes: 3
---
# Understanding First Normal Form (1NF)

Welcome to this lesson on **First Normal Form (1NF)**. As we learn about relational databases, understanding normalization is key to designing efficient and reliable systems. 1NF is the foundational step in this process, helping us to eliminate certain types of redundancy and improve data integrity.

## What is First Normal Form (1NF)?

At its core, 1NF is a set of rules designed to ensure that a relational database table is structured correctly. It's the most basic level of normalization.

Here are the two main conditions for a table to be in 1NF:

1.  **Each column must contain atomic values.** This means that each cell in a table should hold only a single piece of data, and not multiple values or repeating groups of data.
2.  **Each row must be unique.** This is usually achieved by having a primary key that uniquely identifies each record.

Let's break down what "atomic values" means with an example.

### Atomic Values: The Core Idea

Imagine you have a table to store customer orders.

**Table: `CustomerOrders` (NOT in 1NF)**

| OrderID | CustomerName | ItemsOrdered              | OrderDate  |
| :------ | :----------- | :------------------------ | :--------- |
| 101     | Alice        | Laptop, Keyboard, Mouse   | 2023-10-26 |
| 102     | Bob          | Monitor                   | 2023-10-27 |
| 103     | Alice        | Headphones, Webcam        | 2023-10-28 |

In this table, the `ItemsOrdered` column is problematic. It contains multiple values (like "Laptop, Keyboard, Mouse") within a single cell. This is not atomic.

### How to Achieve 1NF

To bring the `CustomerOrders` table into 1NF, we need to separate the non-atomic values into their own rows. This often involves creating new tables and establishing relationships between them.

**Option 1: Splitting the `ItemsOrdered` into separate rows for each item.**

If we focus on the `OrderID`, `CustomerName`, and `OrderDate` as being atomic, we can re-structure to make `ItemsOrdered` atomic.

**Table: `CustomerOrders` (In 1NF)**

| OrderID | CustomerName | OrderDate  | Item      |
| :------ | :----------- | :--------- | :-------- |
| 101     | Alice        | 2023-10-26 | Laptop    |
| 101     | Alice        | 2023-10-26 | Keyboard  |
| 101     | Alice        | 2023-10-26 | Mouse     |
| 102     | Bob          | 2023-10-27 | Monitor   |
| 103     | Alice        | 2023-10-28 | Headphones |
| 103     | Alice        | 2023-10-28 | Webcam    |

In this revised structure:
*   Each cell contains a single value.
*   The `OrderID` combined with the `Item` would likely form a composite primary key to ensure unique rows, or we could add a unique `OrderItemID`.

### Why is 1NF Important?

Achieving 1NF is the first step towards a well-structured database because it:

*   **Eliminates Repeating Groups:** It prevents situations where you have multiple pieces of related information crammed into one field.
*   **Simplifies Queries:** It's much easier to search for a specific item (e.g., "find all orders that include a 'Laptop'") when each item is in its own row. You don't have to parse comma-separated strings.
*   **Foundation for Higher Normal Forms:** Most further normalization steps (like 2NF and 3NF) assume the table is already in 1NF.

### Common Mistakes to Avoid

*   **Storing comma-separated lists:** This is the most common violation of 1NF. Always aim to split these into separate rows.
*   **Not having a unique identifier:** While 1NF focuses on atomic values, it's implicitly understood that you'll also have a way to uniquely identify each record (a primary key). Without it, you can't truly guarantee unique rows.

By ensuring your tables meet the conditions of 1NF, you lay a solid groundwork for building robust and maintainable relational databases that are less prone to data inconsistencies.

## Supports

- [[skills/computing/data-ai/databases/relational-databases/relational-database/microskills/first-normal-form-1nf|First Normal Form (1NF)]]
