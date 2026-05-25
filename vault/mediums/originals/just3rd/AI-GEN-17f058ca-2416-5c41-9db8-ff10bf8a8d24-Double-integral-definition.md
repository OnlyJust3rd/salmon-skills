---
type: "medium"
title: "Recalling the Definition of Double Integrals"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/microskills/double-integral-definition|double-integral-definition]]"
related-skills:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/multiple-integral-evaluation|multiple-integral-evaluation]]"
learning-time-in-minutes: 3
---
# Recalling the Definition of Double Integrals

This lesson focuses on the fundamental definition of a double integral over a plane region. Understanding this definition is crucial for evaluating double integrals, which is a key part of **Multiple Integral Evaluation**.

## What is a Double Integral?

At its core, a double integral is an extension of the familiar single integral to two dimensions. While a single integral over an interval $[a, b]$ can be interpreted as the area under a curve $f(x)$ and above the x-axis, a double integral over a region $R$ in the $xy$-plane represents the **volume** under a surface $z = f(x, y)$ and above the region $R$.

We often denote a double integral of a function $f(x, y)$ over a region $R$ as:

$$ \iint_R f(x, y) \, dA $$

Here:
*   $\iint$ signifies a double integral.
*   $R$ is the region in the $xy$-plane over which we are integrating. This region can be simple (like a rectangle) or more complex.
*   $f(x, y)$ is the integrand, the function whose "values" we are summing up.
*   $dA$ represents an infinitesimal area element. In Cartesian coordinates, $dA$ can be either $dx \, dy$ or $dy \, dx$.

## The Definition: Approximating Volume

The formal definition of a double integral is built upon the idea of approximating the volume using a large number of small rectangular prisms.

1.  **Partition the Region:** We divide the plane region $R$ into a large number of small, non-overlapping rectangular subregions. Let's call these subregions $R_{ij}$.

2.  **Choose Sample Points:** Within each subregion $R_{ij}$, we select a sample point $(x_{ij}^*, y_{ij}^*)$.

3.  **Approximate Volume of Prisms:** For each subregion $R_{ij}$, we can imagine a thin rectangular prism whose base is $R_{ij}$ and whose height is given by the function's value at the sample point, $f(x_{ij}^*, y_{ij}^*)$. The volume of this small prism is approximately $f(x_{ij}^*, y_{ij}^*) \cdot \Delta A_{ij}$, where $\Delta A_{ij}$ is the area of the subregion $R_{ij}$.

4.  **Summing the Volumes:** We then sum the volumes of all these small prisms to get an approximation of the total volume:

    $$ \sum_{i=1}^m \sum_{j=1}^n f(x_{ij}^*, y_{ij}^*) \Delta A_{ij} $$

5.  **Taking the Limit:** As the number of subregions increases, and the size of each subregion shrinks (approaching zero area), this sum approaches the exact volume. This limiting process is what defines the double integral:

    $$ \iint_R f(x, y) \, dA = \lim_{m,n \to \infty} \sum_{i=1}^m \sum_{j=1}^n f(x_{ij}^*, y_{ij}^*) \Delta A_{ij} $$

This definition is analogous to how the Riemann integral for single-variable calculus is defined.

## Key Components of the Definition

To successfully recall the definition, remember these essential parts:

*   **Region of Integration (R):** The 2D domain in the $xy$-plane.
*   **Integrand (f(x, y)):** The function defining the "height" of the volume.
*   **Infinitesimal Area Element (dA):** Represents a tiny piece of area within $R$.
*   **Summation:** The process of adding up contributions from many small parts.
*   **Limit:** The process of making the small parts infinitely small and infinitely numerous to achieve exactness.

Understanding this definitional foundation is the first step to mastering double integral evaluation.

## Supports

- [[skills/mathematics/calculus/multiple-integral-evaluation/microskills/double-integral-definition|Double integral definition]]
