---
type: "medium"
title: "Linearity and System Input-Output"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/system-property-analysis/microskills/linearity-and-input-output-relationship|linearity-and-input-output-relationship]]"
---
# Linearity and System Input-Output

In system property analysis, understanding how a system responds to its inputs is crucial. One fundamental property that dictates this response is **linearity**. Analyzing linearity helps us predict and understand a system's behavior.

## What is Linearity?

A system is considered linear if it satisfies two key properties:

1.  **Additivity (Superposition):** If input $x_1(t)$ produces output $y_1(t)$ and input $x_2(t)$ produces output $y_2(t)$, then the sum of these inputs $x_1(t) + x_2(t)$ must produce the sum of their respective outputs $y_1(t) + y_2(t)$.
    $$ y_1(t) \leftrightarrow x_1(t) $$
    $$ y_2(t) \leftrightarrow x_2(t) $$
    Then, for a linear system:
    $$ y_1(t) + y_2(t) \leftrightarrow x_1(t) + x_2(t) $$

2.  **Homogeneity (Scaling):** If input $x(t)$ produces output $y(t)$, then scaling the input by a constant factor $a$ must scale the output by the same factor $a$.
    $$ y(t) \leftrightarrow x(t) $$
    Then, for a linear system:
    $$ a \cdot y(t) \leftrightarrow a \cdot x(t) $$

Together, these two properties are often referred to as the **superposition principle**. A system is linear if and only if it obeys superposition.

## Analyzing Linearity: A Practical Approach

To analyze if a system is linear, we can test these properties using its input-output relationship, often expressed as a mathematical equation.

### Step-by-Step Analysis

Let's consider a system defined by the relationship between input $x(t)$ and output $y(t)$.

1.  **Identify the System Equation:** Write down the equation that describes how the output $y(t)$ is generated from the input $x(t)$.

2.  **Test Additivity:**
    *   Assume input $x_1(t)$ produces output $y_1(t)$. Substitute $x_1(t)$ into the system equation to find $y_1(t)$.
    *   Assume input $x_2(t)$ produces output $y_2(t)$. Substitute $x_2(t)$ into the system equation to find $y_2(t)$.
    *   Consider the combined input $x_1(t) + x_2(t)$. Substitute this into the system equation.
    *   Check if the result of the combined input equals $y_1(t) + y_2(t)$. If not, the system is non-linear.

3.  **Test Homogeneity:**
    *   Assume input $x(t)$ produces output $y(t)$. Substitute $x(t)$ into the system equation to find $y(t)$.
    *   Consider the scaled input $a \cdot x(t)$. Substitute this into the system equation.
    *   Check if the result of the scaled input equals $a \cdot y(t)$. If not, the system is non-linear.

4.  **Conclusion:** If both additivity and homogeneity hold true, the system is linear. If either fails, the system is non-linear.

### Worked Example

Let's analyze the following system: $y(t) = 2x(t) + 1$.

**1. System Equation:** $y(t) = 2x(t) + 1$

**2. Test Additivity:**
*   Let $x_1(t)$ be an input. Then $y_1(t) = 2x_1(t) + 1$.
*   Let $x_2(t)$ be another input. Then $y_2(t) = 2x_2(t) + 1$.
*   Consider the combined input $x_1(t) + x_2(t)$.
    Substituting into the system equation:
    $$ y(t) = 2(x_1(t) + x_2(t)) + 1 $$
    $$ y(t) = 2x_1(t) + 2x_2(t) + 1 $$
*   Now, let's check if this equals $y_1(t) + y_2(t)$:
    $$ y_1(t) + y_2(t) = (2x_1(t) + 1) + (2x_2(t) + 1) $$
    $$ y_1(t) + y_2(t) = 2x_1(t) + 2x_2(t) + 2 $$
*   Comparing the two results:
    $$ 2x_1(t) + 2x_2(t) + 1 \neq 2x_1(t) + 2x_2(t) + 2 $$
    Additivity fails.

Since additivity fails, we already know the system is non-linear. We can stop here. However, for completeness, let's test homogeneity.

**3. Test Homogeneity:**
*   Let $x(t)$ be an input. Then $y(t) = 2x(t) + 1$.
*   Consider the scaled input $a \cdot x(t)$.
    Substituting into the system equation:
    $$ y(t) = 2(a \cdot x(t)) + 1 $$
    $$ y(t) = 2a \cdot x(t) + 1 $$
*   Now, let's check if this equals $a \cdot y(t)$:
    $$ a \cdot y(t) = a \cdot (2x(t) + 1) $$
    $$ a \cdot y(t) = 2a \cdot x(t) + a $$
*   Comparing the two results:
    $$ 2a \cdot x(t) + 1 \neq 2a \cdot x(t) + a $$
    (Unless $a=1$ or the system is trivial). Homogeneity also fails.

**4. Conclusion:** The system $y(t) = 2x(t) + 1$ is **non-linear** because it fails both the additivity and homogeneity tests. The presence of the constant term '+1' is a common indicator of non-linearity.

### Common Non-Linearities

Systems that are not linear often involve operations like:

*   Squaring or cubing inputs: $y(t) = x(t)^2$
*   Taking absolute values: $y(t) = |x(t)|$
*   Multiplying inputs together: $y(t) = x_1(t)x_2(t)$
*   Adding a constant offset (as seen above): $y(t) = x(t) + c$ (where $c \neq 0$)
*   Thresholding or saturation: $y(t) = \max(0, x(t))$

## Why is Linearity Important?

Linear systems are fundamental in many areas of engineering and science because:

*   **Predictability:** Their behavior is easy to predict. If you double the input, you double the output.
*   **Solvability:** Many mathematical tools and techniques are specifically designed for linear systems (e.g., Fourier analysis, Laplace transforms).
*   **Decomposition:** Complex inputs can often be broken down into simpler components, and the system's response to the complex input can be found by summing the responses to the simpler components (superposition).

When analyzing a system, determining if it's linear is a primary step in understanding its overall behavior and choosing appropriate analysis methods.

## Supports

- [[skills/mathematics/system-property-analysis/microskills/linearity-and-input-output-relationship|Linearity and Input-Output Relationship]]
