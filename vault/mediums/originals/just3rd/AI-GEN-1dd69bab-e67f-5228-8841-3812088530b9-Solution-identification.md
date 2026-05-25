---
type: "medium"
title: "Identifying Solutions in Linear Systems: The End Goal of Gaussian Elimination"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/solution-identification|solution-identification]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/matrix-algebra|matrix-algebra]]"
learning-time-in-minutes: 4
---
# Identifying Solutions in Linear Systems: The End Goal of Gaussian Elimination

When we use Gaussian elimination to solve a system of linear equations, our ultimate goal is to determine the nature of its solution. This involves identifying whether the system has a single, unique solution, infinitely many solutions, or no solution at all. This process is crucial for understanding the behavior of the system you're working with.

## What Does Solution Type Mean?

Imagine a system of linear equations as a set of lines (or planes, or hyperplanes in higher dimensions) that we're trying to find intersections for.

*   **Unique Solution:** This is like finding a single point where all the lines cross. There's one specific set of values for our variables that satisfies every equation simultaneously.
*   **Infinite Solutions:** This occurs when the lines overlap or are coincident. They share an infinite number of points, meaning there are multiple combinations of variable values that work.
*   **No Solution:** This happens when the lines are parallel and never intersect. There's no single set of variable values that can satisfy all equations at once.

## How Gaussian Elimination Reveals Solution Types

Gaussian elimination transforms a system's augmented matrix into row-echelon form or reduced row-echelon form. The structure of this final matrix directly tells us about the solutions.

We'll focus on the **row-echelon form** for this explanation, as it's the typical intermediate step where solution identification becomes clear.

### Step-by-Step Identification Using Row-Echelon Form

After performing Gaussian elimination, examine the resulting augmented matrix. Look at the rows that represent equations.

1.  **Checking for Inconsistency (No Solution):**
    *   **The Indicator:** A row of the form `[0 0 ... 0 | c]` where `c` is a non-zero number.
    *   **Interpretation:** This row translates to the equation `0*x1 + 0*x2 + ... + 0*xn = c`. If `c` is not zero, this equation simplifies to `0 = c`, which is a contradiction. This means the system is inconsistent, and there are **no solutions**.

2.  **Identifying Dependent Equations (Infinite Solutions):**
    *   **The Indicator:** One or more rows consisting entirely of zeros, like `[0 0 ... 0 | 0]`.
    *   **Interpretation:** This row translates to `0 = 0`, which is always true and provides no new information about the variables. This indicates that one or more equations were redundant or dependent on others. If you have fewer non-zero rows (leading ones) than variables, you will have **infinitely many solutions**. The number of free variables (variables not associated with a leading one) determines the "degree" of infinity.

3.  **Confirming a Unique Solution:**
    *   **The Indicator:** If you *don't* find any rows indicating inconsistency (like in step 1) and you have a leading '1' in each column corresponding to a variable (meaning the number of non-zero rows equals the number of variables).
    *   **Interpretation:** Each variable can be uniquely determined. This is the most straightforward case, where you can back-substitute to find the specific values for each variable, leading to a **unique solution**.

## Worked Example

Let's consider the following system of linear equations:

$$
\begin{cases}
x + 2y - z = 3 \\
2x + y + z = 6 \\
3x + 3y = 9
\end{cases}
$$

We represent this as an augmented matrix:

$$
\begin{bmatrix}
1 & 2 & -1 & | & 3 \\
2 & 1 & 1 & | & 6 \\
3 & 3 & 0 & | & 9
\end{bmatrix}
$$

Performing Gaussian elimination (e.g., $R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - 3R_1$, etc.) leads to a row-echelon form. Let's assume after row operations we arrive at:

$$
\begin{bmatrix}
1 & 2 & -1 & | & 3 \\
0 & -3 & 3 & | & 0 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

Now, let's analyze this matrix:

*   **Row 3:** `[0 0 0 | 0]` translates to `0x + 0y + 0z = 0`, which is `0 = 0`. This is always true and indicates a dependent equation.
*   **Row 2:** `[0 -3 3 | 0]` translates to `-3y + 3z = 0`.
*   **Row 1:** `[1 2 -1 | 3]` translates to `x + 2y - z = 3`.

Since we have a row of all zeros (`0 = 0`), this suggests there might be infinite solutions. We have 3 variables ($x, y, z$) but only 2 non-zero rows (leading '1's are implicitly present in the first column of Row 1 and the second column of Row 2 if we were to normalize). This means we have one free variable. Let's say `z` is our free variable.

From Row 2: `-3y + 3z = 0 \implies -3y = -3z \implies y = z`.
Substitute `y = z` into Row 1: `x + 2(z) - z = 3 \implies x + z = 3 \implies x = 3 - z`.

So, the solutions are of the form `(3 - z, z, z)` for any real number `z`. This confirms we have **infinitely many solutions**.

### Example of No Solution

If our row-echelon form looked like this:

$$
\begin{bmatrix}
1 & 2 & -1 & | & 3 \\
0 & -3 & 3 & | & 0 \\
0 & 0 & 0 & | & 5
\end{bmatrix}
$$

The third row `[0 0 0 | 5]` translates to `0 = 5`, which is a contradiction. This system would have **no solution**.

By carefully examining the final row-echelon form of the augmented matrix, you can confidently determine whether your system of linear equations has a unique solution, infinitely many solutions, or no solution at all.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/solution-identification|Solution identification]]
