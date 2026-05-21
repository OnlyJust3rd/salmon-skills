---
type: "medium"
title: "Concurrency Coordination: Working Together Safely"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/concurrency-coordination|concurrency-coordination]]"
---
# Concurrency Coordination: Working Together Safely

When multiple processes or threads try to access shared resources at the same time, chaos can ensue. This is where concurrency coordination mechanisms come into play. They act like traffic signals for your programs, ensuring that only one process or thread can modify a critical piece of data at any given moment, preventing race conditions and ensuring data integrity. Understanding these primitives is key to building robust concurrent applications.

## The Problem: Race Conditions

Imagine two people trying to update the same bank account balance simultaneously.

1.  **Person A** reads the balance ($100).
2.  **Person B** reads the balance ($100).
3.  **Person A** adds $50, calculating the new balance as $150.
4.  **Person B** subtracts $20, calculating the new balance as $80.
5.  **Person A** writes $150 back to the account.
6.  **Person B** writes $80 back to the account.

The final balance is $80, but it should be $130 ($100 + $50 - $20). This incorrect outcome is a **race condition**, where the final result depends on the unpredictable timing of operations.

## Synchronization Primitives to the Rescue

Synchronization primitives are tools that help us avoid race conditions by enforcing an order on how shared resources are accessed. Let's look at a couple of fundamental ones.

### Locks (Mutexes)

A **lock**, often called a **mutex** (mutual exclusion), is like a key to a shared resource. Only one thread can hold the key at a time.

*   **Acquire (Lock):** A thread tries to acquire the lock. If the lock is free, the thread gets it and can proceed. If another thread already holds it, the current thread must wait until the lock is released.
*   **Release (Unlock):** When a thread is finished with the shared resource, it releases the lock, allowing another waiting thread to acquire it.

#### Practical Scenario: Updating a Shared Counter

Consider a program that counts the total number of requests received by a web server. Multiple server threads might need to increment this counter.

Without a lock, we'd face a race condition. With a lock:

```pseudocode
shared_counter = 0
counter_lock = create_lock()

function handle_request():
  acquire_lock(counter_lock)
  // Critical Section: Only one thread here at a time
  current_value = read(shared_counter)
  new_value = current_value + 1
  write(shared_counter, new_value)
  release_lock(counter_lock)
  // Rest of request handling...
```

In this scenario, `acquire_lock` and `release_lock` ensure that the reading, incrementing, and writing of `shared_counter` happen atomically – as a single, uninterrupted operation from the perspective of other threads.

### Semaphores

A **semaphore** is a more generalized signaling mechanism than a lock. It maintains a counter that controls access to a pool of resources.

*   **Wait (P operation):** Decrements the semaphore counter. If the counter becomes negative, the thread blocks until the counter is positive again.
*   **Signal (V operation):** Increments the semaphore counter. If there are threads blocked on the semaphore, one of them is unblocked.

Semaphores can be used to implement locks (a binary semaphore, initialized to 1) or to manage a limited number of identical resources (e.g., a pool of database connections).

#### Practical Scenario: Limited Resource Pool

Imagine a system that can only handle 5 concurrent database connections. A semaphore initialized to 5 can manage this.

```pseudocode
max_connections = 5
connection_semaphore = create_semaphore(max_connections)

function get_database_connection():
  wait(connection_semaphore) // Decrements counter, blocks if 0
  // Get an actual connection from the pool
  return connection

function release_database_connection(connection):
  // Return connection to the pool
  signal(connection_semaphore) // Increments counter, potentially unblocking a waiting thread
```

When 5 threads have acquired a connection, the semaphore's counter is 0. Any subsequent thread calling `wait` will block until one of the existing connections is released and `signal` is called.

## Practice Task

Imagine you are building a simple online voting system. Users can cast votes for different candidates.

1.  What kind of race condition could occur if multiple users try to vote for the same candidate simultaneously without proper synchronization?
2.  Which synchronization primitive (lock or semaphore) would be most appropriate for ensuring that only one vote is counted for a specific candidate at a time? Explain your reasoning.
3.  Briefly outline (using pseudocode or a descriptive list) how you would use the chosen primitive to protect the vote count for a single candidate.

## Self-Check Questions

1.  What is the primary purpose of synchronization primitives in concurrent programming?
2.  Describe the core difference between a lock (mutex) and a semaphore.
3.  In the context of a shared variable, what does it mean for operations on that variable to be "atomic"?

## Supports

- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/concurrency-coordination|Concurrency Coordination]]
