---
type: "medium"
title: "Overflow Detection in Signed Arithmetic"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/computer-arithmetic/microskills/overflow-detection|overflow-detection]]"
---
# Overflow Detection in Signed Arithmetic

In computer arithmetic, numbers are stored using a fixed number of bits. This limitation means there's a maximum and minimum value a number can represent. When an arithmetic operation results in a value outside this range, **overflow** occurs. This lesson focuses on detecting overflow specifically in **signed fixed-width arithmetic**.

## What is Signed Arithmetic?

Signed arithmetic allows us to represent both positive and negative numbers. A common way to do this is using **two's complement**. In a two's complement system, the most significant bit (MSB) indicates the sign: 0 for positive, 1 for negative.

For an N-bit system, the range of representable numbers in two's complement is from \( -2^{N-1} \) to \( 2^{N-1} - 1 \).

For example, with 8 bits (N=8):
*   The range is \( -2^{8-1} \) to \( 2^{8-1} - 1 \), which is \( -128 \) to \( 127 \).
*   The maximum positive number is \( 01111111_2 \) (127).
*   The minimum negative number is \( 10000000_2 \) (-128).

## Detecting Overflow in Addition

Overflow can happen when adding two numbers. We need to be careful about the signs of the numbers being added.

Here are rules to detect overflow when adding two signed numbers, `a` and `b`, to get `result`:

1.  **Adding two positive numbers:** If `a` and `b` are both positive, and the `result` is negative, overflow has occurred.
2.  **Adding two negative numbers:** If `a` and `b` are both negative, and the `result` is positive, overflow has occurred.
3.  **Adding a positive and a negative number:** Overflow cannot occur in this case. The sum will always be within the representable range.

### Example Scenario

Let's consider an 8-bit signed integer system (range: -128 to 127).

**Operation:** \( 100 + 50 \)

*   100 in 8-bit two's complement: \( 01100100_2 \) (Positive)
*   50 in 8-bit two's complement: \( 00110010_2 \) (Positive)

Adding them:
```
  01100100
+ 00110010
----------
  10010110
```
The result is \( 10010110_2 \). The MSB is 1, indicating a negative number.
The actual sum is \( 100 + 50 = 150 \). Since 150 is outside the range of -128 to 127, this is an **overflow**. This matches rule 1: both operands were positive, and the result is negative.

**Operation:** \( -100 + (-50) \)

*   -100 in 8-bit two's complement: \( 10011100_2 \) (Negative)
*   -50 in 8-bit two's complement: \( 11001110_2 \) (Negative)

Adding them:
```
  10011100
+ 11001110
----------
 101101010
```
Ignoring the carry-out bit (which is common in fixed-width arithmetic), the 8-bit result is \( 01101010_2 \). The MSB is 0, indicating a positive number.
The actual sum is \( -100 + (-50) = -150 \). Since -150 is outside the range of -128 to 127, this is an **overflow**. This matches rule 2: both operands were negative, and the result is positive.

**Operation:** \( 100 + (-50) \)

*   100 in 8-bit two's complement: \( 01100100_2 \) (Positive)
*   -50 in 8-bit two's complement: \( 11001110_2 \) (Negative)

Adding them:
```
  01100100
+ 11001110
----------
 100110010
```
Ignoring the carry-out bit, the 8-bit result is \( 00110010_2 \), which is 50.
The actual sum is \( 100 + (-50) = 50 \). This is within the range, and no overflow occurred. This matches rule 3.

## Practice Task

Consider a 4-bit signed integer system. The range of representable numbers is \( -2^{4-1} \) to \( 2^{4-1} - 1 \), which is -8 to 7.

Perform the following additions and determine if overflow occurs. Show your work in 4-bit two's complement.

1.  \( 5 + 3 \)
2.  \( -6 + (-3) \)
3.  \( 7 + (-2) \)
4.  \( -7 + 1 \)

## Self-Check Questions

1.  What is the range of representable numbers for a 5-bit signed integer using two's complement?
2.  When adding two positive signed numbers, what indicates that an overflow has occurred?
3.  When adding two negative signed numbers, what indicates that an overflow has occurred?
4.  Can overflow occur when adding a positive and a negative signed number? Explain why or why not.

## Supports

- [[skills/hardware-embedded/electronics-embedded/computer-arithmetic/microskills/overflow-detection|Overflow Detection]]
