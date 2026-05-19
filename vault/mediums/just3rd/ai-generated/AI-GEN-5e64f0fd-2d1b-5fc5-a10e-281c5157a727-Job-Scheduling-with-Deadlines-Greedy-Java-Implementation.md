---
type: "medium"
title: "Job Scheduling with Deadlines: Greedy Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/job-scheduling-with-deadlines-greedy-java-implementation|Job Scheduling with Deadlines Greedy Java Implementation]]"
---
# Job Scheduling with Deadlines: Greedy Java Implementation

This lesson focuses on applying a greedy approach to solve the Job Scheduling with Deadlines problem in Java. This is a classic problem where we aim to maximize the profit by scheduling jobs with different deadlines and profits.

## The Problem

Imagine you have a list of jobs. Each job has:
*   A unique **ID**.
*   A **deadline** by which it must be completed.
*   A **profit** you earn if the job is completed by its deadline.

You can only work on one job at a time, and each job takes one unit of time to complete. The goal is to select a subset of jobs and schedule them in such a way that the total profit is maximized.

## Greedy Strategy

The greedy strategy for Job Scheduling with Deadlines is as follows:

1.  **Sort jobs by profit:** Always consider the jobs with the highest profit first. This is the core greedy choice – we want to prioritize the most lucrative opportunities.
2.  **Schedule jobs:** For each job, try to schedule it as late as possible, but still before its deadline. This leaves earlier time slots open for other high-profit jobs that might have earlier deadlines.

## Algorithm Steps

Here's a breakdown of the algorithm:

1.  **Represent Jobs:** Create a class or structure to hold job information (ID, deadline, profit).
2.  **Sort Jobs:** Sort the array or list of jobs in descending order of their profits.
3.  **Determine Maximum Deadline:** Find the maximum deadline among all jobs. This will help us determine the size of our schedule timeline.
4.  **Initialize Schedule:** Create a data structure (e.g., an array) to represent the time slots available for scheduling. The size of this array should be equal to the maximum deadline. Initialize all slots as available.
5.  **Iterate and Schedule:** Iterate through the sorted jobs. For each job:
    *   Iterate backward from its deadline down to time slot 1.
    *   If an available time slot is found within its deadline, schedule the job in that slot and mark the slot as occupied. Add the job's profit to the total profit.
    *   If no available slot is found before or at its deadline, the job cannot be scheduled and is skipped.

## Java Implementation

Let's implement this in Java.

First, define a `Job` class:

```java
class Job {
    char id;
    int deadline;
    int profit;

    public Job(char id, int deadline, int profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}
```

Now, the main scheduling logic:

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class JobScheduling {

    static class Job {
        char id;
        int deadline;
        int profit;

        public Job(char id, int deadline, int profit) {
            this.id = id;
            this.deadline = deadline;
            this.profit = profit;
        }

        @Override
        public String toString() {
            return "Job{" +
                   "id=" + id +
                   ", deadline=" + deadline +
                   ", profit=" + profit +
                   '}';
        }
    }

    public static void printJobSequence(List<Job> jobs) {
        // 1. Sort jobs by profit in descending order
        Collections.sort(jobs, Comparator.comparingInt((Job j) -> j.profit).reversed());

        // 2. Find the maximum deadline
        int maxDeadline = 0;
        for (Job job : jobs) {
            if (job.deadline > maxDeadline) {
                maxDeadline = job.deadline;
            }
        }

        // 3. Initialize the schedule (time slots)
        // slot[i] will store the job ID scheduled at time i+1
        char[] schedule = new char[maxDeadline];
        Arrays.fill(schedule, '-'); // '-' indicates an empty slot

        // 4. Track total profit and scheduled job count
        int totalProfit = 0;
        int jobCount = 0;

        // 5. Iterate through sorted jobs and schedule them
        for (Job job : jobs) {
            // Try to schedule the job as late as possible, but before its deadline
            for (int i = Math.min(maxDeadline, job.deadline) - 1; i >= 0; i--) {
                if (schedule[i] == '-') {
                    schedule[i] = job.id;
                    totalProfit += job.profit;
                    jobCount++;
                    break; // Job scheduled, move to the next job
                }
            }
        }

        // Print the results
        System.out.println("Scheduled Jobs:");
        for (int i = 0; i < maxDeadline; i++) {
            if (schedule[i] != '-') {
                System.out.println("Time Slot " + (i + 1) + ": Job " + schedule[i]);
            }
        }
        System.out.println("Total Profit: " + totalProfit);
        System.out.println("Number of Jobs Scheduled: " + jobCount);
    }

    public static void main(String[] args) {
        List<Job> jobs = new ArrayList<>();
        jobs.add(new Job('a', 2, 100));
        jobs.add(new Job('b', 1, 19));
        jobs.add(new Job('c', 2, 27));
        jobs.add(new Job('d', 1, 25));
        jobs.add(new Job('e', 3, 15));

        printJobSequence(jobs);
    }
}
```

## How it Works (Example Walkthrough)

Let's trace the `main` method example:

Jobs:
*   a: deadline=2, profit=100
*   b: deadline=1, profit=19
*   c: deadline=2, profit=27
*   d: deadline=1, profit=25
*   e: deadline=3, profit=15

1.  **Sorted by Profit (Descending):**
    *   a (100)
    *   c (27)
    *   d (25)
    *   b (19)
    *   e (15)

2.  **Maximum Deadline:** `maxDeadline = 3`
3.  **Schedule Array:** `schedule = ['-', '-', '-']` (representing time slots 1, 2, 3)

4.  **Iterating through sorted jobs:**

    *   **Job 'a' (deadline=2, profit=100):**
        *   Check slot `min(3, 2) - 1 = 1`. `schedule[1]` is '-'.
        *   Schedule 'a' at slot 1 (time 2). `schedule = ['-', 'a', '-']`.
        *   `totalProfit = 100`, `jobCount = 1`.

    *   **Job 'c' (deadline=2, profit=27):**
        *   Check slot `min(3, 2) - 1 = 1`. `schedule[1]` is 'a' (occupied).
        *   Check slot `0`. `schedule[0]` is '-'.
        *   Schedule 'c' at slot 0 (time 1). `schedule = ['c', 'a', '-']`.
        *   `totalProfit = 100 + 27 = 127`, `jobCount = 2`.

    *   **Job 'd' (deadline=1, profit=25):**
        *   Check slot `min(3, 1) - 1 = 0`. `schedule[0]` is 'c' (occupied).
        *   No available slot before or at deadline 1. Job 'd' is skipped.

    *   **Job 'b' (deadline=1, profit=19):**
        *   Check slot `min(3, 1) - 1 = 0`. `schedule[0]` is 'c' (occupied).
        *   No available slot before or at deadline 1. Job 'b' is skipped.

    *   **Job 'e' (deadline=3, profit=15):**
        *   Check slot `min(3, 3) - 1 = 2`. `schedule[2]` is '-'.
        *   Schedule 'e' at slot 2 (time 3). `schedule = ['c', 'a', 'e']`.
        *   `totalProfit = 127 + 15 = 142`, `jobCount = 3`.

**Final Output:**
*   Time Slot 1: Job c
*   Time Slot 2: Job a
*   Time Slot 3: Job e
*   Total Profit: 142
*   Number of Jobs Scheduled: 3

## Time Complexity

The dominant operations are sorting the jobs and then iterating through them.
*   Sorting: $$ O(N \log N) $$ where N is the number of jobs.
*   Scheduling loop: In the worst case, for each job, we might iterate up to `maxDeadline` times. If `maxDeadline` is comparable to `N`, this could be $$ O(N \cdot \text{maxDeadline}) $$.

However, a more precise analysis considering the `schedule` array as a way to find the next available slot leads to the overall time complexity being dominated by the sorting step, resulting in $$ O(N \log N) $$. If `maxDeadline` is significantly larger than `N`, the scheduling loop can become a bottleneck. In practice, `maxDeadline` is often related to `N`.

## When to Use This Greedy Approach

This greedy approach is optimal for the Job Scheduling with Deadlines problem when:
*   Each job takes one unit of time.
*   We want to maximize total profit.
*   Jobs cannot be preempted (once started, they must finish).

By always picking the highest profit job and scheduling it as late as possible, we ensure that we don't block out earlier slots for other potentially high-profit jobs that have tighter deadlines.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/job-scheduling-with-deadlines-greedy-java-implementation|Job Scheduling with Deadlines Greedy Java Implementation]]
