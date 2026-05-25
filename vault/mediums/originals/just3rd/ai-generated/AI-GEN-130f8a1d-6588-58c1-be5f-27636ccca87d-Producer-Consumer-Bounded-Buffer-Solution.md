---
type: "medium"
title: "Producer-Consumer Bounded-Buffer Solution with Condition Variables"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/producer-consumer-bounded-buffer-solution|producer-consumer-bounded-buffer-solution]]"
learning-time-in-minutes: 3
---
# Producer-Consumer Bounded-Buffer Solution with Condition Variables

This lesson focuses on solving the classic Producer-Consumer problem using condition variables, a fundamental synchronization primitive. Understanding this will help you manage shared data between threads that produce and consume items.

## What is the Producer-Consumer Problem?

Imagine a scenario where one or more "producers" create data items and place them into a shared buffer, while one or more "consumers" remove and process these items from the buffer. The challenge is to ensure that:

*   Producers don't add items to a full buffer.
*   Consumers don't try to remove items from an empty buffer.
*   Access to the buffer is mutually exclusive to prevent data corruption.

The "bounded-buffer" aspect means the shared buffer has a fixed size.

## Solving with Condition Variables

Condition variables, often used in conjunction with mutexes, allow threads to wait for a specific condition to become true.

1.  **Mutex:** A mutex is essential to protect the shared buffer itself, ensuring only one thread can access it at a time for adding or removing items.
2.  **Condition Variables:** We'll use two condition variables:
    *   `notFull`: Producers will wait on this condition if the buffer is full. Consumers will signal this condition when they remove an item.
    *   `notEmpty`: Consumers will wait on this condition if the buffer is empty. Producers will signal this condition when they add an item.

### How it Works (Conceptual Flow)

*   **Producer:**
    1.  Acquire the mutex.
    2.  While the buffer is full, wait on the `notFull` condition variable. This releases the mutex, allowing other threads to proceed.
    3.  Once the buffer is not full, add an item.
    4.  Signal the `notEmpty` condition variable to wake up any waiting consumers.
    5.  Release the mutex.

*   **Consumer:**
    1.  Acquire the mutex.
    2.  While the buffer is empty, wait on the `notEmpty` condition variable. This releases the mutex.
    3.  Once the buffer is not empty, remove an item.
    4.  Signal the `notFull` condition variable to wake up any waiting producers.
    5.  Release the mutex.

## Practical Example (Pseudocode)

Let's visualize this with pseudocode. Assume `buffer` is our shared array, `count` tracks the number of items, `BUFFER_SIZE` is the maximum capacity, `mutex` is a mutex object, `notFull` and `notEmpty` are condition variables.

```pseudocode
// Global variables
Buffer buffer[BUFFER_SIZE];
int count = 0;
Mutex mutex;
ConditionVariable notFull;
ConditionVariable notEmpty;

// Producer function
function producer() {
    while (true) {
        item = produce_item(); // Create a new item

        mutex.lock(); // Acquire mutex

        while (count == BUFFER_SIZE) { // While buffer is full
            notFull.wait(mutex);     // Wait for space, release mutex
        }

        buffer[count] = item;        // Add item to buffer
        count++;

        notEmpty.signal();           // Signal that buffer is not empty
        mutex.unlock();              // Release mutex
    }
}

// Consumer function
function consumer() {
    while (true) {
        mutex.lock(); // Acquire mutex

        while (count == 0) {         // While buffer is empty
            notEmpty.wait(mutex);    // Wait for an item, release mutex
        }

        item = buffer[count - 1];    // Remove item from buffer
        count--;

        notFull.signal();            // Signal that buffer is not full
        mutex.unlock();              // Release mutex

        consume_item(item);          // Process the item
    }
}
```

**Key Points:**

*   The `while` loops (`while (count == BUFFER_SIZE)` and `while (count == 0)`) are crucial. They act as re-checks after waking up from a `wait` operation. This is because multiple threads might be woken up, or the condition might have changed again before the thread re-acquires the mutex.
*   The `wait` operation atomically releases the mutex before blocking and re-acquires it before returning.

## Practice Task

Consider a scenario with a shared printer spooler (bounded buffer) where multiple print jobs are "produced" by user applications and "consumed" by the printer driver.

Implement a simplified version of the Producer-Consumer bounded-buffer problem in your preferred programming language (e.g., Python with `threading`, Java with `java.util.concurrent`, C++ with `std::thread` and `std::condition_variable`).

*   Create a producer thread that generates "print jobs" (simple integers representing page counts).
*   Create a consumer thread that "prints" these jobs (e.g., by printing to the console).
*   Use a mutex and two condition variables to manage a fixed-size buffer.

## Self-Check Questions

1.  Why is a mutex necessary when using condition variables for the Producer-Consumer problem?
2.  What happens to the mutex when a thread calls `condition_variable.wait(mutex)`?
3.  Explain the purpose of the `while` loop around the `wait` call.
4.  What is the difference between `signal()` and `broadcast()` (or `notify_one()` and `notify_all()` in some implementations)? When might you use `broadcast()`?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/producer-consumer-bounded-buffer-solution|Producer-Consumer Bounded-Buffer Solution]]
