---
type: medium
title: Assembly Language Program Organization
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[assembly-language-program-organization|assembly-language-program-organization]]"
learning-time-in-minutes: 2
---
# Assembly Language Program Organization

Assembly language programs, while appearing simple, have a fundamental structure that makes them readable and organized. Understanding this organization is key to working with low-level code.

## What is Assembly Program Organization?

An assembly program is typically divided into distinct sections, each serving a specific purpose. These sections help the assembler (the program that translates assembly code into machine code) and human readers understand where different types of information are located. The most common sections are:

*   **Text Segment (.text):** This is where the actual program instructions (the code) reside. It's read-only and contains the executable commands.
*   **Data Segment (.data):** This section holds initialized global and static variables. These are variables that have a defined value when the program starts.
*   **BSS Segment (.bss):** This section is for uninitialized global and static variables. These variables are typically set to zero by the operating system or runtime environment before program execution begins.
*   **Stack Segment (.stack):** This area is used for local variables, function call arguments, and return addresses during program execution. It grows and shrinks as functions are called and return.

## Practical Example: A Simple Assembly Program

Let's look at a very basic example to illustrate these sections. This example uses a common assembly syntax.

```assembly
; --- Data Segment ---
.data
    message:    .asciiz "Hello, Assembly!"  ; A null-terminated string

; --- Text Segment ---
.text
.globl main      ; Declare main as a global symbol

main:
    ; Load the address of the message into register $a0
    la  $a0, message

    ; Load the system call code for printing a string (syscall 4) into $v0
    li  $v0, 4

    ; Make the system call
    syscall

    ; Load the system call code for exiting the program (syscall 10) into $v0
    li  $v0, 10

    ; Make the system call to exit
    syscall
```

In this example:

*   `.data` marks the beginning of the data segment where `message` is defined.
*   `.text` marks the beginning of the code segment.
*   `.globl main` makes the `main` label visible externally, indicating the program's entry point.
*   `main:` is the start of our executable code.
*   The lines with `;` are comments, ignored by the assembler.

## Practice Task

Imagine you need to write a small assembly program that displays a number.

1.  **Identify the segments** you would likely need for this task.
2.  **Sketch out the basic structure** of your assembly file, showing where your data and code would go. You don't need to write the actual code yet, just the organizational layout.

## Self-Check Questions

1.  Which section of an assembly program typically holds the instructions that the computer executes?
2.  What is the primary difference between the `.data` and `.bss` segments?
3.  Why is it important to have distinct sections in an assembly program?

## Supports

- [[assembly-language-program-organization|Assembly Language Program Organization]]
