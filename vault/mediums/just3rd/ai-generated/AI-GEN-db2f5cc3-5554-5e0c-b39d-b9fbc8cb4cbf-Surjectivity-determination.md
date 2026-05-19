---
type: "medium"
title: "Determining Surjectivity using the Range"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/linear-transformations/microskills/surjectivity-determination|Surjectivity determination]]"
---
# Determining Surjectivity using the Range

In the previous lessons, we've explored the fundamental properties of linear transformations, including their kernel and range. Understanding these components is crucial for a comprehensive analysis of how transformations map vector spaces. This lesson focuses on a specific application: **determining if a linear transformation is surjective (or "onto") by examining its range.**

## What is Surjectivity?

A linear transformation $$ T: V \to W $$ is **surjective** if its range is equal to its codomain, $$ W $$. In simpler terms, for *every* vector $$ \mathbf{w} $$ in the codomain $$ W $$, there exists *at least one* vector $$ \mathbf{v} $$ in the domain $$ V $$ such that $$ T(\mathbf{v}) = \mathbf{w} $$.

If a transformation is not surjective, it means there are some vectors in the codomain that cannot be "reached" by the transformation from any vector in the domain.

## The Range and Surjectivity: The Connection

The **range** of a linear transformation $$ T $$ is the set of all possible output vectors. We denote it as $$ \text{Range}(T) $$ or $$ \text{Im}(T) $$. Mathematically, $$ \text{Range}(T) = \{ T(\mathbf{v}) \mid \mathbf{v} \in V \} $$.

The key to determining surjectivity lies here:

> **A linear transformation $$ T: V \to W $$ is surjective if and only if $$ \text{Range}(T) = W $$.**

This means that to check if $$ T $$ is surjective, we need to:

1.  **Compute the range of $$ T $$.**
2.  **Compare the range with the codomain $$ W $$.**

If the set of all output vectors spans the entire codomain, the transformation is surjective.

## How to Determine Surjectivity

Let's consider how we can practically apply this. Often, linear transformations are represented by matrices. Suppose we have a linear transformation $$ T: \mathbb{R}^n \to \mathbb{R}^m $$ represented by an $$ m \times n $$ matrix $$ A $$. For any vector $$ \mathbf{x} \in \mathbb{R}^n $$, $$ T(\mathbf{x}) = A\mathbf{x} $$.

The range of $$ T $$ is the column space of the matrix $$ A $$, denoted $$ \text{Col}(A) $$. The column space is the span of the columns of $$ A $$.

Therefore, for a matrix transformation $$ T(\mathbf{x}) = A\mathbf{x} $$ where $$ A $$ is an $$ m \times n $$ matrix mapping from $$ \mathbb{R}^n $$ to $$ \mathbb{R}^m $$, the transformation is surjective if and only if:

$$ \text{Col}(A) = \mathbb{R}^m $$

This condition means that the columns of $$ A $$ must span $$ \mathbb{R}^m $$.

### Practical Check Using Rank

Recall that the **rank** of a matrix $$ A $$ (denoted $$ \text{rank}(A) $$) is the dimension of its column space (and also its row space). If $$ A $$ is an $$ m \times n $$ matrix:

*   $$ \text{rank}(A) = \dim(\text{Col}(A)) $$

For $$ T: \mathbb{R}^n \to \mathbb{R}^m $$ to be surjective, we need $$ \text{Col}(A) = \mathbb{R}^m $$. The dimension of $$ \mathbb{R}^m $$ is $$ m $$. So, surjectivity requires:

$$ \dim(\text{Col}(A)) = m $$
$$ \text{rank}(A) = m $$

This gives us a powerful and direct way to check for surjectivity:

> **A linear transformation $$ T: \mathbb{R}^n \to \mathbb{R}^m $$ represented by an $$ m \times n $$ matrix $$ A $$ is surjective if and only if $$ \text{rank}(A) = m $$.**

This is also directly related to the number of pivot positions in the row-echelon form of $$ A $$. If the number of pivots equals $$ m $$ (the number of rows, which is the dimension of the codomain), then the columns span $$ \mathbb{R}^m $$, and the transformation is surjective.

## Worked Example

Let's consider the linear transformation $$ T: \mathbb{R}^2 \to \mathbb{R}^3 $$ defined by $$ T(\mathbf{x}) = A\mathbf{x} $$, where $$ A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} $$.

Here, $$ n=2 $$ (dimension of the domain $$ \mathbb{R}^2 $$) and $$ m=3 $$ (dimension of the codomain $$ \mathbb{R}^3 $$).

To determine if $$ T $$ is surjective, we need to check if $$ \text{rank}(A) = m $$, which means $$ \text{rank}(A) = 3 $$.

Let's find the rank of $$ A $$ by row-reducing it to its row-echelon form:

$$ A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} $$

Perform row operations:
1.  $$ R_2 \leftarrow R_2 - 3R_1 $$
2.  $$ R_3 \leftarrow R_3 - 5R_1 $$

$$ \begin{pmatrix} 1 & 2 \\ 0 & -2 \\ 0 & -4 \end{pmatrix} $$

Now, continue:
3.  $$ R_2 \leftarrow -\frac{1}{2}R_2 $$
4.  $$ R_3 \leftarrow R_3 - 2R_2 $$ (after step 3)

After $$ R_2 \leftarrow -\frac{1}{2}R_2 $$:
$$ \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 0 & -4 \end{pmatrix} $$

Now, $$ R_3 \leftarrow R_3 + 4R_2 $$:
$$ \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} $$

This is in row-echelon form. The number of non-zero rows (or pivot positions) is 2.
So, $$ \text{rank}(A) = 2 $$.

Our codomain is $$ \mathbb{R}^3 $$, which has a dimension of $$ m=3 $$.
Since $$ \text{rank}(A) = 2 \neq 3 $$, the columns of $$ A $$ do not span $$ \mathbb{R}^3 $$.
Therefore, the linear transformation $$ T $$ is **not surjective**.

This means there are vectors in $$ \mathbb{R}^3 $$ that cannot be produced as outputs by $$ T $$ for any input from $$ \mathbb{R}^2 $$. The range of $$ T $$ is a 2-dimensional subspace of $$ \mathbb{R}^3 $$.

## Another Example: A Surjective Transformation

Consider $$ T: \mathbb{R}^2 \to \mathbb{R}^2 $$ defined by $$ T(\mathbf{x}) = A\mathbf{x} $$, where $$ A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} $$.

Here, $$ n=2 $$ and $$ m=2 $$.
We need to check if $$ \text{rank}(A) = m = 2 $$.

The matrix $$ A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} $$ is already in row-echelon form.
It has two non-zero rows.
So, $$ \text{rank}(A) = 2 $$.

Since $$ \text{rank}(A) = 2 = m $$, the transformation $$ T $$ **is surjective**.
This means that for any vector $$ \begin{pmatrix} b_1 \\ b_2 \end{pmatrix} $$ in $$ \mathbb{R}^2 $$, there is a vector $$ \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} $$ in $$ \mathbb{R}^2 $$ such that $$ T(\mathbf{x}) = \begin{pmatrix} b_1 \\ b_2 \end{pmatrix} $$.

## Summary

Determining surjectivity is a direct application of understanding the range of a linear transformation.

*   A transformation $$ T: V \to W $$ is surjective if its range $$ \text{Range}(T) $$ is equal to its codomain $$ W $$.
*   For matrix transformations $$ T: \mathbb{R}^n \to \mathbb{R}^m $$ represented by $$ T(\mathbf{x}) = A\mathbf{x} $$, surjectivity is equivalent to $$ \text{rank}(A) = m $$.
*   This means the number of pivot positions in the row-echelon form of $$ A $$ must equal the dimension of the codomain.

## Supports

- [[skills/mathematics/linear-transformations/microskills/surjectivity-determination|Surjectivity determination]]
