---
type: "medium"
title: "Applying Pipeline Stages to Instruction Sequences"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/pipelined-architecture/microskills/instruction-sequence-pipelining|instruction-sequence-pipelining]]"
---
# Applying Pipeline Stages to Instruction Sequences

In a pipelined architecture, instructions don't execute one after another in their entirety. Instead, they are broken down into smaller stages, and multiple instructions can be in different stages of execution simultaneously. This overlapping execution is the core of pipelining's performance benefit. This lesson focuses on how to trace the execution steps of a sequence of instructions through these pipeline stages.

## Understanding Pipeline Stages

Most simple instruction pipelines consist of the following five stages:

1.  **Fetch (IF):** The instruction is retrieved from memory.
2.  **Decode (ID):** The instruction is decoded, and operands (data needed for the instruction) are fetched.
3.  **Execute (EX):** The actual operation (e.g., addition, subtraction, logical operation) is performed.
4.  **Memory Access (MEM):** If the instruction is a load or store operation, it accesses data memory.
5.  **Write Back (WB):** The result of the operation is written back to a register.

Imagine these stages as assembly line stations. As soon as the first instruction moves from Fetch to Decode, the second instruction can move into the Fetch stage.

## Tracing Instruction Execution

To apply pipeline stages to a sequence of instructions, we'll use a timeline to visualize the movement of each instruction through the pipeline. Each row represents an instruction, and each column represents a clock cycle.

Let's consider a simple sequence of four instructions (I1, I2, I3, I4) and a five-stage pipeline (IF, ID, EX, MEM, WB).

**Instruction Sequence:**
*   I1: ADD R1, R2, R3
*   I2: SUB R4, R5, R6
*   I3: LOAD R7, 100(R8)
*   I4: STORE R9, 200(R10)

**Assumptions:**
*   No data dependencies or hazards (we'll assume ideal conditions for this exercise).
*   Each stage takes one clock cycle.

**Timeline Visualization:**

| Clock Cycle | Stage 1 (IF) | Stage 2 (ID) | Stage 3 (EX) | Stage 4 (MEM) | Stage 5 (WB) |
| :---------- | :----------- | :----------- | :----------- | :------------ | :----------- |
| 1           | I1           |              |              |               |              |
| 2           | I2           | I1           |              |               |              |
| 3           | I3           | I2           | I1           |               |              |
| 4           | I4           | I3           | I2           | I1            |              |
| 5           |              | I4           | I3           | I2            | I1           |
| 6           |              |              | I4           | I3            | I2           |
| 7           |              |              |              | I4            | I3           |
| 8           |              |              |              |               | I4           |

**Explanation of the Timeline:**

*   **Clock Cycle 1:** I1 is in the Fetch (IF) stage.
*   **Clock Cycle 2:** I1 moves to Decode (ID), and I2 starts Fetching (IF).
*   **Clock Cycle 3:** I1 moves to Execute (EX), I2 moves to Decode (ID), and I3 starts Fetching (IF).
*   **Clock Cycle 4:** I1 moves to Memory Access (MEM), I2 to Execute (EX), I3 to Decode (ID), and I4 starts Fetching (IF).
*   **Clock Cycle 5:** I1 completes Write Back (WB) and is finished. I2 moves to Memory Access (MEM), I3 to Execute (EX), I4 to Decode (ID), and a new instruction (if any) would start Fetching.
*   **Clock Cycle 6:** I2 completes, I3 moves to Memory Access (MEM), I4 to Execute (EX).
*   **Clock Cycle 7:** I3 completes, I4 moves to Memory Access (MEM).
*   **Clock Cycle 8:** I4 completes.

## Key Takeaways

*   **Throughput:** In this ideal scenario, a new instruction completes every clock cycle after the pipeline is full (starting from clock cycle 5). This is the advantage of pipelining.
*   **Latency:** The total time for a single instruction to complete (its latency) is still five clock cycles (the number of stages). Pipelining improves throughput, not necessarily the latency of individual instructions.
*   **Visualizing is Crucial:** Creating a timeline helps you track the progress of each instruction and identify when it occupies each pipeline stage.

This simple exercise demonstrates the fundamental concept of instruction pipelining. In real-world processors, complexities like data dependencies (where one instruction needs the result of a previous one before it's available) and control hazards (like branches) require more sophisticated mechanisms to maintain performance. However, understanding this basic execution flow is the first step to grasping how these advanced techniques work.

## Supports

- [[skills/hardware-embedded/electronics-embedded/pipelined-architecture/microskills/instruction-sequence-pipelining|Instruction Sequence Pipelining]]
