---
type: "medium"
title: "Determining the Nullity of a Matrix"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/subspaces-and-orthogonality/microskills/nullity-determination|Nullity determination]]"
---
# Determining the Nullity of a Matrix

This lesson focuses on a crucial aspect of understanding linear transformations and matrices: determining the nullity. As you've learned, the null space (or kernel) of a matrix is the set of all vectors that, when multiplied by the matrix, result in the zero vector. The nullity is simply the dimension of this null space. Knowing the nullity is vital for understanding the "loss of information" a linear transformation might cause and for solving systems of linear equations.

## What is Nullity?

In simpler terms, the nullity of a matrix \(A\) is the number of "free variables" you have when you solve the homogeneous system \(A\mathbf{x} = \mathbf{0}\).

### Key Concept: The Null Space

Let \(A\) be an \(m \times n\) matrix. The null space of \(A\), denoted as \(N(A)\) or \(\text{null}(A)\), is the set of all vectors \(\mathbf{x}\) in \(\mathbb{R}^n\) such that \(A\mathbf{x} = \mathbf{0}\).
$$N(A) = \{\mathbf{x} \in \mathbb{R}^n \mid A\mathbf{x} = \mathbf{0}\}$$

### Definition: Nullity

The nullity of \(A\), denoted as \(\text{nullity}(A)\), is the dimension of the null space of \(A\).
$$\text{nullity}(A) = \dim(N(A))$$

This dimension corresponds to the number of linearly independent vectors that form a basis for the null space.

## How to Determine Nullity

The most direct way to find the nullity of a matrix is to find a basis for its null space and then count the number of vectors in that basis. This involves solving the homogeneous system of linear equations \(A\mathbf{x} = \mathbf{0}\).

### Step-by-Step Procedure

1.  **Form the Augmented Matrix:** Create an augmented matrix \([A \mid \mathbf{0}]\), where \(\mathbf{0}\) is the zero vector of appropriate dimensions.
2.  **Row Reduce to Echelon Form:** Perform Gaussian elimination to transform the augmented matrix into its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). RREF is generally preferred as it simplifies the identification of free variables.
3.  **Identify Pivot and Free Variables:** In the RREF, columns with leading 1s correspond to pivot variables. Columns without leading 1s correspond to free variables.
4.  **Express Pivot Variables in Terms of Free Variables:** Write out the system of equations represented by the RREF. Express each pivot variable as a linear combination of the free variables.
5.  **Write the General Solution:** Construct the general solution vector \(\mathbf{x}\) by expressing each component in terms of the free variables.
6.  **Extract Basis Vectors:** Factor out the free variables from the general solution. The vectors multiplying each free variable form a basis for the null space.
7.  **Count the Basis Vectors:** The number of vectors in this basis is the nullity of the matrix.

### Worked Example

Let's find the nullity of the matrix \(A\):
$$ A = \begin{pmatrix} 1 & 2 & 3 & 0 \\ 2 & 4 & 6 & 0 \\ 3 & 6 & 9 & 0 \end{pmatrix} $$

**Step 1 & 2: Form Augmented Matrix and Row Reduce**

We form the augmented matrix and row reduce it:
$$ [A \mid \mathbf{0}] = \begin{pmatrix} 1 & 2 & 3 & 0 & | & 0 \\ 2 & 4 & 6 & 0 & | & 0 \\ 3 & 6 & 9 & 0 & | & 0 \end{pmatrix} $$
Subtract 2 times Row 1 from Row 2 (\(R_2 \leftarrow R_2 - 2R_1\)) and 3 times Row 1 from Row 3 (\(R_3 \leftarrow R_3 - 3R_1\)):
$$ \begin{pmatrix} 1 & 2 & 3 & 0 & | & 0 \\ 0 & 0 & 0 & 0 & | & 0 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix} $$
This matrix is already in RREF.

**Step 3: Identify Pivot and Free Variables**

The variables are \(x_1, x_2, x_3, x_4\).
The first column has a leading 1, so \(x_1\) is a pivot variable.
The second, third, and fourth columns do not have leading 1s, so \(x_2, x_3, x_4\) are free variables.

**Step 4: Express Pivot Variables in Terms of Free Variables**

From the RREF, we have the equation:
\(x_1 + 2x_2 + 3x_3 = 0\)
We can express \(x_1\) in terms of the free variables:
\(x_1 = -2x_2 - 3x_3\)

**Step 5: Write the General Solution**

The general solution vector \(\mathbf{x}\) is:
$$ \mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} -2x_2 - 3x_3 \\ x_2 \\ x_3 \\ 0 \end{pmatrix} $$
Note that \(x_4\) is a free variable that doesn't appear in the equation for \(x_1\), so it can be any real number. We can rewrite \(\mathbf{x}\) by separating terms involving each free variable:
$$ \mathbf{x} = x_2 \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + x_3 \begin{pmatrix} -3 \\ 0 \\ 1 \\ 0 \end{pmatrix} + x_4 \begin{pmatrix} 0 \\ 0 \\ 0 \\ 1 \end{pmatrix} $$

**Step 6: Extract Basis Vectors**

The vectors multiplying the free variables \(x_2, x_3, x_4\) form a basis for the null space:
$$ \mathbf{v}_1 = \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} -3 \\ 0 \\ 1 \\ 0 \end{pmatrix}, \quad \mathbf{v}_3 = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 1 \end{pmatrix} $$
These vectors are linearly independent and span the null space of \(A\).

**Step 7: Count the Basis Vectors**

There are 3 vectors in the basis for the null space.
Therefore, the nullity of matrix \(A\) is 3.
$$\text{nullity}(A) = 3$$

## Connection to Rank

There's a fundamental theorem in linear algebra called the **Rank-Nullity Theorem**. For an \(m \times n\) matrix \(A\), it states:
$$\text{rank}(A) + \text{nullity}(A) = n$$
where \(n\) is the number of columns of \(A\).

The rank of a matrix is the dimension of its column space (or row space). This theorem provides a powerful shortcut: if you can find the rank of a matrix, you can immediately determine its nullity (and vice-versa) without explicitly finding the basis for the null space.

In our example above, the RREF had one non-zero row. Thus, the rank of \(A\) is 1. Since \(A\) has 4 columns (\(n=4\)), according to the Rank-Nullity Theorem:
\(\text{rank}(A) + \text{nullity}(A) = 4\)
\(1 + \text{nullity}(A) = 4\)
\(\text{nullity}(A) = 3\)
This confirms our result!

## Practice Problems

1.  Find the nullity of the matrix \(B = \begin{pmatrix} 1 & -1 & 2 \\ 2 & -2 & 4 \\ -1 & 1 & -2 \end{pmatrix}\).
2.  Find the nullity of the matrix \(C = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}\).
3.  What is the nullity of the zero matrix \(0_{3 \times 4}\) (a 3x4 matrix of all zeros)?

By practicing these steps, you'll become adept at calculating the nullity, a key skill in understanding the fundamental subspaces of matrices.

## Supports

- [[skills/mathematics/subspaces-and-orthogonality/microskills/nullity-determination|Nullity determination]]
