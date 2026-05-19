---
type: "medium"
title: "Improving Code Structure with Refactoring"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/refactoring/microskills/code-structure-improvement|Code Structure Improvement]]"
---
# Improving Code Structure with Refactoring

This lesson focuses on enhancing the structure of your implemented code without changing how it functions externally. We'll explore techniques to make your code more organized, readable, and maintainable.

## Why Improve Code Structure?

As codebases grow, they can become complex and difficult to understand. Poor structure can lead to:

*   **Increased bugs:** Hard-to-follow code makes it easier to introduce errors.
*   **Slow development:** Developers spend more time deciphering code than writing new features.
*   **Difficulty in maintenance:** Making changes or fixing issues becomes a daunting task.

Refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior. Improving code structure is a key part of this process.

## Core Idea: Enhancing Organization

Enhancing code structure involves making logical groupings of code, reducing complexity, and improving clarity. This doesn't mean rewriting everything, but rather making small, targeted improvements.

### Key Principles for Better Structure

1.  **Single Responsibility Principle (SRP):** Each module, class, or function should have only one reason to change. If a unit of code does too many things, it becomes hard to modify without affecting other unrelated functionalities.
2.  **Don't Repeat Yourself (DRY):** Avoid duplicating code. If you find yourself writing the same logic in multiple places, extract it into a reusable function or method.
3.  **High Cohesion, Low Coupling:**
    *   **High Cohesion:** Elements within a module should be closely related and work together to perform a single, well-defined task.
    *   **Low Coupling:** Modules should be as independent as possible. Changes in one module should have minimal impact on others.

## Practical Techniques for Structure Improvement

Here are some common refactoring techniques to improve code structure.

### 1. Extract Method/Function

This is one of the most fundamental and frequently used refactoring techniques. If a method or function is becoming too long or contains a distinct piece of logic, extract that logic into a new, well-named method or function.

**When to use:**

*   A long method or function.
*   A block of code that performs a specific, identifiable task.
*   Code that is duplicated within a method.

**Example (Python):**

Consider this initial code:

```python
def process_order(order_details):
    customer_name = order_details["customer_name"]
    items = order_details["items"]
    total_price = 0

    print(f"Processing order for {customer_name}...")

    # Calculate total price
    for item in items:
        item_price = item["price"] * item["quantity"]
        total_price += item_price
        print(f"  - Added {item['quantity']} x {item['name']} (Price: ${item_price:.2f})")

    # Apply discount if applicable
    if total_price > 100:
        discount = total_price * 0.10
        total_price -= discount
        print(f"  - Applied 10% discount: ${discount:.2f}")

    # Apply tax
    tax_rate = 0.08
    tax_amount = total_price * tax_rate
    final_price = total_price + tax_amount
    print(f"  - Tax (8%): ${tax_amount:.2f}")

    print(f"Final price: ${final_price:.2f}")
    return final_price
```

The `process_order` function is doing several things: extracting customer name, calculating total price, applying discounts, and applying tax. Let's extract these into separate methods.

**Refactored Code:**

```python
def calculate_total_price(items):
    total = 0
    for item in items:
        total += item["price"] * item["quantity"]
    return total

def apply_discount(price):
    if price > 100:
        discount = price * 0.10
        print(f"  - Applied 10% discount: ${discount:.2f}")
        return price - discount
    return price

def apply_tax(price):
    tax_rate = 0.08
    tax_amount = price * tax_rate
    print(f"  - Tax (8%): ${tax_amount:.2f}")
    return price + tax_amount

def process_order(order_details):
    customer_name = order_details["customer_name"]
    items = order_details["items"]

    print(f"Processing order for {customer_name}...")

    subtotal = calculate_total_price(items)
    print(f"  - Subtotal: ${subtotal:.2f}")

    price_after_discount = apply_discount(subtotal)
    final_price = apply_tax(price_after_discount)

    print(f"Final price: ${final_price:.2f}")
    return final_price
```

**How it works:**

*   We've created smaller, focused functions (`calculate_total_price`, `apply_discount`, `apply_tax`).
*   Each function does one thing.
*   The main `process_order` function is now shorter and easier to read, orchestrating calls to these smaller functions.

### 2. Consolidate Duplicate Conditional Fragments

If you have a block of code that is executed in multiple branches of a conditional statement, you can often move it outside the conditional.

**When to use:**

*   Identical or very similar code blocks appearing in `if`, `elif`, `else` or `switch` statements.

**Example (JavaScript):**

Consider this code:

```javascript
let customerType = "premium";
let orderAmount = 150;
let discount = 0;

if (customerType === "regular") {
    if (orderAmount > 100) {
        discount = orderAmount * 0.05;
        console.log("Applied 5% discount for regular customer.");
    }
} else if (customerType === "premium") {
    if (orderAmount > 100) {
        discount = orderAmount * 0.10;
        console.log("Applied 10% discount for premium customer.");
    }
}

let finalAmount = orderAmount - discount;
console.log("Final amount: " + finalAmount);
```

Notice the duplicate `if (orderAmount > 100)` check and the discount calculation logic.

**Refactored Code:**

```javascript
let customerType = "premium";
let orderAmount = 150;
let discountRate = 0;

if (customerType === "regular") {
    discountRate = 0.05;
    console.log("Applying 5% discount rate for regular customer.");
} else if (customerType === "premium") {
    discountRate = 0.10;
    console.log("Applying 10% discount rate for premium customer.");
}

let discount = 0;
if (orderAmount > 100) {
    discount = orderAmount * discountRate;
    console.log("Discount applied: " + discount);
}

let finalAmount = orderAmount - discount;
console.log("Final amount: " + finalAmount);
```

**How it works:**

*   We first determine the `discountRate` based on `customerType`.
*   Then, a single `if` statement checks `orderAmount` and applies the calculated discount.
*   This reduces redundancy and makes the code easier to manage.

### 3. Introduce Explaining Variable

Sometimes, a complex expression or calculation can make code hard to understand. Introduce a variable with a name that explains the purpose of the expression.

**When to use:**

*   Complex expressions in conditional statements or assignments.
*   Calculations that are not immediately obvious.

**Example (Java):**

```java
public void printProductInfo(Product product) {
    // Calculate total price including tax and shipping, then check if it's expensive
    if ((product.getPrice() * product.getQuantity() * 1.08 + product.getShippingCost()) > 500) {
        System.out.println("This is an expensive order.");
    } else {
        System.out.println("This is a standard order.");
    }
}
```

**Refactored Code:**

```java
public void printProductInfo(Product product) {
    double itemTotal = product.getPrice() * product.getQuantity();
    double priceWithTax = itemTotal * 1.08;
    double totalPriceWithShipping = priceWithTax + product.getShippingCost();
    boolean isExpensive = totalPriceWithShipping > 500;

    if (isExpensive) {
        System.out.println("This is an expensive order.");
    } else {
        System.out.println("This is a standard order.");
    }
}
```

**How it works:**

*   We've broken down the complex calculation into smaller, named variables (`itemTotal`, `priceWithTax`, `totalPriceWithShipping`).
*   The `isExpensive` boolean variable clearly states the condition being checked.
*   The `if` statement now reads much more naturally.

## Conclusion

Improving code structure is an ongoing process. By applying techniques like Extract Method, Consolidate Duplicate Conditional Fragments, and Introduce Explaining Variable, you can make your code more readable, maintainable, and less prone to errors. These small, iterative changes contribute significantly to the overall health of your codebase.

## Supports

- [[skills/programming/software-engineering/refactoring/microskills/code-structure-improvement|Code Structure Improvement]]
