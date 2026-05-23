---
type: "medium"
title: "Building Your First Assembly Programs"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/computer-architecture/machine-instruction/microskills/assembly-language-program-construction|assembly-language-program-construction]]"
learning-time-in-minutes: 3
---
# Building Your First Assembly Programs

This lesson will guide you through the fundamental steps of constructing simple assembly language programs. We'll focus on writing code that performs basic operations, using the concepts of sequencing, register transfers, and addressing modes you've learned.

## What We're Building

Our goal is to write and understand assembly programs. This means translating a simple task into a sequence of machine instructions that a processor can execute.

## Core Concepts in Action

When writing assembly, you're directly managing the processor's resources. Here's how key concepts come into play:

*   **Instruction Sequencing:** The order in which you write instructions is crucial. The processor executes them one by one. Branching and jumping instructions allow you to alter this flow.
*   **Register Transfer Notation (RTN):** While you won't explicitly write RTN in assembly, you'll be performing RTN operations. For example, an `MOV` instruction transfers data between registers or between a register and memory.
*   **Addressing Modes:** This determines how you access data. You'll use immediate values, direct register access, and possibly memory addresses.

## Your First Program: Adding Two Numbers

Let's construct a simple program to add two numbers stored in memory and store the result back into memory.

**Task:** Add the values at memory locations `0x1000` and `0x1004`, and store the sum at memory location `0x1008`.

We'll use a hypothetical assembly language for this example. Common instructions include:

*   `LOAD reg, address`: Load data from `address` into `reg`.
*   `STORE address, reg`: Store data from `reg` to `address`.
*   `ADD reg1, reg2`: Add the value in `reg2` to `reg1`, storing the result in `reg1`.
*   `MOV reg1, reg2`: Move the value from `reg2` to `reg1`.

Let's assume we have registers `R1`, `R2`, and `R3`.

### Step-by-Step Construction

1.  **Load the first number:** We need to bring the value from memory location `0x1000` into a register. Let's use `R1`.

    ```assembly
    LOAD R1, 0x1000
    ```
    *   **RTN equivalent:** `R1 <- Memory[0x1000]`

2.  **Load the second number:** Bring the value from memory location `0x1004` into another register. Let's use `R2`.

    ```assembly
    LOAD R2, 0x1004
    ```
    *   **RTN equivalent:** `R2 <- Memory[0x1004]`

3.  **Perform the addition:** Add the value in `R2` to `R1`. The result will be stored in `R1`.

    ```assembly
    ADD R1, R2
    ```
    *   **RTN equivalent:** `R1 <- R1 + R2`

4.  **Store the result:** Now, store the sum (which is in `R1`) to the destination memory location `0x1008`.

    ```assembly
    STORE 0x1008, R1
    ```
    *   **RTN equivalent:** `Memory[0x1008] <- R1`

### The Complete Program

```assembly
; Program to add two numbers in memory

LOAD R1, 0x1000   ; Load first number into R1
LOAD R2, 0x1004   ; Load second number into R2
ADD R1, R2        ; Add R2 to R1, result in R1
STORE 0x1008, R1  ; Store the sum in memory
```

**Explanation:**

*   We start with comments (lines beginning with `;`) to explain our code.
*   Each `LOAD` instruction fetches data from a specific memory address. This uses direct addressing for memory locations.
*   The `ADD` instruction performs the arithmetic operation directly on the registers.
*   The `STORE` instruction writes the final result back to memory.

## Evaluating the Program

Now that we've written it, let's evaluate.

*   **Correctness:** Does it perform the intended task? Yes, it loads, adds, and stores as specified.
*   **Efficiency:** For this simple task, it's reasonably efficient. We used registers to hold intermediate values, which is faster than repeatedly accessing memory. We could potentially optimize by loading the second number directly into the addition result register if the instruction set supported it (e.g., `ADD R1, R2` might mean `R1 = R1 + R2`, but some architectures might have `ADD R1, [0x1004]` or similar, but for clarity, we kept it separate).
*   **Readability:** The use of comments and clear instruction names makes it understandable.

## Practicing with Different Scenarios

Try to construct programs for these tasks:

1.  **Subtracting two numbers:** Load two numbers, subtract one from the other, and store the result.
2.  **Moving data:** Copy a value from one memory location to another.

By writing and stepping through these simple programs, you're actively applying your knowledge of machine instruction sequencing, register transfers, and addressing modes. This hands-on experience is key to mastering assembly language programming.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/machine-instruction/microskills/assembly-language-program-construction|Assembly Language Program Construction]]
