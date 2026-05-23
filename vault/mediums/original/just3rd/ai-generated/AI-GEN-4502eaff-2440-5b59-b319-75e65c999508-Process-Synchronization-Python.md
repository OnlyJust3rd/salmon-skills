---
type: "medium"
title: "Process Synchronization in Python"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/high-performance-computing/parallel-programming/microskills/process-synchronization-python|process-synchronization-python]]"
learning-time-in-minutes: 3
---
# Process Synchronization in Python

When multiple processes run concurrently, they often need to access shared resources or coordinate their actions. Without proper control, this can lead to race conditions and unpredictable behavior. Process synchronization mechanisms ensure that these concurrent processes interact in a controlled and orderly manner, preventing data corruption and ensuring the correct execution of your parallel applications.

## The Problem: Race Conditions

Imagine two processes, Process A and Process B, both trying to increment a shared counter variable.

1.  **Initial state:** `counter = 0`
2.  **Process A reads `counter`:** `value = 0`
3.  **Process B reads `counter`:** `value = 0`
4.  **Process A increments its local value:** `value = 1`
5.  **Process B increments its local value:** `value = 1`
6.  **Process A writes `value` back to `counter`:** `counter = 1`
7.  **Process B writes `value` back to `counter`:** `counter = 1`

The expected result after two increments should be `2`, but due to the interleaving of operations, the final `counter` value is `1`. This is a classic **race condition**.

## Synchronization Mechanisms in `multiprocessing`

Python's `multiprocessing` module provides several tools to handle synchronization. The most common ones for process synchronization are:

*   `Lock`
*   `RLock`
*   `Semaphore`
*   `Event`
*   `Condition`
*   `Barrier`

Let's focus on `Lock` as a fundamental building block.

### 1. Locks (`multiprocessing.Lock`)

A `Lock` is a primitive synchronization object that can be in one of two states: **locked** or **unlocked**. It's like a key to a shared resource. Only one process can hold the lock at any given time.

*   **`acquire()`**: A process calls `acquire()` to obtain the lock. If the lock is already held by another process, `acquire()` will block (wait) until the lock is released.
*   **`release()`**: The process holding the lock calls `release()` to give it up, allowing another waiting process to acquire it.

#### Example: Using `Lock` for a Shared Counter

Let's revisit the counter example, but this time using a `Lock`.

```python
import multiprocessing
import time

def increment_counter(counter, lock):
    for _ in range(100000):
        lock.acquire() # Acquire the lock before accessing the shared resource
        try:
            # Critical section: code that accesses shared resources
            current_value = counter.value
            current_value += 1
            counter.value = current_value
        finally:
            lock.release() # Always release the lock, even if errors occur

if __name__ == "__main__":
    # Using a Value object from multiprocessing to share a variable
    # 'i' is the type code for an integer
    shared_counter = multiprocessing.Value('i', 0)
    lock = multiprocessing.Lock()

    processes = []
    num_processes = 4

    for _ in range(num_processes):
        p = multiprocessing.Process(target=increment_counter, args=(shared_counter, lock))
        processes.append(p)
        p.start()

    for p in processes:
        p.join() # Wait for all processes to complete

    print(f"Final counter value: {shared_counter.value}")
```

**How it works:**

1.  We create a shared `Value` to hold our counter and a `Lock`.
2.  Each process, before trying to read and update the `shared_counter`, calls `lock.acquire()`.
3.  If another process is already inside the critical section (between `acquire()` and `release()`), the current process will wait at `lock.acquire()`.
4.  Once a process finishes its work within the critical section, it calls `lock.release()`. This allows one of the waiting processes to acquire the lock and proceed.
5.  The `try...finally` block is crucial. It ensures that the `lock.release()` is always called, even if an exception occurs within the critical section. This prevents deadlocks where a lock is never released.

**Output of the code:**

```
Final counter value: 400000
```

The `shared_counter.value` is now the correct sum of increments from all processes, demonstrating that the `Lock` successfully prevented race conditions.

### When to Use Locks:

*   When multiple processes need to read and write to the same shared memory location (like variables, files, or database records).
*   When the order of operations on a shared resource is critical and must be sequential for a subset of operations.

### Other Synchronization Primitives (Briefly):

*   **`RLock` (Reentrant Lock):** Similar to `Lock`, but can be acquired multiple times by the same process. Useful in recursive functions.
*   **`Semaphore`:** Allows a specific number of processes to access a resource concurrently. Useful for managing a pool of limited resources.
*   **`Event`:** A simple flag that one process can set and others can wait for. Good for signaling between processes.
*   **`Condition`:** Builds upon `Lock`. Allows processes to wait until a certain condition is met. A process can notify others when the condition might have changed.
*   **`Barrier`:** Synchronizes a fixed number of processes at a specific point. All processes must reach the barrier before any can proceed.

Understanding and correctly implementing process synchronization mechanisms is fundamental to building robust and reliable parallel applications using Python's `multiprocessing`.

## Supports

- [[skills/computing/systems-infrastructure/high-performance-computing/parallel-programming/microskills/process-synchronization-python|Process Synchronization (Python)]]
