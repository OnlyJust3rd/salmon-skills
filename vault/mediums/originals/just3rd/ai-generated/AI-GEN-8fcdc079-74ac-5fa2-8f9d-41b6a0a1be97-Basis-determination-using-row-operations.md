---
type: "medium"
title: "Finding Bases with Gaussian Elimination"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/basis-determination-using-row-operations|basis-determination-using-row-operations]]"
learning-time-in-minutes: 6
---
# Finding Bases with Gaussian Elimination

This lesson focuses on using Gaussian elimination, a powerful technique in matrix algebra, to identify bases for the row space and column space of a matrix. This is a key application of understanding matrix transformations.

## Understanding Row Space and Column Space

Before we dive into the mechanics, let's quickly define what we're working with:

*   **Row Space:** The row space of a matrix \( A \), denoted as \( \text{Row}(A) \), is the vector space spanned by the row vectors of \( A \). Essentially, it's all possible linear combinations of the rows.
*   **Column Space:** The column space of a matrix \( A \), denoted as \( \text{Col}(A) \), is the vector space spanned by the column vectors of \( A \). It's all possible linear combinations of the columns.

A **basis** for a vector space is a set of linearly independent vectors that span the entire space. This means any vector in the space can be uniquely written as a linear combination of the basis vectors, and no basis vector can be written as a linear combination of the others.

## Gaussian Elimination: The Tool

Gaussian elimination is a systematic method for transforming a matrix into its **row echelon form** (or reduced row echelon form) using elementary row operations. These operations are:

1.  Swapping two rows.
2.  Multiplying a row by a non-zero scalar.
3.  Adding a multiple of one row to another row.

Crucially, these row operations do **not** change the row space of the matrix. They **do** change the column space, but they preserve the linear dependence relationships between the columns.

## Finding a Basis for the Row Space

The beauty of Gaussian elimination for finding a row space basis is that it directly reveals the linearly independent rows.

**Steps:**

1.  Take your matrix \( A \).
2.  Apply Gaussian elimination to transform \( A \) into its row echelon form (REF) or reduced row echelon form (RREF). Let's call this new matrix \( U \).
3.  The **non-zero rows** of \( U \) form a basis for the row space of \( A \).

**Why does this work?**
Row operations preserve the span of the rows. When you reach row echelon form, the leading non-zero entries (pivots) in each non-zero row are in different columns, and all entries below the pivots are zero. This structure inherently makes these non-zero rows linearly independent.

**Example:**

Let's find a basis for the row space of the matrix:
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

Apply Gaussian elimination:
*   \( R_2 \leftarrow R_2 - 2R_1 \)
*   \( R_3 \leftarrow R_3 - 3R_1 \)

$$
\begin{pmatrix}
1 & 2 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$
This is already in row echelon form. The non-zero row is \( \begin{pmatrix} 1 & 2 & 3 \end{pmatrix} \).

Therefore, a basis for the row space of \( A \) is \( \{ \begin{pmatrix} 1 & 2 & 3 \end{pmatrix} \} \).

## Finding a Basis for the Column Space

Finding a basis for the column space is a bit different. The row operations change the column space, so we can't just take the non-zero columns of the REF/RREF. Instead, we use the information from the REF/RREF to identify which original columns are linearly independent.

**Steps:**

1.  Take your matrix \( A \).
2.  Apply Gaussian elimination to transform \( A \) into its row echelon form (REF) or reduced row echelon form (RREF). Let's call this new matrix \( U \).
3.  Identify the **pivot columns** in \( U \). A pivot column is a column that contains a leading non-zero entry (a pivot) of a row.
4.  The **corresponding columns in the original matrix \( A \)** form a basis for the column space of \( A \).

**Why does this work?**
Row operations preserve the linear dependence relationships among the columns. If a column in \( U \) is a linear combination of other columns in \( U \), then the corresponding column in \( A \) is the *same* linear combination of the corresponding columns in \( A \). Pivot columns in \( U \) are linearly independent of the columns to their left, and by extension, the original columns corresponding to these pivot positions in \( A \) are linearly independent and span the column space.

**Example:**

Let's find a basis for the column space of the same matrix:
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

We already found its REF:
$$
U = \begin{pmatrix}
1 & 2 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$

Identify pivot columns in \( U \):
The first column contains the pivot (the '1'). The second and third columns do not contain pivots.
So, the pivot column is the 1st column.

The corresponding column in the original matrix \( A \) is the first column.

Therefore, a basis for the column space of \( A \) is \( \{ \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \} \).

**Another Example:**

Let's consider a more complex matrix:
$$
B = \begin{pmatrix}
1 & 2 & 0 & 1 \\
2 & 4 & 1 & 3 \\
3 & 6 & 1 & 4
\end{pmatrix}
$$

Apply Gaussian elimination to find RREF:
*   \( R_2 \leftarrow R_2 - 2R_1 \)
*   \( R_3 \leftarrow R_3 - 3R_1 \)

$$
\begin{pmatrix}
1 & 2 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 1 & 1
\end{pmatrix}
$$

*   \( R_3 \leftarrow R_3 - R_2 \)

$$
\begin{pmatrix}
1 & 2 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$
This is REF. Let's continue to RREF for clarity on pivots. (If we were just finding REF, the process would stop here).
The first non-zero entry in row 1 is 1, in column 1.
The first non-zero entry in row 2 is 1, in column 3.
To get RREF, we need zeros above pivots. In this case, we already have them.

The pivot columns in the RREF are **Column 1** and **Column 3**.

**Basis for Row Space of \( B \):**
The non-zero rows of the REF/RREF are \( \begin{pmatrix} 1 & 2 & 0 & 1 \end{pmatrix} \) and \( \begin{pmatrix} 0 & 0 & 1 & 1 \end{pmatrix} \).
So, a basis for \( \text{Row}(B) \) is \( \{ \begin{pmatrix} 1 & 2 & 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 1 & 1 \end{pmatrix} \} \).

**Basis for Column Space of \( B \):**
The pivot columns in RREF are the 1st and 3rd columns.
The corresponding columns in the **original matrix \( B \)** are:
*   1st column: \( \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \)
*   3rd column: \( \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} \)

So, a basis for \( \text{Col}(B) \) is \( \{ \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} \} \).

## Key Takeaways

*   Gaussian elimination transforms a matrix into a simpler form (REF/RREF).
*   The non-zero rows of the REF/RREF form a basis for the **row space** of the original matrix.
*   The columns of the **original matrix** that correspond to the pivot columns of the REF/RREF form a basis for the **column space**.
*   The number of non-zero rows in the REF/RREF (or the number of pivot columns) is the **rank** of the matrix, which is the dimension of both the row space and the column space.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/basis-determination-using-row-operations|Basis determination using row operations]]
