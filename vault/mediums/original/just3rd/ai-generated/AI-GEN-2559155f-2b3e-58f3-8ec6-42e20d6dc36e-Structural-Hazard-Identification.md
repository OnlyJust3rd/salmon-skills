---
type: "medium"
title: "Identifying Structural Hazards in Pipelined Architectures"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/structural-hazard-identification|structural-hazard-identification]]"
learning-time-in-minutes: 6
---
# Identifying Structural Hazards in Pipelined Architectures

This lesson focuses on identifying **structural hazards**, a specific type of pipeline hazard. Understanding structural hazards is crucial for analyzing the performance of pipelined instruction streams and recognizing where stalls might occur due to resource limitations.

## What is a Structural Hazard?

In a pipelined architecture, multiple instructions are in different stages of execution simultaneously. A **structural hazard** occurs when two or more instructions in the pipeline require the *same hardware resource* at the *same time*. This conflict prevents the pipeline from proceeding at its ideal rate, forcing a stall.

Think of a car assembly line. If, at a particular station, two cars need the same specialized tool simultaneously, one car has to wait until the tool is free. This waiting period is analogous to a pipeline stall caused by a structural hazard.

## Root Causes of Structural Hazards

The fundamental cause of structural hazards is **resource contention**. This typically arises from one of two scenarios:

1.  **Limited Hardware Resources:** The processor's hardware is not duplicated sufficiently to support all possible concurrent operations. For example, if the instruction fetch unit can only perform one fetch at a time, and another instruction stage also needs to access memory at the same time, a conflict arises.
2.  **Shared Resources:** Different pipeline stages might need to access the same memory or functional unit. For instance, if the instruction fetch stage (IF) and the memory access stage (MEM) both need to access the cache simultaneously, and the cache can only serve one request at a time, a structural hazard occurs.

## Common Scenarios Leading to Structural Hazards

Let's look at some common pipeline stages and how structural hazards can manifest:

*   **Instruction Fetch (IF) vs. Memory Access (MEM):** Both stages often need to access memory (e.g., instruction cache or data cache). If the memory system can only handle one access per clock cycle, and an instruction in the MEM stage needs to read or write data while the IF stage needs to fetch the next instruction, a stall is necessary.
*   **Multiple Functional Units:** Some complex instructions might require specific functional units (e.g., a floating-point unit, integer multiplier). If multiple instructions that use the same specialized unit are in the pipeline concurrently and arrive at their respective execution stages at the same time, a structural hazard arises.
*   **Register File Access:** While many pipelined architectures have separate read and write ports for the register file to mitigate conflicts, older or simpler designs might have limitations. If multiple instructions simultaneously need to read from or write to the register file and the hardware only supports a limited number of ports, a hazard can occur.

## Identifying Structural Hazards: A Practical Approach

To analyze and identify structural hazards, we need to examine the pipeline stages and the hardware resources they utilize.

Consider a simplified 5-stage pipeline:

1.  **IF (Instruction Fetch):** Fetches instruction from memory.
2.  **ID (Instruction Decode):** Decodes instruction, reads registers.
3.  **EX (Execute):** Performs ALU operations.
4.  **MEM (Memory Access):** Accesses data memory.
5.  **WB (Write Back):** Writes results back to registers.

Now, let's analyze potential resource conflicts.

### Example Scenario 1: Memory Access Conflict

Suppose our processor has a single-cycle memory unit that can only perform one memory operation (either instruction fetch or data access) per clock cycle.

| Clock Cycle | Instruction 1 (Add) | Instruction 2 (Load) | Instruction 3 (Sub) | Instruction 4 (Store) | Notes                                         |
| :---------- | :------------------ | :------------------- | :------------------ | :-------------------- | :-------------------------------------------- |
| 1           | IF                  | -                    | -                   | -                     | Fetch Instruction 1                           |
| 2           | ID                  | IF                   | -                   | -                     | Decode I1, Fetch I2                           |
| 3           | EX                  | ID                   | IF                  | -                     | Execute I1, Decode I2, Fetch I3               |
| 4           | MEM                 | EX                   | ID                  | IF                    | Mem Access I1, Execute I2, Decode I3, Fetch I4 |
| 5           | WB                  | MEM                  | EX                  | ID                    | Write Back I1, Mem Access I2, Execute I3, Decode I4 |
| 6           | -                   | WB                   | MEM                 | EX                    | Write Back I2, Mem Access I3, Execute I4      |
| 7           | -                   | -                    | WB                  | MEM                   | Write Back I3, Mem Access I4                  |
| 8           | -                   | -                    | -                   | WB                    | Write Back I4                                 |

In this ideal scenario, no structural hazard. But what if Instruction 2 (Load) and Instruction 1 (Add) both need the memory unit in **Clock Cycle 4**?

*   Instruction 1 is in the **MEM** stage, needing the memory unit to access data.
*   Instruction 2 is in the **IF** stage, needing the memory unit to fetch its own instruction.

If the memory unit can only service one at a time, one of these instructions must wait. This is a **structural hazard**.

**How it might play out:**

If Instruction 1 (in MEM) has priority for the memory unit:

| Clock Cycle | Instruction 1 (Add) | Instruction 2 (Load) | Instruction 3 (Sub) | Instruction 4 (Store) | Notes                                                |
| :---------- | :------------------ | :------------------- | :------------------ | :-------------------- | :--------------------------------------------------- |
| 1           | IF                  | -                    | -                   | -                     | Fetch I1                                             |
| 2           | ID                  | IF                   | -                   | -                     | Decode I1, Fetch I2                                  |
| 3           | EX                  | ID                   | IF                  | -                     | Execute I1, Decode I2, Fetch I3                      |
| 4           | MEM                 | EX                   | ID                  | IF                    | Mem Access I1, Execute I2, Decode I3, Fetch I4       |
| 5           | WB                  | **STALL (Hazard)**   | EX                  | ID                    | Write Back I1. I2 cannot proceed to MEM stage.       |
| 6           | **STALL (Hazard)**  | MEM                  | EX                  | ID                    | I1 completes. I2 now proceeds to MEM stage.          |
| 7           | **STALL (Hazard)**  | WB                   | MEM                 | EX                    | I2 completes. I3 now proceeds to WB stage.           |
| 8           | -                   | -                    | WB                  | MEM                   | ... and so on, causing subsequent instructions to delay. |

In this stall scenario, Instruction 2 is stalled in the EX stage (or effectively delayed from moving to MEM). The pipeline effectively inserts bubbles (NOPs) or delays the instruction progression.

### Example Scenario 2: Multiple Functional Units

Consider a processor with:
*   One integer ALU.
*   One floating-point multiplier.

If an `ADD` instruction (uses ALU) and a `MUL.D` (uses FPMUL) are in the pipeline, and both reach their EX stage at the same time, there's no structural hazard as they use different resources.

However, if two `MUL.D` instructions are in the pipeline, and both need the FPMUL in the same clock cycle:

| Clock Cycle | Instruction A (MUL.D) | Instruction B (MUL.D) | Instruction C (ADD) | Notes                                                      |
| :---------- | :-------------------- | :-------------------- | :------------------ | :--------------------------------------------------------- |
| 1           | IF                    | -                     | -                   | Fetch I_A                                                  |
| 2           | ID                    | IF                    | -                   | Decode I_A, Fetch I_B                                      |
| 3           | EX (FPMUL)            | ID                    | IF                  | Execute I_A on FPMUL, Decode I_B, Fetch I_C                |
| 4           | MEM                   | EX (FPMUL)            | ID                  | Mem Access I_A, Execute I_B on FPMUL, Decode I_C           |
| 5           | WB                    | MEM                   | EX (ALU)            | Write Back I_A, Mem Access I_B, Execute I_C on ALU         |

If the FPMUL can only handle one operation per cycle, Instruction B would stall at the EX stage until Instruction A finishes using the FPMUL.

## Mitigation Strategies (Brief Mention)

While this lesson focuses on *identification*, it's worth noting that processors use several techniques to mitigate structural hazards:

*   **Duplicating Resources:** Providing multiple functional units or memory ports so different instructions can proceed without waiting.
*   **Pipelining Functional Units:** Breaking down complex operations into smaller, sequential steps that can themselves be pipelined.
*   **Instruction Scheduling:** Compilers can reorder instructions to avoid simultaneous resource requests.

## Key Takeaways

*   Structural hazards occur when two or more instructions need the same hardware resource at the same time.
*   They are caused by insufficient hardware or shared resources.
*   Common conflict points include memory access and specialized functional units.
*   Identification involves tracing instruction stages and their resource requirements against available hardware capabilities.
*   Structural hazards lead to pipeline stalls, reducing performance.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/structural-hazard-identification|Structural Hazard Identification]]
