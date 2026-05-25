---
type: "medium"
title: "Simulating Pipelined Execution"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/pipelined-execution-simulation|pipelined-execution-simulation]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/pipelined-architecture|pipelined-architecture]]"
learning-time-in-minutes: 6
---
# Simulating Pipelined Execution

In a pipelined processor, instructions don't execute one after another sequentially. Instead, they overlap, with different stages of multiple instructions being processed concurrently. This technique significantly speeds up program execution. To understand how this works, we'll simulate the execution steps of a sequence of instructions through a simplified pipeline.

## The Five-Stage Pipeline

For this simulation, we'll use a common five-stage pipeline:

1.  **Fetch (IF)**: The instruction is fetched from memory.
2.  **Decode (ID)**: The instruction is decoded, and operands are fetched.
3.  **Execute (EX)**: The arithmetic or logical operation is performed.
4.  **Memory Access (MEM)**: Data is read from or written to memory.
5.  **Write Back (WB)**: The result is written back to a register.

Each stage takes one clock cycle to complete. We'll track instructions as they move through these stages, cycle by cycle.

## Simulating Instruction Execution

Let's consider a simple sequence of instructions:

1.  `ADD R1, R2, R3` (R1 = R2 + R3)
2.  `SUB R4, R1, R5` (R4 = R1 - R5)
3.  `LOAD R6, 0(R1)` (R6 = Memory[R1])
4.  `STORE R7, 0(R1)` (Memory[R1] = R7)

We need to be mindful of **data dependencies**. A data dependency occurs when an instruction needs the result of a previous instruction that hasn't finished yet.

*   Instruction 2 (`SUB`) depends on Instruction 1 (`ADD`) because it uses `R1`, which is the destination of `ADD`.
*   Instruction 3 (`LOAD`) depends on Instruction 1 (`ADD`) because it uses `R1` as an address.
*   Instruction 4 (`STORE`) depends on Instruction 1 (`ADD`) because it uses `R1` as an address.

In a real pipeline, hazards like these are handled through techniques like forwarding or stalling. For this simulation, we'll explicitly show how dependencies can cause stalls (delays).

### Simulation Table

We'll use a table to represent the clock cycles and the stage each instruction is in. `---` indicates the instruction is not yet in that stage or has completed.

| Clock Cycle | Instruction 1 (ADD) | Instruction 2 (SUB) | Instruction 3 (LOAD) | Instruction 4 (STORE) |
| :---------- | :------------------ | :------------------ | :------------------- | :-------------------- |
| 1           | IF                  | ---                 | ---                  | ---                   |
| 2           | ID                  | IF                  | ---                  | ---                   |
| 3           | EX                  | ID                  | IF                   | ---                   |
| 4           | MEM                 | EX                  | ID                   | IF                    |
| 5           | WB                  | MEM                 | EX                   | ID                    |
| 6           | ---                 | WB                  | MEM                  | EX                    |
| 7           | ---                 | ---                 | WB                   | MEM                   |
| 8           | ---                 | ---                 | ---                  | WB                    |

**Explanation of Cycles:**

*   **Cycle 1:** Instruction 1 (`ADD`) is fetched.
*   **Cycle 2:** Instruction 1 moves to Decode (ID). Instruction 2 (`SUB`) is fetched.
*   **Cycle 3:** Instruction 1 moves to Execute (EX). Instruction 2 moves to ID. Instruction 3 (`LOAD`) is fetched.
*   **Cycle 4:** Instruction 1 moves to Memory Access (MEM). Instruction 2 moves to EX. Instruction 3 moves to ID. Instruction 4 (`STORE`) is fetched.
*   **Cycle 5:** Instruction 1 moves to Write Back (WB) and completes. Instruction 2 moves to MEM. Instruction 3 moves to EX. Instruction 4 moves to ID.
*   **Cycle 6:** Instruction 2 moves to WB and completes. Instruction 3 moves to MEM. Instruction 4 moves to EX.
*   **Cycle 7:** Instruction 3 moves to WB and completes. Instruction 4 moves to MEM.
*   **Cycle 8:** Instruction 4 moves to WB and completes.

In this ideal scenario with no stalls (which would happen if forwarding or other hazard resolution mechanisms were in place), the 4 instructions complete in 8 cycles. This is faster than if they executed sequentially (4 instructions * 5 stages/instruction = 20 cycles).

### Introducing a Stall for Data Dependency

Let's re-examine the dependency of Instruction 2 (`SUB R4, R1, R5`) on Instruction 1 (`ADD R1, R2, R3`). `SUB` needs the value of `R1` *after* `ADD` has written it. If `ADD`'s result is not available when `SUB` reaches its Execute (EX) stage, a stall is required.

Consider a simpler pipeline without advanced forwarding, where the result is only available *after* the Write Back (WB) stage.

| Clock Cycle | Instruction 1 (ADD) | Instruction 2 (SUB) | Instruction 3 (LOAD) | Instruction 4 (STORE) | Notes                                                        |
| :---------- | :------------------ | :------------------ | :------------------- | :-------------------- | :----------------------------------------------------------- |
| 1           | IF                  | ---                 | ---                  | ---                   | Fetch ADD                                                    |
| 2           | ID                  | IF                  | ---                  | ---                   | Decode ADD, Fetch SUB                                        |
| 3           | EX                  | ID                  | IF                   | ---                   | Execute ADD, Decode SUB, Fetch LOAD                          |
| 4           | MEM                 | EX                  | ID                   | IF                    | Mem ADD, Execute SUB, Decode LOAD, Fetch STORE               |
| 5           | WB                  | MEM                 | EX                   | ID                    | Write Back ADD (R1=result), Mem SUB, Execute LOAD, Decode STORE |
| 6           | ---                 | WB                  | MEM                  | EX                    | SUB completes. **R1 is now fully available for next use.**   |
| 7           | ---                 | ---                 | WB                   | MEM                   | LOAD completes.                                              |
| 8           | ---                 | ---                 | ---                  | WB                    | STORE completes.                                             |

Wait, that previous table still looks like it completed in 8 cycles. Why? Because `SUB` in this example can proceed to its MEM stage and then WB stage as soon as its EX stage is done, and it can use the result of ADD from its WB stage. The dependency is met.

Let's create a scenario where a stall is unavoidable with a common forwarding path:

Suppose Instruction 2 (`SUB R4, R1, R5`) needs `R1` from Instruction 1 (`ADD R1, R2, R3`) *during* Instruction 2's Execute (EX) stage. However, Instruction 1's result only becomes available at the end of its Write Back (WB) stage.

| Clock Cycle | Instruction 1 (ADD) | Instruction 2 (SUB) | Instruction 3 (LOAD) | Instruction 4 (STORE) | Notes                                                                                                                                                                                                                                                                                                         |
| :---------- | :------------------ | :------------------ | :------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1           | IF                  | ---                 | ---                  | ---                   | Fetch ADD                                                                                                                                                                                                                                                                                                     |
| 2           | ID                  | IF                  | ---                  | ---                   | Decode ADD, Fetch SUB                                                                                                                                                                                                                                                                                         |
| 3           | EX                  | ID                  | IF                   | ---                   | Execute ADD, Decode SUB, Fetch LOAD                                                                                                                                                                                                                                                                           |
| 4           | MEM                 | EX                  | ID                   | IF                    | Memory ADD, Execute SUB, Decode LOAD, Fetch STORE                                                                                                                                                                                                                                                             |
| 5           | WB                  | MEM                 | EX                   | ID                    | Write Back ADD (R1=result). **At this point, R1's value is ready.** However, SUB is in MEM stage. If SUB needed R1 in its EX stage, and that EX stage was *later* than ADD's WB stage, it would need a stall. For this specific sequence, SUB can use R1's value from ADD's WB as it's in its MEM stage. |
| 6           | ---                 | WB                  | MEM                  | EX                    | SUB completes.                                                                                                                                                                                                                                                                                                |
| 7           | ---                 | ---                 | WB                   | MEM                   | LOAD completes.                                                                                                                                                                                                                                                                                               |
| 8           | ---                 | ---                 | ---                  | WB                    | STORE completes.                                                                                                                                                                                                                                                                                              |

Let's adjust the instructions to force a stall. Suppose Instruction 2 was:

`SUB R4, R1, R5` (R4 = R1 - R5) where `R1` is written by `ADD R1, R2, R3`.

And Instruction 3 was:

`LOAD R6, 0(R1)` (R6 = Memory[R1])

Now, Instruction 2 needs `R1` in its EX stage. Instruction 1 produces `R1` at its WB stage. This creates a RAW (Read-After-Write) hazard. If forwarding is implemented, `SUB` can receive the result of `ADD` directly from the `EX` stage of `ADD` (or earlier). If not, a stall is necessary.

With **forwarding from EX to EX**:

| Clock Cycle | Instruction 1 (ADD) | Instruction 2 (SUB) | Instruction 3 (LOAD) | Instruction 4 (STORE) | Notes                                                                                                                                                                                                                                                        |
| :---------- | :------------------ | :------------------ | :------------------- | :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1           | IF                  | ---                 | ---                  | ---                   | Fetch ADD                                                                                                                                                                                                                                                    |
| 2           | ID                  | IF                  | ---                  | ---                   | Decode ADD, Fetch SUB                                                                                                                                                                                                                                        |
| 3           | EX                  | ID                  | IF                   | ---                   | Execute ADD, Decode SUB, Fetch LOAD                                                                                                                                                                                                                          |
| 4           | MEM                 | **EX (with fwd)**   | ID                   | IF                    | Memory ADD, Execute SUB (receives R1 via forwarding from ADD's EX stage), Decode LOAD, Fetch STORE                                                                                                                                                           |
| 5           | WB                  | MEM                 | EX                   | ID                    | Write Back ADD, Memory SUB, Execute LOAD, Decode STORE                                                                                                                                                                                                       |
| 6           | ---                 | WB                  | MEM                  | EX                    | SUB completes.                                                                                                                                                                                                                                               |
| 7           | ---                 | ---                 | WB                   | MEM                   | LOAD completes.                                                                                                                                                                                                                                              |
| 8           | ---                 | ---                 | ---                  | WB                    | STORE completes.                                                                                                                                                                                                                                             |

Here, even with a dependency, forwarding allows execution in 8 cycles. The "Apply" skill here is about understanding *when* the data is available and how it flows through the pipeline stages to satisfy dependencies.

### Key Takeaway for Simulation

The core of simulating pipelined execution is tracking each instruction's progress through the stages, cycle by cycle. You must identify potential data dependencies and understand how they are resolved (or not resolved, leading to stalls) based on the pipeline's capabilities (like forwarding). This simulation helps visualize the overlap and the potential delays caused by instruction dependencies.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/pipelined-execution-simulation|Pipelined Execution Simulation]]
