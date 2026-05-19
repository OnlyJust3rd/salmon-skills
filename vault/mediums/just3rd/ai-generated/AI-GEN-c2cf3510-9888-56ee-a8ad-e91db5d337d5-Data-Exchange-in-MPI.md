---
type: "medium"
title: "Data Exchange in MPI"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/parallel-programming/microskills/data-exchange-in-mpi|Data Exchange in MPI]]"
---
# Data Exchange in MPI

In parallel programming, getting different processes to talk to each other is crucial. Message Passing Interface (MPI) provides fundamental ways for these processes to exchange data. This lesson focuses on understanding how processes send and receive data from each other, which is a core part of implementing communication in MPI.

## The Basics of Point-to-Point Communication

Point-to-point communication in MPI refers to a direct exchange of data between exactly two processes: a sender and a receiver. Imagine one process holding a piece of information and wanting to give it to another specific process. MPI provides functions to make this happen reliably.

The two primary operations for point-to-point communication are:

*   **Sending:** The process that has data to send uses a send operation.
*   **Receiving:** The process that expects to get data uses a receive operation.

### Key MPI Functions for Data Exchange

MPI offers several functions for sending and receiving, each with slightly different behaviors. For understanding the core mechanics, we'll focus on two fundamental pairs:

1.  **`MPI_Send` and `MPI_Recv` (Blocking)**
2.  **`MPI_Isend` and `MPI_Irecv` (Non-blocking)**

Let's explore these.

#### Blocking Communication (`MPI_Send` and `MPI_Recv`)

**`MPI_Send`:** This function sends data from one process to another. When you call `MPI_Send`, your process will **block** (wait) until the message has been successfully transferred to the receive buffer of the destination process. This means your program execution pauses at this line until the send is complete.

**`MPI_Recv`:** This function receives data from another process. When you call `MPI_Recv`, your process will **block** until a message is available from the specified source and can be placed into the receive buffer.

Here's a simplified look at their signatures (the full signatures have more arguments for error handling, etc.):

```c
int MPI_Send(void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm);
int MPI_Recv(void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Status *status);
```

*   `buf`: The buffer where the data is stored (for sending) or where the received data will be placed (for receiving).
*   `count`: The number of elements of the given `datatype` to send or receive.
*   `datatype`: The MPI data type of the elements (e.g., `MPI_INT`, `MPI_DOUBLE`).
*   `dest` (for `MPI_Send`): The rank (identifier) of the destination process.
*   `source` (for `MPI_Recv`): The rank of the sending process. `MPI_ANY_SOURCE` can be used to receive from any process.
*   `tag`: An integer value that can be used to distinguish between different types of messages. This is very useful for matching sends and receives.
*   `comm`: The MPI communicator, which defines the group of processes involved in the communication.
*   `status` (for `MPI_Recv`): An output parameter that will contain information about the received message, such as the source and tag.

**Example Scenario (Conceptual):**

Imagine two processes, Process 0 and Process 1. Process 0 wants to send the integer `42` to Process 1.

*   **Process 0 (Sender):**
    *   Prepare the data: `int my_data = 42;`
    *   Call `MPI_Send(&my_data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);`
        *   Send `1` element of type `MPI_INT`.
        *   To process with rank `1`.
        *   With tag `0`.
        *   In the `MPI_COMM_WORLD` communicator.
    *   Process 0 will wait here until Process 1 has successfully received the data.

*   **Process 1 (Receiver):**
    *   Prepare a buffer to receive: `int received_data;`
    *   Call `MPI_Recv(&received_data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);`
        *   Receive `1` element of type `MPI_INT`.
        *   From process with rank `0`.
        *   Matching tag `0`.
        *   Into the `received_data` buffer.
        *   We ignore the status information for simplicity here.
    *   Process 1 will wait here until Process 0 has sent the data. Once received, `received_data` will be `42`.

#### Non-Blocking Communication (`MPI_Isend` and `MPI_Irecv`)

Blocking communication is simple but can be inefficient because one process has to wait for the other. Non-blocking communication allows processes to continue executing other tasks while the communication happens in the background.

**`MPI_Isend` (Immediate Send):** Initiates a send operation and returns **immediately**, even if the message has not yet been sent.

**`MPI_Irecv` (Immediate Receive):** Initiates a receive operation and returns **immediately**, even if no message has arrived yet.

These functions return an `MPI_Request` object. You must later use `MPI_Wait` or `MPI_Test` to check if the operation is complete and to finalize it.

Here are their signatures (simplified):

```c
int MPI_Isend(void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm, MPI_Request *request);
int MPI_Irecv(void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Request *request);
```

*   `request`: An output parameter that will hold the request object for this non-blocking operation.

**How `MPI_Isend`/`MPI_Irecv` work with `MPI_Wait`:**

After initiating a non-blocking send or receive, your program can do other work. When you need to ensure the operation is finished, you use `MPI_Wait`.

```c
int MPI_Wait(MPI_Request *request, MPI_Status *status);
```

`MPI_Wait` blocks until the operation associated with the given `request` is complete.

**Example Scenario (Conceptual):**

Consider a scenario where Process 0 needs to send data to Process 1 and then perform some local computation before Process 1 actually receives it.

*   **Process 0 (Sender):**
    *   Prepare data: `int my_data = 100;`
    *   Initiate send: `MPI_Request send_request; MPI_Isend(&my_data, 1, MPI_INT, 1, 1, MPI_COMM_WORLD, &send_request);`
    *   **Now Process 0 can do other work.** For example:
        *   `printf("Process 0 doing some local calculation...\n");`
        *   (More computation here)
    *   When Process 0 needs to be sure the data is sent (or if it needs to reuse `my_data` buffer for something else), it waits:
        *   `MPI_Wait(&send_request, MPI_STATUS_IGNORE);`

*   **Process 1 (Receiver):**
    *   Prepare buffer: `int received_data;`
    *   Initiate receive: `MPI_Request recv_request; MPI_Irecv(&received_data, 1, MPI_INT, 0, 1, MPI_COMM_WORLD, &recv_request);`
    *   **Now Process 1 can do other work.** For example:
        *   `printf("Process 1 processing other tasks...\n");`
        *   (More computation here)
    *   When Process 1 needs the data, it waits:
        *   `MPI_Wait(&recv_request, MPI_STATUS_IGNORE);`
        *   Now `received_data` holds the value sent by Process 0.

## Understanding Tags and Sources/Destinations

*   **Tags:** Tags are like message labels. They allow a process to receive a specific message from a specific sender among potentially many messages waiting. If Process 0 sends two different messages to Process 1, Process 1 can use different tags to receive them independently.
*   **Sources and Destinations:** These specify which process is sending or receiving. Using `MPI_ANY_SOURCE` in `MPI_Recv` is very common when a process might receive messages from multiple other processes and doesn't care which one sends it, as long as it matches the tag.

## Practice and Next Steps

To truly understand data exchange, you need to write and run MPI programs.

1.  **Start Simple:** Write a program where Process 0 sends a single integer to Process 1, and Process 1 prints it.
2.  **Use Tags:** Modify your program so Process 0 sends two different integers with different tags, and Process 1 receives them using the correct tags.
3.  **Experiment with Non-blocking:** Implement the same send/receive logic using `MPI_Isend` and `MPI_Irecv` along with `MPI_Wait`. Observe if your program's behavior changes.

Mastering point-to-point communication is the first step towards building complex parallel applications. It lays the groundwork for more advanced MPI features and understanding how processes cooperate to solve larger problems.

## Supports

- [[skills/systems/high-performance-computing/parallel-programming/microskills/data-exchange-in-mpi|Data Exchange in MPI]]
