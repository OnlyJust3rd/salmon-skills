---
type: "medium"
title: "Implementing Polymorphism in Code"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/object-oriented-programming/microskills/polymorphism-application|polymorphism-application]]"
---
# Implementing Polymorphism in Code

Polymorphism, a core principle of Object-Oriented Programming (OOP), allows objects of different classes to be treated as objects of a common superclass. This means you can write code that operates on a general type, and it will automatically work with any specific type that conforms to that general type. This leads to more flexible, extensible, and maintainable code.

## What is Polymorphism?

The word "polymorphism" comes from Greek, meaning "many forms." In OOP, it refers to the ability of a method or operator to perform different actions depending on the type of object it is acting upon. There are two main types of polymorphism:

1.  **Compile-time Polymorphism (Static Polymorphism):** Achieved through method overloading and operator overloading. The decision of which method or operator to call is made at compile time.
2.  **Runtime Polymorphism (Dynamic Polymorphism):** Achieved through method overriding and abstract classes/interfaces. The decision of which method to call is made at runtime, based on the actual type of the object.

For applying OOP principles, runtime polymorphism is generally more impactful and widely used.

## Runtime Polymorphism: Method Overriding

Runtime polymorphism is primarily achieved through **method overriding**. This happens when a subclass provides a specific implementation for a method that is already defined in its superclass.

**Key Concepts:**

*   **Inheritance:** Polymorphism relies on inheritance. A subclass inherits methods from its superclass.
*   **Method Signature:** The method name and parameter list must be the same in both the superclass and the subclass for overriding to occur.
*   **Runtime Binding:** The Java Virtual Machine (JVM) or similar runtime environments determine which method implementation to execute at runtime, based on the object's actual type.

### Worked Example: Shapes

Let's consider a common example involving shapes. We can have a base `Shape` class with a `draw()` method, and then subclasses like `Circle`, `Square`, and `Triangle` that override the `draw()` method to provide their specific drawing logic.

**Python Example:**

```python
class Shape:
    def draw(self):
        print("Drawing a generic shape.")

class Circle(Shape):
    def draw(self):
        print("Drawing a circle.")

class Square(Shape):
    def draw(self):
        print("Drawing a square.")

class Triangle(Shape):
    def draw(self):
        print("Drawing a triangle.")

# --- Applying Polymorphism ---

# Create a list of Shape objects
shapes = [Circle(), Square(), Triangle(), Shape()]

# Iterate through the list and call the draw method
for shape in shapes:
    shape.draw()
```

**Explanation:**

1.  We define a base class `Shape` with a `draw()` method.
2.  `Circle`, `Square`, and `Triangle` inherit from `Shape` and override the `draw()` method to print their specific shape names.
3.  We create a list `shapes` that contains instances of `Circle`, `Square`, `Triangle`, and even `Shape` itself.
4.  When we loop through `shapes` and call `shape.draw()`, the program doesn't just call the `draw()` method of the `Shape` class for every object. Instead, at runtime, it checks the actual type of each `shape` object and calls the appropriate overridden `draw()` method from its specific class.

**Output of the Python code:**

```
Drawing a circle.
Drawing a square.
Drawing a triangle.
Drawing a generic shape.
```

Notice how the output varies for each object, demonstrating that the correct `draw()` method was invoked based on the object's type.

### Java Example:

```java
// Superclass
class Shape {
    void draw() {
        System.out.println("Drawing a generic shape.");
    }
}

// Subclasses
class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a square.");
    }
}

class Triangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a triangle.");
    }
}

// Main class to demonstrate polymorphism
public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[4];
        shapes[0] = new Circle();
        shapes[1] = new Square();
        shapes[2] = new Triangle();
        shapes[3] = new Shape(); // Instance of the superclass

        for (Shape shape : shapes) {
            shape.draw(); // Polymorphic call
        }
    }
}
```

The Java example demonstrates the same concept. The `@Override` annotation is a good practice to ensure you are indeed overriding a superclass method.

## When to Use Polymorphism

Polymorphism is incredibly useful in scenarios where you need to:

*   **Handle collections of related objects:** As seen in the `shapes` example, you can manage a diverse set of objects through a common interface or base class.
*   **Design flexible and extensible systems:** New types of shapes (or any other objects) can be added without modifying the existing code that processes them, as long as they adhere to the common interface/base class.
*   **Reduce code duplication:** Instead of writing separate logic for each specific type, you write a general logic that works for all types.
*   **Implement design patterns:** Many design patterns, like Strategy, Observer, and Factory, heavily rely on polymorphism.

## Common Pitfalls

*   **Forgetting to Override:** If a subclass doesn't explicitly override a method, it will simply inherit the superclass's implementation. This might be intended, but often it's an oversight.
*   **Incorrect Method Signature:** Forgetting to match the method signature (name and parameters) in the subclass will result in method *overloading* or a new method, not *overriding*, and thus won't achieve runtime polymorphism.
*   **Not Using a Common Superclass or Interface:** Polymorphism requires a common ancestor or a shared interface to allow objects to be treated as a uniform type.

By mastering polymorphism, you unlock a powerful tool for writing more robust and adaptable object-oriented programs.

## Supports

- [[skills/programming/software-engineering/object-oriented-programming/microskills/polymorphism-application|Polymorphism Application]]
