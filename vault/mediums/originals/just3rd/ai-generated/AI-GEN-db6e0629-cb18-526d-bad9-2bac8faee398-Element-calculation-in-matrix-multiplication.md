---
type: "medium"
title: "Calculating Elements in Matrix Multiplication"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/element-calculation-in-matrix-multiplication|element-calculation-in-matrix-multiplication]]"
learning-time-in-minutes: 4
---
# Calculating Elements in Matrix Multiplication

When we multiply two matrices, we're not just combining them randomly. Each element in the resulting matrix is carefully calculated based on the rows of the first matrix and the columns of the second. This lesson focuses on understanding *how* each individual element of the product matrix is computed.

### The Core Idea: Dot Product

The key to calculating any element in a product matrix is the **dot product**. Remember, a dot product involves multiplying corresponding elements of two vectors and then summing those products.

In matrix multiplication, we take a *row* from the first matrix and a *column* from the second matrix and compute their dot product. The result of this dot product becomes a single element in the new product matrix.

### Dimensions Matter

Before we dive into the calculation, let's briefly revisit dimensions. If you have a matrix $A$ with dimensions $m \times n$ and a matrix $B$ with dimensions $n \times p$, the resulting product matrix $C = A \times B$ will have dimensions $m \times p$. The number of columns in the first matrix *must* equal the number of rows in the second matrix for multiplication to be possible.

The element at the $i$-th row and $j$-th column of the product matrix $C$ (denoted as $c_{ij}$) is found by taking the dot product of the $i$-th row of matrix $A$ and the $j$-th column of matrix $B$.

### Step-by-Step Calculation

Let's break down the process for finding a specific element, say $c_{ij}$, in the product matrix $C$.

1.  **Identify the target element:** You want to find the element at row $i$ and column $j$ in the product matrix $C$.
2.  **Select the corresponding row from the first matrix ($A$):** Take the entire $i$-th row of matrix $A$.
3.  **Select the corresponding column from the second matrix ($B$):** Take the entire $j$-th column of matrix $B$.
4.  **Perform the dot product:**
    *   Multiply the first element of the selected row from $A$ by the first element of the selected column from $B$.
    *   Multiply the second element of the selected row from $A$ by the second element of the selected column from $B$.
    *   Continue this for all elements.
    *   Sum up all these products.
5.  **Assign the result:** The sum you calculated is the value of the element $c_{ij}$ in the product matrix $C$.

### Worked Example

Let's say we have two matrices:

$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
$$

$$
B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}
$$

We want to find the product matrix $C = A \times B$.

**Step 1: Determine the dimensions of C.**
Matrix $A$ is $2 \times 2$. Matrix $B$ is $2 \times 2$.
The product matrix $C$ will be $2 \times 2$.

**Step 2: Calculate each element of C.**

*   **Calculating $c_{11}$ (Element in row 1, column 1 of C):**
    *   Take the 1st row of $A$: $\begin{pmatrix} 1 & 2 \end{pmatrix}$
    *   Take the 1st column of $B$: $\begin{pmatrix} 5 \\ 7 \end{pmatrix}$
    *   Dot product: $(1 \times 5) + (2 \times 7) = 5 + 14 = 19$
    *   So, $c_{11} = 19$.

*   **Calculating $c_{12}$ (Element in row 1, column 2 of C):**
    *   Take the 1st row of $A$: $\begin{pmatrix} 1 & 2 \end{pmatrix}$
    *   Take the 2nd column of $B$: $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$
    *   Dot product: $(1 \times 6) + (2 \times 8) = 6 + 16 = 22$
    *   So, $c_{12} = 22$.

*   **Calculating $c_{21}$ (Element in row 2, column 1 of C):**
    *   Take the 2nd row of $A$: $\begin{pmatrix} 3 & 4 \end{pmatrix}$
    *   Take the 1st column of $B$: $\begin{pmatrix} 5 \\ 7 \end{pmatrix}$
    *   Dot product: $(3 \times 5) + (4 \times 7) = 15 + 28 = 43$
    *   So, $c_{21} = 43$.

*   **Calculating $c_{22}$ (Element in row 2, column 2 of C):**
    *   Take the 2nd row of $A$: $\begin{pmatrix} 3 & 4 \end{pmatrix}$
    *   Take the 2nd column of $B$: $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$
    *   Dot product: $(3 \times 6) + (4 \times 8) = 18 + 32 = 50$
    *   So, $c_{22} = 50$.

**Step 3: Assemble the product matrix C.**

$$
C = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}
$$

### Summary

Understanding how each element is computed through the dot product of a row from the first matrix and a column from the second matrix is fundamental to mastering matrix multiplication. Practice this process with different matrix sizes and values to solidify your understanding.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/element-calculation-in-matrix-multiplication|Element calculation in matrix multiplication]]
