---
type: "medium"
title: "Developing Functional Parallel Programs with OpenMP"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/openmp/microskills/functional-parallel-program-development|functional-parallel-program-development]]"
learning-time-in-minutes: 4
---
# Developing Functional Parallel Programs with OpenMP

This lesson focuses on building working parallel programs using OpenMP, a powerful tool for shared-memory parallelism. We'll move beyond basic directives to create functional, parallel solutions for computational problems.

## Core Idea: From Sequential to Parallel

The fundamental goal is to take a sequential program and identify sections that can be executed independently by multiple threads. OpenMP provides directives that guide the compiler in distributing this workload. For this microskill, we're not just *identifying* these sections, but actively *implementing* the parallel logic to ensure correctness and performance.

## Key OpenMP Construct for Functional Development: The `#pragma omp parallel` Directive

The simplest and most fundamental directive for parallel execution is `#pragma omp parallel`. When placed before a code block, it tells OpenMP to create a team of threads, and each thread will execute that code block.

```c++
#include <iostream>
#include <omp.h>

int main() {
    #pragma omp parallel
    {
        int thread_id = omp_get_thread_num();
        std::cout << "Hello from thread " << thread_id << std::endl;
    }
    return 0;
}
```

**How it works:**

1.  **Thread Team Creation:** When the program encounters `#pragma omp parallel`, a team of threads is created (the number of threads is typically determined by the system or environment variables).
2.  **Parallel Region:** The code enclosed within the curly braces `{}` following the directive is the "parallel region."
3.  **Work Distribution:** Each thread in the team executes the entire parallel region.
4.  **Synchronization (Implicit):** By default, threads wait at the end of the parallel region (an implicit barrier) until all threads have completed before the program continues execution in a single thread.

## A Worked Example: Summing Array Elements in Parallel

Let's consider a common computational problem: summing the elements of a large array. This is a prime candidate for parallelization.

**Sequential Approach:**

```c++
#include <iostream>
#include <vector>
#include <numeric> // For std::accumulate

int main() {
    const int size = 1000000;
    std::vector<int> data(size);
    // Initialize data (simplified for example)
    for (int i = 0; i < size; ++i) {
        data[i] = i % 10 + 1; // Values from 1 to 10
    }

    long long total_sum = 0;
    for (int i = 0; i < size; ++i) {
        total_sum += data[i];
    }

    std::cout << "Sequential sum: " << total_sum << std::endl;
    return 0;
}
```

**Parallel Approach using `#pragma omp parallel for`:**

The `#pragma omp parallel for` directive is a powerful combination. It parallelizes a `for` loop, automatically distributing the loop iterations among the threads.

```c++
#include <iostream>
#include <vector>
#include <omp.h>

int main() {
    const int size = 1000000;
    std::vector<int> data(size);
    // Initialize data (simplified for example)
    for (int i = 0; i < size; ++i) {
        data[i] = i % 10 + 1; // Values from 1 to 10
    }

    long long total_sum = 0;

    // Parallelize the summation loop
    #pragma omp parallel for reduction(+:total_sum)
    for (int i = 0; i < size; ++i) {
        total_sum += data[i];
    }

    std::cout << "Parallel sum: " << total_sum << std::endl;
    return 0;
}
```

**Explanation of the parallel version:**

*   **`#pragma omp parallel for`**: This directive tells OpenMP to parallelize the `for` loop that immediately follows it. The iterations of the loop will be divided among the available threads.
*   **`reduction(+:total_sum)`**: This is a crucial clause. Without it, each thread would have its *own* copy of `total_sum`, and they would all be trying to update it independently, leading to a *race condition*. The `reduction` clause tells OpenMP:
    *   Each thread will get a private copy of `total_sum`.
    *   Each thread will perform its part of the summation on its private copy.
    *   At the end of the parallel region, OpenMP will combine (in this case, sum) all the private `total_sum` values into the original `total_sum` variable. The `+` specifies the reduction operator.

**Key considerations for functional parallel program development:**

*   **Data Races:** Always be mindful of shared variables that multiple threads might try to write to simultaneously. The `reduction` clause is one way to handle this. Other clauses like `private`, `shared`, `critical`, and `atomic` are also important.
*   **Thread Independence:** Identify code segments where threads can operate on different data or perform independent calculations without interfering with each other.
*   **Workload Balancing:** For loops, OpenMP often handles distribution well. For more complex tasks, you might need to explicitly divide the work.
*   **Correctness is Paramount:** Before optimizing for speed, ensure your parallel program produces the *exact same result* as its sequential counterpart.

## Practical Steps for Developing Functional Parallel Programs:

1.  **Analyze the Sequential Code:** Identify computationally intensive loops or sections that operate on independent data.
2.  **Choose the Right Directive:**
    *   `#pragma omp parallel for` for loops.
    *   `#pragma omp parallel` for blocks of code.
3.  **Address Shared Data:**
    *   Use `reduction` for operations like sum, product, max, min.
    *   Use `private` for variables that each thread needs its own copy of within a parallel region.
    *   Use `critical` or `atomic` for sections of code that *must* be executed by only one thread at a time to prevent race conditions.
4.  **Compile with OpenMP Enabled:** Most compilers require a specific flag (e.g., `-fopenmp` for GCC/Clang, `/openmp` for MSVC).
5.  **Test Thoroughly:** Compare the output of your parallel program with the sequential version for correctness. Run it with different numbers of threads (`export OMP_NUM_THREADS=N` on Linux/macOS, or via system settings on Windows) to check for consistency.

By systematically applying these principles and directives, you can build robust and functional parallel programs using OpenMP.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/openmp/microskills/functional-parallel-program-development|Functional Parallel Program Development]]
