---
type: "medium"
title: "Recognizing Code Smells"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/refactoring/microskills/code-smell-identification|code-smell-identification]]"
learning-time-in-minutes: 4
---
# Recognizing Code Smells

This lesson focuses on identifying "code smells," which are surface indicators in your code that hint at deeper problems. Recognizing these smells is the first step in knowing when and where to apply refactoring techniques to improve your code's design and maintainability.

## What are Code Smells?

Code smells are not bugs themselves; your code might still function correctly. Instead, they are characteristics that suggest a violation of fundamental design principles and can lead to problems down the line, such as difficulty in understanding, modifying, or extending the code. Think of them like a strange odor in your house – it doesn't mean the house is about to collapse, but it's a signal that something might be wrong and needs investigation.

## Common Code Smells to Identify

Here are some prevalent code smells you'll encounter. Being able to spot these will significantly aid in your refactoring efforts.

### 1. Duplicate Code

This is one of the most obvious smells. When you see the exact same block of code appearing in multiple places, it's a strong indicator of duplicated effort.

**Example:**

Imagine you have a function that validates user input for an email address in two different parts of your application: user registration and profile update.

```python
# In registration module
def validate_email_registration(email):
    if "@" not in email or "." not in email:
        return False
    # ... other validation logic
    return True

# In profile update module
def validate_email_profile(email):
    if "@" not in email or "." not in email:
        return False
    # ... other validation logic
    return True
```

If you need to change the validation logic, you'd have to remember to update it in both places, increasing the risk of errors and inconsistencies.

### 2. Long Method

A method or function that is excessively long and tries to do too many things is often a code smell. Such methods are hard to understand, debug, and reuse.

**Indicator:** If you find yourself scrolling extensively to read a single method, it's likely too long.

### 3. Large Class

Similar to a long method, a class that has too many responsibilities, instance variables, or methods can be a smell. Large classes are difficult to comprehend and test.

**Indicator:** A class that has a single-letter name or feels like a "god object" doing everything is a red flag.

### 4. Feature Envy

This smell occurs when a method in one class seems more interested in the data or behavior of another class than its own. It often means the method might belong in the other class.

**Example:**

Consider a `Order` class and a `Customer` class. If an `Order` method extensively accesses `Customer` object details to calculate something related to the customer, it might be feature envy.

```java
public class Order {
    private Customer customer;
    private List<Item> items;

    // ... other order details

    public double calculateTotalWithCustomerDiscount() {
        double subtotal = 0;
        for (Item item : items) {
            subtotal += item.getPrice();
        }
        // This calculation relies heavily on customer data,
        // potentially indicating feature envy.
        return subtotal * (1 - customer.getDiscountRate());
    }
}

public class Customer {
    private double discountRate;

    public double getDiscountRate() {
        return discountRate;
    }
    // ... other customer details
}
```

The `calculateTotalWithCustomerDiscount` method in `Order` is "envious" of `Customer`'s `discountRate`.

### 5. Primitive Obsession

This smell involves using primitive data types (like strings, integers, booleans) to represent concepts that could be better modeled as objects.

**Example:**

Using separate strings for a phone number, or separate integers for month, day, and year instead of a `Date` or `DateTime` object.

```javascript
// Using primitives
let phoneNumber = "123-456-7890";
let street = "123 Main St";
let city = "Anytown";
let zipCode = "12345";

// Better: using objects/classes
class PhoneNumber { /* ... */ }
class Address {
    constructor(street, city, zipCode) { /* ... */ }
}
```

Primitive obsession leads to duplicated validation logic and makes the code less expressive.

### 6. Comments (as a symptom)

While comments are essential for explaining complex logic, an excessive number of comments can sometimes be a smell. Often, code that needs many comments is unclear or poorly written, and refactoring to make the code self-explanatory is a better solution than commenting around bad code.

**Indicator:** If you find yourself writing comments like:

```python
# This function does X, Y, Z to achieve result A
# It's important to do this before that because of condition B
def complex_process():
    # ... complex code ...
    pass
```

This might be a sign that the `complex_process` method itself needs to be broken down or clarified.

### 7. Divergent Change

This smell occurs when a single class is likely to be changed in different ways for different reasons. For example, if you have a `Report` class that you modify when changing how sales reports are generated AND when changing how user activity reports are generated.

**Indicator:** A class that has multiple, unrelated reasons for modification.

### 8. Shotgun Surgery

The opposite of Divergent Change. This smell occurs when making one change requires making many small changes in many different classes.

**Indicator:** A change request that leads you to touch almost every file in your project.

## Practice Identifying Smells

The best way to get good at identifying code smells is through practice. As you write code and read others' code, consciously look for these patterns.

*   **Review your own code:** After completing a feature, reread your code. Does it feel clunky? Are there repeated sections? Are methods too long?
*   **Read open-source code:** Explore well-regarded open-source projects. Observe how experienced developers structure their code and how they avoid or refactor away smells.
*   **Pair programming:** Working with another developer provides a second set of eyes to spot smells you might miss.

By familiarizing yourself with these common code smells, you'll develop a stronger intuition for when and where your code can benefit from refactoring.

## Supports

- [[skills/computing/software-engineering/software-practices/refactoring/microskills/code-smell-identification|Code Smell Identification]]
