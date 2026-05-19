---
type: "medium"
title: "Continuous-Time Convolution: The Definition"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/lti-system-analysis/microskills/continuous-time-convolution-definition-recall|Continuous-Time Convolution Definition Recall]]"
---
# Continuous-Time Convolution: The Definition

This lesson focuses on recalling the mathematical definition of continuous-time convolution, a fundamental concept for analyzing Linear Time-Invariant (LTI) systems. Understanding this definition is the first step in applying convolution to find the output of an LTI system.

## What is Convolution?

Convolution is a mathematical operation that describes how the shape of one function is modified by another. In the context of LTI systems, it's how the system's impulse response "blends" with the input signal to produce the output signal.

Think of it like this: an impulse response $h(t)$ describes how an LTI system reacts to a very brief, sharp input (an impulse). When you apply a more complex input signal $x(t)$, the output $y(t)$ is essentially a sum (or integral, in the continuous-time case) of the system's responses to each infinitesimally small part of the input signal. Convolution mathematically captures this summing up of scaled and shifted impulse responses.

## The Mathematical Definition

The continuous-time convolution of two signals, $x(t)$ and $h(t)$, denoted by $x(t) * h(t)$, is defined by the following integral:

$$
y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau
$$

Let's break down this formula:

*   $y(t)$: This is the output signal we are trying to find. It's a function of time, $t$.
*   $x(t)$: This is the input signal to the system.
*   $h(t)$: This is the impulse response of the LTI system.
*   $\tau$ (tau): This is a dummy variable of integration. It represents time, but it's independent of the output time $t$.
*   $x(\tau)$: We are taking the input signal and evaluating it at time $\tau$.
*   $h(t - \tau)$: This is the crucial part. We are taking the impulse response, and instead of evaluating it at time $\tau$, we evaluate it at $(t - \tau)$. This means the impulse response is:
    *   **Flipped:** The term $h(-\tau)$ represents a time reversal of $h(\tau)$.
    *   **Shifted:** The term $h(t - \tau)$ represents a shift of the flipped impulse response by an amount $t$. The direction and amount of the shift depend on the value of $t$.
*   $\int_{-\infty}^{\infty} \dots d\tau$: This integral sums up the product of $x(\tau)$ and the shifted/flipped impulse response $h(t - \tau)$ over all possible values of $\tau$ (from negative infinity to positive infinity).

### The Intuition Behind the Formula

At a specific output time $t$, the integral is calculating the output $y(t)$ by considering the "overlap" between the input signal $x$ and the time-reversed and shifted impulse response $h$.

Imagine you are calculating $y(t)$ for a particular $t$. The term $h(t-\tau)$ means that as $\tau$ changes, the impulse response $h$ slides across the time axis. When $\tau$ is small, $h(t-\tau)$ is shifted far to the right. When $\tau$ is close to $t$, $h(t-\tau)$ is centered around zero. When $\tau$ is larger than $t$, $h(t-\tau)$ is shifted to the left of zero.

For each value of $\tau$, we multiply the value of the input signal at that time, $x(\tau)$, by the value of the flipped and shifted impulse response, $h(t-\tau)$. This product represents the contribution of the input at time $\tau$ to the output at time $t$. By integrating this product over all $\tau$, we sum up all these contributions to get the total output $y(t)$.

## An Alternative, Equivalent Definition

It's also important to know that convolution is commutative, meaning the order of the signals doesn't matter. The definition can be written equivalently as:

$$
y(t) = h(t) * x(t) = \int_{-\infty}^{\infty} h(\tau) x(t - \tau) d\tau
$$

In this version:

*   We evaluate the impulse response at time $\tau$: $h(\tau)$.
*   We take the input signal and flip and shift it: $x(t - \tau)$.
*   We integrate the product of these two over $\tau$.

This alternative form might be more convenient for certain problems, depending on the shapes of $x(t)$ and $h(t)$. The core idea of flipping one signal, shifting it, and integrating the product of the overlap remains the same.

## Key Takeaways for Definition Recall

*   Convolution is the operation that determines the output $y(t)$ of an LTI system from its input $x(t)$ and impulse response $h(t)$.
*   The standard definition is $y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau$.
*   The term $h(t - \tau)$ signifies that the impulse response is time-reversed and then shifted by $t$.
*   The integral sums the product of the input signal and the shifted/reversed impulse response over all possible time shifts.
*   Convolution is commutative: $x(t) * h(t) = h(t) * x(t)$.

Recalling this definition is crucial. The next steps in LTI system analysis will involve using this definition to practically compute the output signal.

## Supports

- [[skills/mathematics/lti-system-analysis/microskills/continuous-time-convolution-definition-recall|Continuous-Time Convolution Definition Recall]]
