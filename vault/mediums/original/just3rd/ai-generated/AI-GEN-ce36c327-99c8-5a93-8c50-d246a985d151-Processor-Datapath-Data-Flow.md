---
type: "medium"
title: "Processor Datapath Data Flow"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/computer-architecture/processor-datapath/microskills/processor-datapath-data-flow|processor-datapath-data-flow]]"
learning-time-in-minutes: 5
---
# Processor Datapath Data Flow

Understanding how data moves within a processor is crucial to grasping how instructions are executed. This lesson focuses on the **flow of data through a processor datapath** during instruction execution, a core concept in Processor Datapath organization.

## What is a Processor Datapath?

Think of a processor datapath as the "highway" within a CPU. It's the collection of hardware components that perform arithmetic and logic operations, and the pathways that move data between these components and memory. These components typically include:

*   **Program Counter (PC):** Holds the address of the next instruction to be fetched.
*   **Instruction Memory:** Stores the program instructions.
*   **Register File:** A small, fast memory that holds temporary data and intermediate results.
*   **Arithmetic Logic Unit (ALU):** Performs calculations and logical operations.
*   **Data Memory:** Stores program data.
*   **Multiplexers (Muxes):** Select one of several input signals to pass to a single output.
*   **Control Unit:** Decodes instructions and generates control signals to direct the datapath.

## Data Flow During Instruction Execution

Let's break down how data moves for a typical instruction. We'll consider a simplified scenario.

### 1. Instruction Fetch

The process always begins with fetching the instruction.

*   The **Program Counter (PC)** holds the memory address of the instruction to be fetched.
*   This address is sent to **Instruction Memory**.
*   Instruction Memory retrieves the instruction at that address.
*   The fetched instruction is then sent to the **Control Unit** for decoding and to the **Instruction Register** (often part of the register file or a dedicated unit) for temporary storage.
*   Crucially, the **PC is updated**. It's usually incremented to point to the next sequential instruction. This update might involve an adder.

**Data Flow:** PC -> Instruction Memory Address Input; Instruction Memory Output -> Instruction Register & Control Unit; PC Update Logic.

### 2. Instruction Decode and Register Fetch

Once the instruction is fetched, the Control Unit decodes it to determine what operation needs to be performed and which registers are involved.

*   The **Control Unit** analyzes the instruction's opcode.
*   Based on the opcode, it generates control signals for other datapath components.
*   If the instruction requires operands from the **Register File**, the relevant register numbers (read registers) are extracted from the instruction.
*   These register numbers are sent to the **Register File**.
*   The Register File outputs the data stored in those specified registers.

**Data Flow:** Instruction (from Instruction Register) -> Control Unit; Instruction (register addresses) -> Register File Address Inputs; Register File Outputs -> Data for ALU or other destinations.

### 3. Execution (ALU Operation)

This is where the actual computation or logical operation takes place.

*   Operands, fetched from the Register File or immediate values embedded in the instruction, are fed into the **ALU**.
*   The **Control Unit** signals the ALU which operation to perform (e.g., addition, subtraction, AND, OR).
*   The ALU performs the operation and produces a result.

**Data Flow:** Register File Output (or immediate value) -> ALU Input 1; Register File Output (or immediate value) -> ALU Input 2; Control Unit signals -> ALU Operation Select; ALU Output -> temporary storage or next stage.

### 4. Memory Access (Load/Store Instructions)

For instructions that read from or write to data memory (like `LOAD` or `STORE`), specific data paths are used.

*   **Load Instruction:**
    *   An address is calculated (often by the ALU, using a base register and an offset).
    *   This address is sent to **Data Memory** as an address input.
    *   Data Memory retrieves the data at that address.
    *   This retrieved data is then written back to the **Register File**.
*   **Store Instruction:**
    *   An address is calculated (similar to load).
    *   The data to be stored is fetched from the **Register File**.
    *   Both the address and the data are sent to **Data Memory**.
    *   Data Memory writes the data to the specified address.

**Data Flow (Load):** ALU Output (address) -> Data Memory Address Input; Data Memory Output -> Register File Data Input; Control Unit signals -> Register File Write Enable.
**Data Flow (Store):** ALU Output (address) -> Data Memory Address Input; Register File Output (data) -> Data Memory Data Input.

### 5. Write Back

The final step is to write the result of the instruction back to the Register File (if applicable).

*   The result can come from the **ALU** (for arithmetic/logic instructions) or **Data Memory** (for load instructions).
*   A multiplexer often selects the correct source for the write-back data.
*   The destination register address (write register) is taken from the instruction.
*   The selected data is written into the specified register in the **Register File**.

**Data Flow:** ALU Output OR Data Memory Output -> Mux -> Register File Data Input; Instruction (write address) -> Register File Write Address Input; Control Unit signals -> Register File Write Enable.

## Example: The `ADD R1, R2, R3` Instruction

Let's trace the data flow for a simple `ADD R1, R2, R3` instruction, which means "add the contents of register R2 and register R3, and store the result in register R1."

1.  **Fetch:** The PC points to the memory location of this `ADD` instruction. The instruction is fetched from Instruction Memory. The PC is updated to the next instruction's address.
2.  **Decode:** The Control Unit decodes the `ADD` instruction. It identifies that R2 and R3 are read registers, and R1 is the write register.
3.  **Register Fetch:** The Register File is accessed using R2 and R3 as read addresses. The data from R2 and R3 are outputted.
4.  **Execute:** The two data values from R2 and R3 are sent to the ALU. The ALU is signaled to perform addition. The ALU computes the sum.
5.  **Write Back:** The result from the ALU is directed (via a Mux if necessary) to the data input of the Register File. R1 is provided as the write address. The Control Unit enables the write operation. The sum is stored in R1.

By understanding these fundamental data movement paths, you gain insight into the inner workings of a processor and how it executes your programs.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/processor-datapath/microskills/processor-datapath-data-flow|Processor Datapath Data Flow]]
