---
type: "medium"
title: "Building a Simple MPI Point-to-Point Application"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/parallel-programming/microskills/basic-parallel-program-construction|basic-parallel-program-construction]]"
---
# Building a Simple MPI Point-to-Point Application

This lesson focuses on the practical construction of a basic parallel application using Message Passing Interface (MPI) point-to-point communication. We'll move from understanding the concepts to actually building a small program.

## The Goal: Simple Data Exchange

Our goal is to create a parallel program where one process (the "sender") sends a piece of data to another process (the "receiver"). This is the most fundamental form of point-to-point communication.

## Key MPI Concepts for this Task

Before we dive into code, let's quickly review the essential MPI functions we'll use:

*   **`MPI_Init(int *argc, char ***argv)`**: Initializes the MPI environment. This must be the first MPI function called in your program.
*   **`MPI_Finalize(void)`**: Cleans up the MPI environment. This must be the last MPI function called.
*   **`MPI_Comm_size(MPI_Comm comm, int *size)`**: Gets the total number of processes in a communicator.
*   **`MPI_Comm_rank(MPI_Comm comm, int *rank)`**: Gets the rank (unique identifier) of the calling process within a communicator. Ranks are 0-indexed.
*   **`MPI_Send(const void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm)`**: Sends data from a buffer.
    *   `buf`: The data to send.
    *   `count`: The number of elements in the buffer.
    *   `datatype`: The type of data (e.g., `MPI_INT` for integers).
    *   `dest`: The rank of the destination process.
    *   `tag`: A user-defined message identifier. Helps distinguish messages.
    *   `comm`: The communicator.
*   **`MPI_Recv(void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Status *status)`**: Receives data into a buffer.
    *   `buf`: The buffer to store received data.
    *   `count`: The maximum number of elements to receive.
    *   `datatype`: The type of data.
    *   `source`: The rank of the sending process. `MPI_ANY_SOURCE` can be used to receive from any process.
    *   `tag`: The message tag. `MPI_ANY_TAG` can be used to receive any tag.
    *   `comm`: The communicator.
    *   `status`: (Optional) MPI status object that provides information about the received message.
*   **`MPI_Comm_WORLD`**: The default communicator that includes all processes launched.

## Step-by-Step Construction

We'll build a simple C program that demonstrates sending an integer from process 0 to process 1.

### Step 1: Setup and Initialization

Every MPI program needs to start with `MPI_Init` and end with `MPI_Finalize`. We also need to get our process's rank and the total number of processes.

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    int rank, size;

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    // ... rest of the code ...

    MPI_Finalize();
    return 0;
}
```

### Step 2: Define Sender and Receiver Logic

We'll use the `rank` variable to decide which part of the program to execute.

*   **Process 0 (Sender)**: Will define a value, send it to process 1.
*   **Process 1 (Receiver)**: Will be ready to receive the value from process 0.

We need to ensure we have at least two processes for this to work.

```c
    if (size < 2) {
        if (rank == 0) {
            printf("This program requires at least 2 processes.\n");
        }
        MPI_Finalize();
        return 1;
    }

    if (rank == 0) {
        // Sender logic
    } else if (rank == 1) {
        // Receiver logic
    }
```

### Step 3: Implement Sending (Rank 0)

Process 0 will declare an integer, assign it a value, and then use `MPI_Send`.

```c
    if (rank == 0) {
        int data_to_send = 42;
        int dest_rank = 1;
        int tag = 0; // A simple tag

        printf("Process 0: Sending value %d to process 1.\n", data_to_send);
        MPI_Send(&data_to_send, 1, MPI_INT, dest_rank, tag, MPI_COMM_WORLD);
    }
```

*   We are sending `1` element (`count=1`) of type `MPI_INT`.
*   The destination is `dest_rank` (which is 1).
*   We use `tag=0` to identify this specific message.

### Step 4: Implement Receiving (Rank 1)

Process 1 needs to prepare a buffer to receive the data and then call `MPI_Recv`.

```c
    else if (rank == 1) {
        int received_data;
        int source_rank = 0;
        int tag = 0; // Must match the sender's tag

        printf("Process 1: Waiting to receive data from process 0.\n");
        MPI_Recv(&received_data, 1, MPI_INT, source_rank, tag, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        // MPI_STATUS_IGNORE means we don't need information about the received message

        printf("Process 1: Received value %d from process 0.\n", received_data);
    }
```

*   We provide `&received_data` as the buffer.
*   We expect `1` element of `MPI_INT`.
*   We are specifically waiting for data from `source_rank` 0 with `tag` 0. If we used `MPI_ANY_SOURCE` or `MPI_ANY_TAG`, we could receive from multiple sources or any tag.

### Step 5: Putting It All Together (Complete Code)

Here's the complete C code for our simple point-to-point communication example:

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    int rank, size;

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (size < 2) {
        if (rank == 0) {
            printf("This program requires at least 2 processes.\n");
        }
        MPI_Finalize();
        return 1;
    }

    if (rank == 0) {
        // Sender logic
        int data_to_send = 42;
        int dest_rank = 1;
        int tag = 0;

        printf("Process %d: Sending value %d to process %d.\n", rank, data_to_send, dest_rank);
        MPI_Send(&data_to_send, 1, MPI_INT, dest_rank, tag, MPI_COMM_WORLD);
    } else if (rank == 1) {
        // Receiver logic
        int received_data;
        int source_rank = 0;
        int tag = 0;

        printf("Process %d: Waiting to receive data from process %d.\n", rank, source_rank);
        MPI_Recv(&received_data, 1, MPI_INT, source_rank, tag, MPI_COMM_WORLD, MPI_STATUS_IGNORE);

        printf("Process %d: Received value %d from process %d.\n", rank, received_data, source_rank);
    }

    MPI_Finalize();
    return 0;
}
```

### Step 6: Compilation and Execution

To compile this, you'll need an MPI implementation installed (like Open MPI or MPICH).

1.  **Save the code**: Save the code above as `point_to_point.c`.
2.  **Compile**: Use an MPI compiler wrapper.
    ```bash
    mpicc point_to_point.c -o point_to_point
    ```
3.  **Run**: Use `mpirun` or `mpiexec` to launch multiple processes. We'll launch 2 processes.
    ```bash
    mpirun -np 2 ./point_to_point
    ```

### Expected Output

The output might appear interleaved, but you should see messages from both processes indicating the send and receive operations.

```
Process 0: Sending value 42 to process 1.
Process 1: Waiting to receive data from process 0.
Process 1: Received value 42 from process 0.
```
*(Note: The exact order of the first two lines might vary depending on how the scheduler runs the processes)*

## Key Takeaways for Basic Construction

*   **Initialization and Finalization**: Always start with `MPI_Init` and end with `MPI_Finalize`.
*   **Rank and Size**: Use `MPI_Comm_rank` and `MPI_Comm_size` to understand your process's identity and the parallel environment.
*   **Conditional Logic**: Use the process `rank` to control which code paths are executed.
*   **Sender/Receiver Pairing**: `MPI_Send` and `MPI_Recv` are partners. They need to agree on the destination/source, data type, count, and critically, the `tag`.
*   **Tags**: Tags are crucial for matching messages. If a receiver is waiting for tag `X` from process `Y`, and the sender sends with tag `Y` to process `X`, they won't communicate unless tags match.
*   **Blocking Operations**: By default, `MPI_Send` and `MPI_Recv` are blocking. `MPI_Send` doesn't return until the data has been successfully transferred (or buffered). `MPI_Recv` doesn't return until the message is received.

This exercise provides a foundational understanding of constructing simple MPI applications using point-to-point communication. You've successfully sent data between processes, a core building block for more complex parallel programs.

## Supports

- [[skills/systems/high-performance-computing/parallel-programming/microskills/basic-parallel-program-construction|Basic Parallel Program Construction]]
