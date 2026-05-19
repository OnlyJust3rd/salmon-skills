---
type: "medium"
title: "Analyzing Plane Relationships with Normal Vectors"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/geometric-formulation/microskills/normal-vectors-for-plane-plane-relationships|Normal vectors for plane-plane relationships]]"
---
# Analyzing Plane Relationships with Normal Vectors

In our exploration of geometric formulation, we're focusing on how to analyze the relative positions of lines and planes in 3D space. A crucial part of this involves understanding how planes interact with each other. This lesson specifically hones in on using **normal vectors** to determine the relationships between two planes.

## Understanding Normal Vectors

A **normal vector** to a plane is a vector that is perpendicular (orthogonal) to every vector lying in that plane. Think of it as a vector pointing straight out from the surface of the plane, at a 90-degree angle.

If we have a plane defined by the equation:
$$ Ax + By + Cz + D = 0 $$
then its normal vector, denoted as $\vec{n}$, can be represented as:
$$ \vec{n} = \begin{pmatrix} A \\ B \\ C \end{pmatrix} $$

The coefficients $A$, $B$, and $C$ directly give us the components of the normal vector.

## Relationships Between Planes and Their Normal Vectors

The relationship between two planes is directly reflected in the relationship between their normal vectors. Let's consider two planes, Plane 1 and Plane 2, with their respective normal vectors $\vec{n_1}$ and $\vec{n_2}$.

### 1. Parallel Planes

Two planes are parallel if they never intersect. This means their normal vectors will be parallel as well. Two vectors are parallel if one is a scalar multiple of the other.

*   **Condition:** $\vec{n_1} = k \vec{n_2}$ for some non-zero scalar $k$.
*   **In other words:** The components of $\vec{n_1}$ are proportional to the components of $\vec{n_2}$.

**Example:**
*   Plane 1: $2x + 3y - z + 5 = 0 \implies \vec{n_1} = \begin{pmatrix} 2 \\ 3 \\ -1 \end{pmatrix}$
*   Plane 2: $4x + 6y - 2z - 10 = 0 \implies \vec{n_2} = \begin{pmatrix} 4 \\ 6 \\ -2 \end{pmatrix}$

Here, $\vec{n_2} = 2 \vec{n_1}$. The vectors are parallel, so the planes are parallel. Note that if the $D$ terms were different such that the planes were identical, they would still be considered parallel (or coincident).

### 2. Coincident Planes (Identical Planes)

Coincident planes are essentially the same plane. Their normal vectors will be parallel, and importantly, their entire plane equations will be proportional, including the constant term $D$.

*   **Condition:** $\vec{n_1} = k \vec{n_2}$ AND $\frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2} = \frac{D_1}{D_2}$.

**Example:**
*   Plane 1: $x - y + 2z - 3 = 0 \implies \vec{n_1} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$
*   Plane 2: $3x - 3y + 6z - 9 = 0 \implies \vec{n_2} = \begin{pmatrix} 3 \\ -3 \\ 6 \end{pmatrix}$

Here, $\vec{n_2} = 3 \vec{n_1}$. Also, the ratio of coefficients and constants is $3/1 = -3/-1 = 6/2 = -9/-3 = 3$. Thus, the planes are coincident.

### 3. Intersecting Planes

Two planes that are not parallel must intersect. Their intersection forms a line. When planes intersect, their normal vectors are not parallel.

*   **Condition:** $\vec{n_1}$ is NOT a scalar multiple of $\vec{n_2}$.
*   **Further Analysis (Orthogonal):** If the planes are perpendicular (orthogonal), their normal vectors will be orthogonal. Two vectors are orthogonal if their dot product is zero.
    $$ \vec{n_1} \cdot \vec{n_2} = 0 $$

**Example of Intersecting Planes:**
*   Plane 1: $x + y + z - 1 = 0 \implies \vec{n_1} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
*   Plane 2: $2x - y + 3z - 2 = 0 \implies \vec{n_2} = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$

Is $\vec{n_1}$ a scalar multiple of $\vec{n_2}$? No, there's no single $k$ such that $1=2k$, $1=-k$, and $1=3k$. Therefore, the planes intersect.

**Example of Orthogonal Planes:**
Let's use Plane 1 from above and a new Plane 3.
*   Plane 1: $x + y + z - 1 = 0 \implies \vec{n_1} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
*   Plane 3: $x - 2y + z = 0 \implies \vec{n_3} = \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$

Let's check their dot product:
$$ \vec{n_1} \cdot \vec{n_3} = (1)(1) + (1)(-2) + (1)(1) = 1 - 2 + 1 = 0 $$
Since the dot product is 0, $\vec{n_1}$ and $\vec{n_3}$ are orthogonal. Thus, Plane 1 and Plane 3 are orthogonal planes.

## Key Takeaways

*   The normal vector is a direct readout from the coefficients of a plane's equation ($Ax + By + Cz + D = 0$).
*   **Parallel planes** have parallel normal vectors ($\vec{n_1} = k \vec{n_2}$).
*   **Coincident planes** have parallel normal vectors and proportional equations.
*   **Intersecting planes** have non-parallel normal vectors.
*   **Orthogonal planes** have orthogonal normal vectors ($\vec{n_1} \cdot \vec{n_2} = 0$).

By analyzing the normal vectors derived from the equations of two planes, you can efficiently determine their spatial relationship.

## Supports

- [[skills/mathematics/geometric-formulation/microskills/normal-vectors-for-plane-plane-relationships|Normal vectors for plane-plane relationships]]
