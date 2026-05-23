---
type: "medium"
title: "Comparative Scheduling Performance"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/cpu-scheduling/microskills/comparative-scheduling-performance|comparative-scheduling-performance]]"
learning-time-in-minutes: 3
---
# Comparative Scheduling Performance

Understanding how different CPU scheduling algorithms perform is crucial for optimizing system efficiency and user experience. This lesson focuses on analyzing and comparing the performance characteristics of common scheduling algorithms.

## What is Comparative Scheduling Performance?

Comparative scheduling performance involves evaluating CPU scheduling algorithms based on metrics like **throughput**, **turnaround time**, **waiting time**, **response time**, and **fairness**. We'll examine how algorithms like First-In, First-Out (FIFO), Shortest Job First (SJF), Shortest Remaining Time First (STCF), Multilevel Feedback Queue (MLFQ), and Lottery Scheduling stack up against each other.

## Performance Metrics

*   **Throughput:** The number of processes completed per unit of time. Higher is better.
*   **Turnaround Time:** The total time from a process's arrival to its completion. Lower is better.
*   **Waiting Time:** The time a process spends waiting in the ready queue. Lower is better.
*   **Response Time:** The time from a request being submitted until the first response is produced. Lower is better, especially for interactive systems.
*   **Fairness:** Ensuring that each process gets its "fair share" of CPU time, preventing starvation.

## Performance Comparison Table

| Algorithm             | Throughput | Turnaround Time | Waiting Time | Response Time | Fairness      | Best For                                  |
| :-------------------- | :--------- | :-------------- | :----------- | :------------ | :------------ | :---------------------------------------- |
| **FIFO**              | Moderate   | Variable        | Variable     | Variable      | Poor          | Simple batch systems                      |
| **SJF (Non-preemptive)** | High       | Low             | Low          | High          | Moderate      | Batch systems where average waiting time is critical |
| **STCF (Preemptive SJF)** | High       | Very Low        | Very Low     | Low           | Good          | Systems where minimizing average waiting time is paramount |
| **MLFQ**              | Moderate   | Moderate        | Moderate     | Low           | Good          | Interactive systems, diverse workloads      |
| **Lottery Scheduling**| Moderate   | Moderate        | Moderate     | Moderate      | Excellent     | Systems needing highly configurable fairness |

### Scenario: A Web Server Under Load

Imagine a web server. It receives requests for web pages, images, and dynamic content.

*   **FIFO** might be problematic if a long-running dynamic content request arrives first, blocking all subsequent, short image requests.
*   **SJF/STCF** would be excellent for quickly serving many small image requests, but a very long database query could still cause issues if not handled carefully with preemption (STCF).
*   **MLFQ** is well-suited here. Short, interactive requests for static pages can get immediate attention, while longer, CPU-intensive tasks are moved to lower priority queues.
*   **Lottery Scheduling** could be used to guarantee a certain proportion of CPU time for critical administrative tasks, even during peak load.

## Practice Task

Consider the following set of processes arriving at the CPU:

| Process | Arrival Time | Burst Time |
| :------ | :----------- | :------- |
| P1      | 0            | 5        |
| P2      | 1            | 3        |
| P3      | 2            | 8        |
| P4      | 3            | 6        |

1.  **Calculate** the average waiting time and average turnaround time for FIFO and SJF (non-preemptive) scheduling.
2.  **Compare** the results. Which algorithm performs better for this specific workload according to these metrics?
3.  **Discuss** the trade-offs you observe between the two algorithms.

## Self-Check Questions

1.  What is the primary advantage of STCF over SJF?
2.  Why is fairness often a concern with simple algorithms like FIFO?
3.  For an interactive operating system (like your laptop), which algorithm characteristics would be most important and why?
4.  When might you choose a more complex algorithm like MLFQ or Lottery Scheduling over a simpler one?

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/cpu-scheduling/microskills/comparative-scheduling-performance|Comparative Scheduling Performance]]
