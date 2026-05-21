---
type: "medium"
title: "Binary Arithmetic Application"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/number-representation/microskills/binary-arithmetic-application|binary-arithmetic-application]]"
---
# Binary Arithmetic Application

In computer science, numbers are not always represented in the familiar decimal (base-10) system. Computers fundamentally operate using binary (base-2), which uses only two digits: 0 and 1. Understanding how to perform arithmetic operations directly in binary is crucial for comprehending how computers process information. This lesson focuses on the practical application of binary arithmetic.

## Core Concepts: Binary Addition and Subtraction

Just as we have rules for decimal addition and subtraction, binary arithmetic follows its own set of rules.

### Binary Addition

The rules for binary addition are:
*   $0 + 0 = 0$
*   $0 + 1 = 1$
*   $1 + 0 = 1$
*   $1 + 1 = 0$ with a carry-over of $1$ to the next significant bit.

When adding multiple bits, remember to include any carry-over from the previous column.

### Binary Subtraction

Binary subtraction is similar to decimal subtraction, involving borrowing from the next significant bit when necessary. The basic rules are:
*   $0 - 0 = 0$
*   $1 - 0 = 1$
*   $1 - 1 = 0$
*   $0 - 1 = 1$ with a borrow from the next significant bit.

When you borrow from a bit, it effectively turns that bit into a $2$ (in base-10 terms) that you can then subtract from. The bit from which you borrowed is reduced by $1$.

## Applying Binary Arithmetic: Worked Examples

Let's apply these rules to some practical examples.

### Addition Example

**Problem:** Add the binary numbers $1011_2$ and $0110_2$.

**Solution:**

We align the numbers by their place value, just like in decimal addition.

```
  1011  (Decimal: 11)
+ 0110  (Decimal: 6)
------
```

Now, we add column by column from right to left:

1.  **Rightmost column (1s place):** $1 + 0 = 1$. Write down $1$.
    ```
      1011
    + 0110
    ------
         1
    ```
2.  **Second column from right (2s place):** $1 + 1 = 0$ with a carry-over of $1$. Write down $0$ and carry $1$.
    ```
      1 1  (carry)
      1011
    + 0110
    ------
       01
    ```
3.  **Third column from right (4s place):** $0 + 1 + 1$ (carry) $= 0$ with a carry-over of $1$. Write down $0$ and carry $1$.
    ```
      1 1 1 (carry)
      1011
    + 0110
    ------
      001
    ```
4.  **Leftmost column (8s place):** $1 + 0 + 1$ (carry) $= 0$ with a carry-over of $1$. Write down $0$ and carry $1$.
    ```
      1 1 1 1 (carry)
      1011
    + 0110
    ------
     0001
    ```
5.  **Final carry-over:** Bring down the final carry-over.
    ```
      1 1 1 1 (carry)
      1011
    + 0110
    ------
     10001
    ```

So, $1011_2 + 0110_2 = 10001_2$.

Let's check this in decimal: $11_{10} + 6_{10} = 17_{10}$.
Converting $10001_2$ to decimal:
$(1 \times 2^4) + (0 \times 2^3) + (0 \times 2^2) + (0 \times 2^1) + (1 \times 2^0)$
$= (1 \times 16) + (0 \times 8) + (0 \times 4) + (0 \times 2) + (1 \times 1)$
$= 16 + 0 + 0 + 0 + 1 = 17_{10}$.
The result matches.

### Subtraction Example

**Problem:** Subtract $0110_2$ from $1011_2$.

**Solution:**

Align the numbers.

```
  1011  (Decimal: 11)
- 0110  (Decimal: 6)
------
```

Perform subtraction column by column from right to left:

1.  **Rightmost column (1s place):** $1 - 0 = 1$. Write down $1$.
    ```
      1011
    - 0110
    ------
         1
    ```
2.  **Second column from right (2s place):** $1 - 1 = 0$. Write down $0$.
    ```
      1011
    - 0110
    ------
       01
    ```
3.  **Third column from right (4s place):** $0 - 1$. We need to borrow. Borrow $1$ from the leftmost bit (the $8$s place). This borrowed $1$ is equivalent to $2$ in the current column.
    The leftmost bit becomes $0$. The current bit becomes $0 + 2 = 2$.
    Now, perform the subtraction: $2 - 1 = 1$. Write down $1$.
    ```
      0  (borrowed from)
      1011
    - 0110
    ------
      101
    ```
4.  **Leftmost column (8s place):** We have $0$ (after borrowing) $- 0 = 0$. Write down $0$.
    ```
      0
      1011
    - 0110
    ------
     0101
    ```

So, $1011_2 - 0110_2 = 0101_2$.

In decimal: $11_{10} - 6_{10} = 5_{10}$.
Converting $0101_2$ to decimal:
$(0 \times 2^3) + (1 \times 2^2) + (0 \times 2^1) + (1 \times 2^0)$
$= (0 \times 8) + (1 \times 4) + (0 \times 2) + (1 \times 1)$
$= 0 + 4 + 0 + 1 = 5_{10}$.
The result matches.

## Practical Implications

Understanding binary arithmetic is fundamental for:

*   **Understanding low-level programming:** When working with hardware, memory addresses, or bitwise operations in languages like C or assembly.
*   **Digital logic design:** Designing circuits that perform computations relies directly on binary logic and arithmetic.
*   **Error detection and correction:** Many methods used to ensure data integrity involve binary calculations.

By practicing these binary operations, you build a stronger foundation for grasping how computers execute the calculations you perform every day.

## Supports

- [[skills/hardware-embedded/electronics-embedded/number-representation/microskills/binary-arithmetic-application|Binary Arithmetic Application]]
