---
type: "medium"
title: "Line-Plane Orthogonality Analysis"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/geometry/geometric-formulation/microskills/line-plane-orthogonality-analysis|line-plane-orthogonality-analysis]]"
learning-time-in-minutes: 5
---
# Line-Plane Orthogonality Analysis

This lesson focuses on analyzing when a line is perpendicular (orthogonal) to a plane in three-dimensional space. This is a key skill in understanding the geometric relationships between lines and planes.

## Understanding Orthogonality

Two geometric objects are orthogonal if they intersect at a right angle (90 degrees).

*   **Line and Plane Orthogonality:** A line is orthogonal to a plane if the line is perpendicular to *every* line lying within the plane that passes through the point of intersection.

## Key Concepts: Direction Vectors and Normal Vectors

To analyze orthogonality, we rely on vectors:

*   **Direction Vector of a Line:** This vector, often denoted by $\vec{d}$, indicates the direction in which the line travels. If a line is represented parametrically as $P = P_0 + t\vec{d}$, then $\vec{d}$ is its direction vector.

*   **Normal Vector of a Plane:** This vector, often denoted by $\vec{n}$, is perpendicular to the plane itself. If a plane is defined by the equation $ax + by + cz = d$, its normal vector is $\vec{n} = \langle a, b, c \rangle$.

## The Condition for Line-Plane Orthogonality

A line is orthogonal to a plane if and only if the **direction vector of the line is parallel to the normal vector of the plane.**

Why is this true?
Imagine a plane. Its normal vector points directly "out" from the plane. If a line is perpendicular to the plane, its direction must be the same as, or opposite to, the direction of the normal vector.

Mathematically, two vectors are parallel if one is a scalar multiple of the other. That is, $\vec{d} = k\vec{n}$ for some non-zero scalar $k$.

## How to Analyze Line-Plane Orthogonality

To analyze if a given line and plane are orthogonal, follow these steps:

1.  **Identify the Direction Vector ($\vec{d}$) of the Line:**
    *   If the line is given in parametric form ($P = P_0 + t\vec{d}$), $\vec{d}$ is directly available.
    *   If the line is given as the intersection of two planes, find the direction vector by taking the cross product of the normal vectors of the two planes.

2.  **Identify the Normal Vector ($\vec{n}$) of the Plane:**
    *   If the plane is given by the equation $ax + by + cz = d$, then $\vec{n} = \langle a, b, c \rangle$.

3.  **Check for Parallelism between $\vec{d}$ and $\vec{n}$:**
    *   **Method 1: Scalar Multiple:** See if $\vec{d}$ can be expressed as $k\vec{n}$ for some scalar $k$. This means checking if the ratios of corresponding components are equal:
        $$ \frac{d_x}{n_x} = \frac{d_y}{n_y} = \frac{d_z}{n_z} $$
        (Be careful if any component of $\vec{n}$ is zero. If $n_x=0$, then $d_x$ must also be 0 for them to be parallel. If $n_x \neq 0$ and $d_x = 0$, they are not parallel unless $d_y=d_z=0$ and $n_y=n_z=0$, which is a degenerate case).

    *   **Method 2: Cross Product:** Two non-zero vectors are parallel if and only if their cross product is the zero vector ($\vec{0}$).
        $$ \vec{d} \times \vec{n} = \vec{0} $$

## Worked Example

**Problem:** Determine if the line $L$ with parametric equation $P = \langle 1, 2, 3 \rangle + t\langle 2, -1, 4 \rangle$ is orthogonal to the plane $\Pi$ with equation $6x - 3y + 12z = 5$.

**Solution:**

1.  **Direction Vector of the Line ($\vec{d}$):**
    From the parametric equation, the direction vector of line $L$ is $\vec{d} = \langle 2, -1, 4 \rangle$.

2.  **Normal Vector of the Plane ($\vec{n}$):**
    From the plane's equation $6x - 3y + 12z = 5$, the normal vector is $\vec{n} = \langle 6, -3, 12 \rangle$.

3.  **Check for Parallelism:**

    *   **Using Scalar Multiple:**
        Let's check if $\vec{d} = k\vec{n}$ for some scalar $k$.
        We need:
        $2 = k \cdot 6 \implies k = 2/6 = 1/3$
        $-1 = k \cdot (-3) \implies k = -1/(-3) = 1/3$
        $4 = k \cdot 12 \implies k = 4/12 = 1/3$

        Since we found a consistent scalar $k = 1/3$ such that $\vec{d} = \frac{1}{3}\vec{n}$, the direction vector of the line is parallel to the normal vector of the plane.

    *   **Alternatively, using Cross Product:**
        $$ \vec{d} \times \vec{n} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & -1 & 4 \\ 6 & -3 & 12 \end{vmatrix} $$
        $$ = \mathbf{i} ((-1)(12) - (4)(-3)) - \mathbf{j} ((2)(12) - (4)(6)) + \mathbf{k} ((2)(-3) - (-1)(6)) $$
        $$ = \mathbf{i} (-12 - (-12)) - \mathbf{j} (24 - 24) + \mathbf{k} (-6 - (-6)) $$
        $$ = \mathbf{i} (0) - \mathbf{j} (0) + \mathbf{k} (0) = \langle 0, 0, 0 \rangle = \vec{0} $$
        The cross product is the zero vector, confirming that $\vec{d}$ and $\vec{n}$ are parallel.

**Conclusion:** Since the direction vector of the line is parallel to the normal vector of the plane, the line $L$ is orthogonal to the plane $\Pi$.

## Common Mistakes to Avoid

*   **Confusing Direction and Normal Vectors:** Ensure you correctly identify which vector belongs to the line and which belongs to the plane.
*   **Incorrectly Applying the Parallelism Condition:** Be careful with zero components when using the scalar multiple method. The cross product method is generally more robust for checking parallelism.
*   **Assuming Orthogonality without Vector Analysis:** Visual intuition can be misleading in 3D. Always rely on the vector conditions.

By mastering the analysis of line-plane orthogonality using direction and normal vectors, you build a strong foundation for understanding more complex geometric relationships in 3D space.

## Supports

- [[skills/mathematics/geometry/geometric-formulation/microskills/line-plane-orthogonality-analysis|Line-plane orthogonality analysis]]
