---
type: "medium"
title: "Relational Model Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-modeling/microskills/relational-model-principles|relational-model-principles]]"
related-skills:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-modeling/data-modeling|data-modeling]]"
learning-time-in-minutes: 4
---
# Relational Model Principles

The relational model is the foundation of most modern databases. It organizes data into tables, which are structured collections of rows and columns. Understanding its core principles is crucial for effective data modeling, especially when aiming to explain various data modeling techniques.

## What is the Relational Model?

At its heart, the relational model is based on the mathematical concept of relations. In database terms, a relation is simply a table.

*   **Table (Relation):** A two-dimensional structure containing rows and columns.
*   **Row (Tuple/Record):** Represents a single instance or item of data within a table. For example, a row in a `Customers` table would represent one specific customer.
*   **Column (Attribute/Field):** Represents a specific characteristic or property of the data. For instance, in a `Customers` table, columns might include `CustomerID`, `FirstName`, `LastName`, and `Email`.
*   **Data Type:** Each column has a defined data type (e.g., integer, text, date) that restricts the kind of data it can hold.
*   **Primary Key:** A column (or set of columns) that uniquely identifies each row in a table. No two rows can have the same primary key value. This ensures data integrity and allows for easy referencing.
*   **Foreign Key:** A column (or set of columns) in one table that refers to the primary key in another table. This establishes relationships between tables, allowing you to link related data.

### Key Principles for Data Integrity:

1.  **Entity Integrity:** The primary key of a table must contain unique values and cannot be NULL. This ensures that every record can be uniquely identified.
2.  **Referential Integrity:** If a foreign key column in one table refers to the primary key column in another table, then any value in the foreign key column must either match a value in the primary key column or be NULL. This prevents "orphan" records – rows in a child table that point to non-existent parent records.
3.  **Domain Integrity:** Ensures that all values in a column are of the same data type and within a defined range or set of valid values. This maintains consistency and accuracy.

## Practical Scenario: A Simple Online Store

Imagine you're designing a database for a small online store. You need to store information about your customers and the products they order.

You might create two tables:

**1. `Customers` Table:**

| CustomerID (PK) | FirstName | LastName | Email                 |
| :-------------- | :-------- | :------- | :-------------------- |
| 101             | Alice     | Smith    | alice.s@example.com   |
| 102             | Bob       | Johnson  | bob.j@example.com     |
| 103             | Charlie   | Brown    | charlie.b@example.com |

*   `CustomerID` is the primary key (unique and non-NULL).
*   `FirstName`, `LastName`, and `Email` are attributes.

**2. `Orders` Table:**

| OrderID (PK) | OrderDate  | CustomerID (FK) |
| :----------- | :--------- | :-------------- |
| 5001         | 2023-10-26 | 101             |
| 5002         | 2023-10-26 | 102             |
| 5003         | 2023-10-27 | 101             |

*   `OrderID` is the primary key.
*   `OrderDate` is the date of the order.
*   `CustomerID` is a foreign key referencing the `Customers` table.

**How it works:**

*   **Entity Integrity:** Each `CustomerID` (101, 102, 103) and `OrderID` (5001, 5002, 5003) is unique and not NULL.
*   **Referential Integrity:** The `CustomerID` values in the `Orders` table (101, 102) must exist in the `Customers` table. If you tried to add an order with `CustomerID = 105` (who doesn't exist in `Customers`), a relational database would prevent it.
*   **Domain Integrity:** The `OrderDate` column only accepts date values.

## Practice Task

Consider a library scenario. You need to track `Books` and `Authors`.

1.  Identify the primary key for a `Books` table. What attributes might a `Books` table have?
2.  Identify the primary key for an `Authors` table. What attributes might an `Authors` table have?
3.  How would you link a book to its author using a foreign key? What would the relationship look like in terms of tables?

## Self-Check Questions

1.  What is the primary purpose of a primary key in the relational model?
2.  Explain the concept of referential integrity in your own words.
3.  If you have a `Products` table and an `Order_Items` table, and `ProductID` is the primary key in `Products` and a foreign key in `Order_Items`, what would happen if you tried to delete a product that is currently part of an order?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-modeling/microskills/relational-model-principles|Relational Model Principles]]
