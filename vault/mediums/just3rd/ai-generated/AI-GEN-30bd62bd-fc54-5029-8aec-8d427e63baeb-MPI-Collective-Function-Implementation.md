---
type: "medium"
title: "Implementing MPI Collective Functions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/parallel-programming/microskills/mpi-collective-function-implementation|mpi-collective-function-implementation]]"
---
# Implementing MPI Collective Functions

This lesson focuses on the practical application of MPI collective communication functions within parallel programs. We'll explore how these functions simplify common communication patterns among multiple processes.

## Understanding Collective Communication

In parallel programming with MPI, processes often need to communicate in patterns involving more than just two processes at a time. These group-wide communication operations are called **collective communications**. Instead of each process individually sending and receiving data from many others, collective functions provide a higher-level abstraction to manage these interactions efficiently.

The key benefit of collective operations is that they are optimized by the MPI implementation to perform these group-wide communications as fast as possible. They also simplify the programmer's task by encapsulating complex multi-process exchanges into single function calls.

## When to Use MPI Collectives

MPI collective functions are appropriate in scenarios where:

*   **All processes need to participate:** Operations like broadcasting data to everyone or gathering data from everyone.
*   **A synchronized global operation is required:** Such as reducing values across all processes to find a global sum or maximum.
*   **Data needs to be redistributed among processes:** For example, scattering data to all processes or gathering data from all processes to one.
*   **You want to simplify code:** Collective operations reduce the number of explicit `MPI_Send` and `MPI_Recv` calls needed for group operations.

## Common MPI Collective Functions and Their Implementation

Let's look at some fundamental collective functions and how you might use them in C.

### 1. `MPI_Bcast` (Broadcast)

**Purpose:** To send data from one process (the root) to all other processes in a communicator.

**When to Use:** When a single process has some data (e.g., an initial configuration, a shared parameter) that needs to be made available to every other process.

**Implementation Example:**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int data_to_send;
    int received_data;
    int root_process = 0;

    if (rank == root_process) {
        data_to_send = 12345; // Data held by the root
        printf("Root process %d sending data: %d\n", rank, data_to_send);
    }

    // Broadcast the data from the root to all other processes
    MPI_Bcast(&data_to_send, 1, MPI_INT, root_process, MPI_COMM_WORLD);

    // After Bcast, all processes will have the value from data_to_send
    // Note: 'data_to_send' variable on non-root processes will be updated
    // to hold the broadcasted value.
    if (rank != root_process) {
        received_data = data_to_send; // Use the updated value
        printf("Process %d received data: %d\n", rank, received_data);
    }

    MPI_Finalize();
    return 0;
}
```

**How it works:**
The `MPI_Bcast` function takes a buffer to send (`&data_to_send`), the number of elements (`1`), the data type (`MPI_INT`), the rank of the root process (`root_process`), and the communicator (`MPI_COMM_WORLD`). On the root process, the data in the buffer is sent. On all other processes, the data is received into the same buffer.

### 2. `MPI_Reduce` (Reduce)

**Purpose:** To perform a reduction operation (like sum, max, min) on data from all processes and store the result on a designated root process.

**When to Use:** When you need to compute a single global value from values held by all processes, such as calculating the total sum of elements distributed across processors, finding the maximum value, or determining the minimum.

**Implementation Example:**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int local_value = rank + 1; // Each process has a unique value
    int global_sum;
    int root_process = 0;

    printf("Process %d has local value: %d\n", rank, local_value);

    // Reduce operation: sum all local_value and store the result on root_process
    MPI_Reduce(&local_value, &global_sum, 1, MPI_INT, MPI_SUM, root_process, MPI_COMM_WORLD);

    if (rank == root_process) {
        printf("Root process %d calculated global sum: %d\n", rank, global_sum);
    }

    MPI_Finalize();
    return 0;
}
```

**How it works:**
`MPI_Reduce` takes the local buffer (`&local_value`), the receive buffer for the result (`&global_sum`), the count (`1`), the data type (`MPI_INT`), the operation (`MPI_SUM`), the root process rank (`root_process`), and the communicator (`MPI_COMM_WORLD`). All processes contribute their `local_value`. The MPI implementation computes the sum and places it into `global_sum` only on the `root_process`.

### 3. `MPI_Allreduce` (All-to-All Reduce)

**Purpose:** Similar to `MPI_Reduce`, but the result of the reduction is made available on **all** processes.

**When to Use:** When every process needs to know the final result of a global reduction. For example, if each process has a partial error calculation, and all processes need to know the total accumulated error.

**Implementation Example:**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    float local_error = (float)(rank + 1) * 0.1; // Each process has a different error value
    float global_total_error;
    int root_process = 0; // Not strictly needed for Allreduce destination, but required for function signature.

    printf("Process %d has local error: %.2f\n", rank, local_error);

    // Reduce and broadcast the sum of local_error to all processes
    MPI_Allreduce(&local_error, &global_total_error, 1, MPI_FLOAT, MPI_SUM, MPI_COMM_WORLD);

    // Every process now has the global_total_error
    printf("Process %d sees global total error: %.2f\n", rank, global_total_error);

    MPI_Finalize();
    return 0;
}
```

**How it works:**
`MPI_Allreduce` is like `MPI_Reduce` followed by `MPI_Bcast` of the result. It performs the reduction (here, `MPI_SUM` for floats) and distributes the final result to every process in the communicator.

### 4. `MPI_Scatter` (Scatter)

**Purpose:** To distribute portions of an array from a root process to all other processes. Each process receives a unique contiguous block of data from the root's array.

**When to Use:** When the root process has a large dataset that needs to be divided and sent to different processes for them to work on.

**Implementation Example:**

```c
#include <mpi.h>
#include <stdio.h>
#include <vector>

int main(int argc, char *argv[]) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int send_count = 2; // Each process receives 2 integers
    int root_process = 0;

    // Root process prepares data
    std::vector<int> send_buffer(size * send_count);
    if (rank == root_process) {
        for (int i = 0; i < size * send_count; ++i) {
            send_buffer[i] = i;
        }
        printf("Root process %d preparing data for scatter.\n", rank);
    }

    // Each process receives a portion
    std::vector<int> recv_buffer(send_count);

    // Scatter the data: root sends contiguous blocks to each process
    MPI_Scatter(send_buffer.data(), send_count, MPI_INT,
                recv_buffer.data(), send_count, MPI_INT,
                root_process, MPI_COMM_WORLD);

    // Print the data received by each process
    printf("Process %d received: ", rank);
    for (int i = 0; i < send_count; ++i) {
        printf("%d ", recv_buffer[i]);
    }
    printf("\n");

    MPI_Finalize();
    return 0;
}
```

**How it works:**
The `root_process` has a buffer (`send_buffer`) containing `size * send_count` elements. `MPI_Scatter` takes a chunk of `send_count` elements from `send_buffer` for each process and sends it to that process. The data is received into `recv_buffer` on each process.

### 5. `MPI_Gather` (Gather)

**Purpose:** To collect data from all processes and have it assembled into a single array on a designated root process.

**When to Use:** When each process computes a result or has some data, and you need to bring all these pieces together on one process for further processing or output.

**Implementation Example:**

```c
#include <mpi.h>
#include <stdio.h>
#include <vector>

int main(int argc, char *argv[]) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int send_value = rank * 10; // Each process has a value to send
    int recv_count = 1;       // Each process sends 1 integer
    int root_process = 0;

    // Buffer to receive data on the root
    std::vector<int> recv_buffer(size * recv_count);

    printf("Process %d sending value: %d\n", rank, send_value);

    // Gather data from all processes to the root
    MPI_Gather(&send_value, recv_count, MPI_INT,
               recv_buffer.data(), recv_count, MPI_INT,
               root_process, MPI_COMM_WORLD);

    // Root process prints the gathered data
    if (rank == root_process) {
        printf("Root process %d gathered data: ", rank);
        for (int i = 0; i < size * recv_count; ++i) {
            printf("%d ", recv_buffer[i]);
        }
        printf("\n");
    }

    MPI_Finalize();
    return 0;
}
```

**How it works:**
Each process sends its local data (`&send_value`) to the root process. The root process collects these pieces into its `recv_buffer`. The order in the `recv_buffer` corresponds to the rank of the sending process (process 0's data comes first, then process 1's, and so on).

## Key Takeaways

*   MPI collectives simplify common parallel communication patterns.
*   They are generally more efficient than equivalent sequences of point-to-point calls.
*   Functions like `MPI_Bcast`, `MPI_Reduce`, `MPI_Allreduce`, `MPI_Scatter`, and `MPI_Gather` cover a wide range of group communication needs.
*   Always ensure that all participating processes in a collective operation call the same MPI function with the same arguments (except for data-specific values). Mismatched calls can lead to deadlocks.

## Supports

- [[skills/systems/high-performance-computing/parallel-programming/microskills/mpi-collective-function-implementation|MPI Collective Function Implementation]]
