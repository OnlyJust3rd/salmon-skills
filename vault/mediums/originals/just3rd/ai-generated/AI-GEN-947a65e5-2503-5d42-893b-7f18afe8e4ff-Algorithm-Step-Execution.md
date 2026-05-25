---
type: "medium"
title: "Executing Adder Algorithm Steps"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/computer-arithmetic/microskills/algorithm-step-execution|algorithm-step-execution]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/computer-arithmetic/computer-arithmetic|computer-arithmetic]]"
learning-time-in-minutes: 3
---
# Executing Adder Algorithm Steps

This lesson focuses on the fundamental steps of how computers add numbers, specifically using the ripple-carry adder, a core concept in computer arithmetic. Understanding these steps is crucial for applying arithmetic algorithms effectively.

## What is a Ripple-Carry Adder?

A ripple-carry adder is a digital circuit that performs binary addition. It works by adding bits column by column, from right to left. For each column, it adds two input bits and a "carry-in" bit from the previous column to produce a sum bit and a "carry-out" bit to the next column. The "carry-out" of one stage "ripples" to become the "carry-in" of the next stage.

## Key Components of a Single-Bit Adder (Full Adder)

To understand the ripple-carry adder, we first need to understand a "full adder." A full adder takes three input bits:
*   A: One bit from the first number.
*   B: One bit from the second number.
*   Cin: The carry-in bit from the previous, less significant bit position.

It produces two output bits:
*   Sum (S): The result bit for the current position.
*   Carry-out (Cout): The carry bit to the next, more significant bit position.

The logic for a full adder is:
*   \(S = A \oplus B \oplus Cin\) (XOR operation)
*   \(Cout = (A \cdot B) + (Cin \cdot (A \oplus B))\) (AND and OR operations)

## Step-by-Step Execution Example: Adding Two 3-Bit Numbers

Let's add the binary numbers `101` and `011` using a 3-bit ripple-carry adder. We'll process them from the least significant bit (LSB) on the right to the most significant bit (MSB) on the left.

**Numbers to add:**
A = `101` (Decimal 5)
B = `011` (Decimal 3)

We'll use three full adders (FA0, FA1, FA2), starting from the rightmost bit.

**Step 1: LSB (Bit 0)**
*   Inputs to FA0: A0 = 1, B0 = 1, Cin0 = 0 (initial carry-in is always 0).
*   Sum (S0): \(1 \oplus 1 \oplus 0 = 0\).
*   Carry-out (Cout0): \((1 \cdot 1) + (0 \cdot (1 \oplus 1)) = 1 + 0 = 1\).
*   Result so far: Sum bit S0 = 0. Carry to next stage Cout0 = 1.

**Step 2: Middle Bit (Bit 1)**
*   Inputs to FA1: A1 = 0, B1 = 1, Cin1 = Cout0 = 1.
*   Sum (S1): \(0 \oplus 1 \oplus 1 = 0\).
*   Carry-out (Cout1): \((0 \cdot 1) + (1 \cdot (0 \oplus 1)) = 0 + (1 \cdot 1) = 1\).
*   Result so far: Sum bits S1S0 = 00. Carry to next stage Cout1 = 1.

**Step 3: MSB (Bit 2)**
*   Inputs to FA2: A2 = 1, B2 = 0, Cin2 = Cout1 = 1.
*   Sum (S2): \(1 \oplus 0 \oplus 1 = 0\).
*   Carry-out (Cout2): \((1 \cdot 0) + (1 \cdot (1 \oplus 0)) = 0 + (1 \cdot 1) = 1\).
*   Result so far: Sum bits S2S1S0 = 000. Final carry-out (overflow indication for fixed-width) Cout2 = 1.

**Final Result:**
The sum bits are S2S1S0 = `000`. The final carry-out is `1`.
When combined, the result appears as `1000` (Decimal 8).
The final carry-out bit (Cout2) indicates an overflow if we were expecting a 3-bit result. In this case, `1000` is the correct sum of `101` (5) and `011` (3).

## Practice Task

Execute the ripple-carry adder steps to add the following two 4-bit binary numbers:

Number 1: `1101`
Number 2: `0110`

Show the inputs and outputs for each full adder stage (from right to left). What is the final sum and the final carry-out bit?

## Self-Check Questions

1.  What are the three inputs to a full adder?
2.  What are the two outputs of a full adder?
3.  In a ripple-carry adder, how does the carry-out of one stage affect the next stage?
4.  If adding `1111` and `0001` in a 4-bit ripple-carry adder, what would be the final sum bits and the final carry-out bit?

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/computer-arithmetic/microskills/algorithm-step-execution|Algorithm Step Execution]]
