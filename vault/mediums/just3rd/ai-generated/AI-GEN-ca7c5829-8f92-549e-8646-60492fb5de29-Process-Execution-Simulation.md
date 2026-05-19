---
type: "medium"
title: "Simulating Process Execution with Scheduling Algorithms"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/cpu-scheduling/microskills/process-execution-simulation|Process Execution Simulation]]"
---
# Simulating Process Execution with Scheduling Algorithms

This lesson focuses on simulating how CPU scheduling algorithms manage the execution of processes. We'll walk through a practical example to understand how different algorithms affect process flow and resource utilization.

## What is Process Execution Simulation?

Process execution simulation is the act of stepping through the lifecycle of processes as they are managed by a CPU scheduler. This involves tracking when each process arrives, how long it needs the CPU (its burst time), and when it completes. By simulating this, we can analyze the efficiency of different scheduling algorithms.

## Practical Scenario: A Simple Task Scheduler

Imagine you're building a basic operating system task scheduler. You have three processes, P1, P2, and P3, that need to be run on a single CPU. Here's the information for each:

*   **P1:** Arrives at time 0, Burst Time = 5 units
*   **P2:** Arrives at time 1, Burst Time = 3 units
*   **P3:** Arrives at time 2, Burst Time = 4 units

Let's simulate their execution using the **First-Come, First-Served (FCFS)** scheduling algorithm. FCFS is simple: processes are executed in the order they arrive.

### FCFS Simulation

1.  **Time 0:** P1 arrives. The CPU is idle. P1 starts executing.
2.  **Time 1:** P2 arrives. P1 is still running. P2 waits.
3.  **Time 2:** P3 arrives. P1 is still running. P2 and P3 wait.
4.  **Time 5:** P1 finishes. Now, P2 and P3 are waiting. Since P2 arrived before P3, P2 starts executing.
5.  **Time 8:** P2 finishes (ran for 3 units: 5 to 8). P3 starts executing.
6.  **Time 12:** P3 finishes (ran for 4 units: 8 to 12).

**Gantt Chart for FCFS:**

| P1 | P2 | P3 |
|----|----|----|
| 0  | 5  | 8  | 12

**Performance Metrics:**

*   **Turnaround Time:** Completion Time - Arrival Time
    *   P1: 5 - 0 = 5
    *   P2: 8 - 1 = 7
    *   P3: 12 - 2 = 10
*   **Waiting Time:** Turnaround Time - Burst Time
    *   P1: 5 - 5 = 0
    *   P2: 7 - 3 = 4
    *   P3: 10 - 4 = 6

This simulation shows us exactly how long each process spent in the system and waiting for the CPU.

## Practice Task

Now, let's switch gears. Consider the same three processes:

*   **P1:** Arrives at time 0, Burst Time = 5 units
*   **P2:** Arrives at time 1, Burst Time = 3 units
*   **P3:** Arrives at time 2, Burst Time = 4 units

Simulate their execution using the **Shortest Job First (SJF)** non-preemptive scheduling algorithm. SJF executes the process with the smallest burst time among the ready processes.

1.  Draw a Gantt chart for the SJF simulation.
2.  Calculate the Turnaround Time and Waiting Time for each process.

## Self-Check Questions

1.  In the FCFS simulation, which process had the longest turnaround time?
2.  If a new process, P4, arrived at time 3 with a burst time of 2 units, how would FCFS handle it?
3.  Why is simulating process execution important for evaluating scheduling algorithms?

## Supports

- [[skills/systems/operating-systems/cpu-scheduling/microskills/process-execution-simulation|Process Execution Simulation]]
