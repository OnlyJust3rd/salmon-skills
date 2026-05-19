---
type: "medium"
title: "C++ Class Implementation: Declarations and Methods"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/cpp-programming/microskills/cpp-class-implementation|C++ Class Implementation]]"
---
# C++ Class Implementation: Declarations and Methods

In C++, a `class` is a blueprint for creating objects. It encapsulates data members (variables) and member functions (methods) that operate on that data. This lesson focuses on how to write class declarations and define their methods, a fundamental step in implementing basic C++ programs.

## What are Class Declarations and Methods?

A **class declaration** defines the structure of a class, specifying its name, its access specifiers (`public`, `private`, `protected`), and the types of its members.

**Methods** (or member functions) are functions defined within a class. They perform actions related to the class's data. Methods can be defined both inside and outside the class declaration.

## Practical Example: A Simple `Dog` Class

Let's create a `Dog` class to represent a canine.

### Class Declaration

```cpp
#include <string> // Required for using std::string

class Dog {
public: // Members accessible from outside the class
    // Data members
    std::string name;
    std::string breed;
    int age;

    // Member functions (methods)
    void bark() const; // Declares a method
    void displayInfo() const; // Declares another method
};
```

In this declaration:
*   `public:` specifies that the following members can be accessed from anywhere.
*   `name`, `breed`, and `age` are data members.
*   `bark()` and `displayInfo()` are method declarations. The `const` keyword indicates that these methods do not modify the object's state.

### Method Definitions (Outside the Class)

We define the methods outside the class declaration using the scope resolution operator (`::`).

```cpp
#include <iostream> // Required for std::cout

// Define the bark() method
void Dog::bark() const {
    std::cout << name << " says Woof!" << std::endl;
}

// Define the displayInfo() method
void Dog::displayInfo() const {
    std::cout << "Name: " << name << ", Breed: " << breed << ", Age: " << age << std::endl;
}
```

### Using the `Dog` Class

To use the class, you first create an *object* (an instance of the class) and then call its methods.

```cpp
int main() {
    Dog myDog; // Create an object of the Dog class

    // Assign values to data members
    myDog.name = "Buddy";
    myDog.breed = "Golden Retriever";
    myDog.age = 3;

    // Call the methods
    myDog.displayInfo();
    myDog.bark();

    return 0;
}
```

When you run this code, the output will be:
```
Name: Buddy, Breed: Golden Retriever, Age: 3
Buddy says Woof!
```

## Practice Task

Create a `Car` class.
1.  The class should have `public` data members: `std::string make`, `std::string model`, and `int year`.
2.  Implement two `public` methods:
    *   `startEngine()` that prints "The [make] [model]'s engine has started."
    *   `displayCarInfo()` that prints the make, model, and year of the car.
3.  In your `main` function, create a `Car` object, populate its details, and call its methods.

## Self-Check Questions

1.  What is the purpose of the `public:` access specifier?
2.  How do you call a method on an object of a class?
3.  What does the `const` keyword signify when used with a method?

## Supports

- [[skills/programming/programming-languages/cpp-programming/microskills/cpp-class-implementation|C++ Class Implementation]]
