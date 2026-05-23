---
type: "medium"
title: "FIFO Algorithm Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/cpu-scheduling/microskills/fifo-algorithm-principles|fifo-algorithm-principles]]"
learning-time-in-minutes: 3
---
# FIFO Algorithm Principles

First In, First Out (FIFO), also known as First Come, First Served (FCFS), is the simplest CPU scheduling algorithm. Its core principle is straightforward: the process that arrives first in the ready queue is the first one to be executed by the CPU. Once a process starts executing, it continues until it completes its CPU burst or voluntarily relinquishes the CPU (e.g., for I/O).

Think of it like a queue at a grocery store. The first person in line is the first person to be served by the cashier. No one cuts in line, and no one gets skipped, regardless of how complex their transaction might be.

## How it Works

1.  **Arrival:** Processes arrive at the system and enter the ready queue. The ready queue is a waiting area for processes that are ready to run.
2.  **Selection:** When the CPU becomes free, the scheduler selects the process at the head of the ready queue.
3.  **Execution:** The selected process is assigned to the CPU and runs until it finishes or blocks for I/O.
4.  **Repetition:** This cycle repeats. If a process finishes, the next process at the head of the queue gets the CPU. If a process blocks, it's removed from the ready queue, and the next process gets the CPU.

## Practical Example

Imagine three processes, P1, P2, and P3, arriving at the following times and needing the following CPU burst times:

*   **P1:** Arrives at time 0, needs 5 units of CPU time.
*   **P2:** Arrives at time 2, needs 3 units of CPU time.
*   **P3:** Arrives at time 4, needs 2 units of CPU time.

Using FIFO:

1.  At time 0, P1 arrives and is the only process. It gets the CPU.
2.  P1 runs from time 0 to time 5.
3.  At time 2, P2 arrives and waits in the ready queue.
4.  At time 4, P3 arrives and waits in the ready queue, behind P2.
5.  At time 5, P1 finishes. The CPU is now free.
6.  The scheduler looks at the ready queue. P2 is at the head, so P2 gets the CPU.
7.  P2 runs from time 5 to time 8 (5 + 3).
8.  At time 8, P2 finishes. The CPU is free.
9.  P3 is now at the head of the ready queue. P3 gets the CPU.
10. P3 runs from time 8 to time 10 (8 + 2).

In this scenario, P1, P2, and P3 execute in the order they arrived: P1, then P2, then P3.

## Practice Task

Consider the following processes arriving and requiring CPU time:

*   Process A: Arrives at time 0, needs 7 time units.
*   Process B: Arrives at time 1, needs 2 time units.
*   Process C: Arrives at time 2, needs 4 time units.

Trace the execution of these processes using the FIFO scheduling algorithm. Draw a Gantt chart to represent the execution order and timing.

## Self-Check Questions

1.  What is the fundamental rule that governs which process gets the CPU in a FIFO system?
2.  If two processes arrive at the exact same time, how does FIFO typically decide which one runs first?
3.  What is a potential drawback of FIFO if a very long process arrives just before several short processes?

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/cpu-scheduling/microskills/fifo-algorithm-principles|FIFO Algorithm Principles]]
