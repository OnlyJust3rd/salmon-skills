---
type: "medium"
title: "Multi-Level Feedback Queue (MLFQ) Algorithm Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/mlfq-algorithm-principles|mlfq-algorithm-principles]]"
learning-time-in-minutes: 3
---
# Multi-Level Feedback Queue (MLFQ) Algorithm Principles

MLFQ is a CPU scheduling algorithm designed to balance the needs of different types of processes. It uses multiple queues, each with a different priority level and scheduling policy. This allows the system to favor short, interactive processes while still ensuring that longer, CPU-bound processes eventually get their turn.

### How MLFQ Works

Think of MLFQ like a set of waiting lines at a bank, each with a different priority.

1.  **Multiple Queues:** MLFQ maintains several queues, typically ordered from highest priority to lowest.
2.  **Priority Assignment:** New processes usually enter the highest priority queue.
3.  **Scheduling Policy per Queue:** Each queue can have its own scheduling algorithm. For example, the highest priority queue might use First-In, First-Out (FIFO), while lower priority queues might use Round Robin (RR) with different time slices.
4.  **Movement Between Queues:** Processes can move between queues based on their behavior.
    *   If a process uses its entire time slice without completing, it's often demoted to a lower priority queue. This discourages CPU-bound processes from hogging the CPU.
    *   If a process gives up the CPU before its time slice is up (e.g., it's waiting for I/O), it might be promoted to a higher priority queue. This benefits interactive processes that frequently wait for input.
5.  **CPU Allocation:** The CPU is always allocated to a process in the highest priority non-empty queue.

### Practical Scenario

Imagine a computer running several applications:

*   **A word processor:** This is an interactive process. It spends most of its time waiting for user input (typing, clicking) and only uses the CPU for short bursts to update the screen.
*   **A video player:** This process needs consistent CPU time to decode video frames and display them smoothly.
*   **A background virus scan:** This is a CPU-bound process that can take a long time to complete.

MLFQ would handle this by:

*   Placing the word processor in a high-priority queue. When it needs the CPU, it gets it quickly. If it yields the CPU for user input, it might even stay in the high-priority queue.
*   The video player might be in a mid-priority queue, receiving a decent time slice to ensure smooth playback. If it consistently uses its full slice, it might be demoted.
*   The virus scan, being CPU-bound, would likely start in a lower priority queue. If it uses its full time slice, it would be demoted further. This ensures it doesn't starve the interactive applications.

### Practice Task

Consider a system with three queues:

*   **Queue 1 (High Priority):** FIFO, Time Slice = 10 ms
*   **Queue 2 (Medium Priority):** Round Robin, Time Slice = 20 ms
*   **Queue 3 (Low Priority):** Round Robin, Time Slice = 40 ms

Rules for movement:
*   If a process in Queue 1 uses its full time slice, it moves to Queue 2.
*   If a process in Queue 2 uses its full time slice, it moves to Queue 3.
*   If a process in Queue 2 or Queue 3 yields the CPU before its time slice expires, it moves to Queue 1.

Analyze the behavior of the following processes:

1.  **Process A:** Arrives, uses CPU for 5 ms, then waits for I/O.
2.  **Process B:** Arrives, uses CPU for 15 ms, then waits for I/O.
3.  **Process C:** Arrives, uses CPU for 25 ms continuously.

Where would each process end up after its first interaction with the CPU?

### Self-Check Questions

1.  What is the primary goal of using multiple queues in MLFQ?
2.  Under what conditions would a process typically be demoted to a lower priority queue in MLFQ?
3.  Why is MLFQ considered beneficial for interactive applications?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/mlfq-algorithm-principles|MLFQ Algorithm Principles]]
