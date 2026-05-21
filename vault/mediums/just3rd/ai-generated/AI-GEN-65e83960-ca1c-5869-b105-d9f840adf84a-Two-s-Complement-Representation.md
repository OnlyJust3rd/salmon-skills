---
type: "medium"
title: "Understanding Two's Complement Representation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/number-representation/microskills/two-s-complement-representation|two-s-complement-representation]]"
---
# Understanding Two's Complement Representation

In the world of computers, numbers aren't always stored as we see them with positive and negative signs. For efficient arithmetic, especially addition and subtraction, computers use a clever system called **two's complement** to represent signed integers (numbers with a sign). This method is fundamental to how computers handle arithmetic operations.

### What is Two's Complement?

Two's complement is a way to represent both positive and negative numbers using a fixed number of bits. The most significant bit (the leftmost bit) acts as the sign bit:

*   **0** indicates a positive number.
*   **1** indicates a negative number.

This system is designed to simplify the circuitry needed for arithmetic operations, allowing the same hardware to perform both addition and subtraction.

### How to Find the Two's Complement of a Negative Number

Let's say you want to represent a negative number, like -5, using 8 bits.

**Step 1: Find the binary representation of the absolute value.**
The absolute value of -5 is 5. In 8-bit binary, 5 is represented as:
`0000 0101`

**Step 2: Invert all the bits (one's complement).**
Flip every 0 to a 1 and every 1 to a 0.
`0000 0101` becomes `1111 1010`

**Step 3: Add 1 to the result.**
Add 1 to the inverted binary number.
`1111 1010` + `1` = `1111 1011`

So, **`1111 1011`** is the two's complement representation of -5 in 8 bits.

### Representing Positive Numbers

Representing positive numbers in two's complement is straightforward. You simply use their standard binary representation, ensuring that the most significant bit is 0.

For example, in 8 bits:
*   5 is `0000 0101`
*   10 is `0000 1010`

### Range of Numbers

With a fixed number of bits, two's complement has a specific range of numbers it can represent. For an N-bit system, the range is from $$ -(2^{N-1}) $$ to $$ 2^{N-1} - 1 $$.

For an 8-bit system (N=8):
*   The range is from $$ -(2^{8-1}) $$ to $$ 2^{8-1} - 1 $$
*   Which is $$ -(2^7) $$ to $$ 2^7 - 1 $$
*   This means -128 to 127.

Let's check:
*   The largest positive number in 8 bits is `0111 1111`, which is 127.
*   The smallest negative number (most negative) is `1000 0000`. Let's see what this represents. To find its decimal value, we can reverse the process:
    1.  Subtract 1: `1000 0000` -> `0111 1111`
    2.  Invert the bits: `0111 1111` -> `1000 0000`
    3.  The original value was negative, so it's -(binary value of `1000 0000`).
    4.  `1000 0000` in binary is $$ 2^7 = 128 $$.
    5.  Therefore, `1000 0000` represents -128.

### Why Two's Complement is Important for Arithmetic

The beauty of two's complement is that addition and subtraction can be performed using the same hardware (an adder circuit).

**Example: Adding a Positive and a Negative Number**

Let's add 5 + (-3) using 8-bit two's complement.

1.  **5 in 8-bit two's complement:** `0000 0101`
2.  **-3 in 8-bit two's complement:**
    *   Absolute value of 3 is `0000 0011`
    *   Invert: `1111 1100`
    *   Add 1: `1111 1101`

3.  **Perform binary addition:**
    ```
      0000 0101  (5)
    + 1111 1101  (-3)
    -----------
      10000 0010
    ```

Notice the ninth bit (the leftmost `1` that "overflowed"). In a fixed 8-bit system, this ninth bit is discarded.

The result is `0000 0010`, which is **2** in decimal. This is the correct answer for 5 + (-3).

**Example: Subtracting Numbers (e.g., 5 - 3)**

Subtraction is implemented as adding the negative. So, 5 - 3 becomes 5 + (-3). We just did this!

If we wanted to calculate 3 - 5:
This is 3 + (-5).

1.  **3 in 8-bit two's complement:** `0000 0011`
2.  **-5 in 8-bit two's complement:** `1111 1011` (from earlier)

3.  **Perform binary addition:**
    ```
      0000 0011  (3)
    + 1111 1011  (-5)
    -----------
      1111 1110
    ```

The result is `1111 1110`. Let's verify this is -2:
1.  Invert: `0000 0001`
2.  Add 1: `0000 0010`
3.  The original was negative, so it's -(binary value of `0000 0010`), which is -2.

### Common Pitfalls

*   **Overflow:** If the result of an addition or subtraction exceeds the representable range for the given number of bits, an overflow occurs. This can lead to incorrect results. For example, in 8-bit two's complement, trying to represent 128 would overflow.
*   **Forgetting to add 1:** A common mistake when calculating the two's complement of a negative number is to forget the final "add 1" step.
*   **Incorrect bit inversion:** Ensure you flip *every* bit.

Understanding two's complement is a crucial step in grasping how computers perform arithmetic and represent numbers internally. It's a clever solution that balances representation power with computational efficiency.

## Supports

- [[skills/hardware-embedded/electronics-embedded/number-representation/microskills/two-s-complement-representation|Two's Complement Representation]]
