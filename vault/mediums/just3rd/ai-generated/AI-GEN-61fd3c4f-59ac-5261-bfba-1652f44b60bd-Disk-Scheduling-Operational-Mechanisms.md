---
type: "medium"
title: "Understanding Disk Scheduling Operational Mechanisms"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/i-o-and-file-systems/microskills/disk-scheduling-operational-mechanisms|Disk Scheduling Operational Mechanisms]]"
---
# Understanding Disk Scheduling Operational Mechanisms

This lesson focuses on how different disk scheduling algorithms work internally, laying the groundwork for analyzing their performance implications.

## What is Disk Scheduling?

Disk scheduling is the process of deciding the order in which pending I/O requests to a disk should be serviced. The primary goal is to optimize disk performance by minimizing seek time (the time it takes for the read/write head to move to the correct track) and rotational latency (the time it takes for the desired sector to rotate under the head).

Imagine a librarian needing to retrieve books from a vast, circular library. If they always go back to the start for each request, it would be incredibly inefficient. Disk scheduling algorithms are like smart strategies for the librarian to minimize their travel time and serve requests faster.

## Core Operational Concepts

Before diving into specific algorithms, let's understand some fundamental concepts:

*   **Cylinder:** A concentric track on the disk platter.
*   **Sector:** A small division of a track, where data is stored.
*   **Head Position:** The current physical location of the read/write head.
*   **Seek Time:** The time taken to move the head from its current cylinder to the target cylinder. This is usually the most significant factor in disk access time.
*   **Rotational Latency:** The time taken for the desired sector on the target track to rotate under the read/write head.
*   **I/O Request Queue:** A list of pending requests, each containing the track number to be accessed.

## Common Disk Scheduling Algorithms: Operational Mechanisms

Let's examine how some popular disk scheduling algorithms operate. We'll use a simplified example request queue to illustrate.

**Assumptions for our example:**
*   Current head position: Cylinder 50
*   Disk cylinders range from 0 to 199
*   Request Queue: [98, 183, 37, 122, 199, 10, 41]

### 1. First-Come, First-Served (FCFS)

**Operational Mechanism:**
FCFS is the simplest algorithm. It services requests in the exact order they arrive in the queue. There's no optimization for head movement.

**How it works:**
The algorithm simply picks the request at the front of the queue, moves the head to that cylinder, services the request, and then picks the next one.

**Example Walkthrough:**
1.  Current Head: 50
2.  Queue: [98, 183, 37, 122, 199, 10, 41]
3.  Service 98: Head moves from 50 to 98.
4.  Service 183: Head moves from 98 to 183.
5.  Service 37: Head moves from 183 to 37.
6.  Service 122: Head moves from 37 to 122.
7.  Service 199: Head moves from 122 to 199.
8.  Service 10: Head moves from 199 to 10.
9.  Service 41: Head moves from 10 to 41.

Notice how the head jumps back and forth significantly.

### 2. Shortest Seek Time First (SSTF)

**Operational Mechanism:**
SSTF selects the request that is closest to the current head position, regardless of its arrival order. This aims to minimize seek time.

**How it works:**
At each step, the algorithm scans the entire request queue and calculates the absolute difference between the current head position and the cylinder of each pending request. It then chooses the request with the smallest difference.

**Example Walkthrough:**
1.  Current Head: 50
2.  Queue: [98, 183, 37, 122, 199, 10, 41]
3.  Distances from 50:
    *   98: |50-98| = 48
    *   183: |50-183| = 133
    *   37: |50-37| = 13
    *   122: |50-122| = 72
    *   199: |50-199| = 149
    *   10: |50-10| = 40
    *   41: |50-41| = 9
4.  **Closest request is 41 (distance 9).** Head moves from 50 to 41.
5.  Current Head: 41
6.  Remaining Queue: [98, 183, 37, 122, 199, 10]
7.  Distances from 41:
    *   98: |41-98| = 57
    *   183: |41-183| = 142
    *   37: |41-37| = 4
    *   122: |41-122| = 81
    *   199: |41-199| = 158
    *   10: |41-10| = 31
8.  **Closest request is 37 (distance 4).** Head moves from 41 to 37.
9.  Current Head: 37
10. Remaining Queue: [98, 183, 122, 199, 10]
11. Distances from 37:
    *   98: |37-98| = 61
    *   183: |37-183| = 146
    *   122: |37-122| = 85
    *   199: |37-199| = 162
    *   10: |37-10| = 27
12. **Closest request is 10 (distance 27).** Head moves from 37 to 10.
13. ...and so on.

SSTF can lead to **starvation**, where requests far from the current head position might never be serviced if new, closer requests keep arriving.

### 3. SCAN (Elevator Algorithm)

**Operational Mechanism:**
SCAN simulates the movement of an elevator. The disk arm starts at one end of the disk (e.g., cylinder 0) and moves towards the other end, servicing all requests in its path. When it reaches the end, it reverses direction and repeats the process.

**How it works:**
The algorithm maintains a direction (e.g., "up" or "down"). It moves the head in that direction, servicing requests until it reaches the last cylinder in that direction. Then, it reverses direction and continues servicing requests.

**Example Walkthrough (Assuming SCAN moves from 0 towards 199 first):**
1.  Current Head: 50
2.  Queue: [98, 183, 37, 122, 199, 10, 41]
3.  Direction: UP (towards 199)
4.  The algorithm will scan cylinders 50, 51, ..., 98, ..., 122, ..., 183, ..., 199.
5.  Requests serviced on the way up: 98, 122, 183, 199.
6.  Head reaches 199.
7.  Direction reverses to DOWN (towards 0).
8.  The algorithm will scan cylinders 198, 197, ..., 41, ..., 37, ..., 10.
9.  Requests serviced on the way down: 41, 37, 10.
10. Head reaches 0. The process repeats if there are new requests.

SCAN provides more uniform wait times compared to SSTF and prevents starvation.

### 4. LOOK

**Operational Mechanism:**
LOOK is a variation of SCAN. Instead of going all the way to the ends (0 and 199), it only goes as far as the *last* request in the current direction.

**How it works:**
Similar to SCAN, it maintains a direction. It moves the head in that direction, servicing requests, but it only goes to the *furthest pending request* in that direction before reversing.

**Example Walkthrough (Assuming LOOK moves from current head towards 199 first):**
1.  Current Head: 50
2.  Queue: [98, 183, 37, 122, 199, 10, 41]
3.  Direction: UP (towards 199)
4.  Furthest request in UP direction from 50 is 199.
5.  Head moves from 50, servicing requests in between: 98, 122, 183, 199.
6.  Head reaches 199.
7.  Direction reverses to DOWN (towards 0).
8.  Furthest request in DOWN direction from 199 is 10.
9.  Head moves from 199, servicing requests in between: 41, 37, 10.
10. Head reaches 10. The process repeats.

LOOK is more efficient than SCAN because it avoids unnecessary travel to the disk boundaries if there are no requests there.

### 5. C-SCAN (Circular SCAN)

**Operational Mechanism:**
C-SCAN is another variation of SCAN. It always moves in one direction (e.g., from 0 to 199) servicing requests. When it reaches the end, it *immediately* jumps back to cylinder 0 (without servicing anything on the return trip) and then starts servicing requests again in the same direction.

**How it works:**
The algorithm treats the disk as a circular device. It traverses from one end to the other, servicing requests. Upon reaching the end, it makes a rapid return to the beginning and starts another sweep.

**Example Walkthrough (Assuming C-SCAN moves from 0 towards 199 first):**
1.  Current Head: 50
2.  Queue: [98, 183, 37, 122, 199, 10, 41]
3.  Direction: UP (towards 199)
4.  Head moves from 50, servicing requests: 98, 122, 183, 199.
5.  Head reaches 199.
6.  **Immediate jump back to 0.** (No requests serviced during this return).
7.  Head is now at 0. Direction is still UP (towards 199).
8.  Head moves from 0, servicing any remaining requests in its path: 10, 37, 41.
9.  Head reaches 199. The process repeats.

C-SCAN provides more uniform wait times than SCAN and is often preferred for its fairness.

### 6. C-LOOK

**Operational Mechanism:**
C-LOOK combines the benefits of C-SCAN and LOOK. It only moves to the furthest request in the current direction before reversing, and it immediately jumps back to the closest request in the new direction without servicing on the return.

**How it works:**
Similar to C-SCAN, but it stops at the last request in the current sweep direction, not the disk boundary. Then it jumps back to the first request in the new sweep direction.

**Example Walkthrough:**
1.  Current Head: 50
2.  Queue: [98, 183, 37, 122, 199, 10, 41]
3.  Direction: UP
4.  Furthest UP request from 50 is 199. Head moves: 50 -> 98 -> 122 -> 183 -> 199.
5.  Head reaches 199.
6.  **Immediate jump back** to the closest request in the DOWN direction, which is 10.
7.  Head is now at 10. Direction is DOWN.
8.  Furthest DOWN request from 10 is 41 (in our remaining set). Head moves: 10 -> 37 -> 41.
9.  Head reaches 41.
10. **Immediate jump back** to the closest request in the UP direction, which is 98.
11. Head is now at 98. Direction is UP.
12. ...and so on.

Understanding these operational mechanisms is crucial for analyzing their performance characteristics and selecting the most appropriate algorithm for a given system.

## Supports

- [[skills/systems/operating-systems/i-o-and-file-systems/microskills/disk-scheduling-operational-mechanisms|Disk Scheduling Operational Mechanisms]]
