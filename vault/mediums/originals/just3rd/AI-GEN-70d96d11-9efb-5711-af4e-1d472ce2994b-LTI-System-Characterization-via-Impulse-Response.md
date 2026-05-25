---
type: "medium"
title: "Understanding LTI Systems Through Their Impulse Response"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/lti-system-analysis/microskills/lti-system-characterization-via-impulse-response|lti-system-characterization-via-impulse-response]]"
related-skills:
  - "[[skills/mathematics/signals-systems/lti-system-analysis/lti-system-analysis|lti-system-analysis]]"
learning-time-in-minutes: 5
---
# Understanding LTI Systems Through Their Impulse Response

In the realm of Linear Time-Invariant (LTI) systems, the impulse response is a foundational concept. It acts as a unique fingerprint, capable of fully describing the behavior of any LTI system. This lesson focuses on how the impulse response characterizes these systems, laying the groundwork for analyzing and predicting system outputs.

## What is an Impulse Response?

The impulse response, often denoted by $h(t)$ for continuous-time systems or $h[n]$ for discrete-time systems, is the output of an LTI system when the input is the Dirac delta function, $\delta(t)$, or the Kronecker delta function, $\delta[n]$.

*   **Dirac Delta Function ($\delta(t)$):** This is an idealized signal that is zero everywhere except at time $t=0$, where it has an infinite amplitude but an area of exactly one.
    $$
    \delta(t) = \begin{cases} \infty & t=0 \\ 0 & t \neq 0 \end{cases}
    $$
    and
    $$ \int_{-\infty}^{\infty} \delta(t) dt = 1 $$

*   **Kronecker Delta Function ($\delta[n]$):** This is the discrete-time equivalent. It is 1 at $n=0$ and 0 for all other integer values of $n$.
    $$
    \delta[n] = \begin{cases} 1 & n=0 \\ 0 & n \neq 0 \end{cases}
    $$

### Why is the Impulse Response Important?

The impulse response is crucial because of the principle of **superposition** and **time-invariance** inherent in LTI systems.

1.  **Superposition:** For an LTI system, the response to a sum of inputs is the sum of the responses to each individual input.
2.  **Time-Invariance:** If the input is shifted in time, the output is also shifted by the same amount.

These properties allow us to express any input signal as a weighted sum of shifted impulses (in discrete time) or as an integral of scaled and shifted impulses (in continuous time). Consequently, the output of the system for any arbitrary input can be found by summing or integrating the corresponding scaled and shifted impulse responses. This relationship is known as **convolution**.

For a continuous-time LTI system:
$$ y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$

For a discrete-time LTI system:
$$ y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k] $$

Where:
*   $y(t)$ or $y[n]$ is the system output.
*   $x(t)$ or $x[n]$ is the system input.
*   $h(t)$ or $h[n]$ is the system's impulse response.
*   $*$ denotes the convolution operation.

This means that if you know the impulse response $h(t)$ or $h[n]$ of an LTI system, you can predict its output for *any* input signal by performing a convolution.

## Characterizing LTI Systems with the Impulse Response

The impulse response completely characterizes an LTI system because it captures all its internal dynamics. Different system descriptions (like differential equations or difference equations) can be transformed into their impulse responses. Once you have the impulse response, you can:

*   **Predict System Output:** As shown above, convolution with the impulse response gives the output for any input.
*   **Analyze System Properties:** The impulse response directly reveals key system properties:
    *   **Causality:** A system is causal if its output at any time depends only on present and past inputs. For a causal LTI system, its impulse response $h(t)$ must be zero for $t < 0$, and $h[n]$ must be zero for $n < 0$.
    *   **Stability (BIBO):** A system is Bounded-Input, Bounded-Output (BIBO) stable if every bounded input produces a bounded output. For a BIBO stable LTI system, its impulse response must be absolutely integrable (continuous-time) or absolutely summable (discrete-time).
        *   Continuous-time: $$ \int_{-\infty}^{\infty} |h(t)| dt < \infty $$
        *   Discrete-time: $$ \sum_{n=-\infty}^{\infty} |h[n]| < \infty $$
    *   **Memory:** If the impulse response is non-zero for times other than $t=0$ (or $n=0$), the system has memory. An ideal memoryless system has an impulse response of $h(t) = C \delta(t)$ (or $h[n] = C \delta[n]$) for some constant $C$.
    *   **Finite Impulse Response (FIR) vs. Infinite Impulse Response (IIR):** If the impulse response is non-zero for only a finite duration, the system is FIR. If it is non-zero for an infinite duration, the system is IIR.

## Example: Finding the Impulse Response from a Difference Equation

Consider a discrete-time LTI system described by the difference equation:
$$ y[n] - 0.5y[n-1] = x[n] $$

To find the impulse response $h[n]$, we set the input $x[n]$ to the Kronecker delta function, $\delta[n]$, and assume zero initial conditions. The system equation becomes:
$$ y[n] - 0.5y[n-1] = \delta[n] $$

We want to find $y[n]$ when $x[n] = \delta[n]$. This $y[n]$ will be our $h[n]$.

*   **For $n < 0$:** Since the input is $\delta[n]$ (which is 0 for $n < 0$) and we assume zero initial conditions, the output must be zero. So, $h[n] = 0$ for $n < 0$.

*   **At $n = 0$:**
    $$ h[0] - 0.5h[-1] = \delta[0] $$
    Since $h[-1] = 0$ and $\delta[0] = 1$, we get:
    $$ h[0] - 0.5(0) = 1 \implies h[0] = 1 $$

*   **For $n > 0$:** The input $\delta[n]$ is 0 for $n > 0$. So the difference equation becomes:
    $$ h[n] - 0.5h[n-1] = 0 \implies h[n] = 0.5h[n-1] $$
    This is a simple first-order linear recurrence relation.
    *   $h[1] = 0.5h[0] = 0.5(1) = 0.5$
    *   $h[2] = 0.5h[1] = 0.5(0.5) = (0.5)^2$
    *   $h[3] = 0.5h[2] = 0.5(0.5)^2 = (0.5)^3$
    In general, for $n > 0$, we have $h[n] = (0.5)^n$.

Combining these results, the impulse response is:
$$ h[n] = \begin{cases} (0.5)^n & n \ge 0 \\ 0 & n < 0 \end{cases} $$
This can also be written as $h[n] = (0.5)^n u[n]$, where $u[n]$ is the unit step function.

This impulse response $h[n]$ now fully characterizes the system. We can use it to determine the output for any input $x[n]$ by convolving $x[n]$ with $h[n]$. We can also see that this system is causal ($h[n]=0$ for $n<0$) and stable (since $\sum_{n=0}^{\infty} |(0.5)^n| = \frac{1}{1-0.5} = 2 < \infty$).

## Conclusion

The impulse response is a powerful tool for understanding and analyzing LTI systems. It acts as a complete system descriptor, allowing us to predict outputs through convolution and readily identify system properties like causality and stability. Mastering the concept of impulse response is a vital step in mastering LTI system analysis.

## Supports

- [[skills/mathematics/signals-systems/lti-system-analysis/microskills/lti-system-characterization-via-impulse-response|LTI System Characterization via Impulse Response]]
