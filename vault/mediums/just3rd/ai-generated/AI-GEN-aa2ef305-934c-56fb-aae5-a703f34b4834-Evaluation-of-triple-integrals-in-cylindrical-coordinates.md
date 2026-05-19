---
type: "medium"
title: "Evaluating Triple Integrals in Cylindrical Coordinates"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multiple-integral-evaluation/microskills/evaluation-of-triple-integrals-in-cylindrical-coordinates|Evaluation of triple integrals in cylindrical coordinates]]"
---
# Evaluating Triple Integrals in Cylindrical Coordinates

This lesson focuses on applying cylindrical coordinates to evaluate triple integrals. This is a crucial technique within the broader skill of applying coordinate transformations for integration, particularly useful for calculating volumes and other quantities over regions with cylindrical symmetry.

## When to Use Cylindrical Coordinates for Triple Integrals

Cylindrical coordinates are most beneficial when the region of integration or the integrand itself exhibits symmetry around an axis. Think of shapes like:

*   **Cylinders:** Obvious candidates.
*   **Cones:** Especially when oriented along an axis.
*   **Spheres or portions of spheres:** When sliced or viewed from the perspective of a central axis.
*   **Regions bounded by planes and paraboloids or other quadratic surfaces:** Where curves of constant $r$ form circles.

In Cartesian coordinates, these regions often lead to complex integration limits. Cylindrical coordinates simplify these limits, making the integration process much more manageable.

## Understanding Cylindrical Coordinates

Cylindrical coordinates $(r, \theta, z)$ relate to Cartesian coordinates $(x, y, z)$ as follows:

*   $x = r \cos(\theta)$
*   $y = r \sin(\theta)$
*   $z = z$

The Jacobian determinant for this transformation is $r$. This means the differential volume element $dV$ in cylindrical coordinates is:

$$ dV = r \, dz \, dr \, d\theta $$

The order of integration ($dz$, $dr$, $d\theta$) can often be rearranged, but the $r$ factor in $dV$ must always be included.

## Steps for Evaluating Triple Integrals in Cylindrical Coordinates

1.  **Visualize and Sketch the Region:** Understand the 3D region of integration. This is the most critical step. Identify its boundaries.
2.  **Determine the Coordinate System:** Does the region suggest cylindrical symmetry? If so, cylindrical coordinates are likely a good choice.
3.  **Transform the Integrand:** Replace $x$, $y$, and $z$ in the integrand with their cylindrical equivalents ($r \cos(\theta)$, $r \sin(\theta)$, $z$). Remember that $x^2 + y^2 = r^2$.
4.  **Determine the Integration Limits:**
    *   **$z$ limits:** These are typically determined by the upper and lower bounding surfaces of the region, expressed in terms of $r$ and $\theta$.
    *   **$r$ limits:** These describe how the radial distance from the $z$-axis varies within the region, often determined by the intersection of surfaces or the projection of the 3D region onto the $xy$-plane. Limits are usually constants or functions of $\theta$.
    *   **$\theta$ limits:** These define the angular sweep of the region around the $z$-axis, usually constants representing a full circle ($0$ to $2\pi$) or a portion thereof.
5.  **Set up the Integral:** Write the triple integral with the transformed integrand, the $r \, dz \, dr \, d\theta$ volume element, and the determined limits.
6.  **Evaluate the Integral:** Solve the iterated integral, typically integrating with respect to $z$ first, then $r$, and finally $\theta$.

## Worked Example: Volume of a Region

**Problem:** Find the volume of the solid bounded above by the sphere $x^2 + y^2 + z^2 = 4$ and below by the cone $z = \sqrt{x^2 + y^2}$.

**Solution:**

1.  **Visualize and Sketch:** The region is a cap-like shape, the upper part of a sphere cut by a cone originating from the origin. The axis of symmetry is the $z$-axis.

2.  **Determine Coordinate System:** The spherical shape and the cone suggest cylindrical coordinates might be useful, especially since the intersection will form circles.

3.  **Transform Integrand:** We want to find the volume, so the integrand is simply $1$. $dV = r \, dz \, dr \, d\theta$.

4.  **Determine Integration Limits:**
    *   **Intersection:** To find where the sphere and cone intersect, set their equations equal where appropriate. In cylindrical coordinates:
        *   Sphere: $r^2 + z^2 = 4$
        *   Cone: $z = r$ (since $r = \sqrt{x^2+y^2}$)
        Substitute $z=r$ into the sphere equation: $r^2 + r^2 = 4 \implies 2r^2 = 4 \implies r^2 = 2 \implies r = \sqrt{2}$.
        When $r = \sqrt{2}$, $z = \sqrt{2}$. So the intersection occurs at a circle of radius $\sqrt{2}$ at height $z=\sqrt{2}$.

    *   **$z$ limits:** The lower bound is the cone $z = r$. The upper bound is the sphere. From $r^2 + z^2 = 4$, we get $z = \sqrt{4 - r^2}$ (since we are in the upper hemisphere, $z \ge 0$).
        So, the $z$ limits are $r \le z \le \sqrt{4 - r^2}$.

    *   **$r$ limits:** The radial distance $r$ starts at $0$ at the $z$-axis and extends to the radius of the intersection circle, which is $\sqrt{2}$.
        So, the $r$ limits are $0 \le r \le \sqrt{2}$.

    *   **$\theta$ limits:** The region is symmetric around the $z$-axis and forms a complete shape, so $\theta$ goes from $0$ to $2\pi$.
        So, the $\theta$ limits are $0 \le \theta \le 2\pi$.

5.  **Set up the Integral:**
    $$ V = \int_{0}^{2\pi} \int_{0}^{\sqrt{2}} \int_{r}^{\sqrt{4-r^2}} r \, dz \, dr \, d\theta $$

6.  **Evaluate the Integral:**

    *   **Integrate with respect to $z$**:
        $$ \int_{r}^{\sqrt{4-r^2}} r \, dz = r [z]_{r}^{\sqrt{4-r^2}} = r(\sqrt{4-r^2} - r) = r\sqrt{4-r^2} - r^2 $$

    *   **Integrate with respect to $r$**:
        $$ \int_{0}^{\sqrt{2}} (r\sqrt{4-r^2} - r^2) \, dr $$
        We can split this into two integrals. For the first part, $r\sqrt{4-r^2}$, use substitution: let $u = 4-r^2$, so $du = -2r \, dr$. When $r=0$, $u=4$. When $r=\sqrt{2}$, $u=4-2=2$.
        $$ \int_{4}^{2} \sqrt{u} (-\frac{1}{2} du) = -\frac{1}{2} \int_{4}^{2} u^{1/2} \, du = \frac{1}{2} \int_{2}^{4} u^{1/2} \, du = \frac{1}{2} \left[ \frac{2}{3} u^{3/2} \right]_{2}^{4} = \frac{1}{3} (4^{3/2} - 2^{3/2}) = \frac{1}{3} (8 - 2\sqrt{2}) $$
        For the second part, $\int_{0}^{\sqrt{2}} r^2 \, dr$:
        $$ \int_{0}^{\sqrt{2}} r^2 \, dr = \left[ \frac{r^3}{3} \right]_{0}^{\sqrt{2}} = \frac{(\sqrt{2})^3}{3} - 0 = \frac{2\sqrt{2}}{3} $$
        Combining them:
        $$ \left( \frac{8}{3} - \frac{2\sqrt{2}}{3} \right) - \frac{2\sqrt{2}}{3} = \frac{8}{3} - \frac{4\sqrt{2}}{3} $$

    *   **Integrate with respect to $\theta$**:
        $$ V = \int_{0}^{2\pi} \left( \frac{8}{3} - \frac{4\sqrt{2}}{3} \right) \, d\theta = \left( \frac{8}{3} - \frac{4\sqrt{2}}{3} \right) [\theta]_{0}^{2\pi} = \left( \frac{8}{3} - \frac{4\sqrt{2}}{3} \right) (2\pi) $$
        $$ V = \frac{16\pi}{3} - \frac{8\pi\sqrt{2}}{3} $$

This process demonstrates how cylindrical coordinates simplify a problem that would be significantly more complex in Cartesian coordinates.

## Supports

- [[skills/mathematics/multiple-integral-evaluation/microskills/evaluation-of-triple-integrals-in-cylindrical-coordinates|Evaluation of triple integrals in cylindrical coordinates]]
