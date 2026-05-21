---
type: "medium"
title: "Identifying Data Hazards: RAW, WAR, and WAW Dependencies"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/pipelined-architecture/microskills/data-hazard-identification|data-hazard-identification]]"
---
# Identifying Data Hazards: RAW, WAR, and WAW Dependencies

In our exploration of pipelined architectures, we've touched on how breaking down instruction execution into stages can boost performance. However, this parallelism isn't always smooth sailing. When instructions in a pipeline depend on the results of previous instructions that haven't completed yet, we encounter **data hazards**. Understanding these dependencies is crucial for analyzing and mitigating pipeline stalls.

This lesson focuses on identifying these data dependencies, specifically looking at Read-After-Write (RAW), Write-After-Read (WAR), and Write-After-Write (WAW) "hazards." While in a true hazard situation, these dependencies cause stalls, for now, our goal is to simply *recognize* them in simplified pipeline scenarios.

## What are Data Dependencies?

Data dependencies arise when an instruction needs to use the result of a prior instruction. Imagine a simple assembly line: if the next worker needs a part that the current worker hasn't finished making yet, the line has to stop. This is analogous to data hazards in a pipeline.

We categorize these dependencies based on the order of read and write operations on the same register. Let's consider two instructions, Instruction `i` (the earlier instruction) and Instruction `j` (the later instruction).

### RAW (Read-After-Write) Dependencies

This is the most common and intuitive type of data dependency. Instruction `j` attempts to read a register *before* Instruction `i` has written its result to that register.

**Analogy:** You're waiting to read a book, but your friend is still writing the last chapter. You can't read the ending until they're done.

**When to look for:**
*   Instruction `j`'s `rs` or `rt` fields (source registers) match Instruction `i`'s `rd` field (destination register).
*   Instruction `j` reads the register *after* Instruction `i` writes to it.

### WAR (Write-After-Read) Dependencies

Instruction `j` attempts to write to a register *before* Instruction `i` has read it. This is less common in simple, in-order pipelines but can occur with certain pipeline designs or instruction scheduling.

**Analogy:** You're about to use a whiteboard to draw a diagram, but someone else is about to erase it before you've even copied the notes off it.

**When to look for:**
*   Instruction `i`'s `rs` or `rt` fields (source registers) match Instruction `j`'s `rd` field (destination register).
*   Instruction `i` reads the register *after* Instruction `j` writes to it.

### WAW (Write-After-Write) Dependencies

Instruction `j` attempts to write to a register *before* Instruction `i` has written its result to that same register. This can lead to an incorrect final value if not managed.

**Analogy:** Two people are trying to update the same record in a database. If the second person updates it before the first person's update is finalized, the first person's change might be lost.

**When to look for:**
*   Instruction `i`'s `rd` field (destination register) matches Instruction `j`'s `rd` field (destination register).
*   Instruction `i` writes to the register *after* Instruction `j` writes to it.

## Analyzing Dependencies in a Simplified Pipeline

Let's consider a simplified 5-stage pipeline:

*   **IF (Instruction Fetch)**
*   **ID (Instruction Decode)**
*   **EX (Execute)**
*   **MEM (Memory Access)**
*   **WB (Write Back)**

We'll represent instructions using a generic format like `OP rd, rs, rt` (Operation destination\_register, source\_register1, source\_register2).

### Example Scenario

Consider the following sequence of instructions:

1.  `ADD R1, R2, R3`  (Instruction `i`)
2.  `SUB R4, R1, R5`  (Instruction `j`)

Let's analyze this step-by-step to identify dependencies as they flow through the pipeline.

#### Step 1: Instruction `i` (ADD R1, R2, R3)

*   **IF:** Fetches `ADD R1, R2, R3`.
*   **ID:** Decodes the instruction. It identifies `R1` as the destination register (`rd`) and `R2`, `R3` as source registers (`rs`, `rt`).
*   **EX:** Performs the addition. The result will be written to `R1`.
*   **MEM:** (No memory access for ADD)
*   **WB:** Writes the result of the addition back to `R1`.

#### Step 2: Instruction `j` (SUB R4, R1, R5)

*   **IF:** Fetches `SUB R4, R1, R5`.
*   **ID:** Decodes the instruction. It identifies `R4` as the destination register (`rd`) and `R1`, `R5` as source registers (`rs`, `rt`).

#### Identifying the Dependency:

Now, let's look at Instruction `j` as it progresses, comparing its needs to Instruction `i`'s actions.

*   **At the ID stage for Instruction `j`:** Instruction `j` needs to read `R1` (as `rs`).
*   **During the EX stage for Instruction `i`:** Instruction `i` is calculating the value that will be written to `R1`.
*   **At the WB stage for Instruction `i`:** The final result for `R1` is written back.

If Instruction `j` reaches its **EX** stage (where it *uses* `R1`'s value) *before* Instruction `i` has completed its **WB** stage (where the value is finalized), then Instruction `j` would read an outdated or incorrect value from `R1`.

**Conclusion for this pair:**
*   Instruction `j` reads `R1`.
*   Instruction `i` writes to `R1`.
*   Instruction `j` reads `R1` *after* Instruction `i` writes to it.

This is a **RAW dependency**.

### More Complex Example

Let's add another instruction:

1.  `ADD R1, R2, R3`   (Instruction `i`)
2.  `SUB R4, R1, R5`   (Instruction `j`)
3.  `MUL R1, R6, R7`   (Instruction `k`)

#### Dependency between `i` and `j`:

As analyzed above, this is a RAW dependency because `j` reads `R1` which `i` writes.

#### Dependency between `j` and `k`:

*   Instruction `j` writes to `R4`.
*   Instruction `k` reads `R6` and `R7`.
    *   There is **no dependency** between `j` and `k` based on register `R1`.

#### Dependency between `i` and `k`:

*   Instruction `i` writes to `R1`.
*   Instruction `k` writes to `R1`.
*   If instruction `i` completes its write to `R1` *after* instruction `k` completes its write to `R1`, the final value of `R1` would be from instruction `i`.
*   If instruction `k` completes its write to `R1` *after* instruction `i` completes its write to `R1`, the final value of `R1` would be from instruction `k`.

This pair (`i` and `k`) exhibits a **WAW dependency** on register `R1`. The order of writes matters.

## Summary Table

| Dependency Type | Instruction `i` Action | Instruction `j` Action | Register Relationship             | Analogy                                                |
| :-------------- | :--------------------- | :--------------------- | :-------------------------------- | :----------------------------------------------------- |
| **RAW**         | Writes to Register X   | Reads from Register X  | `i.rd == j.rs` or `i.rd == j.rt`  | Reading a book before the last chapter is written.     |
| **WAR**         | Reads from Register X  | Writes to Register X   | `i.rs == j.rd` or `i.rt == j.rd`  | Erasing a whiteboard before someone finishes copying.  |
| **WAW**         | Writes to Register X   | Writes to Register X   | `i.rd == j.rd`                    | Two people updating the same database record.          |

By systematically examining the read and write operations on registers for consecutive instructions, you can identify potential data dependencies. Recognizing these patterns is the first step towards understanding how they can lead to pipeline hazards and the need for stall mechanisms or forwarding techniques.

## Supports

- [[skills/hardware-embedded/electronics-embedded/pipelined-architecture/microskills/data-hazard-identification|Data Hazard Identification]]
