---
type: "medium"
title: "Inheritance Application"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/object-oriented-programming/microskills/inheritance-application|inheritance-application]]"
learning-time-in-minutes: 3
---
# Inheritance Application

Inheritance is a fundamental pillar of Object-Oriented Programming (OOP). It allows us to define a new class that inherits properties and behaviors from an existing class. This promotes code reusability and establishes a natural "is-a" relationship between classes.

### Core Idea: The "Is-A" Relationship

Think of real-world scenarios. A `Dog` *is a* `Animal`. A `Car` *is a* `Vehicle`. Inheritance models these relationships in code. The class that is inherited from is called the **parent class**, **base class**, or **superclass**. The class that inherits is called the **child class**, **derived class**, or **subclass**.

The child class automatically gains access to the public and protected members (attributes and methods) of its parent class. It can then:

*   **Extend** the parent class by adding new attributes or methods.
*   **Modify** (override) the behavior of parent class methods to suit its specific needs.

### Implementing Inheritance in Code

Let's illustrate with a simple example in Python.

We'll start by defining a `Vehicle` class, our parent class.

```python
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display_info(self):
        print(f"Brand: {self.brand}, Model: {self.model}")

    def move(self):
        print("This vehicle is moving.")
```

Now, let's create a `Car` class that inherits from `Vehicle`.

```python
class Car(Vehicle): # The parenthesis indicates inheritance from Vehicle
    def __init__(self, brand, model, num_doors):
        # Call the parent class's __init__ method
        super().__init__(brand, model)
        self.num_doors = num_doors

    def display_info(self): # Overriding the parent method
        super().display_info() # Calling the parent's display_info first
        print(f"Number of Doors: {self.num_doors}")

    def honk(self):
        print("Beep beep!")
```

#### How it Works:

1.  **`class Car(Vehicle):`**: This line declares that `Car` is a child class of `Vehicle`.
2.  **`super().__init__(brand, model)`**: Inside the `Car`'s `__init__` method, `super()` refers to the parent class (`Vehicle`). We call `super().__init__()` to ensure that the `brand` and `model` attributes are initialized by the `Vehicle`'s constructor. This is crucial for proper initialization.
3.  **`display_info(self)` override**: The `Car` class defines its own `display_info` method. When `display_info` is called on a `Car` object, this version of the method will be executed. We use `super().display_info()` within this overridden method to first execute the `Vehicle`'s `display_info` logic, and then add the car-specific information (`num_doors`).
4.  **`honk(self)`**: This is a new method defined only in the `Car` class, demonstrating how child classes can add their own unique behaviors.

### Using the Inherited Classes

Let's see inheritance in action:

```python
# Create a generic Vehicle object
generic_vehicle = Vehicle("GenericCo", "ModelX")
generic_vehicle.display_info()
generic_vehicle.move()
print("-" * 20)

# Create a Car object
my_car = Car("Toyota", "Camry", 4)
my_car.display_info() # Calls the overridden display_info in Car
my_car.move()         # Inherited from Vehicle
my_car.honk()         # Defined in Car
```

**Output of the above code:**

```
Brand: GenericCo, Model: ModelX
This vehicle is moving.
--------------------
Brand: Toyota, Model: Camry
Number of Doors: 4
This vehicle is moving.
Beep beep!
```

Notice how `my_car` can `move()` (inherited from `Vehicle`) and also `honk()` (its own method). The `display_info()` method behaves differently for `Car` objects because it was overridden.

### Key Takeaways for Inheritance Application

*   **Code Reusability:** Avoid writing the same code multiple times. Define common features in a parent class and let child classes inherit them.
*   **"Is-A" Relationship:** Inheritance is best used when there's a clear hierarchical relationship between classes.
*   **`super()` is Important:** Always remember to call the parent class's constructor (`__init__`) using `super().__init__()` to ensure all parent attributes are initialized.
*   **Method Overriding:** Child classes can provide their own specific implementations of methods inherited from the parent.
*   **Extensibility:** Inheritance makes it easy to create specialized versions of existing classes without altering the original code.

By mastering inheritance, you can build more organized, maintainable, and extensible object-oriented programs.

## Supports

- [[skills/computing/software-engineering/software-practices/object-oriented-programming/microskills/inheritance-application|Inheritance Application]]
