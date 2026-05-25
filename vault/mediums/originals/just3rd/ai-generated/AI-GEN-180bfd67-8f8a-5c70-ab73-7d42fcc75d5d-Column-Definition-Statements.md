---
type: "medium"
title: "Defining Table Columns with SQL DDL"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/databases/relational-databases/mysql/microskills/column-definition-statements|column-definition-statements]]"
learning-time-in-minutes: 4
---
# Defining Table Columns with SQL DDL

In MySQL, when you're implementing a database schema, a fundamental step is defining the structure of your tables. This involves specifying what information each table will hold, which is done by defining its columns. You'll use SQL's Data Definition Language (DDL) to achieve this. This lesson focuses on how to define these table attributes – the columns.

## The `CREATE TABLE` Statement: Your Blueprint

The primary DDL statement for creating tables and defining their columns is `CREATE TABLE`. Its basic syntax looks like this:

```sql
CREATE TABLE table_name (
    column1_name data_type constraints,
    column2_name data_type constraints,
    column3_name data_type constraints,
    ...
);
```

Let's break down the key components:

*   **`CREATE TABLE table_name`**: This part initiates the table creation process and gives your table a unique name.
*   **`(` and `)`**: These parentheses enclose the list of column definitions.
*   **`column_name`**: This is the name you assign to a specific attribute or piece of data your table will store. Column names should be descriptive and follow naming conventions (e.g., lowercase, underscores for spaces).
*   **`data_type`**: This is crucial. It specifies the *type* of data that can be stored in that column. MySQL offers a rich set of data types. Some common ones include:
    *   **`INT`**: For whole numbers.
    *   **`VARCHAR(length)`**: For variable-length strings. `length` is the maximum number of characters.
    *   **`TEXT`**: For longer strings.
    *   **`DATE`**: For dates (YYYY-MM-DD).
    *   **`DATETIME`**: For dates and times.
    *   **`DECIMAL(precision, scale)`**: For exact numeric values, useful for currency. `precision` is the total number of digits, and `scale` is the number of digits after the decimal point.
    *   **`BOOLEAN`**: For true/false values.
*   **`constraints`**: These are rules applied to a column to ensure data integrity and consistency. We'll touch on a few key ones here.

## Essential Column Constraints

Constraints are vital for maintaining the quality and accuracy of your data. When defining columns, you'll often use these:

*   **`NOT NULL`**: Ensures that a column cannot have a `NULL` value. Every record *must* have a value for this column.
*   **`UNIQUE`**: Guarantees that all values in a column are different from each other. No two rows can have the same value in a `UNIQUE` column.
*   **`PRIMARY KEY`**: A combination of `NOT NULL` and `UNIQUE`. A table can have only one `PRIMARY KEY`. It uniquely identifies each row in the table.
*   **`DEFAULT value`**: Specifies a default value to be inserted into the column if no explicit value is provided during an `INSERT` operation.
*   **`AUTO_INCREMENT`**: Typically used with integer primary keys. MySQL automatically assigns a unique, sequential integer value to this column for each new row.

## Example: Creating a `Products` Table

Let's say you need to design a table to store information about products in an online store. Based on a design, you might decide to include:

*   A unique identifier for each product.
*   The name of the product.
*   A description.
*   The price.
*   The date the product was added.
*   Whether the product is currently available.

Here's how you could define the `products` table using `CREATE TABLE` with appropriate data types and constraints:

```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    added_date DATE NOT NULL,
    is_available BOOLEAN DEFAULT TRUE
);
```

Let's dissect this example:

*   **`product_id INT AUTO_INCREMENT PRIMARY KEY`**: This defines `product_id` as an integer that will automatically increment with each new product added, and it serves as the primary key, ensuring each product has a unique identifier.
*   **`product_name VARCHAR(255) NOT NULL UNIQUE`**: `product_name` is a string of up to 255 characters. It cannot be empty (`NOT NULL`) and each product name must be unique across all products.
*   **`description TEXT`**: Allows for a longer text description of the product. It can be `NULL` if no description is provided.
*   **`price DECIMAL(10, 2) NOT NULL DEFAULT 0.00`**: `price` is a decimal number, allowing up to 10 digits in total, with 2 digits after the decimal point. It must have a value and defaults to `0.00` if not specified.
*   **`added_date DATE NOT NULL`**: Stores the date the product was added. It's mandatory.
*   **`is_available BOOLEAN DEFAULT TRUE`**: A simple true/false indicator for product availability, defaulting to `TRUE` if not specified.

## Common Pitfalls

*   **Choosing the wrong data type**: For instance, using `VARCHAR` for numbers you intend to perform calculations on, or using a fixed-size `CHAR` when the length varies significantly. This can lead to incorrect data or inefficient storage.
*   **Forgetting `NOT NULL` for essential fields**: This can result in records with missing critical information.
*   **Not considering `UNIQUE` or `PRIMARY KEY` where needed**: This can lead to duplicate entries and identification issues.
*   **Overly restrictive `VARCHAR` lengths**: If `VARCHAR(50)` is used for a field that might occasionally exceed 50 characters, data will be truncated.

By understanding and effectively using `CREATE TABLE` statements with appropriate data types and constraints, you lay a strong foundation for your MySQL database, ensuring it can store and manage your information reliably.

## Supports

- [[skills/computing/data-ai/databases/relational-databases/mysql/microskills/column-definition-statements|Column Definition Statements]]
