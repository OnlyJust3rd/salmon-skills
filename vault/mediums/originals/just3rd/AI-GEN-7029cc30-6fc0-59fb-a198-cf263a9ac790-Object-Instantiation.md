---
type: medium
title: Object Instantiation in C#
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/programming/programming-languages/c-sharp-programming/microskills/object-instantiation|object-instantiation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/c-sharp-programming/c-sharp-programming|c-sharp-programming]]"
learning-time-in-minutes: 2
---
# Object Instantiation in C#

In C#, classes are blueprints for creating objects. Object instantiation is the process of creating an actual instance of a class, much like using a cookie cutter (the class) to make individual cookies (the objects). Each object created from a class has its own set of data (fields) and behaviors (methods).

## Creating and Using Objects

To create an object, you use the `new` keyword followed by the class name and parentheses `()`. This calls the class's *constructor*, which is a special method that initializes the object.

### Practical Example: A `Car` Object

Let's imagine we have a `Car` class.

```csharp
public class Car
{
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }

    // Constructor
    public Car(string make, string model, int year)
    {
        Make = make;
        Model = model;
        Year = year;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"This is a {Year} {Make} {Model}.");
    }
}
```

Now, let's create (instantiate) a `Car` object:

```csharp
// Creating an instance of the Car class
Car myCar = new Car("Toyota", "Camry", 2022);

// Accessing object properties and calling methods
Console.WriteLine(myCar.Make); // Output: Toyota
myCar.DisplayInfo(); // Output: This is a 2022 Toyota Camry.
```

Here, `myCar` is an object of the `Car` class. We provided the necessary information (make, model, year) to its constructor when creating it. We can then use `myCar.Make` to access its `Make` property or `myCar.DisplayInfo()` to call its method.

## Practice Task

1.  **Define a simple `Dog` class** with properties like `Name` (string) and `Breed` (string).
2.  **Include a constructor** that accepts `name` and `breed` as arguments to initialize these properties.
3.  **Add a method** called `Bark()` that prints a message like "[Dog's Name] says Woof!".
4.  **In your `Main` method (or equivalent entry point), instantiate at least two `Dog` objects** with different names and breeds.
5.  **Call the `Bark()` method** for each of your dog objects and print their `Name` and `Breed`.

## Self-Check Questions

1.  What keyword is used in C# to create a new object from a class?
2.  What is the purpose of a constructor?
3.  Can you create multiple objects from the same class? What is the key difference between these objects?

## Supports

- [[skills/computing/programming/programming-languages/c-sharp-programming/microskills/object-instantiation|Object Instantiation]]
- [[skills/computing/programming/programming-paradigms/object-oriented-programming/microskills/object-instantiation|Object instantiation]]
