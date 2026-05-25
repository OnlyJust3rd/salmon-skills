---
type: "medium"
title: "OOP Problem Solving: Modeling a Library System"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/programming/programming-paradigms/object-oriented-programming/microskills/oop-problem-solving|oop-problem-solving]]"
learning-time-in-minutes: 3
---
# OOP Problem Solving: Modeling a Library System

This lesson focuses on applying Object-Oriented Programming (OOP) principles to solve a common programming problem: modeling a library system. We'll leverage abstraction, encapsulation, inheritance, and polymorphism to create a robust and maintainable solution.

## The Problem: A Basic Library System

Imagine you need to build a system for a library. This system should manage books and library members.

Key requirements:

*   **Books:** Each book has a title, author, and a unique ISBN. It can also have a status (e.g., "available", "borrowed").
*   **Members:** Each member has a name and a unique member ID. They can borrow and return books.
*   **Borrowing/Returning:** Members can borrow available books, and the book's status should update. Members can return borrowed books, and the book's status should revert to "available".

## Applying OOP Principles

Let's break down how we can use OOP to model this.

### 1. Abstraction: Identifying Core Concepts

Abstraction helps us focus on the essential features of an object, hiding unnecessary details. In our library system, the core concepts are "Book" and "Member".

We can think of a `Book` as an entity with properties like `title`, `author`, and `isbn`, and actions like `borrow()` and `return_book()`.
Similarly, a `Member` has `name` and `member_id`, and can perform actions like `borrow_book(book)` and `return_book(book)`.

### 2. Encapsulation: Bundling Data and Behavior

Encapsulation means grouping data (attributes) and the methods (behaviors) that operate on that data within a single unit (a class). This protects the data from outside interference and ensures data integrity.

Let's consider the `Book` class. Its attributes (`title`, `author`, `isbn`, `status`) should be managed internally by the `Book` object itself. Methods like `borrow()` and `return_book()` will directly manipulate the `status` attribute.

Here's a pseudocode representation:

```pseudocode
class Book:
  attributes:
    title: String
    author: String
    isbn: String
    status: String // "available" or "borrowed"

  methods:
    constructor(title, author, isbn):
      self.title = title
      self.author = author
      self.isbn = isbn
      self.status = "available"

    borrow():
      if self.status is "available":
        self.status = "borrowed"
        return true // Success
      else:
        return false // Already borrowed

    return_book():
      if self.status is "borrowed":
        self.status = "available"
        return true // Success
      else:
        return false // Was not borrowed
```

Similarly, the `Member` class would encapsulate its `name` and `member_id`, along with methods to manage their interactions with books.

### 3. Inheritance: Building on Existing Structures

Inheritance allows us to create new classes (child classes) based on existing classes (parent classes), inheriting their properties and behaviors. This promotes code reusability.

While not strictly necessary for the *very basic* requirements, we could envision different types of library items. For instance, we might have `EBook` or `DVD` classes that inherit common properties from a base `LibraryItem` class.

Let's illustrate with a `LibraryItem` base class:

```pseudocode
class LibraryItem:
  attributes:
    title: String
    identifier: String // Could be ISBN, media ID, etc.
    status: String

  methods:
    constructor(title, identifier):
      self.title = title
      self.identifier = identifier
      self.status = "available"

    borrow():
      if self.status is "available":
        self.status = "borrowed"
        return true
      else:
        return false

    return_item():
      if self.status is "borrowed":
        self.status = "available"
        return true
      else:
        return false

class Book(LibraryItem):
  attributes:
    author: String

  methods:
    constructor(title, isbn, author):
      super(title, isbn) // Call parent constructor
      self.author = author

class EBook(LibraryItem):
  attributes:
    file_format: String

  methods:
    constructor(title, identifier, file_format):
      super(title, identifier)
      self.file_format = file_format
```

In this example, both `Book` and `EBook` inherit the core `title`, `identifier`, and `status` from `LibraryItem`, along with the `borrow()` and `return_item()` methods. They then add their specific attributes and potentially override or extend methods.

### 4. Polymorphism: Many Forms, One Interface

Polymorphism allows objects of different classes to be treated as objects of a common superclass. This enables us to write more flexible code that can work with various types of objects through a unified interface.

If we had a `Library` class that manages a collection of `LibraryItem` objects, polymorphism would allow us to iterate through this collection and call a `borrow()` method on each item, regardless of whether it's a `Book` or an `EBook`. The correct `borrow()` implementation for that specific type would be executed.

Consider a `Library` class:

```pseudocode
class Library:
  attributes:
    items: List<LibraryItem>

  methods:
    add_item(item: LibraryItem):
      self.items.append(item)

    find_item_by_title(title: String) -> LibraryItem:
      for item in self.items:
        if item.title == title:
          return item
      return null

    handle_borrow(item_title: String):
      item = self.find_item_by_title(item_title)
      if item:
        if item.borrow():
          print(f"'{item.title}' has been borrowed.")
        else:
          print(f"'{item.title}' is already borrowed.")
      else:
        print(f"Item '{item_title}' not found.")

    handle_return(item_title: String):
      item = self.find_item_by_title(item_title)
      if item:
        if item.return_item():
          print(f"'{item.title}' has been returned.")
        else:
          print(f"'{item.title}' was not borrowed.")
      else:
        print(f"Item '{item_title}' not found.")

# Example Usage:
my_library = Library()
book1 = Book("The Hitchhiker's Guide to the Galaxy", "978-0345391803", "Douglas Adams")
ebook1 = EBook("Dune", "EBOOK-001", "EPUB")

my_library.add_item(book1)
my_library.add_item(ebook1)

my_library.handle_borrow("The Hitchhiker's Guide to the Galaxy") # Calls Book.borrow()
my_library.handle_borrow("Dune")                            # Calls EBook.borrow()
my_library.handle_return("The Hitchhiker's Guide to the Galaxy") # Calls Book.return_item()
```

Here, `my_library.handle_borrow()` doesn't need to know if it's dealing with a `Book` or an `EBook`. It simply calls `item.borrow()`, and polymorphism ensures the correct method is invoked.

## Worked Example: Implementing a Simple Library

Let's implement a simplified version in Python to see these principles in action.

```python
class LibraryItem:
    def __init__(self, title, identifier):
        self.title = title
        self.identifier = identifier
        self.status = "available"

    def borrow(self):
        if self.status == "available":
            self.status = "borrowed"
            return True
        return False

    def return_item(self):
        if self.status == "borrowed":
            self.status = "available"
            return True
        return False

    def __str__(self):
        return f"'{self.title}' (ID: {self.identifier}, Status: {self.status})"

class Book(LibraryItem):
    def __init__(self, title, isbn, author):
        super().__init__(title, isbn)
        self.author = author

    def __str__(self):
        return f"Book: {super().__str__()} by {self.author}"

class EBook(LibraryItem):
    def __init__(self, title, identifier, file_format):
        super().__init__(title, identifier)
        self.file_format = file_format

    def __str__(self):
        return f"EBook: {super().__str__()} (Format: {self.file_format})"

class Library:
    def __init__(self):
        self.items = {} # Using a dictionary for easier lookup by identifier

    def add_item(self, item):
        self.items[item.identifier] = item
        print(f"Added: {item}")

    def find_item(self, identifier):
        return self.items.get(identifier)

    def borrow_item(self, identifier):
        item = self.find_item(identifier)
        if item:
            if item.borrow():
                print(f"Successfully borrowed: {item.title}")
            else:
                print(f"'{item.title}' is already borrowed.")
        else:
            print(f"Item with ID {identifier} not found.")

    def return_item(self, identifier):
        item = self.find_item(identifier)
        if item:
            if item.return_item():
                print(f"Successfully returned: {item.title}")
            else:
                print(f"'{item.title}' was not borrowed.")
        else:
            print(f"Item with ID {identifier} not found.")

    def list_all_items(self):
        if not self.items:
            print("The library is empty.")
            return
        print("\n--- Library Catalog ---")
        for item in self.items.values():
            print(item)
        print("---------------------\n")

# --- Demonstration ---
my_library = Library()

# Create items
book1 = Book("1984", "978-0451524935", "George Orwell")
book2 = Book("Brave New World", "978-0060850524", "Aldous Huxley")
ebook1 = EBook("Foundation", "EBOOK-ASIMOV-1", "EPUB")

# Add items to the library
my_library.add_item(book1)
my_library.add_item(book2)
my_library.add_item(ebook1)

my_library.list_all_items()

# Borrow and return
my_library.borrow_item("978-0451524935") # Borrowing '1984'
my_library.borrow_item("978-0451524935") # Trying to borrow '1984' again
my_library.borrow_item("EBOOK-ASIMOV-1")  # Borrowing 'Foundation'

my_library.list_all_items()

my_library.return_item("978-0451524935") # Returning '1984'
my_library.return_item("978-0451524935") # Trying to return '1984' again (it's now available)
my_library.return_item("NON-EXISTENT-ID") # Trying to return a non-existent item

my_library.list_all_items()
```

This example demonstrates how abstraction (identifying `LibraryItem`, `Book`, `EBook`), encapsulation (data within classes), inheritance (`Book` and `EBook` inheriting from `LibraryItem`), and polymorphism (the `Library` class interacting with `LibraryItem` objects through a common interface) work together to create a structured solution for our library problem.

## Supports

- [[skills/computing/programming/programming-paradigms/object-oriented-programming/microskills/oop-problem-solving|OOP Problem Solving]]
