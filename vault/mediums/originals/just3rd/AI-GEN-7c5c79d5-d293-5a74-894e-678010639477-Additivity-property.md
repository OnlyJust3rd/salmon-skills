---
type: "medium"
title: "Understanding the Additivity Property of Linear Transformations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/linear-transformations/microskills/additivity-property|additivity-property]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/linear-transformations/linear-transformations|linear-transformations]]"
learning-time-in-minutes: 4
---
# Understanding the Additivity Property of Linear Transformations

In the realm of linear transformations, we're exploring how functions manipulate vectors in a way that respects the underlying vector space structure. One of the fundamental pillars of this structure is the **additivity property**. This property tells us something crucial about how a linear transformation behaves when dealing with the *sum* of two vectors.

## What is Additivity?

At its core, the additivity property states that for any two vectors, let's call them $u$ and $v$, within a vector space, applying a linear transformation $T$ to their sum is the same as applying the transformation to each vector individually and then summing the results.

Mathematically, we express this as:

$$ T(u + v) = T(u) + T(v) $$

Think of it like this: if you have two ingredients ($u$ and $v$) and you combine them before cooking (applying the transformation $T$), the final dish should taste the same as if you cooked each ingredient separately and then combined them. The transformation $T$ doesn't care about the order of operations when it comes to vector addition.

## Why is Additivity Important?

Additivity is one of the two defining properties of a linear transformation (the other being homogeneity, which we'll touch on briefly later). Without additivity, a transformation wouldn't be considered "linear."

This property is incredibly powerful because it allows us to:

*   **Simplify calculations:** If we need to transform a sum of many vectors, we can break it down into transforming each vector individually, which can often be easier.
*   **Understand the behavior of transformations:** It tells us that linear transformations preserve vector addition. If you add vectors in the input space, their images in the output space will also be added in the same way.
*   **Build complex transformations from simpler ones:** Many complex linear transformations can be understood as combinations of simpler transformations. Additivity helps us see how these pieces fit together.

## A Practical Example

Let's consider a simple linear transformation $T$ from $\mathbb{R}^2$ to $\mathbb{R}^2$ defined by:

$$ T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x \\ y \end{pmatrix} $$

This transformation doubles the x-component of a vector and leaves the y-component unchanged.

Now, let's pick two vectors in $\mathbb{R}^2$:

$u = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$
$v = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$

Let's test the additivity property:

**Step 1: Calculate $T(u + v)$**

First, find the sum of the vectors $u$ and $v$:
$u + v = \begin{pmatrix} 1 \\ 3 \end{pmatrix} + \begin{pmatrix} 4 \\ 2 \end{pmatrix} = \begin{pmatrix} 1+4 \\ 3+2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$

Now, apply the transformation $T$ to this sum:
$T(u + v) = T\begin{pmatrix} 5 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 \times 5 \\ 5 \end{pmatrix} = \begin{pmatrix} 10 \\ 5 \end{pmatrix}$

**Step 2: Calculate $T(u) + T(v)$**

Now, let's transform each vector individually:
$T(u) = T\begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \times 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$

$T(v) = T\begin{pmatrix} 4 \\ 2 \end{pmatrix} = \begin{pmatrix} 2 \times 4 \\ 2 \end{pmatrix} = \begin{pmatrix} 8 \\ 2 \end{pmatrix}$

Finally, add the transformed vectors:
$T(u) + T(v) = \begin{pmatrix} 2 \\ 3 \end{pmatrix} + \begin{pmatrix} 8 \\ 2 \end{pmatrix} = \begin{pmatrix} 2+8 \\ 3+2 \end{pmatrix} = \begin{pmatrix} 10 \\ 5 \end{pmatrix}$

**Step 3: Compare the results**

We found that:
$T(u + v) = \begin{pmatrix} 10 \\ 5 \end{pmatrix}$
$T(u) + T(v) = \begin{pmatrix} 10 \\ 5 \end{pmatrix}$

The results are identical! This demonstrates that our transformation $T$ satisfies the additivity property for these specific vectors.

## The Other Half: Homogeneity

While additivity concerns the sum of vectors, linear transformations also possess the **homogeneity property**. This property states that scaling a vector by a scalar $c$ before transforming it is the same as transforming the vector and then scaling the result:

$$ T(c \cdot v) = c \cdot T(v) $$

Together, additivity and homogeneity are the defining characteristics of a linear transformation. A function is linear *if and only if* it satisfies both of these properties for all vectors and all scalars in their respective spaces.

## In Summary

The additivity property, $T(u + v) = T(u) + T(v)$, is a cornerstone of linear transformations. It signifies that these transformations "play nicely" with vector addition, allowing us to break down complex operations and understand how transformations preserve the additive structure of vector spaces. Mastering this property is a key step in understanding the behavior and applications of linear transformations.

## Supports

- [[skills/mathematics/linear-algebra/linear-transformations/microskills/additivity-property|Additivity property]]
