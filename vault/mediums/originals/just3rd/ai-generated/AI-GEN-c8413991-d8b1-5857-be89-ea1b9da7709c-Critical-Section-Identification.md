---
type: "medium"
title: "Identifying Critical Sections"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/critical-section-identification|critical-section-identification]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/concurrency-and-synchronization|concurrency-and-synchronization]]"
learning-time-in-minutes: 2
---
# Identifying Critical Sections

In concurrent programming, when multiple threads or processes access shared data, we need to be mindful of potential issues. A **critical section** is a segment of code that accesses a shared resource and must not be executed by more than one thread at a time to prevent data corruption.

## What is a Critical Section?

Imagine a shared bank account that multiple people are trying to deposit money into simultaneously. If two people try to deposit at the exact same moment, the system might read the balance, add one deposit, then read the balance again, add the second deposit, and write the final balance. This could lead to one of the deposits being lost.

A critical section is the part of the code where such shared resources are manipulated. Identifying these sections is the first step in preventing **race conditions**, which occur when the outcome of a program depends on the unpredictable timing of concurrent operations.

## Practical Example: Simple Counter

Consider a program where multiple threads increment a shared counter.

```python
import threading

counter = 0
num_threads = 10
increments_per_thread = 100000

def increment_counter():
    global counter
    for _ in range(increments_per_thread):
        # --- Potential Critical Section Starts ---
        current_value = counter
        new_value = current_value + 1
        counter = new_value
        # --- Potential Critical Section Ends ---

threads = []
for _ in range(num_threads):
    thread = threading.Thread(target=increment_counter)
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print(f"Expected final counter value: {num_threads * increments_per_thread}")
print(f"Actual final counter value: {counter}")
```

In this example, the lines between the comments `--- Potential Critical Section Starts ---` and `--- Potential Critical Section Ends ---` form the critical section. This is where the shared `counter` variable is read, modified, and written back. If two threads enter this section at nearly the same time, one thread's update might be based on an outdated value of `counter`, leading to a race condition and an incorrect final count.

**How to identify a critical section:**

1.  **Look for shared resources:** Identify variables, data structures, or hardware that multiple threads/processes can access.
2.  **Examine code blocks accessing shared resources:** Pinpoint the exact lines of code where these shared resources are read, written, or modified.
3.  **Consider atomicity:** If the sequence of operations on a shared resource is not atomic (meaning it can be interrupted), that sequence is likely a critical section. The increment operation (`counter = counter + 1`) is a classic example of a non-atomic operation that involves read, modify, and write steps.

## Practice Task

Examine the following pseudocode and identify the critical section(s).

```pseudocode
shared_variable = 0

function process_data(data_item):
  // Thread A and Thread B might call this concurrently
  local_copy = shared_variable
  processed_value = perform_complex_calculation(data_item)
  new_shared_value = local_copy + processed_value
  shared_variable = new_shared_value
end function
```

What is the critical section in this `process_data` function?

## Self-Check Questions

1.  What is the primary goal of identifying critical sections?
2.  In the `increment_counter` example, why is reading the `counter` value a necessary part of the critical section?
3.  If a piece of code only reads a shared variable but never writes to it, is it necessarily *not* a critical section? Explain briefly.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/critical-section-identification|Critical Section Identification]]
