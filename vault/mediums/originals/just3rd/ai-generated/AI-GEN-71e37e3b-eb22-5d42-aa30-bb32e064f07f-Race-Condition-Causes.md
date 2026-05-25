---
type: "medium"
title: "Understanding Race Condition Causes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/race-condition-causes|race-condition-causes]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/concurrency-and-synchronization|concurrency-and-synchronization]]"
learning-time-in-minutes: 4
---
# Understanding Race Condition Causes

In concurrent programming, where multiple threads or processes operate simultaneously, unexpected and incorrect behavior can arise. A primary cause of these issues is the **race condition**. This lesson focuses on understanding the specific circumstances that lead to race conditions.

## What is a Race Condition?

A race condition occurs when the outcome of a computation depends on the unpredictable timing or order in which multiple threads or processes access and modify shared data. Essentially, threads are "racing" to access and change data, and whoever gets there first (or in a specific, unintended order) determines the final, often incorrect, result.

## Causes of Race Conditions

Race conditions typically manifest when the following conditions are met:

1.  **Multiple Threads/Processes:** You have at least two independent execution paths (threads within a process or separate processes) running concurrently.
2.  **Shared Resource:** These threads/processes need to access a common resource. This resource could be:
    *   A variable in memory
    *   A file
    *   A database record
    *   Hardware device (like a printer)
3.  **Interleaved Operations:** The operations performed by these threads/processes on the shared resource are not atomic. An **atomic operation** is one that completes entirely without interruption. When operations are interleaved (part of one thread's operation happens, then part of another's, and so on), the state of the shared resource can become inconsistent between operations.

Let's break down "interleaved operations" further. Many seemingly single operations in programming are actually a sequence of lower-level machine instructions.

Consider incrementing a counter variable, say `count`, from 0 to 1 using two threads.

*   **Thread A** wants to increment `count`.
*   **Thread B** also wants to increment `count`.

A simple `count++` operation might involve these steps at a lower level:

1.  Read the current value of `count` from memory into a register.
2.  Increment the value in the register.
3.  Write the new value from the register back to memory.

Now, imagine the interleaving:

| Step | Thread A Action                         | Thread B Action                         | `count` Value (Memory) |
| :--- | :-------------------------------------- | :-------------------------------------- | :--------------------- |
| 1    | Read `count` (0) into its register      |                                         | 0                      |
| 2    |                                         | Read `count` (0) into its register      | 0                      |
| 3    | Increment register (0 becomes 1)        |                                         | 0                      |
| 4    |                                         | Increment register (0 becomes 1)        | 0                      |
| 5    | Write register (1) back to memory       |                                         | 1                      |
| 6    |                                         | Write register (1) back to memory       | 1                      |

In this scenario, both threads successfully executed their operations. However, the final value of `count` is 1, not the expected 2. This is a classic race condition. The second thread's write overwrites the first thread's write because they both read the same initial value.

## Practical Scenario

Imagine two users, Alice and Bob, trying to book the last available seat on a flight simultaneously using a web application.

*   **Shared Resource:** The database entry representing the last flight seat.
*   **Threads/Processes:** Alice's browser request and Bob's browser request.

1.  **Alice's Request:** The system checks if the seat is available. It is.
2.  **Bob's Request:** *Before Alice's booking is finalized*, Bob's request also checks if the seat is available. It still appears to be.
3.  **Alice's Booking:** Alice's transaction proceeds to book the seat, marking it as unavailable.
4.  **Bob's Booking:** Bob's transaction also proceeds to book the seat, unaware that it was just taken.

The result? The flight is now overbooked by one seat, all because the checks and subsequent bookings were interleaved without proper synchronization.

## Practice Task

Consider a simple bank account simulation where two threads deposit money into the same account.

*   Account balance starts at $100.
*   Thread 1 deposits $50.
*   Thread 2 deposits $100.

Describe a sequence of interleaved operations for the `deposit` function (which might involve reading the balance, adding the deposit amount, and writing the new balance back) that would result in the final balance being less than the expected $250.

## Self-Check Questions

1.  What are the three key conditions that must be met for a race condition to occur?
2.  Can a race condition happen if only one thread is accessing a shared resource? Explain why or why not.
3.  What does it mean for an operation to be "atomic"?
4.  In the bank account example, what are the shared resources and the concurrent processes?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/race-condition-causes|Race Condition Causes]]
