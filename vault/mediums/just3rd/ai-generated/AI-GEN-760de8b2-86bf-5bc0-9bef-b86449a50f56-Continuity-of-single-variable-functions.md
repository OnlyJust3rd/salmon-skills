---
type: "medium"
title: "Understanding Continuity of Single-Variable Functions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/function-analysis/microskills/continuity-of-single-variable-functions|Continuity of single-variable functions]]"
---
# Understanding Continuity of Single-Variable Functions

This lesson focuses on understanding the concept of continuity for single-variable functions, a fundamental property in function analysis.

## What is Continuity?

Intuitively, a function is continuous if you can draw its graph without lifting your pen. This means there are no breaks, jumps, or holes in the graph. Mathematically, continuity at a specific point is defined by three conditions:

1.  **The function is defined at that point.** The input value must be in the function's domain.
2.  **The limit of the function exists at that point.** As you approach the input value from both the left and the right, the function's output approaches a single, specific value.
3.  **The limit equals the function's value at that point.** The value the function approaches (the limit) must be the same as the actual output of the function at that point.

### Formal Definition of Continuity

A function \(f(x)\) is continuous at a point \(x = c\) if and only if:

1.  \(f(c)\) is defined.
2.  \(\lim_{x \to c} f(x)\) exists.
3.  \(\lim_{x \to c} f(x) = f(c)\)

If any of these conditions are not met, the function is discontinuous at \(x = c\).

## Types of Discontinuities

When a function is not continuous at a point, it has a discontinuity. We can classify these into a few types:

### 1. Removable Discontinuity (Hole)

This occurs when the limit of the function exists at a point, but either the function is not defined at that point, or its value is defined differently than the limit. It's "removable" because you could redefine the function at that single point to make it continuous.

**Example:**

Consider the function \(f(x) = \frac{x^2 - 4}{x - 2}\).

*   At \(x = 2\), \(f(2)\) is undefined (division by zero). This violates condition 1.
*   However, let's look at the limit:
    \[
    \lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 2 + 2 = 4
    \]
    The limit exists and is equal to 4.
*   If we were to define \(f(2) = 4\), the function would become continuous at \(x = 2\).

Graphically, this looks like a single point missing from an otherwise continuous line or curve.

### 2. Jump Discontinuity

This occurs when the left-hand limit and the right-hand limit at a point exist but are not equal. The graph "jumps" from one value to another.

**Example:**

Consider the piecewise function:
\[
g(x) =
\begin{cases}
x + 1 & \text{if } x < 1 \\
2x & \text{if } x \ge 1
\end{cases}
\]

*   At \(x = 1\):
    *   Left-hand limit: \(\lim_{x \to 1^-} g(x) = \lim_{x \to 1^-} (x + 1) = 1 + 1 = 2\)
    *   Right-hand limit: \(\lim_{x \to 1^+} g(x) = \lim_{x \to 1^+} (2x) = 2(1) = 2\)
    *   The function value: \(g(1) = 2(1) = 2\)

In this specific case, the limits match the function value, so \(g(x)\) is continuous at \(x=1\). Let's modify it slightly to show a jump:

\[
h(x) =
\begin{cases}
x + 1 & \text{if } x < 1 \\
2x + 3 & \text{if } x \ge 1
\end{cases}
\]

*   At \(x = 1\):
    *   Left-hand limit: \(\lim_{x \to 1^-} h(x) = \lim_{x \to 1^-} (x + 1) = 1 + 1 = 2\)
    *   Right-hand limit: \(\lim_{x \to 1^+} h(x) = \lim_{x \to 1^+} (2x + 3) = 2(1) + 3 = 5\)
    *   Since \(2 \neq 5\), the limit \(\lim_{x \to 1} h(x)\) does not exist. This violates condition 2.

Graphically, there is a clear vertical gap between the two pieces of the graph.

### 3. Infinite Discontinuity (Asymptote)

This occurs when at least one of the one-sided limits is infinite (\(\infty\) or \(-\infty\)). This typically happens when the denominator of a rational function becomes zero at a point.

**Example:**

Consider the function \(f(x) = \frac{1}{x}\).

*   At \(x = 0\), \(f(0)\) is undefined. Condition 1 fails.
*   Let's look at the limits:
    *   Left-hand limit: \(\lim_{x \to 0^-} \frac{1}{x} = -\infty\)
    *   Right-hand limit: \(\lim_{x \to 0^+} \frac{1}{x} = +\infty\)
    *   Since the limits are infinite, \(\lim_{x \to 0} f(x)\) does not exist. Condition 2 fails.

Graphically, this is characterized by a vertical asymptote at \(x=0\).

## Continuity Over an Interval

A function is said to be continuous over an open interval \((a, b)\) if it is continuous at every point \(c\) in that interval.

For a function to be continuous over a **closed interval** \([a, b]\), it must be continuous on the open interval \((a, b)\), and the following one-sided limits must equal the function's values at the endpoints:

*   \(\lim_{x \to a^+} f(x) = f(a)\)
*   \(\lim_{x \to b^-} f(x) = f(b)\)

## Common Continuous Functions

Many common types of functions are continuous over their entire domains:

*   **Polynomials:** Like \(f(x) = 3x^2 - 5x + 2\).
*   **Rational Functions:** Like \(f(x) = \frac{x+1}{x-3}\), but are discontinuous where the denominator is zero.
*   **Exponential Functions:** Like \(f(x) = e^x\).
*   **Logarithmic Functions:** Like \(f(x) = \ln(x)\), but are discontinuous at or below 0.
*   **Trigonometric Functions:** Like \(\sin(x)\) and \(\cos(x)\).

Understanding continuity is crucial for analyzing function behavior, especially when dealing with calculus concepts like derivatives and integrals. It helps us predict how a function will behave around specific points and over broader intervals.

## Supports

- [[skills/mathematics/function-analysis/microskills/continuity-of-single-variable-functions|Continuity of single-variable functions]]
