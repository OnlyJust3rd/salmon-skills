---
type: medium
title: Setting and Clearing Bits with Bitwise Operations
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[bit-set-and-clear-operations|bit-set-and-clear-operations]]"
learning-time-in-minutes: 3
---
# Setting and Clearing Bits with Bitwise Operations

In bare-metal C programming, you'll often need to control individual bits within hardware registers. This allows you to enable or disable specific features of a microcontroller or peripheral. The most fundamental operations for this are setting a bit (turning it ON) and clearing a bit (turning it OFF). We achieve this using bitwise OR and AND operations with specific "masks."

## Why This Matters

When working directly with hardware, registers are essentially collections of bits, each controlling a particular function. For instance, a single byte might control eight different LEDs. To turn on just the third LED, you need to precisely manipulate the third bit without affecting the others.

## The Tools: Bitwise OR and AND

### Setting a Bit (Turning it ON)

To set a specific bit to `1`, you use the bitwise OR operator (`|`). You combine the register's current value with a "mask" where only the target bit is `1` and all other bits are `0`.

If the target bit is already `1`, ORing with `1` keeps it `1`.
If the target bit is `0`, ORing with `1` turns it into `1`.
All other bits, ORed with `0`, remain unchanged.

### Clearing a Bit (Turning it OFF)

To clear a specific bit to `0`, you use the bitwise AND operator (`&`). You combine the register's current value with a "mask" where only the target bit is `0` and all other bits are `1`.

If the target bit is already `0`, ANDing with `0` keeps it `0`.
If the target bit is `1`, ANDing with `0` turns it into `0`.
All other bits, ANDed with `1`, remain unchanged.

## Practical Example: Controlling a GPIO Pin

Imagine a General Purpose Input/Output (GPIO) data register, `GPIODATA`, where bit 5 controls an output pin.

Let's say `GPIODATA` currently has a value of `0b00101000` (decimal 40).

**Scenario 1: Set bit 5 (Turn the pin ON)**

We want to set bit 5.
Our mask will have bit 5 as `1` and others as `0`: `0b00100000` (decimal 32).

```c
uint8_t GPIODATA = 0b00101000;
uint8_t mask_set_bit5 = 0b00100000; // Binary for bit 5 set

GPIODATA = GPIODATA | mask_set_bit5;
// GPIODATA is now 0b00101000 | 0b00100000 = 0b00101000 (decimal 40)
// Wait, that's not right! My mistake in the explanation.
// The mask should ONLY have the target bit set.
// Let's correct the mask and re-run.

// Correct mask for setting bit 5:
uint8_t mask_set_bit5_correct = (1 << 5); // This is 0b00100000 (decimal 32)

GPIODATA = GPIODATA | mask_set_bit5_correct;
// GPIODATA is now 0b00101000 | 0b00100000 = 0b00101000 -> Ah, wait again.
// The initial value *already* had bit 5 set from the example. Let's pick a better initial value.

uint8_t GPIODATA_v2 = 0b00001000; // Decimal 8. Bit 3 is set.
uint8_t mask_set_bit5_correct = (1 << 5); // 0b00100000 (decimal 32)

GPIODATA_v2 = GPIODATA_v2 | mask_set_bit5_correct;
// GPIODATA_v2 is now 0b00001000 | 0b00100000 = 0b00101000 (decimal 40). Bit 5 is now ON.
```

**Scenario 2: Clear bit 3 (Turn the pin OFF)**

Let's use our updated `GPIODATA_v2` value, which is `0b00101000`. We want to clear bit 3.
To clear bit 3, we need a mask with bit 3 as `0` and all others as `1`.
We start with a mask having only bit 3 set: `(1 << 3)` which is `0b00001000`.
Then, we invert this mask using the bitwise NOT operator (`~`): `~(1 << 3)` which is `0b11110111`.

```c
uint8_t GPIODATA_v3 = 0b00101000; // Decimal 40. Bits 3 and 5 are set.
uint8_t mask_clear_bit3 = ~(1 << 3); // 0b11110111

GPIODATA_v3 = GPIODATA_v3 & mask_clear_bit3;
// GPIODATA_v3 is now 0b00101000 & 0b11110111 = 0b00100000 (decimal 32). Bit 3 is now OFF.
```

## Practice Task

Consider a control register `CTRL_REG` defined as a `volatile uint16_t`. Bit 0 controls an enable flag, and bit 7 controls a reset flag.

1.  Write C code to **set** bit 0 of `CTRL_REG`.
2.  Write C code to **clear** bit 7 of `CTRL_REG`.
3.  If `CTRL_REG` is `0x0081` (binary `0b10000001`), what will its value be after setting bit 0 and then clearing bit 7?

## Self-Check Questions

1.  What is the purpose of a bitmask in bitwise operations?
2.  Which bitwise operator do you use to *set* a bit?
3.  Which bitwise operator do you use to *clear* a bit?
4.  How do you create a mask to clear a specific bit?

## Supports

- [[bit-set-and-clear-operations|Bit Set and Clear Operations]]
