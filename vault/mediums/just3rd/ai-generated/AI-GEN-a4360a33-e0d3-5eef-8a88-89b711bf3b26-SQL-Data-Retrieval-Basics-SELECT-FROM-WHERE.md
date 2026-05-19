---
type: "medium"
title: "SQL Data Retrieval Basics: SELECT, FROM, WHERE"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/databases/sql/microskills/sql-data-retrieval-basics-select-from-where|SQL Data Retrieval Basics (SELECT, FROM, WHERE)]]"
---
# SQL Data Retrieval Basics: SELECT, FROM, WHERE

This lesson introduces the fundamental SQL clauses used to retrieve data from a database: `SELECT`, `FROM`, and `WHERE`. Understanding these clauses is crucial for asking questions of your data and getting the information you need.

## What are SQL Clauses?

SQL (Structured Query Language) uses clauses to define specific actions or conditions within a query. Think of them as building blocks that tell the database exactly what you want to do and how you want to do it. For data retrieval, `SELECT`, `FROM`, and `WHERE` are your foundational tools.

## The `SELECT` Clause: Choosing Your Columns

The `SELECT` clause specifies which columns (or fields) you want to retrieve from a table.

*   **Purpose:** To specify the data points you are interested in.
*   **Syntax:** `SELECT column1, column2, ...`

If you want to retrieve all columns from a table, you can use the asterisk (`*`) wildcard.

*   **Syntax:** `SELECT *`

**Example:**

Imagine a table named `Customers` with columns like `CustomerID`, `FirstName`, `LastName`, `Email`, and `City`.

To get just the first and last names of all customers:

```sql
SELECT FirstName, LastName
FROM Customers;
```

To get all information about all customers:

```sql
SELECT *
FROM Customers;
```

## The `FROM` Clause: Specifying Your Table

The `FROM` clause tells the database which table (or tables) contains the data you want to retrieve. Every `SELECT` statement needs a `FROM` clause.

*   **Purpose:** To identify the source table for your data.
*   **Syntax:** `FROM tablename`

**Example:**

Continuing with our `Customers` table:

To retrieve the `Email` column from the `Customers` table:

```sql
SELECT Email
FROM Customers;
```

## The `WHERE` Clause: Filtering Your Rows

The `WHERE` clause is used to filter the rows (records) returned by your query. It specifies a condition that must be true for a row to be included in the result set. This is where you narrow down your search.

*   **Purpose:** To specify conditions for selecting rows.
*   **Syntax:** `WHERE condition`

Common comparison operators used in `WHERE` clauses include:

*   `=`: Equal to
*   `!=` or `<>`: Not equal to
*   `>`: Greater than
*   `<`: Less than
*   `>=`: Greater than or equal to
*   `<=`: Less than or equal to
*   `LIKE`: Pattern matching (often used with `%` for any sequence of characters, and `_` for a single character)
*   `IN`: Matches any value in a list
*   `BETWEEN`: Matches a range of values
*   `IS NULL`: Checks if a value is NULL
*   `IS NOT NULL`: Checks if a value is not NULL

You can combine multiple conditions using logical operators:

*   `AND`: Both conditions must be true.
*   `OR`: At least one condition must be true.
*   `NOT`: Reverses the condition.

**Example:**

Let's use the `Customers` table again.

To find customers living in 'New York':

```sql
SELECT FirstName, LastName, City
FROM Customers
WHERE City = 'New York';
```

To find customers whose last name starts with 'S':

```sql
SELECT FirstName, LastName
FROM Customers
WHERE LastName LIKE 'S%';
```

To find customers from 'New York' OR 'Los Angeles':

```sql
SELECT FirstName, LastName, City
FROM Customers
WHERE City = 'New York' OR City = 'Los Angeles';
```

This can also be written more concisely using `IN`:

```sql
SELECT FirstName, LastName, City
FROM Customers
WHERE City IN ('New York', 'Los Angeles');
```

To find customers who are NOT from 'Chicago':

```sql
SELECT FirstName, LastName, City
FROM Customers
WHERE City != 'Chicago';
```

## Putting It All Together

You combine these clauses to form powerful data retrieval statements. The order in which you write them in your SQL statement is important: `SELECT`, then `FROM`, then `WHERE`.

**A complete basic query structure looks like this:**

```sql
SELECT column1, column2, ...
FROM tablename
WHERE condition;
```

**Example Scenario:**

You have a table called `Orders` with columns `OrderID`, `CustomerID`, `OrderDate`, and `TotalAmount`.

**Task:** Retrieve the `OrderID` and `TotalAmount` for all orders placed after January 1st, 2023, with a `TotalAmount` greater than $100.

```sql
SELECT OrderID, TotalAmount
FROM Orders
WHERE OrderDate > '2023-01-01' AND TotalAmount > 100.00;
```

In this query:
*   `SELECT OrderID, TotalAmount` specifies the columns we want.
*   `FROM Orders` indicates the table we are querying.
*   `WHERE OrderDate > '2023-01-01' AND TotalAmount > 100.00` filters the results to include only orders meeting both date and amount criteria.

By mastering `SELECT`, `FROM`, and `WHERE`, you gain the fundamental ability to query and understand the data within your databases.

## Supports

- [[skills/data/databases/sql/microskills/sql-data-retrieval-basics-select-from-where|SQL Data Retrieval Basics (SELECT, FROM, WHERE)]]
