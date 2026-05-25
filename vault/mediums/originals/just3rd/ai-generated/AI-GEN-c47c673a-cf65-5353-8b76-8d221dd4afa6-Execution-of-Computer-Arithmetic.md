---
type: "medium"
title: "Execution of Computer Arithmetic"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/execution-of-computer-arithmetic|execution-of-computer-arithmetic]]"
related-skills:
  - "[[skills/computing/hardware-embedded/computer-architecture/number-representation/number-representation|number-representation]]"
learning-time-in-minutes: 4
---
# Execution of Computer Arithmetic

In the realm of computer science, understanding how numbers are represented is only the first step. The next crucial skill is **applying** these representations to perform arithmetic operations. This lesson focuses on the practical execution of addition, subtraction, multiplication, and division as performed by computers.

## How Computers Perform Arithmetic

Computers operate on binary numbers (0s and 1s). When we perform arithmetic, these operations are broken down into simple logic gates that manipulate these binary digits. While you don't need to build these gates from scratch for this skill, it's important to remember that behind every seemingly simple calculation is a series of complex electronic processes.

### Binary Addition

Adding binary numbers follows a set of rules similar to decimal addition, but with fewer possibilities:

*   0 + 0 = 0
*   0 + 1 = 1
*   1 + 0 = 1
*   1 + 1 = 0 (with a carry-over of 1 to the next significant bit)

Let's add two binary numbers: 1011 (decimal 11) and 0110 (decimal 6).

```
  1011  (decimal 11)
+ 0110  (decimal 6)
------
```

Starting from the rightmost bit:

1.  **1 + 0 = 1**. No carry.
2.  **1 + 1 = 0**, carry **1**.
3.  **0 + 1 + (carry 1) = 0**, carry **1**.
4.  **1 + 0 + (carry 1) = 0**, carry **1**.
5.  The final carry is placed as the most significant bit.

```
  ¹ ¹ ¹
  1011
+ 0110
------
 10001  (decimal 17)
```

### Binary Subtraction

Binary subtraction can be performed using several methods, with two's complement being the most common in computer systems for representing negative numbers. For simplicity in understanding the concept, we'll look at a direct subtraction approach, bearing in mind that the computer often converts this to an addition problem.

*   0 - 0 = 0
*   1 - 0 = 1
*   1 - 1 = 0
*   0 - 1 = 1 (requires borrowing from the next significant bit, making it equivalent to 10 - 1 in binary, which is 1)

Let's subtract 0110 (decimal 6) from 1011 (decimal 11).

```
  1011  (decimal 11)
- 0110  (decimal 6)
------
```

Starting from the rightmost bit:

1.  **1 - 0 = 1**.
2.  **1 - 1 = 0**.
3.  **0 - 1**: We need to borrow. Borrow 1 from the leftmost bit of the first number (making it 0), turning this bit into 10 (binary 2). So, **10 - 1 = 1**.
4.  The leftmost bit is now 0. **0 - 0 = 0**.

```
  0 ¹0¹1
  1011
- 0110
------
  0101  (decimal 5)
```

### Binary Multiplication

Binary multiplication is similar to decimal multiplication, using partial products and then summing them up.

Let's multiply 101 (decimal 5) by 11 (decimal 3).

```
  101  (decimal 5)
x  11  (decimal 3)
-----
```

Multiply the first number by each digit of the second number, shifting the result to the left for each subsequent digit:

1.  `101 * 1` (rightmost bit of multiplier) = `101`
2.  `101 * 1` (next bit of multiplier) = `101` (shifted one position left)

```
  101
x  11
-----
  101
 1010  (shifted left by 1)
-----
```

Now, add the partial products:

```
  101
+1010
-----
 1111  (decimal 15)
```

### Binary Division

Binary division is also analogous to long division in decimal.

Let's divide 1111 (decimal 15) by 101 (decimal 5).

```
        ____
101 | 1111
```

1.  Can 101 fit into 111? Yes, once. Write 1 above the third digit of the dividend.
2.  Subtract 101 from 111: `111 - 101 = 10`.
3.  Bring down the next digit from the dividend (which is 1). We now have 101.

```
        1___
101 | 1111
      101
      ---
       101
```

4.  Can 101 fit into 101? Yes, once. Write 1 above the fourth digit of the dividend.
5.  Subtract 101 from 101: `101 - 101 = 0`.

```
        11
101 | 1111
      101
      ---
       101
       101
       ---
         0
```

The quotient is 11 (decimal 3) and the remainder is 0.

## Practical Application

In programming languages, you typically don't need to perform these binary operations manually. When you write `a + b`, the compiler or interpreter handles the conversion to binary and the execution of the appropriate logic. However, understanding these underlying principles is crucial for:

*   **Debugging:** When arithmetic errors occur, knowing how numbers are represented and manipulated can help you pinpoint the source of the problem.
*   **Performance Optimization:** For very low-level programming or in performance-critical applications, understanding binary arithmetic can sometimes lead to more efficient code.
*   **Understanding Data Types:** Different data types (integers, floating-point numbers) have specific binary representations, and arithmetic operations behave differently based on these representations.

By practicing these binary arithmetic operations, you build a stronger foundation for understanding how computers process numerical data.

## Supports

- [[skills/computing/hardware-embedded/computer-architecture/number-representation/microskills/execution-of-computer-arithmetic|Execution of Computer Arithmetic]]
