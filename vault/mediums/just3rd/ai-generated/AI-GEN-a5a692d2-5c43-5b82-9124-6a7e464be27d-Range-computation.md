---
type: "medium"
title: "Calculating the Range of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/subspaces-and-orthogonality/microskills/range-computation|Range computation]]"
---
# Calculating the Range of a Linear Transformation

This lesson focuses on a key aspect of understanding linear transformations: their range. The range, also known as the column space or image, is the set of all possible output vectors a linear transformation can produce.

## What is the Range?

For a linear transformation $T: V \to W$, where $V$ and $W$ are vector spaces, the range of $T$ is the set of all vectors in $W$ that can be expressed as $T(\mathbf{v})$ for some vector $\mathbf{v}$ in $V$. Mathematically, this is written as:

$$ \text{Range}(T) = \{ T(\mathbf{v}) \mid \mathbf{v} \in V \} $$

If the linear transformation is represented by a matrix $A$, then the range of the transformation $T(\mathbf{x}) = A\mathbf{x}$ is precisely the column space of matrix $A$.

### Key Idea: Range and Column Space

The range of a linear transformation is fundamentally linked to the column space of its associated matrix. The column space is the span of the columns of the matrix.

## How to Compute the Range

When given a linear transformation defined by a matrix $A$, the most direct way to compute its range is to find the column space of $A$.

### Steps to Compute the Range (Column Space)

1.  **Identify the matrix:** If the linear transformation is given as $T(\mathbf{x}) = A\mathbf{x}$, identify the matrix $A$.
2.  **Extract the columns:** List the column vectors of matrix $A$.
3.  **Find a basis for the column space:** Determine a set of linearly independent vectors that span the column space. This is achieved by finding the pivot columns of the matrix $A$ after reducing it to its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). The original columns of $A$ corresponding to the pivot columns in the REF/RREF form a basis for the column space.
4.  **Express the range:** The range is the span of this basis.

## Worked Example

Let's consider a linear transformation $T: \mathbb{R}^3 \to \mathbb{R}^2$ defined by the matrix:

$$ A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{bmatrix} $$

We want to find the range of $T$.

**Step 1: Identify the matrix.**
The matrix is $A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{bmatrix}$.

**Step 2: Extract the columns.**
The columns are $\begin{bmatrix} 1 \\ 2 \end{bmatrix}$, $\begin{bmatrix} 2 \\ 4 \end{bmatrix}$, and $\begin{bmatrix} 3 \\ 6 \end{bmatrix}$.

**Step 3: Find a basis for the column space.**
We need to find the pivot columns of $A$. Let's reduce $A$ to Row Echelon Form (REF):

$$ \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{bmatrix} \xrightarrow{R_2 \leftarrow R_2 - 2R_1} \begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \end{bmatrix} $$

The first column is a pivot column. The second and third columns are not pivot columns.
The pivot column in the REF corresponds to the **first column** of the original matrix $A$.

Therefore, a basis for the column space of $A$ (which is the range of $T$) is the first column of $A$:

$$ \left\{ \begin{bmatrix} 1 \\ 2 \end{bmatrix} \right\} $$

**Step 4: Express the range.**
The range of $T$ is the span of this basis vector. Any vector in the range can be written as a scalar multiple of $\begin{bmatrix} 1 \\ 2 \end{bmatrix}$.

$$ \text{Range}(T) = \text{span}\left\{ \begin{bmatrix} 1 \\ 2 \end{bmatrix} \right\} = \left\{ c \begin{bmatrix} 1 \\ 2 \end{bmatrix} \mid c \in \mathbb{R} \right\} $$

This means the range is the line in $\mathbb{R}^2$ passing through the origin and the point (1, 2).

## Dimension of the Range (Rank)

The dimension of the range of a linear transformation is called its **rank**. The rank is equal to the number of pivot columns in the matrix, or equivalently, the dimension of the column space.

In our example, the basis for the range has one vector. Therefore, the rank of the linear transformation $T$ is 1.

$$ \text{rank}(T) = \dim(\text{Range}(T)) = 1 $$

## Common Mistakes and Pitfalls

*   **Confusing original columns with pivot columns:** Remember that the basis for the column space consists of the *original* columns of the matrix that correspond to the pivot columns in its REF/RREF.
*   **Not reducing to REF/RREF correctly:** Errors in row operations will lead to incorrect identification of pivot columns and thus an incorrect basis for the range.
*   **Assuming all columns are part of the basis:** Only the columns corresponding to pivots in the echelon form are linearly independent and form the basis for the column space.

By understanding the relationship between the range of a linear transformation and the column space of its matrix, and by correctly applying the process of finding pivot columns, you can effectively compute the range and its dimension.

## Supports

- [[skills/mathematics/subspaces-and-orthogonality/microskills/range-computation|Range computation]]
