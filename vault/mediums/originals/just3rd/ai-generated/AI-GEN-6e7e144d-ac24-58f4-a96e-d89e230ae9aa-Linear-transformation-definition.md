---
type: "medium"
title: "Understanding the Definition of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/linear-transformations/microskills/linear-transformation-definition|linear-transformation-definition]]"
learning-time-in-minutes: 5
---
# Understanding the Definition of a Linear Transformation

Welcome! In this lesson, we'll focus on the fundamental building block of our exploration into linear transformations: its definition. Understanding what a linear transformation *is* will be crucial as we move on to explore its properties and applications.

## What is a Linear Transformation?

At its core, a linear transformation is a special type of function or mapping between two vector spaces. These vector spaces could be spaces of real numbers, matrices, polynomials, or more abstract structures.

Think of a vector space as a collection of "things" (vectors) that you can add together and scale (multiply by a number). A linear transformation takes a vector from one of these spaces and maps it to a vector in another space, but it does so in a very structured way. This structure is what makes linear transformations so powerful and predictable.

### The Formal Definition

Let $$V$$ and $$W$$ be two vector spaces over the same field of scalars (usually the real numbers, denoted by $$ \mathbb{R} $$). A function $$ T: V \to W $$ is called a **linear transformation** if it satisfies two key properties for all vectors $$ \mathbf{u}, \mathbf{v} \in V $$ and any scalar $$ c \in \mathbb{R} $$:

1.  **Additivity:** $$ T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}) $$
    This means that transforming the sum of two vectors is the same as transforming each vector individually and then adding the results.

2.  **Homogeneity (or Scalar Multiplication):** $$ T(c\mathbf{u}) = cT(\mathbf{u}) $$
    This means that transforming a scaled vector is the same as scaling the transformed vector.

### Why is it Called "Linear"?

The term "linear" comes from the fact that these transformations preserve the fundamental operations of vector addition and scalar multiplication. If you imagine the vectors as points or arrows in space, a linear transformation essentially stretches, shrinks, rotates, or shears these spaces without "bending" or "breaking" the lines or planes. The grid lines in the original space will always map to straight lines or planes in the transformed space.

## Simple Examples

Let's look at a couple of straightforward examples to solidify this definition.

### Example 1: Transformation from $$ \mathbb{R}^2 $$ to $$ \mathbb{R}^2 $$

Consider a function $$ T: \mathbb{R}^2 \to \mathbb{R}^2 $$ defined by:
$$ T(\begin{pmatrix} x \\ y \end{pmatrix}) = \begin{pmatrix} 2x \\ 3y \end{pmatrix} $$

Let's check if this is a linear transformation:

**1. Additivity:**
Let $$ \mathbf{u} = \begin{pmatrix} x_1 \\ y_1 \end{pmatrix} $$ and $$ \mathbf{v} = \begin{pmatrix} x_2 \\ y_2 \end{pmatrix} $$.
Then $$ \mathbf{u} + \mathbf{v} = \begin{pmatrix} x_1 + x_2 \\ y_1 + y_2 \end{pmatrix} $$.

Applying $$T$$ to $$ \mathbf{u} + \mathbf{v} $$:
$$ T(\mathbf{u} + \mathbf{v}) = T\left(\begin{pmatrix} x_1 + x_2 \\ y_1 + y_2 \end{pmatrix}\right) = \begin{pmatrix} 2(x_1 + x_2) \\ 3(y_1 + y_2) \end{pmatrix} = \begin{pmatrix} 2x_1 + 2x_2 \\ 3y_1 + 3y_2 \end{pmatrix} $$

Now, let's transform $$ \mathbf{u} $$ and $$ \mathbf{v} $$ separately and add them:
$$ T(\mathbf{u}) = T\left(\begin{pmatrix} x_1 \\ y_1 \end{pmatrix}\right) = \begin{pmatrix} 2x_1 \\ 3y_1 \end{pmatrix} $$
$$ T(\mathbf{v}) = T\left(\begin{pmatrix} x_2 \\ y_2 \end{pmatrix}\right) = \begin{pmatrix} 2x_2 \\ 3y_2 \end{pmatrix} $$
$$ T(\mathbf{u}) + T(\mathbf{v}) = \begin{pmatrix} 2x_1 \\ 3y_1 \end{pmatrix} + \begin{pmatrix} 2x_2 \\ 3y_2 \end{pmatrix} = \begin{pmatrix} 2x_1 + 2x_2 \\ 3y_1 + 3y_2 \end{pmatrix} $$
Since $$ T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}) $$, the additivity property holds.

**2. Homogeneity:**
Let $$ c $$ be a scalar. Then $$ c\mathbf{u} = c\begin{pmatrix} x_1 \\ y_1 \end{pmatrix} = \begin{pmatrix} cx_1 \\ cy_1 \end{pmatrix} $$.

Applying $$T$$ to $$ c\mathbf{u} $$:
$$ T(c\mathbf{u}) = T\left(\begin{pmatrix} cx_1 \\ cy_1 \end{pmatrix}\right) = \begin{pmatrix} 2(cx_1) \\ 3(cy_1) \end{pmatrix} = \begin{pmatrix} c(2x_1) \\ c(3y_1) \end{pmatrix} $$

Now, let's transform $$ \mathbf{u} $$ and then scale the result:
$$ cT(\mathbf{u}) = c \begin{pmatrix} 2x_1 \\ 3y_1 \end{pmatrix} = \begin{pmatrix} c(2x_1) \\ c(3y_1) \end{pmatrix} $$
Since $$ T(c\mathbf{u}) = cT(\mathbf{u}) $$, the homogeneity property holds.

Because both properties are satisfied, $$ T(\begin{pmatrix} x \\ y \end{pmatrix}) = \begin{pmatrix} 2x \\ 3y \end{pmatrix} $$ is indeed a linear transformation. This transformation stretches the x-component by a factor of 2 and the y-component by a factor of 3.

### Example 2: A Non-Linear Transformation

Consider a function $$ S: \mathbb{R}^2 \to \mathbb{R}^2 $$ defined by:
$$ S\left(\begin{pmatrix} x \\ y \end{pmatrix}\right) = \begin{pmatrix} x^2 \\ y \end{pmatrix} $$

Let's check the additivity property with $$ \mathbf{u} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$ and $$ \mathbf{v} = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$.
$$ \mathbf{u} + \mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$

Applying $$S$$ to $$ \mathbf{u} + \mathbf{v} $$:
$$ S(\mathbf{u} + \mathbf{v}) = S\left(\begin{pmatrix} 1 \\ 1 \end{pmatrix}\right) = \begin{pmatrix} 1^2 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$

Now, let's transform $$ \mathbf{u} $$ and $$ \mathbf{v} $$ separately and add them:
$$ S(\mathbf{u}) = S\left(\begin{pmatrix} 1 \\ 0 \end{pmatrix}\right) = \begin{pmatrix} 1^2 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$
$$ S(\mathbf{v}) = S\left(\begin{pmatrix} 0 \\ 1 \end{pmatrix}\right) = \begin{pmatrix} 0^2 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$
$$ S(\mathbf{u}) + S(\mathbf{v}) = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$

In this specific case, additivity seems to hold for these particular vectors. However, the issue arises with the **squaring** operation. If we consider a different vector, say $$ \mathbf{w} = \begin{pmatrix} 2 \\ 0 \end{pmatrix} $$.
$$ S(\mathbf{w}) = \begin{pmatrix} 2^2 \\ 0 \end{pmatrix} = \begin{pmatrix} 4 \\ 0 \end{pmatrix} $$
But if we consider $$ \mathbf{w} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$, then:
$$ S(\begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 1 \\ 0 \end{pmatrix}) = S(\begin{pmatrix} 2 \\ 0 \end{pmatrix}) = \begin{pmatrix} 4 \\ 0 \end{pmatrix} $$
$$ S(\begin{pmatrix} 1 \\ 0 \end{pmatrix}) + S(\begin{pmatrix} 1 \\ 0 \end{pmatrix}) = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 0 \end{pmatrix} $$
Since $$ \begin{pmatrix} 4 \\ 0 \end{pmatrix} \neq \begin{pmatrix} 2 \\ 0 \end{pmatrix} $$, the additivity property fails. The squaring operation introduces non-linearity. This function $$ S $$ is not a linear transformation.

## Key Takeaway

The definition of a linear transformation hinges on its ability to respect the fundamental operations of vector spaces: addition and scalar multiplication. As we progress, remember these two properties, as they are the gateway to understanding how linear transformations behave and what makes them so valuable in mathematics and its applications.

In the next lesson, we will dive deeper into these properties (additivity and homogeneity) and see how they are the foundation for preserving arithmetic operations within vector spaces.

## Supports

- [[skills/mathematics/linear-algebra/linear-transformations/microskills/linear-transformation-definition|Linear transformation definition]]
