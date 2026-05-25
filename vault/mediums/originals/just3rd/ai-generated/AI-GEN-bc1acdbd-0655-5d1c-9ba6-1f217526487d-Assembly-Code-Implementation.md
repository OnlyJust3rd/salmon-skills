---
type: medium
title: Implementing Basic Arithmetic in Assembly
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[assembly-code-implementation|assembly-code-implementation]]"
learning-time-in-minutes: 2
---
# Implementing Basic Arithmetic in Assembly

This lesson focuses on writing assembly code to perform fundamental arithmetic operations. You'll learn how to translate simple mathematical tasks into instructions that a processor can execute directly.

## Core Idea: Machine Instructions for Math

Assembly language provides direct access to the processor's instruction set. For arithmetic, this means using specific instructions like `ADD` (addition), `SUB` (subtraction), `MUL` (multiplication), and `DIV` (division). These instructions typically operate on values stored in registers, which are small, high-speed storage locations within the CPU.

## Practical Example: Summing Two Numbers

Let's say we want to add two numbers, 5 and 10, and store the result. We'll use a common x86-like assembly syntax for this example.

**Scenario:** Calculate `5 + 10`.

**Assembly Code:**

```assembly
section .data
    ; No initialized data needed for this simple example

section .text
    global _start

_start:
    ; Load the first number (5) into register EAX
    mov eax, 5

    ; Load the second number (10) into register EBX
    mov ebx, 10

    ; Add the value in EBX to the value in EAX.
    ; The result will be stored in EAX.
    add eax, ebx

    ; At this point, EAX contains the sum (15).
    ; In a real program, you'd likely move this to memory
    ; or use it for further calculations.

    ; Exit the program (Linux system call for exit)
    mov eax, 1      ; syscall number for exit
    xor ebx, ebx    ; exit code 0
    int 0x80        ; invoke kernel
```

**How it Works:**

1.  **`mov eax, 5`**: The `mov` instruction copies the value `5` into the `eax` register.
2.  **`mov ebx, 10`**: The `mov` instruction copies the value `10` into the `ebx` register.
3.  **`add eax, ebx`**: The `add` instruction takes the value in `ebx` and adds it to the value currently in `eax`. The final sum overwrites the original value in `eax`. So, `eax` now holds `5 + 10 = 15`.
4.  The remaining lines are standard boilerplate for exiting a simple program in Linux.

## Practice Task

Write assembly code to perform the following calculation: `(25 - 7) * 3`.

Hint: You'll need to use `mov`, `sub`, and `mul` instructions. Remember that `mul` often stores its result in a specific register pair. For simplicity, assume a 16-bit architecture where `mul` on a register `ax` stores the result in `dx:ax`.

## Self-Check Questions

1.  What is the purpose of the `mov` instruction in assembly?
2.  If you have values in registers `R1` and `R2`, and you want to subtract `R2` from `R1`, which assembly instruction would you use? Where would the result typically be stored?
3.  Why is it important to understand how arithmetic instructions affect registers?

## Supports

- [[assembly-code-implementation|Assembly Code Implementation]]
