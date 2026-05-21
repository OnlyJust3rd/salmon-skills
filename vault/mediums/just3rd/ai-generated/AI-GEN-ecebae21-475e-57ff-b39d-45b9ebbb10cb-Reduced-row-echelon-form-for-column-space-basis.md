---
type: "medium"
title: "Finding a Basis for the Column Space using Reduced Row Echelon Form"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/matrix-algebra/microskills/reduced-row-echelon-form-for-column-space-basis|reduced-row-echelon-form-for-column-space-basis]]"
---
# Finding a Basis for the Column Space using Reduced Row Echelon Form

In Matrix Algebra, understanding the structure of a matrix is crucial. One key aspect is identifying the column space. The column space of a matrix is the span of its column vectors. A basis for the column space is a set of linearly independent vectors that span the column space. This lesson focuses on how to **apply** Gaussian elimination, specifically by transforming a matrix into its **reduced row echelon form (RREF)**, to efficiently identify these basis vectors.

### Why Use RREF for the Column Space Basis?

While you can find a basis for the column space by selecting linearly independent columns from the *original* matrix, using the RREF simplifies the process of identifying these columns. The RREF of a matrix provides invaluable information about the linear dependencies among its columns.

### Key Insight: Pivot Columns

The columns in the RREF that contain leading ones (pivots) correspond to the **linearly independent columns** in the *original* matrix that form a basis for the column space. The columns without pivots in the RREF are linearly dependent on the pivot columns.

### Steps to Find the Column Space Basis using RREF

1.  **Form the Matrix:** Write down the matrix you are working with. Let's call it $A$.
2.  **Perform Gaussian Elimination to RREF:** Apply row operations to transform matrix $A$ into its reduced row echelon form.
3.  **Identify Pivot Columns:** In the RREF, locate the columns that contain a leading '1' (a pivot).
4.  **Select Original Columns:** The columns in the *original* matrix $A$ that correspond to the pivot columns in the RREF form a basis for the column space of $A$.

### Worked Example

Let's find a basis for the column space of the following matrix $A$:

$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

**Step 1: Form the Matrix**
We have our matrix $A$ as shown above.

**Step 2: Perform Gaussian Elimination to RREF**
We will perform row operations to get to RREF.

*   $R_2 \leftarrow R_2 - 2R_1$ and $R_3 \leftarrow R_3 - 3R_1$:
    $$
    \begin{pmatrix}
    1 & 2 & 3 \\
    0 & 0 & 0 \\
    0 & 0 & 0
    \end{pmatrix}
    $$
*   This is already in reduced row echelon form because the leading non-zero entry in the first row is a '1', and all other entries in its column are zero. The rows below it are all zeros.

The RREF of $A$ is:
$$
RREF(A) = \begin{pmatrix}
1 & 2 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$

**Step 3: Identify Pivot Columns**
In $RREF(A)$, the first column contains a leading '1' (a pivot). The second and third columns do not contain pivots.

**Step 4: Select Original Columns**
The pivot column in the RREF is the **first column**. Therefore, the **first column of the original matrix $A$** forms a basis for the column space.

The basis for the column space of $A$ is:
$$
\left\{ \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \right\}
$$

### Another Example

Let's find a basis for the column space of matrix $B$:

$$
B = \begin{pmatrix}
1 & -1 & 3 \\
2 & 0 & 5 \\
-1 & 1 & -3
\end{pmatrix}
$$

**Step 1: Form the Matrix**
Matrix $B$ is given.

**Step 2: Perform Gaussian Elimination to RREF**
Let's transform $B$ into RREF.

*   $R_2 \leftarrow R_2 - 2R_1$ and $R_3 \leftarrow R_3 + R_1$:
    $$
    \begin{pmatrix}
    1 & -1 & 3 \\
    0 & 2 & -1 \\
    0 & 0 & 0
    \end{pmatrix}
    $$
*   $R_2 \leftarrow \frac{1}{2}R_2$:
    $$
    \begin{pmatrix}
    1 & -1 & 3 \\
    0 & 1 & -1/2 \\
    0 & 0 & 0
    \end{pmatrix}
    $$
*   $R_1 \leftarrow R_1 + R_2$:
    $$
    \begin{pmatrix}
    1 & 0 & 5/2 \\
    0 & 1 & -1/2 \\
    0 & 0 & 0
    \end{pmatrix}
    $$

The RREF of $B$ is:
$$
RREF(B) = \begin{pmatrix}
1 & 0 & 5/2 \\
0 & 1 & -1/2 \\
0 & 0 & 0
\end{pmatrix}
$$

**Step 3: Identify Pivot Columns**
In $RREF(B)$, the **first** and **second** columns contain leading '1's (pivots).

**Step 4: Select Original Columns**
The pivot columns in the RREF are the first and second columns. Therefore, the **first and second columns of the original matrix $B$** form a basis for the column space.

The basis for the column space of $B$ is:
$$
\left\{ \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \right\}
$$

### Common Mistakes to Avoid

*   **Selecting columns from the RREF:** Remember to pick the corresponding columns from the *original* matrix. The RREF is just a tool to *identify* which columns are linearly independent.
*   **Misidentifying pivots:** Ensure you correctly spot the leading '1' in each non-zero row when determining pivot columns.
*   **Errors in row reduction:** Inaccurate row operations will lead to an incorrect RREF and thus an incorrect basis. Double-check your calculations.

By mastering the identification of pivot columns in the reduced row echelon form, you gain an efficient and systematic way to determine a basis for the column space of any matrix.

## Supports

- [[skills/mathematics/matrix-algebra/microskills/reduced-row-echelon-form-for-column-space-basis|Reduced row echelon form for column space basis]]
