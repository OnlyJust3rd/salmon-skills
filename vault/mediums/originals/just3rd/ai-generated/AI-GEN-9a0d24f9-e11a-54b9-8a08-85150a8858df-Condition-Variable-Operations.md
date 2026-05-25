---
type: "medium"
title: "Understanding Condition Variables"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/condition-variable-operations|condition-variable-operations]]"
learning-time-in-minutes: 3
---
# Understanding Condition Variables

Condition variables are a powerful tool in concurrent programming, helping threads coordinate their actions when they need to wait for a specific condition to become true. They are often used in conjunction with locks to ensure thread-safe access to shared data.

## What are Condition Variables?

Imagine multiple threads trying to access a shared resource. Some threads might need to wait until a certain condition is met before they can proceed. This is where condition variables come in. A condition variable allows a thread to temporarily release a lock and go to sleep, waiting for another thread to signal that the condition it's waiting for might now be true.

Key operations for a condition variable:

*   **Wait**: A thread calls `wait` on a condition variable. This atomically releases the associated lock and puts the thread to sleep. The thread will remain asleep until it is signaled and can reacquire the lock.
*   **Signal**: Another thread, after changing shared data that might satisfy a waiting thread's condition, calls `signal`. This wakes up *one* waiting thread.
*   **Broadcast**: Similar to `signal`, but wakes up *all* threads that are currently waiting on the condition variable.

It's crucial to understand that `wait` should always be called within a loop that re-checks the condition. This is because a thread might be woken up spuriously (a "spurious wakeup"), or another thread might have changed the condition back before the woken thread reacquires the lock.

## Practical Scenario: A Bounded Buffer

Consider a producer-consumer problem where producers add items to a shared buffer, and consumers remove them. The buffer has a fixed size.

*   **Producers** need to wait if the buffer is full.
*   **Consumers** need to wait if the buffer is empty.

Here's how condition variables can be used:

1.  **Lock**: A mutex (a type of lock) protects the shared buffer and its associated data (like current count and items).
2.  **Condition Variable (not full)**: Producers will wait on this condition if the buffer is full.
3.  **Condition Variable (not empty)**: Consumers will wait on this condition if the buffer is empty.

**Producer Thread (Simplified Pseudocode):**

```
lock(mutex);
while (buffer_is_full) {
  condition_variable_not_full.wait(mutex); // Releases mutex, waits
}
add_item_to_buffer();
condition_variable_not_empty.signal(); // Wake up a waiting consumer
unlock(mutex);
```

**Consumer Thread (Simplified Pseudocode):**

```
lock(mutex);
while (buffer_is_empty) {
  condition_variable_not_empty.wait(mutex); // Releases mutex, waits
}
remove_item_from_buffer();
condition_variable_not_full.signal(); // Wake up a waiting producer
unlock(mutex);
```

In this example, the `wait` operations release the mutex, allowing other threads to access the buffer. When a producer adds an item, it signals `not_empty`, potentially waking up a consumer. When a consumer removes an item, it signals `not_full`, potentially waking up a producer. The `while` loop ensures that threads re-check the condition after being woken up.

## Practice Task

Imagine a scenario with multiple worker threads that need to process tasks from a shared queue. The queue can only hold a certain number of tasks.

1.  Describe how you would use a mutex and two condition variables to coordinate these worker threads.
2.  What would each condition variable signal?
3.  Why is it important for the worker threads to check the queue status *after* they are woken up from waiting?

## Self-Check Questions

1.  What is the primary purpose of a condition variable?
2.  When a thread calls `wait` on a condition variable, what two actions does it perform?
3.  What is the difference between `signal` and `broadcast`?
4.  Why is it recommended to call `wait` within a `while` loop that checks the condition?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/condition-variable-operations|Condition Variable Operations]]
