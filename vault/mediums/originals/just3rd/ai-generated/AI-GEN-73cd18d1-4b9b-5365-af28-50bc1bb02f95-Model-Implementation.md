---
type: "medium"
title: "Model Implementation: Bringing Your Data Model to Life"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-modeling/microskills/model-implementation|model-implementation]]"
related-skills:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-modeling/data-modeling|data-modeling]]"
learning-time-in-minutes: 3
---
# Model Implementation: Bringing Your Data Model to Life

This lesson focuses on the practical application of data modeling techniques. Once you've designed a data model, the next crucial step is to implement it, making it functional and ready to store your data. This involves translating your conceptual or logical model into a concrete structure within a database system.

## What is Model Implementation?

Model implementation is the process of translating a data model (whether conceptual, logical, or physical) into a tangible database schema. This means defining tables, columns, data types, relationships, and constraints directly within a chosen database management system (DBMS) like SQL, NoSQL, or a graph database. It's where your abstract design becomes a living structure capable of holding and managing real-world information.

## Practical Scenario: Implementing a Customer Database

Imagine you've designed a data model for a simple e-commerce customer database. Your model includes entities like `Customers`, `Orders`, and `Products`, with relationships showing which customer placed which order and which products are in each order. Now, you need to implement this model using SQL.

**Conceptual/Logical Model Snippets:**

*   **Customers:** `customer_id` (Primary Key), `first_name`, `last_name`, `email`, `registration_date`
*   **Orders:** `order_id` (Primary Key), `customer_id` (Foreign Key to Customers), `order_date`, `total_amount`
*   **Products:** `product_id` (Primary Key), `product_name`, `price`
*   **OrderItems (linking Orders and Products):** `order_item_id` (Primary Key), `order_id` (Foreign Key to Orders), `product_id` (Foreign Key to Products), `quantity`

**Implementation in SQL:**

Here's how you would implement this model using SQL `CREATE TABLE` statements:

```sql
-- Create the Customers table
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT, -- Auto-incrementing primary key
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL, -- Email should be unique for each customer
    registration_date DATE
);

-- Create the Products table
CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL -- Price with 2 decimal places
);

-- Create the Orders table
CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP, -- Default to current date and time
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id) -- Link to Customers table
);

-- Create the OrderItems table (junction table for many-to-many relationship)
CREATE TABLE OrderItems (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
```

**Explanation of Implementation Choices:**

*   **`PRIMARY KEY`**: Uniquely identifies each row in a table.
*   **`AUTO_INCREMENT`**: Automatically assigns a unique, sequential number to new records (common for primary keys).
*   **`VARCHAR(n)`**: Stores variable-length strings up to `n` characters.
*   **`INT`**: Stores whole numbers.
*   **`DECIMAL(p, s)`**: Stores exact numeric values with `p` total digits and `s` digits after the decimal point (good for currency).
*   **`DATE` / `DATETIME`**: Stores date or date and time values.
*   **`UNIQUE`**: Ensures no two rows have the same value in this column (e.g., email addresses).
*   **`NOT NULL`**: Requires a value to be present for this column.
*   **`FOREIGN KEY`**: Establishes a link between tables, enforcing referential integrity. This ensures that an `order` cannot be placed by a non-existent `customer_id`.

## Practice Task

Consider a simple library system with books and members.

**Your Task:** Design and implement the SQL `CREATE TABLE` statements for the following:

1.  **Books:** `book_id` (PK), `title`, `author`, `isbn` (unique), `publication_year`.
2.  **Members:** `member_id` (PK), `first_name`, `last_name`, `email` (unique), `join_date`.
3.  **Borrowings:** `borrowing_id` (PK), `book_id` (FK to Books), `member_id` (FK to Members), `borrow_date`, `return_date` (can be null if not returned).

Ensure appropriate data types, primary keys, foreign keys, and constraints (like `UNIQUE` or `NOT NULL`) are used.

## Self-Check Questions

1.  What is the main purpose of a `FOREIGN KEY` constraint during model implementation?
2.  Why is it important to choose the correct data type for each column when implementing a data model? Provide an example of a data type that would be suitable for storing monetary values and explain why.
3.  In the library example, what would happen if you tried to add a `Borrowing` record with a `book_id` that does not exist in the `Books` table?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-modeling/microskills/model-implementation|Model Implementation]]
