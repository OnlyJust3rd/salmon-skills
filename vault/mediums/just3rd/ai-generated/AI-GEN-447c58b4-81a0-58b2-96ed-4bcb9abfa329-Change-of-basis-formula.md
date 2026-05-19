---
type: "medium"
title: "Applying the Change of Basis Formula"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/vector-space/microskills/change-of-basis-formula|Change of basis formula]]"
---
# Applying the Change of Basis Formula

In linear algebra, understanding how vectors are represented is crucial. Vectors can be described using different sets of basis vectors. The **change of basis formula** allows us to convert the coordinates of a vector from one basis to another. This is a fundamental skill when working with vector spaces, enabling us to view the same vector from different perspectives.

## The Core Idea: Coordinate Transformation

Imagine you have a vector in a 2D plane. If you describe this vector using the standard basis vectors $$ \mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$ and $$ \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$, its coordinates are simply its components. However, you could choose a different set of basis vectors, say $$ \mathbf{v}_1 $$ and $$ \mathbf{v}_2 $$, which might be more convenient for a particular problem. The change of basis formula helps us find the coordinates of a vector with respect to these new basis vectors.

## The Change of Basis Formula

Let $$ B = \{ \mathbf{b}_1, \mathbf{b}_2, \dots, \mathbf{b}_n \} $$ be an ordered basis for a vector space $$ V $$, and let $$ B' = \{ \mathbf{b}'_1, \mathbf{b}'_2, \dots, \mathbf{b}'_n \} $$ be another ordered basis for $$ V $$.

Suppose we have a vector $$ \mathbf{v} \in V $$ with coordinates $$ [\mathbf{v}]_B = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix} $$ with respect to basis $$ B $$. This means:
$$ \mathbf{v} = c_1 \mathbf{b}_1 + c_2 \mathbf{b}_2 + \dots + c_n \mathbf{b}_n $$

We want to find the coordinates of $$ \mathbf{v} $$ with respect to basis $$ B' $$, denoted as $$ [\mathbf{v}]_{B'} = \begin{pmatrix} c'_1 \\ c'_2 \\ \vdots \\ c'_n \end{pmatrix} $$. This means:
$$ \mathbf{v} = c'_1 \mathbf{b}'_1 + c'_2 \mathbf{b}'_2 + \dots + c'_n \mathbf{b}'_n $$

To relate these two sets of coordinates, we can express each basis vector of $$ B $$ as a linear combination of the basis vectors of $$ B' $$. Let $$ P_{B' \leftarrow B} $$ be the **change-of-basis matrix** from basis $$ B $$ to basis $$ B' $$. The columns of $$ P_{B' \leftarrow B} $$ are the coordinate vectors of the basis vectors in $$ B $$ with respect to basis $$ B' $$. Specifically, if $$ [\mathbf{b}_j]_{B'} = \begin{pmatrix} p_{1j} \\ p_{2j} \\ \vdots \\ p_{nj} \end{pmatrix} $$, then:
$$ P_{B' \leftarrow B} = \begin{pmatrix} | & | & & | \\ [\mathbf{b}_1]_{B'} & [\mathbf{b}_2]_{B'} & \dots & [\mathbf{b}_n]_{B'} \\ | & | & & | \end{pmatrix} $$

The change of basis formula states:
$$ [\mathbf{v}]_{B'} = P_{B' \leftarrow B} [\mathbf{v}]_B $$

Conversely, if we have the change-of-basis matrix from $$ B' $$ to $$ B $$, denoted as $$ P_{B \leftarrow B'} $$, then:
$$ [\mathbf{v}]_B = P_{B \leftarrow B'} [\mathbf{v}]_{B'} $$
It's important to note that $$ P_{B \leftarrow B'} = (P_{B' \leftarrow B})^{-1} $$.

## Worked Example: 2D Plane

Let's consider the 2D plane $$ \mathbb{R}^2 $$.
Let the standard basis be $$ B = \{ \mathbf{e}_1, \mathbf{e}_2 \} $$, where $$ \mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$ and $$ \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$.
Let a new basis be $$ B' = \{ \mathbf{v}_1, \mathbf{v}_2 \} $$, where $$ \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$ and $$ \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix} $$.

Suppose we have a vector $$ \mathbf{u} $$ whose coordinates with respect to the standard basis $$ B $$ are $$ [\mathbf{u}]_B = \begin{pmatrix} 2 \\ 3 \end{pmatrix} $$. This means $$ \mathbf{u} = 2\mathbf{e}_1 + 3\mathbf{e}_2 = 2\begin{pmatrix} 1 \\ 0 \end{pmatrix} + 3\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix} $$.

We want to find the coordinates of $$ \mathbf{u} $$ with respect to the new basis $$ B' $$, i.e., $$ [\mathbf{u}]_{B'} $$.

**Step 1: Express the new basis vectors in terms of the standard basis.**
This is already given:
$$ \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} = 1\mathbf{e}_1 + 1\mathbf{e}_2 $$
$$ \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix} = 1\mathbf{e}_1 - 1\mathbf{e}_2 $$

**Step 2: Form the change-of-basis matrix from $$ B' $$ to $$ B $$.**
The columns of this matrix are the coordinate vectors of $$ \mathbf{v}_1 $$ and $$ \mathbf{v}_2 $$ with respect to the standard basis $$ B $$.
$$ P_{B \leftarrow B'} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} $$

**Step 3: Use the formula to find $$ [\mathbf{u}]_{B'} $$.**
We know $$ [\mathbf{u}]_B = P_{B \leftarrow B'} [\mathbf{u}]_{B'} $$. To find $$ [\mathbf{u}]_{B'} $$, we need to invert $$ P_{B \leftarrow B'} $$ to get $$ P_{B' \leftarrow B} $$.

First, find the inverse of $$ P_{B \leftarrow B'} $$. For a 2x2 matrix $$ \begin{pmatrix} a & b \\ c & d \end{pmatrix} $$, the inverse is $$ \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} $$.
$$ \det(P_{B \leftarrow B'}) = (1)(-1) - (1)(1) = -1 - 1 = -2 $$
$$ P_{B \leftarrow B'}^{-1} = \frac{1}{-2} \begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix} $$
So, $$ P_{B' \leftarrow B} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix} $$.

Now, apply the formula:
$$ [\mathbf{u}]_{B'} = P_{B' \leftarrow B} [\mathbf{u}]_B $$
$$ [\mathbf{u}]_{B'} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix} \begin{pmatrix} 2 \\ 3 \end{pmatrix} $$
$$ [\mathbf{u}]_{B'} = \begin{pmatrix} (1/2)(2) + (1/2)(3) \\ (1/2)(2) + (-1/2)(3) \end{pmatrix} $$
$$ [\mathbf{u}]_{B'} = \begin{pmatrix} 1 + 1.5 \\ 1 - 1.5 \end{pmatrix} $$
$$ [\mathbf{u}]_{B'} = \begin{pmatrix} 2.5 \\ -0.5 \end{pmatrix} $$

Therefore, the coordinates of vector $$ \mathbf{u} $$ with respect to the basis $$ B' = \{ \mathbf{v}_1, \mathbf{v}_2 \} $$ are $$ [2.5, -0.5] $$.
Let's check:
$$ 2.5 \mathbf{v}_1 + (-0.5) \mathbf{v}_2 = 2.5 \begin{pmatrix} 1 \\ 1 \end{pmatrix} - 0.5 \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2.5 \\ 2.5 \end{pmatrix} - \begin{pmatrix} 0.5 \\ -0.5 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix} $$
This matches the original vector $$ \mathbf{u} $$.

## Key Takeaways

*   The change of basis formula allows us to represent a vector in terms of different bases.
*   The change-of-basis matrix's columns are the coordinate vectors of the old basis vectors with respect to the new basis.
*   The formula is $$ [\mathbf{v}]_{B_{new}} = P_{B_{new} \leftarrow B_{old}} [\mathbf{v}]_{B_{old}} $$.
*   Understanding how to construct and invert change-of-basis matrices is essential.

## Supports

- [[skills/mathematics/vector-space/microskills/change-of-basis-formula|Change of basis formula]]
