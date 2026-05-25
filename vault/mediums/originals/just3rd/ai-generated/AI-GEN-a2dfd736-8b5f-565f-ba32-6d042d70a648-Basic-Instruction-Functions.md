---
type: medium
title: Understanding Basic Assembly Instructions
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[basic-instruction-functions|basic-instruction-functions]]"
learning-time-in-minutes: 3
---
# Understanding Basic Assembly Instructions

Assembly language, at its core, is about giving direct commands to the computer's processor. These commands, called instructions, tell the CPU exactly what to do, step-by-step. Understanding the purpose of common instructions is the first step in grasping assembly programming.

## What Are Basic Instructions?

Think of these as the fundamental building blocks of any program. They handle tasks like moving data, performing calculations, and controlling the flow of execution. For this lesson, we'll focus on a few common ones.

*   **`MOV` (Move):** This instruction copies data from one location to another. It can move data between registers (small, fast storage locations within the CPU) or between registers and memory.
    *   *Example:* `MOV AX, 5` would copy the value `5` into the `AX` register.
*   **`ADD` (Add):** Performs addition. It typically adds the contents of one register to another, or adds an immediate value to a register.
    *   *Example:* `ADD BX, AX` would add the value in `AX` to the value in `BX`, storing the result back in `BX`.
*   **`SUB` (Subtract):** Performs subtraction, similar to `ADD`.
    *   *Example:* `SUB CX, 10` would subtract `10` from the value in the `CX` register.
*   **`JMP` (Jump):** This instruction changes the flow of execution. Instead of running the next instruction in sequence, `JMP` tells the processor to go to a different part of the program.
    *   *Example:* `JMP start_loop` would cause the program to jump to the section labeled `start_loop`.
*   **`CMP` (Compare):** Compares two values. It doesn't store a result directly but sets "flags" within the CPU that can be checked by other instructions (like conditional jumps).
    *   *Example:* `CMP AX, BX` compares the values in `AX` and `BX`.

## Practical Scenario

Imagine you're writing a simple program to count how many times a specific number appears in a list stored in memory.

1.  You'd initialize a `counter` (a register) to zero using `MOV counter, 0`.
2.  You'd load the first number from your list into a register, perhaps `MOV current_number, [memory_address_of_first_item]`.
3.  You'd compare this `current_number` with the target number you're looking for: `CMP current_number, target_number`.
4.  If they match, you'd increment the `counter` using `ADD counter, 1`.
5.  Then, you'd need to move to the next item in the list and repeat the comparison. If it's not a match, you'd just move to the next item. This repetition would be controlled by `JMP` instructions.

## Practice Task

For the following scenarios, identify which basic instruction (from the ones listed above) would be most suitable.

1.  You need to store the result of a calculation (which is in register `R1`) into a memory location called `result_var`.
2.  You want to check if the value in register `A` is greater than the value in register `B`, and if so, jump to a section of code labeled `process_greater`.
3.  You have a loop that needs to repeat a certain number of times, and you need to decrease a loop counter by one each time.

## Self-Check Questions

1.  What is the primary purpose of the `MOV` instruction?
2.  Which instruction is used to perform addition?
3.  If you want your program to skip a block of code and execute a different section instead, which instruction would you use?
4.  What does the `CMP` instruction do? Does it store the result of the comparison?

## Supports

- [[basic-instruction-functions|Basic Instruction Functions]]
