---
type: "medium"
title: "Verifying Assembly Program Correctness"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/assembly-programming/microskills/assembly-program-correctness-verification|assembly-program-correctness-verification]]"
---
# Verifying Assembly Program Correctness

This lesson focuses on how to analyze assembly programs to ensure they function as intended and are free from errors. We'll explore common pitfalls and systematic approaches to verify program correctness.

## Why Verify Correctness?

Assembly programs directly manipulate hardware, making errors particularly impactful. A single incorrect instruction can lead to crashes, incorrect data manipulation, or security vulnerabilities. Verifying correctness ensures your program behaves predictably and reliably.

## Common Sources of Errors

When analyzing assembly code, look out for these common issues:

*   **Off-by-one errors:** Incorrect loop termination conditions or array indexing.
*   **Register misuse:** Using a register for the wrong purpose, overwriting critical data unintentionally.
*   **Incorrect addressing modes:** Using the wrong method to access memory, leading to accessing unintended locations.
*   **Stack corruption:** Pushing or popping too many or too few items from the stack, disrupting function calls and returns.
*   **Data type mismatches:** Treating data as a different type (e.g., an integer as a pointer).

## Practical Verification Techniques

### 1. Manual Code Review

This involves carefully reading through the assembly code, instruction by instruction, and mentally simulating its execution.

*   **Trace execution flow:** Follow the program's path, paying attention to conditional branches and jumps.
*   **Track register values:** Keep a log of what each relevant register holds at different points.
*   **Analyze memory access:** Verify that memory addresses being read from or written to are correct.

### 2. Using a Debugger

Debuggers are invaluable tools for verifying assembly program correctness. They allow you to:

*   **Set breakpoints:** Pause execution at specific lines of code.
*   **Step through code:** Execute instructions one by one.
*   **Inspect registers and memory:** Observe the state of the program at any point.
*   **Examine the call stack:** Understand function call sequences.

### 3. Unit Testing

Write small, isolated tests that execute specific parts of your assembly code with known inputs and verify expected outputs.

#### Example Scenario: Summing Array Elements

Let's say you have an assembly routine to sum the elements of an array.

**Goal:** Sum the integers in a given array.

**Potential Issues to Check:**
*   Does the loop terminate correctly after processing all elements?
*   Is the sum accumulator updated properly?
*   Are array elements accessed at the correct offsets?

#### Example Code Snippet (x86-like pseudocode)

```assembly
; Assume array starts at [esi], length at [ecx]
MOV eax, 0        ; Initialize sum to 0
MOV ebx, [ecx]    ; Load array length into ebx
MOV edi, esi      ; Copy array start address to edi

SUM_LOOP:
  CMP ebx, 0      ; Check if array length is zero
  JE END_SUM      ; If zero, exit loop

  ADD eax, [edi]  ; Add current element to sum
  ADD edi, 4      ; Move to next element (assuming 4-byte integers)
  DEC ebx         ; Decrement array length counter
  JMP SUM_LOOP    ; Jump back to loop start

END_SUM:
  ; Result is in EAX
```

When reviewing this, you'd ask:
*   Is `eax` initialized correctly? Yes.
*   Is `ebx` correctly loaded with the length? Assumed `[ecx]` holds it.
*   Does `CMP ebx, 0` and `JE END_SUM` correctly handle the loop termination? Yes.
*   Is `[edi]` the correct way to access the current element? Yes, if `edi` is managed properly.
*   Is `ADD edi, 4` correct for 4-byte integers? Yes.
*   Is `DEC ebx` correctly decrementing the counter? Yes.

### Practice Task

Analyze the following assembly snippet intended to find the maximum value in a small array of bytes. Identify at least two potential correctness issues.

```assembly
SECTION .data
  my_array DB 10, 5, 20, 15, 8  ; Array of bytes
  array_len EQU $ - my_array     ; Calculate length

SECTION .text
  global _start

_start:
  MOV esi, my_array       ; Point esi to the start of the array
  MOV ecx, array_len      ; Load array length into ecx
  MOV al, [esi]           ; Initialize max with the first element

FIND_MAX_LOOP:
  CMP ecx, 1              ; Compare counter with 1
  JE END_FIND_MAX         ; Exit if only one element left

  INC esi                 ; Move to the next byte
  MOV bl, [esi]           ; Load the next byte into bl

  CMP al, bl              ; Compare current max (al) with next byte (bl)
  JL UPDATE_MAX           ; If next byte is larger, update max

  DEC ecx                 ; Decrement counter
  JMP FIND_MAX_LOOP       ; Continue loop

UPDATE_MAX:
  MOV al, bl              ; Update max
  DEC ecx                 ; Decrement counter
  JMP FIND_MAX_LOOP       ; Continue loop

END_FIND_MAX:
  ; Max value is in AL
  ; Program exit logic would follow here
```

### Self-Check Questions

1.  What is the primary risk of incorrect register usage in assembly programming?
2.  When tracing assembly code manually, what is one key piece of information you must track consistently?
3.  In the `FIND_MAX_LOOP` example, why might `CMP ecx, 1` and `JE END_FIND_MAX` lead to an error if not handled carefully in relation to the loop's progression?
4.  If your assembly program is supposed to sort an array but instead crashes midway, what type of error might be the most likely culprit?

## Supports

- [[skills/programming/programming-languages/assembly-programming/microskills/assembly-program-correctness-verification|Assembly Program Correctness Verification]]
