---
type: "medium"
title: "Common Assembly Instructions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/assembly-programming/microskills/common-assembly-instructions|common-assembly-instructions]]"
---
# Common Assembly Instructions

Assembly language is a low-level programming language that has a very close relationship with a computer's machine code. Each assembly instruction typically corresponds to one machine instruction. Understanding these basic instructions is fundamental to assembly programming.

## What are Assembly Instructions?

Assembly instructions are the commands that tell the processor what to do. They are typically short mnemonics (like `MOV`, `ADD`, `JMP`) that represent fundamental operations such as moving data, performing arithmetic, or controlling program flow.

## Frequently Used Instructions

Here are some of the most common assembly instructions and their basic functions:

*   **`MOV` (Move):** This instruction is used to copy data from one location to another. This could be from a register to memory, memory to a register, or between registers.
    *   *Example:* `MOV AX, 5` (Copies the value 5 into the AX register)
    *   *Example:* `MOV BX, AX` (Copies the value from register AX to register BX)

*   **`ADD` (Add):** This instruction performs addition. It typically adds the contents of a source operand to a destination operand and stores the result in the destination operand.
    *   *Example:* `ADD AX, BX` (Adds the value in BX to the value in AX, storing the result in AX)

*   **`SUB` (Subtract):** This instruction performs subtraction. It subtracts the source operand from the destination operand and stores the result in the destination operand.
    *   *Example:* `SUB AX, BX` (Subtracts the value in BX from the value in AX, storing the result in AX)

*   **`JMP` (Jump):** This instruction changes the flow of the program by transferring execution to a different instruction address.
    *   *Example:* `JMP TARGET_LABEL` (Unconditionally jumps to the instruction labeled `TARGET_LABEL`)

*   **`CMP` (Compare):** This instruction compares two operands. It doesn't store a result but sets status flags (like Zero Flag, Carry Flag) in the processor's status register, which can then be used by conditional jump instructions.
    *   *Example:* `CMP AX, BX` (Compares the value in AX with the value in BX. The flags are set based on whether AX is equal to, less than, or greater than BX.)

*   **`INT` (Interrupt):** This instruction generates a software interrupt. Interrupts are used to signal events and can be used for tasks like calling operating system services.
    *   *Example:* `INT 21h` (A common interrupt in DOS for calling various system services)

## Practical Scenario

Imagine you need to add two numbers and then jump to a specific part of your program if the result is zero.

1.  **Load the numbers:**
    ```assembly
    MOV AX, 10  ; Load the first number into register AX
    MOV BX, 5   ; Load the second number into register BX
    ```
2.  **Add the numbers:**
    ```assembly
    ADD AX, BX  ; Add the contents of BX to AX. AX now holds 15.
    ```
3.  **Compare the result (for demonstration, let's say we want to check if it's NOT zero):**
    ```assembly
    CMP AX, 0   ; Compare the result in AX with 0.
    JNE CONTINUE_PROCESSING ; Jump to CONTINUE_PROCESSING if AX is Not Equal to 0
    ```
4.  **Handle the zero case (if the above jump didn't happen):**
    ```assembly
    ; Code to execute if the result was 0
    JMP END_PROGRAM ; Jump to the end of the program

    CONTINUE_PROCESSING:
    ; Code to execute if the result was not 0
    ; ...
    END_PROGRAM:
    ; Program termination code
    ```

## Practice Task

Write down the assembly instructions for the following actions:

1.  Copy the value `25` into a register named `CX`.
2.  Subtract the value in register `DX` from register `CX`.
3.  Unconditionally jump to a label called `PROCESS_DATA`.

## Self-Check Questions

1.  What is the primary function of the `MOV` instruction?
2.  Which instruction is used to change the normal sequence of program execution?
3.  What is the purpose of the `CMP` instruction?
4.  If you have `ADD AX, 5`, what happens to the value in register `AX`?

## Supports

- [[skills/programming/programming-languages/assembly-programming/microskills/common-assembly-instructions|Common Assembly Instructions]]
