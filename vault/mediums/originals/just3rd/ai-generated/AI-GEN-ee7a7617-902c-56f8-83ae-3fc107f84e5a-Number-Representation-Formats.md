---
type: "medium"
title: "Number Representation Formats"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/number-representation-formats|number-representation-formats]]"
learning-time-in-minutes: 5
---
# Number Representation Formats

Computers don't understand numbers the way humans do. They work with electrical signals that can be either on or off, represented as 0s and 1s. This fundamental concept leads to different ways of representing numbers within a computer, and understanding these formats is crucial for comprehending how computers perform calculations.

## What are Number Representation Formats?

Number representation formats are the specific methods or systems computers use to store and manipulate numerical values. These formats dictate how a sequence of binary digits (bits) is interpreted as a particular number. The primary goal is to translate human-readable numbers into a binary form that the computer can process and then translate the results back into a human-understandable format.

## Key Number Representation Formats

Let's explore some of the most common formats:

### 1. Unsigned Integers

This is the simplest form of representing whole numbers. In an unsigned integer format, all bits are used to represent the magnitude of the number.

*   **How it works:** A sequence of bits directly represents a non-negative integer. For example, with 4 bits, the binary sequence `1011` represents the decimal number 11.
*   **Range:** For an $n$-bit unsigned integer, the range of representable numbers is from 0 to $2^n - 1$.
    *   For 4 bits: 0 to $2^4 - 1 = 15$.
    *   For 8 bits: 0 to $2^8 - 1 = 255$.
*   **Example:**
    *   Binary `0101` (4 bits) = Decimal 5
    *   Binary `1111` (4 bits) = Decimal 15

### 2. Signed Integers

To represent both positive and negative numbers, computers use signed integer formats. There are a few common ways to do this, but the most prevalent is **Two's Complement**.

#### a) Two's Complement

This is the standard way to represent signed integers in most modern computers. It has advantages for arithmetic operations, making addition and subtraction straightforward.

*   **How it works:**
    *   The most significant bit (the leftmost bit) indicates the sign: 0 for positive, 1 for negative.
    *   Positive numbers are represented the same way as unsigned integers.
    *   Negative numbers are represented by taking the two's complement of their positive counterpart. This involves two steps:
        1.  **One's Complement:** Invert all the bits (change 0s to 1s and 1s to 0s).
        2.  **Add 1:** Add 1 to the result of the one's complement.
*   **Range:** For an $n$-bit two's complement integer, the range is from $-2^{n-1}$ to $2^{n-1} - 1$.
    *   For 4 bits: $-2^{4-1} = -8$ to $2^{4-1} - 1 = 7$.
    *   For 8 bits: $-2^{8-1} = -128$ to $2^{8-1} - 1 = 127$.
*   **Example (4 bits):**
    *   Decimal 5: `0101` (positive, so same as unsigned)
    *   Decimal -5:
        1.  Positive 5: `0101`
        2.  One's Complement: `1010`
        3.  Add 1: `1011` (This is -5 in 4-bit two's complement)
    *   Decimal -8:
        1.  Positive 8 (not representable in 4-bit signed): Let's consider 8-bit for this.
    *   Decimal -128 (8 bits):
        1.  Positive 128 (not representable in 8-bit signed). Ah, wait. -128 is the most negative number. How is it represented?
        2.  Let's find the representation of -128 using the pattern. The smallest negative number in $n$-bits is always $-(2^{n-1})$. So for 8 bits, it's $-2^7 = -128$. Its representation is $10000000$.
        3.  Let's verify: if we try to find the negative of 128 (which is $10000000$ in unsigned), we would invert it to $01111111$ and add 1 to get $10000000$. This process is a bit circular for the most negative number. The rule is that for $n$-bits, $100...0$ (with $n-1$ zeros) represents $-2^{n-1}$.

### 3. Floating-Point Numbers

While integers represent whole numbers, floating-point numbers are used to represent real numbers (numbers with fractional parts), including very large and very small numbers. They are often approximations due to the limitations of binary representation. The most common standard is **IEEE 754**.

*   **How it works:** Floating-point numbers are typically represented in three parts:
    1.  **Sign Bit:** (1 bit) 0 for positive, 1 for negative.
    2.  **Exponent:** (A fixed number of bits) Represents the magnitude of the number. It's usually stored in a biased format.
    3.  **Mantissa (or Significand):** (A fixed number of bits) Represents the significant digits of the number. It's usually normalized, meaning it has a leading '1' that is implicitly understood and not stored.
*   **Formula:** The value of a floating-point number is often approximated by: $$ \text{Value} = (-1)^{\text{sign}} \times (\text{mantissa}) \times 2^{\text{exponent} - \text{bias}} $$
*   **Example (Conceptual):** Imagine a simplified 8-bit floating-point number: 1 sign bit, 3 exponent bits, 4 mantissa bits.
    *   To represent 12.5:
        1.  Convert to binary: $1100.1_2$
        2.  Normalize: $1.1001_2 \times 2^3$
        3.  Sign: 0 (positive)
        4.  Exponent: The base exponent is 3. Let's say our bias is 3. So the stored exponent is $3 + 3 = 6$. In binary, 6 is `110`.
        5.  Mantissa: The fractional part after normalization is `1001`. Since the leading '1' is implicit, we store `1001`.
        6.  Putting it together (simplified): `0` (sign) `110` (exponent) `1001` (mantissa). This would represent 12.5.

### 4. Binary Coded Decimal (BCD)

BCD is a way of representing decimal numbers where each decimal digit is represented by its own 4-bit binary code.

*   **How it works:** Each decimal digit (0-9) is converted into its 4-bit binary equivalent.
*   **Example:**
    *   Decimal 123:
        *   1 = `0001`
        *   2 = `0010`
        *   3 = `0011`
        *   So, 123 in BCD is `0001 0010 0011`.
*   **Use Cases:** BCD is often used in financial applications and older hardware where direct decimal arithmetic was preferred, as it avoids the conversion complexities of binary for decimal inputs.

## Why are these Formats Important?

Understanding these formats helps us:

*   **Grasp data types:** Different data types in programming languages (like `int`, `float`, `short`) correspond to these underlying representation formats and their sizes.
*   **Understand limitations:** It explains why there are limits to the size of numbers a computer can store and why floating-point numbers can sometimes have precision issues.
*   **Demystify computer arithmetic:** Knowing how numbers are represented is the first step to understanding how computers perform operations like addition, subtraction, multiplication, and division on them.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/number-representation-formats|Number Representation Formats]]
