---
type: "medium"
title: "Understanding the Shared-Memory Parallel Model in OpenMP"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/openmp/microskills/shared-memory-parallel-model|shared-memory-parallel-model]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/openmp/openmp|openmp]]"
learning-time-in-minutes: 3
---
# Understanding the Shared-Memory Parallel Model in OpenMP

This lesson focuses on understanding the fundamental concepts of the shared-memory parallel model, which is the foundation of OpenMP. This model dictates how threads work together and access data.

## What is Shared Memory?

In parallel computing, shared memory refers to a memory architecture where multiple processors or threads can access the same region of physical memory. Think of it like a common workspace where everyone can see and modify the same documents.

In the context of OpenMP, this means that all threads created by an OpenMP program can directly read from and write to the same variables and data structures in memory. This is a key characteristic that distinguishes it from other parallel programming models like distributed memory.

## Thread-Based Execution

OpenMP achieves parallelism by creating and managing threads. When you start an OpenMP program, it typically begins with a single thread, called the **master thread**. This master thread can then spawn additional threads to perform work in parallel.

*   **Thread Creation:** OpenMP provides directives that tell the compiler to create a team of threads.
*   **Work Sharing:** The work that needs to be done in parallel is then divided among these threads.
*   **Synchronization:** Since all threads can access the same memory, there's a need for mechanisms to control access and ensure data consistency, especially when multiple threads try to modify the same data simultaneously.

## The Role of the Master Thread

The master thread is the thread that executes sequentially or that initiates the parallel region. It's the primary thread of execution before any parallel constructs are encountered. When a parallel region is entered, the master thread becomes part of the team of threads.

## How Threads Interact with Shared Memory

Consider a simple C++ program that calculates the sum of elements in an array.

```c++
#include <iostream>
#include <vector>
#include <omp.h> // Include OpenMP header

int main() {
    const int N = 1000;
    std::vector<int> data(N);
    long long sum = 0; // Variable shared by all threads

    // Initialize data (master thread does this)
    for (int i = 0; i < N; ++i) {
        data[i] = i + 1;
    }

    // Start of a parallel region
    #pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < N; ++i) {
        // This loop body is executed by multiple threads in parallel
        sum += data[i]; // All threads can access 'data' and 'sum'
    }

    std::cout << "The sum is: " << sum << std::endl;
    return 0;
}
```

In this example:

*   `data` is an array that can be accessed by all threads.
*   `sum` is a variable that all threads can read from and write to.

The `#pragma omp parallel for reduction(+:sum)` directive is crucial here. It tells OpenMP to:

1.  **Create a team of threads:** These threads will execute the subsequent `for` loop in parallel.
2.  **Distribute the loop iterations:** Each thread will be assigned a portion of the `i` values to process.
3.  **Handle `sum` safely:** The `reduction(+:sum)` clause ensures that each thread has a private copy of `sum` to accumulate its part of the total. At the end of the parallel region, these partial sums are combined safely into the original `sum` variable.

Without the `reduction` clause, multiple threads trying to update `sum` simultaneously would lead to a **race condition**, where the final value of `sum` would be unpredictable and likely incorrect.

## Key Concepts to Remember

*   **Shared Address Space:** All threads can access the same memory locations.
*   **Thread Team:** OpenMP manages a group of threads that work together.
*   **Data Sharing:** Variables declared outside parallel regions are typically shared by default.
*   **Race Conditions:** A critical problem when multiple threads access and modify shared data concurrently without proper synchronization.
*   **Synchronization Mechanisms:** OpenMP provides constructs (like `reduction`, `critical`, `atomic`, `barrier`) to manage concurrent access to shared data and prevent race conditions.

Understanding the shared-memory model is fundamental. It's the bedrock upon which you'll build more complex parallel programs using OpenMP directives. The challenge often lies in managing data access and ensuring correctness when multiple threads are working on the same data.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/openmp/microskills/shared-memory-parallel-model|Shared-Memory Parallel Model]]
