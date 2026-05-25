---
type: "medium"
title: "Understanding Resulting Matrix Dimensions in Multiplication"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/resulting-matrix-dimensions|resulting-matrix-dimensions]]"
learning-time-in-minutes: 4
---
# Understanding Resulting Matrix Dimensions in Multiplication

When you multiply two matrices, the resulting matrix has specific dimensions determined by the dimensions of the original matrices. Understanding this is the first step to interpreting the outcome of matrix multiplication.

## The Rule for Matrix Dimensions

Let's say you have a matrix $A$ with dimensions $m \times n$ (meaning it has $m$ rows and $n$ columns) and a matrix $B$ with dimensions $p \times q$ (meaning it has $p$ rows and $q$ columns).

For matrix multiplication $A \times B$ to be possible, the number of columns in the first matrix ($A$) must be equal to the number of rows in the second matrix ($B$). In other words, $n$ must equal $p$.

If this condition ($n = p$) is met, the resulting matrix, let's call it $C$, will have the dimensions of the number of rows of the first matrix ($A$) and the number of columns of the second matrix ($B$).

So, if $A$ is $m \times n$ and $B$ is $n \times q$, then the product matrix $C = A \times B$ will have dimensions $m \times q$.

$$ \text{If } A \text{ is } m \times \underline{n} \quad \text{and } B \text{ is } \underline{n} \times q \quad \text{then } A \times B \text{ is } m \times q $$

Notice how the "inner" dimensions (the number of columns in $A$ and the number of rows in $B$) must match for the multiplication to be defined. These inner dimensions are "canceled out" in a sense, leaving the "outer" dimensions (the number of rows in $A$ and the number of columns in $B$) to define the dimensions of the resulting matrix.

## When is Matrix Multiplication Possible?

Matrix multiplication is only possible if the number of columns in the first matrix matches the number of rows in the second matrix.

Here's a quick way to visualize it:

- Matrix $A$: $m \times \underline{n}$
- Matrix $B$: $\underline{p} \times q$

For $A \times B$ to be valid, $\underline{n} = \underline{p}$.
The resulting matrix $C$ will be $m \times q$.

If $\underline{n} \neq \underline{p}$, you cannot multiply matrix $A$ by matrix $B$ in that order.

## Worked Example

Let's consider two matrices:

Matrix $A$:
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{pmatrix}
$$
Matrix $A$ has 2 rows and 3 columns. Its dimensions are $2 \times 3$.

Matrix $B$:
$$
B = \begin{pmatrix}
7 & 8 \\
9 & 10 \\
11 & 12
\end{pmatrix}
$$
Matrix $B$ has 3 rows and 2 columns. Its dimensions are $3 \times 2$.

Now, let's determine the dimensions of the product matrix $C = A \times B$.

1.  **Check if multiplication is possible:**
    - Columns in $A$: 3
    - Rows in $B$: 3
    Since the number of columns in $A$ (3) equals the number of rows in $B$ (3), the multiplication is possible.

2.  **Determine the dimensions of the resulting matrix:**
    - Rows in $A$: 2
    - Columns in $B$: 2
    The resulting matrix $C$ will have dimensions $2 \times 2$.

So, the product matrix $C = A \times B$ will be a $2 \times 2$ matrix.

## What if the Order Changes?

Let's see what happens if we try to multiply $B \times A$.

Matrix $B$ has dimensions $3 \times 2$.
Matrix $A$ has dimensions $2 \times 3$.

1.  **Check if multiplication is possible:**
    - Columns in $B$: 2
    - Rows in $A$: 2
    Since the number of columns in $B$ (2) equals the number of rows in $A$ (2), the multiplication $B \times A$ is possible.

2.  **Determine the dimensions of the resulting matrix:**
    - Rows in $B$: 3
    - Columns in $A$: 3
    The resulting matrix $D = B \times A$ will have dimensions $3 \times 3$.

This example shows that matrix multiplication is **not generally commutative** ($A \times B$ is not always equal to $B \times A$), and even if both $A \times B$ and $B \times A$ are possible, they will likely result in matrices of different dimensions.

## Common Mistakes to Avoid

*   **Assuming multiplication is always possible:** Always check the inner dimensions first. If they don't match, stop.
*   **Confusing the order of dimensions:** Remember it's rows first, then columns.
*   **Forgetting the "inner match" rule:** The columns of the first matrix must match the rows of the second.

By focusing on the dimensions, you lay the groundwork for understanding how the elements within the matrices combine to form the final product.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/resulting-matrix-dimensions|Resulting matrix dimensions]]
