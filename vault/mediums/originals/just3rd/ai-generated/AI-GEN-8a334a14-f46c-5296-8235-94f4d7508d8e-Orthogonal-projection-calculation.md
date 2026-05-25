---
type: "medium"
title: "Calculating Orthogonal Projections of Vectors"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/vector/microskills/orthogonal-projection-calculation|orthogonal-projection-calculation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/vector/vector|vector]]"
learning-time-in-minutes: 4
---
# Calculating Orthogonal Projections of Vectors

This lesson focuses on a specific skill within performing vector calculations: computing the orthogonal projection of one vector onto another. This is a fundamental operation in various fields, including physics, computer graphics, and linear algebra.

## What is an Orthogonal Projection?

Imagine you have a vector $\mathbf{v}$ and you want to find out "how much" of $\mathbf{v}$ lies in the direction of another vector $\mathbf{u}$. The orthogonal projection of $\mathbf{v}$ onto $\mathbf{u}$ is a new vector that represents this component of $\mathbf{v}$ along the line defined by $\mathbf{u}$. It's like shining a light directly onto the line of $\mathbf{u}$ from the tip of $\mathbf{v}$ and seeing the shadow cast by $\mathbf{v}$ on that line.

Mathematically, the orthogonal projection of vector $\mathbf{v}$ onto vector $\mathbf{u}$ (denoted as $\text{proj}_{\mathbf{u}} \mathbf{v}$) is a vector that is parallel to $\mathbf{u}$.

## The Formula for Orthogonal Projection

The formula for the orthogonal projection of $\mathbf{v}$ onto $\mathbf{u}$ is derived using the dot product and the unit vector in the direction of $\mathbf{u}$.

$$
\text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} \right) \mathbf{u}
$$

Let's break down this formula:

*   **$\mathbf{v} \cdot \mathbf{u}$**: This is the dot product of vectors $\mathbf{v}$ and $\mathbf{u}$. It's a scalar value that tells us about the relationship between the two vectors.
*   **$\|\mathbf{u}\|^2$**: This is the squared magnitude (or squared length) of vector $\mathbf{u}$.
*   **$\left( \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} \right)$**: This entire term is a scalar. It represents the scalar component of $\mathbf{v}$ along the direction of $\mathbf{u}$, scaled by the magnitude of $\mathbf{u}$. Effectively, it's the "length" of the projection relative to the length of $\mathbf{u}$.
*   **$\mathbf{u}$**: We multiply the scalar by the vector $\mathbf{u}$ to get a new vector that has the same direction as $\mathbf{u}$ but a magnitude determined by the scalar component.

Alternatively, we can express the formula using the unit vector of $\mathbf{u}$, denoted as $\hat{\mathbf{u}}$:

$$
\hat{\mathbf{u}} = \frac{\mathbf{u}}{\|\mathbf{u}\|}
$$

So, the formula becomes:

$$
\text{proj}_{\mathbf{u}} \mathbf{v} = (\mathbf{v} \cdot \hat{\mathbf{u}}) \hat{\mathbf{u}}
$$

This form highlights that we are projecting $\mathbf{v}$ onto the unit direction of $\mathbf{u}$.

## Steps to Calculate an Orthogonal Projection

To calculate the orthogonal projection of $\mathbf{v}$ onto $\mathbf{u}$:

1.  **Calculate the dot product $\mathbf{v} \cdot \mathbf{u}$**.
2.  **Calculate the squared magnitude of $\mathbf{u}$ ($||\mathbf{u}||^2$)**.
3.  **Divide the dot product by the squared magnitude**: This gives you the scalar multiplier.
4.  **Multiply the scalar multiplier by the vector $\mathbf{u}$**: This results in the orthogonal projection vector.

## Worked Example

Let's find the orthogonal projection of vector $\mathbf{v} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ onto vector $\mathbf{u} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.

**Step 1: Calculate the dot product $\mathbf{v} \cdot \mathbf{u}$**
$$
\mathbf{v} \cdot \mathbf{u} = (3)(1) + (4)(2) = 3 + 8 = 11
$$

**Step 2: Calculate the squared magnitude of $\mathbf{u}$ ($||\mathbf{u}||^2$)**
$$
\|\mathbf{u}\|^2 = 1^2 + 2^2 = 1 + 4 = 5
$$

**Step 3: Divide the dot product by the squared magnitude**
$$
\frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|^2} = \frac{11}{5}
$$

**Step 4: Multiply the scalar multiplier by the vector $\mathbf{u}$**
$$
\text{proj}_{\mathbf{u}} \mathbf{v} = \left( \frac{11}{5} \right) \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} \frac{11}{5} \\ \frac{22}{5} \end{pmatrix}
$$

So, the orthogonal projection of $\mathbf{v}$ onto $\mathbf{u}$ is $\begin{pmatrix} 2.2 \\ 4.4 \end{pmatrix}$. This vector lies along the direction of $\mathbf{u}$.

## Common Mistakes to Avoid

*   **Forgetting to square the magnitude**: Using the magnitude $\|\mathbf{u}\|$ instead of its square $\|\mathbf{u}\|^2$ will lead to an incorrect scalar multiplier.
*   **Confusing projection of $\mathbf{v}$ onto $\mathbf{u}$ with projection of $\mathbf{u}$ onto $\mathbf{v}$**: The order matters. $\text{proj}_{\mathbf{u}} \mathbf{v}$ is generally different from $\text{proj}_{\mathbf{v}} \mathbf{u}$.
*   **Only calculating the scalar component**: Remember that the orthogonal projection is a *vector*, not just a scalar value. You must multiply the scalar component by the direction vector $\mathbf{u}$.

Understanding and being able to calculate orthogonal projections is a key step in mastering vector operations and their applications.

## Supports

- [[skills/mathematics/linear-algebra/vector/microskills/orthogonal-projection-calculation|Orthogonal projection calculation]]
