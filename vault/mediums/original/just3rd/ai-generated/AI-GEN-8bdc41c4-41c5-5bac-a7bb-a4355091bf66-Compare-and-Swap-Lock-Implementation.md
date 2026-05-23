---
type: "medium"
title: "Implementing Locks with Compare-and-Swap"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-lock-implementation|compare-and-swap-lock-implementation]]"
learning-time-in-minutes: 3
---
# Implementing Locks with Compare-and-Swap

This lesson focuses on a specific atomic operation, Compare-and-Swap (CAS), and how it can be used to build locks for protecting critical sections in concurrent programming.

## Understanding Compare-and-Swap (CAS)

In concurrent systems, multiple threads or processes might try to access and modify shared data simultaneously. A "critical section" is a piece of code that accesses this shared data. To prevent race conditions (where the outcome depends on the unpredictable timing of thread execution), we need synchronization mechanisms like locks.

Compare-and-Swap (CAS) is a hardware-level atomic operation that is fundamental to building efficient locks. It typically takes three arguments:

1.  **Memory Address:** The location in memory to operate on.
2.  **Expected Value:** The value we expect to find at that memory address.
3.  **New Value:** The value to write to the memory address if the expected value matches.

CAS atomically performs the following:
*   It reads the current value at the memory address.
*   It compares this current value with the `expected_value`.
*   If they match, it writes the `new_value` to the memory address and returns `true` (or the old value).
*   If they don't match, it does nothing and returns `false` (or the old value).

The "atomic" nature means that the entire operation (read, compare, and potentially write) happens as a single, indivisible step, preventing other threads from interfering in the middle.

## Building a Lock with CAS

We can use CAS to implement a spinlock. A spinlock is a lock where a thread trying to acquire it will "spin" (repeatedly check) until the lock becomes available, rather than going to sleep.

Here's how a CAS-based spinlock might work in pseudocode:

Imagine a shared variable, `lock_flag`, initialized to `0` (meaning the lock is free).

*   `0`: Lock is free
*   `1`: Lock is held

**Acquiring the Lock:**

```pseudocode
function acquire_lock(lock_flag_address):
  while true:
    // Attempt to swap 0 (free) with 1 (held)
    // Only succeed if the current value is 0
    if compare_and_swap(lock_flag_address, expected_value=0, new_value=1):
      // Successfully acquired the lock
      break
    else:
      // Lock is already held, spin and try again
      // (In a real system, you might yield CPU or pause briefly to avoid
      // busy-waiting too aggressively, depending on the OS and hardware)
      continue
```

**Releasing the Lock:**

Releasing the lock is simpler. We just set the `lock_flag` back to `0`. This operation must also be atomic to ensure consistency.

```pseudocode
function release_lock(lock_flag_address):
  // Atomically set the lock back to free
  // No need for CAS here, a simple atomic store is sufficient
  atomic_store(lock_flag_address, value=0)
```

**Using the Lock:**

```pseudocode
// Assume lock_flag is a globally accessible shared variable initialized to 0

critical_section_data = shared_resource

// Acquire the lock before entering the critical section
acquire_lock(&lock_flag)

// --- Critical Section Starts ---
// This code can only be executed by one thread at a time
value = read(critical_section_data)
value = value + 1
write(critical_section_data, value)
// --- Critical Section Ends ---

// Release the lock after exiting the critical section
release_lock(&lock_flag)
```

## Practical Scenario

Consider a simple counter that multiple threads increment. Without a lock, two threads might read the same value, both increment it, and then both write back the same (incorrect) value, leading to lost updates.

Using our CAS-based spinlock:

1.  **Thread A** wants to increment the counter. It calls `acquire_lock`. `compare_and_swap(&lock_flag, 0, 1)` succeeds. `lock_flag` becomes `1`.
2.  **Thread B** also wants to increment. It calls `acquire_lock`. `compare_and_swap(&lock_flag, 0, 1)` fails because `lock_flag` is now `1`. Thread B spins.
3.  **Thread A** performs its increment operation within the critical section.
4.  **Thread A** calls `release_lock`. `atomic_store(&lock_flag, 0)`. `lock_flag` becomes `0`.
5.  **Thread B**, still spinning, tries `acquire_lock` again. `compare_and_swap(&lock_flag, 0, 1)` now succeeds. `lock_flag` becomes `1`. Thread B can now enter its critical section.

## Practice Task

Implement the `acquire_lock` and `release_lock` functions in a language of your choice that supports atomic operations (like C++, Java, Go, or Rust, often using built-in types or libraries). Assume you have access to an atomic CAS function. Then, write a small program where multiple threads concurrently increment a shared counter using your lock implementation.

## Self-Check Questions

1.  What is the primary benefit of using an atomic Compare-and-Swap operation for building locks?
2.  Why is the `while true` loop necessary in the `acquire_lock` function?
3.  If `compare_and_swap` returns `true`, what does that guarantee about the lock's state?
4.  What could happen if `release_lock` was not an atomic operation?

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-lock-implementation|Compare-and-Swap Lock Implementation]]
