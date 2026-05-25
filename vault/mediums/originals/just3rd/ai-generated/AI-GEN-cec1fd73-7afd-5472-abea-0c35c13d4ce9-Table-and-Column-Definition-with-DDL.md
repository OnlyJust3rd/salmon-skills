---
type: "medium"
title: "Defining Tables and Columns with SQL DDL"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/databases/relational-databases/sql/microskills/table-and-column-definition-with-ddl|table-and-column-definition-with-ddl]]"
learning-time-in-minutes: 4
---
# Defining Tables and Columns with SQL DDL

In SQL, Data Definition Language (DDL) commands are the tools we use to build and manage the structure of our databases. This lesson focuses on the fundamental DDL commands for defining tables, their columns, and basic constraints – the building blocks of any relational database.

## What is Table and Column Definition?

When we create a database, we need to organize our data into logical units. In relational databases, these units are called **tables**. Each table represents a specific type of entity (like 'Customers', 'Products', or 'Orders').

Within each table, we store specific pieces of information about that entity. These pieces of information are represented as **columns**. For example, a 'Customers' table might have columns for 'CustomerID', 'FirstName', 'LastName', and 'Email'.

DDL allows us to precisely define:
*   The names of our tables.
*   The names of our columns.
*   The **data type** for each column (e.g., text, numbers, dates).
*   Any restrictions or rules, known as **constraints**, that apply to the data in those columns.

## The `CREATE TABLE` Statement

The primary DDL command for defining a new table is `CREATE TABLE`. Its basic syntax looks like this:

```sql
CREATE TABLE table_name (
    column1_name data_type constraints,
    column2_name data_type constraints,
    column3_name data_type constraints,
    ...
);
```

Let's break down the components:

*   **`CREATE TABLE table_name`**: This is the command to create a table and specifies the name you want to give it. Table names should be descriptive and follow naming conventions (often using underscores or camelCase, and generally avoiding spaces or special characters).
*   **`(` and `)`**: These parentheses enclose the list of column definitions.
*   **`column_name data_type`**: For each column, you define its name and its data type.
*   **`constraints`**: This is where you can add rules to your columns. We'll touch on some basic ones shortly.
*   **`,`**: Commas separate each column definition.

### Common Data Types

Choosing the correct data type is crucial for efficient storage and data integrity. Here are some common ones:

| Data Type      | Description                                          | Example Usage                                   |
| :------------- | :--------------------------------------------------- | :---------------------------------------------- |
| `INT`          | Whole numbers (integers)                             | `CustomerID`, `Quantity`                        |
| `DECIMAL(p,s)` | Fixed-point numbers; `p` is total digits, `s` is after decimal | `Price DECIMAL(10, 2)` (e.g., 12345678.90)        |
| `VARCHAR(n)`   | Variable-length character strings (text) up to `n` characters | `FirstName VARCHAR(50)`, `Email VARCHAR(255)`   |
| `DATE`         | Stores dates (YYYY-MM-DD)                            | `OrderDate`                                     |
| `BOOLEAN`      | Stores true/false values                             | `IsActive`                                      |

*Note: Specific data type names can vary slightly between different SQL database systems (like PostgreSQL, MySQL, SQL Server).*

### Basic Constraints

Constraints enforce data integrity. Here are a few fundamental ones you'll use when defining columns:

*   **`NOT NULL`**: Ensures that a column cannot have a `NULL` value. Every row must have a value for this column.
*   **`UNIQUE`**: Ensures that all values in a column are different. No two rows can have the same value in this column.
*   **`PRIMARY KEY`**: This is a combination of `NOT NULL` and `UNIQUE`. A table can have only one primary key, which uniquely identifies each row. It's often used for ID columns.
*   **`DEFAULT value`**: Assigns a default value to a column if no value is specified during an `INSERT` operation.

## Worked Example: Creating a `Products` Table

Let's create a table named `Products` to store information about items for sale.

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT DEFAULT 0,
    IsAvailable BOOLEAN DEFAULT TRUE
);
```

**Explanation:**

*   **`ProductID INT PRIMARY KEY`**: Defines an integer column `ProductID`. It's the primary key, meaning each product will have a unique, non-null ID.
*   **`ProductName VARCHAR(100) NOT NULL`**: Defines a text column for the product name, which can be up to 100 characters long. It cannot be left empty (`NOT NULL`).
*   **`Description TEXT`**: A column for longer product descriptions. `TEXT` is often used for longer strings, or `VARCHAR` with a larger limit.
*   **`Price DECIMAL(10, 2) NOT NULL`**: Stores the product price with up to 10 digits total, and 2 digits after the decimal point (e.g., 99.99 or 12345678.99). It must be provided.
*   **`StockQuantity INT DEFAULT 0`**: Stores the number of items in stock. If not specified when adding a new product, it defaults to 0.
*   **`IsAvailable BOOLEAN DEFAULT TRUE`**: A flag to indicate if the product is currently available. It defaults to `TRUE`.

## Modifying Tables with `ALTER TABLE`

Sometimes, you need to change the structure of an existing table. The `ALTER TABLE` command lets you do this. Common modifications include:

*   **Adding a column**: `ALTER TABLE table_name ADD COLUMN column_name data_type constraints;`
*   **Dropping a column**: `ALTER TABLE table_name DROP COLUMN column_name;`
*   **Modifying a column's data type or constraints**: `ALTER TABLE table_name ALTER COLUMN column_name TYPE new_data_type;` (Syntax for modifying can vary significantly between database systems.)

### Example: Adding a 'Category' Column

Let's say we want to add a `Category` column to our `Products` table:

```sql
ALTER TABLE Products
ADD COLUMN Category VARCHAR(50);
```

This command adds a new column named `Category` which can store text up to 50 characters. By default, it will allow `NULL` values, and no default value is set, so existing rows will have `NULL` in this new column.

### Example: Making Category Mandatory

Now, let's decide that `Category` should not be null and should have a default value.

```sql
-- First, add a default value to existing NULLs (if any)
UPDATE Products SET Category = 'Uncategorized' WHERE Category IS NULL;

-- Then, alter the column to be NOT NULL
ALTER TABLE Products
ALTER COLUMN Category SET NOT NULL;
```
*Note: The exact syntax for `ALTER COLUMN` and setting `NOT NULL` can vary. The example above uses a common PostgreSQL syntax. For other systems, you might need to drop and re-add the column or use different keywords.*

## Key Takeaways

*   **`CREATE TABLE`** is your primary tool for defining new tables, specifying column names, data types, and constraints.
*   Choosing the right **data type** is crucial for how data is stored and validated.
*   **Constraints** like `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, and `DEFAULT` help maintain data integrity.
*   **`ALTER TABLE`** allows you to modify existing table structures by adding, dropping, or changing columns.

Mastering these DDL commands is the first step in building robust and well-structured databases.

## Supports

- [[skills/computing/data-ai/databases/relational-databases/sql/microskills/table-and-column-definition-with-ddl|Table and Column Definition with DDL]]
