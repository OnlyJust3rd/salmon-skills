---
type: "medium"
title: "MPI_Send Function: Initiating Data Transmission"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/mpi-send-function-application|mpi-send-function-application]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/parallel-programming|parallel-programming]]"
learning-time-in-minutes: 3
---
# MPI_Send Function: Initiating Data Transmission

In parallel programming, especially with MPI (Message Passing Interface), processes often need to exchange data. Point-to-point communication is the fundamental way to achieve this, where one process explicitly sends data to another. The `MPI_Send` function is your primary tool for initiating this outbound data transfer.

## What is `MPI_Send`?

`MPI_Send` is a **blocking** MPI function. This means that when you call `MPI_Send`, your program will pause and wait until the message buffer is no longer needed by the MPI system. This waiting can happen for a few reasons:

*   The message has been successfully copied from your buffer into the MPI system's internal buffer.
*   The message has been fully received by the destination process.

Understanding this blocking behavior is crucial for writing efficient parallel programs.

## Function Signature

The standard signature for `MPI_Send` looks like this:

```c
int MPI_Send(const void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm);
```

Let's break down each parameter:

*   `buf`: A pointer to the **buffer** containing the data you want to send. This is the actual data payload.
*   `count`: The **number of elements** in the buffer. This is not the total size in bytes, but the number of individual data items of the specified `datatype`.
*   `datatype`: The **type** of each element in the buffer. MPI defines standard datatypes like `MPI_INT`, `MPI_FLOAT`, `MPI_CHAR`, etc. You can also define custom datatypes.
*   `dest`: The **rank** (unique identifier) of the destination process. Ranks are typically integers starting from 0.
*   `tag`: An **integer tag** that acts like a label for the message. This allows the receiving process to selectively receive messages. If `tag` is `MPI_ANY_TAG`, it means any tag is acceptable.
*   `comm`: The **MPI communicator** that defines the set of processes that can participate in this communication. `MPI_COMM_WORLD` is the default communicator that includes all processes launched together.

## How it Works: A Practical Example

Imagine you have a parallel program with two processes, rank 0 and rank 1. Rank 0 needs to send a single integer to rank 1.

### Code Snippet (Conceptual C/C++)

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char **argv) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (size < 2) {
        fprintf(stderr, "This program requires at least 2 processes.\n");
        MPI_Abort(MPI_COMM_WORLD, 1);
    }

    if (rank == 0) {
        int data_to_send = 42; // The data to send
        printf("Rank 0 sending %d to Rank 1\n", data_to_send);
        // Send 'data_to_send' (1 element) of type MPI_INT to process with rank 1, tag 0
        MPI_Send(&data_to_send, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);
        printf("Rank 0 finished sending.\n");
    } else if (rank == 1) {
        int received_data;
        MPI_Status status; // Used to get information about the received message
        printf("Rank 1 waiting to receive...\n");
        // Receive 1 element of type MPI_INT from any sender (rank is ignored for receive), tag 0
        MPI_Recv(&received_data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, &status);
        printf("Rank 1 received %d from Rank 0\n", received_data);
    }

    MPI_Finalize();
    return 0;
}
```

### Explanation

1.  **Initialization**: `MPI_Init` starts the MPI environment, and `MPI_Comm_rank` and `MPI_Comm_size` get the current process's rank and the total number of processes.
2.  **Sender (Rank 0)**:
    *   It declares an integer `data_to_send` and initializes it to `42`.
    *   It calls `MPI_Send`.
        *   `&data_to_send`: Points to the variable holding the data.
        *   `1`: We are sending one element (the integer `42`).
        *   `MPI_INT`: The data type is an integer.
        *   `1`: The destination process has rank 1.
        *   `0`: The message tag is 0.
        *   `MPI_COMM_WORLD`: The communicator.
    *   After `MPI_Send` returns, rank 0 knows that the MPI system has taken responsibility for the data. It might not have reached rank 1 yet, but the buffer in rank 0 is now safe to reuse.
3.  **Receiver (Rank 1)**:
    *   It declares `received_data` to store the incoming value.
    *   It calls `MPI_Recv` (which we'll cover in more detail in another lesson). The crucial part here is that it's configured to receive one `MPI_INT` with tag `0`.
    *   When `MPI_Recv` returns, `received_data` will contain the value `42`.

## Important Considerations for `MPI_Send`

*   **Blocking Nature**: Remember, `MPI_Send` waits. If the receiver isn't ready or isn't calling a corresponding receive operation, your sender can get stuck. This is a common source of deadlocks in MPI programs.
*   **Buffer Safety**: Once `MPI_Send` returns, you can safely modify or reuse the buffer you sent from. The MPI library has copied the data.
*   **Matching Tags**: The `tag` parameter is vital. The receiving process must use a `MPI_Recv` call that matches the `tag` (or uses `MPI_ANY_TAG`) of the sent message to receive it.

By mastering `MPI_Send`, you've taken a significant step in understanding how processes in an MPI application can communicate and share information, forming the basis of more complex parallel algorithms.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/mpi-send-function-application|MPI Send Function Application]]
