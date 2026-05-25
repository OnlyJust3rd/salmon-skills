---
type: "medium"
title: "Applying MPI_Recv for Data Reception"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/mpi-receive-function-application|mpi-receive-function-application]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/parallel-programming|parallel-programming]]"
learning-time-in-minutes: 4
---
# Applying MPI_Recv for Data Reception

In parallel programming with MPI, processes often need to exchange data. While sending data is crucial, so is receiving it. This lesson focuses on the `MPI_Recv` function, a fundamental tool for accepting these data transmissions. Understanding how to properly implement `MPI_Recv` is key to successful point-to-point communication.

## The Role of MPI_Recv

`MPI_Recv` is the counterpart to `MPI_Send`. When one process sends data using `MPI_Send`, another process must be ready to receive it using `MPI_Recv`. This ensures that data doesn't get lost and that the communication flow is managed correctly.

Think of it like a postal service: `MPI_Send` is like putting a letter in the mailbox, and `MPI_Recv` is like picking up mail from your own mailbox. Both actions are necessary for the letter to reach its destination.

## Understanding MPI_Recv Parameters

The `MPI_Recv` function has several parameters that are crucial for its correct operation:

```c
int MPI_Recv(void *buf, int count, MPI_Datatype datatype, int source, int tag,
             MPI_Comm comm, MPI_Status *status);
```

Let's break down each parameter:

*   `buf`: This is a pointer to the memory buffer where the received data will be stored. You need to ensure this buffer is large enough to hold the data being sent.
*   `count`: The number of elements to receive. This should match the `count` used by the sender.
*   `datatype`: The MPI data type of each element in the buffer (e.g., `MPI_INT` for integers, `MPI_DOUBLE` for doubles). This must also match the sender's `datatype`.
*   `source`: The rank of the process from which you expect to receive the message. You can use `MPI_ANY_SOURCE` to receive a message from any process.
*   `tag`: A message tag that helps differentiate messages. The receiver's `tag` must match the sender's `tag` for the message to be received. You can use `MPI_ANY_TAG` to receive a message with any tag.
*   `comm`: The MPI communicator. This identifies the group of processes that can communicate with each other. Usually, this will be `MPI_COMM_WORLD`.
*   `status`: A pointer to an `MPI_Status` object. This object will be filled with information about the received message, such as the actual sender's rank and the number of elements received.

## A Practical Example

Let's illustrate with a simple C example. Process 0 will send an integer to Process 1, and Process 1 will receive it.

**Process 0 (Sender):**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (rank == 0) {
        int data_to_send = 42;
        MPI_Send(&data_to_send, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);
        printf("Process 0 sent: %d\n", data_to_send);
    } else if (rank == 1) {
        // This part will be shown in the receiver example below
    }

    MPI_Finalize();
    return 0;
}
```

**Process 1 (Receiver):**

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (rank == 1) {
        int received_data;
        MPI_Status status;
        // Expecting data from process 0, with tag 0
        MPI_Recv(&received_data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, &status);
        printf("Process 1 received: %d\n", received_data);
    } else if (rank == 0) {
        // This part was shown in the sender example
    }

    MPI_Finalize();
    return 0;
}
```

**Explanation:**

*   Process 0 initializes MPI, gets its rank, and if it's rank 0, it declares an integer `data_to_send`, and then sends it to process 1. The parameters `1, MPI_INT, 1, 0, MPI_COMM_WORLD` specify that it's sending 1 integer, to process with rank 1, using tag 0, within the `MPI_COMM_WORLD` communicator.
*   Process 1 also initializes MPI and gets its rank. If it's rank 1, it declares `received_data` to store the incoming integer. It then calls `MPI_Recv`. The parameters `&received_data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, &status` indicate that it's expecting to receive 1 integer, from process with rank 0, with tag 0, from `MPI_COMM_WORLD`. The `status` variable will be populated with information about the received message.

When you run this program with two processes (e.g., `mpiexec -n 2 ./your_program`), you will see output from both processes indicating that the data was successfully sent and received.

## Important Considerations for MPI_Recv

*   **Blocking Nature:** By default, `MPI_Recv` is a *blocking* operation. This means that the program execution will pause at the `MPI_Recv` call until a matching message is received. This is a critical concept. If the sender never sends a message, or the `source` or `tag` don't match, your program will hang indefinitely.
*   **Matching Send and Receive:** The `source` and `tag` parameters are vital for ensuring that the correct message is received by the correct process. Mismatched `source` or `tag` values will prevent a successful receive.
*   **Buffer Size:** Always ensure that the buffer provided to `MPI_Recv` is large enough to hold the data being sent. If the received data is larger than the buffer, it will lead to a buffer overflow and undefined behavior.
*   **`MPI_Status`:** The `MPI_Status` object is useful for getting more information about the received message. For example, you can use `MPI_Get_count` to determine how many elements were actually received, which is particularly useful when using wildcard tags or sources.

By understanding and correctly applying `MPI_Recv` with its parameters and considering its blocking nature, you can effectively implement point-to-point communication in your MPI applications.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/mpi-receive-function-application|MPI Receive Function Application]]
