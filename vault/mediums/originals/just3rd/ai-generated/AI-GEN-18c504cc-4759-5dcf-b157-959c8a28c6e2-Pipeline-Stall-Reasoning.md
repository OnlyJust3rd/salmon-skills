---
type: "medium"
title: "Reasoning About Pipeline Stalls"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/pipeline-stall-reasoning|pipeline-stall-reasoning]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/pipelined-architecture|pipelined-architecture]]"
learning-time-in-minutes: 6
---
# Reasoning About Pipeline Stalls

In pipelined architectures, different stages of instruction processing overlap. This overlap significantly boosts performance, but it can be disrupted by *hazards* – situations where an instruction depends on a previous instruction that hasn't yet completed. This lesson focuses on *pipeline stalls*, a common technique to handle these hazards, and how to reason about the stalls introduced under simplified assumptions.

## The Problem: Dependencies and Stalls

When an instruction needs data or control flow that isn't ready, the pipeline must pause. This pause, known as a *stall*, prevents subsequent instructions from proceeding until the dependency is resolved. Each stall adds cycles to instruction execution, increasing the Cycles Per Instruction (CPI) and reducing overall throughput.

Let's consider a simplified 5-stage pipeline:

1.  **IF (Instruction Fetch)**
2.  **ID (Instruction Decode / Register Fetch)**
3.  **EX (Execute)**
4.  **MEM (Memory Access)**
5.  **WB (Write Back)**

A common hazard occurs when an instruction in the ID stage needs a value that will be written back by an instruction currently in the WB stage. This is a Read-After-Write (RAW) hazard.

## Estimating Stalls: A Simplified Approach

Under simplified assumptions, we can estimate the number of stalls introduced by a hazard. The key is to determine how many pipeline stages must be "held up" until the required data is available.

**Assumption:** For this estimation, we'll assume that once data is produced, it's immediately available to subsequent instructions in the next clock cycle. We also assume that forwarding (a hazard mitigation technique we'll explore later) is *not* yet in place, meaning we must stall.

Consider a RAW hazard where instruction `I2` depends on the result of instruction `I1`.

*   **Scenario:** `I1` is currently in **WB**, and `I2` is in **ID**.
*   **Dependency:** `I2` needs the result computed by `I1`.
*   **Problem:** `I1`'s result is not written back to the register file until the end of the WB stage. `I2` needs this result in its ID stage to proceed.

To resolve this without forwarding, the pipeline must stall.

### Calculating Stalls

1.  **Identify the dependent instruction:** This is the instruction that needs the data. In our example, it's `I2`.
2.  **Identify the producer instruction:** This is the instruction that generates the data. In our example, it's `I1`.
3.  **Determine when the data is available:** The data becomes available *after* `I1` completes its WB stage.
4.  **Determine when the dependent instruction needs the data:** `I2` needs the data in its ID stage.

Let's trace the pipeline cycles:

*   **Cycle C:** `I1` is in WB, `I2` is in ID. `I2` needs `I1`'s result.
*   **Cycle C+1:** `I1` finishes WB (result is now available). `I2` is still in ID, waiting. The pipeline stalls.
*   **Cycle C+2:** `I1` has retired. `I2` can now proceed to the EX stage. The stall is over.

In this scenario, `I2` was stalled for **one** cycle in the ID stage. The pipeline effectively inserted a "bubble" (a no-operation cycle) to allow `I1` to finish and its result to be available before `I2` could use it.

### Another Example: Instruction `I2` depends on `I1`, where `I1` is in MEM

*   **Scenario:** `I1` is in **MEM**, and `I2` is in **ID**.
*   **Dependency:** `I2` needs the result of `I1`.
*   **Problem:** `I1` is still in the MEM stage; its result is not yet finalized (it will be in WB in the next cycle). `I2` needs it in its ID stage.

Let's trace:

*   **Cycle C:** `I1` is in MEM, `I2` is in ID. `I2` needs `I1`'s result.
*   **Cycle C+1:** `I1` moves to WB. `I2` is still in ID, waiting. Pipeline stalls.
*   **Cycle C+2:** `I1` finishes WB (result is now available). `I2` can now proceed to EX. Stall over.

Again, `I2` is stalled for **one** cycle in the ID stage. The number of stalls is often determined by the "distance" in pipeline stages between when the data is produced and when it's needed.

### Generalizing the Stall Count

If instruction `I_n+1` depends on instruction `I_n`, and `I_n` is `k` stages ahead of `I_n+1` in the pipeline when the dependency is detected:

*   The instruction `I_n+1` needs the data when it enters the **ID** stage.
*   The data from `I_n` will be available *after* `I_n` completes its **WB** stage.

If `I_n` is `k` stages ahead, it means `I_n` will complete its WB stage `k` cycles after `I_n+1` enters its ID stage (assuming no stalls for `I_n` itself). However, `I_n+1` *cannot* proceed until `I_n`'s WB is done.

Consider the critical path: `I_n+1` is in ID, `I_n` is `k` stages ahead.
*   `I_n` needs `k` more cycles to finish WB.
*   `I_n+1` needs the data *now* (in its ID stage).
*   So, `I_n+1` must wait for `k` cycles.

Under the simplified model where data is available one cycle after WB, and `I_n+1` needs the data in ID:

*   If `I_n` is in the WB stage, `I_n+1` is 1 stage behind. `I_n+1` stalls for 1 cycle. (e.g., I1 in WB, I2 in ID -> 1 stall)
*   If `I_n` is in the MEM stage, `I_n+1` is 2 stages behind. `I_n+1` stalls for 1 cycle. (e.g., I1 in MEM, I2 in ID -> 1 stall)
*   If `I_n` is in the EX stage, `I_n+1` is 3 stages behind. `I_n+1` stalls for 1 cycle. (e.g., I1 in EX, I2 in ID -> 1 stall)
*   If `I_n` is in the ID stage, `I_n+1` is 4 stages behind. `I_n+1` stalls for 1 cycle. (e.g., I1 in ID, I2 in ID -> 1 stall)

This might seem counter-intuitive. The key is that the stall is inserted *in front of* `I2`. `I2` waits in ID. `I1` proceeds through its stages. Once `I1` finishes WB, `I2` can then move to EX.

Let's refine the reasoning: The number of stalls is the number of cycles `I_{n+1}` must wait in its current stage (ID) until the data from `I_n` is available.

*   If `I_n` is in WB, its result is available *next* cycle. `I_{n+1}` needs it *now*. `I_{n+1}` waits 1 cycle.
*   If `I_n` is in MEM, its result will be available in the cycle *after* next. `I_{n+1}` needs it *now*. `I_{n+1}` waits 1 cycle.
*   If `I_n` is in EX, its result will be available 2 cycles from now. `I_{n+1}` needs it *now*. `I_{n+1}` waits 1 cycle.
*   If `I_n` is in ID, its result will be available 3 cycles from now. `I_{n+1}` needs it *now*. `I_{n+1}` waits 1 cycle.

This simplified model suggests that for a RAW hazard detected when `I_{n+1}` is in ID and `I_n` is in any earlier stage, there is typically **1 stall cycle** introduced in the ID stage of `I_{n+1}`.

This is because the pipeline logic detects the dependency and freezes `I_{n+1}` in ID, while allowing `I_n` to continue towards WB. Once `I_n`'s WB stage is complete, `I_{n+1}` is released from its stall and can proceed to EX.

## Key Takeaway for Reasoning

When estimating stalls under simplified assumptions for RAW hazards:

*   Focus on the dependent instruction (`I_{n+1}`) waiting in its current stage (typically ID).
*   Determine how many cycles it takes for the producer instruction (`I_n`) to complete its write-back.
*   The number of stall cycles is the number of times `I_{n+1}` has to wait in its ID stage before the data is ready. In many simple pipelined processors without forwarding, this often equates to 1 stall cycle for a RAW hazard detected when the dependent instruction is in ID.

Understanding these stalls is the first step to evaluating more complex hazard mitigation techniques like forwarding and branch prediction.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/pipeline-stall-reasoning|Pipeline Stall Reasoning]]
