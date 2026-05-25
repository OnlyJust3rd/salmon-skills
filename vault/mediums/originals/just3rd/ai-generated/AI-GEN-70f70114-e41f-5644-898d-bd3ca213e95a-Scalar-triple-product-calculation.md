---
type: "medium"
title: "Calculating the Scalar Triple Product"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/vector/microskills/scalar-triple-product-calculation|scalar-triple-product-calculation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/vector/vector|vector]]"
learning-time-in-minutes: 5
---
# Calculating the Scalar Triple Product

The scalar triple product is a powerful tool in vector algebra, allowing us to determine the volume of a parallelepiped defined by three vectors and to check for coplanarity. It's an essential calculation when working with vector operations.

## What is the Scalar Triple Product?

Given three vectors, $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$, their scalar triple product is defined as the dot product of one vector with the cross product of the other two. The result is a scalar (a single number), hence the name "scalar triple product."

The standard notation for the scalar triple product is:
$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})
$$

### Key Properties

*   **Geometric Interpretation:** The absolute value of the scalar triple product, $|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$, represents the volume of the parallelepiped formed by the three vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ originating from the same point.
*   **Order Matters (Cyclic Permutation):** The scalar triple product is invariant under cyclic permutations of the vectors:
    $$
    \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a}) = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})
    $$
*   **Order Matters (Swapping):** Swapping any two vectors changes the sign of the result:
    $$
    \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = - \mathbf{a} \cdot (\mathbf{c} \times \mathbf{b})
    $$
*   **Coplanarity:** If the scalar triple product of three vectors is zero ($\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 0$), it means the three vectors are coplanar (they lie on the same plane). This is because if they are coplanar, the parallelepiped they form has zero volume.

## How to Calculate the Scalar Triple Product

There are two primary methods to calculate the scalar triple product:

1.  **Using the Cross Product First:**
    *   Calculate the cross product of two of the vectors (e.g., $\mathbf{b} \times \mathbf{c}$).
    *   Take the dot product of the resulting vector with the third vector (e.g., $\mathbf{a}$).

2.  **Using a Determinant:** This is often the most straightforward method when the vectors are given in component form.

Let $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$, $\mathbf{b} = \langle b_1, b_2, b_3 \rangle$, and $\mathbf{c} = \langle c_1, c_2, c_3 \rangle$. The scalar triple product can be calculated as the determinant of a $3 \times 3$ matrix formed by these vectors:
$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}
$$

Expanding this determinant using the first row:
$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = a_1 \begin{vmatrix} b_2 & b_3 \\ c_2 & c_3 \end{vmatrix} - a_2 \begin{vmatrix} b_1 & b_3 \\ c_1 & c_3 \end{vmatrix} + a_3 \begin{vmatrix} b_1 & b_2 \\ c_1 & c_2 \end{vmatrix}
$$
$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = a_1(b_2c_3 - b_3c_2) - a_2(b_1c_3 - b_3c_1) + a_3(b_1c_2 - b_2c_1)
$$

This formula is identical to calculating $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ directly:
$$
\mathbf{b} \times \mathbf{c} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix} = (b_2c_3 - b_3c_2)\mathbf{i} - (b_1c_3 - b_3c_1)\mathbf{j} + (b_1c_2 - b_2c_1)\mathbf{k}
$$
Then,
$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \langle a_1, a_2, a_3 \rangle \cdot \langle (b_2c_3 - b_3c_2), -(b_1c_3 - b_3c_1), (b_1c_2 - b_2c_1) \rangle
$$
$$
= a_1(b_2c_3 - b_3c_2) + a_2(-(b_1c_3 - b_3c_1)) + a_3(b_1c_2 - b_2c_1)
$$
$$
= a_1(b_2c_3 - b_3c_2) - a_2(b_1c_3 - b_3c_1) + a_3(b_1c_2 - b_2c_1)
$$

## Worked Example

Let's calculate the scalar triple product for the following vectors:
$\mathbf{a} = \langle 1, 2, -1 \rangle$
$\mathbf{b} = \langle 0, 3, 1 \rangle$
$\mathbf{c} = \langle -2, 1, 4 \rangle$

We will use the determinant method as it's generally more efficient.

**Step 1: Set up the determinant.**
$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} 1 & 2 & -1 \\ 0 & 3 & 1 \\ -2 & 1 & 4 \end{vmatrix}
$$

**Step 2: Expand the determinant.**
Using the formula: $a_1(b_2c_3 - b_3c_2) - a_2(b_1c_3 - b_3c_1) + a_3(b_1c_2 - b_2c_1)$

Here, $a_1=1, a_2=2, a_3=-1$ and $b_1=0, b_2=3, b_3=1$ and $c_1=-2, c_2=1, c_3=4$.

$$
= 1 \begin{vmatrix} 3 & 1 \\ 1 & 4 \end{vmatrix} - 2 \begin{vmatrix} 0 & 1 \\ -2 & 4 \end{vmatrix} + (-1) \begin{vmatrix} 0 & 3 \\ -2 & 1 \end{vmatrix}
$$

**Step 3: Calculate the $2 \times 2$ determinants.**
*   $\begin{vmatrix} 3 & 1 \\ 1 & 4 \end{vmatrix} = (3 \times 4) - (1 \times 1) = 12 - 1 = 11$
*   $\begin{vmatrix} 0 & 1 \\ -2 & 4 \end{vmatrix} = (0 \times 4) - (1 \times -2) = 0 - (-2) = 2$
*   $\begin{vmatrix} 0 & 3 \\ -2 & 1 \end{vmatrix} = (0 \times 1) - (3 \times -2) = 0 - (-6) = 6$

**Step 4: Substitute the values back into the expansion.**
$$
= 1(11) - 2(2) + (-1)(6)
$$
$$
= 11 - 4 - 6
$$
$$
= 1
$$

So, the scalar triple product of $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ is $1$.

### Interpretation of the Result

The scalar triple product is $1$. This means:
*   The volume of the parallelepiped formed by $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ is $|1| = 1$ cubic unit.
*   Since the scalar triple product is not zero, the vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ are not coplanar.

## Common Mistakes to Avoid

*   **Incorrectly Calculating the Cross Product:** Double-check your component calculations for the cross product if you choose to do it step-by-step. Sign errors are common.
*   **Mixing Up Rows/Columns in the Determinant:** Ensure the vectors are placed as rows (or columns) consistently in the determinant matrix.
*   **Sign Errors in Determinant Expansion:** Remember the alternating signs ($+$, $-$, $+$) when expanding the $3 \times 3$ determinant.
*   **Forgetting the Absolute Value for Volume:** If asked for the volume, remember to take the absolute value of the scalar triple product, as volume cannot be negative.

By mastering the calculation of the scalar triple product, you gain a deeper understanding of the spatial relationships between three vectors and their geometric implications.

## Supports

- [[skills/mathematics/linear-algebra/vector/microskills/scalar-triple-product-calculation|Scalar triple product calculation]]
