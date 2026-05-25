---
type: medium
title: Relational vs. Document Data Models in MongoDB
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[relational-vs-document-data-model|relational-vs-document-data-model]]"
related-skills:
  - "[[mongodb|mongodb]]"
learning-time-in-minutes: 4
---
# Relational vs. Document Data Models in MongoDB

MongoDB, as a NoSQL database, takes a fundamentally different approach to storing data compared to traditional relational databases. Understanding this difference is key to leveraging MongoDB's strengths. This lesson will compare the core concepts of relational tables and rows with MongoDB's collections and documents.

## The Relational Model: Tables and Rows

In the world of relational databases (like SQL Server, PostgreSQL, MySQL), data is organized into **tables**. Think of a table as a spreadsheet.

*   **Tables:** Each table represents a specific type of entity, such as "Customers," "Products," or "Orders."
*   **Rows (or Records):** Each row within a table represents a single instance of that entity. For example, one row in the "Customers" table would be a specific customer.
*   **Columns (or Fields):** Each column defines an attribute of the entity. For the "Customers" table, columns might be `CustomerID`, `FirstName`, `LastName`, `Email`, and `Address`.
*   **Schema:** Relational databases are schema-on-write. This means you must define the structure (tables, columns, data types) *before* you can insert any data. All rows in a table must conform to the defined columns and their data types.
*   **Relationships:** Relationships between tables are typically managed using primary and foreign keys. For example, an `OrderID` in an "Orders" table might reference a `CustomerID` in the "Customers" table to link an order to the customer who placed it.

**Example:**

Imagine storing customer information in a relational database:

**Customers Table:**

| CustomerID | FirstName | LastName | Email              | City      |
| :--------- | :-------- | :------- | :----------------- | :-------- |
| 101        | Alice     | Smith    | alice.s@example.com | New York  |
| 102        | Bob       | Johnson  | bob.j@example.com  | Los Angeles |

**Orders Table:**

| OrderID | CustomerID | OrderDate  | TotalAmount |
| :------ | :--------- | :--------- | :---------- |
| 5001    | 101        | 2023-10-26 | 75.50       |
| 5002    | 101        | 2023-10-27 | 120.00      |
| 5003    | 102        | 2023-10-27 | 45.25       |

To get Alice's orders, you'd join the `Customers` and `Orders` tables on `CustomerID`.

## The MongoDB Model: Collections and Documents

MongoDB, being a document database, uses a more flexible structure.

*   **Databases:** MongoDB organizes data into databases, similar to relational systems.
*   **Collections:** Within a database, data is stored in **collections**. A collection is a group of MongoDB **documents**. Think of a collection as a container for related documents.
*   **Documents:** A MongoDB document is a data structure that resembles a JSON object (more accurately, BSON – Binary JSON). It's a set of key-value pairs. Documents are dynamic, meaning they can have different fields.
    *   Documents are analogous to rows in a relational table, but with much more flexibility.
    *   Fields within a document are analogous to columns, but not all documents in a collection need to have the same fields.
*   **Schema:** MongoDB is schema-on-read. This means there's no strict requirement to define a schema upfront. You can insert documents with varying structures into the same collection. The structure is interpreted when you query the data.
*   **Relationships:** While MongoDB doesn't use explicit foreign keys, relationships can be represented in two main ways:
    *   **Embedding:** Related data can be nested directly within a document.
    *   **Referencing:** Similar to foreign keys, you can store the `_id` of one document in another to create a link.

**Example:**

Using the same customer and order data in MongoDB:

**customers Collection:**

```json
[
  {
    "_id": ObjectId("653a9c2b3d4f5e6a7b8c9d01"),
    "customer_id": 101,
    "first_name": "Alice",
    "last_name": "Smith",
    "email": "alice.s@example.com",
    "address": {
      "city": "New York",
      "zip_code": "10001"
    },
    "orders": [
      {
        "order_id": 5001,
        "order_date": ISODate("2023-10-26T00:00:00Z"),
        "total_amount": 75.50
      },
      {
        "order_id": 5002,
        "order_date": ISODate("2023-10-27T00:00:00Z"),
        "total_amount": 120.00
      }
    ]
  },
  {
    "_id": ObjectId("653a9c2b3d4f5e6a7b8c9d02"),
    "customer_id": 102,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.j@example.com",
    "address": {
      "city": "Los Angeles",
      "zip_code": "90001"
    }
  }
]
```

In this example, we've embedded Alice's orders directly within her customer document. Bob, who has no orders yet, doesn't have an `orders` field. This is a key difference – varying structures within the same collection are perfectly valid.

## Key Differences Summarized

| Feature        | Relational Databases (SQL) | MongoDB (Document)        |
| :------------- | :------------------------- | :------------------------ |
| **Primary Unit** | Table, Row                 | Collection, Document      |
| **Structure**  | Rigid schema (schema-on-write) | Flexible schema (schema-on-read) |
| **Data Format**| Structured tables          | JSON-like documents (BSON)|
| **Relationships**| Foreign keys, Joins        | Embedding, Referencing    |
| **Data Redundancy**| Minimized through normalization | Can be increased through embedding for performance |

## When to Choose What

*   **Relational:** Best for applications where data integrity and consistency are paramount, and relationships are complex and well-defined. Think financial systems, inventory management, or systems requiring ACID transactions across multiple tables.
*   **MongoDB:** Ideal for applications with rapidly evolving data requirements, where flexibility and speed of development are crucial. This includes content management systems, real-time analytics, IoT data, and applications that benefit from denormalized data for faster reads.

## Supports

- [[relational-vs-document-data-model|Relational vs Document Data Model]]
