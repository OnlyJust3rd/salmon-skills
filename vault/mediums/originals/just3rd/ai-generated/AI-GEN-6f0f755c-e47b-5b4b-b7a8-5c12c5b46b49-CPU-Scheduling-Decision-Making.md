---
type: "medium"
title: "CPU Scheduling: Making the Decisions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/cpu-scheduling-decision-making|cpu-scheduling-decision-making]]"
learning-time-in-minutes: 3
---
# CPU Scheduling: Making the Decisions

This lesson focuses on understanding how CPU scheduling algorithms decide which process runs next. We'll explore the logic behind these decisions for several common algorithms.

## What's Happening?

CPU scheduling is like a traffic controller for the CPU. When multiple programs (processes) want to use the CPU, the scheduler decides which one gets it and for how long. The "decision-making process" is the set of rules and criteria an algorithm uses to make these choices. It's all about balancing fairness, efficiency, and responsiveness.

## Core Decision-Making Principles

Different algorithms prioritize different aspects:

*   **First In, First Out (FIFO):** The simplest. The process that arrived first gets the CPU first. No complex decisions, just pure order of arrival.
*   **Shortest Job First (SJF):** The algorithm looks at the estimated burst time (how long the process will need the CPU) of all waiting processes and picks the shortest one. This aims for higher throughput.
*   **Shortest Time-to-Completion First (STCF):** A preemptive version of SJF. If a new process arrives that has a shorter remaining burst time than the currently running process, the scheduler interrupts (preempts) the current process and switches to the new one.
*   **Multi-Level Feedback Queue (MLFQ):** This is more dynamic. Processes are moved between different queues, each with its own scheduling priority and time quantum. The scheduler uses a set of rules to decide which queue a process belongs to and which process to run from the highest priority queue. This allows for both short, interactive processes to get quick responses and longer processes to eventually get CPU time.
*   **Lottery Scheduling:** A probabilistic approach. Each process gets a certain number of "lottery tickets." The scheduler randomly picks a winning ticket, and the process holding that ticket gets the CPU. More tickets mean a higher chance of winning. This offers a good balance and fairness.

## Scenario: A Busy Computer

Imagine a computer running several applications:

1.  A web browser with many tabs open (long-running, potentially interactive).
2.  A word processor (interactive, short bursts).
3.  A background download (long-running, steady CPU use).
4.  A quick calculation program (very short burst).

How would different schedulers make decisions here?

*   **FIFO:** The download might run first if it started earliest, potentially making the web browser feel sluggish.
*   **SJF (non-preemptive):** The calculation program would run immediately, then maybe the word processor, before the longer download or browser.
*   **STCF:** If the calculation program arrives while the download is running, it would preempt the download and run.
*   **MLFQ:** Interactive tasks like the browser and word processor would likely be in higher-priority queues, getting faster responses. The download might be in a lower queue.
*   **Lottery:** If the calculation program has many tickets, it might get the CPU even if it arrived later than the download.

## Practice Task

Consider the following processes arriving at time 0 with their estimated burst times:

*   P1: 10 units
*   P2: 5 units
*   P3: 8 units
*   P4: 2 units

For each of the following algorithms, describe *which process would be chosen to run next* and *why* based on their decision-making logic:

1.  FIFO
2.  SJF (non-preemptive)

## Self-Check Questions

1.  What is the primary decision criterion for the SJF scheduling algorithm?
2.  How does STCF differ from SJF in its decision-making?
3.  In Lottery Scheduling, what determines a process's probability of being selected?
4.  Why might an MLFQ scheduler be preferred for a system with both interactive and batch processes?

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/cpu-scheduling/microskills/cpu-scheduling-decision-making|CPU Scheduling Decision-Making]]
