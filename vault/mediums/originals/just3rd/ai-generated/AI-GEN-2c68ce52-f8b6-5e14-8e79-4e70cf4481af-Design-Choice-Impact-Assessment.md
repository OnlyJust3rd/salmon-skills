---
type: "medium"
title: "Assessing the Impact of Object-Oriented Design Choices"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/programming/programming-paradigms/object-oriented-programming/microskills/design-choice-impact-assessment|design-choice-impact-assessment]]"
learning-time-in-minutes: 5
---
# Assessing the Impact of Object-Oriented Design Choices

In object-oriented programming (OOP), the decisions we make during the design phase have a profound and lasting impact. This lesson focuses on *analyzing* how different OOP design choices affect the maintainability and extensibility of a system. We'll explore how to evaluate these impacts to make better design decisions.

## Why Design Choices Matter

When you build software, it's rarely a "build it and forget it" scenario. Systems evolve. Bugs need fixing, new features are added, and performance might need tuning. The way you structure your code using OOP principles directly influences how easy or difficult these future changes are.

*   **Maintainability:** How easy is it to understand, fix bugs in, or modify the existing code?
*   **Extensibility:** How easy is it to add new functionality or features without breaking existing ones?

Poor design choices can lead to what's often called "spaghetti code," where changes in one area unexpectedly break unrelated parts, making the system brittle and costly to maintain.

## Analyzing Common Design Choices

Let's look at a few common OOP design areas and how different choices can impact your system.

### 1. Encapsulation (Data Hiding)

Encapsulation is the bundling of data (attributes) and methods (behaviors) that operate on that data into a single unit, the object. It also involves controlling access to that data.

**Choice A: Strict Encapsulation (Private Attributes, Public Getters/Setters)**

```python
class Account:
    def __init__(self, initial_balance):
        self.__balance = initial_balance # Private attribute

    def get_balance(self):
        return self.__balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount}. New balance: {self.__balance}")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrew {amount}. New balance: {self.__balance}")
            return True
        else:
            print("Insufficient funds or invalid withdrawal amount.")
            return False

```

*   **Impact on Maintainability:** High. If you need to change how the `balance` is stored (e.g., add logging, currency conversion), you only need to modify the `get_balance`, `deposit`, and `withdraw` methods. The internal representation is hidden.
*   **Impact on Extensibility:** Moderate to High. If a new feature needs to interact with the balance, it uses the public methods, respecting the object's invariants.

**Choice B: Public Attributes (No or Minimal Encapsulation)**

```python
class Account:
    def __init__(self, initial_balance):
        self.balance = initial_balance # Public attribute

    # No explicit getters/setters, direct access
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited {amount}. New balance: {self.balance}")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance: {self.balance}")
            return True
        else:
            print("Insufficient funds or invalid withdrawal amount.")
            return False
```

*   **Impact on Maintainability:** Low. Any part of the system that accesses `account.balance` directly will break if you decide to change the internal representation. You'd have to find and modify *all* these direct accesses.
*   **Impact on Extensibility:** Moderate. While easy to access, it also means external code can modify the balance in ways that bypass intended logic (e.g., `account.balance = -10000`). This can lead to unexpected bugs.

### 2. Inheritance vs. Composition

These are two fundamental ways to achieve code reuse and model relationships between classes.

*   **Inheritance ("is-a" relationship):** A subclass inherits properties and behaviors from a superclass.
*   **Composition ("has-a" relationship):** A class contains an instance of another class, delegating tasks to it.

**Scenario: Modeling different types of vehicles.**

**Choice A: Inheritance**

```python
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start_engine(self):
        print("Engine started.")

class Car(Vehicle):
    def drive(self):
        print("Car is driving.")

class Motorcycle(Vehicle):
    def ride(self):
        print("Motorcycle is being ridden.")
```

*   **Impact on Maintainability:** Can be good for strong "is-a" relationships. Changes in `Vehicle` propagate to `Car` and `Motorcycle`. However, deep inheritance hierarchies can become complex and hard to follow.
*   **Impact on Extensibility:** Can be problematic if you need to add a capability that doesn't fit the "is-a" model. For example, what if a `Car` can also "fly" (like a flying car)? You'd need to add a `Flyable` capability, potentially leading to complex multiple inheritance or redesign.

**Choice B: Composition**

```python
class Engine:
    def start(self):
        print("Engine started.")

class Drivable:
    def drive(self):
        print("Driving.")

class Flyable:
    def fly(self):
        print("Flying.")

class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.engine = Engine()
        self.drivable = Drivable()

    def start_engine(self):
        self.engine.start()

    def drive(self):
        self.drivable.drive()

class FlyingCar(Car):
    def __init__(self, make, model):
        super().__init__(make, model)
        self.flyable = Flyable()

    def fly(self):
        self.flyable.fly()
```

*   **Impact on Maintainability:** Generally higher. Components are independent. If `Engine` changes, only code directly using `Engine`'s methods is affected.
*   **Impact on Extensibility:** Generally higher. To add "flying" capability to a `Car`, you can simply add a `Flyable` component to `FlyingCar` without altering the base `Car` class's fundamental structure or behavior. This adheres to the Open/Closed Principle (open for extension, closed for modification).

### 3. Coupling

Coupling refers to the degree of interdependence between software modules. Low coupling is desirable.

**Choice A: Loose Coupling (e.g., using interfaces, dependency injection)**

Imagine a `ReportGenerator` class that needs to fetch data.

```python
# Using an abstract base class/interface
from abc import ABC, abstractmethod

class DataFetcher(ABC):
    @abstractmethod
    def fetch_data(self):
        pass

class DatabaseFetcher(DataFetcher):
    def fetch_data(self):
        print("Fetching data from database...")
        return {"data": "from_db"}

class ApiFetcher(DataFetcher):
    def fetch_data(self):
        print("Fetching data from API...")
        return {"data": "from_api"}

class ReportGenerator:
    def __init__(self, data_fetcher: DataFetcher): # Dependency Injection
        self.data_fetcher = data_fetcher

    def generate_report(self):
        data = self.data_fetcher.fetch_data()
        print(f"Generating report with: {data}")

# Usage
db_fetcher = DatabaseFetcher()
report_with_db = ReportGenerator(db_fetcher)
report_with_db.generate_report()

api_fetcher = ApiFetcher()
report_with_api = ReportGenerator(api_fetcher)
report_with_api.generate_report()
```

*   **Impact on Maintainability:** High. The `ReportGenerator` doesn't care *how* data is fetched, only that it conforms to the `DataFetcher` interface. You can easily swap `DatabaseFetcher` for `ApiFetcher` or a new `CsvFetcher` without changing `ReportGenerator`.
*   **Impact on Extensibility:** High. Adding new data sources is simple; create a new class implementing `DataFetcher` and inject it.

**Choice B: Tight Coupling (e.g., direct instantiation, specific class dependencies)**

```python
class DatabaseFetcher: # No interface
    def fetch_data(self):
        print("Fetching data from database...")
        return {"data": "from_db"}

class ReportGenerator:
    def __init__(self):
        self.data_fetcher = DatabaseFetcher() # Direct instantiation

    def generate_report(self):
        data = self.data_fetcher.fetch_data()
        print(f"Generating report with: {data}")

# Usage
report = ReportGenerator()
report.generate_report()
```

*   **Impact on Maintainability:** Low. If `DatabaseFetcher` changes its method name or signature, `ReportGenerator` breaks. If you want to use a different data source, you might have to rewrite `ReportGenerator`.
*   **Impact on Extensibility:** Low. The `ReportGenerator` is hardcoded to use `DatabaseFetcher`. Adding alternative data sources requires modifying `ReportGenerator`.

## How to Analyze Design Choices

To effectively analyze the impact of your design choices, consider these questions:

*   **What is the primary responsibility of this class/module?** (Single Responsibility Principle)
*   **How easy would it be to change *how* this class does its job without affecting other classes?** (Encapsulation, Low Coupling)
*   **How easy would it be to add *new* behaviors or capabilities to this system?** (Composition, Open/Closed Principle)
*   **If this class were to be replaced by a similar one, how much effort would that take?** (Interfaces, Abstraction)
*   **Does this design create rigid dependencies that make modification difficult?** (Tight Coupling)
*   **Does this design allow for variation without altering core logic?** (Inheritance vs. Composition, Polymorphism)

By consistently asking these questions during design and review, you can anticipate and mitigate potential problems, leading to more robust, maintainable, and extensible object-oriented systems.

## Supports

- [[skills/computing/programming/programming-paradigms/object-oriented-programming/microskills/design-choice-impact-assessment|Design Choice Impact Assessment]]
