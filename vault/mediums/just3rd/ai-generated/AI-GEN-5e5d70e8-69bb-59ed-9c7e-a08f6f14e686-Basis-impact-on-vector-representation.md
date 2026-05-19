---
type: "medium"
title: "How Changing Your Basis Changes How You See a Vector"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/vector-space/microskills/basis-impact-on-vector-representation|Basis impact on vector representation]]"
---
# How Changing Your Basis Changes How You See a Vector

Imagine you have a treasure map. The directions on the map are given in paces (how many steps you take) and turns (how many degrees you rotate). This is like one "basis" for giving directions. If you changed your map to use meters and radians for directions, the *actual location* of the treasure wouldn't change, but the *numbers* you use to describe the steps and turns would be different.

This is exactly what happens with vectors. A vector is just a direction and a magnitude. When we represent a vector using components (like coordinates on a graph), we're actually describing it *relative to a specific set of directions*. These directions are called a **basis**.

## What is a Basis?

In simpler terms, a basis is a set of **independent directions** that can be used to build *any* other direction or point in a given space. Think of it like the fundamental building blocks.

For example, in a 2D plane, we often use the standard basis:
*   **i**: A vector pointing directly along the positive x-axis, with a length of 1.
*   **j**: A vector pointing directly along the positive y-axis, with a length of 1.

Any vector in this 2D plane can be written as a combination of **i** and **j**. For instance, the vector that goes 3 units right and 2 units up can be represented as $$3\mathbf{i} + 2\mathbf{j}$$. We call the numbers (3 and 2) the **components** of the vector *in this specific basis*.

## The Impact of Choosing a Different Basis

What happens if we decide to use a different set of directions as our basis? Let's say we choose a new basis where:
*   **u**: A vector pointing diagonally up-right (like along the line y=x).
*   **v**: A vector pointing diagonally up-left (like along the line y=-x).

Now, if we want to represent the *same* physical vector (the one that still goes 3 units right and 2 units up), its components will change. We'd need to figure out how many **u** vectors and how many **v** vectors we need to combine to create that original vector.

Let's visualize this. Suppose our original vector is $$ \begin{pmatrix} 3 \\ 2 \end{pmatrix} $$ in the standard basis $$ \{ \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix} \} $$.

If we choose a new basis, say:
*   $$ \mathbf{u} = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$
*   $$ \mathbf{v} = \begin{pmatrix} -1 \\ 1 \end{pmatrix} $$

We are now looking for scalars $$ \alpha $$ and $$ \beta $$ such that:
$$ \alpha \mathbf{u} + \beta \mathbf{v} = \begin{pmatrix} 3 \\ 2 \end{pmatrix} $$

$$ \alpha \begin{pmatrix} 1 \\ 1 \end{pmatrix} + \beta \begin{pmatrix} -1 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \end{pmatrix} $$

This gives us a system of equations:
$$ \alpha - \beta = 3 $$
$$ \alpha + \beta = 2 $$

Adding the two equations:
$$ 2\alpha = 5 \implies \alpha = 2.5 $$

Substituting $$ \alpha = 2.5 $$ into the second equation:
$$ 2.5 + \beta = 2 \implies \beta = -0.5 $$

So, in our new basis $$ \{ \mathbf{u}, \mathbf{v} \} $$, the *same* physical vector is represented as $$ 2.5\mathbf{u} - 0.5\mathbf{v} $$. The components have changed from (3, 2) to (2.5, -0.5).

### Key Takeaway:

The **vector itself doesn't change**. What changes are its **components** and the **basis** used to describe it. The choice of basis affects how we "see" or "measure" the vector using coordinates.

## Why Does This Matter?

Understanding how bases affect vector representation is crucial for several reasons:

1.  **Simplifying Problems:** Sometimes, choosing a specific basis can make a complicated problem much simpler. For example, when dealing with rotations, choosing a basis aligned with the rotation can simplify calculations.
2.  **Data Representation:** In machine learning and data science, data is often represented as vectors. The "features" of your data can be thought of as a basis. Different feature sets (bases) can reveal different patterns in the data.
3.  **Understanding Transformations:** When you apply transformations (like rotations or stretches) to vectors, their components change. If you change the basis, the *way* these components change also changes, but the underlying geometric transformation remains the same.

## Standard Bases

For common vector spaces, we have standard bases that are widely used:

*   **2D Space ($$\mathbb{R}^2$$):**
    $$ \mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$
*   **3D Space ($$\mathbb{R}^3$$):**
    $$ \mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \quad \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \quad \mathbf{e}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} $$
*   **Higher Dimensions:** This pattern extends naturally. For $$ \mathbb{R}^n $$, the standard basis vectors $$ \mathbf{e}_i $$ have a 1 in the i-th position and 0s everywhere else.

These standard bases are convenient because they align with our usual Cartesian coordinate system, making visualization and initial calculations straightforward. However, as we've seen, other bases can be more advantageous depending on the problem.

## Supports

- [[skills/mathematics/vector-space/microskills/basis-impact-on-vector-representation|Basis impact on vector representation]]
