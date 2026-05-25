---
type: "medium"
title: "Understanding Redundancy Reduction through Normalization"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/databases/relational-databases/relational-database/microskills/redundancy-reduction-in-design|redundancy-reduction-in-design]]"
learning-time-in-minutes: 6
---
# Understanding Redundancy Reduction through Normalization

In relational database design, a critical goal is to minimize data redundancy. Redundancy means storing the same piece of information multiple times. This can lead to several problems, including wasted storage space, inconsistencies (where different copies of the same data don't match), and difficulties in updating data. Normalization is a systematic process for organizing data in a database to reduce redundancy and improve data integrity.

This lesson focuses on how normalization, specifically the initial forms, impacts the reduction of redundancy in your database design.

## What is Data Redundancy?

Data redundancy occurs when the same data element is stored in multiple places within a database.

**Example of Redundancy:**

Imagine a simple table to store customer orders:

| OrderID | CustomerName | CustomerAddress | ProductName | ProductPrice | Quantity |
|---|---|---|---|---|---|
| 101 | Alice Smith | 123 Main St | Laptop | 1200 | 1 |
| 102 | Bob Johnson | 456 Oak Ave | Keyboard | 75 | 2 |
| 103 | Alice Smith | 123 Main St | Mouse | 25 | 1 |

In this table, "Alice Smith" and her address "123 Main St" are repeated for two different orders. Similarly, if a customer has multiple products in one order, product details might be repeated.

**Problems Caused by Redundancy:**

*   **Wasted Storage:** Storing the same data repeatedly uses more disk space than necessary.
*   **Update Anomalies:** If Alice Smith moves, you would need to update her address in *every* order record associated with her. Missing even one update can lead to inconsistent data.
*   **Insertion Anomalies:** You can't add a new customer without them having placed an order, as the `OrderID` is likely a primary key.
*   **Deletion Anomalies:** If you delete the only order a customer has, you might lose all information about that customer.

## Normalization Forms and Redundancy

Normalization involves applying a series of rules, called normal forms, to your database tables. Each normal form builds upon the previous one, progressively reducing redundancy. We'll look at the first three forms: 1NF, 2NF, and 3NF.

### First Normal Form (1NF)

The first step in normalization is achieving First Normal Form (1NF).

**Rule for 1NF:**

*   Each column must contain atomic (indivisible) values.
*   There should be no repeating groups of columns.

**Applying 1NF:**

Let's refine our example to meet 1NF. If we had a table where an order could list multiple products in a single row like this:

| OrderID | CustomerName | CustomerAddress | Products |
|---|---|---|---|
| 101 | Alice Smith | 123 Main St | Laptop, Mouse |

This violates 1NF because the "Products" column contains multiple values (a repeating group within a single cell). To achieve 1NF, we break this down into separate rows for each product within an order.

**Table in 1NF (Conceptual - leading to issues for 2NF/3NF):**

To make each row unique for an order and its associated product, we might introduce a composite key or unique identifier for each line item. A common approach is to separate orders and order items.

**`Orders` Table:**

| OrderID | CustomerName | CustomerAddress |
|---|---|---|
| 101 | Alice Smith | 123 Main St |
| 102 | Bob Johnson | 456 Oak Ave |
| 103 | Alice Smith | 123 Main St |

**`OrderItems` Table:**

| OrderItemID | OrderID | ProductName | ProductPrice | Quantity |
|---|---|---|---|---|
| 1 | 101 | Laptop | 1200 | 1 |
| 2 | 101 | Mouse | 25 | 1 |
| 3 | 102 | Keyboard | 75 | 2 |
| 4 | 103 | Mouse | 25 | 1 |

Even in this 1NF structure, `CustomerName` and `CustomerAddress` are still redundant in the `Orders` table if a customer places multiple orders.

### Second Normal Form (2NF)

Second Normal Form (2NF) builds on 1NF. It addresses redundancy that arises when a table has a composite primary key.

**Rule for 2NF:**

*   The table must be in 1NF.
*   All non-key attributes must be fully functionally dependent on the *entire* primary key. This means no non-key attribute should depend on only a *part* of a composite primary key.

In our `OrderItems` table above, if `(OrderID, OrderItemID)` were the primary key (which it might be in a more complex scenario), `ProductName`, `ProductPrice`, and `Quantity` are dependent on the `OrderID` and `OrderItemID`. However, if `(OrderID, ProductName)` was the composite key, `ProductPrice` would depend only on `ProductName`, not the full composite key.

To achieve 2NF and reduce redundancy, we separate data that depends on only part of the key into its own table.

**Transitioning to 2NF:**

The redundancy of customer information in the `Orders` table can be addressed by moving customer details into a separate `Customers` table.

**`Customers` Table:**

| CustomerID | CustomerName | CustomerAddress |
|---|---|---|
| C1 | Alice Smith | 123 Main St |
| C2 | Bob Johnson | 456 Oak Ave |

Now, the `Orders` table only needs a `CustomerID` to link to the customer.

**`Orders` Table (in 2NF):**

| OrderID | CustomerID | OrderDate |
|---|---|---|
| 101 | C1 | 2023-10-26 |
| 102 | C2 | 2023-10-26 |
| 103 | C1 | 2023-10-27 |

And the `OrderItems` table would link to `Orders` and potentially a `Products` table.

**`Products` Table:**

| ProductID | ProductName | ProductPrice |
|---|---|---|
| P1 | Laptop | 1200 |
| P2 | Mouse | 25 |
| P3 | Keyboard | 75 |

**`OrderItems` Table (in 2NF):**

| OrderItemID | OrderID | ProductID | Quantity |
|---|---|---|---|
| 1 | 101 | P1 | 1 |
| 2 | 101 | P2 | 1 |
| 3 | 102 | P3 | 2 |
| 4 | 103 | P2 | 1 |

With these changes, customer details are no longer repeated for each order, and product details are no longer repeated for each order item.

### Third Normal Form (3NF)

Third Normal Form (3NF) further reduces redundancy by eliminating transitive dependencies.

**Rule for 3NF:**

*   The table must be in 2NF.
*   There should be no transitive dependencies. A transitive dependency exists when a non-key attribute is dependent on another non-key attribute, which in turn is dependent on the primary key.

**Applying 3NF:**

Consider a hypothetical `Employees` table that includes the department they work in and the manager of that department:

**`Employees` Table (violating 3NF):**

| EmployeeID | EmployeeName | DepartmentName | DepartmentManager |
|---|---|---|---|
| E001 | John Doe | Sales | Jane Lee |
| E002 | Jane Smith | Sales | Jane Lee |
| E003 | Peter Jones | IT | David Kim |

In this table:
*   `EmployeeID` is the primary key.
*   `EmployeeName`, `DepartmentName`, and `DepartmentManager` are dependent on `EmployeeID` (so it's in 2NF).
*   However, `DepartmentManager` depends on `DepartmentName`, and `DepartmentName` depends on `EmployeeID`. This creates a transitive dependency: `EmployeeID` -> `DepartmentName` -> `DepartmentManager`.

The redundancy here is that `DepartmentManager` is repeated for every employee in the same department.

To achieve 3NF, we split the table:

**`Employees` Table (in 3NF):**

| EmployeeID | EmployeeName | DepartmentID |
|---|---|---|
| E001 | John Doe | D101 |
| E002 | Jane Smith | D101 |
| E003 | Peter Jones | D202 |

**`Departments` Table (in 3NF):**

| DepartmentID | DepartmentName | DepartmentManager |
|---|---|---|
| D101 | Sales | Jane Lee |
| D202 | IT | David Kim |

Now, department information is stored only once in the `Departments` table, and employees are linked to their department via `DepartmentID`. This eliminates the redundancy of the department manager's name.

## Impact on Database Design

By moving through normalization forms (1NF, 2NF, 3NF), we systematically:

*   **Eliminate Redundant Data:** Storing information in a single place reduces duplication significantly.
*   **Prevent Update Anomalies:** When data is in one place, updates are much simpler and less error-prone.
*   **Prevent Insertion Anomalies:** Allows for independent insertion of entities (like customers or departments) without needing related data.
*   **Prevent Deletion Anomalies:** Ensures that deleting one record doesn't accidentally delete unrelated information.
*   **Improve Data Integrity:** Consistent data is easier to maintain.
*   **Simplify Queries:** While initially it might seem like more joins are needed, well-normalized databases can lead to cleaner and more efficient query writing.

Understanding how each normalization form targets specific types of redundancy is key to designing efficient and robust relational databases.

## Supports

- [[skills/computing/data-ai/databases/relational-databases/relational-database/microskills/redundancy-reduction-in-design|Redundancy Reduction in Design]]
