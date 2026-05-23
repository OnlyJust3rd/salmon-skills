---
type: "medium"
title: "The Jacobian for Polar Coordinate Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/polar-coordinate-systems/microskills/jacobian-for-polar-transformation|jacobian-for-polar-transformation]]"
learning-time-in-minutes: 3
---
# The Jacobian for Polar Coordinate Transformation

When we transform a double integral from rectangular coordinates ($x, y$) to polar coordinates ($r, \theta$), we need to account for how the area element changes. This is where the Jacobian comes in.

## What is the Jacobian?

In essence, the Jacobian is a determinant of a matrix of partial derivatives. For a transformation from $(x, y)$ to $(r, \theta)$, it tells us the factor by which an infinitesimal area in the $xy$-plane is scaled when represented in the $r\theta$-plane.

For the transformation to polar coordinates:
$$
x = r \cos \theta
$$
$$
y = r \sin \theta
$$

The Jacobian, denoted as $J$ or $\frac{\partial(x,y)}{\partial(r,\theta)}$, is calculated as:

$$
J = \det \begin{pmatrix}
\frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\
\frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta}
\end{pmatrix}
$$

## Calculating the Jacobian for Polar Coordinates

Let's compute the partial derivatives needed:

*   $\frac{\partial x}{\partial r} = \frac{\partial}{\partial r} (r \cos \theta) = \cos \theta$
*   $\frac{\partial x}{\partial \theta} = \frac{\partial}{\partial \theta} (r \cos \theta) = -r \sin \theta$
*   $\frac{\partial y}{\partial r} = \frac{\partial}{\partial r} (r \sin \theta) = \sin \theta$
*   $\frac{\partial y}{\partial \theta} = \frac{\partial}{\partial \theta} (r \sin \theta) = r \cos \theta$

Now, substitute these into the determinant:

$$
J = \det \begin{pmatrix}
\cos \theta & -r \sin \theta \\
\sin \theta & r \cos \theta
\end{pmatrix}
$$

The determinant of a 2x2 matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is $ad - bc$. Applying this:

$$
J = (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta)
$$
$$
J = r \cos^2 \theta + r \sin^2 \theta
$$
$$
J = r (\cos^2 \theta + \sin^2 \theta)
$$

Using the trigonometric identity $\cos^2 \theta + \sin^2 \theta = 1$:

$$
J = r(1) = r
$$

## The Area Element Transformation

The fundamental relationship for transforming double integrals is:

$$
dx \, dy = |J| \, dr \, d\theta
$$

For polar coordinates, since $r$ represents a radial distance, it is always non-negative ($r \ge 0$). Therefore, the absolute value of the Jacobian is simply $r$:

$$
dx \, dy = r \, dr \, d\theta
$$

This means that when you convert a double integral from rectangular to polar coordinates, every $dx \, dy$ in the original integral is replaced by $r \, dr \, d\theta$. The factor of $r$ is crucial for correctly accounting for the change in area.

## Why is the Jacobian Important?

Imagine trying to integrate over a circular region in the $xy$-plane using rectangular coordinates. The boundaries can be complicated, involving square roots. In polar coordinates, this same region is described by simple constant ranges for $r$ and $\theta$. However, the "sampling" of area elements isn't uniform in polar coordinates. An area element at a larger radius $r$ covers a larger physical area than an element at a smaller radius, for the same changes in $dr$ and $d\theta$. The Jacobian of $r$ precisely corrects for this.

## Common Mistakes

*   **Forgetting the Jacobian:** The most common error is to simply replace $dx \, dy$ with $dr \, d\theta$ and forget the crucial factor of $r$. This will lead to an incorrect result.
*   **Incorrectly calculating derivatives:** Errors in finding the partial derivatives of $x$ and $y$ with respect to $r$ and $\theta$ will propagate into an incorrect Jacobian.
*   **Using the negative Jacobian:** While the Jacobian can be negative for some transformations, for the standard polar coordinate conversion, $r$ is always non-negative, so we use $|J| = r$.

**Key Takeaway:** The Jacobian for transforming to polar coordinates is always $r$. Remember to include this factor when setting up your double integral in polar form.

## Supports

- [[skills/mathematics/calculus/polar-coordinate-systems/microskills/jacobian-for-polar-transformation|Jacobian for polar transformation]]
