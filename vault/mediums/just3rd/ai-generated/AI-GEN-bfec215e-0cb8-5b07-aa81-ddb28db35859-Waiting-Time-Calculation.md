---
type: "medium"
title: "Calculating Waiting Time in CPU Scheduling"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/cpu-scheduling/microskills/waiting-time-calculation|Waiting Time Calculation]]"
---
# Calculating Waiting Time in CPU Scheduling

Waiting time is a crucial metric for evaluating CPU scheduling algorithms. It represents the total time a process spends waiting in the ready queue before it gets the CPU. Minimizing waiting time is a key goal of efficient scheduling.

## Understanding Waiting Time

When a process arrives at the system, it enters the ready queue. It waits there until the CPU becomes free and it's selected by the scheduler. The waiting time for a process is the duration from its arrival until it *starts* its execution.

Mathematically, we can define it as:

\[
\text{Waiting Time} = \text{Start Time} - \text{Arrival Time}
\]

However, in many scheduling scenarios, especially non-preemptive ones or when calculating for a full schedule, it's more common to consider the total time spent in the ready queue. If a process is preempted and later resumes execution, its waiting time accumulates across all periods it spent in the ready queue.

A more general way to think about it, especially for analyzing a schedule after it's completed, is:

\[
\text{Waiting Time} = \text{Turnaround Time} - \text{Burst Time}
\]

Where:
*   **Turnaround Time** is the total time from arrival to completion.
*   **Burst Time** is the actual CPU time required by the process.

## Practical Example: First-Come, First-Served (FCFS)

Let's consider three processes (P1, P2, P3) that arrive at the same time (Arrival Time = 0) and have the following burst times:

| Process | Burst Time |
| :------ | :--------- |
| P1      | 5          |
| P2      | 3          |
| P3      | 8          |

Using FCFS, processes are executed in the order they arrive.

1.  **P1:**
    *   Arrival Time = 0
    *   Starts Execution at = 0 (since it's the first)
    *   Waiting Time = Start Time - Arrival Time = 0 - 0 = **0**
    *   Completion Time = 0 + 5 = 5

2.  **P2:**
    *   Arrival Time = 0
    *   Starts Execution at = 5 (after P1 finishes)
    *   Waiting Time = Start Time - Arrival Time = 5 - 0 = **5**
    *   Completion Time = 5 + 3 = 8

3.  **P3:**
    *   Arrival Time = 0
    *   Starts Execution at = 8 (after P2 finishes)
    *   Waiting Time = Start Time - Arrival Time = 8 - 0 = **8**
    *   Completion Time = 8 + 8 = 16

**Average Waiting Time = (0 + 5 + 8) / 3 = 13 / 3 ≈ 4.33**

## Practice Task

Consider the following processes with their arrival times and burst times. Calculate the waiting time for each process using the **Shortest Job First (SJF)** non-preemptive scheduling algorithm. Assume all processes arrive at the beginning and are ready to run.

| Process | Arrival Time | Burst Time |
| :------ | :----------- | :--------- |
| A       | 0            | 7          |
| B       | 1            | 4          |
| C       | 2            | 1          |
| D       | 3            | 4          |

**Hint:** For non-preemptive SJF, once a process starts, it runs to completion. The scheduler chooses the shortest job among those *currently in the ready queue* when the CPU becomes free.

## Self-Check Questions

1.  If a process arrives at time 2 and starts execution at time 7, what is its waiting time?
2.  In the FCFS example above, what is the turnaround time for P2? Use this to verify its waiting time.
3.  Why is minimizing waiting time important in CPU scheduling?

## Supports

- [[skills/systems/operating-systems/cpu-scheduling/microskills/waiting-time-calculation|Waiting Time Calculation]]
