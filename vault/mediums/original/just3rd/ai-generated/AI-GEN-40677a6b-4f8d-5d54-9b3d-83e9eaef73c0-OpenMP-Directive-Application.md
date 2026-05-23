---
type: "medium"
title: "Applying OpenMP Directives for Parallelism"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/high-performance-computing/openmp/microskills/openmp-directive-application|openmp-directive-application]]"
learning-time-in-minutes: 4
---
# Applying OpenMP Directives for Parallelism

This lesson focuses on the practical application of OpenMP directives to create parallel programs. We'll explore how these directives instruct the compiler to parallelize sections of your code, enabling it to run faster on multi-core processors.

## What are OpenMP Directives?

OpenMP directives are special comments that act as instructions to the OpenMP runtime library. They guide the compiler on how to parallelize your code, specifying which parts to execute concurrently and how to manage shared data. These directives are typically placed before the code block they are meant to control.

## Key Directives for Parallel Program Implementation

When implementing a parallel program with OpenMP, you'll primarily use directives to define parallel regions and manage data. Here are some fundamental directives:

### 1. `#pragma omp parallel`

This is the most basic and essential directive. It creates a parallel region. When the program encounters this directive, it will spawn a team of threads, and the code within the parallel region will be executed by each thread.

**Example:**

```c
#include <stdio.h>
#include <omp.h>

int main() {
    int id;

    #pragma omp parallel
    {
        id = omp_get_thread_num();
        printf("Hello from thread %d\n", id);
    }

    printf("Back to sequential execution.\n");
    return 0;
}
```

**How it works:**

*   `#pragma omp parallel`: This directive tells the compiler that the following block of code should be executed in parallel.
*   `omp_get_thread_num()`: This OpenMP runtime function returns the unique ID of the thread that is currently executing the code.
*   When you run this program, you will see multiple "Hello from thread X" messages, with X being the thread ID. The order of these messages is non-deterministic, as threads execute concurrently.
*   After the parallel region (the `}`), the program returns to sequential execution, and only one thread continues.

### 2. `#pragma omp for` (or `#pragma omp do`)

This directive is used to parallelize loops. It distributes the iterations of a loop among the threads in the current team. This is one of the most common ways to achieve parallelism in scientific and numerical computations.

**Example:**

```c
#include <stdio.h>
#include <omp.h>

#define N 100

int main() {
    int i;
    int a[N];

    // Initialize array sequentially
    for (i = 0; i < N; i++) {
        a[i] = i;
    }

    #pragma omp parallel for
    for (i = 0; i < N; i++) {
        a[i] = a[i] * 2;
        printf("Thread %d processed element %d\n", omp_get_thread_num(), i);
    }

    // Print first few elements to verify
    for (i = 0; i < 10; i++) {
        printf("a[%d] = %d\n", i, a[i]);
    }

    return 0;
}
```

**How it works:**

*   `#pragma omp parallel for`: This directive combines the functionality of `#pragma omp parallel` and `#pragma omp for`. It creates a parallel region and then distributes the loop iterations among the threads.
*   By default, the loop iterations are divided statically among the threads. This means each thread gets a contiguous block of iterations.
*   The `printf` inside the loop demonstrates that different threads are working on different loop iterations concurrently.

### 3. `#pragma omp sections`

This directive allows you to divide a parallel region into independent sections, each of which can be executed by a different thread. This is useful when you have distinct tasks within a parallel region that don't depend on each other.

**Example:**

```c
#include <stdio.h>
#include <omp.h>

int main() {
    #pragma omp parallel sections
    {
        #pragma omp section
        {
            printf("Section 1 executed by thread %d\n", omp_get_thread_num());
        }

        #pragma omp section
        {
            printf("Section 2 executed by thread %d\n", omp_get_thread_num());
        }

        #pragma omp section
        {
            printf("Section 3 executed by thread %d\n", omp_get_thread_num());
        }
    }
    return 0;
}
```

**How it works:**

*   `#pragma omp parallel sections`: Creates a parallel region where code blocks marked with `#pragma omp section` can be executed concurrently.
*   Each `#pragma omp section` defines an independent unit of work. The OpenMP runtime assigns these sections to available threads.
*   The output will show which thread executed which section, and the order of the output lines can vary.

## Data Scoping Clauses

Directives often work in conjunction with data scoping clauses that define how variables are accessed by threads. Key clauses include:

*   `private(variable_list)`: Each thread gets its own private copy of the variable. Changes made by one thread do not affect others.
*   `shared(variable_list)`: All threads share a single copy of the variable. This is the default for most variables not declared outside the parallel region.
*   `firstprivate(variable_list)`: Similar to `private`, but the private copy is initialized with the value of the variable from before the parallel region.
*   `lastprivate(variable_list)`: Similar to `private`, but the value of the variable from the thread that executed the last iteration (or section) is copied back to the original variable.

**Example using `private`:**

```c
#include <stdio.h>
#include <omp.h>

int main() {
    int i, x = 10;

    #pragma omp parallel private(i)
    {
        // Each thread has its own 'i'
        for (i = 0; i < 5; i++) {
            printf("Thread %d: i = %d\n", omp_get_thread_num(), i);
        }
        // 'x' is shared by default
        printf("Thread %d: x = %d\n", omp_get_thread_num(), x);
    }
    return 0;
}
```

In this example, `i` is declared as `private` to ensure each thread has its own loop counter. `x` is shared by default.

## Compiling OpenMP Code

To compile code with OpenMP directives, you need to use a compiler that supports OpenMP (like GCC, Clang, or Intel compilers) and enable the OpenMP flag.

**Using GCC:**

```bash
gcc -fopenmp your_program.c -o your_program
```

## Summary

OpenMP directives are powerful tools for parallelizing your C/C++ code. By understanding and applying directives like `#pragma omp parallel`, `#pragma omp for`, and `#pragma omp sections`, along with appropriate data scoping clauses, you can effectively implement parallel programs to leverage multi-core architectures and solve computational problems more efficiently.

## Supports

- [[skills/computing/systems-infrastructure/high-performance-computing/openmp/microskills/openmp-directive-application|OpenMP Directive Application]]
