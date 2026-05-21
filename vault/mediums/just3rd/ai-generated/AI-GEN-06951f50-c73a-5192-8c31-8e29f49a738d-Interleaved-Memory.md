---
type: "medium"
title: "Understanding Interleaved Memory"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/memory-hierarchy/microskills/interleaved-memory|interleaved-memory]]"
---
# Understanding Interleaved Memory

In the realm of computer architecture, particularly when considering memory hierarchies and how we analyze cache organizations, understanding memory interleaving is crucial. It's a technique designed to improve memory throughput by allowing multiple memory modules to be accessed concurrently.

## What is Interleaved Memory?

Imagine you have a single, large block of memory. If you need to fetch data from it, you have to wait for that entire block to be ready before you can start fetching the next. Interleaved memory breaks this single block into smaller, independent chunks called "banks." These banks are then arranged in a specific order to allow for parallel access.

There are two primary types of interleaving:

*   **Low-order interleaving:** Addresses are assigned to banks based on the low-order bits of the address. This means consecutive memory addresses are in different banks.
*   **High-order interleaving:** Addresses are assigned to banks based on the high-order bits of the address. This means consecutive memory addresses are within the same bank until a bank boundary is reached.

For the purpose of improving throughput, **low-order interleaving** is the more common and effective approach.

## Why Does Interleaving Improve Throughput?

The core idea behind interleaving is to overlap memory operations. When memory is interleaved, the processor can initiate a read or write operation to one bank while another bank is still busy completing a previous operation.

Consider a system with four memory banks (Bank 0, Bank 1, Bank 2, Bank 3).

**Without Interleaving:**

If you need to access four consecutive words of memory, each access would have to complete before the next one could even start. This leads to a sequential bottleneck.

**With Low-Order Interleaving:**

Addresses are assigned like this:
*   Address 0 -> Bank 0
*   Address 1 -> Bank 1
*   Address 2 -> Bank 2
*   Address 3 -> Bank 3
*   Address 4 -> Bank 0 (and so on)

When the processor requests data at address 0, it sends the request to Bank 0. While Bank 0 is busy preparing the data, the processor can immediately send a request for the data at address 1 to Bank 1, and so on. By the time the processor needs the data from address 4, Bank 0 might have already finished its previous task and is ready for a new request.

This overlap significantly reduces the **effective memory access time**, even though the access time for a single bank remains the same. It's like having multiple cashiers at a supermarket; even if each cashier takes the same amount of time per customer, having more cashiers allows more customers to be served in the same period.

## Analyzing Interleaved Memory

To analyze the improvement, let's consider some parameters:

*   **$N$**: Number of memory banks
*   **$T_{access}$**: Time to access a single memory bank (latency)
*   **$T_{cycle}$**: Time between consecutive accesses to the same memory bank (cycle time)
*   **$T_{startup}$**: Time to initiate access to a memory bank

**Scenario: Accessing $k$ consecutive words of data.**

**Non-Interleaved Memory:**
The total time to access $k$ consecutive words would be approximately $k \times T_{access}$. This assumes that each access starts only after the previous one has fully completed.

**Interleaved Memory (Low-Order):**
With $N$ banks and $k$ consecutive word requests, the accesses are distributed across banks.
*   The first access takes $T_{access}$.
*   The subsequent $N-1$ accesses can be initiated in parallel, each taking $T_{cycle}$ time after the previous one was initiated.
*   After $N$ accesses have been initiated, the first bank might be ready for another access.

The total time to access $k$ consecutive words becomes approximately:
$$
T_{interleaved} = T_{startup} + T_{access} + (k-1) \times T_{cycle}
$$
If $T_{startup}$ is negligible or included in $T_{access}$, and $T_{access} \approx T_{cycle}$:
$$
T_{interleaved} \approx T_{access} + \lceil \frac{k}{N} \rceil \times T_{cycle}
$$
A more simplified view often focuses on the throughput improvement: the time to access $k$ words is reduced from $k \times T_{access}$ to $T_{access} + (k-1)/N \times T_{access}$ (assuming $T_{access} = T_{cycle}$ and $k \gg N$).

The key takeaway is that the time is no longer directly proportional to $k$ in a linear fashion for large $k$. Instead, it becomes more dependent on the number of banks $N$ and the cycle time $T_{cycle}$.

## Key Considerations for Interleaving

*   **Number of Banks ($N$)**: More banks generally lead to better parallelism, up to a point where the overhead of managing the banks outweighs the benefits.
*   **Bank Latency ($T_{access}$) and Cycle Time ($T_{cycle}$)**: For effective interleaving, $T_{cycle}$ should be significantly shorter than $T_{access}$ to allow for rapid initiation of new operations.
*   **Access Pattern**: Interleaving is most effective for sequential or strided access patterns where consecutive memory accesses naturally fall into different banks. Random access patterns may not benefit as much if the accesses are spread thinly across banks.
*   **Cache Interaction**: Interleaving is often implemented at the DRAM controller level. Its effectiveness can be influenced by how data is fetched into the processor's cache. If a cache block fetches data that is all within one memory bank and requires multiple accesses to that single bank, the benefit of interleaving might be reduced for that specific cache line fetch.

## When is it Used?

Interleaved memory is a common technique in modern DRAM systems to boost memory bandwidth. It's a fundamental aspect of memory controllers that manage the physical DRAM chips. Understanding this helps in analyzing how memory accesses are serviced at a lower level, which in turn impacts the overall performance of a system, including how efficiently data can be fed to caches.

## Supports

- [[skills/hardware-embedded/electronics-embedded/memory-hierarchy/microskills/interleaved-memory|Interleaved Memory]]
