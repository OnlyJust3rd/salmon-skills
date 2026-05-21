---
type: "medium"
title: "Setting Up Triple Integrals in Rectangular Coordinates"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multiple-integral-evaluation/microskills/triple-integral-setup-rectangular|triple-integral-setup-rectangular]]"
---
# Setting Up Triple Integrals in Rectangular Coordinates

This lesson focuses on the crucial first step in evaluating triple integrals: setting them up correctly in rectangular coordinates. This skill is fundamental for calculating volumes, masses, and other properties of 3D objects. We'll break down the process with clear examples.

## The Core Idea: Iterated Integration in 3D

A triple integral, denoted as $$ \iiint_E f(x, y, z) \, dV $$, sums up the values of a function $$ f(x, y, z) $$ over a three-dimensional region $$ E $$. In rectangular coordinates, this becomes an iterated integral of the form:

$$
\int_{a}^{b} \int_{c}^{d} \int_{g(x,y)}^{h(x,y)} f(x, y, z) \, dz \, dy \, dx
$$

The order of integration (e.g., $$ dz \, dy \, dx $$, $$ dx \, dy \, dz $$) matters and depends on how we describe the boundaries of our solid region $$ E $$.

## Steps to Set Up a Triple Integral in Rectangular Coordinates

1.  **Visualize the Solid Region (E):** This is the most important step. Sketch the solid region bounded by the given surfaces. Understanding its shape will guide your choice of integration limits.

2.  **Choose an Order of Integration:** Decide which variable you will integrate with respect to first (e.g., $$ z $$, $$ y $$, or $$ x $$). A good strategy is often to choose the variable whose limits are easiest to define as constants or functions of the *other* two variables.

3.  **Determine the Limits of Integration:**
    *   **Innermost Integral:** If you chose to integrate with respect to $$ z $$ first, find the functions $$ z_{lower}(x, y) $$ and $$ z_{upper}(x, y) $$ that define the bottom and top surfaces of the region $$ E $$ for any given $$ (x, y) $$ point within the projection of $$ E $$ onto the $$ xy $$-plane.
    *   **Middle Integral:** Next, consider the projection of the solid region $$ E $$ onto the $$ xy $$-plane. Determine the limits for the second variable (e.g., $$ y $$). These limits will typically be functions of the *remaining* variable (e.g., $$ y_{lower}(x) $$ and $$ y_{upper}(x) $$).
    *   **Outermost Integral:** Finally, determine the constant limits for the outermost variable (e.g., $$ x $$). These will be the minimum and maximum values of that variable over the entire region.

4.  **Write the Integral:** Assemble the integral with the correct integrand and the determined limits in the chosen order.

## Worked Example: Volume of a Wedge

**Problem:** Set up a triple integral to find the volume of the wedge in the first octant bounded by the plane $$ z = 1 - y $$ and the cylinder $$ y = 1 - x^2 $$.

**Solution:**

1.  **Visualize the Region:**
    *   The plane $$ z = 1 - y $$ slants downwards as $$ y $$ increases.
    *   The cylinder $$ y = 1 - x^2 $$ is a parabolic cylinder opening towards the negative $$ y $$ direction.
    *   "First octant" means $$ x \ge 0 $$, $$ y \ge 0 $$, and $$ z \ge 0 $$.

    Looking at these constraints, the region is bounded below by the $$ xy $$-plane ($$ z = 0 $$) and above by the plane $$ z = 1 - y $$. The projection onto the $$ xy $$-plane is bounded by $$ x=0 $$, $$ y=0 $$, and the curve $$ y = 1 - x^2 $$.

2.  **Choose an Order of Integration:** Let's choose $$ dz \, dy \, dx $$. This is often convenient when the top and bottom surfaces are easily expressed as functions of $$ x $$ and $$ y $$.

3.  **Determine the Limits:**
    *   **Innermost ($$ z $$):** For any $$ (x, y) $$ in the base, $$ z $$ ranges from the bottom surface ($$ z = 0 $$) to the top surface ($$ z = 1 - y $$). So, the limits for $$ z $$ are $$ 0 \le z \le 1 - y $$.
    *   **Middle ($$ y $$):** Now consider the projection onto the $$ xy $$-plane. This projection is in the first quadrant and bounded by $$ x=0 $$, $$ y=0 $$, and $$ y = 1 - x^2 $$. For a fixed $$ x $$, $$ y $$ goes from the bottom boundary ($$ y = 0 $$) up to the curve ($$ y = 1 - x^2 $$). So, the limits for $$ y $$ are $$ 0 \le y \le 1 - x^2 $$.
    *   **Outermost ($$ x $$):** The projection onto the $$ xy $$-plane extends from $$ x=0 $$ to where the curve $$ y = 1 - x^2 $$ intersects the $$ x $$-axis (where $$ y=0 $$). Setting $$ 1 - x^2 = 0 $$ gives $$ x = \pm 1 $$. Since we are in the first octant, $$ x $$ goes from $$ 0 $$ to $$ 1 $$. So, the limits for $$ x $$ are $$ 0 \le x \le 1 $$.

4.  **Write the Integral:** The volume $$ V $$ is given by:

    $$
    V = \int_{0}^{1} \int_{0}^{1-x^2} \int_{0}^{1-y} \, dz \, dy \, dx
    $$

**Note:** If we had chosen a different order, say $$ dx \, dy \, dz $$, the limits would be more complex to derive and the resulting integral might be harder to evaluate.

## Common Pitfalls to Avoid

*   **Incorrectly visualizing the region:** Always sketch it! If the surfaces are complicated, consider projecting onto different planes to get a better understanding.
*   **Confusing the order of integration:** Make sure the limits for each integral depend only on variables *outside* that integral.
*   **Forgetting "first octant" or other constraints:** These are crucial in defining the boundaries.
*   **Assuming limits are constant:** Many limits will be functions of other variables, especially for curved surfaces.

Mastering the setup of triple integrals is a skill that improves with practice. By carefully visualizing the region and systematically determining the limits, you'll be well on your way to evaluating them.

## Supports

- [[skills/mathematics/multiple-integral-evaluation/microskills/triple-integral-setup-rectangular|Triple integral setup (rectangular)]]
