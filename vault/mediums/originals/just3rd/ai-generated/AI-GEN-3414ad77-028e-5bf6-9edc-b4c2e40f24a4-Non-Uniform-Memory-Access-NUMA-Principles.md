---
type: "medium"
title: "Non-Uniform Memory Access (NUMA) Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/processor-architecture/microskills/non-uniform-memory-access-numa-principles|non-uniform-memory-access-numa-principles]]"
learning-time-in-minutes: 5
---
# Non-Uniform Memory Access (NUMA) Principles

In the realm of processor architecture, understanding how processors interact with memory is crucial. While Uniform Memory Access (UMA) systems present a straightforward model, many modern, high-performance systems employ Non-Uniform Memory Access (NUMA). This lesson focuses on the principles of NUMA, where the time it takes for a processor to access memory can vary.

## What is NUMA?

NUMA is a computer memory design used in parallel computing. In a NUMA system, processors are grouped into "nodes," and each node has its own local memory. Accessing memory that is local to a processor (i.e., on the same node) is faster than accessing memory that is remote (i.e., on a different node).

Think of it like a large office building. If you need a document from a filing cabinet right next to your desk, it's quick. If you need a document from a filing cabinet on another floor, it takes longer to get there and back. In NUMA, the "floors" are the nodes, and the "filing cabinets" are the memory banks.

## Key Principles of NUMA

### 1. Local vs. Remote Memory Access

The fundamental principle of NUMA is the distinction between accessing local and remote memory.

*   **Local Memory Access:** When a processor requests data from memory that is directly attached to its node, this is considered a local memory access. These accesses are typically very fast.
*   **Remote Memory Access:** When a processor requests data from memory attached to a *different* node, this is a remote memory access. These accesses are slower because the request must travel across an interconnect (like a bus or network) to the remote node, retrieve the data, and then return it.

### 2. Latency Variation

This difference in access speed directly leads to latency variation. The latency (time delay) for memory access is not uniform across the system. Processors will experience lower latency when accessing their local memory and higher latency when accessing remote memory.

### 3. Interconnect

NUMA systems rely on a high-speed interconnect to facilitate communication between nodes. This interconnect is responsible for routing memory requests and data transfers between processors and their local memory, as well as between different nodes. The design and performance of this interconnect significantly impact the overall system performance.

### 4. Memory Locality

To optimize performance in a NUMA system, it's essential to maximize memory locality. This means designing applications and scheduling processes such that a processor primarily accesses its local memory. When data needs to be shared between processors on different nodes, careful consideration must be given to minimize the performance penalty of remote access.

### 5. Node Architecture

A NUMA node typically comprises:

*   One or more processors.
*   A portion of the system's main memory (local to that node).
*   A memory controller for that local memory.
*   A cache hierarchy for the processors.
*   An interface to the system's interconnect.

## How NUMA Affects Performance

The performance implications of NUMA are significant. If an application is not NUMA-aware, it can suffer from performance bottlenecks. For instance, if a process is running on Node 0 but frequently needs data that resides in Node 1's memory, it will incur frequent, slow remote memory accesses.

### Advantages of NUMA

*   **Scalability:** NUMA architectures are generally more scalable than UMA for large multi-processor systems. As you add more processors, you can also add more memory and interconnect capacity, avoiding the shared bus bottlenecks often found in UMA systems.
*   **Higher Bandwidth:** By distributing memory and access paths, NUMA can offer higher aggregate memory bandwidth in large systems.
*   **Potentially Lower Cost (for large systems):** In very large configurations, NUMA can be more cost-effective than a single, massive UMA system.

### Disadvantages of NUMA

*   **Programming Complexity:** Developing and tuning applications for optimal NUMA performance can be more complex. Developers need to be aware of memory placement and processor affinity.
*   **Performance Variability:** Performance can vary depending on the workload and how well it's distributed across NUMA nodes.
*   **Slower Remote Access:** The inherent latency penalty for remote memory access is a fundamental characteristic.

## When is NUMA Used?

NUMA architectures are common in:

*   High-performance servers
*   Workstations
*   Supercomputers
*   Large-scale data centers

These environments demand high levels of parallelism and memory capacity, where the scalability benefits of NUMA outweigh its complexities.

## Understanding the Impact

To truly grasp NUMA, consider a simple scenario:

Imagine two processors, P1 and P2.
Node 0: P1 and its local memory (Mem0)
Node 1: P2 and its local memory (Mem1)

*   If P1 accesses data in Mem0, it's a **local access** (fast).
*   If P1 accesses data in Mem1, it's a **remote access** (slow, requires interconnect).
*   If P2 accesses data in Mem1, it's a **local access** (fast).
*   If P2 accesses data in Mem0, it's a **remote access** (slow, requires interconnect).

In summary, NUMA is a memory architecture designed for scalability, where processors have faster access to their own local memory than to memory on other nodes. Understanding this "non-uniform" access is key to appreciating the design and performance characteristics of modern multi-processor systems.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/processor-architecture/microskills/non-uniform-memory-access-numa-principles|Non-Uniform Memory Access (NUMA) Principles]]
