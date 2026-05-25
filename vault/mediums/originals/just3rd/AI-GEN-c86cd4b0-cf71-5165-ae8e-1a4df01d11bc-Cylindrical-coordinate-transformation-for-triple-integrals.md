---
type: "medium"
title: "Cylindrical Coordinates for Triple Integrals"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/microskills/cylindrical-coordinate-transformation-for-triple-integrals|cylindrical-coordinate-transformation-for-triple-integrals]]"
related-skills:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/multiple-integral-evaluation|multiple-integral-evaluation]]"
learning-time-in-minutes: 5
---
# Cylindrical Coordinates for Triple Integrals

This lesson focuses on applying cylindrical coordinate transformations to simplify and set up triple integrals. This skill is a stepping stone to efficiently calculating volumes and other properties of solids, particularly those with cylindrical symmetry.

## When to Use Cylindrical Coordinates

Cylindrical coordinates are your best friend when dealing with problems involving:

*   **Cylinders:** Objects with a circular base and straight sides (like cans, pipes, or cylinders).
*   **Cones:** Especially when the cone's axis aligns with one of the Cartesian axes.
*   **Regions bounded by planes and cylinders/cones:** Where the cross-sections in the xy-plane are circles or sectors of circles.

Essentially, if your region of integration looks like it can be described by a radius, an angle, and a height, cylindrical coordinates are likely a good choice.

## Understanding Cylindrical Coordinates

Cylindrical coordinates represent a point P in 3D space using three values: $(r, \theta, z)$.

*   **$r$ (radial distance):** The distance from the z-axis to the point P. This is the same as the polar coordinate $r$ in the xy-plane.
*   **$\theta$ (azimuthal angle):** The angle between the positive x-axis and the projection of the line segment OP onto the xy-plane. This is the same as the polar coordinate $\theta$ in the xy-plane.
*   **$z$ (height):** The directed distance from the xy-plane to the point P. This is the same as the Cartesian z-coordinate.

### Conversion Formulas

The relationship between Cartesian coordinates $(x, y, z)$ and cylindrical coordinates $(r, \theta, z)$ is as follows:

*   **From Cylindrical to Cartesian:**
    $$ x = r \cos \theta $$
    $$ y = r \sin \theta $$
    $$ z = z $$

*   **From Cartesian to Cylindrical:**
    $$ r^2 = x^2 + y^2 \quad \implies \quad r = \sqrt{x^2 + y^2} $$
    $$ \tan \theta = \frac{y}{x} $$
    $$ z = z $$

### The Jacobian for Triple Integrals

When changing coordinate systems for triple integrals, we must account for the change in volume element. In cylindrical coordinates, the volume element $dV$ becomes $r \, dr \, d\theta \, dz$. The $r$ factor is the Jacobian determinant of the transformation.

$$ dV = r \, dr \, d\theta \, dz $$

## Setting Up the Triple Integral

To set up a triple integral in cylindrical coordinates, you need to determine the bounds for $r$, $\theta$, and $z$.

1.  **Determine the bounds for $z$:** Describe the upper and lower surfaces that bound the region in terms of $r$ and $\theta$. Often, these are planes (e.g., $z = 0$, $z = h$) or other surfaces that can be easily expressed in terms of $r$ and $\theta$.
2.  **Determine the bounds for $\theta$:** Project the region onto the xy-plane. This projection will likely be a circle or a sector of a circle. Determine the range of angles required to sweep out this entire projection. The typical range is from $0$ to $2\pi$ for a full circle, or a portion thereof.
3.  **Determine the bounds for $r$:** For a fixed $\theta$, describe the range of radial distances from the z-axis needed to sweep out the projection in the xy-plane. This is often from $0$ to some function of $\theta$, or a constant.

## Worked Example: Volume of a Cylinder

Let's find the volume of a solid cylinder with radius $R$ and height $H$, whose base is centered at the origin in the xy-plane.

**Region:** A cylinder defined by $x^2 + y^2 \le R^2$ and $0 \le z \le H$.

**Step 1: Convert to Cylindrical Coordinates**

*   The condition $x^2 + y^2 \le R^2$ translates directly to $r^2 \le R^2$, which means $0 \le r \le R$ (since $r$ is a distance, it's non-negative).
*   The condition $0 \le z \le H$ remains the same in cylindrical coordinates.
*   To sweep out the entire circular base, the angle $\theta$ must go from $0$ to $2\pi$.

So, our bounds are:
*   $0 \le r \le R$
*   $0 \le \theta \le 2\pi$
*   $0 \le z \le H$

**Step 2: Set Up the Integral**

The integral for volume is $\iiint_E dV$. In cylindrical coordinates, this becomes:

$$ V = \int_{0}^{2\pi} \int_{0}^{R} \int_{0}^{H} r \, dz \, dr \, d\theta $$

**Step 3: Evaluate the Integral**

First, integrate with respect to $z$:
$$ \int_{0}^{H} r \, dz = rz \Big|_{0}^{H} = rH $$

Now, integrate with respect to $r$:
$$ \int_{0}^{R} rH \, dr = H \frac{r^2}{2} \Big|_{0}^{R} = H \frac{R^2}{2} $$

Finally, integrate with respect to $\theta$:
$$ \int_{0}^{2\pi} H \frac{R^2}{2} \, d\theta = \frac{HR^2}{2} \theta \Big|_{0}^{2\pi} = \frac{HR^2}{2} (2\pi) = \pi R^2 H $$

This result, $\pi R^2 H$, is the well-known formula for the volume of a cylinder, confirming our setup.

## Common Mistakes to Avoid

*   **Forgetting the Jacobian $r$:** This is the most common error. Always include the $r$ when writing the volume element $dV = r \, dz \, dr \, d\theta$.
*   **Incorrect bounds for $\theta$:** Ensure your $\theta$ bounds cover the entire angular sweep of your region in the xy-plane projection. Forgetting to complete a full $2\pi$ sweep when necessary will lead to an incorrect result.
*   **Confusing $r$ and $R$:** Ensure you distinguish between the variable $r$ and any constant radius $R$ defining your region.
*   **Mixing Cartesian and Cylindrical expressions:** When setting up bounds, make sure all terms are in the correct coordinate system. For instance, a bound like $z = x^2 + y^2$ should be converted to $z = r^2$ in cylindrical coordinates.

By mastering the cylindrical coordinate transformation, you gain a powerful tool for solving a wide range of integration problems involving solids with rotational symmetry.

## Supports

- [[skills/mathematics/calculus/multiple-integral-evaluation/microskills/cylindrical-coordinate-transformation-for-triple-integrals|Cylindrical coordinate transformation for triple integrals]]
