---
type: "medium"
title: "Finding the Shortest Distance from a Point to a Plane using Vector Projections"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/geometry/geometric-formulation/microskills/vector-projections-for-point-plane-distance|vector-projections-for-point-plane-distance]]"
learning-time-in-minutes: 5
---
# Finding the Shortest Distance from a Point to a Plane using Vector Projections

In the realm of geometric formulation, understanding distances between geometric objects is crucial. We've seen how the dot product helps with orthogonality. Now, we'll explore a powerful application: using vector projections to calculate the shortest distance from a point to a plane. This is a practical skill with applications in areas like computer graphics, physics simulations, and engineering.

## Why Shortest Distance?

The shortest distance between a point and a plane is always along the line that is perpendicular (orthogonal) to the plane and passes through the point. Imagine dropping a plumb line from a point to the floor – the length of that plumb line is the shortest distance. Vector projections allow us to mathematically isolate this perpendicular component.

## Key Concepts

To tackle this, we need a few fundamental building blocks:

1.  **Plane Equation:** A plane in 3D space can be defined by a point on the plane ($P_0$) and a normal vector ($\vec{n}$). The normal vector is perpendicular to every vector lying in the plane. A common form for the plane's equation is:
    $$ \vec{n} \cdot (\vec{r} - \vec{r}_0) = 0 $$
    where:
    *   $\vec{n}$ is the normal vector to the plane.
    *   $\vec{r}_0$ is the position vector of a known point $P_0$ on the plane.
    *   $\vec{r}$ is the position vector of any point $P$ on the plane.

2.  **Vector Projection:** The projection of vector $\vec{a}$ onto vector $\vec{b}$ gives us the component of $\vec{a}$ that lies in the direction of $\vec{b}$. The formula is:
    $$ \text{proj}_{\vec{b}} \vec{a} = \frac{\vec{a} \cdot \vec{b}}{\|\vec{b}\|^2} \vec{b} $$
    The *scalar projection* (or component of $\vec{a}$ along $\vec{b}$) is:
    $$ \text{comp}_{\vec{b}} \vec{a} = \frac{\vec{a} \cdot \vec{b}}{\|\vec{b}\|} $$

## The Strategy: Using Projection for Distance

Our goal is to find the length of the perpendicular line segment from a given point (let's call it $P_1$) to the plane.

1.  **Choose a Point on the Plane:** We need any known point $P_0$ that lies on the plane.
2.  **Form a Vector:** Create a vector $\vec{v}$ connecting the known point on the plane ($P_0$) to our external point ($P_1$). So, $\vec{v} = \vec{P_1} - \vec{P_0}$.
3.  **Utilize the Normal Vector:** The normal vector $\vec{n}$ of the plane is perpendicular to the plane.
4.  **Project onto the Normal:** Project the vector $\vec{v}$ onto the normal vector $\vec{n}$. The scalar projection of $\vec{v}$ onto $\vec{n}$ will give us the length of the component of $\vec{v}$ that is perpendicular to the plane. This length is precisely the shortest distance from $P_1$ to the plane.

The shortest distance, $d$, is therefore the absolute value of the scalar projection of $\vec{v}$ onto $\vec{n}$:

$$ d = \left| \text{comp}_{\vec{n}} \vec{v} \right| = \left| \frac{\vec{v} \cdot \vec{n}}{\|\vec{n}\|} \right| $$

## Worked Example

Let's find the shortest distance from the point $P_1 = (2, 3, 4)$ to the plane defined by the equation $2x - y + 3z = 5$.

**Step 1: Identify the Normal Vector and a Point on the Plane.**

From the plane equation $2x - y + 3z = 5$, we can identify the normal vector:
$$ \vec{n} = \langle 2, -1, 3 \rangle $$

To find a point on the plane, let's set $x=0$ and $y=0$:
$2(0) - (0) + 3z = 5 \implies 3z = 5 \implies z = 5/3$.
So, a point on the plane is $P_0 = (0, 0, 5/3)$. The position vector for $P_0$ is $\vec{r}_0 = \langle 0, 0, 5/3 \rangle$.

**Step 2: Form the Vector from the Plane to the Point.**

The vector $\vec{v}$ connecting $P_0$ to $P_1$ is:
$$ \vec{v} = \vec{P_1} - \vec{P_0} = \langle 2, 3, 4 \rangle - \langle 0, 0, 5/3 \rangle = \left\langle 2, 3, 4 - \frac{5}{3} \right\rangle $$
$$ \vec{v} = \left\langle 2, 3, \frac{12}{3} - \frac{5}{3} \right\rangle = \left\langle 2, 3, \frac{7}{3} \right\rangle $$

**Step 3: Calculate the Dot Product.**

Now, we compute the dot product of $\vec{v}$ and $\vec{n}$:
$$ \vec{v} \cdot \vec{n} = \langle 2, 3, 7/3 \rangle \cdot \langle 2, -1, 3 \rangle $$
$$ \vec{v} \cdot \vec{n} = (2)(2) + (3)(-1) + (7/3)(3) $$
$$ \vec{v} \cdot \vec{n} = 4 - 3 + 7 = 8 $$

**Step 4: Calculate the Magnitude of the Normal Vector.**

The magnitude of $\vec{n}$ is:
$$ \|\vec{n}\| = \sqrt{2^2 + (-1)^2 + 3^2} = \sqrt{4 + 1 + 9} = \sqrt{14} $$

**Step 5: Compute the Shortest Distance.**

Finally, we find the distance using the formula:
$$ d = \left| \frac{\vec{v} \cdot \vec{n}}{\|\vec{n}\|} \right| = \left| \frac{8}{\sqrt{14}} \right| = \frac{8}{\sqrt{14}} $$

We can rationalize this:
$$ d = \frac{8\sqrt{14}}{14} = \frac{4\sqrt{14}}{7} $$

So, the shortest distance from the point $(2, 3, 4)$ to the plane $2x - y + 3z = 5$ is $\frac{4\sqrt{14}}{7}$.

## Common Pitfalls

*   **Incorrect Normal Vector:** Ensure you correctly extract the normal vector from the plane equation. For $Ax + By + Cz = D$, the normal vector is $\langle A, B, C \rangle$.
*   **Using a Point Not on the Plane:** The calculation relies on having a correct point ($P_0$) that is indeed on the plane.
*   **Forgetting the Absolute Value:** Distance is a non-negative quantity. The dot product could be negative if the vector $\vec{v}$ points in the opposite direction of the normal, but the distance itself is the magnitude.
*   **Algebraic Errors:** Carefully check your calculations for dot products and magnitudes.

By mastering vector projections, you gain a precise tool for calculating the shortest distance from a point to a plane, a fundamental concept in spatial reasoning.

## Supports

- [[skills/mathematics/geometry/geometric-formulation/microskills/vector-projections-for-point-plane-distance|Vector projections for point-plane distance]]
