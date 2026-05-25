---
type: "medium"
title: "Calculating 3x3 Determinants"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/3x3-determinant-calculation|3x3-determinant-calculation]]"
learning-time-in-minutes: 3
---
# Calculating 3x3 Determinants

This lesson focuses on the practical application of calculating the determinant of a 3x3 matrix. This skill is a building block within Matrix Algebra and is crucial for solving systems of linear equations and understanding matrix invertibility.

## The Method: Cofactor Expansion

The most common and systematic way to calculate the determinant of a 3x3 matrix is using the cofactor expansion method. While there are other methods, this one is generally easy to apply consistently.

Let's consider a general 3x3 matrix, A:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

The determinant of A, denoted as $|A|$ or $\det(A)$, can be calculated by expanding along any row or any column. The formula for expansion along the **first row** is:

$$
|A| = a_{11} \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12} \begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13} \begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}
$$

Notice the alternating signs: `+`, `-`, `+`. This pattern of alternating signs is crucial.

### Breaking Down the Formula

Each term in the expansion involves:

1.  **The element itself:** $a_{11}$, $a_{12}$, or $a_{13}$.
2.  **The determinant of a 2x2 submatrix (minor):** This submatrix is formed by removing the row and column containing the element you've chosen.
3.  **An alternating sign:** Based on the position of the element (row index + column index). For the first row (1, 2, 3), the signs are $1+1=2$ (even, +), $1+2=3$ (odd, -), $1+3=4$ (even, +).

## Worked Example

Let's calculate the determinant of the following matrix:

$$
B = \begin{pmatrix}
2 & 1 & 3 \\
0 & -1 & 2 \\
1 & 4 & -2
\end{pmatrix}
$$

We will expand along the first row:

*   **Term 1:** $a_{11} = 2$. The 2x2 submatrix is formed by removing row 1 and column 1: $\begin{pmatrix} -1 & 2 \\ 4 & -2 \end{pmatrix}$.
    The determinant of this submatrix is $(-1)(-2) - (2)(4) = 2 - 8 = -6$.
    So, the first term is $+2 \times (-6) = -12$.

*   **Term 2:** $a_{12} = 1$. The 2x2 submatrix is formed by removing row 1 and column 2: $\begin{pmatrix} 0 & 2 \\ 1 & -2 \end{pmatrix}$.
    The determinant of this submatrix is $(0)(-2) - (2)(1) = 0 - 2 = -2$.
    So, the second term is $-1 \times (-2) = +2$. (Remember the minus sign from the formula).

*   **Term 3:** $a_{13} = 3$. The 2x2 submatrix is formed by removing row 1 and column 3: $\begin{pmatrix} 0 & -1 \\ 1 & 4 \end{pmatrix}$.
    The determinant of this submatrix is $(0)(4) - (-1)(1) = 0 - (-1) = 1$.
    So, the third term is $+3 \times (1) = +3$.

Now, sum up the terms:

$$
|B| = (-12) + (+2) + (+3) = -12 + 2 + 3 = -7
$$

Therefore, the determinant of matrix B is -7.

## Tips and Common Mistakes

*   **Sign Errors:** The most frequent mistake is forgetting the alternating signs $(+,-,+)$ when expanding. Keep track of these signs carefully.
*   **2x2 Determinant Calculation:** Ensure you correctly calculate the determinants of the 2x2 submatrices. Remember the formula for a 2x2 matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is $ad - bc$.
*   **Choosing a Row/Column:** While expanding along the first row is common, you can expand along any row or column. If a row or column contains zeros, it can simplify calculations. For example, if we expanded matrix B along the second row, the first term would be $0 \times (\text{its minor})$, making that term zero and simplifying the process.

By consistently applying the cofactor expansion method and being mindful of the signs and submatrix calculations, you can confidently compute the determinants of 3x3 matrices.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/3x3-determinant-calculation|3x3 determinant calculation]]
