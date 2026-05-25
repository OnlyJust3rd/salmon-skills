---
type: medium
title: Understanding Compilation Units in C++
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[compilation-unit|compilation-unit]]"
learning-time-in-minutes: 3
---
# Understanding Compilation Units in C++

In C++, a compilation unit refers to a single `.cpp` file that is processed by the compiler to produce an object file. This object file is then linked with other object files to create an executable program. Organizing your C++ code into multiple compilation units and using header files is crucial for managing complexity, promoting code reusability, and improving compilation times, especially in larger projects.

## Source Files vs. Header Files

*   **Source Files (`.cpp`):** These files contain the actual implementation of your code. This includes function definitions, class method implementations, and global variable definitions. When the compiler processes a `.cpp` file, it translates the C++ code into machine code for that specific file.

*   **Header Files (`.h` or `.hpp`):** These files, often called declaration files, contain declarations of functions, classes, variables, and constants. They tell the compiler *what* exists without providing the *how*. This allows other `.cpp` files to use these elements without needing to see their full implementation.

## The Role of `#include`

The `#include` directive is a preprocessor command. Before the actual compilation begins, the preprocessor scans the code for `#include` directives and replaces them with the content of the specified file.

*   **Including Header Files:** When you `#include` a header file in a `.cpp` file, you are essentially making the declarations within that header file available to your source file. This allows you to call functions or use classes that are defined elsewhere.

*   **Avoiding Multiple Inclusions:** To prevent errors caused by including the same header file multiple times, header files typically use include guards. These are preprocessor directives that ensure the contents of a header file are only included once.

```cpp
#ifndef MY_HEADER_H
#define MY_HEADER_H

// Declarations go here

#endif // MY_HEADER_H
```

## Practical Example

Let's imagine a simple calculator program. We can split its functionality into different compilation units.

**`calculator.h` (Header File):**
```cpp
#ifndef CALCULATOR_H
#define CALCULATOR_H

int add(int a, int b);
int subtract(int a, int b);

#endif // CALCULATOR_H
```

**`calculator.cpp` (Source File - Implementation):**
```cpp
#include "calculator.h"

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}
```

**`main.cpp` (Source File - Using the calculator):**
```cpp
#include <iostream>
#include "calculator.h" // We include the header to know about add and subtract

int main() {
    int num1 = 10;
    int num2 = 5;

    int sum = add(num1, num2);
    int difference = subtract(num1, num2);

    std::cout << "Sum: " << sum << std::endl;
    std::cout << "Difference: " << difference << std::endl;

    return 0;
}
```

**How it works:**
1.  The compiler processes `calculator.cpp`. It sees the definitions of `add` and `subtract` and creates an object file for `calculator.o`.
2.  The compiler processes `main.cpp`. It sees `#include "calculator.h"`, which tells it that `add` and `subtract` functions exist. It then creates an object file for `main.o`.
3.  The linker takes `calculator.o` and `main.o` and combines them. It resolves the calls to `add` and `subtract` in `main.o` with their actual implementations found in `calculator.o`, creating the final executable.

## Practice Task

Create two files: `math_operations.h` and `math_operations.cpp`.
In `math_operations.h`, declare a function `int multiply(int a, int b);`.
In `math_operations.cpp`, implement the `multiply` function.
Create a `main.cpp` file that includes `math_operations.h`, calls the `multiply` function, and prints the result.

## Self-Check Questions

1.  What is the primary purpose of a header file (`.h`) in C++?
2.  What is the primary purpose of a source file (`.cpp`) in C++?
3.  When you `#include` a header file, what is happening before the C++ code is actually compiled?
4.  Why are include guards important for header files?

## Supports

- [[compilation-unit|Compilation Unit]]
