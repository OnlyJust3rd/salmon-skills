---
type: "medium"
title: "Applying Number Formats in Arithmetic"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/application-of-number-formats|application-of-number-formats]]"
learning-time-in-minutes: 4
---
# Applying Number Formats in Arithmetic

This lesson focuses on how to use different number representation formats to perform arithmetic operations, a core skill in understanding computer arithmetic. We'll explore how signed integers and floating-point numbers are handled in calculations.

## Understanding the Challenge

Computers represent numbers in binary. However, the way they handle negative numbers and fractional values significantly impacts arithmetic. Understanding these representations allows us to predict outcomes and avoid common errors.

## Signed Integer Arithmetic

Computers commonly use **two's complement** to represent signed integers. This method makes addition and subtraction straightforward, as the same hardware can often be used for both signed and unsigned operations.

### Key Concepts in Two's Complement

*   **Most Significant Bit (MSB):** The leftmost bit indicates the sign (0 for positive, 1 for negative).
*   **Range:** For an $n$-bit system, the range of representable numbers is from $-2^{n-1}$ to $2^{n-1} - 1$.

### Addition and Subtraction

Addition in two's complement is the same as unsigned binary addition. Any overflow beyond the most significant bit is discarded.

Subtraction ($A - B$) is performed by adding the two's complement of the subtrahend ($B$) to the minuend ($A$). That is, $A - B = A + (\text{two's complement of } B)$.

**Example: 8-bit System**

Let's add 5 and -3.

*   5 in 8-bit binary: `0000 0101`
*   -3 in 8-bit two's complement:
    1.  3 in binary: `0000 0011`
    2.  Invert bits (one's complement): `1111 1100`
    3.  Add 1: `1111 1101`

Now, let's add `0000 0101` and `1111 1101`:

```
  0000 0101  (5)
+ 1111 1101  (-3)
-----------
1 0000 0010
```

The leading `1` is an overflow bit and is discarded. The result is `0000 0010`, which is 2 in decimal. This is correct ($5 + (-3) = 2$).

**Example: Subtraction**

Let's calculate 7 - 4.

*   7 in 8-bit binary: `0000 0111`
*   -4 in 8-bit two's complement:
    1.  4 in binary: `0000 0100`
    2.  Invert bits: `1111 1011`
    3.  Add 1: `1111 1100`

Now, add 7 and the two's complement of 4:

```
  0000 0111  (7)
+ 1111 1100  (-4)
-----------
1 0000 0011
```

Discarding the overflow bit, we get `0000 0011`, which is 3 in decimal. This is correct ($7 - 4 = 3$).

### Potential Pitfalls

*   **Overflow:** When the result of an addition (or subtraction) falls outside the representable range for the given number of bits, overflow occurs. This can lead to unexpected results. For example, in an 8-bit system, adding 100 and 100 would result in a negative number due to overflow.

## Floating-Point Arithmetic

Floating-point numbers (like `float` and `double` in many programming languages) represent a wide range of values, including very large and very small numbers, as well as fractions. They are typically represented using the IEEE 754 standard.

A floating-point number is generally represented as:

$$ \text{Sign} \times \text{Mantissa} \times \text{Base}^{\text{Exponent}} $$

### Key Concepts in Floating-Point Representation

*   **Sign Bit:** Determines if the number is positive or negative.
*   **Exponent:** Determines the magnitude of the number.
*   **Mantissa (or Significand):** Represents the precision of the number.

### Arithmetic Operations

Floating-point arithmetic involves more complex operations than integer arithmetic. Addition, subtraction, multiplication, and division require aligning exponents, performing operations on mantissas, and then re-normalizing the result.

**Example: Addition (Conceptual)**

To add $1.23 \times 10^2$ and $4.56 \times 10^1$:

1.  **Align Exponents:** The exponent of the second number needs to match the first. So, $4.56 \times 10^1$ becomes $0.456 \times 10^2$.
2.  **Add Mantissas:** $1.23 + 0.456 = 1.686$.
3.  **Combine:** The result is $1.686 \times 10^2$.
4.  **Normalize (if necessary):** In this case, the result is already normalized.

### Potential Pitfalls

*   **Precision Loss:** Due to the finite number of bits used to represent the mantissa, some numbers cannot be represented exactly. This can lead to small inaccuracies. For example, $0.1$ cannot be represented perfectly in binary floating-point.
*   **Rounding Errors:** Operations can introduce rounding errors, which can accumulate over many calculations.
*   **Denormalized Numbers:** Very small numbers can be represented using denormalized formats, which have special handling.
*   **Special Values:** Floating-point formats also include representations for infinity ($+\infty$, $-\infty$) and Not-a-Number (NaN) for cases like division by zero or the square root of a negative number. Arithmetic involving these values has specific rules.

## Practice Scenarios

1.  **Signed Integer Addition:** In a 16-bit system, what is the result of adding $-50$ and $75$? What if you add $40000$ and $40000$?
2.  **Floating-Point Comparison:** Is it always safe to compare two floating-point numbers for exact equality? Why or why not?
3.  **Mixed Operations:** Consider a scenario where you have a loop that repeatedly adds a small value to a running total. What kind of issues might you encounter if the total is stored as a floating-point number?

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/application-of-number-formats|Application of Number Formats]]
