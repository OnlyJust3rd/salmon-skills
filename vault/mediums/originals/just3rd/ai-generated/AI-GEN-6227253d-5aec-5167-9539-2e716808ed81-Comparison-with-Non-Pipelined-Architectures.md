---
type: "medium"
title: "Contrasting Execution Speed: Pipelined vs. Non-Pipelined Architectures"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/comparison-with-non-pipelined-architectures|comparison-with-non-pipelined-architectures]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/pipelined-architecture|pipelined-architecture]]"
learning-time-in-minutes: 4
---
# Contrasting Execution Speed: Pipelined vs. Non-Pipelined Architectures

Understanding how pipelined architectures accelerate computation requires a direct comparison with their non-pipelined counterparts. This lesson focuses on analyzing this speed difference by contrasting the execution of instructions in both scenarios.

## The Non-Pipelined Approach: Sequential Execution

Imagine a simple assembly line where each task must be completed entirely before the next task can begin. This is analogous to a non-pipelined processor. In this architecture, each instruction goes through all its stages (e.g., Fetch, Decode, Execute, Memory Access, Write Back) sequentially. One instruction must finish all its stages before the next instruction can even start its first stage.

**Example Scenario:**

Let's consider a program with 4 instructions, and each instruction takes 5 clock cycles to complete.

*   **Instruction 1:** Cycles 1-5
*   **Instruction 2:** Cycles 6-10
*   **Instruction 3:** Cycles 11-15
*   **Instruction 4:** Cycles 16-20

In this non-pipelined model, the total time to execute these 4 instructions would be 4 instructions * 5 cycles/instruction = 20 clock cycles.

**Key Characteristic:** Low **throughput**. While each instruction takes 5 cycles, only one instruction is being processed at any given moment. The processor is idle for most of the time during an instruction's execution as other stages are waiting.

## The Pipelined Approach: Parallelism Through Stages

Pipelining breaks down the execution of an instruction into smaller, independent stages. Instead of waiting for an entire instruction to finish, the processor can start a new instruction in the first stage as soon as the previous instruction moves to the second stage. This is like an assembly line where different workers (stages) can work on different products (instructions) simultaneously.

**Example Scenario (using the same 4 instructions, 5 stages):**

| Clock Cycle | Stage 1 (Fetch) | Stage 2 (Decode) | Stage 3 (Execute) | Stage 4 (Memory) | Stage 5 (Write Back) |
| :---------- | :-------------- | :--------------- | :---------------- | :--------------- | :------------------- |
| 1           | Instruction 1   | ---              | ---               | ---              | ---                  |
| 2           | Instruction 2   | Instruction 1    | ---               | ---              | ---                  |
| 3           | Instruction 3   | Instruction 2    | Instruction 1     | ---              | ---                  |
| 4           | Instruction 4   | Instruction 3    | Instruction 2     | Instruction 1    | ---                  |
| 5           | ---             | Instruction 4    | Instruction 3     | Instruction 2    | Instruction 1        |
| 6           | ---             | ---              | Instruction 4     | Instruction 3    | Instruction 2        |
| 7           | ---             | ---              | ---               | Instruction 4    | Instruction 3        |
| 8           | ---             | ---              | ---               | ---              | Instruction 4        |

**Analysis of the Pipelined Execution:**

*   **Instruction 1:** Finishes at Cycle 5.
*   **Instruction 2:** Finishes at Cycle 6.
*   **Instruction 3:** Finishes at Cycle 7.
*   **Instruction 4:** Finishes at Cycle 8.

The total time to execute these 4 instructions is 8 clock cycles.

## Analyzing the Speed Impact

The primary impact of pipelining on execution speed is an increase in **throughput**.

*   **Non-Pipelined:**
    *   Total cycles for N instructions = N * Cycles per instruction
    *   Throughput = 1 instruction / (Cycles per instruction)

*   **Pipelined (Ideal Case):**
    *   Time to complete the first instruction = Number of stages * Cycles per stage
    *   Time to complete N instructions = (Number of stages - 1) + N cycles (after the pipeline is full)
    *   Throughput = 1 instruction / (Cycles per stage)

In our example:
*   Non-pipelined: 20 cycles for 4 instructions. Throughput = 1 instruction / 5 cycles.
*   Pipelined: 8 cycles for 4 instructions. Throughput = 1 instruction / 1 cycle (after the first instruction).

### Theoretical Speedup

In an ideal scenario, with no pipeline *stalls* (which we'll discuss later), a pipeline with `k` stages can theoretically achieve a speedup of up to `k` times compared to a non-pipelined processor.

$$ \text{Theoretical Speedup} = \frac{\text{Cycles per instruction (non-pipelined)}}{\text{Cycles per stage (pipelined)}} $$

In our 5-stage example, the theoretical speedup is 5.
*   Non-pipelined: 5 cycles/instruction.
*   Pipelined: 1 cycle/stage (assuming each stage takes 1 cycle, which is common for ideal analysis).
*   Theoretical Speedup = 5 / 1 = 5.

This means that for a long sequence of instructions, a 5-stage pipeline could perform as if it were executing 5 times faster than a non-pipelined version.

### Practical Considerations (Beyond Ideal)

While the theoretical speedup is impressive, real-world pipelined architectures don't always achieve this ideal. The performance is impacted by:

*   **Pipeline Stalls/Hazards:** When an instruction cannot proceed to the next stage due to data dependencies (an instruction needs the result of a previous instruction that isn't ready yet), control dependencies (branching), or structural conflicts (multiple instructions needing the same hardware resource). These stalls force the pipeline to pause or bubble, reducing efficiency.
*   **Clock Speed:** While pipelining improves throughput, the clock speed of a pipelined processor might be slightly lower than a non-pipelined one because each stage must complete its work within one clock cycle. However, the significantly increased throughput usually outweighs this.

## Conclusion

By contrasting the sequential nature of non-pipelined architectures with the overlapping execution of pipelined designs, we see a fundamental shift in how instructions are processed. Pipelining dramatically increases the **throughput** of a processor, allowing it to complete more instructions in a given amount of time, thereby significantly impacting execution speed. The theoretical speedup is directly related to the number of pipeline stages, though practical implementations must account for various hazards that can reduce this ideal performance.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/comparison-with-non-pipelined-architectures|Comparison with Non-Pipelined Architectures]]
