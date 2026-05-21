---
type: "medium"
title: "Understanding C++ Pointers"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/cpp-programming/microskills/pointer|pointer]]"
---
# Understanding C++ Pointers

This lesson helps you understand how C++ uses pointers to refer to memory locations.

In C++, a pointer is a variable that stores the memory address of another variable. Think of it like a house address that tells you exactly where a house is located, rather than the house itself. This allows for powerful memory management and efficient data manipulation.

## How Pointers Work

Every variable in your program resides at a specific memory address. A pointer variable holds this numerical memory address.

*   The `&` operator (address-of operator) gets the memory address of a variable.
*   The `*` operator (dereference operator) accesses the value stored at the memory address a pointer points to.

### Practical Example

Let's see this in action with a simple C++ code snippet.

```cpp
#include <iostream>

int main() {
    int age = 30; // A regular integer variable
    int* ptrAge;  // Declare a pointer to an integer

    ptrAge = &age; // ptrAge now stores the memory address of 'age'

    std::cout << "Value of age: " << age << std::endl;
    std::cout << "Address of age: " << &age << std::endl;
    std::cout << "Value stored in ptrAge (the address): " << ptrAge << std::endl;
    std::cout << "Value at the address pointed to by ptrAge: " << *ptrAge << std::endl; // Dereferencing the pointer

    // You can also change the value of 'age' using the pointer
    *ptrAge = 31;
    std::cout << "New value of age (changed via pointer): " << age << std::endl;

    return 0;
}
```

In this example:
*   `age` is an `int` variable.
*   `ptrAge` is an `int*`, meaning it's a pointer that can hold the address of an `int`.
*   `&age` gives us the memory address where `age` is stored.
*   `ptrAge = &age;` assigns that address to `ptrAge`.
*   `*ptrAge` retrieves the value at the address stored in `ptrAge`, which is the value of `age`.

## Practice Task

1.  Declare an integer variable `score` and initialize it to `85`.
2.  Declare an integer pointer `ptrScore`.
3.  Make `ptrScore` point to the memory address of `score`.
4.  Print the address of `score`.
5.  Print the value stored in `ptrScore`.
6.  Print the value of `score` using the dereference operator `*ptrScore`.
7.  Change the value of `score` to `90` by using `*ptrScore`.
8.  Print the updated value of `score`.

## Self-Check Questions

1.  What is the primary purpose of a pointer variable?
2.  What operator do you use to get the memory address of a variable?
3.  What operator do you use to access the value stored at a memory address a pointer holds?
4.  If `int x = 10;` and `int* p = &x;`, what will `*p` evaluate to?

## Supports

- [[skills/programming/programming-languages/cpp-programming/microskills/pointer|Pointer]]
