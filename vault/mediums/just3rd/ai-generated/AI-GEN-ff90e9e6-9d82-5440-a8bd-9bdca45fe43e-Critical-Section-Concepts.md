---
type: "medium"
title: "Understanding Critical Sections"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/critical-section-concepts|critical-section-concepts]]"
---
# Understanding Critical Sections

In the world of concurrent programming, where multiple tasks or threads operate at the same time, we often encounter situations where these tasks need to access shared resources. A **critical section** is a segment of code that accesses a shared resource (like a variable, a file, or a database record) and must not be executed by more than one thread at any given time.

Think of it like a single-stall restroom. Only one person can use it at a time. If multiple people try to enter simultaneously, it can lead to confusion and a mess. Similarly, in programming, if multiple threads try to modify a shared piece of data at the exact same moment, the data can become corrupted or lead to unpredictable results. This is precisely where the concept of a critical section becomes vital.

## Why Critical Sections Matter

When threads execute concurrently, they don't necessarily wait for each other to finish using a shared resource. If thread A is reading a value, and before it can finish, thread B modifies that same value, thread A might end up with an incorrect or outdated piece of information.

The core problem is that operations that seem atomic (like reading and then writing a value) might be broken down into smaller steps by the computer.

Consider a simple shared counter variable, `count`, initialized to 0. Two threads, Thread 1 and Thread 2, both want to increment this counter.

**Ideal Scenario (Sequential Execution):**

1.  Thread 1 reads `count` (value is 0).
2.  Thread 1 increments the value to 1.
3.  Thread 1 writes the new value back to `count` (now `count` is 1).
4.  Thread 2 reads `count` (value is 1).
5.  Thread 2 increments the value to 2.
6.  Thread 2 writes the new value back to `count` (now `count` is 2).

The final result is 2, as expected.

**Race Condition Scenario (Concurrent Execution):**

1.  Thread 1 reads `count` (value is 0).
2.  **Context Switch:** Thread 2 starts executing.
3.  Thread 2 reads `count` (value is still 0, because Thread 1 hasn't written back yet).
4.  Thread 2 increments the value to 1.
5.  Thread 2 writes the new value back to `count` (now `count` is 1).
6.  **Context Switch:** Thread 1 resumes execution.
7.  Thread 1, which had already read the value as 0, now increments *its* perceived value (0 + 1 = 1).
8.  Thread 1 writes its value back to `count` (now `count` is still 1).

The final result is 1, not 2. This incorrect outcome occurs because both threads' operations overlapped in a way that one thread's work was lost. The code that reads, increments, and writes the counter is the **critical section**.

## Practical Example: Bank Account Balance

Imagine two threads trying to withdraw money from the same bank account simultaneously.

*   **Account Balance:** $100
*   **Thread A:** Tries to withdraw $50.
*   **Thread B:** Tries to withdraw $70.

If not protected, a race condition could occur:

1.  Thread A reads the balance ($100).
2.  Thread A checks if $100 >= $50 (True).
3.  **Context Switch:** Thread B starts.
4.  Thread B reads the balance ($100).
5.  Thread B checks if $100 >= $70 (True).
6.  Thread B subtracts $70 from its read value ($100 - $70 = $30).
7.  Thread B updates the balance to $30.
8.  **Context Switch:** Thread A resumes.
9.  Thread A subtracts $50 from its read value ($100 - $50 = $50).
10. Thread A updates the balance to $50.

The final balance is $50, but the account should be overdrawn by $20! The critical section here is the sequence of reading the balance, checking if funds are sufficient, and updating the balance.

## Practice Task

Identify the critical sections in the following pseudocode snippets. Assume `shared_list` is a list accessed by multiple threads.

**Snippet 1:**

```
function process_data(item):
  // Some processing on 'item'
  shared_list.append(item)
  log_operation("Item added")
```

**Snippet 2:**

```
function get_next_id():
  current_id = last_used_id + 1
  last_used_id = current_id
  return current_id
```

## Self-Check Questions

1.  What is the fundamental problem that critical sections aim to solve?
2.  Describe a real-world analogy for a critical section, other than a restroom.
3.  In the bank account example, what would be the final balance if the operations were performed sequentially (Thread A completely finishes before Thread B starts)?
4.  Why is the `get_next_id` function in Snippet 2 likely to have a critical section?

## Supports

- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/critical-section-concepts|Critical Section Concepts]]
