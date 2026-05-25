---
type: medium
title: Analyzing Disk Scheduling Algorithm Efficiency
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[disk-scheduling-algorithm-efficiency|disk-scheduling-algorithm-efficiency]]"
learning-time-in-minutes: 5
---
# Analyzing Disk Scheduling Algorithm Efficiency

Understanding how different disk scheduling algorithms perform is crucial for optimizing I/O operations and overall system responsiveness. This lesson focuses on analyzing the comparative efficiency of these algorithms by examining their operational mechanisms and the resulting performance implications.

## What is Disk Scheduling?

Disk scheduling algorithms are used by operating systems to determine the order in which I/O requests to the disk are serviced. The primary goal is to minimize the time the disk head spends moving (seek time) and waiting for the disk to rotate to the correct sector (rotational latency). This directly impacts the **total access time**, which is the sum of seek time, rotational latency, and transfer time.

## Key Metrics for Efficiency

When analyzing disk scheduling algorithm efficiency, we typically consider:

*   **Average Seek Time:** The average distance the disk head has to move to satisfy I/O requests.
*   **Average Rotational Latency:** The average time spent waiting for the desired sector to rotate under the read/write head.
*   **Throughput:** The number of I/O requests serviced per unit of time.
*   **Waiting Time:** The total time requests spend in the queue waiting to be serviced.
*   **Turnaround Time:** The total time from when a request arrives until it is completed.

## Common Disk Scheduling Algorithms and Their Efficiency Analysis

Let's analyze the efficiency of some common algorithms. We'll use a simplified scenario where the disk head is currently at cylinder 50, and the pending requests are for cylinders: 98, 183, 37, 122, 64, 67, 124, 176, 15. The disk has 200 cylinders (0 to 199).

### 1. First-Come, First-Served (FCFS)

*   **Mechanism:** Services requests in the order they arrive.
*   **Efficiency Analysis:**
    *   **Pros:** Simple to implement.
    *   **Cons:** Can lead to long waiting times and excessive head movement if requests are scattered across the disk. It doesn't consider the head's current position, often resulting in a lot of back-and-forth movement.
*   **Scenario Walkthrough:**
    *   Current Head Position: 50
    *   Requests: 98, 183, 37, 122, 64, 67, 124, 176, 15
    *   Order of Service: 98, 183, 37, 122, 64, 67, 124, 176, 15
    *   Head Movements:
        *   50 -> 98 (48)
        *   98 -> 183 (85)
        *   183 -> 37 (146)
        *   37 -> 122 (85)
        *   122 -> 64 (58)
        *   64 -> 67 (3)
        *   67 -> 124 (57)
        *   124 -> 176 (52)
        *   176 -> 15 (161)
    *   **Total Head Movement:** 48 + 85 + 146 + 85 + 58 + 3 + 57 + 52 + 161 = **695**

### 2. Shortest Seek Time First (SSTF)

*   **Mechanism:** Selects the request closest to the current head position.
*   **Efficiency Analysis:**
    *   **Pros:** Generally reduces average seek time compared to FCFS.
    *   **Cons:** Can lead to **starvation** for requests that are far from the current head position. The head might keep servicing nearby requests indefinitely.
*   **Scenario Walkthrough:**
    *   Current Head Position: 50
    *   Requests: 98, 183, 37, 122, 64, 67, 124, 176, 15
    *   Distances from 50:
        *   98: |98-50|=48
        *   183: |183-50|=133
        *   37: |37-50|=13
        *   122: |122-50|=72
        *   64: |64-50|=14
        *   67: |67-50|=17
        *   124: |124-50|=74
        *   176: |176-50|=126
        *   15: |15-50|=35
    *   Order of Service (closest first): 37, 64, 67, 15, 98, 122, 124, 176, 183
    *   Head Movements:
        *   50 -> 37 (13)
        *   37 -> 64 (27)
        *   64 -> 67 (3)
        *   67 -> 15 (52)
        *   15 -> 98 (83)
        *   98 -> 122 (24)
        *   122 -> 124 (2)
        *   124 -> 176 (52)
        *   176 -> 183 (7)
    *   **Total Head Movement:** 13 + 27 + 3 + 52 + 83 + 24 + 2 + 52 + 7 = **263**

### 3. SCAN (Elevator Algorithm)

*   **Mechanism:** The head moves in one direction (e.g., towards higher cylinder numbers), servicing requests along the way, until it reaches the end of the disk. Then, it reverses direction and services requests in the other direction.
*   **Efficiency Analysis:**
    *   **Pros:** Avoids starvation because all requests will eventually be serviced. Provides good throughput and relatively fair service.
    *   **Cons:** Requests near the end of the scan in the initial direction might experience a longer wait.
*   **Scenario Walkthrough (SCAN, moving towards higher cylinders first):**
    *   Current Head Position: 50
    *   Requests: 98, 183, 37, 122, 64, 67, 124, 176, 15
    *   Order of Service:
        1.  Move from 50 to 199, servicing requests encountered: 64, 67, 98, 122, 124, 176, 183.
        2.  Reverse direction. Move from 199 to 0, servicing requests encountered: 37, 15.
    *   Head Movements:
        *   50 -> 199 (149)
        *   199 -> 37 (162)
        *   37 -> 15 (22)
    *   **Total Head Movement:** 149 + 162 + 22 = **333**

### 4. C-SCAN (Circular SCAN)

*   **Mechanism:** Similar to SCAN, but when it reaches the end of the disk, it immediately jumps back to the beginning (cylinder 0) without servicing any other requests on the way back. It then starts a new scan in the forward direction.
*   **Efficiency Analysis:**
    *   **Pros:** Provides more uniform wait times compared to SCAN. No request has to wait for the head to traverse the entire disk twice.
    *   **Cons:** The long jump from the end of the disk to the beginning can be considered wasted time, although it improves fairness.
*   **Scenario Walkthrough (C-SCAN, moving towards higher cylinders first):**
    *   Current Head Position: 50
    *   Requests: 98, 183, 37, 122, 64, 67, 124, 176, 15
    *   Order of Service:
        1.  Move from 50 to 199, servicing requests: 64, 67, 98, 122, 124, 176, 183.
        2.  Jump from 199 to 0.
        3.  Move from 0 to 199 (or until all remaining requests are serviced), servicing requests: 15, 37.
    *   Head Movements:
        *   50 -> 199 (149)
        *   199 -> 0 (199)
        *   0 -> 37 (37)
    *   **Total Head Movement:** 149 + 199 + 37 = **385**

### Comparative Efficiency Summary

| Algorithm | Total Head Movement (Example) | Average Seek Time (Relative) | Starvation Risk | Fairness |
| :-------- | :---------------------------- | :--------------------------- | :-------------- | :------- |
| FCFS      | 695                           | High                         | Low             | High     |
| SSTF      | 263                           | Low                          | High            | Low      |
| SCAN      | 333                           | Medium                       | Low             | Medium   |
| C-SCAN    | 385                           | Medium                       | Low             | High     |

**Note:** The "Total Head Movement" values are specific to our example and illustrate the *relative* efficiency. Actual average seek time depends on the total number of requests and their distribution.

## Conclusion

By analyzing the head movements and considering factors like starvation and fairness, we can see that algorithms like SSTF generally achieve lower head movement and thus higher efficiency in terms of seeking. However, this comes at the cost of potential starvation. SCAN and C-SCAN offer a good balance, ensuring all requests are serviced while maintaining reasonable performance. The choice of algorithm often depends on the specific workload and the operating system's priorities (e.g., maximizing throughput vs. ensuring fairness).

## Supports

- [[disk-scheduling-algorithm-efficiency|Disk Scheduling Algorithm Efficiency]]
