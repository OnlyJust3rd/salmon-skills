---
type: "medium"
title: "Parallelizing Computational Problems with OpenMP"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/openmp/microskills/computational-problem-parallelization|Computational Problem Parallelization]]"
---
# Parallelizing Computational Problems with OpenMP

This lesson focuses on applying OpenMP to parallelize specific computational tasks, enabling you to solve problems more efficiently by leveraging multi-core processors.

## Understanding Computational Problem Parallelization

Many computational problems involve repetitive calculations or independent tasks that can be performed simultaneously. Parallelization aims to distribute these tasks across multiple processor cores, significantly reducing the overall execution time. OpenMP provides a directive-based approach to achieve this, making it relatively straightforward to introduce parallelism into existing C, C++, and Fortran code.

The core idea behind parallelizing a computational problem is to identify the parts of the code that can run independently and then instruct the compiler to execute these parts concurrently.

## Identifying Parallelizable Workloads

Before writing any parallel code, it's crucial to identify which parts of your computational problem are suitable for parallelization. Look for:

*   **Loops:** Loops where each iteration is independent of others are prime candidates. For example, if you're performing element-wise operations on an array, each operation can often be done in parallel.
*   **Independent Tasks:** If your problem can be broken down into several distinct tasks that don't depend on each other's results, these can be run in parallel.
*   **Data Parallelism:** Operations that apply the same logic to different pieces of data.

Consider a simple example: calculating the sum of elements in a large array. Each addition `sum = sum + array[i]` is an independent operation on the `i`-th element.

## Applying OpenMP Directives for Parallel Loops

The most common and straightforward way to parallelize is by using the `#pragma omp parallel for` directive. This directive tells the OpenMP runtime to distribute the iterations of the following `for` loop among the available threads.

Let's consider a C example of summing array elements:

### Sequential Code

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define ARRAY_SIZE 10000000

int main() {
    double *array = (double *)malloc(ARRAY_SIZE * sizeof(double));
    if (array == NULL) {
        perror("Failed to allocate memory");
        return 1;
    }

    // Initialize array with some values
    for (int i = 0; i < ARRAY_SIZE; i++) {
        array[i] = (double)i * 0.5;
    }

    double sum = 0.0;
    clock_t start_time = clock();

    // Sequential summation
    for (int i = 0; i < ARRAY_SIZE; i++) {
        sum += array[i];
    }

    clock_t end_time = clock();
    double elapsed_time = (double)(end_time - start_time) / CLOCKS_PER_SEC;

    printf("Sequential Sum: %f\n", sum);
    printf("Sequential Execution Time: %f seconds\n", elapsed_time);

    free(array);
    return 0;
}
```

### Parallelized Code with OpenMP

To parallelize the summation loop, we add the OpenMP include and the `#pragma omp parallel for` directive:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <omp.h> // Include OpenMP header

#define ARRAY_SIZE 10000000

int main() {
    double *array = (double *)malloc(ARRAY_SIZE * sizeof(double));
    if (array == NULL) {
        perror("Failed to allocate memory");
        return 1;
    }

    // Initialize array with some values
    for (int i = 0; i < ARRAY_SIZE; i++) {
        array[i] = (double)i * 0.5;
    }

    double sum = 0.0;
    clock_t start_time = clock();

    // Parallel summation using OpenMP
    #pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < ARRAY_SIZE; i++) {
        sum += array[i];
    }

    clock_t end_time = clock();
    double elapsed_time = (double)(end_time - start_time) / CLOCKS_PER_SEC;

    printf("Parallel Sum: %f\n", sum);
    printf("Parallel Execution Time: %f seconds\n", elapsed_time);

    free(array);
    return 0;
}
```

**Explanation of Changes:**

*   `#include <omp.h>`: This line includes the necessary OpenMP header file.
*   `#pragma omp parallel for`: This directive indicates that the following `for` loop should be executed in parallel. The OpenMP runtime will create a team of threads and distribute the loop iterations among them.
*   `reduction(+:sum)`: This is a crucial clause. Without `reduction`, each thread would have its own local `sum` variable, and attempting to add to a shared `sum` directly from multiple threads without synchronization would lead to a race condition (incorrect results due to unpredictable access order). The `reduction` clause tells OpenMP to create private copies of `sum` for each thread, perform the additions locally, and then combine these private sums into the original `sum` variable at the end of the parallel region in a safe manner. The `+:` operator specifies the reduction operation (addition).

### Compiling and Running

To compile the parallelized code, you need to enable OpenMP support with your compiler. For GCC and Clang, use the `-fopenmp` flag:

```bash
gcc -o parallel_sum parallel_sum.c -fopenmp
./parallel_sum
```

You should observe a significant reduction in execution time compared to the sequential version, especially on multi-core processors.

## Handling Shared Variables and Race Conditions

When multiple threads access and modify shared variables, race conditions can occur. The `reduction` clause is one way to handle this. Other common ways include:

*   **`#pragma omp critical`:** Ensures that only one thread at a time can execute a block of code. This is useful for operations that cannot be easily reduced, but it can create a bottleneck.
*   **`#pragma omp atomic`:** Provides a more fine-grained atomic update for simple operations on shared variables (e.g., incrementing a counter).
*   **`#pragma omp ordered`:** Ensures that loop iterations are executed in the order they appear in the sequential code, which is sometimes necessary for certain computations.

## Exercise: Parallelizing a Matrix Multiplication

Consider a simple matrix multiplication where you need to compute `C = A * B`, where A, B, and C are square matrices. The element `C[i][j]` is calculated as the dot product of the `i`-th row of A and the `j`-th column of B:

$$
C_{ij} = \sum_{k=0}^{N-1} A_{ik} B_{kj}
$$

Identify the loops that can be parallelized and implement an OpenMP solution to speed up this computation. Pay attention to how you declare and access your matrix elements in a parallel context. You might find that parallelizing the outer loops is more effective than parallelizing the innermost loop, depending on the loop structure and data access patterns.

## Supports

- [[skills/systems/high-performance-computing/openmp/microskills/computational-problem-parallelization|Computational Problem Parallelization]]
