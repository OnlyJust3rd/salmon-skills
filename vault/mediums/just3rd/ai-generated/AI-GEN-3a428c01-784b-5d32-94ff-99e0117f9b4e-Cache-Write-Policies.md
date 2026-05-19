---
type: "medium"
title: "Cache Write Policies"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/memory-hierarchy/microskills/cache-write-policies|Cache Write Policies]]"
---
# Cache Write Policies

When the CPU modifies data that might be in the cache, it needs to decide how to update both the cache and the main memory. This is where cache write policies come into play. Understanding these policies is crucial for analyzing cache organization and its impact on performance.

## The Core Problem: Data Consistency

The fundamental challenge is maintaining consistency between the data stored in the cache and the data in main memory. When the CPU writes to a memory location, that location might exist in the cache. If it does, we have a **cache hit**. If it doesn't, we have a **cache miss**. The write policy dictates how this write operation is handled in each scenario.

## Write-Through Policy

In a **write-through** policy, every write operation by the CPU is immediately written to both the cache and main memory.

**How it works:**

1.  The CPU performs a write operation to a memory address.
2.  If the address is in the cache (a hit), the data in the cache is updated, and the corresponding data in main memory is *also* updated immediately.
3.  If the address is not in the cache (a miss), the data is typically fetched from main memory into the cache, and then both the cache and main memory are updated. (This is often combined with a "write-allocate" policy, which we'll discuss next).

**Pros:**

*   **Simplicity:** It's straightforward to implement.
*   **Data Consistency:** Main memory is always up-to-date with the cache, simplifying recovery and multiprocessing.

**Cons:**

*   **Performance Overhead:** Writing to main memory is much slower than writing to the cache. Constantly writing to main memory can significantly slow down the CPU, especially if there are many write operations. This leads to frequent memory bus traffic.

## Write-Back Policy

In a **write-back** (also known as **write-behind**) policy, writes are initially made only to the cache. The updated data is written back to main memory only when the cache block containing that data is about to be replaced or evicted.

**How it works:**

1.  The CPU performs a write operation to a memory address.
2.  If the address is in the cache (a hit), the data in the cache is updated. A special **dirty bit** (or modified bit) associated with that cache block is set to "1" (dirty) to indicate that this cache block has been modified and is different from the corresponding block in main memory.
3.  If the address is not in the cache (a miss), the block is fetched from main memory. Then, the data in the cache is updated, and the dirty bit is set.
4.  When a cache block with the dirty bit set to "1" needs to be replaced, its contents are first written back to the corresponding location in main memory *before* the new block is loaded into the cache.

**Pros:**

*   **Improved Write Performance:** Only one write to main memory occurs per modified block (at eviction), reducing write traffic and allowing the CPU to proceed faster after writes.
*   **Reduced Bus Traffic:** Fewer writes to main memory mean less contention on the memory bus.

**Cons:**

*   **Complexity:** Requires additional logic to track the dirty bit for each cache block.
*   **Data Inconsistency (Temporary):** Main memory can be out-of-date with the cache. This can be an issue in multiprocessor systems where other processors might need access to the most current data, or during power failures. Mechanisms like cache coherency protocols are needed to handle this.

## Write-Allocate vs. No-Write-Allocate Policies

These policies are often discussed in conjunction with write-through and write-back, especially concerning cache misses.

### Write-Allocate Policy

When a write miss occurs:

*   The block containing the target data is first fetched from main memory into the cache.
*   Then, the write operation is performed on the cache block.

This policy is typically used with the **write-back** policy because it ensures the data is in the cache before being modified, allowing the dirty bit to be set. It can also be used with write-through.

### No-Write-Allocate Policy

When a write miss occurs:

*   The write operation is performed directly to main memory.
*   The data is *not* fetched into the cache.

This policy is often used with the **write-through** policy. If the data is not likely to be read again soon, fetching it into the cache upon a write miss might be inefficient.

## Combining Policies: A Summary Table

| Policy Combination        | On Write Hit                               | On Write Miss                                                                                                                               | Primary Advantage                  | Primary Disadvantage                          |
| :------------------------ | :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------- | :------------------------------------------- |
| **Write-Through / Write-Allocate** | Write to cache, write to main memory.      | Fetch block from main memory to cache, then write to cache and main memory.                                                                 | Simple, generally consistent.      | High memory write traffic.                   |
| **Write-Through / No-Write-Allocate** | Write to cache, write to main memory.      | Write directly to main memory. Data is not brought into cache.                                                                              | Reduces cache pollution on writes. | Data might not be cached for subsequent reads. |
| **Write-Back / Write-Allocate**    | Write to cache, set dirty bit.             | Fetch block from main memory to cache, set dirty bit, then write to cache.                                                                  | Significantly reduces write traffic. | More complex, needs coherency.               |
| **Write-Back / No-Write-Allocate** | Write to cache, set dirty bit.             | Write directly to main memory. Data is not brought into cache. (Less common; implies dirty bit is set on memory write, which is unusual). | Minimal write traffic.             | Unconventional, potential coherency issues.  |

## Choosing the Right Policy

The choice of write policy depends on the application's workload:

*   **Write-Through:** Good for applications with infrequent writes or when simplicity and immediate data consistency are paramount.
*   **Write-Back:** Generally preferred for performance-critical applications with a high volume of writes, as it significantly reduces the burden on the memory system. However, it requires careful management of data consistency, especially in multi-core environments.

Analyzing these policies helps understand how different cache organizations handle data writes and their trade-offs in terms of performance, complexity, and data integrity.

## Supports

- [[skills/hardware-embedded/electronics-embedded/memory-hierarchy/microskills/cache-write-policies|Cache Write Policies]]
