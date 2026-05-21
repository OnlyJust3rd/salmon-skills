---
type: "medium"
title: "Calculating Area Under a Curve Using Definite Integrals"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/integral-evaluation/microskills/area-under-a-curve-calculation|area-under-a-curve-calculation]]"
---
# Calculating Area Under a Curve Using Definite Integrals

This lesson focuses on a fundamental application of definite integrals: calculating the area bounded by a function's graph and the x-axis over a specific interval. This is a key step in understanding how integrals can represent accumulated quantities.

## The Concept

Imagine you have a curve representing some quantity over time, or some other continuous variable. If you want to know the total *amount* of that quantity over a specific period, and that quantity is represented by the height of the curve, you're essentially looking for the area under that curve.

The definite integral provides a precise mathematical tool to calculate this area. Geometrically, the definite integral of a function $f(x)$ from $a$ to $b$, denoted as $$ \int_a^b f(x) \, dx $$, represents the signed area between the curve $y = f(x)$ and the x-axis, from $x = a$ to $x = b$.

*   **Positive Area:** If the function $f(x)$ is above the x-axis (i.e., $f(x) \ge 0$) in the interval $[a, b]$, the definite integral directly gives you the geometric area.
*   **Negative Area:** If the function $f(x)$ is below the x-axis (i.e., $f(x) \le 0$) in the interval $[a, b]$, the definite integral will result in a negative value. To get the geometric area in this case, you would take the absolute value of the integral.
*   **Combined Areas:** If the function crosses the x-axis within the interval, the integral calculates the *net* signed area. Areas above the x-axis are positive, and areas below are negative.

## When to Use This Skill

You'll use this skill whenever you need to:

*   Calculate the total quantity represented by a rate of change. For example, if $v(t)$ is the velocity of an object, the definite integral of $v(t)$ from $t_1$ to $t_2$ gives the displacement (change in position) of the object during that time interval.
*   Find the size of a region defined by a function and the x-axis.
*   As a building block for more complex area calculations, like the area between two curves.

## The Formula and Process

The Fundamental Theorem of Calculus is key here. If $F(x)$ is an antiderivative of $f(x)$ (meaning $F'(x) = f(x)$), then:

$$ \int_a^b f(x) \, dx = F(b) - F(a) $$

Here's the step-by-step process:

1.  **Identify the function and the interval:** Determine the function $f(x)$ that defines the curve and the interval $[a, b]$ over which you want to find the area.
2.  **Find the antiderivative:** Calculate an antiderivative $F(x)$ of $f(x)$. Remember that antiderivatives are not unique; they differ by a constant ($+C$). For definite integrals, this constant cancels out, so you can use the simplest antiderivative (where $C=0$).
3.  **Evaluate the antiderivative at the endpoints:** Calculate $F(b)$ and $F(a)$.
4.  **Subtract:** Compute $F(b) - F(a)$. This is the value of the definite integral.
5.  **Interpret the result:** If $f(x)$ was entirely above the x-axis in $[a, b]$, this value is the area. If $f(x)$ was entirely below, the area is $|F(b) - F(a)|$. If the function crosses the x-axis, you'll need to consider the absolute values of integrals over sub-intervals where the function is consistently above or below the x-axis to find the total *geometric* area. For this specific microskill, we'll focus on cases where the function is primarily above or below the axis, or we're interested in the *signed* area.

## Worked Example

Let's find the area under the curve $f(x) = x^2 + 1$ from $x = 1$ to $x = 3$.

1.  **Function and Interval:** $f(x) = x^2 + 1$, interval $[1, 3]$.
    The function $f(x) = x^2 + 1$ is always positive, so the integral will directly give us the geometric area.

2.  **Find the Antiderivative:**
    The antiderivative of $x^2$ is $\frac{x^3}{3}$.
    The antiderivative of $1$ is $x$.
    So, an antiderivative $F(x)$ is $\frac{x^3}{3} + x$.

3.  **Evaluate at Endpoints:**
    At $x = 3$: $F(3) = \frac{3^3}{3} + 3 = \frac{27}{3} + 3 = 9 + 3 = 12$.
    At $x = 1$: $F(1) = \frac{1^3}{3} + 1 = \frac{1}{3} + 1 = \frac{4}{3}$.

4.  **Subtract:**
    $$ \int_1^3 (x^2 + 1) \, dx = F(3) - F(1) = 12 - \frac{4}{3} $$
    To subtract, find a common denominator:
    $$ 12 - \frac{4}{3} = \frac{36}{3} - \frac{4}{3} = \frac{32}{3} $$

5.  **Interpret:** The definite integral is $\frac{32}{3}$. Since $f(x) = x^2 + 1$ is positive on $[1, 3]$, the area under the curve from $x=1$ to $x=3$ is $\frac{32}{3}$ square units.

## Common Mistakes

*   **Forgetting the antiderivative:** Ensure you correctly find the antiderivative of each term in the function. Forgetting to increase the power by one or divide by the new power is common.
*   **Sign errors:** Be careful with negative signs, especially when dealing with functions that go below the x-axis or when evaluating $F(a)$.
*   **Incorrect interval:** Using the wrong limits of integration ($a$ and $b$) will lead to an incorrect result.
*   **Confusing definite and indefinite integrals:** Remember that a definite integral yields a numerical value (representing area, accumulated quantity, etc.), not a function with a "+C".

## Supports

- [[skills/mathematics/integral-evaluation/microskills/area-under-a-curve-calculation|Area under a curve calculation]]
