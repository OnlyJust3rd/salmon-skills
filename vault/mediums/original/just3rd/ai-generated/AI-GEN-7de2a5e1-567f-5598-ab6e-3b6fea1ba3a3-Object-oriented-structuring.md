---
type: "medium"
title: "Object-Oriented Structuring: Organizing Your Code"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/object-oriented-programming/microskills/object-oriented-structuring|object-oriented-structuring]]"
learning-time-in-minutes: 4
---
# Object-Oriented Structuring: Organizing Your Code

In Object-Oriented Programming (OOP), a core goal is to structure your code in a way that is understandable, maintainable, and reusable. This skill focuses on organizing your code for small programs using fundamental OOP principles. Think of it like building with LEGOs: instead of a giant, messy pile of plastic, you have distinct bricks that fit together to create something larger.

## What is Object-Oriented Structuring?

Object-oriented structuring means designing your program around "objects." An object is a self-contained unit that bundles together data (attributes) and the behaviors (methods) that operate on that data. This contrasts with procedural programming, where you might have separate data structures and functions that manipulate them.

For small-scale programs, the goal is to break down your problem into logical, interacting objects. This makes your code:

*   **Modular:** Each object has a specific responsibility.
*   **Understandable:** You can reason about the code by looking at individual objects and how they interact.
*   **Easier to modify:** Changes to one object are less likely to break unrelated parts of the program.

## Key Concepts for Structuring

To achieve good object-oriented structuring, we leverage a few key OOP concepts:

*   **Classes:** A blueprint or template for creating objects. It defines the attributes and methods that all objects of that type will have.
*   **Objects:** An instance of a class. It's the actual "thing" that holds data and can perform actions.
*   **Encapsulation:** Bundling data and methods within a class and controlling access to the data. This protects the data and ensures it's only manipulated through the object's defined methods.
*   **Abstraction:** Hiding complex implementation details and showing only the essential features. Users of an object don't need to know *how* it works, just *what* it can do.

## Applying Object-Oriented Structuring: A Simple Example

Let's imagine we're building a very simple program to manage a small library's book catalog. We want to represent books and their basic information.

### Step 1: Identify the Core "Things"

What are the main entities in our problem? In this case, it's clearly "Book."

### Step 2: Define the Attributes of Each "Thing"

What information does a "Book" need to store?
*   Title
*   Author
*   ISBN (International Standard Book Number)
*   Publication Year

### Step 3: Define the Behaviors of Each "Thing"

What can a "Book" *do* or what actions can be performed *on* it?
*   Display its details.
*   Perhaps check if it's overdue (though for this simple example, we won't implement that complexity yet).

### Step 4: Create a Class Blueprint

We can translate these into a `Book` class. Let's use Python for demonstration:

```python
class Book:
    def __init__(self, title, author, isbn, year):
        # Attributes (data)
        self.title = title
        self.author = author
        self.isbn = isbn
        self.year = year

    def display_details(self):
        # Behavior (method)
        print(f"Title: {self.title}")
        print(f"Author: {self.author}")
        print(f"ISBN: {self.isbn}")
        print(f"Year: {self.year}")

```

**Explanation:**

*   `class Book:` defines our blueprint.
*   `__init__(self, title, author, isbn, year):` is the constructor. It's a special method that runs when you create a new `Book` object. `self` refers to the object being created. We use it to assign the input values to the object's attributes (`self.title = title`, etc.).
*   `display_details(self):` is a method that can be called on any `Book` object to print its information.

### Step 5: Create Objects (Instances)

Now that we have the `Book` class, we can create individual book objects:

```python
# Creating instances of the Book class
book1 = Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "978-0345391803", 1979)
book2 = Book("Pride and Prejudice", "Jane Austen", "978-0141439518", 1813)
```

Here, `book1` and `book2` are separate `Book` objects, each with its own set of title, author, ISBN, and year.

### Step 6: Use the Objects

We can now call the methods on our objects:

```python
print("--- Details for Book 1 ---")
book1.display_details()

print("\n--- Details for Book 2 ---")
book2.display_details()
```

This would output:

```
--- Details for Book 1 ---
Title: The Hitchhiker's Guide to the Galaxy
Author: Douglas Adams
ISBN: 978-0345391803
Year: 1979

--- Details for Book 2 ---
Title: Pride and Prejudice
Author: Jane Austen
ISBN: 978-0141439518
Year: 1813
```

## Structuring Considerations for Small Programs

When you're just starting with OOP and building small programs, focus on these points:

1.  **Identify Nouns:** Look for the "things" or "entities" in your problem description. These often become your classes.
2.  **Identify Verbs/Actions:** What can these "things" do? What actions can be performed on them? These often become your methods.
3.  **Keep Classes Focused:** Each class should ideally have one primary responsibility. A `Book` class shouldn't also be responsible for managing the entire library's borrowing system. That would be a separate `Library` class.
4.  **Use Meaningful Names:** Class names (e.g., `Book`, `User`, `Account`) and method names (e.g., `calculate_total`, `save_data`, `display_profile`) should be clear and descriptive.

By applying these simple structuring principles, you'll create code that is much easier to understand and build upon, even as your programs grow slightly.

## Supports

- [[skills/computing/software-engineering/software-practices/object-oriented-programming/microskills/object-oriented-structuring|Object-oriented structuring]]
