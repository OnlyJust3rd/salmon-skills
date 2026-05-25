---
type: "medium"
title: "Understanding the Shortest Job First (SJF) Algorithm"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/sjf-algorithm-principles|sjf-algorithm-principles]]"
learning-time-in-minutes: 3
---
# Understanding the Shortest Job First (SJF) Algorithm

The Shortest Job First (SJF) is a CPU scheduling algorithm that aims to minimize the average waiting time of processes. It works by selecting the process with the smallest estimated execution time (burst time) from the ready queue to run next.

## Core Principle

The fundamental idea behind SJF is simple: get the shortest tasks out of the way first. This intuitively leads to better overall system performance because shorter processes don't have to wait behind longer ones for extended periods.

There are two main variations of SJF:

1.  **Non-preemptive SJF:** Once a process starts executing, it runs to completion without interruption, even if a shorter process arrives later.
2.  **Preemptive SJF (also known as Shortest Remaining Time First - SRTF):** If a new process arrives with a burst time shorter than the remaining time of the currently executing process, the current process is preempted (paused), and the new, shorter process begins execution.

## How it Works (Non-preemptive SJF Example)

Imagine the following processes arrive at the same time and are ready to run:

| Process | Burst Time |
| :------ | :--------- |
| P1      | 6 units    |
| P2      | 8 units    |
| P3      | 7 units    |
| P4      | 3 units    |

1.  **Arrival:** All processes (P1, P2, P3, P4) are in the ready queue.
2.  **Selection:** SJF looks at the burst times: P1 (6), P2 (8), P3 (7), P4 (3). The shortest burst time is P4 (3 units).
3.  **Execution:** P4 is selected and runs for 3 units.
4.  **Next Selection:** After P4 finishes, SJF again looks at the remaining processes in the ready queue: P1 (6), P2 (8), P3 (7). The shortest is P1 (6 units).
5.  **Execution:** P1 is selected and runs for 6 units.
6.  **Next Selection:** After P1 finishes, the remaining processes are P2 (8) and P3 (7). The shortest is P3 (7 units).
7.  **Execution:** P3 runs for 7 units.
8.  **Final Execution:** Finally, P2 runs for its burst time of 8 units.

The execution order would be P4 -> P1 -> P3 -> P2.

## Practical Scenario

Consider a print spooler. If multiple users send print jobs, SJF would prioritize printing very short documents (e.g., a single page) before longer reports. This ensures that quick print jobs are completed rapidly, leading to higher user satisfaction for those specific tasks. However, a very long print job might experience significant delays.

## Practice Task

Suppose the following processes arrive at time 0:
*   Process A: Burst Time = 10
*   Process B: Burst Time = 2
*   Process C: Burst Time = 5

Using the **non-preemptive SJF** algorithm, determine the order in which these processes will execute and calculate the average waiting time.

## Self-Check Questions

1.  What is the primary goal of the Shortest Job First (SJF) scheduling algorithm?
2.  In non-preemptive SJF, what happens if a process with a shorter burst time arrives after a longer process has already started execution?
3.  What is the potential drawback of using SJF?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/sjf-algorithm-principles|SJF Algorithm Principles]]
