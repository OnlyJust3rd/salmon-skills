---
type: "medium"
title: "Analyzing Seek Time in Disk Scheduling"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/i-o-and-file-systems/microskills/seek-time-metrics|Seek Time Metrics]]"
---
# Analyzing Seek Time in Disk Scheduling

When we talk about disk scheduling, a core aspect of optimizing I/O operations, we're fundamentally trying to minimize the time it takes for the disk drive's read/write head to move to the correct track and sector. One of the most significant components of this access time is **seek time**. Understanding seek time metrics is crucial for analyzing and comparing the effectiveness of different disk scheduling algorithms.

## What is Seek Time?

**Seek time** is the time taken by the disk arm (which holds the read/write heads) to move from its current position to the desired track on the disk platter. It's a mechanical delay, and thus, it's generally much slower than electronic operations. Minimizing total seek time directly translates to faster data retrieval.

## Key Seek Time Metrics

When analyzing disk scheduling algorithms, we often look at the total seek time across a sequence of requests. To do this, we need to understand how to calculate the movement.

### 1. Head Movement

This is the most straightforward metric. It's simply the absolute difference in track numbers between the current head position and the target track.

For a sequence of requests $R = \{r_1, r_2, ..., r_n\}$ and an initial head position $H_0$:

Total Head Movement = $$ \sum_{i=1}^{n} |track(r_{i+1}) - track(r_i)| $$
where $$ track(r_0) = H_0 $$.

### 2. Average Seek Time

This metric gives us a sense of the typical seek operation.

Average Seek Time = $$ \frac{\text{Total Head Movement}}{\text{Number of Seek Operations}} $$

### 3. Rotational Latency

While not strictly *seek* time, **rotational latency** (the time it takes for the desired sector to rotate under the read/write head) is another mechanical delay that contributes to total access time. Disk scheduling algorithms aim to minimize this as well, often by grouping requests that are physically close on the disk. We won't delve deeply into rotational latency calculation here, but it's important to remember it's a related factor.

## Analyzing Algorithms Through Seek Time

Different disk scheduling algorithms approach the problem of minimizing seek time in distinct ways. By calculating the head movement for a given sequence of requests under various algorithms, we can see their performance implications.

### Example Scenario

Let's consider a disk with 200 tracks (numbered 0 to 199). The current head position is at track 53. We have a queue of I/O requests for the following tracks: 98, 183, 37, 122, 191, 14, 65, 67.

We'll analyze two common algorithms:

1.  **First-Come, First-Served (FCFS)**
2.  **Shortest Seek Time First (SSTF)**

#### FCFS Analysis

Under FCFS, requests are serviced in the order they arrive in the queue: 98, 183, 37, 122, 191, 14, 65, 67.

*   Initial position: 53
*   Request 1: 98. Movement = $$ |98 - 53| = 45 $$
*   Request 2: 183. Movement = $$ |183 - 98| = 85 $$
*   Request 3: 37. Movement = $$ |37 - 183| = 146 $$
*   Request 4: 122. Movement = $$ |122 - 37| = 85 $$
*   Request 5: 191. Movement = $$ |191 - 122| = 69 $$
*   Request 6: 14. Movement = $$ |14 - 191| = 177 $$
*   Request 7: 65. Movement = $$ |65 - 14| = 51 $$
*   Request 8: 67. Movement = $$ |67 - 65| = 2 $$

**Total Head Movement (FCFS):** $$ 45 + 85 + 146 + 85 + 69 + 177 + 51 + 2 = 660 $$
**Average Seek Time (FCFS):** $$ 660 / 8 = 82.5 $$

Notice how FCFS can result in large jumps back and forth, leading to significant seek times.

#### SSTF Analysis

SSTF services the request with the shortest seek time from the current head position. The algorithm always picks the request closest to the current head.

*   Initial position: 53
*   Requests remaining: {98, 183, 37, 122, 191, 14, 65, 67}

Let's trace the closest requests:

1.  From 53, closest is 65 ($$|65-53|=12$$) or 37 ($$|37-53|=16$$). Choose 65.
    *   Movement = 12. Head is now at 65.
    *   Remaining: {98, 183, 37, 122, 191, 14, 67}
2.  From 65, closest is 67 ($$|67-65|=2$$).
    *   Movement = 2. Head is now at 67.
    *   Remaining: {98, 183, 37, 122, 191, 14}
3.  From 67, closest is 37 ($$|37-67|=30$$) or 98 ($$|98-67|=31$$). Choose 37.
    *   Movement = 30. Head is now at 37.
    *   Remaining: {98, 183, 122, 191, 14}
4.  From 37, closest is 14 ($$|14-37|=23$$).
    *   Movement = 23. Head is now at 14.
    *   Remaining: {98, 183, 122, 191}
5.  From 14, closest is 98 ($$|98-14|=84$$).
    *   Movement = 84. Head is now at 98.
    *   Remaining: {183, 122, 191}
6.  From 98, closest is 122 ($$|122-98|=24$$).
    *   Movement = 24. Head is now at 122.
    *   Remaining: {183, 191}
7.  From 122, closest is 183 ($$|183-122|=61$$) or 191 ($$|191-122|=69$$). Choose 183.
    *   Movement = 61. Head is now at 183.
    *   Remaining: {191}
8.  From 183, closest is 191 ($$|191-183|=8$$).
    *   Movement = 8. Head is now at 191.

**Total Head Movement (SSTF):** $$ 12 + 2 + 30 + 23 + 84 + 24 + 61 + 8 = 244 $$
**Average Seek Time (SSTF):** $$ 244 / 8 = 30.5 $$

### Comparison

| Metric              | FCFS  | SSTF  |
| :------------------ | :---- | :---- |
| Total Head Movement | 660   | 244   |
| Average Seek Time   | 82.5  | 30.5  |

In this specific example, SSTF performs significantly better than FCFS by reducing the total head movement and, consequently, the average seek time. This is because SSTF prioritizes requests that are nearest to the current head position, minimizing those large, costly sweeps across the disk.

## Conclusion

Analyzing seek time is a fundamental skill for understanding disk scheduling. By calculating head movement and average seek times for different algorithms, you can empirically demonstrate their performance characteristics and make informed decisions about which algorithm is best suited for a given workload. Remember that SSTF, while often efficient, can lead to **starvation** for requests that are far away and continuously bypassed. This is a trade-off to consider when analyzing disk scheduling performance.

## Supports

- [[skills/systems/operating-systems/i-o-and-file-systems/microskills/seek-time-metrics|Seek Time Metrics]]
