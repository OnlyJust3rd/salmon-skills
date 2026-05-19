---
type: "medium"
title: "Understanding Relational Database Characteristics"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/databases/database-system/microskills/relational-database-characteristics|Relational Database Characteristics]]"
---
# Understanding Relational Database Characteristics

Relational databases are a cornerstone of data management, known for their structured approach to storing and organizing information. This lesson focuses on their key characteristics.

## What is a Relational Database?

A relational database is a type of database that stores data in tables. These tables are related to each other through common fields, creating a structured and organized way to manage information. Think of it like a collection of spreadsheets, where each spreadsheet has rows and columns, and you can link information between them.

The core components of a relational database are:

*   **Tables (Relations):** Collections of data organized into rows and columns. Each table represents a specific entity (e.g., Customers, Products, Orders).
*   **Rows (Tuples/Records):** A single entry in a table, representing one instance of the entity. For example, a single customer's information.
*   **Columns (Attributes/Fields):** Define the type of data stored in each row. For example, a "CustomerID", "FirstName", or "Email" column in a Customers table.
*   **Keys:** Special columns used to uniquely identify rows and establish relationships between tables.
    *   **Primary Key:** A column (or set of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique.
    *   **Foreign Key:** A column in one table that refers to the Primary Key in another table. This is how relationships are established.

### Key Concepts:

*   **Schema:** The blueprint of the database, defining the tables, columns, their data types, and the relationships between them. This structure is predefined.
*   **ACID Properties:** Relational databases are designed to ensure data integrity through ACID properties:
    *   **Atomicity:** Transactions are "all or nothing." If any part of a transaction fails, the entire transaction is rolled back.
    *   **Consistency:** Transactions bring the database from one valid state to another, ensuring all rules are maintained.
    *   **Isolation:** Concurrent transactions execute as if they were running in isolation, preventing interference.
    *   **Durability:** Once a transaction is committed, it is permanent and survives system failures.
*   **SQL (Structured Query Language):** The standard language used to interact with relational databases for querying, manipulating, and defining data.

## Practical Example: An Online Bookstore

Imagine an online bookstore. We'd likely have at least two tables:

1.  **Customers Table:**
    *   `CustomerID` (Primary Key)
    *   `FirstName`
    *   `LastName`
    *   `Email`

2.  **Orders Table:**
    *   `OrderID` (Primary Key)
    *   `CustomerID` (Foreign Key referencing Customers.CustomerID)
    *   `OrderDate`
    *   `TotalAmount`

Here, `CustomerID` in the `Orders` table links each order back to the specific customer who placed it. This structure prevents data duplication (we don't need to store customer name and email for every single order) and ensures that if a customer's details change, we only need to update them in one place (the `Customers` table).

## Practice Task

Consider a simple inventory system for a small shop.

1.  Identify at least two entities that would likely be represented as tables in a relational database for this system.
2.  For each entity, list at least three potential columns (attributes).
3.  Determine which column would serve as the Primary Key for each table.
4.  If you were to track which supplier provided which product, how would you represent this relationship using a Foreign Key?

## Self-Check Questions

1.  What is the primary way data is organized in a relational database?
2.  What is the role of a Primary Key?
3.  How do Foreign Keys help in relating different tables?
4.  Why are the ACID properties important for relational databases?
5.  What is the standard language used to communicate with relational databases?

## Supports

- [[skills/data/databases/database-system/microskills/relational-database-characteristics|Relational Database Characteristics]]
