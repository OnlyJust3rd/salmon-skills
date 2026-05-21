---
type: "medium"
title: "Fundamental Vector Operations: Enumeration"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/vector/microskills/fundamental-vector-operations-enumeration|fundamental-vector-operations-enumeration]]"
---
# Fundamental Vector Operations: Enumeration

Welcome! This lesson focuses on remembering the fundamental operations you can perform with vectors. Understanding these operations is the first step in working with vectors, which are essential in many fields like physics, engineering, and computer graphics.

## What are Vectors?

Before we dive into operations, let's quickly recap what vectors are.

*   **Scalar:** A quantity that has only magnitude (size). Examples include temperature, mass, and speed.
*   **Vector:** A quantity that has both magnitude and direction. Examples include velocity, force, and displacement.

Vectors can be represented visually as arrows, where the length of the arrow indicates the magnitude and the arrowhead points in the direction. Mathematically, they can be represented as ordered lists of numbers (components).

## Fundamental Vector Operations

There are several basic operations that we can perform on vectors. Knowing these will allow us to combine and manipulate vectors effectively.

### 1. Vector Addition

Vector addition combines two or more vectors. Geometrically, if you have two vectors, you can place the tail of the second vector at the head of the first. The resultant vector goes from the tail of the first to the head of the second. Mathematically, you add the corresponding components of the vectors.

*   **Example:** If $\vec{a} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$, then $\vec{a} + \vec{b} = \begin{pmatrix} 1+3 \\ 2+(-1) \end{pmatrix} = \begin{pmatrix} 4 \\ 1 \end{pmatrix}$.

### 2. Vector Subtraction

Vector subtraction is essentially adding the negative of a vector. To subtract vector $\vec{b}$ from vector $\vec{a}$, you find the vector that, when added to $\vec{b}$, results in $\vec{a}$. Mathematically, you subtract the corresponding components of the vectors.

*   **Example:** If $\vec{a} = \begin{pmatrix} 5 \\ 3 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$, then $\vec{a} - \vec{b} = \begin{pmatrix} 5-2 \\ 3-1 \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$.

### 3. Scalar Multiplication

Scalar multiplication involves multiplying a vector by a scalar (a single number). This operation scales the magnitude of the vector. If the scalar is positive, the direction remains the same. If the scalar is negative, the direction is reversed.

*   **Example:** If $\vec{v} = \begin{pmatrix} 2 \\ -3 \end{pmatrix}$ and the scalar $k = 4$, then $k\vec{v} = 4 \begin{pmatrix} 2 \\ -3 \end{pmatrix} = \begin{pmatrix} 4 \times 2 \\ 4 \times (-3) \end{pmatrix} = \begin{pmatrix} 8 \\ -12 \end{pmatrix}$.
*   **Example:** If $\vec{v} = \begin{pmatrix} 2 \\ -3 \end{pmatrix}$ and the scalar $k = -2$, then $k\vec{v} = -2 \begin{pmatrix} 2 \\ -3 \end{pmatrix} = \begin{pmatrix} -2 \times 2 \\ -2 \times (-3) \end{pmatrix} = \begin{pmatrix} -4 \\ 6 \end{pmatrix}$.

### 4. Dot Product (Scalar Product)

The dot product is an operation that takes two vectors and returns a single scalar value. It's useful for determining the angle between two vectors and for projecting one vector onto another. The dot product is calculated by multiplying corresponding components and summing the results.

*   **Example:** If $\vec{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} 4 \\ -5 \\ 6 \end{pmatrix}$, then $\vec{a} \cdot \vec{b} = (1 \times 4) + (2 \times -5) + (3 \times 6) = 4 - 10 + 18 = 12$.

### 5. Cross Product (Vector Product)

The cross product is an operation that takes two vectors in three-dimensional space and returns a new vector. The resulting vector is perpendicular to both of the original vectors. The direction of the resulting vector is determined by the right-hand rule. The cross product is only defined for vectors in 3D.

*   **Example:** If $\vec{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$, then $\vec{a} \times \vec{b}$ is calculated as:
    $$
    \vec{a} \times \vec{b} = \begin{pmatrix} (2 \times 6) - (3 \times 5) \\ (3 \times 4) - (1 \times 6) \\ (1 \times 5) - (2 \times 4) \end{pmatrix} = \begin{pmatrix} 12 - 15 \\ 12 - 6 \\ 5 - 8 \end{pmatrix} = \begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix}
    $$

## Summary of Operations

Let's list the fundamental operations we've covered:

*   **Vector Addition:** Combines vectors.
*   **Vector Subtraction:** Finds the difference between vectors.
*   **Scalar Multiplication:** Scales a vector by a number.
*   **Dot Product:** Returns a scalar value from two vectors.
*   **Cross Product:** Returns a vector perpendicular to two input vectors (in 3D).

Remembering these operations is key to building your understanding of vector mathematics and its applications.

## Supports

- [[skills/mathematics/vector/microskills/fundamental-vector-operations-enumeration|Fundamental vector operations enumeration]]
