---
type: medium
title: "Schema Construction: Building Your Database Foundation"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[schema-construction|schema-construction]]"
related-skills:
  - "[[mysql|mysql]]"
learning-time-in-minutes: 4
---
# Schema Construction: Building Your Database Foundation

Welcome to the world of database schema construction! In this lesson, we'll focus on building the foundational structure of a relational database using SQL's Data Definition Language (DDL). This is a crucial step in implementing a database design, allowing you to translate a blueprint into a functional database.

## What is a Database Schema?

A database schema is essentially the blueprint of your database. It defines:

*   **Tables:** The main containers for your data.
*   **Columns (Attributes):** The individual pieces of information within each table (e.g., `customer_id`, `first_name`, `email`).
*   **Data Types:** The kind of data each column can hold (e.g., `INT` for integers, `VARCHAR` for text, `DATE` for dates).
*   **Relationships:** How different tables are connected to each other (e.g., a `customer_id` in an `orders` table links to the `customers` table).
*   **Constraints:** Rules to ensure data integrity (e.g., a column cannot be empty, a value must be unique).

## Key DDL Statements for Schema Construction

SQL Data Definition Language (DDL) provides the commands to create, modify, and delete database structures. For schema construction, we'll primarily use:

*   **`CREATE TABLE`**: To define a new table.
*   **`ALTER TABLE`**: To modify an existing table.
*   **`DROP TABLE`**: To remove a table.

Let's dive into `CREATE TABLE`.

### Creating Tables: The `CREATE TABLE` Statement

The `CREATE TABLE` statement is your primary tool for building tables. Its basic syntax looks like this:

```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    column3 datatype constraints,
    ...
);
```

Let's break down the components:

*   **`CREATE TABLE table_name`**: This initiates the command to create a table named `table_name`.
*   **`column_name datatype`**: For each column, you specify its name and the type of data it will store. Common data types include:
    *   `INT` or `INTEGER`: Whole numbers.
    *   `VARCHAR(n)`: Variable-length strings, where `n` is the maximum number of characters.
    *   `TEXT`: Longer strings.
    *   `DATE`: For dates (YYYY-MM-DD).
    *   `DATETIME`: For dates and times.
    *   `DECIMAL(p, s)`: Fixed-point numbers, where `p` is total digits and `s` is digits after the decimal.
    *   `BOOLEAN`: True or false values.
*   **`constraints`**: These enforce data integrity. Some common ones are:
    *   `PRIMARY KEY`: Uniquely identifies each row in a table. A table can have only one primary key, which cannot contain `NULL` values.
    *   `NOT NULL`: Ensures that a column cannot have a `NULL` value.
    *   `UNIQUE`: Ensures that all values in a column are different.
    *   `FOREIGN KEY`: A field in one table that uniquely identifies a row of another table. It links tables together.
    *   `DEFAULT value`: Sets a default value for a column if no value is specified.
    *   `CHECK (condition)`: Ensures that all values in a column satisfy a specific condition.

### Practical Example: Building an `Employees` and `Departments` Schema

Let's imagine we need to store information about employees and the departments they belong to.

**Step 1: Define the `Departments` Table**

Each department has a unique ID, a name, and a location.

```sql
CREATE TABLE Departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL UNIQUE,
    location VARCHAR(100)
);
```

*   `department_id` is our primary key, ensuring each department has a unique identifier.
*   `department_name` cannot be empty and must be unique.
*   `location` can be optional (allows `NULL`).

**Step 2: Define the `Employees` Table**

Each employee has an ID, first name, last name, email, hire date, and belongs to a specific department.

```sql
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    hire_date DATE,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);
```

*   `employee_id` is the primary key for the `Employees` table.
*   `first_name` and `last_name` are mandatory.
*   `email` must be unique.
*   `department_id` here is not just an integer; it's a `FOREIGN KEY`.
    *   `FOREIGN KEY (department_id)`: This specifies that the `department_id` column in the `Employees` table is a foreign key.
    *   `REFERENCES Departments(department_id)`: This indicates that the values in `Employees.department_id` must match existing `department_id` values in the `Departments` table. This enforces referential integrity, meaning you can't assign an employee to a department that doesn't exist.

**Putting it Together:**

When you execute these `CREATE TABLE` statements in a MySQL client, the database will create these two tables with their defined structures and constraints.

## Modifying Tables: The `ALTER TABLE` Statement

Sometimes, your design evolves. You might need to add a new column, change a data type, or add a constraint. That's where `ALTER TABLE` comes in.

**Adding a Column:**

Let's say we want to add a `salary` column to our `Employees` table.

```sql
ALTER TABLE Employees
ADD COLUMN salary DECIMAL(10, 2);
```

**Dropping a Column:**

If we decide `location` is not needed in the `Departments` table:

```sql
ALTER TABLE Departments
DROP COLUMN location;
```

**Modifying a Column (Data Type or Constraints):**

This can be more complex and database-specific. For example, to change `department_name` to allow up to 150 characters:

```sql
ALTER TABLE Departments
MODIFY COLUMN department_name VARCHAR(150) NOT NULL UNIQUE;
```

## Removing Tables: The `DROP TABLE` Statement

If a table is no longer needed, you can remove it using `DROP TABLE`.

```sql
DROP TABLE table_name;
```

**Warning:** This action is irreversible and will delete all data within the table. Use with extreme caution.

```sql
DROP TABLE Employees;
```

## Conclusion

Schema construction is the fundamental step in bringing your database design to life. By mastering `CREATE TABLE`, `ALTER TABLE`, and `DROP TABLE`, you gain the power to build and maintain the structural integrity of your relational databases using SQL DDL. This forms the bedrock for all your data storage and retrieval operations.

## Supports

- [[schema-construction|Schema Construction]]
