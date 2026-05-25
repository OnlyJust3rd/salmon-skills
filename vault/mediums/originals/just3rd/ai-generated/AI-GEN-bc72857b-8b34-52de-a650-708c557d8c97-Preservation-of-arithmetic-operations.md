---
type: "medium"
title: "How Linear Transformations Preserve Arithmetic Operations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/linear-transformations/microskills/preservation-of-arithmetic-operations|preservation-of-arithmetic-operations]]"
learning-time-in-minutes: 5
---
# How Linear Transformations Preserve Arithmetic Operations

Linear transformations are special functions that map vectors from one vector space to another. They have a fundamental property: they preserve the arithmetic operations of vector addition and scalar multiplication. This means that if you perform these operations on vectors *before* applying the transformation, you get the same result as if you apply the transformation to each vector *first* and then perform the operations.

This preservation is what makes linear transformations so powerful and predictable. Let's break down what this means.

## Understanding the Core Idea

Imagine you have two vectors, $\mathbf{u}$ and $\mathbf{v}$, and a linear transformation denoted by $T$.

1.  **Vector Addition:** If you add $\mathbf{u}$ and $\mathbf{v}$ together first, and then apply the transformation $T$ to their sum, you get the same result as if you apply $T$ to $\mathbf{u}$ and $T$ to $\mathbf{v}$ separately, and then add those transformed vectors.
    $$ T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}) $$
    This property is called **additivity**.

2.  **Scalar Multiplication:** If you multiply a vector $\mathbf{u}$ by a scalar (a number) $c$, and then apply the transformation $T$ to this scaled vector, you get the same result as if you apply $T$ to $\mathbf{u}$ first and then multiply the result by the scalar $c$.
    $$ T(c\mathbf{u}) = cT(\mathbf{u}) $$
    This property is called **homogeneity** (or scalar multiplication preservation).

These two properties, additivity and homogeneity, are the defining characteristics of a linear transformation. If a function from one vector space to another satisfies both, it's a linear transformation.

## Why Does This Matter?

The preservation of arithmetic operations simplifies many mathematical and computational tasks.

*   **Predictability:** It means we can break down complex operations into simpler ones. If we're transforming a sum of vectors, we can transform each vector individually.
*   **Algebraic Manipulation:** We can rearrange equations involving linear transformations. For example, we can move scalars outside the transformation or distribute the transformation over a sum.
*   **Geometric Interpretation:** Geometrically, linear transformations stretch, rotate, shear, or reflect space. The preservation of operations ensures that the relative positions and sizes of geometric objects are maintained in a structured way. For instance, the image of a parallelogram under a linear transformation will also be a parallelogram (or a line segment or a point, which are degenerate parallelograms).

## Let's Look at an Example

Consider a linear transformation $T$ from $\mathbb{R}^2$ to $\mathbb{R}^2$ defined by the matrix:
$$ A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} $$
A linear transformation defined by a matrix $A$ means that for any vector $\mathbf{x}$, $T(\mathbf{x}) = A\mathbf{x}$.

Let's pick two vectors:
$\mathbf{u} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\mathbf{v} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$.
Let's also pick a scalar $c = 4$.

### Checking Additivity: $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$

**Step 1: Calculate $\mathbf{u} + \mathbf{v}$**
$$ \mathbf{u} + \mathbf{v} = \begin{pmatrix} 1 \\ 2 \end{pmatrix} + \begin{pmatrix} 3 \\ -1 \end{pmatrix} = \begin{pmatrix} 1+3 \\ 2+(-1) \end{pmatrix} = \begin{pmatrix} 4 \\ 1 \end{pmatrix} $$

**Step 2: Apply $T$ to $(\mathbf{u} + \mathbf{v})$**
$$ T(\mathbf{u} + \mathbf{v}) = A(\mathbf{u} + \mathbf{v}) = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 4 \\ 1 \end{pmatrix} = \begin{pmatrix} (2 \times 4) + (1 \times 1) \\ (0 \times 4) + (3 \times 1) \end{pmatrix} = \begin{pmatrix} 8 + 1 \\ 0 + 3 \end{pmatrix} = \begin{pmatrix} 9 \\ 3 \end{pmatrix} $$

**Step 3: Apply $T$ to $\mathbf{u}$ and $T$ to $\mathbf{v}$ separately**
$$ T(\mathbf{u}) = A\mathbf{u} = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} (2 \times 1) + (1 \times 2) \\ (0 \times 1) + (3 \times 2) \end{pmatrix} = \begin{pmatrix} 2 + 2 \\ 0 + 6 \end{pmatrix} = \begin{pmatrix} 4 \\ 6 \end{pmatrix} $$
$$ T(\mathbf{v}) = A\mathbf{v} = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 3 \\ -1 \end{pmatrix} = \begin{pmatrix} (2 \times 3) + (1 \times -1) \\ (0 \times 3) + (3 \times -1) \end{pmatrix} = \begin{pmatrix} 6 - 1 \\ 0 - 3 \end{pmatrix} = \begin{pmatrix} 5 \\ -3 \end{pmatrix} $$

**Step 4: Add $T(\mathbf{u})$ and $T(\mathbf{v})$**
$$ T(\mathbf{u}) + T(\mathbf{v}) = \begin{pmatrix} 4 \\ 6 \end{pmatrix} + \begin{pmatrix} 5 \\ -3 \end{pmatrix} = \begin{pmatrix} 4+5 \\ 6+(-3) \end{pmatrix} = \begin{pmatrix} 9 \\ 3 \end{pmatrix} $$

**Result:** We see that $T(\mathbf{u} + \mathbf{v}) = \begin{pmatrix} 9 \\ 3 \end{pmatrix}$ and $T(\mathbf{u}) + T(\mathbf{v}) = \begin{pmatrix} 9 \\ 3 \end{pmatrix}$. They are equal, confirming additivity for these vectors.

### Checking Homogeneity: $T(c\mathbf{u}) = cT(\mathbf{u})$

**Step 1: Calculate $c\mathbf{u}$**
$$ c\mathbf{u} = 4 \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 4 \times 1 \\ 4 \times 2 \end{pmatrix} = \begin{pmatrix} 4 \\ 8 \end{pmatrix} $$

**Step 2: Apply $T$ to $(c\mathbf{u})$**
$$ T(c\mathbf{u}) = A(c\mathbf{u}) = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 4 \\ 8 \end{pmatrix} = \begin{pmatrix} (2 \times 4) + (1 \times 8) \\ (0 \times 4) + (3 \times 8) \end{pmatrix} = \begin{pmatrix} 8 + 8 \\ 0 + 24 \end{pmatrix} = \begin{pmatrix} 16 \\ 24 \end{pmatrix} $$

**Step 3: Calculate $cT(\mathbf{u})$**
We already found $T(\mathbf{u}) = \begin{pmatrix} 4 \\ 6 \end{pmatrix}$.
$$ cT(\mathbf{u}) = 4 \begin{pmatrix} 4 \\ 6 \end{pmatrix} = \begin{pmatrix} 4 \times 4 \\ 4 \times 6 \end{pmatrix} = \begin{pmatrix} 16 \\ 24 \end{pmatrix} $$

**Result:** We see that $T(c\mathbf{u}) = \begin{pmatrix} 16 \\ 24 \end{pmatrix}$ and $cT(\mathbf{u}) = \begin{pmatrix} 16 \\ 24 \end{pmatrix}$. They are equal, confirming homogeneity for this scalar and vector.

## Common Pitfalls

*   **Assuming Linearity:** Not all functions are linear. If a function does not satisfy both additivity and homogeneity, it is not a linear transformation, and you cannot rely on these preservation properties. For example, a function like $f(x) = x^2$ is not linear because $f(x+y) \neq f(x) + f(y)$ in general, and $f(cx) \neq c f(x)$.
*   **Confusing With Other Operations:** Be careful not to confuse scalar multiplication within the vector space with multiplying the result of the transformation by a scalar. They are related by homogeneity, but the order of operations matters conceptually.

## Key Takeaway

The preservation of vector addition and scalar multiplication is a cornerstone property of linear transformations. Understanding this allows you to predict how transformations will behave, simplify calculations, and manipulate expressions involving these powerful mathematical tools.

## Supports

- [[skills/mathematics/linear-algebra/linear-transformations/microskills/preservation-of-arithmetic-operations|Preservation of arithmetic operations]]
