---
type: "medium"
title: "Designing Object Collaboration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/object-oriented-programming/microskills/object-interaction-design|object-interaction-design]]"
learning-time-in-minutes: 3
---
# Designing Object Collaboration

When we build software using object-oriented programming, our classes don't exist in isolation. They need to work together to achieve a larger goal. This is where object interaction design comes in – it's about structuring how instances of different classes collaborate, communicate, and depend on each other.

## The Core Idea: Objects as Actors

Think of objects as individual actors in a play. Each actor has their own role, responsibilities, and ways of interacting with other actors. The script of the play dictates how these interactions unfold. In OOP, your classes are the blueprints for these actors, and their methods are their actions. The way you design these methods and how objects call each other's methods forms the interaction design.

### Why is Interaction Design Important?

*   **Modularity:** Well-designed interactions make it easier to understand, modify, and reuse individual classes.
*   **Maintainability:** When objects collaborate in a clear and predictable way, debugging and fixing issues becomes much simpler.
*   **Scalability:** Efficient interactions are crucial for building applications that can handle growing complexity and user loads.
*   **Readability:** Code that clearly shows how objects interact is easier for other developers (and your future self) to understand.

## Common Interaction Patterns

Let's look at some fundamental ways objects collaborate.

### 1. Message Passing (Method Calls)

This is the most basic form of interaction. One object sends a "message" (invokes a method) to another object, often passing data along with the message.

**Example Scenario:** A `Customer` object needs to place an `Order`. The `Customer` object will interact with an `OrderService` object.

```python
class Order:
    def __init__(self, customer_name, items):
        self.customer_name = customer_name
        self.items = items
        self.status = "Pending"

    def update_status(self, new_status):
        self.status = new_status
        print(f"Order for {self.customer_name} status updated to: {self.status}")

class OrderService:
    def create_order(self, customer_name, items):
        new_order = Order(customer_name, items)
        print(f"Order created for {customer_name} with items: {', '.join(items)}")
        return new_order

    def process_payment(self, order):
        print(f"Processing payment for order {order.customer_name}...")
        # Simulate payment processing
        order.update_status("Paid")

# --- How they interact ---
customer_name = "Alice"
order_items = ["Laptop", "Mouse"]

order_service = OrderService()
new_order = order_service.create_order(customer_name, order_items)
order_service.process_payment(new_order)
```

In this example, `OrderService` `create_order` method creates an `Order` object. Then, `OrderService` `process_payment` method calls the `update_status` method on the `Order` object. This is a direct message passing interaction.

### 2. Dependency Injection

Dependency injection is a design pattern where an object receives its dependencies (other objects it needs to function) from an external source, rather than creating them itself. This promotes loose coupling.

**Example Scenario:** A `SalesReportGenerator` needs a `DatabaseConnection` to fetch sales data. Instead of `SalesReportGenerator` creating its own `DatabaseConnection`, it receives one when it's created.

```python
class DatabaseConnection:
    def __init__(self, connection_string):
        self.connection_string = connection_string
        print(f"Database connected using: {self.connection_string}")

    def fetch_sales_data(self):
        print("Fetching sales data from database...")
        return ["Product A: 100 units", "Product B: 150 units"]

class SalesReportGenerator:
    # Dependency is injected through the constructor
    def __init__(self, db_connection):
        self.db_connection = db_connection

    def generate_report(self):
        sales_data = self.db_connection.fetch_sales_data()
        print("--- Sales Report ---")
        for item in sales_data:
            print(item)
        print("--------------------")

# --- How they interact (using Dependency Injection) ---
# External code provides the dependency
connection = DatabaseConnection("my_sql_server_url")
report_generator = SalesReportGenerator(connection) # 'connection' is injected

report_generator.generate_report()
```

The `SalesReportGenerator` doesn't know *how* `DatabaseConnection` is created or configured. It only knows it needs *a* `DatabaseConnection` object that has a `fetch_sales_data` method. This makes `SalesReportGenerator` easier to test with mock database connections.

### 3. Observer Pattern (Publish/Subscribe)

This pattern allows one object (the "subject" or "publisher") to notify other objects (the "observers" or "subscribers") of changes in its state. Observers don't need to know about each other, and the subject doesn't need to know about specific observers, only that they exist and implement a certain interface.

**Example Scenario:** A `StockTicker` publishes price changes, and `StockDisplay` and `AlertSystem` objects subscribe to these changes to update themselves.

```python
class StockTicker:
    def __init__(self):
        self._price = 0
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def detach(self, observer):
        self._observers.remove(observer)

    def _notify_observers(self):
        for observer in self._observers:
            observer.update(self._price)

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, new_price):
        if self._price != new_price:
            self._price = new_price
            self._notify_observers()

class StockDisplay:
    def update(self, price):
        print(f"StockDisplay: Price updated to ${price:.2f}")

class AlertSystem:
    def update(self, price):
        if price > 100:
            print(f"AlertSystem: HIGH PRICE ALERT! Current price is ${price:.2f}")

# --- How they interact ---
ticker = StockTicker()
display = StockDisplay()
alert = AlertSystem()

ticker.attach(display)
ticker.attach(alert)

print("Setting price to $95.00")
ticker.price = 95.00

print("\nSetting price to $105.50")
ticker.price = 105.50

print("\nDetaching StockDisplay")
ticker.detach(display)

print("\nSetting price to $110.00")
ticker.price = 110.00
```

Here, `StockTicker` doesn't directly tell `StockDisplay` or `AlertSystem` what to do. It just announces that its price has changed, and any registered observers react accordingly.

## Structuring Your Interactions

When designing how objects collaborate, consider these questions:

*   **Who needs to know what?** Identify the information flow.
*   **What are the responsibilities?** Ensure objects only do what they're supposed to.
*   **How coupled should they be?** Loose coupling (like with dependency injection or observer pattern) is often preferred for flexibility.
*   **What are the failure points?** If one object fails, how does it affect others?

By thoughtfully designing these interactions, you'll build more robust and maintainable object-oriented systems.

## Supports

- [[skills/computing/software-engineering/software-practices/object-oriented-programming/microskills/object-interaction-design|Object interaction design]]
