---
type: "medium"
title: "Turnaround Time Calculation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/turnaround-time-calculation|turnaround-time-calculation]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/cpu-scheduling|cpu-scheduling]]"
learning-time-in-minutes: 2
---
# Turnaround Time Calculation

In CPU scheduling, understanding how long processes take from arrival to completion is crucial. Turnaround time is a key metric that helps us evaluate the efficiency of different scheduling algorithms.

## What is Turnaround Time?

Turnaround time is the total time elapsed between a process's arrival in the ready queue and its completion. It includes both the time spent waiting for the CPU and the time spent executing on the CPU.

The formula for turnaround time is:

\[
\text{Turnaround Time} = \text{Completion Time} - \text{Arrival Time}
\]

## Practical Example

Let's consider a set of processes arriving at different times, and we'll calculate their turnaround times using a hypothetical scenario.

| Process | Arrival Time | Burst Time | Completion Time | Turnaround Time |
|---------|--------------|------------|-----------------|-----------------|
| P1      | 0            | 5          | 5               | \(5 - 0 = 5\)   |
| P2      | 1            | 3          | 8               | \(8 - 1 = 7\)   |
| P3      | 2            | 8          | 16              | \(16 - 2 = 14\) |
| P4      | 3            | 6          | 22              | \(22 - 3 = 19\) |

**Explanation:**

*   **P1:** Arrived at time 0, finished at time 5. Turnaround Time = 5.
*   **P2:** Arrived at time 1, finished at time 8. Turnaround Time = 7.
*   **P3:** Arrived at time 2, finished at time 16. Turnaround Time = 14.
*   **P4:** Arrived at time 3, finished at time 22. Turnaround Time = 19.

This example assumes a simple First-Come, First-Served (FCFS) scheduling for illustration purposes, where processes are executed in the order they arrive. In real scheduling, the completion times would be determined by the specific algorithm used.

## Practice Task

Imagine you have the following processes. Assuming a First-Come, First-Served (FCFS) scheduling algorithm, calculate the turnaround time for each process.

| Process | Arrival Time | Burst Time |
|---------|--------------|------------|
| A       | 0            | 7          |
| B       | 2            | 4          |
| C       | 4            | 1          |
| D       | 5            | 4          |

First, determine the completion time for each process. Then, use the formula to calculate the turnaround time.

## Self-Check Questions

1.  What are the two main components that make up a process's turnaround time?
2.  If a process arrives at time 3 and completes at time 12, what is its turnaround time?
3.  Why is calculating turnaround time important when comparing CPU scheduling algorithms?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/turnaround-time-calculation|Turnaround Time Calculation]]
