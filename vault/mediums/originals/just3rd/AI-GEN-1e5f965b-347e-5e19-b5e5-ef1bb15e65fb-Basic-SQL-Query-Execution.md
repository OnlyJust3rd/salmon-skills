---
type: medium
title: Basic SQL Query Execution
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[basic-sql-query-execution|basic-sql-query-execution]]"
related-skills:
  - "[[sql|sql]]"
learning-time-in-minutes: 4
---
# Basic SQL Query Execution

This lesson focuses on applying the fundamental SQL syntax to retrieve and modify data. We'll work with a simple example database to illustrate these concepts.

## Retrieving Data with `SELECT`

The `SELECT` statement is your primary tool for extracting data from a database. It allows you to specify which columns you want to see and from which table.

### The `SELECT` Statement

The basic structure is:

```sql
SELECT column1, column2, ...
FROM table_name;
```

*   `SELECT`: This keyword indicates that you want to retrieve data.
*   `column1, column2, ...`: These are the names of the columns you wish to display. You can select all columns by using an asterisk (`*`).
*   `FROM`: This keyword specifies the table from which you want to retrieve the data.

#### Example: Retrieving All Customer Names

Let's assume we have a `Customers` table with columns like `CustomerID`, `FirstName`, `LastName`, and `Email`.

To get all customer first and last names:

```sql
SELECT FirstName, LastName
FROM Customers;
```

To get all information about all customers:

```sql
SELECT *
FROM Customers;
```

### Filtering Data with `WHERE`

Often, you don't want to see every row in a table. The `WHERE` clause allows you to filter the results based on specific conditions.

#### The `WHERE` Clause

The `WHERE` clause is added after the `FROM` clause:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

*   `WHERE`: This keyword introduces the filtering condition.
*   `condition`: This is an expression that evaluates to true or false for each row. Only rows where the condition is true will be returned.

Common comparison operators used in `WHERE` clauses include:

*   `=`: Equal to
*   `!=` or `<>`: Not equal to
*   `>`: Greater than
*   `<`: Less than
*   `>=`: Greater than or equal to
*   `<=`: Less than or equal to
*   `LIKE`: Pattern matching (e.g., `LIKE 'A%'` finds names starting with 'A')
*   `IN`: Checks if a value is in a list of values (e.g., `IN ('USA', 'Canada')`)
*   `BETWEEN`: Checks if a value is within a range (e.g., `BETWEEN 10 AND 20`)

#### Example: Retrieving Customers from a Specific City

Suppose our `Customers` table also has a `City` column. To find all customers living in 'London':

```sql
SELECT FirstName, LastName, Email
FROM Customers
WHERE City = 'London';
```

To find customers with an ID greater than 100:

```sql
SELECT *
FROM Customers
WHERE CustomerID > 100;
```

### Combining Conditions

You can combine multiple conditions using `AND` and `OR`.

*   `AND`: Both conditions must be true.
*   `OR`: At least one of the conditions must be true.

#### Example: Retrieving Customers from London with a Specific Last Name

```sql
SELECT FirstName, LastName
FROM Customers
WHERE City = 'London' AND LastName = 'Smith';
```

#### Example: Retrieving Customers from London OR Paris

```sql
SELECT FirstName, LastName
FROM Customers
WHERE City = 'London' OR City = 'Paris';
```

This can also be written using `IN`:

```sql
SELECT FirstName, LastName
FROM Customers
WHERE City IN ('London', 'Paris');
```

## Modifying Data

SQL also allows you to change existing data and add new data.

### Inserting Data with `INSERT INTO`

The `INSERT INTO` statement is used to add new rows to a table.

#### The `INSERT INTO` Statement

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

*   `INSERT INTO table_name`: Specifies the table where the new row will be added.
*   `(column1, column2, column3, ...)`: Lists the columns you are providing values for. This part is optional if you are providing values for *all* columns in the correct order.
*   `VALUES (value1, value2, value3, ...)`: Provides the actual data for the new row, corresponding to the columns listed.

#### Example: Adding a New Customer

```sql
INSERT INTO Customers (CustomerID, FirstName, LastName, Email, City)
VALUES (101, 'Alice', 'Johnson', 'alice.j@example.com', 'New York');
```

If your table has an auto-incrementing primary key, you might omit that column from the `INSERT` statement.

### Updating Data with `UPDATE`

The `UPDATE` statement allows you to modify existing rows in a table.

#### The `UPDATE` Statement

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

*   `UPDATE table_name`: Specifies the table to update.
*   `SET column1 = value1, column2 = value2, ...`: Defines which columns to change and their new values.
*   `WHERE condition`: **Crucially important!** This clause specifies which rows to update. If you omit `WHERE`, **all rows** in the table will be updated.

#### Example: Changing a Customer's Email

Let's say we want to update the email for the customer with `CustomerID` 101.

```sql
UPDATE Customers
SET Email = 'alice.johnson.new@example.com'
WHERE CustomerID = 101;
```

#### Example: Changing City for Multiple Customers

To change the city for all customers whose current city is 'New York' to 'Los Angeles':

```sql
UPDATE Customers
SET City = 'Los Angeles'
WHERE City = 'New York';
```

### Deleting Data with `DELETE`

The `DELETE` statement removes rows from a table.

#### The `DELETE` Statement

```sql
DELETE FROM table_name
WHERE condition;
```

*   `DELETE FROM table_name`: Specifies the table from which to delete rows.
*   `WHERE condition`: **Again, critically important!** This clause specifies which rows to delete. If you omit `WHERE`, **all rows** in the table will be deleted.

#### Example: Deleting a Specific Customer

To delete the customer with `CustomerID` 101:

```sql
DELETE FROM Customers
WHERE CustomerID = 101;
```

#### Example: Deleting Customers from a Specific City

To delete all customers who live in 'Paris':

```sql
DELETE FROM Customers
WHERE City = 'Paris';
```

## Practice

Now, try these commands on a sample database. Imagine a `Products` table with `ProductID`, `ProductName`, `Price`, and `StockQuantity`.

1.  Select the `ProductName` and `Price` for all products.
2.  Select all details for products where the `Price` is greater than 50.
3.  Insert a new product: `ProductID` 50, `ProductName` 'Wireless Mouse', `Price` 25.99, `StockQuantity` 150.
4.  Update the `StockQuantity` for 'Wireless Mouse' to 145.
5.  Delete the product named 'Wireless Mouse'.

## Supports

- [[basic-sql-query-execution|Basic SQL Query Execution]]
