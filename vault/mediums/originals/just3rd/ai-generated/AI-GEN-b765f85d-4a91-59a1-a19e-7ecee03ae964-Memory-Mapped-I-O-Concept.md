---
type: "medium"
title: "Memory-Mapped I/O: Accessing Devices Like Memory"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/input-output-interfacing/microskills/memory-mapped-i-o-concept|memory-mapped-i-o-concept]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/input-output-interfacing/input-output-interfacing|input-output-interfacing]]"
learning-time-in-minutes: 4
---
# Memory-Mapped I/O: Accessing Devices Like Memory

In the world of computing, devices like keyboards, network cards, and graphics processors need to communicate with the main processor. This communication happens through Input/Output (I/O) mechanisms. One fundamental way this is achieved is through **Memory-Mapped I/O**.

## What is Memory-Mapped I/O?

Memory-mapped I/O is a technique where the special I/O device registers (which control the device's behavior and hold data) are assigned addresses within the same address space as the main memory.

Think of it like this: Your computer has a big set of mailboxes. Some mailboxes are for storing letters (main memory), and some are for receiving instructions or data for specific appliances (I/O devices). In memory-mapped I/O, all these mailboxes, whether for letters or appliance instructions, are numbered sequentially and are all accessible using the same addressing system.

### Key Idea: Unified Address Space

The core concept is that the processor uses the same set of instructions and the same address bus to access both memory locations and device registers. This means that an instruction like `LOAD` or `STORE`, which normally fetches data from or writes data to RAM, can also be used to interact with an I/O device.

For example, if a keyboard's status register is assigned memory address `0xFFFF0000`, the processor can read its status by executing a `LOAD` operation targeting `0xFFFF0000`. Similarly, if a graphics card's pixel buffer is mapped to memory addresses starting from `0x10000000`, the processor can "draw" by writing pixel data to these addresses.

### How it Works: Address Decoding

When the processor issues a memory read or write request with a specific address, the memory controller and dedicated I/O address decoders examine this address.

*   If the address falls within the range assigned to main memory, the request is routed to the RAM modules.
*   If the address falls within the range assigned to a particular I/O device's registers, the request is intercepted and directed to that device's controller. The device controller then performs the requested operation (reading from or writing to its internal registers).

This address decoding ensures that the processor's requests are correctly routed to either memory or the intended I/O device without any ambiguity.

### Advantages of Memory-Mapped I/O

*   **Simplicity:** Using the same instructions for both memory and I/O simplifies the processor's instruction set and the hardware logic required for I/O operations.
*   **Flexibility:** Any instruction that can access memory can potentially access I/O devices, offering a wide range of operations.
*   **Address Space Utilization:** It efficiently uses the processor's address bus, as there's no need for separate I/O address space.

### Disadvantages of Memory-Mapped I/O

*   **Address Space Consumption:** I/O devices consume valuable memory addresses. If many devices are used, a significant portion of the address space might be dedicated to I/O, leaving less for actual memory.
*   **Performance Considerations:** Accessing I/O devices might be slower than accessing memory, and the processor might have to wait for the device to respond. This can impact overall performance if not managed carefully.

### Example Scenario

Imagine a simple embedded system with a digital-to-analog converter (DAC) that controls a speaker's volume. The DAC has a "data register" at address `0x8000` and a "control register" at address `0x8004`.

To set the volume to a certain level (say, represented by the value `128`), the processor would execute code similar to this (in pseudocode):

```
// Assume 'volume_level' holds the desired value (e.g., 128)

// Write the volume level to the DAC's data register
STORE volume_level TO address 0x8000

// Potentially, write to the control register to enable output or set other parameters
// STORE control_settings TO address 0x8004
```

In this example, `STORE` is a standard memory write instruction. However, because address `0x8000` is mapped to the DAC's data register, the processor's write operation is directed to the DAC, not RAM. The DAC then receives the `volume_level` and adjusts its output accordingly.

### Common Mistakes

*   **Confusing Memory Addresses with I/O Port Numbers:** In systems that use separate I/O address spaces (like some architectures), confusing memory addresses with I/O port numbers can lead to incorrect operations.
*   **Overlapping Address Ranges:** If not carefully designed, I/O device address ranges could overlap with actual memory ranges or other device ranges, causing unpredictable behavior.

Memory-mapped I/O is a fundamental mechanism that allows your processor to communicate with the outside world through various devices, treating them as if they were just another location in memory.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/input-output-interfacing/microskills/memory-mapped-i-o-concept|Memory-Mapped I/O Concept]]
- [[skills/computing/hardware-embedded/embedded-systems/embedded-programming/bare-metal-c-programming/microskills/memory-mapped-i-o-concept|Memory-Mapped I/O Concept]]
