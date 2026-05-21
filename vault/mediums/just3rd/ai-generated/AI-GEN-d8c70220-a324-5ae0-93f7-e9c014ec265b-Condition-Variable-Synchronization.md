---
type: "medium"
title: "Condition Variables: Signaling and Waiting"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/condition-variable-synchronization|condition-variable-synchronization]]"
---
# Condition Variables: Signaling and Waiting

Condition variables are a powerful synchronization primitive used in concurrent programming to allow threads to wait for a specific condition to become true. They are often used in conjunction with mutexes to protect shared data that the condition depends on.

## When to Use Condition Variables

You'll typically use condition variables when one or more threads need to pause their execution until a certain state is reached in the shared data, and other threads are responsible for modifying that data and signaling when the state changes. This is a common pattern in problems like the Producer/Consumer problem.

## How They Work

A condition variable operates with a mutex. Threads acquire the mutex to check the condition. If the condition is not met, they atomically release the mutex and go to sleep (wait) on the condition variable. When another thread modifies the shared data and potentially makes the condition true, it signals the condition variable. This wakes up one or more waiting threads, which then re-acquire the mutex and re-check the condition.

The core operations are:

*   `wait(mutex)`: Releases the mutex and blocks the current thread until signaled.
*   `signal()`: Wakes up one thread waiting on the condition variable.
*   `broadcast()`: Wakes up all threads waiting on the condition variable.

### Important Rule: The Spurious Wakeup

It's crucial to always check the condition within a loop. Threads can sometimes wake up from a `wait()` call even if no `signal()` or `broadcast()` was issued (this is called a "spurious wakeup"). The loop ensures that the thread only proceeds if the condition is genuinely met.

```pseudocode
// Assume 'mutex' is a lock protecting 'shared_data'
// Assume 'condition' is a boolean representing the state we're waiting for

lock(mutex);
while (!condition) {
    wait(condition_variable, mutex); // Atomically releases mutex and waits
}
// Condition is now true, proceed with critical section
// ...
unlock(mutex);
```

## Practical Scenario: Bounded Buffer

Imagine a scenario with multiple producer threads adding items to a buffer and multiple consumer threads removing items. The buffer has a fixed capacity.

*   **Producers** need to wait if the buffer is full.
*   **Consumers** need to wait if the buffer is empty.

Condition variables can manage these waiting states efficiently. We'll likely need two condition variables: one for "buffer not full" (for producers) and one for "buffer not empty" (for consumers).

Let's sketch this out using pseudocode, focusing on the **producer's** logic when adding an item:

```pseudocode
// Shared buffer and its mutex
Buffer buffer;
Mutex buffer_mutex;

// Condition variable for producers to wait if buffer is full
ConditionVariable buffer_not_full_cv;

// Function for a producer thread
function producer(item):
    lock(buffer_mutex);
    // Wait if the buffer is full
    while (buffer.is_full()):
        wait(buffer_not_full_cv, buffer_mutex); // Releases buffer_mutex and waits

    // Buffer is not full, add the item
    buffer.add(item);

    // Signal consumers that there's an item available (if any are waiting)
    signal(buffer_not_empty_cv); // Assume buffer_not_empty_cv is handled elsewhere

    unlock(buffer_mutex);
```

Notice the `while (buffer.is_full())` loop. This is essential to handle spurious wakeups. If a producer thread wakes up, it *must* re-check if the buffer is indeed no longer full before proceeding.

## Practice Task

Implement a basic producer-consumer scenario in your preferred programming language (e.g., Python with `threading`, C++ with `std::thread` and `std::condition_variable`). Use a fixed-size list or array as the buffer, a mutex to protect access to the buffer, and two condition variables: one to signal when the buffer is not full, and another to signal when it's not empty.

Your implementation should:

1.  Create a shared buffer with a capacity of, say, 5.
2.  Create a few producer threads that add random numbers to the buffer.
3.  Create a few consumer threads that remove numbers from the buffer and print them.
4.  Ensure producers wait when the buffer is full.
5.  Ensure consumers wait when the buffer is empty.
6.  Use `signal()` or `broadcast()` appropriately to wake up waiting threads.

## Self-Check Questions

1.  Why is it important to always check the condition within a `while` loop after a `wait()` call?
2.  When would you use `signal()` versus `broadcast()`?
3.  What happens if a thread calls `wait()` without holding the mutex?

## Supports

- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/condition-variable-synchronization|Condition Variable Synchronization]]
