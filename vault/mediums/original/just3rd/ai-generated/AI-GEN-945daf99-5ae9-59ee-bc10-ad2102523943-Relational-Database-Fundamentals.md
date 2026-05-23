---
type: "medium"
title: "Relational Database Fundamentals"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/databases/database-system/microskills/relational-database-fundamentals|relational-database-fundamentals]]"
learning-time-in-minutes: 4
---
# Relational Database Fundamentals

Relational databases are a fundamental part of modern data management. They organize data in a structured way, making it easy to access and manipulate. This lesson introduces you to the core concepts and terminology of relational databases and the systems that manage them (RDBMS).

## What is a Relational Database?

A relational database is a type of database that stores and provides access to data points that are related to one another. These relationships are organized in a way that allows for efficient querying and data retrieval. At its heart, a relational database is built on the concept of a **relation**, which is essentially a table.

### Key Components:

*   **Table:** A collection of related data entries organized in rows and columns. Think of it like a spreadsheet.
*   **Column (Attribute):** A vertical part of a table that defines a specific type of data. Each column has a name and a data type (e.g., text, number, date).
*   **Row (Tuple or Record):** A horizontal entry in a table that represents a single item or record. Each row contains values for all the columns in that table.
*   **Relationship:** The connection between two or more tables based on common columns. These relationships allow you to link data from different tables together.

### Relational Database Management System (RDBMS)

An RDBMS is the software used to create, manage, and interact with relational databases. Popular RDBMS examples include MySQL, PostgreSQL, Oracle, and SQL Server. They provide the tools to define the database structure, add, update, and delete data, and retrieve data through queries.

## A Practical Scenario: A Small Online Bookstore

Imagine you are building a simple database for an online bookstore.

Let's consider two core pieces of information: **Books** and **Authors**.

**1. Books Table:**

| BookID (Primary Key) | Title              | Genre    | PublicationYear |
| :------------------- | :----------------- | :------- | :-------------- |
| 101                  | The Hitchhiker's Guide to the Galaxy | Sci-Fi   | 1979            |
| 102                  | Pride and Prejudice  | Romance  | 1813            |
| 103                  | 1984               | Dystopian | 1949            |

*   **Table:** `Books`
*   **Columns:** `BookID`, `Title`, `Genre`, `PublicationYear`
*   **Rows:** Each row represents a specific book. For example, the first row is "The Hitchhiker's Guide to the Galaxy".
*   `BookID` is a special type of column called a **Primary Key**. It uniquely identifies each row in the `Books` table.

**2. Authors Table:**

| AuthorID (Primary Key) | FirstName | LastName |
| :--------------------- | :-------- | :------- |
| 201                    | Douglas   | Adams    |
| 202                    | Jane      | Austen   |
| 203                    | George    | Orwell   |

*   **Table:** `Authors`
*   **Columns:** `AuthorID`, `FirstName`, `LastName`
*   **Rows:** Each row represents a specific author.
*   `AuthorID` is the **Primary Key** for the `Authors` table.

**Establishing a Relationship:**

How do we know who wrote which book? We can link these tables using a **Foreign Key**. We can add an `AuthorID` column to the `Books` table. This `AuthorID` in the `Books` table would refer to the `AuthorID` in the `Authors` table.

**Updated Books Table:**

| BookID (Primary Key) | Title              | Genre    | PublicationYear | AuthorID (Foreign Key) |
| :------------------- | :----------------- | :------- | :-------------- | :--------------------- |
| 101                  | The Hitchhiker's Guide to the Galaxy | Sci-Fi   | 1979            | 201                    |
| 102                  | Pride and Prejudice  | Romance  | 1813            | 202                    |
| 103                  | 1984               | Dystopian | 1949            | 203                    |

Now, we can see that BookID `101` is associated with AuthorID `201` (Douglas Adams), BookID `102` with AuthorID `202` (Jane Austen), and so on. This is a **one-to-many relationship**: one author can write many books, but each entry in this `Books` table points to a single author.

## Practice Task

Imagine you are managing data for a simple library. You need to store information about `Books` and `Borrowers`.

1.  **Identify the main pieces of information** you would need for a `Books` table. List at least 4 columns.
2.  **Identify the main pieces of information** you would need for a `Borrowers` table. List at least 3 columns.
3.  **How would you link a book to the borrower who currently has it checked out?** What type of column would you add to which table, and what would it represent?

## Self-Check Questions

1.  What is the fundamental building block of a relational database?
2.  Give an example of an RDBMS.
3.  What is the difference between a column and a row in a table?
4.  What is a primary key used for?
5.  What is a foreign key used for?

## Supports

- [[skills/computing/data-ai/databases/database-system/microskills/relational-database-fundamentals|Relational Database Fundamentals]]
