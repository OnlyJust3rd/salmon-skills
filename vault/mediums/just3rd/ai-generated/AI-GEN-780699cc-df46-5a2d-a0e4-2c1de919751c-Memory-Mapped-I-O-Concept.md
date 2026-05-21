---
type: "medium"
title: "Memory-Mapped I/O: Talking to Hardware"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/input-output-interfacing/microskills/memory-mapped-i-o-concept|memory-mapped-i-o-concept]]"
  - "[[skills/programming/programming-languages/bare-metal-c-programming/microskills/memory-mapped-i-o-concept|memory-mapped-i-o-concept]]"
---
# Memory-Mapped I/O: Talking to Hardware

In bare-metal C programming, you're not dealing with an operating system to manage your hardware. Instead, you often need to communicate directly with the physical components of your embedded system. One fundamental way to do this is through **Memory-Mapped I/O (MMIO)**.

## What is Memory-Mapped I/O?

Memory-Mapped I/O is a method where hardware devices are accessed by the processor as if they were memory locations. Each hardware register within a device (like a GPIO pin's control register or a timer's current value) is assigned a unique memory address. Your C code then reads from or writes to these specific addresses to control the hardware.

Think of it like this: imagine your microcontroller has a set of mailboxes. Each mailbox represents a specific piece of hardware functionality. To send a command to turn on an LED, you wouldn't send a separate "turn on LED" message. Instead, you'd find the "LED control mailbox" and put a specific number (a value) into it. The hardware connected to that mailbox reads the number and acts accordingly.

## Key Concepts

*   **Unique Addresses:** Every hardware register has a fixed memory address assigned by the hardware designer.
*   **Read/Write Operations:** You use standard C memory operations (like pointer dereferencing) to read from or write to these addresses.
*   **Direct Hardware Control:** This bypasses operating system abstractions, giving you precise control.

## Practical Example: Blinking an LED

Let's say you have a simple embedded system where you want to control an LED connected to a General Purpose Input/Output (GPIO) pin. The hardware documentation tells you:

*   The **GPIO Data Direction Register** is at memory address `0x40020800`. Writing a `1` to a specific bit makes the corresponding pin an output.
*   The **GPIO Data Output Register** is at memory address `0x40020810`. Writing a `1` to a specific bit turns the corresponding pin HIGH, and `0` turns it LOW.

Suppose your LED is connected to pin 5. Here's how you might configure and control it in C:

```c
// Define the memory addresses (often done in header files provided by the MCU vendor)
#define GPIO_DATA_DIR_REG   (*(volatile unsigned int *)0x40020800)
#define GPIO_DATA_OUT_REG   (*(volatile unsigned int *)0x40020810)

// Pin number for the LED
#define LED_PIN             5

void initialize_led() {
    // Configure pin 5 as an output
    // Set the 5th bit in the Data Direction Register to 1
    GPIO_DATA_DIR_REG |= (1 << LED_PIN);
}

void turn_on_led() {
    // Turn on the LED by setting the 5th bit in the Data Output Register
    GPIO_DATA_OUT_REG |= (1 << LED_PIN);
}

void turn_off_led() {
    // Turn off the LED by clearing the 5th bit in the Data Output Register
    GPIO_DATA_OUT_REG &= ~(1 << LED_PIN);
}

int main() {
    initialize_led();

    // Blink the LED indefinitely (simplified loop)
    while (1) {
        turn_on_led();
        // A delay function would go here in real code
        for (volatile int i = 0; i < 1000000; ++i);

        turn_off_led();
        // Another delay
        for (volatile int i = 0; i < 1000000; ++i);
    }
    return 0;
}
```

**Note:** The `volatile` keyword is crucial here. It tells the compiler that the value at these memory addresses can change unexpectedly (by the hardware itself) and that it should not optimize away any reads or writes to these locations.

## Practice Task

Imagine you are working with a different microcontroller. Its documentation states:

*   A **Control Register** for a peripheral is at address `0x50001000`.
*   Bit 3 of this register, when set to `1`, enables the peripheral.
*   A **Status Register** for the same peripheral is at address `0x50001004`. Bit 0 of this register is `1` when the peripheral is busy.

Write down (in pseudocode or C) how you would:
1.  Enable this peripheral.
2.  Check if the peripheral is busy.

## Self-Check Questions

1.  What is the core idea behind Memory-Mapped I/O?
2.  Why is the `volatile` keyword important when accessing memory-mapped registers in C?
3.  If a hardware register is at address `0x80000000`, how would you declare a pointer to it in C that can be used for reading and writing 32-bit values?

## Supports

- [[skills/hardware-embedded/electronics-embedded/input-output-interfacing/microskills/memory-mapped-i-o-concept|Memory-Mapped I/O Concept]]
- [[skills/programming/programming-languages/bare-metal-c-programming/microskills/memory-mapped-i-o-concept|Memory-Mapped I/O Concept]]
