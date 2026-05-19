---
type: "medium"
title: "Subtractor Operational Principles"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/combinational-logic-design/microskills/subtractor-operational-principles|Subtractor Operational Principles]]"
---
# Subtractor Operational Principles

This lesson focuses on understanding how subtractors work at a fundamental level, a key component in combinational logic design.

## What is a Subtractor?

A subtractor is a combinational logic circuit that performs the arithmetic subtraction of two binary numbers. Just like adders perform addition, subtractors are essential for arithmetic operations within digital systems.

## Types of Subtractors

There are two primary types of binary subtractors:

1.  **Half Subtractor:** This circuit subtracts a single bit from another single bit. It has two inputs (minuend and subtrahend) and two outputs: Difference (D) and Borrow (B).
2.  **Full Subtractor:** This circuit subtracts two bits, along with a borrow-in bit from a previous stage. It has three inputs (minuend, subtrahend, and borrow-in) and two outputs: Difference (D) and Borrow-out (Bout).

## Half Subtractor Operational Principles

A half subtractor handles the subtraction of two single bits. Let's denote the minuend as A and the subtrahend as B. The subtraction is performed as A - B.

| A | B | Difference (D) | Borrow (B) |
|---|---|----------------|------------|
| 0 | 0 | 0              | 0          |
| 0 | 1 | 1              | 1          |
| 1 | 0 | 1              | 0          |
| 1 | 1 | 0              | 0          |

**Explanation:**

*   **0 - 0 = 0:** Difference is 0, no borrow needed.
*   **0 - 1 = -1:** In binary, we can't directly represent -1. We express this as 1 with a borrow. Think of it as needing to borrow from the next significant bit. The difference is 1, and a borrow is generated.
*   **1 - 0 = 1:** Difference is 1, no borrow needed.
*   **1 - 1 = 0:** Difference is 0, no borrow needed.

From the truth table, we can derive the logic expressions:
*   Difference (D) = \(A \oplus B\) (This is the same as the XOR gate output)
*   Borrow (B) = \(\overline{A} \cdot B\) (This is equivalent to a NAND gate with inverted A input)

## Full Subtractor Operational Principles

A full subtractor extends the half subtractor by including a borrow-in (Bin) from a previous stage. This allows us to build multi-bit subtractors by cascading full subtractors. The inputs are A, B, and Bin. The outputs are Difference (D) and Borrow-out (Bout).

| A | B | Bin | Difference (D) | Borrow-out (Bout) |
|---|---|-----|----------------|-------------------|
| 0 | 0 | 0   | 0              | 0                 |
| 0 | 0 | 1   | 1              | 1                 |
| 0 | 1 | 0   | 1              | 1                 |
| 0 | 1 | 1   | 0              | 1                 |
| 1 | 0 | 0   | 1              | 0                 |
| 1 | 0 | 1   | 0              | 0                 |
| 1 | 1 | 0   | 0              | 0                 |
| 1 | 1 | 1   | 1              | 1                 |

**Explanation:**

The logic here is a bit more complex as it involves three bits. Let's look at a couple of key rows:

*   **A=0, B=0, Bin=1:** We are trying to calculate 0 - 0 - 1. This is equivalent to \(0 - (0+1)\), which is \(0 - 1\). As seen in the half subtractor, this results in a difference of 1 and a borrow of 1.
*   **A=0, B=1, Bin=1:** We are trying to calculate 0 - 1 - 1. This is equivalent to \(0 - (1+1)\), which is \(0 - 10_2\). This requires borrowing from the next stage, and the result is a difference of 0 and a borrow of 1.

The logic expressions for a full subtractor are:
*   Difference (D) = \(A \oplus B \oplus Bin\)
*   Borrow-out (Bout) = \(\overline{A} \cdot B + \overline{(A \oplus B)} \cdot Bin\)

These expressions show that a full subtractor can be implemented using two half subtractors and an OR gate.

## Practical Scenario

Imagine you are designing a simple digital calculator that can perform subtraction. You would use half subtractors to handle the least significant bits and full subtractors to handle subsequent bits, ensuring correct borrowing between stages.

## Practice Task

Consider the subtraction of two single bits: A=0 and B=1.

1.  What is the result of the difference?
2.  Is a borrow generated?

## Self-Check Questions

1.  What is the primary function of a subtractor circuit?
2.  What is the difference between a half subtractor and a full subtractor?
3.  For a half subtractor, what input combination generates a borrow?
4.  What are the two outputs of a full subtractor?

## Supports

- [[skills/hardware-embedded/electronics-embedded/combinational-logic-design/microskills/subtractor-operational-principles|Subtractor Operational Principles]]
