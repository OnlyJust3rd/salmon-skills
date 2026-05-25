---
type: "medium"
title: "Calculating Area Between Multiple Polar Curves"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/polar-coordinate-systems/microskills/multiple-polar-curve-area-calculation|multiple-polar-curve-area-calculation]]"
learning-time-in-minutes: 6
---
# Calculating Area Between Multiple Polar Curves

This lesson focuses on applying polar integration techniques to find the area of regions defined by *more than one* polar curve. This builds upon your understanding of finding the area bounded by a single polar curve.

## When to Use This Technique

You'll use this when you need to find the area of a region that is:

*   Defined by the intersection of two or more polar curves.
*   Part of a larger shape, and you need to find the area between specific boundaries.
*   Described by finding the area of one curve and subtracting the area of another (or vice-versa).

## The Core Idea: Subtracting Areas

The fundamental principle for finding the area between multiple polar curves is to subtract the area of the inner curve from the area of the outer curve over the relevant angular interval.

Recall the formula for the area of a region bounded by a single polar curve $$r = f(\theta)$$ from $$\theta = \alpha$$ to $$\theta = \beta\):

$$
A = \frac{1}{2} \int_{\alpha}^{\beta} [f(\theta)]^2 d\theta
$$

When dealing with two curves, say $$r_1 = f_1(\theta)$$ and $$r_2 = f_2(\theta)$$, and you want the area between them where $$f_1(\theta) \geq f_2(\theta)$$ for $$\theta \in [\alpha, \beta]$$ (meaning $$r_1$$ is further from the origin than $$r_2$$), the area is:

$$
A = \frac{1}{2} \int_{\alpha}^{\beta} ([f_1(\theta)]^2 - [f_2(\theta)]^2) d\theta
$$

The key is to correctly identify which curve is "outer" (larger radius) and which is "inner" (smaller radius) over the integration interval, and to determine the correct limits of integration.

## Steps to Calculate Area Between Multiple Polar Curves

1.  **Sketch the Curves:** This is the most crucial step. Graph both polar curves to visualize the region of interest. Pay close attention to their intersection points and how they overlap.
2.  **Find Intersection Points:** Determine the angles $$\theta$$ where the curves intersect. Set $$r_1(\theta) = r_2(\theta)$$ and solve for $$\theta$$. Be mindful that polar coordinates can have multiple representations for the same point (e.g., $$(r, \theta)$$ and $$(-r, \theta + \pi)$$).
3.  **Identify the Integration Interval:** Based on your sketch and intersection points, determine the range of $$\theta$$ values that define the specific area you want to calculate. This interval might be between two consecutive intersection points, or it might span across regions where one curve is outside the other.
4.  **Determine Outer and Inner Curves:** Within your identified interval, decide which function, $$r_1(\theta)$$ or $$r_2(\theta)$$, has the larger radius (is "outer") and which has the smaller radius (is "inner").
5.  **Set Up the Integral:** Use the formula: $$A = \frac{1}{2} \int_{\alpha}^{\beta} (\text{Outer radius})^2 - (\text{Inner radius})^2 d\theta$$.
6.  **Evaluate the Integral:** Calculate the definite integral. This will likely involve trigonometric identities for integration (e.g., power reduction formulas for $$sin^2\theta$$ and $$cos^2\theta$$).

## Worked Example: Area Inside One Cardioid and Outside Another

Let's find the area that lies inside the cardioid $$r = 3 + 3\sin\theta$$ and outside the cardioid $$r = 3\sin\theta$$.

**Step 1: Sketch the Curves**

*   $$r = 3\sin\theta$$: This is a circle of radius 1.5 centered at $$(0, 1.5)$$ on the y-axis. It is traced from $$\theta = 0$$ to $$\theta = \pi$$.
*   $$r = 3 + 3\sin\theta$$: This is a cardioid opening upwards.

When sketched, we see a region where the circle is entirely contained within the cardioid. We want the area of the part of the cardioid that *isn't* covered by the circle.

**Step 2: Find Intersection Points**

Set the two equations equal:
$$3 + 3\sin\theta = 3\sin\theta$$
$$3 = 0$$
This equation has no solution, which means these curves do not intersect in the standard way. This is a clue that one curve is entirely inside the other over certain ranges. However, we need to consider the *behavior* of the curves. The circle $$r=3\sin\theta$$ traces from $$\theta=0$$ to $$\theta=\pi$$.

Let's re-evaluate the problem statement. If the question implies finding the area of the "larger" cardioid *excluding* the area occupied by the "smaller" circle, we need to find the angles where the circle *is* within the cardioid.

Consider the range of $$\theta$$ for the circle: $$r = 3\sin\theta$$ is non-negative for $$0 \le \theta \le \pi$$. For these values, $$3\sin\theta \ge 0$$.
The cardioid $$r = 3 + 3\sin\theta$$ is always positive since $$\sin\theta \ge -1$$.

Let's consider the area traced by the circle, which is from $$\theta = 0$$ to $$\theta = \pi$$. Over this entire range, $$3 + 3\sin\theta \ge 3\sin\theta$$. This is because $$3 \ge 0$$. Thus, the cardioid $$r = 3 + 3\sin\theta$$ is always "outside" or "equal to" the circle $$r = 3\sin\theta$$ for $$0 \le \theta \le \pi$$.

**Step 3: Identify the Integration Interval**

The region we are interested in is defined by the portion of the cardioid that extends beyond the circle. The circle is fully traced from $$0$$ to $$\pi$$. So, our interval is $$[\alpha, \beta] = [0, \pi]$$.

**Step 4: Determine Outer and Inner Curves**

Over the interval $$[0, \pi]$$:
*   Outer curve: $$r_1 = 3 + 3\sin\theta$$
*   Inner curve: $$r_2 = 3\sin\theta$$

**Step 5: Set Up the Integral**

The area $$A$$ is given by:
$$
A = \frac{1}{2} \int_{0}^{\pi} ([3 + 3\sin\theta]^2 - [3\sin\theta]^2) d\theta
$$

**Step 6: Evaluate the Integral**

First, expand the terms:
$$
[3 + 3\sin\theta]^2 = 9 + 18\sin\theta + 9\sin^2\theta
$$
$$
[3\sin\theta]^2 = 9\sin^2\theta
$$

Now substitute these back into the integral:
$$
A = \frac{1}{2} \int_{0}^{\pi} ( (9 + 18\sin\theta + 9\sin^2\theta) - 9\sin^2\theta ) d\theta
$$
$$
A = \frac{1}{2} \int_{0}^{\pi} (9 + 18\sin\theta) d\theta
$$

Now, integrate term by term:
$$
\int (9 + 18\sin\theta) d\theta = 9\theta - 18\cos\theta + C
$$

Evaluate the definite integral from $$0$$ to $$\pi$$:
$$
[9\theta - 18\cos\theta]_{0}^{\pi} = (9\pi - 18\cos(\pi)) - (9(0) - 18\cos(0))
$$
$$
= (9\pi - 18(-1)) - (0 - 18(1))
$$
$$
= (9\pi + 18) - (-18)
$$
$$
= 9\pi + 18 + 18 = 9\pi + 36
$$

Finally, multiply by $$1/2$$:
$$
A = \frac{1}{2} (9\pi + 36) = \frac{9\pi}{2} + 18
$$

So, the area inside the cardioid $$r = 3 + 3\sin\theta$$ and outside the circle $$r = 3\sin\theta$$ is $$\frac{9\pi}{2} + 18$$.

## Common Pitfalls

*   **Incorrectly identifying the outer/inner curve:** Always check the radius values for a test angle within your integration interval to confirm which curve is further from the origin.
*   **Missing intersection points:** Ensure you've found all relevant intersection angles, especially when curves loop or overlap in complex ways.
*   **Errors in trigonometric integration:** Be careful with power reduction formulas and signs when integrating $$sin^2\theta$$ or $$cos^2\theta$$.
*   **Forgetting the $$\frac{1}{2}$$ factor:** This is a common oversight in polar area calculations.

By carefully sketching, finding intersections, and setting up the subtraction of areas correctly, you can confidently calculate the areas of regions bounded by multiple polar curves.

## Supports

- [[skills/mathematics/calculus/polar-coordinate-systems/microskills/multiple-polar-curve-area-calculation|Multiple polar curve area calculation]]
