---
type: "medium"
title: "Database Structure: Tables, Columns, and Rows"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/databases/database-foundations/database-systems/microskills/database-structure-tables-columns-rows|database-structure-tables-columns-rows]]"
learning-time-in-minutes: 3
---
# Database Structure: Tables, Columns, and Rows

In the world of relational databases, data isn't just thrown around; it's organized in a very specific and logical way. This organization is fundamental to how we store, manage, and retrieve information efficiently. Think of it like organizing your books on a shelf. You wouldn't just pile them up; you'd likely group them by author, genre, or subject. Relational databases do something similar with data.

### What are Tables, Columns, and Rows?

The core building blocks of any relational database are **tables**. A table is like a spreadsheet, a grid designed to hold specific types of information. Each table represents a single "thing" or entity you want to track, such as "Customers," "Products," or "Orders."

Inside each table, we have **columns** (also called fields or attributes). Columns define the individual pieces of information we store about each "thing." For example, in a "Customers" table, you might have columns for "CustomerID," "FirstName," "LastName," and "Email." Each column has a specific data type (like text, number, or date) that dictates what kind of data it can hold.

Finally, each entry or record within a table is called a **row** (also called a record or tuple). A row represents a single instance of the "thing" the table describes. So, in our "Customers" table, each row would represent one unique customer, with their specific first name, last name, and email address filled in across the respective columns.

### A Practical Example: An Online Bookstore

Let's imagine we're building a simple database for an online bookstore. We'll need to keep track of books and their authors.

We can create two tables:

1.  **`Books` Table:**
    *   **Columns:**
        *   `BookID` (a unique identifier for each book)
        *   `Title` (the name of the book)
        *   `Genre` (e.g., "Fiction," "Science Fiction," "Mystery")
        *   `PublicationYear` (the year the book was published)
        *   `Price` (the cost of the book)

    *   **Example Rows:**
        | BookID | Title                 | Genre         | PublicationYear | Price |
        | :----- | :-------------------- | :------------ | :-------------- | :---- |
        | 101    | The Great Novel       | Fiction       | 2020            | 15.99 |
        | 102    | Space Odyssey         | Science Fiction | 1968            | 12.50 |
        | 103    | The Missing Clue      | Mystery       | 2018            | 14.75 |

2.  **`Authors` Table:**
    *   **Columns:**
        *   `AuthorID` (a unique identifier for each author)
        *   `FirstName` (the author's first name)
        *   `LastName` (the author's last name)
        *   `BirthYear` (the author's year of birth)

    *   **Example Rows:**
        | AuthorID | FirstName | LastName | BirthYear |
        | :------- | :-------- | :------- | :-------- |
        | 1        | Jane      | Austen   | 1775      |
        | 2        | Arthur C. | Clarke   | 1917      |
        | 3        | Agatha    | Christie | 1890      |

In this example, the `Books` table has 5 columns and 3 rows. The `Authors` table has 4 columns and 3 rows. Each row in `Books` represents a specific book, and each row in `Authors` represents a specific author.

### Practice Task

Imagine you are creating a database for a small gym.

1.  **List at least three tables** you might need to store information.
2.  For each table you listed, **identify at least three columns** that would be essential.
3.  Describe what a single **row** would represent in one of your tables.

### Self-Check Questions

*   What is the primary organizational unit in a relational database?
*   What do columns define within a table?
*   What does a row represent in a table?
*   If you had a table named `Employees`, what might be some examples of columns you would include?
*   What would a single row in the `Employees` table represent?

## Supports

- [[skills/computing/data-ai/databases/database-foundations/database-systems/microskills/database-structure-tables-columns-rows|Database Structure: Tables, Columns, Rows]]
