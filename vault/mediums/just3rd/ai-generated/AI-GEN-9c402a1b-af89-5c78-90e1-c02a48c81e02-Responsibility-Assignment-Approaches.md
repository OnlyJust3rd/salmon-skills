---
type: "medium"
title: "Analyzing Responsibility Assignment Approaches"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/object-oriented-design/microskills/responsibility-assignment-approaches|responsibility-assignment-approaches]]"
---
# Analyzing Responsibility Assignment Approaches

In Object-Oriented Design, a crucial aspect of building modular and maintainable systems is deciding *who does what*. This involves analyzing different approaches to assigning responsibilities to objects. As we analyze OO design approaches for a given software problem, understanding how to distribute responsibilities effectively is key. This lesson focuses specifically on exploring various methods for assigning these responsibilities.

## What are Responsibilities?

In the context of OO design, a responsibility refers to a **commitment or obligation** that an object has. This commitment can be:

*   **Knowing** something: like a `Customer` object knowing its name and address.
*   **Doing** something: like a `Calculator` object performing a calculation.

Effectively assigning these responsibilities leads to:

*   **High Cohesion**: Objects focus on a single, well-defined task.
*   **Low Coupling**: Objects are independent and changes in one don't heavily impact others.
*   **Increased Reusability**: Well-defined objects can be reused in different parts of the system or in other projects.
*   **Improved Maintainability**: Easier to understand, modify, and debug the system.

## Common Responsibility Assignment Approaches

Let's analyze some common approaches used to decide where to place responsibilities.

### 1. GRASP (General Principles for Assigning Responsibility)

GRASP provides a set of core principles to guide responsibility assignment. While a full dive into GRASP is extensive, we'll focus on a few key patterns relevant to this microskill.

*   **Information Expert**: Assign a responsibility to the class that has the information needed to fulfill it. This often means placing data and the methods that operate on that data within the same class.

    *   **Scenario**: Determining a customer's total order amount. The `Order` class likely holds the list of `OrderItem`s and their prices. Therefore, the `Order` class is the Information Expert for calculating its total amount.

*   **Creator**: Assign the responsibility of creating objects to another object. A common heuristic is that the class responsible for *knowing about* or *managing* a set of objects should also be responsible for creating them.

    *   **Scenario**: An `Order` needs `OrderItem`s. The `Order` class is a good candidate to create `OrderItem` objects, as it knows when a new item is added.

*   **Controller**: Assign responsibilities for handling system events or input to a class that represents the overall system or a subsystem. These are often "manager" or "handler" classes.

    *   **Scenario**: Processing a customer's request to place an order. A `OrderController` or `OrderService` class might handle the sequence of operations: validating the order, creating an `Order` object, adding `OrderItem`s, and saving it.

### 2. Design Patterns (as Guides for Responsibility Assignment)

Many established design patterns inherently guide responsibility assignment. Analyzing patterns helps understand how responsibilities are distributed in common scenarios.

*   **The Single Responsibility Principle (SRP) - Part of SOLID**: This is a fundamental principle. It states that a class should have only one reason to change. While not a "pattern" in the same vein as Gang of Four patterns, it's a critical heuristic.

    *   **How it guides**: If a class starts accumulating responsibilities that would require changes for different reasons (e.g., a `User` class handling authentication, profile management, *and* data persistence), it violates SRP. We then analyze how to split these distinct responsibilities into separate classes.

*   **Strategy Pattern**: This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Responsibilities for *how* something is done are extracted into separate "Strategy" objects.

    *   **Scenario**: Applying different discount rules to an order. We can have a `DiscountStrategy` interface and concrete implementations like `PercentageDiscount`, `FixedDiscount`, and `BuyOneGetOneDiscount`. The `Order` class would then delegate the responsibility of applying a discount to an instance of a chosen `DiscountStrategy`.

*   **Observer Pattern**: This pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. Responsibilities for reacting to state changes are delegated to "Observer" objects.

    *   **Scenario**: A `StockPrice` object (the subject) notifies multiple `Investor` objects (the observers) when its price changes. The responsibility of reacting to the price change (e.g., buying or selling) is assigned to the `Investor` objects.

### 3. Pure Fabrication

Sometimes, it's beneficial to create a "god object" or a class that doesn't correspond to a real-world entity but is designed to hold together highly coupled responsibilities or orchestrate interactions. These are called "Pure Fabrication" classes in GRASP. They exist to benefit the design, not to model a domain concept directly.

*   **Scenario**: A `DatabaseManager` class that handles all database interactions for various parts of the application. While not a real-world "thing," it centralizes database logic, improving organization. Another example is a `ReportGenerator` that pulls data from multiple sources and formats it.

## Analyzing a Problem: Example

Let's consider a simple e-commerce scenario: managing products, shopping carts, and checkout.

**Problem:** Design classes to handle adding items to a cart, calculating the total price, and applying discounts.

**Analysis & Responsibility Assignment:**

1.  **Products**: We need a `Product` class to represent individual items.
    *   **Responsibilities**: `productId`, `name`, `price`, `description`.

2.  **Shopping Cart**: We need a way to group selected products.
    *   **Responsibility**: Hold a collection of `CartItem`s.
    *   **Creator**: The `ShoppingCart` class should be responsible for creating its `CartItem`s when a product is added.
    *   **Information Expert**: The `ShoppingCart` is an expert for calculating its total price, as it contains all the `CartItem`s.

3.  **Cart Items**: An item in the cart might need to track quantity.
    *   **Responsibilities**: `product` (a reference to a `Product`), `quantity`.
    *   **Information Expert**: A `CartItem` is an expert for calculating its subtotal (`price * quantity`).

4.  **Discounts**: We need to apply discounts. This is a good candidate for the **Strategy Pattern**.
    *   **Responsibility**: Define a generic `DiscountStrategy` interface with a `applyDiscount(cart)` method.
    *   Create concrete strategies like `PercentageDiscountStrategy` and `FixedAmountDiscountStrategy`.
    *   The `ShoppingCart` can hold a reference to a `DiscountStrategy` and delegate the responsibility of calculating the final discounted total to it.

5.  **Checkout Process**: How is the order finalized?
    *   **Controller**: A `CheckoutController` or `OrderService` could manage the process: taking the `ShoppingCart`, applying the selected `DiscountStrategy`, creating an `Order` object, and perhaps persisting it.

By analyzing these pieces and applying principles like Information Expert and Creator, and considering patterns like Strategy, we can effectively assign responsibilities to create a well-structured system.

## Mistakes to Avoid

*   **God Objects**: Assigning too many unrelated responsibilities to a single class. This leads to high coupling and low cohesion, making the class hard to manage.
*   **Data Holders without Behavior**: Classes that only hold data but don't have any methods to operate on that data. Their associated behavior often gets scattered across other classes.
*   **Overly Lazy or Creative Classes**: Classes that do too little (Lazy) or are responsible for creating too many other objects without good reason (Over-Creative).
*   **Violating SRP**: Having a class with multiple reasons to change.

Analyzing responsibility assignment is an iterative process. As you design, you'll naturally refine where responsibilities should live based on the principles and patterns you employ. The goal is always to create clear, cohesive, and loosely coupled components.

## Supports

- [[skills/programming/software-engineering/object-oriented-design/microskills/responsibility-assignment-approaches|Responsibility Assignment Approaches]]
