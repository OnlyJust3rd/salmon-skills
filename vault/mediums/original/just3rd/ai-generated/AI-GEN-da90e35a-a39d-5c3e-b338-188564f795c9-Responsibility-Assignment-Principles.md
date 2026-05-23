---
type: "medium"
title: "Responsibility Assignment Principles in Object-Oriented Design"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/object-oriented-design/microskills/responsibility-assignment-principles|responsibility-assignment-principles]]"
learning-time-in-minutes: 5
---
# Responsibility Assignment Principles in Object-Oriented Design

In object-oriented design (OOD), effectively assigning responsibilities to objects is crucial for creating well-structured, maintainable, and understandable systems. This micro-skill focuses on understanding the core principles that guide how we decide what each object should do. Think of it as assigning jobs to your team members – you want each person to have clear, manageable tasks that contribute to the overall goal.

## What is Responsibility Assignment?

Responsibility assignment is the process of determining which objects will be responsible for performing which actions or holding which data. It's about defining the "what" and the "how" of your objects. A good assignment leads to:

*   **High Cohesion:** Objects focus on a single, well-defined purpose.
*   **Low Coupling:** Objects are independent and don't rely heavily on the internal details of other objects.
*   **Readability and Maintainability:** The system is easier to understand, modify, and extend.

## Key Responsibility Assignment Principles

Several principles help us make good decisions about assigning responsibilities. We'll cover a few of the most fundamental ones.

### 1. Principle of Single Responsibility (SRP)

**Definition:** A class should have only one reason to change.

This principle is a cornerstone of good OOD. It means that a class should be responsible for a single piece of functionality. If a class has multiple responsibilities, a change in one area might inadvertently affect another, leading to bugs and increased complexity.

**Example:**

Imagine a `User` class.

*   **Bad Design (Multiple Responsibilities):**
    *   Holds user data (name, email).
    *   Validates user input.
    *   Saves user data to the database.
    *   Sends welcome emails.

    If you need to change the database logic, you might accidentally break the email sending functionality, or vice-versa.

*   **Good Design (Single Responsibility):**
    *   `User` class: Holds user data.
    *   `UserValidator` class: Responsible for validating user data.
    *   `UserRepository` class: Responsible for saving and retrieving user data from the database.
    *   `EmailService` class: Responsible for sending emails.

Now, if the database structure changes, only `UserRepository` needs modification. If the email content needs updating, only `EmailService` is affected.

**Mnemonic:** "One Job, One Class."

### 2. Creator (GRASP - General Responsibility Assignment Software Patterns)

**Definition:** Assign the responsibility of creating an object to another object that "needs" it or to an object that aggregates it.

The Creator pattern is a guideline for deciding which class should be responsible for instantiating another class. It suggests that a class should create objects of another class if:

*   The creating object has **aggregate** or **composition** ("has-a") relationship with the created object.
*   The creating object **contains data** that the created object needs.
*   The creating object **uses** the created object.
*   The creating object **initializes** the created object with data.

**Example:**

Consider a `ShoppingCart` and a `CartItem`. A `ShoppingCart` "has-a" collection of `CartItem`s. It makes sense for the `ShoppingCart` to be responsible for creating new `CartItem`s that are added to it.

```java
class ShoppingCart {
    private List<CartItem> items = new ArrayList<>();

    public void addItem(Product product, int quantity) {
        // ShoppingCart creates the CartItem
        CartItem newItem = new CartItem(product, quantity);
        this.items.add(newItem);
    }

    // ... other methods
}

class CartItem {
    private Product product;
    private int quantity;

    // Constructor for CartItem
    public CartItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // ... getters
}
```

In this example, `ShoppingCart` is the creator of `CartItem` because it aggregates `CartItem`s.

### 3. Controller (GRASP)

**Definition:** Assign responsibility for receiving system events or commands to an object that represents the overall system or a subsystem, or to an object that handles a `UI` event.

Controllers are typically used to handle input and delegate tasks to other objects. They act as intermediaries, decoupling the user interface from the core domain logic. A common mistake is putting too much logic into the controller.

**Example:**

In a web application, a `UserController` might handle requests from the user interface for creating a new user. It would then delegate the actual creation and saving of the user to a `UserService` and a `UserRepository`.

```java
class UserController {
    private UserService userService; // Dependency injected

    public void handleCreateUserRequest(UserData data) {
        // Controller receives the request and data
        // Delegates the actual work to the service
        userService.createUser(data);
    }
}

class UserService {
    private UserRepository userRepository; // Dependency injected

    public void createUser(UserData data) {
        // ... business logic, validations ...
        User newUser = new User(data.getName(), data.getEmail());
        userRepository.save(newUser);
    }
}
```

Here, the `UserController`'s responsibility is to receive the request and pass it on. The `UserService` handles the business logic of creating the user.

### 4. High Cohesion

**Definition:** Keep related things together.

Classes should be designed so that their elements (attributes and methods) are closely related and work together to perform a single, well-defined task. High cohesion leads to classes that are easier to understand, reuse, and maintain. This principle is closely linked to SRP.

**Example:**

A `DateTime` class that handles date and time manipulations (e.g., adding days, formatting) exhibits high cohesion. A class that randomly mixes date manipulation, file I/O, and network requests would have low cohesion and be problematic.

### 5. Low Coupling

**Definition:** Reduce dependencies between objects.

Low coupling means that objects should have minimal knowledge of and reliance on each other. When objects are loosely coupled, changes in one class are less likely to necessitate changes in other classes. This makes the system more flexible and easier to evolve.

**Example:**

Using interfaces and dependency injection helps achieve low coupling. If `ClassA` depends on an `InterfaceB` instead of a concrete `ClassB`, you can swap out different implementations of `InterfaceB` without changing `ClassA`.

## Practice

When you are designing your classes, ask yourself:

*   What is the primary purpose of this class? (SRP)
*   Which class is best suited to create this other object? (Creator)
*   Who should handle this incoming event or command? (Controller)
*   Are all the responsibilities within this class related? (High Cohesion)
*   Does this class depend too much on the internal details of other classes? (Low Coupling)

By applying these principles, you'll build more robust and manageable object-oriented systems.

## Supports

- [[skills/computing/software-engineering/software-practices/object-oriented-design/microskills/responsibility-assignment-principles|Responsibility Assignment Principles]]
