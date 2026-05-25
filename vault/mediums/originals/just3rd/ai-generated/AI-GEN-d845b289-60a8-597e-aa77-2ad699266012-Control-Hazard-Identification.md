---
type: "medium"
title: "Identifying Control Hazards in Pipelined Architectures"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/control-hazard-identification|control-hazard-identification]]"
learning-time-in-minutes: 5
---
# Identifying Control Hazards in Pipelined Architectures

In our exploration of pipelined architectures, we've seen how breaking down instruction execution into stages can significantly boost performance. However, this parallelism introduces potential roadblocks. This lesson focuses on one crucial type of roadblock: **control hazards**.

Control hazards arise from instructions that alter the normal sequential flow of execution, such as branches, jumps, and procedure calls. When the pipeline fetches instructions sequentially, it doesn't inherently know which instruction will be executed next if a control flow change occurs. This uncertainty can lead to fetching and starting the execution of incorrect instructions, a situation we need to identify and manage.

## What is a Control Hazard?

A control hazard occurs when the pipeline **cannot determine the next instruction to fetch and execute because of a conditional branch or unconditional jump instruction**. The pipeline might have already fetched subsequent instructions based on the assumption of sequential execution, only to discover later that these instructions should have been skipped or replaced.

Think of a reader scanning a book. They read page by page, assuming the story continues sequentially. If they encounter a footnote that sends them to an appendix, they have to stop their current reading, find the appendix, read it, and then try to remember where they left off in the main text. This interruption and potential for reading the wrong pages (if they don't carefully track their place) is analogous to a control hazard.

### Root Causes of Control Hazards

The fundamental cause of control hazards is the **delay between the decision point of a control flow instruction (like a branch) and the actual update of the program counter (PC)**.

*   **Branch Instructions:** Conditional branches (e.g., `BEQ` - Branch if Equal, `BNE` - Branch if Not Equal) depend on the outcome of a comparison or flag. This outcome is typically determined in the Execute (EX) or Memory Access (MEM) stage of the pipeline. However, the Fetch (IF) stage needs to decide which instruction to fetch *before* the branch outcome is known.
*   **Unconditional Jumps:** Even unconditional jumps (e.g., `JMP` - Jump) can cause a hazard if the target address calculation or instruction fetch for the jump target takes time.
*   **Procedure Calls:** Calls also change the PC and often involve saving the return address, which can introduce pipeline stalls.

## Analyzing Control Hazards in an Instruction Stream

To identify control hazards, we need to analyze an instruction stream and pinpoint where control flow changes occur and how they interact with the pipeline stages.

Consider a simplified 5-stage pipeline: IF (Instruction Fetch), ID (Instruction Decode), EX (Execute), MEM (Memory Access), WB (Write Back).

**Scenario:** Imagine the following sequence of instructions being executed:

1.  `ADD R1, R2, R3` (Instruction I1)
2.  `BEQ R4, R5, Target` (Instruction I2) - Branches if R4 equals R5 to instruction at `Target`
3.  `SUB R6, R7, R8` (Instruction I3)
4.  `LOAD R9, 0(R10)` (Instruction I4)
5.  `Target: MUL R11, R12, R13` (Instruction I5)

Let's trace the pipeline:

*   **Clock Cycle 1:** I1 is in IF.
*   **Clock Cycle 2:** I1 is in ID, I2 is in IF.
*   **Clock Cycle 3:** I1 is in EX, I2 is in ID, I3 is in IF.
*   **Clock Cycle 4:** I1 is in MEM, I2 is in EX, I3 is in ID, I4 is in IF.
    *   **Hazard Detection:** Here, in the EX stage, the outcome of `BEQ R4, R5, Target` is determined. The pipeline needs to know if the branch is taken or not.
*   **Clock Cycle 5:** I1 is in WB.
    *   **If Branch NOT Taken:** I2 would have resolved its outcome. I3 should be executed next. However, I3 was already fetched into the pipeline in Clock Cycle 3, assuming sequential execution. This is okay.
    *   **If Branch Taken:** The pipeline *should* have fetched instruction I5 (at `Target`) instead of I3 in Clock Cycle 3. But it fetched I3. Now, in Clock Cycle 4, I3 is in ID, and in Clock Cycle 5, it would move to EX. This is incorrect because I5 should be executed. Instructions I3 and I4 might have already been fetched and started processing, leading to incorrect program state if they were fetched based on the assumption of sequential flow.

### Identifying the Hazard in Action

The control hazard arises in **Clock Cycle 4** when the `BEQ` instruction is in the EX stage. The pipeline needs to know the branch outcome to fetch the correct next instruction. If the `BEQ` is taken, the pipeline has already fetched `SUB` and `LOAD` instructions that are now incorrect.

**Key to Identification:**

*   **Look for branch/jump instructions.**
*   **Observe the pipeline stages:** When does the *outcome* of the branch (taken/not taken) and the *target address* (if taken) become known? This is usually in the EX or MEM stage.
*   **Compare with the fetch stage:** Are instructions being fetched *before* the pipeline knows whether those instructions are actually part of the correct execution path?

### Common Pitfalls

*   **Assuming sequential execution is always correct:** This is the fundamental error. Control flow changes break this assumption.
*   **Ignoring the pipeline stages:** Not understanding when information becomes available is crucial. The ID or EX stage for a branch instruction is critical.
*   **Confusing control hazards with data hazards:** Data hazards relate to the availability of operands for instructions, while control hazards relate to the *sequence* of instructions themselves.

By carefully analyzing instruction streams and understanding when control flow decisions are made relative to instruction fetching, you can effectively identify control hazards. This identification is the first step towards implementing mechanisms to mitigate their performance impact.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/pipelined-architecture/microskills/control-hazard-identification|Control Hazard Identification]]
