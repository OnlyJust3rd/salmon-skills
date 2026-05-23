---
type: "medium"
title: "Understanding Limits of Single-Variable Functions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/function-analysis/microskills/limits-of-single-variable-functions|limits-of-single-variable-functions]]"
learning-time-in-minutes: 4
---
# Understanding Limits of Single-Variable Functions

This lesson focuses on a core concept in function analysis: understanding limits. Limits help us describe the behavior of a function as its input approaches a particular value, even if the function isn't defined at that exact point. This is crucial for understanding continuity and differentiability later on.

## What is a Limit?

Intuitively, the limit of a function \(f(x)\) as \(x\) approaches a value \(c\), written as \(\lim_{x \to c} f(x) = L\), means that the values of \(f(x)\) get arbitrarily close to \(L\) as \(x\) gets arbitrarily close to \(c\), but *not necessarily equal to* \(c\).

Think of it like this: if you're walking towards a specific point on a path, and you want to know what height you'll be at when you reach that point, the limit tells you that height, even if there's a sudden hole or a bridge that's not quite connected at that exact spot.

### Key Ideas

*   **Approaching, Not Reaching:** The value of the function *at* \(c\) (\(f(c)\)) is irrelevant to the limit. We only care about the values of \(f(x)\) for \(x\) *near* \(c\).
*   **Two-Sided Approach:** For a limit to exist, the function must approach the same value \(L\) as \(x\) approaches \(c\) from both the left (values less than \(c\)) and the right (values greater than \(c\)).
    *   Left-hand limit: \(\lim_{x \to c^-} f(x)\)
    *   Right-hand limit: \(\lim_{x \to c^+} f(x)\)
    *   For the limit \(\lim_{x \to c} f(x)\) to exist, we must have \(\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L\).

## Why Are Limits Important?

Limits are foundational for understanding:

*   **Continuity:** A function is continuous at a point if its limit at that point exists, the function is defined at that point, and the limit equals the function's value.
*   **Derivatives:** The derivative of a function, which measures its instantaneous rate of change, is defined using a limit.

## Evaluating Limits: Examples

### Example 1: A Simple Polynomial Function

Let's consider the function \(f(x) = x^2 + 1\). What is the limit as \(x\) approaches 2?

We can see that as \(x\) gets closer to 2, \(x^2 + 1\) gets closer to \(2^2 + 1 = 5\).

\[
\lim_{x \to 2} (x^2 + 1) = 5
\]

For polynomial functions, we can often find the limit by direct substitution because they are continuous everywhere.

### Example 2: A Rational Function with a Hole

Consider the function \(g(x) = \frac{x^2 - 4}{x - 2}\). What is the limit as \(x\) approaches 2?

If we try direct substitution, we get \(\frac{2^2 - 4}{2 - 2} = \frac{0}{0}\), which is an indeterminate form. This indicates that the function is not defined at \(x=2\), but a limit might still exist.

We can simplify the expression by factoring the numerator:
\(x^2 - 4 = (x - 2)(x + 2)\)

So, \(g(x) = \frac{(x - 2)(x + 2)}{x - 2}\).
For \(x \neq 2\), we can cancel out the \((x - 2)\) term:
\(g(x) = x + 2\), for \(x \neq 2\).

Now, we can find the limit by looking at the simplified form:
\[
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x + 2) = 2 + 2 = 4
\]
Even though \(g(2)\) is undefined, the limit as \(x\) approaches 2 is 4. This means there's a "hole" in the graph of \(g(x)\) at the point (2, 4).

### Example 3: Piecewise Function

Consider the function:
\[
h(x) =
\begin{cases}
x + 1 & \text{if } x < 1 \\
3 & \text{if } x = 1 \\
2x - 1 & \text{if } x > 1
\end{cases}
\]
Let's find the limit as \(x\) approaches 1.

*   **Left-hand limit:** As \(x\) approaches 1 from values less than 1, we use the first piece of the function:
    \[
    \lim_{x \to 1^-} h(x) = \lim_{x \to 1^-} (x + 1) = 1 + 1 = 2
    \]
*   **Right-hand limit:** As \(x\) approaches 1 from values greater than 1, we use the third piece of the function:
    \[
    \lim_{x \to 1^+} h(x) = \lim_{x \to 1^+} (2x - 1) = 2(1) - 1 = 2 - 1 = 1
    \]

Since the left-hand limit (2) is not equal to the right-hand limit (1), the overall limit \(\lim_{x \to 1} h(x)\) **does not exist**. Notice that the value of the function at \(x=1\) (\(h(1)=3\)) does not affect the existence of the limit.

## Common Mistakes to Avoid

*   **Assuming the limit is the function's value:** Remember that the limit is about what happens *near* a point, not necessarily *at* the point.
*   **Ignoring indeterminate forms:** When you get \(\frac{0}{0}\) or \(\frac{\infty}{\infty}\), it means you need to do more work, usually by algebraic manipulation (factoring, rationalizing, etc.).
*   **Forgetting to check both left and right limits:** A limit only exists if both sides approach the same value.

By understanding how to evaluate and interpret limits, you build a strong foundation for analyzing the behavior of functions more broadly.

## Supports

- [[skills/mathematics/calculus/function-analysis/microskills/limits-of-single-variable-functions|Limits of single-variable functions]]
