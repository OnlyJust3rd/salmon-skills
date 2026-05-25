---
type: "medium"
title: "Implementing a Test-and-Set Lock"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/test-and-set-lock-implementation|test-and-set-lock-implementation]]"
learning-time-in-minutes: 2
---
# Implementing a Test-and-Set Lock

In concurrent programming, a critical section is a piece of code that can only be executed by one thread at a time. To prevent race conditions and ensure data integrity, we need mechanisms to protect these critical sections. The Test-and-Set (TAS) instruction is a fundamental hardware primitive used to build such synchronization primitives.

## What is Test-and-Set?

Test-and-Set is an atomic instruction. This means it executes as a single, indivisible operation. It typically takes a boolean variable (representing a lock) as input. It performs two actions:

1.  Reads the current value of the lock.
2.  Sets the lock to `true` (locked).

The instruction then returns the original value of the lock (the value *before* it was set to `true`).

*   If the original value was `false`, it means the lock was free, and the thread successfully acquired it.
*   If the original value was `true`, it means the lock was already held by another thread, and the current thread failed to acquire it.

## Protecting a Critical Section with Test-and-Set

We can implement a simple spinlock using Test-and-Set. A spinlock is a type of lock where a thread that fails to acquire the lock repeatedly "spins" (loops) and tries again until it succeeds.

Here's how it works in pseudocode:

```pseudocode
// Global variable representing the lock
boolean lock = false;

// Function to acquire the lock
function acquire_lock():
  while true:
    // Atomically test if lock is false and set it to true
    original_value = TestAndSet(lock);

    // If the original value was false, the lock was acquired
    if original_value == false:
      break; // Exit the loop, lock acquired

// Function to release the lock
function release_lock(lock):
  lock = false; // Simply set the lock back to false

// Example of using the lock for a critical section
function update_shared_resource(data):
  acquire_lock(); // Try to get the lock

  // --- Critical Section Start ---
  // Only one thread can be here at a time
  // Example: increment a counter
  counter = counter + 1;
  print("Counter updated to: ", counter);
  // --- Critical Section End ---

  release_lock(lock); // Release the lock so others can enter
```

In this pseudocode:

*   `TestAndSet(lock)` is the atomic instruction.
*   The `while true` loop ensures that if a thread fails to acquire the lock (because `original_value` was `true`), it keeps trying. This is the "spinning" part.
*   Once `acquire_lock` returns, the thread knows it has exclusive access to the critical section.
*   `release_lock` simply makes the lock available again.

## Practical Scenario

Imagine multiple threads are trying to update a shared bank account balance. Without a lock, two threads might read the balance simultaneously, both add their transaction amount, and then write back their new balance. This could lead to lost updates. Using a Test-and-Set lock ensures that only one thread can modify the balance at any given moment.

## Practice Task

Implement the `acquire_lock` and `release_lock` functions using a hypothetical `TestAndSet` primitive in a language of your choice (or pseudocode). Then, simulate two threads attempting to increment a shared counter.

## Self-Check Questions

1.  What makes the `TestAndSet` instruction crucial for implementing locks in concurrent systems?
2.  Describe a scenario where using a Test-and-Set lock would prevent data corruption.
3.  What is the potential downside of a thread "spinning" while waiting for a lock?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/test-and-set-lock-implementation|Test-and-Set Lock Implementation]]
