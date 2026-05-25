---
type: "medium"
title: "Retrieving Data with SELECT Statements"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/databases/relational-databases/sql/microskills/data-retrieval-operations|data-retrieval-operations]]"
learning-time-in-minutes: 4
---
# Retrieving Data with SELECT Statements

This lesson focuses on executing SQL queries to retrieve data, a fundamental skill for working with relational databases. We'll explore the `SELECT` statement, the primary tool for extracting information.

## The `SELECT` Statement: Your Data Extraction Tool

The `SELECT` statement is used to query the database and retrieve records that match criteria you specify. It's the most common SQL command.

The basic syntax looks like this:

```sql
SELECT column1, column2, ...
FROM table_name;
```

*   **`SELECT`**: This keyword tells the database you want to retrieve data.
*   **`column1, column2, ...`**: These are the names of the columns you want to retrieve. You can list specific columns, or use `*` to select all columns.
*   **`FROM`**: This keyword specifies the table from which you want to retrieve data.
*   **`table_name`**: The name of the table you are querying.

### Selecting Specific Columns

Instead of fetching all data from a table, it's often more efficient and focused to select only the columns you need.

**Example:** Imagine a table named `Customers` with columns like `CustomerID`, `FirstName`, `LastName`, `Email`, and `City`. To get just the first name and last name of all customers, you would write:

```sql
SELECT FirstName, LastName
FROM Customers;
```

This query will return a result set containing only two columns: `FirstName` and `LastName` for every row in the `Customers` table.

### Selecting All Columns

If you want to retrieve every piece of information from a table, you can use the asterisk (`*`).

**Example:** To get all columns for all customers:

```sql
SELECT *
FROM Customers;
```

This query will return all columns (`CustomerID`, `FirstName`, `LastName`, `Email`, `City`, etc.) for every customer in the `Customers` table. While convenient, be mindful that selecting all columns can be inefficient for large tables if you only need a few pieces of data.

## Filtering Data with the `WHERE` Clause

Often, you don't want *all* the data, but rather specific records that meet certain conditions. The `WHERE` clause allows you to filter rows based on specified criteria.

The syntax extends the `SELECT` statement:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

*   **`WHERE`**: This keyword introduces the filtering condition.
*   **`condition`**: This is an expression that evaluates to true or false for each row. Only rows where the condition is true are returned.

Common operators used in `WHERE` clauses include:

*   `=`: Equal to
*   `!=` or `<>`: Not equal to
*   `>`: Greater than
*   `<`: Less than
*   `>=`: Greater than or equal to
*   `<=`: Less than or equal to
*   `LIKE`: Pattern matching (e.g., `LIKE 'A%'` finds names starting with 'A')
*   `IN`: Matches any value in a list (e.g., `IN ('USA', 'Canada')`)
*   `BETWEEN`: Matches a range of values (e.g., `BETWEEN 10 AND 20`)

**Example 1: Finding customers from a specific city.**

Suppose you want to find all customers who live in 'New York'.

```sql
SELECT FirstName, LastName, Email
FROM Customers
WHERE City = 'New York';
```

This query will return the first name, last name, and email of every customer whose `City` column is exactly 'New York'.

**Example 2: Finding customers with an ID greater than a certain value.**

If you need to find customers with `CustomerID` greater than 500:

```sql
SELECT CustomerID, FirstName, LastName
FROM Customers
WHERE CustomerID > 500;
```

This query will retrieve the `CustomerID`, `FirstName`, and `LastName` for all customers whose `CustomerID` is numerically larger than 500.

**Example 3: Using `LIKE` for pattern matching.**

To find all customers whose last name starts with 'S':

```sql
SELECT FirstName, LastName
FROM Customers
WHERE LastName LIKE 'S%';
```

The `%` wildcard character in `LIKE` means "any sequence of zero or more characters".

## Combining Multiple Conditions

You can combine multiple conditions in the `WHERE` clause using logical operators:

*   **`AND`**: Both conditions must be true.
*   **`OR`**: At least one of the conditions must be true.
*   **`NOT`**: Reverses the result of a condition.

**Example: Finding customers from 'London' who are also subscribed.**

Let's assume there's a `Subscribed` column (perhaps a boolean or integer like 1 for true, 0 for false).

```sql
SELECT FirstName, LastName
FROM Customers
WHERE City = 'London' AND Subscribed = 1;
```

This query will only return customers who satisfy *both* conditions: they must live in 'London' AND be subscribed.

**Example: Finding customers who are either from 'Paris' OR have an email ending in '.org'.**

```sql
SELECT FirstName, LastName, Email
FROM Customers
WHERE City = 'Paris' OR Email LIKE '%.org';
```

This query returns customers from Paris, *or* customers whose email addresses end with `.org`.

## Practice Scenarios

Let's work with a hypothetical `Products` table with the following columns: `ProductID`, `ProductName`, `Category`, `Price`, and `StockQuantity`.

1.  **Retrieve the names and prices of all products.**
2.  **Find the `ProductName` and `StockQuantity` for all products in the 'Electronics' category.**
3.  **List the `ProductName` and `ProductID` for products with a `Price` greater than 50.**
4.  **Get the `ProductName` and `Category` for products that are *not* in the 'Books' category.**
5.  **Show the `ProductName` and `Price` for products with a `Price` between 25 and 75 (inclusive).**
6.  **Find the `ProductName`, `Category`, and `StockQuantity` for 'Clothing' products that have a `StockQuantity` less than 10.**

Experiment with these queries. The ability to precisely retrieve the data you need is crucial for analysis and decision-making.

## Supports

- [[skills/computing/data-ai/databases/relational-databases/sql/microskills/data-retrieval-operations|Data Retrieval Operations]]
