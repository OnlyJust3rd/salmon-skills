---
type: "medium"
title: "Understanding Sign-Magnitude Representation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/sign-magnitude-representation|sign-magnitude-representation]]"
learning-time-in-minutes: 4
---
# Understanding Sign-Magnitude Representation

This lesson explores one method computers use to represent numbers that can be positive or negative: the **Sign-Magnitude Representation**. Understanding how computers handle signed numbers is fundamental to grasping how they perform arithmetic operations.

## What is Sign-Magnitude Representation?

In the real world, we often use a minus sign (-) to indicate a negative number and no sign (or sometimes a plus sign (+)) to indicate a positive number. Sign-magnitude representation is a direct translation of this concept into the binary world of computers.

The core idea is to dedicate one bit (a binary digit, either 0 or 1) to represent the **sign** of the number, and the remaining bits to represent its **magnitude** (the absolute value of the number).

### The Sign Bit

*   **0**: Typically represents a positive number.
*   **1**: Typically represents a negative number.

### The Magnitude Bits

These bits store the actual value of the number, just as if it were a positive number.

### How it Works: An Example

Let's consider an 8-bit system for simplicity. This means we have 8 positions to store bits.

In sign-magnitude:
*   The leftmost bit is the **sign bit**.
*   The remaining 7 bits represent the **magnitude**.

**Example 1: Representing +5**

*   **Sign:** Positive, so the sign bit is **0**.
*   **Magnitude:** The absolute value of 5 is 5. In binary, 5 is `101`. We need to fill the remaining 7 bits with this magnitude. To make it 7 bits, we pad with leading zeros: `0000101`.
*   **Putting it together:** The sign bit (0) followed by the magnitude bits (0000101) gives us:
    `00000101`

**Example 2: Representing -5**

*   **Sign:** Negative, so the sign bit is **1**.
*   **Magnitude:** The absolute value of 5 is 5. In binary, 5 is `101`. Again, we pad to 7 bits: `0000101`.
*   **Putting it together:** The sign bit (1) followed by the magnitude bits (0000101) gives us:
    `10000101`

**Example 3: Representing +127**

*   **Sign:** Positive, so the sign bit is **0**.
*   **Magnitude:** The largest value we can represent with 7 bits is $$2^7 - 1 = 128 - 1 = 127$$. The binary representation of 127 is `1111111`.
*   **Putting it together:** The sign bit (0) followed by the magnitude bits (1111111) gives us:
    `01111111`

**Example 4: Representing -127**

*   **Sign:** Negative, so the sign bit is **1**.
*   **Magnitude:** The magnitude is 127, which is `1111111` in 7 bits.
*   **Putting it together:** The sign bit (1) followed by the magnitude bits (1111111) gives us:
    `11111111`

### Range of Values

For an N-bit sign-magnitude system:
*   1 bit is used for the sign.
*   $$N-1$$ bits are used for the magnitude.

The largest positive number is when the sign bit is 0 and all magnitude bits are 1. This value is $$2^{(N-1)} - 1$$.
The smallest (most negative) number is when the sign bit is 1 and all magnitude bits are 1. This value is $$-(2^{(N-1)} - 1)$$.

So, the range of numbers representable in an N-bit sign-magnitude system is from $$-(2^{(N-1)} - 1)$$ to $$+(2^{(N-1)} - 1)$$.

For our 8-bit example ($$N=8$$):
*   Range is from $$-(2^{(8-1)} - 1)$$ to $$+(2^{(8-1)} - 1)$$
*   Range is from $$-(2^7 - 1)$$ to $$+(2^7 - 1)$$
*   Range is from $$-(128 - 1)$$ to $$+(128 - 1)$$
*   Range is from **-127 to +127**.

### A Special Case: Zero

Sign-magnitude representation has a peculiarity: it has **two representations for zero**.

*   **+0**: Sign bit is 0, magnitude is 0 (all magnitude bits are 0). For 8 bits: `00000000`
*   **-0**: Sign bit is 1, magnitude is 0 (all magnitude bits are 0). For 8 bits: `10000000`

While mathematically zero is zero, computers can sometimes distinguish between these two. This can lead to slight complexities in arithmetic operations.

## Key Takeaways

*   Sign-magnitude is a straightforward way to represent signed numbers using a dedicated sign bit and magnitude bits.
*   The sign bit (0 for positive, 1 for negative) determines the number's sign.
*   The remaining bits represent the absolute value of the number.
*   For an N-bit system, the range is typically from $$-(2^{(N-1)} - 1)$$ to $$+(2^{(N-1)} - 1)$$.
*   A notable characteristic is the existence of two representations for zero (+0 and -0).

Understanding this representation is the first step to understanding how computers perform calculations like addition and subtraction on numbers that can be negative.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/sign-magnitude-representation|Sign-Magnitude Representation]]
