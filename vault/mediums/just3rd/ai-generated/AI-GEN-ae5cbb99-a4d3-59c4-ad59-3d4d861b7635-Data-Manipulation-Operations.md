---
type: "medium"
title: "Performing Data Manipulation Operations in SQL"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/databases/sql/microskills/data-manipulation-operations|Data Manipulation Operations]]"
---
# Performing Data Manipulation Operations in SQL

In our journey of executing SQL queries, we've learned to retrieve data. Now, we'll focus on actively changing the data within our database. This involves performing Data Manipulation Operations: inserting new records, updating existing ones, and deleting unwanted data. These operations are fundamental to maintaining accurate and up-to-date information in any relational database.

## Understanding the Operations

### 1. Inserting Data (`INSERT`)

The `INSERT` statement is used to add new rows (records) to a table. You can insert a single row at a time or multiple rows.

**Syntax:**

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

*   `table_name`: The name of the table you want to insert data into.
*   `column1, column2, ...`: The specific columns you want to provide values for. If you're providing values for all columns in the order they appear in the table, you can omit the column list.
*   `value1, value2, ...`: The corresponding values for the specified columns. The data types of these values must match the data types of the columns.

**Example:**

Let's assume we have a `Customers` table with columns `CustomerID`, `FirstName`, `LastName`, and `Email`.

To add a new customer:

```sql
INSERT INTO Customers (CustomerID, FirstName, LastName, Email)
VALUES (101, 'Alice', 'Smith', 'alice.smith@example.com');
```

If we know the `CustomerID` is auto-generated or we are providing all values, we could simplify:

```sql
-- Assuming CustomerID is auto-generated and we're providing other values
INSERT INTO Customers (FirstName, LastName, Email)
VALUES ('Bob', 'Johnson', 'bob.j@example.com');
```

### 2. Updating Data (`UPDATE`)

The `UPDATE` statement is used to modify existing records in a table. It's crucial to use a `WHERE` clause to specify which rows should be updated, otherwise, all rows in the table will be affected.

**Syntax:**

```sql
UPDATE table_name
SET column1 = new_value1, column2 = new_value2, ...
WHERE condition;
```

*   `table_name`: The name of the table to update.
*   `column1 = new_value1, ...`: The columns to update and their new values.
*   `WHERE condition`: This clause specifies which rows to update. If omitted, all rows are updated.

**Example:**

Suppose we want to change Alice Smith's email address.

```sql
UPDATE Customers
SET Email = 'alice.smith.updated@example.com'
WHERE CustomerID = 101;
```

To update multiple fields for a customer:

```sql
UPDATE Customers
SET FirstName = 'Robert', LastName = 'Johnson'
WHERE CustomerID = 102; -- Assuming CustomerID 102 exists for Bob
```

### 3. Deleting Data (`DELETE`)

The `DELETE` statement is used to remove one or more rows from a table. Similar to `UPDATE`, a `WHERE` clause is essential to target specific rows for deletion. Without a `WHERE` clause, all rows in the table will be deleted.

**Syntax:**

```sql
DELETE FROM table_name
WHERE condition;
```

*   `table_name`: The name of the table from which to delete rows.
*   `WHERE condition`: This clause specifies which rows to delete. If omitted, all rows are deleted.

**Example:**

To remove a customer with a specific `CustomerID`:

```sql
DELETE FROM Customers
WHERE CustomerID = 101;
```

To delete all customers who haven't made a purchase (assuming a `LastPurchaseDate` column):

```sql
DELETE FROM Customers
WHERE LastPurchaseDate IS NULL;
```

**Important Note on `DELETE` vs. `TRUNCATE`:**

While `DELETE` removes rows one by one and logs each deletion (allowing for rollback), `TRUNCATE TABLE` is a much faster operation that removes all rows from a table by deallocating the data pages. `TRUNCATE` is not logged, cannot be rolled back easily, and resets any auto-incrementing primary keys. Use `DELETE` for targeted removal or when you need rollback capabilities.

## Practical Application

Let's consider a `Products` table with columns: `ProductID`, `ProductName`, `Price`, and `StockQuantity`.

**Scenario 1: Adding a New Product**

A new product, "Wireless Mouse," is added with a price of $25.99 and 50 units in stock.

```sql
INSERT INTO Products (ProductName, Price, StockQuantity)
VALUES ('Wireless Mouse', 25.99, 50);
```

**Scenario 2: Updating Product Price**

The price of "Wireless Mouse" needs to be updated to $27.50. We need to find its `ProductID` first, let's assume it's 5.

```sql
UPDATE Products
SET Price = 27.50
WHERE ProductID = 5;
```

**Scenario 3: Reducing Stock**

5 units of "Wireless Mouse" were sold. We need to decrease the `StockQuantity`.

```sql
UPDATE Products
SET StockQuantity = StockQuantity - 5
WHERE ProductID = 5;
```

**Scenario 4: Discontinuing a Product**

A product with `ProductID` 12 is discontinued and should be removed.

```sql
DELETE FROM Products
WHERE ProductID = 12;
```

## Best Practices and Considerations

*   **Always use `WHERE` with `UPDATE` and `DELETE`:** This is the most critical rule to prevent accidental data loss or unintended modifications.
*   **Backup your data:** Before performing significant data manipulation, especially when dealing with large datasets or complex conditions, ensure you have a recent backup.
*   **Test your statements:** Execute your `UPDATE` and `DELETE` statements on a test or development environment first. You can often use `SELECT` with the same `WHERE` clause to see which rows *would* be affected before actually running the modification.
*   **Data Type Consistency:** Ensure the data types you are inserting or updating match the column's defined data type.
*   **Primary Key Considerations:** When inserting, if a column is a primary key, ensure the value is unique. When updating, be cautious about changing primary key values, as it can break relationships with other tables.

Mastering these data manipulation operations is essential for any practical SQL user, allowing you to keep your database dynamic and reflective of real-world changes.

## Supports

- [[skills/data/databases/sql/microskills/data-manipulation-operations|Data Manipulation Operations]]
