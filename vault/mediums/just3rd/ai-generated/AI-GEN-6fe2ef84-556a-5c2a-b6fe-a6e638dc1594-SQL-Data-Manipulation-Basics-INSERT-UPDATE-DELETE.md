---
type: "medium"
title: "SQL Data Manipulation: INSERT, UPDATE, DELETE"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/databases/sql/microskills/sql-data-manipulation-basics-insert-update-delete|sql-data-manipulation-basics-insert-update-delete]]"
---
# SQL Data Manipulation: INSERT, UPDATE, DELETE

SQL is a powerful language for interacting with databases. While retrieving data with `SELECT` is common, modifying it is equally crucial. This lesson focuses on the fundamental SQL statements for **data manipulation**: `INSERT`, `UPDATE`, and `DELETE`.

## Why Data Manipulation?

Databases aren't static; they need to reflect real-world changes. You'll use these commands to:

*   **Add new records:** When a new customer signs up or a new product is added.
*   **Modify existing records:** When a customer changes their address or a product price is updated.
*   **Remove outdated records:** When a customer account is closed or a product is discontinued.

## INSERT: Adding New Data

The `INSERT` statement is used to add one or more new rows into a table.

### Basic Syntax

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

*   `table_name`: The name of the table you want to insert data into.
*   `(column1, column2, ...)`: A list of the columns you are providing values for. This part is optional if you are providing values for *all* columns in the exact order they appear in the table definition.
*   `VALUES (value1, value2, ...)`: The corresponding values for the columns listed. The order and data types must match the specified columns.

### Example

Let's say we have a `Customers` table with columns `CustomerID`, `FirstName`, `LastName`, and `Email`.

To add a new customer:

```sql
INSERT INTO Customers (CustomerID, FirstName, LastName, Email)
VALUES (101, 'Alice', 'Smith', 'alice.smith@example.com');
```

If you are inserting values for all columns in the correct order, you can omit the column names:

```sql
INSERT INTO Customers
VALUES (102, 'Bob', 'Johnson', 'bob.j@example.com');
```

**Important:** Always ensure the data types of your values match the column definitions. For text (strings), use single quotes.

## UPDATE: Modifying Existing Data

The `UPDATE` statement allows you to change existing records in a table. It's vital to specify which rows to update using the `WHERE` clause.

### Basic Syntax

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

*   `table_name`: The table containing the records you want to modify.
*   `SET column1 = value1, ...`: Specifies which columns to update and their new values.
*   `WHERE condition`: This is crucial! It filters which rows will be affected by the `UPDATE`. If you omit `WHERE`, *all* rows in the table will be updated.

### Example

Let's update Alice Smith's email address. We'll use her `CustomerID` to pinpoint the correct record.

```sql
UPDATE Customers
SET Email = 'alice.smith.new@example.com'
WHERE CustomerID = 101;
```

You can update multiple columns at once:

```sql
UPDATE Customers
SET LastName = 'Jones', Email = 'alice.jones@example.com'
WHERE CustomerID = 101;
```

**Warning:** Always test your `UPDATE` statements with a `SELECT` first, using the same `WHERE` clause, to confirm you're targeting the correct rows.

```sql
-- Before running UPDATE, test with SELECT
SELECT *
FROM Customers
WHERE CustomerID = 101;
```

## DELETE: Removing Data

The `DELETE` statement removes rows from a table. Like `UPDATE`, using a `WHERE` clause is essential to avoid accidentally deleting all data.

### Basic Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

*   `table_name`: The table from which you want to delete rows.
*   `WHERE condition`: Specifies which rows to delete. Omitting `WHERE` will delete *all* rows from the table.

### Example

Let's remove the customer with `CustomerID` 102.

```sql
DELETE FROM Customers
WHERE CustomerID = 102;
```

**Extreme Caution:** Deleting data is permanent (unless you have backups or transaction logs). Be absolutely certain you want to remove the specified records.

Just as with `UPDATE`, it's a good practice to use `SELECT` with the same `WHERE` clause before executing `DELETE`:

```sql
-- Before running DELETE, test with SELECT
SELECT *
FROM Customers
WHERE CustomerID = 102;
```

## Summary of Data Manipulation Statements

| Statement | Purpose                               | Key Component      | Caution                                     |
| :-------- | :------------------------------------ | :----------------- | :------------------------------------------ |
| `INSERT`  | Add new rows                          | `VALUES` clause    | Ensure data types match column definitions. |
| `UPDATE`  | Modify existing rows                  | `SET` and `WHERE`  | `WHERE` is critical to avoid mass updates.  |
| `DELETE`  | Remove existing rows                  | `WHERE` clause     | `WHERE` is critical to avoid mass deletions. |

Understanding and safely using `INSERT`, `UPDATE`, and `DELETE` are foundational skills for managing data effectively in SQL. Always practice with caution and verify your actions.

## Supports

- [[skills/data/databases/sql/microskills/sql-data-manipulation-basics-insert-update-delete|SQL Data Manipulation Basics (INSERT, UPDATE, DELETE)]]
