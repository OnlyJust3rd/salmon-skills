---
type: "medium"
title: "Managing Data Flow: Application-Database Interaction"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/backend-api/application-database-integration/microskills/application-database-interaction|Application-Database Interaction]]"
---
# Managing Data Flow: Application-Database Interaction

This lesson focuses on how your application, residing in the presentation and business logic tiers, communicates with the database tier to store and retrieve information. Effectively managing this data flow is crucial for a responsive and functional application.

## What is Application-Database Interaction?

Application-database interaction is the process by which your application sends requests to the database and receives data back. This involves:

*   **Sending Queries:** The application constructs and sends SQL queries (or equivalent for other database types) to the database.
*   **Receiving Data:** The database processes these queries and returns results, which the application then processes or displays.
*   **Data Mapping:** Translating data between the application's object model and the database's relational schema.

## Practical Scenario: A Simple To-Do List Application

Imagine a basic to-do list application.

*   **Application Tier:** This is what the user interacts with (e.g., a web interface).
*   **Database Tier:** This stores the to-do items (e.g., a PostgreSQL database).

When a user adds a new to-do item, the application needs to send this information to the database. When the user views their to-do list, the application needs to retrieve all active items from the database.

### Example: Adding a To-Do Item

Let's say your application's business logic layer has a function to add a new to-do item. It might construct an SQL `INSERT` statement.

```sql
INSERT INTO todos (task_description, due_date, is_completed)
VALUES ('Buy groceries', '2023-12-31', FALSE);
```

This SQL command is sent to the database. Upon successful execution, the database stores this new record.

### Example: Retrieving To-Do Items

To display the list of to-do items, the application would send a query like this:

```sql
SELECT id, task_description, due_date
FROM todos
WHERE is_completed = FALSE;
```

The database would return a set of rows, each representing an incomplete to-do item. The application then takes these rows and presents them to the user.

## Practice Task

1.  **Identify:** For the to-do list scenario, describe the SQL `SELECT` query you would use to retrieve all *completed* to-do items.
2.  **Construct:** Imagine you need to update a to-do item to mark it as completed. Write the SQL `UPDATE` statement.

## Self-Check Questions

1.  What are the two primary directions of data flow in application-database interaction?
2.  What type of SQL statement is used to add new data to a database?
3.  What type of SQL statement is used to retrieve specific data from a database?

## Supports

- [[skills/web-and-design/backend-api/application-database-integration/microskills/application-database-interaction|Application-Database Interaction]]
