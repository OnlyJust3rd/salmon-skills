---
type: medium
title: Memory Ownership in C++
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[memory-ownership|memory-ownership]]"
learning-time-in-minutes: 46
---
# Memory Ownership in C++

Understanding memory ownership is crucial for writing safe and efficient C++ code, especially when dealing with object lifetimes. It's about knowing which part of your program is responsible for creating, managing, and eventually destroying an object. When ownership is clear, you avoid common bugs like memory leaks or accessing memory that's already been freed.

## What is Memory Ownership?

In C++, when you create an object, memory is allocated for it. This memory needs to be deallocated when the object is no longer needed. Memory ownership defines which piece of code or which entity has the ultimate responsibility for that deallocation. This responsibility prevents "dangling pointers" (pointers to memory that has been freed) and memory leaks (memory that is no longer accessible but hasn't been freed).

## The Problem: Ambiguous Ownership

Imagine you pass a pointer to an object from one function to another. Who is responsible for deleting that object? If both functions think they own it, you might end up deleting it twice (leading to a crash) or not deleting it at all (a memory leak).

## Practice: Unique Pointers

One of the most straightforward ways to manage memory ownership in modern C++ is by using `std::unique_ptr`. A `unique_ptr` represents exclusive ownership of an object. When the `unique_ptr` goes out of scope, it automatically deletes the object it points to.

Let's see an example:

```cpp
#include <iostream>
#include <memory> // Required for unique_ptr

class MyClass {
public:
    MyClass() {
        std::cout << "MyClass created!" << std::endl;
    }
    ~MyClass() {
        std::cout << "MyClass destroyed!" << std::endl;
    }
    void greet() {
        std::cout << "Hello from MyClass!" << std::endl;
    }
};

void processObject(std::unique_ptr<MyClass> objPtr) {
    std::cout << "Inside processObject function." << std::endl;
    objPtr->greet();
    // When processObject ends, objPtr goes out of scope,
    // and the MyClass object is destroyed.
    std::cout << "Exiting processObject function." << std::endl;
}

int main() {
    std::cout << "Creating object in main." << std::endl;
    // Create a unique_ptr that owns a new MyClass object
    auto myObject = std::make_unique<MyClass>();

    myObject->greet();

    // Transfer ownership to the processObject function
    // The original myObject in main will become null after this move
    processObject(std::move(myObject));

    // At this point, myObject in main is nullptr because ownership was moved
    if (!myObject) {
        std::cout << "myObject in main is now null." << std::endl;
    }

    std::cout << "Exiting main function." << std::endl;
    // When main ends, if there were any other unique_ptrs, they would clean up.
    // In this case, myObject was already null.
    return 0;
}
```

In this example:
*   `std::make_unique<MyClass>()` creates a `MyClass` object and wraps it in a `unique_ptr`.
*   `std::move(myObject)` transfers ownership from the `unique_ptr` in `main` to the `unique_ptr` in `processObject`. The original pointer becomes null.
*   When `processObject` finishes, its `objPtr` goes out of scope, and the `MyClass` object is automatically deleted. This is automatic memory management handled by `unique_ptr`.

## Practice Task

1.  Modify the `processObject` function to **not** take ownership of the `MyClass` object. Instead, have it accept a raw pointer, but **do not** delete the object inside `processObject`.
2.  In `main`, after calling the modified `processObject`, demonstrate that the `MyClass` object is still alive and can be used.
3.  Ensure that the `MyClass` object is deleted exactly once when the `unique_ptr` in `main` goes out of scope.

## Self-Check Questions

1.  What is the primary benefit of clear memory ownership?
2.  What happens to the object managed by a `std::unique_ptr` when the `unique_ptr` itself is destroyed?
3.  Why is it generally unsafe to pass raw pointers from functions that own the object to other functions, without explicitly managing ownership transfer?

## Supports

- [[memory-ownership|Memory Ownership]]
