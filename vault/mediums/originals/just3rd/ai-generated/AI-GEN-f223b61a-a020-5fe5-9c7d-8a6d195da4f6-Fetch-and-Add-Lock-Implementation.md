---
type: "medium"
title: "Fetch-and-Add Lock Implementation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-lock-implementation|fetch-and-add-lock-implementation]]"
learning-time-in-minutes: 3
---
# Fetch-and-Add Lock Implementation

This lesson focuses on using the Fetch-and-Add atomic operation to implement a lock, a crucial technique for protecting critical sections in concurrent programming.

## Understanding Fetch-and-Add Locks

In concurrent systems, a critical section is a piece of code that accesses shared resources. To prevent race conditions (where the outcome depends on the unpredictable timing of multiple threads accessing the same resource), we need synchronization mechanisms. One such mechanism is a lock.

The Fetch-and-Add operation is an atomic instruction provided by many processors. Atomicity means that the operation completes entirely without interruption. Fetch-and-Add, often abbreviated as `FAA(variable, increment)`, does two things atomically:
1. It reads the current value of `variable`.
2. It adds `increment` to `variable` and stores the new value back into `variable`.
3. It returns the *original* value of `variable` *before* the addition.

We can leverage this to create a simple lock. Imagine a shared integer variable, say `lock_value`, initialized to 0.

*   A thread trying to acquire the lock will perform `FAA(lock_value, 1)`.
*   If the returned value is 0, it means this thread was the first to increment `lock_value` from 0 to 1. It successfully acquired the lock.
*   If the returned value is 1 (or greater), it means another thread already holds the lock (or is trying to acquire it), so the current thread must wait.

To release the lock, a thread simply needs to decrement `lock_value`, for example, by performing `FAA(lock_value, -1)` or `lock_value = lock_value - 1`. Since `lock_value` will be 1 when the lock is held, decrementing it will set it back to 0, allowing another waiting thread to potentially acquire the lock.

## Pseudocode Example

Let's illustrate this with pseudocode. Assume we have a shared variable `lock_value` initialized to 0 and a shared resource (e.g., a counter).

```pseudocode
// Shared variable, initialized to 0
VAR lock_value = 0

// Shared resource
VAR shared_counter = 0

// Function to acquire the lock
FUNCTION acquire_lock()
  // Atomically fetch and add 1 to lock_value
  // If the returned value is 0, we acquired the lock
  WHILE FAA(lock_value, 1) != 0
    // Spin-wait: keep trying until the lock is acquired
    // In a real system, this might involve yielding the CPU
    // to avoid excessive busy-waiting.
  END WHILE
END FUNCTION

// Function to release the lock
FUNCTION release_lock()
  // Atomically fetch and add -1 to lock_value
  // This makes the lock available for another thread.
  FAA(lock_value, -1)
END FUNCTION

// Thread execution
FUNCTION thread_task()
  // ... other code ...

  // Enter critical section
  acquire_lock()

  // --- Critical Section Start ---
  // Access the shared resource safely
  shared_counter = shared_counter + 1
  PRINT "Shared counter is now: " + shared_counter
  // --- Critical Section End ---

  // Exit critical section
  release_lock()

  // ... other code ...
END FUNCTION
```

In this example, `FAA(lock_value, 1)` returns the value *before* the increment. So, the first thread to call it will get 0, increment `lock_value` to 1, and proceed. Any subsequent thread calling `FAA(lock_value, 1)` will get 1 (or more, if multiple threads arrive quickly), and will therefore loop, retrying until `lock_value` becomes 0 again.

## Practice Task

Imagine a scenario where multiple threads are trying to update a single shared variable that stores the total number of successful transactions.

Write pseudocode for a `TransactionProcessor` that uses a Fetch-and-Add lock to ensure that only one thread updates the `transaction_count` at a time.

```pseudocode
// Initialize a lock value and a transaction count
VAR lock_value = 0
VAR transaction_count = 0

// Implement acquire_lock() and release_lock() using Fetch-and-Add (FAA)

// Simulate processing a single transaction
FUNCTION process_transaction()
  // Acquire the lock
  // ... your acquire_lock() logic here ...

  // --- Critical Section ---
  // Increment the shared transaction count
  transaction_count = transaction_count + 1
  PRINT "Transaction processed. Total: " + transaction_count
  // --- End Critical Section ---

  // Release the lock
  // ... your release_lock() logic here ...
END FUNCTION

// Assume multiple threads will call process_transaction() concurrently.
```

## Self-Check Questions

1.  What is the primary purpose of an atomic operation like Fetch-and-Add in the context of locks?
2.  In the `acquire_lock` function, what value returned by `FAA(lock_value, 1)` signifies that the lock has been successfully acquired?
3.  Why is it important for `FAA` to return the *original* value of the variable before the increment?
4.  What happens if a thread calls `release_lock()` but it doesn't hold the lock? (Consider the `lock_value` in your answer).

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-lock-implementation|Fetch-and-Add Lock Implementation]]
