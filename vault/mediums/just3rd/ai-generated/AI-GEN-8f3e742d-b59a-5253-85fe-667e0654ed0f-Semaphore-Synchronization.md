---
type: "medium"
title: "Semaphore Synchronization"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/semaphore-synchronization|semaphore-synchronization]]"
---
# Semaphore Synchronization

Semaphores are fundamental synchronization primitives used to control access to a shared resource by multiple threads. They act as counters that manage the number of threads that can access a resource concurrently.

## What is a Semaphore?

A semaphore is essentially an integer variable that is accessed only through two atomic operations: `wait()` (also known as `P()` or `down()`) and `signal()` (also known as `V()` or `up()`).

*   **`wait(semaphore)`**: If the semaphore's value is greater than zero, it decrements the value and the thread continues. If the semaphore's value is zero, the thread blocks until the semaphore's value becomes greater than zero.
*   **`signal(semaphore)`**: Increments the semaphore's value. If there are threads blocked on this semaphore, one of them is unblocked.

Semaphores are typically initialized with a non-negative integer value.

*   **Binary Semaphore**: Initialized to 1. Can be used for mutual exclusion, ensuring only one thread accesses a critical section at a time.
*   **Counting Semaphore**: Initialized to a value greater than 1. Can be used to control access to a pool of resources.

## Practical Scenario: Bounded Buffer

Imagine a scenario where a "producer" thread generates data and a "consumer" thread processes it. They share a fixed-size buffer. The producer needs to add items to the buffer, and the consumer needs to remove them.

To solve this without issues like overwriting data or reading empty slots, we can use semaphores:

1.  **`empty_slots`**: A counting semaphore initialized to the buffer's capacity (e.g., 10). It tracks the number of available empty slots. The producer waits on this.
2.  **`full_slots`**: A counting semaphore initialized to 0. It tracks the number of items currently in the buffer. The consumer waits on this.
3.  **`mutex`**: A binary semaphore initialized to 1. It provides mutual exclusion for accessing the buffer itself, preventing race conditions when both producer and consumer try to modify it simultaneously.

Here's how it works:

*   **Producer**:
    1.  Performs `wait(empty_slots)`: Waits if the buffer is full.
    2.  Performs `wait(mutex)`: Acquires exclusive access to the buffer.
    3.  Adds an item to the buffer.
    4.  Performs `signal(mutex)`: Releases exclusive access.
    5.  Performs `signal(full_slots)`: Increments the count of items in the buffer.

*   **Consumer**:
    1.  Performs `wait(full_slots)`: Waits if the buffer is empty.
    2.  Performs `wait(mutex)`: Acquires exclusive access to the buffer.
    3.  Removes an item from the buffer.
    4.  Performs `signal(mutex)`: Releases exclusive access.
    5.  Performs `signal(empty_slots)`: Increments the count of empty slots.

This setup ensures that the producer never tries to add to a full buffer and the consumer never tries to remove from an empty one, and that buffer modifications are atomic.

## Practice Task

Consider the bounded buffer problem described above. Write pseudocode for both the producer and consumer threads using semaphores. Assume you have a buffer data structure (e.g., an array or queue) and functions to add (`buffer_add(item)`) and remove (`buffer_remove()`) items.

## Self-Check Questions

1.  What is the primary role of the `mutex` semaphore in the bounded buffer problem?
2.  Why is it important for semaphore operations (`wait` and `signal`) to be atomic?
3.  How would you modify the initialization of the `empty_slots` and `full_slots` semaphores if the buffer capacity was 5 instead of 10?

## Supports

- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/semaphore-synchronization|Semaphore Synchronization]]
