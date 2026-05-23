---
type: "medium"
title: "Analyzing Disk Scheduling Throughput"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operating-systems/i-o-and-file-systems/microskills/throughput-metrics|throughput-metrics]]"
learning-time-in-minutes: 4
---
# Analyzing Disk Scheduling Throughput

When we talk about disk scheduling, we're essentially looking at how a system manages read/write requests to a hard drive. Different algorithms exist to decide which request to service next. One of the most critical performance metrics to analyze is **throughput**.

## What is Throughput?

In the context of disk scheduling, throughput refers to the **total number of I/O operations (read or write requests) that the disk can service within a given time period.** A higher throughput generally indicates better performance, as the disk is working more efficiently.

Think of it like a busy post office. Throughput is how many packages the post office can process and send out in an hour. If the sorting system is inefficient, fewer packages go out (low throughput). If it's well-organized, more packages are processed (high throughput).

## Factors Affecting Disk Throughput

Several factors influence the throughput of disk scheduling algorithms:

*   **Seek Time:** The time it takes for the disk's read/write head to move to the correct track.
*   **Rotational Latency:** The time it takes for the desired sector to rotate under the read/write head.
*   **Transfer Time:** The time it takes to actually transfer the data from the disk to memory (or vice-versa).

Disk scheduling algorithms aim to minimize the total time spent on seek time and rotational latency, as these are typically the dominant components of an I/O operation's duration. By doing so, they allow the disk to service more requests in the same amount of time, thus increasing throughput.

## Analyzing Throughput with Examples

Let's consider a simplified scenario to understand how different scheduling algorithms can impact throughput.

**Scenario:** A disk with 200 tracks (0-199). The disk head is currently at track 53. The queue of pending requests is: 98, 183, 37, 122, 64, 26, 199.

We'll analyze throughput based on the *total head movement* for a couple of algorithms. Less head movement generally leads to faster servicing of requests and thus higher throughput.

### 1. First-Come, First-Served (FCFS)

FCFS services requests in the order they arrive.

**Request Order:** 98, 183, 37, 122, 64, 26, 199
**Current Position:** 53

**Head Movement:**
*   53 to 98: |98 - 53| = 45
*   98 to 183: |183 - 98| = 85
*   183 to 37: |37 - 183| = 146
*   37 to 122: |122 - 37| = 85
*   122 to 64: |64 - 122| = 58
*   64 to 26: |26 - 64| = 38
*   26 to 199: |199 - 26| = 173

**Total Head Movement:** 45 + 85 + 146 + 85 + 58 + 38 + 173 = **630 tracks**

FCFS can result in significant head movement because it doesn't consider the physical location of the requests. This leads to longer average seek times and lower throughput.

### 2. Shortest Seek Time First (SSTF)

SSTF always services the request that is closest to the current head position.

**Request Queue:** {98, 183, 37, 122, 64, 26, 199}
**Current Position:** 53

1.  **From 53:** Closest is 64 (|64-53|=11). Move to 64.
    *   Queue: {98, 183, 37, 122, 26, 199}
    *   Movement: 11
2.  **From 64:** Closest is 37 (|37-64|=27). Move to 37.
    *   Queue: {98, 183, 122, 26, 199}
    *   Movement: 27
3.  **From 37:** Closest is 26 (|26-37|=11). Move to 26.
    *   Queue: {98, 183, 122, 199}
    *   Movement: 11
4.  **From 26:** Closest is 98 (|98-26|=72). Move to 98.
    *   Queue: {183, 122, 199}
    *   Movement: 72
5.  **From 98:** Closest is 122 (|122-98|=24). Move to 122.
    *   Queue: {183, 199}
    *   Movement: 24
6.  **From 122:** Closest is 183 (|183-122|=61). Move to 183.
    *   Queue: {199}
    *   Movement: 61
7.  **From 183:** Closest is 199 (|199-183|=16). Move to 199.
    *   Queue: {}
    *   Movement: 16

**Total Head Movement:** 11 + 27 + 11 + 72 + 24 + 61 + 16 = **222 tracks**

SSTF significantly reduced the total head movement compared to FCFS (222 vs. 630 tracks). This implies that SSTF would likely result in higher throughput because the disk head is traveling much less distance, allowing it to complete more operations in the same timeframe.

### Analyzing Throughput from Head Movement

The relationship between total head movement and throughput isn't always a direct 1:1 conversion because rotational latency and transfer time are also factors. However, minimizing head movement is a primary goal for improving throughput.

*   **Lower Total Head Movement = Faster Request Servicing = Higher Throughput**
*   **Higher Total Head Movement = Slower Request Servicing = Lower Throughput**

Algorithms like SSTF, SCAN, and C-SCAN aim to reduce head movement by organizing requests spatially. By analyzing the total head movement required by each algorithm for a given set of requests, we can infer which one is likely to yield better throughput. A comprehensive analysis would involve simulating these algorithms with realistic workloads and measuring the actual number of I/O operations completed per second.

## Key Takeaway

When evaluating disk scheduling algorithms, throughput is a crucial metric. Analyzing the total head movement required by different algorithms provides a strong indication of their potential throughput. Algorithms that minimize head movement tend to service requests faster, leading to higher throughput and a more efficient disk system.

## Supports

- [[skills/computing/systems-infrastructure/operating-systems/i-o-and-file-systems/microskills/throughput-metrics|Throughput Metrics]]
