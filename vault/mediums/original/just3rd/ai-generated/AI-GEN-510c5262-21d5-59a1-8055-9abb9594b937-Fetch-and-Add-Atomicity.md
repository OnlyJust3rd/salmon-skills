---
type: "medium"
title: "Fetch-and-Add Atomicity"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-atomicity|fetch-and-add-atomicity]]"
learning-time-in-minutes: 3
---
# Fetch-and-Add Atomicity

This lesson focuses on understanding the atomicity of the Fetch-and-Add operation, a crucial component in managing concurrent access to shared resources within the broader context of Concurrency and Synchronization.

## What is Fetch-and-Add?

Fetch-and-Add is an atomic read-modify-write operation. It performs two actions in a single, indivisible step:

1.  **Fetches** the current value of a variable.
2.  **Adds** a specified value to it and stores the result back.

The key here is **atomicity**. This means that no other thread or process can interfere with the operation between the fetching and the adding steps. If multiple threads attempt to perform Fetch-and-Add on the same variable simultaneously, the operation will complete for each thread sequentially, ensuring that no updates are lost.

## Why is Atomicity Important?

Consider a simple counter that multiple threads want to increment. If we use a non-atomic increment (fetch value, add 1, store value), the following race condition can occur:

*   Thread A reads the counter value (e.g., 5).
*   Thread B reads the counter value (also 5, as Thread A hasn't written back yet).
*   Thread A adds 1 to its fetched value (5 + 1 = 6) and writes 6 back to the counter.
*   Thread B adds 1 to its fetched value (5 + 1 = 6) and writes 6 back to the counter.

The counter should now be 7 (two increments), but it's only 6. Fetch-and-Add prevents this by guaranteeing that the read and the subsequent write are a single, uninterruptible operation.

## Practical Scenario: A Shared Ticket Counter

Imagine an online ticketing system where multiple servers are responsible for updating the number of available tickets for a popular event.

*   **Shared Resource:** The `available_tickets` count.
*   **Concurrent Operation:** When a user buys a ticket, the `available_tickets` count needs to be decremented.

If we used a non-atomic decrement:

1.  Server 1 checks `available_tickets` (e.g., 100).
2.  Server 2 checks `available_tickets` (also 100).
3.  Server 1 decrements and writes back (99).
4.  Server 2 decrements and writes back (99).

We've sold two tickets, but the count only reflects one sale.

Using Fetch-and-Add for decrementing (effectively Fetch-and-Subtract) would look like this conceptually:

```pseudocode
// Initial available_tickets = 100

// User buys ticket on Server 1
new_count_s1 = fetch_and_add(available_tickets, -1)
// Server 1 gets 100, available_tickets becomes 99

// User buys ticket on Server 2
new_count_s2 = fetch_and_add(available_tickets, -1)
// Server 2 gets 99, available_tickets becomes 98
```

Each `fetch_and_add` operation atomically reads the current value, adds -1, and updates the variable. The return value is the *original* value before the addition. This ensures that each ticket sale correctly decrements the available count without race conditions.

## Practice Task

Consider a scenario where you have a shared queue of jobs. Multiple worker threads need to process these jobs. Each job has a unique ID. You want to assign a sequence number to each job as it's added to the queue, ensuring each job gets a distinct sequence number.

How would you use Fetch-and-Add to achieve this, assuming `next_sequence_number` is a shared variable initialized to 0? Write pseudocode for a worker thread adding a job to the queue.

```pseudocode
// Assume 'jobs_queue' is a shared data structure
// Assume 'next_sequence_number' is a shared atomic integer initialized to 0

function add_job_to_queue(job_data):
  // Atomically get the next sequence number and increment the shared counter
  assigned_sequence = fetch_and_add(next_sequence_number, 1)

  // Now 'assigned_sequence' holds a unique number for this job
  job_with_sequence = { id: generate_unique_id(), data: job_data, sequence: assigned_sequence }

  // Add the job to the shared queue (this might involve other synchronization primitives)
  add_to_queue(jobs_queue, job_with_sequence)

  return assigned_sequence
```

## Self-Check Questions

1.  In your own words, explain why the "Add" part of Fetch-and-Add must be atomic with the "Fetch" part.
2.  What would be the potential problem if a system implemented Fetch-and-Add by first reading the value, then performing the addition in a separate step, and then writing back?
3.  Besides counters, can you think of another type of shared resource where an atomic Fetch-and-Add (or Fetch-and-Subtract) operation would be beneficial?

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-atomicity|Fetch-and-Add Atomicity]]
