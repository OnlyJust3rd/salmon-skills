---
type: "medium"
title: "Analyzing Pipelined Architecture Performance"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/pipelined-architecture-performance|pipelined-architecture-performance]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/pipelined-architecture|pipelined-architecture]]"
learning-time-in-minutes: 5
---
# Analyzing Pipelined Architecture Performance

This lesson focuses on understanding how pipelined architectures influence the speed of execution compared to traditional, non-pipelined designs. We will analyze the performance implications by dissecting the core concepts.

## Understanding Execution Speed

Before diving into pipelining, let's consider what "execution speed" means in the context of processors. Generally, we're interested in two main metrics:

*   **Latency:** The time it takes to complete a *single* task from start to finish.
*   **Throughput:** The number of tasks completed per unit of time.

A non-pipelined processor handles each instruction sequentially. If an instruction requires multiple stages (e.g., Fetch, Decode, Execute, Memory Access, Write Back), the processor completes all stages for one instruction before starting the next.

## The Non-Pipelined Approach: A Bottleneck

Imagine a simple assembly line for building a toy car. In a non-pipelined system, one worker builds an entire car from start to finish. Only when that car is completely done does the worker start on the next one.

**Example Scenario:**

Consider a simple processor with five stages: Fetch, Decode, Execute, Memory, Write-back. Each stage takes 1 clock cycle.

*   **Instruction 1:**
    *   Cycle 1: Fetch
    *   Cycle 2: Decode
    *   Cycle 3: Execute
    *   Cycle 4: Memory
    *   Cycle 5: Write-back
    *   **Total time for 1 instruction: 5 clock cycles**

Now, let's say we have 10 instructions to execute.

*   **Total time for 10 instructions:** 10 instructions * 5 cycles/instruction = 50 clock cycles.

The **latency** for each instruction is 5 clock cycles. The **throughput** is 1 instruction every 5 cycles.

## Introducing Pipelining: Parallelism in Stages

Pipelining breaks down the instruction execution into smaller, independent stages. Instead of one worker doing everything, we have specialized workers for each stage of the assembly line. Once the first worker finishes their task on the first car and passes it to the second worker, the first worker can immediately start on the *next* car.

In our processor example, this means that while instruction 2 is in the Decode stage, instruction 1 is in the Execute stage, instruction 3 is in the Fetch stage, and so on. The processor stages are kept busy by different instructions simultaneously.

**Example Scenario (Pipelined):**

Using the same 5-stage processor and 10 instructions:

*   **Instruction 1:**
    *   Cycle 1: Fetch
    *   Cycle 2: Decode
    *   Cycle 3: Execute
    *   Cycle 4: Memory
    *   Cycle 5: Write-back
*   **Instruction 2:**
    *   Cycle 1: (Idle)
    *   Cycle 2: Fetch
    *   Cycle 3: Decode
    *   Cycle 4: Execute
    *   Cycle 5: Memory
*   **Instruction 3:**
    *   Cycle 1: (Idle)
    *   Cycle 2: (Idle)
    *   Cycle 3: Fetch
    *   Cycle 4: Decode
    *   Cycle 5: Execute
*   ...and so on.

Let 'k' be the number of pipeline stages (here, k=5).
Let 'n' be the number of instructions (here, n=10).

The first instruction still takes 'k' clock cycles to complete. However, after the pipeline is "filled" (after the k-th cycle), one instruction completes *every* clock cycle.

*   **Total time for 10 instructions:**
    *   Time for the first instruction to finish: k cycles
    *   Time for the remaining (n-1) instructions to finish: (n-1) cycles
    *   **Total time = k + (n-1) clock cycles**
    *   For our example: 5 + (10 - 1) = 5 + 9 = 14 clock cycles.

## Analyzing the Performance Impact

Let's compare the results:

| Feature          | Non-Pipelined | Pipelined       |
| :--------------- | :------------ | :-------------- |
| Cycles per Instruction (Ideal) | k             | 1               |
| Throughput (Ideal) | 1/k           | 1               |
| Latency for 1st instruction | k             | k               |
| Total time for n instructions | n * k         | k + (n-1)       |
| Speedup (for large n) | 1x            | Approx. k times |

**Key Analysis Points:**

1.  **Latency:** Pipelining does *not* reduce the time it takes for a single instruction to complete (its latency). The first instruction still has to go through all 'k' stages.
2.  **Throughput:** This is where pipelining shines. By overlapping the execution of multiple instructions, the processor can complete one instruction per clock cycle (in an ideal scenario). This dramatically increases the number of instructions processed over time.
3.  **Speedup:** For a large number of instructions, the speedup achieved by pipelining is approximately equal to the number of pipeline stages ('k'). In our example, with 5 stages, we went from 50 cycles to 14 cycles for 10 instructions, a significant improvement. The ideal speedup is $n*k / (k + n - 1)$. As n becomes much larger than k, this approaches $n*k / n = k$.

## Factors Affecting Ideal Performance

The analysis above assumes ideal conditions. In reality, several factors can prevent a pipeline from achieving its theoretical maximum throughput:

*   **Pipeline Hazards:**
    *   **Structural Hazards:** When two instructions in different stages need the same hardware resource at the same time.
    *   **Data Hazards:** When an instruction depends on the result of a previous instruction that has not yet completed all its stages (e.g., an instruction needs a value that's still being calculated). Techniques like forwarding and stalling are used to mitigate these.
    *   **Control Hazards:** When a branch instruction changes the program flow, instructions fetched after the branch might be incorrect and need to be discarded. Branch prediction is a common technique to handle this.
*   **Unequal Stage Durations:** If one stage takes significantly longer than others, it becomes the bottleneck, slowing down the entire pipeline.

## Conclusion

Pipelined architectures fundamentally change how processors execute instructions by enabling instruction-level parallelism. While the latency of a single instruction remains the same, the ability to overlap stages leads to a substantial increase in throughput and overall execution speed, especially for programs with many instructions. Understanding these performance gains and the potential pitfalls (hazards) is crucial for analyzing processor efficiency.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/pipelined-architecture-performance|Pipelined Architecture Performance]]
