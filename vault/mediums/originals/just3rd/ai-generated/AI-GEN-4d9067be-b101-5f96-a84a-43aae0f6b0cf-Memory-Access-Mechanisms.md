---
type: "medium"
title: "Memory Access Mechanisms in AVR Microcontrollers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/avr-microcontroller-architecture/microskills/memory-access-mechanisms|memory-access-mechanisms]]"
learning-time-in-minutes: 4
---
# Memory Access Mechanisms in AVR Microcontrollers

Understanding how the AVR microcontroller's Central Processing Unit (CPU) accesses different types of memory is crucial for writing efficient and effective code. This lesson will explore the fundamental mechanisms the CPU uses to read from and write to memory.

## Understanding Memory Access

AVR microcontrollers have distinct memory spaces, each serving a specific purpose: Program Memory (Flash), Data Memory (SRAM), and potentially EEPROM. The CPU doesn't access them all in the same way. Specialized instructions and addressing modes are used to interact with each memory type. This allows for optimized performance and efficient use of resources.

### Program Memory (Flash)

Program Memory stores your compiled C code or assembly instructions. It's non-volatile, meaning it retains its contents even when power is off. The CPU fetches instructions from Program Memory sequentially to execute your program.

### Data Memory (SRAM)

Data Memory (Static Random-Access Memory) is where variables, the stack, and temporary data are stored during program execution. It's volatile, so its contents are lost when power is removed. SRAM offers fast read and write access.

### EEPROM (Electrically Erasable Programmable Read-Only Memory)

Some AVR microcontrollers also include EEPROM, which is non-volatile and used for storing configuration settings or data that needs to persist between power cycles. EEPROM access is slower than SRAM.

## How the CPU Accesses Memory

The AVR CPU uses dedicated instructions to interact with each memory space.

### Accessing Data Memory (SRAM)

Most general-purpose instructions in AVR assembly (and implicitly in C) operate on Data Memory. The CPU uses specific register pairs (like `X`, `Y`, `Z`) or direct addressing to access locations within SRAM.

When you declare a variable in C, like `int myVariable;`, the compiler typically allocates space for `myVariable` in SRAM. When your code needs to read or write to `myVariable`, the CPU will execute instructions that target the corresponding SRAM address.

**Example Scenario:**
Imagine you have the following C code:

```c
unsigned char counter = 0;
// ... later in the code
counter = counter + 1;
```

When the line `counter = counter + 1;` is executed:
1.  The CPU fetches the current value of `counter` from its SRAM location.
2.  It increments the value.
3.  It writes the new value back to the same SRAM location.

The assembly code behind this might look something like this (simplified):

```assembly
; Assuming 'counter' is at SRAM address 0x100
LDS R16, 0x100   ; Load the byte from SRAM address 0x100 into register R16
INC R16          ; Increment the value in register R16
STS 0x100, R16   ; Store the byte from register R16 back to SRAM address 0x100
```

### Accessing Program Memory (Flash)

The CPU fetches instructions from Program Memory using a Program Counter (PC). The PC holds the address of the next instruction to be executed. After an instruction is fetched, the PC is automatically incremented. Branches and jumps alter the PC to execute code non-sequentially.

Reading data directly from Program Memory (e.g., lookup tables) requires special instructions like `LPM` (Load Program Memory). This is less common than accessing SRAM for data.

**Example Scenario:**
Consider a lookup table stored in Program Memory:

```c
const unsigned char sineTable[] PROGMEM = {0, 12, 25, 37, ...}; // Stored in Flash
// ...
unsigned char sineValue = pgm_read_byte(&sineTable[angle]);
```

The `pgm_read_byte` function (often a macro or inline function in AVR-Libc) translates into assembly that uses `LPM`.

The `LPM` instruction (in its various forms) fetches a byte from the Program Memory address pointed to by the `Z` register (`R30:R31`) and places it into a general-purpose register.

### Accessing EEPROM

Accessing EEPROM is a more deliberate process. It involves specific control registers to initiate read or write operations. EEPROM access is slower because it involves longer write times.

**Example Scenario:**
Storing a calibration value:

```c
// Assume calibration value needs to be stored in EEPROM address 0x05
unsigned char calibrationValue = 128;

// Write to EEPROM
EEARH = 0x00; // EEPROM Address High
EEARL = 0x05; // EEPROM Address Low
EEDR = calibrationValue; // Data to write
EECR |= (1 << EEMPE); // Master Program Memory Enable
EECR |= (1 << EEPE);  // Program EEPROM Enable
```

To read:

```c
// Read from EEPROM address 0x05
EEARH = 0x00;
EEARL = 0x05;
EECR |= (1 << EERE); // Enable EEPROM Read
calibrationValue = EEDR; // Read the data
```

The CPU doesn't directly address EEPROM like SRAM. Instead, it writes the desired EEPROM address to the `EEAR` registers and then uses control bits in the `EECR` register to signal a read or write operation.

## Key Concepts

*   **Memory Spaces:** AVR microcontrollers organize memory into distinct areas (Program, Data, EEPROM).
*   **Addressing Modes:** Different instructions and addressing modes are used to access each memory type.
*   **CPU Registers:** General-purpose registers are used as temporary storage for data read from or to be written to memory.
*   **`LPM` Instruction:** Used to read data from Program Memory.
*   **EEPROM Control Registers:** `EEAR`, `EEDR`, and `EECR` are used to manage EEPROM access.

## Practice Task

Imagine you are writing a program for an AVR microcontroller that needs to:

1.  Store a counter variable in SRAM.
2.  Increment this counter in a loop 100 times.
3.  After the loop, store a fixed "status code" (e.g., 0xFF) into a specific EEPROM address (e.g., address 0x10).
4.  Finally, read the status code back from EEPROM into a variable.

Describe, in pseudocode or simple terms, the memory access operations the CPU would perform for steps 2, 3, and 4.

## Self-Check Questions

1.  Which memory type is typically used for storing program instructions?
2.  When you declare a variable in C like `int my_data;`, where is `my_data` most likely stored, and how would the CPU access it for reading and writing?
3.  What type of memory is volatile, meaning its contents are lost when power is removed?
4.  Which instruction would you typically use to read a byte of data from Program Memory into a CPU register?
5.  Briefly explain the difference in how the CPU initiates a read operation from SRAM versus a read operation from EEPROM.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/avr-microcontroller-architecture/microskills/memory-access-mechanisms|Memory Access Mechanisms]]
