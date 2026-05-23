---
type: "medium"
title: "Implementing Mutual Exclusion with Locks"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/mutual-exclusion-implementation|mutual-exclusion-implementation]]"
learning-time-in-minutes: 4
---
# Implementing Mutual Exclusion with Locks

In concurrent programming, a **critical section** is a piece of code that accesses a shared resource (like a variable or a data structure) and must not be executed by more than one thread at the same time. If multiple threads try to access and modify shared data simultaneously, it can lead to data corruption and unpredictable program behavior. **Mutual exclusion** is the mechanism that ensures only one thread can be inside its critical section at any given moment. Locks are a fundamental tool for achieving this.

This lesson focuses on how to apply basic lock operations to protect critical sections. We'll explore using atomic operations like `Test-and-Set`, `Compare-and-Swap`, or `Fetch-and-Add` to build simple lock implementations.

## The Problem: Race Conditions

Imagine two threads, Thread A and Thread B, both needing to increment a shared counter.

**Shared Variable:** `counter = 0`

If they execute the increment operation (`counter = counter + 1`) without any protection, here's a possible interleaving:

1.  **Thread A:** Reads `counter` (value is 0).
2.  **Thread B:** Reads `counter` (value is 0).
3.  **Thread A:** Calculates `0 + 1 = 1`.
4.  **Thread B:** Calculates `0 + 1 = 1`.
5.  **Thread A:** Writes `1` back to `counter`. `counter` is now 1.
6.  **Thread B:** Writes `1` back to `counter`. `counter` is still 1.

The expected result after two increments should be 2, but we ended up with 1. This is a **race condition**.

## The Solution: Locks

A lock acts like a key to a private room (the critical section). Only the thread holding the key can enter the room. Other threads must wait outside until the key is returned.

We can implement a simple spinlock using an atomic operation. A spinlock is a lock where threads repeatedly "spin" (loop) while waiting for the lock to become available.

### Using `Test-and-Set` (Pseudocode)

`Test-and-Set(lock_variable)` is an atomic operation that:
1. Reads the current value of `lock_variable`.
2. Sets `lock_variable` to `true`.
3. Returns the *original* value read from `lock_variable`.

This operation is atomic, meaning it happens as a single, indivisible step.

Here's how we can use it:

**Lock Variable:** `lock = false` (initially unlocked)

```pseudocode
// --- Enter Critical Section ---
// Try to acquire the lock. Keep trying until successful.
while Test-and-Set(lock) do
    // Lock is already held, spin and wait
    // (In a real system, you might yield or sleep briefly)
end while
// Now, lock is false, and Test-and-Set(lock) set it to true.
// We hold the lock and can enter the critical section.

// --- Critical Section Start ---
// Access shared resources here
// For example:
// counter = counter + 1
// --- Critical Section End ---

// --- Exit Critical Section ---
// Release the lock by setting it back to false.
// This must also be atomic or handled carefully.
// For a simple spinlock, we just set it.
lock = false
```

**Explanation:**

*   The `while` loop continuously calls `Test-and-Set(lock)`.
*   If `lock` is `false` (meaning no one holds the lock), `Test-and-Set` returns `false`, the loop condition becomes `false`, and the thread exits the loop, now holding the lock (`lock` is now `true`).
*   If `lock` is `true` (another thread holds it), `Test-and-Set` returns `true`, the loop condition remains `true`, and the thread keeps spinning, trying again.
*   When the thread exits the critical section, it sets `lock` back to `false`, making it available for others.

### Other Atomic Operations

*   **Compare-and-Swap (CAS):** `CompareAndSwap(variable, expected_value, new_value)` atomically checks if `variable` equals `expected_value`. If it does, it sets `variable` to `new_value` and returns `true`. Otherwise, it does nothing and returns `false`. This can be used to implement locks by trying to swap `expected_value=false` to `new_value=true` when the lock is free.
*   **Fetch-and-Add:** `FetchAndAdd(variable, increment_value)` atomically reads the value of `variable`, adds `increment_value` to it, stores the result back into `variable`, and returns the *original* value. While not directly used for a simple boolean lock, it's a fundamental atomic operation useful in other synchronization primitives.

## Practical Example Scenario

Consider a system managing a shared inventory count for an online store. Multiple threads handle incoming orders. Each order decrementing the inventory must be an atomic operation.

**Shared Resource:** `inventory_count`

```pseudocode
// Assume 'inventory_count' is a shared integer
// Assume 'inventory_lock' is a boolean variable, initially false

function process_order(item_id):
    // Acquire lock
    while Test-and-Set(inventory_lock) do
        // Spin
    end while

    // Critical Section: Update inventory
    if inventory_count[item_id] > 0 then
        inventory_count[item_id] = inventory_count[item_id] - 1
        // Log successful order
    else
        // Log out of stock
    end if

    // Release lock
    inventory_lock = false
```

Without the lock, two threads might try to decrement the count for the same item when it's the last one available, leading to an "overselling" race condition.

## Practice Task

Implement a simple pseudocode function `increment_shared_counter` that increments a global `shared_counter` variable. Use the `Test-and-Set` pseudocode logic described above to protect the critical section where `shared_counter` is incremented. Assume `shared_counter` is an integer initialized to 0 and `lock` is a boolean initialized to `false`.

```pseudocode
// Global variables
shared_counter = 0
lock = false

function increment_shared_counter():
    // YOUR CODE HERE to acquire the lock

    // Critical Section
    shared_counter = shared_counter + 1

    // YOUR CODE HERE to release the lock

// Example usage (imagine multiple threads calling this)
// increment_shared_counter()
// increment_shared_counter()
```

## Self-Check Questions

1.  What is the main problem that mutual exclusion aims to solve in concurrent programs?
2.  In the `Test-and-Set` operation, why is it important that both reading the value and setting it to `true` happen atomically?
3.  What would happen if a thread acquired the lock using `Test-and-Set` but forgot to release it (set `lock` back to `false`)?

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/mutual-exclusion-implementation|Mutual Exclusion Implementation]]
