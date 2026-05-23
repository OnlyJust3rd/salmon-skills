---
type: "medium"
title: "Understanding the `volatile` Keyword in Bare-metal C"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-programming/bare-metal-c-programming/microskills/volatile-variable-declaration|volatile-variable-declaration]]"
learning-time-in-minutes: 3
---
# Understanding the `volatile` Keyword in Bare-metal C

When working with hardware registers or variables that can be modified outside the normal flow of your C program (like by an interrupt service routine - ISR), you need to tell the compiler that these variables can change unexpectedly. This is where the `volatile` keyword comes in.

The `volatile` keyword is a type qualifier, similar to `const`. It tells the compiler that the value of a variable may change at any time without any action on the part of the code the compiler knows about. This prevents the compiler from performing certain optimizations that might otherwise be performed on regular variables.

## Why `volatile` Matters

Consider a hardware register that controls an LED. If your code reads the LED's status register, the compiler might assume the value won't change and cache it in a CPU register for faster access. However, if an external event (like a button press detected by an interrupt) changes the LED's status, the compiler's cached value would be stale and incorrect. `volatile` forces the compiler to re-read the variable's value from its actual memory location every time it's accessed.

The same applies to variables shared between your main program and ISRs. If an ISR modifies a global flag that your main loop checks, without `volatile`, the compiler might optimize away checks for that flag, assuming it only changes within the main program's control.

## Practical Example: Hardware Register Access

Let's say you're interacting with a General Purpose Input/Output (GPIO) port on a microcontroller. A register at a specific memory address controls whether a pin is an input or output.

```c
// Define the memory address of a hypothetical GPIO port control register
#define GPIO_PORTA_DIR_REG (*(volatile unsigned int *)0x40020000)

int main() {
    // Configure pin 5 of Port A as an output
    // This assumes other bits in the register are handled correctly
    GPIO_PORTA_DIR_REG |= (1 << 5); // Set the 5th bit to 1 for output

    // Later in your code, you might read this register to check configuration
    // The 'volatile' keyword ensures this read fetches the actual current value
    if (GPIO_PORTA_DIR_REG & (1 << 5)) {
        // Pin 5 is configured as output
    }

    return 0;
}
```

In this example, `volatile unsigned int *` tells the compiler that `GPIO_PORTA_DIR_REG` points to a memory location whose value can change unexpectedly. The `*` dereferences this pointer, so `GPIO_PORTA_DIR_REG` itself represents the value at that memory address.

## Practice Task

Imagine you have a global flag `system_ready` that is set to `0` initially. An interrupt service routine (ISR) for a timer event will set this flag to `1` when the system is ready. Your main program continuously checks this flag in a loop.

Declare the `system_ready` flag correctly in your C code to ensure the compiler doesn't optimize away checks for it.

## Self-Check Questions

1.  What is the primary purpose of the `volatile` keyword?
2.  Under what two main circumstances is it crucial to declare a variable as `volatile` in bare-metal C programming?
3.  If you forget to declare a hardware register access as `volatile`, what potential problem might occur due to compiler optimizations?

## Supports

- [[skills/computing/hardware-embedded/embedded-programming/bare-metal-c-programming/microskills/volatile-variable-declaration|Volatile Variable Declaration]]
