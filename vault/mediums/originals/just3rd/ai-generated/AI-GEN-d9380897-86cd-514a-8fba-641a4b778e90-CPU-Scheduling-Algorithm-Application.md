---
type: "medium"
title: "Applying CPU Scheduling Algorithms"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/cpu-scheduling-algorithm-application|cpu-scheduling-algorithm-application]]"
learning-time-in-minutes: 3
---
# Applying CPU Scheduling Algorithms

This lesson focuses on the practical application of various CPU scheduling algorithms. Understanding how these algorithms work is crucial for optimizing system performance. We will apply them to a set of processes and analyze the results.

## The Scenario

Imagine you are managing a small server with a few processes waiting to be executed. Each process has an arrival time (when it enters the ready queue) and a burst time (how long it needs the CPU). Your goal is to select a scheduling algorithm and apply it to these processes, then evaluate its efficiency.

Here are the processes:

| Process ID | Arrival Time | Burst Time |
| :--------- | :----------- | :--------- |
| P1           | 0            | 5          |
| P2           | 1            | 3          |
| P3           | 2            | 8          |
| P4           | 3            | 6          |

Let's apply the **First-Come, First-Served (FCFS)** algorithm. FCFS is the simplest algorithm: processes are executed in the order they arrive.

### FCFS Application

1.  **P1 arrives at time 0.** It starts executing.
2.  **P2 arrives at time 1.** It waits.
3.  **P3 arrives at time 2.** It waits.
4.  **P4 arrives at time 3.** It waits.
5.  **P1 finishes at time 5.**
6.  **P2 starts at time 5** (it was the next in line).
7.  **P2 finishes at time 8** (5 + 3).
8.  **P3 starts at time 8.**
9.  **P3 finishes at time 16** (8 + 8).
10. **P4 starts at time 16.**
11. **P4 finishes at time 22** (16 + 6).

### Performance Metrics for FCFS

To analyze the efficiency, we calculate:

*   **Completion Time (CT):** The time a process finishes execution.
*   **Turnaround Time (TAT):** CT - Arrival Time. This is the total time a process spends in the system.
*   **Waiting Time (WT):** TAT - Burst Time. This is the time a process spends waiting in the ready queue.

| Process ID | Arrival Time | Burst Time | Completion Time | Turnaround Time | Waiting Time |
| :--------- | :----------- | :--------- | :-------------- | :-------------- | :----------- |
| P1           | 0            | 5          | 5               | 5 - 0 = 5       | 5 - 5 = 0    |
| P2           | 1            | 3          | 8               | 8 - 1 = 7       | 7 - 3 = 4    |
| P3           | 2            | 8          | 16              | 16 - 2 = 14     | 14 - 8 = 6   |
| P4           | 3            | 6          | 22              | 22 - 3 = 19     | 19 - 6 = 13  |

**Average TAT:** (5 + 7 + 14 + 19) / 4 = 12.25
**Average WT:** (0 + 4 + 6 + 13) / 4 = 5.75

## Practice Task

Apply the **Shortest Job First (SJF)** algorithm (non-preemptive version) to the same set of processes. SJF executes the process with the smallest burst time next. If two processes have the same burst time, FCFS is used.

**Processes:**

| Process ID | Arrival Time | Burst Time |
| :--------- | :----------- | :--------- |
| P1           | 0            | 5          |
| P2           | 1            | 3          |
| P3           | 2            | 8          |
| P4           | 3            | 6          |

**Your task:**
1.  Draw a Gantt chart showing the execution order.
2.  Create a table similar to the one above to calculate CT, TAT, and WT for each process.
3.  Calculate the average TAT and average WT for SJF.

## Self-Check Questions

1.  In the FCFS example, which process had to wait the longest before starting execution?
2.  What is the primary advantage of SJF over FCFS?
3.  If a new process with a burst time of 1 arrived at time 4, how would SJF handle it differently than FCFS in our example?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/cpu-scheduling-algorithm-application|CPU Scheduling Algorithm Application]]
