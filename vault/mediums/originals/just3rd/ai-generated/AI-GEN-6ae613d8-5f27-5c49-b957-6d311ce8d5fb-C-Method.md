---
type: medium
title: "C# Methods: Reusable Behavior Units"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[c-sharp-method|c-sharp-method]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/c-sharp-programming/c-sharp-programming|c-sharp-programming]]"
learning-time-in-minutes: 2
---
# C# Methods: Reusable Behavior Units

In C# programming, methods are fundamental building blocks for creating organized and efficient code. Think of them as mini-programs within your larger program, designed to perform a specific task. This allows you to write code once and reuse it multiple times, saving you effort and making your programs easier to manage.

## What is a Method?

A method is a block of code that performs a specific action. It can:

*   **Accept input data:** These are called **parameters**.
*   **Perform operations:** Based on the input and its internal logic.
*   **Return a result:** This is called the **return value**.

Methods help you break down complex problems into smaller, manageable parts, making your code more readable and maintainable.

## Anatomy of a C# Method

Here's a typical structure of a C# method:

```csharp
[access_modifier] [return_type] [method_name]([parameter_list])
{
    // Method body: code to perform the task
    // ...
    return [value]; // If return_type is not void
}
```

*   **`access_modifier`**: Controls where the method can be accessed from (e.g., `public`, `private`).
*   **`return_type`**: The type of data the method will send back (e.g., `int`, `string`, `void` if it doesn't return anything).
*   **`method_name`**: A descriptive name for the method.
*   **`parameter_list`**: A comma-separated list of input variables the method accepts, including their types and names.

## Practical Example: Calculating Area

Let's create a method to calculate the area of a rectangle.

```csharp
using System;

public class RectangleCalculator
{
    // Method to calculate the area of a rectangle
    public int CalculateArea(int length, int width)
    {
        int area = length * width;
        return area;
    }

    public static void Main(string[] args)
    {
        RectangleCalculator calculator = new RectangleCalculator();

        int rectLength = 10;
        int rectWidth = 5;

        // Calling the CalculateArea method
        int result = calculator.CalculateArea(rectLength, rectWidth);

        Console.WriteLine($"The area of the rectangle is: {result}"); // Output: The area of the rectangle is: 50
    }
}
```

In this example:
*   `CalculateArea` is the method name.
*   `int` is the return type (it returns an integer area).
*   `length` and `width` are parameters.
*   The method body calculates `length * width` and returns the result.
*   In `Main`, we create an instance of `RectangleCalculator` and then *call* the `CalculateArea` method, passing in `rectLength` and `rectWidth`. The returned value is stored in `result`.

## Practice Task

Write a C# method named `GreetUser` that accepts a `string` parameter called `name`. The method should not return any value (`void`) but should print a greeting to the console using the provided name. For example, if the name is "Alice", it should print "Hello, Alice!".

Then, in your `Main` method, call `GreetUser` with your own name.

## Self-Check Questions

1.  What is the primary benefit of using methods in C#?
2.  What is the purpose of parameters in a method?
3.  If a method performs an action but doesn't need to send back any specific data, what should its `return_type` be?
4.  In the `CalculateArea` example, what are the parameters, and what is the return value?

## Supports

- [[c-sharp-method|C# Method]]
