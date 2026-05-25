---
type: "medium"
title: "Understanding Subtractor Circuits"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/subtractor-function-explanation|subtractor-function-explanation]]"
related-skills:
  - "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/combinational-logic-design|combinational-logic-design]]"
learning-time-in-minutes: 3
---
# Understanding Subtractor Circuits

This lesson explains how subtractor circuits, a fundamental building block in combinational logic design, perform arithmetic subtraction.

### What is a Subtractor?

A subtractor circuit is a digital circuit that performs the subtraction of two binary numbers. Just like an adder circuit adds numbers, a subtractor takes two input bits (a minuend bit and a subtrahend bit) and produces an output bit representing the difference and a borrow bit.

Binary subtraction follows specific rules:
*   0 - 0 = 0 (Borrow 0)
*   0 - 1 = 1 (Borrow 1)
*   1 - 0 = 1 (Borrow 0)
*   1 - 1 = 0 (Borrow 0)

### Types of Subtractors

There are two main types of subtractor circuits:

1.  **Half-Subtractor:** This circuit performs subtraction on a single bit. It takes two inputs (A and B) and produces two outputs: Difference (D) and Borrow Out (Bout). It cannot handle a borrow from a previous stage.

    The truth table for a half-subtractor is:

    | A | B | D | Bout |
    |---|---|---|------|
    | 0 | 0 | 0 | 0    |
    | 0 | 1 | 1 | 1    |
    | 1 | 0 | 1 | 0    |
    | 1 | 1 | 0 | 0    |

    From the truth table, we can derive the logic equations:
    *   Difference (D) = A XOR B
    *   Borrow Out (Bout) = NOT A AND B

2.  **Full-Subtractor:** This circuit performs subtraction on a single bit and also takes into account a borrow-in (Bin) from a previous stage. This makes it suitable for multi-bit subtraction. A full-subtractor has three inputs: A, B, and Bin, and produces two outputs: Difference (D) and Borrow Out (Bout).

    The truth table for a full-subtractor is:

    | A | B | Bin | D | Bout |
    |---|---|-----|---|------|
    | 0 | 0 | 0   | 0 | 0    |
    | 0 | 0 | 1   | 1 | 1    |
    | 0 | 1 | 0   | 1 | 1    |
    | 0 | 1 | 1   | 0 | 1    |
    | 1 | 0 | 0   | 1 | 0    |
    | 1 | 0 | 1   | 0 | 0    |
    | 1 | 1 | 0   | 0 | 0    |
    | 1 | 1 | 1   | 1 | 1    |

    The logic equations for a full-subtractor are:
    *   Difference (D) = A XOR B XOR Bin
    *   Borrow Out (Bout) = (NOT A AND B) OR (Bin AND (NOT A XOR B))

    A full-subtractor can be implemented using two half-subtractors and an OR gate.

### Practical Example: Calculating Change

Imagine a vending machine that needs to calculate the change to give back to a customer. If a customer pays with a \$5 bill for an item costing \$3.75, the machine needs to calculate \$5.00 - \$3.75. This subtraction is performed by subtractor circuits within the machine's logic. For multi-digit numbers, full-subtractors are chained together to handle the borrow propagation across different bit positions.

### Practice Task

1.  Draw the logic circuit diagram for a half-subtractor using basic logic gates (AND, OR, NOT, XOR).
2.  Explain how a full-subtractor would be used to calculate the difference between the binary numbers `1011` (11 in decimal) and `0110` (6 in decimal).

### Self-Check Questions

1.  What is the primary function of a subtractor circuit?
2.  What are the inputs and outputs of a half-subtractor?
3.  Why is a full-subtractor necessary for subtracting multi-bit binary numbers?
4.  If the inputs to a half-subtractor are A=0 and B=1, what are the outputs for Difference and Borrow Out?

## Supports

- [[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/subtractor-function-explanation|Subtractor Function Explanation]]
