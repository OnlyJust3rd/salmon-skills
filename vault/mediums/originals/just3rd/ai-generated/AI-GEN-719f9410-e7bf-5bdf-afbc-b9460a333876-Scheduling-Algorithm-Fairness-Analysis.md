---
type: "medium"
title: "Analyzing Fairness in CPU Scheduling Algorithms"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/scheduling-algorithm-fairness-analysis|scheduling-algorithm-fairness-analysis]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/cpu-scheduling|cpu-scheduling]]"
learning-time-in-minutes: 3
---
# Analyzing Fairness in CPU Scheduling Algorithms

CPU scheduling algorithms aim to distribute CPU time among competing processes. While efficiency (e.g., throughput, turnaround time) is crucial, **fairness** is equally important. Fairness ensures that no process is starved (denied access to the CPU indefinitely) and that each process gets a reasonable share of the CPU over time. This lesson focuses on how to analyze this fairness.

## What is Fairness in Scheduling?

Fairness in CPU scheduling can be understood in a few ways:

*   **Absence of Starvation:** Every process eventually gets to run.
*   **Proportional Share:** Processes receive CPU time proportional to their needs or priority (though defining "need" can be complex).
*   **Equal Share:** In some scenarios, fairness might imply an equal share of CPU time for all processes, especially if they have similar priorities.

## Analyzing Fairness: A Practical Scenario

Imagine a web server handling requests. Different requests might come from various users or services, each requiring CPU time to process.

Consider two algorithms:

1.  **First-Come, First-Served (FCFS):** Processes are served in the order they arrive.
2.  **Shortest Remaining Time First (SRTF):** The process with the least remaining CPU time is executed.

Let's analyze their fairness with the following processes:

| Process ID | Arrival Time | CPU Burst Time |
| :--------- | :----------- | :------------- |
| P1         | 0            | 10             |
| P2         | 2            | 2              |
| P3         | 4            | 5              |

**Scenario Analysis:**

*   **FCFS:**
    *   P1 starts at time 0 and runs for 10 units.
    *   P2 arrives at time 2 but must wait until P1 finishes at time 10. P2 runs from 10 to 12.
    *   P3 arrives at time 4 but waits until P2 finishes at time 12. P3 runs from 12 to 17.
    *   In this case, P2 and P3 experienced significant waiting times because P1 had a long burst. FCFS can be unfair if a long process arrives before short ones.

*   **SRTF:**
    *   At time 0, only P1 is ready. P1 runs.
    *   At time 2, P2 arrives. P1 has 8 units remaining. P2 needs 2 units. SRTF preempts P1, and P2 runs from time 2 to 4.
    *   At time 4, P3 arrives. P1 has 8 units remaining. P3 needs 5 units. P2 is finished. SRTF chooses P3 to run (since 5 < 8) from time 4 to 9.
    *   At time 9, only P1 is left with 8 units. P1 runs from time 9 to 17.
    *   SRTF generally provides better average waiting times but can lead to starvation if short processes keep arriving, perpetually delaying longer ones.

**Fairness Observation:** FCFS is fair in terms of order but not necessarily in terms of response time for short jobs. SRTF is better for short jobs but risks starving long ones.

## Practice Task

Consider the following processes and analyze the fairness of a **Round Robin (RR)** scheduler with a time quantum of `q=3`.

| Process ID | Arrival Time | CPU Burst Time |
| :--------- | :----------- | :------------- |
| A          | 0            | 7              |
| B          | 2            | 4              |
| C          | 5            | 2              |

Track the execution of each process. How long does each process wait in total? Does any process appear to be significantly disadvantaged or starved in this short example?

## Self-Check Questions

1.  What is the primary concern when analyzing the fairness of a scheduling algorithm?
2.  Under what circumstances might FCFS be considered unfair?
3.  Explain how a "short" process arriving continuously could potentially cause starvation in an SRTF scheduler.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/scheduling-algorithm-fairness-analysis|Scheduling Algorithm Fairness Analysis]]
