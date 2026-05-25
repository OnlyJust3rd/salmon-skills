---
type: "medium"
title: "Understanding Inter-Process Communication (IPC) in Python"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/inter-process-communication-python|inter-process-communication-python]]"
learning-time-in-minutes: 3
---
# Understanding Inter-Process Communication (IPC) in Python

When building parallel applications, processes often need to share information. This is where Inter-Process Communication (IPC) comes in. In Python, the `multiprocessing` module provides several ways for independent processes to exchange data. This lesson focuses on understanding and implementing these communication mechanisms.

## Why IPC is Necessary

Imagine you have a parent process that needs to delegate a task to a child process and then receive the result. Or perhaps two sibling processes need to coordinate their actions. Without IPC, these processes would operate in isolation, making it impossible to share data or synchronize operations.

## Key IPC Mechanisms in `multiprocessing`

Python's `multiprocessing` module offers several IPC tools. We'll explore two fundamental ones: `Queue` and `Pipe`.

### 1. `multiprocessing.Queue`

A `Queue` is a FIFO (First-In, First-Out) data structure that allows multiple processes to safely put items into and get items out of it. It's thread-safe and process-safe, making it a robust choice for many communication scenarios.

**How it Works:**

*   **`put(item)`**: Adds `item` to the queue. This operation will block if the queue is full (if a `maxsize` was specified).
*   **`get()`**: Removes and returns an item from the queue. This operation will block if the queue is empty.
*   **`empty()`**: Returns `True` if the queue is empty, `False` otherwise.
*   **`full()`**: Returns `True` if the queue is full, `False` otherwise.

**Example: Sending Data from Parent to Child**

```python
import multiprocessing
import time

def worker(q):
    """A function that runs in a separate process."""
    print("Worker process started.")
    data = q.get() # Blocks until an item is available
    print(f"Worker received: {data}")
    time.sleep(1)
    print("Worker process finished.")

if __name__ == "__main__":
    # Create a Queue object
    message_queue = multiprocessing.Queue()

    # Create a process that will run the 'worker' function
    p = multiprocessing.Process(target=worker, args=(message_queue,))

    # Start the process
    p.start()

    # Put some data into the queue from the parent process
    message_queue.put("Hello from the parent!")

    # Wait for the worker process to finish
    p.join()

    print("Parent process finished.")
```

In this example, the parent process creates a `Queue`, starts a `worker` process, and then uses `message_queue.put()` to send a string. The `worker` process uses `message_queue.get()` to retrieve the message. The `p.join()` ensures the parent waits for the child to complete before exiting.

**Use Cases for `Queue`:**

*   Distributing tasks to a pool of worker processes.
*   Collecting results from multiple worker processes.
*   Producer-consumer patterns.

### 2. `multiprocessing.Pipe`

A `Pipe` represents two connected endpoints. Data sent from one end is received by the other. A pipe can be duplex (bidirectional) or simplex (unidirectional). By default, `Pipe()` returns a pair of connection objects representing the two ends of the pipe.

**How it Works:**

*   **`send(obj)`**: Sends an object `obj` through the connection.
*   **`recv()`**: Receives an object. This will block if no object is available.
*   **`close()`**: Closes the connection.

**Example: Bidirectional Communication**

```python
import multiprocessing
import time

def sender(conn):
    """A function to send data through a pipe."""
    print("Sender process started.")
    conn.send("Data from sender.")
    print("Sender sent data.")
    time.sleep(0.5)
    received_data = conn.recv()
    print(f"Sender received: {received_data}")
    conn.close()
    print("Sender process finished.")

def receiver(conn):
    """A function to receive data through a pipe."""
    print("Receiver process started.")
    received_data = conn.recv()
    print(f"Receiver received: {received_data}")
    conn.send("Acknowledged by receiver.")
    print("Receiver sent acknowledgment.")
    time.sleep(0.5)
    conn.close()
    print("Receiver process finished.")

if __name__ == "__main__":
    # Create a pipe. By default, it's duplex.
    parent_conn, child_conn = multiprocessing.Pipe()

    # Create a process for the sender
    p_sender = multiprocessing.Process(target=sender, args=(parent_conn,))
    # Create a process for the receiver
    p_receiver = multiprocessing.Process(target=receiver, args=(child_conn,))

    # Start the processes
    p_sender.start()
    p_receiver.start()

    # Wait for processes to finish
    p_sender.join()
    p_receiver.join()

    print("Parent process finished.")
```

In this example, `multiprocessing.Pipe()` creates two connection objects, `parent_conn` and `child_conn`. We pass one end of the pipe to each process. The `sender` process sends data and then waits to receive an acknowledgment. The `receiver` process waits to receive data and then sends an acknowledgment back.

**Use Cases for `Pipe`:**

*   When you need a direct, two-way communication channel between two specific processes.
*   Simpler scenarios where you don't need a shared, multi-producer/multi-consumer queue.

## Choosing the Right IPC Mechanism

*   Use **`Queue`** when you have multiple producers and/or multiple consumers, or when you need a robust, thread-safe, and process-safe shared data structure.
*   Use **`Pipe`** for direct, point-to-point communication between two processes, especially when you need a simple bidirectional channel.

By understanding and implementing `Queue` and `Pipe`, you can effectively enable your parallel Python applications to communicate and coordinate, leading to more powerful and efficient solutions.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/inter-process-communication-python|Inter-Process Communication (Python)]]
