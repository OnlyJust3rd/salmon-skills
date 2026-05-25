---
type: "medium"
title: "Identifying Software Design Patterns"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-design/design-patterns/microskills/design-pattern-identification|design-pattern-identification]]"
learning-time-in-minutes: 5
---
# Identifying Software Design Patterns

Software design patterns are reusable solutions to commonly occurring problems within a given context in software design. Think of them as blueprints that developers can use to solve recurring design issues. They aren't finished code that can be directly plugged into your program, but rather templates or descriptions of how to solve a problem. Understanding and identifying these patterns is a fundamental skill in software engineering.

### What are Design Patterns?

At their core, design patterns represent proven, expert solutions to common software design challenges. They emerged from observing successful software systems and distilling recurring solutions into a generalized form. They help us communicate better about designs, leading to more robust, maintainable, and understandable code.

### Common Design Patterns

There are many design patterns, often categorized into three main types:

*   **Creational Patterns:** These deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
    *   **Factory Method:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    *   **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
    *   **Builder:** Separates the construction of a complex object from its representation so that the same construction process can create different representations.
    *   **Prototype:** Specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype.
    *   **Singleton:** Ensures a class only has one instance and provides a global point of access to it.

*   **Structural Patterns:** These are concerned with class and object composition. They explain how to assemble objects and classes into larger structures and how to realize relationships between them.
    *   **Adapter:** Converts the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
    *   **Bridge:** Decouples an abstraction from its implementation so that the two can vary independently.
    *   **Composite:** Composes objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
    *   **Decorator:** Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
    *   **Facade:** Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.
    *   **Flyweight:** Uses sharing to support large numbers of fine-grained objects efficiently.
    *   **Proxy:** Provides a surrogate or placeholder for another object to control access to it.

*   **Behavioral Patterns:** These are concerned with algorithms and the assignment of responsibilities between objects.
    *   **Chain of Responsibility:** Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
    *   **Command:** Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
    *   **Interpreter:** Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
    *   **Iterator:** Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
    *   **Mediator:** Defines an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
    *   **Memento:** Without violating encapsulation, captures and externalizes an object's internal state so that the object can be restored to this state later.
    *   **Observer:** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
    *   **State:** Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
    *   **Strategy:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
    *   **Template Method:** Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets a subclass redefine certain steps of an algorithm without changing the algorithm's structure.
    *   **Visitor:** Represents an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

### Practical Scenario

Imagine you're building a system for an online store.

*   You need to create different types of products (e.g., `Book`, `Electronics`, `Clothing`). Each product type might have slightly different creation processes. This scenario suggests a **Factory Method** or **Abstract Factory** pattern to manage product creation.
*   You have a `UserProfile` object, and you want to dynamically add features like `EmailNotification` and `SMSNotification` without creating numerous subclasses of `UserProfile`. The **Decorator** pattern would be a good fit here.
*   You need to implement a feature where users can undo actions (like adding an item to a cart). The **Command** pattern is ideal for encapsulating these actions.

### Practice Task

Examine the following code snippets and try to identify which design pattern, if any, is being used.

**Snippet 1:**

```python
class ShapeFactory:
    def get_shape(self, shape_type):
        if shape_type == "circle":
            return Circle()
        elif shape_type == "square":
            return Square()
        return None

class Circle:
    def draw(self):
        print("Drawing a circle")

class Square:
    def draw(self):
        print("Drawing a square")
```

**Snippet 2:**

```python
class Coffee:
    def get_cost(self):
        pass
    def get_description(self):
        pass

class SimpleCoffee(Coffee):
    def get_cost(self):
        return 5
    def get_description(self):
        return "Simple Coffee"

class Milk(Coffee):
    def __init__(self, decorated_coffee):
        self.decorated_coffee = decorated_coffee

    def get_cost(self):
        return self.decorated_coffee.get_cost() + 2

    def get_description(self):
        return self.decorated_coffee.get_description() + ", Milk"
```

### Self-Check Questions

1.  What is the primary purpose of a software design pattern?
2.  Name one creational design pattern and briefly describe its goal.
3.  Name one structural design pattern and briefly describe its goal.
4.  Name one behavioral design pattern and briefly describe its goal.
5.  In your own words, what problem does the Adapter pattern solve?

## Supports

- [[skills/computing/software-engineering/software-design/design-patterns/microskills/design-pattern-identification|Design Pattern Identification]]
