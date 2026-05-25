---
type: "medium"
title: "Understanding the Shortest Time-to-Completion First (STCF) Algorithm"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/stcf-algorithm-principles|stcf-algorithm-principles]]"
learning-time-in-minutes: 4
---
# Understanding the Shortest Time-to-Completion First (STCF) Algorithm

The Shortest Time-to-Completion First (STCF) algorithm is a preemptive CPU scheduling method. It prioritizes processes based on their remaining execution time. The CPU is always allocated to the process that has the least amount of time left to complete its execution. If a new process arrives with a shorter remaining time than the currently executing process, the CPU is preempted and given to the new process.

### Key Principles of STCF

*   **Preemptive Nature:** STCF is preemptive. This means a running process can be interrupted if a new process arrives with a shorter remaining execution time.
*   **Shortest Remaining Time First:** The core decision-making factor is the shortest time a process needs to finish.
*   **Minimizes Average Waiting Time:** By always running the process closest to completion, STCF aims to reduce the overall waiting time for processes.

### How STCF Works

Imagine a CPU processing several tasks. When a new task arrives, the scheduler compares its total estimated execution time with the *remaining* execution time of the currently running task.

*   If the new task's total execution time is less than the remaining time of the current task, the current task is paused (preempted), and the new task begins execution.
*   If the new task's total execution time is greater than or equal to the remaining time of the current task, the current task continues to run.
*   If multiple processes have the same shortest remaining time, a tie-breaking rule (often FIFO) is used.

### Practical Scenario

Let's consider a scenario with three processes:

| Process ID | Arrival Time | Burst Time (Total) |
| :--------- | :----------- | :----------------- |
| P1         | 0            | 8                  |
| P2         | 1            | 4                  |
| P3         | 2            | 9                  |
| P4         | 3            | 5                  |

Here's how STCF would schedule them:

1.  **At time 0:** P1 arrives. It's the only process, so it starts running. Remaining time for P1 = 8.
2.  **At time 1:** P2 arrives. P1 has run for 1 unit, so its remaining time is 7. P2's burst time is 4. Since 4 < 7, P1 is preempted, and P2 starts running.
3.  **At time 2:** P3 arrives. P2 has run for 1 unit, so its remaining time is 3. P3's burst time is 9. P1's remaining time is 7. Since 3 < 7 and 3 < 9, P2 continues to run.
4.  **At time 3:** P4 arrives. P2 has run for 2 units, so its remaining time is 2. P3's remaining time is 9. P1's remaining time is 7. P4's burst time is 5. Since 2 is the shortest remaining time, P2 continues to run.
5.  **At time 5:** P2 finishes (ran for 4 units: 1 at time 1, 1 at time 2, 1 at time 3, 1 at time 4). Now, we look at the remaining processes: P1 (remaining 7), P3 (remaining 9), P4 (remaining 5). P4 has the shortest remaining time (5), so it starts running.
6.  **At time 10:** P4 finishes (ran for 5 units: 1 at time 5, 1 at time 6, 1 at time 7, 1 at time 8, 1 at time 9). Now, we look at P1 (remaining 7) and P3 (remaining 9). P1 has the shorter remaining time (7), so it resumes execution.
7.  **At time 17:** P1 finishes (ran for 7 more units). Only P3 remains, with a burst time of 9. P3 starts running.
8.  **At time 26:** P3 finishes.

### Practice Task

Consider the following processes:

| Process ID | Arrival Time | Burst Time (Total) |
| :--------- | :----------- | :----------------- |
| A          | 0            | 6                  |
| B          | 2            | 2                  |
| C          | 4            | 3                  |

Trace the execution of these processes using the STCF algorithm. Determine the completion time for each process and calculate the average waiting time.

### Self-Check Questions

1.  What is the primary characteristic that distinguishes STCF from First Come, First Served (FCFS)?
2.  If two processes have the same shortest remaining execution time, how is the tie typically broken?
3.  Why is STCF considered a preemptive algorithm?
4.  In the given practical scenario, what was the remaining time of P1 when P4 arrived?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/stcf-algorithm-principles|STCF Algorithm Principles]]
