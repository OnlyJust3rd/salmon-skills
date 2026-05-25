---
type: "medium"
title: "Contiguous Memory Allocation Techniques"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/operating-systems/memory-virtualization/microskills/contiguous-memory-allocation-techniques|contiguous-memory-allocation-techniques]]"
learning-time-in-minutes: 6
---
# Contiguous Memory Allocation Techniques

In memory management, contiguous memory allocation is a strategy where each process is allocated a single, continuous block of memory. This might seem straightforward, but how we manage these blocks efficiently is crucial for system performance. This lesson explores the common techniques used to allocate contiguous memory.

## The Challenge of Contiguous Allocation

When processes arrive and need memory, the operating system must find an available contiguous block large enough to hold them. As processes enter and leave the system, the memory becomes fragmented, leaving small, unusable holes between allocated blocks. The techniques discussed below aim to manage this fragmentation and optimize memory utilization.

## Common Contiguous Memory Allocation Techniques

There are several ways to manage contiguous memory. We'll focus on the most prevalent ones:

### 1. First-Fit

**Concept:**
The First-Fit technique scans the memory from the beginning and allocates the first free block that is large enough to accommodate the incoming process.

**How it Works:**
Imagine a list of free memory blocks, ordered by their starting addresses. When a new process arrives, the allocator checks the blocks one by one from the start of the list. The first block encountered that meets the size requirement is chosen.

**Example:**
Let's say we have the following free blocks:
- Block A: Address 100, Size 50
- Block B: Address 200, Size 100
- Block C: Address 400, Size 75

If a process needs 60 units of memory, the First-Fit algorithm will first check Block A (Size 50). It's too small. Next, it checks Block B (Size 100). This block is large enough, so the process is allocated memory from Block B. If Block B is split, the remaining portion of Block B (now with size 40) becomes a new free block.

**Pros:**
*   **Fast:** Generally quicker than other methods because it doesn't need to search the entire list of free blocks.

**Cons:**
*   **External Fragmentation:** Tends to leave small, unusable holes at the beginning of the memory, which can lead to external fragmentation over time.

### 2. Best-Fit

**Concept:**
The Best-Fit technique scans the entire list of free blocks and allocates the smallest free block that is large enough to hold the process. The goal is to minimize wasted space within the allocated block.

**How it Works:**
Similar to First-Fit, this method also scans the free blocks. However, it keeps track of the "best" block found so far – the one that has the smallest size but is still sufficient. After checking all free blocks, the best one identified is used.

**Example:**
Using the same free blocks as before:
- Block A: Address 100, Size 50
- Block B: Address 200, Size 100
- Block C: Address 400, Size 75

If a process needs 60 units of memory:
- Block A (50) is too small.
- Block B (100) is large enough. The remaining space would be 40.
- Block C (75) is large enough. The remaining space would be 15.

Best-Fit would choose Block C because it results in the smallest leftover fragment (15 units) compared to Block B (40 units).

**Pros:**
*   **Minimizes Internal Fragmentation:** Attempts to use memory as tightly as possible, reducing the amount of wasted space *within* an allocated block.

**Cons:**
*   **Slower:** Requires searching the entire list of free blocks, making it slower than First-Fit.
*   **External Fragmentation:** Still suffers from external fragmentation, as small fragments can be left behind. In fact, by creating very small fragments, it can sometimes make it harder to satisfy larger future requests.

### 3. Worst-Fit

**Concept:**
The Worst-Fit technique scans the entire list of free blocks and allocates the largest free block that is large enough to hold the process. The idea is to leave a large enough remainder that can be more easily used by future processes.

**How it Works:**
This is the opposite of Best-Fit. The algorithm finds the largest available free block that satisfies the process's memory requirement.

**Example:**
Using the same free blocks:
- Block A: Address 100, Size 50
- Block B: Address 200, Size 100
- Block C: Address 400, Size 75

If a process needs 60 units of memory:
- Block A (50) is too small.
- Block B (100) is large enough.
- Block C (75) is large enough.

Worst-Fit would choose Block B because it is the largest block that can satisfy the request (100 units). The remainder would be 40 units.

**Pros:**
*   **Larger Leftover Fragments:** Aims to leave larger fragments, which are more likely to be useful for subsequent processes needing significant memory.

**Cons:**
*   **Slower:** Like Best-Fit, it must scan the entire list of free blocks.
*   **External Fragmentation:** Still a significant issue, as smaller, unusable fragments can accumulate.

### 4. Next-Fit

**Concept:**
The Next-Fit technique is a variation of First-Fit. Instead of always starting the search from the beginning of the free block list, it starts from the location where the last allocation was made.

**How it Works:**
The allocator maintains a pointer to the last allocated block. When a new process needs memory, the search for a suitable free block begins from the block *after* the one pointed to by the pointer. Once a block is allocated, the pointer is updated to point to the block that was just allocated. If the end of the list is reached, the search wraps around to the beginning.

**Example:**
Consider free blocks in a circular list:
- Block A: Address 100, Size 50
- Block B: Address 200, Size 100
- Block C: Address 400, Size 75

Suppose the last allocation used part of Block B. The pointer now points to Block B. If a new process needs 30 units:
- The search starts from the block after Block B, which is Block C. Block C (75) is large enough. The process is allocated from Block C. The pointer would then update to point to Block C.

If Block C were also too small, the search would continue to Block A (wrapping around), and then back to Block B.

**Pros:**
*   **Faster than First-Fit:** Usually faster than First-Fit because it doesn't always restart the search from the beginning. It tends to distribute allocations more evenly across the memory.

**Cons:**
*   **External Fragmentation:** Still susceptible to external fragmentation.

## Summary Table

| Technique   | Search Starts From | Allocation Criteria               | Primary Goal              | Speed     | Fragmentation Impact |
| :---------- | :----------------- | :-------------------------------- | :------------------------ | :-------- | :------------------- |
| **First-Fit** | Beginning of list  | First block large enough          | Speed                     | Fast      | Moderate             |
| **Best-Fit**  | Beginning of list  | Smallest block large enough       | Minimize wasted space     | Slower    | Moderate to High     |
| **Worst-Fit** | Beginning of list  | Largest block large enough        | Leave large usable holes  | Slower    | Moderate to High     |
| **Next-Fit**  | Last allocation point | First block large enough (circular) | Even distribution, Speed  | Fast      | Moderate             |

Understanding these contiguous memory allocation techniques is fundamental to grasping how operating systems manage memory and the trade-offs involved in keeping processes running smoothly.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/operating-systems/memory-virtualization/microskills/contiguous-memory-allocation-techniques|Contiguous Memory Allocation Techniques]]
