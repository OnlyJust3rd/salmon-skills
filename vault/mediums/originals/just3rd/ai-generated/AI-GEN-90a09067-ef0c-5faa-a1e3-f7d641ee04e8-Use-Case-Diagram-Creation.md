---
type: "medium"
title: "Creating Use Case Diagrams: Visualizing System Functionality"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/software-practices/software-engineering/microskills/use-case-diagram-creation|use-case-diagram-creation]]"
learning-time-in-minutes: 5
---
# Creating Use Case Diagrams: Visualizing System Functionality

This lesson focuses on the practical skill of creating Use Case diagrams. These diagrams are a fundamental tool in software engineering for understanding and communicating what a system *does* from the perspective of its users.

## What is a Use Case Diagram?

A Use Case diagram is a visual representation of a system's behavior. It shows the interactions between **actors** (users or other systems that interact with our system) and **use cases** (the functions or services our system provides). Think of it as a high-level blueprint of system functionality.

### Key Components:

*   **Actors:** Represented by stick figures. They are entities *outside* the system that interact with it.
    *   **Primary Actors:** Initiate the interaction to achieve a goal.
    *   **Secondary Actors:** Assist the primary actor or are acted upon by the system.
*   **Use Cases:** Represented by ovals. They describe a sequence of actions a system performs to produce a valuable result for an actor.
*   **Relationships:** Lines connecting actors to use cases, or use cases to other use cases.
    *   **Association:** A simple line indicating an actor interacts with a use case.
    *   **Include:** `<<include>>` relationship. One use case's behavior is *always* included in another use case. The included use case is a common piece of functionality.
    *   **Extend:** `<<extend>>` relationship. One use case *optionally* adds behavior to another use case under specific conditions.

## When to Use Use Case Diagrams

Use Case diagrams are most effective when you need to:

*   **Understand system scope:** Clearly define what the system will and will not do.
*   **Identify functional requirements:** Break down system behavior into discrete, user-centric functions.
*   **Communicate with stakeholders:** Provide a clear, non-technical view of system capabilities for clients, managers, and users.
*   **Guide development:** Serve as a starting point for more detailed requirements analysis and design.

## Steps to Create a Use Case Diagram

Let's walk through the process with an example. Imagine we are building a simple online library system.

### Step 1: Identify the System Boundary

First, define what constitutes "your system." Everything inside this boundary is part of the system; everything outside is an actor.

*   **System:** Online Library System

### Step 2: Identify Actors

Who or what will interact with the Online Library System?

*   **Patron:** A library user who borrows and returns books.
*   **Librarian:** A library staff member who manages books and patrons.
*   **Catalog System:** An external system that provides book metadata.

### Step 3: Identify Use Cases

What actions do these actors want to perform with the system?

*   **For Patron:**
    *   Search for Books
    *   Borrow Book
    *   Return Book
    *   View Borrowed Books
*   **For Librarian:**
    *   Add New Book
    *   Remove Book
    *   Manage Patron Account
    *   View Borrowing History
*   **For Catalog System:**
    *   Get Book Details

### Step 4: Draw the Initial Diagram

Now, place your actors outside the system boundary and your use cases inside. Draw association lines between actors and the use cases they interact with.

```
+-----------------------+
| Online Library System |
|                       |
|   (Search for Books)  |---- Patron
|    (Borrow Book)      |---- Patron
|    (Return Book)      |---- Patron
| (View Borrowed Books) |---- Patron
|                       |
|    (Add New Book)     |---- Librarian
|    (Remove Book)      |---- Librarian
| (Manage Patron Account)|---- Librarian
| (View Borrowing History)|---- Librarian
|                       |
|   (Get Book Details)  |---- Catalog System
|                       |
+-----------------------+
```

### Step 5: Refine with Relationships (`<<include>>` and `<<extend>>`)

Look for common functionality or optional behaviors.

*   **`<<include>>`:** If searching for a book is a necessary prerequisite before borrowing or returning, we can use `<<include>>`. However, in this simple case, it's more likely that "Borrow Book" and "Return Book" are independent actions initiated by the Patron. A better example might be if "View Borrowed Books" is always performed *after* returning a book to confirm success. Let's assume for this exercise that "Borrow Book" *includes* a step to verify patron eligibility.

    Let's re-evaluate: Instead of `<<include>>` directly on "Borrow Book," consider a more granular use case. If "Borrow Book" *always* requires checking "Verify Patron Eligibility," then we can introduce that.

    Let's revise:
    *   **Patron:**
        *   Search for Books
        *   Borrow Book
        *   Return Book
        *   View Borrowed Books
        *   *Verify Patron Eligibility* (This might be a system-internal function, but can be represented as a use case if it has external visibility or interaction). Let's assume it's a sub-process for borrowing.

    A better `<<include>>` example: Suppose "Search for Books" can be done standalone, but "Borrow Book" *always* requires a preliminary step to "Find Book Details" from the catalog. This is a good candidate for `<<include>>`.

    Let's assume "Borrow Book" *includes* a call to "Get Book Details" if the book information isn't readily available in the library's local cache.

    ```
    (Borrow Book)   <<include>>   (Get Book Details)
    ```
    This means that when a Patron initiates "Borrow Book," the system will automatically perform the steps of "Get Book Details" as part of that process.

*   **`<<extend>>`:** If a certain feature is optional. For example, a Patron might want to place a "Hold" on a book if it's currently borrowed by someone else. This is an extension to the "Borrow Book" process.

    ```
    (Place Hold)   <<extend>>   (Borrow Book)
    ```
    This indicates that under certain conditions (e.g., book is unavailable for immediate borrowing), the "Place Hold" use case can be invoked, extending the "Borrow Book" functionality.

### Step 6: Review and Iterate

Look at your diagram. Does it accurately reflect the system's intended functionality? Are the actors and use cases clearly defined? Are the relationships logical? You may need to go back and add, remove, or rename use cases and actors.

For our library example, a more refined diagram might look like this:

```
+---------------------------------+
|       Online Library System     |
|                                 |
|   [Search for Books] ---------- | Patron
|   [Borrow Book] --------------  | Patron
|       ^ <<include>>             |
|       |                         |
|   [Get Book Details] ---------  | Catalog System
|                                 |
|   [Return Book] --------------  | Patron
|   [View Borrowed Books] -----   | Patron
|                                 |
|   [Add New Book] -------------  | Librarian
|   [Remove Book] --------------  | Librarian
|   [Manage Patron Account] ----  | Librarian
|   [View Borrowing History] --   | Librarian
|                                 |
|   [Place Hold] ---------------  | Patron
|       ^ <<extend>>              |
|       |                         |
|   [Borrow Book] --------------- | Patron (already shown)
|                                 |
+---------------------------------+
```

**Note:** In a real-world scenario, `Get Book Details` might be initiated by both "Search for Books" and "Borrow Book," and `Verify Patron Eligibility` might be a distinct use case linked to "Borrow Book" via `<<include>>`. The `<<extend>>` on "Place Hold" shows that it's an optional path that can be taken during the borrowing process.

## Common Pitfalls

*   **Too Much Detail:** Use Case diagrams should be high-level. Avoid describing *how* a use case is implemented.
*   **Confusing Actors and Users:** Actors are roles, not individual people.
*   **Incorrect Relationships:** Using `<<include>>` when `<<extend>>` is appropriate, or vice-versa. `<<include>>` is for mandatory, shared functionality. `<<extend>>` is for optional, conditional functionality.
*   **Missing Key Functionality:** Forgetting to capture important user interactions.

By following these steps and understanding the core components, you can effectively create Use Case diagrams to visualize and communicate system requirements.

## Supports

- [[skills/computing/software-engineering/software-practices/software-engineering/microskills/use-case-diagram-creation|Use Case Diagram Creation]]
