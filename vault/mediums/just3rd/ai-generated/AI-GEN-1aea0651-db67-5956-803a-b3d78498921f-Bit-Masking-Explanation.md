---
type: "medium"
title: "Bit Masking: Controlling Individual Bits"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/bare-metal-c-programming/microskills/bit-masking-explanation|bit-masking-explanation]]"
---
# Bit Masking: Controlling Individual Bits

In bare-metal C programming, we often interact directly with hardware registers. These registers are essentially collections of bits, each controlling a specific hardware function. To manage these individual bits effectively without affecting others, we use a technique called **bit masking**.

Bit masking involves using bitwise logical operations (`AND`, `OR`, `XOR`) with specific bit patterns (masks) to set, clear, or toggle individual bits within a register.

### Setting Bits

To **set** a specific bit (turn it ON to 1), we use the bitwise `OR` operation. We create a mask with a `1` at the position of the bit we want to set and `0`s elsewhere. When `OR`ed with the original register value, this `1` will force the target bit to `1` while leaving other bits unchanged.

For example, to set bit 3 (remembering bits are numbered from 0):

```c
unsigned char register_value = 0b00101001; // Binary representation
unsigned char mask = 0b00001000;          // Mask to set bit 3

register_value = register_value | mask;   // Result: 0b00101001 | 0b00001000 = 0b00101001
```

### Clearing Bits

To **clear** a specific bit (turn it OFF to 0), we use the bitwise `AND` operation. We create a mask with a `0` at the position of the bit we want to clear and `1`s elsewhere. When `AND`ed with the original register value, this `0` will force the target bit to `0` while leaving other bits unchanged.

For example, to clear bit 5:

```c
unsigned char register_value = 0b11010011;
unsigned char mask = 0b10111111;          // Mask to clear bit 5 (inverted bit 5)

register_value = register_value & mask;   // Result: 0b11010011 & 0b10111111 = 0b10010011
```

A common way to create the clearing mask is to take the bit you want to clear, set it to `1`, and then invert all bits using the bitwise `NOT` operator (`~`).

### Toggling Bits

To **toggle** a specific bit (flip it from 0 to 1 or 1 to 0), we use the bitwise `XOR` operation. We create a mask with a `1` at the position of the bit we want to toggle and `0`s elsewhere.
*   If the target bit is `0`, `0 XOR 1` becomes `1`.
*   If the target bit is `1`, `1 XOR 1` becomes `0`.

For example, to toggle bit 2:

```c
unsigned char register_value = 0b10110100;
unsigned char mask = 0b00000100;          // Mask to toggle bit 2

register_value = register_value ^ mask;   // Result: 0b10110100 ^ 0b00000100 = 0b10110000
```

### Practical Scenario

Imagine you're controlling an LED connected to a microcontroller's General Purpose Input/Output (GPIO) pin. Let's say the LED is controlled by bit 0 of an output data register called `PORTA_DATA`.

*   To turn the LED **ON**: You would `OR` `PORTA_DATA` with `0b00000001`.
*   To turn the LED **OFF**: You would `AND` `PORTA_DATA` with `0b11111110`.

### Practice Task

Consider a status register `STATUS_REG`.

1.  If `STATUS_REG` is `0b10100110`, write the C code to:
    *   Set bit 3.
    *   Clear bit 1.
    *   Toggle bit 7.

### Self-Check Questions

1.  Which bitwise operator is used to *set* a bit?
2.  How do you create a mask to *clear* a specific bit?
3.  What is the result of `0b11001010 XOR 0b00010000`?

## Supports

- [[skills/programming/programming-languages/bare-metal-c-programming/microskills/bit-masking-explanation|Bit Masking Explanation]]
