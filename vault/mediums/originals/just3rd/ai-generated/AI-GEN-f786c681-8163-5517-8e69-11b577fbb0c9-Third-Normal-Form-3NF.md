---
type: "medium"
title: "Understanding Third Normal Form (3NF)"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/databases/relational-databases/relational-database/microskills/third-normal-form-3nf|third-normal-form-3nf]]"
learning-time-in-minutes: 5
---
# Understanding Third Normal Form (3NF)

When designing relational databases, we aim to reduce data redundancy and improve data integrity. Normalization is a systematic process to achieve this. We've likely already encountered First Normal Form (1NF) and Second Normal Form (2NF). Now, let's dive into the Third Normal Form (3NF).

## What is Third Normal Form (3NF)?

Third Normal Form (3NF) builds upon 2NF. A relation is in 3NF if it is in 2NF and every non-transitive, non-key attribute is directly dependent on the primary key. In simpler terms, 3NF eliminates transitive dependencies.

A transitive dependency occurs when a non-key attribute depends on another non-key attribute, which in turn depends on the primary key.

**Definition:** A relation is in 3NF if it is in 2NF and no non-key attribute is transitively dependent on the primary key.

**Key Idea:** Eliminate "passing the buck" of dependencies. If attribute 'C' depends on attribute 'B', and attribute 'B' depends on the primary key 'A', then 'C' is transitively dependent on 'A'. 3NF aims to remove this by separating 'B' and 'C' into a new relation where 'B' is the primary key.

## Why is 3NF Important?

Achieving 3NF helps to:

*   **Reduce Redundancy:** By removing transitive dependencies, we avoid repeating information unnecessarily.
*   **Improve Data Integrity:** Less redundancy means fewer opportunities for inconsistencies. When data is updated, it only needs to be changed in one place.
*   **Prevent Anomalies:**
    *   **Update Anomalies:** If information dependent on a non-key attribute needs changing, we might have to update multiple rows, risking inconsistencies if not all are updated.
    *   **Insertion Anomalies:** We might not be able to add certain information without having all the details for another related non-key attribute.
    *   **Deletion Anomalies:** Deleting a record might unintentionally remove other useful information that was transitively dependent.

## How to Achieve 3NF

To convert a relation that is in 2NF to 3NF, you need to identify and eliminate transitive dependencies.

**Steps:**

1.  **Ensure the relation is in 2NF.** This means it must already be in 1NF and all non-key attributes must be fully functionally dependent on the primary key.
2.  **Identify transitive dependencies.** Look for a non-key attribute (let's call it 'C') that depends on another non-key attribute (let's call it 'B'), where 'B' is *not* a candidate key. The primary key is 'A'. The dependency looks like: `A -> B` and `B -> C`. This means `A -> C` transitively.
3.  **Decompose the relation.**
    *   Create a new relation with 'B' as its primary key and 'C' as an attribute.
    *   Remove 'C' from the original relation.

## Example: Moving from 2NF to 3NF

Let's consider a table that is in 2NF but not 3NF:

**`Employees` Table (in 2NF, but not 3NF)**

| EmployeeID (PK) | EmployeeName | DepartmentID | DepartmentName | DepartmentLocation |
| :-------------- | :----------- | :----------- | :------------- | :----------------- |
| 101             | Alice        | D01          | Sales          | New York           |
| 102             | Bob          | D01          | Sales          | New York           |
| 103             | Charlie      | D02          | Marketing      | London             |
| 104             | David        | D01          | Sales          | New York           |

In this table:

*   `EmployeeID` is the primary key.
*   `EmployeeName` depends on `EmployeeID`.
*   `DepartmentID` depends on `EmployeeID`.
*   `DepartmentName` depends on `DepartmentID`.
*   `DepartmentLocation` depends on `DepartmentID`.

Here, `DepartmentName` and `DepartmentLocation` are non-key attributes that depend on `DepartmentID`, which is itself a non-key attribute in the `Employees` table. `EmployeeID` determines `DepartmentID`, and `DepartmentID` determines `DepartmentName` and `DepartmentLocation`. This creates a transitive dependency: `EmployeeID -> DepartmentID -> DepartmentName` and `EmployeeID -> DepartmentID -> DepartmentLocation`.

**Problems:**

*   **Redundancy:** "Sales" and "New York" are repeated for every employee in the Sales department.
*   **Update Anomaly:** If the Sales department moves from New York to Chicago, we'd have to update *every* employee record in the Sales department. If we miss one, data becomes inconsistent.
*   **Insertion Anomaly:** We cannot add a new department and its location if there are no employees assigned to it yet.
*   **Deletion Anomaly:** If we delete the last employee from the Sales department, we lose the information that the Sales department is located in New York.

**Decomposing to 3NF:**

We need to remove the transitive dependency by separating the department information into its own table.

1.  **Identify the transitive dependency:** `DepartmentID` determines `DepartmentName` and `DepartmentLocation`.
2.  **Create a new `Departments` table:**
    *   `DepartmentID` becomes the primary key.
    *   `DepartmentName` and `DepartmentLocation` are its attributes.

**New `Employees` Table (in 3NF)**

| EmployeeID (PK) | EmployeeName | DepartmentID (FK) |
| :-------------- | :----------- | :---------------- |
| 101             | Alice        | D01               |
| 102             | Bob          | D01               |
| 103             | Charlie      | D02               |
| 104             | David        | D01               |

**New `Departments` Table (in 3NF)**

| DepartmentID (PK) | DepartmentName | DepartmentLocation |
| :---------------- | :------------- | :----------------- |
| D01               | Sales          | New York           |
| D02               | Marketing      | London             |

Now, the `Employees` table is in 3NF because all non-key attributes (`EmployeeName`) are directly dependent on the primary key (`EmployeeID`). The `Departments` table is also in 3NF.

**Benefits of the 3NF structure:**

*   **No Redundancy:** Department names and locations are stored only once.
*   **Easier Updates:** If the Sales department moves, we only update one row in the `Departments` table.
*   **Easier Insertion:** We can add a new department with its location even if no employees are assigned yet.
*   **No Deletion Anomalies:** Deleting an employee record does not affect department information.

## When to Consider 3NF

Always aim for 3NF as a standard for your relational database design. It provides a good balance between reducing redundancy and maintaining performance. While higher normal forms (like BCNF, 4NF, 5NF) exist, they often introduce more complexity for diminishing returns in many practical applications. 3NF is a widely accepted and effective standard for most database designs.

By understanding and applying 3NF, you significantly improve the structure, reliability, and maintainability of your relational databases.

## Supports

- [[skills/computing/data-ai/databases/relational-databases/relational-database/microskills/third-normal-form-3nf|Third Normal Form (3NF)]]
