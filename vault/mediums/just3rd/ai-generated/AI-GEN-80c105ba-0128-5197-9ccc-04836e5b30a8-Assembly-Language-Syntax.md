---
type: "medium"
title: "Assembly Language Syntax"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/assembly-programming/microskills/assembly-language-syntax|assembly-language-syntax]]"
---
# Assembly Language Syntax

Understanding the syntax of assembly language is crucial for writing and interpreting low-level code. This lesson will focus on the grammatical rules and conventions that govern how assembly instructions are written.

Assembly language uses a specific structure for each line of code. Typically, a line consists of an optional label, followed by the instruction mnemonic, optional operands, and an optional comment.

*   **Label:** A symbolic name that refers to a memory address. Labels are optional and are used to make code more readable and to allow jumps to specific points.
*   **Instruction Mnemonic:** The command itself, such as `MOV` (move), `ADD` (add), `SUB` (subtract), `JMP` (jump).
*   **Operands:** The data or memory locations that the instruction acts upon. There can be zero, one, or two operands, depending on the instruction. Operands can be registers, immediate values, or memory addresses.
*   **Comment:** Text following a specific character (often `;`) that is ignored by the assembler. Comments are used to explain the code.

## Practical Example

Let's look at a simple example in a common assembly dialect (like NASM for x86 architecture):

```assembly
section .data
    message db 'Hello, Assembly!', 0 ; A string to display

section .text
    global _start

_start:
    ; Move the address of 'message' into the EBX register
    mov ebx, message

    ; Move the length of 'message' into the ECX register (we'll assume it's 14 characters + null terminator)
    mov ecx, 15

    ; Use the SYS_WRITE system call (syscall number 4)
    mov eax, 4
    ; File descriptor 1 is stdout
    mov edx, 1
    int 0x80 ; Invoke kernel

    ; Exit the program (syscall number 1)
    mov eax, 1
    xor ebx, ebx ; Return code 0
    int 0x80 ; Invoke kernel
```

In this example:

*   `section .data` and `section .text` are directives that tell the assembler where to place data and code, respectively.
*   `message db 'Hello, Assembly!', 0` defines a data segment. `db` means "define byte". `'Hello, Assembly!'` is the string, and `0` is the null terminator.
*   `_start:` is a label marking the entry point of our program.
*   `mov ebx, message` is an instruction. `mov` is the mnemonic, `ebx` is a destination register, and `message` is the source (its memory address).
*   `mov ecx, 15` moves the immediate value `15` into the `ecx` register.
*   `mov eax, 4` and `mov edx, 1` load values for the system call.
*   `int 0x80` is an instruction to trigger an interrupt, which in this context invokes the operating system's kernel to perform the requested system call.
*   `;` denotes the start of a comment.

## Practice Task

Examine the following assembly snippet and identify:
1.  The labels.
2.  The instruction mnemonics.
3.  The operands for each instruction.
4.  Any comments.

```assembly
section .bss
    counter resd 1 ; Reserve a double word for a counter

section .text
    global main

main:
    mov eax, 10      ; Initialize accumulator
    mov ebx, 5       ; Load a value
    add eax, ebx     ; Add EBX to EAX
    jmp end_loop     ; Unconditional jump

another_label:
    dec eax          ; Decrement EAX

end_loop:
    ; End of simple demonstration
    ret              ; Return from procedure
```

## Self-Check Questions

1.  What is the purpose of a label in assembly language?
2.  What is an instruction mnemonic?
3.  Can an assembly instruction have no operands? If so, give an example of such an instruction.
4.  What character typically signifies the start of a comment in assembly code?

## Supports

- [[skills/programming/programming-languages/assembly-programming/microskills/assembly-language-syntax|Assembly Language Syntax]]
