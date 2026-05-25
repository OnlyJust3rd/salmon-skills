---
type: "medium"
title: "Computer Arithmetic Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/computer-arithmetic-principles|computer-arithmetic-principles]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/number-representation/number-representation|number-representation]]"
learning-time-in-minutes: 3
---
# Computer Arithmetic Principles

Computers perform calculations using binary numbers (0s and 1s). Understanding the fundamental principles behind how computers perform arithmetic operations is key to grasping number representation. This lesson focuses on the core concepts of computer arithmetic.

## How Computers Represent Numbers

Before diving into operations, it's important to remember that computers work with binary. This means all numbers, whether they appear as integers or decimals to us, are ultimately stored and manipulated as sequences of 0s and 1s.

*   **Integers:** Represented using fixed-point or floating-point formats. For simplicity, we'll focus on fixed-point for basic operations.
*   **Floating-Point:** Used for representing real numbers (numbers with decimal points) and a wider range of values. This involves a mantissa and an exponent, which adds complexity to direct arithmetic manipulation.

## Basic Arithmetic Operations

Computers use circuits called "adders" to perform arithmetic. These circuits are designed to work directly with the binary representations of numbers.

### Addition

Binary addition follows simple rules:

*   0 + 0 = 0
*   0 + 1 = 1
*   1 + 0 = 1
*   1 + 1 = 0, with a carry-over of 1

Let's see an example:

Imagine adding 5 and 3 in binary.
5 in binary is `0101`.
3 in binary is `0011`.

```
  0101  (5)
+ 0011  (3)
------
  1000  (8)
```

**Step-by-step:**

1.  **Rightmost bit:** 1 + 1 = 0 with a carry of 1.
2.  **Next bit:** 0 + 1 + (carry 1) = 0 with a carry of 1.
3.  **Next bit:** 1 + 0 + (carry 1) = 0 with a carry of 1.
4.  **Leftmost bit:** 0 + 0 + (carry 1) = 1.

The result is `1000`, which is 8 in decimal.

### Subtraction

Subtraction in computers is typically performed using a technique called **two's complement**. This allows subtraction to be implemented using addition circuits, simplifying hardware design.

**Two's Complement:**

To find the two's complement of a binary number:
1.  Invert all the bits (0 becomes 1, 1 becomes 0). This is called the one's complement.
2.  Add 1 to the result.

**Example:** Subtract 3 from 5.

First, find the two's complement of 3 (`0011`):
1.  Invert bits: `1100`
2.  Add 1: `1100 + 1 = 1101`

Now, add 5 (`0101`) and the two's complement of 3 (`1101`):

```
  0101  (5)
+ 1101  (-3)
------
1 0010  (Result, ignoring the overflow bit)
```

The result is `0010`, which is 2 in decimal. The leading `1` (the overflow bit) is discarded.

### Multiplication

Binary multiplication is similar to decimal multiplication but simpler because you only ever multiply by 0 or 1. It involves shifting and adding.

**Example:** Multiply 5 by 3.
5 in binary is `0101`.
3 in binary is `0011`.

```
  0101  (5)
x 0011  (3)
------
  0101  (0101 * 1)
 01010  (0101 * 1, shifted left by 1)
000000  (0101 * 0, shifted left by 2)
0000000 (0101 * 0, shifted left by 3)
------
  001111 (15)
```

**Step-by-step:**

1.  Multiply `0101` by the rightmost `1` of `0011`: `0101`.
2.  Multiply `0101` by the next `1` of `0011`, and shift the result one position to the left: `01010`.
3.  Multiply `0101` by the remaining `0`s, shifting further left.
4.  Add all the partial products: `0101 + 01010 = 001111` (which is 15 in decimal).

### Division

Binary division is the most complex of the basic operations. It's similar to long division you learned in school, using repeated subtraction and shifting. Modern processors often use more advanced algorithms for efficiency, but the core idea involves determining how many times the divisor can be subtracted from the dividend.

**Key Takeaway:**

Computers perform arithmetic not by abstract mathematical concepts but by manipulating binary representations using specialized logic circuits. Understanding how addition, subtraction (via two's complement), multiplication, and division are fundamentally implemented at the binary level provides insight into the workings of computer hardware and the limitations or nuances of numerical precision.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/computer-arithmetic-principles|Computer Arithmetic Principles]]
