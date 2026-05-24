---
type: "medium"
title: "Understanding Semaphore Operations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/semaphore-operations|semaphore-operations]]"
learning-time-in-minutes: 3
---
# Understanding Semaphore Operations

Semaphores are a fundamental synchronization primitive used to control access to a shared resource by multiple threads or processes. Think of them as counters that manage the number of available "permits" to a resource.

## What is a Semaphore?

A semaphore is essentially an integer variable that, apart from initialization, is accessed only through two standard operations:

*   **Wait (or P operation):** Decrements the semaphore's value. If the value becomes negative, the process/thread calling `wait` is blocked until the semaphore's value is non-negative.
*   **Signal (or V operation):** Increments the semaphore's value. If there are any processes/threads blocked on this semaphore, one of them is unblocked.

Semaphores can be initialized to a non-negative integer value.

## Practical Scenario: Managing a Limited Number of Printers

Imagine a small office with only two printers available for all employees. Multiple employees might want to print at the same time. To avoid chaos and ensure only two people print simultaneously, we can use a semaphore.

Let's say we initialize a semaphore, `printer_semaphore`, to `2` (representing the two available printers).

Here's how the operations would work:

1.  **Employee wants to print:** The employee's printing process performs a `wait` operation on `printer_semaphore`.
    *   If `printer_semaphore` is greater than 0, its value is decremented, and the employee can start printing.
    *   If `printer_semaphore` is 0 (meaning both printers are in use), the employee's process is blocked and must wait.

2.  **Employee finishes printing:** When an employee finishes printing, their process performs a `signal` operation on `printer_semaphore`.
    *   This increments the semaphore's value.
    *   If there were any employees blocked waiting for a printer, one of them will now be unblocked and can proceed to print.

## Pseudocode Example

```pseudocode
// Initialize the semaphore to the number of available printers
semaphore printer_semaphore = 2

// Function for a process to print
function print_document() {
    // Try to acquire a printer (decrement semaphore)
    wait(printer_semaphore)

    // CRITICAL SECTION: Access the printer
    print_to_printer()
    // ... other printing related operations ...

    // Release the printer (increment semaphore)
    signal(printer_semaphore)
}

// Multiple employees call print_document concurrently
print_document() // Employee 1
print_document() // Employee 2
print_document() // Employee 3
```

In this example, if Employee 1 and Employee 2 are already printing, and Employee 3 calls `print_document`, the `wait(printer_semaphore)` operation will block Employee 3's process because `printer_semaphore` will be 0. Once either Employee 1 or Employee 2 finishes and calls `signal(printer_semaphore)`, Employee 3 will be unblocked and can use the now-available printer.

## Practice Task

Consider a scenario where you have a limited pool of database connections. A semaphore can be used to limit the number of concurrent connections to the database.

If you have 5 available database connections, how would you initialize a semaphore to manage this? What operation would a thread perform before it can query the database, and what operation would it perform after it's done?

## Self-Check Questions

1.  What is the primary purpose of a semaphore in concurrent programming?
2.  When a thread calls `wait` on a semaphore, what happens if the semaphore's current value is 0?
3.  When a thread calls `signal` on a semaphore, what happens if other threads are currently blocked on that semaphore?
4.  In the printer example, what does initializing the semaphore to `2` signify?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/concurrency-and-synchronization/microskills/semaphore-operations|Semaphore Operations]]
