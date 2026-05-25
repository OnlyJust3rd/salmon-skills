---
type: "medium"
title: "Mapping Design Patterns to Problems"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/software-design/design-patterns/microskills/design-pattern-problem-solution-mapping|design-pattern-problem-solution-mapping]]"
learning-time-in-minutes: 6
---
# Mapping Design Patterns to Problems

In software development, we often encounter similar design challenges repeatedly. Design patterns offer proven, reusable solutions to these common problems. This lesson focuses on understanding **how** specific design patterns map to particular problems they solve.

## Why Do We Need Patterns?

Imagine building a house. You wouldn't reinvent the wheel for every door hinge or window frame. Instead, you'd use established techniques and components that are known to work well. Design patterns are like those established techniques for software. They help us:

*   **Solve recurring problems:** Instead of solving the same puzzle over and over, we can use a pre-built solution.
*   **Improve code quality:** Patterns lead to more maintainable, flexible, and understandable code.
*   **Enhance communication:** Developers familiar with patterns can communicate solutions more effectively using established terminology.

## Identifying Design Problems

Before we can map a pattern to a problem, we need to recognize the problem itself. Common software design problems often revolve around:

*   **Object creation:** How do we create objects in a flexible and controlled way, especially when the exact type or number of objects isn't known at compile time?
*   **Object composition and relationships:** How do we define relationships between objects so they can work together effectively without becoming tightly coupled?
*   **Object behavior and responsibility:** How do we assign responsibilities to objects and allow their behavior to change dynamically?

Let's look at a specific problem and see how a design pattern addresses it.

## Problem: How to Ensure Only One Instance of a Class Exists?

Consider a scenario where you need a single, shared resource in your application, like a database connection pool, a configuration manager, or a logger. If multiple independent parts of your application create their own instances of this resource, you could run into issues:

*   **Resource contention:** Multiple connections to a database could lead to performance problems or data corruption.
*   **Inconsistent state:** Different parts of the application might be using different configuration settings if each has its own manager.
*   **Wasted memory:** Creating multiple instances of a resource that only needs to exist once is inefficient.

This is a classic "single instance" problem. We need a mechanism to control the instantiation of a class and ensure that only one object of that class is ever created.

## The Solution: The Singleton Pattern

The **Singleton pattern** is designed precisely to address this problem. It guarantees that a class has only one instance and provides a global point of access to it.

Here's how it works conceptually:

1.  **Private Constructor:** The class's constructor is made private. This prevents other classes from directly creating instances of the Singleton class using the `new` keyword.
2.  **Static Instance Variable:** The class holds a private static variable that stores its single instance.
3.  **Public Static Method (e.g., `getInstance()`):** A public static method is provided to access the Singleton instance. This method checks if the instance has already been created. If not, it creates it and stores it in the static variable. If the instance already exists, it simply returns the existing one.

### Example Mapping: A Configuration Manager

Let's say you're building a web application and need a `ConfigurationManager` to load and provide application settings.

**Problem:** We need to ensure that all parts of the application access the *same* configuration settings. If each module created its own `ConfigurationManager`, they might load different settings, leading to unexpected behavior.

**Solution (Singleton Pattern):**

We can implement `ConfigurationManager` as a Singleton.

```java
public class ConfigurationManager {

    // 1. Private static variable to hold the single instance
    private static ConfigurationManager instance;

    // Other configuration-related fields (e.g., properties) would go here...
    private String databaseUrl;

    // 2. Private constructor to prevent external instantiation
    private ConfigurationManager() {
        // Load configuration settings from a file or environment variables here
        System.out.println("ConfigurationManager created. Loading settings...");
        this.databaseUrl = "jdbc:postgresql://localhost:5432/mydatabase"; // Example
    }

    // 3. Public static method to get the instance
    public static ConfigurationManager getInstance() {
        if (instance == null) {
            // Double-checked locking for thread-safety (optional but good practice)
            synchronized (ConfigurationManager.class) {
                if (instance == null) {
                    instance = new ConfigurationManager();
                }
            }
        }
        return instance;
    }

    // Getter for configuration properties
    public String getDatabaseUrl() {
        return this.databaseUrl;
    }

    // Other methods to manage configurations...
}
```

**How the Pattern Solves the Problem:**

*   Any part of the application that needs configuration settings will call `ConfigurationManager.getInstance()`.
*   The first time `getInstance()` is called, a `ConfigurationManager` object is created and stored.
*   Subsequent calls to `getInstance()` will return the *exact same* `ConfigurationManager` object that was created initially.
*   This ensures that everyone is working with the same set of configuration data.

### Another Problem: How to Decouple Object Creation from Object Usage?

Imagine you have a system that needs to create different types of objects based on certain conditions. For example, a document editor might need to create different kinds of documents (e.g., `TextDocument`, `SpreadsheetDocument`, `PresentationDocument`). The code that *uses* these documents shouldn't need to know the exact details of how each document type is created. It should be able to ask for "a document" and receive the correct type.

## The Solution: The Factory Method Pattern

The **Factory Method pattern** provides an interface for creating objects, but lets subclasses decide which class to instantiate. It defers instantiation to subclasses.

**Problem:** We want to create objects without specifying their exact class. We want to make the system more flexible so that new types of objects can be added without modifying the existing creation code.

**Solution (Factory Method Pattern):**

1.  **Creator Class:** Declares the factory method, which returns an object of the `Product` type. It may also define a default implementation that returns a default `ConcreteProduct` object.
2.  **Concrete Creator Classes:** Override the factory method to return an instance of a specific `ConcreteProduct`.
3.  **Product Interface/Abstract Class:** Defines the interface of objects that the factory method creates.
4.  **Concrete Product Classes:** Implement the `Product` interface.

### Example Mapping: A Notification System

Let's say we are building a system that sends notifications through different channels: email, SMS, and push notifications.

**Problem:** The core notification logic should be able to send a notification without knowing *how* it's sent (email, SMS, etc.). We want to easily add new notification methods in the future (e.g., Slack, WhatsApp).

**Solution (Factory Method Pattern):**

We define a `Notification` interface and concrete implementations for `EmailNotification`, `SmsNotification`, and `PushNotification`. Then, we create a `NotificationService` that uses a factory method to create the specific notification object.

```java
// 3. Product Interface
interface Notification {
    void send(String message);
}

// 4. Concrete Product Classes
class EmailNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Sending Email: " + message);
    }
}

class SmsNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

class PushNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Sending Push Notification: " + message);
    }
}

// 1. Creator Class (Abstract or Base)
abstract class NotificationService {
    // The Factory Method
    protected abstract Notification createNotification();

    public void sendNotification(String message) {
        Notification notification = createNotification(); // Uses the factory method
        notification.send(message);
    }
}

// 2. Concrete Creator Classes
class EmailNotificationService extends NotificationService {
    @Override
    protected Notification createNotification() {
        return new EmailNotification(); // Factory creates an EmailNotification
    }
}

class SmsNotificationService extends NotificationService {
    @Override
    protected Notification createNotification() {
        return new SmsNotification(); // Factory creates an SmsNotification
    }
}

class PushNotificationService extends NotificationService {
    @Override
    protected Notification createNotification() {
        return new PushNotification(); // Factory creates a PushNotification
    }
}
```

**How the Pattern Solves the Problem:**

*   The `NotificationService` base class defines a `sendNotification` method that *uses* a `Notification` object.
*   The responsibility of *which* `Notification` object is created is delegated to the subclasses (`EmailNotificationService`, `SmsNotificationService`, etc.).
*   When you want to send an email notification, you'd use an `EmailNotificationService`. Its `createNotification()` method returns a new `EmailNotification` instance.
*   If you later want to add a `SlackNotification`, you'd create a `SlackNotificationService` subclass that overrides `createNotification()` to return a `SlackNotification` object. The core `sendNotification` logic in the base `NotificationService` remains unchanged. This adheres to the Open/Closed Principle.

By understanding the recurring problems in software design, we can effectively choose and apply design patterns to build more robust, flexible, and maintainable systems. The key is to recognize the problem first, and then identify the pattern that provides a well-tested solution.

## Supports

- [[skills/computing/software-engineering/software-design/design-patterns/microskills/design-pattern-problem-solution-mapping|Design Pattern Problem-Solution Mapping]]
