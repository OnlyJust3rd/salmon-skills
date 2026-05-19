---
type: "medium"
title: "Crafting Classes: Essential Design Patterns"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/object-oriented-programming/microskills/class-design-patterns|Class design patterns]]"
---
# Crafting Classes: Essential Design Patterns

When we design software using Object-Oriented Programming (OOP), we're not just throwing code together. We're building structures, blueprints for our data and the actions that operate on it. This is where class design patterns come in. They are common, proven ways to organize your classes and their relationships, making your code more understandable, maintainable, and reusable.

## Why Use Design Patterns for Classes?

Think of design patterns as established solutions to recurring problems in class design. Instead of reinventing the wheel each time you need to model something, you can leverage these patterns. This leads to:

*   **Readability:** Others (and your future self) can quickly grasp the intent of your code.
*   **Maintainability:** When code is well-structured, fixing bugs and adding features becomes much easier.
*   **Reusability:** Well-designed classes can be reused across different parts of your project or even in new projects.

## Common Class Design Patterns

Let's explore a few fundamental patterns for structuring your classes.

### 1. The "Is-A" Relationship (Inheritance)

This is perhaps the most fundamental pattern, representing an **is-a** relationship between classes. A `Dog` *is a* `Animal`. A `Car` *is a* `Vehicle`.

**How it works:**

*   **Base Class (Superclass/Parent Class):** The general class that defines common attributes and behaviors.
*   **Derived Class (Subclass/Child Class):** A more specific class that inherits properties and behaviors from the base class. It can add its own unique features or modify inherited ones.

**Example (Pseudocode):**

```
// Base Class
class Animal {
    string name;
    void eat() {
        print(name + " is eating.");
    }
}

// Derived Class
class Dog : Animal { // Dog "is a" Animal
    string breed;
    void bark() {
        print("Woof!");
    }
}

// Usage
myDog = new Dog();
myDog.name = "Buddy";
myDog.breed = "Golden Retriever";
myDog.eat(); // Inherited from Animal
myDog.bark(); // Specific to Dog
```

**When to Use:** When you have a clear hierarchical relationship where one type of object is a specialized version of another.

**Mistake to Avoid:** Overusing inheritance. Not every relationship is an "is-a" relationship. Forcing inheritance where it doesn't fit can lead to rigid and complex code.

### 2. The "Has-A" Relationship (Composition/Aggregation)

This pattern represents a **has-a** relationship. A `Car` *has a* `Engine`. A `Computer` *has a* `CPU`. Unlike inheritance, where the derived class *is* the base class, here the object *contains* another object.

*   **Composition:** A strong "has-a" relationship. The contained object's lifecycle is tied to the container object. If the container is destroyed, the contained object is also destroyed.
*   **Aggregation:** A weaker "has-a" relationship. The contained object can exist independently of the container.

**Example (Pseudocode - Aggregation):**

```
class Engine {
    int horsepower;
    void start() {
        print("Engine starting.");
    }
}

class Car {
    string model;
    Engine carEngine; // Car "has a" Engine (Aggregation)

    Car(Engine engine) {
        carEngine = engine;
    }

    void drive() {
        carEngine.start(); // Using the Engine's functionality
        print(model + " is driving.");
    }
}

// Usage
myEngine = new Engine();
myEngine.horsepower = 200;

myCar = new Car(myEngine); // Passing the Engine to the Car
myCar.model = "Sedan";
myCar.drive();

// Notice that myEngine can still exist even if myCar is destroyed.
```

**Example (Pseudocode - Composition):**

```
class Wheel {
    int size;
    void rotate() {
        print("Wheel rotating.");
    }
}

class Car { // Car "has" Wheels (Composition)
    string model;
    Wheel[] wheels = new Wheel[4]; // A Car is made of 4 Wheels

    Car(string model) {
        this.model = model;
        for (int i = 0; i < 4; i++) {
            wheels[i] = new Wheel(); // Wheels are created and owned by the Car
            wheels[i].size = 17;
        }
    }

    void start() {
        print(model + " starting...");
        for (Wheel wheel : wheels) {
            wheel.rotate();
        }
    }
}

// Usage
myCar = new Car("SUV");
myCar.start();
// If myCar is destroyed, its wheels are also destroyed.
```

**When to Use:** When an object is composed of other objects, or when an object uses the services of another object. Composition is generally preferred over inheritance when the relationship isn't strictly "is-a."

**Mistake to Avoid:** Confusing aggregation and composition. Understand the lifecycle dependency. Also, avoid making every class a "manager" or "controller" class that just orchestrates other objects; ensure classes have well-defined responsibilities.

### 3. The Strategy Pattern

This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.

**How it works:**

*   **Context:** The class that uses the algorithm. It holds a reference to a Strategy object.
*   **Strategy Interface:** Declares a common interface for all supported algorithms.
*   **Concrete Strategies:** Implement the algorithm using the Strategy interface.

**Example (Pseudocode):**

```
// Strategy Interface
interface DiscountStrategy {
    double calculateDiscount(double amount);
}

// Concrete Strategies
class PercentageDiscount : DiscountStrategy {
    double percentage;
    PercentageDiscount(double percentage) { this.percentage = percentage; }
    double calculateDiscount(double amount) {
        return amount * (percentage / 100);
    }
}

class FixedDiscount : DiscountStrategy {
    double amount;
    FixedDiscount(double amount) { this.amount = amount; }
    double calculateDiscount(double amount) {
        return this.amount;
    }
}

// Context Class
class ShoppingCart {
    double totalAmount;
    DiscountStrategy discountStrategy;

    ShoppingCart(DiscountStrategy strategy) {
        this.discountStrategy = strategy;
    }

    void setDiscountStrategy(DiscountStrategy strategy) {
        this.discountStrategy = strategy;
    }

    double calculateFinalPrice() {
        double discount = discountStrategy.calculateDiscount(totalAmount);
        return totalAmount - discount;
    }
}

// Usage
cart = new ShoppingCart(new PercentageDiscount(10)); // 10% discount
cart.totalAmount = 100;
print("Final price with percentage discount: " + cart.calculateFinalPrice());

cart.setDiscountStrategy(new FixedDiscount(20)); // $20 fixed discount
print("Final price with fixed discount: " + cart.calculateFinalPrice());
```

**When to Use:** When you have multiple variations of an algorithm or behavior that you want to be able to switch out at runtime. This avoids large `if-else` or `switch` statements.

**Mistake to Avoid:** Creating too many small, single-purpose strategy classes that become hard to manage. Ensure the strategies represent distinct, meaningful variations.

## Applying Patterns in Your Design

As you design your classes, consider these questions:

*   Does my new class represent a specialized version of an existing class? (Inheritance)
*   Does my new class contain or use other objects to perform its tasks? (Composition/Aggregation)
*   Do I have multiple ways to perform a specific action that I need to select from? (Strategy)

By consciously applying these and other design patterns, you'll build more robust and elegant OOP solutions.

## Supports

- [[skills/programming/software-engineering/object-oriented-programming/microskills/class-design-patterns|Class design patterns]]
