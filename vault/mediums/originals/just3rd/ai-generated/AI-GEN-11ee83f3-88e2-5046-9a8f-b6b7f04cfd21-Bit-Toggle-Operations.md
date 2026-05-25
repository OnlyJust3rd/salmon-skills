---
type: medium
title: Toggling Register Bits with XOR
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[bit-toggle-operations|bit-toggle-operations]]"
learning-time-in-minutes: 2
---
# Toggling Register Bits with XOR

In bare-metal C programming, interacting directly with hardware often involves manipulating specific bits within hardware registers. While setting and clearing bits are common operations, sometimes you need to *toggle* a bit – changing it from 0 to 1, or from 1 to 0. The bitwise XOR operator (`^`) is the perfect tool for this job.

## The Power of XOR for Toggling

The XOR operator works on a bit-by-bit basis. When two bits are XORed:
*   `0 ^ 0 = 0`
*   `0 ^ 1 = 1`
*   `1 ^ 0 = 1`
*   `1 ^ 1 = 0`

Notice the key property:
*   XORing a bit with `0` leaves the bit unchanged.
*   XORing a bit with `1` flips (toggles) the bit.

This makes XOR ideal for toggling. To toggle a specific bit in a register, you XOR the entire register with a "mask" that has a `1` at the bit position you want to toggle, and `0`s everywhere else.

## Practical Example: Toggling an LED

Imagine you have a hardware register, say `GPIO_PORTA_DATA`, which controls the state of pins on a microcontroller. Let's assume pin 5 (bit 5) is connected to an LED. You want to toggle this LED.

First, define the base address of your hardware register. (Note: This is a conceptual address; actual addresses vary by microcontroller).

```c
#define GPIO_PORTA_DATA *((volatile unsigned int*)0x40020000)
```

Now, let's define a mask for bit 5. We want a number with only the 5th bit set to 1.

```c
#define LED_PIN_5 (1 << 5) // This creates a value like 0b00100000
```

To toggle the LED connected to pin 5:

```c
// Toggle the LED state
GPIO_PORTA_DATA = GPIO_PORTA_DATA ^ LED_PIN_5;
```

Each time this line of code is executed, the 5th bit of `GPIO_PORTA_DATA` will flip. If it was 0, it becomes 1 (LED turns ON). If it was 1, it becomes 0 (LED turns OFF).

**Important:** The `volatile` keyword is crucial here. It tells the compiler that the value of `GPIO_PORTA_DATA` can change unexpectedly (e.g., by hardware or interrupts) and that it should not optimize away reads or writes to this variable.

## Practice Task

Suppose you have another register, `CONTROL_REG`, and you want to toggle bits 3 and 7 simultaneously.

1.  Define a suitable mask for bits 3 and 7.
2.  Write the C code to toggle these two bits in `CONTROL_REG`. Assume `CONTROL_REG` is a `volatile unsigned char`.

## Self-Check Questions

1.  What is the primary bitwise operator used to toggle a bit?
2.  Why is it important to use a mask with a `1` only at the desired bit position when toggling?
3.  Explain the role of the `volatile` keyword in the context of hardware register manipulation.
4.  If a register bit is currently `0`, what will happen if you XOR it with `1`? What if it's `1`?

## Supports

- [[bit-toggle-operations|Bit Toggle Operations]]
