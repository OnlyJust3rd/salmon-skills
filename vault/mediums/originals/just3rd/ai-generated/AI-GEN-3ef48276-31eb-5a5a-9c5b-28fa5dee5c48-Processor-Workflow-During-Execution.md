---
type: "medium"
title: "Processor Workflow During Execution"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/processor-design/microskills/processor-workflow-during-execution|processor-workflow-during-execution]]"
learning-time-in-minutes: 5
---
# Processor Workflow During Execution

Understanding how a processor executes instructions is fundamental to grasping processor design. This lesson will walk you through the typical operational flow of a simple processor, demystifying the cycle of fetching, decoding, and executing.

## The Instruction Cycle: A Core Loop

At its heart, a processor operates in a continuous loop known as the **instruction cycle**. Each iteration of this cycle allows the processor to perform one instruction from a program. This cycle can be broken down into several key stages. For a simple processor, these stages are:

1.  **Fetch:** The processor retrieves the next instruction from memory.
2.  **Decode:** The processor interprets the instruction to determine what operation needs to be performed.
3.  **Execute:** The processor carries out the decoded instruction.
4.  **Write-back (or Store):** The result of the execution is written back to memory or a register.

Let's explore each of these stages in more detail.

## Stage 1: Fetch

The first step in executing an instruction is to get it from memory.

*   **Program Counter (PC):** A special register called the Program Counter (PC) holds the memory address of the *next* instruction to be executed.
*   **Memory Access:** The processor sends the address stored in the PC to the memory.
*   **Instruction Register (IR):** The memory responds by sending the instruction located at that address back to the processor. This instruction is then typically stored in another special register called the Instruction Register (IR).
*   **Increment PC:** After fetching the instruction, the PC is automatically incremented to point to the *next* instruction in sequence. This prepares it for the next fetch cycle.

**Analogy:** Imagine you have a recipe book (memory). The PC is like a bookmark pointing to the next step you need to follow. You read the step (fetch the instruction) and then move your bookmark to the step after that (increment PC).

## Stage 2: Decode

Once an instruction is fetched into the Instruction Register, the processor needs to figure out what it means.

*   **Instruction Format:** Instructions have a specific format, typically divided into an **opcode** (operation code) and **operands**.
    *   The opcode tells the processor *what* to do (e.g., add, subtract, load, store).
    *   Operands specify *what data* to perform the operation on, or *where* to find that data (e.g., register numbers, memory addresses).
*   **Control Unit:** The processor's control unit is responsible for decoding the instruction. It interprets the opcode and sends signals to other parts of the processor to prepare them for the upcoming operation.

**Example:** An instruction might look like `ADD R1, R2`.
*   The opcode would be `ADD`.
*   The operands would be `R1` and `R2` (register identifiers).
The control unit would decode this as "add the contents of register R2 to the contents of register R1."

## Stage 3: Execute

This is where the actual work of the instruction happens. The control unit, having decoded the instruction, directs the appropriate components to perform the operation.

*   **Arithmetic Logic Unit (ALU):** For arithmetic and logical operations (like addition, subtraction, AND, OR), the ALU is the workhorse. It receives the necessary data from registers or memory and performs the calculation.
*   **Data Movement:** For instructions like `LOAD` or `STORE`, the processor interacts with memory to move data between registers and memory locations.
*   **Control Flow:** Instructions that alter the normal flow of execution, such as jumps or branches, are also handled here. The PC might be updated to a different address based on a condition.

**Continuing the Example:** If the instruction was `ADD R1, R2`:
The control unit would instruct the ALU to add the value in R2 to the value in R1.

## Stage 4: Write-back (or Store)

After an instruction has been executed, its result often needs to be saved.

*   **Register Update:** If the result is intended to be used in subsequent instructions, it's usually written back to a specific register.
*   **Memory Update:** For instructions like `STORE`, the result (or data from a register) is written to a designated memory address.

**Continuing the Example:** For `ADD R1, R2`, the result of the addition would be stored back into register R1, overwriting its previous content.

## Putting It All Together: A Simple Execution Scenario

Let's trace a short sequence of instructions for a hypothetical processor:

1.  **Instruction 1 (Fetch):** PC points to address `0x100`. Instruction fetched is `LOAD R1, [0x500]` (Load the value from memory address `0x500` into register `R1`). PC increments to `0x104` (assuming 4-byte instructions).
2.  **Instruction 1 (Decode):** Control unit recognizes `LOAD`. It prepares to read from memory address `0x500`.
3.  **Instruction 1 (Execute):** Processor reads the value `42` from memory address `0x500`.
4.  **Instruction 1 (Write-back):** The value `42` is stored in register `R1`.

---

5.  **Instruction 2 (Fetch):** PC points to address `0x104`. Instruction fetched is `LOAD R2, [0x504]` (Load the value from memory address `0x504` into register `R2`). PC increments to `0x108`.
6.  **Instruction 2 (Decode):** Control unit recognizes `LOAD`. It prepares to read from memory address `0x504`.
7.  **Instruction 2 (Execute):** Processor reads the value `10` from memory address `0x504`.
8.  **Instruction 2 (Write-back):** The value `10` is stored in register `R2`.

---

9.  **Instruction 3 (Fetch):** PC points to address `0x108`. Instruction fetched is `ADD R1, R2` (Add the content of `R2` to `R1` and store the result in `R1`). PC increments to `0x10C`.
10. **Instruction 3 (Decode):** Control unit recognizes `ADD`. It prepares the ALU to add the contents of `R1` and `R2`.
11. **Instruction 3 (Execute):** ALU performs `42 + 10 = 52`.
12. **Instruction 3 (Write-back):** The result `52` is stored back into register `R1`.

This cycle of Fetch, Decode, Execute, and Write-back is the fundamental process by which a processor brings programs to life, one instruction at a time.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/processor-design/microskills/processor-workflow-during-execution|Processor Workflow During Execution]]
