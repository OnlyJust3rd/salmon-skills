---
type: "medium"
title: "Analyze Compare-and-Swap Atomicity"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-atomicity|compare-and-swap-atomicity]]"
learning-time-in-minutes: 4
---
# Analyze Compare-and-Swap Atomicity

In concurrent programming, ensuring that operations happen as a single, indivisible unit is crucial. This is known as **atomicity**. Compare-and-Swap (CAS) is a fundamental atomic memory operation used extensively in lock-free algorithms. Understanding its atomicity is key to analyzing its suitability in various concurrency scenarios.

## What is Compare-and-Swap (CAS)?

CAS is an atomic instruction that takes three arguments: a memory location (`V`), an expected old value (`A`), and a new value (`B`). It performs the following actions as a single, uninterruptible operation:

1.  Reads the current value at memory location `V`.
2.  Compares this value with the expected old value `A`.
3.  If the values match, it writes the new value `B` to memory location `V`.
4.  Returns a boolean indicating whether the swap occurred (i.e., if the write happened).

The critical aspect is that **all these steps are atomic**. This means no other thread can interfere with the memory location `V` between the read, compare, and write operations.

## Why Atomicity Matters for CAS

Imagine a scenario where multiple threads try to update a shared counter using a non-atomic read-modify-write sequence.

**Non-Atomic Scenario (Without CAS):**

1.  Thread 1 reads the counter value (e.g., 5).
2.  Thread 2 reads the counter value (e.g., 5).
3.  Thread 1 increments its read value (to 6) and writes it back. The counter is now 6.
4.  Thread 2 increments its read value (to 6) and writes it back. The counter is now 6.

In this case, two increments were intended, but the final result is only one. This is a race condition.

**Atomic CAS Scenario:**

1.  Thread 1 reads the counter value (e.g., 5). It expects the old value to be 5 and wants to swap it with 6.
2.  Thread 2 reads the counter value (e.g., 5). It expects the old value to be 5 and wants to swap it with 6.

    *   **If Thread 1's CAS operation executes first:** It finds the value at the counter is indeed 5, so it swaps it with 6. CAS returns true. The counter is now 6.
    *   **When Thread 2's CAS operation attempts to execute:** It reads the counter value, which is now 6. It expected 5. Since the values don't match, the swap does not occur, and CAS returns false. Thread 2 might then retry its operation.

The atomicity of CAS guarantees that a thread will either successfully update the value and know it did, or it will fail and know that another thread modified the value in the meantime. This allows for building synchronization primitives without traditional locks.

## Practical Example: Lock-Free Stack Push

Consider implementing a stack push operation in a lock-free manner. Each node in the stack has a `data` field and a `next` pointer.

```pseudocode
function push(stack, newNode):
  // Loop until the operation succeeds
  loop:
    oldHead = stack.head  // Read the current head
    newNode.next = oldHead // Set the new node's next pointer

    // Attempt to atomically update the head
    // If stack.head is still oldHead, update it to newNode
    // If not, another thread modified the head, so retry
    if compare_and_swap(stack.head, oldHead, newNode):
      return // Success!
```

In this pseudocode:

*   `stack.head` is the memory location.
*   `oldHead` is the expected old value.
*   `newNode` is the new value.

If `compare_and_swap` succeeds, it means no other thread modified `stack.head` between the time `oldHead` was read and the CAS operation was attempted. The `newNode` is now atomically the new head of the stack. If it fails, another thread has pushed or popped, and the loop retries with the updated `stack.head`.

## Practice Task

Imagine you are designing a system that manages a shared pool of worker threads. You need a way for threads to atomically claim a worker thread from the pool. The pool can be represented by a pointer to the first available worker.

Describe how you would use Compare-and-Swap to implement an atomic `claimWorker` function. What would be the memory location, expected old value, and new value in your CAS operation?

## Self-Check Questions

1.  What does "atomicity" mean in the context of a Compare-and-Swap operation?
2.  Why is the atomicity of CAS crucial for preventing race conditions in concurrent programming?
3.  In the `push` operation example, what happens if another thread modifies `stack.head` *after* `oldHead = stack.head` but *before* the `compare_and_swap` call?
4.  If a CAS operation returns `false`, what are the implications for the thread attempting the operation?

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-atomicity|Compare-and-Swap Atomicity]]
