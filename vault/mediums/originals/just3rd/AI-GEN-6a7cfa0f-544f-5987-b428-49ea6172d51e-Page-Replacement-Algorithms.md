---
type: "medium"
title: "Page Replacement Algorithms: Keeping Memory Tidy"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/memory-virtualization/microskills/page-replacement-algorithms|page-replacement-algorithms]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/memory-virtualization/memory-virtualization|memory-virtualization]]"
learning-time-in-minutes: 5
---
# Page Replacement Algorithms: Keeping Memory Tidy

In the world of virtual memory, our operating system is constantly juggling which pieces of data (pages) should reside in physical RAM and which should be stored on slower disk (backing storage). When a new page needs to be brought into RAM but there's no free space, the OS must decide which existing page to "evict" or replace. This is where **page replacement algorithms** come into play. Their goal is to choose a page to remove in a way that minimizes future page faults.

## Why Do We Need Page Replacement?

Imagine RAM as a small, exclusive club. When a process needs a page that's not in RAM (a **page fault**), it's like someone arriving at the club needing entry. If the club is full, the bouncer (the OS) has to ask someone to leave to make space. A good bouncer would ask someone who is unlikely to come back soon, or someone who has been there a long time. Similarly, a good page replacement algorithm aims to evict pages that are least likely to be needed again soon.

## Common Page Replacement Algorithms

Let's explore some of the most common algorithms:

### 1. First-In, First-Out (FIFO)

This is the simplest algorithm to understand. It treats memory pages like a queue. The page that has been in memory the longest is the one that gets replaced.

*   **How it works:** When a page fault occurs and memory is full, the page that was loaded into memory earliest is selected for eviction.
*   **Analogy:** Think of a line at a ticket counter. The person who joined the line first is served first and leaves. The next person in line is then served.
*   **Pros:** Easy to implement.
*   **Cons:** Can be inefficient. It might evict a page that is actively being used, simply because it was loaded early. This can lead to a high page fault rate (known as **Belady's anomaly**).

### 2. Least Recently Used (LRU)

This algorithm is based on the principle of **locality of reference**, which suggests that programs tend to access data that they have accessed recently. Therefore, it makes sense to keep pages that have been used recently in memory and evict pages that haven't been used for the longest time.

*   **How it works:** When a page fault occurs and memory is full, the page that has not been referenced for the longest period is replaced. Each page has a timestamp associated with its last use.
*   **Analogy:** Imagine you're packing a suitcase for a trip. You'd want to keep the clothes you're most likely to wear on this trip easily accessible, and pack away the ones you haven't worn in ages.
*   **Pros:** Generally performs very well and is a good practical algorithm.
*   **Cons:** Can be complex to implement efficiently. Keeping track of the exact usage order of all pages can require significant overhead (e.g., using counters or linked lists).

### 3. Optimal Page Replacement (OPT) or MIN

This algorithm is theoretically optimal, meaning it will result in the fewest possible page faults. However, it's not practical to implement in a real operating system.

*   **How it works:** When a page fault occurs and memory is full, the page that will not be used for the longest period of time in the future is replaced.
*   **Analogy:** If you could see into the future, you'd know exactly which books you'll need for your next study session. You'd pack away the books you won't touch for weeks.
*   **Pros:** Provides the theoretical minimum page faults.
*   **Cons:** Requires perfect knowledge of the future execution sequence, which is impossible to obtain. It's primarily used as a benchmark to compare other algorithms against.

### 4. Least Frequently Used (LFU)

This algorithm evicts the page that has been accessed the least number of times.

*   **How it works:** Each page is assigned a counter. When a page is accessed, its counter is incremented. When a page fault occurs and memory is full, the page with the lowest counter is replaced. If there's a tie, LRU or FIFO might be used to break it.
*   **Analogy:** At a library, the book that has been borrowed the least number of times is the one you might consider removing from the popular shelf to make space for newer arrivals.
*   **Pros:** Can be effective if a page is truly not being used.
*   **Cons:** Pages that have been in memory a long time might accumulate high counts even if they are no longer actively used. It also requires maintaining counters for all pages.

### 5. Not Frequently Used (NFU)

This is a variation of LFU that tries to mitigate the issue of old, infrequently used pages. It also uses counters but shifts the counters periodically.

*   **How it works:** Each page has a counter. Periodically, the counters are shifted right (divided by 2), and the current page usage (1 if used, 0 if not) is added to the least significant bit. The page with the lowest counter is replaced.
*   **Pros:** Tries to give more recent usage a slightly higher weight than pure LFU by effectively decaying older counts.
*   **Cons:** Still requires periodic shifting and can be less responsive to sudden changes in access patterns than LRU.

## Practical Considerations

In practice, LRU and its approximations are commonly used because they strike a good balance between performance and implementation complexity. Pure LRU is difficult to implement efficiently, so operating systems often use **approximations of LRU**. These approximations typically involve using a reference bit for each page. The reference bit is set by the hardware whenever the page is accessed. The OS can then periodically check these bits to get an idea of page usage.

Understanding these algorithms is crucial for comprehending how virtual memory efficiently manages system resources and provides the illusion of a much larger memory space than physically available.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/memory-virtualization/microskills/page-replacement-algorithms|Page Replacement Algorithms]]
