---
type: "medium"
title: "Selecting the Right Refactoring Technique"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/refactoring/microskills/appropriate-refactoring-technique-selection|Appropriate Refactoring Technique Selection]]"
---
# Selecting the Right Refactoring Technique

Refactoring is about improving the internal structure of code without changing its external behavior. A crucial part of this process is knowing *which* refactoring technique to apply to a specific code issue. This skill focuses on analyzing a problem and selecting the most effective and appropriate refactoring method.

## Why Technique Selection Matters

Applying the wrong refactoring technique can be like using a hammer to screw in a nail – it might get the job done, but it's inefficient, prone to errors, and can even damage the surrounding code. Choosing the right technique ensures:

*   **Efficiency:** Addresses the root cause of the problem directly.
*   **Maintainability:** Leads to cleaner, more understandable, and easier-to-modify code.
*   **Reduced Risk:** Minimizes the chances of introducing bugs.

## Common Code Smells and Corresponding Refactoring Techniques

Code smells are indicators of potential problems in your code. Recognizing these smells is the first step to selecting the right refactoring technique.

Here’s a table outlining common code smells and suitable refactoring techniques. This is not exhaustive, but covers frequently encountered issues.

| Code Smell                  | Description                                                                                                  | Potential Refactoring Techniques                                                                                                                                           | When to Use                                                                                                                                    |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Long Method**             | A method that has grown too long, making it hard to understand and maintain.                                 | Extract Method, Replace Temp with Query, Introduce Parameter Object, Decompose Conditional.                                                                                  | When a method performs multiple distinct tasks, has too many lines of code, or contains deeply nested logic.                                      |
| **Large Class**             | A class that tries to do too much, accumulating too many responsibilities.                                   | Extract Class, Extract Subclass, Extract Superclass, Move Method, Move Field.                                                                                              | When a class has many instance variables, many methods, or is difficult to understand due to its breadth of functionality.                          |
| **Duplicate Code**          | Identical or very similar code blocks appearing in multiple places.                                          | Extract Method, Pull Up Method, Form Template Method, Introduce Parameter Object.                                                                                          | Whenever you find the same logic repeated. This is a prime candidate for DRY (Don't Repeat Yourself) violations.                              |
| **Feature Envy**            | A method that seems more interested in the data of another class than its own.                               | Move Method, Extract Method (and then move it), Replace Method with Method Call.                                                                                           | When a method in one class frequently accesses data or calls methods of another class.                                                         |
| **Data Clumps**             | Sets of data items (like parameters) that frequently appear together in various places.                      | Introduce Parameter Object, Extract Class, Form Parameter Class.                                                                                                           | When you notice groups of variables that are passed around together consistently.                                                              |
| **Primitive Obsession**     | Over-reliance on primitive data types (like strings, integers) instead of creating small classes for domain concepts. | Replace Data Value with Object, Replace Type Code with Class/Subclasses/State/Strategy.                                                                                    | When you see primitives being used to represent concepts that deserve their own type (e.g., `String` for an email address, `int` for a money amount). |
| **Switch Statements**       | Complex `switch` statements that are often found within methods or used for type checking.                   | Replace Conditional with Polymorphism, Replace Type Code with State/Strategy, Replace Conditional with Command.                                                              | When a `switch` statement duplicates logic based on a type code or condition, and you want to add new types without modifying existing code.    |

## Analyzing and Selecting: A Practical Approach

When faced with a piece of code that needs refactoring, follow these steps to select the appropriate technique:

1.  **Identify the Code Smell:** What specific problem does this code exhibit? Is it too long? Is logic repeated? Is a class doing too much? Use your understanding of common code smells.
2.  **Understand the Goal:** What do you want to achieve with the refactoring? Do you want to make a method shorter? Reduce duplication? Improve class cohesion?
3.  **Brainstorm Potential Techniques:** Based on the smell and your goal, list possible refactoring techniques.
4.  **Evaluate Each Technique:** Consider the impact of each technique:
    *   **Effort:** How much work is involved?
    *   **Risk:** How likely is it to introduce bugs?
    *   **Benefit:** How much will it improve the code's readability, maintainability, and design?
    *   **Dependencies:** Will this refactoring affect other parts of the system?
5.  **Choose the Best Fit:** Select the technique that offers the best balance of benefits versus effort and risk. Often, a small refactoring might be a stepping stone to a larger one.

### Worked Example: Long Method and Duplicate Code

Let's say you have the following Java-like pseudocode:

```java
public void processOrder(Order order) {
    // Validate order
    if (order.getItems().isEmpty()) {
        throw new IllegalArgumentException("Order cannot be empty.");
    }
    for (Item item : order.getItems()) {
        if (item.getQuantity() <= 0) {
            throw new IllegalArgumentException("Item quantity must be positive.");
        }
    }

    // Calculate total price
    double totalPrice = 0;
    for (Item item : order.getItems()) {
        totalPrice += item.getPrice() * item.getQuantity();
    }
    // Apply discount if applicable
    if (order.getCustomer().isPremium()) {
        totalPrice *= 0.9; // 10% discount
    }

    // Apply taxes
    double taxRate = getTaxRate(order.getShippingAddress());
    double taxAmount = totalPrice * taxRate;
    double finalPrice = totalPrice + taxAmount;

    // Update inventory
    for (Item item : order.getItems()) {
        Inventory.decreaseStock(item.getProductId(), item.getQuantity());
    }

    // Log order details
    System.out.println("Order processed: " + order.getId() + ", Final Price: " + finalPrice);
}
```

**Analysis:**

1.  **Code Smells:**
    *   **Long Method:** The `processOrder` method is doing a lot: validation, price calculation, discount, tax calculation, inventory update, and logging.
    *   **Duplicate Code:** The loop `for (Item item : order.getItems())` appears multiple times.

2.  **Goal:** Make the `processOrder` method shorter, more readable, and reduce duplication.

3.  **Brainstorming Techniques:**
    *   For Long Method: `Extract Method` seems like a good candidate for different logical blocks.
    *   For Duplicate Code: `Extract Method` can also help here by creating a reusable piece of logic.

4.  **Evaluation & Selection:**

    *   **Validation Block:** The validation logic can be extracted into a `validateOrder` method. This makes the main method cleaner and isolates validation concerns.
    *   **Price Calculation Block:** The loop calculating `totalPrice` and applying the discount can be extracted into a `calculateTotalPrice` method. This also addresses the duplicate loop issue.
    *   **Inventory Update Block:** The inventory update loop can be extracted into an `updateInventory` method. This again addresses the duplicate loop.

    `Extract Method` is a direct and effective solution for both smells identified. It will significantly break down the `processOrder` method into smaller, more manageable units, and eliminate the repeated loops.

**Refactored Pseudocode (Illustrative):**

```java
public void processOrder(Order order) {
    validateOrder(order); // Extracted method
    double totalPrice = calculateTotalPrice(order); // Extracted method
    double finalPrice = applyTaxes(totalPrice, order); // Extracted method
    updateInventory(order); // Extracted method
    logOrder(order, finalPrice); // Extracted method
}

private void validateOrder(Order order) {
    if (order.getItems().isEmpty()) {
        throw new IllegalArgumentException("Order cannot be empty.");
    }
    for (Item item : order.getItems()) {
        if (item.getQuantity() <= 0) {
            throw new IllegalArgumentException("Item quantity must be positive.");
        }
    }
}

private double calculateTotalPrice(Order order) {
    double totalPrice = 0;
    for (Item item : order.getItems()) { // This loop is now in one place
        totalPrice += item.getPrice() * item.getQuantity();
    }
    if (order.getCustomer().isPremium()) {
        totalPrice *= 0.9; // 10% discount
    }
    return totalPrice;
}

private double applyTaxes(double subtotal, Order order) {
    double taxRate = getTaxRate(order.getShippingAddress());
    return subtotal + (subtotal * taxRate);
}

private void updateInventory(Order order) {
    for (Item item : order.getItems()) { // This loop is now in one place
        Inventory.decreaseStock(item.getProductId(), item.getQuantity());
    }
}

private void logOrder(Order order, double finalPrice) {
    System.out.println("Order processed: " + order.getId() + ", Final Price: " + finalPrice);
}
```

By analyzing the code for smells and understanding the desired outcome, we effectively selected and applied the `Extract Method` refactoring technique. This significantly improved the code's structure.

## Choosing Wisely

The art of refactoring lies not just in knowing many techniques, but in understanding when and why to apply them. Always consider the specific context of your code and the underlying problem you are trying to solve.

## Supports

- [[skills/programming/software-engineering/refactoring/microskills/appropriate-refactoring-technique-selection|Appropriate Refactoring Technique Selection]]
