---
type: "medium"
title: "Tracing Instruction Execution: A Step-by-Step Guide"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/processor-datapath/microskills/instruction-execution-step-tracing|instruction-execution-step-tracing]]"
learning-time-in-minutes: 3
---
# Tracing Instruction Execution: A Step-by-Step Guide

This lesson focuses on the ability to follow and document the step-by-step process of how a simple processor instruction is executed. We'll use our knowledge of datapath components to see how an instruction moves through the processor.

## Why Trace Instruction Execution?

Understanding instruction execution tracing is fundamental to comprehending how programs actually run. It helps you:

*   **Debug:** Pinpoint errors by observing the exact state of the datapath at each stage.
*   **Optimize:** Identify performance bottlenecks in code.
*   **Learn:** Solidify your understanding of processor architecture and the function of each datapath component.

## The Basic Instruction Cycle

At its core, a processor executes instructions in a cycle. For each instruction, this cycle typically involves:

1.  **Fetch:** Retrieve the instruction from memory.
2.  **Decode:** Interpret the instruction and determine what operation to perform.
3.  **Execute:** Perform the operation (e.g., arithmetic, logic).
4.  **Memory Access:** Read from or write to memory if the instruction requires it.
5.  **Write Back:** Store the result of the execution.

We will focus on tracing these steps for a simple instruction.

## Datapath Components to Watch

As we trace, pay attention to these key datapath components and how they are used:

*   **Program Counter (PC):** Holds the address of the next instruction.
*   **Instruction Memory:** Stores the program instructions.
*   **Register File:** Holds the processor's general-purpose registers (e.g., `$t0`, `$t1`, `$s0`).
*   **ALU (Arithmetic Logic Unit):** Performs calculations and logical operations.
*   **Data Memory:** Stores program data.
*   **Control Unit:** Generates control signals to direct datapath operations.

## Worked Example: Tracing an `ADD` Instruction

Let's trace the execution of a simple `ADD` instruction: `ADD $t0, $t1, $t2`. This instruction means "add the values in register `$t1` and register `$t2`, and store the result in register `$t0`."

Assume:
*   The `ADD` instruction is at memory address `0x1000`.
*   Register `$t1` contains the value `10`.
*   Register `$t2` contains the value `5`.

We'll break down the execution into stages.

### Stage 1: Fetch

*   **PC Value:** `0x1000`
*   **Action:** The PC's value (`0x1000`) is sent to the Instruction Memory.
*   **Instruction Memory Output:** The instruction `ADD $t0, $t1, $t2` is retrieved from address `0x1000`.
*   **PC Update:** The PC is incremented to point to the next instruction (e.g., `0x1004`, assuming instructions are 4 bytes long).

### Stage 2: Decode

*   **Instruction:** `ADD $t0, $t1, $t2`
*   **Action:** The Control Unit decodes the instruction. It identifies that this is an `ADD` operation.
*   **Register File Read:** The instruction specifies that the values from registers `$t1` and `$t2` are needed. The Register File reads these values.
    *   Register `$t1` Output: `10`
    *   Register `$t2` Output: `5`
*   **Control Signals:** The Control Unit generates signals to enable the ALU and to specify the addition operation.

### Stage 3: Execute

*   **Inputs to ALU:** `10` (from `$t1`) and `5` (from `$t2`).
*   **ALU Operation:** The Control Unit directs the ALU to perform addition.
*   **ALU Output:** `10 + 5 = 15`. This result is passed on.

### Stage 4: Memory Access (N/A for this instruction)

*   **Instruction Type:** This `ADD` instruction does not involve reading from or writing to Data Memory.
*   **Action:** This stage is effectively bypassed or performs no data memory operation.

### Stage 5: Write Back

*   **Data to Write:** The result from the ALU (`15`).
*   **Destination Register:** The instruction specifies `$t0` as the destination.
*   **Action:** The Register File writes the value `15` into register `$t0`.
*   **Register File Update:** Register `$t0` now contains `15`.

## Summary Table of Execution Steps

| Stage           | PC       | Instruction Fetched          | Register Read (Source) | ALU Operation       | ALU Output | Memory Read/Write | Register Write (Dest) | Register File State (`$t0`, `$t1`, `$t2`) |
| :-------------- | :------- | :--------------------------- | :--------------------- | :------------------ | :--------- | :---------------- | :-------------------- | :---------------------------------------- |
| **Initial**     | `0x1000` | -                            | -                      | -                   | -          | -                 | -                     | (`?`, `10`, `5`)                          |
| **Fetch**       | `0x1004` | `ADD $t0, $t1, $t2`          | -                      | -                   | -          | -                 | -                     | (`?`, `10`, `5`)                          |
| **Decode**      | `0x1004` | `ADD $t0, $t1, $t2`          | `$t1`(10), `$t2`(5)     | Addition operation  | -          | -                 | -                     | (`?`, `10`, `5`)                          |
| **Execute**     | `0x1004` | `ADD $t0, $t1, $t2`          | `$t1`(10), `$t2`(5)     | `10 + 5`            | `15`       | -                 | -                     | (`?`, `10`, `5`)                          |
| **Memory**      | `0x1004` | `ADD $t0, $t1, $t2`          | `$t1`(10), `$t2`(5)     | `10 + 5`            | `15`       | No access         | -                     | (`?`, `10`, `5`)                          |
| **Write Back**  | `0x1004` | `ADD $t0, $t1, $t2`          | `$t1`(10), `$t2`(5)     | `10 + 5`            | `15`       | No access         | `$t0`                 | (`15`, `10`, `5`)                         |

This step-by-step tracing helps visualize the flow of data and control signals through the datapath for a single instruction. By applying this method to different instructions (like `LOAD`, `STORE`, `SUB`), you can build a comprehensive understanding of processor execution.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/processor-datapath/microskills/instruction-execution-step-tracing|Instruction Execution Step Tracing]]
