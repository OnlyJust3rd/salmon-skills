---
type: "medium"
title: "Polar Coordinate Transformation for Double Integrals"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multiple-integral-evaluation/microskills/polar-coordinate-transformation-for-double-integrals|polar-coordinate-transformation-for-double-integrals]]"
---
# Polar Coordinate Transformation for Double Integrals

This lesson focuses on applying polar coordinate transformations to set up double integrals, a key step in evaluating integrals over regions that are circular or have circular symmetry.

## Why Use Polar Coordinates?

When dealing with regions in the $xy$-plane that are circles, sectors of circles, or have boundaries described by radial lines and curves, converting to polar coordinates can significantly simplify the setup and evaluation of double integrals. Rectangular coordinates ($x, y$) can lead to complicated integration limits in these scenarios.

## The Transformation

In polar coordinates, a point $(x, y)$ in the Cartesian plane is represented by $(r, \theta)$, where:

*   $r$ is the distance from the origin to the point.
*   $\theta$ is the angle measured counterclockwise from the positive $x$-axis to the line segment connecting the origin to the point.

The relationships between Cartesian and polar coordinates are:

$$
x = r \cos \theta
$$
$$
y = r \sin \theta
$$

## The Jacobian: The Crucial Element

When transforming a double integral from Cartesian to polar coordinates, we don't just substitute $x$ and $y$. We need to account for the change in area. This is done using the Jacobian determinant, denoted by $|J|$. For the transformation to polar coordinates, the Jacobian is:

$$
J = \begin{vmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{vmatrix}
$$

Let's calculate the partial derivatives:
$\frac{\partial x}{\partial r} = \cos \theta$
$\frac{\partial x}{\partial \theta} = -r \sin \theta$
$\frac{\partial y}{\partial r} = \sin \theta$
$\frac{\partial y}{\partial \theta} = r \cos \theta$

Now, the Jacobian determinant:
$$
J = (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta)
$$
$$
J = r \cos^2 \theta + r \sin^2 \theta
$$
$$
J = r (\cos^2 \theta + \sin^2 \theta)
$$
$$
J = r
$$

The differential area element $dA = dx \, dy$ in Cartesian coordinates becomes $dA = r \, dr \, d\theta$ in polar coordinates. This $r$ factor is crucial and often overlooked.

So, a double integral in Cartesian coordinates:
$$
\iint_R f(x, y) \, dA
$$
transforms to polar coordinates as:
$$
\iint_{R'} f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta
$$
where $R'$ is the region $R$ described in polar coordinates.

## Steps to Apply Polar Coordinates

1.  **Sketch the Region of Integration:** Draw the region $R$ defined by the limits of the double integral in the $xy$-plane.
2.  **Identify Circular Symmetry:** Determine if the region is circular, a sector of a circle, or bounded by radial lines and circular arcs. If so, polar coordinates are likely beneficial.
3.  **Determine Polar Limits:**
    *   **For $r$:** Imagine a ray originating from the origin and sweeping counterclockwise. Determine the minimum and maximum values $r$ takes as this ray passes through the region. These will be your limits for $dr$.
    *   **For $\theta$:** Determine the range of angles $\theta$ that the ray sweeps to cover the entire region. These will be your limits for $d\theta$. Common ranges are $[0, 2\pi]$ for full circles, or specific angles for sectors.
4.  **Transform the Integrand:** Replace $x$ with $r \cos \theta$ and $y$ with $r \sin \theta$ in the integrand $f(x, y)$.
5.  **Include the Jacobian:** Multiply the transformed integrand by $r$.
6.  **Set up the Integral:** Write the double integral in polar coordinates with the correct integrand and the determined limits for $dr$ and $d\theta$.

## Worked Example

**Problem:** Evaluate the double integral $\iint_R x^2 + y^2 \, dA$ where $R$ is the region inside the circle $x^2 + y^2 = 4$ and above the $x$-axis.

**1. Sketch the Region:**
The region $R$ is the upper semi-disk of radius 2, centered at the origin.

**2. Identify Circular Symmetry:**
The region is part of a circle, so polar coordinates are appropriate.

**3. Determine Polar Limits:**
*   For any point in the semi-disk, the distance from the origin ($r$) ranges from 0 to the radius of the circle, which is 2. So, $0 \le r \le 2$.
*   The region covers the upper half of the circle. This corresponds to angles from $\theta = 0$ (positive $x$-axis) to $\theta = \pi$ (negative $x$-axis). So, $0 \le \theta \le \pi$.

**4. Transform the Integrand:**
The integrand is $f(x, y) = x^2 + y^2$.
Recall that in polar coordinates, $r^2 = x^2 + y^2$.
So, $f(r \cos \theta, r \sin \theta) = r^2$.

**5. Include the Jacobian:**
The differential area element becomes $r \, dr \, d\theta$.

**6. Set up the Integral:**
The integral in polar coordinates is:
$$
\iint_{R'} r^2 \cdot r \, dr \, d\theta = \int_0^\pi \int_0^2 r^3 \, dr \, d\theta
$$

**Evaluation:**
First, integrate with respect to $r$:
$$
\int_0^2 r^3 \, dr = \left[ \frac{r^4}{4} \right]_0^2 = \frac{2^4}{4} - \frac{0^4}{4} = \frac{16}{4} = 4
$$
Now, integrate the result with respect to $\theta$:
$$
\int_0^\pi 4 \, d\theta = [4\theta]_0^\pi = 4\pi - 4(0) = 4\pi
$$

Therefore, $\iint_R x^2 + y^2 \, dA = 4\pi$.

## Common Mistakes to Avoid

*   **Forgetting the Jacobian ($r$):** This is the most common error. Always remember to multiply your transformed integrand by $r$.
*   **Incorrect Polar Limits:** Carefully sketch the region and determine the correct ranges for $r$ and $\theta$. Be mindful of whether the region is a full circle, a sector, or a segment.
*   **Confusing Angle Ranges:** Ensure your $\theta$ limits cover the region correctly. For example, using $[0, 2\pi]$ when only a quarter-circle is involved will lead to an incorrect answer.

## Supports

- [[skills/mathematics/multiple-integral-evaluation/microskills/polar-coordinate-transformation-for-double-integrals|Polar coordinate transformation for double integrals]]
