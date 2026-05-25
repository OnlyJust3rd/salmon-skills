---
type: "medium"
title: "Orthogonality Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthogonality-definition|orthogonality-definition]]"
learning-time-in-minutes: 3
---
# Orthogonality Definition

Welcome to this lesson on the definition of orthogonality. Understanding orthogonality is a fundamental step in grasping the concepts of subspaces and how vectors relate to each other in a geometric sense.

### What is Orthogonality?

In simple terms, two vectors are orthogonal if they are perpendicular to each other. Think of the x-axis and y-axis on a standard 2D graph. They are at a 90-degree angle, making them orthogonal.

This geometric intuition extends to higher dimensions and is crucial in linear algebra.

### The Mathematical Definition

The most common way to define orthogonality between two vectors is through their **dot product** (also known as the scalar product or inner product).

Let's consider two vectors, $\mathbf{u}$ and $\mathbf{v}$. In component form, we can represent them as:

$$
\mathbf{u} = \begin{pmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{pmatrix} \quad \text{and} \quad \mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}
$$

The dot product of $\mathbf{u}$ and $\mathbf{v}$ is calculated by multiplying their corresponding components and summing the results:

$$
\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \cdots + u_nv_n
$$

**The key definition is:**

> Two vectors $\mathbf{u}$ and $\mathbf{v}$ are orthogonal if and only if their dot product is zero.
> $$
> \mathbf{u} \cdot \mathbf{v} = 0
> $$

This means that if the dot product of two vectors equals zero, they are perpendicular.

### Why is the Dot Product Zero for Perpendicular Vectors?

The dot product is related to the angle between two vectors. Specifically, if $\theta$ is the angle between $\mathbf{u}$ and $\mathbf{v}$, then:

$$
\mathbf{u} \cdot \mathbf{v} = ||\mathbf{u}|| \cdot ||\mathbf{v}|| \cos(\theta)
$$

where $||\mathbf{u}||$ and $||\mathbf{v}||$ are the magnitudes (lengths) of the vectors.

For the dot product to be zero, either one of the magnitudes must be zero (which means we have the zero vector, and orthogonality with the zero vector is a special case), or $\cos(\theta)$ must be zero. The cosine of an angle is zero when the angle is $90^\circ$ (or $\frac{\pi}{2}$ radians), which is precisely the angle for perpendicular lines.

### Examples

Let's look at some examples to solidify this definition.

**Example 1: Orthogonal Vectors**

Consider the vectors in 2D:
$$
\mathbf{a} = \begin{pmatrix} 2 \\ 3 \end{pmatrix} \quad \text{and} \quad \mathbf{b} = \begin{pmatrix} -3 \\ 2 \end{pmatrix}
$$

Let's calculate their dot product:
$$
\mathbf{a} \cdot \mathbf{b} = (2)(-3) + (3)(2) = -6 + 6 = 0
$$
Since the dot product is 0, vectors $\mathbf{a}$ and $\mathbf{b}$ are orthogonal.

**Example 2: Non-Orthogonal Vectors**

Consider the vectors in 3D:
$$
\mathbf{c} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \quad \text{and} \quad \mathbf{d} = \begin{pmatrix} 4 \\ -1 \\ 0 \end{pmatrix}
$$

Let's calculate their dot product:
$$
\mathbf{c} \cdot \mathbf{d} = (1)(4) + (2)(-1) + (3)(0) = 4 - 2 + 0 = 2
$$
Since the dot product is 2 (not 0), vectors $\mathbf{c}$ and $\mathbf{d}$ are not orthogonal.

**Example 3: Orthogonality with the Zero Vector**

The zero vector, denoted as $\mathbf{0}$, has all its components as zero. For any vector $\mathbf{v}$, the dot product with the zero vector is always zero:

$$
\mathbf{v} \cdot \mathbf{0} = v_1 \cdot 0 + v_2 \cdot 0 + \cdots + v_n \cdot 0 = 0
$$
Therefore, the zero vector is orthogonal to every vector in the space.

### Key Takeaways

*   **Orthogonal** means perpendicular.
*   Two vectors are orthogonal if their **dot product is zero**.
*   The dot product is calculated by summing the products of corresponding components.
*   The zero vector is orthogonal to all vectors.

Understanding this definition is the first step towards exploring more advanced concepts like orthogonal sets of vectors and orthogonal bases, which are fundamental in many areas of mathematics, science, and engineering.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthogonality-definition|Orthogonality definition]]
