---
type: medium
title: The Read-Modify-Write Pattern for Register Manipulation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[read-modify-write-pattern|read-modify-write-pattern]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-programming/bare-metal-c-programming/bare-metal-c-programming|bare-metal-c-programming]]"
learning-time-in-minutes: 3
---
# The Read-Modify-Write Pattern for Register Manipulation

When programming bare-metal systems, you'll often interact directly with hardware registers. These are special memory locations that control device behavior. A common task is to change just *one* bit within a register without altering any other bits. This is where the **Read-Modify-Write** pattern becomes essential.

## What is Read-Modify-Write?

This pattern involves three distinct steps:

1.  **Read:** Fetch the current value of the hardware register into a CPU variable.
2.  **Modify:** Perform bitwise operations on this CPU variable to change the specific bit(s) you need. Crucially, you must ensure other bits remain unaffected.
3.  **Write:** Store the modified value back into the hardware register.

This ensures that only the intended bits are changed, and any existing settings for other bits are preserved.

## Why is it Important?

Imagine a register with multiple control bits. If you simply write a new value directly to the register, you might inadvertently turn off other important settings. For example, consider a register where bit 0 is "Enable Interrupts" and bit 1 is "Power Save Mode." If you wanted to turn *on* "Enable Interrupts" (bit 0) but the "Power Save Mode" (bit 1) was already on, a direct write would turn off bit 1 if you only set bit 0. Read-Modify-Write prevents this by working with a copy.

## Practical Example: Toggling an LED

Let's say you have a GPIO (General Purpose Input/Output) register, `GPIODATA`, where bit 3 controls an LED. You want to turn the LED *on* without affecting any other pins configured through this register.

Suppose the current value of `GPIODATA` is `0b00000100` (decimal 4). This means bit 2 is set. You want to set bit 3 (the LED).

1.  **Read:**
    `unsigned int current_value = GPIODATA;`
    `current_value` is now `0b00000100`.

2.  **Modify:**
    To set bit 3, we use the bitwise OR operator (`|`) with a mask that has only bit 3 set. The mask for bit 3 is `(1 << 3)`, which is `0b00001000`.
    `unsigned int new_value = current_value | (1 << 3);`
    `new_value` becomes `0b00000100 | 0b00001000`, which results in `0b00001100` (decimal 12). Notice how bit 2 remains set.

3.  **Write:**
    `GPIODATA = new_value;`
    The `GPIODATA` register now holds `0b00001100`, and the LED (controlled by bit 3) is on, while the setting for bit 2 is untouched.

## The `volatile` Keyword

When dealing with hardware registers, it's crucial to declare your register variables with the `volatile` keyword.

```c
volatile unsigned int GPIODATA;
```

The `volatile` keyword tells the compiler that the value of this variable can change at any time, outside the normal control flow of the program (e.g., by hardware or an interrupt). This prevents the compiler from making optimizations that might assume the variable's value remains constant, ensuring that every read and write operation to the register is actually performed.

## Practice Task

Consider a peripheral status register `PERIPH_STATUS` where bit 0 indicates if a device is busy, and bit 1 indicates if an error has occurred. Write a C code snippet to check if the device is busy *and* an error has occurred, without altering any other bits in the `PERIPH_STATUS` register.

## Self-Check Questions

1.  What are the three steps involved in the Read-Modify-Write pattern?
2.  Why is it important to use bitwise operators (like `&`, `|`, `^`) when modifying specific bits within a register?
3.  What problem does the `volatile` keyword solve in bare-metal C programming for hardware registers?

## Supports

- [[read-modify-write-pattern|Read-Modify-Write Pattern]]
