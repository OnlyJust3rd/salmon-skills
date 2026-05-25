---
type: "medium"
title: "Finding the Shortest Distance from a Point to a Line Using Vector Projections"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/geometry/geometric-formulation/microskills/vector-projections-for-point-line-distance|vector-projections-for-point-line-distance]]"
related-skills:
  - "[[skills/mathematics/geometry/geometric-formulation/geometric-formulation|geometric-formulation]]"
learning-time-in-minutes: 4
---
# Finding the Shortest Distance from a Point to a Line Using Vector Projections

This lesson focuses on a specific application of vector operations: determining the shortest distance from a point to a line in space. We'll leverage the concept of vector projections to achieve this. This skill is part of applying the dot product to understand geometric relationships.

## The Core Idea: Perpendicularity is Key

The shortest distance from a point to a line is always along the line segment that is perpendicular to the given line. Imagine dropping a perpendicular from the point onto the line. The length of this perpendicular segment is the shortest distance. Vector projections help us find this perpendicular segment.

## How Vector Projections Help

A vector projection allows us to "decompose" one vector onto another. When we project a vector representing the distance between a point on the line and our external point *onto* the direction vector of the line, we get a component of that distance that lies *along* the line.

The remaining component of that initial distance vector will be perpendicular to the line. We can then find the magnitude of this perpendicular component to get our shortest distance.

## The Formula and Its Components

Let's define our elements:

*   **Point P:** The external point we want to find the distance from. Let its coordinates be \((x_0, y_0, z_0)\).
*   **Line L:** Defined by a point \(A\) on the line (with coordinates \((x_1, y_1, z_1)\)) and a direction vector \(\mathbf{v}\). The direction vector \(\mathbf{v}\) can be found from the coefficients of the parametric equations of the line or by taking two points on the line and finding the vector between them.
*   **Vector AP (\(\vec{AP}\)):** The vector connecting point \(A\) on the line to point \(P\). \(\vec{AP} = P - A\).
*   **Projection of \(\vec{AP}\) onto \(\mathbf{v} (\text{proj}_{\mathbf{v}}\vec{AP})\):** This vector represents the part of \(\vec{AP}\) that lies along the direction of the line \(\mathbf{v}\).

The formula for the projection of vector \(\mathbf{u}\) onto vector \(\mathbf{v}\) is:
$$
\text{proj}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{v}\|^2} \mathbf{v}
$$

Once we have the projection of \(\vec{AP}\) onto \(\mathbf{v}\), we can find the vector perpendicular to the line. This vector, let's call it \(\mathbf{w}\), is given by:
$$
\mathbf{w} = \vec{AP} - \text{proj}_{\mathbf{v}}\vec{AP}
$$

The shortest distance is then the magnitude of this perpendicular vector \(\mathbf{w}\):
$$
\text{Distance} = \|\mathbf{w}\| = \|\vec{AP} - \text{proj}_{\mathbf{v}}\vec{AP}\|
$$

Alternatively, a more direct formula can be derived using the cross product, but for this lesson, we will stick to projections.

## Worked Example

Let's find the shortest distance from point \(P(2, 3, 1)\) to the line defined by the point \(A(1, 0, 2)\) and the direction vector \(\mathbf{v} = \langle 1, -1, 2 \rangle\).

**Step 1: Find the vector \(\vec{AP}\).**
$$
\vec{AP} = P - A = \langle 2-1, 3-0, 1-2 \rangle = \langle 1, 3, -1 \rangle
$$

**Step 2: Calculate the dot product \(\vec{AP} \cdot \mathbf{v}\).**
$$
\vec{AP} \cdot \mathbf{v} = (1)(1) + (3)(-1) + (-1)(2) = 1 - 3 - 2 = -4
$$

**Step 3: Calculate the squared magnitude of \(\mathbf{v}\) (\(\|\mathbf{v}\|^2\)).**
$$
\|\mathbf{v}\|^2 = 1^2 + (-1)^2 + 2^2 = 1 + 1 + 4 = 6
$$

**Step 4: Calculate the projection of \(\vec{AP}\) onto \(\mathbf{v}\).**
$$
\text{proj}_{\mathbf{v}}\vec{AP} = \frac{\vec{AP} \cdot \mathbf{v}}{\|\mathbf{v}\|^2} \mathbf{v} = \frac{-4}{6} \langle 1, -1, 2 \rangle = -\frac{2}{3} \langle 1, -1, 2 \rangle = \langle -\frac{2}{3}, \frac{2}{3}, -\frac{4}{3} \rangle
$$

**Step 5: Find the perpendicular vector \(\mathbf{w}\).**
$$
\mathbf{w} = \vec{AP} - \text{proj}_{\mathbf{v}}\vec{AP} = \langle 1, 3, -1 \rangle - \langle -\frac{2}{3}, \frac{2}{3}, -\frac{4}{3} \rangle
$$
$$
\mathbf{w} = \langle 1 - (-\frac{2}{3}), 3 - \frac{2}{3}, -1 - (-\frac{4}{3}) \rangle = \langle \frac{3}{3} + \frac{2}{3}, \frac{9}{3} - \frac{2}{3}, -\frac{3}{3} + \frac{4}{3} \rangle
$$
$$
\mathbf{w} = \langle \frac{5}{3}, \frac{7}{3}, \frac{1}{3} \rangle
$$

**Step 6: Calculate the magnitude of \(\mathbf{w}\) (the shortest distance).**
$$
\|\mathbf{w}\| = \sqrt{\left(\frac{5}{3}\right)^2 + \left(\frac{7}{3}\right)^2 + \left(\frac{1}{3}\right)^2} = \sqrt{\frac{25}{9} + \frac{49}{9} + \frac{1}{9}}
$$
$$
\|\mathbf{w}\| = \sqrt{\frac{25 + 49 + 1}{9}} = \sqrt{\frac{75}{9}} = \sqrt{\frac{25}{3}} = \frac{5}{\sqrt{3}} = \frac{5\sqrt{3}}{3}
$$

So, the shortest distance from point \(P\) to the line is \(\frac{5\sqrt{3}}{3}\) units.

## Key Takeaways

*   The shortest distance from a point to a line is along the perpendicular.
*   Vector projections help us isolate the component of a vector that lies along the line.
*   The difference between the original vector and its projection gives the perpendicular component.
*   The magnitude of this perpendicular component is the shortest distance.

## Supports

- [[skills/mathematics/geometry/geometric-formulation/microskills/vector-projections-for-point-line-distance|Vector projections for point-line distance]]
