---
type: "medium"
title: "Multivariable Function Continuity Conditions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/function-analysis/microskills/multivariable-function-continuity-conditions|multivariable-function-continuity-conditions]]"
related-skills:
  - "[[skills/mathematics/calculus/function-analysis/function-analysis|function-analysis]]"
learning-time-in-minutes: 6
---
# Multivariable Function Continuity Conditions

Understanding when a multivariable function is "well-behaved" at a specific point is crucial for analyzing its behavior and performing further calculations. This lesson focuses on the conditions that define continuity for functions of two or more variables.

## What is Continuity for Multivariable Functions?

For a function of a single variable, \(f(x)\), continuity at a point \(x=a\) intuitively means that you can draw the graph of the function without lifting your pen. For multivariable functions, this idea extends to a specific point \((a, b)\) in the domain.

A function \(f(x, y)\) is continuous at a point \((a, b)\) if the following three conditions are met:

1.  **The function is defined at the point:** \(f(a, b)\) must exist. This means the point \((a, b)\) is within the domain of the function.
2.  **The limit of the function exists at the point:** The limit of \(f(x, y)\) as \((x, y)\) approaches \((a, b)\) must exist. We denote this as \(\lim_{(x,y) \to (a,b)} f(x, y) = L\), where \(L\) is a finite real number.
3.  **The limit equals the function's value:** The value of the limit must be equal to the function's value at that point. That is, \(\lim_{(x,y) \to (a,b)} f(x, y) = f(a, b)\).

If any one of these conditions fails, the function is discontinuous at that point.

## Breaking Down the Conditions

Let's explore each condition in more detail.

### Condition 1: Function Defined at the Point

This is usually straightforward. You simply evaluate the function at the given point. If you get a real number, the function is defined. If you encounter an operation like division by zero, taking the square root of a negative number (in real-valued functions), or have an undefined expression, then the function is not defined at that point, and therefore, not continuous.

**Example:**
Consider \(f(x, y) = \frac{x^2 - y^2}{x - y}\) at the point \((1, 1)\).
If we try to plug in \((1, 1)\), we get \(\frac{1^2 - 1^2}{1 - 1} = \frac{0}{0}\), which is an indeterminate form. Thus, \(f(1, 1)\) is not defined. This function is discontinuous at \((1, 1)\).

### Condition 2: Limit Exists at the Point

This is often the most challenging part for multivariable functions. For a limit to exist at a point, the function must approach the same value regardless of the path taken to approach that point.

**Intuition:** Imagine approaching a mountain peak from different directions. If the altitude you reach is the same no matter which path you take, the altitude at the peak is well-defined. If the altitude varies depending on your path, the altitude at that exact spot is problematic.

**How to check for limit existence:**
*   **Direct Substitution:** If substituting the point into the function results in a determinate form (e.g., a real number), the limit typically exists and is that number.
*   **Path Testing:** If direct substitution leads to an indeterminate form (like \(\frac{0}{0}\)), you can test different paths of approach. If you find two different paths that yield different limit values, then the overall limit does not exist.
    *   **Path 1: Along the x-axis (y=0):** Substitute \(y=0\) into the function and find the limit as \(x \to a\).
    *   **Path 2: Along the y-axis (x=0):** Substitute \(x=0\) into the function and find the limit as \(y \to b\).
    *   **Path 3: Along lines y = mx:** Substitute \(y = mx\) into the function and find the limit as \(x \to a\).
    *   **Path 4: Along parabolas \(y = kx^2\), \(x = ky^2\), etc.**

If all tested paths give the same limit, it *suggests* the limit might exist, but it doesn't prove it. To prove the limit exists, more rigorous methods like the Squeeze Theorem or polar coordinates are often needed.

**Example:**
Consider \(f(x, y) = \frac{xy}{x^2 + y^2}\) at the point \((0, 0)\).
Direct substitution gives \(\frac{0 \cdot 0}{0^2 + 0^2} = \frac{0}{0}\).
Let's test paths:
*   **Path 1 (y=0):** \(\lim_{x \to 0} \frac{x \cdot 0}{x^2 + 0^2} = \lim_{x \to 0} \frac{0}{x^2} = 0\).
*   **Path 2 (x=0):** \(\lim_{y \to 0} \frac{0 \cdot y}{0^2 + y^2} = \lim_{y \to 0} \frac{0}{y^2} = 0\).
*   **Path 3 (y=x):** \(\lim_{x \to 0} \frac{x \cdot x}{x^2 + x^2} = \lim_{x \to 0} \frac{x^2}{2x^2} = \frac{1}{2}\).

Since we found two paths (y=0 and y=x) that yield different limit values (0 and 1/2), the limit of \(f(x, y)\) as \((x, y)\) approaches \((0, 0)\) **does not exist**. Therefore, \(f(x, y)\) is discontinuous at \((0, 0)\).

### Condition 3: Limit Equals Function Value

If the function is defined at the point (Condition 1) and the limit exists at the point (Condition 2), this final condition checks if these two values match. If they do, the function is continuous. If they don't, the function has a "removable discontinuity" (if the limit exists) or a more severe discontinuity.

**Example:**
Consider \(g(x, y) = \begin{cases} \frac{x^2 - y^2}{x - y} & \text{if } x \neq y \\ 2 & \text{if } x = y \end{cases}\) at the point \((1, 1)\).
*   **Condition 1:** \(g(1, 1) = 2\) (defined).
*   **Condition 2:** Let's find the limit as \((x, y) \to (1, 1)\). For \(x \neq y\), \(g(x, y) = \frac{(x-y)(x+y)}{x-y} = x+y\).
    So, \(\lim_{(x,y) \to (1,1)} g(x, y) = \lim_{(x,y) \to (1,1)} (x+y) = 1+1 = 2\). The limit exists.
*   **Condition 3:** The limit (2) is equal to the function's value at \((1, 1)\) (which is also 2).

Since all three conditions are met, \(g(x, y)\) is continuous at \((1, 1)\).

## Common Types of Discontinuities

*   **Removable Discontinuity:** Occurs when the limit exists, but either the function is not defined at the point or the function's value does not equal the limit. This can often be "fixed" by redefining the function at that single point. (Like the first example before we made it continuous).
*   **Jump Discontinuity:** Occurs when the function "jumps" from one value to another at a point. This is more common in piecewise functions where different pieces don't meet.
*   **Infinite Discontinuity:** Occurs when the function approaches infinity or negative infinity as you approach a point (often due to division by zero). The limit does not exist as a finite number.

## Key Takeaway

To determine if a multivariable function is continuous at a point \((a, b)\), you must verify:
1.  \(f(a, b)\) is defined.
2.  \(\lim_{(x,y) \to (a,b)} f(x, y)\) exists.
3.  \(\lim_{(x,y) \to (a,b)} f(x, y) = f(a, b)\).

## Supports

- [[skills/mathematics/calculus/function-analysis/microskills/multivariable-function-continuity-conditions|Multivariable function continuity conditions]]
