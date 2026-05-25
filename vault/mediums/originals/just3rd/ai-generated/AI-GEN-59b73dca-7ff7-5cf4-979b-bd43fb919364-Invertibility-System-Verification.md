---
type: "medium"
title: "Verifying System Invertibility"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/invertibility-system-verification|invertibility-system-verification]]"
learning-time-in-minutes: 5
---
# Verifying System Invertibility

This lesson focuses on a specific aspect of **System Property Analysis**: applying mathematical tests to determine if a given system exhibits static/dynamic, causal, stable, invertible, linear, and time-invariant characteristics. Our microskill is **Invertibility System Verification**, where we will learn to apply mathematical tests to determine system invertibility.

## What is System Invertibility?

A system is considered **invertible** if it's possible to uniquely recover the input signal from the output signal. In simpler terms, if two different inputs produce the same output, the system is **not invertible**. Imagine a function; if that function is one-to-one, then it has an inverse.

### Why is Invertibility Important?

Understanding if a system is invertible is crucial for several reasons:

*   **Reconstruction:** If you can invert a system, you can potentially reconstruct the original input from its processed output. This is vital in fields like signal processing and data recovery.
*   **System Design:** In designing systems, you might want to ensure that information isn't lost during processing. If a system is not invertible, some information about the input is permanently gone.
*   **Troubleshooting:** If a system is supposed to be invertible but isn't behaving as expected, it can indicate a fault or an unexpected interaction.

## The Mathematical Test for Invertibility

To test for invertibility, we use a straightforward mathematical approach. We assume we have two different input signals, say \(x_1(t)\) and \(x_2(t)\), and that they produce the same output signal, \(y(t)\), from a system. If we can then prove that \(x_1(t)\) *must* equal \(x_2(t)\), then the system is invertible. Conversely, if we can show that there exist two *different* inputs that produce the same output, the system is not invertible.

Let's represent a system as an operator \(T\), where the output \(y(t)\) is a function of the input \(x(t)\), denoted as \(y(t) = T\{x(t)\}\).

To check for invertibility:

1.  **Assume Two Different Inputs:** Let \(x_1(t)\) and \(x_2(t)\) be two distinct input signals, such that \(x_1(t) \neq x_2(t)\) for at least some values of \(t\).
2.  **Assume Same Output:** Suppose both inputs produce the same output from the system:
    $$ T\{x_1(t)\} = y(t) $$
    $$ T\{x_2(t)\} = y(t) $$
    This implies:
    $$ T\{x_1(t)\} = T\{x_2(t)\} $$
3.  **Analyze the Difference:** Consider the difference between the two inputs, \(x_d(t) = x_1(t) - x_2(t)\). Since \(x_1(t) \neq x_2(t)\), then \(x_d(t) \neq 0\) for at least some \(t\).
4.  **Test the System with the Difference:** Now, let's see what happens when we apply the system to this difference signal \(x_d(t)\). If the system is **linear**, we can write:
    $$ T\{x_1(t) - x_2(t)\} = T\{x_1(t)\} - T\{x_2(t)\} $$
    Since we assumed \(T\{x_1(t)\} = T\{x_2(t)\}\), then:
    $$ T\{x_1(t) - x_2(t)\} = y(t) - y(t) = 0 $$
    So, for a linear system, if two different inputs produce the same output, then the difference between these inputs, when applied to the system, results in a zero output.

### Key Condition for Invertibility (for Linear Systems)

For a linear system, it is invertible if and only if the only input that produces a zero output is the zero input itself. In other words:

$$ \text{If } T\{x(t)\} = 0, \text{ then } x(t) = 0 \text{ for all } t $$

If we can find *any* non-zero input \(x(t)\) such that \(T\{x(t)\} = 0\), the system is not invertible.

## Worked Example

Let's consider a system with the input-output relationship:
$$ y(t) = x(t-1) $$
This is a simple time-delay system.

**Test for Invertibility:**

1.  **Assume two different inputs:** Let \(x_1(t)\) and \(x_2(t)\) be two distinct inputs.
2.  **Assume same output:** Suppose \(T\{x_1(t)\} = T\{x_2(t)\}\).
    $$ x_1(t-1) = x_2(t-1) $$
3.  **Analyze the difference:** Let \(u = t-1\). Then \(t = u+1\). The equation becomes:
    $$ x_1(u) = x_2(u) $$
    This equality holds for all \(u\). Since \(u\) can represent any time value, this means:
    $$ x_1(t) = x_2(t) \text{ for all } t $$
    Our initial assumption that \(x_1(t) \neq x_2(t)\) leads to a contradiction if they produce the same output. Therefore, if two inputs produce the same output, those inputs *must* have been identical.

**Conclusion:** The system \(y(t) = x(t-1)\) is **invertible**. The inverse system is \(x(t) = y(t+1)\), meaning if we shift the output forward by 1 unit of time, we recover the original input.

## Another Example (Non-Invertible System)

Consider a system where the output is the absolute value of the input:
$$ y(t) = |x(t)| $$

**Test for Invertibility:**

1.  **Assume two different inputs:** Let \(x_1(t) = 2\) and \(x_2(t) = -2\). These are clearly different inputs.
2.  **Assume same output:**
    $$ y_1(t) = T\{x_1(t)\} = |2| = 2 $$
    $$ y_2(t) = T\{x_2(t)\} = |-2| = 2 $$
    We see that \(y_1(t) = y_2(t)\), even though \(x_1(t) \neq x_2(t)\).

**Conclusion:** The system \(y(t) = |x(t)|\) is **not invertible**. We cannot uniquely determine whether the input was 2 or -2 just by looking at the output 2. Information about the sign of the input is lost.

## Summary of Invertibility Test

*   A system is invertible if distinct inputs always produce distinct outputs.
*   Mathematically, for a linear system, invertibility is equivalent to stating that the only input that produces a zero output is the zero input itself.
*   To test, assume two different inputs \(x_1(t)\) and \(x_2(t)\) produce the same output. If this forces \(x_1(t) = x_2(t)\), the system is invertible. If you can find \(x_1(t) \neq x_2(t)\) that produce the same output, it's not invertible.

Practice applying this test to various system descriptions to solidify your understanding.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/invertibility-system-verification|Invertibility System Verification]]
