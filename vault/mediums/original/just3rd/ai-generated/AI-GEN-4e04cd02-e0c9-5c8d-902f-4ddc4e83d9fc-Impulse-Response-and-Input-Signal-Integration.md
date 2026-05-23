---
type: "medium"
title: "Integrating Impulse Response and Input Signal for LTI System Output"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/lti-system-analysis/microskills/impulse-response-and-input-signal-integration|impulse-response-and-input-signal-integration]]"
learning-time-in-minutes: 4
---
# Integrating Impulse Response and Input Signal for LTI System Output

This lesson focuses on the core mathematical operation behind analyzing Linear Time-Invariant (LTI) systems: integrating the product of the input signal and the time-reversed impulse response. This process is fundamental to understanding how an LTI system transforms an input signal into an output signal.

## The Convolution Integral: A Deeper Look

In the realm of LTI system analysis, the output signal $y(t)$ is directly related to the input signal $x(t)$ and the system's impulse response $h(t)$ through the convolution integral:

$$
y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau
$$

This formula might seem abstract at first. Let's break down the components and the integration process that makes it work.

### Understanding the Components:

*   **$x(\tau)$:** This represents the input signal, but we're considering it as a function of a dummy variable $\tau$.
*   **$h(t - \tau)$:** This is the crucial part. It's the impulse response $h$ that has been:
    *   **Time-reversed:** $h(-\tau)$
    *   **Time-shifted:** $h(t - \tau)$. The amount of shift is determined by $t$. As $t$ increases, the reversed impulse response shifts to the right.
*   **The Integral $\int_{-\infty}^{\infty} \dots d\tau$:** This means we are summing up the products of $x(\tau)$ and $h(t - \tau)$ over all possible values of $\tau$.

### The Integration Process: Visualizing the Overlap

Think of convolution as a process of "sliding and multiplying." For a specific output time $t$:

1.  **Reverse and Shift:** Take the impulse response $h(\tau)$ and reverse it to get $h(-\tau)$. Then, shift this reversed impulse response by $t$ units to the right, resulting in $h(t - \tau)$.
2.  **Multiply:** Multiply the input signal $x(\tau)$ with the shifted and reversed impulse response $h(t - \tau)$ point-by-point for all values of $\tau$.
3.  **Integrate:** Sum up all these products over all $\tau$. The result of this summation is the output $y(t)$ at that specific time $t$.

You repeat this process for every value of $t$ you want to find the output for.

## Worked Example: Integrating for a Specific Output Time

Let's consider a simple LTI system with an impulse response and an input signal.

**System:**
Impulse response: $h(t) = e^{-at} u(t)$, where $u(t)$ is the unit step function and $a > 0$.
Input signal: $x(t) = u(t)$.

We want to find the output $y(t)$ for a specific time, say $t=2$. Using the convolution integral:

$$
y(2) = \int_{-\infty}^{\infty} x(\tau) h(2 - \tau) d\tau
$$

Now, let's substitute our signals:
$x(\tau) = u(\tau)$
$h(2 - \tau) = e^{-a(2 - \tau)} u(2 - \tau)$

So the integral becomes:

$$
y(2) = \int_{-\infty}^{\infty} u(\tau) e^{-a(2 - \tau)} u(2 - \tau) d\tau
$$

Let's analyze the unit step functions to determine the limits of integration:

*   $u(\tau)$ is 1 for $\tau \ge 0$ and 0 otherwise.
*   $u(2 - \tau)$ is 1 for $2 - \tau \ge 0$, which means $\tau \le 2$, and 0 otherwise.

For the product $u(\tau) u(2 - \tau)$ to be non-zero (i.e., equal to 1), both conditions must be met: $\tau \ge 0$ AND $\tau \le 2$. Therefore, the integration limits are from $0$ to $2$.

$$
y(2) = \int_{0}^{2} 1 \cdot e^{-a(2 - \tau)} \cdot 1 d\tau
$$

Now, let's solve the integral:

$$
y(2) = \int_{0}^{2} e^{-2a + a\tau} d\tau
$$

$$
y(2) = e^{-2a} \int_{0}^{2} e^{a\tau} d\tau
$$

$$
y(2) = e^{-2a} \left[ \frac{1}{a} e^{a\tau} \right]_{0}^{2}
$$

$$
y(2) = e^{-2a} \left( \frac{1}{a} e^{2a} - \frac{1}{a} e^{0} \right)
$$

$$
y(2) = e^{-2a} \left( \frac{1}{a} e^{2a} - \frac{1}{a} \right)
$$

$$
y(2) = \frac{1}{a} - \frac{1}{a} e^{-2a}
$$

This process shows how we integrate the product of the input and the time-reversed, shifted impulse response to find the output at a specific time $t$. To find the complete output signal $y(t)$, you would perform this integration for all possible values of $t$.

### Common Pitfalls in Integration:

*   **Incorrect Limits of Integration:** Not correctly identifying the region where both $x(\tau)$ and $h(t-\tau)$ are non-zero.
*   **Errors in Time Reversal/Shifting:** Confusing $h(t-\tau)$ with $h(\tau-t)$ or other variations.
*   **Algebraic Mistakes:** Errors in simplifying the exponential terms or evaluating the definite integral.

By carefully applying the convolution integral and visualizing the time-reversal and shifting of the impulse response, you can successfully compute the output of any LTI system.

## Supports

- [[skills/mathematics/signals-systems/lti-system-analysis/microskills/impulse-response-and-input-signal-integration|Impulse Response and Input Signal Integration]]
