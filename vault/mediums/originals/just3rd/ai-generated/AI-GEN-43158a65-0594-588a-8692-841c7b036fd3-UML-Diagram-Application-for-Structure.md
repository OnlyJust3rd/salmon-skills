---
type: "medium"
title: "Modeling System Structure with UML Class Diagrams"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/uml-modeling/microskills/uml-diagram-application-for-structure|uml-diagram-application-for-structure]]"
learning-time-in-minutes: 4
---
# Modeling System Structure with UML Class Diagrams

When we model the structure of a system, we're talking about its static components and how they relate to each other. Think of it like an architectural blueprint for your software. For this, UML offers several diagrams, but the **Class Diagram** is your primary tool for representing the structural elements of an object-oriented system.

## What is a Class Diagram?

A UML Class Diagram visualizes the classes in a system, their attributes (data members), their operations (methods), and the relationships between these classes. It's fundamental to understanding the static organization of your software.

## Key Components of a Class Diagram

1.  **Class:** The most basic building block. It represents a blueprint for creating objects.
    *   **Name:** The unique identifier of the class.
    *   **Attributes:** Data members that hold the state of an object.
    *   **Operations (Methods):** Functions that define the behavior of an object.

    Here's the standard notation:

    ```
    +--------------------+
    | ClassName          |
    +--------------------+
    | - attribute1: Type |
    | + attribute2: Type |
    +--------------------+
    | + operation1()     |
    | - operation2()     |
    +--------------------+
    ```

    *   `+` denotes public visibility.
    *   `-` denotes private visibility.
    *   `#` denotes protected visibility.

2.  **Relationships:** How classes interact with each other.

    *   **Association:** A general relationship between classes. It indicates that objects of one class are connected to objects of another. It's often represented by a solid line.

        *   **Aggregation:** A "has-a" relationship, where one class is part of another, but can exist independently. (e.g., A `Department` has `Employees`, but an `Employee` can exist without a `Department`). Represented by a hollow diamond.

        *   **Composition:** A stronger "owns-a" relationship, where the part cannot exist without the whole. (e.g., A `House` is composed of `Rooms`, and a `Room` cannot exist independently of a `House`). Represented by a filled diamond.

    *   **Inheritance (Generalization):** An "is-a" relationship, where one class (subclass or child) inherits properties and behaviors from another class (superclass or parent). Represented by a hollow arrowhead pointing to the parent class.

    *   **Dependency:** A weaker relationship where one class depends on another. A change in the dependent class might affect the class it depends on. Represented by a dashed arrow.

    *   **Realization:** Used to model the implementation of an interface. The realizing class provides the actual implementation for the operations defined in the interface. Represented by a dashed line with a hollow arrowhead pointing to the interface.

## Applying Class Diagrams: A Scenario

Let's model a simple online bookstore.

**System Components:**

*   **Customer:** Interacts with the system, places orders.
*   **Book:** Represents an item for sale, has title, author, ISBN, price.
*   **Order:** Represents a purchase made by a customer, contains a list of books.
*   **Payment:** Details related to how an order is paid for.

**Step-by-Step Application:**

1.  **Identify Core Classes:**
    *   `Customer`
    *   `Book`
    *   `Order`
    *   `Payment`

2.  **Define Attributes and Operations for Each Class:**

    *   `Customer`:
        *   Attributes: `customerId: int`, `name: String`, `email: String`
        *   Operations: `login()`, `logout()`, `viewOrderHistory()`

    *   `Book`:
        *   Attributes: `isbn: String`, `title: String`, `author: String`, `price: double`
        *   Operations: `getPrice()`

    *   `Order`:
        *   Attributes: `orderId: int`, `orderDate: Date`, `status: String`
        *   Operations: `addBook(book: Book)`, `removeBook(book: Book)`, `getTotalPrice()`

    *   `Payment`:
        *   Attributes: `paymentId: int`, `paymentMethod: String`, `amount: double`, `status: String`
        *   Operations: `processPayment()`

3.  **Determine Relationships:**

    *   A `Customer` can have multiple `Order`s. This is an association.
    *   An `Order` consists of one or more `Book`s. This is a composition (an Order "owns" its Books).
    *   An `Order` has a `Payment`. This could be an association or a composition, depending on whether a payment can exist independently of an order. Let's model it as an association for now.

4.  **Draw the Class Diagram:**

    ```
    +--------------------+       1..* +-----------------+       1..* +-----------+
    | Customer           |------------>| Order           |--------->| Book      |
    +--------------------+            +-----------------+          +-----------+
    | - customerId: int  |            | - orderId: int  |          | - isbn: String |
    | - name: String     |            | - orderDate: Date|          | - title: String|
    | - email: String    |            | - status: String|          | - author: String |
    +--------------------+            +-----------------+          | - price: double|
    | + login()          |            | + addBook(book: Book)|      +-----------+
    | + logout()         |            | + removeBook(book: Book)|    | + getPrice() |
    | + viewOrderHistory()|            | + getTotalPrice()|          +-----------+
    +--------------------+            +-----------------+
             |                                |
             | 1..*                           | 1
             |                                |
    +--------------------+       +-----------------+
    | Payment            |-------| Order           |
    +--------------------+       +-----------------+
    | - paymentId: int   |
    | - paymentMethod: String|
    | - amount: double   |
    | - status: String   |
    +--------------------+
    | + processPayment() |
    +--------------------+
    ```
    *Note: The diagram above is a simplified textual representation. In a real UML tool, you would use graphical elements.*

    Let's refine the relationships:

    *   `Customer` to `Order`: A `Customer` can have many `Order`s (1..*). An `Order` belongs to one `Customer` (1). This is a standard association.
    *   `Order` to `Book`: An `Order` is composed of `Book`s. The diamond is filled on the `Order` side. A book can exist without being in an order, but an order is made of books.
    *   `Order` to `Payment`: An `Order` has a `Payment`. Let's assume an order can have multiple payments (e.g., partial payments), so 1..* on the `Payment` side, and an order has one primary payment (1) for simplicity here.

    **Revised Relationship Notation Explanation:**

    *   `Customer` (1) -------- (0..*) `Order`: Customer has zero or many orders.
    *   `Order` (1) <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes>----- (1..*) `Book`: Order is composed of one or more books. The filled diamond is on the `Order` side.
    *   `Order` (1) -------- (1..*) `Payment`: Order has one or more payments.

## Common Mistakes to Avoid

*   **Over-complication:** Don't try to model every single detail initially. Focus on the core structural elements.
*   **Incorrect Relationships:** Confusing aggregation with composition, or inheritance with association. Remember "is-a" for inheritance, "has-a" for aggregation/composition.
*   **Missing Visibility:** Forgetting to specify public (`+`), private (`-`), or protected (`#`) for attributes and operations. This is crucial for understanding encapsulation.
*   **Lack of Multiplicity:** Not defining how many instances of one class can relate to an instance of another (e.g., 1, 0..1, 1..*, *).

By applying UML Class Diagrams, you gain a clear, static view of your system's building blocks, making it easier to design, communicate, and maintain your software.

## Supports

- [[skills/computing/software-engineering/software-practices/uml-modeling/microskills/uml-diagram-application-for-structure|UML Diagram Application for Structure]]
