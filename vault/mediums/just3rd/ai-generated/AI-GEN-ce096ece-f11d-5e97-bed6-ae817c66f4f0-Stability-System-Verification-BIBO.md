---
type: "medium"
title: "Stability System Verification (BIBO)"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/system-property-analysis/microskills/stability-system-verification-bibo|Stability System Verification (BIBO)]]"
---
# Stability System Verification (BIBO)

This lesson focuses on applying mathematical tests to determine if a system exhibits Bounded Input, Bounded Output (BIBO) stability. This is a crucial aspect of System Property Analysis, allowing us to understand how a system will behave under different input conditions.

## Understanding BIBO Stability

A system is considered BIBO stable if, for every bounded input signal, the output signal remains bounded. In simpler terms, if you feed a finite signal into a stable system, you will get a finite signal out. An unstable system, however, can produce an unbounded (growing infinitely large) output even for a bounded input.

Why is this important? In real-world applications, we want our systems to behave predictably. An unstable system can lead to erratic behavior, saturation, or even complete failure. Verifying BIBO stability helps us ensure reliability.

### Mathematical Definition

Consider a system described by its impulse response $h(t)$ (for continuous-time systems) or $h[n]$ (for discrete-time systems).

*   **Continuous-Time Systems:** A Linear Time-Invariant (LTI) system is BIBO stable if and only if its impulse response $h(t)$ is absolutely integrable, meaning:
    $$
    \int_{-\infty}^{\infty} |h(t)| \, dt < \infty
    $$

*   **Discrete-Time Systems:** An LTI system is BIBO stable if and only if its impulse response $h[n]$ is absolutely summable, meaning:
    $$
    \sum_{n=-\infty}^{\infty} |h[n]| < \infty
    $$

These conditions essentially state that the "energy" of the impulse response must be finite.

## Applying the Stability Test: Step-by-Step

The method for verifying BIBO stability often depends on how the system is represented. We'll cover common scenarios.

### Scenario 1: System Represented by its Impulse Response

This is the most direct application of the mathematical definition.

**When to Use:** When you are directly given the system's impulse response $h(t)$ or $h[n]$.

**Steps:**

1.  **Identify the impulse response:** Obtain $h(t)$ or $h[n]$.
2.  **Calculate the absolute value:** Find $|h(t)|$ or $|h[n]|$.
3.  **Integrate (continuous-time) or sum (discrete-time):** Compute the integral or summation of the absolute value over the entire range of the independent variable.
4.  **Interpret the result:**
    *   If the integral/sum is finite, the system is BIBO stable.
    *   If the integral/sum is infinite, the system is BIBO unstable.

**Worked Example (Discrete-Time):**

Let's consider a discrete-time system with the impulse response:
$$
h[n] = a^n u[n]
$$
where $u[n]$ is the unit step function and $a$ is a constant.

1.  **Impulse Response:** $h[n] = a^n u[n]$.
2.  **Absolute Value:** $|h[n]| = |a^n u[n]| = |a|^n u[n]$ (since $u[n] \ge 0$).
3.  **Summation:** We need to calculate $\sum_{n=-\infty}^{\infty} |a|^n u[n]$. Since $u[n]$ is zero for $n<0$, this sum becomes:
    $$
    \sum_{n=0}^{\infty} |a|^n
    $$
    This is a geometric series. The sum of an infinite geometric series $\sum_{n=0}^{\infty} r^n$ converges to $\frac{1}{1-r}$ if $|r| < 1$, and diverges if $|r| \ge 1$.

4.  **Interpretation:**
    *   If $|a| < 1$, the sum is $\frac{1}{1-|a|} < \infty$. The system is BIBO stable.
    *   If $|a| \ge 1$, the sum is infinite. The system is BIBO unstable.

**Worked Example (Continuous-Time):**

Consider a continuous-time system with the impulse response:
$$
h(t) = e^{-2t} u(t)
$$

1.  **Impulse Response:** $h(t) = e^{-2t} u(t)$.
2.  **Absolute Value:** $|h(t)| = |e^{-2t} u(t)| = e^{-2t} u(t)$ (since $e^{-2t} > 0$ for all $t$ and $u(t) \ge 0$).
3.  **Integration:** We need to calculate $\int_{-\infty}^{\infty} e^{-2t} u(t) \, dt$. Since $u(t)$ is zero for $t<0$, this integral becomes:
    $$
    \int_{0}^{\infty} e^{-2t} \, dt
    $$
    Evaluating the integral:
    $$
    \left[ -\frac{1}{2}e^{-2t} \right]_{0}^{\infty} = \lim_{t \to \infty} \left(-\frac{1}{2}e^{-2t}\right) - \left(-\frac{1}{2}e^{-2(0)}\right)
    $$
    $$
    = 0 - \left(-\frac{1}{2}\right) = \frac{1}{2}
    $$
4.  **Interpretation:** The integral is $\frac{1}{2}$, which is finite. Therefore, the system is BIBO stable.

### Scenario 2: System Represented by a Transfer Function (for LTI Systems)

For LTI systems, BIBO stability can also be determined from the system's transfer function $H(s)$ (continuous-time) or $H(z)$ (discrete-time).

**When to Use:** When the system is represented by its transfer function, typically derived from differential equations or difference equations.

**Key Concept:** For LTI systems, BIBO stability is equivalent to the condition that all poles of the transfer function lie in the left-half of the s-plane (for continuous-time systems) or inside the unit circle (for discrete-time systems).

**Steps:**

1.  **Obtain the transfer function:** $H(s)$ or $H(z)$.
2.  **Find the poles:** The poles are the roots of the denominator polynomial of the transfer function.
3.  **Check pole locations:**
    *   **Continuous-Time ($H(s)$):** All poles must have negative real parts (i.e., lie in the Left-Half Plane).
    *   **Discrete-Time ($H(z)$):** All poles must have a magnitude less than 1 (i.e., lie inside the Unit Circle).
4.  **Interpret the result:**
    *   If all poles satisfy the condition, the system is BIBO stable.
    *   If any pole violates the condition, the system is BIBO unstable.

**Worked Example (Continuous-Time Transfer Function):**

Consider a system with the transfer function:
$$
H(s) = \frac{s+1}{s^2 + 3s + 2}
$$

1.  **Transfer Function:** $H(s) = \frac{s+1}{s^2 + 3s + 2}$.
2.  **Poles:** The poles are the roots of the denominator $s^2 + 3s + 2 = 0$. Factoring the quadratic:
    $$
    (s+1)(s+2) = 0
    $$
    The poles are $s_1 = -1$ and $s_2 = -2$.
3.  **Pole Locations:**
    *   $s_1 = -1$: Real part is -1 (negative).
    *   $s_2 = -2$: Real part is -2 (negative).
4.  **Interpretation:** Both poles have negative real parts. Therefore, the system is BIBO stable.

**Worked Example (Discrete-Time Transfer Function):**

Consider a system with the transfer function:
$$
H(z) = \frac{z}{z - 0.5}
$$

1.  **Transfer Function:** $H(z) = \frac{z}{z - 0.5}$.
2.  **Poles:** The pole is the root of the denominator $z - 0.5 = 0$. The pole is $z_1 = 0.5$.
3.  **Pole Locations:**
    *   $z_1 = 0.5$: Magnitude is $|0.5| = 0.5$.
4.  **Interpretation:** The magnitude of the pole (0.5) is less than 1. Therefore, the system is BIBO stable.

Now consider another discrete-time system with $H(z) = \frac{1}{z - 2}$. The pole is at $z=2$. Since $|2| > 1$, this system is BIBO unstable.

## Common Mistakes to Avoid

*   **Confusing stability types:** Ensure you are specifically testing for BIBO stability. Other types of stability exist (e.g., internal stability).
*   **Incorrectly identifying poles:** Double-check your algebra when finding the roots of the denominator polynomial.
*   **Forgetting the absolute value:** For impulse responses, always integrate or sum the absolute value, not the original function.
*   **Misinterpreting pole locations:** Remember the specific criteria for continuous-time (Left-Half Plane) versus discrete-time (inside the Unit Circle).

By applying these mathematical tests, you can confidently determine whether a given system exhibits BIBO stability, a critical step in understanding its overall behavior and suitability for various applications.

## Supports

- [[skills/mathematics/system-property-analysis/microskills/stability-system-verification-bibo|Stability System Verification (BIBO)]]
