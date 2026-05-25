---
type: "medium"
title: "Row Operations Application for Solving Linear Systems"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/row-operations-application|row-operations-application]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/matrix-algebra|matrix-algebra]]"
learning-time-in-minutes: 5
---
# Row Operations Application for Solving Linear Systems

This lesson focuses on the fundamental technique of applying row operations to augmented matrices, a crucial step in solving systems of linear equations using Gaussian elimination.

## What are Row Operations?

Row operations are a set of transformations that can be applied to the rows of an augmented matrix without changing the solution set of the corresponding system of linear equations. Think of them as different ways to manipulate the equations in a system without altering what the solutions are.

There are three elementary row operations:

1.  **Swapping two rows:** This is like reordering the equations in your system.
2.  **Multiplying a row by a non-zero scalar:** This is equivalent to multiplying an entire equation by a non-zero number.
3.  **Adding a multiple of one row to another row:** This is like adding a modified version of one equation to another equation.

## Augmented Matrices and Row Operations

When we have a system of linear equations, we can represent it as an augmented matrix. The coefficients of the variables form the left side of the matrix, and the constants on the right side of the equals sign form the augmented column, separated by a vertical line.

For example, the system:

$$
\begin{cases}
x + 2y = 5 \\
3x - y = 1
\end{cases}
$$

can be represented by the augmented matrix:

$$
\begin{bmatrix}
1 & 2 & | & 5 \\
3 & -1 & | & 1
\end{bmatrix}
$$

We will use row operations on this matrix to transform it into a simpler form from which we can easily read the solution.

## Applying Row Operations: A Step-by-Step Approach

Let's work through an example to see how these operations are applied.

**Goal:** Transform the augmented matrix into one where the coefficients on the left form an identity matrix (or a form close to it), with the solutions in the augmented column.

**Example System:**

$$
\begin{cases}
2x - y + 3z = 9 \\
x + y - z = 1 \\
-x + 2y + 2z = 6
\end{cases}
$$

**Augmented Matrix:**

$$
\begin{bmatrix}
2 & -1 & 3 & | & 9 \\
1 & 1 & -1 & | & 1 \\
-1 & 2 & 2 & | & 6
\end{bmatrix}
$$

**Step 1: Get a '1' in the top-left position (pivot).**

We can swap Row 1 ($R_1$) and Row 2 ($R_2$) to achieve this.
$$
R_1 \leftrightarrow R_2
$$

$$
\begin{bmatrix}
1 & 1 & -1 & | & 1 \\
2 & -1 & 3 & | & 9 \\
-1 & 2 & 2 & | & 6
\end{bmatrix}
$$

**Step 2: Create zeros below the pivot in the first column.**

*   To get a zero in the second row, first column, we can subtract 2 times Row 1 from Row 2.
    $$
    R_2 \leftarrow R_2 - 2R_1
    $$
    This means:
    *   $2 - 2(1) = 0$
    *   $-1 - 2(1) = -3$
    *   $3 - 2(-1) = 5$
    *   $9 - 2(1) = 7$

*   To get a zero in the third row, first column, we can add Row 1 to Row 3.
    $$
    R_3 \leftarrow R_3 + R_1
    $$
    This means:
    *   $-1 + 1 = 0$
    *   $2 + 1 = 3$
    *   $2 + (-1) = 1$
    *   $6 + 1 = 7$

After these operations, the matrix becomes:

$$
\begin{bmatrix}
1 & 1 & -1 & | & 1 \\
0 & -3 & 5 & | & 7 \\
0 & 3 & 1 & | & 7
\end{bmatrix}
$$

**Step 3: Get a '1' in the second row, second column position (the next pivot).**

We can add Row 2 to Row 3 to get a 6 in the second column of Row 3, which might be easier to work with later. However, a more direct approach is to modify Row 2. Let's try to get a '1' there. We can multiply $R_2$ by $-\frac{1}{3}$.

$$
R_2 \leftarrow -\frac{1}{3}R_2
$$

$$
\begin{bmatrix}
1 & 1 & -1 & | & 1 \\
0 & 1 & -\frac{5}{3} & | & -\frac{7}{3} \\
0 & 3 & 1 & | & 7
\end{bmatrix}
$$

**Step 4: Create zeros above and below the second pivot.**

*   To get a zero in the third row, second column, we can subtract 3 times Row 2 from Row 3.
    $$
    R_3 \leftarrow R_3 - 3R_2
    $$
    This means:
    *   $3 - 3(1) = 0$
    *   $1 - 3(-\frac{5}{3}) = 1 + 5 = 6$
    *   $7 - 3(-\frac{7}{3}) = 7 + 7 = 14$

*   To get a zero in the first row, second column, we can subtract Row 2 from Row 1.
    $$
    R_1 \leftarrow R_1 - R_2
    $$
    This means:
    *   $1 - 1 = 0$
    *   $1 - 1 = 0$
    *   $-1 - (-\frac{5}{3}) = -1 + \frac{5}{3} = \frac{2}{3}$
    *   $1 - (-\frac{7}{3}) = 1 + \frac{7}{3} = \frac{10}{3}$

The matrix now looks like this:

$$
\begin{bmatrix}
1 & 0 & \frac{2}{3} & | & \frac{10}{3} \\
0 & 1 & -\frac{5}{3} & | & -\frac{7}{3} \\
0 & 0 & 6 & | & 14
\end{bmatrix}
$$

**Step 5: Get a '1' in the third row, third column position (the next pivot).**

Divide Row 3 by 6.
$$
R_3 \leftarrow \frac{1}{6}R_3
$$

$$
\begin{bmatrix}
1 & 0 & \frac{2}{3} & | & \frac{10}{3} \\
0 & 1 & -\frac{5}{3} & | & -\frac{7}{3} \\
0 & 0 & 1 & | & \frac{14}{6} = \frac{7}{3}
\end{bmatrix}
$$

**Step 6: Create zeros above the third pivot.**

*   To get a zero in the first row, third column, subtract $\frac{2}{3}$ times Row 3 from Row 1.
    $$
    R_1 \leftarrow R_1 - \frac{2}{3}R_3
    $$
    *   $\frac{10}{3} - \frac{2}{3}(\frac{7}{3}) = \frac{10}{3} - \frac{14}{9} = \frac{30}{9} - \frac{14}{9} = \frac{16}{9}$

*   To get a zero in the second row, third column, add $\frac{5}{3}$ times Row 3 to Row 2.
    $$
    R_2 \leftarrow R_2 + \frac{5}{3}R_3
    $$
    *   $-\frac{7}{3} + \frac{5}{3}(\frac{7}{3}) = -\frac{7}{3} + \frac{35}{9} = -\frac{21}{9} + \frac{35}{9} = \frac{14}{9}$

The final matrix in row-echelon form (specifically, reduced row-echelon form) is:

$$
\begin{bmatrix}
1 & 0 & 0 & | & \frac{16}{9} \\
0 & 1 & 0 & | & \frac{14}{9} \\
0 & 0 & 1 & | & \frac{7}{3}
\end{bmatrix}
$$

## Reading the Solution

From this final matrix, we can directly read the solution to the system:

$$
x = \frac{16}{9}, \quad y = \frac{14}{9}, \quad z = \frac{7}{3}
$$

## Common Mistakes to Avoid

*   **Arithmetic Errors:** These are the most common pitfalls. Double-check every calculation, especially when dealing with fractions.
*   **Incorrectly Applying Operations:** Ensure you are applying the operation to *all* elements in the row, not just a few.
*   **Mixing Up Rows:** Keep track of which row is which, especially after multiple swaps.
*   **Stopping Too Early:** Aim for the reduced row-echelon form to easily extract the solution.

Mastering these row operations is foundational for efficiently solving linear systems using Gaussian elimination. Practice with various systems to build confidence and speed.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/row-operations-application|Row operations application]]
