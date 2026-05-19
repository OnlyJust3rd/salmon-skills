---
type: "medium"
title: "Coordinating Multiple Processes in Python"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/parallel-programming/microskills/multiple-process-coordination|Multiple Process Coordination]]"
---
# Coordinating Multiple Processes in Python

This lesson focuses on **understanding** how to manage and coordinate multiple processes for parallel execution in Python, a key part of implementing parallel applications. We'll explore the fundamental concepts and practical tools provided by Python's `multiprocessing` module.

## What is Process-Based Parallelism?

Process-based parallelism involves creating and running separate processes that can execute tasks concurrently. Each process has its own memory space, distinct from other processes. This isolation prevents unintended data corruption but also means that processes cannot directly share variables like threads can. Communication between processes requires explicit mechanisms.

## Why Coordinate Processes?

When you run multiple processes to speed up a task, they often need to:

*   **Communicate results:** One process might complete a calculation and need to send the result to another process for further processing or final aggregation.
*   **Synchronize actions:** Processes might need to wait for each other at certain points to ensure a correct order of operations. For example, a "producer" process might generate data that a "consumer" process then processes. The consumer must wait if the producer hasn't generated any data yet.
*   **Share limited resources:** If multiple processes need to access a shared resource (like a database connection or a file), you need a way to ensure only one process accesses it at a time to avoid conflicts.

## Python's `multiprocessing` Module for Coordination

Python's `multiprocessing` module provides tools to create and manage processes. For coordination, we'll look at two primary mechanisms:

1.  **Queues (`multiprocessing.Queue`)**: A way for processes to send and receive messages (data) to and from each other.
2.  **Locks (`multiprocessing.Lock`)**: A mechanism to control access to shared resources, ensuring only one process can acquire the lock at any given time.

### 1. Using Queues for Communication

Queues are like pipes where one process can put items in, and another process can take items out. They are thread-safe and process-safe, making them ideal for inter-process communication.

**Key Concepts:**

*   `Queue()`: Creates a new queue.
*   `put(item)`: Adds an item to the queue. This method blocks if the queue is full (if a `maxsize` was specified).
*   `get()`: Removes and returns an item from the queue. This method blocks if the queue is empty.

**Example: Producer-Consumer Scenario**

Imagine one process (the producer) generating numbers and another process (the consumer) calculating their squares.

```python
import multiprocessing
import time

def producer(queue):
    """Generates numbers and puts them into the queue."""
    for i in range(10):
        print(f"Producer: Putting {i} into queue")
        queue.put(i)
        time.sleep(0.1) # Simulate work
    queue.put(None) # Sentinel value to signal end of production

def consumer(queue):
    """Consumes numbers from the queue and processes them."""
    while True:
        item = queue.get()
        if item is None: # Check for sentinel value
            print("Consumer: Received sentinel, exiting.")
            break
        result = item * item
        print(f"Consumer: Processed {item}, result is {result}")
        time.sleep(0.2) # Simulate work

if __name__ == "__main__":
    # Create a queue
    data_queue = multiprocessing.Queue()

    # Create producer and consumer processes
    producer_process = multiprocessing.Process(target=producer, args=(data_queue,))
    consumer_process = multiprocessing.Process(target=consumer, args=(data_queue,))

    # Start the processes
    producer_process.start()
    consumer_process.start()

    # Wait for both processes to finish
    producer_process.join()
    consumer_process.join()

    print("All processes finished.")
```

**How it works:**

*   The `producer` puts numbers 0 through 9 into `data_queue`.
*   After sending all numbers, it puts `None` into the queue. This `None` acts as a "sentinel" or signal to tell the consumer that there are no more items coming.
*   The `consumer` continuously calls `queue.get()`. It processes the item if it's not `None`, and exits its loop when it receives `None`.
*   `producer_process.join()` and `consumer_process.join()` ensure the main program waits until both child processes have completed their execution.

### 2. Using Locks for Resource Protection

When multiple processes need to access a shared resource that can only be used by one at a time (e.g., writing to a single file, updating a shared counter), you use a `Lock`.

**Key Concepts:**

*   `Lock()`: Creates a lock object.
*   `acquire()`: Acquires the lock. If the lock is already acquired by another process, this call will block until the lock is released.
*   `release()`: Releases the lock, allowing another process to acquire it.

**Example: Shared Counter with a Lock**

Let's simulate multiple processes trying to increment a shared counter. Without a lock, you might get incorrect results due to race conditions.

```python
import multiprocessing
import time

def increment_counter(counter, lock):
    """Increments a shared counter safely using a lock."""
    for _ in range(1000):
        lock.acquire() # Acquire the lock before accessing the counter
        try:
            # Critical section: only one process can be here at a time
            current_value = counter.value
            # Simulate a small delay to increase the chance of race conditions
            # if the lock wasn't used.
            time.sleep(0.00001)
            counter.value = current_value + 1
        finally:
            lock.release() # Release the lock, even if an error occurs

if __name__ == "__main__":
    # Create a shared integer value
    shared_counter = multiprocessing.Value('i', 0) # 'i' for integer

    # Create a lock
    lock = multiprocessing.Lock()

    # Create multiple processes to increment the counter
    processes = []
    for _ in range(5):
        p = multiprocessing.Process(target=increment_counter, args=(shared_counter, lock))
        processes.append(p)
        p.start()

    # Wait for all processes to finish
    for p in processes:
        p.join()

    print(f"Final counter value: {shared_counter.value}")
```

**How it works:**

*   `multiprocessing.Value('i', 0)` creates a shared memory object that can hold an integer, initialized to 0.
*   `multiprocessing.Lock()` creates a lock.
*   Each process calls `lock.acquire()` before attempting to read and write `shared_counter.value`. This ensures that only one process can be inside the `try...finally` block at any given moment.
*   The `finally` block guarantees that `lock.release()` is called, even if an error occurs within the critical section. This prevents deadlocks where a lock is never released.
*   The expected final value should be 5 processes \* 1000 increments/process = 5000. Without the lock, this value would likely be less than 5000 due to race conditions.

## When to Use Which Coordination Mechanism

*   **Queues:** Use when you need to pass data or messages between processes. This is common for distributing work or collecting results.
*   **Locks:** Use when multiple processes need to access a *single shared resource* and you need to prevent them from interfering with each other. This is essential for maintaining data integrity when operations are not atomic.

By understanding and utilizing these coordination tools, you can build more robust and efficient parallel applications using Python's `multiprocessing` module.

## Supports

- [[skills/systems/high-performance-computing/parallel-programming/microskills/multiple-process-coordination|Multiple Process Coordination]]
