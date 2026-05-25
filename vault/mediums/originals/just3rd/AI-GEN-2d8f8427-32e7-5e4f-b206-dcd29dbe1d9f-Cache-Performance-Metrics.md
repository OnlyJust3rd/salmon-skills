---
type: "medium"
title: "Calculating Cache Performance Metrics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/memory-hierarchy/microskills/cache-performance-metrics|cache-performance-metrics]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/memory-hierarchy/memory-hierarchy|memory-hierarchy]]"
learning-time-in-minutes: 3
---
# Calculating Cache Performance Metrics

This lesson focuses on applying formulas to evaluate cache performance. Understanding these metrics is crucial for optimizing memory access times, a key aspect of the Memory Hierarchy.

## Key Metrics and Their Formulas

When analyzing cache performance, three primary metrics are used: Hit Rate, Miss Rate, and Average Memory Access Time (AMAT).

### 1. Hit Rate

The Hit Rate represents the proportion of memory accesses that are found in the cache. A higher hit rate indicates better cache performance.

**Formula:**

$$
\text{Hit Rate} = \frac{\text{Number of Cache Hits}}{\text{Total Number of Memory Accesses}}
$$

### 2. Miss Rate

The Miss Rate is the proportion of memory accesses that are *not* found in the cache, requiring a fetch from slower main memory. It is the complement of the Hit Rate.

**Formula:**

$$
\text{Miss Rate} = \frac{\text{Number of Cache Misses}}{\text{Total Number of Memory Accesses}}
$$

Alternatively, you can calculate it using the Hit Rate:

$$
\text{Miss Rate} = 1 - \text{Hit Rate}
$$

### 3. Average Memory Access Time (AMAT)

AMAT is the average time it takes to access data from memory, considering both cache hits and misses. This is arguably the most important metric as it directly reflects performance.

To calculate AMAT, we need to know:
*   **Cache Hit Time ($T_{hit}$):** The time to access data when it's found in the cache.
*   **Cache Miss Penalty ($T_{miss}$):** The additional time required to fetch data from main memory after a cache miss. This includes the time to transfer data from main memory to the cache and then to the CPU.
*   **Miss Rate ($R_{miss}$):** As calculated above.

**Formula:**

$$
\text{AMAT} = T_{hit} + (R_{miss} \times T_{miss})
$$

## Worked Example

Let's apply these formulas with a practical scenario.

**Scenario:**

A system has the following memory access characteristics:
*   Total Memory Accesses: 1000
*   Cache Hits: 950
*   Cache Hit Time ($T_{hit}$): 10 nanoseconds (ns)
*   Cache Miss Penalty ($T_{miss}$): 100 nanoseconds (ns)

**Calculations:**

1.  **Calculate Hit Rate:**
    $$
    \text{Hit Rate} = \frac{950}{1000} = 0.95
    $$
    So, the Hit Rate is 95%.

2.  **Calculate Miss Rate:**
    We can do this in two ways:
    *   **Method A (using Total Misses):**
        Number of Cache Misses = Total Memory Accesses - Cache Hits = 1000 - 950 = 50
        $$
        \text{Miss Rate} = \frac{50}{1000} = 0.05
        $$
    *   **Method B (using Hit Rate):**
        $$
        \text{Miss Rate} = 1 - 0.95 = 0.05
        $$
    So, the Miss Rate is 5%.

3.  **Calculate Average Memory Access Time (AMAT):**
    Using the formula:
    $$
    \text{AMAT} = T_{hit} + (R_{miss} \times T_{miss})
    $$
    $$
    \text{AMAT} = 10 \text{ ns} + (0.05 \times 100 \text{ ns})
    $$
    $$
    \text{AMAT} = 10 \text{ ns} + 5 \text{ ns}
    $$
    $$
    \text{AMAT} = 15 \text{ ns}
    $$

**Interpretation:**

The cache successfully serves 95% of the memory requests. The average time to access any piece of data in memory is 15 nanoseconds. This is significantly better than accessing main memory directly, which would take 100 ns (the miss penalty) plus the time to bring it into the cache if needed.

## Common Pitfalls

*   **Confusing Hit/Miss:** Ensure you correctly identify whether a given number refers to hits or misses.
*   **Incorrect Miss Penalty:** The miss penalty is the *total* time to handle a miss, not just the time to retrieve from main memory if the cache itself takes time to update.
*   **Units:** Maintain consistent units (e.g., nanoseconds) throughout your calculations.

By practicing these calculations, you'll gain a quantitative understanding of how cache design and access patterns impact overall system performance.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/memory-hierarchy/microskills/cache-performance-metrics|Cache Performance Metrics]]
